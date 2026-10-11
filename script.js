/* =========================================================
   Fabrice Tamaffo Portfolio
   - Instant English/French language switcher
   - Mobile navigation
   - Small reveal-on-scroll animation
   ========================================================= */

const translations = {
  en: {
    navEducation: "Education",
    availability: "OPEN TO LEARNING & COLLABORATION",
    downloadCV: "Download CV ↓",
    
    project4Title: "Guest House Website",
    project4Desc: "Developed a guest house website with room and service information, maps and directions, and database integration for reservations and guest information.",
    project5Title: "ATM & Library Management Applications",
    project5Desc: "Created Java applications featuring user authentication, account operations, and basic data management.",
    project6Title: "Tic-Tac-Toe Game",
    project6Desc: "Built a Tic-Tac-Toe game in Python using fundamental programming concepts and game logic.",
    experience2Role: "Web Development & Digitalization",
    experience2Period: "June – July 2025",
    experience2Desc: "Designed and developed a responsive guest house website with HTML, CSS, and JavaScript. Published room information, availability, and services online, and added maps and directions to help visitors locate the property.",
    educationTitle: "Education",
    eduDegree: "Bachelor’s in Computer Science",
    eduDegreeDate: "September 2023 – Present",
    eduA: "GCE Advanced Level (Science)",
    eduO: "GCE Ordinary Level (Science)",
    languagesTitle: "Languages",
    languagesValue: "French (native) · English (advanced)",
    pageTitle: 'Fabrice Tamaffo | Portfolio',
    skipLink: 'Skip to content',
    navAbout: 'About',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navTools: 'Tools',
    navContact: 'Contact',
    heroEyebrow: 'Software Engineering Student / Junior Developer',
    heroTitle: 'Building simple and useful digital solutions.',
    heroDescription: 'I am Fabrice Tamaffo, a software engineering student and junior developer with an interest in web development and practical software solutions.',
    heroBtnProjects: 'View Projects',
    heroBtnContact: 'Contact Me',
    photoAlt: 'Portrait of Fabrice Tamaffo',
    aboutTitle: 'About Me',
    aboutText: 'I am Fabrice Tamaffo, a software engineering student and junior developer. I enjoy building well-structured digital solutions and learning through real projects. My interests include software development, web applications, and user-focused design. I am currently pursuing a Bachelor’s degree in Computer Science at PKFokam Institute of Excellence.',
    projectsTitle: 'Projects',
    project1Title: 'Design and Implementation of a Configurable Validation Workflow within the EHR Platform',
    project1FrenchTitle: "French title: Conception et mise en place d'un workflow de validation configurable au sein de la plateforme EHR",
    project1Desc: 'This project focused on the design and integration of a configurable validation workflow within the E-Human Resources (EHR) platform. The objective was to support a more flexible validation process that can adapt to different approval needs.',
    project2Title: 'LandVerifyCM: Land Verification Portal',
    project2Desc: 'LandVerifyCM is a secure, centralized web platform designed to combat land fraud in Cameroon. It enables citizens, buyers, and legal professionals to verify land ownership, detect duplicate or suspicious title records, and view GPS-based parcel locations through a bilingual English/French interface.',
    project3Label: 'Institutional Web Project',
    project3Title: 'Timetable Management System',
    project3Desc: 'We created a responsive website for managing timetables within an institution. The website was built to help organize institutional schedules.',
    experienceTitle: 'Experience',
    experienceRole: 'Software Development Intern',
    experiencePeriod: 'July 1 – August 31, 2026',
    experienceDepartment: 'Software Solutions Department',
    experienceDesc: 'From July 1st to August 31st, I completed an internship at Intelligentsia S.A. I was assigned to the Software Solutions Department, where I worked on the design and integration of a configurable validation workflow in the E-Human Resources (EHR) platform.',
    toolsTitle: 'Tools & Technologies',
    contactTitle: 'Contact',
    contactText: 'Feel free to contact me for opportunities, collaborations, or professional discussions.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    backToTop: 'Back to top'
  },
  fr: {
    navEducation: "Formation",
    availability: "OUVERT À L’APPRENTISSAGE ET AUX COLLABORATIONS",
    downloadCV: "Télécharger mon CV ↓",
    moreProjects: "Autres projets présentés dans mon CV",
    project4Title: "Site web pour une maison d’hôtes",
    project4Desc: "Développement d’un site web pour une maison d’hôtes présentant les chambres et les services, avec une carte, des itinéraires et une intégration de base de données pour les réservations et les informations clients.",
    project5Title: "Applications de gestion de distributeur automatique et de bibliothèque",
    project5Desc: "Création d’applications Java intégrant l’authentification des utilisateurs, les opérations de compte et la gestion de données.",
    project6Title: "Jeu du morpion",
    project6Desc: "Développement d’un jeu du morpion en Python mettant en pratique les fondamentaux de la programmation et la logique de jeu.",
    experience2Role: "Développement web et digitalisation",
    experience2Period: "Juin – juillet 2025",
    experience2Desc: "Conception et développement d’un site responsive pour une maison d’hôtes avec HTML, CSS et JavaScript. Mise en ligne des informations sur les chambres, les disponibilités et les services, ainsi que de cartes et d’itinéraires.",
    educationTitle: "Formation",
    eduDegree: "Licence en informatique",
    eduDegreeDate: "Septembre 2023 – aujourd’hui",
    eduA: "GCE Advanced Level (sciences)",
    eduO: "GCE Ordinary Level (sciences)",
    languagesTitle: "Langues",
    languagesValue: "Français (langue maternelle) · Anglais (niveau avancé)",
    pageTitle: 'Fabrice Tamaffo | Portfolio',
    skipLink: 'Aller au contenu',
    navAbout: 'À propos',
    navProjects: 'Projets',
    navExperience: 'Expérience',
    navTools: 'Outils',
    navContact: 'Contact',
    heroEyebrow: 'Étudiant en génie logiciel / Développeur junior',
    heroTitle: 'Créer des solutions numériques simples et utiles.',
    heroDescription: "Je suis Fabrice Tamaffo, étudiant en génie logiciel et développeur junior, avec un intérêt pour le développement web et les solutions logicielles pratiques.",
    heroBtnProjects: 'Voir les projets',
    heroBtnContact: 'Me contacter',
    photoAlt: 'Portrait de Fabrice Tamaffo',
    aboutTitle: 'À propos de moi',
    aboutText: "Je suis Fabrice Tamaffo, étudiant en génie logiciel et développeur junior. J'aime concevoir des solutions numériques bien structurées et apprendre à travers des projets concrets. Mes centres d'intérêt portent sur le développement logiciel, les applications web et la conception centrée sur l'utilisateur. Je prépare actuellement une licence en informatique au PKFokam Institute of Excellence.",
    projectsTitle: 'Projets',
    project1Title: "Conception et mise en place d'un workflow de validation configurable au sein de la plateforme EHR",
   
    project1Desc: "Ce projet portait sur la conception et l'intégration d'un workflow de validation configurable au sein de la plateforme E-Human Resources (EHR). L'objectif était de mettre en place un processus de validation plus flexible, capable de s'adapter à différents besoins d'approbation.",
    project2Title: 'LandVerifyCM : Portail de vérification foncière',
    project2Desc: "LandVerifyCM est une plateforme web sécurisée et centralisée conçue pour lutter contre la fraude foncière au Cameroun. Elle permet aux citoyens, aux acheteurs et aux professionnels du droit de vérifier la propriété foncière, de détecter les titres suspects ou en double et de consulter la localisation GPS des parcelles grâce à une interface bilingue français/anglais.",
    project3Label: 'Projet web institutionnel',
    project3Title: 'Système de gestion des emplois du temps',
    project3Desc: "Nous avons créé un site web responsive pour la gestion des emplois du temps au sein d'un établissement. Ce site permet d’organiser les emplois du temps de l’établissement.",
    experienceTitle: 'Expérience',
    experienceRole: 'Stagiaire en développement logiciel',
    experiencePeriod: "Du 1er juillet au 31 août 2026",
    experienceDepartment: 'Direction des solutions logicielles',
    experienceDesc: "Du 1er juillet au 31 août, j'ai effectué un stage à Intelligentsia S.A. J'ai été affecté à la Direction des solutions logicielles, où j'ai travaillé sur la conception et l'intégration d'un workflow de validation configurable dans la plateforme E-Human Resources (EHR).",
    toolsTitle: 'Outils et technologies',
    contactTitle: 'Contact',
    contactText: "N'hésitez pas à me contacter pour des opportunités, des collaborations ou des échanges professionnels.",
    contactEmail: 'E-mail',
    contactPhone: 'Téléphone',
    backToTop: 'Retour en haut'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const currentYear = document.getElementById('currentYear');

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.getAttribute('data-i18n-alt');
    if (dict[key]) {
      element.setAttribute('alt', dict[key]);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  try { localStorage.setItem('portfolioLanguage', lang); } catch (error) { /* Local storage is optional. */ }
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 780) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }
  });
});

currentYear.textContent = new Date().getFullYear();

let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolioLanguage') || 'en'; } catch (error) { /* Use English. */ }
applyLanguage(savedLanguage);

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
