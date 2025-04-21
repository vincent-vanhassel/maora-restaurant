// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import fr from './locales/fr.json'
import en from './locales/en.json'

import './style.css'

// Configuration de i18n
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'fr', // langue par défaut
  fallbackLocale: 'en',
  messages: {
    fr,
    en
  }
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
