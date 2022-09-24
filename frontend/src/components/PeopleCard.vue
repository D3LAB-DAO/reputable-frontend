<script>
export default {
  setup() {
    const getFloatFixed = (value, fixed) => {
      return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
    };
    return { getFloatFixed };
  },
  props: {
    name: { type: String, default: "Carl" },
    price: { type: Number, default: 33.18 },
    priceHistory: { type: Array, default: [33.18, 33.5] },
    desc: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  data() {
    return {
      color: 0,
    };
  },
  methods: {
    getProfileUrl() {
      return new URL(`../profile/` + this.name + `_square.png`, import.meta.url).href;
    },
    getTokenName() {
      return this.name.substring(0, 3).toUpperCase();
    },
    getPriceDiff() {
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      if (diff > 0) return "▲" + this.getFloatFixed(Math.abs(diff), 4);
      else if (diff < 0) return "▼" + this.getFloatFixed(Math.abs(diff), 4);
      else return "-";
    },
    getPriceDiffRate() {
      if (this.price == 0) return "-";
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      var diffRate = diff / this.price;
      return this.getFloatFixed(diffRate, 4) + "%";
    },
    setColor() {
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      if (diff < 0) this.color = 0;
      /* red */ else this.color = 1; /* green */
    },
  },
  computed: {
    colorClass() {
      return "color" + this.color;
    },
    getTag() {
      return "people-modal-" + this.name;
    },
    getTarget() {
      return "target: #people-modal-" + this.name;
    },
  },
};
</script>
<template>
  {{ setColor() }}
  <div>
    <div class="people-card uk-card uk-card-default" :uk-toggle="getTarget" type="button">
      <div class="uk-card-badge uk-label uk-background-danger">HOT</div>
      <div class="uk-card-media-top">
        <img :src="getProfileUrl()" width="1800" height="1200" alt="" />
      </div>
      <div class="uk-padding uk-padding-remove-bottom align-left">
        <span uk-icon="heart"></span>
        <span class="token-name">{{ getTokenName() }}</span>
        <span class="token-fullname">{{ name }}</span>
        <br />
        <span class="token-price" :class="colorClass">{{ price }}</span>
        <span class="token-price-diff" :class="colorClass"
          >{{ getPriceDiff() }} ({{ getPriceDiffRate() }})</span
        >
      </div>
      <hr />
      <div class="uk-padding uk-padding-remove-top align-left" style="height: 100px;">
        <dl class="uk-description-list">
          <dt>Description</dt>
          <dd>{{ desc.substring(0, 60) + "..." }}</dd>
        </dl>
      </div>
    </div>
  </div>

  <!-- people-modal -->
  <div :id="getTag" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
      <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div
          class="uk-background-cover"
          :style="`background-image: url('` + getProfileUrl() + `')`"
          uk-height-viewport
        ></div>
        <div class="uk-padding-large">
          <h1>{{ name }}</h1>
          <p>{{ desc }}</p>
          <div id="people-button-group" class="uk-width-1-1 uk-button-group">
            <button class="uk-width-1-3 uk-button uk-button-danger">DEPOSIT</button>
            <button class="uk-width-1-3 uk-button uk-button-primary">WITHDRAW</button>
            <button class="uk-width-1-3 uk-button uk-button-secondary">CLAIM</button>
          </div>
          <div id="people-button-group-md" class="uk-width-1-1">
            <button class="uk-width-1-1 uk-button uk-button-danger">DEPOSIT</button>
            <button class="uk-width-1-1 uk-button uk-button-primary">WITHDRAW</button>
            <button class="uk-width-1-1 uk-button uk-button-secondary">CLAIM</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
