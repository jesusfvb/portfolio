import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "@/application/i18n/constants";

const isSupportedLanguage = (
  value: string | null,
): value is SupportedLanguage =>
  SUPPORTED_LANGUAGES.includes(value as SupportedLanguage);

export const useLocale = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (
      storedLanguage &&
      isSupportedLanguage(storedLanguage) &&
      storedLanguage !== i18n.language
    ) {
      void i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const setLanguage = useCallback(
    (language: SupportedLanguage) => {
      void i18n.changeLanguage(language);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      }
    },
    [i18n],
  );

  const currentLanguage = isSupportedLanguage(i18n.language)
    ? i18n.language
    : "en";

  return {
    currentLanguage,
    setLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
};
