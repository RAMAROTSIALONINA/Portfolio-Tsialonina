const portfolioData = {
    projets: [
        {
            id: "projet-4",
            titre: "Site web de l'EGRIE",
            description: "Developpeur Web Fullstack - Conception et developpement du site web officiel de l'etablissement EGRIE realise en 2022.",
            technologies: ["PHP", "CodeIgniter 3", "SQLite"],
            details: "Developpeur Web Fullstack - Conception et developpement du site web officiel de l'etablissement EGRIE realise en 2022. Role : Responsable du developpement front-end et de l'integration des fonctionnalites. Technologies : Utilisation de PHP avec le framework CodeIgniter 3 pour la robustesse et la securite."
        },
        {
            id: "projet-3",
            titre: "Gestion d'etablissement en Java",
            description: "Projet de fin d'etude (Licence). Application desktop de gestion des etudiants, enseignants, notes, absences et emplois du temps. Interface JavaFX, logique metier Java, base de donnees MySQL.",
            technologies: ["Java", "JavaFX", "MySQL"],
            details: "Projet de fin d'etude pour l'obtention du diplome de licence realise en 2023. Application desktop complete de gestion d'etablissement scolaire. Interface graphique realisee en JavaFX, logique metier en Java pur, donnees stockees dans MySQL. Fonctionnalites : gestion des etudiants et enseignants, suivi des notes et absences, gestion des emplois du temps."
        },
        {
            id: "projet-5",
            titre: "Projet sur l'intelligence artificielle",
            description: "Projet d'etude axe sur l'exploration de l'IA et des reseaux de neurones realise en 2024.",
            technologies: ["IA", "Anaconda", "Python"],
            details: "Projet d'etude axe sur l'exploration de l'IA et des reseaux de neurones realise en 2024. Objectif : Comprendre le fonctionnement et les applications des modeles predictifs. Technologie : Realise avec Python et la plateforme Anaconda pour gerer les bibliotheques et l'environnement de developpement."
        },
        {
            id: "projet-2",
            titre: "Detecteur de fichiers",
            description: "Developpement d'un logiciel de detection de fichiers base sur l'intelligence artificielle pour l'identification de documents malveillants realise en 2024.",
            technologies: ["IA", "Python", "Pandas", "NumPy"],
            details: "Developpement d'un logiciel de detection de fichiers base sur l'intelligence artificielle pour l'identification de documents malveillants realise en 2024. Defi : Creer un modele d'IA efficace avec une faible consommation de ressources. Resultat : Un taux de detection de 95% sur les donnees de test, prouvant la performance de l'algorithme."
        },
        {
            id: "projet-1",
            titre: "Logiciel de gestion de vehicule",
            description: "Creation d'un logiciel pour la gestion de vehicules de Toutadom au sein de Swiss Madagascar realise en 2025.",
            technologies: ["Python", "PostgreSQL"],
            details: "Creation d'un logiciel pour la gestion de vehicules de Toutadom au sein de Swiss Madagascar realise en 2025. Role : Developpement complet du back-end et de la base de donnees. Resultat : Optimisation du suivi et de la maintenance des vehicules, reduisant les erreurs de 20%."
        },
        {
            id: "projet-6",
            titre: "Plateforme TELEX — Television Etudiante",
            url: "http://telex.mg/",
            description: "Plateforme web complete pour une television etudiante realisee en 2025 : gestion de programmes TV, module spirituel Baume de la Foi, interface multilingue FR/EN, systeme admin avec roles, upload medias et conformite RGPD.",
            technologies: ["Node.js", "Express.js", "EJS", "SQLite3", "Bootstrap 5", "JavaScript", "Multer", "JWT"],
            stack: [
                { couche: "Backend",        techno: "Node.js + Express.js",       usage: "Serveur web, routing, middleware" },
                { couche: "Base de donnees",techno: "SQLite3",                    usage: "Stockage persistant des donnees" },
                { couche: "Templates",      techno: "EJS",                        usage: "Rendu server-side des pages" },
                { couche: "Frontend",       techno: "Bootstrap 5 + Font Awesome", usage: "Interface responsive et moderne" },
                { couche: "Sessions",       techno: "express-session + bcryptjs", usage: "Authentification et securite" },
                { couche: "Upload",         techno: "Multer",                     usage: "Gestion fichiers images/videos" },
                { couche: "Traduction",     techno: "simple-language.js",         usage: "Multilingue FR/EN" },
                { couche: "Email",          techno: "Nodemailer",                 usage: "Notifications et contact" }
            ],
            fonctionnalites: [
                { categorie: "Media TV",      items: "Gestion programmes TV, planning automatique, actualites avec medias, galerie photos/videos, analytics vues" },
                { categorie: "Site Web",      items: "Interface responsive, multilingue FR/EN, SEO avec slugs, partage reseaux sociaux, newsletter" },
                { categorie: "Spirituel",     items: "Module Baume de la Foi : prieres quotidiennes, temoignages utilisateurs, reflexions spirituelles avec validation" },
                { categorie: "Administration",items: "Interface admin complete, roles admin/superadmin, CRUD toutes donnees, upload medias, statistiques" },
                { categorie: "Technique",     items: "Sessions securisees, validation formulaires, gestion erreurs, RGPD cookies, systeme de migrations automatiques" },
                { categorie: "User Experience",items: "Design mobile-first, animations, flash messages, navigation intuitive, recherche avancee" }
            ],
            details: "TELEX est une plateforme web fullstack dediee a une television etudiante moderne et entierement fonctionnelle. Elle repose sur une architecture Node.js + Express.js + EJS + SQLite3, avec Bootstrap 5 pour un rendu responsive et un systeme de traduction integre Francais/Anglais. La plateforme combine des fonctionnalites medias TV completes avec un module spirituel original Baume de la Foi regroupant prieres, temoignages et reflexions. L'ensemble est pilote par une interface d'administration complete a gestion de roles (admin / superadmin), offrant upload de medias, planning d'emissions, analytics et conformite RGPD."
        },
        {
            id: "projet-7",
            titre: "Bourbon Morelli — Plateforme E-Commerce Luxe",
            description: "Plateforme e-commerce haut de gamme valorisant l'artisanat malgache et l'elegance francaise realisee en 2026. Confection sur mesure, design Made in Madagascar et experience utilisateur premium.",
            technologies: ["React", "JavaScript", "Node.js", "Express.js", "MySQL", "TailwindCSS", "JWT", "Webpack"],
            stack: [
                { couche: "Frontend", techno: "React + JavaScript", usage: "Interface utilisateur" },
                { couche: "Backend",  techno: "Node.js + Express",  usage: "API REST" },
                { couche: "Database", techno: "MySQL",              usage: "Stockage donnees" },
                { couche: "Styling",  techno: "TailwindCSS",        usage: "Design responsive" },
                { couche: "Auth",     techno: "JWT",                usage: "Securite" },
                { couche: "Build",    techno: "Webpack",            usage: "Optimisation" }
            ],
            fonctionnalites: [
                { categorie: "E-Commerce", items: "Catalogue, Panier, Commandes, Paiement" },
                { categorie: "Gestion",    items: "Admin, Produits, Clients, Stocks" },
                { categorie: "Contenu",    items: "Pages dynamiques, Footer, Images" },
                { categorie: "Experience", items: "Design responsive, Animations, Accessibilite" },
                { categorie: "Securite",   items: "Authentification, Permissions, Validation" },
                { categorie: "Support",    items: "Contact, FAQ, Documentation" }
            ],
            details: "Plateforme e-commerce premium Bourbon Morelli alliant artisanat malgache et elegance francaise. Fonctionnalites : confection sur mesure, options de personnalisation produits, interface haut de gamme, service client premium. Stack technique : React + Node.js/Express (API REST), MySQL, TailwindCSS, authentification JWT, build optimise via Webpack."
        }
    ],
    competences: [
        {
            id: "competence-1",
            titre: "Langages de programmation",
            details: [
                { label: "Front-end", value: "HTML5, CSS3, JavaScript, React, Bootstrap" },
                { label: "Back-end",  value: "Java, Python, C++, PHP, Node.js, Express.js" }
            ],
            niveaux: [
                { nom: "Python",     pct: 90 },
                { nom: "JavaScript", pct: 85 },
                { nom: "Java",       pct: 80 },
                { nom: "Node.js",    pct: 78 },
                { nom: "PHP",        pct: 72 },
                { nom: "C++",        pct: 60 }
            ],
            tags: ["Java", "Python", "C++", "PHP", "HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Node.js", "Express.js"]
        },
        {
            id: "competence-2",
            titre: "Bases de donnees",
            details: [
                { label: "Langage", value: "SQL" },
                { label: "Types",   value: "MySQL, PostgreSQL, SQLite" }
            ],
            niveaux: [
                { nom: "SQL",        pct: 85 },
                { nom: "MySQL",      pct: 80 },
                { nom: "PostgreSQL", pct: 78 },
                { nom: "SQLite",     pct: 75 }
            ],
            tags: ["SQL", "MySQL", "PostgreSQL", "SQLite"]
        },
        {
            id: "competence-3",
            titre: "IA et Analyse de donnees",
            details: [
                { label: "Formation", value: "Intelligence Artificielle et Reseaux de Neurones" },
                { label: "Outils",    value: "Python, Pandas, NumPy" },
                { label: "Methodes",  value: "ACP, AFC, Modeles predictifs" }
            ],
            niveaux: [
                { nom: "Pandas",  pct: 82 },
                { nom: "NumPy",   pct: 78 },
                { nom: "ML / IA", pct: 72 }
            ],
            tags: ["Pandas", "NumPy", "Anaconda", "Machine Learning"]
        },
        {
            id: "competence-4",
            titre: "Outils & Divers",
            details: [
                { label: "Competences", value: "Calcul Stochastique (R), Operateur de saisie, Conception graphique (Photoshop), OCR, Maintenance informatique" }
            ],
            niveaux: [
                { nom: "Photoshop", pct: 70 },
                { nom: "OCR",       pct: 68 },
                { nom: "R (Stats)", pct: 62 }
            ],
            tags: ["Calcul Stochastique (R)", "Photoshop", "OCR", "Maintenance informatique"]
        }
    ],
    experiences: [
        {
            id: "exp-2",
            poste: "Developpeur Web Fullstack",
            entreprise: "EGRIE",
            periode: "2022",
            type: "Stage",
            lieu: "Madagascar",
            description: "Conception et developpement du site web officiel de l'etablissement EGRIE avec PHP et le framework CodeIgniter 3.",
            technologies: ["PHP", "CodeIgniter 3", "SQLite"],
            accomplissements: [
                "Responsable du developpement front-end et back-end",
                "Integration des fonctionnalites metiers de l'etablissement",
                "Mise en production et maintenance du site officiel",
                "Utilisation du framework CodeIgniter 3 pour la robustesse et la securite"
            ]
        },
        {
            id: "exp-1",
            poste: "Developpeur Logiciel",
            entreprise: "Swiss Madagascar (Toutadom)",
            periode: "2023 — 2024",
            type: "Mission professionnelle",
            lieu: "Antananarivo, Madagascar",
            description: "Developpement complet d'un logiciel de gestion de vehicules pour la societe Toutadom au sein de Swiss Madagascar.",
            technologies: ["Python", "PostgreSQL"],
            accomplissements: [
                "Conception et developpement du back-end complet en Python",
                "Modelisation et gestion de la base de donnees PostgreSQL",
                "Optimisation du suivi et de la maintenance des vehicules",
                "Reduction des erreurs de gestion de 20%"
            ]
        },
        {
            id: "exp-3",
            poste: "Developpeur Fullstack — Plateforme TELEX",
            entreprise: "TELEX — Télévision Étudiante",
            periode: "2025",
            type: "Projet academique & production",
            lieu: "Madagascar",
            description: "Developpement complet de la plateforme web de la chaine de television etudiante TELEX, desormais en ligne sur telex.mg.",
            technologies: ["Node.js", "Express.js", "EJS", "SQLite3", "Bootstrap 5"],
            accomplissements: [
                "Architecture fullstack Node.js + Express.js + EJS + SQLite3",
                "Systeme multilingue Francais / Anglais integre",
                "Module spirituel Baume de la Foi (prieres, temoignages, reflexions)",
                "Interface admin complete avec roles admin / superadmin",
                "Mise en ligne sur le domaine telex.mg"
            ]
        },
        {
            id: "exp-4",
            poste: "Developpeur Fullstack",
            entreprise: "Bourbon Morelli — Plateforme E-Commerce Luxe",
            periode: "2026",
            type: "Projet e-commerce",
            lieu: "Madagascar",
            description: "Developpement d'une plateforme e-commerce haut de gamme valorisant l'artisanat malgache et l'elegance francaise.",
            technologies: ["React", "Node.js", "Express.js", "MySQL", "TailwindCSS"],
            accomplissements: [
                "Conception d'une interface utilisateur premium avec React",
                "Developpement d'une API REST robuste avec Node.js/Express",
                "Integration d'un systeme de paiement securise",
                "Optimisation de l'experience utilisateur mobile-first"
            ]
        }
    ],
    diplomes: [
        {
            id: "diplome-1",
            titre: "Master II en Ingenierie",
            annee: "2023-2024",
            etablissement: "Polytechnique d'Antananarivo",
            details: [
                { label: "Mention",        value: "ISA (Ingenierie de Systeme Avance)" },
                { label: "Parcours",       value: "Ingenierie en Sciences Cognitives" },
                { label: "Titre de projet",value: "Plateforme d'apprentissage adaptatif basee sur l'IA" }
            ]
        },
        {
            id: "diplome-2",
            titre: "Licence Professionnelle en Genie Logiciel",
            annee: "2022-2023",
            etablissement: "Université d'Amoron'i Mania",
            details: [
                { label: "Mention",        value: "Informatique" },
                { label: "Parcours",       value: "Genie logiciel" },
                { label: "Titre de projet",value: "Gestion d'etablissement public" }
            ]
        },
        {
            id: "diplome-3",
            titre: "Baccalaureat serie D",
            annee: "2018-2019",
            etablissement: "Lycee Generale d'Ambadiki Manangana",
            details: [
                { label: "Serie",      value: "Serie D" },
                { label: "Specialite",value: "Sciences experimentales" }
            ]
        },
        {
            id: "diplome-4",
            titre: "Formation en Initiation a l'IoT",
            annee: "2022-2023",
            etablissement: "Certifie",
            details: [
                { label: "Periode", value: "2022-2023" },
                { label: "Details", value: "Formation certifiante axee sur les concepts de base et la mise en oeuvre des objets connectes. Competences acquises en programmation de microcontroleurs et en communication entre les appareils." }
            ]
        },
        {
            id: "diplome-5",
            titre: "Formation en Arduino",
            annee: "2021-2022",
            etablissement: "Certifie",
            details: [
                { label: "Periode", value: "2021-2022" },
                { label: "Details", value: "Cours pratique sur l'utilisation de la plateforme Arduino pour la creation de prototypes electroniques. Apprentissage de la programmation de cartes Arduino pour controler des capteurs et des actionneurs." }
            ]
        }
    ],
    contact: [
        { type: "email",     value: "tsialoninajeanedouard@gmail.com" },
        { type: "phone",     value: "0346503454 / 0337514453" },
        { type: "whatsapp",  value: "0331933390" },
        { type: "linkedin",  value: "Tsialonina Jean Edouard" },
        { type: "github",    value: "RAMAROTSIALONINA", url: "https://github.com/RAMAROTSIALONINA" },
        { type: "facebook",  value: "TsialoninaIsmael" },
        { type: "instagram", value: "Tsialonina Jean" }
    ],
    langues: [
        { nom: "Malgache", niveau: "Langue maternelle", pct: 100, flag: "MG" },
        { nom: "Français", niveau: "Courant — C1",      pct: 90,  flag: "FR" },
        { nom: "Anglais",  niveau: "Technique — B1",    pct: 65,  flag: "EN" }
    ],
    softSkills: [
        { nom: "Rigueur & Précision",     icone: "fas fa-bullseye" },
        { nom: "Travail en équipe",       icone: "fas fa-users" },
        { nom: "Adaptabilité",            icone: "fas fa-sync-alt" },
        { nom: "Résolution de problèmes", icone: "fas fa-lightbulb" },
        { nom: "Communication",           icone: "fas fa-comments" },
        { nom: "Autonomie",               icone: "fas fa-user-check" },
        { nom: "Créativité",              icone: "fas fa-paint-brush" },
        { nom: "Gestion du temps",        icone: "fas fa-clock" }
    ],
    stats: [
        { valeur: 7,  suffix: "+", label: "Projets réalisés",        icone: "fas fa-code-branch" },
        { valeur: 3,  suffix: "+", label: "Ans d'expérience",        icone: "fas fa-briefcase" },
        { valeur: 15, suffix: "+", label: "Technologies maîtrisées", icone: "fas fa-layer-group" },
        { valeur: 95, suffix: "%", label: "Taux détection IA",       icone: "fas fa-robot" }
    ]
};
