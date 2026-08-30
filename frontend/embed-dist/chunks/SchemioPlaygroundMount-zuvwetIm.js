var Th = { exports: {} }, Vr = {};
var Uy;
function aA() {
  if (Uy) return Vr;
  Uy = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function e(i, s, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      o = {};
      for (var c in s)
        c !== "key" && (o[c] = s[c]);
    } else o = s;
    return s = o.ref, {
      $$typeof: l,
      type: i,
      key: u,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Vr.Fragment = t, Vr.jsx = e, Vr.jsxs = e, Vr;
}
var Vy;
function uA() {
  return Vy || (Vy = 1, Th.exports = aA()), Th.exports;
}
var St = uA(), Oh = { exports: {} }, qr = {}, Dh = { exports: {} }, Eh = {};
var qy;
function cA() {
  return qy || (qy = 1, (function(l) {
    function t(L, W) {
      var it = L.length;
      L.push(W);
      t: for (; 0 < it; ) {
        var ot = it - 1 >>> 1, k = L[ot];
        if (0 < s(k, W))
          L[ot] = W, L[it] = k, it = ot;
        else break t;
      }
    }
    function e(L) {
      return L.length === 0 ? null : L[0];
    }
    function i(L) {
      if (L.length === 0) return null;
      var W = L[0], it = L.pop();
      if (it !== W) {
        L[0] = it;
        t: for (var ot = 0, k = L.length, q = k >>> 1; ot < q; ) {
          var Z = 2 * (ot + 1) - 1, J = L[Z], st = Z + 1, xt = L[st];
          if (0 > s(J, it))
            st < k && 0 > s(xt, J) ? (L[ot] = xt, L[st] = it, ot = st) : (L[ot] = J, L[Z] = it, ot = Z);
          else if (st < k && 0 > s(xt, it))
            L[ot] = xt, L[st] = it, ot = st;
          else break t;
        }
      }
      return W;
    }
    function s(L, W) {
      var it = L.sortIndex - W.sortIndex;
      return it !== 0 ? it : L.id - W.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      l.unstable_now = function() {
        return o.now();
      };
    } else {
      var u = Date, c = u.now();
      l.unstable_now = function() {
        return u.now() - c;
      };
    }
    var h = [], m = [], p = 1, y = null, v = 3, S = !1, w = !1, A = !1, M = !1, O = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function Q(L) {
      for (var W = e(m); W !== null; ) {
        if (W.callback === null) i(m);
        else if (W.startTime <= L)
          i(m), W.sortIndex = W.expirationTime, t(h, W);
        else break;
        W = e(m);
      }
    }
    function _(L) {
      if (A = !1, Q(L), !w)
        if (e(h) !== null)
          w = !0, K || (K = !0, I());
        else {
          var W = e(m);
          W !== null && gt(_, W.startTime - L);
        }
    }
    var K = !1, X = -1, lt = 5, et = -1;
    function yt() {
      return M ? !0 : !(l.unstable_now() - et < lt);
    }
    function at() {
      if (M = !1, K) {
        var L = l.unstable_now();
        et = L;
        var W = !0;
        try {
          t: {
            w = !1, A && (A = !1, H(X), X = -1), S = !0;
            var it = v;
            try {
              e: {
                for (Q(L), y = e(h); y !== null && !(y.expirationTime > L && yt()); ) {
                  var ot = y.callback;
                  if (typeof ot == "function") {
                    y.callback = null, v = y.priorityLevel;
                    var k = ot(
                      y.expirationTime <= L
                    );
                    if (L = l.unstable_now(), typeof k == "function") {
                      y.callback = k, Q(L), W = !0;
                      break e;
                    }
                    y === e(h) && i(h), Q(L);
                  } else i(h);
                  y = e(h);
                }
                if (y !== null) W = !0;
                else {
                  var q = e(m);
                  q !== null && gt(
                    _,
                    q.startTime - L
                  ), W = !1;
                }
              }
              break t;
            } finally {
              y = null, v = it, S = !1;
            }
            W = void 0;
          }
        } finally {
          W ? I() : K = !1;
        }
      }
    }
    var I;
    if (typeof z == "function")
      I = function() {
        z(at);
      };
    else if (typeof MessageChannel < "u") {
      var ft = new MessageChannel(), pt = ft.port2;
      ft.port1.onmessage = at, I = function() {
        pt.postMessage(null);
      };
    } else
      I = function() {
        O(at, 0);
      };
    function gt(L, W) {
      X = O(function() {
        L(l.unstable_now());
      }, W);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, l.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : lt = 0 < L ? Math.floor(1e3 / L) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, l.unstable_next = function(L) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = v;
      }
      var it = v;
      v = W;
      try {
        return L();
      } finally {
        v = it;
      }
    }, l.unstable_requestPaint = function() {
      M = !0;
    }, l.unstable_runWithPriority = function(L, W) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var it = v;
      v = L;
      try {
        return W();
      } finally {
        v = it;
      }
    }, l.unstable_scheduleCallback = function(L, W, it) {
      var ot = l.unstable_now();
      switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? ot + it : ot) : it = ot, L) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = it + k, L = {
        id: p++,
        callback: W,
        priorityLevel: L,
        startTime: it,
        expirationTime: k,
        sortIndex: -1
      }, it > ot ? (L.sortIndex = it, t(m, L), e(h) === null && L === e(m) && (A ? (H(X), X = -1) : A = !0, gt(_, it - ot))) : (L.sortIndex = k, t(h, L), w || S || (w = !0, K || (K = !0, I()))), L;
    }, l.unstable_shouldYield = yt, l.unstable_wrapCallback = function(L) {
      var W = v;
      return function() {
        var it = v;
        v = W;
        try {
          return L.apply(this, arguments);
        } finally {
          v = it;
        }
      };
    };
  })(Eh)), Eh;
}
var jy;
function fA() {
  return jy || (jy = 1, Dh.exports = cA()), Dh.exports;
}
var Rh = { exports: {} }, bt = {};
var Yy;
function hA() {
  if (Yy) return bt;
  Yy = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), e = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.consumer"), u = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function v(k) {
    return k === null || typeof k != "object" ? null : (k = y && k[y] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, A = {};
  function M(k, q, Z) {
    this.props = k, this.context = q, this.refs = A, this.updater = Z || S;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(k, q) {
    if (typeof k != "object" && typeof k != "function" && k != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, k, q, "setState");
  }, M.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function O() {
  }
  O.prototype = M.prototype;
  function H(k, q, Z) {
    this.props = k, this.context = q, this.refs = A, this.updater = Z || S;
  }
  var z = H.prototype = new O();
  z.constructor = H, w(z, M.prototype), z.isPureReactComponent = !0;
  var Q = Array.isArray, _ = { H: null, A: null, T: null, S: null, V: null }, K = Object.prototype.hasOwnProperty;
  function X(k, q, Z, J, st, xt) {
    return Z = xt.ref, {
      $$typeof: l,
      type: k,
      key: q,
      ref: Z !== void 0 ? Z : null,
      props: xt
    };
  }
  function lt(k, q) {
    return X(
      k.type,
      q,
      void 0,
      void 0,
      void 0,
      k.props
    );
  }
  function et(k) {
    return typeof k == "object" && k !== null && k.$$typeof === l;
  }
  function yt(k) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Z) {
      return q[Z];
    });
  }
  var at = /\/+/g;
  function I(k, q) {
    return typeof k == "object" && k !== null && k.key != null ? yt("" + k.key) : q.toString(36);
  }
  function ft() {
  }
  function pt(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (typeof k.status == "string" ? k.then(ft, ft) : (k.status = "pending", k.then(
          function(q) {
            k.status === "pending" && (k.status = "fulfilled", k.value = q);
          },
          function(q) {
            k.status === "pending" && (k.status = "rejected", k.reason = q);
          }
        )), k.status) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function gt(k, q, Z, J, st) {
    var xt = typeof k;
    (xt === "undefined" || xt === "boolean") && (k = null);
    var dt = !1;
    if (k === null) dt = !0;
    else
      switch (xt) {
        case "bigint":
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case l:
            case t:
              dt = !0;
              break;
            case p:
              return dt = k._init, gt(
                dt(k._payload),
                q,
                Z,
                J,
                st
              );
          }
      }
    if (dt)
      return st = st(k), dt = J === "" ? "." + I(k, 0) : J, Q(st) ? (Z = "", dt != null && (Z = dt.replace(at, "$&/") + "/"), gt(st, q, Z, "", function(gn) {
        return gn;
      })) : st != null && (et(st) && (st = lt(
        st,
        Z + (st.key == null || k && k.key === st.key ? "" : ("" + st.key).replace(
          at,
          "$&/"
        ) + "/") + dt
      )), q.push(st)), 1;
    dt = 0;
    var we = J === "" ? "." : J + ":";
    if (Q(k))
      for (var Kt = 0; Kt < k.length; Kt++)
        J = k[Kt], xt = we + I(J, Kt), dt += gt(
          J,
          q,
          Z,
          xt,
          st
        );
    else if (Kt = v(k), typeof Kt == "function")
      for (k = Kt.call(k), Kt = 0; !(J = k.next()).done; )
        J = J.value, xt = we + I(J, Kt++), dt += gt(
          J,
          q,
          Z,
          xt,
          st
        );
    else if (xt === "object") {
      if (typeof k.then == "function")
        return gt(
          pt(k),
          q,
          Z,
          J,
          st
        );
      throw q = String(k), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return dt;
  }
  function L(k, q, Z) {
    if (k == null) return k;
    var J = [], st = 0;
    return gt(k, J, "", "", function(xt) {
      return q.call(Z, xt, st++);
    }), J;
  }
  function W(k) {
    if (k._status === -1) {
      var q = k._result;
      q = q(), q.then(
        function(Z) {
          (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Z);
        },
        function(Z) {
          (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Z);
        }
      ), k._status === -1 && (k._status = 0, k._result = q);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var it = typeof reportError == "function" ? reportError : function(k) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof k == "object" && k !== null && typeof k.message == "string" ? String(k.message) : String(k),
        error: k
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", k);
      return;
    }
    console.error(k);
  };
  function ot() {
  }
  return bt.Children = {
    map: L,
    forEach: function(k, q, Z) {
      L(
        k,
        function() {
          q.apply(this, arguments);
        },
        Z
      );
    },
    count: function(k) {
      var q = 0;
      return L(k, function() {
        q++;
      }), q;
    },
    toArray: function(k) {
      return L(k, function(q) {
        return q;
      }) || [];
    },
    only: function(k) {
      if (!et(k))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return k;
    }
  }, bt.Component = M, bt.Fragment = e, bt.Profiler = s, bt.PureComponent = H, bt.StrictMode = i, bt.Suspense = h, bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, bt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(k) {
      return _.H.useMemoCache(k);
    }
  }, bt.cache = function(k) {
    return function() {
      return k.apply(null, arguments);
    };
  }, bt.cloneElement = function(k, q, Z) {
    if (k == null)
      throw Error(
        "The argument must be a React element, but you passed " + k + "."
      );
    var J = w({}, k.props), st = k.key, xt = void 0;
    if (q != null)
      for (dt in q.ref !== void 0 && (xt = void 0), q.key !== void 0 && (st = "" + q.key), q)
        !K.call(q, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && q.ref === void 0 || (J[dt] = q[dt]);
    var dt = arguments.length - 2;
    if (dt === 1) J.children = Z;
    else if (1 < dt) {
      for (var we = Array(dt), Kt = 0; Kt < dt; Kt++)
        we[Kt] = arguments[Kt + 2];
      J.children = we;
    }
    return X(k.type, st, void 0, void 0, xt, J);
  }, bt.createContext = function(k) {
    return k = {
      $$typeof: u,
      _currentValue: k,
      _currentValue2: k,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, k.Provider = k, k.Consumer = {
      $$typeof: o,
      _context: k
    }, k;
  }, bt.createElement = function(k, q, Z) {
    var J, st = {}, xt = null;
    if (q != null)
      for (J in q.key !== void 0 && (xt = "" + q.key), q)
        K.call(q, J) && J !== "key" && J !== "__self" && J !== "__source" && (st[J] = q[J]);
    var dt = arguments.length - 2;
    if (dt === 1) st.children = Z;
    else if (1 < dt) {
      for (var we = Array(dt), Kt = 0; Kt < dt; Kt++)
        we[Kt] = arguments[Kt + 2];
      st.children = we;
    }
    if (k && k.defaultProps)
      for (J in dt = k.defaultProps, dt)
        st[J] === void 0 && (st[J] = dt[J]);
    return X(k, xt, void 0, void 0, null, st);
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(k) {
    return { $$typeof: c, render: k };
  }, bt.isValidElement = et, bt.lazy = function(k) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: k },
      _init: W
    };
  }, bt.memo = function(k, q) {
    return {
      $$typeof: m,
      type: k,
      compare: q === void 0 ? null : q
    };
  }, bt.startTransition = function(k) {
    var q = _.T, Z = {};
    _.T = Z;
    try {
      var J = k(), st = _.S;
      st !== null && st(Z, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ot, it);
    } catch (xt) {
      it(xt);
    } finally {
      _.T = q;
    }
  }, bt.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, bt.use = function(k) {
    return _.H.use(k);
  }, bt.useActionState = function(k, q, Z) {
    return _.H.useActionState(k, q, Z);
  }, bt.useCallback = function(k, q) {
    return _.H.useCallback(k, q);
  }, bt.useContext = function(k) {
    return _.H.useContext(k);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(k, q) {
    return _.H.useDeferredValue(k, q);
  }, bt.useEffect = function(k, q, Z) {
    var J = _.H;
    if (typeof Z == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return J.useEffect(k, q);
  }, bt.useId = function() {
    return _.H.useId();
  }, bt.useImperativeHandle = function(k, q, Z) {
    return _.H.useImperativeHandle(k, q, Z);
  }, bt.useInsertionEffect = function(k, q) {
    return _.H.useInsertionEffect(k, q);
  }, bt.useLayoutEffect = function(k, q) {
    return _.H.useLayoutEffect(k, q);
  }, bt.useMemo = function(k, q) {
    return _.H.useMemo(k, q);
  }, bt.useOptimistic = function(k, q) {
    return _.H.useOptimistic(k, q);
  }, bt.useReducer = function(k, q, Z) {
    return _.H.useReducer(k, q, Z);
  }, bt.useRef = function(k) {
    return _.H.useRef(k);
  }, bt.useState = function(k) {
    return _.H.useState(k);
  }, bt.useSyncExternalStore = function(k, q, Z) {
    return _.H.useSyncExternalStore(
      k,
      q,
      Z
    );
  }, bt.useTransition = function() {
    return _.H.useTransition();
  }, bt.version = "19.1.1", bt;
}
var Gy;
function om() {
  return Gy || (Gy = 1, Rh.exports = hA()), Rh.exports;
}
var Bh = { exports: {} }, ke = {};
var Ky;
function dA() {
  if (Ky) return ke;
  Ky = 1;
  var l = om();
  function t(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        m += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function e() {
  }
  var i = {
    d: {
      f: e,
      r: function() {
        throw Error(t(522));
      },
      D: e,
      C: e,
      L: e,
      m: e,
      X: e,
      S: e,
      M: e
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function o(h, m, p) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: m,
      implementation: p
    };
  }
  var u = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(h, m) {
    if (h === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, ke.createPortal = function(h, m) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(t(299));
    return o(h, m, null, p);
  }, ke.flushSync = function(h) {
    var m = u.T, p = i.p;
    try {
      if (u.T = null, i.p = 2, h) return h();
    } finally {
      u.T = m, i.p = p, i.d.f();
    }
  }, ke.preconnect = function(h, m) {
    typeof h == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, i.d.C(h, m));
  }, ke.prefetchDNS = function(h) {
    typeof h == "string" && i.d.D(h);
  }, ke.preinit = function(h, m) {
    if (typeof h == "string" && m && typeof m.as == "string") {
      var p = m.as, y = c(p, m.crossOrigin), v = typeof m.integrity == "string" ? m.integrity : void 0, S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      p === "style" ? i.d.S(
        h,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: y,
          integrity: v,
          fetchPriority: S
        }
      ) : p === "script" && i.d.X(h, {
        crossOrigin: y,
        integrity: v,
        fetchPriority: S,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, ke.preinitModule = function(h, m) {
    if (typeof h == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var p = c(
            m.as,
            m.crossOrigin
          );
          i.d.M(h, {
            crossOrigin: p,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && i.d.M(h);
  }, ke.preload = function(h, m) {
    if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var p = m.as, y = c(p, m.crossOrigin);
      i.d.L(h, p, {
        crossOrigin: y,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, ke.preloadModule = function(h, m) {
    if (typeof h == "string")
      if (m) {
        var p = c(m.as, m.crossOrigin);
        i.d.m(h, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: p,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else i.d.m(h);
  }, ke.requestFormReset = function(h) {
    i.d.r(h);
  }, ke.unstable_batchedUpdates = function(h, m) {
    return h(m);
  }, ke.useFormState = function(h, m, p) {
    return u.H.useFormState(h, m, p);
  }, ke.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, ke.version = "19.1.1", ke;
}
var Xy;
function mA() {
  if (Xy) return Bh.exports;
  Xy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), Bh.exports = dA(), Bh.exports;
}
var Wy;
function pA() {
  if (Wy) return qr;
  Wy = 1;
  var l = fA(), t = om(), e = mA();
  function i(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        r += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function o(n) {
    var r = n, a = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (a = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? a : null;
  }
  function u(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function c(n) {
    if (o(n) !== n)
      throw Error(i(188));
  }
  function h(n) {
    var r = n.alternate;
    if (!r) {
      if (r = o(n), r === null) throw Error(i(188));
      return r !== n ? null : n;
    }
    for (var a = n, f = r; ; ) {
      var d = a.return;
      if (d === null) break;
      var g = d.alternate;
      if (g === null) {
        if (f = d.return, f !== null) {
          a = f;
          continue;
        }
        break;
      }
      if (d.child === g.child) {
        for (g = d.child; g; ) {
          if (g === a) return c(d), n;
          if (g === f) return c(d), r;
          g = g.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== f.return) a = d, f = g;
      else {
        for (var b = !1, x = d.child; x; ) {
          if (x === a) {
            b = !0, a = d, f = g;
            break;
          }
          if (x === f) {
            b = !0, f = d, a = g;
            break;
          }
          x = x.sibling;
        }
        if (!b) {
          for (x = g.child; x; ) {
            if (x === a) {
              b = !0, a = g, f = d;
              break;
            }
            if (x === f) {
              b = !0, f = g, a = d;
              break;
            }
            x = x.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (a.alternate !== f) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? n : r;
  }
  function m(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n;
    for (n = n.child; n !== null; ) {
      if (r = m(n), r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var p = Object.assign, y = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.provider"), H = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), lt = /* @__PURE__ */ Symbol.for("react.lazy"), et = /* @__PURE__ */ Symbol.for("react.activity"), yt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
  function I(n) {
    return n === null || typeof n != "object" ? null : (n = at && n[at] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ft = /* @__PURE__ */ Symbol.for("react.client.reference");
  function pt(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === ft ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case w:
        return "Fragment";
      case M:
        return "Profiler";
      case A:
        return "StrictMode";
      case _:
        return "Suspense";
      case K:
        return "SuspenseList";
      case et:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case S:
          return "Portal";
        case z:
          return (n.displayName || "Context") + ".Provider";
        case H:
          return (n._context.displayName || "Context") + ".Consumer";
        case Q:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case X:
          return r = n.displayName || null, r !== null ? r : pt(n.type) || "Memo";
        case lt:
          r = n._payload, n = n._init;
          try {
            return pt(n(r));
          } catch {
          }
      }
    return null;
  }
  var gt = Array.isArray, L = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, it = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ot = [], k = -1;
  function q(n) {
    return { current: n };
  }
  function Z(n) {
    0 > k || (n.current = ot[k], ot[k] = null, k--);
  }
  function J(n, r) {
    k++, ot[k] = n.current, n.current = r;
  }
  var st = q(null), xt = q(null), dt = q(null), we = q(null);
  function Kt(n, r) {
    switch (J(dt, r), J(xt, n), J(st, null), r.nodeType) {
      case 9:
      case 11:
        n = (n = r.documentElement) && (n = n.namespaceURI) ? hy(n) : 0;
        break;
      default:
        if (n = r.tagName, r = r.namespaceURI)
          r = hy(r), n = dy(r, n);
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    Z(st), J(st, n);
  }
  function gn() {
    Z(st), Z(xt), Z(dt);
  }
  function fc(n) {
    n.memoizedState !== null && J(we, n);
    var r = st.current, a = dy(r, n.type);
    r !== a && (J(xt, n), J(st, a));
  }
  function Do(n) {
    xt.current === n && (Z(st), Z(xt)), we.current === n && (Z(we), Lr._currentValue = it);
  }
  var hc = Object.prototype.hasOwnProperty, dc = l.unstable_scheduleCallback, mc = l.unstable_cancelCallback, qx = l.unstable_shouldYield, jx = l.unstable_requestPaint, Oi = l.unstable_now, Yx = l.unstable_getCurrentPriorityLevel, Wm = l.unstable_ImmediatePriority, Qm = l.unstable_UserBlockingPriority, Eo = l.unstable_NormalPriority, Gx = l.unstable_LowPriority, Zm = l.unstable_IdlePriority, Kx = l.log, Xx = l.unstable_setDisableYieldValue, Ys = null, Xe = null;
  function yn(n) {
    if (typeof Kx == "function" && Xx(n), Xe && typeof Xe.setStrictMode == "function")
      try {
        Xe.setStrictMode(Ys, n);
      } catch {
      }
  }
  var We = Math.clz32 ? Math.clz32 : Zx, Wx = Math.log, Qx = Math.LN2;
  function Zx(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wx(n) / Qx | 0) | 0;
  }
  var Ro = 256, Bo = 4194304;
  function il(n) {
    var r = n & 42;
    if (r !== 0) return r;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function No(n, r, a) {
    var f = n.pendingLanes;
    if (f === 0) return 0;
    var d = 0, g = n.suspendedLanes, b = n.pingedLanes;
    n = n.warmLanes;
    var x = f & 134217727;
    return x !== 0 ? (f = x & ~g, f !== 0 ? d = il(f) : (b &= x, b !== 0 ? d = il(b) : a || (a = x & ~n, a !== 0 && (d = il(a))))) : (x = f & ~g, x !== 0 ? d = il(x) : b !== 0 ? d = il(b) : a || (a = f & ~n, a !== 0 && (d = il(a)))), d === 0 ? 0 : r !== 0 && r !== d && (r & g) === 0 && (g = d & -d, a = r & -r, g >= a || g === 32 && (a & 4194048) !== 0) ? r : d;
  }
  function Gs(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function Jx(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Jm() {
    var n = Ro;
    return Ro <<= 1, (Ro & 4194048) === 0 && (Ro = 256), n;
  }
  function Fm() {
    var n = Bo;
    return Bo <<= 1, (Bo & 62914560) === 0 && (Bo = 4194304), n;
  }
  function pc(n) {
    for (var r = [], a = 0; 31 > a; a++) r.push(n);
    return r;
  }
  function Ks(n, r) {
    n.pendingLanes |= r, r !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
  }
  function Fx(n, r, a, f, d, g) {
    var b = n.pendingLanes;
    n.pendingLanes = a, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= a, n.entangledLanes &= a, n.errorRecoveryDisabledLanes &= a, n.shellSuspendCounter = 0;
    var x = n.entanglements, C = n.expirationTimes, R = n.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var U = 31 - We(a), G = 1 << U;
      x[U] = 0, C[U] = -1;
      var B = R[U];
      if (B !== null)
        for (R[U] = null, U = 0; U < B.length; U++) {
          var N = B[U];
          N !== null && (N.lane &= -536870913);
        }
      a &= ~G;
    }
    f !== 0 && Pm(n, f, 0), g !== 0 && d === 0 && n.tag !== 0 && (n.suspendedLanes |= g & ~(b & ~r));
  }
  function Pm(n, r, a) {
    n.pendingLanes |= r, n.suspendedLanes &= ~r;
    var f = 31 - We(r);
    n.entangledLanes |= r, n.entanglements[f] = n.entanglements[f] | 1073741824 | a & 4194090;
  }
  function Im(n, r) {
    var a = n.entangledLanes |= r;
    for (n = n.entanglements; a; ) {
      var f = 31 - We(a), d = 1 << f;
      d & r | n[f] & r && (n[f] |= r), a &= ~d;
    }
  }
  function gc(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function yc(n) {
    return n &= -n, 2 < n ? 8 < n ? (n & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function $m() {
    var n = W.p;
    return n !== 0 ? n : (n = window.event, n === void 0 ? 32 : By(n.type));
  }
  function Px(n, r) {
    var a = W.p;
    try {
      return W.p = n, r();
    } finally {
      W.p = a;
    }
  }
  var vn = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + vn, Le = "__reactProps$" + vn, Ll = "__reactContainer$" + vn, vc = "__reactEvents$" + vn, Ix = "__reactListeners$" + vn, $x = "__reactHandles$" + vn, tp = "__reactResources$" + vn, Xs = "__reactMarker$" + vn;
  function bc(n) {
    delete n[Ae], delete n[Le], delete n[vc], delete n[Ix], delete n[$x];
  }
  function zl(n) {
    var r = n[Ae];
    if (r) return r;
    for (var a = n.parentNode; a; ) {
      if (r = a[Ll] || a[Ae]) {
        if (a = r.alternate, r.child !== null || a !== null && a.child !== null)
          for (n = yy(n); n !== null; ) {
            if (a = n[Ae]) return a;
            n = yy(n);
          }
        return r;
      }
      n = a, a = n.parentNode;
    }
    return null;
  }
  function Hl(n) {
    if (n = n[Ae] || n[Ll]) {
      var r = n.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3)
        return n;
    }
    return null;
  }
  function Ws(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(i(33));
  }
  function _l(n) {
    var r = n[tp];
    return r || (r = n[tp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), r;
  }
  function ue(n) {
    n[Xs] = !0;
  }
  var ep = /* @__PURE__ */ new Set(), ip = {};
  function nl(n, r) {
    Ul(n, r), Ul(n + "Capture", r);
  }
  function Ul(n, r) {
    for (ip[n] = r, n = 0; n < r.length; n++)
      ep.add(r[n]);
  }
  var tw = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), np = {}, lp = {};
  function ew(n) {
    return hc.call(lp, n) ? !0 : hc.call(np, n) ? !1 : tw.test(n) ? lp[n] = !0 : (np[n] = !0, !1);
  }
  function Lo(n, r, a) {
    if (ew(r))
      if (a === null) n.removeAttribute(r);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(r);
            return;
          case "boolean":
            var f = r.toLowerCase().slice(0, 5);
            if (f !== "data-" && f !== "aria-") {
              n.removeAttribute(r);
              return;
            }
        }
        n.setAttribute(r, "" + a);
      }
  }
  function zo(n, r, a) {
    if (a === null) n.removeAttribute(r);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + a);
    }
  }
  function Fi(n, r, a, f) {
    if (f === null) n.removeAttribute(a);
    else {
      switch (typeof f) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(a);
          return;
      }
      n.setAttributeNS(r, a, "" + f);
    }
  }
  var Sc, sp;
  function Vl(n) {
    if (Sc === void 0)
      try {
        throw Error();
      } catch (a) {
        var r = a.stack.trim().match(/\n( *(at )?)/);
        Sc = r && r[1] || "", sp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Sc + n + sp;
  }
  var xc = !1;
  function wc(n, r) {
    if (!n || xc) return "";
    xc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var f = {
        DetermineComponentFrameRoot: function() {
          try {
            if (r) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (N) {
                  var B = N;
                }
                Reflect.construct(n, [], G);
              } else {
                try {
                  G.call();
                } catch (N) {
                  B = N;
                }
                n.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                B = N;
              }
              (G = n()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (N) {
            if (N && B && typeof N.stack == "string")
              return [N.stack, B.stack];
          }
          return [null, null];
        }
      };
      f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        f.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        f.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var g = f.DetermineComponentFrameRoot(), b = g[0], x = g[1];
      if (b && x) {
        var C = b.split(`
`), R = x.split(`
`);
        for (d = f = 0; f < C.length && !C[f].includes("DetermineComponentFrameRoot"); )
          f++;
        for (; d < R.length && !R[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (f === C.length || d === R.length)
          for (f = C.length - 1, d = R.length - 1; 1 <= f && 0 <= d && C[f] !== R[d]; )
            d--;
        for (; 1 <= f && 0 <= d; f--, d--)
          if (C[f] !== R[d]) {
            if (f !== 1 || d !== 1)
              do
                if (f--, d--, 0 > d || C[f] !== R[d]) {
                  var U = `
` + C[f].replace(" at new ", " at ");
                  return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
                }
              while (1 <= f && 0 <= d);
            break;
          }
      }
    } finally {
      xc = !1, Error.prepareStackTrace = a;
    }
    return (a = n ? n.displayName || n.name : "") ? Vl(a) : "";
  }
  function iw(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return Vl(n.type);
      case 16:
        return Vl("Lazy");
      case 13:
        return Vl("Suspense");
      case 19:
        return Vl("SuspenseList");
      case 0:
      case 15:
        return wc(n.type, !1);
      case 11:
        return wc(n.type.render, !1);
      case 1:
        return wc(n.type, !0);
      case 31:
        return Vl("Activity");
      default:
        return "";
    }
  }
  function rp(n) {
    try {
      var r = "";
      do
        r += iw(n), n = n.return;
      while (n);
      return r;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function ni(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function op(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function nw(n) {
    var r = op(n) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      n.constructor.prototype,
      r
    ), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var d = a.get, g = a.set;
      return Object.defineProperty(n, r, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(b) {
          f = "" + b, g.call(this, b);
        }
      }), Object.defineProperty(n, r, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return f;
        },
        setValue: function(b) {
          f = "" + b;
        },
        stopTracking: function() {
          n._valueTracker = null, delete n[r];
        }
      };
    }
  }
  function Ho(n) {
    n._valueTracker || (n._valueTracker = nw(n));
  }
  function ap(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var a = r.getValue(), f = "";
    return n && (f = op(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== a ? (r.setValue(n), !0) : !1;
  }
  function _o(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var lw = /[\n"\\]/g;
  function li(n) {
    return n.replace(
      lw,
      function(r) {
        return "\\" + r.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ac(n, r, a, f, d, g, b, x) {
    n.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? n.type = b : n.removeAttribute("type"), r != null ? b === "number" ? (r === 0 && n.value === "" || n.value != r) && (n.value = "" + ni(r)) : n.value !== "" + ni(r) && (n.value = "" + ni(r)) : b !== "submit" && b !== "reset" || n.removeAttribute("value"), r != null ? Cc(n, b, ni(r)) : a != null ? Cc(n, b, ni(a)) : f != null && n.removeAttribute("value"), d == null && g != null && (n.defaultChecked = !!g), d != null && (n.checked = d && typeof d != "function" && typeof d != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? n.name = "" + ni(x) : n.removeAttribute("name");
  }
  function up(n, r, a, f, d, g, b, x) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (n.type = g), r != null || a != null) {
      if (!(g !== "submit" && g !== "reset" || r != null))
        return;
      a = a != null ? "" + ni(a) : "", r = r != null ? "" + ni(r) : a, x || r === n.value || (n.value = r), n.defaultValue = r;
    }
    f = f ?? d, f = typeof f != "function" && typeof f != "symbol" && !!f, n.checked = x ? n.checked : !!f, n.defaultChecked = !!f, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (n.name = b);
  }
  function Cc(n, r, a) {
    r === "number" && _o(n.ownerDocument) === n || n.defaultValue === "" + a || (n.defaultValue = "" + a);
  }
  function ql(n, r, a, f) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < a.length; d++)
        r["$" + a[d]] = !0;
      for (a = 0; a < n.length; a++)
        d = r.hasOwnProperty("$" + n[a].value), n[a].selected !== d && (n[a].selected = d), d && f && (n[a].defaultSelected = !0);
    } else {
      for (a = "" + ni(a), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === a) {
          n[d].selected = !0, f && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function cp(n, r, a) {
    if (r != null && (r = "" + ni(r), r !== n.value && (n.value = r), a == null)) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = a != null ? "" + ni(a) : "";
  }
  function fp(n, r, a, f) {
    if (r == null) {
      if (f != null) {
        if (a != null) throw Error(i(92));
        if (gt(f)) {
          if (1 < f.length) throw Error(i(93));
          f = f[0];
        }
        a = f;
      }
      a == null && (a = ""), r = a;
    }
    a = ni(r), n.defaultValue = a, f = n.textContent, f === a && f !== "" && f !== null && (n.value = f);
  }
  function jl(n, r) {
    if (r) {
      var a = n.firstChild;
      if (a && a === n.lastChild && a.nodeType === 3) {
        a.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var sw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hp(n, r, a) {
    var f = r.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? f ? n.setProperty(r, "") : r === "float" ? n.cssFloat = "" : n[r] = "" : f ? n.setProperty(r, a) : typeof a != "number" || a === 0 || sw.has(r) ? r === "float" ? n.cssFloat = a : n[r] = ("" + a).trim() : n[r] = a + "px";
  }
  function dp(n, r, a) {
    if (r != null && typeof r != "object")
      throw Error(i(62));
    if (n = n.style, a != null) {
      for (var f in a)
        !a.hasOwnProperty(f) || r != null && r.hasOwnProperty(f) || (f.indexOf("--") === 0 ? n.setProperty(f, "") : f === "float" ? n.cssFloat = "" : n[f] = "");
      for (var d in r)
        f = r[d], r.hasOwnProperty(d) && a[d] !== f && hp(n, d, f);
    } else
      for (var g in r)
        r.hasOwnProperty(g) && hp(n, g, r[g]);
  }
  function kc(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var rw = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ow = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uo(n) {
    return ow.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
  }
  var Mc = null;
  function Tc(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yl = null, Gl = null;
  function mp(n) {
    var r = Hl(n);
    if (r && (n = r.stateNode)) {
      var a = n[Le] || null;
      t: switch (n = r.stateNode, r.type) {
        case "input":
          if (Ac(
            n,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), r = a.name, a.type === "radio" && r != null) {
            for (a = n; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + li(
                "" + r
              ) + '"][type="radio"]'
            ), r = 0; r < a.length; r++) {
              var f = a[r];
              if (f !== n && f.form === n.form) {
                var d = f[Le] || null;
                if (!d) throw Error(i(90));
                Ac(
                  f,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (r = 0; r < a.length; r++)
              f = a[r], f.form === n.form && ap(f);
          }
          break t;
        case "textarea":
          cp(n, a.value, a.defaultValue);
          break t;
        case "select":
          r = a.value, r != null && ql(n, !!a.multiple, r, !1);
      }
    }
  }
  var Oc = !1;
  function pp(n, r, a) {
    if (Oc) return n(r, a);
    Oc = !0;
    try {
      var f = n(r);
      return f;
    } finally {
      if (Oc = !1, (Yl !== null || Gl !== null) && (Aa(), Yl && (r = Yl, n = Gl, Gl = Yl = null, mp(r), n)))
        for (r = 0; r < n.length; r++) mp(n[r]);
    }
  }
  function Qs(n, r) {
    var a = n.stateNode;
    if (a === null) return null;
    var f = a[Le] || null;
    if (f === null) return null;
    a = f[r];
    t: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break t;
      default:
        n = !1;
    }
    if (n) return null;
    if (a && typeof a != "function")
      throw Error(
        i(231, r, typeof a)
      );
    return a;
  }
  var Pi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dc = !1;
  if (Pi)
    try {
      var Zs = {};
      Object.defineProperty(Zs, "passive", {
        get: function() {
          Dc = !0;
        }
      }), window.addEventListener("test", Zs, Zs), window.removeEventListener("test", Zs, Zs);
    } catch {
      Dc = !1;
    }
  var bn = null, Ec = null, Vo = null;
  function gp() {
    if (Vo) return Vo;
    var n, r = Ec, a = r.length, f, d = "value" in bn ? bn.value : bn.textContent, g = d.length;
    for (n = 0; n < a && r[n] === d[n]; n++) ;
    var b = a - n;
    for (f = 1; f <= b && r[a - f] === d[g - f]; f++) ;
    return Vo = d.slice(n, 1 < f ? 1 - f : void 0);
  }
  function qo(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function jo() {
    return !0;
  }
  function yp() {
    return !1;
  }
  function ze(n) {
    function r(a, f, d, g, b) {
      this._reactName = a, this._targetInst = d, this.type = f, this.nativeEvent = g, this.target = b, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (a = n[x], this[x] = a ? a(g) : g[x]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? jo : yp, this.isPropagationStopped = yp, this;
    }
    return p(r.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jo);
      },
      persist: function() {
      },
      isPersistent: jo
    }), r;
  }
  var ll = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(n) {
      return n.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Yo = ze(ll), Js = p({}, ll, { view: 0, detail: 0 }), aw = ze(Js), Rc, Bc, Fs, Go = p({}, Js, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lc,
    button: 0,
    buttons: 0,
    relatedTarget: function(n) {
      return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
    },
    movementX: function(n) {
      return "movementX" in n ? n.movementX : (n !== Fs && (Fs && n.type === "mousemove" ? (Rc = n.screenX - Fs.screenX, Bc = n.screenY - Fs.screenY) : Bc = Rc = 0, Fs = n), Rc);
    },
    movementY: function(n) {
      return "movementY" in n ? n.movementY : Bc;
    }
  }), vp = ze(Go), uw = p({}, Go, { dataTransfer: 0 }), cw = ze(uw), fw = p({}, Js, { relatedTarget: 0 }), Nc = ze(fw), hw = p({}, ll, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dw = ze(hw), mw = p({}, ll, {
    clipboardData: function(n) {
      return "clipboardData" in n ? n.clipboardData : window.clipboardData;
    }
  }), pw = ze(mw), gw = p({}, ll, { data: 0 }), bp = ze(gw), yw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, vw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, bw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Sw(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = bw[n]) ? !!r[n] : !1;
  }
  function Lc() {
    return Sw;
  }
  var xw = p({}, Js, {
    key: function(n) {
      if (n.key) {
        var r = yw[n.key] || n.key;
        if (r !== "Unidentified") return r;
      }
      return n.type === "keypress" ? (n = qo(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? vw[n.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lc,
    charCode: function(n) {
      return n.type === "keypress" ? qo(n) : 0;
    },
    keyCode: function(n) {
      return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    },
    which: function(n) {
      return n.type === "keypress" ? qo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    }
  }), ww = ze(xw), Aw = p({}, Go, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Sp = ze(Aw), Cw = p({}, Js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lc
  }), kw = ze(Cw), Mw = p({}, ll, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Tw = ze(Mw), Ow = p({}, Go, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Dw = ze(Ow), Ew = p({}, ll, {
    newState: 0,
    oldState: 0
  }), Rw = ze(Ew), Bw = [9, 13, 27, 32], zc = Pi && "CompositionEvent" in window, Ps = null;
  Pi && "documentMode" in document && (Ps = document.documentMode);
  var Nw = Pi && "TextEvent" in window && !Ps, xp = Pi && (!zc || Ps && 8 < Ps && 11 >= Ps), wp = " ", Ap = !1;
  function Cp(n, r) {
    switch (n) {
      case "keyup":
        return Bw.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Kl = !1;
  function Lw(n, r) {
    switch (n) {
      case "compositionend":
        return kp(r);
      case "keypress":
        return r.which !== 32 ? null : (Ap = !0, wp);
      case "textInput":
        return n = r.data, n === wp && Ap ? null : n;
      default:
        return null;
    }
  }
  function zw(n, r) {
    if (Kl)
      return n === "compositionend" || !zc && Cp(n, r) ? (n = gp(), Vo = Ec = bn = null, Kl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return xp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Hw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Mp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Hw[n.type] : r === "textarea";
  }
  function Tp(n, r, a, f) {
    Yl ? Gl ? Gl.push(f) : Gl = [f] : Yl = f, r = Da(r, "onChange"), 0 < r.length && (a = new Yo(
      "onChange",
      "change",
      null,
      a,
      f
    ), n.push({ event: a, listeners: r }));
  }
  var Is = null, $s = null;
  function _w(n) {
    oy(n, 0);
  }
  function Ko(n) {
    var r = Ws(n);
    if (ap(r)) return n;
  }
  function Op(n, r) {
    if (n === "change") return r;
  }
  var Dp = !1;
  if (Pi) {
    var Hc;
    if (Pi) {
      var _c = "oninput" in document;
      if (!_c) {
        var Ep = document.createElement("div");
        Ep.setAttribute("oninput", "return;"), _c = typeof Ep.oninput == "function";
      }
      Hc = _c;
    } else Hc = !1;
    Dp = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function Rp() {
    Is && (Is.detachEvent("onpropertychange", Bp), $s = Is = null);
  }
  function Bp(n) {
    if (n.propertyName === "value" && Ko($s)) {
      var r = [];
      Tp(
        r,
        $s,
        n,
        Tc(n)
      ), pp(_w, r);
    }
  }
  function Uw(n, r, a) {
    n === "focusin" ? (Rp(), Is = r, $s = a, Is.attachEvent("onpropertychange", Bp)) : n === "focusout" && Rp();
  }
  function Vw(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ko($s);
  }
  function qw(n, r) {
    if (n === "click") return Ko(r);
  }
  function jw(n, r) {
    if (n === "input" || n === "change")
      return Ko(r);
  }
  function Yw(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Qe = typeof Object.is == "function" ? Object.is : Yw;
  function tr(n, r) {
    if (Qe(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var a = Object.keys(n), f = Object.keys(r);
    if (a.length !== f.length) return !1;
    for (f = 0; f < a.length; f++) {
      var d = a[f];
      if (!hc.call(r, d) || !Qe(n[d], r[d]))
        return !1;
    }
    return !0;
  }
  function Np(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Lp(n, r) {
    var a = Np(n);
    n = 0;
    for (var f; a; ) {
      if (a.nodeType === 3) {
        if (f = n + a.textContent.length, n <= r && f >= r)
          return { node: a, offset: r - n };
        n = f;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Np(a);
    }
  }
  function zp(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? zp(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Hp(n) {
    n = n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null ? n.ownerDocument.defaultView : window;
    for (var r = _o(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var a = typeof r.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) n = r.contentWindow;
      else break;
      r = _o(n.document);
    }
    return r;
  }
  function Uc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  var Gw = Pi && "documentMode" in document && 11 >= document.documentMode, Xl = null, Vc = null, er = null, qc = !1;
  function _p(n, r, a) {
    var f = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    qc || Xl == null || Xl !== _o(f) || (f = Xl, "selectionStart" in f && Uc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = {
      anchorNode: f.anchorNode,
      anchorOffset: f.anchorOffset,
      focusNode: f.focusNode,
      focusOffset: f.focusOffset
    }), er && tr(er, f) || (er = f, f = Da(Vc, "onSelect"), 0 < f.length && (r = new Yo(
      "onSelect",
      "select",
      null,
      r,
      a
    ), n.push({ event: r, listeners: f }), r.target = Xl)));
  }
  function sl(n, r) {
    var a = {};
    return a[n.toLowerCase()] = r.toLowerCase(), a["Webkit" + n] = "webkit" + r, a["Moz" + n] = "moz" + r, a;
  }
  var Wl = {
    animationend: sl("Animation", "AnimationEnd"),
    animationiteration: sl("Animation", "AnimationIteration"),
    animationstart: sl("Animation", "AnimationStart"),
    transitionrun: sl("Transition", "TransitionRun"),
    transitionstart: sl("Transition", "TransitionStart"),
    transitioncancel: sl("Transition", "TransitionCancel"),
    transitionend: sl("Transition", "TransitionEnd")
  }, jc = {}, Up = {};
  Pi && (Up = document.createElement("div").style, "AnimationEvent" in window || (delete Wl.animationend.animation, delete Wl.animationiteration.animation, delete Wl.animationstart.animation), "TransitionEvent" in window || delete Wl.transitionend.transition);
  function rl(n) {
    if (jc[n]) return jc[n];
    if (!Wl[n]) return n;
    var r = Wl[n], a;
    for (a in r)
      if (r.hasOwnProperty(a) && a in Up)
        return jc[n] = r[a];
    return n;
  }
  var Vp = rl("animationend"), qp = rl("animationiteration"), jp = rl("animationstart"), Kw = rl("transitionrun"), Xw = rl("transitionstart"), Ww = rl("transitioncancel"), Yp = rl("transitionend"), Gp = /* @__PURE__ */ new Map(), Yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Yc.push("scrollEnd");
  function Si(n, r) {
    Gp.set(n, r), nl(r, [n]);
  }
  var Kp = /* @__PURE__ */ new WeakMap();
  function si(n, r) {
    if (typeof n == "object" && n !== null) {
      var a = Kp.get(n);
      return a !== void 0 ? a : (r = {
        value: n,
        source: r,
        stack: rp(r)
      }, Kp.set(n, r), r);
    }
    return {
      value: n,
      source: r,
      stack: rp(r)
    };
  }
  var ri = [], Ql = 0, Gc = 0;
  function Xo() {
    for (var n = Ql, r = Gc = Ql = 0; r < n; ) {
      var a = ri[r];
      ri[r++] = null;
      var f = ri[r];
      ri[r++] = null;
      var d = ri[r];
      ri[r++] = null;
      var g = ri[r];
      if (ri[r++] = null, f !== null && d !== null) {
        var b = f.pending;
        b === null ? d.next = d : (d.next = b.next, b.next = d), f.pending = d;
      }
      g !== 0 && Xp(a, d, g);
    }
  }
  function Wo(n, r, a, f) {
    ri[Ql++] = n, ri[Ql++] = r, ri[Ql++] = a, ri[Ql++] = f, Gc |= f, n.lanes |= f, n = n.alternate, n !== null && (n.lanes |= f);
  }
  function Kc(n, r, a, f) {
    return Wo(n, r, a, f), Qo(n);
  }
  function Zl(n, r) {
    return Wo(n, null, null, r), Qo(n);
  }
  function Xp(n, r, a) {
    n.lanes |= a;
    var f = n.alternate;
    f !== null && (f.lanes |= a);
    for (var d = !1, g = n.return; g !== null; )
      g.childLanes |= a, f = g.alternate, f !== null && (f.childLanes |= a), g.tag === 22 && (n = g.stateNode, n === null || n._visibility & 1 || (d = !0)), n = g, g = g.return;
    return n.tag === 3 ? (g = n.stateNode, d && r !== null && (d = 31 - We(a), n = g.hiddenUpdates, f = n[d], f === null ? n[d] = [r] : f.push(r), r.lane = a | 536870912), g) : null;
  }
  function Qo(n) {
    if (50 < Mr)
      throw Mr = 0, Pf = null, Error(i(185));
    for (var r = n.return; r !== null; )
      n = r, r = n.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jl = {};
  function Qw(n, r, a, f) {
    this.tag = n, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(n, r, a, f) {
    return new Qw(n, r, a, f);
  }
  function Xc(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ii(n, r) {
    var a = n.alternate;
    return a === null ? (a = Ze(
      n.tag,
      r,
      n.key,
      n.mode
    ), a.elementType = n.elementType, a.type = n.type, a.stateNode = n.stateNode, a.alternate = n, n.alternate = a) : (a.pendingProps = r, a.type = n.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = n.flags & 65011712, a.childLanes = n.childLanes, a.lanes = n.lanes, a.child = n.child, a.memoizedProps = n.memoizedProps, a.memoizedState = n.memoizedState, a.updateQueue = n.updateQueue, r = n.dependencies, a.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, a.sibling = n.sibling, a.index = n.index, a.ref = n.ref, a.refCleanup = n.refCleanup, a;
  }
  function Wp(n, r) {
    n.flags &= 65011714;
    var a = n.alternate;
    return a === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = a.childLanes, n.lanes = a.lanes, n.child = a.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = a.memoizedProps, n.memoizedState = a.memoizedState, n.updateQueue = a.updateQueue, n.type = a.type, r = a.dependencies, n.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }), n;
  }
  function Zo(n, r, a, f, d, g) {
    var b = 0;
    if (f = n, typeof n == "function") Xc(n) && (b = 1);
    else if (typeof n == "string")
      b = J2(
        n,
        a,
        st.current
      ) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else
      t: switch (n) {
        case et:
          return n = Ze(31, a, r, d), n.elementType = et, n.lanes = g, n;
        case w:
          return ol(a.children, d, g, r);
        case A:
          b = 8, d |= 24;
          break;
        case M:
          return n = Ze(12, a, r, d | 2), n.elementType = M, n.lanes = g, n;
        case _:
          return n = Ze(13, a, r, d), n.elementType = _, n.lanes = g, n;
        case K:
          return n = Ze(19, a, r, d), n.elementType = K, n.lanes = g, n;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case O:
              case z:
                b = 10;
                break t;
              case H:
                b = 9;
                break t;
              case Q:
                b = 11;
                break t;
              case X:
                b = 14;
                break t;
              case lt:
                b = 16, f = null;
                break t;
            }
          b = 29, a = Error(
            i(130, n === null ? "null" : typeof n, "")
          ), f = null;
      }
    return r = Ze(b, a, r, d), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function ol(n, r, a, f) {
    return n = Ze(7, n, f, r), n.lanes = a, n;
  }
  function Wc(n, r, a) {
    return n = Ze(6, n, null, r), n.lanes = a, n;
  }
  function Qc(n, r, a) {
    return r = Ze(
      4,
      n.children !== null ? n.children : [],
      n.key,
      r
    ), r.lanes = a, r.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation
    }, r;
  }
  var Fl = [], Pl = 0, Jo = null, Fo = 0, oi = [], ai = 0, al = null, $i = 1, tn = "";
  function ul(n, r) {
    Fl[Pl++] = Fo, Fl[Pl++] = Jo, Jo = n, Fo = r;
  }
  function Qp(n, r, a) {
    oi[ai++] = $i, oi[ai++] = tn, oi[ai++] = al, al = n;
    var f = $i;
    n = tn;
    var d = 32 - We(f) - 1;
    f &= ~(1 << d), a += 1;
    var g = 32 - We(r) + d;
    if (30 < g) {
      var b = d - d % 5;
      g = (f & (1 << b) - 1).toString(32), f >>= b, d -= b, $i = 1 << 32 - We(r) + d | a << d | f, tn = g + n;
    } else
      $i = 1 << g | a << d | f, tn = n;
  }
  function Zc(n) {
    n.return !== null && (ul(n, 1), Qp(n, 1, 0));
  }
  function Jc(n) {
    for (; n === Jo; )
      Jo = Fl[--Pl], Fl[Pl] = null, Fo = Fl[--Pl], Fl[Pl] = null;
    for (; n === al; )
      al = oi[--ai], oi[ai] = null, tn = oi[--ai], oi[ai] = null, $i = oi[--ai], oi[ai] = null;
  }
  var Ee = null, Jt = null, Bt = !1, cl = null, Di = !1, Fc = Error(i(519));
  function fl(n) {
    var r = Error(i(418, ""));
    throw lr(si(r, n)), Fc;
  }
  function Zp(n) {
    var r = n.stateNode, a = n.type, f = n.memoizedProps;
    switch (r[Ae] = n, r[Le] = f, a) {
      case "dialog":
        kt("cancel", r), kt("close", r);
        break;
      case "iframe":
      case "object":
      case "embed":
        kt("load", r);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Or.length; a++)
          kt(Or[a], r);
        break;
      case "source":
        kt("error", r);
        break;
      case "img":
      case "image":
      case "link":
        kt("error", r), kt("load", r);
        break;
      case "details":
        kt("toggle", r);
        break;
      case "input":
        kt("invalid", r), up(
          r,
          f.value,
          f.defaultValue,
          f.checked,
          f.defaultChecked,
          f.type,
          f.name,
          !0
        ), Ho(r);
        break;
      case "select":
        kt("invalid", r);
        break;
      case "textarea":
        kt("invalid", r), fp(r, f.value, f.defaultValue, f.children), Ho(r);
    }
    a = f.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || r.textContent === "" + a || f.suppressHydrationWarning === !0 || fy(r.textContent, a) ? (f.popover != null && (kt("beforetoggle", r), kt("toggle", r)), f.onScroll != null && kt("scroll", r), f.onScrollEnd != null && kt("scrollend", r), f.onClick != null && (r.onclick = Ea), r = !0) : r = !1, r || fl(n);
  }
  function Jp(n) {
    for (Ee = n.return; Ee; )
      switch (Ee.tag) {
        case 5:
        case 13:
          Di = !1;
          return;
        case 27:
        case 3:
          Di = !0;
          return;
        default:
          Ee = Ee.return;
      }
  }
  function ir(n) {
    if (n !== Ee) return !1;
    if (!Bt) return Jp(n), Bt = !0, !1;
    var r = n.tag, a;
    if ((a = r !== 3 && r !== 27) && ((a = r === 5) && (a = n.type, a = !(a !== "form" && a !== "button") || dh(n.type, n.memoizedProps)), a = !a), a && Jt && fl(n), Jp(n), r === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(i(317));
      t: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8)
            if (a = n.data, a === "/$") {
              if (r === 0) {
                Jt = wi(n.nextSibling);
                break t;
              }
              r--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || r++;
          n = n.nextSibling;
        }
        Jt = null;
      }
    } else
      r === 27 ? (r = Jt, zn(n.type) ? (n = yh, yh = null, Jt = n) : Jt = r) : Jt = Ee ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function nr() {
    Jt = Ee = null, Bt = !1;
  }
  function Fp() {
    var n = cl;
    return n !== null && (Ue === null ? Ue = n : Ue.push.apply(
      Ue,
      n
    ), cl = null), n;
  }
  function lr(n) {
    cl === null ? cl = [n] : cl.push(n);
  }
  var Pc = q(null), hl = null, en = null;
  function Sn(n, r, a) {
    J(Pc, r._currentValue), r._currentValue = a;
  }
  function nn(n) {
    n._currentValue = Pc.current, Z(Pc);
  }
  function Ic(n, r, a) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === a) break;
      n = n.return;
    }
  }
  function $c(n, r, a, f) {
    var d = n.child;
    for (d !== null && (d.return = n); d !== null; ) {
      var g = d.dependencies;
      if (g !== null) {
        var b = d.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var x = g;
          g = d;
          for (var C = 0; C < r.length; C++)
            if (x.context === r[C]) {
              g.lanes |= a, x = g.alternate, x !== null && (x.lanes |= a), Ic(
                g.return,
                a,
                n
              ), f || (b = null);
              break t;
            }
          g = x.next;
        }
      } else if (d.tag === 18) {
        if (b = d.return, b === null) throw Error(i(341));
        b.lanes |= a, g = b.alternate, g !== null && (g.lanes |= a), Ic(b, a, n), b = null;
      } else b = d.child;
      if (b !== null) b.return = d;
      else
        for (b = d; b !== null; ) {
          if (b === n) {
            b = null;
            break;
          }
          if (d = b.sibling, d !== null) {
            d.return = b.return, b = d;
            break;
          }
          b = b.return;
        }
      d = b;
    }
  }
  function sr(n, r, a, f) {
    n = null;
    for (var d = r, g = !1; d !== null; ) {
      if (!g) {
        if ((d.flags & 524288) !== 0) g = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var b = d.alternate;
        if (b === null) throw Error(i(387));
        if (b = b.memoizedProps, b !== null) {
          var x = d.type;
          Qe(d.pendingProps.value, b.value) || (n !== null ? n.push(x) : n = [x]);
        }
      } else if (d === we.current) {
        if (b = d.alternate, b === null) throw Error(i(387));
        b.memoizedState.memoizedState !== d.memoizedState.memoizedState && (n !== null ? n.push(Lr) : n = [Lr]);
      }
      d = d.return;
    }
    n !== null && $c(
      r,
      n,
      a,
      f
    ), r.flags |= 262144;
  }
  function Po(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!Qe(
        n.context._currentValue,
        n.memoizedValue
      ))
        return !0;
      n = n.next;
    }
    return !1;
  }
  function dl(n) {
    hl = n, en = null, n = n.dependencies, n !== null && (n.firstContext = null);
  }
  function Ce(n) {
    return Pp(hl, n);
  }
  function Io(n, r) {
    return hl === null && dl(n), Pp(n, r);
  }
  function Pp(n, r) {
    var a = r._currentValue;
    if (r = { context: r, memoizedValue: a, next: null }, en === null) {
      if (n === null) throw Error(i(308));
      en = r, n.dependencies = { lanes: 0, firstContext: r }, n.flags |= 524288;
    } else en = en.next = r;
    return a;
  }
  var Zw = typeof AbortController < "u" ? AbortController : function() {
    var n = [], r = this.signal = {
      aborted: !1,
      addEventListener: function(a, f) {
        n.push(f);
      }
    };
    this.abort = function() {
      r.aborted = !0, n.forEach(function(a) {
        return a();
      });
    };
  }, Jw = l.unstable_scheduleCallback, Fw = l.unstable_NormalPriority, se = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function tf() {
    return {
      controller: new Zw(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rr(n) {
    n.refCount--, n.refCount === 0 && Jw(Fw, function() {
      n.controller.abort();
    });
  }
  var or = null, ef = 0, Il = 0, $l = null;
  function Pw(n, r) {
    if (or === null) {
      var a = or = [];
      ef = 0, Il = lh(), $l = {
        status: "pending",
        value: void 0,
        then: function(f) {
          a.push(f);
        }
      };
    }
    return ef++, r.then(Ip, Ip), r;
  }
  function Ip() {
    if (--ef === 0 && or !== null) {
      $l !== null && ($l.status = "fulfilled");
      var n = or;
      or = null, Il = 0, $l = null;
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function Iw(n, r) {
    var a = [], f = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        a.push(d);
      }
    };
    return n.then(
      function() {
        f.status = "fulfilled", f.value = r;
        for (var d = 0; d < a.length; d++) (0, a[d])(r);
      },
      function(d) {
        for (f.status = "rejected", f.reason = d, d = 0; d < a.length; d++)
          (0, a[d])(void 0);
      }
    ), f;
  }
  var $p = L.S;
  L.S = function(n, r) {
    typeof r == "object" && r !== null && typeof r.then == "function" && Pw(n, r), $p !== null && $p(n, r);
  };
  var ml = q(null);
  function nf() {
    var n = ml.current;
    return n !== null ? n : Yt.pooledCache;
  }
  function $o(n, r) {
    r === null ? J(ml, ml.current) : J(ml, r.pool);
  }
  function tg() {
    var n = nf();
    return n === null ? null : { parent: se._currentValue, pool: n };
  }
  var ar = Error(i(460)), eg = Error(i(474)), ta = Error(i(542)), lf = { then: function() {
  } };
  function ig(n) {
    return n = n.status, n === "fulfilled" || n === "rejected";
  }
  function ea() {
  }
  function ng(n, r, a) {
    switch (a = n[a], a === void 0 ? n.push(r) : a !== r && (r.then(ea, ea), r = a), r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw n = r.reason, sg(n), n;
      default:
        if (typeof r.status == "string") r.then(ea, ea);
        else {
          if (n = Yt, n !== null && 100 < n.shellSuspendCounter)
            throw Error(i(482));
          n = r, n.status = "pending", n.then(
            function(f) {
              if (r.status === "pending") {
                var d = r;
                d.status = "fulfilled", d.value = f;
              }
            },
            function(f) {
              if (r.status === "pending") {
                var d = r;
                d.status = "rejected", d.reason = f;
              }
            }
          );
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw n = r.reason, sg(n), n;
        }
        throw ur = r, ar;
    }
  }
  var ur = null;
  function lg() {
    if (ur === null) throw Error(i(459));
    var n = ur;
    return ur = null, n;
  }
  function sg(n) {
    if (n === ar || n === ta)
      throw Error(i(483));
  }
  var xn = !1;
  function sf(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rf(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = {
      baseState: n.baseState,
      firstBaseUpdate: n.firstBaseUpdate,
      lastBaseUpdate: n.lastBaseUpdate,
      shared: n.shared,
      callbacks: null
    });
  }
  function wn(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(n, r, a) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (Nt & 2) !== 0) {
      var d = f.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), f.pending = r, r = Qo(n), Xp(n, null, a), r;
    }
    return Wo(n, f, r, a), Qo(n);
  }
  function cr(n, r, a) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194048) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, a |= f, r.lanes = a, Im(n, a);
    }
  }
  function of(n, r) {
    var a = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, a === f)) {
      var d = null, g = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var b = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          g === null ? d = g = b : g = g.next = b, a = a.next;
        } while (a !== null);
        g === null ? d = g = r : g = g.next = r;
      } else d = g = r;
      a = {
        baseState: f.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: g,
        shared: f.shared,
        callbacks: f.callbacks
      }, n.updateQueue = a;
      return;
    }
    n = a.lastBaseUpdate, n === null ? a.firstBaseUpdate = r : n.next = r, a.lastBaseUpdate = r;
  }
  var af = !1;
  function fr() {
    if (af) {
      var n = $l;
      if (n !== null) throw n;
    }
  }
  function hr(n, r, a, f) {
    af = !1;
    var d = n.updateQueue;
    xn = !1;
    var g = d.firstBaseUpdate, b = d.lastBaseUpdate, x = d.shared.pending;
    if (x !== null) {
      d.shared.pending = null;
      var C = x, R = C.next;
      C.next = null, b === null ? g = R : b.next = R, b = C;
      var U = n.alternate;
      U !== null && (U = U.updateQueue, x = U.lastBaseUpdate, x !== b && (x === null ? U.firstBaseUpdate = R : x.next = R, U.lastBaseUpdate = C));
    }
    if (g !== null) {
      var G = d.baseState;
      b = 0, U = R = C = null, x = g;
      do {
        var B = x.lane & -536870913, N = B !== x.lane;
        if (N ? (Dt & B) === B : (f & B) === B) {
          B !== 0 && B === Il && (af = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: null,
            next: null
          });
          t: {
            var mt = n, ct = x;
            B = r;
            var _t = a;
            switch (ct.tag) {
              case 1:
                if (mt = ct.payload, typeof mt == "function") {
                  G = mt.call(_t, G, B);
                  break t;
                }
                G = mt;
                break t;
              case 3:
                mt.flags = mt.flags & -65537 | 128;
              case 0:
                if (mt = ct.payload, B = typeof mt == "function" ? mt.call(_t, G, B) : mt, B == null) break t;
                G = p({}, G, B);
                break t;
              case 2:
                xn = !0;
            }
          }
          B = x.callback, B !== null && (n.flags |= 64, N && (n.flags |= 8192), N = d.callbacks, N === null ? d.callbacks = [B] : N.push(B));
        } else
          N = {
            lane: B,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, U === null ? (R = U = N, C = G) : U = U.next = N, b |= B;
        if (x = x.next, x === null) {
          if (x = d.shared.pending, x === null)
            break;
          N = x, x = N.next, N.next = null, d.lastBaseUpdate = N, d.shared.pending = null;
        }
      } while (!0);
      U === null && (C = G), d.baseState = C, d.firstBaseUpdate = R, d.lastBaseUpdate = U, g === null && (d.shared.lanes = 0), Rn |= b, n.lanes = b, n.memoizedState = G;
    }
  }
  function rg(n, r) {
    if (typeof n != "function")
      throw Error(i(191, n));
    n.call(r);
  }
  function og(n, r) {
    var a = n.callbacks;
    if (a !== null)
      for (n.callbacks = null, n = 0; n < a.length; n++)
        rg(a[n], r);
  }
  var ts = q(null), ia = q(0);
  function ag(n, r) {
    n = cn, J(ia, n), J(ts, r), cn = n | r.baseLanes;
  }
  function uf() {
    J(ia, cn), J(ts, ts.current);
  }
  function cf() {
    cn = ia.current, Z(ts), Z(ia);
  }
  var Cn = 0, wt = null, zt = null, ne = null, na = !1, es = !1, pl = !1, la = 0, dr = 0, is = null, $w = 0;
  function $t() {
    throw Error(i(321));
  }
  function ff(n, r) {
    if (r === null) return !1;
    for (var a = 0; a < r.length && a < n.length; a++)
      if (!Qe(n[a], r[a])) return !1;
    return !0;
  }
  function hf(n, r, a, f, d, g) {
    return Cn = g, wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, L.H = n === null || n.memoizedState === null ? Xg : Wg, pl = !1, g = a(f, d), pl = !1, es && (g = cg(
      r,
      a,
      f,
      d
    )), ug(n), g;
  }
  function ug(n) {
    L.H = ca;
    var r = zt !== null && zt.next !== null;
    if (Cn = 0, ne = zt = wt = null, na = !1, dr = 0, is = null, r) throw Error(i(300));
    n === null || ce || (n = n.dependencies, n !== null && Po(n) && (ce = !0));
  }
  function cg(n, r, a, f) {
    wt = n;
    var d = 0;
    do {
      if (es && (is = null), dr = 0, es = !1, 25 <= d) throw Error(i(301));
      if (d += 1, ne = zt = null, n.updateQueue != null) {
        var g = n.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      L.H = r2, g = r(a, f);
    } while (es);
    return g;
  }
  function t2() {
    var n = L.H, r = n.useState()[0];
    return r = typeof r.then == "function" ? mr(r) : r, n = n.useState()[0], (zt !== null ? zt.memoizedState : null) !== n && (wt.flags |= 1024), r;
  }
  function df() {
    var n = la !== 0;
    return la = 0, n;
  }
  function mf(n, r, a) {
    r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~a;
  }
  function pf(n) {
    if (na) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        r !== null && (r.pending = null), n = n.next;
      }
      na = !1;
    }
    Cn = 0, ne = zt = wt = null, es = !1, dr = la = 0, is = null;
  }
  function He() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ne === null ? wt.memoizedState = ne = n : ne = ne.next = n, ne;
  }
  function le() {
    if (zt === null) {
      var n = wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = zt.next;
    var r = ne === null ? wt.memoizedState : ne.next;
    if (r !== null)
      ne = r, zt = n;
    else {
      if (n === null)
        throw wt.alternate === null ? Error(i(467)) : Error(i(310));
      zt = n, n = {
        memoizedState: zt.memoizedState,
        baseState: zt.baseState,
        baseQueue: zt.baseQueue,
        queue: zt.queue,
        next: null
      }, ne === null ? wt.memoizedState = ne = n : ne = ne.next = n;
    }
    return ne;
  }
  function gf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mr(n) {
    var r = dr;
    return dr += 1, is === null && (is = []), n = ng(is, n, r), r = wt, (ne === null ? r.memoizedState : ne.next) === null && (r = r.alternate, L.H = r === null || r.memoizedState === null ? Xg : Wg), n;
  }
  function sa(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return mr(n);
      if (n.$$typeof === z) return Ce(n);
    }
    throw Error(i(438, String(n)));
  }
  function yf(n) {
    var r = null, a = wt.updateQueue;
    if (a !== null && (r = a.memoCache), r == null) {
      var f = wt.alternate;
      f !== null && (f = f.updateQueue, f !== null && (f = f.memoCache, f != null && (r = {
        data: f.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (r == null && (r = { data: [], index: 0 }), a === null && (a = gf(), wt.updateQueue = a), a.memoCache = r, a = r.data[r.index], a === void 0)
      for (a = r.data[r.index] = Array(n), f = 0; f < n; f++)
        a[f] = yt;
    return r.index++, a;
  }
  function ln(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ra(n) {
    var r = le();
    return vf(r, zt, n);
  }
  function vf(n, r, a) {
    var f = n.queue;
    if (f === null) throw Error(i(311));
    f.lastRenderedReducer = a;
    var d = n.baseQueue, g = f.pending;
    if (g !== null) {
      if (d !== null) {
        var b = d.next;
        d.next = g.next, g.next = b;
      }
      r.baseQueue = d = g, f.pending = null;
    }
    if (g = n.baseState, d === null) n.memoizedState = g;
    else {
      r = d.next;
      var x = b = null, C = null, R = r, U = !1;
      do {
        var G = R.lane & -536870913;
        if (G !== R.lane ? (Dt & G) === G : (Cn & G) === G) {
          var B = R.revertLane;
          if (B === 0)
            C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), G === Il && (U = !0);
          else if ((Cn & B) === B) {
            R = R.next, B === Il && (U = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, C === null ? (x = C = G, b = g) : C = C.next = G, wt.lanes |= B, Rn |= B;
          G = R.action, pl && a(g, G), g = R.hasEagerState ? R.eagerState : a(g, G);
        } else
          B = {
            lane: G,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, C === null ? (x = C = B, b = g) : C = C.next = B, wt.lanes |= G, Rn |= G;
        R = R.next;
      } while (R !== null && R !== r);
      if (C === null ? b = g : C.next = x, !Qe(g, n.memoizedState) && (ce = !0, U && (a = $l, a !== null)))
        throw a;
      n.memoizedState = g, n.baseState = b, n.baseQueue = C, f.lastRenderedState = g;
    }
    return d === null && (f.lanes = 0), [n.memoizedState, f.dispatch];
  }
  function bf(n) {
    var r = le(), a = r.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = n;
    var f = a.dispatch, d = a.pending, g = r.memoizedState;
    if (d !== null) {
      a.pending = null;
      var b = d = d.next;
      do
        g = n(g, b.action), b = b.next;
      while (b !== d);
      Qe(g, r.memoizedState) || (ce = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), a.lastRenderedState = g;
    }
    return [g, f];
  }
  function fg(n, r, a) {
    var f = wt, d = le(), g = Bt;
    if (g) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = r();
    var b = !Qe(
      (zt || d).memoizedState,
      a
    );
    b && (d.memoizedState = a, ce = !0), d = d.queue;
    var x = mg.bind(null, f, d, n);
    if (pr(2048, 8, x, [n]), d.getSnapshot !== r || b || ne !== null && ne.memoizedState.tag & 1) {
      if (f.flags |= 2048, ns(
        9,
        oa(),
        dg.bind(
          null,
          f,
          d,
          a,
          r
        ),
        null
      ), Yt === null) throw Error(i(349));
      g || (Cn & 124) !== 0 || hg(f, r, a);
    }
    return a;
  }
  function hg(n, r, a) {
    n.flags |= 16384, n = { getSnapshot: r, value: a }, r = wt.updateQueue, r === null ? (r = gf(), wt.updateQueue = r, r.stores = [n]) : (a = r.stores, a === null ? r.stores = [n] : a.push(n));
  }
  function dg(n, r, a, f) {
    r.value = a, r.getSnapshot = f, pg(r) && gg(n);
  }
  function mg(n, r, a) {
    return a(function() {
      pg(r) && gg(n);
    });
  }
  function pg(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var a = r();
      return !Qe(n, a);
    } catch {
      return !0;
    }
  }
  function gg(n) {
    var r = Zl(n, 2);
    r !== null && $e(r, n, 2);
  }
  function Sf(n) {
    var r = He();
    if (typeof n == "function") {
      var a = n;
      if (n = a(), pl) {
        yn(!0);
        try {
          a();
        } finally {
          yn(!1);
        }
      }
    }
    return r.memoizedState = r.baseState = n, r.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ln,
      lastRenderedState: n
    }, r;
  }
  function yg(n, r, a, f) {
    return n.baseState = a, vf(
      n,
      zt,
      typeof f == "function" ? f : ln
    );
  }
  function e2(n, r, a, f, d) {
    if (ua(n)) throw Error(i(485));
    if (n = r.action, n !== null) {
      var g = {
        payload: d,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          g.listeners.push(b);
        }
      };
      L.T !== null ? a(!0) : g.isTransition = !1, f(g), a = r.pending, a === null ? (g.next = r.pending = g, vg(r, g)) : (g.next = a.next, r.pending = a.next = g);
    }
  }
  function vg(n, r) {
    var a = r.action, f = r.payload, d = n.state;
    if (r.isTransition) {
      var g = L.T, b = {};
      L.T = b;
      try {
        var x = a(d, f), C = L.S;
        C !== null && C(b, x), bg(n, r, x);
      } catch (R) {
        xf(n, r, R);
      } finally {
        L.T = g;
      }
    } else
      try {
        g = a(d, f), bg(n, r, g);
      } catch (R) {
        xf(n, r, R);
      }
  }
  function bg(n, r, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(f) {
        Sg(n, r, f);
      },
      function(f) {
        return xf(n, r, f);
      }
    ) : Sg(n, r, a);
  }
  function Sg(n, r, a) {
    r.status = "fulfilled", r.value = a, xg(r), n.state = a, r = n.pending, r !== null && (a = r.next, a === r ? n.pending = null : (a = a.next, r.next = a, vg(n, a)));
  }
  function xf(n, r, a) {
    var f = n.pending;
    if (n.pending = null, f !== null) {
      f = f.next;
      do
        r.status = "rejected", r.reason = a, xg(r), r = r.next;
      while (r !== f);
    }
    n.action = null;
  }
  function xg(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function wg(n, r) {
    return r;
  }
  function Ag(n, r) {
    if (Bt) {
      var a = Yt.formState;
      if (a !== null) {
        t: {
          var f = wt;
          if (Bt) {
            if (Jt) {
              e: {
                for (var d = Jt, g = Di; d.nodeType !== 8; ) {
                  if (!g) {
                    d = null;
                    break e;
                  }
                  if (d = wi(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break e;
                  }
                }
                g = d.data, d = g === "F!" || g === "F" ? d : null;
              }
              if (d) {
                Jt = wi(
                  d.nextSibling
                ), f = d.data === "F!";
                break t;
              }
            }
            fl(f);
          }
          f = !1;
        }
        f && (r = a[0]);
      }
    }
    return a = He(), a.memoizedState = a.baseState = r, f = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wg,
      lastRenderedState: r
    }, a.queue = f, a = Yg.bind(
      null,
      wt,
      f
    ), f.dispatch = a, f = Sf(!1), g = Mf.bind(
      null,
      wt,
      !1,
      f.queue
    ), f = He(), d = {
      state: r,
      dispatch: null,
      action: n,
      pending: null
    }, f.queue = d, a = e2.bind(
      null,
      wt,
      d,
      g,
      a
    ), d.dispatch = a, f.memoizedState = n, [r, a, !1];
  }
  function Cg(n) {
    var r = le();
    return kg(r, zt, n);
  }
  function kg(n, r, a) {
    if (r = vf(
      n,
      r,
      wg
    )[0], n = ra(ln)[0], typeof r == "object" && r !== null && typeof r.then == "function")
      try {
        var f = mr(r);
      } catch (b) {
        throw b === ar ? ta : b;
      }
    else f = r;
    r = le();
    var d = r.queue, g = d.dispatch;
    return a !== r.memoizedState && (wt.flags |= 2048, ns(
      9,
      oa(),
      i2.bind(null, d, a),
      null
    )), [f, g, n];
  }
  function i2(n, r) {
    n.action = r;
  }
  function Mg(n) {
    var r = le(), a = zt;
    if (a !== null)
      return kg(r, a, n);
    le(), r = r.memoizedState, a = le();
    var f = a.queue.dispatch;
    return a.memoizedState = n, [r, f, !1];
  }
  function ns(n, r, a, f) {
    return n = { tag: n, create: a, deps: f, inst: r, next: null }, r = wt.updateQueue, r === null && (r = gf(), wt.updateQueue = r), a = r.lastEffect, a === null ? r.lastEffect = n.next = n : (f = a.next, a.next = n, n.next = f, r.lastEffect = n), n;
  }
  function oa() {
    return { destroy: void 0, resource: void 0 };
  }
  function Tg() {
    return le().memoizedState;
  }
  function aa(n, r, a, f) {
    var d = He();
    f = f === void 0 ? null : f, wt.flags |= n, d.memoizedState = ns(
      1 | r,
      oa(),
      a,
      f
    );
  }
  function pr(n, r, a, f) {
    var d = le();
    f = f === void 0 ? null : f;
    var g = d.memoizedState.inst;
    zt !== null && f !== null && ff(f, zt.memoizedState.deps) ? d.memoizedState = ns(r, g, a, f) : (wt.flags |= n, d.memoizedState = ns(
      1 | r,
      g,
      a,
      f
    ));
  }
  function Og(n, r) {
    aa(8390656, 8, n, r);
  }
  function Dg(n, r) {
    pr(2048, 8, n, r);
  }
  function Eg(n, r) {
    return pr(4, 2, n, r);
  }
  function Rg(n, r) {
    return pr(4, 4, n, r);
  }
  function Bg(n, r) {
    if (typeof r == "function") {
      n = n();
      var a = r(n);
      return function() {
        typeof a == "function" ? a() : r(null);
      };
    }
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ng(n, r, a) {
    a = a != null ? a.concat([n]) : null, pr(4, 4, Bg.bind(null, r, n), a);
  }
  function wf() {
  }
  function Lg(n, r) {
    var a = le();
    r = r === void 0 ? null : r;
    var f = a.memoizedState;
    return r !== null && ff(r, f[1]) ? f[0] : (a.memoizedState = [n, r], n);
  }
  function zg(n, r) {
    var a = le();
    r = r === void 0 ? null : r;
    var f = a.memoizedState;
    if (r !== null && ff(r, f[1]))
      return f[0];
    if (f = n(), pl) {
      yn(!0);
      try {
        n();
      } finally {
        yn(!1);
      }
    }
    return a.memoizedState = [f, r], f;
  }
  function Af(n, r, a) {
    return a === void 0 || (Cn & 1073741824) !== 0 ? n.memoizedState = r : (n.memoizedState = a, n = U0(), wt.lanes |= n, Rn |= n, a);
  }
  function Hg(n, r, a, f) {
    return Qe(a, r) ? a : ts.current !== null ? (n = Af(n, a, f), Qe(n, r) || (ce = !0), n) : (Cn & 42) === 0 ? (ce = !0, n.memoizedState = a) : (n = U0(), wt.lanes |= n, Rn |= n, r);
  }
  function _g(n, r, a, f, d) {
    var g = W.p;
    W.p = g !== 0 && 8 > g ? g : 8;
    var b = L.T, x = {};
    L.T = x, Mf(n, !1, r, a);
    try {
      var C = d(), R = L.S;
      if (R !== null && R(x, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var U = Iw(
          C,
          f
        );
        gr(
          n,
          r,
          U,
          Ie(n)
        );
      } else
        gr(
          n,
          r,
          f,
          Ie(n)
        );
    } catch (G) {
      gr(
        n,
        r,
        { then: function() {
        }, status: "rejected", reason: G },
        Ie()
      );
    } finally {
      W.p = g, L.T = b;
    }
  }
  function n2() {
  }
  function Cf(n, r, a, f) {
    if (n.tag !== 5) throw Error(i(476));
    var d = Ug(n).queue;
    _g(
      n,
      d,
      r,
      it,
      a === null ? n2 : function() {
        return Vg(n), a(f);
      }
    );
  }
  function Ug(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: it,
      baseState: it,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: it
      },
      next: null
    };
    var a = {};
    return r.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: a
      },
      next: null
    }, n.memoizedState = r, n = n.alternate, n !== null && (n.memoizedState = r), r;
  }
  function Vg(n) {
    var r = Ug(n).next.queue;
    gr(n, r, {}, Ie());
  }
  function kf() {
    return Ce(Lr);
  }
  function qg() {
    return le().memoizedState;
  }
  function jg() {
    return le().memoizedState;
  }
  function l2(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var a = Ie();
          n = wn(a);
          var f = An(r, n, a);
          f !== null && ($e(f, r, a), cr(f, r, a)), r = { cache: tf() }, n.payload = r;
          return;
      }
      r = r.return;
    }
  }
  function s2(n, r, a) {
    var f = Ie();
    a = {
      lane: f,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ua(n) ? Gg(r, a) : (a = Kc(n, r, a, f), a !== null && ($e(a, n, f), Kg(a, r, f)));
  }
  function Yg(n, r, a) {
    var f = Ie();
    gr(n, r, a, f);
  }
  function gr(n, r, a, f) {
    var d = {
      lane: f,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ua(n)) Gg(r, d);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var b = r.lastRenderedState, x = g(b, a);
          if (d.hasEagerState = !0, d.eagerState = x, Qe(x, b))
            return Wo(n, r, d, 0), Yt === null && Xo(), !1;
        } catch {
        }
      if (a = Kc(n, r, d, f), a !== null)
        return $e(a, n, f), Kg(a, r, f), !0;
    }
    return !1;
  }
  function Mf(n, r, a, f) {
    if (f = {
      lane: 2,
      revertLane: lh(),
      action: f,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ua(n)) {
      if (r) throw Error(i(479));
    } else
      r = Kc(
        n,
        a,
        f,
        2
      ), r !== null && $e(r, n, 2);
  }
  function ua(n) {
    var r = n.alternate;
    return n === wt || r !== null && r === wt;
  }
  function Gg(n, r) {
    es = na = !0;
    var a = n.pending;
    a === null ? r.next = r : (r.next = a.next, a.next = r), n.pending = r;
  }
  function Kg(n, r, a) {
    if ((a & 4194048) !== 0) {
      var f = r.lanes;
      f &= n.pendingLanes, a |= f, r.lanes = a, Im(n, a);
    }
  }
  var ca = {
    readContext: Ce,
    use: sa,
    useCallback: $t,
    useContext: $t,
    useEffect: $t,
    useImperativeHandle: $t,
    useLayoutEffect: $t,
    useInsertionEffect: $t,
    useMemo: $t,
    useReducer: $t,
    useRef: $t,
    useState: $t,
    useDebugValue: $t,
    useDeferredValue: $t,
    useTransition: $t,
    useSyncExternalStore: $t,
    useId: $t,
    useHostTransitionStatus: $t,
    useFormState: $t,
    useActionState: $t,
    useOptimistic: $t,
    useMemoCache: $t,
    useCacheRefresh: $t
  }, Xg = {
    readContext: Ce,
    use: sa,
    useCallback: function(n, r) {
      return He().memoizedState = [
        n,
        r === void 0 ? null : r
      ], n;
    },
    useContext: Ce,
    useEffect: Og,
    useImperativeHandle: function(n, r, a) {
      a = a != null ? a.concat([n]) : null, aa(
        4194308,
        4,
        Bg.bind(null, r, n),
        a
      );
    },
    useLayoutEffect: function(n, r) {
      return aa(4194308, 4, n, r);
    },
    useInsertionEffect: function(n, r) {
      aa(4, 2, n, r);
    },
    useMemo: function(n, r) {
      var a = He();
      r = r === void 0 ? null : r;
      var f = n();
      if (pl) {
        yn(!0);
        try {
          n();
        } finally {
          yn(!1);
        }
      }
      return a.memoizedState = [f, r], f;
    },
    useReducer: function(n, r, a) {
      var f = He();
      if (a !== void 0) {
        var d = a(r);
        if (pl) {
          yn(!0);
          try {
            a(r);
          } finally {
            yn(!1);
          }
        }
      } else d = r;
      return f.memoizedState = f.baseState = d, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: n,
        lastRenderedState: d
      }, f.queue = n, n = n.dispatch = s2.bind(
        null,
        wt,
        n
      ), [f.memoizedState, n];
    },
    useRef: function(n) {
      var r = He();
      return n = { current: n }, r.memoizedState = n;
    },
    useState: function(n) {
      n = Sf(n);
      var r = n.queue, a = Yg.bind(null, wt, r);
      return r.dispatch = a, [n.memoizedState, a];
    },
    useDebugValue: wf,
    useDeferredValue: function(n, r) {
      var a = He();
      return Af(a, n, r);
    },
    useTransition: function() {
      var n = Sf(!1);
      return n = _g.bind(
        null,
        wt,
        n.queue,
        !0,
        !1
      ), He().memoizedState = n, [!1, n];
    },
    useSyncExternalStore: function(n, r, a) {
      var f = wt, d = He();
      if (Bt) {
        if (a === void 0)
          throw Error(i(407));
        a = a();
      } else {
        if (a = r(), Yt === null)
          throw Error(i(349));
        (Dt & 124) !== 0 || hg(f, r, a);
      }
      d.memoizedState = a;
      var g = { value: a, getSnapshot: r };
      return d.queue = g, Og(mg.bind(null, f, g, n), [
        n
      ]), f.flags |= 2048, ns(
        9,
        oa(),
        dg.bind(
          null,
          f,
          g,
          a,
          r
        ),
        null
      ), a;
    },
    useId: function() {
      var n = He(), r = Yt.identifierPrefix;
      if (Bt) {
        var a = tn, f = $i;
        a = (f & ~(1 << 32 - We(f) - 1)).toString(32) + a, r = "«" + r + "R" + a, a = la++, 0 < a && (r += "H" + a.toString(32)), r += "»";
      } else
        a = $w++, r = "«" + r + "r" + a.toString(32) + "»";
      return n.memoizedState = r;
    },
    useHostTransitionStatus: kf,
    useFormState: Ag,
    useActionState: Ag,
    useOptimistic: function(n) {
      var r = He();
      r.memoizedState = r.baseState = n;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return r.queue = a, r = Mf.bind(
        null,
        wt,
        !0,
        a
      ), a.dispatch = r, [n, r];
    },
    useMemoCache: yf,
    useCacheRefresh: function() {
      return He().memoizedState = l2.bind(
        null,
        wt
      );
    }
  }, Wg = {
    readContext: Ce,
    use: sa,
    useCallback: Lg,
    useContext: Ce,
    useEffect: Dg,
    useImperativeHandle: Ng,
    useInsertionEffect: Eg,
    useLayoutEffect: Rg,
    useMemo: zg,
    useReducer: ra,
    useRef: Tg,
    useState: function() {
      return ra(ln);
    },
    useDebugValue: wf,
    useDeferredValue: function(n, r) {
      var a = le();
      return Hg(
        a,
        zt.memoizedState,
        n,
        r
      );
    },
    useTransition: function() {
      var n = ra(ln)[0], r = le().memoizedState;
      return [
        typeof n == "boolean" ? n : mr(n),
        r
      ];
    },
    useSyncExternalStore: fg,
    useId: qg,
    useHostTransitionStatus: kf,
    useFormState: Cg,
    useActionState: Cg,
    useOptimistic: function(n, r) {
      var a = le();
      return yg(a, zt, n, r);
    },
    useMemoCache: yf,
    useCacheRefresh: jg
  }, r2 = {
    readContext: Ce,
    use: sa,
    useCallback: Lg,
    useContext: Ce,
    useEffect: Dg,
    useImperativeHandle: Ng,
    useInsertionEffect: Eg,
    useLayoutEffect: Rg,
    useMemo: zg,
    useReducer: bf,
    useRef: Tg,
    useState: function() {
      return bf(ln);
    },
    useDebugValue: wf,
    useDeferredValue: function(n, r) {
      var a = le();
      return zt === null ? Af(a, n, r) : Hg(
        a,
        zt.memoizedState,
        n,
        r
      );
    },
    useTransition: function() {
      var n = bf(ln)[0], r = le().memoizedState;
      return [
        typeof n == "boolean" ? n : mr(n),
        r
      ];
    },
    useSyncExternalStore: fg,
    useId: qg,
    useHostTransitionStatus: kf,
    useFormState: Mg,
    useActionState: Mg,
    useOptimistic: function(n, r) {
      var a = le();
      return zt !== null ? yg(a, zt, n, r) : (a.baseState = n, [n, a.queue.dispatch]);
    },
    useMemoCache: yf,
    useCacheRefresh: jg
  }, ls = null, yr = 0;
  function fa(n) {
    var r = yr;
    return yr += 1, ls === null && (ls = []), ng(ls, n, r);
  }
  function vr(n, r) {
    r = r.props.ref, n.ref = r !== void 0 ? r : null;
  }
  function ha(n, r) {
    throw r.$$typeof === y ? Error(i(525)) : (n = Object.prototype.toString.call(r), Error(
      i(
        31,
        n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n
      )
    ));
  }
  function Qg(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Zg(n) {
    function r(D, T) {
      if (n) {
        var E = D.deletions;
        E === null ? (D.deletions = [T], D.flags |= 16) : E.push(T);
      }
    }
    function a(D, T) {
      if (!n) return null;
      for (; T !== null; )
        r(D, T), T = T.sibling;
      return null;
    }
    function f(D) {
      for (var T = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? T.set(D.key, D) : T.set(D.index, D), D = D.sibling;
      return T;
    }
    function d(D, T) {
      return D = Ii(D, T), D.index = 0, D.sibling = null, D;
    }
    function g(D, T, E) {
      return D.index = E, n ? (E = D.alternate, E !== null ? (E = E.index, E < T ? (D.flags |= 67108866, T) : E) : (D.flags |= 67108866, T)) : (D.flags |= 1048576, T);
    }
    function b(D) {
      return n && D.alternate === null && (D.flags |= 67108866), D;
    }
    function x(D, T, E, Y) {
      return T === null || T.tag !== 6 ? (T = Wc(E, D.mode, Y), T.return = D, T) : (T = d(T, E), T.return = D, T);
    }
    function C(D, T, E, Y) {
      var nt = E.type;
      return nt === w ? U(
        D,
        T,
        E.props.children,
        Y,
        E.key
      ) : T !== null && (T.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === lt && Qg(nt) === T.type) ? (T = d(T, E.props), vr(T, E), T.return = D, T) : (T = Zo(
        E.type,
        E.key,
        E.props,
        null,
        D.mode,
        Y
      ), vr(T, E), T.return = D, T);
    }
    function R(D, T, E, Y) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== E.containerInfo || T.stateNode.implementation !== E.implementation ? (T = Qc(E, D.mode, Y), T.return = D, T) : (T = d(T, E.children || []), T.return = D, T);
    }
    function U(D, T, E, Y, nt) {
      return T === null || T.tag !== 7 ? (T = ol(
        E,
        D.mode,
        Y,
        nt
      ), T.return = D, T) : (T = d(T, E), T.return = D, T);
    }
    function G(D, T, E) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = Wc(
          "" + T,
          D.mode,
          E
        ), T.return = D, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case v:
            return E = Zo(
              T.type,
              T.key,
              T.props,
              null,
              D.mode,
              E
            ), vr(E, T), E.return = D, E;
          case S:
            return T = Qc(
              T,
              D.mode,
              E
            ), T.return = D, T;
          case lt:
            var Y = T._init;
            return T = Y(T._payload), G(D, T, E);
        }
        if (gt(T) || I(T))
          return T = ol(
            T,
            D.mode,
            E,
            null
          ), T.return = D, T;
        if (typeof T.then == "function")
          return G(D, fa(T), E);
        if (T.$$typeof === z)
          return G(
            D,
            Io(D, T),
            E
          );
        ha(D, T);
      }
      return null;
    }
    function B(D, T, E, Y) {
      var nt = T !== null ? T.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return nt !== null ? null : x(D, T, "" + E, Y);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case v:
            return E.key === nt ? C(D, T, E, Y) : null;
          case S:
            return E.key === nt ? R(D, T, E, Y) : null;
          case lt:
            return nt = E._init, E = nt(E._payload), B(D, T, E, Y);
        }
        if (gt(E) || I(E))
          return nt !== null ? null : U(D, T, E, Y, null);
        if (typeof E.then == "function")
          return B(
            D,
            T,
            fa(E),
            Y
          );
        if (E.$$typeof === z)
          return B(
            D,
            T,
            Io(D, E),
            Y
          );
        ha(D, E);
      }
      return null;
    }
    function N(D, T, E, Y, nt) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return D = D.get(E) || null, x(T, D, "" + Y, nt);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case v:
            return D = D.get(
              Y.key === null ? E : Y.key
            ) || null, C(T, D, Y, nt);
          case S:
            return D = D.get(
              Y.key === null ? E : Y.key
            ) || null, R(T, D, Y, nt);
          case lt:
            var At = Y._init;
            return Y = At(Y._payload), N(
              D,
              T,
              E,
              Y,
              nt
            );
        }
        if (gt(Y) || I(Y))
          return D = D.get(E) || null, U(T, D, Y, nt, null);
        if (typeof Y.then == "function")
          return N(
            D,
            T,
            E,
            fa(Y),
            nt
          );
        if (Y.$$typeof === z)
          return N(
            D,
            T,
            E,
            Io(T, Y),
            nt
          );
        ha(T, Y);
      }
      return null;
    }
    function mt(D, T, E, Y) {
      for (var nt = null, At = null, rt = T, ht = T = 0, he = null; rt !== null && ht < E.length; ht++) {
        rt.index > ht ? (he = rt, rt = null) : he = rt.sibling;
        var Rt = B(
          D,
          rt,
          E[ht],
          Y
        );
        if (Rt === null) {
          rt === null && (rt = he);
          break;
        }
        n && rt && Rt.alternate === null && r(D, rt), T = g(Rt, T, ht), At === null ? nt = Rt : At.sibling = Rt, At = Rt, rt = he;
      }
      if (ht === E.length)
        return a(D, rt), Bt && ul(D, ht), nt;
      if (rt === null) {
        for (; ht < E.length; ht++)
          rt = G(D, E[ht], Y), rt !== null && (T = g(
            rt,
            T,
            ht
          ), At === null ? nt = rt : At.sibling = rt, At = rt);
        return Bt && ul(D, ht), nt;
      }
      for (rt = f(rt); ht < E.length; ht++)
        he = N(
          rt,
          D,
          ht,
          E[ht],
          Y
        ), he !== null && (n && he.alternate !== null && rt.delete(
          he.key === null ? ht : he.key
        ), T = g(
          he,
          T,
          ht
        ), At === null ? nt = he : At.sibling = he, At = he);
      return n && rt.forEach(function(qn) {
        return r(D, qn);
      }), Bt && ul(D, ht), nt;
    }
    function ct(D, T, E, Y) {
      if (E == null) throw Error(i(151));
      for (var nt = null, At = null, rt = T, ht = T = 0, he = null, Rt = E.next(); rt !== null && !Rt.done; ht++, Rt = E.next()) {
        rt.index > ht ? (he = rt, rt = null) : he = rt.sibling;
        var qn = B(D, rt, Rt.value, Y);
        if (qn === null) {
          rt === null && (rt = he);
          break;
        }
        n && rt && qn.alternate === null && r(D, rt), T = g(qn, T, ht), At === null ? nt = qn : At.sibling = qn, At = qn, rt = he;
      }
      if (Rt.done)
        return a(D, rt), Bt && ul(D, ht), nt;
      if (rt === null) {
        for (; !Rt.done; ht++, Rt = E.next())
          Rt = G(D, Rt.value, Y), Rt !== null && (T = g(Rt, T, ht), At === null ? nt = Rt : At.sibling = Rt, At = Rt);
        return Bt && ul(D, ht), nt;
      }
      for (rt = f(rt); !Rt.done; ht++, Rt = E.next())
        Rt = N(rt, D, ht, Rt.value, Y), Rt !== null && (n && Rt.alternate !== null && rt.delete(Rt.key === null ? ht : Rt.key), T = g(Rt, T, ht), At === null ? nt = Rt : At.sibling = Rt, At = Rt);
      return n && rt.forEach(function(oA) {
        return r(D, oA);
      }), Bt && ul(D, ht), nt;
    }
    function _t(D, T, E, Y) {
      if (typeof E == "object" && E !== null && E.type === w && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case v:
            t: {
              for (var nt = E.key; T !== null; ) {
                if (T.key === nt) {
                  if (nt = E.type, nt === w) {
                    if (T.tag === 7) {
                      a(
                        D,
                        T.sibling
                      ), Y = d(
                        T,
                        E.props.children
                      ), Y.return = D, D = Y;
                      break t;
                    }
                  } else if (T.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === lt && Qg(nt) === T.type) {
                    a(
                      D,
                      T.sibling
                    ), Y = d(T, E.props), vr(Y, E), Y.return = D, D = Y;
                    break t;
                  }
                  a(D, T);
                  break;
                } else r(D, T);
                T = T.sibling;
              }
              E.type === w ? (Y = ol(
                E.props.children,
                D.mode,
                Y,
                E.key
              ), Y.return = D, D = Y) : (Y = Zo(
                E.type,
                E.key,
                E.props,
                null,
                D.mode,
                Y
              ), vr(Y, E), Y.return = D, D = Y);
            }
            return b(D);
          case S:
            t: {
              for (nt = E.key; T !== null; ) {
                if (T.key === nt)
                  if (T.tag === 4 && T.stateNode.containerInfo === E.containerInfo && T.stateNode.implementation === E.implementation) {
                    a(
                      D,
                      T.sibling
                    ), Y = d(T, E.children || []), Y.return = D, D = Y;
                    break t;
                  } else {
                    a(D, T);
                    break;
                  }
                else r(D, T);
                T = T.sibling;
              }
              Y = Qc(E, D.mode, Y), Y.return = D, D = Y;
            }
            return b(D);
          case lt:
            return nt = E._init, E = nt(E._payload), _t(
              D,
              T,
              E,
              Y
            );
        }
        if (gt(E))
          return mt(
            D,
            T,
            E,
            Y
          );
        if (I(E)) {
          if (nt = I(E), typeof nt != "function") throw Error(i(150));
          return E = nt.call(E), ct(
            D,
            T,
            E,
            Y
          );
        }
        if (typeof E.then == "function")
          return _t(
            D,
            T,
            fa(E),
            Y
          );
        if (E.$$typeof === z)
          return _t(
            D,
            T,
            Io(D, E),
            Y
          );
        ha(D, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, T !== null && T.tag === 6 ? (a(D, T.sibling), Y = d(T, E), Y.return = D, D = Y) : (a(D, T), Y = Wc(E, D.mode, Y), Y.return = D, D = Y), b(D)) : a(D, T);
    }
    return function(D, T, E, Y) {
      try {
        yr = 0;
        var nt = _t(
          D,
          T,
          E,
          Y
        );
        return ls = null, nt;
      } catch (rt) {
        if (rt === ar || rt === ta) throw rt;
        var At = Ze(29, rt, null, D.mode);
        return At.lanes = Y, At.return = D, At;
      }
    };
  }
  var ss = Zg(!0), Jg = Zg(!1), ui = q(null), Ei = null;
  function kn(n) {
    var r = n.alternate;
    J(re, re.current & 1), J(ui, n), Ei === null && (r === null || ts.current !== null || r.memoizedState !== null) && (Ei = n);
  }
  function Fg(n) {
    if (n.tag === 22) {
      if (J(re, re.current), J(ui, n), Ei === null) {
        var r = n.alternate;
        r !== null && r.memoizedState !== null && (Ei = n);
      }
    } else Mn();
  }
  function Mn() {
    J(re, re.current), J(ui, ui.current);
  }
  function sn(n) {
    Z(ui), Ei === n && (Ei = null), Z(re);
  }
  var re = q(0);
  function da(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var a = r.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || gh(a)))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  function Tf(n, r, a, f) {
    r = n.memoizedState, a = a(f, r), a = a == null ? r : p({}, r, a), n.memoizedState = a, n.lanes === 0 && (n.updateQueue.baseState = a);
  }
  var Of = {
    enqueueSetState: function(n, r, a) {
      n = n._reactInternals;
      var f = Ie(), d = wn(f);
      d.payload = r, a != null && (d.callback = a), r = An(n, d, f), r !== null && ($e(r, n, f), cr(r, n, f));
    },
    enqueueReplaceState: function(n, r, a) {
      n = n._reactInternals;
      var f = Ie(), d = wn(f);
      d.tag = 1, d.payload = r, a != null && (d.callback = a), r = An(n, d, f), r !== null && ($e(r, n, f), cr(r, n, f));
    },
    enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var a = Ie(), f = wn(a);
      f.tag = 2, r != null && (f.callback = r), r = An(n, f, a), r !== null && ($e(r, n, a), cr(r, n, a));
    }
  };
  function Pg(n, r, a, f, d, g, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, b) : r.prototype && r.prototype.isPureReactComponent ? !tr(a, f) || !tr(d, g) : !0;
  }
  function Ig(n, r, a, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, f), r.state !== n && Of.enqueueReplaceState(r, r.state, null);
  }
  function gl(n, r) {
    var a = r;
    if ("ref" in r) {
      a = {};
      for (var f in r)
        f !== "ref" && (a[f] = r[f]);
    }
    if (n = n.defaultProps) {
      a === r && (a = p({}, a));
      for (var d in n)
        a[d] === void 0 && (a[d] = n[d]);
    }
    return a;
  }
  var ma = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var r = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
        error: n
      });
      if (!window.dispatchEvent(r)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function $g(n) {
    ma(n);
  }
  function t0(n) {
    console.error(n);
  }
  function e0(n) {
    ma(n);
  }
  function pa(n, r) {
    try {
      var a = n.onUncaughtError;
      a(r.value, { componentStack: r.stack });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function i0(n, r, a) {
    try {
      var f = n.onCaughtError;
      f(a.value, {
        componentStack: a.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Df(n, r, a) {
    return a = wn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      pa(n, r);
    }, a;
  }
  function n0(n) {
    return n = wn(n), n.tag = 3, n;
  }
  function l0(n, r, a, f) {
    var d = a.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var g = f.value;
      n.payload = function() {
        return d(g);
      }, n.callback = function() {
        i0(r, a, f);
      };
    }
    var b = a.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (n.callback = function() {
      i0(r, a, f), typeof d != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var x = f.stack;
      this.componentDidCatch(f.value, {
        componentStack: x !== null ? x : ""
      });
    });
  }
  function o2(n, r, a, f, d) {
    if (a.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
      if (r = a.alternate, r !== null && sr(
        r,
        a,
        d,
        !0
      ), a = ui.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Ei === null ? $f() : a.alternate === null && Ft === 0 && (Ft = 3), a.flags &= -257, a.flags |= 65536, a.lanes = d, f === lf ? a.flags |= 16384 : (r = a.updateQueue, r === null ? a.updateQueue = /* @__PURE__ */ new Set([f]) : r.add(f), eh(n, f, d)), !1;
          case 22:
            return a.flags |= 65536, f === lf ? a.flags |= 16384 : (r = a.updateQueue, r === null ? (r = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([f])
            }, a.updateQueue = r) : (a = r.retryQueue, a === null ? r.retryQueue = /* @__PURE__ */ new Set([f]) : a.add(f)), eh(n, f, d)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return eh(n, f, d), $f(), !1;
    }
    if (Bt)
      return r = ui.current, r !== null ? ((r.flags & 65536) === 0 && (r.flags |= 256), r.flags |= 65536, r.lanes = d, f !== Fc && (n = Error(i(422), { cause: f }), lr(si(n, a)))) : (f !== Fc && (r = Error(i(423), {
        cause: f
      }), lr(
        si(r, a)
      )), n = n.current.alternate, n.flags |= 65536, d &= -d, n.lanes |= d, f = si(f, a), d = Df(
        n.stateNode,
        f,
        d
      ), of(n, d), Ft !== 4 && (Ft = 2)), !1;
    var g = Error(i(520), { cause: f });
    if (g = si(g, a), kr === null ? kr = [g] : kr.push(g), Ft !== 4 && (Ft = 2), r === null) return !0;
    f = si(f, a), a = r;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, n = d & -d, a.lanes |= n, n = Df(a.stateNode, f, n), of(a, n), !1;
        case 1:
          if (r = a.type, g = a.stateNode, (a.flags & 128) === 0 && (typeof r.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Bn === null || !Bn.has(g))))
            return a.flags |= 65536, d &= -d, a.lanes |= d, d = n0(d), l0(
              d,
              n,
              a,
              f
            ), of(a, d), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var s0 = Error(i(461)), ce = !1;
  function pe(n, r, a, f) {
    r.child = n === null ? Jg(r, null, a, f) : ss(
      r,
      n.child,
      a,
      f
    );
  }
  function r0(n, r, a, f, d) {
    a = a.render;
    var g = r.ref;
    if ("ref" in f) {
      var b = {};
      for (var x in f)
        x !== "ref" && (b[x] = f[x]);
    } else b = f;
    return dl(r), f = hf(
      n,
      r,
      a,
      b,
      g,
      d
    ), x = df(), n !== null && !ce ? (mf(n, r, d), rn(n, r, d)) : (Bt && x && Zc(r), r.flags |= 1, pe(n, r, f, d), r.child);
  }
  function o0(n, r, a, f, d) {
    if (n === null) {
      var g = a.type;
      return typeof g == "function" && !Xc(g) && g.defaultProps === void 0 && a.compare === null ? (r.tag = 15, r.type = g, a0(
        n,
        r,
        g,
        f,
        d
      )) : (n = Zo(
        a.type,
        null,
        f,
        r,
        r.mode,
        d
      ), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !_f(n, d)) {
      var b = g.memoizedProps;
      if (a = a.compare, a = a !== null ? a : tr, a(b, f) && n.ref === r.ref)
        return rn(n, r, d);
    }
    return r.flags |= 1, n = Ii(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function a0(n, r, a, f, d) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (tr(g, f) && n.ref === r.ref)
        if (ce = !1, r.pendingProps = f = g, _f(n, d))
          (n.flags & 131072) !== 0 && (ce = !0);
        else
          return r.lanes = n.lanes, rn(n, r, d);
    }
    return Ef(
      n,
      r,
      a,
      f,
      d
    );
  }
  function u0(n, r, a) {
    var f = r.pendingProps, d = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") {
      if ((r.flags & 128) !== 0) {
        if (f = g !== null ? g.baseLanes | a : a, n !== null) {
          for (d = r.child = n.child, g = 0; d !== null; )
            g = g | d.lanes | d.childLanes, d = d.sibling;
          r.childLanes = g & ~f;
        } else r.childLanes = 0, r.child = null;
        return c0(
          n,
          r,
          f,
          a
        );
      }
      if ((a & 536870912) !== 0)
        r.memoizedState = { baseLanes: 0, cachePool: null }, n !== null && $o(
          r,
          g !== null ? g.cachePool : null
        ), g !== null ? ag(r, g) : uf(), Fg(r);
      else
        return r.lanes = r.childLanes = 536870912, c0(
          n,
          r,
          g !== null ? g.baseLanes | a : a,
          a
        );
    } else
      g !== null ? ($o(r, g.cachePool), ag(r, g), Mn(), r.memoizedState = null) : (n !== null && $o(r, null), uf(), Mn());
    return pe(n, r, d, a), r.child;
  }
  function c0(n, r, a, f) {
    var d = nf();
    return d = d === null ? null : { parent: se._currentValue, pool: d }, r.memoizedState = {
      baseLanes: a,
      cachePool: d
    }, n !== null && $o(r, null), uf(), Fg(r), n !== null && sr(n, r, f, !0), null;
  }
  function ga(n, r) {
    var a = r.ref;
    if (a === null)
      n !== null && n.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(i(284));
      (n === null || n.ref !== a) && (r.flags |= 4194816);
    }
  }
  function Ef(n, r, a, f, d) {
    return dl(r), a = hf(
      n,
      r,
      a,
      f,
      void 0,
      d
    ), f = df(), n !== null && !ce ? (mf(n, r, d), rn(n, r, d)) : (Bt && f && Zc(r), r.flags |= 1, pe(n, r, a, d), r.child);
  }
  function f0(n, r, a, f, d, g) {
    return dl(r), r.updateQueue = null, a = cg(
      r,
      f,
      a,
      d
    ), ug(n), f = df(), n !== null && !ce ? (mf(n, r, g), rn(n, r, g)) : (Bt && f && Zc(r), r.flags |= 1, pe(n, r, a, g), r.child);
  }
  function h0(n, r, a, f, d) {
    if (dl(r), r.stateNode === null) {
      var g = Jl, b = a.contextType;
      typeof b == "object" && b !== null && (g = Ce(b)), g = new a(f, g), r.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = Of, r.stateNode = g, g._reactInternals = r, g = r.stateNode, g.props = f, g.state = r.memoizedState, g.refs = {}, sf(r), b = a.contextType, g.context = typeof b == "object" && b !== null ? Ce(b) : Jl, g.state = r.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (Tf(
        r,
        a,
        b,
        f
      ), g.state = r.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (b = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), b !== g.state && Of.enqueueReplaceState(g, g.state, null), hr(r, f, g, d), fr(), g.state = r.memoizedState), typeof g.componentDidMount == "function" && (r.flags |= 4194308), f = !0;
    } else if (n === null) {
      g = r.stateNode;
      var x = r.memoizedProps, C = gl(a, x);
      g.props = C;
      var R = g.context, U = a.contextType;
      b = Jl, typeof U == "object" && U !== null && (b = Ce(U));
      var G = a.getDerivedStateFromProps;
      U = typeof G == "function" || typeof g.getSnapshotBeforeUpdate == "function", x = r.pendingProps !== x, U || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x || R !== b) && Ig(
        r,
        g,
        f,
        b
      ), xn = !1;
      var B = r.memoizedState;
      g.state = B, hr(r, f, g, d), fr(), R = r.memoizedState, x || B !== R || xn ? (typeof G == "function" && (Tf(
        r,
        a,
        G,
        f
      ), R = r.memoizedState), (C = xn || Pg(
        r,
        a,
        C,
        f,
        B,
        R,
        b
      )) ? (U || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = R), g.props = f, g.state = R, g.context = b, f = C) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      g = r.stateNode, rf(n, r), b = r.memoizedProps, U = gl(a, b), g.props = U, G = r.pendingProps, B = g.context, R = a.contextType, C = Jl, typeof R == "object" && R !== null && (C = Ce(R)), x = a.getDerivedStateFromProps, (R = typeof x == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== G || B !== C) && Ig(
        r,
        g,
        f,
        C
      ), xn = !1, B = r.memoizedState, g.state = B, hr(r, f, g, d), fr();
      var N = r.memoizedState;
      b !== G || B !== N || xn || n !== null && n.dependencies !== null && Po(n.dependencies) ? (typeof x == "function" && (Tf(
        r,
        a,
        x,
        f
      ), N = r.memoizedState), (U = xn || Pg(
        r,
        a,
        U,
        f,
        B,
        N,
        C
      ) || n !== null && n.dependencies !== null && Po(n.dependencies)) ? (R || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(f, N, C), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(
        f,
        N,
        C
      )), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = N), g.props = f, g.state = N, g.context = C, f = U) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return g = f, ga(n, r), f = (r.flags & 128) !== 0, g || f ? (g = r.stateNode, a = f && typeof a.getDerivedStateFromError != "function" ? null : g.render(), r.flags |= 1, n !== null && f ? (r.child = ss(
      r,
      n.child,
      null,
      d
    ), r.child = ss(
      r,
      null,
      a,
      d
    )) : pe(n, r, a, d), r.memoizedState = g.state, n = r.child) : n = rn(
      n,
      r,
      d
    ), n;
  }
  function d0(n, r, a, f) {
    return nr(), r.flags |= 256, pe(n, r, a, f), r.child;
  }
  var Rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bf(n) {
    return { baseLanes: n, cachePool: tg() };
  }
  function Nf(n, r, a) {
    return n = n !== null ? n.childLanes & ~a : 0, r && (n |= ci), n;
  }
  function m0(n, r, a) {
    var f = r.pendingProps, d = !1, g = (r.flags & 128) !== 0, b;
    if ((b = g) || (b = n !== null && n.memoizedState === null ? !1 : (re.current & 2) !== 0), b && (d = !0, r.flags &= -129), b = (r.flags & 32) !== 0, r.flags &= -33, n === null) {
      if (Bt) {
        if (d ? kn(r) : Mn(), Bt) {
          var x = Jt, C;
          if (C = x) {
            t: {
              for (C = x, x = Di; C.nodeType !== 8; ) {
                if (!x) {
                  x = null;
                  break t;
                }
                if (C = wi(
                  C.nextSibling
                ), C === null) {
                  x = null;
                  break t;
                }
              }
              x = C;
            }
            x !== null ? (r.memoizedState = {
              dehydrated: x,
              treeContext: al !== null ? { id: $i, overflow: tn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, C = Ze(
              18,
              null,
              null,
              0
            ), C.stateNode = x, C.return = r, r.child = C, Ee = r, Jt = null, C = !0) : C = !1;
          }
          C || fl(r);
        }
        if (x = r.memoizedState, x !== null && (x = x.dehydrated, x !== null))
          return gh(x) ? r.lanes = 32 : r.lanes = 536870912, null;
        sn(r);
      }
      return x = f.children, f = f.fallback, d ? (Mn(), d = r.mode, x = ya(
        { mode: "hidden", children: x },
        d
      ), f = ol(
        f,
        d,
        a,
        null
      ), x.return = r, f.return = r, x.sibling = f, r.child = x, d = r.child, d.memoizedState = Bf(a), d.childLanes = Nf(
        n,
        b,
        a
      ), r.memoizedState = Rf, f) : (kn(r), Lf(r, x));
    }
    if (C = n.memoizedState, C !== null && (x = C.dehydrated, x !== null)) {
      if (g)
        r.flags & 256 ? (kn(r), r.flags &= -257, r = zf(
          n,
          r,
          a
        )) : r.memoizedState !== null ? (Mn(), r.child = n.child, r.flags |= 128, r = null) : (Mn(), d = f.fallback, x = r.mode, f = ya(
          { mode: "visible", children: f.children },
          x
        ), d = ol(
          d,
          x,
          a,
          null
        ), d.flags |= 2, f.return = r, d.return = r, f.sibling = d, r.child = f, ss(
          r,
          n.child,
          null,
          a
        ), f = r.child, f.memoizedState = Bf(a), f.childLanes = Nf(
          n,
          b,
          a
        ), r.memoizedState = Rf, r = d);
      else if (kn(r), gh(x)) {
        if (b = x.nextSibling && x.nextSibling.dataset, b) var R = b.dgst;
        b = R, f = Error(i(419)), f.stack = "", f.digest = b, lr({ value: f, source: null, stack: null }), r = zf(
          n,
          r,
          a
        );
      } else if (ce || sr(n, r, a, !1), b = (a & n.childLanes) !== 0, ce || b) {
        if (b = Yt, b !== null && (f = a & -a, f = (f & 42) !== 0 ? 1 : gc(f), f = (f & (b.suspendedLanes | a)) !== 0 ? 0 : f, f !== 0 && f !== C.retryLane))
          throw C.retryLane = f, Zl(n, f), $e(b, n, f), s0;
        x.data === "$?" || $f(), r = zf(
          n,
          r,
          a
        );
      } else
        x.data === "$?" ? (r.flags |= 192, r.child = n.child, r = null) : (n = C.treeContext, Jt = wi(
          x.nextSibling
        ), Ee = r, Bt = !0, cl = null, Di = !1, n !== null && (oi[ai++] = $i, oi[ai++] = tn, oi[ai++] = al, $i = n.id, tn = n.overflow, al = r), r = Lf(
          r,
          f.children
        ), r.flags |= 4096);
      return r;
    }
    return d ? (Mn(), d = f.fallback, x = r.mode, C = n.child, R = C.sibling, f = Ii(C, {
      mode: "hidden",
      children: f.children
    }), f.subtreeFlags = C.subtreeFlags & 65011712, R !== null ? d = Ii(R, d) : (d = ol(
      d,
      x,
      a,
      null
    ), d.flags |= 2), d.return = r, f.return = r, f.sibling = d, r.child = f, f = d, d = r.child, x = n.child.memoizedState, x === null ? x = Bf(a) : (C = x.cachePool, C !== null ? (R = se._currentValue, C = C.parent !== R ? { parent: R, pool: R } : C) : C = tg(), x = {
      baseLanes: x.baseLanes | a,
      cachePool: C
    }), d.memoizedState = x, d.childLanes = Nf(
      n,
      b,
      a
    ), r.memoizedState = Rf, f) : (kn(r), a = n.child, n = a.sibling, a = Ii(a, {
      mode: "visible",
      children: f.children
    }), a.return = r, a.sibling = null, n !== null && (b = r.deletions, b === null ? (r.deletions = [n], r.flags |= 16) : b.push(n)), r.child = a, r.memoizedState = null, a);
  }
  function Lf(n, r) {
    return r = ya(
      { mode: "visible", children: r },
      n.mode
    ), r.return = n, n.child = r;
  }
  function ya(n, r) {
    return n = Ze(22, n, null, r), n.lanes = 0, n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, n;
  }
  function zf(n, r, a) {
    return ss(r, n.child, null, a), n = Lf(
      r,
      r.pendingProps.children
    ), n.flags |= 2, r.memoizedState = null, n;
  }
  function p0(n, r, a) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), Ic(n.return, r, a);
  }
  function Hf(n, r, a, f, d) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = {
      isBackwards: r,
      rendering: null,
      renderingStartTime: 0,
      last: f,
      tail: a,
      tailMode: d
    } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = a, g.tailMode = d);
  }
  function g0(n, r, a) {
    var f = r.pendingProps, d = f.revealOrder, g = f.tail;
    if (pe(n, r, f.children, a), f = re.current, (f & 2) !== 0)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        t: for (n = r.child; n !== null; ) {
          if (n.tag === 13)
            n.memoizedState !== null && p0(n, a, r);
          else if (n.tag === 19)
            p0(n, a, r);
          else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === r) break t;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r)
              break t;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      f &= 1;
    }
    switch (J(re, f), d) {
      case "forwards":
        for (a = r.child, d = null; a !== null; )
          n = a.alternate, n !== null && da(n) === null && (d = a), a = a.sibling;
        a = d, a === null ? (d = r.child, r.child = null) : (d = a.sibling, a.sibling = null), Hf(
          r,
          !1,
          d,
          a,
          g
        );
        break;
      case "backwards":
        for (a = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && da(n) === null) {
            r.child = d;
            break;
          }
          n = d.sibling, d.sibling = a, a = d, d = n;
        }
        Hf(
          r,
          !0,
          a,
          null,
          g
        );
        break;
      case "together":
        Hf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function rn(n, r, a) {
    if (n !== null && (r.dependencies = n.dependencies), Rn |= r.lanes, (a & r.childLanes) === 0)
      if (n !== null) {
        if (sr(
          n,
          r,
          a,
          !1
        ), (a & r.childLanes) === 0)
          return null;
      } else return null;
    if (n !== null && r.child !== n.child)
      throw Error(i(153));
    if (r.child !== null) {
      for (n = r.child, a = Ii(n, n.pendingProps), r.child = a, a.return = r; n.sibling !== null; )
        n = n.sibling, a = a.sibling = Ii(n, n.pendingProps), a.return = r;
      a.sibling = null;
    }
    return r.child;
  }
  function _f(n, r) {
    return (n.lanes & r) !== 0 ? !0 : (n = n.dependencies, !!(n !== null && Po(n)));
  }
  function a2(n, r, a) {
    switch (r.tag) {
      case 3:
        Kt(r, r.stateNode.containerInfo), Sn(r, se, n.memoizedState.cache), nr();
        break;
      case 27:
      case 5:
        fc(r);
        break;
      case 4:
        Kt(r, r.stateNode.containerInfo);
        break;
      case 10:
        Sn(
          r,
          r.type,
          r.memoizedProps.value
        );
        break;
      case 13:
        var f = r.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (kn(r), r.flags |= 128, null) : (a & r.child.childLanes) !== 0 ? m0(n, r, a) : (kn(r), n = rn(
            n,
            r,
            a
          ), n !== null ? n.sibling : null);
        kn(r);
        break;
      case 19:
        var d = (n.flags & 128) !== 0;
        if (f = (a & r.childLanes) !== 0, f || (sr(
          n,
          r,
          a,
          !1
        ), f = (a & r.childLanes) !== 0), d) {
          if (f)
            return g0(
              n,
              r,
              a
            );
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), J(re, re.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, u0(n, r, a);
      case 24:
        Sn(r, se, n.memoizedState.cache);
    }
    return rn(n, r, a);
  }
  function y0(n, r, a) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps)
        ce = !0;
      else {
        if (!_f(n, a) && (r.flags & 128) === 0)
          return ce = !1, a2(
            n,
            r,
            a
          );
        ce = (n.flags & 131072) !== 0;
      }
    else
      ce = !1, Bt && (r.flags & 1048576) !== 0 && Qp(r, Fo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 16:
        t: {
          n = r.pendingProps;
          var f = r.elementType, d = f._init;
          if (f = d(f._payload), r.type = f, typeof f == "function")
            Xc(f) ? (n = gl(f, n), r.tag = 1, r = h0(
              null,
              r,
              f,
              n,
              a
            )) : (r.tag = 0, r = Ef(
              null,
              r,
              f,
              n,
              a
            ));
          else {
            if (f != null) {
              if (d = f.$$typeof, d === Q) {
                r.tag = 11, r = r0(
                  null,
                  r,
                  f,
                  n,
                  a
                );
                break t;
              } else if (d === X) {
                r.tag = 14, r = o0(
                  null,
                  r,
                  f,
                  n,
                  a
                );
                break t;
              }
            }
            throw r = pt(f) || f, Error(i(306, r, ""));
          }
        }
        return r;
      case 0:
        return Ef(
          n,
          r,
          r.type,
          r.pendingProps,
          a
        );
      case 1:
        return f = r.type, d = gl(
          f,
          r.pendingProps
        ), h0(
          n,
          r,
          f,
          d,
          a
        );
      case 3:
        t: {
          if (Kt(
            r,
            r.stateNode.containerInfo
          ), n === null) throw Error(i(387));
          f = r.pendingProps;
          var g = r.memoizedState;
          d = g.element, rf(n, r), hr(r, f, null, a);
          var b = r.memoizedState;
          if (f = b.cache, Sn(r, se, f), f !== g.cache && $c(
            r,
            [se],
            a,
            !0
          ), fr(), f = b.element, g.isDehydrated)
            if (g = {
              element: f,
              isDehydrated: !1,
              cache: b.cache
            }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
              r = d0(
                n,
                r,
                f,
                a
              );
              break t;
            } else if (f !== d) {
              d = si(
                Error(i(424)),
                r
              ), lr(d), r = d0(
                n,
                r,
                f,
                a
              );
              break t;
            } else
              for (n = r.stateNode.containerInfo, n.nodeType === 9 ? n = n.body : n = n.nodeName === "HTML" ? n.ownerDocument.body : n, Jt = wi(n.firstChild), Ee = r, Bt = !0, cl = null, Di = !0, a = Jg(
                r,
                null,
                f,
                a
              ), r.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (nr(), f === d) {
              r = rn(
                n,
                r,
                a
              );
              break t;
            }
            pe(
              n,
              r,
              f,
              a
            );
          }
          r = r.child;
        }
        return r;
      case 26:
        return ga(n, r), n === null ? (a = xy(
          r.type,
          null,
          r.pendingProps,
          null
        )) ? r.memoizedState = a : Bt || (a = r.type, n = r.pendingProps, f = Ra(
          dt.current
        ).createElement(a), f[Ae] = r, f[Le] = n, ye(f, a, n), ue(f), r.stateNode = f) : r.memoizedState = xy(
          r.type,
          n.memoizedProps,
          r.pendingProps,
          n.memoizedState
        ), null;
      case 27:
        return fc(r), n === null && Bt && (f = r.stateNode = vy(
          r.type,
          r.pendingProps,
          dt.current
        ), Ee = r, Di = !0, d = Jt, zn(r.type) ? (yh = d, Jt = wi(
          f.firstChild
        )) : Jt = d), pe(
          n,
          r,
          r.pendingProps.children,
          a
        ), ga(n, r), n === null && (r.flags |= 4194304), r.child;
      case 5:
        return n === null && Bt && ((d = f = Jt) && (f = H2(
          f,
          r.type,
          r.pendingProps,
          Di
        ), f !== null ? (r.stateNode = f, Ee = r, Jt = wi(
          f.firstChild
        ), Di = !1, d = !0) : d = !1), d || fl(r)), fc(r), d = r.type, g = r.pendingProps, b = n !== null ? n.memoizedProps : null, f = g.children, dh(d, g) ? f = null : b !== null && dh(d, b) && (r.flags |= 32), r.memoizedState !== null && (d = hf(
          n,
          r,
          t2,
          null,
          null,
          a
        ), Lr._currentValue = d), ga(n, r), pe(n, r, f, a), r.child;
      case 6:
        return n === null && Bt && ((n = a = Jt) && (a = _2(
          a,
          r.pendingProps,
          Di
        ), a !== null ? (r.stateNode = a, Ee = r, Jt = null, n = !0) : n = !1), n || fl(r)), null;
      case 13:
        return m0(n, r, a);
      case 4:
        return Kt(
          r,
          r.stateNode.containerInfo
        ), f = r.pendingProps, n === null ? r.child = ss(
          r,
          null,
          f,
          a
        ) : pe(
          n,
          r,
          f,
          a
        ), r.child;
      case 11:
        return r0(
          n,
          r,
          r.type,
          r.pendingProps,
          a
        );
      case 7:
        return pe(
          n,
          r,
          r.pendingProps,
          a
        ), r.child;
      case 8:
        return pe(
          n,
          r,
          r.pendingProps.children,
          a
        ), r.child;
      case 12:
        return pe(
          n,
          r,
          r.pendingProps.children,
          a
        ), r.child;
      case 10:
        return f = r.pendingProps, Sn(r, r.type, f.value), pe(
          n,
          r,
          f.children,
          a
        ), r.child;
      case 9:
        return d = r.type._context, f = r.pendingProps.children, dl(r), d = Ce(d), f = f(d), r.flags |= 1, pe(n, r, f, a), r.child;
      case 14:
        return o0(
          n,
          r,
          r.type,
          r.pendingProps,
          a
        );
      case 15:
        return a0(
          n,
          r,
          r.type,
          r.pendingProps,
          a
        );
      case 19:
        return g0(n, r, a);
      case 31:
        return f = r.pendingProps, a = r.mode, f = {
          mode: f.mode,
          children: f.children
        }, n === null ? (a = ya(
          f,
          a
        ), a.ref = r.ref, r.child = a, a.return = r, r = a) : (a = Ii(n.child, f), a.ref = r.ref, r.child = a, a.return = r, r = a), r;
      case 22:
        return u0(n, r, a);
      case 24:
        return dl(r), f = Ce(se), n === null ? (d = nf(), d === null && (d = Yt, g = tf(), d.pooledCache = g, g.refCount++, g !== null && (d.pooledCacheLanes |= a), d = g), r.memoizedState = {
          parent: f,
          cache: d
        }, sf(r), Sn(r, se, d)) : ((n.lanes & a) !== 0 && (rf(n, r), hr(r, null, null, a), fr()), d = n.memoizedState, g = r.memoizedState, d.parent !== f ? (d = { parent: f, cache: f }, r.memoizedState = d, r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = d), Sn(r, se, f)) : (f = g.cache, Sn(r, se, f), f !== d.cache && $c(
          r,
          [se],
          a,
          !0
        ))), pe(
          n,
          r,
          r.pendingProps.children,
          a
        ), r.child;
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  function on(n) {
    n.flags |= 4;
  }
  function v0(n, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (n.flags |= 16777216, !My(r)) {
      if (r = ui.current, r !== null && ((Dt & 4194048) === Dt ? Ei !== null : (Dt & 62914560) !== Dt && (Dt & 536870912) === 0 || r !== Ei))
        throw ur = lf, eg;
      n.flags |= 8192;
    }
  }
  function va(n, r) {
    r !== null && (n.flags |= 4), n.flags & 16384 && (r = n.tag !== 22 ? Fm() : 536870912, n.lanes |= r, us |= r);
  }
  function br(n, r) {
    if (!Bt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var a = null; r !== null; )
            r.alternate !== null && (a = r), r = r.sibling;
          a === null ? n.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = n.tail;
          for (var f = null; a !== null; )
            a.alternate !== null && (f = a), a = a.sibling;
          f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
      }
  }
  function Qt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, a = 0, f = 0;
    if (r)
      for (var d = n.child; d !== null; )
        a |= d.lanes | d.childLanes, f |= d.subtreeFlags & 65011712, f |= d.flags & 65011712, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        a |= d.lanes | d.childLanes, f |= d.subtreeFlags, f |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= f, n.childLanes = a, r;
  }
  function u2(n, r, a) {
    var f = r.pendingProps;
    switch (Jc(r), r.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(r), null;
      case 1:
        return Qt(r), null;
      case 3:
        return a = r.stateNode, f = null, n !== null && (f = n.memoizedState.cache), r.memoizedState.cache !== f && (r.flags |= 2048), nn(se), gn(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (n === null || n.child === null) && (ir(r) ? on(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Fp())), Qt(r), null;
      case 26:
        return a = r.memoizedState, n === null ? (on(r), a !== null ? (Qt(r), v0(r, a)) : (Qt(r), r.flags &= -16777217)) : a ? a !== n.memoizedState ? (on(r), Qt(r), v0(r, a)) : (Qt(r), r.flags &= -16777217) : (n.memoizedProps !== f && on(r), Qt(r), r.flags &= -16777217), null;
      case 27:
        Do(r), a = dt.current;
        var d = r.type;
        if (n !== null && r.stateNode != null)
          n.memoizedProps !== f && on(r);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(i(166));
            return Qt(r), null;
          }
          n = st.current, ir(r) ? Zp(r) : (n = vy(d, f, a), r.stateNode = n, on(r));
        }
        return Qt(r), null;
      case 5:
        if (Do(r), a = r.type, n !== null && r.stateNode != null)
          n.memoizedProps !== f && on(r);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(i(166));
            return Qt(r), null;
          }
          if (n = st.current, ir(r))
            Zp(r);
          else {
            switch (d = Ra(
              dt.current
            ), n) {
              case 1:
                n = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                n = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    n = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    n = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    n = d.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof f.is == "string" ? d.createElement("select", { is: f.is }) : d.createElement("select"), f.multiple ? n.multiple = !0 : f.size && (n.size = f.size);
                    break;
                  default:
                    n = typeof f.is == "string" ? d.createElement(a, { is: f.is }) : d.createElement(a);
                }
            }
            n[Ae] = r, n[Le] = f;
            t: for (d = r.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                n.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === r) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === r)
                  break t;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            r.stateNode = n;
            t: switch (ye(n, a, f), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!f.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && on(r);
          }
        }
        return Qt(r), r.flags &= -16777217, null;
      case 6:
        if (n && r.stateNode != null)
          n.memoizedProps !== f && on(r);
        else {
          if (typeof f != "string" && r.stateNode === null)
            throw Error(i(166));
          if (n = dt.current, ir(r)) {
            if (n = r.stateNode, a = r.memoizedProps, f = null, d = Ee, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  f = d.memoizedProps;
              }
            n[Ae] = r, n = !!(n.nodeValue === a || f !== null && f.suppressHydrationWarning === !0 || fy(n.nodeValue, a)), n || fl(r);
          } else
            n = Ra(n).createTextNode(
              f
            ), n[Ae] = r, r.stateNode = n;
        }
        return Qt(r), null;
      case 13:
        if (f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (d = ir(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(i(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[Ae] = r;
            } else
              nr(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Qt(r), d = !1;
          } else
            d = Fp(), n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return r.flags & 256 ? (sn(r), r) : (sn(r), null);
        }
        if (sn(r), (r.flags & 128) !== 0)
          return r.lanes = a, r;
        if (a = f !== null, n = n !== null && n.memoizedState !== null, a) {
          f = r.child, d = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (d = f.alternate.memoizedState.cachePool.pool);
          var g = null;
          f.memoizedState !== null && f.memoizedState.cachePool !== null && (g = f.memoizedState.cachePool.pool), g !== d && (f.flags |= 2048);
        }
        return a !== n && a && (r.child.flags |= 8192), va(r, r.updateQueue), Qt(r), null;
      case 4:
        return gn(), n === null && ah(r.stateNode.containerInfo), Qt(r), null;
      case 10:
        return nn(r.type), Qt(r), null;
      case 19:
        if (Z(re), d = r.memoizedState, d === null) return Qt(r), null;
        if (f = (r.flags & 128) !== 0, g = d.rendering, g === null)
          if (f) br(d, !1);
          else {
            if (Ft !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (g = da(n), g !== null) {
                  for (r.flags |= 128, br(d, !1), n = g.updateQueue, r.updateQueue = n, va(r, n), r.subtreeFlags = 0, n = a, a = r.child; a !== null; )
                    Wp(a, n), a = a.sibling;
                  return J(
                    re,
                    re.current & 1 | 2
                  ), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Oi() > xa && (r.flags |= 128, f = !0, br(d, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = da(g), n !== null) {
              if (r.flags |= 128, f = !0, n = n.updateQueue, r.updateQueue = n, va(r, n), br(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !Bt)
                return Qt(r), null;
            } else
              2 * Oi() - d.renderingStartTime > xa && a !== 536870912 && (r.flags |= 128, f = !0, br(d, !1), r.lanes = 4194304);
          d.isBackwards ? (g.sibling = r.child, r.child = g) : (n = d.last, n !== null ? n.sibling = g : r.child = g, d.last = g);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Oi(), r.sibling = null, n = re.current, J(re, f ? n & 1 | 2 : n & 1), r) : (Qt(r), null);
      case 22:
      case 23:
        return sn(r), cf(), f = r.memoizedState !== null, n !== null ? n.memoizedState !== null !== f && (r.flags |= 8192) : f && (r.flags |= 8192), f ? (a & 536870912) !== 0 && (r.flags & 128) === 0 && (Qt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Qt(r), a = r.updateQueue, a !== null && va(r, a.retryQueue), a = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), f = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool), f !== a && (r.flags |= 2048), n !== null && Z(ml), null;
      case 24:
        return a = null, n !== null && (a = n.memoizedState.cache), r.memoizedState.cache !== a && (r.flags |= 2048), nn(se), Qt(r), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function c2(n, r) {
    switch (Jc(r), r.tag) {
      case 1:
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return nn(se), gn(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 26:
      case 27:
      case 5:
        return Do(r), null;
      case 13:
        if (sn(r), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(i(340));
          nr();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Z(re), null;
      case 4:
        return gn(), null;
      case 10:
        return nn(r.type), null;
      case 22:
      case 23:
        return sn(r), cf(), n !== null && Z(ml), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 24:
        return nn(se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function b0(n, r) {
    switch (Jc(r), r.tag) {
      case 3:
        nn(se), gn();
        break;
      case 26:
      case 27:
      case 5:
        Do(r);
        break;
      case 4:
        gn();
        break;
      case 13:
        sn(r);
        break;
      case 19:
        Z(re);
        break;
      case 10:
        nn(r.type);
        break;
      case 22:
      case 23:
        sn(r), cf(), n !== null && Z(ml);
        break;
      case 24:
        nn(se);
    }
  }
  function Sr(n, r) {
    try {
      var a = r.updateQueue, f = a !== null ? a.lastEffect : null;
      if (f !== null) {
        var d = f.next;
        a = d;
        do {
          if ((a.tag & n) === n) {
            f = void 0;
            var g = a.create, b = a.inst;
            f = g(), b.destroy = f;
          }
          a = a.next;
        } while (a !== d);
      }
    } catch (x) {
      Vt(r, r.return, x);
    }
  }
  function Tn(n, r, a) {
    try {
      var f = r.updateQueue, d = f !== null ? f.lastEffect : null;
      if (d !== null) {
        var g = d.next;
        f = g;
        do {
          if ((f.tag & n) === n) {
            var b = f.inst, x = b.destroy;
            if (x !== void 0) {
              b.destroy = void 0, d = r;
              var C = a, R = x;
              try {
                R();
              } catch (U) {
                Vt(
                  d,
                  C,
                  U
                );
              }
            }
          }
          f = f.next;
        } while (f !== g);
      }
    } catch (U) {
      Vt(r, r.return, U);
    }
  }
  function S0(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var a = n.stateNode;
      try {
        og(r, a);
      } catch (f) {
        Vt(n, n.return, f);
      }
    }
  }
  function x0(n, r, a) {
    a.props = gl(
      n.type,
      n.memoizedProps
    ), a.state = n.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (f) {
      Vt(n, r, f);
    }
  }
  function xr(n, r) {
    try {
      var a = n.ref;
      if (a !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var f = n.stateNode;
            break;
          case 30:
            f = n.stateNode;
            break;
          default:
            f = n.stateNode;
        }
        typeof a == "function" ? n.refCleanup = a(f) : a.current = f;
      }
    } catch (d) {
      Vt(n, r, d);
    }
  }
  function Ri(n, r) {
    var a = n.ref, f = n.refCleanup;
    if (a !== null)
      if (typeof f == "function")
        try {
          f();
        } catch (d) {
          Vt(n, r, d);
        } finally {
          n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (d) {
          Vt(n, r, d);
        }
      else a.current = null;
  }
  function w0(n) {
    var r = n.type, a = n.memoizedProps, f = n.stateNode;
    try {
      t: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && f.focus();
          break t;
        case "img":
          a.src ? f.src = a.src : a.srcSet && (f.srcset = a.srcSet);
      }
    } catch (d) {
      Vt(n, n.return, d);
    }
  }
  function Uf(n, r, a) {
    try {
      var f = n.stateNode;
      R2(f, n.type, a, r), f[Le] = r;
    } catch (d) {
      Vt(n, n.return, d);
    }
  }
  function A0(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 && zn(n.type) || n.tag === 4;
  }
  function Vf(n) {
    t: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || A0(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.tag === 27 && zn(n.type) || n.flags & 2 || n.child === null || n.tag === 4) continue t;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function qf(n, r, a) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(n, r) : (r = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, r.appendChild(n), a = a._reactRootContainer, a != null || r.onclick !== null || (r.onclick = Ea));
    else if (f !== 4 && (f === 27 && zn(n.type) && (a = n.stateNode, r = null), n = n.child, n !== null))
      for (qf(n, r, a), n = n.sibling; n !== null; )
        qf(n, r, a), n = n.sibling;
  }
  function ba(n, r, a) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? a.insertBefore(n, r) : a.appendChild(n);
    else if (f !== 4 && (f === 27 && zn(n.type) && (a = n.stateNode), n = n.child, n !== null))
      for (ba(n, r, a), n = n.sibling; n !== null; )
        ba(n, r, a), n = n.sibling;
  }
  function C0(n) {
    var r = n.stateNode, a = n.memoizedProps;
    try {
      for (var f = n.type, d = r.attributes; d.length; )
        r.removeAttributeNode(d[0]);
      ye(r, f, a), r[Ae] = n, r[Le] = a;
    } catch (g) {
      Vt(n, n.return, g);
    }
  }
  var an = !1, te = !1, jf = !1, k0 = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function f2(n, r) {
    if (n = n.containerInfo, fh = _a, n = Hp(n), Uc(n)) {
      if ("selectionStart" in n)
        var a = {
          start: n.selectionStart,
          end: n.selectionEnd
        };
      else
        t: {
          a = (a = n.ownerDocument) && a.defaultView || window;
          var f = a.getSelection && a.getSelection();
          if (f && f.rangeCount !== 0) {
            a = f.anchorNode;
            var d = f.anchorOffset, g = f.focusNode;
            f = f.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break t;
            }
            var b = 0, x = -1, C = -1, R = 0, U = 0, G = n, B = null;
            e: for (; ; ) {
              for (var N; G !== a || d !== 0 && G.nodeType !== 3 || (x = b + d), G !== g || f !== 0 && G.nodeType !== 3 || (C = b + f), G.nodeType === 3 && (b += G.nodeValue.length), (N = G.firstChild) !== null; )
                B = G, G = N;
              for (; ; ) {
                if (G === n) break e;
                if (B === a && ++R === d && (x = b), B === g && ++U === f && (C = b), (N = G.nextSibling) !== null) break;
                G = B, B = G.parentNode;
              }
              G = N;
            }
            a = x === -1 || C === -1 ? null : { start: x, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (hh = { focusedElem: n, selectionRange: a }, _a = !1, fe = r; fe !== null; )
      if (r = fe, n = r.child, (r.subtreeFlags & 1024) !== 0 && n !== null)
        n.return = r, fe = n;
      else
        for (; fe !== null; ) {
          switch (r = fe, g = r.alternate, n = r.flags, r.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && g !== null) {
                n = void 0, a = r, d = g.memoizedProps, g = g.memoizedState, f = a.stateNode;
                try {
                  var mt = gl(
                    a.type,
                    d,
                    a.elementType === a.type
                  );
                  n = f.getSnapshotBeforeUpdate(
                    mt,
                    g
                  ), f.__reactInternalSnapshotBeforeUpdate = n;
                } catch (ct) {
                  Vt(
                    a,
                    a.return,
                    ct
                  );
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (n = r.stateNode.containerInfo, a = n.nodeType, a === 9)
                  ph(n);
                else if (a === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ph(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(i(163));
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, fe = n;
            break;
          }
          fe = r.return;
        }
  }
  function M0(n, r, a) {
    var f = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        On(n, a), f & 4 && Sr(5, a);
        break;
      case 1:
        if (On(n, a), f & 4)
          if (n = a.stateNode, r === null)
            try {
              n.componentDidMount();
            } catch (b) {
              Vt(a, a.return, b);
            }
          else {
            var d = gl(
              a.type,
              r.memoizedProps
            );
            r = r.memoizedState;
            try {
              n.componentDidUpdate(
                d,
                r,
                n.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              Vt(
                a,
                a.return,
                b
              );
            }
          }
        f & 64 && S0(a), f & 512 && xr(a, a.return);
        break;
      case 3:
        if (On(n, a), f & 64 && (n = a.updateQueue, n !== null)) {
          if (r = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                r = a.child.stateNode;
                break;
              case 1:
                r = a.child.stateNode;
            }
          try {
            og(n, r);
          } catch (b) {
            Vt(a, a.return, b);
          }
        }
        break;
      case 27:
        r === null && f & 4 && C0(a);
      case 26:
      case 5:
        On(n, a), r === null && f & 4 && w0(a), f & 512 && xr(a, a.return);
        break;
      case 12:
        On(n, a);
        break;
      case 13:
        On(n, a), f & 4 && D0(n, a), f & 64 && (n = a.memoizedState, n !== null && (n = n.dehydrated, n !== null && (a = S2.bind(
          null,
          a
        ), U2(n, a))));
        break;
      case 22:
        if (f = a.memoizedState !== null || an, !f) {
          r = r !== null && r.memoizedState !== null || te, d = an;
          var g = te;
          an = f, (te = r) && !g ? Dn(
            n,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : On(n, a), an = d, te = g;
        }
        break;
      case 30:
        break;
      default:
        On(n, a);
    }
  }
  function T0(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, T0(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && bc(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  var Xt = null, _e = !1;
  function un(n, r, a) {
    for (a = a.child; a !== null; )
      O0(n, r, a), a = a.sibling;
  }
  function O0(n, r, a) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function")
      try {
        Xe.onCommitFiberUnmount(Ys, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        te || Ri(a, r), un(
          n,
          r,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        te || Ri(a, r);
        var f = Xt, d = _e;
        zn(a.type) && (Xt = a.stateNode, _e = !1), un(
          n,
          r,
          a
        ), Er(a.stateNode), Xt = f, _e = d;
        break;
      case 5:
        te || Ri(a, r);
      case 6:
        if (f = Xt, d = _e, Xt = null, un(
          n,
          r,
          a
        ), Xt = f, _e = d, Xt !== null)
          if (_e)
            try {
              (Xt.nodeType === 9 ? Xt.body : Xt.nodeName === "HTML" ? Xt.ownerDocument.body : Xt).removeChild(a.stateNode);
            } catch (g) {
              Vt(
                a,
                r,
                g
              );
            }
          else
            try {
              Xt.removeChild(a.stateNode);
            } catch (g) {
              Vt(
                a,
                r,
                g
              );
            }
        break;
      case 18:
        Xt !== null && (_e ? (n = Xt, gy(
          n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
          a.stateNode
        ), Ur(n)) : gy(Xt, a.stateNode));
        break;
      case 4:
        f = Xt, d = _e, Xt = a.stateNode.containerInfo, _e = !0, un(
          n,
          r,
          a
        ), Xt = f, _e = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        te || Tn(2, a, r), te || Tn(4, a, r), un(
          n,
          r,
          a
        );
        break;
      case 1:
        te || (Ri(a, r), f = a.stateNode, typeof f.componentWillUnmount == "function" && x0(
          a,
          r,
          f
        )), un(
          n,
          r,
          a
        );
        break;
      case 21:
        un(
          n,
          r,
          a
        );
        break;
      case 22:
        te = (f = te) || a.memoizedState !== null, un(
          n,
          r,
          a
        ), te = f;
        break;
      default:
        un(
          n,
          r,
          a
        );
    }
  }
  function D0(n, r) {
    if (r.memoizedState === null && (n = r.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null))))
      try {
        Ur(n);
      } catch (a) {
        Vt(r, r.return, a);
      }
  }
  function h2(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var r = n.stateNode;
        return r === null && (r = n.stateNode = new k0()), r;
      case 22:
        return n = n.stateNode, r = n._retryCache, r === null && (r = n._retryCache = new k0()), r;
      default:
        throw Error(i(435, n.tag));
    }
  }
  function Yf(n, r) {
    var a = h2(n);
    r.forEach(function(f) {
      var d = x2.bind(null, n, f);
      a.has(f) || (a.add(f), f.then(d, d));
    });
  }
  function Je(n, r) {
    var a = r.deletions;
    if (a !== null)
      for (var f = 0; f < a.length; f++) {
        var d = a[f], g = n, b = r, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (zn(x.type)) {
                Xt = x.stateNode, _e = !1;
                break t;
              }
              break;
            case 5:
              Xt = x.stateNode, _e = !1;
              break t;
            case 3:
            case 4:
              Xt = x.stateNode.containerInfo, _e = !0;
              break t;
          }
          x = x.return;
        }
        if (Xt === null) throw Error(i(160));
        O0(g, b, d), Xt = null, _e = !1, g = d.alternate, g !== null && (g.return = null), d.return = null;
      }
    if (r.subtreeFlags & 13878)
      for (r = r.child; r !== null; )
        E0(r, n), r = r.sibling;
  }
  var xi = null;
  function E0(n, r) {
    var a = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Je(r, n), Fe(n), f & 4 && (Tn(3, n, n.return), Sr(3, n), Tn(5, n, n.return));
        break;
      case 1:
        Je(r, n), Fe(n), f & 512 && (te || a === null || Ri(a, a.return)), f & 64 && an && (n = n.updateQueue, n !== null && (f = n.callbacks, f !== null && (a = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = a === null ? f : a.concat(f))));
        break;
      case 26:
        var d = xi;
        if (Je(r, n), Fe(n), f & 512 && (te || a === null || Ri(a, a.return)), f & 4) {
          var g = a !== null ? a.memoizedState : null;
          if (f = n.memoizedState, a === null)
            if (f === null)
              if (n.stateNode === null) {
                t: {
                  f = n.type, a = n.memoizedProps, d = d.ownerDocument || d;
                  e: switch (f) {
                    case "title":
                      g = d.getElementsByTagName("title")[0], (!g || g[Xs] || g[Ae] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = d.createElement(f), d.head.insertBefore(
                        g,
                        d.querySelector("head > title")
                      )), ye(g, f, a), g[Ae] = n, ue(g), f = g;
                      break t;
                    case "link":
                      var b = Cy(
                        "link",
                        "href",
                        d
                      ).get(f + (a.href || ""));
                      if (b) {
                        for (var x = 0; x < b.length; x++)
                          if (g = b[x], g.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && g.getAttribute("rel") === (a.rel == null ? null : a.rel) && g.getAttribute("title") === (a.title == null ? null : a.title) && g.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            b.splice(x, 1);
                            break e;
                          }
                      }
                      g = d.createElement(f), ye(g, f, a), d.head.appendChild(g);
                      break;
                    case "meta":
                      if (b = Cy(
                        "meta",
                        "content",
                        d
                      ).get(f + (a.content || ""))) {
                        for (x = 0; x < b.length; x++)
                          if (g = b[x], g.getAttribute("content") === (a.content == null ? null : "" + a.content) && g.getAttribute("name") === (a.name == null ? null : a.name) && g.getAttribute("property") === (a.property == null ? null : a.property) && g.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && g.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            b.splice(x, 1);
                            break e;
                          }
                      }
                      g = d.createElement(f), ye(g, f, a), d.head.appendChild(g);
                      break;
                    default:
                      throw Error(i(468, f));
                  }
                  g[Ae] = n, ue(g), f = g;
                }
                n.stateNode = f;
              } else
                ky(
                  d,
                  n.type,
                  n.stateNode
                );
            else
              n.stateNode = Ay(
                d,
                f,
                n.memoizedProps
              );
          else
            g !== f ? (g === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : g.count--, f === null ? ky(
              d,
              n.type,
              n.stateNode
            ) : Ay(
              d,
              f,
              n.memoizedProps
            )) : f === null && n.stateNode !== null && Uf(
              n,
              n.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Je(r, n), Fe(n), f & 512 && (te || a === null || Ri(a, a.return)), a !== null && f & 4 && Uf(
          n,
          n.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Je(r, n), Fe(n), f & 512 && (te || a === null || Ri(a, a.return)), n.flags & 32) {
          d = n.stateNode;
          try {
            jl(d, "");
          } catch (N) {
            Vt(n, n.return, N);
          }
        }
        f & 4 && n.stateNode != null && (d = n.memoizedProps, Uf(
          n,
          d,
          a !== null ? a.memoizedProps : d
        )), f & 1024 && (jf = !0);
        break;
      case 6:
        if (Je(r, n), Fe(n), f & 4) {
          if (n.stateNode === null)
            throw Error(i(162));
          f = n.memoizedProps, a = n.stateNode;
          try {
            a.nodeValue = f;
          } catch (N) {
            Vt(n, n.return, N);
          }
        }
        break;
      case 3:
        if (La = null, d = xi, xi = Ba(r.containerInfo), Je(r, n), xi = d, Fe(n), f & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ur(r.containerInfo);
          } catch (N) {
            Vt(n, n.return, N);
          }
        jf && (jf = !1, R0(n));
        break;
      case 4:
        f = xi, xi = Ba(
          n.stateNode.containerInfo
        ), Je(r, n), Fe(n), xi = f;
        break;
      case 12:
        Je(r, n), Fe(n);
        break;
      case 13:
        Je(r, n), Fe(n), n.child.flags & 8192 && n.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Zf = Oi()), f & 4 && (f = n.updateQueue, f !== null && (n.updateQueue = null, Yf(n, f)));
        break;
      case 22:
        d = n.memoizedState !== null;
        var C = a !== null && a.memoizedState !== null, R = an, U = te;
        if (an = R || d, te = U || C, Je(r, n), te = U, an = R, Fe(n), f & 8192)
          t: for (r = n.stateNode, r._visibility = d ? r._visibility & -2 : r._visibility | 1, d && (a === null || C || an || te || yl(n)), a = null, r = n; ; ) {
            if (r.tag === 5 || r.tag === 26) {
              if (a === null) {
                C = a = r;
                try {
                  if (g = C.stateNode, d)
                    b = g.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    x = C.stateNode;
                    var G = C.memoizedProps.style, B = G != null && G.hasOwnProperty("display") ? G.display : null;
                    x.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (N) {
                  Vt(C, C.return, N);
                }
              }
            } else if (r.tag === 6) {
              if (a === null) {
                C = r;
                try {
                  C.stateNode.nodeValue = d ? "" : C.memoizedProps;
                } catch (N) {
                  Vt(C, C.return, N);
                }
              }
            } else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === n) && r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === n) break t;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === n) break t;
              a === r && (a = null), r = r.return;
            }
            a === r && (a = null), r.sibling.return = r.return, r = r.sibling;
          }
        f & 4 && (f = n.updateQueue, f !== null && (a = f.retryQueue, a !== null && (f.retryQueue = null, Yf(n, a))));
        break;
      case 19:
        Je(r, n), Fe(n), f & 4 && (f = n.updateQueue, f !== null && (n.updateQueue = null, Yf(n, f)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Je(r, n), Fe(n);
    }
  }
  function Fe(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        for (var a, f = n.return; f !== null; ) {
          if (A0(f)) {
            a = f;
            break;
          }
          f = f.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var d = a.stateNode, g = Vf(n);
            ba(n, g, d);
            break;
          case 5:
            var b = a.stateNode;
            a.flags & 32 && (jl(b, ""), a.flags &= -33);
            var x = Vf(n);
            ba(n, x, b);
            break;
          case 3:
          case 4:
            var C = a.stateNode.containerInfo, R = Vf(n);
            qf(
              n,
              R,
              C
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (U) {
        Vt(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function R0(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var r = n;
        R0(r), r.tag === 5 && r.flags & 1024 && r.stateNode.reset(), n = n.sibling;
      }
  }
  function On(n, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; )
        M0(n, r.alternate, r), r = r.sibling;
  }
  function yl(n) {
    for (n = n.child; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Tn(4, r, r.return), yl(r);
          break;
        case 1:
          Ri(r, r.return);
          var a = r.stateNode;
          typeof a.componentWillUnmount == "function" && x0(
            r,
            r.return,
            a
          ), yl(r);
          break;
        case 27:
          Er(r.stateNode);
        case 26:
        case 5:
          Ri(r, r.return), yl(r);
          break;
        case 22:
          r.memoizedState === null && yl(r);
          break;
        case 30:
          yl(r);
          break;
        default:
          yl(r);
      }
      n = n.sibling;
    }
  }
  function Dn(n, r, a) {
    for (a = a && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var f = r.alternate, d = n, g = r, b = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Dn(
            d,
            g,
            a
          ), Sr(4, g);
          break;
        case 1:
          if (Dn(
            d,
            g,
            a
          ), f = g, d = f.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (R) {
              Vt(f, f.return, R);
            }
          if (f = g, d = f.updateQueue, d !== null) {
            var x = f.stateNode;
            try {
              var C = d.shared.hiddenCallbacks;
              if (C !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < C.length; d++)
                  rg(C[d], x);
            } catch (R) {
              Vt(f, f.return, R);
            }
          }
          a && b & 64 && S0(g), xr(g, g.return);
          break;
        case 27:
          C0(g);
        case 26:
        case 5:
          Dn(
            d,
            g,
            a
          ), a && f === null && b & 4 && w0(g), xr(g, g.return);
          break;
        case 12:
          Dn(
            d,
            g,
            a
          );
          break;
        case 13:
          Dn(
            d,
            g,
            a
          ), a && b & 4 && D0(d, g);
          break;
        case 22:
          g.memoizedState === null && Dn(
            d,
            g,
            a
          ), xr(g, g.return);
          break;
        case 30:
          break;
        default:
          Dn(
            d,
            g,
            a
          );
      }
      r = r.sibling;
    }
  }
  function Gf(n, r) {
    var a = null;
    n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), n = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (n = r.memoizedState.cachePool.pool), n !== a && (n != null && n.refCount++, a != null && rr(a));
  }
  function Kf(n, r) {
    n = null, r.alternate !== null && (n = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== n && (r.refCount++, n != null && rr(n));
  }
  function Bi(n, r, a, f) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; )
        B0(
          n,
          r,
          a,
          f
        ), r = r.sibling;
  }
  function B0(n, r, a, f) {
    var d = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Bi(
          n,
          r,
          a,
          f
        ), d & 2048 && Sr(9, r);
        break;
      case 1:
        Bi(
          n,
          r,
          a,
          f
        );
        break;
      case 3:
        Bi(
          n,
          r,
          a,
          f
        ), d & 2048 && (n = null, r.alternate !== null && (n = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== n && (r.refCount++, n != null && rr(n)));
        break;
      case 12:
        if (d & 2048) {
          Bi(
            n,
            r,
            a,
            f
          ), n = r.stateNode;
          try {
            var g = r.memoizedProps, b = g.id, x = g.onPostCommit;
            typeof x == "function" && x(
              b,
              r.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Vt(r, r.return, C);
          }
        } else
          Bi(
            n,
            r,
            a,
            f
          );
        break;
      case 13:
        Bi(
          n,
          r,
          a,
          f
        );
        break;
      case 23:
        break;
      case 22:
        g = r.stateNode, b = r.alternate, r.memoizedState !== null ? g._visibility & 2 ? Bi(
          n,
          r,
          a,
          f
        ) : wr(n, r) : g._visibility & 2 ? Bi(
          n,
          r,
          a,
          f
        ) : (g._visibility |= 2, rs(
          n,
          r,
          a,
          f,
          (r.subtreeFlags & 10256) !== 0
        )), d & 2048 && Gf(b, r);
        break;
      case 24:
        Bi(
          n,
          r,
          a,
          f
        ), d & 2048 && Kf(r.alternate, r);
        break;
      default:
        Bi(
          n,
          r,
          a,
          f
        );
    }
  }
  function rs(n, r, a, f, d) {
    for (d = d && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var g = n, b = r, x = a, C = f, R = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          rs(
            g,
            b,
            x,
            C,
            d
          ), Sr(8, b);
          break;
        case 23:
          break;
        case 22:
          var U = b.stateNode;
          b.memoizedState !== null ? U._visibility & 2 ? rs(
            g,
            b,
            x,
            C,
            d
          ) : wr(
            g,
            b
          ) : (U._visibility |= 2, rs(
            g,
            b,
            x,
            C,
            d
          )), d && R & 2048 && Gf(
            b.alternate,
            b
          );
          break;
        case 24:
          rs(
            g,
            b,
            x,
            C,
            d
          ), d && R & 2048 && Kf(b.alternate, b);
          break;
        default:
          rs(
            g,
            b,
            x,
            C,
            d
          );
      }
      r = r.sibling;
    }
  }
  function wr(n, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var a = n, f = r, d = f.flags;
        switch (f.tag) {
          case 22:
            wr(a, f), d & 2048 && Gf(
              f.alternate,
              f
            );
            break;
          case 24:
            wr(a, f), d & 2048 && Kf(f.alternate, f);
            break;
          default:
            wr(a, f);
        }
        r = r.sibling;
      }
  }
  var Ar = 8192;
  function os(n) {
    if (n.subtreeFlags & Ar)
      for (n = n.child; n !== null; )
        N0(n), n = n.sibling;
  }
  function N0(n) {
    switch (n.tag) {
      case 26:
        os(n), n.flags & Ar && n.memoizedState !== null && P2(
          xi,
          n.memoizedState,
          n.memoizedProps
        );
        break;
      case 5:
        os(n);
        break;
      case 3:
      case 4:
        var r = xi;
        xi = Ba(n.stateNode.containerInfo), os(n), xi = r;
        break;
      case 22:
        n.memoizedState === null && (r = n.alternate, r !== null && r.memoizedState !== null ? (r = Ar, Ar = 16777216, os(n), Ar = r) : os(n));
        break;
      default:
        os(n);
    }
  }
  function L0(n) {
    var r = n.alternate;
    if (r !== null && (n = r.child, n !== null)) {
      r.child = null;
      do
        r = n.sibling, n.sibling = null, n = r;
      while (n !== null);
    }
  }
  function Cr(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var f = r[a];
          fe = f, H0(
            f,
            n
          );
        }
      L0(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        z0(n), n = n.sibling;
  }
  function z0(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Cr(n), n.flags & 2048 && Tn(9, n, n.return);
        break;
      case 3:
        Cr(n);
        break;
      case 12:
        Cr(n);
        break;
      case 22:
        var r = n.stateNode;
        n.memoizedState !== null && r._visibility & 2 && (n.return === null || n.return.tag !== 13) ? (r._visibility &= -3, Sa(n)) : Cr(n);
        break;
      default:
        Cr(n);
    }
  }
  function Sa(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var f = r[a];
          fe = f, H0(
            f,
            n
          );
        }
      L0(n);
    }
    for (n = n.child; n !== null; ) {
      switch (r = n, r.tag) {
        case 0:
        case 11:
        case 15:
          Tn(8, r, r.return), Sa(r);
          break;
        case 22:
          a = r.stateNode, a._visibility & 2 && (a._visibility &= -3, Sa(r));
          break;
        default:
          Sa(r);
      }
      n = n.sibling;
    }
  }
  function H0(n, r) {
    for (; fe !== null; ) {
      var a = fe;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Tn(8, a, r);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var f = a.memoizedState.cachePool.pool;
            f != null && f.refCount++;
          }
          break;
        case 24:
          rr(a.memoizedState.cache);
      }
      if (f = a.child, f !== null) f.return = a, fe = f;
      else
        t: for (a = n; fe !== null; ) {
          f = fe;
          var d = f.sibling, g = f.return;
          if (T0(f), f === a) {
            fe = null;
            break t;
          }
          if (d !== null) {
            d.return = g, fe = d;
            break t;
          }
          fe = g;
        }
    }
  }
  var d2 = {
    getCacheForType: function(n) {
      var r = Ce(se), a = r.data.get(n);
      return a === void 0 && (a = n(), r.data.set(n, a)), a;
    }
  }, m2 = typeof WeakMap == "function" ? WeakMap : Map, Nt = 0, Yt = null, Ct = null, Dt = 0, Lt = 0, Pe = null, En = !1, as = !1, Xf = !1, cn = 0, Ft = 0, Rn = 0, vl = 0, Wf = 0, ci = 0, us = 0, kr = null, Ue = null, Qf = !1, Zf = 0, xa = 1 / 0, wa = null, Bn = null, ge = 0, Nn = null, cs = null, fs = 0, Jf = 0, Ff = null, _0 = null, Mr = 0, Pf = null;
  function Ie() {
    if ((Nt & 2) !== 0 && Dt !== 0)
      return Dt & -Dt;
    if (L.T !== null) {
      var n = Il;
      return n !== 0 ? n : lh();
    }
    return $m();
  }
  function U0() {
    ci === 0 && (ci = (Dt & 536870912) === 0 || Bt ? Jm() : 536870912);
    var n = ui.current;
    return n !== null && (n.flags |= 32), ci;
  }
  function $e(n, r, a) {
    (n === Yt && (Lt === 2 || Lt === 9) || n.cancelPendingCommit !== null) && (hs(n, 0), Ln(
      n,
      Dt,
      ci,
      !1
    )), Ks(n, a), ((Nt & 2) === 0 || n !== Yt) && (n === Yt && ((Nt & 2) === 0 && (vl |= a), Ft === 4 && Ln(
      n,
      Dt,
      ci,
      !1
    )), Ni(n));
  }
  function V0(n, r, a) {
    if ((Nt & 6) !== 0) throw Error(i(327));
    var f = !a && (r & 124) === 0 && (r & n.expiredLanes) === 0 || Gs(n, r), d = f ? y2(n, r) : th(n, r, !0), g = f;
    do {
      if (d === 0) {
        as && !f && Ln(n, r, 0, !1);
        break;
      } else {
        if (a = n.current.alternate, g && !p2(a)) {
          d = th(n, r, !1), g = !1;
          continue;
        }
        if (d === 2) {
          if (g = r, n.errorRecoveryDisabledLanes & g)
            var b = 0;
          else
            b = n.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            r = b;
            t: {
              var x = n;
              d = kr;
              var C = x.current.memoizedState.isDehydrated;
              if (C && (hs(x, b).flags |= 256), b = th(
                x,
                b,
                !1
              ), b !== 2) {
                if (Xf && !C) {
                  x.errorRecoveryDisabledLanes |= g, vl |= g, d = 4;
                  break t;
                }
                g = Ue, Ue = d, g !== null && (Ue === null ? Ue = g : Ue.push.apply(
                  Ue,
                  g
                ));
              }
              d = b;
            }
            if (g = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          hs(n, 0), Ln(n, r, 0, !0);
          break;
        }
        t: {
          switch (f = n, g = d, g) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              Ln(
                f,
                r,
                ci,
                !En
              );
              break t;
            case 2:
              Ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((r & 62914560) === r && (d = Zf + 300 - Oi(), 10 < d)) {
            if (Ln(
              f,
              r,
              ci,
              !En
            ), No(f, 0, !0) !== 0) break t;
            f.timeoutHandle = my(
              q0.bind(
                null,
                f,
                a,
                Ue,
                wa,
                Qf,
                r,
                ci,
                vl,
                us,
                En,
                g,
                2,
                -0,
                0
              ),
              d
            );
            break t;
          }
          q0(
            f,
            a,
            Ue,
            wa,
            Qf,
            r,
            ci,
            vl,
            us,
            En,
            g,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ni(n);
  }
  function q0(n, r, a, f, d, g, b, x, C, R, U, G, B, N) {
    if (n.timeoutHandle = -1, G = r.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (Nr = { stylesheets: null, count: 0, unsuspend: F2 }, N0(r), G = I2(), G !== null)) {
      n.cancelPendingCommit = G(
        Q0.bind(
          null,
          n,
          r,
          g,
          a,
          f,
          d,
          b,
          x,
          C,
          U,
          1,
          B,
          N
        )
      ), Ln(n, g, b, !R);
      return;
    }
    Q0(
      n,
      r,
      g,
      a,
      f,
      d,
      b,
      x,
      C
    );
  }
  function p2(n) {
    for (var r = n; ; ) {
      var a = r.tag;
      if ((a === 0 || a === 11 || a === 15) && r.flags & 16384 && (a = r.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var f = 0; f < a.length; f++) {
          var d = a[f], g = d.getSnapshot;
          d = d.value;
          try {
            if (!Qe(g(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = r.child, r.subtreeFlags & 16384 && a !== null)
        a.return = r, r = a;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ln(n, r, a, f) {
    r &= ~Wf, r &= ~vl, n.suspendedLanes |= r, n.pingedLanes &= ~r, f && (n.warmLanes |= r), f = n.expirationTimes;
    for (var d = r; 0 < d; ) {
      var g = 31 - We(d), b = 1 << g;
      f[g] = -1, d &= ~b;
    }
    a !== 0 && Pm(n, a, r);
  }
  function Aa() {
    return (Nt & 6) === 0 ? (Tr(0), !1) : !0;
  }
  function If() {
    if (Ct !== null) {
      if (Lt === 0)
        var n = Ct.return;
      else
        n = Ct, en = hl = null, pf(n), ls = null, yr = 0, n = Ct;
      for (; n !== null; )
        b0(n.alternate, n), n = n.return;
      Ct = null;
    }
  }
  function hs(n, r) {
    var a = n.timeoutHandle;
    a !== -1 && (n.timeoutHandle = -1, N2(a)), a = n.cancelPendingCommit, a !== null && (n.cancelPendingCommit = null, a()), If(), Yt = n, Ct = a = Ii(n.current, null), Dt = r, Lt = 0, Pe = null, En = !1, as = Gs(n, r), Xf = !1, us = ci = Wf = vl = Rn = Ft = 0, Ue = kr = null, Qf = !1, (r & 8) !== 0 && (r |= r & 32);
    var f = n.entangledLanes;
    if (f !== 0)
      for (n = n.entanglements, f &= r; 0 < f; ) {
        var d = 31 - We(f), g = 1 << d;
        r |= n[d], f &= ~g;
      }
    return cn = r, Xo(), a;
  }
  function j0(n, r) {
    wt = null, L.H = ca, r === ar || r === ta ? (r = lg(), Lt = 3) : r === eg ? (r = lg(), Lt = 4) : Lt = r === s0 ? 8 : r !== null && typeof r == "object" && typeof r.then == "function" ? 6 : 1, Pe = r, Ct === null && (Ft = 1, pa(
      n,
      si(r, n.current)
    ));
  }
  function Y0() {
    var n = L.H;
    return L.H = ca, n === null ? ca : n;
  }
  function G0() {
    var n = L.A;
    return L.A = d2, n;
  }
  function $f() {
    Ft = 4, En || (Dt & 4194048) !== Dt && ui.current !== null || (as = !0), (Rn & 134217727) === 0 && (vl & 134217727) === 0 || Yt === null || Ln(
      Yt,
      Dt,
      ci,
      !1
    );
  }
  function th(n, r, a) {
    var f = Nt;
    Nt |= 2;
    var d = Y0(), g = G0();
    (Yt !== n || Dt !== r) && (wa = null, hs(n, r)), r = !1;
    var b = Ft;
    t: do
      try {
        if (Lt !== 0 && Ct !== null) {
          var x = Ct, C = Pe;
          switch (Lt) {
            case 8:
              If(), b = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ui.current === null && (r = !0);
              var R = Lt;
              if (Lt = 0, Pe = null, ds(n, x, C, R), a && as) {
                b = 0;
                break t;
              }
              break;
            default:
              R = Lt, Lt = 0, Pe = null, ds(n, x, C, R);
          }
        }
        g2(), b = Ft;
        break;
      } catch (U) {
        j0(n, U);
      }
    while (!0);
    return r && n.shellSuspendCounter++, en = hl = null, Nt = f, L.H = d, L.A = g, Ct === null && (Yt = null, Dt = 0, Xo()), b;
  }
  function g2() {
    for (; Ct !== null; ) K0(Ct);
  }
  function y2(n, r) {
    var a = Nt;
    Nt |= 2;
    var f = Y0(), d = G0();
    Yt !== n || Dt !== r ? (wa = null, xa = Oi() + 500, hs(n, r)) : as = Gs(
      n,
      r
    );
    t: do
      try {
        if (Lt !== 0 && Ct !== null) {
          r = Ct;
          var g = Pe;
          e: switch (Lt) {
            case 1:
              Lt = 0, Pe = null, ds(n, r, g, 1);
              break;
            case 2:
            case 9:
              if (ig(g)) {
                Lt = 0, Pe = null, X0(r);
                break;
              }
              r = function() {
                Lt !== 2 && Lt !== 9 || Yt !== n || (Lt = 7), Ni(n);
              }, g.then(r, r);
              break t;
            case 3:
              Lt = 7;
              break t;
            case 4:
              Lt = 5;
              break t;
            case 7:
              ig(g) ? (Lt = 0, Pe = null, X0(r)) : (Lt = 0, Pe = null, ds(n, r, g, 7));
              break;
            case 5:
              var b = null;
              switch (Ct.tag) {
                case 26:
                  b = Ct.memoizedState;
                case 5:
                case 27:
                  var x = Ct;
                  if (!b || My(b)) {
                    Lt = 0, Pe = null;
                    var C = x.sibling;
                    if (C !== null) Ct = C;
                    else {
                      var R = x.return;
                      R !== null ? (Ct = R, Ca(R)) : Ct = null;
                    }
                    break e;
                  }
              }
              Lt = 0, Pe = null, ds(n, r, g, 5);
              break;
            case 6:
              Lt = 0, Pe = null, ds(n, r, g, 6);
              break;
            case 8:
              If(), Ft = 6;
              break t;
            default:
              throw Error(i(462));
          }
        }
        v2();
        break;
      } catch (U) {
        j0(n, U);
      }
    while (!0);
    return en = hl = null, L.H = f, L.A = d, Nt = a, Ct !== null ? 0 : (Yt = null, Dt = 0, Xo(), Ft);
  }
  function v2() {
    for (; Ct !== null && !qx(); )
      K0(Ct);
  }
  function K0(n) {
    var r = y0(n.alternate, n, cn);
    n.memoizedProps = n.pendingProps, r === null ? Ca(n) : Ct = r;
  }
  function X0(n) {
    var r = n, a = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = f0(
          a,
          r,
          r.pendingProps,
          r.type,
          void 0,
          Dt
        );
        break;
      case 11:
        r = f0(
          a,
          r,
          r.pendingProps,
          r.type.render,
          r.ref,
          Dt
        );
        break;
      case 5:
        pf(r);
      default:
        b0(a, r), r = Ct = Wp(r, cn), r = y0(a, r, cn);
    }
    n.memoizedProps = n.pendingProps, r === null ? Ca(n) : Ct = r;
  }
  function ds(n, r, a, f) {
    en = hl = null, pf(r), ls = null, yr = 0;
    var d = r.return;
    try {
      if (o2(
        n,
        d,
        r,
        a,
        Dt
      )) {
        Ft = 1, pa(
          n,
          si(a, n.current)
        ), Ct = null;
        return;
      }
    } catch (g) {
      if (d !== null) throw Ct = d, g;
      Ft = 1, pa(
        n,
        si(a, n.current)
      ), Ct = null;
      return;
    }
    r.flags & 32768 ? (Bt || f === 1 ? n = !0 : as || (Dt & 536870912) !== 0 ? n = !1 : (En = n = !0, (f === 2 || f === 9 || f === 3 || f === 6) && (f = ui.current, f !== null && f.tag === 13 && (f.flags |= 16384))), W0(r, n)) : Ca(r);
  }
  function Ca(n) {
    var r = n;
    do {
      if ((r.flags & 32768) !== 0) {
        W0(
          r,
          En
        );
        return;
      }
      n = r.return;
      var a = u2(
        r.alternate,
        r,
        cn
      );
      if (a !== null) {
        Ct = a;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ct = r;
        return;
      }
      Ct = r = n;
    } while (r !== null);
    Ft === 0 && (Ft = 5);
  }
  function W0(n, r) {
    do {
      var a = c2(n.alternate, n);
      if (a !== null) {
        a.flags &= 32767, Ct = a;
        return;
      }
      if (a = n.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !r && (n = n.sibling, n !== null)) {
        Ct = n;
        return;
      }
      Ct = n = a;
    } while (n !== null);
    Ft = 6, Ct = null;
  }
  function Q0(n, r, a, f, d, g, b, x, C) {
    n.cancelPendingCommit = null;
    do
      ka();
    while (ge !== 0);
    if ((Nt & 6) !== 0) throw Error(i(327));
    if (r !== null) {
      if (r === n.current) throw Error(i(177));
      if (g = r.lanes | r.childLanes, g |= Gc, Fx(
        n,
        a,
        g,
        b,
        x,
        C
      ), n === Yt && (Ct = Yt = null, Dt = 0), cs = r, Nn = n, fs = a, Jf = g, Ff = d, _0 = f, (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? (n.callbackNode = null, n.callbackPriority = 0, w2(Eo, function() {
        return I0(), null;
      })) : (n.callbackNode = null, n.callbackPriority = 0), f = (r.flags & 13878) !== 0, (r.subtreeFlags & 13878) !== 0 || f) {
        f = L.T, L.T = null, d = W.p, W.p = 2, b = Nt, Nt |= 4;
        try {
          f2(n, r, a);
        } finally {
          Nt = b, W.p = d, L.T = f;
        }
      }
      ge = 1, Z0(), J0(), F0();
    }
  }
  function Z0() {
    if (ge === 1) {
      ge = 0;
      var n = Nn, r = cs, a = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null;
        var f = W.p;
        W.p = 2;
        var d = Nt;
        Nt |= 4;
        try {
          E0(r, n);
          var g = hh, b = Hp(n.containerInfo), x = g.focusedElem, C = g.selectionRange;
          if (b !== x && x && x.ownerDocument && zp(
            x.ownerDocument.documentElement,
            x
          )) {
            if (C !== null && Uc(x)) {
              var R = C.start, U = C.end;
              if (U === void 0 && (U = R), "selectionStart" in x)
                x.selectionStart = R, x.selectionEnd = Math.min(
                  U,
                  x.value.length
                );
              else {
                var G = x.ownerDocument || document, B = G && G.defaultView || window;
                if (B.getSelection) {
                  var N = B.getSelection(), mt = x.textContent.length, ct = Math.min(C.start, mt), _t = C.end === void 0 ? ct : Math.min(C.end, mt);
                  !N.extend && ct > _t && (b = _t, _t = ct, ct = b);
                  var D = Lp(
                    x,
                    ct
                  ), T = Lp(
                    x,
                    _t
                  );
                  if (D && T && (N.rangeCount !== 1 || N.anchorNode !== D.node || N.anchorOffset !== D.offset || N.focusNode !== T.node || N.focusOffset !== T.offset)) {
                    var E = G.createRange();
                    E.setStart(D.node, D.offset), N.removeAllRanges(), ct > _t ? (N.addRange(E), N.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), N.addRange(E));
                  }
                }
              }
            }
            for (G = [], N = x; N = N.parentNode; )
              N.nodeType === 1 && G.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < G.length; x++) {
              var Y = G[x];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          _a = !!fh, hh = fh = null;
        } finally {
          Nt = d, W.p = f, L.T = a;
        }
      }
      n.current = r, ge = 2;
    }
  }
  function J0() {
    if (ge === 2) {
      ge = 0;
      var n = Nn, r = cs, a = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || a) {
        a = L.T, L.T = null;
        var f = W.p;
        W.p = 2;
        var d = Nt;
        Nt |= 4;
        try {
          M0(n, r.alternate, r);
        } finally {
          Nt = d, W.p = f, L.T = a;
        }
      }
      ge = 3;
    }
  }
  function F0() {
    if (ge === 4 || ge === 3) {
      ge = 0, jx();
      var n = Nn, r = cs, a = fs, f = _0;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? ge = 5 : (ge = 0, cs = Nn = null, P0(n, n.pendingLanes));
      var d = n.pendingLanes;
      if (d === 0 && (Bn = null), yc(a), r = r.stateNode, Xe && typeof Xe.onCommitFiberRoot == "function")
        try {
          Xe.onCommitFiberRoot(
            Ys,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (f !== null) {
        r = L.T, d = W.p, W.p = 2, L.T = null;
        try {
          for (var g = n.onRecoverableError, b = 0; b < f.length; b++) {
            var x = f[b];
            g(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          L.T = r, W.p = d;
        }
      }
      (fs & 3) !== 0 && ka(), Ni(n), d = n.pendingLanes, (a & 4194090) !== 0 && (d & 42) !== 0 ? n === Pf ? Mr++ : (Mr = 0, Pf = n) : Mr = 0, Tr(0);
    }
  }
  function P0(n, r) {
    (n.pooledCacheLanes &= r) === 0 && (r = n.pooledCache, r != null && (n.pooledCache = null, rr(r)));
  }
  function ka(n) {
    return Z0(), J0(), F0(), I0();
  }
  function I0() {
    if (ge !== 5) return !1;
    var n = Nn, r = Jf;
    Jf = 0;
    var a = yc(fs), f = L.T, d = W.p;
    try {
      W.p = 32 > a ? 32 : a, L.T = null, a = Ff, Ff = null;
      var g = Nn, b = fs;
      if (ge = 0, cs = Nn = null, fs = 0, (Nt & 6) !== 0) throw Error(i(331));
      var x = Nt;
      if (Nt |= 4, z0(g.current), B0(
        g,
        g.current,
        b,
        a
      ), Nt = x, Tr(0, !1), Xe && typeof Xe.onPostCommitFiberRoot == "function")
        try {
          Xe.onPostCommitFiberRoot(Ys, g);
        } catch {
        }
      return !0;
    } finally {
      W.p = d, L.T = f, P0(n, r);
    }
  }
  function $0(n, r, a) {
    r = si(a, r), r = Df(n.stateNode, r, 2), n = An(n, r, 2), n !== null && (Ks(n, 2), Ni(n));
  }
  function Vt(n, r, a) {
    if (n.tag === 3)
      $0(n, n, a);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          $0(
            r,
            n,
            a
          );
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Bn === null || !Bn.has(f))) {
            n = si(a, n), a = n0(2), f = An(r, a, 2), f !== null && (l0(
              a,
              f,
              r,
              n
            ), Ks(f, 2), Ni(f));
            break;
          }
        }
        r = r.return;
      }
  }
  function eh(n, r, a) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new m2();
      var d = /* @__PURE__ */ new Set();
      f.set(r, d);
    } else
      d = f.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), f.set(r, d));
    d.has(a) || (Xf = !0, d.add(a), n = b2.bind(null, n, r, a), r.then(n, n));
  }
  function b2(n, r, a) {
    var f = n.pingCache;
    f !== null && f.delete(r), n.pingedLanes |= n.suspendedLanes & a, n.warmLanes &= ~a, Yt === n && (Dt & a) === a && (Ft === 4 || Ft === 3 && (Dt & 62914560) === Dt && 300 > Oi() - Zf ? (Nt & 2) === 0 && hs(n, 0) : Wf |= a, us === Dt && (us = 0)), Ni(n);
  }
  function ty(n, r) {
    r === 0 && (r = Fm()), n = Zl(n, r), n !== null && (Ks(n, r), Ni(n));
  }
  function S2(n) {
    var r = n.memoizedState, a = 0;
    r !== null && (a = r.retryLane), ty(n, a);
  }
  function x2(n, r) {
    var a = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, d = n.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      case 22:
        f = n.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    f !== null && f.delete(r), ty(n, a);
  }
  function w2(n, r) {
    return dc(n, r);
  }
  var Ma = null, ms = null, ih = !1, Ta = !1, nh = !1, bl = 0;
  function Ni(n) {
    n !== ms && n.next === null && (ms === null ? Ma = ms = n : ms = ms.next = n), Ta = !0, ih || (ih = !0, C2());
  }
  function Tr(n, r) {
    if (!nh && Ta) {
      nh = !0;
      do
        for (var a = !1, f = Ma; f !== null; ) {
          if (n !== 0) {
            var d = f.pendingLanes;
            if (d === 0) var g = 0;
            else {
              var b = f.suspendedLanes, x = f.pingedLanes;
              g = (1 << 31 - We(42 | n) + 1) - 1, g &= d & ~(b & ~x), g = g & 201326741 ? g & 201326741 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (a = !0, ly(f, g));
          } else
            g = Dt, g = No(
              f,
              f === Yt ? g : 0,
              f.cancelPendingCommit !== null || f.timeoutHandle !== -1
            ), (g & 3) === 0 || Gs(f, g) || (a = !0, ly(f, g));
          f = f.next;
        }
      while (a);
      nh = !1;
    }
  }
  function A2() {
    ey();
  }
  function ey() {
    Ta = ih = !1;
    var n = 0;
    bl !== 0 && (B2() && (n = bl), bl = 0);
    for (var r = Oi(), a = null, f = Ma; f !== null; ) {
      var d = f.next, g = iy(f, r);
      g === 0 ? (f.next = null, a === null ? Ma = d : a.next = d, d === null && (ms = a)) : (a = f, (n !== 0 || (g & 3) !== 0) && (Ta = !0)), f = d;
    }
    Tr(n);
  }
  function iy(n, r) {
    for (var a = n.suspendedLanes, f = n.pingedLanes, d = n.expirationTimes, g = n.pendingLanes & -62914561; 0 < g; ) {
      var b = 31 - We(g), x = 1 << b, C = d[b];
      C === -1 ? ((x & a) === 0 || (x & f) !== 0) && (d[b] = Jx(x, r)) : C <= r && (n.expiredLanes |= x), g &= ~x;
    }
    if (r = Yt, a = Dt, a = No(
      n,
      n === r ? a : 0,
      n.cancelPendingCommit !== null || n.timeoutHandle !== -1
    ), f = n.callbackNode, a === 0 || n === r && (Lt === 2 || Lt === 9) || n.cancelPendingCommit !== null)
      return f !== null && f !== null && mc(f), n.callbackNode = null, n.callbackPriority = 0;
    if ((a & 3) === 0 || Gs(n, a)) {
      if (r = a & -a, r === n.callbackPriority) return r;
      switch (f !== null && mc(f), yc(a)) {
        case 2:
        case 8:
          a = Qm;
          break;
        case 32:
          a = Eo;
          break;
        case 268435456:
          a = Zm;
          break;
        default:
          a = Eo;
      }
      return f = ny.bind(null, n), a = dc(a, f), n.callbackPriority = r, n.callbackNode = a, r;
    }
    return f !== null && f !== null && mc(f), n.callbackPriority = 2, n.callbackNode = null, 2;
  }
  function ny(n, r) {
    if (ge !== 0 && ge !== 5)
      return n.callbackNode = null, n.callbackPriority = 0, null;
    var a = n.callbackNode;
    if (ka() && n.callbackNode !== a)
      return null;
    var f = Dt;
    return f = No(
      n,
      n === Yt ? f : 0,
      n.cancelPendingCommit !== null || n.timeoutHandle !== -1
    ), f === 0 ? null : (V0(n, f, r), iy(n, Oi()), n.callbackNode != null && n.callbackNode === a ? ny.bind(null, n) : null);
  }
  function ly(n, r) {
    if (ka()) return null;
    V0(n, r, !0);
  }
  function C2() {
    L2(function() {
      (Nt & 6) !== 0 ? dc(
        Wm,
        A2
      ) : ey();
    });
  }
  function lh() {
    return bl === 0 && (bl = Jm()), bl;
  }
  function sy(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean" ? null : typeof n == "function" ? n : Uo("" + n);
  }
  function ry(n, r) {
    var a = r.ownerDocument.createElement("input");
    return a.name = r.name, a.value = r.value, n.id && a.setAttribute("form", n.id), r.parentNode.insertBefore(a, r), n = new FormData(n), a.parentNode.removeChild(a), n;
  }
  function k2(n, r, a, f, d) {
    if (r === "submit" && a && a.stateNode === d) {
      var g = sy(
        (d[Le] || null).action
      ), b = f.submitter;
      b && (r = (r = b[Le] || null) ? sy(r.formAction) : b.getAttribute("formAction"), r !== null && (g = r, b = null));
      var x = new Yo(
        "action",
        "action",
        null,
        f,
        d
      );
      n.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (f.defaultPrevented) {
                if (bl !== 0) {
                  var C = b ? ry(d, b) : new FormData(d);
                  Cf(
                    a,
                    {
                      pending: !0,
                      data: C,
                      method: d.method,
                      action: g
                    },
                    null,
                    C
                  );
                }
              } else
                typeof g == "function" && (x.preventDefault(), C = b ? ry(d, b) : new FormData(d), Cf(
                  a,
                  {
                    pending: !0,
                    data: C,
                    method: d.method,
                    action: g
                  },
                  g,
                  C
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var sh = 0; sh < Yc.length; sh++) {
    var rh = Yc[sh], M2 = rh.toLowerCase(), T2 = rh[0].toUpperCase() + rh.slice(1);
    Si(
      M2,
      "on" + T2
    );
  }
  Si(Vp, "onAnimationEnd"), Si(qp, "onAnimationIteration"), Si(jp, "onAnimationStart"), Si("dblclick", "onDoubleClick"), Si("focusin", "onFocus"), Si("focusout", "onBlur"), Si(Kw, "onTransitionRun"), Si(Xw, "onTransitionStart"), Si(Ww, "onTransitionCancel"), Si(Yp, "onTransitionEnd"), Ul("onMouseEnter", ["mouseout", "mouseover"]), Ul("onMouseLeave", ["mouseout", "mouseover"]), Ul("onPointerEnter", ["pointerout", "pointerover"]), Ul("onPointerLeave", ["pointerout", "pointerover"]), nl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), nl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), nl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), nl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), nl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), nl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), O2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Or)
  );
  function oy(n, r) {
    r = (r & 4) !== 0;
    for (var a = 0; a < n.length; a++) {
      var f = n[a], d = f.event;
      f = f.listeners;
      t: {
        var g = void 0;
        if (r)
          for (var b = f.length - 1; 0 <= b; b--) {
            var x = f[b], C = x.instance, R = x.currentTarget;
            if (x = x.listener, C !== g && d.isPropagationStopped())
              break t;
            g = x, d.currentTarget = R;
            try {
              g(d);
            } catch (U) {
              ma(U);
            }
            d.currentTarget = null, g = C;
          }
        else
          for (b = 0; b < f.length; b++) {
            if (x = f[b], C = x.instance, R = x.currentTarget, x = x.listener, C !== g && d.isPropagationStopped())
              break t;
            g = x, d.currentTarget = R;
            try {
              g(d);
            } catch (U) {
              ma(U);
            }
            d.currentTarget = null, g = C;
          }
      }
    }
  }
  function kt(n, r) {
    var a = r[vc];
    a === void 0 && (a = r[vc] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    a.has(f) || (ay(r, n, 2, !1), a.add(f));
  }
  function oh(n, r, a) {
    var f = 0;
    r && (f |= 4), ay(
      a,
      n,
      f,
      r
    );
  }
  var Oa = "_reactListening" + Math.random().toString(36).slice(2);
  function ah(n) {
    if (!n[Oa]) {
      n[Oa] = !0, ep.forEach(function(a) {
        a !== "selectionchange" && (O2.has(a) || oh(a, !1, n), oh(a, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Oa] || (r[Oa] = !0, oh("selectionchange", !1, r));
    }
  }
  function ay(n, r, a, f) {
    switch (By(r)) {
      case 2:
        var d = eA;
        break;
      case 8:
        d = iA;
        break;
      default:
        d = wh;
    }
    a = d.bind(
      null,
      r,
      a,
      n
    ), d = void 0, !Dc || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), f ? d !== void 0 ? n.addEventListener(r, a, {
      capture: !0,
      passive: d
    }) : n.addEventListener(r, a, !0) : d !== void 0 ? n.addEventListener(r, a, {
      passive: d
    }) : n.addEventListener(r, a, !1);
  }
  function uh(n, r, a, f, d) {
    var g = f;
    if ((r & 1) === 0 && (r & 2) === 0 && f !== null)
      t: for (; ; ) {
        if (f === null) return;
        var b = f.tag;
        if (b === 3 || b === 4) {
          var x = f.stateNode.containerInfo;
          if (x === d) break;
          if (b === 4)
            for (b = f.return; b !== null; ) {
              var C = b.tag;
              if ((C === 3 || C === 4) && b.stateNode.containerInfo === d)
                return;
              b = b.return;
            }
          for (; x !== null; ) {
            if (b = zl(x), b === null) return;
            if (C = b.tag, C === 5 || C === 6 || C === 26 || C === 27) {
              f = g = b;
              continue t;
            }
            x = x.parentNode;
          }
        }
        f = f.return;
      }
    pp(function() {
      var R = g, U = Tc(a), G = [];
      t: {
        var B = Gp.get(n);
        if (B !== void 0) {
          var N = Yo, mt = n;
          switch (n) {
            case "keypress":
              if (qo(a) === 0) break t;
            case "keydown":
            case "keyup":
              N = ww;
              break;
            case "focusin":
              mt = "focus", N = Nc;
              break;
            case "focusout":
              mt = "blur", N = Nc;
              break;
            case "beforeblur":
            case "afterblur":
              N = Nc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = vp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = cw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = kw;
              break;
            case Vp:
            case qp:
            case jp:
              N = dw;
              break;
            case Yp:
              N = Tw;
              break;
            case "scroll":
            case "scrollend":
              N = aw;
              break;
            case "wheel":
              N = Dw;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = pw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Sp;
              break;
            case "toggle":
            case "beforetoggle":
              N = Rw;
          }
          var ct = (r & 4) !== 0, _t = !ct && (n === "scroll" || n === "scrollend"), D = ct ? B !== null ? B + "Capture" : null : B;
          ct = [];
          for (var T = R, E; T !== null; ) {
            var Y = T;
            if (E = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || E === null || D === null || (Y = Qs(T, D), Y != null && ct.push(
              Dr(T, Y, E)
            )), _t) break;
            T = T.return;
          }
          0 < ct.length && (B = new N(
            B,
            mt,
            null,
            a,
            U
          ), G.push({ event: B, listeners: ct }));
        }
      }
      if ((r & 7) === 0) {
        t: {
          if (B = n === "mouseover" || n === "pointerover", N = n === "mouseout" || n === "pointerout", B && a !== Mc && (mt = a.relatedTarget || a.fromElement) && (zl(mt) || mt[Ll]))
            break t;
          if ((N || B) && (B = U.window === U ? U : (B = U.ownerDocument) ? B.defaultView || B.parentWindow : window, N ? (mt = a.relatedTarget || a.toElement, N = R, mt = mt ? zl(mt) : null, mt !== null && (_t = o(mt), ct = mt.tag, mt !== _t || ct !== 5 && ct !== 27 && ct !== 6) && (mt = null)) : (N = null, mt = R), N !== mt)) {
            if (ct = vp, Y = "onMouseLeave", D = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (ct = Sp, Y = "onPointerLeave", D = "onPointerEnter", T = "pointer"), _t = N == null ? B : Ws(N), E = mt == null ? B : Ws(mt), B = new ct(
              Y,
              T + "leave",
              N,
              a,
              U
            ), B.target = _t, B.relatedTarget = E, Y = null, zl(U) === R && (ct = new ct(
              D,
              T + "enter",
              mt,
              a,
              U
            ), ct.target = E, ct.relatedTarget = _t, Y = ct), _t = Y, N && mt)
              e: {
                for (ct = N, D = mt, T = 0, E = ct; E; E = ps(E))
                  T++;
                for (E = 0, Y = D; Y; Y = ps(Y))
                  E++;
                for (; 0 < T - E; )
                  ct = ps(ct), T--;
                for (; 0 < E - T; )
                  D = ps(D), E--;
                for (; T--; ) {
                  if (ct === D || D !== null && ct === D.alternate)
                    break e;
                  ct = ps(ct), D = ps(D);
                }
                ct = null;
              }
            else ct = null;
            N !== null && uy(
              G,
              B,
              N,
              ct,
              !1
            ), mt !== null && _t !== null && uy(
              G,
              _t,
              mt,
              ct,
              !0
            );
          }
        }
        t: {
          if (B = R ? Ws(R) : window, N = B.nodeName && B.nodeName.toLowerCase(), N === "select" || N === "input" && B.type === "file")
            var nt = Op;
          else if (Mp(B))
            if (Dp)
              nt = jw;
            else {
              nt = Vw;
              var At = Uw;
            }
          else
            N = B.nodeName, !N || N.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? R && kc(R.elementType) && (nt = Op) : nt = qw;
          if (nt && (nt = nt(n, R))) {
            Tp(
              G,
              nt,
              a,
              U
            );
            break t;
          }
          At && At(n, B, R), n === "focusout" && R && B.type === "number" && R.memoizedProps.value != null && Cc(B, "number", B.value);
        }
        switch (At = R ? Ws(R) : window, n) {
          case "focusin":
            (Mp(At) || At.contentEditable === "true") && (Xl = At, Vc = R, er = null);
            break;
          case "focusout":
            er = Vc = Xl = null;
            break;
          case "mousedown":
            qc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qc = !1, _p(G, a, U);
            break;
          case "selectionchange":
            if (Gw) break;
          case "keydown":
          case "keyup":
            _p(G, a, U);
        }
        var rt;
        if (zc)
          t: {
            switch (n) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          Kl ? Cp(n, a) && (ht = "onCompositionEnd") : n === "keydown" && a.keyCode === 229 && (ht = "onCompositionStart");
        ht && (xp && a.locale !== "ko" && (Kl || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Kl && (rt = gp()) : (bn = U, Ec = "value" in bn ? bn.value : bn.textContent, Kl = !0)), At = Da(R, ht), 0 < At.length && (ht = new bp(
          ht,
          n,
          null,
          a,
          U
        ), G.push({ event: ht, listeners: At }), rt ? ht.data = rt : (rt = kp(a), rt !== null && (ht.data = rt)))), (rt = Nw ? Lw(n, a) : zw(n, a)) && (ht = Da(R, "onBeforeInput"), 0 < ht.length && (At = new bp(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          U
        ), G.push({
          event: At,
          listeners: ht
        }), At.data = rt)), k2(
          G,
          n,
          R,
          a,
          U
        );
      }
      oy(G, r);
    });
  }
  function Dr(n, r, a) {
    return {
      instance: n,
      listener: r,
      currentTarget: a
    };
  }
  function Da(n, r) {
    for (var a = r + "Capture", f = []; n !== null; ) {
      var d = n, g = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || g === null || (d = Qs(n, a), d != null && f.unshift(
        Dr(n, d, g)
      ), d = Qs(n, r), d != null && f.push(
        Dr(n, d, g)
      )), n.tag === 3) return f;
      n = n.return;
    }
    return [];
  }
  function ps(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function uy(n, r, a, f, d) {
    for (var g = r._reactName, b = []; a !== null && a !== f; ) {
      var x = a, C = x.alternate, R = x.stateNode;
      if (x = x.tag, C !== null && C === f) break;
      x !== 5 && x !== 26 && x !== 27 || R === null || (C = R, d ? (R = Qs(a, g), R != null && b.unshift(
        Dr(a, R, C)
      )) : d || (R = Qs(a, g), R != null && b.push(
        Dr(a, R, C)
      ))), a = a.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var D2 = /\r\n?/g, E2 = /\u0000|\uFFFD/g;
  function cy(n) {
    return (typeof n == "string" ? n : "" + n).replace(D2, `
`).replace(E2, "");
  }
  function fy(n, r) {
    return r = cy(r), cy(n) === r;
  }
  function Ea() {
  }
  function Ht(n, r, a, f, d, g) {
    switch (a) {
      case "children":
        typeof f == "string" ? r === "body" || r === "textarea" && f === "" || jl(n, f) : (typeof f == "number" || typeof f == "bigint") && r !== "body" && jl(n, "" + f);
        break;
      case "className":
        zo(n, "class", f);
        break;
      case "tabIndex":
        zo(n, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zo(n, a, f);
        break;
      case "style":
        dp(n, f, g);
        break;
      case "data":
        if (r !== "object") {
          zo(n, "data", f);
          break;
        }
      case "src":
      case "href":
        if (f === "" && (r !== "a" || a !== "href")) {
          n.removeAttribute(a);
          break;
        }
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean") {
          n.removeAttribute(a);
          break;
        }
        f = Uo("" + f), n.setAttribute(a, f);
        break;
      case "action":
      case "formAction":
        if (typeof f == "function") {
          n.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof g == "function" && (a === "formAction" ? (r !== "input" && Ht(n, r, "name", d.name, d, null), Ht(
            n,
            r,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Ht(
            n,
            r,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Ht(
            n,
            r,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Ht(n, r, "encType", d.encType, d, null), Ht(n, r, "method", d.method, d, null), Ht(n, r, "target", d.target, d, null)));
        if (f == null || typeof f == "symbol" || typeof f == "boolean") {
          n.removeAttribute(a);
          break;
        }
        f = Uo("" + f), n.setAttribute(a, f);
        break;
      case "onClick":
        f != null && (n.onclick = Ea);
        break;
      case "onScroll":
        f != null && kt("scroll", n);
        break;
      case "onScrollEnd":
        f != null && kt("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f))
            throw Error(i(61));
          if (a = f.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            n.innerHTML = a;
          }
        }
        break;
      case "multiple":
        n.multiple = f && typeof f != "function" && typeof f != "symbol";
        break;
      case "muted":
        n.muted = f && typeof f != "function" && typeof f != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (f == null || typeof f == "function" || typeof f == "boolean" || typeof f == "symbol") {
          n.removeAttribute("xlink:href");
          break;
        }
        a = Uo("" + f), n.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        f != null && typeof f != "function" && typeof f != "symbol" ? n.setAttribute(a, "" + f) : n.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        f && typeof f != "function" && typeof f != "symbol" ? n.setAttribute(a, "") : n.removeAttribute(a);
        break;
      case "capture":
      case "download":
        f === !0 ? n.setAttribute(a, "") : f !== !1 && f != null && typeof f != "function" && typeof f != "symbol" ? n.setAttribute(a, f) : n.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        f != null && typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f ? n.setAttribute(a, f) : n.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        f == null || typeof f == "function" || typeof f == "symbol" || isNaN(f) ? n.removeAttribute(a) : n.setAttribute(a, f);
        break;
      case "popover":
        kt("beforetoggle", n), kt("toggle", n), Lo(n, "popover", f);
        break;
      case "xlinkActuate":
        Fi(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          f
        );
        break;
      case "xlinkArcrole":
        Fi(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          f
        );
        break;
      case "xlinkRole":
        Fi(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          f
        );
        break;
      case "xlinkShow":
        Fi(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          f
        );
        break;
      case "xlinkTitle":
        Fi(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          f
        );
        break;
      case "xlinkType":
        Fi(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          f
        );
        break;
      case "xmlBase":
        Fi(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          f
        );
        break;
      case "xmlLang":
        Fi(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          f
        );
        break;
      case "xmlSpace":
        Fi(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          f
        );
        break;
      case "is":
        Lo(n, "is", f);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = rw.get(a) || a, Lo(n, a, f));
    }
  }
  function ch(n, r, a, f, d, g) {
    switch (a) {
      case "style":
        dp(n, f, g);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f))
            throw Error(i(61));
          if (a = f.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            n.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof f == "string" ? jl(n, f) : (typeof f == "number" || typeof f == "bigint") && jl(n, "" + f);
        break;
      case "onScroll":
        f != null && kt("scroll", n);
        break;
      case "onScrollEnd":
        f != null && kt("scrollend", n);
        break;
      case "onClick":
        f != null && (n.onclick = Ea);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ip.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (d = a.endsWith("Capture"), r = a.slice(2, d ? a.length - 7 : void 0), g = n[Le] || null, g = g != null ? g[a] : null, typeof g == "function" && n.removeEventListener(r, g, d), typeof f == "function")) {
              typeof g != "function" && g !== null && (a in n ? n[a] = null : n.hasAttribute(a) && n.removeAttribute(a)), n.addEventListener(r, f, d);
              break t;
            }
            a in n ? n[a] = f : f === !0 ? n.setAttribute(a, "") : Lo(n, a, f);
          }
    }
  }
  function ye(n, r, a) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        kt("error", n), kt("load", n);
        var f = !1, d = !1, g;
        for (g in a)
          if (a.hasOwnProperty(g)) {
            var b = a[g];
            if (b != null)
              switch (g) {
                case "src":
                  f = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, r));
                default:
                  Ht(n, r, g, b, a, null);
              }
          }
        d && Ht(n, r, "srcSet", a.srcSet, a, null), f && Ht(n, r, "src", a.src, a, null);
        return;
      case "input":
        kt("invalid", n);
        var x = g = b = d = null, C = null, R = null;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var U = a[f];
            if (U != null)
              switch (f) {
                case "name":
                  d = U;
                  break;
                case "type":
                  b = U;
                  break;
                case "checked":
                  C = U;
                  break;
                case "defaultChecked":
                  R = U;
                  break;
                case "value":
                  g = U;
                  break;
                case "defaultValue":
                  x = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(i(137, r));
                  break;
                default:
                  Ht(n, r, f, U, a, null);
              }
          }
        up(
          n,
          g,
          x,
          C,
          R,
          b,
          d,
          !1
        ), Ho(n);
        return;
      case "select":
        kt("invalid", n), f = b = g = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (x = a[d], x != null))
            switch (d) {
              case "value":
                g = x;
                break;
              case "defaultValue":
                b = x;
                break;
              case "multiple":
                f = x;
              default:
                Ht(n, r, d, x, a, null);
            }
        r = g, a = b, n.multiple = !!f, r != null ? ql(n, !!f, r, !1) : a != null && ql(n, !!f, a, !0);
        return;
      case "textarea":
        kt("invalid", n), g = d = f = null;
        for (b in a)
          if (a.hasOwnProperty(b) && (x = a[b], x != null))
            switch (b) {
              case "value":
                f = x;
                break;
              case "defaultValue":
                d = x;
                break;
              case "children":
                g = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(i(91));
                break;
              default:
                Ht(n, r, b, x, a, null);
            }
        fp(n, f, d, g), Ho(n);
        return;
      case "option":
        for (C in a)
          a.hasOwnProperty(C) && (f = a[C], f != null) && (C === "selected" ? n.selected = f && typeof f != "function" && typeof f != "symbol" : Ht(n, r, C, f, a, null));
        return;
      case "dialog":
        kt("beforetoggle", n), kt("toggle", n), kt("cancel", n), kt("close", n);
        break;
      case "iframe":
      case "object":
        kt("load", n);
        break;
      case "video":
      case "audio":
        for (f = 0; f < Or.length; f++)
          kt(Or[f], n);
        break;
      case "image":
        kt("error", n), kt("load", n);
        break;
      case "details":
        kt("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        kt("error", n), kt("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in a)
          if (a.hasOwnProperty(R) && (f = a[R], f != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, r));
              default:
                Ht(n, r, R, f, a, null);
            }
        return;
      default:
        if (kc(r)) {
          for (U in a)
            a.hasOwnProperty(U) && (f = a[U], f !== void 0 && ch(
              n,
              r,
              U,
              f,
              a,
              void 0
            ));
          return;
        }
    }
    for (x in a)
      a.hasOwnProperty(x) && (f = a[x], f != null && Ht(n, r, x, f, a, null));
  }
  function R2(n, r, a, f) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, g = null, b = null, x = null, C = null, R = null, U = null;
        for (N in a) {
          var G = a[N];
          if (a.hasOwnProperty(N) && G != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = G;
              default:
                f.hasOwnProperty(N) || Ht(n, r, N, null, f, G);
            }
        }
        for (var B in f) {
          var N = f[B];
          if (G = a[B], f.hasOwnProperty(B) && (N != null || G != null))
            switch (B) {
              case "type":
                g = N;
                break;
              case "name":
                d = N;
                break;
              case "checked":
                R = N;
                break;
              case "defaultChecked":
                U = N;
                break;
              case "value":
                b = N;
                break;
              case "defaultValue":
                x = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(i(137, r));
                break;
              default:
                N !== G && Ht(
                  n,
                  r,
                  B,
                  N,
                  f,
                  G
                );
            }
        }
        Ac(
          n,
          b,
          x,
          C,
          R,
          U,
          g,
          d
        );
        return;
      case "select":
        N = b = x = B = null;
        for (g in a)
          if (C = a[g], a.hasOwnProperty(g) && C != null)
            switch (g) {
              case "value":
                break;
              case "multiple":
                N = C;
              default:
                f.hasOwnProperty(g) || Ht(
                  n,
                  r,
                  g,
                  null,
                  f,
                  C
                );
            }
        for (d in f)
          if (g = f[d], C = a[d], f.hasOwnProperty(d) && (g != null || C != null))
            switch (d) {
              case "value":
                B = g;
                break;
              case "defaultValue":
                x = g;
                break;
              case "multiple":
                b = g;
              default:
                g !== C && Ht(
                  n,
                  r,
                  d,
                  g,
                  f,
                  C
                );
            }
        r = x, a = b, f = N, B != null ? ql(n, !!a, B, !1) : !!f != !!a && (r != null ? ql(n, !!a, r, !0) : ql(n, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        N = B = null;
        for (x in a)
          if (d = a[x], a.hasOwnProperty(x) && d != null && !f.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(n, r, x, null, f, d);
            }
        for (b in f)
          if (d = f[b], g = a[b], f.hasOwnProperty(b) && (d != null || g != null))
            switch (b) {
              case "value":
                B = d;
                break;
              case "defaultValue":
                N = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== g && Ht(n, r, b, d, f, g);
            }
        cp(n, B, N);
        return;
      case "option":
        for (var mt in a)
          B = a[mt], a.hasOwnProperty(mt) && B != null && !f.hasOwnProperty(mt) && (mt === "selected" ? n.selected = !1 : Ht(
            n,
            r,
            mt,
            null,
            f,
            B
          ));
        for (C in f)
          B = f[C], N = a[C], f.hasOwnProperty(C) && B !== N && (B != null || N != null) && (C === "selected" ? n.selected = B && typeof B != "function" && typeof B != "symbol" : Ht(
            n,
            r,
            C,
            B,
            f,
            N
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ct in a)
          B = a[ct], a.hasOwnProperty(ct) && B != null && !f.hasOwnProperty(ct) && Ht(n, r, ct, null, f, B);
        for (R in f)
          if (B = f[R], N = a[R], f.hasOwnProperty(R) && B !== N && (B != null || N != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(i(137, r));
                break;
              default:
                Ht(
                  n,
                  r,
                  R,
                  B,
                  f,
                  N
                );
            }
        return;
      default:
        if (kc(r)) {
          for (var _t in a)
            B = a[_t], a.hasOwnProperty(_t) && B !== void 0 && !f.hasOwnProperty(_t) && ch(
              n,
              r,
              _t,
              void 0,
              f,
              B
            );
          for (U in f)
            B = f[U], N = a[U], !f.hasOwnProperty(U) || B === N || B === void 0 && N === void 0 || ch(
              n,
              r,
              U,
              B,
              f,
              N
            );
          return;
        }
    }
    for (var D in a)
      B = a[D], a.hasOwnProperty(D) && B != null && !f.hasOwnProperty(D) && Ht(n, r, D, null, f, B);
    for (G in f)
      B = f[G], N = a[G], !f.hasOwnProperty(G) || B === N || B == null && N == null || Ht(n, r, G, B, f, N);
  }
  var fh = null, hh = null;
  function Ra(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function hy(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dy(n, r) {
    if (n === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && r === "foreignObject" ? 0 : n;
  }
  function dh(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.children == "bigint" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var mh = null;
  function B2() {
    var n = window.event;
    return n && n.type === "popstate" ? n === mh ? !1 : (mh = n, !0) : (mh = null, !1);
  }
  var my = typeof setTimeout == "function" ? setTimeout : void 0, N2 = typeof clearTimeout == "function" ? clearTimeout : void 0, py = typeof Promise == "function" ? Promise : void 0, L2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof py < "u" ? function(n) {
    return py.resolve(null).then(n).catch(z2);
  } : my;
  function z2(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function zn(n) {
    return n === "head";
  }
  function gy(n, r) {
    var a = r, f = 0, d = 0;
    do {
      var g = a.nextSibling;
      if (n.removeChild(a), g && g.nodeType === 8)
        if (a = g.data, a === "/$") {
          if (0 < f && 8 > f) {
            a = f;
            var b = n.ownerDocument;
            if (a & 1 && Er(b.documentElement), a & 2 && Er(b.body), a & 4)
              for (a = b.head, Er(a), b = a.firstChild; b; ) {
                var x = b.nextSibling, C = b.nodeName;
                b[Xs] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && b.rel.toLowerCase() === "stylesheet" || a.removeChild(b), b = x;
              }
          }
          if (d === 0) {
            n.removeChild(g), Ur(r);
            return;
          }
          d--;
        } else
          a === "$" || a === "$?" || a === "$!" ? d++ : f = a.charCodeAt(0) - 48;
      else f = 0;
      a = g;
    } while (a);
    Ur(r);
  }
  function ph(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var a = r;
      switch (r = r.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ph(a), bc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(a);
    }
  }
  function H2(n, r, a, f) {
    for (; n.nodeType === 1; ) {
      var d = a;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!f && (n.nodeName !== "INPUT" || n.type !== "hidden"))
          break;
      } else if (f) {
        if (!n[Xs])
          switch (r) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (g = n.getAttribute("rel"), g === "stylesheet" && n.hasAttribute("data-precedence"))
                break;
              if (g !== d.rel || n.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || n.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || n.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (g = n.getAttribute("src"), (g !== (d.src == null ? null : d.src) || n.getAttribute("type") !== (d.type == null ? null : d.type) || n.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && g && n.hasAttribute("async") && !n.hasAttribute("itemprop"))
                break;
              return n;
            default:
              return n;
          }
      } else if (r === "input" && n.type === "hidden") {
        var g = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && n.getAttribute("name") === g)
          return n;
      } else return n;
      if (n = wi(n.nextSibling), n === null) break;
    }
    return null;
  }
  function _2(n, r, a) {
    if (r === "") return null;
    for (; n.nodeType !== 3; )
      if ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !a || (n = wi(n.nextSibling), n === null)) return null;
    return n;
  }
  function gh(n) {
    return n.data === "$!" || n.data === "$?" && n.ownerDocument.readyState === "complete";
  }
  function U2(n, r) {
    var a = n.ownerDocument;
    if (n.data !== "$?" || a.readyState === "complete")
      r();
    else {
      var f = function() {
        r(), a.removeEventListener("DOMContentLoaded", f);
      };
      a.addEventListener("DOMContentLoaded", f), n._reactRetry = f;
    }
  }
  function wi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F")
          break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  var yh = null;
  function yy(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var a = n.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (r === 0) return n;
          r--;
        } else a === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function vy(n, r, a) {
    switch (r = Ra(a), n) {
      case "html":
        if (n = r.documentElement, !n) throw Error(i(452));
        return n;
      case "head":
        if (n = r.head, !n) throw Error(i(453));
        return n;
      case "body":
        if (n = r.body, !n) throw Error(i(454));
        return n;
      default:
        throw Error(i(451));
    }
  }
  function Er(n) {
    for (var r = n.attributes; r.length; )
      n.removeAttributeNode(r[0]);
    bc(n);
  }
  var fi = /* @__PURE__ */ new Map(), by = /* @__PURE__ */ new Set();
  function Ba(n) {
    return typeof n.getRootNode == "function" ? n.getRootNode() : n.nodeType === 9 ? n : n.ownerDocument;
  }
  var fn = W.d;
  W.d = {
    f: V2,
    r: q2,
    D: j2,
    C: Y2,
    L: G2,
    m: K2,
    X: W2,
    S: X2,
    M: Q2
  };
  function V2() {
    var n = fn.f(), r = Aa();
    return n || r;
  }
  function q2(n) {
    var r = Hl(n);
    r !== null && r.tag === 5 && r.type === "form" ? Vg(r) : fn.r(n);
  }
  var gs = typeof document > "u" ? null : document;
  function Sy(n, r, a) {
    var f = gs;
    if (f && typeof r == "string" && r) {
      var d = li(r);
      d = 'link[rel="' + n + '"][href="' + d + '"]', typeof a == "string" && (d += '[crossorigin="' + a + '"]'), by.has(d) || (by.add(d), n = { rel: n, crossOrigin: a, href: r }, f.querySelector(d) === null && (r = f.createElement("link"), ye(r, "link", n), ue(r), f.head.appendChild(r)));
    }
  }
  function j2(n) {
    fn.D(n), Sy("dns-prefetch", n, null);
  }
  function Y2(n, r) {
    fn.C(n, r), Sy("preconnect", n, r);
  }
  function G2(n, r, a) {
    fn.L(n, r, a);
    var f = gs;
    if (f && n && r) {
      var d = 'link[rel="preload"][as="' + li(r) + '"]';
      r === "image" && a && a.imageSrcSet ? (d += '[imagesrcset="' + li(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (d += '[imagesizes="' + li(
        a.imageSizes
      ) + '"]')) : d += '[href="' + li(n) + '"]';
      var g = d;
      switch (r) {
        case "style":
          g = ys(n);
          break;
        case "script":
          g = vs(n);
      }
      fi.has(g) || (n = p(
        {
          rel: "preload",
          href: r === "image" && a && a.imageSrcSet ? void 0 : n,
          as: r
        },
        a
      ), fi.set(g, n), f.querySelector(d) !== null || r === "style" && f.querySelector(Rr(g)) || r === "script" && f.querySelector(Br(g)) || (r = f.createElement("link"), ye(r, "link", n), ue(r), f.head.appendChild(r)));
    }
  }
  function K2(n, r) {
    fn.m(n, r);
    var a = gs;
    if (a && n) {
      var f = r && typeof r.as == "string" ? r.as : "script", d = 'link[rel="modulepreload"][as="' + li(f) + '"][href="' + li(n) + '"]', g = d;
      switch (f) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = vs(n);
      }
      if (!fi.has(g) && (n = p({ rel: "modulepreload", href: n }, r), fi.set(g, n), a.querySelector(d) === null)) {
        switch (f) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Br(g)))
              return;
        }
        f = a.createElement("link"), ye(f, "link", n), ue(f), a.head.appendChild(f);
      }
    }
  }
  function X2(n, r, a) {
    fn.S(n, r, a);
    var f = gs;
    if (f && n) {
      var d = _l(f).hoistableStyles, g = ys(n);
      r = r || "default";
      var b = d.get(g);
      if (!b) {
        var x = { loading: 0, preload: null };
        if (b = f.querySelector(
          Rr(g)
        ))
          x.loading = 5;
        else {
          n = p(
            { rel: "stylesheet", href: n, "data-precedence": r },
            a
          ), (a = fi.get(g)) && vh(n, a);
          var C = b = f.createElement("link");
          ue(C), ye(C, "link", n), C._p = new Promise(function(R, U) {
            C.onload = R, C.onerror = U;
          }), C.addEventListener("load", function() {
            x.loading |= 1;
          }), C.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, Na(b, r, f);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: x
        }, d.set(g, b);
      }
    }
  }
  function W2(n, r) {
    fn.X(n, r);
    var a = gs;
    if (a && n) {
      var f = _l(a).hoistableScripts, d = vs(n), g = f.get(d);
      g || (g = a.querySelector(Br(d)), g || (n = p({ src: n, async: !0 }, r), (r = fi.get(d)) && bh(n, r), g = a.createElement("script"), ue(g), ye(g, "link", n), a.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, f.set(d, g));
    }
  }
  function Q2(n, r) {
    fn.M(n, r);
    var a = gs;
    if (a && n) {
      var f = _l(a).hoistableScripts, d = vs(n), g = f.get(d);
      g || (g = a.querySelector(Br(d)), g || (n = p({ src: n, async: !0, type: "module" }, r), (r = fi.get(d)) && bh(n, r), g = a.createElement("script"), ue(g), ye(g, "link", n), a.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, f.set(d, g));
    }
  }
  function xy(n, r, a, f) {
    var d = (d = dt.current) ? Ba(d) : null;
    if (!d) throw Error(i(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (r = ys(a.href), a = _l(
          d
        ).hoistableStyles, f = a.get(r), f || (f = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(r, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          n = ys(a.href);
          var g = _l(
            d
          ).hoistableStyles, b = g.get(n);
          if (b || (d = d.ownerDocument || d, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, g.set(n, b), (g = d.querySelector(
            Rr(n)
          )) && !g._p && (b.instance = g, b.state.loading = 5), fi.has(n) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, fi.set(n, a), g || Z2(
            d,
            n,
            a,
            b.state
          ))), r && f === null)
            throw Error(i(528, ""));
          return b;
        }
        if (r && f !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return r = a.async, a = a.src, typeof a == "string" && r && typeof r != "function" && typeof r != "symbol" ? (r = vs(a), a = _l(
          d
        ).hoistableScripts, f = a.get(r), f || (f = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(r, f)), f) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, n));
    }
  }
  function ys(n) {
    return 'href="' + li(n) + '"';
  }
  function Rr(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function wy(n) {
    return p({}, n, {
      "data-precedence": n.precedence,
      precedence: null
    });
  }
  function Z2(n, r, a, f) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]") ? f.loading = 1 : (r = n.createElement("link"), f.preload = r, r.addEventListener("load", function() {
      return f.loading |= 1;
    }), r.addEventListener("error", function() {
      return f.loading |= 2;
    }), ye(r, "link", a), ue(r), n.head.appendChild(r));
  }
  function vs(n) {
    return '[src="' + li(n) + '"]';
  }
  function Br(n) {
    return "script[async]" + n;
  }
  function Ay(n, r, a) {
    if (r.count++, r.instance === null)
      switch (r.type) {
        case "style":
          var f = n.querySelector(
            'style[data-href~="' + li(a.href) + '"]'
          );
          if (f)
            return r.instance = f, ue(f), f;
          var d = p({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return f = (n.ownerDocument || n).createElement(
            "style"
          ), ue(f), ye(f, "style", d), Na(f, a.precedence, n), r.instance = f;
        case "stylesheet":
          d = ys(a.href);
          var g = n.querySelector(
            Rr(d)
          );
          if (g)
            return r.state.loading |= 4, r.instance = g, ue(g), g;
          f = wy(a), (d = fi.get(d)) && vh(f, d), g = (n.ownerDocument || n).createElement("link"), ue(g);
          var b = g;
          return b._p = new Promise(function(x, C) {
            b.onload = x, b.onerror = C;
          }), ye(g, "link", f), r.state.loading |= 4, Na(g, a.precedence, n), r.instance = g;
        case "script":
          return g = vs(a.src), (d = n.querySelector(
            Br(g)
          )) ? (r.instance = d, ue(d), d) : (f = a, (d = fi.get(g)) && (f = p({}, a), bh(f, d)), n = n.ownerDocument || n, d = n.createElement("script"), ue(d), ye(d, "link", f), n.head.appendChild(d), r.instance = d);
        case "void":
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === "stylesheet" && (r.state.loading & 4) === 0 && (f = r.instance, r.state.loading |= 4, Na(f, a.precedence, n));
    return r.instance;
  }
  function Na(n, r, a) {
    for (var f = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = f.length ? f[f.length - 1] : null, g = d, b = 0; b < f.length; b++) {
      var x = f[b];
      if (x.dataset.precedence === r) g = x;
      else if (g !== d) break;
    }
    g ? g.parentNode.insertBefore(n, g.nextSibling) : (r = a.nodeType === 9 ? a.head : a, r.insertBefore(n, r.firstChild));
  }
  function vh(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy), n.title == null && (n.title = r.title);
  }
  function bh(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy), n.integrity == null && (n.integrity = r.integrity);
  }
  var La = null;
  function Cy(n, r, a) {
    if (La === null) {
      var f = /* @__PURE__ */ new Map(), d = La = /* @__PURE__ */ new Map();
      d.set(a, f);
    } else
      d = La, f = d.get(a), f || (f = /* @__PURE__ */ new Map(), d.set(a, f));
    if (f.has(n)) return f;
    for (f.set(n, null), a = a.getElementsByTagName(n), d = 0; d < a.length; d++) {
      var g = a[d];
      if (!(g[Xs] || g[Ae] || n === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = g.getAttribute(r) || "";
        b = n + b;
        var x = f.get(b);
        x ? x.push(g) : f.set(b, [g]);
      }
    }
    return f;
  }
  function ky(n, r, a) {
    n = n.ownerDocument || n, n.head.insertBefore(
      a,
      r === "title" ? n.querySelector("head > title") : null
    );
  }
  function J2(n, r, a) {
    if (a === 1 || r.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof r.precedence != "string" || typeof r.href != "string" || r.href === "")
          break;
        return !0;
      case "link":
        if (typeof r.rel != "string" || typeof r.href != "string" || r.href === "" || r.onLoad || r.onError)
          break;
        return r.rel === "stylesheet" ? (n = r.disabled, typeof r.precedence == "string" && n == null) : !0;
      case "script":
        if (r.async && typeof r.async != "function" && typeof r.async != "symbol" && !r.onLoad && !r.onError && r.src && typeof r.src == "string")
          return !0;
    }
    return !1;
  }
  function My(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var Nr = null;
  function F2() {
  }
  function P2(n, r, a) {
    if (Nr === null) throw Error(i(475));
    var f = Nr;
    if (r.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var d = ys(a.href), g = n.querySelector(
          Rr(d)
        );
        if (g) {
          n = g._p, n !== null && typeof n == "object" && typeof n.then == "function" && (f.count++, f = za.bind(f), n.then(f, f)), r.state.loading |= 4, r.instance = g, ue(g);
          return;
        }
        g = n.ownerDocument || n, a = wy(a), (d = fi.get(d)) && vh(a, d), g = g.createElement("link"), ue(g);
        var b = g;
        b._p = new Promise(function(x, C) {
          b.onload = x, b.onerror = C;
        }), ye(g, "link", a), r.instance = g;
      }
      f.stylesheets === null && (f.stylesheets = /* @__PURE__ */ new Map()), f.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (f.count++, r = za.bind(f), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  function I2() {
    if (Nr === null) throw Error(i(475));
    var n = Nr;
    return n.stylesheets && n.count === 0 && Sh(n, n.stylesheets), 0 < n.count ? function(r) {
      var a = setTimeout(function() {
        if (n.stylesheets && Sh(n, n.stylesheets), n.unsuspend) {
          var f = n.unsuspend;
          n.unsuspend = null, f();
        }
      }, 6e4);
      return n.unsuspend = r, function() {
        n.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function za() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Sh(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        this.unsuspend = null, n();
      }
    }
  }
  var Ha = null;
  function Sh(n, r) {
    n.stylesheets = null, n.unsuspend !== null && (n.count++, Ha = /* @__PURE__ */ new Map(), r.forEach($2, n), Ha = null, za.call(n));
  }
  function $2(n, r) {
    if (!(r.state.loading & 4)) {
      var a = Ha.get(n);
      if (a) var f = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ha.set(n, a);
        for (var d = n.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), g = 0; g < d.length; g++) {
          var b = d[g];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), f = b);
        }
        f && a.set(null, f);
      }
      d = r.instance, b = d.getAttribute("data-precedence"), g = a.get(b) || f, g === f && a.set(null, d), a.set(b, d), this.count++, f = za.bind(this), d.addEventListener("load", f), d.addEventListener("error", f), g ? g.parentNode.insertBefore(d, g.nextSibling) : (n = n.nodeType === 9 ? n.head : n, n.insertBefore(d, n.firstChild)), r.state.loading |= 4;
    }
  }
  var Lr = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: it,
    _currentValue2: it,
    _threadCount: 0
  };
  function tA(n, r, a, f, d, g, b, x) {
    this.tag = 1, this.containerInfo = n, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pc(0), this.hiddenUpdates = pc(null), this.identifierPrefix = f, this.onUncaughtError = d, this.onCaughtError = g, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ty(n, r, a, f, d, g, b, x, C, R, U, G) {
    return n = new tA(
      n,
      r,
      a,
      b,
      x,
      C,
      R,
      G
    ), r = 1, g === !0 && (r |= 24), g = Ze(3, null, null, r), n.current = g, g.stateNode = n, r = tf(), r.refCount++, n.pooledCache = r, r.refCount++, g.memoizedState = {
      element: f,
      isDehydrated: a,
      cache: r
    }, sf(g), n;
  }
  function Oy(n) {
    return n ? (n = Jl, n) : Jl;
  }
  function Dy(n, r, a, f, d, g) {
    d = Oy(d), f.context === null ? f.context = d : f.pendingContext = d, f = wn(r), f.payload = { element: a }, g = g === void 0 ? null : g, g !== null && (f.callback = g), a = An(n, f, r), a !== null && ($e(a, n, r), cr(a, n, r));
  }
  function Ey(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var a = n.retryLane;
      n.retryLane = a !== 0 && a < r ? a : r;
    }
  }
  function xh(n, r) {
    Ey(n, r), (n = n.alternate) && Ey(n, r);
  }
  function Ry(n) {
    if (n.tag === 13) {
      var r = Zl(n, 67108864);
      r !== null && $e(r, n, 67108864), xh(n, 67108864);
    }
  }
  var _a = !0;
  function eA(n, r, a, f) {
    var d = L.T;
    L.T = null;
    var g = W.p;
    try {
      W.p = 2, wh(n, r, a, f);
    } finally {
      W.p = g, L.T = d;
    }
  }
  function iA(n, r, a, f) {
    var d = L.T;
    L.T = null;
    var g = W.p;
    try {
      W.p = 8, wh(n, r, a, f);
    } finally {
      W.p = g, L.T = d;
    }
  }
  function wh(n, r, a, f) {
    if (_a) {
      var d = Ah(f);
      if (d === null)
        uh(
          n,
          r,
          f,
          Ua,
          a
        ), Ny(n, f);
      else if (lA(
        d,
        n,
        r,
        a,
        f
      ))
        f.stopPropagation();
      else if (Ny(n, f), r & 4 && -1 < nA.indexOf(n)) {
        for (; d !== null; ) {
          var g = Hl(d);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (g = g.stateNode, g.current.memoizedState.isDehydrated) {
                  var b = il(g.pendingLanes);
                  if (b !== 0) {
                    var x = g;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; b; ) {
                      var C = 1 << 31 - We(b);
                      x.entanglements[1] |= C, b &= ~C;
                    }
                    Ni(g), (Nt & 6) === 0 && (xa = Oi() + 500, Tr(0));
                  }
                }
                break;
              case 13:
                x = Zl(g, 2), x !== null && $e(x, g, 2), Aa(), xh(g, 2);
            }
          if (g = Ah(f), g === null && uh(
            n,
            r,
            f,
            Ua,
            a
          ), g === d) break;
          d = g;
        }
        d !== null && f.stopPropagation();
      } else
        uh(
          n,
          r,
          f,
          null,
          a
        );
    }
  }
  function Ah(n) {
    return n = Tc(n), Ch(n);
  }
  var Ua = null;
  function Ch(n) {
    if (Ua = null, n = zl(n), n !== null) {
      var r = o(n);
      if (r === null) n = null;
      else {
        var a = r.tag;
        if (a === 13) {
          if (n = u(r), n !== null) return n;
          n = null;
        } else if (a === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return Ua = n, null;
  }
  function By(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Yx()) {
          case Wm:
            return 2;
          case Qm:
            return 8;
          case Eo:
          case Gx:
            return 32;
          case Zm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kh = !1, Hn = null, _n = null, Un = null, zr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Vn = [], nA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ny(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        _n = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        zr.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hr.delete(r.pointerId);
    }
  }
  function _r(n, r, a, f, d, g) {
    return n === null || n.nativeEvent !== g ? (n = {
      blockedOn: r,
      domEventName: a,
      eventSystemFlags: f,
      nativeEvent: g,
      targetContainers: [d]
    }, r !== null && (r = Hl(r), r !== null && Ry(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function lA(n, r, a, f, d) {
    switch (r) {
      case "focusin":
        return Hn = _r(
          Hn,
          n,
          r,
          a,
          f,
          d
        ), !0;
      case "dragenter":
        return _n = _r(
          _n,
          n,
          r,
          a,
          f,
          d
        ), !0;
      case "mouseover":
        return Un = _r(
          Un,
          n,
          r,
          a,
          f,
          d
        ), !0;
      case "pointerover":
        var g = d.pointerId;
        return zr.set(
          g,
          _r(
            zr.get(g) || null,
            n,
            r,
            a,
            f,
            d
          )
        ), !0;
      case "gotpointercapture":
        return g = d.pointerId, Hr.set(
          g,
          _r(
            Hr.get(g) || null,
            n,
            r,
            a,
            f,
            d
          )
        ), !0;
    }
    return !1;
  }
  function Ly(n) {
    var r = zl(n.target);
    if (r !== null) {
      var a = o(r);
      if (a !== null) {
        if (r = a.tag, r === 13) {
          if (r = u(a), r !== null) {
            n.blockedOn = r, Px(n.priority, function() {
              if (a.tag === 13) {
                var f = Ie();
                f = gc(f);
                var d = Zl(a, f);
                d !== null && $e(d, a, f), xh(a, f);
              }
            });
            return;
          }
        } else if (r === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Va(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var a = Ah(n.nativeEvent);
      if (a === null) {
        a = n.nativeEvent;
        var f = new a.constructor(
          a.type,
          a
        );
        Mc = f, a.target.dispatchEvent(f), Mc = null;
      } else
        return r = Hl(a), r !== null && Ry(r), n.blockedOn = a, !1;
      r.shift();
    }
    return !0;
  }
  function zy(n, r, a) {
    Va(n) && a.delete(r);
  }
  function sA() {
    kh = !1, Hn !== null && Va(Hn) && (Hn = null), _n !== null && Va(_n) && (_n = null), Un !== null && Va(Un) && (Un = null), zr.forEach(zy), Hr.forEach(zy);
  }
  function qa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, kh || (kh = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      sA
    )));
  }
  var ja = null;
  function Hy(n) {
    ja !== n && (ja = n, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        ja === n && (ja = null);
        for (var r = 0; r < n.length; r += 3) {
          var a = n[r], f = n[r + 1], d = n[r + 2];
          if (typeof f != "function") {
            if (Ch(f || a) === null)
              continue;
            break;
          }
          var g = Hl(a);
          g !== null && (n.splice(r, 3), r -= 3, Cf(
            g,
            {
              pending: !0,
              data: d,
              method: a.method,
              action: f
            },
            f,
            d
          ));
        }
      }
    ));
  }
  function Ur(n) {
    function r(C) {
      return qa(C, n);
    }
    Hn !== null && qa(Hn, n), _n !== null && qa(_n, n), Un !== null && qa(Un, n), zr.forEach(r), Hr.forEach(r);
    for (var a = 0; a < Vn.length; a++) {
      var f = Vn[a];
      f.blockedOn === n && (f.blockedOn = null);
    }
    for (; 0 < Vn.length && (a = Vn[0], a.blockedOn === null); )
      Ly(a), a.blockedOn === null && Vn.shift();
    if (a = (n.ownerDocument || n).$$reactFormReplay, a != null)
      for (f = 0; f < a.length; f += 3) {
        var d = a[f], g = a[f + 1], b = d[Le] || null;
        if (typeof g == "function")
          b || Hy(a);
        else if (b) {
          var x = null;
          if (g && g.hasAttribute("formAction")) {
            if (d = g, b = g[Le] || null)
              x = b.formAction;
            else if (Ch(d) !== null) continue;
          } else x = b.action;
          typeof x == "function" ? a[f + 1] = x : (a.splice(f, 3), f -= 3), Hy(a);
        }
      }
  }
  function Mh(n) {
    this._internalRoot = n;
  }
  Ya.prototype.render = Mh.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(i(409));
    var a = r.current, f = Ie();
    Dy(a, f, n, r, null, null);
  }, Ya.prototype.unmount = Mh.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Dy(n.current, 2, null, n, null, null), Aa(), r[Ll] = null;
    }
  };
  function Ya(n) {
    this._internalRoot = n;
  }
  Ya.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $m();
      n = { blockedOn: null, target: n, priority: r };
      for (var a = 0; a < Vn.length && r !== 0 && r < Vn[a].priority; a++) ;
      Vn.splice(a, 0, n), a === 0 && Ly(n);
    }
  };
  var _y = t.version;
  if (_y !== "19.1.1")
    throw Error(
      i(
        527,
        _y,
        "19.1.1"
      )
    );
  W.findDOMNode = function(n) {
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(i(188)) : (n = Object.keys(n).join(","), Error(i(268, n)));
    return n = h(r), n = n !== null ? m(n) : null, n = n === null ? null : n.stateNode, n;
  };
  var rA = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ga.isDisabled && Ga.supportsFiber)
      try {
        Ys = Ga.inject(
          rA
        ), Xe = Ga;
      } catch {
      }
  }
  return qr.createRoot = function(n, r) {
    if (!s(n)) throw Error(i(299));
    var a = !1, f = "", d = $g, g = t0, b = e0, x = null;
    return r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (g = r.onCaughtError), r.onRecoverableError !== void 0 && (b = r.onRecoverableError), r.unstable_transitionCallbacks !== void 0 && (x = r.unstable_transitionCallbacks)), r = Ty(
      n,
      1,
      !1,
      null,
      null,
      a,
      f,
      d,
      g,
      b,
      x,
      null
    ), n[Ll] = r.current, ah(n), new Mh(r);
  }, qr.hydrateRoot = function(n, r, a) {
    if (!s(n)) throw Error(i(299));
    var f = !1, d = "", g = $g, b = t0, x = e0, C = null, R = null;
    return a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (d = a.identifierPrefix), a.onUncaughtError !== void 0 && (g = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (x = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (C = a.unstable_transitionCallbacks), a.formState !== void 0 && (R = a.formState)), r = Ty(
      n,
      1,
      !0,
      r,
      a ?? null,
      f,
      d,
      g,
      b,
      x,
      C,
      R
    ), r.context = Oy(null), a = r.current, f = Ie(), f = gc(f), d = wn(f), d.callback = null, An(a, d, f), a = f, r.current.lanes = a, Ks(r, a), Ni(r), n[Ll] = r.current, ah(n), new Ya(r);
  }, qr.version = "19.1.1", qr;
}
var Qy;
function gA() {
  if (Qy) return Oh.exports;
  Qy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), Oh.exports = pA(), Oh.exports;
}
var yA = gA();
function fd() {
  return fd = Object.assign ? Object.assign.bind() : function(l) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var i in e) ({}).hasOwnProperty.call(e, i) && (l[i] = e[i]);
    }
    return l;
  }, fd.apply(null, arguments);
}
function vA(l, t) {
  if (l == null) return {};
  var e = {};
  for (var i in l) if ({}.hasOwnProperty.call(l, i)) {
    if (t.indexOf(i) !== -1) continue;
    e[i] = l[i];
  }
  return e;
}
var Pt = om();
let hd = [], Gv = [];
(() => {
  let l = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
  for (let t = 0, e = 0; t < l.length; t++)
    (t % 2 ? Gv : hd).push(e = e + l[t]);
})();
function bA(l) {
  if (l < 768) return !1;
  for (let t = 0, e = hd.length; ; ) {
    let i = t + e >> 1;
    if (l < hd[i]) e = i;
    else if (l >= Gv[i]) t = i + 1;
    else return !0;
    if (t == e) return !1;
  }
}
function Zy(l) {
  return l >= 127462 && l <= 127487;
}
const Jy = 8205;
function SA(l, t, e = !0, i = !0) {
  return (e ? Kv : xA)(l, t, i);
}
function Kv(l, t, e) {
  if (t == l.length) return t;
  t && Xv(l.charCodeAt(t)) && Wv(l.charCodeAt(t - 1)) && t--;
  let i = Nh(l, t);
  for (t += Fy(i); t < l.length; ) {
    let s = Nh(l, t);
    if (i == Jy || s == Jy || e && bA(s))
      t += Fy(s), i = s;
    else if (Zy(s)) {
      let o = 0, u = t - 2;
      for (; u >= 0 && Zy(Nh(l, u)); )
        o++, u -= 2;
      if (o % 2 == 0) break;
      t += 2;
    } else
      break;
  }
  return t;
}
function xA(l, t, e) {
  for (; t > 0; ) {
    let i = Kv(l, t - 2, e);
    if (i < t) return i;
    t--;
  }
  return 0;
}
function Nh(l, t) {
  let e = l.charCodeAt(t);
  if (!Wv(e) || t + 1 == l.length) return e;
  let i = l.charCodeAt(t + 1);
  return Xv(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function Xv(l) {
  return l >= 56320 && l < 57344;
}
function Wv(l) {
  return l >= 55296 && l < 56320;
}
function Fy(l) {
  return l < 65536 ? 1 : 2;
}
class Et {
  /**
  Get the line description around the given position.
  */
  lineAt(t) {
    if (t < 0 || t > this.length)
      throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(t) {
    if (t < 1 || t > this.lines)
      throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(t, e, i) {
    [t, e] = Rs(this, t, e);
    let s = [];
    return this.decompose(
      0,
      t,
      s,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      e,
      this.length,
      s,
      1
      /* Open.From */
    ), Ui.from(s, this.length - (e - t) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(t, e = this.length) {
    [t, e] = Rs(this, t, e);
    let i = [];
    return this.decompose(t, e, i, 0), Ui.from(i, e - t);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(t) {
    if (t == this)
      return !0;
    if (t.length != this.length || t.lines != this.lines)
      return !1;
    let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), s = new Fr(this), o = new Fr(t);
    for (let u = e, c = e; ; ) {
      if (s.next(u), o.next(u), u = 0, s.lineBreak != o.lineBreak || s.done != o.done || s.value != o.value)
        return !1;
      if (c += s.value.length, s.done || c >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(t = 1) {
    return new Fr(this, t);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(t, e = this.length) {
    return new Qv(this, t, e);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(t, e) {
    let i;
    if (t == null)
      i = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let s = this.line(t).from;
      i = this.iterRange(s, Math.max(s, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new Zv(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(t) {
    if (t.length == 0)
      throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? Et.empty : t.length <= 32 ? new ee(t) : Ui.from(ee.split(t, []));
  }
}
class ee extends Et {
  constructor(t, e = wA(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, i, s) {
    for (let o = 0; ; o++) {
      let u = this.text[o], c = s + u.length;
      if ((e ? i : c) >= t)
        return new AA(s, c, i, u);
      s = c + 1, i++;
    }
  }
  decompose(t, e, i, s) {
    let o = t <= 0 && e >= this.length ? this : new ee(Py(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (s & 1) {
      let u = i.pop(), c = mu(o.text, u.text.slice(), 0, o.length);
      if (c.length <= 32)
        i.push(new ee(c, u.length + o.length));
      else {
        let h = c.length >> 1;
        i.push(new ee(c.slice(0, h)), new ee(c.slice(h)));
      }
    } else
      i.push(o);
  }
  replace(t, e, i) {
    if (!(i instanceof ee))
      return super.replace(t, e, i);
    [t, e] = Rs(this, t, e);
    let s = mu(this.text, mu(i.text, Py(this.text, 0, t)), e), o = this.length + i.length - (e - t);
    return s.length <= 32 ? new ee(s, o) : Ui.from(ee.split(s, []), o);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Rs(this, t, e);
    let s = "";
    for (let o = 0, u = 0; o <= e && u < this.text.length; u++) {
      let c = this.text[u], h = o + c.length;
      o > t && u && (s += i), t < h && e > o && (s += c.slice(Math.max(0, t - o), e - o)), o = h + 1;
    }
    return s;
  }
  flatten(t) {
    for (let e of this.text)
      t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let i = [], s = -1;
    for (let o of t)
      i.push(o), s += o.length + 1, i.length == 32 && (e.push(new ee(i, s)), i = [], s = -1);
    return s > -1 && e.push(new ee(i, s)), e;
  }
}
class Ui extends Et {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let i of t)
      this.lines += i.lines;
  }
  lineInner(t, e, i, s) {
    for (let o = 0; ; o++) {
      let u = this.children[o], c = s + u.length, h = i + u.lines - 1;
      if ((e ? h : c) >= t)
        return u.lineInner(t, e, i, s);
      s = c + 1, i = h + 1;
    }
  }
  decompose(t, e, i, s) {
    for (let o = 0, u = 0; u <= e && o < this.children.length; o++) {
      let c = this.children[o], h = u + c.length;
      if (t <= h && e >= u) {
        let m = s & ((u <= t ? 1 : 0) | (h >= e ? 2 : 0));
        u >= t && h <= e && !m ? i.push(c) : c.decompose(t - u, e - u, i, m);
      }
      u = h + 1;
    }
  }
  replace(t, e, i) {
    if ([t, e] = Rs(this, t, e), i.lines < this.lines)
      for (let s = 0, o = 0; s < this.children.length; s++) {
        let u = this.children[s], c = o + u.length;
        if (t >= o && e <= c) {
          let h = u.replace(t - o, e - o, i), m = this.lines - u.lines + h.lines;
          if (h.lines < m >> 4 && h.lines > m >> 6) {
            let p = this.children.slice();
            return p[s] = h, new Ui(p, this.length - (e - t) + i.length);
          }
          return super.replace(o, c, h);
        }
        o = c + 1;
      }
    return super.replace(t, e, i);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Rs(this, t, e);
    let s = "";
    for (let o = 0, u = 0; o < this.children.length && u <= e; o++) {
      let c = this.children[o], h = u + c.length;
      u > t && o && (s += i), t < h && e > u && (s += c.sliceString(t - u, e - u, i)), u = h + 1;
    }
    return s;
  }
  flatten(t) {
    for (let e of this.children)
      e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof Ui))
      return 0;
    let i = 0, [s, o, u, c] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; s += e, o += e) {
      if (s == u || o == c)
        return i;
      let h = this.children[s], m = t.children[o];
      if (h != m)
        return i + h.scanIdentical(m, e);
      i += h.length + 1;
    }
  }
  static from(t, e = t.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let S of t)
      i += S.lines;
    if (i < 32) {
      let S = [];
      for (let w of t)
        w.flatten(S);
      return new ee(S, e);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), o = s << 1, u = s >> 1, c = [], h = 0, m = -1, p = [];
    function y(S) {
      let w;
      if (S.lines > o && S instanceof Ui)
        for (let A of S.children)
          y(A);
      else S.lines > u && (h > u || !h) ? (v(), c.push(S)) : S instanceof ee && h && (w = p[p.length - 1]) instanceof ee && S.lines + w.lines <= 32 ? (h += S.lines, m += S.length + 1, p[p.length - 1] = new ee(w.text.concat(S.text), w.length + 1 + S.length)) : (h + S.lines > s && v(), h += S.lines, m += S.length + 1, p.push(S));
    }
    function v() {
      h != 0 && (c.push(p.length == 1 ? p[0] : Ui.from(p, m)), m = -1, h = p.length = 0);
    }
    for (let S of t)
      y(S);
    return v(), c.length == 1 ? c[0] : new Ui(c, e);
  }
}
Et.empty = /* @__PURE__ */ new ee([""], 0);
function wA(l) {
  let t = -1;
  for (let e of l)
    t += e.length + 1;
  return t;
}
function mu(l, t, e = 0, i = 1e9) {
  for (let s = 0, o = 0, u = !0; o < l.length && s <= i; o++) {
    let c = l[o], h = s + c.length;
    h >= e && (h > i && (c = c.slice(0, i - s)), s < e && (c = c.slice(e - s)), u ? (t[t.length - 1] += c, u = !1) : t.push(c)), s = h + 1;
  }
  return t;
}
function Py(l, t, e) {
  return mu(l, [""], t, e);
}
class Fr {
  constructor(t, e = 1) {
    this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof ee ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], o = this.offsets[i], u = o >> 1, c = s instanceof ee ? s.text.length : s.children.length;
      if (u == (e > 0 ? c : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((o & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[i] += e, t == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        t--;
      } else if (s instanceof ee) {
        let h = s.text[u + (e < 0 ? -1 : 0)];
        if (this.offsets[i] += e, h.length > Math.max(0, t))
          return this.value = t == 0 ? h : e > 0 ? h.slice(t) : h.slice(0, h.length - t), this;
        t -= h.length;
      } else {
        let h = s.children[u + (e < 0 ? -1 : 0)];
        t > h.length ? (t -= h.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(h), this.offsets.push(e > 0 ? 1 : (h instanceof ee ? h.text.length : h.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class Qv {
  constructor(t, e, i) {
    this.value = "", this.done = !1, this.cursor = new Fr(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let i = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > i && (t = i), i -= t;
    let { value: s } = this.cursor.next(t);
    return this.pos += (s.length + t) * e, this.value = s.length <= i ? s : e < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Zv {
  constructor(t) {
    this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(t = 0) {
    let { done: e, lineBreak: i, value: s } = this.inner.next(t);
    return e && this.afterBreak ? (this.value = "", this.afterBreak = !1) : e ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (Et.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Fr.prototype[Symbol.iterator] = Qv.prototype[Symbol.iterator] = Zv.prototype[Symbol.iterator] = function() {
  return this;
});
class AA {
  /**
  @internal
  */
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.number = i, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Rs(l, t, e) {
  return t = Math.max(0, Math.min(l.length, t)), [t, Math.max(t, Math.min(l.length, e))];
}
function me(l, t, e = !0, i = !0) {
  return SA(l, t, e, i);
}
function CA(l) {
  return l >= 56320 && l < 57344;
}
function kA(l) {
  return l >= 55296 && l < 56320;
}
function Ve(l, t) {
  let e = l.charCodeAt(t);
  if (!kA(e) || t + 1 == l.length)
    return e;
  let i = l.charCodeAt(t + 1);
  return CA(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function am(l) {
  return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
}
function Vi(l) {
  return l < 65536 ? 1 : 2;
}
const dd = /\r\n?|\n/;
var Be = /* @__PURE__ */ (function(l) {
  return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
})(Be || (Be = {}));
class Xi {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(t) {
    this.sections = t;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2)
      t += this.sections[e];
    return t;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e + 1];
      t += i < 0 ? this.sections[e] : i;
    }
    return t;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(t) {
    for (let e = 0, i = 0, s = 0; e < this.sections.length; ) {
      let o = this.sections[e++], u = this.sections[e++];
      u < 0 ? (t(i, s, o), s += o) : s += u, i += o;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(t, e = !1) {
    md(this, t, e);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], s = this.sections[e++];
      s < 0 ? t.push(i, s) : t.push(s, i);
    }
    return new Xi(t);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : Jv(this, t);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(t, e = !1) {
    return t.empty ? this : pd(this, t, e);
  }
  mapPos(t, e = -1, i = Be.Simple) {
    let s = 0, o = 0;
    for (let u = 0; u < this.sections.length; ) {
      let c = this.sections[u++], h = this.sections[u++], m = s + c;
      if (h < 0) {
        if (m > t)
          return o + (t - s);
        o += c;
      } else {
        if (i != Be.Simple && m >= t && (i == Be.TrackDel && s < t && m > t || i == Be.TrackBefore && s < t || i == Be.TrackAfter && m > t))
          return null;
        if (m > t || m == t && e < 0 && !c)
          return t == s || e < 0 ? o : o + h;
        o += h;
      }
      s = m;
    }
    if (t > s)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${s}`);
    return o;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(t, e = t) {
    for (let i = 0, s = 0; i < this.sections.length && s <= e; ) {
      let o = this.sections[i++], u = this.sections[i++], c = s + o;
      if (u >= 0 && s <= e && c >= t)
        return s < t && c > e ? "cover" : !0;
      s = c;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], s = this.sections[e++];
      t += (t ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return t;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Xi(t);
  }
  /**
  @internal
  */
  static create(t) {
    return new Xi(t);
  }
}
class oe extends Xi {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(t) {
    if (this.length != t.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return md(this, (e, i, s, o, u) => t = t.replace(s, s + (i - e), u), !1), t;
  }
  mapDesc(t, e = !1) {
    return pd(this, t, e, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(t) {
    let e = this.sections.slice(), i = [];
    for (let s = 0, o = 0; s < e.length; s += 2) {
      let u = e[s], c = e[s + 1];
      if (c >= 0) {
        e[s] = c, e[s + 1] = u;
        let h = s >> 1;
        for (; i.length < h; )
          i.push(Et.empty);
        i.push(u ? t.slice(o, o + u) : Et.empty);
      }
      o += u;
    }
    return new oe(e, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(t) {
    return this.empty ? t : t.empty ? this : Jv(this, t, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(t, e = !1) {
    return t.empty ? this : pd(this, t, e, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(t, e = !1) {
    md(this, t, e);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Xi.create(this.sections);
  }
  /**
  @internal
  */
  filter(t) {
    let e = [], i = [], s = [], o = new lo(this);
    t: for (let u = 0, c = 0; ; ) {
      let h = u == t.length ? 1e9 : t[u++];
      for (; c < h || c == h && o.len == 0; ) {
        if (o.done)
          break t;
        let p = Math.min(o.len, h - c);
        Me(s, p, -1);
        let y = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
        Me(e, p, y), y > 0 && Kn(i, e, o.text), o.forward(p), c += p;
      }
      let m = t[u++];
      for (; c < m; ) {
        if (o.done)
          break t;
        let p = Math.min(o.len, m - c);
        Me(e, p, -1), Me(s, p, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0), o.forward(p), c += p;
      }
    }
    return {
      changes: new oe(e, i),
      filtered: Xi.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e], s = this.sections[e + 1];
      s < 0 ? t.push(i) : s == 0 ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(t, e, i) {
    let s = [], o = [], u = 0, c = null;
    function h(p = !1) {
      if (!p && !s.length)
        return;
      u < e && Me(s, e - u, -1);
      let y = new oe(s, o);
      c = c ? c.compose(y.map(c)) : y, s = [], o = [], u = 0;
    }
    function m(p) {
      if (Array.isArray(p))
        for (let y of p)
          m(y);
      else if (p instanceof oe) {
        if (p.length != e)
          throw new RangeError(`Mismatched change set length (got ${p.length}, expected ${e})`);
        h(), c = c ? c.compose(p.map(c)) : p;
      } else {
        let { from: y, to: v = y, insert: S } = p;
        if (y > v || y < 0 || v > e)
          throw new RangeError(`Invalid change range ${y} to ${v} (in doc of length ${e})`);
        let w = S ? typeof S == "string" ? Et.of(S.split(i || dd)) : S : Et.empty, A = w.length;
        if (y == v && A == 0)
          return;
        y < u && h(), y > u && Me(s, y - u, -1), Me(s, v - y, A), Kn(o, s, w), u = v;
      }
    }
    return m(t), h(!c), c;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(t) {
    return new oe(t ? [t, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], i = [];
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (typeof o == "number")
        e.push(o, -1);
      else {
        if (!Array.isArray(o) || typeof o[0] != "number" || o.some((u, c) => c && typeof u != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (o.length == 1)
          e.push(o[0], 0);
        else {
          for (; i.length < s; )
            i.push(Et.empty);
          i[s] = Et.of(o.slice(1)), e.push(o[0], i[s].length);
        }
      }
    }
    return new oe(e, i);
  }
  /**
  @internal
  */
  static createSet(t, e) {
    return new oe(t, e);
  }
}
function Me(l, t, e, i = !1) {
  if (t == 0 && e <= 0)
    return;
  let s = l.length - 2;
  s >= 0 && e <= 0 && e == l[s + 1] ? l[s] += t : s >= 0 && t == 0 && l[s] == 0 ? l[s + 1] += e : i ? (l[s] += t, l[s + 1] += e) : l.push(t, e);
}
function Kn(l, t, e) {
  if (e.length == 0)
    return;
  let i = t.length - 2 >> 1;
  if (i < l.length)
    l[l.length - 1] = l[l.length - 1].append(e);
  else {
    for (; l.length < i; )
      l.push(Et.empty);
    l.push(e);
  }
}
function md(l, t, e) {
  let i = l.inserted;
  for (let s = 0, o = 0, u = 0; u < l.sections.length; ) {
    let c = l.sections[u++], h = l.sections[u++];
    if (h < 0)
      s += c, o += c;
    else {
      let m = s, p = o, y = Et.empty;
      for (; m += c, p += h, h && i && (y = y.append(i[u - 2 >> 1])), !(e || u == l.sections.length || l.sections[u + 1] < 0); )
        c = l.sections[u++], h = l.sections[u++];
      t(s, m, o, p, y), s = m, o = p;
    }
  }
}
function pd(l, t, e, i = !1) {
  let s = [], o = i ? [] : null, u = new lo(l), c = new lo(t);
  for (let h = -1; ; ) {
    if (u.done && c.len || c.done && u.len)
      throw new Error("Mismatched change set lengths");
    if (u.ins == -1 && c.ins == -1) {
      let m = Math.min(u.len, c.len);
      Me(s, m, -1), u.forward(m), c.forward(m);
    } else if (c.ins >= 0 && (u.ins < 0 || h == u.i || u.off == 0 && (c.len < u.len || c.len == u.len && !e))) {
      let m = c.len;
      for (Me(s, c.ins, -1); m; ) {
        let p = Math.min(u.len, m);
        u.ins >= 0 && h < u.i && u.len <= p && (Me(s, 0, u.ins), o && Kn(o, s, u.text), h = u.i), u.forward(p), m -= p;
      }
      c.next();
    } else if (u.ins >= 0) {
      let m = 0, p = u.len;
      for (; p; )
        if (c.ins == -1) {
          let y = Math.min(p, c.len);
          m += y, p -= y, c.forward(y);
        } else if (c.ins == 0 && c.len < p)
          p -= c.len, c.next();
        else
          break;
      Me(s, m, h < u.i ? u.ins : 0), o && h < u.i && Kn(o, s, u.text), h = u.i, u.forward(u.len - p);
    } else {
      if (u.done && c.done)
        return o ? oe.createSet(s, o) : Xi.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Jv(l, t, e = !1) {
  let i = [], s = e ? [] : null, o = new lo(l), u = new lo(t);
  for (let c = !1; ; ) {
    if (o.done && u.done)
      return s ? oe.createSet(i, s) : Xi.create(i);
    if (o.ins == 0)
      Me(i, o.len, 0, c), o.next();
    else if (u.len == 0 && !u.done)
      Me(i, 0, u.ins, c), s && Kn(s, i, u.text), u.next();
    else {
      if (o.done || u.done)
        throw new Error("Mismatched change set lengths");
      {
        let h = Math.min(o.len2, u.len), m = i.length;
        if (o.ins == -1) {
          let p = u.ins == -1 ? -1 : u.off ? 0 : u.ins;
          Me(i, h, p, c), s && p && Kn(s, i, u.text);
        } else u.ins == -1 ? (Me(i, o.off ? 0 : o.len, h, c), s && Kn(s, i, o.textBit(h))) : (Me(i, o.off ? 0 : o.len, u.off ? 0 : u.ins, c), s && !u.off && Kn(s, i, u.text));
        c = (o.ins > h || u.ins >= 0 && u.len > h) && (c || i.length > m), o.forward2(h), u.forward(h);
      }
    }
  }
}
class lo {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? Et.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, i = this.i - 2 >> 1;
    return i >= e.length && !t ? Et.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class Cl {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let t = this.flags & 7;
    return t == 7 ? null : t;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let t = this.flags >> 6;
    return t == 16777215 ? void 0 : t;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(t, e = -1) {
    let i, s;
    return this.empty ? i = s = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), s = t.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Cl(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(t, e = t, i = 0) {
    if (t <= this.anchor && e >= this.anchor)
      return j.range(t, e, void 0, void 0, i);
    let s = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return j.range(this.anchor, s, void 0, void 0, i);
  }
  /**
  Compare this range to another range.
  */
  eq(t, e = !1) {
    return this.anchor == t.anchor && this.head == t.head && this.goalColumn == t.goalColumn && (!e || !this.empty || this.assoc == t.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return j.range(t.anchor, t.head);
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Cl(t, e, i);
  }
}
class j {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(t, e = -1) {
    return t.empty ? this : j.create(this.ranges.map((i) => i.map(t, e)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(t, e = !1) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(t.ranges[i], e))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new j([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(t, e = !0) {
    return j.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(t, e = this.mainIndex) {
    let i = this.ranges.slice();
    return i[e] = t, j.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new j(t.ranges.map((e) => Cl.fromJSON(e)), t.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(t, e = t) {
    return new j([j.range(t, e)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < t.length; s++) {
      let o = t[s];
      if (o.empty ? o.from <= i : o.from < i)
        return j.normalized(t.slice(), e);
      i = o.to;
    }
    return new j(t, e);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(t, e = 0, i, s) {
    return Cl.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(t, e, i, s, o) {
    let u = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return !o && t != e && (o = e < t ? 1 : -1), e < t ? Cl.create(e, t, 48 | u) : Cl.create(t, e, (o ? o < 0 ? 8 : 16 : 0) | u);
  }
  /**
  @internal
  */
  static normalized(t, e = 0) {
    let i = t[e];
    t.sort((s, o) => s.from - o.from), e = t.indexOf(i);
    for (let s = 1; s < t.length; s++) {
      let o = t[s], u = t[s - 1];
      if (o.empty ? o.from <= u.to : o.from < u.to) {
        let c = u.from, h = Math.max(o.to, u.to);
        s <= e && e--, t.splice(--s, 2, o.anchor > o.head ? j.range(h, c) : j.range(c, h));
      }
    }
    return new j(t, e);
  }
}
function Fv(l, t) {
  for (let e of l.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let um = 0;
class tt {
  constructor(t, e, i, s, o) {
    this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = s, this.id = um++, this.default = t([]), this.extensions = typeof o == "function" ? o(this) : o;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(t = {}) {
    return new tt(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : cm), !!t.static, t.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(t) {
    return new pu([], this, 0, t);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new pu(t, this, 1, e);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new pu(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (i) => i), this.compute([t], (i) => e(i.field(t)));
  }
}
function cm(l, t) {
  return l == t || l.length == t.length && l.every((e, i) => e === t[i]);
}
class pu {
  constructor(t, e, i, s) {
    this.dependencies = t, this.facet = e, this.type = i, this.value = s, this.id = um++;
  }
  dynamicSlot(t) {
    var e;
    let i = this.value, s = this.facet.compareInput, o = this.id, u = t[o] >> 1, c = this.type == 2, h = !1, m = !1, p = [];
    for (let y of this.dependencies)
      y == "doc" ? h = !0 : y == "selection" ? m = !0 : (((e = t[y.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && p.push(t[y.id]);
    return {
      create(y) {
        return y.values[u] = i(y), 1;
      },
      update(y, v) {
        if (h && v.docChanged || m && (v.docChanged || v.selection) || gd(y, p)) {
          let S = i(y);
          if (c ? !Iy(S, y.values[u], s) : !s(S, y.values[u]))
            return y.values[u] = S, 1;
        }
        return 0;
      },
      reconfigure: (y, v) => {
        let S, w = v.config.address[o];
        if (w != null) {
          let A = Au(v, w);
          if (this.dependencies.every((M) => M instanceof tt ? v.facet(M) === y.facet(M) : M instanceof Oe ? v.field(M, !1) == y.field(M, !1) : !0) || (c ? Iy(S = i(y), A, s) : s(S = i(y), A)))
            return y.values[u] = A, 0;
        } else
          S = i(y);
        return y.values[u] = S, 1;
      }
    };
  }
}
function Iy(l, t, e) {
  if (l.length != t.length)
    return !1;
  for (let i = 0; i < l.length; i++)
    if (!e(l[i], t[i]))
      return !1;
  return !0;
}
function gd(l, t) {
  let e = !1;
  for (let i of t)
    Pr(l, i) & 1 && (e = !0);
  return e;
}
function MA(l, t, e) {
  let i = e.map((h) => l[h.id]), s = e.map((h) => h.type), o = i.filter((h) => !(h & 1)), u = l[t.id] >> 1;
  function c(h) {
    let m = [];
    for (let p = 0; p < i.length; p++) {
      let y = Au(h, i[p]);
      if (s[p] == 2)
        for (let v of y)
          m.push(v);
      else
        m.push(y);
    }
    return t.combine(m);
  }
  return {
    create(h) {
      for (let m of i)
        Pr(h, m);
      return h.values[u] = c(h), 1;
    },
    update(h, m) {
      if (!gd(h, o))
        return 0;
      let p = c(h);
      return t.compare(p, h.values[u]) ? 0 : (h.values[u] = p, 1);
    },
    reconfigure(h, m) {
      let p = gd(h, i), y = m.config.facets[t.id], v = m.facet(t);
      if (y && !p && cm(e, y))
        return h.values[u] = v, 0;
      let S = c(h);
      return t.compare(S, v) ? (h.values[u] = v, 0) : (h.values[u] = S, 1);
    }
  };
}
const Ka = /* @__PURE__ */ tt.define({ static: !0 });
class Oe {
  constructor(t, e, i, s, o) {
    this.id = t, this.createF = e, this.updateF = i, this.compareF = s, this.spec = o, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(t) {
    let e = new Oe(um++, t.create, t.update, t.compare || ((i, s) => i === s), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(Ka).find((i) => i.field == this);
    return (e?.create || this.createF)(t);
  }
  /**
  @internal
  */
  slot(t) {
    let e = t[this.id] >> 1;
    return {
      create: (i) => (i.values[e] = this.create(i), 1),
      update: (i, s) => {
        let o = i.values[e], u = this.updateF(o, s);
        return this.compareF(o, u) ? 0 : (i.values[e] = u, 1);
      },
      reconfigure: (i, s) => {
        let o = i.facet(Ka), u = s.facet(Ka), c;
        return (c = o.find((h) => h.field == this)) && c != u.find((h) => h.field == this) ? (i.values[e] = c.create(i), 1) : s.config.address[this.id] != null ? (i.values[e] = s.field(this), 0) : (i.values[e] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(t) {
    return [this, Ka.of({ field: this, create: t })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const wl = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function jr(l) {
  return (t) => new Pv(t, l);
}
const tl = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ jr(wl.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ jr(wl.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ jr(wl.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ jr(wl.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ jr(wl.lowest)
};
class Pv {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class Zu {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(t) {
    return new yd(this, t);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(t) {
    return Zu.reconfigure.of({ compartment: this, extension: t });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(t) {
    return t.config.compartments.get(this);
  }
}
class yd {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class wu {
  constructor(t, e, i, s, o, u) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = s, this.staticValues = o, this.facets = u, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, i) {
    let s = [], o = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Map();
    for (let v of TA(t, e, u))
      v instanceof Oe ? s.push(v) : (o[v.facet.id] || (o[v.facet.id] = [])).push(v);
    let c = /* @__PURE__ */ Object.create(null), h = [], m = [];
    for (let v of s)
      c[v.id] = m.length << 1, m.push((S) => v.slot(S));
    let p = i?.config.facets;
    for (let v in o) {
      let S = o[v], w = S[0].facet, A = p && p[v] || [];
      if (S.every(
        (M) => M.type == 0
        /* Provider.Static */
      ))
        if (c[w.id] = h.length << 1 | 1, cm(A, S))
          h.push(i.facet(w));
        else {
          let M = w.combine(S.map((O) => O.value));
          h.push(i && w.compare(M, i.facet(w)) ? i.facet(w) : M);
        }
      else {
        for (let M of S)
          M.type == 0 ? (c[M.id] = h.length << 1 | 1, h.push(M.value)) : (c[M.id] = m.length << 1, m.push((O) => M.dynamicSlot(O)));
        c[w.id] = m.length << 1, m.push((M) => MA(M, w, S));
      }
    }
    let y = m.map((v) => v(c));
    return new wu(t, u, y, c, h, o);
  }
}
function TA(l, t, e) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function o(u, c) {
    let h = s.get(u);
    if (h != null) {
      if (h <= c)
        return;
      let m = i[h].indexOf(u);
      m > -1 && i[h].splice(m, 1), u instanceof yd && e.delete(u.compartment);
    }
    if (s.set(u, c), Array.isArray(u))
      for (let m of u)
        o(m, c);
    else if (u instanceof yd) {
      if (e.has(u.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let m = t.get(u.compartment) || u.inner;
      e.set(u.compartment, m), o(m, c);
    } else if (u instanceof Pv)
      o(u.inner, u.prec);
    else if (u instanceof Oe)
      i[c].push(u), u.provides && o(u.provides, c);
    else if (u instanceof pu)
      i[c].push(u), u.facet.extensions && o(u.facet.extensions, wl.default);
    else {
      let m = u.extension;
      if (!m)
        throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      o(m, c);
    }
  }
  return o(l, wl.default), i.reduce((u, c) => u.concat(c));
}
function Pr(l, t) {
  if (t & 1)
    return 2;
  let e = t >> 1, i = l.status[e];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  l.status[e] = 4;
  let s = l.computeSlot(l, l.config.dynamicSlots[e]);
  return l.status[e] = 2 | s;
}
function Au(l, t) {
  return t & 1 ? l.config.staticValues[t >> 1] : l.values[t >> 1];
}
const Iv = /* @__PURE__ */ tt.define(), vd = /* @__PURE__ */ tt.define({
  combine: (l) => l.some((t) => t),
  static: !0
}), $v = /* @__PURE__ */ tt.define({
  combine: (l) => l.length ? l[0] : void 0,
  static: !0
}), tb = /* @__PURE__ */ tt.define(), eb = /* @__PURE__ */ tt.define(), ib = /* @__PURE__ */ tt.define(), nb = /* @__PURE__ */ tt.define({
  combine: (l) => l.length ? l[0] : !1
});
class Qi {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new OA();
  }
}
class OA {
  /**
  Create an instance of this annotation.
  */
  of(t) {
    return new Qi(this, t);
  }
}
class DA {
  /**
  @internal
  */
  constructor(t) {
    this.map = t;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(t) {
    return new vt(this, t);
  }
}
class vt {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new vt(this.type, e);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(t) {
    return this.type == t;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(t = {}) {
    return new DA(t.map || ((e) => e));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let i = [];
    for (let s of t) {
      let o = s.map(e);
      o && i.push(o);
    }
    return i;
  }
}
vt.reconfigure = /* @__PURE__ */ vt.define();
vt.appendConfig = /* @__PURE__ */ vt.define();
class ae {
  constructor(t, e, i, s, o, u) {
    this.startState = t, this.changes = e, this.selection = i, this.effects = s, this.annotations = o, this.scrollIntoView = u, this._doc = null, this._state = null, i && Fv(i, e.newLength), o.some((c) => c.type == ae.time) || (this.annotations = o.concat(ae.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(t, e, i, s, o, u) {
    return new ae(t, e, i, s, o, u);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(t) {
    for (let e of this.annotations)
      if (e.type == t)
        return e.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(t) {
    let e = this.annotation(ae.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
ae.time = /* @__PURE__ */ Qi.define();
ae.userEvent = /* @__PURE__ */ Qi.define();
ae.addToHistory = /* @__PURE__ */ Qi.define();
ae.remote = /* @__PURE__ */ Qi.define();
function EA(l, t) {
  let e = [];
  for (let i = 0, s = 0; ; ) {
    let o, u;
    if (i < l.length && (s == t.length || t[s] >= l[i]))
      o = l[i++], u = l[i++];
    else if (s < t.length)
      o = t[s++], u = t[s++];
    else
      return e;
    !e.length || e[e.length - 1] < o ? e.push(o, u) : e[e.length - 1] < u && (e[e.length - 1] = u);
  }
}
function lb(l, t, e) {
  var i;
  let s, o, u;
  return e ? (s = t.changes, o = oe.empty(t.changes.length), u = l.changes.compose(t.changes)) : (s = t.changes.map(l.changes), o = l.changes.mapDesc(t.changes, !0), u = l.changes.compose(s)), {
    changes: u,
    selection: t.selection ? t.selection.map(o) : (i = l.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: vt.mapEffects(l.effects, s).concat(vt.mapEffects(t.effects, o)),
    annotations: l.annotations.length ? l.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: l.scrollIntoView || t.scrollIntoView
  };
}
function bd(l, t, e) {
  let i = t.selection, s = ks(t.annotations);
  return t.userEvent && (s = s.concat(ae.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof oe ? t.changes : oe.of(t.changes || [], e, l.facet($v)),
    selection: i && (i instanceof j ? i : j.single(i.anchor, i.head)),
    effects: ks(t.effects),
    annotations: s,
    scrollIntoView: !!t.scrollIntoView
  };
}
function sb(l, t, e) {
  let i = bd(l, t.length ? t[0] : {}, l.doc.length);
  t.length && t[0].filter === !1 && (e = !1);
  for (let o = 1; o < t.length; o++) {
    t[o].filter === !1 && (e = !1);
    let u = !!t[o].sequential;
    i = lb(i, bd(l, t[o], u ? i.changes.newLength : l.doc.length), u);
  }
  let s = ae.create(l, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return BA(e ? RA(s) : s);
}
function RA(l) {
  let t = l.startState, e = !0;
  for (let s of t.facet(tb)) {
    let o = s(l);
    if (o === !1) {
      e = !1;
      break;
    }
    Array.isArray(o) && (e = e === !0 ? o : EA(e, o));
  }
  if (e !== !0) {
    let s, o;
    if (e === !1)
      o = l.changes.invertedDesc, s = oe.empty(t.doc.length);
    else {
      let u = l.changes.filter(e);
      s = u.changes, o = u.filtered.mapDesc(u.changes).invertedDesc;
    }
    l = ae.create(t, s, l.selection && l.selection.map(o), vt.mapEffects(l.effects, o), l.annotations, l.scrollIntoView);
  }
  let i = t.facet(eb);
  for (let s = i.length - 1; s >= 0; s--) {
    let o = i[s](l);
    o instanceof ae ? l = o : Array.isArray(o) && o.length == 1 && o[0] instanceof ae ? l = o[0] : l = sb(t, ks(o), !1);
  }
  return l;
}
function BA(l) {
  let t = l.startState, e = t.facet(ib), i = l;
  for (let s = e.length - 1; s >= 0; s--) {
    let o = e[s](l);
    o && Object.keys(o).length && (i = lb(i, bd(t, o, l.changes.newLength), !0));
  }
  return i == l ? l : ae.create(t, l.changes, l.selection, i.effects, i.annotations, i.scrollIntoView);
}
const NA = [];
function ks(l) {
  return l == null ? NA : Array.isArray(l) ? l : [l];
}
var Wt = /* @__PURE__ */ (function(l) {
  return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
})(Wt || (Wt = {}));
const LA = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Sd;
try {
  Sd = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function zA(l) {
  if (Sd)
    return Sd.test(l);
  for (let t = 0; t < l.length; t++) {
    let e = l[t];
    if (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || LA.test(e)))
      return !0;
  }
  return !1;
}
function HA(l) {
  return (t) => {
    if (!/\S/.test(t))
      return Wt.Space;
    if (zA(t))
      return Wt.Word;
    for (let e = 0; e < l.length; e++)
      if (t.indexOf(l[e]) > -1)
        return Wt.Word;
    return Wt.Other;
  };
}
class Tt {
  constructor(t, e, i, s, o, u) {
    this.config = t, this.doc = e, this.selection = i, this.values = s, this.status = t.statusTemplate.slice(), this.computeSlot = o, u && (u._state = this);
    for (let c = 0; c < this.config.dynamicSlots.length; c++)
      Pr(this, c << 1);
    this.computeSlot = null;
  }
  field(t, e = !0) {
    let i = this.config.address[t.id];
    if (i == null) {
      if (e)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Pr(this, i), Au(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...t) {
    return sb(this, t, !0);
  }
  /**
  @internal
  */
  applyTransaction(t) {
    let e = this.config, { base: i, compartments: s } = e;
    for (let c of t.effects)
      c.is(Zu.reconfigure) ? (e && (s = /* @__PURE__ */ new Map(), e.compartments.forEach((h, m) => s.set(m, h)), e = null), s.set(c.value.compartment, c.value.extension)) : c.is(vt.reconfigure) ? (e = null, i = c.value) : c.is(vt.appendConfig) && (e = null, i = ks(i).concat(c.value));
    let o;
    e ? o = t.startState.values.slice() : (e = wu.resolve(i, s, this), o = new Tt(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (h, m) => m.reconfigure(h, this), null).values);
    let u = t.startState.facet(vd) ? t.newSelection : t.newSelection.asSingle();
    new Tt(e, t.newDoc, u, o, (c, h) => h.update(c, t), t);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
      changes: { from: e.from, to: e.to, insert: t },
      range: j.cursor(e.from + t.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(t) {
    let e = this.selection, i = t(e.ranges[0]), s = this.changes(i.changes), o = [i.range], u = ks(i.effects);
    for (let c = 1; c < e.ranges.length; c++) {
      let h = t(e.ranges[c]), m = this.changes(h.changes), p = m.map(s);
      for (let v = 0; v < c; v++)
        o[v] = o[v].map(p);
      let y = s.mapDesc(m, !0);
      o.push(h.range.map(y)), s = s.compose(p), u = vt.mapEffects(u, p).concat(vt.mapEffects(ks(h.effects), y));
    }
    return {
      changes: s,
      selection: j.create(o, e.mainIndex),
      effects: u
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(t = []) {
    return t instanceof oe ? t : oe.of(t, this.doc.length, this.facet(Tt.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(t) {
    return Et.of(t.split(this.facet(Tt.lineSeparator) || dd));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (Pr(this, e), Au(this, e));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(t) {
    let e = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (t)
      for (let i in t) {
        let s = t[i];
        s instanceof Oe && this.config.address[s.id] != null && (e[i] = s.spec.toJSON(this.field(t[i]), this));
      }
    return e;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(t, e = {}, i) {
    if (!t || typeof t.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let o in i)
        if (Object.prototype.hasOwnProperty.call(t, o)) {
          let u = i[o], c = t[o];
          s.push(u.init((h) => u.spec.fromJSON(c, h)));
        }
    }
    return Tt.create({
      doc: t.doc,
      selection: j.fromJSON(t.selection),
      extensions: e.extensions ? s.concat([e.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(t = {}) {
    let e = wu.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof Et ? t.doc : Et.of((t.doc || "").split(e.staticFacet(Tt.lineSeparator) || dd)), s = t.selection ? t.selection instanceof j ? t.selection : j.single(t.selection.anchor, t.selection.head) : j.single(0);
    return Fv(s, i.length), e.staticFacet(vd) || (s = s.asSingle()), new Tt(e, i, s, e.dynamicSlots.map(() => null), (o, u) => u.create(o), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(Tt.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(Tt.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(nb);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(t, ...e) {
    for (let i of this.facet(Tt.phrases))
      if (Object.prototype.hasOwnProperty.call(i, t)) {
        t = i[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let o = +(s || 1);
      return !o || o > e.length ? i : e[o - 1];
    })), t;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(t, e, i = -1) {
    let s = [];
    for (let o of this.facet(Iv))
      for (let u of o(this, e, i))
        Object.prototype.hasOwnProperty.call(u, t) && s.push(u[t]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(t) {
    let e = this.languageDataAt("wordChars", t);
    return HA(e.length ? e[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(t) {
    let { text: e, from: i, length: s } = this.doc.lineAt(t), o = this.charCategorizer(t), u = t - i, c = t - i;
    for (; u > 0; ) {
      let h = me(e, u, !1);
      if (o(e.slice(h, u)) != Wt.Word)
        break;
      u = h;
    }
    for (; c < s; ) {
      let h = me(e, c);
      if (o(e.slice(c, h)) != Wt.Word)
        break;
      c = h;
    }
    return u == c ? null : j.range(u + i, c + i);
  }
}
Tt.allowMultipleSelections = vd;
Tt.tabSize = /* @__PURE__ */ tt.define({
  combine: (l) => l.length ? l[0] : 4
});
Tt.lineSeparator = $v;
Tt.readOnly = nb;
Tt.phrases = /* @__PURE__ */ tt.define({
  compare(l, t) {
    let e = Object.keys(l), i = Object.keys(t);
    return e.length == i.length && e.every((s) => l[s] == t[s]);
  }
});
Tt.languageData = Iv;
Tt.changeFilter = tb;
Tt.transactionFilter = eb;
Tt.transactionExtender = ib;
Zu.reconfigure = /* @__PURE__ */ vt.define();
function Zi(l, t, e = {}) {
  let i = {};
  for (let s of l)
    for (let o of Object.keys(s)) {
      let u = s[o], c = i[o];
      if (c === void 0)
        i[o] = u;
      else if (!(c === u || u === void 0)) if (Object.hasOwnProperty.call(e, o))
        i[o] = e[o](c, u);
      else
        throw new Error("Config merge conflict for field " + o);
    }
  for (let s in t)
    i[s] === void 0 && (i[s] = t[s]);
  return i;
}
class Qn {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(t) {
    return this == t;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(t, e = t) {
    return xd.create(t, e, this);
  }
}
Qn.prototype.startSide = Qn.prototype.endSide = 0;
Qn.prototype.point = !1;
Qn.prototype.mapMode = Be.TrackDel;
function fm(l, t) {
  return l == t || l.constructor == t.constructor && l.eq(t);
}
let xd = class rb {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.value = i;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new rb(t, e, i);
  }
};
function wd(l, t) {
  return l.from - t.from || l.value.startSide - t.value.startSide;
}
class hm {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(t, e, i, s = 0) {
    let o = i ? this.to : this.from;
    for (let u = s, c = o.length; ; ) {
      if (u == c)
        return u;
      let h = u + c >> 1, m = o[h] - t || (i ? this.value[h].endSide : this.value[h].startSide) - e;
      if (h == u)
        return m >= 0 ? u : c;
      m >= 0 ? c = h : u = h + 1;
    }
  }
  between(t, e, i, s) {
    for (let o = this.findIndex(e, -1e9, !0), u = this.findIndex(i, 1e9, !1, o); o < u; o++)
      if (s(this.from[o] + t, this.to[o] + t, this.value[o]) === !1)
        return !1;
  }
  map(t, e) {
    let i = [], s = [], o = [], u = -1, c = -1;
    for (let h = 0; h < this.value.length; h++) {
      let m = this.value[h], p = this.from[h] + t, y = this.to[h] + t, v, S;
      if (p == y) {
        let w = e.mapPos(p, m.startSide, m.mapMode);
        if (w == null || (v = S = w, m.startSide != m.endSide && (S = e.mapPos(p, m.endSide), S < v)))
          continue;
      } else if (v = e.mapPos(p, m.startSide), S = e.mapPos(y, m.endSide), v > S || v == S && m.startSide > 0 && m.endSide <= 0)
        continue;
      (S - v || m.endSide - m.startSide) < 0 || (u < 0 && (u = v), m.point && (c = Math.max(c, S - v)), i.push(m), s.push(v - u), o.push(S - u));
    }
    return { mapped: i.length ? new hm(s, o, i, c) : null, pos: u };
  }
}
class Mt {
  constructor(t, e, i, s) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(t, e, i, s) {
    return new Mt(t, e, i, s);
  }
  /**
  @internal
  */
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk)
      t += e.value.length;
    return t;
  }
  /**
  @internal
  */
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(t) {
    let { add: e = [], sort: i = !1, filterFrom: s = 0, filterTo: o = this.length } = t, u = t.filter;
    if (e.length == 0 && !u)
      return this;
    if (i && (e = e.slice().sort(wd)), this.isEmpty)
      return e.length ? Mt.of(e) : this;
    let c = new ob(this, null, -1).goto(0), h = 0, m = [], p = new Wi();
    for (; c.value || h < e.length; )
      if (h < e.length && (c.from - e[h].from || c.startSide - e[h].value.startSide) >= 0) {
        let y = e[h++];
        p.addInner(y.from, y.to, y.value) || m.push(y);
      } else c.rangeIndex == 1 && c.chunkIndex < this.chunk.length && (h == e.length || this.chunkEnd(c.chunkIndex) < e[h].from) && (!u || s > this.chunkEnd(c.chunkIndex) || o < this.chunkPos[c.chunkIndex]) && p.addChunk(this.chunkPos[c.chunkIndex], this.chunk[c.chunkIndex]) ? c.nextChunk() : ((!u || s > c.to || o < c.from || u(c.from, c.to, c.value)) && (p.addInner(c.from, c.to, c.value) || m.push(xd.create(c.from, c.to, c.value))), c.next());
    return p.finishInner(this.nextLayer.isEmpty && !m.length ? Mt.empty : this.nextLayer.update({ add: m, filter: u, filterFrom: s, filterTo: o }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(t) {
    if (t.empty || this.isEmpty)
      return this;
    let e = [], i = [], s = -1;
    for (let u = 0; u < this.chunk.length; u++) {
      let c = this.chunkPos[u], h = this.chunk[u], m = t.touchesRange(c, c + h.length);
      if (m === !1)
        s = Math.max(s, h.maxPoint), e.push(h), i.push(t.mapPos(c));
      else if (m === !0) {
        let { mapped: p, pos: y } = h.map(c, t);
        p && (s = Math.max(s, p.maxPoint), e.push(p), i.push(y));
      }
    }
    let o = this.nextLayer.map(t);
    return e.length == 0 ? o : new Mt(i, e, o || Mt.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(t, e, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let o = this.chunkPos[s], u = this.chunk[s];
        if (e >= o && t <= o + u.length && u.between(o, t - o, e - o, i) === !1)
          return;
      }
      this.nextLayer.between(t, e, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(t = 0) {
    return so.from([this]).goto(t);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(t, e = 0) {
    return so.from(t).goto(e);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(t, e, i, s, o = -1) {
    let u = t.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= o), c = e.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= o), h = $y(u, c, i), m = new Yr(u, h, o), p = new Yr(c, h, o);
    i.iterGaps((y, v, S) => t1(m, y, p, v, S, s)), i.empty && i.length == 0 && t1(m, 0, p, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(t, e, i = 0, s) {
    s == null && (s = 999999999);
    let o = t.filter((p) => !p.isEmpty && e.indexOf(p) < 0), u = e.filter((p) => !p.isEmpty && t.indexOf(p) < 0);
    if (o.length != u.length)
      return !1;
    if (!o.length)
      return !0;
    let c = $y(o, u), h = new Yr(o, c, 0).goto(i), m = new Yr(u, c, 0).goto(i);
    for (; ; ) {
      if (h.to != m.to || !Ad(h.active, m.active) || h.point && (!m.point || !fm(h.point, m.point)))
        return !1;
      if (h.to > s)
        return !0;
      h.next(), m.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(t, e, i, s, o = -1) {
    let u = new Yr(t, null, o).goto(e), c = e, h = u.openStart;
    for (; ; ) {
      let m = Math.min(u.to, i);
      if (u.point) {
        let p = u.activeForPoint(u.to), y = u.pointFrom < e ? p.length + 1 : u.point.startSide < 0 ? p.length : Math.min(p.length, h);
        s.point(c, m, u.point, p, y, u.pointRank), h = Math.min(u.openEnd(m), p.length);
      } else m > c && (s.span(c, m, u.active, h), h = u.openEnd(m));
      if (u.to > i)
        return h + (u.point && u.to > i ? 1 : 0);
      c = u.to, u.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(t, e = !1) {
    let i = new Wi();
    for (let s of t instanceof xd ? [t] : e ? _A(t) : t)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(t) {
    if (!t.length)
      return Mt.empty;
    let e = t[t.length - 1];
    for (let i = t.length - 2; i >= 0; i--)
      for (let s = t[i]; s != Mt.empty; s = s.nextLayer)
        e = new Mt(s.chunkPos, s.chunk, e, Math.max(s.maxPoint, e.maxPoint));
    return e;
  }
}
Mt.empty = /* @__PURE__ */ new Mt([], [], null, -1);
function _A(l) {
  if (l.length > 1)
    for (let t = l[0], e = 1; e < l.length; e++) {
      let i = l[e];
      if (wd(t, i) > 0)
        return l.slice().sort(wd);
      t = i;
    }
  return l;
}
Mt.empty.nextLayer = Mt.empty;
class Wi {
  finishChunk(t) {
    this.chunks.push(new hm(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(t, e, i) {
    this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new Wi())).add(t, e, i);
  }
  /**
  @internal
  */
  addInner(t, e, i) {
    let s = t - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0);
  }
  /**
  @internal
  */
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let i = e.value.length - 1;
    return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(Mt.empty);
  }
  /**
  @internal
  */
  finishInner(t) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return t;
    let e = Mt.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function $y(l, t, e) {
  let i = /* @__PURE__ */ new Map();
  for (let o of l)
    for (let u = 0; u < o.chunk.length; u++)
      o.chunk[u].maxPoint <= 0 && i.set(o.chunk[u], o.chunkPos[u]);
  let s = /* @__PURE__ */ new Set();
  for (let o of t)
    for (let u = 0; u < o.chunk.length; u++) {
      let c = i.get(o.chunk[u]);
      c != null && (e ? e.mapPos(c) : c) == o.chunkPos[u] && !e?.touchesRange(c, c + o.chunk[u].length) && s.add(o.chunk[u]);
    }
  return s;
}
class ob {
  constructor(t, e, i, s = 0) {
    this.layer = t, this.skip = e, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this;
  }
  gotoInner(t, e, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < t || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], i = t + e.from[this.rangeIndex];
        if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class so {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, i = -1) {
    let s = [];
    for (let o = 0; o < t.length; o++)
      for (let u = t[o]; !u.isEmpty; u = u.nextLayer)
        u.maxPoint >= i && s.push(new ob(u, e, i, o));
    return s.length == 1 ? s[0] : new so(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let i of this.heap)
      i.goto(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Lh(this.heap, i);
    return this.next(), this;
  }
  forward(t, e) {
    for (let i of this.heap)
      i.forward(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Lh(this.heap, i);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Lh(this.heap, 0);
    }
  }
}
function Lh(l, t) {
  for (let e = l[t]; ; ) {
    let i = (t << 1) + 1;
    if (i >= l.length)
      break;
    let s = l[i];
    if (i + 1 < l.length && s.compare(l[i + 1]) >= 0 && (s = l[i + 1], i++), e.compare(s) < 0)
      break;
    l[i] = e, l[t] = s, t = i;
  }
}
class Yr {
  constructor(t, e, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = so.from(t, e, i);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    Xa(this.active, t), Xa(this.activeTo, t), Xa(this.activeRank, t), this.minActive = e1(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: i, to: s, rank: o } = this.cursor;
    for (; e < this.activeRank.length && (o - this.activeRank[e] || s - this.activeTo[e]) > 0; )
      e++;
    Wa(this.active, e, i), Wa(this.activeTo, e, s), Wa(this.activeRank, e, o), t && Wa(t, e, this.cursor.from), this.minActive = e1(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > t) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && Xa(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let o = this.cursor.value;
          if (!o.point)
            this.addActive(i), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = o, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = o.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < t; s--)
        this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length)
      return this.active;
    let e = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--)
      e++;
    return e;
  }
}
function t1(l, t, e, i, s, o) {
  l.goto(t), e.goto(i);
  let u = i + s, c = i, h = i - t, m = !!o.boundChange;
  for (let p = !1; ; ) {
    let y = l.to + h - e.to, v = y || l.endSide - e.endSide, S = v < 0 ? l.to + h : e.to, w = Math.min(S, u);
    if (l.point || e.point ? (l.point && e.point && fm(l.point, e.point) && Ad(l.activeForPoint(l.to), e.activeForPoint(e.to)) || o.comparePoint(c, w, l.point, e.point), p = !1) : (p && o.boundChange(c), w > c && !Ad(l.active, e.active) && o.compareRange(c, w, l.active, e.active), m && w < u && (y || l.openEnd(S) != e.openEnd(S)) && (p = !0)), S > u)
      break;
    c = S, v <= 0 && l.next(), v >= 0 && e.next();
  }
}
function Ad(l, t) {
  if (l.length != t.length)
    return !1;
  for (let e = 0; e < l.length; e++)
    if (l[e] != t[e] && !fm(l[e], t[e]))
      return !1;
  return !0;
}
function Xa(l, t) {
  for (let e = t, i = l.length - 1; e < i; e++)
    l[e] = l[e + 1];
  l.pop();
}
function Wa(l, t, e) {
  for (let i = l.length - 1; i >= t; i--)
    l[i + 1] = l[i];
  l[t] = e;
}
function e1(l, t) {
  let e = -1, i = 1e9;
  for (let s = 0; s < t.length; s++)
    (t[s] - i || l[s].endSide - l[e].endSide) < 0 && (e = s, i = t[s]);
  return e;
}
function Vs(l, t, e = l.length) {
  let i = 0;
  for (let s = 0; s < e && s < l.length; )
    l.charCodeAt(s) == 9 ? (i += t - i % t, s++) : (i++, s = me(l, s));
  return i;
}
function Cd(l, t, e, i) {
  for (let s = 0, o = 0; ; ) {
    if (o >= t)
      return s;
    if (s == l.length)
      break;
    o += l.charCodeAt(s) == 9 ? e - o % e : 1, s = me(l, s);
  }
  return i === !0 ? -1 : l.length;
}
const kd = "ͼ", i1 = typeof Symbol > "u" ? "__" + kd : Symbol.for(kd), Md = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), n1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Zn {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(t, e) {
    this.rules = [];
    let { finish: i } = e || {};
    function s(u) {
      return /^@/.test(u) ? [u] : u.split(/,\s*/);
    }
    function o(u, c, h, m) {
      let p = [], y = /^@(\w+)\b/.exec(u[0]), v = y && y[1] == "keyframes";
      if (y && c == null) return h.push(u[0] + ";");
      for (let S in c) {
        let w = c[S];
        if (/&/.test(S))
          o(
            S.split(/,\s*/).map((A) => u.map((M) => A.replace(/&/, M))).reduce((A, M) => A.concat(M)),
            w,
            h
          );
        else if (w && typeof w == "object") {
          if (!y) throw new RangeError("The value of a property (" + S + ") should be a primitive value.");
          o(s(S), w, p, v);
        } else w != null && p.push(S.replace(/_.*/, "").replace(/[A-Z]/g, (A) => "-" + A.toLowerCase()) + ": " + w + ";");
      }
      (p.length || v) && h.push((i && !y && !m ? u.map(i) : u).join(", ") + " {" + p.join(" ") + "}");
    }
    for (let u in t) o(s(u), t[u], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let t = n1[i1] || 1;
    return n1[i1] = t + 1, kd + t.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(t, e, i) {
    let s = t[Md], o = i && i.nonce;
    s ? o && s.setNonce(o) : s = new UA(t, o), s.mount(Array.isArray(e) ? e : [e], t);
  }
}
let l1 = /* @__PURE__ */ new Map();
class UA {
  constructor(t, e) {
    let i = t.ownerDocument || t, s = i.defaultView;
    if (!t.head && t.adoptedStyleSheets && s.CSSStyleSheet) {
      let o = l1.get(i);
      if (o) return t[Md] = o;
      this.sheet = new s.CSSStyleSheet(), l1.set(i, this);
    } else
      this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
    this.modules = [], t[Md] = this;
  }
  mount(t, e) {
    let i = this.sheet, s = 0, o = 0;
    for (let u = 0; u < t.length; u++) {
      let c = t[u], h = this.modules.indexOf(c);
      if (h < o && h > -1 && (this.modules.splice(h, 1), o--, h = -1), h == -1) {
        if (this.modules.splice(o++, 0, c), i) for (let m = 0; m < c.rules.length; m++)
          i.insertRule(c.rules[m], s++);
      } else {
        for (; o < h; ) s += this.modules[o++].rules.length;
        s += c.rules.length, o++;
      }
    }
    if (i)
      e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]);
    else {
      let u = "";
      for (let h = 0; h < this.modules.length; h++)
        u += this.modules[h].getRules() + `
`;
      this.styleTag.textContent = u;
      let c = e.head || e;
      this.styleTag.parentNode != c && c.insertBefore(this.styleTag, c.firstChild);
    }
  }
  setNonce(t) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
  }
}
var Jn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ro = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, VA = typeof navigator < "u" && /Mac/.test(navigator.platform), qA = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var be = 0; be < 10; be++) Jn[48 + be] = Jn[96 + be] = String(be);
for (var be = 1; be <= 24; be++) Jn[be + 111] = "F" + be;
for (var be = 65; be <= 90; be++)
  Jn[be] = String.fromCharCode(be + 32), ro[be] = String.fromCharCode(be);
for (var zh in Jn) ro.hasOwnProperty(zh) || (ro[zh] = Jn[zh]);
function jA(l) {
  var t = VA && l.metaKey && l.shiftKey && !l.ctrlKey && !l.altKey || qA && l.shiftKey && l.key && l.key.length == 1 || l.key == "Unidentified", e = !t && l.key || (l.shiftKey ? ro : Jn)[l.keyCode] || l.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function Ut() {
  var l = arguments[0];
  typeof l == "string" && (l = document.createElement(l));
  var t = 1, e = arguments[1];
  if (e && typeof e == "object" && e.nodeType == null && !Array.isArray(e)) {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = e[i];
      typeof s == "string" ? l.setAttribute(i, s) : s != null && (l[i] = s);
    }
    t++;
  }
  for (; t < arguments.length; t++) ab(l, arguments[t]);
  return l;
}
function ab(l, t) {
  if (typeof t == "string")
    l.appendChild(document.createTextNode(t));
  else if (t != null) if (t.nodeType != null)
    l.appendChild(t);
  else if (Array.isArray(t))
    for (var e = 0; e < t.length; e++) ab(l, t[e]);
  else
    throw new RangeError("Unsupported child node: " + t);
}
let Re = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Td = typeof document < "u" ? document : { documentElement: { style: {} } };
const Od = /* @__PURE__ */ /Edge\/(\d+)/.exec(Re.userAgent), ub = /* @__PURE__ */ /MSIE \d/.test(Re.userAgent), Dd = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Re.userAgent), Ju = !!(ub || Dd || Od), s1 = !Ju && /* @__PURE__ */ /gecko\/(\d+)/i.test(Re.userAgent), Hh = !Ju && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Re.userAgent), r1 = "webkitFontSmoothing" in Td.documentElement.style, Ed = !Ju && /* @__PURE__ */ /Apple Computer/.test(Re.vendor), o1 = Ed && (/* @__PURE__ */ /Mobile\/\w+/.test(Re.userAgent) || Re.maxTouchPoints > 2);
var $ = {
  mac: o1 || /* @__PURE__ */ /Mac/.test(Re.platform),
  windows: /* @__PURE__ */ /Win/.test(Re.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Re.platform),
  ie: Ju,
  ie_version: ub ? Td.documentMode || 6 : Dd ? +Dd[1] : Od ? +Od[1] : 0,
  gecko: s1,
  gecko_version: s1 ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Re.userAgent) || [0, 0])[1] : 0,
  chrome: !!Hh,
  chrome_version: Hh ? +Hh[1] : 0,
  ios: o1,
  android: /* @__PURE__ */ /Android\b/.test(Re.userAgent),
  webkit: r1,
  webkit_version: r1 ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(Re.userAgent) || [0, 0])[1] : 0,
  safari: Ed,
  safari_version: Ed ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(Re.userAgent) || [0, 0])[1] : 0,
  tabSize: Td.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function dm(l, t) {
  for (let e in l)
    e == "class" && t.class ? t.class += " " + l.class : e == "style" && t.style ? t.style += ";" + l.style : t[e] = l[e];
  return t;
}
const Cu = /* @__PURE__ */ Object.create(null);
function mm(l, t, e) {
  if (l == t)
    return !0;
  l || (l = Cu), t || (t = Cu);
  let i = Object.keys(l), s = Object.keys(t);
  if (i.length - 0 != s.length - 0)
    return !1;
  for (let o of i)
    if (o != e && (s.indexOf(o) == -1 || l[o] !== t[o]))
      return !1;
  return !0;
}
function YA(l, t) {
  for (let e = l.attributes.length - 1; e >= 0; e--) {
    let i = l.attributes[e].name;
    t[i] == null && l.removeAttribute(i);
  }
  for (let e in t) {
    let i = t[e];
    e == "style" ? l.style.cssText = i : l.getAttribute(e) != i && l.setAttribute(e, i);
  }
}
function a1(l, t, e) {
  let i = !1;
  if (t)
    for (let s in t)
      e && s in e || (i = !0, s == "style" ? l.style.cssText = "" : l.removeAttribute(s));
  if (e)
    for (let s in e)
      t && t[s] == e[s] || (i = !0, s == "style" ? l.style.cssText = e[s] : l.setAttribute(s, e[s]));
  return i;
}
function GA(l) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < l.attributes.length; e++) {
    let i = l.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class Ji {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(t) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(t, e, i) {
    return !1;
  }
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(t) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(t, e, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(t) {
  }
}
var xe = /* @__PURE__ */ (function(l) {
  return l[l.Text = 0] = "Text", l[l.WidgetBefore = 1] = "WidgetBefore", l[l.WidgetAfter = 2] = "WidgetAfter", l[l.WidgetRange = 3] = "WidgetRange", l;
})(xe || (xe = {}));
class ut extends Qn {
  constructor(t, e, i, s) {
    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(t) {
    return new xo(t);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new El(t, e, e, i, t.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(t) {
    let e = !!t.block, i, s;
    if (t.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: o, end: u } = cb(t, e);
      i = (o ? e ? -3e8 : -1 : 5e8) - 1, s = (u ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new El(t, i, s, e, t.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(t) {
    return new wo(t);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(t, e = !1) {
    return Mt.of(t, e);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
ut.none = Mt.empty;
class xo extends ut {
  constructor(t) {
    let { start: e, end: i } = cb(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.attrs = t.class && t.attributes ? dm(t.attributes, { class: t.class }) : t.class ? { class: t.class } : t.attributes || Cu;
  }
  eq(t) {
    return this == t || t instanceof xo && this.tagName == t.tagName && mm(this.attrs, t.attrs);
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
xo.prototype.point = !1;
class wo extends ut {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof wo && this.spec.class == t.spec.class && mm(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
wo.prototype.mapMode = Be.TrackBefore;
wo.prototype.point = !0;
class El extends ut {
  constructor(t, e, i, s, o, u) {
    super(e, i, o, t), this.block = s, this.isReplace = u, this.mapMode = s ? e <= 0 ? Be.TrackBefore : Be.TrackAfter : Be.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? xe.WidgetRange : this.startSide <= 0 ? xe.WidgetBefore : xe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof El && KA(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
El.prototype.point = !0;
function cb(l, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: i } = l;
  return e == null && (e = l.inclusive), i == null && (i = l.inclusive), { start: e ?? t, end: i ?? t };
}
function KA(l, t) {
  return l == t || !!(l && t && l.compare(t));
}
function Ms(l, t, e, i = 0) {
  let s = e.length - 1;
  s >= 0 && e[s] + i >= l ? e[s] = Math.max(e[s], t) : e.push(l, t);
}
class oo extends Qn {
  constructor(t, e) {
    super(), this.tagName = t, this.attributes = e;
  }
  eq(t) {
    return t == this || t instanceof oo && this.tagName == t.tagName && mm(this.attributes, t.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(t) {
    return new oo(t.tagName, t.attributes || Cu);
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(t, e = !1) {
    return Mt.of(t, e);
  }
}
oo.prototype.startSide = oo.prototype.endSide = -1;
function ao(l) {
  let t;
  return l.nodeType == 11 ? t = l.getSelection ? l : l.ownerDocument : t = l, t.getSelection();
}
function Rd(l, t) {
  return t ? l == t || l.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function Ir(l, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return Rd(l, t.anchorNode);
  } catch {
    return !1;
  }
}
function $r(l) {
  return l.nodeType == 3 ? co(l, 0, l.nodeValue.length).getClientRects() : l.nodeType == 1 ? l.getClientRects() : [];
}
function to(l, t, e, i) {
  return e ? u1(l, t, e, i, -1) || u1(l, t, e, i, 1) : !1;
}
function Fn(l) {
  for (var t = 0; ; t++)
    if (l = l.previousSibling, !l)
      return t;
}
function ku(l) {
  return l.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(l.nodeName);
}
function u1(l, t, e, i, s) {
  for (; ; ) {
    if (l == e && t == i)
      return !0;
    if (t == (s < 0 ? 0 : mn(l))) {
      if (l.nodeName == "DIV")
        return !1;
      let o = l.parentNode;
      if (!o || o.nodeType != 1)
        return !1;
      t = Fn(l) + (s < 0 ? 0 : 1), l = o;
    } else if (l.nodeType == 1) {
      if (l = l.childNodes[t + (s < 0 ? -1 : 0)], l.nodeType == 1 && l.contentEditable == "false")
        return !1;
      t = s < 0 ? mn(l) : 0;
    } else
      return !1;
  }
}
function mn(l) {
  return l.nodeType == 3 ? l.nodeValue.length : l.childNodes.length;
}
function uo(l, t) {
  let e = t ? l.left : l.right;
  return { left: e, right: e, top: l.top, bottom: l.bottom };
}
function XA(l) {
  let t = l.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: l.innerWidth,
    top: 0,
    bottom: l.innerHeight
  };
}
function fb(l, t) {
  let e = t.width / l.offsetWidth, i = t.height / l.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - l.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - l.offsetHeight) < 1) && (i = 1), { scaleX: e, scaleY: i };
}
function WA(l, t, e, i, s, o, u, c) {
  let h = l.ownerDocument, m = h.defaultView || window;
  for (let p = l, y = !1; p && !y; )
    if (p.nodeType == 1) {
      let v, S = p == h.body, w = 1, A = 1;
      if (S)
        v = XA(m);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(p).position) && (y = !0), p.scrollHeight <= p.clientHeight && p.scrollWidth <= p.clientWidth) {
          p = p.assignedSlot || p.parentNode;
          continue;
        }
        let H = p.getBoundingClientRect();
        ({ scaleX: w, scaleY: A } = fb(p, H)), v = {
          left: H.left,
          right: H.left + p.clientWidth * w,
          top: H.top,
          bottom: H.top + p.clientHeight * A
        };
      }
      let M = 0, O = 0;
      if (s == "nearest")
        t.top < v.top + u ? (O = t.top - (v.top + u), e > 0 && t.bottom > v.bottom + O && (O = t.bottom - v.bottom + u)) : t.bottom > v.bottom - u && (O = t.bottom - v.bottom + u, e < 0 && t.top - O < v.top && (O = t.top - (v.top + u)));
      else {
        let H = t.bottom - t.top, z = v.bottom - v.top;
        O = (s == "center" && H <= z ? t.top + H / 2 - z / 2 : s == "start" || s == "center" && e < 0 ? t.top - u : t.bottom - z + u) - v.top;
      }
      if (i == "nearest" ? t.left < v.left + o ? (M = t.left - (v.left + o), e > 0 && t.right > v.right + M && (M = t.right - v.right + o)) : t.right > v.right - o && (M = t.right - v.right + o, e < 0 && t.left < v.left + M && (M = t.left - (v.left + o))) : M = (i == "center" ? t.left + (t.right - t.left) / 2 - (v.right - v.left) / 2 : i == "start" == c ? t.left - o : t.right - (v.right - v.left) + o) - v.left, M || O)
        if (S)
          m.scrollBy(M, O);
        else {
          let H = 0, z = 0;
          if (O) {
            let Q = p.scrollTop;
            p.scrollTop += O / A, z = (p.scrollTop - Q) * A;
          }
          if (M) {
            let Q = p.scrollLeft;
            p.scrollLeft += M / w, H = (p.scrollLeft - Q) * w;
          }
          t = {
            left: t.left - H,
            top: t.top - z,
            right: t.right - H,
            bottom: t.bottom - z
          }, H && Math.abs(H - M) < 1 && (i = "nearest"), z && Math.abs(z - O) < 1 && (s = "nearest");
        }
      if (S)
        break;
      (t.top < v.top || t.bottom > v.bottom || t.left < v.left || t.right > v.right) && (t = {
        left: Math.max(t.left, v.left),
        right: Math.min(t.right, v.right),
        top: Math.max(t.top, v.top),
        bottom: Math.min(t.bottom, v.bottom)
      }), p = p.assignedSlot || p.parentNode;
    } else if (p.nodeType == 11)
      p = p.host;
    else
      break;
}
function hb(l, t = !0) {
  let e = l.ownerDocument, i = null, s = null;
  for (let o = l.parentNode; o && !(o == e.body || (!t || i) && s); )
    if (o.nodeType == 1)
      !s && o.scrollHeight > o.clientHeight && (s = o), t && !i && o.scrollWidth > o.clientWidth && (i = o), o = o.assignedSlot || o.parentNode;
    else if (o.nodeType == 11)
      o = o.host;
    else
      break;
  return { x: i, y: s };
}
class QA {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: i } = t;
    this.set(e, Math.min(t.anchorOffset, e ? mn(e) : 0), i, Math.min(t.focusOffset, i ? mn(i) : 0));
  }
  set(t, e, i, s) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s;
  }
}
let xl = null;
$.safari && $.safari_version >= 26 && (xl = !1);
function db(l) {
  if (l.setActive)
    return l.setActive();
  if (xl)
    return l.focus(xl);
  let t = [];
  for (let e = l; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
    ;
  if (l.focus(xl == null ? {
    get preventScroll() {
      return xl = { preventScroll: !0 }, !0;
    }
  } : void 0), !xl) {
    xl = !1;
    for (let e = 0; e < t.length; ) {
      let i = t[e++], s = t[e++], o = t[e++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != o && (i.scrollLeft = o);
    }
  }
}
let c1;
function co(l, t, e = t) {
  let i = c1 || (c1 = document.createRange());
  return i.setEnd(l, e), i.setStart(l, t), i;
}
function Ts(l, t, e, i) {
  let s = { key: t, code: t, keyCode: e, which: e, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let o = new KeyboardEvent("keydown", s);
  o.synthetic = !0, l.dispatchEvent(o);
  let u = new KeyboardEvent("keyup", s);
  return u.synthetic = !0, l.dispatchEvent(u), o.defaultPrevented || u.defaultPrevented;
}
function ZA(l) {
  for (; l; ) {
    if (l && (l.nodeType == 9 || l.nodeType == 11 && l.host))
      return l;
    l = l.assignedSlot || l.parentNode;
  }
  return null;
}
function JA(l, t) {
  let e = t.focusNode, i = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != i)
    return !1;
  for (i = Math.min(i, mn(e)); ; )
    if (i) {
      if (e.nodeType != 1)
        return !1;
      let s = e.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (e = s, i = mn(e));
    } else {
      if (e == l)
        return !0;
      i = Fn(e), e = e.parentNode;
    }
}
function mb(l) {
  return l instanceof Window ? l.pageYOffset > Math.max(0, l.document.documentElement.scrollHeight - l.innerHeight - 4) : l.scrollTop > Math.max(1, l.scrollHeight - l.clientHeight - 4);
}
function pb(l, t) {
  for (let e = l, i = t; ; ) {
    if (e.nodeType == 3 && i > 0)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i - 1], i = mn(e);
    } else if (e.parentNode && !ku(e))
      i = Fn(e), e = e.parentNode;
    else
      return null;
  }
}
function gb(l, t) {
  for (let e = l, i = t; ; ) {
    if (e.nodeType == 3 && i < e.nodeValue.length)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i], i = 0;
    } else if (e.parentNode && !ku(e))
      i = Fn(e) + 1, e = e.parentNode;
    else
      return null;
  }
}
class Ci {
  constructor(t, e, i = !0) {
    this.node = t, this.offset = e, this.precise = i;
  }
  static before(t, e) {
    return new Ci(t.parentNode, Fn(t), e);
  }
  static after(t, e) {
    return new Ci(t.parentNode, Fn(t) + 1, e);
  }
}
var jt = /* @__PURE__ */ (function(l) {
  return l[l.LTR = 0] = "LTR", l[l.RTL = 1] = "RTL", l;
})(jt || (jt = {}));
const Rl = jt.LTR, pm = jt.RTL;
function yb(l) {
  let t = [];
  for (let e = 0; e < l.length; e++)
    t.push(1 << +l[e]);
  return t;
}
const FA = /* @__PURE__ */ yb("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), PA = /* @__PURE__ */ yb("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Bd = /* @__PURE__ */ Object.create(null), Li = [];
for (let l of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ l.charCodeAt(0), e = /* @__PURE__ */ l.charCodeAt(1);
  Bd[t] = e, Bd[e] = -t;
}
function vb(l) {
  return l <= 247 ? FA[l] : 1424 <= l && l <= 1524 ? 2 : 1536 <= l && l <= 1785 ? PA[l - 1536] : 1774 <= l && l <= 2220 ? 4 : 8192 <= l && l <= 8204 ? 256 : 64336 <= l && l <= 65023 ? 4 : 1;
}
const IA = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ji {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? pm : Rl;
  }
  /**
  @internal
  */
  constructor(t, e, i) {
    this.from = t, this.to = e, this.level = i;
  }
  /**
  @internal
  */
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(t, e) {
    return t == (this.dir == e);
  }
  /**
  @internal
  */
  static find(t, e, i, s) {
    let o = -1;
    for (let u = 0; u < t.length; u++) {
      let c = t[u];
      if (c.from <= e && c.to >= e) {
        if (c.level == i)
          return u;
        (o < 0 || (s != 0 ? s < 0 ? c.from < e : c.to > e : t[o].level > c.level)) && (o = u);
      }
    }
    if (o < 0)
      throw new RangeError("Index out of range");
    return o;
  }
}
function bb(l, t) {
  if (l.length != t.length)
    return !1;
  for (let e = 0; e < l.length; e++) {
    let i = l[e], s = t[e];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !bb(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const qt = [];
function $A(l, t, e, i, s) {
  for (let o = 0; o <= i.length; o++) {
    let u = o ? i[o - 1].to : t, c = o < i.length ? i[o].from : e, h = o ? 256 : s;
    for (let m = u, p = h, y = h; m < c; m++) {
      let v = vb(l.charCodeAt(m));
      v == 512 ? v = p : v == 8 && y == 4 && (v = 16), qt[m] = v == 4 ? 2 : v, v & 7 && (y = v), p = v;
    }
    for (let m = u, p = h, y = h; m < c; m++) {
      let v = qt[m];
      if (v == 128)
        m < c - 1 && p == qt[m + 1] && p & 24 ? v = qt[m] = p : qt[m] = 256;
      else if (v == 64) {
        let S = m + 1;
        for (; S < c && qt[S] == 64; )
          S++;
        let w = m && p == 8 || S < e && qt[S] == 8 ? y == 1 ? 1 : 8 : 256;
        for (let A = m; A < S; A++)
          qt[A] = w;
        m = S - 1;
      } else v == 8 && y == 1 && (qt[m] = 1);
      p = v, v & 7 && (y = v);
    }
  }
}
function tC(l, t, e, i, s) {
  let o = s == 1 ? 2 : 1;
  for (let u = 0, c = 0, h = 0; u <= i.length; u++) {
    let m = u ? i[u - 1].to : t, p = u < i.length ? i[u].from : e;
    for (let y = m, v, S, w; y < p; y++)
      if (S = Bd[v = l.charCodeAt(y)])
        if (S < 0) {
          for (let A = c - 3; A >= 0; A -= 3)
            if (Li[A + 1] == -S) {
              let M = Li[A + 2], O = M & 2 ? s : M & 4 ? M & 1 ? o : s : 0;
              O && (qt[y] = qt[Li[A]] = O), c = A;
              break;
            }
        } else {
          if (Li.length == 189)
            break;
          Li[c++] = y, Li[c++] = v, Li[c++] = h;
        }
      else if ((w = qt[y]) == 2 || w == 1) {
        let A = w == s;
        h = A ? 0 : 1;
        for (let M = c - 3; M >= 0; M -= 3) {
          let O = Li[M + 2];
          if (O & 2)
            break;
          if (A)
            Li[M + 2] |= 2;
          else {
            if (O & 4)
              break;
            Li[M + 2] |= 4;
          }
        }
      }
  }
}
function eC(l, t, e, i) {
  for (let s = 0, o = i; s <= e.length; s++) {
    let u = s ? e[s - 1].to : l, c = s < e.length ? e[s].from : t;
    for (let h = u; h < c; ) {
      let m = qt[h];
      if (m == 256) {
        let p = h + 1;
        for (; ; )
          if (p == c) {
            if (s == e.length)
              break;
            p = e[s++].to, c = s < e.length ? e[s].from : t;
          } else if (qt[p] == 256)
            p++;
          else
            break;
        let y = o == 1, v = (p < t ? qt[p] : i) == 1, S = y == v ? y ? 1 : 2 : i;
        for (let w = p, A = s, M = A ? e[A - 1].to : l; w > h; )
          w == M && (w = e[--A].from, M = A ? e[A - 1].to : l), qt[--w] = S;
        h = p;
      } else
        o = m, h++;
    }
  }
}
function Nd(l, t, e, i, s, o, u) {
  let c = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let h = t, m = 0; h < e; ) {
      let p = !0, y = !1;
      if (m == o.length || h < o[m].from) {
        let A = qt[h];
        A != c && (p = !1, y = A == 16);
      }
      let v = !p && c == 1 ? [] : null, S = p ? i : i + 1, w = h;
      t: for (; ; )
        if (m < o.length && w == o[m].from) {
          if (y)
            break t;
          let A = o[m];
          if (!p)
            for (let M = A.to, O = m + 1; ; ) {
              if (M == e)
                break t;
              if (O < o.length && o[O].from == M)
                M = o[O++].to;
              else {
                if (qt[M] == c)
                  break t;
                break;
              }
            }
          if (m++, v)
            v.push(A);
          else {
            A.from > h && u.push(new ji(h, A.from, S));
            let M = A.direction == Rl != !(S % 2);
            Ld(l, M ? i + 1 : i, s, A.inner, A.from, A.to, u), h = A.to;
          }
          w = A.to;
        } else {
          if (w == e || (p ? qt[w] != c : qt[w] == c))
            break;
          w++;
        }
      v ? Nd(l, h, w, i + 1, s, v, u) : h < w && u.push(new ji(h, w, S)), h = w;
    }
  else
    for (let h = e, m = o.length; h > t; ) {
      let p = !0, y = !1;
      if (!m || h > o[m - 1].to) {
        let A = qt[h - 1];
        A != c && (p = !1, y = A == 16);
      }
      let v = !p && c == 1 ? [] : null, S = p ? i : i + 1, w = h;
      t: for (; ; )
        if (m && w == o[m - 1].to) {
          if (y)
            break t;
          let A = o[--m];
          if (!p)
            for (let M = A.from, O = m; ; ) {
              if (M == t)
                break t;
              if (O && o[O - 1].to == M)
                M = o[--O].from;
              else {
                if (qt[M - 1] == c)
                  break t;
                break;
              }
            }
          if (v)
            v.push(A);
          else {
            A.to < h && u.push(new ji(A.to, h, S));
            let M = A.direction == Rl != !(S % 2);
            Ld(l, M ? i + 1 : i, s, A.inner, A.from, A.to, u), h = A.from;
          }
          w = A.from;
        } else {
          if (w == t || (p ? qt[w - 1] != c : qt[w - 1] == c))
            break;
          w--;
        }
      v ? Nd(l, w, h, i + 1, s, v, u) : w < h && u.push(new ji(w, h, S)), h = w;
    }
}
function Ld(l, t, e, i, s, o, u) {
  let c = t % 2 ? 2 : 1;
  $A(l, s, o, i, c), tC(l, s, o, i, c), eC(s, o, i, c), Nd(l, s, o, t, e, i, u);
}
function iC(l, t, e) {
  if (!l)
    return [new ji(0, 0, t == pm ? 1 : 0)];
  if (t == Rl && !e.length && !IA.test(l))
    return Sb(l.length);
  if (e.length)
    for (; l.length > qt.length; )
      qt[qt.length] = 256;
  let i = [], s = t == Rl ? 0 : 1;
  return Ld(l, s, s, e, 0, l.length, i), i;
}
function Sb(l) {
  return [new ji(0, l, 0)];
}
let xb = "";
function nC(l, t, e, i, s) {
  var o;
  let u = i.head - l.from, c = ji.find(t, u, (o = i.bidiLevel) !== null && o !== void 0 ? o : -1, i.assoc), h = t[c], m = h.side(s, e);
  if (u == m) {
    let v = c += s ? 1 : -1;
    if (v < 0 || v >= t.length)
      return null;
    h = t[c = v], u = h.side(!s, e), m = h.side(s, e);
  }
  let p = me(l.text, u, h.forward(s, e));
  (p < h.from || p > h.to) && (p = m), xb = l.text.slice(Math.min(u, p), Math.max(u, p));
  let y = c == (s ? t.length - 1 : 0) ? null : t[c + (s ? 1 : -1)];
  return y && p == m && y.level + (s ? 0 : 1) < h.level ? j.cursor(y.side(!s, e) + l.from, y.forward(s, e) ? 1 : -1, y.level) : j.cursor(p + l.from, h.forward(s, e) ? -1 : 1, h.level);
}
function lC(l, t, e) {
  for (let i = t; i < e; i++) {
    let s = vb(l.charCodeAt(i));
    if (s == 1)
      return Rl;
    if (s == 2 || s == 4)
      return pm;
  }
  return Rl;
}
const wb = /* @__PURE__ */ tt.define(), Ab = /* @__PURE__ */ tt.define(), Cb = /* @__PURE__ */ tt.define(), kb = /* @__PURE__ */ tt.define(), zd = /* @__PURE__ */ tt.define(), Mb = /* @__PURE__ */ tt.define(), Tb = /* @__PURE__ */ tt.define(), gm = /* @__PURE__ */ tt.define(), ym = /* @__PURE__ */ tt.define(), Ob = /* @__PURE__ */ tt.define({
  combine: (l) => l.some((t) => t)
}), Db = /* @__PURE__ */ tt.define({
  combine: (l) => l.some((t) => t)
}), Eb = /* @__PURE__ */ tt.define();
class Os {
  constructor(t, e, i, s, o, u = !1) {
    this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = o, this.isSnapshot = u;
  }
  map(t) {
    return t.empty ? this : new Os(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Os(j.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Qa = /* @__PURE__ */ vt.define({ map: (l, t) => l.map(t) }), Rb = /* @__PURE__ */ vt.define();
function Ye(l, t, e) {
  let i = l.facet(kb);
  i.length ? i[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
}
const hn = /* @__PURE__ */ tt.define({ combine: (l) => l.length ? l[0] : !0 });
let sC = 0;
const ws = /* @__PURE__ */ tt.define({
  combine(l) {
    return l.filter((t, e) => {
      for (let i = 0; i < e; i++)
        if (l[i].plugin == t.plugin)
          return !1;
      return !0;
    });
  }
});
class Zt {
  constructor(t, e, i, s, o) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = o(this), this.extension = this.baseExtensions.concat(ws.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(t) {
    return this.baseExtensions.concat(ws.of({ plugin: this, arg: t }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(t, e) {
    const { eventHandlers: i, eventObservers: s, provide: o, decorations: u } = e || {};
    return new Zt(sC++, t, i, s, (c) => {
      let h = [];
      return u && h.push(Fu.of((m) => {
        let p = m.plugin(c);
        return p ? u(p) : ut.none;
      })), o && h.push(o(c)), h;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(t, e) {
    return Zt.define((i, s) => new t(i, s), e);
  }
}
class _h {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (i) {
            if (Ye(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(t, this.spec.arg);
      } catch (e) {
        Ye(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Ye(t.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Bb = /* @__PURE__ */ tt.define(), vm = /* @__PURE__ */ tt.define(), Fu = /* @__PURE__ */ tt.define(), Nb = /* @__PURE__ */ tt.define(), bm = /* @__PURE__ */ tt.define(), Ao = /* @__PURE__ */ tt.define(), Lb = /* @__PURE__ */ tt.define();
function f1(l, t) {
  let e = l.state.facet(Lb);
  if (!e.length)
    return e;
  let i = e.map((o) => o instanceof Function ? o(l) : o), s = [];
  return Mt.spans(i, t.from, t.to, {
    point() {
    },
    span(o, u, c, h) {
      let m = o - t.from, p = u - t.from, y = s;
      for (let v = c.length - 1; v >= 0; v--, h--) {
        let S = c[v].spec.bidiIsolate, w;
        if (S == null && (S = lC(t.text, m, p)), h > 0 && y.length && (w = y[y.length - 1]).to == m && w.direction == S)
          w.to = p, y = w.inner;
        else {
          let A = { from: m, to: p, direction: S, inner: [] };
          y.push(A), y = A.inner;
        }
      }
    }
  }), s;
}
const zb = /* @__PURE__ */ tt.define();
function Sm(l) {
  let t = 0, e = 0, i = 0, s = 0;
  for (let o of l.state.facet(zb)) {
    let u = o(l);
    u && (u.left != null && (t = Math.max(t, u.left)), u.right != null && (e = Math.max(e, u.right)), u.top != null && (i = Math.max(i, u.top)), u.bottom != null && (s = Math.max(s, u.bottom)));
  }
  return { left: t, right: e, top: i, bottom: s };
}
const Wr = /* @__PURE__ */ tt.define();
class mi {
  constructor(t, e, i, s) {
    this.fromA = t, this.toA = e, this.fromB = i, this.toB = s;
  }
  join(t) {
    return new mi(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, i = this;
    for (; e > 0; e--) {
      let s = t[e - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, i), t;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let i = [];
    for (let s = 0, o = 0, u = 0; ; ) {
      let c = s < t.length ? t[s].fromB : 1e9, h = o < e.length ? e[o] : 1e9, m = Math.min(c, h);
      if (m == 1e9)
        break;
      let p = m + u, y = m, v = p;
      for (; ; )
        if (o < e.length && e[o] <= y) {
          let S = e[o + 1];
          o += 2, y = Math.max(y, S);
          for (let w = s; w < t.length && t[w].fromB <= y; w++)
            u = t[w].toA - t[w].toB;
          v = Math.max(v, S + u);
        } else if (s < t.length && t[s].fromB <= y) {
          let S = t[s++];
          y = Math.max(y, S.toB), v = Math.max(v, S.toA), u = S.toA - S.toB;
        } else
          break;
      i.push(new mi(p, v, m, y));
    }
    return i;
  }
}
class Mu {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = oe.empty(this.startState.doc.length);
    for (let o of i)
      this.changes = this.changes.compose(o.changes);
    let s = [];
    this.changes.iterChangedRanges((o, u, c, h) => s.push(new mi(o, u, c, h))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Mu(t, e, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const rC = [];
class It {
  constructor(t, e, i = 0) {
    this.dom = t, this.length = e, this.flags = i, this.parent = null, t.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return rC;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(t) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let e = this.domAttrs;
      e && YA(this.dom, e);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(t) {
    this.dom = t, t.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t, e = this.posAtStart) {
    let i = e;
    for (let s of this.children) {
      if (s == t)
        return i;
      i += s.length + s.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  covers(t) {
    return !0;
  }
  coordsIn(t, e) {
    return null;
  }
  domPosFor(t, e) {
    let i = Fn(this.dom), s = this.length ? t > 0 : e > 0;
    return new Ci(this.parent.dom, i + (s ? 1 : 0), t == 0 || t == this.length);
  }
  markDirty(t) {
    this.flags &= -3, t && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let t = this; t; t = t.parent)
      if (t instanceof Iu)
        return t;
    return null;
  }
  static get(t) {
    return t.cmTile;
  }
}
class Pu extends It {
  constructor(t) {
    super(t, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(t) {
    this.children.push(t), t.parent = this;
  }
  sync(t) {
    if (this.flags & 2)
      return;
    super.sync(t);
    let e = this.dom, i = null, s, o = t?.node == e ? t : null, u = 0;
    for (let c of this.children) {
      if (c.sync(t), u += c.length + c.breakAfter, s = i ? i.nextSibling : e.firstChild, o && s != c.dom && (o.written = !0), c.dom.parentNode == e)
        for (; s && s != c.dom; )
          s = h1(s);
      else
        e.insertBefore(c.dom, s);
      i = c.dom;
    }
    for (s = i ? i.nextSibling : e.firstChild, o && s && (o.written = !0); s; )
      s = h1(s);
    this.length = u;
  }
}
function h1(l) {
  let t = l.nextSibling;
  return l.parentNode.removeChild(l), t;
}
class Iu extends Pu {
  constructor(t, e) {
    super(e), this.view = t;
  }
  owns(t) {
    for (; t; t = t.parent)
      if (t == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(t) {
    for (; ; ) {
      if (!t)
        return null;
      let e = It.get(t);
      if (e && this.owns(e))
        return e;
      t = t.parentNode;
    }
  }
  blockTiles(t) {
    for (let e = [], i = this, s = 0, o = 0; ; )
      if (s == i.children.length) {
        if (!e.length)
          return;
        i = i.parent, i.breakAfter && o++, s = e.pop();
      } else {
        let u = i.children[s++];
        if (u instanceof dn)
          e.push(s), i = u, s = 0;
        else {
          let c = o + u.length, h = t(u, o);
          if (h !== void 0)
            return h;
          o = c + u.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(t, e) {
    let i, s = -1, o, u = -1;
    if (this.blockTiles((c, h) => {
      let m = h + c.length;
      if (t >= h && t <= m) {
        if (c.isWidget() && e >= -1 && e <= 1) {
          if (c.flags & 32)
            return !0;
          c.flags & 16 && (i = void 0);
        }
        (h < t || t == m && (e < -1 ? c.length : c.covers(1))) && (!i || !c.isWidget() && i.isWidget()) && (i = c, s = t - h), (m > t || t == h && (e > 1 ? c.length : c.covers(-1))) && (!o || !c.isWidget() && o.isWidget()) && (o = c, u = t - h);
      }
    }), !i && !o)
      throw new Error("No tile at position " + t);
    return i && e < 0 || !o ? { tile: i, offset: s } : { tile: o, offset: u };
  }
}
class dn extends Pu {
  constructor(t, e) {
    super(t), this.wrapper = e;
  }
  isBlock() {
    return !0;
  }
  covers(t) {
    return this.children.length ? t < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(t, e) {
    let i = new dn(e || document.createElement(t.tagName), t);
    return e || (i.flags |= 4), i;
  }
}
class Bs extends Pu {
  constructor(t, e) {
    super(t), this.attrs = e;
  }
  isLine() {
    return !0;
  }
  static start(t, e, i) {
    let s = new Bs(e || document.createElement("div"), t);
    return (!e || !i) && (s.flags |= 4), s;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(t, e, i) {
    let s = null, o = -1, u = null, c = -1;
    function h(p, y) {
      for (let v = 0, S = 0; v < p.children.length && S <= y; v++) {
        let w = p.children[v], A = S + w.length;
        A >= y && (w.isComposite() ? h(w, y - S) : (!u || u.isHidden && (e > 0 || i && aC(u, w))) && (A > y || w.flags & 32) ? (u = w, c = y - S) : (S < y || w.flags & 16 && !w.isHidden) && (s = w, o = y - S)), S = A;
      }
    }
    h(this, t);
    let m = (e < 0 ? s : u) || s || u;
    return m ? { tile: m, offset: m == s ? o : c } : null;
  }
  coordsIn(t, e) {
    let i = this.resolveInline(t, e, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), e) : oC(this);
  }
  domIn(t, e) {
    let i = this.resolveInline(t, e);
    if (i) {
      let { tile: s, offset: o } = i;
      if (this.dom.contains(s.dom))
        return s.isText() ? new Ci(s.dom, Math.min(s.dom.nodeValue.length, o)) : s.domPosFor(o, s.flags & 16 ? 1 : s.flags & 32 ? -1 : e);
      let u = i.tile.parent, c = !1;
      for (let h of u.children) {
        if (c)
          return new Ci(h.dom, 0);
        h == i.tile && (c = !0);
      }
    }
    return new Ci(this.dom, 0);
  }
}
function oC(l) {
  let t = l.dom.lastChild;
  if (!t)
    return l.dom.getBoundingClientRect();
  let e = $r(t);
  return e[e.length - 1] || null;
}
function aC(l, t) {
  let e = l.coordsIn(0, 1), i = t.coordsIn(0, 1);
  return e && i && i.top < e.bottom;
}
class je extends Pu {
  constructor(t, e) {
    super(t), this.mark = e;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(t, e) {
    let i = new je(e || document.createElement(t.tagName), t);
    return e || (i.flags |= 4), i;
  }
}
class kl extends It {
  constructor(t, e) {
    super(t, e.length), this.text = e;
  }
  sync(t) {
    this.flags & 2 || (super.sync(t), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(t, e) {
    let i = this.dom.nodeValue.length;
    t > i && (t = i);
    let s = t, o = t, u = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? $.chrome || $.gecko || (t ? (s--, u = 1) : o < i && (o++, u = -1)) : e < 0 ? s-- : o < i && o++;
    let c = co(this.dom, s, o).getClientRects();
    if (!c.length)
      return null;
    let h = c[(u ? u < 0 : e >= 0) ? 0 : c.length - 1];
    return $.safari && !u && h.width == 0 && (h = Array.prototype.find.call(c, (m) => m.width) || h), u ? uo(h, u < 0) : h || null;
  }
  static of(t, e) {
    let i = new kl(e || document.createTextNode(t), t);
    return e || (i.flags |= 2), i;
  }
}
class Bl extends It {
  constructor(t, e, i, s) {
    super(t, e, s), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(t) {
    return this.flags & 48 ? !1 : (this.flags & (t < 0 ? 64 : 128)) > 0;
  }
  coordsIn(t, e) {
    return this.coordsInWidget(t, e, !1);
  }
  coordsInWidget(t, e, i) {
    let s = this.widget.coordsAt(this.dom, t, e);
    if (s)
      return s;
    if (i)
      return uo(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0);
    {
      let o = this.dom.getClientRects(), u = null;
      if (!o.length)
        return null;
      let c = this.flags & 16 ? !0 : this.flags & 32 ? !1 : t > 0;
      for (let h = c ? o.length - 1 : 0; u = o[h], !(t > 0 ? h == 0 : h == o.length - 1 || u.top < u.bottom); h += c ? -1 : 1)
        ;
      return uo(u, !c);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return Et.empty;
    let { root: t } = this;
    if (!t)
      return Et.empty;
    let e = this.posAtStart;
    return t.view.state.doc.slice(e, e + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(t, e, i, s, o) {
    return o || (o = t.toDOM(e), t.editable || (o.contentEditable = "false")), new Bl(o, i, t, s);
  }
}
class Tu extends It {
  constructor(t) {
    let e = document.createElement("img");
    e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), super(e, 0, t);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return Et.empty;
  }
  coordsIn(t) {
    return this.dom.getBoundingClientRect();
  }
}
class uC {
  constructor(t) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = t;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(t, e, i) {
    let { tile: s, index: o, beforeBreak: u, parents: c } = this;
    for (; t || e > 0; )
      if (s.isComposite())
        if (u) {
          if (!t)
            break;
          i && i.break(), t--, u = !1;
        } else if (o == s.children.length) {
          if (!t && !c.length)
            break;
          i && i.leave(s), u = !!s.breakAfter, { tile: s, index: o } = c.pop(), o++;
        } else {
          let h = s.children[o], m = h.breakAfter;
          (e > 0 ? h.length <= t : h.length < t) && (!i || i.skip(h, 0, h.length) !== !1 || !h.isComposite) ? (u = !!m, o++, t -= h.length) : (c.push({ tile: s, index: o }), s = h, o = 0, i && h.isComposite() && i.enter(h));
        }
      else if (o == s.length)
        u = !!s.breakAfter, { tile: s, index: o } = c.pop(), o++;
      else if (t) {
        let h = Math.min(t, s.length - o);
        i && i.skip(s, o, o + h), t -= h, o += h;
      } else
        break;
    return this.tile = s, this.index = o, this.beforeBreak = u, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class cC {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.wrapper = i, this.rank = s;
  }
}
class fC {
  constructor(t, e, i) {
    this.cache = t, this.root = e, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(t, e, i, s) {
    var o;
    this.flushBuffer();
    let u = this.ensureMarks(e, i), c = u.lastChild;
    if (c && c.isText() && !(c.flags & 8) && c.length + t.length < 512) {
      this.cache.reused.set(
        c,
        2
        /* Reused.DOM */
      );
      let h = u.children[u.children.length - 1] = new kl(c.dom, c.text + t);
      h.parent = u;
    } else
      u.append(s || kl.of(t, (o = this.cache.find(kl)) === null || o === void 0 ? void 0 : o.dom));
    this.pos += t.length, this.afterWidget = null;
  }
  addComposition(t, e) {
    let i = this.curLine;
    i.dom != e.line.dom && (i.setDOM(this.cache.reused.has(e.line) ? Uh(e.line.dom) : e.line.dom), this.cache.reused.set(
      e.line,
      2
      /* Reused.DOM */
    ));
    let s = i;
    for (let c = e.marks.length - 1; c >= 0; c--) {
      let h = e.marks[c], m = s.lastChild;
      if (m instanceof je && m.mark.eq(h.mark))
        m.dom != h.dom && m.setDOM(Uh(h.dom)), s = m;
      else {
        if (this.cache.reused.get(h)) {
          let y = It.get(h.dom);
          y && y.setDOM(Uh(h.dom));
        }
        let p = je.of(h.mark, h.dom);
        s.append(p), s = p;
      }
      this.cache.reused.set(
        h,
        2
        /* Reused.DOM */
      );
    }
    let o = It.get(t.text);
    o && this.cache.reused.set(
      o,
      2
      /* Reused.DOM */
    );
    let u = new kl(t.text, t.text.nodeValue);
    u.flags |= 8, s.append(u);
  }
  addInlineWidget(t, e, i) {
    let s = this.afterWidget && t.flags & 48 && (this.afterWidget.flags & 48) == (t.flags & 48);
    s || this.flushBuffer();
    let o = this.ensureMarks(e, i);
    !s && !(t.flags & 16) && o.append(this.getBuffer(1)), o.append(t), this.pos += t.length, this.afterWidget = t;
  }
  addMark(t, e, i) {
    this.flushBuffer(), this.ensureMarks(e, i).append(t), this.pos += t.length, this.afterWidget = null;
  }
  addBlockWidget(t) {
    this.getBlockPos().append(t), this.pos += t.length, this.lastBlock = t, this.endLine();
  }
  continueWidget(t) {
    let e = this.afterWidget || this.lastBlock;
    e.length += t, this.pos += t;
  }
  addLineStart(t, e) {
    var i;
    t || (t = Hb);
    let s = Bs.start(t, e || ((i = this.cache.find(Bs)) === null || i === void 0 ? void 0 : i.dom), !!e);
    this.getBlockPos().append(this.lastBlock = this.curLine = s);
  }
  addLine(t) {
    this.getBlockPos().append(t), this.pos += t.length, this.lastBlock = t, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(t) {
    this.blockPosCovered() || this.addLineStart(t);
  }
  ensureLine(t) {
    this.curLine || this.addLineStart(t);
  }
  ensureMarks(t, e) {
    var i;
    let s = this.curLine;
    for (let o = t.length - 1; o >= 0; o--) {
      let u = t[o], c;
      if (e > 0 && (c = s.lastChild) && c instanceof je && c.mark.eq(u))
        s = c, e--;
      else {
        let h = je.of(u, (i = this.cache.find(je, (m) => m.mark.eq(u))) === null || i === void 0 ? void 0 : i.dom);
        s.append(h), s = h, e = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let t = this.curLine.lastChild;
      (!t || !d1(this.curLine, !1) || t.dom.nodeName != "BR" && t.isWidget() && !($.ios && d1(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Vh,
        0,
        32
        /* TileFlag.After */
      ) || new Bl(
        Vh.toDOM(),
        0,
        Vh,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let t = this.wrappers.length - 1; t >= 0; t--)
      this.wrappers[t].to < this.pos && this.wrappers.splice(t, 1);
    for (let t = this.blockWrappers; t.value && t.from <= this.pos; t.next())
      if (t.to >= this.pos) {
        let e = new cC(t.from, t.to, t.value, t.rank), i = this.wrappers.length;
        for (; i > 0 && (this.wrappers[i - 1].rank - e.rank || this.wrappers[i - 1].to - e.to) < 0; )
          i--;
        this.wrappers.splice(i, 0, e);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var t;
    this.updateBlockWrappers();
    let e = this.root;
    for (let i of this.wrappers) {
      let s = e.lastChild;
      if (i.from < this.pos && s instanceof dn && s.wrapper.eq(i.wrapper))
        e = s;
      else {
        let o = dn.of(i.wrapper, (t = this.cache.find(dn, (u) => u.wrapper.eq(i.wrapper))) === null || t === void 0 ? void 0 : t.dom);
        e.append(o), e = o;
      }
    }
    return e;
  }
  blockPosCovered() {
    let t = this.lastBlock;
    return t != null && !t.breakAfter && (!t.isWidget() || (t.flags & 160) > 0);
  }
  getBuffer(t) {
    let e = 2 | (t < 0 ? 16 : 32), i = this.cache.find(
      Tu,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = e), i || new Tu(e);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class hC {
  constructor(t) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = t.iter();
  }
  skip(t) {
    this.textOff + t <= this.text.length ? this.textOff += t : (this.skipCount += t - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(t) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: o, done: u } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, u)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let c = this.textOff = Math.min(t, s.length);
      return o ? null : s.slice(0, c);
    }
    let e = Math.min(this.text.length, this.textOff + t), i = this.text.slice(this.textOff, e);
    return this.textOff = e, i;
  }
}
const Ou = [Bl, Bs, kl, je, Tu, dn, Iu];
for (let l = 0; l < Ou.length; l++)
  Ou[l].bucket = l;
class dC {
  constructor(t) {
    this.view = t, this.buckets = Ou.map(() => []), this.index = Ou.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(t) {
    let e = t.constructor.bucket, i = this.buckets[e];
    i.length < 6 ? i.push(t) : i[
      this.index[e] = (this.index[e] + 1) % 6
      /* C.Bucket */
    ] = t;
  }
  find(t, e, i = 2) {
    let s = t.bucket, o = this.buckets[s], u = this.index[s];
    for (let c = o.length - 1; c >= 0; c--) {
      let h = (c + u) % o.length, m = o[h];
      if ((!e || e(m)) && !this.reused.has(m))
        return o.splice(h, 1), h < u && this.index[s]--, this.reused.set(m, i), m;
    }
    return null;
  }
  findWidget(t, e, i) {
    let s = this.buckets[0];
    if (s.length)
      for (let o = 0, u = 0; ; o++) {
        if (o == s.length) {
          if (u)
            return null;
          u = 1, o = 0;
        }
        let c = s[o];
        if (!this.reused.has(c) && (u == 0 ? c.widget.compare(t) : c.widget.constructor == t.constructor && t.updateDOM(c.dom, this.view, c.widget)))
          return s.splice(o, 1), o < this.index[0] && this.index[0]--, c.widget == t && c.length == e && (c.flags & 497) == i ? (this.reused.set(
            c,
            1
            /* Reused.Full */
          ), c) : (this.reused.set(
            c,
            2
            /* Reused.DOM */
          ), new Bl(c.dom, e, t, c.flags & -498 | i));
      }
  }
  reuse(t) {
    return this.reused.set(
      t,
      1
      /* Reused.Full */
    ), t;
  }
  maybeReuse(t, e = 2) {
    if (!this.reused.has(t))
      return this.reused.set(t, e), t.dom;
  }
  clear() {
    for (let t = 0; t < this.buckets.length; t++)
      this.buckets[t].length = this.index[t] = 0;
  }
}
class mC {
  constructor(t, e, i, s, o) {
    this.view = t, this.decorations = s, this.disallowBlockEffectsFor = o, this.openWidget = !1, this.openMarks = 0, this.cache = new dC(t), this.text = new hC(t.state.doc), this.builder = new fC(this.cache, new Iu(t, t.contentDOM), Mt.iter(i)), this.cache.reused.set(
      e,
      2
      /* Reused.DOM */
    ), this.old = new uC(e), this.reuseWalker = {
      skip: (u, c, h) => {
        if (this.cache.add(u), u.isComposite())
          return !1;
      },
      enter: (u) => this.cache.add(u),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(t, e) {
    let i = e && this.getCompositionContext(e.text);
    for (let s = 0, o = 0, u = 0; ; ) {
      let c = u < t.length ? t[u++] : null, h = c ? c.fromA : this.old.root.length;
      if (h > s) {
        let m = h - s;
        this.preserve(m, !u, !c), s = h, o += m;
      }
      if (!c)
        break;
      e && c.fromA <= e.range.fromA && c.toA >= e.range.toA ? (this.forward(c.fromA, e.range.fromA, e.range.fromA < e.range.toA ? 1 : -1), this.emit(o, e.range.fromB), this.cache.clear(), this.builder.addComposition(e, i), this.text.skip(e.range.toB - e.range.fromB), this.forward(e.range.fromA, c.toA), this.emit(e.range.toB, c.toB)) : (this.forward(c.fromA, c.toA), this.emit(o, c.toB)), o = c.toB, s = c.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(t, e, i) {
    let s = yC(this.old), o = this.openMarks;
    this.old.advance(t, i ? 1 : -1, {
      skip: (u, c, h) => {
        if (u.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(h - c);
          else {
            let m = h > 0 || c < u.length ? Bl.of(u.widget, this.view, h - c, u.flags & 496, this.cache.maybeReuse(u)) : this.cache.reuse(u);
            m.flags & 256 ? (m.flags &= -2, this.builder.addBlockWidget(m)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(m, s, o), o = s.length);
          }
        else if (u.isText())
          this.builder.ensureLine(null), !c && h == u.length && !this.cache.reused.has(u) ? this.builder.addText(u.text, s, o, this.cache.reuse(u)) : (this.cache.add(u), this.builder.addText(u.text.slice(c, h), s, o)), o = s.length;
        else if (u.isLine())
          u.flags &= -2, this.cache.reused.set(
            u,
            1
            /* Reused.Full */
          ), this.builder.addLine(u);
        else if (u instanceof Tu)
          this.cache.add(u);
        else if (u instanceof je)
          this.builder.ensureLine(null), this.builder.addMark(u, s, o), this.cache.reused.set(
            u,
            1
            /* Reused.Full */
          ), o = s.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (u) => {
        u.isLine() ? this.builder.addLineStart(u.attrs, this.cache.maybeReuse(u)) : (this.cache.add(u), u instanceof je && s.unshift(u.mark)), this.openWidget = !1;
      },
      leave: (u) => {
        u.isLine() ? s.length && (s.length = o = 0) : u instanceof je && (s.shift(), o = Math.min(o, s.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(t);
  }
  emit(t, e) {
    let i = null, s = this.builder, o = 0, u = Mt.spans(this.decorations, t, e, {
      point: (c, h, m, p, y, v) => {
        if (m instanceof El) {
          if (this.disallowBlockEffectsFor[v]) {
            if (m.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (h > this.view.state.doc.lineAt(c).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (o = p.length, y > p.length)
            s.continueWidget(h - c);
          else {
            let S = m.widget || (m.block ? Ns.block : Ns.inline), w = pC(m), A = this.cache.findWidget(S, h - c, w) || Bl.of(S, this.view, h - c, w);
            m.block ? (m.startSide > 0 && s.addLineStartIfNotCovered(i), s.addBlockWidget(A)) : (s.ensureLine(i), s.addInlineWidget(A, p, y));
          }
          i = null;
        } else
          i = gC(i, m);
        h > c && this.text.skip(h - c);
      },
      span: (c, h, m, p) => {
        for (let y = c; y < h; ) {
          let v = this.text.next(Math.min(512, h - y));
          v == null ? (s.addLineStartIfNotCovered(i), s.addBreak(), y++) : (s.ensureLine(i), s.addText(v, m, y == c ? p : m.length), y += v.length), i = null;
        }
      }
    });
    s.addLineStartIfNotCovered(i), this.openWidget = u > o, this.openMarks = u;
  }
  forward(t, e, i = 1) {
    e - t <= 10 ? this.old.advance(e - t, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(e - t - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(t) {
    let e = [], i = null;
    for (let s = t.parentNode; ; s = s.parentNode) {
      let o = It.get(s);
      if (s == this.view.contentDOM)
        break;
      o instanceof je ? e.push(o) : o?.isLine() ? i = o : o instanceof dn || (s.nodeName == "DIV" && !i && s != this.view.contentDOM ? i = new Bs(s, Hb) : i || e.push(je.of(new xo({ tagName: s.nodeName.toLowerCase(), attributes: GA(s) }), s)));
    }
    return { line: i, marks: e };
  }
}
function d1(l, t) {
  let e = (i) => {
    for (let s of i.children)
      if ((t ? s.isText() : s.length) || e(s))
        return !0;
    return !1;
  };
  return e(l);
}
function pC(l) {
  let t = l.isReplace ? (l.startSide < 0 ? 64 : 0) | (l.endSide > 0 ? 128 : 0) : l.startSide > 0 ? 32 : 16;
  return l.block && (t |= 256), t;
}
const Hb = { class: "cm-line" };
function gC(l, t) {
  let e = t.spec.attributes, i = t.spec.class;
  return !e && !i || (l || (l = { class: "cm-line" }), e && dm(e, l), i && (l.class += " " + i)), l;
}
function yC(l) {
  let t = [];
  for (let e = l.parents.length; e > 1; e--) {
    let i = e == l.parents.length ? l.tile : l.parents[e].tile;
    i instanceof je && t.push(i.mark);
  }
  return t;
}
function Uh(l) {
  let t = It.get(l);
  return t && t.setDOM(l.cloneNode()), l;
}
class Ns extends Ji {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Ns.inline = /* @__PURE__ */ new Ns("span");
Ns.block = /* @__PURE__ */ new Ns("div");
const Vh = /* @__PURE__ */ new class extends Ji {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class m1 {
  constructor(t) {
    this.view = t, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = ut.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Iu(t, t.contentDOM), this.updateInner([new mi(0, 0, 0, t.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(t) {
    var e;
    let i = t.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: p, toA: y }) => y < this.minWidthFrom || p > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !MC(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
    let o = s > -1 ? bC(this.view, t.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: p, to: y } = this.hasComposition;
      i = new mi(p, y, t.changes.mapPos(p, -1), t.changes.mapPos(y, 1)).addToSet(i.slice());
    }
    this.hasComposition = o ? { from: o.range.fromB, to: o.range.toB } : null, ($.ie || $.chrome) && !o && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let u = this.decorations, c = this.blockWrappers;
    this.updateDeco();
    let h = wC(u, this.decorations, t.changes);
    h.length && (i = mi.extendWithRanges(i, h));
    let m = CC(c, this.blockWrappers, t.changes);
    return m.length && (i = mi.extendWithRanges(i, m)), o && !i.some((p) => p.fromA <= o.range.fromA && p.toA >= o.range.toA) && (i = o.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, o), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(t, e) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (e || t.length) {
        let u = this.tile, c = new mC(this.view, u, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        e && It.get(e.text) && c.cache.reused.set(
          It.get(e.text),
          2
          /* Reused.DOM */
        ), this.tile = c.run(t, e), Hd(u, c.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = $.chrome || $.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(o), o && (o.written || i.selectionRange.focusNode != o.node || !this.tile.dom.contains(o.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.tile.children)
        o.isWidget() && o.widget instanceof qh && s.push(o.dom);
    i.updateGaps(s);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(Rb) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, s = this.view.root.activeElement, o = s == i, u = !o && !(this.view.state.facet(hn) || i.tabIndex > -1) && Ir(i, this.view.observer.selectionRange) && !(s && i.contains(s));
    if (!(o || e || u))
      return;
    let c = this.forceSelection;
    this.forceSelection = !1;
    let h = this.view.state.selection.main, m, p;
    if (h.empty ? p = m = this.inlineDOMNearPos(h.anchor, h.assoc || 1) : (p = this.inlineDOMNearPos(h.head, h.head == h.from ? 1 : -1), m = this.inlineDOMNearPos(h.anchor, h.anchor == h.from ? 1 : -1)), $.gecko && h.empty && !this.hasComposition && vC(m)) {
      let v = document.createTextNode("");
      this.view.observer.ignore(() => m.node.insertBefore(v, m.node.childNodes[m.offset] || null)), m = p = new Ci(v, 0), c = !0;
    }
    let y = this.view.observer.selectionRange;
    (c || !y.focusNode || (!to(m.node, m.offset, y.anchorNode, y.anchorOffset) || !to(p.node, p.offset, y.focusNode, y.focusOffset)) && !this.suppressWidgetCursorChange(y, h)) && (this.view.observer.ignore(() => {
      $.android && $.chrome && i.contains(y.focusNode) && kC(y.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let v = ao(this.view.root);
      if (v) if (h.empty) {
        if ($.gecko) {
          let S = SC(m.node, m.offset);
          if (S && S != 3) {
            let w = (S == 1 ? pb : gb)(m.node, m.offset);
            w && (m = new Ci(w.node, w.offset));
          }
        }
        v.collapse(m.node, m.offset), h.bidiLevel != null && v.caretBidiLevel !== void 0 && (v.caretBidiLevel = h.bidiLevel);
      } else if (v.extend) {
        v.collapse(m.node, m.offset);
        try {
          v.extend(p.node, p.offset);
        } catch {
        }
      } else {
        let S = document.createRange();
        h.anchor > h.head && ([m, p] = [p, m]), S.setEnd(p.node, p.offset), S.setStart(m.node, m.offset), v.removeAllRanges(), v.addRange(S);
      }
      u && this.view.root.activeElement == i && (i.blur(), s && s.focus());
    }), this.view.observer.setSelectionRange(m, p)), this.impreciseAnchor = m.precise ? null : new Ci(y.anchorNode, y.anchorOffset), this.impreciseHead = p.precise ? null : new Ci(y.focusNode, y.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && to(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = ao(t.root), { anchorNode: s, anchorOffset: o } = t.observer.selectionRange;
    if (!i || !e.empty || !e.assoc || !i.modify)
      return;
    let u = this.lineAt(e.head, e.assoc);
    if (!u)
      return;
    let c = u.posAtStart;
    if (e.head == c || e.head == c + u.length)
      return;
    let h = this.coordsAt(e.head, -1), m = this.coordsAt(e.head, 1);
    if (!h || !m || h.bottom > m.top)
      return;
    let p = this.domAtPos(e.head + e.assoc, e.assoc);
    i.collapse(p.node, p.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let y = t.observer.selectionRange;
    t.docView.posFromDOM(y.anchorNode, y.anchorOffset) != e.from && i.collapse(s, o);
  }
  posFromDOM(t, e) {
    let i = this.tile.nearest(t);
    if (!i)
      return this.tile.dom.compareDocumentPosition(t) & 2 ? 0 : this.view.state.doc.length;
    let s = i.posAtStart;
    if (i.isComposite()) {
      let o;
      if (t == i.dom)
        o = i.dom.childNodes[e];
      else {
        let u = mn(t) == 0 ? 0 : e == 0 ? -1 : 1;
        for (; ; ) {
          let c = t.parentNode;
          if (c == i.dom)
            break;
          u == 0 && c.firstChild != c.lastChild && (t == c.firstChild ? u = -1 : u = 1), t = c;
        }
        u < 0 ? o = t : o = t.nextSibling;
      }
      if (o == i.dom.firstChild)
        return s;
      for (; o && !It.get(o); )
        o = o.nextSibling;
      if (!o)
        return s + i.length;
      for (let u = 0, c = s; ; u++) {
        let h = i.children[u];
        if (h.dom == o)
          return c;
        c += h.length + h.breakAfter;
      }
    } else return i.isText() ? t == i.dom ? s + e : s + (e ? i.length : 0) : s;
  }
  domAtPos(t, e) {
    let { tile: i, offset: s } = this.tile.resolveBlock(t, e);
    return i.isWidget() ? i.domPosFor(t, e) : i.domIn(s, e);
  }
  inlineDOMNearPos(t, e) {
    let i, s = -1, o = !1, u, c = -1, h = !1;
    return this.tile.blockTiles((m, p) => {
      if (m.isWidget()) {
        if (m.flags & 32 && p >= t)
          return !0;
        m.flags & 16 && (o = !0);
      } else {
        let y = p + m.length;
        if (p <= t && (i = m, s = t - p, o = y < t), y >= t && !u && (u = m, c = t - p, h = p > t), p > t && u)
          return !0;
      }
    }), !i && !u ? this.domAtPos(t, e) : (o && u ? i = null : h && i && (u = null), i && e < 0 || !u ? i.domIn(s, e) : u.domIn(c, e));
  }
  coordsAt(t, e) {
    let { tile: i, offset: s } = this.tile.resolveBlock(t, e);
    return i.isWidget() ? i.widget instanceof qh ? null : i.coordsInWidget(s, e, !0) : i.coordsIn(s, e);
  }
  lineAt(t, e) {
    let { tile: i } = this.tile.resolveBlock(t, e);
    return i.isLine() ? i : null;
  }
  coordsForChar(t) {
    let { tile: e, offset: i } = this.tile.resolveBlock(t, 1);
    if (!e.isLine())
      return null;
    function s(o, u) {
      if (o.isComposite())
        for (let c of o.children) {
          if (c.length >= u) {
            let h = s(c, u);
            if (h)
              return h;
          }
          if (u -= c.length, u < 0)
            break;
        }
      else if (o.isText() && u < o.length) {
        let c = me(o.text, u);
        if (c == u)
          return null;
        let h = co(o.dom, u, c).getClientRects();
        for (let m = 0; m < h.length; m++) {
          let p = h[m];
          if (m == h.length - 1 || p.top < p.bottom && p.left < p.right)
            return p;
        }
      }
      return null;
    }
    return s(e, i);
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: i, to: s } = t, o = this.view.contentDOM.clientWidth, u = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, c = -1, h = this.view.textDirection == jt.LTR, m = 0, p = (y, v, S) => {
      for (let w = 0; w < y.children.length && !(v > s); w++) {
        let A = y.children[w], M = v + A.length, O = A.dom.getBoundingClientRect(), { height: H } = O;
        if (S && !w && (m += O.top - S.top), A instanceof dn)
          M > i && p(A, v, O);
        else if (v >= i && (m > 0 && e.push(-m), e.push(H + m), m = 0, u)) {
          let z = A.dom.lastChild, Q = z ? $r(z) : [];
          if (Q.length) {
            let _ = Q[Q.length - 1], K = h ? _.right - O.left : O.right - _.left;
            K > c && (c = K, this.minWidth = o, this.minWidthFrom = v, this.minWidthTo = M);
          }
        }
        S && w == y.children.length - 1 && (m += S.bottom - O.bottom), v = M + A.breakAfter;
      }
    };
    return p(this.tile, 0, null), e;
  }
  textDirectionAt(t) {
    let { tile: e } = this.tile.resolveBlock(t, 1);
    return getComputedStyle(e.dom).direction == "rtl" ? jt.RTL : jt.LTR;
  }
  measureTextSize() {
    let t = this.tile.blockTiles((u) => {
      if (u.isLine() && u.children.length && u.length <= 20) {
        let c = 0, h;
        for (let m of u.children) {
          if (!m.isText() || /[^ -~]/.test(m.text))
            return;
          let p = $r(m.dom);
          if (p.length != 1)
            return;
          c += p[0].width, h = p[0].height;
        }
        if (c)
          return {
            lineHeight: u.dom.getBoundingClientRect().height,
            charWidth: c / u.length,
            textHeight: h
          };
      }
    });
    if (t)
      return t;
    let e = document.createElement("div"), i, s, o;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(e);
      let u = $r(e.firstChild)[0];
      i = e.getBoundingClientRect().height, s = u && u.width ? u.width / 27 : 7, o = u && u.height ? u.height : i, e.remove();
    }), { lineHeight: i, charWidth: s, textHeight: o };
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let o = s == e.viewports.length ? null : e.viewports[s], u = o ? o.from - 1 : this.view.state.doc.length;
      if (u > i) {
        let c = (e.lineBlockAt(u).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
        t.push(ut.replace({
          widget: new qh(c),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, u));
      }
      if (!o)
        break;
      i = o.to + 1;
    }
    return ut.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(Fu).map((o) => (this.dynamicDecorationMap[t++] = typeof o == "function") ? o(this.view) : o), i = !1, s = this.view.state.facet(bm).map((o, u) => {
      let c = typeof o == "function";
      return c && (i = !0), c ? o(this.view) : o;
    });
    for (s.length && (this.dynamicDecorationMap[t++] = i, e.push(Mt.join(s))), this.decorations = [
      this.editContextFormatting,
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = !1;
    this.blockWrappers = this.view.state.facet(Nb).map((o) => typeof o == "function" ? o(this.view) : o);
  }
  scrollIntoView(t) {
    var e;
    if (t.isSnapshot) {
      let p = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = p.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let p of this.view.state.facet(Eb))
      try {
        if (p(this.view, t.range, t))
          return !0;
      } catch (y) {
        Ye(this.view.state, y, "scroll handler");
      }
    let { range: i } = t, s = this.coordsAt(i.head, (e = i.assoc) !== null && e !== void 0 ? e : i.empty ? 0 : i.head > i.anchor ? -1 : 1), o;
    if (!s)
      return;
    !i.empty && (o = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (s = {
      left: Math.min(s.left, o.left),
      top: Math.min(s.top, o.top),
      right: Math.max(s.right, o.right),
      bottom: Math.max(s.bottom, o.bottom)
    });
    let u = Sm(this.view), c = {
      left: s.left - u.left,
      top: s.top - u.top,
      right: s.right + u.right,
      bottom: s.bottom + u.bottom
    }, { offsetWidth: h, offsetHeight: m } = this.view.scrollDOM;
    if (WA(this.view.scrollDOM, c, i.head < i.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, h), -h), Math.max(Math.min(t.yMargin, m), -m), this.view.textDirection == jt.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (s.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || s.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let p = this.view.docView.lineAt(i.head, 1);
      p && p.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(t) {
    let e = (i) => i.isWidget() || i.children.some(e);
    return e(this.tile.resolveBlock(t, 1).tile);
  }
  destroy() {
    Hd(this.tile);
  }
}
function Hd(l, t) {
  let e = t?.get(l);
  if (e != 1) {
    e == null && l.destroy();
    for (let i of l.children)
      Hd(i, t);
  }
}
function vC(l) {
  return l.node.nodeType == 1 && l.node.firstChild && (l.offset == 0 || l.node.childNodes[l.offset - 1].contentEditable == "false") && (l.offset == l.node.childNodes.length || l.node.childNodes[l.offset].contentEditable == "false");
}
function _b(l, t) {
  let e = l.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let i = pb(e.focusNode, e.focusOffset), s = gb(e.focusNode, e.focusOffset), o = i || s;
  if (s && i && s.node != i.node) {
    let c = It.get(s.node);
    if (!c || c.isText() && c.text != s.node.nodeValue)
      o = s;
    else if (l.docView.lastCompositionAfterCursor) {
      let h = It.get(i.node);
      !h || h.isText() && h.text != i.node.nodeValue || (o = s);
    }
  }
  if (l.docView.lastCompositionAfterCursor = o != i, !o)
    return null;
  let u = t - o.offset;
  return { from: u, to: u + o.node.nodeValue.length, node: o.node };
}
function bC(l, t, e) {
  let i = _b(l, e);
  if (!i)
    return null;
  let { node: s, from: o, to: u } = i, c = s.nodeValue;
  if (/[\n\r]/.test(c) || l.state.doc.sliceString(i.from, i.to) != c)
    return null;
  let h = t.invertedDesc;
  return { range: new mi(h.mapPos(o), h.mapPos(u), o, u), text: s };
}
function SC(l, t) {
  return l.nodeType != 1 ? 0 : (t && l.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < l.childNodes.length && l.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let xC = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    Ms(t, e, this.changes);
  }
  comparePoint(t, e) {
    Ms(t, e, this.changes);
  }
  boundChange(t) {
    Ms(t, t, this.changes);
  }
};
function wC(l, t, e) {
  let i = new xC();
  return Mt.compare(l, t, e, i), i.changes;
}
class AC {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    Ms(t, e, this.changes);
  }
  comparePoint() {
  }
  boundChange(t) {
    Ms(t, t, this.changes);
  }
}
function CC(l, t, e) {
  let i = new AC();
  return Mt.compare(l, t, e, i), i.changes;
}
function kC(l, t) {
  for (let e = l; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function MC(l, t) {
  let e = !1;
  return t && l.iterChangedRanges((i, s) => {
    i < t.to && s > t.from && (e = !0);
  }), e;
}
class qh extends Ji {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function TC(l, t, e = 1) {
  let i = l.charCategorizer(t), s = l.doc.lineAt(t), o = t - s.from;
  if (s.length == 0)
    return j.cursor(t);
  o == 0 ? e = 1 : o == s.length && (e = -1);
  let u = o, c = o;
  e < 0 ? u = me(s.text, o, !1) : c = me(s.text, o);
  let h = i(s.text.slice(u, c));
  for (; u > 0; ) {
    let m = me(s.text, u, !1);
    if (i(s.text.slice(m, u)) != h)
      break;
    u = m;
  }
  for (; c < s.length; ) {
    let m = me(s.text, c);
    if (i(s.text.slice(c, m)) != h)
      break;
    c = m;
  }
  return j.range(u + s.from, c + s.from);
}
function OC(l, t, e, i, s) {
  let o = Math.round((i - t.left) * l.defaultCharacterWidth);
  if (l.lineWrapping && e.height > l.defaultLineHeight * 1.5) {
    let c = l.viewState.heightOracle.textHeight, h = Math.floor((s - e.top - (l.defaultLineHeight - c) * 0.5) / c);
    o += h * l.viewState.heightOracle.lineLength;
  }
  let u = l.state.sliceDoc(e.from, e.to);
  return e.from + Cd(u, o, l.state.tabSize);
}
function _d(l, t, e) {
  let i = l.lineBlockAt(t);
  if (Array.isArray(i.type)) {
    let s;
    for (let o of i.type) {
      if (o.from > t)
        break;
      if (!(o.to < t)) {
        if (o.from < t && o.to > t)
          return o;
        (!s || o.type == xe.Text && (s.type != o.type || (e < 0 ? o.from < t : o.to > t))) && (s = o);
      }
    }
    return s || i;
  }
  return i;
}
function DC(l, t, e, i) {
  let s = _d(l, t.head, t.assoc || -1), o = !i || s.type != xe.Text || !(l.lineWrapping || s.widgetLineBreaks) ? null : l.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
  if (o) {
    let u = l.dom.getBoundingClientRect(), c = l.textDirectionAt(s.from), h = l.posAtCoords({
      x: e == (c == jt.LTR) ? u.right - 1 : u.left + 1,
      y: (o.top + o.bottom) / 2
    });
    if (h != null)
      return j.cursor(h, e ? -1 : 1);
  }
  return j.cursor(e ? s.to : s.from, e ? -1 : 1);
}
function p1(l, t, e, i) {
  let s = l.state.doc.lineAt(t.head), o = l.bidiSpans(s), u = l.textDirectionAt(s.from);
  for (let c = t, h = null; ; ) {
    let m = nC(s, o, u, c, e), p = xb;
    if (!m) {
      if (s.number == (e ? l.state.doc.lines : 1))
        return c;
      p = `
`, s = l.state.doc.line(s.number + (e ? 1 : -1)), o = l.bidiSpans(s), m = l.visualLineSide(s, !e);
    }
    if (h) {
      if (!h(p))
        return c;
    } else {
      if (!i)
        return m;
      h = i(p);
    }
    c = m;
  }
}
function EC(l, t, e) {
  let i = l.state.charCategorizer(t), s = i(e);
  return (o) => {
    let u = i(o);
    return s == Wt.Space && (s = u), s == u;
  };
}
function RC(l, t, e, i) {
  let s = t.head, o = e ? 1 : -1;
  if (s == (e ? l.state.doc.length : 0))
    return j.cursor(s, t.assoc);
  let u = t.goalColumn, c, h = l.contentDOM.getBoundingClientRect(), m = l.coordsAtPos(s, t.assoc || ((t.empty ? e : t.head == t.from) ? 1 : -1)), p = l.documentTop;
  if (m)
    u == null && (u = m.left - h.left), c = o < 0 ? m.top : m.bottom;
  else {
    let w = l.viewState.lineBlockAt(s);
    u == null && (u = Math.min(h.right - h.left, l.defaultCharacterWidth * (s - w.from))), c = (o < 0 ? w.top : w.bottom) + p;
  }
  let y = h.left + u, v = l.viewState.heightOracle.textHeight >> 1, S = i ?? v;
  for (let w = 0; ; w += v) {
    let A = c + (S + w) * o, M = Ud(l, { x: y, y: A }, !1, o);
    if (e ? A > h.bottom : A < h.top)
      return j.cursor(M.pos, M.assoc);
    let O = l.coordsAtPos(M.pos, M.assoc), H = O ? (O.top + O.bottom) / 2 : 0;
    if (!O || (e ? H > c : H < c))
      return j.cursor(M.pos, M.assoc, void 0, u);
  }
}
function eo(l, t, e) {
  for (; ; ) {
    let i = 0;
    for (let s of l)
      s.between(t - 1, t + 1, (o, u, c) => {
        if (t > o && t < u) {
          let h = i || e || (t - o < u - t ? -1 : 1);
          t = h < 0 ? o : u, i = h;
        }
      });
    if (!i)
      return t;
  }
}
function Ub(l, t) {
  let e = null;
  for (let i = 0; i < t.ranges.length; i++) {
    let s = t.ranges[i], o = null;
    if (s.empty) {
      let u = eo(l, s.from, 0);
      u != s.from && (o = j.cursor(u, -1));
    } else {
      let u = eo(l, s.from, -1), c = eo(l, s.to, 1);
      (u != s.from || c != s.to) && (o = j.range(s.from == s.anchor ? u : c, s.from == s.head ? u : c));
    }
    o && (e || (e = t.ranges.slice()), e[i] = o);
  }
  return e ? j.create(e, t.mainIndex) : t;
}
function jh(l, t, e) {
  let i = eo(l.state.facet(Ao).map((s) => s(l)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : j.cursor(i, i < e.from ? 1 : -1);
}
class qi {
  constructor(t, e) {
    this.pos = t, this.assoc = e;
  }
}
function Ud(l, t, e, i) {
  let s = l.contentDOM.getBoundingClientRect(), o = s.top + l.viewState.paddingTop, { x: u, y: c } = t, h = c - o, m;
  for (; ; ) {
    if (h < 0)
      return new qi(0, 1);
    if (h > l.viewState.docHeight)
      return new qi(l.state.doc.length, -1);
    if (m = l.elementAtHeight(h), i == null)
      break;
    if (m.type == xe.Text) {
      if (i < 0 ? m.to < l.viewport.from : m.from > l.viewport.to)
        break;
      let v = l.docView.coordsAt(i < 0 ? m.from : m.to, i > 0 ? -1 : 1);
      if (v && (i < 0 ? v.top <= h + o : v.bottom >= h + o))
        break;
    }
    let y = l.viewState.heightOracle.textHeight / 2;
    h = i > 0 ? m.bottom + y : m.top - y;
  }
  if (l.viewport.from >= m.to || l.viewport.to <= m.from) {
    if (e)
      return null;
    if (m.type == xe.Text) {
      let y = OC(l, s, m, u, c);
      return new qi(y, y == m.from ? 1 : -1);
    }
  }
  if (m.type != xe.Text)
    return h < (m.top + m.bottom) / 2 ? new qi(m.from, 1) : new qi(m.to, -1);
  let p = l.docView.lineAt(m.from, 2);
  return (!p || p.length != m.length) && (p = l.docView.lineAt(m.from, -2)), new BC(l, u, c, l.textDirectionAt(m.from)).scanTile(p, m.from);
}
class BC {
  constructor(t, e, i, s) {
    this.view = t, this.x = e, this.y = i, this.baseDir = s, this.line = null, this.spans = null;
  }
  bidiSpansAt(t) {
    return (!this.line || this.line.from > t || this.line.to < t) && (this.line = this.view.state.doc.lineAt(t), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(t, e) {
    let { line: i, spans: s } = this.bidiSpansAt(t);
    return s[ji.find(s, t - i.from, -1, e)].level == this.baseDir;
  }
  dirAt(t, e) {
    let { line: i, spans: s } = this.bidiSpansAt(t);
    return s[ji.find(s, t - i.from, -1, e)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(t, e) {
    let { spans: i, line: s } = this.bidiSpansAt(t);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + s.from < e);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically andis
  // closest horizontally. The caller is responsible for dividing its
  // content into N pieces, and pass an array with N+1 positions
  // (including the position after the last piece). For a text tile,
  // these will be character clusters, for a composite tile, these
  // will be child tiles.
  scan(t, e) {
    let i = 0, s = t.length - 1, o = /* @__PURE__ */ new Set(), u = this.bidiIn(t[0], t[s]), c, h, m = -1, p = 1e9, y;
    t: for (; i < s; ) {
      let S = s - i, w = i + s >> 1;
      e: if (o.has(w)) {
        let M = i + Math.floor(Math.random() * S);
        for (let O = 0; O < S; O++) {
          if (!o.has(M)) {
            w = M;
            break e;
          }
          M++, M == s && (M = i);
        }
        break t;
      }
      o.add(w);
      let A = e(w);
      if (A)
        for (let M = 0; M < A.length; M++) {
          let O = A[M], H = 0;
          if (!(O.width == 0 && A.length > 1)) {
            if (O.bottom < this.y)
              (!c || c.bottom < O.bottom) && (c = O), H = 1;
            else if (O.top > this.y)
              (!h || h.top > O.top) && (h = O), H = -1;
            else {
              let z = O.left > this.x ? this.x - O.left : O.right < this.x ? this.x - O.right : 0, Q = Math.abs(z);
              Q < p && (m = w, p = Q, y = O), z && (H = z < 0 == (this.baseDir == jt.LTR) ? -1 : 1);
            }
            H == -1 && (!u || this.baseDirAt(t[w], 1)) ? s = w : H == 1 && (!u || this.baseDirAt(t[w + 1], -1)) && (i = w + 1);
          }
        }
    }
    if (!y) {
      let S = c && (!h || this.y - c.bottom < h.top - this.y) ? c : h;
      return this.y = (S.top + S.bottom) / 2, this.scan(t, e);
    }
    if (p) {
      if (c && c.bottom > y.top)
        return this.y = c.bottom - 1, this.scan(t, e);
      if (h && h.top < y.bottom)
        return this.y = h.top + 1, this.scan(t, e);
    }
    let v = (u ? this.dirAt(t[m], 1) : this.baseDir) == jt.LTR;
    return {
      i: m,
      // Test whether x is closes to the start or end of this element
      after: this.x > (y.left + y.right) / 2 == v
    };
  }
  scanText(t, e) {
    let i = [];
    for (let o = 0; o < t.length; o = me(t.text, o))
      i.push(e + o);
    i.push(e + t.length);
    let s = this.scan(i, (o) => {
      let u = i[o] - e, c = i[o + 1] - e;
      return co(t.dom, u, c).getClientRects();
    });
    return s.after ? new qi(i[s.i + 1], -1) : new qi(i[s.i], 1);
  }
  scanTile(t, e) {
    if (!t.length)
      return new qi(e, 1);
    if (t.children.length == 1) {
      let c = t.children[0];
      if (c.isText())
        return this.scanText(c, e);
      if (c.isComposite())
        return this.scanTile(c, e);
    }
    let i = [e];
    for (let c = 0, h = e; c < t.children.length; c++)
      i.push(h += t.children[c].length);
    let s = this.scan(i, (c) => {
      let h = t.children[c];
      return h.flags & 48 ? null : (h.dom.nodeType == 1 ? h.dom : co(h.dom, 0, h.length)).getClientRects();
    }), o = t.children[s.i], u = i[s.i];
    return o.isText() ? this.scanText(o, u) : o.isComposite() ? this.scanTile(o, u) : s.after ? new qi(i[s.i + 1], -1) : new qi(u, 1);
  }
}
const bs = "￿";
class NC {
  constructor(t, e) {
    this.points = t, this.view = e, this.text = "", this.lineSeparator = e.state.facet(Tt.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += bs;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let i = t.parentNode;
    for (let s = t; ; ) {
      this.findPointBefore(i, s);
      let o = this.text.length;
      this.readNode(s);
      let u = It.get(s), c = s.nextSibling;
      if (c == e) {
        u?.breakAfter && !c && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let h = It.get(c);
      (u && h ? u.breakAfter : (u ? u.breakAfter : ku(s)) || ku(c) && (s.nodeName != "BR" || u?.isWidget()) && this.text.length > o) && !zC(c, e) && this.lineBreak(), s = c;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1, u = 1, c;
      if (this.lineSeparator ? (o = e.indexOf(this.lineSeparator, i), u = this.lineSeparator.length) : (c = s.exec(e)) && (o = c.index, u = c[0].length), this.append(e.slice(i, o < 0 ? e.length : o)), o < 0)
        break;
      if (this.lineBreak(), u > 1)
        for (let h of this.points)
          h.node == t && h.pos > this.text.length && (h.pos -= u - 1);
      i = o + u;
    }
  }
  readNode(t) {
    let e = It.get(t), i = e && e.overrideDOMText;
    if (i != null) {
      this.findPointInside(t, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let i of this.points)
      i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let i of this.points)
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (LC(t, i.node, i.offset) ? e : 0));
  }
}
function LC(l, t, e) {
  for (; ; ) {
    if (!t || e < mn(t))
      return !1;
    if (t == l)
      return !0;
    e = Fn(t) + 1, t = t.parentNode;
  }
}
function zC(l, t) {
  let e;
  for (; !(l == t || !l); l = l.nextSibling) {
    let i = It.get(l);
    if (!i?.isWidget())
      return !1;
    i && (e || (e = [])).push(i);
  }
  if (e)
    for (let i of e) {
      let s = i.overrideDOMText;
      if (s?.length)
        return !1;
    }
  return !0;
}
class g1 {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class HC {
  constructor(t, e, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: o, impreciseAnchor: u } = t.docView, c = t.state.selection;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = Vb(t.docView.tile, e, i, 0))) {
      let h = o || u ? [] : UC(t), m = new NC(h, t);
      m.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = m.text, this.newSel = VC(h, this.bounds.from);
    } else {
      let h = t.observer.selectionRange, m = o && o.node == h.focusNode && o.offset == h.focusOffset || !Rd(t.contentDOM, h.focusNode) ? c.main.head : t.docView.posFromDOM(h.focusNode, h.focusOffset), p = u && u.node == h.anchorNode && u.offset == h.anchorOffset || !Rd(t.contentDOM, h.anchorNode) ? c.main.anchor : t.docView.posFromDOM(h.anchorNode, h.anchorOffset), y = t.viewport;
      if (($.ios || $.chrome) && c.main.empty && m != p && (y.from > 0 || y.to < t.state.doc.length)) {
        let v = Math.min(m, p), S = Math.max(m, p), w = y.from - v, A = y.to - S;
        (w == 0 || w == 1 || v == 0) && (A == 0 || A == -1 || S == t.state.doc.length) && (m = 0, p = t.state.doc.length);
      }
      if (t.inputState.composing > -1 && c.ranges.length > 1)
        this.newSel = c.replaceRange(j.range(p, m));
      else if (t.lineWrapping && p == m && !(c.main.empty && c.main.head == m) && t.inputState.lastTouchTime > Date.now() - 100) {
        let v = t.coordsAtPos(m, -1), S = 0;
        v && (S = t.inputState.lastTouchY <= v.bottom ? -1 : 1), this.newSel = j.create([j.cursor(m, S)]);
      } else
        this.newSel = j.single(p, m);
    }
  }
}
function Vb(l, t, e, i) {
  if (l.isComposite()) {
    let s = -1, o = -1, u = -1, c = -1;
    for (let h = 0, m = i, p = i; h < l.children.length; h++) {
      let y = l.children[h], v = m + y.length;
      if (m < t && v > e)
        return Vb(y, t, e, m);
      if (v >= t && s == -1 && (s = h, o = m), m > e && y.dom.parentNode == l.dom) {
        u = h, c = p;
        break;
      }
      p = v, m = v + y.breakAfter;
    }
    return {
      from: o,
      to: c < 0 ? i + l.length : c,
      startDOM: (s ? l.children[s - 1].dom.nextSibling : null) || l.dom.firstChild,
      endDOM: u < l.children.length && u >= 0 ? l.children[u].dom : null
    };
  } else return l.isText() ? { from: i, to: i + l.length, startDOM: l.dom, endDOM: l.dom.nextSibling } : null;
}
function qb(l, t) {
  let e, { newSel: i } = t, { state: s } = l, o = s.selection.main, u = l.inputState.lastKeyTime > Date.now() - 100 ? l.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: c, to: h } = t.bounds, m = o.from, p = null;
    (u === 8 || $.android && t.text.length < h - c) && (m = o.to, p = "end");
    let y = s.doc.sliceString(c, h, bs), v, S;
    !o.empty && o.from >= c && o.to <= h && (t.typeOver || y != t.text) && y.slice(0, o.from - c) == t.text.slice(0, o.from - c) && y.slice(o.to - c) == t.text.slice(v = t.text.length - (y.length - (o.to - c))) ? e = {
      from: o.from,
      to: o.to,
      insert: Et.of(t.text.slice(o.from - c, v).split(bs))
    } : (S = jb(y, t.text, m - c, p)) && ($.chrome && u == 13 && S.toB == S.from + 2 && t.text.slice(S.from, S.toB) == bs + bs && S.toB--, e = {
      from: c + S.from,
      to: c + S.toA,
      insert: Et.of(t.text.slice(S.from, S.toB).split(bs))
    });
  } else i && (!l.hasFocus && s.facet(hn) || Du(i, o)) && (i = null);
  if (!e && !i)
    return !1;
  if (($.mac || $.android) && e && e.from == e.to && e.from == o.head - 1 && /^\. ?$/.test(e.insert.toString()) && l.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = j.single(i.main.anchor - 1, i.main.head - 1)), e = { from: e.from, to: e.to, insert: Et.of([e.insert.toString().replace(".", " ")]) }) : s.doc.lineAt(o.from).to < o.to && l.docView.lineHasWidget(o.to) && l.inputState.insertingTextAt > Date.now() - 50 ? e = {
    from: o.from,
    to: o.to,
    insert: s.toText(l.inputState.insertingText)
  } : $.chrome && e && e.from == e.to && e.from == o.head && e.insert.toString() == `
 ` && l.lineWrapping && (i && (i = j.single(i.main.anchor - 1, i.main.head - 1)), e = { from: o.from, to: o.to, insert: Et.of([" "]) }), e)
    return xm(l, e, i, u);
  if (i && !Du(i, o)) {
    let c = !1, h = "select";
    return l.inputState.lastSelectionTime > Date.now() - 50 && (l.inputState.lastSelectionOrigin == "select" && (c = !0), h = l.inputState.lastSelectionOrigin, h == "select.pointer" && (i = Ub(s.facet(Ao).map((m) => m(l)), i))), l.dispatch({ selection: i, scrollIntoView: c, userEvent: h }), !0;
  } else
    return !1;
}
function xm(l, t, e, i = -1) {
  if ($.ios && l.inputState.flushIOSKey(t))
    return !0;
  let s = l.state.selection.main;
  if ($.android && (t.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (t.from == s.from || t.from == s.from - 1 && l.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Ts(l.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > s.head) && Ts(l.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && Ts(l.contentDOM, "Delete", 46)))
    return !0;
  let o = t.insert.toString();
  l.inputState.composing >= 0 && l.inputState.composing++;
  let u, c = () => u || (u = _C(l, t, e));
  return l.state.facet(Mb).some((h) => h(l, t.from, t.to, o, c)) || l.dispatch(c()), !0;
}
function _C(l, t, e) {
  let i, s = l.state, o = s.selection.main, u = -1;
  if (t.from == t.to && t.from < o.from || t.from > o.to) {
    let h = t.from < o.from ? -1 : 1, m = h < 0 ? o.from : o.to, p = eo(s.facet(Ao).map((y) => y(l)), m, h);
    t.from == p && (u = p);
  }
  if (u > -1)
    i = {
      changes: t,
      selection: j.cursor(t.from + t.insert.length, -1)
    };
  else if (t.from >= o.from && t.to <= o.to && t.to - t.from >= (o.to - o.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && l.inputState.composing < 0) {
    let h = o.from < t.from ? s.sliceDoc(o.from, t.from) : "", m = o.to > t.to ? s.sliceDoc(t.to, o.to) : "";
    i = s.replaceSelection(l.state.toText(h + t.insert.sliceString(0, void 0, l.state.lineBreak) + m));
  } else {
    let h = s.changes(t), m = e && e.main.to <= h.newLength ? e.main : void 0;
    if (s.selection.ranges.length > 1 && (l.inputState.composing >= 0 || l.inputState.compositionPendingChange) && t.to <= o.to + 10 && t.to >= o.to - 10) {
      let p = l.state.sliceDoc(t.from, t.to), y, v = e && _b(l, e.main.head);
      if (v) {
        let w = t.insert.length - (t.to - t.from);
        y = { from: v.from, to: v.to - w };
      } else
        y = l.state.doc.lineAt(o.head);
      let S = o.to - t.to;
      i = s.changeByRange((w) => {
        if (w.from == o.from && w.to == o.to)
          return { changes: h, range: m || w.map(h) };
        let A = w.to - S, M = A - p.length;
        if (l.state.sliceDoc(M, A) != p || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        A >= y.from && M <= y.to)
          return { range: w };
        let O = s.changes({ from: M, to: A, insert: t.insert }), H = w.to - o.to;
        return {
          changes: O,
          range: m ? j.range(Math.max(0, m.anchor + H), Math.max(0, m.head + H)) : w.map(O)
        };
      });
    } else
      i = {
        changes: h,
        selection: m && s.selection.replaceRange(m)
      };
  }
  let c = "input.type";
  return (l.composing || l.inputState.compositionPendingChange && l.inputState.compositionEndedAt > Date.now() - 50) && (l.inputState.compositionPendingChange = !1, c += ".compose", l.inputState.compositionFirstChange && (c += ".start", l.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: c, scrollIntoView: !0 });
}
function jb(l, t, e, i) {
  let s = Math.min(l.length, t.length), o = 0;
  for (; o < s && l.charCodeAt(o) == t.charCodeAt(o); )
    o++;
  if (o == s && l.length == t.length)
    return null;
  let u = l.length, c = t.length;
  for (; u > 0 && c > 0 && l.charCodeAt(u - 1) == t.charCodeAt(c - 1); )
    u--, c--;
  if (i == "end") {
    let h = Math.max(0, o - Math.min(u, c));
    e -= u + h - o;
  }
  if (u < o && l.length < t.length) {
    let h = e <= o && e >= u ? o - e : 0;
    o -= h, c = o + (c - u), u = o;
  } else if (c < o) {
    let h = e <= o && e >= c ? o - e : 0;
    o -= h, u = o + (u - c), c = o;
  }
  return { from: o, toA: u, toB: c };
}
function UC(l) {
  let t = [];
  if (l.root.activeElement != l.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: o } = l.observer.selectionRange;
  return e && (t.push(new g1(e, i)), (s != e || o != i) && t.push(new g1(s, o))), t;
}
function VC(l, t) {
  if (l.length == 0)
    return null;
  let e = l[0].pos, i = l.length == 2 ? l[1].pos : e;
  return e > -1 && i > -1 ? j.single(e + t, i + t) : null;
}
function Du(l, t) {
  return t.head == l.main.head && t.anchor == l.main.anchor;
}
class qC {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, $.safari && t.contentDOM.addEventListener("input", () => null), $.gecko && ek(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !ZC(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
  }
  runHandlers(t, e) {
    let i = this.handlers[t];
    if (i) {
      for (let s of i.observers)
        s(this.view, e);
      for (let s of i.handlers) {
        if (e.defaultPrevented)
          break;
        if (s(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = jC(t), i = this.handlers, s = this.view.contentDOM;
    for (let o in e)
      if (o != "scroll") {
        let u = !e[o].handlers.length, c = i[o];
        c && u != !c.handlers.length && (s.removeEventListener(o, this.handleEvent), c = null), c || s.addEventListener(o, this.handleEvent, { passive: u });
      }
    for (let o in i)
      o != "scroll" && !e[o] && s.removeEventListener(o, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && Gb.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), $.android && $.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let e;
    return $.ios && !t.synthetic && !t.altKey && !t.metaKey && !t.shiftKey && ((e = Yb.find((i) => i.keyCode == t.keyCode)) && !t.ctrlKey || YC.indexOf(t.key) > -1 && t.ctrlKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), !0) : (t.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Ts(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return !/^key/.test(t.type) || t.synthetic ? !1 : this.composing > 0 ? !0 : $.safari && !$.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function y1(l, t) {
  return (e, i) => {
    try {
      return t.call(l, i, e);
    } catch (s) {
      Ye(e.state, s);
    }
  };
}
function jC(l) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(i) {
    return t[i] || (t[i] = { observers: [], handlers: [] });
  }
  for (let i of l) {
    let s = i.spec, o = s && s.plugin.domEventHandlers, u = s && s.plugin.domEventObservers;
    if (o)
      for (let c in o) {
        let h = o[c];
        h && e(c).handlers.push(y1(i.value, h));
      }
    if (u)
      for (let c in u) {
        let h = u[c];
        h && e(c).observers.push(y1(i.value, h));
      }
  }
  for (let i in ki)
    e(i).handlers.push(ki[i]);
  for (let i in Ke)
    e(i).observers.push(Ke[i]);
  return t;
}
const Yb = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], YC = "dthko", Gb = [16, 17, 18, 20, 91, 92, 224, 225], Za = 6;
function Ja(l) {
  return Math.max(0, l) * 0.7 + 8;
}
function GC(l, t) {
  return Math.max(Math.abs(l.clientX - t.clientX), Math.abs(l.clientY - t.clientY));
}
class KC {
  constructor(t, e, i, s) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = hb(t.contentDOM), this.atoms = t.state.facet(Ao).map((u) => u(t));
    let o = t.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(Tt.allowMultipleSelections) && XC(t, e), this.dragging = QC(t, e) && Wb(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && GC(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, i = 0, s = 0, o = 0, u = this.view.win.innerWidth, c = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: u } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o, bottom: c } = this.scrollParents.y.getBoundingClientRect());
    let h = Sm(this.view);
    t.clientX - h.left <= s + Za ? e = -Ja(s - t.clientX) : t.clientX + h.right >= u - Za && (e = Ja(t.clientX - u)), t.clientY - h.top <= o + Za ? i = -Ja(o - t.clientY) : t.clientY + h.bottom >= c - Za && (i = Ja(t.clientY - c)), this.setScrollSpeed(e, i);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(t) {
    let { view: e } = this, i = Ub(this.atoms, this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function XC(l, t) {
  let e = l.state.facet(wb);
  return e.length ? e[0](t) : $.mac ? t.metaKey : t.ctrlKey;
}
function WC(l, t) {
  let e = l.state.facet(Ab);
  return e.length ? e[0](t) : $.mac ? !t.altKey : !t.ctrlKey;
}
function QC(l, t) {
  let { main: e } = l.state.selection;
  if (e.empty)
    return !1;
  let i = ao(l.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let o = 0; o < s.length; o++) {
    let u = s[o];
    if (u.left <= t.clientX && u.right >= t.clientX && u.top <= t.clientY && u.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function ZC(l, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, i; e != l.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = It.get(e)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(t))
      return !1;
  return !0;
}
const ki = /* @__PURE__ */ Object.create(null), Ke = /* @__PURE__ */ Object.create(null), Kb = $.ie && $.ie_version < 15 || $.ios && $.webkit_version < 604;
function JC(l) {
  let t = l.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    l.focus(), e.remove(), Xb(l, e.value);
  }, 50);
}
function $u(l, t, e) {
  for (let i of l.facet(t))
    e = i(e, l);
  return e;
}
function Xb(l, t) {
  t = $u(l.state, gm, t);
  let { state: e } = l, i, s = 1, o = e.toText(t), u = o.lines == e.selection.ranges.length;
  if (Vd != null && e.selection.ranges.every((h) => h.empty) && Vd == o.toString()) {
    let h = -1;
    i = e.changeByRange((m) => {
      let p = e.doc.lineAt(m.from);
      if (p.from == h)
        return { range: m };
      h = p.from;
      let y = e.toText((u ? o.line(s++).text : t) + e.lineBreak);
      return {
        changes: { from: p.from, insert: y },
        range: j.cursor(m.from + y.length)
      };
    });
  } else u ? i = e.changeByRange((h) => {
    let m = o.line(s++);
    return {
      changes: { from: h.from, to: h.to, insert: m.text },
      range: j.cursor(h.from + m.length)
    };
  }) : i = e.replaceSelection(o);
  l.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Ke.scroll = (l) => {
  l.inputState.lastScrollTop = l.scrollDOM.scrollTop, l.inputState.lastScrollLeft = l.scrollDOM.scrollLeft;
};
Ke.wheel = Ke.mousewheel = (l) => {
  l.inputState.lastWheelEvent = Date.now();
};
ki.keydown = (l, t) => (l.inputState.setSelectionOrigin("select"), t.keyCode == 27 && l.inputState.tabFocusMode != 0 && (l.inputState.tabFocusMode = Date.now() + 2e3), !1);
Ke.touchstart = (l, t) => {
  let e = l.inputState, i = t.targetTouches[0];
  e.lastTouchTime = Date.now(), i && (e.lastTouchX = i.clientX, e.lastTouchY = i.clientY), e.setSelectionOrigin("select.pointer");
};
Ke.touchmove = (l) => {
  l.inputState.setSelectionOrigin("select.pointer");
};
ki.mousedown = (l, t) => {
  if (l.observer.flush(), l.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let e = null;
  for (let i of l.state.facet(Cb))
    if (e = i(l, t), e)
      break;
  if (!e && t.button == 0 && (e = PC(l, t)), e) {
    let i = !l.hasFocus;
    l.inputState.startMouseSelection(new KC(l, t, e, i)), i && l.observer.ignore(() => {
      db(l.contentDOM);
      let o = l.root.activeElement;
      o && !o.contains(l.contentDOM) && o.blur();
    });
    let s = l.inputState.mouseSelection;
    if (s)
      return s.start(t), s.dragging === !1;
  } else
    l.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function v1(l, t, e, i) {
  if (i == 1)
    return j.cursor(t, e);
  if (i == 2)
    return TC(l.state, t, e);
  {
    let s = l.docView.lineAt(t, e), o = l.state.doc.lineAt(s ? s.posAtEnd : t), u = s ? s.posAtStart : o.from, c = s ? s.posAtEnd : o.to;
    return c < l.state.doc.length && c == o.to && c++, j.range(u, c);
  }
}
const FC = $.ie && $.ie_version <= 11;
let b1 = null, S1 = 0, x1 = 0;
function Wb(l) {
  if (!FC)
    return l.detail;
  let t = b1, e = x1;
  return b1 = l, x1 = Date.now(), S1 = !t || e > Date.now() - 400 && Math.abs(t.clientX - l.clientX) < 2 && Math.abs(t.clientY - l.clientY) < 2 ? (S1 + 1) % 3 : 1;
}
function PC(l, t) {
  let e = l.posAndSideAtCoords({ x: t.clientX, y: t.clientY }, !1), i = Wb(t), s = l.state.selection;
  return {
    update(o) {
      o.docChanged && (e.pos = o.changes.mapPos(e.pos), s = s.map(o.changes));
    },
    get(o, u, c) {
      let h = l.posAndSideAtCoords({ x: o.clientX, y: o.clientY }, !1), m, p = v1(l, h.pos, h.assoc, i);
      if (e.pos != h.pos && !u) {
        let y = v1(l, e.pos, e.assoc, i), v = Math.min(y.from, p.from), S = Math.max(y.to, p.to);
        p = v < p.from ? j.range(v, S, p.assoc) : j.range(S, v, p.assoc);
      }
      return u ? s.replaceRange(s.main.extend(p.from, p.to, p.assoc)) : c && i == 1 && s.ranges.length > 1 && (m = IC(s, h.pos)) ? m : c ? s.addRange(p) : j.create([p]);
    }
  };
}
function IC(l, t) {
  for (let e = 0; e < l.ranges.length; e++) {
    let { from: i, to: s } = l.ranges[e];
    if (i <= t && s >= t)
      return j.create(l.ranges.slice(0, e).concat(l.ranges.slice(e + 1)), l.mainIndex == e ? 0 : l.mainIndex - (l.mainIndex > e ? 1 : 0));
  }
  return null;
}
ki.dragstart = (l, t) => {
  let { selection: { main: e } } = l.state;
  if (t.target.draggable) {
    let s = l.docView.tile.nearest(t.target);
    if (s && s.isWidget()) {
      let o = s.posAtStart, u = o + s.length;
      (o >= e.to || u <= e.from) && (e = j.range(o, u));
    }
  }
  let { inputState: i } = l;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", $u(l.state, ym, l.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
};
ki.dragend = (l) => (l.inputState.draggedContent = null, !1);
function w1(l, t, e, i) {
  if (e = $u(l.state, gm, e), !e)
    return;
  let s = l.posAtCoords({ x: t.clientX, y: t.clientY }, !1), { draggedContent: o } = l.inputState, u = i && o && WC(l, t) ? { from: o.from, to: o.to } : null, c = { from: s, insert: e }, h = l.state.changes(u ? [u, c] : c);
  l.focus(), l.dispatch({
    changes: h,
    selection: { anchor: h.mapPos(s, -1), head: h.mapPos(s, 1) },
    userEvent: u ? "move.drop" : "input.drop"
  }), l.inputState.draggedContent = null;
}
ki.drop = (l, t) => {
  if (!t.dataTransfer)
    return !1;
  if (l.state.readOnly)
    return !0;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let i = Array(e.length), s = 0, o = () => {
      ++s == e.length && w1(l, t, i.filter((u) => u != null).join(l.state.lineBreak), !1);
    };
    for (let u = 0; u < e.length; u++) {
      let c = new FileReader();
      c.onerror = o, c.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(c.result) || (i[u] = c.result), o();
      }, c.readAsText(e[u]);
    }
    return !0;
  } else {
    let i = t.dataTransfer.getData("Text");
    if (i)
      return w1(l, t, i, !0), !0;
  }
  return !1;
};
ki.paste = (l, t) => {
  if (l.state.readOnly)
    return !0;
  l.observer.flush();
  let e = Kb ? null : t.clipboardData;
  return e ? (Xb(l, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (JC(l), !1);
};
function $C(l, t) {
  let e = l.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), l.focus();
  }, 50);
}
function tk(l) {
  let t = [], e = [], i = !1;
  for (let s of l.selection.ranges)
    s.empty || (t.push(l.sliceDoc(s.from, s.to)), e.push(s));
  if (!t.length) {
    let s = -1;
    for (let { from: o } of l.selection.ranges) {
      let u = l.doc.lineAt(o);
      u.number > s && (t.push(u.text), e.push({ from: u.from, to: Math.min(l.doc.length, u.to + 1) })), s = u.number;
    }
    i = !0;
  }
  return { text: $u(l, ym, t.join(l.lineBreak)), ranges: e, linewise: i };
}
let Vd = null;
ki.copy = ki.cut = (l, t) => {
  if (!Ir(l.contentDOM, l.observer.selectionRange))
    return !1;
  let { text: e, ranges: i, linewise: s } = tk(l.state);
  if (!e && !s)
    return !1;
  Vd = s ? e : null, t.type == "cut" && !l.state.readOnly && l.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let o = Kb ? null : t.clipboardData;
  return o ? (o.clearData(), o.setData("text/plain", e), !0) : ($C(l, e), !1);
};
const Qb = /* @__PURE__ */ Qi.define();
function Zb(l, t) {
  let e = [];
  for (let i of l.facet(Tb)) {
    let s = i(l, t);
    s && e.push(s);
  }
  return e.length ? l.update({ effects: e, annotations: Qb.of(!0) }) : null;
}
function Jb(l) {
  setTimeout(() => {
    let t = l.hasFocus;
    if (t != l.inputState.notifiedFocused) {
      let e = Zb(l.state, t);
      e ? l.dispatch(e) : l.update([]);
    }
  }, 10);
}
Ke.focus = (l) => {
  l.inputState.lastFocusTime = Date.now(), !l.scrollDOM.scrollTop && (l.inputState.lastScrollTop || l.inputState.lastScrollLeft) && (l.scrollDOM.scrollTop = l.inputState.lastScrollTop, l.scrollDOM.scrollLeft = l.inputState.lastScrollLeft), Jb(l);
};
Ke.blur = (l) => {
  l.observer.clearSelectionRange(), Jb(l);
};
Ke.compositionstart = Ke.compositionupdate = (l) => {
  l.observer.editContext || (l.inputState.compositionFirstChange == null && (l.inputState.compositionFirstChange = !0), l.inputState.composing < 0 && (l.inputState.composing = 0));
};
Ke.compositionend = (l) => {
  l.observer.editContext || (l.inputState.composing = -1, l.inputState.compositionEndedAt = Date.now(), l.inputState.compositionPendingKey = !0, l.inputState.compositionPendingChange = l.observer.pendingRecords().length > 0, l.inputState.compositionFirstChange = null, $.chrome && $.android ? l.observer.flushSoon() : l.inputState.compositionPendingChange ? Promise.resolve().then(() => l.observer.flush()) : setTimeout(() => {
    l.inputState.composing < 0 && l.docView.hasComposition && l.update([]);
  }, 50));
};
Ke.contextmenu = (l) => {
  l.inputState.lastContextMenu = Date.now();
};
ki.beforeinput = (l, t) => {
  var e, i;
  if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (l.inputState.insertingText = t.data, l.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && l.observer.editContext) {
    let o = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), u = t.getTargetRanges();
    if (o && u.length) {
      let c = u[0], h = l.posAtDOM(c.startContainer, c.startOffset), m = l.posAtDOM(c.endContainer, c.endOffset);
      return xm(l, { from: h, to: m, insert: l.state.toText(o) }, null), !0;
    }
  }
  let s;
  if ($.chrome && $.android && (s = Yb.find((o) => o.inputType == t.inputType)) && (l.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let o = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var u;
      (((u = window.visualViewport) === null || u === void 0 ? void 0 : u.height) || 0) > o + 10 && l.hasFocus && (l.contentDOM.blur(), l.focus());
    }, 100);
  }
  return $.ios && t.inputType == "deleteContentForward" && l.observer.flushSoon(), $.safari && t.inputType == "insertText" && l.inputState.composing >= 0 && setTimeout(() => Ke.compositionend(l, t), 20), !1;
};
const A1 = /* @__PURE__ */ new Set();
function ek(l) {
  A1.has(l) || (A1.add(l), l.addEventListener("copy", () => {
  }), l.addEventListener("cut", () => {
  }));
}
const C1 = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ls = !1;
function k1() {
  Ls = !1;
}
class ik {
  constructor(t) {
    this.lineWrapping = t, this.doc = Et.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return C1.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, i, s, o, u) {
    let c = C1.indexOf(t) > -1, h = Math.abs(e - this.lineHeight) > 0.3 || this.lineWrapping != c || Math.abs(i - this.charWidth) > 0.1;
    if (this.lineWrapping = c, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = o, h) {
      this.heightSamples = {};
      for (let m = 0; m < u.length; m++) {
        let p = u[m];
        p < 0 ? m++ : this.heightSamples[Math.floor(p * 10)] = !0;
      }
    }
    return h;
  }
}
class nk {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ai {
  /**
  @internal
  */
  constructor(t, e, i, s, o) {
    this.from = t, this.length = e, this.top = i, this.height = s, this._content = o;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? xe.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof El ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new Ai(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var Gt = /* @__PURE__ */ (function(l) {
  return l[l.ByPos = 0] = "ByPos", l[l.ByHeight = 1] = "ByHeight", l[l.ByPosNoHeight = 2] = "ByPosNoHeight", l;
})(Gt || (Gt = {}));
const gu = 1e-3;
class Ne {
  constructor(t, e, i = 2) {
    this.length = t, this.height = e, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > gu && (Ls = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(t, e, i) {
    return Ne.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, i, s) {
    let o = this, u = i.doc;
    for (let c = s.length - 1; c >= 0; c--) {
      let { fromA: h, toA: m, fromB: p, toB: y } = s[c], v = o.lineAt(h, Gt.ByPosNoHeight, i.setDoc(e), 0, 0), S = v.to >= m ? v : o.lineAt(m, Gt.ByPosNoHeight, i, 0, 0);
      for (y += S.to - m, m = S.to; c > 0 && v.from <= s[c - 1].toA; )
        h = s[c - 1].fromA, p = s[c - 1].fromB, c--, h < v.from && (v = o.lineAt(h, Gt.ByPosNoHeight, i, 0, 0));
      p += v.from - h, h = v.from;
      let w = wm.build(i.setDoc(u), t, p, y);
      o = Eu(o, o.replace(h, m, w));
    }
    return o.updateHeight(i, 0);
  }
  static empty() {
    return new ei(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, i = t.length, s = 0, o = 0;
    for (; ; )
      if (e == i)
        if (s > o * 2) {
          let c = t[e - 1];
          c.break ? t.splice(--e, 1, c.left, null, c.right) : t.splice(--e, 1, c.left, c.right), i += 1 + c.break, s -= c.size;
        } else if (o > s * 2) {
          let c = t[i];
          c.break ? t.splice(i, 1, c.left, null, c.right) : t.splice(i, 1, c.left, c.right), i += 2 + c.break, o -= c.size;
        } else
          break;
      else if (s < o) {
        let c = t[e++];
        c && (s += c.size);
      } else {
        let c = t[--i];
        c && (o += c.size);
      }
    let u = 0;
    return t[e - 1] == null ? (u = 1, e--) : t[e] == null && (u = 1, i++), new sk(Ne.of(t.slice(0, e)), u, Ne.of(t.slice(i)));
  }
}
function Eu(l, t) {
  return l == t ? l : (l.constructor != t.constructor && (Ls = !0), t);
}
Ne.prototype.size = 1;
const lk = /* @__PURE__ */ ut.replace({});
class Fb extends Ne {
  constructor(t, e, i) {
    super(t, e), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(t, e) {
    return new Ai(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(t, e, i, s) {
    return this.spaceAbove && t < i + this.spaceAbove ? new Ai(s, 0, i, this.spaceAbove, lk) : this.mainBlock(i, s);
  }
  lineAt(t, e, i, s, o) {
    let u = this.mainBlock(s, o);
    return this.spaceAbove ? this.blockAt(0, i, s, o).join(u) : u;
  }
  forEachLine(t, e, i, s, o, u) {
    t <= o + this.length && e >= o && u(this.lineAt(0, Gt.ByPos, i, s, o));
  }
  setMeasuredHeight(t) {
    let e = t.heights[t.index++];
    e < 0 ? (this.spaceAbove = -e, e = t.heights[t.index++]) : this.spaceAbove = 0, this.setHeight(e);
  }
  updateHeight(t, e = 0, i = !1, s) {
    return s && s.from <= e && s.more && this.setMeasuredHeight(s), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ei extends Fb {
  constructor(t, e, i) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(t, e) {
    return new Ai(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(t, e, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof ei || s instanceof ve && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof ve ? s = new ei(s.length, this.height, this.spaceAbove) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Ne.of(i);
  }
  updateHeight(t, e = 0, i = !1, s) {
    return s && s.from <= e && s.more ? this.setMeasuredHeight(s) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ve extends Ne {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let i = t.doc.lineAt(e).number, s = t.doc.lineAt(e + this.length).number, o = s - i + 1, u, c = 0;
    if (t.lineWrapping) {
      let h = Math.min(this.height, t.lineHeight * o);
      u = h / o, this.length > o + 1 && (c = (this.height - h) / (this.length - o - 1));
    } else
      u = this.height / o;
    return { firstLine: i, lastLine: s, perLine: u, perChar: c };
  }
  blockAt(t, e, i, s) {
    let { firstLine: o, lastLine: u, perLine: c, perChar: h } = this.heightMetrics(e, s);
    if (e.lineWrapping) {
      let m = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), p = e.doc.lineAt(m), y = c + p.length * h, v = Math.max(i, t - y / 2);
      return new Ai(p.from, p.length, v, y, 0);
    } else {
      let m = Math.max(0, Math.min(u - o, Math.floor((t - i) / c))), { from: p, length: y } = e.doc.line(o + m);
      return new Ai(p, y, i + c * m, c, 0);
    }
  }
  lineAt(t, e, i, s, o) {
    if (e == Gt.ByHeight)
      return this.blockAt(t, i, s, o);
    if (e == Gt.ByPosNoHeight) {
      let { from: S, to: w } = i.doc.lineAt(t);
      return new Ai(S, w - S, 0, 0, 0);
    }
    let { firstLine: u, perLine: c, perChar: h } = this.heightMetrics(i, o), m = i.doc.lineAt(t), p = c + m.length * h, y = m.number - u, v = s + c * y + h * (m.from - o - y);
    return new Ai(m.from, m.length, Math.max(s, Math.min(v, s + this.height - p)), p, 0);
  }
  forEachLine(t, e, i, s, o, u) {
    t = Math.max(t, o), e = Math.min(e, o + this.length);
    let { firstLine: c, perLine: h, perChar: m } = this.heightMetrics(i, o);
    for (let p = t, y = s; p <= e; ) {
      let v = i.doc.lineAt(p);
      if (p == t) {
        let w = v.number - c;
        y += h * w + m * (t - o - w);
      }
      let S = h + m * v.length;
      u(new Ai(v.from, v.length, y, S, 0)), y += S, p = v.to + 1;
    }
  }
  replace(t, e, i) {
    let s = this.length - e;
    if (s > 0) {
      let o = i[i.length - 1];
      o instanceof ve ? i[i.length - 1] = new ve(o.length + s) : i.push(null, new ve(s - 1));
    }
    if (t > 0) {
      let o = i[0];
      o instanceof ve ? i[0] = new ve(t + o.length) : i.unshift(new ve(t - 1), null);
    }
    return Ne.of(i);
  }
  decomposeLeft(t, e) {
    e.push(new ve(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new ve(this.length - t - 1));
  }
  updateHeight(t, e = 0, i = !1, s) {
    let o = e + this.length;
    if (s && s.from <= e + this.length && s.more) {
      let u = [], c = Math.max(e, s.from), h = -1;
      for (s.from > e && u.push(new ve(s.from - e - 1).updateHeight(t, e)); c <= o && s.more; ) {
        let p = t.doc.lineAt(c).length;
        u.length && u.push(null);
        let y = s.heights[s.index++], v = 0;
        y < 0 && (v = -y, y = s.heights[s.index++]), h == -1 ? h = y : Math.abs(y - h) >= gu && (h = -2);
        let S = new ei(p, y, v);
        S.outdated = !1, u.push(S), c += p + 1;
      }
      c <= o && u.push(null, new ve(o - c).updateHeight(t, c));
      let m = Ne.of(u);
      return (h < 0 || Math.abs(m.height - this.height) >= gu || Math.abs(h - this.heightMetrics(t, e).perLine) >= gu) && (Ls = !0), Eu(this, m);
    } else (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class sk extends Ne {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, s) {
    let o = i + this.left.height;
    return t < o ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, o, s + this.left.length + this.break);
  }
  lineAt(t, e, i, s, o) {
    let u = s + this.left.height, c = o + this.left.length + this.break, h = e == Gt.ByHeight ? t < u : t < c, m = h ? this.left.lineAt(t, e, i, s, o) : this.right.lineAt(t, e, i, u, c);
    if (this.break || (h ? m.to < c : m.from > c))
      return m;
    let p = e == Gt.ByPosNoHeight ? Gt.ByPosNoHeight : Gt.ByPos;
    return h ? m.join(this.right.lineAt(c, p, i, u, c)) : this.left.lineAt(c, p, i, s, o).join(m);
  }
  forEachLine(t, e, i, s, o, u) {
    let c = s + this.left.height, h = o + this.left.length + this.break;
    if (this.break)
      t < h && this.left.forEachLine(t, e, i, s, o, u), e >= h && this.right.forEachLine(t, e, i, c, h, u);
    else {
      let m = this.lineAt(h, Gt.ByPos, i, s, o);
      t < m.from && this.left.forEachLine(t, m.from - 1, i, s, o, u), m.to >= t && m.from <= e && u(m), e > m.to && this.right.forEachLine(m.to + 1, e, i, c, h, u);
    }
  }
  replace(t, e, i) {
    let s = this.left.length + this.break;
    if (e < s)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - s, e - s, i));
    let o = [];
    t > 0 && this.decomposeLeft(t, o);
    let u = o.length;
    for (let c of i)
      o.push(c);
    if (t > 0 && M1(o, u - 1), e < this.length) {
      let c = o.length;
      this.decomposeRight(e, o), M1(o, c);
    }
    return Ne.of(o);
  }
  decomposeLeft(t, e) {
    let i = this.left.length;
    if (t <= i)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
  }
  decomposeRight(t, e) {
    let i = this.left.length, s = i + this.break;
    if (t >= s)
      return this.right.decomposeRight(t - s, e);
    t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? Ne.of(this.break ? [t, null, e] : [t, e]) : (this.left = Eu(this.left, t), this.right = Eu(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = !1, s) {
    let { left: o, right: u } = this, c = e + o.length + this.break, h = null;
    return s && s.from <= e + o.length && s.more ? h = o = o.updateHeight(t, e, i, s) : o.updateHeight(t, e, i), s && s.from <= c + u.length && s.more ? h = u = u.updateHeight(t, c, i, s) : u.updateHeight(t, c, i), h ? this.balanced(o, u) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function M1(l, t) {
  let e, i;
  l[t] == null && (e = l[t - 1]) instanceof ve && (i = l[t + 1]) instanceof ve && l.splice(t - 1, 3, new ve(e.length + 1 + i.length));
}
const rk = 5;
class wm {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let i = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof ei ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new ei(i - this.pos, -1, 0)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, i) {
    if (t < e || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, o = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let u = e - t;
      i.block ? this.addBlock(new Fb(u, s, i)) : (u || o || s >= rk) && this.addLineDeco(s, o, u);
    } else e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new ei(this.pos - t, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let i = new ve(e - t);
    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof ei)
      return t;
    let e = new ei(0, -1, 0);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + i;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof ei) && !this.isCovered ? this.nodes.push(new ei(0, -1, 0)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = t;
    for (let s of this.nodes)
      s instanceof ei && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(t, e, i, s) {
    let o = new wm(i, t);
    return Mt.spans(e, i, s, o, 0), o.finish(i);
  }
}
function ok(l, t, e) {
  let i = new ak();
  return Mt.compare(l, t, e, i, 0), i.changes;
}
class ak {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, s) {
    (t < e || i && i.heightRelevant || s && s.heightRelevant) && Ms(t, e, this.changes, 5);
  }
}
function uk(l, t) {
  let e = l.getBoundingClientRect(), i = l.ownerDocument, s = i.defaultView || window, o = Math.max(0, e.left), u = Math.min(s.innerWidth, e.right), c = Math.max(0, e.top), h = Math.min(s.innerHeight, e.bottom);
  for (let m = l.parentNode; m && m != i.body; )
    if (m.nodeType == 1) {
      let p = m, y = window.getComputedStyle(p);
      if ((p.scrollHeight > p.clientHeight || p.scrollWidth > p.clientWidth) && y.overflow != "visible") {
        let v = p.getBoundingClientRect();
        o = Math.max(o, v.left), u = Math.min(u, v.right), c = Math.max(c, v.top), h = Math.min(m == l.parentNode ? s.innerHeight : h, v.bottom);
      }
      m = y.position == "absolute" || y.position == "fixed" ? p.offsetParent : p.parentNode;
    } else if (m.nodeType == 11)
      m = m.host;
    else
      break;
  return {
    left: o - e.left,
    right: Math.max(o, u) - e.left,
    top: c - (e.top + t),
    bottom: Math.max(c, h) - (e.top + t)
  };
}
function ck(l) {
  let t = l.getBoundingClientRect(), e = l.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function fk(l, t) {
  let e = l.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class Yh {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.size = i, this.displaySize = s;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i], o = e[i];
      if (s.from != o.from || s.to != o.to || s.size != o.size)
        return !1;
    }
    return !0;
  }
  draw(t, e) {
    return ut.replace({
      widget: new hk(this.displaySize * (e ? t.scaleY : t.scaleX), e)
    }).range(this.from, this.to);
  }
}
class hk extends Ji {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class T1 {
  constructor(t, e) {
    this.view = t, this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = O1, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = jt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = e.facet(vm).some((s) => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new ik(i), this.stateDeco = D1(e), this.heightMap = Ne.empty().applyChanges(this.stateDeco, Et.empty, this.heightOracle.setDoc(e.doc), [new mi(0, 0, 0, e.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ut.set(this.lineGaps.map((s) => s.draw(this, !1))), this.scrollParent = t.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? e.head : e.anchor;
      if (!t.some(({ from: o, to: u }) => s >= o && s <= u)) {
        let { from: o, to: u } = this.lineBlockAt(s);
        t.push(new Fa(o, u));
      }
    }
    return this.viewports = t.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? O1 : new Am(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(Qr(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = D1(this.state);
    let s = t.changedRanges, o = mi.extendWithRanges(s, ok(i, this.stateDeco, t ? t.changes : oe.empty(this.state.doc.length))), u = this.heightMap.height, c = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    k1(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), o), (this.heightMap.height != u || Ls) && (t.flags |= 2), c ? (this.scrollAnchorPos = t.changes.mapPos(c.from, -1), this.scrollAnchorHeight = c.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = u);
    let h = o.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
    let m = h.from != this.viewport.from || h.to != this.viewport.to;
    this.viewport = h, t.flags |= this.updateForViewport(), (m || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && (t.selectionSet || t.focusChanged) && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Db) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: t } = this, e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, o = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? jt.RTL : jt.LTR;
    let u = this.heightOracle.mustRefreshForWrapping(o) || this.mustMeasureContent === "refresh", c = e.getBoundingClientRect(), h = u || this.mustMeasureContent || this.contentDOMHeight != c.height;
    this.contentDOMHeight = c.height, this.mustMeasureContent = !1;
    let m = 0, p = 0;
    if (c.width && c.height) {
      let { scaleX: _, scaleY: K } = fb(e, c);
      (_ > 5e-3 && Math.abs(this.scaleX - _) > 5e-3 || K > 5e-3 && Math.abs(this.scaleY - K) > 5e-3) && (this.scaleX = _, this.scaleY = K, m |= 16, u = h = !0);
    }
    let y = (parseInt(i.paddingTop) || 0) * this.scaleY, v = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != y || this.paddingBottom != v) && (this.paddingTop = y, this.paddingBottom = v, m |= 18), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (h = !0), this.editorWidth = t.scrollDOM.clientWidth, m |= 16);
    let S = hb(this.view.contentDOM, !1).y;
    S != this.scrollParent && (this.scrollParent = S, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let w = this.getScrollOffset();
    this.scrollOffset != w && (this.scrollAnchorHeight = -1, this.scrollOffset = w), this.scrolledToBottom = mb(this.scrollParent || t.win);
    let A = (this.printing ? fk : uk)(e, this.paddingTop), M = A.top - this.pixelViewport.top, O = A.bottom - this.pixelViewport.bottom;
    this.pixelViewport = A;
    let H = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (H != this.inView && (this.inView = H, H && (h = !0)), !this.inView && !this.scrollTarget && !ck(t.dom))
      return 0;
    let z = c.width;
    if ((this.contentDOMWidth != z || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = c.width, this.editorHeight = t.scrollDOM.clientHeight, m |= 16), h) {
      let _ = t.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(_) && (u = !0), u || s.lineWrapping && Math.abs(z - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: K, charWidth: X, textHeight: lt } = t.docView.measureTextSize();
        u = K > 0 && s.refresh(o, K, X, lt, Math.max(5, z / X), _), u && (t.docView.minWidth = 0, m |= 16);
      }
      M > 0 && O > 0 ? p = Math.max(M, O) : M < 0 && O < 0 && (p = Math.min(M, O)), k1();
      for (let K of this.viewports) {
        let X = K.from == this.viewport.from ? _ : t.docView.measureVisibleLineHeights(K);
        this.heightMap = (u ? Ne.empty().applyChanges(this.stateDeco, Et.empty, this.heightOracle, [new mi(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, u, new nk(K.from, X));
      }
      Ls && (m |= 2);
    }
    let Q = !this.viewportIsAppropriate(this.viewport, p) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return Q && (m & 2 && (m |= this.updateScaler()), this.viewport = this.getViewport(p, this.scrollTarget), m |= this.updateForViewport()), (m & 2 || Q) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(u ? [] : this.lineGaps, t)), m |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), m;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), s = this.heightMap, o = this.heightOracle, { visibleTop: u, visibleBottom: c } = this, h = new Fa(s.lineAt(u - i * 1e3, Gt.ByHeight, o, 0, 0).from, s.lineAt(c + (1 - i) * 1e3, Gt.ByHeight, o, 0, 0).to);
    if (e) {
      let { head: m } = e.range;
      if (m < h.from || m > h.to) {
        let p = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), y = s.lineAt(m, Gt.ByPos, o, 0, 0), v;
        e.y == "center" ? v = (y.top + y.bottom) / 2 - p / 2 : e.y == "start" || e.y == "nearest" && m < h.from ? v = y.top : v = y.bottom - p, h = new Fa(s.lineAt(v - 1e3 / 2, Gt.ByHeight, o, 0, 0).from, s.lineAt(v + p + 1e3 / 2, Gt.ByHeight, o, 0, 0).to);
      }
    }
    return h;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
    return new Fa(this.heightMap.lineAt(i, Gt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, Gt.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(t, Gt.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(e, Gt.ByPos, this.heightOracle, 0, 0), { visibleTop: u, visibleBottom: c } = this;
    return (t == 0 || s <= u - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (e == this.state.doc.length || o >= c + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > u - 2 * 1e3 && o < c + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let s of t)
      e.touchesRange(s.from, s.to) || i.push(new Yh(e.mapPos(s.from), e.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(t, e) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, o = s >> 1, u = s << 1;
    if (this.defaultTextDirection != jt.LTR && !i)
      return [];
    let c = [], h = (p, y, v, S) => {
      if (y - p < o)
        return;
      let w = this.state.selection.main, A = [w.from];
      w.empty || A.push(w.to);
      for (let O of A)
        if (O > p && O < y) {
          h(p, O - 10, v, S), h(O + 10, y, v, S);
          return;
        }
      let M = mk(t, (O) => O.from >= v.from && O.to <= v.to && Math.abs(O.from - p) < o && Math.abs(O.to - y) < o && !A.some((H) => O.from < H && O.to > H));
      if (!M) {
        if (y < v.to && e && i && e.visibleRanges.some((z) => z.from <= y && z.to >= y)) {
          let z = e.moveToLineBoundary(j.cursor(y), !1, !0).head;
          z > p && (y = z);
        }
        let O = this.gapSize(v, p, y, S), H = i || O < 2e6 ? O : 2e6;
        M = new Yh(p, y, O, H);
      }
      c.push(M);
    }, m = (p) => {
      if (p.length < u || p.type != xe.Text)
        return;
      let y = dk(p.from, p.to, this.stateDeco);
      if (y.total < u)
        return;
      let v = this.scrollTarget ? this.scrollTarget.range.head : null, S, w;
      if (i) {
        let A = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, M, O;
        if (v != null) {
          let H = Ia(y, v), z = ((this.visibleBottom - this.visibleTop) / 2 + A) / p.height;
          M = H - z, O = H + z;
        } else
          M = (this.visibleTop - p.top - A) / p.height, O = (this.visibleBottom - p.top + A) / p.height;
        S = Pa(y, M), w = Pa(y, O);
      } else {
        let A = y.total * this.heightOracle.charWidth, M = s * this.heightOracle.charWidth, O = 0;
        if (A > 2e6)
          for (let K of t)
            K.from >= p.from && K.from < p.to && K.size != K.displaySize && K.from * this.heightOracle.charWidth + O < this.pixelViewport.left && (O = K.size - K.displaySize);
        let H = this.pixelViewport.left + O, z = this.pixelViewport.right + O, Q, _;
        if (v != null) {
          let K = Ia(y, v), X = ((z - H) / 2 + M) / A;
          Q = K - X, _ = K + X;
        } else
          Q = (H - M) / A, _ = (z + M) / A;
        S = Pa(y, Q), w = Pa(y, _);
      }
      S > p.from && h(p.from, S, p, y), w < p.to && h(w, p.to, p, y);
    };
    for (let p of this.viewportLines)
      Array.isArray(p.type) ? p.type.forEach(m) : m(p);
    return c;
  }
  gapSize(t, e, i, s) {
    let o = Ia(s, i) - Ia(s, e);
    return this.heightOracle.lineWrapping ? t.height * o : s.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(t) {
    Yh.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = ut.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let i = [];
    Mt.spans(e, this.viewport.from, this.viewport.to, {
      span(o, u) {
        i.push({ from: o, to: u });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let o = 0; o < i.length && !(s & 8); o++) {
        let u = this.visibleRanges[o], c = i[o];
        (u.from != c.from || u.to != c.to) && (s |= 4, t && t.mapPos(u.from, -1) == c.from && t.mapPos(u.to, 1) == c.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Qr(this.heightMap.lineAt(t, Gt.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || Qr(this.heightMap.lineAt(this.scaler.fromDOM(t), Gt.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return Qr(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Fa {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function dk(l, t, e) {
  let i = [], s = l, o = 0;
  return Mt.spans(e, l, t, {
    span() {
    },
    point(u, c) {
      u > s && (i.push({ from: s, to: u }), o += u - s), s = c;
    }
  }, 20), s < t && (i.push({ from: s, to: t }), o += t - s), { total: o, ranges: i };
}
function Pa({ total: l, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(l * e);
  for (let s = 0; ; s++) {
    let { from: o, to: u } = t[s], c = u - o;
    if (i <= c)
      return o + i;
    i -= c;
  }
}
function Ia(l, t) {
  let e = 0;
  for (let { from: i, to: s } of l.ranges) {
    if (t <= s) {
      e += t - i;
      break;
    }
    e += s - i;
  }
  return e / l.total;
}
function mk(l, t) {
  for (let e of l)
    if (t(e))
      return e;
}
const O1 = {
  toDOM(l) {
    return l;
  },
  fromDOM(l) {
    return l;
  },
  scale: 1,
  eq(l) {
    return l == this;
  }
};
function D1(l) {
  let t = l.facet(Fu).filter((i) => typeof i != "function"), e = l.facet(bm).filter((i) => typeof i != "function");
  return e.length && t.push(Mt.join(e)), t;
}
class Am {
  constructor(t, e, i) {
    let s = 0, o = 0, u = 0;
    this.viewports = i.map(({ from: c, to: h }) => {
      let m = e.lineAt(c, Gt.ByPos, t, 0, 0).top, p = e.lineAt(h, Gt.ByPos, t, 0, 0).bottom;
      return s += p - m, { from: c, to: h, top: m, bottom: p, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (e.height - s);
    for (let c of this.viewports)
      c.domTop = u + (c.top - o) * this.scale, u = c.domBottom = c.domTop + (c.bottom - c.top), o = c.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let o = e < this.viewports.length ? this.viewports[e] : null;
      if (!o || t < o.top)
        return s + (t - i) * this.scale;
      if (t <= o.bottom)
        return o.domTop + (t - o.top);
      i = o.bottom, s = o.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let o = e < this.viewports.length ? this.viewports[e] : null;
      if (!o || t < o.domTop)
        return i + (t - s) / this.scale;
      if (t <= o.domBottom)
        return o.top + (t - o.domTop);
      i = o.bottom, s = o.domBottom;
    }
  }
  eq(t) {
    return t instanceof Am ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : !1;
  }
}
function Qr(l, t) {
  if (t.scale == 1)
    return l;
  let e = t.toDOM(l.top), i = t.toDOM(l.bottom);
  return new Ai(l.from, l.length, e, i - e, Array.isArray(l._content) ? l._content.map((s) => Qr(s, t)) : l._content);
}
const $a = /* @__PURE__ */ tt.define({ combine: (l) => l.join(" ") }), qd = /* @__PURE__ */ tt.define({ combine: (l) => l.indexOf(!0) > -1 }), jd = /* @__PURE__ */ Zn.newName(), Pb = /* @__PURE__ */ Zn.newName(), Ib = /* @__PURE__ */ Zn.newName(), $b = { "&light": "." + Pb, "&dark": "." + Ib };
function Yd(l, t, e) {
  return new Zn(t, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return l;
        if (!e || !e[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return e[s];
      }) : l + " " + i;
    }
  });
}
const pk = /* @__PURE__ */ Yd("." + jd, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, $b), gk = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Gh = $.ie && $.ie_version <= 11;
class yk {
  constructor(t) {
    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new QA(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      ($.ie && $.ie_version <= 11 || $.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && $.android && t.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !($.chrome && $.chrome_version < 126) && (this.editContext = new bk(t), t.state.facet(hn) && (t.contentDOM.editContext = this.editContext.editContext)), Gh && (this.onCharData = (e) => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(hn) ? i.root.activeElement != this.dom : !Ir(this.dom, s))
      return;
    let o = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (o && o.isWidget() && o.widget.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    ($.ie && $.ie_version <= 11 || $.android && $.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && to(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = ao(t.root);
    if (!e)
      return !1;
    let i = $.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && vk(this.view, e) || e;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = Ir(this.dom, i);
    return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && JA(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = e)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, gk), Gh && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Gh && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(t, e) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let o = this.delayedAndroidKey;
        o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && Ts(this.dom, o.key, o.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
      key: t,
      keyCode: e,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, i = -1, s = !1;
    for (let o of t) {
      let u = this.readMutation(o);
      u && (u.typeOver && (s = !0), e == -1 ? { from: e, to: i } = u : (e = Math.min(u.from, e), i = Math.max(u.to, i)));
    }
    return { from: e, to: i, typeOver: s };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), s = this.selectionChanged && Ir(this.dom, this.selectionRange);
    if (t < 0 && !s)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let o = new HC(this.view, t, e, i);
    return this.view.docView.domChanged = { newSel: o.newSel ? o.newSel.main : null }, o;
  }
  // Apply pending changes, if any
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = qb(this.view, e);
    return this.view.state == i && (e.domChanged || e.newSel && !Du(this.view.state.selection, e.newSel.main)) && this.view.update([]), s;
  }
  readMutation(t) {
    let e = this.view.docView.tile.nearest(t.target);
    if (!e || e.isWidget())
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "childList") {
      let i = E1(e, t.previousSibling || t.target.previousSibling, -1), s = E1(e, t.nextSibling || t.target.nextSibling, 1);
      return {
        from: i ? e.posAfter(i) : e.posAtStart,
        to: s ? e.posBefore(s) : e.posAtEnd,
        typeOver: !1
      };
    } else return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(hn) != t.state.facet(hn) && (t.view.contentDOM.editContext = t.state.facet(hn) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, i;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function E1(l, t, e) {
  for (; t; ) {
    let i = It.get(t);
    if (i && i.parent == l)
      return i;
    let s = t.parentNode;
    t = s != l.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function R1(l, t) {
  let e = t.startContainer, i = t.startOffset, s = t.endContainer, o = t.endOffset, u = l.docView.domAtPos(l.state.selection.main.anchor, 1);
  return to(u.node, u.offset, s, o) && ([e, i, s, o] = [s, o, e, i]), { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: o };
}
function vk(l, t) {
  if (t.getComposedRanges) {
    let s = t.getComposedRanges(l.root)[0];
    if (s)
      return R1(l, s);
  }
  let e = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0];
  }
  return l.contentDOM.addEventListener("beforeinput", i, !0), l.dom.ownerDocument.execCommand("indent"), l.contentDOM.removeEventListener("beforeinput", i, !0), e ? R1(l, e) : null;
}
class bk {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({
      text: t.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(t.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = t.state.selection.main, { anchor: o, head: u } = s, c = this.toEditorPos(i.updateRangeStart), h = this.toEditorPos(i.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: c, drifted: !1 });
      let m = h - c > i.text.length;
      c == this.from && o < this.from ? c = o : h == this.to && o > this.to && (h = o);
      let p = jb(t.state.sliceDoc(c, h), i.text, (m ? s.from : s.to) - c, m ? "end" : null);
      if (!p) {
        let v = j.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Du(v, s) || t.dispatch({ selection: v, userEvent: "select" });
        return;
      }
      let y = {
        from: p.from + c,
        to: p.toA + c,
        insert: Et.of(i.text.slice(p.from, p.toB).split(`
`))
      };
      if (($.mac || $.android) && y.from == u - 1 && /^\. ?$/.test(i.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (y = { from: c, to: h, insert: Et.of([i.text.replace(".", " ")]) }), this.pendingContextChange = y, !t.state.readOnly) {
        let v = this.to - this.from + (y.to - y.from + y.insert.length);
        xm(t, y, j.single(this.toEditorPos(i.selectionStart, v), this.toEditorPos(i.selectionEnd, v)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), y.from < y.to && !y.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(e.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], o = null;
      for (let u = this.toEditorPos(i.rangeStart), c = this.toEditorPos(i.rangeEnd); u < c; u++) {
        let h = t.coordsForChar(u);
        o = h && new DOMRect(h.left, h.top, h.right - h.left, h.bottom - h.top) || o || new DOMRect(), s.push(o);
      }
      e.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let o of i.getTextFormats()) {
        let u = o.underlineStyle, c = o.underlineThickness;
        if (!/none/i.test(u) && !/none/i.test(c)) {
          let h = this.toEditorPos(o.rangeStart), m = this.toEditorPos(o.rangeEnd);
          if (h < m) {
            let p = `text-decoration: underline ${/^[a-z]/.test(u) ? u + " " : u == "Dashed" ? "dashed " : u == "Squiggle" ? "wavy " : ""}${/thin/i.test(c) ? 1 : 2}px`;
            s.push(ut.mark({ attributes: { style: p } }).range(h, m));
          }
        }
      }
      t.dispatch({ effects: Rb.of(ut.set(s)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(t.state);
      }
    };
    for (let i in this.handlers)
      e.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = ao(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, i = !1, s = this.pendingContextChange;
    return t.changes.iterChanges((o, u, c, h, m) => {
      if (i)
        return;
      let p = m.length - (u - o);
      if (s && u >= s.to)
        if (s.from == o && s.to == u && s.insert.eq(m)) {
          s = this.pendingContextChange = null, e += p, this.to += p;
          return;
        } else
          s = null, this.revertPending(t.state);
      if (o += e, u += e, u <= this.from)
        this.from += p, this.to += p;
      else if (o < this.to) {
        if (o < this.from || u > this.to || this.to - this.from + m.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(o), this.toContextPos(u), m.toString()), this.to += p;
      }
      e += p;
    }), s && !i && this.revertPending(t.state), !i;
  }
  update(t) {
    let e = this.pendingContextChange, i = t.startState.selection.main;
    this.composing && (this.composing.drifted || !t.changes.touchesRange(i.from, i.to) && t.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(
      0,
      e - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      t.doc.length,
      e + 1e4
      /* CxVp.Margin */
    );
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), s = this.toContextPos(e.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (t - i.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers)
      this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class P {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: i } = t;
    this.dispatchTransactions = t.dispatchTransactions || i && ((s) => s.forEach((o) => i(o, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = t.root || ZA(t.parent) || document, this.viewState = new T1(this, t.state || Tt.create(t)), t.scrollTo && t.scrollTo.is(Qa) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ws).map((s) => new _h(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new yk(this), this.inputState = new qC(this), this.inputState.ensureHandlers(this.plugins), this.docView = new m1(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof ae ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = !1, i = !1, s, o = this.state;
    for (let v of t) {
      if (v.startState != o)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o = v.state;
    }
    if (this.destroyed) {
      this.viewState.state = o;
      return;
    }
    let u = this.hasFocus, c = 0, h = null;
    t.some((v) => v.annotation(Qb)) ? (this.inputState.notifiedFocused = u, c = 1) : u != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = u, h = Zb(o, u), h || (c = 1));
    let m = this.observer.delayedAndroidKey, p = null;
    if (m ? (this.observer.clearDelayedAndroidKey(), p = this.observer.readChange(), (p && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (p = null)) : this.observer.clear(), o.facet(Tt.phrases) != this.state.facet(Tt.phrases))
      return this.setState(o);
    s = Mu.create(this, o, t), s.flags |= c;
    let y = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let v of t) {
        if (y && (y = y.map(v.changes)), v.scrollIntoView) {
          let { main: S } = v.state.selection, { x: w, y: A } = this.state.facet(P.cursorScrollMargin);
          y = new Os(S.empty ? S : j.cursor(S.head, S.head > S.anchor ? -1 : 1), "nearest", "nearest", A, w);
        }
        for (let S of v.effects)
          S.is(Qa) && (y = S.value.clip(this.state));
      }
      this.viewState.update(s, y), this.bidiCache = Ru.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(Wr) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((v) => v.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet($a) != s.state.facet($a) && (this.viewState.mustMeasureContent = !0), (e || i || y || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
      for (let v of this.state.facet(zd))
        try {
          v(s);
        } catch (S) {
          Ye(this.state, S, "update listener");
        }
    (h || p) && Promise.resolve().then(() => {
      h && this.state == h.startState && this.dispatch(h), p && !qb(this, p) && m.force && Ts(this.contentDOM, m.key, m.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new T1(this, t), this.plugins = t.facet(ws).map((i) => new _h(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new m1(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(ws), i = t.state.facet(ws);
    if (e != i) {
      let s = [];
      for (let o of i) {
        let u = e.indexOf(o);
        if (u < 0)
          s.push(new _h(o));
        else {
          let c = this.plugins[u];
          c.mustUpdate = t, s.push(c);
        }
      }
      for (let o of this.plugins)
        o.mustUpdate != t && o.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = t;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    e != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate)
        try {
          e.docViewUpdate(this);
        } catch (i) {
          Ye(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(t = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, i = this.viewState.scrollParent, s = this.viewState.getScrollOffset(), { scrollAnchorPos: o, scrollAnchorHeight: u } = this.viewState;
    Math.abs(s - this.viewState.scrollOffset) > 1 && (u = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let c = 0; ; c++) {
        if (u < 0)
          if (mb(i || this.win))
            o = -1, u = this.viewState.heightMap.height;
          else {
            let S = this.viewState.scrollAnchorAt(s);
            o = S.from, u = S.top;
          }
        this.updateState = 1;
        let h = this.viewState.measure();
        if (!h && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (c > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let m = [];
        h & 4 || ([this.measureRequests, m] = [m, this.measureRequests]);
        let p = m.map((S) => {
          try {
            return S.read(this);
          } catch (w) {
            return Ye(this.state, w), B1;
          }
        }), y = Mu.create(this, this.state, []), v = !1;
        y.flags |= h, e ? e.flags |= h : e = y, this.updateState = 2, y.empty || (this.updatePlugins(y), this.inputState.update(y), this.updateAttrs(), v = this.docView.update(y), v && this.docViewUpdate());
        for (let S = 0; S < m.length; S++)
          if (p[S] != B1)
            try {
              let w = m[S];
              w.write && w.write(p[S], this);
            } catch (w) {
              Ye(this.state, w);
            }
        if (v && this.docView.updateSelection(!0), !y.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, u = -1;
              continue;
            } else {
              let w = ((o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - u) / this.scaleY;
              if ((w > 1 || w < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                s = s + w, i ? i.scrollTop += w : this.win.scrollBy(0, w), u = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let c of this.state.facet(zd))
        c(e);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return jd + " " + (this.state.facet(qd) ? Ib : Pb) + " " + this.state.facet($a);
  }
  updateAttrs() {
    let t = N1(this, Bb, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(hn) ? "true" : "false",
      class: "cm-content",
      style: `${$.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), N1(this, vm, e);
    let i = this.observer.ignore(() => {
      let s = a1(this.contentDOM, this.contentAttrs, e), o = a1(this.dom, this.editorAttrs, t);
      return s || o;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let i of t)
      for (let s of i.effects)
        if (s.is(P.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let o = this.announceDOM.appendChild(document.createElement("div"));
          o.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Wr);
    let t = this.state.facet(P.cspNonce);
    Zn.mount(this.root, this.styleModules.concat(pk).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.plugin != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.plugin == t) || null), e && e.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(t, e, i) {
    return jh(this, t, p1(this, t, e, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(t, e) {
    return jh(this, t, p1(this, t, e, (i) => EC(this, t.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(t, e) {
    let i = this.bidiSpans(t), s = this.textDirectionAt(t.from), o = i[e ? i.length - 1 : 0];
    return j.cursor(o.side(e, s) + t.from, o.forward(!e, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(t, e, i = !0) {
    return DC(this, t, e, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(t, e, i) {
    return jh(this, t, RC(this, t, e, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(t, e = 1) {
    return this.docView.domAtPos(t, e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = !0) {
    this.readMeasured();
    let i = Ud(this, t, e);
    return i && i.pos;
  }
  posAndSideAtCoords(t, e = !0) {
    return this.readMeasured(), Ud(this, t, e);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(t, e);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(t), o = this.bidiSpans(s), u = o[ji.find(o, t - s.from, -1, e)];
    return uo(i, u.dir == jt.LTR == e > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(t) {
    return !this.state.facet(Ob) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(t) {
    if (t.length > Sk)
      return Sb(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let o of this.bidiCache)
      if (o.from == t.from && o.dir == e && (o.fresh || bb(o.isolates, i = f1(this, t))))
        return o.order;
    i || (i = f1(this, t));
    let s = iC(t.text, e, i);
    return this.bidiCache.push(new Ru(t.from, t.to, e, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || $.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      db(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(t, e = {}) {
    var i, s, o, u;
    return Qa.of(new Os(typeof t == "number" ? j.cursor(t) : t, (i = e.y) !== null && i !== void 0 ? i : "nearest", (s = e.x) !== null && s !== void 0 ? s : "nearest", (o = e.yMargin) !== null && o !== void 0 ? o : 5, (u = e.xMargin) !== null && u !== void 0 ? u : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
    return Qa.of(new Os(j.cursor(i.from), "start", "start", i.top - t, e, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(t) {
    return Zt.define(() => ({}), { eventHandlers: t });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(t) {
    return Zt.define(() => ({}), { eventObservers: t });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(t, e) {
    let i = Zn.newName(), s = [$a.of(i), Wr.of(Yd(`.${i}`, t))];
    return e && e.dark && s.push(qd.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(t) {
    return tl.lowest(Wr.of(Yd("." + jd, t, $b)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), s = i && It.get(i) || It.get(t);
    return ((e = s?.root) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
P.styleModule = Wr;
P.inputHandler = Mb;
P.clipboardInputFilter = gm;
P.clipboardOutputFilter = ym;
P.scrollHandler = Eb;
P.focusChangeEffect = Tb;
P.perLineTextDirection = Ob;
P.exceptionSink = kb;
P.updateListener = zd;
P.editable = hn;
P.mouseSelectionStyle = Cb;
P.dragMovesSelection = Ab;
P.clickAddsSelectionRange = wb;
P.decorations = Fu;
P.blockWrappers = Nb;
P.outerDecorations = bm;
P.atomicRanges = Ao;
P.bidiIsolatedRanges = Lb;
P.cursorScrollMargin = /* @__PURE__ */ tt.define({
  combine: (l) => {
    let t = 5, e = 5;
    for (let i of l)
      typeof i == "number" ? t = e = i : { x: t, y: e } = i;
    return { x: t, y: e };
  }
});
P.scrollMargins = zb;
P.darkTheme = qd;
P.cspNonce = /* @__PURE__ */ tt.define({ combine: (l) => l.length ? l[0] : "" });
P.contentAttributes = vm;
P.editorAttributes = Bb;
P.lineWrapping = /* @__PURE__ */ P.contentAttributes.of({ class: "cm-lineWrapping" });
P.announce = /* @__PURE__ */ vt.define();
const Sk = 4096, B1 = {};
class Ru {
  constructor(t, e, i, s, o, u) {
    this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = o, this.order = u;
  }
  static update(t, e) {
    if (e.empty && !t.some((o) => o.fresh))
      return t;
    let i = [], s = t.length ? t[t.length - 1].dir : jt.LTR;
    for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
      let u = t[o];
      u.dir == s && !e.touchesRange(u.from, u.to) && i.push(new Ru(e.mapPos(u.from, 1), e.mapPos(u.to, -1), u.dir, u.isolates, !1, u.order));
    }
    return i;
  }
}
function N1(l, t, e) {
  for (let i = l.state.facet(t), s = i.length - 1; s >= 0; s--) {
    let o = i[s], u = typeof o == "function" ? o(l) : o;
    u && dm(u, e);
  }
  return e;
}
const xk = $.mac ? "mac" : $.windows ? "win" : $.linux ? "linux" : "key";
function wk(l, t) {
  const e = l.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let s, o, u, c;
  for (let h = 0; h < e.length - 1; ++h) {
    const m = e[h];
    if (/^(cmd|meta|m)$/i.test(m))
      c = !0;
    else if (/^a(lt)?$/i.test(m))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(m))
      o = !0;
    else if (/^s(hift)?$/i.test(m))
      u = !0;
    else if (/^mod$/i.test(m))
      t == "mac" ? c = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + m);
  }
  return s && (i = "Alt-" + i), o && (i = "Ctrl-" + i), c && (i = "Meta-" + i), u && (i = "Shift-" + i), i;
}
function tu(l, t, e) {
  return t.altKey && (l = "Alt-" + l), t.ctrlKey && (l = "Ctrl-" + l), t.metaKey && (l = "Meta-" + l), e !== !1 && t.shiftKey && (l = "Shift-" + l), l;
}
const Ak = /* @__PURE__ */ tl.default(/* @__PURE__ */ P.domEventHandlers({
  keydown(l, t) {
    return eS(tS(t.state), l, t, "editor");
  }
})), Co = /* @__PURE__ */ tt.define({ enables: Ak }), L1 = /* @__PURE__ */ new WeakMap();
function tS(l) {
  let t = l.facet(Co), e = L1.get(t);
  return e || L1.set(t, e = Mk(t.reduce((i, s) => i.concat(s), []))), e;
}
function Ck(l, t, e) {
  return eS(tS(l.state), t, l, e);
}
let Gn = null;
const kk = 4e3;
function Mk(l, t = xk) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (u, c) => {
    let h = i[u];
    if (h == null)
      i[u] = c;
    else if (h != c)
      throw new Error("Key binding " + u + " is used both as a regular binding and as a multi-stroke prefix");
  }, o = (u, c, h, m, p) => {
    var y, v;
    let S = e[u] || (e[u] = /* @__PURE__ */ Object.create(null)), w = c.split(/ (?!$)/).map((O) => wk(O, t));
    for (let O = 1; O < w.length; O++) {
      let H = w.slice(0, O).join(" ");
      s(H, !0), S[H] || (S[H] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(z) => {
          let Q = Gn = { view: z, prefix: H, scope: u };
          return setTimeout(() => {
            Gn == Q && (Gn = null);
          }, kk), !0;
        }]
      });
    }
    let A = w.join(" ");
    s(A, !1);
    let M = S[A] || (S[A] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((v = (y = S._any) === null || y === void 0 ? void 0 : y.run) === null || v === void 0 ? void 0 : v.slice()) || []
    });
    h && M.run.push(h), m && (M.preventDefault = !0), p && (M.stopPropagation = !0);
  };
  for (let u of l) {
    let c = u.scope ? u.scope.split(" ") : ["editor"];
    if (u.any)
      for (let m of c) {
        let p = e[m] || (e[m] = /* @__PURE__ */ Object.create(null));
        p._any || (p._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: y } = u;
        for (let v in p)
          p[v].run.push((S) => y(S, Gd));
      }
    let h = u[t] || u.key;
    if (h)
      for (let m of c)
        o(m, h, u.run, u.preventDefault, u.stopPropagation), u.shift && o(m, "Shift-" + h, u.shift, u.preventDefault, u.stopPropagation);
  }
  return e;
}
let Gd = null;
function eS(l, t, e, i) {
  Gd = t;
  let s = jA(t), o = Ve(s, 0), u = Vi(o) == s.length && s != " ", c = "", h = !1, m = !1, p = !1;
  Gn && Gn.view == e && Gn.scope == i && (c = Gn.prefix + " ", Gb.indexOf(t.keyCode) < 0 && (m = !0, Gn = null));
  let y = /* @__PURE__ */ new Set(), v = (M) => {
    if (M) {
      for (let O of M.run)
        if (!y.has(O) && (y.add(O), O(e)))
          return M.stopPropagation && (p = !0), !0;
      M.preventDefault && (M.stopPropagation && (p = !0), m = !0);
    }
    return !1;
  }, S = l[i], w, A;
  return S && (v(S[c + tu(s, t, !u)]) ? h = !0 : u && (t.altKey || t.metaKey || t.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !($.windows && t.ctrlKey && t.altKey) && // Alt-combinations on macOS tend to be typed characters
  !($.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (w = Jn[t.keyCode]) && w != s ? (v(S[c + tu(w, t, !0)]) || t.shiftKey && (A = ro[t.keyCode]) != s && A != w && v(S[c + tu(A, t, !1)])) && (h = !0) : u && t.shiftKey && v(S[c + tu(s, t, !0)]) && (h = !0), !h && v(S._any) && (h = !0)), m && (h = !0), h && p && t.stopPropagation(), Gd = null, h;
}
class Tl {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(t, e, i, s, o) {
    this.className = t, this.left = e, this.top = i, this.width = s, this.height = o;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? !1 : (this.adjust(t), !0);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(t, e, i) {
    if (i.empty) {
      let s = t.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let o = iS(t);
      return [new Tl(e, s.left - o.left, s.top - o.top, null, s.bottom - s.top)];
    } else
      return Tk(t, e, i);
  }
}
function iS(l) {
  let t = l.scrollDOM.getBoundingClientRect();
  return { left: (l.textDirection == jt.LTR ? t.left : t.right - l.scrollDOM.clientWidth * l.scaleX) - l.scrollDOM.scrollLeft * l.scaleX, top: t.top - l.scrollDOM.scrollTop * l.scaleY };
}
function z1(l, t, e, i) {
  let s = l.coordsAtPos(t, e * 2);
  if (!s)
    return i;
  let o = l.dom.getBoundingClientRect(), u = (s.top + s.bottom) / 2, c = l.posAtCoords({ x: o.left + 1, y: u }), h = l.posAtCoords({ x: o.right - 1, y: u });
  return c == null || h == null ? i : { from: Math.max(i.from, Math.min(c, h)), to: Math.min(i.to, Math.max(c, h)) };
}
function Tk(l, t, e) {
  if (e.to <= l.viewport.from || e.from >= l.viewport.to)
    return [];
  let i = Math.max(e.from, l.viewport.from), s = Math.min(e.to, l.viewport.to), o = l.textDirection == jt.LTR, u = l.contentDOM, c = u.getBoundingClientRect(), h = iS(l), m = u.querySelector(".cm-line"), p = m && window.getComputedStyle(m), y = c.left + (p ? parseInt(p.paddingLeft) + Math.min(0, parseInt(p.textIndent)) : 0), v = c.right - (p ? parseInt(p.paddingRight) : 0), S = _d(l, i, 1), w = _d(l, s, -1), A = S.type == xe.Text ? S : null, M = w.type == xe.Text ? w : null;
  if (A && (l.lineWrapping || S.widgetLineBreaks) && (A = z1(l, i, 1, A)), M && (l.lineWrapping || w.widgetLineBreaks) && (M = z1(l, s, -1, M)), A && M && A.from == M.from && A.to == M.to)
    return H(z(e.from, e.to, A));
  {
    let _ = A ? z(e.from, null, A) : Q(S, !1), K = M ? z(null, e.to, M) : Q(w, !0), X = [];
    return (A || S).to < (M || w).from - (A && M ? 1 : 0) || S.widgetLineBreaks > 1 && _.bottom + l.defaultLineHeight / 2 < K.top ? X.push(O(y, _.bottom, v, K.top)) : _.bottom < K.top && l.elementAtHeight((_.bottom + K.top) / 2).type == xe.Text && (_.bottom = K.top = (_.bottom + K.top) / 2), H(_).concat(X).concat(H(K));
  }
  function O(_, K, X, lt) {
    return new Tl(t, _ - h.left, K - h.top, Math.max(0, X - _), lt - K);
  }
  function H({ top: _, bottom: K, horizontal: X }) {
    let lt = [];
    for (let et = 0; et < X.length; et += 2)
      lt.push(O(X[et], _, X[et + 1], K));
    return lt;
  }
  function z(_, K, X) {
    let lt = 1e9, et = -1e9, yt = [];
    function at(pt, gt, L, W, it) {
      let ot = l.coordsAtPos(pt, pt == X.to ? -2 : 2), k = l.coordsAtPos(L, L == X.from ? 2 : -2);
      !ot || !k || (lt = Math.min(ot.top, k.top, lt), et = Math.max(ot.bottom, k.bottom, et), it == jt.LTR ? yt.push(o && gt ? y : ot.left, o && W ? v : k.right) : yt.push(!o && W ? y : k.left, !o && gt ? v : ot.right));
    }
    let I = _ ?? X.from, ft = K ?? X.to;
    for (let pt of l.visibleRanges)
      if (pt.to > I && pt.from < ft)
        for (let gt = Math.max(pt.from, I), L = Math.min(pt.to, ft); ; ) {
          let W = l.state.doc.lineAt(gt);
          for (let it of l.bidiSpans(W)) {
            let ot = it.from + W.from, k = it.to + W.from;
            if (ot >= L)
              break;
            k > gt && at(Math.max(ot, gt), _ == null && ot <= I, Math.min(k, L), K == null && k >= ft, it.dir);
          }
          if (gt = W.to + 1, gt >= L)
            break;
        }
    return yt.length == 0 && at(I, _ == null, ft, K == null, l.textDirection), { top: lt, bottom: et, horizontal: yt };
  }
  function Q(_, K) {
    let X = c.top + (K ? _.top : _.bottom);
    return { top: X, bottom: X, horizontal: [] };
  }
}
function Ok(l, t) {
  return l.constructor == t.constructor && l.eq(t);
}
class Dk {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(yu) != t.state.facet(yu) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== !1 && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, i = t.facet(yu);
    for (; e < i.length && i[e] != this.layer; )
      e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t, scaleY: e } = this.view;
    (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1 / t}, ${1 / e})`);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, i) => !Ok(e, this.drawn[i]))) {
      let e = this.dom.firstChild, i = 0;
      for (let s of t)
        s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
      for (; e; ) {
        let s = e.nextSibling;
        e.remove(), e = s;
      }
      this.drawn = t, $.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const yu = /* @__PURE__ */ tt.define();
function nS(l) {
  return [
    Zt.define((t) => new Dk(t, l)),
    yu.of(l)
  ];
}
const zs = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (t, e) => Math.min(t, e),
      drawRangeCursor: (t, e) => t || e
    });
  }
});
function Ek(l = {}) {
  return [
    zs.of(l),
    Rk,
    Bk,
    Nk,
    Db.of(!0)
  ];
}
function lS(l) {
  return l.startState.facet(zs) != l.state.facet(zs);
}
const Rk = /* @__PURE__ */ nS({
  above: !0,
  markers(l) {
    let { state: t } = l, e = t.facet(zs), i = [];
    for (let s of t.selection.ranges) {
      let o = s == t.selection.main;
      if (s.empty || e.drawRangeCursor && !(o && $.ios && e.iosSelectionHandles)) {
        let u = o ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", c = s.empty ? s : j.cursor(s.head, s.assoc);
        for (let h of Tl.forRange(l, u, c))
          i.push(h);
      }
    }
    return i;
  },
  update(l, t) {
    l.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let e = lS(l);
    return e && H1(l.state, t), l.docChanged || l.selectionSet || e;
  },
  mount(l, t) {
    H1(t.state, l);
  },
  class: "cm-cursorLayer"
});
function H1(l, t) {
  t.style.animationDuration = l.facet(zs).cursorBlinkRate + "ms";
}
const Bk = /* @__PURE__ */ nS({
  above: !1,
  markers(l) {
    let t = [], { main: e, ranges: i } = l.state.selection;
    for (let s of i)
      if (!s.empty)
        for (let o of Tl.forRange(l, "cm-selectionBackground", s))
          t.push(o);
    if ($.ios && !e.empty && l.state.facet(zs).iosSelectionHandles) {
      for (let s of Tl.forRange(l, "cm-selectionHandle cm-selectionHandle-start", j.cursor(e.from, 1)))
        t.push(s);
      for (let s of Tl.forRange(l, "cm-selectionHandle cm-selectionHandle-end", j.cursor(e.to, 1)))
        t.push(s);
    }
    return t;
  },
  update(l, t) {
    return l.docChanged || l.selectionSet || l.viewportChanged || lS(l);
  },
  class: "cm-selectionLayer"
}), Nk = /* @__PURE__ */ tl.highest(/* @__PURE__ */ P.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
})), sS = /* @__PURE__ */ vt.define({
  map(l, t) {
    return l == null ? null : t.mapPos(l);
  }
}), Zr = /* @__PURE__ */ Oe.define({
  create() {
    return null;
  },
  update(l, t) {
    return l != null && (l = t.changes.mapPos(l)), t.effects.reduce((e, i) => i.is(sS) ? i.value : e, l);
  }
}), Lk = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.view = l, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(l) {
    var t;
    let e = l.state.field(Zr);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (l.startState.field(Zr) != e || l.docChanged || l.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: l } = this, t = l.state.field(Zr), e = t != null && l.coordsAtPos(t);
    if (!e)
      return null;
    let i = l.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - i.left + l.scrollDOM.scrollLeft * l.scaleX,
      top: e.top - i.top + l.scrollDOM.scrollTop * l.scaleY,
      height: e.bottom - e.top
    };
  }
  drawCursor(l) {
    if (this.cursor) {
      let { scaleX: t, scaleY: e } = this.view;
      l ? (this.cursor.style.left = l.left / t + "px", this.cursor.style.top = l.top / e + "px", this.cursor.style.height = l.height / e + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(l) {
    this.view.state.field(Zr) != l && this.view.dispatch({ effects: sS.of(l) });
  }
}, {
  eventObservers: {
    dragover(l) {
      this.setDropPos(this.view.posAtCoords({ x: l.clientX, y: l.clientY }));
    },
    dragleave(l) {
      (l.target == this.view.contentDOM || !this.view.contentDOM.contains(l.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function zk() {
  return [Zr, Lk];
}
function _1(l, t, e, i, s) {
  t.lastIndex = 0;
  for (let o = l.iterRange(e, i), u = e, c; !o.next().done; u += o.value.length)
    if (!o.lineBreak)
      for (; c = t.exec(o.value); )
        s(u + c.index, c);
}
function Hk(l, t) {
  let e = l.visibleRanges;
  if (e.length == 1 && e[0].from == l.viewport.from && e[0].to == l.viewport.to)
    return e;
  let i = [];
  for (let { from: s, to: o } of e)
    s = Math.max(l.state.doc.lineAt(s).from, s - t), o = Math.min(l.state.doc.lineAt(o).to, o + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = o : i.push({ from: s, to: o });
  return i;
}
class _k {
  /**
  Create a decorator.
  */
  constructor(t) {
    const { regexp: e, decoration: i, decorate: s, boundary: o, maxLength: u = 1e3 } = t;
    if (!e.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, s)
      this.addMatch = (c, h, m, p) => s(p, m, m + c[0].length, c, h);
    else if (typeof i == "function")
      this.addMatch = (c, h, m, p) => {
        let y = i(c, h, m);
        y && p(m, m + c[0].length, y);
      };
    else if (i)
      this.addMatch = (c, h, m, p) => p(m, m + c[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = o, this.maxLength = u;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(t) {
    let e = new Wi(), i = e.add.bind(e);
    for (let { from: s, to: o } of Hk(t, this.maxLength))
      _1(t.state.doc, this.regexp, s, o, (u, c) => this.addMatch(c, t, u, i));
    return e.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(t, e) {
    let i = 1e9, s = -1;
    return t.docChanged && t.changes.iterChanges((o, u, c, h) => {
      h >= t.view.viewport.from && c <= t.view.viewport.to && (i = Math.min(c, i), s = Math.max(h, s));
    }), t.viewportMoved || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e;
  }
  updateRange(t, e, i, s) {
    for (let o of t.visibleRanges) {
      let u = Math.max(o.from, i), c = Math.min(o.to, s);
      if (c >= u) {
        let h = t.state.doc.lineAt(u), m = h.to < c ? t.state.doc.lineAt(c) : h, p = Math.max(o.from, h.from), y = Math.min(o.to, m.to);
        if (this.boundary) {
          for (; u > h.from; u--)
            if (this.boundary.test(h.text[u - 1 - h.from])) {
              p = u;
              break;
            }
          for (; c < m.to; c++)
            if (this.boundary.test(m.text[c - m.from])) {
              y = c;
              break;
            }
        }
        let v = [], S, w = (A, M, O) => v.push(O.range(A, M));
        if (h == m)
          for (this.regexp.lastIndex = p - h.from; (S = this.regexp.exec(h.text)) && S.index < y - h.from; )
            this.addMatch(S, t, S.index + h.from, w);
        else
          _1(t.state.doc, this.regexp, p, y, (A, M) => this.addMatch(M, t, A, w));
        e = e.update({ filterFrom: p, filterTo: y, filter: (A, M) => A < p || M > y, add: v });
      }
    }
    return e;
  }
}
const Kd = /x/.unicode != null ? "gu" : "g", Uk = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Kd), Vk = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Kh = null;
function qk() {
  var l;
  if (Kh == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    Kh = ((l = t.tabSize) !== null && l !== void 0 ? l : t.MozTabSize) != null;
  }
  return Kh || !1;
}
const vu = /* @__PURE__ */ tt.define({
  combine(l) {
    let t = Zi(l, {
      render: null,
      specialChars: Uk,
      addSpecialChars: null
    });
    return (t.replaceTabs = !qk()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, Kd)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Kd)), t;
  }
});
function jk(l = {}) {
  return [vu.of(l), Yk()];
}
let U1 = null;
function Yk() {
  return U1 || (U1 = Zt.fromClass(class {
    constructor(l) {
      this.view = l, this.decorations = ut.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(l.state.facet(vu)), this.decorations = this.decorator.createDeco(l);
    }
    makeDecorator(l) {
      return new _k({
        regexp: l.specialChars,
        decoration: (t, e, i) => {
          let { doc: s } = e.state, o = Ve(t[0], 0);
          if (o == 9) {
            let u = s.lineAt(i), c = e.state.tabSize, h = Vs(u.text, c, i - u.from);
            return ut.replace({
              widget: new Wk((c - h % c) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[o] || (this.decorationCache[o] = ut.replace({ widget: new Xk(l, o) }));
        },
        boundary: l.replaceTabs ? void 0 : /[^]/
      });
    }
    update(l) {
      let t = l.state.facet(vu);
      l.startState.facet(vu) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(l.view)) : this.decorations = this.decorator.updateDeco(l, this.decorations);
    }
  }, {
    decorations: (l) => l.decorations
  }));
}
const Gk = "•";
function Kk(l) {
  return l >= 32 ? Gk : l == 10 ? "␤" : String.fromCharCode(9216 + l);
}
class Xk extends Ji {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = Kk(this.code), i = t.state.phrase("Control character") + " " + (Vk[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
    if (s)
      return s;
    let o = document.createElement("span");
    return o.textContent = e, o.title = i, o.setAttribute("aria-label", i), o.className = "cm-specialChar", o;
  }
  ignoreEvent() {
    return !1;
  }
}
class Wk extends Ji {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return !1;
  }
}
function Qk() {
  return Jk;
}
const Zk = /* @__PURE__ */ ut.line({ class: "cm-activeLine" }), Jk = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.decorations = this.getDeco(l);
  }
  update(l) {
    (l.docChanged || l.selectionSet) && (this.decorations = this.getDeco(l.view));
  }
  getDeco(l) {
    let t = -1, e = [];
    for (let i of l.state.selection.ranges) {
      let s = l.lineBlockAt(i.head);
      s.from > t && (e.push(Zk.range(s.from)), t = s.from);
    }
    return ut.set(e);
  }
}, {
  decorations: (l) => l.decorations
});
class Fk extends Ji {
  constructor(t) {
    super(), this.content = t;
  }
  toDOM(t) {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(!0)), e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(t) {
    let e = t.firstChild ? $r(t.firstChild) : [];
    if (!e.length)
      return null;
    let i = window.getComputedStyle(t.parentNode), s = uo(e[0], i.direction != "rtl"), o = parseInt(i.lineHeight);
    return s.bottom - s.top > o * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + o } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function Pk(l) {
  let t = Zt.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = l ? ut.set([ut.widget({ widget: new Fk(l), side: 1 }).range(0)]) : ut.none;
    }
    get decorations() {
      return this.view.state.doc.length ? ut.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
  return typeof l == "string" ? [
    t,
    P.contentAttributes.of({ "aria-placeholder": l })
  ] : t;
}
const Xd = 2e3;
function Ik(l, t, e) {
  let i = Math.min(t.line, e.line), s = Math.max(t.line, e.line), o = [];
  if (t.off > Xd || e.off > Xd || t.col < 0 || e.col < 0) {
    let u = Math.min(t.off, e.off), c = Math.max(t.off, e.off);
    for (let h = i; h <= s; h++) {
      let m = l.doc.line(h);
      m.length <= c && o.push(j.range(m.from + u, m.to + c));
    }
  } else {
    let u = Math.min(t.col, e.col), c = Math.max(t.col, e.col);
    for (let h = i; h <= s; h++) {
      let m = l.doc.line(h), p = Cd(m.text, u, l.tabSize, !0);
      if (p < 0)
        o.push(j.cursor(m.to));
      else {
        let y = Cd(m.text, c, l.tabSize);
        o.push(j.range(m.from + p, m.from + y));
      }
    }
  }
  return o;
}
function $k(l, t) {
  let e = l.coordsAtPos(l.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / l.defaultCharacterWidth)) : -1;
}
function V1(l, t) {
  let e = l.posAtCoords({ x: t.clientX, y: t.clientY }, !1), i = l.state.doc.lineAt(e), s = e - i.from, o = s > Xd ? -1 : s == i.length ? $k(l, t.clientX) : Vs(i.text, l.state.tabSize, e - i.from);
  return { line: i.number, col: o, off: s };
}
function tM(l, t) {
  let e = V1(l, t), i = l.state.selection;
  return e ? {
    update(s) {
      if (s.docChanged) {
        let o = s.changes.mapPos(s.startState.doc.line(e.line).from), u = s.state.doc.lineAt(o);
        e = { line: u.number, col: e.col, off: Math.min(e.off, u.length) }, i = i.map(s.changes);
      }
    },
    get(s, o, u) {
      let c = V1(l, s);
      if (!c)
        return i;
      let h = Ik(l.state, e, c);
      return h.length ? u ? j.create(h.concat(i.ranges)) : j.create(h) : i;
    }
  } : null;
}
function eM(l) {
  let t = ((e) => e.altKey && e.button == 0);
  return P.mouseSelectionStyle.of((e, i) => t(i) ? tM(e, i) : null);
}
const iM = {
  Alt: [18, (l) => !!l.altKey],
  Control: [17, (l) => !!l.ctrlKey],
  Shift: [16, (l) => !!l.shiftKey],
  Meta: [91, (l) => !!l.metaKey]
}, nM = { style: "cursor: crosshair" };
function lM(l = {}) {
  let [t, e] = iM[l.key || "Alt"], i = Zt.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == t || e(s));
      },
      keyup(s) {
        (s.keyCode == t || !e(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(e(s));
      }
    }
  });
  return [
    i,
    P.contentAttributes.of((s) => {
      var o;
      return !((o = s.plugin(i)) === null || o === void 0) && o.isDown ? nM : null;
    })
  ];
}
const eu = "-10000px";
class rS {
  constructor(t, e, i, s) {
    this.facet = e, this.createTooltipView = i, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter((u) => u);
    let o = null;
    this.tooltipViews = this.tooltips.map((u) => o = i(u, o));
  }
  update(t, e) {
    var i;
    let s = t.state.facet(this.facet), o = s.filter((h) => h);
    if (s === this.input) {
      for (let h of this.tooltipViews)
        h.update && h.update(t);
      return !1;
    }
    let u = [], c = e ? [] : null;
    for (let h = 0; h < o.length; h++) {
      let m = o[h], p = -1;
      if (m) {
        for (let y = 0; y < this.tooltips.length; y++) {
          let v = this.tooltips[y];
          v && v.create == m.create && (p = y);
        }
        if (p < 0)
          u[h] = this.createTooltipView(m, h ? u[h - 1] : null), c && (c[h] = !!m.above);
        else {
          let y = u[h] = this.tooltipViews[p];
          c && (c[h] = e[p]), y.update && y.update(t);
        }
      }
    }
    for (let h of this.tooltipViews)
      u.indexOf(h) < 0 && (this.removeTooltipView(h), (i = h.destroy) === null || i === void 0 || i.call(h));
    return e && (c.forEach((h, m) => e[m] = h), e.length = c.length), this.input = s, this.tooltips = o, this.tooltipViews = u, !0;
  }
}
function sM(l) {
  let t = l.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const Xh = /* @__PURE__ */ tt.define({
  combine: (l) => {
    var t, e, i;
    return {
      position: $.ios ? "absolute" : ((t = l.find((s) => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = l.find((s) => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((i = l.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || sM
    };
  }
}), q1 = /* @__PURE__ */ new WeakMap(), Cm = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.view = l, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = l.state.facet(Xh);
    this.position = t.position, this.parent = t.parent, this.classes = l.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new rS(l, km, (e, i) => this.createTooltip(e, i), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), l.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let l of this.manager.tooltipViews)
        this.intersectionObserver.observe(l.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(l) {
    l.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(l, this.above);
    t && this.observeIntersection();
    let e = t || l.geometryChanged, i = l.state.facet(Xh);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      e = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      e = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(l, t) {
    let e = l.create(this.view), i = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), l.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", e.dom.appendChild(s);
    }
    return e.dom.style.position = this.position, e.dom.style.top = eu, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var l, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (l = i.destroy) === null || l === void 0 || l.call(i);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let l = 1, t = 1, e = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: o } = this.manager.tooltipViews[0];
      if ($.safari) {
        let u = o.getBoundingClientRect();
        e = Math.abs(u.top + 1e4) > 1 || Math.abs(u.left) > 1;
      } else
        e = !!o.offsetParent && o.offsetParent != this.container.ownerDocument.body;
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let o = this.parent.getBoundingClientRect();
        o.width && o.height && (l = o.width / this.parent.offsetWidth, t = o.height / this.parent.offsetHeight);
      } else
        ({ scaleX: l, scaleY: t } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = Sm(this.view);
    return {
      visible: {
        left: i.left + s.left,
        top: i.top + s.top,
        right: i.right - s.right,
        bottom: i.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((o, u) => {
        let c = this.manager.tooltipViews[u];
        return c.getCoords ? c.getCoords(o.pos) : this.view.coordsAtPos(o.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: o }) => o.getBoundingClientRect()),
      space: this.view.state.facet(Xh).tooltipSpace(this.view),
      scaleX: l,
      scaleY: t,
      makeAbsolute: e
    };
  }
  writeMeasure(l) {
    var t;
    if (l.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let c of this.manager.tooltipViews)
        c.dom.style.position = "absolute";
    }
    let { visible: e, space: i, scaleX: s, scaleY: o } = l, u = [];
    for (let c = 0; c < this.manager.tooltips.length; c++) {
      let h = this.manager.tooltips[c], m = this.manager.tooltipViews[c], { dom: p } = m, y = l.pos[c], v = l.size[c];
      if (!y || h.clip !== !1 && (y.bottom <= Math.max(e.top, i.top) || y.top >= Math.min(e.bottom, i.bottom) || y.right < Math.max(e.left, i.left) - 0.1 || y.left > Math.min(e.right, i.right) + 0.1)) {
        p.style.top = eu;
        continue;
      }
      let S = h.arrow ? m.dom.querySelector(".cm-tooltip-arrow") : null, w = S ? 7 : 0, A = v.right - v.left, M = (t = q1.get(m)) !== null && t !== void 0 ? t : v.bottom - v.top, O = m.offset || oM, H = this.view.textDirection == jt.LTR, z = v.width > i.right - i.left ? H ? i.left : i.right - v.width : H ? Math.max(i.left, Math.min(y.left - (S ? 14 : 0) + O.x, i.right - A)) : Math.min(Math.max(i.left, y.left - A + (S ? 14 : 0) - O.x), i.right - A), Q = this.above[c];
      !h.strictSide && (Q ? y.top - M - w - O.y < i.top : y.bottom + M + w + O.y > i.bottom) && Q == i.bottom - y.bottom > y.top - i.top && (Q = this.above[c] = !Q);
      let _ = (Q ? y.top - i.top : i.bottom - y.bottom) - w;
      if (_ < M && m.resize !== !1) {
        if (_ < this.view.defaultLineHeight) {
          p.style.top = eu;
          continue;
        }
        q1.set(m, M), p.style.height = (M = _) / o + "px";
      } else p.style.height && (p.style.height = "");
      let K = Q ? y.top - M - w - O.y : y.bottom + w + O.y, X = z + A;
      if (m.overlap !== !0)
        for (let lt of u)
          lt.left < X && lt.right > z && lt.top < K + M && lt.bottom > K && (K = Q ? lt.top - M - 2 - w : lt.bottom + w + 2);
      if (this.position == "absolute" ? (p.style.top = (K - l.parent.top) / o + "px", j1(p, (z - l.parent.left) / s)) : (p.style.top = K / o + "px", j1(p, z / s)), S) {
        let lt = y.left + (H ? O.x : -O.x) - (z + 14 - 7);
        S.style.left = lt / s + "px";
      }
      m.overlap !== !0 && u.push({ left: z, top: K, right: X, bottom: K + M }), p.classList.toggle("cm-tooltip-above", Q), p.classList.toggle("cm-tooltip-below", !Q), m.positioned && m.positioned(l.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let l of this.manager.tooltipViews)
        l.dom.style.top = eu;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function j1(l, t) {
  let e = parseInt(l.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (l.style.left = t + "px");
}
const rM = /* @__PURE__ */ P.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), oM = { x: 0, y: 0 }, km = /* @__PURE__ */ tt.define({
  enables: [Cm, rM]
}), Bu = /* @__PURE__ */ tt.define({
  combine: (l) => l.reduce((t, e) => t.concat(e), [])
});
class tc {
  // Needs to be static so that host tooltip instances always match
  static create(t) {
    return new tc(t);
  }
  constructor(t) {
    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new rS(t, Bu, (e, i) => this.createHostedView(e, i), (e) => e.dom.remove());
  }
  createHostedView(t, e) {
    let i = t.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews)
      e.mount && e.mount(t);
    this.mounted = !0;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews)
      e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews)
      (t = e.destroy) === null || t === void 0 || t.call(e);
  }
  passProp(t) {
    let e;
    for (let i of this.manager.tooltipViews) {
      let s = i[t];
      if (s !== void 0) {
        if (e === void 0)
          e = s;
        else if (e !== s)
          return;
      }
    }
    return e;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const aM = /* @__PURE__ */ km.compute([Bu], (l) => {
  let t = l.facet(Bu);
  return t.length === 0 ? null : {
    pos: Math.min(...t.map((e) => e.pos)),
    end: Math.max(...t.map((e) => {
      var i;
      return (i = e.end) !== null && i !== void 0 ? i : e.pos;
    })),
    create: tc.create,
    above: t[0].above,
    arrow: t.some((e) => e.arrow)
  };
});
class uM {
  constructor(t, e, i, s, o) {
    this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, i = t.docView.tile.nearest(e.target);
    if (!i)
      return;
    let s, o = 1;
    if (i.isWidget())
      s = i.posAtStart;
    else {
      if (s = t.posAtCoords(e), s == null)
        return;
      let c = t.coordsAtPos(s);
      if (!c || e.y < c.top || e.y > c.bottom || e.x < c.left - t.defaultCharacterWidth || e.x > c.right + t.defaultCharacterWidth)
        return;
      let h = t.bidiSpans(t.state.doc.lineAt(s)).find((p) => p.from <= s && p.to >= s), m = h && h.dir == jt.RTL ? -1 : 1;
      o = e.x < c.left ? -m : m;
    }
    let u = this.source(t, s, o);
    if (u?.then) {
      let c = this.pending = { pos: s };
      u.then((h) => {
        this.pending == c && (this.pending = null, h && !(Array.isArray(h) && !h.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(h) ? h : [h]) }));
      }, (h) => Ye(t.state, h, "hover tooltip"));
    } else u && !(Array.isArray(u) && !u.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(u) ? u : [u]) });
  }
  get tooltip() {
    let t = this.view.plugin(Cm), e = t ? t.manager.tooltips.findIndex((i) => i.create == tc.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, i;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: o } = this;
    if (s.length && o && !cM(o.dom, t) || this.pending) {
      let { pos: u } = s[0] || this.pending, c = (i = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : u;
      (u == c ? this.view.posAtCoords(this.lastMove) != u : !fM(this.view, u, c, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e } = this;
    if (e.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t) {
    let e = (i) => {
      t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t.addEventListener("mouseleave", e);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const iu = 4;
function cM(l, t) {
  let { left: e, right: i, top: s, bottom: o } = l.getBoundingClientRect(), u;
  if (u = l.querySelector(".cm-tooltip-arrow")) {
    let c = u.getBoundingClientRect();
    s = Math.min(c.top, s), o = Math.max(c.bottom, o);
  }
  return t.clientX >= e - iu && t.clientX <= i + iu && t.clientY >= s - iu && t.clientY <= o + iu;
}
function fM(l, t, e, i, s, o) {
  let u = l.scrollDOM.getBoundingClientRect(), c = l.documentTop + l.documentPadding.top + l.contentHeight;
  if (u.left > i || u.right < i || u.top > s || Math.min(u.bottom, c) < s)
    return !1;
  let h = l.posAtCoords({ x: i, y: s }, !1);
  return h >= t && h <= e;
}
function hM(l, t = {}) {
  let e = vt.define(), i = Oe.define({
    create() {
      return [];
    },
    update(s, o) {
      if (s.length && (t.hideOnChange && (o.docChanged || o.selection) ? s = [] : t.hideOn && (s = s.filter((u) => !t.hideOn(o, u))), o.docChanged)) {
        let u = [];
        for (let c of s) {
          let h = o.changes.mapPos(c.pos, -1, Be.TrackDel);
          if (h != null) {
            let m = Object.assign(/* @__PURE__ */ Object.create(null), c);
            m.pos = h, m.end != null && (m.end = o.changes.mapPos(m.end)), u.push(m);
          }
        }
        s = u;
      }
      for (let u of o.effects)
        u.is(e) && (s = u.value), u.is(dM) && (s = []);
      return s;
    },
    provide: (s) => Bu.from(s)
  });
  return {
    active: i,
    extension: [
      i,
      Zt.define((s) => new uM(
        s,
        l,
        i,
        e,
        t.hoverTime || 300
        /* Hover.Time */
      )),
      aM
    ]
  };
}
function oS(l, t) {
  let e = l.plugin(Cm);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
const dM = /* @__PURE__ */ vt.define(), Y1 = /* @__PURE__ */ tt.define({
  combine(l) {
    let t, e;
    for (let i of l)
      t = t || i.topContainer, e = e || i.bottomContainer;
    return { topContainer: t, bottomContainer: e };
  }
});
function Mm(l, t) {
  let e = l.plugin(aS), i = e ? e.specs.indexOf(t) : -1;
  return i > -1 ? e.panels[i] : null;
}
const aS = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.input = l.state.facet(fo), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(l));
    let t = l.state.facet(Y1);
    this.top = new nu(l, !0, t.topContainer), this.bottom = new nu(l, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(l) {
    let t = l.state.facet(Y1);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new nu(l.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new nu(l.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = l.state.facet(fo);
    if (e != this.input) {
      let i = e.filter((h) => h), s = [], o = [], u = [], c = [];
      for (let h of i) {
        let m = this.specs.indexOf(h), p;
        m < 0 ? (p = h(l.view), c.push(p)) : (p = this.panels[m], p.update && p.update(l)), s.push(p), (p.top ? o : u).push(p);
      }
      this.specs = i, this.panels = s, this.top.sync(o), this.bottom.sync(u);
      for (let h of c)
        h.dom.classList.add("cm-panel"), h.mount && h.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(l);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (l) => P.scrollMargins.of((t) => {
    let e = t.plugin(l);
    return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
  })
});
class nu {
  constructor(t, e, i) {
    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels)
      e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels)
      if (e.dom.parentNode == this.dom) {
        for (; t != e.dom; )
          t = G1(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = G1(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" "))
        t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" "))
        t && this.container.classList.add(t);
    }
  }
}
function G1(l) {
  let t = l.nextSibling;
  return l.remove(), t;
}
const fo = /* @__PURE__ */ tt.define({
  enables: aS
});
function mM(l, t) {
  let e, i = new Promise((u) => e = u), s = (u) => pM(u, t, e);
  l.state.field(Wh, !1) ? l.dispatch({ effects: uS.of(s) }) : l.dispatch({ effects: vt.appendConfig.of(Wh.init(() => [s])) });
  let o = cS.of(s);
  return { close: o, result: i.then((u) => ((l.win.queueMicrotask || ((h) => l.win.setTimeout(h, 10)))(() => {
    l.state.field(Wh).indexOf(s) > -1 && l.dispatch({ effects: o });
  }), u)) };
}
const Wh = /* @__PURE__ */ Oe.define({
  create() {
    return [];
  },
  update(l, t) {
    for (let e of t.effects)
      e.is(uS) ? l = [e.value].concat(l) : e.is(cS) && (l = l.filter((i) => i != e.value));
    return l;
  },
  provide: (l) => fo.computeN([l], (t) => t.field(l))
}), uS = /* @__PURE__ */ vt.define(), cS = /* @__PURE__ */ vt.define();
function pM(l, t, e) {
  let i = t.content ? t.content(l, () => u(null)) : null;
  if (!i) {
    if (i = Ut("form"), t.input) {
      let c = Ut("input", t.input);
      /^(text|password|number|email|tel|url)$/.test(c.type) && c.classList.add("cm-textfield"), c.name || (c.name = "input"), i.appendChild(Ut("label", (t.label || "") + ": ", c));
    } else
      i.appendChild(document.createTextNode(t.label || ""));
    i.appendChild(document.createTextNode(" ")), i.appendChild(Ut("button", { class: "cm-button", type: "submit" }, t.submitLabel || "OK"));
  }
  let s = i.nodeName == "FORM" ? [i] : i.querySelectorAll("form");
  for (let c = 0; c < s.length; c++) {
    let h = s[c];
    h.addEventListener("keydown", (m) => {
      m.keyCode == 27 ? (m.preventDefault(), u(null)) : m.keyCode == 13 && (m.preventDefault(), u(h));
    }), h.addEventListener("submit", (m) => {
      m.preventDefault(), u(h);
    });
  }
  let o = Ut("div", i, Ut("button", {
    onclick: () => u(null),
    "aria-label": l.state.phrase("close"),
    class: "cm-dialog-close",
    type: "button"
  }, ["×"]));
  t.class && (o.className = t.class), o.classList.add("cm-dialog");
  function u(c) {
    o.contains(o.ownerDocument.activeElement) && l.focus(), e(c);
  }
  return {
    dom: o,
    top: t.top,
    mount: () => {
      if (t.focus) {
        let c;
        typeof t.focus == "string" ? c = i.querySelector(t.focus) : c = i.querySelector("input") || i.querySelector("button"), c && "select" in c ? c.select() : c && "focus" in c && c.focus();
      }
    }
  };
}
class pn extends Qn {
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(t) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(t) {
  }
}
pn.prototype.elementClass = "";
pn.prototype.toDOM = void 0;
pn.prototype.mapMode = Be.TrackBefore;
pn.prototype.startSide = pn.prototype.endSide = -1;
pn.prototype.point = !0;
const bu = /* @__PURE__ */ tt.define(), gM = /* @__PURE__ */ tt.define(), yM = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => Mt.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {},
  side: "before"
}, io = /* @__PURE__ */ tt.define();
function vM(l) {
  return [fS(), io.of({ ...yM, ...l })];
}
const K1 = /* @__PURE__ */ tt.define({
  combine: (l) => l.some((t) => t)
});
function fS(l) {
  return [
    bM
  ];
}
const bM = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.view = l, this.domAfter = null, this.prevViewport = l.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = l.state.facet(io).map((t) => new W1(l, t)), this.fixed = !l.state.facet(K1);
    for (let t of this.gutters)
      t.config.side == "after" ? this.getDOMAfter().appendChild(t.dom) : this.dom.appendChild(t.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), l.scrollDOM.insertBefore(this.dom, l.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(l) {
    if (this.updateGutters(l)) {
      let t = this.prevViewport, e = l.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(i < (e.to - e.from) * 0.8);
    }
    if (l.geometryChanged) {
      let t = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = t, this.domAfter && (this.domAfter.style.minHeight = t);
    }
    this.view.state.facet(K1) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = l.view.viewport;
  }
  syncGutters(l) {
    let t = this.dom.nextSibling;
    l && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let e = Mt.iter(this.view.state.facet(bu), this.view.viewport.from), i = [], s = this.gutters.map((o) => new SM(o, this.view.viewport, -this.view.documentPadding.top));
    for (let o of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(o.type)) {
        let u = !0;
        for (let c of o.type)
          if (c.type == xe.Text && u) {
            Wd(e, i, c.from);
            for (let h of s)
              h.line(this.view, c, i);
            u = !1;
          } else if (c.widget)
            for (let h of s)
              h.widget(this.view, c);
      } else if (o.type == xe.Text) {
        Wd(e, i, o.from);
        for (let u of s)
          u.line(this.view, o, i);
      } else if (o.widget)
        for (let u of s)
          u.widget(this.view, o);
    for (let o of s)
      o.finish();
    l && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(l) {
    let t = l.startState.facet(io), e = l.state.facet(io), i = l.docChanged || l.heightChanged || l.viewportChanged || !Mt.eq(l.startState.facet(bu), l.state.facet(bu), l.view.viewport.from, l.view.viewport.to);
    if (t == e)
      for (let s of this.gutters)
        s.update(l) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let o of e) {
        let u = t.indexOf(o);
        u < 0 ? s.push(new W1(this.view, o)) : (this.gutters[u].update(l), s.push(this.gutters[u]));
      }
      for (let o of this.gutters)
        o.dom.remove(), s.indexOf(o) < 0 && o.destroy();
      for (let o of s)
        o.config.side == "after" ? this.getDOMAfter().appendChild(o.dom) : this.dom.appendChild(o.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let l of this.gutters)
      l.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (l) => P.scrollMargins.of((t) => {
    let e = t.plugin(l);
    if (!e || e.gutters.length == 0 || !e.fixed)
      return null;
    let i = e.dom.offsetWidth * t.scaleX, s = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
    return t.textDirection == jt.LTR ? { left: i, right: s } : { right: i, left: s };
  })
});
function X1(l) {
  return Array.isArray(l) ? l : [l];
}
function Wd(l, t, e) {
  for (; l.value && l.from <= e; )
    l.from == e && t.push(l.value), l.next();
}
class SM {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = Mt.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: s } = this, o = (e.top - this.height) / t.scaleY, u = e.height / t.scaleY;
    if (this.i == s.elements.length) {
      let c = new hS(t, u, o, i);
      s.elements.push(c), s.dom.appendChild(c.dom);
    } else
      s.elements[this.i].update(t, u, o, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let s = [];
    Wd(this.cursor, s, e.from), i.length && (s = s.concat(i));
    let o = this.gutter.config.lineMarker(t, e, s);
    o && s.unshift(o);
    let u = this.gutter;
    s.length == 0 && !u.config.renderEmptyElements || this.addElement(t, e, s);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e), s = i ? [i] : null;
    for (let o of t.state.facet(gM)) {
      let u = o(t, e.widget, e);
      u && (s || (s = [])).push(u);
    }
    s && this.addElement(t, e, s);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class W1 {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let o = s.target, u;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let h = o.getBoundingClientRect();
          u = (h.top + h.bottom) / 2;
        } else
          u = s.clientY;
        let c = t.lineBlockAtHeight(u - t.documentTop);
        e.domEventHandlers[i](t, c, s) && s.preventDefault();
      });
    this.markers = X1(e.markers(t)), e.initialSpacer && (this.spacer = new hS(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = X1(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], t);
      s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [s]);
    }
    let i = t.view.viewport;
    return !Mt.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class hS {
  constructor(t, e, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s);
  }
  update(t, e, i, s) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), xM(this.markers, s) || this.setMarkers(t, s);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let o = 0, u = 0; ; ) {
      let c = u, h = o < e.length ? e[o++] : null, m = !1;
      if (h) {
        let p = h.elementClass;
        p && (i += " " + p);
        for (let y = u; y < this.markers.length; y++)
          if (this.markers[y].compare(h)) {
            c = y, m = !0;
            break;
          }
      } else
        c = this.markers.length;
      for (; u < c; ) {
        let p = this.markers[u++];
        if (p.toDOM) {
          p.destroy(s);
          let y = s.nextSibling;
          s.remove(), s = y;
        }
      }
      if (!h)
        break;
      h.toDOM && (m ? s = s.nextSibling : this.dom.insertBefore(h.toDOM(t), s)), m && u++;
    }
    this.dom.className = i, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function xM(l, t) {
  if (l.length != t.length)
    return !1;
  for (let e = 0; e < l.length; e++)
    if (!l[e].compare(t[e]))
      return !1;
  return !0;
}
const wM = /* @__PURE__ */ tt.define(), AM = /* @__PURE__ */ tt.define(), As = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let s in e) {
          let o = i[s], u = e[s];
          i[s] = o ? (c, h, m) => o(c, h, m) || u(c, h, m) : u;
        }
        return i;
      }
    });
  }
});
class Qh extends pn {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Zh(l, t) {
  return l.state.facet(As).formatNumber(t, l.state);
}
const CM = /* @__PURE__ */ io.compute([As], (l) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(wM);
  },
  lineMarker(t, e, i) {
    return i.some((s) => s.toDOM) ? null : new Qh(Zh(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: (t, e, i) => {
    for (let s of t.state.facet(AM)) {
      let o = s(t, e, i);
      if (o)
        return o;
    }
    return null;
  },
  lineMarkerChange: (t) => t.startState.facet(As) != t.state.facet(As),
  initialSpacer(t) {
    return new Qh(Zh(t, Q1(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let i = Zh(e.view, Q1(e.view.state.doc.lines));
    return i == t.number ? t : new Qh(i);
  },
  domEventHandlers: l.facet(As).domEventHandlers,
  side: "before"
}));
function kM(l = {}) {
  return [
    As.of(l),
    fS(),
    CM
  ];
}
function Q1(l) {
  let t = 9;
  for (; t < l; )
    t = t * 10 + 9;
  return t;
}
const MM = /* @__PURE__ */ new class extends pn {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), TM = /* @__PURE__ */ bu.compute(["selection"], (l) => {
  let t = [], e = -1;
  for (let i of l.selection.ranges) {
    let s = l.doc.lineAt(i.head).from;
    s > e && (e = s, t.push(MM.range(s)));
  }
  return Mt.of(t);
});
function OM() {
  return TM;
}
const DM = 1024;
let EM = 0;
class Jh {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class Ot {
  /**
  Create a new node prop type.
  */
  constructor(t = {}) {
    this.id = EM++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = t.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(t) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = vi.match(t)), (e) => {
      let i = t(e);
      return i === void 0 ? null : [this, i];
    };
  }
}
Ot.closedBy = new Ot({ deserialize: (l) => l.split(" ") });
Ot.openedBy = new Ot({ deserialize: (l) => l.split(" ") });
Ot.group = new Ot({ deserialize: (l) => l.split(" ") });
Ot.isolate = new Ot({ deserialize: (l) => {
  if (l && l != "rtl" && l != "ltr" && l != "auto")
    throw new RangeError("Invalid value for isolate: " + l);
  return l || "auto";
} });
Ot.contextHash = new Ot({ perNode: !0 });
Ot.lookAhead = new Ot({ perNode: !0 });
Ot.mounted = new Ot({ perNode: !0 });
class no {
  constructor(t, e, i, s = !1) {
    this.tree = t, this.overlay = e, this.parser = i, this.bracketed = s;
  }
  /**
  @internal
  */
  static get(t) {
    return t && t.props && t.props[Ot.mounted.id];
  }
}
const RM = /* @__PURE__ */ Object.create(null);
class vi {
  /**
  @internal
  */
  constructor(t, e, i, s = 0) {
    this.name = t, this.props = e, this.id = i, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : RM, i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), s = new vi(t.name || "", e, t.id, i);
    if (t.props) {
      for (let o of t.props)
        if (Array.isArray(o) || (o = o(s)), o) {
          if (o[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[o[0].id] = o[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(t) {
    return this.props[t.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(t) {
    if (typeof t == "string") {
      if (this.name == t)
        return !0;
      let e = this.prop(Ot.group);
      return e ? e.indexOf(t) > -1 : !1;
    }
    return this.id == t;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let i in t)
      for (let s of i.split(" "))
        e[s] = t[i];
    return (i) => {
      for (let s = i.prop(Ot.group), o = -1; o < (s ? s.length : 0); o++) {
        let u = e[o < 0 ? i.name : s[o]];
        if (u)
          return u;
      }
    };
  }
}
vi.none = new vi(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const lu = /* @__PURE__ */ new WeakMap(), Z1 = /* @__PURE__ */ new WeakMap();
var ie;
(function(l) {
  l[l.ExcludeBuffers = 1] = "ExcludeBuffers", l[l.IncludeAnonymous = 2] = "IncludeAnonymous", l[l.IgnoreMounts = 4] = "IgnoreMounts", l[l.IgnoreOverlays = 8] = "IgnoreOverlays", l[l.EnterBracketed = 16] = "EnterBracketed";
})(ie || (ie = {}));
class Se {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(t, e, i, s, o) {
    if (this.type = t, this.children = e, this.positions = i, this.length = s, this.props = null, o && o.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [u, c] of o)
        this.props[typeof u == "number" ? u : u.id] = c;
    }
  }
  /**
  @internal
  */
  toString() {
    let t = no.get(this);
    if (t && !t.overlay)
      return t.tree.toString();
    let e = "";
    for (let i of this.children) {
      let s = i.toString();
      s && (e && (e += ","), e += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(t = 0) {
    return new Zd(this.topNode, t);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(t, e = 0, i = 0) {
    let s = lu.get(this) || this.topNode, o = new Zd(s);
    return o.moveTo(t, e), lu.set(this, o._tree), o;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new yi(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(t, e = 0) {
    let i = ho(lu.get(this) || this.topNode, t, e, !1);
    return lu.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(t, e = 0) {
    let i = ho(Z1.get(this) || this.topNode, t, e, !0);
    return Z1.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(t, e = 0) {
    return LM(this, t, e);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(t) {
    let { enter: e, leave: i, from: s = 0, to: o = this.length } = t, u = t.mode || 0, c = (u & ie.IncludeAnonymous) > 0;
    for (let h = this.cursor(u | ie.IncludeAnonymous); ; ) {
      let m = !1;
      if (h.from <= o && h.to >= s && (!c && h.type.isAnonymous || e(h) !== !1)) {
        if (h.firstChild())
          continue;
        m = !0;
      }
      for (; m && i && (c || !h.type.isAnonymous) && i(h), !h.nextSibling(); ) {
        if (!h.parent())
          return;
        m = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let t = [];
    if (this.props)
      for (let e in this.props)
        t.push([+e, this.props[e]]);
    return t;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(t = {}) {
    return this.children.length <= 8 ? this : Dm(vi.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, i, s) => new Se(this.type, e, i, s, this.propValues), t.makeTree || ((e, i, s) => new Se(vi.none, e, i, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(t) {
    return zM(t);
  }
}
Se.empty = new Se(vi.none, [], [], 0);
class Tm {
  constructor(t, e) {
    this.buffer = t, this.index = e;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Tm(this.buffer, this.index);
  }
}
class Pn {
  /**
  Create a tree buffer.
  */
  constructor(t, e, i) {
    this.buffer = t, this.length = e, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return vi.none;
  }
  /**
  @internal
  */
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; )
      t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  /**
  @internal
  */
  childString(t) {
    let e = this.buffer[t], i = this.buffer[t + 3], s = this.set.types[e], o = s.name;
    if (/\W/.test(o) && !s.isError && (o = JSON.stringify(o)), t += 4, i == t)
      return o;
    let u = [];
    for (; t < i; )
      u.push(this.childString(t)), t = this.buffer[t + 3];
    return o + "(" + u.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(t, e, i, s, o) {
    let { buffer: u } = this, c = -1;
    for (let h = t; h != e && !(dS(o, s, u[h + 1], u[h + 2]) && (c = h, i > 0)); h = u[h + 3])
      ;
    return c;
  }
  /**
  @internal
  */
  slice(t, e, i) {
    let s = this.buffer, o = new Uint16Array(e - t), u = 0;
    for (let c = t, h = 0; c < e; ) {
      o[h++] = s[c++], o[h++] = s[c++] - i;
      let m = o[h++] = s[c++] - i;
      o[h++] = s[c++] - t, u = Math.max(u, m);
    }
    return new Pn(o, u, this.set);
  }
}
function dS(l, t, e, i) {
  switch (l) {
    case -2:
      return e < t;
    case -1:
      return i >= t && e < t;
    case 0:
      return e < t && i > t;
    case 1:
      return e <= t && i > t;
    case 2:
      return i > t;
    case 4:
      return !0;
  }
}
function ho(l, t, e, i) {
  for (var s; l.from == l.to || (e < 1 ? l.from >= t : l.from > t) || (e > -1 ? l.to <= t : l.to < t); ) {
    let u = !i && l instanceof yi && l.index < 0 ? null : l.parent;
    if (!u)
      return l;
    l = u;
  }
  let o = i ? 0 : ie.IgnoreOverlays;
  if (i)
    for (let u = l, c = u.parent; c; u = c, c = u.parent)
      u instanceof yi && u.index < 0 && ((s = c.enter(t, e, o)) === null || s === void 0 ? void 0 : s.from) != u.from && (l = c);
  for (; ; ) {
    let u = l.enter(t, e, o);
    if (!u)
      return l;
    l = u;
  }
}
class mS {
  cursor(t = 0) {
    return new Zd(this, t);
  }
  getChild(t, e = null, i = null) {
    let s = J1(this, t, e, i);
    return s.length ? s[0] : null;
  }
  getChildren(t, e = null, i = null) {
    return J1(this, t, e, i);
  }
  resolve(t, e = 0) {
    return ho(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return ho(this, t, e, !0);
  }
  matchContext(t) {
    return Qd(this.parent, t);
  }
  enterUnfinishedNodesBefore(t) {
    let e = this.childBefore(t), i = this;
    for (; e; ) {
      let s = e.lastChild;
      if (!s || s.to != e.to)
        break;
      s.type.isError && s.from == s.to ? (i = e, e = s.prevSibling) : e = s;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class yi extends mS {
  constructor(t, e, i, s) {
    super(), this._tree = t, this.from = e, this.index = i, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t, e, i, s, o = 0) {
    for (let u = this; ; ) {
      for (let { children: c, positions: h } = u._tree, m = e > 0 ? c.length : -1; t != m; t += e) {
        let p = c[t], y = h[t] + u.from, v;
        if (!(!(o & ie.EnterBracketed && p instanceof Se && (v = no.get(p)) && !v.overlay && v.bracketed && i >= y && i <= y + p.length) && !dS(s, i, y, y + p.length))) {
          if (p instanceof Pn) {
            if (o & ie.ExcludeBuffers)
              continue;
            let S = p.findChild(0, p.buffer.length, e, i - y, s);
            if (S > -1)
              return new Xn(new BM(u, p, t, y), null, S);
          } else if (o & ie.IncludeAnonymous || !p.type.isAnonymous || Om(p)) {
            let S;
            if (!(o & ie.IgnoreMounts) && (S = no.get(p)) && !S.overlay)
              return new yi(S.tree, y, t, u);
            let w = new yi(p, y, t, u);
            return o & ie.IncludeAnonymous || !w.type.isAnonymous ? w : w.nextChild(e < 0 ? p.children.length - 1 : 0, e, i, s, o);
          }
        }
      }
      if (o & ie.IncludeAnonymous || !u.type.isAnonymous || (u.index >= 0 ? t = u.index + e : t = e < 0 ? -1 : u._parent._tree.children.length, u = u._parent, !u))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.nextChild(
      0,
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  prop(t) {
    return this._tree.prop(t);
  }
  enter(t, e, i = 0) {
    let s;
    if (!(i & ie.IgnoreOverlays) && (s = no.get(this._tree)) && s.overlay) {
      let o = t - this.from, u = i & ie.EnterBracketed && s.bracketed;
      for (let { from: c, to: h } of s.overlay)
        if ((e > 0 || u ? c <= o : c < o) && (e < 0 || u ? h >= o : h > o))
          return new yi(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, i);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; )
      t = t._parent;
    return t;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function J1(l, t, e, i) {
  let s = l.cursor(), o = [];
  if (!s.firstChild())
    return o;
  if (e != null) {
    for (let u = !1; !u; )
      if (u = s.type.is(e), !s.nextSibling())
        return o;
  }
  for (; ; ) {
    if (i != null && s.type.is(i))
      return o;
    if (s.type.is(t) && o.push(s.node), !s.nextSibling())
      return i == null ? o : [];
  }
}
function Qd(l, t, e = t.length - 1) {
  for (let i = l; e >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (t[e] && t[e] != i.name)
        return !1;
      e--;
    }
  }
  return !0;
}
class BM {
  constructor(t, e, i, s) {
    this.parent = t, this.buffer = e, this.index = i, this.start = s;
  }
}
class Xn extends mS {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, i) {
    super(), this.context = t, this._parent = e, this.index = i, this.type = t.buffer.set.types[t.buffer.buffer[i]];
  }
  child(t, e, i) {
    let { buffer: s } = this.context, o = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.context.start, i);
    return o < 0 ? null : new Xn(this.context, this, o);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.child(
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.child(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  prop(t) {
    return this.type.prop(t);
  }
  enter(t, e, i = 0) {
    if (i & ie.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, o = s.findChild(this.index + 4, s.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return o < 0 ? null : new Xn(this.context, this, o);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + t,
      t,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Xn(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new Xn(this.context, this._parent, t.findChild(
      e,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t = [], e = [], { buffer: i } = this.context, s = this.index + 4, o = i.buffer[this.index + 3];
    if (o > s) {
      let u = i.buffer[this.index + 1];
      t.push(i.slice(s, o, u)), e.push(0);
    }
    return new Se(this.type, t, e, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function pS(l) {
  if (!l.length)
    return null;
  let t = 0, e = l[0];
  for (let o = 1; o < l.length; o++) {
    let u = l[o];
    (u.from > e.from || u.to < e.to) && (e = u, t = o);
  }
  let i = e instanceof yi && e.index < 0 ? null : e.parent, s = l.slice();
  return i ? s[t] = i : s.splice(t, 1), new NM(s, e);
}
class NM {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return pS(this.heads);
  }
}
function LM(l, t, e) {
  let i = l.resolveInner(t, e), s = null;
  for (let o = i instanceof yi ? i : i.context.parent; o; o = o.parent)
    if (o.index < 0) {
      let u = o.parent;
      (s || (s = [i])).push(u.resolve(t, e)), o = u;
    } else {
      let u = no.get(o.tree);
      if (u && u.overlay && u.overlay[0].from <= t && u.overlay[u.overlay.length - 1].to >= t) {
        let c = new yi(u.tree, u.overlay[0].from + o.from, -1, o);
        (s || (s = [i])).push(ho(c, t, e, !1));
      }
    }
  return s ? pS(s) : i;
}
class Zd {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(t, e = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = e & ~ie.EnterBracketed, t instanceof yi)
      this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let i = t._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0) : !1;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: i, buffer: s } = this.buffer;
    return this.type = e || s.set.types[s.buffer[t]], this.from = i + s.buffer[t + 1], this.to = i + s.buffer[t + 2], !0;
  }
  /**
  @internal
  */
  yield(t) {
    return t ? t instanceof yi ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(t, e, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
    let { buffer: s } = this.buffer, o = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.buffer.start, i);
    return o < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(o));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(t) {
    return this.enterChild(
      1,
      t,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(t) {
    return this.enterChild(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(t, e, i = this.mode) {
    return this.buffer ? i & ie.ExcludeBuffers ? !1 : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & ie.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t = this.mode & ie.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  /**
  @internal
  */
  sibling(t) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : !1;
    let { buffer: e } = this.buffer, i = this.stack.length - 1;
    if (t < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s)
        return this.yieldBuf(e.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = e.buffer[this.index + 3];
      if (s < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
        return this.yieldBuf(s);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t) {
    let e, i, { buffer: s } = this;
    if (s) {
      if (t > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let o = 0; o < this.index; o++)
          if (s.buffer.buffer[o + 3] < this.index)
            return !1;
      ({ index: e, parent: i } = s);
    } else
      ({ index: e, _parent: i } = this._tree);
    for (; i; { index: e, _parent: i } = i)
      if (e > -1)
        for (let o = e + t, u = t < 0 ? -1 : i._tree.children.length; o != u; o += t) {
          let c = i._tree.children[o];
          if (this.mode & ie.IncludeAnonymous || c instanceof Pn || !c.type.isAnonymous || Om(c))
            return !1;
        }
    return !0;
  }
  move(t, e) {
    if (e && this.enterChild(
      t,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(t))
        return !0;
      if (this.atLastNode(t) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(t = !0) {
    return this.move(1, t);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(t = !0) {
    return this.move(-1, t);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
      ;
    for (; this.enterChild(1, t, e); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let t = this.bufferNode, e = null, i = 0;
    if (t && t.context == this.buffer)
      t: for (let s = this.index, o = this.stack.length; o >= 0; ) {
        for (let u = t; u; u = u._parent)
          if (u.index == s) {
            if (s == this.index)
              return u;
            e = u, i = o + 1;
            break t;
          }
        s = this.stack[--o];
      }
    for (let s = i; s < this.stack.length; s++)
      e = new Xn(this.buffer, e, this.stack[s]);
    return this.bufferNode = new Xn(this.buffer, e, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(t, e) {
    for (let i = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || t(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; ; ) {
        if (s && e && e(this), s = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(t) {
    if (!this.buffer)
      return Qd(this.node.parent, t);
    let { buffer: e } = this.buffer, { types: i } = e.set;
    for (let s = t.length - 1, o = this.stack.length - 1; s >= 0; o--) {
      if (o < 0)
        return Qd(this._tree, t, s);
      let u = i[e.buffer[this.stack[o]]];
      if (!u.isAnonymous) {
        if (t[s] && t[s] != u.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function Om(l) {
  return l.children.some((t) => t instanceof Pn || !t.type.isAnonymous || Om(t));
}
function zM(l) {
  var t;
  let { buffer: e, nodeSet: i, maxBufferLength: s = DM, reused: o = [], minRepeatType: u = i.types.length } = l, c = Array.isArray(e) ? new Tm(e, e.length) : e, h = i.types, m = 0, p = 0;
  function y(_, K, X, lt, et, yt) {
    let { id: at, start: I, end: ft, size: pt } = c, gt = p, L = m;
    if (pt < 0)
      if (c.next(), pt == -1) {
        let q = o[at];
        X.push(q), lt.push(I - _);
        return;
      } else if (pt == -3) {
        m = at;
        return;
      } else if (pt == -4) {
        p = at;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${pt}`);
    let W = h[at], it, ot, k = I - _;
    if (ft - I <= s && (ot = M(c.pos - K, et))) {
      let q = new Uint16Array(ot.size - ot.skip), Z = c.pos - ot.size, J = q.length;
      for (; c.pos > Z; )
        J = O(ot.start, q, J);
      it = new Pn(q, ft - ot.start, i), k = ot.start - _;
    } else {
      let q = c.pos - pt;
      c.next();
      let Z = [], J = [], st = at >= u ? at : -1, xt = 0, dt = ft;
      for (; c.pos > q; )
        st >= 0 && c.id == st && c.size >= 0 ? (c.end <= dt - s && (w(Z, J, I, xt, c.end, dt, st, gt, L), xt = Z.length, dt = c.end), c.next()) : yt > 2500 ? v(I, q, Z, J) : y(I, q, Z, J, st, yt + 1);
      if (st >= 0 && xt > 0 && xt < Z.length && w(Z, J, I, xt, I, dt, st, gt, L), Z.reverse(), J.reverse(), st > -1 && xt > 0) {
        let we = S(W, L);
        it = Dm(W, Z, J, 0, Z.length, 0, ft - I, we, we);
      } else
        it = A(W, Z, J, ft - I, gt - ft, L);
    }
    X.push(it), lt.push(k);
  }
  function v(_, K, X, lt) {
    let et = [], yt = 0, at = -1;
    for (; c.pos > K; ) {
      let { id: I, start: ft, end: pt, size: gt } = c;
      if (gt > 4)
        c.next();
      else {
        if (at > -1 && ft < at)
          break;
        at < 0 && (at = pt - s), et.push(I, ft, pt), yt++, c.next();
      }
    }
    if (yt) {
      let I = new Uint16Array(yt * 4), ft = et[et.length - 2];
      for (let pt = et.length - 3, gt = 0; pt >= 0; pt -= 3)
        I[gt++] = et[pt], I[gt++] = et[pt + 1] - ft, I[gt++] = et[pt + 2] - ft, I[gt++] = gt;
      X.push(new Pn(I, et[2] - ft, i)), lt.push(ft - _);
    }
  }
  function S(_, K) {
    return (X, lt, et) => {
      let yt = 0, at = X.length - 1, I, ft;
      if (at >= 0 && (I = X[at]) instanceof Se) {
        if (!at && I.type == _ && I.length == et)
          return I;
        (ft = I.prop(Ot.lookAhead)) && (yt = lt[at] + I.length + ft);
      }
      return A(_, X, lt, et, yt, K);
    };
  }
  function w(_, K, X, lt, et, yt, at, I, ft) {
    let pt = [], gt = [];
    for (; _.length > lt; )
      pt.push(_.pop()), gt.push(K.pop() + X - et);
    _.push(A(i.types[at], pt, gt, yt - et, I - yt, ft)), K.push(et - X);
  }
  function A(_, K, X, lt, et, yt, at) {
    if (yt) {
      let I = [Ot.contextHash, yt];
      at = at ? [I].concat(at) : [I];
    }
    if (et > 25) {
      let I = [Ot.lookAhead, et];
      at = at ? [I].concat(at) : [I];
    }
    return new Se(_, K, X, lt, at);
  }
  function M(_, K) {
    let X = c.fork(), lt = 0, et = 0, yt = 0, at = X.end - s, I = { size: 0, start: 0, skip: 0 };
    t: for (let ft = X.pos - _; X.pos > ft; ) {
      let pt = X.size;
      if (X.id == K && pt >= 0) {
        I.size = lt, I.start = et, I.skip = yt, yt += 4, lt += 4, X.next();
        continue;
      }
      let gt = X.pos - pt;
      if (pt < 0 || gt < ft || X.start < at)
        break;
      let L = X.id >= u ? 4 : 0, W = X.start;
      for (X.next(); X.pos > gt; ) {
        if (X.size < 0)
          if (X.size == -3 || X.size == -4)
            L += 4;
          else
            break t;
        else X.id >= u && (L += 4);
        X.next();
      }
      et = W, lt += pt, yt += L;
    }
    return (K < 0 || lt == _) && (I.size = lt, I.start = et, I.skip = yt), I.size > 4 ? I : void 0;
  }
  function O(_, K, X) {
    let { id: lt, start: et, end: yt, size: at } = c;
    if (c.next(), at >= 0 && lt < u) {
      let I = X;
      if (at > 4) {
        let ft = c.pos - (at - 4);
        for (; c.pos > ft; )
          X = O(_, K, X);
      }
      K[--X] = I, K[--X] = yt - _, K[--X] = et - _, K[--X] = lt;
    } else at == -3 ? m = lt : at == -4 && (p = lt);
    return X;
  }
  let H = [], z = [];
  for (; c.pos > 0; )
    y(l.start || 0, l.bufferStart || 0, H, z, -1, 0);
  let Q = (t = l.length) !== null && t !== void 0 ? t : H.length ? z[0] + H[0].length : 0;
  return new Se(h[l.topID], H.reverse(), z.reverse(), Q);
}
const F1 = /* @__PURE__ */ new WeakMap();
function Su(l, t) {
  if (!l.isAnonymous || t instanceof Pn || t.type != l)
    return 1;
  let e = F1.get(t);
  if (e == null) {
    e = 1;
    for (let i of t.children) {
      if (i.type != l || !(i instanceof Se)) {
        e = 1;
        break;
      }
      e += Su(l, i);
    }
    F1.set(t, e);
  }
  return e;
}
function Dm(l, t, e, i, s, o, u, c, h) {
  let m = 0;
  for (let w = i; w < s; w++)
    m += Su(l, t[w]);
  let p = Math.ceil(
    m * 1.5 / 8
    /* Balance.BranchFactor */
  ), y = [], v = [];
  function S(w, A, M, O, H) {
    for (let z = M; z < O; ) {
      let Q = z, _ = A[z], K = Su(l, w[z]);
      for (z++; z < O; z++) {
        let X = Su(l, w[z]);
        if (K + X >= p)
          break;
        K += X;
      }
      if (z == Q + 1) {
        if (K > p) {
          let X = w[Q];
          S(X.children, X.positions, 0, X.children.length, A[Q] + H);
          continue;
        }
        y.push(w[Q]);
      } else {
        let X = A[z - 1] + w[z - 1].length - _;
        y.push(Dm(l, w, A, Q, z, _, X, null, h));
      }
      v.push(_ + H - o);
    }
  }
  return S(t, e, i, s, 0), (c || h)(y, v, u);
}
class Ol {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(t, e, i, s, o = !1, u = !1) {
    this.from = t, this.to = e, this.tree = i, this.offset = s, this.open = (o ? 1 : 0) | (u ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(t, e = [], i = !1) {
    let s = [new Ol(0, t.length, t, 0, !1, i)];
    for (let o of e)
      o.to > t.length && s.push(o);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(t, e, i = 128) {
    if (!e.length)
      return t;
    let s = [], o = 1, u = t.length ? t[0] : null;
    for (let c = 0, h = 0, m = 0; ; c++) {
      let p = c < e.length ? e[c] : null, y = p ? p.fromA : 1e9;
      if (y - h >= i)
        for (; u && u.from < y; ) {
          let v = u;
          if (h >= v.from || y <= v.to || m) {
            let S = Math.max(v.from, h) - m, w = Math.min(v.to, y) - m;
            v = S >= w ? null : new Ol(S, w, v.tree, v.offset + m, c > 0, !!p);
          }
          if (v && s.push(v), u.to > y)
            break;
          u = o < t.length ? t[o++] : null;
        }
      if (!p)
        break;
      h = p.toA, m = p.toA - p.toB;
    }
    return s;
  }
}
class HM {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(t, e, i) {
    return typeof t == "string" && (t = new _M(t)), i = i ? i.length ? i.map((s) => new Jh(s.from, s.to)) : [new Jh(0, 0)] : [new Jh(0, t.length)], this.createParse(t, e || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(t, e, i) {
    let s = this.startParse(t, e, i);
    for (; ; ) {
      let o = s.advance();
      if (o)
        return o;
    }
  }
}
class _M {
  constructor(t) {
    this.string = t;
  }
  get length() {
    return this.string.length;
  }
  chunk(t) {
    return this.string.slice(t);
  }
  get lineChunks() {
    return !1;
  }
  read(t, e) {
    return this.string.slice(t, e);
  }
}
new Ot({ perNode: !0 });
let UM = 0;
class di {
  /**
  @internal
  */
  constructor(t, e, i, s) {
    this.name = t, this.set = e, this.base = i, this.modified = s, this.id = UM++;
  }
  toString() {
    let { name: t } = this;
    for (let e of this.modified)
      e.name && (t = `${e.name}(${t})`);
    return t;
  }
  static define(t, e) {
    let i = typeof t == "string" ? t : "?";
    if (t instanceof di && (e = t), e?.base)
      throw new Error("Can not derive from a modified tag");
    let s = new di(i, [], null, []);
    if (s.set.push(s), e)
      for (let o of e.set)
        s.set.push(o);
    return s;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(t) {
    let e = new Nu(t);
    return (i) => i.modified.indexOf(e) > -1 ? i : Nu.get(i.base || i, i.modified.concat(e).sort((s, o) => s.id - o.id));
  }
}
let VM = 0;
class Nu {
  constructor(t) {
    this.name = t, this.instances = [], this.id = VM++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let i = e[0].instances.find((c) => c.base == t && qM(e, c.modified));
    if (i)
      return i;
    let s = [], o = new di(t.name, s, t, e);
    for (let c of e)
      c.instances.push(o);
    let u = jM(e);
    for (let c of t.set)
      if (!c.modified.length)
        for (let h of u)
          s.push(Nu.get(c, h));
    return o;
  }
}
function qM(l, t) {
  return l.length == t.length && l.every((e, i) => e == t[i]);
}
function jM(l) {
  let t = [[]];
  for (let e = 0; e < l.length; e++)
    for (let i = 0, s = t.length; i < s; i++)
      t.push(t[i].concat(l[e]));
  return t.sort((e, i) => i.length - e.length);
}
function YM(l) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in l) {
    let i = l[e];
    Array.isArray(i) || (i = [i]);
    for (let s of e.split(" "))
      if (s) {
        let o = [], u = 2, c = s;
        for (let y = 0; ; ) {
          if (c == "..." && y > 0 && y + 3 == s.length) {
            u = 1;
            break;
          }
          let v = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(c);
          if (!v)
            throw new RangeError("Invalid path: " + s);
          if (o.push(v[0] == "*" ? "" : v[0][0] == '"' ? JSON.parse(v[0]) : v[0]), y += v[0].length, y == s.length)
            break;
          let S = s[y++];
          if (y == s.length && S == "!") {
            u = 0;
            break;
          }
          if (S != "/")
            throw new RangeError("Invalid path: " + s);
          c = s.slice(y);
        }
        let h = o.length - 1, m = o[h];
        if (!m)
          throw new RangeError("Invalid path: " + s);
        let p = new mo(i, u, h > 0 ? o.slice(0, h) : null);
        t[m] = p.sort(t[m]);
      }
  }
  return gS.add(t);
}
const gS = new Ot({
  combine(l, t) {
    let e, i, s;
    for (; l || t; ) {
      if (!l || t && l.depth >= t.depth ? (s = t, t = t.next) : (s = l, l = l.next), e && e.mode == s.mode && !s.context && !e.context)
        continue;
      let o = new mo(s.tags, s.mode, s.context);
      e ? e.next = o : i = o, e = o;
    }
    return i;
  }
});
class mo {
  constructor(t, e, i, s) {
    this.tags = t, this.mode = e, this.context = i, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
mo.empty = new mo([], 2, null);
function yS(l, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let o of l)
    if (!Array.isArray(o.tag))
      e[o.tag.id] = o.class;
    else
      for (let u of o.tag)
        e[u.id] = o.class;
  let { scope: i, all: s = null } = t || {};
  return {
    style: (o) => {
      let u = s;
      for (let c of o)
        for (let h of c.set) {
          let m = e[h.id];
          if (m) {
            u = u ? u + " " + m : m;
            break;
          }
        }
      return u;
    },
    scope: i
  };
}
function GM(l, t) {
  let e = null;
  for (let i of l) {
    let s = i.style(t);
    s && (e = e ? e + " " + s : s);
  }
  return e;
}
function KM(l, t, e, i = 0, s = l.length) {
  let o = new XM(i, Array.isArray(t) ? t : [t], e);
  o.highlightRange(l.cursor(), i, s, "", o.highlighters), o.flush(s);
}
class XM {
  constructor(t, e, i) {
    this.at = t, this.highlighters = e, this.span = i, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, i, s, o) {
    let { type: u, from: c, to: h } = t;
    if (c >= i || h <= e)
      return;
    u.isTop && (o = this.highlighters.filter((S) => !S.scope || S.scope(u)));
    let m = s, p = WM(t) || mo.empty, y = GM(o, p.tags);
    if (y && (m && (m += " "), m += y, p.mode == 1 && (s += (s ? " " : "") + y)), this.startSpan(Math.max(e, c), m), p.opaque)
      return;
    let v = t.tree && t.tree.prop(Ot.mounted);
    if (v && v.overlay) {
      let S = t.node.enter(v.overlay[0].from + c, 1), w = this.highlighters.filter((M) => !M.scope || M.scope(v.tree.type)), A = t.firstChild();
      for (let M = 0, O = c; ; M++) {
        let H = M < v.overlay.length ? v.overlay[M] : null, z = H ? H.from + c : h, Q = Math.max(e, O), _ = Math.min(i, z);
        if (Q < _ && A)
          for (; t.from < _ && (this.highlightRange(t, Q, _, s, o), this.startSpan(Math.min(_, t.to), m), !(t.to >= z || !t.nextSibling())); )
            ;
        if (!H || z > i)
          break;
        O = H.to + c, O > e && (this.highlightRange(S.cursor(), Math.max(e, H.from + c), Math.min(i, O), "", w), this.startSpan(Math.min(i, O), m));
      }
      A && t.parent();
    } else if (t.firstChild()) {
      v && (s = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= i)
            break;
          this.highlightRange(t, e, i, s, o), this.startSpan(Math.min(i, t.to), m);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function WM(l) {
  let t = l.type.prop(gS);
  for (; t && t.context && !l.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const F = di.define, su = F(), jn = F(), P1 = F(jn), I1 = F(jn), Yn = F(), ru = F(Yn), Fh = F(Yn), _i = F(), Sl = F(_i), zi = F(), Hi = F(), Jd = F(), Gr = F(Jd), ou = F(), V = {
  /**
  A comment.
  */
  comment: su,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: F(su),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: F(su),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: F(su),
  /**
  Any kind of identifier.
  */
  name: jn,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: F(jn),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: P1,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: F(P1),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: I1,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: F(I1),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: F(jn),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: F(jn),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: F(jn),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: F(jn),
  /**
  A literal value.
  */
  literal: Yn,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: ru,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: F(ru),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: F(ru),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: F(ru),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Fh,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: F(Fh),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: F(Fh),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: F(Yn),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: F(Yn),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: F(Yn),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: F(Yn),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: F(Yn),
  /**
  A language keyword.
  */
  keyword: zi,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: F(zi),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: F(zi),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: F(zi),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: F(zi),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: F(zi),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: F(zi),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: F(zi),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: F(zi),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: F(zi),
  /**
  An operator.
  */
  operator: Hi,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: F(Hi),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: F(Hi),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: F(Hi),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: F(Hi),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: F(Hi),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: F(Hi),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: F(Hi),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: F(Hi),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: F(Hi),
  /**
  Program or markup punctuation.
  */
  punctuation: Jd,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: F(Jd),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Gr,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: F(Gr),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: F(Gr),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: F(Gr),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: F(Gr),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: _i,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Sl,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: F(Sl),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: F(Sl),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: F(Sl),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: F(Sl),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: F(Sl),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: F(Sl),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: F(_i),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: F(_i),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: F(_i),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: F(_i),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: F(_i),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: F(_i),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: F(_i),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: F(_i),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: F(),
  /**
  Deleted text.
  */
  deleted: F(),
  /**
  Changed text.
  */
  changed: F(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: F(),
  /**
  Metadata or meta-instruction.
  */
  meta: ou,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: F(ou),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: F(ou),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: F(ou),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: di.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: di.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: di.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: di.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: di.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: di.defineModifier("special")
};
for (let l in V) {
  let t = V[l];
  t instanceof di && (t.name = l);
}
yS([
  { tag: V.link, class: "tok-link" },
  { tag: V.heading, class: "tok-heading" },
  { tag: V.emphasis, class: "tok-emphasis" },
  { tag: V.strong, class: "tok-strong" },
  { tag: V.keyword, class: "tok-keyword" },
  { tag: V.atom, class: "tok-atom" },
  { tag: V.bool, class: "tok-bool" },
  { tag: V.url, class: "tok-url" },
  { tag: V.labelName, class: "tok-labelName" },
  { tag: V.inserted, class: "tok-inserted" },
  { tag: V.deleted, class: "tok-deleted" },
  { tag: V.literal, class: "tok-literal" },
  { tag: V.string, class: "tok-string" },
  { tag: V.number, class: "tok-number" },
  { tag: [V.regexp, V.escape, V.special(V.string)], class: "tok-string2" },
  { tag: V.variableName, class: "tok-variableName" },
  { tag: V.local(V.variableName), class: "tok-variableName tok-local" },
  { tag: V.definition(V.variableName), class: "tok-variableName tok-definition" },
  { tag: V.special(V.variableName), class: "tok-variableName2" },
  { tag: V.definition(V.propertyName), class: "tok-propertyName tok-definition" },
  { tag: V.typeName, class: "tok-typeName" },
  { tag: V.namespace, class: "tok-namespace" },
  { tag: V.className, class: "tok-className" },
  { tag: V.macroName, class: "tok-macroName" },
  { tag: V.propertyName, class: "tok-propertyName" },
  { tag: V.operator, class: "tok-operator" },
  { tag: V.comment, class: "tok-comment" },
  { tag: V.meta, class: "tok-meta" },
  { tag: V.invalid, class: "tok-invalid" },
  { tag: V.punctuation, class: "tok-punctuation" }
]);
var Ph;
const Jr = /* @__PURE__ */ new Ot(), QM = /* @__PURE__ */ new Ot();
class Yi {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(t, e, i = [], s = "") {
    this.data = t, this.name = s, Tt.prototype.hasOwnProperty("tree") || Object.defineProperty(Tt.prototype, "tree", { get() {
      return Te(this);
    } }), this.parser = e, this.extension = [
      In.of(this),
      Tt.languageData.of((o, u, c) => {
        let h = $1(o, u, c), m = h.type.prop(Jr);
        if (!m)
          return [];
        let p = o.facet(m), y = h.type.prop(QM);
        if (y) {
          let v = h.resolve(u - h.from, c);
          for (let S of y)
            if (S.test(v, o)) {
              let w = o.facet(S.facet);
              return S.type == "replace" ? w : w.concat(p);
            }
        }
        return p;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(t, e, i = -1) {
    return $1(t, e, i).type.prop(Jr) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(t) {
    let e = t.facet(In);
    if (e?.data == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let i = [], s = (o, u) => {
      if (o.prop(Jr) == this.data) {
        i.push({ from: u, to: u + o.length });
        return;
      }
      let c = o.prop(Ot.mounted);
      if (c) {
        if (c.tree.prop(Jr) == this.data) {
          if (c.overlay)
            for (let h of c.overlay)
              i.push({ from: h.from + u, to: h.to + u });
          else
            i.push({ from: u, to: u + o.length });
          return;
        } else if (c.overlay) {
          let h = i.length;
          if (s(c.tree, c.overlay[0].from + u), i.length > h)
            return;
        }
      }
      for (let h = 0; h < o.children.length; h++) {
        let m = o.children[h];
        m instanceof Se && s(m, o.positions[h] + u);
      }
    };
    return s(Te(t), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Yi.setState = /* @__PURE__ */ vt.define();
function $1(l, t, e) {
  let i = l.facet(In), s = Te(l).topNode;
  if (!i || i.allowsNesting)
    for (let o = s; o; o = o.enter(t, e, ie.ExcludeBuffers | ie.EnterBracketed))
      o.type.isTop && (s = o);
  return s;
}
function Te(l) {
  let t = l.field(Yi.state, !1);
  return t ? t.tree : Se.empty;
}
class ZM {
  /**
  Create an input object for the given document.
  */
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(t, e) {
    let i = this.cursorPos - this.string.length;
    return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i);
  }
}
let Kr = null;
class Lu {
  constructor(t, e, i = [], s, o, u, c, h) {
    this.parser = t, this.state = e, this.fragments = i, this.tree = s, this.treeLen = o, this.viewport = u, this.skipped = c, this.scheduleOn = h, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Lu(t, e, [], Se.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new ZM(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != Se.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof t == "number") {
        let s = Date.now() + t;
        t = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Ol.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (t())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Ol.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(t) {
    let e = Kr;
    Kr = this;
    try {
      return t();
    } finally {
      Kr = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = tv(t, e.from, e.to);
    return t;
  }
  /**
  @internal
  */
  changes(t, e) {
    let { fragments: i, tree: s, treeLen: o, viewport: u, skipped: c } = this;
    if (this.takeTree(), !t.empty) {
      let h = [];
      if (t.iterChangedRanges((m, p, y, v) => h.push({ fromA: m, toA: p, fromB: y, toB: v })), i = Ol.applyChanges(i, h), s = Se.empty, o = 0, u = { from: t.mapPos(u.from, -1), to: t.mapPos(u.to, 1) }, this.skipped.length) {
        c = [];
        for (let m of this.skipped) {
          let p = t.mapPos(m.from, 1), y = t.mapPos(m.to, -1);
          p < y && c.push({ from: p, to: y });
        }
      }
    }
    return new Lu(this.parser, e, i, s, o, u, c, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return !1;
    this.viewport = t;
    let e = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: o } = this.skipped[i];
      s < t.to && o > t.from && (this.fragments = tv(this.fragments, s, o), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= e ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(t) {
    return new class extends HM {
      createParse(e, i, s) {
        let o = s[0].from, u = s[s.length - 1].to;
        return {
          parsedPos: o,
          advance() {
            let h = Kr;
            if (h) {
              for (let m of s)
                h.tempSkipped.push(m);
              t && (h.scheduleOn = h.scheduleOn ? Promise.all([h.scheduleOn, t]) : t);
            }
            return this.parsedPos = u, new Se(vi.none, [], [], u - o);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Kr;
  }
}
function tv(l, t, e) {
  return Ol.applyChanges(l, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class Hs {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, i) || e.takeTree(), new Hs(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), i = Lu.create(t.facet(In).parser, t, { from: 0, to: e });
    return i.work(20, e) || i.takeTree(), new Hs(i);
  }
}
Yi.state = /* @__PURE__ */ Oe.define({
  create: Hs.init,
  update(l, t) {
    for (let e of t.effects)
      if (e.is(Yi.setState))
        return e.value;
    return t.startState.facet(In) != t.state.facet(In) ? Hs.init(t.state) : l.apply(t);
  }
});
let vS = (l) => {
  let t = setTimeout(
    () => l(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (vS = (l) => {
  let t = -1, e = setTimeout(
    () => {
      t = requestIdleCallback(l, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const Ih = typeof navigator < "u" && (!((Ph = navigator.scheduling) === null || Ph === void 0) && Ph.isInputPending) ? () => navigator.scheduling.isInputPending() : null, JM = /* @__PURE__ */ Zt.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(Yi.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(Yi.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = vS(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, o = i.field(Yi.state);
    if (o.tree == o.context.tree && o.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let u = Date.now() + Math.min(this.chunkBudget, 100, t && !Ih ? Math.max(25, t.timeRemaining() - 5) : 1e9), c = o.context.treeLen < s && i.doc.length > s + 1e3, h = o.context.work(() => Ih && Ih() || Date.now() > u, s + (c ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (h || this.chunkBudget <= 0) && (o.context.takeTree(), this.view.dispatch({ effects: Yi.setState.of(new Hs(o.context)) })), this.chunkBudget > 0 && !(h && !c) && this.scheduleWork(), this.checkAsyncSchedule(o.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Ye(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), In = /* @__PURE__ */ tt.define({
  combine(l) {
    return l.length ? l[0] : null;
  },
  enables: (l) => [
    Yi.state,
    JM,
    P.contentAttributes.compute([l], (t) => {
      let e = t.facet(l);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
}), FM = /* @__PURE__ */ tt.define(), ec = /* @__PURE__ */ tt.define({
  combine: (l) => {
    if (!l.length)
      return "  ";
    let t = l[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(l[0]));
    return t;
  }
});
function zu(l) {
  let t = l.facet(ec);
  return t.charCodeAt(0) == 9 ? l.tabSize * t.length : t.length;
}
function po(l, t) {
  let e = "", i = l.tabSize, s = l.facet(ec)[0];
  if (s == "	") {
    for (; t >= i; )
      e += "	", t -= i;
    s = " ";
  }
  for (let o = 0; o < t; o++)
    e += s;
  return e;
}
function Em(l, t) {
  l instanceof Tt && (l = new ic(l));
  for (let i of l.state.facet(FM)) {
    let s = i(l, t);
    if (s !== void 0)
      return s;
  }
  let e = Te(l.state);
  return e.length >= t ? IM(l, e, t) : null;
}
class ic {
  /**
  Create an indent context.
  */
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = zu(t);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(t, e = 1) {
    let i = this.state.doc.lineAt(t), { simulateBreak: s, simulateDoubleBreak: o } = this.options;
    return s != null && s >= i.from && s <= i.to ? o && s == t ? { text: "", from: t } : (e < 0 ? s < t : s <= t) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: i, from: s } = this.lineAt(t, e);
    return i.slice(t - s, Math.min(i.length, t + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(t, e = 1) {
    let { text: i, from: s } = this.lineAt(t, e), o = this.countColumn(i, t - s), u = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return u > -1 && (o += u - this.countColumn(i, i.search(/\S|$/))), o;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(t, e = t.length) {
    return Vs(t, this.state.tabSize, e);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(t, e = 1) {
    let { text: i, from: s } = this.lineAt(t, e), o = this.options.overrideIndentation;
    if (o) {
      let u = o(s);
      if (u > -1)
        return u;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const PM = /* @__PURE__ */ new Ot();
function IM(l, t, e) {
  let i = t.resolveStack(e), s = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (s != i.node) {
    let o = [];
    for (let u = s; u && !(u.from < i.node.from || u.to > i.node.to || u.from == i.node.from && u.type == i.node.type); u = u.parent)
      o.push(u);
    for (let u = o.length - 1; u >= 0; u--)
      i = { node: o[u], next: i };
  }
  return bS(i, l, e);
}
function bS(l, t, e) {
  for (let i = l; i; i = i.next) {
    let s = tT(i.node);
    if (s)
      return s(Rm.create(t, e, i));
  }
  return 0;
}
function $M(l) {
  return l.pos == l.options.simulateBreak && l.options.simulateDoubleBreak;
}
function tT(l) {
  let t = l.type.prop(PM);
  if (t)
    return t;
  let e = l.firstChild, i;
  if (e && (i = e.type.prop(Ot.closedBy))) {
    let s = l.lastChild, o = s && i.indexOf(s.name) > -1;
    return (u) => lT(u, !0, 1, void 0, o && !$M(u) ? s.from : void 0);
  }
  return l.parent == null ? eT : null;
}
function eT() {
  return 0;
}
class Rm extends ic {
  constructor(t, e, i) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Rm(t, e, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let i = t.resolve(e.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (iT(i, t))
        break;
      e = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(e.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return bS(this.context.next, this.base, this.pos);
  }
}
function iT(l, t) {
  for (let e = t; e; e = e.parent)
    if (l == e)
      return !0;
  return !1;
}
function nT(l) {
  let t = l.node, e = t.childAfter(t.from), i = t.lastChild;
  if (!e)
    return null;
  let s = l.options.simulateBreak, o = l.state.doc.lineAt(e.from), u = s == null || s <= o.from ? o.to : Math.min(o.to, s);
  for (let c = e.to; ; ) {
    let h = t.childAfter(c);
    if (!h || h == i)
      return null;
    if (!h.type.isSkipped) {
      if (h.from >= u)
        return null;
      let m = /^ */.exec(o.text.slice(e.to - o.from))[0].length;
      return { from: e.from, to: e.to + m };
    }
    c = h.to;
  }
}
function lT(l, t, e, i, s) {
  let o = l.textAfter, u = o.match(/^\s*/)[0].length, c = i && o.slice(u, u + i.length) == i || s == l.pos + u, h = nT(l);
  return h ? c ? l.column(h.from) : l.column(h.to) : l.baseIndent + (c ? 0 : l.unit * e);
}
const sT = 200;
function rT() {
  return Tt.transactionFilter.of((l) => {
    if (!l.docChanged || !l.isUserEvent("input.type") && !l.isUserEvent("input.complete"))
      return l;
    let t = l.startState.languageDataAt("indentOnInput", l.startState.selection.main.head);
    if (!t.length)
      return l;
    let e = l.newDoc, { head: i } = l.newSelection.main, s = e.lineAt(i);
    if (i > s.from + sT)
      return l;
    let o = e.sliceString(s.from, i);
    if (!t.some((m) => m.test(o)))
      return l;
    let { state: u } = l, c = -1, h = [];
    for (let { head: m } of u.selection.ranges) {
      let p = u.doc.lineAt(m);
      if (p.from == c)
        continue;
      c = p.from;
      let y = Em(u, p.from);
      if (y == null)
        continue;
      let v = /^\s*/.exec(p.text)[0], S = po(u, y);
      v != S && h.push({ from: p.from, to: p.from + v.length, insert: S });
    }
    return h.length ? [l, { changes: h, sequential: !0 }] : l;
  });
}
const oT = /* @__PURE__ */ tt.define(), aT = /* @__PURE__ */ new Ot();
function uT(l, t, e) {
  let i = Te(l);
  if (i.length < e)
    return null;
  let s = i.resolveStack(e, 1), o = null;
  for (let u = s; u; u = u.next) {
    let c = u.node;
    if (c.to <= e || c.from > e)
      continue;
    if (o && c.from < t)
      break;
    let h = c.type.prop(aT);
    if (h && (c.to < i.length - 50 || i.length == l.doc.length || !cT(c))) {
      let m = h(c, l);
      m && m.from <= e && m.from >= t && m.to > e && (o = m);
    }
  }
  return o;
}
function cT(l) {
  let t = l.lastChild;
  return t && t.to == l.to && t.type.isError;
}
function Hu(l, t, e) {
  for (let i of l.facet(oT)) {
    let s = i(l, t, e);
    if (s)
      return s;
  }
  return uT(l, t, e);
}
function SS(l, t) {
  let e = t.mapPos(l.from, 1), i = t.mapPos(l.to, -1);
  return e >= i ? void 0 : { from: e, to: i };
}
const nc = /* @__PURE__ */ vt.define({ map: SS }), ko = /* @__PURE__ */ vt.define({ map: SS });
function xS(l) {
  let t = [];
  for (let { head: e } of l.state.selection.ranges)
    t.some((i) => i.from <= e && i.to >= e) || t.push(l.lineBlockAt(e));
  return t;
}
const Nl = /* @__PURE__ */ Oe.define({
  create() {
    return ut.none;
  },
  update(l, t) {
    t.isUserEvent("delete") && t.changes.iterChangedRanges((e, i) => l = ev(l, e, i)), l = l.map(t.changes);
    for (let e of t.effects)
      if (e.is(nc) && !fT(l, e.value.from, e.value.to)) {
        let { preparePlaceholder: i } = t.state.facet(CS), s = i ? ut.replace({ widget: new vT(i(t.state, e.value)) }) : iv;
        l = l.update({ add: [s.range(e.value.from, e.value.to)] });
      } else e.is(ko) && (l = l.update({
        filter: (i, s) => e.value.from != i || e.value.to != s,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
    return t.selection && (l = ev(l, t.selection.main.head)), l;
  },
  provide: (l) => P.decorations.from(l),
  toJSON(l, t) {
    let e = [];
    return l.between(0, t.doc.length, (i, s) => {
      e.push(i, s);
    }), e;
  },
  fromJSON(l) {
    if (!Array.isArray(l) || l.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let t = [];
    for (let e = 0; e < l.length; ) {
      let i = l[e++], s = l[e++];
      if (typeof i != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      t.push(iv.range(i, s));
    }
    return ut.set(t, !0);
  }
});
function ev(l, t, e = t) {
  let i = !1;
  return l.between(t, e, (s, o) => {
    s < e && o > t && (i = !0);
  }), i ? l.update({
    filterFrom: t,
    filterTo: e,
    filter: (s, o) => s >= e || o <= t
  }) : l;
}
function _u(l, t, e) {
  var i;
  let s = null;
  return (i = l.field(Nl, !1)) === null || i === void 0 || i.between(t, e, (o, u) => {
    (!s || s.from > o) && (s = { from: o, to: u });
  }), s;
}
function fT(l, t, e) {
  let i = !1;
  return l.between(t, t, (s, o) => {
    s == t && o == e && (i = !0);
  }), i;
}
function wS(l, t) {
  return l.field(Nl, !1) ? t : t.concat(vt.appendConfig.of(kS()));
}
const hT = (l) => {
  for (let t of xS(l)) {
    let e = Hu(l.state, t.from, t.to);
    if (e)
      return l.dispatch({ effects: wS(l.state, [nc.of(e), AS(l, e)]) }), !0;
  }
  return !1;
}, dT = (l) => {
  if (!l.state.field(Nl, !1))
    return !1;
  let t = [];
  for (let e of xS(l)) {
    let i = _u(l.state, e.from, e.to);
    i && t.push(ko.of(i), AS(l, i, !1));
  }
  return t.length && l.dispatch({ effects: t }), t.length > 0;
};
function AS(l, t, e = !0) {
  let i = l.state.doc.lineAt(t.from).number, s = l.state.doc.lineAt(t.to).number;
  return P.announce.of(`${l.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${i} ${l.state.phrase("to")} ${s}.`);
}
const mT = (l) => {
  let { state: t } = l, e = [];
  for (let i = 0; i < t.doc.length; ) {
    let s = l.lineBlockAt(i), o = Hu(t, s.from, s.to);
    o && e.push(nc.of(o)), i = (o ? l.lineBlockAt(o.to) : s).to + 1;
  }
  return e.length && l.dispatch({ effects: wS(l.state, e) }), !!e.length;
}, pT = (l) => {
  let t = l.state.field(Nl, !1);
  if (!t || !t.size)
    return !1;
  let e = [];
  return t.between(0, l.state.doc.length, (i, s) => {
    e.push(ko.of({ from: i, to: s }));
  }), l.dispatch({ effects: e }), !0;
}, gT = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: hT },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: dT },
  { key: "Ctrl-Alt-[", run: mT },
  { key: "Ctrl-Alt-]", run: pT }
], yT = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, CS = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, yT);
  }
});
function kS(l) {
  return [Nl, xT];
}
function MS(l, t) {
  let { state: e } = l, i = e.facet(CS), s = (u) => {
    let c = l.lineBlockAt(l.posAtDOM(u.target)), h = _u(l.state, c.from, c.to);
    h && l.dispatch({ effects: ko.of(h) }), u.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(l, s, t);
  let o = document.createElement("span");
  return o.textContent = i.placeholderText, o.setAttribute("aria-label", e.phrase("folded code")), o.title = e.phrase("unfold"), o.className = "cm-foldPlaceholder", o.onclick = s, o;
}
const iv = /* @__PURE__ */ ut.replace({ widget: /* @__PURE__ */ new class extends Ji {
  toDOM(l) {
    return MS(l, null);
  }
}() });
class vT extends Ji {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return MS(t, this.value);
  }
}
const bT = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class $h extends pn {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function ST(l = {}) {
  let t = { ...bT, ...l }, e = new $h(t, !0), i = new $h(t, !1), s = Zt.fromClass(class {
    constructor(u) {
      this.from = u.viewport.from, this.markers = this.buildMarkers(u);
    }
    update(u) {
      (u.docChanged || u.viewportChanged || u.startState.facet(In) != u.state.facet(In) || u.startState.field(Nl, !1) != u.state.field(Nl, !1) || Te(u.startState) != Te(u.state) || t.foldingChanged(u)) && (this.markers = this.buildMarkers(u.view));
    }
    buildMarkers(u) {
      let c = new Wi();
      for (let h of u.viewportLineBlocks) {
        let m = _u(u.state, h.from, h.to) ? i : Hu(u.state, h.from, h.to) ? e : null;
        m && c.add(h.from, h.from, m);
      }
      return c.finish();
    }
  }), { domEventHandlers: o } = t;
  return [
    s,
    vM({
      class: "cm-foldGutter",
      markers(u) {
        var c;
        return ((c = u.plugin(s)) === null || c === void 0 ? void 0 : c.markers) || Mt.empty;
      },
      initialSpacer() {
        return new $h(t, !1);
      },
      domEventHandlers: {
        ...o,
        click: (u, c, h) => {
          if (o.click && o.click(u, c, h))
            return !0;
          let m = _u(u.state, c.from, c.to);
          if (m)
            return u.dispatch({ effects: ko.of(m) }), !0;
          let p = Hu(u.state, c.from, c.to);
          return p ? (u.dispatch({ effects: nc.of(p) }), !0) : !1;
        }
      }
    }),
    kS()
  ];
}
const xT = /* @__PURE__ */ P.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class Mo {
  constructor(t, e) {
    this.specs = t;
    let i;
    function s(c) {
      let h = Zn.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + h] = c, h;
    }
    const o = typeof e.all == "string" ? e.all : e.all ? s(e.all) : void 0, u = e.scope;
    this.scope = u instanceof Yi ? (c) => c.prop(Jr) == u.data : u ? (c) => c == u : void 0, this.style = yS(t.map((c) => ({
      tag: c.tag,
      class: c.class || s(Object.assign({}, c, { tag: null }))
    })), {
      all: o
    }).style, this.module = i ? new Zn(i) : null, this.themeType = e.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(t, e) {
    return new Mo(t, e || {});
  }
}
const Fd = /* @__PURE__ */ tt.define(), TS = /* @__PURE__ */ tt.define({
  combine(l) {
    return l.length ? [l[0]] : null;
  }
});
function td(l) {
  let t = l.facet(Fd);
  return t.length ? t : l.facet(TS);
}
function OS(l, t) {
  let e = [AT], i;
  return l instanceof Mo && (l.module && e.push(P.styleModule.of(l.module)), i = l.themeType), t?.fallback ? e.push(TS.of(l)) : i ? e.push(Fd.computeN([P.darkTheme], (s) => s.facet(P.darkTheme) == (i == "dark") ? [l] : [])) : e.push(Fd.of(l)), e;
}
class wT {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Te(t.state), this.decorations = this.buildDeco(t, td(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = Te(t.state), i = td(t.state), s = i != td(t.startState), { viewport: o } = t.view, u = t.changes.mapPos(this.decoratedTo, 1);
    e.length < o.to && !s && e.type == this.tree.type && u >= o.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = u) : (e != this.tree || t.viewportChanged || s) && (this.tree = e, this.decorations = this.buildDeco(t.view, i), this.decoratedTo = o.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return ut.none;
    let i = new Wi();
    for (let { from: s, to: o } of t.visibleRanges)
      KM(this.tree, e, (u, c, h) => {
        i.add(u, c, this.markCache[h] || (this.markCache[h] = ut.mark({ class: h })));
      }, s, o);
    return i.finish();
  }
}
const AT = /* @__PURE__ */ tl.high(/* @__PURE__ */ Zt.fromClass(wT, {
  decorations: (l) => l.decorations
})), CT = /* @__PURE__ */ Mo.define([
  {
    tag: V.meta,
    color: "#404740"
  },
  {
    tag: V.link,
    textDecoration: "underline"
  },
  {
    tag: V.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: V.emphasis,
    fontStyle: "italic"
  },
  {
    tag: V.strong,
    fontWeight: "bold"
  },
  {
    tag: V.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: V.keyword,
    color: "#708"
  },
  {
    tag: [V.atom, V.bool, V.url, V.contentSeparator, V.labelName],
    color: "#219"
  },
  {
    tag: [V.literal, V.inserted],
    color: "#164"
  },
  {
    tag: [V.string, V.deleted],
    color: "#a11"
  },
  {
    tag: [V.regexp, V.escape, /* @__PURE__ */ V.special(V.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ V.definition(V.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ V.local(V.variableName),
    color: "#30a"
  },
  {
    tag: [V.typeName, V.namespace],
    color: "#085"
  },
  {
    tag: V.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ V.special(V.variableName), V.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ V.definition(V.propertyName),
    color: "#00c"
  },
  {
    tag: V.comment,
    color: "#940"
  },
  {
    tag: V.invalid,
    color: "#f00"
  }
]), kT = /* @__PURE__ */ P.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), DS = 1e4, ES = "()[]{}", RS = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, {
      afterCursor: !0,
      brackets: ES,
      maxScanDistance: DS,
      renderMatch: OT
    });
  }
}), MT = /* @__PURE__ */ ut.mark({ class: "cm-matchingBracket" }), TT = /* @__PURE__ */ ut.mark({ class: "cm-nonmatchingBracket" });
function OT(l) {
  let t = [], e = l.matched ? MT : TT;
  return t.push(e.range(l.start.from, l.start.to)), l.end && t.push(e.range(l.end.from, l.end.to)), t;
}
function nv(l) {
  let t = [], e = l.facet(RS);
  for (let i of l.selection.ranges) {
    if (!i.empty)
      continue;
    let s = Gi(l, i.head, -1, e) || i.head > 0 && Gi(l, i.head - 1, 1, e) || e.afterCursor && (Gi(l, i.head, 1, e) || i.head < l.doc.length && Gi(l, i.head + 1, -1, e));
    s && (t = t.concat(e.renderMatch(s, l)));
  }
  return ut.set(t, !0);
}
const DT = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.paused = !1, this.decorations = nv(l.state);
  }
  update(l) {
    (l.docChanged || l.selectionSet || this.paused) && (l.view.composing ? (this.decorations = this.decorations.map(l.changes), this.paused = !0) : (this.decorations = nv(l.state), this.paused = !1));
  }
}, {
  decorations: (l) => l.decorations
}), ET = [
  DT,
  kT
];
function RT(l = {}) {
  return [RS.of(l), ET];
}
const BT = /* @__PURE__ */ new Ot();
function Pd(l, t, e) {
  let i = l.prop(t < 0 ? Ot.openedBy : Ot.closedBy);
  if (i)
    return i;
  if (l.name.length == 1) {
    let s = e.indexOf(l.name);
    if (s > -1 && s % 2 == (t < 0 ? 1 : 0))
      return [e[s + t]];
  }
  return null;
}
function Id(l) {
  let t = l.type.prop(BT);
  return t ? t(l.node) : l;
}
function Gi(l, t, e, i = {}) {
  let s = i.maxScanDistance || DS, o = i.brackets || ES, u = Te(l), c = u.resolveInner(t, e);
  for (let h = c; h; h = h.parent) {
    let m = Pd(h.type, e, o);
    if (m && h.from < h.to) {
      let p = Id(h);
      if (p && (e > 0 ? t >= p.from && t < p.to : t > p.from && t <= p.to))
        return NT(l, t, e, h, p, m, o);
    }
  }
  return LT(l, t, e, u, c.type, s, o);
}
function NT(l, t, e, i, s, o, u) {
  let c = i.parent, h = { from: s.from, to: s.to }, m = 0, p = c?.cursor();
  if (p && (e < 0 ? p.childBefore(i.from) : p.childAfter(i.to)))
    do
      if (e < 0 ? p.to <= i.from : p.from >= i.to) {
        if (m == 0 && o.indexOf(p.type.name) > -1 && p.from < p.to) {
          let y = Id(p);
          return { start: h, end: y ? { from: y.from, to: y.to } : void 0, matched: !0 };
        } else if (Pd(p.type, e, u))
          m++;
        else if (Pd(p.type, -e, u)) {
          if (m == 0) {
            let y = Id(p);
            return {
              start: h,
              end: y && y.from < y.to ? { from: y.from, to: y.to } : void 0,
              matched: !1
            };
          }
          m--;
        }
      }
    while (e < 0 ? p.prevSibling() : p.nextSibling());
  return { start: h, matched: !1 };
}
function LT(l, t, e, i, s, o, u) {
  if (e < 0 ? !t : t == l.doc.length)
    return null;
  let c = e < 0 ? l.sliceDoc(t - 1, t) : l.sliceDoc(t, t + 1), h = u.indexOf(c);
  if (h < 0 || h % 2 == 0 != e > 0)
    return null;
  let m = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, p = l.doc.iterRange(t, e > 0 ? l.doc.length : 0), y = 0;
  for (let v = 0; !p.next().done && v <= o; ) {
    let S = p.value;
    e < 0 && (v += S.length);
    let w = t + v * e;
    for (let A = e > 0 ? 0 : S.length - 1, M = e > 0 ? S.length : -1; A != M; A += e) {
      let O = u.indexOf(S[A]);
      if (!(O < 0 || i.resolveInner(w + A, 1).type != s))
        if (O % 2 == 0 == e > 0)
          y++;
        else {
          if (y == 1)
            return { start: m, end: { from: w + A, to: w + A + 1 }, matched: O >> 1 == h >> 1 };
          y--;
        }
    }
    e > 0 && (v += S.length);
  }
  return p.done ? { start: m, matched: !1 } : null;
}
const zT = /* @__PURE__ */ Object.create(null), lv = [vi.none], sv = [], rv = /* @__PURE__ */ Object.create(null), HT = /* @__PURE__ */ Object.create(null);
for (let [l, t] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  HT[l] = /* @__PURE__ */ _T(zT, t);
function ed(l, t) {
  sv.indexOf(l) > -1 || (sv.push(l), console.warn(t));
}
function _T(l, t) {
  let e = [];
  for (let c of t.split(" ")) {
    let h = [];
    for (let m of c.split(".")) {
      let p = l[m] || V[m];
      p ? typeof p == "function" ? h.length ? h = h.map(p) : ed(m, `Modifier ${m} used at start of tag`) : h.length ? ed(m, `Tag ${m} used as modifier`) : h = Array.isArray(p) ? p : [p] : ed(m, `Unknown highlighting tag ${m}`);
    }
    for (let m of h)
      e.push(m);
  }
  if (!e.length)
    return 0;
  let i = t.replace(/ /g, "_"), s = i + " " + e.map((c) => c.id), o = rv[s];
  if (o)
    return o.id;
  let u = rv[s] = vi.define({
    id: lv.length,
    name: i,
    props: [YM({ [i]: e })]
  });
  return lv.push(u), u.id;
}
jt.RTL, jt.LTR;
const UT = (l) => {
  let { state: t } = l, e = t.doc.lineAt(t.selection.main.from), i = Nm(l.state, e.from);
  return i.line ? VT(l) : i.block ? jT(l) : !1;
};
function Bm(l, t) {
  return ({ state: e, dispatch: i }) => {
    if (e.readOnly)
      return !1;
    let s = l(t, e);
    return s ? (i(e.update(s)), !0) : !1;
  };
}
const VT = /* @__PURE__ */ Bm(
  KT,
  0
  /* CommentOption.Toggle */
), qT = /* @__PURE__ */ Bm(
  BS,
  0
  /* CommentOption.Toggle */
), jT = /* @__PURE__ */ Bm(
  (l, t) => BS(l, t, GT(t)),
  0
  /* CommentOption.Toggle */
);
function Nm(l, t) {
  let e = l.languageDataAt("commentTokens", t, 1);
  return e.length ? e[0] : {};
}
const Xr = 50;
function YT(l, { open: t, close: e }, i, s) {
  let o = l.sliceDoc(i - Xr, i), u = l.sliceDoc(s, s + Xr), c = /\s*$/.exec(o)[0].length, h = /^\s*/.exec(u)[0].length, m = o.length - c;
  if (o.slice(m - t.length, m) == t && u.slice(h, h + e.length) == e)
    return {
      open: { pos: i - c, margin: c && 1 },
      close: { pos: s + h, margin: h && 1 }
    };
  let p, y;
  s - i <= 2 * Xr ? p = y = l.sliceDoc(i, s) : (p = l.sliceDoc(i, i + Xr), y = l.sliceDoc(s - Xr, s));
  let v = /^\s*/.exec(p)[0].length, S = /\s*$/.exec(y)[0].length, w = y.length - S - e.length;
  return p.slice(v, v + t.length) == t && y.slice(w, w + e.length) == e ? {
    open: {
      pos: i + v + t.length,
      margin: /\s/.test(p.charAt(v + t.length)) ? 1 : 0
    },
    close: {
      pos: s - S - e.length,
      margin: /\s/.test(y.charAt(w - 1)) ? 1 : 0
    }
  } : null;
}
function GT(l) {
  let t = [];
  for (let e of l.selection.ranges) {
    let i = l.doc.lineAt(e.from), s = e.to <= i.to ? i : l.doc.lineAt(e.to);
    s.from > i.from && s.from == e.to && (s = e.to == i.to + 1 ? i : l.doc.lineAt(e.to - 1));
    let o = t.length - 1;
    o >= 0 && t[o].to > i.from ? t[o].to = s.to : t.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return t;
}
function BS(l, t, e = t.selection.ranges) {
  let i = e.map((o) => Nm(t, o.from).block);
  if (!i.every((o) => o))
    return null;
  let s = e.map((o, u) => YT(t, i[u], o.from, o.to));
  if (l != 2 && !s.every((o) => o))
    return { changes: t.changes(e.map((o, u) => s[u] ? [] : [{ from: o.from, insert: i[u].open + " " }, { from: o.to, insert: " " + i[u].close }])) };
  if (l != 1 && s.some((o) => o)) {
    let o = [];
    for (let u = 0, c; u < s.length; u++)
      if (c = s[u]) {
        let h = i[u], { open: m, close: p } = c;
        o.push({ from: m.pos - h.open.length, to: m.pos + m.margin }, { from: p.pos - p.margin, to: p.pos + h.close.length });
      }
    return { changes: o };
  }
  return null;
}
function KT(l, t, e = t.selection.ranges) {
  let i = [], s = -1;
  t: for (let { from: o, to: u } of e) {
    let c = i.length, h = 1e9, m;
    for (let p = o; p <= u; ) {
      let y = t.doc.lineAt(p);
      if (m == null && (m = Nm(t, y.from).line, !m))
        continue t;
      if (y.from > s && (o == u || u > y.from)) {
        s = y.from;
        let v = /^\s*/.exec(y.text)[0].length, S = v == y.length, w = y.text.slice(v, v + m.length) == m ? v : -1;
        v < y.text.length && v < h && (h = v), i.push({ line: y, comment: w, token: m, indent: v, empty: S, single: !1 });
      }
      p = y.to + 1;
    }
    if (h < 1e9)
      for (let p = c; p < i.length; p++)
        i[p].indent < i[p].line.text.length && (i[p].indent = h);
    i.length == c + 1 && (i[c].single = !0);
  }
  if (l != 2 && i.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: c, token: h, indent: m, empty: p, single: y } of i)
      (y || !p) && o.push({ from: c.from + m, insert: h + " " });
    let u = t.changes(o);
    return { changes: u, selection: t.selection.map(u, 1) };
  } else if (l != 1 && i.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: u, comment: c, token: h } of i)
      if (c >= 0) {
        let m = u.from + c, p = m + h.length;
        u.text[p - u.from] == " " && p++, o.push({ from: m, to: p });
      }
    return { changes: o };
  }
  return null;
}
const $d = /* @__PURE__ */ Qi.define(), XT = /* @__PURE__ */ Qi.define(), WT = /* @__PURE__ */ tt.define(), NS = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (t, e) => e
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (t, e) => (i, s) => t(i, s) || e(i, s)
    });
  }
}), LS = /* @__PURE__ */ Oe.define({
  create() {
    return Ki.empty;
  },
  update(l, t) {
    let e = t.state.facet(NS), i = t.annotation($d);
    if (i) {
      let h = Ge.fromTransaction(t, i.selection), m = i.side, p = m == 0 ? l.undone : l.done;
      return h ? p = Uu(p, p.length, e.minDepth, h) : p = _S(p, t.startState.selection), new Ki(m == 0 ? i.rest : p, m == 0 ? p : i.rest);
    }
    let s = t.annotation(XT);
    if ((s == "full" || s == "before") && (l = l.isolate()), t.annotation(ae.addToHistory) === !1)
      return t.changes.empty ? l : l.addMapping(t.changes.desc);
    let o = Ge.fromTransaction(t), u = t.annotation(ae.time), c = t.annotation(ae.userEvent);
    return o ? l = l.addChanges(o, u, c, e, t) : t.selection && (l = l.addSelection(t.startState.selection, u, c, e.newGroupDelay)), (s == "full" || s == "after") && (l = l.isolate()), l;
  },
  toJSON(l) {
    return { done: l.done.map((t) => t.toJSON()), undone: l.undone.map((t) => t.toJSON()) };
  },
  fromJSON(l) {
    return new Ki(l.done.map(Ge.fromJSON), l.undone.map(Ge.fromJSON));
  }
});
function QT(l = {}) {
  return [
    LS,
    NS.of(l),
    P.domEventHandlers({
      beforeinput(t, e) {
        let i = t.inputType == "historyUndo" ? zS : t.inputType == "historyRedo" ? tm : null;
        return i ? (t.preventDefault(), i(e)) : !1;
      }
    })
  ];
}
function lc(l, t) {
  return function({ state: e, dispatch: i }) {
    if (!t && e.readOnly)
      return !1;
    let s = e.field(LS, !1);
    if (!s)
      return !1;
    let o = s.pop(l, e, t);
    return o ? (i(o), !0) : !1;
  };
}
const zS = /* @__PURE__ */ lc(0, !1), tm = /* @__PURE__ */ lc(1, !1), ZT = /* @__PURE__ */ lc(0, !0), JT = /* @__PURE__ */ lc(1, !0);
class Ge {
  constructor(t, e, i, s, o) {
    this.changes = t, this.effects = e, this.mapped = i, this.startSelection = s, this.selectionsAfter = o;
  }
  setSelAfter(t) {
    return new Ge(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, e, i;
    return {
      changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
      mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(t) {
    return new Ge(t.changes && oe.fromJSON(t.changes), [], t.mapped && Xi.fromJSON(t.mapped), t.startSelection && j.fromJSON(t.startSelection), t.selectionsAfter.map(j.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(t, e) {
    let i = pi;
    for (let s of t.startState.facet(WT)) {
      let o = s(t);
      o.length && (i = i.concat(o));
    }
    return !i.length && t.changes.empty ? null : new Ge(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, pi);
  }
  static selection(t) {
    return new Ge(void 0, pi, void 0, void 0, t);
  }
}
function Uu(l, t, e, i) {
  let s = t + 1 > e + 20 ? t - e - 1 : 0, o = l.slice(s, t);
  return o.push(i), o;
}
function FT(l, t) {
  let e = [], i = !1;
  return l.iterChangedRanges((s, o) => e.push(s, o)), t.iterChangedRanges((s, o, u, c) => {
    for (let h = 0; h < e.length; ) {
      let m = e[h++], p = e[h++];
      c >= m && u <= p && (i = !0);
    }
  }), i;
}
function PT(l, t) {
  return l.ranges.length == t.ranges.length && l.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0;
}
function HS(l, t) {
  return l.length ? t.length ? l.concat(t) : l : t;
}
const pi = [], IT = 200;
function _S(l, t) {
  if (l.length) {
    let e = l[l.length - 1], i = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - IT));
    return i.length && i[i.length - 1].eq(t) ? l : (i.push(t), Uu(l, l.length - 1, 1e9, e.setSelAfter(i)));
  } else
    return [Ge.selection([t])];
}
function $T(l) {
  let t = l[l.length - 1], e = l.slice();
  return e[l.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function id(l, t) {
  if (!l.length)
    return l;
  let e = l.length, i = pi;
  for (; e; ) {
    let s = tO(l[e - 1], t, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let o = l.slice(0, e);
      return o[e - 1] = s, o;
    } else
      t = s.mapped, e--, i = s.selectionsAfter;
  }
  return i.length ? [Ge.selection(i)] : pi;
}
function tO(l, t, e) {
  let i = HS(l.selectionsAfter.length ? l.selectionsAfter.map((c) => c.map(t)) : pi, e);
  if (!l.changes)
    return Ge.selection(i);
  let s = l.changes.map(t), o = t.mapDesc(l.changes, !0), u = l.mapped ? l.mapped.composeDesc(o) : o;
  return new Ge(s, vt.mapEffects(l.effects, t), u, l.startSelection.map(o), i);
}
const eO = /^(input\.type|delete)($|\.)/;
class Ki {
  constructor(t, e, i = 0, s = void 0) {
    this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Ki(this.done, this.undone) : this;
  }
  addChanges(t, e, i, s, o) {
    let u = this.done, c = u[u.length - 1];
    return c && c.changes && !c.changes.empty && t.changes && (!i || eO.test(i)) && (!c.selectionsAfter.length && e - this.prevTime < s.newGroupDelay && s.joinToEvent(o, FT(c.changes, t.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? u = Uu(u, u.length - 1, s.minDepth, new Ge(t.changes.compose(c.changes), HS(vt.mapEffects(t.effects, c.changes), c.effects), c.mapped, c.startSelection, pi)) : u = Uu(u, u.length, s.minDepth, t), new Ki(u, pi, e, i);
  }
  addSelection(t, e, i, s) {
    let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : pi;
    return o.length > 0 && e - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && PT(o[o.length - 1], t) ? this : new Ki(_S(this.done, t), this.undone, e, i);
  }
  addMapping(t) {
    return new Ki(id(this.done, t), id(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, i) {
    let s = t == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let o = s[s.length - 1], u = o.selectionsAfter[0] || (o.startSelection ? o.startSelection.map(o.changes.invertedDesc, 1) : e.selection);
    if (i && o.selectionsAfter.length)
      return e.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: $d.of({ side: t, rest: $T(s), selection: u }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (o.changes) {
      let c = s.length == 1 ? pi : s.slice(0, s.length - 1);
      return o.mapped && (c = id(c, o.mapped)), e.update({
        changes: o.changes,
        selection: o.startSelection,
        effects: o.effects,
        annotations: $d.of({ side: t, rest: c, selection: u }),
        filter: !1,
        userEvent: t == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Ki.empty = /* @__PURE__ */ new Ki(pi, pi);
const iO = [
  { key: "Mod-z", run: zS, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: tm, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: tm, preventDefault: !0 },
  { key: "Mod-u", run: ZT, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: JT, preventDefault: !0 }
];
function qs(l, t) {
  return j.create(l.ranges.map(t), l.mainIndex);
}
function Mi(l, t) {
  return l.update({ selection: t, scrollIntoView: !0, userEvent: "select" });
}
function Ti({ state: l, dispatch: t }, e) {
  let i = qs(l.selection, e);
  return i.eq(l.selection, !0) ? !1 : (t(Mi(l, i)), !0);
}
function sc(l, t) {
  return j.cursor(t ? l.to : l.from);
}
function US(l, t) {
  return Ti(l, (e) => e.empty ? l.moveByChar(e, t) : sc(e, t));
}
function De(l) {
  return l.textDirectionAt(l.state.selection.main.head) == jt.LTR;
}
const VS = (l) => US(l, !De(l)), qS = (l) => US(l, De(l));
function jS(l, t) {
  return Ti(l, (e) => e.empty ? l.moveByGroup(e, t) : sc(e, t));
}
const nO = (l) => jS(l, !De(l)), lO = (l) => jS(l, De(l));
function sO(l, t, e) {
  if (t.type.prop(e))
    return !0;
  let i = t.to - t.from;
  return i && (i > 2 || /[^\s,.;:]/.test(l.sliceDoc(t.from, t.to))) || t.firstChild;
}
function rc(l, t, e) {
  let i = Te(l).resolveInner(t.head), s = e ? Ot.closedBy : Ot.openedBy;
  for (let h = t.head; ; ) {
    let m = e ? i.childAfter(h) : i.childBefore(h);
    if (!m)
      break;
    sO(l, m, s) ? i = m : h = e ? m.to : m.from;
  }
  let o = i.type.prop(s), u, c;
  return o && (u = e ? Gi(l, i.from, 1) : Gi(l, i.to, -1)) && u.matched ? c = e ? u.end.to : u.end.from : c = e ? i.to : i.from, j.cursor(c, e ? -1 : 1);
}
const rO = (l) => Ti(l, (t) => rc(l.state, t, !De(l))), oO = (l) => Ti(l, (t) => rc(l.state, t, De(l)));
function YS(l, t) {
  return Ti(l, (e) => {
    if (!e.empty)
      return sc(e, t);
    let i = l.moveVertically(e, t);
    return i.head != e.head ? i : l.moveToLineBoundary(e, t);
  });
}
const GS = (l) => YS(l, !1), KS = (l) => YS(l, !0);
function XS(l) {
  let t = l.scrollDOM.clientHeight < l.scrollDOM.scrollHeight - 2, e = 0, i = 0, s;
  if (t) {
    for (let o of l.state.facet(P.scrollMargins)) {
      let u = o(l);
      u?.top && (e = Math.max(u?.top, e)), u?.bottom && (i = Math.max(u?.bottom, i));
    }
    s = l.scrollDOM.clientHeight - e - i;
  } else
    s = (l.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: e,
    marginBottom: i,
    selfScroll: t,
    height: Math.max(l.defaultLineHeight, s - 5)
  };
}
function WS(l, t) {
  let e = XS(l), { state: i } = l, s = qs(i.selection, (u) => u.empty ? l.moveVertically(u, t, e.height) : sc(u, t));
  if (s.eq(i.selection))
    return !1;
  let o;
  if (e.selfScroll) {
    let u = l.coordsAtPos(i.selection.main.head), c = l.scrollDOM.getBoundingClientRect(), h = c.top + e.marginTop, m = c.bottom - e.marginBottom;
    u && u.top > h && u.bottom < m && (o = P.scrollIntoView(s.main.head, { y: "start", yMargin: u.top - h }));
  }
  return l.dispatch(Mi(i, s), { effects: o }), !0;
}
const ov = (l) => WS(l, !1), em = (l) => WS(l, !0);
function el(l, t, e) {
  let i = l.lineBlockAt(t.head), s = l.moveToLineBoundary(t, e);
  if (s.head == t.head && s.head != (e ? i.to : i.from) && (s = l.moveToLineBoundary(t, e, !1)), !e && s.head == i.from && i.length) {
    let o = /^\s*/.exec(l.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    o && t.head != i.from + o && (s = j.cursor(i.from + o));
  }
  return s;
}
const aO = (l) => Ti(l, (t) => el(l, t, !0)), uO = (l) => Ti(l, (t) => el(l, t, !1)), cO = (l) => Ti(l, (t) => el(l, t, !De(l))), fO = (l) => Ti(l, (t) => el(l, t, De(l))), hO = (l) => Ti(l, (t) => j.cursor(l.lineBlockAt(t.head).from, 1)), dO = (l) => Ti(l, (t) => j.cursor(l.lineBlockAt(t.head).to, -1));
function mO(l, t, e) {
  let i = !1, s = qs(l.selection, (o) => {
    let u = Gi(l, o.head, -1) || Gi(l, o.head, 1) || o.head > 0 && Gi(l, o.head - 1, 1) || o.head < l.doc.length && Gi(l, o.head + 1, -1);
    if (!u || !u.end)
      return o;
    i = !0;
    let c = u.start.from == o.head ? u.end.to : u.end.from;
    return j.cursor(c);
  });
  return i ? (t(Mi(l, s)), !0) : !1;
}
const pO = ({ state: l, dispatch: t }) => mO(l, t);
function bi(l, t) {
  let e = qs(l.state.selection, (i) => {
    let s = t(i);
    return j.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0, s.assoc);
  });
  return e.eq(l.state.selection) ? !1 : (l.dispatch(Mi(l.state, e)), !0);
}
function QS(l, t) {
  return bi(l, (e) => l.moveByChar(e, t));
}
const ZS = (l) => QS(l, !De(l)), JS = (l) => QS(l, De(l));
function FS(l, t) {
  return bi(l, (e) => l.moveByGroup(e, t));
}
const gO = (l) => FS(l, !De(l)), yO = (l) => FS(l, De(l)), vO = (l) => bi(l, (t) => rc(l.state, t, !De(l))), bO = (l) => bi(l, (t) => rc(l.state, t, De(l)));
function PS(l, t) {
  return bi(l, (e) => l.moveVertically(e, t));
}
const IS = (l) => PS(l, !1), $S = (l) => PS(l, !0);
function tx(l, t) {
  return bi(l, (e) => l.moveVertically(e, t, XS(l).height));
}
const av = (l) => tx(l, !1), uv = (l) => tx(l, !0), SO = (l) => bi(l, (t) => el(l, t, !0)), xO = (l) => bi(l, (t) => el(l, t, !1)), wO = (l) => bi(l, (t) => el(l, t, !De(l))), AO = (l) => bi(l, (t) => el(l, t, De(l))), CO = (l) => bi(l, (t) => j.cursor(l.lineBlockAt(t.head).from)), kO = (l) => bi(l, (t) => j.cursor(l.lineBlockAt(t.head).to)), cv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: 0 })), !0), fv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: l.doc.length })), !0), hv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: l.selection.main.anchor, head: 0 })), !0), dv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: l.selection.main.anchor, head: l.doc.length })), !0), MO = ({ state: l, dispatch: t }) => (t(l.update({ selection: { anchor: 0, head: l.doc.length }, userEvent: "select" })), !0), TO = ({ state: l, dispatch: t }) => {
  let e = oc(l).map(({ from: i, to: s }) => j.range(i, Math.min(s + 1, l.doc.length)));
  return t(l.update({ selection: j.create(e), userEvent: "select" })), !0;
}, OO = ({ state: l, dispatch: t }) => {
  let e = qs(l.selection, (i) => {
    let s = Te(l), o = s.resolveStack(i.from, 1);
    if (i.empty) {
      let u = s.resolveStack(i.from, -1);
      u.node.from >= o.node.from && u.node.to <= o.node.to && (o = u);
    }
    for (let u = o; u; u = u.next) {
      let { node: c } = u;
      if ((c.from < i.from && c.to >= i.to || c.to > i.to && c.from <= i.from) && u.next)
        return j.range(c.to, c.from);
    }
    return i;
  });
  return e.eq(l.selection) ? !1 : (t(Mi(l, e)), !0);
};
function ex(l, t) {
  let { state: e } = l, i = e.selection, s = e.selection.ranges.slice();
  for (let o of e.selection.ranges) {
    let u = e.doc.lineAt(o.head);
    if (t ? u.to < l.state.doc.length : u.from > 0)
      for (let c = o; ; ) {
        let h = l.moveVertically(c, t);
        if (h.head < u.from || h.head > u.to) {
          s.some((m) => m.head == h.head) || s.push(h);
          break;
        } else {
          if (h.head == c.head)
            break;
          c = h;
        }
      }
  }
  return s.length == i.ranges.length ? !1 : (l.dispatch(Mi(e, j.create(s, s.length - 1))), !0);
}
const DO = (l) => ex(l, !1), EO = (l) => ex(l, !0), RO = ({ state: l, dispatch: t }) => {
  let e = l.selection, i = null;
  return e.ranges.length > 1 ? i = j.create([e.main]) : e.main.empty || (i = j.create([j.cursor(e.main.head)])), i ? (t(Mi(l, i)), !0) : !1;
};
function To(l, t) {
  if (l.state.readOnly)
    return !1;
  let e = "delete.selection", { state: i } = l, s = i.changeByRange((o) => {
    let { from: u, to: c } = o;
    if (u == c) {
      let h = t(o);
      h < u ? (e = "delete.backward", h = au(l, h, !1)) : h > u && (e = "delete.forward", h = au(l, h, !0)), u = Math.min(u, h), c = Math.max(c, h);
    } else
      u = au(l, u, !1), c = au(l, c, !0);
    return u == c ? { range: o } : { changes: { from: u, to: c }, range: j.cursor(u, u < o.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (l.dispatch(i.update(s, {
    scrollIntoView: !0,
    userEvent: e,
    effects: e == "delete.selection" ? P.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function au(l, t, e) {
  if (l instanceof P)
    for (let i of l.state.facet(P.atomicRanges).map((s) => s(l)))
      i.between(t, t, (s, o) => {
        s < t && o > t && (t = e ? o : s);
      });
  return t;
}
const ix = (l, t, e) => To(l, (i) => {
  let s = i.from, { state: o } = l, u = o.doc.lineAt(s), c, h;
  if (e && !t && s > u.from && s < u.from + 200 && !/[^ \t]/.test(c = u.text.slice(0, s - u.from))) {
    if (c[c.length - 1] == "	")
      return s - 1;
    let m = Vs(c, o.tabSize), p = m % zu(o) || zu(o);
    for (let y = 0; y < p && c[c.length - 1 - y] == " "; y++)
      s--;
    h = s;
  } else
    h = me(u.text, s - u.from, t, t) + u.from, h == s && u.number != (t ? o.doc.lines : 1) ? h += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(u.text.slice(h - u.from, s - u.from)) && (h = me(u.text, h - u.from, !1, !1) + u.from);
  return h;
}), im = (l) => ix(l, !1, !0), nx = (l) => ix(l, !0, !1), lx = (l, t) => To(l, (e) => {
  let i = e.head, { state: s } = l, o = s.doc.lineAt(i), u = s.charCategorizer(i);
  for (let c = null; ; ) {
    if (i == (t ? o.to : o.from)) {
      i == e.head && o.number != (t ? s.doc.lines : 1) && (i += t ? 1 : -1);
      break;
    }
    let h = me(o.text, i - o.from, t) + o.from, m = o.text.slice(Math.min(i, h) - o.from, Math.max(i, h) - o.from), p = u(m);
    if (c != null && p != c)
      break;
    (m != " " || i != e.head) && (c = p), i = h;
  }
  return i;
}), sx = (l) => lx(l, !1), BO = (l) => lx(l, !0), NO = (l) => To(l, (t) => {
  let e = l.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
}), LO = (l) => To(l, (t) => {
  let e = l.moveToLineBoundary(t, !1).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), zO = (l) => To(l, (t) => {
  let e = l.moveToLineBoundary(t, !0).head;
  return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
}), HO = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let e = l.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: Et.of(["", ""]) },
    range: j.cursor(i.from)
  }));
  return t(l.update(e, { scrollIntoView: !0, userEvent: "input" })), !0;
}, _O = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let e = l.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == l.doc.length)
      return { range: i };
    let s = i.from, o = l.doc.lineAt(s), u = s == o.from ? s - 1 : me(o.text, s - o.from, !1) + o.from, c = s == o.to ? s + 1 : me(o.text, s - o.from, !0) + o.from;
    return {
      changes: { from: u, to: c, insert: l.doc.slice(s, c).append(l.doc.slice(u, s)) },
      range: j.cursor(c)
    };
  });
  return e.changes.empty ? !1 : (t(l.update(e, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function oc(l) {
  let t = [], e = -1;
  for (let i of l.selection.ranges) {
    let s = l.doc.lineAt(i.from), o = l.doc.lineAt(i.to);
    if (!i.empty && i.to == o.from && (o = l.doc.lineAt(i.to - 1)), e >= s.number) {
      let u = t[t.length - 1];
      u.to = o.to, u.ranges.push(i);
    } else
      t.push({ from: s.from, to: o.to, ranges: [i] });
    e = o.number + 1;
  }
  return t;
}
function rx(l, t, e) {
  if (l.readOnly)
    return !1;
  let i = [], s = [];
  for (let o of oc(l)) {
    if (e ? o.to == l.doc.length : o.from == 0)
      continue;
    let u = l.doc.lineAt(e ? o.to + 1 : o.from - 1), c = u.length + 1;
    if (e) {
      i.push({ from: o.to, to: u.to }, { from: o.from, insert: u.text + l.lineBreak });
      for (let h of o.ranges)
        s.push(j.range(Math.min(l.doc.length, h.anchor + c), Math.min(l.doc.length, h.head + c)));
    } else {
      i.push({ from: u.from, to: o.from }, { from: o.to, insert: l.lineBreak + u.text });
      for (let h of o.ranges)
        s.push(j.range(h.anchor - c, h.head - c));
    }
  }
  return i.length ? (t(l.update({
    changes: i,
    scrollIntoView: !0,
    selection: j.create(s, l.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const UO = ({ state: l, dispatch: t }) => rx(l, t, !1), VO = ({ state: l, dispatch: t }) => rx(l, t, !0);
function ox(l, t, e) {
  if (l.readOnly)
    return !1;
  let i = [];
  for (let o of oc(l))
    e ? i.push({ from: o.from, insert: l.doc.slice(o.from, o.to) + l.lineBreak }) : i.push({ from: o.to, insert: l.lineBreak + l.doc.slice(o.from, o.to) });
  let s = l.changes(i);
  return t(l.update({
    changes: s,
    selection: l.selection.map(s, e ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
const qO = ({ state: l, dispatch: t }) => ox(l, t, !1), jO = ({ state: l, dispatch: t }) => ox(l, t, !0), YO = (l) => {
  if (l.state.readOnly)
    return !1;
  let { state: t } = l, e = t.changes(oc(t).map(({ from: s, to: o }) => (s > 0 ? s-- : o < t.doc.length && o++, { from: s, to: o }))), i = qs(t.selection, (s) => {
    let o;
    if (l.lineWrapping) {
      let u = l.lineBlockAt(s.head), c = l.coordsAtPos(s.head, s.assoc || 1);
      c && (o = u.bottom + l.documentTop - c.bottom + l.defaultLineHeight / 2);
    }
    return l.moveVertically(s, !0, o);
  }).map(e);
  return l.dispatch({ changes: e, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function GO(l, t) {
  if (/\(\)|\[\]|\{\}/.test(l.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let e = Te(l).resolveInner(t), i = e.childBefore(t), s = e.childAfter(t), o;
  return i && s && i.to <= t && s.from >= t && (o = i.type.prop(Ot.closedBy)) && o.indexOf(s.name) > -1 && l.doc.lineAt(i.to).from == l.doc.lineAt(s.from).from && !/\S/.test(l.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const nm = /* @__PURE__ */ ax(!1), KO = /* @__PURE__ */ ax(!0);
function ax(l) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly)
      return !1;
    let i = t.changeByRange((s) => {
      let { from: o, to: u } = s, c = t.doc.lineAt(o), h = !l && o == u && GO(t, o);
      l && (o = u = (u <= c.to ? c : t.doc.lineAt(u)).to);
      let m = new ic(t, { simulateBreak: o, simulateDoubleBreak: !!h }), p = Em(m, o);
      for (p == null && (p = Vs(/^\s*/.exec(t.doc.lineAt(o).text)[0], t.tabSize)); u < c.to && /\s/.test(c.text[u - c.from]); )
        u++;
      h ? { from: o, to: u } = h : o > c.from && o < c.from + 100 && !/\S/.test(c.text.slice(0, o)) && (o = c.from);
      let y = ["", po(t, p)];
      return h && y.push(po(t, m.lineIndent(c.from, -1))), {
        changes: { from: o, to: u, insert: Et.of(y) },
        range: j.cursor(o + 1 + y[1].length)
      };
    });
    return e(t.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Lm(l, t) {
  let e = -1;
  return l.changeByRange((i) => {
    let s = [];
    for (let u = i.from; u <= i.to; ) {
      let c = l.doc.lineAt(u);
      c.number > e && (i.empty || i.to > c.from) && (t(c, s, i), e = c.number), u = c.to + 1;
    }
    let o = l.changes(s);
    return {
      changes: s,
      range: j.range(o.mapPos(i.anchor, 1), o.mapPos(i.head, 1))
    };
  });
}
const XO = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let e = /* @__PURE__ */ Object.create(null), i = new ic(l, { overrideIndentation: (o) => {
    let u = e[o];
    return u ?? -1;
  } }), s = Lm(l, (o, u, c) => {
    let h = Em(i, o.from);
    if (h == null)
      return;
    /\S/.test(o.text) || (h = 0);
    let m = /^\s*/.exec(o.text)[0], p = po(l, h);
    (m != p || c.from < o.from + m.length) && (e[o.from] = h, u.push({ from: o.from, to: o.from + m.length, insert: p }));
  });
  return s.changes.empty || t(l.update(s, { userEvent: "indent" })), !0;
}, ux = ({ state: l, dispatch: t }) => l.readOnly ? !1 : (t(l.update(Lm(l, (e, i) => {
  i.push({ from: e.from, insert: l.facet(ec) });
}), { userEvent: "input.indent" })), !0), cx = ({ state: l, dispatch: t }) => l.readOnly ? !1 : (t(l.update(Lm(l, (e, i) => {
  let s = /^\s*/.exec(e.text)[0];
  if (!s)
    return;
  let o = Vs(s, l.tabSize), u = 0, c = po(l, Math.max(0, o - zu(l)));
  for (; u < s.length && u < c.length && s.charCodeAt(u) == c.charCodeAt(u); )
    u++;
  i.push({ from: e.from + u, to: e.from + s.length, insert: c.slice(u) });
}), { userEvent: "delete.dedent" })), !0), WO = (l) => (l.setTabFocusMode(), !0), QO = [
  { key: "Ctrl-b", run: VS, shift: ZS, preventDefault: !0 },
  { key: "Ctrl-f", run: qS, shift: JS },
  { key: "Ctrl-p", run: GS, shift: IS },
  { key: "Ctrl-n", run: KS, shift: $S },
  { key: "Ctrl-a", run: hO, shift: CO },
  { key: "Ctrl-e", run: dO, shift: kO },
  { key: "Ctrl-d", run: nx },
  { key: "Ctrl-h", run: im },
  { key: "Ctrl-k", run: NO },
  { key: "Ctrl-Alt-h", run: sx },
  { key: "Ctrl-o", run: HO },
  { key: "Ctrl-t", run: _O },
  { key: "Ctrl-v", run: em }
], ZO = /* @__PURE__ */ [
  { key: "ArrowLeft", run: VS, shift: ZS, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: nO, shift: gO, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: cO, shift: wO, preventDefault: !0 },
  { key: "ArrowRight", run: qS, shift: JS, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: lO, shift: yO, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: fO, shift: AO, preventDefault: !0 },
  { key: "ArrowUp", run: GS, shift: IS, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: cv, shift: hv },
  { mac: "Ctrl-ArrowUp", run: ov, shift: av },
  { key: "ArrowDown", run: KS, shift: $S, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: fv, shift: dv },
  { mac: "Ctrl-ArrowDown", run: em, shift: uv },
  { key: "PageUp", run: ov, shift: av },
  { key: "PageDown", run: em, shift: uv },
  { key: "Home", run: uO, shift: xO, preventDefault: !0 },
  { key: "Mod-Home", run: cv, shift: hv },
  { key: "End", run: aO, shift: SO, preventDefault: !0 },
  { key: "Mod-End", run: fv, shift: dv },
  { key: "Enter", run: nm, shift: nm },
  { key: "Mod-a", run: MO },
  { key: "Backspace", run: im, shift: im, preventDefault: !0 },
  { key: "Delete", run: nx, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: sx, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: BO, preventDefault: !0 },
  { mac: "Mod-Backspace", run: LO, preventDefault: !0 },
  { mac: "Mod-Delete", run: zO, preventDefault: !0 }
].concat(/* @__PURE__ */ QO.map((l) => ({ mac: l.key, run: l.run, shift: l.shift }))), JO = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: rO, shift: vO },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: oO, shift: bO },
  { key: "Alt-ArrowUp", run: UO },
  { key: "Shift-Alt-ArrowUp", run: qO },
  { key: "Alt-ArrowDown", run: VO },
  { key: "Shift-Alt-ArrowDown", run: jO },
  { key: "Mod-Alt-ArrowUp", run: DO },
  { key: "Mod-Alt-ArrowDown", run: EO },
  { key: "Escape", run: RO },
  { key: "Mod-Enter", run: KO },
  { key: "Alt-l", mac: "Ctrl-l", run: TO },
  { key: "Mod-i", run: OO, preventDefault: !0 },
  { key: "Mod-[", run: cx },
  { key: "Mod-]", run: ux },
  { key: "Mod-Alt-\\", run: XO },
  { key: "Shift-Mod-k", run: YO },
  { key: "Shift-Mod-\\", run: pO },
  { key: "Mod-/", run: UT },
  { key: "Alt-A", run: qT },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: WO }
].concat(ZO), FO = { key: "Tab", run: ux, shift: cx }, mv = typeof String.prototype.normalize == "function" ? (l) => l.normalize("NFKD") : (l) => l;
class _s {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(t, e, i = 0, s = t.length, o, u) {
    this.test = u, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(i, s), this.bufferStart = i, this.normalize = o ? (c) => o(mv(c)) : mv, this.query = this.normalize(e);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Ve(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let t = this.peek();
      if (t < 0)
        return this.done = !0, this;
      let e = am(t), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Vi(t);
      let s = this.normalize(e);
      if (s.length)
        for (let o = 0, u = i; ; o++) {
          let c = s.charCodeAt(o), h = this.match(c, u, this.bufferPos + this.bufferStart);
          if (o == s.length - 1) {
            if (h)
              return this.value = h, this;
            break;
          }
          u == i && o < e.length && e.charCodeAt(o) == c && u++;
        }
    }
  }
  match(t, e, i) {
    let s = null;
    for (let o = 0; o < this.matches.length; o += 2) {
      let u = this.matches[o], c = !1;
      this.query.charCodeAt(u) == t && (u == this.query.length - 1 ? s = { from: this.matches[o + 1], to: i } : (this.matches[o]++, c = !0)), c || (this.matches.splice(o, 2), o -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? s = { from: e, to: i } : this.matches.push(1, e)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (_s.prototype[Symbol.iterator] = function() {
  return this;
});
const fx = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, zm = "gm" + (/x/.unicode == null ? "" : "u");
class hx {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(t, e, i, s = 0, o = t.length) {
    if (this.text = t, this.to = o, this.curLine = "", this.done = !1, this.value = fx, /\\[sWDnr]|\n|\r|\[\^/.test(e))
      return new dx(t, e, i, s, o);
    this.re = new RegExp(e, zm + (i?.ignoreCase ? "i" : "")), this.test = i?.test, this.iter = t.iter();
    let u = t.lineAt(s);
    this.curLineStart = u.from, this.matchPos = Vu(t, s), this.getLine(this.curLineStart);
  }
  getLine(t) {
    this.iter.next(t), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let t = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = t;
      let e = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (e) {
        let i = this.curLineStart + e.index, s = i + e[0].length;
        if (this.matchPos = Vu(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, e)))
          return this.value = { from: i, to: s, match: e }, this;
        t = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), t = 0;
      else
        return this.done = !0, this;
    }
  }
}
const nd = /* @__PURE__ */ new WeakMap();
class Ds {
  constructor(t, e) {
    this.from = t, this.text = e;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(t, e, i) {
    let s = nd.get(t);
    if (!s || s.from >= i || s.to <= e) {
      let c = new Ds(e, t.sliceString(e, i));
      return nd.set(t, c), c;
    }
    if (s.from == e && s.to == i)
      return s;
    let { text: o, from: u } = s;
    return u > e && (o = t.sliceString(e, u) + o, u = e), s.to < i && (o += t.sliceString(s.to, i)), nd.set(t, new Ds(u, o)), new Ds(e, o.slice(e - u, i - u));
  }
}
class dx {
  constructor(t, e, i, s, o) {
    this.text = t, this.to = o, this.done = !1, this.value = fx, this.matchPos = Vu(t, s), this.re = new RegExp(e, zm + (i?.ignoreCase ? "i" : "")), this.test = i?.test, this.flat = Ds.get(t, s, this.chunkEnd(
      s + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(t) {
    return t >= this.to ? this.to : this.text.lineAt(t).to;
  }
  next() {
    for (; ; ) {
      let t = this.re.lastIndex = this.matchPos - this.flat.from, e = this.re.exec(this.flat.text);
      if (e && !e[0] && e.index == t && (this.re.lastIndex = t + 1, e = this.re.exec(this.flat.text)), e) {
        let i = this.flat.from + e.index, s = i + e[0].length;
        if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, e)))
          return this.value = { from: i, to: s, match: e }, this.matchPos = Vu(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Ds.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (hx.prototype[Symbol.iterator] = dx.prototype[Symbol.iterator] = function() {
  return this;
});
function PO(l) {
  try {
    return new RegExp(l, zm), !0;
  } catch {
    return !1;
  }
}
function Vu(l, t) {
  if (t >= l.length)
    return t;
  let e = l.lineAt(t), i;
  for (; t < e.to && (i = e.text.charCodeAt(t - e.from)) >= 56320 && i < 57344; )
    t++;
  return t;
}
const IO = (l) => {
  let { state: t } = l, e = String(t.doc.lineAt(l.state.selection.main.head).number), { close: i, result: s } = mM(l, {
    label: t.phrase("Go to line"),
    input: { type: "text", name: "line", value: e },
    focus: !0,
    submitLabel: t.phrase("go")
  });
  return s.then((o) => {
    let u = o && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(o.elements.line.value);
    if (!u) {
      l.dispatch({ effects: i });
      return;
    }
    let c = t.doc.lineAt(t.selection.main.head), [, h, m, p, y] = u, v = p ? +p.slice(1) : 0, S = m ? +m : c.number;
    if (m && y) {
      let M = S / 100;
      h && (M = M * (h == "-" ? -1 : 1) + c.number / t.doc.lines), S = Math.round(t.doc.lines * M);
    } else m && h && (S = S * (h == "-" ? -1 : 1) + c.number);
    let w = t.doc.line(Math.max(1, Math.min(t.doc.lines, S))), A = j.cursor(w.from + Math.max(0, Math.min(v, w.length)));
    l.dispatch({
      effects: [i, P.scrollIntoView(A.from, { y: "center" })],
      selection: A
    });
  }), !0;
}, $O = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, tD = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, $O, {
      highlightWordAroundCursor: (t, e) => t || e,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function eD(l) {
  return [rD, sD];
}
const iD = /* @__PURE__ */ ut.mark({ class: "cm-selectionMatch" }), nD = /* @__PURE__ */ ut.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function pv(l, t, e, i) {
  return (e == 0 || l(t.sliceDoc(e - 1, e)) != Wt.Word) && (i == t.doc.length || l(t.sliceDoc(i, i + 1)) != Wt.Word);
}
function lD(l, t, e, i) {
  return l(t.sliceDoc(e, e + 1)) == Wt.Word && l(t.sliceDoc(i - 1, i)) == Wt.Word;
}
const sD = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.decorations = this.getDeco(l);
  }
  update(l) {
    (l.selectionSet || l.docChanged || l.viewportChanged) && (this.decorations = this.getDeco(l.view));
  }
  getDeco(l) {
    let t = l.state.facet(tD), { state: e } = l, i = e.selection;
    if (i.ranges.length > 1)
      return ut.none;
    let s = i.main, o, u = null;
    if (s.empty) {
      if (!t.highlightWordAroundCursor)
        return ut.none;
      let h = e.wordAt(s.head);
      if (!h)
        return ut.none;
      u = e.charCategorizer(s.head), o = e.sliceDoc(h.from, h.to);
    } else {
      let h = s.to - s.from;
      if (h < t.minSelectionLength || h > 200)
        return ut.none;
      if (t.wholeWords) {
        if (o = e.sliceDoc(s.from, s.to), u = e.charCategorizer(s.head), !(pv(u, e, s.from, s.to) && lD(u, e, s.from, s.to)))
          return ut.none;
      } else if (o = e.sliceDoc(s.from, s.to), !o)
        return ut.none;
    }
    let c = [];
    for (let h of l.visibleRanges) {
      let m = new _s(e.doc, o, h.from, h.to);
      for (; !m.next().done; ) {
        let { from: p, to: y } = m.value;
        if ((!u || pv(u, e, p, y)) && (s.empty && p <= s.from && y >= s.to ? c.push(nD.range(p, y)) : (p >= s.to || y <= s.from) && c.push(iD.range(p, y)), c.length > t.maxMatches))
          return ut.none;
      }
    }
    return ut.set(c);
  }
}, {
  decorations: (l) => l.decorations
}), rD = /* @__PURE__ */ P.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), oD = ({ state: l, dispatch: t }) => {
  let { selection: e } = l, i = j.create(e.ranges.map((s) => l.wordAt(s.head) || j.cursor(s.head)), e.mainIndex);
  return i.eq(e) ? !1 : (t(l.update({ selection: i })), !0);
};
function aD(l, t) {
  let { main: e, ranges: i } = l.selection, s = l.wordAt(e.head), o = s && s.from == e.from && s.to == e.to;
  for (let u = !1, c = new _s(l.doc, t, i[i.length - 1].to); ; )
    if (c.next(), c.done) {
      if (u)
        return null;
      c = new _s(l.doc, t, 0, Math.max(0, i[i.length - 1].from - 1)), u = !0;
    } else {
      if (u && i.some((h) => h.from == c.value.from))
        continue;
      if (o) {
        let h = l.wordAt(c.value.from);
        if (!h || h.from != c.value.from || h.to != c.value.to)
          continue;
      }
      return c.value;
    }
}
const uD = ({ state: l, dispatch: t }) => {
  let { ranges: e } = l.selection;
  if (e.some((o) => o.from === o.to))
    return oD({ state: l, dispatch: t });
  let i = l.sliceDoc(e[0].from, e[0].to);
  if (l.selection.ranges.some((o) => l.sliceDoc(o.from, o.to) != i))
    return !1;
  let s = aD(l, i);
  return s ? (t(l.update({
    selection: l.selection.addRange(j.range(s.from, s.to), !1),
    effects: P.scrollIntoView(s.to)
  })), !0) : !1;
}, js = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (t) => new AD(t),
      scrollToMatch: (t) => P.scrollIntoView(t)
    });
  }
});
class mx {
  /**
  Create a query object.
  */
  constructor(t) {
    this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || PO(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord, this.test = t.test;
  }
  /**
  @internal
  */
  unquote(t) {
    return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(t) {
    return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord && this.test == t.test;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new pD(this) : new hD(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(t, e = 0, i) {
    let s = t.doc ? t : Tt.create({ doc: t });
    return i == null && (i = s.doc.length), this.regexp ? xs(this, s, e, i) : Ss(this, s, e, i);
  }
}
class px {
  constructor(t) {
    this.spec = t;
  }
}
function cD(l, t, e) {
  return (i, s, o, u) => {
    if (e && !e(i, s, o, u))
      return !1;
    let c = i >= u && s <= u + o.length ? o.slice(i - u, s - u) : t.doc.sliceString(i, s);
    return l(c, t, i, s);
  };
}
function Ss(l, t, e, i) {
  let s;
  return l.wholeWord && (s = fD(t.doc, t.charCategorizer(t.selection.main.head))), l.test && (s = cD(l.test, t, s)), new _s(t.doc, l.unquoted, e, i, l.caseSensitive ? void 0 : (o) => o.toLowerCase(), s);
}
function fD(l, t) {
  return (e, i, s, o) => ((o > e || o + s.length < i) && (o = Math.max(0, e - 2), s = l.sliceString(o, Math.min(l.length, i + 2))), (t(qu(s, e - o)) != Wt.Word || t(ju(s, e - o)) != Wt.Word) && (t(ju(s, i - o)) != Wt.Word || t(qu(s, i - o)) != Wt.Word));
}
class hD extends px {
  constructor(t) {
    super(t);
  }
  nextMatch(t, e, i) {
    let s = Ss(this.spec, t, i, t.doc.length).nextOverlapping();
    if (s.done) {
      let o = Math.min(t.doc.length, e + this.spec.unquoted.length);
      s = Ss(this.spec, t, 0, o).nextOverlapping();
    }
    return s.done || s.value.from == e && s.value.to == i ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(t, e, i) {
    for (let s = i; ; ) {
      let o = Math.max(e, s - 1e4 - this.spec.unquoted.length), u = Ss(this.spec, t, o, s), c = null;
      for (; !u.nextOverlapping().done; )
        c = u.value;
      if (c)
        return c;
      if (o == e)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(t, e, i) {
    let s = this.prevMatchInRange(t, 0, e);
    return s || (s = this.prevMatchInRange(t, Math.max(0, i - this.spec.unquoted.length), t.doc.length)), s && (s.from != e || s.to != i) ? s : null;
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(t, e) {
    let i = Ss(this.spec, t, 0, t.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= e)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(t, e, i, s) {
    let o = Ss(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, t.doc.length));
    for (; !o.next().done; )
      s(o.value.from, o.value.to);
  }
}
function dD(l, t, e) {
  return (i, s, o) => (!e || e(i, s, o)) && l(o[0], t, i, s);
}
function xs(l, t, e, i) {
  let s;
  return l.wholeWord && (s = mD(t.charCategorizer(t.selection.main.head))), l.test && (s = dD(l.test, t, s)), new hx(t.doc, l.search, { ignoreCase: !l.caseSensitive, test: s }, e, i);
}
function qu(l, t) {
  return l.slice(me(l, t, !1), t);
}
function ju(l, t) {
  return l.slice(t, me(l, t));
}
function mD(l) {
  return (t, e, i) => !i[0].length || (l(qu(i.input, i.index)) != Wt.Word || l(ju(i.input, i.index)) != Wt.Word) && (l(ju(i.input, i.index + i[0].length)) != Wt.Word || l(qu(i.input, i.index + i[0].length)) != Wt.Word);
}
class pD extends px {
  nextMatch(t, e, i) {
    let s = xs(this.spec, t, i, t.doc.length).next();
    return s.done && (s = xs(this.spec, t, 0, e).next()), s.done ? null : s.value;
  }
  prevMatchInRange(t, e, i) {
    for (let s = 1; ; s++) {
      let o = Math.max(
        e,
        i - s * 1e4
        /* FindPrev.ChunkSize */
      ), u = xs(this.spec, t, o, i), c = null;
      for (; !u.next().done; )
        c = u.value;
      if (c && (o == e || c.from > o + 10))
        return c;
      if (o == e)
        return null;
    }
  }
  prevMatch(t, e, i) {
    return this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, i, t.doc.length);
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (e, i) => {
      if (i == "&")
        return t.match[0];
      if (i == "$")
        return "$";
      for (let s = i.length; s > 0; s--) {
        let o = +i.slice(0, s);
        if (o > 0 && o < t.match.length)
          return t.match[o] + i.slice(s);
      }
      return e;
    });
  }
  matchAll(t, e) {
    let i = xs(this.spec, t, 0, t.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= e)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(t, e, i, s) {
    let o = xs(this.spec, t, Math.max(
      0,
      e - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, t.doc.length));
    for (; !o.next().done; )
      s(o.value.from, o.value.to);
  }
}
const go = /* @__PURE__ */ vt.define(), Hm = /* @__PURE__ */ vt.define(), Wn = /* @__PURE__ */ Oe.define({
  create(l) {
    return new ld(lm(l).create(), null);
  },
  update(l, t) {
    for (let e of t.effects)
      e.is(go) ? l = new ld(e.value.create(), l.panel) : e.is(Hm) && (l = new ld(l.query, e.value ? _m : null));
    return l;
  },
  provide: (l) => fo.from(l, (t) => t.panel)
});
class ld {
  constructor(t, e) {
    this.query = t, this.panel = e;
  }
}
const gD = /* @__PURE__ */ ut.mark({ class: "cm-searchMatch" }), yD = /* @__PURE__ */ ut.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), vD = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.view = l, this.decorations = this.highlight(l.state.field(Wn));
  }
  update(l) {
    let t = l.state.field(Wn);
    (t != l.startState.field(Wn) || l.docChanged || l.selectionSet || l.viewportChanged) && (this.decorations = this.highlight(t));
  }
  highlight({ query: l, panel: t }) {
    if (!t || !l.spec.valid)
      return ut.none;
    let { view: e } = this, i = new Wi();
    for (let s = 0, o = e.visibleRanges, u = o.length; s < u; s++) {
      let { from: c, to: h } = o[s];
      for (; s < u - 1 && h > o[s + 1].from - 500; )
        h = o[++s].to;
      l.highlight(e.state, c, h, (m, p) => {
        let y = e.state.selection.ranges.some((v) => v.from == m && v.to == p);
        i.add(m, p, y ? yD : gD);
      });
    }
    return i.finish();
  }
}, {
  decorations: (l) => l.decorations
});
function Oo(l) {
  return (t) => {
    let e = t.state.field(Wn, !1);
    return e && e.query.spec.valid ? l(t, e) : vx(t);
  };
}
const Yu = /* @__PURE__ */ Oo((l, { query: t }) => {
  let { to: e } = l.state.selection.main, i = t.nextMatch(l.state, e, e);
  if (!i)
    return !1;
  let s = j.single(i.from, i.to), o = l.state.facet(js);
  return l.dispatch({
    selection: s,
    effects: [Um(l, i), o.scrollToMatch(s.main, l)],
    userEvent: "select.search"
  }), yx(l), !0;
}), Gu = /* @__PURE__ */ Oo((l, { query: t }) => {
  let { state: e } = l, { from: i } = e.selection.main, s = t.prevMatch(e, i, i);
  if (!s)
    return !1;
  let o = j.single(s.from, s.to), u = l.state.facet(js);
  return l.dispatch({
    selection: o,
    effects: [Um(l, s), u.scrollToMatch(o.main, l)],
    userEvent: "select.search"
  }), yx(l), !0;
}), bD = /* @__PURE__ */ Oo((l, { query: t }) => {
  let e = t.matchAll(l.state, 1e3);
  return !e || !e.length ? !1 : (l.dispatch({
    selection: j.create(e.map((i) => j.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), SD = ({ state: l, dispatch: t }) => {
  let e = l.selection;
  if (e.ranges.length > 1 || e.main.empty)
    return !1;
  let { from: i, to: s } = e.main, o = [], u = 0;
  for (let c = new _s(l.doc, l.sliceDoc(i, s)); !c.next().done; ) {
    if (o.length > 1e3)
      return !1;
    c.value.from == i && (u = o.length), o.push(j.range(c.value.from, c.value.to));
  }
  return t(l.update({
    selection: j.create(o, u),
    userEvent: "select.search.matches"
  })), !0;
}, gv = /* @__PURE__ */ Oo((l, { query: t }) => {
  let { state: e } = l, { from: i, to: s } = e.selection.main;
  if (e.readOnly)
    return !1;
  let o = t.nextMatch(e, i, i);
  if (!o)
    return !1;
  let u = o, c = [], h, m, p = [];
  u.from == i && u.to == s && (m = e.toText(t.getReplacement(u)), c.push({ from: u.from, to: u.to, insert: m }), u = t.nextMatch(e, u.from, u.to), p.push(P.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(i).number) + ".")));
  let y = l.state.changes(c);
  return u && (h = j.single(u.from, u.to).map(y), p.push(Um(l, u)), p.push(e.facet(js).scrollToMatch(h.main, l))), l.dispatch({
    changes: y,
    selection: h,
    effects: p,
    userEvent: "input.replace"
  }), !0;
}), xD = /* @__PURE__ */ Oo((l, { query: t }) => {
  if (l.state.readOnly)
    return !1;
  let e = t.matchAll(l.state, 1e9).map((s) => {
    let { from: o, to: u } = s;
    return { from: o, to: u, insert: t.getReplacement(s) };
  });
  if (!e.length)
    return !1;
  let i = l.state.phrase("replaced $ matches", e.length) + ".";
  return l.dispatch({
    changes: e,
    effects: P.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function _m(l) {
  return l.state.facet(js).createPanel(l);
}
function lm(l, t) {
  var e, i, s, o, u;
  let c = l.selection.main, h = c.empty || c.to > c.from + 100 ? "" : l.sliceDoc(c.from, c.to);
  if (t && !h)
    return t;
  let m = l.facet(js);
  return new mx({
    search: ((e = t?.literal) !== null && e !== void 0 ? e : m.literal) ? h : h.replace(/\n/g, "\\n"),
    caseSensitive: (i = t?.caseSensitive) !== null && i !== void 0 ? i : m.caseSensitive,
    literal: (s = t?.literal) !== null && s !== void 0 ? s : m.literal,
    regexp: (o = t?.regexp) !== null && o !== void 0 ? o : m.regexp,
    wholeWord: (u = t?.wholeWord) !== null && u !== void 0 ? u : m.wholeWord
  });
}
function gx(l) {
  let t = Mm(l, _m);
  return t && t.dom.querySelector("[main-field]");
}
function yx(l) {
  let t = gx(l);
  t && t == l.root.activeElement && t.select();
}
const vx = (l) => {
  let t = l.state.field(Wn, !1);
  if (t && t.panel) {
    let e = gx(l);
    if (e && e != l.root.activeElement) {
      let i = lm(l.state, t.query.spec);
      i.valid && l.dispatch({ effects: go.of(i) }), e.focus(), e.select();
    }
  } else
    l.dispatch({ effects: [
      Hm.of(!0),
      t ? go.of(lm(l.state, t.query.spec)) : vt.appendConfig.of(kD)
    ] });
  return !0;
}, bx = (l) => {
  let t = l.state.field(Wn, !1);
  if (!t || !t.panel)
    return !1;
  let e = Mm(l, _m);
  return e && e.dom.contains(l.root.activeElement) && l.focus(), l.dispatch({ effects: Hm.of(!1) }), !0;
}, wD = [
  { key: "Mod-f", run: vx, scope: "editor search-panel" },
  { key: "F3", run: Yu, shift: Gu, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Yu, shift: Gu, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: bx, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: SD },
  { key: "Mod-Alt-g", run: IO },
  { key: "Mod-d", run: uD, preventDefault: !0 }
];
class AD {
  constructor(t) {
    this.view = t;
    let e = this.query = t.state.field(Wn).query.spec;
    this.commit = this.commit.bind(this), this.searchField = Ut("input", {
      value: e.search,
      placeholder: ti(t, "Find"),
      "aria-label": ti(t, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = Ut("input", {
      value: e.replace,
      placeholder: ti(t, "Replace"),
      "aria-label": ti(t, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = Ut("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: e.caseSensitive,
      onchange: this.commit
    }), this.reField = Ut("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: e.regexp,
      onchange: this.commit
    }), this.wordField = Ut("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: e.wholeWord,
      onchange: this.commit
    });
    function i(s, o, u) {
      return Ut("button", { class: "cm-button", name: s, onclick: o, type: "button" }, u);
    }
    this.dom = Ut("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      i("next", () => Yu(t), [ti(t, "next")]),
      i("prev", () => Gu(t), [ti(t, "previous")]),
      i("select", () => bD(t), [ti(t, "all")]),
      Ut("label", null, [this.caseField, ti(t, "match case")]),
      Ut("label", null, [this.reField, ti(t, "regexp")]),
      Ut("label", null, [this.wordField, ti(t, "by word")]),
      ...t.state.readOnly ? [] : [
        Ut("br"),
        this.replaceField,
        i("replace", () => gv(t), [ti(t, "replace")]),
        i("replaceAll", () => xD(t), [ti(t, "replace all")])
      ],
      Ut("button", {
        name: "close",
        onclick: () => bx(t),
        "aria-label": ti(t, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let t = new mx({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    t.eq(this.query) || (this.query = t, this.view.dispatch({ effects: go.of(t) }));
  }
  keydown(t) {
    Ck(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? Gu : Yu)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), gv(this.view));
  }
  update(t) {
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(go) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(t) {
    this.query = t, this.searchField.value = t.search, this.replaceField.value = t.replace, this.caseField.checked = t.caseSensitive, this.reField.checked = t.regexp, this.wordField.checked = t.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(js).top;
  }
}
function ti(l, t) {
  return l.state.phrase(t);
}
const uu = 30, cu = /[\s\.,:;?!]/;
function Um(l, { from: t, to: e }) {
  let i = l.state.doc.lineAt(t), s = l.state.doc.lineAt(e).to, o = Math.max(i.from, t - uu), u = Math.min(s, e + uu), c = l.state.sliceDoc(o, u);
  if (o != i.from) {
    for (let h = 0; h < uu; h++)
      if (!cu.test(c[h + 1]) && cu.test(c[h])) {
        c = c.slice(h);
        break;
      }
  }
  if (u != s) {
    for (let h = c.length - 1; h > c.length - uu; h--)
      if (!cu.test(c[h - 1]) && cu.test(c[h])) {
        c = c.slice(0, h);
        break;
      }
  }
  return P.announce.of(`${l.state.phrase("current match")}. ${c} ${l.state.phrase("on line")} ${i.number}.`);
}
const CD = /* @__PURE__ */ P.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), kD = [
  Wn,
  /* @__PURE__ */ tl.low(vD),
  CD
];
class Sx {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(t, e, i, s) {
    this.state = t, this.pos = e, this.explicit = i, this.view = s, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(t) {
    let e = Te(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; )
      e = e.parent;
    return e ? {
      from: e.from,
      to: this.pos,
      text: this.state.sliceDoc(e.from, this.pos),
      type: e.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), s = e.text.slice(i - e.from, this.pos - e.from), o = s.search(xx(t, !1));
    return o < 0 ? null : { from: i + o, to: this.pos, text: s.slice(o) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(t, e, i) {
    t == "abort" && this.abortListeners && (this.abortListeners.push(e), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function yv(l) {
  let t = Object.keys(l).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function MD(l) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of l) {
    t[s[0]] = !0;
    for (let o = 1; o < s.length; o++)
      e[s[o]] = !0;
  }
  let i = yv(t) + yv(e) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function TD(l) {
  let t = l.map((s) => typeof s == "string" ? { label: s } : s), [e, i] = t.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : MD(t);
  return (s) => {
    let o = s.matchBefore(i);
    return o || s.explicit ? { from: o ? o.from : s.pos, options: t, validFor: e } : null;
  };
}
class vv {
  constructor(t, e, i, s) {
    this.completion = t, this.source = e, this.match = i, this.score = s;
  }
}
function Dl(l) {
  return l.selection.main.from;
}
function xx(l, t) {
  var e;
  let { source: i } = l, s = t && i[0] != "^", o = i[i.length - 1] != "$";
  return !s && !o ? l : new RegExp(`${s ? "^" : ""}(?:${i})${o ? "$" : ""}`, (e = l.flags) !== null && e !== void 0 ? e : l.ignoreCase ? "i" : "");
}
const wx = /* @__PURE__ */ Qi.define();
function OD(l, t, e, i) {
  let { main: s } = l.selection, o = e - s.from, u = i - s.from;
  return {
    ...l.changeByRange((c) => {
      if (c != s && e != i && l.sliceDoc(c.from + o, c.from + u) != l.sliceDoc(e, i))
        return { range: c };
      let h = l.toText(t);
      return {
        changes: { from: c.from + o, to: i == s.from ? c.to : c.from + u, insert: h },
        range: j.cursor(c.from + o + h.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
const bv = /* @__PURE__ */ new WeakMap();
function DD(l) {
  if (!Array.isArray(l))
    return l;
  let t = bv.get(l);
  return t || bv.set(l, t = TD(l)), t;
}
const Ku = /* @__PURE__ */ vt.define(), yo = /* @__PURE__ */ vt.define();
class ED {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let i = Ve(t, e), s = Vi(i);
      this.chars.push(i);
      let o = t.slice(e, e + s), u = o.toUpperCase();
      this.folded.push(Ve(u == o ? o.toLowerCase() : u, 0)), e += s;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(t) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (t.length < this.pattern.length)
      return null;
    let { chars: e, folded: i, any: s, precise: o, byWord: u } = this;
    if (e.length == 1) {
      let H = Ve(t, 0), z = Vi(H), Q = z == t.length ? 0 : -100;
      if (H != e[0]) if (H == i[0])
        Q += -200;
      else
        return null;
      return this.ret(Q, [0, z]);
    }
    let c = t.indexOf(this.pattern);
    if (c == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let h = e.length, m = 0;
    if (c < 0) {
      for (let H = 0, z = Math.min(t.length, 200); H < z && m < h; ) {
        let Q = Ve(t, H);
        (Q == e[m] || Q == i[m]) && (s[m++] = H), H += Vi(Q);
      }
      if (m < h)
        return null;
    }
    let p = 0, y = 0, v = !1, S = 0, w = -1, A = -1, M = /[a-z]/.test(t), O = !0;
    for (let H = 0, z = Math.min(t.length, 200), Q = 0; H < z && y < h; ) {
      let _ = Ve(t, H);
      c < 0 && (p < h && _ == e[p] && (o[p++] = H), S < h && (_ == e[S] || _ == i[S] ? (S == 0 && (w = H), A = H + 1, S++) : S = 0));
      let K, X = _ < 255 ? _ >= 48 && _ <= 57 || _ >= 97 && _ <= 122 ? 2 : _ >= 65 && _ <= 90 ? 1 : 0 : (K = am(_)) != K.toLowerCase() ? 1 : K != K.toUpperCase() ? 2 : 0;
      (!H || X == 1 && M || Q == 0 && X != 0) && (e[y] == _ || i[y] == _ && (v = !0) ? u[y++] = H : u.length && (O = !1)), Q = X, H += Vi(_);
    }
    return y == h && u[0] == 0 && O ? this.result(-100 + (v ? -200 : 0), u, t) : S == h && w == 0 ? this.ret(-200 - t.length + (A == t.length ? 0 : -100), [0, A]) : c > -1 ? this.ret(-700 - t.length, [c, c + this.pattern.length]) : S == h ? this.ret(-900 - t.length, [w, A]) : y == h ? this.result(-100 + (v ? -200 : 0) + -700 + (O ? 0 : -1100), u, t) : e.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, t);
  }
  result(t, e, i) {
    let s = [], o = 0;
    for (let u of e) {
      let c = u + (this.astral ? Vi(Ve(i, u)) : 1);
      o && s[o - 1] == u ? s[o - 1] = c : (s[o++] = u, s[o++] = c);
    }
    return this.ret(t - i.length, s);
  }
}
class RD {
  constructor(t) {
    this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
  }
  match(t) {
    if (t.length < this.pattern.length)
      return null;
    let e = t.slice(0, this.pattern.length), i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, e.length], this.score = i + (t.length == this.pattern.length ? 0 : -100), this);
  }
}
const de = /* @__PURE__ */ tt.define({
  combine(l) {
    return Zi(l, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: BD,
      filterStrict: !1,
      compareCompletions: (t, e) => (t.sortText || t.label).localeCompare(e.sortText || e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => (i) => Sv(t(i), e(i)),
      optionClass: (t, e) => (i) => Sv(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    });
  }
});
function Sv(l, t) {
  return l ? t ? l + " " + t : l : t;
}
function BD(l, t, e, i, s, o) {
  let u = l.textDirection == jt.RTL, c = u, h = !1, m = "top", p, y, v = t.left - s.left, S = s.right - t.right, w = i.right - i.left, A = i.bottom - i.top;
  if (c && v < Math.min(w, S) ? c = !1 : !c && S < Math.min(w, v) && (c = !0), w <= (c ? v : S))
    p = Math.max(s.top, Math.min(e.top, s.bottom - A)) - t.top, y = Math.min(400, c ? v : S);
  else {
    h = !0, y = Math.min(
      400,
      (u ? t.right : s.right - t.left) - 30
      /* Info.Margin */
    );
    let H = s.bottom - t.bottom;
    H >= A || H > t.top ? p = e.bottom - t.top : (m = "bottom", p = t.bottom - e.top);
  }
  let M = (t.bottom - t.top) / o.offsetHeight, O = (t.right - t.left) / o.offsetWidth;
  return {
    style: `${m}: ${p / M}px; max-width: ${y / O}px`,
    class: "cm-completionInfo-" + (h ? u ? "left-narrow" : "right-narrow" : c ? "left" : "right")
  };
}
const Vm = /* @__PURE__ */ vt.define();
function ND(l) {
  let t = l.addToOptions.slice();
  return l.icons && t.push({
    render(e) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), t.push({
    render(e, i, s, o) {
      let u = document.createElement("span");
      u.className = "cm-completionLabel";
      let c = e.displayLabel || e.label, h = 0;
      for (let m = 0; m < o.length; ) {
        let p = o[m++], y = o[m++];
        p > h && u.appendChild(document.createTextNode(c.slice(h, p)));
        let v = u.appendChild(document.createElement("span"));
        v.appendChild(document.createTextNode(c.slice(p, y))), v.className = "cm-completionMatchedText", h = y;
      }
      return h < c.length && u.appendChild(document.createTextNode(c.slice(h))), u;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = e.detail, i;
    },
    position: 80
  }), t.sort((e, i) => e.position - i.position).map((e) => e.render);
}
function sd(l, t, e) {
  if (l <= e)
    return { from: 0, to: l };
  if (t < 0 && (t = 0), t <= l >> 1) {
    let s = Math.floor(t / e);
    return { from: s * e, to: (s + 1) * e };
  }
  let i = Math.floor((l - t) / e);
  return { from: l - (i + 1) * e, to: l - i * e };
}
class LD {
  constructor(t, e, i) {
    this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (h) => this.placeInfo(h),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = t.state.field(e), { options: o, selected: u } = s.open, c = t.state.facet(de);
    this.optionContent = ND(c), this.optionClass = c.optionClass, this.tooltipClass = c.tooltipClass, this.range = sd(o.length, u, c.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (h) => {
      let { options: m } = t.state.field(e).open;
      for (let p = h.target, y; p && p != this.dom; p = p.parentNode)
        if (p.nodeName == "LI" && (y = /-(\d+)$/.exec(p.id)) && +y[1] < m.length) {
          this.applyCompletion(t, m[+y[1]]), h.preventDefault();
          return;
        }
      if (h.target == this.list) {
        let p = this.list.classList.contains("cm-completionListIncompleteTop") && h.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && h.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        p != null && (t.dispatch({ effects: Vm.of(p) }), h.preventDefault());
      }
    }), this.dom.addEventListener("focusout", (h) => {
      let m = t.state.field(this.stateField, !1);
      m && m.tooltip && t.state.facet(de).closeOnBlur && h.relatedTarget != t.contentDOM && t.dispatch({ effects: yo.of(null) });
    }), this.showOptions(o, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t, e) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t, e, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t) {
    var e;
    let i = t.state.field(this.stateField), s = t.startState.field(this.stateField);
    if (this.updateTooltipClass(t.state), i != s) {
      let { options: o, selected: u, disabled: c } = i.open;
      (!s.open || s.open.options != o) && (this.range = sd(o.length, u, t.state.facet(de).maxRenderedOptions), this.showOptions(o, i.id)), this.updateSel(), c != ((e = s.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!c);
    }
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of e.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = sd(e.options.length, e.selected, this.view.state.facet(de).maxRenderedOptions), this.showOptions(e.options, t.id));
    let i = this.updateSelectedOption(e.selected);
    if (i) {
      this.destroyInfo();
      let { completion: s } = e.options[e.selected], { info: o } = s;
      if (!o)
        return;
      let u = typeof o == "string" ? document.createTextNode(o) : o(s);
      if (!u)
        return;
      "then" in u ? u.then((c) => {
        c && this.view.state.field(this.stateField, !1) == t && this.addInfoPane(c, s);
      }).catch((c) => Ye(this.view.state, c, "completion info")) : (this.addInfoPane(u, s), i.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", i.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), t.nodeType != null)
      i.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: s, destroy: o } = t;
      i.appendChild(s), this.infoDestroy = o || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != "LI" || !i.id ? s-- : s == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && (i.removeAttribute("aria-selected"), i.removeAttribute("aria-describedby"));
    return e && HD(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = t.getBoundingClientRect(), o = this.space;
    if (!o) {
      let u = this.dom.ownerDocument.documentElement;
      o = { left: 0, top: 0, right: u.clientWidth, bottom: u.clientHeight };
    }
    return s.top > Math.min(o.bottom, e.bottom) - 10 || s.bottom < Math.max(o.top, e.top) + 10 ? null : this.view.state.facet(de).positionInfo(this.view, e, s, i, o, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, i) {
    const s = document.createElement("ul");
    s.id = e, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (u) => {
      u.target == s && u.preventDefault();
    });
    let o = null;
    for (let u = i.from; u < i.to; u++) {
      let { completion: c, match: h } = t[u], { section: m } = c;
      if (m) {
        let v = typeof m == "string" ? m : m.name;
        if (v != o && (u > i.from || i.from == 0))
          if (o = v, typeof m != "string" && m.header)
            s.appendChild(m.header(m));
          else {
            let S = s.appendChild(document.createElement("completion-section"));
            S.textContent = v;
          }
      }
      const p = s.appendChild(document.createElement("li"));
      p.id = e + "-" + u, p.setAttribute("role", "option");
      let y = this.optionClass(c);
      y && (p.className = y);
      for (let v of this.optionContent) {
        let S = v(c, this.view.state, this.view, h);
        S && p.appendChild(S);
      }
    }
    return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < t.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function zD(l, t) {
  return (e) => new LD(e, l, t);
}
function HD(l, t) {
  let e = l.getBoundingClientRect(), i = t.getBoundingClientRect(), s = e.height / l.offsetHeight;
  i.top < e.top ? l.scrollTop -= (e.top - i.top) / s : i.bottom > e.bottom && (l.scrollTop += (i.bottom - e.bottom) / s);
}
function xv(l) {
  return (l.boost || 0) * 100 + (l.apply ? 10 : 0) + (l.info ? 5 : 0) + (l.type ? 1 : 0);
}
function _D(l, t) {
  let e = [], i = null, s = null, o = (p) => {
    e.push(p);
    let { section: y } = p.completion;
    if (y) {
      i || (i = []);
      let v = typeof y == "string" ? y : y.name;
      i.some((S) => S.name == v) || i.push(typeof y == "string" ? { name: v } : y);
    }
  }, u = t.facet(de);
  for (let p of l)
    if (p.hasResult()) {
      let y = p.result.getMatch;
      if (p.result.filter === !1)
        for (let v of p.result.options)
          o(new vv(v, p.source, y ? y(v) : [], 1e9 - e.length));
      else {
        let v = t.sliceDoc(p.from, p.to), S, w = u.filterStrict ? new RD(v) : new ED(v);
        for (let A of p.result.options)
          if (S = w.match(A.label)) {
            let M = A.displayLabel ? y ? y(A, S.matched) : [] : S.matched, O = S.score + (A.boost || 0);
            if (o(new vv(A, p.source, M, O)), typeof A.section == "object" && A.section.rank === "dynamic") {
              let { name: H } = A.section;
              s || (s = /* @__PURE__ */ Object.create(null)), s[H] = Math.max(O, s[H] || -1e9);
            }
          }
      }
    }
  if (i) {
    let p = /* @__PURE__ */ Object.create(null), y = 0, v = (S, w) => (S.rank === "dynamic" && w.rank === "dynamic" ? s[w.name] - s[S.name] : 0) || (typeof S.rank == "number" ? S.rank : 1e9) - (typeof w.rank == "number" ? w.rank : 1e9) || (S.name < w.name ? -1 : 1);
    for (let S of i.sort(v))
      y -= 1e5, p[S.name] = y;
    for (let S of e) {
      let { section: w } = S.completion;
      w && (S.score += p[typeof w == "string" ? w : w.name]);
    }
  }
  let c = [], h = null, m = u.compareCompletions;
  for (let p of e.sort((y, v) => v.score - y.score || m(y.completion, v.completion))) {
    let y = p.completion;
    !h || h.label != y.label || h.detail != y.detail || h.type != null && y.type != null && h.type != y.type || h.apply != y.apply || h.boost != y.boost ? c.push(p) : xv(p.completion) > xv(h) && (c[c.length - 1] = p), h = p.completion;
  }
  return c;
}
class Cs {
  constructor(t, e, i, s, o, u) {
    this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = s, this.selected = o, this.disabled = u;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new Cs(this.options, wv(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, i, s, o, u) {
    if (s && !u && t.some((m) => m.isPending))
      return s.setDisabled();
    let c = _D(t, e);
    if (!c.length)
      return s && t.some((m) => m.isPending) ? s.setDisabled() : null;
    let h = e.facet(de).selectOnOpen ? 0 : -1;
    if (s && s.selected != h && s.selected != -1) {
      let m = s.options[s.selected].completion;
      for (let p = 0; p < c.length; p++)
        if (c[p].completion == m) {
          h = p;
          break;
        }
    }
    return new Cs(c, wv(i, h), {
      pos: t.reduce((m, p) => p.hasResult() ? Math.min(m, p.from) : m, 1e8),
      create: GD,
      above: o.aboveCursor
    }, s ? s.timestamp : Date.now(), h, !1);
  }
  map(t) {
    return new Cs(this.options, this.attrs, { ...this.tooltip, pos: t.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Cs(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Xu {
  constructor(t, e, i) {
    this.active = t, this.id = e, this.open = i;
  }
  static start() {
    return new Xu(jD, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, i = e.facet(de), o = (i.override || e.languageDataAt("autocomplete", Dl(e)).map(DD)).map((h) => (this.active.find((p) => p.source == h) || new gi(
      h,
      this.active.some(
        (p) => p.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(t, i));
    o.length == this.active.length && o.every((h, m) => h == this.active[m]) && (o = this.active);
    let u = this.open, c = t.effects.some((h) => h.is(qm));
    u && t.docChanged && (u = u.map(t.changes)), t.selection || o.some((h) => h.hasResult() && t.changes.touchesRange(h.from, h.to)) || !UD(o, this.active) || c ? u = Cs.build(o, e, this.id, u, i, c) : u && u.disabled && !o.some((h) => h.isPending) && (u = null), !u && o.every((h) => !h.isPending) && o.some((h) => h.hasResult()) && (o = o.map((h) => h.hasResult() ? new gi(
      h.source,
      0
      /* State.Inactive */
    ) : h));
    for (let h of t.effects)
      h.is(Vm) && (u = u && u.setSelected(h.value, this.id));
    return o == this.active && u == this.open ? this : new Xu(o, this.id, u);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? VD : qD;
  }
}
function UD(l, t) {
  if (l == t)
    return !0;
  for (let e = 0, i = 0; ; ) {
    for (; e < l.length && !l[e].hasResult(); )
      e++;
    for (; i < t.length && !t[i].hasResult(); )
      i++;
    let s = e == l.length, o = i == t.length;
    if (s || o)
      return s == o;
    if (l[e++].result != t[i++].result)
      return !1;
  }
}
const VD = {
  "aria-autocomplete": "list"
}, qD = {};
function wv(l, t) {
  let e = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": l
  };
  return t > -1 && (e["aria-activedescendant"] = l + "-" + t), e;
}
const jD = [];
function Ax(l, t) {
  if (l.isUserEvent("input.complete")) {
    let i = l.annotation(wx);
    if (i && t.activateOnCompletion(i))
      return 12;
  }
  let e = l.isUserEvent("input.type");
  return e && t.activateOnTyping ? 5 : e ? 1 : l.isUserEvent("delete.backward") ? 2 : l.selection ? 8 : l.docChanged ? 16 : 0;
}
class gi {
  constructor(t, e, i = !1) {
    this.source = t, this.state = e, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t, e) {
    let i = Ax(t, e), s = this;
    (i & 8 || i & 16 && this.touches(t)) && (s = new gi(
      s.source,
      0
      /* State.Inactive */
    )), i & 4 && s.state == 0 && (s = new gi(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(t, i);
    for (let o of t.effects)
      if (o.is(Ku))
        s = new gi(s.source, 1, o.value);
      else if (o.is(yo))
        s = new gi(
          s.source,
          0
          /* State.Inactive */
        );
      else if (o.is(qm))
        for (let u of o.value)
          u.source == s.source && (s = u);
    return s;
  }
  updateFor(t, e) {
    return this.map(t.changes);
  }
  map(t) {
    return this;
  }
  touches(t) {
    return t.changes.touchesRange(Dl(t.state));
  }
}
class Es extends gi {
  constructor(t, e, i, s, o, u) {
    super(t, 3, e), this.limit = i, this.result = s, this.from = o, this.to = u;
  }
  hasResult() {
    return !0;
  }
  updateFor(t, e) {
    var i;
    if (!(e & 3))
      return this.map(t.changes);
    let s = this.result;
    s.map && !t.changes.empty && (s = s.map(s, t.changes));
    let o = t.changes.mapPos(this.from), u = t.changes.mapPos(this.to, 1), c = Dl(t.state);
    if (c > u || !s || e & 2 && (Dl(t.startState) == this.from || c < this.limit))
      return new gi(
        this.source,
        e & 4 ? 1 : 0
        /* State.Inactive */
      );
    let h = t.changes.mapPos(this.limit);
    return YD(s.validFor, t.state, o, u) ? new Es(this.source, this.explicit, h, s, o, u) : s.update && (s = s.update(s, o, u, new Sx(t.state, c, !1))) ? new Es(this.source, this.explicit, h, s, s.from, (i = s.to) !== null && i !== void 0 ? i : Dl(t.state)) : new gi(this.source, 1, this.explicit);
  }
  map(t) {
    return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new Es(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new gi(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(t) {
    return t.changes.touchesRange(this.from, this.to);
  }
}
function YD(l, t, e, i) {
  if (!l)
    return !1;
  let s = t.sliceDoc(e, i);
  return typeof l == "function" ? l(s, e, i, t) : xx(l, !0).test(s);
}
const qm = /* @__PURE__ */ vt.define({
  map(l, t) {
    return l.map((e) => e.map(t));
  }
}), qe = /* @__PURE__ */ Oe.define({
  create() {
    return Xu.start();
  },
  update(l, t) {
    return l.update(t);
  },
  provide: (l) => [
    km.from(l, (t) => t.tooltip),
    P.contentAttributes.from(l, (t) => t.attrs)
  ]
});
function jm(l, t) {
  const e = t.completion.apply || t.completion.label;
  let i = l.state.field(qe).active.find((s) => s.source == t.source);
  return i instanceof Es ? (typeof e == "string" ? l.dispatch({
    ...OD(l.state, e, i.from, i.to),
    annotations: wx.of(t.completion)
  }) : e(l, t.completion, i.from, i.to), !0) : !1;
}
const GD = /* @__PURE__ */ zD(qe, jm);
function fu(l, t = "option") {
  return (e) => {
    let i = e.state.field(qe, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(de).interactionDelay)
      return !1;
    let s = 1, o;
    t == "page" && (o = oS(e, i.open.tooltip)) && (s = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
    let { length: u } = i.open.options, c = i.open.selected > -1 ? i.open.selected + s * (l ? 1 : -1) : l ? 0 : u - 1;
    return c < 0 ? c = t == "page" ? 0 : u - 1 : c >= u && (c = t == "page" ? u - 1 : 0), e.dispatch({ effects: Vm.of(c) }), !0;
  };
}
const Cx = (l) => {
  let t = l.state.field(qe, !1);
  return l.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < l.state.facet(de).interactionDelay ? !1 : jm(l, t.open.options[t.open.selected]);
}, rd = (l) => l.state.field(qe, !1) ? (l.dispatch({ effects: Ku.of(!0) }), !0) : !1, KD = (l) => {
  let t = l.state.field(qe, !1);
  return !t || !t.active.some(
    (e) => e.state != 0
    /* State.Inactive */
  ) ? !1 : (l.dispatch({ effects: yo.of(null) }), !0);
};
class XD {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const WD = 50, QD = 1e3, ZD = /* @__PURE__ */ Zt.fromClass(class {
  constructor(l) {
    this.view = l, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let t of l.state.field(qe).active)
      t.isPending && this.startQuery(t);
  }
  update(l) {
    let t = l.state.field(qe), e = l.state.facet(de);
    if (!l.selectionSet && !l.docChanged && l.startState.field(qe) == t)
      return;
    let i = l.transactions.some((o) => {
      let u = Ax(o, e);
      return u & 8 || (o.selection || o.docChanged) && !(u & 3);
    });
    for (let o = 0; o < this.running.length; o++) {
      let u = this.running[o];
      if (i || u.context.abortOnDocChange && l.docChanged || u.updates.length + l.transactions.length > WD && Date.now() - u.time > QD) {
        for (let c of u.context.abortListeners)
          try {
            c();
          } catch (h) {
            Ye(this.view.state, h);
          }
        u.context.abortListeners = null, this.running.splice(o--, 1);
      } else
        u.updates.push(...l.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), l.transactions.some((o) => o.effects.some((u) => u.is(Ku))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : e.activateOnTypingDelay;
    if (this.debounceUpdate = t.active.some((o) => o.isPending && !this.running.some((u) => u.active.source == o.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let o of l.transactions)
        o.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && o.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: l } = this.view, t = l.field(qe);
    for (let e of t.active)
      e.isPending && !this.running.some((i) => i.active.source == e.source) && this.startQuery(e);
    this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(de).updateSyncTime));
  }
  startQuery(l) {
    let { state: t } = this.view, e = Dl(t), i = new Sx(t, e, l.explicit, this.view), s = new XD(l, i);
    this.running.push(s), Promise.resolve(l.source(i)).then((o) => {
      s.context.aborted || (s.done = o || null, this.scheduleAccept());
    }, (o) => {
      this.view.dispatch({ effects: yo.of(null) }), Ye(this.view.state, o);
    });
  }
  scheduleAccept() {
    this.running.every((l) => l.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(de).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var l;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let t = [], e = this.view.state.facet(de), i = this.view.state.field(qe);
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (o.done === void 0)
        continue;
      if (this.running.splice(s--, 1), o.done) {
        let c = Dl(o.updates.length ? o.updates[0].startState : this.view.state), h = Math.min(c, o.done.from + (o.active.explicit ? 0 : 1)), m = new Es(o.active.source, o.active.explicit, h, o.done, o.done.from, (l = o.done.to) !== null && l !== void 0 ? l : c);
        for (let p of o.updates)
          m = m.update(p, e);
        if (m.hasResult()) {
          t.push(m);
          continue;
        }
      }
      let u = i.active.find((c) => c.source == o.active.source);
      if (u && u.isPending)
        if (o.done == null) {
          let c = new gi(
            o.active.source,
            0
            /* State.Inactive */
          );
          for (let h of o.updates)
            c = c.update(h, e);
          c.isPending || t.push(c);
        } else
          this.startQuery(u);
    }
    (t.length || i.open && i.open.disabled) && this.view.dispatch({ effects: qm.of(t) });
  }
}, {
  eventHandlers: {
    blur(l) {
      let t = this.view.state.field(qe, !1);
      if (t && t.tooltip && this.view.state.facet(de).closeOnBlur) {
        let e = t.open && oS(this.view, t.open.tooltip);
        (!e || !e.dom.contains(l.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: yo.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Ku.of(!1) }), 20), this.composing = 0;
    }
  }
}), JD = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), FD = /* @__PURE__ */ tl.highest(/* @__PURE__ */ P.domEventHandlers({
  keydown(l, t) {
    let e = t.state.field(qe, !1);
    if (!e || !e.open || e.open.disabled || e.open.selected < 0 || l.key.length > 1 || l.ctrlKey && !(JD && l.altKey) || l.metaKey)
      return !1;
    let i = e.open.options[e.open.selected], s = e.active.find((u) => u.source == i.source), o = i.completion.commitCharacters || s.result.commitCharacters;
    return o && o.indexOf(l.key) > -1 && jm(t, i), !1;
  }
})), PD = /* @__PURE__ */ P.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), vo = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Ml = /* @__PURE__ */ vt.define({
  map(l, t) {
    let e = t.mapPos(l, -1, Be.TrackAfter);
    return e ?? void 0;
  }
}), Ym = /* @__PURE__ */ new class extends Qn {
}();
Ym.startSide = 1;
Ym.endSide = -1;
const kx = /* @__PURE__ */ Oe.define({
  create() {
    return Mt.empty;
  },
  update(l, t) {
    if (l = l.map(t.changes), t.selection) {
      let e = t.state.doc.lineAt(t.selection.main.head);
      l = l.update({ filter: (i) => i >= e.from && i <= e.to });
    }
    for (let e of t.effects)
      e.is(Ml) && (l = l.update({ add: [Ym.range(e.value, e.value + 1)] }));
    return l;
  }
});
function ID() {
  return [tE, kx];
}
const od = "()[]{}<>«»»«［］｛｝";
function Mx(l) {
  for (let t = 0; t < od.length; t += 2)
    if (od.charCodeAt(t) == l)
      return od.charAt(t + 1);
  return am(l < 128 ? l : l + 1);
}
function Tx(l, t) {
  return l.languageDataAt("closeBrackets", t)[0] || vo;
}
const $D = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), tE = /* @__PURE__ */ P.inputHandler.of((l, t, e, i) => {
  if (($D ? l.composing : l.compositionStarted) || l.state.readOnly)
    return !1;
  let s = l.state.selection.main;
  if (i.length > 2 || i.length == 2 && Vi(Ve(i, 0)) == 1 || t != s.from || e != s.to)
    return !1;
  let o = nE(l.state, i);
  return o ? (l.dispatch(o), !0) : !1;
}), eE = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let i = Tx(l, l.selection.main.head).brackets || vo.brackets, s = null, o = l.changeByRange((u) => {
    if (u.empty) {
      let c = lE(l.doc, u.head);
      for (let h of i)
        if (h == c && ac(l.doc, u.head) == Mx(Ve(h, 0)))
          return {
            changes: { from: u.head - h.length, to: u.head + h.length },
            range: j.cursor(u.head - h.length)
          };
    }
    return { range: s = u };
  });
  return s || t(l.update(o, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, iE = [
  { key: "Backspace", run: eE }
];
function nE(l, t) {
  let e = Tx(l, l.selection.main.head), i = e.brackets || vo.brackets;
  for (let s of i) {
    let o = Mx(Ve(s, 0));
    if (t == s)
      return o == s ? oE(l, s, i.indexOf(s + s + s) > -1, e) : sE(l, s, o, e.before || vo.before);
    if (t == o && Ox(l, l.selection.main.from))
      return rE(l, s, o);
  }
  return null;
}
function Ox(l, t) {
  let e = !1;
  return l.field(kx).between(0, l.doc.length, (i) => {
    i == t && (e = !0);
  }), e;
}
function ac(l, t) {
  let e = l.sliceString(t, t + 2);
  return e.slice(0, Vi(Ve(e, 0)));
}
function lE(l, t) {
  let e = l.sliceString(t - 2, t);
  return Vi(Ve(e, 0)) == e.length ? e : e.slice(1);
}
function sE(l, t, e, i) {
  let s = null, o = l.changeByRange((u) => {
    if (!u.empty)
      return {
        changes: [{ insert: t, from: u.from }, { insert: e, from: u.to }],
        effects: Ml.of(u.to + t.length),
        range: j.range(u.anchor + t.length, u.head + t.length)
      };
    let c = ac(l.doc, u.head);
    return !c || /\s/.test(c) || i.indexOf(c) > -1 ? {
      changes: { insert: t + e, from: u.head },
      effects: Ml.of(u.head + t.length),
      range: j.cursor(u.head + t.length)
    } : { range: s = u };
  });
  return s ? null : l.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function rE(l, t, e) {
  let i = null, s = l.changeByRange((o) => o.empty && ac(l.doc, o.head) == e ? {
    changes: { from: o.head, to: o.head + e.length, insert: e },
    range: j.cursor(o.head + e.length)
  } : i = { range: o });
  return i ? null : l.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function oE(l, t, e, i) {
  let s = i.stringPrefixes || vo.stringPrefixes, o = null, u = l.changeByRange((c) => {
    if (!c.empty)
      return {
        changes: [{ insert: t, from: c.from }, { insert: t, from: c.to }],
        effects: Ml.of(c.to + t.length),
        range: j.range(c.anchor + t.length, c.head + t.length)
      };
    let h = c.head, m = ac(l.doc, h), p;
    if (m == t) {
      if (Av(l, h))
        return {
          changes: { insert: t + t, from: h },
          effects: Ml.of(h + t.length),
          range: j.cursor(h + t.length)
        };
      if (Ox(l, h)) {
        let v = e && l.sliceDoc(h, h + t.length * 3) == t + t + t ? t + t + t : t;
        return {
          changes: { from: h, to: h + v.length, insert: v },
          range: j.cursor(h + v.length)
        };
      }
    } else {
      if (e && l.sliceDoc(h - 2 * t.length, h) == t + t && (p = Cv(l, h - 2 * t.length, s)) > -1 && Av(l, p))
        return {
          changes: { insert: t + t + t + t, from: h },
          effects: Ml.of(h + t.length),
          range: j.cursor(h + t.length)
        };
      if (l.charCategorizer(h)(m) != Wt.Word && Cv(l, h, s) > -1 && !aE(l, h, t, s))
        return {
          changes: { insert: t + t, from: h },
          effects: Ml.of(h + t.length),
          range: j.cursor(h + t.length)
        };
    }
    return { range: o = c };
  });
  return o ? null : l.update(u, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Av(l, t) {
  let e = Te(l).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function aE(l, t, e, i) {
  let s = Te(l).resolveInner(t, -1), o = i.reduce((u, c) => Math.max(u, c.length), 0);
  for (let u = 0; u < 5; u++) {
    let c = l.sliceDoc(s.from, Math.min(s.to, s.from + e.length + o)), h = c.indexOf(e);
    if (!h || h > -1 && i.indexOf(c.slice(0, h)) > -1) {
      let p = s.firstChild;
      for (; p && p.from == s.from && p.to - p.from > e.length + h; ) {
        if (l.sliceDoc(p.to - e.length, p.to) == e)
          return !1;
        p = p.firstChild;
      }
      return !0;
    }
    let m = s.to == t && s.parent;
    if (!m)
      break;
    s = m;
  }
  return !1;
}
function Cv(l, t, e) {
  let i = l.charCategorizer(t);
  if (i(l.sliceDoc(t - 1, t)) != Wt.Word)
    return t;
  for (let s of e) {
    let o = t - s.length;
    if (l.sliceDoc(o, t) == s && i(l.sliceDoc(o - 1, o)) != Wt.Word)
      return o;
  }
  return -1;
}
function Dx(l = {}) {
  return [
    FD,
    qe,
    de.of(l),
    ZD,
    uE,
    PD
  ];
}
const Ex = [
  { key: "Ctrl-Space", run: rd },
  { mac: "Alt-`", run: rd },
  { mac: "Alt-i", run: rd },
  { key: "Escape", run: KD },
  { key: "ArrowDown", run: /* @__PURE__ */ fu(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ fu(!1) },
  { key: "PageDown", run: /* @__PURE__ */ fu(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ fu(!1, "page") },
  { key: "Enter", run: Cx }
], uE = /* @__PURE__ */ tl.highest(/* @__PURE__ */ Co.computeN([de], (l) => l.facet(de).defaultKeymap ? [Ex] : []));
class kv {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.diagnostic = i;
  }
}
class Al {
  constructor(t, e, i) {
    this.diagnostics = t, this.panel = e, this.selected = i;
  }
  static init(t, e, i) {
    let s = i.facet(bo).markerFilter;
    s && (t = s(t, i));
    let o = t.slice().sort((S, w) => S.from - w.from || S.to - w.to), u = new Wi(), c = [], h = 0, m = i.doc.iter(), p = 0, y = i.doc.length;
    for (let S = 0; ; ) {
      let w = S == o.length ? null : o[S];
      if (!w && !c.length)
        break;
      let A, M;
      if (c.length)
        A = h, M = c.reduce((z, Q) => Math.min(z, Q.to), w && w.from > A ? w.from : 1e8);
      else {
        if (A = w.from, A > y)
          break;
        M = w.to, c.push(w), S++;
      }
      for (; S < o.length; ) {
        let z = o[S];
        if (z.from == A && (z.to > z.from || z.to == A))
          c.push(z), S++, M = Math.min(z.to, M);
        else {
          M = Math.min(z.from, M);
          break;
        }
      }
      M = Math.min(M, y);
      let O = !1;
      if (c.some((z) => z.from == A && (z.to == M || M == y)) && (O = A == M, !O && M - A < 10)) {
        let z = A - (p + m.value.length);
        z > 0 && (m.next(z), p = A);
        for (let Q = A; ; ) {
          if (Q >= M) {
            O = !0;
            break;
          }
          if (!m.lineBreak && p + m.value.length > Q)
            break;
          Q = p + m.value.length, p += m.value.length, m.next();
        }
      }
      let H = wE(c);
      if (O)
        u.add(A, A, ut.widget({
          widget: new vE(H),
          diagnostics: c.slice()
        }));
      else {
        let z = c.reduce((Q, _) => _.markClass ? Q + " " + _.markClass : Q, "");
        u.add(A, M, ut.mark({
          class: "cm-lintRange cm-lintRange-" + H + z,
          diagnostics: c.slice(),
          inclusiveEnd: c.some((Q) => Q.to > M)
        }));
      }
      if (h = M, h == y)
        break;
      for (let z = 0; z < c.length; z++)
        c[z].to <= h && c.splice(z--, 1);
    }
    let v = u.finish();
    return new Al(v, e, $n(v));
  }
}
function $n(l, t = null, e = 0) {
  let i = null;
  return l.between(e, 1e9, (s, o, { spec: u }) => {
    if (!(t && u.diagnostics.indexOf(t) < 0))
      if (!i)
        i = new kv(s, o, t || u.diagnostics[0]);
      else {
        if (u.diagnostics.indexOf(i.diagnostic) < 0)
          return !1;
        i = new kv(i.from, o, i.diagnostic);
      }
  }), i;
}
function cE(l, t) {
  let e = t.pos, i = t.end || e, s = l.state.facet(bo).hideOn(l, e, i);
  if (s != null)
    return s;
  let o = l.startState.doc.lineAt(t.pos);
  return !!(l.effects.some((u) => u.is(Rx)) || l.changes.touchesRange(o.from, Math.max(o.to, i)));
}
function fE(l, t) {
  return l.field(ii, !1) ? t : t.concat(vt.appendConfig.of(AE));
}
const Rx = /* @__PURE__ */ vt.define(), Gm = /* @__PURE__ */ vt.define(), Bx = /* @__PURE__ */ vt.define(), ii = /* @__PURE__ */ Oe.define({
  create() {
    return new Al(ut.none, null, null);
  },
  update(l, t) {
    if (t.docChanged && l.diagnostics.size) {
      let e = l.diagnostics.map(t.changes), i = null, s = l.panel;
      if (l.selected) {
        let o = t.changes.mapPos(l.selected.from, 1);
        i = $n(e, l.selected.diagnostic, o) || $n(e, null, o);
      }
      !e.size && s && t.state.facet(bo).autoPanel && (s = null), l = new Al(e, s, i);
    }
    for (let e of t.effects)
      if (e.is(Rx)) {
        let i = t.state.facet(bo).autoPanel ? e.value.length ? So.open : null : l.panel;
        l = Al.init(e.value, i, t.state);
      } else e.is(Gm) ? l = new Al(l.diagnostics, e.value ? So.open : null, l.selected) : e.is(Bx) && (l = new Al(l.diagnostics, l.panel, e.value));
    return l;
  },
  provide: (l) => [
    fo.from(l, (t) => t.panel),
    P.decorations.from(l, (t) => t.diagnostics)
  ]
}), hE = /* @__PURE__ */ ut.mark({ class: "cm-lintRange cm-lintRange-active" });
function dE(l, t, e) {
  let { diagnostics: i } = l.state.field(ii), s, o = -1, u = -1;
  i.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (h, m, { spec: p }) => {
    if (t >= h && t <= m && (h == m || (t > h || e > 0) && (t < m || e < 0)))
      return s = p.diagnostics, o = h, u = m, !1;
  });
  let c = l.state.facet(bo).tooltipFilter;
  return s && c && (s = c(s, l.state)), s ? {
    pos: o,
    end: u,
    above: l.state.doc.lineAt(o).to < u,
    create() {
      return { dom: mE(l, s) };
    }
  } : null;
}
function mE(l, t) {
  return Ut("ul", { class: "cm-tooltip-lint" }, t.map((e) => Lx(l, e, !1)));
}
const pE = (l) => {
  let t = l.state.field(ii, !1);
  (!t || !t.panel) && l.dispatch({ effects: fE(l.state, [Gm.of(!0)]) });
  let e = Mm(l, So.open);
  return e && e.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Mv = (l) => {
  let t = l.state.field(ii, !1);
  return !t || !t.panel ? !1 : (l.dispatch({ effects: Gm.of(!1) }), !0);
}, gE = (l) => {
  let t = l.state.field(ii, !1);
  if (!t)
    return !1;
  let e = l.state.selection.main, i = $n(t.diagnostics, null, e.to + 1);
  return !i && (i = $n(t.diagnostics, null, 0), !i || i.from == e.from && i.to == e.to) ? !1 : (l.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, yE = [
  { key: "Mod-Shift-m", run: pE, preventDefault: !0 },
  { key: "F8", run: gE }
], bo = /* @__PURE__ */ tt.define({
  combine(l) {
    return {
      sources: l.map((t) => t.source).filter((t) => t != null),
      ...Zi(l.map((t) => t.config), {
        delay: 750,
        markerFilter: null,
        tooltipFilter: null,
        needsRefresh: null,
        hideOn: () => null
      }, {
        delay: Math.max,
        markerFilter: Tv,
        tooltipFilter: Tv,
        needsRefresh: (t, e) => t ? e ? (i) => t(i) || e(i) : t : e,
        hideOn: (t, e) => t ? e ? (i, s, o) => t(i, s, o) || e(i, s, o) : t : e,
        autoPanel: (t, e) => t || e
      })
    };
  }
});
function Tv(l, t) {
  return l ? t ? (e, i) => t(l(e, i), i) : l : t;
}
function Nx(l) {
  let t = [];
  if (l)
    t: for (let { name: e } of l) {
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        if (/[a-zA-Z]/.test(s) && !t.some((o) => o.toLowerCase() == s.toLowerCase())) {
          t.push(s);
          continue t;
        }
      }
      t.push("");
    }
  return t;
}
function Lx(l, t, e) {
  var i;
  let s = e ? Nx(t.actions) : [];
  return Ut("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, Ut("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(l) : t.message), (i = t.actions) === null || i === void 0 ? void 0 : i.map((o, u) => {
    let c = !1, h = (S) => {
      if (S.preventDefault(), c)
        return;
      c = !0;
      let w = $n(l.state.field(ii).diagnostics, t);
      w && o.apply(l, w.from, w.to);
    }, { name: m } = o, p = s[u] ? m.indexOf(s[u]) : -1, y = p < 0 ? m : [
      m.slice(0, p),
      Ut("u", m.slice(p, p + 1)),
      m.slice(p + 1)
    ], v = o.markClass ? " " + o.markClass : "";
    return Ut("button", {
      type: "button",
      class: "cm-diagnosticAction" + v,
      onclick: h,
      onmousedown: h,
      "aria-label": ` Action: ${m}${p < 0 ? "" : ` (access key "${s[u]})"`}.`
    }, y);
  }), t.source && Ut("div", { class: "cm-diagnosticSource" }, t.source));
}
class vE extends Ji {
  constructor(t) {
    super(), this.sev = t;
  }
  eq(t) {
    return t.sev == this.sev;
  }
  toDOM() {
    return Ut("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Ov {
  constructor(t, e) {
    this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Lx(t, e, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class So {
  constructor(t) {
    this.view = t, this.items = [];
    let e = (s) => {
      if (!(s.ctrlKey || s.altKey || s.metaKey)) {
        if (s.keyCode == 27)
          Mv(this.view), this.view.focus();
        else if (s.keyCode == 38 || s.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (s.keyCode == 40 || s.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (s.keyCode == 36)
          this.moveSelection(0);
        else if (s.keyCode == 35)
          this.moveSelection(this.items.length - 1);
        else if (s.keyCode == 13)
          this.view.focus();
        else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: o } = this.items[this.selectedIndex], u = Nx(o.actions);
          for (let c = 0; c < u.length; c++)
            if (u[c].toUpperCase().charCodeAt(0) == s.keyCode) {
              let h = $n(this.view.state.field(ii).diagnostics, o);
              h && o.actions[c].apply(t, h.from, h.to);
            }
        } else
          return;
        s.preventDefault();
      }
    }, i = (s) => {
      for (let o = 0; o < this.items.length; o++)
        this.items[o].dom.contains(s.target) && this.moveSelection(o);
    };
    this.list = Ut("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: e,
      onclick: i
    }), this.dom = Ut("div", { class: "cm-panel-lint" }, this.list, Ut("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Mv(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let t = this.view.state.field(ii).selected;
    if (!t)
      return -1;
    for (let e = 0; e < this.items.length; e++)
      if (this.items[e].diagnostic == t.diagnostic)
        return e;
    return -1;
  }
  update() {
    let { diagnostics: t, selected: e } = this.view.state.field(ii), i = 0, s = !1, o = null, u = /* @__PURE__ */ new Set();
    for (t.between(0, this.view.state.doc.length, (c, h, { spec: m }) => {
      for (let p of m.diagnostics) {
        if (u.has(p))
          continue;
        u.add(p);
        let y = -1, v;
        for (let S = i; S < this.items.length; S++)
          if (this.items[S].diagnostic == p) {
            y = S;
            break;
          }
        y < 0 ? (v = new Ov(this.view, p), this.items.splice(i, 0, v), s = !0) : (v = this.items[y], y > i && (this.items.splice(i, y - i), s = !0)), e && v.diagnostic == e.diagnostic ? v.dom.hasAttribute("aria-selected") || (v.dom.setAttribute("aria-selected", "true"), o = v) : v.dom.hasAttribute("aria-selected") && v.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Ov(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), o ? (this.list.setAttribute("aria-activedescendant", o.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: o.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: c, panel: h }) => {
        let m = h.height / this.list.offsetHeight;
        c.top < h.top ? this.list.scrollTop -= (h.top - c.top) / m : c.bottom > h.bottom && (this.list.scrollTop += (c.bottom - h.bottom) / m);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let t = this.list.firstChild;
    function e() {
      let i = t;
      t = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; t != i.dom; )
          e();
        t = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, t);
    for (; t; )
      e();
  }
  moveSelection(t) {
    if (this.selectedIndex < 0)
      return;
    let e = this.view.state.field(ii), i = $n(e.diagnostics, this.items[t].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: Bx.of(i)
    });
  }
  static open(t) {
    return new So(t);
  }
}
function bE(l, t = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(l)}</svg>')`;
}
function hu(l) {
  return bE(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${l}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const SE = /* @__PURE__ */ P.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ hu("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ hu("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ hu("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ hu("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  },
  "&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
  "&dark .cm-panel.cm-panel-lint ul": {
    "& [aria-selected]": {
      backgroundColor: "#2e343e"
    }
  }
});
function xE(l) {
  return l == "error" ? 4 : l == "warning" ? 3 : l == "info" ? 2 : 1;
}
function wE(l) {
  let t = "hint", e = 1;
  for (let i of l) {
    let s = xE(i.severity);
    s > e && (e = s, t = i.severity);
  }
  return t;
}
const AE = [
  ii,
  /* @__PURE__ */ P.decorations.compute([ii], (l) => {
    let { selected: t, panel: e } = l.field(ii);
    return !t || !e || t.from == t.to ? ut.none : ut.set([
      hE.range(t.from, t.to)
    ]);
  }),
  /* @__PURE__ */ hM(dE, { hideOn: cE }),
  SE
];
var Dv = function(t) {
  t === void 0 && (t = {});
  var {
    crosshairCursor: e = !1
  } = t, i = [];
  t.closeBracketsKeymap !== !1 && (i = i.concat(iE)), t.defaultKeymap !== !1 && (i = i.concat(JO)), t.searchKeymap !== !1 && (i = i.concat(wD)), t.historyKeymap !== !1 && (i = i.concat(iO)), t.foldKeymap !== !1 && (i = i.concat(gT)), t.completionKeymap !== !1 && (i = i.concat(Ex)), t.lintKeymap !== !1 && (i = i.concat(yE));
  var s = [];
  return t.lineNumbers !== !1 && s.push(kM()), t.highlightActiveLineGutter !== !1 && s.push(OM()), t.highlightSpecialChars !== !1 && s.push(jk()), t.history !== !1 && s.push(QT()), t.foldGutter !== !1 && s.push(ST()), t.drawSelection !== !1 && s.push(Ek()), t.dropCursor !== !1 && s.push(zk()), t.allowMultipleSelections !== !1 && s.push(Tt.allowMultipleSelections.of(!0)), t.indentOnInput !== !1 && s.push(rT()), t.syntaxHighlighting !== !1 && s.push(OS(CT, {
    fallback: !0
  })), t.bracketMatching !== !1 && s.push(RT()), t.closeBrackets !== !1 && s.push(ID()), t.autocompletion !== !1 && s.push(Dx()), t.rectangularSelection !== !1 && s.push(eM()), e !== !1 && s.push(lM()), t.highlightActiveLine !== !1 && s.push(Qk()), t.highlightSelectionMatches !== !1 && s.push(eD()), t.tabSize && typeof t.tabSize == "number" && s.push(ec.of(" ".repeat(t.tabSize))), s.concat([Co.of(i.flat())]).filter(Boolean);
};
const CE = "#e5c07b", Ev = "#e06c75", kE = "#56b6c2", ME = "#ffffff", xu = "#abb2bf", sm = "#7d8799", TE = "#61afef", OE = "#98c379", Rv = "#d19a66", DE = "#c678dd", EE = "#21252b", Bv = "#2c313a", Nv = "#282c34", ad = "#353a42", RE = "#3E4451", Lv = "#528bff", BE = /* @__PURE__ */ P.theme({
  "&": {
    color: xu,
    backgroundColor: Nv
  },
  ".cm-content": {
    caretColor: Lv
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: Lv },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: RE },
  ".cm-panels": { backgroundColor: EE, color: xu },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: Nv,
    color: sm,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: Bv
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: ad
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: ad,
    borderBottomColor: ad
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: Bv,
      color: xu
    }
  }
}, { dark: !0 }), NE = /* @__PURE__ */ Mo.define([
  {
    tag: V.keyword,
    color: DE
  },
  {
    tag: [V.name, V.deleted, V.character, V.propertyName, V.macroName],
    color: Ev
  },
  {
    tag: [/* @__PURE__ */ V.function(V.variableName), V.labelName],
    color: TE
  },
  {
    tag: [V.color, /* @__PURE__ */ V.constant(V.name), /* @__PURE__ */ V.standard(V.name)],
    color: Rv
  },
  {
    tag: [/* @__PURE__ */ V.definition(V.name), V.separator],
    color: xu
  },
  {
    tag: [V.typeName, V.className, V.number, V.changed, V.annotation, V.modifier, V.self, V.namespace],
    color: CE
  },
  {
    tag: [V.operator, V.operatorKeyword, V.url, V.escape, V.regexp, V.link, /* @__PURE__ */ V.special(V.string)],
    color: kE
  },
  {
    tag: [V.meta, V.comment],
    color: sm
  },
  {
    tag: V.strong,
    fontWeight: "bold"
  },
  {
    tag: V.emphasis,
    fontStyle: "italic"
  },
  {
    tag: V.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: V.link,
    color: sm,
    textDecoration: "underline"
  },
  {
    tag: V.heading,
    fontWeight: "bold",
    color: Ev
  },
  {
    tag: [V.atom, V.bool, /* @__PURE__ */ V.special(V.variableName)],
    color: Rv
  },
  {
    tag: [V.processingInstruction, V.string, V.inserted],
    color: OE
  },
  {
    tag: V.invalid,
    color: ME
  }
]), LE = [BE, /* @__PURE__ */ OS(NE)];
var zE = P.theme({
  "&": {
    backgroundColor: "#fff"
  }
}, {
  dark: !1
}), HE = function(t) {
  t === void 0 && (t = {});
  var {
    indentWithTab: e = !0,
    editable: i = !0,
    readOnly: s = !1,
    theme: o = "light",
    placeholder: u = "",
    basicSetup: c = !0
  } = t, h = [];
  switch (e && h.unshift(Co.of([FO])), c && (typeof c == "boolean" ? h.unshift(Dv()) : h.unshift(Dv(c))), u && h.unshift(Pk(u)), o) {
    case "light":
      h.push(zE);
      break;
    case "dark":
      h.push(LE);
      break;
    case "none":
      break;
    default:
      h.push(o);
      break;
  }
  return i === !1 && h.push(P.editable.of(!1)), s && h.push(Tt.readOnly.of(!0)), [...h];
}, _E = (l) => ({
  line: l.state.doc.lineAt(l.state.selection.main.from),
  lineCount: l.state.doc.lines,
  lineBreak: l.state.lineBreak,
  length: l.state.doc.length,
  readOnly: l.state.readOnly,
  tabSize: l.state.tabSize,
  selection: l.state.selection,
  selectionAsSingle: l.state.selection.asSingle().main,
  ranges: l.state.selection.ranges,
  selectionCode: l.state.sliceDoc(l.state.selection.main.from, l.state.selection.main.to),
  selections: l.state.selection.ranges.map((t) => l.state.sliceDoc(t.from, t.to)),
  selectedText: l.state.selection.ranges.some((t) => !t.empty)
});
class UE {
  constructor(t, e) {
    this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = e, this.timeoutMS = e, this.callbacks.push(t);
  }
  tick() {
    if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
      this.isTimeExhausted = !0;
      var t = this.callbacks.slice();
      this.callbacks.length = 0, t.forEach((e) => {
        try {
          e();
        } catch (i) {
          console.error("TimeoutLatch callback error:", i);
        }
      });
    }
  }
  cancel() {
    this.isCancelled = !0, this.callbacks.length = 0;
  }
  reset() {
    this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1;
  }
  get isDone() {
    return this.isCancelled || this.isTimeExhausted;
  }
}
class zv {
  constructor() {
    this.interval = null, this.latches = /* @__PURE__ */ new Set();
  }
  add(t) {
    this.latches.add(t), this.start();
  }
  remove(t) {
    this.latches.delete(t), this.latches.size === 0 && this.stop();
  }
  start() {
    this.interval === null && (this.interval = setInterval(() => {
      this.latches.forEach((t) => {
        t.tick(), t.isDone && this.remove(t);
      });
    }, 1));
  }
  stop() {
    this.interval !== null && (clearInterval(this.interval), this.interval = null);
  }
}
var ud = null, VE = () => typeof window > "u" ? new zv() : (ud || (ud = new zv()), ud), Hv = Qi.define(), qE = 200, jE = [];
function YE(l) {
  var {
    value: t,
    selection: e,
    onChange: i,
    onStatistics: s,
    onCreateEditor: o,
    onUpdate: u,
    extensions: c = jE,
    autoFocus: h,
    theme: m = "light",
    height: p = null,
    minHeight: y = null,
    maxHeight: v = null,
    width: S = null,
    minWidth: w = null,
    maxWidth: A = null,
    placeholder: M = "",
    editable: O = !0,
    readOnly: H = !1,
    indentWithTab: z = !0,
    basicSetup: Q = !0,
    root: _,
    initialState: K
  } = l, [X, lt] = Pt.useState(), [et, yt] = Pt.useState(), [at, I] = Pt.useState(), ft = Pt.useState(() => ({
    current: null
  }))[0], pt = Pt.useState(() => ({
    current: null
  }))[0], gt = P.theme({
    "&": {
      height: p,
      minHeight: y,
      maxHeight: v,
      width: S,
      minWidth: w,
      maxWidth: A
    },
    "& .cm-scroller": {
      height: "100% !important"
    }
  }), L = P.updateListener.of((ot) => {
    if (ot.docChanged && typeof i == "function" && // Fix echoing of the remote changes:
    // If transaction is market as remote we don't have to call `onChange` handler again
    !ot.transactions.some((Z) => Z.annotation(Hv))) {
      ft.current ? ft.current.reset() : (ft.current = new UE(() => {
        if (pt.current) {
          var Z = pt.current;
          pt.current = null, Z();
        }
        ft.current = null;
      }, qE), VE().add(ft.current));
      var k = ot.state.doc, q = k.toString();
      i(q, ot);
    }
    s && s(_E(ot));
  }), W = HE({
    theme: m,
    editable: O,
    readOnly: H,
    placeholder: M,
    indentWithTab: z,
    basicSetup: Q
  }), it = [L, gt, ...W];
  return u && typeof u == "function" && it.push(P.updateListener.of(u)), it = it.concat(c), Pt.useLayoutEffect(() => {
    if (X && !at) {
      var ot = {
        doc: t,
        selection: e,
        extensions: it
      }, k = K ? Tt.fromJSON(K.json, ot, K.fields) : Tt.create(ot);
      if (I(k), !et) {
        var q = new P({
          state: k,
          parent: X,
          root: _
        });
        yt(q), o && o(q, k);
      }
    }
    return () => {
      et && (I(void 0), yt(void 0));
    };
  }, [X, at]), Pt.useEffect(() => {
    l.container && lt(l.container);
  }, [l.container]), Pt.useEffect(() => () => {
    et && (et.destroy(), yt(void 0)), ft.current && (ft.current.cancel(), ft.current = null);
  }, [et]), Pt.useEffect(() => {
    h && et && et.focus();
  }, [h, et]), Pt.useEffect(() => {
    et && et.dispatch({
      effects: vt.reconfigure.of(it)
    });
  }, [m, c, p, y, v, S, w, A, M, O, H, z, Q, i, u]), Pt.useEffect(() => {
    if (t !== void 0) {
      var ot = et ? et.state.doc.toString() : "";
      if (et && t !== ot) {
        var k = ft.current && !ft.current.isDone, q = () => {
          et && t !== et.state.doc.toString() && et.dispatch({
            changes: {
              from: 0,
              to: et.state.doc.toString().length,
              insert: t || ""
            },
            annotations: [Hv.of(!0)]
          });
        };
        k ? pt.current = q : q();
      }
    }
  }, [t, et]), {
    state: at,
    setState: I,
    view: et,
    setView: yt,
    container: X,
    setContainer: lt
  };
}
var GE = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"], zx = /* @__PURE__ */ Pt.forwardRef((l, t) => {
  var {
    className: e,
    value: i = "",
    selection: s,
    extensions: o = [],
    onChange: u,
    onStatistics: c,
    onCreateEditor: h,
    onUpdate: m,
    autoFocus: p,
    theme: y = "light",
    height: v,
    minHeight: S,
    maxHeight: w,
    width: A,
    minWidth: M,
    maxWidth: O,
    basicSetup: H,
    placeholder: z,
    indentWithTab: Q,
    editable: _,
    readOnly: K,
    root: X,
    initialState: lt
  } = l, et = vA(l, GE), yt = Pt.useRef(null), {
    state: at,
    view: I,
    container: ft,
    setContainer: pt
  } = YE({
    root: X,
    value: i,
    autoFocus: p,
    theme: y,
    height: v,
    minHeight: S,
    maxHeight: w,
    width: A,
    minWidth: M,
    maxWidth: O,
    basicSetup: H,
    placeholder: z,
    indentWithTab: Q,
    editable: _,
    readOnly: K,
    selection: s,
    onChange: u,
    onStatistics: c,
    onCreateEditor: h,
    onUpdate: m,
    extensions: o,
    initialState: lt
  });
  Pt.useImperativeHandle(t, () => ({
    editor: yt.current,
    state: at,
    view: I
  }), [yt, ft, at, I]);
  var gt = Pt.useCallback((W) => {
    yt.current = W, pt(W);
  }, [pt]);
  if (typeof i != "string")
    throw new Error("value must be typeof string but got " + typeof i);
  var L = typeof y == "string" ? "cm-theme-" + y : "cm-theme";
  return /* @__PURE__ */ St.jsx("div", fd({
    ref: gt,
    className: "" + L + (e ? " " + e : "")
  }, et));
});
zx.displayName = "CodeMirror";
const Wu = {
  zero: { inputs: 0, outputs: 1 },
  one: { inputs: 0, outputs: 1 },
  not: { inputs: 1, outputs: 1 },
  and: { inputs: 2, outputs: 1 },
  or: { inputs: 2, outputs: 1 }
}, uc = Object.freeze(Object.keys(Wu));
class Us extends Error {
  diagnostic;
  constructor(t, e, i) {
    super(t), this.diagnostic = { severity: "error", message: t, line: e, column: i };
  }
}
class KE {
  constructor(t) {
    this.tokens = t;
  }
  index = 0;
  peek(t = 0) {
    return this.tokens[this.index + t] ?? null;
  }
  next() {
    const t = this.peek();
    return t && (this.index += 1), t;
  }
  expect(t, e) {
    const i = this.next();
    if (!i)
      throw new Us(`Expected ${_v(t, e)}.`, XE(this.tokens), WE(this.tokens));
    if (i.type !== t || e !== void 0 && i.value !== e)
      throw new Us(
        `Expected ${_v(t, e)}, found "${i.value}".`,
        i.line,
        i.column
      );
    return i;
  }
}
function _v(l, t) {
  return t !== void 0 ? `"${t}"` : l === "word" ? "an identifier" : l === "lparen" ? '"("' : l === "rparen" ? '")"' : '":"';
}
function XE(l) {
  return l[l.length - 1]?.line ?? 1;
}
function WE(l) {
  const t = l[l.length - 1];
  return t ? t.column + Math.max(t.value.length - 1, 0) : 1;
}
function QE(l) {
  const t = [];
  let e = 1, i = 1, s = 0;
  for (; s < l.length; ) {
    const o = l[s];
    if (o === `
`) {
      s += 1, e += 1, i = 1;
      continue;
    }
    if (o === "#") {
      const u = l.indexOf(`
`, s);
      if (u === -1)
        break;
      s = u + 1, e += 1, i = 1;
      continue;
    }
    if (/\s/.test(o)) {
      s += 1, i += 1;
      continue;
    }
    if (o === "(") {
      t.push({ type: "lparen", value: o, line: e, column: i, from: s, to: s + 1 }), s += 1, i += 1;
      continue;
    }
    if (o === ")") {
      t.push({ type: "rparen", value: o, line: e, column: i, from: s, to: s + 1 }), s += 1, i += 1;
      continue;
    }
    if (o === ":") {
      t.push({ type: "colon", value: o, line: e, column: i, from: s, to: s + 1 }), s += 1, i += 1;
      continue;
    }
    if (/[A-Za-z0-9_]/.test(o)) {
      const u = s, c = i;
      for (; s < l.length && /[A-Za-z0-9_]/.test(l[s]); )
        s += 1, i += 1;
      t.push({
        type: "word",
        value: l.slice(u, s),
        line: e,
        column: c,
        from: u,
        to: s
      });
      continue;
    }
    throw new Us(`Unexpected character "${o}".`, e, i);
  }
  return t;
}
function Qu(l) {
  const t = l.expect("lparen"), e = [];
  for (; l.peek()?.type !== "rparen"; ) {
    const s = l.expect("word");
    e.push({ name: s.value, line: s.line, column: s.column, from: s.from, to: s.to });
  }
  const i = l.expect("rparen");
  return { items: e, line: t.line, column: t.column, from: t.from, to: i.to };
}
function ZE(l) {
  const t = Qu(l), e = l.expect("word"), i = Qu(l);
  return {
    inputs: t,
    callee: { name: e.value, line: e.line, column: e.column, from: e.from, to: e.to },
    outputs: i
  };
}
function JE(l) {
  const t = l.expect("word", "scheme"), e = Qu(l), i = l.expect("word"), s = Qu(l);
  l.expect("colon");
  const o = [];
  if (l.peek()?.type === "word" && l.peek()?.value === "local")
    for (l.next(); l.peek()?.type === "word" && l.peek()?.value !== "end"; ) {
      const h = l.next();
      o.push({ name: h.value, line: h.line, column: h.column, from: h.from, to: h.to });
    }
  const u = [];
  for (; !(l.peek()?.type === "word" && l.peek()?.value === "end"); ) {
    if (!l.peek())
      throw new Us(`Missing "end" for scheme "${i.value}".`, t.line, t.column);
    if (l.peek()?.type !== "lparen") {
      const h = l.peek();
      throw new Us(`Expected "(" or "end", found "${h.value}".`, h.line, h.column);
    }
    u.push(ZE(l));
  }
  const c = l.expect("word", "end");
  return {
    name: { name: i.value, line: i.line, column: i.column, from: i.from, to: i.to },
    inputs: e,
    outputs: s,
    locals: o,
    statements: u,
    start: t.from,
    end: c.to
  };
}
function Hx(l) {
  let t;
  try {
    t = QE(l);
  } catch (s) {
    return { ok: !1, diagnostic: s.diagnostic };
  }
  const e = new KE(t), i = [];
  try {
    for (; e.peek(); ) {
      const s = e.peek();
      if (s.type !== "word" || s.value !== "scheme")
        throw new Us(`Expected "scheme", found "${s.value}".`, s.line, s.column);
      i.push(JE(e));
    }
  } catch (s) {
    return { ok: !1, diagnostic: s.diagnostic };
  }
  return { ok: !0, parsed: { schemes: i } };
}
function hi(l, t) {
  return { severity: "error", message: l, line: t.line, column: t.column };
}
function cd(l, t, e) {
  const i = /* @__PURE__ */ new Map();
  for (const s of l) {
    if (i.get(s.name)) {
      e.push(hi(`Duplicate name "${s.name}" in ${t}.`, s));
      continue;
    }
    i.set(s.name, s);
  }
}
function FE(l, t) {
  const e = new Map(l.inputs.items.map((S) => [S.name, S])), i = [...l.outputs.items, ...l.locals], s = new Map(i.map((S) => [S.name, S])), o = new Map(l.locals.map((S) => [S.name, S])), u = new Map([...l.inputs.items, ...l.outputs.items, ...l.locals].map((S) => [S.name, S])), c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set();
  for (const S of u.keys())
    h.set(S, /* @__PURE__ */ new Set());
  for (const S of l.statements)
    for (const w of S.outputs.items) {
      if (s.has(w.name)) {
        if (c.get(w.name)) {
          t.push(hi(`Signal "${w.name}" can only be written once in scheme "${l.name.name}".`, w));
          continue;
        }
        c.set(w.name, w);
      }
      if (h.has(w.name))
        for (const A of S.inputs.items)
          h.has(A.name) && h.get(A.name).add(w.name);
    }
  for (const S of l.statements)
    for (const w of S.inputs.items)
      o.has(w.name) && !c.has(w.name) && t.push(
        hi(`Local signal "${w.name}" is used as an input, but no statement writes to it in scheme "${l.name.name}".`, w)
      );
  const p = /* @__PURE__ */ new Map(), y = [], v = (S) => {
    const w = p.get(S);
    if (w !== "done") {
      if (w === "visiting") {
        const A = y.indexOf(S), O = [...y.slice(A >= 0 ? A : 0), S].join(" -> ");
        m.has(O) || (m.add(O), t.push(
          hi(`Signal graph in scheme "${l.name.name}" must be acyclic. Cycle: ${O}.`, u.get(S) ?? l.name)
        ));
        return;
      }
      p.set(S, "visiting"), y.push(S);
      for (const A of h.get(S) ?? [])
        v(A);
      y.pop(), p.set(S, "done");
    }
  };
  for (const S of u.keys())
    (!e.has(S) || h.get(S)?.size) && v(S);
}
function PE(l) {
  const t = [];
  if (l.schemes.length === 0)
    return t.push({ severity: "error", message: 'File must contain at least one "scheme" definition.', line: 1, column: 1 }), { mainSchemeName: null, inputs: [], outputs: [], diagnostics: t, isValid: !1, parsed: l };
  const e = /* @__PURE__ */ new Map();
  for (const c of l.schemes)
    Wu[c.name.name] && t.push(hi(`Scheme name "${c.name.name}" is reserved for a built-in scheme.`, c.name)), e.has(c.name.name) ? t.push(hi(`Duplicate scheme name "${c.name.name}".`, c.name)) : e.set(c.name.name, c);
  for (const c of l.schemes) {
    const h = [...c.inputs.items, ...c.outputs.items, ...c.locals];
    cd(c.inputs.items, `inputs of "${c.name.name}"`, t), cd(c.outputs.items, `outputs of "${c.name.name}"`, t), cd(c.locals, `locals of "${c.name.name}"`, t);
    const m = /* @__PURE__ */ new Map();
    for (const p of h) {
      if (m.get(p.name)) {
        t.push(hi(`Signal "${p.name}" is declared more than once in scheme "${c.name.name}".`, p));
        continue;
      }
      m.set(p.name, p);
    }
    for (const p of c.statements) {
      const y = e.get(p.callee.name), v = Wu[p.callee.name];
      if (!v && !y)
        t.push(hi(`Unknown scheme "${p.callee.name}".`, p.callee));
      else {
        const S = v ? v.inputs : y.inputs.items.length, w = v ? v.outputs : y.outputs.items.length;
        p.inputs.items.length !== S && t.push(
          hi(
            `Scheme "${p.callee.name}" expects ${S} input(s), got ${p.inputs.items.length}.`,
            p.callee
          )
        ), p.outputs.items.length !== w && t.push(
          hi(
            `Scheme "${p.callee.name}" expects ${w} output(s), got ${p.outputs.items.length}.`,
            p.callee
          )
        );
      }
      for (const S of [...p.inputs.items, ...p.outputs.items])
        m.has(S.name) || t.push(hi(`Signal "${S.name}" is not declared in scheme "${c.name.name}".`, S));
    }
    FE(c, t);
  }
  const i = /* @__PURE__ */ new Map(), s = [], o = (c) => {
    const h = i.get(c);
    if (h === "done")
      return;
    if (h === "visiting") {
      const p = e.get(c)?.name ?? { line: 1, column: 1 };
      t.push(hi(`Recursive scheme usage is not allowed. Cycle: ${[...s, c].join(" -> ")}.`, p));
      return;
    }
    i.set(c, "visiting"), s.push(c);
    const m = e.get(c);
    if (m)
      for (const p of m.statements)
        e.has(p.callee.name) && o(p.callee.name);
    s.pop(), i.set(c, "done");
  };
  for (const c of l.schemes)
    o(c.name.name);
  const u = l.schemes[0] ?? null;
  return {
    mainSchemeName: u?.name.name ?? null,
    inputs: u?.inputs.items.map((c) => c.name) ?? [],
    outputs: u?.outputs.items.map((c) => c.name) ?? [],
    diagnostics: t,
    isValid: t.length === 0,
    parsed: l
  };
}
function IE(l, t) {
  if (l === "zero")
    return [0];
  if (l === "one")
    return [1];
  if (l === "not")
    return [t[0] === 1 ? 0 : 1];
  if (l === "and")
    return [t[0] === 1 && t[1] === 1 ? 1 : 0];
  if (l === "or")
    return [t[0] === 1 || t[1] === 1 ? 1 : 0];
  throw new Error(`Unknown built-in ${l}`);
}
function _x(l, t, e) {
  const i = l.schemes.find((o) => o.name.name === t);
  if (!i)
    throw new Error(`Scheme ${t} was not found.`);
  const s = /* @__PURE__ */ new Map();
  i.inputs.items.forEach((o, u) => s.set(o.name, e[u] ?? 0)), i.outputs.items.forEach((o) => s.set(o.name, 0)), i.locals.forEach((o) => s.set(o.name, 0));
  for (const o of i.statements) {
    const u = o.inputs.items.map((h) => s.get(h.name) ?? 0), c = Wu[o.callee.name] ? IE(o.callee.name, u) : _x(l, o.callee.name, u);
    o.outputs.items.forEach((h, m) => s.set(h.name, c[m] ?? 0));
  }
  return i.outputs.items.map((o) => s.get(o.name) === 1 ? 1 : 0);
}
function rm(l) {
  if (!l.trim())
    return {
      mainSchemeName: null,
      inputs: [],
      outputs: [],
      diagnostics: [{ severity: "error", message: "File is empty. Add at least one scheme definition.", line: 1, column: 1 }],
      isValid: !1,
      parsed: null
    };
  const t = Hx(l);
  return t.ok ? PE(t.parsed) : { mainSchemeName: null, inputs: [], outputs: [], diagnostics: [t.diagnostic], isValid: !1, parsed: null };
}
function $E(l) {
  return l.schemes.map((t) => ({
    name: t.name.name,
    start: t.start,
    end: t.end,
    inputs: t.inputs.items.map((e) => e.name),
    outputs: t.outputs.items.map((e) => e.name),
    locals: t.locals.map((e) => e.name),
    schemeNameRefs: [
      { name: t.name.name, from: t.name.from, to: t.name.to },
      ...t.statements.map((e) => ({
        name: e.callee.name,
        from: e.callee.from,
        to: e.callee.to
      }))
    ],
    signalRefs: [
      ...t.inputs.items.map((e) => ({ name: e.name, from: e.from, to: e.to })),
      ...t.outputs.items.map((e) => ({ name: e.name, from: e.from, to: e.to })),
      ...t.locals.map((e) => ({ name: e.name, from: e.from, to: e.to })),
      ...t.statements.flatMap((e) => [
        ...e.inputs.items.map((i) => ({ name: i.name, from: i.from, to: i.to })),
        ...e.outputs.items.map((i) => ({ name: i.name, from: i.from, to: i.to }))
      ])
    ]
  }));
}
function tR(l) {
  const t = [];
  let e = 0;
  for (; e < l.length; ) {
    const i = l[e];
    if (/\s/.test(i)) {
      e += 1;
      continue;
    }
    if (i === "#") {
      const s = l.indexOf(`
`, e);
      e = s === -1 ? l.length : s + 1;
      continue;
    }
    if (i === "(") {
      t.push({ type: "lparen", value: i, from: e, to: e + 1 }), e += 1;
      continue;
    }
    if (i === ")") {
      t.push({ type: "rparen", value: i, from: e, to: e + 1 }), e += 1;
      continue;
    }
    if (i === ":") {
      t.push({ type: "colon", value: i, from: e, to: e + 1 }), e += 1;
      continue;
    }
    if (/[A-Za-z0-9_]/.test(i)) {
      const s = e;
      for (; e < l.length && /[A-Za-z0-9_]/.test(l[e]); )
        e += 1;
      t.push({ type: "word", value: l.slice(s, e), from: s, to: e });
      continue;
    }
    e += 1;
  }
  return t;
}
function Uv(l, t) {
  if (l[t]?.type !== "lparen")
    return null;
  const e = [];
  let i = t + 1;
  for (; i < l.length && l[i].type !== "rparen"; ) {
    if (l[i].type === "word") {
      e.push({ name: l[i].value, from: l[i].from, to: l[i].to }), i += 1;
      continue;
    }
    return null;
  }
  return l[i]?.type !== "rparen" ? null : { refs: e, nextIndex: i + 1 };
}
function eR(l) {
  const t = tR(l), e = [];
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (s.type !== "word" || s.value !== "scheme")
      continue;
    const o = Uv(t, i + 1), u = o ? t[o.nextIndex] : null, c = u ? Uv(t, o.nextIndex + 1) : null;
    if (!o || !u || u.type !== "word" || !c)
      continue;
    let h = c.nextIndex;
    t[h]?.type === "colon" && (h += 1);
    const m = [];
    if (t[h]?.type === "word" && t[h]?.value === "local")
      for (h += 1; t[h]?.type === "word" && !["scheme", "local", "end"].includes(t[h].value); )
        m.push({ name: t[h].value, from: t[h].from, to: t[h].to }), h += 1;
    const p = t.findIndex((v, S) => S > i && v.type === "word" && v.value === "scheme"), y = t.find(
      (v, S) => S >= h && v.type === "word" && v.value === "end" && (p === -1 || S < p)
    );
    e.push({
      name: u.value,
      start: s.from,
      end: y?.to ?? l.length,
      inputs: o.refs.map((v) => v.name),
      outputs: c.refs.map((v) => v.name),
      locals: m.map((v) => v.name),
      schemeNameRefs: [{ name: u.value, from: u.from, to: u.to }],
      signalRefs: [...o.refs, ...c.refs, ...m]
    });
  }
  return e;
}
function cc(l, t) {
  const e = Hx(l), i = e.ok ? $E(e.parsed) : eR(l), s = i[0]?.name ?? null, o = i.map((h) => h.name).filter((h, m, p) => h !== s && !uc.includes(h) && p.indexOf(h) === m);
  let u = null;
  for (let h = i.length - 1; h >= 0; h -= 1)
    if (t >= i[h].start && t <= i[h].end) {
      u = i[h];
      break;
    }
  const c = u ? Array.from(/* @__PURE__ */ new Set([...u.inputs, ...u.outputs, ...u.locals])) : [];
  return { helperSchemeNames: o, schemes: i, activeScheme: u, visibleSignals: c };
}
function iR(l, t) {
  const e = rm(l);
  if (!e.isValid || !e.parsed || !e.mainSchemeName)
    return null;
  const i = _x(
    e.parsed,
    e.mainSchemeName,
    e.inputs.map((o) => t[o] ?? 0)
  );
  return { outputs: Object.fromEntries(
    e.outputs.map((o, u) => [o, i[u] === 1 ? 1 : 0])
  ) };
}
const nR = ["scheme", "local", "end"], lR = {
  keyword: "cm-scheme-keyword",
  builtin: "cm-scheme-builtin",
  helper: "cm-scheme-helper",
  signal: "cm-scheme-signal",
  punctuation: "cm-scheme-punctuation",
  identifier: "cm-scheme-identifier",
  comment: "cm-scheme-comment"
};
function Km(l) {
  const t = [];
  let e = 0;
  for (; e < l.length; ) {
    const i = l[e];
    if (/\s/.test(i)) {
      e += 1;
      continue;
    }
    if (i === "#") {
      const s = e;
      for (; e < l.length && l[e] !== `
`; )
        e += 1;
      t.push({ type: "comment", value: l.slice(s, e), from: s, to: e });
      continue;
    }
    if (i === "(") {
      t.push({ type: "lparen", value: i, from: e, to: e + 1 }), e += 1;
      continue;
    }
    if (i === ")") {
      t.push({ type: "rparen", value: i, from: e, to: e + 1 }), e += 1;
      continue;
    }
    if (i === ":") {
      t.push({ type: "colon", value: i, from: e, to: e + 1 }), e += 1;
      continue;
    }
    if (/[A-Za-z0-9_]/.test(i)) {
      const s = e;
      for (; e < l.length && /[A-Za-z0-9_]/.test(l[e]); )
        e += 1;
      t.push({ type: "word", value: l.slice(s, e), from: s, to: e });
      continue;
    }
    e += 1;
  }
  return t;
}
function Ux(l, t) {
  const e = l.lastIndexOf(`
`, Math.max(t - 1, 0)) + 1, i = l.indexOf("#", e);
  return i >= e && i < t;
}
function sR(l) {
  const t = cc(l, 0), e = new Set(t.helperSchemeNames), i = /* @__PURE__ */ new Map();
  for (const s of t.schemes) {
    for (const o of s.schemeNameRefs)
      e.has(o.name) && i.set(`${o.from}:${o.to}`, "helper");
    for (const o of s.signalRefs)
      i.set(`${o.from}:${o.to}`, "signal");
  }
  return i;
}
function rR(l) {
  const t = sR(l);
  return Km(l).map((e) => {
    const i = `${e.from}:${e.to}`;
    let s = "identifier";
    return e.type === "comment" ? s = "comment" : e.type !== "word" ? s = "punctuation" : nR.includes(e.value) ? s = "keyword" : uc.includes(e.value) ? s = "builtin" : t.get(i) && (s = t.get(i)), {
      text: e.value,
      from: e.from,
      to: e.to,
      kind: s
    };
  });
}
function Vv(l) {
  const t = new Wi();
  for (const e of rR(l)) {
    const i = lR[e.kind];
    i && t.add(e.from, e.to, ut.mark({ class: i }));
  }
  return t.finish();
}
const oR = Zt.fromClass(
  class {
    decorations;
    constructor(l) {
      this.decorations = Vv(l.state.doc.toString());
    }
    update(l) {
      l.docChanged && (this.decorations = Vv(l.state.doc.toString()));
    }
  },
  {
    decorations: (l) => l.decorations
  }
);
function Vx(l) {
  const t = /* @__PURE__ */ new Set();
  return l.filter((e) => {
    const i = `${e.type}:${e.label}`;
    return t.has(i) ? !1 : (t.add(i), !0);
  });
}
function Xm(l, t) {
  let e = t;
  for (; e > 0 && /[A-Za-z0-9_]/.test(l[e - 1]); )
    e -= 1;
  return { from: e, text: l.slice(e, t) };
}
function aR(l, t) {
  for (let e = l.length - 1; e >= 0; e -= 1)
    if (l[e].to <= t)
      return l[e];
  return null;
}
function uR(l, t) {
  const e = l.lastIndexOf(`
`, Math.max(t - 1, 0)) + 1;
  return l.slice(e, t).trim() === "";
}
function du(l, t) {
  if (l[t]?.type !== "lparen")
    return null;
  let e = t + 1;
  for (; e < l.length && l[e].type !== "rparen"; ) {
    if (l[e].type !== "word")
      return null;
    e += 1;
  }
  return l[e]?.type === "rparen" ? e + 1 : null;
}
function cR(l, t) {
  const e = Km(l).filter((h) => h.type !== "comment" && h.to <= t), i = uR(l, t);
  let s = 0, o = "top-level", u = !1, c = !1;
  for (; ; ) {
    if (s >= e.length)
      return o === "local-name" && i && c ? { kind: "body-start", canDeclareLocal: !1 } : o === "body-start" ? { kind: "body-start", canDeclareLocal: u } : o === "top-level" ? { kind: "top-level" } : o === "scheme-input-list" ? { kind: "scheme-input-list" } : o === "scheme-name" ? { kind: "scheme-name" } : o === "scheme-output-list" ? { kind: "scheme-output-list" } : o === "scheme-colon" ? { kind: "scheme-colon" } : o === "local-name" ? { kind: "local-name" } : o === "statement-input-list" ? { kind: "statement-input-list" } : o === "statement-callee" ? { kind: "statement-callee" } : { kind: "statement-output-list" };
    if (o === "top-level") {
      const m = e[s];
      if (m.type !== "word" || m.value !== "scheme")
        return null;
      o = "scheme-input-list", s += 1;
      continue;
    }
    if (o === "scheme-input-list") {
      const m = du(e, s);
      if (m === null)
        return { kind: "scheme-input-list" };
      o = "scheme-name", s = m;
      continue;
    }
    if (o === "scheme-name") {
      if (e[s]?.type !== "word")
        return { kind: "scheme-name" };
      o = "scheme-output-list", s += 1;
      continue;
    }
    if (o === "scheme-output-list") {
      const m = du(e, s);
      if (m === null)
        return { kind: "scheme-output-list" };
      o = "scheme-colon", s = m;
      continue;
    }
    if (o === "scheme-colon") {
      if (e[s]?.type !== "colon")
        return { kind: "scheme-colon" };
      o = "body-start", u = !0, s += 1;
      continue;
    }
    if (o === "body-start") {
      const m = e[s];
      if (m.type === "word" && m.value === "end") {
        o = "top-level", u = !1, c = !1, s += 1;
        continue;
      }
      if (u && m.type === "word" && m.value === "local") {
        o = "local-name", u = !1, c = !1, s += 1;
        continue;
      }
      o = "statement-input-list";
      continue;
    }
    if (o === "local-name") {
      const m = e[s];
      if (m.type === "word" && m.value !== "end") {
        c = !0, s += 1;
        continue;
      }
      if (m.type === "lparen") {
        o = "statement-input-list";
        continue;
      }
      if (m.type === "word" && m.value === "end") {
        o = "top-level", c = !1, s += 1;
        continue;
      }
      return { kind: "local-name" };
    }
    if (o === "statement-input-list") {
      const m = du(e, s);
      if (m === null)
        return { kind: "statement-input-list" };
      o = "statement-callee", s = m;
      continue;
    }
    if (o === "statement-callee") {
      if (e[s]?.type !== "word")
        return { kind: "statement-callee" };
      o = "statement-output-list", s += 1;
      continue;
    }
    const h = du(e, s);
    if (h === null)
      return { kind: "statement-output-list" };
    o = "body-start", u = !1, s = h;
  }
}
function fR(l, t, e) {
  if (!e)
    return null;
  const i = Xm(l, t), s = aR(Km(l), i.from), o = cc(l, t), u = o.activeScheme?.start !== void 0 ? l.indexOf(":", o.activeScheme.start) : -1;
  return s?.type === "colon" && e.kind === "statement-input-list" ? { kind: "body-start", canDeclareLocal: !0 } : u !== -1 && i.from > u && e.kind === "scheme-input-list" ? { kind: "statement-input-list" } : e;
}
function hR(l, t) {
  const e = cc(l, t), i = [{ label: "scheme", type: "keyword", detail: "Start a new scheme definition" }];
  e.activeScheme && (i.push({ label: "(", type: "text", detail: "Start a signal list" }), i.push({ label: "end", type: "keyword", detail: "Finish the current scheme" }), i.push({ label: "local", type: "keyword", detail: "Declare local signals in this scheme" }));
  for (const s of uc)
    i.push({ label: s, type: "function", detail: "Built-in scheme" });
  for (const s of e.helperSchemeNames)
    i.push({ label: s, type: "function", detail: "Helper scheme from this file" });
  for (const s of e.visibleSignals)
    i.push({ label: s, type: "variable", detail: "Signal in the current scheme" });
  return Vx(i);
}
function dR(l, t) {
  if (Ux(l, t))
    return [];
  const e = cc(l, t), i = Xm(l, t), s = fR(l, t, cR(l, i.from)), o = [], u = (p, y) => {
    o.push({ label: p, type: "keyword", detail: y });
  }, c = (p, y) => {
    o.push({ label: p, type: "function", detail: y });
  }, h = (p, y) => {
    o.push({ label: p, type: "variable", detail: y });
  }, m = (p, y) => {
    o.push({ label: p, type: "text", detail: y });
  };
  if (!s)
    return [];
  if (s.kind === "top-level" && u("scheme", "Start a new scheme definition"), s.kind === "scheme-input-list" && m("(", "Start the input signal list"), s.kind === "scheme-output-list" && m("(", "Start the output signal list"), s.kind === "scheme-colon" && m(":", "Finish the scheme header"), s.kind === "body-start" && (m("(", "Start a statement"), u("end", "Finish the current scheme"), s.canDeclareLocal && u("local", "Declare local signals in this scheme")), s.kind === "statement-input-list") {
    m("(", "Start the input signal list");
    for (const p of e.visibleSignals)
      h(p, "Signal in the current scheme");
  }
  if (s.kind === "statement-callee") {
    for (const p of uc)
      c(p, "Built-in scheme");
    for (const p of e.helperSchemeNames)
      c(p, "Helper scheme from this file");
  }
  if (s.kind === "statement-output-list") {
    m("(", "Start the output signal list");
    const p = e.activeScheme ? [...e.activeScheme.outputs, ...e.activeScheme.locals] : [];
    for (const y of Array.from(new Set(p)))
      h(y, "Writable signal in the current scheme");
  }
  return Vx(o);
}
function qv(l) {
  return {
    label: l.label,
    type: l.type,
    detail: l.detail
  };
}
function mR(l) {
  if (Ux(l.state.doc.toString(), l.pos))
    return null;
  const t = l.state.doc.toString(), e = Xm(t, l.pos);
  let i = dR(t, l.pos).filter((s) => s.label.startsWith(e.text)).map(qv);
  return i.length === 0 && l.explicit && (i = hR(t, l.pos).filter((s) => s.label.startsWith(e.text)).map(qv)), i.length === 0 && !l.explicit ? null : {
    from: e.from,
    options: i,
    validFor: /^\w*$/
  };
}
function pR() {
  return [
    P.baseTheme({
      ".cm-scheme-keyword": { color: "#0f766e", fontWeight: "700" },
      ".cm-scheme-builtin": { color: "#1d4ed8", fontWeight: "600" },
      ".cm-scheme-helper": { color: "#7c3aed", fontWeight: "600" },
      ".cm-scheme-signal": { color: "#b45309" },
      ".cm-scheme-punctuation": { color: "#475569" },
      ".cm-scheme-identifier": { color: "#111827" },
      ".cm-scheme-comment": { color: "#64748b", fontStyle: "italic" }
    }),
    oR,
    tl.highest(
      Co.of([
        { key: "Tab", run: Cx },
        { key: "Enter", run: nm }
      ])
    ),
    Dx({ interactionDelay: 0, override: [mR] })
  ];
}
function jv(l, t, e) {
  if (!e)
    return t;
  try {
    return window.localStorage.getItem(l) ?? t;
  } catch {
    return t;
  }
}
function gR(l, t, e) {
  if (e)
    try {
      window.localStorage.setItem(l, t);
    } catch {
    }
}
function yR(l, t) {
  if (t)
    try {
      window.localStorage.removeItem(l);
    } catch {
    }
}
function vR(l, t, e) {
  return `Line ${l}, column ${t}: ${e}`;
}
function Yv(l, t) {
  return Object.fromEntries(l.map((e) => [e, t[e] ?? 0]));
}
function bR({ initialSource: l, storageKey: t, persist: e, readOnly: i, onSourceChange: s }) {
  const [o, u] = Pt.useState(() => jv(t, l, e)), [c, h] = Pt.useState([{}]), m = Pt.useMemo(() => rm(o), [o]), p = Pt.useMemo(
    () => m.isValid ? c.map((O) => iR(o, O)) : [],
    [m.isValid, o, c]
  ), y = Pt.useMemo(() => [...pR(), P.lineWrapping], []);
  Pt.useEffect(() => {
    u(jv(t, l, e));
  }, [l, e, t]), Pt.useEffect(() => {
    h((O) => O.map((H) => Yv(m.inputs, H)));
  }, [m.inputs]);
  const v = (O) => {
    u(O), gR(t, O, e), s(O, rm(O).isValid);
  }, S = () => {
    yR(t, e), v(l);
  }, w = () => {
    h((O) => [...O, Yv(m.inputs, {})]);
  }, A = (O) => {
    h((H) => H.filter((z, Q) => Q !== O));
  }, M = (O, H) => {
    h(
      (z) => z.map(
        (Q, _) => _ === O ? { ...Q, [H]: Q[H] === 1 ? 0 : 1 } : Q
      )
    );
  };
  return /* @__PURE__ */ St.jsxs("section", { className: "schemio-playground", "aria-label": "Schemio playground", children: [
    /* @__PURE__ */ St.jsxs("header", { className: "schemio-playground__header", children: [
      /* @__PURE__ */ St.jsxs("div", { children: [
        /* @__PURE__ */ St.jsx("h2", { children: "Schemio playground" }),
        /* @__PURE__ */ St.jsx("p", { children: "The first scheme is the main scheme. Change inputs to see outputs immediately." })
      ] }),
      i ? null : /* @__PURE__ */ St.jsx("button", { className: "schemio-playground__reset", onClick: S, type: "button", children: "Reset saved code" })
    ] }),
    /* @__PURE__ */ St.jsx("div", { className: "schemio-playground__editor", children: /* @__PURE__ */ St.jsx(
      zx,
      {
        "aria-label": "Schemio code editor",
        basicSetup: { foldGutter: !1, highlightActiveLine: !0 },
        editable: !i,
        extensions: y,
        minHeight: "4.8rem",
        onChange: v,
        value: o
      }
    ) }),
    m.diagnostics.length > 0 ? /* @__PURE__ */ St.jsxs("section", { className: "schemio-playground__diagnostics", "aria-live": "polite", children: [
      /* @__PURE__ */ St.jsx("h3", { children: "Diagnostics" }),
      /* @__PURE__ */ St.jsx("ul", { children: m.diagnostics.map((O, H) => /* @__PURE__ */ St.jsx("li", { children: vR(O.line, O.column, O.message) }, `${O.line}:${O.column}:${H}`)) })
    ] }) : null,
    /* @__PURE__ */ St.jsxs("section", { className: "schemio-playground__debugger", children: [
      /* @__PURE__ */ St.jsxs("div", { className: "schemio-playground__debugger-title", children: [
        /* @__PURE__ */ St.jsx("h3", { children: "Live debugger" }),
        /* @__PURE__ */ St.jsx("p", { children: m.mainSchemeName ? `Main scheme: ${m.mainSchemeName}` : "Main scheme is not available yet." })
      ] }),
      m.isValid ? /* @__PURE__ */ St.jsxs(St.Fragment, { children: [
        /* @__PURE__ */ St.jsxs("div", { className: "schemio-playground__test-actions", children: [
          /* @__PURE__ */ St.jsx("h4", { children: "Test cases" }),
          /* @__PURE__ */ St.jsx("button", { className: "schemio-playground__add-test", onClick: w, type: "button", children: "Add test" })
        ] }),
        /* @__PURE__ */ St.jsxs("div", { className: "schemio-playground__test-header", "aria-hidden": "true", children: [
          /* @__PURE__ */ St.jsx("span", { children: "Test" }),
          /* @__PURE__ */ St.jsx("span", { children: "Inputs" }),
          /* @__PURE__ */ St.jsx("span", { children: "Outputs" })
        ] }),
        /* @__PURE__ */ St.jsx("div", { className: "schemio-playground__test-list", children: c.map((O, H) => /* @__PURE__ */ St.jsxs("div", { className: "schemio-playground__test-case", children: [
          /* @__PURE__ */ St.jsxs("span", { className: "schemio-playground__test-number", children: [
            "Test ",
            H + 1
          ] }),
          /* @__PURE__ */ St.jsx("div", { className: "schemio-playground__signal-list", "aria-label": `Test ${H + 1} inputs`, children: m.inputs.map((z) => /* @__PURE__ */ St.jsxs(
            "button",
            {
              "aria-label": `Test ${H + 1}: ${z} ${O[z] ?? 0}`,
              className: O[z] === 1 ? "schemio-playground__bit schemio-playground__bit--on" : "schemio-playground__bit",
              onClick: () => M(H, z),
              type: "button",
              children: [
                /* @__PURE__ */ St.jsx("span", { children: z }),
                /* @__PURE__ */ St.jsx("strong", { children: O[z] ?? 0 })
              ]
            },
            z
          )) }),
          /* @__PURE__ */ St.jsx("div", { className: "schemio-playground__signal-list", "aria-label": `Test ${H + 1} outputs`, children: m.outputs.map((z) => /* @__PURE__ */ St.jsxs(
            "div",
            {
              "aria-label": `Test ${H + 1}: ${z} ${p[H]?.outputs[z] ?? 0}`,
              className: "schemio-playground__bit schemio-playground__output",
              children: [
                /* @__PURE__ */ St.jsx("span", { children: z }),
                /* @__PURE__ */ St.jsx("strong", { children: p[H]?.outputs[z] ?? 0 })
              ]
            },
            z
          )) }),
          c.length > 1 ? /* @__PURE__ */ St.jsx("button", { "aria-label": `Remove test ${H + 1}`, className: "schemio-playground__remove-test", onClick: () => A(H), type: "button", children: "Remove" }) : null
        ] }, H)) })
      ] }) : /* @__PURE__ */ St.jsx("p", { className: "schemio-playground__blocked", children: "Fix the errors before the debugger can run." })
    ] })
  ] });
}
function wR(l, t) {
  const e = yA.createRoot(l);
  return e.render(/* @__PURE__ */ St.jsx(bR, { ...t })), { unmount: () => e.unmount() };
}
export {
  wR as mountSchemioPlayground
};
