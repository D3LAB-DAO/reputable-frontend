<script>
import {
  connectRTokenContract,
  getRTokenTotalSupply,
  getDepositedRToken,
  getClaimableRToken,
  depositRToken,
  withdrawRToken,
  claimRToken,
  getMyRTokenContractAddr,
  approve,
} from "../assets/js/interface_request.js";

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
    mine: { type: Boolean, default: false },
  },
  data() {
    return {
      color: 0,
      totalSupply: 0,
      depositedValue: 0,
      claimableValue: 0,
      depositValue: 0,
      withdrawValue: 0,
      depositLoading: false,
      withdrawLoading: false,
      claimLoading: false,
      loadingDone: false,
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

    // 1. loadInfo 으ㅣ 시점이 애매하긴 함. 모달 열때만 트리거  되면  좋겠는데
    // 뭔가 좀만 바뀌어도 매번 실행돼서... 흠
    // 2. 그거랑은 별개로 유독 claimableValue 구하는게 안되고 있고 (RPC Error)
    // 3. 마찬가지로 deposit, withdraw, claimable  도 트젝은 보내지긴 하는데 그 측정할수없다고 뜨면서 결국 수행이 안됨 ㅠ ㅠ..
    // ===> 연결만 다 되고나면 그냥 isLoaded 이런식의 prop 하나 둬가지고 그게 true 인 카드만 초기화 시키기... (= 현재 연결된 내 카드)
    loadInfo: function () {
      console.log("this.loadingDone", this.loadingDone);
      if (this.loadingDone) return;
      getMyRTokenContractAddr().then((addr) => {
        connectRTokenContract(addr).then((res2) => {
          getRTokenTotalSupply().then((res3) => {
            this.totalSupply = res3;
            getDepositedRToken().then((res4) => {
              this.depositedValue = res4;
              getClaimableRToken().then((res5) => {
                this.claimableValue = res5;
                this.loadingDone = true;
              });
            });
          });
        });
      });
    },
    depositRTokenByButton: function (amount) {
      console.log("this.loadingDone : ", this.loadingDone);
      if (this.loadingDone) return;
      getMyRTokenContractAddr().then((addr) => {
        connectRTokenContract(addr).then((res2) => {
          this.depositLoading = true;
          approve().then((res) => {
            depositRToken(this.depositValue).then((res) => {
              console.log("depositRToken done! : ", res);
              this.depositLoading = false;
            });
          });
        });
      });
    },
    withdrawRTokenByButton: function () {
      /*
      this.withdrawLoading = true;
      withdrawRToken(withdrawValue).then((res) => {
        console.log("withdrawRToken done! : ", res);
        this.withdrawLoading = false;
      });
      */
      console.log("this.loadingDone : ", this.loadingDone);
      if (this.loadingDone) return;
      getMyRTokenContractAddr().then((addr) => {
        connectRTokenContract(addr).then((res2) => {
          this.withdrawLoading = true;
          withdrawRToken(this.withdrawValue).then((res) => {
            console.log("withdrawRToken done! : ", res);
            this.withdrawLoading = false;
          });
        });
      });
    },
    claimRTokenByButton: function () {
      console.log("this.loadingDone : ", this.loadingDone);
      if (this.loadingDone) return;
      getMyRTokenContractAddr().then((addr) => {
        connectRTokenContract(addr).then((res2) => {
          this.claimLoading = true;
          claimRToken().then((res) => {
            console.log("claimRToken done! : ", res);
            this.claimLoading = false;
          });
        });
      });
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

          <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid>
            <li>
              <div class="govern-token-card uk-card uk-card-default uk-card-body">
                <div class="align-left">
                  <span uk-icon="heart"></span>
                  <span class="token-name">{{ getTokenName() }}</span>
                  <span class="token-fullname">{{ name }}</span>
                  <br />
                  <span class="token-price" :class="colorClass">{{ price }}</span>
                  <span
                    class="token-price-diff"
                    :class="colorClass"
                    style="font-size: 0.7rem; padding-left: 0px"
                    >{{ getPriceDiff() }} ({{ getPriceDiffRate() }})</span
                  >
                </div>
                <hr class="margin-y-small" />
                <div class="align-left">
                  <span class="govern-token-rate">Total Supply</span>
                  <br />
                  <span class="token-price">{{ totalSupply }}</span>
                </div>
              </div>
            </li>
            <li>
              <div class="govern-token-card uk-card uk-card-default uk-card-body">
                <div class="align-left">
                  <span class="govern-token-rate">deposited REPU</span>
                  <br />
                  <span class="token-price">{{ depositedValue }}</span>
                </div>
                <hr class="margin-y-small" />
                <div class="align-left">
                  <span class="govern-token-rate">claimable REPU</span>
                  <br />
                  <span class="token-price">{{ claimableValue }}</span>
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
            <button
              @click="depositRTokenByButton"
              class="uk-button uk-button-danger uk-width-1-3 uk-button-large"
            >
              <div v-if="depositLoading" uk-spinner></div>
              <span v-else>DEPOSIT</span>
            </button>
          </div>

          <div class="uk-margin uk-width-1-1 uk-button-group">
            <input
              class="uk-input uk-form-primary uk-width-2-3 uk-form-large"
              type="text"
              v-model="withdrawValue"
              placeholder="Value"
            />
            <button
              @click="withdrawRTokenByButton"
              class="uk-button uk-button-primary uk-width-1-3 uk-button-large"
            >
              <div v-if="withdrawLoading" uk-spinner></div>
              <span v-else>WITHDRAW</span>
            </button>
          </div>

          <div>
            <button
              @click="claimRTokenByButton"
              class="uk-button uk-button-secondary uk-width-1-1 uk-button-large"
            >
              <div v-if="claimLoading" uk-spinner></div>
              <span v-else>CLAIM</span>
            </button>
          </div>

          <div>
            <button
              @click="loadInfo"
              class="uk-button uk-button-secondary uk-width-1-1 uk-button-large"
            >
              <div v-if="claimLoading" uk-spinner></div>
              <span v-else>RELOAD</span>
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
