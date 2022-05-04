<template>
    <section class="galeria">
        <h1>{{titulo}}</h1>
        <div class="contenedor-galeria">
            <MiImagen></MiImagen>
            <MiImagen></MiImagen>
            <MiImagen />
            <mi-imagen></mi-imagen>
            <MiImagen></MiImagen>
            <MiImagen></MiImagen>
            <MiImagen />
            <mi-imagen></mi-imagen>
        </div>
    </section>
</template>

<script setup>
//Dependencias
import {useStore} from "vuex";
import {computed} from "vue";

import MiImagen from "@/components/MiImagen.vue";

//Cargar el store/state
const store = useStore();

const titulo = computed(()=>store.state.tituloPrincipal);
</script>

<style>
    .contenedor-galeria{
        display: flex;
        flex-wrap: wrap;
    }
</style>