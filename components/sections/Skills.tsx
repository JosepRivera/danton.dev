"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const shouldReduce = useReducedMotion();

  const titleVariant = {
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const categoryVariant = (i: number) => ({
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
    },
  });

  return (
    <section id="skills" className="px-6 py-24" aria-label="Skills">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Skills" subtitle="Las herramientas con las que trabajo." />
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              variants={categoryVariant(catIndex)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-storm-fg2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    iconKey={skill.iconKey}
                    index={catIndex * 5 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
