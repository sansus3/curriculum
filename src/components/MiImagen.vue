<template>
    <figure class="imagen">
        <img
            src="../assets/senlleiras.jpg" 
            alt="Texto alternativo">
        <figcaption>
            Título de la imagen
        </figcaption>
    </figure>
</template>

<style lang="scss">
    .imagen{
        width: 20vw;
    }
    .imagen img{
        object-fit: cover;
        display: block;
        width: 100%;
    }
    .imagen figcaption{
        background-color: black;
        color: white;
        width: 100%;
        display: block;
    }
</style>