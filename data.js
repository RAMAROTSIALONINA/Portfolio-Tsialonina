const portfolioData = {
    projets: [
        {
            id: 'projet-1',
            titre: 'Logiciel de gestion de véhicule',
            description: "Création d'un logiciel pour la gestion de véhicules de Toutadom au sein de Swiss Madagascar.",
            technologies: ['Python', 'PostgreSQL'],
            details: "Création d'un logiciel pour la gestion de véhicules de Toutadom au sein de Swiss Madagascar. Rôle : Développement complet du back-end et de la base de données. Résultat : Optimisation du suivi et de la maintenance des véhicules, réduisant les erreurs de 20%."
        },
        {
            id: 'projet-2',
            titre: 'Détecteur de fichiers',
            description: "Développement d'un logiciel de détection de fichiers basé sur l'intelligence artificielle pour l'identification de documents malveillants.",
            technologies: ['Python', 'Pandas', 'NumPy'],
            details: "Développement d'un logiciel de détection de fichiers basé sur l'intelligence artificielle pour l'identification de documents malveillants. Défi : Créer un modèle d'IA efficace avec une faible consommation de ressources. Résultat : Un taux de détection de 95% sur les données de test, prouvant la performance de l'algorithme."
        },
        {
            id: 'projet-3',
            titre: 'Gestion d’établissement en Java',
            description: "Projet de fin d’étude pour l’obtention du diplôme de licence.",
            technologies: ['Java'],
            details: "Projet de fin d’étude pour l’obtention du diplôme de licence. Ce système permet la gestion complète des étudiants et des enseignants. Fonctionnalités : Gestion des notes, des absences et des emplois du temps. Technologies : Conception de l'interface utilisateur et de la logique métier en Java."
        },
        {
            id: 'projet-4',
            titre: 'Site web de l’EGRIE',
            description: "Conception et développement du site web officiel de l’établissement EGRIE.",
            technologies: ['PHP', 'CodeIgniter 3', 'SQLite'],
            details: "Conception et développement du site web officiel de l’établissement EGRIE. Rôle : Responsable du développement front-end et de l'intégration des fonctionnalités. Technologies : Utilisation de PHP avec le framework CodeIgniter 3 pour la robustesse et la sécurité."
        },
        {
            id: 'projet-5',
            titre: 'Projet sur l’intelligence artificielle',
            description: "Projet d'étude axé sur l'exploration de l'IA et des réseaux de neurones.",
            technologies: ['Anaconda'],
            details: "Projet d'étude axé sur l'exploration de l'IA et des réseaux de neurones. Objectif : Comprendre le fonctionnement et les applications des modèles prédictifs. Technologie : Réalisé avec Python et la plateforme Anaconda pour gérer les bibliothèques et l'environnement de développement."
        }
    ],
    competences: [
        {
            id: 'competence-1',
            titre: 'Langages de programmation',
            details: [
                { label: 'Back-end', value: 'Java, Python, C++, PHP' },
                { label: 'Front-end', value: 'HTML5, CSS3, JavaScript, React, Bootstrap' }
            ],
            tags: ['Java', 'Python', 'C++', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap']
        },
        {
            id: 'competence-2',
            titre: 'Bases de données',
            details: [
                { label: 'Langage', value: 'SQL' },
                { label: 'Types', value: 'MySQL, PostgreSQL, SQLite' }
            ],
            tags: ['SQL', 'MySQL', 'PostgreSQL', 'SQLite']
        },
        {
            id: 'competence-3',
            titre: 'IA et Analyse de données',
            details: [
                { label: 'Formation', value: 'Intelligence Artificielle et Réseaux de Neurones' },
                { label: 'Outils', value: 'Python, Pandas, NumPy' },
                { label: 'Méthodes', value: 'Analyse en Composantes Principales (ACP), Analyse Factorielle des Correspondances (AFC)' }
            ],
            tags: ['Pandas', 'NumPy']
        },
        {
            id: 'competence-4',
            titre: 'Autres',
            details: [
                { label: 'Compétences', value: 'Calcul Stochastique (R), Opérateur de saisie, Conception graphique (Photoshop), Reconnaissance Optique de Caractère (OCR), Maintenance des outils informatiques' }
            ],
            tags: ['Calcul Stochastique (R)', 'Opérateur de saisie', 'Conception graphique (Photoshop)', 'Reconnaissance Optique de Caractère (OCR)', 'Maintenance des outils informatiques']
        }
    ],
    diplomes: [
        {
            id: 'diplome-1',
            titre: 'Master II en Ingénierie',
            annee: "2023-2024",
            etablissement: "Polytechnique d'Antananarivo",
            details: [
                { label: 'Établissement', value: "Polytechnique d'Antananarivo" },
                { label: 'Mention', value: "ISA (Ingénierie de Système Avancé)" },
                { label: 'Parcours', value: "Ingénierie en Sciences Cognitives" },
                { label: 'Titre de projet', value: "En cours" }
            ]
        },
        {
            id: 'diplome-2',
            titre: 'Licence Professionnelle en Génie Logiciel',
            annee: "2022-2023",
            etablissement: "ISTA Ambositra",
            details: [
                { label: 'Établissement', value: "ISTA Ambositra - Annexe Fandriana" },
                { label: 'Mention', value: "Informatique" },
                { label: 'Parcours', value: "Génie logiciel" },
                { label: 'Titre de projet', value: "Gestion d’établissement public" }
            ]
        },
        {
            id: 'diplome-3',
            titre: 'Baccalauréat série D',
            annee: "2018-2019",
            etablissement: "Lycée Générale d’Ambadik’i Manangana",
            details: [
                { label: 'Année', value: "2018-2019" },
                { label: 'Établissement', value: "Lycée Générale d’Ambadik’i Manangana" }
            ]
        },
        {
            id: 'diplome-4',
            titre: "Formation en Initiation à l'IoT",
            annee: "2022-2023",
            etablissement: "Certifié",
            details: [
                { label: 'Année', value: "2022-2023" },
                { label: 'Détails', value: "Formation certifiante axée sur les concepts de base et la mise en œuvre des objets connectés. J'ai acquis des compétences en programmation de microcontrôleurs et en communication entre les appareils." }
            ]
        },
        {
            id: 'diplome-5',
            titre: 'Formation en Arduino',
            annee: "2021-2022",
            etablissement: "Certifié",
            details: [
                { label: 'Année', value: "2021-2022" },
                { label: 'Détails', value: "Cours pratique sur l'utilisation de la plateforme Arduino pour la création de prototypes électroniques. J'ai appris à programmer des cartes Arduino pour contrôler des capteurs et des actionneurs, ce qui renforce mes compétences en ingénierie matérielle." }
            ]
        }
    ],
    contact: [
        { type: 'email', value: 'tsialoninajeanedouard@gmail.com' },
        { type: 'phone', value: '0346503454 / 0337514453' },
        { type: 'whatsapp', value: '0346503454 / 0337514453' },
        { type: 'linkedin', value: 'Tsialonina Jean Edouard' },
        { type: 'facebook', value: 'Tsialonina ismael' },
        { type: 'instagram', value: 'Tsialonina Jean' }
    ]
};