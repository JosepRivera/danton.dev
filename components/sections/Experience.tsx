"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useInView } from "@/lib/use-in-view";

export function Experience() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="experiencia" className="px-6 py-24" aria-label="Formación y experiencia" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <SectionTitle title="Formación & Experiencia" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Educación */}
          <div
            className={`flex flex-col gap-4 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: inView ? "100ms" : "0ms" }}
          >
            <div className="flex items-center gap-2.5 text-storm-fg2">
              <GraduationCap className="size-4 text-storm-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">Educación</span>
            </div>

            <article className="flex-1 rounded-xl border border-storm-border bg-storm-bg2 p-6 flex flex-col gap-4">
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

              <p className="text-sm text-storm-fg2 leading-relaxed">
                Carrera técnica de{" "}
                <span className="text-storm-accent font-medium">
                  3 años · 131 créditos · 2 960 horas
                </span>{" "}
                con orientación en ingeniería de software. Cubre desarrollo{" "}
                <span className="text-storm-accent font-medium">web full-stack</span>,{" "}
                <span className="text-storm-accent font-medium">mobile</span> (Android, iOS,
                multiplataforma), arquitectura de sistemas,{" "}
                <span className="text-storm-accent font-medium">
                  bases de datos relacionales y NoSQL
                </span>
                , cloud (AWS, Azure), DevOps y pruebas de software.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
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
          </div>

          {/* Experiencia */}
          <div
            className={`flex flex-col gap-4 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            <div className="flex items-center gap-2.5 text-storm-fg2">
              <Briefcase className="size-4 text-storm-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">Experiencia</span>
            </div>

            <article className="rounded-xl border border-storm-border bg-storm-bg2 p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-storm-fg leading-snug">
                    Pasantía · Desarrollador
                  </h3>
                  <p className="text-sm text-storm-accent2 mt-0.5">
                    Sistema de Inventario con IA — Tecsup
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs text-amber-400">
                  2026
                </span>
              </div>

              <ul className="flex flex-col gap-2" aria-label="Logros">
                {[
                  "Desarrollé el backend y el frontend web de un sistema de inventario con IA para los laboratorios de Tecsup (~5 000 equipos en 20+ labs).",
                  "Integré Claude Vision para OCR de etiquetas físicas y Groq Whisper para dictado de voz y consultas en lenguaje natural.",
                  "Generación automática de reportes en PDF y Excel con ReportLab y OpenPyXL.",
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
                {[
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
          </div>
        </div>
      </div>
    </section>
  );
}
