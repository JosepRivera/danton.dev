"use client";

import {
  AmazonwebservicesPlainWordmark,
  AzureOriginal,
  BiomeOriginal,
  DartOriginal,
  DjangoPlain,
  DockerOriginal,
  ExpressOriginal,
  FastapiOriginal,
  FlutterOriginal,
  GitOriginal,
  JavaOriginal,
  JestPlain,
  KotlinOriginal,
  LaravelOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PhpOriginal,
  PnpmOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  PythonOriginal,
  ReactOriginal,
  SpringOriginal,
  SqliteOriginal,
  SwaggerOriginal,
  SwiftOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VitejsOriginal,
  VitestOriginal,
} from "devicons-react";
import type { FC } from "react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

/** Zod official-style SVG icon */
function ZodIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L3 7v5c0 5.25 3.9 10.15 9 11.35C17.1 22.15 21 17.25 21 12V7L12 2z"
        fill="#3b82f6"
        fillOpacity="0.2"
        stroke="#6888c8"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5h7l-6.5 5h7"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Express needs a light wrapper since its icon is black */
function ExpressWrapper({ size = 18 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-sm"
      style={{
        width: size,
        height: size,
        filter: "invert(1) opacity(0.7)",
      }}
    >
      <ExpressOriginal size={size} />
    </span>
  );
}

/** AWS plain wordmark — visible on dark without extra background */
function AwsWrapper({ size = 18 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        filter: "brightness(0) invert(1) opacity(0.75)",
        width: size,
        height: size,
      }}
    >
      <AmazonwebservicesPlainWordmark size={size} />
    </span>
  );
}

type IconFC = FC<{ size?: number }>;

const iconMap: Record<string, IconFC> = {
  nestjs: NestjsOriginal as IconFC,
  fastapi: FastapiOriginal as IconFC,
  nodejs: NodejsOriginal as IconFC,
  express: ExpressWrapper,
  typescript: TypescriptOriginal as IconFC,
  python: PythonOriginal as IconFC,
  java: JavaOriginal as IconFC,
  kotlin: KotlinOriginal as IconFC,
  dart: DartOriginal as IconFC,
  postgresql: PostgresqlOriginal as IconFC,
  mongodb: MongodbOriginal as IconFC,
  prisma: PrismaOriginal as IconFC,
  sqlite: SqliteOriginal as IconFC,
  docker: DockerOriginal as IconFC,
  git: GitOriginal as IconFC,
  zod: ZodIcon,
  swagger: SwaggerOriginal as IconFC,
  flutter: FlutterOriginal as IconFC,
  mysql: MysqlOriginal as IconFC,
  php: PhpOriginal as IconFC,
  laravel: LaravelOriginal as IconFC,
  aws: AwsWrapper,
  azure: AzureOriginal as IconFC,
  spring: SpringOriginal as IconFC,
  django: DjangoPlain as IconFC,
  react: ReactOriginal as IconFC,
  nextjs: NextjsOriginal as IconFC,
  biome: BiomeOriginal as IconFC,
  swift: SwiftOriginal as IconFC,
  tailwind: TailwindcssOriginal as IconFC,
  vite: VitejsOriginal as IconFC,
  vitest: VitestOriginal as IconFC,
  jest: JestPlain as IconFC,
  pnpm: PnpmOriginal as IconFC,
};

interface SkillBadgeProps {
  name: string;
  iconKey: string;
  index: number;
}

export function SkillBadge({ name, iconKey, index }: SkillBadgeProps) {
  const { ref, inView } = useInView(0.1);
  const Icon = iconMap[iconKey];

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-storm-border bg-storm-bg2 px-3 py-2",
        "hover:border-storm-accent/40 hover:bg-storm-bg3 transition-colors duration-150",
        inView ? "animate-fade-up" : "opacity-0",
      )}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {Icon ? (
        <Icon size={18} />
      ) : (
        <span className="size-4.5 rounded-sm bg-storm-bg3 border border-storm-border" />
      )}
      <span className="text-sm font-medium text-storm-fg2">{name}</span>
    </div>
  );
}
