# moseswisegit.github.io

Portfolio personnel de Moïse Innocent Agbossaga, développeur logiciel Full Stack, Cloud et IA.

Site en ligne : https://moseswisegit.github.io/

## Structure

```
.
├── index.html            Page unique : hero, projets (ULconnect en vedette), compétences, expérience, formation, parcours IA, contact
├── cv/                   CV en PDF (CV_Agbossaga_Moise_Final.pdf)
├── assets/
│   ├── css/style.css     Variables (couleurs, typographie, espacements) en tête de fichier, puis composants
│   ├── js/main.js        Bascule de thème, menu mobile, apparition au défilement
│   ├── fonts/            Fraunces et Inter (woff2, sous-ensemble latin, licence OFL)
│   └── img/              Favicon, photo (JPG + WebP), captures d'ULconnect (img/ulconnect/)
└── README.md
```

HTML, CSS et JavaScript natifs, sans dépendance ni outil de build. Le site est publié tel quel par GitHub Pages (branche `main`, racine).

## Prévisualiser en local

```
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Modifier le contenu

Tout le texte est dans `index.html`, une section par bloc commenté (`<!-- 01 · PROJETS -->`, `<!-- 03 · EXPÉRIENCE -->`, etc.).

- **Expérience** : chaque poste est un `<li class="job">` dans `<ol class="timeline">`. Copier un bloc existant pour en ajouter un.
- **Compétences** : une `<div class="card">` par groupe, une pastille `<li>` par compétence.
- **Règles de rédaction** : pas de tiret long, pas d'emoji, pas de numéro de téléphone dans la page.

## Changer la couleur d'accent

Dans `assets/css/style.css`, modifier la ligne `--brand: #1A5276;`. La variante du mode sombre en est dérivée automatiquement dans les navigateurs récents. Sinon, ajuster aussi la valeur de repli `--accent: #86B8DC;` dans les deux blocs du thème sombre.

## Remplacer le CV

Remplacer `cv/CV_Agbossaga_Moise_Final.pdf` en gardant exactement le même nom : les boutons « Télécharger mon CV » pointent vers ce fichier.

## Ajouter ou remplacer des captures d'ULconnect

1. Exporter chaque écran mobile en PNG ou JPG (idéalement 780 × 1688, soit le ratio 390 × 844).
2. Convertir en WebP, en deux tailles :
   ```
   cwebp -q 78 -resize 390 0 ecran.png -o assets/img/ulconnect/NN-nom.webp
   cwebp -q 78 -resize 220 0 ecran.png -o assets/img/ulconnect/NN-nom-220.webp
   ```
3. Dans `index.html`, copier un `<li class="phone">` de la galerie, puis adapter `src`, `srcset` et surtout le texte `alt`, qui doit décrire l'écran.
4. Les images actuelles sont des maquettes de conception (données fictives). La légende de la galerie le précise : à mettre à jour si elles sont remplacées par de vraies captures.

## Publier

```
git add -A
git commit -m "message qui explique le pourquoi"
git push origin main
```

GitHub Pages republie le site en une à deux minutes.
