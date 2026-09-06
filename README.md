# Portfolio — RAMAROTSIALONINA Tinasoa Jean Edouard

Portfolio personnel de **Tinasoa Jean Edouard RAMAROTSIALONINA**, développeur fullstack
basé à Antananarivo (Madagascar), spécialisé en développement web et en intelligence
artificielle.

🔗 **En ligne :** https://ramarotsialonina.github.io/Portfolio-Tsialonina/

---

## Aperçu

Site statique d'une seule page présentant le parcours, les compétences, les projets
et les formations, accompagné d'une version imprimable du CV.

| Page | Rôle |
|---|---|
| `index.html` | Portfolio : accueil, compétences, expériences, projets, diplômes, contact |
| `CV_Professionnel.html` | CV complet, mise en page deux colonnes et styles d'impression |
| `mon_cv.pdf` | CV exporté en PDF (2 pages), généré depuis la page ci-dessus |

## Fonctionnalités

- **Thème clair / sombre** avec préférence mémorisée
- **Responsive** jusqu'à 360 px de large
- **Filtrage des projets** par technologie
- **Fiches détaillées** en modale : pile technique et fonctionnalités par catégorie
- **Animations au défilement**, respectant `prefers-reduced-motion`
- **Accessibilité** : repères ARIA, libellés de formulaire, textes alternatifs
- **Version imprimable** du CV, avec un repli sans JavaScript sur le portfolio

## Technologies

Site volontairement sans dépendance de build : HTML5, CSS3 et JavaScript natif.

| Couche | Technologie |
|---|---|
| Structure | HTML5 sémantique |
| Styles | CSS3 — variables personnalisées, Grid, Flexbox |
| Interactions | JavaScript (ES6+), `IntersectionObserver` |
| Contenu | `data.js` — source unique des projets, compétences et expériences |
| Icônes | Font Awesome 6 |
| Police | Poppins (Google Fonts) |
| Déploiement | GitHub Pages (GitHub Actions) |

## Structure

```
.
├── index.html              # Portfolio
├── CV_Professionnel.html   # CV (écran + impression)
├── data.js                 # Contenu : projets, compétences, expériences, diplômes
├── script.js               # Rendu du contenu, filtres, modales, animations
├── style.css               # Design system et mise en page
├── mon_cv.pdf              # CV exporté
└── photo_profil.jpg
```

Le contenu est séparé de la présentation : **pour ajouter un projet ou une expérience,
il suffit de modifier `data.js`** — aucune modification du HTML n'est nécessaire.

## Développement en local

Aucune installation requise. Servez le dossier avec un serveur statique
(l'ouverture directe du fichier empêcherait le chargement de la photo et des scripts) :

```bash
python -m http.server 8000
```

Puis ouvrez http://localhost:8000.

## Régénérer le PDF du CV

Le PDF est produit à partir de `CV_Professionnel.html`, qui embarque ses propres
styles d'impression :

```bash
chrome --headless=new --no-pdf-header-footer \
       --print-to-pdf=mon_cv.pdf \
       http://localhost:8000/CV_Professionnel.html
```

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/jekyll-gh-pages.yml`
qui publie le site sur GitHub Pages.

## Contact

- **Email** — tsialoninajeanedouard@gmail.com
- **LinkedIn** — [Tsialonina Jean Edouard](https://www.linkedin.com/in/TsialoninaJeanEdouard)
- **GitHub** — [@RAMAROTSIALONINA](https://github.com/RAMAROTSIALONINA)
