import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';


i18n.use(Backend).use(initReactI18next).init({
  backend: {
    loadPath: '/locales/{{lng}}.json', // Ruta desde la carpeta public
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;