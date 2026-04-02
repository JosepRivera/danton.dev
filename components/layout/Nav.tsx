"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi", sectionId: "sobre-mi" },
  { label: "Proyectos", href: "#proyectos", sectionId: "proyectos" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Certificados", href: "#certificados", sectionId: "certificados" },
  { label: "Contacto", href: "#contacto", sectionId: "contacto" },
];

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
  const shouldReduce = useReducedMotion();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-storm-bg2/80 backdrop-blur-md border-b border-storm-border"
          : "bg-transparent",
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
          aria-label="Ir al inicio"
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors duration-150",
                    isActive ? "text-storm-fg" : "text-storm-fg2 hover:text-storm-fg",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-storm-bg3 border border-storm-border"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-storm-accent/40 bg-storm-accent/10 px-3.5 py-2 text-sm font-medium text-storm-accent hover:bg-storm-accent/20 transition-colors duration-150"
        >
          <Download className="size-3.5" />
          Descargar CV
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-storm-fg2 hover:text-storm-fg hover:bg-storm-bg3 transition-colors"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-storm-border bg-storm-bg2/95 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => {
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
              <li className="pt-2 mt-1 border-t border-storm-border">
                <a
                  href="/cv.pdf"
                  download
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-storm-accent hover:text-storm-accent2 transition-colors"
                >
                  <Download className="size-3.5" />
                  Descargar CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
