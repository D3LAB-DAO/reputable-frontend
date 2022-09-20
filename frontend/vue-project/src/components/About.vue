<script setup>
import ScrollMagic from "scrollmagic";

$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%", // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    },
  });

  // build scene
  new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.1, // show, when scrolled 10% into view
    duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: -300, // move trigger to center of element
  })
    .setClassToggle("#reveal1", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  /*
  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
  */

  var revealElements = document.getElementsByClassName("digit");
  console.log(revealElements);
  for (var i = 0; i < revealElements.length; i++) {
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: -400, // start a little later
      triggerHook: 0.1,
    })
      .setClassToggle(revealElements[i], "visible") // add class toggle
      .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
      .addTo(controller);
  }
});
</script>

<template>
  <!-- Contents -->
  <div class="imgbackground"></div>
  <div id="particles-js"></div>
  <div class="full">
    <section class="panel one">
      <div class="full"><h1 class="cursive-font">&emsp;Reputable&emsp;</h1></div>
      <div class="full">
        <h1 class="cursive-font-bg">&emsp;Reputable &emsp;</h1>
        <RouterLink to="/top"
          ><button id="startbtn" class="uk-button uk-button-secondary">
            WebApp
          </button></RouterLink
        >
      </div>
    </section>
    <section class="panel two">
      <div class="full spacer s2"></div>
      <div id="trigger1" class="spacer s0 full"></div>
      <div id="reveal1" class="box2 blue full">
        <div class="full">
          <h5 class="quicksand-font-300 margin-15">
            <span class="quicksand-font-700">Reputable</span> makes it easy for users to
            create their own tokens.<br />
            Tokens may be used for various services.<br />
            Since all tokens have a common total supply and inflation rate,<br />
            the price becomes personal credit.<br />
            It is useful for designing credit-based apps such as dynamic returns.
          </h5>
        </div>
      </div>
      <div class="spacer s2"></div>
    </section>
    <section class="panel three">
      <div id="reveal-elements">
        <!--div class="full">
          <h3 class="cursive-font digit">1</h3>
          <h3 class="cursive-font digit">2</h3>
          <h3 class="cursive-font digit">3</h3>
          <h3 class="cursive-font digit">4</h3>
          <div class="uk-card uk-card-default uk-card-body uk-width-small digit">
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="uk-card uk-card-default uk-card-body uk-width-small digit">
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div-->
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
          <div class="digit uk-padding margin-15">
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">Default</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="digit uk-padding margin-15">
            <div class="uk-card uk-card-primary uk-card-body">
              <h3 class="uk-card-title">Primary</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="digit uk-padding margin-15">
            <div class="uk-card uk-card-secondary uk-card-body">
              <h3 class="uk-card-title">Secondary</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="panel four">
      <div class="full">
        <h1>
        <a href="https://twitter.com/D3LAB_DAO" target="_blank" uk-icon="icon: twitter; ratio: 7"></a>
        <a href="https://github.com/REPU-table" target="_blank" uk-icon="icon: github; ratio: 7"></a>
        <a href="https://www.youtube.com/c/D3LAB" target="_blank" uk-icon="icon: youtube; ratio: 7"></a>
        <a href="mailto:d3lab.dao@gmail.com" target="_blank" uk-icon="icon: google; ratio: 7"></a>
        </h1>
      </div>
    </section>
  </div>
</template>

<style scoped>
div.full {
  position: absolute;
  height: 100%;
  width: 100%;
  display: table;
}
#startbtn {
  display: block;
  text-align: center;
  left: 0;
  right: 0;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  margin-top: 200px;
  display: block;
  text-align: center;
  font-size: 10rem;
  color: #fff;
}
h3 {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 3rem;
  color: #fff;
}
h5 {
  display: block;
  text-align: center;
  font-size: 2rem;
  color: #fff;
}
.margin-15 {
  margin-top: 15%;
}
.imgbackground {
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;

  opacity: 0.8;
  background: url(src/img/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
/*
.imgbackground:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #002f4b, #a52007);
  opacity: 0.8;
}
*/
.cursive-font {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  opacity: 1;
}

.cursive-font-bg {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  color: white;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  opacity: 0.5;
}

.panel {
  height: 100%;
  width: 100%;
}

.one,
.four {
  background: #000000;
  opacity: 0.5;
}

.two {
  background: #c97d6f;
  opacity: 0.7;
}
.three {
  background: #002f4b;
  opacity: 0.7;
}

.panel.green {
  margin-bottom: 400px;
}

.box2 {
  color: white;
}

#reveal1 {
  opacity: 0;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#reveal1.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}

.digit {
  opacity: 0;
  -webkit-transform: translateX(-40px);
  -moz-transform: translateX(-40px);
  -ms-transform: translateX(-40px);
  -o-transform: translateX(-40px);
  transform: translateX(-40px);
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}
.digit.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
/*
.digit:nth-child(2) {
  margin-top: 50px;
}
.digit:nth-child(3) {
  margin-top: 100px;
}
.digit:nth-child(4) {
  margin-top: 150px;
}
.digit:nth-child(5) {
  margin-top: 200px;
}
*/

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
