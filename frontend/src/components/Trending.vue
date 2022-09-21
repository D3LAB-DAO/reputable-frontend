<template>
  <div id="page-top">
    <div class="section">
      <h3 class="title-font section-title">&emsp;Top 5&emsp;</h3>
      <div class="uk-width-2xlarge inline-block">
        <div
          class="chart-card uk-card uk-card-default margin-30 uk-margin-remove-bottom padding-bottom"
        >
          <div class="uk-padding align-left">
            <img
              class="token-chart-img"
              src="src/profile/square_1.png"
              width="60"
              height="60"
              alt=""
            />
            <span uk-icon="heart"></span>
            <span class="token-name">TAL</span>
            <span class="token-fullname">Talia</span>
            <br />
            <span class="token-price">45.96</span>
            <span class="token-price-diff uk-text-danger">▼ 3.62 (-7.30%)</span>
          </div>
          <div class="chart">
            <canvas id="chart-1"></canvas>
          </div>
        </div>
      </div>
      <div class="uk-width-2xlarge inline-block">
        <div
          class="chart-card uk-card uk-card-default margin-30 uk-margin-remove-bottom padding-bottom"
        >
          <div class="uk-padding align-left">
            <img
              class="token-chart-img"
              src="src/profile/square_3.png"
              width="60"
              height="60"
              alt=""
            />
            <span uk-icon="heart"></span>
            <span class="token-name">CAR</span>
            <span class="token-fullname">Carl</span>
            <br />
            <span class="token-price">33.18</span>
            <span class="token-price-diff text-green">▲ 20.58 (+157.98%)</span>
          </div>
          <div class="chart">
            <canvas id="chart-2"></canvas>
          </div>
        </div>
      </div>
      <div class="uk-width-2xlarge inline-block">
        <div
          class="chart-card uk-card uk-card-default margin-30 uk-margin-remove-bottom padding-bottom"
        >
          <div class="uk-padding align-left">
            <img
              class="token-chart-img"
              src="src/profile/square_5.png"
              width="60"
              height="60"
              alt=""
            />
            <span uk-icon="heart"></span>
            <span class="token-name">SIM</span>
            <span class="token-fullname">Simona</span>
            <br />
            <span class="token-price">25.89</span>
            <span class="token-price-diff uk-text-danger">▼ 4.76 (-15.53%)</span>
          </div>
          <div class="chart">
            <canvas id="chart-3"></canvas>
          </div>
        </div>
      </div>
      <div class="uk-width-2xlarge inline-block">
        <div
          class="chart-card uk-card uk-card-default margin-30 uk-margin-remove-bottom padding-bottom"
        >
          <div class="uk-padding align-left">
            <img
              class="token-chart-img"
              src="src/profile/square_6.png"
              width="60"
              height="60"
              alt=""
            />
            <span uk-icon="heart"></span>
            <span class="token-name">GLO</span>
            <span class="token-fullname">Gloria</span>
            <br />
            <span class="token-price">10.48</span>
            <span class="token-price-diff text-green">▲ 1.52 (+12.68%)</span>
          </div>
          <div class="chart">
            <canvas id="chart-4"></canvas>
          </div>
        </div>
      </div>
      <div class="uk-width-2xlarge inline-block">
        <div class="chart-card uk-card uk-card-default margin-30 padding-bottom">
          <div class="uk-padding align-left">
            <img
              class="token-chart-img"
              src="src/profile/square_7.png"
              width="60"
              height="60"
              alt=""
            />
            <span uk-icon="heart"></span>
            <span class="token-name">VIC</span>
            <span class="token-fullname">Victor</span>
            <br />
            <span class="token-price">3.05</span>
            <span class="token-price-diff uk-text-danger">▼ 9.95 (-76.53%)</span>
          </div>
          <div class="chart">
            <canvas id="chart-5"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUpdated } from 'vue'
import "../assets/js/chart.js"
onUpdated(() => {
  afterUpdate();
})
</script>

<style scoped>
.chart-card {
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
}

.chart-card:hover {
  transform: scale(1.08, 1.08);
  opacity: 1.0;
}
</style>