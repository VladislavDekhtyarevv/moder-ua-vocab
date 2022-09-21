import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import '@/assets/styles.scss'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(createPinia())
    .mount('#app')
