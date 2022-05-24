import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


//Para cargar iconos
import { library } from '@fortawesome/fontawesome-svg-core';//Devuel el objeto library
import { faHome } from '@fortawesome/free-solid-svg-icons';//icono de la casa
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';//Componente de vue

library.add(faHome,faInfoCircle,faSpinner);

createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)//nombre del componente asignado y componente cargado
.use(createPinia())
.use(router)
.mount('#app')
