export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      links: [
        { label: "Sobre mí", href: "#sobre-mi", sectionId: "sobre-mi" },
        { label: "Proyectos", href: "#proyectos", sectionId: "proyectos" },
        { label: "Skills", href: "#skills", sectionId: "skills" },
        { label: "Experiencia", href: "#experiencia", sectionId: "experiencia" },
        { label: "Certificados", href: "#certificados", sectionId: "certificados" },
        { label: "Contacto", href: "#contacto", sectionId: "contacto" },
      ],
      goHome: "Ir al inicio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mainNav: "Navegación principal",
      skipToContent: "Saltar al contenido",
    },
    hero: {
      quote: "Creando software con propósito",
      role: "Full Stack Developer",
      description:
        "Construyo software para clientes finales. Hablo directo con quien lo va a usar y traduzco lo que necesita en requerimientos técnicos claros. Priorizo código mantenible sobre soluciones rápidas, y lo que el proyecto exige, lo aprendo.",
      seeProjects: "Ver proyectos",
      contact: "Contactar por LinkedIn",
      availability: "Disponible para colaborar en proyectos y equipos de desarrollo",
      ariaLabel: "Presentación",
      photoAlt: "Foto de perfil de Josep Rivera",
      githubAria: "GitHub de Josep Rivera",
      stats: [
        { value: "2", label: "clientes freelance" },
        { value: "5 000+", label: "activos gestionados" },
        { value: "< 3 s", label: "respuesta de consulta" },
        { value: "4", label: "sistemas construidos" },
      ],
    },
    about: {
      title: "Sobre mí",
      bio1: "Entre los 13 y los 15 años, lo que más me gustaba de una computadora era abrirla por dentro — cambiarle cosas, romperla, arreglarla, probar de todo sin buscar nada en particular. Esa curiosidad fue la que terminó llevándome a programar en serio.",
      bio2: "Hoy estoy en mi último año de Diseño y Desarrollo de Software en Tecsup, y antes de terminar la carrera ya construyo software para clientes reales: una app para operadores de campo, un sistema de gestión para un restaurante y el inventario con IA de los propios laboratorios de Tecsup.",
      bio3: "No me interesa escribir código por escribir. Me interesa que el sistema funcione, que sea legible para el siguiente desarrollador y que resuelva algo real.",
      bio4: "Fuera del código: gym, música y una lista de series que nunca termino.",
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
      subtitle: "Cuatro proyectos reales que resolvieron problemas concretos.",
      featured: "Proyecto destacado",
      viewOnGithub: "Ver en GitHub",
      comingSoon: "Próximamente",
      privateRepo: "Código privado · Cliente",
      viewVersionAria: "Ver {label} ({tech}) de este proyecto",
      viewCodeAria: "Ver código de {project} en GitHub",
    },
    skills: {
      title: "Skills",
      subtitle: "Cada tecnología de esta lista está en al menos uno de los proyectos de arriba.",
      categoryMap: {
        Lenguajes: "Lenguajes",
        "Bases de datos & ORM": "Bases de datos & ORM",
        "Calidad & Proceso": "Calidad & Proceso",
      } as Record<string, string>,
      provenByLabel: "Usado en",
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
      certAlt: "Certificado: {title}",
    },
    contact: {
      title: "¿Trabajamos juntos?",
      description:
        "Estoy disponible para proyectos, prácticas o conversaciones interesantes que impulsen tecnología con propósito.",
      highlight1: "proyectos, prácticas",
      highlight2: "conversaciones interesantes",
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
        { label: "Experience", href: "#experiencia", sectionId: "experiencia" },
        { label: "Certificates", href: "#certificados", sectionId: "certificados" },
        { label: "Contact", href: "#contacto", sectionId: "contacto" },
      ],
      goHome: "Go to homepage",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNav: "Main navigation",
      skipToContent: "Skip to content",
    },
    hero: {
      quote: "Building software with purpose",
      role: "Full Stack Developer",
      description:
        "I build software for real clients. I talk directly to the people who use it and turn what they need into clear technical requirements. I choose maintainable code over quick fixes, and whatever a project demands, I learn.",
      seeProjects: "See projects",
      contact: "Contact on LinkedIn",
      availability: "Available to collaborate on projects and development teams",
      ariaLabel: "Introduction",
      photoAlt: "Profile photo of Josep Rivera",
      githubAria: "Josep Rivera on GitHub",
      stats: [
        { value: "2", label: "freelance clients" },
        { value: "5,000+", label: "assets managed" },
        { value: "< 3 s", label: "query response" },
        { value: "4", label: "systems built" },
      ],
    },
    about: {
      title: "About me",
      bio1: "Between 13 and 15, what I liked most about a computer was opening it up — swapping things around, breaking it, fixing it, trying everything without looking for anything in particular. That curiosity is what eventually got me programming for real.",
      bio2: "Today I'm in my final year of Software Design and Development at Tecsup, and before finishing the degree I'm already building software for real clients: an app for field operators, a management system for a restaurant, and the AI inventory for Tecsup's own labs.",
      bio3: "I'm not interested in writing code for the sake of it. I care that the system works, that it's readable for the next developer, and that it solves something real.",
      bio4: "Outside the code: the gym, music, and a list of shows I never finish.",
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
      subtitle: "Four real projects that solved concrete problems.",
      featured: "Featured project",
      viewOnGithub: "View on GitHub",
      comingSoon: "Coming soon",
      privateRepo: "Private code · Client",
      viewVersionAria: "View the {label} ({tech}) version of this project",
      viewCodeAria: "View the source code for {project} on GitHub",
    },
    skills: {
      title: "Skills",
      subtitle: "Every technology on this list ships in at least one of the projects above.",
      categoryMap: {
        Lenguajes: "Languages",
        "Bases de datos & ORM": "Databases & ORM",
        "Calidad & Proceso": "Quality & Process",
      } as Record<string, string>,
      provenByLabel: "Used in",
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
      certAlt: "Certificate: {title}",
    },
    contact: {
      title: "Work with me?",
      description:
        "I'm available for projects, internships or interesting conversations that drive technology with purpose.",
      highlight1: "projects, internships",
      highlight2: "interesting conversations",
      contactBy: "Contact via",
    },
    footer: {
      builtBy: "Designed and built by",
    },
  },
} as const;

export type T = (typeof translations)["es"];
