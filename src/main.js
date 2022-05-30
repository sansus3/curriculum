import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import FontAwesomeIcon from "@/hook/fontawesome"


createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)//nombre del componente asignado y componente cargado
.use(createPinia())
.use(router)
.mount('#app')
