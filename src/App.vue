<template>
  <!-- Menú principal -->
  <the-menu></the-menu>
  <!-- Cotenido principal de la página -->
  <div class="main-content">
    <router-view />
  </div>
  <!-- Pie de página principal -->
  <TheFooter></TheFooter>
</template>

<script setup>
//Dependecias
import TheMenu from "@/components/TheMenu";
import TheFooter from "@/components/TheFooter";
//Importanción de ficheros scss con nodejs
require("@/assets/scss/estructura.scss");
</script>