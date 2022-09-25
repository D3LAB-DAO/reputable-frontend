import { _ as _export_sfc, M as Chart, o as openBlock, j as createElementBlock, l as createTextVNode, t as toDisplayString, k as createBaseVNode, m as normalizeClass, F as Fragment, q as pushScopeId, r as popScopeId, u as createVNode, x as resolveComponent, L as createBlock } from "./index.48046495.js";
import "https://code.jquery.com/jquery-3.4.1.js";
import "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js";
import "https://cdn.jsdelivr.net/npm/chart.js";
const GovernCard_vue_vue_type_style_index_0_scoped_14c54068_lang = "";
const _sfc_main$2 = {
  components: {
    Chart
  },
  setup() {
    const getFloatFixed = (value, fixed) => {
      return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
    };
    return { getFloatFixed };
  },
  props: {
    state: { type: Number, default: 0 },
    title: { type: String, default: "" },
    expiredate: { type: String, default: "" },
    remaindays: { type: Number, default: 0 },
    progress: { type: Number, default: 0 }
  },
  data() {
    return {
      color: 0
    };
  },
  methods: {
    setColor() {
      this.color = this.state;
    },
    getState() {
      if (this.state == 0)
        return "In Progress";
      else
        return "Executed";
    }
  },
  computed: {
    colorClass() {
      if (this.color == 0)
        return "uk-background-primary";
      else
        return "uk-background-secondary";
    },
    stateClass() {
      if (this.color == 1)
        return "done";
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-14c54068"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "uk-padding align-left" };
const _hoisted_2$1 = { class: "poll-name" };
const _hoisted_3$1 = ["value"];
const _hoisted_4$1 = { class: "poll-expire" };
const _hoisted_5$1 = { class: "poll-expire" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { "uk-icon": "clock" }, null, -1));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createTextVNode(toDisplayString($options.setColor()) + " ", 1),
    createBaseVNode("div", {
      class: normalizeClass(["chart-card uk-card uk-card-default uk-margin-top uk-margin-bottom", $options.stateClass])
    }, [
      createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: normalizeClass(["uk-card-badge uk-label", $options.colorClass])
        }, toDisplayString($options.getState()), 3),
        createBaseVNode("span", _hoisted_2$1, toDisplayString($props.title), 1),
        createBaseVNode("progress", {
          class: "uk-progress",
          value: $props.progress,
          max: "100"
        }, null, 8, _hoisted_3$1),
        createBaseVNode("span", _hoisted_4$1, toDisplayString($props.expiredate), 1),
        createBaseVNode("span", _hoisted_5$1, [
          _hoisted_6$1,
          createTextVNode(" " + toDisplayString($props.remaindays) + " Days", 1)
        ])
      ])
    ], 2)
  ], 64);
}
const GovernCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-14c54068"]]);
const _imports_0 = "/assets/mark.3bdbaea8.png";
const _sfc_main$1 = {
  components: {
    GovernCard
  }
};
const _hoisted_1 = { id: "page-govern" };
const _hoisted_2 = { class: "section" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", { class: "title-font section-title" }, " \u2003Governance\u2003 ", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-3xlarge inline-block" }, [
  /* @__PURE__ */ createBaseVNode("ul", {
    class: "uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s",
    "uk-sortable": "handle: .uk-card",
    "uk-grid": ""
  }, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "govern-token-card uk-card uk-card-default uk-card-body" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "align-left" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate" }, "REPU PRICE"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token-price" }, "$4.0129")
        ]),
        /* @__PURE__ */ createBaseVNode("hr", { class: "margin-y-small" }),
        /* @__PURE__ */ createBaseVNode("div", { class: "align-left" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate" }, "TOTAL SUPPLY"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token-price" }, "99,590,042")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "govern-token-card uk-card uk-card-default uk-card-body" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "govern-token-img",
          src: _imports_0,
          width: "60",
          height: "60",
          alt: "",
          style: { "border": "solid 1px" }
        }),
        /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-name" }, "Reputable (REPU)"),
        /* @__PURE__ */ createBaseVNode("span", { class: "uk-badge uk-background-secondary" }, "APR"),
        /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate padding-left-small" }, "40.3222 %"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("span", { class: "uk-badge uk-background-secondary" }, "Total Staked"),
        /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate padding-left-small" }, "433.6232K")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "govern-token-card uk-card uk-card-default uk-card-body" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "govern-token-img",
          src: _imports_0,
          width: "60",
          height: "60",
          alt: "",
          style: { "border": "solid 1px" }
        }),
        /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-name" }, "REPU-USDT LP"),
        /* @__PURE__ */ createBaseVNode("span", { class: "uk-badge uk-background-secondary" }, "APR"),
        /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate padding-left-small" }, "66.4983 %"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("span", { class: "uk-badge uk-background-secondary" }, "Total Staked"),
        /* @__PURE__ */ createBaseVNode("span", { class: "govern-token-rate padding-left-small" }, "2.6228M")
      ])
    ])
  ])
], -1);
const _hoisted_5 = { class: "uk-width-3xlarge inline-block" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "small-text" }, [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://www.flaticon.com/free-icons/bookmark",
      title: "bookmark icons"
    }, "Bookmark icons created by Rizki Ahmad Fauzi - Flaticon")
  ])
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GovernCard = resolveComponent("GovernCard");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_GovernCard, {
          state: 0,
          title: `Apply veREPU`,
          expiredate: `Estimated end time Sat, Oct 1, 2022, 1:42:01`,
          remaindays: 7,
          progress: 30
        }),
        createVNode(_component_GovernCard, {
          state: 1,
          title: `We need a Trending-now page`,
          expiredate: `Estimated end time Sat, Sep 24, 2022, 0:00:00`,
          remaindays: 0,
          progress: 90
        })
      ]),
      _hoisted_6
    ])
  ]);
}
const Governance = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = {
  __name: "Governanceview",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Governance);
    };
  }
};
export {
  _sfc_main as default
};
