"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="relative border-t border-storm-border py-6 text-center text-sm text-storm-fg2">
      <p>
        {t.builtBy} <span className="text-storm-fg font-medium">Josep Rivera</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
