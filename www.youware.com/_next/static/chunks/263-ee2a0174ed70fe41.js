try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "814e9792-9004-47ce-a222-9cea31dc4c91", e._sentryDebugIdIdentifier = "sentry-dbid-814e9792-9004-47ce-a222-9cea31dc4c91")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [263], {
        565: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => a
            });
            let l = null,
                a = () => l ? Promise.resolve(l) : new Promise(e => {
                    if (!window.collectEvent) {
                        e("");
                        return
                    }
                    try {
                        window.collectEvent("getToken", t => {
                            t && t.ssid ? (l = t.ssid, e(t.ssid)) : e("")
                        })
                    } catch (t) {
                        e("")
                    }
                })
        },
        9329: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => y
            });
            var l = r(95155),
                a = r(25427),
                n = r(35695),
                s = r(12115),
                i = r(34477);
            let o = (0, i.createServerReference)("40cfdb560a5ea0bb67bfbb0ac49cb83141399b98ff", i.callServer, void 0, i.findSourceMapURL, "getProjects"),
                c = (0, i.createServerReference)("7f1d36a7a79f9e055200837d60acd937e99ee47301", i.callServer, void 0, i.findSourceMapURL, "getInstallFlag"),
                d = (0, i.createServerReference)("40ccf59053abc895c161a8bb6051e714a027d1613b", i.callServer, void 0, i.findSourceMapURL, "markImpression"),
                u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            batchInterval: t = 1e3
                        } = e,
                        [r, l] = (0, s.useState)(new Set),
                        a = (0, s.useRef)(null),
                        n = (0, s.useCallback)((e, t, r, a) => {
                            l(t => {
                                let r = new Set(t);
                                return r.add(e), r
                            })
                        }, []);
                    return (0, s.useEffect)(() => {
                        let e = async () => {
                            if (r.size > 0) {
                                let e = Array.from(r);
                                try {
                                    l(new Set), await d(e)
                                } catch (e) {
                                    console.error("Failed to report project exposures:", e)
                                }
                            }
                        };
                        return a.current && clearTimeout(a.current), r.size > 0 && (a.current = setTimeout(e, t)), () => {
                            a.current && clearTimeout(a.current)
                        }
                    }, [r, t]), {
                        handleExposure: n,
                        exposedProjectsCount: r.size
                    }
                };
            var x = r(56389),
                p = r(43072);
            let m = () => {
                document.cookie = "install_flag=true; path=/; max-age=".concat(2592e3, "; domain=").concat(".youware.com")
            };

            function f(e) {
                let {
                    className: t,
                    categories: r,
                    selectedCategory: a,
                    loading: n,
                    onCategoryChange: s,
                    isSticky: i = !1
                } = e;
                return (0, l.jsx)("div", {
                    className: " ".concat(i ? "fixed top-14 right-0 left-0 z-40 px-5 sm:px-4 md:px-22" : "", " bg-body flex h-16 w-full justify-center ").concat(t),
                    children: (0, l.jsx)("div", {
                        className: "no-scrollbar flex items-center gap-3 overflow-x-auto pb-2 whitespace-nowrap",
                        children: r && r.map(e => (0, l.jsx)("button", {
                            onClick: () => s(e),
                            disabled: n,
                            className: "".concat(n ? "" : "cursor-pointer", " min-w-[64px] flex-shrink-0 rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-colors ").concat((null == a ? void 0 : a.category_id) === e.category_id ? "bg-brand text-white" : "bg-brand/6 hover:bg-brand/12 text-black/65"),
                            children: e.display_name
                        }, e.category_id))
                    })
                })
            }
            var h = r(78161),
                b = r(46065),
                g = r(16556),
                v = r(70165);
            let w = e => {
                var t, r;
                let {
                    project: a,
                    index: i,
                    area: o,
                    onUpdate: c,
                    tabName: d,
                    onExposure: u
                } = e, [p, m] = (0, s.useState)(!1), f = (0, s.useRef)(null), w = (0, n.useRouter)(), j = (0, s.useRef)(null), {
                    track: y
                } = (0, x.s)();
                (0, s.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        if (t[0].isIntersecting && !p) {
                            var r, l, n, s, c;
                            y("home_project_show", {
                                project_id: a.project_id,
                                project_url: a.project_url,
                                index: i + 1,
                                area: o,
                                tab_name: d,
                                project_views: null !== (n = a.view_count) && void 0 !== n ? n : 0,
                                project_comments: null !== (s = a.comment_count) && void 0 !== s ? s : 0,
                                project_reactions: null !== (c = null === (l = a.interaction) || void 0 === l ? void 0 : null === (r = l.count) || void 0 === r ? void 0 : r.reduce((e, t) => {
                                    var r;
                                    return e + (null !== (r = null == t ? void 0 : t.count) && void 0 !== r ? r : 0)
                                }, 0)) && void 0 !== c ? c : 0
                            }), u && u(a.project_id, i, o, d), m(!0), e.disconnect()
                        }
                    });
                    return f.current && e.observe(f.current), () => e.disconnect()
                }, [y, a.project_url, i, o, p, u, d]);
                let _ = (0, s.useCallback)(() => {
                        var e, t, r, l, n;
                        y("home_project_click", {
                            project_id: a.project_id,
                            project_url: a.project_url,
                            index: i + 1,
                            area: o,
                            tab_name: d,
                            project_views: null !== (r = a.view_count) && void 0 !== r ? r : 0,
                            project_comments: null !== (l = a.comment_count) && void 0 !== l ? l : 0,
                            project_reactions: null !== (n = null === (t = a.interaction) || void 0 === t ? void 0 : null === (e = t.count) || void 0 === e ? void 0 : e.reduce((e, t) => {
                                var r;
                                return e + (null !== (r = null == t ? void 0 : t.count) && void 0 !== r ? r : 0)
                            }, 0)) && void 0 !== n ? n : 0
                        }), setTimeout(() => {
                            window.open("".concat(a.project_url, "?enter_from=home"), "_blank")
                        }, 100)
                    }, [a]),
                    k = (0, s.useCallback)(e => {
                        var t, r, l;
                        if (e.preventDefault(), e.stopPropagation(), (null === (t = a.user) || void 0 === t ? void 0 : t.uid) && (null === (r = a.user) || void 0 === r ? void 0 : r.uid) !== v.v1) {
                            let e = "/profile/".concat(null === (l = a.user) || void 0 === l ? void 0 : l.uid);
                            y("home_creator_click", {
                                project_id: a.project_id,
                                project_url: a.project_url,
                                creator_profile_url: e
                            }), window.open(e, "_blank")
                        }
                    }, [a.user, w]);
                return (0, l.jsxs)("div", {
                    ref: f,
                    className: "flex w-full cursor-pointer flex-col gap-3 rounded-[16px] bg-white p-2 pb-3 duration-300",
                    onClick: _,
                    children: [(0, l.jsxs)("div", {
                        className: "flex h-full w-full flex-col gap-3",
                        children: [(0, l.jsx)("div", {
                            className: "relative overflow-hidden rounded-[8px] border border-black/6",
                            onMouseEnter: () => {
                                var e;
                                null === (e = j.current) || void 0 === e || e.play()
                            },
                            onMouseLeave: () => {
                                var e;
                                null === (e = j.current) || void 0 === e || e.pause()
                            },
                            children: (0, l.jsx)("div", {
                                className: "aspect-[16/9] w-full overflow-hidden",
                                children: (0, l.jsx)(h.A, {
                                    url: null !== (r = null !== (t = a.custom_cover_url) && void 0 !== t ? t : a.cover_url) && void 0 !== r ? r : "",
                                    className: "h-full w-full object-cover transition-transform duration-300 hover:scale-102",
                                    ref: j,
                                    alt: a.title ? "Screenshot of ".concat(a.title) : "Screenshot of project"
                                })
                            })
                        }), (0, l.jsx)(g.A, {
                            project: a,
                            userClick: k
                        })]
                    }), (0, l.jsx)("div", {
                        className: "px-1",
                        children: (0, l.jsx)(b.A, {
                            project: a
                        })
                    })]
                })
            };

            function j() {
                return (0, l.jsx)("div", {
                    className: "3xl:grid-cols-4 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3",
                    children: Array(12).fill(0).map((e, t) => (0, l.jsxs)("div", {
                        className: "flex w-full flex-col gap-3 rounded-[16px] bg-white p-2 pb-3",
                        children: [(0, l.jsx)("div", {
                            className: "relative overflow-hidden rounded-[8px]",
                            children: (0, l.jsx)("div", {
                                className: "aspect-[16/9] w-full animate-pulse bg-black/3"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-2 px-1",
                            children: [(0, l.jsx)("div", {
                                className: "h-[30px] w-[30px] animate-pulse rounded-full bg-black/3"
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-1 flex-col gap-0.5",
                                children: [(0, l.jsx)("div", {
                                    className: "h-4 w-[211px] max-w-full animate-pulse rounded bg-black/3"
                                }), (0, l.jsx)("div", {
                                    className: "h-3 w-[102px] max-w-full animate-pulse rounded bg-black/3"
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flex items-center gap-2 px-1",
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)("div", {
                                    className: "h-7 w-[38px] animate-pulse rounded-[8px] bg-black/3"
                                }), (0, l.jsx)("div", {
                                    className: "h-7 w-[38px] animate-pulse rounded-[8px] bg-black/3"
                                }), (0, l.jsx)("div", {
                                    className: "h-7 w-[38px] animate-pulse rounded-[8px] bg-black/3"
                                })]
                            })
                        })]
                    }, t))
                })
            }

            function y(e) {
                let {
                    categories: t,
                    initialCategory: r,
                    initialProjects: i,
                    initialPageInfo: d,
                    isNewInstall: h
                } = e, b = (0, n.useSearchParams)(), [g, v] = (0, s.useState)(r), [y, _] = (0, s.useState)(h), [k, N] = (0, s.useState)(i), [S, C] = (0, s.useState)(!1), [P, E] = (0, s.useState)(null), [A, T] = (0, s.useState)({
                    next_cursor: (null == d ? void 0 : d.next_cursor) || "",
                    has_more: (null == d ? void 0 : d.has_more) || !0
                }), [I, R] = (0, s.useState)(!1), [F, D] = (0, s.useState)(!1), [L, z] = (0, s.useState)(0), U = (0, s.useRef)(null), M = (0, s.useRef)(null), B = (0, s.useRef)(null), W = (0, s.useRef)(null), K = (0, s.useRef)(!1), O = (0, s.useRef)(null), {
                    track: q,
                    inject: H
                } = (0, x.s)(), {
                    handleExposure: J
                } = u();
                (0, s.useEffect)(() => {
                    (async () => {
                        await c() || m()
                    })()
                }, []), (0, s.useEffect)(() => {
                    H({
                        is_new_user: y
                    })
                }, [y]), (0, s.useEffect)(() => {
                    B.current && 0 === L && z(B.current.getBoundingClientRect().top + window.scrollY - 56)
                }, [L, k]), (0, s.useEffect)(() => {
                    let e = !0,
                        t = new IntersectionObserver(t => {
                            let [r] = t;
                            if (e) {
                                e = !1;
                                return
                            }
                            let l = r.boundingClientRect,
                                a = window.innerHeight;
                            !(l.top > a) && D(!r.isIntersecting)
                        }, {
                            threshold: 0,
                            rootMargin: "-56px 0px 0px 0px"
                        });
                    return W.current && t.observe(W.current), () => t.disconnect()
                }, []), (0, s.useEffect)(() => {
                    let e = b.get("category");
                    if (e && t.length > 0) {
                        let r = t.find(t => t.display_name.toLowerCase().replace(/\s/g, "") === e.toLowerCase().replace("-", ""));
                        if (r && r.category_id !== (null == g ? void 0 : g.category_id)) {
                            v(r), C(!0), N([]), O.current = null, K.current = !1, Y(!0, r.category_id);
                            let e = new URLSearchParams(b);
                            e.delete("category");
                            let t = e.toString() ? "/?".concat(e.toString()) : "/";
                            window.history.replaceState({}, "", t)
                        }
                    }
                }, [b, t]);
                let Y = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (K.current) return;
                        let r = o({
                            page_size: 12,
                            cursor: e ? "" : A.next_cursor,
                            ...y ? {
                                is_new_user: y
                            } : {},
                            ...t && "all" !== t ? {
                                category_id: t
                            } : {}
                        });
                        O.current = r;
                        try {
                            K.current = !0, e ? C(!0) : R(!0);
                            let t = await r;
                            if (O.current !== r) {
                                console.log("Request cancelled: newer request is available");
                                return
                            }
                            if (0 === t.code && t.data) {
                                var l;
                                let r = (null === (l = t.data) || void 0 === l ? void 0 : l.projects) || [];
                                e ? N(r) : N(e => {
                                    let t = r.filter(t => !e.some(e => e.project_id === t.project_id));
                                    return [...e, ...t]
                                }), T(t.data.page_info), E(null)
                            } else E(t.message || "Failed to load projects")
                        } catch (e) {
                            if (O.current !== r) {
                                console.log("Request error ignored: newer request is available");
                                return
                            }
                            E("An error occurred while fetching projects"), T({
                                next_cursor: "",
                                has_more: !1
                            })
                        } finally {
                            O.current === r && (C(!1), R(!1), K.current = !1, O.current = null)
                        }
                    },
                    V = async e => {
                        q("home_category_tab_click", {
                            tab_name: e.display_name
                        }), v(e), C(!0), N([]), O.current = null, K.current = !1, Y(!0, e.category_id), F && L > 0 && setTimeout(() => {
                            window.scrollTo({
                                top: Math.max(0, L),
                                behavior: "smooth"
                            })
                        }, 0)
                    };
                (0, s.useEffect)(() => (0, p.WW)(e => {
                    let {
                        categoryName: r,
                        scrollToProjects: l
                    } = e;
                    if (t.length > 0) {
                        let e = t.find(e => e.display_name.toLowerCase().replace(/\s/g, "") === r.toLowerCase().replace("-", ""));
                        e && e.category_id !== (null == g ? void 0 : g.category_id) && V(e), l && (0, p.$i)()
                    }
                }), [t]);
                let $ = () => {
                        S || I || !A.has_more || Y(!1, g ? g.category_id : void 0)
                    },
                    G = (e, t) => {
                        N(r => r.map(r => r.project_id === e.project_id ? { ...r,
                            interaction: t
                        } : r))
                    };
                return (0, s.useEffect)(() => () => {
                    O.current = null
                }, []), (0, s.useEffect)(() => (U.current && U.current.disconnect(), U.current = new IntersectionObserver(e => {
                    let [t] = e;
                    !t.isIntersecting || !A.has_more || S || I || P || $()
                }, {
                    rootMargin: "0px 0px 600px 0px",
                    threshold: .1
                }), M.current && U.current.observe(M.current), () => {
                    U.current && U.current.disconnect()
                }), [A.has_more, S, I, P, $]), (0, l.jsxs)("div", {
                    className: "mx-auto w-full max-w-[2000px] px-5 py-4 sm:px-4 md:px-22",
                    children: [(0, l.jsx)("div", {
                        ref: W,
                        className: "h-0 w-0"
                    }), (0, l.jsx)("div", {
                        ref: B,
                        children: (0, l.jsx)(f, {
                            className: "mb-4",
                            categories: t,
                            selectedCategory: g,
                            loading: S,
                            onCategoryChange: V,
                            isSticky: F
                        })
                    }), F && (0, l.jsx)("div", {
                        className: "h-16 w-full bg-transparent"
                    }), S ? (0, l.jsx)(j, {}) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "3xl:grid-cols-4 mx-auto grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-3",
                            "data-project-grid": !0,
                            children: k.map((e, t) => (0, l.jsx)(w, {
                                project: e,
                                area: "codecamp",
                                index: t,
                                onUpdate: G,
                                onExposure: J,
                                tabName: (null == g ? void 0 : g.display_name) || ""
                            }, "".concat(e.project_id, "-").concat(t)))
                        }), 0 === k.length && !S && !P && (0, l.jsxs)("div", {
                            className: "my-8 py-16 text-center",
                            children: [(0, l.jsx)("p", {
                                className: "mb-2 text-xl font-medium text-black/95",
                                children: "No projects found"
                            }), (0, l.jsx)("p", {
                                className: "text-sm text-black/95",
                                children: "Upload your first project to get started"
                            })]
                        }), P && (0, l.jsx)("div", {
                            className: "my-8 rounded-lg p-6 text-center text-red-500",
                            children: P
                        })]
                    }), (0, l.jsx)("div", {
                        ref: M,
                        className: "mt-8 h-20 w-full"
                    }), A.has_more && !S && (0, l.jsx)("div", {
                        className: "mt-8 flex justify-center",
                        children: (0, l.jsx)("button", {
                            onClick: $,
                            disabled: I || K.current,
                            className: "rounded-full bg-black/3 px-4 py-2 text-[14px] text-black/95 transition-colors duration-200 hover:bg-black/6 disabled:opacity-70",
                            children: I ? (0, l.jsxs)("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0, l.jsx)(a.xNY, {
                                    className: "h-4 w-4 animate-spin text-black/95"
                                }), (0, l.jsx)("p", {
                                    children: "Loading more..."
                                })]
                            }) : "More ideas"
                        })
                    })]
                })
            }
        },
        14069: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => s
            });
            var l = r(95155),
                a = r(12115),
                n = r(56389);

            function s(e) {
                let {
                    children: t
                } = e, {
                    track: r
                } = (0, n.s)();
                return (0, a.useEffect)(() => {
                    r("home_page_view");
                    let e = window.location.hash;
                    if (e) {
                        let t = e.substring(1),
                            r = () => {
                                let e = document.getElementById(t);
                                e ? e.scrollIntoView({
                                    behavior: "smooth"
                                }) : setTimeout(r, 100)
                            };
                        setTimeout(r, 200)
                    }
                }, [r]), (0, l.jsx)(l.Fragment, {
                    children: t
                })
            }
        },
        16556: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var l = r(95155);
            r(12115);
            let a = e => {
                var t, r, a, n, s;
                let {
                    project: i,
                    userClick: o
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex flex-row justify-start gap-2 pl-1",
                    children: [(0, l.jsx)("img", {
                        src: (null === (t = i.user) || void 0 === t ? void 0 : t.photo_url) || "/images/avatar.svg",
                        className: "mt-0.5 h-[30px] w-[30px] cursor-pointer rounded-full",
                        onClick: o,
                        alt: "user avatar"
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, l.jsx)("div", {
                            className: "text-[14px] text-black/95",
                            children: null !== (s = null !== (n = i.custom_title) && void 0 !== n ? n : i.title) && void 0 !== s ? s : "".concat(null === (r = i.user) || void 0 === r ? void 0 : r.display_name, "'s project")
                        }), (0, l.jsx)("div", {
                            className: "text-[12px] text-black/30",
                            onClick: o,
                            children: null === (a = i.user) || void 0 === a ? void 0 : a.display_name
                        })]
                    })]
                })
            }
        },
        43072: (e, t, r) => {
            "use strict";
            r.d(t, {
                $i: () => s,
                QT: () => a,
                WW: () => n
            });
            let l = "category-switch",
                a = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = new CustomEvent(l, {
                            detail: {
                                categoryName: e,
                                scrollToProjects: t
                            }
                        });
                    window.dispatchEvent(r)
                },
                n = e => {
                    let t = t => {
                        e(t.detail)
                    };
                    return window.addEventListener(l, t), () => {
                        window.removeEventListener(l, t)
                    }
                },
                s = () => {
                    setTimeout(() => {
                        let e = document.getElementById("trending-projects");
                        e && e.scrollIntoView({
                            behavior: "instant"
                        })
                    }, 100)
                }
        },
        46065: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var l = r(95155),
                a = r(25427),
                n = r(66766),
                s = r(12115),
                i = r(68236),
                o = r(61884);
            let c = e => {
                let {
                    project: t
                } = e, r = (0, s.useMemo)(() => {
                    var e, r;
                    return null !== (r = null === (e = t.interaction) || void 0 === e ? void 0 : e.count.reduce((e, t) => e + t.count, 0)) && void 0 !== r ? r : 0
                }, [t.interaction]), c = e => (0, l.jsx)("span", {
                    className: "pt-0.5 text-[14px] text-black/95",
                    children: (0, o.Z)(e)
                }), d = (e, t) => (0, l.jsxs)("div", {
                    className: "flex h-7 items-center gap-1 rounded-lg border border-black/[0.03] px-1.5",
                    children: [e, c(t)]
                });
                return (0, l.jsxs)("div", {
                    className: "flex flex-row items-center gap-1.5",
                    children: [(() => {
                        var e;
                        return d((0, l.jsx)(a.tLq, {
                            className: "h-3.5 w-3.5"
                        }), null !== (e = t.view_count) && void 0 !== e ? e : 0)
                    })(), d((0, l.jsx)(n.default, {
                        src: i.A,
                        alt: "emoji reaction count",
                        className: "h-3.5 w-6.5"
                    }), r), (() => {
                        var e;
                        return d((0, l.jsx)(a.Z0O, {
                            className: "h-3.5 w-3.5"
                        }), null !== (e = t.comment_count) && void 0 !== e ? e : 0)
                    })()]
                })
            }
        },
        46116: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => u,
                r: () => n
            });
            var l = r(12115),
                a = r(13960);

            function n() {
                let [e, t] = (0, l.useState)(!1), {
                    subscriptionInfo: r
                } = (0, a.R)();
                return {
                    showCreditsModal: e,
                    setShowCreditsModal: t,
                    checkCreditsAndShow: () => ((null == r ? void 0 : r.total_credits) || 0) > 0 || (t(!0), !1)
                }
            }
            var s = r(95155),
                i = r(25427),
                o = r(47650),
                c = r(53568),
                d = r(56389);
            let u = e => {
                let {
                    isOpen: t,
                    onClose: r,
                    from: l
                } = e, {
                    user: a
                } = (0, c.A)(), {
                    track: n
                } = (0, d.s)();
                return t ? (0, o.createPortal)((0, s.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                    children: (0, s.jsxs)("div", {
                        className: "relative w-[270px] rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [(0, s.jsx)("button", {
                            onClick: r,
                            className: "absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-lg text-black/95 hover:bg-black/3",
                            "aria-label": "Close modal",
                            children: (0, s.jsx)(i.Qks, {
                                className: "h-4 w-4"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-center text-center",
                            children: [(0, s.jsx)("div", {
                                className: "mt-6 mb-3 flex h-12 w-12 items-center justify-center",
                                children: (0, s.jsx)(i.Djw, {
                                    className: "text-brand h-11 w-11 font-bold"
                                })
                            }), (0, s.jsx)("h2", {
                                className: "mb-3 text-lg font-bold text-black/95",
                                children: "You’re out of credits"
                            }), (0, s.jsx)("p", {
                                className: "mb-17.5 text-sm text-black/65",
                                children: "Upgrade your plan to get more and keep going."
                            }), (0, s.jsx)("button", {
                                onClick: () => {
                                    (null == a ? void 0 : a.uid) && (n("sub_upgrade_click", {
                                        click_from: l
                                    }), window.open("/subscription?openSelector=true", "_blank")), r()
                                },
                                className: "bg-brand h-9 w-full cursor-pointer rounded-[10px] text-sm font-medium text-white",
                                children: "Get more credits"
                            })]
                        })]
                    })
                }), document.body) : null
            }
        },
        61542: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => Q
            });
            var l = r(95155),
                a = r(35695),
                n = r(12115),
                s = r(53568),
                i = r(26846),
                o = r(25427),
                c = r(44684),
                d = r(46116),
                u = r(31652),
                x = r(1021);

            function p(e) {
                let {
                    className: t = "",
                    size: r = 20
                } = e;
                return (0, l.jsx)("div", {
                    className: t,
                    style: {
                        width: r,
                        height: r
                    },
                    role: "status",
                    "aria-label": "Loading",
                    children: (0, l.jsx)(x.A, {
                        animationPath: "/animations/loading-dots.json",
                        loop: !0,
                        autoplay: !0,
                        renderer: "svg",
                        style: {
                            width: r,
                            height: r
                        }
                    })
                })
            }
            var m = r(86380),
                f = r(6906),
                h = r(50572);
            let b = () => {
                    var e;
                    return null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent
                },
                g = () => {
                    let e = b();
                    return /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
                },
                v = e => {
                    let t = window;
                    return (t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || (e => setTimeout(() => e(Date.now()), 16)))(e)
                },
                w = e => {
                    let t = window;
                    (t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || (e => clearTimeout(e)))(e)
                },
                j = (0, n.forwardRef)((e, t) => {
                    let {
                        initialValue: r = "",
                        placeholder: a,
                        disabled: s = !1,
                        className: o,
                        style: c = {},
                        children: d,
                        onChange: u,
                        onKeyDown: x,
                        onPaste: p,
                        onBlur: b,
                        onCompositionStart: g,
                        onCompositionEnd: j,
                        onFocus: y,
                        ..._
                    } = e, k = (0, n.useMemo)(() => (0, f.$k)((0, h.o$)((0, m.ie)())), []), N = (0, n.useRef)(null), S = (0, n.useRef)(!1), [C, P] = (0, n.useState)(!0), E = (0, n.useRef)(null), A = (0, n.useMemo)(() => [{
                        type: "paragraph",
                        children: [{
                            text: r
                        }]
                    }], [r]), T = (0, n.useCallback)(() => {
                        if (!N.current) return "";
                        try {
                            let e;
                            let t = N.current.querySelector('[data-slate-editor="true"]');
                            if (!t) return "";
                            let r = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => {
                                        let r = e.parentElement;
                                        for (; r && r !== t;) {
                                            if ("false" === r.contentEditable) return NodeFilter.FILTER_REJECT;
                                            r = r.parentElement
                                        }
                                        return NodeFilter.FILTER_ACCEPT
                                    }
                                }),
                                l = "";
                            for (; e = r.nextNode();) l += e.textContent || "";
                            return l
                        } catch (e) {
                            return console.error(e), ""
                        }
                    }, []), I = (0, n.useCallback)(() => T(), [T]), R = (0, n.useCallback)(() => {
                        if (k) try {
                            let e = m.KE.end(k, []);
                            m.gB.select(k, e), h.rL.focus(k)
                        } catch (e) {
                            h.rL.focus(k)
                        }
                    }, [k]), F = (0, n.useCallback)(e => {
                        if (!k) return;
                        for (; k.children.length > 0;) m.gB.removeNodes(k, {
                            at: [0]
                        });
                        k.history.undos = [], k.history.redos = [], m.gB.insertNodes(k, [{
                            type: "paragraph",
                            children: [{
                                text: e
                            }]
                        }], {
                            at: [0]
                        });
                        let t = m.KE.start(k, [0]);
                        m.gB.select(k, t), h.rL.focus(k), null == u || u(e)
                    }, [k, R, u]), D = (0, n.useCallback)(e => {
                        if (k) {
                            h.rL.focus(k);
                            try {
                                let t = m.KE.end(k, []);
                                m.gB.select(k, t), f.KJ.withNewBatch(k, () => {
                                    m.gB.insertText(k, e)
                                })
                            } catch (t) {
                                console.error("applyError, use resetValue", e), F(I() + e)
                            }
                        }
                    }, [k, I, F]), L = (0, n.useCallback)(() => {
                        if (k) try {
                            f.KJ.undo(k)
                        } catch (e) {
                            console.warn("Undo failed:", e)
                        }
                    }, [k]), z = (0, n.useCallback)(() => {
                        if (k) try {
                            f.KJ.redo(k)
                        } catch (e) {
                            console.warn("Redo failed:", e)
                        }
                    }, [k]);
                    (0, n.useImperativeHandle)(t, () => ({
                        focus: () => {
                            try {
                                h.rL.focus(k)
                            } catch (t) {
                                var e;
                                null === (e = N.current) || void 0 === e || e.focus()
                            }
                        },
                        blur: () => {
                            try {
                                h.rL.blur(k)
                            } catch (t) {
                                var e;
                                null === (e = N.current) || void 0 === e || e.blur()
                            }
                        },
                        getElement: () => N.current,
                        getTextContent: I,
                        setCursorToEnd: R,
                        insertText: D,
                        resetValue: F,
                        undo: L,
                        redo: z
                    }));
                    let U = (0, n.useCallback)(e => {
                            null == u || u(e.map(e => m.bP.string(e)).join("\n"))
                        }, [T, u]),
                        M = (0, n.useCallback)(() => {
                            S.current = !0, P(!1), E.current && (w(E.current), E.current = null), null == g || g()
                        }, [g]),
                        B = (0, n.useCallback)(() => {
                            S.current = !1, null == j || j(), v(() => {
                                v(() => {
                                    P(!0), E.current = null
                                })
                            })
                        }, [j]),
                        W = (0, n.useCallback)(e => {
                            if (null == p || p(e), e.defaultPrevented) return;
                            let t = e.clipboardData.getData("text/plain");
                            if (t) {
                                e.preventDefault();
                                try {
                                    f.KJ.withNewBatch(k, () => {
                                        m.KE.insertText(k, t)
                                    })
                                } catch (e) {
                                    console.error("Paste failed:", e)
                                }
                            }
                        }, [k, p]),
                        K = (0, n.useCallback)(e => {
                            if ((e.ctrlKey || e.metaKey) && !e.shiftKey && "z" === e.key) {
                                e.preventDefault(), L();
                                return
                            }
                            if ((e.ctrlKey || e.metaKey) && e.shiftKey && "z" === e.key || (e.ctrlKey || e.metaKey) && "y" === e.key) {
                                e.preventDefault(), z();
                                return
                            }
                            null == x || x(e)
                        }, [k, x, L, z]),
                        O = (0, n.useCallback)(e => {
                            let [t, r] = e;
                            if (!m.EY.isText(t) || !d || S.current || !C) return [];
                            try {
                                let [e, l] = m.KE.last(k, []);
                                if (m.EY.isText(e) && r.length === l.length && r.every((e, t) => e === l[t])) return [{
                                    anchor: {
                                        path: r,
                                        offset: t.text.length
                                    },
                                    focus: {
                                        path: r,
                                        offset: t.text.length
                                    },
                                    isTrailing: !0
                                }]
                            } catch (e) {}
                            return []
                        }, [k, d]),
                        q = (0, n.useCallback)(e => {
                            let {
                                attributes: t,
                                children: r,
                                leaf: a
                            } = e;
                            return (0, l.jsxs)("span", { ...t,
                                children: [r, a.isTrailing && d && !S.current && (0, l.jsx)("span", {
                                    contentEditable: !1,
                                    suppressContentEditableWarning: !0,
                                    style: {
                                        userSelect: "none",
                                        display: "inline",
                                        WebkitUserSelect: "none",
                                        MozUserSelect: "none",
                                        msUserSelect: "none"
                                    },
                                    onMouseDown: e => {
                                        e.preventDefault()
                                    },
                                    onClick: e => {
                                        e.preventDefault(), e.stopPropagation()
                                    },
                                    children: d
                                })]
                            })
                        }, [d]);
                    return (0, l.jsx)("div", {
                        ref: N,
                        className: (0, i.cn)("w-full overflow-x-hidden overflow-y-auto border-none bg-transparent outline-none", "contenteditable-input", o),
                        ..._,
                        children: (0, l.jsx)(h.A, {
                            editor: k,
                            initialValue: A,
                            onValueChange: U,
                            children: (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(h.Fo, {
                                    readOnly: s,
                                    onKeyDown: K,
                                    onPaste: W,
                                    onBlur: b,
                                    onCompositionStart: M,
                                    onCompositionEnd: B,
                                    onFocus: y,
                                    placeholder: a,
                                    decorate: O,
                                    renderLeaf: q,
                                    className: (0, i.cn)("w-full overflow-x-hidden overflow-y-auto outline-none"),
                                    style: {
                                        outline: "none",
                                        border: "none",
                                        background: "transparent",
                                        width: "100%",
                                        minHeight: "inherit",
                                        ...c
                                    }
                                })
                            })
                        })
                    })
                });
            j.displayName = "PlateEditableInput";
            var y = r(70165);
            let _ = {
                complete: "complete"
            };
            var k = r(49512),
                N = r(66139);
            let S = "yw-pending-action-";
            var C = function(e) {
                return e.CreateWeb = "create_web", e.HomeUpload = "home_upload", e.HtmlShip = "html_ship", e
            }({});
            let P = e => {
                    localStorage.setItem(S + e.key, JSON.stringify(e))
                },
                E = () => {
                    let {
                        user: e
                    } = (0, s.A)(), t = e => {
                        if (new URLSearchParams(window.location.search).get("pending_action") !== e) return null;
                        let t = localStorage.getItem(S + e);
                        return t ? JSON.parse(t) : null
                    }, r = e => {
                        localStorage.removeItem(S + e)
                    }, l = () => {
                        let e = new URL(window.location.href);
                        e.searchParams.delete("pending_action"), window.history.replaceState({}, "", e.toString())
                    };
                    return {
                        withAuth: async t => {
                            let {
                                key: r,
                                payload: l,
                                extraParams: a = {},
                                action: n,
                                reject: s
                            } = t;
                            if (e) await n(l);
                            else {
                                null == s || s(), P({
                                    key: r,
                                    payload: l,
                                    extraParams: a
                                });
                                let e = (0, N.$)(!0) + window.location.pathname,
                                    t = new URLSearchParams(window.location.search);
                                t.set("pending_action", r), Object.entries(a).forEach(e => {
                                    let [r, l] = e;
                                    t.set(r, l)
                                });
                                let n = encodeURIComponent("".concat(e, "?").concat(t.toString())),
                                    i = (0, N.$)(!0);
                                window.location.href = "".concat(i, "/login?returnTo=").concat(n)
                            }
                        },
                        checkPendingAction: t,
                        clearPendingAction: r,
                        clearSearchParams: l,
                        runPendingAction: function(e, a) {
                            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                                i = t(e);
                            return !!i && i.key === e && !!i.payload && (a(i.payload), n && r(e), s && l(), !0)
                        }
                    }
                };
            var A = r(47511),
                T = r(87895),
                I = r(80191),
                R = r(56389),
                F = r(48436),
                D = r(96834);
            let L = async (e, t) => await (0, D.qM)("/prompt/suggestion", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: e,
                    signal: t
                }),
                z = e => {
                    if (!e || "string" != typeof e) return !1;
                    let t = !1,
                        r = !1;
                    for (let l = 0; l < e.length; l++) {
                        let a = e.charCodeAt(l);
                        if (a >= 1424 && a <= 1535 || a >= 1536 && a <= 1791 || a >= 1792 && a <= 1871 || a >= 1920 && a <= 1983 || a >= 1984 && a <= 2047 || a >= 2160 && a <= 2207 || a >= 2208 && a <= 2303 || a >= 64336 && a <= 65023 || a >= 65136 && a <= 65279) {
                            if (t = !0, r) return !0
                        } else if ((a >= 65 && a <= 122 || a >= 192 && a <= 591 || a >= 1024 && a <= 1279 || a >= 880 && a <= 1023 || a >= 19968 && a <= 40959 || a >= 12352 && a <= 12447 || a >= 12448 && a <= 12543 || a >= 44032 && a <= 55215) && (r = !0, t)) return !0
                    }
                    return !1
                },
                U = () => {
                    let e = Date.now().toString(36),
                        t = Math.random().toString(36).substring(2, 8);
                    return "trace_".concat(e, "_").concat(t)
                },
                M = () => new URLSearchParams(window.location.search).get("trace_id") || U(),
                B = () => {
                    let [e, t] = (0, n.useState)(!1), [r, a] = (0, n.useState)(""), [s, x] = (0, n.useState)(""), [m, f] = (0, n.useState)(!1), [h, b] = (0, n.useState)(!1), {
                        remixAction: v
                    } = (0, I.N)(), {
                        track: w,
                        trackGoogleAds: N
                    } = (0, R.s)(), {
                        runPendingAction: S,
                        withAuth: P
                    } = E(), {
                        createWeb: D
                    } = (0, A.g)(), {
                        addFile: U,
                        attachments: B,
                        setAttachments: W,
                        removeAttachment: K,
                        handleRetry: O
                    } = (0, T.j)(), {
                        UploadInput: q,
                        handlePlusClick: H,
                        handlePaste: J,
                        dropHandlers: Y,
                        DragOverlay: V
                    } = (0, k.O)({
                        options: {
                            allowedExtensions: k._,
                            maxAttachments: 20,
                            currentCount: B.length
                        },
                        handleFile: e => {
                            U(e)
                        }
                    }), $ = r.trim(), {
                        showCreditsModal: G,
                        setShowCreditsModal: Q,
                        checkCreditsAndShow: Z
                    } = (0, d.r)(), X = (0, n.useRef)(null), ee = (0, n.useRef)(null), et = (0, n.useRef)(null), er = (0, n.useRef)({
                        trace_id: "",
                        location: "home"
                    }), el = (0, n.useRef)(!1);
                    (0, n.useEffect)(() => (eo({
                        trace_id: M()
                    }), () => {
                        X.current && clearTimeout(X.current), ee.current && ee.current.abort()
                    }), []);
                    let ea = () => {
                            b(!1), f(!1), x(""), X.current && clearTimeout(X.current), ee.current && (ee.current.abort(), ee.current = null)
                        },
                        en = async e => {
                            b(!0);
                            let t = B.filter(e => e.status === _.complete).map(e => ({
                                    name: e.name,
                                    type: e.type
                                })),
                                r = {
                                    user_input: e,
                                    file_name: t.map(e => e.name).join(",")
                                };
                            w("input_box_prompt_prediction_query_sent", { ...er.current,
                                ...r
                            });
                            let l = await eu(e, t);
                            b(!1), ed(l, r)
                        },
                        es = e => {
                            e.trim().length && e.length >= y.FW && e.length <= y.lf && !z(e) && !el.current && (X.current = setTimeout(() => {
                                el.current || en(e)
                            }, 400))
                        };
                    (0, n.useEffect)(() => {
                        "" !== r || e || S(C.CreateWeb, async e => {
                            t(!0), a(e.userPrompt), W(e.attachments), et.current && et.current.resetValue(e.userPrompt), await ei(e.userPrompt, e.attachments)
                        })
                    }, [r, e, S]);
                    let ei = async (e, r) => {
                            if (r.filter(e => "pending" === e.status || "uploading" === e.status).length > 0) {
                                (0, F.P)({
                                    message: "Attachments are uploading, please wait...",
                                    type: "error"
                                });
                                return
                            }
                            let l = {
                                trace_id: er.current.trace_id || ""
                            };
                            ea(), t(!0), await P({
                                key: C.CreateWeb,
                                payload: {
                                    userPrompt: e,
                                    attachments: r,
                                    createdTime: Date.now()
                                },
                                action: async () => {
                                    if (!Z()) {
                                        t(!1);
                                        return
                                    }
                                    await D(e, r), await v(I.V, "create"), N("conversion", {
                                        send_to: "AW-16989287560/jnD3CJrv6ccaEIjpj6U_"
                                    }), w("create_new_start", { ...l,
                                        query_detail: e,
                                        files_num: r.length,
                                        files_mime_type: JSON.stringify(r.map(e => {
                                            var t;
                                            return null === (t = e.file) || void 0 === t ? void 0 : t.type
                                        }).filter(Boolean)),
                                        files_name: JSON.stringify(r.map(e => {
                                            var t;
                                            return null === (t = e.file) || void 0 === t ? void 0 : t.name
                                        }).filter(Boolean))
                                    }), setTimeout(() => {
                                        t(!1)
                                    }, 1e3)
                                },
                                extraParams: { ...l
                                }
                            })
                        },
                        eo = e => {
                            er.current = { ...er.current,
                                ...e
                            }
                        },
                        ec = () => {
                            m && s && et.current && (et.current.focus(), et.current.insertText(s), x(""), f(!1), w("input_box_prompt_prediction_result_accept", { ...er.current,
                                prediction_detail: s
                            }))
                        },
                        ed = (e, t) => {
                            e && (w("input_box_prompt_prediction_result_show", { ...er.current,
                                ...t,
                                prediction_detail: e
                            }), eo({
                                file_name: null == t ? void 0 : t.file_name
                            }), x(e), f(!0))
                        },
                        eu = async (e, t) => {
                            let r = Date.now();
                            try {
                                var l;
                                ee.current && ee.current.abort();
                                let a = new AbortController;
                                ee.current = a;
                                let n = await L({
                                    query: e,
                                    attachments: t
                                }, a.signal);
                                if (a.signal.aborted) return "";
                                let s = (null === (l = n.data) || void 0 === l ? void 0 : l.suggestion) || "";
                                return w("input_box_prompt_prediction_query_result", { ...er.current,
                                    user_input: e,
                                    file_name: t.map(e => e.name).join(","),
                                    prediction_detail: s,
                                    duration: Date.now() - r,
                                    status: "success"
                                }), s
                            } catch (a) {
                                let l = "status: ".concat((null == a ? void 0 : a.status_code) || "unknown", "; reason: ").concat((null == a ? void 0 : a.message) || "unknown", "; request_id: ").concat((null == a ? void 0 : a.request_id) || "unknown");
                                return a instanceof Error && "AbortError" === a.name ? l = "request_canceled" : console.error("Failed to get suggestion:", a), w("input_box_prompt_prediction_query_result", { ...er.current,
                                    user_input: e,
                                    file_name: t.map(e => e.name).join(","),
                                    duration: Date.now() - r,
                                    status: "fail",
                                    fail_reason: l
                                }), ""
                            }
                        },
                        ex = (0, n.useMemo)(() => m && s, [m, s]);
                    return (0, l.jsxs)("div", {
                        className: "relative flex h-full w-full flex-col items-center justify-between gap-3 p-4",
                        ...Y,
                        role: "main",
                        "aria-label": "Create web project editor",
                        children: [(0, l.jsx)(V, {}), (0, l.jsxs)("div", {
                            className: "flex w-full flex-1 flex-col gap-3 bg-white",
                            children: [B.length > 0 && (0, l.jsx)(c.A, {
                                attachments: B,
                                onDelete: K,
                                onRetry: O
                            }), (0, l.jsx)("div", {
                                dir: "auto",
                                className: "relative flex-1",
                                children: (0, l.jsx)(j, {
                                    ref: et,
                                    initialValue: "",
                                    disabled: e,
                                    onChange: e => {
                                        a(e), ea(), es(e)
                                    },
                                    onKeyDown: e => {
                                        if ("Tab" === e.key) {
                                            e.preventDefault(), ec();
                                            return
                                        }
                                        if ((ex || h) && "Escape" === e.key && (e.preventDefault(), ea()), "Enter" === e.key && !e.shiftKey && !e.nativeEvent.isComposing) {
                                            if (!$) {
                                                e.preventDefault();
                                                return
                                            }
                                            e.preventDefault(), ei(r, B)
                                        }
                                    },
                                    onCompositionStart: () => {
                                        el.current = !0, ea()
                                    },
                                    onCompositionEnd: () => {
                                        el.current = !1
                                    },
                                    onPaste: J,
                                    className: (0, i.cn)("w-full flex-1 p-1 text-sm", "contenteditable-input"),
                                    style: {
                                        minHeight: "72px",
                                        maxHeight: B.length > 0 ? "112px" : "160px"
                                    },
                                    placeholder: 'Tell me what you want to build — e.g. "Make me a personal portfolio"',
                                    "aria-label": "Project description input",
                                    "aria-invalid": !1,
                                    role: "textbox",
                                    "aria-multiline": "true",
                                    children: (h || ex) && (0, l.jsxs)("span", {
                                        className: "suggestion-container inline",
                                        contentEditable: !1,
                                        children: [h && (0, l.jsx)(p, {
                                            size: 16,
                                            className: "inline-block pl-[2px] align-text-bottom"
                                        }), ex && (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)("span", {
                                                className: "rounded text-sm leading-5 font-normal tracking-[-0.56px] text-black/30",
                                                children: s
                                            }), (0, l.jsx)("span", {
                                                className: "ml-1.5 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-black/3 px-1.5 py-0.5",
                                                onMouseDown: e => {
                                                    e.preventDefault(), ec()
                                                },
                                                children: g() ? (0, l.jsx)("span", {
                                                    className: "text-[12px] leading-[14px] font-normal tracking-[-0.48px] text-black/45",
                                                    children: "Accept"
                                                }) : (0, l.jsxs)(l.Fragment, {
                                                    children: [(0, l.jsx)("span", {
                                                        className: "text-[12px] leading-[14px] font-normal tracking-[-0.48px] text-black/45",
                                                        children: "Press"
                                                    }), (0, l.jsx)("span", {
                                                        className: "text-[12px] leading-[14px] font-bold tracking-[-0.48px] text-black/45",
                                                        children: "Tab"
                                                    }), (0, l.jsx)("span", {
                                                        className: "text-[12px] leading-[14px] font-normal tracking-[-0.48px] text-black/45",
                                                        children: "to accept"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex w-full justify-between",
                            role: "toolbar",
                            "aria-label": "Editor actions",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)("button", {
                                    className: "flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-black/12 transition-colors hover:bg-black/3",
                                    disabled: e,
                                    onClick: H,
                                    "aria-label": "Add attachment files",
                                    type: "button",
                                    children: (0, l.jsx)(o.Ld_, {
                                        className: "h-4 w-4 text-black"
                                    })
                                }), (0, l.jsx)(u.A, {
                                    className: "h-9 rounded-[10px] border-black/12",
                                    source: "home_page_input",
                                    "aria-label": "Connect integrations"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "flex items-center gap-4",
                                children: e ? (0, l.jsx)("div", {
                                    className: "bg-brand flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-[10px]",
                                    role: "status",
                                    "aria-label": "Submitting, please wait",
                                    children: (0, l.jsx)(o.xNY, {
                                        className: "h-4 w-4 animate-spin text-white"
                                    })
                                }) : (0, l.jsx)("button", {
                                    onClick: () => ei(r, B),
                                    disabled: !$,
                                    className: "flex h-9 w-9 items-center justify-center rounded-[10px] transition-colors ".concat($ ? "bg-brand hover:bg-brand/85 cursor-pointer text-white" : "cursor-not-allowed bg-black/3 text-black/45"),
                                    "aria-label": $ ? "submit" : "Please enter project description to submit",
                                    type: "button",
                                    children: (0, l.jsx)(o.avw, {
                                        className: (0, i.cn)("h-4 w-4", $ ? "text-white" : "text-black/45")
                                    })
                                })
                            })]
                        }), (0, l.jsx)(q, {}), (0, l.jsx)(d.p, {
                            isOpen: G,
                            onClose: () => Q(!1),
                            from: "home_create_pop_up"
                        })]
                    })
                };
            var W = r(6058);
            let K = e => {
                    let t, r, l;
                    return e.includes("import React") || e.includes('from "react"') || e.includes("from 'react'") ? (t = new Blob([e], {
                        type: "application/typescript"
                    }), r = "index.tsx", l = "application/typescript") : (t = new Blob([e], {
                        type: "text/html"
                    }), r = "index.html", l = "text/html"), new File([t], r, {
                        type: l
                    })
                },
                O = e => {
                    let t = [".ds_store", ".git", ".gitignore", ".svn", ".idea", ".vscode", ".tmp", ".temp", ".bak", ".log", ".cache", ".swp"];
                    return e.filter(e => {
                        let r = (e.webkitRelativePath || e.name).split(/[\/\\]/);
                        for (let e of r)
                            if (e.startsWith(".")) return !1;
                        let l = r[r.length - 1];
                        for (let e of t)
                            if (l.toLowerCase().endsWith(e)) return !1;
                        return !0
                    })
                },
                q = async (e, t) => {
                    try {
                        let l = O(e);
                        if (l.length > 1e3) return {
                            error: "too_many_files"
                        };
                        if (0 === l.length || !l.some(e => "text/html" === e.type || e.name.endsWith(".tsx"))) return {
                            error: "invalid_content"
                        };
                        let a = l.some(e => e.name.endsWith(".tsx")),
                            n = new(await r.e(9311).then(r.t.bind(r, 59311, 23))).default;
                        for (let e of l) {
                            let t = e.webkitRelativePath || e.name,
                                r = await e.arrayBuffer();
                            n.file(t, r)
                        }
                        let s = await n.generateAsync({
                                type: "blob"
                            }),
                            i = new File([s], "source_code.zip", {
                                type: "application/zip"
                            });
                        if (s.size > 0x3200000 && !t) return {
                            error: "size_limit_exceeded"
                        };
                        if (!s) return {
                            error: "invalid_content"
                        };
                        return {
                            zipFile: i,
                            isTsx: a
                        }
                    } catch (e) {
                        return console.error("Error during file processing or zip creation:", e), {
                            error: "unknown_error"
                        }
                    }
                };
            var H = r(34326);
            let J = e => {
                let {
                    onUploadSuccess: t,
                    onProjectDeployed: r
                } = e, [a, s] = (0, n.useState)(""), [i, c] = (0, n.useState)(!1), [d, u] = (0, n.useState)(0), {
                    track: x,
                    trackGoogleAds: p
                } = (0, R.s)(), {
                    runPendingAction: m,
                    withAuth: f
                } = E(), h = async () => {
                    if (!a.trim()) {
                        (0, F.P)({
                            message: "Please enter some code first.",
                            type: "error"
                        });
                        return
                    }
                    f({
                        key: C.HtmlShip,
                        payload: a,
                        action: async () => {
                            b(a)
                        },
                        extraParams: {
                            tab: "paste"
                        }
                    })
                };
                (0, n.useEffect)(() => {
                    i || "" !== a || m(C.HtmlShip, async e => {
                        c(!0), s(e), b(e)
                    })
                }, [i]);
                let b = async e => {
                    c(!0), u(0);
                    try {
                        var l, a;
                        let n = setInterval(() => {
                                u(e => e >= 90 ? e : e + 10)
                            }, 200),
                            s = K(e),
                            {
                                zipFile: i,
                                error: o,
                                isTsx: d
                            } = await q([s]);
                        if (o || !i) {
                            clearInterval(n), c(!1), (0, F.P)({
                                message: {
                                    invalid_content: "Deployment error: The uploaded folder contains unsupported or invalid content.",
                                    size_limit_exceeded: "Upload failed: The folder exceeds the 10MB size limit.",
                                    unknown_error: "Error compressing or uploading files",
                                    too_many_files: "Upload failed: The folder contains too many files"
                                }[o || "invalid_content"],
                                type: "error"
                            });
                            return
                        }
                        p("conversion", {
                            send_to: "AW-16989287560/jnD3CJrv6ccaEIjpj6U_"
                        }), x("upload_click", {
                            file_type: d ? "tsx" : "html",
                            file_size: (i.size / 1048576).toFixed(2) + " MB"
                        });
                        let m = await (0, H.Q)(i, {
                                eventType: "source_code",
                                isPublic: !1,
                                needUrl: !1
                            }),
                            f = await (0, W.p)(m.file_id);
                        clearInterval(n), u(100), c(!1), x("deploy_success", {
                            project_id: null === (l = f.data) || void 0 === l ? void 0 : l.project_id,
                            project_url: null === (a = f.data) || void 0 === a ? void 0 : a.project_url,
                            file_type: d ? "tsx" : "html",
                            file_size: (i.size / 1048576).toFixed(2) + " MB"
                        }), f.data && (null == t || t(f.data), null == r || r(f.data.project_id))
                    } catch (e) {
                        console.error("Error during upload process:", e), c(!1), (0, F.P)({
                            message: "Upload failed. Please try again.",
                            type: "error"
                        })
                    }
                };
                return (0, l.jsxs)("div", {
                    className: "flex h-full w-full flex-col p-4",
                    children: [(0, l.jsx)("textarea", {
                        className: "h-full flex-1 resize-none border-none p-1 pb-4 text-[14px] text-black/95 placeholder:text-black/30 focus:outline-none",
                        value: a,
                        onChange: e => {
                            s(e.target.value)
                        },
                        placeholder: "Paste your HTML or TSX code here...",
                        disabled: i
                    }), (0, l.jsx)("div", {
                        className: "flex justify-end",
                        children: i ? (0, l.jsxs)("div", {
                            className: "bg-brand flex h-9 cursor-not-allowed items-center justify-center gap-2 rounded-[10px] px-2.5 text-[16px] text-white",
                            children: [(0, l.jsx)(o.xNY, {
                                className: "h-4 w-4 animate-spin text-white"
                            }), (0, l.jsxs)("span", {
                                children: ["Uploading ", d, "%"]
                            })]
                        }) : (0, l.jsx)("button", {
                            className: "bg-brand flex h-9 cursor-pointer items-center justify-center rounded-[10px] px-3 text-base text-white disabled:cursor-not-allowed disabled:bg-black/6 disabled:text-black/30",
                            onClick: h,
                            disabled: i || !a.trim(),
                            children: "Ship It"
                        })
                    })]
                })
            };
            var Y = r(56289),
                V = r(40146);
            let $ = e => {
                    let {
                        onUploadSuccess: t,
                        onProjectDeployed: r
                    } = e, [a, i] = (0, n.useState)(!1), [c, d] = (0, n.useState)(0), {
                        runPendingAction: u,
                        withAuth: x
                    } = E(), {
                        track: p,
                        trackGoogleAds: m
                    } = (0, R.s)(), {
                        user: f
                    } = (0, s.A)(), h = async e => {
                        i(!0), d(0);
                        try {
                            var l, a, n;
                            let s = setInterval(() => {
                                    d(e => e >= 90 ? e : e + 10)
                                }, 200),
                                {
                                    zipFile: o,
                                    error: c,
                                    isTsx: u = !1
                                } = await q(e, (null == f ? void 0 : f.role) === "admin" || (null == f ? void 0 : f.role) === "employee");
                            if (c || !o) {
                                clearInterval(s), i(!1), (0, F.P)({
                                    message: {
                                        invalid_content: "Deployment error: The uploaded folder contains unsupported or invalid content.",
                                        size_limit_exceeded: "Upload failed: The folder exceeds the 10MB size limit.",
                                        too_many_files: "Upload failed: The folder contains too many files",
                                        unknown_error: "Error compressing or uploading files"
                                    }[c || "invalid_content"],
                                    type: "error"
                                });
                                return
                            }
                            m("conversion", {
                                send_to: "AW-16989287560/jnD3CJrv6ccaEIjpj6U_"
                            }), p("upload_click", {
                                file_type: u ? "tsx" : "html",
                                file_size: (o.size / 1048576).toFixed(2) + " MB"
                            });
                            let x = await (0, H.Q)(o, {
                                    eventType: "source_code",
                                    isPublic: !1,
                                    needUrl: !1
                                }),
                                h = await (0, W.p)(x.file_id);
                            clearInterval(s), d(100), i(!1), 0 === h.code && (null === (l = h.data) || void 0 === l ? void 0 : l.project_id) ? (p("deploy_success", {
                                project_id: null === (a = h.data) || void 0 === a ? void 0 : a.project_id,
                                project_url: null === (n = h.data) || void 0 === n ? void 0 : n.project_url,
                                file_type: u ? "tsx" : "html",
                                file_size: (o.size / 1048576).toFixed(2) + " MB"
                            }), null == t || t(h.data), null == r || r(h.data.project_id)) : (0, F.P)({
                                message: "Error uploading files",
                                type: "error"
                            })
                        } catch (e) {
                            console.error("Error during upload process:", e), i(!1), (0, F.P)({
                                message: "Error uploading files",
                                type: "error"
                            })
                        }
                    }, {
                        UploadInput: b,
                        handlePlusClick: g
                    } = (0, V.A)({
                        options: {
                            allowedExtensions: [".html", ".tsx", ".jsx"],
                            maxAttachments: 1
                        },
                        onFilesReceived: async e => {
                            await h(e)
                        }
                    }), {
                        UploadInput: v,
                        handlePlusClick: w
                    } = (0, V.A)({
                        options: {},
                        onFilesReceived: async e => {
                            await h(e)
                        }
                    }), {
                        handleDragLeave: j,
                        handleDragOver: y,
                        handleDrop: _,
                        DragOverlay: k
                    } = (0, Y.A)({
                        onFilesReceived: async e => {
                            await h(e)
                        }
                    }), N = (e, t) => {
                        x({
                            key: C.HomeUpload,
                            payload: {},
                            extraParams: {
                                tab: "upload"
                            },
                            action: e,
                            reject: t
                        })
                    };
                    return (0, n.useEffect)(() => {
                        u(C.HomeUpload, async () => {})
                    }, []), (0, l.jsxs)("div", {
                        className: "relative h-full max-h-[360px] w-full overflow-hidden rounded-[20px] p-3 text-center transition-all duration-300",
                        onDragLeave: j,
                        onDragOver: y,
                        onDrop: e => {
                            e.preventDefault(), e.stopPropagation(), N(async () => {
                                _(e)
                            }, () => {
                                e.preventDefault(), e.stopPropagation()
                            })
                        },
                        id: "upload-file-tab",
                        children: [(0, l.jsx)(k, {}), (0, l.jsx)(b, {}), (0, l.jsx)(v, {
                            webkitdirectory: "true",
                            directory: ""
                        }), (0, l.jsxs)("div", {
                            className: "relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-dashed border-black/12 p-2",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-2",
                                children: [(0, l.jsx)("h2", {
                                    className: "text-[20px] leading-[20px] text-black/95",
                                    children: "Drag & Drop Your Creation"
                                }), (0, l.jsx)("p", {
                                    className: "text-[14px] text-black/65",
                                    children: "HTML or TSX file｜Folder with HTML, CSS, and JS files (＜10 MB)"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "max-xs:flex-col max-xs:gap-2 flex flex-row gap-4",
                                children: a ? (0, l.jsxs)("div", {
                                    className: "flex h-9 w-[164px] items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/95",
                                    children: [(0, l.jsx)(o.xNY, {
                                        className: "h-4 w-4 animate-spin text-black/95"
                                    }), (0, l.jsxs)("span", {
                                        className: "text-[14px]",
                                        children: ["Uploading ", c, "%"]
                                    })]
                                }) : (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsxs)("button", {
                                        onClick: () => {
                                            N(async () => {
                                                await g()
                                            })
                                        },
                                        className: "flex h-9 w-40 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/65 hover:border-black/3 hover:bg-white hover:shadow-[0_8px_16px_1px_rgba(0,0,0,0.1)]",
                                        children: [(0, l.jsx)("span", {
                                            className: "text-[14px]",
                                            children: "Select File"
                                        }), (0, l.jsx)(o.gxh, {
                                            className: "h-4 w-4"
                                        })]
                                    }), (0, l.jsxs)("button", {
                                        onClick: () => {
                                            N(async () => {
                                                await w()
                                            })
                                        },
                                        className: "flex h-9 w-40 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/65 hover:border-black/3 hover:bg-white hover:shadow-[0_8px_16px_1px_rgba(0,0,0,0.1)]",
                                        children: [(0, l.jsx)("span", {
                                            className: "text-[14px]",
                                            children: "Select Folder"
                                        }), (0, l.jsx)(o.iH0, {
                                            className: "h-4 w-4"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                G = e => {
                    let {
                        tabs: t,
                        selectedTab: r,
                        onSelect: a,
                        className: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: (0, i.cn)("flex flex-row items-center justify-start rounded-xl bg-black/3 p-0.5", n),
                        children: t.map((e, n) => (0, l.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [(0, l.jsx)("button", {
                                onClick: () => a(e.value),
                                className: (0, i.cn)("flex h-9 w-26 cursor-pointer items-center justify-center rounded-[10px] text-[14px] text-black/45 sm:w-37", r === e.value && "bg-brand text-white"),
                                children: e.label
                            }, e.value), n !== t.length - 1 && (0, l.jsx)("div", {
                                className: "mx-1 h-5 w-[1px] bg-black/12"
                            })]
                        }, e.value))
                    })
                },
                Q = () => {
                    let e = (0, a.useSearchParams)().get("tab"),
                        [t, r] = (0, n.useState)(null != e ? e : "create"),
                        o = (0, a.useRouter)(),
                        {
                            user: c
                        } = (0, s.A)();
                    (0, n.useEffect)(() => {
                        if (e) {
                            let e = new URL(window.location.href);
                            e.searchParams.delete("tab"), window.history.replaceState({}, "", e.toString())
                        }
                    }, []);
                    let d = e => {
                            o.push("/ready?id=".concat(e.project_id, "&url=").concat(e.project_url, "&iframe_url=").concat(e.iframe_url))
                        },
                        u = e => {
                            if (!(null == c ? void 0 : c.uid)) {
                                let t = JSON.parse(localStorage.getItem("Anonymous_Projects") || "[]");
                                localStorage.setItem("Anonymous_Projects", JSON.stringify([...t, e]))
                            }
                        },
                        x = (e, t) => (0, l.jsx)("div", {
                            className: (0, i.cn)("flex h-full w-full flex-col items-center justify-center", !e && "hidden"),
                            children: t
                        }),
                        p = [{
                            label: "Create",
                            value: "create"
                        }, {
                            label: "Upload",
                            value: "upload"
                        }, {
                            label: "Paste Code",
                            value: "paste"
                        }].filter(e => void 0 !== e);
                    return (0, l.jsxs)("div", {
                        className: "flex h-[calc(100vh-440px)] max-h-[800px] min-h-[600px] w-full flex-col items-center justify-center px-5",
                        children: [(0, l.jsxs)("div", {
                            className: "mx-auto mt-10 mb-6 max-w-screen-lg px-4 text-center sm:mt-16 sm:mb-8 md:mt-20 md:mb-10",
                            children: [(0, l.jsx)("h1", {
                                className: "text-[36px] text-black/95 md:text-[48px]",
                                children: "Not YouTube, it's YouWare."
                            }), (0, l.jsxs)("h2", {
                                className: "mx-auto max-w-[300px] px-2 text-[14px] text-black/65 sm:max-w-none",
                                children: [(0, l.jsx)("span", {
                                    className: "font-bold",
                                    children: "Finally, "
                                }), "your computer speaks", " ", (0, l.jsx)("span", {
                                    className: "font-bold italic",
                                    children: "your language."
                                })]
                            })]
                        }), (0, l.jsx)(G, {
                            tabs: p,
                            selectedTab: t,
                            onSelect: e => r(e),
                            className: "mb-6"
                        }), (0, l.jsx)("div", {
                            className: "flex h-60 w-full max-w-[1280px] flex-col items-center justify-center rounded-[20px] bg-white md:w-4/5 xl:w-3/5 xl:p-0 2xl:w-1/2",
                            children: (0, l.jsx)("div", {
                                className: "relative flex h-full w-full flex-1",
                                children: (0, l.jsxs)("div", {
                                    className: "relative flex h-full w-full flex-col",
                                    children: [x("create" === t, (0, l.jsx)(B, {})), x("upload" === t, (0, l.jsx)($, {
                                        onUploadSuccess: d,
                                        onProjectDeployed: u
                                    })), x("paste" === t, (0, l.jsx)(J, {
                                        onUploadSuccess: d,
                                        onProjectDeployed: u
                                    }))]
                                })
                            })
                        })]
                    })
                }
        },
        61884: (e, t, r) => {
            "use strict";

            function l(e) {
                return e > 1e3 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e
            }
            r.d(t, {
                Z: () => l
            });
            let a = null;
            "undefined" != typeof Intl && "Segmenter" in Intl && (a = new Intl.Segmenter(void 0, {
                granularity: "word"
            })), RegExp("^[\\p{P}\\p{Zs}]+$", "u")
        },
        70263: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 61542)), Promise.resolve().then(r.bind(r, 94828)), Promise.resolve().then(r.bind(r, 9329)), Promise.resolve().then(r.bind(r, 14069)), Promise.resolve().then(r.bind(r, 25827))
        },
        80191: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => i.Vt,
                N: () => m
            });
            var l = r(35695),
                a = r(12115),
                n = r(34477);
            let s = (0, n.createServerReference)("60d7ce557c6a2c4e3b865bc11edd5c8cc98944f0b0", n.callServer, void 0, n.findSourceMapURL, "remixProject");
            var i = r(70165),
                o = r(565),
                c = r(90239),
                d = r(66139),
                u = r(48436),
                x = r(89003);
            let p = e => ({
                    remix: "Failed to remix project, please try again later",
                    create: "Failed to create project, please try again later"
                })[e],
                m = () => {
                    let e = (0, l.useRouter)(),
                        t = (0, c.I)(),
                        {
                            checkAuth: r
                        } = (0, x.M)(),
                        [n, i] = (0, a.useState)(!1);
                    return {
                        remixAction: (0, a.useCallback)(async (t, l) => r(async () => {
                            i(!0);
                            try {
                                let r = await (0, o.i)(),
                                    a = await s(t, r);
                                if (a.data) {
                                    let t = (0, d.$)(),
                                        r = {
                                            enter_from: l
                                        };
                                    "create" === l && (r.createWeb = "true"), e.push("".concat(t, "/editor/").concat(a.data.project_id, "?").concat(new URLSearchParams(r).toString()))
                                } else(0, u.P)({
                                    message: p(l),
                                    type: "error"
                                })
                            } catch (e) {
                                console.log("error", e), (0, u.P)({
                                    message: p(l),
                                    type: "error"
                                })
                            } finally {
                                i(!1)
                            }
                            setTimeout(() => {
                                i(!1)
                            }, 1e3)
                        }, {
                            title: "Want to remix this project?",
                            description: "Log in to remix and customize it your way.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })(), [t, e]),
                        isRemixing: n
                    }
                }
        },
        94828: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => A
            });
            var l = r(95155),
                a = r(12115),
                n = r(25427),
                s = r(53568),
                i = r(4821),
                o = r(56389),
                c = r(62128),
                d = r(48436);
            let u = e => {
                let {
                    isOpen: t,
                    onClose: r
                } = e, [u, x] = (0, a.useState)(""), [p, m] = (0, a.useState)(!1), {
                    loginWithGoogle: f,
                    googleLoginLoading: h,
                    sendLinkToEmail: b,
                    isSignInWithEmailLink: g,
                    signInWithEmailLink: v,
                    inviteCode: w,
                    inviterInfo: j,
                    inviteLoading: y,
                    trackTriggerLogin: _,
                    trackLoginResult: k
                } = (0, s.A)(), {
                    track: N
                } = (0, o.s)();
                (0, a.useEffect)(() => {
                    if (w && j) {
                        var e;
                        N("invite_login_pop_up_show", {
                            inviter_user_id: (null === (e = j.user) || void 0 === e ? void 0 : e.uid) || ""
                        })
                    }
                }, [j]), (0, a.useEffect)(() => {
                    if (g(window.location.href)) {
                        c.Ay.info("sign in with email link from invite");
                        let e = window.localStorage.getItem("emailForSignIn");
                        if (!e) {
                            c.Ay.error("emailForSignIn is not set");
                            return
                        }
                        u || x(e), m(!0), v(e, window.location.href).then(() => {
                            k("email", "success", "invite", ""), r()
                        }).catch(e => {
                            (0, d.P)({
                                message: "Failed to signin, please try again later",
                                type: "error"
                            }), k("email", "failed", "invite", e.message || "unknown error")
                        }).finally(() => {
                            m(!1)
                        })
                    }
                }, []);
                let S = async () => {
                        _("google", "invite");
                        try {
                            await f(), k("google", "success", "invite", ""), r()
                        } catch (e) {
                            (0, d.P)({
                                message: "Failed to signin, please try again later",
                                type: "error"
                            }), k("google", "failed", "invite", e.message || "unknown error")
                        }
                    },
                    C = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
                    P = async () => {
                        if (_("email", "invite"), !u.trim()) {
                            (0, d.P)({
                                message: "Please enter your email",
                                type: "error"
                            });
                            return
                        }
                        if (!C(u)) {
                            (0, d.P)({
                                message: "Please enter a valid email",
                                type: "error"
                            });
                            return
                        }
                        window.localStorage.setItem("emailForSignIn", u), m(!0);
                        try {
                            await b(u, window.location.href), (0, i.S)({
                                title: "Check your inbox",
                                description: "We’ve sent a sign-in link to your email. Click it to get started.",
                                confirmText: "Got it",
                                onConfirm: () => {}
                            })
                        } catch (e) {
                            (0, d.P)({
                                message: "Failed to send, please try again",
                                type: "error"
                            })
                        } finally {
                            m(!1)
                        }
                    };
                return t ? (0, l.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                    children: (0, l.jsxs)("div", {
                        className: "relative flex h-[440px] w-[400px] flex-col gap-5 rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [(0, l.jsx)("button", {
                            onClick: r,
                            className: "absolute top-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[8px] p-1 transition-colors hover:bg-black/3",
                            children: (0, l.jsx)(n.Qks, {
                                className: "h-4 w-4"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col items-center gap-3 pt-3 text-center",
                            children: [(0, l.jsx)(n.Bik, {
                                className: "text-brand h-12 w-12"
                            }), (0, l.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0, l.jsxs)("div", {
                                    className: "text-xl font-bold text-black/95",
                                    children: [(0, l.jsx)("h2", {
                                        children: (() => {
                                            var e;
                                            return y ? (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)("div", {
                                                    className: "mx-auto h-6 w-20 animate-pulse rounded bg-gray-200"
                                                })
                                            }) : (null == j ? void 0 : null === (e = j.user) || void 0 === e ? void 0 : e.display_name) ? (0, l.jsx)(l.Fragment, {
                                                children: j.user.display_name
                                            }) : null
                                        })()
                                    }), (0, l.jsx)("span", {
                                        children: "invited you to try YouWare "
                                    })]
                                }), (0, l.jsxs)("p", {
                                    className: "text-sm text-black/65",
                                    children: ["100,000+ projects built and shared. ", (0, l.jsx)("br", {}), " A growing hub of talented creators, here to spark your next big idea."]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex w-full flex-col items-center text-center",
                            children: [(0, l.jsxs)("button", {
                                className: "mb-4 flex h-[36px] w-full items-center justify-center gap-2 rounded-xl bg-[#2C2C2C] text-sm text-white ".concat(h ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:bg-[#2C2C2C]/90"),
                                onClick: S,
                                disabled: h,
                                children: [h ? (0, l.jsx)(n.Fat, {
                                    className: "h-4 w-4 animate-spin text-white"
                                }) : (0, l.jsx)("img", {
                                    src: "/images/google-icon.svg",
                                    className: "h-4 w-4",
                                    alt: "Google"
                                }), "Continue with Google"]
                            }), (0, l.jsx)("p", {
                                className: "mb-4 text-center text-sm text-black/95",
                                children: "or"
                            }), (0, l.jsx)("input", {
                                type: "email",
                                placeholder: "Enter your email",
                                className: "mb-4 h-[36px] w-full rounded-xl border border-black/30 bg-white/30 px-3 text-sm text-black/95 placeholder:text-black/30 focus:outline-none",
                                value: u,
                                onChange: e => x(e.target.value)
                            }), (0, l.jsx)("button", {
                                className: "flex h-[36px] w-full items-center justify-center gap-2 rounded-xl bg-[#55644A] text-center text-sm text-white ".concat(p ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:bg-[#55644A]/90"),
                                onClick: P,
                                disabled: p,
                                children: p ? (0, l.jsx)(n.Fat, {
                                    className: "mx-auto h-4 w-4 animate-spin"
                                }) : "Continue with email"
                            })]
                        })]
                    })
                }) : null
            };
            var x = r(90239),
                p = r(43072),
                m = r(71560);
            let f = "app-release-modal-shown",
                h = (0, m._)("20250707").getTime() + 6048e5,
                b = () => !localStorage.getItem(f) && Date.now() < h,
                g = e => {
                    let {
                        isOpen: t,
                        onClose: r
                    } = e, a = (0, x.I)(!1, 720);
                    if (!t) return null;
                    let s = () => {
                            localStorage.setItem(f, Date.now().toString()), r()
                        },
                        i = () => {
                            (0, p.QT)("ai-app", !0), s()
                        },
                        o = () => (0, l.jsxs)("div", {
                            children: [(0, l.jsx)("div", {
                                className: "px-0.5 text-[20px] font-bold text-black/95",
                                children: "Build Your Custom AI App in One Command"
                            }), (0, l.jsxs)("div", {
                                className: "mt-3 flex flex-col gap-1 text-[14px] font-normal text-black/65",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-row items-start",
                                    children: [(0, l.jsx)("div", {
                                        className: "mr-1",
                                        children: "\xb7"
                                    }), 'Start with "I wish there was an AI that could..." - no coding knowledge needed']
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-row items-start",
                                    children: [(0, l.jsx)("div", {
                                        className: "mr-1",
                                        children: "\xb7"
                                    }), "No Tech required, no all-nighters coding, just pure creative chaos"]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-row items-start",
                                    children: [(0, l.jsx)("div", {
                                        className: "mr-1",
                                        children: "\xb7"
                                    }), "Share your weird wonderful creation and make someone's day"]
                                })]
                            })]
                        }),
                        c = () => (0, l.jsxs)("div", {
                            className: "flex w-full flex-col gap-3",
                            children: [(0, l.jsx)("button", {
                                className: "bg-brand hover:bg-brand/90 h-[36px] w-full cursor-pointer rounded-[10px] text-[14px] text-white",
                                onClick: () => i(),
                                children: "Start exploring"
                            }), (0, l.jsx)("button", {
                                className: "h-[36px] w-full cursor-pointer rounded-[10px] border border-black/6 bg-white text-[14px] text-black/95 hover:bg-black/3",
                                onClick: s,
                                children: "Got it"
                            })]
                        });
                    return (0, l.jsx)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                        onClick: s,
                        children: (0, l.jsxs)("div", {
                            className: "relative flex overflow-hidden rounded-[16px] bg-white shadow-2xl",
                            onClick: e => e.stopPropagation(),
                            children: [a ? (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsx)("div", {
                                    className: "aspect-[2/1] w-full overflow-hidden",
                                    children: (0, l.jsx)("img", {
                                        src: "https://public.youware.com/images/ai-app-upgrade-modal-tips.jpeg",
                                        className: "h-full w-full object-cover",
                                        alt: " "
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "text-brand bg-brand/12 absolute top-5 left-[22px] z-10 flex h-6 w-[41px] items-center justify-center rounded-[6px] text-[14px] font-bold",
                                    children: (0, l.jsx)("div", {
                                        children: "Beta"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center gap-6 p-5",
                                    children: [o(), c()]
                                })]
                            }) : (0, l.jsxs)("div", {
                                className: "flex aspect-[3/2] w-[720px] max-w-[720px] flex-row",
                                children: [(0, l.jsx)("div", {
                                    className: "flex h-full w-1/2 flex-shrink-0 p-5",
                                    children: (0, l.jsxs)("div", {
                                        className: "flex flex-1 flex-col items-center justify-between",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex w-full flex-col items-start justify-center gap-6",
                                            children: [(0, l.jsx)("div", {
                                                className: "text-brand bg-brand/12 flex h-6 w-[41px] items-center justify-center rounded-[6px] text-[14px] font-bold",
                                                children: (0, l.jsx)("div", {
                                                    children: "Beta"
                                                })
                                            }), o()]
                                        }), c()]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "h-full w-1/2 flex-shrink-0",
                                    children: (0, l.jsx)("img", {
                                        src: "https://public.youware.com/images/ai-app-upgrade-modal-tips.jpeg",
                                        className: "h-full w-full object-cover",
                                        alt: " "
                                    })
                                })]
                            }), (0, l.jsx)("button", {
                                onClick: s,
                                className: "absolute top-4 right-4 z-10",
                                children: (0, l.jsx)(n.Qks, {
                                    className: "h-5 w-5 cursor-pointer text-black/95 hover:text-black/65"
                                })
                            })]
                        })
                    })
                };
            var v = r(5466);
            let w = "graduation_modal_shown",
                j = e => {
                    var t;
                    return null != e && null !== (t = e.metadata) && void 0 !== t && !!t.creationTime && new Date(e.metadata.creationTime) < new Date("2025-07-03T00:00:00Z")
                },
                y = () => "true" === localStorage.getItem(w),
                _ = () => {
                    localStorage.setItem(w, "true")
                },
                k = e => !(!j(e) || y());

            function N(e) {
                let {
                    isOpen: t,
                    onClose: r
                } = e, {
                    reward_credit_config: a
                } = (0, v.t)();
                return t ? (0, l.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                    children: (0, l.jsxs)("div", {
                        className: "relative flex w-[512px] flex-col rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [(0, l.jsxs)("div", {
                            className: "relative mb-6 flex min-h-[148px] flex-col justify-between rounded-lg p-4",
                            style: {
                                backgroundImage: "url('/images/bg-pattern.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            },
                            children: [(0, l.jsx)("div", {
                                className: "flex justify-start",
                                children: (0, l.jsx)("span", {
                                    className: "inline-block rounded-md bg-white/15 px-2 py-1 text-sm font-bold text-white backdrop-blur-sm",
                                    children: "New"
                                })
                            }), (0, l.jsx)("div", {
                                className: "mt-auto",
                                children: (0, l.jsxs)("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: ["YouWare Has Graduated", (0, l.jsx)("br", {}), "from Alpha!"]
                                })
                            })]
                        }), (0, l.jsxs)("p", {
                            className: "mb-6 text-sm text-black/95",
                            children: ["Thanks for building with us during Alpha. ", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "We're now officially launched — with a ", (0, l.jsx)("span", {
                                className: "font-bold",
                                children: "new credits-based"
                            }), " system that gives you more flexibility and control. ", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "All users get ", (0, l.jsxs)("span", {
                                className: "font-bold",
                                children: [a.new_user_reward, " free credits"]
                            }), " to start.", " ", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "Pro plans now start at ", (0, l.jsx)("span", {
                                className: "font-bold",
                                children: "$20/month for 3,000 credits"
                            }), ", with higher tiers available. ", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "As a thank-you, Pro subscribers before ", (0, l.jsx)("span", {
                                className: "font-bold",
                                children: "July 3"
                            }), " will receive", " ", (0, l.jsx)("span", {
                                className: "font-bold",
                                children: "1,000 bonus credits"
                            }), " — no action needed. ", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "Let's keep building amazing things together."]
                        }), (0, l.jsxs)("div", {
                            className: "space-y-3",
                            children: [(0, l.jsx)("button", {
                                onClick: () => {
                                    console.log("Get started clicked"), _(), r()
                                },
                                className: "bg-brand hover:bg-brand/90 w-full cursor-pointer rounded-[10px] py-2 text-sm text-white",
                                children: "Get started"
                            }), (0, l.jsx)("button", {
                                onClick: () => {
                                    window.open("/legal/credits", "_blank"), console.log("Learn more about credits clicked"), _()
                                },
                                className: "w-full cursor-pointer rounded-[10px] border border-black/6 py-2 text-center text-sm text-black/95 hover:border-transparent hover:bg-black/3",
                                children: "Learn more about credits"
                            })]
                        })]
                    })
                }) : null
            }
            let S = () => {
                    let {
                        user: e,
                        asyncCheckShouldShowInvite: t
                    } = (0, s.A)();
                    return {
                        shouldShowInvite: t,
                        shouldShowAnnouncement: () => Promise.resolve(k(e)),
                        shouldShowAIAppRelease: () => Promise.resolve(b())
                    }
                },
                C = "popup-display-time-record",
                P = () => {
                    let e = localStorage.getItem(C);
                    return e ? Number(e) : 0
                },
                E = e => {
                    localStorage.setItem(C, e.toString())
                };

            function A() {
                let e = S(),
                    [t, r] = (0, a.useState)(!1),
                    [n, i] = (0, a.useState)(null),
                    {
                        user: o
                    } = (0, s.A)(),
                    c = [{
                        id: "invite",
                        shouldShow: e.shouldShowInvite,
                        globalExclude: !1,
                        Component: u
                    }, {
                        id: "announcement",
                        shouldShow: e.shouldShowAnnouncement,
                        globalExclude: !0,
                        Component: N
                    }, {
                        id: "ai-app-release",
                        shouldShow: e.shouldShowAIAppRelease,
                        globalExclude: !0,
                        Component: g
                    }],
                    d = async () => {
                        let e = null;
                        for (let t of c)
                            if (await t.shouldShow()) {
                                e = t;
                                break
                            }
                        return e ? P() > Date.now() - 864e5 && e.globalExclude ? null : e : null
                    };
                if ((0, a.useEffect)(() => {
                        (async () => {
                            let e = await d();
                            e && (i(e), r(!0))
                        })()
                    }, [o]), n) {
                    let {
                        Component: e
                    } = n;
                    return (0, l.jsx)(e, {
                        isOpen: t,
                        onClose: () => {
                            E(Date.now()), r(!1), i(null)
                        }
                    })
                }
                return null
            }
        }
    }
]);