"use client";

import DartOriginal from "devicons-react/icons/DartOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import FlutterOriginal from "devicons-react/icons/FlutterOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import KotlinOriginal from "devicons-react/icons/KotlinOriginal";
import NestjsOriginal from "devicons-react/icons/NestjsOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import PrismaOriginal from "devicons-react/icons/PrismaOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import SqliteOriginal from "devicons-react/icons/SqliteOriginal";
import SwaggerOriginal from "devicons-react/icons/SwaggerOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import VitestOriginal from "devicons-react/icons/VitestOriginal";
import type { FC } from "react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

function ZodIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2.584 3.582a2.247 2.247 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.248 2.248 0 0 1-.624 2.443l-9.61 8.52a2.247 2.247 0 0 1-2.963.018L.776 12.773a2.248 2.248 0 0 1-.64-2.467Zm12.038 4.887-9.11 5.537 5.74 5.007c.456.399 1.139.396 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z"
        fill="#3E67B1"
      />
    </svg>
  );
}

function ScrumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <rect width="18" height="18" rx="4" fill="#009FDA" />
      <text
        x="9"
        y="13"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        S
      </text>
    </svg>
  );
}

type IconFC = FC<{ size?: number }>;

const iconMap: Record<string, IconFC> = {
  nestjs: NestjsOriginal as IconFC,
  fastapi: FastapiOriginal as IconFC,
  typescript: TypescriptOriginal as IconFC,
  python: PythonOriginal as IconFC,
  kotlin: KotlinOriginal as IconFC,
  dart: DartOriginal as IconFC,
  postgresql: PostgresqlOriginal as IconFC,
  prisma: PrismaOriginal as IconFC,
  sqlite: SqliteOriginal as IconFC,
  docker: DockerOriginal as IconFC,
  git: GitOriginal as IconFC,
  zod: ZodIcon,
  swagger: SwaggerOriginal as IconFC,
  flutter: FlutterOriginal as IconFC,
  react: ReactOriginal as IconFC,
  nextjs: NextjsOriginal as IconFC,
  vitest: VitestOriginal as IconFC,
  scrum: ScrumIcon,
};

interface SkillBadgeProps {
  name: string;
  iconKey: string;
  provenBy: string[];
  provenByLabel: string;
  index: number;
}

export function SkillBadge({ name, iconKey, provenBy, provenByLabel, index }: SkillBadgeProps) {
  const { ref, inView } = useInView(0.1);
  const Icon = iconMap[iconKey];

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-start gap-2 rounded-lg border border-storm-border bg-storm-bg2 px-3 py-2",
        "hover:border-storm-accent/40 hover:bg-storm-bg3 transition-colors duration-150",
        inView ? "animate-fade-up" : "opacity-0",
      )}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <span className="flex h-5 shrink-0 items-center">
        {Icon ? (
          <Icon size={18} />
        ) : (
          <span className="size-4.5 rounded-sm bg-storm-bg3 border border-storm-border" />
        )}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-storm-fg2">{name}</span>
        {/* The evidence link: a technology nobody can trace to a shipped project
            reads as padding, so every badge names where it was used. */}
        <span className="text-xs text-storm-accent2/70">
          <span className="sr-only">{`${provenByLabel} `}</span>
          {provenBy.join(" · ")}
        </span>
      </span>
    </div>
  );
}
