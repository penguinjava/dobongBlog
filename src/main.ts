import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // Tailwind 연결
import './assets/fonts.css'

createApp(App).use(router).mount('#app')
