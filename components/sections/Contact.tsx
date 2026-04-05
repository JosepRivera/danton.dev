"use client";

import { ArrowUpRight, Download, Mail } from "lucide-react";
import type { ElementType } from "react";
import { useInView } from "@/lib/use-in-view";

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

const contactLinks: {
  label: string;
  href: string;
  icon: ElementType;
  text: string;
  color: string;
}[] = [
  {
    label: "Email",
    href: "mailto:josepdanton1518@gmail.com",
    icon: Mail,
    text: "josepdanton1518@gmail.com",
    color: "from-red-500 to-rose-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rivera-josep",
    icon: LinkedinIcon,
    text: "rivera-josep",
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/JosepRivera",
    icon: GithubIcon,
    text: "JosepRivera",
    color: "from-slate-400 to-slate-600",
  },
];

export function Contact() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="contacto" className="px-6 py-24 relative" aria-label="Contacto" ref={ref}>
      {/* Fondo sutil decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-storm-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-storm-fg tracking-tight mb-4">
            ¿Trabajamos juntos?
          </h2>
          <div className="mx-auto mb-4 h-px w-16 bg-linear-to-r from-transparent via-storm-accent to-transparent" />
          <p className="text-lg text-storm-fg2 leading-relaxed">
            Estoy disponible para{" "}
            <span className="text-storm-accent font-semibold">proyectos, prácticas</span> o{" "}
            <span className="text-storm-accent font-semibold">conversaciones interesantes</span> que
            impulsen tecnología con propósito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <div
                key={link.label}
                className={`h-full transition-[opacity,transform] duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: inView ? `${100 + i * 100}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group relative flex flex-col h-full p-6 rounded-2xl border border-storm-border bg-linear-to-br from-storm-bg2 to-storm-bg overflow-hidden hover:border-storm-accent/50 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-4px_rgba(104,136,200,0.2)] transition-[transform,border-color,box-shadow,background-color] duration-500 ease-out"
                  aria-label={`Contactar por ${link.label}`}
                >
                  {/* Fondo decorativo */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  >
                    <div className={`absolute inset-0 bg-linear-to-br ${link.color} opacity-5`} />
                  </div>

                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-storm-bg3 group-hover:bg-storm-accent/10 transition-colors duration-300">
                        <Icon
                          className="size-5 text-storm-accent group-hover:text-storm-accent2 transition-colors duration-300"
                          aria-hidden="true"
                        />
                      </div>
                      <ArrowUpRight
                        className="size-4 text-storm-fg2 group-hover:text-storm-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-storm-fg2 uppercase tracking-wider mb-1">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-storm-fg group-hover:text-storm-accent2 transition-colors duration-300 break-all">
                        {link.text}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        <div
          className={`flex justify-center transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: inView ? "400ms" : "0ms" }}
        >
          <a
            href="/Josep_Rivera_CV.pdf"
            download
            className="group relative px-6 py-3 rounded-xl border border-storm-accent/30 bg-storm-accent/5 text-storm-fg font-medium hover:bg-storm-accent/10 hover:border-storm-accent/60 transition-all duration-500 ease-out hover:-translate-y-0.5 flex items-center gap-2 justify-center w-full sm:w-auto shadow-[0_0_20px_-8px_rgba(104,136,200,0.3)] hover:shadow-[0_0_28px_-4px_rgba(104,136,200,0.4)]"
          >
            <Download className="size-4" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
