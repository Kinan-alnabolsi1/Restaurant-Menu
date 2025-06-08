// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import ar from './ar.json';

i18n
  .use(LanguageDetector) // يكتشف اللغة من المتصفح أو localStorage
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // لأن React يقوم بذلك تلقائيًا
    },
  });

export default i18n;
