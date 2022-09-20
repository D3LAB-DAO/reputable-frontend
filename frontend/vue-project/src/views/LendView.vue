<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import Lend from '../components/Lend.vue'
</script>

<template>
  <div class='pattern'></div>
  <NavBar />
  <Menu />
  <Lend />
  <RouterView />
  <Footer />
</template>