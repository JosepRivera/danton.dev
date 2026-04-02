"use client";

import {
  DartOriginal,
  DockerOriginal,
  ExpressOriginal,
  FastapiOriginal,
  GitOriginal,
  JavaOriginal,
  KotlinOriginal,
  MongodbOriginal,
  NestjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  PythonOriginal,
  SqliteOriginal,
  SwaggerOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { motion, useReducedMotion } from "framer-motion";
import type { FC } from "react";
import { cn } from "@/lib/utils";

function ZodIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5L4 6.5V12c0 4.5 3.5 8.7 8 9.5 4.5-.8 8-5 8-9.5V6.5L12 2.5z"
        fill="#3b82f6"
        fillOpacity="0.15"
        stroke="#6888c8"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5h7L9.5 14.5H16"
        stroke="#93c5fd"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpressWrapper({ size = 18 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-sm bg-white/10"
      style={{ width: size, height: size }}
    >
      <ExpressOriginal size={Math.round(size * 0.78)} />
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
};

interface SkillBadgeProps {
  name: string;
  iconKey: string;
  index: number;
}

export function SkillBadge({ name, iconKey, index }: SkillBadgeProps) {
  const shouldReduce = useReducedMotion();
  const Icon = iconMap[iconKey];

  const pillVariants = {
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={pillVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-storm-border bg-storm-bg2 px-3 py-2",
        "hover:border-storm-accent/40 hover:bg-storm-bg3 transition-colors duration-150",
      )}
    >
      {Icon ? (
        <Icon size={18} />
      ) : (
        <span className="size-4.5 rounded-sm bg-storm-bg3 border border-storm-border" />
      )}
      <span className="text-sm font-medium text-storm-fg2">{name}</span>
    </motion.div>
  );
}
