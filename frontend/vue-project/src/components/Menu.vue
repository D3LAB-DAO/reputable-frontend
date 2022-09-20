<template>
  <!-- Menu -->
  <nav id="nav-menu" class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li class="menu-top"><RouterLink to="/top">Top</RouterLink></li>
        <li class="menu-top"><RouterLink to="/people">People</RouterLink></li>
        <li class="menu-top"><RouterLink to="/lend">Lend</RouterLink></li>
        <li class="menu-top"><RouterLink to="/mint">Mint</RouterLink></li>
        <li class="menu-top"><RouterLink to="/govern">Govern</RouterLink></li>
      </ul>
    </div>
  </nav>

  <!-- Offcanvas Menu -->
  <div id="offcanvas-slide" class="w-100 title-font" uk-offcanvas>
    <div class="uk-offcanvas-bar w-100 no-transition">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav uk-nav-default uk-text-large padding-top">
        <li class="menu-top" uk-toggle="#offcanvas-slide">
          <RouterLink to="/top">Top</RouterLink>
        </li>
        <li class="menu-people" uk-toggle="#offcanvas-slide">
          <RouterLink to="/people">People</RouterLink>
        </li>
        <li class="menu-lend" uk-toggle="#offcanvas-slide">
          <RouterLink to="/lend">Lend</RouterLink>
        </li>
        <li class="menu-mint" uk-toggle="#offcanvas-slide">
          <RouterLink to="/mint">Mint</RouterLink>
        </li>
        <li class="menu-govern" uk-toggle="#offcanvas-slide">
          <RouterLink to="/govern">Govern</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
