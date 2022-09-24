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
        state: { type: Number, default: 0 }, /* 0: In Progress, 1: Done */
        title: { type: String, default: "" },
        expiredate: { type: String, default: "" },
        remaindays: { type: Number, default: 0 },
        progress: { type: Number, default: 0 }
    },
    data() {
      return {
        color: 0,
      };
    },
    methods: {
      setColor() {
        this.color = this.state;
      },
      getState() {
        if ( this.state == 0 ) return "In Progress";
        else return "Done";
      },
    },
    computed: {
      colorClass() {
        if ( this.color == 0 ) return "uk-background-primary";
        else return "uk-background-secondary";
      },
      stateClass() {
        if ( this.color == 1 ) return "done"
      }
    }
}
</script>

<template>
{{ setColor() }}
  <div class="chart-card uk-card uk-card-default uk-margin-top uk-margin-bottom" :class="stateClass">
    <div class="uk-padding align-left">
      <div class="uk-card-badge uk-label" :class="colorClass">{{ getState() }}</div>
      <span class="poll-name">{{ title }}</span>
      <progress class="uk-progress" :value="progress" max="100"></progress>
      <span class="poll-expire">{{ expiredate }}</span>
      <span class="poll-expire"><span uk-icon="clock"></span> {{ remaindays }} Days</span>
    </div>
  </div>
</template>

<style scoped>
.poll-name {
  display: inline-block;
  font-weight: 600;
  font-size: 1.2rem;
}
.poll-expire {
  padding-top: 10px;
  display: block;
  font-weight: 200;
  color: gray;
  font-size: 0.8rem;
}
.done {
    -webkit-filter: grayscale(1);
}
</style>
