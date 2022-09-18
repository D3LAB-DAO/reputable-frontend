<template>
  <!-- Menu -->
  <nav id="nav-menu" class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li class="menu-top"><a onclick="movePageOnClick(1)">Top</a></li>
        <li class="menu-people"><a onclick="movePageOnClick(2)">People</a></li>
        <li class="menu-lend"><a onclick="movePageOnClick(3)">Lend</a></li>
        <li class="menu-mint"><a onclick="movePageOnClick(4)">Mint</a></li>
        <li class="menu-govern"><a onclick="movePageOnClick(5)">Govern</a></li>
      </ul>
    </div>
  </nav>

  <!-- Offcanvas Menu -->
  <div id="offcanvas-slide" class="w-100 title-font" uk-offcanvas>
    <div class="uk-offcanvas-bar w-100 no-transition">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav uk-nav-default uk-text-large padding-top">
        <li class="menu-top" uk-toggle="#offcanvas-slide">
          <a onclick="movePageOnClick(1)">Top</a>
        </li>
        <li class="menu-people" uk-toggle="#offcanvas-slide">
          <a onclick="movePageOnClick(2)">People</a>
        </li>
        <li class="menu-lend" uk-toggle="#offcanvas-slide">
          <a onclick="movePageOnClick(3)">Lend</a>
        </li>
        <li class="menu-mint" uk-toggle="#offcanvas-slide">
          <a onclick="movePageOnClick(4)">Mint</a>
        </li>
        <li class="menu-govern" uk-toggle="#offcanvas-slide">
          <a onclick="movePageOnClick(5)">Govern</a>
        </li>
      </ul>
    </div>
  </div>
</template>
