<script>
import { labels, options } from "../assets/js/chart.js";
export default {
  props: {
    history: { type: Array },
    color: { type: Number }
  },
  mounted() {
    let chartColor = "rgb(255, 99, 132)"; // default
    if ( this.color == 1 ) chartColor = "rgb(83, 200, 132)";

    const data_1 = {
      labels: labels,
      datasets: [
        {
          label: "rPSH",
          backgroundColor: chartColor,
          borderColor: chartColor,
          data: this.history,
        },
      ],
    };
    const config_1 = {
      type: "line",
      data: data_1,
      options: options,
    };
    const chart_1 = new Chart(this.$refs.chart, config_1);
  },
};
</script>

<template>
  <div class="chart">
    <canvas ref="chart" id="chart-1"></canvas>
  </div>
</template>

<style scoped>
.chart {
  height: 100px;
}
</style>
