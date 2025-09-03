import { locales, defaultLang, languages } from './locales.ts';
import { getRelativeLocaleUrl } from "astro:i18n";

export function useTranslations(lang: keyof typeof locales) {
  return function t(key: keyof typeof locales[typeof defaultLang]) {
    return locales[lang][key];
  }
}

export function getLocalePaths(url: URL) {
  return Object.keys(languages).map((lang) => {
    return {
      lang: lang,
      path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, ''))
    };
  });
}