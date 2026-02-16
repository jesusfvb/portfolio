import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/application/i18n/locales/en.json";
import es from "@/application/i18n/locales/es.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

void i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
