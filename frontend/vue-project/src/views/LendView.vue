<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "../components/Menu.vue";
import Lend from '../components/Lend.vue'
</script>

<template>
  <div class="pattern"></div>
  <div uk-grid>
    <div class="uk-width-1-4@m">
      <Menu />
    </div>
    <div class="uk-width-3-4@m uk-width-1-1">
      <Lend />
    </div>
  </div>
</template>