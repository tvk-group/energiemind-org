export const SITE_URL = "https://www.energiemind.org";

export const locales = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "ar",
  "ru",
  "zh-cn",
  "zh-tw",
  "ja",
  "ko",
  "hi",
  "ur",
  "pl",
  "ro",
  "el",
  "sv",
  "no",
  "da",
  "fi",
  "he",
  "id",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export interface LocaleConfig {
  code: Locale;
  hreflang: string;
  ogLocale: string;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  bingLang?: string;
  baiduLang?: string;
}

export const localeConfig: Record<Locale, LocaleConfig> = {
  en: { code: "en", hreflang: "en", ogLocale: "en_US", name: "English", nativeName: "English", dir: "ltr", bingLang: "en", baiduLang: "en" },
  tr: { code: "tr", hreflang: "tr", ogLocale: "tr_TR", name: "Turkish", nativeName: "Türkçe", dir: "ltr", bingLang: "tr", baiduLang: "tr" },
  de: { code: "de", hreflang: "de", ogLocale: "de_DE", name: "German", nativeName: "Deutsch", dir: "ltr", bingLang: "de", baiduLang: "de" },
  fr: { code: "fr", hreflang: "fr", ogLocale: "fr_FR", name: "French", nativeName: "Français", dir: "ltr", bingLang: "fr", baiduLang: "fr" },
  es: { code: "es", hreflang: "es", ogLocale: "es_ES", name: "Spanish", nativeName: "Español", dir: "ltr", bingLang: "es", baiduLang: "es" },
  it: { code: "it", hreflang: "it", ogLocale: "it_IT", name: "Italian", nativeName: "Italiano", dir: "ltr", bingLang: "it", baiduLang: "it" },
  pt: { code: "pt", hreflang: "pt", ogLocale: "pt_PT", name: "Portuguese", nativeName: "Português", dir: "ltr", bingLang: "pt", baiduLang: "pt" },
  nl: { code: "nl", hreflang: "nl", ogLocale: "nl_NL", name: "Dutch", nativeName: "Nederlands", dir: "ltr", bingLang: "nl", baiduLang: "nl" },
  ar: { code: "ar", hreflang: "ar", ogLocale: "ar_SA", name: "Arabic", nativeName: "العربية", dir: "rtl", bingLang: "ar", baiduLang: "ar" },
  ru: { code: "ru", hreflang: "ru", ogLocale: "ru_RU", name: "Russian", nativeName: "Русский", dir: "ltr", bingLang: "ru", baiduLang: "ru" },
  "zh-cn": { code: "zh-cn", hreflang: "zh-Hans", ogLocale: "zh_CN", name: "Chinese (Simplified)", nativeName: "简体中文", dir: "ltr", bingLang: "zh-Hans", baiduLang: "zh-CN" },
  "zh-tw": { code: "zh-tw", hreflang: "zh-Hant", ogLocale: "zh_TW", name: "Chinese (Traditional)", nativeName: "繁體中文", dir: "ltr", bingLang: "zh-Hant", baiduLang: "zh-TW" },
  ja: { code: "ja", hreflang: "ja", ogLocale: "ja_JP", name: "Japanese", nativeName: "日本語", dir: "ltr", bingLang: "ja", baiduLang: "ja" },
  ko: { code: "ko", hreflang: "ko", ogLocale: "ko_KR", name: "Korean", nativeName: "한국어", dir: "ltr", bingLang: "ko", baiduLang: "ko" },
  hi: { code: "hi", hreflang: "hi", ogLocale: "hi_IN", name: "Hindi", nativeName: "हिन्दी", dir: "ltr", bingLang: "hi", baiduLang: "hi" },
  ur: { code: "ur", hreflang: "ur", ogLocale: "ur_PK", name: "Urdu", nativeName: "اردو", dir: "rtl", bingLang: "ur", baiduLang: "ur" },
  pl: { code: "pl", hreflang: "pl", ogLocale: "pl_PL", name: "Polish", nativeName: "Polski", dir: "ltr", bingLang: "pl", baiduLang: "pl" },
  ro: { code: "ro", hreflang: "ro", ogLocale: "ro_RO", name: "Romanian", nativeName: "Română", dir: "ltr", bingLang: "ro", baiduLang: "ro" },
  el: { code: "el", hreflang: "el", ogLocale: "el_GR", name: "Greek", nativeName: "Ελληνικά", dir: "ltr", bingLang: "el", baiduLang: "el" },
  sv: { code: "sv", hreflang: "sv", ogLocale: "sv_SE", name: "Swedish", nativeName: "Svenska", dir: "ltr", bingLang: "sv", baiduLang: "sv" },
  no: { code: "no", hreflang: "no", ogLocale: "nb_NO", name: "Norwegian", nativeName: "Norsk", dir: "ltr", bingLang: "no", baiduLang: "no" },
  da: { code: "da", hreflang: "da", ogLocale: "da_DK", name: "Danish", nativeName: "Dansk", dir: "ltr", bingLang: "da", baiduLang: "da" },
  fi: { code: "fi", hreflang: "fi", ogLocale: "fi_FI", name: "Finnish", nativeName: "Suomi", dir: "ltr", bingLang: "fi", baiduLang: "fi" },
  he: { code: "he", hreflang: "he", ogLocale: "he_IL", name: "Hebrew", nativeName: "עברית", dir: "rtl", bingLang: "he", baiduLang: "he" },
  id: { code: "id", hreflang: "id", ogLocale: "id_ID", name: "Indonesian", nativeName: "Bahasa Indonesia", dir: "ltr", bingLang: "id", baiduLang: "id" },
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}`;
}

export function getLocalizedUrl(locale: Locale, path = ""): string {
  const base = `${SITE_URL}/${locale}`;
  return path ? `${base}${path}` : base;
}
