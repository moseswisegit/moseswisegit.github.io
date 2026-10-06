(function () {
  var root = document.documentElement;

  // Thème : bascule clair / sombre, choix mémorisé
  var themeBtn = document.getElementById('themeToggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() {
    return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  }
  function syncThemeButton() {
    var dark = currentTheme() === 'dark';
    themeBtn.setAttribute('aria-label', dark ? 'Activer le thème clair' : 'Activer le thème sombre');
    var meta = document.querySelectorAll('meta[name="theme-color"]');
    meta.forEach(function (m) { m.setAttribute('content', dark ? '#141518' : '#FAFAF7'); });
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeButton();
    });
    if (media.addEventListener) media.addEventListener('change', syncThemeButton);
    syncThemeButton();
  }

  // Menu mobile
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  function setMenu(open, returnFocus) {
    navLinks.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    if (!open && returnFocus) navToggle.focus();
  }
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
  }

  // Apparition au défilement, une seule fois
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
