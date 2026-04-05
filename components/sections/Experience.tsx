"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

const eduTags = [
  "Java",
  "Python",
  "JavaScript",
  "PHP",
  "HTML / CSS",
  "C#",
  "OOP",
  "Algoritmos & ED",
  "APIs REST",
  "Microservicios",
  "PostgreSQL",
  "SQL Server",
  "NoSQL",
  "AWS",
  "Azure",
  "Docker",
  "Android",
  "Flutter",
  "iOS",
  "Testing",
  "Scrum",
  "Git",
  "UI/UX",
  "IoT",
];

const internshipTags = [
  "FastAPI",
  "Python",
  "SQLite",
  "Claude Vision API",
  "Groq Whisper",
  "ReportLab",
  "OpenPyXL",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "BiomeJS",
  "pnpm",
];

export function Experience() {
  const { ref, inView } = useInView(0.05);
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experiencia" className="px-6 py-24" aria-label={t.title} ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <SectionTitle title={t.title} />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div
            className={`flex flex-col gap-4 transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: inView ? "100ms" : "0ms" }}
          >
            <div className="flex items-center gap-2.5 text-storm-fg2">
              <GraduationCap className="size-4 text-storm-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {t.educationLabel}
              </span>
            </div>

            <article className="flex-1 rounded-xl border border-storm-border bg-storm-bg2 p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">{t.degreeTitle}</h3>
                  <p className="text-sm text-storm-accent2 mt-0.5">{t.degreeSchool}</p>
                </div>
                <span className="shrink-0 rounded-full bg-storm-bg3 border border-storm-border px-2.5 py-0.5 text-xs text-storm-fg2">
                  {t.degreeYears}
                </span>
              </div>

              <p className="text-sm text-storm-fg2 leading-relaxed">{t.degreeDescription}</p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {eduTags.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-storm-bg3 border border-storm-border px-2 py-0.5 text-xs text-storm-accent2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* Experience */}
          <div
            className={`flex flex-col gap-4 transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            <div className="flex items-center gap-2.5 text-storm-fg2">
              <Briefcase className="size-4 text-storm-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {t.experienceLabel}
              </span>
            </div>

            <article className="rounded-xl border border-storm-border bg-storm-bg2 p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">{t.internshipTitle}</h3>
                  <p className="text-sm text-storm-accent2 mt-0.5">{t.internshipProject}</p>
                </div>
                <span className="shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs text-amber-400">
                  {t.internshipYear}
                </span>
              </div>

              <ul className="flex flex-col gap-2" aria-label={t.achievementsLabel}>
                {t.internshipBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-storm-fg2">
                    <span
                      className="mt-1.5 size-1 shrink-0 rounded-full bg-storm-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {internshipTags.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-storm-bg3 border border-storm-border px-2 py-0.5 text-xs text-storm-accent2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
