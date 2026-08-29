// Typing animation
const titles = [
  "Architecte Logiciel & DevOps",
  "Développeur Full Stack & Mobile",
  "Flutter · Laravel · React · C#",
  "SIG · IA · Robotique"
];
let ti = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-title');
function type() {
  const cur = titles[ti];
  if (!deleting) {
    el.innerHTML = cur.slice(0,ci+1)+'<span class="cursor"></span>';
    ci++;
    if(ci===cur.length){deleting=true;setTimeout(type,2000);return;}
  } else {
    el.innerHTML = cur.slice(0,ci-1)+'<span class="cursor"></span>';
    ci--;
    if(ci===0){deleting=false;ti=(ti+1)%titles.length;}
  }
  setTimeout(type,deleting?40:80);
}
type();

// Toggle project details
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  const open = details.classList.toggle('open');
  btn.textContent = open ? '▼ Voir moins' : '▶ Voir plus';
}

// Toggle experience tasks
function toggleTasks(btn) {
  const tasks = btn.nextElementSibling;
  const open = tasks.classList.toggle('open');
  btn.textContent = open ? '▼ Masquer les tâches' : '▶ Voir les tâches';
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
