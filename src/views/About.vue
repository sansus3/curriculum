<template>
  <div class="about">
    <h1>Acerca de</h1>
    <fieldset>
      <div class="campo">
        <strong>
          Nombre</strong> {{store.getNombreCompleto}} 
      </div>
      <div class="campo">
        <strong>Fecha de Nacimiento</strong> {{store.getDiaMesAnho}}
      </div>
    </fieldset>
    <!-- <pre>
      {{store.datosPersonales}}
    </pre> -->
  </div>
</template>

<script setup>
//Librerías
 import { useStorePerfil } from '@/store/perfil';
 //Arrancamos store
 const store = useStorePerfil();
 //Cargamos datos
 store.setDatosPersonales();
</script>
