!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(
        require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),
        require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),
        require("core-js/modules/web.dom-collections.iterator.js"),
        require("@babel/runtime-corejs3/core-js-stable/instance/map"),
        require("@babel/runtime-corejs3/core-js-stable/array/is-array"),
        require("@babel/runtime-corejs3/core-js-stable/promise"),
        require("@babel/runtime-corejs3/core-js-stable/set-timeout"),
        require("@babel/runtime-corejs3/core-js-stable/instance/concat"),
        require("@babel/runtime-corejs3/core-js-stable/object/keys"),
        require("@babel/runtime-corejs3/core-js-stable/instance/reduce"),
        require("@babel/runtime-corejs3/core-js-stable/object/entries"),
        require("@babel/runtime-corejs3/core-js-stable/weak-map"),
        require("@babel/runtime-corejs3/core-js-stable/weak-set"),
        require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),
        require("neo4j-driver"),
        require("neo4j-driver-core"),
        require("vis-network/standalone"),
        require("@babel/runtime-corejs3/helpers/defineProperty"),
        require("deepmerge"),
        require("@babel/runtime-corejs3/core-js-stable/symbol")
      ))
    : "function" == typeof define && define.amd
    ? define(
        [
          "@babel/runtime-corejs3/helpers/classPrivateFieldSet",
          "@babel/runtime-corejs3/helpers/classPrivateFieldGet",
          "core-js/modules/web.dom-collections.iterator.js",
          "@babel/runtime-corejs3/core-js-stable/instance/map",
          "@babel/runtime-corejs3/core-js-stable/array/is-array",
          "@babel/runtime-corejs3/core-js-stable/promise",
          "@babel/runtime-corejs3/core-js-stable/set-timeout",
          "@babel/runtime-corejs3/core-js-stable/instance/concat",
          "@babel/runtime-corejs3/core-js-stable/object/keys",
          "@babel/runtime-corejs3/core-js-stable/instance/reduce",
          "@babel/runtime-corejs3/core-js-stable/object/entries",
          "@babel/runtime-corejs3/core-js-stable/weak-map",
          "@babel/runtime-corejs3/core-js-stable/weak-set",
          "@babel/runtime-corejs3/core-js-stable/instance/for-each",
          "neo4j-driver",
          "neo4j-driver-core",
          "vis-network/standalone",
          "@babel/runtime-corejs3/helpers/defineProperty",
          "deepmerge",
          "@babel/runtime-corejs3/core-js-stable/symbol",
        ],
        t
      )
    : "object" == typeof exports
    ? (exports.NeoVis = t(
        require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),
        require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),
        require("core-js/modules/web.dom-collections.iterator.js"),
        require("@babel/runtime-corejs3/core-js-stable/instance/map"),
        require("@babel/runtime-corejs3/core-js-stable/array/is-array"),
        require("@babel/runtime-corejs3/core-js-stable/promise"),
        require("@babel/runtime-corejs3/core-js-stable/set-timeout"),
        require("@babel/runtime-corejs3/core-js-stable/instance/concat"),
        require("@babel/runtime-corejs3/core-js-stable/object/keys"),
        require("@babel/runtime-corejs3/core-js-stable/instance/reduce"),
        require("@babel/runtime-corejs3/core-js-stable/object/entries"),
        require("@babel/runtime-corejs3/core-js-stable/weak-map"),
        require("@babel/runtime-corejs3/core-js-stable/weak-set"),
        require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),
        require("neo4j-driver"),
        require("neo4j-driver-core"),
        require("vis-network/standalone"),
        require("@babel/runtime-corejs3/helpers/defineProperty"),
        require("deepmerge"),
        require("@babel/runtime-corejs3/core-js-stable/symbol")
      ))
    : (e.NeoVis = t(
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0],
        e[void 0]
      ));
})(self, (e, t, i, o, r, s, n, l, a, c, d, u, h, b, v, p, f, j, m, w) =>
  (() => {
    "use strict";
    var g = {
        852: (e) => {
          e.exports = r;
        },
        848: (e) => {
          e.exports = l;
        },
        349: (e) => {
          e.exports = b;
        },
        820: (e) => {
          e.exports = o;
        },
        83: (e) => {
          e.exports = c;
        },
        209: (e) => {
          e.exports = d;
        },
        995: (e) => {
          e.exports = a;
        },
        723: (e) => {
          e.exports = s;
        },
        519: (e) => {
          e.exports = n;
        },
        581: (e) => {
          e.exports = w;
        },
        317: (e) => {
          e.exports = u;
        },
        483: (e) => {
          e.exports = h;
        },
        779: (e) => {
          e.exports = t;
        },
        642: (t) => {
          t.exports = e;
        },
        783: (e) => {
          e.exports = j;
        },
        416: (e) => {
          e.exports = i;
        },
        613: (e) => {
          e.exports = m;
        },
        949: (e) => {
          e.exports = v;
        },
        55: (e) => {
          e.exports = p;
        },
        365: (e) => {
          e.exports = f;
        },
      },
      y = {};
    function E(e) {
      var t = y[e];
      if (void 0 !== t) return t.exports;
      var i = (y[e] = { exports: {} });
      return g[e](i, i.exports, E), i.exports;
    }
    (E.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return E.d(t, { a: t }), t;
    }),
      (E.d = (e, t) => {
        for (var i in t)
          E.o(t, i) &&
            !E.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (E.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (E.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var C = {};
    return (
      (() => {
        E.r(C),
          E.d(C, {
            EventController: () => D,
            NEOVIS_ADVANCED_CONFIG: () => z,
            NEOVIS_DEFAULT_CONFIG: () => V,
            NeoVis: () => he,
            NeoVisEvents: () => F,
            default: () => _e,
            migrateFromOldConfig: () => Ie,
            objectToTitleHtml: () => ke,
            objectToTitleString: () => xe,
          });
        var e = E(642),
          t = E.n(e),
          i = E(779),
          o = E.n(i),
          r = (E(416), E(820)),
          s = E.n(r),
          n = E(852),
          l = E.n(n),
          a = E(723),
          c = E.n(a),
          d = E(519),
          u = E.n(d),
          h = E(848),
          b = E.n(h),
          v = E(995),
          p = E.n(v),
          f = E(83),
          j = E.n(f),
          m = E(209),
          w = E.n(m),
          g = E(317),
          y = E.n(g),
          q = E(483),
          N = E.n(q),
          k = E(349),
          x = E.n(k),
          I = E(949),
          _ = E.n(I),
          T = E(55),
          A = E(365);
        const S = {
          neo4j: {
            initialQuery:
              "MATCH (n) WHERE n.pagerank IS NOT NULL\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE n.pagerank IS NOT NULL AND n.pagerank IS NOT NULL AND m.community IS NOT NULL \n                        RETURN n, r, m;",
            neo4jUri: "bolt://localhost:7687",
            neo4jUser: "neo4j",
            neo4jPassword: "neo4j",
            driverConfig: {
              encrypted: "ENCRYPTION_OFF",
              trust: "TRUST_ALL_CERTIFICATES",
              maxConnectionPoolSize: 100,
              connectionAcquisitionTimeout: 1e4,
              disableLosslessIntegers: !0,
            },
          },
          visJs: {
            nodes: { font: { size: 26, strokeWidth: 7 }, scaling: {} },
            edges: { arrows: { to: { enabled: !1 } }, length: 200 },
            layout: {
              improvedLayout: !1,
              hierarchical: { enabled: !1, sortMethod: "hubsize" },
            },
            physics: {
              adaptiveTimestep: !0,
              stabilization: { iterations: 200, fit: !0 },
            },
          },
        };
        var O = E(783),
          P = E.n(O);
        let F;
        !(function (e) {
          (e.CompletionEvent = "completed"),
            (e.ClickNodeEvent = "clickNode"),
            (e.ClickEdgeEvent = "clickEdge"),
            (e.ErrorEvent = "error");
        })(F || (F = {}));
        class D {
          constructor() {
            P()(this, "_handlers", void 0),
              (this._handlers = {
                [F.CompletionEvent]: [],
                [F.ErrorEvent]: [],
                [F.ClickNodeEvent]: [],
                [F.ClickEdgeEvent]: [],
              });
          }
          register(e, t) {
            if (void 0 === this._handlers[e])
              throw new Error("Unknown event: " + e);
            this._handlers[e].push(t);
          }
          generateEvent(e, t) {
            if (void 0 === this._handlers[e])
              throw new Error("Unknown event: " + e);
            for (const i of this._handlers[e]) i(t);
          }
        }
        var R = E(613),
          U = E.n(R),
          L = E(581),
          M = E.n(L);
        const V = M()(),
          z = M()();
        function H(e, t) {
          W(e, t), t.add(e);
        }
        function G(e, t, i) {
          W(e, t), t.set(e, i);
        }
        function W(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object"
            );
        }
        function B(e, t, i) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          return i;
        }
        var J = new (y())(),
          Q = new (y())(),
          Y = new (y())(),
          K = new (y())(),
          X = new (y())(),
          Z = new (y())(),
          $ = new (y())(),
          ee = new (y())(),
          te = new (N())(),
          ie = new (N())(),
          oe = new (N())(),
          re = new (N())(),
          se = new (N())(),
          ne = new (N())(),
          le = new (N())(),
          ae = new (N())(),
          ce = new (N())(),
          de = new (N())(),
          ue = new (N())();
        class he {
          get nodes() {
            return o()(this, J).nodes;
          }
          get edges() {
            return o()(this, J).edges;
          }
          get _config() {
            return o()(this, K);
          }
          get network() {
            return o()(this, Q);
          }
          constructor(e) {
            H(this, ue),
              H(this, de),
              H(this, ce),
              H(this, ae),
              H(this, le),
              H(this, ne),
              H(this, se),
              H(this, re),
              H(this, oe),
              H(this, ie),
              H(this, te),
              G(this, J, {
                writable: !0,
                value: { nodes: new A.DataSet(), edges: new A.DataSet() },
              }),
              G(this, Q, { writable: !0, value: null }),
              G(this, Y, { writable: !0, value: new D() }),
              G(this, K, { writable: !0, value: void 0 }),
              G(this, X, { writable: !0, value: void 0 }),
              G(this, Z, { writable: !0, value: void 0 }),
              G(this, $, { writable: !0, value: void 0 }),
              G(this, ee, { writable: !0, value: void 0 }),
              B(this, ie, ve).call(this, e),
              B(this, te, be).call(this, e),
              B(this, te, be).call(this, S);
          }
          render(e) {
            let i = 0;
            const r = e || o()(this, $),
              n = o()(this, X).session(
                o()(this, Z) ? { database: o()(this, Z) } : void 0
              ),
              a = [];
            n.run(r, { limit: 30 }).subscribe({
              onNext: (e) => {
                i++,
                  B(this, te, be).call(this, "CLASS NAME"),
                  B(this, te, be).call(
                    this,
                    null == e ? void 0 : e.constructor.name
                  ),
                  B(this, te, be).call(this, e);
                const t = s()(e).call(e, async (e) => {
                  if (
                    (B(this, te, be).call(this, "Constructor:"),
                    B(this, te, be).call(
                      this,
                      null == e ? void 0 : e.constructor.name
                    ),
                    (0, T.isNode)(e))
                  ) {
                    const t = await B(this, de, Ee).call(this, e);
                    try {
                      o()(this, J).nodes.update(t);
                    } catch (e) {
                      B(this, te, be).call(this, e, "error");
                    }
                  } else if ((0, T.isRelationship)(e)) {
                    const t = await B(this, ue, Ce).call(this, e);
                    o()(this, J).edges.update(t);
                  } else if ((0, T.isPath)(e)) {
                    B(this, te, be).call(this, "PATH"),
                      B(this, te, be).call(this, e);
                    const t = await B(this, de, Ee).call(this, e.start),
                      i = await B(this, de, Ee).call(this, e.end);
                    o()(this, J).nodes.update(t), o()(this, J).nodes.update(i);
                    for (const t of e.segments)
                      o()(this, J).nodes.update(
                        await B(this, de, Ee).call(this, t.start)
                      ),
                        o()(this, J).nodes.update(
                          await B(this, de, Ee).call(this, t.end)
                        ),
                        o()(this, J).edges.update(
                          await B(this, ue, Ce).call(this, t.relationship)
                        );
                  } else if (l()(e))
                    for (const t of e)
                      if (
                        (B(this, te, be).call(
                          this,
                          "Array element constructor:"
                        ),
                        B(this, te, be).call(
                          this,
                          null == t ? void 0 : t.constructor.name
                        ),
                        (0, T.isNode)(t))
                      ) {
                        const e = await B(this, de, Ee).call(this, t);
                        o()(this, J).nodes.update(e);
                      } else if ((0, T.isRelationship)(t)) {
                        const e = await B(this, ue, Ce).call(this, t);
                        o()(this, J).edges.update(e);
                      }
                });
                a.push(c().all(t));
              },
              onCompleted: async () => {
                if ((await c().all(a), await n.close(), !o()(this, Q))) {
                  var e;
                  const i = U()(
                      S.visJs,
                      null !== (e = o()(this, K).visConfig) && void 0 !== e
                        ? e
                        : {}
                    ),
                    r = o()(this, ee);
                  B(this, te, be).call(this, o()(this, J).nodes),
                    B(this, te, be).call(this, o()(this, J).edges),
                    t()(this, Q, new A.Network(r, o()(this, J), i));
                }
                B(this, te, be).call(this, "completed"),
                  u()(() => {
                    o()(this, Q).stopSimulation();
                  }, 1e4),
                  o()(this, Y).generateEvent(F.CompletionEvent, {
                    recordCount: i,
                  });
                const r = this;
                o()(this, Q).on("click", function (e) {
                  if (e.nodes.length > 0) {
                    const t = this.getNodeAt(e.pointer.DOM);
                    o()(r, Y).generateEvent(F.ClickNodeEvent, {
                      nodeId: t,
                      node: o()(r, J).nodes.get(t),
                    });
                  } else if (e.edges.length > 0) {
                    const t = this.getEdgeAt(e.pointer.DOM);
                    o()(r, Y).generateEvent(F.ClickEdgeEvent, {
                      edgeId: t,
                      edge: o()(r, J).edges.get(t),
                    });
                  }
                });
              },
              onError: (e) => {
                B(this, te, be).call(this, e, "error"),
                  o()(this, Y).generateEvent(F.ErrorEvent, { error: e });
              },
            });
          }
          clearNetwork() {
            o()(this, J).nodes.clear(), o()(this, J).edges.clear();
          }
          registerOnEvent(e, t) {
            o()(this, Y).register(e, t);
          }
          reinit(e) {
            B(this, ie, ve).call(this, e), this.render();
          }
          reload() {
            this.clearNetwork(), this.render();
          }
          stabilize() {
            o()(this, Q).stopSimulation(),
              B(this, te, be).call(this, "Calling stopSimulation");
          }
          renderWithCypher(e) {
            this.clearNetwork(), t()(this, $, e), this.render();
          }
          updateWithCypher(e) {
            this.render(e);
          }
        }
        function be(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "log";
          ("log" !== t || o()(this, K).consoleDebug) && console[t](e);
        }
        function ve(e) {
          var i, o, r, s, n, l, a, c, d;
          let u, h;
          if (e.nonFlat && e.defaultLabelConfig) {
            if (((u = e.defaultLabelConfig), u[z]))
              throw new Error(
                "non flat config can't use NEOVIS_ADVANCED_CONFIG, read the doc to see how the config should look"
              );
            if (((h = e.defaultRelationshipsConfig), h[z]))
              throw new Error(
                "non flat config can't use NEOVIS_ADVANCED_CONFIG, read the doc to see how the config should look"
              );
          } else {
            var b, v;
            (u = null === (b = e.labels) || void 0 === b ? void 0 : b[V]),
              (h =
                null === (v = e.relationships) || void 0 === v ? void 0 : v[V]);
          }
          if (u)
            for (const t of p()(e.labels)) {
              var f, j, m, w, g;
              e = e.nonFlat
                ? {
                    ...e,
                    labels: {
                      ...e.labels,
                      [t]: U()(
                        u,
                        null === (f = e.labels) || void 0 === f ? void 0 : f[t]
                      ),
                    },
                  }
                : {
                    ...e,
                    labels: {
                      ...e.labels,
                      [t]: {
                        ...U()(
                          u,
                          null === (j = e.labels) || void 0 === j
                            ? void 0
                            : j[t]
                        ),
                        [z]: U()(
                          null !== (m = u[z]) && void 0 !== m ? m : {},
                          null !==
                            (w = (
                              null === (g = e.labels) || void 0 === g
                                ? void 0
                                : g[t]
                            )[z]) && void 0 !== w
                            ? w
                            : {}
                        ),
                      },
                    },
                  };
            }
          if (h)
            for (const t of p()(e.relationships)) {
              var y, E, C, q, N;
              e = e.nonFlat
                ? {
                    ...e,
                    relationships: {
                      ...e.relationships,
                      [t]: U()(
                        h,
                        null === (y = e.relationships) || void 0 === y
                          ? void 0
                          : y[t]
                      ),
                    },
                  }
                : {
                    ...e,
                    relationships: {
                      ...e.relationships,
                      [t]: {
                        ...U()(
                          h,
                          null === (E = e.relationships) || void 0 === E
                            ? void 0
                            : E[t]
                        ),
                        [z]: U()(
                          null !== (C = h[z]) && void 0 !== C ? C : {},
                          null !==
                            (q = (
                              null === (N = e.relationships) || void 0 === N
                                ? void 0
                                : N[t]
                            )[z]) && void 0 !== q
                            ? q
                            : {}
                        ),
                      },
                    },
                  };
            }
          t()(this, K, e),
            t()(
              this,
              X,
              e.neo4j instanceof _().driver
                ? e.neo4j
                : _().driver(
                    null !==
                      (i =
                        null === (o = e.neo4j) || void 0 === o
                          ? void 0
                          : o.serverUrl) && void 0 !== i
                      ? i
                      : S.neo4j.neo4jUri,
                    _().auth.basic(
                      null !==
                        (r =
                          null === (s = e.neo4j) || void 0 === s
                            ? void 0
                            : s.serverUser) && void 0 !== r
                        ? r
                        : S.neo4j.neo4jUser,
                      null !==
                        (n =
                          null === (l = e.neo4j) || void 0 === l
                            ? void 0
                            : l.serverPassword) && void 0 !== n
                        ? n
                        : S.neo4j.neo4jPassword
                    ),
                    U()(
                      S.neo4j.driverConfig,
                      null !==
                        (a =
                          null === (c = e.neo4j) || void 0 === c
                            ? void 0
                            : c.driverConfig) && void 0 !== a
                        ? a
                        : {}
                    )
                  )
            ),
            t()(this, Z, e.serverDatabase),
            t()(
              this,
              $,
              null !== (d = e.initialCypher) && void 0 !== d
                ? d
                : S.neo4j.initialQuery
            ),
            t()(this, ee, document.getElementById(e.containerId));
        }
        async function pe(e, t) {
          const i = o()(this, X).session(
              o()(this, Z) && { database: o()(this, Z) }
            ),
            r = [];
          try {
            const o = await i.readTransaction((i) => i.run(e, { id: t }));
            for (const e of o.records)
              x()(e).call(e, (e) => {
                r.push(e);
              });
          } finally {
            await i.close();
          }
          if (0 !== r.length) return 1 === r.length ? r.pop() : r;
        }
        function fe(e, t) {
          if ("function" == typeof e) return e(t);
          throw new Error("Function type property field must be a function");
        }
        function je(e, t) {
          if (e && "object" == typeof e)
            for (const i of p()(e)) {
              const o = e[i];
              o && "object" == typeof o
                ? (t[i] || (t[i] = {}), B(this, se, je).call(this, o, t[i]))
                : (t[i] = o);
            }
        }
        function me(e, t, i) {
          if (e && "object" == typeof e)
            for (const o of p()(e)) {
              const r = e[o];
              if ("object" == typeof r)
                t[o] || (t[o] = {}), B(this, ne, me).call(this, r, t[o], i);
              else {
                const r = e[o];
                t[o] = Ne(r, i);
              }
            }
        }
        function* we(e, t, i) {
          if (e && "object" == typeof e)
            for (const o of p()(e)) {
              const r = e[o];
              if (r && "object" == typeof r)
                t[o] || (t[o] = {}),
                  yield* B(this, le, we).call(this, r, t[o], i);
              else {
                const e = B(this, oe, pe).call(this, r, i);
                yield c()
                  .resolve(e)
                  .then((e) => {
                    t[o] = e;
                  });
              }
            }
        }
        function* ge(e, t, i) {
          if (e && "object" == typeof e)
            for (const o of p()(e)) {
              const r = e[o];
              if (r && "object" == typeof r)
                t[o] || (t[o] = {}),
                  yield* B(this, ae, ge).call(this, r, t[o], i);
              else {
                const e = B(this, re, fe).call(this, r, i);
                yield c()
                  .resolve(e)
                  .then((e) => {
                    t[o] = e;
                  });
              }
            }
        }
        async function ye(e, t, i, r) {
          if (!e) return;
          let s, n, l, a;
          if (o()(this, K).nonFlat) {
            if (void 0 !== e[z])
              throw new Error(
                "Advanced config and non flat config should not be together"
              );
            (s = e.static), (n = e.cypher), (l = e.property), (a = e.function);
          } else {
            const t = e[z];
            if (((l = e), void 0 !== t && "object" != typeof t))
              throw new Error(
                "Advanced config should be an object. See documentation for details."
              );
            (n = null == t ? void 0 : t.cypher),
              (s = null == t ? void 0 : t.static),
              (a = null == t ? void 0 : t.function);
          }
          B(this, ne, me).call(this, l, t, i),
            B(this, se, je).call(this, s, t),
            await c().all(B(this, le, we).call(this, n, t, r)),
            await c().all(B(this, ae, ge).call(this, a, t, i));
        }
        async function Ee(e) {
          var t, i, r, s, n, l, a;
          const c = {},
            d = e.labels[0],
            u =
              null !==
                (t =
                  null !==
                    (i =
                      null === (r = o()(this, K)) ||
                      void 0 === r ||
                      null === (s = r.labels) ||
                      void 0 === s
                        ? void 0
                        : s[d]) && void 0 !== i
                    ? i
                    : null === (n = o()(this, K)) || void 0 === n
                    ? void 0
                    : n.defaultLabelConfig) && void 0 !== t
                ? t
                : null === (l = o()(this, K)) ||
                  void 0 === l ||
                  null === (a = l.labels) ||
                  void 0 === a
                ? void 0
                : a[V];
          return (
            (c.id = (0, T.isInt)(e.identity) ? e.identity.toInt() : e.identity),
            (c.raw = e),
            await B(this, ce, ye).call(this, u, c, e, c.id),
            c
          );
        }
        async function Ce(e) {
          var t, i, r, s, n, l;
          const a =
              null !==
                (t =
                  null !==
                    (i =
                      null === (r = o()(this, K)) ||
                      void 0 === r ||
                      null === (s = r.relationships) ||
                      void 0 === s
                        ? void 0
                        : s[e.type]) && void 0 !== i
                    ? i
                    : o()(this, K).defaultRelationshipsConfig) && void 0 !== t
                ? t
                : null === (n = o()(this, K)) ||
                  void 0 === n ||
                  null === (l = n.relationships) ||
                  void 0 === l
                ? void 0
                : l[V],
            c = {};
          return (
            (c.id = (0, T.isInt)(e.identity) ? e.identity.toInt() : e.identity),
            (c.from = (0, T.isInt)(e.start) ? e.start.toInt() : e.start),
            (c.to = (0, T.isInt)(e.end) ? e.end.toInt() : e.end),
            (c.raw = e),
            await B(this, ce, ye).call(this, a, c, e, c.id),
            c
          );
        }
        function qe(e, t) {
          var i;
          if (l()(t) && t.length > 1) {
            let i = "<strong>".concat(e, ":</strong><br /><ul>");
            for (const e of t) i += "<li>".concat(e, "</li>");
            return i + "</ul>";
          }
          return b()((i = "<strong>".concat(e, ":</strong> "))).call(
            i,
            t,
            "<br>"
          );
        }
        function Ne(e, t) {
          if ("object" == typeof (null == t ? void 0 : t.properties))
            return (0, T.isInt)(t.properties[e])
              ? t.properties[e].toInt()
              : t.properties[e];
          throw new Error("Neo4j object is not properly constructed");
        }
        function ke(e, t) {
          let i = "";
          t || (t = p()(e.properties));
          for (const o of t) {
            const t = Ne(o, e);
            t && (i += qe(o, t));
          }
          const o = document.createElement("div");
          return (o.innerHTML = i), o;
        }
        function xe(e, t) {
          let i = "";
          t || (t = p()(e.properties));
          for (const r of t) {
            const t = Ne(r, e);
            var o;
            t && (i += b()((o = "".concat(r, ": "))).call(o, t, "\n"));
          }
          return i;
        }
        function Ie(e) {
          var t, i, o, r, s;
          return {
            containerId: e.container_id,
            initialCypher: e.initial_cypher,
            consoleDebug: e.console_debug,
            serverDatabase: e.server_database,
            neo4j: {
              serverUrl: e.server_url,
              serverUser: e.server_user,
              serverPassword: e.server_password,
              driverConfig:
                e.encrypted || e.trust
                  ? { encrypted: e.encrypted, trust: e.trust }
                  : void 0,
            },
            visConfig:
              e.arrows || e.hierarchical
                ? {
                    edges: e.arrows
                      ? { arrows: { to: { enabled: e.arrows } } }
                      : void 0,
                    layout: e.hierarchical
                      ? {
                          enabled: e.hierarchical,
                          sortMethod: e.hierarchical_sort_method,
                        }
                      : void 0,
                  }
                : void 0,
            labels: e.labels
              ? j()(
                  (t = b()((i = w()(e.labels))).call(
                    i,
                    null !== (o = e.labels) && void 0 !== o && o[V]
                      ? [[V, e.labels[V]]]
                      : []
                  ))
                ).call(
                  t,
                  (e, t) => {
                    let [i, o] = t;
                    return (
                      (e[i] = {
                        label:
                          "function" != typeof o.caption ? o.caption : void 0,
                        value: o.size,
                        group: o.community,
                        [z]: {
                          cypher: o.sizeCypher
                            ? { value: o.sizeCypher }
                            : void 0,
                          function: U()(
                            { title: (e) => ke(e, o.title_properties) },
                            "function" == typeof o.caption
                              ? { label: o.caption }
                              : {}
                          ),
                          static: {
                            font: o.font,
                            shape: o.image ? "image" : "dot",
                            image: o.image,
                          },
                        },
                      }),
                      e
                    );
                  },
                  {}
                )
              : void 0,
            relationships: e.relationships
              ? j()(
                  (r = b()((s = w()(e.relationships))).call(
                    s,
                    e.relationships[V] ? [[V, e.relationships[V]]] : []
                  ))
                ).call(
                  r,
                  (e, t) => {
                    let [i, o] = t;
                    return (
                      (e[i] = {
                        value: o.thickness,
                        label:
                          "string" == typeof o.caption ? o.caption : void 0,
                        [z]: { function: { title: ke } },
                      }),
                      e
                    );
                  },
                  {}
                )
              : void 0,
          };
        }
        const _e = he;
      })(),
      C
    );
  })()
);
//# sourceMappingURL=neovis-without-dependencies.js.map
