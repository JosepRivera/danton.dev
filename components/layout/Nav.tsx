"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const sectionIds = [
  "hero",
  "sobre-mi",
  "proyectos",
  "skills",
  "experiencia",
  "certificados",
  "contacto",
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b",
        scrolled
          ? "bg-storm-bg2/80 backdrop-blur-md border-storm-border"
          : "bg-storm-bg/0 border-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        {/* JR monogram logo */}
        <a
          href="#hero"
          className="group flex items-center gap-px focus-visible:outline-none"
          aria-label={t.goHome}
        >
          <span className="flex items-center justify-center size-9 rounded-lg border border-storm-border bg-storm-bg2 group-hover:border-storm-accent/40 transition-colors duration-200">
            <span className="font-heading text-sm font-bold tracking-tight">
              <span className="text-storm-fg">J</span>
              <span className="text-storm-accent">R</span>
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {t.links.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-colors duration-150 border",
                    isActive
                      ? "text-storm-fg bg-storm-bg3 border-storm-border"
                      : "text-storm-fg2 border-transparent hover:text-storm-fg hover:bg-storm-bg3/50",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-storm-border bg-storm-bg2 p-0.5">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={cn(
                "px-2 py-1 rounded-md text-xs font-medium transition-colors duration-150",
                lang === "es" ? "bg-storm-bg3 text-storm-fg" : "text-storm-fg2 hover:text-storm-fg",
              )}
              aria-pressed={lang === "es"}
              aria-label="Cambiar a español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-2 py-1 rounded-md text-xs font-medium transition-colors duration-150",
                lang === "en" ? "bg-storm-bg3 text-storm-fg" : "text-storm-fg2 hover:text-storm-fg",
              )}
              aria-pressed={lang === "en"}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center rounded-lg p-2 text-storm-fg2 hover:text-storm-fg hover:bg-storm-bg3 transition-colors"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-storm-border bg-storm-bg2/95 backdrop-blur-md overflow-hidden transition-all duration-200",
          menuOpen ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {t.links.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "block py-2.5 text-sm transition-colors",
                    isActive
                      ? "text-storm-accent font-medium"
                      : "text-storm-fg2 hover:text-storm-accent",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
