<template>
    <nav class="main-menu">
        <router-link to="/">
            <font-awesome-icon :icon="['fa','home']">Home</font-awesome-icon>
        </router-link>
        <router-link to="/about">
           <font-awesome-icon :icon="['fa','info-circle']" spin />
        </router-link>
    </nav>
</template>

<script setup>
    require("@/assets/scss/TheMenu.scss");
</script>