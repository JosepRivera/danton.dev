"use client";

import { BookOpen, Globe, MessageSquare, Target, Zap } from "lucide-react";
import type { ElementType, RefCallback } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useInView } from "@/lib/use-in-view";

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

function fadeClass(inView: boolean) {
  return `transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
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
      className={`flex gap-3 rounded-xl border border-storm-border bg-storm-bg2 p-4 hover:border-storm-accent/30 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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

  return (
    <section id="sobre-mi" className="px-6 py-24" aria-label="Sobre mí" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div className={fadeClass(inView)}>
          <SectionTitle title="Sobre mí" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bio */}
          <div
            className={`flex flex-col gap-5 ${fadeClass(inView)}`}
            style={{ transitionDelay: inView ? "100ms" : "0ms" }}
          >
            <p className="text-storm-fg2 leading-relaxed">
              Estoy en el último año de{" "}
              <span className="text-storm-accent font-medium">Diseño y Desarrollo de Software</span>{" "}
              en <span className="text-storm-accent font-medium">Tecsup</span>, Lima. Desde el
              primer año me incliné hacia el{" "}
              <span className="text-storm-accent font-medium">backend</span>: las{" "}
              <span className="text-storm-accent font-medium">APIs bien diseñadas</span>, los
              sistemas que escalan y el código que otros puedan mantener me resultan más
              interesantes que cualquier otra cosa.
            </p>
            <p className="text-storm-fg2 leading-relaxed">
              Trabajo principalmente con{" "}
              <span className="text-storm-accent font-medium">NestJS</span>,{" "}
              <span className="text-storm-accent font-medium">FastAPI</span> y{" "}
              <span className="text-storm-accent font-medium">Docker</span>. He llevado proyectos
              desde el modelo de datos hasta el{" "}
              <span className="text-storm-accent font-medium">deploy</span>, e integrado{" "}
              <span className="text-storm-accent font-medium">IA generativa</span> en flujos reales
              que resolvieron problemas concretos de usuarios reales.
            </p>
            <p className="text-storm-fg2 leading-relaxed">
              No me interesa escribir código por escribir. Me interesa que el sistema{" "}
              <span className="text-storm-accent font-medium">funcione</span>, que sea{" "}
              <span className="text-storm-accent font-medium">legible</span> para el siguiente
              desarrollador y que{" "}
              <span className="text-storm-accent font-medium">resuelva algo real</span>.
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
          </div>

          {/* Soft skills */}
          <div className="flex flex-col gap-4">
            <p
              className={`text-xs font-semibold uppercase tracking-wider text-storm-fg2 ${fadeClass(inView)}`}
              style={{ transitionDelay: inView ? "150ms" : "0ms" }}
            >
              Cómo trabajo
            </p>

            {softSkills.map((skill, i) => (
              <WorkCard
                key={skill.title}
                icon={skill.icon}
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
