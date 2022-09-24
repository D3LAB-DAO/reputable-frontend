<script>
import Supply from "./Supply.vue";
export default {
  components: {
    Supply,
  },
};
</script>

<template>
  <div class="uk-text-center uk-width-1-1 uk-height-1-1">
    <div class="uk-width-1-1">
    <div class="logo">Repu Market</div>
    </div>
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-center">
        <div class="menu">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">Learn</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active"><a href="#">All</a></li>
                <li><a href="#">Graphic</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Writing</a></li>
                <li><a href="#">Development</a></li>
              </ul>
            </div>
          </li>
          <li class="uk-active"><a href="#">Community</a></li>
          <li><a href="#">My Page</a></li>
        </ul>
        </div>
      </div>
    </nav>
    <div class="uk-width-1-1" style="text-align: center;">
      <div id="container" class="uk-width-3xlarge" style="display: inline-block">
        <Supply />
        <Supply />
        <Supply />
        <Supply />
        <Supply />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

.logo {
  display: inline-block;
  font-family: 'Fredoka One', cursive;
  font-size: 2rem;
  color: rgb(72, 73, 58);
  margin-top: 40px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 70px;
  padding: 10px;
}

li > a {
  font-family: 'Fredoka One', cursive;

  font-size: 1.2rem;
}
</style>
