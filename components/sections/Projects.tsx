"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function Projects() {
  const { ref, inView } = useInView(0.05);
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="proyectos" className="px-6 py-24" aria-label={t.title} ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <SectionTitle title={t.title} subtitle={t.subtitle} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
