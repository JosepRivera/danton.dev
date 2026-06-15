"use client";

import { Award, Clock, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";
import { translations } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

const issuerConfig: Record<string, { bar: string; badge: string; dot: string }> = {
  Udemy: {
    bar: "bg-orange-500/70",
    badge: "bg-orange-950/90 border-orange-500/40 text-orange-300",
    dot: "bg-orange-400",
  },
  Tecsup: {
    bar: "bg-sky-500/70",
    badge: "bg-sky-950/90 border-sky-500/40 text-sky-300",
    dot: "bg-sky-400",
  },
  DevTalles: {
    bar: "bg-violet-500/70",
    badge: "bg-violet-950/90 border-violet-500/40 text-violet-300",
    dot: "bg-violet-400",
  },
};

const fallbackConfig = {
  bar: "bg-storm-accent/50",
  badge: "bg-storm-bg3/90 border-storm-border text-storm-fg2",
  dot: "bg-storm-accent",
};

export function Certificates() {
  const { ref, inView } = useInView(0.05);
  const { lang } = useLanguage();
  const t = translations[lang].certificates;

  return (
    <section id="certificados" className="px-6 py-24" aria-label={t.title} ref={ref}>
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <SectionTitle title={t.title} subtitle={t.subtitle} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const cfg = issuerConfig[cert.issuer] ?? fallbackConfig;
            return (
              <article
                key={cert.title}
                className={`group relative flex flex-col rounded-2xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/40 hover:shadow-[0_0_32px_-4px_rgba(104,136,200,0.15)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: inView ? `${100 + i * 80}ms` : "0ms" }}
              >
                <div className={`h-0.5 w-full ${cfg.bar}`} />

                <div className="relative h-44 w-full bg-storm-bg3 overflow-hidden">
                  {cert.imagePath ? (
                    <>
                      <Image
                        src={cert.imagePath}
                        alt={`Certificado: ${cert.title}`}
                        fill
                        priority={i < 2}
                        className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-storm-bg2/40 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="size-12 text-storm-fg2/30" />
                    </div>
                  )}

                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${cfg.badge}`}
                    >
                      <span className={`size-1.5 rounded-full ${cfg.dot}`} aria-hidden="true" />
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="text-sm font-semibold text-storm-fg leading-snug">{cert.title}</h3>

                  <div className="flex items-center gap-3 text-xs text-storm-fg2">
                    <span className="text-storm-accent2 font-medium">{cert.date}</span>
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

                  <div className="mt-auto pt-1 flex flex-wrap gap-2">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-storm-border bg-storm-bg3 px-3 py-2 text-xs font-medium text-storm-fg2 hover:border-storm-accent/50 hover:text-storm-fg hover:bg-storm-accent/5 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-storm-accent focus-visible:outline-none"
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      {t.viewCertificate}
                    </a>
                    {cert.pdfPath && (
                      <a
                        href={cert.pdfPath}
                        download
                        className="inline-flex items-center gap-1.5 rounded-lg border border-storm-border bg-storm-bg3 px-3 py-2 text-xs font-medium text-storm-fg2 hover:border-storm-accent/50 hover:text-storm-fg hover:bg-storm-accent/5 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-storm-accent focus-visible:outline-none"
                      >
                        <Download className="size-3.5" aria-hidden="true" />
                        {t.downloadPdf}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
