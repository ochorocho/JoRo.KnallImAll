"use strict";

function animate(a, b, c, d) {
    function e() {
        a || b.hide(), f(), d && d.apply(b);
    }
    function f() {
        b[0].style.transitionDuration = 0, b.removeClass(g + " " + h + " " + c);
    }
    if (b = $(b).eq(0), b.length) {
        if (null === endEvent) return a ? b.show() : b.hide(), void d();
        var g = a ? initClasses[0] : initClasses[1], h = a ? activeClasses[0] : activeClasses[1];
        f(), b.addClass(c), b.css("transition", "none"), requestAnimationFrame(function() {
            b.addClass(g), a && b.show();
        }), requestAnimationFrame(function() {
            b[0].offsetWidth, b.css("transition", ""), b.addClass(h);
        }), b.one("transitionend", e);
    }
}

!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a);
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c;
        });
    }
    function e(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), 
        _.ready();
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = _.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c;
            } catch (e) {}
            sa.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j() {
        return !0;
    }
    function k() {
        return !1;
    }
    function l() {
        try {
            return Z.activeElement;
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i));
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([ a ], c) : c;
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f;
    }
    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), 
        c;
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), 
        Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; ) if (b = Xa[e] + c, 
        b in a) return b;
        return d;
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), 
        d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), 
        "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g;
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), 
        "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
        return setTimeout(function() {
            Ya = void 0;
        }), Ya = _.now();
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, 
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? _(a).show() : l.done(function() {
                _(a).hide();
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b]);
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b);
    }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function(a, b) {
        return b.toUpperCase();
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this);
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return _.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, 
        f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), 
            b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [ a ] : a) : T.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)));
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0;
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",");
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fa),
            PSEUDO: new RegExp("^" + ga),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xa = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, 
            c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), 
            I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), 
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), 
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode; ) i.unshift(c);
                for (c = b; c = c.parentNode; ) j.unshift(c);
                for (;i[e] === j[e]; ) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, d) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qa.test(a.nodeName);
                },
                input: function(a) {
                    return pa.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, 
    _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [ d ] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length;
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : ja.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), 
                ga.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = Z, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), _.makeArray(a, this));
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return _.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return _.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), 
            this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), d ? g = i.length : b && (e = c, k(b));
                }
                return this;
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; ) i.splice(c, 1), d && (g >= c && g--, 
                    h >= c && h--);
                }), this;
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], g = 0, this;
            },
            disable: function() {
                return i = j = b = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, b || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return l;
    }, _.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", _.Callbacks("once memory"), "resolved" ], [ "reject", "fail", _.Callbacks("once memory"), "rejected" ], [ "notify", "progress", _.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this;
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [ _ ]), 
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), 
        a.addEventListener("load", g, !1))), pa.promise(b);
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(na) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var ra = new h(), sa = new h(), ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a);
        },
        data: function(a, b, c) {
            return sa.access(a, b, c);
        },
        removeData: function(a, b) {
            sa.remove(a, b);
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c);
        },
        _removeData: function(a, b) {
            ra.remove(a, b);
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a);
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a);
            });
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = ra.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = [ "Top", "Right", "Bottom", "Left" ], xa = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
    }, ya = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/, Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(na) || [ "" ], j = b.length; j--; ) h = Da.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            _.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [ "" ], j = b.length; j--; ) if (h = Da.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || Z ], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : _.makeArray(c, [ b ]), 
            l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], 
                h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, 
                a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, 
        b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b);
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b));
            }
        };
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), 
            this.each(function() {
                _.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/, Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i, Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, 
    Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), 
            f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [ e ] : e); else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), 
            f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++]; ) Ja.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e];
                }
                delete sa.cache[c[sa.expando]];
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), 
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b);
            });
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), 
                f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], 
                Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")));
            }
            return this;
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f);
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", 
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return null == d && b(), d;
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), 
                b;
            }
        }));
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"), Ua = new RegExp("^([+-])=(" + va + ")", "i"), Va = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Wa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Xa = [ "Webkit", "O", "Moz", "ms" ];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), 
                f = "number"), void (null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), 
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e;
        }
    }), _.each([ "height", "width" ], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d);
                }) : A(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [ a, "marginRight" ]) : void 0;
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y);
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return B(this, !0);
        },
        hide: function() {
            return B(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide();
            });
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : C.propHooks._default.set(this), this;
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, _.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"), ab = /queueHooks$/, bb = [ G ], cb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? bb.unshift(a) : bb.push(a);
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue);
        }, d;
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), _.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e);
        };
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0;
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval));
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null;
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, 
        Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", 
        Y.radioValue = "t" === a.value;
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a);
            });
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void _.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            fb[b] = f), e;
        };
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a];
            });
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, 
            e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), _.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        _.propFix[this.toLowerCase()] = this;
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0;
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), _.each([ "radio", "checkbox" ], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0;
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), 
        b;
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm, ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//, rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"), vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, 
                i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), 
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), 
                u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [ v, l, i ? k : r ]), 
                p.fireWith(m, [ v, w ]), j && (n.trigger("ajaxComplete", [ v, l ]), --_.active || _.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = nb.exec(f); ) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [ "" ], 
            null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), 
            K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), 
            l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), 
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), 
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), 
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [ v, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1, d.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script");
        }
    }), _.each([ "get", "post" ], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b));
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            }).end();
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i, Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+");
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a));
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                };
            }).get();
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Cb = 0, Db = {}, Eb = {
        0: 200,
        1223: 204
    }, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]();
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a;
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), Z.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a;
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = _.buildFragment([ a ], b, e), e && e.length && _(e).remove(), 
        _.merge([], d.childNodes));
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, _.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), 
            i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), 
            c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), 
                d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) a = a.offsetParent;
                return a || Jb;
            });
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), _.each([ "top", "left" ], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0;
        });
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), _.fn.size = function() {
        return this.length;
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _;
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _;
    }, typeof b === za && (a.jQuery = a.$ = _), _;
}), !function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a);
    }
    function c(a) {
        return h.raw ? a : decodeURIComponent(a);
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a));
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a;
        } catch (b) {}
    }
    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d;
    }
    var g = /\+/g, h = a.cookie = function(e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                var j = i.expires, k = i.expires = new Date();
                k.setTime(+k + 864e5 * j);
            }
            return document.cookie = [ b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : "" ].join("");
        }
        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break;
            }
            e || void 0 === (r = f(r)) || (l[q] = r);
        }
        return l;
    };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b));
    };
}), function(a, b, c, d) {
    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), 
        a;
    }
    function f(a) {
        this.selector = a, this.query = "";
    }
    var g = function(b) {
        var c = a("head");
        c.prepend(a.map(b, function(a) {
            return 0 === c.has("." + a).length ? '<meta class="' + a + '" />' : void 0;
        }));
    };
    g([ "foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace" ]), 
    a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body);
    });
    var h = function(b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0], !e) return d;
                } else e = d;
                return a(e.querySelectorAll(b));
            }
            return a(c.querySelectorAll(b));
        }
        return a(b, d);
    }, i = function(a) {
        var b = [];
        return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), 
        b.push(this.name), b.join("-");
    }, j = function(a) {
        for (var b = a.split("-"), c = b.length, d = []; c--; ) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
        return d.reverse().join("-");
    }, k = function(b, c) {
        var d = this, e = function() {
            var e = h(this), f = !e.data(d.attr_name(!0) + "-init");
            e.data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(e))), 
            f && d.events(this);
        };
        return h(this.scope).is("[" + this.attr_name() + "]") ? e.call(this.scope) : h("[" + this.attr_name() + "]", this.scope).each(e), 
        "string" == typeof b ? this[b].call(this, c) : void 0;
    }, l = function(a, b) {
        function c() {
            b(a[0]);
        }
        function d() {
            if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                b += "random=" + new Date().getTime(), this.attr("src", a + b);
            }
        }
        return a.attr("src") ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c();
    };
    b.matchMedia || (b.matchMedia = function() {
        var a = b.styleMedia || b.media;
        if (!a) {
            var d = c.createElement("style"), e = c.getElementsByTagName("script")[0], f = null;
            d.type = "text/css", d.id = "matchmediajs-test", e.parentNode.insertBefore(d, e), 
            f = "getComputedStyle" in b && b.getComputedStyle(d, null) || d.currentStyle, a = {
                matchMedium: function(a) {
                    var b = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                    return d.styleSheet ? d.styleSheet.cssText = b : d.textContent = b, "1px" === f.width;
                }
            };
        }
        return function(b) {
            return {
                matches: a.matchMedium(b || "all"),
                media: b || "all"
            };
        };
    }()), function(a) {
        function c() {
            d && (g(c), i && a.fx.tick());
        }
        for (var d, e = 0, f = [ "webkit", "moz" ], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof a.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], 
        h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
        g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (a.fx.timer = function(b) {
            b() && a.timers.push(b) && !d && (d = !0, c());
        }, a.fx.stop = function() {
            d = !1;
        })) : (b.requestAnimationFrame = function(a) {
            var c = new Date().getTime(), d = Math.max(0, 16 - (c - e)), f = b.setTimeout(function() {
                a(c + d);
            }, d);
            return e = c + d, f;
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
    }(a), f.prototype.toString = function() {
        return this.query || (this.query = h(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""));
    }, b.Foundation = {
        name: "Foundation",
        version: "5.5.3",
        media_queries: {
            small: new f(".foundation-mq-small"),
            "small-only": new f(".foundation-mq-small-only"),
            medium: new f(".foundation-mq-medium"),
            "medium-only": new f(".foundation-mq-medium-only"),
            large: new f(".foundation-mq-large"),
            "large-only": new f(".foundation-mq-large-only"),
            xlarge: new f(".foundation-mq-xlarge"),
            "xlarge-only": new f(".foundation-mq-xlarge-only"),
            xxlarge: new f(".foundation-mq-xxlarge")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function(a, c, d, e, f) {
            var g = [ a, d, e, f ], i = [];
            if (this.rtl = /rtl/i.test(h("html").attr("dir")), this.scope = a || this.scope, 
            this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, g)); else for (var j in this.libs) i.push(this.init_lib(j, c));
            return h(b).load(function() {
                h(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider");
            }), a;
        },
        init_lib: function(b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), 
            this.libs[b].init.apply(this.libs[b], [ this.scope, c[b] ])) : (c = c instanceof Array ? c : new Array(c), 
            this.libs[b].init.apply(this.libs[b], c))) : function() {};
        },
        patch: function(a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, 
            a.attr_name = i, a.add_namespace = j, a.bindings = k, a.S = this.utils.S;
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length; d--; ) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]]);
        },
        set_namespace: function() {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b;
        },
        libs: {},
        utils: {
            S: h,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e), c = null;
                    }, b));
                };
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this, g = arguments, h = function() {
                        d = null, c || (e = a.apply(f, g));
                    }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
                };
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0;
                }
                function e(b) {
                    return "string" == typeof b ? a.trim(b) : b;
                }
                c = c || "options";
                var f, g, h, i = {}, j = function(a) {
                    var b = Foundation.global.namespace;
                    return a.data(b.length > 0 ? b + "-" + c : c);
                }, k = j(b);
                if ("object" == typeof k) return k;
                for (h = (k || ":").split(";"), f = h.length; f--; ) g = h[f].split(":"), g = [ g[0], g.slice(1).join(":") ], 
                /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (g[1] = -1 === g[1].indexOf(".") ? parseInt(g[1], 10) : parseFloat(g[1])), 
                2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                return i;
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), 
                Foundation.media_queries[b] = e(a("." + c).css("font-family")));
            },
            add_custom_rule: function(a, b) {
                if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }", Foundation.stylesheet.cssRules.length);
                }
            },
            image_loaded: function(a, b) {
                function c(a) {
                    for (var b = a.length, c = b - 1; c >= 0; c--) if (a.attr("height") === d) return !1;
                    return !0;
                }
                var e = this, f = a.length;
                (0 === f || c(a)) && b(a), a.each(function() {
                    l(e.S(this), function() {
                        f -= 1, 0 === f && b(a);
                    });
                });
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [ this.name || "F", (+new Date()).toString(36) ].join("-"), 
                this.prefix + (this.fidx++).toString(36);
            },
            match: function(a) {
                return b.matchMedia(a).matches;
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small);
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium);
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large);
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge);
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge);
            },
            is_small_only: function() {
                return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up());
            },
            is_medium_only: function() {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [ this ].concat(a)), this;
        });
    };
}(jQuery, window, window.document), function(a, b, c) {
    Foundation.libs.abide = {
        name: "abide",
        version: "5.5.3",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a) {
                    var b = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value, d = a.value, e = b === d;
                    return e;
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(b) {
            function c(a, b) {
                clearTimeout(d.timer), d.timer = setTimeout(function() {
                    d.validate([ a ], b);
                }.bind(a), f.timeout);
            }
            var d = this, e = d.S(b).attr("novalidate", "novalidate"), f = e.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), e.off(".abide").on("submit.fndtn.abide", function(a) {
                var b = /ajax/i.test(d.S(this).attr(d.attr_name()));
                return d.validate(d.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(), a, b);
            }).on("validate.fndtn.abide", function(a) {
                "manual" === f.validate_on && d.validate([ a.target ], a);
            }).on("reset", function(b) {
                return d.reset(a(this), b);
            }).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                var b = this.getAttribute("id"), d = e.find('[data-equalto="' + b + '"]');
                f.validate_on_blur && f.validate_on_blur === !0 && c(this, a), "undefined" != typeof d.get(0) && d.val().length && c(d.get(0), a), 
                "change" === f.validate_on && c(this, a);
            }).on("keydown.fndtn.abide", function(a) {
                var b = this.getAttribute("id"), d = e.find('[data-equalto="' + b + '"]');
                f.live_validate && f.live_validate === !0 && 9 != a.which && c(this, a), "undefined" != typeof d.get(0) && d.val().length && c(d.get(0), a), 
                "tab" === f.validate_on && 9 === a.which ? c(this, a) : "change" === f.validate_on && c(this, a);
            }).on("focus", function(b) {
                navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i) && a("html, body").animate({
                    scrollTop: a(b.target).offset().top
                }, 100);
            });
        },
        reset: function(b) {
            var c = this;
            b.removeAttr(c.invalid_attr), a("[" + c.invalid_attr + "]", b).removeAttr(c.invalid_attr), 
            a("." + c.settings.error_class, b).not("small").removeClass(c.settings.error_class), 
            a(":input", b).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(c.invalid_attr);
        },
        validate: function(a, b, c) {
            for (var d = this.parse_patterns(a), e = d.length, f = this.S(a[0]).closest("form"), g = /submit/.test(b.type), h = 0; e > h; h++) if (!d[h] && (g || c)) return this.settings.focus_on_invalid && a[h].focus(), 
            f.trigger("invalid.fndtn.abide"), this.S(a[h]).closest("form").attr(this.invalid_attr, ""), 
            !1;
            return (g || c) && f.trigger("valid.fndtn.abide"), f.removeAttr(this.invalid_attr), 
            c ? !1 : !0;
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--; ) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c);
        },
        pattern: function(a) {
            var b = a.getAttribute("type"), c = "string" == typeof a.getAttribute("required"), d = a.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [ a, this.settings.patterns[d], c ] : d.length > 0 ? [ a, new RegExp(d), c ] : this.settings.patterns.hasOwnProperty(b) ? [ a, this.settings.patterns[b], c ] : (d = /.*/, 
            [ a, d, c ]);
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length, d = [];
            if (0 == c) return d;
            var e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (e.data(this.attr_name(!0) + "-init") || {}; c--; ) {
                var f, g, h = b[c][0], i = b[c][2], j = h.value.trim(), k = this.S(h).parent(), l = h.getAttribute(this.add_namespace("data-abide-validator")), m = "radio" === h.type, n = "checkbox" === h.type, o = this.S('label[for="' + h.getAttribute("id") + '"]'), p = i ? h.value.length > 0 : !0, q = [];
                if (h.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f = k.is("label") ? k.parent() : k, 
                m && i) q.push(this.valid_radio(h, i)); else if (n && i) q.push(this.valid_checkbox(h, i)); else if (l) {
                    for (var r = l.split(" "), s = !0, t = !0, u = 0; u < r.length; u++) g = this.settings.validators[r[u]].apply(this, [ h, i, f ]), 
                    q.push(g), t = g && s, s = g;
                    t ? (this.S(h).removeAttr(this.invalid_attr), f.removeClass("error"), o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), 
                    a(h).triggerHandler("valid")) : (this.S(h).attr(this.invalid_attr, ""), f.addClass("error"), 
                    o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), 
                    a(h).triggerHandler("invalid"));
                } else if (q.push(b[c][1].test(j) && p || !i && h.value.length < 1 || a(h).attr("disabled") ? !0 : !1), 
                q = [ q.every(function(a) {
                    return a;
                }) ], q[0]) this.S(h).removeAttr(this.invalid_attr), h.setAttribute("aria-invalid", "false"), 
                h.removeAttribute("aria-describedby"), f.removeClass(this.settings.error_class), 
                o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), 
                a(h).triggerHandler("valid"); else {
                    this.S(h).attr(this.invalid_attr, ""), h.setAttribute("aria-invalid", "true");
                    var v = f.find("small." + this.settings.error_class, "span." + this.settings.error_class), w = v.length > 0 ? v[0].id : "";
                    w.length > 0 && h.setAttribute("aria-describedby", w), f.addClass(this.settings.error_class), 
                    o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), 
                    a(h).triggerHandler("invalid");
                }
                d = d.concat(q);
            }
            return d;
        },
        valid_checkbox: function(b, c) {
            var b = this.S(b), d = b.is(":checked") || !c || b.get(0).getAttribute("disabled");
            return d ? (b.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), 
            a(b).triggerHandler("valid")) : (b.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), 
            a(b).triggerHandler("invalid")), d;
        },
        valid_radio: function(b) {
            for (var c = b.getAttribute("name"), d = this.S(b).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + c + "']"), e = d.length, f = !1, g = !1, h = 0; e > h; h++) d[h].getAttribute("disabled") ? (g = !0, 
            f = !0) : d[h].checked ? f = !0 : g && (f = !1);
            for (var h = 0; e > h; h++) f ? (this.S(d[h]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), 
            a(d[h]).triggerHandler("valid")) : (this.S(d[h]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), 
            a(d[h]).triggerHandler("invalid"));
            return f;
        },
        valid_equal: function(a, b, d) {
            var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value, f = a.value, g = e === f;
            return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass(this.settings.error_class), 
            label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), 
            d.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), 
            g;
        },
        valid_oneof: function(a, b, c, d) {
            var a = this.S(a), e = this.S("[" + this.add_namespace("data-oneof") + "]"), f = e.filter(":checked").length > 0;
            if (f ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), 
            !d) {
                var g = this;
                e.each(function() {
                    g.valid_oneof.call(g, this, null, null, !0);
                });
            }
            return f;
        },
        reflow: function() {
            var a = this, b = a.S("[" + this.attr_name() + "]").attr("novalidate", "novalidate");
            a.S(b).each(function(b, c) {
                a.events(c);
            });
        }
    };
}(jQuery, window, window.document), function(a, b) {
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.3",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(b) {
            var c = this, d = this.S;
            c.create(this.S(b)), d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function(b) {
                var e = d(this).closest("[" + c.attr_name() + "]"), f = c.attr_name() + "=" + e.attr(c.attr_name()), g = e.data(c.attr_name(!0) + "-init") || c.settings, h = d("#" + this.href.split("#")[1]), i = a("> dd, > li", e), j = i.children("." + g.content_class), k = j.filter("." + g.active_class);
                return b.preventDefault(), e.attr(c.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class + ", [" + f + "] li > ." + g.content_class), 
                i = i.add("[" + f + "] dd, [" + f + "] li")), g.toggleable && h.is(k) ? (h.parent("dd, li").toggleClass(g.active_class, !1), 
                h.toggleClass(g.active_class, !1), d(this).attr("aria-expanded", function(a, b) {
                    return "true" === b ? "false" : "true";
                }), g.callback(h), h.triggerHandler("toggled", [ e ]), void e.triggerHandler("toggled", [ h ])) : (g.multi_expand || (j.removeClass(g.active_class), 
                i.removeClass(g.active_class), i.children("a").attr("aria-expanded", "false")), 
                h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [ e ]), 
                e.triggerHandler("toggled", [ h ]), void d(this).attr("aria-expanded", "true"));
            });
        },
        create: function(b) {
            var c = this, d = b, e = a("> .accordion-navigation", d), f = d.data(c.attr_name(!0) + "-init") || c.settings;
            e.children("a").attr("aria-expanded", "false"), e.has("." + f.content_class + "." + f.active_class).addClass(f.active_class).children("a").attr("aria-expanded", "true"), 
            f.multi_expand && b.attr("aria-multiselectable", "true");
        },
        toggle: function(a) {
            var a = "undefined" != typeof a ? a : {}, c = "undefined" != typeof a.selector ? a.selector : "", d = "undefined" != typeof a.toggle_state ? a.toggle_state : "", e = "undefined" != typeof a.$accordion ? a.$accordion : this.S(this.scope).closest("[" + this.attr_name() + "]"), f = e.find("> dd" + c + ", > li" + c);
            if (f.length < 1) return b.console && console.error("Selection not found.", c), 
            !1;
            var g = this.S, h = this.settings.active_class;
            f.each(function() {
                var a = g(this), b = a.hasClass(h);
                (b && "close" === d || !b && "open" === d || "" === d) && a.find("> a").trigger("click.fndtn.accordion");
            });
        },
        open: function(a) {
            var a = "undefined" != typeof a ? a : {};
            a.toggle_state = "open", this.toggle(a);
        },
        close: function(a) {
            var a = "undefined" != typeof a ? a : {};
            a.toggle_state = "close", this.toggle(a);
        },
        off: function() {},
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a) {
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.3",
        settings: {
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function() {
            var b = this, c = this.S;
            a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(a) {
                var d = c(this).closest("[" + b.attr_name() + "]"), e = d.data(b.attr_name(!0) + "-init") || b.settings;
                a.preventDefault(), Modernizr.csstransitions ? (d.addClass("alert-close"), d.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    c(this).trigger("close.fndtn.alert").remove(), e.callback();
                })) : d.fadeOut(300, function() {
                    c(this).trigger("close.fndtn.alert").remove(), e.callback();
                });
            });
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.5.3",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(a, b, c) {
            var d = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                d.assemble(d.S("li", this));
            });
        },
        events: function(d) {
            var e = this, f = e.S, g = a(".scroll-container");
            g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                var b = b || f(this), c = c || b, d = b.next("li"), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"), h = f(a.target);
                a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), 
                c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, 
                h = f("img", c)), e.open(h, b, c), e.update_paddles(c);
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                e.nav(a, "next");
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                e.nav(a, "prev");
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this);
            }), a(c).on("keydown.fndtn.clearing", function(a) {
                e.keydown(a);
            }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                e.resize();
            }), this.swipe_events(d);
        },
        swipe_events: function() {
            var a = this, b = a.S;
            b(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                a.touches || (a = a.originalEvent);
                var c = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: new Date().getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                b(this).data("swipe-transition", c), a.stopPropagation();
            }).on("touchmove.fndtn.clearing", ".visible-img", function(c) {
                if (c.touches || (c = c.originalEvent), !(c.touches.length > 1 || c.scale && 1 !== c.scale)) {
                    var d = b(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = c.touches[0].pageX - d.start_page_x, 
                    Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(c.touches[0].pageY - d.start_page_y))), 
                    !d.is_scrolling && !d.active) {
                        c.preventDefault();
                        var e = d.delta_x < 0 ? "next" : "prev";
                        d.active = !0, a.nav(c, e);
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                b(this).data("swipe-transition", {}), a.stopPropagation();
            });
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = c.detach(), e = "";
                if (null != d[0]) {
                    e = d[0].outerHTML;
                    var f = this.S("#foundationClearingHolder"), g = c.data(this.attr_name(!0) + "-init"), h = {
                        grid: '<div class="carousel">' + e + "</div>",
                        viewing: g.templates.viewing
                    }, i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>", j = this.settings.touch_label;
                    Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove();
                }
            }
        },
        open: function(b, d, e) {
            function f() {
                setTimeout(function() {
                    this.image_loaded(m, function() {
                        1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this);
                    }.bind(this));
                }.bind(this), 100);
            }
            function g(b) {
                var c = a(b);
                c.css("visibility", "visible"), c.trigger("imageVisible"), i.css("overflow", "hidden"), 
                j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                    e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible");
                }), l.trigger("opened.fndtn.clearing");
            }
            var h = this, i = a(c.body), j = e.closest(".clearing-assembled"), k = h.S("div", j).first(), l = h.S(".visible-img", k), m = h.S("img", l).not(b), n = h.S(".clearing-touch-label", k), o = !1, p = {};
            a("body").on("touchmove", function(a) {
                a.preventDefault();
            }), m.error(function() {
                o = !0;
            }), this.locked() || (l.trigger("open.fndtn.clearing"), p = this.load(b), p.interchange ? m.attr("data-interchange", p.interchange).foundation("interchange", "reflow") : m.attr("src", p.src).attr("data-interchange", ""), 
            m.css("visibility", "hidden"), f.call(this));
        },
        close: function(b, d) {
            b.preventDefault();
            var e, f, g = function(a) {
                return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout");
            }(a(d)), h = a(c.body);
            return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), 
            f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), 
            e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), 
            a("body").off("touchmove"), !1;
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0;
        },
        keydown: function(b) {
            var c = a(".clearing-blackout ul[" + this.attr_name() + "]"), d = this.rtl ? 37 : 39, e = this.rtl ? 39 : 37, f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click.fndtn.clearing");
        },
        nav: function(b, c) {
            var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c);
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img"), c = a(".clearing-touch-label", ".clearing-blackout");
            b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"));
        },
        fix_height: function(a) {
            var b = a.parent().children(), c = this;
            return b.each(function() {
                var a = c.S(this), b = a.find("img");
                a.height() > b.outerHeight() && a.addClass("fix-height");
            }).closest("ul").width(100 * b.length + "%"), this;
        },
        update_paddles: function(a) {
            a = a.closest("li");
            var b = a.closest(".carousel").siblings(".visible-img");
            a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), 
            a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled");
        },
        center_and_label: function(a, b) {
            return b.css(!this.rtl && b.length > 0 ? {
                marginLeft: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
            } : {
                marginRight: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                left: "auto",
                right: "50%"
            }), this;
        },
        load: function(a) {
            var b, c, d;
            return "A" === a[0].nodeName ? (b = a.attr("href"), c = a.data("clearing-interchange")) : (d = a.closest("a"), 
            b = d.attr("href"), c = d.data("clearing-interchange")), this.preload(a), {
                src: b ? b : a.attr("src"),
                interchange: b ? c : a.data("clearing-interchange")
            };
        },
        preload: function(a) {
            this.img(a.closest("li").next(), "next").img(a.closest("li").prev(), "prev");
        },
        img: function(b, c) {
            if (b.length) {
                var d, e, f, g = a(".clearing-preload-" + c), h = this.S("a", b);
                h.length ? (d = h.attr("href"), e = h.data("clearing-interchange")) : (f = this.S("img", b), 
                d = f.attr("src"), e = f.data("clearing-interchange")), e ? g.attr("data-interchange", e) : (g.attr("src", d), 
                g.attr("data-interchange", ""));
            }
            return this;
        },
        caption: function(a, b) {
            var c = b.attr("data-caption");
            if (c) {
                var d = a.get(0);
                d.innerHTML = c, a.show();
            } else a.text("").hide();
            return this;
        },
        go: function(a, b) {
            var c = this.S(".visible", a), d = c[b]();
            this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), 
            d.length && this.S("img", d).trigger("click.fndtn.clearing", [ c, d ]).trigger("change.fndtn.clearing");
        },
        shift: function(a, b, c) {
            var d, e = b.parent(), f = this.settings.prev_index || b.index(), g = this.direction(e, a, b), h = this.rtl ? "right" : "left", i = parseInt(e.css("left"), 10), j = b.outerWidth(), k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, 
            this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, 
            e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, 
            e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, 
            e.animate(k, 300, this.unlock())), c();
        },
        direction: function(a, b, c) {
            var d, e = this.S("li", a), f = e.outerWidth() + e.outerWidth() / 4, g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1, h = e.index(c);
            return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", 
            this.settings.prev_index = h, d;
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b - 1; c--) if (c === a) return !0;
            return !1;
        },
        lock: function() {
            this.settings.locked = !0;
        },
        unlock: function() {
            this.settings.locked = !1;
        },
        locked: function() {
            return this.settings.locked;
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing");
        },
        reflow: function() {
            this.init();
        }
    };
}(jQuery, window, window.document), function(a, b, c) {
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.3",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle"), a.extend(!0, this.settings, c, d), this.bindings(c, d);
        },
        events: function() {
            var d = this, e = d.S;
            e(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var c = e(this).data(d.attr_name(!0) + "-init") || d.settings;
                (!c.is_hover || Modernizr.touch) && (b.preventDefault(), e(this).parent("[data-reveal-id]").length && b.stopPropagation(), 
                d.toggle(a(this)));
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c, f = e(this);
                clearTimeout(d.timeout), f.data(d.data_attr()) ? (b = e("#" + f.data(d.data_attr())), 
                c = f) : (b = f, c = e("[" + d.attr_name() + '="' + b.attr("id") + '"]'));
                var g = c.data(d.attr_name(!0) + "-init") || d.settings;
                e(a.currentTarget).data(d.data_attr()) && g.is_hover && d.closeall.call(d), g.is_hover && d.open.apply(d, [ b, c ]);
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var a, b = e(this);
                if (b.data(d.data_attr())) a = b.data(d.data_attr(!0) + "-init") || d.settings; else var c = e("[" + d.attr_name() + '="' + e(this).attr("id") + '"]'), a = c.data(d.attr_name(!0) + "-init") || d.settings;
                d.timeout = setTimeout(function() {
                    b.data(d.data_attr()) ? a.is_hover && d.close.call(d, e("#" + b.data(d.data_attr()))) : a.is_hover && d.close.call(d, b);
                }.bind(this), a.hover_timeout);
            }).on("click.fndtn.dropdown", function(b) {
                var f = e(b.target).closest("[" + d.attr_name() + "-content]"), g = f.find("a");
                return g.length > 0 && "false" !== f.attr("aria-autoclose") && d.close.call(d, e("[" + d.attr_name() + "-content]")), 
                b.target !== c && !a.contains(c.documentElement, b.target) || e(b.target).closest("[" + d.attr_name() + "]").length > 0 ? void 0 : !e(b.target).data("revealId") && f.length > 0 && (e(b.target).is("[" + d.attr_name() + "-content]") || a.contains(f.first()[0], b.target)) ? void b.stopPropagation() : void d.close.call(d, e("[" + d.attr_name() + "-content]"));
            }).on("opened.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.opened.call(this);
            }).on("closed.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.closed.call(this);
            }), e(b).off(".dropdown").on("resize.fndtn.dropdown", d.throttle(function() {
                d.resize.call(d);
            }, 50)), this.resize();
        },
        close: function(b) {
            var c = this;
            b.each(function(d) {
                var e = a("[" + c.attr_name() + "=" + b[d].id + "]") || a("aria-controls=" + b[d].id + "]");
                e.attr("aria-expanded", "false"), c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"), 
                c.S(this).trigger("closed.fndtn.dropdown", [ b ]));
            }), b.removeClass("f-open-" + this.attr_name(!0));
        },
        closeall: function() {
            var b = this;
            a.each(b.S(".f-open-" + this.attr_name(!0)), function() {
                b.close.call(b, b.S(this));
            });
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), 
            a.data("target", b.get(0)).trigger("opened.fndtn.dropdown", [ a, b ]), a.attr("aria-hidden", "false"), 
            b.attr("aria-expanded", "true"), a.focus(), a.addClass("f-open-" + this.attr_name(!0));
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name;
        },
        toggle: function(a) {
            if (!a.hasClass(this.settings.disabled_class)) {
                var b = this.S("#" + a.data(this.data_attr()));
                0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), 
                b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a));
            }
        },
        resize: function() {
            var b = this.S("[" + this.attr_name() + "-content].open"), c = a(b.data("target"));
            b.length && c.length && this.css(b, c);
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8), d = b.data(this.attr_name(!0) + "-init") || this.settings, e = a.parent().css("overflow-y") || a.parent().css("overflow");
            if (this.clear_idx(), this.small()) {
                var f = this.dirs.bottom.call(a, b, d);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: f.top
                }), a.css(Foundation.rtl ? "right" : "left", c);
            } else if ("visible" !== e) {
                var g = b[0].offsetTop + b[0].offsetHeight;
                a.attr("style", "").css({
                    position: "absolute",
                    top: g
                }), a.css(Foundation.rtl ? "right" : "left", c);
            } else this.style(a, b, d);
            return a;
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e);
        },
        dirs: {
            _base: function(a, d) {
                var e = this.offsetParent(), f = e.offset(), g = a.offset();
                g.top -= f.top, g.left -= f.left, g.missRight = !1, g.missTop = !1, g.missLeft = !1, 
                g.leftRightFlag = !1;
                var h, i = b.innerWidth;
                h = c.getElementsByClassName("row")[0] ? c.getElementsByClassName("row")[0].clientWidth : i;
                var j = (i - h) / 2, k = h;
                if (!this.hasClass("mega") && !d.ignore_repositioning) {
                    var l = this.outerWidth(), m = a.offset().left;
                    a.offset().top <= this.outerHeight() && (g.missTop = !0, k = i - j, g.leftRightFlag = !0), 
                    m + l > m + j && m - j > l && (g.missRight = !0, g.missLeft = !1), 0 >= m - l && (g.missLeft = !0, 
                    g.missRight = !1);
                }
                return g;
            },
            top: function(a, b) {
                var c = Foundation.libs.dropdown, d = c.dirs._base.call(this, a, b);
                return this.addClass("drop-top"), 1 == d.missTop && (d.top = d.top + a.outerHeight() + this.outerHeight(), 
                this.removeClass("drop-top")), 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), 
                (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), 
                Foundation.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top - this.outerHeight()
                } : {
                    left: d.left,
                    top: d.top - this.outerHeight()
                };
            },
            bottom: function(a, b) {
                var c = Foundation.libs.dropdown, d = c.dirs._base.call(this, a, b);
                return 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), 
                (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), 
                c.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top + a.outerHeight()
                } : {
                    left: d.left,
                    top: d.top + a.outerHeight()
                };
            },
            left: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a, b);
                return this.addClass("drop-left"), 1 == c.missLeft && (c.left = c.left + this.outerWidth(), 
                c.top = c.top + a.outerHeight(), this.removeClass("drop-left")), {
                    left: c.left - this.outerWidth(),
                    top: c.top
                };
            },
            right: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a, b);
                this.addClass("drop-right"), 1 == c.missRight ? (c.left = c.left - this.outerWidth(), 
                c.top = c.top + a.outerHeight(), this.removeClass("drop-right")) : c.triggeredRight = !0;
                var d = Foundation.libs.dropdown;
                return (a.outerWidth() < this.outerWidth() || d.small() || this.hasClass(b.mega_menu)) && d.adjust_pip(this, a, b, c), 
                {
                    left: c.left + a.outerWidth(),
                    top: c.top
                };
            }
        },
        adjust_pip: function(a, b, c, d) {
            var e = Foundation.stylesheet, f = 8;
            a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8), 
            this.rule_idx = e.cssRules.length;
            var g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;";
            1 == d.missRight && (f = a.outerWidth() - 23, g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", 
            i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;"), 1 == d.triggeredRight && (g = ".f-dropdown.open:before", 
            h = ".f-dropdown.open:after", i = "left:-12px;", j = "left:-14px;"), e.insertRule ? (e.insertRule([ g, "{", i, "}" ].join(" "), this.rule_idx), 
            e.insertRule([ h, "{", j, "}" ].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx), 
            e.addRule(h, j, this.rule_idx + 1));
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), 
            delete this.rule_idx);
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), 
            this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.5.3",
        settings: {
            use_tallest: !0,
            before_height_change: a.noop,
            after_height_change: a.noop,
            equalize_on_stack: !1,
            act_on_hidden_el: !1
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow();
        },
        events: function() {
            this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow();
            }.bind(this));
        },
        equalize: function(b) {
            var c, d, e = !1, f = b.data("equalizer"), g = b.data(this.attr_name(!0) + "-init") || this.settings;
            if (c = b.find(g.act_on_hidden_el ? f ? "[" + this.attr_name() + '-watch="' + f + '"]' : "[" + this.attr_name() + "-watch]" : f ? "[" + this.attr_name() + '-watch="' + f + '"]:visible' : "[" + this.attr_name() + "-watch]:visible"), 
            0 !== c.length && (g.before_height_change(), b.trigger("before-height-change.fndth.equalizer"), 
            c.height("inherit"), g.equalize_on_stack !== !1 || (d = c.first().offset().top, 
            c.each(function() {
                return a(this).offset().top !== d ? (e = !0, !1) : void 0;
            }), !e))) {
                var h = c.map(function() {
                    return a(this).outerHeight(!1);
                }).get();
                if (g.use_tallest) {
                    var i = Math.max.apply(null, h);
                    c.css("height", i);
                } else {
                    var j = Math.min.apply(null, h);
                    c.css("height", j);
                }
                g.after_height_change(), b.trigger("after-height-change.fndtn.equalizer");
            }
        },
        reflow: function() {
            var b = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var c = a(this), d = c.data("equalizer-mq"), e = !0;
                d && (d = "is_" + d.replace(/-/g, "_"), Foundation.utils.hasOwnProperty(d) && (e = !1)), 
                b.image_loaded(b.S("img", this), function() {
                    if (e || Foundation.utils[d]()) b.equalize(c); else {
                        var a = c.find("[" + b.attr_name() + "-watch]:visible");
                        a.css("height", "auto");
                    }
                });
            });
        }
    };
}(jQuery, window, window.document), function(a, b) {
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.5.3",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                "small-only": Foundation.media_queries["small-only"],
                medium: Foundation.media_queries.medium,
                "medium-only": Foundation.media_queries["medium-only"],
                large: Foundation.media_queries.large,
                "large-only": Foundation.media_queries["large-only"],
                xlarge: Foundation.media_queries.xlarge,
                "xlarge-only": Foundation.media_queries["xlarge-only"],
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (null !== b && /IMG/.test(b[0].nodeName)) {
                        var e = a.each(b, function() {
                            this.src = c;
                        });
                        if (new RegExp(c, "i").test(e)) return;
                        return b.attr("src", c), d(b[0].src);
                    }
                    var f = b.data(this.data_attr + "-last-path"), g = this;
                    if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), 
                    b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                        b.html(a), b.data(g.data_attr + "-last-path", c), d();
                    });
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), 
            a.extend(!0, this.settings, c, d), this.bindings(c, d), this.reflow();
        },
        get_media_hash: function() {
            var a = "";
            for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
            return a;
        },
        events: function() {
            var c, d = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                var a = d.get_media_hash();
                a !== c && d.resize(), c = a;
            }, 50)), this;
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = this.results(c, b[c]);
                d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function(a) {
                    if (arguments[0] instanceof Array) var b = arguments[0]; else var b = Array.prototype.slice.call(arguments, 0);
                    return function() {
                        a.el.trigger(a.scenario[1], b);
                    };
                }(d));
            }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0) for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--; ) {
                var e, f = b[c][2];
                if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), 
                e.matches) return {
                    el: d,
                    scenario: b[c]
                };
            }
            return !1;
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), 
            this["cached_" + a];
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"), b = a.length, c = b, d = 0, e = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--; ) {
                if (d++, a[c]) {
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_images.push(a[c]);
                }
                d === b && (this.images_loaded = !0, this.enhance("images"));
            }
            return this;
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"), b = a.length, c = b, d = 0, e = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--; ) {
                d++;
                var f = a[c].getAttribute(e) || "";
                f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, 
                this.enhance("nodes"));
            }
            return this;
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length; d--; ) this.object(a(this["cached_" + c][d]));
            return a(b).trigger("resize.fndtn.interchange");
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace";
        },
        parse_scenario: function(a) {
            var b = a[0].match(/(.+),\s*(\w+)\s*$/), c = a[1].match(/(.*)\)/);
            if (b) var d = b[1], e = b[2]; else var f = a[0].split(/,\s*$/), d = f[0], e = "";
            return [ this.trim(d), this.convert_directive(e), this.trim(c[1]) ];
        },
        object: function(a) {
            var b = this.parse_data_attr(a), c = [], d = b.length;
            if (d > 0) for (;d--; ) {
                var e = b[d].split(/,\s?\(/);
                if (e.length > 1) {
                    var f = this.parse_scenario(e);
                    c.push(f);
                }
            }
            return this.store(a, c);
        },
        store: function(a, b) {
            var c = this.random_str(), d = a.data(this.add_namespace("uuid", !0));
            return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), 
            this.cache[c] = b);
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b;
        },
        set_data_attr: function(a) {
            return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr;
        },
        parse_data_attr: function(a) {
            for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--; ) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
            return d;
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0);
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.5.3",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: [ "bottom" ],
                bottom: [],
                left: [ "right", "top", "bottom" ],
                right: [ "left", "top", "bottom" ]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || a.extend({}, this.defaults, d || c), 
            this.bindings(c, d);
        },
        go_next: function() {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), 
            this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show());
        },
        go_prev: function() {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), 
            this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)));
        },
        events: function() {
            var c = this;
            a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                a.preventDefault(), this.go_next();
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(a) {
                a.preventDefault(), this.go_prev();
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
                a.preventDefault(), this.end(this.settings.abort_on_close);
            }.bind(this)).on("keyup.fndtn.joyride", function(a) {
                if (this.settings.keyboard && this.settings.riding) switch (a.which) {
                  case 39:
                    a.preventDefault(), this.go_next();
                    break;

                  case 37:
                    a.preventDefault(), this.go_prev();
                    break;

                  case 27:
                    a.preventDefault(), this.end(this.settings.abort_on_close);
                }
            }.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
                if (a("[" + c.attr_name() + "]").length > 0 && c.settings.$next_tip && c.settings.riding) {
                    if (c.settings.exposed.length > 0) {
                        var b = a(c.settings.exposed);
                        b.each(function() {
                            var b = a(this);
                            c.un_expose(b), c.expose(b);
                        });
                    }
                    c.is_phone() ? c.pos_phone() : c.pos_default(!1);
                }
            }, 100));
        },
        start: function() {
            var b = this, c = a("[" + this.attr_name() + "]", this.scope), d = [ "timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires" ], e = d.length;
            !c.length > 0 || (this.settings.init || this.events(), this.settings = c.data(this.attr_name(!0) + "-init"), 
            this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), 
            this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), 
            this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, 
            "function" != typeof a.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
                var f = a(this);
                this.settings = a.extend({}, b.defaults, b.data_options(f));
                for (var g = e; g--; ) b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
                b.create({
                    $li: f,
                    index: c
                });
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), 
            this.startTimer()) : this.show("init")));
        },
        resume: function() {
            this.set_li(), this.show();
        },
        tip_template: function(b) {
            var c, d;
            return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), 
            d = a.trim(a(b.li).html()) + this.prev_button_text(b.prev_button_text, b.index) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), 
            c.append(a(this.settings.template.wrapper)), c.first().attr(this.add_namespace("data-index"), b.index), 
            a(".joyride-content-wrapper", c).append(d), c[0];
        },
        timer_instance: function(b) {
            var c;
            return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML;
        },
        button_text: function(b) {
            return this.settings.tip_settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", 
            b;
        },
        prev_button_text: function(b, c) {
            return this.settings.tip_settings.prev_button ? (b = a.trim(b) || "Previous", b = 0 == c ? a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML : a(this.settings.template.prev_button).append(b)[0].outerHTML) : b = "", 
            b;
        },
        create: function(b) {
            this.settings.tip_settings = a.extend({}, this.settings, this.data_options(b.$li));
            var c = b.$li.attr(this.add_namespace("data-button")) || b.$li.attr(this.add_namespace("data-text")), d = b.$li.attr(this.add_namespace("data-button-prev")) || b.$li.attr(this.add_namespace("data-prev-text")), e = b.$li.attr("class"), f = a(this.tip_template({
                tip_class: e,
                index: b.index,
                button_text: c,
                prev_button_text: d,
                li: b.$li
            }));
            a(this.settings.tip_container).append(f);
        },
        show: function(b, c) {
            var e = null;
            if (this.settings.$li === d || -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after)) if (this.settings.paused ? this.settings.paused = !1 : this.set_li(b, c), 
            this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                if (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), 
                this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), 
                this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), 
                this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], 
                !/body/i.test(this.settings.$target.selector) && !this.settings.expose) {
                    var f = a(".joyride-modal-bg");
                    /pop/i.test(this.settings.tipAnimation) ? f.hide() : f.fadeOut(this.settings.tipAnimationFadeSpeed), 
                    this.scroll_to();
                }
                this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), e = this.settings.$next_tip.find(".joyride-timer-indicator"), 
                /pop/i.test(this.settings.tip_animation) ? (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), 
                setTimeout(function() {
                    e.animate({
                        width: e.parent().width()
                    }, this.settings.timer, "linear");
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (e.width(0), 
                this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), 
                setTimeout(function() {
                    e.animate({
                        width: e.parent().width()
                    }, this.settings.timer, "linear");
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), 
                this.settings.$current_tip = this.settings.$next_tip;
            } else this.settings.$li && this.settings.$target.length < 1 ? this.show(b, c) : this.end(); else this.settings.paused = !0;
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), 
            this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
                this.hide(), this.css("visibility", "visible");
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);
        },
        set_li: function(a, b) {
            a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), 
            this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = b ? this.settings.$li.prev() : this.settings.$li.next(), 
            this.set_next_tip()), this.set_target();
        },
        set_next_tip: function() {
            this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), 
            this.settings.$next_tip.data("closed", "");
        },
        set_target: function() {
            var b = this.settings.$li.attr(this.add_namespace("data-class")), d = this.settings.$li.attr(this.add_namespace("data-id")), e = function() {
                return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body");
            };
            this.settings.$target = e();
        },
        scroll_to: function() {
            var c, d;
            c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 
            0 != d && a("html, body").stop().animate({
                scrollTop: d
            }, this.settings.scroll_speed, "swing");
        },
        paused: function() {
            return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after);
        },
        restart: function() {
            this.hide(), this.settings.$li = d, this.show("init");
        },
        pos_default: function(a) {
            var b = this.settings.$next_tip.find(".joyride-nub"), c = Math.ceil(b.outerWidth() / 2), d = Math.ceil(b.outerHeight() / 2), e = a || !1;
            if (e && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), 
            /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(b); else {
                var f = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0, g = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + g
                } : {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), 
                this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], 
                this.settings.attempts++, this.pos_default());
            }
            e && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"));
        },
        pos_phone: function(b) {
            var c = this.settings.$next_tip.outerHeight(), d = (this.settings.$next_tip.offset(), 
            this.settings.$target.outerHeight()), e = a(".joyride-nub", this.settings.$next_tip), f = Math.ceil(e.outerHeight() / 2), g = b || !1;
            e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), 
            g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), 
            /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f
            }), e.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f
            }), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"));
        },
        pos_modal: function(a) {
            this.center(), a.hide(), this.show_modal();
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var b = a(".joyride-modal-bg");
                if (b.length < 1) {
                    var b = a(this.settings.template.modal);
                    b.appendTo("body");
                }
                /pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed);
            }
        },
        expose: function() {
            var c, d, e, f, g, h = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0]; else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                e = this.settings.$target;
            }
            return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), 
            this.settings.$body.append(c), c.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), d = a(this.settings.template.expose_cover), f = {
                zIndex: e.css("z-index"),
                position: e.css("position")
            }, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), 
            "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), 
            e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), 
            d.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), 
            d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), 
            void this.add_exposed(e));
        },
        un_expose: function() {
            var c, d, e, f, g, h = !1;
            if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0]; else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                d = this.settings.$target;
            }
            return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), 
            e = a("." + c), arguments.length > 1 && (h = arguments[1]), h === !0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), 
            f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), 
            f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), 
            g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), 
            d.removeData("expose-z-index"), void this.remove_exposed(d));
        },
        add_exposed: function(b) {
            this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b);
        },
        remove_exposed: function(b) {
            var c, d;
            for (b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], 
            d = this.settings.exposed.length; d--; ) if (this.settings.exposed[d] == c) return void this.settings.exposed.splice(d, 1);
        },
        center: function() {
            var c = a(b);
            return this.settings.$next_tip.css({
                top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
                left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
            }), !0;
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location);
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location);
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location);
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location);
        },
        corners: function(c) {
            if (0 === c.length) return [ !1, !1, !1, !1 ];
            var d = a(b), e = d.height() / 2, f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()), g = d.width() + d.scrollLeft(), h = d.height() + f, i = d.height() + d.scrollTop(), j = d.scrollTop();
            return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [ c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left ];
        },
        visible: function(a) {
            for (var b = a.length; b--; ) if (a[b]) return !1;
            return !0;
        },
        nub_position: function(a, b, c) {
            a.addClass("auto" === b ? c : b);
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer();
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate);
        },
        end: function(b) {
            this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), 
            a(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), 
            this.settings.riding = !1, a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), 
            ("undefined" == typeof b || b === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), 
            this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), 
            a(".joyride-tip-guide").remove();
        },
        off: function() {
            a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), 
            a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate);
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.3",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c);
        },
        events: function() {
            var b = this, c = b.S, d = b.settings;
            b.set_expedition_position(), c(b.scope).off(".magellan").on("click.fndtn.magellan", "[" + b.add_namespace("data-magellan-arrival") + "] a[href*=#]", function(c) {
                var d = this.hostname === location.hostname || !this.hostname, e = b.filterPathname(location.pathname) === b.filterPathname(this.pathname), f = this.hash.replace(/(:|\.|\/)/g, "\\$1"), g = this;
                if (d && e && f) {
                    c.preventDefault();
                    var h = a(this).closest("[" + b.attr_name() + "]"), i = h.data("magellan-expedition-init"), j = this.hash.split("#").join(""), k = a('a[name="' + j + '"]');
                    0 === k.length && (k = a("#" + j));
                    var l = k.offset().top - i.destination_threshold + 1;
                    i.offset_by_height && (l -= h.outerHeight()), a("html, body").stop().animate({
                        scrollTop: l
                    }, i.duration, i.easing, function() {
                        history.pushState ? history.pushState(null, null, g.pathname + g.search + "#" + j) : location.hash = g.pathname + g.search + "#" + j;
                    });
                }
            }).on("scroll.fndtn.magellan", b.throttle(this.check_for_arrivals.bind(this), d.throttle_delay));
        },
        check_for_arrivals: function() {
            var a = this;
            a.update_arrivals(), a.update_expedition_positions();
        },
        set_expedition_position: function() {
            var b = this;
            a("[" + this.attr_name() + "=fixed]", b.scope).each(function() {
                var c, d, e = a(this), f = e.data("magellan-expedition-init"), g = e.attr("styles");
                e.attr("style", ""), c = e.offset().top + f.threshold, d = parseInt(e.data("magellan-fixed-top")), 
                isNaN(d) || (b.settings.fixed_top = d), e.data(b.data_attr("magellan-top-offset"), c), 
                e.attr("style", g);
            });
        },
        update_expedition_positions: function() {
            var c = this, d = a(b).scrollTop();
            a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
                var b = a(this), e = b.data("magellan-expedition-init"), f = b.attr("style"), g = b.data("magellan-top-offset");
                if (d + c.settings.fixed_top >= g) {
                    var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), 
                    b.before(h)), b.css({
                        position: "fixed",
                        top: e.fixed_top
                    }).addClass("fixed");
                } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), 
                b.attr("style", f).css("position", "").css("top", "").removeClass("fixed");
            });
        },
        update_arrivals: function() {
            var c = this, d = a(b).scrollTop();
            a("[" + this.attr_name() + "]", c.scope).each(function() {
                var b = a(this), e = b.data(c.attr_name(!0) + "-init"), f = c.offsets(b, d), g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"), h = !1;
                f.each(function(a, d) {
                    if (d.viewport_offset >= d.top_offset) {
                        var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
                        return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), 
                        h = !0, !0;
                    }
                }), h || g.removeClass(e.active_class);
            });
        },
        offsets: function(b, c) {
            var d = this, e = b.data(d.attr_name(!0) + "-init"), f = c;
            return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function() {
                var c = a(this).data(d.data_attr("magellan-arrival")), g = a("[" + d.add_namespace("data-magellan-destination") + "=" + c + "]");
                if (g.length > 0) {
                    var h = g.offset().top - e.destination_threshold;
                    return e.offset_by_height && (h -= b.outerHeight()), h = Math.floor(h), {
                        destination: g,
                        arrival: a(this),
                        top_offset: h,
                        viewport_offset: f
                    };
                }
            }).sort(function(a, b) {
                return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0;
            });
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(b).off(".magellan");
        },
        filterPathname: function(a) {
            return a = a || "", a.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
        },
        reflow: function() {
            var b = this;
            a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove();
        }
    };
}(jQuery, window, window.document), function(a) {
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.3",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function() {
            var b = this, c = b.S, d = "", e = "", f = "", g = "", h = "";
            "move" === this.settings.open_method ? (d = "move-", e = "right", f = "left", g = "top", 
            h = "bottom") : "overlap_single" === this.settings.open_method ? (d = "offcanvas-overlap-", 
            e = "right", f = "left", g = "top", h = "bottom") : "overlap" === this.settings.open_method && (d = "offcanvas-overlap"), 
            c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(f) {
                b.click_toggle_class(f, d + e), "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(d + e), 
                a(".left-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(f) {
                var g = b.get_settings(f), h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (f.preventDefault(), 
                c(this).siblings(".left-submenu").toggleClass(d + e)) : h.hasClass("back") && (f.preventDefault(), 
                h.parent().removeClass(d + e)) : (b.hide.call(b, d + e, b.get_wrapper(f)), h.parent().removeClass(d + e)), 
                a(".left-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + f), "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(d + f), 
                a(".right-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                var g = b.get_settings(e), h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), 
                c(this).siblings(".right-submenu").toggleClass(d + f)) : h.hasClass("back") && (e.preventDefault(), 
                h.parent().removeClass(d + f)) : (b.hide.call(b, d + f, b.get_wrapper(e)), h.parent().removeClass(d + f)), 
                a(".right-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".top-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + h), "overlap" !== b.settings.open_method && c(".top-submenu").removeClass(d + h), 
                a(".top-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".top-off-canvas-menu a", function(e) {
                var f = b.get_settings(e), g = c(this).parent();
                !f.close_on_click || g.hasClass("has-submenu") || g.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), 
                c(this).siblings(".top-submenu").toggleClass(d + h)) : g.hasClass("back") && (e.preventDefault(), 
                g.parent().removeClass(d + h)) : (b.hide.call(b, d + h, b.get_wrapper(e)), g.parent().removeClass(d + h)), 
                a(".top-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".bottom-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + g), "overlap" !== b.settings.open_method && c(".bottom-submenu").removeClass(d + g), 
                a(".bottom-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".bottom-off-canvas-menu a", function(e) {
                var f = b.get_settings(e), h = c(this).parent();
                !f.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), 
                c(this).siblings(".bottom-submenu").toggleClass(d + g)) : h.hasClass("back") && (e.preventDefault(), 
                h.parent().removeClass(d + g)) : (b.hide.call(b, d + g, b.get_wrapper(e)), h.parent().removeClass(d + g)), 
                a(".bottom-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(g) {
                b.click_remove_class(g, d + f), c(".right-submenu").removeClass(d + f), e && (b.click_remove_class(g, d + e), 
                c(".left-submenu").removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, d + f), a(".left-off-canvas-toggle").attr("aria-expanded", "false"), 
                e && (b.click_remove_class(c, d + e), a(".right-off-canvas-toggle").attr("aria-expanded", "false"));
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(e) {
                b.click_remove_class(e, d + g), c(".bottom-submenu").removeClass(d + g), h && (b.click_remove_class(e, d + h), 
                c(".top-submenu").removeClass(d + g)), a(".bottom-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, d + g), a(".top-off-canvas-toggle").attr("aria-expanded", "false"), 
                h && (b.click_remove_class(c, d + h), a(".bottom-off-canvas-toggle").attr("aria-expanded", "false"));
            });
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper(), b.is("." + a) ? this.hide(a, b) : this.show(a, b);
        },
        show: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("open.fndtn.offcanvas"), b.addClass(a);
        },
        hide: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("close.fndtn.offcanvas"), b.removeClass(a);
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c);
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c);
        },
        get_settings: function(a) {
            var b = this.S(a.target).closest("[" + this.attr_name() + "]");
            return b.data(this.attr_name(!0) + "-init") || this.settings;
        },
        get_wrapper: function(a) {
            var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            return 0 === b.length && (b = this.S(".off-canvas-wrap")), b;
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    var e = function() {}, f = function(e, f) {
        if (e.hasClass(f.slides_container_class)) return this;
        var j, k, l, m, n, o, p = this, q = e, r = 0, s = !1;
        p.slides = function() {
            return q.children(f.slide_selector);
        }, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
            f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), 
            f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class));
        }, p.update_active_link = function(b) {
            var c = a('[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
            c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class);
        }, p.build_markup = function() {
            q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), 
            f.stack_on_small && j.addClass(f.stack_on_small_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), 
            j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), 
            m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), 
            j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), 
            k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), 
            f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), 
            p.slides().each(function(b) {
                var c = a("<li>").attr("data-orbit-slide", b).on("click", p.link_bullet);
                l.append(c);
            }));
        }, p._goto = function(b, c) {
            if (b === r) return !1;
            "object" == typeof o && o.restart();
            var d = p.slides(), e = "next";
            if (s = !0, r > b && (e = "prev"), b >= d.length) {
                if (!f.circular) return !1;
                b = 0;
            } else if (0 > b) {
                if (!f.circular) return !1;
                b = d.length - 1;
            }
            var g = a(d.get(r)), h = a(d.get(b));
            g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), 
            q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
            var i = function() {
                var a = function() {
                    r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), 
                    q.trigger("after-slide-change.fndtn.orbit", [ {
                        slide_number: r,
                        total_slides: d.length
                    } ]), f.after_slide_change(r, d.length);
                };
                q.outerHeight() != h.outerHeight() && f.variable_height ? q.animate({
                    height: h.outerHeight()
                }, 250, "linear", a) : a();
            };
            if (1 === d.length) return i(), !1;
            var j = function() {
                "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i);
            };
            h.outerHeight() > q.outerHeight() && f.variable_height ? q.animate({
                height: h.outerHeight()
            }, 250, "linear", j) : j();
        }, p.next = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1);
        }, p.prev = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1);
        }, p.link_custom = function(b) {
            b.preventDefault();
            var c = a(this).attr("data-orbit-link");
            if ("string" == typeof c && "" != (c = a.trim(c))) {
                var d = j.find("[data-orbit-slide=" + c + "]");
                -1 != d.index() && p._goto(d.index());
            }
        }, p.link_bullet = function() {
            var b = a(this).attr("data-orbit-slide");
            if ("string" == typeof b && "" != (b = a.trim(b))) if (isNaN(parseInt(b))) {
                var c = j.find("[data-orbit-slide=" + b + "]");
                -1 != c.index() && p._goto(c.index() + 1);
            } else p._goto(parseInt(b));
        }, p.timer_callback = function() {
            p._goto(r + 1, !0);
        }, p.compute_dimensions = function() {
            var b = a(p.slides().get(r)), c = b.outerHeight();
            f.variable_height || p.slides().each(function() {
                a(this).outerHeight() > c && (c = a(this).outerHeight());
            }), q.height(c);
        }, p.create_timer = function() {
            var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
            return a;
        }, p.stop_timer = function() {
            "object" == typeof o && o.stop();
        }, p.toggle_timer = function() {
            var a = j.find("." + f.timer_container_class);
            a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), 
            o.start()) : "object" == typeof o && o.stop();
        }, p.init = function() {
            p.build_markup(), f.timer && (o = p.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), o.start)), 
            n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), 
            j.on("click", "." + f.prev_class, p.prev), f.next_on_click && j.on("click", "." + f.slides_container_class + " [data-orbit-slide]", p.link_bullet), 
            j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                a.touches || (a = a.originalEvent);
                var b = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: new Date().getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                j.data("swipe-transition", b), a.stopPropagation();
            }).on("touchmove.fndtn.orbit", function(a) {
                if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                    var b = j.data("swipe-transition");
                    if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, 
                    "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), 
                    !b.is_scrolling && !b.active) {
                        a.preventDefault();
                        var c = b.delta_x < 0 ? r + 1 : r - 1;
                        b.active = !0, p._goto(c);
                    }
                }
            }).on("touchend.fndtn.orbit", function(a) {
                j.data("swipe-transition", {}), a.stopPropagation();
            }), j.on("mouseenter.fndtn.orbit", function() {
                f.timer && f.pause_on_hover && p.stop_timer();
            }).on("mouseleave.fndtn.orbit", function() {
                f.timer && f.resume_on_mouseout && o.start();
            }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("load resize", p.compute_dimensions), 
            Foundation.utils.image_loaded(this.slides().children("img"), p.compute_dimensions), 
            Foundation.utils.image_loaded(this.slides().children("img"), function() {
                j.prev("." + f.preloader_class).css("display", "none"), p.update_slide_number(0), 
                p.update_active_link(0), q.trigger("ready.fndtn.orbit");
            });
        }, p.init();
    }, g = function(a, b, c) {
        var d, e, f = this, g = b.timer_speed, h = a.find("." + b.timer_progress_class), i = -1;
        this.update_progress = function(a) {
            var b = h.clone();
            b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b;
        }, this.restart = function() {
            clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0);
        }, this.start = function() {
            return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), 
            d = new Date().getTime(), h.animate({
                width: "100%"
            }, i, "linear"), e = setTimeout(function() {
                f.restart(), c();
            }, i), void a.trigger("timer-started.fndtn.orbit")) : !0;
        }, this.stop = function() {
            if (a.hasClass(b.timer_paused_class)) return !0;
            clearTimeout(e), a.addClass(b.timer_paused_class);
            var c = new Date().getTime();
            i -= c - d;
            var h = 100 - i / g * 100;
            f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit");
        };
    }, h = function(b) {
        var c = b.animation_speed, d = 1 === a("html[dir=rtl]").length, e = d ? "marginRight" : "marginLeft", f = {};
        f[e] = "0%", this.next = function(a, b, d) {
            a.animate({
                marginLeft: "-100%"
            }, c), b.animate(f, c, function() {
                a.css(e, "100%"), d();
            });
        }, this.prev = function(a, b, d) {
            a.animate({
                marginLeft: "100%"
            }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                a.css(e, "100%"), d();
            });
        };
    }, i = function(b) {
        {
            var c = b.animation_speed;
            1 === a("html[dir=rtl]").length;
        }
        this.next = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d();
            });
        }, this.prev = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d();
            });
        };
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.5.3",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(a) {
            var b = new f(this.S(a), this.S(a).data("orbit-init"));
            this.S(a).data(this.name + "-instance", b);
        },
        reflow: function() {
            var a = this;
            if (a.S(a.scope).is("[data-orbit]")) {
                var b = a.S(a.scope), c = b.data(a.name + "-instance");
                c.compute_dimensions();
            } else a.S("[data-orbit]", a.scope).each(function(b, c) {
                var d = a.S(c), e = (a.data_options(d), d.data(a.name + "-instance"));
                e.compute_dimensions();
            });
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    function e(a) {
        var b = /fade/i.test(a), c = /pop/i.test(a);
        return {
            animate: b || c,
            pop: c,
            fade: b
        };
    }
    var f = [];
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.3",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            multiple_opened: !1,
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            on_ajax_error: a.noop,
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d), this.bindings(c, d);
        },
        events: function() {
            var a = this, b = a.S;
            return b(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b(this), e = d.data(a.data_attr("reveal-ajax")), f = d.data(a.data_attr("reveal-replace-content"));
                    if (a.locked = !0, "undefined" == typeof e) a.open.call(a, d); else {
                        var g = e === !0 ? d.attr("href") : e;
                        a.open.call(a, d, {
                            url: g
                        }, {
                            replaceContentSel: f
                        });
                    }
                }
            }), b(c).on("click.fndtn.reveal", this.close_targets(), function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b("[" + a.attr_name() + "].open").data(a.attr_name(!0) + "-init") || a.settings, e = b(c.target)[0] === b("." + d.bg_class)[0];
                    if (e) {
                        if (!d.close_on_background_click) return;
                        c.stopPropagation();
                    }
                    a.locked = !0, a.close.call(a, e ? b("[" + a.attr_name() + "].open:not(.toback)") : b(this).closest("[" + a.attr_name() + "]"));
                }
            }), b("[" + a.attr_name() + "]", this.scope).length > 0 ? b(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : b(this.scope).on("open.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.close_video), 
            !0;
        },
        key_up_on: function() {
            var a = this;
            return a.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(b) {
                var c = a.S("[" + a.attr_name() + "].open"), d = c.data(a.attr_name(!0) + "-init") || a.settings;
                d && 27 === b.which && d.close_on_esc && !a.locked && a.close.call(a, c);
            }), !0;
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"), !0;
        },
        open: function(c, e) {
            var g, h = this;
            c ? "undefined" != typeof c.selector ? g = h.S("#" + c.data(h.data_attr("reveal-id"))).first() : (g = h.S(this.scope), 
            e = c) : g = h.S(this.scope);
            var i = g.data(h.attr_name(!0) + "-init");
            if (i = i || this.settings, g.hasClass("open") && c !== d && c.attr("data-reveal-id") == g.attr("id")) return h.close(g);
            if (!g.hasClass("open")) {
                var j = h.S("[" + h.attr_name() + "].open");
                "undefined" == typeof g.data("css-top") && g.data("css-top", parseInt(g.css("top"), 10)).data("offset", this.cache_offset(g)), 
                g.attr("tabindex", "0").attr("aria-hidden", "false"), this.key_up_on(g), g.on("open.fndtn.reveal", function(a) {
                    "fndtn.reveal" !== a.namespace;
                }), g.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), j.length < 1 && this.toggle_bg(g, !0), 
                "string" == typeof e && (e = {
                    url: e
                });
                var k = function() {
                    j.length > 0 && (i.multiple_opened ? h.to_back(j) : h.hide(j, i.css.close)), i.multiple_opened && f.push(g), 
                    h.show(g, i.css.open);
                };
                if ("undefined" != typeof e && e.url) {
                    var l = "undefined" != typeof e.success ? e.success : null;
                    a.extend(e, {
                        success: function(b, c, d) {
                            if (a.isFunction(l)) {
                                var e = l(b, c, d);
                                "string" == typeof e && (b = e);
                            }
                            "undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? g.find(options.replaceContentSel).html(b) : g.html(b), 
                            h.S(g).foundation("section", "reflow"), h.S(g).children().foundation(), k();
                        }
                    }), i.on_ajax_error !== a.noop && a.extend(e, {
                        error: i.on_ajax_error
                    }), a.ajax(e);
                } else k();
            }
            h.S(b).trigger("resize");
        },
        close: function(b) {
            var b = b && b.length ? b : this.S(this.scope), c = this.S("[" + this.attr_name() + "].open"), d = b.data(this.attr_name(!0) + "-init") || this.settings, e = this;
            if (c.length > 0) if (b.removeAttr("tabindex", "0").attr("aria-hidden", "true"), 
            this.locked = !0, this.key_up_off(b), b.trigger("close.fndtn.reveal"), (d.multiple_opened && 1 === c.length || !d.multiple_opened || b.length > 1) && (e.toggle_bg(b, !1), 
            e.to_front(b)), d.multiple_opened) {
                var g = b.is(":not(.toback)");
                e.hide(b, d.css.close, d), g ? f.pop() : f = a.grep(f, function(a) {
                    var c = a[0] === b[0];
                    return c && e.to_front(b), !c;
                }), f.length > 0 && e.to_front(f[f.length - 1]);
            } else e.hide(c, d.css.close, d);
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a;
        },
        toggle_bg: function(b, c) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var e = this.settings.bg.filter(":visible").length > 0;
            c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg));
        },
        show: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init") || this.settings, g = f.root_element, h = this;
                if (0 === c.parent(g).length) {
                    var i = c.wrap('<div style="display: none;" />').parent();
                    c.on("closed.fndtn.reveal.wrapped", function() {
                        c.detach().appendTo(i), c.unwrap().unbind("closed.fndtn.reveal.wrapped");
                    }), c.detach().appendTo(g);
                }
                var j = e(f.animation);
                if (j.animate || (this.locked = !1), j.pop) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var k = {
                        top: a(b).scrollTop() + c.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(k, f.animation_speed, "linear", function() {
                            h.locked = !1, c.trigger("opened.fndtn.reveal");
                        }).addClass("open");
                    }, f.animation_speed / 2);
                }
                if (d.top = a(b).scrollTop() + c.data("css-top") + "px", j.fade) {
                    var k = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(k, f.animation_speed, "linear", function() {
                            h.locked = !1, c.trigger("opened.fndtn.reveal");
                        }).addClass("open");
                    }, f.animation_speed / 2);
                }
                return c.css(d).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened.fndtn.reveal");
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, 
            c.show());
        },
        to_back: function(a) {
            a.addClass("toback");
        },
        to_front: function(a) {
            a.removeClass("toback");
        },
        hide: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init"), g = this;
                f = f || this.settings;
                var h = e(f.animation);
                if (h.animate || (this.locked = !1), h.pop) {
                    var i = {
                        top: -a(b).scrollTop() - c.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(i, f.animation_speed, "linear", function() {
                            g.locked = !1, c.css(d).trigger("closed.fndtn.reveal");
                        }).removeClass("open");
                    }, f.animation_speed / 2);
                }
                if (h.fade) {
                    var i = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(i, f.animation_speed, "linear", function() {
                            g.locked = !1, c.css(d).trigger("closed.fndtn.reveal");
                        }).removeClass("open");
                    }, f.animation_speed / 2);
                }
                return c.hide().css(d).removeClass("open").trigger("closed.fndtn.reveal");
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide();
        },
        close_video: function(b) {
            var c = a(".flex-video", b.target), d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide());
        },
        open_video: function(b) {
            var c = a(".flex-video", b.target), e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f) e[0].src = e.attr("data-src"); else {
                    var g = e[0].src;
                    e[0].src = d, e[0].src = g;
                }
                c.show();
            }
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10) + a.scrollY;
            return a.hide(), b;
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    Foundation.libs.slider = {
        name: "slider",
        version: "5.5.3",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            precision: 2,
            initial: null,
            display_selector: "",
            vertical: !1,
            trigger_input_change: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c), this.reflow();
        },
        events: function() {
            var c = this;
            a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + c.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(b) {
                c.cache.active || (b.preventDefault(), c.set_active_slider(a(b.target)));
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(d) {
                if (c.cache.active) if (d.preventDefault(), a.data(c.cache.active[0], "settings").vertical) {
                    var e = 0;
                    d.pageY || (e = b.scrollY), c.calculate_position(c.cache.active, c.get_cursor_position(d, "y") + e);
                } else c.calculate_position(c.cache.active, c.get_cursor_position(d, "x"));
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function(d) {
                if (!c.cache.active) {
                    var e = "slider" === a(d.target).attr("role") ? a(d.target) : a(d.target).closest(".range-slider").find("[role='slider']");
                    if (e.length && !e.parent().hasClass("disabled") && !e.parent().attr("disabled")) if (c.set_active_slider(e), 
                    a.data(c.cache.active[0], "settings").vertical) {
                        var f = 0;
                        d.pageY || (f = b.scrollY), c.calculate_position(c.cache.active, c.get_cursor_position(d, "y") + f);
                    } else c.calculate_position(c.cache.active, c.get_cursor_position(d, "x"));
                }
                c.remove_active_slider();
            }).on("change.fndtn.slider", function() {
                c.settings.on_change();
            }), c.S(b).on("resize.fndtn.slider", c.throttle(function() {
                c.reflow();
            }, 300)), this.S("[" + this.attr_name() + "]").each(function() {
                var b = a(this), d = b.children(".range-slider-handle")[0], e = c.initialize_settings(d);
                "" != e.display_selector && a(e.display_selector).each(function() {
                    a(this).attr("value") && a(this).off("change").on("change", function() {
                        b.foundation("slider", "set_value", a(this).val());
                    });
                });
            });
        },
        get_cursor_position: function(a, b) {
            var c, d = "page" + b.toUpperCase(), e = "client" + b.toUpperCase();
            return "undefined" != typeof a[d] ? c = a[d] : "undefined" != typeof a.originalEvent[e] ? c = a.originalEvent[e] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0][e] ? c = a.originalEvent.touches[0][e] : a.currentPoint && "undefined" != typeof a.currentPoint[b] && (c = a.currentPoint[b]), 
            c;
        },
        set_active_slider: function(a) {
            this.cache.active = a;
        },
        remove_active_slider: function() {
            this.cache.active = null;
        },
        calculate_position: function(b, c) {
            var d = this, e = a.data(b[0], "settings"), f = (a.data(b[0], "handle_l"), a.data(b[0], "handle_o"), 
            a.data(b[0], "bar_l")), g = a.data(b[0], "bar_o");
            requestAnimationFrame(function() {
                var a;
                a = Foundation.rtl && !e.vertical ? d.limit_to((g + f - c) / f, 0, 1) : d.limit_to((c - g) / f, 0, 1), 
                a = e.vertical ? 1 - a : a;
                var h = d.normalized_value(a, e.start, e.end, e.step, e.precision);
                d.set_ui(b, h);
            });
        },
        set_ui: function(b, c) {
            var d = a.data(b[0], "settings"), e = a.data(b[0], "handle_l"), f = a.data(b[0], "bar_l"), g = this.normalized_percentage(c, d.start, d.end), h = g * (f - e) - 1, i = 100 * g, j = b.parent(), k = b.parent().children("input[type=hidden]");
            Foundation.rtl && !d.vertical && (h = -h), h = d.vertical ? -h + f - e + 1 : h, 
            this.set_translate(b, h, d.vertical), d.vertical ? b.siblings(".range-slider-active-segment").css("height", i + "%") : b.siblings(".range-slider-active-segment").css("width", i + "%"), 
            j.attr(this.attr_name(), c).trigger("change.fndtn.slider"), k.val(c), d.trigger_input_change && k.trigger("change.fndtn.slider"), 
            b[0].hasAttribute("aria-valuemin") || b.attr({
                "aria-valuemin": d.start,
                "aria-valuemax": d.end
            }), b.attr("aria-valuenow", c), "" != d.display_selector && a(d.display_selector).each(function() {
                this.hasAttribute("value") ? a(this).val(c) : a(this).text(c);
            });
        },
        normalized_percentage: function(a, b, c) {
            return Math.min(1, (a - b) / (c - b));
        },
        normalized_value: function(a, b, c, d, e) {
            var f = c - b, g = a * f, h = (g - g % d) / d, i = g % d, j = i >= .5 * d ? d : 0;
            return (h * d + j + b).toFixed(e);
        },
        set_translate: function(b, c, d) {
            d ? a(b).css("-webkit-transform", "translateY(" + c + "px)").css("-moz-transform", "translateY(" + c + "px)").css("-ms-transform", "translateY(" + c + "px)").css("-o-transform", "translateY(" + c + "px)").css("transform", "translateY(" + c + "px)") : a(b).css("-webkit-transform", "translateX(" + c + "px)").css("-moz-transform", "translateX(" + c + "px)").css("-ms-transform", "translateX(" + c + "px)").css("-o-transform", "translateX(" + c + "px)").css("transform", "translateX(" + c + "px)");
        },
        limit_to: function(a, b, c) {
            return Math.min(Math.max(a, b), c);
        },
        initialize_settings: function(b) {
            var c, d = a.extend({}, this.settings, this.data_options(a(b).parent()));
            return null === d.precision && (c = ("" + d.step).match(/\.([\d]*)/), d.precision = c && c[1] ? c[1].length : 0), 
            d.vertical ? (a.data(b, "bar_o", a(b).parent().offset().top), a.data(b, "bar_l", a(b).parent().outerHeight()), 
            a.data(b, "handle_o", a(b).offset().top), a.data(b, "handle_l", a(b).outerHeight())) : (a.data(b, "bar_o", a(b).parent().offset().left), 
            a.data(b, "bar_l", a(b).parent().outerWidth()), a.data(b, "handle_o", a(b).offset().left), 
            a.data(b, "handle_l", a(b).outerWidth())), a.data(b, "bar", a(b).parent()), a.data(b, "settings", d);
        },
        set_initial_position: function(b) {
            var c = a.data(b.children(".range-slider-handle")[0], "settings"), d = "number" != typeof c.initial || isNaN(c.initial) ? Math.floor(.5 * (c.end - c.start) / c.step) * c.step + c.start : c.initial, e = b.children(".range-slider-handle");
            this.set_ui(e, d);
        },
        set_value: function(b) {
            var c = this;
            a("[" + c.attr_name() + "]", this.scope).each(function() {
                a(this).attr(c.attr_name(), b);
            }), a(this.scope).attr(c.attr_name()) && a(this.scope).attr(c.attr_name(), b), c.reflow();
        },
        reflow: function() {
            var b = this;
            b.S("[" + this.attr_name() + "]").each(function() {
                var c = a(this).children(".range-slider-handle")[0], d = a(this).attr(b.attr_name());
                b.initialize_settings(c), d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this));
            });
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.3",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(a, b, c) {
            var d = this, e = this.S;
            e("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                d.default_tab_hashes.push(this.hash);
            }), this.bindings(b, c), this.handle_location_hash_change();
        },
        events: function() {
            var a = this, c = this.S, d = function(b, d) {
                var e = c(d).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                if (!e.is_hover || Modernizr.touch) {
                    var f = b.keyCode || b.which;
                    9 !== f && (b.preventDefault(), b.stopPropagation()), a.toggle_active_tab(c(d).parent());
                }
            };
            c(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
                var b = a.keyCode || a.which;
                if (13 === b || 32 === b) {
                    var c = this;
                    d(a, c);
                }
            }).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
                var b = this;
                d(a, b);
            }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var b = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                b.is_hover && a.toggle_active_tab(c(this).parent());
            }), c(b).on("hashchange.fndtn.tab", function(b) {
                b.preventDefault(), a.handle_location_hash_change();
            });
        },
        handle_location_hash_change: function() {
            var b = this, c = this.S;
            c("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = c(this).data(b.attr_name(!0) + "-init");
                if (e.deep_linking) {
                    var f;
                    if (f = e.scroll_to_content ? b.scope.location.hash : b.scope.location.hash.replace("fndtn-", ""), 
                    "" != f) {
                        var g = c(f);
                        if (g.hasClass("content") && g.parent().hasClass("tabs-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent()); else {
                            var h = g.closest(".content").attr("id");
                            h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f);
                        }
                    } else for (var i = 0; i < b.default_tab_hashes.length; i++) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent());
                }
            });
        },
        toggle_active_tab: function(e, f) {
            var g = this, h = g.S, i = e.closest("[" + this.attr_name() + "]"), j = e.find("a"), k = e.children("a").first(), l = "#" + k.attr("href").split("#")[1], m = h(l), n = e.siblings(), o = i.data(this.attr_name(!0) + "-init"), p = function(b) {
                var d, e = a(this), f = a(this).parents("li").prev().children('[role="tab"]'), g = a(this).parents("li").next().children('[role="tab"]');
                switch (b.keyCode) {
                  case 37:
                    d = f;
                    break;

                  case 39:
                    d = g;
                    break;

                  default:
                    d = !1;
                }
                d.length && (e.attr({
                    tabindex: "-1",
                    "aria-selected": null
                }), d.attr({
                    tabindex: "0",
                    "aria-selected": !0
                }).focus()), a('[role="tabpanel"]').attr("aria-hidden", "true"), a("#" + a(c.activeElement).attr("href").substring(1)).attr("aria-hidden", null);
            }, q = function(a) {
                var c = o.scroll_to_content ? g.default_tab_hashes[0] : "fndtn-" + g.default_tab_hashes[0].replace("#", "");
                (a !== c || b.location.hash) && (b.location.hash = a);
            };
            k.data("tab-content") && (l = "#" + k.data("tab-content").split("#")[1], m = h(l)), 
            o.deep_linking && (o.scroll_to_content ? (q(f || l), f == d || f == l ? e.parent()[0].scrollIntoView() : h(l)[0].scrollIntoView()) : q(f != d ? "fndtn-" + f.replace("#", "") : "fndtn-" + l.replace("#", ""))), 
            e.addClass(o.active_class).triggerHandler("opened"), j.attr({
                "aria-selected": "true",
                tabindex: 0
            }), n.removeClass(o.active_class), n.find("a").attr({
                "aria-selected": "false"
            }), m.siblings().removeClass(o.active_class).attr({
                "aria-hidden": "true"
            }), m.addClass(o.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), 
            o.callback(e), m.triggerHandler("toggled", [ m ]), i.triggerHandler("toggled", [ e ]), 
            j.off("keydown").on("keydown", p);
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        off: function() {},
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.3",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            fade_in_duration: 150,
            fade_out_duration: 150,
            show_on: "all",
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>';
            }
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "random_str"), this.bindings(b, c);
        },
        should_show: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b));
            return "all" === c.show_on ? !0 : this.small() && "small" === c.show_on ? !0 : this.medium() && "medium" === c.show_on ? !0 : this.large() && "large" === c.show_on ? !0 : !1;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        events: function(b) {
            function c(a, b, c) {
                a.timer || (c ? (a.timer = null, e.showTip(b)) : a.timer = setTimeout(function() {
                    a.timer = null, e.showTip(b);
                }.bind(a), e.settings.hover_delay));
            }
            function d(a, b) {
                a.timer && (clearTimeout(a.timer), a.timer = null), e.hide(b);
            }
            var e = this, f = e.S;
            e.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
                var g = f(this), h = a.extend({}, e.settings, e.data_options(g)), i = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && f(b.target).is("a")) return !1;
                if (/mouse/i.test(b.type) && e.ie_touch(b)) return !1;
                if (g.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), 
                e.hide(g); else {
                    if (h.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
                    if (!h.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), 
                    f(h.tooltip_class + ".open").hide(), i = !0, a(".open[" + e.attr_name() + "]").length > 0)) {
                        var j = f(a(".open[" + e.attr_name() + "]")[0]);
                        e.hide(j);
                    }
                    /enter|over/i.test(b.type) ? c(this, g) : "mouseout" === b.type || "mouseleave" === b.type ? d(this, g) : c(this, g, !0);
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
                return /mouse/i.test(b.type) && e.ie_touch(b) ? !1 : void (("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? e.convert_to_touch(a(this)) : d(this, a(this))));
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                d(this, f(this));
            });
        },
        ie_touch: function() {
            return !1;
        },
        showTip: function(a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0;
        },
        getTip: function(b) {
            var c = this.selector(b), d = a.extend({}, this.settings, this.data_options(b)), e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1;
        },
        selector: function(a) {
            var b = a.attr(this.attr_name()) || a.attr("data-selector");
            return "string" != typeof b && (b = this.random_str(6), a.attr("data-selector", b).attr("aria-describedby", b)), 
            b;
        },
        create: function(c) {
            var d = this, e = a.extend({}, this.settings, this.data_options(c)), f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())), h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), 
            g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                d.hide(c);
            })), c.removeAttr("title").attr("title", "");
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), 
            g = f.outerHeight(), h = f.outerWidth(), c.css(this.small() ? {
                width: "100%"
            } : {
                width: e ? e : "auto"
            }), i = function(a, b, c, d, e) {
                return a.css({
                    top: b ? b : "auto",
                    bottom: d ? d : "auto",
                    left: e ? e : "auto",
                    right: c ? c : "auto"
                }).end();
            };
            var j = b.offset().top, k = b.offset().left, l = b.outerHeight();
            if (i(c, j + l + 10, "auto", "auto", k), this.small()) i(c, j + l + 10, "auto", "auto", 12.5, a(this.scope).width()), 
            c.addClass("tip-override"), i(f, -g, "auto", "auto", k); else {
                Foundation.rtl && (f.addClass("rtl"), k = k + b.outerWidth() - c.outerWidth()), 
                i(c, j + l + 10, "auto", "auto", k), f.attr("style") && f.removeAttr("style"), c.removeClass("tip-override");
                var m = c.outerHeight();
                d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, j - m, "auto", "auto", k).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, j + l / 2 - m / 2, "auto", "auto", k - c.outerWidth() - g).removeClass("tip-override"), 
                f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, j + l / 2 - m / 2, "auto", "auto", k + b.outerWidth() + g).removeClass("tip-override"), 
                f.removeClass("rtl"));
            }
            c.css("visibility", "visible").hide();
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        inheritable_classes: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b)), d = [ "tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round" ].concat(c.additional_inheritable_classes), e = b.attr("class"), f = e ? a.map(e.split(" "), function(b) {
                return -1 !== a.inArray(b, d) ? b : void 0;
            }).join(" ") : "";
            return a.trim(f);
        },
        convert_to_touch: function(b) {
            var c = this, d = c.getTip(b), e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), 
            d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                c.hide(b);
            })), b.data("tooltip-open-event-type", "touch");
        },
        show: function(a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), 
            a.addClass("open"), b.fadeIn(this.settings.fade_in_duration);
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(this.settings.fade_out_duration, function() {
                b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), 
                a.removeClass("open");
            });
        },
        off: function() {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text());
            }).remove();
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c) {
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.3",
        settings: {
            index: 0,
            start_offset: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all",
            dropdown_autoclose: !0
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this), c = b.data(e.attr_name(!0) + "-init");
                    e.S("section, .top-bar-section", this);
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, 
                e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), 
                c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), 
                e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), 
                d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed");
            });
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class), e = matchMedia(Foundation.media_queries.small).matches, f = matchMedia(Foundation.media_queries.medium).matches, g = matchMedia(Foundation.media_queries.large).matches;
            return d && "all" === c.sticky_on ? !0 : d && this.small() && -1 !== c.sticky_on.indexOf("small") && e && !f && !g ? !0 : d && this.medium() && -1 !== c.sticky_on.indexOf("medium") && e && f && !g ? !0 : d && this.large() && -1 !== c.sticky_on.indexOf("large") && e && f && g ? !0 : !1;
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"), g = e.S("section, .top-bar-section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), 
            f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), 
            d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), 
            d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), 
            d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), 
            d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), 
            d.parent().removeClass("expanded"), e.update_sticky_positioning())));
        },
        timer: null,
        events: function() {
            var c = this, d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this);
            }).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li"), d = b.closest("[" + c.attr_name() + "]"), e = d.data(c.attr_name(!0) + "-init");
                if (e.dropdown_autoclose && e.is_hover) {
                    var f = a(this).closest(".hover");
                    f.removeClass("hover");
                }
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle();
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this), f = d(b.target), g = e.closest("[" + c.attr_name() + "]"), h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void (c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), 
                e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), 
                a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())));
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
                    var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .top-bar-section"), g = (b.next(".dropdown").outerHeight(), 
                    b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"));
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c);
            }, 50)).trigger("resize.fndtn.topbar").load(function() {
                d(this).trigger("resize.fndtn.topbar");
            }), d("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover");
            }), d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
                var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .top-bar-section"), g = (e.data(c.attr_name(!0) + "-init"), 
                b.closest("li.moved")), h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), 
                setTimeout(function() {
                    g.removeClass("moved");
                }, 300);
            }), d(this.scope).find(".dropdown a").focus(function() {
                a(this).parents(".has-dropdown").addClass("hover");
            }).blur(function() {
                a(this).parents(".has-dropdown").removeClass("hover");
            });
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this), e = d.data(a.attr_name(!0) + "-init"), f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d);
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, 
                a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), 
                f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)));
            });
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches;
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        assemble: function(b) {
            var c = this, d = b.data(this.attr_name(!0) + "-init"), e = c.S("section, .top-bar-section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this), f = e.siblings(".dropdown"), g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), 
                a("h5>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), 
                f.prepend(b));
            }), e.appendTo(b), this.sticky(), this.assembled(b);
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }));
        },
        height: function(b) {
            var c = 0, d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0);
            }), c;
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning();
            });
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class, c = this.S(b), d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), 
                d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), 
                d.S("body").removeClass("f-topbar-fixed")));
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    function c(a) {
        return "object" == typeof a;
    }
    function d(a) {
        return "string" == typeof a;
    }
    function e(a) {
        return "number" == typeof a;
    }
    function f(a) {
        return a === b;
    }
    function g() {
        M = google.maps, L || (L = {
            verbose: !1,
            queryLimit: {
                attempt: 5,
                delay: 250,
                random: 250
            },
            classes: function() {
                var b = {};
                return a.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(a, c) {
                    b[c] = M[c];
                }), b;
            }(),
            map: {
                mapTypeId: M.MapTypeId.ROADMAP,
                center: [ 46.578498, 2.457275 ],
                zoom: 2
            },
            overlay: {
                pane: "floatPane",
                content: "",
                offset: {
                    x: 0,
                    y: 0
                }
            },
            geoloc: {
                getCurrentPosition: {
                    maximumAge: 6e4,
                    timeout: 5e3
                }
            }
        });
    }
    function h(a, b) {
        return f(a) ? "gmap3_" + (b ? N + 1 : ++N) : a;
    }
    function i(a) {
        var b, c = M.version.split(".");
        for (a = a.split("."), b = 0; b < c.length; b++) c[b] = parseInt(c[b], 10);
        for (b = 0; b < a.length; b++) {
            if (a[b] = parseInt(a[b], 10), !c.hasOwnProperty(b)) return !1;
            if (c[b] < a[b]) return !1;
        }
        return !0;
    }
    function j(b, c, d, e, f) {
        function g(c, e) {
            c && a.each(c, function(a, c) {
                var g = b, h = c;
                P(c) && (g = c[0], h = c[1]), e(d, a, function(a) {
                    h.apply(g, [ f || d, a, i ]);
                });
            });
        }
        var h = c.td || {}, i = {
            id: e,
            data: h.data,
            tag: h.tag
        };
        g(h.events, M.event.addListener), g(h.onces, M.event.addListenerOnce);
    }
    function k(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c;
    }
    function l(a, b) {
        var c, d = arguments;
        for (c = 2; c < d.length; c++) if (b in d[c] && d[c].hasOwnProperty(b)) return void (a[b] = d[c][b]);
    }
    function m(b, c) {
        var d, e, f = [ "data", "tag", "id", "events", "onces" ], g = {};
        if (b.td) for (d in b.td) b.td.hasOwnProperty(d) && "options" !== d && "values" !== d && (g[d] = b.td[d]);
        for (e = 0; e < f.length; e++) l(g, f[e], c, b.td);
        return g.options = a.extend({}, b.opts || {}, c.options || {}), g;
    }
    function n() {
        if (L.verbose) {
            var a, b = [];
            if (window.console && O(console.error)) {
                for (a = 0; a < arguments.length; a++) b.push(arguments[a]);
                console.error.apply(console, b);
            } else {
                for (b = "", a = 0; a < arguments.length; a++) b += arguments[a].toString() + " ";
                alert(b);
            }
        }
    }
    function o(a) {
        return (e(a) || d(a)) && "" !== a && !isNaN(a);
    }
    function p(a) {
        var b, d = [];
        if (!f(a)) if (c(a)) if (e(a.length)) d = a; else for (b in a) d.push(a[b]); else d.push(a);
        return d;
    }
    function q(b) {
        return b ? O(b) ? b : (b = p(b), function(d) {
            var e;
            if (f(d)) return !1;
            if (c(d)) {
                for (e = 0; e < d.length; e++) if (a.inArray(d[e], b) >= 0) return !0;
                return !1;
            }
            return a.inArray(d, b) >= 0;
        }) : void 0;
    }
    function r(a, b, c) {
        var e = b ? a : null;
        return !a || d(a) ? e : a.latLng ? r(a.latLng) : a instanceof M.LatLng ? a : o(a.lat) ? new M.LatLng(a.lat, a.lng) : !c && P(a) && o(a[0]) && o(a[1]) ? new M.LatLng(a[0], a[1]) : e;
    }
    function s(a) {
        var b, c;
        return !a || a instanceof M.LatLngBounds ? a || null : (P(a) ? 2 === a.length ? (b = r(a[0]), 
        c = r(a[1])) : 4 === a.length && (b = r([ a[0], a[1] ]), c = r([ a[2], a[3] ])) : "ne" in a && "sw" in a ? (b = r(a.ne), 
        c = r(a.sw)) : "n" in a && "e" in a && "s" in a && "w" in a && (b = r([ a.n, a.e ]), 
        c = r([ a.s, a.w ])), b && c ? new M.LatLngBounds(c, b) : null);
    }
    function t(a, b, c, e, f) {
        var g = c ? r(e.td, !1, !0) : !1, h = g ? {
            latLng: g
        } : e.td.address ? d(e.td.address) ? {
            address: e.td.address
        } : e.td.address : !1, i = h ? R.get(h) : !1, j = this;
        h ? (f = f || 0, i ? (e.latLng = i.results[0].geometry.location, e.results = i.results, 
        e.status = i.status, b.apply(a, [ e ])) : (h.location && (h.location = r(h.location)), 
        h.bounds && (h.bounds = s(h.bounds)), x().geocode(h, function(d, g) {
            g === M.GeocoderStatus.OK ? (R.store(h, {
                results: d,
                status: g
            }), e.latLng = d[0].geometry.location, e.results = d, e.status = g, b.apply(a, [ e ])) : g === M.GeocoderStatus.OVER_QUERY_LIMIT && f < L.queryLimit.attempt ? setTimeout(function() {
                t.apply(j, [ a, b, c, e, f + 1 ]);
            }, L.queryLimit.delay + Math.floor(Math.random() * L.queryLimit.random)) : (n("geocode failed", g, h), 
            e.latLng = e.results = !1, e.status = g, b.apply(a, [ e ]));
        }))) : (e.latLng = r(e.td, !1, !0), b.apply(a, [ e ]));
    }
    function u(b, c, d, e) {
        function f() {
            do h++; while (h < b.length && !("address" in b[h]));
            return h >= b.length ? void d.apply(c, [ e ]) : void t(g, function(c) {
                delete c.td, a.extend(b[h], c), f.apply(g, []);
            }, !0, {
                td: b[h]
            });
        }
        var g = this, h = -1;
        f();
    }
    function v(a, b, c) {
        var d = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
            d || (d = !0, c.latLng = new M.LatLng(e.coords.latitude, e.coords.longitude), b.apply(a, [ c ]));
        }, function() {
            d || (d = !0, c.latLng = !1, b.apply(a, [ c ]));
        }, c.opts.getCurrentPosition) : (c.latLng = !1, b.apply(a, [ c ]));
    }
    function w(a) {
        var b, d = !1;
        if (c(a) && a.hasOwnProperty("get")) {
            for (b in a) if ("get" !== b) return !1;
            d = !a.get.hasOwnProperty("callback");
        }
        return d;
    }
    function x() {
        return Q.geocoder || (Q.geocoder = new M.Geocoder()), Q.geocoder;
    }
    function y() {
        var a = [];
        this.get = function(b) {
            if (a.length) {
                var d, e, f, g, h, i = k(b);
                for (d = 0; d < a.length; d++) {
                    for (g = a[d], h = i.length === g.keys.length, e = 0; e < i.length && h; e++) f = i[e], 
                    h = f in g.request, h && (h = c(b[f]) && "equals" in b[f] && O(b[f]) ? b[f].equals(g.request[f]) : b[f] === g.request[f]);
                    if (h) return g.results;
                }
            }
        }, this.store = function(b, c) {
            a.push({
                request: b,
                keys: k(b),
                results: c
            });
        };
    }
    function z() {
        var a = [], b = this;
        b.empty = function() {
            return !a.length;
        }, b.add = function(b) {
            a.push(b);
        }, b.get = function() {
            return a.length ? a[0] : !1;
        }, b.ack = function() {
            a.shift();
        };
    }
    function A() {
        function b(a) {
            return {
                id: a.id,
                name: a.name,
                object: a.obj,
                tag: a.tag,
                data: a.data
            };
        }
        function c(a) {
            O(a.setMap) && a.setMap(null), O(a.remove) && a.remove(), O(a.free) && a.free(), 
            a = null;
        }
        var d = {}, e = {}, g = this;
        g.add = function(a, b, c, f) {
            var i = a.td || {}, j = h(i.id);
            return d[b] || (d[b] = []), j in e && g.clearById(j), e[j] = {
                obj: c,
                sub: f,
                name: b,
                id: j,
                tag: i.tag,
                data: i.data
            }, d[b].push(j), j;
        }, g.getById = function(a, c, d) {
            var f = !1;
            return a in e && (f = c ? e[a].sub : d ? b(e[a]) : e[a].obj), f;
        }, g.get = function(a, c, f, g) {
            var h, i, j = q(f);
            if (!d[a] || !d[a].length) return null;
            for (h = d[a].length; h; ) if (h--, i = d[a][c ? h : d[a].length - h - 1], i && e[i]) {
                if (j && !j(e[i].tag)) continue;
                return g ? b(e[i]) : e[i].obj;
            }
            return null;
        }, g.all = function(a, c, g) {
            var h = [], i = q(c), j = function(a) {
                var c, f;
                for (c = 0; c < d[a].length; c++) if (f = d[a][c], f && e[f]) {
                    if (i && !i(e[f].tag)) continue;
                    h.push(g ? b(e[f]) : e[f].obj);
                }
            };
            if (a in d) j(a); else if (f(a)) for (a in d) j(a);
            return h;
        }, g.rm = function(a, b, c) {
            var f, h;
            if (!d[a]) return !1;
            if (b) if (c) for (f = d[a].length - 1; f >= 0 && (h = d[a][f], !b(e[h].tag)); f--) ; else for (f = 0; f < d[a].length && (h = d[a][f], 
            !b(e[h].tag)); f++) ; else f = c ? d[a].length - 1 : 0;
            return f in d[a] ? g.clearById(d[a][f], f) : !1;
        }, g.clearById = function(a, b) {
            if (a in e) {
                var g, h = e[a].name;
                for (g = 0; f(b) && g < d[h].length; g++) a === d[h][g] && (b = g);
                return c(e[a].obj), e[a].sub && c(e[a].sub), delete e[a], d[h].splice(b, 1), !0;
            }
            return !1;
        }, g.objGetById = function(a) {
            var b, c;
            if (d.clusterer) for (c in d.clusterer) if ((b = e[d.clusterer[c]].obj.getById(a)) !== !1) return b;
            return !1;
        }, g.objClearById = function(a) {
            var b;
            if (d.clusterer) for (b in d.clusterer) if (e[d.clusterer[b]].obj.clearById(a)) return !0;
            return null;
        }, g.clear = function(a, b, c, e) {
            var f, h, i, j = q(e);
            if (a && a.length) a = p(a); else {
                a = [];
                for (f in d) a.push(f);
            }
            for (h = 0; h < a.length; h++) if (i = a[h], b) g.rm(i, j, !0); else if (c) g.rm(i, j, !1); else for (;g.rm(i, j, !1); ) ;
        }, g.objClear = function(b, c, f, g) {
            var h;
            if (d.clusterer && (a.inArray("marker", b) >= 0 || !b.length)) for (h in d.clusterer) e[d.clusterer[h]].obj.clear(c, f, g);
        };
    }
    function B(b, c, e) {
        function f(a) {
            var b = {};
            return b[a] = {}, b;
        }
        function g() {
            var a;
            for (a in e) if (e.hasOwnProperty(a) && !i.hasOwnProperty(a)) return a;
        }
        var h, i = {}, j = this, k = {
            latLng: {
                map: !1,
                marker: !1,
                infowindow: !1,
                circle: !1,
                overlay: !1,
                getlatlng: !1,
                getmaxzoom: !1,
                getelevation: !1,
                streetviewpanorama: !1,
                getaddress: !0
            },
            geoloc: {
                getgeoloc: !0
            }
        };
        d(e) && (e = f(e)), j.run = function() {
            for (var d, f; d = g(); ) {
                if (O(b[d])) return h = d, f = a.extend(!0, {}, L[d] || {}, e[d].options || {}), 
                void (d in k.latLng ? e[d].values ? u(e[d].values, b, b[d], {
                    td: e[d],
                    opts: f,
                    session: i
                }) : t(b, b[d], k.latLng[d], {
                    td: e[d],
                    opts: f,
                    session: i
                }) : d in k.geoloc ? v(b, b[d], {
                    td: e[d],
                    opts: f,
                    session: i
                }) : b[d].apply(b, [ {
                    td: e[d],
                    opts: f,
                    session: i
                } ]));
                i[d] = null;
            }
            c.apply(b, [ e, i ]);
        }, j.ack = function(a) {
            i[h] = a, j.run.apply(j, []);
        };
    }
    function C() {
        return Q.ds || (Q.ds = new M.DirectionsService()), Q.ds;
    }
    function D() {
        return Q.dms || (Q.dms = new M.DistanceMatrixService()), Q.dms;
    }
    function E() {
        return Q.mzs || (Q.mzs = new M.MaxZoomService()), Q.mzs;
    }
    function F() {
        return Q.es || (Q.es = new M.ElevationService()), Q.es;
    }
    function G(a) {
        function b() {
            var a = this;
            return a.onAdd = function() {}, a.onRemove = function() {}, a.draw = function() {}, 
            L.classes.OverlayView.apply(a, []);
        }
        b.prototype = L.classes.OverlayView.prototype;
        var c = new b();
        return c.setMap(a), c;
    }
    function H(b, d, e) {
        function f(a) {
            H[a] || (delete I[a].options.map, H[a] = new L.classes.Marker(I[a].options), j(b, {
                td: I[a]
            }, H[a], I[a].id));
        }
        function g() {
            return (s = K.getProjection()) ? (z = !0, C.push(M.event.addListener(d, "zoom_changed", n)), 
            C.push(M.event.addListener(d, "bounds_changed", n)), void p()) : void setTimeout(function() {
                g.apply(B, []);
            }, 25);
        }
        function i(a) {
            c(D[a]) ? (O(D[a].obj.setMap) && D[a].obj.setMap(null), O(D[a].obj.remove) && D[a].obj.remove(), 
            O(D[a].shadow.remove) && D[a].obj.remove(), O(D[a].shadow.setMap) && D[a].shadow.setMap(null), 
            delete D[a].obj, delete D[a].shadow) : H[a] && H[a].setMap(null), delete D[a];
        }
        function k() {
            var a, b, c, d, e, f, g, h, i = Math.cos, j = Math.sin, k = arguments;
            return k[0] instanceof M.LatLng ? (a = k[0].lat(), c = k[0].lng(), k[1] instanceof M.LatLng ? (b = k[1].lat(), 
            d = k[1].lng()) : (b = k[1], d = k[2])) : (a = k[0], c = k[1], k[2] instanceof M.LatLng ? (b = k[2].lat(), 
            d = k[2].lng()) : (b = k[2], d = k[3])), e = Math.PI * a / 180, f = Math.PI * c / 180, 
            g = Math.PI * b / 180, h = Math.PI * d / 180, 6371e3 * Math.acos(Math.min(i(e) * i(g) * i(f) * i(h) + i(e) * j(f) * i(g) * j(h) + j(e) * j(g), 1));
        }
        function l() {
            var a = k(d.getCenter(), d.getBounds().getNorthEast()), b = new M.Circle({
                center: d.getCenter(),
                radius: 1.25 * a
            });
            return b.getBounds();
        }
        function m() {
            var a, b = {};
            for (a in D) b[a] = !0;
            return b;
        }
        function n() {
            clearTimeout(r), r = setTimeout(p, 25);
        }
        function o(a) {
            var b = s.fromLatLngToDivPixel(a), c = s.fromDivPixelToLatLng(new M.Point(b.x + e.radius, b.y - e.radius)), d = s.fromDivPixelToLatLng(new M.Point(b.x - e.radius, b.y + e.radius));
            return new M.LatLngBounds(d, c);
        }
        function p() {
            if (!w && !y && z) {
                var b, c, f, g, h, j, k, n, p, q, r, s = !1, v = [], B = {}, C = d.getZoom(), E = "maxZoom" in e && C > e.maxZoom, F = m();
                for (x = !1, C > 3 && (h = l(), s = h.getSouthWest().lng() < h.getNorthEast().lng()), 
                b = 0; b < I.length; b++) !I[b] || s && !h.contains(I[b].options.position) || t && !t(J[b]) || v.push(b);
                for (;;) {
                    for (b = 0; B[b] && b < v.length; ) b++;
                    if (b === v.length) break;
                    if (g = [], A && !E) {
                        r = 10;
                        do for (n = g, g = [], r--, k = n.length ? h.getCenter() : I[v[b]].options.position, 
                        h = o(k), c = b; c < v.length; c++) B[c] || h.contains(I[v[c]].options.position) && g.push(c); while (n.length < g.length && g.length > 1 && r);
                    } else for (c = b; c < v.length; c++) if (!B[c]) {
                        g.push(c);
                        break;
                    }
                    for (j = {
                        indexes: [],
                        ref: []
                    }, p = q = 0, f = 0; f < g.length; f++) B[g[f]] = !0, j.indexes.push(v[g[f]]), j.ref.push(v[g[f]]), 
                    p += I[v[g[f]]].options.position.lat(), q += I[v[g[f]]].options.position.lng();
                    p /= g.length, q /= g.length, j.latLng = new M.LatLng(p, q), j.ref = j.ref.join("-"), 
                    j.ref in F ? delete F[j.ref] : (1 === g.length && (D[j.ref] = !0), u(j));
                }
                a.each(F, function(a) {
                    i(a);
                }), y = !1;
            }
        }
        var r, s, t, u, v, w = !1, x = !1, y = !1, z = !1, A = !0, B = this, C = [], D = {}, E = {}, F = {}, H = [], I = [], J = [], K = G(d, e.radius);
        g(), B.getById = function(a) {
            return a in E ? (f(E[a]), H[E[a]]) : !1;
        }, B.rm = function(a) {
            var b = E[a];
            H[b] && H[b].setMap(null), delete H[b], H[b] = !1, delete I[b], I[b] = !1, delete J[b], 
            J[b] = !1, delete E[a], delete F[b], x = !0;
        }, B.clearById = function(a) {
            return a in E ? (B.rm(a), !0) : void 0;
        }, B.clear = function(a, b, c) {
            var d, e, f, g, h, i = [], j = q(c);
            for (a ? (d = I.length - 1, e = -1, f = -1) : (d = 0, e = I.length, f = 1), g = d; g !== e && (!I[g] || j && !j(I[g].tag) || (i.push(F[g]), 
            !b && !a)); g += f) ;
            for (h = 0; h < i.length; h++) B.rm(i[h]);
        }, B.add = function(a, b) {
            a.id = h(a.id), B.clearById(a.id), E[a.id] = H.length, F[H.length] = a.id, H.push(null), 
            I.push(a), J.push(b), x = !0;
        }, B.addMarker = function(a, c) {
            c = c || {}, c.id = h(c.id), B.clearById(c.id), c.options || (c.options = {}), c.options.position = a.getPosition(), 
            j(b, {
                td: c
            }, a, c.id), E[c.id] = H.length, F[H.length] = c.id, H.push(a), I.push(c), J.push(c.data || {}), 
            x = !0;
        }, B.td = function(a) {
            return I[a];
        }, B.value = function(a) {
            return J[a];
        }, B.marker = function(a) {
            return a in H ? (f(a), H[a]) : !1;
        }, B.markerIsSet = function(a) {
            return Boolean(H[a]);
        }, B.setMarker = function(a, b) {
            H[a] = b;
        }, B.store = function(a, b, c) {
            D[a.ref] = {
                obj: b,
                shadow: c
            };
        }, B.free = function() {
            var b;
            for (b = 0; b < C.length; b++) M.event.removeListener(C[b]);
            C = [], a.each(D, function(a) {
                i(a);
            }), D = {}, a.each(I, function(a) {
                I[a] = null;
            }), I = [], a.each(H, function(a) {
                H[a] && (H[a].setMap(null), delete H[a]);
            }), H = [], a.each(J, function(a) {
                delete J[a];
            }), J = [], E = {}, F = {};
        }, B.filter = function(a) {
            t = a, p();
        }, B.enable = function(a) {
            A !== a && (A = a, p());
        }, B.display = function(a) {
            u = a;
        }, B.error = function(a) {
            v = a;
        }, B.beginUpdate = function() {
            w = !0;
        }, B.endUpdate = function() {
            w = !1, x && p();
        }, B.autofit = function(a) {
            var b;
            for (b = 0; b < I.length; b++) I[b] && a.extend(I[b].options.position);
        };
    }
    function I(a, b) {
        var c = this;
        c.id = function() {
            return a;
        }, c.filter = function(a) {
            b.filter(a);
        }, c.enable = function() {
            b.enable(!0);
        }, c.disable = function() {
            b.enable(!1);
        }, c.add = function(a, c, d) {
            d || b.beginUpdate(), b.addMarker(a, c), d || b.endUpdate();
        }, c.getById = function(a) {
            return b.getById(a);
        }, c.clearById = function(a, c) {
            var d;
            return c || b.beginUpdate(), d = b.clearById(a), c || b.endUpdate(), d;
        }, c.clear = function(a, c, d, e) {
            e || b.beginUpdate(), b.clear(a, c, d), e || b.endUpdate();
        };
    }
    function J(b, c, d, e) {
        var f = this, g = [];
        L.classes.OverlayView.call(f), f.setMap(b), f.onAdd = function() {
            var b = f.getPanes();
            c.pane in b && a(b[c.pane]).append(e), a.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(b, c) {
                g.push(M.event.addDomListener(e[0], c, function(b) {
                    a.Event(b).stopPropagation(), M.event.trigger(f, c, [ b ]), f.draw();
                }));
            }), g.push(M.event.addDomListener(e[0], "contextmenu", function(b) {
                a.Event(b).stopPropagation(), M.event.trigger(f, "rightclick", [ b ]), f.draw();
            }));
        }, f.getPosition = function() {
            return d;
        }, f.setPosition = function(a) {
            d = a, f.draw();
        }, f.draw = function() {
            var a = f.getProjection().fromLatLngToDivPixel(d);
            e.css("left", a.x + c.offset.x + "px").css("top", a.y + c.offset.y + "px");
        }, f.onRemove = function() {
            var a;
            for (a = 0; a < g.length; a++) M.event.removeListener(g[a]);
            e.remove();
        }, f.hide = function() {
            e.hide();
        }, f.show = function() {
            e.show();
        }, f.toggle = function() {
            e && (e.is(":visible") ? f.show() : f.hide());
        }, f.toggleDOM = function() {
            f.setMap(f.getMap() ? null : b);
        }, f.getDOMElement = function() {
            return e[0];
        };
    }
    function K(e) {
        function g() {
            !v && (v = x.get()) && v.run();
        }
        function k() {
            v = null, x.ack(), g.call(w);
        }
        function l(a) {
            var b, c = a.td.callback;
            c && (b = Array.prototype.slice.call(arguments, 1), O(c) ? c.apply(e, b) : P(c) && O(c[1]) && c[1].apply(c[0], b));
        }
        function o(a, b, c) {
            c && j(e, a, b, c), l(a, b), v.ack(b);
        }
        function q(b, c) {
            c = c || {};
            var d = c.td && c.td.options ? c.td.options : 0;
            G ? d && (d.center && (d.center = r(d.center)), G.setOptions(d)) : (d = c.opts || a.extend(!0, {}, L.map, d || {}), 
            d.center = b || r(d.center), G = new L.classes.Map(e.get(0), d));
        }
        function t(c) {
            var d, f, g = new H(e, G, c), h = {}, i = {}, k = [], l = /^[0-9]+$/;
            for (f in c) l.test(f) ? (k.push(1 * f), i[f] = c[f], i[f].width = i[f].width || 0, 
            i[f].height = i[f].height || 0) : h[f] = c[f];
            return k.sort(function(a, b) {
                return a > b;
            }), d = h.calculator ? function(b) {
                var c = [];
                return a.each(b, function(a, b) {
                    c.push(g.value(b));
                }), h.calculator.apply(e, [ c ]);
            } : function(a) {
                return a.length;
            }, g.error(function() {
                n.apply(w, arguments);
            }), g.display(function(f) {
                var l, m, n, o, p, q, s = d(f.indexes);
                if (c.force || s > 1) for (l = 0; l < k.length; l++) k[l] <= s && (m = i[k[l]]);
                m ? (p = m.offset || [ -m.width / 2, -m.height / 2 ], n = a.extend({}, h), n.options = a.extend({
                    pane: "overlayLayer",
                    content: m.content ? m.content.replace("CLUSTER_COUNT", s) : "",
                    offset: {
                        x: ("x" in p ? p.x : p[0]) || 0,
                        y: ("y" in p ? p.y : p[1]) || 0
                    }
                }, h.options || {}), o = w.overlay({
                    td: n,
                    opts: n.options,
                    latLng: r(f)
                }, !0), n.options.pane = "floatShadow", n.options.content = a(document.createElement("div")).width(m.width + "px").height(m.height + "px").css({
                    cursor: "pointer"
                }), q = w.overlay({
                    td: n,
                    opts: n.options,
                    latLng: r(f)
                }, !0), h.data = {
                    latLng: r(f),
                    markers: []
                }, a.each(f.indexes, function(a, b) {
                    h.data.markers.push(g.value(b)), g.markerIsSet(b) && g.marker(b).setMap(null);
                }), j(e, {
                    td: h
                }, q, b, {
                    main: o,
                    shadow: q
                }), g.store(f, o, q)) : a.each(f.indexes, function(a, b) {
                    g.marker(b).setMap(G);
                });
            }), g;
        }
        function u(b, c, d) {
            var f = [], g = "values" in b.td;
            return g || (b.td.values = [ {
                options: b.opts
            } ]), b.td.values.length ? (q(), a.each(b.td.values, function(a, g) {
                var h, i, k, l, n = m(b, g);
                if (n.options[d]) if (n.options[d][0][0] && P(n.options[d][0][0])) for (i = 0; i < n.options[d].length; i++) for (k = 0; k < n.options[d][i].length; k++) n.options[d][i][k] = r(n.options[d][i][k]); else for (i = 0; i < n.options[d].length; i++) n.options[d][i] = r(n.options[d][i]);
                n.options.map = G, l = new M[c](n.options), f.push(l), h = y.add({
                    td: n
                }, c.toLowerCase(), l), j(e, {
                    td: n
                }, l, h);
            }), void o(b, g ? f : f[0])) : void o(b, !1);
        }
        var v, w = this, x = new z(), y = new A(), G = null;
        w._plan = function(a) {
            var b;
            for (b = 0; b < a.length; b++) x.add(new B(w, k, a[b]));
            g();
        }, w.map = function(a) {
            q(a.latLng, a), j(e, a, G), o(a, G);
        }, w.destroy = function(a) {
            y.clear(), e.empty(), G && (G = null), o(a, !0);
        }, w.overlay = function(b, c) {
            var d = [], f = "values" in b.td;
            return f || (b.td.values = [ {
                latLng: b.latLng,
                options: b.opts
            } ]), b.td.values.length ? (J.__initialised || (J.prototype = new L.classes.OverlayView(), 
            J.__initialised = !0), a.each(b.td.values, function(f, g) {
                var h, i, k = m(b, g), l = a(document.createElement("div")).css({
                    border: "none",
                    borderWidth: 0,
                    position: "absolute"
                });
                l.append(k.options.content), i = new J(G, k.options, r(k) || r(g), l), d.push(i), 
                l = null, c || (h = y.add(b, "overlay", i), j(e, {
                    td: k
                }, i, h));
            }), c ? d[0] : void o(b, f ? d : d[0])) : void o(b, !1);
        }, w.marker = function(b) {
            var c, d, f, g = "values" in b.td, i = !G;
            return g || (b.opts.position = b.latLng || r(b.opts.position), b.td.values = [ {
                options: b.opts
            } ]), b.td.values.length ? (i && q(), b.td.cluster && !G.getBounds() ? void M.event.addListenerOnce(G, "bounds_changed", function() {
                w.marker.apply(w, [ b ]);
            }) : void (b.td.cluster ? (b.td.cluster instanceof I ? (d = b.td.cluster, f = y.getById(d.id(), !0)) : (f = t(b.td.cluster), 
            d = new I(h(b.td.id, !0), f), y.add(b, "clusterer", d, f)), f.beginUpdate(), a.each(b.td.values, function(a, c) {
                var d = m(b, c);
                d.options.position = r(d.options.position ? d.options.position : c), d.options.position && (d.options.map = G, 
                i && (G.setCenter(d.options.position), i = !1), f.add(d, c));
            }), f.endUpdate(), o(b, d)) : (c = [], a.each(b.td.values, function(a, d) {
                var f, g, h = m(b, d);
                h.options.position = r(h.options.position ? h.options.position : d), h.options.position && (h.options.map = G, 
                i && (G.setCenter(h.options.position), i = !1), g = new L.classes.Marker(h.options), 
                c.push(g), f = y.add({
                    td: h
                }, "marker", g), j(e, {
                    td: h
                }, g, f));
            }), o(b, g ? c : c[0])))) : void o(b, !1);
        }, w.getroute = function(a) {
            a.opts.origin = r(a.opts.origin, !0), a.opts.destination = r(a.opts.destination, !0), 
            C().route(a.opts, function(b, c) {
                l(a, c === M.DirectionsStatus.OK ? b : !1, c), v.ack();
            });
        }, w.getdistance = function(a) {
            var b;
            for (a.opts.origins = p(a.opts.origins), b = 0; b < a.opts.origins.length; b++) a.opts.origins[b] = r(a.opts.origins[b], !0);
            for (a.opts.destinations = p(a.opts.destinations), b = 0; b < a.opts.destinations.length; b++) a.opts.destinations[b] = r(a.opts.destinations[b], !0);
            D().getDistanceMatrix(a.opts, function(b, c) {
                l(a, c === M.DistanceMatrixStatus.OK ? b : !1, c), v.ack();
            });
        }, w.infowindow = function(c) {
            var d = [], g = "values" in c.td;
            g || (c.latLng && (c.opts.position = c.latLng), c.td.values = [ {
                options: c.opts
            } ]), a.each(c.td.values, function(a, h) {
                var i, k, l = m(c, h);
                l.options.position = r(l.options.position ? l.options.position : h.latLng), G || q(l.options.position), 
                k = new L.classes.InfoWindow(l.options), k && (f(l.open) || l.open) && (g ? k.open(G, l.anchor || b) : k.open(G, l.anchor || (c.latLng ? b : c.session.marker ? c.session.marker : b))), 
                d.push(k), i = y.add({
                    td: l
                }, "infowindow", k), j(e, {
                    td: l
                }, k, i);
            }), o(c, g ? d : d[0]);
        }, w.circle = function(b) {
            var c = [], d = "values" in b.td;
            return d || (b.opts.center = b.latLng || r(b.opts.center), b.td.values = [ {
                options: b.opts
            } ]), b.td.values.length ? (a.each(b.td.values, function(a, d) {
                var f, g, h = m(b, d);
                h.options.center = r(h.options.center ? h.options.center : d), G || q(h.options.center), 
                h.options.map = G, g = new L.classes.Circle(h.options), c.push(g), f = y.add({
                    td: h
                }, "circle", g), j(e, {
                    td: h
                }, g, f);
            }), void o(b, d ? c : c[0])) : void o(b, !1);
        }, w.getaddress = function(a) {
            l(a, a.results, a.status), v.ack();
        }, w.getlatlng = function(a) {
            l(a, a.results, a.status), v.ack();
        }, w.getmaxzoom = function(a) {
            E().getMaxZoomAtLatLng(a.latLng, function(b) {
                l(a, b.status === M.MaxZoomStatus.OK ? b.zoom : !1, status), v.ack();
            });
        }, w.getelevation = function(a) {
            var b, c = [], d = function(b, c) {
                l(a, c === M.ElevationStatus.OK ? b : !1, c), v.ack();
            };
            if (a.latLng) c.push(a.latLng); else for (c = p(a.td.locations || []), b = 0; b < c.length; b++) c[b] = r(c[b]);
            if (c.length) F().getElevationForLocations({
                locations: c
            }, d); else {
                if (a.td.path && a.td.path.length) for (b = 0; b < a.td.path.length; b++) c.push(r(a.td.path[b]));
                c.length ? F().getElevationAlongPath({
                    path: c,
                    samples: a.td.samples
                }, d) : v.ack();
            }
        }, w.defaults = function(b) {
            a.each(b.td, function(b, d) {
                L[b] = c(L[b]) ? a.extend({}, L[b], d) : d;
            }), v.ack(!0);
        }, w.rectangle = function(b) {
            var c = [], d = "values" in b.td;
            return d || (b.td.values = [ {
                options: b.opts
            } ]), b.td.values.length ? (a.each(b.td.values, function(a, d) {
                var f, g, h = m(b, d);
                h.options.bounds = s(h.options.bounds ? h.options.bounds : d), G || q(h.options.bounds.getCenter()), 
                h.options.map = G, g = new L.classes.Rectangle(h.options), c.push(g), f = y.add({
                    td: h
                }, "rectangle", g), j(e, {
                    td: h
                }, g, f);
            }), void o(b, d ? c : c[0])) : void o(b, !1);
        }, w.polyline = function(a) {
            u(a, "Polyline", "path");
        }, w.polygon = function(a) {
            u(a, "Polygon", "paths");
        }, w.trafficlayer = function(a) {
            q();
            var b = y.get("trafficlayer");
            b || (b = new L.classes.TrafficLayer(), b.setMap(G), y.add(a, "trafficlayer", b)), 
            o(a, b);
        }, w.bicyclinglayer = function(a) {
            q();
            var b = y.get("bicyclinglayer");
            b || (b = new L.classes.BicyclingLayer(), b.setMap(G), y.add(a, "bicyclinglayer", b)), 
            o(a, b);
        }, w.groundoverlay = function(a) {
            a.opts.bounds = s(a.opts.bounds), a.opts.bounds && q(a.opts.bounds.getCenter());
            var b, c = new L.classes.GroundOverlay(a.opts.url, a.opts.bounds, a.opts.opts);
            c.setMap(G), b = y.add(a, "groundoverlay", c), o(a, c, b);
        }, w.streetviewpanorama = function(b) {
            b.opts.opts || (b.opts.opts = {}), b.latLng ? b.opts.opts.position = b.latLng : b.opts.opts.position && (b.opts.opts.position = r(b.opts.opts.position)), 
            b.td.divId ? b.opts.container = document.getElementById(b.td.divId) : b.opts.container && (b.opts.container = a(b.opts.container).get(0));
            var c, d = new L.classes.StreetViewPanorama(b.opts.container, b.opts.opts);
            d && G.setStreetView(d), c = y.add(b, "streetviewpanorama", d), o(b, d, c);
        }, w.kmllayer = function(b) {
            var c = [], d = "values" in b.td;
            return d || (b.td.values = [ {
                options: b.opts
            } ]), b.td.values.length ? (a.each(b.td.values, function(a, d) {
                var f, g, h, k = m(b, d);
                G || q(), h = k.options, k.options.opts && (h = k.options.opts, k.options.url && (h.url = k.options.url)), 
                h.map = G, g = i("3.10") ? new L.classes.KmlLayer(h) : new L.classes.KmlLayer(h.url, h), 
                c.push(g), f = y.add({
                    td: k
                }, "kmllayer", g), j(e, {
                    td: k
                }, g, f);
            }), void o(b, d ? c : c[0])) : void o(b, !1);
        }, w.panel = function(b) {
            q();
            var c, d, g = 0, h = 0, i = a(document.createElement("div"));
            i.css({
                position: "absolute",
                zIndex: 1e3,
                visibility: "hidden"
            }), b.opts.content && (d = a(b.opts.content), i.append(d), e.first().prepend(i), 
            f(b.opts.left) ? f(b.opts.right) ? b.opts.center && (g = (e.width() - d.width()) / 2) : g = e.width() - d.width() - b.opts.right : g = b.opts.left, 
            f(b.opts.top) ? f(b.opts.bottom) ? b.opts.middle && (h = (e.height() - d.height()) / 2) : h = e.height() - d.height() - b.opts.bottom : h = b.opts.top, 
            i.css({
                top: h,
                left: g,
                visibility: "visible"
            })), c = y.add(b, "panel", i), o(b, i, c), i = null;
        }, w.directionsrenderer = function(b) {
            b.opts.map = G;
            var c, d = new M.DirectionsRenderer(b.opts);
            b.td.divId ? d.setPanel(document.getElementById(b.td.divId)) : b.td.container && d.setPanel(a(b.td.container).get(0)), 
            c = y.add(b, "directionsrenderer", d), o(b, d, c);
        }, w.getgeoloc = function(a) {
            o(a, a.latLng);
        }, w.styledmaptype = function(a) {
            q();
            var b = new L.classes.StyledMapType(a.td.styles, a.opts);
            G.mapTypes.set(a.td.id, b), o(a, b);
        }, w.imagemaptype = function(a) {
            q();
            var b = new L.classes.ImageMapType(a.opts);
            G.mapTypes.set(a.td.id, b), o(a, b);
        }, w.autofit = function(b) {
            var c = new M.LatLngBounds();
            a.each(y.all(), function(a, b) {
                b.getPosition ? c.extend(b.getPosition()) : b.getBounds ? (c.extend(b.getBounds().getNorthEast()), 
                c.extend(b.getBounds().getSouthWest())) : b.getPaths ? b.getPaths().forEach(function(a) {
                    a.forEach(function(a) {
                        c.extend(a);
                    });
                }) : b.getPath ? b.getPath().forEach(function(a) {
                    c.extend(a);
                }) : b.getCenter ? c.extend(b.getCenter()) : "function" == typeof I && b instanceof I && (b = y.getById(b.id(), !0), 
                b && b.autofit(c));
            }), c.isEmpty() || G.getBounds() && G.getBounds().equals(c) || ("maxZoom" in b.td && M.event.addListenerOnce(G, "bounds_changed", function() {
                this.getZoom() > b.td.maxZoom && this.setZoom(b.td.maxZoom);
            }), G.fitBounds(c)), o(b, !0);
        }, w.clear = function(b) {
            if (d(b.td)) {
                if (y.clearById(b.td) || y.objClearById(b.td)) return void o(b, !0);
                b.td = {
                    name: b.td
                };
            }
            b.td.id ? a.each(p(b.td.id), function(a, b) {
                y.clearById(b) || y.objClearById(b);
            }) : (y.clear(p(b.td.name), b.td.last, b.td.first, b.td.tag), y.objClear(p(b.td.name), b.td.last, b.td.first, b.td.tag)), 
            o(b, !0);
        }, w.get = function(c, e, f) {
            var g, h, i = e ? c : c.td;
            return e || (f = i.full), d(i) ? (h = y.getById(i, !1, f) || y.objGetById(i), h === !1 && (g = i, 
            i = {})) : g = i.name, "map" === g && (h = G), h || (h = [], i.id ? (a.each(p(i.id), function(a, b) {
                h.push(y.getById(b, !1, f) || y.objGetById(b));
            }), P(i.id) || (h = h[0])) : (a.each(g ? p(g) : [ b ], function(b, c) {
                var d;
                i.first ? (d = y.get(c, !1, i.tag, f), d && h.push(d)) : i.all ? a.each(y.all(c, i.tag, f), function(a, b) {
                    h.push(b);
                }) : (d = y.get(c, !0, i.tag, f), d && h.push(d));
            }), i.all || P(g) || (h = h[0]))), h = P(h) || !i.all ? h : [ h ], e ? h : void o(c, h);
        }, w.exec = function(b) {
            a.each(p(b.td.func), function(c, d) {
                a.each(w.get(b.td, !0, b.td.hasOwnProperty("full") ? b.td.full : !0), function(a, b) {
                    d.call(e, b);
                });
            }), o(b, !0);
        }, w.trigger = function(b) {
            if (d(b.td)) M.event.trigger(G, b.td); else {
                var c = [ G, b.td.eventName ];
                b.td.var_args && a.each(b.td.var_args, function(a, b) {
                    c.push(b);
                }), M.event.trigger.apply(M.event, c);
            }
            l(b), v.ack();
        };
    }
    var L, M, N = 0, O = a.isFunction, P = a.isArray, Q = {}, R = new y();
    a.fn.gmap3 = function() {
        var b, c = [], d = !0, e = [];
        for (g(), b = 0; b < arguments.length; b++) arguments[b] && c.push(arguments[b]);
        return c.length || c.push("map"), a.each(this, function() {
            var b = a(this), f = b.data("gmap3");
            d = !1, f || (f = new K(b), b.data("gmap3", f)), 1 !== c.length || "get" !== c[0] && !w(c[0]) ? f._plan(c) : e.push("get" === c[0] ? f.get("map", !0) : f.get(c[0].get, !0, c[0].get.full));
        }), e.length ? 1 === e.length ? e[0] : e : this;
    };
}(jQuery), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function(a) {
    var b = window.Slick || {};
    b = function() {
        function b(b, d) {
            var e, f = this;
            f.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(b),
                appendDots: a(b),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, f.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, 
            f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, 
            f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, 
            f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, 
            f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, 
            f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), 
            f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", 
            f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", 
            f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), 
            f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), 
            f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), 
            f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), 
            f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), 
            f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
            f.registerBreakpoints(), f.init(!0);
        }
        var c = 0;
        return b;
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), 
        e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b);
        }), e.$slidesCache = e.$slides, e.reinit();
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed);
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {}, e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), 
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), 
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", 
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
            },
            complete: function() {
                c && c.call();
            }
        })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", 
        e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call();
        }, e.options.speed));
    }, b.prototype.getNavTarget = function() {
        var b = this, c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c;
    }, b.prototype.asNavFor = function(b) {
        var c = this, d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0);
        });
    }, b.prototype.applyTransition = function(a) {
        var b = this, c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, 
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }, b.prototype.autoPlayIterator = function() {
        var a = this, b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, 
        a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), 
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), 
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), 
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, b.prototype.buildDots = function() {
        var b, c, d = this;
        if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
            for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), 
            b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
            d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), 
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), 
        b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), 
        b.options.draggable === !0 && b.$list.addClass("draggable");
    }, b.prototype.buildRows = function() {
        var a, b, c, d, e, f, g, h = this;
        if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
            for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                var i = document.createElement("div");
                for (b = 0; b < h.options.rows; b++) {
                    var j = document.createElement("div");
                    for (c = 0; c < h.options.slidesPerRow; c++) {
                        var k = a * g + (b * h.options.slidesPerRow + c);
                        f.get(k) && j.appendChild(f.get(k));
                    }
                    i.appendChild(j);
                }
                d.appendChild(i);
            }
            h.$slider.empty().append(d), h.$slider.children().children().children().css({
                width: 100 / h.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var d, e, f, g = this, h = !1, i = g.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), 
        g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
            e = null;
            for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
            null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, 
            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), 
            b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, 
            "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), 
            b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, 
            g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), 
            g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [ g, h ]);
        }
    }, b.prototype.changeSlide = function(b, c) {
        var d, e, f, g = this, h = a(b.currentTarget);
        switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, 
        d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
          case "previous":
            e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
            break;

          case "next":
            e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
            break;

          case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
            g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
            break;

          default:
            return;
        }
    }, b.prototype.checkNavigable = function(a) {
        var b, c, d = this;
        if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1]; else for (var e in b) {
            if (a < b[e]) {
                a = c;
                break;
            }
            c = b[e];
        }
        return a;
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), 
        b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), 
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), 
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), 
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), 
        a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), 
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), 
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), 
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), 
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.cleanUpRows = function() {
        var a, b = this;
        b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), 
        b.$slider.empty().append(a));
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), 
        c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"));
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), 
        c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), 
        c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), 
        c.unslicked = !0, b || c.$slider.trigger("destroy", [ c ]);
    }, b.prototype.disableTransition = function(a) {
        var b = this, c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call();
        }, c.options.speed));
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }));
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), 
        b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
            }, 0);
        });
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide;
    }, b.prototype.getDotCount = function() {
        var a = this, b = 0, c = 0, d = 0;
        if (a.options.infinite === !0) for (;b < a.slideCount; ) ++d, b = c + a.options.slidesToScroll, 
        c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0) d = a.slideCount; else if (a.options.asNavFor) for (;b < a.slideCount; ) ++d, 
        b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1;
    }, b.prototype.getLeft = function(a) {
        var b, c, d, e = this, f = 0;
        return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, 
        f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, 
        f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, 
        f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, 
        f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, 
        f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, 
        e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, 
        e.options.variableWidth === !0 && (d = e.$slideTrack.children(".slick-slide").eq(e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? a : a + e.options.slidesToShow), 
        b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, 
        e.options.centerMode === !0 && (d = e.$slideTrack.children(".slick-slide").eq(e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? a : a + e.options.slidesToShow + 1), 
        b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, 
        b += (e.$list.width() - d.outerWidth()) / 2)), b;
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a];
    }, b.prototype.getNavigableIndexes = function() {
        var a, b = this, c = 0, d = 0, e = [];
        for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, 
        d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c; ) e.push(c), c = d + b.options.slidesToScroll, 
        d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
        return e;
    }, b.prototype.getSlick = function() {
        return this;
    }, b.prototype.getSlideCount = function() {
        var b, c, d, e = this;
        return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, 
        e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
            return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0;
        }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll;
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b);
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), 
        c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), 
        c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [ c ]), 
        c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, 
        c.autoPlay());
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            });
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
        b.activateADA();
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide));
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), 
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), 
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), 
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), 
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), 
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), 
        a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }));
    }, b.prototype.lazyLoad = function() {
        function b(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this), c = a(this).attr("data-lazy"), d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading");
                        }), g.$slider.trigger("lazyLoaded", [ g, b, c ]);
                    });
                }, d.onerror = function() {
                    b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    g.$slider.trigger("lazyLoadError", [ g, b, c ]);
                }, d.src = c;
            });
        }
        var c, d, e, f, g = this;
        g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), 
        f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), 
        f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, 
        f = Math.ceil(e + g.options.slidesToShow), g.options.fade === !0 && (e > 0 && e--, 
        f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), 
        g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), 
        b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), 
        b(d));
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        });
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition();
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0;
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [ b, a ]), b.animating = !1, b.setPosition(), 
        b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault();
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var c, d, e, f = this, g = a("img[data-lazy]", f.$slider);
        g.length ? (c = g.first(), d = c.attr("data-lazy"), e = document.createElement("img"), 
        e.onload = function() {
            c.attr("src", d).removeAttr("data-lazy").removeClass("slick-loading"), f.options.adaptiveHeight === !0 && f.setPosition(), 
            f.$slider.trigger("lazyLoaded", [ f, c, d ]), f.progressiveLazyLoad();
        }, e.onerror = function() {
            3 > b ? setTimeout(function() {
                f.progressiveLazyLoad(b + 1);
            }, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            f.$slider.trigger("lazyLoadError", [ f, c, d ]), f.progressiveLazyLoad());
        }, e.src = d) : f.$slider.trigger("allImagesLoaded", [ f ]);
    }, b.prototype.refresh = function(b) {
        var c, d, e = this;
        d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), 
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, 
        e.destroy(!0), a.extend(e, e.initials, {
            currentSlide: c
        }), e.init(), b || e.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !1);
    }, b.prototype.registerBreakpoints = function() {
        var b, c, d, e = this, f = e.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            e.respondTo = e.options.respondTo || "window";
            for (b in f) if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                for (;d >= 0; ) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), 
                d--;
                e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings;
            }
            e.breakpoints.sort(function(a, b) {
                return e.options.mobileFirst ? a - b : b - a;
            });
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, 
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), 
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), 
        b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), 
        b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), 
        b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), 
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), 
        b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [ b ]);
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
        }, 50));
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, 
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), 
        d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), 
        d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
    }, b.prototype.setCSS = function(a) {
        var b, c, d = this, e = {};
        d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", 
        c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, 
        d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", 
        d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", 
        d.$slideTrack.css(e)));
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), 
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), 
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), 
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }, b.prototype.setFade = function() {
        var b, c = this;
        c.$slides.each(function(d, e) {
            b = c.slideWidth * d * -1, a(e).css(c.options.rtl === !0 ? {
                position: "relative",
                right: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            } : {
                position: "relative",
                left: b,
                top: 0,
                zIndex: c.options.zIndex - 2,
                opacity: 0
            });
        }), c.$slides.eq(c.currentSlide).css({
            zIndex: c.options.zIndex - 1,
            opacity: 1
        });
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b);
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var b, c, d, e, f, g = this, h = !1;
        if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], 
        e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : "undefined" != typeof arguments[1] && (f = "single")), 
        "single" === f) g.options[d] = e; else if ("multiple" === f) a.each(d, function(a, b) {
            g.options[a] = b;
        }); else if ("responsive" === f) for (c in e) if ("array" !== a.type(g.options.responsive)) g.options.responsive = [ e[c] ]; else {
            for (b = g.options.responsive.length - 1; b >= 0; ) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), 
            b--;
            g.options.responsive.push(e[c]);
        }
        h && (g.unload(), g.reinit());
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), 
        a.$slider.trigger("setPosition", [ a ]);
    }, b.prototype.setProps = function() {
        var a = this, b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), 
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), 
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), 
        void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", 
        a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), 
        void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", 
        a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), 
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", 
        a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), 
        void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", 
        a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), 
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", 
        a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
    }, b.prototype.setSlideClasses = function(a) {
        var b, c, d, e, f = this;
        c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), 
        f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, 
        c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), 
        f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, 
        d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === f.options.lazyLoad && f.lazyLoad();
    }, b.prototype.setupInfinite = function() {
        var b, c, d, e = this;
        if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, 
        e.slideCount > e.options.slidesToShow)) {
            for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, 
            b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "");
            });
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a;
    }, b.prototype.selectHandler = function(b) {
        var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), 
        void c.asNavFor(e)) : void c.slideHandler(e);
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h, i = null, j = this;
        return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (b === !1 && j.asNavFor(a), 
        d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, 
        j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void (j.options.fade === !1 && (d = j.currentSlide, 
        c !== !0 ? j.animateSlide(g, function() {
            j.postSlide(d);
        }) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void (j.options.fade === !1 && (d = j.currentSlide, 
        c !== !0 ? j.animateSlide(g, function() {
            j.postSlide(d);
        }) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : d - j.slideCount : d, 
        j.animating = !0, j.$slider.trigger("beforeChange", [ j, j.currentSlide, e ]), f = j.currentSlide, 
        j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), 
        h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), 
        j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f), 
        j.fadeSlide(e, function() {
            j.postSlide(e);
        })) : j.postSlide(e), void j.animateHeight()) : void (c !== !0 ? j.animateSlide(i, function() {
            j.postSlide(e);
        }) : j.postSlide(e))));
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), 
        a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), 
        a.$slider.addClass("slick-loading");
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, 
        c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
    }, b.prototype.swipeEnd = function() {
        var a, b, c = this;
        if (c.dragging = !1, c.interrupted = !1, c.shouldClick = c.touchObject.swipeLength > 10 ? !1 : !0, 
        void 0 === c.touchObject.curX) return !1;
        if (c.touchObject.edgeHit === !0 && c.$slider.trigger("edge", [ c, c.swipeDirection() ]), 
        c.touchObject.swipeLength >= c.touchObject.minSwipe) {
            switch (b = c.swipeDirection()) {
              case "left":
              case "down":
                a = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(), 
                c.currentDirection = 0;
                break;

              case "right":
              case "up":
                a = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(), 
                c.currentDirection = 1;
            }
            "vertical" != b && (c.slideHandler(a), c.touchObject = {}, c.$slider.trigger("swipe", [ c, b ]));
        } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), 
        c.touchObject = {});
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, 
        b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), 
        a.data.action) {
          case "start":
            b.swipeStart(a);
            break;

          case "move":
            b.swipeMove(a);
            break;

          case "end":
            b.swipeEnd(a);
        }
    }, b.prototype.swipeMove = function(a) {
        var b, c, d, e, f, g = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !g.dragging || f && 1 !== f.length ? !1 : (b = g.getLeft(g.currentSlide), 
        g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, 
        g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), 
        g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), 
        c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), 
        e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), 
        g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), 
        d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, 
        g.touchObject.edgeHit = !0), g.swipeLeft = g.options.vertical === !1 ? b + d * e : b + d * (g.$list.height() / g.listWidth) * e, 
        g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? (g.swipeLeft = null, 
        !1) : void g.setCSS(g.swipeLeft)) : void 0);
    }, b.prototype.swipeStart = function(a) {
        var b, c = this;
        return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, 
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), 
        c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, 
        c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, 
        void (c.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), 
        a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), 
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [ b, a ]), b.destroy();
    }, b.prototype.updateArrows = function() {
        var a, b = this;
        a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (a.interrupted = document[a.hidden] ? !0 : !1);
    }, a.fn.slick = function() {
        var a, c, d = this, e = arguments[0], f = Array.prototype.slice.call(arguments, 1), g = d.length;
        for (a = 0; g > a; a++) if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), 
        "undefined" != typeof c) return c;
        return d;
    };
}), !function(a) {
    for (var b, c, d = {}, e = function() {}, f = "memory".split(","), g = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); b = f.pop(); ) a[b] = a[b] || d;
    for (;c = g.pop(); ) a[c] = a[c] || e;
}(this.console = this.console || {}), function() {
    CanvasRenderingContext2D.prototype.installPattern = function(a) {
        if ("undefined" != typeof this.isPatternInstalled) throw "Must un-install old line pattern before installing a new one.";
        this.isPatternInstalled = !0;
        var b = [ 0, 0 ], c = [], d = this.beginPath, e = this.lineTo, f = this.moveTo, g = this.stroke;
        this.uninstallPattern = function() {
            this.beginPath = d, this.lineTo = e, this.moveTo = f, this.stroke = g, this.uninstallPattern = void 0, 
            this.isPatternInstalled = void 0;
        }, this.beginPath = function() {
            c = [], d.call(this);
        }, this.moveTo = function(a, b) {
            c.push([ [ a, b ] ]), f.call(this, a, b);
        }, this.lineTo = function(a, b) {
            var d = c[c.length - 1];
            d.push([ a, b ]);
        }, this.stroke = function() {
            if (0 === c.length) return void g.call(this);
            for (var d = 0; d < c.length; d++) for (var h = c[d], i = h[0][0], j = h[0][1], k = 1; k < h.length; k++) {
                var l = h[k][0], m = h[k][1];
                this.save();
                var n = l - i, o = m - j, p = Math.sqrt(n * n + o * o), q = Math.atan2(o, n);
                this.translate(i, j), f.call(this, 0, 0), this.rotate(q);
                for (var r = b[0], s = 0; p > s; ) {
                    var t = a[r];
                    s += b[1] ? b[1] : t, s > p ? (b = [ r, s - p ], s = p) : b = [ (r + 1) % a.length, 0 ], 
                    r % 2 === 0 ? e.call(this, s, 0) : f.call(this, s, 0), r = (r + 1) % a.length;
                }
                this.restore(), i = l, j = m;
            }
            g.call(this), c = [];
        };
    }, CanvasRenderingContext2D.prototype.uninstallPattern = function() {
        throw "Must install a line pattern before uninstalling it.";
    };
}();

var DygraphOptions = function() {
    return function() {
        var a = function(a) {
            this.dygraph_ = a, this.yAxes_ = [], this.xAxis_ = {}, this.series_ = {}, this.global_ = this.dygraph_.attrs_, 
            this.user_ = this.dygraph_.user_attrs_ || {}, this.labels_ = [], this.highlightSeries_ = this.get("highlightSeriesOpts") || {}, 
            this.reparseSeries();
        };
        return a.AXIS_STRING_MAPPINGS_ = {
            y: 0,
            Y: 0,
            y1: 0,
            Y1: 0,
            y2: 1,
            Y2: 1
        }, a.axisToIndex_ = function(b) {
            if ("string" == typeof b) {
                if (a.AXIS_STRING_MAPPINGS_.hasOwnProperty(b)) return a.AXIS_STRING_MAPPINGS_[b];
                throw "Unknown axis : " + b;
            }
            if ("number" == typeof b) {
                if (0 === b || 1 === b) return b;
                throw "Dygraphs only supports two y-axes, indexed from 0-1.";
            }
            if (b) throw "Unknown axis : " + b;
            return 0;
        }, a.prototype.reparseSeries = function() {
            var b = this.get("labels");
            if (b) {
                this.labels_ = b.slice(1), this.yAxes_ = [ {
                    series: [],
                    options: {}
                } ], this.xAxis_ = {
                    options: {}
                }, this.series_ = {};
                var c = !this.user_.series;
                if (c) {
                    for (var d = 0, e = 0; e < this.labels_.length; e++) {
                        var f = this.labels_[e], g = this.user_[f] || {}, h = 0, i = g.axis;
                        "object" == typeof i && (h = ++d, this.yAxes_[h] = {
                            series: [ f ],
                            options: i
                        }), i || this.yAxes_[0].series.push(f), this.series_[f] = {
                            idx: e,
                            yAxis: h,
                            options: g
                        };
                    }
                    for (var e = 0; e < this.labels_.length; e++) {
                        var f = this.labels_[e], g = this.series_[f].options, i = g.axis;
                        if ("string" == typeof i) {
                            if (!this.series_.hasOwnProperty(i)) return void console.error("Series " + f + " wants to share a y-axis with series " + i + ", which does not define its own axis.");
                            var h = this.series_[i].yAxis;
                            this.series_[f].yAxis = h, this.yAxes_[h].series.push(f);
                        }
                    }
                } else for (var e = 0; e < this.labels_.length; e++) {
                    var f = this.labels_[e], g = this.user_.series[f] || {}, h = a.axisToIndex_(g.axis);
                    this.series_[f] = {
                        idx: e,
                        yAxis: h,
                        options: g
                    }, this.yAxes_[h] ? this.yAxes_[h].series.push(f) : this.yAxes_[h] = {
                        series: [ f ],
                        options: {}
                    };
                }
                var j = this.user_.axes || {};
                Dygraph.update(this.yAxes_[0].options, j.y || {}), this.yAxes_.length > 1 && Dygraph.update(this.yAxes_[1].options, j.y2 || {}), 
                Dygraph.update(this.xAxis_.options, j.x || {});
            }
        }, a.prototype.get = function(a) {
            var b = this.getGlobalUser_(a);
            return null !== b ? b : this.getGlobalDefault_(a);
        }, a.prototype.getGlobalUser_ = function(a) {
            return this.user_.hasOwnProperty(a) ? this.user_[a] : null;
        }, a.prototype.getGlobalDefault_ = function(a) {
            return this.global_.hasOwnProperty(a) ? this.global_[a] : Dygraph.DEFAULT_ATTRS.hasOwnProperty(a) ? Dygraph.DEFAULT_ATTRS[a] : null;
        }, a.prototype.getForAxis = function(a, b) {
            var c, d;
            if ("number" == typeof b) c = b, d = 0 === c ? "y" : "y2"; else {
                if ("y1" == b && (b = "y"), "y" == b) c = 0; else if ("y2" == b) c = 1; else {
                    if ("x" != b) throw "Unknown axis " + b;
                    c = -1;
                }
                d = b;
            }
            var e = -1 == c ? this.xAxis_ : this.yAxes_[c];
            if (e) {
                var f = e.options;
                if (f.hasOwnProperty(a)) return f[a];
            }
            if ("x" !== b || "logscale" !== a) {
                var g = this.getGlobalUser_(a);
                if (null !== g) return g;
            }
            var h = Dygraph.DEFAULT_ATTRS.axes[d];
            return h.hasOwnProperty(a) ? h[a] : this.getGlobalDefault_(a);
        }, a.prototype.getForSeries = function(a, b) {
            if (b === this.dygraph_.getHighlightSeries() && this.highlightSeries_.hasOwnProperty(a)) return this.highlightSeries_[a];
            if (!this.series_.hasOwnProperty(b)) throw "Unknown series: " + b;
            var c = this.series_[b], d = c.options;
            return d.hasOwnProperty(a) ? d[a] : this.getForAxis(a, c.yAxis);
        }, a.prototype.numAxes = function() {
            return this.yAxes_.length;
        }, a.prototype.axisForSeries = function(a) {
            return this.series_[a].yAxis;
        }, a.prototype.axisOptions = function(a) {
            return this.yAxes_[a].options;
        }, a.prototype.seriesForAxis = function(a) {
            return this.yAxes_[a].series;
        }, a.prototype.seriesNames = function() {
            return this.labels_;
        }, a;
    }();
}(), DygraphLayout = function() {
    var a = function(a) {
        this.dygraph_ = a, this.points = [], this.setNames = [], this.annotations = [], 
        this.yAxes_ = null, this.xTicks_ = null, this.yTicks_ = null;
    };
    return a.prototype.addDataset = function(a, b) {
        this.points.push(b), this.setNames.push(a);
    }, a.prototype.getPlotArea = function() {
        return this.area_;
    }, a.prototype.computePlotArea = function() {
        var a = {
            x: 0,
            y: 0
        };
        a.w = this.dygraph_.width_ - a.x - this.dygraph_.getOption("rightGap"), a.h = this.dygraph_.height_;
        var b = {
            chart_div: this.dygraph_.graphDiv,
            reserveSpaceLeft: function(b) {
                var c = {
                    x: a.x,
                    y: a.y,
                    w: b,
                    h: a.h
                };
                return a.x += b, a.w -= b, c;
            },
            reserveSpaceRight: function(b) {
                var c = {
                    x: a.x + a.w - b,
                    y: a.y,
                    w: b,
                    h: a.h
                };
                return a.w -= b, c;
            },
            reserveSpaceTop: function(b) {
                var c = {
                    x: a.x,
                    y: a.y,
                    w: a.w,
                    h: b
                };
                return a.y += b, a.h -= b, c;
            },
            reserveSpaceBottom: function(b) {
                var c = {
                    x: a.x,
                    y: a.y + a.h - b,
                    w: a.w,
                    h: b
                };
                return a.h -= b, c;
            },
            chartRect: function() {
                return {
                    x: a.x,
                    y: a.y,
                    w: a.w,
                    h: a.h
                };
            }
        };
        this.dygraph_.cascadeEvents_("layout", b), this.area_ = a;
    }, a.prototype.setAnnotations = function(a) {
        this.annotations = [];
        for (var b = this.dygraph_.getOption("xValueParser") || function(a) {
            return a;
        }, c = 0; c < a.length; c++) {
            var d = {};
            if (!a[c].xval && void 0 === a[c].x) return void console.error("Annotations must have an 'x' property");
            if (a[c].icon && (!a[c].hasOwnProperty("width") || !a[c].hasOwnProperty("height"))) return void console.error("Must set width and height when setting annotation.icon property");
            Dygraph.update(d, a[c]), d.xval || (d.xval = b(d.x)), this.annotations.push(d);
        }
    }, a.prototype.setXTicks = function(a) {
        this.xTicks_ = a;
    }, a.prototype.setYAxes = function(a) {
        this.yAxes_ = a;
    }, a.prototype.evaluate = function() {
        this._xAxis = {}, this._evaluateLimits(), this._evaluateLineCharts(), this._evaluateLineTicks(), 
        this._evaluateAnnotations();
    }, a.prototype._evaluateLimits = function() {
        var a = this.dygraph_.xAxisRange();
        this._xAxis.minval = a[0], this._xAxis.maxval = a[1];
        var b = a[1] - a[0];
        this._xAxis.scale = 0 !== b ? 1 / b : 1, this.dygraph_.getOptionForAxis("logscale", "x") && (this._xAxis.xlogrange = Dygraph.log10(this._xAxis.maxval) - Dygraph.log10(this._xAxis.minval), 
        this._xAxis.xlogscale = 0 !== this._xAxis.xlogrange ? 1 / this._xAxis.xlogrange : 1);
        for (var c = 0; c < this.yAxes_.length; c++) {
            var d = this.yAxes_[c];
            d.minyval = d.computedValueRange[0], d.maxyval = d.computedValueRange[1], d.yrange = d.maxyval - d.minyval, 
            d.yscale = 0 !== d.yrange ? 1 / d.yrange : 1, this.dygraph_.getOption("logscale") && (d.ylogrange = Dygraph.log10(d.maxyval) - Dygraph.log10(d.minyval), 
            d.ylogscale = 0 !== d.ylogrange ? 1 / d.ylogrange : 1, (!isFinite(d.ylogrange) || isNaN(d.ylogrange)) && console.error("axis " + c + " of graph at " + d.g + " can't be displayed in log scale for range [" + d.minyval + " - " + d.maxyval + "]"));
        }
    }, a.calcXNormal_ = function(a, b, c) {
        return c ? (Dygraph.log10(a) - Dygraph.log10(b.minval)) * b.xlogscale : (a - b.minval) * b.scale;
    }, a.calcYNormal_ = function(a, b, c) {
        if (c) {
            var d = 1 - (Dygraph.log10(b) - Dygraph.log10(a.minyval)) * a.ylogscale;
            return isFinite(d) ? d : 0 / 0;
        }
        return 1 - (b - a.minyval) * a.yscale;
    }, a.prototype._evaluateLineCharts = function() {
        for (var b = this.dygraph_.getOption("stackedGraph"), c = this.dygraph_.getOptionForAxis("logscale", "x"), d = 0; d < this.points.length; d++) {
            for (var e = this.points[d], f = this.setNames[d], g = this.dygraph_.getOption("connectSeparatedPoints", f), h = this.dygraph_.axisPropertiesForSeries(f), i = this.dygraph_.attributes_.getForSeries("logscale", f), j = 0; j < e.length; j++) {
                var k = e[j];
                k.x = a.calcXNormal_(k.xval, this._xAxis, c);
                var l = k.yval;
                b && (k.y_stacked = a.calcYNormal_(h, k.yval_stacked, i), null === l || isNaN(l) || (l = k.yval_stacked)), 
                null === l && (l = 0 / 0, g || (k.yval = 0 / 0)), k.y = a.calcYNormal_(h, l, i);
            }
            this.dygraph_.dataHandler_.onLineEvaluated(e, h, i);
        }
    }, a.prototype._evaluateLineTicks = function() {
        var a, b, c, d;
        for (this.xticks = [], a = 0; a < this.xTicks_.length; a++) b = this.xTicks_[a], 
        c = b.label, d = this.dygraph_.toPercentXCoord(b.v), d >= 0 && 1 > d && this.xticks.push([ d, c ]);
        for (this.yticks = [], a = 0; a < this.yAxes_.length; a++) for (var e = this.yAxes_[a], f = 0; f < e.ticks.length; f++) b = e.ticks[f], 
        c = b.label, d = this.dygraph_.toPercentYCoord(b.v, a), d > 0 && 1 >= d && this.yticks.push([ a, d, c ]);
    }, a.prototype._evaluateAnnotations = function() {
        var a, b = {};
        for (a = 0; a < this.annotations.length; a++) {
            var c = this.annotations[a];
            b[c.xval + "," + c.series] = c;
        }
        if (this.annotated_points = [], this.annotations && this.annotations.length) for (var d = 0; d < this.points.length; d++) {
            var e = this.points[d];
            for (a = 0; a < e.length; a++) {
                var f = e[a], g = f.xval + "," + f.name;
                g in b && (f.annotation = b[g], this.annotated_points.push(f));
            }
        }
    }, a.prototype.removeAllDatasets = function() {
        delete this.points, delete this.setNames, delete this.setPointsLengths, delete this.setPointsOffsets, 
        this.points = [], this.setNames = [], this.setPointsLengths = [], this.setPointsOffsets = [];
    }, a;
}(), DygraphCanvasRenderer = function() {
    var a = function(a, b, c, d) {
        if (this.dygraph_ = a, this.layout = d, this.element = b, this.elementContext = c, 
        this.height = a.height_, this.width = a.width_, !this.isIE && !Dygraph.isCanvasSupported(this.element)) throw "Canvas is not supported.";
        if (this.area = d.getPlotArea(), this.dygraph_.isUsingExcanvas_) this._createIEClipArea(); else if (!Dygraph.isAndroid()) {
            var e = this.dygraph_.canvas_ctx_;
            e.beginPath(), e.rect(this.area.x, this.area.y, this.area.w, this.area.h), e.clip(), 
            e = this.dygraph_.hidden_ctx_, e.beginPath(), e.rect(this.area.x, this.area.y, this.area.w, this.area.h), 
            e.clip();
        }
    };
    return a.prototype.clear = function() {
        var a;
        if (this.isIE) try {
            this.clearDelay && (this.clearDelay.cancel(), this.clearDelay = null), a = this.elementContext;
        } catch (b) {
            return;
        }
        a = this.elementContext, a.clearRect(0, 0, this.width, this.height);
    }, a.prototype.render = function() {
        this._updatePoints(), this._renderLineChart();
    }, a.prototype._createIEClipArea = function() {
        function a(a) {
            if (0 !== a.w && 0 !== a.h) {
                var d = document.createElement("div");
                d.className = b, d.style.backgroundColor = e, d.style.position = "absolute", d.style.left = a.x + "px", 
                d.style.top = a.y + "px", d.style.width = a.w + "px", d.style.height = a.h + "px", 
                c.appendChild(d);
            }
        }
        for (var b = "dygraph-clip-div", c = this.dygraph_.graphDiv, d = c.childNodes.length - 1; d >= 0; d--) c.childNodes[d].className == b && c.removeChild(c.childNodes[d]);
        for (var e = document.bgColor, f = this.dygraph_.graphDiv; f != document; ) {
            var g = f.currentStyle.backgroundColor;
            if (g && "transparent" != g) {
                e = g;
                break;
            }
            f = f.parentNode;
        }
        var h = this.area;
        a({
            x: 0,
            y: 0,
            w: h.x,
            h: this.height
        }), a({
            x: h.x,
            y: 0,
            w: this.width - h.x,
            h: h.y
        }), a({
            x: h.x + h.w,
            y: 0,
            w: this.width - h.x - h.w,
            h: this.height
        }), a({
            x: h.x,
            y: h.y + h.h,
            w: this.width - h.x,
            h: this.height - h.h - h.y
        });
    }, a._getIteratorPredicate = function(b) {
        return b ? a._predicateThatSkipsEmptyPoints : null;
    }, a._predicateThatSkipsEmptyPoints = function(a, b) {
        return null !== a[b].yval;
    }, a._drawStyledLine = function(b, c, d, e, f, g, h) {
        var i = b.dygraph, j = i.getBooleanOption("stepPlot", b.setName);
        Dygraph.isArrayLike(e) || (e = null);
        var k = i.getBooleanOption("drawGapEdgePoints", b.setName), l = b.points, m = b.setName, n = Dygraph.createIterator(l, 0, l.length, a._getIteratorPredicate(i.getBooleanOption("connectSeparatedPoints", m))), o = e && e.length >= 2, p = b.drawingContext;
        p.save(), o && p.installPattern(e);
        var q = a._drawSeries(b, n, d, h, f, k, j, c);
        a._drawPointsOnLine(b, q, g, c, h), o && p.uninstallPattern(), p.restore();
    }, a._drawSeries = function(a, b, c, d, e, f, g, h) {
        var i, j, k = null, l = null, m = null, n = [], o = !0, p = a.drawingContext;
        p.beginPath(), p.strokeStyle = h, p.lineWidth = c;
        for (var q = b.array_, r = b.end_, s = b.predicate_, t = b.start_; r > t; t++) {
            if (j = q[t], s) {
                for (;r > t && !s(q, t); ) t++;
                if (t == r) break;
                j = q[t];
            }
            if (null === j.canvasy || j.canvasy != j.canvasy) g && null !== k && (p.moveTo(k, l), 
            p.lineTo(j.canvasx, l)), k = l = null; else {
                if (i = !1, f || !k) {
                    b.nextIdx_ = t, b.next(), m = b.hasNext ? b.peek.canvasy : null;
                    var u = null === m || m != m;
                    i = !k && u, f && (!o && !k || b.hasNext && u) && (i = !0);
                }
                null !== k ? c && (g && (p.moveTo(k, l), p.lineTo(j.canvasx, l)), p.lineTo(j.canvasx, j.canvasy)) : p.moveTo(j.canvasx, j.canvasy), 
                (e || i) && n.push([ j.canvasx, j.canvasy, j.idx ]), k = j.canvasx, l = j.canvasy;
            }
            o = !1;
        }
        return p.stroke(), n;
    }, a._drawPointsOnLine = function(a, b, c, d, e) {
        for (var f = a.drawingContext, g = 0; g < b.length; g++) {
            var h = b[g];
            f.save(), c.call(a.dygraph, a.dygraph, a.setName, f, h[0], h[1], d, e, h[2]), f.restore();
        }
    }, a.prototype._updatePoints = function() {
        for (var a = this.layout.points, b = a.length; b--; ) for (var c = a[b], d = c.length; d--; ) {
            var e = c[d];
            e.canvasx = this.area.w * e.x + this.area.x, e.canvasy = this.area.h * e.y + this.area.y;
        }
    }, a.prototype._renderLineChart = function(a, b) {
        var c, d, e = b || this.elementContext, f = this.layout.points, g = this.layout.setNames;
        this.colors = this.dygraph_.colorsMap_;
        var h = this.dygraph_.getOption("plotter"), i = h;
        Dygraph.isArrayLike(i) || (i = [ i ]);
        var j = {};
        for (c = 0; c < g.length; c++) {
            d = g[c];
            var k = this.dygraph_.getOption("plotter", d);
            k != h && (j[d] = k);
        }
        for (c = 0; c < i.length; c++) for (var l = i[c], m = c == i.length - 1, n = 0; n < f.length; n++) if (d = g[n], 
        !a || d == a) {
            var o = f[n], p = l;
            if (d in j) {
                if (!m) continue;
                p = j[d];
            }
            var q = this.colors[d], r = this.dygraph_.getOption("strokeWidth", d);
            e.save(), e.strokeStyle = q, e.lineWidth = r, p({
                points: o,
                setName: d,
                drawingContext: e,
                color: q,
                strokeWidth: r,
                dygraph: this.dygraph_,
                axis: this.dygraph_.axisPropertiesForSeries(d),
                plotArea: this.area,
                seriesIndex: n,
                seriesCount: f.length,
                singleSeriesName: a,
                allSeriesPoints: f
            }), e.restore();
        }
    }, a._Plotters = {
        linePlotter: function(b) {
            a._linePlotter(b);
        },
        fillPlotter: function(b) {
            a._fillPlotter(b);
        },
        errorPlotter: function(b) {
            a._errorPlotter(b);
        }
    }, a._linePlotter = function(b) {
        var c = b.dygraph, d = b.setName, e = b.strokeWidth, f = c.getNumericOption("strokeBorderWidth", d), g = c.getOption("drawPointCallback", d) || Dygraph.Circles.DEFAULT, h = c.getOption("strokePattern", d), i = c.getBooleanOption("drawPoints", d), j = c.getNumericOption("pointSize", d);
        f && e && a._drawStyledLine(b, c.getOption("strokeBorderColor", d), e + 2 * f, h, i, g, j), 
        a._drawStyledLine(b, b.color, e, h, i, g, j);
    }, a._errorPlotter = function(b) {
        var c = b.dygraph, d = b.setName, e = c.getBooleanOption("errorBars") || c.getBooleanOption("customBars");
        if (e) {
            var f = c.getBooleanOption("fillGraph", d);
            f && console.warn("Can't use fillGraph option with error bars");
            var g, h = b.drawingContext, i = b.color, j = c.getNumericOption("fillAlpha", d), k = c.getBooleanOption("stepPlot", d), l = b.points, m = Dygraph.createIterator(l, 0, l.length, a._getIteratorPredicate(c.getBooleanOption("connectSeparatedPoints", d))), n = 0 / 0, o = 0 / 0, p = [ -1, -1 ], q = Dygraph.toRGB_(i), r = "rgba(" + q.r + "," + q.g + "," + q.b + "," + j + ")";
            h.fillStyle = r, h.beginPath();
            for (var s = function(a) {
                return null === a || void 0 === a || isNaN(a);
            }; m.hasNext; ) {
                var t = m.next();
                !k && s(t.y) || k && !isNaN(o) && s(o) ? n = 0 / 0 : (g = [ t.y_bottom, t.y_top ], 
                k && (o = t.y), isNaN(g[0]) && (g[0] = t.y), isNaN(g[1]) && (g[1] = t.y), g[0] = b.plotArea.h * g[0] + b.plotArea.y, 
                g[1] = b.plotArea.h * g[1] + b.plotArea.y, isNaN(n) || (k ? (h.moveTo(n, p[0]), 
                h.lineTo(t.canvasx, p[0]), h.lineTo(t.canvasx, p[1])) : (h.moveTo(n, p[0]), h.lineTo(t.canvasx, g[0]), 
                h.lineTo(t.canvasx, g[1])), h.lineTo(n, p[1]), h.closePath()), p = g, n = t.canvasx);
            }
            h.fill();
        }
    }, a._fastCanvasProxy = function(a) {
        var b = [], c = null, d = null, e = 1, f = 2, g = 0, h = function(a) {
            if (!(b.length <= 1)) {
                for (var c = b.length - 1; c > 0; c--) {
                    var d = b[c];
                    if (d[0] == f) {
                        var g = b[c - 1];
                        g[1] == d[1] && g[2] == d[2] && b.splice(c, 1);
                    }
                }
                for (var c = 0; c < b.length - 1; ) {
                    var d = b[c];
                    d[0] == f && b[c + 1][0] == f ? b.splice(c, 1) : c++;
                }
                if (b.length > 2 && !a) {
                    var h = 0;
                    b[0][0] == f && h++;
                    for (var i = null, j = null, c = h; c < b.length; c++) {
                        var d = b[c];
                        if (d[0] == e) if (null === i && null === j) i = c, j = c; else {
                            var k = d[2];
                            k < b[i][2] ? i = c : k > b[j][2] && (j = c);
                        }
                    }
                    var l = b[i], m = b[j];
                    b.splice(h, b.length - h), j > i ? (b.push(l), b.push(m)) : i > j ? (b.push(m), 
                    b.push(l)) : b.push(l);
                }
            }
        }, i = function(c) {
            h(c);
            for (var i = 0, j = b.length; j > i; i++) {
                var k = b[i];
                k[0] == e ? a.lineTo(k[1], k[2]) : k[0] == f && a.moveTo(k[1], k[2]);
            }
            b.length && (d = b[b.length - 1][1]), g += b.length, b = [];
        }, j = function(a, e, f) {
            var g = Math.round(e);
            if (null === c || g != c) {
                var h = c - d > 1, j = g - c > 1, k = h || j;
                i(k), c = g;
            }
            b.push([ a, e, f ]);
        };
        return {
            moveTo: function(a, b) {
                j(f, a, b);
            },
            lineTo: function(a, b) {
                j(e, a, b);
            },
            stroke: function() {
                i(!0), a.stroke();
            },
            fill: function() {
                i(!0), a.fill();
            },
            beginPath: function() {
                i(!0), a.beginPath();
            },
            closePath: function() {
                i(!0), a.closePath();
            },
            _count: function() {
                return g;
            }
        };
    }, a._fillPlotter = function(b) {
        if (!b.singleSeriesName && 0 === b.seriesIndex) {
            for (var c = b.dygraph, d = c.getLabels().slice(1), e = d.length; e >= 0; e--) c.visibility()[e] || d.splice(e, 1);
            var f = function() {
                for (var a = 0; a < d.length; a++) if (c.getBooleanOption("fillGraph", d[a])) return !0;
                return !1;
            }();
            if (f) for (var g, h, i = b.plotArea, j = b.allSeriesPoints, k = j.length, l = c.getNumericOption("fillAlpha"), m = c.getBooleanOption("stackedGraph"), n = c.getColors(), o = {}, p = function(a, b, c, d) {
                if (a.lineTo(b, c), m) for (var e = d.length - 1; e >= 0; e--) {
                    var f = d[e];
                    a.lineTo(f[0], f[1]);
                }
            }, q = k - 1; q >= 0; q--) {
                var r = b.drawingContext, s = d[q];
                if (c.getBooleanOption("fillGraph", s)) {
                    var t = c.getBooleanOption("stepPlot", s), u = n[q], v = c.axisPropertiesForSeries(s), w = 1 + v.minyval * v.yscale;
                    0 > w ? w = 0 : w > 1 && (w = 1), w = i.h * w + i.y;
                    var x, y = j[q], z = Dygraph.createIterator(y, 0, y.length, a._getIteratorPredicate(c.getBooleanOption("connectSeparatedPoints", s))), A = 0 / 0, B = [ -1, -1 ], C = Dygraph.toRGB_(u), D = "rgba(" + C.r + "," + C.g + "," + C.b + "," + l + ")";
                    r.fillStyle = D, r.beginPath();
                    var E, F = !0;
                    (y.length > 2 * c.width_ || Dygraph.FORCE_FAST_PROXY) && (r = a._fastCanvasProxy(r));
                    for (var G, H = []; z.hasNext; ) if (G = z.next(), Dygraph.isOK(G.y) || t) {
                        if (m) {
                            if (!F && E == G.xval) continue;
                            F = !1, E = G.xval, g = o[G.canvasx];
                            var I;
                            I = void 0 === g ? w : h ? g[0] : g, x = [ G.canvasy, I ], o[G.canvasx] = t ? -1 === B[0] ? [ G.canvasy, w ] : [ G.canvasy, B[0] ] : G.canvasy;
                        } else x = isNaN(G.canvasy) && t ? [ i.y + i.h, w ] : [ G.canvasy, w ];
                        isNaN(A) ? (r.moveTo(G.canvasx, x[1]), r.lineTo(G.canvasx, x[0])) : (t ? (r.lineTo(G.canvasx, B[0]), 
                        r.lineTo(G.canvasx, x[0])) : r.lineTo(G.canvasx, x[0]), m && (H.push([ A, B[1] ]), 
                        H.push(h && g ? [ G.canvasx, g[1] ] : [ G.canvasx, x[1] ]))), B = x, A = G.canvasx;
                    } else p(r, A, B[1], H), H = [], A = 0 / 0, null === G.y_stacked || isNaN(G.y_stacked) || (o[G.canvasx] = i.h * G.y_stacked + i.y);
                    h = t, x && G && (p(r, G.canvasx, x[1], H), H = []), r.fill();
                }
            }
        }
    }, a;
}(), Dygraph = function() {
    var a = function(a, b, c, d) {
        this.is_initial_draw_ = !0, this.readyFns_ = [], void 0 !== d ? (console.warn("Using deprecated four-argument dygraph constructor"), 
        this.__old_init__(a, b, c, d)) : this.__init__(a, b, c);
    };
    return a.NAME = "Dygraph", a.VERSION = "1.1.1", a.__repr__ = function() {
        return "[" + a.NAME + " " + a.VERSION + "]";
    }, a.toString = function() {
        return a.__repr__();
    }, a.DEFAULT_ROLL_PERIOD = 1, a.DEFAULT_WIDTH = 480, a.DEFAULT_HEIGHT = 320, a.ANIMATION_STEPS = 12, 
    a.ANIMATION_DURATION = 200, a.KMB_LABELS = [ "K", "M", "B", "T", "Q" ], a.KMG2_BIG_LABELS = [ "k", "M", "G", "T", "P", "E", "Z", "Y" ], 
    a.KMG2_SMALL_LABELS = [ "m", "u", "n", "p", "f", "a", "z", "y" ], a.numberValueFormatter = function(b, c) {
        var d = c("sigFigs");
        if (null !== d) return a.floatFormat(b, d);
        var e, f = c("digitsAfterDecimal"), g = c("maxNumberWidth"), h = c("labelsKMB"), i = c("labelsKMG2");
        if (e = 0 !== b && (Math.abs(b) >= Math.pow(10, g) || Math.abs(b) < Math.pow(10, -f)) ? b.toExponential(f) : "" + a.round_(b, f), 
        h || i) {
            var j, k = [], l = [];
            h && (j = 1e3, k = a.KMB_LABELS), i && (h && console.warn("Setting both labelsKMB and labelsKMG2. Pick one!"), 
            j = 1024, k = a.KMG2_BIG_LABELS, l = a.KMG2_SMALL_LABELS);
            for (var m = Math.abs(b), n = a.pow(j, k.length), o = k.length - 1; o >= 0; o--, 
            n /= j) if (m >= n) {
                e = a.round_(b / n, f) + k[o];
                break;
            }
            if (i) {
                var p = String(b.toExponential()).split("e-");
                2 === p.length && p[1] >= 3 && p[1] <= 24 && (e = p[1] % 3 > 0 ? a.round_(p[0] / a.pow(10, p[1] % 3), f) : Number(p[0]).toFixed(2), 
                e += l[Math.floor(p[1] / 3) - 1]);
            }
        }
        return e;
    }, a.numberAxisLabelFormatter = function(b, c, d) {
        return a.numberValueFormatter.call(this, b, d);
    }, a.SHORT_MONTH_NAMES_ = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], 
    a.dateAxisLabelFormatter = function(b, c, d) {
        var e = d("labelsUTC"), f = e ? a.DateAccessorsUTC : a.DateAccessorsLocal, g = f.getFullYear(b), h = f.getMonth(b), i = f.getDate(b), j = f.getHours(b), k = f.getMinutes(b), l = f.getSeconds(b), m = f.getSeconds(b);
        if (c >= a.DECADAL) return "" + g;
        if (c >= a.MONTHLY) return a.SHORT_MONTH_NAMES_[h] + "&#160;" + g;
        var n = 3600 * j + 60 * k + l + .001 * m;
        return 0 === n || c >= a.DAILY ? a.zeropad(i) + "&#160;" + a.SHORT_MONTH_NAMES_[h] : a.hmsString_(j, k, l);
    }, a.dateAxisFormatter = a.dateAxisLabelFormatter, a.dateValueFormatter = function(b, c) {
        return a.dateString_(b, c("labelsUTC"));
    }, a.Plotters = DygraphCanvasRenderer._Plotters, a.DEFAULT_ATTRS = {
        highlightCircleSize: 3,
        highlightSeriesOpts: null,
        highlightSeriesBackgroundAlpha: .5,
        labelsDivWidth: 250,
        labelsDivStyles: {},
        labelsSeparateLines: !1,
        labelsShowZeroValues: !0,
        labelsKMB: !1,
        labelsKMG2: !1,
        showLabelsOnHighlight: !0,
        digitsAfterDecimal: 2,
        maxNumberWidth: 6,
        sigFigs: null,
        strokeWidth: 1,
        strokeBorderWidth: 0,
        strokeBorderColor: "white",
        axisTickSize: 3,
        axisLabelFontSize: 14,
        rightGap: 5,
        showRoller: !1,
        xValueParser: a.dateParser,
        delimiter: ",",
        sigma: 2,
        errorBars: !1,
        fractions: !1,
        wilsonInterval: !0,
        customBars: !1,
        fillGraph: !1,
        fillAlpha: .15,
        connectSeparatedPoints: !1,
        stackedGraph: !1,
        stackedGraphNaNFill: "all",
        hideOverlayOnMouseOut: !0,
        legend: "onmouseover",
        stepPlot: !1,
        avoidMinZero: !1,
        xRangePad: 0,
        yRangePad: null,
        drawAxesAtZero: !1,
        titleHeight: 28,
        xLabelHeight: 18,
        yLabelWidth: 18,
        drawXAxis: !0,
        drawYAxis: !0,
        axisLineColor: "black",
        axisLineWidth: .3,
        gridLineWidth: .3,
        axisLabelColor: "black",
        axisLabelWidth: 50,
        drawYGrid: !0,
        drawXGrid: !0,
        gridLineColor: "rgb(128,128,128)",
        interactionModel: null,
        animatedZooms: !1,
        showRangeSelector: !1,
        rangeSelectorHeight: 40,
        rangeSelectorPlotStrokeColor: "#808FAB",
        rangeSelectorPlotFillColor: "#A7B1C4",
        showInRangeSelector: null,
        plotter: [ a.Plotters.fillPlotter, a.Plotters.errorPlotter, a.Plotters.linePlotter ],
        plugins: [],
        axes: {
            x: {
                pixelsPerLabel: 70,
                axisLabelWidth: 60,
                axisLabelFormatter: a.dateAxisLabelFormatter,
                valueFormatter: a.dateValueFormatter,
                drawGrid: !0,
                drawAxis: !0,
                independentTicks: !0,
                ticker: null
            },
            y: {
                axisLabelWidth: 50,
                pixelsPerLabel: 30,
                valueFormatter: a.numberValueFormatter,
                axisLabelFormatter: a.numberAxisLabelFormatter,
                drawGrid: !0,
                drawAxis: !0,
                independentTicks: !0,
                ticker: null
            },
            y2: {
                axisLabelWidth: 50,
                pixelsPerLabel: 30,
                valueFormatter: a.numberValueFormatter,
                axisLabelFormatter: a.numberAxisLabelFormatter,
                drawAxis: !0,
                drawGrid: !1,
                independentTicks: !1,
                ticker: null
            }
        }
    }, a.HORIZONTAL = 1, a.VERTICAL = 2, a.PLUGINS = [], a.addedAnnotationCSS = !1, 
    a.prototype.__old_init__ = function(b, c, d, e) {
        if (null !== d) {
            for (var f = [ "Date" ], g = 0; g < d.length; g++) f.push(d[g]);
            a.update(e, {
                labels: f
            });
        }
        this.__init__(b, c, e);
    }, a.prototype.__init__ = function(b, c, d) {
        if (/MSIE/.test(navigator.userAgent) && !window.opera && "undefined" != typeof G_vmlCanvasManager && "complete" != document.readyState) {
            var e = this;
            return void setTimeout(function() {
                e.__init__(b, c, d);
            }, 100);
        }
        if ((null === d || void 0 === d) && (d = {}), d = a.mapLegacyOptions_(d), "string" == typeof b && (b = document.getElementById(b)), 
        !b) return void console.error("Constructing dygraph with a non-existent div!");
        this.isUsingExcanvas_ = "undefined" != typeof G_vmlCanvasManager, this.maindiv_ = b, 
        this.file_ = c, this.rollPeriod_ = d.rollPeriod || a.DEFAULT_ROLL_PERIOD, this.previousVerticalX_ = -1, 
        this.fractions_ = d.fractions || !1, this.dateWindow_ = d.dateWindow || null, this.annotations_ = [], 
        this.zoomed_x_ = !1, this.zoomed_y_ = !1, b.innerHTML = "", "" === b.style.width && d.width && (b.style.width = d.width + "px"), 
        "" === b.style.height && d.height && (b.style.height = d.height + "px"), "" === b.style.height && 0 === b.clientHeight && (b.style.height = a.DEFAULT_HEIGHT + "px", 
        "" === b.style.width && (b.style.width = a.DEFAULT_WIDTH + "px")), this.width_ = b.clientWidth || d.width || 0, 
        this.height_ = b.clientHeight || d.height || 0, d.stackedGraph && (d.fillGraph = !0), 
        this.user_attrs_ = {}, a.update(this.user_attrs_, d), this.attrs_ = {}, a.updateDeep(this.attrs_, a.DEFAULT_ATTRS), 
        this.boundaryIds_ = [], this.setIndexByName_ = {}, this.datasetIndex_ = [], this.registeredEvents_ = [], 
        this.eventListeners_ = {}, this.attributes_ = new DygraphOptions(this), this.createInterface_(), 
        this.plugins_ = [];
        for (var f = a.PLUGINS.concat(this.getOption("plugins")), g = 0; g < f.length; g++) {
            var h, i = f[g];
            h = "undefined" != typeof i.activate ? i : new i();
            var j = {
                plugin: h,
                events: {},
                options: {},
                pluginOptions: {}
            }, k = h.activate(this);
            for (var l in k) k.hasOwnProperty(l) && (j.events[l] = k[l]);
            this.plugins_.push(j);
        }
        for (var g = 0; g < this.plugins_.length; g++) {
            var m = this.plugins_[g];
            for (var l in m.events) if (m.events.hasOwnProperty(l)) {
                var n = m.events[l], o = [ m.plugin, n ];
                l in this.eventListeners_ ? this.eventListeners_[l].push(o) : this.eventListeners_[l] = [ o ];
            }
        }
        this.createDragInterface_(), this.start_();
    }, a.prototype.cascadeEvents_ = function(b, c) {
        if (!(b in this.eventListeners_)) return !1;
        var d = {
            dygraph: this,
            cancelable: !1,
            defaultPrevented: !1,
            preventDefault: function() {
                if (!d.cancelable) throw "Cannot call preventDefault on non-cancelable event.";
                d.defaultPrevented = !0;
            },
            propagationStopped: !1,
            stopPropagation: function() {
                d.propagationStopped = !0;
            }
        };
        a.update(d, c);
        var e = this.eventListeners_[b];
        if (e) for (var f = e.length - 1; f >= 0; f--) {
            var g = e[f][0], h = e[f][1];
            if (h.call(g, d), d.propagationStopped) break;
        }
        return d.defaultPrevented;
    }, a.prototype.getPluginInstance_ = function(a) {
        for (var b = 0; b < this.plugins_.length; b++) {
            var c = this.plugins_[b];
            if (c.plugin instanceof a) return c.plugin;
        }
        return null;
    }, a.prototype.isZoomed = function(a) {
        if (null === a || void 0 === a) return this.zoomed_x_ || this.zoomed_y_;
        if ("x" === a) return this.zoomed_x_;
        if ("y" === a) return this.zoomed_y_;
        throw "axis parameter is [" + a + "] must be null, 'x' or 'y'.";
    }, a.prototype.toString = function() {
        var a = this.maindiv_, b = a && a.id ? a.id : a;
        return "[Dygraph " + b + "]";
    }, a.prototype.attr_ = function(a, b) {
        return b ? this.attributes_.getForSeries(a, b) : this.attributes_.get(a);
    }, a.prototype.getOption = function(a, b) {
        return this.attr_(a, b);
    }, a.prototype.getNumericOption = function(a, b) {
        return this.getOption(a, b);
    }, a.prototype.getStringOption = function(a, b) {
        return this.getOption(a, b);
    }, a.prototype.getBooleanOption = function(a, b) {
        return this.getOption(a, b);
    }, a.prototype.getFunctionOption = function(a, b) {
        return this.getOption(a, b);
    }, a.prototype.getOptionForAxis = function(a, b) {
        return this.attributes_.getForAxis(a, b);
    }, a.prototype.optionsViewForAxis_ = function(a) {
        var b = this;
        return function(c) {
            var d = b.user_attrs_.axes;
            return d && d[a] && d[a].hasOwnProperty(c) ? d[a][c] : "x" === a && "logscale" === c ? !1 : "undefined" != typeof b.user_attrs_[c] ? b.user_attrs_[c] : (d = b.attrs_.axes, 
            d && d[a] && d[a].hasOwnProperty(c) ? d[a][c] : "y" == a && b.axes_[0].hasOwnProperty(c) ? b.axes_[0][c] : "y2" == a && b.axes_[1].hasOwnProperty(c) ? b.axes_[1][c] : b.attr_(c));
        };
    }, a.prototype.rollPeriod = function() {
        return this.rollPeriod_;
    }, a.prototype.xAxisRange = function() {
        return this.dateWindow_ ? this.dateWindow_ : this.xAxisExtremes();
    }, a.prototype.xAxisExtremes = function() {
        var a = this.getNumericOption("xRangePad") / this.plotter_.area.w;
        if (0 === this.numRows()) return [ 0 - a, 1 + a ];
        var b = this.rawData_[0][0], c = this.rawData_[this.rawData_.length - 1][0];
        if (a) {
            var d = c - b;
            b -= d * a, c += d * a;
        }
        return [ b, c ];
    }, a.prototype.yAxisRange = function(a) {
        if ("undefined" == typeof a && (a = 0), 0 > a || a >= this.axes_.length) return null;
        var b = this.axes_[a];
        return [ b.computedValueRange[0], b.computedValueRange[1] ];
    }, a.prototype.yAxisRanges = function() {
        for (var a = [], b = 0; b < this.axes_.length; b++) a.push(this.yAxisRange(b));
        return a;
    }, a.prototype.toDomCoords = function(a, b, c) {
        return [ this.toDomXCoord(a), this.toDomYCoord(b, c) ];
    }, a.prototype.toDomXCoord = function(a) {
        if (null === a) return null;
        var b = this.plotter_.area, c = this.xAxisRange();
        return b.x + (a - c[0]) / (c[1] - c[0]) * b.w;
    }, a.prototype.toDomYCoord = function(a, b) {
        var c = this.toPercentYCoord(a, b);
        if (null === c) return null;
        var d = this.plotter_.area;
        return d.y + c * d.h;
    }, a.prototype.toDataCoords = function(a, b, c) {
        return [ this.toDataXCoord(a), this.toDataYCoord(b, c) ];
    }, a.prototype.toDataXCoord = function(b) {
        if (null === b) return null;
        var c = this.plotter_.area, d = this.xAxisRange();
        if (this.attributes_.getForAxis("logscale", "x")) {
            var e = (b - c.x) / c.w, f = a.log10(d[0]), g = a.log10(d[1]), h = f + e * (g - f), i = Math.pow(a.LOG_SCALE, h);
            return i;
        }
        return d[0] + (b - c.x) / c.w * (d[1] - d[0]);
    }, a.prototype.toDataYCoord = function(b, c) {
        if (null === b) return null;
        var d = this.plotter_.area, e = this.yAxisRange(c);
        if ("undefined" == typeof c && (c = 0), this.attributes_.getForAxis("logscale", c)) {
            var f = (b - d.y) / d.h, g = a.log10(e[0]), h = a.log10(e[1]), i = h - f * (h - g), j = Math.pow(a.LOG_SCALE, i);
            return j;
        }
        return e[0] + (d.y + d.h - b) / d.h * (e[1] - e[0]);
    }, a.prototype.toPercentYCoord = function(b, c) {
        if (null === b) return null;
        "undefined" == typeof c && (c = 0);
        var d, e = this.yAxisRange(c), f = this.attributes_.getForAxis("logscale", c);
        if (f) {
            var g = a.log10(e[0]), h = a.log10(e[1]);
            d = (h - a.log10(b)) / (h - g);
        } else d = (e[1] - b) / (e[1] - e[0]);
        return d;
    }, a.prototype.toPercentXCoord = function(b) {
        if (null === b) return null;
        var c, d = this.xAxisRange(), e = this.attributes_.getForAxis("logscale", "x");
        if (e === !0) {
            var f = a.log10(d[0]), g = a.log10(d[1]);
            c = (a.log10(b) - f) / (g - f);
        } else c = (b - d[0]) / (d[1] - d[0]);
        return c;
    }, a.prototype.numColumns = function() {
        return this.rawData_ ? this.rawData_[0] ? this.rawData_[0].length : this.attr_("labels").length : 0;
    }, a.prototype.numRows = function() {
        return this.rawData_ ? this.rawData_.length : 0;
    }, a.prototype.getValue = function(a, b) {
        return 0 > a || a > this.rawData_.length ? null : 0 > b || b > this.rawData_[a].length ? null : this.rawData_[a][b];
    }, a.prototype.createInterface_ = function() {
        var b = this.maindiv_;
        this.graphDiv = document.createElement("div"), this.graphDiv.style.textAlign = "left", 
        this.graphDiv.style.position = "relative", b.appendChild(this.graphDiv), this.canvas_ = a.createCanvas(), 
        this.canvas_.style.position = "absolute", this.hidden_ = this.createPlotKitCanvas_(this.canvas_), 
        this.canvas_ctx_ = a.getContext(this.canvas_), this.hidden_ctx_ = a.getContext(this.hidden_), 
        this.resizeElements_(), this.graphDiv.appendChild(this.hidden_), this.graphDiv.appendChild(this.canvas_), 
        this.mouseEventElement_ = this.createMouseEventElement_(), this.layout_ = new DygraphLayout(this);
        var c = this;
        this.mouseMoveHandler_ = function(a) {
            c.mouseMove_(a);
        }, this.mouseOutHandler_ = function(b) {
            var d = b.target || b.fromElement, e = b.relatedTarget || b.toElement;
            a.isNodeContainedBy(d, c.graphDiv) && !a.isNodeContainedBy(e, c.graphDiv) && c.mouseOut_(b);
        }, this.addAndTrackEvent(window, "mouseout", this.mouseOutHandler_), this.addAndTrackEvent(this.mouseEventElement_, "mousemove", this.mouseMoveHandler_), 
        this.resizeHandler_ || (this.resizeHandler_ = function() {
            c.resize();
        }, this.addAndTrackEvent(window, "resize", this.resizeHandler_));
    }, a.prototype.resizeElements_ = function() {
        this.graphDiv.style.width = this.width_ + "px", this.graphDiv.style.height = this.height_ + "px";
        var b = a.getContextPixelRatio(this.canvas_ctx_);
        this.canvas_.width = this.width_ * b, this.canvas_.height = this.height_ * b, this.canvas_.style.width = this.width_ + "px", 
        this.canvas_.style.height = this.height_ + "px", 1 !== b && this.canvas_ctx_.scale(b, b);
        var c = a.getContextPixelRatio(this.hidden_ctx_);
        this.hidden_.width = this.width_ * c, this.hidden_.height = this.height_ * c, this.hidden_.style.width = this.width_ + "px", 
        this.hidden_.style.height = this.height_ + "px", 1 !== c && this.hidden_ctx_.scale(c, c);
    }, a.prototype.destroy = function() {
        this.canvas_ctx_.restore(), this.hidden_ctx_.restore();
        for (var b = this.plugins_.length - 1; b >= 0; b--) {
            var c = this.plugins_.pop();
            c.plugin.destroy && c.plugin.destroy();
        }
        var d = function(a) {
            for (;a.hasChildNodes(); ) d(a.firstChild), a.removeChild(a.firstChild);
        };
        this.removeTrackedEvents_(), a.removeEvent(window, "mouseout", this.mouseOutHandler_), 
        a.removeEvent(this.mouseEventElement_, "mousemove", this.mouseMoveHandler_), a.removeEvent(window, "resize", this.resizeHandler_), 
        this.resizeHandler_ = null, d(this.maindiv_);
        var e = function(a) {
            for (var b in a) "object" == typeof a[b] && (a[b] = null);
        };
        e(this.layout_), e(this.plotter_), e(this);
    }, a.prototype.createPlotKitCanvas_ = function(b) {
        var c = a.createCanvas();
        return c.style.position = "absolute", c.style.top = b.style.top, c.style.left = b.style.left, 
        c.width = this.width_, c.height = this.height_, c.style.width = this.width_ + "px", 
        c.style.height = this.height_ + "px", c;
    }, a.prototype.createMouseEventElement_ = function() {
        if (this.isUsingExcanvas_) {
            var a = document.createElement("div");
            return a.style.position = "absolute", a.style.backgroundColor = "white", a.style.filter = "alpha(opacity=0)", 
            a.style.width = this.width_ + "px", a.style.height = this.height_ + "px", this.graphDiv.appendChild(a), 
            a;
        }
        return this.canvas_;
    }, a.prototype.setColors_ = function() {
        var b = this.getLabels(), c = b.length - 1;
        this.colors_ = [], this.colorsMap_ = {};
        for (var d = this.getNumericOption("colorSaturation") || 1, e = this.getNumericOption("colorValue") || .5, f = Math.ceil(c / 2), g = this.getOption("colors"), h = this.visibility(), i = 0; c > i; i++) if (h[i]) {
            var j = b[i + 1], k = this.attributes_.getForSeries("color", j);
            if (!k) if (g) k = g[i % g.length]; else {
                var l = i % 2 ? f + (i + 1) / 2 : Math.ceil((i + 1) / 2), m = 1 * l / (1 + c);
                k = a.hsvToRGB(m, d, e);
            }
            this.colors_.push(k), this.colorsMap_[j] = k;
        }
    }, a.prototype.getColors = function() {
        return this.colors_;
    }, a.prototype.getPropertiesForSeries = function(a) {
        for (var b = -1, c = this.getLabels(), d = 1; d < c.length; d++) if (c[d] == a) {
            b = d;
            break;
        }
        return -1 == b ? null : {
            name: a,
            column: b,
            visible: this.visibility()[b - 1],
            color: this.colorsMap_[a],
            axis: 1 + this.attributes_.axisForSeries(a)
        };
    }, a.prototype.createRollInterface_ = function() {
        this.roller_ || (this.roller_ = document.createElement("input"), this.roller_.type = "text", 
        this.roller_.style.display = "none", this.graphDiv.appendChild(this.roller_));
        var a = this.getBooleanOption("showRoller") ? "block" : "none", b = this.plotter_.area, c = {
            position: "absolute",
            zIndex: 10,
            top: b.y + b.h - 25 + "px",
            left: b.x + 1 + "px",
            display: a
        };
        this.roller_.size = "2", this.roller_.value = this.rollPeriod_;
        for (var d in c) c.hasOwnProperty(d) && (this.roller_.style[d] = c[d]);
        var e = this;
        this.roller_.onchange = function() {
            e.adjustRoll(e.roller_.value);
        };
    }, a.prototype.createDragInterface_ = function() {
        var b = {
            isZooming: !1,
            isPanning: !1,
            is2DPan: !1,
            dragStartX: null,
            dragStartY: null,
            dragEndX: null,
            dragEndY: null,
            dragDirection: null,
            prevEndX: null,
            prevEndY: null,
            prevDragDirection: null,
            cancelNextDblclick: !1,
            initialLeftmostDate: null,
            xUnitsPerPixel: null,
            dateRange: null,
            px: 0,
            py: 0,
            boundedDates: null,
            boundedValues: null,
            tarp: new a.IFrameTarp(),
            initializeMouseDown: function(b, c, d) {
                b.preventDefault ? b.preventDefault() : (b.returnValue = !1, b.cancelBubble = !0);
                var e = a.findPos(c.canvas_);
                d.px = e.x, d.py = e.y, d.dragStartX = a.dragGetX_(b, d), d.dragStartY = a.dragGetY_(b, d), 
                d.cancelNextDblclick = !1, d.tarp.cover();
            },
            destroy: function() {
                var a = this;
                if ((a.isZooming || a.isPanning) && (a.isZooming = !1, a.dragStartX = null, a.dragStartY = null), 
                a.isPanning) {
                    a.isPanning = !1, a.draggingDate = null, a.dateRange = null;
                    for (var b = 0; b < d.axes_.length; b++) delete d.axes_[b].draggingValue, delete d.axes_[b].dragValueRange;
                }
                a.tarp.uncover();
            }
        }, c = this.getOption("interactionModel"), d = this, e = function(a) {
            return function(c) {
                a(c, d, b);
            };
        };
        for (var f in c) c.hasOwnProperty(f) && this.addAndTrackEvent(this.mouseEventElement_, f, e(c[f]));
        if (!c.willDestroyContextMyself) {
            var g = function() {
                b.destroy();
            };
            this.addAndTrackEvent(document, "mouseup", g);
        }
    }, a.prototype.drawZoomRect_ = function(b, c, d, e, f, g, h, i) {
        var j = this.canvas_ctx_;
        g == a.HORIZONTAL ? j.clearRect(Math.min(c, h), this.layout_.getPlotArea().y, Math.abs(c - h), this.layout_.getPlotArea().h) : g == a.VERTICAL && j.clearRect(this.layout_.getPlotArea().x, Math.min(e, i), this.layout_.getPlotArea().w, Math.abs(e - i)), 
        b == a.HORIZONTAL ? d && c && (j.fillStyle = "rgba(128,128,128,0.33)", j.fillRect(Math.min(c, d), this.layout_.getPlotArea().y, Math.abs(d - c), this.layout_.getPlotArea().h)) : b == a.VERTICAL && f && e && (j.fillStyle = "rgba(128,128,128,0.33)", 
        j.fillRect(this.layout_.getPlotArea().x, Math.min(e, f), this.layout_.getPlotArea().w, Math.abs(f - e))), 
        this.isUsingExcanvas_ && (this.currentZoomRectArgs_ = [ b, c, d, e, f, 0, 0, 0 ]);
    }, a.prototype.clearZoomRect_ = function() {
        this.currentZoomRectArgs_ = null, this.canvas_ctx_.clearRect(0, 0, this.width_, this.height_);
    }, a.prototype.doZoomX_ = function(a, b) {
        this.currentZoomRectArgs_ = null;
        var c = this.toDataXCoord(a), d = this.toDataXCoord(b);
        this.doZoomXDates_(c, d);
    }, a.prototype.doZoomXDates_ = function(a, b) {
        var c = this.xAxisRange(), d = [ a, b ];
        this.zoomed_x_ = !0;
        var e = this;
        this.doAnimatedZoom(c, d, null, null, function() {
            e.getFunctionOption("zoomCallback") && e.getFunctionOption("zoomCallback").call(e, a, b, e.yAxisRanges());
        });
    }, a.prototype.doZoomY_ = function(a, b) {
        this.currentZoomRectArgs_ = null;
        for (var c = this.yAxisRanges(), d = [], e = 0; e < this.axes_.length; e++) {
            var f = this.toDataYCoord(a, e), g = this.toDataYCoord(b, e);
            d.push([ g, f ]);
        }
        this.zoomed_y_ = !0;
        var h = this;
        this.doAnimatedZoom(null, null, c, d, function() {
            if (h.getFunctionOption("zoomCallback")) {
                var a = h.xAxisRange();
                h.getFunctionOption("zoomCallback").call(h, a[0], a[1], h.yAxisRanges());
            }
        });
    }, a.zoomAnimationFunction = function(a, b) {
        var c = 1.5;
        return (1 - Math.pow(c, -a)) / (1 - Math.pow(c, -b));
    }, a.prototype.resetZoom = function() {
        var a = !1, b = !1, c = !1;
        null !== this.dateWindow_ && (a = !0, b = !0);
        for (var d = 0; d < this.axes_.length; d++) "undefined" != typeof this.axes_[d].valueWindow && null !== this.axes_[d].valueWindow && (a = !0, 
        c = !0);
        if (this.clearSelection(), a) {
            this.zoomed_x_ = !1, this.zoomed_y_ = !1;
            var e = this.rawData_[0][0], f = this.rawData_[this.rawData_.length - 1][0];
            if (!this.getBooleanOption("animatedZooms")) {
                for (this.dateWindow_ = null, d = 0; d < this.axes_.length; d++) null !== this.axes_[d].valueWindow && delete this.axes_[d].valueWindow;
                return this.drawGraph_(), void (this.getFunctionOption("zoomCallback") && this.getFunctionOption("zoomCallback").call(this, e, f, this.yAxisRanges()));
            }
            var g = null, h = null, i = null, j = null;
            if (b && (g = this.xAxisRange(), h = [ e, f ]), c) {
                i = this.yAxisRanges();
                var k = this.gatherDatasets_(this.rolledSeries_, null), l = k.extremes;
                for (this.computeYAxisRanges_(l), j = [], d = 0; d < this.axes_.length; d++) {
                    var m = this.axes_[d];
                    j.push(null !== m.valueRange && void 0 !== m.valueRange ? m.valueRange : m.extremeRange);
                }
            }
            var n = this;
            this.doAnimatedZoom(g, h, i, j, function() {
                n.dateWindow_ = null;
                for (var a = 0; a < n.axes_.length; a++) null !== n.axes_[a].valueWindow && delete n.axes_[a].valueWindow;
                n.getFunctionOption("zoomCallback") && n.getFunctionOption("zoomCallback").call(n, e, f, n.yAxisRanges());
            });
        }
    }, a.prototype.doAnimatedZoom = function(b, c, d, e, f) {
        var g, h, i = this.getBooleanOption("animatedZooms") ? a.ANIMATION_STEPS : 1, j = [], k = [];
        if (null !== b && null !== c) for (g = 1; i >= g; g++) h = a.zoomAnimationFunction(g, i), 
        j[g - 1] = [ b[0] * (1 - h) + h * c[0], b[1] * (1 - h) + h * c[1] ];
        if (null !== d && null !== e) for (g = 1; i >= g; g++) {
            h = a.zoomAnimationFunction(g, i);
            for (var l = [], m = 0; m < this.axes_.length; m++) l.push([ d[m][0] * (1 - h) + h * e[m][0], d[m][1] * (1 - h) + h * e[m][1] ]);
            k[g - 1] = l;
        }
        var n = this;
        a.repeatAndCleanup(function(a) {
            if (k.length) for (var b = 0; b < n.axes_.length; b++) {
                var c = k[a][b];
                n.axes_[b].valueWindow = [ c[0], c[1] ];
            }
            j.length && (n.dateWindow_ = j[a]), n.drawGraph_();
        }, i, a.ANIMATION_DURATION / i, f);
    }, a.prototype.getArea = function() {
        return this.plotter_.area;
    }, a.prototype.eventToDomCoords = function(b) {
        if (b.offsetX && b.offsetY) return [ b.offsetX, b.offsetY ];
        var c = a.findPos(this.mouseEventElement_), d = a.pageX(b) - c.x, e = a.pageY(b) - c.y;
        return [ d, e ];
    }, a.prototype.findClosestRow = function(b) {
        for (var c = 1 / 0, d = -1, e = this.layout_.points, f = 0; f < e.length; f++) for (var g = e[f], h = g.length, i = 0; h > i; i++) {
            var j = g[i];
            if (a.isValidPoint(j, !0)) {
                var k = Math.abs(j.canvasx - b);
                c > k && (c = k, d = j.idx);
            }
        }
        return d;
    }, a.prototype.findClosestPoint = function(b, c) {
        for (var d, e, f, g, h, i, j, k = 1 / 0, l = this.layout_.points.length - 1; l >= 0; --l) for (var m = this.layout_.points[l], n = 0; n < m.length; ++n) g = m[n], 
        a.isValidPoint(g) && (e = g.canvasx - b, f = g.canvasy - c, d = e * e + f * f, k > d && (k = d, 
        h = g, i = l, j = g.idx));
        var o = this.layout_.setNames[i];
        return {
            row: j,
            seriesName: o,
            point: h
        };
    }, a.prototype.findStackedPoint = function(b, c) {
        for (var d, e, f = this.findClosestRow(b), g = 0; g < this.layout_.points.length; ++g) {
            var h = this.getLeftBoundary_(g), i = f - h, j = this.layout_.points[g];
            if (!(i >= j.length)) {
                var k = j[i];
                if (a.isValidPoint(k)) {
                    var l = k.canvasy;
                    if (b > k.canvasx && i + 1 < j.length) {
                        var m = j[i + 1];
                        if (a.isValidPoint(m)) {
                            var n = m.canvasx - k.canvasx;
                            if (n > 0) {
                                var o = (b - k.canvasx) / n;
                                l += o * (m.canvasy - k.canvasy);
                            }
                        }
                    } else if (b < k.canvasx && i > 0) {
                        var p = j[i - 1];
                        if (a.isValidPoint(p)) {
                            var n = k.canvasx - p.canvasx;
                            if (n > 0) {
                                var o = (k.canvasx - b) / n;
                                l += o * (p.canvasy - k.canvasy);
                            }
                        }
                    }
                    (0 === g || c > l) && (d = k, e = g);
                }
            }
        }
        var q = this.layout_.setNames[e];
        return {
            row: f,
            seriesName: q,
            point: d
        };
    }, a.prototype.mouseMove_ = function(a) {
        var b = this.layout_.points;
        if (void 0 !== b && null !== b) {
            var c = this.eventToDomCoords(a), d = c[0], e = c[1], f = this.getOption("highlightSeriesOpts"), g = !1;
            if (f && !this.isSeriesLocked()) {
                var h;
                h = this.getBooleanOption("stackedGraph") ? this.findStackedPoint(d, e) : this.findClosestPoint(d, e), 
                g = this.setSelection(h.row, h.seriesName);
            } else {
                var i = this.findClosestRow(d);
                g = this.setSelection(i);
            }
            var j = this.getFunctionOption("highlightCallback");
            j && g && j.call(this, a, this.lastx_, this.selPoints_, this.lastRow_, this.highlightSet_);
        }
    }, a.prototype.getLeftBoundary_ = function(a) {
        if (this.boundaryIds_[a]) return this.boundaryIds_[a][0];
        for (var b = 0; b < this.boundaryIds_.length; b++) if (void 0 !== this.boundaryIds_[b]) return this.boundaryIds_[b][0];
        return 0;
    }, a.prototype.animateSelection_ = function(b) {
        var c = 10, d = 30;
        void 0 === this.fadeLevel && (this.fadeLevel = 0), void 0 === this.animateId && (this.animateId = 0);
        var e = this.fadeLevel, f = 0 > b ? e : c - e;
        if (0 >= f) return void (this.fadeLevel && this.updateSelection_(1));
        var g = ++this.animateId, h = this;
        a.repeatAndCleanup(function() {
            h.animateId == g && (h.fadeLevel += b, 0 === h.fadeLevel ? h.clearSelection() : h.updateSelection_(h.fadeLevel / c));
        }, f, d, function() {});
    }, a.prototype.updateSelection_ = function(b) {
        this.cascadeEvents_("select", {
            selectedRow: this.lastRow_,
            selectedX: this.lastx_,
            selectedPoints: this.selPoints_
        });
        var c, d = this.canvas_ctx_;
        if (this.getOption("highlightSeriesOpts")) {
            d.clearRect(0, 0, this.width_, this.height_);
            var e = 1 - this.getNumericOption("highlightSeriesBackgroundAlpha");
            if (e) {
                var f = !0;
                if (f) {
                    if (void 0 === b) return void this.animateSelection_(1);
                    e *= b;
                }
                d.fillStyle = "rgba(255,255,255," + e + ")", d.fillRect(0, 0, this.width_, this.height_);
            }
            this.plotter_._renderLineChart(this.highlightSet_, d);
        } else if (this.previousVerticalX_ >= 0) {
            var g = 0, h = this.attr_("labels");
            for (c = 1; c < h.length; c++) {
                var i = this.getNumericOption("highlightCircleSize", h[c]);
                i > g && (g = i);
            }
            var j = this.previousVerticalX_;
            d.clearRect(j - g - 1, 0, 2 * g + 2, this.height_);
        }
        if (this.isUsingExcanvas_ && this.currentZoomRectArgs_ && a.prototype.drawZoomRect_.apply(this, this.currentZoomRectArgs_), 
        this.selPoints_.length > 0) {
            var k = this.selPoints_[0].canvasx;
            for (d.save(), c = 0; c < this.selPoints_.length; c++) {
                var l = this.selPoints_[c];
                if (a.isOK(l.canvasy)) {
                    var m = this.getNumericOption("highlightCircleSize", l.name), n = this.getFunctionOption("drawHighlightPointCallback", l.name), o = this.plotter_.colors[l.name];
                    n || (n = a.Circles.DEFAULT), d.lineWidth = this.getNumericOption("strokeWidth", l.name), 
                    d.strokeStyle = o, d.fillStyle = o, n.call(this, this, l.name, d, k, l.canvasy, o, m, l.idx);
                }
            }
            d.restore(), this.previousVerticalX_ = k;
        }
    }, a.prototype.setSelection = function(a, b, c) {
        this.selPoints_ = [];
        var d = !1;
        if (a !== !1 && a >= 0) {
            a != this.lastRow_ && (d = !0), this.lastRow_ = a;
            for (var e = 0; e < this.layout_.points.length; ++e) {
                var f = this.layout_.points[e], g = a - this.getLeftBoundary_(e);
                if (g < f.length && f[g].idx == a) {
                    var h = f[g];
                    null !== h.yval && this.selPoints_.push(h);
                } else for (var i = 0; i < f.length; ++i) {
                    var h = f[i];
                    if (h.idx == a) {
                        null !== h.yval && this.selPoints_.push(h);
                        break;
                    }
                }
            }
        } else this.lastRow_ >= 0 && (d = !0), this.lastRow_ = -1;
        return this.lastx_ = this.selPoints_.length ? this.selPoints_[0].xval : -1, void 0 !== b && (this.highlightSet_ !== b && (d = !0), 
        this.highlightSet_ = b), void 0 !== c && (this.lockedSet_ = c), d && this.updateSelection_(void 0), 
        d;
    }, a.prototype.mouseOut_ = function(a) {
        this.getFunctionOption("unhighlightCallback") && this.getFunctionOption("unhighlightCallback").call(this, a), 
        this.getBooleanOption("hideOverlayOnMouseOut") && !this.lockedSet_ && this.clearSelection();
    }, a.prototype.clearSelection = function() {
        return this.cascadeEvents_("deselect", {}), this.lockedSet_ = !1, this.fadeLevel ? void this.animateSelection_(-1) : (this.canvas_ctx_.clearRect(0, 0, this.width_, this.height_), 
        this.fadeLevel = 0, this.selPoints_ = [], this.lastx_ = -1, this.lastRow_ = -1, 
        void (this.highlightSet_ = null));
    }, a.prototype.getSelection = function() {
        if (!this.selPoints_ || this.selPoints_.length < 1) return -1;
        for (var a = 0; a < this.layout_.points.length; a++) for (var b = this.layout_.points[a], c = 0; c < b.length; c++) if (b[c].x == this.selPoints_[0].x) return b[c].idx;
        return -1;
    }, a.prototype.getHighlightSeries = function() {
        return this.highlightSet_;
    }, a.prototype.isSeriesLocked = function() {
        return this.lockedSet_;
    }, a.prototype.loadedEvent_ = function(a) {
        this.rawData_ = this.parseCSV_(a), this.cascadeDataDidUpdateEvent_(), this.predraw_();
    }, a.prototype.addXTicks_ = function() {
        var a;
        a = this.dateWindow_ ? [ this.dateWindow_[0], this.dateWindow_[1] ] : this.xAxisExtremes();
        var b = this.optionsViewForAxis_("x"), c = b("ticker")(a[0], a[1], this.plotter_.area.w, b, this);
        this.layout_.setXTicks(c);
    }, a.prototype.getHandlerClass_ = function() {
        var b;
        return b = this.attr_("dataHandler") ? this.attr_("dataHandler") : this.fractions_ ? this.getBooleanOption("errorBars") ? a.DataHandlers.FractionsBarsHandler : a.DataHandlers.DefaultFractionHandler : this.getBooleanOption("customBars") ? a.DataHandlers.CustomBarsHandler : this.getBooleanOption("errorBars") ? a.DataHandlers.ErrorBarsHandler : a.DataHandlers.DefaultHandler;
    }, a.prototype.predraw_ = function() {
        var a = new Date();
        this.dataHandler_ = new (this.getHandlerClass_())(), this.layout_.computePlotArea(), 
        this.computeYAxes_(), this.is_initial_draw_ || (this.canvas_ctx_.restore(), this.hidden_ctx_.restore()), 
        this.canvas_ctx_.save(), this.hidden_ctx_.save(), this.plotter_ = new DygraphCanvasRenderer(this, this.hidden_, this.hidden_ctx_, this.layout_), 
        this.createRollInterface_(), this.cascadeEvents_("predraw"), this.rolledSeries_ = [ null ];
        for (var b = 1; b < this.numColumns(); b++) {
            var c = this.dataHandler_.extractSeries(this.rawData_, b, this.attributes_);
            this.rollPeriod_ > 1 && (c = this.dataHandler_.rollingAverage(c, this.rollPeriod_, this.attributes_)), 
            this.rolledSeries_.push(c);
        }
        this.drawGraph_();
        var d = new Date();
        this.drawingTimeMs_ = d - a;
    }, a.PointType = void 0, a.stackPoints_ = function(a, b, c, d) {
        for (var e = null, f = null, g = null, h = -1, i = function(b) {
            if (!(h >= b)) for (var c = b; c < a.length; ++c) if (g = null, !isNaN(a[c].yval) && null !== a[c].yval) {
                h = c, g = a[c];
                break;
            }
        }, j = 0; j < a.length; ++j) {
            var k = a[j], l = k.xval;
            void 0 === b[l] && (b[l] = 0);
            var m = k.yval;
            isNaN(m) || null === m ? "none" == d ? m = 0 : (i(j), m = f && g && "none" != d ? f.yval + (g.yval - f.yval) * ((l - f.xval) / (g.xval - f.xval)) : f && "all" == d ? f.yval : g && "all" == d ? g.yval : 0) : f = k;
            var n = b[l];
            e != l && (n += m, b[l] = n), e = l, k.yval_stacked = n, n > c[1] && (c[1] = n), 
            n < c[0] && (c[0] = n);
        }
    }, a.prototype.gatherDatasets_ = function(b, c) {
        var d, e, f, g, h, i, j = [], k = [], l = [], m = {}, n = b.length - 1;
        for (d = n; d >= 1; d--) if (this.visibility()[d - 1]) {
            if (c) {
                i = b[d];
                var o = c[0], p = c[1];
                for (f = null, g = null, e = 0; e < i.length; e++) i[e][0] >= o && null === f && (f = e), 
                i[e][0] <= p && (g = e);
                null === f && (f = 0);
                for (var q = f, r = !0; r && q > 0; ) q--, r = null === i[q][1];
                null === g && (g = i.length - 1);
                var s = g;
                for (r = !0; r && s < i.length - 1; ) s++, r = null === i[s][1];
                q !== f && (f = q), s !== g && (g = s), j[d - 1] = [ f, g ], i = i.slice(f, g + 1);
            } else i = b[d], j[d - 1] = [ 0, i.length - 1 ];
            var t = this.attr_("labels")[d], u = this.dataHandler_.getExtremeYValues(i, c, this.getBooleanOption("stepPlot", t)), v = this.dataHandler_.seriesToPoints(i, t, j[d - 1][0]);
            this.getBooleanOption("stackedGraph") && (h = this.attributes_.axisForSeries(t), 
            void 0 === l[h] && (l[h] = []), a.stackPoints_(v, l[h], u, this.getBooleanOption("stackedGraphNaNFill"))), 
            m[t] = u, k[d] = v;
        }
        return {
            points: k,
            extremes: m,
            boundaryIds: j
        };
    }, a.prototype.drawGraph_ = function() {
        var a = new Date(), b = this.is_initial_draw_;
        this.is_initial_draw_ = !1, this.layout_.removeAllDatasets(), this.setColors_(), 
        this.attrs_.pointSize = .5 * this.getNumericOption("highlightCircleSize");
        var c = this.gatherDatasets_(this.rolledSeries_, this.dateWindow_), d = c.points, e = c.extremes;
        this.boundaryIds_ = c.boundaryIds, this.setIndexByName_ = {};
        var f = this.attr_("labels");
        f.length > 0 && (this.setIndexByName_[f[0]] = 0);
        for (var g = 0, h = 1; h < d.length; h++) this.setIndexByName_[f[h]] = h, this.visibility()[h - 1] && (this.layout_.addDataset(f[h], d[h]), 
        this.datasetIndex_[h] = g++);
        this.computeYAxisRanges_(e), this.layout_.setYAxes(this.axes_), this.addXTicks_();
        var i = this.zoomed_x_;
        if (this.zoomed_x_ = i, this.layout_.evaluate(), this.renderGraph_(b), this.getStringOption("timingName")) {
            var j = new Date();
            console.log(this.getStringOption("timingName") + " - drawGraph: " + (j - a) + "ms");
        }
    }, a.prototype.renderGraph_ = function(a) {
        this.cascadeEvents_("clearChart"), this.plotter_.clear(), this.getFunctionOption("underlayCallback") && this.getFunctionOption("underlayCallback").call(this, this.hidden_ctx_, this.layout_.getPlotArea(), this, this);
        var b = {
            canvas: this.hidden_,
            drawingContext: this.hidden_ctx_
        };
        if (this.cascadeEvents_("willDrawChart", b), this.plotter_.render(), this.cascadeEvents_("didDrawChart", b), 
        this.lastRow_ = -1, this.canvas_.getContext("2d").clearRect(0, 0, this.width_, this.height_), 
        null !== this.getFunctionOption("drawCallback") && this.getFunctionOption("drawCallback").call(this, this, a), 
        a) for (this.readyFired_ = !0; this.readyFns_.length > 0; ) {
            var c = this.readyFns_.pop();
            c(this);
        }
    }, a.prototype.computeYAxes_ = function() {
        var b, c, d, e, f;
        if (void 0 !== this.axes_ && this.user_attrs_.hasOwnProperty("valueRange") === !1) for (b = [], 
        d = 0; d < this.axes_.length; d++) b.push(this.axes_[d].valueWindow);
        for (this.axes_ = [], c = 0; c < this.attributes_.numAxes(); c++) e = {
            g: this
        }, a.update(e, this.attributes_.axisOptions(c)), this.axes_[c] = e;
        if (f = this.attr_("valueRange"), f && (this.axes_[0].valueRange = f), void 0 !== b) {
            var g = Math.min(b.length, this.axes_.length);
            for (d = 0; g > d; d++) this.axes_[d].valueWindow = b[d];
        }
        for (c = 0; c < this.axes_.length; c++) if (0 === c) e = this.optionsViewForAxis_("y" + (c ? "2" : "")), 
        f = e("valueRange"), f && (this.axes_[c].valueRange = f); else {
            var h = this.user_attrs_.axes;
            h && h.y2 && (f = h.y2.valueRange, f && (this.axes_[c].valueRange = f));
        }
    }, a.prototype.numAxes = function() {
        return this.attributes_.numAxes();
    }, a.prototype.axisPropertiesForSeries = function(a) {
        return this.axes_[this.attributes_.axisForSeries(a)];
    }, a.prototype.computeYAxisRanges_ = function(a) {
        for (var b, c, d, e, f, g = function(a) {
            return isNaN(parseFloat(a));
        }, h = this.attributes_.numAxes(), i = 0; h > i; i++) {
            var j = this.axes_[i], k = this.attributes_.getForAxis("logscale", i), l = this.attributes_.getForAxis("includeZero", i), m = this.attributes_.getForAxis("independentTicks", i);
            if (d = this.attributes_.seriesForAxis(i), b = !0, e = .1, null !== this.getNumericOption("yRangePad") && (b = !1, 
            e = this.getNumericOption("yRangePad") / this.plotter_.area.h), 0 === d.length) j.extremeRange = [ 0, 1 ]; else {
                for (var n, o, p = 1 / 0, q = -(1 / 0), r = 0; r < d.length; r++) a.hasOwnProperty(d[r]) && (n = a[d[r]][0], 
                null !== n && (p = Math.min(n, p)), o = a[d[r]][1], null !== o && (q = Math.max(o, q)));
                l && !k && (p > 0 && (p = 0), 0 > q && (q = 0)), p == 1 / 0 && (p = 0), q == -(1 / 0) && (q = 1), 
                c = q - p, 0 === c && (0 !== q ? c = Math.abs(q) : (q = 1, c = 1));
                var s, t;
                if (k) if (b) s = q + e * c, t = p; else {
                    var u = Math.exp(Math.log(c) * e);
                    s = q * u, t = p / u;
                } else s = q + e * c, t = p - e * c, b && !this.getBooleanOption("avoidMinZero") && (0 > t && p >= 0 && (t = 0), 
                s > 0 && 0 >= q && (s = 0));
                j.extremeRange = [ t, s ];
            }
            if (j.valueWindow) j.computedValueRange = [ j.valueWindow[0], j.valueWindow[1] ]; else if (j.valueRange) {
                var v = g(j.valueRange[0]) ? j.extremeRange[0] : j.valueRange[0], w = g(j.valueRange[1]) ? j.extremeRange[1] : j.valueRange[1];
                if (!b) if (j.logscale) {
                    var u = Math.exp(Math.log(c) * e);
                    v *= u, w /= u;
                } else c = w - v, v -= c * e, w += c * e;
                j.computedValueRange = [ v, w ];
            } else j.computedValueRange = j.extremeRange;
            if (m) {
                j.independentTicks = m;
                var x = this.optionsViewForAxis_("y" + (i ? "2" : "")), y = x("ticker");
                j.ticks = y(j.computedValueRange[0], j.computedValueRange[1], this.plotter_.area.h, x, this), 
                f || (f = j);
            }
        }
        if (void 0 === f) throw 'Configuration Error: At least one axis has to have the "independentTicks" option activated.';
        for (var i = 0; h > i; i++) {
            var j = this.axes_[i];
            if (!j.independentTicks) {
                for (var x = this.optionsViewForAxis_("y" + (i ? "2" : "")), y = x("ticker"), z = f.ticks, A = f.computedValueRange[1] - f.computedValueRange[0], B = j.computedValueRange[1] - j.computedValueRange[0], C = [], D = 0; D < z.length; D++) {
                    var E = (z[D].v - f.computedValueRange[0]) / A, F = j.computedValueRange[0] + E * B;
                    C.push(F);
                }
                j.ticks = y(j.computedValueRange[0], j.computedValueRange[1], this.plotter_.area.h, x, this, C);
            }
        }
    }, a.prototype.detectTypeFromString_ = function(a) {
        var b = !1, c = a.indexOf("-");
        c > 0 && "e" != a[c - 1] && "E" != a[c - 1] || a.indexOf("/") >= 0 || isNaN(parseFloat(a)) ? b = !0 : 8 == a.length && a > "19700101" && "20371231" > a && (b = !0), 
        this.setXAxisOptions_(b);
    }, a.prototype.setXAxisOptions_ = function(b) {
        b ? (this.attrs_.xValueParser = a.dateParser, this.attrs_.axes.x.valueFormatter = a.dateValueFormatter, 
        this.attrs_.axes.x.ticker = a.dateTicker, this.attrs_.axes.x.axisLabelFormatter = a.dateAxisLabelFormatter) : (this.attrs_.xValueParser = function(a) {
            return parseFloat(a);
        }, this.attrs_.axes.x.valueFormatter = function(a) {
            return a;
        }, this.attrs_.axes.x.ticker = a.numericTicks, this.attrs_.axes.x.axisLabelFormatter = this.attrs_.axes.x.valueFormatter);
    }, a.prototype.parseCSV_ = function(b) {
        var c, d, e = [], f = a.detectLineDelimiter(b), g = b.split(f || "\n"), h = this.getStringOption("delimiter");
        -1 == g[0].indexOf(h) && g[0].indexOf("	") >= 0 && (h = "	");
        var i = 0;
        "labels" in this.user_attrs_ || (i = 1, this.attrs_.labels = g[0].split(h), this.attributes_.reparseSeries());
        for (var j, k = 0, l = !1, m = this.attr_("labels").length, n = !1, o = i; o < g.length; o++) {
            var p = g[o];
            if (k = o, 0 !== p.length && "#" != p[0]) {
                var q = p.split(h);
                if (!(q.length < 2)) {
                    var r = [];
                    if (l || (this.detectTypeFromString_(q[0]), j = this.getFunctionOption("xValueParser"), 
                    l = !0), r[0] = j(q[0], this), this.fractions_) for (d = 1; d < q.length; d++) c = q[d].split("/"), 
                    2 != c.length ? (console.error('Expected fractional "num/den" values in CSV data but found a value \'' + q[d] + "' on line " + (1 + o) + " ('" + p + "') which is not of this form."), 
                    r[d] = [ 0, 0 ]) : r[d] = [ a.parseFloat_(c[0], o, p), a.parseFloat_(c[1], o, p) ]; else if (this.getBooleanOption("errorBars")) for (q.length % 2 != 1 && console.error("Expected alternating (value, stdev.) pairs in CSV data but line " + (1 + o) + " has an odd number of values (" + (q.length - 1) + "): '" + p + "'"), 
                    d = 1; d < q.length; d += 2) r[(d + 1) / 2] = [ a.parseFloat_(q[d], o, p), a.parseFloat_(q[d + 1], o, p) ]; else if (this.getBooleanOption("customBars")) for (d = 1; d < q.length; d++) {
                        var s = q[d];
                        /^ *$/.test(s) ? r[d] = [ null, null, null ] : (c = s.split(";"), 3 == c.length ? r[d] = [ a.parseFloat_(c[0], o, p), a.parseFloat_(c[1], o, p), a.parseFloat_(c[2], o, p) ] : console.warn('When using customBars, values must be either blank or "low;center;high" tuples (got "' + s + '" on line ' + (1 + o)));
                    } else for (d = 1; d < q.length; d++) r[d] = a.parseFloat_(q[d], o, p);
                    if (e.length > 0 && r[0] < e[e.length - 1][0] && (n = !0), r.length != m && console.error("Number of columns in line " + o + " (" + r.length + ") does not agree with number of labels (" + m + ") " + p), 
                    0 === o && this.attr_("labels")) {
                        var t = !0;
                        for (d = 0; t && d < r.length; d++) r[d] && (t = !1);
                        if (t) {
                            console.warn("The dygraphs 'labels' option is set, but the first row of CSV data ('" + p + "') appears to also contain labels. Will drop the CSV labels and use the option labels.");
                            continue;
                        }
                    }
                    e.push(r);
                }
            }
        }
        return n && (console.warn("CSV is out of order; order it correctly to speed loading."), 
        e.sort(function(a, b) {
            return a[0] - b[0];
        })), e;
    }, a.prototype.parseArray_ = function(b) {
        if (0 === b.length) return console.error("Can't plot empty data set"), null;
        if (0 === b[0].length) return console.error("Data set cannot contain an empty row"), 
        null;
        var c;
        if (null === this.attr_("labels")) {
            for (console.warn("Using default labels. Set labels explicitly via 'labels' in the options parameter"), 
            this.attrs_.labels = [ "X" ], c = 1; c < b[0].length; c++) this.attrs_.labels.push("Y" + c);
            this.attributes_.reparseSeries();
        } else {
            var d = this.attr_("labels");
            if (d.length != b[0].length) return console.error("Mismatch between number of labels (" + d + ") and number of columns in array (" + b[0].length + ")"), 
            null;
        }
        if (a.isDateLike(b[0][0])) {
            this.attrs_.axes.x.valueFormatter = a.dateValueFormatter, this.attrs_.axes.x.ticker = a.dateTicker, 
            this.attrs_.axes.x.axisLabelFormatter = a.dateAxisLabelFormatter;
            var e = a.clone(b);
            for (c = 0; c < b.length; c++) {
                if (0 === e[c].length) return console.error("Row " + (1 + c) + " of data is empty"), 
                null;
                if (null === e[c][0] || "function" != typeof e[c][0].getTime || isNaN(e[c][0].getTime())) return console.error("x value in row " + (1 + c) + " is not a Date"), 
                null;
                e[c][0] = e[c][0].getTime();
            }
            return e;
        }
        return this.attrs_.axes.x.valueFormatter = function(a) {
            return a;
        }, this.attrs_.axes.x.ticker = a.numericTicks, this.attrs_.axes.x.axisLabelFormatter = a.numberAxisLabelFormatter, 
        b;
    }, a.prototype.parseDataTable_ = function(b) {
        var c = function(a) {
            var b = String.fromCharCode(65 + a % 26);
            for (a = Math.floor(a / 26); a > 0; ) b = String.fromCharCode(65 + (a - 1) % 26) + b.toLowerCase(), 
            a = Math.floor((a - 1) / 26);
            return b;
        }, d = b.getNumberOfColumns(), e = b.getNumberOfRows(), f = b.getColumnType(0);
        if ("date" == f || "datetime" == f) this.attrs_.xValueParser = a.dateParser, this.attrs_.axes.x.valueFormatter = a.dateValueFormatter, 
        this.attrs_.axes.x.ticker = a.dateTicker, this.attrs_.axes.x.axisLabelFormatter = a.dateAxisLabelFormatter; else {
            if ("number" != f) return console.error("only 'date', 'datetime' and 'number' types are supported for column 1 of DataTable input (Got '" + f + "')"), 
            null;
            this.attrs_.xValueParser = function(a) {
                return parseFloat(a);
            }, this.attrs_.axes.x.valueFormatter = function(a) {
                return a;
            }, this.attrs_.axes.x.ticker = a.numericTicks, this.attrs_.axes.x.axisLabelFormatter = this.attrs_.axes.x.valueFormatter;
        }
        var g, h, i = [], j = {}, k = !1;
        for (g = 1; d > g; g++) {
            var l = b.getColumnType(g);
            if ("number" == l) i.push(g); else if ("string" == l && this.getBooleanOption("displayAnnotations")) {
                var m = i[i.length - 1];
                j.hasOwnProperty(m) ? j[m].push(g) : j[m] = [ g ], k = !0;
            } else console.error("Only 'number' is supported as a dependent type with Gviz. 'string' is only supported if displayAnnotations is true");
        }
        var n = [ b.getColumnLabel(0) ];
        for (g = 0; g < i.length; g++) n.push(b.getColumnLabel(i[g])), this.getBooleanOption("errorBars") && (g += 1);
        this.attrs_.labels = n, d = n.length;
        var o = [], p = !1, q = [];
        for (g = 0; e > g; g++) {
            var r = [];
            if ("undefined" != typeof b.getValue(g, 0) && null !== b.getValue(g, 0)) {
                if (r.push("date" == f || "datetime" == f ? b.getValue(g, 0).getTime() : b.getValue(g, 0)), 
                this.getBooleanOption("errorBars")) for (h = 0; d - 1 > h; h++) r.push([ b.getValue(g, 1 + 2 * h), b.getValue(g, 2 + 2 * h) ]); else {
                    for (h = 0; h < i.length; h++) {
                        var s = i[h];
                        if (r.push(b.getValue(g, s)), k && j.hasOwnProperty(s) && null !== b.getValue(g, j[s][0])) {
                            var t = {};
                            t.series = b.getColumnLabel(s), t.xval = r[0], t.shortText = c(q.length), t.text = "";
                            for (var u = 0; u < j[s].length; u++) u && (t.text += "\n"), t.text += b.getValue(g, j[s][u]);
                            q.push(t);
                        }
                    }
                    for (h = 0; h < r.length; h++) isFinite(r[h]) || (r[h] = null);
                }
                o.length > 0 && r[0] < o[o.length - 1][0] && (p = !0), o.push(r);
            } else console.warn("Ignoring row " + g + " of DataTable because of undefined or null first column.");
        }
        p && (console.warn("DataTable is out of order; order it correctly to speed loading."), 
        o.sort(function(a, b) {
            return a[0] - b[0];
        })), this.rawData_ = o, q.length > 0 && this.setAnnotations(q, !0), this.attributes_.reparseSeries();
    }, a.prototype.cascadeDataDidUpdateEvent_ = function() {
        this.cascadeEvents_("dataDidUpdate", {});
    }, a.prototype.start_ = function() {
        var b = this.file_;
        if ("function" == typeof b && (b = b()), a.isArrayLike(b)) this.rawData_ = this.parseArray_(b), 
        this.cascadeDataDidUpdateEvent_(), this.predraw_(); else if ("object" == typeof b && "function" == typeof b.getColumnRange) this.parseDataTable_(b), 
        this.cascadeDataDidUpdateEvent_(), this.predraw_(); else if ("string" == typeof b) {
            var c = a.detectLineDelimiter(b);
            if (c) this.loadedEvent_(b); else {
                var d;
                d = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                var e = this;
                d.onreadystatechange = function() {
                    4 == d.readyState && (200 === d.status || 0 === d.status) && e.loadedEvent_(d.responseText);
                }, d.open("GET", b, !0), d.send(null);
            }
        } else console.error("Unknown data format: " + typeof b);
    }, a.prototype.updateOptions = function(b, c) {
        "undefined" == typeof c && (c = !1);
        var d = b.file, e = a.mapLegacyOptions_(b);
        "rollPeriod" in e && (this.rollPeriod_ = e.rollPeriod), "dateWindow" in e && (this.dateWindow_ = e.dateWindow, 
        "isZoomedIgnoreProgrammaticZoom" in e || (this.zoomed_x_ = null !== e.dateWindow)), 
        "valueRange" in e && !("isZoomedIgnoreProgrammaticZoom" in e) && (this.zoomed_y_ = null !== e.valueRange);
        var f = a.isPixelChangingOptionList(this.attr_("labels"), e);
        a.updateDeep(this.user_attrs_, e), this.attributes_.reparseSeries(), d ? (this.cascadeEvents_("dataWillUpdate", {}), 
        this.file_ = d, c || this.start_()) : c || (f ? this.predraw_() : this.renderGraph_(!1));
    }, a.mapLegacyOptions_ = function(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && "file" != c && a.hasOwnProperty(c) && (b[c] = a[c]);
        var d = function(a, c, d) {
            b.axes || (b.axes = {}), b.axes[a] || (b.axes[a] = {}), b.axes[a][c] = d;
        }, e = function(c, e, f) {
            "undefined" != typeof a[c] && (console.warn("Option " + c + " is deprecated. Use the " + f + " option for the " + e + " axis instead. (e.g. { axes : { " + e + " : { " + f + " : ... } } } (see http://dygraphs.com/per-axis.html for more information."), 
            d(e, f, a[c]), delete b[c]);
        };
        return e("xValueFormatter", "x", "valueFormatter"), e("pixelsPerXLabel", "x", "pixelsPerLabel"), 
        e("xAxisLabelFormatter", "x", "axisLabelFormatter"), e("xTicker", "x", "ticker"), 
        e("yValueFormatter", "y", "valueFormatter"), e("pixelsPerYLabel", "y", "pixelsPerLabel"), 
        e("yAxisLabelFormatter", "y", "axisLabelFormatter"), e("yTicker", "y", "ticker"), 
        e("drawXGrid", "x", "drawGrid"), e("drawXAxis", "x", "drawAxis"), e("drawYGrid", "y", "drawGrid"), 
        e("drawYAxis", "y", "drawAxis"), e("xAxisLabelWidth", "x", "axisLabelWidth"), e("yAxisLabelWidth", "y", "axisLabelWidth"), 
        b;
    }, a.prototype.resize = function(a, b) {
        if (!this.resize_lock) {
            this.resize_lock = !0, null === a != (null === b) && (console.warn("Dygraph.resize() should be called with zero parameters or two non-NULL parameters. Pretending it was zero."), 
            a = b = null);
            var c = this.width_, d = this.height_;
            a ? (this.maindiv_.style.width = a + "px", this.maindiv_.style.height = b + "px", 
            this.width_ = a, this.height_ = b) : (this.width_ = this.maindiv_.clientWidth, this.height_ = this.maindiv_.clientHeight), 
            (c != this.width_ || d != this.height_) && (this.resizeElements_(), this.predraw_()), 
            this.resize_lock = !1;
        }
    }, a.prototype.adjustRoll = function(a) {
        this.rollPeriod_ = a, this.predraw_();
    }, a.prototype.visibility = function() {
        for (this.getOption("visibility") || (this.attrs_.visibility = []); this.getOption("visibility").length < this.numColumns() - 1; ) this.attrs_.visibility.push(!0);
        return this.getOption("visibility");
    }, a.prototype.setVisibility = function(a, b) {
        var c = this.visibility();
        0 > a || a >= c.length ? console.warn("invalid series number in setVisibility: " + a) : (c[a] = b, 
        this.predraw_());
    }, a.prototype.size = function() {
        return {
            width: this.width_,
            height: this.height_
        };
    }, a.prototype.setAnnotations = function(b, c) {
        return a.addAnnotationRule(), this.annotations_ = b, this.layout_ ? (this.layout_.setAnnotations(this.annotations_), 
        void (c || this.predraw_())) : void console.warn("Tried to setAnnotations before dygraph was ready. Try setting them in a ready() block. See dygraphs.com/tests/annotation.html");
    }, a.prototype.annotations = function() {
        return this.annotations_;
    }, a.prototype.getLabels = function() {
        var a = this.attr_("labels");
        return a ? a.slice() : null;
    }, a.prototype.indexFromSetName = function(a) {
        return this.setIndexByName_[a];
    }, a.prototype.ready = function(a) {
        this.is_initial_draw_ ? this.readyFns_.push(a) : a.call(this, this);
    }, a.addAnnotationRule = function() {
        if (!a.addedAnnotationCSS) {
            var b = "border: 1px solid black; background-color: white; text-align: center;", c = document.createElement("style");
            c.type = "text/css", document.getElementsByTagName("head")[0].appendChild(c);
            for (var d = 0; d < document.styleSheets.length; d++) if (!document.styleSheets[d].disabled) {
                var e = document.styleSheets[d];
                try {
                    if (e.insertRule) {
                        var f = e.cssRules ? e.cssRules.length : 0;
                        e.insertRule(".dygraphDefaultAnnotation { " + b + " }", f);
                    } else e.addRule && e.addRule(".dygraphDefaultAnnotation", b);
                    return void (a.addedAnnotationCSS = !0);
                } catch (g) {}
            }
            console.warn("Unable to add default annotation CSS rule; display may be off.");
        }
    }, "object" == typeof exports && "undefined" != typeof module && (module.exports = a), 
    a;
}();

!function() {
    function a(a) {
        var b = c.exec(a);
        if (!b) return null;
        var d = parseInt(b[1], 10), e = parseInt(b[2], 10), f = parseInt(b[3], 10);
        return b[4] ? {
            r: d,
            g: e,
            b: f,
            a: parseFloat(b[4])
        } : {
            r: d,
            g: e,
            b: f
        };
    }
    Dygraph.LOG_SCALE = 10, Dygraph.LN_TEN = Math.log(Dygraph.LOG_SCALE), Dygraph.log10 = function(a) {
        return Math.log(a) / Dygraph.LN_TEN;
    }, Dygraph.DOTTED_LINE = [ 2, 2 ], Dygraph.DASHED_LINE = [ 7, 3 ], Dygraph.DOT_DASH_LINE = [ 7, 2, 2, 2 ], 
    Dygraph.getContext = function(a) {
        return a.getContext("2d");
    }, Dygraph.addEvent = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : (a[b + c] = function() {
            c(window.event);
        }, a.attachEvent("on" + b, a[b + c]));
    }, Dygraph.prototype.addAndTrackEvent = function(a, b, c) {
        Dygraph.addEvent(a, b, c), this.registeredEvents_.push({
            elem: a,
            type: b,
            fn: c
        });
    }, Dygraph.removeEvent = function(a, b, c) {
        if (a.removeEventListener) a.removeEventListener(b, c, !1); else {
            try {
                a.detachEvent("on" + b, a[b + c]);
            } catch (d) {}
            a[b + c] = null;
        }
    }, Dygraph.prototype.removeTrackedEvents_ = function() {
        if (this.registeredEvents_) for (var a = 0; a < this.registeredEvents_.length; a++) {
            var b = this.registeredEvents_[a];
            Dygraph.removeEvent(b.elem, b.type, b.fn);
        }
        this.registeredEvents_ = [];
    }, Dygraph.cancelEvent = function(a) {
        return a = a ? a : window.event, a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), 
        a.cancelBubble = !0, a.cancel = !0, a.returnValue = !1, !1;
    }, Dygraph.hsvToRGB = function(a, b, c) {
        var d, e, f;
        if (0 === b) d = c, e = c, f = c; else {
            var g = Math.floor(6 * a), h = 6 * a - g, i = c * (1 - b), j = c * (1 - b * h), k = c * (1 - b * (1 - h));
            switch (g) {
              case 1:
                d = j, e = c, f = i;
                break;

              case 2:
                d = i, e = c, f = k;
                break;

              case 3:
                d = i, e = j, f = c;
                break;

              case 4:
                d = k, e = i, f = c;
                break;

              case 5:
                d = c, e = i, f = j;
                break;

              case 6:
              case 0:
                d = c, e = k, f = i;
            }
        }
        return d = Math.floor(255 * d + .5), e = Math.floor(255 * e + .5), f = Math.floor(255 * f + .5), 
        "rgb(" + d + "," + e + "," + f + ")";
    }, Dygraph.findPos = function(a) {
        var b = 0, c = 0;
        if (a.offsetParent) for (var d = a; ;) {
            var e = "0", f = "0";
            if (window.getComputedStyle) {
                var g = window.getComputedStyle(d, null);
                e = g.borderLeft || "0", f = g.borderTop || "0";
            }
            if (b += parseInt(e, 10), c += parseInt(f, 10), b += d.offsetLeft, c += d.offsetTop, 
            !d.offsetParent) break;
            d = d.offsetParent;
        } else a.x && (b += a.x), a.y && (c += a.y);
        for (;a && a != document.body; ) b -= a.scrollLeft, c -= a.scrollTop, a = a.parentNode;
        return {
            x: b,
            y: c
        };
    }, Dygraph.pageX = function(a) {
        if (a.pageX) return !a.pageX || a.pageX < 0 ? 0 : a.pageX;
        var b = document.documentElement, c = document.body;
        return a.clientX + (b.scrollLeft || c.scrollLeft) - (b.clientLeft || 0);
    }, Dygraph.pageY = function(a) {
        if (a.pageY) return !a.pageY || a.pageY < 0 ? 0 : a.pageY;
        var b = document.documentElement, c = document.body;
        return a.clientY + (b.scrollTop || c.scrollTop) - (b.clientTop || 0);
    }, Dygraph.dragGetX_ = function(a, b) {
        return Dygraph.pageX(a) - b.px;
    }, Dygraph.dragGetY_ = function(a, b) {
        return Dygraph.pageY(a) - b.py;
    }, Dygraph.isOK = function(a) {
        return !!a && !isNaN(a);
    }, Dygraph.isValidPoint = function(a, b) {
        return a ? null === a.yval ? !1 : null === a.x || void 0 === a.x ? !1 : null === a.y || void 0 === a.y ? !1 : isNaN(a.x) || !b && isNaN(a.y) ? !1 : !0 : !1;
    }, Dygraph.floatFormat = function(a, b) {
        var c = Math.min(Math.max(1, b || 2), 21);
        return Math.abs(a) < .001 && 0 !== a ? a.toExponential(c - 1) : a.toPrecision(c);
    }, Dygraph.zeropad = function(a) {
        return 10 > a ? "0" + a : "" + a;
    }, Dygraph.DateAccessorsLocal = {
        getFullYear: function(a) {
            return a.getFullYear();
        },
        getMonth: function(a) {
            return a.getMonth();
        },
        getDate: function(a) {
            return a.getDate();
        },
        getHours: function(a) {
            return a.getHours();
        },
        getMinutes: function(a) {
            return a.getMinutes();
        },
        getSeconds: function(a) {
            return a.getSeconds();
        },
        getMilliseconds: function(a) {
            return a.getMilliseconds();
        },
        getDay: function(a) {
            return a.getDay();
        },
        makeDate: function(a, b, c, d, e, f, g) {
            return new Date(a, b, c, d, e, f, g);
        }
    }, Dygraph.DateAccessorsUTC = {
        getFullYear: function(a) {
            return a.getUTCFullYear();
        },
        getMonth: function(a) {
            return a.getUTCMonth();
        },
        getDate: function(a) {
            return a.getUTCDate();
        },
        getHours: function(a) {
            return a.getUTCHours();
        },
        getMinutes: function(a) {
            return a.getUTCMinutes();
        },
        getSeconds: function(a) {
            return a.getUTCSeconds();
        },
        getMilliseconds: function(a) {
            return a.getUTCMilliseconds();
        },
        getDay: function(a) {
            return a.getUTCDay();
        },
        makeDate: function(a, b, c, d, e, f, g) {
            return new Date(Date.UTC(a, b, c, d, e, f, g));
        }
    }, Dygraph.hmsString_ = function(a, b, c) {
        var d = Dygraph.zeropad, e = d(a) + ":" + d(b);
        return c && (e += ":" + d(c)), e;
    }, Dygraph.dateString_ = function(a, b) {
        var c = Dygraph.zeropad, d = b ? Dygraph.DateAccessorsUTC : Dygraph.DateAccessorsLocal, e = new Date(a), f = d.getFullYear(e), g = d.getMonth(e), h = d.getDate(e), i = d.getHours(e), j = d.getMinutes(e), k = d.getSeconds(e), l = "" + f, m = c(g + 1), n = c(h), o = 3600 * i + 60 * j + k, p = l + "/" + m + "/" + n;
        return o && (p += " " + Dygraph.hmsString_(i, j, k)), p;
    }, Dygraph.round_ = function(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c;
    }, Dygraph.binarySearch = function(a, b, c, d, e) {
        if ((null === d || void 0 === d || null === e || void 0 === e) && (d = 0, e = b.length - 1), 
        d > e) return -1;
        (null === c || void 0 === c) && (c = 0);
        var f, g = function(a) {
            return a >= 0 && a < b.length;
        }, h = parseInt((d + e) / 2, 10), i = b[h];
        return i == a ? h : i > a ? c > 0 && (f = h - 1, g(f) && b[f] < a) ? h : Dygraph.binarySearch(a, b, c, d, h - 1) : a > i ? 0 > c && (f = h + 1, 
        g(f) && b[f] > a) ? h : Dygraph.binarySearch(a, b, c, h + 1, e) : -1;
    }, Dygraph.dateParser = function(a) {
        var b, c;
        if ((-1 == a.search("-") || -1 != a.search("T") || -1 != a.search("Z")) && (c = Dygraph.dateStrToMillis(a), 
        c && !isNaN(c))) return c;
        if (-1 != a.search("-")) {
            for (b = a.replace("-", "/", "g"); -1 != b.search("-"); ) b = b.replace("-", "/");
            c = Dygraph.dateStrToMillis(b);
        } else 8 == a.length ? (b = a.substr(0, 4) + "/" + a.substr(4, 2) + "/" + a.substr(6, 2), 
        c = Dygraph.dateStrToMillis(b)) : c = Dygraph.dateStrToMillis(a);
        return (!c || isNaN(c)) && console.error("Couldn't parse " + a + " as a date"), 
        c;
    }, Dygraph.dateStrToMillis = function(a) {
        return new Date(a).getTime();
    }, Dygraph.update = function(a, b) {
        if ("undefined" != typeof b && null !== b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a;
    }, Dygraph.updateDeep = function(a, b) {
        function c(a) {
            return "object" == typeof Node ? a instanceof Node : "object" == typeof a && "number" == typeof a.nodeType && "string" == typeof a.nodeName;
        }
        if ("undefined" != typeof b && null !== b) for (var d in b) b.hasOwnProperty(d) && (null === b[d] ? a[d] = null : Dygraph.isArrayLike(b[d]) ? a[d] = b[d].slice() : c(b[d]) ? a[d] = b[d] : "object" == typeof b[d] ? (("object" != typeof a[d] || null === a[d]) && (a[d] = {}), 
        Dygraph.updateDeep(a[d], b[d])) : a[d] = b[d]);
        return a;
    }, Dygraph.isArrayLike = function(a) {
        var b = typeof a;
        return "object" != b && ("function" != b || "function" != typeof a.item) || null === a || "number" != typeof a.length || 3 === a.nodeType ? !1 : !0;
    }, Dygraph.isDateLike = function(a) {
        return "object" != typeof a || null === a || "function" != typeof a.getTime ? !1 : !0;
    }, Dygraph.clone = function(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(Dygraph.isArrayLike(a[c]) ? Dygraph.clone(a[c]) : a[c]);
        return b;
    }, Dygraph.createCanvas = function() {
        var a = document.createElement("canvas"), b = /MSIE/.test(navigator.userAgent) && !window.opera;
        return b && "undefined" != typeof G_vmlCanvasManager && (a = G_vmlCanvasManager.initElement(a)), 
        a;
    }, Dygraph.getContextPixelRatio = function(a) {
        try {
            var b = window.devicePixelRatio, c = a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1;
            return void 0 !== b ? b / c : 1;
        } catch (d) {
            return 1;
        }
    }, Dygraph.isAndroid = function() {
        return /Android/.test(navigator.userAgent);
    }, Dygraph.Iterator = function(a, b, c, d) {
        b = b || 0, c = c || a.length, this.hasNext = !0, this.peek = null, this.start_ = b, 
        this.array_ = a, this.predicate_ = d, this.end_ = Math.min(a.length, b + c), this.nextIdx_ = b - 1, 
        this.next();
    }, Dygraph.Iterator.prototype.next = function() {
        if (!this.hasNext) return null;
        for (var a = this.peek, b = this.nextIdx_ + 1, c = !1; b < this.end_; ) {
            if (!this.predicate_ || this.predicate_(this.array_, b)) {
                this.peek = this.array_[b], c = !0;
                break;
            }
            b++;
        }
        return this.nextIdx_ = b, c || (this.hasNext = !1, this.peek = null), a;
    }, Dygraph.createIterator = function(a, b, c, d) {
        return new Dygraph.Iterator(a, b, c, d);
    }, Dygraph.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
        };
    }(), Dygraph.repeatAndCleanup = function(a, b, c, d) {
        var e, f = 0, g = new Date().getTime();
        if (a(f), 1 == b) return void d();
        var h = b - 1;
        !function i() {
            f >= b || Dygraph.requestAnimFrame.call(window, function() {
                var b = new Date().getTime(), j = b - g;
                e = f, f = Math.floor(j / c);
                var k = f - e, l = f + k > h;
                l || f >= h ? (a(h), d()) : (0 !== k && a(f), i());
            });
        }();
    };
    var b = {
        annotationClickHandler: !0,
        annotationDblClickHandler: !0,
        annotationMouseOutHandler: !0,
        annotationMouseOverHandler: !0,
        axisLabelColor: !0,
        axisLineColor: !0,
        axisLineWidth: !0,
        clickCallback: !0,
        drawCallback: !0,
        drawHighlightPointCallback: !0,
        drawPoints: !0,
        drawPointCallback: !0,
        drawXGrid: !0,
        drawYGrid: !0,
        fillAlpha: !0,
        gridLineColor: !0,
        gridLineWidth: !0,
        hideOverlayOnMouseOut: !0,
        highlightCallback: !0,
        highlightCircleSize: !0,
        interactionModel: !0,
        isZoomedIgnoreProgrammaticZoom: !0,
        labelsDiv: !0,
        labelsDivStyles: !0,
        labelsDivWidth: !0,
        labelsKMB: !0,
        labelsKMG2: !0,
        labelsSeparateLines: !0,
        labelsShowZeroValues: !0,
        legend: !0,
        panEdgeFraction: !0,
        pixelsPerYLabel: !0,
        pointClickCallback: !0,
        pointSize: !0,
        rangeSelectorPlotFillColor: !0,
        rangeSelectorPlotStrokeColor: !0,
        showLabelsOnHighlight: !0,
        showRoller: !0,
        strokeWidth: !0,
        underlayCallback: !0,
        unhighlightCallback: !0,
        zoomCallback: !0
    };
    Dygraph.isPixelChangingOptionList = function(a, c) {
        var d = {};
        if (a) for (var e = 1; e < a.length; e++) d[a[e]] = !0;
        var f = function(a) {
            for (var c in a) if (a.hasOwnProperty(c) && !b[c]) return !0;
            return !1;
        };
        for (var g in c) if (c.hasOwnProperty(g)) if ("highlightSeriesOpts" == g || d[g] && !c.series) {
            if (f(c[g])) return !0;
        } else if ("series" == g || "axes" == g) {
            var h = c[g];
            for (var i in h) if (h.hasOwnProperty(i) && f(h[i])) return !0;
        } else if (!b[g]) return !0;
        return !1;
    }, Dygraph.Circles = {
        DEFAULT: function(a, b, c, d, e, f, g) {
            c.beginPath(), c.fillStyle = f, c.arc(d, e, g, 0, 2 * Math.PI, !1), c.fill();
        }
    }, Dygraph.IFrameTarp = function() {
        this.tarps = [];
    }, Dygraph.IFrameTarp.prototype.cover = function() {
        for (var a = document.getElementsByTagName("iframe"), b = 0; b < a.length; b++) {
            var c = a[b], d = Dygraph.findPos(c), e = d.x, f = d.y, g = c.offsetWidth, h = c.offsetHeight, i = document.createElement("div");
            i.style.position = "absolute", i.style.left = e + "px", i.style.top = f + "px", 
            i.style.width = g + "px", i.style.height = h + "px", i.style.zIndex = 999, document.body.appendChild(i), 
            this.tarps.push(i);
        }
    }, Dygraph.IFrameTarp.prototype.uncover = function() {
        for (var a = 0; a < this.tarps.length; a++) this.tarps[a].parentNode.removeChild(this.tarps[a]);
        this.tarps = [];
    }, Dygraph.detectLineDelimiter = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a.charAt(b);
            if ("\r" === c) return b + 1 < a.length && "\n" === a.charAt(b + 1) ? "\r\n" : c;
            if ("\n" === c) return b + 1 < a.length && "\r" === a.charAt(b + 1) ? "\n\r" : c;
        }
        return null;
    }, Dygraph.isNodeContainedBy = function(a, b) {
        if (null === b || null === a) return !1;
        for (var c = a; c && c !== b; ) c = c.parentNode;
        return c === b;
    }, Dygraph.pow = function(a, b) {
        return 0 > b ? 1 / Math.pow(a, -b) : Math.pow(a, b);
    };
    var c = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*([01](?:\.\d+)?))?\)$/;
    Dygraph.toRGB_ = function(b) {
        var c = a(b);
        if (c) return c;
        var d = document.createElement("div");
        d.style.backgroundColor = b, d.style.visibility = "hidden", document.body.appendChild(d);
        var e;
        return e = window.getComputedStyle ? window.getComputedStyle(d, null).backgroundColor : d.currentStyle.backgroundColor, 
        document.body.removeChild(d), a(e);
    }, Dygraph.isCanvasSupported = function(a) {
        var b;
        try {
            b = a || document.createElement("canvas"), b.getContext("2d");
        } catch (c) {
            var d = navigator.appVersion.match(/MSIE (\d\.\d)/), e = -1 != navigator.userAgent.toLowerCase().indexOf("opera");
            return !d || d[1] < 6 || e ? !1 : !0;
        }
        return !0;
    }, Dygraph.parseFloat_ = function(a, b, c) {
        var d = parseFloat(a);
        if (!isNaN(d)) return d;
        if (/^ *$/.test(a)) return null;
        if (/^ *nan *$/i.test(a)) return 0 / 0;
        var e = "Unable to parse '" + a + "' as a number";
        return void 0 !== c && void 0 !== b && (e += " on line " + (1 + (b || 0)) + " ('" + c + "') of CSV."), 
        console.error(e), null;
    };
}(), function() {
    Dygraph.GVizChart = function(a) {
        this.container = a;
    }, Dygraph.GVizChart.prototype.draw = function(a, b) {
        this.container.innerHTML = "", "undefined" != typeof this.date_graph && this.date_graph.destroy(), 
        this.date_graph = new Dygraph(this.container, a, b);
    }, Dygraph.GVizChart.prototype.setSelection = function(a) {
        var b = !1;
        a.length && (b = a[0].row), this.date_graph.setSelection(b);
    }, Dygraph.GVizChart.prototype.getSelection = function() {
        var a = [], b = this.date_graph.getSelection();
        if (0 > b) return a;
        for (var c = this.date_graph.layout_.points, d = 0; d < c.length; ++d) a.push({
            row: b,
            column: d + 1
        });
        return a;
    };
}(), function() {
    var a = 100;
    Dygraph.Interaction = {}, Dygraph.Interaction.maybeTreatMouseOpAsClick = function(a, b, c) {
        c.dragEndX = Dygraph.dragGetX_(a, c), c.dragEndY = Dygraph.dragGetY_(a, c);
        var d = Math.abs(c.dragEndX - c.dragStartX), e = Math.abs(c.dragEndY - c.dragStartY);
        2 > d && 2 > e && void 0 !== b.lastx_ && -1 != b.lastx_ && Dygraph.Interaction.treatMouseOpAsClick(b, a, c), 
        c.regionWidth = d, c.regionHeight = e;
    }, Dygraph.Interaction.startPan = function(a, b, c) {
        var d, e;
        c.isPanning = !0;
        var f = b.xAxisRange();
        if (b.getOptionForAxis("logscale", "x") ? (c.initialLeftmostDate = Dygraph.log10(f[0]), 
        c.dateRange = Dygraph.log10(f[1]) - Dygraph.log10(f[0])) : (c.initialLeftmostDate = f[0], 
        c.dateRange = f[1] - f[0]), c.xUnitsPerPixel = c.dateRange / (b.plotter_.area.w - 1), 
        b.getNumericOption("panEdgeFraction")) {
            var g = b.width_ * b.getNumericOption("panEdgeFraction"), h = b.xAxisExtremes(), i = b.toDomXCoord(h[0]) - g, j = b.toDomXCoord(h[1]) + g, k = b.toDataXCoord(i), l = b.toDataXCoord(j);
            c.boundedDates = [ k, l ];
            var m = [], n = b.height_ * b.getNumericOption("panEdgeFraction");
            for (d = 0; d < b.axes_.length; d++) {
                e = b.axes_[d];
                var o = e.extremeRange, p = b.toDomYCoord(o[0], d) + n, q = b.toDomYCoord(o[1], d) - n, r = b.toDataYCoord(p, d), s = b.toDataYCoord(q, d);
                m[d] = [ r, s ];
            }
            c.boundedValues = m;
        }
        for (c.is2DPan = !1, c.axes = [], d = 0; d < b.axes_.length; d++) {
            e = b.axes_[d];
            var t = {}, u = b.yAxisRange(d), v = b.attributes_.getForAxis("logscale", d);
            v ? (t.initialTopValue = Dygraph.log10(u[1]), t.dragValueRange = Dygraph.log10(u[1]) - Dygraph.log10(u[0])) : (t.initialTopValue = u[1], 
            t.dragValueRange = u[1] - u[0]), t.unitsPerPixel = t.dragValueRange / (b.plotter_.area.h - 1), 
            c.axes.push(t), (e.valueWindow || e.valueRange) && (c.is2DPan = !0);
        }
    }, Dygraph.Interaction.movePan = function(a, b, c) {
        c.dragEndX = Dygraph.dragGetX_(a, c), c.dragEndY = Dygraph.dragGetY_(a, c);
        var d = c.initialLeftmostDate - (c.dragEndX - c.dragStartX) * c.xUnitsPerPixel;
        c.boundedDates && (d = Math.max(d, c.boundedDates[0]));
        var e = d + c.dateRange;
        if (c.boundedDates && e > c.boundedDates[1] && (d -= e - c.boundedDates[1], e = d + c.dateRange), 
        b.dateWindow_ = b.getOptionForAxis("logscale", "x") ? [ Math.pow(Dygraph.LOG_SCALE, d), Math.pow(Dygraph.LOG_SCALE, e) ] : [ d, e ], 
        c.is2DPan) for (var f = c.dragEndY - c.dragStartY, g = 0; g < b.axes_.length; g++) {
            var h = b.axes_[g], i = c.axes[g], j = f * i.unitsPerPixel, k = c.boundedValues ? c.boundedValues[g] : null, l = i.initialTopValue + j;
            k && (l = Math.min(l, k[1]));
            var m = l - i.dragValueRange;
            k && m < k[0] && (l -= m - k[0], m = l - i.dragValueRange), h.valueWindow = b.attributes_.getForAxis("logscale", g) ? [ Math.pow(Dygraph.LOG_SCALE, m), Math.pow(Dygraph.LOG_SCALE, l) ] : [ m, l ];
        }
        b.drawGraph_(!1);
    }, Dygraph.Interaction.endPan = Dygraph.Interaction.maybeTreatMouseOpAsClick, Dygraph.Interaction.startZoom = function(a, b, c) {
        c.isZooming = !0, c.zoomMoved = !1;
    }, Dygraph.Interaction.moveZoom = function(a, b, c) {
        c.zoomMoved = !0, c.dragEndX = Dygraph.dragGetX_(a, c), c.dragEndY = Dygraph.dragGetY_(a, c);
        var d = Math.abs(c.dragStartX - c.dragEndX), e = Math.abs(c.dragStartY - c.dragEndY);
        c.dragDirection = e / 2 > d ? Dygraph.VERTICAL : Dygraph.HORIZONTAL, b.drawZoomRect_(c.dragDirection, c.dragStartX, c.dragEndX, c.dragStartY, c.dragEndY, c.prevDragDirection, c.prevEndX, c.prevEndY), 
        c.prevEndX = c.dragEndX, c.prevEndY = c.dragEndY, c.prevDragDirection = c.dragDirection;
    }, Dygraph.Interaction.treatMouseOpAsClick = function(a, b, c) {
        for (var d = a.getFunctionOption("clickCallback"), e = a.getFunctionOption("pointClickCallback"), f = null, g = -1, h = Number.MAX_VALUE, i = 0; i < a.selPoints_.length; i++) {
            var j = a.selPoints_[i], k = Math.pow(j.canvasx - c.dragEndX, 2) + Math.pow(j.canvasy - c.dragEndY, 2);
            !isNaN(k) && (-1 == g || h > k) && (h = k, g = i);
        }
        var l = a.getNumericOption("highlightCircleSize") + 2;
        if (l * l >= h && (f = a.selPoints_[g]), f) {
            var m = {
                cancelable: !0,
                point: f,
                canvasx: c.dragEndX,
                canvasy: c.dragEndY
            }, n = a.cascadeEvents_("pointClick", m);
            if (n) return;
            e && e.call(a, b, f);
        }
        var m = {
            cancelable: !0,
            xval: a.lastx_,
            pts: a.selPoints_,
            canvasx: c.dragEndX,
            canvasy: c.dragEndY
        };
        a.cascadeEvents_("click", m) || d && d.call(a, b, a.lastx_, a.selPoints_);
    }, Dygraph.Interaction.endZoom = function(a, b, c) {
        b.clearZoomRect_(), c.isZooming = !1, Dygraph.Interaction.maybeTreatMouseOpAsClick(a, b, c);
        var d = b.getArea();
        if (c.regionWidth >= 10 && c.dragDirection == Dygraph.HORIZONTAL) {
            var e = Math.min(c.dragStartX, c.dragEndX), f = Math.max(c.dragStartX, c.dragEndX);
            e = Math.max(e, d.x), f = Math.min(f, d.x + d.w), f > e && b.doZoomX_(e, f), c.cancelNextDblclick = !0;
        } else if (c.regionHeight >= 10 && c.dragDirection == Dygraph.VERTICAL) {
            var g = Math.min(c.dragStartY, c.dragEndY), h = Math.max(c.dragStartY, c.dragEndY);
            g = Math.max(g, d.y), h = Math.min(h, d.y + d.h), h > g && b.doZoomY_(g, h), c.cancelNextDblclick = !0;
        }
        c.dragStartX = null, c.dragStartY = null;
    }, Dygraph.Interaction.startTouch = function(a, b, c) {
        a.preventDefault(), a.touches.length > 1 && (c.startTimeForDoubleTapMs = null);
        for (var d = [], e = 0; e < a.touches.length; e++) {
            var f = a.touches[e];
            d.push({
                pageX: f.pageX,
                pageY: f.pageY,
                dataX: b.toDataXCoord(f.pageX),
                dataY: b.toDataYCoord(f.pageY)
            });
        }
        if (c.initialTouches = d, 1 == d.length) c.initialPinchCenter = d[0], c.touchDirections = {
            x: !0,
            y: !0
        }; else if (d.length >= 2) {
            c.initialPinchCenter = {
                pageX: .5 * (d[0].pageX + d[1].pageX),
                pageY: .5 * (d[0].pageY + d[1].pageY),
                dataX: .5 * (d[0].dataX + d[1].dataX),
                dataY: .5 * (d[0].dataY + d[1].dataY)
            };
            var g = 180 / Math.PI * Math.atan2(c.initialPinchCenter.pageY - d[0].pageY, d[0].pageX - c.initialPinchCenter.pageX);
            g = Math.abs(g), g > 90 && (g = 90 - g), c.touchDirections = {
                x: 67.5 > g,
                y: g > 22.5
            };
        }
        c.initialRange = {
            x: b.xAxisRange(),
            y: b.yAxisRange()
        };
    }, Dygraph.Interaction.moveTouch = function(a, b, c) {
        c.startTimeForDoubleTapMs = null;
        var d, e = [];
        for (d = 0; d < a.touches.length; d++) {
            var f = a.touches[d];
            e.push({
                pageX: f.pageX,
                pageY: f.pageY
            });
        }
        var g, h = c.initialTouches, i = c.initialPinchCenter;
        g = 1 == e.length ? e[0] : {
            pageX: .5 * (e[0].pageX + e[1].pageX),
            pageY: .5 * (e[0].pageY + e[1].pageY)
        };
        var j = {
            pageX: g.pageX - i.pageX,
            pageY: g.pageY - i.pageY
        }, k = c.initialRange.x[1] - c.initialRange.x[0], l = c.initialRange.y[0] - c.initialRange.y[1];
        j.dataX = j.pageX / b.plotter_.area.w * k, j.dataY = j.pageY / b.plotter_.area.h * l;
        var m, n;
        if (1 == e.length) m = 1, n = 1; else if (e.length >= 2) {
            var o = h[1].pageX - i.pageX;
            m = (e[1].pageX - g.pageX) / o;
            var p = h[1].pageY - i.pageY;
            n = (e[1].pageY - g.pageY) / p;
        }
        m = Math.min(8, Math.max(.125, m)), n = Math.min(8, Math.max(.125, n));
        var q = !1;
        if (c.touchDirections.x && (b.dateWindow_ = [ i.dataX - j.dataX + (c.initialRange.x[0] - i.dataX) / m, i.dataX - j.dataX + (c.initialRange.x[1] - i.dataX) / m ], 
        q = !0), c.touchDirections.y) for (d = 0; 1 > d; d++) {
            var r = b.axes_[d], s = b.attributes_.getForAxis("logscale", d);
            s || (r.valueWindow = [ i.dataY - j.dataY + (c.initialRange.y[0] - i.dataY) / n, i.dataY - j.dataY + (c.initialRange.y[1] - i.dataY) / n ], 
            q = !0);
        }
        if (b.drawGraph_(!1), q && e.length > 1 && b.getFunctionOption("zoomCallback")) {
            var t = b.xAxisRange();
            b.getFunctionOption("zoomCallback").call(b, t[0], t[1], b.yAxisRanges());
        }
    }, Dygraph.Interaction.endTouch = function(a, b, c) {
        if (0 !== a.touches.length) Dygraph.Interaction.startTouch(a, b, c); else if (1 == a.changedTouches.length) {
            var d = new Date().getTime(), e = a.changedTouches[0];
            c.startTimeForDoubleTapMs && d - c.startTimeForDoubleTapMs < 500 && c.doubleTapX && Math.abs(c.doubleTapX - e.screenX) < 50 && c.doubleTapY && Math.abs(c.doubleTapY - e.screenY) < 50 ? b.resetZoom() : (c.startTimeForDoubleTapMs = d, 
            c.doubleTapX = e.screenX, c.doubleTapY = e.screenY);
        }
    };
    var b = function(a, b, c) {
        return b > a ? b - a : a > c ? a - c : 0;
    }, c = function(a, c) {
        var d = Dygraph.findPos(c.canvas_), e = {
            left: d.x,
            right: d.x + c.canvas_.offsetWidth,
            top: d.y,
            bottom: d.y + c.canvas_.offsetHeight
        }, f = {
            x: Dygraph.pageX(a),
            y: Dygraph.pageY(a)
        }, g = b(f.x, e.left, e.right), h = b(f.y, e.top, e.bottom);
        return Math.max(g, h);
    };
    Dygraph.Interaction.defaultModel = {
        mousedown: function(b, d, e) {
            if (!b.button || 2 != b.button) {
                e.initializeMouseDown(b, d, e), b.altKey || b.shiftKey ? Dygraph.startPan(b, d, e) : Dygraph.startZoom(b, d, e);
                var f = function(b) {
                    if (e.isZooming) {
                        var f = c(b, d);
                        a > f ? Dygraph.moveZoom(b, d, e) : null !== e.dragEndX && (e.dragEndX = null, e.dragEndY = null, 
                        d.clearZoomRect_());
                    } else e.isPanning && Dygraph.movePan(b, d, e);
                }, g = function(a) {
                    e.isZooming ? null !== e.dragEndX ? Dygraph.endZoom(a, d, e) : Dygraph.Interaction.maybeTreatMouseOpAsClick(a, d, e) : e.isPanning && Dygraph.endPan(a, d, e), 
                    Dygraph.removeEvent(document, "mousemove", f), Dygraph.removeEvent(document, "mouseup", g), 
                    e.destroy();
                };
                d.addAndTrackEvent(document, "mousemove", f), d.addAndTrackEvent(document, "mouseup", g);
            }
        },
        willDestroyContextMyself: !0,
        touchstart: function(a, b, c) {
            Dygraph.Interaction.startTouch(a, b, c);
        },
        touchmove: function(a, b, c) {
            Dygraph.Interaction.moveTouch(a, b, c);
        },
        touchend: function(a, b, c) {
            Dygraph.Interaction.endTouch(a, b, c);
        },
        dblclick: function(a, b, c) {
            if (c.cancelNextDblclick) return void (c.cancelNextDblclick = !1);
            var d = {
                canvasx: c.dragEndX,
                canvasy: c.dragEndY
            };
            b.cascadeEvents_("dblclick", d) || a.altKey || a.shiftKey || b.resetZoom();
        }
    }, Dygraph.DEFAULT_ATTRS.interactionModel = Dygraph.Interaction.defaultModel, Dygraph.defaultInteractionModel = Dygraph.Interaction.defaultModel, 
    Dygraph.endZoom = Dygraph.Interaction.endZoom, Dygraph.moveZoom = Dygraph.Interaction.moveZoom, 
    Dygraph.startZoom = Dygraph.Interaction.startZoom, Dygraph.endPan = Dygraph.Interaction.endPan, 
    Dygraph.movePan = Dygraph.Interaction.movePan, Dygraph.startPan = Dygraph.Interaction.startPan, 
    Dygraph.Interaction.nonInteractiveModel_ = {
        mousedown: function(a, b, c) {
            c.initializeMouseDown(a, b, c);
        },
        mouseup: Dygraph.Interaction.maybeTreatMouseOpAsClick
    }, Dygraph.Interaction.dragIsPanInteractionModel = {
        mousedown: function(a, b, c) {
            c.initializeMouseDown(a, b, c), Dygraph.startPan(a, b, c);
        },
        mousemove: function(a, b, c) {
            c.isPanning && Dygraph.movePan(a, b, c);
        },
        mouseup: function(a, b, c) {
            c.isPanning && Dygraph.endPan(a, b, c);
        }
    };
}(), function() {
    Dygraph.TickList = void 0, Dygraph.Ticker = void 0, Dygraph.numericLinearTicks = function(a, b, c, d, e, f) {
        var g = function(a) {
            return "logscale" === a ? !1 : d(a);
        };
        return Dygraph.numericTicks(a, b, c, g, e, f);
    }, Dygraph.numericTicks = function(a, b, c, d, e, f) {
        var g, h, i, j, k = d("pixelsPerLabel"), l = [];
        if (f) for (g = 0; g < f.length; g++) l.push({
            v: f[g]
        }); else {
            if (d("logscale")) {
                j = Math.floor(c / k);
                var m = Dygraph.binarySearch(a, Dygraph.PREFERRED_LOG_TICK_VALUES, 1), n = Dygraph.binarySearch(b, Dygraph.PREFERRED_LOG_TICK_VALUES, -1);
                -1 == m && (m = 0), -1 == n && (n = Dygraph.PREFERRED_LOG_TICK_VALUES.length - 1);
                var o = null;
                if (n - m >= j / 4) {
                    for (var p = n; p >= m; p--) {
                        var q = Dygraph.PREFERRED_LOG_TICK_VALUES[p], r = Math.log(q / a) / Math.log(b / a) * c, s = {
                            v: q
                        };
                        null === o ? o = {
                            tickValue: q,
                            pixel_coord: r
                        } : Math.abs(r - o.pixel_coord) >= k ? o = {
                            tickValue: q,
                            pixel_coord: r
                        } : s.label = "", l.push(s);
                    }
                    l.reverse();
                }
            }
            if (0 === l.length) {
                var t, u, v = d("labelsKMG2");
                v ? (t = [ 1, 2, 4, 8, 16, 32, 64, 128, 256 ], u = 16) : (t = [ 1, 2, 5, 10, 20, 50, 100 ], 
                u = 10);
                var w, x, y, z, A = Math.ceil(c / k), B = Math.abs(b - a) / A, C = Math.floor(Math.log(B) / Math.log(u)), D = Math.pow(u, C);
                for (h = 0; h < t.length && (w = D * t[h], x = Math.floor(a / w) * w, y = Math.ceil(b / w) * w, 
                j = Math.abs(y - x) / w, z = c / j, !(z > k)); h++) ;
                for (x > y && (w *= -1), g = 0; j >= g; g++) i = x + g * w, l.push({
                    v: i
                });
            }
        }
        var E = d("axisLabelFormatter");
        for (g = 0; g < l.length; g++) void 0 === l[g].label && (l[g].label = E.call(e, l[g].v, 0, d, e));
        return l;
    }, Dygraph.dateTicker = function(a, b, c, d, e) {
        var f = Dygraph.pickDateTickGranularity(a, b, c, d);
        return f >= 0 ? Dygraph.getDateAxis(a, b, f, d, e) : [];
    }, Dygraph.SECONDLY = 0, Dygraph.TWO_SECONDLY = 1, Dygraph.FIVE_SECONDLY = 2, Dygraph.TEN_SECONDLY = 3, 
    Dygraph.THIRTY_SECONDLY = 4, Dygraph.MINUTELY = 5, Dygraph.TWO_MINUTELY = 6, Dygraph.FIVE_MINUTELY = 7, 
    Dygraph.TEN_MINUTELY = 8, Dygraph.THIRTY_MINUTELY = 9, Dygraph.HOURLY = 10, Dygraph.TWO_HOURLY = 11, 
    Dygraph.SIX_HOURLY = 12, Dygraph.DAILY = 13, Dygraph.TWO_DAILY = 14, Dygraph.WEEKLY = 15, 
    Dygraph.MONTHLY = 16, Dygraph.QUARTERLY = 17, Dygraph.BIANNUAL = 18, Dygraph.ANNUAL = 19, 
    Dygraph.DECADAL = 20, Dygraph.CENTENNIAL = 21, Dygraph.NUM_GRANULARITIES = 22, Dygraph.DATEFIELD_Y = 0, 
    Dygraph.DATEFIELD_M = 1, Dygraph.DATEFIELD_D = 2, Dygraph.DATEFIELD_HH = 3, Dygraph.DATEFIELD_MM = 4, 
    Dygraph.DATEFIELD_SS = 5, Dygraph.DATEFIELD_MS = 6, Dygraph.NUM_DATEFIELDS = 7, 
    Dygraph.TICK_PLACEMENT = [], Dygraph.TICK_PLACEMENT[Dygraph.SECONDLY] = {
        datefield: Dygraph.DATEFIELD_SS,
        step: 1,
        spacing: 1e3
    }, Dygraph.TICK_PLACEMENT[Dygraph.TWO_SECONDLY] = {
        datefield: Dygraph.DATEFIELD_SS,
        step: 2,
        spacing: 2e3
    }, Dygraph.TICK_PLACEMENT[Dygraph.FIVE_SECONDLY] = {
        datefield: Dygraph.DATEFIELD_SS,
        step: 5,
        spacing: 5e3
    }, Dygraph.TICK_PLACEMENT[Dygraph.TEN_SECONDLY] = {
        datefield: Dygraph.DATEFIELD_SS,
        step: 10,
        spacing: 1e4
    }, Dygraph.TICK_PLACEMENT[Dygraph.THIRTY_SECONDLY] = {
        datefield: Dygraph.DATEFIELD_SS,
        step: 30,
        spacing: 3e4
    }, Dygraph.TICK_PLACEMENT[Dygraph.MINUTELY] = {
        datefield: Dygraph.DATEFIELD_MM,
        step: 1,
        spacing: 6e4
    }, Dygraph.TICK_PLACEMENT[Dygraph.TWO_MINUTELY] = {
        datefield: Dygraph.DATEFIELD_MM,
        step: 2,
        spacing: 12e4
    }, Dygraph.TICK_PLACEMENT[Dygraph.FIVE_MINUTELY] = {
        datefield: Dygraph.DATEFIELD_MM,
        step: 5,
        spacing: 3e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.TEN_MINUTELY] = {
        datefield: Dygraph.DATEFIELD_MM,
        step: 10,
        spacing: 6e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.THIRTY_MINUTELY] = {
        datefield: Dygraph.DATEFIELD_MM,
        step: 30,
        spacing: 18e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.HOURLY] = {
        datefield: Dygraph.DATEFIELD_HH,
        step: 1,
        spacing: 36e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.TWO_HOURLY] = {
        datefield: Dygraph.DATEFIELD_HH,
        step: 2,
        spacing: 72e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.SIX_HOURLY] = {
        datefield: Dygraph.DATEFIELD_HH,
        step: 6,
        spacing: 216e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.DAILY] = {
        datefield: Dygraph.DATEFIELD_D,
        step: 1,
        spacing: 864e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.TWO_DAILY] = {
        datefield: Dygraph.DATEFIELD_D,
        step: 2,
        spacing: 1728e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.WEEKLY] = {
        datefield: Dygraph.DATEFIELD_D,
        step: 7,
        spacing: 6048e5
    }, Dygraph.TICK_PLACEMENT[Dygraph.MONTHLY] = {
        datefield: Dygraph.DATEFIELD_M,
        step: 1,
        spacing: 2629817280
    }, Dygraph.TICK_PLACEMENT[Dygraph.QUARTERLY] = {
        datefield: Dygraph.DATEFIELD_M,
        step: 3,
        spacing: 216e5 * 365.2524
    }, Dygraph.TICK_PLACEMENT[Dygraph.BIANNUAL] = {
        datefield: Dygraph.DATEFIELD_M,
        step: 6,
        spacing: 432e5 * 365.2524
    }, Dygraph.TICK_PLACEMENT[Dygraph.ANNUAL] = {
        datefield: Dygraph.DATEFIELD_Y,
        step: 1,
        spacing: 864e5 * 365.2524
    }, Dygraph.TICK_PLACEMENT[Dygraph.DECADAL] = {
        datefield: Dygraph.DATEFIELD_Y,
        step: 10,
        spacing: 315578073600
    }, Dygraph.TICK_PLACEMENT[Dygraph.CENTENNIAL] = {
        datefield: Dygraph.DATEFIELD_Y,
        step: 100,
        spacing: 3155780736e3
    }, Dygraph.PREFERRED_LOG_TICK_VALUES = function() {
        for (var a = [], b = -39; 39 >= b; b++) for (var c = Math.pow(10, b), d = 1; 9 >= d; d++) {
            var e = c * d;
            a.push(e);
        }
        return a;
    }(), Dygraph.pickDateTickGranularity = function(a, b, c, d) {
        for (var e = d("pixelsPerLabel"), f = 0; f < Dygraph.NUM_GRANULARITIES; f++) {
            var g = Dygraph.numDateTicks(a, b, f);
            if (c / g >= e) return f;
        }
        return -1;
    }, Dygraph.numDateTicks = function(a, b, c) {
        var d = Dygraph.TICK_PLACEMENT[c].spacing;
        return Math.round(1 * (b - a) / d);
    }, Dygraph.getDateAxis = function(a, b, c, d, e) {
        var f = d("axisLabelFormatter"), g = d("labelsUTC"), h = g ? Dygraph.DateAccessorsUTC : Dygraph.DateAccessorsLocal, i = Dygraph.TICK_PLACEMENT[c].datefield, j = Dygraph.TICK_PLACEMENT[c].step, k = Dygraph.TICK_PLACEMENT[c].spacing, l = new Date(a), m = [];
        m[Dygraph.DATEFIELD_Y] = h.getFullYear(l), m[Dygraph.DATEFIELD_M] = h.getMonth(l), 
        m[Dygraph.DATEFIELD_D] = h.getDate(l), m[Dygraph.DATEFIELD_HH] = h.getHours(l), 
        m[Dygraph.DATEFIELD_MM] = h.getMinutes(l), m[Dygraph.DATEFIELD_SS] = h.getSeconds(l), 
        m[Dygraph.DATEFIELD_MS] = h.getMilliseconds(l);
        var n = m[i] % j;
        c == Dygraph.WEEKLY && (n = h.getDay(l)), m[i] -= n;
        for (var o = i + 1; o < Dygraph.NUM_DATEFIELDS; o++) m[o] = o === Dygraph.DATEFIELD_D ? 1 : 0;
        var p = [], q = h.makeDate.apply(null, m), r = q.getTime();
        if (c <= Dygraph.HOURLY) for (a > r && (r += k, q = new Date(r)); b >= r; ) p.push({
            v: r,
            label: f.call(e, q, c, d, e)
        }), r += k, q = new Date(r); else for (a > r && (m[i] += j, q = h.makeDate.apply(null, m), 
        r = q.getTime()); b >= r; ) (c >= Dygraph.DAILY || h.getHours(q) % j === 0) && p.push({
            v: r,
            label: f.call(e, q, c, d, e)
        }), m[i] += j, q = h.makeDate.apply(null, m), r = q.getTime();
        return p;
    }, Dygraph && Dygraph.DEFAULT_ATTRS && Dygraph.DEFAULT_ATTRS.axes && Dygraph.DEFAULT_ATTRS.axes.x && Dygraph.DEFAULT_ATTRS.axes.y && Dygraph.DEFAULT_ATTRS.axes.y2 && (Dygraph.DEFAULT_ATTRS.axes.x.ticker = Dygraph.dateTicker, 
    Dygraph.DEFAULT_ATTRS.axes.y.ticker = Dygraph.numericTicks, Dygraph.DEFAULT_ATTRS.axes.y2.ticker = Dygraph.numericTicks);
}(), Dygraph.Plugins = {}, Dygraph.Plugins.Annotations = function() {
    var a = function() {
        this.annotations_ = [];
    };
    return a.prototype.toString = function() {
        return "Annotations Plugin";
    }, a.prototype.activate = function() {
        return {
            clearChart: this.clearChart,
            didDrawChart: this.didDrawChart
        };
    }, a.prototype.detachLabels = function() {
        for (var a = 0; a < this.annotations_.length; a++) {
            var b = this.annotations_[a];
            b.parentNode && b.parentNode.removeChild(b), this.annotations_[a] = null;
        }
        this.annotations_ = [];
    }, a.prototype.clearChart = function() {
        this.detachLabels();
    }, a.prototype.didDrawChart = function(a) {
        var b = a.dygraph, c = b.layout_.annotated_points;
        if (c && 0 !== c.length) for (var d = a.canvas.parentNode, e = {
            position: "absolute",
            fontSize: b.getOption("axisLabelFontSize") + "px",
            zIndex: 10,
            overflow: "hidden"
        }, f = function(a, c, d) {
            return function(e) {
                var f = d.annotation;
                f.hasOwnProperty(a) ? f[a](f, d, b, e) : b.getOption(c) && b.getOption(c)(f, d, b, e);
            };
        }, g = a.dygraph.plotter_.area, h = {}, i = 0; i < c.length; i++) {
            var j = c[i];
            if (!(j.canvasx < g.x || j.canvasx > g.x + g.w || j.canvasy < g.y || j.canvasy > g.y + g.h)) {
                var k = j.annotation, l = 6;
                k.hasOwnProperty("tickHeight") && (l = k.tickHeight);
                var m = document.createElement("div");
                for (var n in e) e.hasOwnProperty(n) && (m.style[n] = e[n]);
                k.hasOwnProperty("icon") || (m.className = "dygraphDefaultAnnotation"), k.hasOwnProperty("cssClass") && (m.className += " " + k.cssClass);
                var o = k.hasOwnProperty("width") ? k.width : 16, p = k.hasOwnProperty("height") ? k.height : 16;
                if (k.hasOwnProperty("icon")) {
                    var q = document.createElement("img");
                    q.src = k.icon, q.width = o, q.height = p, m.appendChild(q);
                } else j.annotation.hasOwnProperty("shortText") && m.appendChild(document.createTextNode(j.annotation.shortText));
                var r = j.canvasx - o / 2;
                m.style.left = r + "px";
                var s = 0;
                if (k.attachAtBottom) {
                    var t = g.y + g.h - p - l;
                    h[r] ? t -= h[r] : h[r] = 0, h[r] += l + p, s = t;
                } else s = j.canvasy - p - l;
                m.style.top = s + "px", m.style.width = o + "px", m.style.height = p + "px", m.title = j.annotation.text, 
                m.style.color = b.colorsMap_[j.name], m.style.borderColor = b.colorsMap_[j.name], 
                k.div = m, b.addAndTrackEvent(m, "click", f("clickHandler", "annotationClickHandler", j, this)), 
                b.addAndTrackEvent(m, "mouseover", f("mouseOverHandler", "annotationMouseOverHandler", j, this)), 
                b.addAndTrackEvent(m, "mouseout", f("mouseOutHandler", "annotationMouseOutHandler", j, this)), 
                b.addAndTrackEvent(m, "dblclick", f("dblClickHandler", "annotationDblClickHandler", j, this)), 
                d.appendChild(m), this.annotations_.push(m);
                var u = a.drawingContext;
                if (u.save(), u.strokeStyle = b.colorsMap_[j.name], u.beginPath(), k.attachAtBottom) {
                    var t = s + p;
                    u.moveTo(j.canvasx, t), u.lineTo(j.canvasx, t + l);
                } else u.moveTo(j.canvasx, j.canvasy), u.lineTo(j.canvasx, j.canvasy - 2 - l);
                u.closePath(), u.stroke(), u.restore();
            }
        }
    }, a.prototype.destroy = function() {
        this.detachLabels();
    }, a;
}(), Dygraph.Plugins.Axes = function() {
    var a = function() {
        this.xlabels_ = [], this.ylabels_ = [];
    };
    return a.prototype.toString = function() {
        return "Axes Plugin";
    }, a.prototype.activate = function() {
        return {
            layout: this.layout,
            clearChart: this.clearChart,
            willDrawChart: this.willDrawChart
        };
    }, a.prototype.layout = function(a) {
        var b = a.dygraph;
        if (b.getOptionForAxis("drawAxis", "y")) {
            var c = b.getOptionForAxis("axisLabelWidth", "y") + 2 * b.getOptionForAxis("axisTickSize", "y");
            a.reserveSpaceLeft(c);
        }
        if (b.getOptionForAxis("drawAxis", "x")) {
            var d;
            d = b.getOption("xAxisHeight") ? b.getOption("xAxisHeight") : b.getOptionForAxis("axisLabelFontSize", "x") + 2 * b.getOptionForAxis("axisTickSize", "x"), 
            a.reserveSpaceBottom(d);
        }
        if (2 == b.numAxes()) {
            if (b.getOptionForAxis("drawAxis", "y2")) {
                var c = b.getOptionForAxis("axisLabelWidth", "y2") + 2 * b.getOptionForAxis("axisTickSize", "y2");
                a.reserveSpaceRight(c);
            }
        } else b.numAxes() > 2 && b.error("Only two y-axes are supported at this time. (Trying to use " + b.numAxes() + ")");
    }, a.prototype.detachLabels = function() {
        function a(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c.parentNode && c.parentNode.removeChild(c);
            }
        }
        a(this.xlabels_), a(this.ylabels_), this.xlabels_ = [], this.ylabels_ = [];
    }, a.prototype.clearChart = function() {
        this.detachLabels();
    }, a.prototype.willDrawChart = function(a) {
        function b(a) {
            return Math.round(a) + .5;
        }
        function c(a) {
            return Math.round(a) - .5;
        }
        var d = a.dygraph;
        if (d.getOptionForAxis("drawAxis", "x") || d.getOptionForAxis("drawAxis", "y") || d.getOptionForAxis("drawAxis", "y2")) {
            var e, f, g, h, i, j = a.drawingContext, k = a.canvas.parentNode, l = d.width_, m = d.height_, n = function(a) {
                return {
                    position: "absolute",
                    fontSize: d.getOptionForAxis("axisLabelFontSize", a) + "px",
                    zIndex: 10,
                    color: d.getOptionForAxis("axisLabelColor", a),
                    width: d.getOptionForAxis("axisLabelWidth", a) + "px",
                    lineHeight: "normal",
                    overflow: "hidden"
                };
            }, o = {
                x: n("x"),
                y: n("y"),
                y2: n("y2")
            }, p = function(a, b, c) {
                var d = document.createElement("div"), e = o["y2" == c ? "y2" : b];
                for (var f in e) e.hasOwnProperty(f) && (d.style[f] = e[f]);
                var g = document.createElement("div");
                return g.className = "dygraph-axis-label dygraph-axis-label-" + b + (c ? " dygraph-axis-label-" + c : ""), 
                g.innerHTML = a, d.appendChild(g), d;
            };
            j.save();
            var q = d.layout_, r = a.dygraph.plotter_.area, s = function(a) {
                return function(b) {
                    return d.getOptionForAxis(b, a);
                };
            };
            if (d.getOptionForAxis("drawAxis", "y")) {
                if (q.yticks && q.yticks.length > 0) {
                    var t = d.numAxes(), u = [ s("y"), s("y2") ];
                    for (i = 0; i < q.yticks.length; i++) {
                        if (h = q.yticks[i], "function" == typeof h) return;
                        f = r.x;
                        var v = 1, w = "y1", x = u[0];
                        1 == h[0] && (f = r.x + r.w, v = -1, w = "y2", x = u[1]);
                        var y = x("axisLabelFontSize");
                        g = r.y + h[1] * r.h, e = p(h[2], "y", 2 == t ? w : null);
                        var z = g - y / 2;
                        0 > z && (z = 0), z + y + 3 > m ? e.style.bottom = "0" : e.style.top = z + "px", 
                        0 === h[0] ? (e.style.left = r.x - x("axisLabelWidth") - x("axisTickSize") + "px", 
                        e.style.textAlign = "right") : 1 == h[0] && (e.style.left = r.x + r.w + x("axisTickSize") + "px", 
                        e.style.textAlign = "left"), e.style.width = x("axisLabelWidth") + "px", k.appendChild(e), 
                        this.ylabels_.push(e);
                    }
                    var A = this.ylabels_[0], y = d.getOptionForAxis("axisLabelFontSize", "y"), B = parseInt(A.style.top, 10) + y;
                    B > m - y && (A.style.top = parseInt(A.style.top, 10) - y / 2 + "px");
                }
                var C;
                if (d.getOption("drawAxesAtZero")) {
                    var D = d.toPercentXCoord(0);
                    (D > 1 || 0 > D || isNaN(D)) && (D = 0), C = b(r.x + D * r.w);
                } else C = b(r.x);
                j.strokeStyle = d.getOptionForAxis("axisLineColor", "y"), j.lineWidth = d.getOptionForAxis("axisLineWidth", "y"), 
                j.beginPath(), j.moveTo(C, c(r.y)), j.lineTo(C, c(r.y + r.h)), j.closePath(), j.stroke(), 
                2 == d.numAxes() && (j.strokeStyle = d.getOptionForAxis("axisLineColor", "y2"), 
                j.lineWidth = d.getOptionForAxis("axisLineWidth", "y2"), j.beginPath(), j.moveTo(c(r.x + r.w), c(r.y)), 
                j.lineTo(c(r.x + r.w), c(r.y + r.h)), j.closePath(), j.stroke());
            }
            if (d.getOptionForAxis("drawAxis", "x")) {
                if (q.xticks) {
                    var x = s("x");
                    for (i = 0; i < q.xticks.length; i++) {
                        h = q.xticks[i], f = r.x + h[0] * r.w, g = r.y + r.h, e = p(h[1], "x"), e.style.textAlign = "center", 
                        e.style.top = g + x("axisTickSize") + "px";
                        var E = f - x("axisLabelWidth") / 2;
                        E + x("axisLabelWidth") > l && (E = l - x("axisLabelWidth"), e.style.textAlign = "right"), 
                        0 > E && (E = 0, e.style.textAlign = "left"), e.style.left = E + "px", e.style.width = x("axisLabelWidth") + "px", 
                        k.appendChild(e), this.xlabels_.push(e);
                    }
                }
                j.strokeStyle = d.getOptionForAxis("axisLineColor", "x"), j.lineWidth = d.getOptionForAxis("axisLineWidth", "x"), 
                j.beginPath();
                var F;
                if (d.getOption("drawAxesAtZero")) {
                    var D = d.toPercentYCoord(0, 0);
                    (D > 1 || 0 > D) && (D = 1), F = c(r.y + D * r.h);
                } else F = c(r.y + r.h);
                j.moveTo(b(r.x), F), j.lineTo(b(r.x + r.w), F), j.closePath(), j.stroke();
            }
            j.restore();
        }
    }, a;
}(), Dygraph.Plugins.ChartLabels = function() {
    var a = function() {
        this.title_div_ = null, this.xlabel_div_ = null, this.ylabel_div_ = null, this.y2label_div_ = null;
    };
    a.prototype.toString = function() {
        return "ChartLabels Plugin";
    }, a.prototype.activate = function() {
        return {
            layout: this.layout,
            didDrawChart: this.didDrawChart
        };
    };
    var b = function(a) {
        var b = document.createElement("div");
        return b.style.position = "absolute", b.style.left = a.x + "px", b.style.top = a.y + "px", 
        b.style.width = a.w + "px", b.style.height = a.h + "px", b;
    };
    a.prototype.detachLabels_ = function() {
        for (var a = [ this.title_div_, this.xlabel_div_, this.ylabel_div_, this.y2label_div_ ], b = 0; b < a.length; b++) {
            var c = a[b];
            c && c.parentNode && c.parentNode.removeChild(c);
        }
        this.title_div_ = null, this.xlabel_div_ = null, this.ylabel_div_ = null, this.y2label_div_ = null;
    };
    var c = function(a, b, c, d, e) {
        var f = document.createElement("div");
        f.style.position = "absolute", f.style.left = 1 == c ? "0px" : b.x + "px", f.style.top = b.y + "px", 
        f.style.width = b.w + "px", f.style.height = b.h + "px", f.style.fontSize = a.getOption("yLabelWidth") - 2 + "px";
        var g = document.createElement("div");
        g.style.position = "absolute", g.style.width = b.h + "px", g.style.height = b.w + "px", 
        g.style.top = b.h / 2 - b.w / 2 + "px", g.style.left = b.w / 2 - b.h / 2 + "px", 
        g.style.textAlign = "center";
        var h = "rotate(" + (1 == c ? "-" : "") + "90deg)";
        g.style.transform = h, g.style.WebkitTransform = h, g.style.MozTransform = h, g.style.OTransform = h, 
        g.style.msTransform = h, "undefined" != typeof document.documentMode && document.documentMode < 9 && (g.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + (1 == c ? "3" : "1") + ")", 
        g.style.left = "0px", g.style.top = "0px");
        var i = document.createElement("div");
        return i.className = d, i.innerHTML = e, g.appendChild(i), f.appendChild(g), f;
    };
    return a.prototype.layout = function(a) {
        this.detachLabels_();
        var d = a.dygraph, e = a.chart_div;
        if (d.getOption("title")) {
            var f = a.reserveSpaceTop(d.getOption("titleHeight"));
            this.title_div_ = b(f), this.title_div_.style.textAlign = "center", this.title_div_.style.fontSize = d.getOption("titleHeight") - 8 + "px", 
            this.title_div_.style.fontWeight = "bold", this.title_div_.style.zIndex = 10;
            var g = document.createElement("div");
            g.className = "dygraph-label dygraph-title", g.innerHTML = d.getOption("title"), 
            this.title_div_.appendChild(g), e.appendChild(this.title_div_);
        }
        if (d.getOption("xlabel")) {
            var h = a.reserveSpaceBottom(d.getOption("xLabelHeight"));
            this.xlabel_div_ = b(h), this.xlabel_div_.style.textAlign = "center", this.xlabel_div_.style.fontSize = d.getOption("xLabelHeight") - 2 + "px";
            var g = document.createElement("div");
            g.className = "dygraph-label dygraph-xlabel", g.innerHTML = d.getOption("xlabel"), 
            this.xlabel_div_.appendChild(g), e.appendChild(this.xlabel_div_);
        }
        if (d.getOption("ylabel")) {
            var i = a.reserveSpaceLeft(0);
            this.ylabel_div_ = c(d, i, 1, "dygraph-label dygraph-ylabel", d.getOption("ylabel")), 
            e.appendChild(this.ylabel_div_);
        }
        if (d.getOption("y2label") && 2 == d.numAxes()) {
            var j = a.reserveSpaceRight(0);
            this.y2label_div_ = c(d, j, 2, "dygraph-label dygraph-y2label", d.getOption("y2label")), 
            e.appendChild(this.y2label_div_);
        }
    }, a.prototype.didDrawChart = function(a) {
        var b = a.dygraph;
        this.title_div_ && (this.title_div_.children[0].innerHTML = b.getOption("title")), 
        this.xlabel_div_ && (this.xlabel_div_.children[0].innerHTML = b.getOption("xlabel")), 
        this.ylabel_div_ && (this.ylabel_div_.children[0].children[0].innerHTML = b.getOption("ylabel")), 
        this.y2label_div_ && (this.y2label_div_.children[0].children[0].innerHTML = b.getOption("y2label"));
    }, a.prototype.clearChart = function() {}, a.prototype.destroy = function() {
        this.detachLabels_();
    }, a;
}(), Dygraph.Plugins.Grid = function() {
    var a = function() {};
    return a.prototype.toString = function() {
        return "Gridline Plugin";
    }, a.prototype.activate = function() {
        return {
            willDrawChart: this.willDrawChart
        };
    }, a.prototype.willDrawChart = function(a) {
        function b(a) {
            return Math.round(a) + .5;
        }
        function c(a) {
            return Math.round(a) - .5;
        }
        var d, e, f, g, h = a.dygraph, i = a.drawingContext, j = h.layout_, k = a.dygraph.plotter_.area;
        if (h.getOptionForAxis("drawGrid", "y")) {
            for (var l = [ "y", "y2" ], m = [], n = [], o = [], p = [], q = [], f = 0; f < l.length; f++) o[f] = h.getOptionForAxis("drawGrid", l[f]), 
            o[f] && (m[f] = h.getOptionForAxis("gridLineColor", l[f]), n[f] = h.getOptionForAxis("gridLineWidth", l[f]), 
            q[f] = h.getOptionForAxis("gridLinePattern", l[f]), p[f] = q[f] && q[f].length >= 2);
            for (g = j.yticks, i.save(), f = 0; f < g.length; f++) {
                var r = g[f][0];
                o[r] && (p[r] && i.installPattern(q[r]), i.strokeStyle = m[r], i.lineWidth = n[r], 
                d = b(k.x), e = c(k.y + g[f][1] * k.h), i.beginPath(), i.moveTo(d, e), i.lineTo(d + k.w, e), 
                i.closePath(), i.stroke(), p[r] && i.uninstallPattern());
            }
            i.restore();
        }
        if (h.getOptionForAxis("drawGrid", "x")) {
            g = j.xticks, i.save();
            var q = h.getOptionForAxis("gridLinePattern", "x"), p = q && q.length >= 2;
            for (p && i.installPattern(q), i.strokeStyle = h.getOptionForAxis("gridLineColor", "x"), 
            i.lineWidth = h.getOptionForAxis("gridLineWidth", "x"), f = 0; f < g.length; f++) d = b(k.x + g[f][0] * k.w), 
            e = c(k.y + k.h), i.beginPath(), i.moveTo(d, e), i.lineTo(d, k.y), i.closePath(), 
            i.stroke();
            p && i.uninstallPattern(), i.restore();
        }
    }, a.prototype.destroy = function() {}, a;
}(), Dygraph.Plugins.Legend = function() {
    var a = function() {
        this.legend_div_ = null, this.is_generated_div_ = !1;
    };
    a.prototype.toString = function() {
        return "Legend Plugin";
    };
    var b;
    a.prototype.activate = function(a) {
        var b, c = a.getOption("labelsDivWidth"), d = a.getOption("labelsDiv");
        if (d && null !== d) b = "string" == typeof d || d instanceof String ? document.getElementById(d) : d; else {
            var e = {
                position: "absolute",
                fontSize: "14px",
                zIndex: 10,
                width: c + "px",
                top: "0px",
                left: a.size().width - c - 2 + "px",
                background: "white",
                lineHeight: "normal",
                textAlign: "left",
                overflow: "hidden"
            };
            Dygraph.update(e, a.getOption("labelsDivStyles")), b = document.createElement("div"), 
            b.className = "dygraph-legend";
            for (var f in e) if (e.hasOwnProperty(f)) try {
                b.style[f] = e[f];
            } catch (g) {
                console.warn("You are using unsupported css properties for your browser in labelsDivStyles");
            }
            a.graphDiv.appendChild(b), this.is_generated_div_ = !0;
        }
        return this.legend_div_ = b, this.one_em_width_ = 10, {
            select: this.select,
            deselect: this.deselect,
            predraw: this.predraw,
            didDrawChart: this.didDrawChart
        };
    };
    var c = function(a) {
        var b = document.createElement("span");
        b.setAttribute("style", "margin: 0; padding: 0 0 0 1em; border: 0;"), a.appendChild(b);
        var c = b.offsetWidth;
        return a.removeChild(b), c;
    }, d = function(a) {
        return a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    return a.prototype.select = function(b) {
        var c = b.selectedX, d = b.selectedPoints, e = b.selectedRow, f = b.dygraph.getOption("legend");
        if ("never" === f) return void (this.legend_div_.style.display = "none");
        if ("follow" === f) {
            var g = b.dygraph.plotter_.area, h = b.dygraph.getOption("labelsDivWidth"), i = b.dygraph.getOptionForAxis("axisLabelWidth", "y"), j = d[0].x * g.w + 20, k = d[0].y * g.h - 20;
            j + h + 1 > window.scrollX + window.innerWidth && (j = j - 40 - h - (i - g.x)), 
            b.dygraph.graphDiv.appendChild(this.legend_div_), this.legend_div_.style.left = i + j + "px", 
            this.legend_div_.style.top = k + "px";
        }
        var l = a.generateLegendHTML(b.dygraph, c, d, this.one_em_width_, e);
        this.legend_div_.innerHTML = l, this.legend_div_.style.display = "";
    }, a.prototype.deselect = function(b) {
        var d = b.dygraph.getOption("legend");
        "always" !== d && (this.legend_div_.style.display = "none");
        var e = c(this.legend_div_);
        this.one_em_width_ = e;
        var f = a.generateLegendHTML(b.dygraph, void 0, void 0, e, null);
        this.legend_div_.innerHTML = f;
    }, a.prototype.didDrawChart = function(a) {
        this.deselect(a);
    }, a.prototype.predraw = function(a) {
        if (this.is_generated_div_) {
            a.dygraph.graphDiv.appendChild(this.legend_div_);
            var b = a.dygraph.plotter_.area, c = a.dygraph.getOption("labelsDivWidth");
            this.legend_div_.style.left = b.x + b.w - c - 1 + "px", this.legend_div_.style.top = b.y + "px", 
            this.legend_div_.style.width = c + "px";
        }
    }, a.prototype.destroy = function() {
        this.legend_div_ = null;
    }, a.generateLegendHTML = function(a, c, e, f, g) {
        if (a.getOption("showLabelsOnHighlight") !== !0) return "";
        var h, i, j, k, l, m = a.getLabels();
        if ("undefined" == typeof c) {
            if ("always" != a.getOption("legend")) return "";
            for (i = a.getOption("labelsSeparateLines"), h = "", j = 1; j < m.length; j++) {
                var n = a.getPropertiesForSeries(m[j]);
                n.visible && ("" !== h && (h += i ? "<br/>" : " "), l = a.getOption("strokePattern", m[j]), 
                k = b(l, n.color, f), h += "<span style='font-weight: bold; color: " + n.color + ";'>" + k + " " + d(m[j]) + "</span>");
            }
            return h;
        }
        var o = a.optionsViewForAxis_("x"), p = o("valueFormatter");
        h = p.call(a, c, o, m[0], a, g, 0), "" !== h && (h += ":");
        var q = [], r = a.numAxes();
        for (j = 0; r > j; j++) q[j] = a.optionsViewForAxis_("y" + (j ? 1 + j : ""));
        var s = a.getOption("labelsShowZeroValues");
        i = a.getOption("labelsSeparateLines");
        var t = a.getHighlightSeries();
        for (j = 0; j < e.length; j++) {
            var u = e[j];
            if ((0 !== u.yval || s) && Dygraph.isOK(u.canvasy)) {
                i && (h += "<br/>");
                var n = a.getPropertiesForSeries(u.name), v = q[n.axis - 1], w = v("valueFormatter"), x = w.call(a, u.yval, v, u.name, a, g, m.indexOf(u.name)), y = u.name == t ? " class='highlight'" : "";
                h += "<span" + y + "> <b><span style='color: " + n.color + ";'>" + d(u.name) + "</span></b>:&#160;" + x + "</span>";
            }
        }
        return h;
    }, b = function(a, b, c) {
        var d = /MSIE/.test(navigator.userAgent) && !window.opera;
        if (d) return "&mdash;";
        if (!a || a.length <= 1) return '<div style="display: inline-block; position: relative; bottom: .5ex; padding-left: 1em; height: 1px; border-bottom: 2px solid ' + b + ';"></div>';
        var e, f, g, h, i, j = 0, k = 0, l = [];
        for (e = 0; e <= a.length; e++) j += a[e % a.length];
        if (i = Math.floor(c / (j - a[0])), i > 1) {
            for (e = 0; e < a.length; e++) l[e] = a[e] / c;
            k = l.length;
        } else {
            for (i = 1, e = 0; e < a.length; e++) l[e] = a[e] / j;
            k = l.length + 1;
        }
        var m = "";
        for (f = 0; i > f; f++) for (e = 0; k > e; e += 2) g = l[e % l.length], h = e < a.length ? l[(e + 1) % l.length] : 0, 
        m += '<div style="display: inline-block; position: relative; bottom: .5ex; margin-right: ' + h + "em; padding-left: " + g + "em; height: 1px; border-bottom: 2px solid " + b + ';"></div>';
        return m;
    }, a;
}(), Dygraph.Plugins.RangeSelector = function() {
    var a = function() {
        this.isIE_ = /MSIE/.test(navigator.userAgent) && !window.opera, this.hasTouchInterface_ = "undefined" != typeof TouchEvent, 
        this.isMobileDevice_ = /mobile|android/gi.test(navigator.appVersion), this.interfaceCreated_ = !1;
    };
    return a.prototype.toString = function() {
        return "RangeSelector Plugin";
    }, a.prototype.activate = function(a) {
        return this.dygraph_ = a, this.isUsingExcanvas_ = a.isUsingExcanvas_, this.getOption_("showRangeSelector") && this.createInterface_(), 
        {
            layout: this.reserveSpace_,
            predraw: this.renderStaticLayer_,
            didDrawChart: this.renderInteractiveLayer_
        };
    }, a.prototype.destroy = function() {
        this.bgcanvas_ = null, this.fgcanvas_ = null, this.leftZoomHandle_ = null, this.rightZoomHandle_ = null, 
        this.iePanOverlay_ = null;
    }, a.prototype.getOption_ = function(a, b) {
        return this.dygraph_.getOption(a, b);
    }, a.prototype.setDefaultOption_ = function(a, b) {
        this.dygraph_.attrs_[a] = b;
    }, a.prototype.createInterface_ = function() {
        this.createCanvases_(), this.isUsingExcanvas_ && this.createIEPanOverlay_(), this.createZoomHandles_(), 
        this.initInteraction_(), this.getOption_("animatedZooms") && (console.warn("Animated zooms and range selector are not compatible; disabling animatedZooms."), 
        this.dygraph_.updateOptions({
            animatedZooms: !1
        }, !0)), this.interfaceCreated_ = !0, this.addToGraph_();
    }, a.prototype.addToGraph_ = function() {
        var a = this.graphDiv_ = this.dygraph_.graphDiv;
        a.appendChild(this.bgcanvas_), a.appendChild(this.fgcanvas_), a.appendChild(this.leftZoomHandle_), 
        a.appendChild(this.rightZoomHandle_);
    }, a.prototype.removeFromGraph_ = function() {
        var a = this.graphDiv_;
        a.removeChild(this.bgcanvas_), a.removeChild(this.fgcanvas_), a.removeChild(this.leftZoomHandle_), 
        a.removeChild(this.rightZoomHandle_), this.graphDiv_ = null;
    }, a.prototype.reserveSpace_ = function(a) {
        this.getOption_("showRangeSelector") && a.reserveSpaceBottom(this.getOption_("rangeSelectorHeight") + 4);
    }, a.prototype.renderStaticLayer_ = function() {
        this.updateVisibility_() && (this.resize_(), this.drawStaticLayer_());
    }, a.prototype.renderInteractiveLayer_ = function() {
        this.updateVisibility_() && !this.isChangingRange_ && (this.placeZoomHandles_(), 
        this.drawInteractiveLayer_());
    }, a.prototype.updateVisibility_ = function() {
        var a = this.getOption_("showRangeSelector");
        if (a) this.interfaceCreated_ ? this.graphDiv_ && this.graphDiv_.parentNode || this.addToGraph_() : this.createInterface_(); else if (this.graphDiv_) {
            this.removeFromGraph_();
            var b = this.dygraph_;
            setTimeout(function() {
                b.width_ = 0, b.resize();
            }, 1);
        }
        return a;
    }, a.prototype.resize_ = function() {
        function a(a, b, c) {
            var d = Dygraph.getContextPixelRatio(b);
            a.style.top = c.y + "px", a.style.left = c.x + "px", a.width = c.w * d, a.height = c.h * d, 
            a.style.width = c.w + "px", a.style.height = c.h + "px", 1 != d && b.scale(d, d);
        }
        var b = this.dygraph_.layout_.getPlotArea(), c = 0;
        this.dygraph_.getOptionForAxis("drawAxis", "x") && (c = this.getOption_("xAxisHeight") || this.getOption_("axisLabelFontSize") + 2 * this.getOption_("axisTickSize")), 
        this.canvasRect_ = {
            x: b.x,
            y: b.y + b.h + c + 4,
            w: b.w,
            h: this.getOption_("rangeSelectorHeight")
        }, a(this.bgcanvas_, this.bgcanvas_ctx_, this.canvasRect_), a(this.fgcanvas_, this.fgcanvas_ctx_, this.canvasRect_);
    }, a.prototype.createCanvases_ = function() {
        this.bgcanvas_ = Dygraph.createCanvas(), this.bgcanvas_.className = "dygraph-rangesel-bgcanvas", 
        this.bgcanvas_.style.position = "absolute", this.bgcanvas_.style.zIndex = 9, this.bgcanvas_ctx_ = Dygraph.getContext(this.bgcanvas_), 
        this.fgcanvas_ = Dygraph.createCanvas(), this.fgcanvas_.className = "dygraph-rangesel-fgcanvas", 
        this.fgcanvas_.style.position = "absolute", this.fgcanvas_.style.zIndex = 9, this.fgcanvas_.style.cursor = "default", 
        this.fgcanvas_ctx_ = Dygraph.getContext(this.fgcanvas_);
    }, a.prototype.createIEPanOverlay_ = function() {
        this.iePanOverlay_ = document.createElement("div"), this.iePanOverlay_.style.position = "absolute", 
        this.iePanOverlay_.style.backgroundColor = "white", this.iePanOverlay_.style.filter = "alpha(opacity=0)", 
        this.iePanOverlay_.style.display = "none", this.iePanOverlay_.style.cursor = "move", 
        this.fgcanvas_.appendChild(this.iePanOverlay_);
    }, a.prototype.createZoomHandles_ = function() {
        var a = new Image();
        a.className = "dygraph-rangesel-zoomhandle", a.style.position = "absolute", a.style.zIndex = 10, 
        a.style.visibility = "hidden", a.style.cursor = "col-resize", /MSIE 7/.test(navigator.userAgent) ? (a.width = 7, 
        a.height = 14, a.style.backgroundColor = "white", a.style.border = "1px solid #333333") : (a.width = 9, 
        a.height = 16, a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAAZiS0dEANAAzwDP4Z7KegAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9sHGw0cMqdt1UwAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAaElEQVQoz+3SsRFAQBCF4Z9WJM8KCDVwownl6YXsTmCUsyKGkZzcl7zkz3YLkypgAnreFmDEpHkIwVOMfpdi9CEEN2nGpFdwD03yEqDtOgCaun7sqSTDH32I1pQA2Pb9sZecAxc5r3IAb21d6878xsAAAAAASUVORK5CYII="), 
        this.isMobileDevice_ && (a.width *= 2, a.height *= 2), this.leftZoomHandle_ = a, 
        this.rightZoomHandle_ = a.cloneNode(!1);
    }, a.prototype.initInteraction_ = function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o = this, p = document, q = 0, r = null, s = !1, t = !1, u = !this.isMobileDevice_ && !this.isUsingExcanvas_, v = new Dygraph.IFrameTarp();
        a = function(a) {
            var b = o.dygraph_.xAxisExtremes(), c = (b[1] - b[0]) / o.canvasRect_.w, d = b[0] + (a.leftHandlePos - o.canvasRect_.x) * c, e = b[0] + (a.rightHandlePos - o.canvasRect_.x) * c;
            return [ d, e ];
        }, b = function(a) {
            return Dygraph.cancelEvent(a), s = !0, q = a.clientX, r = a.target ? a.target : a.srcElement, 
            ("mousedown" === a.type || "dragstart" === a.type) && (Dygraph.addEvent(p, "mousemove", c), 
            Dygraph.addEvent(p, "mouseup", d)), o.fgcanvas_.style.cursor = "col-resize", v.cover(), 
            !0;
        }, c = function(a) {
            if (!s) return !1;
            Dygraph.cancelEvent(a);
            var b = a.clientX - q;
            if (Math.abs(b) < 4) return !0;
            q = a.clientX;
            var c, d = o.getZoomHandleStatus_();
            r == o.leftZoomHandle_ ? (c = d.leftHandlePos + b, c = Math.min(c, d.rightHandlePos - r.width - 3), 
            c = Math.max(c, o.canvasRect_.x)) : (c = d.rightHandlePos + b, c = Math.min(c, o.canvasRect_.x + o.canvasRect_.w), 
            c = Math.max(c, d.leftHandlePos + r.width + 3));
            var f = r.width / 2;
            return r.style.left = c - f + "px", o.drawInteractiveLayer_(), u && e(), !0;
        }, d = function() {
            return s ? (s = !1, v.uncover(), Dygraph.removeEvent(p, "mousemove", c), Dygraph.removeEvent(p, "mouseup", d), 
            o.fgcanvas_.style.cursor = "default", u || e(), !0) : !1;
        }, e = function() {
            try {
                var b = o.getZoomHandleStatus_();
                if (o.isChangingRange_ = !0, b.isZoomed) {
                    var c = a(b);
                    o.dygraph_.doZoomXDates_(c[0], c[1]);
                } else o.dygraph_.resetZoom();
            } finally {
                o.isChangingRange_ = !1;
            }
        }, f = function(a) {
            if (o.isUsingExcanvas_) return a.srcElement == o.iePanOverlay_;
            var b = o.leftZoomHandle_.getBoundingClientRect(), c = b.left + b.width / 2;
            b = o.rightZoomHandle_.getBoundingClientRect();
            var d = b.left + b.width / 2;
            return a.clientX > c && a.clientX < d;
        }, g = function(a) {
            return !t && f(a) && o.getZoomHandleStatus_().isZoomed ? (Dygraph.cancelEvent(a), 
            t = !0, q = a.clientX, "mousedown" === a.type && (Dygraph.addEvent(p, "mousemove", h), 
            Dygraph.addEvent(p, "mouseup", i)), !0) : !1;
        }, h = function(a) {
            if (!t) return !1;
            Dygraph.cancelEvent(a);
            var b = a.clientX - q;
            if (Math.abs(b) < 4) return !0;
            q = a.clientX;
            var c = o.getZoomHandleStatus_(), d = c.leftHandlePos, e = c.rightHandlePos, f = e - d;
            d + b <= o.canvasRect_.x ? (d = o.canvasRect_.x, e = d + f) : e + b >= o.canvasRect_.x + o.canvasRect_.w ? (e = o.canvasRect_.x + o.canvasRect_.w, 
            d = e - f) : (d += b, e += b);
            var g = o.leftZoomHandle_.width / 2;
            return o.leftZoomHandle_.style.left = d - g + "px", o.rightZoomHandle_.style.left = e - g + "px", 
            o.drawInteractiveLayer_(), u && j(), !0;
        }, i = function() {
            return t ? (t = !1, Dygraph.removeEvent(p, "mousemove", h), Dygraph.removeEvent(p, "mouseup", i), 
            u || j(), !0) : !1;
        }, j = function() {
            try {
                o.isChangingRange_ = !0, o.dygraph_.dateWindow_ = a(o.getZoomHandleStatus_()), o.dygraph_.drawGraph_(!1);
            } finally {
                o.isChangingRange_ = !1;
            }
        }, k = function(a) {
            if (!s && !t) {
                var b = f(a) ? "move" : "default";
                b != o.fgcanvas_.style.cursor && (o.fgcanvas_.style.cursor = b);
            }
        }, l = function(a) {
            "touchstart" == a.type && 1 == a.targetTouches.length ? b(a.targetTouches[0]) && Dygraph.cancelEvent(a) : "touchmove" == a.type && 1 == a.targetTouches.length ? c(a.targetTouches[0]) && Dygraph.cancelEvent(a) : d(a);
        }, m = function(a) {
            "touchstart" == a.type && 1 == a.targetTouches.length ? g(a.targetTouches[0]) && Dygraph.cancelEvent(a) : "touchmove" == a.type && 1 == a.targetTouches.length ? h(a.targetTouches[0]) && Dygraph.cancelEvent(a) : i(a);
        }, n = function(a, b) {
            for (var c = [ "touchstart", "touchend", "touchmove", "touchcancel" ], d = 0; d < c.length; d++) o.dygraph_.addAndTrackEvent(a, c[d], b);
        }, this.setDefaultOption_("interactionModel", Dygraph.Interaction.dragIsPanInteractionModel), 
        this.setDefaultOption_("panEdgeFraction", 1e-4);
        var w = window.opera ? "mousedown" : "dragstart";
        this.dygraph_.addAndTrackEvent(this.leftZoomHandle_, w, b), this.dygraph_.addAndTrackEvent(this.rightZoomHandle_, w, b), 
        this.isUsingExcanvas_ ? this.dygraph_.addAndTrackEvent(this.iePanOverlay_, "mousedown", g) : (this.dygraph_.addAndTrackEvent(this.fgcanvas_, "mousedown", g), 
        this.dygraph_.addAndTrackEvent(this.fgcanvas_, "mousemove", k)), this.hasTouchInterface_ && (n(this.leftZoomHandle_, l), 
        n(this.rightZoomHandle_, l), n(this.fgcanvas_, m));
    }, a.prototype.drawStaticLayer_ = function() {
        var a = this.bgcanvas_ctx_;
        a.clearRect(0, 0, this.canvasRect_.w, this.canvasRect_.h);
        try {
            this.drawMiniPlot_();
        } catch (b) {
            console.warn(b);
        }
        var c = .5;
        this.bgcanvas_ctx_.lineWidth = 1, a.strokeStyle = "gray", a.beginPath(), a.moveTo(c, c), 
        a.lineTo(c, this.canvasRect_.h - c), a.lineTo(this.canvasRect_.w - c, this.canvasRect_.h - c), 
        a.lineTo(this.canvasRect_.w - c, c), a.stroke();
    }, a.prototype.drawMiniPlot_ = function() {
        var a = this.getOption_("rangeSelectorPlotFillColor"), b = this.getOption_("rangeSelectorPlotStrokeColor");
        if (a || b) {
            var c = this.getOption_("stepPlot"), d = this.computeCombinedSeriesAndLimits_(), e = d.yMax - d.yMin, f = this.bgcanvas_ctx_, g = .5, h = this.dygraph_.xAxisExtremes(), i = Math.max(h[1] - h[0], 1e-30), j = (this.canvasRect_.w - g) / i, k = (this.canvasRect_.h - g) / e, l = this.canvasRect_.w - g, m = this.canvasRect_.h - g, n = null, o = null;
            f.beginPath(), f.moveTo(g, m);
            for (var p = 0; p < d.data.length; p++) {
                var q = d.data[p], r = null !== q[0] ? (q[0] - h[0]) * j : 0 / 0, s = null !== q[1] ? m - (q[1] - d.yMin) * k : 0 / 0;
                (c || null === n || Math.round(r) != Math.round(n)) && (isFinite(r) && isFinite(s) ? (null === n ? f.lineTo(r, m) : c && f.lineTo(r, o), 
                f.lineTo(r, s), n = r, o = s) : (null !== n && (c ? (f.lineTo(r, o), f.lineTo(r, m)) : f.lineTo(n, m)), 
                n = o = null));
            }
            if (f.lineTo(l, m), f.closePath(), a) {
                var t = this.bgcanvas_ctx_.createLinearGradient(0, 0, 0, m);
                t.addColorStop(0, "white"), t.addColorStop(1, a), this.bgcanvas_ctx_.fillStyle = t, 
                f.fill();
            }
            b && (this.bgcanvas_ctx_.strokeStyle = b, this.bgcanvas_ctx_.lineWidth = 1.5, f.stroke());
        }
    }, a.prototype.computeCombinedSeriesAndLimits_ = function() {
        var a, b = this.dygraph_, c = this.getOption_("logscale"), d = b.numColumns(), e = b.getLabels(), f = new Array(d), g = !1;
        for (a = 1; d > a; a++) {
            var h = this.getOption_("showInRangeSelector", e[a]);
            f[a] = h, null !== h && (g = !0);
        }
        if (!g) for (a = 0; a < f.length; a++) f[a] = !0;
        var i = [], j = b.dataHandler_, k = b.attributes_;
        for (a = 1; a < b.numColumns(); a++) if (f[a]) {
            var l = j.extractSeries(b.rawData_, a, k);
            b.rollPeriod() > 1 && (l = j.rollingAverage(l, b.rollPeriod(), k)), i.push(l);
        }
        var m = [];
        for (a = 0; a < i[0].length; a++) {
            for (var n = 0, o = 0, p = 0; p < i.length; p++) {
                var q = i[p][a][1];
                null === q || isNaN(q) || (o++, n += q);
            }
            m.push([ i[0][a][0], n / o ]);
        }
        var r = Number.MAX_VALUE, s = -Number.MAX_VALUE;
        for (a = 0; a < m.length; a++) {
            var t = m[a][1];
            null !== t && isFinite(t) && (!c || t > 0) && (r = Math.min(r, t), s = Math.max(s, t));
        }
        var u = .25;
        if (c) for (s = Dygraph.log10(s), s += s * u, r = Dygraph.log10(r), a = 0; a < m.length; a++) m[a][1] = Dygraph.log10(m[a][1]); else {
            var v, w = s - r;
            v = w <= Number.MIN_VALUE ? s * u : w * u, s += v, r -= v;
        }
        return {
            data: m,
            yMin: r,
            yMax: s
        };
    }, a.prototype.placeZoomHandles_ = function() {
        var a = this.dygraph_.xAxisExtremes(), b = this.dygraph_.xAxisRange(), c = a[1] - a[0], d = Math.max(0, (b[0] - a[0]) / c), e = Math.max(0, (a[1] - b[1]) / c), f = this.canvasRect_.x + this.canvasRect_.w * d, g = this.canvasRect_.x + this.canvasRect_.w * (1 - e), h = Math.max(this.canvasRect_.y, this.canvasRect_.y + (this.canvasRect_.h - this.leftZoomHandle_.height) / 2), i = this.leftZoomHandle_.width / 2;
        this.leftZoomHandle_.style.left = f - i + "px", this.leftZoomHandle_.style.top = h + "px", 
        this.rightZoomHandle_.style.left = g - i + "px", this.rightZoomHandle_.style.top = this.leftZoomHandle_.style.top, 
        this.leftZoomHandle_.style.visibility = "visible", this.rightZoomHandle_.style.visibility = "visible";
    }, a.prototype.drawInteractiveLayer_ = function() {
        var a = this.fgcanvas_ctx_;
        a.clearRect(0, 0, this.canvasRect_.w, this.canvasRect_.h);
        var b = 1, c = this.canvasRect_.w - b, d = this.canvasRect_.h - b, e = this.getZoomHandleStatus_();
        if (a.strokeStyle = "black", e.isZoomed) {
            var f = Math.max(b, e.leftHandlePos - this.canvasRect_.x), g = Math.min(c, e.rightHandlePos - this.canvasRect_.x);
            a.fillStyle = "rgba(240, 240, 240, 0.6)", a.fillRect(0, 0, f, this.canvasRect_.h), 
            a.fillRect(g, 0, this.canvasRect_.w - g, this.canvasRect_.h), a.beginPath(), a.moveTo(b, b), 
            a.lineTo(f, b), a.lineTo(f, d), a.lineTo(g, d), a.lineTo(g, b), a.lineTo(c, b), 
            a.stroke(), this.isUsingExcanvas_ && (this.iePanOverlay_.style.width = g - f + "px", 
            this.iePanOverlay_.style.left = f + "px", this.iePanOverlay_.style.height = d + "px", 
            this.iePanOverlay_.style.display = "inline");
        } else a.beginPath(), a.moveTo(b, b), a.lineTo(b, d), a.lineTo(c, d), a.lineTo(c, b), 
        a.stroke(), this.iePanOverlay_ && (this.iePanOverlay_.style.display = "none");
    }, a.prototype.getZoomHandleStatus_ = function() {
        var a = this.leftZoomHandle_.width / 2, b = parseFloat(this.leftZoomHandle_.style.left) + a, c = parseFloat(this.rightZoomHandle_.style.left) + a;
        return {
            leftHandlePos: b,
            rightHandlePos: c,
            isZoomed: b - 1 > this.canvasRect_.x || c + 1 < this.canvasRect_.x + this.canvasRect_.w
        };
    }, a;
}(), Dygraph.PLUGINS.push(Dygraph.Plugins.Legend, Dygraph.Plugins.Axes, Dygraph.Plugins.RangeSelector, Dygraph.Plugins.ChartLabels, Dygraph.Plugins.Annotations, Dygraph.Plugins.Grid), 
Dygraph.DataHandler = function() {}, Dygraph.DataHandlers = {}, function() {
    var a = Dygraph.DataHandler;
    a.X = 0, a.Y = 1, a.EXTRAS = 2, a.prototype.extractSeries = function() {}, a.prototype.seriesToPoints = function(b, c, d) {
        for (var e = [], f = 0; f < b.length; ++f) {
            var g = b[f], h = g[1], i = null === h ? null : a.parseFloat(h), j = {
                x: 0 / 0,
                y: 0 / 0,
                xval: a.parseFloat(g[0]),
                yval: i,
                name: c,
                idx: f + d
            };
            e.push(j);
        }
        return this.onPointsCreated_(b, e), e;
    }, a.prototype.onPointsCreated_ = function() {}, a.prototype.rollingAverage = function() {}, 
    a.prototype.getExtremeYValues = function() {}, a.prototype.onLineEvaluated = function() {}, 
    a.prototype.computeYInterpolation_ = function(a, b, c) {
        var d = b[1] - a[1], e = b[0] - a[0], f = d / e, g = (c - a[0]) * f;
        return a[1] + g;
    }, a.prototype.getIndexesInWindow_ = function(a, b) {
        var c = 0, d = a.length - 1;
        if (b) {
            for (var e = 0, f = b[0], g = b[1]; e < a.length - 1 && a[e][0] < f; ) c++, e++;
            for (e = a.length - 1; e > 0 && a[e][0] > g; ) d--, e--;
        }
        return d >= c ? [ c, d ] : [ 0, a.length - 1 ];
    }, a.parseFloat = function(a) {
        return null === a ? 0 / 0 : a;
    };
}(), function() {
    Dygraph.DataHandlers.DefaultHandler = function() {};
    var a = Dygraph.DataHandlers.DefaultHandler;
    a.prototype = new Dygraph.DataHandler(), a.prototype.extractSeries = function(a, b, c) {
        for (var d = [], e = c.get("logscale"), f = 0; f < a.length; f++) {
            var g = a[f][0], h = a[f][b];
            e && 0 >= h && (h = null), d.push([ g, h ]);
        }
        return d;
    }, a.prototype.rollingAverage = function(a, b) {
        b = Math.min(b, a.length);
        var c, d, e, f, g, h = [];
        if (1 == b) return a;
        for (c = 0; c < a.length; c++) {
            for (f = 0, g = 0, d = Math.max(0, c - b + 1); c + 1 > d; d++) e = a[d][1], null === e || isNaN(e) || (g++, 
            f += a[d][1]);
            h[c] = g ? [ a[c][0], f / g ] : [ a[c][0], null ];
        }
        return h;
    }, a.prototype.getExtremeYValues = function(a) {
        for (var b, c = null, d = null, e = 0, f = a.length - 1, g = e; f >= g; g++) b = a[g][1], 
        null === b || isNaN(b) || ((null === d || b > d) && (d = b), (null === c || c > b) && (c = b));
        return [ c, d ];
    };
}(), function() {
    Dygraph.DataHandlers.DefaultFractionHandler = function() {};
    var a = Dygraph.DataHandlers.DefaultFractionHandler;
    a.prototype = new Dygraph.DataHandlers.DefaultHandler(), a.prototype.extractSeries = function(a, b, c) {
        for (var d, e, f, g, h, i, j = [], k = 100, l = c.get("logscale"), m = 0; m < a.length; m++) d = a[m][0], 
        f = a[m][b], l && null !== f && (f[0] <= 0 || f[1] <= 0) && (f = null), null !== f ? (g = f[0], 
        h = f[1], null === g || isNaN(g) ? j.push([ d, g, [ g, h ] ]) : (i = h ? g / h : 0, 
        e = k * i, j.push([ d, e, [ g, h ] ]))) : j.push([ d, null, [ null, null ] ]);
        return j;
    }, a.prototype.rollingAverage = function(a, b) {
        b = Math.min(b, a.length);
        var c, d = [], e = 0, f = 0, g = 100;
        for (c = 0; c < a.length; c++) {
            e += a[c][2][0], f += a[c][2][1], c - b >= 0 && (e -= a[c - b][2][0], f -= a[c - b][2][1]);
            var h = a[c][0], i = f ? e / f : 0;
            d[c] = [ h, g * i ];
        }
        return d;
    };
}(), function() {
    Dygraph.DataHandlers.BarsHandler = function() {
        Dygraph.DataHandler.call(this);
    }, Dygraph.DataHandlers.BarsHandler.prototype = new Dygraph.DataHandler();
    var a = Dygraph.DataHandlers.BarsHandler;
    a.prototype.extractSeries = function() {}, a.prototype.rollingAverage = function() {}, 
    a.prototype.onPointsCreated_ = function(a, b) {
        for (var c = 0; c < a.length; ++c) {
            var d = a[c], e = b[c];
            e.y_top = 0 / 0, e.y_bottom = 0 / 0, e.yval_minus = Dygraph.DataHandler.parseFloat(d[2][0]), 
            e.yval_plus = Dygraph.DataHandler.parseFloat(d[2][1]);
        }
    }, a.prototype.getExtremeYValues = function(a) {
        for (var b, c = null, d = null, e = 0, f = a.length - 1, g = e; f >= g; g++) if (b = a[g][1], 
        null !== b && !isNaN(b)) {
            var h = a[g][2][0], i = a[g][2][1];
            h > b && (h = b), b > i && (i = b), (null === d || i > d) && (d = i), (null === c || c > h) && (c = h);
        }
        return [ c, d ];
    }, a.prototype.onLineEvaluated = function(a, b, c) {
        for (var d, e = 0; e < a.length; e++) d = a[e], d.y_top = DygraphLayout.calcYNormal_(b, d.yval_minus, c), 
        d.y_bottom = DygraphLayout.calcYNormal_(b, d.yval_plus, c);
    };
}(), function() {
    Dygraph.DataHandlers.CustomBarsHandler = function() {};
    var a = Dygraph.DataHandlers.CustomBarsHandler;
    a.prototype = new Dygraph.DataHandlers.BarsHandler(), a.prototype.extractSeries = function(a, b, c) {
        for (var d, e, f, g = [], h = c.get("logscale"), i = 0; i < a.length; i++) d = a[i][0], 
        f = a[i][b], h && null !== f && (f[0] <= 0 || f[1] <= 0 || f[2] <= 0) && (f = null), 
        null !== f ? (e = f[1], g.push(null === e || isNaN(e) ? [ d, e, [ e, e ] ] : [ d, e, [ f[0], f[2] ] ])) : g.push([ d, null, [ null, null ] ]);
        return g;
    }, a.prototype.rollingAverage = function(a, b) {
        b = Math.min(b, a.length);
        var c, d, e, f, g, h, i, j = [];
        for (d = 0, f = 0, e = 0, g = 0, h = 0; h < a.length; h++) {
            if (c = a[h][1], i = a[h][2], j[h] = a[h], null === c || isNaN(c) || (d += i[0], 
            f += c, e += i[1], g += 1), h - b >= 0) {
                var k = a[h - b];
                null === k[1] || isNaN(k[1]) || (d -= k[2][0], f -= k[1], e -= k[2][1], g -= 1);
            }
            j[h] = g ? [ a[h][0], 1 * f / g, [ 1 * d / g, 1 * e / g ] ] : [ a[h][0], null, [ null, null ] ];
        }
        return j;
    };
}(), function() {
    Dygraph.DataHandlers.ErrorBarsHandler = function() {};
    var a = Dygraph.DataHandlers.ErrorBarsHandler;
    a.prototype = new Dygraph.DataHandlers.BarsHandler(), a.prototype.extractSeries = function(a, b, c) {
        for (var d, e, f, g, h = [], i = c.get("sigma"), j = c.get("logscale"), k = 0; k < a.length; k++) d = a[k][0], 
        g = a[k][b], j && null !== g && (g[0] <= 0 || g[0] - i * g[1] <= 0) && (g = null), 
        null !== g ? (e = g[0], null === e || isNaN(e) ? h.push([ d, e, [ e, e, e ] ]) : (f = i * g[1], 
        h.push([ d, e, [ e - f, e + f, g[1] ] ]))) : h.push([ d, null, [ null, null, null ] ]);
        return h;
    }, a.prototype.rollingAverage = function(a, b, c) {
        b = Math.min(b, a.length);
        var d, e, f, g, h, i, j, k, l, m = [], n = c.get("sigma");
        for (d = 0; d < a.length; d++) {
            for (h = 0, k = 0, i = 0, e = Math.max(0, d - b + 1); d + 1 > e; e++) f = a[e][1], 
            null === f || isNaN(f) || (i++, h += f, k += Math.pow(a[e][2][2], 2));
            i ? (j = Math.sqrt(k) / i, l = h / i, m[d] = [ a[d][0], l, [ l - n * j, l + n * j ] ]) : (g = 1 == b ? a[d][1] : null, 
            m[d] = [ a[d][0], g, [ g, g ] ]);
        }
        return m;
    };
}(), function() {
    Dygraph.DataHandlers.FractionsBarsHandler = function() {};
    var a = Dygraph.DataHandlers.FractionsBarsHandler;
    a.prototype = new Dygraph.DataHandlers.BarsHandler(), a.prototype.extractSeries = function(a, b, c) {
        for (var d, e, f, g, h, i, j, k, l = [], m = 100, n = c.get("sigma"), o = c.get("logscale"), p = 0; p < a.length; p++) d = a[p][0], 
        f = a[p][b], o && null !== f && (f[0] <= 0 || f[1] <= 0) && (f = null), null !== f ? (g = f[0], 
        h = f[1], null === g || isNaN(g) ? l.push([ d, g, [ g, g, g, h ] ]) : (i = h ? g / h : 0, 
        j = h ? n * Math.sqrt(i * (1 - i) / h) : 1, k = m * j, e = m * i, l.push([ d, e, [ e - k, e + k, g, h ] ]))) : l.push([ d, null, [ null, null, null, null ] ]);
        return l;
    }, a.prototype.rollingAverage = function(a, b, c) {
        b = Math.min(b, a.length);
        var d, e, f, g, h = [], i = c.get("sigma"), j = c.get("wilsonInterval"), k = 0, l = 0, m = 100;
        for (f = 0; f < a.length; f++) {
            k += a[f][2][2], l += a[f][2][3], f - b >= 0 && (k -= a[f - b][2][2], l -= a[f - b][2][3]);
            var n = a[f][0], o = l ? k / l : 0;
            if (j) if (l) {
                var p = 0 > o ? 0 : o, q = l, r = i * Math.sqrt(p * (1 - p) / q + i * i / (4 * q * q)), s = 1 + i * i / l;
                d = (p + i * i / (2 * l) - r) / s, e = (p + i * i / (2 * l) + r) / s, h[f] = [ n, p * m, [ d * m, e * m ] ];
            } else h[f] = [ n, 0, [ 0, 0 ] ]; else g = l ? i * Math.sqrt(o * (1 - o) / l) : 1, 
            h[f] = [ n, m * o, [ m * (o - g), m * (o + g) ] ];
        }
        return h;
    };
}(), function() {
    Date.now || (Date.now = function() {
        return new Date().getTime();
    });
    for (var a = [ "webkit", "moz" ], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
        var c = a[b];
        window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var d = 0;
        window.requestAnimationFrame = function(a) {
            var b = Date.now(), c = Math.max(d + 16, b);
            return setTimeout(function() {
                a(d = c);
            }, c - b);
        }, window.cancelAnimationFrame = clearTimeout;
    }
}();

var initClasses = [ "mui-enter", "mui-leave" ], activeClasses = [ "mui-enter-active", "mui-leave-active" ], endEvent = function() {
    var a = {
        transition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend"
    }, b = window.document.createElement("div");
    for (var c in a) if ("undefined" != typeof b.style[c]) return a[c];
    return null;
}(), MotionUI = {
    animateIn: function(a, b, c) {
        animate(!0, a, b, c);
    },
    animateOut: function(a, b, c) {
        animate(!1, a, b, c);
    }
};

!function() {
    function a(a) {
        var b, c, d;
        return this.length ? (b = this[0], b.ownerDocument ? d = b.ownerDocument : (d = b, 
        b = d.documentElement), null == a ? d.cancelFullScreen || d.webkitCancelFullScreen || d.mozCancelFullScreen ? (a = !!d.fullScreen || !!d.webkitIsFullScreen || !!d.mozFullScreen, 
        a ? d.fullScreenElement || d.webkitCurrentFullScreenElement || d.mozFullScreenElement || a : a) : null : a ? (c = b.requestFullScreen || b.webkitRequestFullScreen || b.mozRequestFullScreen, 
        c && c.call(b, Element.ALLOW_KEYBOARD_INPUT), this) : (c = d.cancelFullScreen || d.webkitCancelFullScreen || d.mozCancelFullScreen, 
        c && c.call(d), this)) : this;
    }
    function b() {
        return a.call(this, !a.call(this));
    }
    function c() {
        jQuery(document).trigger(new jQuery.Event("fullscreenchange"));
    }
    function d() {
        jQuery(document).trigger(new jQuery.Event("fullscreenerror"));
    }
    function e() {
        var a, b, e;
        a = document, a.webkitCancelFullScreen ? (b = "webkitfullscreenchange", e = "webkitfullscreenerror") : a.mozCancelFullScreen ? (b = "mozfullscreenchange", 
        e = "mozfullscreenerror") : (b = "fullscreenchange", e = "fullscreenerror"), jQuery(document).bind(b, c), 
        jQuery(document).bind(e, d);
    }
    jQuery.fn.fullScreen = a, jQuery.fn.toggleFullScreen = b, e();
}();