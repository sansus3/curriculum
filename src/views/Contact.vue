<template>
<div class="container contact">
    <h1>
        {{store.state.tituloPrincipal}}
    </h1>
</div>
</template>

<script setup>
//Dependencias
import {useStore} from "vuex";
//Cargar el store
const store = useStore();
</script>