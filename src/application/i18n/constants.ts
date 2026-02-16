export const LANGUAGE_STORAGE_KEY = "portfolio:language";

export const SUPPORTED_LANGUAGES = ["en", "es"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
