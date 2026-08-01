"use client";

import { BookOpen, Globe, MessageSquare, Target, Zap } from "lucide-react";
import type { ElementType, RefCallback } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

const softSkillIcons = [Target, Zap, MessageSquare, BookOpen];

function fadeClass(inView: boolean) {
  return `transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
}

interface WorkCardProps {
  icon: ElementType;
  title: string;
  desc: string;
  index: number;
}

function WorkCard({ icon: Icon, title, desc, index }: WorkCardProps) {
  const { ref, inView } = useInView(0.2);
  return (
    <div
      ref={ref as RefCallback<HTMLDivElement>}
      className={`flex gap-3 rounded-xl border border-storm-border bg-storm-bg2 p-4 hover:border-storm-accent/30 transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      <Icon className="mt-0.5 size-4 shrink-0 text-storm-accent" aria-hidden="true" />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-storm-fg">{title}</span>
        <span className="text-xs text-storm-fg2 leading-relaxed">{desc}</span>
      </div>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView(0.05);
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="sobre-mi" className="px-6 py-24" aria-label={t.title} ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div className={fadeClass(inView)}>
          <SectionTitle title={t.title} />
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bio */}
          <div
            className={`flex flex-col gap-5 ${fadeClass(inView)}`}
            style={{ transitionDelay: inView ? "100ms" : "0ms" }}
          >
            <p className="text-storm-fg2 leading-relaxed">{t.bio1}</p>
            <p className="text-storm-fg2 leading-relaxed">{t.bio2}</p>
            <p className="text-storm-fg2 leading-relaxed">{t.bio3}</p>
            <p className="text-storm-fg2 leading-relaxed">{t.bio4}</p>

            {/* Languages */}
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-storm-fg2 flex items-center gap-1.5">
                <Globe className="size-3.5 text-storm-accent" aria-hidden="true" />
                {t.languagesLabel}
              </p>
              <div className="flex gap-3">
                {t.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-storm-border bg-storm-bg2 px-3 py-1.5 text-xs"
                  >
                    <span className="font-medium text-storm-fg">{lang.name}</span>
                    <span className="text-storm-fg2">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft skills */}
          <div className="flex flex-col gap-4">
            <p
              className={`text-xs font-semibold uppercase tracking-wider text-storm-fg2 ${fadeClass(inView)}`}
              style={{ transitionDelay: inView ? "150ms" : "0ms" }}
            >
              {t.howIWork}
            </p>

            {t.softSkills.map((skill, i) => (
              <WorkCard
                key={skill.title}
                icon={softSkillIcons[i]}
                title={skill.title}
                desc={skill.desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
