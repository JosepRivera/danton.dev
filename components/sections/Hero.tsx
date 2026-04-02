"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import Image from "next/image";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const techPills = ["NestJS", "FastAPI", "Docker", "PostgreSQL", "IA"];

export function Hero() {
  const shouldReduce = useReducedMotion();

  const makeVariant = (delay: number) => ({
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" as const },
    },
  });

  const photoVariant = {
    hidden: shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-20"
      aria-label="Presentación"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 py-20 md:flex-row md:justify-between">
        {/* Text content */}
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left md:max-w-lg">
          {/* Availability + location badge */}
          <motion.div
            variants={makeVariant(0)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 w-full"
          >
            <div className="flex items-start justify-between gap-2 flex-col sm:flex-row sm:items-center">
              <span className="text-sm font-medium text-storm-accent2 italic">
                "Creando software con propósito."
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-storm-fg2">
                <MapPin className="size-3" aria-hidden="true" />
                Lima, Perú
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-storm-fg2 bg-storm-bg2/40 border border-storm-border rounded-full px-3 py-1.5 w-fit">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Disponible para colaborar en proyectos y equipos de desarrollo.
            </div>
          </motion.div>

          <motion.h1
            variants={makeVariant(0.1)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold leading-tight tracking-tight text-storm-fg sm:text-6xl"
          >
            Josep Rivera
          </motion.h1>

          <motion.p
            variants={makeVariant(0.2)}
            initial="hidden"
            animate="visible"
            className="text-xl font-semibold text-storm-accent sm:text-2xl"
          >
            Backend Developer
          </motion.p>

          <motion.p
            variants={makeVariant(0.3)}
            initial="hidden"
            animate="visible"
            className="text-base text-storm-fg2 leading-relaxed max-w-md"
          >
            Estoy en el último año de Diseño y Desarrollo de Software en Tecsup. Construyo APIs que
            escalan, integro IA en flujos reales y le doy importancia al código que otros puedan
            mantener.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            variants={makeVariant(0.35)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center md:justify-start gap-2"
          >
            {techPills.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-storm-border bg-storm-bg2 px-2.5 py-1 text-xs font-medium text-storm-accent2"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={makeVariant(0.4)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-storm-accent px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform duration-150 focus-visible:ring-2 focus-visible:ring-storm-accent focus-visible:outline-none"
            >
              <ArrowDown className="size-4" />
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border border-storm-border px-5 py-2.5 text-sm font-semibold text-storm-fg2 hover:border-storm-accent/40 hover:text-storm-fg hover:-translate-y-0.5 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-storm-accent focus-visible:outline-none"
            >
              <Mail className="size-4" />
              Contactar
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={makeVariant(0.45)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/JosepRivera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-storm-fg2 hover:text-storm-fg transition-colors duration-150"
              aria-label="GitHub de Josep Rivera"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rivera-josep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-storm-fg2 hover:text-storm-fg transition-colors duration-150"
              aria-label="LinkedIn de Josep Rivera"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          variants={photoVariant}
          initial="hidden"
          animate="visible"
          className="relative shrink-0"
        >
          {/* Decorative ring */}
          <div
            className="absolute -inset-3 rounded-full border border-storm-accent/10"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-6 rounded-full border border-storm-accent/5"
            aria-hidden="true"
          />

          <div className="relative size-52 sm:size-60 md:size-68">
            <div className="absolute inset-0 rounded-full bg-storm-accent/10 ring-2 ring-storm-accent/20" />
            <Image
              src="/images/profile.jpg"
              alt="Foto de perfil de Josep Rivera"
              fill
              className="rounded-full object-cover"
              priority
              sizes="(max-width: 768px) 208px, 272px"
            />
          </div>

          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl bg-storm-accent/8 -z-10"
            aria-hidden="true"
          />

          {/* Floating badge */}
          <div
            className="absolute -bottom-2 -right-2 md:-right-4 flex items-center gap-1.5 rounded-full border border-storm-border bg-storm-bg2/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-storm-fg2 shadow-lg"
            aria-hidden="true"
          >
            <span className="size-2 rounded-full bg-storm-accent" />
            Backend Dev
          </div>
        </motion.div>
      </div>
    </section>
  );
}
