"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Lang | null;
    if (stored === "es" || stored === "en") {
      setLangState(stored);
    } else {
      const browserLang = navigator.language.toLowerCase();
      setLangState(browserLang.startsWith("en") ? "en" : "es");
    }
  }, []);

  // Screen readers pick the speech synthesizer from this attribute, so it has to
  // follow the toggle — otherwise the English page is read by a Spanish voice.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
