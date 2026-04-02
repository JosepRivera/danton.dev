"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Globe, MessageSquare, Target, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const softSkills = [
  {
    icon: Target,
    title: "Entiendo el problema antes de escribir código",
    desc: "Analizo el contexto, los casos borde y las restricciones antes de abrir el editor.",
  },
  {
    icon: Zap,
    title: "Entrego trabajo terminado, no 'casi listo'",
    desc: "Si lo comprometí, lo entrego. Si hay un bloqueante, lo comunico antes, no después.",
  },
  {
    icon: MessageSquare,
    title: "Pido retroalimentación y la aplico",
    desc: "El ego no me impide mejorar. El feedback es información, no un ataque personal.",
  },
  {
    icon: BookOpen,
    title: "Aprendo lo que necesito para ejecutar",
    desc: "Cuando el proyecto lo exige, investigo, aprendo y lo implemento. No espero tenerlo todo claro.",
  },
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2 · En progreso" },
];

export function About() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" as const },
    },
  });

  return (
    <section id="sobre-mi" className="px-6 py-24" aria-label="Sobre mí">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Sobre mí" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bio */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-storm-fg2 leading-relaxed">
              Estoy en el último año de Diseño y Desarrollo de Software en Tecsup, Lima. Desde el
              primer año me incliné hacia el backend: las APIs bien diseñadas, los sistemas que
              escalan y el código que otros puedan mantener me resultan más interesantes que
              cualquier otra cosa.
            </p>
            <p className="text-storm-fg2 leading-relaxed">
              Trabajo principalmente con <span className="text-storm-fg font-medium">NestJS</span>,{" "}
              <span className="text-storm-fg font-medium">FastAPI</span> y{" "}
              <span className="text-storm-fg font-medium">Docker</span>. He llevado proyectos desde
              el modelo de datos hasta el deploy, e integrado IA generativa en flujos reales que
              resolvieron problemas concretos de usuarios reales.
            </p>
            <p className="text-storm-fg2 leading-relaxed">
              No me interesa escribir código por escribir. Me interesa que el sistema funcione, que
              sea legible para el siguiente desarrollador y que resuelva algo real.
            </p>

            {/* Languages */}
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-storm-fg2 flex items-center gap-1.5">
                <Globe className="size-3.5 text-storm-accent" aria-hidden="true" />
                Idiomas
              </p>
              <div className="flex gap-3">
                {languages.map((lang) => (
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
          </motion.div>

          {/* Soft skills */}
          <div className="flex flex-col gap-4">
            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-xs font-semibold uppercase tracking-wider text-storm-fg2"
            >
              Cómo trabajo
            </motion.p>

            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                variants={fadeUp(0.2 + i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex gap-3 rounded-xl border border-storm-border bg-storm-bg2 p-4 hover:border-storm-accent/30 transition-colors duration-200"
              >
                <skill.icon
                  className="mt-0.5 size-4 shrink-0 text-storm-accent"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-storm-fg">{skill.title}</span>
                  <span className="text-xs text-storm-fg2 leading-relaxed">{skill.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
