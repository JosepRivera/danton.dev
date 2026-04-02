"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export function Projects() {
  const shouldReduce = useReducedMotion();

  const titleVariant = {
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="proyectos" className="px-6 py-24" aria-label="Proyectos">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle
            title="Proyectos"
            subtitle="Tres proyectos reales que resolvieron problemas concretos."
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
