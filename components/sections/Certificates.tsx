"use client";

import { Award, Clock, ExternalLink, Maximize2, X } from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useCallback, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Certificate } from "@/data/certificates";
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

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Certificate | null>(null);

  // `showModal` gives Escape, backdrop inertness and focus return for free.
  // The selected certificate is set before opening and simply stays mounted
  // behind the closed dialog — nothing renders it, so there is no need to
  // clear it on close.
  // One stable handler for every trigger; the card index rides on the button's
  // dataset so the list does not allocate a new closure per render.
  const open = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.certIndex);
    const cert = certificates[index];
    if (!cert) return;
    setActive(cert);
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

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
                className={`group relative flex flex-col rounded-2xl border border-storm-border bg-storm-bg2 overflow-hidden hover:border-storm-accent/40 hover:shadow-[0_0_32px_-4px_rgba(104,136,200,0.15)] transition-[opacity,transform,border-color,box-shadow] duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: inView ? `${100 + i * 80}ms` : "0ms" }}
              >
                <div className={`h-0.5 w-full ${cfg.bar}`} />

                <button
                  type="button"
                  data-cert-index={i}
                  onClick={open}
                  className="relative block h-44 w-full cursor-zoom-in overflow-hidden bg-storm-bg3 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-storm-accent"
                  aria-label={t.viewCertificate}
                >
                  {cert.imagePath ? (
                    <>
                      <Image
                        src={cert.imagePath}
                        alt={t.certAlt.replace("{title}", cert.title)}
                        fill
                        loading={i < 2 ? undefined : "lazy"}
                        className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-300"
                        sizes="(max-width: 680px) 100vw, (max-width: 1088px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-storm-bg2/40 to-transparent" />
                      <span className="absolute inset-0 flex items-center justify-center bg-storm-bg/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <Maximize2 className="size-6 text-storm-fg" aria-hidden="true" />
                      </span>
                    </>
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Award className="size-12 text-storm-fg2/30" aria-hidden="true" />
                    </span>
                  )}

                  <span className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${cfg.badge}`}
                    >
                      <span className={`size-1.5 rounded-full ${cfg.dot}`} aria-hidden="true" />
                      {cert.issuer}
                    </span>
                  </span>
                </button>

                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="text-sm font-semibold text-storm-fg leading-snug">{cert.title}</h3>

                  <div className="flex items-center gap-3 text-xs text-storm-fg2">
                    <span className="text-storm-accent2 font-medium">{cert.date}</span>
                    {cert.duration ? (
                      <>
                        <span className="h-3 w-px bg-storm-border" aria-hidden="true" />
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3" aria-hidden="true" />
                          {cert.duration}
                        </span>
                      </>
                    ) : null}
                  </div>

                  <div className="mt-auto pt-1">
                    <button
                      type="button"
                      data-cert-index={i}
                      onClick={open}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-storm-border bg-storm-bg3 px-3 py-2 text-xs font-medium text-storm-fg2 hover:border-storm-accent/50 hover:text-storm-fg hover:bg-storm-accent/5 transition-[color,background-color,border-color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
                    >
                      <Maximize2 className="size-3.5" aria-hidden="true" />
                      {t.viewCertificate}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active ? t.certAlt.replace("{title}", active.title) : t.title}
        className="m-auto w-[min(56rem,92vw)] rounded-2xl border border-storm-border bg-storm-bg2 p-0 text-storm-fg backdrop:bg-storm-bg/80 backdrop:backdrop-blur-sm"
      >
        {active ? (
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-storm-border p-5">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold leading-snug">{active.title}</h3>
                <p className="text-xs text-storm-fg2">
                  {active.issuer} · {active.date}
                  {active.duration ? ` · ${active.duration}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-storm-border bg-storm-bg3 text-storm-fg2 hover:border-storm-accent/50 hover:text-storm-fg transition-[color,border-color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
                aria-label={t.closePreview}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            {active.imagePath ? (
              <div className="relative h-[60vh] w-full bg-storm-bg3">
                <Image
                  src={active.imagePath}
                  alt={t.certAlt.replace("{title}", active.title)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 680px) 92vw, 56rem"
                />
              </div>
            ) : null}

            <div className="flex justify-end border-t border-storm-border p-5">
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-storm-border bg-storm-bg3 px-3 py-2 text-xs font-medium text-storm-fg2 hover:border-storm-accent/50 hover:text-storm-fg hover:bg-storm-accent/5 transition-[color,background-color,border-color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-storm-accent"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                {t.verifyAt.replace("{issuer}", active.issuer)}
              </a>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
