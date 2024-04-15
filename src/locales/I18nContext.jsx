import { Children, createContext, useState } from "react";
import en from "./en.json";
import es from "./es.json";

const locales = { "en": en, "es": es };

export const I18nContext = createContext(null);

export default function I18nProvider({ children }) {
  const [language, setLanguage] = useState("en");
  console.log(language)
  function t(key) {
    return (locales[language][key] || key);
  }

  return (
    <I18nContext.Provider value={{language, setLanguage, t}}>
      {children}
    </I18nContext.Provider>
  );
}
