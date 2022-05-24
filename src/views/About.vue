<template>
  <div class="about">
    <h1>Curriculum Vitae de {{store.nombre}} {{store.apellido1}}</h1>
    <ul>
      <li v-for="valor in store.curriculum" :key="valor.cod">
        <ol>
          <li><strong>denominacion</strong>: {{valor.denominacion}}</li>
          <li><strong>Fecha</strong>: {{valor.fechaIncio}}</li>
        </ol>
      </li>
    </ul>
    <!-- <pre>
       {{store.curriculum}}
    </pre> -->
  </div>
</template>

<script setup>
import {useStoreProfile} from "@/store/profile";
const store = useStoreProfile();
store.cargarData();
</script>
