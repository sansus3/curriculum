<template>
  <div class="about">
    <h1>Acerca de</h1>
  </div>
</template>

<script setup>
import { db } from '@/firebase.js';
import { doc, getDoc } from "firebase/firestore";

const leer = async () => {
  const docRef = doc(db, "datospersonales", "xurxo");
  const docCaputura = await getDoc(docRef);
  if (docCaputura.exists()) {
    console.log("Document data:", docCaputura.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

leer();
</script>
