<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import Mint from '../components/Mint.vue'
</script>

<template>
  <div class='pattern'></div>
  <NavBar />
  <Menu />
  <Mint />
  <RouterView />
  <Footer />
</template>