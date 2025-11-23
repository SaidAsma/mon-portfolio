// Données des projets avec VRAIS liens GitHub
const projectData = {
    kidopilot: {
        title: "KIDOPILOT - Application mobile de suivi et bien-être des enfants",
        description: "Développement d'une plateforme intelligente pour le suivi intégré de l'éducation et de la santé des enfants, combinant des modules interactifs pour les parents et les enfants. Application mobile développée avec React Native et intégrant des technologies d'IA avancées.",
        technologies: ["Node.js", "React Native", "GPT-4", "Whisper", "Power BI", "MySQL", "Git", "Postman", "Expo Go", "JWT", "bcrypt", "REST API"],
        image: "photo/kido.png",
        githubLinks: [
            { name: "Code Source Frontend", url: "https://github.com/SaidAsma/Kidopilot-Frontend.git" },
            { name: "Code Source Backend", url: "https://github.com/SaidAsma/Kidopilot-Backend.git" }
        ],
        videos: [
            {
                title: "Démonstration du Système d'Authentification Sécurisée",
                description: "Cette vidéo présente le système complet d'authentification et de sécurité implémenté dans KIDOPILOT :",
                src: "video/Video Project.mp4",
                features: [
                    "Inscription sécurisée avec validation des données côté client et serveur",
                    "Connexion avec authentification JWT (JSON Web Tokens)",
                    "Gestion des rôles utilisateurs (Parent/Enfant/Administrateur)",
                    "Protection des routes sensibles avec middleware d'authentification",
                    "Refresh tokens automatique pour maintenir la session",
                    "Déconnexion sécurisée avec invalidation des tokens",
                    "Chiffrement des mots de passe avec bcrypt",
                    "Validation des emails et réinitialisation de mot de passe"
                ]
            },
            {
                title: "Démonstration Vidéo - Fonctionnalités Principales",
                description: "Présentation des principales fonctionnalités de l'application KIDOPILOT :",
                src: "video/Kidopilot.mp4"
            }
        ]
    },
    stagetn: {
        title: "Stage.tn - Plateforme de gestion des offres de stages",
        description: "Conception d'une plateforme web pour centraliser la gestion des offres de stages, permettant aux étudiants de trouver des stages et aux entreprises de publier leurs offres. Développement full-stack avec Symfony et React.js.",
        technologies: ["Symfony 6", "React.js", "Bootstrap", "Power BI", "MySQL", "REST API", "Agile/Scrum"],
        image: "images/stagetn-logo.png",
        githubLinks: [
            { name: "Backend Symfony", url: "https://github.com/SaidAsma/StageTn---Backend.git" },
            { name: "Frontend React", url: "https://github.com/SaidAsma/StageTn---Frontend.git" }
        ],
        videos: [
            {
                title: "Démonstration Vidéo : Frontend",
                description: "Présentation de l'interface utilisateur de la plateforme Stage.tn :",
                src: "video/Stage.mp4"
            }
        ]
    },
    microservices: {
        title: "Architecture Microservices",
        description: "Développement d'une architecture basée sur les microservices avec implémentation de services REST pour la communication entre différents modules. Ce projet a permis de comprendre les avantages et défis de la décomposition d'une application en services indépendants.",
        technologies: ["Spring Boot", "Spring Cloud", "Docker", "Kubernetes", "REST API", "Eureka", "Zuul"],
        githubLinks: [
            { name: "Code Source", url: "https://github.com/SaidAsma/microservices-project.git" }
        ]
    },
    chatbot: {
        title: "ChatBot Mathématique",
        description: "Développement d'un chatbot utilisant le traitement du langage naturel (NLP) en Python pour résoudre des problèmes mathématiques simples. Le chatbot pouvait comprendre les questions en langage naturel et fournir des réponses précises avec des explications.",
        technologies: ["Python", "NLTK", "spaCy", "TensorFlow", "Flask", "JavaScript"],
        githubLinks: [
            { name: "Code Source", url: "https://github.com/SaidAsma/chatbot-math.git" }
        ]
    },
    ai: {
        title: "Projet d'Intelligence Artificielle",
        description: "Réalisation d'un projet en intelligence artificielle intégrant des algorithmes d'apprentissage automatique et exploration de modèles avancés. Ce projet a couvert plusieurs aspects de l'IA, de la classification d'images à la prédiction de séries temporelles.",
        technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
        githubLinks: [
            { name: "Code Source", url: "https://github.com/SaidAsma/Project-IA.git" }
        ]
    },
    pharma: {
        title: "Pharma Management System - Système de Gestion Pharmaceutique",
        description: "Application Spring Boot complète pour la gestion d'une pharmacie, incluant la gestion des utilisateurs, produits, commandes et factures. Développé avec une architecture MVC et une interface web responsive avec Thymeleaf. Le système permet la gestion complète du stock, la création de commandes et la génération automatique de factures.",
        technologies: [
            "Spring Boot 3.x", 
            "Java 17+", 
            "Spring Data JPA", 
            "Hibernate", 
            "MySQL", 
            "Thymeleaf", 
            "Maven", 
            "Spring MVC",
            "REST API",
            "H2 Database",
            "Bootstrap",
            "HTML5/CSS3"
        ],
        image: "images/pharma-system.png",
        githubLinks: [
            { name: "Code Source Complet", url: "https://github.com/SaidAsma/Systeme-de-Gestion-Pharma.git" }
        ],
        features: [
            "Gestion complète des utilisateurs (CRUD)",
            "Catalogue des produits avec gestion de stock",
            "Système de commandes avec relations Many-to-Many",
            "Génération automatique de factures",
            "Interface d'administration avec Thymeleaf",
            "API REST pour toutes les entités",
            "Base de données relationnelle MySQL/H2",
            "Architecture MVC respectant les bonnes pratiques Spring"
        ]
    }
};

