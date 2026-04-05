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
  descriptionEn: ReactNode;
  detailEn: ReactNode;
  stack: string[];
  badge: string;
  badgeEn: string;
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
    descriptionEn: (
      <>
        Backend of a <span className="text-storm-accent font-medium">strength training</span> app
        based on <span className="text-storm-accent font-medium">progressive overload</span>.
      </>
    ),
    detailEn: (
      <>
        Automatically calculates <span className="text-storm-accent font-medium">total volume</span>
        , detects <span className="text-storm-accent font-medium">PRs in real time</span> and
        estimates <span className="text-storm-accent font-medium">1RM</span> with Epley's formula.
        Modular architecture with NestJS, tests with Vitest and full Swagger documentation.
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
    badgeEn: "Finished",
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
    descriptionEn: (
      <>
        <span className="text-amber-400 font-medium">AI inventory system</span> for Tecsup labs (~
        <span className="text-amber-400 font-medium">5,000 pieces of equipment</span> across 20+
        labs).
      </>
    ),
    detailEn: (
      <>
        The technician photographs the label and{" "}
        <span className="text-amber-400 font-medium">Claude Vision</span> automatically extracts the
        data. Accepts <span className="text-amber-400 font-medium">voice dictation</span> via Groq
        Whisper and generates <span className="text-amber-400 font-medium">PDF reports</span> with
        ReportLab.
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
    badgeEn: "Internship · Finished",
    badgeVariant: "internship",
    github: "https://github.com/JosepRivera/tecsup-inventory-api",
    accentColor: "#f59e0b",
    versions: [
      {
        label: "Web",
        tech: "React",
        status: "done",
        repoUrl: "https://github.com/JosepRivera/tecsup-inventory-web",
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
    descriptionEn: (
      <>
        <span className="text-emerald-400 font-medium">Comprehensive management system</span> for{" "}
        <span className="text-emerald-400 font-medium">mid-sized restaurants</span> in Peru.
      </>
    ),
    detailEn: (
      <>
        Role-based sales,{" "}
        <span className="text-emerald-400 font-medium">automatic stock deduction</span> per recipe,{" "}
        <span className="text-emerald-400 font-medium">immutable cash closure</span> and{" "}
        <span className="text-emerald-400 font-medium">Holt-Winters</span> forecasting.{" "}
        <span className="text-emerald-400 font-medium">Text-to-SQL</span> assistant with Claude and
        a Kotlin app that intercepts Yape and Plin notifications.
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
    badgeEn: "In development",
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
