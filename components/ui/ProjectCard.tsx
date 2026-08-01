"use client";

import { ExternalLink, Globe, Smartphone } from "lucide-react";
import type { Project, ProjectVersion } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";
import { getTechMeta } from "./tech-meta";

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
  client: "bg-[#54C5F8]/10 text-[#54C5F8] border border-[#54C5F8]/20",
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
  ariaTemplate: string;
}

function VersionButton({ version, size = "sm", comingSoonLabel, ariaTemplate }: VersionButtonProps) {
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
          "inline-flex items-center gap-1.5 rounded-md border font-medium transition-colors duration-150",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent",
          px,
          techButtonActive[version.tech] ??
            "border-storm-accent/40 bg-storm-accent/10 text-storm-accent hover:bg-storm-accent/20",
        )}
        aria-label={ariaTemplate
          .replace("{label}", version.label)
          .replace("{tech}", version.tech)}
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

function initials(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

/** Stack chip tinted with the vendor's own identity color, per the design
 *  system's brand-hex exemption. Techs with no registered brand fall back to
 *  the neutral storm chip rather than inventing one. */
function TechChip({ tech }: { tech: string }) {
  const { Icon, color } = getTechMeta(tech);

  if (!color) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-storm-border bg-storm-bg3 px-2 py-1 text-xs font-medium text-storm-accent2">
        {tech}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium text-storm-fg"
      style={{ backgroundColor: `${color}14`, borderColor: `${color}40` }}
    >
      {Icon ? <Icon size={13} /> : <span className="size-2 rounded-full" style={{ backgroundColor: color }} />}
      {tech}
    </span>
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

  return (
    <article
      ref={ref}
      className={`group flex flex-col rounded-xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(104,136,200,0.12)] transition-[border-color,transform,box-shadow] duration-200 ease-out ${animClass}`}
      style={delay}
    >
      {/* Per-project identity now lives in a hairline bar and the monogram
          tile rather than a 13rem decorative panel, so all four cards read
          as one uniform row instead of competing for size. */}
      <div className="h-0.5 w-full" style={{ backgroundColor: project.accentColor }} />

      <div
        className="flex items-center gap-3 border-b border-storm-border p-5"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}14 0%, transparent 70%)`,
        }}
      >
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-xl border font-heading text-sm font-bold"
          style={{
            borderColor: `${project.accentColor}40`,
            backgroundColor: `${project.accentColor}15`,
            color: project.accentColor,
          }}
          aria-hidden="true"
        >
          {initials(project.title)}
        </span>

        <h3 className="min-w-0 flex-1 font-heading text-base font-semibold leading-tight text-storm-fg">
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

      <div className="flex flex-col gap-3 p-5 flex-1">
        <p className="text-sm text-storm-fg2 leading-relaxed">{description}</p>
        <p className="text-sm text-storm-fg2 leading-relaxed opacity-80">{detail}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <TechChip key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-storm-border bg-storm-bg3 px-3 py-1.5 text-xs font-medium text-storm-fg hover:bg-[#24292e] hover:border-[#444d56] hover:text-white transition-[background-color,border-color,color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
              aria-label={t.viewCodeAria.replace("{project}", project.title)}
            >
              <GithubIcon className="size-3.5" />
              {t.viewOnGithub}
              <ExternalLink className="size-3 opacity-60" />
            </a>
          ) : (
            <span className="text-xs text-storm-fg2">{t.privateRepo}</span>
          )}
          {project.versions?.map((v) => (
            <VersionButton
              key={`${v.label}-${v.tech}`}
              version={v}
              size="xs"
              comingSoonLabel={t.comingSoon}
              ariaTemplate={t.viewVersionAria}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
