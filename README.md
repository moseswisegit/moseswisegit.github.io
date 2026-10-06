# moseswisegit.github.io

Portfolio personnel de Moïse Innocent Agbossaga, développeur logiciel Full Stack, Cloud et IA.

Site en ligne : https://moseswisegit.github.io/

## Structure

```
.
├── index.html          Page unique (hero, ULconnect, autres projets, compétences, expérience, formation, parcours IA, contact)
├── cv/                 CV en PDF (CV_Agbossaga_Moise_Final.pdf)
├── assets/
│   ├── css/style.css   Styles (variables CSS, sections, responsive)
│   ├── js/main.js      Menu mobile, apparition des sections au défilement
│   └── img/            Favicon et photo (JPG + WebP)
└── README.md
```

Pas de build : le site est publié tel quel par GitHub Pages (branche `main`, racine).

## Prévisualiser en local

```
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Mettre à jour

- **Contenu** (projets, expérience, compétences) : modifier directement les sections correspondantes dans `index.html`.
- **CV** : remplacer `cv/CV_Agbossaga_Moise_Final.pdf` (garder le même nom pour ne pas casser les liens).
- **Styles** : `assets/css/style.css`.
- **Comportement** : `assets/js/main.js`.

Chaque changement de contenu ou de comportement est commité séparément, avec un message décrivant le *pourquoi* du changement, pas seulement le *quoi*.
