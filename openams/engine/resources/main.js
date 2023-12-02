(() => {
    var t = {
            296: (t, e, n) => {
                var i = NaN,
                    o = "[object Symbol]",
                    r = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    s = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    d = parseInt,
                    u = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                    l = "object" == typeof self && self && self.Object === Object && self,
                    f = u || l || Function("return this")(),
                    h = Object.prototype.toString,
                    p = Math.max,
                    m = Math.min,
                    g = function() {
                        return f.Date.now()
                    };

                function b(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function y(t) {
                    if ("number" == typeof t) return t;
                    if (function(t) {
                            return "symbol" == typeof t || function(t) {
                                return !!t && "object" == typeof t
                            }(t) && h.call(t) == o
                        }(t)) return i;
                    if (b(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = b(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(r, "");
                    var n = s.test(t);
                    return n || c.test(t) ? d(t.slice(2), n ? 2 : 8) : a.test(t) ? i : +t
                }
                t.exports = function(t, e, n) {
                    var i, o, r, a, s, c, d = 0,
                        u = !1,
                        l = !1,
                        f = !0;
                    if ("function" != typeof t) throw new TypeError("Expected a function");

                    function h(e) {
                        var n = i,
                            r = o;
                        return i = o = void 0, d = e, a = t.apply(r, n)
                    }

                    function v(t) {
                        var n = t - c;
                        return void 0 === c || n >= e || n < 0 || l && t - d >= r
                    }

                    function _() {
                        var t = g();
                        if (v(t)) return w(t);
                        s = setTimeout(_, function(t) {
                            var n = e - (t - c);
                            return l ? m(n, r - (t - d)) : n
                        }(t))
                    }

                    function w(t) {
                        return s = void 0, f && i ? h(t) : (i = o = void 0, a)
                    }

                    function j() {
                        var t = g(),
                            n = v(t);
                        if (i = arguments, o = this, c = t, n) {
                            if (void 0 === s) return function(t) {
                                return d = t, s = setTimeout(_, e), u ? h(t) : a
                            }(c);
                            if (l) return s = setTimeout(_, e), h(c)
                        }
                        return void 0 === s && (s = setTimeout(_, e)), a
                    }
                    return e = y(e) || 0, b(n) && (u = !!n.leading, r = (l = "maxWait" in n) ? p(y(n.maxWait) || 0, e) : r, f = "trailing" in n ? !!n.trailing : f), j.cancel = function() {
                        void 0 !== s && clearTimeout(s), d = 0, i = c = o = s = void 0
                    }, j.flush = function() {
                        return void 0 === s ? a : w(g())
                    }, j
                }
            },
            777: t => {
                var e, n, i = Math.max,
                    o = (e = function(t, e) {
                        return function(t, e, n) {
                            if ("function" != typeof t) throw new TypeError("Expected a function");
                            return setTimeout((function() {
                                t.apply(void 0, n)
                            }), 1)
                        }(t, 0, e)
                    }, n = i(void 0 === n ? e.length - 1 : n, 0), function() {
                        for (var t = arguments, o = -1, r = i(t.length - n, 0), a = Array(r); ++o < r;) a[o] = t[n + o];
                        o = -1;
                        for (var s = Array(n + 1); ++o < n;) s[o] = t[o];
                        return s[n] = a,
                            function(t, e, n) {
                                switch (n.length) {
                                    case 0:
                                        return t.call(e);
                                    case 1:
                                        return t.call(e, n[0]);
                                    case 2:
                                        return t.call(e, n[0], n[1]);
                                    case 3:
                                        return t.call(e, n[0], n[1], n[2])
                                }
                                return t.apply(e, n)
                            }(e, this, s)
                    });
                t.exports = o
            }
        },
        e = {};

    function n(i) {
        var o = e[i];
        if (void 0 !== o) return o.exports;
        var r = e[i] = {
            exports: {}
        };
        return t[i](r, r.exports, n), r.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        const t = t => {
            const e = new Set;
            do {
                for (const n of Reflect.ownKeys(t)) e.add([t, n])
            } while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
            return e
        };

        function e(e, {
            include: n,
            exclude: i
        } = {}) {
            const o = t => {
                const e = e => "string" == typeof e ? t === e : e.test(t);
                return n ? n.some(e) : !i || !i.some(e)
            };
            for (const [n, i] of t(e.constructor.prototype)) {
                if ("constructor" === i || !o(i)) continue;
                const t = Reflect.getOwnPropertyDescriptor(n, i);
                t && "function" == typeof t.value && (e[i] = e[i].bind(e))
            }
            return e
        }
        var i = n(777),
            o = n.n(i),
            r = n(296),
            a = n.n(r);
        class s {
            constructor(t, n) {
                e(this), this.interfaceId = t, this.callbackMap = {}, this.data = {}, this.pendingData = {}, this.jcomm = new c("engine_interface_target_" + this.interfaceId, this.updateData, "open"), this.debouncedSendPendingData500 = a()(this.sendPendingData, 500), this.debouncedSendPendingData1000 = a()(this.sendPendingData, 1e3), n && o()(n)
            }
            send(t, e) {
                this.addPendingData(t, e), this.sendPendingData()
            }
            sendEvent(t) {
                for (const e of Object.keys(t)) this.addPendingData(e, t[e]);
                this.sendPendingData()
            }
            debouncedSendEvent500(t) {
                for (const e of Object.keys(t)) this.addPendingData(e, t[e]);
                this.debouncedSendPendingData500()
            }
            debouncedSend500(t, e) {
                this.addPendingData(t, e), this.debouncedSendPendingData500()
            }
            debouncedSend1000(t, e) {
                this.addPendingData(t, e), this.debouncedSendPendingData1000()
            }
            addPendingData(t, e) {
                Array.isArray(t) || (t = [t]);
                for (const n in t) this.pendingData[t[n]] = e
            }
            updateData(t) {
                t = JSON.parse(t.data);
                for (const e in t) this.data[e] = t[e];
                for (const e in t) e in this.callbackMap && this.callbackMap[e](this.data[e])
            }
            subscribe(t, e) {
                this.callbackMap[t] = e, o()((e => this.callbackMap[t](this.data[t])))
            }
            sendPendingData() {
                this.jcomm.send_data(this.pendingData), this.pendingData = {}
            }
        }
        class c {
            constructor(t, e, n = "open") {
                this._fire_callback = this._fire_callback.bind(this), this._register = this._register.bind(this), this.jcomm = void 0, this.callback = e, void 0 !== window.Jupyter ? "register" === n ? Jupyter.notebook.kernel.comm_manager.register_target(t, this._register) : (this.jcomm = Jupyter.notebook.kernel.comm_manager.new_comm(t), this.jcomm.on_msg(this._fire_callback)) : void 0 !== window._mgr && ("register" === n ? window._mgr.widgetManager.proxyKernel.registerCommTarget(t, this._register) : (this.jcomm = window._mgr.widgetManager.proxyKernel.createComm(t), this.jcomm.open({}, ""), this.jcomm.onMsg = this._fire_callback))
            }
            send_data(t) {
                void 0 !== this.jcomm ? this.jcomm.send(t) : console.error("Jupyter comm module not yet loaded! So we can't send the message.")
            }
            _register(t, e) {
                this.jcomm = t, this.jcomm.on_msg(this._fire_callback)
            }
            _fire_callback(t) {
                this.callback(t.content.data)
            }
        }
        class d {
            constructor(t, n) {
                e(this), this.id = t, this.comm = new s(t), this.comm.subscribe("append", this.appendData), this.comm.subscribe("replace", this.replaceData), this.comm.subscribe("event", this.eventOccurred), this.element = document.getElementById("engine-content-" + t), this.stop_button = document.getElementById("engine-stop-button-" + t), this.stop_button.onclick = () => this.comm.send("event", "stop")
            }
            appendData(t) {
                t && (this.stop_button.style.display = "inline-block", this.element.innerHTML += t)
            }
            replaceData(t) {
                t && (this.stop_button.style.display = "inline-block", this.element.innerHTML = t)
            }
            eventOccurred(t) {
                "complete" === t && (this.stop_button.style.display = "none")
            }
        }
        window._engineDisplay = function(t, e) {
            return new d(t, e)
        }
    })()
})();