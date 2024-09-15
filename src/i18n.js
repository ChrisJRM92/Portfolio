import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslations from '../public/Locales/en.json';
import esTranslations from '../public/locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;