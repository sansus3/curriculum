<template>
    <div class="container">
        <h1 class="title">{{titulo}}</h1>

        <select name="colores" id="colores">
            <option 
                v-for="item in colores" 
                :key="item" 
                :value="item"
            >
            {{item}}</option>
        </select>
        
        <ol v-if="colores.length>0">
            <li v-for="valor in colores" :key="valor">{{valor}}</li>
        </ol>
    </div>
</template>

<script setup>
    const titulo = "Listado de especies";
    const colores = [
        "Morado",
        "Azul",
        "Verde",
        "Rosa"
    
    ];
    
    
    // Declaración o plantilla de la función
    const leerDatos = async () => {
        const response = await fetch('https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/species.json');
        //console.log(response);
        const data = await response.json();
        console.log(data);
    }
    //Uso de la función
    leerDatos();

</script>