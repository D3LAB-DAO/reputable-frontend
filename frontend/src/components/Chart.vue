<script>
import { labels, options } from "../assets/js/chart.js";
export default {
  props: {
    history: { type: Array },
  },
  mounted() {
    const data_1 = {
      labels: labels,
      datasets: [
        {
          label: "rPSH",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
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
