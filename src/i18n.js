import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Courses": "Courses",
      "Interactive": "Interactive Simulations/Games",
      "Account": "Account",
      "Login / Signup": "Login / Signup",
      "Our Vision": "Our Vision/Mission/Moto",
      "Popular Courses": "Popular Courses",
      "Why Choose Us?": "Why Choose Us?",
      "Contact Us": "Contact Us",
      "FAQs": "FAQs",
      "Coming soon!": "Coming soon!",
      "Search courses...": "Search courses..."
    }
  },
  hi: {
    translation: {
      "Home": "मुख्य पृष्ठ",
      "Courses": "पाठ्यक्रम",
      "Interactive": "इंटरैक्टिव सिमुलेशन/गेम्स",
      "Account": "खाता",
      "Login / Signup": "लॉगिन / साइनअप",
      "Our Vision": "हमारा दृष्टि/मिशन/मोटो",
      "Popular Courses": "लोकप्रिय पाठ्यक्रम",
      "Why Choose Us?": "हमें क्यों चुनें?",
      "Contact Us": "संपर्क करें",
      "FAQs": "सामान्य प्रश्न",
      "Coming soon!": "जल्द आ रहा है!",
      "Search courses...": "पाठ्यक्रम खोजें..."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
