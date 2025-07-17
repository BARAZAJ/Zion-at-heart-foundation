try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28bc06d3-f41f-4208-8085-44879ed97046", e._sentryDebugIdIdentifier = "sentry-dbid-28bc06d3-f41f-4208-8085-44879ed97046")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3779], {
        4530: (e, t, l) => {
            l.d(t, {
                F: () => n
            });
            var a = l(25427);
            let n = e => {
                switch (e) {
                    case "log":
                        return a.JVA;
                    case "code":
                        return a.lrj;
                    case "image":
                        return a.hue;
                    case "pdf":
                        return a.HKL;
                    case "audio":
                        return a.J9y;
                    default:
                        return a.n1O
                }
            }
        },
        6058: (e, t, l) => {
            l.d(t, {
                p: () => n
            });
            var a = l(34477);
            let n = (0, a.createServerReference)("60369e09b92a35b7374b6448bace58b0c6c7d3acc6", a.callServer, void 0, a.findSourceMapURL, "deployProject")
        },
        9896: (e, t, l) => {
            l.d(t, {
                A: () => _
            });
            var a = l(95155),
                n = l(12115),
                s = l(47650);
            let r = e => e.configurable_fields.length > 0 ? "fill-contents" : e.installation_instructions ? "description" : "none";
            var i = l(56389),
                c = l(25427),
                o = l(56454),
                d = l(62128),
                u = l(48436),
                f = l(25839);

            function x(e) {
                let {
                    onback: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex items-center justify-start gap-2 px-6 pt-5 pb-4",
                    children: [(0, a.jsx)("button", {
                        onClick: t,
                        className: "cursor-pointer text-black",
                        children: (0, a.jsx)(c.M0J, {
                            className: "h-4 w-4"
                        })
                    }), (0, a.jsx)("h2", {
                        className: "text-xl font-bold",
                        children: "Add MCP Server"
                    })]
                })
            }

            function p(e) {
                let {
                    integration: t,
                    onBack: l
                } = e, s = t.configurable_fields[0], {
                    installIntegration: p
                } = (0, f.D)(), [m, g] = (0, n.useState)(t.configured_fields && s.key in t.configured_fields ? t.configured_fields[s.key] : ""), [h, b] = (0, n.useState)(!1), {
                    track: v
                } = (0, i.s)(), [y, j] = (0, n.useState)(""), w = {
                    a: e => (0, a.jsx)("a", { ...e,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    })
                }, k = async () => {
                    if (!m) {
                        j("Cannot be empty");
                        return
                    }
                    let e = {
                        [s.key]: m
                    };
                    try {
                        b(!0), await p(t, e), (0, u.P)({
                            message: "".concat(t.name, " installed successfully"),
                            type: "success"
                        }), v("mcp_config_result", {
                            mcp_tool_name: t.name,
                            result: "success"
                        }), l()
                    } catch (e) {
                        d.Ay.error("Install integration failed", void 0, {
                            error: e
                        }), v("mcp_config_result", {
                            mcp_tool_name: t.name,
                            result: "failed"
                        }), e instanceof Error && e.message ? j(e.message) : (0, u.P)({
                            message: "Failed to validate access key.",
                            type: "error"
                        })
                    } finally {
                        b(!1)
                    }
                };
                return (0, a.jsxs)("div", {
                    className: "flex h-full flex-col",
                    children: [(0, a.jsx)(x, {
                        onback: l
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-6",
                        children: ["fill-contents" === r(t) && (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4 rounded-xl border border-black/12 p-3",
                            children: [(0, a.jsx)(o.oz, {
                                className: "prose prose-gray max-w-none text-sm",
                                components: w,
                                children: s.description
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0, a.jsx)("input", {
                                        type: "text",
                                        value: m,
                                        onChange: e => {
                                            y && j(""), g(e.target.value)
                                        },
                                        placeholder: s.name,
                                        className: "h-8 flex-1 rounded-[10px] border border-black/6 bg-black/3 px-3 text-xs focus:outline-none"
                                    }), (0, a.jsx)("button", {
                                        onClick: k,
                                        className: "bg-brand flex h-8 w-24 items-center justify-center gap-2 rounded-[10px] text-white",
                                        children: h ? (0, a.jsx)(c.xNY, {
                                            className: "h-4 w-4 animate-spin"
                                        }) : "Save"
                                    })]
                                }), y && (0, a.jsx)("span", {
                                    className: "mt-2 px-2 text-xs text-[#D42727]",
                                    children: y
                                })]
                            })]
                        }), "description" === r(t) || "fill-contents" === r(t) && (0, a.jsx)("div", {
                            className: "rounded-xl bg-black/3",
                            children: (0, a.jsx)(o.oz, {
                                className: "prose prose-gray w-full max-w-none rounded-xl p-3 text-sm break-words",
                                components: w,
                                children: t.installation_instructions
                            })
                        })]
                    })]
                })
            }
            var m = l(53622),
                g = l(84823);

            function h(e) {
                let {
                    onback: t,
                    title: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex items-center justify-start gap-2 px-6 pt-5 pb-3",
                    children: [(0, a.jsx)("button", {
                        onClick: t,
                        className: "cursor-pointer text-black",
                        children: (0, a.jsx)(c.M0J, {
                            className: "h-4 w-4"
                        })
                    }), (0, a.jsx)("h2", {
                        className: "text-xl font-bold",
                        children: l
                    })]
                })
            }

            function b(e) {
                let {
                    integration: t,
                    onBack: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex h-full flex-col",
                    children: [(0, a.jsx)(h, {
                        onback: l,
                        title: t.name
                    }), (0, a.jsx)("div", {
                        className: "flex-1 overflow-y-auto px-6 pt-0 pb-6",
                        children: (0, a.jsx)(o.oz, {
                            remarkPlugins: [g.A],
                            rehypePlugins: [m.A],
                            components: {},
                            children: t.installation_instructions
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    onClose: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex items-center justify-between px-6 pt-5 pb-3",
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)("h2", {
                            className: "text-xl font-bold text-black/95",
                            children: "MCP Tool"
                        })
                    }), (0, a.jsx)("button", {
                        onClick: t,
                        className: "cursor-pointer text-black",
                        children: (0, a.jsx)(c.Qks, {
                            className: "h-4 w-4"
                        })
                    })]
                })
            }
            var y = l(70165);

            function j(e) {
                let {
                    integration: t,
                    onConfigIntegration: l
                } = e, {
                    name: s,
                    description: o,
                    icon: x,
                    usage_count: p
                } = t, {
                    installIntegration: m,
                    uninstallIntegration: g
                } = (0, f.D)(), [h, b] = (0, n.useState)(!1), {
                    track: v
                } = (0, i.s)(), j = async e => {
                    if (d.Ay.trace("Install integration", e), v("mcp_install", {
                            mcp_tool_name: e.name
                        }), "fill-contents" === r(e)) null == l || l(e);
                    else {
                        "description" === r(e) && (null == l || l(e));
                        try {
                            b(!0), await m(e, {}), d.Ay.trace("Install integration success", e), (0, u.P)({
                                message: "".concat(e.name, " installed successfully"),
                                type: "success"
                            })
                        } catch (t) {
                            (0, u.P)({
                                message: "Failed to install ".concat(e.name),
                                type: "error"
                            }), d.Ay.error("Install MCP Tool failed", void 0, {
                                error: t
                            })
                        } finally {
                            b(!1)
                        }
                    }
                }, w = e => {
                    d.Ay.trace("Edit integration", e), null == l || l(e)
                }, k = async e => {
                    v("mcp_uninstall", {
                        mcp_tool_name: e.name
                    }), d.Ay.trace("Uninstall integration", e);
                    try {
                        b(!0), await g(e), d.Ay.trace("Uninstall integration success", e), (0, u.P)({
                            message: "".concat(e.name, " uninstalled successfully"),
                            type: "success"
                        })
                    } catch (t) {
                        (0, u.P)({
                            message: "Failed to uninstall ".concat(e.name),
                            type: "error"
                        }), d.Ay.error("Uninstall MCP Tool failed", void 0, {
                            error: t
                        })
                    } finally {
                        b(!1)
                    }
                };
                return (0, a.jsxs)("div", {
                    className: "relative flex flex-col rounded-xl border border-black/12 bg-white p-4",
                    children: [(0, a.jsxs)("div", {
                        className: "mb-4 flex items-start justify-between",
                        children: [x ? (0, a.jsx)("img", {
                            src: x,
                            alt: s,
                            className: "h-8 w-8 rounded-lg"
                        }) : (0, a.jsx)(c.MgH, {
                            className: "h-8 w-8 rounded-lg border border-black/10 text-black/60"
                        }), t.is_configured ? (0, a.jsxs)("div", {
                            className: "flex gap-2",
                            children: ["fill-contents" === r(t) && (0, a.jsx)("button", {
                                onClick: () => w(t),
                                className: "flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg bg-black/6 hover:bg-black/12",
                                children: (0, a.jsx)(c.r0D, {
                                    className: "h-[14px] w-[14px] text-black"
                                })
                            }), "description" === r(t) && (0, a.jsx)("button", {
                                onClick: () => w(t),
                                className: "flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg bg-black/6 hover:bg-black/12",
                                children: (0, a.jsx)(c.CwO, {
                                    className: "h-[14px] w-[14px] text-black"
                                })
                            }), (0, a.jsx)("button", {
                                onClick: () => k(t),
                                className: "flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg bg-[#D427270F] hover:bg-[#D427274D]",
                                children: h ? (0, a.jsx)(c.xNY, {
                                    className: "h-[14px] w-[14px] animate-spin text-[#D42727F2]"
                                }) : (0, a.jsx)(c.lzB, {
                                    className: "h-[14px] w-[14px] text-[#D42727F2]"
                                })
                            })]
                        }) : (0, a.jsxs)("button", {
                            onClick: () => j(t),
                            className: "relative flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg bg-black/3 text-black/95 hover:bg-black/6",
                            children: [h ? (0, a.jsx)(c.xNY, {
                                className: "h-[14px] w-[14px] animate-spin text-black/95"
                            }) : (0, a.jsx)(c.Ld_, {
                                className: "h-[14px] w-[14px] text-black/95"
                            }), !localStorage.getItem(y.V) && ("ai_sdk" === t.integration_id || "supabase" === t.integration_id) && (0, a.jsx)("div", {
                                className: "absolute top-[-10px] right-[-10px] rounded-full bg-[#D42727] px-1.5 py-[3px] text-[10px] font-bold text-white",
                                children: "New"
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "mb-1 flex flex-row items-center",
                        children: [(0, a.jsx)("h3", {
                            className: "h-[17px] text-sm leading-[17px] font-bold text-black/95",
                            children: s
                        }), "ai_sdk" === t.integration_id && (0, a.jsx)("div", {
                            className: "border-brand text-brand ml-2 h-4 w-[38px] rounded-full border bg-white text-center text-[12px] leading-[16px] font-bold",
                            children: "Beta"
                        })]
                    }), (0, a.jsx)("p", {
                        className: "mb-5 line-clamp-3 h-[42px] text-xs leading-[14.5px] text-black/65",
                        children: o
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-1 text-black/45",
                            children: [(0, a.jsx)(c.LZX, {
                                className: "h-4 w-4"
                            }), (0, a.jsx)("span", {
                                className: "text-xs",
                                children: p
                            })]
                        }), t.credit_consumed ? (0, a.jsx)("div", {
                            className: "rounded-full bg-[#75AC7A1F] px-[5px] py-[1px]",
                            children: (0, a.jsx)("span", {
                                className: "text-[12px] font-bold text-[#75AC7A]",
                                children: "Credit Cost"
                            })
                        }) : "fill-contents" === r(t) ? (0, a.jsx)("div", {
                            className: "rounded-full bg-[#6BA9EE1F] px-[5px] py-[1px]",
                            children: (0, a.jsx)("span", {
                                className: "text-[12px] font-bold text-[#6BA9EE]",
                                children: "Token Required"
                            })
                        }) : null]
                    })]
                })
            }

            function w(e) {
                let {
                    installedIntegrations: t,
                    uninstalledIntegrations: l,
                    onConfigIntegration: n
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "flex-1 overflow-y-auto px-5 pb-4",
                        children: [t.length > 0 && (0, a.jsx)("div", {
                            className: "mb-6",
                            children: (0, a.jsx)("div", {
                                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
                                children: t.map((e, t) => (0, a.jsx)(j, {
                                    integration: e,
                                    onConfigIntegration: n
                                }, t))
                            })
                        }), t.length > 0 && l.length > 0 && (0, a.jsx)("div", {
                            className: "my-7 h-px w-full bg-black/6"
                        }), l.length > 0 && (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
                                children: l.map((e, t) => (0, a.jsx)(j, {
                                    integration: e,
                                    onConfigIntegration: n
                                }, t))
                            })
                        }), (0, a.jsx)("p", {
                            className: "mt-6 text-center text-sm text-black/30",
                            children: "More MCP Tools Coming Soon"
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    onClose: t,
                    onConfigIntegration: l
                } = e, {
                    availableIntegrations: s,
                    fetchAvailableIntegrations: r
                } = (0, f.D)(), [i, o] = (0, n.useState)(!0), [d, u] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    (async () => {
                        o(!0);
                        try {
                            await r(), u(!1)
                        } catch (e) {
                            u(!0)
                        } finally {
                            o(!1)
                        }
                    })()
                }, [r]);
                let x = !i && !d && s.length > 0,
                    p = [],
                    m = [];
                return x && (p = s.filter(e => e.is_configured), m = s.filter(e => !e.is_configured)), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(v, {
                        onClose: t
                    }), x && (0, a.jsx)(w, {
                        installedIntegrations: p,
                        uninstalledIntegrations: m,
                        onConfigIntegration: l
                    }), i && (0, a.jsxs)("div", {
                        className: "flex flex-1 flex-col items-center justify-center gap-2",
                        children: [(0, a.jsx)(c.xNY, {
                            className: "h-10 w-10 animate-spin text-black/65"
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-black/65",
                            children: "Loading..."
                        })]
                    }), !i && (d || 0 === s.length) && (0, a.jsxs)("div", {
                        className: "flex flex-1 flex-col items-center justify-center gap-4",
                        children: [(0, a.jsx)(c.sFm, {
                            className: "h-10 w-10 text-[#D42727]"
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-black/65",
                            children: "Failed to load. Please try again."
                        }), (0, a.jsx)("button", {
                            className: "rounded-lg bg-black/6 px-2 py-[6px] text-sm text-black/95",
                            onClick: () => {
                                u(!1), o(!0), r()
                            },
                            children: "Retry"
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    isOpen: t,
                    onClose: l
                } = e, [c, o] = (0, n.useState)(null), [d, u] = (0, n.useState)(!1), {
                    track: f
                } = (0, i.s)();
                if ((0, n.useEffect)(() => (u(!0), f("mcp_marketplace_exposure", {}), () => u(!1)), []), (0, n.useEffect)(() => {
                        if (t) return document.body.style.overflow = "hidden", () => {
                            document.body.style.overflow = "auto"
                        }
                    }, [t]), !t || !d) return null;
                let x = (0, a.jsx)("div", {
                    className: "fixed inset-0 z-[50] flex items-center justify-center overflow-hidden bg-black/20 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                    onClick: () => (!c || "description" === r(c)) && l(),
                    children: (0, a.jsx)("div", {
                        className: "relative mx-auto flex h-[90vh] w-[95%] max-w-4xl flex-col rounded-2xl bg-white shadow-lg sm:h-[600px] sm:w-[540px] md:h-[650px] md:w-[720px] lg:h-[700px] lg:w-[900px]",
                        onClick: e => e.stopPropagation(),
                        children: c ? "fill-contents" === r(c) ? (0, a.jsx)(p, {
                            integration: c,
                            onBack: () => o(null)
                        }) : (0, a.jsx)(b, {
                            integration: c,
                            onBack: () => o(null)
                        }) : (0, a.jsx)(k, {
                            onClose: l,
                            onConfigIntegration: o
                        })
                    })
                });
                return (0, s.createPortal)(x, document.body)
            }
        },
        25839: (e, t, l) => {
            l.d(t, {
                D: () => x
            });
            var a = l(65453),
                n = l(46786),
                s = l(34477);
            let r = (0, s.createServerReference)("00d2805bb952f64723b20503aea99f893ccf8b899d", s.callServer, void 0, s.findSourceMapURL, "getAvailableIntegrations"),
                i = (0, s.createServerReference)("00e34e7dccd781cec78493db3f515961d56b290895", s.callServer, void 0, s.findSourceMapURL, "getInstalledIntegrations"),
                c = (0, s.createServerReference)("60f273902ec442633f8f87cefbe4d0a44381ab73fe", s.callServer, void 0, s.findSourceMapURL, "installIntegration"),
                o = (0, s.createServerReference)("40590f6d38ac7e0cf7e913e41a15a1d4dd01855dd9", s.callServer, void 0, s.findSourceMapURL, "uninstallIntegration");
            var d = l(62128);
            let u = (e, t) => ({
                    fetchAvailableIntegrations: async () => {
                        if (!(t().availableIntegrations.length > 0)) try {
                            let t = await r();
                            e({
                                availableIntegrations: t.data || []
                            })
                        } catch (e) {
                            d.Ay.error("Failed to fetch available integrations", void 0, {
                                error: e
                            })
                        }
                    },
                    fetchInstalledIntegrations: async () => {
                        if (!(t().installedIntegrations.length > 0)) try {
                            let t = (await i()).data || [];
                            e(e => {
                                let l = t.map(e => e.integration_id);
                                return {
                                    installedIntegrations: t,
                                    selectedIntegrations: 0 === e.selectedIntegrations.length ? l : e.selectedIntegrations.filter(e => l.includes(e))
                                }
                            })
                        } catch (e) {
                            d.Ay.error("Failed to fetch installed integrations", void 0, {
                                error: e
                            })
                        }
                    },
                    installIntegration: async (t, l) => {
                        try {
                            let a = await c(t.integration_id, l);
                            if (0 !== a.code) {
                                if (40304 === a.code) throw Error("".concat(t.name, " API key is invalid"));
                                throw Error("")
                            }
                            e(e => {
                                let l = e.availableIntegrations.map(e => e.integration_id === t.integration_id ? { ...e,
                                        is_configured: !0,
                                        usage_count: e.usage_count + 1
                                    } : e),
                                    a = l.filter(e => e.is_configured),
                                    n = [...e.selectedIntegrations];
                                return e.selectedIntegrations.some(e => e === t.integration_id) || (n = [...e.selectedIntegrations, t.integration_id]), {
                                    availableIntegrations: l,
                                    installedIntegrations: a,
                                    selectedIntegrations: n
                                }
                            })
                        } catch (e) {
                            throw d.Ay.error("Failed to install integration", void 0, {
                                error: e
                            }), e
                        }
                    },
                    uninstallIntegration: async t => {
                        try {
                            await o(t.integration_id), e(e => {
                                let l = e.availableIntegrations.map(e => e.integration_id === t.integration_id ? { ...e,
                                        is_configured: !1,
                                        usage_count: e.usage_count - 1 < 0 ? 0 : e.usage_count - 1,
                                        configured_fields: {}
                                    } : e),
                                    a = l.filter(e => e.is_configured),
                                    n = e.selectedIntegrations.filter(e => e !== t.integration_id);
                                return {
                                    availableIntegrations: l,
                                    installedIntegrations: a,
                                    selectedIntegrations: n
                                }
                            })
                        } catch (e) {
                            throw d.Ay.error("Failed to uninstall integration", void 0, {
                                error: e
                            }), e
                        }
                    },
                    toggleIntegration: t => {
                        e(e => {
                            let l;
                            return {
                                selectedIntegrations: e.selectedIntegrations.some(e => e === t.integration_id) ? e.selectedIntegrations.filter(e => e !== t.integration_id) : [...e.selectedIntegrations, t.integration_id]
                            }
                        })
                    },
                    isIntegrationSelected: e => t().selectedIntegrations.some(t => t === e.integration_id)
                }),
                f = {
                    availableIntegrations: [],
                    installedIntegrations: [],
                    selectedIntegrations: []
                },
                x = (0, a.v)()((0, n.Zr)((e, t, l) => ({ ...f,
                    ...u(e, t, l)
                }), {
                    name: "integration-storage",
                    partialize: e => ({
                        selectedIntegrations: e.selectedIntegrations
                    })
                }))
        },
        31652: (e, t, l) => {
            l.d(t, {
                A: () => h
            });
            var a = l(95155),
                n = l(25427),
                s = l(35695),
                r = l(12115),
                i = l(70165),
                c = l(53568),
                o = l(56389),
                d = l(25839),
                u = l(26846),
                f = l(46102),
                x = l(9896),
                p = l(47650);
            let m = e => {
                let {
                    name: t,
                    icon: l,
                    isSelected: s = !1,
                    integrationId: r,
                    onClick: i
                } = e;
                return (0, a.jsxs)("div", {
                    onClick: i,
                    className: "flex cursor-pointer items-center justify-between p-2 hover:rounded-lg hover:bg-black/3",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, a.jsx)("img", {
                            src: l,
                            alt: t,
                            className: "h-5 w-5 rounded-[4px]"
                        }), (0, a.jsxs)("div", {
                            className: "mb-1 flex flex-row items-center",
                            children: [(0, a.jsx)("span", {
                                className: "text-sm font-normal text-black/95",
                                children: t
                            }), "ai_sdk" === r && (0, a.jsx)("div", {
                                className: "border-brand text-brand ml-2 h-4 w-[38px] rounded-full border bg-white text-center text-[12px] leading-[16px] font-bold",
                                children: "Beta"
                            })]
                        })]
                    }), s ? (0, a.jsx)(n.Ked, {
                        size: 16,
                        className: "text-brand"
                    }) : (0, a.jsx)(n.$OD, {
                        size: 16,
                        className: "text-black/12"
                    })]
                })
            };

            function g(e) {
                let {
                    isOpen: t,
                    onClose: l,
                    triggerRef: s,
                    onAdd: c
                } = e, u = (0, r.useRef)(null), [f, x] = (0, r.useState)({
                    top: 0,
                    left: 0
                }), {
                    installedIntegrations: g,
                    toggleIntegration: h,
                    isIntegrationSelected: b
                } = (0, d.D)(), [v, y] = (0, r.useState)(!1), {
                    track: j
                } = (0, o.s)(), w = e => {
                    j("mcp_select_tool", {
                        is_enable: !b(e),
                        mcp_tool_name: e.name
                    }), h(e)
                };
                (0, r.useEffect)(() => (y(!0), () => y(!1)), []), (0, r.useEffect)(() => {
                    if (t) return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = "auto"
                    }
                }, [t]), (0, r.useEffect)(() => {
                    t && u.current && (null == g ? void 0 : g.length) > 0 && setTimeout(k, 0)
                }, [t, g]);
                let k = () => {
                    if (!(null == s ? void 0 : s.current) || !u.current) return;
                    let e = s.current.getBoundingClientRect(),
                        t = u.current.getBoundingClientRect(),
                        l = {
                            top: e.top - t.height - 8,
                            left: e.left
                        };
                    l.top < 10 && (l.top = e.bottom + 8), l.left + t.width > window.innerWidth - 10 && (l.left = window.innerWidth - t.width - 10), x(l)
                };
                if (!t || !v) return null;
                let _ = g.length > 0,
                    N = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "fixed inset-0 z-[90]",
                            onClick: l
                        }), (0, a.jsxs)("div", {
                            ref: u,
                            className: "fixed z-[95] flex w-[230px] flex-col items-stretch rounded-[10px] border border-black/3 bg-white p-1 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                            style: {
                                left: "".concat(f.left, "px"),
                                top: "".concat(f.top, "px")
                            },
                            children: [(0, a.jsxs)("div", {
                                className: "flex cursor-pointer items-center justify-between px-2 py-2 hover:rounded-lg hover:bg-black/3",
                                onClick: c,
                                children: [(0, a.jsx)("h2", {
                                    className: "text-sm font-bold text-black/95",
                                    children: "MCP Tool"
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-row items-center gap-2",
                                    children: [!localStorage.getItem(i.V) && (0, a.jsx)("div", {
                                        className: "rounded-full bg-[#D42727] px-1.5 py-[3px] text-[10px] font-bold text-white",
                                        children: "New"
                                    }), (0, a.jsx)("button", {
                                        className: "flex h-4 w-4 cursor-pointer items-center justify-center text-black/95",
                                        children: (0, a.jsx)(n.Ld_, {
                                            size: 14
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "my-1 h-px bg-black/6"
                            }), _ && (0, a.jsx)("div", {
                                className: "flex flex-col",
                                children: g.map((e, t) => (0, a.jsx)(m, {
                                    name: e.name,
                                    icon: e.icon,
                                    integrationId: e.integration_id,
                                    isSelected: b(e),
                                    onClick: () => w(e)
                                }, t))
                            })]
                        })]
                    });
                return (0, p.createPortal)(N, document.body)
            }

            function h(e) {
                let {
                    source: t,
                    className: l
                } = e, {
                    user: p
                } = (0, c.A)(), m = (0, s.useRouter)(), h = (0, r.useRef)(null), {
                    installedIntegrations: b,
                    selectedIntegrations: v,
                    fetchInstalledIntegrations: y
                } = (0, d.D)(), [j, w] = (0, r.useState)(!1), [k, _] = (0, r.useState)(!1), [N, C] = (0, r.useState)(!1), {
                    track: I
                } = (0, o.s)();
                return (0, r.useEffect)(() => {
                    p && y()
                }, [p, y]), (0, r.useEffect)(() => {
                    localStorage.getItem(i.V) || C(!0)
                }, []), (0, a.jsxs)("div", {
                    className: "relative",
                    children: [(0, a.jsxs)(f.m_, {
                        children: [(0, a.jsx)(f.k$, {
                            asChild: !0,
                            children: (0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("button", {
                                    ref: h,
                                    className: (0, u.cn)("flex cursor-pointer items-center justify-center gap-1 border px-2 transition-colors hover:bg-black/3", l, j && "bg-black/6"),
                                    onClick: () => {
                                        if (I("mcp_enter_click", {
                                                click_from: t
                                            }), !p) {
                                            m.push("/login");
                                            return
                                        }
                                        b && b.length > 0 ? w(!0) : _(!0)
                                    },
                                    "aria-label": "Connect MCP Tool",
                                    children: [(0, a.jsx)(n.qX3, {
                                        className: "h-4 w-4 text-black/95"
                                    }), p && v.length > 0 && (0, a.jsx)("span", {
                                        className: "pt-0.5 text-sm text-black/95",
                                        children: v.length
                                    })]
                                }), N && (0, a.jsx)("div", {
                                    className: "absolute top-[-4px] right-[-4px] rounded-full bg-[#D42727] px-1.5 py-[3px] text-[10px] font-bold text-white",
                                    children: "New"
                                })]
                            })
                        }), (0, a.jsx)(f.ZI, {
                            sideOffset: 4,
                            children: "MCP Tool"
                        })]
                    }), (0, a.jsx)(g, {
                        isOpen: j,
                        onClose: () => {
                            w(!1)
                        },
                        triggerRef: h,
                        onAdd: () => {
                            I("mcp_add_enter_click", {
                                click_from: t
                            }), w(!1), _(!0)
                        }
                    }), k && (0, a.jsx)(x.A, {
                        isOpen: k,
                        onClose: () => {
                            _(!1), localStorage.setItem(i.V, "true"), C(!1)
                        }
                    })]
                })
            }
        },
        34326: (e, t, l) => {
            l.d(t, {
                Q: () => i
            });
            var a = l(96834);
            async function n(e) {
                return await (0, a.qM)("/v1/files/upload", {
                    method: "POST",
                    data: e
                })
            }
            async function s(e) {
                return await (0, a.qM)("/v1/files/list_urls", {
                    method: "POST",
                    data: e
                })
            }
            async function r(e, t) {
                if (!e.length) return [];
                let l = e.map(e => ({
                    file_name: e.name,
                    file_size: e.size,
                    mime_type: e.type
                }));
                try {
                    let a = await n({
                        files: l,
                        event_type: t.eventType,
                        is_public: t.isPublic || !1
                    });
                    if (!a.data || !Array.isArray(a.data.upload_infos) || a.data.upload_infos.length !== e.length) throw Error("Invalid response from server: Missing or incorrect upload information");
                    let r = e.map((e, t) => {
                            let l = a.data.upload_infos[t],
                                n = new FormData;
                            return Object.entries(l.fields || {}).forEach(e => {
                                let [t, l] = e;
                                n.append(t, l)
                            }), n.append("file", e), fetch(l.upload_url, {
                                method: l.method,
                                body: n
                            }).then(e => {
                                if (!e.ok) throw Error("Upload failed with status ".concat(e.status, ": ").concat(e.statusText));
                                return {
                                    file_id: l.file_id
                                }
                            })
                        }),
                        i = await Promise.all(r);
                    if (t.needUrl) {
                        let e = i.map(e => e.file_id),
                            t = await s({
                                file_ids: e
                            });
                        t.data && Array.isArray(t.data.file_urls) && (i = i.map((e, l) => {
                            var a, n;
                            return { ...e,
                                file_url: null === (n = t.data) || void 0 === n ? void 0 : null === (a = n.file_urls) || void 0 === a ? void 0 : a[l]
                            }
                        }))
                    }
                    return i
                } catch (e) {
                    throw console.error("File upload process failed:", e), e instanceof Error ? e : Error("Unknown error during file upload process")
                }
            }
            async function i(e, t) {
                return (await r([e], t))[0]
            }
        },
        40146: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            var a = l(95155),
                n = l(12115),
                s = l(48436);

            function r(e) {
                var t;
                let {
                    options: l,
                    onFilesReceived: r
                } = e, {
                    allowedExtensions: i,
                    maxAttachments: c,
                    currentCount: o
                } = l, d = (0, n.useRef)(null), u = (0, n.useRef)(r);
                (0, n.useEffect)(() => {
                    u.current = r
                }, [r]);
                let f = (0, n.useCallback)(e => {
                        var t;
                        let l = e.target.files;
                        l && 0 !== l.length && (null === (t = u.current) || void 0 === t || t.call(u, Array.from(l)), d.current && (d.current.value = ""))
                    }, []),
                    x = null !== (t = null == i ? void 0 : i.join(",")) && void 0 !== t ? t : "";
                return {
                    UploadInput: (0, n.useMemo)(() => {
                        let e = e => (0, a.jsx)("input", {
                            type: "file",
                            multiple: void 0 === e.multiple || e.multiple,
                            ref: d,
                            style: {
                                display: "none"
                            },
                            accept: x,
                            onChange: f,
                            ...e
                        }, "file-input");
                        return e.displayName = "UploadInput", e
                    }, [x, f]),
                    handlePlusClick: () => {
                        var e;
                        if (c && c <= (null != o ? o : 0)) {
                            (0, s.P)({
                                message: "You can only have up to ".concat(c, " attachments"),
                                type: "error"
                            });
                            return
                        }
                        null === (e = d.current) || void 0 === e || e.click()
                    }
                }
            }
        },
        44684: (e, t, l) => {
            l.d(t, {
                A: () => o
            });
            var a = l(95155),
                n = l(25427),
                s = l(12115),
                r = l(26846),
                i = l(4530);
            let c = e => {
                    let {
                        attachment: t,
                        onRetry: l
                    } = e;
                    if ("uploading" === t.status || "pending" === t.status) return (0, a.jsx)(n.Fat, {
                        className: "h-4 w-4 flex-shrink-0 animate-spin text-black/65"
                    });
                    if ("error" === t.status) return (0, a.jsx)(n.sFm, {
                        className: "h-4 w-4 flex-shrink-0 text-red-500",
                        onClick: () => l(t.id || "")
                    });
                    if ("image" === t.type) return (0, a.jsx)("img", {
                        src: t.icon,
                        alt: "Attachment",
                        className: "h-8 w-8 flex-shrink-0 rounded-[8px] border-[0.5px] border-black/3 object-cover"
                    });
                    let s = t.icon || (0, i.F)(t.type);
                    return (0, a.jsx)(s, {
                        className: "h-4 w-4 flex-shrink-0 object-contain"
                    })
                },
                o = e => {
                    let {
                        attachments: t,
                        onDelete: l,
                        onRetry: i,
                        className: o = "",
                        editable: d = !0
                    } = e, [u, f] = (0, s.useState)(null), [x, p] = (0, s.useState)(!1), [m, g] = (0, s.useState)(!1), h = (0, s.useRef)(null);
                    return ((0, s.useEffect)(() => {
                        let e = () => {
                                let e = h.current;
                                e && (p(e.scrollLeft > 0), g(e.scrollLeft < e.scrollWidth - e.clientWidth - 1))
                            },
                            t = h.current;
                        return t && (t.addEventListener("scroll", e), e(), setTimeout(e, 100)), () => {
                            t && t.removeEventListener("scroll", e)
                        }
                    }, [t]), 0 === t.length) ? null : (0, a.jsxs)("div", {
                        className: "relative overflow-visible",
                        children: [(0, a.jsx)("div", {
                            ref: h,
                            className: "no-scrollbar flex flex-nowrap gap-2 overflow-x-auto pt-1 pr-1 ".concat(o),
                            children: t.map((e, t) => (0, a.jsxs)("div", {
                                className: (0, r.cn)("relative flex h-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-black/6", "image" === e.type ? "w-8" : "max-w-[120px] gap-1 px-2"),
                                onMouseEnter: () => f(e.id || null),
                                onMouseLeave: () => f(null),
                                children: [(0, a.jsx)(c, {
                                    attachment: e,
                                    onRetry: i
                                }), "image" !== e.type && (0, a.jsx)("span", {
                                    className: "truncate text-sm font-normal text-black/65",
                                    children: e.name || e.type || ""
                                }), d && u === e.id && (0, a.jsx)("button", {
                                    className: "absolute -top-1 -right-1 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-[#3D3D3D] text-white",
                                    onClick: () => l(e.id || ""),
                                    children: (0, a.jsx)(n.Qks, {
                                        className: "h-3 w-3"
                                    })
                                })]
                            }, t))
                        }), x && (0, a.jsx)("div", {
                            className: "absolute top-2 left-0 z-10 h-6 w-6 cursor-pointer rounded-full bg-white p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]",
                            onClick: () => {
                                h.current && (h.current.scrollLeft -= 200)
                            },
                            children: (0, a.jsx)(n.M0J, {
                                className: "h-3 w-3"
                            })
                        }), m && (0, a.jsx)("div", {
                            className: "absolute top-2 right-0 z-10 h-6 w-6 cursor-pointer rounded-full bg-white p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]",
                            onClick: () => {
                                h.current && (h.current.scrollLeft += 200)
                            },
                            children: (0, a.jsx)(n.D8V, {
                                className: "h-3 w-3"
                            })
                        })]
                    })
                }
        },
        47511: (e, t, l) => {
            l.d(t, {
                g: () => n
            }), l(12115);
            let a = "yw-create-web-content-key",
                n = () => ({
                    createWeb: async (e, t) => {
                        let l = {
                            userPrompt: e,
                            attachments: t,
                            createdTime: Date.now()
                        };
                        localStorage.setItem(a, JSON.stringify(l))
                    },
                    getCreateWebContent: () => {
                        let e = localStorage.getItem(a);
                        return e ? JSON.parse(e) : null
                    },
                    clearCreateWebContent: () => {
                        localStorage.removeItem(a)
                    }
                })
        },
        49512: (e, t, l) => {
            l.d(t, {
                _: () => c,
                O: () => i
            });
            var a = l(48436),
                n = l(56289),
                s = l(40146),
                r = l(12115);

            function i(e) {
                let {
                    options: t,
                    handleFile: l
                } = e, i = e => {
                    (function(e, t) {
                        let {
                            allowedExtensions: l,
                            maxAttachments: n,
                            currentCount: s
                        } = t, r = e.filter(e => {
                            var t;
                            if (!l || 0 === l.length) return !0;
                            let a = "." + (null === (t = e.name.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase());
                            return l.includes(a)
                        });
                        if (0 === r.length) return [];
                        if (!n) return r;
                        let i = n - (null != s ? s : 0);
                        return i <= 0 ? ((0, a.P)({
                            message: "You can only have up to ".concat(n, " attachments"),
                            type: "error"
                        }), []) : r.length > i ? ((0, a.P)({
                            message: "Only adding ".concat(i, " of ").concat(r.length, " files (maximum ").concat(n, " attachments)"),
                            type: "warning"
                        }), r.slice(0, i)) : r
                    })(e, t).forEach(e => l(e))
                }, {
                    UploadInput: c,
                    handlePlusClick: o
                } = (0, s.A)({
                    options: t,
                    onFilesReceived: i
                }), {
                    handlePaste: d
                } = function(e) {
                    let {
                        onFilesReceived: t
                    } = e;
                    return {
                        handlePaste: (0, r.useCallback)(e => {
                            let l = e.clipboardData.items;
                            if (l && l.length > 0) {
                                let a = [];
                                for (let t = 0; t < l.length; t++) {
                                    let n = l[t];
                                    if ("file" === n.kind) {
                                        let t = n.getAsFile();
                                        t && (a.push(t), e.preventDefault())
                                    }
                                }
                                a.length > 0 && t(a)
                            }
                        }, [t])
                    }
                }({
                    onFilesReceived: i
                }), {
                    handleDragLeave: u,
                    handleDragOver: f,
                    handleDrop: x,
                    DragOverlay: p
                } = (0, n.A)({
                    onFilesReceived: i
                });
                return {
                    UploadInput: c,
                    handlePlusClick: o,
                    handlePaste: d,
                    dropHandlers: {
                        onDragLeave: u,
                        onDragOver: f,
                        onDrop: x
                    },
                    DragOverlay: p
                }
            }
            let c = [".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".html", ".css", ".js", ".pdf", ".md", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".txt", ".csv", ".epub", ".mp4", ".mov", ".avi", ".m4v", ".webm", ".wmv", ".flv", ".mkv", ".mp3", ".wav", ".aac", ".m4a", ".ogg"]
        },
        56289: (e, t, l) => {
            l.d(t, {
                A: () => i
            });
            var a = l(95155),
                n = l(12115);
            let s = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return new Promise(l => {
                        if (e.isFile) e.file(e => {
                            Object.defineProperty(e, "webkitRelativePath", {
                                value: t + e.name
                            }), l([e])
                        });
                        else if (e.isDirectory) {
                            let a = e.createReader(),
                                n = [],
                                r = () => {
                                    a.readEntries(async a => {
                                        if (a.length > 0) {
                                            for (let l of (await Promise.all(a.map(l => s(l, t + e.name + "/"))))) n.push(...l);
                                            r()
                                        } else l(n)
                                    })
                                };
                            r()
                        } else l([])
                    })
                },
                r = async e => {
                    let t = [],
                        l = Array.from(e);
                    for (let e of (await Promise.all(l.map(e => {
                            let t = e.webkitGetAsEntry();
                            return t ? s(t) : Promise.resolve([])
                        })))) t.push(...e);
                    return t
                };

            function i(e) {
                let {
                    onFilesReceived: t
                } = e, [l, s] = (0, n.useState)(!1);
                return {
                    handleDragLeave: e => {
                        e.preventDefault(), e.stopPropagation(), s(!1)
                    },
                    handleDragOver: e => {
                        e.preventDefault(), e.stopPropagation(), s(!0)
                    },
                    handleDrop: async e => {
                        e.preventDefault(), e.stopPropagation(), s(!1);
                        let l = e.dataTransfer.items;
                        if (l && l.length > 0) try {
                            let e = await r(l);
                            e.length > 0 && t(e)
                        } catch (e) {
                            console.error("== handleDrop error", e)
                        } else {
                            let l = e.dataTransfer.files;
                            l.length > 0 && t(Array.from(l))
                        }
                    },
                    DragOverlay: e => {
                        let {
                            children: t,
                            className: n
                        } = e;
                        return l ? (0, a.jsx)("div", {
                            className: "border-brand/50 absolute inset-0 z-40 flex items-center justify-center rounded-[20px] border border-dashed bg-white/95 ".concat(n || ""),
                            children: t || (0, a.jsx)("div", {
                                className: "text-center text-black/70",
                                children: "Drop files here to attach"
                            })
                        }) : null
                    }
                }
            }
        },
        87895: (e, t, l) => {
            l.d(t, {
                j: () => c
            });
            var a = l(12115),
                n = l(4530),
                s = l(90063),
                r = l(48436),
                i = l(34326);
            let c = () => {
                let [e, t] = (0, a.useState)([]), l = async e => (await (0, i.Q)(e, {
                    eventType: "source_code",
                    needUrl: !1,
                    isPublic: !0
                })).file_id, c = async e => {
                    let t = await (0, i.Q)(e, {
                        eventType: "image",
                        isPublic: !0,
                        needUrl: !0
                    });
                    return {
                        file_id: t.file_id,
                        file_url: t.file_url || ""
                    }
                }, o = async e => (await (0, i.Q)(e, {
                    eventType: "document",
                    isPublic: !0
                })).file_id, d = (0, a.useCallback)(e => {
                    t(t => t.map(t => t.id === e ? { ...t,
                        status: "uploading"
                    } : t))
                }, []), {
                    addTask: u,
                    removeTask: f,
                    resetQueue: x
                } = function() {
                    let {
                        maxConcurrentUploads: e = 3,
                        onTaskStart: t,
                        onTaskComplete: l,
                        onTaskError: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [s, r] = (0, a.useState)([]), [i, c] = (0, a.useState)(new Set), o = (0, a.useCallback)(async () => {
                        if (0 === s.length || i.size >= e) return;
                        let a = s[0];
                        r(s.slice(1));
                        let o = new Set(i);
                        o.add(a.id), c(o);
                        try {
                            null == t || t(a.id, a.data);
                            let e = await a.execute();
                            null == l || l(a.id, a.data, e)
                        } catch (e) {
                            console.error("Task failed:", e), null == n || n(a.id, a.data, e)
                        } finally {
                            let e = new Set(i);
                            e.delete(a.id), c(e)
                        }
                    }, [s, i, e, t, l, n]);
                    (0, a.useEffect)(() => {
                        o()
                    }, [s, i, o]);
                    let d = (0, a.useCallback)(e => (r(t => [...t, e]), e.id), []),
                        u = (0, a.useCallback)(e => {
                            r(t => {
                                let l = t.find(t => t.id === e);
                                if (l && !i.has(e)) {
                                    var a;
                                    null === (a = l.cancel) || void 0 === a || a.call(l)
                                }
                                return t.filter(t => t.id !== e)
                            })
                        }, [i]),
                        f = (0, a.useCallback)(() => {
                            s.forEach(e => {
                                if (!i.has(e.id)) {
                                    var t;
                                    null === (t = e.cancel) || void 0 === t || t.call(e)
                                }
                            }), r([])
                        }, [s, i]);
                    return {
                        queue: s,
                        activeTasks: i,
                        addTask: d,
                        removeTask: u,
                        resetQueue: f,
                        isPending: s.length > 0 || i.size > 0
                    }
                }({
                    maxConcurrentUploads: 2,
                    onTaskStart: d,
                    onTaskComplete: (0, a.useCallback)((e, l, a) => {
                        t(t => t.map(t => t.id === e ? { ...t,
                            status: "complete",
                            ...a || {}
                        } : t))
                    }, []),
                    onTaskError: (0, a.useCallback)((e, l) => {
                        t(t => t.map(t => t.id === e ? { ...t,
                            status: "error"
                        } : t)), (0, r.P)({
                            message: "Failed to upload ".concat(l.file.name),
                            type: "error"
                        })
                    }, [])
                }), p = (0, a.useCallback)(e => !(e.size > 5242880) || ((0, r.P)({
                    message: "File size exceeds the limit, max 5MB",
                    type: "error"
                }), !1), []), m = (0, a.useCallback)(e => e.type.startsWith("image/") ? "image" : "application/pdf" === e.type ? "pdf" : e.type.startsWith("audio/") ? "audio" : "file", []), g = (0, a.useCallback)(async e => {
                    let t = m(e),
                        a = "",
                        s = (0, n.F)(t);
                    if ("image" === t) {
                        let {
                            file_id: t,
                            file_url: l
                        } = await c(e);
                        a = t, s = l
                    } else a = "pdf" === t ? await o(e) : "audio" === t ? await o(e) : await l(e);
                    return {
                        fileId: a,
                        icon: s,
                        fileType: t
                    }
                }, [c, o, l, m]), h = (0, a.useCallback)((e, t) => ({
                    id: e,
                    data: {
                        file: t
                    },
                    execute: async () => {
                        let {
                            fileId: e,
                            icon: l
                        } = await g(t);
                        return s.A.getInstance().track("edit_chat_file_upload_success", {
                            file_type: m(t),
                            file_name: t.name,
                            file_mime_type: t.type,
                            file_size: Number((t.size / 1024 / 1024).toFixed(2))
                        }), {
                            file_id: e,
                            icon: l
                        }
                    },
                    cancel: () => {}
                }), [g]), b = (0, a.useCallback)(e => {
                    if (!p(e)) return null;
                    let l = crypto.randomUUID(),
                        a = m(e),
                        s = {
                            id: l,
                            type: a,
                            file_id: "",
                            name: e.name || a,
                            icon: (0, n.F)(a),
                            status: "pending",
                            file: e
                        };
                    return t(e => [...e, s]), u(h(l, e)), l
                }, [p, m, g, u, h]), v = (0, a.useCallback)(e => {
                    t(t => [...t, ...e])
                }, []), y = (0, a.useCallback)(e => {
                    f(e), t(t => t.filter(t => t.id !== e))
                }, [f]), j = (0, a.useCallback)(t => {
                    let l = e.find(e => e.id === t);
                    l && l.file && u(h(t, l.file))
                }, [u, e, h]), w = (0, a.useCallback)(() => e.filter(e => "complete" === e.status).map(e => {
                    let {
                        status: t,
                        file: l,
                        ...a
                    } = e;
                    return a
                }), [e]), k = (0, a.useCallback)(() => {
                    x(), t([])
                }, [x]);
                return {
                    attachments: e,
                    setAttachments: t,
                    addAttachments: v,
                    addFile: b,
                    removeAttachment: y,
                    handleRetry: j,
                    getCompletedAttachments: w,
                    resetAttachments: k
                }
            }
        }
    }
]);