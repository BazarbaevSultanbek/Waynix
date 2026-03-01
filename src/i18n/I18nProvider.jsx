import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext({
  language: "uz",
  setLanguage: () => {},
  t: (key) => key,
});

function getByPath(obj, path) {
  return path.split(".").reduce((acc, cur) => acc?.[cur], obj);
}

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(
    localStorage.getItem("waynix_lang") || "uz"
  );

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("waynix_lang", lang);
  };

  const t = (key) => {
    const current = getByPath(translations[language] || {}, key);
    if (current !== undefined) return current;
    const fallbackUz = getByPath(translations.uz, key);
    return fallbackUz !== undefined ? fallbackUz : key;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

