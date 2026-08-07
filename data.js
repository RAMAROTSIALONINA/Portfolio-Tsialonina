const portfolioData = {
    projets: [
        {
            id: "projet-4",
            titre: "Site web de l'EGRIE",
            annee: "2022", role: "Fullstack", statut: "termine",
            description: "Developpeur Web Fullstack - Conception et developpement du site web officiel de l'etablissement EGRIE realise en 2022.",
            technologies: ["PHP", "CodeIgniter 3", "SQLite"],
            details: "Developpeur Web Fullstack - Conception et developpement du site web officiel de l'etablissement EGRIE realise en 2022. Role : Responsable du developpement front-end et de l'integration des fonctionnalites. Technologies : Utilisation de PHP avec le framework CodeIgniter 3 pour la robustesse et la securite."
        },
        {
            id: "projet-3",
            titre: "Gestion d'etablissement en Java",
            annee: "2023", role: "Desktop", statut: "termine",
            description: "Projet de fin d'etude (Licence). Application desktop de gestion des etudiants, enseignants, notes, absences et emplois du temps. Interface JavaFX, logique metier Java, base de donnees MySQL.",
            technologies: ["Java", "JavaFX", "MySQL"],
            details: "Projet de fin d'etude pour l'obtention du diplome de licence realise en 2023. Application desktop complete de gestion d'etablissement scolaire. Interface graphique realisee en JavaFX, logique metier en Java pur, donnees stockees dans MySQL. Fonctionnalites : gestion des etudiants et enseignants, suivi des notes et absences, gestion des emplois du temps."
        },
        {
            id: "projet-5",
            titre: "Projet sur l'intelligence artificielle",
            annee: "2024", role: "IA / Data", statut: "termine",
            description: "Projet d'etude axe sur l'exploration de l'IA et des reseaux de neurones realise en 2024.",
            technologies: ["IA", "Anaconda", "Python"],
            details: "Projet d'etude axe sur l'exploration de l'IA et des reseaux de neurones realise en 2024. Objectif : Comprendre le fonctionnement et les applications des modeles predictifs. Technologie : Realise avec Python et la plateforme Anaconda pour gerer les bibliotheques et l'environnement de developpement."
        },
        {
            id: "projet-2",
            titre: "Detecteur de fichiers",
            annee: "2024", role: "IA", statut: "termine",
            description: "Developpement d'un logiciel de detection de fichiers base sur l'intelligence artificielle pour l'identification de documents malveillants realise en 2024.",
            technologies: ["IA", "Python", "Pandas", "NumPy"],
            details: "Developpement d'un logiciel de detection de fichiers base sur l'intelligence artificielle pour l'identification de documents malveillants realise en 2024. Defi : Creer un modele d'IA efficace avec une faible consommation de ressources. Resultat : Un taux de detection de 95% sur les donnees de test, prouvant la performance de l'algorithme."
        },
        {
            id: "projet-1",
            titre: "Logiciel de gestion de vehicule",
            annee: "2025", role: "Backend", statut: "termine",
            description: "Creation d'un logiciel pour la gestion de vehicules de Toutadom au sein de Swiss Madagascar realise en 2025.",
            technologies: ["Python", "PostgreSQL"],
            details: "Creation d'un logiciel pour la gestion de vehicules de Toutadom au sein de Swiss Madagascar realise en 2025. Role : Developpement complet du back-end et de la base de donnees. Resultat : Optimisation du suivi et de la maintenance des vehicules, reduisant les erreurs de 20%."
        },
        {
            id: "projet-6",
            titre: "Plateforme TELEX — Television Etudiante",
            annee: "2025", role: "Fullstack", statut: "en-ligne",
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
            annee: "2026", role: "Fullstack", statut: "en-ligne",
            url: "https://bourbonmorelli.com/",
            description: "Plateforme e-commerce haut de gamme valorisant l'artisanat malgache et l'elegance francaise realisee en 2026, en ligne sur bourbonmorelli.com. Confection sur mesure, design Made in Madagascar et experience utilisateur premium.",
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
        },
        {
            id: "projet-8",
            titre: "SGCI — Systeme de Gestion et Controle Integre",
            annee: "2026", role: "Fullstack", statut: "developpement",
            description: "Plateforme de digitalisation de la chaine d'approvisionnement pour la restauration multi-sites (Antananarivo) realisee en 2026 : inventaires par seuil, stocks centraux, validation financiere et audit, sur une architecture modulaire NestJS + Prisma + PostgreSQL.",
            technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "BullMQ", "Redis", "React", "Vite"],
            stack: [
                { couche: "Backend",          techno: "NestJS + TypeScript",     usage: "API modulaire et logique metier" },
                { couche: "ORM",              techno: "Prisma",                  usage: "Modelisation et migrations de schema" },
                { couche: "Base de donnees",  techno: "PostgreSQL 17",           usage: "Stockage transactionnel (montants en Decimal)" },
                { couche: "Files d'attente",  techno: "BullMQ + Redis",          usage: "Traitements asynchrones et taches de fond" },
                { couche: "Frontend",         techno: "React + Vite",            usage: "Interface d'administration et operationnelle" },
                { couche: "Securite",         techno: "RBAC (roles/permissions)",usage: "Authentification et gestion fine des droits" },
                { couche: "Tracabilite",      techno: "audit_log immuable",      usage: "Journal d'audit en ecriture seule, soft delete" }
            ],
            fonctionnalites: [
                { categorie: "Approvisionnement", items: "Inventaire multi-sites STOCK / SEUIL / APPRO, reapprovisionnement par seuil (APPRO = SEUIL - STOCK), alertes de rupture" },
                { categorie: "Sites",             items: "Inventaires, pertes et receptions par site (Isoraka, Bypass, C2A, Ivato)" },
                { categorie: "Stocks centraux",   items: "Module C2A : gestion des stocks centraux, ruptures et generation des BILL" },
                { categorie: "Fiche Technique",   items: "Referentiel produits, coefficients de marge, departements et rayons/fournisseurs" },
                { categorie: "Finance (UBS)",     items: "Validation budgetaire, tresorerie et comptabilite en Decimal (aucun flottant)" },
                { categorie: "Controle (ACR)",    items: "Controle, audit et tracabilite complete via journal immuable" },
                { categorie: "Socle",             items: "Utilisateurs, roles, permissions, notifications et securite transverse" }
            ],
            details: "SGCI (Systeme de Gestion et Controle Integre) digitalise la chaine d'approvisionnement d'une restauration multi-sites a Antananarivo : consommation des sites, stocks centraux, validation financiere et controle. L'architecture repose sur NestJS + TypeScript (API modulaire), Prisma comme ORM, PostgreSQL 17, ainsi que BullMQ + Redis pour les traitements asynchrones ; l'interface est developpee en React + Vite. Le coeur metier est un reapprovisionnement par seuil (APPRO = SEUIL - STOCK) consolide sur plusieurs sites, complete par des modules de comptabilite et d'audit. Trois regles non negociables structurent le systeme : montants en Decimal (jamais de flottant), journal d'audit immuable, et aucune suppression physique (soft delete par contrepassation)."
        },
        {
            id: "projet-10",
            titre: "Fiche Technique BOGOTA — Gestion de recettes & couts",
            annee: "2026", role: "Fullstack", statut: "production",
            description: "Logiciel de gestion des fiches techniques de cuisine pour le restaurant BOGOTA : calcul automatique des couts de revient, recalcul en cascade des prix et suivi de la rentabilite de chaque recette. Application locale, utilisable sans connexion internet.",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JavaScript", "PyMuPDF", "openpyxl", "PyInstaller"],
            stack: [
                { couche: "Backend",         techno: "FastAPI (Python)",        usage: "API REST et logique metier" },
                { couche: "ORM",             techno: "SQLAlchemy",              usage: "Modelisation et acces aux donnees" },
                { couche: "Base de donnees", techno: "SQLite",                  usage: "Stockage local des fiches et du catalogue" },
                { couche: "Frontend",        techno: "HTML / CSS / JavaScript", usage: "Interface SPA sans framework" },
                { couche: "Serveur",         techno: "Uvicorn",                 usage: "Serveur ASGI local" },
                { couche: "Export PDF",      techno: "PyMuPDF",                 usage: "Fiches imprimables admin et cuisine" },
                { couche: "Import Excel",    techno: "openpyxl",                usage: "Reprise des fichiers Excel existants" },
                { couche: "Distribution",    techno: "PyInstaller + Inno Setup",usage: "Installateur Windows autonome" }
            ],
            fonctionnalites: [
                { categorie: "Recettes",     items: "Fiches techniques completes (ingredients, etapes, photo) et catalogue d'ingredients centralise" },
                { categorie: "Couts",        items: "Calcul automatique du cout de revient, coefficient de marge et prix de vente conseille" },
                { categorie: "Recalcul",     items: "Un prix modifie au catalogue met a jour instantanement toutes les recettes concernees" },
                { categorie: "Rentabilite",  items: "Classement automatique de chaque recette : rentable, a surveiller ou en perte" },
                { categorie: "Documents",    items: "Export PDF en deux versions : fiche admin avec les couts, fiche cuisine sans aucun prix" },
                { categorie: "Import",       items: "Reprise des anciennes fiches Excel, meme lorsque la mise en page differe" },
                { categorie: "Securite",     items: "Donnees sensibles (couts, marges) reservees aux comptes administrateurs" },
                { categorie: "Deploiement",  items: "Fonctionnement 100% local sans internet, livre sous forme d'installateur Windows" }
            ],
            details: "Fiche Technique BOGOTA est un logiciel metier concu pour la cuisine d'un restaurant : il centralise les fiches techniques des recettes et automatise entierement le calcul des couts. Avant, chaque changement de prix fournisseur imposait de recalculer manuellement toutes les recettes concernees ; desormais une seule modification au catalogue se propage automatiquement. Chaque recette est classee selon sa rentabilite (rentable, alerte ou perte) et s'exporte en PDF en deux versions : une fiche complete pour la direction avec les couts et les marges, et une fiche pour la cuisine sans aucun chiffre sensible. L'architecture repose sur un backend FastAPI (Python) avec SQLAlchemy et SQLite, une interface SPA en JavaScript sans framework, l'export PDF via PyMuPDF et l'import Excel via openpyxl. L'application fonctionne en local sans connexion internet et est distribuee sous forme d'installateur Windows genere avec PyInstaller et Inno Setup."
        },
        {
            id: "projet-9",
            titre: "ACTIPASS — Plateforme de Certification & Verification",
            annee: "2026", role: "CTO", statut: "conception",
            description: "Infrastructure nationale de confiance pour la digitalisation, la verification et la certification securisee des informations academiques, administratives et professionnelles (lutte contre la fraude documentaire). Intervention en tant que CTO : direction technique, conception, documentation et architecture fonctionnelle. Developpement realise par l'equipe Pulse, hebergement assure par Stellarix.",
            technologies: ["CTO", "UI/UX", "Architecture", "Flow Diagrams", "MOA / MVP"],
            fonctionnalites: [
                { categorie: "Certification", items: "Digitalisation, verification et certification des diplomes et documents administratifs et professionnels" },
                { categorie: "Anti-fraude",   items: "Preuve d'integrite par blockchain, verification par QR code, chiffrement des donnees sensibles" },
                { categorie: "B2C",           items: "Passeport professionnel numerique pour professionnels et etudiants" },
                { categorie: "B2B / B2G",     items: "Verification pour entreprises, banques, ambassades, universites et administrations" },
                { categorie: "Gouvernance",   items: "Conformite RGPD, registre des traitements, separation donnees sensibles / publiques" },
                { categorie: "Scaling",       items: "Architecture concue des le MVP pour l'expansion nationale puis africaine et internationale" }
            ],
            details: "ACTIPASS est une infrastructure nationale de confiance dediee a la digitalisation, la verification, la certification et la securisation des informations academiques, administratives et professionnelles. Elle repond a la multiplication des fraudes documentaires par un systeme centralise et fiable, selon un modele a double entree B2C (professionnels, etudiants) et B2B/B2G (entreprises, banques, ambassades, institutions). En tant que CTO, responsable de la direction technique et de la conception : definition de la vision technique, documentation fonctionnelle et technique (MOA, MVP, cahier des charges), maquettes UI/UX, diagrammes de flux et architecture fonctionnelle, et participation aux choix techniques et aux orientations technologiques. Le developpement de la plateforme a ete realise par l'equipe Pulse et l'hebergement est assure par Stellarix."
        }
    ],
    competences: [
        {
            id: "competence-1",
            titre: "Langages de programmation",
            details: [
                { label: "Front-end", value: "HTML5, CSS3, JavaScript, TypeScript, React, Bootstrap" },
                { label: "Back-end",  value: "Java, Python, C++, PHP, Node.js, Express.js, NestJS" }
            ],
            niveaux: [
                { nom: "Python",     pct: 90 },
                { nom: "JavaScript", pct: 85 },
                { nom: "TypeScript", pct: 80 },
                { nom: "Java",       pct: 80 },
                { nom: "Node.js",    pct: 78 },
                { nom: "NestJS",     pct: 75 },
                { nom: "PHP",        pct: 72 },
                { nom: "C++",        pct: 60 }
            ],
            tags: ["Java", "Python", "C++", "PHP", "TypeScript", "HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Node.js", "Express.js", "NestJS"]
        },
        {
            id: "competence-2",
            titre: "Bases de donnees",
            details: [
                { label: "Langage", value: "SQL" },
                { label: "Types",   value: "MySQL, PostgreSQL, SQLite" },
                { label: "ORM",     value: "Prisma" },
                { label: "Cache",   value: "Redis" }
            ],
            niveaux: [
                { nom: "SQL",        pct: 85 },
                { nom: "MySQL",      pct: 80 },
                { nom: "PostgreSQL", pct: 78 },
                { nom: "Prisma",     pct: 76 },
                { nom: "SQLite",     pct: 75 },
                { nom: "Redis",      pct: 68 }
            ],
            tags: ["SQL", "MySQL", "PostgreSQL", "SQLite", "Prisma", "Redis"]
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
                { label: "Competences",    value: "Calcul Stochastique (R), Operateur de saisie, Conception graphique (Photoshop), OCR, Maintenance informatique" },
                { label: "Build & Outils", value: "Vite, BullMQ" }
            ],
            niveaux: [
                { nom: "Vite",      pct: 72 },
                { nom: "Photoshop", pct: 70 },
                { nom: "OCR",       pct: 68 },
                { nom: "BullMQ",    pct: 65 },
                { nom: "R (Stats)", pct: 62 }
            ],
            tags: ["Calcul Stochastique (R)", "Photoshop", "OCR", "Maintenance informatique", "Vite", "BullMQ"]
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
        },
        {
            id: "exp-5",
            poste: "Developpeur Fullstack — SGCI",
            entreprise: "SGCI — Systeme de Gestion et Controle Integre",
            periode: "2026",
            type: "Projet professionnel",
            lieu: "Antananarivo, Madagascar",
            description: "Developpement d'une plateforme de digitalisation de la chaine d'approvisionnement pour la restauration multi-sites, sur une architecture modulaire NestJS + Prisma + PostgreSQL.",
            technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
            accomplissements: [
                "Architecture modulaire NestJS + TypeScript avec ORM Prisma",
                "Reapprovisionnement par seuil multi-sites (APPRO = SEUIL - STOCK)",
                "Traitements asynchrones via BullMQ + Redis",
                "Comptabilite en Decimal et journal d'audit immuable pour la tracabilite",
                "Gestion fine des roles et permissions (RBAC)"
            ]
        },
        {
            id: "exp-6",
            poste: "CTO — ACTIPASS",
            entreprise: "ACTIPASS (STELLARIX)",
            periode: "2025 — 2026",
            type: "Direction technique",
            lieu: "Antananarivo, Madagascar",
            description: "Direction technique (CTO) de la plateforme nationale de certification et de verification anti-fraude ACTIPASS : vision, conception, documentation et architecture fonctionnelle. Developpement realise par l'equipe Pulse, hebergement assure par Stellarix.",
            technologies: ["Direction technique", "UI/UX", "Architecture", "Diagrammes de flux", "MOA / MVP"],
            accomplissements: [
                "Definition de la vision technique du projet",
                "Redaction de la documentation fonctionnelle et technique (MOA, MVP, cahier des charges)",
                "Conception des maquettes UI/UX de la plateforme",
                "Realisation des diagrammes de flux et de l'architecture fonctionnelle",
                "Participation aux choix techniques et aux orientations technologiques",
                "Supervision et coordination technique avec l'equipe de developpement (Pulse) et l'hebergeur (Stellarix)"
            ]
        },
        {
            id: "exp-7",
            poste: "Developpeur Fullstack — Fiche Technique BOGOTA",
            entreprise: "Restaurant BOGOTA",
            periode: "2026",
            type: "Logiciel metier",
            lieu: "Antananarivo, Madagascar",
            description: "Conception et developpement d'un logiciel de gestion des fiches techniques de cuisine : calcul automatique des couts de revient, recalcul en cascade des prix et suivi de la rentabilite des recettes.",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JavaScript"],
            accomplissements: [
                "Developpement complet du backend en FastAPI avec SQLAlchemy et SQLite",
                "Automatisation du calcul des couts et recalcul en cascade a chaque changement de prix",
                "Classement automatique des recettes par rentabilite (rentable, alerte, perte)",
                "Double export PDF : fiche direction avec les couts, fiche cuisine sans donnees sensibles",
                "Import des anciennes fiches Excel et interface SPA en JavaScript sans framework",
                "Distribution sous forme d'installateur Windows autonome (PyInstaller + Inno Setup)"
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
        { type: "linkedin",  value: "Tsialonina Jean Edouard", url: "https://www.linkedin.com/in/TsialoninaJeanEdouard" },
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
        { valeur: 10, suffix: "+", label: "Projets réalisés",        icone: "fas fa-code-branch" },
        { valeur: 3,  suffix: "+", label: "Ans d'expérience",        icone: "fas fa-briefcase" },
        { valeur: 15, suffix: "+", label: "Technologies maîtrisées", icone: "fas fa-layer-group" },
        { valeur: 95, suffix: "%", label: "Taux détection IA",       icone: "fas fa-robot" }
    ]
};
