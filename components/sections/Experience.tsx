"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  const shouldReduce = useReducedMotion();

  const itemVariant = (i: number) => ({
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
    },
  });

  return (
    <section id="experiencia" className="px-6 py-24" aria-label="Formación y experiencia">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={itemVariant(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Formación & Experiencia" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Educación */}
          <motion.div
            variants={itemVariant(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2.5 text-storm-fg2">
              <GraduationCap className="size-4 text-storm-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">Educación</span>
            </div>

            <article className="rounded-xl border border-storm-border bg-storm-bg2 p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">
                    Diseño y Desarrollo de Software
                  </h3>
                  <p className="text-sm text-storm-accent2 mt-0.5">Tecsup, Lima</p>
                </div>
                <span className="shrink-0 rounded-full bg-storm-bg3 border border-storm-border px-2.5 py-0.5 text-xs text-storm-fg2">
                  2023 – 2026
                </span>
              </div>

              <p className="text-sm text-storm-fg2">
                Carrera técnica de 3 años con orientación en ingeniería de software. Cubre
                desarrollo web full-stack, arquitectura de sistemas, bases de datos, DevOps y
                desarrollo móvil.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Java",
                  "Python",
                  "APIs REST",
                  "Microservicios",
                  "PostgreSQL",
                  "NoSQL",
                  "Docker",
                  "Android",
                  "Flutter",
                  "Scrum",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-storm-bg3 border border-storm-border px-2 py-0.5 text-xs text-storm-accent2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>

          {/* Experiencia */}
          <motion.div
            variants={itemVariant(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2.5 text-storm-fg2">
              <Briefcase className="size-4 text-storm-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">Experiencia</span>
            </div>

            <article className="rounded-xl border border-storm-border bg-storm-bg2 p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">Pasantía</h3>
                  <p className="text-sm text-storm-accent2 mt-0.5">Tecsup Inventory API — Tecsup</p>
                </div>
                <span className="shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs text-amber-400">
                  2025
                </span>
              </div>

              <ul className="flex flex-col gap-2" aria-label="Logros">
                {[
                  "Desarrollé el backend completo de un sistema de inventario con IA para Tecsup.",
                  "Integré Claude Vision y Groq Whisper para procesamiento de imágenes y voz en tiempo real.",
                ].map((item) => (
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
                {["FastAPI", "Claude Vision API", "Groq Whisper", "SQLite", "Python"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-storm-bg3 border border-storm-border px-2 py-0.5 text-xs text-storm-accent2"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
