<template>
    <nav class="main-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/galeria">Galería</router-link>
        <router-link to="/contact">Contacto</router-link>
        <router-link to="/especies">Especies</router-link>
    </nav>
</template>

<script setup>
    require("@/assets/scss/TheMenu.scss");
</script>