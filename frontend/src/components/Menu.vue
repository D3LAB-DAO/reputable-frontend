<script>
import { connectMetamask, getAccount, getContract } from "../assets/js/interface_request.js";

export default {
  data() {
    return {
      btnTextSmall: '→',
      btnText: 'Metamask →',
      btnTooltip: 'Connect to metamask',
    };
  },
  methods: {
    connectOnClick: function () {
      if (getAccount() !== '') return;

      let result;
      connectMetamask().then((success) => {
        if (success) {
          console.log("metamask successfully connected!");
          let account = getAccount();
          this.btnText = account.substr(0, 8) + '....' + account.substr(account.length - 8, 8);
          this.btnTextSmall = account.substr(0, 4);
          this.btnTooltip = account;
          this.emitter.emit('metamask-connect-event', true);
        }
        else {
          console.log("metamask connection failed!");
          this.emitter.emit("metamask-connect-event", false);
      }
      })
    }
  }
}
</script>

<template>
  <!-- Nav Bar (Interactive) -->
  <nav
    id="nav-bar-sm"
    class="uk-navbar-container uk-navbar-transparent uk-padding"
    uk-navbar
  >
    <div class="uk-navbar-left">
      <a
        class="uk-navbar-toggle"
        uk-navbar-toggle-icon
        href="#offcanvas-slide"
        uk-toggle
      ></a>
    </div>
    <div class="uk-navbar-center">
      <div id="nav-title-sm" class="uk-navbar-center">
        <h2 class="logo-font">Reputable</h2>
      </div>
    </div>
    <div class="uk-navbar-right">
      <div id="nav-connect-sm">
        <button
          class="connect-btn uk-button uk-button-secondary uk-button-small"
          style="font-size: 0.5rem; background-color: #f89d35"
          @click="connectOnClick"
          :uk-tooltip="`title: ` + btnTooltip"
        >
          <span ref="conntectBtn" class="connect-btn-text-sm">{{ btnTextSmall }}</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Menu -->
  <div
    id="nav-menu"
    class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-height-viewport"
    uk-sticky="end: true"
  >
    <div style="padding-bottom: 30px"><h1 class="logo-font">Reputable</h1></div>
    <div>
      <ul class="uk-nav-default" uk-nav="multiple: true">
        <li>
          <RouterLink to="/"
            ><div class="uk-button uk-button-text">
              <span uk-icon="chevron-right"></span>Trending now
            </div></RouterLink
          >
        </li>
        <li>
          <router-link to="/explore"
            ><a class="uk-button uk-button-text"
              ><span uk-icon="chevron-right"></span>Explore</a
            ></router-link
          >
        </li>
        <li>
          <RouterLink to="/governance"
            ><div class="uk-button uk-button-text">
              <span uk-icon="chevron-right"></span>Governance
            </div></RouterLink
          >
        </li>
        <li class="uk-nav-divider"></li>
        <li class="uk-nav-header">Applications</li>
        <li>
          <a href="/repuloan" target="_blank"
            ><span class="uk-margin-small-right" uk-icon="icon: forward"></span>Credit
            Loan</a
          >
        </li>
        <li>
          <a href="/repumarket" target="_blank"
            ><span class="uk-margin-small-right" uk-icon="icon: forward"></span> Talent
            Marketplace</a
          >
        </li>
        <li class="uk-nav-divider"></li>
        <li class="uk-nav-header"></li>
        <div id="nav-connect">
          <button
            class="connect-btn uk-button uk-button-danger uk-button-small"
            @click="connectOnClick"
            :uk-tooltip="`title: ` + btnTooltip + `; pos: bottom`"
            style="background-color: #f89d35"
          >
            <span ref="connectBtn" class="connect-btn-text" style="color: white">{{ btnText }}</span>
          </button>
        </div>
        <div style="position: fixed; left:30px; bottom:30px;">
          <a href="http://d3lab.xyz/" style="padding-right: 5px;" target="_blank" uk-icon="icon: home; ratio: 1.2"></a>
          <a href="https://github.com/REPU-table" style="padding-right: 5px;" target="_blank" uk-icon="icon: github; ratio: 1.2"></a>
          <a href="https://www.youtube.com/c/D3LAB" target="_blank" uk-icon="icon: youtube; ratio: 1.2"></a>
        </div>
      </ul>
    </div>
  </div>

  <!-- Offcanvas Menu -->
  <div id="offcanvas-slide" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav uk-nav-default uk-text-large padding-top">
        <li class="menu-top" uk-toggle="#offcanvas-slide">
          <RouterLink to="/">Trending now</RouterLink>
        </li>
        <li class="menu-people" uk-toggle="#offcanvas-slide">
          <RouterLink to="/explore">Explore</RouterLink>
        </li>
        <li class="menu-govern" uk-toggle="#offcanvas-slide">
          <RouterLink to="/governance">Governance</RouterLink>
        </li>
        <li class="uk-nav-divider"></li>
        <li class="menu-application" uk-toggle="#offcanvas-slide">
          <RouterLink to="/repuloan" target="_blank"
            ><span class="uk-margin-small-right" uk-icon="icon: forward"></span>Credit
            Loan</RouterLink
          >
        </li>
        <li class="menu-application" uk-toggle="#offcanvas-slide">
          <RouterLink to="/repumarket" target="_blank"
            ><span class="uk-margin-small-right" uk-icon="icon: forward"></span>Talent
            Marketplace</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
}
.menu-application {
  font-size: 1rem;
}
</style>
