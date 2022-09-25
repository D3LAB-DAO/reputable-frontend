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
} from "../assets/js/interface_request.js";
import { getDatabase, ref, set } from "firebase/database";

export default {
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
  props: {
    name: { type: String, default: "" },
    url: { type: String, default: "" },
    price: { type: Number, default: 0 },
    priceHistory: { type: Array, default: [] },
    desc: { type: String, default: "" },
  },
  methods: {
    getProfileUrl() {
      if (this.url !== "") return this.url;
      return new URL(`../profile/` + this.name + `_square.png`, import.meta.url).href;
    },
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
      this.depositLoading = true;
      depositRToken(this.depositValue).then((res) => {
        console.log("depositRToken done! : ", res);
        this.depositLoading = false;
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
      this.loadInfo().then((res1) => {
        console.log("loadinginfo done");
      });
    },
    claimRTokenByButton: function () {
      this.claimLoading = true;
      claimRToken().then((res) => {
        console.log("claimRToken done! : ", res);
        this.claimLoading = false;
      });
    },
  },
};
</script>

<template>
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
