import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcomeMessage: 'Welcome to React',
      },
    },
    de: {
      translation: {
        welcomeMessage: 'Willkommen bei React',
      },
    },
    zh: {
      translation: {
        welcomeMessage: '欢迎使用 React',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
