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
</script>



<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  //Grid
  display: grid;
  grid-template-rows: auto 1fr auto;
  //Box
  min-height: 100vh;
  margin: 0;
  padding: 0;
  //font
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
