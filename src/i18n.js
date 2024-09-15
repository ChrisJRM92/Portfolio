import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

// import enTranslations from '../public/locales/en.json';
// import esTranslations from '../public/locales/es.json';

i18n.use(Backend).use(initReactI18next).init({
  backend: {
    loadPath: '/locales/{{lng}}.json', // Ruta desde la carpeta public
  },
  // resources: {
  //   en: { translation: enTranslations },
  //   es: { translation: esTranslations },
  // },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;