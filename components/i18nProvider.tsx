"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { initI18n, DEFAULT_LANGUAGE } from "@/i18n/config";

function detectInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem("language");
  if (stored) return stored;

  const browserLang =
    navigator.languages?.[0] || navigator.language || DEFAULT_LANGUAGE;

  if (browserLang.toLowerCase().startsWith("es")) return "es";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string | null>(null);
  const [i18n] = useState(() => initI18n(DEFAULT_LANGUAGE));

  useEffect(() => {
    const initial = detectInitialLanguage();
    setLanguage(initial);
    i18n.changeLanguage(initial);
    window.localStorage.setItem("language", initial);
  }, [i18n]);

  if (!language) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
