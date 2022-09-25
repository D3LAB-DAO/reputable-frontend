import { _ as _imports_0$1, a as _imports_0$2 } from "./steve_square.d3c447b4.js";
import { _ as _export_sfc, o as openBlock, j as createElementBlock, q as pushScopeId, r as popScopeId, k as createBaseVNode, u as createVNode, x as resolveComponent, l as createTextVNode, F as Fragment } from "./index.97e51113.js";
import "https://code.jquery.com/jquery-3.4.1.js";
import "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js";
import "https://cdn.jsdelivr.net/npm/chart.js";
const _imports_1 = "/assets/talia_square.9832c523.png";
const _imports_0 = "/assets/nina_square.2e782524.png";
const _imports_4 = "/assets/zoe_square.13e97a9d.png";
const Supply_vue_vue_type_style_index_0_scoped_98ee12d0_lang = "";
const _sfc_main$3 = {};
const _withScopeId$3 = (n) => (pushScopeId("data-v-98ee12d0"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { id: "page-lend" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "section" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "Supply"),
  /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1 inline-block" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1 inline-block" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "uk-card uk-card-default" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "uk-padding align-left" }, [
          /* @__PURE__ */ createBaseVNode("span", {
            class: "token-icon",
            "uk-icon": "heart"
          }),
          /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "YOUR SUPPLIES"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("div", { class: "uk-overflow-auto" }, [
            /* @__PURE__ */ createBaseVNode("table", {
              id: "lend-table",
              class: "uk-table uk-table-divider uk-table-hover"
            }, [
              /* @__PURE__ */ createBaseVNode("thead", null, [
                /* @__PURE__ */ createBaseVNode("tr", null, [
                  /* @__PURE__ */ createBaseVNode("th", { class: "uk-table-shrink" }),
                  /* @__PURE__ */ createBaseVNode("th", { class: "uk-table-shrink" }, "Asset (APY)"),
                  /* @__PURE__ */ createBaseVNode("th", null, "Balance"),
                  /* @__PURE__ */ createBaseVNode("th", null, "Colleteral")
                ])
              ]),
              /* @__PURE__ */ createBaseVNode("tbody", { class: "align-right" }, [
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_1,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Talia"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-primary" }, "+7.37%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.8500"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$34.7159")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("label", { class: "switch" }, [
                      /* @__PURE__ */ createBaseVNode("input", {
                        type: "checkbox",
                        checked: ""
                      }),
                      /* @__PURE__ */ createBaseVNode("span", { class: "slider" })
                    ])
                  ])
                ]),
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_0$1,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Carl"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-primary" }, "+3.37%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "1.6325"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$39.5782")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("label", { class: "switch" }, [
                      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
                      /* @__PURE__ */ createBaseVNode("span", { class: "slider" })
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1 inline-block" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "uk-card uk-card-default" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "uk-padding" }, [
          /* @__PURE__ */ createBaseVNode("div", { class: "uk-text-left" }, [
            /* @__PURE__ */ createBaseVNode("span", {
              class: "token-icon",
              "uk-icon": "heart"
            }),
            /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "ASSETS TO SUPPLY")
          ]),
          /* @__PURE__ */ createBaseVNode("div", { class: "uk-overflow-auto" }, [
            /* @__PURE__ */ createBaseVNode("table", {
              id: "lend-table",
              class: "uk-table uk-table-divider uk-table-hover"
            }, [
              /* @__PURE__ */ createBaseVNode("thead", null, [
                /* @__PURE__ */ createBaseVNode("tr", null, [
                  /* @__PURE__ */ createBaseVNode("th", { class: "uk-table-shrink" }),
                  /* @__PURE__ */ createBaseVNode("th", { class: "uk-table-shrink" }, "Asset (APY)"),
                  /* @__PURE__ */ createBaseVNode("th", null, "Balance"),
                  /* @__PURE__ */ createBaseVNode("th", null, "Colleteral")
                ])
              ]),
              /* @__PURE__ */ createBaseVNode("tbody", { class: "align-right" }, [
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_0,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Nina"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-primary" }, "+2.12%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0000"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0000")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("label", { class: "switch" }, [
                      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
                      /* @__PURE__ */ createBaseVNode("span", { class: "slider" })
                    ])
                  ])
                ]),
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_0$2,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Steve"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-primary" }, "+0.05%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0001"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0026")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("label", { class: "switch" }, [
                      /* @__PURE__ */ createBaseVNode("input", {
                        type: "checkbox",
                        checked: ""
                      }),
                      /* @__PURE__ */ createBaseVNode("span", { class: "slider" })
                    ])
                  ])
                ]),
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_4,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Zoe"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-primary" }, "+5.88%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0000"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0000")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("label", { class: "switch" }, [
                      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
                      /* @__PURE__ */ createBaseVNode("span", { class: "slider" })
                    ])
                  ])
                ])
              ])
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("div", {
            class: "uk-width-1-1",
            style: { "display": "flex" }
          }, [
            /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-5-6 inline-block" }, [
              /* @__PURE__ */ createBaseVNode("form", { class: "uk-width-1-1 uk-search uk-search-default" }, [
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
            /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-6 inline-block" }, [
              /* @__PURE__ */ createBaseVNode("button", {
                class: "uk-button uk-button-default",
                style: { "padding-right": "20px", "padding-left": "20px" }
              }, "ADD")
            ])
          ])
        ])
      ])
    ])
  ])
], -1));
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$2);
}
const Supply = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-98ee12d0"]]);
const Borrow_vue_vue_type_style_index_0_scoped_d95e18eb_lang = "";
const _sfc_main$2 = {};
const _withScopeId$2 = (n) => (pushScopeId("data-v-d95e18eb"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { id: "page-lend" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "section" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "Borrow"),
  /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1 inline-block" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1 inline-block" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "uk-card uk-card-default" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "uk-padding align-left" }, [
          /* @__PURE__ */ createBaseVNode("span", {
            class: "token-icon",
            "uk-icon": "heart"
          }),
          /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "YOUR BORROWS"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("div", { class: "uk-overflow-auto" }, [
            /* @__PURE__ */ createBaseVNode("table", {
              id: "lend-table",
              class: "uk-table uk-table-divider uk-table-hover"
            }, [
              /* @__PURE__ */ createBaseVNode("thead", null, [
                /* @__PURE__ */ createBaseVNode("tr", null, [
                  /* @__PURE__ */ createBaseVNode("th", { class: "uk-table-shrink" }),
                  /* @__PURE__ */ createBaseVNode("th", null, "Asset (APY)"),
                  /* @__PURE__ */ createBaseVNode("th", null, "Balance")
                ])
              ]),
              /* @__PURE__ */ createBaseVNode("tbody", { class: "align-right" }, [
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_0,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Nina"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-danger" }, "-1.91%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "2.7898"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$44.5765")
                  ])
                ])
              ])
            ]),
            /* @__PURE__ */ createBaseVNode("hr"),
            /* @__PURE__ */ createBaseVNode("span", { class: "borrow-text" }, "Borrow Limit"),
            /* @__PURE__ */ createBaseVNode("span", { class: "uk-align-right borrow-text" }, "75%"),
            /* @__PURE__ */ createBaseVNode("div", { class: "gray-bar margin-top-10" }, [
              /* @__PURE__ */ createBaseVNode("div", {
                class: "primary-bar",
                style: { "height": "20px", "width": "75%" }
              })
            ])
          ])
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-1 inline-block" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "uk-card uk-card-default" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "uk-padding" }, [
          /* @__PURE__ */ createBaseVNode("div", { class: "uk-text-left" }, [
            /* @__PURE__ */ createBaseVNode("span", {
              class: "token-icon",
              "uk-icon": "heart"
            }),
            /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "ASSETS TO BORROW")
          ]),
          /* @__PURE__ */ createBaseVNode("div", { class: "uk-overflow-auto" }, [
            /* @__PURE__ */ createBaseVNode("table", {
              id: "lend-table",
              class: "uk-table uk-table-divider uk-table-hover"
            }, [
              /* @__PURE__ */ createBaseVNode("thead", null, [
                /* @__PURE__ */ createBaseVNode("tr", null, [
                  /* @__PURE__ */ createBaseVNode("th", { class: "uk-table-shrink" }),
                  /* @__PURE__ */ createBaseVNode("th", null, "Asset (APY)"),
                  /* @__PURE__ */ createBaseVNode("th", null, "Balance")
                ])
              ]),
              /* @__PURE__ */ createBaseVNode("tbody", { class: "align-right" }, [
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_1,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Talia"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-danger" }, "-6.63%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0000"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0000")
                  ])
                ]),
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_0$1,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Carl"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-danger" }, "-3.03%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0000"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0000")
                  ])
                ]),
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_0$2,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Steve"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-danger" }, "-0.05%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0000"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0000")
                  ])
                ]),
                /* @__PURE__ */ createBaseVNode("tr", {
                  "uk-toggle": "target: #lend-modal-1",
                  type: "button"
                }, [
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("img", {
                      class: "uk-preserve-width uk-border-circle",
                      src: _imports_4,
                      width: "40",
                      height: "40",
                      alt: ""
                    })
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "Zoe"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-percent uk-text-danger" }, "-5.29%")
                  ]),
                  /* @__PURE__ */ createBaseVNode("td", null, [
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-name" }, "0.0000"),
                    /* @__PURE__ */ createBaseVNode("br"),
                    /* @__PURE__ */ createBaseVNode("span", { class: "token-fullname" }, "$0.0000")
                  ])
                ])
              ])
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("div", {
            class: "uk-width-1-1",
            style: { "display": "flex" }
          }, [
            /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-5-6 inline-block" }, [
              /* @__PURE__ */ createBaseVNode("form", { class: "uk-width-1-1 uk-search uk-search-default" }, [
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
            /* @__PURE__ */ createBaseVNode("div", { class: "uk-width-1-6 inline-block" }, [
              /* @__PURE__ */ createBaseVNode("button", {
                class: "uk-button uk-button-default",
                style: { "padding-right": "20px", "padding-left": "20px" }
              }, " ADD ")
            ])
          ])
        ])
      ])
    ])
  ])
], -1));
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _hoisted_3$1);
}
const Borrow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-d95e18eb"]]);
const Dashboard_vue_vue_type_style_index_0_scoped_8fb2bbe1_lang = "";
const _sfc_main$1 = {
  components: {
    Supply,
    Borrow
  }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-8fb2bbe1"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "uk-text-center uk-width-1-1 uk-height-1-1" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "logo" }, [
  /* @__PURE__ */ createTextVNode("Repu"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("Loan")
], -1));
const _hoisted_3 = { id: "container" };
const _hoisted_4 = { "uk-grid": "" };
const _hoisted_5 = { class: "uk-width-1-2@m" };
const _hoisted_6 = { class: "uk-width-1-2@m" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Supply = resolveComponent("Supply");
  const _component_Borrow = resolveComponent("Borrow");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_Supply)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_Borrow)
        ])
      ])
    ])
  ]);
}
const RepuLoan$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-8fb2bbe1"]]);
const RepuLoan_vue_vue_type_style_index_0_scoped_2093d6f6_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2093d6f6"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "imgbackground" }, null, -1));
const _sfc_main = {
  __name: "RepuLoan",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createVNode(RepuLoan$1)
      ], 64);
    };
  }
};
const RepuLoan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2093d6f6"]]);
export {
  RepuLoan as default
};
