import { ui, defaultLang, languages } from './ui';
import { getRelativeLocaleUrl } from "astro:i18n";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key];
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