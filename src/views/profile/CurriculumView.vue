<template>
    <div class="container">
        <h1 class="title">Curriculum vitae</h1>
        <ul>
            <li v-for="(valor,index) in store.curriculum" :key="index">
            {{valor.titulo}}
            </li>
        </ul>
    </div>
</template>

<script setup>
//Importación del store de Pinia o variables centralizada de nuestra app
import {useStoreDatosPersonales} from "@/store/datosPersonales";
//Cargamos el store
const store = useStoreDatosPersonales();
store.setDatosCurriculum();
</script>