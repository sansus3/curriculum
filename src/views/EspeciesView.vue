<template>
    <div class="container" v-if="loading">
        <h1 class="title">{{titulo}}</h1>

        <select name="colores" id="colores">
            <option 
            v-for="(valor,indice) in data.colores"
            :key="indice"
            :value="valor"
            >
            {{valor}}
            </option>
        </select>
        
       {{data.nombre.firsName}}
         
       
        
        
    </div>
</template>

<script setup>
    //Carga de librería o dependencias
    import {ref} from "vue";

    

    const titulo = "Especies";
    let data = ref('hola');
    const loading = ref(false);
    //import datos from "../assets/colores.json";
    //console.log(datos);
    
    //Utilizar promesa para obtención de datos
    /**
     * Función para obtener datos en github
     * async --> parámetro obligatorio para funciones asíncronas
     * async va SIEMPRE ACOMPAÑADO DE await
     */
    const obtenerDatos = async () => {
        /**
         * fetch devuelve una promesa que es una respuesta
         */
        let response = await fetch('https://raw.githubusercontent.com/sansus3/lectura-json/main/colores.json');
        //Conversión del tipo de datos
        data.value = await response.json();
        loading.value = true;
        //console.log(data.value)
    }

    //llamar a la función
    obtenerDatos();
    
        

</script>