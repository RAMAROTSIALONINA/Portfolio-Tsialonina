document.addEventListener('DOMContentLoaded', function () {

    /* ─── Éléments du DOM ──────────────────────────────────────── */
    const welcomeMessage   = document.getElementById('welcome-message');
    const portfolioContent = document.getElementById('portfolio-content');
    const navLinks         = document.querySelectorAll('nav a');
    const contentSections  = document.querySelectorAll('.content-section');
    const modalsContainer  = document.getElementById('modals-container');

    /* ══════════════════════════════════════════════════════════════
       1. ÉCRAN DE BIENVENUE — une seule fois par session
    ══════════════════════════════════════════════════════════════ */
    const alreadySeen = sessionStorage.getItem('portfolio-visited');

    if (alreadySeen) {
        /* Visite suivante : skip le splash immédiatement */
        welcomeMessage.style.display = 'none';
        portfolioContent.classList.remove('hidden');
        /* initScrollReveal() et initTypingAnimation() seront appelés
           APRÈS les build functions (plus bas dans ce fichier) */
    } else {
        sessionStorage.setItem('portfolio-visited', '1');
        setTimeout(() => welcomeMessage.classList.add('fade-out'), 2200);
        welcomeMessage.addEventListener('transitionend', () => {
            welcomeMessage.style.display = 'none';
            portfolioContent.classList.remove('hidden');
            initTypingAnimation();
            /* Révéler les éléments déjà créés maintenant que le contenu est visible */
            document.querySelectorAll('.reveal, .timeline-item, .softskill-chip, .langue-card, .stat-card')
                .forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add('revealed');
                        el.querySelectorAll('.skill-bar-fill')
                            .forEach(b => { b.style.width = b.dataset.pct + '%'; });
                    }, i * 60);
                });
        });
    }

    /* ══════════════════════════════════════════════════════════════
       2. MENU HAMBURGER (mobile / tablette)
    ══════════════════════════════════════════════════════════════ */
    const navToggle = document.getElementById('nav-toggle');
    const mainNav   = document.getElementById('main-nav');

    function closeNav() {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Fermer le menu au clic sur un lien */
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

    /* Fermer le menu en cliquant en dehors */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header')) closeNav();
    });

    /* Fermer le menu si on redimensionne vers desktop */
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeNav();
    });

    /* ══════════════════════════════════════════════════════════════
       4. THÈME — auto système + toggle manuel
    ══════════════════════════════════════════════════════════════ */
    function initTheme() {
        const btn  = document.getElementById('theme-toggle');
        const icon = document.getElementById('theme-icon');
        const body = document.body;

        /* Priorité : 1) préférence sauvegardée, 2) préférence système */
        const saved     = localStorage.getItem('portfolio-theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial   = saved || (systemDark ? 'dark' : 'light');
        applyTheme(initial);

        btn.addEventListener('click', () => {
            const next = body.classList.contains('dark-theme') ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('portfolio-theme', next);
        });

        /* Réagir si l'utilisateur change le thème système en cours de visite */
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });

        function applyTheme(theme) {
            body.classList.toggle('dark-theme', theme === 'dark');
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    initTheme();

    /* ══════════════════════════════════════════════════════════════
       3. ANIMATION DE FRAPPE (HERO)
    ══════════════════════════════════════════════════════════════ */
    function initTypingAnimation() {
        const el = document.getElementById('typed-text');
        if (!el) return;
        const roles = [
            'Développeur Fullstack',
            'Spécialiste en IA',
            'Ingénieur Logiciel',
            'Développeur Python & Java',
        ];
        let ri = 0, ci = 0, deleting = false;

        function type() {
            const cur = roles[ri];
            el.textContent = cur.substring(0, ci);
            if (!deleting) {
                if (ci++ >= cur.length) { deleting = true; setTimeout(type, 1800); return; }
            } else {
                if (ci-- <= 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 500); return; }
            }
            setTimeout(type, deleting ? 50 : 90);
        }
        type();
    }

    /* ══════════════════════════════════════════════════════════════
       4. SCROLL REVEAL + BARRES DE PROGRESSION
    ══════════════════════════════════════════════════════════════ */
    function initScrollReveal() {
        const revealEl = (el) => {
            el.classList.add('revealed');
            el.querySelectorAll('.skill-bar-fill')
                .forEach(bar => { bar.style.width = bar.dataset.pct + '%'; });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                revealEl(entry.target);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        const selector = '.reveal, .timeline-item, .softskill-chip, .langue-card, .stat-card';
        document.querySelectorAll(selector).forEach(el => {
            /* Si l'élément est déjà visible (2ème visite, contenu affiché d'emblée) */
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView && portfolioContent.style.display !== 'none'
                && !portfolioContent.classList.contains('hidden')) {
                revealEl(el);
            } else {
                observer.observe(el);
            }
        });
    }

    /* ══════════════════════════════════════════════════════════════
       5. STATISTIQUES ANIMÉES
    ══════════════════════════════════════════════════════════════ */
    function buildStats() {
        const row = document.getElementById('stats-row');
        if (!row) return;

        portfolioData.stats.forEach((s, i) => {
            const card = document.createElement('div');
            card.className = 'stat-card reveal';
            card.style.transitionDelay = `${i * 80}ms`;
            card.innerHTML = `
                <i class="${s.icone}"></i>
                <div class="stat-number" data-target="${s.valeur}" data-suffix="${s.suffix}">0${s.suffix}</div>
                <div class="stat-label">${s.label}</div>
            `;
            row.appendChild(card);
        });

        /* Animation des compteurs au scroll */
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el     = entry.target.querySelector('.stat-number');
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix;
                let current  = 0;
                const step   = Math.max(1, Math.ceil(target / 50));
                const timer  = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.textContent = current + suffix;
                    if (current >= target) clearInterval(timer);
                }, 30);
                counterObserver.unobserve(entry.target);
            });
        }, { threshold: 0.5 });

        row.querySelectorAll('.stat-card').forEach(c => counterObserver.observe(c));
    }

    /* ══════════════════════════════════════════════════════════════
       6. GÉNÉRATION DU CONTENU
    ══════════════════════════════════════════════════════════════ */

    const projectIcons = {
        Python:    'fab fa-python',
        Java:      'fab fa-java',
        PHP:       'fab fa-php',
        'Node.js': 'fab fa-node-js',
        IA:        'fas fa-robot',
        React:     'fab fa-react',
        default:   'fas fa-laptop-code',
    };

    const statusMap = {
        'en-ligne':      { label: 'En ligne',         cls: 'st-online' },
        'production':    { label: 'En production',    cls: 'st-prod'   },
        'developpement': { label: 'En développement', cls: 'st-dev'    },
        'conception':    { label: 'En conception',    cls: 'st-design' },
        'termine':       { label: 'Terminé',          cls: 'st-done'   },
    };

    const skillIcons = {
        'Langages de programmation': { icon: 'fas fa-code',     accent: false },
        'Bases de données':          { icon: 'fas fa-database', accent: true  },
        'IA et Analyse de données':  { icon: 'fas fa-brain',    accent: false },
        'Outils & Divers':           { icon: 'fas fa-tools',    accent: true  },
    };

    const contactIcons = {
        email:     'fas fa-envelope',
        phone:     'fas fa-phone-alt',
        whatsapp:  'fab fa-whatsapp',
        linkedin:  'fab fa-linkedin',
        github:    'fab fa-github',
        facebook:  'fab fa-facebook',
        instagram: 'fab fa-instagram',
    };
    const contactLabels = {
        email:     'Email',
        phone:     'Téléphone',
        whatsapp:  'WhatsApp',
        linkedin:  'LinkedIn',
        github:    'GitHub',
        facebook:  'Facebook',
        instagram: 'Instagram',
    };

    /* ── 6a. Projets ──────────────────────────────────────────── */
    function buildProjets() {
        const grid = document.getElementById('projets-grid');
        if (!grid) return;

        portfolioData.projets.forEach((projet, idx) => {
            const mainTech = projet.technologies.find(t => projectIcons[t]) || 'default';
            const icon     = projectIcons[mainTech];

            const st = statusMap[projet.statut];
            const statusBadge = st
                ? `<span class="project-status ${st.cls}"><span class="st-dot"></span>${st.label}</span>` : '';
            const meta = (projet.annee || projet.role)
                ? `<div class="project-meta">${[projet.annee, projet.role].filter(Boolean).join(' · ')}</div>` : '';

            /* Tous les tags sont rendus ; fitProjectTags() masque ceux qui
               dépassent la première ligne et met à jour la puce « +N ». */
            const shownTags = projet.technologies.map(t => `<span>${t}</span>`).join('');
            const moreTag   = `<span class="tag-more" style="display:none">+0</span>`;

            const detailsBtn = `<button class="details-button${projet.url ? '' : ' primary'}" data-modal-target="modal-${projet.id}"><i class="fas fa-search-plus" style="margin-right:5px"></i>Voir les détails</button>`;
            const urlBtnCard = projet.url
                ? `<a class="details-button primary" href="${projet.url}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt" style="margin-right:5px"></i>Voir le site</a>` : '';

            const card = document.createElement('div');
            card.className = 'project-card reveal';
            card.dataset.technologies = projet.technologies.join(',');
            card.style.transitionDelay = `${idx * 60}ms`;
            card.innerHTML = `
                <div class="project-cover">
                    <i class="${icon}"></i>
                    ${statusBadge}
                </div>
                <div class="project-body">
                    <h3>${projet.titre}</h3>
                    ${meta}
                    <p>${projet.description}</p>
                    <div class="tags">${shownTags}${moreTag}</div>
                    <div class="card-actions">
                        ${urlBtnCard}
                        ${detailsBtn}
                    </div>
                </div>
            `;
            grid.appendChild(card);

            /* Contenu modale */
            let modalBody = `<p style="margin-bottom:10px">${projet.details}</p>`;
            if (projet.stack) {
                modalBody += `
                    <div class="modal-section-title"><i class="fas fa-layer-group" style="color:var(--primary);margin-right:6px"></i>Stack technique</div>
                    <table class="modal-table"><thead><tr><th>Couche</th><th>Technologie</th><th>Usage</th></tr></thead>
                    <tbody>${projet.stack.map(s => `<tr><td><strong>${s.couche}</strong></td><td>${s.techno}</td><td>${s.usage}</td></tr>`).join('')}</tbody></table>`;
            }
            if (projet.fonctionnalites) {
                modalBody += `
                    <div class="modal-section-title" style="margin-top:18px"><i class="fas fa-list-check" style="color:var(--primary);margin-right:6px"></i>Fonctionnalités par catégorie</div>
                    <table class="modal-table"><thead><tr><th>Catégorie</th><th>Fonctionnalités principales</th></tr></thead>
                    <tbody>${projet.fonctionnalites.map(f => `<tr><td><strong>${f.categorie}</strong></td><td>${f.items}</td></tr>`).join('')}</tbody></table>`;
            }

            const urlBtnModal = projet.url
                ? `<a class="details-button live-btn" href="${projet.url}" target="_blank" rel="noopener noreferrer" style="margin-top:18px;display:inline-flex;align-items:center">
                       <i class="fas fa-globe" style="margin-right:7px"></i>Visiter — ${projet.url}
                   </a>` : '';

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = `modal-${projet.id}`;
            modal.innerHTML = `
                <div class="modal-content modal-large">
                    <button class="close-button" aria-label="Fermer">&times;</button>
                    <h3><i class="${icon}" style="margin-right:8px;color:var(--primary)"></i>${projet.titre}</h3>
                    ${modalBody}
                    <div class="tags" style="margin-top:16px">${projet.technologies.map(t => `<span>${t}</span>`).join('')}</div>
                    ${urlBtnModal}
                </div>
            `;
            modalsContainer.appendChild(modal);
        });
    }

    /* ── 6b. Compétences avec barres de progression ───────────── */
    function buildCompetences() {
        const grid = document.getElementById('competences-grid');
        if (!grid) return;

        portfolioData.competences.forEach((comp, idx) => {
            const cfg  = skillIcons[comp.titre] || { icon: 'fas fa-star', accent: false };
            const card = document.createElement('div');
            card.className = 'skill-card reveal';
            card.style.transitionDelay = `${idx * 60}ms`;

            let detailsHtml = comp.details.map(d =>
                `<div class="skill-detail-row"><strong>${d.label} :</strong> ${d.value}</div>`
            ).join('');

            let niveauxHtml = '';
            if (comp.niveaux) {
                niveauxHtml = `<div class="skill-levels">
                    ${comp.niveaux.map(n => `
                        <div class="skill-level-row">
                            <div class="skill-level-label">
                                <span>${n.nom}</span><span>${n.pct}%</span>
                            </div>
                            <div class="skill-bar-bg">
                                <div class="skill-bar-fill" data-pct="${n.pct}"></div>
                            </div>
                        </div>`).join('')}
                </div>`;
            }

            const tagsHtml = comp.tags
                ? `<div class="tags">${comp.tags.map(t => `<span>${t}</span>`).join('')}</div>` : '';

            card.innerHTML = `
                <div class="skill-card-header">
                    <div class="skill-card-icon ${cfg.accent ? 'accent' : ''}"><i class="${cfg.icon}"></i></div>
                    <h3>${comp.titre}</h3>
                </div>
                <div class="skill-details">${detailsHtml}</div>
                ${niveauxHtml}
                ${tagsHtml}
                <button class="details-button" data-modal-target="modal-${comp.id}">
                    <i class="fas fa-list" style="margin-right:5px"></i>Voir les détails
                </button>
            `;
            grid.appendChild(card);

            const listHtml = Array.isArray(comp.details)
                ? '<ul>' + comp.details.map(d => `<li><strong>${d.label} :</strong> ${d.value}</li>`).join('') + '</ul>'
                : `<p>${comp.details}</p>`;

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = `modal-${comp.id}`;
            modal.innerHTML = `
                <div class="modal-content">
                    <button class="close-button" aria-label="Fermer">&times;</button>
                    <h3><i class="${cfg.icon}" style="margin-right:8px;color:var(--primary)"></i>${comp.titre}</h3>
                    ${listHtml}
                </div>
            `;
            modalsContainer.appendChild(modal);
        });
    }

    /* ── 6c. Langues ──────────────────────────────────────────── */
    function buildLangues() {
        const grid = document.getElementById('langues-grid');
        if (!grid || !portfolioData.langues) return;

        portfolioData.langues.forEach((lang, i) => {
            const card = document.createElement('div');
            card.className = 'langue-card reveal';
            card.style.transitionDelay = `${i * 80}ms`;
            card.innerHTML = `
                <div class="langue-header">
                    <span class="langue-flag">${lang.flag}</span>
                    <div class="langue-info">
                        <span class="langue-nom">${lang.nom}</span>
                        <span class="langue-niveau">${lang.niveau}</span>
                    </div>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" data-pct="${lang.pct}"></div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    /* ── 6d. Soft Skills ──────────────────────────────────────── */
    function buildSoftSkills() {
        const grid = document.getElementById('softskills-grid');
        if (!grid || !portfolioData.softSkills) return;

        portfolioData.softSkills.forEach((s, i) => {
            const chip = document.createElement('div');
            chip.className = 'softskill-chip reveal';
            chip.style.transitionDelay = `${i * 60}ms`;
            chip.innerHTML = `<i class="${s.icone}"></i>${s.nom}`;
            grid.appendChild(chip);
        });
    }

    /* ── 6e. Expériences (Timeline) ───────────────────────────── */
    function buildExperiences() {
        const timeline = document.getElementById('experiences-timeline');
        if (!timeline) return;

        portfolioData.experiences.forEach((exp) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="exp-card">
                    <div class="exp-header">
                        <span class="exp-type-badge">${exp.type}</span>
                        <div class="exp-poste">${exp.poste}</div>
                        <div class="exp-meta">
                            <span><i class="fas fa-building"></i>${exp.entreprise}</span>
                            <span><i class="fas fa-calendar-alt"></i>${exp.periode}</span>
                            <span><i class="fas fa-map-marker-alt"></i>${exp.lieu}</span>
                        </div>
                    </div>
                    <p class="exp-description">${exp.description}</p>
                    <ul class="exp-accomplissements">
                        ${exp.accomplissements.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                    <div class="tags" style="margin-top:10px">
                        ${exp.technologies.map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
            `;
            timeline.appendChild(item);
        });
    }

    /* ── 6f. Diplômes (Timeline) ──────────────────────────────── */
    function buildDiplomes() {
        const timeline = document.getElementById('diplomes-timeline');
        if (!timeline) return;

        portfolioData.diplomes.forEach((d) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            const listHtml = Array.isArray(d.details)
                ? '<ul class="timeline-details">' +
                  d.details.map(x => `<li><strong>${x.label} :</strong> ${x.value}</li>`).join('') +
                  '</ul>' : '';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-year">${d.annee}</div>
                    <div class="timeline-title">${d.titre}</div>
                    <div class="timeline-school">
                        <i class="fas fa-university" style="margin-right:5px;color:var(--primary)"></i>${d.etablissement}
                    </div>
                    ${listHtml}
                </div>
            `;
            timeline.appendChild(item);
        });
    }

    /* ── 6g. Contact ──────────────────────────────────────────── */
    function buildContact() {
        const grid = document.getElementById('contact-grid');
        if (!grid) return;

        portfolioData.contact.forEach((item, idx) => {
            const card = document.createElement('a');
            card.className = 'contact-card reveal';
            card.style.transitionDelay = `${idx * 60}ms`;

            if (item.url) {
                card.href   = item.url;
                card.target = '_blank';
                card.rel    = 'noopener noreferrer';
            } else if (item.type === 'email') {
                card.href = `mailto:${item.value}`;
            } else if (item.type === 'phone') {
                card.href = `tel:${item.value.split('/')[0].trim()}`;
            } else if (item.type === 'whatsapp') {
                const num = item.value.split('/')[0].trim().replace(/^0/, '261');
                card.href = `https://wa.me/${num}`;
                card.target = '_blank'; card.rel = 'noopener noreferrer';
            } else {
                card.href   = `https://www.${item.type}.com/${item.value.replace(/ /g, '')}`;
                card.target = '_blank'; card.rel = 'noopener noreferrer';
            }

            card.innerHTML = `
                <i class="${contactIcons[item.type] || 'fas fa-link'}"></i>
                <span class="contact-label">${contactLabels[item.type] || item.type}</span>
                <span class="contact-value">${item.value}</span>
            `;
            grid.appendChild(card);
        });
    }

    /* ─── Lancement : construire tout le contenu d'abord ────────── */
    buildStats();
    buildProjets();
    buildCompetences();
    buildLangues();
    buildSoftSkills();
    buildExperiences();
    buildDiplomes();
    buildContact();

    /* ─── Initialiser APRÈS que les éléments existent ────────────
       • 1ère visite : portfolioContent est hidden (display:none),
         l'observer se déclenche quand il devient visible.
       • 2ème visite : portfolioContent est déjà visible,
         l'observer révèle immédiatement les éléments à l'écran.   */
    initScrollReveal();
    if (alreadySeen) initTypingAnimation();

    /* ══════════════════════════════════════════════════════════════
       7. NAVIGATION
    ══════════════════════════════════════════════════════════════ */
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            contentSections.forEach(section => {
                if (targetId === 'accueil') {
                    section.classList.remove('hidden-section');
                } else {
                    section.id === targetId
                        ? section.classList.remove('hidden-section')
                        : section.classList.add('hidden-section');
                }
            });

            navLinks.forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
            this.classList.add('active');
            this.setAttribute('aria-current', 'page');

            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            /* Re-déclencher les révélations dans la section affichée */
            setTimeout(() => {
                target?.querySelectorAll('.reveal:not(.revealed), .timeline-item:not(.revealed), .softskill-chip:not(.revealed), .langue-card:not(.revealed)')
                    .forEach((el, i) => {
                        setTimeout(() => {
                            el.classList.add('revealed');
                            el.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = b.dataset.pct + '%');
                        }, i * 80);
                    });
            }, 120);
        });
    });

    /* ── Tags projets : une seule ligne, le reste dans « +N » ──────
       Les libellés ayant des largeurs variables, on mesure au lieu de
       fixer un nombre : on garde ceux qui tiennent sur la 1ʳᵉ ligne. */
    function fitProjectTags() {
        const GAP = 6;
        document.querySelectorAll('#projets-grid .project-card').forEach(card => {
            const tags = card.querySelector('.tags');
            if (!tags) return;
            const all  = [...tags.querySelectorAll('span:not(.tag-more)')];
            const more = tags.querySelector('.tag-more');
            if (!all.length || !more) return;

            /* Réinitialiser avant de mesurer */
            all.forEach(s => s.style.display = '');
            more.style.display = 'none';

            const max = tags.clientWidth;
            if (!max) return;                     /* carte masquée : rien à faire */

            const widths = all.map(s => s.offsetWidth);
            const widthOf = n => widths.slice(0, n).reduce((a, w, i) => a + w + (i ? GAP : 0), 0);

            /* Combien tiennent sans la puce « +N » ? */
            let shown = 0;
            while (shown < all.length && widthOf(shown + 1) <= max) shown++;

            /* S'il en reste, réserver la place de la puce « +N » */
            if (shown < all.length) {
                more.style.display = '';
                while (shown > 1) {
                    more.textContent = `+${all.length - shown}`;
                    if (widthOf(shown) + GAP + more.offsetWidth <= max) break;
                    shown--;
                }
                more.textContent = `+${all.length - shown}`;
            }

            all.forEach((s, i) => s.style.display = i < shown ? '' : 'none');
        });
    }

    /* ══════════════════════════════════════════════════════════════
       8. FILTRE PROJETS
    ══════════════════════════════════════════════════════════════ */
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            document.querySelectorAll('#projets-grid .project-card').forEach(card => {
                const techs = card.dataset.technologies.split(',');
                const show  = filter === 'all' || techs.includes(filter);
                card.classList.toggle('hidden', !show);
                card.classList.toggle('visible', show);
            });
            fitProjectTags();
        });
    });

    /* Recalcul des tags : au chargement, au redimensionnement et dès que
       le contenu devient visible (les cartes masquées ne se mesurent pas). */
    fitProjectTags();
    window.addEventListener('load', fitProjectTags);
    if (window.ResizeObserver) {
        const grid = document.getElementById('projets-grid');
        if (grid) new ResizeObserver(fitProjectTags).observe(grid);
    } else {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(fitProjectTags, 150);
        });
    }

    /* ══════════════════════════════════════════════════════════════
       9. MODALES
    ══════════════════════════════════════════════════════════════ */
    const openModal = (id) => {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.style.display = 'flex';
        requestAnimationFrame(() => modal.classList.add('show'));
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (modal) => {
        modal.classList.remove('show');
        setTimeout(() => { modal.style.display = 'none'; document.body.style.overflow = ''; }, 300);
    };

    document.addEventListener('click', (e) => {
        const detailBtn = e.target.closest('.details-button[data-modal-target]');
        if (detailBtn) { openModal(detailBtn.dataset.modalTarget); return; }

        const closeBtn = e.target.closest('.close-button');
        if (closeBtn) { closeModal(closeBtn.closest('.modal')); return; }

        if (e.target.classList.contains('modal')) closeModal(e.target);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const open = document.querySelector('.modal.show');
            if (open) closeModal(open);
        }
    });

    /* ══════════════════════════════════════════════════════════════
       10. FORMULAIRE DE CONTACT — Web3Forms
       ┌─────────────────────────────────────────────────────────┐
       │  CONFIGURATION (une seule fois, ~1 minute) :            │
       │  1. Aller sur https://web3forms.com                     │
       │  2. Saisir tsialoninajeanedouard@gmail.com              │
       │  3. La clé d'accès arrive par email                     │
       │  4. La coller ci-dessous à la place du texte repère     │
       │  Aucun compte à créer — 250 envois/mois gratuits.       │
       └─────────────────────────────────────────────────────────┘
       La clé est publique par conception : elle n'autorise que l'envoi
       vers l'adresse email qui l'a demandée. Elle peut donc figurer
       dans le code source sans risque.
    ══════════════════════════════════════════════════════════════ */
    const WEB3FORMS_ACCESS_KEY = 'VOTRE_ACCESS_KEY';   // ← remplacer
    const CONTACT_EMAIL        = 'tsialoninajeanedouard@gmail.com';
    const formEnvoiActif       = WEB3FORMS_ACCESS_KEY !== 'VOTRE_ACCESS_KEY'
                                 && WEB3FORMS_ACCESS_KEY.length > 10;

    const form     = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = form ? form.querySelector('.form-submit-btn') : null;

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name    = document.getElementById('form-name').value.trim();
            const email   = document.getElementById('form-email').value.trim();
            const subject = document.getElementById('form-subject').value.trim();
            const message = document.getElementById('form-message').value.trim();

            /* Validation */
            if (!name || !email || !subject || !message) {
                showFeedback('⚠️ Veuillez remplir tous les champs.', 'error'); return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showFeedback('⚠️ Adresse email invalide.', 'error'); return;
            }

            /* Tant que la clé n'est pas configurée, on ne prétend pas
               envoyer : on propose une alternative qui fonctionne. */
            if (!formEnvoiActif) {
                showMailPopup(name, subject, message, email);
                return;
            }

            /* État chargement */
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours…';

            try {
                const reponse = await fetch('https://api.web3forms.com/submit', {
                    method:  'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        name:       name,
                        email:      email,
                        subject:    `[Portfolio] ${subject}`,
                        message:    message,
                        from_name:  'Portfolio RAMAROTSIALONINA',
                        replyto:    email,
                        botcheck:   document.getElementById('form-botcheck')?.checked || false
                    })
                });
                const resultat = await reponse.json();

                if (reponse.ok && resultat.success) {
                    showFeedback('✅ Message envoyé ! Je vous réponds au plus vite.', 'success');
                    form.reset();
                } else {
                    throw new Error(resultat.message || `HTTP ${reponse.status}`);
                }
            } catch (err) {
                console.error('Web3Forms :', err);
                showFeedback(
                    `❌ L'envoi a échoué. Écrivez-moi directement : ${CONTACT_EMAIL}`,
                    'error'
                );
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
            }
        });
    }

    function showFeedback(msg, type) {
        feedback.textContent = msg;
        feedback.className   = `form-feedback ${type}`;
        setTimeout(() => { feedback.className = 'form-feedback'; feedback.textContent = ''; }, 6000);
    }

    /* Affiché uniquement tant que la clé Web3Forms n'est pas configurée.
       On ne dit jamais "message envoyé" : rien n'a été transmis. On donne
       une alternative qui fonctionne vraiment (lien mailto cliquable,
       copie de l'adresse, WhatsApp). */
    function showMailPopup(senderName, subject, message, senderEmail) {
        const existing = document.getElementById('mail-sent-popup');
        if (existing) existing.remove();

        const corps  = `Nom : ${senderName}\nEmail : ${senderEmail}\n\n${message}`;
        const mailto = `mailto:${CONTACT_EMAIL}`
                     + `?subject=${encodeURIComponent(subject)}`
                     + `&body=${encodeURIComponent(corps)}`;

        const overlay = document.createElement('div');
        overlay.id = 'mail-sent-popup';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Finaliser l\'envoi du message');
        overlay.innerHTML = `
            <div class="mail-popup-box">
                <div class="mail-popup-icon"><i class="fas fa-paper-plane"></i></div>
                <h3>Une dernière étape</h3>
                <p>Merci <strong>${senderName}</strong> — il ne reste qu'à m'envoyer votre message.</p>
                <p class="mail-popup-sub">Ouvrez votre messagerie avec le message déjà rempli, ou copiez mon adresse.</p>
                <div class="mail-popup-actions">
                    <a class="cta-button primary" href="${mailto}">
                        <i class="fas fa-envelope"></i> Ouvrir ma messagerie
                    </a>
                    <button type="button" class="cta-button" id="mail-popup-copy">
                        <i class="fas fa-copy"></i> Copier l'adresse
                    </button>
                    <a class="cta-button" href="https://wa.me/261331933390" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
                <button class="mail-popup-close" id="mail-popup-dismiss" aria-label="Fermer">
                    <i class="fas fa-times"></i> Fermer
                </button>
            </div>`;
        document.body.appendChild(overlay);

        const copyBtn = overlay.querySelector('#mail-popup-copy');
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(CONTACT_EMAIL);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Adresse copiée';
            } catch {
                copyBtn.innerHTML = `<i class="fas fa-envelope"></i> ${CONTACT_EMAIL}`;
            }
        });

        overlay.querySelector('#mail-popup-dismiss')
               .addEventListener('click', () => overlay.remove());

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });

        /* Pas de fermeture automatique : l'utilisateur doit pouvoir agir. */
    }

    /* ══════════════════════════════════════════════════════════════
       11. BOUTON RETOUR EN HAUT
    ══════════════════════════════════════════════════════════════ */
    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ══════════════════════════════════════════════════════════════
       12. BARRE DE PROGRESSION + BACK TO TOP (scroll unique)
    ══════════════════════════════════════════════════════════════ */
    const scrollBar = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 320);
        if (scrollBar) {
            const total   = document.documentElement.scrollHeight - window.innerHeight;
            const percent = total > 0 ? (window.scrollY / total) * 100 : 0;
            scrollBar.style.width = percent + '%';
        }
    }, { passive: true });

    /* ══════════════════════════════════════════════════════════════
       13. CURSEUR PERSONNALISÉ (desktop uniquement)
    ══════════════════════════════════════════════════════════════ */
    const cursor = document.getElementById('custom-cursor');
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
        cursor.style.display = 'block';
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }, { passive: true });
        document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
        document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));
        document.querySelectorAll('a, button, .project-card, .contact-card, .softskill-chip, .langue-card')
            .forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
            });
    }

    /* ══════════════════════════════════════════════════════════════
       14. ANNÉE AUTOMATIQUE DU FOOTER
    ══════════════════════════════════════════════════════════════ */
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    /* ══════════════════════════════════════════════════════════════
       15. FERMER MODALE — touche Échap
    ══════════════════════════════════════════════════════════════ */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const open = document.querySelector('.modal.show');
            if (open) closeModal(open);
        }
    });
});
