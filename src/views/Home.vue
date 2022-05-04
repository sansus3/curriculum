<template>
  <div class="home">
    <h1>
     {{store.state.tituloPrincipal}}
    </h1>
    <img alt="Senlleiras" src="../assets/senlleiras.jpg">
    <saludo></saludo> 
    



  
  </div>
</template>

<script setup>
//Carga de dependencias
import saludo from "../components/ElSaludo.vue";
//import datos from "@/assets/senlleiras.json";
  //Importar el store de vuex
import {useStore} from "vuex";
//Inicializar/cargar store
const store = useStore();




console.log(store.state.tituloPrincipal);


//Variables
//let titulo = "Datos de Senlleiras";



//console.log(datos,titulo);


</script>

<style>
img{
  width: 300px;
}
</style>