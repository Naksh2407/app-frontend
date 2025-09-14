import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome": "Welcome",
      "Courses": "Courses",
    }
  },
  hi: {
    translation: {
      "Welcome": "स्वागत है",
      "Courses": "पाठ्यक्रम",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
