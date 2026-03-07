import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

export const DEFAULT_LANGUAGE = "es";
export const SUPPORTED_LANGUAGES = Object.keys(resources);

export function initI18n(language?: string) {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng: language || DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false,
      },
    });
  } else if (language && i18n.language !== language) {
    i18n.changeLanguage(language);
  }

  return i18n;
}
