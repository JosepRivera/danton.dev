"use client";

import { ExternalLink, Globe, Smartphone } from "lucide-react";
import type { Project, ProjectVersion } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";
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

const techButtonActive: Record<string, string> = {
  Flutter:
    "border-[#54C5F8]/40 bg-[#54C5F8]/10 text-[#54C5F8] hover:bg-[#54C5F8]/20 hover:border-[#54C5F8]/60",
  React:
    "border-[#61DAFB]/40 bg-[#61DAFB]/10 text-[#61DAFB] hover:bg-[#61DAFB]/20 hover:border-[#61DAFB]/60",
  "Next.js":
    "border-slate-400/40 bg-slate-400/10 text-slate-300 hover:bg-slate-400/20 hover:border-slate-400/60",
};

const techButtonDisabled: Record<string, string> = {
  Flutter: "border-[#54C5F8]/20 bg-[#54C5F8]/5 text-[#54C5F8]/45",
  React: "border-[#61DAFB]/20 bg-[#61DAFB]/5 text-[#61DAFB]/45",
  "Next.js": "border-slate-500/20 bg-slate-500/5 text-slate-500/60",
};

interface VersionButtonProps {
  version: ProjectVersion;
  size?: "sm" | "xs";
  comingSoonLabel: string;
}

function VersionButton({ version, size = "sm", comingSoonLabel }: VersionButtonProps) {
  const isActive = version.status === "done" && !!version.deployedUrl;
  const Icon = version.label === "Mobile" ? Smartphone : Globe;
  const px = size === "xs" ? "px-3 py-1.5 text-xs" : "px-3 py-1.5 text-sm";
  const iconSize = size === "xs" ? "size-3" : "size-3.5";

  if (isActive) {
    return (
      <a
        href={version.deployedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border font-medium transition-all duration-150",
          px,
          techButtonActive[version.tech] ??
            "border-storm-accent/40 bg-storm-accent/10 text-storm-accent hover:bg-storm-accent/20",
        )}
        aria-label={`Ver ${version.label} (${version.tech}) de este proyecto`}
      >
        <Icon className={iconSize} />
        {version.label} · {version.tech}
        <ExternalLink className="size-3 opacity-60" />
      </a>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border font-medium cursor-not-allowed",
        px,
        techButtonDisabled[version.tech] ??
          "border-storm-border/50 bg-storm-bg3/40 text-storm-fg2/50",
      )}
      title={comingSoonLabel}
    >
      <Icon className={iconSize} />
      {version.label} · {version.tech}
    </span>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  lang: Lang;
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}18 0%, transparent 60%)`,
      }}
      aria-hidden="true"
    >
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

      <div
        className="absolute -top-8 -right-8 size-32 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: project.accentColor }}
      />
      <div
        className="absolute bottom-4 left-4 size-16 rounded-full opacity-10 blur-xl"
        style={{ backgroundColor: project.accentColor }}
      />

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

export function ProjectCard({ project, index, lang }: ProjectCardProps) {
  const { ref, inView } = useInView(0.1);
  const t = translations[lang].projects;

  const description = lang === "en" ? project.descriptionEn : project.description;
  const detail = lang === "en" ? project.detailEn : project.detail;
  const badge = lang === "en" ? project.badgeEn : project.badge;

  const animClass = inView ? "animate-fade-up" : "opacity-0";
  const delay = { animationDelay: `${index * 150}ms` };

  if (project.featured) {
    return (
      <article
        ref={ref}
        className={`col-span-full rounded-2xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/30 transition-[border-color] duration-200 group ${animClass}`}
        style={delay}
      >
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 h-48 md:h-auto min-h-50">
            <ProjectVisual project={project} />
          </div>

          <div className="md:col-span-3 flex flex-col gap-4 p-6 md:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-storm-fg2 uppercase tracking-wider mb-1">
                  {t.featured}
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
                {badge}
              </span>
            </div>

            <p className="text-sm text-storm-fg2 leading-relaxed font-medium">{description}</p>
            <p className="text-sm text-storm-fg2 leading-relaxed">{detail}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-storm-bg3 px-2 py-0.5 text-xs font-medium text-storm-accent2 border border-storm-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-storm-border bg-storm-bg3 px-3 py-1.5 text-sm font-medium text-storm-fg hover:bg-[#24292e] hover:border-[#444d56] hover:text-white transition-all duration-150"
                aria-label={`Ver código de ${project.title} en GitHub`}
              >
                <GithubIcon className="size-4" />
                {t.viewOnGithub}
                <ExternalLink className="size-3 opacity-60" />
              </a>
              {project.versions?.map((v) => (
                <VersionButton
                  key={`${v.label}-${v.tech}`}
                  version={v}
                  size="sm"
                  comingSoonLabel={t.comingSoon}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      ref={ref}
      className={`group flex flex-col rounded-xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(104,136,200,0.12)] transition-[border-color,transform,box-shadow] duration-200 ease-out ${animClass}`}
      style={delay}
    >
      <div className="h-52 w-full">
        <ProjectVisual project={project} />
      </div>

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
            {badge}
          </span>
        </div>

        <p className="text-sm text-storm-fg2 leading-relaxed">{description}</p>
        <p className="text-sm text-storm-fg2 leading-relaxed opacity-80">{detail}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-storm-bg3 px-2 py-0.5 text-xs font-medium text-storm-accent2 border border-storm-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-storm-border bg-storm-bg3 px-3 py-1.5 text-xs font-medium text-storm-fg hover:bg-[#24292e] hover:border-[#444d56] hover:text-white transition-all duration-150"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <GithubIcon className="size-3.5" />
            {t.viewOnGithub}
            <ExternalLink className="size-3 opacity-60" />
          </a>
          {project.versions?.map((v) => (
            <VersionButton
              key={`${v.label}-${v.tech}`}
              version={v}
              size="xs"
              comingSoonLabel={t.comingSoon}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
