import { _ as _export_sfc, g as getRTokenContractAddr, a as getRTokenContract, b as getRTokenTotalSupply, c as getDepositedRToken, d as getClaimableRToken, e as getAllowance, f as approve, h as depositRToken, w as withdrawRToken, i as claimRToken, o as openBlock, j as createElementBlock, k as createBaseVNode, n as normalizeStyle, l as createTextVNode, t as toDisplayString, m as normalizeClass, p as withDirectives, v as vModelText, q as pushScopeId, r as popScopeId, s as createCommentVNode, u as createVNode, F as Fragment, x as resolveComponent, y as createRToken, z as getDatabase, A as set, B as ref, C as getAccount, D as withModifiers, E as onValue, G as query, H as limitToFirst, I as startAfter, J as orderByKey, K as renderList, L as createBlock } from "./index.48046495.js";
import "https://code.jquery.com/jquery-3.4.1.js";
import "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js";
import "https://cdn.jsdelivr.net/npm/chart.js";
const PeopleModal_vue_vue_type_style_index_0_scoped_e7a95a11_lang = "";
const _sfc_main$4 = {
  data() {
    return {
      rTokenContractAddr: "",
      rTokenCotract: void 0,
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
      lastUpdated: "",
      interval: null
    };
  },
  props: {
    address: { type: String, default: "" },
    name: { type: String, default: "" },
    url: { type: String, default: "" },
    price: { type: Number, default: 0 },
    priceDiff: { type: String, default: "" },
    desc: { type: String, default: "" },
    color: { type: Number, default: 0 }
  },
  mounted() {
    this.initialConnectAndLoad();
  },
  beforeDestroy() {
  },
  methods: {
    initialConnectAndLoad: async function() {
      getRTokenContractAddr(this.address).then((addr) => {
        this.rTokenContractAddr = addr;
        getRTokenContract(this.rTokenContractAddr).then((res) => {
          this.rTokenCotract = res;
          this.loadInfo();
        });
      });
    },
    checkOpen: function() {
      let el = this.$refs.peopleModal;
      return el.classList.contains("uk-open");
    },
    loadInfo: async function() {
      let res_totalSupply = await getRTokenTotalSupply(this.rTokenCotract);
      this.totalSupply = res_totalSupply;
      let res_depositedValue = await getDepositedRToken(this.rTokenCotract);
      this.depositedValue = res_depositedValue;
      let res_claimableValue = await getClaimableRToken(this.rTokenCotract);
      this.claimableValue = res_claimableValue;
      let res_allowance = await getAllowance(
        this.rTokenContractAddr,
        this.rTokenContractAddr
      );
      this.approved = res_allowance > 0;
      this.loaded = true;
      let today = new Date();
      this.lastUpdated = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + " " + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
      return true;
    },
    approveRTokenByButton: function(amount) {
      if (!this.loaded)
        return;
      this.depositLoading = true;
      approve(this.rTokenContractAddr).then((res) => {
        this.loadInfo().then((res2) => {
          this.depositLoading = false;
        });
      });
    },
    depositRTokenByButton: function(amount) {
      if (!this.loaded)
        return;
      this.depositLoading = true;
      depositRToken(this.rTokenCotract, this.depositValue).then((res) => {
        this.loadInfo().then((res2) => {
          this.depositLoading = false;
        });
      });
    },
    withdrawRTokenByButton: function() {
      if (!this.loaded)
        return;
      this.withdrawLoading = true;
      withdrawRToken(this.rTokenCotract, this.withdrawValue).then((res) => {
        this.loadInfo().then((res2) => {
          this.withdrawLoading = false;
        });
      });
    },
    claimRTokenByButton: function() {
      if (!this.loaded)
        return;
      this.claimLoading = true;
      claimRToken(this.rTokenCotract).then((res) => {
        this.loadInfo().then((res2) => {
          this.claimLoading = false;
        });
      });
    }
  },
  computed: {
    colorClass() {
      return "color" + this.color;
    },
    getTag() {
      return "people-modal-" + this.name;
    }
  }
};
const _withScopeId$2 = (n) => (pushScopeId("data-v-e7a95a11"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["id"];
const _hoisted_2$3 = { class: "uk-modal-dialog" };
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("button", {
  class: "uk-modal-close-full uk-close-large",
  type: "button",
  "uk-close": ""
}, null, -1));
const _hoisted_4$3 = {
  class: "uk-grid-collapse uk-child-width-1-2@s uk-flex-middle",
  "uk-grid": ""
};
const _hoisted_5$3 = {
  key: 0,
  class: "uk-padding-large"
};
const _hoisted_6$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { "uk-icon": "clock" }, null, -1));
const _hoisted_7$3 = {
  class: "uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m",
  "uk-grid": ""
};
const _hoisted_8$3 = { class: "govern-token-card uk-card uk-card-default uk-card-body" };
const _hoisted_9$3 = { class: "align-left" };
const _hoisted_10$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "token-icon",
  "uk-icon": "heart"
}, null, -1));
const _hoisted_11$3 = { class: "token-name" };
const _hoisted_12$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("hr", { class: "margin-y-small" }, null, -1));
const _hoisted_14$1 = { class: "align-left" };
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate" }, "Total Supply", -1));
const _hoisted_16$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_17$1 = { class: "token-price" };
const _hoisted_18$1 = { class: "govern-token-card uk-card uk-card-default uk-card-body" };
const _hoisted_19$1 = { class: "align-left" };
const _hoisted_20$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate" }, "deposited REPU", -1));
const _hoisted_21$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_22$1 = { class: "token-price" };
const _hoisted_23$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("hr", { class: "margin-y-small" }, null, -1));
const _hoisted_24$1 = { class: "align-left" };
const _hoisted_25 = { class: "govern-token-rate" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_27 = { class: "token-price" };
const _hoisted_28 = { class: "uk-width-1-1 uk-button-group" };
const _hoisted_29 = ["disabled", "uk-tooltip"];
const _hoisted_30 = {
  key: 0,
  "uk-spinner": ""
};
const _hoisted_31 = { key: 1 };
const _hoisted_32 = {
  key: 0,
  "uk-spinner": ""
};
const _hoisted_33 = { key: 1 };
const _hoisted_34 = { class: "uk-margin uk-width-1-1 uk-button-group" };
const _hoisted_35 = {
  key: 0,
  "uk-spinner": ""
};
const _hoisted_36 = { key: 1 };
const _hoisted_37 = {
  key: 0,
  "uk-spinner": ""
};
const _hoisted_38 = { key: 1 };
const _hoisted_39 = {
  key: 1,
  class: "uk-padding-large uk-text-center"
};
const _hoisted_40 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { "uk-spinner": "ratio: 4.5" }, null, -1));
const _hoisted_41 = [
  _hoisted_40
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "peopleModal",
    id: $options.getTag,
    class: "uk-modal-full",
    "uk-modal": ""
  }, [
    createBaseVNode("div", _hoisted_2$3, [
      _hoisted_3$3,
      createBaseVNode("div", _hoisted_4$3, [
        createBaseVNode("div", {
          class: "uk-background-cover",
          style: normalizeStyle(`background-image: url('` + $props.url + `')`),
          "uk-height-viewport": ""
        }, null, 4),
        $data.loaded ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
          createBaseVNode("h1", null, [
            createTextVNode(toDisplayString($props.name) + " ", 1),
            createBaseVNode("span", {
              onClick: _cache[0] || (_cache[0] = (...args) => $options.loadInfo && $options.loadInfo(...args)),
              style: { "color": "gray", "font-size": "0.8rem", "display": "inline-block", "cursor": "pointer" },
              "uk-tooltip": "Refresh"
            }, [
              _hoisted_6$3,
              createTextVNode(" Last updated : " + toDisplayString($data.lastUpdated), 1)
            ])
          ]),
          createBaseVNode("p", null, toDisplayString($props.desc), 1),
          createBaseVNode("div", _hoisted_7$3, [
            createBaseVNode("li", null, [
              createBaseVNode("div", _hoisted_8$3, [
                createBaseVNode("div", _hoisted_9$3, [
                  _hoisted_10$3,
                  createBaseVNode("span", _hoisted_11$3, toDisplayString($props.name), 1),
                  _hoisted_12$3,
                  createBaseVNode("span", {
                    class: normalizeClass(["token-price", $options.colorClass])
                  }, toDisplayString($props.price), 3),
                  createBaseVNode("span", {
                    class: normalizeClass(["token-price-diff", $options.colorClass]),
                    style: { "font-size": "0.7rem", "padding-left": "0px" }
                  }, toDisplayString($props.priceDiff), 3)
                ]),
                _hoisted_13$1,
                createBaseVNode("div", _hoisted_14$1, [
                  _hoisted_15$1,
                  _hoisted_16$1,
                  createBaseVNode("span", _hoisted_17$1, toDisplayString($data.totalSupply), 1)
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("div", _hoisted_18$1, [
                createBaseVNode("div", _hoisted_19$1, [
                  _hoisted_20$1,
                  _hoisted_21$1,
                  createBaseVNode("span", _hoisted_22$1, toDisplayString($data.depositedValue), 1)
                ]),
                _hoisted_23$1,
                createBaseVNode("div", _hoisted_24$1, [
                  createBaseVNode("span", _hoisted_25, "claimable " + toDisplayString($props.name), 1),
                  _hoisted_26,
                  createBaseVNode("span", _hoisted_27, toDisplayString($data.claimableValue), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            withDirectives(createBaseVNode("input", {
              class: "uk-input uk-form-danger uk-width-2-3 uk-form-large",
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.depositValue = $event),
              placeholder: "Value",
              disabled: !$data.approved,
              "uk-tooltip": !$data.approved ? `title: please approve first!` : ``
            }, null, 8, _hoisted_29), [
              [vModelText, $data.depositValue]
            ]),
            !$data.approved ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: _cache[2] || (_cache[2] = (...args) => $options.approveRTokenByButton && $options.approveRTokenByButton(...args)),
              class: "uk-button uk-button-danger uk-width-1-3 uk-button-large"
            }, [
              $data.depositLoading ? (openBlock(), createElementBlock("div", _hoisted_30)) : (openBlock(), createElementBlock("span", _hoisted_31, "APPROVE"))
            ])) : (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[3] || (_cache[3] = (...args) => $options.depositRTokenByButton && $options.depositRTokenByButton(...args)),
              class: "uk-button uk-button-danger uk-width-1-3 uk-button-large"
            }, [
              $data.depositLoading ? (openBlock(), createElementBlock("div", _hoisted_32)) : (openBlock(), createElementBlock("span", _hoisted_33, "DEPOSIT"))
            ]))
          ]),
          createBaseVNode("div", _hoisted_34, [
            withDirectives(createBaseVNode("input", {
              class: "uk-input uk-form-primary uk-width-2-3 uk-form-large",
              type: "text",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.withdrawValue = $event),
              placeholder: "Value"
            }, null, 512), [
              [vModelText, $data.withdrawValue]
            ]),
            createBaseVNode("button", {
              onClick: _cache[5] || (_cache[5] = (...args) => $options.withdrawRTokenByButton && $options.withdrawRTokenByButton(...args)),
              class: "uk-button uk-button-primary uk-width-1-3 uk-button-large"
            }, [
              $data.withdrawLoading ? (openBlock(), createElementBlock("div", _hoisted_35)) : (openBlock(), createElementBlock("span", _hoisted_36, "WITHDRAW"))
            ])
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              onClick: _cache[6] || (_cache[6] = (...args) => $options.claimRTokenByButton && $options.claimRTokenByButton(...args)),
              class: "uk-button uk-button-secondary uk-width-1-1 uk-button-large"
            }, [
              $data.claimLoading ? (openBlock(), createElementBlock("div", _hoisted_37)) : (openBlock(), createElementBlock("span", _hoisted_38, "CLAIM"))
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_39, _hoisted_41))
      ])
    ])
  ], 8, _hoisted_1$3);
}
const PeopleModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-e7a95a11"]]);
const PeopleCard_vue_vue_type_style_index_0_scoped_ce771beb_lang = "";
const _sfc_main$3 = {
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
    mine: { type: Boolean, default: false }
  },
  data() {
    return {
      color: 0
    };
  },
  methods: {
    getProfileUrl() {
      if (this.url !== "")
        return this.url;
      return new URL(`../profile/` + this.name + `_square.png`, import.meta.url).href;
    },
    getPriceDiff() {
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      if (diff > 0)
        return "\u25B2" + this.getFloatFixed(Math.abs(diff), 2);
      else if (diff < 0)
        return "\u25BC" + this.getFloatFixed(Math.abs(diff), 2);
      else
        return "-";
    },
    getPriceDiffRate() {
      if (this.price == 0)
        return "-";
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      var diffRate = diff / this.price;
      return this.getFloatFixed(diffRate, 2) + "%";
    },
    setColor() {
      var diff = this.priceHistory[this.priceHistory.length - 1] - this.priceHistory[0];
      if (diff < 0)
        this.color = 0;
      else
        this.color = 1;
    }
  },
  computed: {
    colorClass() {
      return "color" + this.color;
    },
    getTarget() {
      return "target: #people-modal-" + this.name;
    }
  },
  mounted() {
    this.setColor();
  }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-ce771beb"), n = n(), popScopeId(), n);
const _hoisted_1$2 = ["uk-toggle"];
const _hoisted_2$2 = {
  key: 0,
  class: "uk-card-badge uk-label uk-background-mint"
};
const _hoisted_3$2 = { class: "uk-card-media-top" };
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = { class: "uk-padding uk-padding-remove-bottom align-left" };
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "token-icon",
  "uk-icon": "heart"
}, null, -1));
const _hoisted_7$2 = { class: "token-name" };
const _hoisted_8$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
const _hoisted_10$2 = {
  class: "uk-padding uk-padding-remove-top align-left",
  style: { "height": "100px" }
};
const _hoisted_11$2 = { class: "uk-description-list" };
const _hoisted_12$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("dt", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "bold" }, "Description")
], -1));
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PeopleModal = resolveComponent("PeopleModal");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", null, [
      createBaseVNode("div", {
        class: "people-card uk-card uk-card-default",
        "uk-toggle": $options.getTarget,
        type: "button"
      }, [
        $props.mine ? (openBlock(), createElementBlock("div", _hoisted_2$2, "MY")) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("img", {
            src: $options.getProfileUrl(),
            width: "1800",
            height: "1200",
            alt: ""
          }, null, 8, _hoisted_4$2)
        ]),
        createBaseVNode("div", _hoisted_5$2, [
          _hoisted_6$2,
          createBaseVNode("span", _hoisted_7$2, toDisplayString($props.name), 1),
          _hoisted_8$2,
          createBaseVNode("span", {
            class: normalizeClass(["token-price", $options.colorClass])
          }, toDisplayString($props.price), 3),
          createBaseVNode("span", {
            class: normalizeClass(["token-price-diff", $options.colorClass])
          }, toDisplayString($options.getPriceDiff()) + " (" + toDisplayString($options.getPriceDiffRate()) + ")", 3)
        ]),
        _hoisted_9$2,
        createBaseVNode("div", _hoisted_10$2, [
          createBaseVNode("dl", _hoisted_11$2, [
            _hoisted_12$2,
            createBaseVNode("dd", null, toDisplayString($props.desc.substring(0, 60) + "..."), 1)
          ])
        ])
      ], 8, _hoisted_1$2)
    ]),
    createVNode(_component_PeopleModal, {
      address: $props.address,
      name: $props.name,
      url: $options.getProfileUrl(),
      price: $props.price,
      priceDiff: $options.getPriceDiff() + "(" + $options.getPriceDiffRate() + `)`,
      desc: $props.desc,
      color: this.color
    }, null, 8, ["address", "name", "url", "price", "priceDiff", "desc", "color"])
  ], 64);
}
const PeopleCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-ce771beb"]]);
const MintModal_vue_vue_type_style_index_0_scoped_4d643312_lang = "";
const _sfc_main$2 = {
  data() {
    return {
      name: "",
      url: "",
      desc: "",
      loading: false
    };
  },
  methods: {
    contractMint: function(symbol) {
      this.loading = true;
      createRToken(symbol).then((receipt) => {
        let createRTokenContractAddr = receipt.events.RTokenCreate.returnValues[1];
        console.log("created RToken Address=", createRTokenContractAddr);
        console.log("Write To Firebase! : ", this.name, this.url, this.desc);
        const db = getDatabase();
        set(ref(db, "users/" + getAccount()), {
          name: this.name,
          url: this.url,
          desc: this.desc
        });
        this.$refs.modalref.remove();
      });
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-4d643312"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  ref: "modalref",
  id: "modal-center",
  class: "uk-flex-top",
  "uk-modal": ""
};
const _hoisted_2$1 = { class: "uk-modal-dialog uk-modal-body uk-margin-auto-vertical" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("button", {
  class: "uk-modal-close-default",
  type: "button",
  "uk-close": ""
}, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "title-font section-title" }, "\u2003Mint\u2003", -1));
const _hoisted_5$1 = { class: "section" };
const _hoisted_6$1 = { class: "uk-width-3xlarge inline-block" };
const _hoisted_7$1 = ["src"];
const _hoisted_8$1 = { class: "uk-margin" };
const _hoisted_9$1 = { class: "uk-margin" };
const _hoisted_10$1 = { class: "uk-button uk-button-success uk-button-large" };
const _hoisted_11$1 = {
  key: 0,
  "uk-spinner": ""
};
const _hoisted_12$1 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _hoisted_3$1,
      _hoisted_4$1,
      createBaseVNode("div", _hoisted_5$1, [
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("img", {
            class: "uk-width-medium uk-padding",
            src: $data.url
          }, null, 8, _hoisted_7$1),
          createBaseVNode("form", {
            onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.contractMint && $options.contractMint(...args), ["prevent"]))
          }, [
            createBaseVNode("div", null, [
              withDirectives(createBaseVNode("input", {
                class: "uk-input uk-form-success uk-form-width-large uk-form-large",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.url = $event),
                placeholder: "\u270F\uFE0F Image Url (Optional)"
              }, null, 512), [
                [vModelText, $data.url]
              ])
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              withDirectives(createBaseVNode("input", {
                class: "uk-input uk-form-success uk-form-width-large uk-form-large",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.desc = $event),
                placeholder: "\u270F\uFE0F Description (Optional)"
              }, null, 512), [
                [vModelText, $data.desc]
              ])
            ]),
            createBaseVNode("div", _hoisted_9$1, [
              withDirectives(createBaseVNode("input", {
                class: "uk-input uk-form-success uk-form-width-medium uk-form-large",
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.name = $event),
                placeholder: "\u270F\uFE0F Name*"
              }, null, 512), [
                [vModelText, $data.name]
              ]),
              createBaseVNode("button", _hoisted_10$1, [
                $data.loading ? (openBlock(), createElementBlock("div", _hoisted_11$1)) : (openBlock(), createElementBlock("span", _hoisted_12$1, "MINT!"))
              ])
            ])
          ], 32)
        ])
      ])
    ])
  ], 512);
}
const MintModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-4d643312"]]);
const _sfc_main$1 = {
  components: {
    PeopleCard,
    MintModal
  },
  setup() {
  },
  data() {
    return {
      users: {},
      myTokenInfo: {},
      myAccountAddress: "",
      loading: false,
      lastId: "",
      seeMore: true,
      numOfElemInRow: 6,
      mine: false,
      testvalue: 0
    };
  },
  methods: {
    loadFromFirebase: function() {
      if (this.loading)
        return;
      const db = getDatabase();
      const refs_mine = ref(db, "users/" + getAccount());
      onValue(refs_mine, (snapshot_mine) => {
        const users_mine = snapshot_mine.val();
        if (users_mine) {
          this.mine = true;
          this.myTokenInfo = users_mine;
          this.myAccountAddress = getAccount();
        }
        const refs = query(
          ref(db, "users"),
          orderByKey(),
          limitToFirst(this.numOfElemInRow)
        );
        onValue(refs, (snapshot) => {
          const users_ref = snapshot.val();
          for (var id in users_ref) {
            this.lastId = id;
            if (id in this.users)
              continue;
            if (id === getAccount()) {
              this.mine = true;
              this.myTokenInfo = users_ref[id];
              continue;
            }
            this.users[id] = users_ref[id];
          }
          this.loading = true;
        });
      });
    },
    loadMore: function() {
      const db = getDatabase();
      const refs = query(
        ref(db, "users"),
        orderByKey(),
        startAfter(this.lastId),
        limitToFirst(this.numOfElemInRow)
      );
      onValue(refs, (snapshot) => {
        let count = 0;
        const users_ref = snapshot.val();
        for (var id in users_ref) {
          this.lastId = id;
          if (id === getAccount() || id in this.users)
            continue;
          this.users[id] = users_ref[id];
          count++;
        }
        if (count < this.numOfElemInRow)
          this.seeMore = false;
      });
    },
    getAccountName: function() {
      let account = getAccount();
      return account.substr(0, 8) + "...." + account.substr(account.length - 8, 8);
    }
  },
  mounted() {
    this.loadFromFirebase();
  }
};
const _hoisted_1 = { id: "page-people" };
const _hoisted_2 = { class: "section" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", { class: "title-font section-title" }, "\u2003Explore\u2003", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-3xlarge inline-block" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-2 uk-width-1-2@s padding-bottom-10-s inline-block" }, [
      /* @__PURE__ */ createBaseVNode("form", { class: "white-bg uk-width-1-1 uk-search uk-search-default" }, [
        /* @__PURE__ */ createBaseVNode("a", {
          href: "",
          "uk-search-icon": ""
        }),
        /* @__PURE__ */ createBaseVNode("input", {
          class: "uk-search-input",
          type: "search",
          placeholder: "Search"
        })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-2 uk-width-1-6@s inline-block" }, [
      /* @__PURE__ */ createBaseVNode("button", { class: "uk-button uk-button-default white-bg" }, "SEARCH")
    ])
  ])
], -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "uk-width-1-1" };
const _hoisted_7 = {
  class: "uk-child-width-1-2@s uk-child-width-1-3@l uk-padding",
  "uk-grid": ""
};
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  href: "#modal-center",
  "uk-toggle": ""
};
const _hoisted_10 = {
  class: "people-card uk-card uk-card-default",
  type: "button"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "uk-card-badge uk-label uk-background-mint" }, "MINT", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "uk-card-media-top" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/REPU-table/reputable-frontend/blob/vuejs/frontend/src/img/add.png",
    width: "900",
    height: "900",
    alt: ""
  })
], -1);
const _hoisted_13 = { class: "uk-padding uk-padding-remove-bottom align-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", {
  class: "token-icon",
  "uk-icon": "heart"
}, null, -1);
const _hoisted_15 = { class: "token-name" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "token-price" }, "0", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "token-price-diff" }, "-", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", {
  class: "uk-padding uk-padding-remove-top align-left",
  style: { "height": "100px" }
}, [
  /* @__PURE__ */ createBaseVNode("dl", { class: "uk-description-list" }, [
    /* @__PURE__ */ createBaseVNode("dt", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "bold" }, "Description")
    ]),
    /* @__PURE__ */ createBaseVNode("dd", null, "Mint your own token!")
  ])
], -1);
const _hoisted_21 = { key: 1 };
const _hoisted_22 = {
  key: 1,
  class: "uk-padding-large"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", { "uk-spinner": "ratio: 4.5" }, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PeopleCard = resolveComponent("PeopleCard");
  const _component_MintModal = resolveComponent("MintModal");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        _hoisted_3,
        _hoisted_4,
        $data.loading ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              !$data.mine ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createBaseVNode("div", null, [
                  createBaseVNode("a", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      _hoisted_11,
                      _hoisted_12,
                      createBaseVNode("div", _hoisted_13, [
                        _hoisted_14,
                        createBaseVNode("span", _hoisted_15, toDisplayString($options.getAccountName()), 1),
                        _hoisted_16,
                        _hoisted_17,
                        _hoisted_18
                      ]),
                      _hoisted_19,
                      _hoisted_20
                    ])
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_21, [
                createVNode(_component_PeopleCard, {
                  address: $data.myAccountAddress,
                  name: $data.myTokenInfo.name,
                  price: $data.myTokenInfo.price,
                  priceHistory: $data.myTokenInfo.priceHistory,
                  desc: $data.myTokenInfo.desc,
                  url: $data.myTokenInfo.url,
                  mine: true
                }, null, 8, ["address", "name", "price", "priceHistory", "desc", "url"])
              ])),
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.users, (user, key) => {
                return openBlock(), createElementBlock("div", null, [
                  createVNode(_component_PeopleCard, {
                    address: key,
                    name: user.name,
                    price: user.price,
                    priceHistory: user.priceHistory,
                    desc: user.desc,
                    url: user.url
                  }, null, 8, ["address", "name", "price", "priceHistory", "desc", "url"])
                ]);
              }), 256))
            ])
          ]),
          $data.seeMore ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "uk-button uk-button-large",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.loadMore && $options.loadMore(...args))
          }, " SEE MORE... ")) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("div", _hoisted_22, _hoisted_24))
      ])
    ]),
    createVNode(_component_MintModal)
  ], 64);
}
const Explore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = {
  __name: "ExploreView",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Explore);
    };
  }
};
export {
  _sfc_main as default
};
