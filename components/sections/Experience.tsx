"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

function HighlightedText({ children }: { children: string }) {
  // Resalta palabras importantes (en inglés o tecnicismos)
  const keywords = [
    "Java",
    "Python",
    "FastAPI",
    "Docker",
    "APIs REST",
    "microservicios",
    "Scrum",
    "Git",
    "Android",
    "Flutter",
    "Kotlin",
    "Dart",
  ];
  const pattern = new RegExp(`(${keywords.join("|")})`, "g");
  const parts = children.split(pattern);
  let partIndex = 0;

  return (
    <>
      {parts.map((part) => {
        if (!part) return null;
        const key = `${part}-${partIndex++}`;
        return keywords.includes(part) ? (
          <span key={key} className="font-semibold text-storm-accent2">
            {part}
          </span>
        ) : (
          <span key={key}>{part}</span>
        );
      })}
    </>
  );
}

export function Experience() {
  const shouldReduce = useReducedMotion();

  const itemVariant = (i: number) => ({
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
    },
  });

  return (
    <section id="experiencia" className="px-6 py-20" aria-label="Formación y experiencia">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={itemVariant(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Formación & Experiencia" />
        </motion.div>

        <div className="space-y-6">
          {/* Educación */}
          <motion.div
            variants={itemVariant(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-4"
          >
            <div className="pt-1">
              <div className="flex items-center gap-2 text-storm-fg2 mb-3">
                <div className="p-2 bg-storm-bg2 rounded-lg">
                  <GraduationCap className="size-4 text-storm-accent" aria-hidden="true" />
                </div>
              </div>
            </div>

            <article className="flex-1 pb-6 border-b border-storm-border/30">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">
                    Diseño y Desarrollo de Software
                  </h3>
                  <p className="text-sm text-storm-accent2 mt-1">Tecsup, Lima</p>
                </div>
                <span className="shrink-0 rounded-full bg-storm-bg2/60 border border-storm-border px-2 py-0.5 text-xs text-storm-fg2 whitespace-nowrap">
                  2023 – 2026
                </span>
              </div>

              <p className="text-sm text-storm-fg2 mb-3 leading-relaxed">
                Carrera técnica de 3 años con{" "}
                <HighlightedText>orientación en ingeniería de software</HighlightedText>. Cobertura
                integral en desarrollo web, arquitectura de sistemas, bases de datos y DevOps.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "APIs REST", "Docker", "Scrum"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-storm-bg3 border border-storm-border rounded px-2 py-1 text-storm-accent2 font-medium"
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
            className="flex gap-4"
          >
            <div className="pt-1">
              <div className="flex items-center gap-2 text-storm-fg2 mb-3">
                <div className="p-2 bg-storm-bg2 rounded-lg">
                  <Briefcase className="size-4 text-storm-accent" aria-hidden="true" />
                </div>
              </div>
            </div>

            <article className="flex-1">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">Pasantía</h3>
                  <p className="text-sm text-storm-accent2 mt-1">Tecsup Inventory API — Tecsup</p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400 whitespace-nowrap">
                  2025
                </span>
              </div>

              <ul className="flex flex-col gap-2 mb-3" aria-label="Logros">
                {[
                  "Desarrollé el backend completo de un sistema de inventario con IA.",
                  "Integré Claude Vision y Groq Whisper para procesamiento en tiempo real.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-storm-fg2">
                    <span
                      className="mt-1.5 size-1 shrink-0 rounded-full bg-storm-accent"
                      aria-hidden="true"
                    />
                    <HighlightedText>{item}</HighlightedText>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {["FastAPI", "Claude Vision API", "Groq Whisper", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-storm-bg3 border border-storm-border rounded px-2 py-1 text-storm-accent2 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
