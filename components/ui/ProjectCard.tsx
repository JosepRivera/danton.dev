"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const badgeStyles = {
  done: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  wip: "bg-storm-accent/10 text-storm-accent border border-storm-accent/20",
  internship: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** Visual placeholder that simulates a project screenshot area */
function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}18 0%, transparent 60%)`,
      }}
      aria-hidden="true"
    >
      {/* Abstract grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${project.title}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke={project.accentColor}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.title})`} />
      </svg>

      {/* Decorative circles */}
      <div
        className="absolute -top-8 -right-8 size-32 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: project.accentColor }}
      />
      <div
        className="absolute bottom-4 left-4 size-16 rounded-full opacity-10 blur-xl"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Project initials badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center justify-center size-14 rounded-2xl border text-xl font-bold font-heading opacity-60"
          style={{
            borderColor: `${project.accentColor}40`,
            backgroundColor: `${project.accentColor}15`,
            color: project.accentColor,
          }}
        >
          {project.title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduce = useReducedMotion();

  const cardVariants = {
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" as const },
    },
  };

  if (project.featured) {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="col-span-full rounded-2xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/30 transition-colors duration-200 group"
      >
        <div className="grid md:grid-cols-5">
          {/* Visual area */}
          <div className="md:col-span-2 h-48 md:h-auto min-h-50">
            <ProjectVisual project={project} />
          </div>

          {/* Content */}
          <div className="md:col-span-3 flex flex-col gap-4 p-6 md:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-storm-fg2 uppercase tracking-wider mb-1">
                  Proyecto destacado
                </p>
                <h3 className="text-xl font-bold font-heading text-storm-fg leading-tight">
                  {project.title}
                </h3>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                  badgeStyles[project.badgeVariant],
                )}
              >
                {project.badge}
              </span>
            </div>

            <p className="text-sm text-storm-fg2 leading-relaxed font-medium">
              {project.description}
            </p>
            <p className="text-sm text-storm-fg2 leading-relaxed">{project.detail}</p>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-storm-bg3 px-2 py-0.5 text-xs font-medium text-storm-accent2 border border-storm-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-storm-fg2 hover:text-storm-accent transition-colors duration-150 w-fit mt-1"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <GithubIcon className="size-4" />
              Ver en GitHub
              <ExternalLink className="size-3 opacity-60" />
            </a>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={shouldReduce ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col rounded-xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/30 transition-colors duration-200"
    >
      {/* Visual placeholder */}
      <div className="h-36 w-full">
        <ProjectVisual project={project} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold font-heading text-storm-fg leading-tight">
            {project.title}
          </h3>
          <span
            className={cn(
              "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
              badgeStyles[project.badgeVariant],
            )}
          >
            {project.badge}
          </span>
        </div>

        <p className="text-sm text-storm-fg2 leading-relaxed">{project.description}</p>
        <p className="text-xs text-storm-fg2 leading-relaxed opacity-80">{project.detail}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-storm-bg3 px-2 py-0.5 text-xs font-medium text-storm-accent2 border border-storm-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-storm-fg2 hover:text-storm-accent transition-colors duration-150 w-fit mt-1"
          aria-label={`Ver código de ${project.title} en GitHub`}
        >
          <GithubIcon className="size-4" />
          Ver en GitHub
          <ExternalLink className="size-3 opacity-60" />
        </a>
      </div>
    </motion.article>
  );
}
