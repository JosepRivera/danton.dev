export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      links: [
        { label: "Sobre mí", href: "#sobre-mi", sectionId: "sobre-mi" },
        { label: "Proyectos", href: "#proyectos", sectionId: "proyectos" },
        { label: "Skills", href: "#skills", sectionId: "skills" },
        { label: "Certificados", href: "#certificados", sectionId: "certificados" },
        { label: "Contacto", href: "#contacto", sectionId: "contacto" },
      ],
      downloadCv: "Descargar CV",
      goHome: "Ir al inicio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      quote: "Creando software con propósito",
      role: "Backend Developer",
      description:
        "Estoy en el último año de Diseño y Desarrollo de Software en Tecsup. Construyo APIs que escalan, integro IA en flujos reales y le doy importancia al código que otros puedan mantener.",
      seeProjects: "Ver proyectos",
      contact: "Contactar",
      availability: "Disponible para colaborar en proyectos y equipos de desarrollo",
      ariaLabel: "Presentación",
    },
    about: {
      title: "Sobre mí",
      bio1parts: {
        prefix: "Estoy en el último año de",
        degree: "Diseño y Desarrollo de Software",
        at: "en",
        school: "Tecsup",
        city: ", Lima. Desde el primer año me incliné hacia el",
        area: "backend",
        rest: ": las",
        highlight: "APIs bien diseñadas",
        rest2:
          ", los sistemas que escalan y el código que otros puedan mantener me resultan más interesantes que cualquier otra cosa.",
      },
      bio1: "Estoy en el último año de Diseño y Desarrollo de Software en Tecsup, Lima. Desde el primer año me incliné hacia el backend: las APIs bien diseñadas, los sistemas que escalan y el código que otros puedan mantener me resultan más interesantes que cualquier otra cosa.",
      bio2: "Trabajo principalmente con NestJS, FastAPI y Docker. He llevado proyectos desde el modelo de datos hasta el deploy, e integrado IA generativa en flujos reales que resolvieron problemas concretos de usuarios reales.",
      bio3: "No me interesa escribir código por escribir. Me interesa que el sistema funcione, que sea legible para el siguiente desarrollador y que resuelva algo real.",
      languagesLabel: "Idiomas",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B1 · Finalizado" },
      ],
      howIWork: "Cómo trabajo",
      softSkills: [
        {
          title: "Entiendo el problema antes de escribir código",
          desc: "Analizo el contexto, los casos borde y las restricciones antes de abrir el editor.",
        },
        {
          title: "Entrego trabajo terminado, no 'casi listo'",
          desc: "Si lo comprometí, lo entrego. Si hay un bloqueante, lo comunico antes, no después.",
        },
        {
          title: "Pido retroalimentación y la aplico",
          desc: "El ego no me impide mejorar. El feedback es información, no un ataque personal.",
        },
        {
          title: "Aprendo lo que necesito para ejecutar",
          desc: "Cuando el proyecto lo exige, investigo, aprendo y lo implemento. No espero tenerlo todo claro.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Tres proyectos reales que resolvieron problemas concretos.",
      featured: "Proyecto destacado",
      viewOnGithub: "Ver en GitHub",
      comingSoon: "Próximamente",
    },
    skills: {
      title: "Skills",
      subtitle: "Tecnologías que he usado a lo largo de mi carrera y proyectos.",
      categoryMap: {
        Lenguajes: "Lenguajes",
        "Bases de datos & ORM": "Bases de datos & ORM",
        "Herramientas & Tooling": "Herramientas & Tooling",
      } as Record<string, string>,
    },
    experience: {
      title: "Formación & Experiencia",
      educationLabel: "Educación",
      degreeTitle: "Diseño y Desarrollo de Software",
      degreeSchool: "Tecsup, Lima",
      degreeYears: "2023 – 2026",
      degreeDescription:
        "Carrera técnica de 3 años en Tecsup con enfoque en ingeniería de software. Cubre backend, frontend, mobile (Android, iOS, Flutter), cloud, DevOps, bases de datos y testing.",
      experienceLabel: "Experiencia",
      internshipTitle: "Pasantía · Desarrollador",
      internshipProject: "Sistema de Inventario con IA — Tecsup",
      internshipYear: "2026",
      internshipBullets: [
        "Desarrollé el backend y el frontend web de un sistema de inventario con IA para los laboratorios de Tecsup (~5 000 equipos en 20+ labs).",
        "Integré Claude Vision para OCR de etiquetas físicas y Groq Whisper para dictado de voz y consultas en lenguaje natural.",
        "Generación automática de reportes en PDF y Excel con ReportLab y OpenPyXL.",
      ],
      achievementsLabel: "Logros",
    },
    certificates: {
      title: "Certificados",
      subtitle: "Cursos y certificaciones completados — más de 275 horas de formación.",
      viewCertificate: "Ver certificado",
      downloadPdf: "Descargar PDF",
    },
    contact: {
      title: "¿Trabajamos juntos?",
      description:
        "Estoy disponible para proyectos, prácticas o conversaciones interesantes que impulsen tecnología con propósito.",
      highlight1: "proyectos, prácticas",
      highlight2: "conversaciones interesantes",
      downloadCv: "Descargar CV",
      contactBy: "Contactar por",
    },
    footer: {
      builtBy: "Diseñado y construido por",
    },
  },

  en: {
    nav: {
      links: [
        { label: "About", href: "#sobre-mi", sectionId: "sobre-mi" },
        { label: "Projects", href: "#proyectos", sectionId: "proyectos" },
        { label: "Skills", href: "#skills", sectionId: "skills" },
        { label: "Certificates", href: "#certificados", sectionId: "certificados" },
        { label: "Contact", href: "#contacto", sectionId: "contacto" },
      ],
      downloadCv: "Download CV",
      goHome: "Go to homepage",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      quote: "Building software with purpose",
      role: "Backend Developer",
      description:
        "I'm in my final year of Software Design and Development at Tecsup. I build scalable APIs, integrate AI into real workflows, and care about code that others can maintain.",
      seeProjects: "See projects",
      contact: "Contact",
      availability: "Available to collaborate on projects and development teams",
      ariaLabel: "Introduction",
    },
    about: {
      title: "About me",
      bio1: "I'm in my final year of Software Design and Development at Tecsup, Lima. From year one I leaned toward backend: well-designed APIs, systems that scale, and code that others can maintain are more interesting to me than anything else.",
      bio2: "I mainly work with NestJS, FastAPI and Docker. I've taken projects from the data model through to deploy, and integrated generative AI into real workflows that solved concrete problems for real users.",
      bio3: "I'm not interested in writing code for the sake of it. I care that the system works, that it's readable for the next developer, and that it solves something real.",
      languagesLabel: "Languages",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B1 · Completed" },
      ],
      howIWork: "How I work",
      softSkills: [
        {
          title: "I understand the problem before writing code",
          desc: "I analyze context, edge cases, and constraints before opening the editor.",
        },
        {
          title: "I deliver finished work, not 'almost done'",
          desc: "If I committed to it, I deliver. If there's a blocker, I communicate it before, not after.",
        },
        {
          title: "I ask for feedback and apply it",
          desc: "Ego doesn't stop me from improving. Feedback is information, not a personal attack.",
        },
        {
          title: "I learn what I need to execute",
          desc: "When the project demands it, I research, learn and implement. I don't wait until everything is clear.",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Three real projects that solved concrete problems.",
      featured: "Featured project",
      viewOnGithub: "View on GitHub",
      comingSoon: "Coming soon",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I've used throughout my career and projects.",
      categoryMap: {
        Lenguajes: "Languages",
        "Bases de datos & ORM": "Databases & ORM",
        "Herramientas & Tooling": "Tools & Tooling",
      } as Record<string, string>,
    },
    experience: {
      title: "Education & Experience",
      educationLabel: "Education",
      degreeTitle: "Software Design and Development",
      degreeSchool: "Tecsup, Lima",
      degreeYears: "2023 – 2026",
      degreeDescription:
        "3-year technical degree at Tecsup focused on software engineering. Covers backend, frontend, mobile (Android, iOS, Flutter), cloud, DevOps, databases and testing.",
      experienceLabel: "Experience",
      internshipTitle: "Internship · Developer",
      internshipProject: "AI Inventory System — Tecsup",
      internshipYear: "2026",
      internshipBullets: [
        "Developed the backend and web frontend of an AI-powered inventory system for Tecsup labs (~5,000 pieces of equipment across 20+ labs).",
        "Integrated Claude Vision for physical label OCR and Groq Whisper for voice dictation and natural language queries.",
        "Automatic report generation in PDF and Excel with ReportLab and OpenPyXL.",
      ],
      achievementsLabel: "Achievements",
    },
    certificates: {
      title: "Certificates",
      subtitle: "Completed courses and certifications — over 275 hours of training.",
      viewCertificate: "View certificate",
      downloadPdf: "Download PDF",
    },
    contact: {
      title: "Work with me?",
      description:
        "I'm available for projects, internships or interesting conversations that drive technology with purpose.",
      highlight1: "projects, internships",
      highlight2: "interesting conversations",
      downloadCv: "Download CV",
      contactBy: "Contact via",
    },
    footer: {
      builtBy: "Designed and built by",
    },
  },
} as const;

export type T = (typeof translations)["es"];
