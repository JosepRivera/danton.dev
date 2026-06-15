"use client";

import {
  AmazonwebservicesPlainWordmark,
  AzuredevopsOriginal,
  AzureOriginal,
  BiomeOriginal,
  BunOriginal,
  DartOriginal,
  DjangoPlain,
  DockerOriginal,
  ExpressOriginal,
  FastapiOriginal,
  FastifyOriginal,
  FlutterOriginal,
  GithubOriginal,
  GitOriginal,
  JavaOriginal,
  JestPlain,
  JetpackcomposeOriginal,
  KotlinOriginal,
  LaravelOriginal,
  LinuxOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NextjsOriginal,
  NodejsOriginal,
  NpmOriginalWordmark,
  OracleOriginal,
  PhpOriginal,
  PnpmOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  PythonOriginal,
  ReactOriginal,
  RedisOriginal,
  SpringOriginal,
  SqliteOriginal,
  SvelteOriginal,
  SwaggerOriginal,
  SwiftOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VitejsOriginal,
  VitestOriginal,
  YarnOriginal,
} from "devicons-react";
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

function LinearIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        fill="#5E6AD2"
      />
    </svg>
  );
}

function UIKitIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <rect width="18" height="18" rx="4" fill="#007AFF" />
      <text
        x="9"
        y="13"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        UI
      </text>
    </svg>
  );
}

function CoreDataIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <rect width="18" height="18" rx="4" fill="#FF6B00" />
      <text
        x="9"
        y="13"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        CD
      </text>
    </svg>
  );
}

function SwiftDataIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <rect width="18" height="18" rx="4" fill="#FF3B30" />
      <text
        x="9"
        y="13"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        SD
      </text>
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
  fastify: FastifyOriginal as IconFC,
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
  oracle: OracleOriginal as IconFC,
  redis: RedisOriginal as IconFC,
  coredata: CoreDataIcon,
  swiftdata: SwiftDataIcon,
  docker: DockerOriginal as IconFC,
  git: GitOriginal as IconFC,
  azuredevops: AzuredevopsOriginal as IconFC,
  linux: LinuxOriginal as IconFC,
  zod: ZodIcon,
  swagger: SwaggerOriginal as IconFC,
  flutter: FlutterOriginal as IconFC,
  svelte: SvelteOriginal as IconFC,
  swiftui: SwiftOriginal as IconFC,
  uikit: UIKitIcon,
  jetpackcompose: JetpackcomposeOriginal as IconFC,
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
  github: GithubOriginal as IconFC,
  npm: NpmOriginalWordmark as IconFC,
  bun: BunOriginal as IconFC,
  yarn: YarnOriginal as IconFC,
  linear: LinearIcon,
  scrum: ScrumIcon,
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