// Fonction pour jouer les vidéos
function playVideo(videoId) {
    const video = document.getElementById(videoId);
    video.play();
    video.controls = true;
    // Masquer l'overlay après le début de la lecture
    video.parentElement.querySelector('.video-overlay').style.display = 'none';
}

// Gestion des boutons "Learn More" pour tous les projets
document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Fermer le modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('projectModal').classList.remove('active');
});

// Fermer le modal en cliquant à l'extérieur
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// Fonction pour ouvrir le modal avec les détails du projet
function openProjectModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');
    
    // Remplir le modal avec les données du projet
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    
    // Mettre à jour le logo avec une image
    const modalLogo = document.getElementById('modalLogo');
    if (project.image) {
        modalLogo.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
    } else {
        // Fallback vers une icône si l'image n'est pas disponible
        modalLogo.innerHTML = `<i class="fas fa-project-diagram"></i>`;
    }
    
    // Mettre à jour les technologies
    const technologiesContainer = document.getElementById('modalTechnologies');
    technologiesContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'academic-tag';
        tag.textContent = tech;
        technologiesContainer.appendChild(tag);
    });
    
    // Mettre à jour les liens GitHub
    const githubLinksContainer = document.getElementById('modalGithubLinks');
    githubLinksContainer.innerHTML = '';
    
    if (project.githubLinks && project.githubLinks.length > 0) {
        project.githubLinks.forEach(link => {
            const githubLink = document.createElement('a');
            githubLink.href = link.url;
            githubLink.target = "_blank";
            githubLink.className = "github-link";
            githubLink.innerHTML = `<i class="fab fa-github"></i> ${link.name}`;
            githubLinksContainer.appendChild(githubLink);
        });
    }
    
    // Mettre à jour les vidéos (pour KIDOPILOT et Stage.tn)
    const videosContainer = document.getElementById('modalVideos');
    videosContainer.innerHTML = '';
    
    if (project.videos && project.videos.length > 0) {
        project.videos.forEach((video, index) => {
            const videoSection = document.createElement('div');
            videoSection.className = 'video-demo';
            videoSection.style.marginTop = '2rem';
            
            videoSection.innerHTML = `
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                <div class="video-container">
                    <video id="modal-video-${projectId}-${index}" controls>
                        <source src="${video.src}" type="video/mp4">
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                    <div class="video-overlay">
                        <h3>${project.title}</h3>
                        <div class="play-btn" onclick="playVideo('modal-video-${projectId}-${index}')">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
            `;
            
            // Ajouter les fonctionnalités d'authentification pour KIDOPILOT
            if (video.features && video.features.length > 0) {
                const authFeatures = document.createElement('div');
                authFeatures.className = 'auth-features';
                authFeatures.innerHTML = `
                    <h5>Fonctionnalités de sécurité démontrées :</h5>
                    <ul>
                        ${video.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                `;
                videoSection.appendChild(authFeatures);
            }
            
            videosContainer.appendChild(videoSection);
        });
    }
    
    // Afficher le modal
    modal.classList.add('active');
}

// Animation de défilement fluide pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message! Je vous répondrai dès que possible.');
    this.reset();
});

// Menu mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Gestion du header fixe avec effet au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});

// Données des certifications avec photos
const certificationData = {
    ccna1: {
        title: "CCNA 1 - Introduction to Networks",
        organization: "Cisco Certified Network Associate",
        description: "Certification Cisco CCNA 1 couvrant les fondamentaux des réseaux informatiques",
        logo: "photo/cisco.png",
       
    },
    ccna2: {
        title: "CCNA 2 - Routing and Switching Essentials",
        organization: "Cisco Certified Network Associate",
        description: "Certification Cisco CCNA 2 spécialisée dans le routage et la commutation",
        logo: "photo/cisco.png",
     
    },
    database: {
        title: "Database Fundamentals",
        organization: "IT Information Technology Specialist",
        description: "Certification en fondamentaux des bases de données relationnelles",
        logo: "photo/DB.png",
       
    },
    delf: {
        title: "DELF B2",
        organization: "Diplôme d'Études en Langue Française",
        description: "Certification de niveau B2 en langue française",
        logo: "photo/DELF.png",
     
    }
};

// Fonction pour ouvrir le modal de certification
function openCertificationModal(certId) {
    const cert = certificationData[certId];
    const modal = document.getElementById('certificationModal');
    const modalImg = document.getElementById('certificationModalImg');
    const modalTitle = document.getElementById('certificationModalTitle');
    
    modalImg.src = cert.image;
    modalImg.alt = cert.title;
    modalTitle.textContent = cert.title;
    
    modal.classList.add('active');
}

// Fermer le modal de certification
document.getElementById('closeCertificationModal').addEventListener('click', function() {
    document.getElementById('certificationModal').classList.remove('active');
});

// Fermer le modal en cliquant à l'extérieur
document.getElementById('certificationModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// Fonction pour générer les cartes de certifications
function generateCertificationCards() {
    const container = document.getElementById('certificationsContainer');
    
    Object.keys(certificationData).forEach(certId => {
        const cert = certificationData[certId];
        const card = document.createElement('div');
        card.className = 'certification-card';
        
        card.innerHTML = `
            <div class="certification-header">
                <div class="certification-logo">
                    <img src="${cert.logo}" alt="${cert.organization}" onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\"fas fa-certificate\" style=\"font-size: 1.5rem; color: #9c27b0;\"></i>';">
                </div>
                <div class="certification-info">
                    <h3>${cert.title}</h3>
                    <p>${cert.organization}</p>
                </div>
            </div>
          
            
        `;
        
        container.appendChild(card);
    });
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    generateCertificationCards();
});
