<script>
import {
  getRTokenContract,
  getRTokenTotalSupply,
  getDepositedRToken,
  getClaimableRToken,
  depositRToken,
  withdrawRToken,
  claimRToken,
  getRTokenContractAddr,
  approve,
  getAllowance,
} from "../assets/js/interface_request.js";
import { getDatabase, ref, set } from "firebase/database";

export default {
  data() {
    return {
      rTokenContractAddr: "",
      rTokenCotract: undefined,
      loaded: false,
      approved: false,
      totalSupply: 0,
      depositedValue: 0,
      claimableValue: 0,
      depositValue: 0,
      withdrawValue: 0,
      depositLoading: false,
      withdrawLoading: false,
      claimLoading: false,
    };
  },
  props: {
    address: { type: String, default: "" },
    name: { type: String, default: "" },
    tokenName: { type: String, default: "" },
    url: { type: String, default: "" },
    price: { type: Number, default: 0 },
    priceDiff: { type: String, default: "" },
    desc: { type: String, default: "" },
    color: { type: Number, default: 0 },
  },
  mounted() {
    this.initialConnectAndLoad();
  },
  methods: {
    initialConnectAndLoad: async function () {
      getRTokenContractAddr(this.address).then((addr) => {
        this.rTokenContractAddr = addr;
        getRTokenContract(this.rTokenContractAddr).then((res) => {
          this.rTokenCotract = res;
          this.loadInfo();
        });
      });
    },
    loadInfo: async function () {
      let res_totalSupply = await getRTokenTotalSupply(this.rTokenCotract);
      this.totalSupply = res_totalSupply;
      let res_depositedValue = await getDepositedRToken(this.rTokenCotract);
      this.depositedValue = res_depositedValue;
      let res_claimableValue = await getClaimableRToken(this.rTokenCotract);
      this.claimableValue = res_claimableValue;
      let res_allowance = await getAllowance(this.rTokenContractAddr, this.rTokenContractAddr);
      this.approved = res_allowance > 0;
      this.loaded = true;
      return true;
    },
    approveRTokenByButton: function (amount) {
      if (!this.loaded) return;
      this.depositLoading = true;
      approve(this.rTokenContractAddr).then((res) => {
        this.loadInfo().then((res) => {
          this.depositLoading = false;
        });
      });
    },
    depositRTokenByButton: function (amount) {
      if (!this.loaded) return;
      this.depositLoading = true;
      depositRToken(this.rTokenCotract, this.depositValue).then((res) => {
        this.loadInfo().then((res) => {
          this.depositLoading = false;
        });
      });
    },
    withdrawRTokenByButton: function () {
      if (!this.loaded) return;
      this.withdrawLoading = true;
      withdrawRToken(this.rTokenCotract, this.withdrawValue).then((res) => {
        this.loadInfo().then((res) => {
          this.withdrawLoading = false;
        });
      });
    },
    claimRTokenByButton: function () {
      if (!this.loaded) return;
      this.claimLoading = true;
      claimRToken(this.rTokenCotract).then((res) => {
        this.loadInfo().then((res) => {
          this.claimLoading = false;
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
  },
};
</script>

<template>
  <!-- people-modal -->
  <div :id="getTag" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
      <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div
          class="uk-background-cover"
          :style="`background-image: url('` + url + `')`"
          uk-height-viewport
        ></div>
        <div v-if="loaded" class="uk-padding-large">
          <h1>{{ name }}</h1>
          <p>{{ desc }}</p>

          <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid>
            <li>
              <div class="govern-token-card uk-card uk-card-default uk-card-body">
                <div class="align-left">
                  <span uk-icon="heart"></span>
                  <span class="token-name">{{ tokenName }}</span>
                  <span class="token-fullname">{{ name }}</span>
                  <br />
                  <span class="token-price" :class="colorClass">{{ price }}</span>
                  <span
                    class="token-price-diff"
                    :class="colorClass"
                    style="font-size: 0.7rem; padding-left: 0px"
                    >{{ priceDiff }}</span
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
                  <span class="token-price">{{ claimableValue / (10**18) }}</span>
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
              :disabled="!approved"
              :uk-tooltip="!approved ? `title: please approve first!` : ``"
            />
            <button
              v-if="!approved"
              @click="approveRTokenByButton"
              class="uk-button uk-button-danger uk-width-1-3 uk-button-large"
            >
              <div v-if="depositLoading" uk-spinner></div>
              <span v-else>APPROVE</span>
            </button>
            <button
              v-else
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
        <div v-else class="uk-padding-large uk-text-center">
          <span uk-spinner="ratio: 4.5"></span>
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
