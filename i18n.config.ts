import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./i18n/lang/ar.json";
import en from "./i18n/lang/en.json";
import ku from "./i18n/lang/ku.json";
//empty for now

const resources = {
  en,
  ar,
  ku,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
