<script>
import { getAccount } from "./assets/js/interface_request.js";
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import Wallet from "./components/Wallet.vue";

export default {
  data() {
    return {
      connected: true,
    };
  },
  components: {
    Menu,
    Wallet,
  },
  updated() {
    //this.connected = getAccount() !== '';
  },
};
</script>

<template>
  <div
    v-if="
      $route.name === 'trending' ||
      $route.name === 'governance' ||
      $route.name === 'explore'
    "
  >
    <div class="pattern"></div>
    <div uk-grid>
      <div class="uk-width-1-4@m">
        <Menu />
      </div>
      <div class="uk-width-3-4@m uk-width-1-1">
        <div v-if="connected">
          <RouterView />
        </div>
        <div v-else>
          <Wallet />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="
      $route.name === 'about' ||
      $route.name === 'repuloan' ||
      $route.name === 'repumarket'
    "
  >
    <RouterView />
  </div>
</template>
