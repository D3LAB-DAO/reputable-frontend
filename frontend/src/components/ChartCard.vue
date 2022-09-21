<script>
import Chart from './Chart.vue'
export default {
    components: {
        Chart
    },
    setup() {
        const getFloatFixed = (value, fixed) => {
            return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
        };
        return { getFloatFixed }
    },
    props: {
        name: { type: String, default: "" },
        price: { type: Number, default: 0 },
        priceHistory: { type: Array, default: [] }
    },
    /*
    data() {
        return {
        name: 'Talia',
        price: 45.96,
        priceHistory: [35, 39, 37, 36, 40, 38, 33, 35, 37, 35, 34, 32, 40, 39, 37, 33, 32, 20, 33, 35, 34, 35, 34, 32,
                35, 39, 37, 33, 32, 31, 33, 35, 27, 25, 24, 22, 21, 20, 21, 30, 22, 20, 21, 18, 19, 20, 22, 21]
        }
    },
    */
    methods: {
        getProfileUrl() {
            return new URL(`../profile/` + this.name + `_square.png`, import.meta.url).href
        },

        getTokenName() {
            this.name.substring(0,3).toUpperCase()
        },
        getPriceDiff() {
            if ( this.priceHistory.length < 2 ) return '-';
            var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[this.priceHistory.length - 2];
            if ( diff > 0 ) return '▲' + this.getFloatFixed(Math.abs(diff), 4);
            else if ( diff < 0 ) return '▼' + this.getFloatFixed(Math.abs(diff), 4);
            else return '-';
        },
        getPriceDiffRate() {
            if ( this.priceHistory.length < 2 || this.price == 0 ) return '-';
            var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[this.priceHistory.length - 2];
            var diffRate = diff / this.price;
            return this.getFloatFixed(diffRate, 4) + '%';
        }
    }
}
</script>

<template>
  <div class="uk-width-2xlarge inline-block">
    <div
      class="chart-card uk-card uk-card-default margin-30 uk-margin-remove-bottom padding-bottom"
    >
      <div class="uk-padding align-left">
        <img
          class="token-chart-img"
          :src="getProfileUrl()"
          width="60"
          height="60"
          alt=""
        />
        <span uk-icon="heart"></span>
        <span class="token-name">{{ getTokenName() }}</span>
        <span class="token-fullname">{{ name }}</span>
        <br />
        <span class="token-price">{{ price }}</span>
        <span class="token-price-diff uk-text-danger">{{ getPriceDiff() }} ({{ getPriceDiffRate() }})</span>
      </div>
      <Chart :history=priceHistory />
    </div>
  </div>
</template>

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
  opacity: 1;
}
</style>
