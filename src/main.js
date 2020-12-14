import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
//import 'primevue/resources/themes/mdc-dark-indigo/theme.css' // Dark materia ui framework

createApp(App)
.use(router)
.use(PrimeVue)
.use(ToastService)
.mount('#app')
