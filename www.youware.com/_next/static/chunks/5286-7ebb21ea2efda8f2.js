try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b51a1c8f-c734-465f-b035-ac254e340fab", e._sentryDebugIdIdentifier = "sentry-dbid-b51a1c8f-c734-465f-b035-ac254e340fab")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5286], {
        4217: (e, t, r) => {
            var n = r(36713),
                a = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(a, "") : e
            }
        },
        6906: (e, t, r) => {
            "use strict";

            function n(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            r.d(t, {
                KJ: () => c,
                $k: () => d
            });
            var a = r(86380),
                o = {
                    isHistory: e => (function(e) {
                        var t, r;
                        return !1 !== n(e) && (void 0 === (t = e.constructor) || !1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"))
                    })(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (0 === e.redos.length || a.I.isOperationList(e.redos[0].operations)) && (0 === e.undos.length || a.I.isOperationList(e.undos[0].operations))
                };
            new WeakMap;
            var i = new WeakMap,
                s = new WeakMap,
                l = new WeakMap,
                c = {
                    isHistoryEditor: e => o.isHistory(e.history) && a.KE.isEditor(e),
                    isMerging: e => s.get(e),
                    isSplittingOnce: e => l.get(e),
                    setSplittingOnce(e, t) {
                        l.set(e, t)
                    },
                    isSaving: e => i.get(e),
                    redo(e) {
                        e.redo()
                    },
                    undo(e) {
                        e.undo()
                    },
                    withMerging(e, t) {
                        var r = c.isMerging(e);
                        s.set(e, !0), t(), s.set(e, r)
                    },
                    withNewBatch(e, t) {
                        var r = c.isMerging(e);
                        s.set(e, !0), l.set(e, !0), t(), s.set(e, r), l.delete(e)
                    },
                    withoutMerging(e, t) {
                        var r = c.isMerging(e);
                        s.set(e, !1), t(), s.set(e, r)
                    },
                    withoutSaving(e, t) {
                        var r = c.isSaving(e);
                        i.set(e, !1);
                        try {
                            t()
                        } finally {
                            i.set(e, r)
                        }
                    }
                },
                d = e => {
                    var {
                        apply: t
                    } = e;
                    return e.history = {
                        undos: [],
                        redos: []
                    }, e.redo = () => {
                        var {
                            history: t
                        } = e, {
                            redos: r
                        } = t;
                        if (r.length > 0) {
                            var n = r[r.length - 1];
                            n.selectionBefore && a.gB.setSelection(e, n.selectionBefore), c.withoutSaving(e, () => {
                                a.KE.withoutNormalizing(e, () => {
                                    for (var t of n.operations) e.apply(t)
                                })
                            }), t.redos.pop(), e.writeHistory("undos", n)
                        }
                    }, e.undo = () => {
                        var {
                            history: t
                        } = e, {
                            undos: r
                        } = t;
                        if (r.length > 0) {
                            var n = r[r.length - 1];
                            c.withoutSaving(e, () => {
                                a.KE.withoutNormalizing(e, () => {
                                    for (var t of n.operations.map(a.I.inverse).reverse()) e.apply(t);
                                    n.selectionBefore && a.gB.setSelection(e, n.selectionBefore)
                                })
                            }), e.writeHistory("redos", n), t.undos.pop()
                        }
                    }, e.apply = r => {
                        var {
                            operations: n,
                            history: a
                        } = e, {
                            undos: o
                        } = a, i = o[o.length - 1], s = i && i.operations[i.operations.length - 1], l = c.isSaving(e), d = c.isMerging(e);
                        if (null == l && (l = f(r)), l) {
                            if (null == d && (d = null != i && (0 !== n.length || u(r, s))), c.isSplittingOnce(e) && (d = !1, c.setSplittingOnce(e, void 0)), i && d) i.operations.push(r);
                            else {
                                var h = {
                                    operations: [r],
                                    selectionBefore: e.selection
                                };
                                e.writeHistory("undos", h)
                            }
                            for (; o.length > 100;) o.shift();
                            a.redos = []
                        }
                        t(r)
                    }, e.writeHistory = (t, r) => {
                        e.history[t].push(r)
                    }, e
                },
                u = (e, t) => !!(t && "insert_text" === e.type && "insert_text" === t.type && e.offset === t.offset + t.text.length && a.wA.equals(e.path, t.path) || t && "remove_text" === e.type && "remove_text" === t.type && e.offset + e.text.length === t.offset && a.wA.equals(e.path, t.path)),
                f = (e, t) => "set_selection" !== e.type
        },
        7985: (e, t, r) => {
            e.exports = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
        },
        20570: (e, t, r) => {
            var n = r(24376),
                a = Object.prototype,
                o = a.hasOwnProperty,
                i = a.toString,
                s = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = o.call(e, s),
                    r = e[s];
                try {
                    e[s] = void 0;
                    var n = !0
                } catch (e) {}
                var a = i.call(e);
                return n && (t ? e[s] = r : delete e[s]), a
            }
        },
        24376: (e, t, r) => {
            e.exports = r(82500).Symbol
        },
        25959: e => {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), n.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var t = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                n = RegExp("^[^" + r + "]*[" + t + "]"),
                a = RegExp("^[^" + t + "]*[" + r + "]")
        },
        31699: (e, t) => {
            "use strict";
            for (var r = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), n = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, a = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: r ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, o = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, i = 1; i < 20; i++) o["f" + i] = 111 + i;

            function s(e) {
                return e = a[e = e.toLowerCase()] || e
            }
            t.v_ = function(e, t, r) {
                !t || "byKey" in t || (r = t, t = null), Array.isArray(e) || (e = [e]);
                var i = e.map(function(e) {
                        return function(e, t) {
                            var r = t && t.byKey,
                                i = {},
                                l = (e = e.replace("++", "+add")).split("+"),
                                c = l.length;
                            for (var d in n) i[n[d]] = !1;
                            var u = !0,
                                f = !1,
                                h = void 0;
                            try {
                                for (var p, v = l[Symbol.iterator](); !(u = (p = v.next()).done); u = !0) {
                                    var g = p.value,
                                        m = g.endsWith("?") && g.length > 1;
                                    m && (g = g.slice(0, -1));
                                    var b = s(g),
                                        w = n[b];
                                    if (g.length > 1 && !w && !a[g] && !o[b]) throw TypeError('Unknown modifier: "' + g + '"');
                                    1 !== c && w || (r ? i.key = b : i.which = function(e) {
                                        return o[e = s(e)] || e.toUpperCase().charCodeAt(0)
                                    }(g)), w && (i[w] = !m || null)
                                }
                            } catch (e) {
                                f = !0, h = e
                            } finally {
                                try {
                                    !u && v.return && v.return()
                                } finally {
                                    if (f) throw h
                                }
                            }
                            return i
                        }(e, t)
                    }),
                    l = function(e) {
                        return i.some(function(t) {
                            return function(e, t) {
                                for (var r in e) {
                                    var n = e[r],
                                        a = void 0;
                                    if (null != n && (null != (a = "key" === r && null != t.key ? t.key.toLowerCase() : "which" === r ? 91 === n && 93 === t.which ? 91 : t.which : t[r]) || !1 !== n) && a !== n) return !1
                                }
                                return !0
                            }(t, e)
                        })
                    };
                return null == r ? l : l(r)
            }
        },
        36713: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)););
                return r
            }
        },
        36815: (e, t, r) => {
            var n = r(4217),
                a = r(67460),
                o = r(70771),
                i = 0 / 0,
                s = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                d = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return i;
                if (a(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = a(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = l.test(e);
                return r || c.test(e) ? d(e.slice(2), r ? 2 : 8) : s.test(e) ? i : +e
            }
        },
        45964: (e, t, r) => {
            var n = r(67460),
                a = r(76685),
                o = r(36815),
                i = Math.max,
                s = Math.min;
            e.exports = function(e, t, r) {
                var l, c, d, u, f, h, p = 0,
                    v = !1,
                    g = !1,
                    m = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function b(t) {
                    var r = l,
                        n = c;
                    return l = c = void 0, p = t, u = e.apply(n, r)
                }

                function w(e) {
                    var r = e - h,
                        n = e - p;
                    return void 0 === h || r >= t || r < 0 || g && n >= d
                }

                function y() {
                    var e, r, n, o = a();
                    if (w(o)) return E(o);
                    f = setTimeout(y, (e = o - h, r = o - p, n = t - e, g ? s(n, d - r) : n))
                }

                function E(e) {
                    return (f = void 0, m && l) ? b(e) : (l = c = void 0, u)
                }

                function k() {
                    var e, r = a(),
                        n = w(r);
                    if (l = arguments, c = this, h = r, n) {
                        if (void 0 === f) return p = e = h, f = setTimeout(y, t), v ? b(e) : u;
                        if (g) return clearTimeout(f), f = setTimeout(y, t), b(h)
                    }
                    return void 0 === f && (f = setTimeout(y, t)), u
                }
                return t = o(t) || 0, n(r) && (v = !!r.leading, d = (g = "maxWait" in r) ? i(o(r.maxWait) || 0, t) : d, m = "trailing" in r ? !!r.trailing : m), k.cancel = function() {
                    void 0 !== f && clearTimeout(f), p = 0, l = h = c = f = void 0
                }, k.flush = function() {
                    return void 0 === f ? u : E(a())
                }, k
            }
        },
        48611: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        50572: (e, t, r) => {
            "use strict";
            r.d(t, {
                Fo: () => rQ,
                rL: () => tQ,
                A: () => r1,
                o$: () => r6
            });
            var n, a, o, i, s = r(25959),
                l = r.n(s),
                c = r(45964),
                d = r.n(c),
                u = r(91959),
                f = r.n(u),
                h = r(12115);
            let p = e => "object" == typeof e && null != e && 1 === e.nodeType,
                v = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e,
                g = (e, t) => {
                    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                        let r = getComputedStyle(e, null);
                        return v(r.overflowY, t) || v(r.overflowX, t) || (e => {
                            let t = (e => {
                                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                                try {
                                    return e.ownerDocument.defaultView.frameElement
                                } catch (e) {
                                    return null
                                }
                            })(e);
                            return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
                        })(e)
                    }
                    return !1
                },
                m = (e, t, r, n, a, o, i, s) => o < e && i > t || o > e && i < t ? 0 : o <= e && s <= r || i >= t && s >= r ? o - e - n : i > t && s < r || o < e && s > r ? i - t + a : 0,
                b = e => {
                    let t = e.parentElement;
                    return null == t ? e.getRootNode().host || null : t
                },
                w = (e, t) => {
                    var r, n, a, o;
                    if ("undefined" == typeof document) return [];
                    let {
                        scrollMode: i,
                        block: s,
                        inline: l,
                        boundary: c,
                        skipOverflowHiddenElements: d
                    } = t, u = "function" == typeof c ? c : e => e !== c;
                    if (!p(e)) throw TypeError("Invalid target");
                    let f = document.scrollingElement || document.documentElement,
                        h = [],
                        v = e;
                    for (; p(v) && u(v);) {
                        if ((v = b(v)) === f) {
                            h.push(v);
                            break
                        }
                        null != v && v === document.body && g(v) && !g(document.documentElement) || null != v && g(v, d) && h.push(v)
                    }
                    let w = null != (n = null == (r = window.visualViewport) ? void 0 : r.width) ? n : innerWidth,
                        y = null != (o = null == (a = window.visualViewport) ? void 0 : a.height) ? o : innerHeight,
                        {
                            scrollX: E,
                            scrollY: k
                        } = window,
                        {
                            height: x,
                            width: O,
                            top: C,
                            right: S,
                            bottom: P,
                            left: D
                        } = e.getBoundingClientRect(),
                        {
                            top: T,
                            right: B,
                            bottom: M,
                            left: _
                        } = (e => {
                            let t = window.getComputedStyle(e);
                            return {
                                top: parseFloat(t.scrollMarginTop) || 0,
                                right: parseFloat(t.scrollMarginRight) || 0,
                                bottom: parseFloat(t.scrollMarginBottom) || 0,
                                left: parseFloat(t.scrollMarginLeft) || 0
                            }
                        })(e),
                        F = "start" === s || "nearest" === s ? C - T : "end" === s ? P + M : C + x / 2 - T + M,
                        j = "center" === l ? D + O / 2 - _ + B : "end" === l ? S + B : D - _,
                        K = [];
                    for (let e = 0; e < h.length; e++) {
                        let t = h[e],
                            {
                                height: r,
                                width: n,
                                top: a,
                                right: o,
                                bottom: c,
                                left: d
                            } = t.getBoundingClientRect();
                        if ("if-needed" === i && C >= 0 && D >= 0 && P <= y && S <= w && (t === f && !g(t) || C >= a && P <= c && D >= d && S <= o)) break;
                        let u = getComputedStyle(t),
                            p = parseInt(u.borderLeftWidth, 10),
                            v = parseInt(u.borderTopWidth, 10),
                            b = parseInt(u.borderRightWidth, 10),
                            T = parseInt(u.borderBottomWidth, 10),
                            B = 0,
                            M = 0,
                            _ = "offsetWidth" in t ? t.offsetWidth - t.clientWidth - p - b : 0,
                            R = "offsetHeight" in t ? t.offsetHeight - t.clientHeight - v - T : 0,
                            A = "offsetWidth" in t ? 0 === t.offsetWidth ? 0 : n / t.offsetWidth : 0,
                            N = "offsetHeight" in t ? 0 === t.offsetHeight ? 0 : r / t.offsetHeight : 0;
                        if (f === t) B = "start" === s ? F : "end" === s ? F - y : "nearest" === s ? m(k, k + y, y, v, T, k + F, k + F + x, x) : F - y / 2, M = "start" === l ? j : "center" === l ? j - w / 2 : "end" === l ? j - w : m(E, E + w, w, p, b, E + j, E + j + O, O), B = Math.max(0, B + k), M = Math.max(0, M + E);
                        else {
                            B = "start" === s ? F - a - v : "end" === s ? F - c + T + R : "nearest" === s ? m(a, c, r, v, T + R, F, F + x, x) : F - (a + r / 2) + R / 2, M = "start" === l ? j - d - p : "center" === l ? j - (d + n / 2) + _ / 2 : "end" === l ? j - o + b + _ : m(d, o, n, p, b + _, j, j + O, O);
                            let {
                                scrollLeft: e,
                                scrollTop: i
                            } = t;
                            B = 0 === N ? 0 : Math.max(0, Math.min(i + B / N, t.scrollHeight - r / N + R)), M = 0 === A ? 0 : Math.max(0, Math.min(e + M / A, t.scrollWidth - n / A + _)), F += i - B, j += e - M
                        }
                        K.push({
                            el: t,
                            top: B,
                            left: M
                        })
                    }
                    return K
                },
                y = e => !1 === e ? {
                    block: "end",
                    inline: "nearest"
                } : (e => e === Object(e) && 0 !== Object.keys(e).length)(e) ? e : {
                    block: "start",
                    inline: "nearest"
                };
            var E = r(86380),
                k = r(31699),
                x = globalThis.Node;
            globalThis.Element;
            var O = globalThis.Text;
            globalThis.Range, globalThis.Selection, globalThis.StaticRange;
            var C = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                S = e => D(e) && 8 === e.nodeType,
                P = e => D(e) && 1 === e.nodeType,
                D = e => {
                    var t = C(e);
                    return !!t && e instanceof t.Node
                },
                T = e => {
                    var t = e && e.anchorNode && C(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                B = e => D(e) && 3 === e.nodeType,
                M = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
                _ = e => {
                    var [t, r] = e;
                    if (P(t) && t.childNodes.length) {
                        var n = r === t.childNodes.length,
                            a = n ? r - 1 : r;
                        for ([t, a] = j(t, a, n ? "backward" : "forward"), n = a < r; P(t) && t.childNodes.length;) {
                            var o = n ? t.childNodes.length - 1 : 0;
                            t = K(t, o, n ? "backward" : "forward")
                        }
                        r = n && null != t.textContent ? t.textContent.length : 0
                    }
                    return [t, r]
                },
                F = e => {
                    for (var t = e && e.parentNode; t;) {
                        if ("[object ShadowRoot]" === t.toString()) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                j = (e, t, r) => {
                    for (var {
                            childNodes: n
                        } = e, a = n[t], o = t, i = !1, s = !1;
                        (S(a) || P(a) && 0 === a.childNodes.length || P(a) && "false" === a.getAttribute("contenteditable")) && (!i || !s);) {
                        if (o >= n.length) {
                            i = !0, o = t - 1, r = "backward";
                            continue
                        }
                        if (o < 0) {
                            s = !0, o = t + 1, r = "forward";
                            continue
                        }
                        a = n[o], t = o, o += "forward" === r ? 1 : -1
                    }
                    return [a, t]
                },
                K = (e, t, r) => {
                    var [n] = j(e, t, r);
                    return n
                },
                R = e => {
                    var t = "";
                    if (B(e) && e.nodeValue) return e.nodeValue;
                    if (P(e)) {
                        for (var r of Array.from(e.childNodes)) t += R(r);
                        var n = getComputedStyle(e).getPropertyValue("display");
                        ("block" === n || "list" === n || "BR" === e.tagName) && (t += "\n")
                    }
                    return t
                },
                A = /data-slate-fragment="(.+?)"/m,
                N = e => {
                    var [, t] = e.getData("text/html").match(A) || [];
                    return t
                },
                I = e => null != e.getSelection ? e.getSelection() : document.getSelection(),
                L = (e, t, r) => {
                    var {
                        target: n
                    } = t;
                    if (P(n) && n.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: a
                    } = e_.getWindow(e);
                    if (a.contains(n)) return e_.hasDOMNode(e, n, {
                        editable: !0
                    });
                    var o = r.find(e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var a of t)
                            if (a === n || a.contains(n)) return !0;
                        for (var o of r)
                            if (o === n || o.contains(n)) return !0
                    });
                    return !!o && o !== t && L(e, o, r)
                },
                W = () => {
                    for (var e, t, r, n = document.activeElement; null !== (e = n) && void 0 !== e && e.shadowRoot && null !== (t = n.shadowRoot) && void 0 !== t && t.activeElement;) n = null === (r = n) || void 0 === r || null === (r = r.shadowRoot) || void 0 === r ? void 0 : r.activeElement;
                    return n
                },
                z = (e, t) => !!(e.compareDocumentPosition(t) & x.DOCUMENT_POSITION_PRECEDING),
                H = (e, t) => !!(e.compareDocumentPosition(t) & x.DOCUMENT_POSITION_FOLLOWING),
                Q = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                q = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
                U = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                V = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                Y = "undefined" != typeof navigator && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent),
                X = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                $ = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
                G = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                J = U && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                Z = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                ee = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                et = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent),
                er = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
            "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && null !== (n = navigator.userAgent.match(/Version\/(\d+)/)) && void 0 !== n && n[1] && parseInt(null === (a = navigator.userAgent.match(/Version\/(\d+)/)) || void 0 === a ? void 0 : a[1], 10);
            var en = (!G || !J) && !X && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges;

            function ea(e) {
                return (ea = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function eo(e, t, r) {
                var n;
                return n = function(e, t) {
                    if ("object" !== ea(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== ea(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === ea(n) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var ei = 0;
            class es {
                constructor() {
                    eo(this, "id", void 0), this.id = "".concat(ei++)
                }
            }
            var el = new WeakMap,
                ec = new WeakMap,
                ed = new WeakMap,
                eu = new WeakMap,
                ef = new WeakMap,
                eh = new WeakMap,
                ep = new WeakMap,
                ev = new WeakMap,
                eg = new WeakMap,
                em = new WeakMap,
                eb = new WeakMap,
                ew = new WeakMap,
                ey = new WeakMap,
                eE = new WeakMap,
                ek = new WeakMap,
                ex = new WeakMap,
                eO = new WeakMap,
                eC = new WeakMap,
                eS = new WeakMap,
                eP = new WeakMap,
                eD = new WeakMap,
                eT = new WeakMap,
                eB = Symbol("placeholder"),
                eM = Symbol("mark-placeholder"),
                e_ = {
                    androidPendingDiffs: e => eS.get(e),
                    androidScheduleFlush: e => {
                        var t;
                        null === (t = ex.get(e)) || void 0 === t || t()
                    },
                    blur: e => {
                        var t = e_.toDOMNode(e, e),
                            r = e_.findDocumentOrShadowRoot(e);
                        ew.set(e, !1), r.activeElement === t && t.blur()
                    },
                    deselect: e => {
                        var {
                            selection: t
                        } = e, r = I(e_.findDocumentOrShadowRoot(e));
                        r && r.rangeCount > 0 && r.removeAllRanges(), t && E.gB.deselect(e)
                    },
                    findDocumentOrShadowRoot: e => {
                        var t = e_.toDOMNode(e, e),
                            r = t.getRootNode();
                        return r instanceof Document || r instanceof ShadowRoot ? r : t.ownerDocument
                    },
                    findEventRange: (e, t) => {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var r, {
                            clientX: n,
                            clientY: a,
                            target: o
                        } = t;
                        if (null == n || null == a) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var i = e_.toSlateNode(e, t.target),
                            s = e_.findPath(e, i);
                        if (E.Hg.isElement(i) && E.KE.isVoid(e, i)) {
                            var l = o.getBoundingClientRect(),
                                c = e.isInline(i) ? n - l.left < l.left + l.width - n : a - l.top < l.top + l.height - a,
                                d = E.KE.point(e, s, {
                                    edge: c ? "start" : "end"
                                }),
                                u = c ? E.KE.before(e, d) : E.KE.after(e, d);
                            if (u) return E.KE.range(e, u)
                        }
                        var {
                            document: f
                        } = e_.getWindow(e);
                        if (f.caretRangeFromPoint) r = f.caretRangeFromPoint(n, a);
                        else {
                            var h = f.caretPositionFromPoint(n, a);
                            h && ((r = f.createRange()).setStart(h.offsetNode, h.offset), r.setEnd(h.offsetNode, h.offset))
                        }
                        if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return e_.toSlateRange(e, r, {
                            exactMatch: !1,
                            suppressThrow: !1
                        })
                    },
                    findKey: (e, t) => {
                        var r = eg.get(t);
                        return r || (r = new es, eg.set(t, r)), r
                    },
                    findPath: (e, t) => {
                        for (var r = [], n = t;;) {
                            var a = ed.get(n);
                            if (null == a) {
                                if (E.KE.isEditor(n)) return r;
                                break
                            }
                            var o = ec.get(n);
                            if (null == o) break;
                            r.unshift(o), n = a
                        }
                        throw Error("Unable to find the path for Slate node: ".concat(E.h6.stringify(t)))
                    },
                    focus: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            retries: 5
                        };
                        if (!ew.get(e)) {
                            if (t.retries <= 0) throw Error("Could not set focus, editor seems stuck with pending operations");
                            if (e.operations.length > 0) {
                                setTimeout(() => {
                                    e_.focus(e, {
                                        retries: t.retries - 1
                                    })
                                }, 10);
                                return
                            }
                            var r = e_.toDOMNode(e, e),
                                n = e_.findDocumentOrShadowRoot(e);
                            if (n.activeElement !== r) {
                                if (e.selection && n instanceof Document) {
                                    var a = I(n),
                                        o = e_.toDOMRange(e, e.selection);
                                    null == a || a.removeAllRanges(), null == a || a.addRange(o)
                                }
                                e.selection || E.gB.select(e, E.KE.start(e, [])), ew.set(e, !0), r.focus({
                                    preventScroll: !0
                                })
                            }
                        }
                    },
                    getWindow: e => {
                        var t = eu.get(e);
                        if (!t) throw Error("Unable to find a host window element for this editor");
                        return t
                    },
                    hasDOMNode: function(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: a = !1
                            } = n,
                            o = e_.toDOMNode(e, e);
                        try {
                            r = P(t) ? t : t.parentElement
                        } catch (e) {
                            if (e instanceof Error && !e.message.includes('Permission denied to access property "nodeType"')) throw e
                        }
                        return !!r && r.closest("[data-slate-editor]") === o && (!a || !!r.isContentEditable || "boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === o || !!r.getAttribute("data-slate-zero-width"))
                    },
                    hasEditableTarget: (e, t) => D(t) && e_.hasDOMNode(e, t, {
                        editable: !0
                    }),
                    hasRange: (e, t) => {
                        var {
                            anchor: r,
                            focus: n
                        } = t;
                        return E.KE.hasPath(e, r.path) && E.KE.hasPath(e, n.path)
                    },
                    hasSelectableTarget: (e, t) => e_.hasEditableTarget(e, t) || e_.isTargetInsideNonReadonlyVoid(e, t),
                    hasTarget: (e, t) => D(t) && e_.hasDOMNode(e, t),
                    insertData: (e, t) => {
                        e.insertData(t)
                    },
                    insertFragmentData: (e, t) => e.insertFragmentData(t),
                    insertTextData: (e, t) => e.insertTextData(t),
                    isComposing: e => !!ey.get(e),
                    isFocused: e => !!ew.get(e),
                    isReadOnly: e => !!eb.get(e),
                    isTargetInsideNonReadonlyVoid: (e, t) => {
                        if (eb.get(e)) return !1;
                        var r = e_.hasTarget(e, t) && e_.toSlateNode(e, t);
                        return E.Hg.isElement(r) && E.KE.isVoid(e, r)
                    },
                    setFragmentData: (e, t, r) => e.setFragmentData(t, r),
                    toDOMNode: (e, t) => {
                        var r = em.get(e),
                            n = E.KE.isEditor(t) ? ef.get(e) : null == r ? void 0 : r.get(e_.findKey(e, t));
                        if (!n) throw Error("Cannot resolve a DOM node from Slate node: ".concat(E.h6.stringify(t)));
                        return n
                    },
                    toDOMPoint: (e, t) => {
                        var [r] = E.KE.node(e, t.path), n = e_.toDOMNode(e, r);
                        E.KE.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        for (var a = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), o = 0, i = 0; i < a.length; i++) {
                            var s = a[i],
                                l = s.childNodes[0];
                            if (null != l && null != l.textContent) {
                                var {
                                    length: c
                                } = l.textContent, d = s.getAttribute("data-slate-length"), u = o + (null == d ? c : parseInt(d, 10)), f = a[i + 1];
                                if (t.offset === u && null != f && f.hasAttribute("data-slate-mark-placeholder")) {
                                    var h, p, v = f.childNodes[0];
                                    h = [v instanceof O ? v : f, null !== (p = f.textContent) && void 0 !== p && p.startsWith("\uFEFF") ? 1 : 0];
                                    break
                                }
                                if (t.offset <= u) {
                                    h = [l, Math.min(c, Math.max(0, t.offset - o))];
                                    break
                                }
                                o = u
                            }
                        }
                        if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(E.h6.stringify(t)));
                        return h
                    },
                    toDOMRange: (e, t) => {
                        var {
                            anchor: r,
                            focus: n
                        } = t, a = E.Q6.isBackward(t), o = e_.toDOMPoint(e, r), i = E.Q6.isCollapsed(t) ? o : e_.toDOMPoint(e, n), s = e_.getWindow(e).document.createRange(), [l, c] = a ? i : o, [d, u] = a ? o : i, f = !!(P(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"), h = !!(P(d) ? d : d.parentElement).getAttribute("data-slate-zero-width");
                        return s.setStart(l, f ? 1 : c), s.setEnd(d, h ? 1 : u), s
                    },
                    toSlateNode: (e, t) => {
                        var r = P(t) ? t : t.parentElement;
                        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                        var n = r ? ep.get(r) : null;
                        if (!n) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                        return n
                    },
                    toSlatePoint: (e, t, r) => {
                        var {
                            exactMatch: n,
                            suppressThrow: a,
                            searchDirection: o = "backward"
                        } = r, [i, s] = n ? t : _(t), l = i.parentNode, c = null, d = 0;
                        if (l) {
                            var u = e_.toDOMNode(e, e),
                                f = l.closest('[data-slate-void="true"]'),
                                h = f && u.contains(f) ? f : null,
                                p = l.closest('[contenteditable="false"]'),
                                v = p && u.contains(p) ? p : null,
                                g = l.closest("[data-slate-leaf]"),
                                m = null;
                            if (g) {
                                if (c = g.closest('[data-slate-node="text"]')) {
                                    var b = e_.getWindow(e).document.createRange();
                                    b.setStart(c, 0), b.setEnd(i, s);
                                    var w = b.cloneContents();
                                    [...Array.prototype.slice.call(w.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(w.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                        if (U && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                            e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                            return
                                        }
                                        e.parentNode.removeChild(e)
                                    }), d = w.textContent.length, m = c
                                }
                            } else if (h) {
                                for (var y = h.querySelectorAll("[data-slate-leaf]"), k = 0; k < y.length; k++) {
                                    var x = y[k];
                                    if (e_.hasDOMNode(e, x)) {
                                        g = x;
                                        break
                                    }
                                }
                                g ? (c = g.closest('[data-slate-node="text"]'), d = (m = g).textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                                    d -= e.textContent.length
                                })) : d = 1
                            } else if (v) {
                                var O, C, S, P, D = e => e ? e.querySelectorAll("[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])") : [],
                                    T = v.closest('[data-slate-node="element"]');
                                (g = "forward" === o ? null !== (S = [...D(T), ...D(null == T ? void 0 : T.nextElementSibling)].find(e => H(v, e))) && void 0 !== S ? S : null : null !== (P = [...D(null == T ? void 0 : T.previousElementSibling), ...D(T)].findLast(e => z(v, e))) && void 0 !== P ? P : null) && (c = g.closest('[data-slate-node="text"]'), m = g, "forward" === o ? d = 0 : (d = m.textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                                    d -= e.textContent.length
                                })))
                            }
                            m && d === m.textContent.length && U && "z" === m.getAttribute("data-slate-zero-width") && null !== (O = m.textContent) && void 0 !== O && O.startsWith("\uFEFF") && (l.hasAttribute("data-slate-zero-width") || V && null !== (C = m.textContent) && void 0 !== C && C.endsWith("\n\n")) && d--
                        }
                        if (U && !c && !n) {
                            var B = l.hasAttribute("data-slate-node") ? l : l.closest("[data-slate-node]");
                            if (B && e_.hasDOMNode(e, B, {
                                    editable: !0
                                })) {
                                var M = e_.toSlateNode(e, B),
                                    {
                                        path: F,
                                        offset: j
                                    } = E.KE.start(e, e_.findPath(e, M));
                                return B.querySelector("[data-slate-leaf]") || (j = s), {
                                    path: F,
                                    offset: j
                                }
                            }
                        }
                        if (!c) {
                            if (a) return null;
                            throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                        }
                        var K = e_.toSlateNode(e, c);
                        return {
                            path: e_.findPath(e, K),
                            offset: d
                        }
                    },
                    toSlateRange: (e, t, r) => {
                        var n, a, o, i, s, l, {
                            exactMatch: c,
                            suppressThrow: d
                        } = r;
                        if (T(t) ? t.anchorNode : t.startContainer) {
                            if (T(t)) {
                                if (V && t.rangeCount > 1) {
                                    i = t.focusNode;
                                    var u = t.getRangeAt(0),
                                        f = t.getRangeAt(t.rangeCount - 1);
                                    if (i instanceof HTMLTableRowElement && u.startContainer instanceof HTMLTableRowElement && f.startContainer instanceof HTMLTableRowElement) {
                                        function h(e) {
                                            return e.childElementCount > 0 ? h(e.children[0]) : e
                                        }
                                        var p = u.startContainer,
                                            v = f.startContainer,
                                            g = h(p.children[u.startOffset]),
                                            m = h(v.children[f.startOffset]);
                                        s = 0, a = m.childNodes.length > 0 ? m.childNodes[0] : m, i = g.childNodes.length > 0 ? g.childNodes[0] : g, o = m instanceof HTMLElement ? m.innerHTML.length : 0
                                    } else u.startContainer === i ? (a = f.endContainer, o = f.endOffset, s = u.startOffset) : (a = u.startContainer, o = u.endOffset, s = f.startOffset)
                                } else a = t.anchorNode, o = t.anchorOffset, i = t.focusNode, s = t.focusOffset;
                                l = $ && F(a) || V ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed
                            } else a = t.startContainer, o = t.startOffset, i = t.endContainer, s = t.endOffset, l = t.collapsed
                        }
                        if (null == a || null == i || null == o || null == s) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        V && null !== (n = i.textContent) && void 0 !== n && n.endsWith("\n\n") && s === i.textContent.length && s--;
                        var b = e_.toSlatePoint(e, [a, o], {
                            exactMatch: c,
                            suppressThrow: d
                        });
                        if (!b) return null;
                        var w = z(a, i) || a === i && s < o,
                            y = l ? b : e_.toSlatePoint(e, [i, s], {
                                exactMatch: c,
                                suppressThrow: d,
                                searchDirection: w ? "forward" : "backward"
                            });
                        if (!y) return null;
                        var k = {
                            anchor: b,
                            focus: y
                        };
                        return E.Q6.isExpanded(k) && E.Q6.isForward(k) && P(i) && E.KE.void(e, {
                            at: k.focus,
                            mode: "highest"
                        }) && (k = E.KE.unhangRange(e, k, {
                            voids: !0
                        })), k
                    }
                };

            function eF(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
            }

            function ej(e, t) {
                var {
                    start: r,
                    end: n,
                    text: a
                } = t, o = e.slice(r, n), i = function(e, t) {
                    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                        if (e.charAt(n) !== t.charAt(n)) return n;
                    return r
                }(o, a), s = Math.min(o.length - i, a.length - i), l = function(e, t, r) {
                    for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
                        if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1)) return a;
                    return n
                }(o, a, s), c = {
                    start: r + i,
                    end: n - l,
                    text: a.slice(i, a.length - l)
                };
                return c.start === c.end && 0 === c.text.length ? null : c
            }

            function eK(e, t) {
                var {
                    path: r,
                    offset: n
                } = t;
                if (!E.KE.hasPath(e, r)) return null;
                var a = E.bP.get(e, r);
                if (!E.EY.isText(a)) return null;
                var o = E.KE.above(e, {
                    match: t => E.Hg.isElement(t) && E.KE.isBlock(e, t),
                    at: r
                });
                if (!o) return null;
                for (; n > a.text.length;) {
                    var i = E.KE.next(e, {
                        at: r,
                        match: E.EY.isText
                    });
                    if (!i || !E.wA.isDescendant(i[1], o[1])) return null;
                    n -= a.text.length, a = i[0], r = i[1]
                }
                return {
                    path: r,
                    offset: n
                }
            }

            function eR(e, t) {
                var r = eK(e, t.anchor);
                if (!r) return null;
                if (E.Q6.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var n = eK(e, t.focus);
                return n ? {
                    anchor: r,
                    focus: n
                } : null
            }

            function eA(e, t, r) {
                var n = eS.get(e),
                    a = null == n ? void 0 : n.find(e => {
                        var {
                            path: r
                        } = e;
                        return E.wA.equals(r, t.path)
                    });
                if (!a || t.offset <= a.diff.start) return E.bR.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: o
                } = a;
                if (t.offset <= o.start + o.text.length) {
                    var i = {
                            path: t.path,
                            offset: o.start
                        },
                        s = E.bR.transform(i, r, {
                            affinity: "backward"
                        });
                    return s ? {
                        path: s.path,
                        offset: s.offset + t.offset - o.start
                    } : null
                }
                var l = {
                        path: t.path,
                        offset: t.offset - o.text.length + o.end - o.start
                    },
                    c = E.bR.transform(l, r, {
                        affinity: "backward"
                    });
                return c ? "split_node" === r.type && E.wA.equals(r.path, t.path) && l.offset < r.position && o.start < r.position ? c : {
                    path: c.path,
                    offset: c.offset + o.text.length - o.end + o.start
                } : null
            }

            function eN(e, t, r) {
                var n = eA(e, t.anchor, r);
                if (!n) return null;
                if (E.Q6.isCollapsed(t)) return {
                    anchor: n,
                    focus: n
                };
                var a = eA(e, t.focus, r);
                return a ? {
                    anchor: n,
                    focus: a
                } : null
            }
            var eI = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                eL = (e, t, r) => {
                    var n = e_.toDOMRange(e, t).getBoundingClientRect(),
                        a = e_.toDOMRange(e, r).getBoundingClientRect();
                    return eI(n, a) && eI(a, n)
                },
                eW = (e, t) => {
                    var r = E.KE.range(e, E.Q6.end(t)),
                        n = Array.from(E.KE.positions(e, {
                            at: t
                        })),
                        a = 0,
                        o = n.length,
                        i = Math.floor(o / 2);
                    if (eL(e, E.KE.range(e, n[a]), r)) return E.KE.range(e, n[a], r);
                    if (n.length < 2) return E.KE.range(e, n[n.length - 1], r);
                    for (; i !== n.length && i !== a;) eL(e, E.KE.range(e, n[i]), r) ? o = i : a = i, i = Math.floor((a + o) / 2);
                    return E.KE.range(e, n[a], r)
                };

            function ez(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eH(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ez(Object(r), !0).forEach(function(t) {
                        eo(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ez(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eQ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        {
                            apply: r,
                            onChange: n,
                            deleteBackward: a,
                            addMark: o,
                            removeMark: i
                        } = e;
                    return em.set(e, new WeakMap), e.addMark = (t, r) => {
                        var n, a;
                        null === (n = ex.get(e)) || void 0 === n || n(), !eO.get(e) && null !== (a = eS.get(e)) && void 0 !== a && a.length && eO.set(e, null), eC.delete(e), o(t, r)
                    }, e.removeMark = t => {
                        var r;
                        !eO.get(e) && null !== (r = eS.get(e)) && void 0 !== r && r.length && eO.set(e, null), eC.delete(e), i(t)
                    }, e.deleteBackward = t => {
                        if ("line" !== t) return a(t);
                        if (e.selection && E.Q6.isCollapsed(e.selection)) {
                            var r = E.KE.above(e, {
                                match: t => E.Hg.isElement(t) && E.KE.isBlock(e, t),
                                at: e.selection
                            });
                            if (r) {
                                var [, n] = r, o = E.KE.range(e, n, e.selection.anchor), i = eW(e, o);
                                E.Q6.isCollapsed(i) || E.gB.delete(e, {
                                    at: i
                                })
                            }
                        }
                    }, e.apply = t => {
                        var n = [],
                            a = [],
                            o = eS.get(e);
                        if (null != o && o.length) {
                            var i = o.map(e => (function(e, t) {
                                var {
                                    path: r,
                                    diff: n,
                                    id: a
                                } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!E.wA.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset <= n.start) return {
                                            diff: {
                                                start: t.text.length + n.start,
                                                end: t.text.length + n.end,
                                                text: n.text
                                            },
                                            id: a,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end + t.text.length,
                                                text: n.text
                                            },
                                            id: a,
                                            path: r
                                        };
                                    case "remove_text":
                                        if (!E.wA.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset + t.text.length <= n.start) return {
                                            diff: {
                                                start: n.start - t.text.length,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            },
                                            id: a,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            },
                                            id: a,
                                            path: r
                                        };
                                    case "split_node":
                                        if (!E.wA.equals(t.path, r) || t.position >= n.end) return {
                                            diff: n,
                                            id: a,
                                            path: E.wA.transform(r, t, {
                                                affinity: "backward"
                                            })
                                        };
                                        if (t.position > n.start) return {
                                            diff: {
                                                start: n.start,
                                                end: Math.min(t.position, n.end),
                                                text: n.text
                                            },
                                            id: a,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start - t.position,
                                                end: n.end - t.position,
                                                text: n.text
                                            },
                                            id: a,
                                            path: E.wA.transform(r, t, {
                                                affinity: "forward"
                                            })
                                        };
                                    case "merge_node":
                                        if (!E.wA.equals(t.path, r)) return {
                                            diff: n,
                                            id: a,
                                            path: E.wA.transform(r, t)
                                        };
                                        return {
                                            diff: {
                                                start: n.start + t.position,
                                                end: n.end + t.position,
                                                text: n.text
                                            },
                                            id: a,
                                            path: E.wA.transform(r, t)
                                        }
                                }
                                var o = E.wA.transform(r, t);
                                return o ? {
                                    diff: n,
                                    path: o,
                                    id: a
                                } : null
                            })(e, t)).filter(Boolean);
                            eS.set(e, i)
                        }
                        var s = eD.get(e);
                        s && eD.set(e, eN(e, s, t));
                        var l = eP.get(e);
                        if (null != l && l.at) {
                            var c = E.bR.isPoint(null == l ? void 0 : l.at) ? eA(e, l.at, t) : eN(e, l.at, t);
                            eP.set(e, c ? eH(eH({}, l), {}, {
                                at: c
                            }) : null)
                        }
                        switch (t.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                n.push(...eq(e, t.path));
                                break;
                            case "set_selection":
                                null === (d = eE.get(e)) || void 0 === d || d.unref(), eE.delete(e);
                                break;
                            case "insert_node":
                            case "remove_node":
                                n.push(...eq(e, E.wA.parent(t.path)));
                                break;
                            case "merge_node":
                                n.push(...eq(e, E.wA.previous(t.path)));
                                break;
                            case "move_node":
                                n.push(...eq(e, E.wA.common(E.wA.parent(t.path), E.wA.parent(t.newPath)))), E.wA.isBefore(t.path, t.newPath) ? (n.push(...eq(e, E.wA.parent(t.path))), u = t.newPath) : (n.push(...eq(e, E.wA.parent(t.newPath))), u = t.path);
                                var d, u, f = E.bP.get(e, E.wA.parent(u)),
                                    h = e_.findKey(e, f);
                                a.push([E.KE.pathRef(e, E.wA.parent(u)), h])
                        }
                        switch (r(t), t.type) {
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "move_node":
                            case "split_node":
                            case "insert_text":
                            case "remove_text":
                            case "set_selection":
                                el.set(e, !0)
                        }
                        for (var [p, v] of n) {
                            var [g] = E.KE.node(e, p);
                            eg.set(g, v)
                        }
                        for (var [m, b] of a) {
                            if (m.current) {
                                var [w] = E.KE.node(e, m.current);
                                eg.set(w, b)
                            }
                            m.unref()
                        }
                    }, e.setFragmentData = r => {
                        var {
                            selection: n
                        } = e;
                        if (n) {
                            var [a, o] = E.Q6.edges(n), i = E.KE.void(e, {
                                at: a.path
                            }), s = E.KE.void(e, {
                                at: o.path
                            });
                            if (!E.Q6.isCollapsed(n) || i) {
                                var l = e_.toDOMRange(e, n),
                                    c = l.cloneContents(),
                                    d = c.childNodes[0];
                                if (c.childNodes.forEach(e => {
                                        e.textContent && "" !== e.textContent.trim() && (d = e)
                                    }), s) {
                                    var [u] = s, f = l.cloneRange(), h = e_.toDOMNode(e, u);
                                    f.setEndAfter(h), c = f.cloneContents()
                                }
                                if (i && (d = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    }), B(d)) {
                                    var p = d.ownerDocument.createElement("span");
                                    p.style.whiteSpace = "pre", p.appendChild(d), c.appendChild(p), d = p
                                }
                                var v = JSON.stringify(e.getFragment()),
                                    g = window.btoa(encodeURIComponent(v));
                                d.setAttribute("data-slate-fragment", g), r.setData("application/".concat(t), g);
                                var m = c.ownerDocument.createElement("div");
                                return m.appendChild(c), m.setAttribute("hidden", "true"), c.ownerDocument.body.appendChild(m), r.setData("text/html", m.innerHTML), r.setData("text/plain", R(m)), c.ownerDocument.body.removeChild(m), r
                            }
                        }
                    }, e.insertData = t => {
                        e.insertFragmentData(t) || e.insertTextData(t)
                    }, e.insertFragmentData = r => {
                        var n = r.getData("application/".concat(t)) || N(r);
                        if (n) {
                            var a = JSON.parse(decodeURIComponent(window.atob(n)));
                            return e.insertFragment(a), !0
                        }
                        return !1
                    }, e.insertTextData = t => {
                        var r = t.getData("text/plain");
                        if (r) {
                            var n = r.split(/\r\n|\r|\n/),
                                a = !1;
                            for (var o of n) a && E.gB.splitNodes(e, {
                                always: !0
                            }), e.insertText(o), a = !0;
                            return !0
                        }
                        return !1
                    }, e.onChange = t => {
                        var r = ek.get(e);
                        r && r(t), n(t)
                    }, e
                },
                eq = (e, t) => {
                    var r = [];
                    for (var [n, a] of E.KE.levels(e, {
                            at: t
                        })) {
                        var o = e_.findKey(e, n);
                        r.push([a, o])
                    }
                    return r
                },
                eU = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    insertSoftBreak: "shift+enter",
                    splitBlock: "enter",
                    undo: "mod+z"
                },
                eV = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                eY = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                eX = e => {
                    var t = eU[e],
                        r = eV[e],
                        n = eY[e],
                        a = t && (0, k.v_)(t),
                        o = r && (0, k.v_)(r),
                        i = n && (0, k.v_)(n);
                    return e => !!(a && a(e) || q && o && o(e) || !q && i && i(e))
                },
                e$ = {
                    isBold: eX("bold"),
                    isCompose: eX("compose"),
                    isMoveBackward: eX("moveBackward"),
                    isMoveForward: eX("moveForward"),
                    isDeleteBackward: eX("deleteBackward"),
                    isDeleteForward: eX("deleteForward"),
                    isDeleteLineBackward: eX("deleteLineBackward"),
                    isDeleteLineForward: eX("deleteLineForward"),
                    isDeleteWordBackward: eX("deleteWordBackward"),
                    isDeleteWordForward: eX("deleteWordForward"),
                    isExtendBackward: eX("extendBackward"),
                    isExtendForward: eX("extendForward"),
                    isExtendLineBackward: eX("extendLineBackward"),
                    isExtendLineForward: eX("extendLineForward"),
                    isItalic: eX("italic"),
                    isMoveLineBackward: eX("moveLineBackward"),
                    isMoveLineForward: eX("moveLineForward"),
                    isMoveWordBackward: eX("moveWordBackward"),
                    isMoveWordForward: eX("moveWordForward"),
                    isRedo: eX("redo"),
                    isSoftBreak: eX("insertSoftBreak"),
                    isSplitBlock: eX("splitBlock"),
                    isTransposeCharacter: eX("transposeCharacter"),
                    isUndo: eX("undo")
                };

            function eG(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var eJ = ["anchor", "focus"],
                eZ = ["anchor", "focus"];

            function e0(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e1(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e0(Object(r), !0).forEach(function(t) {
                        eo(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e0(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e6 = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]),
                e2 = (e, t) => {
                    var r = eG(e, eJ),
                        n = eG(t, eZ);
                    return e[eB] === t[eB] && e6(r, n)
                },
                e3 = (e, t) => {
                    if (e === t) return !0;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            a = t[r];
                        if (!E.Q6.equals(n, a) || !e2(n, a)) return !1
                    }
                    return !0
                },
                e5 = (e, t) => {
                    if (e === t) return !0;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            a = t[r];
                        if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !e2(n, a)) return !1
                    }
                    return !0
                },
                e9 = (e, t, r) => {
                    var n = Array.from(t.children, () => []);
                    if (0 === r.length) return n;
                    var a = e_.findPath(e, t),
                        o = a.length,
                        i = E.KE.range(e, a),
                        s = Array(t.children.length),
                        l = t => {
                            var r = s[t];
                            if (r) return r;
                            var n = E.KE.range(e, [...a, t]);
                            return s[t] = n, n
                        };
                    for (var c of r) {
                        var d = E.Q6.intersection(i, c);
                        if (d)
                            for (var [u, f] = E.Q6.edges(d), h = u.path[o], p = f.path[o], v = h; v <= p; v++) {
                                var g = n[v];
                                if (g) {
                                    var m = l(v),
                                        b = E.Q6.intersection(m, c);
                                    b && g.push(e1(e1({}, c), b))
                                }
                            }
                    }
                    return n
                },
                e4 = [],
                e7 = "ResizeObserver loop completed with undelivered notifications.",
                e8 = function() {
                    var e;
                    "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
                        message: e7
                    }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = e7), window.dispatchEvent(e)
                };
            ! function(e) {
                e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
            }(o || (o = {}));
            var te = function(e) {
                    return Object.freeze(e)
                },
                tt = function(e, t) {
                    this.inlineSize = e, this.blockSize = t, te(this)
                },
                tr = function() {
                    function e(e, t, r, n) {
                        return this.x = e, this.y = t, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, te(this)
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            x: this.x,
                            y: this.y,
                            top: this.top,
                            right: this.right,
                            bottom: this.bottom,
                            left: this.left,
                            width: this.width,
                            height: this.height
                        }
                    }, e.fromRect = function(t) {
                        return new e(t.x, t.y, t.width, t.height)
                    }, e
                }(),
                tn = function(e) {
                    return e instanceof SVGElement && "getBBox" in e
                },
                ta = function(e) {
                    if (tn(e)) {
                        var t = e.getBBox(),
                            r = t.width,
                            n = t.height;
                        return !r && !n
                    }
                    var a = e.offsetWidth,
                        o = e.offsetHeight;
                    return !(a || o || e.getClientRects().length)
                },
                to = function(e) {
                    if (e instanceof Element) return !0;
                    var t, r = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
                    return !!(r && e instanceof r.Element)
                },
                ti = function(e) {
                    switch (e.tagName) {
                        case "INPUT":
                            if ("image" !== e.type) break;
                        case "VIDEO":
                        case "AUDIO":
                        case "EMBED":
                        case "OBJECT":
                        case "CANVAS":
                        case "IFRAME":
                        case "IMG":
                            return !0
                    }
                    return !1
                },
                ts = "undefined" != typeof window ? window : {},
                tl = new WeakMap,
                tc = /auto|scroll/,
                td = /^tb|vertical/,
                tu = /msie|trident/i.test(ts.navigator && ts.navigator.userAgent),
                tf = function(e) {
                    return parseFloat(e || "0")
                },
                th = function(e, t, r) {
                    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), new tt((r ? t : e) || 0, (r ? e : t) || 0)
                },
                tp = te({
                    devicePixelContentBoxSize: th(),
                    borderBoxSize: th(),
                    contentBoxSize: th(),
                    contentRect: new tr(0, 0, 0, 0)
                }),
                tv = function(e, t) {
                    if (void 0 === t && (t = !1), tl.has(e) && !t) return tl.get(e);
                    if (ta(e)) return tl.set(e, tp), tp;
                    var r = getComputedStyle(e),
                        n = tn(e) && e.ownerSVGElement && e.getBBox(),
                        a = !tu && "border-box" === r.boxSizing,
                        o = td.test(r.writingMode || ""),
                        i = !n && tc.test(r.overflowY || ""),
                        s = !n && tc.test(r.overflowX || ""),
                        l = n ? 0 : tf(r.paddingTop),
                        c = n ? 0 : tf(r.paddingRight),
                        d = n ? 0 : tf(r.paddingBottom),
                        u = n ? 0 : tf(r.paddingLeft),
                        f = n ? 0 : tf(r.borderTopWidth),
                        h = n ? 0 : tf(r.borderRightWidth),
                        p = n ? 0 : tf(r.borderBottomWidth),
                        v = n ? 0 : tf(r.borderLeftWidth),
                        g = u + c,
                        m = l + d,
                        b = v + h,
                        w = f + p,
                        y = s ? e.offsetHeight - w - e.clientHeight : 0,
                        E = i ? e.offsetWidth - b - e.clientWidth : 0,
                        k = n ? n.width : tf(r.width) - (a ? g + b : 0) - E,
                        x = n ? n.height : tf(r.height) - (a ? m + w : 0) - y,
                        O = k + g + E + b,
                        C = x + m + y + w,
                        S = te({
                            devicePixelContentBoxSize: th(Math.round(k * devicePixelRatio), Math.round(x * devicePixelRatio), o),
                            borderBoxSize: th(O, C, o),
                            contentBoxSize: th(k, x, o),
                            contentRect: new tr(u, l, k, x)
                        });
                    return tl.set(e, S), S
                },
                tg = function(e, t, r) {
                    var n = tv(e, r),
                        a = n.borderBoxSize,
                        i = n.contentBoxSize,
                        s = n.devicePixelContentBoxSize;
                    switch (t) {
                        case o.DEVICE_PIXEL_CONTENT_BOX:
                            return s;
                        case o.BORDER_BOX:
                            return a;
                        default:
                            return i
                    }
                },
                tm = function(e) {
                    var t = tv(e);
                    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = te([t.borderBoxSize]), this.contentBoxSize = te([t.contentBoxSize]), this.devicePixelContentBoxSize = te([t.devicePixelContentBoxSize])
                },
                tb = function(e) {
                    if (ta(e)) return 1 / 0;
                    for (var t = 0, r = e.parentNode; r;) t += 1, r = r.parentNode;
                    return t
                },
                tw = function() {
                    var e = 1 / 0,
                        t = [];
                    e4.forEach(function(r) {
                        if (0 !== r.activeTargets.length) {
                            var n = [];
                            r.activeTargets.forEach(function(t) {
                                var r = new tm(t.target),
                                    a = tb(t.target);
                                n.push(r), t.lastReportedSize = tg(t.target, t.observedBox), a < e && (e = a)
                            }), t.push(function() {
                                r.callback.call(r.observer, n, r.observer)
                            }), r.activeTargets.splice(0, r.activeTargets.length)
                        }
                    });
                    for (var r = 0; r < t.length; r++)(0, t[r])();
                    return e
                },
                ty = function(e) {
                    e4.forEach(function(t) {
                        t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
                            r.isActive() && (tb(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r))
                        })
                    })
                },
                tE = function() {
                    var e = 0;
                    for (ty(0); e4.some(function(e) {
                            return e.activeTargets.length > 0
                        });) ty(e = tw());
                    return e4.some(function(e) {
                        return e.skippedTargets.length > 0
                    }) && e8(), e > 0
                },
                tk = [],
                tx = function(e) {
                    if (!i) {
                        var t = 0,
                            r = document.createTextNode("");
                        new MutationObserver(function() {
                            return tk.splice(0).forEach(function(e) {
                                return e()
                            })
                        }).observe(r, {
                            characterData: !0
                        }), i = function() {
                            r.textContent = "".concat(t ? t-- : t++)
                        }
                    }
                    tk.push(e), i()
                },
                tO = function(e) {
                    tx(function() {
                        requestAnimationFrame(e)
                    })
                },
                tC = 0,
                tS = {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                },
                tP = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                tD = function(e) {
                    return void 0 === e && (e = 0), Date.now() + e
                },
                tT = !1,
                tB = new(function() {
                    function e() {
                        var e = this;
                        this.stopped = !0, this.listener = function() {
                            return e.schedule()
                        }
                    }
                    return e.prototype.run = function(e) {
                        var t = this;
                        if (void 0 === e && (e = 250), !tT) {
                            tT = !0;
                            var r = tD(e);
                            tO(function() {
                                var n = !1;
                                try {
                                    n = tE()
                                } finally {
                                    if (tT = !1, e = r - tD(), !tC) return;
                                    n ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                                }
                            })
                        }
                    }, e.prototype.schedule = function() {
                        this.stop(), this.run()
                    }, e.prototype.observe = function() {
                        var e = this,
                            t = function() {
                                return e.observer && e.observer.observe(document.body, tS)
                            };
                        document.body ? t() : ts.addEventListener("DOMContentLoaded", t)
                    }, e.prototype.start = function() {
                        var e = this;
                        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), tP.forEach(function(t) {
                            return ts.addEventListener(t, e.listener, !0)
                        }))
                    }, e.prototype.stop = function() {
                        var e = this;
                        this.stopped || (this.observer && this.observer.disconnect(), tP.forEach(function(t) {
                            return ts.removeEventListener(t, e.listener, !0)
                        }), this.stopped = !0)
                    }, e
                }()),
                tM = function(e) {
                    !tC && e > 0 && tB.start(), (tC += e) || tB.stop()
                },
                t_ = function() {
                    function e(e, t) {
                        this.target = e, this.observedBox = t || o.CONTENT_BOX, this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }
                    return e.prototype.isActive = function() {
                        var e, t = tg(this.target, this.observedBox, !0);
                        return !tn(e = this.target) && !ti(e) && "inline" === getComputedStyle(e).display && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                    }, e
                }(),
                tF = function(e, t) {
                    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t
                },
                tj = new WeakMap,
                tK = function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r].target === t) return r;
                    return -1
                },
                tR = function() {
                    function e() {}
                    return e.connect = function(e, t) {
                        var r = new tF(e, t);
                        tj.set(e, r)
                    }, e.observe = function(e, t, r) {
                        var n = tj.get(e),
                            a = 0 === n.observationTargets.length;
                        0 > tK(n.observationTargets, t) && (a && e4.push(n), n.observationTargets.push(new t_(t, r && r.box)), tM(1), tB.schedule())
                    }, e.unobserve = function(e, t) {
                        var r = tj.get(e),
                            n = tK(r.observationTargets, t),
                            a = 1 === r.observationTargets.length;
                        n >= 0 && (a && e4.splice(e4.indexOf(r), 1), r.observationTargets.splice(n, 1), tM(-1))
                    }, e.disconnect = function(e) {
                        var t = this,
                            r = tj.get(e);
                        r.observationTargets.slice().forEach(function(r) {
                            return t.unobserve(e, r.target)
                        }), r.activeTargets.splice(0, r.activeTargets.length)
                    }, e
                }(),
                tA = function() {
                    function e(e) {
                        if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if ("function" != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        tR.connect(this, e)
                    }
                    return e.prototype.observe = function(e, t) {
                        if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!to(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        tR.observe(this, e, t)
                    }, e.prototype.unobserve = function(e) {
                        if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!to(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        tR.unobserve(this, e)
                    }, e.prototype.disconnect = function() {
                        tR.disconnect(this)
                    }, e.toString = function() {
                        return "function ResizeObserver () { [polyfill code] }"
                    }, e
                }(),
                tN = r(47650);

            function tI(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }

            function tL(e) {
                return (tL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function tW(e, t, r) {
                var n;
                return n = function(e, t) {
                    if ("object" !== tL(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== tL(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === tL(n) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var tz = (0, h.createContext)(null),
                tH = () => {
                    var e = (0, h.useContext)(tz);
                    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                tQ = e_;

            function tq(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tU(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tq(Object(r), !0).forEach(function(t) {
                        tW(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tq(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tV = function() {},
                tY = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
                tX = er ? h.useLayoutEffect : h.useEffect,
                t$ = ["node"];

            function tG(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var tJ = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                },
                tZ = U ? e => {
                    var {
                        node: t
                    } = e, r = tI(e, t$);
                    if (!U) return null;
                    var n = tH(),
                        a = function() {
                            var e = (0, h.useRef)(!1);
                            return (0, h.useEffect)(() => (e.current = !0, () => {
                                e.current = !1
                            }), []), e.current
                        }(),
                        [o] = (0, h.useState)(() => (function(e) {
                            var {
                                editor: t,
                                scheduleOnDOMSelectionChange: r,
                                onDOMSelectionChange: n
                            } = e, a = !1, o = null, i = null, s = null, l = 0, c = !1, d = () => {
                                var e = eD.get(t);
                                if (eD.delete(t), e) {
                                    var {
                                        selection: r
                                    } = t, n = eR(t, e);
                                    !n || r && E.Q6.equals(n, r) || E.gB.select(t, n)
                                }
                            }, u = () => {
                                var e = eP.get(t);
                                if (eP.delete(t), e) {
                                    if (e.at) {
                                        var r = E.bR.isPoint(e.at) ? eK(t, e.at) : eR(t, e.at);
                                        if (!r) return;
                                        var n = E.KE.range(t, r);
                                        t.selection && E.Q6.equals(t.selection, n) || E.gB.select(t, r)
                                    }
                                    e.run()
                                }
                            }, f = () => {
                                if (i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null), !m() && !g()) {
                                    d();
                                    return
                                }
                                a || (a = !0, setTimeout(() => a = !1)), g() && (a = "action");
                                var e = t.selection && E.KE.rangeRef(t, t.selection, {
                                    affinity: "forward"
                                });
                                eC.set(t, t.marks), tV("flush", eP.get(t), eS.get(t));
                                for (var o = m(); l = null === (f = eS.get(t)) || void 0 === f ? void 0 : f[0];) {
                                    var l, f, h, p = eO.get(t);
                                    void 0 !== p && (eO.delete(t), t.marks = p), p && !1 === c && (c = null);
                                    var v = function(e) {
                                        var {
                                            path: t,
                                            diff: r
                                        } = e;
                                        return {
                                            anchor: {
                                                path: t,
                                                offset: r.start
                                            },
                                            focus: {
                                                path: t,
                                                offset: r.end
                                            }
                                        }
                                    }(l);
                                    t.selection && E.Q6.equals(t.selection, v) || E.gB.select(t, v), l.diff.text ? E.KE.insertText(t, l.diff.text) : E.KE.deleteFragment(t), eS.set(t, null === (h = eS.get(t)) || void 0 === h ? void 0 : h.filter(e => {
                                        var {
                                            id: t
                                        } = e;
                                        return t !== l.id
                                    })), ! function(e, t) {
                                        var {
                                            path: r,
                                            diff: n
                                        } = t;
                                        if (!E.KE.hasPath(e, r)) return !1;
                                        var a = E.bP.get(e, r);
                                        if (!E.EY.isText(a)) return !1;
                                        if (n.start !== a.text.length || 0 === n.text.length) return a.text.slice(n.start, n.start + n.text.length) === n.text;
                                        var o = E.wA.next(r);
                                        if (!E.KE.hasPath(e, o)) return !1;
                                        var i = E.bP.get(e, o);
                                        return E.EY.isText(i) && i.text.startsWith(n.text)
                                    }(t, l) && (o = !1, eP.delete(t), eC.delete(t), a = "action", eD.delete(t), r.cancel(), n.cancel(), null == e || e.unref())
                                }
                                var b = null == e ? void 0 : e.unref();
                                if (!b || eD.get(t) || t.selection && E.Q6.equals(b, t.selection) || E.gB.select(t, b), g()) {
                                    u();
                                    return
                                }
                                o && r(), r.flush(), n.flush(), d();
                                var w = eC.get(t);
                                eC.delete(t), void 0 !== w && (t.marks = w, t.onChange())
                            }, h = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    r = eh.get(t);
                                if (r) {
                                    if (m() || e) {
                                        r.style.display = "none";
                                        return
                                    }
                                    r.style.removeProperty("display")
                                }
                            }, p = (e, r) => {
                                var n, a, o, i, s, c, d, u, f = null !== (u = eS.get(t)) && void 0 !== u ? u : [];
                                eS.set(t, f);
                                var p = E.bP.leaf(t, e),
                                    v = f.findIndex(t => E.wA.equals(t.path, e));
                                if (v < 0) {
                                    ej(p.text, r) && f.push({
                                        path: e,
                                        diff: r,
                                        id: l++
                                    }), h();
                                    return
                                }
                                var g = (n = p.text, o = Math.min((a = f[v].diff).start, r.start), i = Math.max(0, Math.min(a.start + a.text.length, r.end) - r.start), s = eF(n, a, r), c = Math.max(r.start + r.text.length, a.start + a.text.length + (a.start + a.text.length > r.start ? r.text.length : 0) - i), d = s.slice(o, c), ej(n, {
                                    start: o,
                                    end: Math.max(a.end, r.end - a.text.length + (a.end - a.start)),
                                    text: d
                                }));
                                if (!g) {
                                    f.splice(v, 1), h();
                                    return
                                }
                                f[v] = tU(tU({}, f[v]), {}, {
                                    diff: g
                                })
                            }, v = function(e) {
                                var {
                                    at: a
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                c = !1, eD.delete(t), r.cancel(), n.cancel(), g() && f(), eP.set(t, {
                                    at: a,
                                    run: e
                                }), s = setTimeout(f)
                            }, g = () => !!eP.get(t), m = () => {
                                var e;
                                return !!(null !== (e = eS.get(t)) && void 0 !== e && e.length)
                            }, b = e => {
                                eD.set(t, e), i && (clearTimeout(i), i = null);
                                var {
                                    selection: r
                                } = t;
                                if (e) {
                                    var n = !r || !E.wA.equals(r.anchor.path, e.anchor.path),
                                        a = !r || !E.wA.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                    (n && c || a) && (c = !1), (n || m()) && (i = setTimeout(f, 200))
                                }
                            }, w = () => {
                                g() || (s = setTimeout(f))
                            };
                            return {
                                flush: f,
                                scheduleFlush: w,
                                hasPendingDiffs: m,
                                hasPendingAction: g,
                                hasPendingChanges: () => g() || m(),
                                isFlushing: () => a,
                                handleUserSelect: b,
                                handleCompositionEnd: e => {
                                    o && clearTimeout(o), o = setTimeout(() => {
                                        ey.set(t, !1), f()
                                    }, 25)
                                },
                                handleCompositionStart: e => {
                                    ey.set(t, !0), o && (clearTimeout(o), o = null)
                                },
                                handleDOMBeforeInput: e => {
                                    if (i && (clearTimeout(i), i = null), !el.get(t)) {
                                        var {
                                            inputType: r
                                        } = e, n = null, a = e.dataTransfer || e.data || void 0;
                                        !1 !== c && "insertText" !== r && "insertCompositionText" !== r && (c = !1);
                                        var [o] = e.getTargetRanges();
                                        o && (n = tQ.toSlateRange(t, o, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        }));
                                        var s = tQ.getWindow(t).getSelection();
                                        if (!n && s && (o = s, n = tQ.toSlateRange(t, s, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            })), n = null !== (D = n) && void 0 !== D ? D : t.selection) {
                                            var l = !0;
                                            if (r.startsWith("delete")) {
                                                var d = r.endsWith("Backward") ? "backward" : "forward",
                                                    [u, f] = E.Q6.edges(n),
                                                    [h, g] = E.KE.leaf(t, u.path);
                                                if (E.Q6.isExpanded(n) && h.text.length === u.offset && 0 === f.offset) {
                                                    var m = E.KE.next(t, {
                                                        at: u.path,
                                                        match: E.EY.isText
                                                    });
                                                    m && E.wA.equals(m[1], f.path) && ("backward" === d ? (n = {
                                                        anchor: f,
                                                        focus: f
                                                    }, u = f, [h, g] = m) : (n = {
                                                        anchor: u,
                                                        focus: u
                                                    }, f = u))
                                                }
                                                var y = {
                                                        text: "",
                                                        start: u.offset,
                                                        end: f.offset
                                                    },
                                                    k = eS.get(t),
                                                    x = null == k ? void 0 : k.find(e => E.wA.equals(e.path, g)),
                                                    O = x ? [x.diff, y] : [y];
                                                if (0 === eF(h.text, ...O).length && (l = !1), E.Q6.isExpanded(n)) {
                                                    if (l && E.wA.equals(n.anchor.path, n.focus.path)) {
                                                        var C = {
                                                            path: n.anchor.path,
                                                            offset: u.offset
                                                        };
                                                        return b(E.KE.range(t, C, C)), p(n.anchor.path, {
                                                            text: "",
                                                            end: f.offset,
                                                            start: u.offset
                                                        })
                                                    }
                                                    return v(() => E.KE.deleteFragment(t, {
                                                        direction: d
                                                    }), {
                                                        at: n
                                                    })
                                                }
                                            }
                                            switch (r) {
                                                case "deleteByComposition":
                                                case "deleteByCut":
                                                case "deleteByDrag":
                                                    return v(() => E.KE.deleteFragment(t), {
                                                        at: n
                                                    });
                                                case "deleteContent":
                                                case "deleteContentForward":
                                                    var {
                                                        anchor: S
                                                    } = n;
                                                    if (l && E.Q6.isCollapsed(n)) {
                                                        var P = E.bP.leaf(t, S.path);
                                                        if (S.offset < P.text.length) return p(S.path, {
                                                            text: "",
                                                            start: S.offset,
                                                            end: S.offset + 1
                                                        })
                                                    }
                                                    return v(() => E.KE.deleteForward(t), {
                                                        at: n
                                                    });
                                                case "deleteContentBackward":
                                                    var D, B, {
                                                            anchor: M
                                                        } = n,
                                                        _ = T(o) ? o.isCollapsed : !!(null !== (B = o) && void 0 !== B && B.collapsed);
                                                    if (l && _ && E.Q6.isCollapsed(n) && M.offset > 0) return p(M.path, {
                                                        text: "",
                                                        start: M.offset - 1,
                                                        end: M.offset
                                                    });
                                                    return v(() => E.KE.deleteBackward(t), {
                                                        at: n
                                                    });
                                                case "deleteEntireSoftLine":
                                                    return v(() => {
                                                        E.KE.deleteBackward(t, {
                                                            unit: "line"
                                                        }), E.KE.deleteForward(t, {
                                                            unit: "line"
                                                        })
                                                    }, {
                                                        at: n
                                                    });
                                                case "deleteHardLineBackward":
                                                    return v(() => E.KE.deleteBackward(t, {
                                                        unit: "block"
                                                    }), {
                                                        at: n
                                                    });
                                                case "deleteSoftLineBackward":
                                                    return v(() => E.KE.deleteBackward(t, {
                                                        unit: "line"
                                                    }), {
                                                        at: n
                                                    });
                                                case "deleteHardLineForward":
                                                    return v(() => E.KE.deleteForward(t, {
                                                        unit: "block"
                                                    }), {
                                                        at: n
                                                    });
                                                case "deleteSoftLineForward":
                                                    return v(() => E.KE.deleteForward(t, {
                                                        unit: "line"
                                                    }), {
                                                        at: n
                                                    });
                                                case "deleteWordBackward":
                                                    return v(() => E.KE.deleteBackward(t, {
                                                        unit: "word"
                                                    }), {
                                                        at: n
                                                    });
                                                case "deleteWordForward":
                                                    return v(() => E.KE.deleteForward(t, {
                                                        unit: "word"
                                                    }), {
                                                        at: n
                                                    });
                                                case "insertLineBreak":
                                                    return v(() => E.KE.insertSoftBreak(t), {
                                                        at: n
                                                    });
                                                case "insertParagraph":
                                                    return v(() => E.KE.insertBreak(t), {
                                                        at: n
                                                    });
                                                case "insertCompositionText":
                                                case "deleteCompositionText":
                                                case "insertFromComposition":
                                                case "insertFromDrop":
                                                case "insertFromPaste":
                                                case "insertFromYank":
                                                case "insertReplacementText":
                                                case "insertText":
                                                    if (tY(a)) return v(() => tQ.insertData(t, a), {
                                                        at: n
                                                    });
                                                    var F = null != a ? a : "";
                                                    if (eO.get(t) && (F = F.replace("\uFEFF", "")), "insertText" === r && /.*\n.*\n$/.test(F) && (F = F.slice(0, -1)), F.includes("\n")) return v(() => {
                                                        var e = F.split("\n");
                                                        e.forEach((r, n) => {
                                                            r && E.KE.insertText(t, r), n !== e.length - 1 && E.KE.insertSoftBreak(t)
                                                        })
                                                    }, {
                                                        at: n
                                                    });
                                                    if (E.wA.equals(n.anchor.path, n.focus.path)) {
                                                        var [j, K] = E.Q6.edges(n), R = {
                                                            start: j.offset,
                                                            end: K.offset,
                                                            text: F
                                                        };
                                                        if (F && c && "insertCompositionText" === r) {
                                                            var A = c.start + c.text.search(/\S|$/);
                                                            R.start + R.text.search(/\S|$/) === A + 1 && R.end === c.start + c.text.length ? (R.start -= 1, c = null, w()) : c = !1
                                                        } else c = "insertText" === r && (null === c ? R : !!(c && E.Q6.isCollapsed(n)) && c.end + c.text.length === j.offset && tU(tU({}, c), {}, {
                                                            text: c.text + F
                                                        }));
                                                        if (l) {
                                                            p(j.path, R);
                                                            return
                                                        }
                                                    }
                                                    return v(() => E.KE.insertText(t, F), {
                                                        at: n
                                                    })
                                            }
                                        }
                                    }
                                },
                                handleKeyDown: e => {
                                    m() || (h(!0), setTimeout(h))
                                },
                                handleDomMutations: e => {
                                    if (!(m() || g()) && e.some(r => L(t, r, e))) {
                                        var r;
                                        null === (r = eT.get(t)) || void 0 === r || r()
                                    }
                                },
                                handleInput: () => {
                                    (g() || !m()) && f()
                                }
                            }
                        })(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? tG(Object(r), !0).forEach(function(t) {
                                    tW(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tG(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            editor: n
                        }, r)));
                    return ! function(e, t, r) {
                        var [n] = (0, h.useState)(() => new MutationObserver(t));
                        tX(() => {
                            n.takeRecords()
                        }), (0, h.useEffect)(() => {
                            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                            return n.observe(e.current, r), () => n.disconnect()
                        }, [n, e, r])
                    }(t, o.handleDomMutations, tJ), ex.set(n, o.scheduleFlush), a && o.flush(), o
                } : () => null;

            function t0(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var t1 = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: n,
                        text: a
                    } = e, o = tH(), i = tQ.findPath(o, a), s = E.wA.parent(i), l = !!r[eM];
                    return o.isVoid(n) ? h.createElement(t3, {
                        length: E.bP.string(n).length
                    }) : "" !== r.text || n.children[n.children.length - 1] !== a || o.isInline(n) || "" !== E.KE.string(o, s) ? "" === r.text ? h.createElement(t3, {
                        isMarkPlaceholder: l
                    }) : t && "\n" === r.text.slice(-1) ? h.createElement(t6, {
                        isTrailing: !0,
                        text: r.text
                    }) : h.createElement(t6, {
                        text: r.text
                    }) : h.createElement(t3, {
                        isLineBreak: !0,
                        isMarkPlaceholder: l
                    })
                },
                t6 = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, n = (0, h.useRef)(null), a = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [o] = (0, h.useState)(a);
                    return tX(() => {
                        var e = a();
                        n.current && n.current.textContent !== e && (n.current.textContent = e)
                    }), h.createElement(t2, {
                        ref: n
                    }, o)
                },
                t2 = (0, h.memo)((0, h.forwardRef)((e, t) => h.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children))),
                t3 = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: n = !1
                    } = e, a = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    return n && (a["data-slate-mark-placeholder"] = !0), h.createElement("span", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? t0(Object(r), !0).forEach(function(t) {
                                tW(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t0(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, a), U && r ? null : "\uFEFF", r ? h.createElement("br", null) : null)
                };

            function t5(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function t9(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? t5(Object(r), !0).forEach(function(t) {
                        tW(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t5(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var t4 = 300 * !!U;

            function t7(e) {
                e.current && (clearTimeout(e.current), e.current = null)
            }
            var t8 = e => h.createElement(rt, t9({}, e)),
                re = h.memo(e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: n,
                        parent: a,
                        renderPlaceholder: o,
                        renderLeaf: i = t8,
                        leafPosition: s
                    } = e, l = tH(), c = (0, h.useRef)(null), d = (0, h.useRef)(null), [u, f] = (0, h.useState)(!1), p = (0, h.useRef)(null), v = (0, h.useCallback)(e => {
                        if (! function(e, t) {
                                e.current && (e.current.disconnect(), t && (e.current = null))
                            }(c, null == e), null == e) {
                            var r;
                            eh.delete(l), null === (r = t.onPlaceholderResize) || void 0 === r || r.call(t, null)
                        } else eh.set(l, e), c.current || (c.current = new(window.ResizeObserver || tA)(() => {
                            var r;
                            null === (r = t.onPlaceholderResize) || void 0 === r || r.call(t, e)
                        })), c.current.observe(e), d.current = e
                    }, [d, t, l]), g = h.createElement(t1, {
                        isLast: r,
                        leaf: t,
                        parent: a,
                        text: n
                    }), m = !!t[eB];
                    if ((0, h.useEffect)(() => (m ? p.current || (p.current = setTimeout(() => {
                            f(!0), p.current = null
                        }, t4)) : (t7(p), f(!1)), () => t7(p)), [m, f]), m && u) {
                        var b = {
                            children: t.placeholder,
                            attributes: {
                                "data-slate-placeholder": !0,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    pointerEvents: "none",
                                    width: "100%",
                                    maxWidth: "100%",
                                    display: "block",
                                    opacity: "0.333",
                                    userSelect: "none",
                                    textDecoration: "none",
                                    WebkitUserModify: Y ? "inherit" : void 0
                                },
                                contentEditable: !1,
                                ref: v
                            }
                        };
                        g = h.createElement(h.Fragment, null, g, o(b))
                    }
                    return i({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: g,
                        leaf: t,
                        text: n,
                        leafPosition: s
                    })
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && E.EY.equals(t.leaf, e.leaf) && t.leaf[eB] === e.leaf[eB]),
                rt = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return h.createElement("span", t9({}, t), r)
                };

            function rr(e, t) {
                var r, [, n] = (0, h.useReducer)(e => e + 1, 0),
                    a = (0, h.useRef)(),
                    o = (0, h.useRef)(() => null),
                    i = (0, h.useRef)(null);
                try {
                    if (e !== o.current || a.current) {
                        var s = e();
                        r = t(i.current, s) ? i.current : s
                    } else r = i.current
                } catch (e) {
                    throw a.current && e instanceof Error && (e.message += "\nThe error may be correlated with this previous error:\n".concat(a.current.stack, "\n\n")), e
                }
                return o.current = e, i.current = r, a.current = void 0, [r, (0, h.useCallback)(() => {
                    try {
                        var e = o.current();
                        if (t(i.current, e)) return;
                        i.current = e
                    } catch (e) {
                        e instanceof Error ? a.current = e : a.current = Error(String(e))
                    }
                    n()
                }, [])]
            }
            var rn = (0, h.createContext)({}),
                ra = (e, t) => {
                    var r = tH(),
                        {
                            decorate: n,
                            addEventListener: a
                        } = (0, h.useContext)(rn),
                        [o, i] = rr(() => {
                            var t = tQ.findPath(r, e);
                            return n([e, t])
                        }, E.EY.isText(e) ? e5 : e3);
                    return tX(() => {
                        var e = a(i);
                        return i(), e
                    }, [a, i]), (0, h.useMemo)(() => [...o, ...t], [o, t])
                },
                ro = e => {
                    var t = (0, h.useRef)(new Set),
                        r = (0, h.useRef)(e);
                    tX(() => {
                        r.current = e, t.current.forEach(e => e())
                    }, [e]);
                    var n = (0, h.useCallback)(e => r.current(e), []),
                        a = (0, h.useCallback)(e => (t.current.add(e), () => {
                            t.current.delete(e)
                        }), []);
                    return (0, h.useMemo)(() => ({
                        decorate: n,
                        addEventListener: a
                    }), [n, a])
                };

            function ri(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rs(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ri(Object(r), !0).forEach(function(t) {
                        tW(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ri(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var rl = e => h.createElement(rd, rs({}, e)),
                rc = h.memo(e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: n,
                            renderPlaceholder: a,
                            renderLeaf: o,
                            renderText: i = rl,
                            text: s
                        } = e, l = tH(), c = (0, h.useRef)(null), d = ra(s, t), u = E.EY.decorations(s, d), f = tQ.findKey(l, s), p = [], v = 0; v < u.length; v++) {
                        var {
                            leaf: g,
                            position: m
                        } = u[v];
                        p.push(h.createElement(re, {
                            isLast: r && v === u.length - 1,
                            key: "".concat(f.id, "-").concat(v),
                            renderPlaceholder: a,
                            leaf: g,
                            leafPosition: m,
                            text: s,
                            parent: n,
                            renderLeaf: o
                        }))
                    }
                    var b = (0, h.useCallback)(e => {
                        var t = em.get(l);
                        e ? (null == t || t.set(f, e), ev.set(s, e), ep.set(e, s)) : (null == t || t.delete(f), ev.delete(s), c.current && ep.delete(c.current)), c.current = e
                    }, [c, l, f, s]);
                    return i({
                        text: s,
                        children: p,
                        attributes: {
                            "data-slate-node": "text",
                            ref: b
                        }
                    })
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderText === e.renderText && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && e5(t.decorations, e.decorations)),
                rd = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return h.createElement("span", rs({}, t), r)
                };

            function ru(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rf(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ru(Object(r), !0).forEach(function(t) {
                        tW(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var rh = e => h.createElement(rv, rf({}, e)),
                rp = h.memo(e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: n = rh,
                        renderChunk: a,
                        renderPlaceholder: o,
                        renderLeaf: i,
                        renderText: s
                    } = e, c = tH(), d = rT(), u = c.isInline(r), f = ra(r, t), p = tQ.findKey(c, r), v = (0, h.useCallback)(e => {
                        var t = em.get(c);
                        e ? (null == t || t.set(p, e), ev.set(r, e), ep.set(e, r)) : (null == t || t.delete(p), ev.delete(r))
                    }, [c, p, r]), g = rS({
                        decorations: f,
                        node: r,
                        renderElement: n,
                        renderChunk: a,
                        renderPlaceholder: o,
                        renderLeaf: i,
                        renderText: s
                    }), m = {
                        "data-slate-node": "element",
                        ref: v
                    };
                    if (u && (m["data-slate-inline"] = !0), !u && E.KE.hasInlines(c, r)) {
                        var b = E.bP.string(r),
                            w = l()(b);
                        "rtl" === w && (m.dir = w)
                    }
                    if (E.KE.isVoid(c, r)) {
                        m["data-slate-void"] = !0, !d && u && (m.contentEditable = !1);
                        var [
                            [y]
                        ] = E.bP.texts(r);
                        g = h.createElement(u ? "span" : "div", {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, h.createElement(rc, {
                            renderPlaceholder: o,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: y
                        })), ec.set(y, 0), ed.set(y, r)
                    }
                    return n({
                        attributes: m,
                        children: g,
                        element: r
                    })
                }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderChunk === t.renderChunk && e.renderText === t.renderText && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e3(e.decorations, t.decorations)),
                rv = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: n
                    } = e, a = tH().isInline(n) ? "span" : "div";
                    return h.createElement(a, rf(rf({}, t), {}, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                };
            class rg {
                constructor(e, t) {
                    var {
                        chunkSize: r,
                        debug: n
                    } = t;
                    tW(this, "root", void 0), tW(this, "chunkSize", void 0), tW(this, "debug", void 0), tW(this, "reachedEnd", void 0), tW(this, "pointerChunk", void 0), tW(this, "pointerIndex", void 0), tW(this, "pointerIndexStack", void 0), tW(this, "cachedPointerNode", void 0), this.root = e, this.chunkSize = r, this.debug = null != n && n, this.pointerChunk = e, this.pointerIndex = -1, this.pointerIndexStack = [], this.reachedEnd = !1, this.validateState()
                }
                readLeaf() {
                    if (this.reachedEnd) return null;
                    for (;;) {
                        if (this.pointerIndex + 1 < this.pointerSiblings.length) {
                            this.pointerIndex++, this.cachedPointerNode = void 0;
                            break
                        }
                        if ("root" === this.pointerChunk.type) return this.reachedEnd = !0, null;
                        this.exitChunk()
                    }
                    return this.validateState(), this.enterChunkUntilLeaf(!1), this.pointerNode
                }
                returnToPreviousLeaf() {
                    if (this.reachedEnd) {
                        this.reachedEnd = !1, this.enterChunkUntilLeaf(!0);
                        return
                    }
                    for (;;) {
                        if (this.pointerIndex >= 1) {
                            this.pointerIndex--, this.cachedPointerNode = void 0;
                            break
                        }
                        if ("root" === this.pointerChunk.type) {
                            this.pointerIndex = -1;
                            return
                        }
                        this.exitChunk()
                    }
                    this.validateState(), this.enterChunkUntilLeaf(!0)
                }
                insertBefore(e) {
                    this.returnToPreviousLeaf(), this.insertAfter(e), this.readLeaf()
                }
                insertAfter(e) {
                    if (0 !== e.length) {
                        for (var t = 0, r = 0;
                            "chunk" === this.pointerChunk.type && this.pointerIndex === this.pointerSiblings.length - 1;) {
                            var n = Math.min(this.chunkSize - this.pointerSiblings.length, e.length);
                            if (n > 0) {
                                var a = e.splice(0, n);
                                this.rawInsertAfter(a, t)
                            }
                            this.exitChunk(), t++
                        }
                        if (0 !== e.length) {
                            var o = this.savePointer(),
                                i = null;
                            if (this.readLeaf())
                                for (;
                                    "chunk" === this.pointerChunk.type && 0 === this.pointerIndex;) {
                                    var s = Math.min(this.chunkSize - this.pointerSiblings.length, e.length);
                                    if (s > 0) {
                                        var l = e.splice(-s, s);
                                        this.pointerIndex = -1, this.cachedPointerNode = void 0, this.rawInsertAfter(l, r), i || (i = this.savePointer())
                                    }
                                    this.exitChunk(), r++
                                }
                            this.restorePointer(o);
                            var c = Math.max(t, r);
                            this.rawInsertAfter(e, c), i && this.restorePointer(i), this.validateState()
                        }
                    }
                }
                remove() {
                    this.pointerSiblings.splice(this.pointerIndex--, 1), this.cachedPointerNode = void 0, 0 === this.pointerSiblings.length && "chunk" === this.pointerChunk.type ? (this.exitChunk(), this.remove()) : this.invalidateChunk(), this.validateState()
                }
                invalidateChunk() {
                    for (var e = this.pointerChunk;
                        "chunk" === e.type; e = e.parent) this.root.modifiedChunks.add(e)
                }
                get atStart() {
                    return "root" === this.pointerChunk.type && -1 === this.pointerIndex
                }
                get pointerSiblings() {
                    return this.pointerChunk.children
                }
                getPointerNode() {
                    return this.reachedEnd || -1 === this.pointerIndex ? null : this.pointerSiblings[this.pointerIndex]
                }
                get pointerNode() {
                    if (void 0 !== this.cachedPointerNode) return this.cachedPointerNode;
                    var e = this.getPointerNode();
                    return this.cachedPointerNode = e, e
                }
                getChunkPath(e) {
                    for (var t = [], r = e;
                        "chunk" === r.type; r = r.parent) {
                        var n = r.parent.children.indexOf(r);
                        if (-1 === n) return null;
                        t.unshift(n)
                    }
                    return t
                }
                savePointer() {
                    if (this.atStart) return "start";
                    if (!this.pointerNode) throw Error("Cannot save pointer when pointerNode is null");
                    return {
                        chunk: this.pointerChunk,
                        node: this.pointerNode
                    }
                }
                restorePointer(e) {
                    if ("start" === e) {
                        this.pointerChunk = this.root, this.pointerIndex = -1, this.pointerIndexStack = [], this.reachedEnd = !1, this.cachedPointerNode = void 0;
                        return
                    }
                    var {
                        chunk: t,
                        node: r
                    } = e, n = t.children.indexOf(r);
                    if (-1 === n) throw Error("Cannot restore point because saved node is no longer in saved chunk");
                    var a = this.getChunkPath(t);
                    if (!a) throw Error("Cannot restore point because saved chunk is no longer connected to root");
                    this.pointerChunk = t, this.pointerIndex = n, this.pointerIndexStack = a, this.reachedEnd = !1, this.cachedPointerNode = r, this.validateState()
                }
                enterChunk(e) {
                    var t;
                    if ((null === (t = this.pointerNode) || void 0 === t ? void 0 : t.type) !== "chunk") throw Error("Cannot enter non-chunk");
                    if (this.pointerIndexStack.push(this.pointerIndex), this.pointerChunk = this.pointerNode, this.pointerIndex = e ? this.pointerSiblings.length - 1 : 0, this.cachedPointerNode = void 0, this.validateState(), 0 === this.pointerChunk.children.length) throw Error("Cannot enter empty chunk")
                }
                enterChunkUntilLeaf(e) {
                    for (;
                        (null === (t = this.pointerNode) || void 0 === t ? void 0 : t.type) === "chunk";) {
                        var t;
                        this.enterChunk(e)
                    }
                }
                exitChunk() {
                    if ("root" === this.pointerChunk.type) throw Error("Cannot exit root");
                    var e = this.pointerChunk;
                    this.pointerChunk = e.parent, this.pointerIndex = this.pointerIndexStack.pop(), this.cachedPointerNode = void 0, this.validateState()
                }
                rawInsertAfter(e, t) {
                    if (0 !== e.length) {
                        for (var r = (e, t, n) => {
                                if (1 === n) return e;
                                for (var a = [], o = 0; o < this.chunkSize; o++) {
                                    var i = e.slice(o * n, (o + 1) * n);
                                    if (0 === i.length) break;
                                    var s = {
                                        type: "chunk",
                                        key: new es,
                                        parent: t,
                                        children: []
                                    };
                                    s.children = r(i, s, n / this.chunkSize), a.push(s)
                                }
                                return a
                            }, n = this.pointerSiblings.length + e.length, a = 0, o = this.chunkSize; o < n; o *= this.chunkSize) a++;
                        var i = Math.max(a, t),
                            s = Math.pow(this.chunkSize, i),
                            l = r(e, this.pointerChunk, s);
                        this.pointerSiblings.splice(this.pointerIndex + 1, 0, ...l), this.pointerIndex += l.length, this.cachedPointerNode = void 0, this.invalidateChunk(), this.validateState()
                    }
                }
                validateState() {
                    if (this.debug) {
                        var e = t => {
                            if ("chunk" === t.type) {
                                var {
                                    parent: r,
                                    children: n
                                } = t;
                                if (!r.children.includes(t)) throw Error("Debug: Chunk ".concat(t.key.id, " has an incorrect parent property"));
                                n.forEach(e)
                            }
                        };
                        if (this.root.children.forEach(e), void 0 !== this.cachedPointerNode && this.cachedPointerNode !== this.getPointerNode()) throw Error("Debug: The cached pointer is incorrect and has not been invalidated");
                        var t = this.getChunkPath(this.pointerChunk);
                        if (!t) throw Error("Debug: The pointer chunk is not connected to the root");
                        if (!E.wA.equals(this.pointerIndexStack, t)) throw Error("Debug: The cached index stack [".concat(this.pointerIndexStack.join(", "), "] does not match the path of the pointer chunk [").concat(t.join(", "), "]"))
                    }
                }
            }
            class rm {
                constructor(e, t) {
                    tW(this, "editor", void 0), tW(this, "children", void 0), tW(this, "cachedKeys", void 0), tW(this, "pointerIndex", void 0), this.editor = e, this.children = t, this.cachedKeys = Array(t.length), this.pointerIndex = 0
                }
                read(e) {
                    if (1 === e) return [this.children[this.pointerIndex++]];
                    var t = this.remaining(e);
                    return this.pointerIndex += e, t
                }
                remaining(e) {
                    return void 0 === e ? this.children.slice(this.pointerIndex) : this.children.slice(this.pointerIndex, this.pointerIndex + e)
                }
                get reachedEnd() {
                    return this.pointerIndex >= this.children.length
                }
                lookAhead(e, t) {
                    var r = this.children.indexOf(e, this.pointerIndex);
                    if (r > -1) return r - this.pointerIndex;
                    for (var n = this.pointerIndex; n < this.children.length; n++) {
                        var a = this.children[n];
                        if (this.findKey(a, n) === t) return n - this.pointerIndex
                    }
                    return -1
                }
                toChunkLeaves(e, t) {
                    return e.map((e, r) => ({
                        type: "leaf",
                        node: e,
                        key: this.findKey(e, t + r),
                        index: t + r
                    }))
                }
                findKey(e, t) {
                    var r = this.cachedKeys[t];
                    if (r) return r;
                    var n = tQ.findKey(this.editor, e);
                    return this.cachedKeys[t] = n, n
                }
            }
            var rb = (e, t) => {
                var r, {
                    chunkTree: n,
                    children: a,
                    chunkSize: o,
                    rerenderChildren: i = [],
                    onInsert: s,
                    onUpdate: l,
                    onIndexChange: c,
                    debug: d
                } = t;
                n.modifiedChunks.clear();
                for (var u = new rg(n, {
                        chunkSize: o,
                        debug: d
                    }), f = new rm(e, a); r = u.readLeaf();)
                    if (function() {
                            var e = f.lookAhead(r.node, r.key),
                                t = e > 0 && n.movedNodeKeys.has(r.key);
                            if (-1 === e || t) return u.remove(), 1;
                            var a = f.pointerIndex,
                                o = f.read(e + 1),
                                d = o.pop();
                            if (o.length) {
                                var h = f.toChunkLeaves(o, a);
                                u.insertBefore(h), o.forEach((e, t) => {
                                    null == s || s(e, a + t)
                                })
                            }
                            var p = f.pointerIndex - 1;
                            r.node !== d && (r.node = d, u.invalidateChunk(), null == l || l(d, p)), r.index !== p && (r.index = p, null == c || c(d, p)), i.includes(p) && u.invalidateChunk()
                        }()) continue;
                if (!f.reachedEnd) {
                    var h = f.remaining(),
                        p = f.toChunkLeaves(h, f.pointerIndex);
                    u.returnToPreviousLeaf(), u.insertAfter(p), h.forEach((e, t) => {
                        null == s || s(e, f.pointerIndex + t)
                    })
                }
                n.movedNodeKeys.clear()
            };

            function rw(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var ry = new WeakMap,
                rE = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = tQ.findKey(e, t),
                        a = ry.get(n);
                    return a || (a = {
                        type: "root",
                        movedNodeKeys: new Set,
                        modifiedChunks: new Set,
                        children: []
                    }, ry.set(n, a)), r.reconcile && rb(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? rw(Object(r), !0).forEach(function(t) {
                                tW(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rw(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({
                        chunkTree: a,
                        children: t.children
                    }, r.reconcile)), a
                },
                rk = e => {
                    var {
                        children: t
                    } = e;
                    return t
                },
                rx = e => {
                    var {
                        root: t,
                        ancestor: r,
                        renderElement: n,
                        renderChunk: a = rk
                    } = e;
                    return r.children.map(e => {
                        if ("chunk" === e.type) {
                            var o = e.key.id,
                                i = a({
                                    highest: r === t,
                                    lowest: e.children.some(e => "leaf" === e.type),
                                    attributes: {
                                        "data-slate-chunk": !0
                                    },
                                    children: h.createElement(rO, {
                                        root: t,
                                        ancestor: e,
                                        renderElement: n,
                                        renderChunk: a
                                    })
                                });
                            return h.createElement(h.Fragment, {
                                key: o
                            }, i)
                        }
                        return n(e.node, e.index, e.key)
                    })
                },
                rO = h.memo(rx, (e, t) => e.root === t.root && e.renderElement === t.renderElement && e.renderChunk === t.renderChunk && !t.root.modifiedChunks.has(t.ancestor)),
                rC = (0, h.createContext)(null),
                rS = e => {
                    var {
                        decorations: t,
                        node: r,
                        renderElement: n,
                        renderChunk: a,
                        renderPlaceholder: o,
                        renderText: i,
                        renderLeaf: s
                    } = e, l = tH();
                    el.set(l, !1);
                    var c = !E.KE.isEditor(r) && E.Hg.isElement(r) && !l.isInline(r) && E.KE.hasInlines(l, r) ? null : l.getChunkSize(r),
                        d = !!c,
                        {
                            decorationsByChild: u,
                            childrenToRedecorate: f
                        } = rP(l, r, t);
                    d || r.children.forEach((e, t) => {
                        ec.set(e, t), ed.set(e, r)
                    });
                    var p = (0, h.useCallback)((e, t, r) => {
                            var c = null != r ? r : tQ.findKey(l, e);
                            return h.createElement(rC.Provider, {
                                key: "provider-".concat(c.id),
                                value: e
                            }, h.createElement(rp, {
                                decorations: u[t],
                                element: e,
                                key: c.id,
                                renderElement: n,
                                renderChunk: a,
                                renderPlaceholder: o,
                                renderLeaf: s,
                                renderText: i
                            }))
                        }, [l, u, n, a, o, s, i]),
                        v = (e, t) => {
                            var n = tQ.findKey(l, e);
                            return h.createElement(rc, {
                                decorations: u[t],
                                key: n.id,
                                isLast: t === r.children.length - 1,
                                parent: r,
                                renderPlaceholder: o,
                                renderLeaf: s,
                                renderText: i,
                                text: e
                            })
                        };
                    if (!d) return r.children.map((e, t) => E.EY.isText(e) ? v(e, t) : p(e, t));
                    var g = rE(l, r, {
                        reconcile: {
                            chunkSize: c,
                            rerenderChildren: f,
                            onInsert: (e, t) => {
                                ec.set(e, t), ed.set(e, r)
                            },
                            onUpdate: (e, t) => {
                                ec.set(e, t), ed.set(e, r)
                            },
                            onIndexChange: (e, t) => {
                                ec.set(e, t)
                            }
                        }
                    });
                    return h.createElement(rx, {
                        root: g,
                        ancestor: g,
                        renderElement: p,
                        renderChunk: a
                    })
                },
                rP = (e, t, r) => {
                    var n = e9(e, t, r),
                        a = (0, h.useRef)(n).current,
                        o = [];
                    a.length = n.length;
                    for (var i = 0; i < n.length; i++) {
                        var s, l = n[i];
                        e3(null !== (s = a[i]) && void 0 !== s ? s : null, l) || (a[i] = l, o.push(i))
                    }
                    return {
                        decorationsByChild: a,
                        childrenToRedecorate: o
                    }
                },
                rD = (0, h.createContext)(!1),
                rT = () => (0, h.useContext)(rD),
                rB = (0, h.createContext)({}),
                rM = (e, t) => e === t,
                r_ = () => {
                    var {
                        addEventListener: e
                    } = (0, h.useContext)(rB), [, t] = (0, h.useReducer)(e => e + 1, 0);
                    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    return tX(() => e(t), [e]), tH()
                },
                rF = new WeakMap,
                rj = (e, t) => {
                    var r = [],
                        n = () => {
                            r = []
                        };
                    return {
                        registerMutations: n => {
                            if (t.current) {
                                var a = n.filter(t => L(e, t, n));
                                r.push(...a)
                            }
                        },
                        restoreDOM: function() {
                            r.length > 0 && (r.reverse().forEach(e => {
                                "characterData" !== e.type && (e.removedNodes.forEach(t => {
                                    e.target.insertBefore(t, e.nextSibling)
                                }), e.addedNodes.forEach(t => {
                                    e.target.removeChild(t)
                                }))
                            }), n())
                        },
                        clear: n
                    }
                },
                rK = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class rR extends h.Component {
                constructor() {
                    super(...arguments), tW(this, "context", null), tW(this, "manager", null), tW(this, "mutationObserver", null)
                }
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, rK)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = rj(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, n, a = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    return null != a && a.length && (null === (n = this.manager) || void 0 === n || n.registerMutations(a)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
            }
            tW(rR, "contextType", tz);
            var rA = U ? rR : e => {
                    var {
                        children: t
                    } = e;
                    return h.createElement(h.Fragment, null, t)
                },
                rN = (0, h.createContext)(!1),
                rI = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderChunk", "renderLeaf", "renderText", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                rL = ["text"];

            function rW(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rz(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rW(Object(r), !0).forEach(function(t) {
                        tW(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rW(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var rH = e => h.createElement(h.Fragment, null, rS(e)),
                rQ = (0, h.forwardRef)((e, t) => {
                    var r = (0, h.useCallback)(e => h.createElement(rq, rz({}, e)), []),
                        {
                            autoFocus: n,
                            decorate: a = rU,
                            onDOMBeforeInput: o,
                            placeholder: i,
                            readOnly: s = !1,
                            renderElement: c,
                            renderChunk: u,
                            renderLeaf: p,
                            renderText: v,
                            renderPlaceholder: g = r,
                            scrollSelectionIntoView: m = rV,
                            style: b = {},
                            as: w = "div",
                            disableDefaultStyles: y = !1
                        } = e,
                        k = tI(e, rI),
                        x = r_(),
                        [O, S] = (0, h.useState)(!1),
                        T = (0, h.useRef)(null),
                        B = (0, h.useRef)([]),
                        [_, F] = (0, h.useState)(),
                        j = (0, h.useRef)(!1),
                        {
                            onUserInput: K,
                            receivedUserInput: R
                        } = function() {
                            var e = tH(),
                                t = (0, h.useRef)(!1),
                                r = (0, h.useRef)(0),
                                n = (0, h.useCallback)(() => {
                                    if (!t.current) {
                                        t.current = !0;
                                        var n = tQ.getWindow(e);
                                        n.cancelAnimationFrame(r.current), r.current = n.requestAnimationFrame(() => {
                                            t.current = !1
                                        })
                                    }
                                }, [e]);
                            return (0, h.useEffect)(() => () => cancelAnimationFrame(r.current), []), {
                                receivedUserInput: t,
                                onUserInput: n
                            }
                        }(),
                        [, A] = (0, h.useReducer)(e => e + 1, 0);
                    eT.set(x, A), eb.set(x, s);
                    var N = (0, h.useMemo)(() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    }), []);
                    (0, h.useEffect)(() => {
                        T.current && n && T.current.focus()
                    }, [n]);
                    var L = (0, h.useRef)(),
                        z = (0, h.useMemo)(() => f()(() => {
                            if (el.get(x)) {
                                z();
                                return
                            }
                            var e = tQ.toDOMNode(x, x).getRootNode();
                            if (!j.current && Y && e instanceof ShadowRoot) {
                                j.current = !0, W() ? document.execCommand("indent") : E.gB.deselect(x), j.current = !1;
                                return
                            }
                            var t = L.current;
                            if ((U || !tQ.isComposing(x)) && (!N.isUpdatingSelection || null != t && t.isFlushing()) && !N.isDraggingInternally) {
                                var r = tQ.findDocumentOrShadowRoot(x),
                                    {
                                        activeElement: n
                                    } = r,
                                    a = tQ.toDOMNode(x, x),
                                    o = I(r);
                                if (n === a ? (N.latestElement = n, ew.set(x, !0)) : ew.delete(x), !o) return E.gB.deselect(x);
                                var {
                                    anchorNode: i,
                                    focusNode: l
                                } = o, c = tQ.hasEditableTarget(x, i) || tQ.isTargetInsideNonReadonlyVoid(x, i), d = tQ.hasTarget(x, l);
                                if (c && d) {
                                    var u = tQ.toSlateRange(x, o, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    u && (tQ.isComposing(x) || null != t && t.hasPendingChanges() || null != t && t.isFlushing() ? null == t || t.handleUserSelect(u) : E.gB.select(x, u))
                                }!s || c && d || E.gB.deselect(x)
                            }
                        }, 100), [x, s, N]),
                        H = (0, h.useMemo)(() => d()(z, 0), [z]);
                    L.current = tZ({
                        node: T,
                        onDOMSelectionChange: z,
                        scheduleOnDOMSelectionChange: H
                    }), tX(() => {
                        T.current && (r = C(T.current)) ? (eu.set(x, r), ef.set(x, T.current), ev.set(x, T.current), ep.set(T.current, x)) : ev.delete(x);
                        var e, t, r, {
                                selection: n
                            } = x,
                            a = I(tQ.findDocumentOrShadowRoot(x));
                        if (!(!a || !tQ.isFocused(x) || null !== (e = L.current) && void 0 !== e && e.hasPendingAction())) {
                            var o = e => {
                                var t = "None" !== a.type;
                                if (n || t) {
                                    var r = a.focusNode;
                                    if (V && a.rangeCount > 1) {
                                        var o = a.getRangeAt(0),
                                            i = a.getRangeAt(a.rangeCount - 1);
                                        c = o.startContainer === r ? i.endContainer : o.startContainer
                                    } else c = a.anchorNode;
                                    var s = ef.get(x),
                                        l = !1;
                                    if (s.contains(c) && s.contains(r) && (l = !0), t && l && n && !e) {
                                        var c, d, u = tQ.toSlateRange(x, a, {
                                            exactMatch: !0,
                                            suppressThrow: !0
                                        });
                                        if (u && E.Q6.equals(u, n) && (!N.hasMarkPlaceholder || null !== (d = c) && void 0 !== d && null !== (d = d.parentElement) && void 0 !== d && d.hasAttribute("data-slate-mark-placeholder"))) return
                                    }
                                    if (n && !tQ.hasRange(x, n)) {
                                        x.selection = tQ.toSlateRange(x, a, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        });
                                        return
                                    }
                                    N.isUpdatingSelection = !0;
                                    var f = null;
                                    try {
                                        f = n && tQ.toDOMRange(x, n)
                                    } catch (e) {}
                                    return f ? (tQ.isComposing(x) && !U ? a.collapseToEnd() : E.Q6.isBackward(n) ? a.setBaseAndExtent(f.endContainer, f.endOffset, f.startContainer, f.startOffset) : a.setBaseAndExtent(f.startContainer, f.startOffset, f.endContainer, f.endOffset), m(x, f)) : a.removeAllRanges(), f
                                }
                            };
                            a.rangeCount <= 1 && o();
                            var i = (null === (t = L.current) || void 0 === t ? void 0 : t.isFlushing()) === "action";
                            if (!U || !i) {
                                setTimeout(() => {
                                    N.isUpdatingSelection = !1
                                });
                                return
                            }
                            var s = null,
                                l = requestAnimationFrame(() => {
                                    if (i) {
                                        var e = e => {
                                            try {
                                                tQ.toDOMNode(x, x).focus(), o(e)
                                            } catch (e) {}
                                        };
                                        e(), s = setTimeout(() => {
                                            e(!0), N.isUpdatingSelection = !1
                                        })
                                    }
                                });
                            return () => {
                                cancelAnimationFrame(l), s && clearTimeout(s)
                            }
                        }
                    });
                    var q = (0, h.useCallback)(e => {
                            rG(x, e);
                            var t = tQ.toDOMNode(x, x).getRootNode();
                            if (null != j && j.current && Y && t instanceof ShadowRoot) {
                                var r = e.getTargetRanges()[0],
                                    n = new window.Range;
                                n.setStart(r.startContainer, r.startOffset), n.setEnd(r.endContainer, r.endOffset);
                                var a = tQ.toSlateRange(x, n, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                E.gB.select(x, a), e.preventDefault(), e.stopImmediatePropagation();
                                return
                            }
                            if (K(), !s && tQ.hasEditableTarget(x, e.target) && !r$(e, o)) {
                                if (L.current) return L.current.handleDOMBeforeInput(e);
                                H.flush(), z.flush();
                                var {
                                    selection: i
                                } = x, {
                                    inputType: l
                                } = e, c = e.dataTransfer || e.data || void 0, d = "insertCompositionText" === l || "deleteCompositionText" === l;
                                if (d && tQ.isComposing(x)) return;
                                var u = !1;
                                if ("insertText" === l && i && E.Q6.isCollapsed(i) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== i.anchor.offset && (u = !0, x.marks && (u = !1), !el.get(x))) {
                                    var {
                                        anchor: f
                                    } = i, [h, p] = tQ.toDOMPoint(x, f), v = null === (b = h.parentElement) || void 0 === b ? void 0 : b.closest("a"), g = tQ.getWindow(x);
                                    if (u && v && tQ.hasDOMNode(x, v)) {
                                        var m, b, w, y, k = null == g ? void 0 : g.document.createTreeWalker(v, NodeFilter.SHOW_TEXT).lastChild();
                                        k === h && (null === (y = k.textContent) || void 0 === y ? void 0 : y.length) === p && (u = !1)
                                    }
                                    if (u && h.parentElement && (null == g || null === (w = g.getComputedStyle(h.parentElement)) || void 0 === w ? void 0 : w.whiteSpace) === "pre") {
                                        var O = E.KE.above(x, {
                                            at: f.path,
                                            match: e => E.Hg.isElement(e) && E.KE.isBlock(x, e)
                                        });
                                        O && E.bP.string(O[0]).includes("	") && (u = !1)
                                    }
                                }
                                if ((!l.startsWith("delete") || l.startsWith("deleteBy")) && !el.get(x)) {
                                    var [C] = e.getTargetRanges();
                                    if (C) {
                                        var P = tQ.toSlateRange(x, C, {
                                            exactMatch: !1,
                                            suppressThrow: !1
                                        });
                                        if (!i || !E.Q6.equals(i, P)) {
                                            u = !1;
                                            var D = !d && x.selection && E.KE.rangeRef(x, x.selection);
                                            E.gB.select(x, P), D && eE.set(x, D)
                                        }
                                    }
                                }
                                if (d) return;
                                if (u || e.preventDefault(), i && E.Q6.isExpanded(i) && l.startsWith("delete")) {
                                    var T = l.endsWith("Backward") ? "backward" : "forward";
                                    E.KE.deleteFragment(x, {
                                        direction: T
                                    });
                                    return
                                }
                                switch (l) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        E.KE.deleteFragment(x);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        E.KE.deleteForward(x);
                                        break;
                                    case "deleteContentBackward":
                                        E.KE.deleteBackward(x);
                                        break;
                                    case "deleteEntireSoftLine":
                                        E.KE.deleteBackward(x, {
                                            unit: "line"
                                        }), E.KE.deleteForward(x, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteHardLineBackward":
                                        E.KE.deleteBackward(x, {
                                            unit: "block"
                                        });
                                        break;
                                    case "deleteSoftLineBackward":
                                        E.KE.deleteBackward(x, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteHardLineForward":
                                        E.KE.deleteForward(x, {
                                            unit: "block"
                                        });
                                        break;
                                    case "deleteSoftLineForward":
                                        E.KE.deleteForward(x, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteWordBackward":
                                        E.KE.deleteBackward(x, {
                                            unit: "word"
                                        });
                                        break;
                                    case "deleteWordForward":
                                        E.KE.deleteForward(x, {
                                            unit: "word"
                                        });
                                        break;
                                    case "insertLineBreak":
                                        E.KE.insertSoftBreak(x);
                                        break;
                                    case "insertParagraph":
                                        E.KE.insertBreak(x);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === l && tQ.isComposing(x) && (S(!1), ey.set(x, !1)), (null == c ? void 0 : c.constructor.name) === "DataTransfer" ? tQ.insertData(x, c) : "string" == typeof c && (u ? B.current.push(() => E.KE.insertText(x, c)) : E.KE.insertText(x, c))
                                }
                                var M = null === (m = eE.get(x)) || void 0 === m ? void 0 : m.unref();
                                eE.delete(x), !M || x.selection && E.Q6.equals(x.selection, M) || E.gB.select(x, M)
                            }
                        }, [x, z, K, o, s, H]),
                        X = (0, h.useCallback)(e => {
                            null == e ? (z.cancel(), H.cancel(), ef.delete(x), ev.delete(x), T.current && en && T.current.removeEventListener("beforeinput", q)) : en && e.addEventListener("beforeinput", q), T.current = e, "function" == typeof t ? t(e) : t && (t.current = e)
                        }, [z, H, x, q, t]);
                    tX(() => {
                        var e = tQ.getWindow(x),
                            t = e => {
                                var {
                                    target: t
                                } = e, r = t instanceof HTMLElement ? t : null, n = null == r ? void 0 : r.tagName;
                                "INPUT" !== n && "TEXTAREA" !== n && H()
                            };
                        e.document.addEventListener("selectionchange", t);
                        var r = () => {
                            N.isDraggingInternally = !1
                        };
                        return e.document.addEventListener("dragend", r), e.document.addEventListener("drop", r), () => {
                            e.document.removeEventListener("selectionchange", t), e.document.removeEventListener("dragend", r), e.document.removeEventListener("drop", r)
                        }
                    }, [H, N]);
                    var G = a([x, []]),
                        J = ro(a),
                        ea = i && 1 === x.children.length && 1 === Array.from(E.bP.texts(x)).length && "" === E.bP.string(x) && !O,
                        eo = (0, h.useCallback)(e => {
                            if (e && ea) {
                                var t;
                                F(null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.height)
                            } else F(void 0)
                        }, [ea]);
                    if (ea) {
                        var ei = E.KE.start(x, []);
                        G.push({
                            [eB]: !0,
                            placeholder: i,
                            onPlaceholderResize: eo,
                            anchor: ei,
                            focus: ei
                        })
                    }
                    var {
                        marks: es
                    } = x;
                    if (N.hasMarkPlaceholder = !1, x.selection && E.Q6.isCollapsed(x.selection) && es) {
                        var {
                            anchor: ec
                        } = x.selection, ed = E.bP.leaf(x, ec.path), eh = tI(ed, rL);
                        if (!E.EY.equals(ed, es, {
                                loose: !0
                            })) {
                            N.hasMarkPlaceholder = !0;
                            var eg = Object.fromEntries(Object.keys(eh).map(e => [e, null]));
                            G.push(rz(rz(rz({
                                [eM]: !0
                            }, eg), es), {}, {
                                anchor: ec,
                                focus: ec
                            }))
                        }
                    }
                    return (0, h.useEffect)(() => {
                        setTimeout(() => {
                            var {
                                selection: e
                            } = x;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = E.bP.leaf(x, t.path);
                                if (es && !E.EY.equals(r, es, {
                                        loose: !0
                                    })) {
                                    eO.set(x, es);
                                    return
                                }
                            }
                            eO.delete(x)
                        })
                    }), ! function() {
                        var {
                            flushDeferred: e
                        } = (0, h.useContext)(rB);
                        tX(e)
                    }(), h.createElement(rD.Provider, {
                        value: s
                    }, h.createElement(rN.Provider, {
                        value: O
                    }, h.createElement(rn.Provider, {
                        value: J
                    }, h.createElement(rA, {
                        node: T,
                        receivedUserInput: R
                    }, h.createElement(w, rz(rz({
                        role: s ? void 0 : "textbox",
                        "aria-multiline": !s || void 0
                    }, k), {}, {
                        spellCheck: (!!en || !er) && k.spellCheck,
                        autoCorrect: en || !er ? k.autoCorrect : "false",
                        autoCapitalize: en || !er ? k.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !s,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: X,
                        style: rz(rz({}, y ? {} : rz({
                            position: "relative",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, _ ? {
                            minHeight: _
                        } : {})), b),
                        onBeforeInput: (0, h.useCallback)(e => {
                            if (!en && !s && !rY(e, k.onBeforeInput) && tQ.hasSelectableTarget(x, e.target) && (e.preventDefault(), !tQ.isComposing(x))) {
                                var t = e.data;
                                E.KE.insertText(x, t)
                            }
                        }, [k.onBeforeInput, x, s]),
                        onInput: (0, h.useCallback)(e => {
                            if (!rY(e, k.onInput)) {
                                if (L.current) {
                                    L.current.handleInput();
                                    return
                                }
                                for (var t of B.current) t();
                                B.current = [], tQ.isFocused(x) || rG(x, e.nativeEvent)
                            }
                        }, [k.onInput, x]),
                        onBlur: (0, h.useCallback)(e => {
                            if (!(s || N.isUpdatingSelection || !tQ.hasSelectableTarget(x, e.target) || rY(e, k.onBlur))) {
                                var t = tQ.findDocumentOrShadowRoot(x);
                                if (N.latestElement !== t.activeElement) {
                                    var {
                                        relatedTarget: r
                                    } = e;
                                    if (!(r === tQ.toDOMNode(x, x) || P(r) && r.hasAttribute("data-slate-spacer"))) {
                                        if (null != r && D(r) && tQ.hasDOMNode(x, r)) {
                                            var n = tQ.toSlateNode(x, r);
                                            if (E.Hg.isElement(n) && !x.isVoid(n)) return
                                        }
                                        if (Y) {
                                            var a = I(t);
                                            null == a || a.removeAllRanges()
                                        }
                                        ew.delete(x)
                                    }
                                }
                            }
                        }, [s, N.isUpdatingSelection, N.latestElement, x, k.onBlur]),
                        onClick: (0, h.useCallback)(e => {
                            if (tQ.hasTarget(x, e.target) && !rY(e, k.onClick) && D(e.target)) {
                                var t = tQ.toSlateNode(x, e.target),
                                    r = tQ.findPath(x, t);
                                if (E.KE.hasPath(x, r) && E.bP.get(x, r) === t) {
                                    if (3 === e.detail && r.length >= 1) {
                                        var n = r;
                                        if (!(E.Hg.isElement(t) && E.KE.isBlock(x, t))) {
                                            var a, o = E.KE.above(x, {
                                                match: e => E.Hg.isElement(e) && E.KE.isBlock(x, e),
                                                at: r
                                            });
                                            n = null !== (a = null == o ? void 0 : o[1]) && void 0 !== a ? a : r.slice(0, 1)
                                        }
                                        var i = E.KE.range(x, n);
                                        E.gB.select(x, i);
                                        return
                                    }
                                    if (!s) {
                                        var l = E.KE.start(x, r),
                                            c = E.KE.end(x, r),
                                            d = E.KE.void(x, {
                                                at: l
                                            }),
                                            u = E.KE.void(x, {
                                                at: c
                                            });
                                        if (d && u && E.wA.equals(d[1], u[1])) {
                                            var f = E.KE.range(x, l);
                                            E.gB.select(x, f)
                                        }
                                    }
                                }
                            }
                        }, [x, k.onClick, s]),
                        onCompositionEnd: (0, h.useCallback)(e => {
                            if (tQ.hasSelectableTarget(x, e.target)) {
                                var t;
                                if (tQ.isComposing(x) && Promise.resolve().then(() => {
                                        S(!1), ey.set(x, !1)
                                    }), null === (t = L.current) || void 0 === t || t.handleCompositionEnd(e), !rY(e, k.onCompositionEnd) && !U && !Y && !Z && !Q && !et && !ee && e.data) {
                                    var r = eO.get(x);
                                    eO.delete(x), void 0 !== r && (eC.set(x, x.marks), x.marks = r), E.KE.insertText(x, e.data);
                                    var n = eC.get(x);
                                    eC.delete(x), void 0 !== n && (x.marks = n)
                                }
                            }
                        }, [k.onCompositionEnd, x]),
                        onCompositionUpdate: (0, h.useCallback)(e => {
                            !tQ.hasSelectableTarget(x, e.target) || rY(e, k.onCompositionUpdate) || tQ.isComposing(x) || (S(!0), ey.set(x, !0))
                        }, [k.onCompositionUpdate, x]),
                        onCompositionStart: (0, h.useCallback)(e => {
                            if (tQ.hasSelectableTarget(x, e.target) && (null === (t = L.current) || void 0 === t || t.handleCompositionStart(e), !rY(e, k.onCompositionStart) && !U)) {
                                S(!0);
                                var t, {
                                    selection: r
                                } = x;
                                if (r && E.Q6.isExpanded(r)) {
                                    E.KE.deleteFragment(x);
                                    return
                                }
                            }
                        }, [k.onCompositionStart, x]),
                        onCopy: (0, h.useCallback)(e => {
                            !tQ.hasSelectableTarget(x, e.target) || rY(e, k.onCopy) || rX(e) || (e.preventDefault(), tQ.setFragmentData(x, e.clipboardData, "copy"))
                        }, [k.onCopy, x]),
                        onCut: (0, h.useCallback)(e => {
                            if (!s && tQ.hasSelectableTarget(x, e.target) && !rY(e, k.onCut) && !rX(e)) {
                                e.preventDefault(), tQ.setFragmentData(x, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = x;
                                if (t) {
                                    if (E.Q6.isExpanded(t)) E.KE.deleteFragment(x);
                                    else {
                                        var r = E.bP.parent(x, t.anchor.path);
                                        E.KE.isVoid(x, r) && E.gB.delete(x)
                                    }
                                }
                            }
                        }, [s, x, k.onCut]),
                        onDragOver: (0, h.useCallback)(e => {
                            if (tQ.hasTarget(x, e.target) && !rY(e, k.onDragOver)) {
                                var t = tQ.toSlateNode(x, e.target);
                                E.Hg.isElement(t) && E.KE.isVoid(x, t) && e.preventDefault()
                            }
                        }, [k.onDragOver, x]),
                        onDragStart: (0, h.useCallback)(e => {
                            if (!s && tQ.hasTarget(x, e.target) && !rY(e, k.onDragStart)) {
                                var t = tQ.toSlateNode(x, e.target),
                                    r = tQ.findPath(x, t);
                                if (E.Hg.isElement(t) && E.KE.isVoid(x, t) || E.KE.void(x, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var n = E.KE.range(x, r);
                                    E.gB.select(x, n)
                                }
                                N.isDraggingInternally = !0, tQ.setFragmentData(x, e.dataTransfer, "drag")
                            }
                        }, [s, x, k.onDragStart, N]),
                        onDrop: (0, h.useCallback)(e => {
                            if (!s && tQ.hasTarget(x, e.target) && !rY(e, k.onDrop)) {
                                e.preventDefault();
                                var t = x.selection,
                                    r = tQ.findEventRange(x, e),
                                    n = e.dataTransfer;
                                E.gB.select(x, r), N.isDraggingInternally && t && !E.Q6.equals(t, r) && !E.KE.void(x, {
                                    at: r,
                                    voids: !0
                                }) && E.gB.delete(x, {
                                    at: t
                                }), tQ.insertData(x, n), tQ.isFocused(x) || tQ.focus(x)
                            }
                        }, [s, x, k.onDrop, N]),
                        onDragEnd: (0, h.useCallback)(e => {
                            !s && N.isDraggingInternally && k.onDragEnd && tQ.hasTarget(x, e.target) && k.onDragEnd(e)
                        }, [s, N, k, x]),
                        onFocus: (0, h.useCallback)(e => {
                            if (!s && !N.isUpdatingSelection && tQ.hasEditableTarget(x, e.target) && !rY(e, k.onFocus)) {
                                var t = tQ.toDOMNode(x, x);
                                if (N.latestElement = tQ.findDocumentOrShadowRoot(x).activeElement, V && e.target !== t) {
                                    t.focus();
                                    return
                                }
                                ew.set(x, !0)
                            }
                        }, [s, N, x, k.onFocus]),
                        onKeyDown: (0, h.useCallback)(e => {
                            if (!s && tQ.hasEditableTarget(x, e.target)) {
                                null === (t = L.current) || void 0 === t || t.handleKeyDown(e);
                                var t, {
                                    nativeEvent: r
                                } = e;
                                if (tQ.isComposing(x) && !1 === r.isComposing && (ey.set(x, !1), S(!1)), !(rY(e, k.onKeyDown) || tQ.isComposing(x))) {
                                    var {
                                        selection: n
                                    } = x, a = x.children[null !== n ? n.focus.path[0] : 0], o = "rtl" === l()(E.bP.string(a));
                                    if (e$.isRedo(r)) {
                                        e.preventDefault(), "function" == typeof x.redo && x.redo();
                                        return
                                    }
                                    if (e$.isUndo(r)) {
                                        e.preventDefault(), "function" == typeof x.undo && x.undo();
                                        return
                                    }
                                    if (e$.isMoveLineBackward(r)) {
                                        e.preventDefault(), E.gB.move(x, {
                                            unit: "line",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (e$.isMoveLineForward(r)) {
                                        e.preventDefault(), E.gB.move(x, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (e$.isExtendLineBackward(r)) {
                                        e.preventDefault(), E.gB.move(x, {
                                            unit: "line",
                                            edge: "focus",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (e$.isExtendLineForward(r)) {
                                        e.preventDefault(), E.gB.move(x, {
                                            unit: "line",
                                            edge: "focus"
                                        });
                                        return
                                    }
                                    if (e$.isMoveBackward(r)) {
                                        e.preventDefault(), n && E.Q6.isCollapsed(n) ? E.gB.move(x, {
                                            reverse: !o
                                        }) : E.gB.collapse(x, {
                                            edge: o ? "end" : "start"
                                        });
                                        return
                                    }
                                    if (e$.isMoveForward(r)) {
                                        e.preventDefault(), n && E.Q6.isCollapsed(n) ? E.gB.move(x, {
                                            reverse: o
                                        }) : E.gB.collapse(x, {
                                            edge: o ? "start" : "end"
                                        });
                                        return
                                    }
                                    if (e$.isMoveWordBackward(r)) {
                                        e.preventDefault(), n && E.Q6.isExpanded(n) && E.gB.collapse(x, {
                                            edge: "focus"
                                        }), E.gB.move(x, {
                                            unit: "word",
                                            reverse: !o
                                        });
                                        return
                                    }
                                    if (e$.isMoveWordForward(r)) {
                                        e.preventDefault(), n && E.Q6.isExpanded(n) && E.gB.collapse(x, {
                                            edge: "focus"
                                        }), E.gB.move(x, {
                                            unit: "word",
                                            reverse: o
                                        });
                                        return
                                    }
                                    if (en) {
                                        if (($ || Y) && n && (e$.isDeleteBackward(r) || e$.isDeleteForward(r)) && E.Q6.isCollapsed(n)) {
                                            var i = E.bP.parent(x, n.anchor.path);
                                            if (E.Hg.isElement(i) && E.KE.isVoid(x, i) && (E.KE.isInline(x, i) || E.KE.isBlock(x, i))) {
                                                e.preventDefault(), E.KE.deleteBackward(x, {
                                                    unit: "block"
                                                });
                                                return
                                            }
                                        }
                                    } else {
                                        if (e$.isBold(r) || e$.isItalic(r) || e$.isTransposeCharacter(r)) {
                                            e.preventDefault();
                                            return
                                        }
                                        if (e$.isSoftBreak(r)) {
                                            e.preventDefault(), E.KE.insertSoftBreak(x);
                                            return
                                        }
                                        if (e$.isSplitBlock(r)) {
                                            e.preventDefault(), E.KE.insertBreak(x);
                                            return
                                        }
                                        if (e$.isDeleteBackward(r)) {
                                            e.preventDefault(), n && E.Q6.isExpanded(n) ? E.KE.deleteFragment(x, {
                                                direction: "backward"
                                            }) : E.KE.deleteBackward(x);
                                            return
                                        }
                                        if (e$.isDeleteForward(r)) {
                                            e.preventDefault(), n && E.Q6.isExpanded(n) ? E.KE.deleteFragment(x, {
                                                direction: "forward"
                                            }) : E.KE.deleteForward(x);
                                            return
                                        }
                                        if (e$.isDeleteLineBackward(r)) {
                                            e.preventDefault(), n && E.Q6.isExpanded(n) ? E.KE.deleteFragment(x, {
                                                direction: "backward"
                                            }) : E.KE.deleteBackward(x, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (e$.isDeleteLineForward(r)) {
                                            e.preventDefault(), n && E.Q6.isExpanded(n) ? E.KE.deleteFragment(x, {
                                                direction: "forward"
                                            }) : E.KE.deleteForward(x, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (e$.isDeleteWordBackward(r)) {
                                            e.preventDefault(), n && E.Q6.isExpanded(n) ? E.KE.deleteFragment(x, {
                                                direction: "backward"
                                            }) : E.KE.deleteBackward(x, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                        if (e$.isDeleteWordForward(r)) {
                                            e.preventDefault(), n && E.Q6.isExpanded(n) ? E.KE.deleteFragment(x, {
                                                direction: "forward"
                                            }) : E.KE.deleteForward(x, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                    }
                                }
                            }
                        }, [s, x, k.onKeyDown]),
                        onPaste: (0, h.useCallback)(e => {
                            !s && tQ.hasEditableTarget(x, e.target) && !rY(e, k.onPaste) && (!en || M(e.nativeEvent) || Y) && (e.preventDefault(), tQ.insertData(x, e.clipboardData))
                        }, [s, x, k.onPaste])
                    }), h.createElement(rH, {
                        decorations: G,
                        node: x,
                        renderElement: c,
                        renderChunk: u,
                        renderPlaceholder: g,
                        renderLeaf: p,
                        renderText: v
                    }))))))
                }),
                rq = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return h.createElement("span", rz({}, t), r, U && h.createElement("br", null))
                },
                rU = () => [],
                rV = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && E.Q6.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement,
                            n = t.getBoundingClientRect();
                        if (0 === n.width && 0 === n.height && 0 === n.x && 0 === n.y) {
                            var a = r.getBoundingClientRect();
                            if (a.width > 0 || a.height > 0) return
                        }
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t),
                            function(e, t) {
                                if (!e.isConnected || !(e => {
                                        let t = e;
                                        for (; t && t.parentNode;) {
                                            if (t.parentNode === document) return !0;
                                            t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode
                                        }
                                        return !1
                                    })(e)) return;
                                let r = (e => {
                                    let t = window.getComputedStyle(e);
                                    return {
                                        top: parseFloat(t.scrollMarginTop) || 0,
                                        right: parseFloat(t.scrollMarginRight) || 0,
                                        bottom: parseFloat(t.scrollMarginBottom) || 0,
                                        left: parseFloat(t.scrollMarginLeft) || 0
                                    }
                                })(e);
                                if ("object" == typeof t && "function" == typeof t.behavior) return t.behavior(w(e, t));
                                let n = "boolean" == typeof t || null == t ? void 0 : t.behavior;
                                for (let {
                                        el: a,
                                        top: o,
                                        left: i
                                    } of w(e, y(t))) {
                                    let e = o - r.top + r.bottom,
                                        t = i - r.left + r.right;
                                    a.scroll({
                                        top: e,
                                        left: t,
                                        behavior: n
                                    })
                                }
                            }(r, {
                                scrollMode: "if-needed"
                            }), delete r.getBoundingClientRect
                    }
                },
                rY = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                rX = e => D(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement),
                r$ = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                rG = (e, t) => {
                    if ("historyUndo" === t.inputType && "function" == typeof e.undo) {
                        e.undo();
                        return
                    }
                    if ("historyRedo" === t.inputType && "function" == typeof e.redo) {
                        e.redo();
                        return
                    }
                },
                rJ = (0, h.createContext)(!1),
                rZ = parseInt(h.version.split(".")[0], 10),
                r0 = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"],
                r1 = e => {
                    var {
                        editor: t,
                        children: r,
                        onChange: n,
                        onSelectionChange: a,
                        onValueChange: o,
                        initialValue: i
                    } = e, s = tI(e, r0);
                    h.useState(() => {
                        if (!E.bP.isNodeList(i)) throw Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(E.h6.stringify(i)));
                        if (!E.KE.isEditor(t)) throw Error("[Slate] editor is invalid! You passed: ".concat(E.h6.stringify(t)));
                        t.children = i, Object.assign(t, s)
                    });
                    var {
                        selectorContext: l,
                        onChange: c
                    } = function() {
                        var e = (0, h.useRef)(new Set),
                            t = (0, h.useRef)(new Set),
                            r = (0, h.useCallback)(() => {
                                e.current.forEach(e => e())
                            }, []),
                            n = (0, h.useCallback)(() => {
                                t.current.forEach(e => e()), t.current.clear()
                            }, []),
                            a = (0, h.useCallback)(function(r) {
                                var {
                                    deferred: n = !1
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n ? () => t.current.add(r) : r;
                                return e.current.add(a), () => {
                                    e.current.delete(a)
                                }
                            }, []);
                        return {
                            selectorContext: (0, h.useMemo)(() => ({
                                addEventListener: a,
                                flushDeferred: n
                            }), [a, n]),
                            onChange: r
                        }
                    }(), d = (0, h.useCallback)(e => {
                        var r;
                        (n && n(t.children), (null == e || null === (r = e.operation) || void 0 === r ? void 0 : r.type) === "set_selection") ? null == a || a(t.selection): null == o || o(t.children), c()
                    }, [t, c, n, a, o]);
                    (0, h.useEffect)(() => (ek.set(t, d), () => {
                        ek.set(t, () => {})
                    }), [t, d]);
                    var [u, f] = (0, h.useState)(tQ.isFocused(t));
                    return (0, h.useEffect)(() => {
                        f(tQ.isFocused(t))
                    }, [t]), tX(() => {
                        var e = () => f(tQ.isFocused(t));
                        return rZ >= 17 ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                        }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                            document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                        })
                    }, []), h.createElement(rB.Provider, {
                        value: l
                    }, h.createElement(tz.Provider, {
                        value: t
                    }, h.createElement(rJ.Provider, {
                        value: u
                    }, r)))
                },
                r6 = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        r = e,
                        {
                            onChange: n,
                            apply: a
                        } = r = eQ(r, t);
                    return r.getChunkSize = () => null, r.onChange = e => {
                        (rZ < 18 ? tN.unstable_batchedUpdates : e => e())(() => {
                            n(e)
                        })
                    }, r.apply = e => {
                        if ("move_node" === e.type) {
                            var t = E.bP.parent(r, e.path);
                            if (r.getChunkSize(t)) {
                                var n = E.bP.get(r, e.path),
                                    o = rE(r, t),
                                    i = tQ.findKey(r, n);
                                o.movedNodeKeys.add(i)
                            }
                        }
                        a(e)
                    }, r
                }
        },
        64439: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        67460: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        70771: (e, t, r) => {
            var n = r(98233),
                a = r(48611);
            e.exports = function(e) {
                return "symbol" == typeof e || a(e) && "[object Symbol]" == n(e)
            }
        },
        74532: (e, t, r) => {
            "use strict";
            r.d(t, {
                jM: () => H
            });
            var n, a = Symbol.for("immer-nothing"),
                o = Symbol.for("immer-draftable"),
                i = Symbol.for("immer-state");

            function s(e, ...t) {
                throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
            }
            var l = Object.getPrototypeOf;

            function c(e) {
                return !!e && !!e[i]
            }

            function d(e) {
                return !!e && (f(e) || Array.isArray(e) || !!e[o] || !!e.constructor ? .[o] || m(e) || b(e))
            }
            var u = Object.prototype.constructor.toString();

            function f(e) {
                if (!e || "object" != typeof e) return !1;
                let t = l(e);
                if (null === t) return !0;
                let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return r === Object || "function" == typeof r && Function.toString.call(r) === u
            }

            function h(e, t) {
                0 === p(e) ? Reflect.ownKeys(e).forEach(r => {
                    t(r, e[r], e)
                }) : e.forEach((r, n) => t(n, r, e))
            }

            function p(e) {
                let t = e[i];
                return t ? t.type_ : Array.isArray(e) ? 1 : m(e) ? 2 : 3 * !!b(e)
            }

            function v(e, t) {
                return 2 === p(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function g(e, t, r) {
                let n = p(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
            }

            function m(e) {
                return e instanceof Map
            }

            function b(e) {
                return e instanceof Set
            }

            function w(e) {
                return e.copy_ || e.base_
            }

            function y(e, t) {
                if (m(e)) return new Map(e);
                if (b(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                let r = f(e);
                if (!0 !== t && ("class_only" !== t || r)) {
                    let t = l(e);
                    return null !== t && r ? { ...e
                    } : Object.assign(Object.create(t), e)
                } {
                    let t = Object.getOwnPropertyDescriptors(e);
                    delete t[i];
                    let r = Reflect.ownKeys(t);
                    for (let n = 0; n < r.length; n++) {
                        let a = r[n],
                            o = t[a];
                        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[a] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: o.enumerable,
                            value: e[a]
                        })
                    }
                    return Object.create(l(e), t)
                }
            }

            function E(e, t = !1) {
                return x(e) || c(e) || !d(e) || (p(e) > 1 && (e.set = e.add = e.clear = e.delete = k), Object.freeze(e), t && Object.entries(e).forEach(([e, t]) => E(t, !0))), e
            }

            function k() {
                s(2)
            }

            function x(e) {
                return Object.isFrozen(e)
            }
            var O = {};

            function C(e) {
                let t = O[e];
                return t || s(0, e), t
            }

            function S(e, t) {
                t && (C("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
            }

            function P(e) {
                D(e), e.drafts_.forEach(B), e.drafts_ = null
            }

            function D(e) {
                e === n && (n = e.parent_)
            }

            function T(e) {
                return n = {
                    drafts_: [],
                    parent_: n,
                    immer_: e,
                    canAutoFreeze_: !0,
                    unfinalizedDrafts_: 0
                }
            }

            function B(e) {
                let t = e[i];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
            }

            function M(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                let r = t.drafts_[0];
                return void 0 !== e && e !== r ? (r[i].modified_ && (P(t), s(4)), d(e) && (e = _(t, e), t.parent_ || j(t, e)), t.patches_ && C("Patches").generateReplacementPatches_(r[i].base_, e, t.patches_, t.inversePatches_)) : e = _(t, r, []), P(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== a ? e : void 0
            }

            function _(e, t, r) {
                if (x(t)) return t;
                let n = t[i];
                if (!n) return h(t, (a, o) => F(e, n, t, a, o, r)), t;
                if (n.scope_ !== e) return t;
                if (!n.modified_) return j(e, n.base_, !0), n.base_;
                if (!n.finalized_) {
                    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
                    let t = n.copy_,
                        a = t,
                        o = !1;
                    3 === n.type_ && (a = new Set(t), t.clear(), o = !0), h(a, (a, i) => F(e, n, t, a, i, r, o)), j(e, t, !1), r && e.patches_ && C("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
                }
                return n.copy_
            }

            function F(e, t, r, n, a, o, i) {
                if (c(a)) {
                    let i = _(e, a, o && t && 3 !== t.type_ && !v(t.assigned_, n) ? o.concat(n) : void 0);
                    if (g(r, n, i), !c(i)) return;
                    e.canAutoFreeze_ = !1
                } else i && r.add(a);
                if (d(a) && !x(a)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    _(e, a), (!t || !t.scope_.parent_) && "symbol" != typeof n && Object.prototype.propertyIsEnumerable.call(r, n) && j(e, a)
                }
            }

            function j(e, t, r = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && E(t, r)
            }
            var K = {
                    get(e, t) {
                        if (t === i) return e;
                        let r = w(e);
                        if (!v(r, t)) return function(e, t, r) {
                            let n = N(t, r);
                            return n ? "value" in n ? n.value : n.get ? .call(e.draft_) : void 0
                        }(e, r, t);
                        let n = r[t];
                        return e.finalized_ || !d(n) ? n : n === A(e.base_, t) ? (L(e), e.copy_[t] = W(n, e)) : n
                    },
                    has: (e, t) => t in w(e),
                    ownKeys: e => Reflect.ownKeys(w(e)),
                    set(e, t, r) {
                        let n = N(w(e), t);
                        if (n ? .set) return n.set.call(e.draft_, r), !0;
                        if (!e.modified_) {
                            let n = A(w(e), t),
                                a = n ? .[i];
                            if (a && a.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                            if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || v(e.base_, t))) return !0;
                            L(e), I(e)
                        }
                        return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0)
                    },
                    deleteProperty: (e, t) => (void 0 !== A(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, L(e), I(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        let r = w(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== e.type_ || "length" !== t,
                            enumerable: n.enumerable,
                            value: r[t]
                        } : n
                    },
                    defineProperty() {
                        s(11)
                    },
                    getPrototypeOf: e => l(e.base_),
                    setPrototypeOf() {
                        s(12)
                    }
                },
                R = {};

            function A(e, t) {
                let r = e[i];
                return (r ? w(r) : e)[t]
            }

            function N(e, t) {
                if (!(t in e)) return;
                let r = l(e);
                for (; r;) {
                    let e = Object.getOwnPropertyDescriptor(r, t);
                    if (e) return e;
                    r = l(r)
                }
            }

            function I(e) {
                !e.modified_ && (e.modified_ = !0, e.parent_ && I(e.parent_))
            }

            function L(e) {
                e.copy_ || (e.copy_ = y(e.base_, e.scope_.immer_.useStrictShallowCopy_))
            }

            function W(e, t) {
                let r = m(e) ? C("MapSet").proxyMap_(e, t) : b(e) ? C("MapSet").proxySet_(e, t) : function(e, t) {
                    let r = Array.isArray(e),
                        a = {
                            type_: +!!r,
                            scope_: t ? t.scope_ : n,
                            modified_: !1,
                            finalized_: !1,
                            assigned_: {},
                            parent_: t,
                            base_: e,
                            draft_: null,
                            copy_: null,
                            revoke_: null,
                            isManual_: !1
                        },
                        o = a,
                        i = K;
                    r && (o = [a], i = R);
                    let {
                        revoke: s,
                        proxy: l
                    } = Proxy.revocable(o, i);
                    return a.draft_ = l, a.revoke_ = s, l
                }(e, t);
                return (t ? t.scope_ : n).drafts_.push(r), r
            }
            h(K, (e, t) => {
                R[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), R.deleteProperty = function(e, t) {
                return R.set.call(this, e, t, void 0)
            }, R.set = function(e, t, r) {
                return K.set.call(this, e[0], t, r, e[0])
            };
            var z = new class {
                    constructor(e) {
                        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
                            let n;
                            if ("function" == typeof e && "function" != typeof t) {
                                let r = t;
                                t = e;
                                let n = this;
                                return function(e = r, ...a) {
                                    return n.produce(e, e => t.call(this, e, ...a))
                                }
                            }
                            if ("function" != typeof t && s(6), void 0 !== r && "function" != typeof r && s(7), d(e)) {
                                let a = T(this),
                                    o = W(e, void 0),
                                    i = !0;
                                try {
                                    n = t(o), i = !1
                                } finally {
                                    i ? P(a) : D(a)
                                }
                                return S(a, r), M(n, a)
                            }
                            if (e && "object" == typeof e) s(1, e);
                            else {
                                if (void 0 === (n = t(e)) && (n = e), n === a && (n = void 0), this.autoFreeze_ && E(n, !0), r) {
                                    let t = [],
                                        a = [];
                                    C("Patches").generateReplacementPatches_(e, n, t, a), r(t, a)
                                }
                                return n
                            }
                        }, this.produceWithPatches = (e, t) => {
                            let r, n;
                            return "function" == typeof e ? (t, ...r) => this.produceWithPatches(t, t => e(t, ...r)) : [this.produce(e, t, (e, t) => {
                                r = e, n = t
                            }), r, n]
                        }, "boolean" == typeof e ? .autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ? .useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                    }
                    createDraft(e) {
                        var t;
                        d(e) || s(8), c(e) && (c(t = e) || s(10, t), e = function e(t) {
                            let r;
                            if (!d(t) || x(t)) return t;
                            let n = t[i];
                            if (n) {
                                if (!n.modified_) return n.base_;
                                n.finalized_ = !0, r = y(t, n.scope_.immer_.useStrictShallowCopy_)
                            } else r = y(t, !0);
                            return h(r, (t, n) => {
                                g(r, t, e(n))
                            }), n && (n.finalized_ = !1), r
                        }(t));
                        let r = T(this),
                            n = W(e, void 0);
                        return n[i].isManual_ = !0, D(r), n
                    }
                    finishDraft(e, t) {
                        let r = e && e[i];
                        r && r.isManual_ || s(9);
                        let {
                            scope_: n
                        } = r;
                        return S(n, t), M(void 0, n)
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e
                    }
                    applyPatches(e, t) {
                        let r;
                        for (r = t.length - 1; r >= 0; r--) {
                            let n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        let n = C("Patches").applyPatches_;
                        return c(e) ? n(e, t) : this.produce(e, e => n(e, t))
                    }
                },
                H = z.produce;
            z.produceWithPatches.bind(z), z.setAutoFreeze.bind(z), z.setUseStrictShallowCopy.bind(z), z.applyPatches.bind(z), z.createDraft.bind(z), z.finishDraft.bind(z)
        },
        76685: (e, t, r) => {
            var n = r(82500);
            e.exports = function() {
                return n.Date.now()
            }
        },
        82500: (e, t, r) => {
            var n = r(7985),
                a = "object" == typeof self && self && self.Object === Object && self;
            e.exports = n || a || Function("return this")()
        },
        91959: (e, t, r) => {
            var n = r(45964),
                a = r(67460);
            e.exports = function(e, t, r) {
                var o = !0,
                    i = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                return a(r) && (o = "leading" in r ? !!r.leading : o, i = "trailing" in r ? !!r.trailing : i), n(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: i
                })
            }
        },
        98233: (e, t, r) => {
            var n = r(24376),
                a = r(20570),
                o = r(64439),
                i = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? a(e) : o(e)
            }
        }
    }
]);