<script>
import Supply from "./Supply.vue";
import Borrow from "./Borrow.vue";
export default {
  components: {
    Supply,
    Borrow
  },
};
</script>

<template>
  <div class="uk-width-1-1 uk-height-1-1">
    <div class="logo">RepuLoan</div>
    <div id="container">
      <div uk-grid>
        <div class="uk-width-1-2@m">
          <Supply />
        </div>
        <div class="uk-width-1-2@m">
          <Borrow />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.logo {
  font-family: "Righteous", cursive;
  font-size: 5rem;
  color: white;
  text-align: center;
  opacity: 0.7;
  padding-top: 20px;
}

#container {
    z-index: -1;
    margin: 50px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
