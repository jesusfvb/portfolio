import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  es: {
    translation: {},
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
