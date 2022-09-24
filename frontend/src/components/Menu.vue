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
          @click="login2"
          uk-tooltip="title: Connect to metamask"
        >
          <span class="connect-btn-text-sm">→</span>
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
          <RouterLink to="/trending"
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
            @click="login2"
            uk-tooltip="title: Connect to metamask; pos: bottom"
            style="background-color: #f89d35"
          >
            <span class="connect-btn-text" style="color: white">Metamask →</span>
          </button>
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
          <RouterLink to="/trending">Trending now</RouterLink>
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
