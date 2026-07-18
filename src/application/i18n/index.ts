import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/application/i18n/locales/en.json";
import es from "@/application/i18n/locales/es.json";
import enEducation from "@/application/i18n/locales/education/en.json";
import esEducation from "@/application/i18n/locales/education/es.json";
import enCertifications from "@/application/i18n/locales/certifications/en.json";
import esCertifications from "@/application/i18n/locales/certifications/es.json";
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
      certifications: enCertifications,
      skills: enSkills,
      projects: enProjects,
    },
  },
  es: {
    translation: {
      ...es,
      education: esEducation,
      certifications: esCertifications,
      skills: esSkills,
      projects: esProjects,
    },
  },
};

// Detectar idioma: localStorage (preferencia) > navigator.language (navegador) > 'en' (default)
const getInitialLanguage = (): string => {
  // Nivel 1: Verificar localStorage (preferencia del usuario)
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("portfolio:language");
    if (stored === "en" || stored === "es") {
      return stored;
    }
  }

  // Nivel 2: Verificar idioma del navegador
  if (typeof navigator !== "undefined") {
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith("es")) {
      return "es";
    }
  }

  // Nivel 3: Default a inglés
  return "en";
};

void i18next.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
