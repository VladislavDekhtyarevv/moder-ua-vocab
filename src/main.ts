import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import '@/assets/styles.scss'
import { vue3Debounce } from 'vue-debounce'
import ConfirmationService from 'primevue/confirmationservice';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import VueClickAway from "vue3-click-away";

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(ConfirmationService)
    .use(VueClickAway)
    .directive('debounce', vue3Debounce({ lock: true }))
    .use(createPinia())
    .mount('#app')
