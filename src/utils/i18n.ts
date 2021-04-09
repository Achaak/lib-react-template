import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import example_EN from "../locales/en/example.json";
import example_FR from "../locales/fr/example.json";

const resources: Resource = {
  en: {
    example: example_EN,
  },
  fr: {
    example: example_FR,
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;