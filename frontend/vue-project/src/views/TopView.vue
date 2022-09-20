<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import Top from '../components/Top.vue'
</script>

<template>
  <div class='pattern'></div>
  <NavBar />
  <Menu />
  <Top />
  <RouterView />
  <Footer />
</template>