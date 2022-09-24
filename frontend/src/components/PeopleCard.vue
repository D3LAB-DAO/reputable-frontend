<script>
export default {
  setup() {
    const getFloatFixed = (value, fixed) => {
      return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
    };
    return { getFloatFixed };
  },
  props: {
    name: { type: String, default: "" },
    url: { type: String, default: "" },
    price: { type: Number, default: 0 },
    priceHistory: { type: Array, default: [] },
    desc: { type: String, default: "" },
    depositValue: { type: Number, default: 0 },
    withdrawValue: { type: Number, default: 0 },
  },
  data() {
    return {
      color: 0,
    };
  },
  methods: {
    getProfileUrl() {
      if (this.url !== "") return this.url;
      return new URL(`../profile/` + this.name + `_square.png`, import.meta.url).href;
    },
    getTokenName() {
      return this.name.substring(0, 3).toUpperCase();
    },
    getPriceDiff() {
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      if (diff > 0) return "▲" + this.getFloatFixed(Math.abs(diff), 2);
      else if (diff < 0) return "▼" + this.getFloatFixed(Math.abs(diff), 2);
      else return "-";
    },
    getPriceDiffRate() {
      if (this.price == 0) return "-";
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      var diffRate = diff / this.price;
      return this.getFloatFixed(diffRate, 2) + "%";
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
      <div class="uk-padding uk-padding-remove-top align-left" style="height: 100px">
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

          <div
            class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m"
            uk-grid
          >
            <li>
              <div class="govern-token-card uk-card uk-card-default uk-card-body">
                <div class="align-left">
                  <span uk-icon="heart"></span>
                  <span class="token-name">{{ getTokenName() }}</span>
                  <span class="token-fullname">{{ name }}</span>
                  <br />
                  <span class="token-price" :class="colorClass">{{ price }}</span>
                  <span class="token-price-diff" :class="colorClass" style="font-size:0.7rem; padding-left: 0px;">{{ getPriceDiff() }} ({{ getPriceDiffRate() }})</span
                  >
                </div>
                <hr class="margin-y-small" />
                <div class="align-left">
                  <span class="govern-token-rate">Total Supply</span>
                  <br />
                  <span class="token-price">39,590,000</span>
                </div>
              </div>
            </li>
            <li>
              <div class="govern-token-card uk-card uk-card-default uk-card-body">
                <div class="align-left">
                  <span class="govern-token-rate">deposited REPU</span>
                  <br />
                  <span class="token-price">39,590,000</span>
                </div>
                <hr class="margin-y-small" />
                <div class="align-left">
                  <span class="govern-token-rate">claimable REPU</span>
                  <br />
                  <span class="token-price">39,590,000</span>
                </div>
              </div>
            </li>
          </div>

          <div class="uk-width-1-1 uk-button-group">
            <input
              class="uk-input uk-form-danger uk-width-2-3 uk-form-large"
              type="text"
              v-model="depositValue"
              placeholder="Value"
            />
            <button class="uk-button uk-button-danger uk-width-1-3 uk-button-large">
              DEPOSIT
            </button>
          </div>

          <div class="uk-margin uk-width-1-1 uk-button-group">
            <input
              class="uk-input uk-form-primary uk-width-2-3 uk-form-large"
              type="text"
              v-model="withdrawValue"
              placeholder="Value"
            />
            <button class="uk-button uk-button-primary uk-width-1-3 uk-button-large">
              WITHDRAW
            </button>
          </div>

          <div>
            <button class="uk-button uk-button-secondary uk-width-1-1 uk-button-large">
              CLAIM
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.govern-token-card {
  margin-bottom: 20px;
  padding-top: 30px;
}
</style>
