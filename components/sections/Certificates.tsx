"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";

const issuerConfig: Record<string, { bar: string; badge: string; dot: string }> = {
  Udemy: {
    bar: "bg-orange-500/70",
    badge: "bg-orange-500/10 border-orange-500/25 text-orange-400",
    dot: "bg-orange-500",
  },
  Tecsup: {
    bar: "bg-sky-500/70",
    badge: "bg-sky-500/10 border-sky-500/25 text-sky-400",
    dot: "bg-sky-500",
  },
};

const fallbackConfig = {
  bar: "bg-storm-accent/50",
  badge: "bg-storm-bg3 border-storm-border text-storm-fg2",
  dot: "bg-storm-accent",
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
    <section id="certificados" className="px-6 py-24" aria-label="Certificados">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Certificados" subtitle="Cursos y certificaciones completados." />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const cfg = issuerConfig[cert.issuer] ?? fallbackConfig;
            return (
              <motion.article
                key={cert.title}
                variants={fadeUp(0.1 + i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/30 hover:shadow-[0_0_24px_-4px_rgba(104,136,200,0.12)] transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className={`h-0.5 w-full ${cfg.bar}`} />

                {/* Certificate image */}
                <div className="relative h-36 w-full bg-storm-bg3 overflow-hidden">
                  {cert.imagePath ? (
                    <Image
                      src={cert.imagePath}
                      alt={`Certificado: ${cert.title}`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-storm-bg2 via-storm-bg2/30 to-transparent" />

                  {/* Issuer badge over image */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${cfg.badge}`}
                    >
                      <span className={`size-1.5 rounded-full ${cfg.dot}`} aria-hidden="true" />
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="text-sm font-semibold text-storm-fg leading-snug">{cert.title}</h3>

                  <div className="flex items-center gap-3 text-xs text-storm-fg2">
                    <span>{cert.date}</span>
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

                  <div className="mt-auto pt-1">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-storm-border bg-storm-bg3 px-3 py-2 text-xs font-medium text-storm-fg2 hover:border-storm-accent/40 hover:text-storm-fg transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-storm-accent focus-visible:outline-none"
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      Ver certificado
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
