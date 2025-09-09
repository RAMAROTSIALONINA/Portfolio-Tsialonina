document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const portfolioContent = document.getElementById('portfolio-content');
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Conteneur pour les modales générées dynamiquement
    const modalsContainer = document.getElementById('modals-container');

    // 1. Gérer l'animation de bienvenue
    setTimeout(() => {
        welcomeMessage.classList.add('fade-out');
    }, 2000);

    welcomeMessage.addEventListener('transitionend', () => {
        welcomeMessage.style.display = 'none';
        portfolioContent.classList.remove('hidden');
    });

    // 2. Générer le contenu des sections et des modales à partir des données
    function generatePortfolioContent() {
        // --- Projets ---
        const projetsContainer = document.querySelector('#projets .projects-grid');
        portfolioData.projets.forEach(projet => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${projet.titre}</h3>
                <p>${projet.description}</p>
                <div class="tags">
                    ${projet.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <button class="details-button" data-modal-target="modal-${projet.id}">Détail</button>
            `;
            projetsContainer.appendChild(card);

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = `modal-${projet.id}`;
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h3>${projet.titre}</h3>
                    <p>${projet.details}</p>
                </div>
            `;
            modalsContainer.appendChild(modal);
        });

        // --- Compétences ---
        const competencesContainer = document.querySelector('#competences .projects-grid');
        portfolioData.competences.forEach(competence => {
            const card = document.createElement('div');
            card.className = 'project-card';
            const tagsHtml = (competence.tags) ? `<div class="tags">${competence.tags.map(tag => `<span>${tag}</span>`).join('')}</div>` : '';
            card.innerHTML = `
                <h3>${competence.titre}</h3>
                <p>Mes compétences incluent :</p>
                ${tagsHtml}
                <button class="details-button" data-modal-target="modal-${competence.id}">Détail</button>
            `;
            competencesContainer.appendChild(card);

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = `modal-${competence.id}`;
            
            let detailsListHtml = '';
            if (Array.isArray(competence.details)) {
                detailsListHtml = '<ul>' + competence.details.map(item => `<li><strong>${item.label}:</strong> ${item.value}</li>`).join('') + '</ul>';
            } else {
                detailsListHtml = `<p>${competence.details}</p>`;
            }

            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h3>${competence.titre}</h3>
                    ${detailsListHtml}
                </div>
            `;
            modalsContainer.appendChild(modal);
        });

        // --- Diplômes ---
        const diplomesContainer = document.querySelector('#diplomes .projects-grid');
        portfolioData.diplomes.forEach(diplome => {
            const card = document.createElement('div');
            card.className = 'project-card';
            const etablissementHtml = (diplome.etablissement) ? `<p><strong>Établissement :</strong> ${diplome.etablissement}</p>` : '';
            card.innerHTML = `
                <h3>${diplome.titre}</h3>
                <p><strong>Année :</strong> ${diplome.annee}</p>
                ${etablissementHtml}
                <button class="details-button" data-modal-target="modal-${diplome.id}">Détail</button>
            `;
            diplomesContainer.appendChild(card);

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = `modal-${diplome.id}`;
            
            let detailsListHtml = '';
            if (Array.isArray(diplome.details)) {
                detailsListHtml = '<ul>' + diplome.details.map(item => `<li><strong>${item.label}:</strong> ${item.value}</li>`).join('') + '</ul>';
            } else {
                detailsListHtml = `<p>${diplome.details}</p>`;
            }

            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h3>${diplome.titre}</h3>
                    ${detailsListHtml}
                </div>
            `;
            modalsContainer.appendChild(modal);
        });

        // --- Contact ---
        const contactGrid = document.getElementById('contact-grid');
        const contactIcons = {
            email: 'fas fa-envelope',
            phone: 'fas fa-phone-alt',
            whatsapp: 'fab fa-whatsapp',
            linkedin: 'fab fa-linkedin',
            facebook: 'fab fa-facebook',
            instagram: 'fab fa-instagram'
        };

        portfolioData.contact.forEach(item => {
            const contactCard = document.createElement('a');
            contactCard.className = 'contact-card';
            contactCard.href = item.type === 'email' ? `mailto:${item.value}` : 
                               item.type === 'phone' || item.type === 'whatsapp' ? `tel:${item.value}` :
                               `https://www.${item.type}.com/in/${item.value.replace(/ /g, '')}`;
            contactCard.innerHTML = `
                <i class="${contactIcons[item.type]}"></i>
                <p>${item.value}</p>
            `;
            contactGrid.appendChild(contactCard);
        });
    }

    // Appel de la fonction pour construire le site
    generatePortfolioContent();

    // 3. Gérer la navigation (inchangé)
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const targetId = this.getAttribute('href').substring(1);
            
            if (targetId === 'accueil') {
                contentSections.forEach(section => section.classList.remove('hidden-section'));
            } else {
                contentSections.forEach(section => {
                    if (section.id !== targetId) {
                        section.classList.add('hidden-section');
                    } else {
                        section.classList.remove('hidden-section');
                    }
                });
            }

            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Gérer les modales (maintenant avec une délégation d'événement)
    // On écoute les clics sur le conteneur principal pour plus d'efficacité
    document.addEventListener('click', function(event) {
        // Gérer l'ouverture des modales
        if (event.target.classList.contains('details-button')) {
            const modalId = event.target.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('show'), 10);
            }
        }

        // Gérer la fermeture des modales
        if (event.target.classList.contains('close-button')) {
            const modal = event.target.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.style.display = 'none', 300);
            }
        }

        // Fermer si l'utilisateur clique en dehors de la modale
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
            setTimeout(() => event.target.style.display = 'none', 300);
        }
    });

    // Fermer la modale avec la touche Échap
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                openModal.classList.remove('show');
                setTimeout(() => openModal.style.display = 'none', 300);
            }
        }
    });
});