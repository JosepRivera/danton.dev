"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";

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

function LinkedinIcon({ className }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-20"
      aria-label={t.ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 py-20 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left md:max-w-lg">
          <h1 className="animate-fade-up text-5xl font-bold leading-tight tracking-tight text-storm-fg sm:text-6xl">
            Josep Rivera
          </h1>

          {/* Role and tagline are one group: the tagline is metadata about the
              role, so it sits closer to it than to the description. */}
          <div className="flex flex-col gap-2">
            <p
              className="animate-fade-up text-xl font-semibold text-storm-accent sm:text-2xl"
              style={{ animationDelay: "100ms" }}
            >
              {t.role}
            </p>
            <p
              className="animate-fade-up max-w-md text-sm leading-relaxed text-storm-fg2"
              style={{ animationDelay: "150ms" }}
            >
              {t.tagline}
            </p>
          </div>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#1a2d5c] to-[#2d4d9e] hover:from-[#1f3570] hover:to-[#3458b8] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-[background-image,transform,box-shadow] duration-150 shadow-[0_0_20px_-6px_rgba(45,77,158,0.5)] hover:shadow-[0_0_24px_-4px_rgba(52,88,184,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
            >
              <ArrowDown className="size-4" />
              {t.seeProjects}
            </a>
            <a
              href="https://www.linkedin.com/in/rivera-josep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-storm-border px-5 py-2.5 text-sm font-semibold text-storm-fg2 hover:border-storm-accent/40 hover:text-storm-fg hover:-translate-y-0.5 transition-[border-color,color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
            >
              <LinkedinIcon className="size-4" />
              {t.contact}
            </a>
          </div>

          <div
            className="animate-fade-up flex flex-wrap items-center justify-center md:justify-start gap-3"
            style={{ animationDelay: "350ms" }}
          >
            <a
              href="https://github.com/JosepRivera"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-storm-fg2 hover:text-storm-fg transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
              aria-label={t.githubAria}
            >
              <GithubIcon className="size-5" />
            </a>
            <span className="h-4 w-px bg-storm-border" aria-hidden="true" />
            <span className="text-xs text-storm-fg2">{t.availability}</span>
          </div>
        </div>

        <div
          className="relative size-52 shrink-0 animate-fade-scale sm:size-60"
          style={{ animationDelay: "300ms" }}
        >
          <div className="absolute inset-0 rounded-full bg-storm-accent/10 ring-2 ring-storm-accent/20" />
          <Image
            src="/images/profile.jpg"
            alt={t.photoAlt}
            fill
            className="rounded-full object-cover"
            priority
            sizes="(max-width: 680px) 13rem, 15rem"
          />
        </div>
      </div>
    </section>
  );
}
