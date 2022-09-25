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

  var revealElements = document.getElementsByClassName("digit");
  for (var i = 0; i < revealElements.length; i++) {
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: -800, // start a little later
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
         <h5 class="quicksand-font-300" style="margin-top:100px;">
            <span class="quicksand-font-700">Reputable</span> makes it easy for users to
            create their own tokens.<br />
            Since all tokens have a same total supply and inflation rate,<br />
            the price becomes personal credit.<br />
            It is useful for designing credit-based apps such as credit loan.
          </h5>
        <RouterLink to="/"><button id="startbtn" class="uk-button uk-button-secondary">
            WebApp
          </button></RouterLink>
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
      <div class="full">
        <h3 class="margin-10 quicksand-font-700" style="display: block;">Applications</h3>
        <div id="reveal-elements">
          <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
            <div class="digit uk-padding">
              <div class="uk-card uk-card-hover uk-card-default uk-card-body">
                <h3 class="uk-card-title">Lending</h3>
                <div class="uk-card-body">
                <p>Reputable can be used for loan platform based on user's credit.
                  This is because the value of an individual's coin is represented by credit.
                  Users will try to increase their reputation for low-interest loans.
                </p>
                </div>
                <div class="uk-card-footer">
                  <a href="#" class="uk-button uk-button-text"><span uk-icon="chevron-right"></span> Go Webapp</a>
                </div>
              </div>
            </div>
            <div class="digit uk-padding">
              <div class="uk-card uk-card-hover uk-card-primary uk-card-body">
                <h3 class="uk-card-title">Talent Donation</h3>
                <div class="uk-card-body">
                <p>Talent Donation platform also can be one of the applications of Reputable.
                  You can hire someone with a high reputation, or you can make your own talent donation to increase the value of your coins.
                </p>
                </div>
                <div class="uk-card-footer">
                  <a href="#" class="uk-button uk-button-text"><span uk-icon="chevron-right"></span> Go Webapp</a>
                </div>
              </div>
            </div>
            <div class="digit uk-padding">
              <div class="uk-card uk-card-hover uk-card-secondary uk-card-body">
                <h3 class="uk-card-title">Etc.</h3>
                <div class="uk-card-body">
                <p>
                  Furthermore, Reputable can be applied to various services based on reputation.
                  There are many activities in the world that affect credit, and many services based on that credit.
                  Reputable can be extended to various applications for such reputation management.</p>
                </div>
                <div class="uk-card-footer">
                  <a href="#" class="uk-button uk-button-text"><span uk-icon="chevron-right"></span> You can make!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="panel four">
      <div class="full">
        <h3 class="margin-15 quicksand-font-700" style="display: block;">About Us<br/><br/>
        <a href="https://twitter.com/D3LAB_DAO" target="_blank" uk-icon="icon: twitter; ratio: 7"></a>
        <a href="https://github.com/REPU-table" target="_blank" uk-icon="icon: github; ratio: 7"></a>
        <a href="https://www.youtube.com/c/D3LAB" target="_blank" uk-icon="icon: youtube; ratio: 7"></a>
        <a href="mailto:d3lab.dao@gmail.com" target="_blank" uk-icon="icon: google; ratio: 7"></a>
        </h3>
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
.uk-card-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}
.uk-card-body {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
}
.margin-15 {
  margin-top: 15%;
}
.margin-10 {
  margin-top: 10%;
}
.imgbackground {
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;

  opacity: 0.8;
  background: url(https://github.com/REPU-table/reputable-frontend/blob/vuejs/frontend/src/img/background.jpg) no-repeat center center fixed;
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
