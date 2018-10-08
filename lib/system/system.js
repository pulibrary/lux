!(function(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("openseadragon")))
    : "function" == typeof define && define.amd
      ? define(["openseadragon"], e)
      : "object" == typeof exports
        ? (exports.system = e(require("openseadragon")))
        : (t.system = e(t.openseadragon))
})("undefined" != typeof self ? self : this, function(t) {
  return (function(t) {
    var e = {}
    function n(r) {
      if (e[r]) return e[r].exports
      var i = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r })
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, "a", e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = "/lux/"),
      n((n.s = 0))
    )
  })({
    "+E39": function(t, e, n) {
      t.exports = !n("S82l")(function() {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function() {
              return 7
            },
          }).a
        )
      })
    },
    "+ZMJ": function(t, e, n) {
      var r = n("lOnJ")
      t.exports = function(t, e, n) {
        if ((r(t), void 0 === e)) return t
        switch (n) {
          case 1:
            return function(n) {
              return t.call(e, n)
            }
          case 2:
            return function(n, r) {
              return t.call(e, n, r)
            }
          case 3:
            return function(n, r, i) {
              return t.call(e, n, r, i)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    "+aRa": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("JdFC"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("xehl"),
        s = n("XyMi")
      var u = function(t) {
          n("07RX")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-5dc06ba0", null)
      e.default = c.exports
    },
    "+tPU": function(t, e, n) {
      n("xGkn")
      for (
        var r = n("7KvD"),
          i = n("hJx8"),
          a = n("/bQp"),
          o = n("dSzd")("toStringTag"),
          s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
            ","
          ),
          u = 0;
        u < s.length;
        u++
      ) {
        var c = s[u],
          l = r[c],
          f = l && l.prototype
        f && !f[o] && i(f, o, c), (a[c] = a.Array)
      }
    },
    "//Fk": function(t, e, n) {
      t.exports = { default: n("U5ju"), __esModule: !0 }
    },
    "/Dev": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return t.isIE
            ? n("img", {
                staticClass: "lux-logo-svg",
                style: { fill: t.fill },
                attrs: { src: t.currPath, "aria-label": t.ariaLabel, width: t.width, height: t.height },
              })
            : n(t.type, { tag: "component", staticClass: "lux-svg-icon", attrs: { "aria-label": t.ariaLabel } })
        },
        i = []
    },
    "/P1r": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
                viewBox: "0 0 32 32",
                preserveAspectRatio: "xMinYMid",
                "aria-labelledby": "logo-gov-docs",
                role: "presentation",
              },
            },
            [
              e("title", { attrs: { id: this.logo - this.gov - this.docs, lang: "en" } }, [
                this._v("Government Docs Logo"),
              ]),
              this._v(" "),
              e("g", [
                e("path", {
                  attrs: {
                    fill: "#002C64",
                    d:
                      "M15.1 30.2c-1.2-.1-1.9-.2-2.7-.4-2.8-.7-5.1-2.1-7.2-4.1-3-3-4.8-6.9-5.1-11.5-.1-.6-.1-3.4-.1-6.7V1.8h32v.4c.1.7.1 11 0 11.9-.3 3.1-.9 5.4-2.3 7.8-2.6 4.8-7.2 7.8-12.3 8.3-.8 0-1.7.1-2.3 0z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#FFF",
                    d:
                      "M17.2 29.5c1.8-.1 4.4-1 6-1.9 2.7-1.6 4.9-3.9 6.3-6.9.8-1.6 1.2-4 1.2-7 0-1.4 0-1.7-.2-2.6-.5-2.7-1.8-5.2-3.7-7-.4-.4-.5-.5-.5-.8 0-.5 0-.5-3.5-.5-2.7 0-3.2 0-3.4.1-.4.2-.5.7-.1.7s.7.1 1 .3c.4.3.7.3 1.2.1.5-.2.7-.2.9 0 .1.1.2.2.2.5 0 .4-.1.5-.7.5-.5 0-.9-.2-1.7-.7-.6-.4-.8-.4-2.2 0-1.1.3-1.2.4-1.3.6-.3.4-.3.8 0 1.6.2.4.3.8.3.9 0 .1.1.2.2.2.2 0 .2 0 .4-.2.2-.4.6-.4 1.1-.3.8.2 1.4.5 2.3 1.4.5.5 1.1 1.9 1.2 3.2.1.9.1 2.3-.1 3.1-.5 2-1.7 3.9-3.2 4.9-.3.2-1.2.7-1.6.8-.5.2-1.8.2-2.4.1-1.2-.3-2.7-1.3-3.6-2.5-.3-.4-.7-1.4-.8-2.2-.1-.7 0-1.9.1-2.4.4-1.4 1.6-2.7 3.2-3.5.9-.4 1.1-.7 1-1.3-.1-.4-.3-.7-.6-1l-.3-.2H.7v2.6l.3.2.3.2h8s-.2.2-.4.5c-1 1.8-1.3 3.8-.8 6 .2.8.9 2.2 1.6 3.2 1.1 1.4 2.8 2.5 4.4 2.8.8.2 2.1.2 3 .1l.5-.1-.3.4c-.5.7-1 2-1.2 3.5-.1.8-.5 1.8-.8 2.2-.1.2-.2.3-.2.4 0 0 .2.1.5.1h.7s.5 0 .9-.1z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#FFF",
                    d:
                      "M14 29.2c.3-.1.7-.5.9-.8.1-.2.2-.7.3-1.2.2-.9.5-1.7.9-2.6.1-.3.2-.5.2-.5h-.4c-.2 0-.7-.1-1-.1-.3-.1-.7-.1-.8-.1-.4.1-1.5 1.3-2.3 2.5-.4.6-1 1.1-1.8 1.4-.3 0-.5.2-.4.2.1.2 1.8.8 3.3 1.1.8.2.8.2 1.1.1zm-4.6-2.1c.8-.4 1.2-.8 1.6-1.5.5-.7.7-1 1.5-1.6.3-.2.5-.4.5-.4s-.2-.1-.3-.2c-.4-.2-1.1-.6-1.7-1-.4-.3-.8-.3-1.5-.1-.4.1-1.6.7-2.2 1.1-.9.6-1.5.8-2.1.8h-.5c0 .3.9 1.2 2.1 2 1.1.8 1.6 1.1 1.9 1.1.1.1.4 0 .7-.2zm-4-3.6c.1-.1.5-.3.8-.5 1.2-.8 2.4-1.3 3.2-1.4.3 0 .5-.1.5-.1s-1.8-2.3-2-2.6c-.4-.5-1.6-.5-2.6 0-.7.3-1.5.5-2.3.5-.5 0-.8 0-.9-.1-.2-.1-.2-.1-.2 0 0 .2 1.5 3.2 1.8 3.5.5.7 1.1 1 1.7.7zm-2.5-4.8c1.4-.3 3.1-.6 3.5-.7.3 0 .5 0 .7.1.1.1.2.1.3.1 0 0 0-.2-.1-.4s-.2-.8-.3-1.3c-.1-.5-.1-.9-.2-1 0-.1-.2-.2-.4-.3-.3-.2-.4-.2-2.6-.2-2.1 0-2.4-.1-2.6-.2-.2-.1-.3-.1-.4-.1l.4 3c.1.7.2.8.4 1 .3.1.6.2 1.3 0zm12.7-.4c.3-.3.8-.3 1.1 0 .1.1.2.1 1.6.1h1.5v-6.6h-1v-.6c0-.7 0-.7-.8-.5-.6.2-1.1.4-1.5.8l-.3.3-.3-.3c-.4-.4-.9-.7-1.5-.8-.8-.2-.7-.2-.8.5v.6h-1v6.5h3z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#C30035",
                    d:
                      "M13.2 15.3c0-2.5 0-2.6.1-2.6s.1 0 .1 2.2v2.2h.4c.2 0 .5.1.7.1.3.1 1.2.6 1.2.6h-2.6v-2.5zm3.4 2.4c.7-.4 1.1-.6 1.6-.6h.5v-4.4h.4v5.2h-2.8l.3-.2z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#C30035",
                    d:
                      "M15.6 16.8c-.3-.2-1-.5-1.2-.5h-.2v-4.6l.3.1c.4.1.9.4 1.1.6l.2.2v2.1c-.1 2.2-.1 2.2-.2 2.1zm1-2c0-1.9 0-2.2.1-2.3.2-.3.7-.6 1.1-.7l.3-.1v4.6h-.2c-.2 0-.8.3-1.1.5l-.2.1v-2.1z",
                  },
                }),
                e("path", {
                  attrs: {
                    fill: "#FFF",
                    d:
                      "M6.9 14.3c0-.3.2-1.4.3-1.8.1-.3.1-.4 0-.7-.2-.6-.1-.6-3.1-.6H1.5L1 11l-.5-.2v.6c.1 1.2.3 2.2.4 2.4.1.1.2.3.3.3.1.1.9.1 2.4.1 2.3 0 2.9.1 3.1.3.1.1.2 0 .2-.2z",
                  },
                }),
              ]),
            ]
          )
        },
        i = []
    },
    "/bQp": function(t, e) {
      t.exports = {}
    },
    "/nfx": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = { name: "LuxIconPicture", status: "ready", release: "1.0.0", type: "Element" })
    },
    "/pG4": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement
          return (this._self._c || t)(
            this.type,
            { tag: "component", staticClass: "lux-spacer" },
            [this._t("default")],
            2
          )
        },
        i = []
    },
    "/tS5": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LogoFriends",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { width: { type: [Number, String], default: 115 }, height: { type: [Number, String], default: 31 } },
        })
    },
    "/zfu": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n("transition", { attrs: { name: "fade" } }, [
            t.show
              ? n(
                  "div",
                  {
                    class: [
                      "lux-alert",
                      { "lux-alert-dismissible": t.dismissible },
                      { "lux-alert-success": t.isSuccess },
                      { "lux-alert-warning": t.isWarning },
                      { "lux-alert-error": t.isError },
                      { "lux-alert-info": t.isInfo },
                      { "lux-alert-fullscreen": t.isFullScreen },
                    ],
                    attrs: { role: "alert" },
                    on: {
                      click: function(e) {
                        t.hideAlert()
                      },
                    },
                  },
                  [
                    t._t("default", [t._v("\n    " + t._s(t.alertMessage) + "\n    ")]),
                    t._v(" "),
                    t.dismissible
                      ? n(
                          "button",
                          {
                            staticClass: "lux-close",
                            attrs: { type: "button", "data-dismiss": "alert", "aria-label": "Close" },
                          },
                          [n("span", { attrs: { "aria-hidden": "true" } }, [t._v("×")])]
                        )
                      : t._e(),
                  ],
                  2
                )
              : t._e(),
          ])
        },
        i = []
    },
    0: function(t, e, n) {
      t.exports = n("cdCv")
    },
    "01M/": function(t, e, n) {
      var r
      !(function() {
        function i(t, e, n) {
          return t.call.apply(t.bind, arguments)
        }
        function a(t, e, n) {
          if (!t) throw Error()
          if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2)
            return function() {
              var n = Array.prototype.slice.call(arguments)
              return Array.prototype.unshift.apply(n, r), t.apply(e, n)
            }
          }
          return function() {
            return t.apply(e, arguments)
          }
        }
        function o(t, e, n) {
          return (o =
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : a).apply(
            null,
            arguments
          )
        }
        var s =
          Date.now ||
          function() {
            return +new Date()
          }
        var u = !!window.FontFace
        function c(t, e, n, r) {
          if (((e = t.c.createElement(e)), n))
            for (var i in n) n.hasOwnProperty(i) && ("style" == i ? (e.style.cssText = n[i]) : e.setAttribute(i, n[i]))
          return r && e.appendChild(t.c.createTextNode(r)), e
        }
        function l(t, e, n) {
          ;(t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(n, t.lastChild)
        }
        function f(t) {
          t.parentNode && t.parentNode.removeChild(t)
        }
        function d(t, e, n) {
          ;(e = e || []), (n = n || [])
          for (var r = t.className.split(/\s+/), i = 0; i < e.length; i += 1) {
            for (var a = !1, o = 0; o < r.length; o += 1)
              if (e[i] === r[o]) {
                a = !0
                break
              }
            a || r.push(e[i])
          }
          for (e = [], i = 0; i < r.length; i += 1) {
            for (a = !1, o = 0; o < n.length; o += 1)
              if (r[i] === n[o]) {
                a = !0
                break
              }
            a || e.push(r[i])
          }
          t.className = e
            .join(" ")
            .replace(/\s+/g, " ")
            .replace(/^\s+|\s+$/, "")
        }
        function p(t, e) {
          for (var n = t.className.split(/\s+/), r = 0, i = n.length; r < i; r++) if (n[r] == e) return !0
          return !1
        }
        function h(t, e, n) {
          function r() {
            s && i && a && (s(o), (s = null))
          }
          e = c(t, "link", { rel: "stylesheet", href: e, media: "all" })
          var i = !1,
            a = !0,
            o = null,
            s = n || null
          u
            ? ((e.onload = function() {
                ;(i = !0), r()
              }),
              (e.onerror = function() {
                ;(i = !0), (o = Error("Stylesheet failed to load")), r()
              }))
            : setTimeout(function() {
                ;(i = !0), r()
              }, 0),
            l(t, "head", e)
        }
        function v(t, e, n, r) {
          var i = t.c.getElementsByTagName("head")[0]
          if (i) {
            var a = c(t, "script", { src: e }),
              o = !1
            return (
              (a.onload = a.onreadystatechange = function() {
                o ||
                  (this.readyState && "loaded" != this.readyState && "complete" != this.readyState) ||
                  ((o = !0),
                  n && n(null),
                  (a.onload = a.onreadystatechange = null),
                  "HEAD" == a.parentNode.tagName && i.removeChild(a))
              }),
              i.appendChild(a),
              setTimeout(function() {
                o || ((o = !0), n && n(Error("Script load timeout")))
              }, r || 5e3),
              a
            )
          }
          return null
        }
        function m() {
          ;(this.a = 0), (this.c = null)
        }
        function g(t) {
          return (
            t.a++,
            function() {
              t.a--, _(t)
            }
          )
        }
        function y(t, e) {
          ;(t.c = e), _(t)
        }
        function _(t) {
          0 == t.a && t.c && (t.c(), (t.c = null))
        }
        function b(t) {
          this.a = t || "-"
        }
        function x(t, e) {
          ;(this.c = t), (this.f = 4), (this.a = "n")
          var n = (e || "n4").match(/^([nio])([1-9])$/i)
          n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)))
        }
        function w(t) {
          var e = []
          t = t.split(/,\s*/)
          for (var n = 0; n < t.length; n++) {
            var r = t[n].replace(/['"]/g, "")
            ;-1 != r.indexOf(" ") || /^\d/.test(r) ? e.push("'" + r + "'") : e.push(r)
          }
          return e.join(",")
        }
        function M(t) {
          return t.a + t.f
        }
        function O(t) {
          var e = "normal"
          return "o" === t.a ? (e = "oblique") : "i" === t.a && (e = "italic"), e
        }
        function C(t) {
          var e = 4,
            n = "n",
            r = null
          return (
            t &&
              ((r = t.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()),
              (r = t.match(/([1-9]00|normal|bold)/i)) &&
                r[1] &&
                (/bold/i.test(r[1]) ? (e = 7) : /[1-9]00/.test(r[1]) && (e = parseInt(r[1].substr(0, 1), 10)))),
            n + e
          )
        }
        function S(t) {
          if (t.g) {
            var e = p(t.f, t.a.c("wf", "active")),
              n = [],
              r = [t.a.c("wf", "loading")]
            e || n.push(t.a.c("wf", "inactive")), d(t.f, n, r)
          }
          j(t, "inactive")
        }
        function j(t, e, n) {
          t.j && t.h[e] && (n ? t.h[e](n.c, M(n)) : t.h[e]())
        }
        function E(t, e) {
          ;(this.c = t), (this.f = e), (this.a = c(this.c, "span", { "aria-hidden": "true" }, this.f))
        }
        function L(t) {
          l(t.c, "body", t.a)
        }
        function T(t) {
          return (
            "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
            w(t.c) +
            ";font-style:" +
            O(t) +
            ";font-weight:" +
            t.f +
            "00;"
          )
        }
        function k(t, e, n, r, i, a) {
          ;(this.g = t), (this.j = e), (this.a = r), (this.c = n), (this.f = i || 3e3), (this.h = a || void 0)
        }
        function A(t, e, n, r, i, a, o) {
          ;(this.v = t),
            (this.B = e),
            (this.c = n),
            (this.a = r),
            (this.s = o || "BESbswy"),
            (this.f = {}),
            (this.w = i || 3e3),
            (this.u = a || null),
            (this.m = this.j = this.h = this.g = null),
            (this.g = new E(this.c, this.s)),
            (this.h = new E(this.c, this.s)),
            (this.j = new E(this.c, this.s)),
            (this.m = new E(this.c, this.s)),
            (t = T((t = new x(this.a.c + ",serif", M(this.a))))),
            (this.g.a.style.cssText = t),
            (t = T((t = new x(this.a.c + ",sans-serif", M(this.a))))),
            (this.h.a.style.cssText = t),
            (t = T((t = new x("serif", M(this.a))))),
            (this.j.a.style.cssText = t),
            (t = T((t = new x("sans-serif", M(this.a))))),
            (this.m.a.style.cssText = t),
            L(this.g),
            L(this.h),
            L(this.j),
            L(this.m)
        }
        ;(b.prototype.c = function(t) {
          for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase())
          return e.join(this.a)
        }),
          (k.prototype.start = function() {
            var t = this.c.o.document,
              e = this,
              n = s(),
              r = new Promise(function(r, i) {
                !(function a() {
                  s() - n >= e.f
                    ? i()
                    : t.fonts
                        .load(
                          (function(t) {
                            return O(t) + " " + t.f + "00 300px " + w(t.c)
                          })(e.a),
                          e.h
                        )
                        .then(
                          function(t) {
                            1 <= t.length ? r() : setTimeout(a, 25)
                          },
                          function() {
                            i()
                          }
                        )
                })()
              }),
              i = null,
              a = new Promise(function(t, n) {
                i = setTimeout(n, e.f)
              })
            Promise.race([a, r]).then(
              function() {
                i && (clearTimeout(i), (i = null)), e.g(e.a)
              },
              function() {
                e.j(e.a)
              }
            )
          })
        var D = { D: "serif", C: "sans-serif" },
          I = null
        function N() {
          if (null === I) {
            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)
            I = !!t && (536 > parseInt(t[1], 10) || (536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10)))
          }
          return I
        }
        function $(t, e, n) {
          for (var r in D) if (D.hasOwnProperty(r) && e === t.f[D[r]] && n === t.f[D[r]]) return !0
          return !1
        }
        function P(t) {
          var e,
            n = t.g.a.offsetWidth,
            r = t.h.a.offsetWidth
          ;(e = n === t.f.serif && r === t.f["sans-serif"]) || (e = N() && $(t, n, r)),
            e
              ? s() - t.A >= t.w
                ? N() && $(t, n, r) && (null === t.u || t.u.hasOwnProperty(t.a.c))
                  ? z(t, t.v)
                  : z(t, t.B)
                : (function(t) {
                    setTimeout(
                      o(function() {
                        P(this)
                      }, t),
                      50
                    )
                  })(t)
              : z(t, t.v)
        }
        function z(t, e) {
          setTimeout(
            o(function() {
              f(this.g.a), f(this.h.a), f(this.j.a), f(this.m.a), e(this.a)
            }, t),
            0
          )
        }
        function F(t, e, n) {
          ;(this.c = t), (this.a = e), (this.f = 0), (this.m = this.j = !1), (this.s = n)
        }
        A.prototype.start = function() {
          ;(this.f.serif = this.j.a.offsetWidth), (this.f["sans-serif"] = this.m.a.offsetWidth), (this.A = s()), P(this)
        }
        var R = null
        function U(t) {
          0 == --t.f &&
            t.j &&
            (t.m
              ? ((t = t.a).g && d(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]),
                j(t, "active"))
              : S(t.a))
        }
        function B(t) {
          ;(this.j = t),
            (this.a = new function() {
              this.c = {}
            }()),
            (this.h = 0),
            (this.f = this.g = !0)
        }
        function H(t, e, n, r, i) {
          var a = 0 == --t.h
          ;(t.f || t.g) &&
            setTimeout(function() {
              var t = i || null,
                s = r || {}
              if (0 === n.length && a) S(e.a)
              else {
                ;(e.f += n.length), a && (e.j = a)
                var u,
                  c = []
                for (u = 0; u < n.length; u++) {
                  var l = n[u],
                    f = s[l.c],
                    p = e.a,
                    h = l
                  if (
                    (p.g && d(p.f, [p.a.c("wf", h.c, M(h).toString(), "loading")]),
                    j(p, "fontloading", h),
                    (p = null),
                    null === R)
                  )
                    if (window.FontFace) {
                      h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)
                      var v =
                        /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) &&
                        /Apple/.exec(window.navigator.vendor)
                      R = h ? 42 < parseInt(h[1], 10) : !v
                    } else R = !1
                  ;(p = R
                    ? new k(o(e.g, e), o(e.h, e), e.c, l, e.s, f)
                    : new A(o(e.g, e), o(e.h, e), e.c, l, e.s, t, f)),
                    c.push(p)
                }
                for (u = 0; u < c.length; u++) c[u].start()
              }
            }, 0)
        }
        function V(t, e) {
          ;(this.c = t), (this.a = e)
        }
        function Y(t, e) {
          ;(this.c = t), (this.a = e)
        }
        ;(F.prototype.g = function(t) {
          var e = this.a
          e.g &&
            d(
              e.f,
              [e.a.c("wf", t.c, M(t).toString(), "active")],
              [e.a.c("wf", t.c, M(t).toString(), "loading"), e.a.c("wf", t.c, M(t).toString(), "inactive")]
            ),
            j(e, "fontactive", t),
            (this.m = !0),
            U(this)
        }),
          (F.prototype.h = function(t) {
            var e = this.a
            if (e.g) {
              var n = p(e.f, e.a.c("wf", t.c, M(t).toString(), "active")),
                r = [],
                i = [e.a.c("wf", t.c, M(t).toString(), "loading")]
              n || r.push(e.a.c("wf", t.c, M(t).toString(), "inactive")), d(e.f, r, i)
            }
            j(e, "fontinactive", t), U(this)
          }),
          (B.prototype.load = function(t) {
            ;(this.c = new function(t, e) {
              ;(this.a = t), (this.o = e || t), (this.c = this.o.document)
            }(this.j, t.context || this.j)),
              (this.g = !1 !== t.events),
              (this.f = !1 !== t.classes),
              (function(t, e, n) {
                var r = [],
                  i = n.timeout
                !(function(t) {
                  t.g && d(t.f, [t.a.c("wf", "loading")]), j(t, "loading")
                })(e)
                var r = (function(t, e, n) {
                    var r,
                      i = []
                    for (r in e)
                      if (e.hasOwnProperty(r)) {
                        var a = t.c[r]
                        a && i.push(a(e[r], n))
                      }
                    return i
                  })(t.a, n, t.c),
                  a = new F(t.c, e, i)
                for (t.h = r.length, e = 0, n = r.length; e < n; e++)
                  r[e].load(function(e, n, r) {
                    H(t, a, e, n, r)
                  })
              })(
                this,
                new function(t, e) {
                  ;(this.c = t),
                    (this.f = t.o.document.documentElement),
                    (this.h = e),
                    (this.a = new b("-")),
                    (this.j = !1 !== e.events),
                    (this.g = !1 !== e.classes)
                }(this.c, t),
                t
              )
          }),
          (V.prototype.load = function(t) {
            var e = this,
              n = e.a.projectId,
              r = e.a.version
            if (n) {
              var i = e.c.o
              v(this.c, (e.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (r ? "?v=" + r : ""), function(
                r
              ) {
                r
                  ? t([])
                  : ((i["__MonotypeConfiguration__" + n] = function() {
                      return e.a
                    }),
                    (function e() {
                      if (i["__mti_fntLst" + n]) {
                        var r,
                          a = i["__mti_fntLst" + n](),
                          o = []
                        if (a)
                          for (var s = 0; s < a.length; s++) {
                            var u = a[s].fontfamily
                            void 0 != a[s].fontStyle && void 0 != a[s].fontWeight
                              ? ((r = a[s].fontStyle + a[s].fontWeight), o.push(new x(u, r)))
                              : o.push(new x(u))
                          }
                        t(o)
                      } else
                        setTimeout(function() {
                          e()
                        }, 50)
                    })())
              }).id =
                "__MonotypeAPIScript__" + n
            } else t([])
          }),
          (Y.prototype.load = function(t) {
            var e,
              n,
              r = this.a.urls || [],
              i = this.a.families || [],
              a = this.a.testStrings || {},
              o = new m()
            for (e = 0, n = r.length; e < n; e++) h(this.c, r[e], g(o))
            var s = []
            for (e = 0, n = i.length; e < n; e++)
              if ((r = i[e].split(":"))[1])
                for (var u = r[1].split(","), c = 0; c < u.length; c += 1) s.push(new x(r[0], u[c]))
              else s.push(new x(r[0]))
            y(o, function() {
              t(s, a)
            })
          })
        var q = "https://fonts.googleapis.com/css"
        var W = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" },
          G = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7",
          },
          X = { i: "i", italic: "i", n: "n", normal: "n" },
          Q = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/
        function J(t, e) {
          ;(this.c = t), (this.a = e)
        }
        var Z = { Arimo: !0, Cousine: !0, Tinos: !0 }
        function K(t, e) {
          ;(this.c = t), (this.a = e)
        }
        function tt(t, e) {
          ;(this.c = t), (this.f = e), (this.a = [])
        }
        ;(J.prototype.load = function(t) {
          var e = new m(),
            n = this.c,
            r = new function(t, e) {
              ;(this.c = t || q), (this.a = []), (this.f = []), (this.g = e || "")
            }(this.a.api, this.a.text),
            i = this.a.families
          !(function(t, e) {
            for (var n = e.length, r = 0; r < n; r++) {
              var i = e[r].split(":")
              3 == i.length && t.f.push(i.pop())
              var a = ""
              2 == i.length && "" != i[1] && (a = ":"), t.a.push(i.join(a))
            }
          })(r, i)
          var a = new function(t) {
            ;(this.f = t), (this.a = []), (this.c = {})
          }(i)
          !(function(t) {
            for (var e = t.f.length, n = 0; n < e; n++) {
              var r = t.f[n].split(":"),
                i = r[0].replace(/\+/g, " "),
                a = ["n4"]
              if (2 <= r.length) {
                var o
                if (((o = []), (s = r[1])))
                  for (var s, u = (s = s.split(",")).length, c = 0; c < u; c++) {
                    var l
                    if ((l = s[c]).match(/^[\w-]+$/))
                      if (null == (d = Q.exec(l.toLowerCase()))) l = ""
                      else {
                        if (((l = null == (l = d[2]) || "" == l ? "n" : X[l]), null == (d = d[1]) || "" == d)) d = "4"
                        else
                          var f = G[d],
                            d = f || (isNaN(d) ? "4" : d.substr(0, 1))
                        l = [l, d].join("")
                      }
                    else l = ""
                    l && o.push(l)
                  }
                0 < o.length && (a = o),
                  3 == r.length &&
                    ((o = []), 0 < (r = (r = r[2]) ? r.split(",") : o).length && (r = W[r[0]]) && (t.c[i] = r))
              }
              for (t.c[i] || ((r = W[i]) && (t.c[i] = r)), r = 0; r < a.length; r += 1) t.a.push(new x(i, a[r]))
            }
          })(a),
            h(
              n,
              (function(t) {
                if (0 == t.a.length) throw Error("No fonts to load!")
                if (-1 != t.c.indexOf("kit=")) return t.c
                for (var e = t.a.length, n = [], r = 0; r < e; r++) n.push(t.a[r].replace(/ /g, "+"))
                return (
                  (e = t.c + "?family=" + n.join("%7C")),
                  0 < t.f.length && (e += "&subset=" + t.f.join(",")),
                  0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)),
                  e
                )
              })(r),
              g(e)
            ),
            y(e, function() {
              t(a.a, a.c, Z)
            })
        }),
          (K.prototype.load = function(t) {
            var e = this.a.id,
              n = this.c.o
            e
              ? v(
                  this.c,
                  (this.a.api || "https://use.typekit.net") + "/" + e + ".js",
                  function(e) {
                    if (e) t([])
                    else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                      e = n.Typekit.config.fn
                      for (var r = [], i = 0; i < e.length; i += 2)
                        for (var a = e[i], o = e[i + 1], s = 0; s < o.length; s++) r.push(new x(a, o[s]))
                      try {
                        n.Typekit.load({ events: !1, classes: !1, async: !0 })
                      } catch (t) {}
                      t(r)
                    }
                  },
                  2e3
                )
              : t([])
          }),
          (tt.prototype.load = function(t) {
            var e = this.f.id,
              n = this.c.o,
              r = this
            e
              ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}),
                (n.__webfontfontdeckmodule__[e] = function(e, n) {
                  for (var i = 0, a = n.fonts.length; i < a; ++i) {
                    var o = n.fonts[i]
                    r.a.push(new x(o.name, C("font-weight:" + o.weight + ";font-style:" + o.style)))
                  }
                  t(r.a)
                }),
                v(
                  this.c,
                  (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                    (function(t) {
                      return t.o.location.hostname || t.a.location.hostname
                    })(this.c) +
                    "/" +
                    e +
                    ".js",
                  function(e) {
                    e && t([])
                  }
                ))
              : t([])
          })
        var et = new B(window)
        ;(et.a.c.custom = function(t, e) {
          return new Y(e, t)
        }),
          (et.a.c.fontdeck = function(t, e) {
            return new tt(e, t)
          }),
          (et.a.c.monotype = function(t, e) {
            return new V(e, t)
          }),
          (et.a.c.typekit = function(t, e) {
            return new K(e, t)
          }),
          (et.a.c.google = function(t, e) {
            return new J(e, t)
          })
        var nt = { load: o(et.load, et) }
        void 0 ===
          (r = function() {
            return nt
          }.call(e, n, e, t)) || (t.exports = r)
      })()
    },
    "06OY": function(t, e, n) {
      var r = n("3Eo+")("meta"),
        i = n("EqjI"),
        a = n("D2L2"),
        o = n("evD5").f,
        s = 0,
        u =
          Object.isExtensible ||
          function() {
            return !0
          },
        c = !n("S82l")(function() {
          return u(Object.preventExtensions({}))
        }),
        l = function(t) {
          o(t, r, { value: { i: "O" + ++s, w: {} } })
        },
        f = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t
            if (!a(t, r)) {
              if (!u(t)) return "F"
              if (!e) return "E"
              l(t)
            }
            return t[r].i
          },
          getWeak: function(t, e) {
            if (!a(t, r)) {
              if (!u(t)) return !0
              if (!e) return !1
              l(t)
            }
            return t[r].w
          },
          onFreeze: function(t) {
            return c && f.NEED && u(t) && !a(t, r) && l(t), t
          },
        })
    },
    "07RX": function(t, e) {},
    "0Y4m": function(t, e) {},
    "0bgr": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LogoGovDocs",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { width: { type: [Number, String], default: 32 }, height: { type: [Number, String], default: 32 } },
        })
    },
    "0x8C": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("zMEw"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("KRl5"),
        s = n("XyMi")
      var u = function(t) {
          n("eb02")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-c1cdf608", null)
      e.default = c.exports
    },
    "1Jhj": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement
          return (this._self._c || t)(this.type, { tag: "component", staticClass: "lux-copyright" }, [
            this._v("\n  © " + this._s(new Date().getFullYear()) + " The Trustees of Princeton University\n"),
          ])
        },
        i = []
    },
    "1kS7": function(t, e) {
      e.f = Object.getOwnPropertySymbols
    },
    "1lbN": function(t, e) {},
    "1v0A": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "DropdownMenu",
          status: "ready",
          release: "1.0.0",
          type: "Pattern",
          data: function() {
            return { isVisible: !1 }
          },
          props: {
            element: { type: String, default: "div" },
            buttonLabel: { type: String, default: "Dropdown" },
            type: {
              type: String,
              default: "buttons",
              validator: function(t) {
                return t.match(/(links|buttons)/)
              },
            },
            menuItems: { type: Array, default: "div" },
            align: {
              type: String,
              default: "left",
              validator: function(t) {
                return t.match(/(left|right)/)
              },
            },
          },
          methods: {
            buttonClicked: function(t) {
              ;(this.isVisible = !this.isVisible), this.$emit("button-clicked", t)
            },
            menuItemClicked: function(t) {
              ;(this.isVisible = !1), this.$emit("menu-item-clicked", t)
            },
          },
        })
    },
    "20/5": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Card",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: {
            id: { type: String, default: "" },
            cardUrl: { type: String, default: "" },
            cardPixelWidth: { default: 300 },
            size: {
              type: String,
              default: "medium",
              validator: function(t) {
                return t.match(/(small|medium|large)/)
              },
            },
            selected: { type: Boolean, default: !1 },
            edited: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            cardTitle: { type: String, default: "" },
          },
          methods: {
            select: function(t) {
              this.$emit("card-click", t)
            },
          },
        })
    },
    "2KxR": function(t, e) {
      t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || (void 0 !== r && r in t)) throw TypeError(n + ": incorrect invocation!")
        return t
      }
    },
    "2oSY": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("H/QU"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("KFhq"),
        s = n("XyMi")
      var u = function(t) {
          n("Spmz")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-0d1cc026", null)
      e.default = c.exports
    },
    "3C/1": function(t, e, n) {
      n("M6a0"), n("zQR9"), n("+tPU"), n("qCoq"), n("UvrK"), n("Xjd4"), n("bqnK"), (t.exports = n("FeBl").Map)
    },
    "3Eo+": function(t, e) {
      var n = 0,
        r = Math.random()
      t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
      }
    },
    "3MQJ": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "UniversityAccessibility",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "span" } },
        })
    },
    "3NGM": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return "links" === t.type
            ? n("nav", { staticClass: "lux-nav" }, [
                n(
                  "ul",
                  t._l(t.menuItems, function(e, r) {
                    return n("li", [
                      n("a", {
                        key: r,
                        class: ["lux-nav-item", { "lux-active": t.localActive === e.component }],
                        attrs: { href: e.href },
                        domProps: { innerHTML: t._s(e.name) },
                        on: {
                          click: function(e) {
                            t.menuItemClicked(e)
                          },
                        },
                      }),
                    ])
                  })
                ),
              ])
            : "buttons" === t.type
              ? n("div", { staticClass: "lux-menu" }, [
                  n(
                    "ul",
                    t._l(t.menuItems, function(e, r) {
                      return n("li", [
                        n("button", {
                          key: r,
                          class: [
                            "lux-menu-item",
                            { "lux-active": t.localActive === e.component },
                            { "lux-disabled": e.disabled },
                          ],
                          attrs: { href: e.href, disabled: e.disabled },
                          domProps: { innerHTML: t._s(e.name) },
                          on: {
                            click: function(n) {
                              t.menuItemClicked(n, e)
                            },
                          },
                        }),
                      ])
                    })
                  ),
                ])
              : t._e()
        },
        i = []
    },
    "3Orc": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Wrapper",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "div" }, fullWidth: { type: Boolean, default: !1 } },
        })
    },
    "3fs2": function(t, e, n) {
      var r = n("RY/4"),
        i = n("dSzd")("iterator"),
        a = n("/bQp")
      t.exports = n("FeBl").getIteratorMethod = function(t) {
        if (void 0 != t) return t[i] || t["@@iterator"] || a[r(t)]
      }
    },
    "3tbi": function(t, e) {},
    "42RZ": function(t, e) {},
    "493m": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.wrapper,
            { tag: "component", staticClass: "lux-input" },
            [
              t.groupLabel ? n("legend", [t._v(t._s(t.groupLabel))]) : t._e(),
              t._v(" "),
              t._l(t.options, function(e, r) {
                return n("div", { class: ["lux-checkbox", { "lux-inline": !t.vertical }] }, [
                  n("input", {
                    attrs: { type: "checkbox", id: e.id, name: t.label, disabled: e.disabled },
                    domProps: { value: e.value, checked: e.checked },
                    on: {
                      change: function(e) {
                        t.change(e)
                      },
                      blur: function(e) {
                        t.inputblur(e.target)
                      },
                    },
                  }),
                  t._v(" "),
                  e.label
                    ? n("label", { attrs: { for: e.id } }, [t._v(t._s(e.label))])
                    : n("label", { attrs: { for: e.id } }, [t._v(t._s(e.value))]),
                ])
              }),
              t._v(" "),
              t.errormessage
                ? n("div", { staticClass: "lux-error", attrs: { role: "alert" } }, [t._v(t._s(t.errormessage))])
                : t._e(),
            ],
            2
          )
        },
        i = []
    },
    "4RlR": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Spacer",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "div" } },
        })
    },
    "4UZZ": function(t, e) {},
    "4WTo": function(t, e, n) {
      var r = n("NWt+")
      t.exports = function(t, e) {
        var n = []
        return r(t, !1, n.push, n, e), n
      }
    },
    "4k85": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement
          return (this._self._c || t)(
            this.type,
            { tag: "component", class: ["lux-wrapper", { "lux-full-width": this.fullWidth }] },
            [this._t("default")],
            2
          )
        },
        i = []
    },
    "4mcu": function(t, e) {
      t.exports = function() {}
    },
    "52gC": function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t)
        return t
      }
    },
    "53Z2": function(t, e) {},
    "5E4N": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "div",
            { staticClass: "lux-media-image", class: [t.height, { "lux-default-thumbnail": !t.source }] },
            [
              t.source
                ? n("img", {
                    class: [{ "lux-cover": t.cover }, { "lux-contain": t.contain }],
                    attrs: { src: t.source, alt: t.alt },
                    on: {
                      error: function(e) {
                        t.source = null
                      },
                    },
                  })
                : n(
                    "lux-icon-base",
                    { attrs: { width: "50", height: "50", "icon-name": "file", "icon-color": "rgb(225,225,225)" } },
                    [n("lux-icon-file")],
                    1
                  ),
            ],
            1
          )
        },
        i = []
    },
    "5G88": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r,
        i = n("Dd8w"),
        a = (r = i) && r.__esModule ? r : { default: r },
        o = n("NYxO")
      e.default = {
        name: "ResourceForm",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        metaInfo: { title: "Resource Form", htmlAttrs: { lang: "en" } },
        props: { type: { type: String, default: "div" }, count: { type: Number, default: 0 } },
        computed: (0, a.default)(
          {
            memberCount: function() {
              return this.$store.getters.getMemberCount
            },
            isMultiVolume: function() {
              return this.$store.getters.isMultiVolume
            },
          },
          (0, o.mapState)({
            resource: function(t) {
              return t.ordermanager.resource
            },
          }),
          {
            viewHints: function() {
              return [
                {
                  name: "viewHint",
                  value: "individuals",
                  id: "individuals",
                  checked: "individuals" === this.resource.viewingHint,
                },
                { name: "viewHint", value: "paged", id: "paged", checked: "paged" === this.resource.viewingHint },
                {
                  name: "viewHint",
                  value: "continuous",
                  id: "continuous",
                  checked: "continuous" === this.resource.viewingHint,
                },
              ]
            },
            viewDirs: function() {
              return [
                {
                  name: "viewDir",
                  value: "LEFTTORIGHT",
                  id: "left-to-right",
                  label: "left-to-right",
                  checked: "LEFTTORIGHT" === this.resource.viewingDirection,
                },
                {
                  name: "viewDir",
                  value: "RIGHTTOLEFT",
                  id: "right-to-left",
                  label: "right-to-left",
                  checked: "RIGHTTOLEFT" === this.resource.viewingDirection,
                },
                {
                  name: "viewDir",
                  value: "TOPTOBOTTOM",
                  id: "top-to-bottom",
                  label: "top-to-bottom",
                  checked: "TOPTOBOTTOM" === this.resource.viewingDirection,
                },
                {
                  name: "viewDir",
                  value: "BOTTOMTOTOP",
                  id: "bottom-to-top",
                  label: "bottom-to-top",
                  checked: "BOTTOMTOTOP" === this.resource.viewingDirection,
                },
              ]
            },
          }
        ),
        methods: {
          isIndividuals: function() {
            return "individuals" === this.resource.viewingHint
          },
          isPaged: function() {
            return "paged" === this.resource.viewingHint
          },
          isContinuous: function() {
            return "continuous" === this.resource.viewingHint
          },
          updateViewDir: function(t) {
            this.$store.commit("UPDATE_VIEWDIR", t)
          },
          updateViewHint: function(t) {
            this.$store.commit("UPDATE_VIEWHINT", t)
          },
        },
      }
    },
    "5Kpz": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e("g", [
            e("g", { attrs: { id: "Outline_Icons" } }, [
              e("g", [
                e("rect", {
                  attrs: {
                    x: "0.5",
                    y: "0.5",
                    fill: "none",
                    stroke: "#000000",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    width: "23",
                    height: "23",
                  },
                }),
                this._v(" "),
                e("line", {
                  attrs: {
                    fill: "none",
                    stroke: "#000000",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    x1: "23.5",
                    y1: "17.5",
                    x2: "0.5",
                    y2: "17.5",
                  },
                }),
                this._v(" "),
                e("path", {
                  attrs: {
                    fill: "none",
                    stroke: "#000000",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    d:
                      "M9.5,3.5c-1.245,0-2.27,0.914-2.46,2.104\n  \t\t\tC6.027,5.215,5,5.973,5,7c0,0.828,0.672,1.5,1.5,1.5h3C10.881,8.5,12,7.381,12,6S10.881,3.5,9.5,3.5z",
                  },
                }),
                this._v(" "),
                e("path", {
                  attrs: {
                    fill: "none",
                    stroke: "#000000",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    d:
                      "M3.5,17.5c0,0,2-5,4.5-5s4.5,3,4.5,3\n  \t\t\tl3.015-5.168c0.672-1.152,2.356-1.093,2.948,0.096L22,17.5",
                  },
                }),
              ]),
            ]),
            this._v(" "),
            e("g", { attrs: { id: "Invisible_Shape" } }, [
              e("rect", { attrs: { fill: "none", width: "24", height: "24" } }),
            ]),
          ])
        },
        i = []
    },
    "5PlU": function(t, e, n) {
      var r = n("RY/4"),
        i = n("dSzd")("iterator"),
        a = n("/bQp")
      t.exports = n("FeBl").isIterable = function(t) {
        var e = Object(t)
        return void 0 !== e[i] || "@@iterator" in e || a.hasOwnProperty(r(e))
      }
    },
    "5vqI": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "InputText",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          computed: {
            hasError: function() {
              return this.errormessage.length
            },
          },
          props: {
            type: {
              type: String,
              default: "text",
              validator: function(t) {
                return t.match(/(text|number|email)/)
              },
            },
            value: { type: String, default: "" },
            placeholder: { type: String, default: "" },
            label: { type: String, default: "" },
            errormessage: { type: String, default: "" },
            wrapper: {
              type: String,
              default: "div",
              validator: function(t) {
                return t.match(/(div|section)/)
              },
            },
            id: { type: String, default: "", required: !0 },
            width: {
              type: String,
              default: "expand",
              validator: function(t) {
                return t.match(/(auto|expand)/)
              },
            },
            disabled: { type: Boolean, default: !1 },
            hover: { type: Boolean, default: !1 },
            focus: { type: Boolean, default: !1 },
          },
          methods: {
            inputblur: function(t) {
              this.$emit("inputblur", t)
            },
          },
        })
    },
    "5zde": function(t, e, n) {
      n("zQR9"), n("qyJz"), (t.exports = n("FeBl").Array.from)
    },
    "6VeP": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("zsHz"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("9N99"),
        s = n("XyMi"),
        u = Object(s.a)(i.a, o.a, o.b, !1, null, null, null)
      e.default = u.exports
    },
    "6ftZ": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Heading",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: {
            level: {
              type: String,
              default: "h1",
              validator: function(t) {
                return t.match(/(h1|h2|h3|h4|h5|h6)/)
              },
            },
            hidden: { type: Boolean, default: !1 },
          },
        })
    },
    "6qe1": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("/tS5"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("Ceas"),
        s = n("XyMi")
      var u = function(t) {
          n("x4yr")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-41755926", null)
      e.default = c.exports
    },
    "7+uW": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        function(t) {
          /*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
          var n = Object.freeze({})
          function r(t) {
            return void 0 === t || null === t
          }
          function i(t) {
            return void 0 !== t && null !== t
          }
          function a(t) {
            return !0 === t
          }
          function o(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
          }
          function s(t) {
            return null !== t && "object" == typeof t
          }
          var u = Object.prototype.toString
          function c(t) {
            return "[object Object]" === u.call(t)
          }
          function l(t) {
            return "[object RegExp]" === u.call(t)
          }
          function f(t) {
            var e = parseFloat(String(t))
            return e >= 0 && Math.floor(e) === e && isFinite(t)
          }
          function d(t) {
            return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
          }
          function p(t) {
            var e = parseFloat(t)
            return isNaN(e) ? t : e
          }
          function h(t, e) {
            for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0
            return e
              ? function(t) {
                  return n[t.toLowerCase()]
                }
              : function(t) {
                  return n[t]
                }
          }
          var v = h("slot,component", !0),
            m = h("key,ref,slot,slot-scope,is")
          function g(t, e) {
            if (t.length) {
              var n = t.indexOf(e)
              if (n > -1) return t.splice(n, 1)
            }
          }
          var y = Object.prototype.hasOwnProperty
          function _(t, e) {
            return y.call(t, e)
          }
          function b(t) {
            var e = Object.create(null)
            return function(n) {
              return e[n] || (e[n] = t(n))
            }
          }
          var x = /-(\w)/g,
            w = b(function(t) {
              return t.replace(x, function(t, e) {
                return e ? e.toUpperCase() : ""
              })
            }),
            M = b(function(t) {
              return t.charAt(0).toUpperCase() + t.slice(1)
            }),
            O = /\B([A-Z])/g,
            C = b(function(t) {
              return t.replace(O, "-$1").toLowerCase()
            })
          var S = Function.prototype.bind
            ? function(t, e) {
                return t.bind(e)
              }
            : function(t, e) {
                function n(n) {
                  var r = arguments.length
                  return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e)
                }
                return (n._length = t.length), n
              }
          function j(t, e) {
            e = e || 0
            for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e]
            return r
          }
          function E(t, e) {
            for (var n in e) t[n] = e[n]
            return t
          }
          function L(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && E(e, t[n])
            return e
          }
          function T(t, e, n) {}
          var k = function(t, e, n) {
              return !1
            },
            A = function(t) {
              return t
            }
          function D(t, e) {
            if (t === e) return !0
            var n = s(t),
              r = s(e)
            if (!n || !r) return !n && !r && String(t) === String(e)
            try {
              var i = Array.isArray(t),
                a = Array.isArray(e)
              if (i && a)
                return (
                  t.length === e.length &&
                  t.every(function(t, n) {
                    return D(t, e[n])
                  })
                )
              if (i || a) return !1
              var o = Object.keys(t),
                u = Object.keys(e)
              return (
                o.length === u.length &&
                o.every(function(n) {
                  return D(t[n], e[n])
                })
              )
            } catch (t) {
              return !1
            }
          }
          function I(t, e) {
            for (var n = 0; n < t.length; n++) if (D(t[n], e)) return n
            return -1
          }
          function N(t) {
            var e = !1
            return function() {
              e || ((e = !0), t.apply(this, arguments))
            }
          }
          var $ = "data-server-rendered",
            P = ["component", "directive", "filter"],
            z = [
              "beforeCreate",
              "created",
              "beforeMount",
              "mounted",
              "beforeUpdate",
              "updated",
              "beforeDestroy",
              "destroyed",
              "activated",
              "deactivated",
              "errorCaptured",
            ],
            F = {
              optionMergeStrategies: Object.create(null),
              silent: !1,
              productionTip: !1,
              devtools: !1,
              performance: !1,
              errorHandler: null,
              warnHandler: null,
              ignoredElements: [],
              keyCodes: Object.create(null),
              isReservedTag: k,
              isReservedAttr: k,
              isUnknownElement: k,
              getTagNamespace: T,
              parsePlatformTagName: A,
              mustUseProp: k,
              _lifecycleHooks: z,
            }
          function R(t) {
            var e = (t + "").charCodeAt(0)
            return 36 === e || 95 === e
          }
          function U(t, e, n, r) {
            Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 })
          }
          var B = /[^\w.$]/
          var H,
            V = "__proto__" in {},
            Y = "undefined" != typeof window,
            q = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            W = q && WXEnvironment.platform.toLowerCase(),
            G = Y && window.navigator.userAgent.toLowerCase(),
            X = G && /msie|trident/.test(G),
            Q = G && G.indexOf("msie 9.0") > 0,
            J = G && G.indexOf("edge/") > 0,
            Z = (G && G.indexOf("android"), (G && /iphone|ipad|ipod|ios/.test(G)) || "ios" === W),
            K = (G && /chrome\/\d+/.test(G), {}.watch),
            tt = !1
          if (Y)
            try {
              var et = {}
              Object.defineProperty(et, "passive", {
                get: function() {
                  tt = !0
                },
              }),
                window.addEventListener("test-passive", null, et)
            } catch (t) {}
          var nt = function() {
              return void 0 === H && (H = !Y && !q && void 0 !== t && "server" === t.process.env.VUE_ENV), H
            },
            rt = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
          function it(t) {
            return "function" == typeof t && /native code/.test(t.toString())
          }
          var at,
            ot = "undefined" != typeof Symbol && it(Symbol) && "undefined" != typeof Reflect && it(Reflect.ownKeys)
          at =
            "undefined" != typeof Set && it(Set)
              ? Set
              : (function() {
                  function t() {
                    this.set = Object.create(null)
                  }
                  return (
                    (t.prototype.has = function(t) {
                      return !0 === this.set[t]
                    }),
                    (t.prototype.add = function(t) {
                      this.set[t] = !0
                    }),
                    (t.prototype.clear = function() {
                      this.set = Object.create(null)
                    }),
                    t
                  )
                })()
          var st = T,
            ut = 0,
            ct = function() {
              ;(this.id = ut++), (this.subs = [])
            }
          ;(ct.prototype.addSub = function(t) {
            this.subs.push(t)
          }),
            (ct.prototype.removeSub = function(t) {
              g(this.subs, t)
            }),
            (ct.prototype.depend = function() {
              ct.target && ct.target.addDep(this)
            }),
            (ct.prototype.notify = function() {
              for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update()
            }),
            (ct.target = null)
          var lt = []
          function ft(t) {
            ct.target && lt.push(ct.target), (ct.target = t)
          }
          function dt() {
            ct.target = lt.pop()
          }
          var pt = function(t, e, n, r, i, a, o, s) {
              ;(this.tag = t),
                (this.data = e),
                (this.children = n),
                (this.text = r),
                (this.elm = i),
                (this.ns = void 0),
                (this.context = a),
                (this.fnContext = void 0),
                (this.fnOptions = void 0),
                (this.fnScopeId = void 0),
                (this.key = e && e.key),
                (this.componentOptions = o),
                (this.componentInstance = void 0),
                (this.parent = void 0),
                (this.raw = !1),
                (this.isStatic = !1),
                (this.isRootInsert = !0),
                (this.isComment = !1),
                (this.isCloned = !1),
                (this.isOnce = !1),
                (this.asyncFactory = s),
                (this.asyncMeta = void 0),
                (this.isAsyncPlaceholder = !1)
            },
            ht = { child: { configurable: !0 } }
          ;(ht.child.get = function() {
            return this.componentInstance
          }),
            Object.defineProperties(pt.prototype, ht)
          var vt = function(t) {
            void 0 === t && (t = "")
            var e = new pt()
            return (e.text = t), (e.isComment = !0), e
          }
          function mt(t) {
            return new pt(void 0, void 0, void 0, String(t))
          }
          function gt(t) {
            var e = new pt(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory)
            return (
              (e.ns = t.ns),
              (e.isStatic = t.isStatic),
              (e.key = t.key),
              (e.isComment = t.isComment),
              (e.fnContext = t.fnContext),
              (e.fnOptions = t.fnOptions),
              (e.fnScopeId = t.fnScopeId),
              (e.isCloned = !0),
              e
            )
          }
          var yt = Array.prototype,
            _t = Object.create(yt)
          ;["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var e = yt[t]
            U(_t, t, function() {
              for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r]
              var i,
                a = e.apply(this, n),
                o = this.__ob__
              switch (t) {
                case "push":
                case "unshift":
                  i = n
                  break
                case "splice":
                  i = n.slice(2)
              }
              return i && o.observeArray(i), o.dep.notify(), a
            })
          })
          var bt = Object.getOwnPropertyNames(_t),
            xt = !0
          function wt(t) {
            xt = t
          }
          var Mt = function(t) {
            ;((this.value = t), (this.dep = new ct()), (this.vmCount = 0), U(t, "__ob__", this), Array.isArray(t))
              ? ((V ? Ot : Ct)(t, _t, bt), this.observeArray(t))
              : this.walk(t)
          }
          function Ot(t, e, n) {
            t.__proto__ = e
          }
          function Ct(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
              var a = n[r]
              U(t, a, e[a])
            }
          }
          function St(t, e) {
            var n
            if (s(t) && !(t instanceof pt))
              return (
                _(t, "__ob__") && t.__ob__ instanceof Mt
                  ? (n = t.__ob__)
                  : xt && !nt() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new Mt(t)),
                e && n && n.vmCount++,
                n
              )
          }
          function jt(t, e, n, r, i) {
            var a = new ct(),
              o = Object.getOwnPropertyDescriptor(t, e)
            if (!o || !1 !== o.configurable) {
              var s = o && o.get
              s || 2 !== arguments.length || (n = t[e])
              var u = o && o.set,
                c = !i && St(n)
              Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                  var e = s ? s.call(t) : n
                  return (
                    ct.target &&
                      (a.depend(),
                      c &&
                        (c.dep.depend(),
                        Array.isArray(e) &&
                          (function t(e) {
                            for (var n = void 0, r = 0, i = e.length; r < i; r++)
                              (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n)
                          })(e))),
                    e
                  )
                },
                set: function(e) {
                  var r = s ? s.call(t) : n
                  e === r || (e != e && r != r) || (u ? u.call(t, e) : (n = e), (c = !i && St(e)), a.notify())
                },
              })
            }
          }
          function Et(t, e, n) {
            if (Array.isArray(t) && f(e)) return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n
            if (e in t && !(e in Object.prototype)) return (t[e] = n), n
            var r = t.__ob__
            return t._isVue || (r && r.vmCount) ? n : r ? (jt(r.value, e, n), r.dep.notify(), n) : ((t[e] = n), n)
          }
          function Lt(t, e) {
            if (Array.isArray(t) && f(e)) t.splice(e, 1)
            else {
              var n = t.__ob__
              t._isVue || (n && n.vmCount) || (_(t, e) && (delete t[e], n && n.dep.notify()))
            }
          }
          ;(Mt.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) jt(t, e[n])
          }),
            (Mt.prototype.observeArray = function(t) {
              for (var e = 0, n = t.length; e < n; e++) St(t[e])
            })
          var Tt = F.optionMergeStrategies
          function kt(t, e) {
            if (!e) return t
            for (var n, r, i, a = Object.keys(e), o = 0; o < a.length; o++)
              (r = t[(n = a[o])]), (i = e[n]), _(t, n) ? c(r) && c(i) && kt(r, i) : Et(t, n, i)
            return t
          }
          function At(t, e, n) {
            return n
              ? function() {
                  var r = "function" == typeof e ? e.call(n, n) : e,
                    i = "function" == typeof t ? t.call(n, n) : t
                  return r ? kt(r, i) : i
                }
              : e
                ? t
                  ? function() {
                      return kt(
                        "function" == typeof e ? e.call(this, this) : e,
                        "function" == typeof t ? t.call(this, this) : t
                      )
                    }
                  : e
                : t
          }
          function Dt(t, e) {
            return e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t
          }
          function It(t, e, n, r) {
            var i = Object.create(t || null)
            return e ? E(i, e) : i
          }
          ;(Tt.data = function(t, e, n) {
            return n ? At(t, e, n) : e && "function" != typeof e ? t : At(t, e)
          }),
            z.forEach(function(t) {
              Tt[t] = Dt
            }),
            P.forEach(function(t) {
              Tt[t + "s"] = It
            }),
            (Tt.watch = function(t, e, n, r) {
              if ((t === K && (t = void 0), e === K && (e = void 0), !e)) return Object.create(t || null)
              if (!t) return e
              var i = {}
              for (var a in (E(i, t), e)) {
                var o = i[a],
                  s = e[a]
                o && !Array.isArray(o) && (o = [o]), (i[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s])
              }
              return i
            }),
            (Tt.props = Tt.methods = Tt.inject = Tt.computed = function(t, e, n, r) {
              if (!t) return e
              var i = Object.create(null)
              return E(i, t), e && E(i, e), i
            }),
            (Tt.provide = At)
          var Nt = function(t, e) {
            return void 0 === e ? t : e
          }
          function $t(t, e, n) {
            "function" == typeof e && (e = e.options),
              (function(t, e) {
                var n = t.props
                if (n) {
                  var r,
                    i,
                    a = {}
                  if (Array.isArray(n))
                    for (r = n.length; r--; ) "string" == typeof (i = n[r]) && (a[w(i)] = { type: null })
                  else if (c(n)) for (var o in n) (i = n[o]), (a[w(o)] = c(i) ? i : { type: i })
                  t.props = a
                }
              })(e),
              (function(t, e) {
                var n = t.inject
                if (n) {
                  var r = (t.inject = {})
                  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] }
                  else if (c(n))
                    for (var a in n) {
                      var o = n[a]
                      r[a] = c(o) ? E({ from: a }, o) : { from: o }
                    }
                }
              })(e),
              (function(t) {
                var e = t.directives
                if (e)
                  for (var n in e) {
                    var r = e[n]
                    "function" == typeof r && (e[n] = { bind: r, update: r })
                  }
              })(e)
            var r = e.extends
            if ((r && (t = $t(t, r, n)), e.mixins))
              for (var i = 0, a = e.mixins.length; i < a; i++) t = $t(t, e.mixins[i], n)
            var o,
              s = {}
            for (o in t) u(o)
            for (o in e) _(t, o) || u(o)
            function u(r) {
              var i = Tt[r] || Nt
              s[r] = i(t[r], e[r], n, r)
            }
            return s
          }
          function Pt(t, e, n, r) {
            if ("string" == typeof n) {
              var i = t[e]
              if (_(i, n)) return i[n]
              var a = w(n)
              if (_(i, a)) return i[a]
              var o = M(a)
              return _(i, o) ? i[o] : i[n] || i[a] || i[o]
            }
          }
          function zt(t, e, n, r) {
            var i = e[t],
              a = !_(n, t),
              o = n[t],
              s = Ut(Boolean, i.type)
            if (s > -1)
              if (a && !_(i, "default")) o = !1
              else if ("" === o || o === C(t)) {
                var u = Ut(String, i.type)
                ;(u < 0 || s < u) && (o = !0)
              }
            if (void 0 === o) {
              o = (function(t, e, n) {
                if (!_(e, "default")) return
                var r = e.default
                0
                if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n])
                  return t._props[n]
                return "function" == typeof r && "Function" !== Ft(e.type) ? r.call(t) : r
              })(r, i, t)
              var c = xt
              wt(!0), St(o), wt(c)
            }
            return o
          }
          function Ft(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/)
            return e ? e[1] : ""
          }
          function Rt(t, e) {
            return Ft(t) === Ft(e)
          }
          function Ut(t, e) {
            if (!Array.isArray(e)) return Rt(e, t) ? 0 : -1
            for (var n = 0, r = e.length; n < r; n++) if (Rt(e[n], t)) return n
            return -1
          }
          function Bt(t, e, n) {
            if (e)
              for (var r = e; (r = r.$parent); ) {
                var i = r.$options.errorCaptured
                if (i)
                  for (var a = 0; a < i.length; a++)
                    try {
                      if (!1 === i[a].call(r, t, e, n)) return
                    } catch (t) {
                      Ht(t, r, "errorCaptured hook")
                    }
              }
            Ht(t, e, n)
          }
          function Ht(t, e, n) {
            if (F.errorHandler)
              try {
                return F.errorHandler.call(null, t, e, n)
              } catch (t) {
                Vt(t, null, "config.errorHandler")
              }
            Vt(t, e, n)
          }
          function Vt(t, e, n) {
            if ((!Y && !q) || "undefined" == typeof console) throw t
            console.error(t)
          }
          var Yt,
            qt,
            Wt = [],
            Gt = !1
          function Xt() {
            Gt = !1
            var t = Wt.slice(0)
            Wt.length = 0
            for (var e = 0; e < t.length; e++) t[e]()
          }
          var Qt = !1
          if ("undefined" != typeof setImmediate && it(setImmediate))
            qt = function() {
              setImmediate(Xt)
            }
          else if (
            "undefined" == typeof MessageChannel ||
            (!it(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString())
          )
            qt = function() {
              setTimeout(Xt, 0)
            }
          else {
            var Jt = new MessageChannel(),
              Zt = Jt.port2
            ;(Jt.port1.onmessage = Xt),
              (qt = function() {
                Zt.postMessage(1)
              })
          }
          if ("undefined" != typeof Promise && it(Promise)) {
            var Kt = Promise.resolve()
            Yt = function() {
              Kt.then(Xt), Z && setTimeout(T)
            }
          } else Yt = qt
          function te(t, e) {
            var n
            if (
              (Wt.push(function() {
                if (t)
                  try {
                    t.call(e)
                  } catch (t) {
                    Bt(t, e, "nextTick")
                  }
                else n && n(e)
              }),
              Gt || ((Gt = !0), Qt ? qt() : Yt()),
              !t && "undefined" != typeof Promise)
            )
              return new Promise(function(t) {
                n = t
              })
          }
          var ee = new at()
          function ne(t) {
            !(function t(e, n) {
              var r, i
              var a = Array.isArray(e)
              if ((!a && !s(e)) || Object.isFrozen(e) || e instanceof pt) return
              if (e.__ob__) {
                var o = e.__ob__.dep.id
                if (n.has(o)) return
                n.add(o)
              }
              if (a) for (r = e.length; r--; ) t(e[r], n)
              else for (i = Object.keys(e), r = i.length; r--; ) t(e[i[r]], n)
            })(t, ee),
              ee.clear()
          }
          var re,
            ie = b(function(t) {
              var e = "&" === t.charAt(0),
                n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                r = "!" === (t = n ? t.slice(1) : t).charAt(0)
              return { name: (t = r ? t.slice(1) : t), once: n, capture: r, passive: e }
            })
          function ae(t) {
            function e() {
              var t = arguments,
                n = e.fns
              if (!Array.isArray(n)) return n.apply(null, arguments)
              for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t)
            }
            return (e.fns = t), e
          }
          function oe(t, e, n, i, a) {
            var o, s, u, c
            for (o in t)
              (s = t[o]),
                (u = e[o]),
                (c = ie(o)),
                r(s) ||
                  (r(u)
                    ? (r(s.fns) && (s = t[o] = ae(s)), n(c.name, s, c.once, c.capture, c.passive, c.params))
                    : s !== u && ((u.fns = s), (t[o] = u)))
            for (o in e) r(t[o]) && i((c = ie(o)).name, e[o], c.capture)
          }
          function se(t, e, n) {
            var o
            t instanceof pt && (t = t.data.hook || (t.data.hook = {}))
            var s = t[e]
            function u() {
              n.apply(this, arguments), g(o.fns, u)
            }
            r(s) ? (o = ae([u])) : i(s.fns) && a(s.merged) ? (o = s).fns.push(u) : (o = ae([s, u])),
              (o.merged = !0),
              (t[e] = o)
          }
          function ue(t, e, n, r, a) {
            if (i(e)) {
              if (_(e, n)) return (t[n] = e[n]), a || delete e[n], !0
              if (_(e, r)) return (t[n] = e[r]), a || delete e[r], !0
            }
            return !1
          }
          function ce(t) {
            return o(t)
              ? [mt(t)]
              : Array.isArray(t)
                ? (function t(e, n) {
                    var s = []
                    var u, c, l, f
                    for (u = 0; u < e.length; u++)
                      r((c = e[u])) ||
                        "boolean" == typeof c ||
                        ((l = s.length - 1),
                        (f = s[l]),
                        Array.isArray(c)
                          ? c.length > 0 &&
                            (le((c = t(c, (n || "") + "_" + u))[0]) &&
                              le(f) &&
                              ((s[l] = mt(f.text + c[0].text)), c.shift()),
                            s.push.apply(s, c))
                          : o(c)
                            ? le(f)
                              ? (s[l] = mt(f.text + c))
                              : "" !== c && s.push(mt(c))
                            : le(c) && le(f)
                              ? (s[l] = mt(f.text + c.text))
                              : (a(e._isVList) &&
                                  i(c.tag) &&
                                  r(c.key) &&
                                  i(n) &&
                                  (c.key = "__vlist" + n + "_" + u + "__"),
                                s.push(c)))
                    return s
                  })(t)
                : void 0
          }
          function le(t) {
            return i(t) && i(t.text) && !1 === t.isComment
          }
          function fe(t, e) {
            return (
              (t.__esModule || (ot && "Module" === t[Symbol.toStringTag])) && (t = t.default), s(t) ? e.extend(t) : t
            )
          }
          function de(t) {
            return t.isComment && t.asyncFactory
          }
          function pe(t) {
            if (Array.isArray(t))
              for (var e = 0; e < t.length; e++) {
                var n = t[e]
                if (i(n) && (i(n.componentOptions) || de(n))) return n
              }
          }
          function he(t, e, n) {
            n ? re.$once(t, e) : re.$on(t, e)
          }
          function ve(t, e) {
            re.$off(t, e)
          }
          function me(t, e, n) {
            ;(re = t), oe(e, n || {}, he, ve), (re = void 0)
          }
          function ge(t, e) {
            var n = {}
            if (!t) return n
            for (var r = 0, i = t.length; r < i; r++) {
              var a = t[r],
                o = a.data
              if (
                (o && o.attrs && o.attrs.slot && delete o.attrs.slot,
                (a.context !== e && a.fnContext !== e) || !o || null == o.slot)
              )
                (n.default || (n.default = [])).push(a)
              else {
                var s = o.slot,
                  u = n[s] || (n[s] = [])
                "template" === a.tag ? u.push.apply(u, a.children || []) : u.push(a)
              }
            }
            for (var c in n) n[c].every(ye) && delete n[c]
            return n
          }
          function ye(t) {
            return (t.isComment && !t.asyncFactory) || " " === t.text
          }
          function _e(t, e) {
            e = e || {}
            for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? _e(t[n], e) : (e[t[n].key] = t[n].fn)
            return e
          }
          var be = null
          function xe(t) {
            for (; t && (t = t.$parent); ) if (t._inactive) return !0
            return !1
          }
          function we(t, e) {
            if (e) {
              if (((t._directInactive = !1), xe(t))) return
            } else if (t._directInactive) return
            if (t._inactive || null === t._inactive) {
              t._inactive = !1
              for (var n = 0; n < t.$children.length; n++) we(t.$children[n])
              Me(t, "activated")
            }
          }
          function Me(t, e) {
            ft()
            var n = t.$options[e]
            if (n)
              for (var r = 0, i = n.length; r < i; r++)
                try {
                  n[r].call(t)
                } catch (n) {
                  Bt(n, t, e + " hook")
                }
            t._hasHookEvent && t.$emit("hook:" + e), dt()
          }
          var Oe = [],
            Ce = [],
            Se = {},
            je = !1,
            Ee = !1,
            Le = 0
          function Te() {
            var t, e
            for (
              Ee = !0,
                Oe.sort(function(t, e) {
                  return t.id - e.id
                }),
                Le = 0;
              Le < Oe.length;
              Le++
            )
              (e = (t = Oe[Le]).id), (Se[e] = null), t.run()
            var n = Ce.slice(),
              r = Oe.slice()
            ;(Le = Oe.length = Ce.length = 0),
              (Se = {}),
              (je = Ee = !1),
              (function(t) {
                for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), we(t[e], !0)
              })(n),
              (function(t) {
                var e = t.length
                for (; e--; ) {
                  var n = t[e],
                    r = n.vm
                  r._watcher === n && r._isMounted && Me(r, "updated")
                }
              })(r),
              rt && F.devtools && rt.emit("flush")
          }
          var ke = 0,
            Ae = function(t, e, n, r, i) {
              ;(this.vm = t),
                i && (t._watcher = this),
                t._watchers.push(this),
                r
                  ? ((this.deep = !!r.deep), (this.user = !!r.user), (this.lazy = !!r.lazy), (this.sync = !!r.sync))
                  : (this.deep = this.user = this.lazy = this.sync = !1),
                (this.cb = n),
                (this.id = ++ke),
                (this.active = !0),
                (this.dirty = this.lazy),
                (this.deps = []),
                (this.newDeps = []),
                (this.depIds = new at()),
                (this.newDepIds = new at()),
                (this.expression = ""),
                "function" == typeof e
                  ? (this.getter = e)
                  : ((this.getter = (function(t) {
                      if (!B.test(t)) {
                        var e = t.split(".")
                        return function(t) {
                          for (var n = 0; n < e.length; n++) {
                            if (!t) return
                            t = t[e[n]]
                          }
                          return t
                        }
                      }
                    })(e)),
                    this.getter || (this.getter = function() {})),
                (this.value = this.lazy ? void 0 : this.get())
            }
          ;(Ae.prototype.get = function() {
            var t
            ft(this)
            var e = this.vm
            try {
              t = this.getter.call(e, e)
            } catch (t) {
              if (!this.user) throw t
              Bt(t, e, 'getter for watcher "' + this.expression + '"')
            } finally {
              this.deep && ne(t), dt(), this.cleanupDeps()
            }
            return t
          }),
            (Ae.prototype.addDep = function(t) {
              var e = t.id
              this.newDepIds.has(e) ||
                (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }),
            (Ae.prototype.cleanupDeps = function() {
              for (var t = this.deps.length; t--; ) {
                var e = this.deps[t]
                this.newDepIds.has(e.id) || e.removeSub(this)
              }
              var n = this.depIds
              ;(this.depIds = this.newDepIds),
                (this.newDepIds = n),
                this.newDepIds.clear(),
                (n = this.deps),
                (this.deps = this.newDeps),
                (this.newDeps = n),
                (this.newDeps.length = 0)
            }),
            (Ae.prototype.update = function() {
              this.lazy
                ? (this.dirty = !0)
                : this.sync
                  ? this.run()
                  : (function(t) {
                      var e = t.id
                      if (null == Se[e]) {
                        if (((Se[e] = !0), Ee)) {
                          for (var n = Oe.length - 1; n > Le && Oe[n].id > t.id; ) n--
                          Oe.splice(n + 1, 0, t)
                        } else Oe.push(t)
                        je || ((je = !0), te(Te))
                      }
                    })(this)
            }),
            (Ae.prototype.run = function() {
              if (this.active) {
                var t = this.get()
                if (t !== this.value || s(t) || this.deep) {
                  var e = this.value
                  if (((this.value = t), this.user))
                    try {
                      this.cb.call(this.vm, t, e)
                    } catch (t) {
                      Bt(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    }
                  else this.cb.call(this.vm, t, e)
                }
              }
            }),
            (Ae.prototype.evaluate = function() {
              ;(this.value = this.get()), (this.dirty = !1)
            }),
            (Ae.prototype.depend = function() {
              for (var t = this.deps.length; t--; ) this.deps[t].depend()
            }),
            (Ae.prototype.teardown = function() {
              if (this.active) {
                this.vm._isBeingDestroyed || g(this.vm._watchers, this)
                for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this)
                this.active = !1
              }
            })
          var De = { enumerable: !0, configurable: !0, get: T, set: T }
          function Ie(t, e, n) {
            ;(De.get = function() {
              return this[e][n]
            }),
              (De.set = function(t) {
                this[e][n] = t
              }),
              Object.defineProperty(t, n, De)
          }
          function Ne(t) {
            t._watchers = []
            var e = t.$options
            e.props &&
              (function(t, e) {
                var n = t.$options.propsData || {},
                  r = (t._props = {}),
                  i = (t.$options._propKeys = [])
                t.$parent && wt(!1)
                var a = function(a) {
                  i.push(a)
                  var o = zt(a, e, n, t)
                  jt(r, a, o), a in t || Ie(t, "_props", a)
                }
                for (var o in e) a(o)
                wt(!0)
              })(t, e.props),
              e.methods &&
                (function(t, e) {
                  t.$options.props
                  for (var n in e) t[n] = null == e[n] ? T : S(e[n], t)
                })(t, e.methods),
              e.data
                ? (function(t) {
                    var e = t.$options.data
                    c(
                      (e = t._data =
                        "function" == typeof e
                          ? (function(t, e) {
                              ft()
                              try {
                                return t.call(e, e)
                              } catch (t) {
                                return Bt(t, e, "data()"), {}
                              } finally {
                                dt()
                              }
                            })(e, t)
                          : e || {})
                    ) || (e = {})
                    var n = Object.keys(e),
                      r = t.$options.props,
                      i = (t.$options.methods, n.length)
                    for (; i--; ) {
                      var a = n[i]
                      0, (r && _(r, a)) || R(a) || Ie(t, "_data", a)
                    }
                    St(e, !0)
                  })(t)
                : St((t._data = {}), !0),
              e.computed &&
                (function(t, e) {
                  var n = (t._computedWatchers = Object.create(null)),
                    r = nt()
                  for (var i in e) {
                    var a = e[i],
                      o = "function" == typeof a ? a : a.get
                    0, r || (n[i] = new Ae(t, o || T, T, $e)), i in t || Pe(t, i, a)
                  }
                })(t, e.computed),
              e.watch &&
                e.watch !== K &&
                (function(t, e) {
                  for (var n in e) {
                    var r = e[n]
                    if (Array.isArray(r)) for (var i = 0; i < r.length; i++) Fe(t, n, r[i])
                    else Fe(t, n, r)
                  }
                })(t, e.watch)
          }
          var $e = { lazy: !0 }
          function Pe(t, e, n) {
            var r = !nt()
            "function" == typeof n
              ? ((De.get = r ? ze(e) : n), (De.set = T))
              : ((De.get = n.get ? (r && !1 !== n.cache ? ze(e) : n.get) : T), (De.set = n.set ? n.set : T)),
              Object.defineProperty(t, e, De)
          }
          function ze(t) {
            return function() {
              var e = this._computedWatchers && this._computedWatchers[t]
              if (e) return e.dirty && e.evaluate(), ct.target && e.depend(), e.value
            }
          }
          function Fe(t, e, n, r) {
            return c(n) && ((r = n), (n = n.handler)), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
          }
          function Re(t, e) {
            if (t) {
              for (
                var n = Object.create(null),
                  r = ot
                    ? Reflect.ownKeys(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                      })
                    : Object.keys(t),
                  i = 0;
                i < r.length;
                i++
              ) {
                for (var a = r[i], o = t[a].from, s = e; s; ) {
                  if (s._provided && _(s._provided, o)) {
                    n[a] = s._provided[o]
                    break
                  }
                  s = s.$parent
                }
                if (!s)
                  if ("default" in t[a]) {
                    var u = t[a].default
                    n[a] = "function" == typeof u ? u.call(e) : u
                  } else 0
              }
              return n
            }
          }
          function Ue(t, e) {
            var n, r, a, o, u
            if (Array.isArray(t) || "string" == typeof t)
              for (n = new Array(t.length), r = 0, a = t.length; r < a; r++) n[r] = e(t[r], r)
            else if ("number" == typeof t) for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r)
            else if (s(t))
              for (o = Object.keys(t), n = new Array(o.length), r = 0, a = o.length; r < a; r++)
                (u = o[r]), (n[r] = e(t[u], u, r))
            return i(n) && (n._isVList = !0), n
          }
          function Be(t, e, n, r) {
            var i,
              a = this.$scopedSlots[t]
            if (a) (n = n || {}), r && (n = E(E({}, r), n)), (i = a(n) || e)
            else {
              var o = this.$slots[t]
              o && (o._rendered = !0), (i = o || e)
            }
            var s = n && n.slot
            return s ? this.$createElement("template", { slot: s }, i) : i
          }
          function He(t) {
            return Pt(this.$options, "filters", t) || A
          }
          function Ve(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
          }
          function Ye(t, e, n, r, i) {
            var a = F.keyCodes[e] || n
            return i && r && !F.keyCodes[e] ? Ve(i, r) : a ? Ve(a, t) : r ? C(r) !== e : void 0
          }
          function qe(t, e, n, r, i) {
            if (n)
              if (s(n)) {
                var a
                Array.isArray(n) && (n = L(n))
                var o = function(o) {
                  if ("class" === o || "style" === o || m(o)) a = t
                  else {
                    var s = t.attrs && t.attrs.type
                    a = r || F.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                  }
                  o in a ||
                    ((a[o] = n[o]),
                    i &&
                      ((t.on || (t.on = {}))["update:" + o] = function(t) {
                        n[o] = t
                      }))
                }
                for (var u in n) o(u)
              } else;
            return t
          }
          function We(t, e) {
            var n = this._staticTrees || (this._staticTrees = []),
              r = n[t]
            return r && !e
              ? r
              : (Xe(
                  (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this)),
                  "__static__" + t,
                  !1
                ),
                r)
          }
          function Ge(t, e, n) {
            return Xe(t, "__once__" + e + (n ? "_" + n : ""), !0), t
          }
          function Xe(t, e, n) {
            if (Array.isArray(t))
              for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Qe(t[r], e + "_" + r, n)
            else Qe(t, e, n)
          }
          function Qe(t, e, n) {
            ;(t.isStatic = !0), (t.key = e), (t.isOnce = n)
          }
          function Je(t, e) {
            if (e)
              if (c(e)) {
                var n = (t.on = t.on ? E({}, t.on) : {})
                for (var r in e) {
                  var i = n[r],
                    a = e[r]
                  n[r] = i ? [].concat(i, a) : a
                }
              } else;
            return t
          }
          function Ze(t) {
            ;(t._o = Ge),
              (t._n = p),
              (t._s = d),
              (t._l = Ue),
              (t._t = Be),
              (t._q = D),
              (t._i = I),
              (t._m = We),
              (t._f = He),
              (t._k = Ye),
              (t._b = qe),
              (t._v = mt),
              (t._e = vt),
              (t._u = _e),
              (t._g = Je)
          }
          function Ke(t, e, r, i, o) {
            var s,
              u = o.options
            _(i, "_uid") ? ((s = Object.create(i))._original = i) : ((s = i), (i = i._original))
            var c = a(u._compiled),
              l = !c
            ;(this.data = t),
              (this.props = e),
              (this.children = r),
              (this.parent = i),
              (this.listeners = t.on || n),
              (this.injections = Re(u.inject, i)),
              (this.slots = function() {
                return ge(r, i)
              }),
              c && ((this.$options = u), (this.$slots = this.slots()), (this.$scopedSlots = t.scopedSlots || n)),
              u._scopeId
                ? (this._c = function(t, e, n, r) {
                    var a = un(s, t, e, n, r, l)
                    return a && !Array.isArray(a) && ((a.fnScopeId = u._scopeId), (a.fnContext = i)), a
                  })
                : (this._c = function(t, e, n, r) {
                    return un(s, t, e, n, r, l)
                  })
          }
          function tn(t, e, n, r) {
            var i = gt(t)
            return (i.fnContext = n), (i.fnOptions = r), e.slot && ((i.data || (i.data = {})).slot = e.slot), i
          }
          function en(t, e) {
            for (var n in e) t[w(n)] = e[n]
          }
          Ze(Ke.prototype)
          var nn = {
              init: function(t, e, n, r) {
                if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                  var a = t
                  nn.prepatch(a, a)
                } else {
                  ;(t.componentInstance = (function(t, e, n, r) {
                    var a = { _isComponent: !0, parent: e, _parentVnode: t, _parentElm: n || null, _refElm: r || null },
                      o = t.data.inlineTemplate
                    i(o) && ((a.render = o.render), (a.staticRenderFns = o.staticRenderFns))
                    return new t.componentOptions.Ctor(a)
                  })(t, be, n, r)).$mount(e ? t.elm : void 0, e)
                }
              },
              prepatch: function(t, e) {
                var r = e.componentOptions
                !(function(t, e, r, i, a) {
                  var o = !!(a || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== n)
                  if (
                    ((t.$options._parentVnode = i),
                    (t.$vnode = i),
                    t._vnode && (t._vnode.parent = i),
                    (t.$options._renderChildren = a),
                    (t.$attrs = i.data.attrs || n),
                    (t.$listeners = r || n),
                    e && t.$options.props)
                  ) {
                    wt(!1)
                    for (var s = t._props, u = t.$options._propKeys || [], c = 0; c < u.length; c++) {
                      var l = u[c],
                        f = t.$options.props
                      s[l] = zt(l, f, e, t)
                    }
                    wt(!0), (t.$options.propsData = e)
                  }
                  r = r || n
                  var d = t.$options._parentListeners
                  ;(t.$options._parentListeners = r),
                    me(t, r, d),
                    o && ((t.$slots = ge(a, i.context)), t.$forceUpdate())
                })((e.componentInstance = t.componentInstance), r.propsData, r.listeners, e, r.children)
              },
              insert: function(t) {
                var e,
                  n = t.context,
                  r = t.componentInstance
                r._isMounted || ((r._isMounted = !0), Me(r, "mounted")),
                  t.data.keepAlive && (n._isMounted ? (((e = r)._inactive = !1), Ce.push(e)) : we(r, !0))
              },
              destroy: function(t) {
                var e = t.componentInstance
                e._isDestroyed ||
                  (t.data.keepAlive
                    ? (function t(e, n) {
                        if (!((n && ((e._directInactive = !0), xe(e))) || e._inactive)) {
                          e._inactive = !0
                          for (var r = 0; r < e.$children.length; r++) t(e.$children[r])
                          Me(e, "deactivated")
                        }
                      })(e, !0)
                    : e.$destroy())
              },
            },
            rn = Object.keys(nn)
          function an(t, e, o, u, c) {
            if (!r(t)) {
              var l = o.$options._base
              if ((s(t) && (t = l.extend(t)), "function" == typeof t)) {
                var f
                if (
                  r(t.cid) &&
                  void 0 ===
                    (t = (function(t, e, n) {
                      if (a(t.error) && i(t.errorComp)) return t.errorComp
                      if (i(t.resolved)) return t.resolved
                      if (a(t.loading) && i(t.loadingComp)) return t.loadingComp
                      if (!i(t.contexts)) {
                        var o = (t.contexts = [n]),
                          u = !0,
                          c = function() {
                            for (var t = 0, e = o.length; t < e; t++) o[t].$forceUpdate()
                          },
                          l = N(function(n) {
                            ;(t.resolved = fe(n, e)), u || c()
                          }),
                          f = N(function(e) {
                            i(t.errorComp) && ((t.error = !0), c())
                          }),
                          d = t(l, f)
                        return (
                          s(d) &&
                            ("function" == typeof d.then
                              ? r(t.resolved) && d.then(l, f)
                              : i(d.component) &&
                                "function" == typeof d.component.then &&
                                (d.component.then(l, f),
                                i(d.error) && (t.errorComp = fe(d.error, e)),
                                i(d.loading) &&
                                  ((t.loadingComp = fe(d.loading, e)),
                                  0 === d.delay
                                    ? (t.loading = !0)
                                    : setTimeout(function() {
                                        r(t.resolved) && r(t.error) && ((t.loading = !0), c())
                                      }, d.delay || 200)),
                                i(d.timeout) &&
                                  setTimeout(function() {
                                    r(t.resolved) && f(null)
                                  }, d.timeout))),
                          (u = !1),
                          t.loading ? t.loadingComp : t.resolved
                        )
                      }
                      t.contexts.push(n)
                    })((f = t), l, o))
                )
                  return (function(t, e, n, r, i) {
                    var a = vt()
                    return (a.asyncFactory = t), (a.asyncMeta = { data: e, context: n, children: r, tag: i }), a
                  })(f, e, o, u, c)
                ;(e = e || {}),
                  ln(t),
                  i(e.model) &&
                    (function(t, e) {
                      var n = (t.model && t.model.prop) || "value",
                        r = (t.model && t.model.event) || "input"
                      ;(e.props || (e.props = {}))[n] = e.model.value
                      var a = e.on || (e.on = {})
                      i(a[r]) ? (a[r] = [e.model.callback].concat(a[r])) : (a[r] = e.model.callback)
                    })(t.options, e)
                var d = (function(t, e, n) {
                  var a = e.options.props
                  if (!r(a)) {
                    var o = {},
                      s = t.attrs,
                      u = t.props
                    if (i(s) || i(u))
                      for (var c in a) {
                        var l = C(c)
                        ue(o, u, c, l, !0) || ue(o, s, c, l, !1)
                      }
                    return o
                  }
                })(e, t)
                if (a(t.options.functional))
                  return (function(t, e, r, a, o) {
                    var s = t.options,
                      u = {},
                      c = s.props
                    if (i(c)) for (var l in c) u[l] = zt(l, c, e || n)
                    else i(r.attrs) && en(u, r.attrs), i(r.props) && en(u, r.props)
                    var f = new Ke(r, u, o, a, t),
                      d = s.render.call(null, f._c, f)
                    if (d instanceof pt) return tn(d, r, f.parent, s)
                    if (Array.isArray(d)) {
                      for (var p = ce(d) || [], h = new Array(p.length), v = 0; v < p.length; v++)
                        h[v] = tn(p[v], r, f.parent, s)
                      return h
                    }
                  })(t, d, e, o, u)
                var p = e.on
                if (((e.on = e.nativeOn), a(t.options.abstract))) {
                  var h = e.slot
                  ;(e = {}), h && (e.slot = h)
                }
                !(function(t) {
                  for (var e = t.hook || (t.hook = {}), n = 0; n < rn.length; n++) {
                    var r = rn[n]
                    e[r] = nn[r]
                  }
                })(e)
                var v = t.options.name || c
                return new pt(
                  "vue-component-" + t.cid + (v ? "-" + v : ""),
                  e,
                  void 0,
                  void 0,
                  void 0,
                  o,
                  { Ctor: t, propsData: d, listeners: p, tag: c, children: u },
                  f
                )
              }
            }
          }
          var on = 1,
            sn = 2
          function un(t, e, n, u, c, l) {
            return (
              (Array.isArray(n) || o(n)) && ((c = u), (u = n), (n = void 0)),
              a(l) && (c = sn),
              (function(t, e, n, o, u) {
                if (i(n) && i(n.__ob__)) return vt()
                i(n) && i(n.is) && (e = n.is)
                if (!e) return vt()
                0
                Array.isArray(o) &&
                  "function" == typeof o[0] &&
                  (((n = n || {}).scopedSlots = { default: o[0] }), (o.length = 0))
                u === sn
                  ? (o = ce(o))
                  : u === on &&
                    (o = (function(t) {
                      for (var e = 0; e < t.length; e++)
                        if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t)
                      return t
                    })(o))
                var c, l
                if ("string" == typeof e) {
                  var f
                  ;(l = (t.$vnode && t.$vnode.ns) || F.getTagNamespace(e)),
                    (c = F.isReservedTag(e)
                      ? new pt(F.parsePlatformTagName(e), n, o, void 0, void 0, t)
                      : i((f = Pt(t.$options, "components", e)))
                        ? an(f, n, t, o, e)
                        : new pt(e, n, o, void 0, void 0, t))
                } else c = an(e, n, t, o)
                return Array.isArray(c)
                  ? c
                  : i(c)
                    ? (i(l) &&
                        (function t(e, n, o) {
                          e.ns = n
                          "foreignObject" === e.tag && ((n = void 0), (o = !0))
                          if (i(e.children))
                            for (var s = 0, u = e.children.length; s < u; s++) {
                              var c = e.children[s]
                              i(c.tag) && (r(c.ns) || (a(o) && "svg" !== c.tag)) && t(c, n, o)
                            }
                        })(c, l),
                      i(n) &&
                        (function(t) {
                          s(t.style) && ne(t.style)
                          s(t.class) && ne(t.class)
                        })(n),
                      c)
                    : vt()
              })(t, e, n, u, c)
            )
          }
          var cn = 0
          function ln(t) {
            var e = t.options
            if (t.super) {
              var n = ln(t.super)
              if (n !== t.superOptions) {
                t.superOptions = n
                var r = (function(t) {
                  var e,
                    n = t.options,
                    r = t.extendOptions,
                    i = t.sealedOptions
                  for (var a in n) n[a] !== i[a] && (e || (e = {}), (e[a] = fn(n[a], r[a], i[a])))
                  return e
                })(t)
                r && E(t.extendOptions, r), (e = t.options = $t(n, t.extendOptions)).name && (e.components[e.name] = t)
              }
            }
            return e
          }
          function fn(t, e, n) {
            if (Array.isArray(t)) {
              var r = []
              ;(n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e])
              for (var i = 0; i < t.length; i++) (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i])
              return r
            }
            return t
          }
          function dn(t) {
            this._init(t)
          }
          function pn(t) {
            t.cid = 0
            var e = 1
            t.extend = function(t) {
              t = t || {}
              var n = this,
                r = n.cid,
                i = t._Ctor || (t._Ctor = {})
              if (i[r]) return i[r]
              var a = t.name || n.options.name
              var o = function(t) {
                this._init(t)
              }
              return (
                ((o.prototype = Object.create(n.prototype)).constructor = o),
                (o.cid = e++),
                (o.options = $t(n.options, t)),
                (o.super = n),
                o.options.props &&
                  (function(t) {
                    var e = t.options.props
                    for (var n in e) Ie(t.prototype, "_props", n)
                  })(o),
                o.options.computed &&
                  (function(t) {
                    var e = t.options.computed
                    for (var n in e) Pe(t.prototype, n, e[n])
                  })(o),
                (o.extend = n.extend),
                (o.mixin = n.mixin),
                (o.use = n.use),
                P.forEach(function(t) {
                  o[t] = n[t]
                }),
                a && (o.options.components[a] = o),
                (o.superOptions = n.options),
                (o.extendOptions = t),
                (o.sealedOptions = E({}, o.options)),
                (i[r] = o),
                o
              )
            }
          }
          function hn(t) {
            return t && (t.Ctor.options.name || t.tag)
          }
          function vn(t, e) {
            return Array.isArray(t)
              ? t.indexOf(e) > -1
              : "string" == typeof t
                ? t.split(",").indexOf(e) > -1
                : !!l(t) && t.test(e)
          }
          function mn(t, e) {
            var n = t.cache,
              r = t.keys,
              i = t._vnode
            for (var a in n) {
              var o = n[a]
              if (o) {
                var s = hn(o.componentOptions)
                s && !e(s) && gn(n, a, r, i)
              }
            }
          }
          function gn(t, e, n, r) {
            var i = t[e]
            !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(), (t[e] = null), g(n, e)
          }
          !(function(t) {
            t.prototype._init = function(t) {
              var e = this
              ;(e._uid = cn++),
                (e._isVue = !0),
                t && t._isComponent
                  ? (function(t, e) {
                      var n = (t.$options = Object.create(t.constructor.options)),
                        r = e._parentVnode
                      ;(n.parent = e.parent),
                        (n._parentVnode = r),
                        (n._parentElm = e._parentElm),
                        (n._refElm = e._refElm)
                      var i = r.componentOptions
                      ;(n.propsData = i.propsData),
                        (n._parentListeners = i.listeners),
                        (n._renderChildren = i.children),
                        (n._componentTag = i.tag),
                        e.render && ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns))
                    })(e, t)
                  : (e.$options = $t(ln(e.constructor), t || {}, e)),
                (e._renderProxy = e),
                (e._self = e),
                (function(t) {
                  var e = t.$options,
                    n = e.parent
                  if (n && !e.abstract) {
                    for (; n.$options.abstract && n.$parent; ) n = n.$parent
                    n.$children.push(t)
                  }
                  ;(t.$parent = n),
                    (t.$root = n ? n.$root : t),
                    (t.$children = []),
                    (t.$refs = {}),
                    (t._watcher = null),
                    (t._inactive = null),
                    (t._directInactive = !1),
                    (t._isMounted = !1),
                    (t._isDestroyed = !1),
                    (t._isBeingDestroyed = !1)
                })(e),
                (function(t) {
                  ;(t._events = Object.create(null)), (t._hasHookEvent = !1)
                  var e = t.$options._parentListeners
                  e && me(t, e)
                })(e),
                (function(t) {
                  ;(t._vnode = null), (t._staticTrees = null)
                  var e = t.$options,
                    r = (t.$vnode = e._parentVnode),
                    i = r && r.context
                  ;(t.$slots = ge(e._renderChildren, i)),
                    (t.$scopedSlots = n),
                    (t._c = function(e, n, r, i) {
                      return un(t, e, n, r, i, !1)
                    }),
                    (t.$createElement = function(e, n, r, i) {
                      return un(t, e, n, r, i, !0)
                    })
                  var a = r && r.data
                  jt(t, "$attrs", (a && a.attrs) || n, null, !0), jt(t, "$listeners", e._parentListeners || n, null, !0)
                })(e),
                Me(e, "beforeCreate"),
                (function(t) {
                  var e = Re(t.$options.inject, t)
                  e &&
                    (wt(!1),
                    Object.keys(e).forEach(function(n) {
                      jt(t, n, e[n])
                    }),
                    wt(!0))
                })(e),
                Ne(e),
                (function(t) {
                  var e = t.$options.provide
                  e && (t._provided = "function" == typeof e ? e.call(t) : e)
                })(e),
                Me(e, "created"),
                e.$options.el && e.$mount(e.$options.el)
            }
          })(dn),
            (function(t) {
              var e = {
                  get: function() {
                    return this._data
                  },
                },
                n = {
                  get: function() {
                    return this._props
                  },
                }
              Object.defineProperty(t.prototype, "$data", e),
                Object.defineProperty(t.prototype, "$props", n),
                (t.prototype.$set = Et),
                (t.prototype.$delete = Lt),
                (t.prototype.$watch = function(t, e, n) {
                  if (c(e)) return Fe(this, t, e, n)
                  ;(n = n || {}).user = !0
                  var r = new Ae(this, t, e, n)
                  return (
                    n.immediate && e.call(this, r.value),
                    function() {
                      r.teardown()
                    }
                  )
                })
            })(dn),
            (function(t) {
              var e = /^hook:/
              ;(t.prototype.$on = function(t, n) {
                if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) this.$on(t[r], n)
                else (this._events[t] || (this._events[t] = [])).push(n), e.test(t) && (this._hasHookEvent = !0)
                return this
              }),
                (t.prototype.$once = function(t, e) {
                  var n = this
                  function r() {
                    n.$off(t, r), e.apply(n, arguments)
                  }
                  return (r.fn = e), n.$on(t, r), n
                }),
                (t.prototype.$off = function(t, e) {
                  var n = this
                  if (!arguments.length) return (n._events = Object.create(null)), n
                  if (Array.isArray(t)) {
                    for (var r = 0, i = t.length; r < i; r++) this.$off(t[r], e)
                    return n
                  }
                  var a = n._events[t]
                  if (!a) return n
                  if (!e) return (n._events[t] = null), n
                  if (e)
                    for (var o, s = a.length; s--; )
                      if ((o = a[s]) === e || o.fn === e) {
                        a.splice(s, 1)
                        break
                      }
                  return n
                }),
                (t.prototype.$emit = function(t) {
                  var e = this,
                    n = e._events[t]
                  if (n) {
                    n = n.length > 1 ? j(n) : n
                    for (var r = j(arguments, 1), i = 0, a = n.length; i < a; i++)
                      try {
                        n[i].apply(e, r)
                      } catch (n) {
                        Bt(n, e, 'event handler for "' + t + '"')
                      }
                  }
                  return e
                })
            })(dn),
            (function(t) {
              ;(t.prototype._update = function(t, e) {
                var n = this
                n._isMounted && Me(n, "beforeUpdate")
                var r = n.$el,
                  i = n._vnode,
                  a = be
                ;(be = n),
                  (n._vnode = t),
                  i
                    ? (n.$el = n.__patch__(i, t))
                    : ((n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm)),
                      (n.$options._parentElm = n.$options._refElm = null)),
                  (be = a),
                  r && (r.__vue__ = null),
                  n.$el && (n.$el.__vue__ = n),
                  n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
              }),
                (t.prototype.$forceUpdate = function() {
                  this._watcher && this._watcher.update()
                }),
                (t.prototype.$destroy = function() {
                  var t = this
                  if (!t._isBeingDestroyed) {
                    Me(t, "beforeDestroy"), (t._isBeingDestroyed = !0)
                    var e = t.$parent
                    !e || e._isBeingDestroyed || t.$options.abstract || g(e.$children, t),
                      t._watcher && t._watcher.teardown()
                    for (var n = t._watchers.length; n--; ) t._watchers[n].teardown()
                    t._data.__ob__ && t._data.__ob__.vmCount--,
                      (t._isDestroyed = !0),
                      t.__patch__(t._vnode, null),
                      Me(t, "destroyed"),
                      t.$off(),
                      t.$el && (t.$el.__vue__ = null),
                      t.$vnode && (t.$vnode.parent = null)
                  }
                })
            })(dn),
            (function(t) {
              Ze(t.prototype),
                (t.prototype.$nextTick = function(t) {
                  return te(t, this)
                }),
                (t.prototype._render = function() {
                  var t,
                    e = this,
                    r = e.$options,
                    i = r.render,
                    a = r._parentVnode
                  a && (e.$scopedSlots = a.data.scopedSlots || n), (e.$vnode = a)
                  try {
                    t = i.call(e._renderProxy, e.$createElement)
                  } catch (n) {
                    Bt(n, e, "render"), (t = e._vnode)
                  }
                  return t instanceof pt || (t = vt()), (t.parent = a), t
                })
            })(dn)
          var yn = [String, RegExp, Array],
            _n = {
              KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: { include: yn, exclude: yn, max: [String, Number] },
                created: function() {
                  ;(this.cache = Object.create(null)), (this.keys = [])
                },
                destroyed: function() {
                  for (var t in this.cache) gn(this.cache, t, this.keys)
                },
                mounted: function() {
                  var t = this
                  this.$watch("include", function(e) {
                    mn(t, function(t) {
                      return vn(e, t)
                    })
                  }),
                    this.$watch("exclude", function(e) {
                      mn(t, function(t) {
                        return !vn(e, t)
                      })
                    })
                },
                render: function() {
                  var t = this.$slots.default,
                    e = pe(t),
                    n = e && e.componentOptions
                  if (n) {
                    var r = hn(n),
                      i = this.include,
                      a = this.exclude
                    if ((i && (!r || !vn(i, r))) || (a && r && vn(a, r))) return e
                    var o = this.cache,
                      s = this.keys,
                      u = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key
                    o[u]
                      ? ((e.componentInstance = o[u].componentInstance), g(s, u), s.push(u))
                      : ((o[u] = e),
                        s.push(u),
                        this.max && s.length > parseInt(this.max) && gn(o, s[0], s, this._vnode)),
                      (e.data.keepAlive = !0)
                  }
                  return e || (t && t[0])
                },
              },
            }
          !(function(t) {
            var e = {
              get: function() {
                return F
              },
            }
            Object.defineProperty(t, "config", e),
              (t.util = { warn: st, extend: E, mergeOptions: $t, defineReactive: jt }),
              (t.set = Et),
              (t.delete = Lt),
              (t.nextTick = te),
              (t.options = Object.create(null)),
              P.forEach(function(e) {
                t.options[e + "s"] = Object.create(null)
              }),
              (t.options._base = t),
              E(t.options.components, _n),
              (function(t) {
                t.use = function(t) {
                  var e = this._installedPlugins || (this._installedPlugins = [])
                  if (e.indexOf(t) > -1) return this
                  var n = j(arguments, 1)
                  return (
                    n.unshift(this),
                    "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n),
                    e.push(t),
                    this
                  )
                }
              })(t),
              (function(t) {
                t.mixin = function(t) {
                  return (this.options = $t(this.options, t)), this
                }
              })(t),
              pn(t),
              (function(t) {
                P.forEach(function(e) {
                  t[e] = function(t, n) {
                    return n
                      ? ("component" === e && c(n) && ((n.name = n.name || t), (n = this.options._base.extend(n))),
                        "directive" === e && "function" == typeof n && (n = { bind: n, update: n }),
                        (this.options[e + "s"][t] = n),
                        n)
                      : this.options[e + "s"][t]
                  }
                })
              })(t)
          })(dn),
            Object.defineProperty(dn.prototype, "$isServer", { get: nt }),
            Object.defineProperty(dn.prototype, "$ssrContext", {
              get: function() {
                return this.$vnode && this.$vnode.ssrContext
              },
            }),
            Object.defineProperty(dn, "FunctionalRenderContext", { value: Ke }),
            (dn.version = "2.5.16")
          var bn = h("style,class"),
            xn = h("input,textarea,option,select,progress"),
            wn = function(t, e, n) {
              return (
                ("value" === n && xn(t) && "button" !== e) ||
                ("selected" === n && "option" === t) ||
                ("checked" === n && "input" === t) ||
                ("muted" === n && "video" === t)
              )
            },
            Mn = h("contenteditable,draggable,spellcheck"),
            On = h(
              "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
            ),
            Cn = "http://www.w3.org/1999/xlink",
            Sn = function(t) {
              return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            jn = function(t) {
              return Sn(t) ? t.slice(6, t.length) : ""
            },
            En = function(t) {
              return null == t || !1 === t
            }
          function Ln(t) {
            for (var e = t.data, n = t, r = t; i(r.componentInstance); )
              (r = r.componentInstance._vnode) && r.data && (e = Tn(r.data, e))
            for (; i((n = n.parent)); ) n && n.data && (e = Tn(e, n.data))
            return (function(t, e) {
              if (i(t) || i(e)) return kn(t, An(e))
              return ""
            })(e.staticClass, e.class)
          }
          function Tn(t, e) {
            return { staticClass: kn(t.staticClass, e.staticClass), class: i(t.class) ? [t.class, e.class] : e.class }
          }
          function kn(t, e) {
            return t ? (e ? t + " " + e : t) : e || ""
          }
          function An(t) {
            return Array.isArray(t)
              ? (function(t) {
                  for (var e, n = "", r = 0, a = t.length; r < a; r++)
                    i((e = An(t[r]))) && "" !== e && (n && (n += " "), (n += e))
                  return n
                })(t)
              : s(t)
                ? (function(t) {
                    var e = ""
                    for (var n in t) t[n] && (e && (e += " "), (e += n))
                    return e
                  })(t)
                : "string" == typeof t
                  ? t
                  : ""
          }
          var Dn = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
            In = h(
              "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
            ),
            Nn = h(
              "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
              !0
            ),
            $n = function(t) {
              return In(t) || Nn(t)
            }
          function Pn(t) {
            return Nn(t) ? "svg" : "math" === t ? "math" : void 0
          }
          var zn = Object.create(null)
          var Fn = h("text,number,password,search,email,tel,url")
          function Rn(t) {
            if ("string" == typeof t) {
              var e = document.querySelector(t)
              return e || document.createElement("div")
            }
            return t
          }
          var Un = Object.freeze({
              createElement: function(t, e) {
                var n = document.createElement(t)
                return "select" !== t
                  ? n
                  : (e.data &&
                      e.data.attrs &&
                      void 0 !== e.data.attrs.multiple &&
                      n.setAttribute("multiple", "multiple"),
                    n)
              },
              createElementNS: function(t, e) {
                return document.createElementNS(Dn[t], e)
              },
              createTextNode: function(t) {
                return document.createTextNode(t)
              },
              createComment: function(t) {
                return document.createComment(t)
              },
              insertBefore: function(t, e, n) {
                t.insertBefore(e, n)
              },
              removeChild: function(t, e) {
                t.removeChild(e)
              },
              appendChild: function(t, e) {
                t.appendChild(e)
              },
              parentNode: function(t) {
                return t.parentNode
              },
              nextSibling: function(t) {
                return t.nextSibling
              },
              tagName: function(t) {
                return t.tagName
              },
              setTextContent: function(t, e) {
                t.textContent = e
              },
              setStyleScope: function(t, e) {
                t.setAttribute(e, "")
              },
            }),
            Bn = {
              create: function(t, e) {
                Hn(e)
              },
              update: function(t, e) {
                t.data.ref !== e.data.ref && (Hn(t, !0), Hn(e))
              },
              destroy: function(t) {
                Hn(t, !0)
              },
            }
          function Hn(t, e) {
            var n = t.data.ref
            if (i(n)) {
              var r = t.context,
                a = t.componentInstance || t.elm,
                o = r.$refs
              e
                ? Array.isArray(o[n])
                  ? g(o[n], a)
                  : o[n] === a && (o[n] = void 0)
                : t.data.refInFor
                  ? Array.isArray(o[n])
                    ? o[n].indexOf(a) < 0 && o[n].push(a)
                    : (o[n] = [a])
                  : (o[n] = a)
            }
          }
          var Vn = new pt("", {}, []),
            Yn = ["create", "activate", "update", "remove", "destroy"]
          function qn(t, e) {
            return (
              t.key === e.key &&
              ((t.tag === e.tag &&
                t.isComment === e.isComment &&
                i(t.data) === i(e.data) &&
                (function(t, e) {
                  if ("input" !== t.tag) return !0
                  var n,
                    r = i((n = t.data)) && i((n = n.attrs)) && n.type,
                    a = i((n = e.data)) && i((n = n.attrs)) && n.type
                  return r === a || (Fn(r) && Fn(a))
                })(t, e)) ||
                (a(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && r(e.asyncFactory.error)))
            )
          }
          function Wn(t, e, n) {
            var r,
              a,
              o = {}
            for (r = e; r <= n; ++r) i((a = t[r].key)) && (o[a] = r)
            return o
          }
          var Gn = {
            create: Xn,
            update: Xn,
            destroy: function(t) {
              Xn(t, Vn)
            },
          }
          function Xn(t, e) {
            ;(t.data.directives || e.data.directives) &&
              (function(t, e) {
                var n,
                  r,
                  i,
                  a = t === Vn,
                  o = e === Vn,
                  s = Jn(t.data.directives, t.context),
                  u = Jn(e.data.directives, e.context),
                  c = [],
                  l = []
                for (n in u)
                  (r = s[n]),
                    (i = u[n]),
                    r
                      ? ((i.oldValue = r.value), Kn(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i))
                      : (Kn(i, "bind", e, t), i.def && i.def.inserted && c.push(i))
                if (c.length) {
                  var f = function() {
                    for (var n = 0; n < c.length; n++) Kn(c[n], "inserted", e, t)
                  }
                  a ? se(e, "insert", f) : f()
                }
                l.length &&
                  se(e, "postpatch", function() {
                    for (var n = 0; n < l.length; n++) Kn(l[n], "componentUpdated", e, t)
                  })
                if (!a) for (n in s) u[n] || Kn(s[n], "unbind", t, t, o)
              })(t, e)
          }
          var Qn = Object.create(null)
          function Jn(t, e) {
            var n,
              r,
              i = Object.create(null)
            if (!t) return i
            for (n = 0; n < t.length; n++)
              (r = t[n]).modifiers || (r.modifiers = Qn), (i[Zn(r)] = r), (r.def = Pt(e.$options, "directives", r.name))
            return i
          }
          function Zn(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
          }
          function Kn(t, e, n, r, i) {
            var a = t.def && t.def[e]
            if (a)
              try {
                a(n.elm, t, n, r, i)
              } catch (r) {
                Bt(r, n.context, "directive " + t.name + " " + e + " hook")
              }
          }
          var tr = [Bn, Gn]
          function er(t, e) {
            var n = e.componentOptions
            if (!((i(n) && !1 === n.Ctor.options.inheritAttrs) || (r(t.data.attrs) && r(e.data.attrs)))) {
              var a,
                o,
                s = e.elm,
                u = t.data.attrs || {},
                c = e.data.attrs || {}
              for (a in (i(c.__ob__) && (c = e.data.attrs = E({}, c)), c)) (o = c[a]), u[a] !== o && nr(s, a, o)
              for (a in ((X || J) && c.value !== u.value && nr(s, "value", c.value), u))
                r(c[a]) && (Sn(a) ? s.removeAttributeNS(Cn, jn(a)) : Mn(a) || s.removeAttribute(a))
            }
          }
          function nr(t, e, n) {
            t.tagName.indexOf("-") > -1
              ? rr(t, e, n)
              : On(e)
                ? En(n)
                  ? t.removeAttribute(e)
                  : ((n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e), t.setAttribute(e, n))
                : Mn(e)
                  ? t.setAttribute(e, En(n) || "false" === n ? "false" : "true")
                  : Sn(e)
                    ? En(n)
                      ? t.removeAttributeNS(Cn, jn(e))
                      : t.setAttributeNS(Cn, e, n)
                    : rr(t, e, n)
          }
          function rr(t, e, n) {
            if (En(n)) t.removeAttribute(e)
            else {
              if (X && !Q && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                var r = function(e) {
                  e.stopImmediatePropagation(), t.removeEventListener("input", r)
                }
                t.addEventListener("input", r), (t.__ieph = !0)
              }
              t.setAttribute(e, n)
            }
          }
          var ir = { create: er, update: er }
          function ar(t, e) {
            var n = e.elm,
              a = e.data,
              o = t.data
            if (!(r(a.staticClass) && r(a.class) && (r(o) || (r(o.staticClass) && r(o.class))))) {
              var s = Ln(e),
                u = n._transitionClasses
              i(u) && (s = kn(s, An(u))), s !== n._prevClass && (n.setAttribute("class", s), (n._prevClass = s))
            }
          }
          var or,
            sr,
            ur,
            cr,
            lr,
            fr,
            dr = { create: ar, update: ar },
            pr = /[\w).+\-_$\]]/
          function hr(t) {
            var e,
              n,
              r,
              i,
              a,
              o = !1,
              s = !1,
              u = !1,
              c = !1,
              l = 0,
              f = 0,
              d = 0,
              p = 0
            for (r = 0; r < t.length; r++)
              if (((n = e), (e = t.charCodeAt(r)), o)) 39 === e && 92 !== n && (o = !1)
              else if (s) 34 === e && 92 !== n && (s = !1)
              else if (u) 96 === e && 92 !== n && (u = !1)
              else if (c) 47 === e && 92 !== n && (c = !1)
              else if (124 !== e || 124 === t.charCodeAt(r + 1) || 124 === t.charCodeAt(r - 1) || l || f || d) {
                switch (e) {
                  case 34:
                    s = !0
                    break
                  case 39:
                    o = !0
                    break
                  case 96:
                    u = !0
                    break
                  case 40:
                    d++
                    break
                  case 41:
                    d--
                    break
                  case 91:
                    f++
                    break
                  case 93:
                    f--
                    break
                  case 123:
                    l++
                    break
                  case 125:
                    l--
                }
                if (47 === e) {
                  for (var h = r - 1, v = void 0; h >= 0 && " " === (v = t.charAt(h)); h--);
                  ;(v && pr.test(v)) || (c = !0)
                }
              } else void 0 === i ? ((p = r + 1), (i = t.slice(0, r).trim())) : m()
            function m() {
              ;(a || (a = [])).push(t.slice(p, r).trim()), (p = r + 1)
            }
            if ((void 0 === i ? (i = t.slice(0, r).trim()) : 0 !== p && m(), a))
              for (r = 0; r < a.length; r++) i = vr(i, a[r])
            return i
          }
          function vr(t, e) {
            var n = e.indexOf("(")
            if (n < 0) return '_f("' + e + '")(' + t + ")"
            var r = e.slice(0, n),
              i = e.slice(n + 1)
            return '_f("' + r + '")(' + t + (")" !== i ? "," + i : i)
          }
          function mr(t) {
            console.error("[Vue compiler]: " + t)
          }
          function gr(t, e) {
            return t
              ? t
                  .map(function(t) {
                    return t[e]
                  })
                  .filter(function(t) {
                    return t
                  })
              : []
          }
          function yr(t, e, n) {
            ;(t.props || (t.props = [])).push({ name: e, value: n }), (t.plain = !1)
          }
          function _r(t, e, n) {
            ;(t.attrs || (t.attrs = [])).push({ name: e, value: n }), (t.plain = !1)
          }
          function br(t, e, n) {
            ;(t.attrsMap[e] = n), t.attrsList.push({ name: e, value: n })
          }
          function xr(t, e, n, r, i, a) {
            ;(t.directives || (t.directives = [])).push({ name: e, rawName: n, value: r, arg: i, modifiers: a }),
              (t.plain = !1)
          }
          function wr(t, e, r, i, a, o) {
            var s
            ;(i = i || n).capture && (delete i.capture, (e = "!" + e)),
              i.once && (delete i.once, (e = "~" + e)),
              i.passive && (delete i.passive, (e = "&" + e)),
              "click" === e && (i.right ? ((e = "contextmenu"), delete i.right) : i.middle && (e = "mouseup")),
              i.native
                ? (delete i.native, (s = t.nativeEvents || (t.nativeEvents = {})))
                : (s = t.events || (t.events = {}))
            var u = { value: r.trim() }
            i !== n && (u.modifiers = i)
            var c = s[e]
            Array.isArray(c) ? (a ? c.unshift(u) : c.push(u)) : (s[e] = c ? (a ? [u, c] : [c, u]) : u), (t.plain = !1)
          }
          function Mr(t, e, n) {
            var r = Or(t, ":" + e) || Or(t, "v-bind:" + e)
            if (null != r) return hr(r)
            if (!1 !== n) {
              var i = Or(t, e)
              if (null != i) return JSON.stringify(i)
            }
          }
          function Or(t, e, n) {
            var r
            if (null != (r = t.attrsMap[e]))
              for (var i = t.attrsList, a = 0, o = i.length; a < o; a++)
                if (i[a].name === e) {
                  i.splice(a, 1)
                  break
                }
            return n && delete t.attrsMap[e], r
          }
          function Cr(t, e, n) {
            var r = n || {},
              i = r.number,
              a = "$$v"
            r.trim && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")")
            var o = Sr(e, a)
            t.model = { value: "(" + e + ")", expression: '"' + e + '"', callback: "function ($$v) {" + o + "}" }
          }
          function Sr(t, e) {
            var n = (function(t) {
              if (((t = t.trim()), (or = t.length), t.indexOf("[") < 0 || t.lastIndexOf("]") < or - 1))
                return (cr = t.lastIndexOf(".")) > -1
                  ? { exp: t.slice(0, cr), key: '"' + t.slice(cr + 1) + '"' }
                  : { exp: t, key: null }
              ;(sr = t), (cr = lr = fr = 0)
              for (; !Er(); ) Lr((ur = jr())) ? kr(ur) : 91 === ur && Tr(ur)
              return { exp: t.slice(0, lr), key: t.slice(lr + 1, fr) }
            })(t)
            return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")"
          }
          function jr() {
            return sr.charCodeAt(++cr)
          }
          function Er() {
            return cr >= or
          }
          function Lr(t) {
            return 34 === t || 39 === t
          }
          function Tr(t) {
            var e = 1
            for (lr = cr; !Er(); )
              if (Lr((t = jr()))) kr(t)
              else if ((91 === t && e++, 93 === t && e--, 0 === e)) {
                fr = cr
                break
              }
          }
          function kr(t) {
            for (var e = t; !Er() && (t = jr()) !== e; );
          }
          var Ar,
            Dr = "__r",
            Ir = "__c"
          function Nr(t, e, n, r, i) {
            var a
            ;(e =
              (a = e)._withTask ||
              (a._withTask = function() {
                Qt = !0
                var t = a.apply(null, arguments)
                return (Qt = !1), t
              })),
              n &&
                (e = (function(t, e, n) {
                  var r = Ar
                  return function i() {
                    null !== t.apply(null, arguments) && $r(e, i, n, r)
                  }
                })(e, t, r)),
              Ar.addEventListener(t, e, tt ? { capture: r, passive: i } : r)
          }
          function $r(t, e, n, r) {
            ;(r || Ar).removeEventListener(t, e._withTask || e, n)
          }
          function Pr(t, e) {
            if (!r(t.data.on) || !r(e.data.on)) {
              var n = e.data.on || {},
                a = t.data.on || {}
              ;(Ar = e.elm),
                (function(t) {
                  if (i(t[Dr])) {
                    var e = X ? "change" : "input"
                    ;(t[e] = [].concat(t[Dr], t[e] || [])), delete t[Dr]
                  }
                  i(t[Ir]) && ((t.change = [].concat(t[Ir], t.change || [])), delete t[Ir])
                })(n),
                oe(n, a, Nr, $r, e.context),
                (Ar = void 0)
            }
          }
          var zr = { create: Pr, update: Pr }
          function Fr(t, e) {
            if (!r(t.data.domProps) || !r(e.data.domProps)) {
              var n,
                a,
                o = e.elm,
                s = t.data.domProps || {},
                u = e.data.domProps || {}
              for (n in (i(u.__ob__) && (u = e.data.domProps = E({}, u)), s)) r(u[n]) && (o[n] = "")
              for (n in u) {
                if (((a = u[n]), "textContent" === n || "innerHTML" === n)) {
                  if ((e.children && (e.children.length = 0), a === s[n])) continue
                  1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                }
                if ("value" === n) {
                  o._value = a
                  var c = r(a) ? "" : String(a)
                  Rr(o, c) && (o.value = c)
                } else o[n] = a
              }
            }
          }
          function Rr(t, e) {
            return (
              !t.composing &&
              ("OPTION" === t.tagName ||
                (function(t, e) {
                  var n = !0
                  try {
                    n = document.activeElement !== t
                  } catch (t) {}
                  return n && t.value !== e
                })(t, e) ||
                (function(t, e) {
                  var n = t.value,
                    r = t._vModifiers
                  if (i(r)) {
                    if (r.lazy) return !1
                    if (r.number) return p(n) !== p(e)
                    if (r.trim) return n.trim() !== e.trim()
                  }
                  return n !== e
                })(t, e))
            )
          }
          var Ur = { create: Fr, update: Fr },
            Br = b(function(t) {
              var e = {},
                n = /:(.+)/
              return (
                t.split(/;(?![^(]*\))/g).forEach(function(t) {
                  if (t) {
                    var r = t.split(n)
                    r.length > 1 && (e[r[0].trim()] = r[1].trim())
                  }
                }),
                e
              )
            })
          function Hr(t) {
            var e = Vr(t.style)
            return t.staticStyle ? E(t.staticStyle, e) : e
          }
          function Vr(t) {
            return Array.isArray(t) ? L(t) : "string" == typeof t ? Br(t) : t
          }
          var Yr,
            qr = /^--/,
            Wr = /\s*!important$/,
            Gr = function(t, e, n) {
              if (qr.test(e)) t.style.setProperty(e, n)
              else if (Wr.test(n)) t.style.setProperty(e, n.replace(Wr, ""), "important")
              else {
                var r = Qr(e)
                if (Array.isArray(n)) for (var i = 0, a = n.length; i < a; i++) t.style[r] = n[i]
                else t.style[r] = n
              }
            },
            Xr = ["Webkit", "Moz", "ms"],
            Qr = b(function(t) {
              if (((Yr = Yr || document.createElement("div").style), "filter" !== (t = w(t)) && t in Yr)) return t
              for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Xr.length; n++) {
                var r = Xr[n] + e
                if (r in Yr) return r
              }
            })
          function Jr(t, e) {
            var n = e.data,
              a = t.data
            if (!(r(n.staticStyle) && r(n.style) && r(a.staticStyle) && r(a.style))) {
              var o,
                s,
                u = e.elm,
                c = a.staticStyle,
                l = a.normalizedStyle || a.style || {},
                f = c || l,
                d = Vr(e.data.style) || {}
              e.data.normalizedStyle = i(d.__ob__) ? E({}, d) : d
              var p = (function(t, e) {
                var n,
                  r = {}
                if (e)
                  for (var i = t; i.componentInstance; )
                    (i = i.componentInstance._vnode) && i.data && (n = Hr(i.data)) && E(r, n)
                ;(n = Hr(t.data)) && E(r, n)
                for (var a = t; (a = a.parent); ) a.data && (n = Hr(a.data)) && E(r, n)
                return r
              })(e, !0)
              for (s in f) r(p[s]) && Gr(u, s, "")
              for (s in p) (o = p[s]) !== f[s] && Gr(u, s, null == o ? "" : o)
            }
          }
          var Zr = { create: Jr, update: Jr }
          function Kr(t, e) {
            if (e && (e = e.trim()))
              if (t.classList)
                e.indexOf(" ") > -1
                  ? e.split(/\s+/).forEach(function(e) {
                      return t.classList.add(e)
                    })
                  : t.classList.add(e)
              else {
                var n = " " + (t.getAttribute("class") || "") + " "
                n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
              }
          }
          function ti(t, e) {
            if (e && (e = e.trim()))
              if (t.classList)
                e.indexOf(" ") > -1
                  ? e.split(/\s+/).forEach(function(e) {
                      return t.classList.remove(e)
                    })
                  : t.classList.remove(e),
                  t.classList.length || t.removeAttribute("class")
              else {
                for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0; )
                  n = n.replace(r, " ")
                ;(n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class")
              }
          }
          function ei(t) {
            if (t) {
              if ("object" == typeof t) {
                var e = {}
                return !1 !== t.css && E(e, ni(t.name || "v")), E(e, t), e
              }
              return "string" == typeof t ? ni(t) : void 0
            }
          }
          var ni = b(function(t) {
              return {
                enterClass: t + "-enter",
                enterToClass: t + "-enter-to",
                enterActiveClass: t + "-enter-active",
                leaveClass: t + "-leave",
                leaveToClass: t + "-leave-to",
                leaveActiveClass: t + "-leave-active",
              }
            }),
            ri = Y && !Q,
            ii = "transition",
            ai = "animation",
            oi = "transition",
            si = "transitionend",
            ui = "animation",
            ci = "animationend"
          ri &&
            (void 0 === window.ontransitionend &&
              void 0 !== window.onwebkittransitionend &&
              ((oi = "WebkitTransition"), (si = "webkitTransitionEnd")),
            void 0 === window.onanimationend &&
              void 0 !== window.onwebkitanimationend &&
              ((ui = "WebkitAnimation"), (ci = "webkitAnimationEnd")))
          var li = Y
            ? window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : setTimeout
            : function(t) {
                return t()
              }
          function fi(t) {
            li(function() {
              li(t)
            })
          }
          function di(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = [])
            n.indexOf(e) < 0 && (n.push(e), Kr(t, e))
          }
          function pi(t, e) {
            t._transitionClasses && g(t._transitionClasses, e), ti(t, e)
          }
          function hi(t, e, n) {
            var r = mi(t, e),
              i = r.type,
              a = r.timeout,
              o = r.propCount
            if (!i) return n()
            var s = i === ii ? si : ci,
              u = 0,
              c = function() {
                t.removeEventListener(s, l), n()
              },
              l = function(e) {
                e.target === t && ++u >= o && c()
              }
            setTimeout(function() {
              u < o && c()
            }, a + 1),
              t.addEventListener(s, l)
          }
          var vi = /\b(transform|all)(,|$)/
          function mi(t, e) {
            var n,
              r = window.getComputedStyle(t),
              i = r[oi + "Delay"].split(", "),
              a = r[oi + "Duration"].split(", "),
              o = gi(i, a),
              s = r[ui + "Delay"].split(", "),
              u = r[ui + "Duration"].split(", "),
              c = gi(s, u),
              l = 0,
              f = 0
            return (
              e === ii
                ? o > 0 && ((n = ii), (l = o), (f = a.length))
                : e === ai
                  ? c > 0 && ((n = ai), (l = c), (f = u.length))
                  : (f = (n = (l = Math.max(o, c)) > 0 ? (o > c ? ii : ai) : null)
                      ? n === ii
                        ? a.length
                        : u.length
                      : 0),
              { type: n, timeout: l, propCount: f, hasTransform: n === ii && vi.test(r[oi + "Property"]) }
            )
          }
          function gi(t, e) {
            for (; t.length < e.length; ) t = t.concat(t)
            return Math.max.apply(
              null,
              e.map(function(e, n) {
                return yi(e) + yi(t[n])
              })
            )
          }
          function yi(t) {
            return 1e3 * Number(t.slice(0, -1))
          }
          function _i(t, e) {
            var n = t.elm
            i(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb())
            var a = ei(t.data.transition)
            if (!r(a) && !i(n._enterCb) && 1 === n.nodeType) {
              for (
                var o = a.css,
                  u = a.type,
                  c = a.enterClass,
                  l = a.enterToClass,
                  f = a.enterActiveClass,
                  d = a.appearClass,
                  h = a.appearToClass,
                  v = a.appearActiveClass,
                  m = a.beforeEnter,
                  g = a.enter,
                  y = a.afterEnter,
                  _ = a.enterCancelled,
                  b = a.beforeAppear,
                  x = a.appear,
                  w = a.afterAppear,
                  M = a.appearCancelled,
                  O = a.duration,
                  C = be,
                  S = be.$vnode;
                S && S.parent;

              )
                C = (S = S.parent).context
              var j = !C._isMounted || !t.isRootInsert
              if (!j || x || "" === x) {
                var E = j && d ? d : c,
                  L = j && v ? v : f,
                  T = j && h ? h : l,
                  k = (j && b) || m,
                  A = j && "function" == typeof x ? x : g,
                  D = (j && w) || y,
                  I = (j && M) || _,
                  $ = p(s(O) ? O.enter : O)
                0
                var P = !1 !== o && !Q,
                  z = wi(A),
                  F = (n._enterCb = N(function() {
                    P && (pi(n, T), pi(n, L)), F.cancelled ? (P && pi(n, E), I && I(n)) : D && D(n), (n._enterCb = null)
                  }))
                t.data.show ||
                  se(t, "insert", function() {
                    var e = n.parentNode,
                      r = e && e._pending && e._pending[t.key]
                    r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, F)
                  }),
                  k && k(n),
                  P &&
                    (di(n, E),
                    di(n, L),
                    fi(function() {
                      pi(n, E), F.cancelled || (di(n, T), z || (xi($) ? setTimeout(F, $) : hi(n, u, F)))
                    })),
                  t.data.show && (e && e(), A && A(n, F)),
                  P || z || F()
              }
            }
          }
          function bi(t, e) {
            var n = t.elm
            i(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb())
            var a = ei(t.data.transition)
            if (r(a) || 1 !== n.nodeType) return e()
            if (!i(n._leaveCb)) {
              var o = a.css,
                u = a.type,
                c = a.leaveClass,
                l = a.leaveToClass,
                f = a.leaveActiveClass,
                d = a.beforeLeave,
                h = a.leave,
                v = a.afterLeave,
                m = a.leaveCancelled,
                g = a.delayLeave,
                y = a.duration,
                _ = !1 !== o && !Q,
                b = wi(h),
                x = p(s(y) ? y.leave : y)
              0
              var w = (n._leaveCb = N(function() {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null),
                  _ && (pi(n, l), pi(n, f)),
                  w.cancelled ? (_ && pi(n, c), m && m(n)) : (e(), v && v(n)),
                  (n._leaveCb = null)
              }))
              g ? g(M) : M()
            }
            function M() {
              w.cancelled ||
                (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t),
                d && d(n),
                _ &&
                  (di(n, c),
                  di(n, f),
                  fi(function() {
                    pi(n, c), w.cancelled || (di(n, l), b || (xi(x) ? setTimeout(w, x) : hi(n, u, w)))
                  })),
                h && h(n, w),
                _ || b || w())
            }
          }
          function xi(t) {
            return "number" == typeof t && !isNaN(t)
          }
          function wi(t) {
            if (r(t)) return !1
            var e = t.fns
            return i(e) ? wi(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
          }
          function Mi(t, e) {
            !0 !== e.data.show && _i(e)
          }
          var Oi = (function(t) {
            var e,
              n,
              s = {},
              u = t.modules,
              c = t.nodeOps
            for (e = 0; e < Yn.length; ++e)
              for (s[Yn[e]] = [], n = 0; n < u.length; ++n) i(u[n][Yn[e]]) && s[Yn[e]].push(u[n][Yn[e]])
            function l(t) {
              var e = c.parentNode(t)
              i(e) && c.removeChild(e, t)
            }
            function f(t, e, n, r, o, u, l) {
              if (
                (i(t.elm) && i(u) && (t = u[l] = gt(t)),
                (t.isRootInsert = !o),
                !(function(t, e, n, r) {
                  var o = t.data
                  if (i(o)) {
                    var u = i(t.componentInstance) && o.keepAlive
                    if ((i((o = o.hook)) && i((o = o.init)) && o(t, !1, n, r), i(t.componentInstance)))
                      return (
                        d(t, e),
                        a(u) &&
                          (function(t, e, n, r) {
                            for (var a, o = t; o.componentInstance; )
                              if (((o = o.componentInstance._vnode), i((a = o.data)) && i((a = a.transition)))) {
                                for (a = 0; a < s.activate.length; ++a) s.activate[a](Vn, o)
                                e.push(o)
                                break
                              }
                            p(n, t.elm, r)
                          })(t, e, n, r),
                        !0
                      )
                  }
                })(t, e, n, r))
              ) {
                var f = t.data,
                  h = t.children,
                  m = t.tag
                i(m)
                  ? ((t.elm = t.ns ? c.createElementNS(t.ns, m) : c.createElement(m, t)),
                    y(t),
                    v(t, h, e),
                    i(f) && g(t, e),
                    p(n, t.elm, r))
                  : a(t.isComment)
                    ? ((t.elm = c.createComment(t.text)), p(n, t.elm, r))
                    : ((t.elm = c.createTextNode(t.text)), p(n, t.elm, r))
              }
            }
            function d(t, e) {
              i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), (t.data.pendingInsert = null)),
                (t.elm = t.componentInstance.$el),
                m(t) ? (g(t, e), y(t)) : (Hn(t), e.push(t))
            }
            function p(t, e, n) {
              i(t) && (i(n) ? n.parentNode === t && c.insertBefore(t, e, n) : c.appendChild(t, e))
            }
            function v(t, e, n) {
              if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) f(e[r], n, t.elm, null, !0, e, r)
              else o(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)))
            }
            function m(t) {
              for (; t.componentInstance; ) t = t.componentInstance._vnode
              return i(t.tag)
            }
            function g(t, n) {
              for (var r = 0; r < s.create.length; ++r) s.create[r](Vn, t)
              i((e = t.data.hook)) && (i(e.create) && e.create(Vn, t), i(e.insert) && n.push(t))
            }
            function y(t) {
              var e
              if (i((e = t.fnScopeId))) c.setStyleScope(t.elm, e)
              else
                for (var n = t; n; )
                  i((e = n.context)) && i((e = e.$options._scopeId)) && c.setStyleScope(t.elm, e), (n = n.parent)
              i((e = be)) &&
                e !== t.context &&
                e !== t.fnContext &&
                i((e = e.$options._scopeId)) &&
                c.setStyleScope(t.elm, e)
            }
            function _(t, e, n, r, i, a) {
              for (; r <= i; ++r) f(n[r], a, t, e, !1, n, r)
            }
            function b(t) {
              var e,
                n,
                r = t.data
              if (i(r))
                for (i((e = r.hook)) && i((e = e.destroy)) && e(t), e = 0; e < s.destroy.length; ++e) s.destroy[e](t)
              if (i((e = t.children))) for (n = 0; n < t.children.length; ++n) b(t.children[n])
            }
            function x(t, e, n, r) {
              for (; n <= r; ++n) {
                var a = e[n]
                i(a) && (i(a.tag) ? (w(a), b(a)) : l(a.elm))
              }
            }
            function w(t, e) {
              if (i(e) || i(t.data)) {
                var n,
                  r = s.remove.length + 1
                for (
                  i(e)
                    ? (e.listeners += r)
                    : (e = (function(t, e) {
                        function n() {
                          0 == --n.listeners && l(t)
                        }
                        return (n.listeners = e), n
                      })(t.elm, r)),
                    i((n = t.componentInstance)) && i((n = n._vnode)) && i(n.data) && w(n, e),
                    n = 0;
                  n < s.remove.length;
                  ++n
                )
                  s.remove[n](t, e)
                i((n = t.data.hook)) && i((n = n.remove)) ? n(t, e) : e()
              } else l(t.elm)
            }
            function M(t, e, n, r) {
              for (var a = n; a < r; a++) {
                var o = e[a]
                if (i(o) && qn(t, o)) return a
              }
            }
            function O(t, e, n, o) {
              if (t !== e) {
                var u = (e.elm = t.elm)
                if (a(t.isAsyncPlaceholder)) i(e.asyncFactory.resolved) ? j(t.elm, e, n) : (e.isAsyncPlaceholder = !0)
                else if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce)))
                  e.componentInstance = t.componentInstance
                else {
                  var l,
                    d = e.data
                  i(d) && i((l = d.hook)) && i((l = l.prepatch)) && l(t, e)
                  var p = t.children,
                    h = e.children
                  if (i(d) && m(e)) {
                    for (l = 0; l < s.update.length; ++l) s.update[l](t, e)
                    i((l = d.hook)) && i((l = l.update)) && l(t, e)
                  }
                  r(e.text)
                    ? i(p) && i(h)
                      ? p !== h &&
                        (function(t, e, n, a, o) {
                          for (
                            var s,
                              u,
                              l,
                              d = 0,
                              p = 0,
                              h = e.length - 1,
                              v = e[0],
                              m = e[h],
                              g = n.length - 1,
                              y = n[0],
                              b = n[g],
                              w = !o;
                            d <= h && p <= g;

                          )
                            r(v)
                              ? (v = e[++d])
                              : r(m)
                                ? (m = e[--h])
                                : qn(v, y)
                                  ? (O(v, y, a), (v = e[++d]), (y = n[++p]))
                                  : qn(m, b)
                                    ? (O(m, b, a), (m = e[--h]), (b = n[--g]))
                                    : qn(v, b)
                                      ? (O(v, b, a),
                                        w && c.insertBefore(t, v.elm, c.nextSibling(m.elm)),
                                        (v = e[++d]),
                                        (b = n[--g]))
                                      : qn(m, y)
                                        ? (O(m, y, a), w && c.insertBefore(t, m.elm, v.elm), (m = e[--h]), (y = n[++p]))
                                        : (r(s) && (s = Wn(e, d, h)),
                                          r((u = i(y.key) ? s[y.key] : M(y, e, d, h)))
                                            ? f(y, a, t, v.elm, !1, n, p)
                                            : qn((l = e[u]), y)
                                              ? (O(l, y, a), (e[u] = void 0), w && c.insertBefore(t, l.elm, v.elm))
                                              : f(y, a, t, v.elm, !1, n, p),
                                          (y = n[++p]))
                          d > h ? _(t, r(n[g + 1]) ? null : n[g + 1].elm, n, p, g, a) : p > g && x(0, e, d, h)
                        })(u, p, h, n, o)
                      : i(h)
                        ? (i(t.text) && c.setTextContent(u, ""), _(u, null, h, 0, h.length - 1, n))
                        : i(p)
                          ? x(0, p, 0, p.length - 1)
                          : i(t.text) && c.setTextContent(u, "")
                    : t.text !== e.text && c.setTextContent(u, e.text),
                    i(d) && i((l = d.hook)) && i((l = l.postpatch)) && l(t, e)
                }
              }
            }
            function C(t, e, n) {
              if (a(n) && i(t.parent)) t.parent.data.pendingInsert = e
              else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
            }
            var S = h("attrs,class,staticClass,staticStyle,key")
            function j(t, e, n, r) {
              var o,
                s = e.tag,
                u = e.data,
                c = e.children
              if (((r = r || (u && u.pre)), (e.elm = t), a(e.isComment) && i(e.asyncFactory)))
                return (e.isAsyncPlaceholder = !0), !0
              if (i(u) && (i((o = u.hook)) && i((o = o.init)) && o(e, !0), i((o = e.componentInstance))))
                return d(e, n), !0
              if (i(s)) {
                if (i(c))
                  if (t.hasChildNodes())
                    if (i((o = u)) && i((o = o.domProps)) && i((o = o.innerHTML))) {
                      if (o !== t.innerHTML) return !1
                    } else {
                      for (var l = !0, f = t.firstChild, p = 0; p < c.length; p++) {
                        if (!f || !j(f, c[p], n, r)) {
                          l = !1
                          break
                        }
                        f = f.nextSibling
                      }
                      if (!l || f) return !1
                    }
                  else v(e, c, n)
                if (i(u)) {
                  var h = !1
                  for (var m in u)
                    if (!S(m)) {
                      ;(h = !0), g(e, n)
                      break
                    }
                  !h && u.class && ne(u.class)
                }
              } else t.data !== e.text && (t.data = e.text)
              return !0
            }
            return function(t, e, n, o, u, l) {
              if (!r(e)) {
                var d,
                  p = !1,
                  h = []
                if (r(t)) (p = !0), f(e, h, u, l)
                else {
                  var v = i(t.nodeType)
                  if (!v && qn(t, e)) O(t, e, h, o)
                  else {
                    if (v) {
                      if (
                        (1 === t.nodeType && t.hasAttribute($) && (t.removeAttribute($), (n = !0)), a(n) && j(t, e, h))
                      )
                        return C(e, h, !0), t
                      ;(d = t), (t = new pt(c.tagName(d).toLowerCase(), {}, [], void 0, d))
                    }
                    var g = t.elm,
                      y = c.parentNode(g)
                    if ((f(e, h, g._leaveCb ? null : y, c.nextSibling(g)), i(e.parent)))
                      for (var _ = e.parent, w = m(e); _; ) {
                        for (var M = 0; M < s.destroy.length; ++M) s.destroy[M](_)
                        if (((_.elm = e.elm), w)) {
                          for (var S = 0; S < s.create.length; ++S) s.create[S](Vn, _)
                          var E = _.data.hook.insert
                          if (E.merged) for (var L = 1; L < E.fns.length; L++) E.fns[L]()
                        } else Hn(_)
                        _ = _.parent
                      }
                    i(y) ? x(0, [t], 0, 0) : i(t.tag) && b(t)
                  }
                }
                return C(e, h, p), e.elm
              }
              i(t) && b(t)
            }
          })({
            nodeOps: Un,
            modules: [
              ir,
              dr,
              zr,
              Ur,
              Zr,
              Y
                ? {
                    create: Mi,
                    activate: Mi,
                    remove: function(t, e) {
                      !0 !== t.data.show ? bi(t, e) : e()
                    },
                  }
                : {},
            ].concat(tr),
          })
          Q &&
            document.addEventListener("selectionchange", function() {
              var t = document.activeElement
              t && t.vmodel && Ai(t, "input")
            })
          var Ci = {
            inserted: function(t, e, n, r) {
              "select" === n.tag
                ? (r.elm && !r.elm._vOptions
                    ? se(n, "postpatch", function() {
                        Ci.componentUpdated(t, e, n)
                      })
                    : Si(t, e, n.context),
                  (t._vOptions = [].map.call(t.options, Li)))
                : ("textarea" === n.tag || Fn(t.type)) &&
                  ((t._vModifiers = e.modifiers),
                  e.modifiers.lazy ||
                    (t.addEventListener("compositionstart", Ti),
                    t.addEventListener("compositionend", ki),
                    t.addEventListener("change", ki),
                    Q && (t.vmodel = !0)))
            },
            componentUpdated: function(t, e, n) {
              if ("select" === n.tag) {
                Si(t, e, n.context)
                var r = t._vOptions,
                  i = (t._vOptions = [].map.call(t.options, Li))
                if (
                  i.some(function(t, e) {
                    return !D(t, r[e])
                  })
                )
                  (t.multiple
                    ? e.value.some(function(t) {
                        return Ei(t, i)
                      })
                    : e.value !== e.oldValue && Ei(e.value, i)) && Ai(t, "change")
              }
            },
          }
          function Si(t, e, n) {
            ji(t, e, n),
              (X || J) &&
                setTimeout(function() {
                  ji(t, e, n)
                }, 0)
          }
          function ji(t, e, n) {
            var r = e.value,
              i = t.multiple
            if (!i || Array.isArray(r)) {
              for (var a, o, s = 0, u = t.options.length; s < u; s++)
                if (((o = t.options[s]), i)) (a = I(r, Li(o)) > -1), o.selected !== a && (o.selected = a)
                else if (D(Li(o), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s))
              i || (t.selectedIndex = -1)
            }
          }
          function Ei(t, e) {
            return e.every(function(e) {
              return !D(e, t)
            })
          }
          function Li(t) {
            return "_value" in t ? t._value : t.value
          }
          function Ti(t) {
            t.target.composing = !0
          }
          function ki(t) {
            t.target.composing && ((t.target.composing = !1), Ai(t.target, "input"))
          }
          function Ai(t, e) {
            var n = document.createEvent("HTMLEvents")
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
          }
          function Di(t) {
            return !t.componentInstance || (t.data && t.data.transition) ? t : Di(t.componentInstance._vnode)
          }
          var Ii = {
              model: Ci,
              show: {
                bind: function(t, e, n) {
                  var r = e.value,
                    i = (n = Di(n)).data && n.data.transition,
                    a = (t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display)
                  r && i
                    ? ((n.data.show = !0),
                      _i(n, function() {
                        t.style.display = a
                      }))
                    : (t.style.display = r ? a : "none")
                },
                update: function(t, e, n) {
                  var r = e.value
                  !r != !e.oldValue &&
                    ((n = Di(n)).data && n.data.transition
                      ? ((n.data.show = !0),
                        r
                          ? _i(n, function() {
                              t.style.display = t.__vOriginalDisplay
                            })
                          : bi(n, function() {
                              t.style.display = "none"
                            }))
                      : (t.style.display = r ? t.__vOriginalDisplay : "none"))
                },
                unbind: function(t, e, n, r, i) {
                  i || (t.style.display = t.__vOriginalDisplay)
                },
              },
            },
            Ni = {
              name: String,
              appear: Boolean,
              css: Boolean,
              mode: String,
              type: String,
              enterClass: String,
              leaveClass: String,
              enterToClass: String,
              leaveToClass: String,
              enterActiveClass: String,
              leaveActiveClass: String,
              appearClass: String,
              appearActiveClass: String,
              appearToClass: String,
              duration: [Number, String, Object],
            }
          function $i(t) {
            var e = t && t.componentOptions
            return e && e.Ctor.options.abstract ? $i(pe(e.children)) : t
          }
          function Pi(t) {
            var e = {},
              n = t.$options
            for (var r in n.propsData) e[r] = t[r]
            var i = n._parentListeners
            for (var a in i) e[w(a)] = i[a]
            return e
          }
          function zi(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData })
          }
          var Fi = {
              name: "transition",
              props: Ni,
              abstract: !0,
              render: function(t) {
                var e = this,
                  n = this.$slots.default
                if (
                  n &&
                  (n = n.filter(function(t) {
                    return t.tag || de(t)
                  })).length
                ) {
                  0
                  var r = this.mode
                  0
                  var i = n[0]
                  if (
                    (function(t) {
                      for (; (t = t.parent); ) if (t.data.transition) return !0
                    })(this.$vnode)
                  )
                    return i
                  var a = $i(i)
                  if (!a) return i
                  if (this._leaving) return zi(t, i)
                  var s = "__transition-" + this._uid + "-"
                  a.key =
                    null == a.key
                      ? a.isComment
                        ? s + "comment"
                        : s + a.tag
                      : o(a.key)
                        ? 0 === String(a.key).indexOf(s)
                          ? a.key
                          : s + a.key
                        : a.key
                  var u = ((a.data || (a.data = {})).transition = Pi(this)),
                    c = this._vnode,
                    l = $i(c)
                  if (
                    (a.data.directives &&
                      a.data.directives.some(function(t) {
                        return "show" === t.name
                      }) &&
                      (a.data.show = !0),
                    l &&
                      l.data &&
                      !(function(t, e) {
                        return e.key === t.key && e.tag === t.tag
                      })(a, l) &&
                      !de(l) &&
                      (!l.componentInstance || !l.componentInstance._vnode.isComment))
                  ) {
                    var f = (l.data.transition = E({}, u))
                    if ("out-in" === r)
                      return (
                        (this._leaving = !0),
                        se(f, "afterLeave", function() {
                          ;(e._leaving = !1), e.$forceUpdate()
                        }),
                        zi(t, i)
                      )
                    if ("in-out" === r) {
                      if (de(a)) return c
                      var d,
                        p = function() {
                          d()
                        }
                      se(u, "afterEnter", p),
                        se(u, "enterCancelled", p),
                        se(f, "delayLeave", function(t) {
                          d = t
                        })
                    }
                  }
                  return i
                }
              },
            },
            Ri = E({ tag: String, moveClass: String }, Ni)
          function Ui(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
          }
          function Bi(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
          }
          function Hi(t) {
            var e = t.data.pos,
              n = t.data.newPos,
              r = e.left - n.left,
              i = e.top - n.top
            if (r || i) {
              t.data.moved = !0
              var a = t.elm.style
              ;(a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)"), (a.transitionDuration = "0s")
            }
          }
          delete Ri.mode
          var Vi = {
            Transition: Fi,
            TransitionGroup: {
              props: Ri,
              render: function(t) {
                for (
                  var e = this.tag || this.$vnode.data.tag || "span",
                    n = Object.create(null),
                    r = (this.prevChildren = this.children),
                    i = this.$slots.default || [],
                    a = (this.children = []),
                    o = Pi(this),
                    s = 0;
                  s < i.length;
                  s++
                ) {
                  var u = i[s]
                  if (u.tag)
                    if (null != u.key && 0 !== String(u.key).indexOf("__vlist"))
                      a.push(u), (n[u.key] = u), ((u.data || (u.data = {})).transition = o)
                    else;
                }
                if (r) {
                  for (var c = [], l = [], f = 0; f < r.length; f++) {
                    var d = r[f]
                    ;(d.data.transition = o),
                      (d.data.pos = d.elm.getBoundingClientRect()),
                      n[d.key] ? c.push(d) : l.push(d)
                  }
                  ;(this.kept = t(e, null, c)), (this.removed = l)
                }
                return t(e, null, a)
              },
              beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), (this._vnode = this.kept)
              },
              updated: function() {
                var t = this.prevChildren,
                  e = this.moveClass || (this.name || "v") + "-move"
                t.length &&
                  this.hasMove(t[0].elm, e) &&
                  (t.forEach(Ui),
                  t.forEach(Bi),
                  t.forEach(Hi),
                  (this._reflow = document.body.offsetHeight),
                  t.forEach(function(t) {
                    if (t.data.moved) {
                      var n = t.elm,
                        r = n.style
                      di(n, e),
                        (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                        n.addEventListener(
                          si,
                          (n._moveCb = function t(r) {
                            ;(r && !/transform$/.test(r.propertyName)) ||
                              (n.removeEventListener(si, t), (n._moveCb = null), pi(n, e))
                          })
                        )
                    }
                  }))
              },
              methods: {
                hasMove: function(t, e) {
                  if (!ri) return !1
                  if (this._hasMove) return this._hasMove
                  var n = t.cloneNode()
                  t._transitionClasses &&
                    t._transitionClasses.forEach(function(t) {
                      ti(n, t)
                    }),
                    Kr(n, e),
                    (n.style.display = "none"),
                    this.$el.appendChild(n)
                  var r = mi(n)
                  return this.$el.removeChild(n), (this._hasMove = r.hasTransform)
                },
              },
            },
          }
          ;(dn.config.mustUseProp = wn),
            (dn.config.isReservedTag = $n),
            (dn.config.isReservedAttr = bn),
            (dn.config.getTagNamespace = Pn),
            (dn.config.isUnknownElement = function(t) {
              if (!Y) return !0
              if ($n(t)) return !1
              if (((t = t.toLowerCase()), null != zn[t])) return zn[t]
              var e = document.createElement(t)
              return t.indexOf("-") > -1
                ? (zn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement)
                : (zn[t] = /HTMLUnknownElement/.test(e.toString()))
            }),
            E(dn.options.directives, Ii),
            E(dn.options.components, Vi),
            (dn.prototype.__patch__ = Y ? Oi : T),
            (dn.prototype.$mount = function(t, e) {
              return (function(t, e, n) {
                return (
                  (t.$el = e),
                  t.$options.render || (t.$options.render = vt),
                  Me(t, "beforeMount"),
                  new Ae(
                    t,
                    function() {
                      t._update(t._render(), n)
                    },
                    T,
                    null,
                    !0
                  ),
                  (n = !1),
                  null == t.$vnode && ((t._isMounted = !0), Me(t, "mounted")),
                  t
                )
              })(this, (t = t && Y ? Rn(t) : void 0), e)
            }),
            Y &&
              setTimeout(function() {
                F.devtools && rt && rt.emit("init", dn)
              }, 0)
          var Yi = /\{\{((?:.|\n)+?)\}\}/g,
            qi = /[-.*+?^${}()|[\]\/\\]/g,
            Wi = b(function(t) {
              var e = t[0].replace(qi, "\\$&"),
                n = t[1].replace(qi, "\\$&")
              return new RegExp(e + "((?:.|\\n)+?)" + n, "g")
            })
          function Gi(t, e) {
            var n = e ? Wi(e) : Yi
            if (n.test(t)) {
              for (var r, i, a, o = [], s = [], u = (n.lastIndex = 0); (r = n.exec(t)); ) {
                ;(i = r.index) > u && (s.push((a = t.slice(u, i))), o.push(JSON.stringify(a)))
                var c = hr(r[1].trim())
                o.push("_s(" + c + ")"), s.push({ "@binding": c }), (u = i + r[0].length)
              }
              return (
                u < t.length && (s.push((a = t.slice(u))), o.push(JSON.stringify(a))),
                { expression: o.join("+"), tokens: s }
              )
            }
          }
          var Xi = {
            staticKeys: ["staticClass"],
            transformNode: function(t, e) {
              e.warn
              var n = Or(t, "class")
              n && (t.staticClass = JSON.stringify(n))
              var r = Mr(t, "class", !1)
              r && (t.classBinding = r)
            },
            genData: function(t) {
              var e = ""
              return (
                t.staticClass && (e += "staticClass:" + t.staticClass + ","),
                t.classBinding && (e += "class:" + t.classBinding + ","),
                e
              )
            },
          }
          var Qi,
            Ji = {
              staticKeys: ["staticStyle"],
              transformNode: function(t, e) {
                e.warn
                var n = Or(t, "style")
                n && (t.staticStyle = JSON.stringify(Br(n)))
                var r = Mr(t, "style", !1)
                r && (t.styleBinding = r)
              },
              genData: function(t) {
                var e = ""
                return (
                  t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
                  t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
                  e
                )
              },
            },
            Zi = function(t) {
              return ((Qi = Qi || document.createElement("div")).innerHTML = t), Qi.textContent
            },
            Ki = h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
            ta = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
            ea = h(
              "address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
            ),
            na = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
            ra = "[a-zA-Z_][\\w\\-\\.]*",
            ia = "((?:" + ra + "\\:)?" + ra + ")",
            aa = new RegExp("^<" + ia),
            oa = /^\s*(\/?)>/,
            sa = new RegExp("^<\\/" + ia + "[^>]*>"),
            ua = /^<!DOCTYPE [^>]+>/i,
            ca = /^<!\--/,
            la = /^<!\[/,
            fa = !1
          "x".replace(/x(.)?/g, function(t, e) {
            fa = "" === e
          })
          var da = h("script,style,textarea", !0),
            pa = {},
            ha = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t" },
            va = /&(?:lt|gt|quot|amp);/g,
            ma = /&(?:lt|gt|quot|amp|#10|#9);/g,
            ga = h("pre,textarea", !0),
            ya = function(t, e) {
              return t && ga(t) && "\n" === e[0]
            }
          function _a(t, e) {
            var n = e ? ma : va
            return t.replace(n, function(t) {
              return ha[t]
            })
          }
          var ba,
            xa,
            wa,
            Ma,
            Oa,
            Ca,
            Sa,
            ja,
            Ea = /^@|^v-on:/,
            La = /^v-|^@|^:/,
            Ta = /([^]*?)\s+(?:in|of)\s+([^]*)/,
            ka = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
            Aa = /^\(|\)$/g,
            Da = /:(.*)$/,
            Ia = /^:|^v-bind:/,
            Na = /\.[^.]+/g,
            $a = b(Zi)
          function Pa(t, e, n) {
            return {
              type: 1,
              tag: t,
              attrsList: e,
              attrsMap: (function(t) {
                for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value
                return e
              })(e),
              parent: n,
              children: [],
            }
          }
          function za(t, e) {
            ;(ba = e.warn || mr),
              (Ca = e.isPreTag || k),
              (Sa = e.mustUseProp || k),
              (ja = e.getTagNamespace || k),
              (wa = gr(e.modules, "transformNode")),
              (Ma = gr(e.modules, "preTransformNode")),
              (Oa = gr(e.modules, "postTransformNode")),
              (xa = e.delimiters)
            var n,
              r,
              i = [],
              a = !1 !== e.preserveWhitespace,
              o = !1,
              s = !1
            function u(t) {
              t.pre && (o = !1), Ca(t.tag) && (s = !1)
              for (var n = 0; n < Oa.length; n++) Oa[n](t, e)
            }
            return (
              (function(t, e) {
                for (
                  var n, r, i = [], a = e.expectHTML, o = e.isUnaryTag || k, s = e.canBeLeftOpenTag || k, u = 0;
                  t;

                ) {
                  if (((n = t), r && da(r))) {
                    var c = 0,
                      l = r.toLowerCase(),
                      f = pa[l] || (pa[l] = new RegExp("([\\s\\S]*?)(</" + l + "[^>]*>)", "i")),
                      d = t.replace(f, function(t, n, r) {
                        return (
                          (c = r.length),
                          da(l) ||
                            "noscript" === l ||
                            (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                          ya(l, n) && (n = n.slice(1)),
                          e.chars && e.chars(n),
                          ""
                        )
                      })
                    ;(u += t.length - d.length), (t = d), S(l, u - c, u)
                  } else {
                    var p = t.indexOf("<")
                    if (0 === p) {
                      if (ca.test(t)) {
                        var h = t.indexOf("--\x3e")
                        if (h >= 0) {
                          e.shouldKeepComment && e.comment(t.substring(4, h)), M(h + 3)
                          continue
                        }
                      }
                      if (la.test(t)) {
                        var v = t.indexOf("]>")
                        if (v >= 0) {
                          M(v + 2)
                          continue
                        }
                      }
                      var m = t.match(ua)
                      if (m) {
                        M(m[0].length)
                        continue
                      }
                      var g = t.match(sa)
                      if (g) {
                        var y = u
                        M(g[0].length), S(g[1], y, u)
                        continue
                      }
                      var _ = O()
                      if (_) {
                        C(_), ya(r, t) && M(1)
                        continue
                      }
                    }
                    var b = void 0,
                      x = void 0,
                      w = void 0
                    if (p >= 0) {
                      for (
                        x = t.slice(p);
                        !(sa.test(x) || aa.test(x) || ca.test(x) || la.test(x) || (w = x.indexOf("<", 1)) < 0);

                      )
                        (p += w), (x = t.slice(p))
                      ;(b = t.substring(0, p)), M(p)
                    }
                    p < 0 && ((b = t), (t = "")), e.chars && b && e.chars(b)
                  }
                  if (t === n) {
                    e.chars && e.chars(t)
                    break
                  }
                }
                function M(e) {
                  ;(u += e), (t = t.substring(e))
                }
                function O() {
                  var e = t.match(aa)
                  if (e) {
                    var n,
                      r,
                      i = { tagName: e[1], attrs: [], start: u }
                    for (M(e[0].length); !(n = t.match(oa)) && (r = t.match(na)); ) M(r[0].length), i.attrs.push(r)
                    if (n) return (i.unarySlash = n[1]), M(n[0].length), (i.end = u), i
                  }
                }
                function C(t) {
                  var n = t.tagName,
                    u = t.unarySlash
                  a && ("p" === r && ea(n) && S(r), s(n) && r === n && S(n))
                  for (var c = o(n) || !!u, l = t.attrs.length, f = new Array(l), d = 0; d < l; d++) {
                    var p = t.attrs[d]
                    fa &&
                      -1 === p[0].indexOf('""') &&
                      ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5])
                    var h = p[3] || p[4] || p[5] || "",
                      v = "a" === n && "href" === p[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines
                    f[d] = { name: p[1], value: _a(h, v) }
                  }
                  c || (i.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: f }), (r = n)),
                    e.start && e.start(n, f, c, t.start, t.end)
                }
                function S(t, n, a) {
                  var o, s
                  if ((null == n && (n = u), null == a && (a = u), t && (s = t.toLowerCase()), t))
                    for (o = i.length - 1; o >= 0 && i[o].lowerCasedTag !== s; o--);
                  else o = 0
                  if (o >= 0) {
                    for (var c = i.length - 1; c >= o; c--) e.end && e.end(i[c].tag, n, a)
                    ;(i.length = o), (r = o && i[o - 1].tag)
                  } else
                    "br" === s
                      ? e.start && e.start(t, [], !0, n, a)
                      : "p" === s && (e.start && e.start(t, [], !1, n, a), e.end && e.end(t, n, a))
                }
                S()
              })(t, {
                warn: ba,
                expectHTML: e.expectHTML,
                isUnaryTag: e.isUnaryTag,
                canBeLeftOpenTag: e.canBeLeftOpenTag,
                shouldDecodeNewlines: e.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
                shouldKeepComment: e.comments,
                start: function(t, a, c) {
                  var l = (r && r.ns) || ja(t)
                  X &&
                    "svg" === l &&
                    (a = (function(t) {
                      for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n]
                        Ha.test(r.name) || ((r.name = r.name.replace(Va, "")), e.push(r))
                      }
                      return e
                    })(a))
                  var f,
                    d = Pa(t, a, r)
                  l && (d.ns = l),
                    ("style" !== (f = d).tag &&
                      ("script" !== f.tag || (f.attrsMap.type && "text/javascript" !== f.attrsMap.type))) ||
                      nt() ||
                      (d.forbidden = !0)
                  for (var p = 0; p < Ma.length; p++) d = Ma[p](d, e) || d
                  function h(t) {
                    0
                  }
                  if (
                    (o ||
                      (!(function(t) {
                        null != Or(t, "v-pre") && (t.pre = !0)
                      })(d),
                      d.pre && (o = !0)),
                    Ca(d.tag) && (s = !0),
                    o
                      ? (function(t) {
                          var e = t.attrsList.length
                          if (e)
                            for (var n = (t.attrs = new Array(e)), r = 0; r < e; r++)
                              n[r] = { name: t.attrsList[r].name, value: JSON.stringify(t.attrsList[r].value) }
                          else t.pre || (t.plain = !0)
                        })(d)
                      : d.processed ||
                        (Ra(d),
                        (function(t) {
                          var e = Or(t, "v-if")
                          if (e) (t.if = e), Ua(t, { exp: e, block: t })
                          else {
                            null != Or(t, "v-else") && (t.else = !0)
                            var n = Or(t, "v-else-if")
                            n && (t.elseif = n)
                          }
                        })(d),
                        (function(t) {
                          null != Or(t, "v-once") && (t.once = !0)
                        })(d),
                        Fa(d, e)),
                    n
                      ? i.length || (n.if && (d.elseif || d.else) && (h(), Ua(n, { exp: d.elseif, block: d })))
                      : ((n = d), h()),
                    r && !d.forbidden)
                  )
                    if (d.elseif || d.else)
                      !(function(t, e) {
                        var n = (function(t) {
                          var e = t.length
                          for (; e--; ) {
                            if (1 === t[e].type) return t[e]
                            t.pop()
                          }
                        })(e.children)
                        n && n.if && Ua(n, { exp: t.elseif, block: t })
                      })(d, r)
                    else if (d.slotScope) {
                      r.plain = !1
                      var v = d.slotTarget || '"default"'
                      ;(r.scopedSlots || (r.scopedSlots = {}))[v] = d
                    } else r.children.push(d), (d.parent = r)
                  c ? u(d) : ((r = d), i.push(d))
                },
                end: function() {
                  var t = i[i.length - 1],
                    e = t.children[t.children.length - 1]
                  e && 3 === e.type && " " === e.text && !s && t.children.pop(),
                    (i.length -= 1),
                    (r = i[i.length - 1]),
                    u(t)
                },
                chars: function(t) {
                  if (r && (!X || "textarea" !== r.tag || r.attrsMap.placeholder !== t)) {
                    var e,
                      n,
                      i = r.children
                    if (
                      (t =
                        s || t.trim()
                          ? "script" === (e = r).tag || "style" === e.tag
                            ? t
                            : $a(t)
                          : a && i.length
                            ? " "
                            : "")
                    )
                      !o && " " !== t && (n = Gi(t, xa))
                        ? i.push({ type: 2, expression: n.expression, tokens: n.tokens, text: t })
                        : (" " === t && i.length && " " === i[i.length - 1].text) || i.push({ type: 3, text: t })
                  }
                },
                comment: function(t) {
                  r.children.push({ type: 3, text: t, isComment: !0 })
                },
              }),
              n
            )
          }
          function Fa(t, e) {
            var n, r
            ;(r = Mr((n = t), "key")) && (n.key = r),
              (t.plain = !t.key && !t.attrsList.length),
              (function(t) {
                var e = Mr(t, "ref")
                e &&
                  ((t.ref = e),
                  (t.refInFor = (function(t) {
                    var e = t
                    for (; e; ) {
                      if (void 0 !== e.for) return !0
                      e = e.parent
                    }
                    return !1
                  })(t)))
              })(t),
              (function(t) {
                if ("slot" === t.tag) t.slotName = Mr(t, "name")
                else {
                  var e
                  "template" === t.tag
                    ? ((e = Or(t, "scope")), (t.slotScope = e || Or(t, "slot-scope")))
                    : (e = Or(t, "slot-scope")) && (t.slotScope = e)
                  var n = Mr(t, "slot")
                  n &&
                    ((t.slotTarget = '""' === n ? '"default"' : n),
                    "template" === t.tag || t.slotScope || _r(t, "slot", n))
                }
              })(t),
              (function(t) {
                var e
                ;(e = Mr(t, "is")) && (t.component = e)
                null != Or(t, "inline-template") && (t.inlineTemplate = !0)
              })(t)
            for (var i = 0; i < wa.length; i++) t = wa[i](t, e) || t
            !(function(t) {
              var e,
                n,
                r,
                i,
                a,
                o,
                s,
                u = t.attrsList
              for (e = 0, n = u.length; e < n; e++) {
                if (((r = i = u[e].name), (a = u[e].value), La.test(r)))
                  if (((t.hasBindings = !0), (o = Ba(r)) && (r = r.replace(Na, "")), Ia.test(r)))
                    (r = r.replace(Ia, "")),
                      (a = hr(a)),
                      (s = !1),
                      o &&
                        (o.prop && ((s = !0), "innerHtml" === (r = w(r)) && (r = "innerHTML")),
                        o.camel && (r = w(r)),
                        o.sync && wr(t, "update:" + w(r), Sr(a, "$event"))),
                      s || (!t.component && Sa(t.tag, t.attrsMap.type, r)) ? yr(t, r, a) : _r(t, r, a)
                  else if (Ea.test(r)) (r = r.replace(Ea, "")), wr(t, r, a, o, !1)
                  else {
                    var c = (r = r.replace(La, "")).match(Da),
                      l = c && c[1]
                    l && (r = r.slice(0, -(l.length + 1))), xr(t, r, i, a, l, o)
                  }
                else
                  _r(t, r, JSON.stringify(a)),
                    !t.component && "muted" === r && Sa(t.tag, t.attrsMap.type, r) && yr(t, r, "true")
              }
            })(t)
          }
          function Ra(t) {
            var e
            if ((e = Or(t, "v-for"))) {
              var n = (function(t) {
                var e = t.match(Ta)
                if (!e) return
                var n = {}
                n.for = e[2].trim()
                var r = e[1].trim().replace(Aa, ""),
                  i = r.match(ka)
                i
                  ? ((n.alias = r.replace(ka, "")), (n.iterator1 = i[1].trim()), i[2] && (n.iterator2 = i[2].trim()))
                  : (n.alias = r)
                return n
              })(e)
              n && E(t, n)
            }
          }
          function Ua(t, e) {
            t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e)
          }
          function Ba(t) {
            var e = t.match(Na)
            if (e) {
              var n = {}
              return (
                e.forEach(function(t) {
                  n[t.slice(1)] = !0
                }),
                n
              )
            }
          }
          var Ha = /^xmlns:NS\d+/,
            Va = /^NS\d+:/
          function Ya(t) {
            return Pa(t.tag, t.attrsList.slice(), t.parent)
          }
          var qa = [
            Xi,
            Ji,
            {
              preTransformNode: function(t, e) {
                if ("input" === t.tag) {
                  var n,
                    r = t.attrsMap
                  if (!r["v-model"]) return
                  if (
                    ((r[":type"] || r["v-bind:type"]) && (n = Mr(t, "type")),
                    r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"),
                    n)
                  ) {
                    var i = Or(t, "v-if", !0),
                      a = i ? "&&(" + i + ")" : "",
                      o = null != Or(t, "v-else", !0),
                      s = Or(t, "v-else-if", !0),
                      u = Ya(t)
                    Ra(u),
                      br(u, "type", "checkbox"),
                      Fa(u, e),
                      (u.processed = !0),
                      (u.if = "(" + n + ")==='checkbox'" + a),
                      Ua(u, { exp: u.if, block: u })
                    var c = Ya(t)
                    Or(c, "v-for", !0),
                      br(c, "type", "radio"),
                      Fa(c, e),
                      Ua(u, { exp: "(" + n + ")==='radio'" + a, block: c })
                    var l = Ya(t)
                    return (
                      Or(l, "v-for", !0),
                      br(l, ":type", n),
                      Fa(l, e),
                      Ua(u, { exp: i, block: l }),
                      o ? (u.else = !0) : s && (u.elseif = s),
                      u
                    )
                  }
                }
              },
            },
          ]
          var Wa,
            Ga,
            Xa = {
              expectHTML: !0,
              modules: qa,
              directives: {
                model: function(t, e, n) {
                  n
                  var r = e.value,
                    i = e.modifiers,
                    a = t.tag,
                    o = t.attrsMap.type
                  if (t.component) return Cr(t, r, i), !1
                  if ("select" === a)
                    !(function(t, e, n) {
                      var r =
                        'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
                        (n && n.number ? "_n(val)" : "val") +
                        "});"
                      ;(r = r + " " + Sr(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]")),
                        wr(t, "change", r, null, !0)
                    })(t, r, i)
                  else if ("input" === a && "checkbox" === o)
                    !(function(t, e, n) {
                      var r = n && n.number,
                        i = Mr(t, "value") || "null",
                        a = Mr(t, "true-value") || "true",
                        o = Mr(t, "false-value") || "false"
                      yr(
                        t,
                        "checked",
                        "Array.isArray(" +
                          e +
                          ")?_i(" +
                          e +
                          "," +
                          i +
                          ")>-1" +
                          ("true" === a ? ":(" + e + ")" : ":_q(" + e + "," + a + ")")
                      ),
                        wr(
                          t,
                          "change",
                          "var $$a=" +
                            e +
                            ",$$el=$event.target,$$c=$$el.checked?(" +
                            a +
                            "):(" +
                            o +
                            ");if(Array.isArray($$a)){var $$v=" +
                            (r ? "_n(" + i + ")" : i) +
                            ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" +
                            Sr(e, "$$a.concat([$$v])") +
                            ")}else{$$i>-1&&(" +
                            Sr(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") +
                            ")}}else{" +
                            Sr(e, "$$c") +
                            "}",
                          null,
                          !0
                        )
                    })(t, r, i)
                  else if ("input" === a && "radio" === o)
                    !(function(t, e, n) {
                      var r = n && n.number,
                        i = Mr(t, "value") || "null"
                      yr(t, "checked", "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"),
                        wr(t, "change", Sr(e, i), null, !0)
                    })(t, r, i)
                  else if ("input" === a || "textarea" === a)
                    !(function(t, e, n) {
                      var r = t.attrsMap.type,
                        i = n || {},
                        a = i.lazy,
                        o = i.number,
                        s = i.trim,
                        u = !a && "range" !== r,
                        c = a ? "change" : "range" === r ? Dr : "input",
                        l = "$event.target.value"
                      s && (l = "$event.target.value.trim()"), o && (l = "_n(" + l + ")")
                      var f = Sr(e, l)
                      u && (f = "if($event.target.composing)return;" + f),
                        yr(t, "value", "(" + e + ")"),
                        wr(t, c, f, null, !0),
                        (s || o) && wr(t, "blur", "$forceUpdate()")
                    })(t, r, i)
                  else if (!F.isReservedTag(a)) return Cr(t, r, i), !1
                  return !0
                },
                text: function(t, e) {
                  e.value && yr(t, "textContent", "_s(" + e.value + ")")
                },
                html: function(t, e) {
                  e.value && yr(t, "innerHTML", "_s(" + e.value + ")")
                },
              },
              isPreTag: function(t) {
                return "pre" === t
              },
              isUnaryTag: Ki,
              mustUseProp: wn,
              canBeLeftOpenTag: ta,
              isReservedTag: $n,
              getTagNamespace: Pn,
              staticKeys: (function(t) {
                return t
                  .reduce(function(t, e) {
                    return t.concat(e.staticKeys || [])
                  }, [])
                  .join(",")
              })(qa),
            },
            Qa = b(function(t) {
              return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""))
            })
          function Ja(t, e) {
            t &&
              ((Wa = Qa(e.staticKeys || "")),
              (Ga = e.isReservedTag || k),
              (function t(e) {
                e.static = (function(t) {
                  if (2 === t.type) return !1
                  if (3 === t.type) return !0
                  return !(
                    !t.pre &&
                    (t.hasBindings ||
                      t.if ||
                      t.for ||
                      v(t.tag) ||
                      !Ga(t.tag) ||
                      (function(t) {
                        for (; t.parent; ) {
                          if ("template" !== (t = t.parent).tag) return !1
                          if (t.for) return !0
                        }
                        return !1
                      })(t) ||
                      !Object.keys(t).every(Wa))
                  )
                })(e)
                if (1 === e.type) {
                  if (!Ga(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return
                  for (var n = 0, r = e.children.length; n < r; n++) {
                    var i = e.children[n]
                    t(i), i.static || (e.static = !1)
                  }
                  if (e.ifConditions)
                    for (var a = 1, o = e.ifConditions.length; a < o; a++) {
                      var s = e.ifConditions[a].block
                      t(s), s.static || (e.static = !1)
                    }
                }
              })(t),
              (function t(e, n) {
                if (1 === e.type) {
                  if (
                    ((e.static || e.once) && (e.staticInFor = n),
                    e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
                  )
                    return void (e.staticRoot = !0)
                  if (((e.staticRoot = !1), e.children))
                    for (var r = 0, i = e.children.length; r < i; r++) t(e.children[r], n || !!e.for)
                  if (e.ifConditions)
                    for (var a = 1, o = e.ifConditions.length; a < o; a++) t(e.ifConditions[a].block, n)
                }
              })(t, !1))
          }
          var Za = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            Ka = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
            to = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
            eo = {
              esc: "Escape",
              tab: "Tab",
              enter: "Enter",
              space: " ",
              up: ["Up", "ArrowUp"],
              left: ["Left", "ArrowLeft"],
              right: ["Right", "ArrowRight"],
              down: ["Down", "ArrowDown"],
              delete: ["Backspace", "Delete"],
            },
            no = function(t) {
              return "if(" + t + ")return null;"
            },
            ro = {
              stop: "$event.stopPropagation();",
              prevent: "$event.preventDefault();",
              self: no("$event.target !== $event.currentTarget"),
              ctrl: no("!$event.ctrlKey"),
              shift: no("!$event.shiftKey"),
              alt: no("!$event.altKey"),
              meta: no("!$event.metaKey"),
              left: no("'button' in $event && $event.button !== 0"),
              middle: no("'button' in $event && $event.button !== 1"),
              right: no("'button' in $event && $event.button !== 2"),
            }
          function io(t, e, n) {
            var r = e ? "nativeOn:{" : "on:{"
            for (var i in t) r += '"' + i + '":' + ao(i, t[i]) + ","
            return r.slice(0, -1) + "}"
          }
          function ao(t, e) {
            if (!e) return "function(){}"
            if (Array.isArray(e))
              return (
                "[" +
                e
                  .map(function(e) {
                    return ao(t, e)
                  })
                  .join(",") +
                "]"
              )
            var n = Ka.test(e.value),
              r = Za.test(e.value)
            if (e.modifiers) {
              var i = "",
                a = "",
                o = []
              for (var s in e.modifiers)
                if (ro[s]) (a += ro[s]), to[s] && o.push(s)
                else if ("exact" === s) {
                  var u = e.modifiers
                  a += no(
                    ["ctrl", "shift", "alt", "meta"]
                      .filter(function(t) {
                        return !u[t]
                      })
                      .map(function(t) {
                        return "$event." + t + "Key"
                      })
                      .join("||")
                  )
                } else o.push(s)
              return (
                o.length &&
                  (i += (function(t) {
                    return "if(!('button' in $event)&&" + t.map(oo).join("&&") + ")return null;"
                  })(o)),
                a && (i += a),
                "function($event){" +
                  i +
                  (n ? "return " + e.value + "($event)" : r ? "return (" + e.value + ")($event)" : e.value) +
                  "}"
              )
            }
            return n || r ? e.value : "function($event){" + e.value + "}"
          }
          function oo(t) {
            var e = parseInt(t, 10)
            if (e) return "$event.keyCode!==" + e
            var n = to[t],
              r = eo[t]
            return (
              "_k($event.keyCode," +
              JSON.stringify(t) +
              "," +
              JSON.stringify(n) +
              ",$event.key," +
              JSON.stringify(r) +
              ")"
            )
          }
          var so = {
              on: function(t, e) {
                t.wrapListeners = function(t) {
                  return "_g(" + t + "," + e.value + ")"
                }
              },
              bind: function(t, e) {
                t.wrapData = function(n) {
                  return (
                    "_b(" +
                    n +
                    ",'" +
                    t.tag +
                    "'," +
                    e.value +
                    "," +
                    (e.modifiers && e.modifiers.prop ? "true" : "false") +
                    (e.modifiers && e.modifiers.sync ? ",true" : "") +
                    ")"
                  )
                }
              },
              cloak: T,
            },
            uo = function(t) {
              ;(this.options = t),
                (this.warn = t.warn || mr),
                (this.transforms = gr(t.modules, "transformCode")),
                (this.dataGenFns = gr(t.modules, "genData")),
                (this.directives = E(E({}, so), t.directives))
              var e = t.isReservedTag || k
              ;(this.maybeComponent = function(t) {
                return !e(t.tag)
              }),
                (this.onceId = 0),
                (this.staticRenderFns = [])
            }
          function co(t, e) {
            var n = new uo(e)
            return {
              render: "with(this){return " + (t ? lo(t, n) : '_c("div")') + "}",
              staticRenderFns: n.staticRenderFns,
            }
          }
          function lo(t, e) {
            if (t.staticRoot && !t.staticProcessed) return fo(t, e)
            if (t.once && !t.onceProcessed) return po(t, e)
            if (t.for && !t.forProcessed)
              return (function(t, e, n, r) {
                var i = t.for,
                  a = t.alias,
                  o = t.iterator1 ? "," + t.iterator1 : "",
                  s = t.iterator2 ? "," + t.iterator2 : ""
                0
                return (
                  (t.forProcessed = !0),
                  (r || "_l") + "((" + i + "),function(" + a + o + s + "){return " + (n || lo)(t, e) + "})"
                )
              })(t, e)
            if (t.if && !t.ifProcessed) return ho(t, e)
            if ("template" !== t.tag || t.slotTarget) {
              if ("slot" === t.tag)
                return (function(t, e) {
                  var n = t.slotName || '"default"',
                    r = go(t, e),
                    i = "_t(" + n + (r ? "," + r : ""),
                    a =
                      t.attrs &&
                      "{" +
                        t.attrs
                          .map(function(t) {
                            return w(t.name) + ":" + t.value
                          })
                          .join(",") +
                        "}",
                    o = t.attrsMap["v-bind"]
                  ;(!a && !o) || r || (i += ",null")
                  a && (i += "," + a)
                  o && (i += (a ? "" : ",null") + "," + o)
                  return i + ")"
                })(t, e)
              var n
              if (t.component)
                n = (function(t, e, n) {
                  var r = e.inlineTemplate ? null : go(e, n, !0)
                  return "_c(" + t + "," + vo(e, n) + (r ? "," + r : "") + ")"
                })(t.component, t, e)
              else {
                var r = t.plain ? void 0 : vo(t, e),
                  i = t.inlineTemplate ? null : go(t, e, !0)
                n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
              }
              for (var a = 0; a < e.transforms.length; a++) n = e.transforms[a](t, n)
              return n
            }
            return go(t, e) || "void 0"
          }
          function fo(t, e) {
            return (
              (t.staticProcessed = !0),
              e.staticRenderFns.push("with(this){return " + lo(t, e) + "}"),
              "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")"
            )
          }
          function po(t, e) {
            if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return ho(t, e)
            if (t.staticInFor) {
              for (var n = "", r = t.parent; r; ) {
                if (r.for) {
                  n = r.key
                  break
                }
                r = r.parent
              }
              return n ? "_o(" + lo(t, e) + "," + e.onceId++ + "," + n + ")" : lo(t, e)
            }
            return fo(t, e)
          }
          function ho(t, e, n, r) {
            return (
              (t.ifProcessed = !0),
              (function t(e, n, r, i) {
                if (!e.length) return i || "_e()"
                var a = e.shift()
                return a.exp ? "(" + a.exp + ")?" + o(a.block) + ":" + t(e, n, r, i) : "" + o(a.block)
                function o(t) {
                  return r ? r(t, n) : t.once ? po(t, n) : lo(t, n)
                }
              })(t.ifConditions.slice(), e, n, r)
            )
          }
          function vo(t, e) {
            var n = "{",
              r = (function(t, e) {
                var n = t.directives
                if (!n) return
                var r,
                  i,
                  a,
                  o,
                  s = "directives:[",
                  u = !1
                for (r = 0, i = n.length; r < i; r++) {
                  ;(a = n[r]), (o = !0)
                  var c = e.directives[a.name]
                  c && (o = !!c(t, a, e.warn)),
                    o &&
                      ((u = !0),
                      (s +=
                        '{name:"' +
                        a.name +
                        '",rawName:"' +
                        a.rawName +
                        '"' +
                        (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") +
                        (a.arg ? ',arg:"' + a.arg + '"' : "") +
                        (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") +
                        "},"))
                }
                if (u) return s.slice(0, -1) + "]"
              })(t, e)
            r && (n += r + ","),
              t.key && (n += "key:" + t.key + ","),
              t.ref && (n += "ref:" + t.ref + ","),
              t.refInFor && (n += "refInFor:true,"),
              t.pre && (n += "pre:true,"),
              t.component && (n += 'tag:"' + t.tag + '",')
            for (var i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t)
            if (
              (t.attrs && (n += "attrs:{" + bo(t.attrs) + "},"),
              t.props && (n += "domProps:{" + bo(t.props) + "},"),
              t.events && (n += io(t.events, !1, e.warn) + ","),
              t.nativeEvents && (n += io(t.nativeEvents, !0, e.warn) + ","),
              t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","),
              t.scopedSlots &&
                (n +=
                  (function(t, e) {
                    return (
                      "scopedSlots:_u([" +
                      Object.keys(t)
                        .map(function(n) {
                          return mo(n, t[n], e)
                        })
                        .join(",") +
                      "])"
                    )
                  })(t.scopedSlots, e) + ","),
              t.model &&
                (n +=
                  "model:{value:" +
                  t.model.value +
                  ",callback:" +
                  t.model.callback +
                  ",expression:" +
                  t.model.expression +
                  "},"),
              t.inlineTemplate)
            ) {
              var a = (function(t, e) {
                var n = t.children[0]
                0
                if (1 === n.type) {
                  var r = co(n, e.options)
                  return (
                    "inlineTemplate:{render:function(){" +
                    r.render +
                    "},staticRenderFns:[" +
                    r.staticRenderFns
                      .map(function(t) {
                        return "function(){" + t + "}"
                      })
                      .join(",") +
                    "]}"
                  )
                }
              })(t, e)
              a && (n += a + ",")
            }
            return (
              (n = n.replace(/,$/, "") + "}"),
              t.wrapData && (n = t.wrapData(n)),
              t.wrapListeners && (n = t.wrapListeners(n)),
              n
            )
          }
          function mo(t, e, n) {
            return e.for && !e.forProcessed
              ? (function(t, e, n) {
                  var r = e.for,
                    i = e.alias,
                    a = e.iterator1 ? "," + e.iterator1 : "",
                    o = e.iterator2 ? "," + e.iterator2 : ""
                  return (
                    (e.forProcessed = !0), "_l((" + r + "),function(" + i + a + o + "){return " + mo(t, e, n) + "})"
                  )
                })(t, e, n)
              : "{key:" +
                  t +
                  ",fn:" +
                  ("function(" +
                    String(e.slotScope) +
                    "){return " +
                    ("template" === e.tag
                      ? e.if
                        ? e.if + "?" + (go(e, n) || "undefined") + ":undefined"
                        : go(e, n) || "undefined"
                      : lo(e, n)) +
                    "}") +
                  "}"
          }
          function go(t, e, n, r, i) {
            var a = t.children
            if (a.length) {
              var o = a[0]
              if (1 === a.length && o.for && "template" !== o.tag && "slot" !== o.tag) return (r || lo)(o, e)
              var s = n
                  ? (function(t, e) {
                      for (var n = 0, r = 0; r < t.length; r++) {
                        var i = t[r]
                        if (1 === i.type) {
                          if (
                            yo(i) ||
                            (i.ifConditions &&
                              i.ifConditions.some(function(t) {
                                return yo(t.block)
                              }))
                          ) {
                            n = 2
                            break
                          }
                          ;(e(i) ||
                            (i.ifConditions &&
                              i.ifConditions.some(function(t) {
                                return e(t.block)
                              }))) &&
                            (n = 1)
                        }
                      }
                      return n
                    })(a, e.maybeComponent)
                  : 0,
                u = i || _o
              return (
                "[" +
                a
                  .map(function(t) {
                    return u(t, e)
                  })
                  .join(",") +
                "]" +
                (s ? "," + s : "")
              )
            }
          }
          function yo(t) {
            return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
          }
          function _o(t, e) {
            return 1 === t.type
              ? lo(t, e)
              : 3 === t.type && t.isComment
                ? ((r = t), "_e(" + JSON.stringify(r.text) + ")")
                : "_v(" + (2 === (n = t).type ? n.expression : xo(JSON.stringify(n.text))) + ")"
            var n, r
          }
          function bo(t) {
            for (var e = "", n = 0; n < t.length; n++) {
              var r = t[n]
              e += '"' + r.name + '":' + xo(r.value) + ","
            }
            return e.slice(0, -1)
          }
          function xo(t) {
            return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
          }
          new RegExp(
            "\\b" +
              "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments"
                .split(",")
                .join("\\b|\\b") +
              "\\b"
          ),
            new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)")
          function wo(t, e) {
            try {
              return new Function(t)
            } catch (n) {
              return e.push({ err: n, code: t }), T
            }
          }
          var Mo,
            Oo,
            Co = ((Mo = function(t, e) {
              var n = za(t.trim(), e)
              !1 !== e.optimize && Ja(n, e)
              var r = co(n, e)
              return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns }
            }),
            function(t) {
              function e(e, n) {
                var r = Object.create(t),
                  i = [],
                  a = []
                if (
                  ((r.warn = function(t, e) {
                    ;(e ? a : i).push(t)
                  }),
                  n)
                )
                  for (var o in (n.modules && (r.modules = (t.modules || []).concat(n.modules)),
                  n.directives && (r.directives = E(Object.create(t.directives || null), n.directives)),
                  n))
                    "modules" !== o && "directives" !== o && (r[o] = n[o])
                var s = Mo(e, r)
                return (s.errors = i), (s.tips = a), s
              }
              return {
                compile: e,
                compileToFunctions: (function(t) {
                  var e = Object.create(null)
                  return function(n, r, i) {
                    ;(r = E({}, r)).warn, delete r.warn
                    var a = r.delimiters ? String(r.delimiters) + n : n
                    if (e[a]) return e[a]
                    var o = t(n, r),
                      s = {},
                      u = []
                    return (
                      (s.render = wo(o.render, u)),
                      (s.staticRenderFns = o.staticRenderFns.map(function(t) {
                        return wo(t, u)
                      })),
                      (e[a] = s)
                    )
                  }
                })(e),
              }
            })(Xa).compileToFunctions
          function So(t) {
            return (
              ((Oo = Oo || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>'),
              Oo.innerHTML.indexOf("&#10;") > 0
            )
          }
          var jo = !!Y && So(!1),
            Eo = !!Y && So(!0),
            Lo = b(function(t) {
              var e = Rn(t)
              return e && e.innerHTML
            }),
            To = dn.prototype.$mount
          ;(dn.prototype.$mount = function(t, e) {
            if ((t = t && Rn(t)) === document.body || t === document.documentElement) return this
            var n = this.$options
            if (!n.render) {
              var r = n.template
              if (r)
                if ("string" == typeof r) "#" === r.charAt(0) && (r = Lo(r))
                else {
                  if (!r.nodeType) return this
                  r = r.innerHTML
                }
              else
                t &&
                  (r = (function(t) {
                    if (t.outerHTML) return t.outerHTML
                    var e = document.createElement("div")
                    return e.appendChild(t.cloneNode(!0)), e.innerHTML
                  })(t))
              if (r) {
                0
                var i = Co(
                    r,
                    {
                      shouldDecodeNewlines: jo,
                      shouldDecodeNewlinesForHref: Eo,
                      delimiters: n.delimiters,
                      comments: n.comments,
                    },
                    this
                  ),
                  a = i.render,
                  o = i.staticRenderFns
                ;(n.render = a), (n.staticRenderFns = o)
              }
            }
            return To.call(this, t, e)
          }),
            (dn.compile = Co),
            (e.default = dn)
        }.call(e, n("DuR2"))
    },
    "77Pl": function(t, e, n) {
      var r = n("EqjI")
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!")
        return t
      }
    },
    "7Doy": function(t, e, n) {
      var r = n("EqjI"),
        i = n("7UMu"),
        a = n("dSzd")("species")
      t.exports = function(t) {
        var e
        return (
          i(t) &&
            ("function" != typeof (e = t.constructor) || (e !== Array && !i(e.prototype)) || (e = void 0),
            r(e) && null === (e = e[a]) && (e = void 0)),
          void 0 === e ? Array : e
        )
      }
    },
    "7Fm+": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(this.type, { tag: "component", staticClass: "lux-accessibility" }, [
            e("a", { attrs: { href: "https://accessibility.princeton.edu/" } }, [this._v("Accessibility")]),
          ])
        },
        i = []
    },
    "7KvD": function(t, e) {
      var n = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")())
      "number" == typeof __g && (__g = n)
    },
    "7UMu": function(t, e, n) {
      var r = n("R9M2")
      t.exports =
        Array.isArray ||
        function(t) {
          return "Array" == r(t)
        }
    },
    "7Wnp": function(t, e) {},
    "7qip": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "InputSelect",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          model: { event: "change" },
          computed: {
            hasError: function() {
              return this.errormessage.length
            },
          },
          props: {
            value: { type: String },
            multiple: { type: Boolean, default: !1 },
            options: { required: !0, type: Array },
            label: { type: String, default: "" },
            errormessage: { type: String, default: "" },
            wrapper: {
              type: String,
              default: "div",
              validator: function(t) {
                return t.match(/(div|section)/)
              },
            },
            id: { type: String, default: "", required: !0 },
            width: {
              type: String,
              default: "expand",
              validator: function(t) {
                return t.match(/(auto|expand)/)
              },
            },
            disabled: { type: Boolean, default: !1 },
            hover: { type: Boolean, default: !1 },
            focus: { type: Boolean, default: !1 },
          },
          methods: {
            change: function(t) {
              this.$emit("change", t.target.value)
            },
            inputblur: function(t) {
              this.$emit("inputblur", t)
            },
          },
        })
    },
    "7u11": function(t, e, n) {
      var r = { "./Index.vue": "wgSg", "./NotFound.vue": "drZW" }
      function i(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(i.keys = function() {
        return Object.keys(r)
      }),
        (i.resolve = a),
        (t.exports = i),
        (i.id = "7u11")
    },
    "82Mu": function(t, e, n) {
      var r = n("7KvD"),
        i = n("L42u").set,
        a = r.MutationObserver || r.WebKitMutationObserver,
        o = r.process,
        s = r.Promise,
        u = "process" == n("R9M2")(o)
      t.exports = function() {
        var t,
          e,
          n,
          c = function() {
            var r, i
            for (u && (r = o.domain) && r.exit(); t; ) {
              ;(i = t.fn), (t = t.next)
              try {
                i()
              } catch (r) {
                throw (t ? n() : (e = void 0), r)
              }
            }
            ;(e = void 0), r && r.enter()
          }
        if (u)
          n = function() {
            o.nextTick(c)
          }
        else if (!a || (r.navigator && r.navigator.standalone))
          if (s && s.resolve) {
            var l = s.resolve()
            n = function() {
              l.then(c)
            }
          } else
            n = function() {
              i.call(r, c)
            }
        else {
          var f = !0,
            d = document.createTextNode("")
          new a(c).observe(d, { characterData: !0 }),
            (n = function() {
              d.data = f = !f
            })
        }
        return function(r) {
          var i = { fn: r, next: void 0 }
          e && (e.next = i), t || ((t = i), n()), (e = i)
        }
      }
    },
    "880/": function(t, e, n) {
      t.exports = n("hJx8")
    },
    "8Jr4": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
                viewBox: "0 0 263 71.84",
                "aria-labelledby": "logo-university",
                role: "presentation",
              },
            },
            [
              e("title", { attrs: { id: this.logo - this.university, lang: "en" } }, [
                this._v("Princeton University Logo"),
              ]),
              this._v(" "),
              e("g", [
                e("path", {
                  staticClass: "pu-logo-mc-a",
                  attrs: { d: "M14.97 59.02a70.98 70.98 0 0 0 13.17 12.82 71.14 71.14 0 0 0 13.2-12.78L28.14 46.2z" },
                }),
                e("path", {
                  staticClass: "pu-logo-mc-a",
                  attrs: {
                    d:
                      "M8.82 49.84l19.33-18.56L47.5 49.89a68.7 68.7 0 0 0 7.16-18.66l.19-.95H1.46a68.77 68.77 0 0 0 7.36 19.56z",
                  },
                }),
                e("path", {
                  staticClass: "pu-logo-mc-a",
                  attrs: {
                    d:
                      "M8.81 49.84a69.87 69.87 0 0 0 6.16 9.18l13.17-12.8 13.2 12.84a69.44 69.44 0 0 0 6.16-9.17L28.14 31.28z",
                  },
                }),
                e("path", {
                  staticClass: "pu-logo-mc-b",
                  attrs: {
                    d:
                      "M28.14 45.87L15 58.65a69.87 69.87 0 0 1-5.87-8.77l19.01-18.26L47.2 49.94a69.4 69.4 0 0 1-5.86 8.75z",
                  },
                }),
                e("path", {
                  staticClass: "pu-logo-mc-b",
                  attrs: {
                    d:
                      "M28.14 31.97l18.73 18.01a69.18 69.18 0 0 1-5.57 8.33L28.49 45.85l-.35-.33-.35.33-12.77 12.43a69.61 69.61 0 0 1-5.58-8.35l18.7-17.96m0-.7L8.8 49.85a69.87 69.87 0 0 0 6.16 9.18l13.17-12.8 13.2 12.84a69.44 69.44 0 0 0 6.16-9.17L28.14 31.28zM56.06 10.5a24.6 24.6 0 0 1-7.18 1.07A24.12 24.12 0 0 1 28.16 0 24.13 24.13 0 0 1 7.44 11.55 24.7 24.7 0 0 1 .26 10.5a67.64 67.64 0 0 0 1.18 19.8h53.4a68 68 0 0 0 1.22-19.8z",
                  },
                }),
                e("path", {
                  staticStyle: { isolation: "isolate" },
                  attrs: {
                    d:
                      "M41.31 18.66v-2.27h-1.38v-1.6l-1.46-.4h-.1v-1.37s-.5.6-2.8.6c-2.18 0-3.46-.7-5.19-.7a2.36 2.36 0 0 0-2.18.95v.55h-.06v-.55a2.38 2.38 0 0 0-2.17-.96c-1.74 0-3.02.71-5.2.71-2.3 0-2.7-.6-2.7-.6v1.44h-.1l-1.57.33v1.6H15v2.27h1.4v3.67H15v2.27h1.4v2.82a33.88 33.88 0 0 0 4.5.37c2.55 0 4.02-.37 5.68-.4v.71a3.85 3.85 0 0 0 1.56.33 4.25 4.25 0 0 0 1.61-.33v-.71c1.66.03 3.13.4 5.7.4a33.84 33.84 0 0 0 4.48-.36V24.6h1.4v-2.27h-1.4v-3.67z",
                    fill: "#fff",
                  },
                }),
                e("path", {
                  staticClass: "pu-logo-mc-b",
                  attrs: {
                    d:
                      "M38.59 14.23v-1.74l-.42.45s-.52.52-2.62.52l-2.85-.38-2.35-.33a2.78 2.78 0 0 0-2.2.84 2.8 2.8 0 0 0-2.21-.84l-2.34.33-2.85.38c-2.07 0-2.5-.5-2.51-.5l-.43-.52-.01.66v1.2l-1.69.35V27.7l.2.03a34.02 34.02 0 0 0 4.54.37 51.76 51.76 0 0 0 5.44-.38v.6l.13.07a4.1 4.1 0 0 0 1.67.35 4.46 4.46 0 0 0 1.72-.35l.14-.07v-.6a51.8 51.8 0 0 0 5.45.38 34.05 34.05 0 0 0 4.53-.38l.2-.02V14.66zm-10.2-.17a2.14 2.14 0 0 1 1.96-.83l2.24.32 2.96.4a5.88 5.88 0 0 0 2.57-.43v12.34a7.16 7.16 0 0 1-2.57.38l-2.85-.38-2.35-.33a2.94 2.94 0 0 0-1.96.62zm-10.1-.51a5.53 5.53 0 0 0 2.46.4l2.95-.39 2.24-.32a2.16 2.16 0 0 1 1.97.83v12.09a2.96 2.96 0 0 0-1.99-.63l-2.34.33-2.83.38c-2.07 0-2.5-.5-2.5-.5l.03-12.2zm21.37 13.73a33.04 33.04 0 0 1-4.25.33 53.52 53.52 0 0 1-5.67-.4l-.27-.03V28a4.07 4.07 0 0 1-1.37.26 3.81 3.81 0 0 1-1.32-.25v-.83l-.27.03a53.51 53.51 0 0 1-5.66.4 33.09 33.09 0 0 1-4.25-.33V15.04l1.2-.25v11.09c.12.25.63.84 2.95.84l2.93-.38 2.24-.33a2.18 2.18 0 0 1 1.99.83l.07-.03h.34l.07.03a2.14 2.14 0 0 1 1.96-.83l2.24.32 2.96.39c2.35 0 2.94-.62 3-.69l.04-11.3 1.07.3z",
                  },
                }),
                e("path", {
                  staticClass: "pu-logo-mc-b",
                  attrs: {
                    d:
                      "M21.72 15.72a.42.42 0 0 0-.37.24l-.78 1.73a.15.15 0 0 1-.06.03c-.03 0-.05-.03-.07-.08l-.32-.78-.25-.56a4.78 4.78 0 0 0-.19-.39.37.37 0 0 0-.32-.19.08.08 0 0 1-.02-.05.11.11 0 0 1 .01-.05h1.08l.02.04a.13.13 0 0 1-.01.06c-.1 0-.31 0-.31.14a.33.33 0 0 0 .02.11l.51 1.21.43-1a.63.63 0 0 0 .05-.26c0-.12-.08-.17-.3-.2a.18.18 0 0 1 0-.04.23.23 0 0 1 0-.06h.07l.4.01h.4l.02.04a.14.14 0 0 1-.01.05zm2.16 1.94c-.62 0-.95-.02-1.04-.02h-.3l-.5.02h-.12a.09.09 0 0 1 0-.05.26.26 0 0 1 0-.06.82.82 0 0 0 .3-.06.6.6 0 0 0 .07-.32v-1.2c0-.22-.11-.22-.34-.25a.24.24 0 0 1-.01-.05c0-.02 0-.05.02-.05h1.77c.05 0 .07 0 .07.04l.02.47-.05.02a.15.15 0 0 1-.05 0 .92.92 0 0 0-.3-.36.32.32 0 0 0-.19-.05h-.5c-.02 0-.02 0-.03.08l-.01.41v.27h.07a1 1 0 0 0 .23-.02.4.4 0 0 0 .2-.15.92.92 0 0 0 .06-.17.13.13 0 0 1 .06-.02.1.1 0 0 1 .05.02l-.01.44v.4a.07.07 0 0 1-.05.02.24.24 0 0 1-.06 0c-.02-.17-.05-.3-.2-.35a.55.55 0 0 0-.22-.05l-.14.01v.54a.67.67 0 0 0 .03.24.2.2 0 0 0 .12.11 1 1 0 0 0 .2.02h.29a.58.58 0 0 0 .22-.04 1.12 1.12 0 0 0 .33-.44.16.16 0 0 1 .06 0 .17.17 0 0 1 .06 0v.55c0 .04-.03.05-.1.05zm2.47-1.4h-.06a1.29 1.29 0 0 0-.15-.3.48.48 0 0 0-.38-.2h-.2v1.52c0 .24.1.24.35.27a.11.11 0 0 1 .02.06.1.1 0 0 1-.01.05h-.1l-.5-.01-.53.01a.07.07 0 0 1-.02-.05.12.12 0 0 1 .02-.06c.32-.02.36-.08.37-.18V16a1.27 1.27 0 0 0-.01-.25 1.4 1.4 0 0 0-.32.02.81.81 0 0 0-.41.45.2.2 0 0 1-.05 0 .06.06 0 0 1-.05-.02v-.53c0-.04 0-.06.06-.06h.97l.95-.01c.05 0 .08 0 .1.02a.4.4 0 0 1 0 .07v.53a.06.06 0 0 1-.05.02zm-4.73 3.2h-.06a1 1 0 0 0-.16-.3.48.48 0 0 0-.38-.2h-.2v1.52c0 .24.12.24.36.27a.1.1 0 0 1 .02.06.1.1 0 0 1-.01.05h-1.13a.1.1 0 0 1-.02-.05.25.25 0 0 1 .01-.05c.33-.03.36-.09.38-.2V19.2a1.3 1.3 0 0 0-.02-.25 1.45 1.45 0 0 0-.32.02.8.8 0 0 0-.4.45.25.25 0 0 1-.06 0 .06.06 0 0 1-.05-.02v-.52c0-.05 0-.06.06-.06h.97c.5 0 .86-.02.95-.02.05 0 .09 0 .1.02s0 .05 0 .08v.52a.06.06 0 0 1-.04.04zm2.34 1.4H22a.1.1 0 0 1-.02-.04.13.13 0 0 1 .02-.07.76.76 0 0 0 .3-.06c.05-.05.06-.13.07-.32l.01-.3v-.91c0-.22-.1-.22-.34-.25a.12.12 0 0 1-.01-.05c0-.02 0-.05.02-.06h1.77c.05 0 .07 0 .07.05l.02.47a.1.1 0 0 1-.05.02.17.17 0 0 1-.05 0 .85.85 0 0 0-.32-.35.3.3 0 0 0-.17-.05h-.51c-.02 0-.03 0-.03.08v.67h.06a.95.95 0 0 0 .23-.02.4.4 0 0 0 .22-.15.9.9 0 0 0 .04-.17.15.15 0 0 1 .06-.02.1.1 0 0 1 .06.02l-.02.44.01.4a.08.08 0 0 1-.06.02.27.27 0 0 1-.06 0c-.02-.17-.04-.3-.2-.35a.55.55 0 0 0-.21-.05 1.31 1.31 0 0 0-.14.01v.54a.84.84 0 0 0 .02.24c.02.03.07.1.12.11a1.07 1.07 0 0 0 .2.02h.3a.56.56 0 0 0 .21-.04 1.09 1.09 0 0 0 .33-.44.15.15 0 0 1 .07 0 .14.14 0 0 1 .05 0v.55c0 .05-.04.05-.11.05zm1.44.05a1.16 1.16 0 0 1-.47-.12.23.23 0 0 0-.08-.02.42.42 0 0 0-.15.08.13.13 0 0 1-.12-.06c0-.04.04-.17.04-.25l-.02-.33a.11.11 0 0 1 .09-.05h.03a4.29 4.29 0 0 0 .2.4.64.64 0 0 0 .45.22.44.44 0 0 0 .33-.1.29.29 0 0 0 .11-.25.26.26 0 0 0-.05-.19.5.5 0 0 0-.22-.15c-.09-.04-.4-.12-.52-.18a.82.82 0 0 1-.28-.2.63.63 0 0 1-.12-.38.58.58 0 0 1 .63-.57.76.76 0 0 1 .49.14 1.4 1.4 0 0 1 .12-.12.11.11 0 0 1 .1.06 2.24 2.24 0 0 0-.03.28l.04.3a.2.2 0 0 1-.09.03.14.14 0 0 1-.03-.01c-.06-.1-.11-.27-.17-.36a.46.46 0 0 0-.41-.17.34.34 0 0 0-.37.3c0 .17.14.25.25.3l.3.1a2.8 2.8 0 0 1 .33.13.56.56 0 0 1 .34.54.66.66 0 0 1-.72.63zm-2.96 3.17c-.62 0-.95-.02-1.04-.02h-.3l-.5.02h-.12a.09.09 0 0 1 0-.05.24.24 0 0 1 0-.06.83.83 0 0 0 .3-.06.6.6 0 0 0 .07-.32v-1.2c0-.22-.11-.22-.34-.25a.25.25 0 0 1-.01-.05c0-.02 0-.05.02-.05h1.77c.05 0 .07 0 .07.04l.02.47-.05.02a.14.14 0 0 1-.05 0 .92.92 0 0 0-.3-.36.32.32 0 0 0-.19-.05h-.5c-.02 0-.02 0-.03.08l-.01.41v.27h.07a1 1 0 0 0 .23-.03.4.4 0 0 0 .2-.14.9.9 0 0 0 .06-.17.13.13 0 0 1 .06-.02.1.1 0 0 1 .05.02l-.02.44.01.4a.07.07 0 0 1-.05.02.24.24 0 0 1-.06 0c-.02-.18-.05-.3-.2-.36a.55.55 0 0 0-.22-.04 1.3 1.3 0 0 0-.14 0v.54a.67.67 0 0 0 .03.25.2.2 0 0 0 .12.11 1.03 1.03 0 0 0 .2.01h.28a.58.58 0 0 0 .23-.03 1.13 1.13 0 0 0 .32-.44.17.17 0 0 1 .13 0v.54c0 .05-.03.06-.1.06zm2.99-1.95c-.21.01-.4.12-.4.46v1.05l.03.45a.22.22 0 0 1-.09.03.14.14 0 0 1-.05-.03l-1.44-1.55.01.32v.57c0 .04 0 .15.02.23a.26.26 0 0 0 .1.22.53.53 0 0 0 .27.09.1.1 0 0 1 .02.05.12.12 0 0 1-.02.05h-.91a.18.18 0 0 1 0-.04.13.13 0 0 1 .01-.05.5.5 0 0 0 .33-.14.68.68 0 0 0 .03-.25v-1.04a.36.36 0 0 0-.08-.22.74.74 0 0 0-.1-.1 1.18 1.18 0 0 0-.23-.1.16.16 0 0 1-.01-.05.1.1 0 0 1 .01-.06h.05l.44.01h.1a.2.2 0 0 1 .06.05l1.07 1.17.25.28v-.84l-.01-.24a.56.56 0 0 0-.07-.22c-.03-.05-.23-.08-.33-.1a.14.14 0 0 1-.01-.06.16.16 0 0 1 0-.04h.06l.36.01h.53a.11.11 0 0 1 0 .05.1.1 0 0 1 0 .04zm6.75-6.42c-.2 0-.39.12-.39.46v1.05l.01.45a.2.2 0 0 1-.08.03c-.01 0-.02 0-.05-.03l-1.45-1.55.02.32V17l.01.23a.29.29 0 0 0 .1.22.56.56 0 0 0 .28.09.1.1 0 0 1 .01.05.17.17 0 0 1-.01.05h-.9a.2.2 0 0 1-.01-.04.1.1 0 0 1 .01-.05.5.5 0 0 0 .33-.14.59.59 0 0 0 .03-.25v-1.04a.4.4 0 0 0-.07-.22.92.92 0 0 0-.1-.1 1.07 1.07 0 0 0-.24-.1.38.38 0 0 1 0-.05.2.2 0 0 1 0-.05h.59a.31.31 0 0 1 .07.05l1.07 1.17.24.28v-.84a2.03 2.03 0 0 0-.01-.24.5.5 0 0 0-.06-.22c-.04-.05-.24-.08-.34-.1a.15.15 0 0 1-.01-.06.09.09 0 0 1 0-.04h.07l.36.01h.52a.13.13 0 0 1 .01.04.1.1 0 0 1-.01.05zm2.13 1.69a1.02 1.02 0 0 1-1.45.01 1.13 1.13 0 0 1 0-1.55 1.02 1.02 0 0 1 .72-.3 1.1 1.1 0 0 1 .54.14 1.07 1.07 0 0 1 .5.91 1.14 1.14 0 0 1-.31.79zm-.34-1.5a.48.48 0 0 0-.4-.21.44.44 0 0 0-.38.21 1.18 1.18 0 0 0-.2.72 1.23 1.23 0 0 0 .19.72.45.45 0 0 0 .4.23.47.47 0 0 0 .44-.28 1.33 1.33 0 0 0 .14-.66 1.2 1.2 0 0 0-.19-.73zm3.25-.18a.41.41 0 0 0-.37.24l-.78 1.73a.15.15 0 0 1-.06.03c-.02 0-.06-.03-.07-.08l-.32-.78-.25-.56a4.78 4.78 0 0 0-.18-.4.38.38 0 0 0-.33-.18.07.07 0 0 1-.02-.05.08.08 0 0 1 .01-.06h.13l.38.01.49-.01h.08c.02 0 .02.03.02.05a.13.13 0 0 1 0 .05c-.1.01-.32 0-.32.14a.25.25 0 0 0 .02.12l.5 1.21.44-1a.69.69 0 0 0 .05-.27c0-.1-.08-.16-.3-.18a.17.17 0 0 1 0-.05.25.25 0 0 1 0-.06h.07l.4.01h.42a.1.1 0 0 1 0 .1zm-5.7 3.74h-.07a1 1 0 0 0-.15-.3.47.47 0 0 0-.38-.2h-.2v1.52c0 .24.11.24.36.27a.1.1 0 0 1 .01.06.1.1 0 0 1 0 .05h-1.15a.1.1 0 0 1-.01-.05.24.24 0 0 1 0-.05c.33-.03.37-.09.38-.2V19.2a1.32 1.32 0 0 0-.01-.25 1.45 1.45 0 0 0-.33.02.8.8 0 0 0-.4.45.24.24 0 0 1-.06 0 .06.06 0 0 1-.05-.02v-.52c0-.05.01-.06.07-.06h.97c.48 0 .85-.02.94-.02.06 0 .09 0 .1.02s0 .05 0 .08v.52a.06.06 0 0 1-.04.04zm2.45 1.4h-1.05a.08.08 0 0 1-.01-.05.17.17 0 0 1 0-.04c.2-.01.28-.05.28-.13a.7.7 0 0 0-.06-.26c-.06-.16-.1-.22-.1-.26-.02-.01-.02-.02-.06-.02h-.65a1.41 1.41 0 0 0-.15.39.45.45 0 0 0-.02.12c0 .06.07.14.3.14a.1.1 0 0 1 0 .06.17.17 0 0 1 0 .05h-.05l-.35-.01h-.45a.14.14 0 0 1 0-.03.12.12 0 0 1 0-.06.44.44 0 0 0 .3-.15 3.25 3.25 0 0 0 .26-.53l.31-.76.14-.3a4 4 0 0 1 .11-.21.13.13 0 0 1 .08-.04.12.12 0 0 1 .1.04.58.58 0 0 1 .04.1l.36.89.2.47.14.3c.08.16.2.16.32.2l.02.04-.01.05zm-1.3-1.62a3.76 3.76 0 0 0-.15.33 9.13 9.13 0 0 1-.16.4h.6c-.04-.13-.2-.5-.29-.73zm4.46 1.63l-.83-.01h-.23a.15.15 0 0 1-.01-.06.07.07 0 0 1 .02-.05 1.06 1.06 0 0 0 .2-.02c.08-.03.12-.12.12-.24V19l-.44.96-.15.33a4.29 4.29 0 0 0-.18.47.06.06 0 0 1-.07.03c-.03 0-.05 0-.06-.05-.06-.13-.1-.2-.11-.26l-.69-1.5h-.01v.38l.01.96c0 .3.16.43.39.43a.16.16 0 0 1 .02.05.12.12 0 0 1-.02.05H35l-.4-.01h-.42a.2.2 0 0 1-.01-.05.24.24 0 0 1 0-.05 1.06 1.06 0 0 0 .3-.1c.05-.04.09-.13.09-.33v-1.05c0-.16-.03-.23-.1-.29a1.02 1.02 0 0 0-.27-.05.14.14 0 0 1-.02-.05.17.17 0 0 1 .02-.06h.86a.12.12 0 0 1 .05.06l.6 1.38.12-.27c.1-.23.23-.56.42-.92l.12-.24.78-.01a.12.12 0 0 1 .02.05.1.1 0 0 1-.01.05c-.09.02-.24.02-.3.13-.03.04-.04.08-.04.25v.99c0 .38.1.41.14.44a.74.74 0 0 0 .2.03.1.1 0 0 1 .02.05l-.03.06zm-5.67 1.8h-.06a1 1 0 0 0-.15-.3.48.48 0 0 0-.38-.2h-.2v1.53c0 .24.11.24.36.27a.1.1 0 0 1 .01.06.1.1 0 0 1 0 .05h-.1l-.51-.01-.53.01a.1.1 0 0 1-.01-.05.25.25 0 0 1 0-.06c.33-.02.37-.08.38-.18v-1.36a1.3 1.3 0 0 0-.01-.26 1.45 1.45 0 0 0-.32.03.8.8 0 0 0-.41.45.24.24 0 0 1-.06 0 .06.06 0 0 1-.05-.02v-.53c0-.05.01-.06.07-.06h.97c.49 0 .85-.02.94-.02.06 0 .09 0 .1.02s0 .05 0 .08v.52a.06.06 0 0 1-.04.03zm2.55-.53a.41.41 0 0 0-.37.24l-.78 1.73a.15.15 0 0 1-.06.03c-.02 0-.05-.03-.07-.08l-.32-.78-.25-.56a4.69 4.69 0 0 0-.18-.4.38.38 0 0 0-.33-.18.07.07 0 0 1-.02-.05.08.08 0 0 1 .02-.06h.12l.38.01.49-.01h.08c.02 0 .02.03.02.05a.13.13 0 0 1 0 .05c-.1.01-.32 0-.32.14a.25.25 0 0 0 .02.12l.51 1.2.43-1a.69.69 0 0 0 .05-.26c0-.11-.08-.16-.29-.19a.17.17 0 0 1 0-.04.24.24 0 0 1 0-.07h.06c.1 0 .19.02.4.02l.26-.01h.15a.1.1 0 0 1 0 .1zm3.16 1.94l-.82-.01h-.23a.12.12 0 0 1-.01-.05.06.06 0 0 1 .01-.06 1.09 1.09 0 0 0 .2-.01c.09-.04.12-.13.12-.25v-1.48l-.44.96-.15.33a5.46 5.46 0 0 0-.18.46c-.01.04-.05.04-.07.04s-.04 0-.06-.06c-.05-.12-.1-.2-.11-.25l-.69-1.5h-.01v.38l.01.96c0 .3.16.43.4.43a.13.13 0 0 1 0 .05.11.11 0 0 1 0 .05h-.11l-.4-.01h-.42a.1.1 0 0 1-.02-.06.11.11 0 0 1 .02-.04 1.1 1.1 0 0 0 .3-.1.49.49 0 0 0 .07-.33v-1.05c0-.17-.02-.23-.1-.3a1.03 1.03 0 0 0-.26-.04.1.1 0 0 1-.02-.06.12.12 0 0 1 .02-.06l.36.01h.5a.12.12 0 0 1 .04.05l.6 1.39.12-.28a9.22 9.22 0 0 1 .43-.92l.12-.23.77-.02c.01.02.03.03.03.05a.12.12 0 0 1-.02.06c-.08 0-.23 0-.3.13-.03.04-.05.07-.05.24v.99c0 .38.1.42.15.45a.67.67 0 0 0 .2.02.08.08 0 0 1 .02.06c0 .03 0 .04-.02.06zm225.4-12.3a.83.83 0 0 0-.07-.37h-.6c-1.33 0-2.18.05-4.56.05-.82 0-2.04-.05-2.32-.05h-.7c-.07.05-.1.34-.1.45a.7.7 0 0 0 .13.45 11.1 11.1 0 0 1 2.73.76 5.15 5.15 0 0 1 .77 2.7c.02.4.05.8.05 1.88v5.53a10.62 10.62 0 0 1-.05 1.14c-.46-.5-1.09-1.46-2.15-2.65l-8.83-9.79a1.73 1.73 0 0 0-.4-.34l-.8-.02c-1.7 0-4.75-.08-5.2-.08a.97.97 0 0 0-.11.37 4.4 4.4 0 0 0 .08.5 3.63 3.63 0 0 1 1.98 1 8.9 8.9 0 0 1 1.4 1.67 2.3 2.3 0 0 1 .11.84c0 1.38-.08 3.31-.08 5.16v5.37a11.7 11.7 0 0 1-.16 2.01 5.5 5.5 0 0 1-2.77 1.35 1.54 1.54 0 0 0-.1.48c0 .08.02.34.07.36h.5c.53 0 1.75-.08 2.54-.08 1.17 0 1.96.08 3.04.08h1.6c.1-.02.12-.34.12-.45a1.22 1.22 0 0 0-.08-.42 5.09 5.09 0 0 1-3.17-1.64 15.06 15.06 0 0 1-.34-3.28c0-.84-.03-2-.03-3.57 0-2.09.03-3.91.06-4.83l.47.57 12.22 13.73a1.53 1.53 0 0 0 .74.16.63.63 0 0 0 .32-.05 3.05 3.05 0 0 0 .23-1.2l-.02-1.95V16.6c0-3.3 1.56-4.23 3.38-4.31a1.13 1.13 0 0 0 .1-.5m-30.3 8.4c0 4-1.11 7.52-2.62 8.76a4.29 4.29 0 0 1-2.8.96 3.96 3.96 0 0 1-3.51-1.78 14.08 14.08 0 0 1-1.56-6.87c0-3.68.95-6.56 2.64-7.96a4.21 4.21 0 0 1 2.75-1.03 4.4 4.4 0 0 1 3.6 1.82c1 1.38 1.5 3.36 1.5 6.1m4.8.5a8.87 8.87 0 0 0-4.71-8.22 10.22 10.22 0 0 0-5.03-1.35 10.77 10.77 0 0 0-8.91 4.93 10.1 10.1 0 0 0-1.53 5.34 9.86 9.86 0 0 0 3.78 7.75 9.92 9.92 0 0 0 6.03 1.9 10.95 10.95 0 0 0 4.02-.77 9.53 9.53 0 0 0 3.67-2.51 10.21 10.21 0 0 0 2.67-7.06m-23.24-3.33v-5.4c0-.4-.16-.5-.55-.5-.8 0-4.97.1-9.2.1-3.29 0-6.01-.05-7.49-.05h-1.96c-.34 0-.45.08-.45.45V17a.77.77 0 0 0 .43.1 2.02 2.02 0 0 0 .58-.05c1.19-2.4 2.3-3.7 3.7-4.42.79-.07 2.35-.1 2.77-.1.03.3.06 1.22.08 2.33.03 1.9.03 2.72.03 7.22 0 3.89-.03 5.63-.08 6.05-.1.74.02 1.3-3.15 1.44a1.5 1.5 0 0 0-.08.6 2.1 2.1 0 0 0 .03.42h1.02c.98 0 3.28-.1 4.24-.1.76 0 3.22.08 4.83.08h.74a1.33 1.33 0 0 0 .08-.55.99.99 0 0 0-.1-.48 5.48 5.48 0 0 1-2.72-.5 8.08 8.08 0 0 1-.24-1.98c-.03-2.86-.05-3.94-.05-5.85 0-2.45.02-4.12.02-8.7.37 0 1.22-.02 2.01 0a5.18 5.18 0 0 1 3.15 2.01 13.32 13.32 0 0 1 1.4 2.89 1.34 1.34 0 0 0 .45.05 1.42 1.42 0 0 0 .5-.1m-22.8 8.6a5.82 5.82 0 0 0-.02-.77.59.59 0 0 0-.4-.08 2.22 2.22 0 0 0-.58.05 10.1 10.1 0 0 1-2.91 4.03 4.03 4.03 0 0 1-1.99.3h-2.16a9.74 9.74 0 0 1-1.75-.14c-.4-.08-.82-.71-1-1.14a2.77 2.77 0 0 1-.29-1.66v-5.79h.98a4.17 4.17 0 0 1 1.61.37 2.44 2.44 0 0 1 1.2 1.11 9.1 9.1 0 0 1 .44 2.2 1.89 1.89 0 0 0 .7.1.94.94 0 0 0 .52-.14c0-.71-.16-2.64-.16-3.7 0-1.32.18-3.14.26-4.09a1.07 1.07 0 0 0-.52-.1 1.93 1.93 0 0 0-.69.07c-.08.37-.37 1.48-.43 1.56a3.2 3.2 0 0 1-1.8 1.38 7.12 7.12 0 0 1-1.53.2h-.56v-2.45c0-2.54.06-3.36.08-3.84l.1-.9a10.93 10.93 0 0 1 1.6-.05c1.53 0 2.24.02 2.48.02a3.02 3.02 0 0 1 1.7.53 11.22 11.22 0 0 1 2.53 3.28 2.11 2.11 0 0 0 .56.05c.16 0 .18-.05.4-.15 0-1.62-.11-3.7-.16-4.37-.03-.26-.08-.34-.6-.34-.22 0-1.23-.05-2.28-.05-1.5 0-2.12.02-4.42.02l-4.9.03c-1.58 0-2.93-.05-3.62-.05h-.9a.86.86 0 0 0-.13.42 1.19 1.19 0 0 0 .13.53 13.43 13.43 0 0 1 1.94.29 2.17 2.17 0 0 1 .95 1.72c.05.56.08 2.09.08 3.3v5.45c0 1.11-.03 2.73-.06 3.39a7.65 7.65 0 0 1-.58 2.51 6.99 6.99 0 0 1-2.38.4 1.6 1.6 0 0 0-.13.58 1.02 1.02 0 0 0 .13.48h.87c.85 0 3.97-.08 4.69-.08.66 0 1.93.05 3.46.05.85 0 3.33.16 8.67.16a2.25 2.25 0 0 0 .72-.06.8.8 0 0 0 .1-.42c.06-.53.06-2.09.06-4.23m-22.37.92a.88.88 0 0 0-.9-.63l-.19.03c-1.59 2.25-3.33 3.09-5.32 3.09a5.8 5.8 0 0 1-5.34-3.5 14.5 14.5 0 0 1-.82-4.8 11.67 11.67 0 0 1 .8-4.63c1.16-3.07 2.85-4.02 4.92-4.02a5.42 5.42 0 0 1 4.23 2.38 11.87 11.87 0 0 1 1.34 3.2 2.82 2.82 0 0 0 .59.07 1.29 1.29 0 0 0 .63-.23c-.02-.3-.29-2.33-.29-2.97 0-.79.21-2.08.21-2.59a2.1 2.1 0 0 0-1.03-.29 5.18 5.18 0 0 0-.9 1.09 8.7 8.7 0 0 0-5.87-1.88 9.02 9.02 0 0 0-6.64 2.62 10.04 10.04 0 0 0-2.83 7.45 9.67 9.67 0 0 0 3.73 7.91 10.54 10.54 0 0 0 6.16 1.77c3.23 0 5.59-1.21 6.77-2.82a5.54 5.54 0 0 0 .75-1.25m-20.59-15.1a.86.86 0 0 0-.08-.37h-.61c-1.32 0-2.17.05-4.55.05-.82 0-2.04-.05-2.33-.05h-.68c-.08.05-.11.35-.11.45a.69.69 0 0 0 .14.45 11.22 11.22 0 0 1 2.72.77 5.2 5.2 0 0 1 .76 2.7c.03.39.06.79.06 1.87v5.53a9.04 9.04 0 0 1-.06 1.14c-.44-.5-1.08-1.46-2.14-2.65l-8.82-9.78a1.75 1.75 0 0 0-.4-.34l-.79-.03c-1.7 0-4.76-.08-5.21-.08a.97.97 0 0 0-.1.37 4.37 4.37 0 0 0 .07.5 3.62 3.62 0 0 1 1.99 1 8.75 8.75 0 0 1 1.4 1.67 2.3 2.3 0 0 1 .1.84c0 1.38-.07 3.31-.07 5.16v5.37a11.62 11.62 0 0 1-.16 2.01 5.5 5.5 0 0 1-2.78 1.35 1.6 1.6 0 0 0-.1.48c0 .08.02.34.08.37h.5c.53 0 1.74-.09 2.54-.09 1.16 0 1.95.09 3.04.09h1.57c.1-.03.14-.35.14-.45a1.24 1.24 0 0 0-.08-.43 5.08 5.08 0 0 1-3.17-1.64 15.19 15.19 0 0 1-.34-3.28c0-.84-.03-2-.03-3.57 0-2.08.03-3.9.06-4.83.16.18.34.42.47.58l12.21 13.73a1.54 1.54 0 0 0 .74.16.62.62 0 0 0 .32-.05 3.05 3.05 0 0 0 .23-1.2c0-.76-.03-1.56-.03-1.95V16.59c0-3.3 1.57-4.23 3.4-4.31a1.13 1.13 0 0 0 .1-.5M121.91 30.1a1.77 1.77 0 0 0-.08-.53 19.7 19.7 0 0 1-1.95-.23 4.16 4.16 0 0 1-.9-2.04 362.9 362.9 0 0 1-.06-6.35v-6.5a2.1 2.1 0 0 1 .48-1.43 4.55 4.55 0 0 1 2.36-.69 1.66 1.66 0 0 0 .07-.5.78.78 0 0 0-.13-.42h-.77c-1.1 0-3.7.13-4.6.13-.55 0-3.14-.08-4.3-.1h-.58a.63.63 0 0 0-.14.45 3.24 3.24 0 0 0 .05.5 5.55 5.55 0 0 1 2.07.37 2.92 2.92 0 0 1 .87 2.24c.02.5.05 1.59.08 4.02.02 1.33.05 3.17.05 4.7 0 .77-.05 2.49-.08 3.41a4.53 4.53 0 0 1-.37 1.6c-.31.26-.63.73-2.57.86a2.04 2.04 0 0 0-.08.56c0 .21.06.32.06.45h.45c1.06 0 3.7-.14 5.07-.14.4 0 3.15.09 4.02.09h.88a1.06 1.06 0 0 0 .1-.45M100.7 16.3c0 1.64-1.11 3.52-2.4 3.83a8.86 8.86 0 0 1-2.17.22 5.97 5.97 0 0 1-.98-.06l-.03-2.25v-4.86a.84.84 0 0 1 .16-.58 2.64 2.64 0 0 1 1.12-.16c2.06 0 2.96.18 3.7 1.43a4.71 4.71 0 0 1 .6 2.43m7.67 13.83a1.29 1.29 0 0 0-.13-.56 4.04 4.04 0 0 1-1.75-.34 5.34 5.34 0 0 1-.45-.66 28.67 28.67 0 0 0-1.13-3.04 10 10 0 0 0-1.96-3.15 8.43 8.43 0 0 0-1.99-.87 27.45 27.45 0 0 1-1.08-.43 8.26 8.26 0 0 1 1.08-.15c1.96-.24 2.41-.58 2.91-.98a4.17 4.17 0 0 0 1.64-3.44 5.08 5.08 0 0 0-3.3-4.82 12.98 12.98 0 0 0-3.17-.28c-1.99 0-4.76.18-6.08.18-.4 0-2.7-.05-3.63-.05-.4 0-1.4-.05-1.56-.05a1.52 1.52 0 0 0-.13.5 2.94 2.94 0 0 0 .05.47c.45.05 1.27.16 1.7.24a3.13 3.13 0 0 1 1.1 1.43 67.13 67.13 0 0 1 .17 6.74c0 2.7.02 5.82-.1 6.83a2.01 2.01 0 0 1-1.09 1.77 13.67 13.67 0 0 1-1.5.18 1.3 1.3 0 0 0-.14.53 1.64 1.64 0 0 0 .1.42c.37 0 4.42-.07 5.26-.07 1.7 0 3.13.07 4.63.07a1.1 1.1 0 0 0 .1-.4 1.65 1.65 0 0 0-.1-.55c-.53-.05-1.19-.2-1.48-.27a1.98 1.98 0 0 1-1.14-1.87l-.02-6.11a5.52 5.52 0 0 1 .69-.03 2.7 2.7 0 0 1 1.4.42 5.12 5.12 0 0 1 2.09 1.94 16.1 16.1 0 0 1 1.66 5.68c.08.56.3 1.03.8 1.09.2.02 1.6.08 2.61.08h3.79a.73.73 0 0 0 .15-.45m-28.72-13.7a4.33 4.33 0 0 1-1.34 3.3 4.3 4.3 0 0 1-2.76.72 8.66 8.66 0 0 1-1.13-.05c-.21-.03-.35-.05-.35-.19l.03-7.75a12.09 12.09 0 0 1 1.53-.13c1.8 0 2.91.45 3.44 1.56a5.63 5.63 0 0 1 .58 2.54m4.73.1a5.06 5.06 0 0 0-2.82-4.6 13.08 13.08 0 0 0-4.74-.6c-2.03 0-5.2.16-6.6.16-.99 0-2.47-.11-3.29-.11a.97.97 0 0 0-.13.42 1.27 1.27 0 0 0 .08.53c.5.16 1.32.3 1.85.43a2.26 2.26 0 0 1 .71 1.5c.08.93.14 2.1.14 4.1 0 5.59-.03 8.52-.11 9.15a2.24 2.24 0 0 1-1.5 1.88 14.8 14.8 0 0 1-1.54.26 2.8 2.8 0 0 0-.06.56.74.74 0 0 0 .08.37c.85 0 3.34-.1 4.29-.1 2.35 0 4.76.1 5.73.1h.67a.76.76 0 0 0 .08-.42 1.28 1.28 0 0 0-.06-.48 4.3 4.3 0 0 1-2.48-.85 2.25 2.25 0 0 1-.53-1.56l-.08-5.81c1.58.1 3.28.15 4.2.15a9.93 9.93 0 0 0 3.07-.47 4.84 4.84 0 0 0 3.04-4.6M263 41.28c0-.16-.1-.22-.16-.32-1.08 0-2.51.08-3.07.08-1.34 0-2.98-.1-3.7-.1-.08.15-.1.18-.1.3a.94.94 0 0 0 .05.33c.77.15 1.88.34 2.09.71a1.9 1.9 0 0 1 .24 1.03 2.58 2.58 0 0 1-.16.98c-.24.66-.74 1.7-1.45 3.15a52.4 52.4 0 0 1-2.41 4.6 91.87 91.87 0 0 1-2.6-5.02l-1.47-3.23a2.45 2.45 0 0 1-.1-.72 1.76 1.76 0 0 1 .1-.68c.23-.48 1.05-.53 2.17-.67a1.16 1.16 0 0 0 .07-.39c0-.18-.08-.13-.16-.26h-.47c-1.77 0-1.25.08-4.29.08-1.3 0-2.85-.08-3.06-.08-.1.18-.16.2-.16.4a.57.57 0 0 0 .1.31c1.77.42 2.3.74 2.49 1.09l4.63 9.07a10.46 10.46 0 0 1 .84 1.98 14.71 14.71 0 0 1 .22 3.17 2.25 2.25 0 0 1-.85 2.04 12.68 12.68 0 0 1-2.12.34.63.63 0 0 0-.13.37 1.12 1.12 0 0 0 .08.32c1.35 0 2.75-.03 3.54-.03.56 0 1.4.03 2.97.06.9.02 1.58.05 2.06.05a.78.78 0 0 0 .13-.34.58.58 0 0 0-.1-.35 6.33 6.33 0 0 1-2.3-.53 2.03 2.03 0 0 1-.7-1.69l-.2-3.97a1.46 1.46 0 0 1 .1-.63 3.98 3.98 0 0 1 .29-.74l4.07-8.06a5.47 5.47 0 0 1 1.7-1.78 7.42 7.42 0 0 1 1.72-.53.97.97 0 0 0 .1-.34m-21.37 5.45v-5.14c0-.4-.16-.5-.55-.5-.8 0-4.45.1-8.68.1-3.28 0-5.47-.05-6.96-.05h-1.95c-.34 0-.45.08-.45.45v4.79a.47.47 0 0 0 .31.1.69.69 0 0 0 .32-.05c1.03-2.3 1.56-3.52 3.34-4.42.79-.08 3.56-.1 3.99-.1.02.29.05 1.21.08 2.33.03 1.9.03 2.93.03 7.43 0 3.89-.03 5.9-.09 6.32-.1.74.03 1.3-3.14 1.43a.84.84 0 0 0-.08.45 1.22 1.22 0 0 0 .03.31h1.03c.97 0 2.27-.1 3.22-.1.77 0 2.22.08 3.84.08h.74a.7.7 0 0 0 .08-.4.6.6 0 0 0-.11-.37 5.44 5.44 0 0 1-2.72-.5 8.07 8.07 0 0 1-.24-1.98c-.03-2.86-.05-4.2-.05-6.11 0-2.46.02-4.34.02-8.91.37 0 2.33-.03 3.13 0a4.76 4.76 0 0 1 2.98 2 8.48 8.48 0 0 1 1.19 2.89 1.05 1.05 0 0 0 .4.05.5.5 0 0 0 .3-.1M219.65 59.8a.85.85 0 0 0-.08-.37c-.4-.03-1.48-.14-1.96-.24a4.18 4.18 0 0 1-.9-2.04 398.46 398.46 0 0 1-.05-6.61v-6.71a2.12 2.12 0 0 1 .47-1.43 4.51 4.51 0 0 1 2.36-.69.78.78 0 0 0 .08-.34.45.45 0 0 0-.13-.32h-.76c-1.12 0-2.7.13-3.6.13-.56 0-2.15-.08-3.3-.1h-.59a.38.38 0 0 0-.13.34 1.82 1.82 0 0 0 .05.35 5.7 5.7 0 0 1 2.07.37 2.93 2.93 0 0 1 .87 2.25c.03.5.05 1.85.08 4.28.03 1.32.05 3.12.05 4.65 0 .77-.05 2.75-.08 3.68a4.5 4.5 0 0 1-.37 1.58c-.32.27-.63.74-2.56.88a1.06 1.06 0 0 0-.08.4c0 .2.05.2.05.34h.45c1.06 0 2.7-.13 4.07-.13.4 0 2.14.07 3.02.07h.87a.64.64 0 0 0 .1-.34m-13.06-4.86a4.9 4.9 0 0 0-2.99-4.66 14.79 14.79 0 0 0-2.93-1.06 19.17 19.17 0 0 1-3.84-1.45 3.17 3.17 0 0 1-1.56-2.88c0-1.7 1.72-3.1 3.73-3.1a4.43 4.43 0 0 1 3.62 1.85 13.49 13.49 0 0 1 1.64 3.02 1.05 1.05 0 0 0 .27.05.86.86 0 0 0 .58-.26 20.75 20.75 0 0 1-.21-2.38 13.8 13.8 0 0 1 .24-2.07.81.81 0 0 0-.8-.37 5.88 5.88 0 0 0-1.03.96 6.6 6.6 0 0 0-4.5-1.64c-3.25 0-5.58 2.17-5.58 5.05a5.3 5.3 0 0 0 .98 2.9 5.78 5.78 0 0 0 2.57 1.94c.76.31 4.2 1.35 4.68 1.53 2.11.82 2.9 1.53 2.9 3.41a4.13 4.13 0 0 1-1.16 2.67 3.69 3.69 0 0 1-2.93 1.25 5.93 5.93 0 0 1-4.45-1.96 12.6 12.6 0 0 1-1.8-3.57.9.9 0 0 0-.37-.05.94.94 0 0 0-.5.15c0 .35.1 2.1.1 2.62a11.04 11.04 0 0 1-.28 2.36 1 1 0 0 0 .85.53 3.73 3.73 0 0 1 1.32-.85 1.23 1.23 0 0 1 .63.24 7.63 7.63 0 0 0 4.42 1.32c3.73 0 6.4-1.88 6.4-5.55m-23.4-9.13a4.28 4.28 0 0 1-2.9 3.94 14.25 14.25 0 0 1-2.76.22 16.01 16.01 0 0 1-1.61-.06l-.03-2.33v-5c0-.34.08-.53.19-.6a8.55 8.55 0 0 1 1.85-.16c2.48 0 3.62.23 4.52 1.53a4.16 4.16 0 0 1 .74 2.46m5.55 14.01a.7.7 0 0 0-.13-.39 4.06 4.06 0 0 1-1.75-.34 5.94 5.94 0 0 1-.45-.66 33.85 33.85 0 0 0-1.1-3.3 9.87 9.87 0 0 0-1.96-3.16 7.06 7.06 0 0 0-1.9-.87 40.92 40.92 0 0 1-1.09-.42 10.45 10.45 0 0 1 1.09-.16 4.85 4.85 0 0 0 2.8-.98 4.2 4.2 0 0 0 1.74-3.41 5.04 5.04 0 0 0-3.3-4.79 13 13 0 0 0-3.17-.29c-1.99 0-3.47.18-4.8.18-.39 0-1.68-.05-2.6-.05-.4 0-1.4-.05-1.57-.05-.08.19-.13.24-.13.35a1.7 1.7 0 0 0 .05.37c.45.05 1.27.15 1.7.23a3.1 3.1 0 0 1 1.1 1.43c.14.85.16 3.23.16 6.96 0 2.7.03 6.08-.1 7.09a2 2 0 0 1-1.09 1.76 14.9 14.9 0 0 1-1.5.2.68.68 0 0 0-.14.36 1.07 1.07 0 0 0 .1.32c.38 0 3.42-.08 4.27-.08 1.69 0 2.11.08 3.62.08a.65.65 0 0 0 .1-.3.75.75 0 0 0-.1-.39c-.53-.05-1.2-.21-1.48-.26a1.98 1.98 0 0 1-1.14-1.88l-.02-6.61c.2-.03.97-.03 1.18-.03a4.9 4.9 0 0 1 2.12.37 5.93 5.93 0 0 1 2.6 2.14 16.6 16.6 0 0 1 1.66 5.77c.08.55.29 1.03.8 1.08a9.6 9.6 0 0 0 1.53.08h2.75a.45.45 0 0 0 .15-.34m-22.18-4.02a6.94 6.94 0 0 0-.03-.77.59.59 0 0 0-.4-.08.74.74 0 0 0-.34.06 7 7 0 0 1-2.73 4.04 4.98 4.98 0 0 1-2.24.3h-2.96a12.39 12.39 0 0 1-1.75-.14c-.4-.08-.82-.72-1-1.14a3.43 3.43 0 0 1-.3-1.82V50.2h.85a5.22 5.22 0 0 1 2.25.38 3.18 3.18 0 0 1 1.43 1.13 9.06 9.06 0 0 1 .37 2.2.66.66 0 0 0 .42.1.61.61 0 0 0 .43-.14c0-.7-.16-2.64-.16-3.7 0-1.32.18-2.93.26-3.89a.69.69 0 0 0-.42-.1.8.8 0 0 0-.43.08c-.07.37-.29 1.48-.34 1.56a3.85 3.85 0 0 1-2.03 1.4 8.42 8.42 0 0 1-2.17.22h-.43v-2.6c0-2.54.06-3.57.08-4.05l.1-.9c.25-.03 1-.05 2.23-.05 1.53 0 2.67.02 2.9.02a2.98 2.98 0 0 1 1.7.53 6.73 6.73 0 0 1 2.36 3.28.73.73 0 0 0 .31.05c.16 0 .19-.05.4-.15a59 59 0 0 0-.16-4.1c-.03-.27-.08-.34-.6-.34-.22 0-1.22-.06-2.28-.06-1.51 0-2.12.03-4.42.03l-4.52.03c-1.59 0-1.93-.06-2.62-.06h-.9a.54.54 0 0 0-.14.32.63.63 0 0 0 .14.37 13.4 13.4 0 0 1 1.94.3c.37.3.71.4.95 1.66.05.55.08 2.35.08 3.57v5.44c0 1.11-.03 2.94-.05 3.6a8 8 0 0 1-.59 2.57 6.99 6.99 0 0 1-2.39.4.88.88 0 0 0-.13.42.63.63 0 0 0 .13.37h.88c.85 0 2.97-.08 3.68-.08.66 0 1.56.05 3.1.05.85 0 3.33.16 8.68.16a2.24 2.24 0 0 0 .7-.05.8.8 0 0 0 .12-.42c.05-.53.05-1.83.05-3.97m-19.6-14.43c0-.11-.03-.27-.14-.3h-.9c-.63 0-1.64.06-2.09.06-2.14 0-2.9-.14-3.22-.14h-.48c-.05.14-.13.22-.13.35 0 .1.05.18.05.29a9.85 9.85 0 0 1 1.83.4 2.49 2.49 0 0 1 .66 1.66 10.03 10.03 0 0 1-.64 2.41l-4.25 10.47-5.23-13.25a1.99 1.99 0 0 1 .87-1.48 11.6 11.6 0 0 1 1.71-.21.97.97 0 0 0 .1-.37c0-.1-.02-.26-.13-.29h-.66c-.81 0-2.06.1-3.46.1-.6 0-1.8-.05-2.96-.05h-1.03a.55.55 0 0 0-.1.32.57.57 0 0 0 .08.31 9.18 9.18 0 0 1 2.22.9 47.23 47.23 0 0 1 2.17 4.82l2.19 5.3c1.82 4.38 2.9 7.31 3.04 7.82.13.08 0 .15.23.15s.22-.04.27-.18l6.82-16.4a5.26 5.26 0 0 1 .95-1.5 4.2 4.2 0 0 1 2.12-.85 1.25 1.25 0 0 0 .1-.34m-23.15 18.43a.82.82 0 0 0-.08-.37c-.4-.03-1.48-.13-1.96-.24a4.22 4.22 0 0 1-.9-2.04c-.02-1.27-.05-4.15-.05-6.6v-6.72a2.1 2.1 0 0 1 .48-1.44 4.5 4.5 0 0 1 2.35-.68.78.78 0 0 0 .08-.34.43.43 0 0 0-.14-.32h-.76c-1.11 0-2.7.13-3.6.13-.55 0-2.14-.08-3.3-.1h-.58a.37.37 0 0 0-.14.34 1.84 1.84 0 0 0 .05.34 5.68 5.68 0 0 1 2.07.37 2.91 2.91 0 0 1 .87 2.25c.03.5.05 1.86.08 4.29.03 1.32.06 3.12.06 4.65 0 .77-.06 2.75-.09 3.67a4.44 4.44 0 0 1-.37 1.6c-.31.26-.63.73-2.56.87a1.01 1.01 0 0 0-.08.4c0 .2.05.2.05.34h.45c1.06 0 2.7-.14 4.07-.14.4 0 2.14.08 3.02.08h.87a.61.61 0 0 0 .1-.34M111.86 41.3a.42.42 0 0 0-.08-.26h-.6c-1.33 0-1.9.05-4.29.05-.82 0-2.03-.05-2.32-.05h-.7c-.07.05-.1.24-.1.34a.34.34 0 0 0 .14.29 11.36 11.36 0 0 1 2.72.77 5.23 5.23 0 0 1 .77 2.7c.02.39.05.79.05 1.87v7.86a10.42 10.42 0 0 1-.05 1.13c-.45-.5-1.22-1.48-2.25-2.7l-10.1-11.79a1.75 1.75 0 0 0-.4-.34l-.68-.03c-1.7 0-3.18-.08-3.63-.08a.53.53 0 0 0-.07.27 1.99 1.99 0 0 0 .05.34 4.63 4.63 0 0 1 2.04.74 7.7 7.7 0 0 1 1.29 1.56 2.3 2.3 0 0 1 .1.85c0 1.37-.07 3.88-.07 5.73v5.64a11.9 11.9 0 0 1-.16 2 5.55 5.55 0 0 1-2.78 1.36.76.76 0 0 0-.1.32c0 .08.02.23.08.26h.5c.52 0 1.74-.08 2.54-.08 1.16 0 1.69.08 2.77.08h1.6c.1-.03.12-.24.12-.34a.5.5 0 0 0-.08-.27A5.09 5.09 0 0 1 95 57.88a15.54 15.54 0 0 1-.35-3.33l-.02-3.78c0-2.09.02-4.97.05-5.9l.58.69 12.54 14.67a.37.37 0 0 0 .32.16c.13 0 .05 0 .15-.05a4.05 4.05 0 0 0 .14-1.2c0-.76-.03-1.55-.03-1.95V45.96c0-3.3 1.56-4.24 3.39-4.31a.6.6 0 0 0 .1-.35m-24.5.13a.55.55 0 0 0-.12-.34h-.77c-.82 0-1.93.06-2.88.06-1.06 0-2.25-.06-3.02-.06h-.95a.62.62 0 0 0-.1.34.93.93 0 0 0 .07.35c.11 0 2.04.02 2.38.5a6.51 6.51 0 0 1 1.03 1.96 17.27 17.27 0 0 1 .22 2.9c0 2.25 0 3.76-.03 4.55a14.24 14.24 0 0 1-.48 3.52c-.74 2.3-2.45 3.44-5.18 3.44a7.24 7.24 0 0 1-3.1-.66 4.45 4.45 0 0 1-2.56-3.33l-.14-7.94-.02-3.22c0-.61.77-1.17 1.03-1.48a12.54 12.54 0 0 1 2.04-.27.76.76 0 0 0 .13-.37.44.44 0 0 0-.18-.34l-1 .03c-.99.02-2.28.05-3.1.05-1.27 0-2.25-.03-3.04-.03h-1.11a.45.45 0 0 0-.14.37.42.42 0 0 0 .1.32c.85.1 1.4.19 1.78.26a2.23 2.23 0 0 1 .93 1.17c.02.34.07 1.19.07 2.85v6.35a16.25 16.25 0 0 0 .27 3.54 5.22 5.22 0 0 0 2.3 3.25 8.66 8.66 0 0 0 4.84 1.27 9.1 9.1 0 0 0 4.55-1.08 5.42 5.42 0 0 0 2.61-3.52 12.12 12.12 0 0 0 .42-3.14v-5.08c0-.95.06-2.14.06-2.62a5.33 5.33 0 0 1 .8-2.91 10.94 10.94 0 0 1 2.19-.37.65.65 0 0 0 .1-.32",
                  },
                }),
              ]),
            ]
          )
        },
        i = []
    },
    "8Tf8": function(t, e) {},
    "8eZf": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "wrapper",
            { staticClass: "lux-bg" },
            [
              n(
                "div",
                { staticClass: "lux-controls" },
                [
                  t.orderChanged
                    ? n("alert", { attrs: { status: "info" } }, [t._v("Page order has changed.")])
                    : t._e(),
                  t._v(" "),
                  n(
                    "input-button",
                    {
                      attrs: { id: "save_btn", variation: "solid", size: "medium", disabled: t.isDisabled },
                      on: {
                        "button-clicked": function(e) {
                          t.saveHandler(e)
                        },
                      },
                    },
                    [t._v("\n      Apply Changes\n    ")]
                  ),
                  t._v(" "),
                  t.hidden
                    ? t._e()
                    : n("a", { attrs: { href: t.editLink, id: "replace-file-button" } }, [t._v("Manage Page Files")]),
                ],
                1
              ),
              t._v(" "),
              1 === t.selectedTotal
                ? n("heading", { attrs: { level: "h2" } }, [t._v("Zoom "), n("small", [t._v("on the selected item")])])
                : t._e(),
              t._v(" "),
              1 === t.selectedTotal
                ? n("div", { staticClass: "lux-osd-wrapper" }, [
                    n("div", { staticClass: "lux-osd" }, [
                      n("div", { staticClass: "lux-viewport", attrs: { id: t.viewerId } }),
                    ]),
                  ])
                : t._e(),
            ],
            1
          )
        },
        i = []
    },
    "94VQ": function(t, e, n) {
      "use strict"
      var r = n("Yobk"),
        i = n("X8DO"),
        a = n("e6n0"),
        o = {}
      n("hJx8")(o, n("dSzd")("iterator"), function() {
        return this
      }),
        (t.exports = function(t, e, n) {
          ;(t.prototype = r(o, { next: i(1, n) })), a(t, e + " Iterator")
        })
    },
    "9Bbf": function(t, e, n) {
      "use strict"
      var r = n("kM2E")
      t.exports = function(t) {
        r(r.S, t, {
          of: function() {
            for (var t = arguments.length, e = new Array(t); t--; ) e[t] = arguments[t]
            return new this(e)
          },
        })
      }
    },
    "9C8M": function(t, e, n) {
      "use strict"
      var r = n("evD5").f,
        i = n("Yobk"),
        a = n("xH/j"),
        o = n("+ZMJ"),
        s = n("2KxR"),
        u = n("NWt+"),
        c = n("vIB/"),
        l = n("EGZi"),
        f = n("bRrM"),
        d = n("+E39"),
        p = n("06OY").fastKey,
        h = n("LIJb"),
        v = d ? "_s" : "size",
        m = function(t, e) {
          var n,
            r = p(e)
          if ("F" !== r) return t._i[r]
          for (n = t._f; n; n = n.n) if (n.k == e) return n
        }
      t.exports = {
        getConstructor: function(t, e, n, c) {
          var l = t(function(t, r) {
            s(t, l, e, "_i"),
              (t._t = e),
              (t._i = i(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[v] = 0),
              void 0 != r && u(r, n, t[c], t)
          })
          return (
            a(l.prototype, {
              clear: function() {
                for (var t = h(this, e), n = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i]
                ;(t._f = t._l = void 0), (t[v] = 0)
              },
              delete: function(t) {
                var n = h(this, e),
                  r = m(n, t)
                if (r) {
                  var i = r.n,
                    a = r.p
                  delete n._i[r.i],
                    (r.r = !0),
                    a && (a.n = i),
                    i && (i.p = a),
                    n._f == r && (n._f = i),
                    n._l == r && (n._l = a),
                    n[v]--
                }
                return !!r
              },
              forEach: function(t) {
                h(this, e)
                for (var n, r = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); (n = n ? n.n : this._f); )
                  for (r(n.v, n.k, this); n && n.r; ) n = n.p
              },
              has: function(t) {
                return !!m(h(this, e), t)
              },
            }),
            d &&
              r(l.prototype, "size", {
                get: function() {
                  return h(this, e)[v]
                },
              }),
            l
          )
        },
        def: function(t, e, n) {
          var r,
            i,
            a = m(t, e)
          return (
            a
              ? (a.v = n)
              : ((t._l = a = { i: (i = p(e, !0)), k: e, v: n, p: (r = t._l), n: void 0, r: !1 }),
                t._f || (t._f = a),
                r && (r.n = a),
                t[v]++,
                "F" !== i && (t._i[i] = a)),
            t
          )
        },
        getEntry: m,
        setStrong: function(t, e, n) {
          c(
            t,
            e,
            function(t, n) {
              ;(this._t = h(t, e)), (this._k = n), (this._l = void 0)
            },
            function() {
              for (var t = this._k, e = this._l; e && e.r; ) e = e.p
              return this._t && (this._l = e = e ? e.n : this._t._f)
                ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v])
                : ((this._t = void 0), l(1))
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            f(e)
        },
      }
    },
    "9N99": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e("g", [
            e("g", { attrs: { id: "Outline_Icons" } }, [
              e("g", [
                e("polygon", {
                  attrs: {
                    fill: "none",
                    stroke: "#000000",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    points: "20.5,23.5\n  \t\t\t3.5,23.5 3.5,0.5 14.5,0.5 20.5,6.5 \t\t",
                  },
                }),
                this._v(" "),
                e("polyline", {
                  attrs: {
                    fill: "none",
                    stroke: "#000000",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    points: "14.5,0.5\n  \t\t\t14.5,6.5 20.5,6.5 \t\t",
                  },
                }),
              ]),
            ]),
            this._v(" "),
            e("g", { attrs: { id: "Invisible_Shape" } }, [
              e("rect", { attrs: { fill: "none", width: "24", height: "24" } }),
            ]),
          ])
        },
        i = []
    },
    "A/nf": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "UniversityCopyright",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "span" } },
        })
    },
    ALrJ: function(t, e, n) {
      var r = n("+ZMJ"),
        i = n("MU5D"),
        a = n("sB3e"),
        o = n("QRG4"),
        s = n("oeOm")
      t.exports = function(t, e) {
        var n = 1 == t,
          u = 2 == t,
          c = 3 == t,
          l = 4 == t,
          f = 6 == t,
          d = 5 == t || f,
          p = e || s
        return function(e, s, h) {
          for (
            var v,
              m,
              g = a(e),
              y = i(g),
              _ = r(s, h, 3),
              b = o(y.length),
              x = 0,
              w = n ? p(e, b) : u ? p(e, 0) : void 0;
            b > x;
            x++
          )
            if ((d || x in y) && ((m = _((v = y[x]), x, g)), t))
              if (n) w[x] = m
              else if (m)
                switch (t) {
                  case 3:
                    return !0
                  case 5:
                    return v
                  case 6:
                    return x
                  case 2:
                    w.push(v)
                }
              else if (l) return !1
          return f ? -1 : c || l ? l : w
        }
      }
    },
    AluM: function(t, e, n) {
      "use strict"
      t.exports = n("UFRR")
    },
    AvtG: function(t, e) {},
    BMvv: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("/nfx"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("5Kpz"),
        s = n("XyMi"),
        u = Object(s.a)(i.a, o.a, o.b, !1, null, null, null)
      e.default = u.exports
    },
    BO1k: function(t, e, n) {
      t.exports = { default: n("fxRn"), __esModule: !0 }
    },
    BqMj: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("rnqq"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("/Dev"),
        s = n("XyMi")
      var u = function(t) {
          n("42RZ")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-44f82d92", null)
      e.default = c.exports
    },
    Bu6N: function(t, e) {},
    CFc8: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.wrapper, { tag: "component", staticClass: "lux-select" }, [
            t.label ? n("label", { attrs: { for: t.id } }, [t._v(t._s(t.label))]) : t._e(),
            t._v(" "),
            n(
              "select",
              {
                class: [
                  "lux-select",
                  { "lux-select-error": t.hasError },
                  { "lux-select-expand": "expand" === t.width },
                ],
                attrs: {
                  id: t.id,
                  disabled: t.disabled,
                  focus: t.focus,
                  multiple: t.multiple,
                  errormessage: t.errormessage,
                },
                domProps: { value: t.value },
                on: {
                  change: function(e) {
                    t.change(e)
                  },
                  blur: function(e) {
                    t.inputblur(e.target)
                  },
                },
              },
              t._l(t.options, function(e, r) {
                return n("option", { key: r, attrs: { disabled: e.disabled }, domProps: { value: e.value } }, [
                  t._v("\n        " + t._s(e.label) + "\n      "),
                ])
              })
            ),
            t._v(" "),
            t.errormessage
              ? n("div", { staticClass: "lux-error", attrs: { role: "alert" } }, [t._v(t._s(t.errormessage))])
              : t._e(),
          ])
        },
        i = []
    },
    CTO1: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMinYMid",
                "aria-labelledby": "logo-twitter",
                role: "presentation",
              },
            },
            [
              e("title", { attrs: { id: this.logo - this.twitter, lang: "en" } }, [this._v("Twitter Logo")]),
              this._v(" "),
              e("g", [
                e("path", {
                  attrs: {
                    d:
                      "M23.444 4.834c-.814.363-1.5.375-2.227.016.938-.562.981-.957 1.32-2.019-.878.521-1.851.9-2.886 1.104a4.545 4.545 0 0 0-7.743 4.145 12.897 12.897 0 0 1-9.366-4.748 4.525 4.525 0 0 0-.615 2.285c0 1.577.803 2.967 2.021 3.782a4.527 4.527 0 0 1-2.057-.568l-.001.057a4.547 4.547 0 0 0 3.646 4.456 4.575 4.575 0 0 1-2.053.079 4.551 4.551 0 0 0 4.245 3.155A9.138 9.138 0 0 1 1 18.459 12.865 12.865 0 0 0 7.966 20.5c8.358 0 12.928-6.924 12.928-12.929 0-.198-.003-.393-.012-.588.887-.64 1.953-1.237 2.562-2.149z",
                  },
                }),
                e("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
              ]),
            ]
          )
        },
        i = []
    },
    CXw9: function(t, e, n) {
      "use strict"
      var r,
        i,
        a,
        o,
        s = n("O4g8"),
        u = n("7KvD"),
        c = n("+ZMJ"),
        l = n("RY/4"),
        f = n("kM2E"),
        d = n("EqjI"),
        p = n("lOnJ"),
        h = n("2KxR"),
        v = n("NWt+"),
        m = n("t8x9"),
        g = n("L42u").set,
        y = n("82Mu")(),
        _ = n("qARP"),
        b = n("dNDb"),
        x = n("fJUb"),
        w = u.TypeError,
        M = u.process,
        O = u.Promise,
        C = "process" == l(M),
        S = function() {},
        j = (i = _.f),
        E = !!(function() {
          try {
            var t = O.resolve(1),
              e = ((t.constructor = {})[n("dSzd")("species")] = function(t) {
                t(S, S)
              })
            return (C || "function" == typeof PromiseRejectionEvent) && t.then(S) instanceof e
          } catch (t) {}
        })(),
        L = function(t) {
          var e
          return !(!d(t) || "function" != typeof (e = t.then)) && e
        },
        T = function(t, e) {
          if (!t._n) {
            t._n = !0
            var n = t._c
            y(function() {
              for (
                var r = t._v,
                  i = 1 == t._s,
                  a = 0,
                  o = function(e) {
                    var n,
                      a,
                      o,
                      s = i ? e.ok : e.fail,
                      u = e.resolve,
                      c = e.reject,
                      l = e.domain
                    try {
                      s
                        ? (i || (2 == t._h && D(t), (t._h = 1)),
                          !0 === s ? (n = r) : (l && l.enter(), (n = s(r)), l && (l.exit(), (o = !0))),
                          n === e.promise ? c(w("Promise-chain cycle")) : (a = L(n)) ? a.call(n, u, c) : u(n))
                        : c(r)
                    } catch (t) {
                      l && !o && l.exit(), c(t)
                    }
                  };
                n.length > a;

              )
                o(n[a++])
              ;(t._c = []), (t._n = !1), e && !t._h && k(t)
            })
          }
        },
        k = function(t) {
          g.call(u, function() {
            var e,
              n,
              r,
              i = t._v,
              a = A(t)
            if (
              (a &&
                ((e = b(function() {
                  C
                    ? M.emit("unhandledRejection", i, t)
                    : (n = u.onunhandledrejection)
                      ? n({ promise: t, reason: i })
                      : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                })),
                (t._h = C || A(t) ? 2 : 1)),
              (t._a = void 0),
              a && e.e)
            )
              throw e.v
          })
        },
        A = function(t) {
          return 1 !== t._h && 0 === (t._a || t._c).length
        },
        D = function(t) {
          g.call(u, function() {
            var e
            C ? M.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v })
          })
        },
        I = function(t) {
          var e = this
          e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), T(e, !0))
        },
        N = function(t) {
          var e,
            n = this
          if (!n._d) {
            ;(n._d = !0), (n = n._w || n)
            try {
              if (n === t) throw w("Promise can't be resolved itself")
              ;(e = L(t))
                ? y(function() {
                    var r = { _w: n, _d: !1 }
                    try {
                      e.call(t, c(N, r, 1), c(I, r, 1))
                    } catch (t) {
                      I.call(r, t)
                    }
                  })
                : ((n._v = t), (n._s = 1), T(n, !1))
            } catch (t) {
              I.call({ _w: n, _d: !1 }, t)
            }
          }
        }
      E ||
        ((O = function(t) {
          h(this, O, "Promise", "_h"), p(t), r.call(this)
          try {
            t(c(N, this, 1), c(I, this, 1))
          } catch (t) {
            I.call(this, t)
          }
        }),
        ((r = function(t) {
          ;(this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1)
        }).prototype = n("xH/j")(O.prototype, {
          then: function(t, e) {
            var n = j(m(this, O))
            return (
              (n.ok = "function" != typeof t || t),
              (n.fail = "function" == typeof e && e),
              (n.domain = C ? M.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && T(this, !1),
              n.promise
            )
          },
          catch: function(t) {
            return this.then(void 0, t)
          },
        })),
        (a = function() {
          var t = new r()
          ;(this.promise = t), (this.resolve = c(N, t, 1)), (this.reject = c(I, t, 1))
        }),
        (_.f = j = function(t) {
          return t === O || t === o ? new a(t) : i(t)
        })),
        f(f.G + f.W + f.F * !E, { Promise: O }),
        n("e6n0")(O, "Promise"),
        n("bRrM")("Promise"),
        (o = n("FeBl").Promise),
        f(f.S + f.F * !E, "Promise", {
          reject: function(t) {
            var e = j(this)
            return (0, e.reject)(t), e.promise
          },
        }),
        f(f.S + f.F * (s || !E), "Promise", {
          resolve: function(t) {
            return x(s && this === o ? O : this, t)
          },
        }),
        f(
          f.S +
            f.F *
              !(
                E &&
                n("dY0y")(function(t) {
                  O.all(t).catch(S)
                })
              ),
          "Promise",
          {
            all: function(t) {
              var e = this,
                n = j(e),
                r = n.resolve,
                i = n.reject,
                a = b(function() {
                  var n = [],
                    a = 0,
                    o = 1
                  v(t, !1, function(t) {
                    var s = a++,
                      u = !1
                    n.push(void 0),
                      o++,
                      e.resolve(t).then(function(t) {
                        u || ((u = !0), (n[s] = t), --o || r(n))
                      }, i)
                  }),
                    --o || r(n)
                })
              return a.e && i(a.v), n.promise
            },
            race: function(t) {
              var e = this,
                n = j(e),
                r = n.reject,
                i = b(function() {
                  v(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r)
                  })
                })
              return i.e && r(i.v), n.promise
            },
          }
        )
    },
    Ceas: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
                viewBox: "0 0 115.7 31.1",
                preserveAspectRatio: "xMinYMid",
                "aria-labelledby": "logo-friends",
                role: "presentation",
              },
            },
            [
              e("title", { attrs: { id: this.logo - this.friends, lang: "en" } }, [
                this._v("Friends of Princeton University Library"),
              ]),
              this._v(" "),
              e("g", [
                e("path", {
                  attrs: {
                    d:
                      "M.5 27.1A3.54 3.54 0 0 0 4 30.6h107.7a3.54 3.54 0 0 0 3.5-3.5V4a3.54 3.54 0 0 0-3.5-3.5H4.1A3.54 3.54 0 0 0 .6 4v23.1z",
                  },
                }),
                e("path", {
                  attrs: {
                    d:
                      "M.5 27.1A3.54 3.54 0 0 0 4 30.6h107.7a3.54 3.54 0 0 0 3.5-3.5V4a3.54 3.54 0 0 0-3.5-3.5H4.1A3.54 3.54 0 0 0 .6 4v23.1z",
                    "stroke-miterlimit": "10",
                    stroke: "#000",
                  },
                }),
                e("path", {
                  staticClass: "friends-b",
                  attrs: {
                    d:
                      "M24.3 9.3a1.39 1.39 0 0 0-1.4-1.1v15.3a37 37 0 0 1-3.8-1.4 4.24 4.24 0 0 0-3.9.2 4.32 4.32 0 0 0-3.9-.2 37 37 0 0 1-3.8 1.4V8.1a1.38 1.38 0 0 0-1.3 1.1v15.5h18.1V9.3z",
                  },
                }),
                e("path", {
                  staticClass: "friends-b",
                  attrs: {
                    d:
                      "M10.7 17.3a11 11 0 0 0 1.4 2.1l3.1-3 3.1 3c.5-.7 1-1.4 1.4-2.1L15.2 13zm11.1-9.2a4.68 4.68 0 0 1-1.7.2 5.46 5.46 0 0 1-4.8-2.7 5.72 5.72 0 0 1-4.8 2.7 9.85 9.85 0 0 1-1.7-.2 17.53 17.53 0 0 0 .3 4.6h12.5a23.63 23.63 0 0 0 .2-4.6",
                  },
                }),
                e("path", {
                  attrs: {
                    d:
                      "M40.82 12.85a.24.24 0 0 1-.15 0h-.28a9.76 9.76 0 0 0-.66-1.19 8.14 8.14 0 0 0-.62-.83 4.1 4.1 0 0 0-.56-.55 6.93 6.93 0 0 0-.49-.39 1.15 1.15 0 0 0-.71-.19h-3.59c-.2 0-.32 0-.35.06s0 .14 0 .3v6h1.52a3.19 3.19 0 0 0 .6-.12 2.21 2.21 0 0 0 .55-.23 1.19 1.19 0 0 0 .43-.37 1.82 1.82 0 0 0 .25-.46 3.3 3.3 0 0 0 .13-.52c0-.18.06-.34.08-.51s0-.29 0-.38h.45l.14.07v6.05a.49.49 0 0 1-.32.08h-.27c0-.07 0-.2-.06-.38s-.06-.39-.09-.63a1.9 1.9 0 0 0-.28-.77 2.77 2.77 0 0 0-.66-.72 1.54 1.54 0 0 0-.62-.25 5.14 5.14 0 0 0-1.15-.11 3.36 3.36 0 0 0-.63.06v.56a5.55 5.55 0 0 0 0 .65v4.13a2.45 2.45 0 0 0 .41.93 1.59 1.59 0 0 0 .52.45 2 2 0 0 0 .31.05h.5l.5.05a2.85 2.85 0 0 0 .37 0 .8.8 0 0 1 .06.3.49.49 0 0 1 0 .12.65.65 0 0 1 0 .15h-7.71a.48.48 0 0 1-.1-.27.5.5 0 0 1 .08-.27c.32 0 .68-.08 1.07-.15l.91-.15a2.55 2.55 0 0 0 .36-.76 7 7 0 0 0 .24-1.34v-9.43a5 5 0 0 0-.06-.73 1.73 1.73 0 0 0-.24-.66 3.86 3.86 0 0 0-.47-.58 1.43 1.43 0 0 0-.68-.17l-1-.1a.51.51 0 0 1-.07-.3v-.14l.07-.13H40.6l.07.14v.24l.19 3.28a.31.31 0 0 0-.04.11zm12.49 11.08a1.12 1.12 0 0 1-.05.27h-3a.41.41 0 0 1-.38-.18 1.14 1.14 0 0 1-.14-.45l-.16-.81c-.06-.29-.14-.57-.22-.85a8.11 8.11 0 0 0-.36-.81 3.26 3.26 0 0 0-.34-.62l-.57-.66a1.8 1.8 0 0 0-.76-.51 2.17 2.17 0 0 0-.69-.11h-1v2.86a1.7 1.7 0 0 0 .28 1.11 1 1 0 0 0 .5.36 3.31 3.31 0 0 0 .84.14.7.7 0 0 1 .13.3.12.12 0 0 1 0 .11.58.58 0 0 0-.07.14h-5.48a1 1 0 0 1-.05-.17.49.49 0 0 1 0-.12.34.34 0 0 1 0-.11 1.26 1.26 0 0 1 .05-.15h.38l.43-.06a2.11 2.11 0 0 0 .4-.11.65.65 0 0 0 .24-.12 1 1 0 0 0 .22-.38 3.9 3.9 0 0 0 .12-.46v-6.33a8 8 0 0 0-.09-.81 1 1 0 0 0-.47-.73 3.06 3.06 0 0 0-1.33-.3.76.76 0 0 1 0-.29v-.11l.06-.12h6.97a4 4 0 0 1 .88.14 2.54 2.54 0 0 1 1.48 1 2.7 2.7 0 0 1 .48 1.57 2.24 2.24 0 0 1-.67 1.62 3.56 3.56 0 0 1-2.25.86v.11a3 3 0 0 1 1 .31 2.74 2.74 0 0 1 .6.44 4.32 4.32 0 0 1 .51.65 8.53 8.53 0 0 1 .46.95l.32.81.33.89a1.45 1.45 0 0 0 .12.19.53.53 0 0 0 .19.15h.19l.33.05h.32a1 1 0 0 0 .21 0 .51.51 0 0 1 .04.34zm-3.89-7.5a2.82 2.82 0 0 0-.08-.68 1.45 1.45 0 0 0-.32-.58 1.49 1.49 0 0 0-.42-.41 1.51 1.51 0 0 0-.53-.24 3.53 3.53 0 0 0-.71-.11h-.94a1.53 1.53 0 0 0-.64.08.33.33 0 0 0-.12.3v3.78h1.57a4.85 4.85 0 0 0 .8-.08 1.67 1.67 0 0 0 .58-.29 1.62 1.62 0 0 0 .42-.48 2.48 2.48 0 0 0 .27-.62 2.57 2.57 0 0 0 .12-.67zm10.86 7.5a.54.54 0 0 1-.09.27h-5.52a.6.6 0 0 1-.05-.14.28.28 0 0 1 0-.09.8.8 0 0 1 .06-.3 7.23 7.23 0 0 0 1.13-.22.82.82 0 0 0 .53-.47 2.09 2.09 0 0 0 .07-.54c0-.31 0-.65.05-1s0-.72 0-1.05v-4.22c0-.26 0-.55-.06-.85a.74.74 0 0 0-.46-.71 5.86 5.86 0 0 0-1.24-.2.88.88 0 0 1-.06-.29.23.23 0 0 1 0-.13.81.81 0 0 0 .08-.12h5.29a.43.43 0 0 1 .12.25 1 1 0 0 1-.06.29l-.93.14a.71.71 0 0 0-.6.43 1.1 1.1 0 0 0-.07.31v6.33a7.46 7.46 0 0 0 .09 1.21.81.81 0 0 0 .56.72 2.06 2.06 0 0 0 .5.06h.6l.05.13.01.19zm12.39.28a1.4 1.4 0 0 1-.42.05h-9.97a.53.53 0 0 1-.06-.23v-.15a.28.28 0 0 1 0-.15 6.51 6.51 0 0 0 1-.13 1.22 1.22 0 0 0 .53-.2 1.14 1.14 0 0 0 .22-.53 6.77 6.77 0 0 0 .11-1.07v-6.12a1.66 1.66 0 0 0-.11-.67 1 1 0 0 0-.33-.36 1.32 1.32 0 0 0-.53-.16l-.77-.09a.83.83 0 0 1-.06-.27.5.5 0 0 1 0-.14.26.26 0 0 1 .07-.13h8.97a.82.82 0 0 1 .27 0c.06 0 .09.09.09.2l.32 2.43-.14.07h-.38a7.4 7.4 0 0 0-.46-.73 4.22 4.22 0 0 0-.39-.47 3.46 3.46 0 0 0-.35-.33l-.37-.28a1.85 1.85 0 0 0-.91-.27h-2.28a1.14 1.14 0 0 0-.35 0h-.11v.36a2.2 2.2 0 0 1 0 .23v3.21h1.03a1.82 1.82 0 0 0 .5-.1 1.87 1.87 0 0 0 .61-.28 1.52 1.52 0 0 0 .46-.45 1.21 1.21 0 0 0 .13-.42c0-.21.08-.36.1-.46a.82.82 0 0 1 .34-.07.34.34 0 0 1 .27.09c0 .21 0 .51-.06.89s0 .83 0 1.33v2.08l-.14.07h-.15a1.92 1.92 0 0 1-.3 0 4.89 4.89 0 0 0-.25-1.13 1.21 1.21 0 0 0-.73-.68 3.16 3.16 0 0 0-.59-.17 3.48 3.48 0 0 0-.57 0h-.69v2.73a4 4 0 0 0 .12 1.22 1.69 1.69 0 0 0 .24.35.68.68 0 0 0 .39.24h3.11a1 1 0 0 0 .49-.14 2 2 0 0 0 .37-.31c.16-.16.32-.34.49-.54a7 7 0 0 0 .47-.66 3.89 3.89 0 0 0 .35-.71l.16-.06h.15a.52.52 0 0 1 .29.09V24c-.06.09-.1.18-.18.21zM87.24 14.1a.45.45 0 0 1 0 .11.34.34 0 0 1 0 .14 2.39 2.39 0 0 0-.76.15 1.74 1.74 0 0 0-.63.39 1.85 1.85 0 0 0-.43.7 3.32 3.32 0 0 0-.15 1.07v7.67a1 1 0 0 1-.23.12.63.63 0 0 1-.19 0 .68.68 0 0 1-.27-.16l-7.35-7.92.08 1.63v3.44c0 .24 0 .46.06.65a1.77 1.77 0 0 0 .18.71 1.35 1.35 0 0 0 .35.4 1.7 1.7 0 0 0 .69.33c.27.06.51.11.72.14a.53.53 0 0 1 .06.23.89.89 0 0 1 0 .11l-.06.16h-4.58a.68.68 0 0 1 0-.23v-.11a1.16 1.16 0 0 1 .06-.16c.12 0 .27 0 .43-.08a2.54 2.54 0 0 0 .47-.14 4.32 4.32 0 0 0 .43-.22 1.87 1.87 0 0 0 .33-.28 1.53 1.53 0 0 0 .13-.54v-5.9a1.85 1.85 0 0 0-.35-1.13 2.71 2.71 0 0 1-.19-.21l-.34-.34a1.35 1.35 0 0 0-.54-.29l-.64-.23a.58.58 0 0 1 0-.14.44.44 0 0 1 0-.09.6.6 0 0 1 .06-.27h2.99a.78.78 0 0 1 .33.21L83.23 20l.66.76c.23.26.43.49.58.69v-5.46a2.65 2.65 0 0 0-.32-1.11.5.5 0 0 0-.26-.19 2.37 2.37 0 0 0-.45-.15 4.51 4.51 0 0 0-.53-.1l-.46-.09a.94.94 0 0 1-.06-.31.53.53 0 0 1 0-.23h4.81a.57.57 0 0 1 .04.29zm13.29 5.12a5.36 5.36 0 0 1-.22 1.51 4.55 4.55 0 0 1-.66 1.43 6 6 0 0 1-.91 1 3.62 3.62 0 0 1-1.07.64 6.47 6.47 0 0 1-1.33.34 12.2 12.2 0 0 1-1.69.1H88.8a.47.47 0 0 1-.07-.25v-.11a1.16 1.16 0 0 1 .06-.16 4.22 4.22 0 0 0 1.21-.18 1 1 0 0 0 .53-.43 2.84 2.84 0 0 0 .13-.41 4.08 4.08 0 0 0 .1-1.08v-4.86c0-.51 0-.85-.07-1a3.78 3.78 0 0 0-.06-.47.9.9 0 0 0-.21-.44 1.21 1.21 0 0 0-.52-.31 3 3 0 0 0-1-.13.83.83 0 0 1 0-.15.39.39 0 0 1 0-.14.51.51 0 0 1 .09-.25h3.61l1.09-.05h1a8 8 0 0 1 1.92.22 6.64 6.64 0 0 1 1.46.56 4 4 0 0 1 1.16.86 5.43 5.43 0 0 1 .81 1.15 5.86 5.86 0 0 1 .48 1.31 6.37 6.37 0 0 1 .01 1.3zm-2.26-.1a5.58 5.58 0 0 0-.39-2.2 3.72 3.72 0 0 0-1.27-1.56 4.76 4.76 0 0 0-1.36-.71 5.6 5.6 0 0 0-1.73-.24 2.36 2.36 0 0 0-.44 0l-.36.06v7.41a1.8 1.8 0 0 0 .28 1.25 1.79 1.79 0 0 0 .47.38 1.34 1.34 0 0 0 .6.12 4.8 4.8 0 0 0 1.74-.29 3.15 3.15 0 0 0 1.28-1 4.36 4.36 0 0 0 .91-1.42 5.07 5.07 0 0 0 .27-1.8zm12.53 2.22a2.87 2.87 0 0 1-.3 1.31 3 3 0 0 1-.81 1 3.34 3.34 0 0 1-1.16.63 4.36 4.36 0 0 1-1.4.22 4.25 4.25 0 0 1-1.31-.2 6 6 0 0 1-1.11-.43.53.53 0 0 0-.19-.06h-.18a.79.79 0 0 0-.32.1 3 3 0 0 0-.46.3.81.81 0 0 1-.37-.09.42.42 0 0 1-.24-.23 2.9 2.9 0 0 1 .09-.56 2.88 2.88 0 0 0 .1-.72v-1.33a2.66 2.66 0 0 1 0-.35.54.54 0 0 1 .46-.23h.17c0 .1.12.24.19.42l.25.57.26.58a2.84 2.84 0 0 0 .26.45 2.94 2.94 0 0 0 1.13.83 3.33 3.33 0 0 0 1.18.26 2.29 2.29 0 0 0 1.68-.5 2.13 2.13 0 0 0 .47-.62 1.56 1.56 0 0 0 .12-.64 1.48 1.48 0 0 0-.29-.95 1.92 1.92 0 0 0-.41-.4l-.69-.38a4.5 4.5 0 0 0-.51-.18l-.75-.24-.77-.25a2.82 2.82 0 0 1-.61-.25 4.17 4.17 0 0 1-.85-.49 5 5 0 0 1-.6-.54 2.26 2.26 0 0 1-.46-.93 3.8 3.8 0 0 1-.13-1 2.93 2.93 0 0 1 .23-1.16 2.68 2.68 0 0 1 .66-.93 3.26 3.26 0 0 1 1-.61 3.78 3.78 0 0 1 1.28-.22 6.78 6.78 0 0 1 1.21.12 2.79 2.79 0 0 1 1.27.6 3.84 3.84 0 0 1 .28-.3l.33-.29a.74.74 0 0 1 .38.09c.09.07.15.13.16.18s0 .33-.09.61a4.62 4.62 0 0 0-.07.82 3.1 3.1 0 0 0 0 .34l.06.47v.45a1.8 1.8 0 0 1 0 .27l-.17.1a.54.54 0 0 1-.22 0 .54.54 0 0 1-.19 0 4.66 4.66 0 0 1-.43-.92 4.9 4.9 0 0 0-.45-.89 2 2 0 0 0-.88-.69 3.1 3.1 0 0 0-1.18-.21 2.12 2.12 0 0 0-1.34.44 1.35 1.35 0 0 0-.55 1.11 1.22 1.22 0 0 0 .42 1 3.62 3.62 0 0 0 .86.54l.72.27c.26.1.54.19.85.29a13.82 13.82 0 0 1 1.66.63 3.17 3.17 0 0 1 1.31 1.14 3 3 0 0 1 .45 1.65z",
                    stroke: "#fff",
                    "stroke-width": ".5",
                    fill: "#fff",
                    "stroke-miterlimit": "10",
                  },
                }),
              ]),
            ]
          )
        },
        i = []
    },
    "D2+o": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", class: ["lux-toolbar"] },
            [
              n("dropdown-menu", {
                attrs: {
                  buttonLabel: "Selection Options",
                  "menu-items": [
                    { name: "All", component: "All" },
                    { name: "None", component: "None" },
                    { name: "Alternate", component: "Alternate", disabled: !0 },
                    { name: "Inverse", component: "Inverse" },
                  ],
                },
                on: {
                  "menu-item-clicked": function(e) {
                    t.menuSelection(e)
                  },
                },
              }),
              t._v(" "),
              n("dropdown-menu", {
                attrs: {
                  buttonLabel: "With Selected...",
                  "menu-items": [
                    { name: "Cut", component: "Cut", disabled: t.isCutDisabled() },
                    { name: "Paste Before", component: "Paste Before", disabled: t.isPasteDisabled() },
                    { name: "Paste After", component: "Paste After", disabled: t.isPasteDisabled() },
                  ],
                },
                on: {
                  "menu-item-clicked": function(e) {
                    t.menuSelection(e)
                  },
                },
              }),
              t._v(" "),
              n("spacer"),
              t._v(" "),
              n(
                "div",
                { staticClass: "lux-zoom-slider" },
                [
                  n(
                    "lux-icon-base",
                    {
                      staticClass: "lux-svg-icon",
                      attrs: { "icon-name": "shrink", "icon-color": "rgb(0,0,0)", width: "12", height: "12" },
                    },
                    [n("lux-icon-picture")],
                    1
                  ),
                  t._v(" "),
                  n("label", { attrs: { for: "img_zoom" } }, [t._v("Image zoom")]),
                  t._v(" "),
                  n("input", {
                    attrs: { type: "range", id: "img_zoom", min: "40", max: "500", value: "300" },
                    on: {
                      input: function(e) {
                        t.resizeCards(e)
                      },
                    },
                  }),
                  t._v(" "),
                  n(
                    "lux-icon-base",
                    {
                      staticClass: "lux-svg-icon",
                      attrs: { "icon-name": "grow", "icon-color": "rgb(0,0,0)", width: "24", height: "24" },
                    },
                    [n("lux-icon-picture")],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    D2L2: function(t, e) {
      var n = {}.hasOwnProperty
      t.exports = function(t, e) {
        return n.call(t, e)
      }
    },
    D7Wh: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LibraryHeader",
          status: "ready",
          release: "1.0.0",
          type: "Pattern",
          props: {
            type: { type: String, default: "div" },
            appName: { type: String, default: "" },
            appUrl: { type: String, default: "" },
          },
        })
    },
    DAYN: function(t, e, n) {
      "use strict"
      var r =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }
      function i(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]
          return n
        }
        return Array.from(t)
      }
      !(function() {
        function e(t) {
          function e(t) {
            t.parentElement.removeChild(t)
          }
          function n(t, e, n) {
            var r = 0 === n ? t.children[0] : t.children[n - 1].nextSibling
            t.insertBefore(e, r)
          }
          function a(t, e) {
            var n = this
            this.$nextTick(function() {
              return n.$emit(t.toLowerCase(), e)
            })
          }
          var o = ["Start", "Add", "Remove", "Update", "End"],
            s = ["Choose", "Sort", "Filter", "Clone"],
            u = ["Move"].concat(o, s).map(function(t) {
              return "on" + t
            }),
            c = null
          return {
            name: "draggable",
            props: {
              options: Object,
              list: { type: Array, required: !1, default: null },
              value: { type: Array, required: !1, default: null },
              noTransitionOnDrag: { type: Boolean, default: !1 },
              clone: {
                type: Function,
                default: function(t) {
                  return t
                },
              },
              element: { type: String, default: "div" },
              move: { type: Function, default: null },
              componentData: { type: Object, required: !1, default: null },
            },
            data: function() {
              return { transitionMode: !1, noneFunctionalComponentMode: !1, init: !1 }
            },
            render: function(t) {
              var e = this.$slots.default
              if (e && 1 === e.length) {
                var n = e[0]
                n.componentOptions && "transition-group" === n.componentOptions.tag && (this.transitionMode = !0)
              }
              var r = e,
                a = this.$slots.footer
              a && (r = e ? [].concat(i(e), i(a)) : [].concat(i(a)))
              var o = null,
                s = function(t, e) {
                  o = (function(t, e, n) {
                    return void 0 == n ? t : (((t = null == t ? {} : t)[e] = n), t)
                  })(o, t, e)
                }
              if ((s("attrs", this.$attrs), this.componentData)) {
                var u = this.componentData,
                  c = u.on,
                  l = u.props
                s("on", c), s("props", l)
              }
              return t(this.element, o, r)
            },
            mounted: function() {
              var e = this
              if (
                ((this.noneFunctionalComponentMode = this.element.toLowerCase() !== this.$el.nodeName.toLowerCase()),
                this.noneFunctionalComponentMode && this.transitionMode)
              )
                throw new Error(
                  "Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: " +
                    this.element
                )
              var n = {}
              o.forEach(function(t) {
                n["on" + t] = function(t) {
                  var e = this
                  return function(n) {
                    null !== e.realList && e["onDrag" + t](n), a.call(e, t, n)
                  }
                }.call(e, t)
              }),
                s.forEach(function(t) {
                  n["on" + t] = a.bind(e, t)
                })
              var i = r({}, this.options, n, {
                onMove: function(t, n) {
                  return e.onDragMove(t, n)
                },
              })
              !("draggable" in i) && (i.draggable = ">*"),
                (this._sortable = new t(this.rootContainer, i)),
                this.computeIndexes()
            },
            beforeDestroy: function() {
              this._sortable.destroy()
            },
            computed: {
              rootContainer: function() {
                return this.transitionMode ? this.$el.children[0] : this.$el
              },
              isCloning: function() {
                return !!this.options && !!this.options.group && "clone" === this.options.group.pull
              },
              realList: function() {
                return this.list ? this.list : this.value
              },
            },
            watch: {
              options: {
                handler: function(t) {
                  for (var e in t) -1 == u.indexOf(e) && this._sortable.option(e, t[e])
                },
                deep: !0,
              },
              realList: function() {
                this.computeIndexes()
              },
            },
            methods: {
              getChildrenNodes: function() {
                if (
                  (this.init ||
                    ((this.noneFunctionalComponentMode =
                      this.noneFunctionalComponentMode && 1 == this.$children.length),
                    (this.init = !0)),
                  this.noneFunctionalComponentMode)
                )
                  return this.$children[0].$slots.default
                var t = this.$slots.default
                return this.transitionMode ? t[0].child.$slots.default : t
              },
              computeIndexes: function() {
                var t = this
                this.$nextTick(function() {
                  t.visibleIndexes = (function(t, e, n) {
                    if (!t) return []
                    var r = t.map(function(t) {
                        return t.elm
                      }),
                      a = [].concat(i(e)).map(function(t) {
                        return r.indexOf(t)
                      })
                    return n
                      ? a.filter(function(t) {
                          return -1 !== t
                        })
                      : a
                  })(t.getChildrenNodes(), t.rootContainer.children, t.transitionMode)
                })
              },
              getUnderlyingVm: function(t) {
                var e = (function(t, e) {
                  return t
                    .map(function(t) {
                      return t.elm
                    })
                    .indexOf(e)
                })(this.getChildrenNodes() || [], t)
                return -1 === e ? null : { index: e, element: this.realList[e] }
              },
              getUnderlyingPotencialDraggableComponent: function(t) {
                var e = t.__vue__
                return e && e.$options && "transition-group" === e.$options._componentTag ? e.$parent : e
              },
              emitChanges: function(t) {
                var e = this
                this.$nextTick(function() {
                  e.$emit("change", t)
                })
              },
              alterList: function(t) {
                if (this.list) t(this.list)
                else {
                  var e = [].concat(i(this.value))
                  t(e), this.$emit("input", e)
                }
              },
              spliceList: function() {
                var t = arguments,
                  e = function(e) {
                    return e.splice.apply(e, t)
                  }
                this.alterList(e)
              },
              updatePosition: function(t, e) {
                var n = function(n) {
                  return n.splice(e, 0, n.splice(t, 1)[0])
                }
                this.alterList(n)
              },
              getRelatedContextFromMoveEvent: function(t) {
                var e = t.to,
                  n = t.related,
                  i = this.getUnderlyingPotencialDraggableComponent(e)
                if (!i) return { component: i }
                var a = i.realList,
                  o = { list: a, component: i }
                if (e !== n && a && i.getUnderlyingVm) {
                  var s = i.getUnderlyingVm(n)
                  if (s) return r(s, o)
                }
                return o
              },
              getVmIndex: function(t) {
                var e = this.visibleIndexes,
                  n = e.length
                return t > n - 1 ? n : e[t]
              },
              getComponent: function() {
                return this.$slots.default[0].componentInstance
              },
              resetTransitionData: function(t) {
                if (this.noTransitionOnDrag && this.transitionMode) {
                  this.getChildrenNodes()[t].data = null
                  var e = this.getComponent()
                  ;(e.children = []), (e.kept = void 0)
                }
              },
              onDragStart: function(t) {
                ;(this.context = this.getUnderlyingVm(t.item)),
                  (t.item._underlying_vm_ = this.clone(this.context.element)),
                  (c = t.item)
              },
              onDragAdd: function(t) {
                var n = t.item._underlying_vm_
                if (void 0 !== n) {
                  e(t.item)
                  var r = this.getVmIndex(t.newIndex)
                  this.spliceList(r, 0, n), this.computeIndexes()
                  var i = { element: n, newIndex: r }
                  this.emitChanges({ added: i })
                }
              },
              onDragRemove: function(t) {
                if ((n(this.rootContainer, t.item, t.oldIndex), this.isCloning)) e(t.clone)
                else {
                  var r = this.context.index
                  this.spliceList(r, 1)
                  var i = { element: this.context.element, oldIndex: r }
                  this.resetTransitionData(r), this.emitChanges({ removed: i })
                }
              },
              onDragUpdate: function(t) {
                e(t.item), n(t.from, t.item, t.oldIndex)
                var r = this.context.index,
                  i = this.getVmIndex(t.newIndex)
                this.updatePosition(r, i)
                var a = { element: this.context.element, oldIndex: r, newIndex: i }
                this.emitChanges({ moved: a })
              },
              computeFutureIndex: function(t, e) {
                if (!t.element) return 0
                var n = [].concat(i(e.to.children)).filter(function(t) {
                    return "none" !== t.style.display
                  }),
                  r = n.indexOf(e.related),
                  a = t.component.getVmIndex(r)
                return -1 != n.indexOf(c) || !e.willInsertAfter ? a : a + 1
              },
              onDragMove: function(t, e) {
                var n = this.move
                if (!n || !this.realList) return !0
                var i = this.getRelatedContextFromMoveEvent(t),
                  a = this.context,
                  o = this.computeFutureIndex(i, t)
                return r(a, { futureIndex: o }), r(t, { relatedContext: i, draggedContext: a }), n(t, e)
              },
              onDragEnd: function(t) {
                this.computeIndexes(), (c = null)
              },
            },
          }
        }
        Array.from ||
          (Array.from = function(t) {
            return [].slice.call(t)
          })
        var a = n("Lokx")
        t.exports = e(a)
      })()
    },
    DFfR: function(t, e, n) {
      "use strict"
      var r,
        i = n("01M/")
      ;((r = i) && r.__esModule ? r : { default: r }).default.load({
        google: { families: ["Fira+Sans:300,400,400i,600,700"] },
        typekit: { id: "gwb8hdb" },
      })
    },
    DNZ4: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "form",
            { attrs: { id: "app", novalidate: "true" } },
            [
              t.alert
                ? n("alert", { attrs: { type: "alert", status: t.alertStatus, autoclear: !0 } }, [
                    t._v(t._s(t.alertMessage)),
                  ])
                : t._e(),
              t._v(" "),
              n("input-text", {
                attrs: {
                  id: "email",
                  errormessage: t.errormessageEmail,
                  value: t.emailValue,
                  label: "Email",
                  placeholder: "Write your text",
                },
                on: {
                  inputblur: function(e) {
                    t.validate(e)
                  },
                },
              }),
              t._v(" "),
              n("input-text", {
                attrs: {
                  id: "pwd",
                  errormessage: t.errormessagePwd,
                  value: t.pwdValue,
                  label: "Password",
                  placeholder: "Write your text",
                },
                on: {
                  inputblur: function(e) {
                    t.validate(e)
                  },
                },
              }),
              t._v(" "),
              n(
                "input-button",
                {
                  attrs: {
                    customAlertEvent: { alertStatus: "success", alertMessage: "Successfully logged in!" },
                    type: "button",
                    variation: "solid",
                    block: "",
                  },
                  on: {
                    "system-alert": function(e) {
                      t.showAlert(e)
                    },
                  },
                },
                [t._v("\n      Login\n  ")]
              ),
            ],
            1
          )
        },
        i = []
    },
    Dd8w: function(t, e, n) {
      "use strict"
      e.__esModule = !0
      var r,
        i = n("woOf"),
        a = (r = i) && r.__esModule ? r : { default: r }
      e.default =
        a.default ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }
    },
    DuR2: function(t, e) {
      var n
      n = (function() {
        return this
      })()
      try {
        n = n || Function("return this")() || (0, eval)("this")
      } catch (t) {
        "object" == typeof window && (n = window)
      }
      t.exports = n
    },
    EEiV: function(t, e) {},
    EGZi: function(t, e) {
      t.exports = function(t, e) {
        return { value: e, done: !!t }
      }
    },
    EqBC: function(t, e, n) {
      "use strict"
      var r = n("kM2E"),
        i = n("FeBl"),
        a = n("7KvD"),
        o = n("t8x9"),
        s = n("fJUb")
      r(r.P + r.R, "Promise", {
        finally: function(t) {
          var e = o(this, i.Promise || a.Promise),
            n = "function" == typeof t
          return this.then(
            n
              ? function(n) {
                  return s(e, t()).then(function() {
                    return n
                  })
                }
              : t,
            n
              ? function(n) {
                  return s(e, t()).then(function() {
                    throw n
                  })
                }
              : t
          )
        },
      })
    },
    EqjI: function(t, e) {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    F9gj: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "InputRadio",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          data: function() {
            return { wrapper: this.groupLabel.length ? "fieldset" : "div" }
          },
          props: {
            vertical: { type: Boolean, default: !1 },
            options: { required: !0, type: Array },
            groupLabel: { type: String, default: "" },
            errormessage: { type: String, default: "" },
            id: { type: String, default: "", required: !0 },
            disabled: { type: Boolean, default: !1 },
            hover: { type: Boolean, default: !1 },
            focus: { type: Boolean, default: !1 },
          },
          methods: {
            change: function(t) {
              this.$emit("change", t)
            },
            inputblur: function(t) {
              this.$emit("inputblur", t)
            },
          },
        })
    },
    FDtV: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("NGSA"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("nzWT"),
        s = n("XyMi")
      var u = function(t) {
          n("T1NB")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-3ece8ae7", null)
      e.default = c.exports
    },
    FJKp: function(t, e, n) {
      var r = { "./LuxIconBase.vue": "tEfv", "./LuxIconFile.vue": "6VeP", "./LuxIconPicture.vue": "BMvv" }
      function i(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(i.keys = function() {
        return Object.keys(r)
      }),
        (i.resolve = a),
        (t.exports = i),
        (i.id = "FJKp")
    },
    FeBl: function(t, e) {
      var n = (t.exports = { version: "2.5.5" })
      "number" == typeof __e && (__e = n)
    },
    FvBc: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("XTLC"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("8eZf"),
        s = n("XyMi")
      var u = function(t) {
          n("aza+")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-de6cab36", null)
      e.default = c.exports
    },
    GPm3: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            this.type,
            { tag: "component", staticClass: "lux-not-found" },
            [
              e("menu-bar", {
                attrs: {
                  active: "NotFound",
                  menuItems: [
                    { name: "Template", component: "Index", href: "/#/" },
                    { name: "Living Docs", href: "http://localhost:6060/" },
                  ],
                },
              }),
              this._v(" "),
              e(
                "wrapper",
                [
                  e("heading", { attrs: { level: "h1" } }, [this._v("404 Error")]),
                  this._v(" "),
                  e("text-style", [
                    this._v(
                      "Couldn’t find a component or page that matches the URL you entered. Double check configuration in router/index.js."
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    Gu7T: function(t, e, n) {
      "use strict"
      e.__esModule = !0
      var r,
        i = n("c/Tr"),
        a = (r = i) && r.__esModule ? r : { default: r }
      e.default = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]
          return n
        }
        return (0, a.default)(t)
      }
    },
    "H/QU": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LibraryFooter",
          status: "ready",
          release: "1.0.0",
          type: "Pattern",
          props: { type: { type: String, default: "div" } },
        })
    },
    HChz: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resourceGetters = e.resourceMutations = e.resourceState = void 0)
      var r,
        i = n("mvHQ"),
        a = (r = i) && r.__esModule ? r : { default: r }
      ;(e.resourceState = {
        resource: {
          id: "",
          resourceClassName: "",
          bibId: "",
          label: "Resource not available.",
          thumbnail: "",
          startCanvas: "",
          isMultiVolume: !1,
          viewingHint: null,
          viewingDirection: null,
          members: [],
          loadState: "NOT_LOADED",
          saveState: "NOT_SAVED",
          ogState: {},
        },
      }),
        (e.resourceMutations = {
          APPLY_STATE: function(t) {
            ;(t.gallery.ogItems = t.gallery.items),
              (t.gallery.changeList = []),
              (t.resource.ogState = {
                startCanvas: resource.startPage,
                thumbnail: resource.thumbnail,
                viewingHint: resource.viewingHint,
                viewingDirection: resource.viewingDirection,
              }),
              (t.resource.saveState = "NOT_SAVED")
          },
          CHANGE_RESOURCE_LOAD_STATE: function(t, e) {
            t.resource.loadState = e
          },
          SAVED_STATE: function(t, e) {
            t.resource.saveState = e
          },
          SET_RESOURCE: function(t, e) {
            ;(t.resource.id = e.id),
              (t.resource.resourceClassName = e.__typename),
              (t.resource.label = e.label),
              (t.resource.startCanvas = e.startPage),
              (t.resource.viewingHint = e.viewingHint),
              (t.resource.viewingDirection = e.viewingDirection),
              (t.resource.thumbnail = null != e.thumbnail ? e.thumbnail.id : null),
              (t.resource.members = e.members)
            var n = e.members.map(function(t) {
              return {
                id: t.id,
                viewingHint: null != t.viewingHint ? t.viewingHint : "single",
                caption: t.label,
                service:
                  void 0 !== t.thumbnail.iiifServiceUrl
                    ? t.thumbnail.iiifServiceUrl
                    : "https://picsum.photos/600/300/?random",
                mediaUrl:
                  void 0 !== t.thumbnail.iiifServiceUrl
                    ? t.thumbnail.iiifServiceUrl + "/full/300,/0/default.jpg"
                    : "https://picsum.photos/600/300/?random",
              }
            })
            ;(t.gallery.items = n),
              (t.gallery.ogItems = n),
              (t.resource.loadState = "LOADED"),
              (t.resource.ogState = {
                startCanvas: e.startPage,
                thumbnail: null != e.thumbnail ? e.thumbnail.id : null,
                viewingHint: e.viewingHint,
                viewingDirection: e.viewingDirection,
              })
          },
          UPDATE_STARTCANVAS: function(t, e) {
            t.resource.startCanvas = e
          },
          UPDATE_THUMBNAIL: function(t, e) {
            t.resource.thumbnail = e
          },
          UPDATE_VIEWDIR: function(t, e) {
            t.resource.viewingDirection = e
          },
          UPDATE_VIEWHINT: function(t, e) {
            t.resource.viewingHint = e
          },
        }),
        (e.resourceGetters = {
          getMemberCount: function(t) {
            return t.resource.members.length
          },
          isMultiVolume: function(t) {
            return (
              t.resource.members.filter(function(t) {
                return "ScannedResource" === t.__typename
              }).length > 0
            )
          },
          orderChanged: function(t) {
            return (
              (0, a.default)(
                t.gallery.ogItems.map(function(t) {
                  return t.id
                })
              ) !==
              (0, a.default)(
                t.gallery.items.map(function(t) {
                  return t.id
                })
              )
            )
          },
          stateChanged: function(t, e) {
            var n = []
            return (
              n.push(t.resource.ogState.thumbnail !== t.resource.thumbnail),
              n.push(t.resource.ogState.startCanvas !== t.resource.startCanvas),
              n.push(t.resource.ogState.viewingHint !== t.resource.viewingHint),
              n.push(t.resource.ogState.viewingDirection !== t.resource.viewingDirection),
              n.push(t.gallery.changeList.length > 0),
              n.push(e.orderChanged),
              n.indexOf(!0) > -1
            )
          },
        })
    },
    HpRW: function(t, e, n) {
      "use strict"
      var r = n("kM2E"),
        i = n("lOnJ"),
        a = n("+ZMJ"),
        o = n("NWt+")
      t.exports = function(t) {
        r(r.S, t, {
          from: function(t) {
            var e,
              n,
              r,
              s,
              u = arguments[1]
            return (
              i(this),
              (e = void 0 !== u) && i(u),
              void 0 == t
                ? new this()
                : ((n = []),
                  e
                    ? ((r = 0),
                      (s = a(u, arguments[2], 2)),
                      o(t, !1, function(t) {
                        n.push(s(t, r++))
                      }))
                    : o(t, !1, n.push, n),
                  new this(n))
            )
          },
        })
      }
    },
    "I/4/": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", class: ["lux-library-header ", t.variation] },
            [
              n(
                "wrapper",
                { staticClass: "lux-header-content" },
                [
                  n("library-logo"),
                  t._v(" "),
                  n("a", { staticClass: "lux-app-name", attrs: { href: t.appUrl } }, [t._v(t._s(t.appName))]),
                  t._v(" "),
                  n("spacer"),
                  t._v(" "),
                  t._t("default"),
                ],
                2
              ),
            ],
            1
          )
        },
        i = []
    },
    IIlQ: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "MediaImage",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          data: function() {
            return { source: this.src }
          },
          props: {
            src: { type: String, default: null },
            alt: { type: String, default: "" },
            height: { type: String, default: "" },
            cover: { type: Boolean, default: !1 },
            contain: { type: Boolean, default: !1 },
          },
        })
    },
    IKGG: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.galleryMutations = e.galleryState = void 0)
      var r,
        i = n("Gu7T"),
        a = (r = i) && r.__esModule ? r : { default: r }
      ;(e.galleryState = { items: [], selected: [], cut: [], changeList: [], ogItems: [] }),
        (e.galleryMutations = {
          CUT: function(t, e) {
            t.cut = [].concat((0, a.default)(e))
          },
          PASTE: function(t, e) {
            t.items = [].concat((0, a.default)(e))
          },
          SELECT: function(t, e) {
            t.selected = [].concat((0, a.default)(e))
          },
          SET_GALLERY: function(t, e) {
            ;(t.items = e), (t.ogItems = e)
          },
          SORT_ITEMS: function(t, e) {
            t.items = [].concat((0, a.default)(e))
          },
          UPDATE_CHANGES: function(t, e) {
            t.changeList = [].concat((0, a.default)(e))
          },
          UPDATE_ITEMS: function(t, e) {
            t.items = [].concat((0, a.default)(e))
          },
        })
    },
    Ibhu: function(t, e, n) {
      var r = n("D2L2"),
        i = n("TcQ7"),
        a = n("vFc/")(!1),
        o = n("ax3d")("IE_PROTO")
      t.exports = function(t, e) {
        var n,
          s = i(t),
          u = 0,
          c = []
        for (n in s) n != o && r(s, n) && c.push(n)
        for (; e.length > u; ) r(s, (n = e[u++])) && (~a(c, n) || c.push(n))
        return c
      }
    },
    J3kh: function(t, e) {},
    JdFC: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LibraryLogo",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "div" } },
        })
    },
    K5Ch: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LuxIconBase",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: {
            iconName: { required: !1, type: String, default: "" },
            width: { type: [Number, String], default: 24 },
            height: { type: [Number, String], default: 24 },
            iconColor: { type: String, default: "currentColor" },
          },
        })
    },
    KFhq: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", class: ["lux-library-footer"] },
            [
              n("wrapper", { staticClass: "lux-footer-content" }, [
                n("div", { staticClass: "lux-library-links" }, [
                  n("nav", { attrs: { role: "navigation", "aria-label": "Research Tools" } }, [
                    n("h2", [
                      n("a", { attrs: { href: "https://library.princeton.edu/research" } }, [t._v("Research Tools")]),
                    ]),
                    t._v(" "),
                    n("ul", [
                      n("li", [
                        n("a", { attrs: { href: "https://dss.princeton.edu" } }, [t._v("Data and Statistics")]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/research/databases" } }, [
                          t._v("Databases"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [n("a", { attrs: { href: "https://getit.princeton.edu/" } }, [t._v("E-journals")])]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/library-guides" } }, [
                          t._v("Research Guides"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [n("a", { attrs: { href: "https://catalog.princeton.edu/" } }, [t._v("Catalog")])]),
                      t._v(" "),
                      n("li", [
                        n(
                          "a",
                          { attrs: { href: "https://library.princeton.edu/databases/subject/special-collections" } },
                          [t._v("Special Collections")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "lux-library-links" }, [
                  n("nav", { attrs: { role: "navigation", "aria-label": "Library Services" } }, [
                    n("h2", [
                      n("a", { attrs: { href: "https://library.princeton.edu/services" } }, [t._v("Library Services")]),
                    ]),
                    t._v(" "),
                    n("ul", [
                      n("li", [
                        n(
                          "a",
                          {
                            attrs: {
                              href: "https://library.princeton.edu/services/article-express",
                              title: "Use our Interlibrary Loan and Article Express Services",
                            },
                          },
                          [t._v("Article Express")]
                        ),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/services/borrowdirect" } }, [
                          t._v("Borrow Direct"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n(
                          "a",
                          { attrs: { href: "https://library.princeton.edu/services/access/circulation-policies" } },
                          [t._v("Circulation")]
                        ),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/services/reserves" } }, [
                          t._v("Course Reserves"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n(
                          "a",
                          {
                            attrs: {
                              href: "https://library.princeton.edu/services/interlibrary-services",
                              title: "Interlibrary Loan Services, Article Express",
                            },
                          },
                          [t._v("Interlibrary Loan (ILL)")]
                        ),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/services/access" } }, [
                          t._v("Library Access"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/services/study-spaces" } }, [
                          t._v("Study Spaces and Lockers"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/help/trace-materials" } }, [
                          t._v("Trace a Book"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/accounts" } }, [t._v("Your Accounts")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "lux-library-links" }, [
                  n("nav", { attrs: { role: "navigation", "aria-label": "About the Library" } }, [
                    n("h2", [
                      n("a", { attrs: { href: "https://library.princeton.edu/about" } }, [t._v("About the Library")]),
                    ]),
                    t._v(" "),
                    n("ul", [
                      n("li", [
                        n(
                          "a",
                          { attrs: { href: "https://library.princeton.edu/collections-and-collection-development" } },
                          [t._v("Collections and Collecting")]
                        ),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://rbsc.princeton.edu/exhibitions" } }, [t._v("Exhibitions")]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/about/locations" } }, [
                          t._v("Library Locations"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/alumni" } }, [t._v("For Alumni")]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/staff" } }, [t._v("For Library Staff")]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/staff/directory" } }, [
                          t._v("Staff Directory"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n("a", { attrs: { href: "https://library.princeton.edu/about/friends" } }, [
                          t._v("Friends of the Library"),
                        ]),
                      ]),
                      t._v(" "),
                      n("li", [
                        n(
                          "a",
                          { attrs: { href: "https://library.princeton.edu/services/technology/off-campus-access" } },
                          [t._v("Using the Library Off-Campus")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "lux-library-links" },
                  [
                    n("library-contact-info"),
                    t._v(" "),
                    n("logo-university", { attrs: { width: "142", height: "40" } }),
                    t._v(" "),
                    n("university-copyright", { attrs: { type: "div" } }),
                    t._v(" "),
                    n("university-accessibility"),
                  ],
                  1
                ),
              ]),
            ],
            1
          )
        },
        i = []
    },
    KRl5: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "button",
            {
              class: ["lux-button", t.variation, t.size, { "lux-expanded": 1 == t.block }],
              attrs: { type: !!t.type && t.type, disabled: t.disabled },
              on: {
                click: function(e) {
                  t.buttonClicked(e)
                },
              },
            },
            [
              t._t("default", [t._v("\n  " + t._s(t.label) + "\n  ")]),
              t._v(" "),
              "dropdown" === t.variation ? n("span", { staticClass: "lux-dropdown-indicator" }, [t._v(" ▼")]) : t._e(),
            ],
            2
          )
        },
        i = []
    },
    KTHU: function(t, e) {},
    L42u: function(t, e, n) {
      var r,
        i,
        a,
        o = n("+ZMJ"),
        s = n("knuC"),
        u = n("RPLV"),
        c = n("ON07"),
        l = n("7KvD"),
        f = l.process,
        d = l.setImmediate,
        p = l.clearImmediate,
        h = l.MessageChannel,
        v = l.Dispatch,
        m = 0,
        g = {},
        y = function() {
          var t = +this
          if (g.hasOwnProperty(t)) {
            var e = g[t]
            delete g[t], e()
          }
        },
        _ = function(t) {
          y.call(t.data)
        }
      ;(d && p) ||
        ((d = function(t) {
          for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++])
          return (
            (g[++m] = function() {
              s("function" == typeof t ? t : Function(t), e)
            }),
            r(m),
            m
          )
        }),
        (p = function(t) {
          delete g[t]
        }),
        "process" == n("R9M2")(f)
          ? (r = function(t) {
              f.nextTick(o(y, t, 1))
            })
          : v && v.now
            ? (r = function(t) {
                v.now(o(y, t, 1))
              })
            : h
              ? ((a = (i = new h()).port2), (i.port1.onmessage = _), (r = o(a.postMessage, a, 1)))
              : l.addEventListener && "function" == typeof postMessage && !l.importScripts
                ? ((r = function(t) {
                    l.postMessage(t + "", "*")
                  }),
                  l.addEventListener("message", _, !1))
                : (r =
                    "onreadystatechange" in c("script")
                      ? function(t) {
                          u.appendChild(c("script")).onreadystatechange = function() {
                            u.removeChild(this), y.call(t)
                          }
                        }
                      : function(t) {
                          setTimeout(o(y, t, 1), 0)
                        })),
        (t.exports = { set: d, clear: p })
    },
    LGc7: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("aP67"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("gfJP"),
        s = n("XyMi")
      var u = function(t) {
          n("EEiV")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-04d6ed70", null)
      e.default = c.exports
    },
    LIJb: function(t, e, n) {
      var r = n("EqjI")
      t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!")
        return t
      }
    },
    LbfZ: function(t, e) {},
    Lokx: function(t, e, n) {
      var r, i
      /**!
       * Sortable
       * @author	RubaXa   <trash@rubaxa.org>
       * @license MIT
       */
      /**!
       * Sortable
       * @author	RubaXa   <trash@rubaxa.org>
       * @license MIT
       */
      !(function(a) {
        "use strict"
        void 0 === (i = "function" == typeof (r = a) ? r.call(e, n, e, t) : r) || (t.exports = i)
      })(function() {
        "use strict"
        if ("undefined" == typeof window || !window.document)
          return function() {
            throw new Error("Sortable.js requires a window with a document")
          }
        var t,
          e,
          n,
          r,
          i,
          a,
          o,
          s,
          u,
          c,
          l,
          f,
          d,
          p,
          h,
          v,
          m,
          g,
          y,
          _,
          b,
          x = {},
          w = /\s+/g,
          M = /left|right|inline/,
          O = "Sortable" + new Date().getTime(),
          C = window,
          S = C.document,
          j = C.parseInt,
          E = C.setTimeout,
          L = C.jQuery || C.Zepto,
          T = C.Polymer,
          k = !1,
          A = "draggable" in S.createElement("div"),
          D =
            !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) &&
            (((b = S.createElement("x")).style.cssText = "pointer-events:auto"), "auto" === b.style.pointerEvents),
          I = !1,
          N = Math.abs,
          $ = Math.min,
          P = [],
          z = [],
          F = rt(function(t, e, n) {
            if (n && e.scroll) {
              var r,
                i,
                a,
                o,
                l,
                f,
                d = n[O],
                p = e.scrollSensitivity,
                h = e.scrollSpeed,
                v = t.clientX,
                m = t.clientY,
                g = window.innerWidth,
                y = window.innerHeight
              if (u !== n && ((s = e.scroll), (u = n), (c = e.scrollFn), !0 === s)) {
                s = n
                do {
                  if (s.offsetWidth < s.scrollWidth || s.offsetHeight < s.scrollHeight) break
                } while ((s = s.parentNode))
              }
              s &&
                ((r = s),
                (i = s.getBoundingClientRect()),
                (a = (N(i.right - v) <= p) - (N(i.left - v) <= p)),
                (o = (N(i.bottom - m) <= p) - (N(i.top - m) <= p))),
                a || o || ((o = (y - m <= p) - (m <= p)), ((a = (g - v <= p) - (v <= p)) || o) && (r = C)),
                (x.vx === a && x.vy === o && x.el === r) ||
                  ((x.el = r),
                  (x.vx = a),
                  (x.vy = o),
                  clearInterval(x.pid),
                  r &&
                    (x.pid = setInterval(function() {
                      if (((f = o ? o * h : 0), (l = a ? a * h : 0), "function" == typeof c)) return c.call(d, l, f, t)
                      r === C
                        ? C.scrollTo(C.pageXOffset + l, C.pageYOffset + f)
                        : ((r.scrollTop += f), (r.scrollLeft += l))
                    }, 24)))
            }
          }, 30),
          R = function(t) {
            function e(t, e) {
              return (
                (void 0 !== t && !0 !== t) || (t = n.name),
                "function" == typeof t
                  ? t
                  : function(n, r) {
                      var i = r.options.group.name
                      return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t)
                    }
              )
            }
            var n = {},
              r = t.group
            ;(r && "object" == typeof r) || (r = { name: r }),
              (n.name = r.name),
              (n.checkPull = e(r.pull, !0)),
              (n.checkPut = e(r.put)),
              (n.revertClone = r.revertClone),
              (t.group = n)
          }
        try {
          window.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
              get: function() {
                k = { capture: !1, passive: !1 }
              },
            })
          )
        } catch (t) {}
        function U(t, e) {
          if (!t || !t.nodeType || 1 !== t.nodeType)
            throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t)
          ;(this.el = t), (this.options = e = it({}, e)), (t[O] = this)
          var n = {
            group: Math.random(),
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            scroll: !0,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            setData: function(t, e) {
              t.setData("Text", e.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: { x: 0, y: 0 },
            supportPointer: !1 !== U.supportPointer,
          }
          for (var r in n) !(r in e) && (e[r] = n[r])
          for (var i in (R(e), this))
            "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this))
          ;(this.nativeDraggable = !e.forceFallback && A),
            Y(t, "mousedown", this._onTapStart),
            Y(t, "touchstart", this._onTapStart),
            e.supportPointer && Y(t, "pointerdown", this._onTapStart),
            this.nativeDraggable && (Y(t, "dragover", this), Y(t, "dragenter", this)),
            z.push(this._onDragOver),
            e.store && this.sort(e.store.get(this))
        }
        function B(e, n) {
          "clone" !== e.lastPullMode && (n = !0),
            r &&
              r.state !== n &&
              (G(r, "display", n ? "none" : ""),
              n ||
                (r.state &&
                  (e.options.group.revertClone ? (i.insertBefore(r, a), e._animate(t, r)) : i.insertBefore(r, t))),
              (r.state = n))
        }
        function H(t, e, n) {
          if (t) {
            n = n || S
            do {
              if ((">*" === e && t.parentNode === n) || nt(t, e)) return t
            } while ((t = V(t)))
          }
          return null
        }
        function V(t) {
          var e = t.host
          return e && e.nodeType ? e : t.parentNode
        }
        function Y(t, e, n) {
          t.addEventListener(e, n, k)
        }
        function q(t, e, n) {
          t.removeEventListener(e, n, k)
        }
        function W(t, e, n) {
          if (t)
            if (t.classList) t.classList[n ? "add" : "remove"](e)
            else {
              var r = (" " + t.className + " ").replace(w, " ").replace(" " + e + " ", " ")
              t.className = (r + (n ? " " + e : "")).replace(w, " ")
            }
        }
        function G(t, e, n) {
          var r = t && t.style
          if (r) {
            if (void 0 === n)
              return (
                S.defaultView && S.defaultView.getComputedStyle
                  ? (n = S.defaultView.getComputedStyle(t, ""))
                  : t.currentStyle && (n = t.currentStyle),
                void 0 === e ? n : n[e]
              )
            e in r || (e = "-webkit-" + e), (r[e] = n + ("string" == typeof n ? "" : "px"))
          }
        }
        function X(t, e, n) {
          if (t) {
            var r = t.getElementsByTagName(e),
              i = 0,
              a = r.length
            if (n) for (; i < a; i++) n(r[i], i)
            return r
          }
          return []
        }
        function Q(t, e, n, i, a, o, s, u) {
          t = t || e[O]
          var c = S.createEvent("Event"),
            l = t.options,
            f = "on" + n.charAt(0).toUpperCase() + n.substr(1)
          c.initEvent(n, !0, !0),
            (c.to = a || e),
            (c.from = o || e),
            (c.item = i || e),
            (c.clone = r),
            (c.oldIndex = s),
            (c.newIndex = u),
            e.dispatchEvent(c),
            l[f] && l[f].call(t, c)
        }
        function J(t, e, n, r, i, a, o, s) {
          var u,
            c,
            l = t[O],
            f = l.options.onMove
          return (
            (u = S.createEvent("Event")).initEvent("move", !0, !0),
            (u.to = e),
            (u.from = t),
            (u.dragged = n),
            (u.draggedRect = r),
            (u.related = i || e),
            (u.relatedRect = a || e.getBoundingClientRect()),
            (u.willInsertAfter = s),
            t.dispatchEvent(u),
            f && (c = f.call(l, u, o)),
            c
          )
        }
        function Z(t) {
          t.draggable = !1
        }
        function K() {
          I = !1
        }
        function tt(t) {
          for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
            r += e.charCodeAt(n)
          return r.toString(36)
        }
        function et(t, e) {
          var n = 0
          if (!t || !t.parentNode) return -1
          for (; t && (t = t.previousElementSibling); )
            "TEMPLATE" === t.nodeName.toUpperCase() || (">*" !== e && !nt(t, e)) || n++
          return n
        }
        function nt(t, e) {
          if (t) {
            var n = (e = e.split(".")).shift().toUpperCase(),
              r = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g")
            return !(
              ("" !== n && t.nodeName.toUpperCase() != n) ||
              (e.length && ((" " + t.className + " ").match(r) || []).length != e.length)
            )
          }
          return !1
        }
        function rt(t, e) {
          var n, r
          return function() {
            void 0 === n &&
              ((n = arguments),
              (r = this),
              E(function() {
                1 === n.length ? t.call(r, n[0]) : t.apply(r, n), (n = void 0)
              }, e))
          }
        }
        function it(t, e) {
          if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
          return t
        }
        function at(t) {
          return T && T.dom ? T.dom(t).cloneNode(!0) : L ? L(t).clone(!0)[0] : t.cloneNode(!0)
        }
        function ot(t) {
          return E(t, 0)
        }
        function st(t) {
          return clearTimeout(t)
        }
        return (
          (U.prototype = {
            constructor: U,
            _onTapStart: function(e) {
              var n,
                r = this,
                i = this.el,
                a = this.options,
                s = a.preventOnFilter,
                u = e.type,
                c = e.touches && e.touches[0],
                l = (c || e).target,
                f = (e.target.shadowRoot && e.path && e.path[0]) || l,
                d = a.filter
              if (
                ((function(t) {
                  var e = t.getElementsByTagName("input"),
                    n = e.length
                  for (; n--; ) {
                    var r = e[n]
                    r.checked && P.push(r)
                  }
                })(i),
                !t &&
                  !((/mousedown|pointerdown/.test(u) && 0 !== e.button) || a.disabled) &&
                  !f.isContentEditable &&
                  (l = H(l, a.draggable, i)) &&
                  o !== l)
              ) {
                if (((n = et(l, a.draggable)), "function" == typeof d)) {
                  if (d.call(this, e, l, this)) return Q(r, f, "filter", l, i, i, n), void (s && e.preventDefault())
                } else if (
                  d &&
                  (d = d.split(",").some(function(t) {
                    if ((t = H(f, t.trim(), i))) return Q(r, t, "filter", l, i, i, n), !0
                  }))
                )
                  return void (s && e.preventDefault())
                ;(a.handle && !H(f, a.handle, i)) || this._prepareDragStart(e, c, l, n)
              }
            },
            _prepareDragStart: function(n, r, s, u) {
              var c,
                l = this,
                f = l.el,
                d = l.options,
                h = f.ownerDocument
              s &&
                !t &&
                s.parentNode === f &&
                ((g = n),
                (i = f),
                (e = (t = s).parentNode),
                (a = t.nextSibling),
                (o = s),
                (v = d.group),
                (p = u),
                (this._lastX = (r || n).clientX),
                (this._lastY = (r || n).clientY),
                (t.style["will-change"] = "all"),
                (c = function() {
                  l._disableDelayedDrag(),
                    (t.draggable = l.nativeDraggable),
                    W(t, d.chosenClass, !0),
                    l._triggerDragStart(n, r),
                    Q(l, i, "choose", t, i, i, p)
                }),
                d.ignore.split(",").forEach(function(e) {
                  X(t, e.trim(), Z)
                }),
                Y(h, "mouseup", l._onDrop),
                Y(h, "touchend", l._onDrop),
                Y(h, "touchcancel", l._onDrop),
                Y(h, "selectstart", l),
                d.supportPointer && Y(h, "pointercancel", l._onDrop),
                d.delay
                  ? (Y(h, "mouseup", l._disableDelayedDrag),
                    Y(h, "touchend", l._disableDelayedDrag),
                    Y(h, "touchcancel", l._disableDelayedDrag),
                    Y(h, "mousemove", l._disableDelayedDrag),
                    Y(h, "touchmove", l._disableDelayedDrag),
                    d.supportPointer && Y(h, "pointermove", l._disableDelayedDrag),
                    (l._dragStartTimer = E(c, d.delay)))
                  : c())
            },
            _disableDelayedDrag: function() {
              var t = this.el.ownerDocument
              clearTimeout(this._dragStartTimer),
                q(t, "mouseup", this._disableDelayedDrag),
                q(t, "touchend", this._disableDelayedDrag),
                q(t, "touchcancel", this._disableDelayedDrag),
                q(t, "mousemove", this._disableDelayedDrag),
                q(t, "touchmove", this._disableDelayedDrag),
                q(t, "pointermove", this._disableDelayedDrag)
            },
            _triggerDragStart: function(e, n) {
              ;(n = n || ("touch" == e.pointerType ? e : null))
                ? ((g = { target: t, clientX: n.clientX, clientY: n.clientY }), this._onDragStart(g, "touch"))
                : this.nativeDraggable
                  ? (Y(t, "dragend", this), Y(i, "dragstart", this._onDragStart))
                  : this._onDragStart(g, !0)
              try {
                S.selection
                  ? ot(function() {
                      S.selection.empty()
                    })
                  : window.getSelection().removeAllRanges()
              } catch (t) {}
            },
            _dragStarted: function() {
              if (i && t) {
                var e = this.options
                W(t, e.ghostClass, !0), W(t, e.dragClass, !1), (U.active = this), Q(this, i, "start", t, i, i, p)
              } else this._nulling()
            },
            _emulateDragOver: function() {
              if (y) {
                if (this._lastX === y.clientX && this._lastY === y.clientY) return
                ;(this._lastX = y.clientX), (this._lastY = y.clientY), D || G(n, "display", "none")
                var t = S.elementFromPoint(y.clientX, y.clientY),
                  e = t,
                  r = z.length
                if ((t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(y.clientX, y.clientY)), e))
                  do {
                    if (e[O]) {
                      for (; r--; ) z[r]({ clientX: y.clientX, clientY: y.clientY, target: t, rootEl: e })
                      break
                    }
                    t = e
                  } while ((e = e.parentNode))
                D || G(n, "display", "")
              }
            },
            _onTouchMove: function(t) {
              if (g) {
                var e = this.options,
                  r = e.fallbackTolerance,
                  i = e.fallbackOffset,
                  a = t.touches ? t.touches[0] : t,
                  o = a.clientX - g.clientX + i.x,
                  s = a.clientY - g.clientY + i.y,
                  u = t.touches ? "translate3d(" + o + "px," + s + "px,0)" : "translate(" + o + "px," + s + "px)"
                if (!U.active) {
                  if (r && $(N(a.clientX - this._lastX), N(a.clientY - this._lastY)) < r) return
                  this._dragStarted()
                }
                this._appendGhost(),
                  (_ = !0),
                  (y = a),
                  G(n, "webkitTransform", u),
                  G(n, "mozTransform", u),
                  G(n, "msTransform", u),
                  G(n, "transform", u),
                  t.preventDefault()
              }
            },
            _appendGhost: function() {
              if (!n) {
                var e,
                  r = t.getBoundingClientRect(),
                  a = G(t),
                  o = this.options
                W((n = t.cloneNode(!0)), o.ghostClass, !1),
                  W(n, o.fallbackClass, !0),
                  W(n, o.dragClass, !0),
                  G(n, "top", r.top - j(a.marginTop, 10)),
                  G(n, "left", r.left - j(a.marginLeft, 10)),
                  G(n, "width", r.width),
                  G(n, "height", r.height),
                  G(n, "opacity", "0.8"),
                  G(n, "position", "fixed"),
                  G(n, "zIndex", "100000"),
                  G(n, "pointerEvents", "none"),
                  (o.fallbackOnBody && S.body.appendChild(n)) || i.appendChild(n),
                  (e = n.getBoundingClientRect()),
                  G(n, "width", 2 * r.width - e.width),
                  G(n, "height", 2 * r.height - e.height)
              }
            },
            _onDragStart: function(e, n) {
              var a = this,
                o = e.dataTransfer,
                s = a.options
              a._offUpEvents(),
                v.checkPull(a, a, t, e) &&
                  (((r = at(t)).draggable = !1),
                  (r.style["will-change"] = ""),
                  G(r, "display", "none"),
                  W(r, a.options.chosenClass, !1),
                  (a._cloneId = ot(function() {
                    i.insertBefore(r, t), Q(a, i, "clone", t)
                  }))),
                W(t, s.dragClass, !0),
                n
                  ? ("touch" === n
                      ? (Y(S, "touchmove", a._onTouchMove),
                        Y(S, "touchend", a._onDrop),
                        Y(S, "touchcancel", a._onDrop),
                        s.supportPointer && (Y(S, "pointermove", a._onTouchMove), Y(S, "pointerup", a._onDrop)))
                      : (Y(S, "mousemove", a._onTouchMove), Y(S, "mouseup", a._onDrop)),
                    (a._loopId = setInterval(a._emulateDragOver, 50)))
                  : (o && ((o.effectAllowed = "move"), s.setData && s.setData.call(a, o, t)),
                    Y(S, "drop", a),
                    (a._dragStartId = ot(a._dragStarted)))
            },
            _onDragOver: function(o) {
              var s,
                u,
                c,
                p,
                h = this.el,
                g = this.options,
                y = g.group,
                b = U.active,
                x = v === y,
                w = !1,
                C = g.sort
              if (
                (void 0 !== o.preventDefault && (o.preventDefault(), !g.dragoverBubble && o.stopPropagation()),
                !t.animated &&
                  ((_ = !0),
                  b &&
                    !g.disabled &&
                    (x
                      ? C || (p = !i.contains(t))
                      : m === this || ((b.lastPullMode = v.checkPull(this, b, t, o)) && y.checkPut(this, b, t, o))) &&
                    (void 0 === o.rootEl || o.rootEl === this.el)))
              ) {
                if ((F(o, g, this.el), I)) return
                if (
                  ((s = H(o.target, g.draggable, h)),
                  (u = t.getBoundingClientRect()),
                  m !== this && ((m = this), (w = !0)),
                  p)
                )
                  return B(b, !0), (e = i), void (r || a ? i.insertBefore(t, r || a) : C || i.appendChild(t))
                if (
                  0 === h.children.length ||
                  h.children[0] === n ||
                  (h === o.target &&
                    (function(t, e) {
                      var n = t.lastElementChild.getBoundingClientRect()
                      return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                    })(h, o))
                ) {
                  if (
                    (0 !== h.children.length && h.children[0] !== n && h === o.target && (s = h.lastElementChild), s)
                  ) {
                    if (s.animated) return
                    c = s.getBoundingClientRect()
                  }
                  B(b, x),
                    !1 !== J(i, h, t, u, s, c, o) &&
                      (t.contains(h) || (h.appendChild(t), (e = h)), this._animate(u, t), s && this._animate(c, s))
                } else if (s && !s.animated && s !== t && void 0 !== s.parentNode[O]) {
                  l !== s && ((l = s), (f = G(s)), (d = G(s.parentNode)))
                  var S = (c = s.getBoundingClientRect()).right - c.left,
                    j = c.bottom - c.top,
                    L =
                      M.test(f.cssFloat + f.display) ||
                      ("flex" == d.display && 0 === d["flex-direction"].indexOf("row")),
                    T = s.offsetWidth > t.offsetWidth,
                    k = s.offsetHeight > t.offsetHeight,
                    A = (L ? (o.clientX - c.left) / S : (o.clientY - c.top) / j) > 0.5,
                    D = s.nextElementSibling,
                    N = !1
                  if (L) {
                    var $ = t.offsetTop,
                      P = s.offsetTop
                    N =
                      $ === P
                        ? (s.previousElementSibling === t && !T) || (A && T)
                        : s.previousElementSibling === t || t.previousElementSibling === s
                          ? (o.clientY - c.top) / j > 0.5
                          : P > $
                  } else w || (N = (D !== t && !k) || (A && k))
                  var z = J(i, h, t, u, s, c, o, N)
                  !1 !== z &&
                    ((1 !== z && -1 !== z) || (N = 1 === z),
                    (I = !0),
                    E(K, 30),
                    B(b, x),
                    t.contains(h) || (N && !D ? h.appendChild(t) : s.parentNode.insertBefore(t, N ? D : s)),
                    (e = t.parentNode),
                    this._animate(u, t),
                    this._animate(c, s))
                }
              }
            },
            _animate: function(t, e) {
              var n = this.options.animation
              if (n) {
                var r = e.getBoundingClientRect()
                1 === t.nodeType && (t = t.getBoundingClientRect()),
                  G(e, "transition", "none"),
                  G(e, "transform", "translate3d(" + (t.left - r.left) + "px," + (t.top - r.top) + "px,0)"),
                  e.offsetWidth,
                  G(e, "transition", "all " + n + "ms"),
                  G(e, "transform", "translate3d(0,0,0)"),
                  clearTimeout(e.animated),
                  (e.animated = E(function() {
                    G(e, "transition", ""), G(e, "transform", ""), (e.animated = !1)
                  }, n))
              }
            },
            _offUpEvents: function() {
              var t = this.el.ownerDocument
              q(S, "touchmove", this._onTouchMove),
                q(S, "pointermove", this._onTouchMove),
                q(t, "mouseup", this._onDrop),
                q(t, "touchend", this._onDrop),
                q(t, "pointerup", this._onDrop),
                q(t, "touchcancel", this._onDrop),
                q(t, "pointercancel", this._onDrop),
                q(t, "selectstart", this)
            },
            _onDrop: function(o) {
              var s = this.el,
                u = this.options
              clearInterval(this._loopId),
                clearInterval(x.pid),
                clearTimeout(this._dragStartTimer),
                st(this._cloneId),
                st(this._dragStartId),
                q(S, "mouseover", this),
                q(S, "mousemove", this._onTouchMove),
                this.nativeDraggable && (q(S, "drop", this), q(s, "dragstart", this._onDragStart)),
                this._offUpEvents(),
                o &&
                  (_ && (o.preventDefault(), !u.dropBubble && o.stopPropagation()),
                  n && n.parentNode && n.parentNode.removeChild(n),
                  (i !== e && "clone" === U.active.lastPullMode) || (r && r.parentNode && r.parentNode.removeChild(r)),
                  t &&
                    (this.nativeDraggable && q(t, "dragend", this),
                    Z(t),
                    (t.style["will-change"] = ""),
                    W(t, this.options.ghostClass, !1),
                    W(t, this.options.chosenClass, !1),
                    Q(this, i, "unchoose", t, e, i, p),
                    i !== e
                      ? (h = et(t, u.draggable)) >= 0 &&
                        (Q(null, e, "add", t, e, i, p, h),
                        Q(this, i, "remove", t, e, i, p, h),
                        Q(null, e, "sort", t, e, i, p, h),
                        Q(this, i, "sort", t, e, i, p, h))
                      : t.nextSibling !== a &&
                        (h = et(t, u.draggable)) >= 0 &&
                        (Q(this, i, "update", t, e, i, p, h), Q(this, i, "sort", t, e, i, p, h)),
                    U.active && ((null != h && -1 !== h) || (h = p), Q(this, i, "end", t, e, i, p, h), this.save()))),
                this._nulling()
            },
            _nulling: function() {
              ;(i = t = e = n = a = r = o = s = u = g = y = _ = h = l = f = m = v = U.active = null),
                P.forEach(function(t) {
                  t.checked = !0
                }),
                (P.length = 0)
            },
            handleEvent: function(e) {
              switch (e.type) {
                case "drop":
                case "dragend":
                  this._onDrop(e)
                  break
                case "dragover":
                case "dragenter":
                  t &&
                    (this._onDragOver(e),
                    (function(t) {
                      t.dataTransfer && (t.dataTransfer.dropEffect = "move")
                      t.preventDefault()
                    })(e))
                  break
                case "mouseover":
                  this._onDrop(e)
                  break
                case "selectstart":
                  e.preventDefault()
              }
            },
            toArray: function() {
              for (var t, e = [], n = this.el.children, r = 0, i = n.length, a = this.options; r < i; r++)
                H((t = n[r]), a.draggable, this.el) && e.push(t.getAttribute(a.dataIdAttr) || tt(t))
              return e
            },
            sort: function(t) {
              var e = {},
                n = this.el
              this.toArray().forEach(function(t, r) {
                var i = n.children[r]
                H(i, this.options.draggable, n) && (e[t] = i)
              }, this),
                t.forEach(function(t) {
                  e[t] && (n.removeChild(e[t]), n.appendChild(e[t]))
                })
            },
            save: function() {
              var t = this.options.store
              t && t.set(this)
            },
            closest: function(t, e) {
              return H(t, e || this.options.draggable, this.el)
            },
            option: function(t, e) {
              var n = this.options
              if (void 0 === e) return n[t]
              ;(n[t] = e), "group" === t && R(n)
            },
            destroy: function() {
              var t = this.el
              ;(t[O] = null),
                q(t, "mousedown", this._onTapStart),
                q(t, "touchstart", this._onTapStart),
                q(t, "pointerdown", this._onTapStart),
                this.nativeDraggable && (q(t, "dragover", this), q(t, "dragenter", this)),
                Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                  t.removeAttribute("draggable")
                }),
                z.splice(z.indexOf(this._onDragOver), 1),
                this._onDrop(),
                (this.el = t = null)
            },
          }),
          Y(S, "touchmove", function(t) {
            U.active && t.preventDefault()
          }),
          (U.utils = {
            on: Y,
            off: q,
            css: G,
            find: X,
            is: function(t, e) {
              return !!H(t, e, t)
            },
            extend: it,
            throttle: rt,
            closest: H,
            toggleClass: W,
            clone: at,
            index: et,
            nextTick: ot,
            cancelNextTick: st,
          }),
          (U.create = function(t, e) {
            return new U(t, e)
          }),
          (U.version = "1.7.0"),
          U
        )
      })
    },
    M6a0: function(t, e) {},
    MIwS: function(t, e) {},
    MU5D: function(t, e, n) {
      var r = n("R9M2")
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
          }
    },
    MU8w: function(t, e, n) {
      "use strict"
      t.exports = n("hKoQ").polyfill()
    },
    MhlZ: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("qjAG"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("x4Lq"),
        s = n("XyMi")
      var u = function(t) {
          n("8Tf8")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-4b357e68", null)
      e.default = c.exports
    },
    Mhyx: function(t, e, n) {
      var r = n("/bQp"),
        i = n("dSzd")("iterator"),
        a = Array.prototype
      t.exports = function(t) {
        return void 0 !== t && (r.Array === t || a[i] === t)
      }
    },
    MmMw: function(t, e, n) {
      var r = n("EqjI")
      t.exports = function(t, e) {
        if (!r(t)) return t
        var n, i
        if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i
        if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i
        if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    MxhL: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("IIlQ"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("5E4N"),
        s = n("XyMi")
      var u = function(t) {
          n("tdfW")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-39ce042c", null)
      e.default = c.exports
    },
    NCqp: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LogoLibrary",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { width: { type: [Number, String], default: 440 }, height: { type: [Number, String], default: 97 } },
        })
    },
    NGSA: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LibraryContactInfo",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "div" } },
        })
    },
    "NWt+": function(t, e, n) {
      var r = n("+ZMJ"),
        i = n("msXi"),
        a = n("Mhyx"),
        o = n("77Pl"),
        s = n("QRG4"),
        u = n("3fs2"),
        c = {},
        l = {}
      ;((e = t.exports = function(t, e, n, f, d) {
        var p,
          h,
          v,
          m,
          g = d
            ? function() {
                return t
              }
            : u(t),
          y = r(n, f, e ? 2 : 1),
          _ = 0
        if ("function" != typeof g) throw TypeError(t + " is not iterable!")
        if (a(g)) {
          for (p = s(t.length); p > _; _++) if ((m = e ? y(o((h = t[_]))[0], h[1]) : y(t[_])) === c || m === l) return m
        } else for (v = g.call(t); !(h = v.next()).done; ) if ((m = i(v, y, h.value, e)) === c || m === l) return m
      }).BREAK = c),
        (e.RETURN = l)
    },
    NXVa: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("fHC3"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("8Jr4"),
        s = n("XyMi")
      var u = function(t) {
          n("h3vD")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-3c144416", null)
      e.default = c.exports
    },
    NYxO: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        n.d(e, "Store", function() {
          return l
        }),
        n.d(e, "install", function() {
          return y
        }),
        n.d(e, "mapState", function() {
          return _
        }),
        n.d(e, "mapMutations", function() {
          return b
        }),
        n.d(e, "mapGetters", function() {
          return x
        }),
        n.d(e, "mapActions", function() {
          return w
        }),
        n.d(e, "createNamespacedHelpers", function() {
          return M
        })
      /**
       * vuex v3.0.1
       * (c) 2017 Evan You
       * @license MIT
       */
      var r = function(t) {
          if (Number(t.version.split(".")[0]) >= 2) t.mixin({ beforeCreate: n })
          else {
            var e = t.prototype._init
            t.prototype._init = function(t) {
              void 0 === t && (t = {}), (t.init = t.init ? [n].concat(t.init) : n), e.call(this, t)
            }
          }
          function n() {
            var t = this.$options
            t.store
              ? (this.$store = "function" == typeof t.store ? t.store() : t.store)
              : t.parent && t.parent.$store && (this.$store = t.parent.$store)
          }
        },
        i = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
      function a(t, e) {
        Object.keys(t).forEach(function(n) {
          return e(t[n], n)
        })
      }
      var o = function(t, e) {
          ;(this.runtime = e), (this._children = Object.create(null)), (this._rawModule = t)
          var n = t.state
          this.state = ("function" == typeof n ? n() : n) || {}
        },
        s = { namespaced: { configurable: !0 } }
      ;(s.namespaced.get = function() {
        return !!this._rawModule.namespaced
      }),
        (o.prototype.addChild = function(t, e) {
          this._children[t] = e
        }),
        (o.prototype.removeChild = function(t) {
          delete this._children[t]
        }),
        (o.prototype.getChild = function(t) {
          return this._children[t]
        }),
        (o.prototype.update = function(t) {
          ;(this._rawModule.namespaced = t.namespaced),
            t.actions && (this._rawModule.actions = t.actions),
            t.mutations && (this._rawModule.mutations = t.mutations),
            t.getters && (this._rawModule.getters = t.getters)
        }),
        (o.prototype.forEachChild = function(t) {
          a(this._children, t)
        }),
        (o.prototype.forEachGetter = function(t) {
          this._rawModule.getters && a(this._rawModule.getters, t)
        }),
        (o.prototype.forEachAction = function(t) {
          this._rawModule.actions && a(this._rawModule.actions, t)
        }),
        (o.prototype.forEachMutation = function(t) {
          this._rawModule.mutations && a(this._rawModule.mutations, t)
        }),
        Object.defineProperties(o.prototype, s)
      var u = function(t) {
        this.register([], t, !1)
      }
      ;(u.prototype.get = function(t) {
        return t.reduce(function(t, e) {
          return t.getChild(e)
        }, this.root)
      }),
        (u.prototype.getNamespace = function(t) {
          var e = this.root
          return t.reduce(function(t, n) {
            return t + ((e = e.getChild(n)).namespaced ? n + "/" : "")
          }, "")
        }),
        (u.prototype.update = function(t) {
          !(function t(e, n, r) {
            0
            n.update(r)
            if (r.modules)
              for (var i in r.modules) {
                if (!n.getChild(i)) return void 0
                t(e.concat(i), n.getChild(i), r.modules[i])
              }
          })([], this.root, t)
        }),
        (u.prototype.register = function(t, e, n) {
          var r = this
          void 0 === n && (n = !0)
          var i = new o(e, n)
          0 === t.length ? (this.root = i) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i)
          e.modules &&
            a(e.modules, function(e, i) {
              r.register(t.concat(i), e, n)
            })
        }),
        (u.prototype.unregister = function(t) {
          var e = this.get(t.slice(0, -1)),
            n = t[t.length - 1]
          e.getChild(n).runtime && e.removeChild(n)
        })
      var c
      var l = function(t) {
          var e = this
          void 0 === t && (t = {}), !c && "undefined" != typeof window && window.Vue && y(window.Vue)
          var n = t.plugins
          void 0 === n && (n = [])
          var r = t.strict
          void 0 === r && (r = !1)
          var a = t.state
          void 0 === a && (a = {}),
            "function" == typeof a && (a = a() || {}),
            (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new u(t)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._watcherVM = new c())
          var o = this,
            s = this.dispatch,
            l = this.commit
          ;(this.dispatch = function(t, e) {
            return s.call(o, t, e)
          }),
            (this.commit = function(t, e, n) {
              return l.call(o, t, e, n)
            }),
            (this.strict = r),
            v(this, a, [], this._modules.root),
            h(this, a),
            n.forEach(function(t) {
              return t(e)
            }),
            c.config.devtools &&
              (function(t) {
                i &&
                  ((t._devtoolHook = i),
                  i.emit("vuex:init", t),
                  i.on("vuex:travel-to-state", function(e) {
                    t.replaceState(e)
                  }),
                  t.subscribe(function(t, e) {
                    i.emit("vuex:mutation", t, e)
                  }))
              })(this)
        },
        f = { state: { configurable: !0 } }
      function d(t, e) {
        return (
          e.indexOf(t) < 0 && e.push(t),
          function() {
            var n = e.indexOf(t)
            n > -1 && e.splice(n, 1)
          }
        )
      }
      function p(t, e) {
        ;(t._actions = Object.create(null)),
          (t._mutations = Object.create(null)),
          (t._wrappedGetters = Object.create(null)),
          (t._modulesNamespaceMap = Object.create(null))
        var n = t.state
        v(t, n, [], t._modules.root, !0), h(t, n, e)
      }
      function h(t, e, n) {
        var r = t._vm
        t.getters = {}
        var i = {}
        a(t._wrappedGetters, function(e, n) {
          ;(i[n] = function() {
            return e(t)
          }),
            Object.defineProperty(t.getters, n, {
              get: function() {
                return t._vm[n]
              },
              enumerable: !0,
            })
        })
        var o = c.config.silent
        ;(c.config.silent = !0),
          (t._vm = new c({ data: { $$state: e }, computed: i })),
          (c.config.silent = o),
          t.strict &&
            (function(t) {
              t._vm.$watch(
                function() {
                  return this._data.$$state
                },
                function() {
                  0
                },
                { deep: !0, sync: !0 }
              )
            })(t),
          r &&
            (n &&
              t._withCommit(function() {
                r._data.$$state = null
              }),
            c.nextTick(function() {
              return r.$destroy()
            }))
      }
      function v(t, e, n, r, i) {
        var a = !n.length,
          o = t._modules.getNamespace(n)
        if ((r.namespaced && (t._modulesNamespaceMap[o] = r), !a && !i)) {
          var s = m(e, n.slice(0, -1)),
            u = n[n.length - 1]
          t._withCommit(function() {
            c.set(s, u, r.state)
          })
        }
        var l = (r.context = (function(t, e, n) {
          var r = "" === e,
            i = {
              dispatch: r
                ? t.dispatch
                : function(n, r, i) {
                    var a = g(n, r, i),
                      o = a.payload,
                      s = a.options,
                      u = a.type
                    return (s && s.root) || (u = e + u), t.dispatch(u, o)
                  },
              commit: r
                ? t.commit
                : function(n, r, i) {
                    var a = g(n, r, i),
                      o = a.payload,
                      s = a.options,
                      u = a.type
                    ;(s && s.root) || (u = e + u), t.commit(u, o, s)
                  },
            }
          return (
            Object.defineProperties(i, {
              getters: {
                get: r
                  ? function() {
                      return t.getters
                    }
                  : function() {
                      return (function(t, e) {
                        var n = {},
                          r = e.length
                        return (
                          Object.keys(t.getters).forEach(function(i) {
                            if (i.slice(0, r) === e) {
                              var a = i.slice(r)
                              Object.defineProperty(n, a, {
                                get: function() {
                                  return t.getters[i]
                                },
                                enumerable: !0,
                              })
                            }
                          }),
                          n
                        )
                      })(t, e)
                    },
              },
              state: {
                get: function() {
                  return m(t.state, n)
                },
              },
            }),
            i
          )
        })(t, o, n))
        r.forEachMutation(function(e, n) {
          !(function(t, e, n, r) {
            ;(t._mutations[e] || (t._mutations[e] = [])).push(function(e) {
              n.call(t, r.state, e)
            })
          })(t, o + n, e, l)
        }),
          r.forEachAction(function(e, n) {
            var r = e.root ? n : o + n,
              i = e.handler || e
            !(function(t, e, n, r) {
              ;(t._actions[e] || (t._actions[e] = [])).push(function(e, i) {
                var a,
                  o = n.call(
                    t,
                    {
                      dispatch: r.dispatch,
                      commit: r.commit,
                      getters: r.getters,
                      state: r.state,
                      rootGetters: t.getters,
                      rootState: t.state,
                    },
                    e,
                    i
                  )
                return (
                  ((a = o) && "function" == typeof a.then) || (o = Promise.resolve(o)),
                  t._devtoolHook
                    ? o.catch(function(e) {
                        throw (t._devtoolHook.emit("vuex:error", e), e)
                      })
                    : o
                )
              })
            })(t, r, i, l)
          }),
          r.forEachGetter(function(e, n) {
            !(function(t, e, n, r) {
              if (t._wrappedGetters[e]) return void 0
              t._wrappedGetters[e] = function(t) {
                return n(r.state, r.getters, t.state, t.getters)
              }
            })(t, o + n, e, l)
          }),
          r.forEachChild(function(r, a) {
            v(t, e, n.concat(a), r, i)
          })
      }
      function m(t, e) {
        return e.length
          ? e.reduce(function(t, e) {
              return t[e]
            }, t)
          : t
      }
      function g(t, e, n) {
        var r
        return (
          null !== (r = t) && "object" == typeof r && t.type && ((n = e), (e = t), (t = t.type)),
          { type: t, payload: e, options: n }
        )
      }
      function y(t) {
        ;(c && t === c) || r((c = t))
      }
      ;(f.state.get = function() {
        return this._vm._data.$$state
      }),
        (f.state.set = function(t) {
          0
        }),
        (l.prototype.commit = function(t, e, n) {
          var r = this,
            i = g(t, e, n),
            a = i.type,
            o = i.payload,
            s = (i.options, { type: a, payload: o }),
            u = this._mutations[a]
          u &&
            (this._withCommit(function() {
              u.forEach(function(t) {
                t(o)
              })
            }),
            this._subscribers.forEach(function(t) {
              return t(s, r.state)
            }))
        }),
        (l.prototype.dispatch = function(t, e) {
          var n = this,
            r = g(t, e),
            i = r.type,
            a = r.payload,
            o = { type: i, payload: a },
            s = this._actions[i]
          if (s)
            return (
              this._actionSubscribers.forEach(function(t) {
                return t(o, n.state)
              }),
              s.length > 1
                ? Promise.all(
                    s.map(function(t) {
                      return t(a)
                    })
                  )
                : s[0](a)
            )
        }),
        (l.prototype.subscribe = function(t) {
          return d(t, this._subscribers)
        }),
        (l.prototype.subscribeAction = function(t) {
          return d(t, this._actionSubscribers)
        }),
        (l.prototype.watch = function(t, e, n) {
          var r = this
          return this._watcherVM.$watch(
            function() {
              return t(r.state, r.getters)
            },
            e,
            n
          )
        }),
        (l.prototype.replaceState = function(t) {
          var e = this
          this._withCommit(function() {
            e._vm._data.$$state = t
          })
        }),
        (l.prototype.registerModule = function(t, e, n) {
          void 0 === n && (n = {}),
            "string" == typeof t && (t = [t]),
            this._modules.register(t, e),
            v(this, this.state, t, this._modules.get(t), n.preserveState),
            h(this, this.state)
        }),
        (l.prototype.unregisterModule = function(t) {
          var e = this
          "string" == typeof t && (t = [t]),
            this._modules.unregister(t),
            this._withCommit(function() {
              var n = m(e.state, t.slice(0, -1))
              c.delete(n, t[t.length - 1])
            }),
            p(this)
        }),
        (l.prototype.hotUpdate = function(t) {
          this._modules.update(t), p(this, !0)
        }),
        (l.prototype._withCommit = function(t) {
          var e = this._committing
          ;(this._committing = !0), t(), (this._committing = e)
        }),
        Object.defineProperties(l.prototype, f)
      var _ = C(function(t, e) {
          var n = {}
          return (
            O(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              ;(n[r] = function() {
                var e = this.$store.state,
                  n = this.$store.getters
                if (t) {
                  var r = S(this.$store, "mapState", t)
                  if (!r) return
                  ;(e = r.context.state), (n = r.context.getters)
                }
                return "function" == typeof i ? i.call(this, e, n) : e[i]
              }),
                (n[r].vuex = !0)
            }),
            n
          )
        }),
        b = C(function(t, e) {
          var n = {}
          return (
            O(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              n[r] = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
                var r = this.$store.commit
                if (t) {
                  var a = S(this.$store, "mapMutations", t)
                  if (!a) return
                  r = a.context.commit
                }
                return "function" == typeof i ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e))
              }
            }),
            n
          )
        }),
        x = C(function(t, e) {
          var n = {}
          return (
            O(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              ;(i = t + i),
                (n[r] = function() {
                  if (!t || S(this.$store, "mapGetters", t)) return this.$store.getters[i]
                }),
                (n[r].vuex = !0)
            }),
            n
          )
        }),
        w = C(function(t, e) {
          var n = {}
          return (
            O(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              n[r] = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
                var r = this.$store.dispatch
                if (t) {
                  var a = S(this.$store, "mapActions", t)
                  if (!a) return
                  r = a.context.dispatch
                }
                return "function" == typeof i ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e))
              }
            }),
            n
          )
        }),
        M = function(t) {
          return {
            mapState: _.bind(null, t),
            mapGetters: x.bind(null, t),
            mapMutations: b.bind(null, t),
            mapActions: w.bind(null, t),
          }
        }
      function O(t) {
        return Array.isArray(t)
          ? t.map(function(t) {
              return { key: t, val: t }
            })
          : Object.keys(t).map(function(e) {
              return { key: e, val: t[e] }
            })
      }
      function C(t) {
        return function(e, n) {
          return "string" != typeof e ? ((n = e), (e = "")) : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n)
        }
      }
      function S(t, e, n) {
        return t._modulesNamespaceMap[n]
      }
      var j = {
        Store: l,
        install: y,
        version: "3.0.1",
        mapState: _,
        mapMutations: b,
        mapGetters: x,
        mapActions: w,
        createNamespacedHelpers: M,
      }
      e.default = j
    },
    NZDb: function(e, n) {
      e.exports = t
    },
    Nc3I: function(t, e) {},
    NpIQ: function(t, e) {
      e.f = {}.propertyIsEnumerable
    },
    O4g8: function(t, e) {
      t.exports = !0
    },
    OAEE: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("D7Wh"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("I/4/"),
        s = n("XyMi")
      var u = function(t) {
          n("ws2y")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-52395530", null)
      e.default = c.exports
    },
    OBmg: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Index",
          status: "deprecated",
          release: "1.0.0",
          type: "Template",
          metaInfo: { title: "LUX Design System", htmlAttrs: { lang: "en" } },
          props: { type: { type: String, default: "div" } },
        })
    },
    ON07: function(t, e, n) {
      var r = n("EqjI"),
        i = n("7KvD").document,
        a = r(i) && r(i.createElement)
      t.exports = function(t) {
        return a ? i.createElement(t) : {}
      }
    },
    Omkx: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("0bgr"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("/P1r"),
        s = n("XyMi")
      var u = function(t) {
          n("vqp/")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-0538055c", null)
      e.default = c.exports
    },
    OvN9: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("3Orc"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("4k85"),
        s = n("XyMi")
      var u = function(t) {
          n("LbfZ")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-6230551e", null)
      e.default = c.exports
    },
    Pf6I: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o(n("Dd8w")),
        i = n("NYxO"),
        a = o(n("DAYN"))
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      e.default = {
        name: "Gallery",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        components: { draggable: a.default },
        computed: (0, r.default)(
          {
            items: {
              get: function() {
                return this.gallery.items
              },
              set: function(t) {
                this.$store.commit("SORT_ITEMS", t)
              },
            },
          },
          (0, i.mapState)({
            gallery: function(t) {
              return t.gallery
            },
          })
        ),
        props: { galleryItems: { required: !0, type: Array }, cardPixelWidth: { required: !1, default: 300 } },
        methods: {
          deselect: function(t) {
            ;("lux-gallery" !== t.target.className && "lux-gallery lux-galleryWrapper" !== t.target.className) ||
              this.selectNone()
          },
          selectNone: function() {
            this.$store.commit("SELECT", [])
          },
          getItemById: function(t) {
            var e = this.getItemIndexById(t)
            return this.items[e]
          },
          getItemIndexById: function(t) {
            return this.items
              .map(function(t) {
                return t.id
              })
              .indexOf(t)
          },
          hasChanged: function(t) {
            return this.gallery.changeList.indexOf(t) > -1
          },
          isDisabled: function(t) {
            return this.gallery.cut.indexOf(t) > -1
          },
          isSelected: function(t) {
            return this.gallery.selected.indexOf(t) > -1
          },
          select: function(t, e) {
            if (!this.isDisabled(this.getItemById(t))) {
              var n = []
              if (e.metaKey)
                (n = this.gallery.selected).push(this.getItemById(e.target.id)), this.$store.commit("SELECT", n)
              else if (1 === this.gallery.selected.length && e.shiftKey) {
                for (
                  var r = this.getItemIndexById(this.gallery.selected[0].id),
                    i = this.getItemIndexById(e.target.id),
                    a = Math.min(r, i),
                    o = Math.max(r, i),
                    s = a;
                  s <= o;
                  s++
                )
                  n.push(this.items[s])
                this.$store.commit("SELECT", n)
              } else this.$store.commit("SELECT", [this.getItemById(e.target.id)])
            }
          },
        },
        beforeMount: function() {
          this.galleryItems && this.$store.commit("SET_GALLERY", this.galleryItems)
        },
      }
    },
    PzxK: function(t, e, n) {
      var r = n("D2L2"),
        i = n("sB3e"),
        a = n("ax3d")("IE_PROTO"),
        o = Object.prototype
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = i(t)),
            r(t, a)
              ? t[a]
              : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                  ? o
                  : null
          )
        }
    },
    "Q+gQ": function(t, e, n) {
      "use strict"
      var r = o(n("Xxa5")),
        i = o(n("us/S")),
        a = o(n("BO1k"))
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      Object.defineProperty(e, "__esModule", { value: !0 })
      var s = (function() {
          return function(t, e) {
            if (Array.isArray(t)) return t
            if ((0, i.default)(Object(t)))
              return (function(t, e) {
                var n = [],
                  r = !0,
                  i = !1,
                  o = void 0
                try {
                  for (
                    var s, u = (0, a.default)(t);
                    !(r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e);
                    r = !0
                  );
                } catch (t) {
                  ;(i = !0), (o = t)
                } finally {
                  try {
                    !r && u.return && u.return()
                  } finally {
                    if (i) throw o
                  }
                }
                return n
              })(t, e)
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }
        })(),
        u = r.default.mark(l),
        c = {
          name: "page-label-generator",
          version: "1.0.3",
          pageLabelGenerator: r.default.mark(function t() {
            var e,
              n,
              i,
              a,
              o,
              u,
              c,
              l,
              f =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      start: 1,
                      method: "paginate",
                      frontLabel: "",
                      backLabel: "",
                      startWith: "front",
                      unitLabel: "",
                      bracket: !1,
                    }
            return r.default.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      ;(e = this.pageNumberGenerator(f)),
                        (n = this.frontBackLabeler(f)),
                        (i = f.bracket ? ["[", "]"] : ["", ""]),
                        (a = s(i, 2)),
                        (o = a[0]),
                        (u = a[1])
                    case 1:
                      return (
                        (c = e.next().value),
                        (l = n.next().value),
                        (t.next = 5),
                        ("" + o + f.unitLabel + c + l + u).trim()
                      )
                    case 5:
                      t.next = 1
                      break
                    case 7:
                    case "end":
                      return t.stop()
                  }
              },
              t,
              this
            )
          }),
          pageNumberGenerator: r.default.mark(function t() {
            var e,
              n,
              i,
              a,
              o,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { start: 1, method: "paginate", startWith: "front" }
            return r.default.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      ;(e = !1),
                        (n = !1),
                        (i = s.start),
                        (a = !1),
                        (r = s.start),
                        (Number(r) !== r || r % 1 != 0) &&
                          ((e = !0),
                          (n = s.start == s.start.toUpperCase()),
                          s.start.toLowerCase(),
                          (i = this.deromanize(s.start))),
                        "back" == s.startWith && (a = !a)
                    case 3:
                      if (!e) {
                        t.next = 11
                        break
                      }
                      return (o = this.romanize(i)), n && (o = o.toUpperCase()), (t.next = 9), o
                    case 9:
                      t.next = 13
                      break
                    case 11:
                      return (t.next = 13), i
                    case 13:
                      "foliate" == s.method ? (a && i++, (a = !a)) : i++, (t.next = 3)
                      break
                    case 16:
                    case "end":
                      return t.stop()
                  }
                var r
              },
              t,
              this
            )
          }),
          frontBackLabeler: r.default.mark(function t() {
            var e,
              n,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { frontLabel: "", backLabel: "", startWith: "front" }
            return r.default.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      ;(e = [i.frontLabel, i.backLabel]), "back" == i.startWith && e.reverse(), (n = l(e))
                    case 3:
                      return (t.next = 6), n.next().value
                    case 6:
                      t.next = 3
                      break
                    case 8:
                    case "end":
                      return t.stop()
                  }
              },
              t,
              this
            )
          }),
          romanize: function(t) {
            if (!+t) return !1
            for (
              var e = String(+t).split(""),
                n = [
                  "",
                  "c",
                  "cc",
                  "ccc",
                  "cd",
                  "d",
                  "dc",
                  "dcc",
                  "dccc",
                  "cm",
                  "",
                  "x",
                  "xx",
                  "xxx",
                  "xl",
                  "l",
                  "lx",
                  "lxx",
                  "lxxx",
                  "xc",
                  "",
                  "i",
                  "ii",
                  "iii",
                  "iv",
                  "v",
                  "vi",
                  "vii",
                  "viii",
                  "ix",
                ],
                r = "",
                i = 3;
              i--;

            )
              r = (n[+e.pop() + 10 * i] || "") + r
            return Array(+e.join("") + 1).join("m") + r
          },
          deromanize: function(t) {
            var e,
              n = /[mdlv]|c[md]?|x[cl]?|i[xv]?/g,
              r = { m: 1e3, cm: 900, d: 500, cd: 400, c: 100, xc: 90, l: 50, xl: 40, x: 10, ix: 9, v: 5, iv: 4, i: 1 },
              i = 0
            if (!(t = t.toLowerCase()) || !/^m*(?:d?c{0,3}|c[md])(?:l?x{0,3}|x[cl])(?:v?i{0,3}|i[xv])$/.test(t))
              return !1
            for (; (e = n.exec(t)); ) i += r[e[0]]
            return i
          },
        }
      function l(t) {
        var e
        return r.default.wrap(
          function(n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (e = t.shift()), t.push(e), (n.next = 5), e
                case 5:
                  n.next = 0
                  break
                case 7:
                case "end":
                  return n.stop()
              }
          },
          u,
          this
        )
      }
      e.default = c
    },
    QRG4: function(t, e, n) {
      var r = n("UuGF"),
        i = Math.min
      t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
      }
    },
    QUnW: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.element,
            { tag: "component", class: ["lux-dropdown-menu"] },
            [
              n(
                "input-button",
                {
                  staticClass: "lux-dropdown-button",
                  attrs: { variation: "dropdown" },
                  on: {
                    "button-clicked": function(e) {
                      t.buttonClicked(e)
                    },
                  },
                },
                [t._v(t._s(t.buttonLabel))]
              ),
              t._v(" "),
              n("menu-bar", {
                class: { "lux-show": t.isVisible },
                attrs: { type: t.type, active: "All", "menu-items": t.menuItems },
                on: {
                  "menu-item-clicked": function(e) {
                    t.menuItemClicked(e)
                  },
                },
              }),
            ],
            1
          )
        },
        i = []
    },
    Qv8c: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "MenuBar",
          status: "ready",
          release: "1.0.0",
          type: "Pattern",
          model: { prop: "active" },
          props: {
            type: {
              type: String,
              default: "links",
              validator: function(t) {
                return t.match(/(links|buttons)/)
              },
            },
            active: { required: !1, type: String },
            menuItems: { required: !0, type: Array },
          },
          computed: {
            localActive: {
              get: function() {
                return this.active
              },
              set: function(t) {
                this.$emit("input", t)
              },
            },
          },
          methods: {
            menuItemClicked: function(t, e) {
              this.$emit("menu-item-clicked", t)
            },
          },
        })
    },
    Qw7q: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o(n("Dd8w")),
        i = o(n("Q+gQ")),
        a = n("NYxO")
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      e.default = {
        name: "FilesetsForm",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        metaInfo: { title: "Fileset Form", htmlAttrs: { lang: "en" } },
        data: function() {
          return {
            labelerOpts: {
              start: "1",
              method: "paginate",
              frontLabel: "",
              backLabel: "",
              startWith: "front",
              unitLabel: "p. ",
              bracket: !1,
            },
          }
        },
        props: { type: { type: String, default: "div" } },
        computed: (0, r.default)(
          {},
          (0, a.mapState)({
            resource: function(t) {
              return t.ordermanager.resource
            },
            gallery: function(t) {
              return t.gallery
            },
          }),
          {
            isMultiVolume: function() {
              return this.$store.getters.isMultiVolume
            },
            selectedTotal: function() {
              return this.gallery.selected.length
            },
            addBracketOpts: function() {
              return [
                { name: "addBrackets", value: "Add Brackets", id: "addBrackets", checked: this.labelerOpts.bracket },
              ]
            },
            methodOpts: function() {
              return [{ label: "Paginate (Default)", value: "paginate" }, { label: "Foliate", value: "foliate" }]
            },
            startWithOpts: function() {
              return [{ label: "Front (Default)", value: "front" }, { label: "Back", value: "back" }]
            },
          }
        ),
        methods: {
          isNormalInteger: function(t) {
            return /^\+?(0|[1-9]\d*)$/.test(t)
          },
          updateMultiLabels: function() {
            var t = this.gallery.changeList,
              e = this.gallery.items
            this.labelerOpts.start = this.isNormalInteger(this.labelerOpts.start)
              ? this.labelerOpts.start - 0
              : this.labelerOpts.start
            for (var n = i.default.pageLabelGenerator(this.labelerOpts), r = 0; r < this.selectedTotal; r++) {
              ;(e[
                this.gallery.items
                  .map(function(t) {
                    return t.id
                  })
                  .indexOf(this.gallery.selected[r].id)
              ].caption = n.next().value),
                -1 === t.indexOf(this.gallery.selected[r].id) && t.push(this.gallery.selected[r].id)
            }
            this.$store.commit("UPDATE_CHANGES", t), this.$store.commit("UPDATE_ITEMS", e)
          },
        },
      }
    },
    R4wc: function(t, e, n) {
      var r = n("kM2E")
      r(r.S + r.F, "Object", { assign: n("To3L") })
    },
    R9M2: function(t, e) {
      var n = {}.toString
      t.exports = function(t) {
        return n.call(t).slice(8, -1)
      }
    },
    RPLV: function(t, e, n) {
      var r = n("7KvD").document
      t.exports = r && r.documentElement
    },
    RRZH: function(t, e, n) {
      var r = {
        "./Alert.vue": "cwFk",
        "./Card.vue": "Rok3",
        "./Heading.vue": "mNOH",
        "./InputButton.vue": "0x8C",
        "./InputCheckbox.vue": "glyz",
        "./InputRadio.vue": "Y65R",
        "./InputSelect.vue": "WwdZ",
        "./InputText.vue": "llmN",
        "./Loader.vue": "LGc7",
        "./MediaImage.vue": "MxhL",
        "./Spacer.vue": "tWNv",
        "./SvgIcon.vue": "BqMj",
        "./TextStyle.vue": "q4eF",
        "./Wrapper.vue": "OvN9",
        "./_LibraryContactInfo.vue": "FDtV",
        "./_LibraryLogo.vue": "+aRa",
        "./_UniversityAccessibility.vue": "ntx3",
        "./_UniversityCopyright.vue": "cDQl",
        "./_UniversityLogo.vue": "zcyw",
      }
      function i(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(i.keys = function() {
        return Object.keys(r)
      }),
        (i.resolve = a),
        (t.exports = i),
        (i.id = "RRZH")
    },
    "RY/4": function(t, e, n) {
      var r = n("R9M2"),
        i = n("dSzd")("toStringTag"),
        a =
          "Arguments" ==
          r(
            (function() {
              return arguments
            })()
          )
      t.exports = function(t) {
        var e, n, o
        return void 0 === t
          ? "Undefined"
          : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function(t, e) {
                try {
                  return t[e]
                } catch (t) {}
              })((e = Object(t)), i))
              ? n
              : a
                ? r(e)
                : "Object" == (o = r(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : o
      }
    },
    Rok3: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("20/5"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("a+0l"),
        s = n("XyMi")
      var u = function(t) {
          n("oiFQ")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-b2d92710", null)
      e.default = c.exports
    },
    S82l: function(t, e) {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    SU0s: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o(n("Gu7T")),
        i = o(n("Dd8w")),
        a = n("NYxO")
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      e.default = {
        name: "Toolbar",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        props: { type: { type: String, default: "div" } },
        computed: (0, i.default)(
          {},
          (0, a.mapState)({
            resource: function(t) {
              return t.ordermanager.resource
            },
            gallery: function(t) {
              return t.gallery
            },
          }),
          {
            cut: {
              get: function() {
                return this.gallery.cut
              },
            },
          }
        ),
        methods: {
          cutSelected: function() {
            this.$store.commit("CUT", this.gallery.selected), this.selectNone()
          },
          getItemIndexById: function(t) {
            return this.gallery.items
              .map(function(t) {
                return t.id
              })
              .indexOf(t)
          },
          isCutDisabled: function() {
            return !!this.gallery.cut.length
          },
          isPasteDisabled: function() {
            return !(this.gallery.cut.length && this.gallery.selected.length)
          },
          paste: function(t) {
            var e,
              n = this,
              i = this.gallery.items
            i = i.filter(function(t) {
              return !n.gallery.cut.includes(t)
            })
            var a = this.getItemIndexById(this.gallery.selected[this.gallery.selected.length - 1].id) + t
            ;(e = i).splice.apply(e, [a, 0].concat((0, r.default)(this.gallery.cut))),
              this.$store.commit("PASTE", i),
              this.resetCut(),
              this.selectNone()
          },
          resetCut: function() {
            this.$store.commit("CUT", [])
          },
          resizeCards: function(t) {
            this.$emit("cards-resized", t)
          },
          menuSelection: function(t) {
            switch (t.target.innerText) {
              case "All":
                this.selectAll()
                break
              case "None":
                this.selectNone()
                break
              case "Alternate":
                this.selectAlternate()
                break
              case "Inverse":
                this.selectInverse()
                break
              case "Cut":
                this.cutSelected()
                break
              case "Paste Before":
                this.paste(-1)
                break
              case "Paste After":
                this.paste(1)
            }
          },
          selectAll: function() {
            this.$store.commit("SELECT", this.gallery.items)
          },
          selectAlternate: function() {
            for (var t = [], e = this.gallery.items.length, n = 0; n < e; n += 2) t.push(this.gallery.items[n])
            this.$store.commit("SELECT", t)
          },
          selectInverse: function() {
            for (var t = [], e = this.gallery.items.length, n = 1; n < e; n += 2) t.push(this.gallery.items[n])
            this.$store.commit("SELECT", t)
          },
          selectNone: function() {
            this.$store.commit("SELECT", [])
          },
        },
      }
    },
    SfB7: function(t, e, n) {
      t.exports =
        !n("+E39") &&
        !n("S82l")(function() {
          return (
            7 !=
            Object.defineProperty(n("ON07")("div"), "a", {
              get: function() {
                return 7
              },
            }).a
          )
        })
    },
    SldL: function(t, e) {
      !(function(e) {
        "use strict"
        var n,
          r = Object.prototype,
          i = r.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag",
          c = "object" == typeof t,
          l = e.regeneratorRuntime
        if (l) c && (t.exports = l)
        else {
          ;(l = e.regeneratorRuntime = c ? t.exports : {}).wrap = b
          var f = "suspendedStart",
            d = "suspendedYield",
            p = "executing",
            h = "completed",
            v = {},
            m = {}
          m[o] = function() {
            return this
          }
          var g = Object.getPrototypeOf,
            y = g && g(g(k([])))
          y && y !== r && i.call(y, o) && (m = y)
          var _ = (O.prototype = w.prototype = Object.create(m))
          ;(M.prototype = _.constructor = O),
            (O.constructor = M),
            (O[u] = M.displayName = "GeneratorFunction"),
            (l.isGeneratorFunction = function(t) {
              var e = "function" == typeof t && t.constructor
              return !!e && (e === M || "GeneratorFunction" === (e.displayName || e.name))
            }),
            (l.mark = function(t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, O)
                  : ((t.__proto__ = O), u in t || (t[u] = "GeneratorFunction")),
                (t.prototype = Object.create(_)),
                t
              )
            }),
            (l.awrap = function(t) {
              return { __await: t }
            }),
            C(S.prototype),
            (S.prototype[s] = function() {
              return this
            }),
            (l.AsyncIterator = S),
            (l.async = function(t, e, n, r) {
              var i = new S(b(t, e, n, r))
              return l.isGeneratorFunction(e)
                ? i
                : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                  })
            }),
            C(_),
            (_[u] = "Generator"),
            (_[o] = function() {
              return this
            }),
            (_.toString = function() {
              return "[object Generator]"
            }),
            (l.keys = function(t) {
              var e = []
              for (var n in t) e.push(n)
              return (
                e.reverse(),
                function n() {
                  for (; e.length; ) {
                    var r = e.pop()
                    if (r in t) return (n.value = r), (n.done = !1), n
                  }
                  return (n.done = !0), n
                }
              )
            }),
            (l.values = k),
            (T.prototype = {
              constructor: T,
              reset: function(t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = n),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = n),
                  this.tryEntries.forEach(L),
                  !t)
                )
                  for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
              },
              stop: function() {
                this.done = !0
                var t = this.tryEntries[0].completion
                if ("throw" === t.type) throw t.arg
                return this.rval
              },
              dispatchException: function(t) {
                if (this.done) throw t
                var e = this
                function r(r, i) {
                  return (s.type = "throw"), (s.arg = t), (e.next = r), i && ((e.method = "next"), (e.arg = n)), !!i
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var o = this.tryEntries[a],
                    s = o.completion
                  if ("root" === o.tryLoc) return r("end")
                  if (o.tryLoc <= this.prev) {
                    var u = i.call(o, "catchLoc"),
                      c = i.call(o, "finallyLoc")
                    if (u && c) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                    } else if (u) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                    } else {
                      if (!c) throw new Error("try statement without catch or finally")
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n]
                  if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var a = r
                    break
                  }
                }
                a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null)
                var o = a ? a.completion : {}
                return (
                  (o.type = t),
                  (o.arg = e),
                  a ? ((this.method = "next"), (this.next = a.finallyLoc), v) : this.complete(o)
                )
              },
              complete: function(t, e) {
                if ("throw" === t.type) throw t.arg
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  v
                )
              },
              finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e]
                  if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v
                }
              },
              catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e]
                  if (n.tryLoc === t) {
                    var r = n.completion
                    if ("throw" === r.type) {
                      var i = r.arg
                      L(n)
                    }
                    return i
                  }
                }
                throw new Error("illegal catch attempt")
              },
              delegateYield: function(t, e, r) {
                return (
                  (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                  "next" === this.method && (this.arg = n),
                  v
                )
              },
            })
        }
        function b(t, e, n, r) {
          var i = e && e.prototype instanceof w ? e : w,
            a = Object.create(i.prototype),
            o = new T(r || [])
          return (
            (a._invoke = (function(t, e, n) {
              var r = f
              return function(i, a) {
                if (r === p) throw new Error("Generator is already running")
                if (r === h) {
                  if ("throw" === i) throw a
                  return A()
                }
                for (n.method = i, n.arg = a; ; ) {
                  var o = n.delegate
                  if (o) {
                    var s = j(o, n)
                    if (s) {
                      if (s === v) continue
                      return s
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg
                  else if ("throw" === n.method) {
                    if (r === f) throw ((r = h), n.arg)
                    n.dispatchException(n.arg)
                  } else "return" === n.method && n.abrupt("return", n.arg)
                  r = p
                  var u = x(t, e, n)
                  if ("normal" === u.type) {
                    if (((r = n.done ? h : d), u.arg === v)) continue
                    return { value: u.arg, done: n.done }
                  }
                  "throw" === u.type && ((r = h), (n.method = "throw"), (n.arg = u.arg))
                }
              }
            })(t, n, o)),
            a
          )
        }
        function x(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) }
          } catch (t) {
            return { type: "throw", arg: t }
          }
        }
        function w() {}
        function M() {}
        function O() {}
        function C(t) {
          ;["next", "throw", "return"].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t)
            }
          })
        }
        function S(t) {
          var e
          this._invoke = function(n, r) {
            function a() {
              return new Promise(function(e, a) {
                !(function e(n, r, a, o) {
                  var s = x(t[n], t, r)
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      c = u.value
                    return c && "object" == typeof c && i.call(c, "__await")
                      ? Promise.resolve(c.__await).then(
                          function(t) {
                            e("next", t, a, o)
                          },
                          function(t) {
                            e("throw", t, a, o)
                          }
                        )
                      : Promise.resolve(c).then(function(t) {
                          ;(u.value = t), a(u)
                        }, o)
                  }
                  o(s.arg)
                })(n, r, e, a)
              })
            }
            return (e = e ? e.then(a, a) : a())
          }
        }
        function j(t, e) {
          var r = t.iterator[e.method]
          if (r === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (t.iterator.return && ((e.method = "return"), (e.arg = n), j(t, e), "throw" === e.method)) return v
              ;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
            }
            return v
          }
          var i = x(r, t.iterator, e.arg)
          if ("throw" === i.type) return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), v
          var a = i.arg
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = n)),
                (e.delegate = null),
                v)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              v)
        }
        function E(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e)
        }
        function L(t) {
          var e = t.completion || {}
          ;(e.type = "normal"), delete e.arg, (t.completion = e)
        }
        function T(t) {
          ;(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(E, this), this.reset(!0)
        }
        function k(t) {
          if (t) {
            var e = t[o]
            if (e) return e.call(t)
            if ("function" == typeof t.next) return t
            if (!isNaN(t.length)) {
              var r = -1,
                a = function e() {
                  for (; ++r < t.length; ) if (i.call(t, r)) return (e.value = t[r]), (e.done = !1), e
                  return (e.value = n), (e.done = !0), e
                }
              return (a.next = a)
            }
          }
          return { next: A }
        }
        function A() {
          return { value: n, done: !0 }
        }
      })(
        (function() {
          return this
        })() || Function("return this")()
      )
    },
    Spmz: function(t, e) {},
    SvgA: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(this.type, { tag: "component", staticClass: "lux-university-logo" }, [
            e(
              "a",
              { attrs: { href: "https://princeton.edu" } },
              [
                e("svg-icon", {
                  attrs: { name: "logo-university", ariaLabel: "Princeton University", width: "142px", height: "40px" },
                }),
              ],
              1
            ),
          ])
        },
        i = []
    },
    T1NB: function(t, e) {},
    TcQ7: function(t, e, n) {
      var r = n("MU5D"),
        i = n("52gC")
      t.exports = function(t) {
        return r(i(t))
      }
    },
    TlZv: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.wrapper, { tag: "component", staticClass: "lux-input" }, [
            t.label ? n("label", [t._v(t._s(t.label))]) : t._e(),
            t._v(" "),
            n("input", {
              class: ["lux-input", { "lux-input-error": t.hasError }, { "lux-input-expand": "expand" === t.width }],
              attrs: {
                id: t.id,
                disabled: t.disabled,
                type: t.type,
                hover: t.hover,
                focus: t.focus,
                placeholder: t.placeholder,
                errormessage: t.errormessage,
              },
              domProps: { value: t.value },
              on: {
                input: function(e) {
                  t.$emit("input", e.target.value)
                },
                blur: function(e) {
                  t.inputblur(e.target)
                },
              },
            }),
            t._v(" "),
            t.errormessage
              ? n("div", { staticClass: "lux-error", attrs: { role: "alert" } }, [t._v(t._s(t.errormessage))])
              : t._e(),
          ])
        },
        i = []
    },
    To3L: function(t, e, n) {
      "use strict"
      var r = n("lktj"),
        i = n("1kS7"),
        a = n("NpIQ"),
        o = n("sB3e"),
        s = n("MU5D"),
        u = Object.assign
      t.exports =
        !u ||
        n("S82l")(function() {
          var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst"
          return (
            (t[n] = 7),
            r.split("").forEach(function(t) {
              e[t] = t
            }),
            7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
          )
        })
          ? function(t, e) {
              for (var n = o(t), u = arguments.length, c = 1, l = i.f, f = a.f; u > c; )
                for (var d, p = s(arguments[c++]), h = l ? r(p).concat(l(p)) : r(p), v = h.length, m = 0; v > m; )
                  f.call(p, (d = h[m++])) && (n[d] = p[d])
              return n
            }
          : u
    },
    Tx1s: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement
          return (this._self._c || t)(
            this.level,
            { tag: "component", staticClass: "lux-heading", class: { "lux-hidden": this.hidden } },
            [this._t("default")],
            2
          )
        },
        i = []
    },
    U5ju: function(t, e, n) {
      n("M6a0"), n("zQR9"), n("+tPU"), n("CXw9"), n("EqBC"), n("jKW+"), (t.exports = n("FeBl").Promise)
    },
    UFRR: function(t, e, n) {
      var r = { "./deprecated.svg": "XPAO", "./prototype.svg": "Wsdk", "./ready.svg": "hRew", "./review.svg": "wJix" }
      function i(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(i.keys = function() {
        return Object.keys(r)
      }),
        (i.resolve = a),
        (t.exports = i),
        (i.id = "UFRR")
    },
    UJ0i: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "draggable",
            {
              staticClass: "lux-gallery",
              attrs: { tag: "div" },
              nativeOn: {
                click: function(e) {
                  t.deselect(e)
                },
              },
              model: {
                value: t.items,
                callback: function(e) {
                  t.items = e
                },
                expression: "items",
              },
            },
            t._l(t.items, function(e, r) {
              return n(
                "card",
                {
                  key: e.id,
                  staticClass: "lux-galleryCard",
                  attrs: {
                    id: e.id,
                    cardPixelWidth: t.cardPixelWidth,
                    size: "medium",
                    selected: t.isSelected(e),
                    disabled: t.isDisabled(e),
                    edited: t.hasChanged(e.id),
                  },
                  on: {
                    "card-click": function(n) {
                      t.select(e.id, n)
                    },
                  },
                },
                [
                  n("media-image", { attrs: { src: e.mediaUrl } }),
                  t._v(" "),
                  n("heading", { attrs: { level: "h2" } }, [t._v(t._s(e.title))]),
                  t._v(" "),
                  n("text-style", { attrs: { variation: "default" } }, [t._v(t._s(e.caption))]),
                ],
                1
              )
            })
          )
        },
        i = []
    },
    UZP0: function(t, e) {},
    UuGF: function(t, e) {
      var n = Math.ceil,
        r = Math.floor
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t)
      }
    },
    UuZx: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("5G88"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("tvhW"),
        s = n("XyMi")
      var u = function(t) {
          n("53Z2")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-528b330f", null)
      e.default = c.exports
    },
    UvrK: function(t, e, n) {
      var r = n("kM2E")
      r(r.P + r.R, "Map", { toJSON: n("m9gC")("Map") })
    },
    V3tA: function(t, e, n) {
      n("R4wc"), (t.exports = n("FeBl").Object.assign)
    },
    VGud: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r,
        i = n("7+uW"),
        a = (r = i) && r.__esModule ? r : { default: r }
      e.default = new a.default()
    },
    VgCZ: function(t, e) {},
    W2nU: function(t, e) {
      var n,
        r,
        i = (t.exports = {})
      function a() {
        throw new Error("setTimeout has not been defined")
      }
      function o() {
        throw new Error("clearTimeout has not been defined")
      }
      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0)
        if ((n === a || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0)
        try {
          return n(t, 0)
        } catch (e) {
          try {
            return n.call(null, t, 0)
          } catch (e) {
            return n.call(this, t, 0)
          }
        }
      }
      !(function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : a
        } catch (t) {
          n = a
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
          r = o
        }
      })()
      var u,
        c = [],
        l = !1,
        f = -1
      function d() {
        l && u && ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && p())
      }
      function p() {
        if (!l) {
          var t = s(d)
          l = !0
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++f < e; ) u && u[f].run()
            ;(f = -1), (e = c.length)
          }
          ;(u = null),
            (l = !1),
            (function(t) {
              if (r === clearTimeout) return clearTimeout(t)
              if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t)
              try {
                r(t)
              } catch (e) {
                try {
                  return r.call(null, t)
                } catch (e) {
                  return r.call(this, t)
                }
              }
            })(t)
        }
      }
      function h(t, e) {
        ;(this.fun = t), (this.array = e)
      }
      function v() {}
      ;(i.nextTick = function(t) {
        var e = new Array(arguments.length - 1)
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        c.push(new h(t, e)), 1 !== c.length || l || s(p)
      }),
        (h.prototype.run = function() {
          this.fun.apply(null, this.array)
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = v),
        (i.addListener = v),
        (i.once = v),
        (i.off = v),
        (i.removeListener = v),
        (i.removeAllListeners = v),
        (i.emit = v),
        (i.prependListener = v),
        (i.prependOnceListener = v),
        (i.listeners = function(t) {
          return []
        }),
        (i.binding = function(t) {
          throw new Error("process.binding is not supported")
        }),
        (i.cwd = function() {
          return "/"
        }),
        (i.chdir = function(t) {
          throw new Error("process.chdir is not supported")
        }),
        (i.umask = function() {
          return 0
        })
    },
    W660: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "TextStyle",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: {
            type: { type: String, default: "p" },
            variation: {
              type: String,
              default: "default",
              validator: function(t) {
                return t.match(/(default|disabled|strong|emphasis|positive|negative)/)
              },
            },
          },
        })
    },
    W9Qa: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("eIs/"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("DNZ4"),
        s = n("XyMi")
      var u = function(t) {
          n("1lbN")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-4b7a59de", null)
      e.default = c.exports
    },
    WN1n: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "UniversityLogo",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { type: { type: String, default: "div" } },
        })
    },
    Wsdk: function(t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDAwIDQ4MEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWODBjMC0yNi41IDIxLjUtNDggNDgtNDhoMzUyYzI2LjUgMCA0OCAyMS41IDQ4IDQ4djM1MmMwIDI2LjUtMjEuNSA0OC00OCA0OHpNMjM4LjEgMTc3LjlMMTAyLjQgMzEzLjZsLTYuMyA1Ny4xYy0uOCA3LjYgNS42IDE0LjEgMTMuMyAxMy4zbDU3LjEtNi4zTDMwMi4yIDI0MmMyLjMtMi4zIDIuMy02LjEgMC04LjVMMjQ2LjcgMTc4Yy0yLjUtMi40LTYuMy0yLjQtOC42LS4xek0zNDUgMTY1LjFMMzE0LjkgMTM1Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMGwtMjMuMSAyMy4xYy0yLjMgMi4zLTIuMyA2LjEgMCA4LjVsNTUuNSA1NS41YzIuMyAyLjMgNi4xIDIuMyA4LjUgMEwzNDUgMTk5YzkuMy05LjMgOS4zLTI0LjUgMC0zMy45eiIvPjwvc3ZnPg=="
    },
    WwdZ: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("7qip"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("CFc8"),
        s = n("XyMi")
      var u = function(t) {
          n("Nc3I")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-1759b27e", null)
      e.default = c.exports
    },
    X8DO: function(t, e) {
      t.exports = function(t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
      }
    },
    XPAO: function(t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDk3LjkgMTUwLjVjOSA5IDE0LjEgMjEuMiAxNC4xIDMzLjl2MTQzLjFjMCAxMi43LTUuMSAyNC45LTE0LjEgMzMuOUwzNjEuNSA0OTcuOWMtOSA5LTIxLjIgMTQuMS0zMy45IDE0LjFIMTg0LjVjLTEyLjcgMC0yNC45LTUuMS0zMy45LTE0LjFMMTQuMSAzNjEuNWMtOS05LTE0LjEtMjEuMi0xNC4xLTMzLjlWMTg0LjVjMC0xMi43IDUuMS0yNC45IDE0LjEtMzMuOUwxNTAuNSAxNC4xYzktOSAyMS4yLTE0LjEgMzMuOS0xNC4xaDE0My4xYzEyLjcgMCAyNC45IDUuMSAzMy45IDE0LjFsMTM2LjUgMTM2LjR6TTM3Ny42IDMzOGM0LjctNC43IDQuNy0xMi4zIDAtMTdsLTY1LTY1IDY1LjEtNjUuMWM0LjctNC43IDQuNy0xMi4zIDAtMTdMMzM4IDEzNC40Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTY1IDY1LTY1LjEtNjUuMWMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDEzNC40IDE3NGMtNC43IDQuNy00LjcgMTIuMyAwIDE3bDY1LjEgNjUuMS02NS4xIDY1LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wzOS42IDM5LjZjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDY1LjEtNjUuMSA2NS4xIDY1LjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDM5LjQtMzkuOHoiLz48L3N2Zz4="
    },
    XTLC: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o(n("Dd8w")),
        i = o(n("NZDb")),
        a = n("NYxO")
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      e.default = {
        name: "Controls",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        metaInfo: { title: "OrderManager Controls", htmlAttrs: { lang: "en" } },
        data: function() {
          return { viewer: null, osdId: this.viewerId }
        },
        computed: (0, r.default)(
          {},
          (0, a.mapState)({
            resource: function(t) {
              return t.ordermanager.resource
            },
            gallery: function(t) {
              return t.gallery
            },
          }),
          {
            editLink: function() {
              var t = ""
              return this.hidden || (t = "/catalog/parent/" + this.resource.id + "/" + this.gallery.selected[0].id), t
            },
            isMultiVolume: function() {
              return this.resource.isMultiVolume
            },
            isDisabled: function() {
              return !this.$store.getters.stateChanged
            },
            orderChanged: function() {
              return this.$store.getters.orderChanged
            },
            payloadFileset: function() {
              var t = this
              return this.gallery.items
                .filter(function(e) {
                  return -1 !== t.gallery.changeList.indexOf(e.id)
                })
                .map(function(t) {
                  return { id: t.id, title: t.title, page_type: t.viewingHint }
                })
            },
            payloadVolume: function() {
              var t = this
              return this.gallery.items
                .filter(function(e) {
                  return -1 !== t.gallery.changeList.indexOf(e.id)
                })
                .map(function(t) {
                  return { id: t.id, title: t.title }
                })
            },
            resourceClassName: function() {
              return this.resource.resourceClassName
            },
            selectedTotal: function() {
              return this.gallery.selected.length
            },
          }
        ),
        props: { type: { type: String, default: "div" }, viewerId: { type: String, default: "viewer" } },
        methods: {
          initOSD: function() {
            this.viewer && (this.viewer.destroy(), (this.viewer = null)),
              (this.viewer = (0, i.default)({
                id: this.osdId,
                showNavigationControl: !1,
                tileSources: [this.gallery.selected[0].service + "/info.json"],
              }))
          },
          hidden: function() {
            return 1 != this.selectedTotal
          },
          galleryToFileset: function(t) {
            var e = this
            return t
              .filter(function(t) {
                return e.gallery.changeList.indexOf(t.id) > -1
              })
              .map(function(t) {
                return { id: t.id, label: t.caption, viewingHint: t.viewingHint }
              })
          },
          galleryToResource: function(t) {
            return t.map(function(t) {
              return t.id
            })
          },
          saveHandler: function(t) {
            this.isMultiVolume ? this.saveMVW() : this.save()
          },
          save: function() {
            var t = {}
            ;(t.body = {
              id: this.resource.id,
              viewingDirection: this.resource.viewingDirection
                ? this.resource.viewingDirection.replace(/-/g, "").toUpperCase()
                : this.resource.viewingDirection,
              viewingHint: this.resource.viewingHint,
              startPage: this.resource.startCanvas,
              thumbnailId: this.resource.thumbnail,
              memberIds: this.galleryToResource(this.gallery.items),
            }),
              (t.filesets = [])
            for (var e = this.galleryToFileset(this.gallery.items), n = e.length, r = 0; r < n; r++)
              t.filesets.push(e[r])
            ;(window.resource = t), this.$store.dispatch("saveStateGql", t)
          },
          saveMVW: function() {
            var t = { resource: {}, volumes: this.payloadVolume }
            ;(t.resource[this.resourceClassName] = {
              member_ids: this.imageIdList,
              viewing_direction: this.viewingDirection,
              thumbnail_id: this.thumbnail,
              id: this.id,
            }),
              this.$store.dispatch("saveState", t)
          },
        },
        updated: function() {
          1 === this.selectedTotal && this.initOSD()
        },
      }
    },
    XYtv: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("NCqp"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("vtcx"),
        s = n("XyMi")
      var u = function(t) {
          n("UZP0")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-687aad23", null)
      e.default = c.exports
    },
    XbSq: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Alert",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          metaInfo: { title: "Global alert message to user.", htmlAttrs: { lang: "en" } },
          data: function() {
            return { alertMessage: "Something happened, but we're not sure what.", show: !0 }
          },
          computed: {
            isSuccess: function() {
              return "success" === this.status
            },
            isInfo: function() {
              return "info" === this.status
            },
            isWarning: function() {
              return "warning" === this.status
            },
            isError: function() {
              return "error" === this.status
            },
            isFullScreen: function() {
              return "alert" === this.type
            },
          },
          props: {
            type: {
              type: String,
              default: "indicator",
              validator: function(t) {
                return t.match(/(alert|indicator)/)
              },
            },
            status: {
              type: String,
              default: "info",
              validator: function(t) {
                return t.match(/(info|warning|success|errror)/)
              },
            },
            autoclear: { type: Boolean, default: !1 },
            dismissible: { type: Boolean, default: !1 },
          },
          methods: {
            hideAlert: function() {
              this.show = !1
            },
          },
          mounted: function() {
            var t = this
            this.autoclear &&
              setTimeout(function() {
                t.show = !1
              }, 2e3)
          },
        })
    },
    XcST: function(t, e, n) {
      var r = {
        "./DropdownMenu.vue": "oEh9",
        "./Gallery.vue": "yC+7",
        "./LibraryFooter.vue": "2oSY",
        "./LibraryHeader.vue": "OAEE",
        "./LoginForm.vue": "W9Qa",
        "./MenuBar.vue": "l28G",
        "./OrderManager.vue": "MhlZ",
        "./OrderManagerFilesetForm.vue": "gR9U",
        "./_OrderManagerControls.vue": "FvBc",
        "./_OrderManagerFilesetsForm.vue": "nFgL",
        "./_OrderManagerResourceForm.vue": "UuZx",
        "./_OrderManagerToolbar.vue": "rDba",
      }
      function i(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(i.keys = function() {
        return Object.keys(r)
      }),
        (i.resolve = a),
        (t.exports = i),
        (i.id = "XcST")
    },
    Xd32: function(t, e, n) {
      n("+tPU"), n("zQR9"), (t.exports = n("5PlU"))
    },
    Xjd4: function(t, e, n) {
      n("9Bbf")("Map")
    },
    Xxa5: function(t, e, n) {
      t.exports = n("jyFz")
    },
    XyMi: function(t, e, n) {
      "use strict"
      e.a = function(t, e, n, r, i, a, o, s) {
        var u = typeof (t = t || {}).default
        ;("object" !== u && "function" !== u) || (t = t.default)
        var c,
          l = "function" == typeof t ? t.options : t
        e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0))
        r && (l.functional = !0)
        a && (l._scopeId = a)
        o
          ? ((c = function(t) {
              ;(t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(o)
            }),
            (l._ssrRegister = c))
          : i &&
            (c = s
              ? function() {
                  i.call(this, this.$root.$options.shadowRoot)
                }
              : i)
        if (c)
          if (l.functional) {
            l._injectStyles = c
            var f = l.render
            l.render = function(t, e) {
              return c.call(e), f(t, e)
            }
          } else {
            var d = l.beforeCreate
            l.beforeCreate = d ? [].concat(d, c) : [c]
          }
        return { exports: t, options: l }
      }
    },
    Y65R: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("F9gj"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("p0n1"),
        s = n("XyMi")
      var u = function(t) {
          n("vzB6")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-998f42d6", null)
      e.default = c.exports
    },
    Yobk: function(t, e, n) {
      var r = n("77Pl"),
        i = n("qio6"),
        a = n("xnc9"),
        o = n("ax3d")("IE_PROTO"),
        s = function() {},
        u = function() {
          var t,
            e = n("ON07")("iframe"),
            r = a.length
          for (
            e.style.display = "none",
              n("RPLV").appendChild(e),
              e.src = "javascript:",
              (t = e.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              u = t.F;
            r--;

          )
            delete u.prototype[a[r]]
          return u()
        }
      t.exports =
        Object.create ||
        function(t, e) {
          var n
          return (
            null !== t ? ((s.prototype = r(t)), (n = new s()), (s.prototype = null), (n[o] = t)) : (n = u()),
            void 0 === e ? n : i(n, e)
          )
        }
    },
    "a+0l": function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement
          return (t._self._c || e)(
            "article",
            {
              staticClass: "lux-card",
              class: [
                { "lux-card-selected": t.selected },
                { "lux-card-edited": t.edited },
                { "lux-card-disabled": t.disabled },
              ],
              style: { "max-width": t.cardPixelWidth + "px" },
              attrs: { id: t.id },
              on: {
                "!click": function(e) {
                  t.select(e)
                },
              },
            },
            [t._t("default")],
            2
          )
        },
        i = []
    },
    aP67: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "Loader",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: {
            size: {
              type: String,
              default: "medium",
              validator: function(t) {
                return t.match(/(x-small|small|medium|large|x-large)/)
              },
            },
            fullscreen: { type: Boolean, default: !1 },
            wrapper: {
              type: String,
              default: "div",
              validator: function(t) {
                return t.match(/(div|span)/)
              },
            },
          },
        })
    },
    amnQ: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("dYsq"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("xAlM"),
        s = n("XyMi")
      var u = function(t) {
          n("VgCZ")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-c9267a46", null)
      e.default = c.exports
    },
    ax3d: function(t, e, n) {
      var r = n("e8AB")("keys"),
        i = n("3Eo+")
      t.exports = function(t) {
        return r[t] || (r[t] = i(t))
      }
    },
    "aza+": function(t, e) {},
    b9ns: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: t.width,
                height: t.height,
                viewBox: "0 0 24 24",
                "aria-labelledby": t.iconName,
                role: "img",
              },
            },
            [
              n("title", { attrs: { id: t.iconName, lang: "en" } }, [t._v(t._s(t.iconName) + " icon")]),
              t._v(" "),
              n("g", { attrs: { fill: t.iconColor } }, [t._t("default")], 2),
            ]
          )
        },
        i = []
    },
    bRrM: function(t, e, n) {
      "use strict"
      var r = n("7KvD"),
        i = n("FeBl"),
        a = n("evD5"),
        o = n("+E39"),
        s = n("dSzd")("species")
      t.exports = function(t) {
        var e = "function" == typeof i[t] ? i[t] : r[t]
        o &&
          e &&
          !e[s] &&
          a.f(e, s, {
            configurable: !0,
            get: function() {
              return this
            },
          })
      }
    },
    bqnK: function(t, e, n) {
      n("HpRW")("Map")
    },
    "c/Tr": function(t, e, n) {
      t.exports = { default: n("5zde"), __esModule: !0 }
    },
    cDQl: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("A/nf"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("1Jhj"),
        s = n("XyMi")
      var u = function(t) {
          n("7Wnp")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-fbd0a384", null)
      e.default = c.exports
    },
    cNSj: function(t, e) {},
    cRPg: function(t, e) {},
    cdCv: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.instance = e.modules = void 0), n("MU8w")
      var r = a(n("VGud")),
        i = a(n("rh7Y"))
      a(n("DFfR"))
      function a(t) {
        return t && t.__esModule ? t : { default: t }
      }
      e.modules = i.default
      var o = []
      ;[n("RRZH"), n("XcST"), n("FJKp"), n("vgJI"), n("7u11")].forEach(function(t) {
        t.keys().forEach(function(e) {
          return o.push(t(e).default)
        })
      }),
        (e.default = {
          install: function(t) {
            o.forEach(function(e) {
              return t.component(e.name, e)
            })
          },
        }),
        (e.instance = r.default)
    },
    cwFk: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("XbSq"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("/zfu"),
        s = n("XyMi")
      var u = function(t) {
          n("cNSj")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-70d01e59", null)
      e.default = c.exports
    },
    dNDb: function(t, e) {
      t.exports = function(t) {
        try {
          return { e: !1, v: t() }
        } catch (t) {
          return { e: !0, v: t }
        }
      }
    },
    dP2J: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement
          return (this._self._c || t)(
            this.type,
            { tag: "component", class: ["lux-text-style ", this.variation] },
            [this._t("default")],
            2
          )
        },
        i = []
    },
    dSzd: function(t, e, n) {
      var r = n("e8AB")("wks"),
        i = n("3Eo+"),
        a = n("7KvD").Symbol,
        o = "function" == typeof a
      ;(t.exports = function(t) {
        return r[t] || (r[t] = (o && a[t]) || (o ? a : i)("Symbol." + t))
      }).store = r
    },
    dY0y: function(t, e, n) {
      var r = n("dSzd")("iterator"),
        i = !1
      try {
        var a = [7][r]()
        ;(a.return = function() {
          i = !0
        }),
          Array.from(a, function() {
            throw 2
          })
      } catch (t) {}
      t.exports = function(t, e) {
        if (!e && !i) return !1
        var n = !1
        try {
          var a = [7],
            o = a[r]()
          ;(o.next = function() {
            return { done: (n = !0) }
          }),
            (a[r] = function() {
              return o
            }),
            t(a)
        } catch (t) {}
        return n
      }
    },
    dYsq: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LogoFacebook",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { width: { type: [Number, String], default: 24 }, height: { type: [Number, String], default: 24 } },
        })
    },
    drZW: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("v920"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("GPm3"),
        s = n("XyMi")
      var u = function(t) {
          n("J3kh")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-a5916c76", null)
      e.default = c.exports
    },
    e6n0: function(t, e, n) {
      var r = n("evD5").f,
        i = n("D2L2"),
        a = n("dSzd")("toStringTag")
      t.exports = function(t, e, n) {
        t && !i((t = n ? t : t.prototype), a) && r(t, a, { configurable: !0, value: e })
      }
    },
    e8AB: function(t, e, n) {
      var r = n("7KvD"),
        i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {})
      t.exports = function(t) {
        return i[t] || (i[t] = {})
      }
    },
    "eIs/": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LoginForm",
          status: "prototype",
          release: "1.0.0",
          type: "Pattern",
          metaInfo: { title: "Form with validation", htmlAttrs: { lang: "en" } },
          data: function() {
            return {
              errormessageEmail: "",
              errormessagePwd: "",
              emailValue: "",
              pwdValue: "",
              alert: !1,
              alertStatus: "info",
              alertMessage: "Testing",
            }
          },
          methods: {
            validate: function(t) {
              "email" == t.id &&
                ((this.emailValue = t.value),
                /(.+)@(.+){2,}\.(.+){2,}/.test(t.value)
                  ? (this.errormessageEmail = "")
                  : (this.errormessageEmail = "You need to supply an email.")),
                "pwd" == t.id &&
                  ((this.pwdValue = t.value),
                  t.value.length
                    ? (this.errormessagePwd = "")
                    : (this.errormessagePwd = "You need to supply a password."))
            },
            showAlert: function(t) {
              ;(this.alertMessage = t.alertMessage), (this.alertStatus = t.alertStatus), (this.alert = !0)
            },
          },
        })
    },
    eb02: function(t, e) {},
    evD5: function(t, e, n) {
      var r = n("77Pl"),
        i = n("SfB7"),
        a = n("MmMw"),
        o = Object.defineProperty
      e.f = n("+E39")
        ? Object.defineProperty
        : function(t, e, n) {
            if ((r(t), (e = a(e, !0)), r(n), i))
              try {
                return o(t, e, n)
              } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!")
            return "value" in n && (t[e] = n.value), t
          }
    },
    exGp: function(t, e, n) {
      "use strict"
      e.__esModule = !0
      var r,
        i = n("//Fk"),
        a = (r = i) && r.__esModule ? r : { default: r }
      e.default = function(t) {
        return function() {
          var e = t.apply(this, arguments)
          return new a.default(function(t, n) {
            return (function r(i, o) {
              try {
                var s = e[i](o),
                  u = s.value
              } catch (t) {
                return void n(t)
              }
              if (!s.done)
                return a.default.resolve(u).then(
                  function(t) {
                    r("next", t)
                  },
                  function(t) {
                    r("throw", t)
                  }
                )
              t(u)
            })("next")
          })
        }
      }
    },
    fBQ2: function(t, e, n) {
      "use strict"
      var r = n("evD5"),
        i = n("X8DO")
      t.exports = function(t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : (t[e] = n)
      }
    },
    fHC3: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LogoUniversity",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { width: { type: [Number, String], default: 263 }, height: { type: [Number, String], default: 72 } },
        })
    },
    fJUb: function(t, e, n) {
      var r = n("77Pl"),
        i = n("EqjI"),
        a = n("qARP")
      t.exports = function(t, e) {
        if ((r(t), i(e) && e.constructor === t)) return e
        var n = a.f(t)
        return (0, n.resolve)(e), n.promise
      }
    },
    fkB2: function(t, e, n) {
      var r = n("UuGF"),
        i = Math.max,
        a = Math.min
      t.exports = function(t, e) {
        return (t = r(t)) < 0 ? i(t + e, 0) : a(t, e)
      }
    },
    fxRn: function(t, e, n) {
      n("+tPU"), n("zQR9"), (t.exports = n("g8Ux"))
    },
    g8Ux: function(t, e, n) {
      var r = n("77Pl"),
        i = n("3fs2")
      t.exports = n("FeBl").getIterator = function(t) {
        var e = i(t)
        if ("function" != typeof e) throw TypeError(t + " is not iterable!")
        return r(e.call(t))
      }
    },
    gR9U: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("ueM9"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("hHnG"),
        s = n("XyMi")
      var u = function(t) {
          n("jUBQ")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-8530fb8a", null)
      e.default = c.exports
    },
    gfJP: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            this.wrapper,
            { tag: "component", staticClass: "lux-overlay", class: { "lux-fullscreen": this.fullscreen } },
            [e("div", { staticClass: "lux-loader", attrs: { size: this.size } })]
          )
        },
        i = []
    },
    gh6k: function(t, e) {},
    glyz: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("lH41"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("493m"),
        s = n("XyMi")
      var u = function(t) {
          n("gh6k")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-10983b05", null)
      e.default = c.exports
    },
    "gnQ+": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "LogoTwitter",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          props: { width: { type: [Number, String], default: 24 }, height: { type: [Number, String], default: 24 } },
        })
    },
    h3vD: function(t, e) {},
    h65t: function(t, e, n) {
      var r = n("UuGF"),
        i = n("52gC")
      t.exports = function(t) {
        return function(e, n) {
          var a,
            o,
            s = String(i(e)),
            u = r(n),
            c = s.length
          return u < 0 || u >= c
            ? t
              ? ""
              : void 0
            : (a = s.charCodeAt(u)) < 55296 ||
              a > 56319 ||
              u + 1 === c ||
              (o = s.charCodeAt(u + 1)) < 56320 ||
              o > 57343
              ? t
                ? s.charAt(u)
                : a
              : t
                ? s.slice(u, u + 2)
                : o - 56320 + ((a - 55296) << 10) + 65536
        }
      }
    },
    hHnG: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "div",
            [
              n("heading", { attrs: { level: "h2" } }, [t._v("Edit "), n("small", [t._v("the selected item")])]),
              t._v(" "),
              n(
                "form",
                { attrs: { id: "app", novalidate: "true" } },
                [
                  n("input-text", {
                    attrs: { id: "itemLabel", label: "Label", placeholder: "e.g., example.tif" },
                    on: {
                      input: function(e) {
                        t.updateSingle()
                      },
                    },
                    model: {
                      value: t.singleForm.caption,
                      callback: function(e) {
                        t.$set(t.singleForm, "caption", e)
                      },
                      expression: "singleForm.caption",
                    },
                  }),
                  t._v(" "),
                  t.isMultiVolume
                    ? t._e()
                    : n("input-select", {
                        attrs: { label: "Page Type", id: "pageType", options: t.viewHintOpts },
                        on: {
                          change: function(e) {
                            t.updateViewHint(e)
                          },
                        },
                      }),
                  t._v(" "),
                  t.isMultiVolume
                    ? t._e()
                    : n("input-checkbox", {
                        attrs: { options: t.startCanvasOpts },
                        on: {
                          change: function(e) {
                            t.updateStartCanvas(e)
                          },
                        },
                      }),
                  t._v(" "),
                  n("input-checkbox", {
                    attrs: { options: t.thumbnailOpts },
                    on: {
                      change: function(e) {
                        t.updateThumbnail(e)
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    hJx8: function(t, e, n) {
      var r = n("evD5"),
        i = n("X8DO")
      t.exports = n("+E39")
        ? function(t, e, n) {
            return r.f(t, e, i(1, n))
          }
        : function(t, e, n) {
            return (t[e] = n), t
          }
    },
    hKoQ: function(t, e, n) {
      ;(function(e, n) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */ var r
        ;(r = function() {
          "use strict"
          function t(t) {
            return "function" == typeof t
          }
          var r = Array.isArray
              ? Array.isArray
              : function(t) {
                  return "[object Array]" === Object.prototype.toString.call(t)
                },
            i = 0,
            a = void 0,
            o = void 0,
            s = function(t, e) {
              ;(h[i] = t), (h[i + 1] = e), 2 === (i += 2) && (o ? o(v) : b())
            }
          var u = "undefined" != typeof window ? window : void 0,
            c = u || {},
            l = c.MutationObserver || c.WebKitMutationObserver,
            f = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
            d =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel
          function p() {
            var t = setTimeout
            return function() {
              return t(v, 1)
            }
          }
          var h = new Array(1e3)
          function v() {
            for (var t = 0; t < i; t += 2) {
              ;(0, h[t])(h[t + 1]), (h[t] = void 0), (h[t + 1] = void 0)
            }
            i = 0
          }
          var m,
            g,
            y,
            _,
            b = void 0
          function x(t, e) {
            var n = this,
              r = new this.constructor(O)
            void 0 === r[M] && F(r)
            var i = n._state
            if (i) {
              var a = arguments[i - 1]
              s(function() {
                return P(i, r, a, n._result)
              })
            } else N(n, r, t, e)
            return r
          }
          function w(t) {
            if (t && "object" == typeof t && t.constructor === this) return t
            var e = new this(O)
            return k(e, t), e
          }
          f
            ? (b = function() {
                return e.nextTick(v)
              })
            : l
              ? ((g = 0),
                (y = new l(v)),
                (_ = document.createTextNode("")),
                y.observe(_, { characterData: !0 }),
                (b = function() {
                  _.data = g = ++g % 2
                }))
              : d
                ? (((m = new MessageChannel()).port1.onmessage = v),
                  (b = function() {
                    return m.port2.postMessage(0)
                  }))
                : (b =
                    void 0 === u
                      ? (function() {
                          try {
                            var t = Function("return this")().require("vertx")
                            return void 0 !== (a = t.runOnLoop || t.runOnContext)
                              ? function() {
                                  a(v)
                                }
                              : p()
                          } catch (t) {
                            return p()
                          }
                        })()
                      : p())
          var M = Math.random()
            .toString(36)
            .substring(2)
          function O() {}
          var C = void 0,
            S = 1,
            j = 2,
            E = { error: null }
          function L(t) {
            try {
              return t.then
            } catch (t) {
              return (E.error = t), E
            }
          }
          function T(e, n, r) {
            n.constructor === e.constructor && r === x && n.constructor.resolve === w
              ? (function(t, e) {
                  e._state === S
                    ? D(t, e._result)
                    : e._state === j
                      ? I(t, e._result)
                      : N(
                          e,
                          void 0,
                          function(e) {
                            return k(t, e)
                          },
                          function(e) {
                            return I(t, e)
                          }
                        )
                })(e, n)
              : r === E
                ? (I(e, E.error), (E.error = null))
                : void 0 === r
                  ? D(e, n)
                  : t(r)
                    ? (function(t, e, n) {
                        s(function(t) {
                          var r = !1,
                            i = (function(t, e, n, r) {
                              try {
                                t.call(e, n, r)
                              } catch (t) {
                                return t
                              }
                            })(
                              n,
                              e,
                              function(n) {
                                r || ((r = !0), e !== n ? k(t, n) : D(t, n))
                              },
                              function(e) {
                                r || ((r = !0), I(t, e))
                              },
                              t._label
                            )
                          !r && i && ((r = !0), I(t, i))
                        }, t)
                      })(e, n, r)
                    : D(e, n)
          }
          function k(t, e) {
            var n, r
            t === e
              ? I(t, new TypeError("You cannot resolve a promise with itself"))
              : ((r = typeof (n = e)), null === n || ("object" !== r && "function" !== r) ? D(t, e) : T(t, e, L(e)))
          }
          function A(t) {
            t._onerror && t._onerror(t._result), $(t)
          }
          function D(t, e) {
            t._state === C && ((t._result = e), (t._state = S), 0 !== t._subscribers.length && s($, t))
          }
          function I(t, e) {
            t._state === C && ((t._state = j), (t._result = e), s(A, t))
          }
          function N(t, e, n, r) {
            var i = t._subscribers,
              a = i.length
            ;(t._onerror = null), (i[a] = e), (i[a + S] = n), (i[a + j] = r), 0 === a && t._state && s($, t)
          }
          function $(t) {
            var e = t._subscribers,
              n = t._state
            if (0 !== e.length) {
              for (var r = void 0, i = void 0, a = t._result, o = 0; o < e.length; o += 3)
                (r = e[o]), (i = e[o + n]), r ? P(n, r, i, a) : i(a)
              t._subscribers.length = 0
            }
          }
          function P(e, n, r, i) {
            var a = t(r),
              o = void 0,
              s = void 0,
              u = void 0,
              c = void 0
            if (a) {
              if (
                ((o = (function(t, e) {
                  try {
                    return t(e)
                  } catch (t) {
                    return (E.error = t), E
                  }
                })(r, i)) === E
                  ? ((c = !0), (s = o.error), (o.error = null))
                  : (u = !0),
                n === o)
              )
                return void I(n, new TypeError("A promises callback cannot return that same promise."))
            } else (o = i), (u = !0)
            n._state !== C || (a && u ? k(n, o) : c ? I(n, s) : e === S ? D(n, o) : e === j && I(n, o))
          }
          var z = 0
          function F(t) {
            ;(t[M] = z++), (t._state = void 0), (t._result = void 0), (t._subscribers = [])
          }
          var R = (function() {
            function t(t, e) {
              ;(this._instanceConstructor = t),
                (this.promise = new t(O)),
                this.promise[M] || F(this.promise),
                r(e)
                  ? ((this.length = e.length),
                    (this._remaining = e.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? D(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(e),
                        0 === this._remaining && D(this.promise, this._result)))
                  : I(this.promise, new Error("Array Methods must be provided an Array"))
            }
            return (
              (t.prototype._enumerate = function(t) {
                for (var e = 0; this._state === C && e < t.length; e++) this._eachEntry(t[e], e)
              }),
              (t.prototype._eachEntry = function(t, e) {
                var n = this._instanceConstructor,
                  r = n.resolve
                if (r === w) {
                  var i = L(t)
                  if (i === x && t._state !== C) this._settledAt(t._state, e, t._result)
                  else if ("function" != typeof i) this._remaining--, (this._result[e] = t)
                  else if (n === U) {
                    var a = new n(O)
                    T(a, t, i), this._willSettleAt(a, e)
                  } else
                    this._willSettleAt(
                      new n(function(e) {
                        return e(t)
                      }),
                      e
                    )
                } else this._willSettleAt(r(t), e)
              }),
              (t.prototype._settledAt = function(t, e, n) {
                var r = this.promise
                r._state === C && (this._remaining--, t === j ? I(r, n) : (this._result[e] = n)),
                  0 === this._remaining && D(r, this._result)
              }),
              (t.prototype._willSettleAt = function(t, e) {
                var n = this
                N(
                  t,
                  void 0,
                  function(t) {
                    return n._settledAt(S, e, t)
                  },
                  function(t) {
                    return n._settledAt(j, e, t)
                  }
                )
              }),
              t
            )
          })()
          var U = (function() {
            function e(t) {
              ;(this[M] = z++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                O !== t &&
                  ("function" != typeof t &&
                    (function() {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      )
                    })(),
                  this instanceof e
                    ? (function(t, e) {
                        try {
                          e(
                            function(e) {
                              k(t, e)
                            },
                            function(e) {
                              I(t, e)
                            }
                          )
                        } catch (e) {
                          I(t, e)
                        }
                      })(this, t)
                    : (function() {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        )
                      })())
            }
            return (
              (e.prototype.catch = function(t) {
                return this.then(null, t)
              }),
              (e.prototype.finally = function(e) {
                var n = this.constructor
                return t(e)
                  ? this.then(
                      function(t) {
                        return n.resolve(e()).then(function() {
                          return t
                        })
                      },
                      function(t) {
                        return n.resolve(e()).then(function() {
                          throw t
                        })
                      }
                    )
                  : this.then(e, e)
              }),
              e
            )
          })()
          return (
            (U.prototype.then = x),
            (U.all = function(t) {
              return new R(this, t).promise
            }),
            (U.race = function(t) {
              var e = this
              return r(t)
                ? new e(function(n, r) {
                    for (var i = t.length, a = 0; a < i; a++) e.resolve(t[a]).then(n, r)
                  })
                : new e(function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                  })
            }),
            (U.resolve = w),
            (U.reject = function(t) {
              var e = new this(O)
              return I(e, t), e
            }),
            (U._setScheduler = function(t) {
              o = t
            }),
            (U._setAsap = function(t) {
              s = t
            }),
            (U._asap = s),
            (U.polyfill = function() {
              var t = void 0
              if (void 0 !== n) t = n
              else if ("undefined" != typeof self) t = self
              else
                try {
                  t = Function("return this")()
                } catch (t) {
                  throw new Error("polyfill failed because global object is unavailable in this environment")
                }
              var e = t.Promise
              if (e) {
                var r = null
                try {
                  r = Object.prototype.toString.call(e.resolve())
                } catch (t) {}
                if ("[object Promise]" === r && !e.cast) return
              }
              t.Promise = U
            }),
            (U.Promise = U),
            U
          )
        }),
          (t.exports = r())
      }.call(e, n("W2nU"), n("DuR2")))
    },
    hRew: function(t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNTA0IDI1NmMwIDEzNi45NjctMTExLjAzMyAyNDgtMjQ4IDI0OFM4IDM5Mi45NjcgOCAyNTYgMTE5LjAzMyA4IDI1NiA4czI0OCAxMTEuMDMzIDI0OCAyNDh6TTIyNy4zMTQgMzg3LjMxNGwxODQtMTg0YzYuMjQ4LTYuMjQ4IDYuMjQ4LTE2LjM3OSAwLTIyLjYyN2wtMjIuNjI3LTIyLjYyN2MtNi4yNDgtNi4yNDktMTYuMzc5LTYuMjQ5LTIyLjYyOCAwTDIxNiAzMDguMTE4bC03MC4wNTktNzAuMDU5Yy02LjI0OC02LjI0OC0xNi4zNzktNi4yNDgtMjIuNjI4IDBsLTIyLjYyNyAyMi42MjdjLTYuMjQ4IDYuMjQ4LTYuMjQ4IDE2LjM3OSAwIDIyLjYyN2wxMDQgMTA0YzYuMjQ5IDYuMjQ5IDE2LjM3OSA2LjI0OSAyMi42MjguMDAxeiIgY2xhc3M9InN0MSIvPjwvc3ZnPg=="
    },
    ifoU: function(t, e, n) {
      t.exports = { default: n("3C/1"), __esModule: !0 }
    },
    "jKW+": function(t, e, n) {
      "use strict"
      var r = n("kM2E"),
        i = n("qARP"),
        a = n("dNDb")
      r(r.S, "Promise", {
        try: function(t) {
          var e = i.f(this),
            n = a(t)
          return (n.e ? e.reject : e.resolve)(n.v), e.promise
        },
      })
    },
    jUBQ: function(t, e) {},
    jyFz: function(t, e, n) {
      var r =
          (function() {
            return this
          })() || Function("return this")(),
        i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        a = i && r.regeneratorRuntime
      if (((r.regeneratorRuntime = void 0), (t.exports = n("SldL")), i)) r.regeneratorRuntime = a
      else
        try {
          delete r.regeneratorRuntime
        } catch (t) {
          r.regeneratorRuntime = void 0
        }
    },
    kM2E: function(t, e, n) {
      var r = n("7KvD"),
        i = n("FeBl"),
        a = n("+ZMJ"),
        o = n("hJx8"),
        s = n("D2L2"),
        u = function(t, e, n) {
          var c,
            l,
            f,
            d = t & u.F,
            p = t & u.G,
            h = t & u.S,
            v = t & u.P,
            m = t & u.B,
            g = t & u.W,
            y = p ? i : i[e] || (i[e] = {}),
            _ = y.prototype,
            b = p ? r : h ? r[e] : (r[e] || {}).prototype
          for (c in (p && (n = e), n))
            ((l = !d && b && void 0 !== b[c]) && s(y, c)) ||
              ((f = l ? b[c] : n[c]),
              (y[c] =
                p && "function" != typeof b[c]
                  ? n[c]
                  : m && l
                    ? a(f, r)
                    : g && b[c] == f
                      ? (function(t) {
                          var e = function(e, n, r) {
                            if (this instanceof t) {
                              switch (arguments.length) {
                                case 0:
                                  return new t()
                                case 1:
                                  return new t(e)
                                case 2:
                                  return new t(e, n)
                              }
                              return new t(e, n, r)
                            }
                            return t.apply(this, arguments)
                          }
                          return (e.prototype = t.prototype), e
                        })(f)
                      : v && "function" == typeof f
                        ? a(Function.call, f)
                        : f),
              v && (((y.virtual || (y.virtual = {}))[c] = f), t & u.R && _ && !_[c] && o(_, c, f)))
        }
      ;(u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (t.exports = u)
    },
    knuC: function(t, e) {
      t.exports = function(t, e, n) {
        var r = void 0 === n
        switch (e.length) {
          case 0:
            return r ? t() : t.call(n)
          case 1:
            return r ? t(e[0]) : t.call(n, e[0])
          case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1])
          case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2])
          case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
      }
    },
    l28G: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("Qv8c"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("3NGM"),
        s = n("XyMi")
      var u = function(t) {
          n("KTHU")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-aa0f3ad2", null)
      e.default = c.exports
    },
    lH41: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "InputCheckbox",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          model: { prop: "checked", event: "change" },
          data: function() {
            return { wrapper: this.groupLabel.length ? "fieldset" : "div" }
          },
          props: {
            vertical: { type: Boolean, default: !1 },
            options: { required: !0, type: Array },
            label: { type: String, default: "" },
            errormessage: { type: String, default: "" },
            groupLabel: { type: String, default: "" },
            disabled: { type: Boolean, default: !1 },
            hover: { type: Boolean, default: !1 },
            focus: { type: Boolean, default: !1 },
          },
          methods: {
            change: function(t) {
              this.$emit("change", t.target.checked)
            },
            inputblur: function(t) {
              this.$emit("inputblur", t)
            },
          },
        })
    },
    lOnJ: function(t, e) {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!")
        return t
      }
    },
    lXYb: function(t, e) {},
    lktj: function(t, e, n) {
      var r = n("Ibhu"),
        i = n("xnc9")
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, i)
        }
    },
    llmN: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("5vqI"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("TlZv"),
        s = n("XyMi")
      var u = function(t) {
          n("MIwS")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-46126c70", null)
      e.default = c.exports
    },
    m9gC: function(t, e, n) {
      var r = n("RY/4"),
        i = n("4WTo")
      t.exports = function(t) {
        return function() {
          if (r(this) != t) throw TypeError(t + "#toJSON isn't generic")
          return i(this)
        }
      }
    },
    mNOH: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("6ftZ"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("Tx1s"),
        s = n("XyMi")
      var u = function(t) {
          n("pcDU")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-218b7e8a", null)
      e.default = c.exports
    },
    msXi: function(t, e, n) {
      var r = n("77Pl")
      t.exports = function(t, e, n, i) {
        try {
          return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
          var a = t.return
          throw (void 0 !== a && r(a.call(t)), e)
        }
      }
    },
    mvHQ: function(t, e, n) {
      t.exports = { default: n("qkKv"), __esModule: !0 }
    },
    n2ui: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            this.type,
            { tag: "component", staticClass: "lux-index" },
            [
              e("menu-bar", {
                attrs: {
                  type: "links",
                  active: "Index",
                  menuItems: [
                    { name: "Template", component: "Index", href: "/#/" },
                    { name: "Living Docs", href: "http://localhost:6060/" },
                  ],
                },
              }),
              this._v(" "),
              e(
                "wrapper",
                [
                  e("heading", { attrs: { level: "h1" } }, [this._v("LUX")]),
                  this._v(" "),
                  e("text-style", [
                    this._v(
                      "LUX (Library User Experience) is a set of organized tools, patterns, and practices that work as the foundation for PUL web and application development. It aims to increase consistency, improve accessibility, reduce design debt, and accelerate the design and development process. Overall, it aims to illuminate the Library for our users."
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    nFgL: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("Qw7q"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("q8hY"),
        s = n("XyMi")
      var u = function(t) {
          n("AvtG")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-ad1e571a", null)
      e.default = c.exports
    },
    ntx3: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("3MQJ"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("7Fm+"),
        s = n("XyMi")
      var u = function(t) {
          n("3tbi")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-5b69d11a", null)
      e.default = c.exports
    },
    nvYT: function(t, e) {},
    nzWT: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.type, { tag: "component", staticClass: "lux-library-contact" }, [
            n("div", { attrs: { itemscope: "", itemtype: "http://schema.org/Organization" } }, [
              n("h2", { attrs: { itemprop: "name" } }, [t._v("Princeton University Library")]),
              t._v(" "),
              n("div", { attrs: { itemscope: "", itemtype: "http://schema.org/PostalAddress" } }, [
                n("span", { attrs: { itemprop: "streetAddress" } }, [t._v("One Washington Road")]),
                t._v(" "),
                n("br"),
                t._v(" "),
                n("span", { attrs: { itemprop: "addressLocality" } }, [t._v("Princeton")]),
                t._v(", "),
                n("span", { attrs: { itemprop: "addressRegion" } }, [t._v("NJ")]),
                t._v(" "),
                n("span", { attrs: { itemprop: "postalCode" } }, [t._v("08544")]),
                t._v(" "),
                n("span", { attrs: { itemprop: "addressCountry" } }, [t._v("USA")]),
              ]),
              t._v(" "),
              n("span", { attrs: { itemprop: "telephone" } }, [
                n("a", { attrs: { href: "tel:1-609-258-1470" } }, [t._v("(609) 258-1470")]),
              ]),
            ]),
            t._v(" "),
            n("ul", { staticClass: "icons" }, [
              n("li", [n("a", { attrs: { href: "http://www.facebook.com/PULibrary" } }, [n("logo-facebook")], 1)]),
              t._v(" "),
              n("li", [n("a", { attrs: { href: "http://twitter.com/PULibrary" } }, [n("logo-twitter")], 1)]),
              t._v(" "),
              n("li", [
                n(
                  "a",
                  { attrs: { href: "https://libguides.princeton.edu/usgovdocs" } },
                  [n("logo-gov-docs", { attrs: { width: "24", height: "24" } })],
                  1
                ),
              ]),
              t._v(" "),
              n("li", [
                n(
                  "a",
                  { attrs: { href: "https://fpul.princeton.edu/" } },
                  [n("logo-friends", { attrs: { width: "87", height: "24" } })],
                  1
                ),
              ]),
            ]),
          ])
        },
        i = []
    },
    oEh9: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("1v0A"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("QUnW"),
        s = n("XyMi")
      var u = function(t) {
          n("nvYT")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-e66d76ec", null)
      e.default = c.exports
    },
    oeOm: function(t, e, n) {
      var r = n("7Doy")
      t.exports = function(t, e) {
        return new (r(t))(e)
      }
    },
    oiFQ: function(t, e) {},
    p0n1: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.wrapper,
            { tag: "component", staticClass: "lux-input" },
            [
              t.groupLabel ? n("legend", [t._v(t._s(t.groupLabel))]) : t._e(),
              t._v(" "),
              t._l(t.options, function(e, r) {
                return n("div", { staticClass: "lux-radio", class: { "lux-inline": !t.vertical } }, [
                  n("input", {
                    attrs: { type: "radio", id: e.id, name: e.name, disabled: e.disabled },
                    domProps: { value: e.value, checked: e.checked },
                    on: {
                      change: function(e) {
                        t.change(e.target.value)
                      },
                      blur: function(e) {
                        t.inputblur(e.target)
                      },
                    },
                  }),
                  t._v(" "),
                  e.label
                    ? n("label", { attrs: { for: e.id } }, [t._v(t._s(e.label))])
                    : n("label", { attrs: { for: e.id } }, [t._v(t._s(e.value))]),
                ])
              }),
              t._v(" "),
              t.errormessage
                ? n("div", { staticClass: "lux-error", attrs: { role: "alert" } }, [t._v(t._s(t.errormessage))])
                : t._e(),
            ],
            2
          )
        },
        i = []
    },
    pcDU: function(t, e) {},
    q4eF: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("W660"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("dP2J"),
        s = n("XyMi")
      var u = function(t) {
          n("ss11")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-d0d5839e", null)
      e.default = c.exports
    },
    q8hY: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "div",
            [
              n("heading", { attrs: { level: "h2" } }, [
                t._v("Generate Labels "),
                n("small", [t._v("for selected items")]),
              ]),
              t._v(" "),
              n(
                "form",
                { attrs: { id: "app", novalidate: "true" } },
                [
                  n("input-text", {
                    attrs: { id: "unitLabel", label: "Label", placeholder: "e.g., p." },
                    on: {
                      input: function(e) {
                        t.updateMultiLabels()
                      },
                    },
                    model: {
                      value: t.labelerOpts.unitLabel,
                      callback: function(e) {
                        t.$set(t.labelerOpts, "unitLabel", e)
                      },
                      expression: "labelerOpts.unitLabel",
                    },
                  }),
                  t._v(" "),
                  n("input-text", {
                    attrs: { id: "startNum", label: "Starting Numeral", placeholder: "e.g., 10" },
                    on: {
                      input: function(e) {
                        t.updateMultiLabels()
                      },
                    },
                    model: {
                      value: t.labelerOpts.start,
                      callback: function(e) {
                        t.$set(t.labelerOpts, "start", e)
                      },
                      expression: "labelerOpts.start",
                    },
                  }),
                  t._v(" "),
                  t.isMultiVolume
                    ? t._e()
                    : n("input-checkbox", {
                        attrs: { options: t.addBracketOpts },
                        on: {
                          change: function(e) {
                            t.updateMultiLabels()
                          },
                        },
                        model: {
                          value: t.labelerOpts.bracket,
                          callback: function(e) {
                            t.$set(t.labelerOpts, "bracket", e)
                          },
                          expression: "labelerOpts.bracket",
                        },
                      }),
                  t._v(" "),
                  t.isMultiVolume
                    ? t._e()
                    : n("input-select", {
                        attrs: { id: "labelMethod", label: "Labeling Method", options: t.methodOpts },
                        on: {
                          change: function(e) {
                            t.updateMultiLabels()
                          },
                        },
                        model: {
                          value: t.labelerOpts.method,
                          callback: function(e) {
                            t.$set(t.labelerOpts, "method", e)
                          },
                          expression: "labelerOpts.method",
                        },
                      }),
                  t._v(" "),
                  "foliate" === t.labelerOpts.method
                    ? n(
                        "div",
                        { staticClass: "lux-row" },
                        [
                          n("input-text", {
                            attrs: { label: "Front Label", id: "frontLabel", placeholder: "(recto)" },
                            on: {
                              input: function(e) {
                                t.updateMultiLabels()
                              },
                            },
                            model: {
                              value: t.labelerOpts.frontLabel,
                              callback: function(e) {
                                t.$set(t.labelerOpts, "frontLabel", e)
                              },
                              expression: "labelerOpts.frontLabel",
                            },
                          }),
                          t._v(" "),
                          n("input-text", {
                            attrs: { label: "Back Label", id: "backLabel", placeholder: "(verso)" },
                            on: {
                              input: function(e) {
                                t.updateMultiLabels()
                              },
                            },
                            model: {
                              value: t.labelerOpts.backLabel,
                              callback: function(e) {
                                t.$set(t.labelerOpts, "backLabel", e)
                              },
                              expression: "labelerOpts.backLabel",
                            },
                          }),
                          t._v(" "),
                          t.isMultiVolume
                            ? t._e()
                            : n("input-select", {
                                attrs: { id: "startWith", label: "Start With", options: t.startWithOpts },
                                on: {
                                  change: function(e) {
                                    t.updateMultiLabels()
                                  },
                                },
                                model: {
                                  value: t.labelerOpts.startWith,
                                  callback: function(e) {
                                    t.$set(t.labelerOpts, "startWith", e)
                                  },
                                  expression: "labelerOpts.startWith",
                                },
                              }),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    qARP: function(t, e, n) {
      "use strict"
      var r = n("lOnJ")
      t.exports.f = function(t) {
        return new function(t) {
          var e, n
          ;(this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor")
            ;(e = t), (n = r)
          })),
            (this.resolve = r(e)),
            (this.reject = r(n))
        }(t)
      }
    },
    qCoq: function(t, e, n) {
      "use strict"
      var r = n("9C8M"),
        i = n("LIJb")
      t.exports = n("qo66")(
        "Map",
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        },
        {
          get: function(t) {
            var e = r.getEntry(i(this, "Map"), t)
            return e && e.v
          },
          set: function(t, e) {
            return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
          },
        },
        r,
        !0
      )
    },
    qio6: function(t, e, n) {
      var r = n("evD5"),
        i = n("77Pl"),
        a = n("lktj")
      t.exports = n("+E39")
        ? Object.defineProperties
        : function(t, e) {
            i(t)
            for (var n, o = a(e), s = o.length, u = 0; s > u; ) r.f(t, (n = o[u++]), e[n])
            return t
          }
    },
    qjAG: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r,
        i = n("Dd8w"),
        a = (r = i) && r.__esModule ? r : { default: r },
        o = n("NYxO")
      e.default = {
        name: "OrderManager",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        data: function() {
          return { cardPixelWidth: 300, captionPixelPadding: 9 }
        },
        computed: (0, a.default)(
          {
            galleryItems: function() {
              return this.resource.members.map(function(t) {
                return {
                  id: t.id,
                  caption: t.label,
                  service:
                    void 0 !== t.thumbnail.iiifServiceUrl
                      ? t.thumbnail.iiifServiceUrl
                      : "https://picsum.photos/600/300/?random",
                  mediaUrl:
                    void 0 !== t.thumbnail.iiifServiceUrl
                      ? t.thumbnail.iiifServiceUrl + "/full/300,/0/default.jpg"
                      : "https://picsum.photos/600/300/?random",
                  viewingHint: t.viewingHint,
                }
              })
            },
            selectedTotal: function() {
              return this.gallery.selected.length
            },
            isMultiVolume: function() {
              return this.$store.getters.isMultiVolume
            },
          },
          (0, o.mapState)({
            resource: function(t) {
              return t.ordermanager.resource
            },
            gallery: function(t) {
              return t.gallery
            },
          }),
          {
            loading: function() {
              return "LOADED" !== this.resource.loadState
            },
            saved: function() {
              return "SAVED" === this.resource.saveState
            },
            saveError: function() {
              return "ERROR" === this.resource.saveState
            },
          }
        ),
        props: { resourceObject: { type: Object, default: null }, resourceId: { type: String, default: null } },
        methods: {
          resizeCards: function(t) {
            ;(this.cardPixelWidth = t.target.value),
              this.cardPixelWidth < 75 ? (this.captionPixelPadding = 0) : (this.captionPixelPadding = 9)
          },
        },
        beforeMount: function() {
          if (this.resourceObject) this.$store.commit("SET_RESOURCE", this.resourceObject)
          else {
            var t = { id: this.resourceId }
            this.$store.commit("CHANGE_RESOURCE_LOAD_STATE", "LOADING"),
              this.$store.dispatch("loadImageCollectionGql", t)
          }
        },
      }
    },
    qkKv: function(t, e, n) {
      var r = n("FeBl"),
        i = r.JSON || (r.JSON = { stringify: JSON.stringify })
      t.exports = function(t) {
        return i.stringify.apply(i, arguments)
      }
    },
    qo66: function(t, e, n) {
      "use strict"
      var r = n("7KvD"),
        i = n("kM2E"),
        a = n("06OY"),
        o = n("S82l"),
        s = n("hJx8"),
        u = n("xH/j"),
        c = n("NWt+"),
        l = n("2KxR"),
        f = n("EqjI"),
        d = n("e6n0"),
        p = n("evD5").f,
        h = n("ALrJ")(0),
        v = n("+E39")
      t.exports = function(t, e, n, m, g, y) {
        var _ = r[t],
          b = _,
          x = g ? "set" : "add",
          w = b && b.prototype,
          M = {}
        return (
          v &&
          "function" == typeof b &&
          (y ||
            (w.forEach &&
              !o(function() {
                new b().entries().next()
              })))
            ? ((b = e(function(e, n) {
                l(e, b, t, "_c"), (e._c = new _()), void 0 != n && c(n, g, e[x], e)
              })),
              h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(t) {
                var e = "add" == t || "set" == t
                t in w &&
                  (!y || "clear" != t) &&
                  s(b.prototype, t, function(n, r) {
                    if ((l(this, b, t), !e && y && !f(n))) return "get" == t && void 0
                    var i = this._c[t](0 === n ? 0 : n, r)
                    return e ? this : i
                  })
              }),
              y ||
                p(b.prototype, "size", {
                  get: function() {
                    return this._c.size
                  },
                }))
            : ((b = m.getConstructor(e, t, g, x)), u(b.prototype, n), (a.NEED = !0)),
          d(b, t),
          (M[t] = b),
          i(i.G + i.W + i.F, M),
          y || m.setStrong(b, t, g),
          b
        )
      }
    },
    qyJz: function(t, e, n) {
      "use strict"
      var r = n("+ZMJ"),
        i = n("kM2E"),
        a = n("sB3e"),
        o = n("msXi"),
        s = n("Mhyx"),
        u = n("QRG4"),
        c = n("fBQ2"),
        l = n("3fs2")
      i(
        i.S +
          i.F *
            !n("dY0y")(function(t) {
              Array.from(t)
            }),
        "Array",
        {
          from: function(t) {
            var e,
              n,
              i,
              f,
              d = a(t),
              p = "function" == typeof this ? this : Array,
              h = arguments.length,
              v = h > 1 ? arguments[1] : void 0,
              m = void 0 !== v,
              g = 0,
              y = l(d)
            if ((m && (v = r(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == y || (p == Array && s(y))))
              for (n = new p((e = u(d.length))); e > g; g++) c(n, g, m ? v(d[g], g) : d[g])
            else
              for (f = y.call(d), n = new p(); !(i = f.next()).done; g++)
                c(n, g, m ? o(f, v, [i.value, g], !0) : i.value)
            return (n.length = g), n
          },
        }
      )
    },
    rDba: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("SU0s"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("D2+o"),
        s = n("XyMi")
      var u = function(t) {
          n("lXYb")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-52b335b2", null)
      e.default = c.exports
    },
    rh7Y: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resourceModule = e.galleryModule = e.counterModule = void 0)
      var r = n("IKGG"),
        i = n("HChz"),
        a = (e.counterModule = {
          state: { count: 10 },
          mutations: {
            increment: function(t) {
              t.count++
            },
          },
          getters: {
            count: function(t) {
              return t.count
            },
          },
        }),
        o = (e.galleryModule = { state: r.galleryState, mutations: r.galleryMutations }),
        s = (e.resourceModule = {
          state: i.resourceState,
          mutations: i.resourceMutations,
          getters: i.resourceGetters,
          modules: { gallery: o },
        })
      e.default = { counterModule: a, galleryModule: o, resourceModule: s }
    },
    rnqq: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o(n("Xxa5")),
        i = o(n("exGp")),
        a = o(n("ifoU"))
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      var s = n("AluM"),
        u = new a.default()
      e.default = {
        name: "SvgIcon",
        status: "deprecated",
        release: "1.0.0",
        type: "Element",
        data: function() {
          return { currPath: s("./" + this.name + ".svg"), isIE: !1 }
        },
        props: {
          src: { required: !1, default: "pul-icon-data-file" },
          name: { required: !0, default: "pul-icon-data-file" },
          ariaLabel: { type: String, default: "" },
          type: { type: String, default: "span" },
          fill: { type: String, default: "rgb(0, 17, 35)" },
          width: { required: !0, type: String, default: "16px" },
          height: { required: !0, type: String, default: "16px" },
        },
        methods: {
          detectIE: function() {
            var t = window.navigator.userAgent,
              e = t.indexOf("MSIE ")
            if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10)
            if (t.indexOf("Trident/") > 0) {
              var n = t.indexOf("rv:")
              return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10)
            }
            var r = t.indexOf("Edge/")
            return r > 0 && parseInt(t.substring(r + 5, t.indexOf(".", r)), 10)
          },
        },
        mounted: function() {
          var t = this
          return (0, i.default)(
            r.default.mark(function e() {
              var n, i
              return r.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(!1 === (n = t.detectIE()) || n >= 12)) {
                          e.next = 14
                          break
                        }
                        if (((t.isIE = !1), (i = s("./" + t.name + ".svg")), !u.has(i)))
                          try {
                            u.set(
                              i,
                              fetch(i).then(function(t) {
                                return t.text()
                              })
                            )
                          } catch (t) {
                            u.delete(i)
                          }
                        if (!u.has(i)) {
                          e.next = 12
                          break
                        }
                        return (e.next = 8), u.get(i)
                      case 8:
                        ;(t.$el.innerHTML = e.sent),
                          (t.$el.children[0].style.fill = t.fill),
                          (t.$el.children[0].style.width = t.width),
                          (t.$el.children[0].style.height = t.height)
                      case 12:
                        e.next = 15
                        break
                      case 14:
                        t.isIE = !0
                      case 15:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                t
              )
            })
          )()
        },
      }
    },
    s18w: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("gnQ+"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("CTO1"),
        s = n("XyMi")
      var u = function(t) {
          n("zSZG")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-1bb01e3f", null)
      e.default = c.exports
    },
    sB3e: function(t, e, n) {
      var r = n("52gC")
      t.exports = function(t) {
        return Object(r(t))
      }
    },
    ss11: function(t, e) {},
    t8x9: function(t, e, n) {
      var r = n("77Pl"),
        i = n("lOnJ"),
        a = n("dSzd")("species")
      t.exports = function(t, e) {
        var n,
          o = r(t).constructor
        return void 0 === o || void 0 == (n = r(o)[a]) ? e : i(n)
      }
    },
    tEfv: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("K5Ch"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("b9ns"),
        s = n("XyMi")
      var u = function(t) {
          n("4UZZ")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-32dd1b02", null)
      e.default = c.exports
    },
    tWNv: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("4RlR"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("/pG4"),
        s = n("XyMi")
      var u = function(t) {
          n("Bu6N")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-02e56732", null)
      e.default = c.exports
    },
    tdfW: function(t, e) {},
    tvhW: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "div",
            [
              n("heading", { attrs: { level: "h2" } }, [
                t._v("Set Properties "),
                n("small", [
                  t._v("for this "),
                  t.isMultiVolume ? n("span", [t._v("multi-volume")]) : t._e(),
                  t._v(" resource"),
                ]),
              ]),
              t._v(" "),
              n(
                "span",
                { staticClass: "lux-file_count" },
                [n("text-style", { attrs: { variation: "emphasis" } }, [t._v("Total files: " + t._s(t.memberCount))])],
                1
              ),
              t._v(" "),
              t.resource.bibId
                ? n("span", { staticClass: "lux-bibid" }, [t._v(" | BibId: " + t._s(t.resource.bibId))])
                : t._e(),
              t._v(" "),
              n(
                "form",
                { attrs: { id: "app", novalidate: "true" } },
                [
                  n("input-radio", {
                    attrs: {
                      vertical: "",
                      id: "viewDir",
                      groupLabel: "Viewing Direction",
                      options: t.viewDirs,
                      value: t.viewDirs.value,
                    },
                    on: {
                      change: function(e) {
                        t.updateViewDir(e)
                      },
                    },
                  }),
                  t._v(" "),
                  t.isMultiVolume
                    ? t._e()
                    : n("input-radio", {
                        attrs: {
                          vertical: "",
                          id: "viewHint",
                          groupLabel: "Viewing Hint",
                          options: t.viewHints,
                          value: t.viewHints.value,
                        },
                        on: {
                          change: function(e) {
                            t.updateViewHint(e)
                          },
                        },
                      }),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    ueM9: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r,
        i = n("Dd8w"),
        a = (r = i) && r.__esModule ? r : { default: r },
        o = n("NYxO")
      e.default = {
        name: "FilesetForm",
        status: "ready",
        release: "1.0.0",
        type: "Pattern",
        metaInfo: { title: "Fileset Form", htmlAttrs: { lang: "en" } },
        computed: (0, a.default)(
          {},
          (0, o.mapState)({
            resource: function(t) {
              return t.ordermanager.resource
            },
            gallery: function(t) {
              return t.gallery
            },
          }),
          {
            memberViewHint: function() {
              var t = this.gallery.selected[0].id
              return resource.members.find(function(e) {
                return e.id === t
              }).viewingHint
            },
            startCanvas: function() {
              return this.resource.startCanvas
            },
            thumbnail: function() {
              return this.resource.thumbnail
            },
            isMultiVolume: function() {
              return this.$store.getters.isMultiVolume
            },
            isStartCanvas: function() {
              var t = this.gallery.selected[0].id
              return this.resource.startCanvas === t
            },
            isThumbnail: function() {
              var t = this.gallery.selected[0].id
              return this.resource.thumbnail === t
            },
            startCanvasOpts: function() {
              return [
                { name: "isStartCanvas", value: "Set as Start Page", id: "isStartCanvas", checked: this.isStartCanvas },
              ]
            },
            thumbnailOpts: function() {
              return [
                {
                  name: "isThumbnail",
                  value: "Set as Resource Thumbnail",
                  id: "isThumbnail",
                  checked: this.isThumbnail,
                },
              ]
            },
            viewHintOpts: function() {
              return [
                { label: "Single Page (Default)", value: "single", selected: this.isViewHint("single") },
                { label: "Non-paged", value: "non-paged", selected: this.isViewHint("non-paged") },
                { label: "Facing Pages", value: "facing", selected: this.isViewHint("facing") },
              ]
            },
            singleForm: function() {
              return {
                caption: this.gallery.selected[0].caption,
                id: this.gallery.selected[0].id,
                mediaUrl: this.gallery.selected[0].mediaUrl,
                service: this.gallery.selected[0].service,
                title: this.gallery.selected[0].title,
                viewingHint: this.gallery.selected[0].viewingHint,
              }
            },
          }
        ),
        props: { type: { type: String, default: "div" } },
        methods: {
          isViewHint: function(t) {
            return this.singleForm.viewingHint === t
          },
          updateStartCanvas: function(t) {
            var e = null
            t && (e = this.gallery.selected[0].id), this.$store.commit("UPDATE_STARTCANVAS", e)
          },
          updateThumbnail: function(t) {
            var e = null
            t && (e = this.gallery.selected[0].id), this.$store.commit("UPDATE_THUMBNAIL", e)
          },
          updateViewHint: function(t) {
            var e = this.gallery.selected[0].viewingHint
            t.target.value && (e = t.target.value), (this.singleForm.viewingHint = e), this.updateSingle()
          },
          updateSingle: function() {
            var t = this.gallery.changeList,
              e = this.gallery.items
            ;(e[
              this.gallery.items
                .map(function(t) {
                  return t.id
                })
                .indexOf(this.gallery.selected[0].id)
            ] = this.singleForm),
              -1 === t.indexOf(this.gallery.selected[0].id) && t.push(this.gallery.selected[0].id),
              this.$store.commit("UPDATE_CHANGES", t),
              this.$store.commit("UPDATE_ITEMS", e)
          },
        },
      }
    },
    "us/S": function(t, e, n) {
      t.exports = { default: n("Xd32"), __esModule: !0 }
    },
    v920: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "NotFound",
          status: "prototype",
          release: "1.0.0",
          type: "Template",
          metaInfo: { title: "Page Not Found | LUX Design System", htmlAttrs: { lang: "en" } },
          props: { type: { type: String, default: "div" } },
        })
    },
    "vFc/": function(t, e, n) {
      var r = n("TcQ7"),
        i = n("QRG4"),
        a = n("fkB2")
      t.exports = function(t) {
        return function(e, n, o) {
          var s,
            u = r(e),
            c = i(u.length),
            l = a(o, c)
          if (t && n != n) {
            for (; c > l; ) if ((s = u[l++]) != s) return !0
          } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0
          return !t && -1
        }
      }
    },
    "vIB/": function(t, e, n) {
      "use strict"
      var r = n("O4g8"),
        i = n("kM2E"),
        a = n("880/"),
        o = n("hJx8"),
        s = n("/bQp"),
        u = n("94VQ"),
        c = n("e6n0"),
        l = n("PzxK"),
        f = n("dSzd")("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function() {
          return this
        }
      t.exports = function(t, e, n, h, v, m, g) {
        u(n, e, h)
        var y,
          _,
          b,
          x = function(t) {
            if (!d && t in C) return C[t]
            switch (t) {
              case "keys":
              case "values":
                return function() {
                  return new n(this, t)
                }
            }
            return function() {
              return new n(this, t)
            }
          },
          w = e + " Iterator",
          M = "values" == v,
          O = !1,
          C = t.prototype,
          S = C[f] || C["@@iterator"] || (v && C[v]),
          j = S || x(v),
          E = v ? (M ? x("entries") : j) : void 0,
          L = ("Array" == e && C.entries) || S
        if (
          (L &&
            (b = l(L.call(new t()))) !== Object.prototype &&
            b.next &&
            (c(b, w, !0), r || "function" == typeof b[f] || o(b, f, p)),
          M &&
            S &&
            "values" !== S.name &&
            ((O = !0),
            (j = function() {
              return S.call(this)
            })),
          (r && !g) || (!d && !O && C[f]) || o(C, f, j),
          (s[e] = j),
          (s[w] = p),
          v)
        )
          if (((y = { values: M ? j : x("values"), keys: m ? j : x("keys"), entries: E }), g))
            for (_ in y) _ in C || a(C, _, y[_])
          else i(i.P + i.F * (d || O), e, y)
        return y
      }
    },
    vgJI: function(t, e, n) {
      var r = {
        "./LogoFacebook.vue": "amnQ",
        "./LogoFriends.vue": "6qe1",
        "./LogoGovDocs.vue": "Omkx",
        "./LogoLibrary.vue": "XYtv",
        "./LogoTwitter.vue": "s18w",
        "./LogoUniversity.vue": "NXVa",
      }
      function i(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(i.keys = function() {
        return Object.keys(r)
      }),
        (i.resolve = a),
        (t.exports = i),
        (i.id = "vgJI")
    },
    "vqp/": function(t, e) {},
    vtcx: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
                viewBox: "0 0 440.06 97",
                preserveAspectRatio: "xMinYMid",
                "aria-labelledby": "logo-library",
                role: "presentation",
              },
            },
            [
              e("title", { attrs: { id: this.logo - this.library } }, [this._v("Princeton University Library Logo")]),
              this._v(" "),
              e("g", [
                e("clipPath", { attrs: { id: "clip-path" } }, [
                  e("path", { attrs: { d: "M3 .91h90v90H3z", fill: "none" } }),
                ]),
                e("rect", { attrs: { width: "96", height: "97", rx: "12.24", ry: "12.24", fill: "#ef7622" } }),
                e("g", { staticClass: "pul-logo-c" }, [
                  e("g", { staticClass: "pul-logo-c" }, [
                    e("path", {
                      staticClass: "pul-logo-d",
                      attrs: {
                        d:
                          "M10.77 83.5V20.15a20.61 20.61 0 0 0 6.59-3.05v59.8h.41a16.4 16.4 0 0 0 3.53-.38 38 38 0 0 0 7.62-2.49c1.24-.54 2.45-1.13 3.67-1.71a17.37 17.37 0 0 1 5.72-1.71 11.78 11.78 0 0 1 6.16.85A7 7 0 0 1 46.74 73a4.24 4.24 0 0 1 1.11 2c0 .06 0 .11.06.2s.05-.07.05-.09A4.16 4.16 0 0 1 49.12 73a7.6 7.6 0 0 1 3.17-1.9 12 12 0 0 1 4.42-.55 16.49 16.49 0 0 1 6.44 1.73c2 1 4 1.89 6 2.66a33.85 33.85 0 0 0 6.22 1.74 14.33 14.33 0 0 0 2.69.23h.33V17.33a.51.51 0 0 1 0-.07v-.07A21.31 21.31 0 0 0 85 20v63.5z",
                      },
                    }),
                    e("path", {
                      staticClass: "pul-logo-d",
                      attrs: {
                        d:
                          "M24.83 32.7A70.14 70.14 0 0 1 25 17l.41.2a17.26 17.26 0 0 0 4.85 1.69 13.45 13.45 0 0 0 8.91-1.44 19.27 19.27 0 0 0 5-3.93 25.37 25.37 0 0 0 3.55-4.83l.12-.19.21.35a24.49 24.49 0 0 0 5.68 6.73 15.38 15.38 0 0 0 6.35 3.2 13.73 13.73 0 0 0 7.33-.4 19 19 0 0 0 2.91-1.22l.25-.13h.12a70.13 70.13 0 0 1 .16 15.56H24.84M35.7 60.37a50.22 50.22 0 0 1-5.26-8.68l17.42-17.43 17.37 17.4A46.75 46.75 0 0 1 60 60.35l-6.05-6-6.07-6.07L35.7 60.37",
                      },
                    }),
                  ]),
                ]),
                e("path", {
                  staticClass: "pul-logo-d",
                  attrs: {
                    d:
                      "M118.7 28.26h-3V3.93h8.63q4 0 6 2.2a7.41 7.41 0 0 1 1.92 5 7 7 0 0 1-2.09 5.19 7.5 7.5 0 0 1-5.48 2h-5.9zm0-12.4h5.6a4.75 4.75 0 0 0 3.48-1.29 4.56 4.56 0 0 0 1.32-3.41 5 5 0 0 0-1.18-3.24 4.16 4.16 0 0 0-3.4-1.43h-5.82zm21.15 12.4h-2.8v-18h2.46v4.21a9 9 0 0 1 2.61-3.86 4.75 4.75 0 0 1 2.68-.88 11.06 11.06 0 0 1 1.1.07v2.67h-.57a4.93 4.93 0 0 0-3.85 1.73 7 7 0 0 0-1.64 4.54zm13.36-24.33V7h-3V3.93zm-.09 6.33v18h-2.8v-18zm21.01 18h-2.62V16.69a4.67 4.67 0 0 0-1.09-3.51 3.72 3.72 0 0 0-2.64-1 4.53 4.53 0 0 0-3.59 1.71 6.73 6.73 0 0 0-1.45 4.51v9.87h-2.8v-18h2.6v3.32q2.19-3.81 5.69-3.81a5.63 5.63 0 0 1 3.43 1 5.54 5.54 0 0 1 1.94 2.34 14.25 14.25 0 0 1 .53 4.71zm17.47-6.31l2.53.45a8.06 8.06 0 0 1-2.37 4.67A7.16 7.16 0 0 1 181.51 26a11.29 11.29 0 0 1-2-6.71 11 11 0 0 1 2.06-6.82 6.66 6.66 0 0 1 5.61-2.72 6.41 6.41 0 0 1 4.71 1.76 7.86 7.86 0 0 1 2.2 4.54l-2.53.48q-.71-4.46-4.3-4.46a4 4 0 0 0-3.56 2 9.42 9.42 0 0 0-1.25 5.11 9.87 9.87 0 0 0 1.24 5.37 3.91 3.91 0 0 0 3.48 1.92q3.51-.03 4.43-4.52zm19.49.94l2.6.53a7.32 7.32 0 0 1-2.78 3.82 8 8 0 0 1-4.91 1.52 7.57 7.57 0 0 1-6-2.6 9.93 9.93 0 0 1-2.28-6.81 10 10 0 0 1 2.37-6.95 7.65 7.65 0 0 1 6-2.65 7.19 7.19 0 0 1 5.68 2.44q2.15 2.44 2.2 7.31h-13.05q0 4.08 1.71 5.51a5.57 5.57 0 0 0 3.62 1.43q3.44 0 4.84-3.55zm-.16-5.47a7.83 7.83 0 0 0-.5-2.69 4.6 4.6 0 0 0-1.57-2 4.3 4.3 0 0 0-2.66-.83 4.74 4.74 0 0 0-3.54 1.5 6.19 6.19 0 0 0-1.63 4zm16.5 8.93v2.21a19.86 19.86 0 0 1-2.57.2q-5.22 0-5.22-5.46V12.45h-3.19v-2.19h3.19l.13-4.53 2.6-.25v4.78h4v2.19h-4v11.31q0 2.78 2.89 2.78a13.69 13.69 0 0 0 2.17-.19zm10.2 2.41a6.84 6.84 0 0 1-5.78-2.76 11 11 0 0 1-2.08-6.81 9.82 9.82 0 0 1 2.33-6.87 7.53 7.53 0 0 1 5.81-2.57 7.1 7.1 0 0 1 5.87 2.7 10.51 10.51 0 0 1 2.15 6.75 10.11 10.11 0 0 1-2.32 6.88 7.56 7.56 0 0 1-5.98 2.68zm.21-2.32a4.45 4.45 0 0 0 3.58-1.76q1.44-1.77 1.44-5.49t-1.52-5.43a4.63 4.63 0 0 0-3.55-1.68 4.46 4.46 0 0 0-3.53 1.7q-1.44 1.7-1.45 5.39 0 3.9 1.45 5.59a4.51 4.51 0 0 0 3.59 1.68zm27.73 1.82H263V16.69a4.67 4.67 0 0 0-1.09-3.51 3.72 3.72 0 0 0-2.64-1 4.52 4.52 0 0 0-3.59 1.71 6.73 6.73 0 0 0-1.45 4.51v9.87h-2.8v-18H254v3.32q2.19-3.81 5.69-3.81a5.63 5.63 0 0 1 3.43 1 5.54 5.54 0 0 1 1.88 2.37 14.28 14.28 0 0 1 .53 4.71zm31.32-24.33h2.53v15.89q0 4.78-2.34 6.86a8.91 8.91 0 0 1-6.14 2.08q-4.22 0-6.26-2.14t-2-6.8V3.93h3v15.89a8.65 8.65 0 0 0 .66 4 3.93 3.93 0 0 0 2 1.71 7.24 7.24 0 0 0 2.8.55 5.75 5.75 0 0 0 4.28-1.48q1.46-1.48 1.46-4.78zm23.25 24.33h-2.62V16.69a4.67 4.67 0 0 0-1.09-3.51 3.72 3.72 0 0 0-2.64-1 4.52 4.52 0 0 0-3.59 1.71 6.73 6.73 0 0 0-1.45 4.51v9.87H306v-18h2.6v3.32q2.19-3.81 5.69-3.81a5.63 5.63 0 0 1 3.43 1 5.54 5.54 0 0 1 1.94 2.34 14.27 14.27 0 0 1 .53 4.71zm9.73-24.33V7h-3V3.93zm-.09 6.33v18H327v-18zm20.01 0l-6.22 18h-2.88l-6.45-18h3.11l5 14.63 5-14.63zm15.82 12.63l2.6.53a7.32 7.32 0 0 1-2.78 3.82 8 8 0 0 1-4.87 1.51 7.57 7.57 0 0 1-6-2.6 9.93 9.93 0 0 1-2.28-6.81 10 10 0 0 1 2.37-6.95 7.65 7.65 0 0 1 6-2.65 7.19 7.19 0 0 1 5.68 2.44q2.15 2.44 2.2 7.31h-13.1q0 4.08 1.71 5.51a5.57 5.57 0 0 0 3.62 1.43q3.44.01 4.85-3.54zm-.16-5.47a7.81 7.81 0 0 0-.5-2.69 4.61 4.61 0 0 0-1.57-2 4.31 4.31 0 0 0-2.66-.83 4.74 4.74 0 0 0-3.54 1.5 6.19 6.19 0 0 0-1.63 4zm11.31 10.84H374v-18h2.46v4.21a9 9 0 0 1 2.54-3.86 4.75 4.75 0 0 1 2.68-.88c.29 0 .65 0 1.11.07v2.67h-.57a4.93 4.93 0 0 0-3.85 1.73 7 7 0 0 0-1.64 4.54zm8.24-4.67l2.7-.59q.89 3.4 5.63 3.4a5.34 5.34 0 0 0 3-.78 2.49 2.49 0 0 0 1.21-2.21q0-2.12-3.08-2.69l-3.84-.72a6.93 6.93 0 0 1-3.55-1.68 4.33 4.33 0 0 1-1.32-3.3 4.76 4.76 0 0 1 1.8-3.79 7.25 7.25 0 0 1 4.85-1.52q5.86 0 7.23 4.58l-2.57.55q-1.1-2.82-4.54-2.82a5.11 5.11 0 0 0-2.81.7 2.21 2.21 0 0 0-1.1 2q0 2 2.8 2.51l3.51.63q5.51 1 5.51 5.34a4.77 4.77 0 0 1-2 4 8.92 8.92 0 0 1-5.46 1.53q-6.43.03-7.97-5.14zm23.5-19.66V7h-3V3.93zm-.09 6.33v18h-2.8v-18zm14.99 16.09v2.21a19.87 19.87 0 0 1-2.57.2q-5.22 0-5.22-5.46V12.45h-3.19v-2.19h3.19l.13-4.53 2.6-.25v4.78h4v2.19h-4v11.31q0 2.78 2.89 2.78a13.7 13.7 0 0 0 2.17-.19zm16.66-16.09l-7.22 20.11q-1.57 4.35-5 4.35a8.87 8.87 0 0 1-2.41-.37v-2.21a8.57 8.57 0 0 0 1.87.25 3.33 3.33 0 0 0 2.24-.77q.9-.77 1.79-3.74l-6.23-17.62h2.84l4.83 13.53 4.92-13.53zM116 43.11h7.42V84.2h22v6.51H116zm45.61 0H169v47.6h-7.35zm26.25 0h17.29c8.89 0 13.44 5.39 13.44 12a9 9 0 0 1-6.44 9.17c6.37 1.47 9.73 6 9.73 12.11 0 8.19-5.46 14.35-15.47 14.35h-18.55zm16.94 18.55c4.41 0 6.51-2.45 6.51-6s-2-6-6.65-6h-9.38v12zM206 84.2c5.74 0 8.47-3.36 8.47-8.12S211.53 68 205.65 68h-10.37v16.2zm64.68 6.51h-8.54l-8.54-12.53a38.3 38.3 0 0 1-4 .28h-4.48v12.25h-7.42v-47.6h11.9c13.16 0 20.51 6.86 20.51 17.78 0 7.35-3.29 12.39-9.52 15.12zm-21.36-18.62c9.45 0 13.23-4.13 13.23-11.2s-3.92-11.27-13.23-11.27h-4.2v22.47zm54.25-29.47h.84l20.86 48.09h-7.7L314.85 84h-21.78l-2.73 6.72h-7.14zm8.61 35.14l-6-14.84a71.79 71.79 0 0 1-2.38-7.07 64.14 64.14 0 0 1-2.31 7.07l-6 14.84zm61.04 12.95h-8.54l-8.54-12.53a38.3 38.3 0 0 1-4 .28h-4.48v12.25h-7.42v-47.6h11.9c13.16 0 20.51 6.86 20.51 17.78 0 7.35-3.29 12.39-9.52 15.12zm-21.35-18.62c9.45 0 13.23-4.13 13.23-11.2s-3.92-11.27-13.23-11.27h-4.2v22.47zm50.54 3.57l-18.06-32.55h8.19l10.78 19.6a50.68 50.68 0 0 1 2.87 6.86 63.32 63.32 0 0 1 2.87-6.86l10.43-19.6h7.63l-17.29 32.13v15.47h-7.42z",
                  },
                }),
              ]),
            ]
          )
        },
        i = []
    },
    vzB6: function(t, e) {},
    wJix: function(t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Ii8+PC9zdmc+"
    },
    wcr7: function(t, e) {},
    wgSg: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("OBmg"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("n2ui"),
        s = n("XyMi")
      var u = function(t) {
          n("cRPg")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-7f268e56", null)
      e.default = c.exports
    },
    woOf: function(t, e, n) {
      t.exports = { default: n("V3tA"), __esModule: !0 }
    },
    ws2y: function(t, e) {},
    x4Lq: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            "div",
            { staticClass: "lux-orderManager" },
            [
              n("transition", { attrs: { name: "fade" } }, [
                t.loading
                  ? n("div", { staticClass: "lux-overlay" }, [n("loader", { attrs: { size: "medium" } })], 1)
                  : t._e(),
              ]),
              t._v(" "),
              t.saved
                ? n("alert", { attrs: { status: "success", type: "alert", autoclear: "", dismissible: "" } }, [
                    t._v("Your work has been saved!"),
                  ])
                : t._e(),
              t._v(" "),
              t.saveError
                ? n("alert", { attrs: { status: "error", type: "alert", autoclear: "", dismissible: "" } }, [
                    t._v("Sorry, there was a problem saving your work!"),
                  ])
                : t._e(),
              t._v(" "),
              n(
                "wrapper",
                { staticClass: "lux-galleryPanel", attrs: { fullWidth: "true", type: "div" } },
                [
                  n("toolbar", {
                    on: {
                      "cards-resized": function(e) {
                        t.resizeCards(e)
                      },
                    },
                  }),
                  t._v(" "),
                  n("gallery", {
                    staticClass: "lux-galleryWrapper",
                    attrs: { cardPixelWidth: t.cardPixelWidth, galleryItems: t.galleryItems },
                  }),
                ],
                1
              ),
              t._v(" "),
              n(
                "wrapper",
                { staticClass: "lux-sidePanel", attrs: { type: "div", fullWidth: !1 } },
                [
                  0 === t.selectedTotal ? n("resource-form") : t._e(),
                  t._v(" "),
                  t.selectedTotal > 1 ? n("filesets-form") : t._e(),
                  t._v(" "),
                  1 === t.selectedTotal ? n("fileset-form") : t._e(),
                  t._v(" "),
                  n("controls", { attrs: { viewerId: "viewer" } }),
                ],
                1
              ),
            ],
            1
          )
        },
        i = []
    },
    x4yr: function(t, e) {},
    xAlM: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMinYMid",
                "aria-labelledby": "logo-facebook",
                role: "presentation",
              },
            },
            [
              e("title", { attrs: { id: this.logo - this.facebook, lang: "en" } }, [this._v("Facebook Logo")]),
              this._v(" "),
              e("g", [
                e("path", {
                  attrs: {
                    d:
                      "M18.768 7.465H14.5V5.56c0-.896.594-1.105 1.012-1.105H18.5V.513L14.171.5C10.244.5 9.5 3.438 9.5 5.32v2.144h-3v4h3v12h5v-12h3.851l.417-3.999z",
                  },
                }),
                e("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
              ]),
            ]
          )
        },
        i = []
    },
    xGkn: function(t, e, n) {
      "use strict"
      var r = n("4mcu"),
        i = n("EGZi"),
        a = n("/bQp"),
        o = n("TcQ7")
      ;(t.exports = n("vIB/")(
        Array,
        "Array",
        function(t, e) {
          ;(this._t = o(t)), (this._i = 0), (this._k = e)
        },
        function() {
          var t = this._t,
            e = this._k,
            n = this._i++
          return !t || n >= t.length
            ? ((this._t = void 0), i(1))
            : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        },
        "values"
      )),
        (a.Arguments = a.Array),
        r("keys"),
        r("values"),
        r("entries")
    },
    "xH/j": function(t, e, n) {
      var r = n("hJx8")
      t.exports = function(t, e, n) {
        for (var i in e) n && t[i] ? (t[i] = e[i]) : r(t, i, e[i])
        return t
      }
    },
    xehl: function(t, e, n) {
      "use strict"
      n.d(e, "a", function() {
        return r
      }),
        n.d(e, "b", function() {
          return i
        })
      var r = function() {
          var t = this.$createElement,
            e = this._self._c || t
          return e(this.type, { tag: "component", staticClass: "lux-library-contact" }, [
            e(
              "a",
              { attrs: { href: "https://library.princeton.edu" } },
              [e("logo-library", { attrs: { width: "155px", height: "34px" } })],
              1
            ),
          ])
        },
        i = []
    },
    xnc9: function(t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      )
    },
    "yC+7": function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("Pf6I"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("UJ0i"),
        s = n("XyMi")
      var u = function(t) {
          n("0Y4m")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-861bfdc0", null)
      e.default = c.exports
    },
    zMEw: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "InputButton",
          status: "ready",
          release: "1.0.0",
          type: "Element",
          data: function() {
            return { label: "Submit" }
          },
          props: {
            variation: {
              type: String,
              default: "button",
              validator: function(t) {
                return t.match(/(solid|outline|text|dropdown)/)
              },
            },
            type: {
              type: String,
              default: "",
              validator: function(t) {
                return t.match(/(|button|submit)/)
              },
            },
            size: {
              type: String,
              default: "medium",
              validator: function(t) {
                return t.match(/(small|medium|large)/)
              },
            },
            block: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            customAlertEvent: { type: Object, default: null },
          },
          methods: {
            buttonClicked: function(t) {
              this.customAlertEvent &&
                this.$emit("system-alert", {
                  event: t,
                  alertStatus: this.customAlertEvent.alertStatus,
                  alertMessage: this.customAlertEvent.alertMessage,
                }),
                this.$emit("button-clicked", t)
            },
          },
        })
    },
    zQR9: function(t, e, n) {
      "use strict"
      var r = n("h65t")(!0)
      n("vIB/")(
        String,
        "String",
        function(t) {
          ;(this._t = String(t)), (this._i = 0)
        },
        function() {
          var t,
            e = this._t,
            n = this._i
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 })
        }
      )
    },
    zSZG: function(t, e) {},
    zcyw: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = n("WN1n"),
        i = n.n(r)
      for (var a in r)
        "default" !== a &&
          (function(t) {
            n.d(e, t, function() {
              return r[t]
            })
          })(a)
      var o = n("SvgA"),
        s = n("XyMi")
      var u = function(t) {
          n("wcr7")
        },
        c = Object(s.a)(i.a, o.a, o.b, !1, u, "data-v-463955e3", null)
      e.default = c.exports
    },
    zsHz: function(t, e, n) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = { name: "LuxIconFile", status: "ready", release: "1.0.0", type: "Element" })
    },
  })
})
