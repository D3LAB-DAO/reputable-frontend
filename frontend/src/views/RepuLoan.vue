<script setup>
import { RouterLink, RouterView } from "vue-router";
import RepuLoan from "../components/RepuLoan/Dashboard.vue";
</script>

<template>
  <div class="imgbackground"></div>
  <RepuLoan />
</template>

<style scoped>
.imgbackground {
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;

  opacity: 0.8;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.imgbackground:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #235f9c, #7b212a);
  opacity: 0.8;
}
</style>
