import DartOriginal from "devicons-react/icons/DartOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import FlutterOriginal from "devicons-react/icons/FlutterOriginal";
import KotlinOriginal from "devicons-react/icons/KotlinOriginal";
import NestjsOriginal from "devicons-react/icons/NestjsOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import PrismaOriginal from "devicons-react/icons/PrismaOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import SqliteOriginal from "devicons-react/icons/SqliteOriginal";
import SwaggerOriginal from "devicons-react/icons/SwaggerOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import VitestOriginal from "devicons-react/icons/VitestOriginal";
import type { FC } from "react";

function ZodIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2.584 3.582a2.247 2.247 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.248 2.248 0 0 1-.624 2.443l-9.61 8.52a2.247 2.247 0 0 1-2.963.018L.776 12.773a2.248 2.248 0 0 1-.64-2.467Zm12.038 4.887-9.11 5.537 5.74 5.007c.456.399 1.139.396 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z"
        fill="#3E67B1"
      />
    </svg>
  );
}

type IconFC = FC<{ size?: number }>;

interface TechMeta {
  Icon?: IconFC;
  /**
   * Chip tint. Each is the vendor's own identity color, lightened where the
   * official value is too dark to read as a tint on the storm ground.
   */
  color?: string;
}

const techMeta: Record<string, TechMeta> = {
  NestJS: { Icon: NestjsOriginal as IconFC, color: "#E0234E" },
  FastAPI: { Icon: FastapiOriginal as IconFC, color: "#14B8A6" },
  PostgreSQL: { Icon: PostgresqlOriginal as IconFC, color: "#6E9BE8" },
  Prisma: { Icon: PrismaOriginal as IconFC, color: "#8FA5F3" },
  SQLite: { Icon: SqliteOriginal as IconFC, color: "#7BC8E8" },
  Docker: { Icon: DockerOriginal as IconFC, color: "#2496ED" },
  Zod: { Icon: ZodIcon, color: "#6B8FD4" },
  Swagger: { Icon: SwaggerOriginal as IconFC, color: "#85EA2D" },
  Vitest: { Icon: VitestOriginal as IconFC, color: "#FCC72B" },
  Flutter: { Icon: FlutterOriginal as IconFC, color: "#54C5F8" },
  Dart: { Icon: DartOriginal as IconFC, color: "#4BA3E3" },
  Python: { Icon: PythonOriginal as IconFC, color: "#FFD43B" },
  Kotlin: { Icon: KotlinOriginal as IconFC, color: "#7F52FF" },
  React: { Icon: ReactOriginal as IconFC, color: "#61DAFB" },
  TypeScript: { Icon: TypescriptOriginal as IconFC, color: "#5B9BD5" },
  "Tailwind CSS": { Icon: TailwindcssOriginal as IconFC, color: "#06B6D4" },
  "Claude API": { color: "#D97757" },
  "Claude Vision": { color: "#D97757" },
  "Groq Whisper": { color: "#F55036" },
};

/** Anything absent here renders as the neutral storm chip — no invented brand. */
export function getTechMeta(tech: string): TechMeta {
  return techMeta[tech] ?? {};
}
