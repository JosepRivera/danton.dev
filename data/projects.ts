export interface Project {
  title: string;
  description: string;
  detail: string;
  stack: string[];
  badge: string;
  badgeVariant: "done" | "wip" | "internship";
  github: string;
  accentColor: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Overload API",
    description: "Backend de una app de entrenamiento de fuerza basada en sobrecarga progresiva.",
    detail:
      "Calcula el volumen total de entrenamiento de forma automática, detecta PRs en tiempo real y estima el 1RM con la fórmula de Epley. Arquitectura modular con NestJS, tests con Vitest y documentación Swagger completa.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "Docker", "JWT", "Zod", "Swagger", "Vitest"],
    badge: "Terminado",
    badgeVariant: "done",
    github: "https://github.com/JosepRivera/overload-api",
    accentColor: "#6888c8",
    featured: true,
  },
  {
    title: "Tecsup Inventory API",
    description:
      "Sistema de inventario con IA para los laboratorios de Tecsup (~5 000 equipos en 20+ labs).",
    detail:
      "El técnico fotografía la etiqueta del equipo y Claude Vision extrae los datos estructurados automáticamente. También acepta dictado por voz vía Groq Whisper y genera reportes en PDF con ReportLab.",
    stack: ["FastAPI", "Python", "SQLite", "Claude Vision", "Groq Whisper", "ReportLab"],
    badge: "Pasantía · Terminado",
    badgeVariant: "internship",
    github: "https://github.com/JosepRivera/tecsup-inventory-api",
    accentColor: "#f59e0b",
  },
  {
    title: "SmartBite API",
    description: "Sistema de gestión integral para restaurantes medianos en Perú.",
    detail:
      "Ventas por rol, descuento automático de stock por receta, cierre de caja inmutable y predicción de demanda con Holt-Winters. Incluye asistente Text-to-SQL con Claude y app Kotlin que intercepta notificaciones de Yape y Plin.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "Claude API", "Groq Whisper", "Kotlin", "Docker"],
    badge: "En desarrollo",
    badgeVariant: "wip",
    github: "https://github.com/JosepRivera/smartbite-api",
    accentColor: "#10b981",
  },
];
