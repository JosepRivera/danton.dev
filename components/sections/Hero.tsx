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

const techPills = ["NestJS", "FastAPI", "Flutter", "Docker", "PostgreSQL", "IA"];

export function Hero() {
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
          <div className="animate-fade-up flex flex-wrap items-center gap-3 w-full">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-storm-accent/10 to-transparent border border-storm-accent/30 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <span
                className="size-2 rounded-full bg-storm-accent animate-pulse"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-storm-fg italic">
                <span className="text-storm-accent">"</span>Creando software con propósito
                <span className="text-storm-accent">"</span>
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-storm-fg2">
              <MapPin className="size-3.5 text-storm-accent" aria-hidden="true" />
              Lima, Perú
            </span>
          </div>

          <h1
            className="animate-fade-up text-5xl font-bold leading-tight tracking-tight text-storm-fg sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Josep Rivera
          </h1>

          <p
            className="animate-fade-up text-xl font-semibold text-storm-accent sm:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            Backend Developer
          </p>

          <p
            className="animate-fade-up text-base text-storm-fg2 leading-relaxed max-w-md"
            style={{ animationDelay: "300ms" }}
          >
            Estoy en el último año de Diseño y Desarrollo de Software en Tecsup. Construyo APIs que
            escalan, integro IA en flujos reales y le doy importancia al código que otros puedan
            mantener.
          </p>

          {/* Tech pills */}
          <div
            className="animate-fade-up flex flex-wrap items-center justify-center md:justify-start gap-2"
            style={{ animationDelay: "350ms" }}
          >
            {techPills.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-storm-border bg-storm-bg2 px-2.5 py-1 text-xs font-medium text-storm-accent2"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1a2d5c] to-[#2d4d9e] hover:from-[#1f3570] hover:to-[#3458b8] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-all duration-150 shadow-[0_0_20px_-6px_rgba(45,77,158,0.5)] hover:shadow-[0_0_24px_-4px_rgba(52,88,184,0.6)] focus-visible:ring-2 focus-visible:ring-[#3458b8] focus-visible:outline-none"
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
          </div>

          {/* Social links + availability */}
          <div
            className="animate-fade-up flex flex-wrap items-center justify-center md:justify-start gap-3"
            style={{ animationDelay: "450ms" }}
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
            <span className="h-4 w-px bg-storm-border" aria-hidden="true" />
            <span className="text-xs text-storm-fg2">
              Disponible para colaborar en proyectos y equipos de desarrollo
            </span>
          </div>
        </div>

        {/* Profile photo */}
        <div className="animate-float">
          <div className="animate-fade-scale relative shrink-0" style={{ animationDelay: "300ms" }}>
            {/* Decorative rings */}
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
              <span className="size-2 rounded-full bg-storm-accent animate-pulse" />
              Backend Dev
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
