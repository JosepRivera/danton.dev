"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";

const issuerConfig: Record<string, { bar: string; badge: string; dot: string; accent: string }> = {
  Udemy: {
    bar: "from-orange-500/70 to-orange-600/70",
    badge: "bg-orange-500/15 border-orange-500/30 text-orange-400",
    dot: "bg-orange-500",
    accent: "text-orange-400",
  },
  Tecsup: {
    bar: "from-sky-500/70 to-blue-600/70",
    badge: "bg-sky-500/15 border-sky-500/30 text-sky-400",
    dot: "bg-sky-500",
    accent: "text-sky-400",
  },
};

const fallbackConfig = {
  bar: "from-storm-accent/50 to-storm-accent2/40",
  badge: "bg-storm-bg3 border-storm-border text-storm-fg2",
  dot: "bg-storm-accent",
  accent: "text-storm-accent2",
};

export function Certificates() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" as const },
    },
  });

  return (
    <section
      id="certificados"
      className="px-6 py-24 relative overflow-hidden"
      aria-label="Certificados"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-storm-accent/4 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Certificados" subtitle="Cursos y certificaciones completados." />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const cfg = issuerConfig[cert.issuer] ?? fallbackConfig;
            return (
              <motion.article
                key={cert.title}
                variants={fadeUp(0.1 + i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="group relative flex flex-col h-full rounded-2xl border border-storm-border bg-gradient-to-br from-storm-bg2 to-storm-bg3/50 overflow-hidden hover:border-storm-accent/40 transition-all duration-500 hover:shadow-[0_0_32px_-8px_rgba(104,136,200,0.2)]"
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${cfg.bar}`} />

                {/* Certificate image section */}
                <div className="relative h-40 w-full bg-storm-bg3/40 overflow-hidden flex-shrink-0">
                  {cert.imagePath ? (
                    <Image
                      src={cert.imagePath}
                      alt={`Certificado: ${cert.title}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Award className="size-10 text-storm-fg2/20" aria-hidden="true" />
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-storm-bg2 via-storm-bg2/40 to-transparent" />

                  {/* Issuer badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-md ${cfg.badge}`}
                    >
                      <span className={`size-1.5 rounded-full ${cfg.dot}`} aria-hidden="true" />
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1 flex-grow">
                  <h3 className="text-sm font-semibold text-storm-fg leading-snug group-hover:text-storm-accent2 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex items-center gap-2 text-xs text-storm-fg2">
                    <span className="flex items-center gap-1">
                      <span className="size-1 rounded-full bg-storm-border" aria-hidden="true" />
                      {cert.date}
                    </span>
                    {cert.duration && (
                      <>
                        <span className="h-3 w-px bg-storm-border" aria-hidden="true" />
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3" aria-hidden="true" />
                          {cert.duration}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Action button */}
                  <div className="mt-auto pt-3">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full gap-2 rounded-lg border border-storm-border bg-storm-bg/60 px-3 py-2.5 text-xs font-medium text-storm-fg2 hover:border-storm-accent/40 hover:text-storm-fg hover:bg-storm-bg transition-all duration-300 group/link"
                      aria-label={`Ver certificado: ${cert.title}`}
                    >
                      <span>Ver certificado</span>
                      <ExternalLink
                        className="size-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>

                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cfg.bar} opacity-5`} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
