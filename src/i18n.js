import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  //debug: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },

});

export default i18n;