import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/application/i18n/locales/en.json";
import es from "@/application/i18n/locales/es.json";
import enEducation from "@/application/i18n/locales/education/en.json";
import esEducation from "@/application/i18n/locales/education/es.json";
import enSkills from "@/application/i18n/locales/skills/en.json";
import esSkills from "@/application/i18n/locales/skills/es.json";
import enProjects from "@/application/i18n/locales/projects/en.json";
import esProjects from "@/application/i18n/locales/projects/es.json";
import { SUPPORTED_LANGUAGES } from "@/application/i18n/constants";

const resources = {
  en: {
    translation: {
      ...en,
      education: enEducation,
      skills: enSkills,
      projects: enProjects,
    },
  },
  es: {
    translation: {
      ...es,
      education: esEducation,
      skills: esSkills,
      projects: esProjects,
    },
  },
};

void i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
