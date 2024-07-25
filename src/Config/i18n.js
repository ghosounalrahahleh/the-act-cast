import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    lang:'en',
    debug: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: process.env.REACT_APP_PUBLIC_PATH + "Locals/{{lng}}/{{ns}}.json",
    },
    ns: [
      "home",
      "layout",
      "acting_cast",
      "acting_club",
      "auth",
      "our_work",
      "profile",
    ], 
    defaultNS: "home",
    detection: {
      order: ["queryString", "cookie", "localStorage", "navigator"],
      cache: ["cookie"],
    },
  });

export default i18n;
