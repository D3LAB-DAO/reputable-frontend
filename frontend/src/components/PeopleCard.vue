<script>
import PeopleModal from "./PeopleModal.vue"
export default {
  components: {
    PeopleModal
  },
  setup() {
    const getFloatFixed = (value, fixed) => {
      return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
    };
    return { getFloatFixed };
  },
  props: {
    address: { type: String, default: "" },
    name: { type: String, default: "" },
    url: { type: String, default: "" },
    price: { type: Number, default: 0 },
    priceHistory: { type: Array, default: [] },
    desc: { type: String, default: "" },
    mine: { type: Boolean, default: false },
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
    getTarget() {
      return "target: #people-modal-" + this.name;
    },
  },
  mounted () {
    this.setColor();
  }
};
</script>
<template>
  <div>
    {{ address }}
    <div class="people-card uk-card uk-card-default" :uk-toggle="getTarget" type="button">
      <div v-if="mine" class="uk-card-badge uk-label uk-background-mint">MY</div>
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
  <PeopleModal :address=address :name=name :tokenName=getTokenName() :url=getProfileUrl() :price=price :priceDiff="getPriceDiff()+'('+getPriceDiffRate()+`)`" :desc=desc :color=this.color />
</template>

<style scoped>
.govern-token-card {
  margin-bottom: 20px;
  padding-top: 30px;
}
</style>
