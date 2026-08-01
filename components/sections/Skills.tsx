"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function Skills() {
  const { ref, inView } = useInView(0.05);
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="px-6 py-24 select-none" aria-label="Skills" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <SectionTitle title={t.title} subtitle={t.subtitle} />
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.category}
              className={`flex flex-col gap-4 transition-all duration-400 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: inView ? `${catIndex * 100}ms` : "0ms" }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-storm-fg2">
                {t.categoryMap[cat.category] ?? cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    iconKey={skill.iconKey}
                    provenBy={skill.provenBy}
                    provenByLabel={t.provenByLabel}
                    index={catIndex * 5 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
