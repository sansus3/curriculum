<template>
  <div class="about">
    <h1>{{title}}</h1>
  </div>
</template>

<script setup>
//Importanción de dependencias
import {useStore} from 'vuex';
import {computed} from 'vue';

//Cargo el store / datos centralizados
const store = useStore();

const title = computed(()=>store.state.tituloPrincipal);


</script>
