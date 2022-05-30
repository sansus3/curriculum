//Para cargar iconos
import { library } from '@fortawesome/fontawesome-svg-core';//Devuel el objeto library
import { faHome } from '@fortawesome/free-solid-svg-icons';//icono de la casa
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';//Componente de vue

library.add(faHome,faInfoCircle,faSpinner);

export default FontAwesomeIcon;
