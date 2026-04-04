import type { ReactNode } from "react";

export interface ProjectVersion {
  label: string;
  tech: string;
  status: "done" | "wip";
  repoUrl?: string;
  deployedUrl?: string;
}

export interface Project {
  title: string;
  description: ReactNode;
  detail: ReactNode;
  stack: string[];
  badge: string;
  badgeVariant: "done" | "wip" | "internship";
  github: string;
  accentColor: string;
  featured?: boolean;
  deployedUrl?: string;
  versions?: ProjectVersion[];
}

export const projects: Project[] = [
  {
    title: "Overload",
    description: (
      <>
        Backend de una app de{" "}
        <span className="text-storm-accent font-medium">entrenamiento de fuerza</span> basada en{" "}
        <span className="text-storm-accent font-medium">sobrecarga progresiva</span>.
      </>
    ),
    detail: (
      <>
        Calcula el <span className="text-storm-accent font-medium">volumen total</span>{" "}
        automáticamente, detecta{" "}
        <span className="text-storm-accent font-medium">PRs en tiempo real</span> y estima el{" "}
        <span className="text-storm-accent font-medium">1RM</span> con la fórmula de Epley.
        Arquitectura modular con NestJS, tests con Vitest y documentación Swagger completa.
      </>
    ),
    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "JWT",
      "Zod",
      "Swagger",
      "Vitest",
      "Flutter",
    ],
    badge: "Terminado",
    badgeVariant: "done",
    github: "https://github.com/JosepRivera/overload-api",
    accentColor: "#6888c8",
    featured: true,
    versions: [
      {
        label: "Mobile",
        tech: "Flutter",
        status: "wip",
        repoUrl: "https://github.com/JosepRivera/overload-mobile",
      },
    ],
  },
  {
    title: "Tecsup Inventory",
    description: (
      <>
        Sistema de <span className="text-amber-400 font-medium">inventario con IA</span> para
        laboratorios de Tecsup (~<span className="text-amber-400 font-medium">5 000 equipos</span>{" "}
        en 20+ labs).
      </>
    ),
    detail: (
      <>
        El técnico fotografía la etiqueta y{" "}
        <span className="text-amber-400 font-medium">Claude Vision</span> extrae los datos
        automáticamente. Acepta <span className="text-amber-400 font-medium">dictado por voz</span>{" "}
        vía Groq Whisper y genera{" "}
        <span className="text-amber-400 font-medium">reportes en PDF</span> con ReportLab.
      </>
    ),
    stack: [
      "FastAPI",
      "Python",
      "SQLite",
      "Claude Vision",
      "Groq Whisper",
      "ReportLab",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    badge: "Pasantía · Terminado",
    badgeVariant: "internship",
    github: "https://github.com/JosepRivera/tecsup-inventory-api",
    accentColor: "#f59e0b",
    versions: [
      {
        label: "Web",
        tech: "React",
        status: "done",
        repoUrl: "https://github.com/JosepRivera/tecsup-inventory-web",
        // TODO: agregar deployedUrl cuando esté listo
      },
    ],
  },
  {
    title: "SmartBite",
    description: (
      <>
        Sistema de <span className="text-emerald-400 font-medium">gestión integral</span> para{" "}
        <span className="text-emerald-400 font-medium">restaurantes medianos</span> en Perú.
      </>
    ),
    detail: (
      <>
        Ventas por rol,{" "}
        <span className="text-emerald-400 font-medium">descuento automático de stock</span> por
        receta, <span className="text-emerald-400 font-medium">cierre de caja inmutable</span> y
        predicción con <span className="text-emerald-400 font-medium">Holt-Winters</span>. Asistente{" "}
        <span className="text-emerald-400 font-medium">Text-to-SQL</span> con Claude y app Kotlin
        que intercepta notificaciones de Yape y Plin.
      </>
    ),
    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Claude API",
      "Groq Whisper",
      "Kotlin",
      "Docker",
      "Flutter",
    ],
    badge: "En desarrollo",
    badgeVariant: "wip",
    github: "https://github.com/JosepRivera/smartbite-api",
    accentColor: "#10b981",
    versions: [
      {
        label: "Web",
        tech: "Next.js",
        status: "wip",
      },
      {
        label: "Mobile",
        tech: "Flutter",
        status: "wip",
      },
    ],
  },
];
