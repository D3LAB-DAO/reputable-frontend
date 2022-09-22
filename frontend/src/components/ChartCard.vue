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
    data() {
        return {
          color: 0,
        };
    },
    methods: {
        getProfileUrl() {
            return new URL(`../profile/` + this.name + `_square.png`, import.meta.url).href
        },

        getTokenName() {
            this.name.substring(0,3).toUpperCase()
        },
        getPriceDiff() {
            var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
            if ( diff > 0 ) return '▲' + this.getFloatFixed(Math.abs(diff), 4);
            else if ( diff < 0 ) return '▼' + this.getFloatFixed(Math.abs(diff), 4);
            else return '-';
        },
        getPriceDiffRate() {
            if ( this.price == 0 ) return '-';
            var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
            var diffRate = diff / this.price;
            return this.getFloatFixed(diffRate, 4) + '%';
        },
        setGraphColor() {
          var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
          if ( diff < 0 ) this.color = 0; /* red */
          else this.color = 1; /* green */
        }
    },
    computed: {
  	    colorClass() {
    	    return 'color'+ this.color;
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
        <span class="token-price" :class="colorClass">{{ price }}</span>
        <span class="token-price-diff" :class="colorClass">{{ getPriceDiff() }} ({{ getPriceDiffRate() }})</span>
      </div>
      {{ setGraphColor() }}
      <Chart :history=priceHistory :color=color />
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

.color0 {
  color: rgb(255, 99, 132);
}

.color1 {
  color: rgb(83, 200, 132);
}
</style>
