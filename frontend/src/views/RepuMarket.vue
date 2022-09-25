<script setup>
import { RouterLink, RouterView } from "vue-router";
import RepuMarket from "../components/RepuMarket/Dashboard.vue";
</script>

<template>
  <div class="background"></div>
  <RepuMarket />
</template>

<style scoped>
/* background */
.background {
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image : url(../img/img-noise-361x370.png);
  background-repeat: repeat;
}
</style>
