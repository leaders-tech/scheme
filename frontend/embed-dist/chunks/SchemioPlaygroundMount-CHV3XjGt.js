var Rh = { exports: {} }, Vr = {};
var Xy;
function yA() {
  if (Xy) return Vr;
  Xy = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function e(i, s, a) {
    var u = null;
    if (a !== void 0 && (u = "" + a), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      a = {};
      for (var c in s)
        c !== "key" && (a[c] = s[c]);
    } else a = s;
    return s = a.ref, {
      $$typeof: l,
      type: i,
      key: u,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Vr.Fragment = t, Vr.jsx = e, Vr.jsxs = e, Vr;
}
var Wy;
function vA() {
  return Wy || (Wy = 1, Rh.exports = yA()), Rh.exports;
}
var Z = vA(), Bh = { exports: {} }, qr = {}, Nh = { exports: {} }, Lh = {};
var Ky;
function bA() {
  return Ky || (Ky = 1, (function(l) {
    function t(H, Q) {
      var lt = H.length;
      H.push(Q);
      t: for (; 0 < lt; ) {
        var ut = lt - 1 >>> 1, M = H[ut];
        if (0 < s(M, Q))
          H[ut] = Q, H[lt] = M, lt = ut;
        else break t;
      }
    }
    function e(H) {
      return H.length === 0 ? null : H[0];
    }
    function i(H) {
      if (H.length === 0) return null;
      var Q = H[0], lt = H.pop();
      if (lt !== Q) {
        H[0] = lt;
        t: for (var ut = 0, M = H.length, G = M >>> 1; ut < G; ) {
          var P = 2 * (ut + 1) - 1, J = H[P], rt = P + 1, xt = H[rt];
          if (0 > s(J, lt))
            rt < M && 0 > s(xt, J) ? (H[ut] = xt, H[rt] = lt, ut = rt) : (H[ut] = J, H[P] = lt, ut = P);
          else if (rt < M && 0 > s(xt, lt))
            H[ut] = xt, H[rt] = lt, ut = rt;
          else break t;
        }
      }
      return Q;
    }
    function s(H, Q) {
      var lt = H.sortIndex - Q.sortIndex;
      return lt !== 0 ? lt : H.id - Q.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var a = performance;
      l.unstable_now = function() {
        return a.now();
      };
    } else {
      var u = Date, c = u.now();
      l.unstable_now = function() {
        return u.now() - c;
      };
    }
    var h = [], m = [], p = 1, y = null, v = 3, S = !1, w = !1, A = !1, k = !1, E = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function Y(H) {
      for (var Q = e(m); Q !== null; ) {
        if (Q.callback === null) i(m);
        else if (Q.startTime <= H)
          i(m), Q.sortIndex = Q.expirationTime, t(h, Q);
        else break;
        Q = e(m);
      }
    }
    function T(H) {
      if (A = !1, Y(H), !w)
        if (e(h) !== null)
          w = !0, R || (R = !0, et());
        else {
          var Q = e(m);
          Q !== null && vt(T, Q.startTime - H);
        }
    }
    var R = !1, U = -1, I = 5, F = -1;
    function ct() {
      return k ? !0 : !(l.unstable_now() - F < I);
    }
    function at() {
      if (k = !1, R) {
        var H = l.unstable_now();
        F = H;
        var Q = !0;
        try {
          t: {
            w = !1, A && (A = !1, _(U), U = -1), S = !0;
            var lt = v;
            try {
              e: {
                for (Y(H), y = e(h); y !== null && !(y.expirationTime > H && ct()); ) {
                  var ut = y.callback;
                  if (typeof ut == "function") {
                    y.callback = null, v = y.priorityLevel;
                    var M = ut(
                      y.expirationTime <= H
                    );
                    if (H = l.unstable_now(), typeof M == "function") {
                      y.callback = M, Y(H), Q = !0;
                      break e;
                    }
                    y === e(h) && i(h), Y(H);
                  } else i(h);
                  y = e(h);
                }
                if (y !== null) Q = !0;
                else {
                  var G = e(m);
                  G !== null && vt(
                    T,
                    G.startTime - H
                  ), Q = !1;
                }
              }
              break t;
            } finally {
              y = null, v = lt, S = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? et() : R = !1;
        }
      }
    }
    var et;
    if (typeof V == "function")
      et = function() {
        V(at);
      };
    else if (typeof MessageChannel < "u") {
      var dt = new MessageChannel(), yt = dt.port2;
      dt.port1.onmessage = at, et = function() {
        yt.postMessage(null);
      };
    } else
      et = function() {
        E(at, 0);
      };
    function vt(H, Q) {
      U = E(function() {
        H(l.unstable_now());
      }, Q);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, l.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < H ? Math.floor(1e3 / H) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, l.unstable_next = function(H) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = v;
      }
      var lt = v;
      v = Q;
      try {
        return H();
      } finally {
        v = lt;
      }
    }, l.unstable_requestPaint = function() {
      k = !0;
    }, l.unstable_runWithPriority = function(H, Q) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var lt = v;
      v = H;
      try {
        return Q();
      } finally {
        v = lt;
      }
    }, l.unstable_scheduleCallback = function(H, Q, lt) {
      var ut = l.unstable_now();
      switch (typeof lt == "object" && lt !== null ? (lt = lt.delay, lt = typeof lt == "number" && 0 < lt ? ut + lt : ut) : lt = ut, H) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = lt + M, H = {
        id: p++,
        callback: Q,
        priorityLevel: H,
        startTime: lt,
        expirationTime: M,
        sortIndex: -1
      }, lt > ut ? (H.sortIndex = lt, t(m, H), e(h) === null && H === e(m) && (A ? (_(U), U = -1) : A = !0, vt(T, lt - ut))) : (H.sortIndex = M, t(h, H), w || S || (w = !0, R || (R = !0, et()))), H;
    }, l.unstable_shouldYield = ct, l.unstable_wrapCallback = function(H) {
      var Q = v;
      return function() {
        var lt = v;
        v = Q;
        try {
          return H.apply(this, arguments);
        } finally {
          v = lt;
        }
      };
    };
  })(Lh)), Lh;
}
var Qy;
function SA() {
  return Qy || (Qy = 1, Nh.exports = bA()), Nh.exports;
}
var zh = { exports: {} }, St = {};
var Zy;
function xA() {
  if (Zy) return St;
  Zy = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), e = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.consumer"), u = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function v(M) {
    return M === null || typeof M != "object" ? null : (M = y && M[y] || M["@@iterator"], typeof M == "function" ? M : null);
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
  function k(M, G, P) {
    this.props = M, this.context = G, this.refs = A, this.updater = P || S;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(M, G) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, G, "setState");
  }, k.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function E() {
  }
  E.prototype = k.prototype;
  function _(M, G, P) {
    this.props = M, this.context = G, this.refs = A, this.updater = P || S;
  }
  var V = _.prototype = new E();
  V.constructor = _, w(V, k.prototype), V.isPureReactComponent = !0;
  var Y = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, R = Object.prototype.hasOwnProperty;
  function U(M, G, P, J, rt, xt) {
    return P = xt.ref, {
      $$typeof: l,
      type: M,
      key: G,
      ref: P !== void 0 ? P : null,
      props: xt
    };
  }
  function I(M, G) {
    return U(
      M.type,
      G,
      void 0,
      void 0,
      void 0,
      M.props
    );
  }
  function F(M) {
    return typeof M == "object" && M !== null && M.$$typeof === l;
  }
  function ct(M) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(P) {
      return G[P];
    });
  }
  var at = /\/+/g;
  function et(M, G) {
    return typeof M == "object" && M !== null && M.key != null ? ct("" + M.key) : G.toString(36);
  }
  function dt() {
  }
  function yt(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(dt, dt) : (M.status = "pending", M.then(
          function(G) {
            M.status === "pending" && (M.status = "fulfilled", M.value = G);
          },
          function(G) {
            M.status === "pending" && (M.status = "rejected", M.reason = G);
          }
        )), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function vt(M, G, P, J, rt) {
    var xt = typeof M;
    (xt === "undefined" || xt === "boolean") && (M = null);
    var pt = !1;
    if (M === null) pt = !0;
    else
      switch (xt) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case l:
            case t:
              pt = !0;
              break;
            case p:
              return pt = M._init, vt(
                pt(M._payload),
                G,
                P,
                J,
                rt
              );
          }
      }
    if (pt)
      return rt = rt(M), pt = J === "" ? "." + et(M, 0) : J, Y(rt) ? (P = "", pt != null && (P = pt.replace(at, "$&/") + "/"), vt(rt, G, P, "", function(gn) {
        return gn;
      })) : rt != null && (F(rt) && (rt = I(
        rt,
        P + (rt.key == null || M && M.key === rt.key ? "" : ("" + rt.key).replace(
          at,
          "$&/"
        ) + "/") + pt
      )), G.push(rt)), 1;
    pt = 0;
    var we = J === "" ? "." : J + ":";
    if (Y(M))
      for (var Wt = 0; Wt < M.length; Wt++)
        J = M[Wt], xt = we + et(J, Wt), pt += vt(
          J,
          G,
          P,
          xt,
          rt
        );
    else if (Wt = v(M), typeof Wt == "function")
      for (M = Wt.call(M), Wt = 0; !(J = M.next()).done; )
        J = J.value, xt = we + et(J, Wt++), pt += vt(
          J,
          G,
          P,
          xt,
          rt
        );
    else if (xt === "object") {
      if (typeof M.then == "function")
        return vt(
          yt(M),
          G,
          P,
          J,
          rt
        );
      throw G = String(M), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pt;
  }
  function H(M, G, P) {
    if (M == null) return M;
    var J = [], rt = 0;
    return vt(M, J, "", "", function(xt) {
      return G.call(P, xt, rt++);
    }), J;
  }
  function Q(M) {
    if (M._status === -1) {
      var G = M._result;
      G = G(), G.then(
        function(P) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = P);
        },
        function(P) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = P);
        }
      ), M._status === -1 && (M._status = 0, M._result = G);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var lt = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function ut() {
  }
  return St.Children = {
    map: H,
    forEach: function(M, G, P) {
      H(
        M,
        function() {
          G.apply(this, arguments);
        },
        P
      );
    },
    count: function(M) {
      var G = 0;
      return H(M, function() {
        G++;
      }), G;
    },
    toArray: function(M) {
      return H(M, function(G) {
        return G;
      }) || [];
    },
    only: function(M) {
      if (!F(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  }, St.Component = k, St.Fragment = e, St.Profiler = s, St.PureComponent = _, St.StrictMode = i, St.Suspense = h, St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, St.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return T.H.useMemoCache(M);
    }
  }, St.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, St.cloneElement = function(M, G, P) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var J = w({}, M.props), rt = M.key, xt = void 0;
    if (G != null)
      for (pt in G.ref !== void 0 && (xt = void 0), G.key !== void 0 && (rt = "" + G.key), G)
        !R.call(G, pt) || pt === "key" || pt === "__self" || pt === "__source" || pt === "ref" && G.ref === void 0 || (J[pt] = G[pt]);
    var pt = arguments.length - 2;
    if (pt === 1) J.children = P;
    else if (1 < pt) {
      for (var we = Array(pt), Wt = 0; Wt < pt; Wt++)
        we[Wt] = arguments[Wt + 2];
      J.children = we;
    }
    return U(M.type, rt, void 0, void 0, xt, J);
  }, St.createContext = function(M) {
    return M = {
      $$typeof: u,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: a,
      _context: M
    }, M;
  }, St.createElement = function(M, G, P) {
    var J, rt = {}, xt = null;
    if (G != null)
      for (J in G.key !== void 0 && (xt = "" + G.key), G)
        R.call(G, J) && J !== "key" && J !== "__self" && J !== "__source" && (rt[J] = G[J]);
    var pt = arguments.length - 2;
    if (pt === 1) rt.children = P;
    else if (1 < pt) {
      for (var we = Array(pt), Wt = 0; Wt < pt; Wt++)
        we[Wt] = arguments[Wt + 2];
      rt.children = we;
    }
    if (M && M.defaultProps)
      for (J in pt = M.defaultProps, pt)
        rt[J] === void 0 && (rt[J] = pt[J]);
    return U(M, xt, void 0, void 0, null, rt);
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(M) {
    return { $$typeof: c, render: M };
  }, St.isValidElement = F, St.lazy = function(M) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: M },
      _init: Q
    };
  }, St.memo = function(M, G) {
    return {
      $$typeof: m,
      type: M,
      compare: G === void 0 ? null : G
    };
  }, St.startTransition = function(M) {
    var G = T.T, P = {};
    T.T = P;
    try {
      var J = M(), rt = T.S;
      rt !== null && rt(P, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ut, lt);
    } catch (xt) {
      lt(xt);
    } finally {
      T.T = G;
    }
  }, St.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, St.use = function(M) {
    return T.H.use(M);
  }, St.useActionState = function(M, G, P) {
    return T.H.useActionState(M, G, P);
  }, St.useCallback = function(M, G) {
    return T.H.useCallback(M, G);
  }, St.useContext = function(M) {
    return T.H.useContext(M);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(M, G) {
    return T.H.useDeferredValue(M, G);
  }, St.useEffect = function(M, G, P) {
    var J = T.H;
    if (typeof P == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return J.useEffect(M, G);
  }, St.useId = function() {
    return T.H.useId();
  }, St.useImperativeHandle = function(M, G, P) {
    return T.H.useImperativeHandle(M, G, P);
  }, St.useInsertionEffect = function(M, G) {
    return T.H.useInsertionEffect(M, G);
  }, St.useLayoutEffect = function(M, G) {
    return T.H.useLayoutEffect(M, G);
  }, St.useMemo = function(M, G) {
    return T.H.useMemo(M, G);
  }, St.useOptimistic = function(M, G) {
    return T.H.useOptimistic(M, G);
  }, St.useReducer = function(M, G, P) {
    return T.H.useReducer(M, G, P);
  }, St.useRef = function(M) {
    return T.H.useRef(M);
  }, St.useState = function(M) {
    return T.H.useState(M);
  }, St.useSyncExternalStore = function(M, G, P) {
    return T.H.useSyncExternalStore(
      M,
      G,
      P
    );
  }, St.useTransition = function() {
    return T.H.useTransition();
  }, St.version = "19.1.1", St;
}
var Iy;
function dm() {
  return Iy || (Iy = 1, zh.exports = xA()), zh.exports;
}
var Hh = { exports: {} }, ke = {};
var Fy;
function wA() {
  if (Fy) return ke;
  Fy = 1;
  var l = dm();
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
  function a(h, m, p) {
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
    return a(h, m, null, p);
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
var Py;
function AA() {
  if (Py) return Hh.exports;
  Py = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), Hh.exports = wA(), Hh.exports;
}
var Jy;
function CA() {
  if (Jy) return qr;
  Jy = 1;
  var l = SA(), t = dm(), e = AA();
  function i(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++)
        r += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function a(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function u(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function c(n) {
    if (a(n) !== n)
      throw Error(i(188));
  }
  function h(n) {
    var r = n.alternate;
    if (!r) {
      if (r = a(n), r === null) throw Error(i(188));
      return r !== n ? null : n;
    }
    for (var o = n, f = r; ; ) {
      var d = o.return;
      if (d === null) break;
      var g = d.alternate;
      if (g === null) {
        if (f = d.return, f !== null) {
          o = f;
          continue;
        }
        break;
      }
      if (d.child === g.child) {
        for (g = d.child; g; ) {
          if (g === o) return c(d), n;
          if (g === f) return c(d), r;
          g = g.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== f.return) o = d, f = g;
      else {
        for (var b = !1, x = d.child; x; ) {
          if (x === o) {
            b = !0, o = d, f = g;
            break;
          }
          if (x === f) {
            b = !0, f = d, o = g;
            break;
          }
          x = x.sibling;
        }
        if (!b) {
          for (x = g.child; x; ) {
            if (x === o) {
              b = !0, o = g, f = d;
              break;
            }
            if (x === f) {
              b = !0, f = g, o = d;
              break;
            }
            x = x.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (o.alternate !== f) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? n : r;
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
  var p = Object.assign, y = /* @__PURE__ */ Symbol.for("react.element"), v = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), ct = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
  function et(n) {
    return n === null || typeof n != "object" ? null : (n = at && n[at] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var dt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function yt(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === dt ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case w:
        return "Fragment";
      case k:
        return "Profiler";
      case A:
        return "StrictMode";
      case T:
        return "Suspense";
      case R:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case S:
          return "Portal";
        case V:
          return (n.displayName || "Context") + ".Provider";
        case _:
          return (n._context.displayName || "Context") + ".Consumer";
        case Y:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case U:
          return r = n.displayName || null, r !== null ? r : yt(n.type) || "Memo";
        case I:
          r = n._payload, n = n._init;
          try {
            return yt(n(r));
          } catch {
          }
      }
    return null;
  }
  var vt = Array.isArray, H = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ut = [], M = -1;
  function G(n) {
    return { current: n };
  }
  function P(n) {
    0 > M || (n.current = ut[M], ut[M] = null, M--);
  }
  function J(n, r) {
    M++, ut[M] = n.current, n.current = r;
  }
  var rt = G(null), xt = G(null), pt = G(null), we = G(null);
  function Wt(n, r) {
    switch (J(pt, r), J(xt, n), J(rt, null), r.nodeType) {
      case 9:
      case 11:
        n = (n = r.documentElement) && (n = n.namespaceURI) ? vy(n) : 0;
        break;
      default:
        if (n = r.tagName, r = r.namespaceURI)
          r = vy(r), n = by(r, n);
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
    P(rt), J(rt, n);
  }
  function gn() {
    P(rt), P(xt), P(pt);
  }
  function pc(n) {
    n.memoizedState !== null && J(we, n);
    var r = rt.current, o = by(r, n.type);
    r !== o && (J(xt, n), J(rt, o));
  }
  function Da(n) {
    xt.current === n && (P(rt), P(xt)), we.current === n && (P(we), Lr._currentValue = lt);
  }
  var gc = Object.prototype.hasOwnProperty, yc = l.unstable_scheduleCallback, vc = l.unstable_cancelCallback, Ix = l.unstable_shouldYield, Fx = l.unstable_requestPaint, Oi = l.unstable_now, Px = l.unstable_getCurrentPriorityLevel, Jm = l.unstable_ImmediatePriority, $m = l.unstable_UserBlockingPriority, Ea = l.unstable_NormalPriority, Jx = l.unstable_LowPriority, tp = l.unstable_IdlePriority, $x = l.log, tw = l.unstable_setDisableYieldValue, Ys = null, We = null;
  function yn(n) {
    if (typeof $x == "function" && tw(n), We && typeof We.setStrictMode == "function")
      try {
        We.setStrictMode(Ys, n);
      } catch {
      }
  }
  var Ke = Math.clz32 ? Math.clz32 : nw, ew = Math.log, iw = Math.LN2;
  function nw(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ew(n) / iw | 0) | 0;
  }
  var Ra = 256, Ba = 4194304;
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
  function Na(n, r, o) {
    var f = n.pendingLanes;
    if (f === 0) return 0;
    var d = 0, g = n.suspendedLanes, b = n.pingedLanes;
    n = n.warmLanes;
    var x = f & 134217727;
    return x !== 0 ? (f = x & ~g, f !== 0 ? d = il(f) : (b &= x, b !== 0 ? d = il(b) : o || (o = x & ~n, o !== 0 && (d = il(o))))) : (x = f & ~g, x !== 0 ? d = il(x) : b !== 0 ? d = il(b) : o || (o = f & ~n, o !== 0 && (d = il(o)))), d === 0 ? 0 : r !== 0 && r !== d && (r & g) === 0 && (g = d & -d, o = r & -r, g >= o || g === 32 && (o & 4194048) !== 0) ? r : d;
  }
  function Gs(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function lw(n, r) {
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
  function ep() {
    var n = Ra;
    return Ra <<= 1, (Ra & 4194048) === 0 && (Ra = 256), n;
  }
  function ip() {
    var n = Ba;
    return Ba <<= 1, (Ba & 62914560) === 0 && (Ba = 4194304), n;
  }
  function bc(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Xs(n, r) {
    n.pendingLanes |= r, r !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
  }
  function sw(n, r, o, f, d, g) {
    var b = n.pendingLanes;
    n.pendingLanes = o, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= o, n.entangledLanes &= o, n.errorRecoveryDisabledLanes &= o, n.shellSuspendCounter = 0;
    var x = n.entanglements, C = n.expirationTimes, N = n.hiddenUpdates;
    for (o = b & ~o; 0 < o; ) {
      var q = 31 - Ke(o), K = 1 << q;
      x[q] = 0, C[q] = -1;
      var L = N[q];
      if (L !== null)
        for (N[q] = null, q = 0; q < L.length; q++) {
          var z = L[q];
          z !== null && (z.lane &= -536870913);
        }
      o &= ~K;
    }
    f !== 0 && np(n, f, 0), g !== 0 && d === 0 && n.tag !== 0 && (n.suspendedLanes |= g & ~(b & ~r));
  }
  function np(n, r, o) {
    n.pendingLanes |= r, n.suspendedLanes &= ~r;
    var f = 31 - Ke(r);
    n.entangledLanes |= r, n.entanglements[f] = n.entanglements[f] | 1073741824 | o & 4194090;
  }
  function lp(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var f = 31 - Ke(o), d = 1 << f;
      d & r | n[f] & r && (n[f] |= r), o &= ~d;
    }
  }
  function Sc(n) {
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
  function xc(n) {
    return n &= -n, 2 < n ? 8 < n ? (n & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function sp() {
    var n = Q.p;
    return n !== 0 ? n : (n = window.event, n === void 0 ? 32 : Uy(n.type));
  }
  function rw(n, r) {
    var o = Q.p;
    try {
      return Q.p = n, r();
    } finally {
      Q.p = o;
    }
  }
  var vn = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + vn, Le = "__reactProps$" + vn, Ll = "__reactContainer$" + vn, wc = "__reactEvents$" + vn, aw = "__reactListeners$" + vn, ow = "__reactHandles$" + vn, rp = "__reactResources$" + vn, Ws = "__reactMarker$" + vn;
  function Ac(n) {
    delete n[Ae], delete n[Le], delete n[wc], delete n[aw], delete n[ow];
  }
  function zl(n) {
    var r = n[Ae];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ll] || o[Ae]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ay(n); n !== null; ) {
            if (o = n[Ae]) return o;
            n = Ay(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
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
  function Ks(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(i(33));
  }
  function _l(n) {
    var r = n[rp];
    return r || (r = n[rp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), r;
  }
  function ue(n) {
    n[Ws] = !0;
  }
  var ap = /* @__PURE__ */ new Set(), op = {};
  function nl(n, r) {
    Ul(n, r), Ul(n + "Capture", r);
  }
  function Ul(n, r) {
    for (op[n] = r, n = 0; n < r.length; n++)
      ap.add(r[n]);
  }
  var uw = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), up = {}, cp = {};
  function cw(n) {
    return gc.call(cp, n) ? !0 : gc.call(up, n) ? !1 : uw.test(n) ? cp[n] = !0 : (up[n] = !0, !1);
  }
  function La(n, r, o) {
    if (cw(r))
      if (o === null) n.removeAttribute(r);
      else {
        switch (typeof o) {
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
        n.setAttribute(r, "" + o);
      }
  }
  function za(n, r, o) {
    if (o === null) n.removeAttribute(r);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + o);
    }
  }
  function Fi(n, r, o, f) {
    if (f === null) n.removeAttribute(o);
    else {
      switch (typeof f) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(o);
          return;
      }
      n.setAttributeNS(r, o, "" + f);
    }
  }
  var Cc, fp;
  function Vl(n) {
    if (Cc === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Cc = r && r[1] || "", fp = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Cc + n + fp;
  }
  var kc = !1;
  function Mc(n, r) {
    if (!n || kc) return "";
    kc = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var f = {
        DetermineComponentFrameRoot: function() {
          try {
            if (r) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (z) {
                  var L = z;
                }
                Reflect.construct(n, [], K);
              } else {
                try {
                  K.call();
                } catch (z) {
                  L = z;
                }
                n.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                L = z;
              }
              (K = n()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (z) {
            if (z && L && typeof z.stack == "string")
              return [z.stack, L.stack];
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
`), N = x.split(`
`);
        for (d = f = 0; f < C.length && !C[f].includes("DetermineComponentFrameRoot"); )
          f++;
        for (; d < N.length && !N[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (f === C.length || d === N.length)
          for (f = C.length - 1, d = N.length - 1; 1 <= f && 0 <= d && C[f] !== N[d]; )
            d--;
        for (; 1 <= f && 0 <= d; f--, d--)
          if (C[f] !== N[d]) {
            if (f !== 1 || d !== 1)
              do
                if (f--, d--, 0 > d || C[f] !== N[d]) {
                  var q = `
` + C[f].replace(" at new ", " at ");
                  return n.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", n.displayName)), q;
                }
              while (1 <= f && 0 <= d);
            break;
          }
      }
    } finally {
      kc = !1, Error.prepareStackTrace = o;
    }
    return (o = n ? n.displayName || n.name : "") ? Vl(o) : "";
  }
  function fw(n) {
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
        return Mc(n.type, !1);
      case 11:
        return Mc(n.type.render, !1);
      case 1:
        return Mc(n.type, !0);
      case 31:
        return Vl("Activity");
      default:
        return "";
    }
  }
  function hp(n) {
    try {
      var r = "";
      do
        r += fw(n), n = n.return;
      while (n);
      return r;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
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
  function dp(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function hw(n) {
    var r = dp(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(
      n.constructor.prototype,
      r
    ), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var d = o.get, g = o.set;
      return Object.defineProperty(n, r, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(b) {
          f = "" + b, g.call(this, b);
        }
      }), Object.defineProperty(n, r, {
        enumerable: o.enumerable
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
  function Ha(n) {
    n._valueTracker || (n._valueTracker = hw(n));
  }
  function mp(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), f = "";
    return n && (f = dp(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== o ? (r.setValue(n), !0) : !1;
  }
  function _a(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var dw = /[\n"\\]/g;
  function li(n) {
    return n.replace(
      dw,
      function(r) {
        return "\\" + r.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tc(n, r, o, f, d, g, b, x) {
    n.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? n.type = b : n.removeAttribute("type"), r != null ? b === "number" ? (r === 0 && n.value === "" || n.value != r) && (n.value = "" + ni(r)) : n.value !== "" + ni(r) && (n.value = "" + ni(r)) : b !== "submit" && b !== "reset" || n.removeAttribute("value"), r != null ? Oc(n, b, ni(r)) : o != null ? Oc(n, b, ni(o)) : f != null && n.removeAttribute("value"), d == null && g != null && (n.defaultChecked = !!g), d != null && (n.checked = d && typeof d != "function" && typeof d != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? n.name = "" + ni(x) : n.removeAttribute("name");
  }
  function pp(n, r, o, f, d, g, b, x) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (n.type = g), r != null || o != null) {
      if (!(g !== "submit" && g !== "reset" || r != null))
        return;
      o = o != null ? "" + ni(o) : "", r = r != null ? "" + ni(r) : o, x || r === n.value || (n.value = r), n.defaultValue = r;
    }
    f = f ?? d, f = typeof f != "function" && typeof f != "symbol" && !!f, n.checked = x ? n.checked : !!f, n.defaultChecked = !!f, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (n.name = b);
  }
  function Oc(n, r, o) {
    r === "number" && _a(n.ownerDocument) === n || n.defaultValue === "" + o || (n.defaultValue = "" + o);
  }
  function ql(n, r, o, f) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < o.length; d++)
        r["$" + o[d]] = !0;
      for (o = 0; o < n.length; o++)
        d = r.hasOwnProperty("$" + n[o].value), n[o].selected !== d && (n[o].selected = d), d && f && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ni(o), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === o) {
          n[d].selected = !0, f && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function gp(n, r, o) {
    if (r != null && (r = "" + ni(r), r !== n.value && (n.value = r), o == null)) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = o != null ? "" + ni(o) : "";
  }
  function yp(n, r, o, f) {
    if (r == null) {
      if (f != null) {
        if (o != null) throw Error(i(92));
        if (vt(f)) {
          if (1 < f.length) throw Error(i(93));
          f = f[0];
        }
        o = f;
      }
      o == null && (o = ""), r = o;
    }
    o = ni(r), n.defaultValue = o, f = n.textContent, f === o && f !== "" && f !== null && (n.value = f);
  }
  function jl(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var mw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vp(n, r, o) {
    var f = r.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? f ? n.setProperty(r, "") : r === "float" ? n.cssFloat = "" : n[r] = "" : f ? n.setProperty(r, o) : typeof o != "number" || o === 0 || mw.has(r) ? r === "float" ? n.cssFloat = o : n[r] = ("" + o).trim() : n[r] = o + "px";
  }
  function bp(n, r, o) {
    if (r != null && typeof r != "object")
      throw Error(i(62));
    if (n = n.style, o != null) {
      for (var f in o)
        !o.hasOwnProperty(f) || r != null && r.hasOwnProperty(f) || (f.indexOf("--") === 0 ? n.setProperty(f, "") : f === "float" ? n.cssFloat = "" : n[f] = "");
      for (var d in r)
        f = r[d], r.hasOwnProperty(d) && o[d] !== f && vp(n, d, f);
    } else
      for (var g in r)
        r.hasOwnProperty(g) && vp(n, g, r[g]);
  }
  function Dc(n) {
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
  var pw = /* @__PURE__ */ new Map([
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
  ]), gw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ua(n) {
    return gw.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
  }
  var Ec = null;
  function Rc(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yl = null, Gl = null;
  function Sp(n) {
    var r = Hl(n);
    if (r && (n = r.stateNode)) {
      var o = n[Le] || null;
      t: switch (n = r.stateNode, r.type) {
        case "input":
          if (Tc(
            n,
            o.value,
            o.defaultValue,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name
          ), r = o.name, o.type === "radio" && r != null) {
            for (o = n; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll(
              'input[name="' + li(
                "" + r
              ) + '"][type="radio"]'
            ), r = 0; r < o.length; r++) {
              var f = o[r];
              if (f !== n && f.form === n.form) {
                var d = f[Le] || null;
                if (!d) throw Error(i(90));
                Tc(
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
            for (r = 0; r < o.length; r++)
              f = o[r], f.form === n.form && mp(f);
          }
          break t;
        case "textarea":
          gp(n, o.value, o.defaultValue);
          break t;
        case "select":
          r = o.value, r != null && ql(n, !!o.multiple, r, !1);
      }
    }
  }
  var Bc = !1;
  function xp(n, r, o) {
    if (Bc) return n(r, o);
    Bc = !0;
    try {
      var f = n(r);
      return f;
    } finally {
      if (Bc = !1, (Yl !== null || Gl !== null) && (Co(), Yl && (r = Yl, n = Gl, Gl = Yl = null, Sp(r), n)))
        for (r = 0; r < n.length; r++) Sp(n[r]);
    }
  }
  function Qs(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var f = o[Le] || null;
    if (f === null) return null;
    o = f[r];
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
    if (o && typeof o != "function")
      throw Error(
        i(231, r, typeof o)
      );
    return o;
  }
  var Pi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nc = !1;
  if (Pi)
    try {
      var Zs = {};
      Object.defineProperty(Zs, "passive", {
        get: function() {
          Nc = !0;
        }
      }), window.addEventListener("test", Zs, Zs), window.removeEventListener("test", Zs, Zs);
    } catch {
      Nc = !1;
    }
  var bn = null, Lc = null, Va = null;
  function wp() {
    if (Va) return Va;
    var n, r = Lc, o = r.length, f, d = "value" in bn ? bn.value : bn.textContent, g = d.length;
    for (n = 0; n < o && r[n] === d[n]; n++) ;
    var b = o - n;
    for (f = 1; f <= b && r[o - f] === d[g - f]; f++) ;
    return Va = d.slice(n, 1 < f ? 1 - f : void 0);
  }
  function qa(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ja() {
    return !0;
  }
  function Ap() {
    return !1;
  }
  function ze(n) {
    function r(o, f, d, g, b) {
      this._reactName = o, this._targetInst = d, this.type = f, this.nativeEvent = g, this.target = b, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(g) : g[x]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? ja : Ap, this.isPropagationStopped = Ap, this;
    }
    return p(r.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var o = this.nativeEvent;
        o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ja);
      },
      stopPropagation: function() {
        var o = this.nativeEvent;
        o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ja);
      },
      persist: function() {
      },
      isPersistent: ja
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
  }, Ya = ze(ll), Is = p({}, ll, { view: 0, detail: 0 }), yw = ze(Is), zc, Hc, Fs, Ga = p({}, Is, {
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
    getModifierState: Uc,
    button: 0,
    buttons: 0,
    relatedTarget: function(n) {
      return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
    },
    movementX: function(n) {
      return "movementX" in n ? n.movementX : (n !== Fs && (Fs && n.type === "mousemove" ? (zc = n.screenX - Fs.screenX, Hc = n.screenY - Fs.screenY) : Hc = zc = 0, Fs = n), zc);
    },
    movementY: function(n) {
      return "movementY" in n ? n.movementY : Hc;
    }
  }), Cp = ze(Ga), vw = p({}, Ga, { dataTransfer: 0 }), bw = ze(vw), Sw = p({}, Is, { relatedTarget: 0 }), _c = ze(Sw), xw = p({}, ll, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ww = ze(xw), Aw = p({}, ll, {
    clipboardData: function(n) {
      return "clipboardData" in n ? n.clipboardData : window.clipboardData;
    }
  }), Cw = ze(Aw), kw = p({}, ll, { data: 0 }), kp = ze(kw), Mw = {
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
  }, Tw = {
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
  }, Ow = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Dw(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ow[n]) ? !!r[n] : !1;
  }
  function Uc() {
    return Dw;
  }
  var Ew = p({}, Is, {
    key: function(n) {
      if (n.key) {
        var r = Mw[n.key] || n.key;
        if (r !== "Unidentified") return r;
      }
      return n.type === "keypress" ? (n = qa(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Tw[n.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uc,
    charCode: function(n) {
      return n.type === "keypress" ? qa(n) : 0;
    },
    keyCode: function(n) {
      return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    },
    which: function(n) {
      return n.type === "keypress" ? qa(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    }
  }), Rw = ze(Ew), Bw = p({}, Ga, {
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
  }), Mp = ze(Bw), Nw = p({}, Is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uc
  }), Lw = ze(Nw), zw = p({}, ll, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hw = ze(zw), _w = p({}, Ga, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Uw = ze(_w), Vw = p({}, ll, {
    newState: 0,
    oldState: 0
  }), qw = ze(Vw), jw = [9, 13, 27, 32], Vc = Pi && "CompositionEvent" in window, Ps = null;
  Pi && "documentMode" in document && (Ps = document.documentMode);
  var Yw = Pi && "TextEvent" in window && !Ps, Tp = Pi && (!Vc || Ps && 8 < Ps && 11 >= Ps), Op = " ", Dp = !1;
  function Ep(n, r) {
    switch (n) {
      case "keyup":
        return jw.indexOf(r.keyCode) !== -1;
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
  function Rp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Xl = !1;
  function Gw(n, r) {
    switch (n) {
      case "compositionend":
        return Rp(r);
      case "keypress":
        return r.which !== 32 ? null : (Dp = !0, Op);
      case "textInput":
        return n = r.data, n === Op && Dp ? null : n;
      default:
        return null;
    }
  }
  function Xw(n, r) {
    if (Xl)
      return n === "compositionend" || !Vc && Ep(n, r) ? (n = wp(), Va = Lc = bn = null, Xl = !1, n) : null;
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
        return Tp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ww = {
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
  function Bp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ww[n.type] : r === "textarea";
  }
  function Np(n, r, o, f) {
    Yl ? Gl ? Gl.push(f) : Gl = [f] : Yl = f, r = Eo(r, "onChange"), 0 < r.length && (o = new Ya(
      "onChange",
      "change",
      null,
      o,
      f
    ), n.push({ event: o, listeners: r }));
  }
  var Js = null, $s = null;
  function Kw(n) {
    dy(n, 0);
  }
  function Xa(n) {
    var r = Ks(n);
    if (mp(r)) return n;
  }
  function Lp(n, r) {
    if (n === "change") return r;
  }
  var zp = !1;
  if (Pi) {
    var qc;
    if (Pi) {
      var jc = "oninput" in document;
      if (!jc) {
        var Hp = document.createElement("div");
        Hp.setAttribute("oninput", "return;"), jc = typeof Hp.oninput == "function";
      }
      qc = jc;
    } else qc = !1;
    zp = qc && (!document.documentMode || 9 < document.documentMode);
  }
  function _p() {
    Js && (Js.detachEvent("onpropertychange", Up), $s = Js = null);
  }
  function Up(n) {
    if (n.propertyName === "value" && Xa($s)) {
      var r = [];
      Np(
        r,
        $s,
        n,
        Rc(n)
      ), xp(Kw, r);
    }
  }
  function Qw(n, r, o) {
    n === "focusin" ? (_p(), Js = r, $s = o, Js.attachEvent("onpropertychange", Up)) : n === "focusout" && _p();
  }
  function Zw(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Xa($s);
  }
  function Iw(n, r) {
    if (n === "click") return Xa(r);
  }
  function Fw(n, r) {
    if (n === "input" || n === "change")
      return Xa(r);
  }
  function Pw(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Qe = typeof Object.is == "function" ? Object.is : Pw;
  function tr(n, r) {
    if (Qe(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), f = Object.keys(r);
    if (o.length !== f.length) return !1;
    for (f = 0; f < o.length; f++) {
      var d = o[f];
      if (!gc.call(r, d) || !Qe(n[d], r[d]))
        return !1;
    }
    return !0;
  }
  function Vp(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function qp(n, r) {
    var o = Vp(n);
    n = 0;
    for (var f; o; ) {
      if (o.nodeType === 3) {
        if (f = n + o.textContent.length, n <= r && f >= r)
          return { node: o, offset: r - n };
        n = f;
      }
      t: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break t;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Vp(o);
    }
  }
  function jp(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? jp(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Yp(n) {
    n = n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null ? n.ownerDocument.defaultView : window;
    for (var r = _a(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = _a(n.document);
    }
    return r;
  }
  function Yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  var Jw = Pi && "documentMode" in document && 11 >= document.documentMode, Wl = null, Gc = null, er = null, Xc = !1;
  function Gp(n, r, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Xc || Wl == null || Wl !== _a(f) || (f = Wl, "selectionStart" in f && Yc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = {
      anchorNode: f.anchorNode,
      anchorOffset: f.anchorOffset,
      focusNode: f.focusNode,
      focusOffset: f.focusOffset
    }), er && tr(er, f) || (er = f, f = Eo(Gc, "onSelect"), 0 < f.length && (r = new Ya(
      "onSelect",
      "select",
      null,
      r,
      o
    ), n.push({ event: r, listeners: f }), r.target = Wl)));
  }
  function sl(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Kl = {
    animationend: sl("Animation", "AnimationEnd"),
    animationiteration: sl("Animation", "AnimationIteration"),
    animationstart: sl("Animation", "AnimationStart"),
    transitionrun: sl("Transition", "TransitionRun"),
    transitionstart: sl("Transition", "TransitionStart"),
    transitioncancel: sl("Transition", "TransitionCancel"),
    transitionend: sl("Transition", "TransitionEnd")
  }, Wc = {}, Xp = {};
  Pi && (Xp = document.createElement("div").style, "AnimationEvent" in window || (delete Kl.animationend.animation, delete Kl.animationiteration.animation, delete Kl.animationstart.animation), "TransitionEvent" in window || delete Kl.transitionend.transition);
  function rl(n) {
    if (Wc[n]) return Wc[n];
    if (!Kl[n]) return n;
    var r = Kl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Xp)
        return Wc[n] = r[o];
    return n;
  }
  var Wp = rl("animationend"), Kp = rl("animationiteration"), Qp = rl("animationstart"), $w = rl("transitionrun"), t2 = rl("transitionstart"), e2 = rl("transitioncancel"), Zp = rl("transitionend"), Ip = /* @__PURE__ */ new Map(), Kc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Kc.push("scrollEnd");
  function Si(n, r) {
    Ip.set(n, r), nl(r, [n]);
  }
  var Fp = /* @__PURE__ */ new WeakMap();
  function si(n, r) {
    if (typeof n == "object" && n !== null) {
      var o = Fp.get(n);
      return o !== void 0 ? o : (r = {
        value: n,
        source: r,
        stack: hp(r)
      }, Fp.set(n, r), r);
    }
    return {
      value: n,
      source: r,
      stack: hp(r)
    };
  }
  var ri = [], Ql = 0, Qc = 0;
  function Wa() {
    for (var n = Ql, r = Qc = Ql = 0; r < n; ) {
      var o = ri[r];
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
      g !== 0 && Pp(o, d, g);
    }
  }
  function Ka(n, r, o, f) {
    ri[Ql++] = n, ri[Ql++] = r, ri[Ql++] = o, ri[Ql++] = f, Qc |= f, n.lanes |= f, n = n.alternate, n !== null && (n.lanes |= f);
  }
  function Zc(n, r, o, f) {
    return Ka(n, r, o, f), Qa(n);
  }
  function Zl(n, r) {
    return Ka(n, null, null, r), Qa(n);
  }
  function Pp(n, r, o) {
    n.lanes |= o;
    var f = n.alternate;
    f !== null && (f.lanes |= o);
    for (var d = !1, g = n.return; g !== null; )
      g.childLanes |= o, f = g.alternate, f !== null && (f.childLanes |= o), g.tag === 22 && (n = g.stateNode, n === null || n._visibility & 1 || (d = !0)), n = g, g = g.return;
    return n.tag === 3 ? (g = n.stateNode, d && r !== null && (d = 31 - Ke(o), n = g.hiddenUpdates, f = n[d], f === null ? n[d] = [r] : f.push(r), r.lane = o | 536870912), g) : null;
  }
  function Qa(n) {
    if (50 < Mr)
      throw Mr = 0, eh = null, Error(i(185));
    for (var r = n.return; r !== null; )
      n = r, r = n.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Il = {};
  function i2(n, r, o, f) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(n, r, o, f) {
    return new i2(n, r, o, f);
  }
  function Ic(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ji(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ze(
      n.tag,
      r,
      n.key,
      n.mode
    ), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 65011712, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o.refCleanup = n.refCleanup, o;
  }
  function Jp(n, r) {
    n.flags &= 65011714;
    var o = n.alternate;
    return o === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = o.childLanes, n.lanes = o.lanes, n.child = o.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = o.memoizedProps, n.memoizedState = o.memoizedState, n.updateQueue = o.updateQueue, n.type = o.type, r = o.dependencies, n.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }), n;
  }
  function Za(n, r, o, f, d, g) {
    var b = 0;
    if (f = n, typeof n == "function") Ic(n) && (b = 1);
    else if (typeof n == "string")
      b = lA(
        n,
        o,
        rt.current
      ) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else
      t: switch (n) {
        case F:
          return n = Ze(31, o, r, d), n.elementType = F, n.lanes = g, n;
        case w:
          return al(o.children, d, g, r);
        case A:
          b = 8, d |= 24;
          break;
        case k:
          return n = Ze(12, o, r, d | 2), n.elementType = k, n.lanes = g, n;
        case T:
          return n = Ze(13, o, r, d), n.elementType = T, n.lanes = g, n;
        case R:
          return n = Ze(19, o, r, d), n.elementType = R, n.lanes = g, n;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case E:
              case V:
                b = 10;
                break t;
              case _:
                b = 9;
                break t;
              case Y:
                b = 11;
                break t;
              case U:
                b = 14;
                break t;
              case I:
                b = 16, f = null;
                break t;
            }
          b = 29, o = Error(
            i(130, n === null ? "null" : typeof n, "")
          ), f = null;
      }
    return r = Ze(b, o, r, d), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function al(n, r, o, f) {
    return n = Ze(7, n, f, r), n.lanes = o, n;
  }
  function Fc(n, r, o) {
    return n = Ze(6, n, null, r), n.lanes = o, n;
  }
  function Pc(n, r, o) {
    return r = Ze(
      4,
      n.children !== null ? n.children : [],
      n.key,
      r
    ), r.lanes = o, r.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation
    }, r;
  }
  var Fl = [], Pl = 0, Ia = null, Fa = 0, ai = [], oi = 0, ol = null, $i = 1, tn = "";
  function ul(n, r) {
    Fl[Pl++] = Fa, Fl[Pl++] = Ia, Ia = n, Fa = r;
  }
  function $p(n, r, o) {
    ai[oi++] = $i, ai[oi++] = tn, ai[oi++] = ol, ol = n;
    var f = $i;
    n = tn;
    var d = 32 - Ke(f) - 1;
    f &= ~(1 << d), o += 1;
    var g = 32 - Ke(r) + d;
    if (30 < g) {
      var b = d - d % 5;
      g = (f & (1 << b) - 1).toString(32), f >>= b, d -= b, $i = 1 << 32 - Ke(r) + d | o << d | f, tn = g + n;
    } else
      $i = 1 << g | o << d | f, tn = n;
  }
  function Jc(n) {
    n.return !== null && (ul(n, 1), $p(n, 1, 0));
  }
  function $c(n) {
    for (; n === Ia; )
      Ia = Fl[--Pl], Fl[Pl] = null, Fa = Fl[--Pl], Fl[Pl] = null;
    for (; n === ol; )
      ol = ai[--oi], ai[oi] = null, tn = ai[--oi], ai[oi] = null, $i = ai[--oi], ai[oi] = null;
  }
  var Ee = null, Ft = null, Nt = !1, cl = null, Di = !1, tf = Error(i(519));
  function fl(n) {
    var r = Error(i(418, ""));
    throw lr(si(r, n)), tf;
  }
  function tg(n) {
    var r = n.stateNode, o = n.type, f = n.memoizedProps;
    switch (r[Ae] = n, r[Le] = f, o) {
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
        for (o = 0; o < Or.length; o++)
          kt(Or[o], r);
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
        kt("invalid", r), pp(
          r,
          f.value,
          f.defaultValue,
          f.checked,
          f.defaultChecked,
          f.type,
          f.name,
          !0
        ), Ha(r);
        break;
      case "select":
        kt("invalid", r);
        break;
      case "textarea":
        kt("invalid", r), yp(r, f.value, f.defaultValue, f.children), Ha(r);
    }
    o = f.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || r.textContent === "" + o || f.suppressHydrationWarning === !0 || yy(r.textContent, o) ? (f.popover != null && (kt("beforetoggle", r), kt("toggle", r)), f.onScroll != null && kt("scroll", r), f.onScrollEnd != null && kt("scrollend", r), f.onClick != null && (r.onclick = Ro), r = !0) : r = !1, r || fl(n);
  }
  function eg(n) {
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
    if (!Nt) return eg(n), Nt = !0, !1;
    var r = n.tag, o;
    if ((o = r !== 3 && r !== 27) && ((o = r === 5) && (o = n.type, o = !(o !== "form" && o !== "button") || yh(n.type, n.memoizedProps)), o = !o), o && Ft && fl(n), eg(n), r === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(i(317));
      t: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8)
            if (o = n.data, o === "/$") {
              if (r === 0) {
                Ft = wi(n.nextSibling);
                break t;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          n = n.nextSibling;
        }
        Ft = null;
      }
    } else
      r === 27 ? (r = Ft, zn(n.type) ? (n = xh, xh = null, Ft = n) : Ft = r) : Ft = Ee ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function nr() {
    Ft = Ee = null, Nt = !1;
  }
  function ig() {
    var n = cl;
    return n !== null && (Ue === null ? Ue = n : Ue.push.apply(
      Ue,
      n
    ), cl = null), n;
  }
  function lr(n) {
    cl === null ? cl = [n] : cl.push(n);
  }
  var ef = G(null), hl = null, en = null;
  function Sn(n, r, o) {
    J(ef, r._currentValue), r._currentValue = o;
  }
  function nn(n) {
    n._currentValue = ef.current, P(ef);
  }
  function nf(n, r, o) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function lf(n, r, o, f) {
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
              g.lanes |= o, x = g.alternate, x !== null && (x.lanes |= o), nf(
                g.return,
                o,
                n
              ), f || (b = null);
              break t;
            }
          g = x.next;
        }
      } else if (d.tag === 18) {
        if (b = d.return, b === null) throw Error(i(341));
        b.lanes |= o, g = b.alternate, g !== null && (g.lanes |= o), nf(b, o, n), b = null;
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
  function sr(n, r, o, f) {
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
    n !== null && lf(
      r,
      n,
      o,
      f
    ), r.flags |= 262144;
  }
  function Pa(n) {
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
    return ng(hl, n);
  }
  function Ja(n, r) {
    return hl === null && dl(n), ng(n, r);
  }
  function ng(n, r) {
    var o = r._currentValue;
    if (r = { context: r, memoizedValue: o, next: null }, en === null) {
      if (n === null) throw Error(i(308));
      en = r, n.dependencies = { lanes: 0, firstContext: r }, n.flags |= 524288;
    } else en = en.next = r;
    return o;
  }
  var n2 = typeof AbortController < "u" ? AbortController : function() {
    var n = [], r = this.signal = {
      aborted: !1,
      addEventListener: function(o, f) {
        n.push(f);
      }
    };
    this.abort = function() {
      r.aborted = !0, n.forEach(function(o) {
        return o();
      });
    };
  }, l2 = l.unstable_scheduleCallback, s2 = l.unstable_NormalPriority, se = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function sf() {
    return {
      controller: new n2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rr(n) {
    n.refCount--, n.refCount === 0 && l2(s2, function() {
      n.controller.abort();
    });
  }
  var ar = null, rf = 0, Jl = 0, $l = null;
  function r2(n, r) {
    if (ar === null) {
      var o = ar = [];
      rf = 0, Jl = oh(), $l = {
        status: "pending",
        value: void 0,
        then: function(f) {
          o.push(f);
        }
      };
    }
    return rf++, r.then(lg, lg), r;
  }
  function lg() {
    if (--rf === 0 && ar !== null) {
      $l !== null && ($l.status = "fulfilled");
      var n = ar;
      ar = null, Jl = 0, $l = null;
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function a2(n, r) {
    var o = [], f = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        o.push(d);
      }
    };
    return n.then(
      function() {
        f.status = "fulfilled", f.value = r;
        for (var d = 0; d < o.length; d++) (0, o[d])(r);
      },
      function(d) {
        for (f.status = "rejected", f.reason = d, d = 0; d < o.length; d++)
          (0, o[d])(void 0);
      }
    ), f;
  }
  var sg = H.S;
  H.S = function(n, r) {
    typeof r == "object" && r !== null && typeof r.then == "function" && r2(n, r), sg !== null && sg(n, r);
  };
  var ml = G(null);
  function af() {
    var n = ml.current;
    return n !== null ? n : Gt.pooledCache;
  }
  function $a(n, r) {
    r === null ? J(ml, ml.current) : J(ml, r.pool);
  }
  function rg() {
    var n = af();
    return n === null ? null : { parent: se._currentValue, pool: n };
  }
  var or = Error(i(460)), ag = Error(i(474)), to = Error(i(542)), of = { then: function() {
  } };
  function og(n) {
    return n = n.status, n === "fulfilled" || n === "rejected";
  }
  function eo() {
  }
  function ug(n, r, o) {
    switch (o = n[o], o === void 0 ? n.push(r) : o !== r && (r.then(eo, eo), r = o), r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw n = r.reason, fg(n), n;
      default:
        if (typeof r.status == "string") r.then(eo, eo);
        else {
          if (n = Gt, n !== null && 100 < n.shellSuspendCounter)
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
            throw n = r.reason, fg(n), n;
        }
        throw ur = r, or;
    }
  }
  var ur = null;
  function cg() {
    if (ur === null) throw Error(i(459));
    var n = ur;
    return ur = null, n;
  }
  function fg(n) {
    if (n === or || n === to)
      throw Error(i(483));
  }
  var xn = !1;
  function uf(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function cf(n, r) {
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
  function An(n, r, o) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (Lt & 2) !== 0) {
      var d = f.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), f.pending = r, r = Qa(n), Pp(n, null, o), r;
    }
    return Ka(n, f, r, o), Qa(n);
  }
  function cr(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194048) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, lp(n, o);
    }
  }
  function ff(n, r) {
    var o = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, o === f)) {
      var d = null, g = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var b = {
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          };
          g === null ? d = g = b : g = g.next = b, o = o.next;
        } while (o !== null);
        g === null ? d = g = r : g = g.next = r;
      } else d = g = r;
      o = {
        baseState: f.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: g,
        shared: f.shared,
        callbacks: f.callbacks
      }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  var hf = !1;
  function fr() {
    if (hf) {
      var n = $l;
      if (n !== null) throw n;
    }
  }
  function hr(n, r, o, f) {
    hf = !1;
    var d = n.updateQueue;
    xn = !1;
    var g = d.firstBaseUpdate, b = d.lastBaseUpdate, x = d.shared.pending;
    if (x !== null) {
      d.shared.pending = null;
      var C = x, N = C.next;
      C.next = null, b === null ? g = N : b.next = N, b = C;
      var q = n.alternate;
      q !== null && (q = q.updateQueue, x = q.lastBaseUpdate, x !== b && (x === null ? q.firstBaseUpdate = N : x.next = N, q.lastBaseUpdate = C));
    }
    if (g !== null) {
      var K = d.baseState;
      b = 0, q = N = C = null, x = g;
      do {
        var L = x.lane & -536870913, z = L !== x.lane;
        if (z ? (Et & L) === L : (f & L) === L) {
          L !== 0 && L === Jl && (hf = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: null,
            next: null
          });
          t: {
            var gt = n, ht = x;
            L = r;
            var Ut = o;
            switch (ht.tag) {
              case 1:
                if (gt = ht.payload, typeof gt == "function") {
                  K = gt.call(Ut, K, L);
                  break t;
                }
                K = gt;
                break t;
              case 3:
                gt.flags = gt.flags & -65537 | 128;
              case 0:
                if (gt = ht.payload, L = typeof gt == "function" ? gt.call(Ut, K, L) : gt, L == null) break t;
                K = p({}, K, L);
                break t;
              case 2:
                xn = !0;
            }
          }
          L = x.callback, L !== null && (n.flags |= 64, z && (n.flags |= 8192), z = d.callbacks, z === null ? d.callbacks = [L] : z.push(L));
        } else
          z = {
            lane: L,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, q === null ? (N = q = z, C = K) : q = q.next = z, b |= L;
        if (x = x.next, x === null) {
          if (x = d.shared.pending, x === null)
            break;
          z = x, x = z.next, z.next = null, d.lastBaseUpdate = z, d.shared.pending = null;
        }
      } while (!0);
      q === null && (C = K), d.baseState = C, d.firstBaseUpdate = N, d.lastBaseUpdate = q, g === null && (d.shared.lanes = 0), Rn |= b, n.lanes = b, n.memoizedState = K;
    }
  }
  function hg(n, r) {
    if (typeof n != "function")
      throw Error(i(191, n));
    n.call(r);
  }
  function dg(n, r) {
    var o = n.callbacks;
    if (o !== null)
      for (n.callbacks = null, n = 0; n < o.length; n++)
        hg(o[n], r);
  }
  var ts = G(null), io = G(0);
  function mg(n, r) {
    n = cn, J(io, n), J(ts, r), cn = n | r.baseLanes;
  }
  function df() {
    J(io, cn), J(ts, ts.current);
  }
  function mf() {
    cn = io.current, P(ts), P(io);
  }
  var Cn = 0, wt = null, Ht = null, ne = null, no = !1, es = !1, pl = !1, lo = 0, dr = 0, is = null, o2 = 0;
  function $t() {
    throw Error(i(321));
  }
  function pf(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Qe(n[o], r[o])) return !1;
    return !0;
  }
  function gf(n, r, o, f, d, g) {
    return Cn = g, wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, H.H = n === null || n.memoizedState === null ? Pg : Jg, pl = !1, g = o(f, d), pl = !1, es && (g = gg(
      r,
      o,
      f,
      d
    )), pg(n), g;
  }
  function pg(n) {
    H.H = co;
    var r = Ht !== null && Ht.next !== null;
    if (Cn = 0, ne = Ht = wt = null, no = !1, dr = 0, is = null, r) throw Error(i(300));
    n === null || ce || (n = n.dependencies, n !== null && Pa(n) && (ce = !0));
  }
  function gg(n, r, o, f) {
    wt = n;
    var d = 0;
    do {
      if (es && (is = null), dr = 0, es = !1, 25 <= d) throw Error(i(301));
      if (d += 1, ne = Ht = null, n.updateQueue != null) {
        var g = n.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      H.H = p2, g = r(o, f);
    } while (es);
    return g;
  }
  function u2() {
    var n = H.H, r = n.useState()[0];
    return r = typeof r.then == "function" ? mr(r) : r, n = n.useState()[0], (Ht !== null ? Ht.memoizedState : null) !== n && (wt.flags |= 1024), r;
  }
  function yf() {
    var n = lo !== 0;
    return lo = 0, n;
  }
  function vf(n, r, o) {
    r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~o;
  }
  function bf(n) {
    if (no) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        r !== null && (r.pending = null), n = n.next;
      }
      no = !1;
    }
    Cn = 0, ne = Ht = wt = null, es = !1, dr = lo = 0, is = null;
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
    if (Ht === null) {
      var n = wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ht.next;
    var r = ne === null ? wt.memoizedState : ne.next;
    if (r !== null)
      ne = r, Ht = n;
    else {
      if (n === null)
        throw wt.alternate === null ? Error(i(467)) : Error(i(310));
      Ht = n, n = {
        memoizedState: Ht.memoizedState,
        baseState: Ht.baseState,
        baseQueue: Ht.baseQueue,
        queue: Ht.queue,
        next: null
      }, ne === null ? wt.memoizedState = ne = n : ne = ne.next = n;
    }
    return ne;
  }
  function Sf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mr(n) {
    var r = dr;
    return dr += 1, is === null && (is = []), n = ug(is, n, r), r = wt, (ne === null ? r.memoizedState : ne.next) === null && (r = r.alternate, H.H = r === null || r.memoizedState === null ? Pg : Jg), n;
  }
  function so(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return mr(n);
      if (n.$$typeof === V) return Ce(n);
    }
    throw Error(i(438, String(n)));
  }
  function xf(n) {
    var r = null, o = wt.updateQueue;
    if (o !== null && (r = o.memoCache), r == null) {
      var f = wt.alternate;
      f !== null && (f = f.updateQueue, f !== null && (f = f.memoCache, f != null && (r = {
        data: f.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (r == null && (r = { data: [], index: 0 }), o === null && (o = Sf(), wt.updateQueue = o), o.memoCache = r, o = r.data[r.index], o === void 0)
      for (o = r.data[r.index] = Array(n), f = 0; f < n; f++)
        o[f] = ct;
    return r.index++, o;
  }
  function ln(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ro(n) {
    var r = le();
    return wf(r, Ht, n);
  }
  function wf(n, r, o) {
    var f = n.queue;
    if (f === null) throw Error(i(311));
    f.lastRenderedReducer = o;
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
      var x = b = null, C = null, N = r, q = !1;
      do {
        var K = N.lane & -536870913;
        if (K !== N.lane ? (Et & K) === K : (Cn & K) === K) {
          var L = N.revertLane;
          if (L === 0)
            C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), K === Jl && (q = !0);
          else if ((Cn & L) === L) {
            N = N.next, L === Jl && (q = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, C === null ? (x = C = K, b = g) : C = C.next = K, wt.lanes |= L, Rn |= L;
          K = N.action, pl && o(g, K), g = N.hasEagerState ? N.eagerState : o(g, K);
        } else
          L = {
            lane: K,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, C === null ? (x = C = L, b = g) : C = C.next = L, wt.lanes |= K, Rn |= K;
        N = N.next;
      } while (N !== null && N !== r);
      if (C === null ? b = g : C.next = x, !Qe(g, n.memoizedState) && (ce = !0, q && (o = $l, o !== null)))
        throw o;
      n.memoizedState = g, n.baseState = b, n.baseQueue = C, f.lastRenderedState = g;
    }
    return d === null && (f.lanes = 0), [n.memoizedState, f.dispatch];
  }
  function Af(n) {
    var r = le(), o = r.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = n;
    var f = o.dispatch, d = o.pending, g = r.memoizedState;
    if (d !== null) {
      o.pending = null;
      var b = d = d.next;
      do
        g = n(g, b.action), b = b.next;
      while (b !== d);
      Qe(g, r.memoizedState) || (ce = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), o.lastRenderedState = g;
    }
    return [g, f];
  }
  function yg(n, r, o) {
    var f = wt, d = le(), g = Nt;
    if (g) {
      if (o === void 0) throw Error(i(407));
      o = o();
    } else o = r();
    var b = !Qe(
      (Ht || d).memoizedState,
      o
    );
    b && (d.memoizedState = o, ce = !0), d = d.queue;
    var x = Sg.bind(null, f, d, n);
    if (pr(2048, 8, x, [n]), d.getSnapshot !== r || b || ne !== null && ne.memoizedState.tag & 1) {
      if (f.flags |= 2048, ns(
        9,
        ao(),
        bg.bind(
          null,
          f,
          d,
          o,
          r
        ),
        null
      ), Gt === null) throw Error(i(349));
      g || (Cn & 124) !== 0 || vg(f, r, o);
    }
    return o;
  }
  function vg(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = wt.updateQueue, r === null ? (r = Sf(), wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function bg(n, r, o, f) {
    r.value = o, r.getSnapshot = f, xg(r) && wg(n);
  }
  function Sg(n, r, o) {
    return o(function() {
      xg(r) && wg(n);
    });
  }
  function xg(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Qe(n, o);
    } catch {
      return !0;
    }
  }
  function wg(n) {
    var r = Zl(n, 2);
    r !== null && $e(r, n, 2);
  }
  function Cf(n) {
    var r = He();
    if (typeof n == "function") {
      var o = n;
      if (n = o(), pl) {
        yn(!0);
        try {
          o();
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
  function Ag(n, r, o, f) {
    return n.baseState = o, wf(
      n,
      Ht,
      typeof f == "function" ? f : ln
    );
  }
  function c2(n, r, o, f, d) {
    if (uo(n)) throw Error(i(485));
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
      H.T !== null ? o(!0) : g.isTransition = !1, f(g), o = r.pending, o === null ? (g.next = r.pending = g, Cg(r, g)) : (g.next = o.next, r.pending = o.next = g);
    }
  }
  function Cg(n, r) {
    var o = r.action, f = r.payload, d = n.state;
    if (r.isTransition) {
      var g = H.T, b = {};
      H.T = b;
      try {
        var x = o(d, f), C = H.S;
        C !== null && C(b, x), kg(n, r, x);
      } catch (N) {
        kf(n, r, N);
      } finally {
        H.T = g;
      }
    } else
      try {
        g = o(d, f), kg(n, r, g);
      } catch (N) {
        kf(n, r, N);
      }
  }
  function kg(n, r, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(
      function(f) {
        Mg(n, r, f);
      },
      function(f) {
        return kf(n, r, f);
      }
    ) : Mg(n, r, o);
  }
  function Mg(n, r, o) {
    r.status = "fulfilled", r.value = o, Tg(r), n.state = o, r = n.pending, r !== null && (o = r.next, o === r ? n.pending = null : (o = o.next, r.next = o, Cg(n, o)));
  }
  function kf(n, r, o) {
    var f = n.pending;
    if (n.pending = null, f !== null) {
      f = f.next;
      do
        r.status = "rejected", r.reason = o, Tg(r), r = r.next;
      while (r !== f);
    }
    n.action = null;
  }
  function Tg(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function Og(n, r) {
    return r;
  }
  function Dg(n, r) {
    if (Nt) {
      var o = Gt.formState;
      if (o !== null) {
        t: {
          var f = wt;
          if (Nt) {
            if (Ft) {
              e: {
                for (var d = Ft, g = Di; d.nodeType !== 8; ) {
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
                Ft = wi(
                  d.nextSibling
                ), f = d.data === "F!";
                break t;
              }
            }
            fl(f);
          }
          f = !1;
        }
        f && (r = o[0]);
      }
    }
    return o = He(), o.memoizedState = o.baseState = r, f = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Og,
      lastRenderedState: r
    }, o.queue = f, o = Zg.bind(
      null,
      wt,
      f
    ), f.dispatch = o, f = Cf(!1), g = Ef.bind(
      null,
      wt,
      !1,
      f.queue
    ), f = He(), d = {
      state: r,
      dispatch: null,
      action: n,
      pending: null
    }, f.queue = d, o = c2.bind(
      null,
      wt,
      d,
      g,
      o
    ), d.dispatch = o, f.memoizedState = n, [r, o, !1];
  }
  function Eg(n) {
    var r = le();
    return Rg(r, Ht, n);
  }
  function Rg(n, r, o) {
    if (r = wf(
      n,
      r,
      Og
    )[0], n = ro(ln)[0], typeof r == "object" && r !== null && typeof r.then == "function")
      try {
        var f = mr(r);
      } catch (b) {
        throw b === or ? to : b;
      }
    else f = r;
    r = le();
    var d = r.queue, g = d.dispatch;
    return o !== r.memoizedState && (wt.flags |= 2048, ns(
      9,
      ao(),
      f2.bind(null, d, o),
      null
    )), [f, g, n];
  }
  function f2(n, r) {
    n.action = r;
  }
  function Bg(n) {
    var r = le(), o = Ht;
    if (o !== null)
      return Rg(r, o, n);
    le(), r = r.memoizedState, o = le();
    var f = o.queue.dispatch;
    return o.memoizedState = n, [r, f, !1];
  }
  function ns(n, r, o, f) {
    return n = { tag: n, create: o, deps: f, inst: r, next: null }, r = wt.updateQueue, r === null && (r = Sf(), wt.updateQueue = r), o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (f = o.next, o.next = n, n.next = f, r.lastEffect = n), n;
  }
  function ao() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ng() {
    return le().memoizedState;
  }
  function oo(n, r, o, f) {
    var d = He();
    f = f === void 0 ? null : f, wt.flags |= n, d.memoizedState = ns(
      1 | r,
      ao(),
      o,
      f
    );
  }
  function pr(n, r, o, f) {
    var d = le();
    f = f === void 0 ? null : f;
    var g = d.memoizedState.inst;
    Ht !== null && f !== null && pf(f, Ht.memoizedState.deps) ? d.memoizedState = ns(r, g, o, f) : (wt.flags |= n, d.memoizedState = ns(
      1 | r,
      g,
      o,
      f
    ));
  }
  function Lg(n, r) {
    oo(8390656, 8, n, r);
  }
  function zg(n, r) {
    pr(2048, 8, n, r);
  }
  function Hg(n, r) {
    return pr(4, 2, n, r);
  }
  function _g(n, r) {
    return pr(4, 4, n, r);
  }
  function Ug(n, r) {
    if (typeof r == "function") {
      n = n();
      var o = r(n);
      return function() {
        typeof o == "function" ? o() : r(null);
      };
    }
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Vg(n, r, o) {
    o = o != null ? o.concat([n]) : null, pr(4, 4, Ug.bind(null, r, n), o);
  }
  function Mf() {
  }
  function qg(n, r) {
    var o = le();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return r !== null && pf(r, f[1]) ? f[0] : (o.memoizedState = [n, r], n);
  }
  function jg(n, r) {
    var o = le();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    if (r !== null && pf(r, f[1]))
      return f[0];
    if (f = n(), pl) {
      yn(!0);
      try {
        n();
      } finally {
        yn(!1);
      }
    }
    return o.memoizedState = [f, r], f;
  }
  function Tf(n, r, o) {
    return o === void 0 || (Cn & 1073741824) !== 0 ? n.memoizedState = r : (n.memoizedState = o, n = X0(), wt.lanes |= n, Rn |= n, o);
  }
  function Yg(n, r, o, f) {
    return Qe(o, r) ? o : ts.current !== null ? (n = Tf(n, o, f), Qe(n, r) || (ce = !0), n) : (Cn & 42) === 0 ? (ce = !0, n.memoizedState = o) : (n = X0(), wt.lanes |= n, Rn |= n, r);
  }
  function Gg(n, r, o, f, d) {
    var g = Q.p;
    Q.p = g !== 0 && 8 > g ? g : 8;
    var b = H.T, x = {};
    H.T = x, Ef(n, !1, r, o);
    try {
      var C = d(), N = H.S;
      if (N !== null && N(x, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var q = a2(
          C,
          f
        );
        gr(
          n,
          r,
          q,
          Je(n)
        );
      } else
        gr(
          n,
          r,
          f,
          Je(n)
        );
    } catch (K) {
      gr(
        n,
        r,
        { then: function() {
        }, status: "rejected", reason: K },
        Je()
      );
    } finally {
      Q.p = g, H.T = b;
    }
  }
  function h2() {
  }
  function Of(n, r, o, f) {
    if (n.tag !== 5) throw Error(i(476));
    var d = Xg(n).queue;
    Gg(
      n,
      d,
      r,
      lt,
      o === null ? h2 : function() {
        return Wg(n), o(f);
      }
    );
  }
  function Xg(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: lt
      },
      next: null
    };
    var o = {};
    return r.next = {
      memoizedState: o,
      baseState: o,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: o
      },
      next: null
    }, n.memoizedState = r, n = n.alternate, n !== null && (n.memoizedState = r), r;
  }
  function Wg(n) {
    var r = Xg(n).next.queue;
    gr(n, r, {}, Je());
  }
  function Df() {
    return Ce(Lr);
  }
  function Kg() {
    return le().memoizedState;
  }
  function Qg() {
    return le().memoizedState;
  }
  function d2(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var o = Je();
          n = wn(o);
          var f = An(r, n, o);
          f !== null && ($e(f, r, o), cr(f, r, o)), r = { cache: sf() }, n.payload = r;
          return;
      }
      r = r.return;
    }
  }
  function m2(n, r, o) {
    var f = Je();
    o = {
      lane: f,
      revertLane: 0,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uo(n) ? Ig(r, o) : (o = Zc(n, r, o, f), o !== null && ($e(o, n, f), Fg(o, r, f)));
  }
  function Zg(n, r, o) {
    var f = Je();
    gr(n, r, o, f);
  }
  function gr(n, r, o, f) {
    var d = {
      lane: f,
      revertLane: 0,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uo(n)) Ig(r, d);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var b = r.lastRenderedState, x = g(b, o);
          if (d.hasEagerState = !0, d.eagerState = x, Qe(x, b))
            return Ka(n, r, d, 0), Gt === null && Wa(), !1;
        } catch {
        }
      if (o = Zc(n, r, d, f), o !== null)
        return $e(o, n, f), Fg(o, r, f), !0;
    }
    return !1;
  }
  function Ef(n, r, o, f) {
    if (f = {
      lane: 2,
      revertLane: oh(),
      action: f,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uo(n)) {
      if (r) throw Error(i(479));
    } else
      r = Zc(
        n,
        o,
        f,
        2
      ), r !== null && $e(r, n, 2);
  }
  function uo(n) {
    var r = n.alternate;
    return n === wt || r !== null && r === wt;
  }
  function Ig(n, r) {
    es = no = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Fg(n, r, o) {
    if ((o & 4194048) !== 0) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, lp(n, o);
    }
  }
  var co = {
    readContext: Ce,
    use: so,
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
  }, Pg = {
    readContext: Ce,
    use: so,
    useCallback: function(n, r) {
      return He().memoizedState = [
        n,
        r === void 0 ? null : r
      ], n;
    },
    useContext: Ce,
    useEffect: Lg,
    useImperativeHandle: function(n, r, o) {
      o = o != null ? o.concat([n]) : null, oo(
        4194308,
        4,
        Ug.bind(null, r, n),
        o
      );
    },
    useLayoutEffect: function(n, r) {
      return oo(4194308, 4, n, r);
    },
    useInsertionEffect: function(n, r) {
      oo(4, 2, n, r);
    },
    useMemo: function(n, r) {
      var o = He();
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
      return o.memoizedState = [f, r], f;
    },
    useReducer: function(n, r, o) {
      var f = He();
      if (o !== void 0) {
        var d = o(r);
        if (pl) {
          yn(!0);
          try {
            o(r);
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
      }, f.queue = n, n = n.dispatch = m2.bind(
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
      n = Cf(n);
      var r = n.queue, o = Zg.bind(null, wt, r);
      return r.dispatch = o, [n.memoizedState, o];
    },
    useDebugValue: Mf,
    useDeferredValue: function(n, r) {
      var o = He();
      return Tf(o, n, r);
    },
    useTransition: function() {
      var n = Cf(!1);
      return n = Gg.bind(
        null,
        wt,
        n.queue,
        !0,
        !1
      ), He().memoizedState = n, [!1, n];
    },
    useSyncExternalStore: function(n, r, o) {
      var f = wt, d = He();
      if (Nt) {
        if (o === void 0)
          throw Error(i(407));
        o = o();
      } else {
        if (o = r(), Gt === null)
          throw Error(i(349));
        (Et & 124) !== 0 || vg(f, r, o);
      }
      d.memoizedState = o;
      var g = { value: o, getSnapshot: r };
      return d.queue = g, Lg(Sg.bind(null, f, g, n), [
        n
      ]), f.flags |= 2048, ns(
        9,
        ao(),
        bg.bind(
          null,
          f,
          g,
          o,
          r
        ),
        null
      ), o;
    },
    useId: function() {
      var n = He(), r = Gt.identifierPrefix;
      if (Nt) {
        var o = tn, f = $i;
        o = (f & ~(1 << 32 - Ke(f) - 1)).toString(32) + o, r = "«" + r + "R" + o, o = lo++, 0 < o && (r += "H" + o.toString(32)), r += "»";
      } else
        o = o2++, r = "«" + r + "r" + o.toString(32) + "»";
      return n.memoizedState = r;
    },
    useHostTransitionStatus: Df,
    useFormState: Dg,
    useActionState: Dg,
    useOptimistic: function(n) {
      var r = He();
      r.memoizedState = r.baseState = n;
      var o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return r.queue = o, r = Ef.bind(
        null,
        wt,
        !0,
        o
      ), o.dispatch = r, [n, r];
    },
    useMemoCache: xf,
    useCacheRefresh: function() {
      return He().memoizedState = d2.bind(
        null,
        wt
      );
    }
  }, Jg = {
    readContext: Ce,
    use: so,
    useCallback: qg,
    useContext: Ce,
    useEffect: zg,
    useImperativeHandle: Vg,
    useInsertionEffect: Hg,
    useLayoutEffect: _g,
    useMemo: jg,
    useReducer: ro,
    useRef: Ng,
    useState: function() {
      return ro(ln);
    },
    useDebugValue: Mf,
    useDeferredValue: function(n, r) {
      var o = le();
      return Yg(
        o,
        Ht.memoizedState,
        n,
        r
      );
    },
    useTransition: function() {
      var n = ro(ln)[0], r = le().memoizedState;
      return [
        typeof n == "boolean" ? n : mr(n),
        r
      ];
    },
    useSyncExternalStore: yg,
    useId: Kg,
    useHostTransitionStatus: Df,
    useFormState: Eg,
    useActionState: Eg,
    useOptimistic: function(n, r) {
      var o = le();
      return Ag(o, Ht, n, r);
    },
    useMemoCache: xf,
    useCacheRefresh: Qg
  }, p2 = {
    readContext: Ce,
    use: so,
    useCallback: qg,
    useContext: Ce,
    useEffect: zg,
    useImperativeHandle: Vg,
    useInsertionEffect: Hg,
    useLayoutEffect: _g,
    useMemo: jg,
    useReducer: Af,
    useRef: Ng,
    useState: function() {
      return Af(ln);
    },
    useDebugValue: Mf,
    useDeferredValue: function(n, r) {
      var o = le();
      return Ht === null ? Tf(o, n, r) : Yg(
        o,
        Ht.memoizedState,
        n,
        r
      );
    },
    useTransition: function() {
      var n = Af(ln)[0], r = le().memoizedState;
      return [
        typeof n == "boolean" ? n : mr(n),
        r
      ];
    },
    useSyncExternalStore: yg,
    useId: Kg,
    useHostTransitionStatus: Df,
    useFormState: Bg,
    useActionState: Bg,
    useOptimistic: function(n, r) {
      var o = le();
      return Ht !== null ? Ag(o, Ht, n, r) : (o.baseState = n, [n, o.queue.dispatch]);
    },
    useMemoCache: xf,
    useCacheRefresh: Qg
  }, ls = null, yr = 0;
  function fo(n) {
    var r = yr;
    return yr += 1, ls === null && (ls = []), ug(ls, n, r);
  }
  function vr(n, r) {
    r = r.props.ref, n.ref = r !== void 0 ? r : null;
  }
  function ho(n, r) {
    throw r.$$typeof === y ? Error(i(525)) : (n = Object.prototype.toString.call(r), Error(
      i(
        31,
        n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n
      )
    ));
  }
  function $g(n) {
    var r = n._init;
    return r(n._payload);
  }
  function t0(n) {
    function r(D, O) {
      if (n) {
        var B = D.deletions;
        B === null ? (D.deletions = [O], D.flags |= 16) : B.push(O);
      }
    }
    function o(D, O) {
      if (!n) return null;
      for (; O !== null; )
        r(D, O), O = O.sibling;
      return null;
    }
    function f(D) {
      for (var O = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? O.set(D.key, D) : O.set(D.index, D), D = D.sibling;
      return O;
    }
    function d(D, O) {
      return D = Ji(D, O), D.index = 0, D.sibling = null, D;
    }
    function g(D, O, B) {
      return D.index = B, n ? (B = D.alternate, B !== null ? (B = B.index, B < O ? (D.flags |= 67108866, O) : B) : (D.flags |= 67108866, O)) : (D.flags |= 1048576, O);
    }
    function b(D) {
      return n && D.alternate === null && (D.flags |= 67108866), D;
    }
    function x(D, O, B, W) {
      return O === null || O.tag !== 6 ? (O = Fc(B, D.mode, W), O.return = D, O) : (O = d(O, B), O.return = D, O);
    }
    function C(D, O, B, W) {
      var st = B.type;
      return st === w ? q(
        D,
        O,
        B.props.children,
        W,
        B.key
      ) : O !== null && (O.elementType === st || typeof st == "object" && st !== null && st.$$typeof === I && $g(st) === O.type) ? (O = d(O, B.props), vr(O, B), O.return = D, O) : (O = Za(
        B.type,
        B.key,
        B.props,
        null,
        D.mode,
        W
      ), vr(O, B), O.return = D, O);
    }
    function N(D, O, B, W) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== B.containerInfo || O.stateNode.implementation !== B.implementation ? (O = Pc(B, D.mode, W), O.return = D, O) : (O = d(O, B.children || []), O.return = D, O);
    }
    function q(D, O, B, W, st) {
      return O === null || O.tag !== 7 ? (O = al(
        B,
        D.mode,
        W,
        st
      ), O.return = D, O) : (O = d(O, B), O.return = D, O);
    }
    function K(D, O, B) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = Fc(
          "" + O,
          D.mode,
          B
        ), O.return = D, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case v:
            return B = Za(
              O.type,
              O.key,
              O.props,
              null,
              D.mode,
              B
            ), vr(B, O), B.return = D, B;
          case S:
            return O = Pc(
              O,
              D.mode,
              B
            ), O.return = D, O;
          case I:
            var W = O._init;
            return O = W(O._payload), K(D, O, B);
        }
        if (vt(O) || et(O))
          return O = al(
            O,
            D.mode,
            B,
            null
          ), O.return = D, O;
        if (typeof O.then == "function")
          return K(D, fo(O), B);
        if (O.$$typeof === V)
          return K(
            D,
            Ja(D, O),
            B
          );
        ho(D, O);
      }
      return null;
    }
    function L(D, O, B, W) {
      var st = O !== null ? O.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return st !== null ? null : x(D, O, "" + B, W);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case v:
            return B.key === st ? C(D, O, B, W) : null;
          case S:
            return B.key === st ? N(D, O, B, W) : null;
          case I:
            return st = B._init, B = st(B._payload), L(D, O, B, W);
        }
        if (vt(B) || et(B))
          return st !== null ? null : q(D, O, B, W, null);
        if (typeof B.then == "function")
          return L(
            D,
            O,
            fo(B),
            W
          );
        if (B.$$typeof === V)
          return L(
            D,
            O,
            Ja(D, B),
            W
          );
        ho(D, B);
      }
      return null;
    }
    function z(D, O, B, W, st) {
      if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
        return D = D.get(B) || null, x(O, D, "" + W, st);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case v:
            return D = D.get(
              W.key === null ? B : W.key
            ) || null, C(O, D, W, st);
          case S:
            return D = D.get(
              W.key === null ? B : W.key
            ) || null, N(O, D, W, st);
          case I:
            var At = W._init;
            return W = At(W._payload), z(
              D,
              O,
              B,
              W,
              st
            );
        }
        if (vt(W) || et(W))
          return D = D.get(B) || null, q(O, D, W, st, null);
        if (typeof W.then == "function")
          return z(
            D,
            O,
            B,
            fo(W),
            st
          );
        if (W.$$typeof === V)
          return z(
            D,
            O,
            B,
            Ja(O, W),
            st
          );
        ho(O, W);
      }
      return null;
    }
    function gt(D, O, B, W) {
      for (var st = null, At = null, ot = O, mt = O = 0, he = null; ot !== null && mt < B.length; mt++) {
        ot.index > mt ? (he = ot, ot = null) : he = ot.sibling;
        var Bt = L(
          D,
          ot,
          B[mt],
          W
        );
        if (Bt === null) {
          ot === null && (ot = he);
          break;
        }
        n && ot && Bt.alternate === null && r(D, ot), O = g(Bt, O, mt), At === null ? st = Bt : At.sibling = Bt, At = Bt, ot = he;
      }
      if (mt === B.length)
        return o(D, ot), Nt && ul(D, mt), st;
      if (ot === null) {
        for (; mt < B.length; mt++)
          ot = K(D, B[mt], W), ot !== null && (O = g(
            ot,
            O,
            mt
          ), At === null ? st = ot : At.sibling = ot, At = ot);
        return Nt && ul(D, mt), st;
      }
      for (ot = f(ot); mt < B.length; mt++)
        he = z(
          ot,
          D,
          mt,
          B[mt],
          W
        ), he !== null && (n && he.alternate !== null && ot.delete(
          he.key === null ? mt : he.key
        ), O = g(
          he,
          O,
          mt
        ), At === null ? st = he : At.sibling = he, At = he);
      return n && ot.forEach(function(qn) {
        return r(D, qn);
      }), Nt && ul(D, mt), st;
    }
    function ht(D, O, B, W) {
      if (B == null) throw Error(i(151));
      for (var st = null, At = null, ot = O, mt = O = 0, he = null, Bt = B.next(); ot !== null && !Bt.done; mt++, Bt = B.next()) {
        ot.index > mt ? (he = ot, ot = null) : he = ot.sibling;
        var qn = L(D, ot, Bt.value, W);
        if (qn === null) {
          ot === null && (ot = he);
          break;
        }
        n && ot && qn.alternate === null && r(D, ot), O = g(qn, O, mt), At === null ? st = qn : At.sibling = qn, At = qn, ot = he;
      }
      if (Bt.done)
        return o(D, ot), Nt && ul(D, mt), st;
      if (ot === null) {
        for (; !Bt.done; mt++, Bt = B.next())
          Bt = K(D, Bt.value, W), Bt !== null && (O = g(Bt, O, mt), At === null ? st = Bt : At.sibling = Bt, At = Bt);
        return Nt && ul(D, mt), st;
      }
      for (ot = f(ot); !Bt.done; mt++, Bt = B.next())
        Bt = z(ot, D, mt, Bt.value, W), Bt !== null && (n && Bt.alternate !== null && ot.delete(Bt.key === null ? mt : Bt.key), O = g(Bt, O, mt), At === null ? st = Bt : At.sibling = Bt, At = Bt);
      return n && ot.forEach(function(gA) {
        return r(D, gA);
      }), Nt && ul(D, mt), st;
    }
    function Ut(D, O, B, W) {
      if (typeof B == "object" && B !== null && B.type === w && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case v:
            t: {
              for (var st = B.key; O !== null; ) {
                if (O.key === st) {
                  if (st = B.type, st === w) {
                    if (O.tag === 7) {
                      o(
                        D,
                        O.sibling
                      ), W = d(
                        O,
                        B.props.children
                      ), W.return = D, D = W;
                      break t;
                    }
                  } else if (O.elementType === st || typeof st == "object" && st !== null && st.$$typeof === I && $g(st) === O.type) {
                    o(
                      D,
                      O.sibling
                    ), W = d(O, B.props), vr(W, B), W.return = D, D = W;
                    break t;
                  }
                  o(D, O);
                  break;
                } else r(D, O);
                O = O.sibling;
              }
              B.type === w ? (W = al(
                B.props.children,
                D.mode,
                W,
                B.key
              ), W.return = D, D = W) : (W = Za(
                B.type,
                B.key,
                B.props,
                null,
                D.mode,
                W
              ), vr(W, B), W.return = D, D = W);
            }
            return b(D);
          case S:
            t: {
              for (st = B.key; O !== null; ) {
                if (O.key === st)
                  if (O.tag === 4 && O.stateNode.containerInfo === B.containerInfo && O.stateNode.implementation === B.implementation) {
                    o(
                      D,
                      O.sibling
                    ), W = d(O, B.children || []), W.return = D, D = W;
                    break t;
                  } else {
                    o(D, O);
                    break;
                  }
                else r(D, O);
                O = O.sibling;
              }
              W = Pc(B, D.mode, W), W.return = D, D = W;
            }
            return b(D);
          case I:
            return st = B._init, B = st(B._payload), Ut(
              D,
              O,
              B,
              W
            );
        }
        if (vt(B))
          return gt(
            D,
            O,
            B,
            W
          );
        if (et(B)) {
          if (st = et(B), typeof st != "function") throw Error(i(150));
          return B = st.call(B), ht(
            D,
            O,
            B,
            W
          );
        }
        if (typeof B.then == "function")
          return Ut(
            D,
            O,
            fo(B),
            W
          );
        if (B.$$typeof === V)
          return Ut(
            D,
            O,
            Ja(D, B),
            W
          );
        ho(D, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, O !== null && O.tag === 6 ? (o(D, O.sibling), W = d(O, B), W.return = D, D = W) : (o(D, O), W = Fc(B, D.mode, W), W.return = D, D = W), b(D)) : o(D, O);
    }
    return function(D, O, B, W) {
      try {
        yr = 0;
        var st = Ut(
          D,
          O,
          B,
          W
        );
        return ls = null, st;
      } catch (ot) {
        if (ot === or || ot === to) throw ot;
        var At = Ze(29, ot, null, D.mode);
        return At.lanes = W, At.return = D, At;
      }
    };
  }
  var ss = t0(!0), e0 = t0(!1), ui = G(null), Ei = null;
  function kn(n) {
    var r = n.alternate;
    J(re, re.current & 1), J(ui, n), Ei === null && (r === null || ts.current !== null || r.memoizedState !== null) && (Ei = n);
  }
  function i0(n) {
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
    P(ui), Ei === n && (Ei = null), P(re);
  }
  var re = G(0);
  function mo(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || Sh(o)))
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
  function Rf(n, r, o, f) {
    r = n.memoizedState, o = o(f, r), o = o == null ? r : p({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Bf = {
    enqueueSetState: function(n, r, o) {
      n = n._reactInternals;
      var f = Je(), d = wn(f);
      d.payload = r, o != null && (d.callback = o), r = An(n, d, f), r !== null && ($e(r, n, f), cr(r, n, f));
    },
    enqueueReplaceState: function(n, r, o) {
      n = n._reactInternals;
      var f = Je(), d = wn(f);
      d.tag = 1, d.payload = r, o != null && (d.callback = o), r = An(n, d, f), r !== null && ($e(r, n, f), cr(r, n, f));
    },
    enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var o = Je(), f = wn(o);
      f.tag = 2, r != null && (f.callback = r), r = An(n, f, o), r !== null && ($e(r, n, o), cr(r, n, o));
    }
  };
  function n0(n, r, o, f, d, g, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, b) : r.prototype && r.prototype.isPureReactComponent ? !tr(o, f) || !tr(d, g) : !0;
  }
  function l0(n, r, o, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, f), r.state !== n && Bf.enqueueReplaceState(r, r.state, null);
  }
  function gl(n, r) {
    var o = r;
    if ("ref" in r) {
      o = {};
      for (var f in r)
        f !== "ref" && (o[f] = r[f]);
    }
    if (n = n.defaultProps) {
      o === r && (o = p({}, o));
      for (var d in n)
        o[d] === void 0 && (o[d] = n[d]);
    }
    return o;
  }
  var po = typeof reportError == "function" ? reportError : function(n) {
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
  function s0(n) {
    po(n);
  }
  function r0(n) {
    console.error(n);
  }
  function a0(n) {
    po(n);
  }
  function go(n, r) {
    try {
      var o = n.onUncaughtError;
      o(r.value, { componentStack: r.stack });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function o0(n, r, o) {
    try {
      var f = n.onCaughtError;
      f(o.value, {
        componentStack: o.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Nf(n, r, o) {
    return o = wn(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      go(n, r);
    }, o;
  }
  function u0(n) {
    return n = wn(n), n.tag = 3, n;
  }
  function c0(n, r, o, f) {
    var d = o.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var g = f.value;
      n.payload = function() {
        return d(g);
      }, n.callback = function() {
        o0(r, o, f);
      };
    }
    var b = o.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (n.callback = function() {
      o0(r, o, f), typeof d != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var x = f.stack;
      this.componentDidCatch(f.value, {
        componentStack: x !== null ? x : ""
      });
    });
  }
  function g2(n, r, o, f, d) {
    if (o.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
      if (r = o.alternate, r !== null && sr(
        r,
        o,
        d,
        !0
      ), o = ui.current, o !== null) {
        switch (o.tag) {
          case 13:
            return Ei === null ? nh() : o.alternate === null && Pt === 0 && (Pt = 3), o.flags &= -257, o.flags |= 65536, o.lanes = d, f === of ? o.flags |= 16384 : (r = o.updateQueue, r === null ? o.updateQueue = /* @__PURE__ */ new Set([f]) : r.add(f), sh(n, f, d)), !1;
          case 22:
            return o.flags |= 65536, f === of ? o.flags |= 16384 : (r = o.updateQueue, r === null ? (r = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([f])
            }, o.updateQueue = r) : (o = r.retryQueue, o === null ? r.retryQueue = /* @__PURE__ */ new Set([f]) : o.add(f)), sh(n, f, d)), !1;
        }
        throw Error(i(435, o.tag));
      }
      return sh(n, f, d), nh(), !1;
    }
    if (Nt)
      return r = ui.current, r !== null ? ((r.flags & 65536) === 0 && (r.flags |= 256), r.flags |= 65536, r.lanes = d, f !== tf && (n = Error(i(422), { cause: f }), lr(si(n, o)))) : (f !== tf && (r = Error(i(423), {
        cause: f
      }), lr(
        si(r, o)
      )), n = n.current.alternate, n.flags |= 65536, d &= -d, n.lanes |= d, f = si(f, o), d = Nf(
        n.stateNode,
        f,
        d
      ), ff(n, d), Pt !== 4 && (Pt = 2)), !1;
    var g = Error(i(520), { cause: f });
    if (g = si(g, o), kr === null ? kr = [g] : kr.push(g), Pt !== 4 && (Pt = 2), r === null) return !0;
    f = si(f, o), o = r;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, n = d & -d, o.lanes |= n, n = Nf(o.stateNode, f, n), ff(o, n), !1;
        case 1:
          if (r = o.type, g = o.stateNode, (o.flags & 128) === 0 && (typeof r.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Bn === null || !Bn.has(g))))
            return o.flags |= 65536, d &= -d, o.lanes |= d, d = u0(d), c0(
              d,
              n,
              o,
              f
            ), ff(o, d), !1;
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var f0 = Error(i(461)), ce = !1;
  function pe(n, r, o, f) {
    r.child = n === null ? e0(r, null, o, f) : ss(
      r,
      n.child,
      o,
      f
    );
  }
  function h0(n, r, o, f, d) {
    o = o.render;
    var g = r.ref;
    if ("ref" in f) {
      var b = {};
      for (var x in f)
        x !== "ref" && (b[x] = f[x]);
    } else b = f;
    return dl(r), f = gf(
      n,
      r,
      o,
      b,
      g,
      d
    ), x = yf(), n !== null && !ce ? (vf(n, r, d), rn(n, r, d)) : (Nt && x && Jc(r), r.flags |= 1, pe(n, r, f, d), r.child);
  }
  function d0(n, r, o, f, d) {
    if (n === null) {
      var g = o.type;
      return typeof g == "function" && !Ic(g) && g.defaultProps === void 0 && o.compare === null ? (r.tag = 15, r.type = g, m0(
        n,
        r,
        g,
        f,
        d
      )) : (n = Za(
        o.type,
        null,
        f,
        r,
        r.mode,
        d
      ), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !jf(n, d)) {
      var b = g.memoizedProps;
      if (o = o.compare, o = o !== null ? o : tr, o(b, f) && n.ref === r.ref)
        return rn(n, r, d);
    }
    return r.flags |= 1, n = Ji(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function m0(n, r, o, f, d) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (tr(g, f) && n.ref === r.ref)
        if (ce = !1, r.pendingProps = f = g, jf(n, d))
          (n.flags & 131072) !== 0 && (ce = !0);
        else
          return r.lanes = n.lanes, rn(n, r, d);
    }
    return Lf(
      n,
      r,
      o,
      f,
      d
    );
  }
  function p0(n, r, o) {
    var f = r.pendingProps, d = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") {
      if ((r.flags & 128) !== 0) {
        if (f = g !== null ? g.baseLanes | o : o, n !== null) {
          for (d = r.child = n.child, g = 0; d !== null; )
            g = g | d.lanes | d.childLanes, d = d.sibling;
          r.childLanes = g & ~f;
        } else r.childLanes = 0, r.child = null;
        return g0(
          n,
          r,
          f,
          o
        );
      }
      if ((o & 536870912) !== 0)
        r.memoizedState = { baseLanes: 0, cachePool: null }, n !== null && $a(
          r,
          g !== null ? g.cachePool : null
        ), g !== null ? mg(r, g) : df(), i0(r);
      else
        return r.lanes = r.childLanes = 536870912, g0(
          n,
          r,
          g !== null ? g.baseLanes | o : o,
          o
        );
    } else
      g !== null ? ($a(r, g.cachePool), mg(r, g), Mn(), r.memoizedState = null) : (n !== null && $a(r, null), df(), Mn());
    return pe(n, r, d, o), r.child;
  }
  function g0(n, r, o, f) {
    var d = af();
    return d = d === null ? null : { parent: se._currentValue, pool: d }, r.memoizedState = {
      baseLanes: o,
      cachePool: d
    }, n !== null && $a(r, null), df(), i0(r), n !== null && sr(n, r, f, !0), null;
  }
  function yo(n, r) {
    var o = r.ref;
    if (o === null)
      n !== null && n.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object")
        throw Error(i(284));
      (n === null || n.ref !== o) && (r.flags |= 4194816);
    }
  }
  function Lf(n, r, o, f, d) {
    return dl(r), o = gf(
      n,
      r,
      o,
      f,
      void 0,
      d
    ), f = yf(), n !== null && !ce ? (vf(n, r, d), rn(n, r, d)) : (Nt && f && Jc(r), r.flags |= 1, pe(n, r, o, d), r.child);
  }
  function y0(n, r, o, f, d, g) {
    return dl(r), r.updateQueue = null, o = gg(
      r,
      f,
      o,
      d
    ), pg(n), f = yf(), n !== null && !ce ? (vf(n, r, g), rn(n, r, g)) : (Nt && f && Jc(r), r.flags |= 1, pe(n, r, o, g), r.child);
  }
  function v0(n, r, o, f, d) {
    if (dl(r), r.stateNode === null) {
      var g = Il, b = o.contextType;
      typeof b == "object" && b !== null && (g = Ce(b)), g = new o(f, g), r.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = Bf, r.stateNode = g, g._reactInternals = r, g = r.stateNode, g.props = f, g.state = r.memoizedState, g.refs = {}, uf(r), b = o.contextType, g.context = typeof b == "object" && b !== null ? Ce(b) : Il, g.state = r.memoizedState, b = o.getDerivedStateFromProps, typeof b == "function" && (Rf(
        r,
        o,
        b,
        f
      ), g.state = r.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (b = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), b !== g.state && Bf.enqueueReplaceState(g, g.state, null), hr(r, f, g, d), fr(), g.state = r.memoizedState), typeof g.componentDidMount == "function" && (r.flags |= 4194308), f = !0;
    } else if (n === null) {
      g = r.stateNode;
      var x = r.memoizedProps, C = gl(o, x);
      g.props = C;
      var N = g.context, q = o.contextType;
      b = Il, typeof q == "object" && q !== null && (b = Ce(q));
      var K = o.getDerivedStateFromProps;
      q = typeof K == "function" || typeof g.getSnapshotBeforeUpdate == "function", x = r.pendingProps !== x, q || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x || N !== b) && l0(
        r,
        g,
        f,
        b
      ), xn = !1;
      var L = r.memoizedState;
      g.state = L, hr(r, f, g, d), fr(), N = r.memoizedState, x || L !== N || xn ? (typeof K == "function" && (Rf(
        r,
        o,
        K,
        f
      ), N = r.memoizedState), (C = xn || n0(
        r,
        o,
        C,
        f,
        L,
        N,
        b
      )) ? (q || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = N), g.props = f, g.state = N, g.context = b, f = C) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      g = r.stateNode, cf(n, r), b = r.memoizedProps, q = gl(o, b), g.props = q, K = r.pendingProps, L = g.context, N = o.contextType, C = Il, typeof N == "object" && N !== null && (C = Ce(N)), x = o.getDerivedStateFromProps, (N = typeof x == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== K || L !== C) && l0(
        r,
        g,
        f,
        C
      ), xn = !1, L = r.memoizedState, g.state = L, hr(r, f, g, d), fr();
      var z = r.memoizedState;
      b !== K || L !== z || xn || n !== null && n.dependencies !== null && Pa(n.dependencies) ? (typeof x == "function" && (Rf(
        r,
        o,
        x,
        f
      ), z = r.memoizedState), (q = xn || n0(
        r,
        o,
        q,
        f,
        L,
        z,
        C
      ) || n !== null && n.dependencies !== null && Pa(n.dependencies)) ? (N || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(f, z, C), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(
        f,
        z,
        C
      )), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && L === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && L === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = z), g.props = f, g.state = z, g.context = C, f = q) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && L === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && L === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return g = f, yo(n, r), f = (r.flags & 128) !== 0, g || f ? (g = r.stateNode, o = f && typeof o.getDerivedStateFromError != "function" ? null : g.render(), r.flags |= 1, n !== null && f ? (r.child = ss(
      r,
      n.child,
      null,
      d
    ), r.child = ss(
      r,
      null,
      o,
      d
    )) : pe(n, r, o, d), r.memoizedState = g.state, n = r.child) : n = rn(
      n,
      r,
      d
    ), n;
  }
  function b0(n, r, o, f) {
    return nr(), r.flags |= 256, pe(n, r, o, f), r.child;
  }
  var zf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hf(n) {
    return { baseLanes: n, cachePool: rg() };
  }
  function _f(n, r, o) {
    return n = n !== null ? n.childLanes & ~o : 0, r && (n |= ci), n;
  }
  function S0(n, r, o) {
    var f = r.pendingProps, d = !1, g = (r.flags & 128) !== 0, b;
    if ((b = g) || (b = n !== null && n.memoizedState === null ? !1 : (re.current & 2) !== 0), b && (d = !0, r.flags &= -129), b = (r.flags & 32) !== 0, r.flags &= -33, n === null) {
      if (Nt) {
        if (d ? kn(r) : Mn(), Nt) {
          var x = Ft, C;
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
              treeContext: ol !== null ? { id: $i, overflow: tn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, C = Ze(
              18,
              null,
              null,
              0
            ), C.stateNode = x, C.return = r, r.child = C, Ee = r, Ft = null, C = !0) : C = !1;
          }
          C || fl(r);
        }
        if (x = r.memoizedState, x !== null && (x = x.dehydrated, x !== null))
          return Sh(x) ? r.lanes = 32 : r.lanes = 536870912, null;
        sn(r);
      }
      return x = f.children, f = f.fallback, d ? (Mn(), d = r.mode, x = vo(
        { mode: "hidden", children: x },
        d
      ), f = al(
        f,
        d,
        o,
        null
      ), x.return = r, f.return = r, x.sibling = f, r.child = x, d = r.child, d.memoizedState = Hf(o), d.childLanes = _f(
        n,
        b,
        o
      ), r.memoizedState = zf, f) : (kn(r), Uf(r, x));
    }
    if (C = n.memoizedState, C !== null && (x = C.dehydrated, x !== null)) {
      if (g)
        r.flags & 256 ? (kn(r), r.flags &= -257, r = Vf(
          n,
          r,
          o
        )) : r.memoizedState !== null ? (Mn(), r.child = n.child, r.flags |= 128, r = null) : (Mn(), d = f.fallback, x = r.mode, f = vo(
          { mode: "visible", children: f.children },
          x
        ), d = al(
          d,
          x,
          o,
          null
        ), d.flags |= 2, f.return = r, d.return = r, f.sibling = d, r.child = f, ss(
          r,
          n.child,
          null,
          o
        ), f = r.child, f.memoizedState = Hf(o), f.childLanes = _f(
          n,
          b,
          o
        ), r.memoizedState = zf, r = d);
      else if (kn(r), Sh(x)) {
        if (b = x.nextSibling && x.nextSibling.dataset, b) var N = b.dgst;
        b = N, f = Error(i(419)), f.stack = "", f.digest = b, lr({ value: f, source: null, stack: null }), r = Vf(
          n,
          r,
          o
        );
      } else if (ce || sr(n, r, o, !1), b = (o & n.childLanes) !== 0, ce || b) {
        if (b = Gt, b !== null && (f = o & -o, f = (f & 42) !== 0 ? 1 : Sc(f), f = (f & (b.suspendedLanes | o)) !== 0 ? 0 : f, f !== 0 && f !== C.retryLane))
          throw C.retryLane = f, Zl(n, f), $e(b, n, f), f0;
        x.data === "$?" || nh(), r = Vf(
          n,
          r,
          o
        );
      } else
        x.data === "$?" ? (r.flags |= 192, r.child = n.child, r = null) : (n = C.treeContext, Ft = wi(
          x.nextSibling
        ), Ee = r, Nt = !0, cl = null, Di = !1, n !== null && (ai[oi++] = $i, ai[oi++] = tn, ai[oi++] = ol, $i = n.id, tn = n.overflow, ol = r), r = Uf(
          r,
          f.children
        ), r.flags |= 4096);
      return r;
    }
    return d ? (Mn(), d = f.fallback, x = r.mode, C = n.child, N = C.sibling, f = Ji(C, {
      mode: "hidden",
      children: f.children
    }), f.subtreeFlags = C.subtreeFlags & 65011712, N !== null ? d = Ji(N, d) : (d = al(
      d,
      x,
      o,
      null
    ), d.flags |= 2), d.return = r, f.return = r, f.sibling = d, r.child = f, f = d, d = r.child, x = n.child.memoizedState, x === null ? x = Hf(o) : (C = x.cachePool, C !== null ? (N = se._currentValue, C = C.parent !== N ? { parent: N, pool: N } : C) : C = rg(), x = {
      baseLanes: x.baseLanes | o,
      cachePool: C
    }), d.memoizedState = x, d.childLanes = _f(
      n,
      b,
      o
    ), r.memoizedState = zf, f) : (kn(r), o = n.child, n = o.sibling, o = Ji(o, {
      mode: "visible",
      children: f.children
    }), o.return = r, o.sibling = null, n !== null && (b = r.deletions, b === null ? (r.deletions = [n], r.flags |= 16) : b.push(n)), r.child = o, r.memoizedState = null, o);
  }
  function Uf(n, r) {
    return r = vo(
      { mode: "visible", children: r },
      n.mode
    ), r.return = n, n.child = r;
  }
  function vo(n, r) {
    return n = Ze(22, n, null, r), n.lanes = 0, n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, n;
  }
  function Vf(n, r, o) {
    return ss(r, n.child, null, o), n = Uf(
      r,
      r.pendingProps.children
    ), n.flags |= 2, r.memoizedState = null, n;
  }
  function x0(n, r, o) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), nf(n.return, r, o);
  }
  function qf(n, r, o, f, d) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = {
      isBackwards: r,
      rendering: null,
      renderingStartTime: 0,
      last: f,
      tail: o,
      tailMode: d
    } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = o, g.tailMode = d);
  }
  function w0(n, r, o) {
    var f = r.pendingProps, d = f.revealOrder, g = f.tail;
    if (pe(n, r, f.children, o), f = re.current, (f & 2) !== 0)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        t: for (n = r.child; n !== null; ) {
          if (n.tag === 13)
            n.memoizedState !== null && x0(n, o, r);
          else if (n.tag === 19)
            x0(n, o, r);
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
        for (o = r.child, d = null; o !== null; )
          n = o.alternate, n !== null && mo(n) === null && (d = o), o = o.sibling;
        o = d, o === null ? (d = r.child, r.child = null) : (d = o.sibling, o.sibling = null), qf(
          r,
          !1,
          d,
          o,
          g
        );
        break;
      case "backwards":
        for (o = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && mo(n) === null) {
            r.child = d;
            break;
          }
          n = d.sibling, d.sibling = o, o = d, d = n;
        }
        qf(
          r,
          !0,
          o,
          null,
          g
        );
        break;
      case "together":
        qf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function rn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Rn |= r.lanes, (o & r.childLanes) === 0)
      if (n !== null) {
        if (sr(
          n,
          r,
          o,
          !1
        ), (o & r.childLanes) === 0)
          return null;
      } else return null;
    if (n !== null && r.child !== n.child)
      throw Error(i(153));
    if (r.child !== null) {
      for (n = r.child, o = Ji(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Ji(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function jf(n, r) {
    return (n.lanes & r) !== 0 ? !0 : (n = n.dependencies, !!(n !== null && Pa(n)));
  }
  function y2(n, r, o) {
    switch (r.tag) {
      case 3:
        Wt(r, r.stateNode.containerInfo), Sn(r, se, n.memoizedState.cache), nr();
        break;
      case 27:
      case 5:
        pc(r);
        break;
      case 4:
        Wt(r, r.stateNode.containerInfo);
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
          return f.dehydrated !== null ? (kn(r), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? S0(n, r, o) : (kn(r), n = rn(
            n,
            r,
            o
          ), n !== null ? n.sibling : null);
        kn(r);
        break;
      case 19:
        var d = (n.flags & 128) !== 0;
        if (f = (o & r.childLanes) !== 0, f || (sr(
          n,
          r,
          o,
          !1
        ), f = (o & r.childLanes) !== 0), d) {
          if (f)
            return w0(
              n,
              r,
              o
            );
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), J(re, re.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, p0(n, r, o);
      case 24:
        Sn(r, se, n.memoizedState.cache);
    }
    return rn(n, r, o);
  }
  function A0(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps)
        ce = !0;
      else {
        if (!jf(n, o) && (r.flags & 128) === 0)
          return ce = !1, y2(
            n,
            r,
            o
          );
        ce = (n.flags & 131072) !== 0;
      }
    else
      ce = !1, Nt && (r.flags & 1048576) !== 0 && $p(r, Fa, r.index);
    switch (r.lanes = 0, r.tag) {
      case 16:
        t: {
          n = r.pendingProps;
          var f = r.elementType, d = f._init;
          if (f = d(f._payload), r.type = f, typeof f == "function")
            Ic(f) ? (n = gl(f, n), r.tag = 1, r = v0(
              null,
              r,
              f,
              n,
              o
            )) : (r.tag = 0, r = Lf(
              null,
              r,
              f,
              n,
              o
            ));
          else {
            if (f != null) {
              if (d = f.$$typeof, d === Y) {
                r.tag = 11, r = h0(
                  null,
                  r,
                  f,
                  n,
                  o
                );
                break t;
              } else if (d === U) {
                r.tag = 14, r = d0(
                  null,
                  r,
                  f,
                  n,
                  o
                );
                break t;
              }
            }
            throw r = yt(f) || f, Error(i(306, r, ""));
          }
        }
        return r;
      case 0:
        return Lf(
          n,
          r,
          r.type,
          r.pendingProps,
          o
        );
      case 1:
        return f = r.type, d = gl(
          f,
          r.pendingProps
        ), v0(
          n,
          r,
          f,
          d,
          o
        );
      case 3:
        t: {
          if (Wt(
            r,
            r.stateNode.containerInfo
          ), n === null) throw Error(i(387));
          f = r.pendingProps;
          var g = r.memoizedState;
          d = g.element, cf(n, r), hr(r, f, null, o);
          var b = r.memoizedState;
          if (f = b.cache, Sn(r, se, f), f !== g.cache && lf(
            r,
            [se],
            o,
            !0
          ), fr(), f = b.element, g.isDehydrated)
            if (g = {
              element: f,
              isDehydrated: !1,
              cache: b.cache
            }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
              r = b0(
                n,
                r,
                f,
                o
              );
              break t;
            } else if (f !== d) {
              d = si(
                Error(i(424)),
                r
              ), lr(d), r = b0(
                n,
                r,
                f,
                o
              );
              break t;
            } else
              for (n = r.stateNode.containerInfo, n.nodeType === 9 ? n = n.body : n = n.nodeName === "HTML" ? n.ownerDocument.body : n, Ft = wi(n.firstChild), Ee = r, Nt = !0, cl = null, Di = !0, o = e0(
                r,
                null,
                f,
                o
              ), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (nr(), f === d) {
              r = rn(
                n,
                r,
                o
              );
              break t;
            }
            pe(
              n,
              r,
              f,
              o
            );
          }
          r = r.child;
        }
        return r;
      case 26:
        return yo(n, r), n === null ? (o = Ty(
          r.type,
          null,
          r.pendingProps,
          null
        )) ? r.memoizedState = o : Nt || (o = r.type, n = r.pendingProps, f = Bo(
          pt.current
        ).createElement(o), f[Ae] = r, f[Le] = n, ye(f, o, n), ue(f), r.stateNode = f) : r.memoizedState = Ty(
          r.type,
          n.memoizedProps,
          r.pendingProps,
          n.memoizedState
        ), null;
      case 27:
        return pc(r), n === null && Nt && (f = r.stateNode = Cy(
          r.type,
          r.pendingProps,
          pt.current
        ), Ee = r, Di = !0, d = Ft, zn(r.type) ? (xh = d, Ft = wi(
          f.firstChild
        )) : Ft = d), pe(
          n,
          r,
          r.pendingProps.children,
          o
        ), yo(n, r), n === null && (r.flags |= 4194304), r.child;
      case 5:
        return n === null && Nt && ((d = f = Ft) && (f = W2(
          f,
          r.type,
          r.pendingProps,
          Di
        ), f !== null ? (r.stateNode = f, Ee = r, Ft = wi(
          f.firstChild
        ), Di = !1, d = !0) : d = !1), d || fl(r)), pc(r), d = r.type, g = r.pendingProps, b = n !== null ? n.memoizedProps : null, f = g.children, yh(d, g) ? f = null : b !== null && yh(d, b) && (r.flags |= 32), r.memoizedState !== null && (d = gf(
          n,
          r,
          u2,
          null,
          null,
          o
        ), Lr._currentValue = d), yo(n, r), pe(n, r, f, o), r.child;
      case 6:
        return n === null && Nt && ((n = o = Ft) && (o = K2(
          o,
          r.pendingProps,
          Di
        ), o !== null ? (r.stateNode = o, Ee = r, Ft = null, n = !0) : n = !1), n || fl(r)), null;
      case 13:
        return S0(n, r, o);
      case 4:
        return Wt(
          r,
          r.stateNode.containerInfo
        ), f = r.pendingProps, n === null ? r.child = ss(
          r,
          null,
          f,
          o
        ) : pe(
          n,
          r,
          f,
          o
        ), r.child;
      case 11:
        return h0(
          n,
          r,
          r.type,
          r.pendingProps,
          o
        );
      case 7:
        return pe(
          n,
          r,
          r.pendingProps,
          o
        ), r.child;
      case 8:
        return pe(
          n,
          r,
          r.pendingProps.children,
          o
        ), r.child;
      case 12:
        return pe(
          n,
          r,
          r.pendingProps.children,
          o
        ), r.child;
      case 10:
        return f = r.pendingProps, Sn(r, r.type, f.value), pe(
          n,
          r,
          f.children,
          o
        ), r.child;
      case 9:
        return d = r.type._context, f = r.pendingProps.children, dl(r), d = Ce(d), f = f(d), r.flags |= 1, pe(n, r, f, o), r.child;
      case 14:
        return d0(
          n,
          r,
          r.type,
          r.pendingProps,
          o
        );
      case 15:
        return m0(
          n,
          r,
          r.type,
          r.pendingProps,
          o
        );
      case 19:
        return w0(n, r, o);
      case 31:
        return f = r.pendingProps, o = r.mode, f = {
          mode: f.mode,
          children: f.children
        }, n === null ? (o = vo(
          f,
          o
        ), o.ref = r.ref, r.child = o, o.return = r, r = o) : (o = Ji(n.child, f), o.ref = r.ref, r.child = o, o.return = r, r = o), r;
      case 22:
        return p0(n, r, o);
      case 24:
        return dl(r), f = Ce(se), n === null ? (d = af(), d === null && (d = Gt, g = sf(), d.pooledCache = g, g.refCount++, g !== null && (d.pooledCacheLanes |= o), d = g), r.memoizedState = {
          parent: f,
          cache: d
        }, uf(r), Sn(r, se, d)) : ((n.lanes & o) !== 0 && (cf(n, r), hr(r, null, null, o), fr()), d = n.memoizedState, g = r.memoizedState, d.parent !== f ? (d = { parent: f, cache: f }, r.memoizedState = d, r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = d), Sn(r, se, f)) : (f = g.cache, Sn(r, se, f), f !== d.cache && lf(
          r,
          [se],
          o,
          !0
        ))), pe(
          n,
          r,
          r.pendingProps.children,
          o
        ), r.child;
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  function an(n) {
    n.flags |= 4;
  }
  function C0(n, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (n.flags |= 16777216, !By(r)) {
      if (r = ui.current, r !== null && ((Et & 4194048) === Et ? Ei !== null : (Et & 62914560) !== Et && (Et & 536870912) === 0 || r !== Ei))
        throw ur = of, ag;
      n.flags |= 8192;
    }
  }
  function bo(n, r) {
    r !== null && (n.flags |= 4), n.flags & 16384 && (r = n.tag !== 22 ? ip() : 536870912, n.lanes |= r, us |= r);
  }
  function br(n, r) {
    if (!Nt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var f = null; o !== null; )
            o.alternate !== null && (f = o), o = o.sibling;
          f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
      }
  }
  function Zt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, f = 0;
    if (r)
      for (var d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, f |= d.subtreeFlags & 65011712, f |= d.flags & 65011712, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, f |= d.subtreeFlags, f |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= f, n.childLanes = o, r;
  }
  function v2(n, r, o) {
    var f = r.pendingProps;
    switch ($c(r), r.tag) {
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
        return Zt(r), null;
      case 1:
        return Zt(r), null;
      case 3:
        return o = r.stateNode, f = null, n !== null && (f = n.memoizedState.cache), r.memoizedState.cache !== f && (r.flags |= 2048), nn(se), gn(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (ir(r) ? an(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ig())), Zt(r), null;
      case 26:
        return o = r.memoizedState, n === null ? (an(r), o !== null ? (Zt(r), C0(r, o)) : (Zt(r), r.flags &= -16777217)) : o ? o !== n.memoizedState ? (an(r), Zt(r), C0(r, o)) : (Zt(r), r.flags &= -16777217) : (n.memoizedProps !== f && an(r), Zt(r), r.flags &= -16777217), null;
      case 27:
        Da(r), o = pt.current;
        var d = r.type;
        if (n !== null && r.stateNode != null)
          n.memoizedProps !== f && an(r);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(i(166));
            return Zt(r), null;
          }
          n = rt.current, ir(r) ? tg(r) : (n = Cy(d, f, o), r.stateNode = n, an(r));
        }
        return Zt(r), null;
      case 5:
        if (Da(r), o = r.type, n !== null && r.stateNode != null)
          n.memoizedProps !== f && an(r);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(i(166));
            return Zt(r), null;
          }
          if (n = rt.current, ir(r))
            tg(r);
          else {
            switch (d = Bo(
              pt.current
            ), n) {
              case 1:
                n = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                n = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    n = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    n = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    n = d.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof f.is == "string" ? d.createElement("select", { is: f.is }) : d.createElement("select"), f.multiple ? n.multiple = !0 : f.size && (n.size = f.size);
                    break;
                  default:
                    n = typeof f.is == "string" ? d.createElement(o, { is: f.is }) : d.createElement(o);
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
            t: switch (ye(n, o, f), o) {
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
            n && an(r);
          }
        }
        return Zt(r), r.flags &= -16777217, null;
      case 6:
        if (n && r.stateNode != null)
          n.memoizedProps !== f && an(r);
        else {
          if (typeof f != "string" && r.stateNode === null)
            throw Error(i(166));
          if (n = pt.current, ir(r)) {
            if (n = r.stateNode, o = r.memoizedProps, f = null, d = Ee, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  f = d.memoizedProps;
              }
            n[Ae] = r, n = !!(n.nodeValue === o || f !== null && f.suppressHydrationWarning === !0 || yy(n.nodeValue, o)), n || fl(r);
          } else
            n = Bo(n).createTextNode(
              f
            ), n[Ae] = r, r.stateNode = n;
        }
        return Zt(r), null;
      case 13:
        if (f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (d = ir(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(i(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[Ae] = r;
            } else
              nr(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Zt(r), d = !1;
          } else
            d = ig(), n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return r.flags & 256 ? (sn(r), r) : (sn(r), null);
        }
        if (sn(r), (r.flags & 128) !== 0)
          return r.lanes = o, r;
        if (o = f !== null, n = n !== null && n.memoizedState !== null, o) {
          f = r.child, d = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (d = f.alternate.memoizedState.cachePool.pool);
          var g = null;
          f.memoizedState !== null && f.memoizedState.cachePool !== null && (g = f.memoizedState.cachePool.pool), g !== d && (f.flags |= 2048);
        }
        return o !== n && o && (r.child.flags |= 8192), bo(r, r.updateQueue), Zt(r), null;
      case 4:
        return gn(), n === null && hh(r.stateNode.containerInfo), Zt(r), null;
      case 10:
        return nn(r.type), Zt(r), null;
      case 19:
        if (P(re), d = r.memoizedState, d === null) return Zt(r), null;
        if (f = (r.flags & 128) !== 0, g = d.rendering, g === null)
          if (f) br(d, !1);
          else {
            if (Pt !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (g = mo(n), g !== null) {
                  for (r.flags |= 128, br(d, !1), n = g.updateQueue, r.updateQueue = n, bo(r, n), r.subtreeFlags = 0, n = o, o = r.child; o !== null; )
                    Jp(o, n), o = o.sibling;
                  return J(
                    re,
                    re.current & 1 | 2
                  ), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Oi() > wo && (r.flags |= 128, f = !0, br(d, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = mo(g), n !== null) {
              if (r.flags |= 128, f = !0, n = n.updateQueue, r.updateQueue = n, bo(r, n), br(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !Nt)
                return Zt(r), null;
            } else
              2 * Oi() - d.renderingStartTime > wo && o !== 536870912 && (r.flags |= 128, f = !0, br(d, !1), r.lanes = 4194304);
          d.isBackwards ? (g.sibling = r.child, r.child = g) : (n = d.last, n !== null ? n.sibling = g : r.child = g, d.last = g);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Oi(), r.sibling = null, n = re.current, J(re, f ? n & 1 | 2 : n & 1), r) : (Zt(r), null);
      case 22:
      case 23:
        return sn(r), mf(), f = r.memoizedState !== null, n !== null ? n.memoizedState !== null !== f && (r.flags |= 8192) : f && (r.flags |= 8192), f ? (o & 536870912) !== 0 && (r.flags & 128) === 0 && (Zt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zt(r), o = r.updateQueue, o !== null && bo(r, o.retryQueue), o = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), f = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool), f !== o && (r.flags |= 2048), n !== null && P(ml), null;
      case 24:
        return o = null, n !== null && (o = n.memoizedState.cache), r.memoizedState.cache !== o && (r.flags |= 2048), nn(se), Zt(r), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function b2(n, r) {
    switch ($c(r), r.tag) {
      case 1:
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return nn(se), gn(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 26:
      case 27:
      case 5:
        return Da(r), null;
      case 13:
        if (sn(r), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(i(340));
          nr();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return P(re), null;
      case 4:
        return gn(), null;
      case 10:
        return nn(r.type), null;
      case 22:
      case 23:
        return sn(r), mf(), n !== null && P(ml), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 24:
        return nn(se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function k0(n, r) {
    switch ($c(r), r.tag) {
      case 3:
        nn(se), gn();
        break;
      case 26:
      case 27:
      case 5:
        Da(r);
        break;
      case 4:
        gn();
        break;
      case 13:
        sn(r);
        break;
      case 19:
        P(re);
        break;
      case 10:
        nn(r.type);
        break;
      case 22:
      case 23:
        sn(r), mf(), n !== null && P(ml);
        break;
      case 24:
        nn(se);
    }
  }
  function Sr(n, r) {
    try {
      var o = r.updateQueue, f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var d = f.next;
        o = d;
        do {
          if ((o.tag & n) === n) {
            f = void 0;
            var g = o.create, b = o.inst;
            f = g(), b.destroy = f;
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (x) {
      qt(r, r.return, x);
    }
  }
  function Tn(n, r, o) {
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
              var C = o, N = x;
              try {
                N();
              } catch (q) {
                qt(
                  d,
                  C,
                  q
                );
              }
            }
          }
          f = f.next;
        } while (f !== g);
      }
    } catch (q) {
      qt(r, r.return, q);
    }
  }
  function M0(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var o = n.stateNode;
      try {
        dg(r, o);
      } catch (f) {
        qt(n, n.return, f);
      }
    }
  }
  function T0(n, r, o) {
    o.props = gl(
      n.type,
      n.memoizedProps
    ), o.state = n.memoizedState;
    try {
      o.componentWillUnmount();
    } catch (f) {
      qt(n, r, f);
    }
  }
  function xr(n, r) {
    try {
      var o = n.ref;
      if (o !== null) {
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
        typeof o == "function" ? n.refCleanup = o(f) : o.current = f;
      }
    } catch (d) {
      qt(n, r, d);
    }
  }
  function Ri(n, r) {
    var o = n.ref, f = n.refCleanup;
    if (o !== null)
      if (typeof f == "function")
        try {
          f();
        } catch (d) {
          qt(n, r, d);
        } finally {
          n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
        }
      else if (typeof o == "function")
        try {
          o(null);
        } catch (d) {
          qt(n, r, d);
        }
      else o.current = null;
  }
  function O0(n) {
    var r = n.type, o = n.memoizedProps, f = n.stateNode;
    try {
      t: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && f.focus();
          break t;
        case "img":
          o.src ? f.src = o.src : o.srcSet && (f.srcset = o.srcSet);
      }
    } catch (d) {
      qt(n, n.return, d);
    }
  }
  function Yf(n, r, o) {
    try {
      var f = n.stateNode;
      q2(f, n.type, o, r), f[Le] = r;
    } catch (d) {
      qt(n, n.return, d);
    }
  }
  function D0(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 && zn(n.type) || n.tag === 4;
  }
  function Gf(n) {
    t: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || D0(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.tag === 27 && zn(n.type) || n.flags & 2 || n.child === null || n.tag === 4) continue t;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Xf(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(n, r) : (r = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, r.appendChild(n), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Ro));
    else if (f !== 4 && (f === 27 && zn(n.type) && (o = n.stateNode, r = null), n = n.child, n !== null))
      for (Xf(n, r, o), n = n.sibling; n !== null; )
        Xf(n, r, o), n = n.sibling;
  }
  function So(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (f !== 4 && (f === 27 && zn(n.type) && (o = n.stateNode), n = n.child, n !== null))
      for (So(n, r, o), n = n.sibling; n !== null; )
        So(n, r, o), n = n.sibling;
  }
  function E0(n) {
    var r = n.stateNode, o = n.memoizedProps;
    try {
      for (var f = n.type, d = r.attributes; d.length; )
        r.removeAttributeNode(d[0]);
      ye(r, f, o), r[Ae] = n, r[Le] = o;
    } catch (g) {
      qt(n, n.return, g);
    }
  }
  var on = !1, te = !1, Wf = !1, R0 = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function S2(n, r) {
    if (n = n.containerInfo, ph = Uo, n = Yp(n), Yc(n)) {
      if ("selectionStart" in n)
        var o = {
          start: n.selectionStart,
          end: n.selectionEnd
        };
      else
        t: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var f = o.getSelection && o.getSelection();
          if (f && f.rangeCount !== 0) {
            o = f.anchorNode;
            var d = f.anchorOffset, g = f.focusNode;
            f = f.focusOffset;
            try {
              o.nodeType, g.nodeType;
            } catch {
              o = null;
              break t;
            }
            var b = 0, x = -1, C = -1, N = 0, q = 0, K = n, L = null;
            e: for (; ; ) {
              for (var z; K !== o || d !== 0 && K.nodeType !== 3 || (x = b + d), K !== g || f !== 0 && K.nodeType !== 3 || (C = b + f), K.nodeType === 3 && (b += K.nodeValue.length), (z = K.firstChild) !== null; )
                L = K, K = z;
              for (; ; ) {
                if (K === n) break e;
                if (L === o && ++N === d && (x = b), L === g && ++q === f && (C = b), (z = K.nextSibling) !== null) break;
                K = L, L = K.parentNode;
              }
              K = z;
            }
            o = x === -1 || C === -1 ? null : { start: x, end: C };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (gh = { focusedElem: n, selectionRange: o }, Uo = !1, fe = r; fe !== null; )
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
                n = void 0, o = r, d = g.memoizedProps, g = g.memoizedState, f = o.stateNode;
                try {
                  var gt = gl(
                    o.type,
                    d,
                    o.elementType === o.type
                  );
                  n = f.getSnapshotBeforeUpdate(
                    gt,
                    g
                  ), f.__reactInternalSnapshotBeforeUpdate = n;
                } catch (ht) {
                  qt(
                    o,
                    o.return,
                    ht
                  );
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (n = r.stateNode.containerInfo, o = n.nodeType, o === 9)
                  bh(n);
                else if (o === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bh(n);
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
  function B0(n, r, o) {
    var f = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        On(n, o), f & 4 && Sr(5, o);
        break;
      case 1:
        if (On(n, o), f & 4)
          if (n = o.stateNode, r === null)
            try {
              n.componentDidMount();
            } catch (b) {
              qt(o, o.return, b);
            }
          else {
            var d = gl(
              o.type,
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
              qt(
                o,
                o.return,
                b
              );
            }
          }
        f & 64 && M0(o), f & 512 && xr(o, o.return);
        break;
      case 3:
        if (On(n, o), f & 64 && (n = o.updateQueue, n !== null)) {
          if (r = null, o.child !== null)
            switch (o.child.tag) {
              case 27:
              case 5:
                r = o.child.stateNode;
                break;
              case 1:
                r = o.child.stateNode;
            }
          try {
            dg(n, r);
          } catch (b) {
            qt(o, o.return, b);
          }
        }
        break;
      case 27:
        r === null && f & 4 && E0(o);
      case 26:
      case 5:
        On(n, o), r === null && f & 4 && O0(o), f & 512 && xr(o, o.return);
        break;
      case 12:
        On(n, o);
        break;
      case 13:
        On(n, o), f & 4 && z0(n, o), f & 64 && (n = o.memoizedState, n !== null && (n = n.dehydrated, n !== null && (o = D2.bind(
          null,
          o
        ), Q2(n, o))));
        break;
      case 22:
        if (f = o.memoizedState !== null || on, !f) {
          r = r !== null && r.memoizedState !== null || te, d = on;
          var g = te;
          on = f, (te = r) && !g ? Dn(
            n,
            o,
            (o.subtreeFlags & 8772) !== 0
          ) : On(n, o), on = d, te = g;
        }
        break;
      case 30:
        break;
      default:
        On(n, o);
    }
  }
  function N0(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, N0(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && Ac(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  var Kt = null, _e = !1;
  function un(n, r, o) {
    for (o = o.child; o !== null; )
      L0(n, r, o), o = o.sibling;
  }
  function L0(n, r, o) {
    if (We && typeof We.onCommitFiberUnmount == "function")
      try {
        We.onCommitFiberUnmount(Ys, o);
      } catch {
      }
    switch (o.tag) {
      case 26:
        te || Ri(o, r), un(
          n,
          r,
          o
        ), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
        break;
      case 27:
        te || Ri(o, r);
        var f = Kt, d = _e;
        zn(o.type) && (Kt = o.stateNode, _e = !1), un(
          n,
          r,
          o
        ), Er(o.stateNode), Kt = f, _e = d;
        break;
      case 5:
        te || Ri(o, r);
      case 6:
        if (f = Kt, d = _e, Kt = null, un(
          n,
          r,
          o
        ), Kt = f, _e = d, Kt !== null)
          if (_e)
            try {
              (Kt.nodeType === 9 ? Kt.body : Kt.nodeName === "HTML" ? Kt.ownerDocument.body : Kt).removeChild(o.stateNode);
            } catch (g) {
              qt(
                o,
                r,
                g
              );
            }
          else
            try {
              Kt.removeChild(o.stateNode);
            } catch (g) {
              qt(
                o,
                r,
                g
              );
            }
        break;
      case 18:
        Kt !== null && (_e ? (n = Kt, wy(
          n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
          o.stateNode
        ), Ur(n)) : wy(Kt, o.stateNode));
        break;
      case 4:
        f = Kt, d = _e, Kt = o.stateNode.containerInfo, _e = !0, un(
          n,
          r,
          o
        ), Kt = f, _e = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        te || Tn(2, o, r), te || Tn(4, o, r), un(
          n,
          r,
          o
        );
        break;
      case 1:
        te || (Ri(o, r), f = o.stateNode, typeof f.componentWillUnmount == "function" && T0(
          o,
          r,
          f
        )), un(
          n,
          r,
          o
        );
        break;
      case 21:
        un(
          n,
          r,
          o
        );
        break;
      case 22:
        te = (f = te) || o.memoizedState !== null, un(
          n,
          r,
          o
        ), te = f;
        break;
      default:
        un(
          n,
          r,
          o
        );
    }
  }
  function z0(n, r) {
    if (r.memoizedState === null && (n = r.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null))))
      try {
        Ur(n);
      } catch (o) {
        qt(r, r.return, o);
      }
  }
  function x2(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var r = n.stateNode;
        return r === null && (r = n.stateNode = new R0()), r;
      case 22:
        return n = n.stateNode, r = n._retryCache, r === null && (r = n._retryCache = new R0()), r;
      default:
        throw Error(i(435, n.tag));
    }
  }
  function Kf(n, r) {
    var o = x2(n);
    r.forEach(function(f) {
      var d = E2.bind(null, n, f);
      o.has(f) || (o.add(f), f.then(d, d));
    });
  }
  function Ie(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var f = 0; f < o.length; f++) {
        var d = o[f], g = n, b = r, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (zn(x.type)) {
                Kt = x.stateNode, _e = !1;
                break t;
              }
              break;
            case 5:
              Kt = x.stateNode, _e = !1;
              break t;
            case 3:
            case 4:
              Kt = x.stateNode.containerInfo, _e = !0;
              break t;
          }
          x = x.return;
        }
        if (Kt === null) throw Error(i(160));
        L0(g, b, d), Kt = null, _e = !1, g = d.alternate, g !== null && (g.return = null), d.return = null;
      }
    if (r.subtreeFlags & 13878)
      for (r = r.child; r !== null; )
        H0(r, n), r = r.sibling;
  }
  var xi = null;
  function H0(n, r) {
    var o = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ie(r, n), Fe(n), f & 4 && (Tn(3, n, n.return), Sr(3, n), Tn(5, n, n.return));
        break;
      case 1:
        Ie(r, n), Fe(n), f & 512 && (te || o === null || Ri(o, o.return)), f & 64 && on && (n = n.updateQueue, n !== null && (f = n.callbacks, f !== null && (o = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = o === null ? f : o.concat(f))));
        break;
      case 26:
        var d = xi;
        if (Ie(r, n), Fe(n), f & 512 && (te || o === null || Ri(o, o.return)), f & 4) {
          var g = o !== null ? o.memoizedState : null;
          if (f = n.memoizedState, o === null)
            if (f === null)
              if (n.stateNode === null) {
                t: {
                  f = n.type, o = n.memoizedProps, d = d.ownerDocument || d;
                  e: switch (f) {
                    case "title":
                      g = d.getElementsByTagName("title")[0], (!g || g[Ws] || g[Ae] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = d.createElement(f), d.head.insertBefore(
                        g,
                        d.querySelector("head > title")
                      )), ye(g, f, o), g[Ae] = n, ue(g), f = g;
                      break t;
                    case "link":
                      var b = Ey(
                        "link",
                        "href",
                        d
                      ).get(f + (o.href || ""));
                      if (b) {
                        for (var x = 0; x < b.length; x++)
                          if (g = b[x], g.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && g.getAttribute("rel") === (o.rel == null ? null : o.rel) && g.getAttribute("title") === (o.title == null ? null : o.title) && g.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                            b.splice(x, 1);
                            break e;
                          }
                      }
                      g = d.createElement(f), ye(g, f, o), d.head.appendChild(g);
                      break;
                    case "meta":
                      if (b = Ey(
                        "meta",
                        "content",
                        d
                      ).get(f + (o.content || ""))) {
                        for (x = 0; x < b.length; x++)
                          if (g = b[x], g.getAttribute("content") === (o.content == null ? null : "" + o.content) && g.getAttribute("name") === (o.name == null ? null : o.name) && g.getAttribute("property") === (o.property == null ? null : o.property) && g.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && g.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                            b.splice(x, 1);
                            break e;
                          }
                      }
                      g = d.createElement(f), ye(g, f, o), d.head.appendChild(g);
                      break;
                    default:
                      throw Error(i(468, f));
                  }
                  g[Ae] = n, ue(g), f = g;
                }
                n.stateNode = f;
              } else
                Ry(
                  d,
                  n.type,
                  n.stateNode
                );
            else
              n.stateNode = Dy(
                d,
                f,
                n.memoizedProps
              );
          else
            g !== f ? (g === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : g.count--, f === null ? Ry(
              d,
              n.type,
              n.stateNode
            ) : Dy(
              d,
              f,
              n.memoizedProps
            )) : f === null && n.stateNode !== null && Yf(
              n,
              n.memoizedProps,
              o.memoizedProps
            );
        }
        break;
      case 27:
        Ie(r, n), Fe(n), f & 512 && (te || o === null || Ri(o, o.return)), o !== null && f & 4 && Yf(
          n,
          n.memoizedProps,
          o.memoizedProps
        );
        break;
      case 5:
        if (Ie(r, n), Fe(n), f & 512 && (te || o === null || Ri(o, o.return)), n.flags & 32) {
          d = n.stateNode;
          try {
            jl(d, "");
          } catch (z) {
            qt(n, n.return, z);
          }
        }
        f & 4 && n.stateNode != null && (d = n.memoizedProps, Yf(
          n,
          d,
          o !== null ? o.memoizedProps : d
        )), f & 1024 && (Wf = !0);
        break;
      case 6:
        if (Ie(r, n), Fe(n), f & 4) {
          if (n.stateNode === null)
            throw Error(i(162));
          f = n.memoizedProps, o = n.stateNode;
          try {
            o.nodeValue = f;
          } catch (z) {
            qt(n, n.return, z);
          }
        }
        break;
      case 3:
        if (zo = null, d = xi, xi = No(r.containerInfo), Ie(r, n), xi = d, Fe(n), f & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Ur(r.containerInfo);
          } catch (z) {
            qt(n, n.return, z);
          }
        Wf && (Wf = !1, _0(n));
        break;
      case 4:
        f = xi, xi = No(
          n.stateNode.containerInfo
        ), Ie(r, n), Fe(n), xi = f;
        break;
      case 12:
        Ie(r, n), Fe(n);
        break;
      case 13:
        Ie(r, n), Fe(n), n.child.flags & 8192 && n.memoizedState !== null != (o !== null && o.memoizedState !== null) && (Jf = Oi()), f & 4 && (f = n.updateQueue, f !== null && (n.updateQueue = null, Kf(n, f)));
        break;
      case 22:
        d = n.memoizedState !== null;
        var C = o !== null && o.memoizedState !== null, N = on, q = te;
        if (on = N || d, te = q || C, Ie(r, n), te = q, on = N, Fe(n), f & 8192)
          t: for (r = n.stateNode, r._visibility = d ? r._visibility & -2 : r._visibility | 1, d && (o === null || C || on || te || yl(n)), o = null, r = n; ; ) {
            if (r.tag === 5 || r.tag === 26) {
              if (o === null) {
                C = o = r;
                try {
                  if (g = C.stateNode, d)
                    b = g.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    x = C.stateNode;
                    var K = C.memoizedProps.style, L = K != null && K.hasOwnProperty("display") ? K.display : null;
                    x.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (z) {
                  qt(C, C.return, z);
                }
              }
            } else if (r.tag === 6) {
              if (o === null) {
                C = r;
                try {
                  C.stateNode.nodeValue = d ? "" : C.memoizedProps;
                } catch (z) {
                  qt(C, C.return, z);
                }
              }
            } else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === n) && r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === n) break t;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === n) break t;
              o === r && (o = null), r = r.return;
            }
            o === r && (o = null), r.sibling.return = r.return, r = r.sibling;
          }
        f & 4 && (f = n.updateQueue, f !== null && (o = f.retryQueue, o !== null && (f.retryQueue = null, Kf(n, o))));
        break;
      case 19:
        Ie(r, n), Fe(n), f & 4 && (f = n.updateQueue, f !== null && (n.updateQueue = null, Kf(n, f)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ie(r, n), Fe(n);
    }
  }
  function Fe(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        for (var o, f = n.return; f !== null; ) {
          if (D0(f)) {
            o = f;
            break;
          }
          f = f.return;
        }
        if (o == null) throw Error(i(160));
        switch (o.tag) {
          case 27:
            var d = o.stateNode, g = Gf(n);
            So(n, g, d);
            break;
          case 5:
            var b = o.stateNode;
            o.flags & 32 && (jl(b, ""), o.flags &= -33);
            var x = Gf(n);
            So(n, x, b);
            break;
          case 3:
          case 4:
            var C = o.stateNode.containerInfo, N = Gf(n);
            Xf(
              n,
              N,
              C
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (q) {
        qt(n, n.return, q);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _0(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var r = n;
        _0(r), r.tag === 5 && r.flags & 1024 && r.stateNode.reset(), n = n.sibling;
      }
  }
  function On(n, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; )
        B0(n, r.alternate, r), r = r.sibling;
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
          var o = r.stateNode;
          typeof o.componentWillUnmount == "function" && T0(
            r,
            r.return,
            o
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
  function Dn(n, r, o) {
    for (o = o && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var f = r.alternate, d = n, g = r, b = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Dn(
            d,
            g,
            o
          ), Sr(4, g);
          break;
        case 1:
          if (Dn(
            d,
            g,
            o
          ), f = g, d = f.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (N) {
              qt(f, f.return, N);
            }
          if (f = g, d = f.updateQueue, d !== null) {
            var x = f.stateNode;
            try {
              var C = d.shared.hiddenCallbacks;
              if (C !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < C.length; d++)
                  hg(C[d], x);
            } catch (N) {
              qt(f, f.return, N);
            }
          }
          o && b & 64 && M0(g), xr(g, g.return);
          break;
        case 27:
          E0(g);
        case 26:
        case 5:
          Dn(
            d,
            g,
            o
          ), o && f === null && b & 4 && O0(g), xr(g, g.return);
          break;
        case 12:
          Dn(
            d,
            g,
            o
          );
          break;
        case 13:
          Dn(
            d,
            g,
            o
          ), o && b & 4 && z0(d, g);
          break;
        case 22:
          g.memoizedState === null && Dn(
            d,
            g,
            o
          ), xr(g, g.return);
          break;
        case 30:
          break;
        default:
          Dn(
            d,
            g,
            o
          );
      }
      r = r.sibling;
    }
  }
  function Qf(n, r) {
    var o = null;
    n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), n = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (n = r.memoizedState.cachePool.pool), n !== o && (n != null && n.refCount++, o != null && rr(o));
  }
  function Zf(n, r) {
    n = null, r.alternate !== null && (n = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== n && (r.refCount++, n != null && rr(n));
  }
  function Bi(n, r, o, f) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; )
        U0(
          n,
          r,
          o,
          f
        ), r = r.sibling;
  }
  function U0(n, r, o, f) {
    var d = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Bi(
          n,
          r,
          o,
          f
        ), d & 2048 && Sr(9, r);
        break;
      case 1:
        Bi(
          n,
          r,
          o,
          f
        );
        break;
      case 3:
        Bi(
          n,
          r,
          o,
          f
        ), d & 2048 && (n = null, r.alternate !== null && (n = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== n && (r.refCount++, n != null && rr(n)));
        break;
      case 12:
        if (d & 2048) {
          Bi(
            n,
            r,
            o,
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
            qt(r, r.return, C);
          }
        } else
          Bi(
            n,
            r,
            o,
            f
          );
        break;
      case 13:
        Bi(
          n,
          r,
          o,
          f
        );
        break;
      case 23:
        break;
      case 22:
        g = r.stateNode, b = r.alternate, r.memoizedState !== null ? g._visibility & 2 ? Bi(
          n,
          r,
          o,
          f
        ) : wr(n, r) : g._visibility & 2 ? Bi(
          n,
          r,
          o,
          f
        ) : (g._visibility |= 2, rs(
          n,
          r,
          o,
          f,
          (r.subtreeFlags & 10256) !== 0
        )), d & 2048 && Qf(b, r);
        break;
      case 24:
        Bi(
          n,
          r,
          o,
          f
        ), d & 2048 && Zf(r.alternate, r);
        break;
      default:
        Bi(
          n,
          r,
          o,
          f
        );
    }
  }
  function rs(n, r, o, f, d) {
    for (d = d && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var g = n, b = r, x = o, C = f, N = b.flags;
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
          var q = b.stateNode;
          b.memoizedState !== null ? q._visibility & 2 ? rs(
            g,
            b,
            x,
            C,
            d
          ) : wr(
            g,
            b
          ) : (q._visibility |= 2, rs(
            g,
            b,
            x,
            C,
            d
          )), d && N & 2048 && Qf(
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
          ), d && N & 2048 && Zf(b.alternate, b);
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
        var o = n, f = r, d = f.flags;
        switch (f.tag) {
          case 22:
            wr(o, f), d & 2048 && Qf(
              f.alternate,
              f
            );
            break;
          case 24:
            wr(o, f), d & 2048 && Zf(f.alternate, f);
            break;
          default:
            wr(o, f);
        }
        r = r.sibling;
      }
  }
  var Ar = 8192;
  function as(n) {
    if (n.subtreeFlags & Ar)
      for (n = n.child; n !== null; )
        V0(n), n = n.sibling;
  }
  function V0(n) {
    switch (n.tag) {
      case 26:
        as(n), n.flags & Ar && n.memoizedState !== null && rA(
          xi,
          n.memoizedState,
          n.memoizedProps
        );
        break;
      case 5:
        as(n);
        break;
      case 3:
      case 4:
        var r = xi;
        xi = No(n.stateNode.containerInfo), as(n), xi = r;
        break;
      case 22:
        n.memoizedState === null && (r = n.alternate, r !== null && r.memoizedState !== null ? (r = Ar, Ar = 16777216, as(n), Ar = r) : as(n));
        break;
      default:
        as(n);
    }
  }
  function q0(n) {
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
        for (var o = 0; o < r.length; o++) {
          var f = r[o];
          fe = f, Y0(
            f,
            n
          );
        }
      q0(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        j0(n), n = n.sibling;
  }
  function j0(n) {
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
        n.memoizedState !== null && r._visibility & 2 && (n.return === null || n.return.tag !== 13) ? (r._visibility &= -3, xo(n)) : Cr(n);
        break;
      default:
        Cr(n);
    }
  }
  function xo(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var o = 0; o < r.length; o++) {
          var f = r[o];
          fe = f, Y0(
            f,
            n
          );
        }
      q0(n);
    }
    for (n = n.child; n !== null; ) {
      switch (r = n, r.tag) {
        case 0:
        case 11:
        case 15:
          Tn(8, r, r.return), xo(r);
          break;
        case 22:
          o = r.stateNode, o._visibility & 2 && (o._visibility &= -3, xo(r));
          break;
        default:
          xo(r);
      }
      n = n.sibling;
    }
  }
  function Y0(n, r) {
    for (; fe !== null; ) {
      var o = fe;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Tn(8, o, r);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var f = o.memoizedState.cachePool.pool;
            f != null && f.refCount++;
          }
          break;
        case 24:
          rr(o.memoizedState.cache);
      }
      if (f = o.child, f !== null) f.return = o, fe = f;
      else
        t: for (o = n; fe !== null; ) {
          f = fe;
          var d = f.sibling, g = f.return;
          if (N0(f), f === o) {
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
  var w2 = {
    getCacheForType: function(n) {
      var r = Ce(se), o = r.data.get(n);
      return o === void 0 && (o = n(), r.data.set(n, o)), o;
    }
  }, A2 = typeof WeakMap == "function" ? WeakMap : Map, Lt = 0, Gt = null, Ct = null, Et = 0, zt = 0, Pe = null, En = !1, os = !1, If = !1, cn = 0, Pt = 0, Rn = 0, vl = 0, Ff = 0, ci = 0, us = 0, kr = null, Ue = null, Pf = !1, Jf = 0, wo = 1 / 0, Ao = null, Bn = null, ge = 0, Nn = null, cs = null, fs = 0, $f = 0, th = null, G0 = null, Mr = 0, eh = null;
  function Je() {
    if ((Lt & 2) !== 0 && Et !== 0)
      return Et & -Et;
    if (H.T !== null) {
      var n = Jl;
      return n !== 0 ? n : oh();
    }
    return sp();
  }
  function X0() {
    ci === 0 && (ci = (Et & 536870912) === 0 || Nt ? ep() : 536870912);
    var n = ui.current;
    return n !== null && (n.flags |= 32), ci;
  }
  function $e(n, r, o) {
    (n === Gt && (zt === 2 || zt === 9) || n.cancelPendingCommit !== null) && (hs(n, 0), Ln(
      n,
      Et,
      ci,
      !1
    )), Xs(n, o), ((Lt & 2) === 0 || n !== Gt) && (n === Gt && ((Lt & 2) === 0 && (vl |= o), Pt === 4 && Ln(
      n,
      Et,
      ci,
      !1
    )), Ni(n));
  }
  function W0(n, r, o) {
    if ((Lt & 6) !== 0) throw Error(i(327));
    var f = !o && (r & 124) === 0 && (r & n.expiredLanes) === 0 || Gs(n, r), d = f ? M2(n, r) : lh(n, r, !0), g = f;
    do {
      if (d === 0) {
        os && !f && Ln(n, r, 0, !1);
        break;
      } else {
        if (o = n.current.alternate, g && !C2(o)) {
          d = lh(n, r, !1), g = !1;
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
              if (C && (hs(x, b).flags |= 256), b = lh(
                x,
                b,
                !1
              ), b !== 2) {
                if (If && !C) {
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
          if ((r & 62914560) === r && (d = Jf + 300 - Oi(), 10 < d)) {
            if (Ln(
              f,
              r,
              ci,
              !En
            ), Na(f, 0, !0) !== 0) break t;
            f.timeoutHandle = Sy(
              K0.bind(
                null,
                f,
                o,
                Ue,
                Ao,
                Pf,
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
          K0(
            f,
            o,
            Ue,
            Ao,
            Pf,
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
  function K0(n, r, o, f, d, g, b, x, C, N, q, K, L, z) {
    if (n.timeoutHandle = -1, K = r.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Nr = { stylesheets: null, count: 0, unsuspend: sA }, V0(r), K = aA(), K !== null)) {
      n.cancelPendingCommit = K(
        $0.bind(
          null,
          n,
          r,
          g,
          o,
          f,
          d,
          b,
          x,
          C,
          q,
          1,
          L,
          z
        )
      ), Ln(n, g, b, !N);
      return;
    }
    $0(
      n,
      r,
      g,
      o,
      f,
      d,
      b,
      x,
      C
    );
  }
  function C2(n) {
    for (var r = n; ; ) {
      var o = r.tag;
      if ((o === 0 || o === 11 || o === 15) && r.flags & 16384 && (o = r.updateQueue, o !== null && (o = o.stores, o !== null)))
        for (var f = 0; f < o.length; f++) {
          var d = o[f], g = d.getSnapshot;
          d = d.value;
          try {
            if (!Qe(g(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
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
  function Ln(n, r, o, f) {
    r &= ~Ff, r &= ~vl, n.suspendedLanes |= r, n.pingedLanes &= ~r, f && (n.warmLanes |= r), f = n.expirationTimes;
    for (var d = r; 0 < d; ) {
      var g = 31 - Ke(d), b = 1 << g;
      f[g] = -1, d &= ~b;
    }
    o !== 0 && np(n, o, r);
  }
  function Co() {
    return (Lt & 6) === 0 ? (Tr(0), !1) : !0;
  }
  function ih() {
    if (Ct !== null) {
      if (zt === 0)
        var n = Ct.return;
      else
        n = Ct, en = hl = null, bf(n), ls = null, yr = 0, n = Ct;
      for (; n !== null; )
        k0(n.alternate, n), n = n.return;
      Ct = null;
    }
  }
  function hs(n, r) {
    var o = n.timeoutHandle;
    o !== -1 && (n.timeoutHandle = -1, Y2(o)), o = n.cancelPendingCommit, o !== null && (n.cancelPendingCommit = null, o()), ih(), Gt = n, Ct = o = Ji(n.current, null), Et = r, zt = 0, Pe = null, En = !1, os = Gs(n, r), If = !1, us = ci = Ff = vl = Rn = Pt = 0, Ue = kr = null, Pf = !1, (r & 8) !== 0 && (r |= r & 32);
    var f = n.entangledLanes;
    if (f !== 0)
      for (n = n.entanglements, f &= r; 0 < f; ) {
        var d = 31 - Ke(f), g = 1 << d;
        r |= n[d], f &= ~g;
      }
    return cn = r, Wa(), o;
  }
  function Q0(n, r) {
    wt = null, H.H = co, r === or || r === to ? (r = cg(), zt = 3) : r === ag ? (r = cg(), zt = 4) : zt = r === f0 ? 8 : r !== null && typeof r == "object" && typeof r.then == "function" ? 6 : 1, Pe = r, Ct === null && (Pt = 1, go(
      n,
      si(r, n.current)
    ));
  }
  function Z0() {
    var n = H.H;
    return H.H = co, n === null ? co : n;
  }
  function I0() {
    var n = H.A;
    return H.A = w2, n;
  }
  function nh() {
    Pt = 4, En || (Et & 4194048) !== Et && ui.current !== null || (os = !0), (Rn & 134217727) === 0 && (vl & 134217727) === 0 || Gt === null || Ln(
      Gt,
      Et,
      ci,
      !1
    );
  }
  function lh(n, r, o) {
    var f = Lt;
    Lt |= 2;
    var d = Z0(), g = I0();
    (Gt !== n || Et !== r) && (Ao = null, hs(n, r)), r = !1;
    var b = Pt;
    t: do
      try {
        if (zt !== 0 && Ct !== null) {
          var x = Ct, C = Pe;
          switch (zt) {
            case 8:
              ih(), b = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ui.current === null && (r = !0);
              var N = zt;
              if (zt = 0, Pe = null, ds(n, x, C, N), o && os) {
                b = 0;
                break t;
              }
              break;
            default:
              N = zt, zt = 0, Pe = null, ds(n, x, C, N);
          }
        }
        k2(), b = Pt;
        break;
      } catch (q) {
        Q0(n, q);
      }
    while (!0);
    return r && n.shellSuspendCounter++, en = hl = null, Lt = f, H.H = d, H.A = g, Ct === null && (Gt = null, Et = 0, Wa()), b;
  }
  function k2() {
    for (; Ct !== null; ) F0(Ct);
  }
  function M2(n, r) {
    var o = Lt;
    Lt |= 2;
    var f = Z0(), d = I0();
    Gt !== n || Et !== r ? (Ao = null, wo = Oi() + 500, hs(n, r)) : os = Gs(
      n,
      r
    );
    t: do
      try {
        if (zt !== 0 && Ct !== null) {
          r = Ct;
          var g = Pe;
          e: switch (zt) {
            case 1:
              zt = 0, Pe = null, ds(n, r, g, 1);
              break;
            case 2:
            case 9:
              if (og(g)) {
                zt = 0, Pe = null, P0(r);
                break;
              }
              r = function() {
                zt !== 2 && zt !== 9 || Gt !== n || (zt = 7), Ni(n);
              }, g.then(r, r);
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              og(g) ? (zt = 0, Pe = null, P0(r)) : (zt = 0, Pe = null, ds(n, r, g, 7));
              break;
            case 5:
              var b = null;
              switch (Ct.tag) {
                case 26:
                  b = Ct.memoizedState;
                case 5:
                case 27:
                  var x = Ct;
                  if (!b || By(b)) {
                    zt = 0, Pe = null;
                    var C = x.sibling;
                    if (C !== null) Ct = C;
                    else {
                      var N = x.return;
                      N !== null ? (Ct = N, ko(N)) : Ct = null;
                    }
                    break e;
                  }
              }
              zt = 0, Pe = null, ds(n, r, g, 5);
              break;
            case 6:
              zt = 0, Pe = null, ds(n, r, g, 6);
              break;
            case 8:
              ih(), Pt = 6;
              break t;
            default:
              throw Error(i(462));
          }
        }
        T2();
        break;
      } catch (q) {
        Q0(n, q);
      }
    while (!0);
    return en = hl = null, H.H = f, H.A = d, Lt = o, Ct !== null ? 0 : (Gt = null, Et = 0, Wa(), Pt);
  }
  function T2() {
    for (; Ct !== null && !Ix(); )
      F0(Ct);
  }
  function F0(n) {
    var r = A0(n.alternate, n, cn);
    n.memoizedProps = n.pendingProps, r === null ? ko(n) : Ct = r;
  }
  function P0(n) {
    var r = n, o = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = y0(
          o,
          r,
          r.pendingProps,
          r.type,
          void 0,
          Et
        );
        break;
      case 11:
        r = y0(
          o,
          r,
          r.pendingProps,
          r.type.render,
          r.ref,
          Et
        );
        break;
      case 5:
        bf(r);
      default:
        k0(o, r), r = Ct = Jp(r, cn), r = A0(o, r, cn);
    }
    n.memoizedProps = n.pendingProps, r === null ? ko(n) : Ct = r;
  }
  function ds(n, r, o, f) {
    en = hl = null, bf(r), ls = null, yr = 0;
    var d = r.return;
    try {
      if (g2(
        n,
        d,
        r,
        o,
        Et
      )) {
        Pt = 1, go(
          n,
          si(o, n.current)
        ), Ct = null;
        return;
      }
    } catch (g) {
      if (d !== null) throw Ct = d, g;
      Pt = 1, go(
        n,
        si(o, n.current)
      ), Ct = null;
      return;
    }
    r.flags & 32768 ? (Nt || f === 1 ? n = !0 : os || (Et & 536870912) !== 0 ? n = !1 : (En = n = !0, (f === 2 || f === 9 || f === 3 || f === 6) && (f = ui.current, f !== null && f.tag === 13 && (f.flags |= 16384))), J0(r, n)) : ko(r);
  }
  function ko(n) {
    var r = n;
    do {
      if ((r.flags & 32768) !== 0) {
        J0(
          r,
          En
        );
        return;
      }
      n = r.return;
      var o = v2(
        r.alternate,
        r,
        cn
      );
      if (o !== null) {
        Ct = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ct = r;
        return;
      }
      Ct = r = n;
    } while (r !== null);
    Pt === 0 && (Pt = 5);
  }
  function J0(n, r) {
    do {
      var o = b2(n.alternate, n);
      if (o !== null) {
        o.flags &= 32767, Ct = o;
        return;
      }
      if (o = n.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !r && (n = n.sibling, n !== null)) {
        Ct = n;
        return;
      }
      Ct = n = o;
    } while (n !== null);
    Pt = 6, Ct = null;
  }
  function $0(n, r, o, f, d, g, b, x, C) {
    n.cancelPendingCommit = null;
    do
      Mo();
    while (ge !== 0);
    if ((Lt & 6) !== 0) throw Error(i(327));
    if (r !== null) {
      if (r === n.current) throw Error(i(177));
      if (g = r.lanes | r.childLanes, g |= Qc, sw(
        n,
        o,
        g,
        b,
        x,
        C
      ), n === Gt && (Ct = Gt = null, Et = 0), cs = r, Nn = n, fs = o, $f = g, th = d, G0 = f, (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? (n.callbackNode = null, n.callbackPriority = 0, R2(Ea, function() {
        return ly(), null;
      })) : (n.callbackNode = null, n.callbackPriority = 0), f = (r.flags & 13878) !== 0, (r.subtreeFlags & 13878) !== 0 || f) {
        f = H.T, H.T = null, d = Q.p, Q.p = 2, b = Lt, Lt |= 4;
        try {
          S2(n, r, o);
        } finally {
          Lt = b, Q.p = d, H.T = f;
        }
      }
      ge = 1, ty(), ey(), iy();
    }
  }
  function ty() {
    if (ge === 1) {
      ge = 0;
      var n = Nn, r = cs, o = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || o) {
        o = H.T, H.T = null;
        var f = Q.p;
        Q.p = 2;
        var d = Lt;
        Lt |= 4;
        try {
          H0(r, n);
          var g = gh, b = Yp(n.containerInfo), x = g.focusedElem, C = g.selectionRange;
          if (b !== x && x && x.ownerDocument && jp(
            x.ownerDocument.documentElement,
            x
          )) {
            if (C !== null && Yc(x)) {
              var N = C.start, q = C.end;
              if (q === void 0 && (q = N), "selectionStart" in x)
                x.selectionStart = N, x.selectionEnd = Math.min(
                  q,
                  x.value.length
                );
              else {
                var K = x.ownerDocument || document, L = K && K.defaultView || window;
                if (L.getSelection) {
                  var z = L.getSelection(), gt = x.textContent.length, ht = Math.min(C.start, gt), Ut = C.end === void 0 ? ht : Math.min(C.end, gt);
                  !z.extend && ht > Ut && (b = Ut, Ut = ht, ht = b);
                  var D = qp(
                    x,
                    ht
                  ), O = qp(
                    x,
                    Ut
                  );
                  if (D && O && (z.rangeCount !== 1 || z.anchorNode !== D.node || z.anchorOffset !== D.offset || z.focusNode !== O.node || z.focusOffset !== O.offset)) {
                    var B = K.createRange();
                    B.setStart(D.node, D.offset), z.removeAllRanges(), ht > Ut ? (z.addRange(B), z.extend(O.node, O.offset)) : (B.setEnd(O.node, O.offset), z.addRange(B));
                  }
                }
              }
            }
            for (K = [], z = x; z = z.parentNode; )
              z.nodeType === 1 && K.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < K.length; x++) {
              var W = K[x];
              W.element.scrollLeft = W.left, W.element.scrollTop = W.top;
            }
          }
          Uo = !!ph, gh = ph = null;
        } finally {
          Lt = d, Q.p = f, H.T = o;
        }
      }
      n.current = r, ge = 2;
    }
  }
  function ey() {
    if (ge === 2) {
      ge = 0;
      var n = Nn, r = cs, o = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || o) {
        o = H.T, H.T = null;
        var f = Q.p;
        Q.p = 2;
        var d = Lt;
        Lt |= 4;
        try {
          B0(n, r.alternate, r);
        } finally {
          Lt = d, Q.p = f, H.T = o;
        }
      }
      ge = 3;
    }
  }
  function iy() {
    if (ge === 4 || ge === 3) {
      ge = 0, Fx();
      var n = Nn, r = cs, o = fs, f = G0;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? ge = 5 : (ge = 0, cs = Nn = null, ny(n, n.pendingLanes));
      var d = n.pendingLanes;
      if (d === 0 && (Bn = null), xc(o), r = r.stateNode, We && typeof We.onCommitFiberRoot == "function")
        try {
          We.onCommitFiberRoot(
            Ys,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (f !== null) {
        r = H.T, d = Q.p, Q.p = 2, H.T = null;
        try {
          for (var g = n.onRecoverableError, b = 0; b < f.length; b++) {
            var x = f[b];
            g(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          H.T = r, Q.p = d;
        }
      }
      (fs & 3) !== 0 && Mo(), Ni(n), d = n.pendingLanes, (o & 4194090) !== 0 && (d & 42) !== 0 ? n === eh ? Mr++ : (Mr = 0, eh = n) : Mr = 0, Tr(0);
    }
  }
  function ny(n, r) {
    (n.pooledCacheLanes &= r) === 0 && (r = n.pooledCache, r != null && (n.pooledCache = null, rr(r)));
  }
  function Mo(n) {
    return ty(), ey(), iy(), ly();
  }
  function ly() {
    if (ge !== 5) return !1;
    var n = Nn, r = $f;
    $f = 0;
    var o = xc(fs), f = H.T, d = Q.p;
    try {
      Q.p = 32 > o ? 32 : o, H.T = null, o = th, th = null;
      var g = Nn, b = fs;
      if (ge = 0, cs = Nn = null, fs = 0, (Lt & 6) !== 0) throw Error(i(331));
      var x = Lt;
      if (Lt |= 4, j0(g.current), U0(
        g,
        g.current,
        b,
        o
      ), Lt = x, Tr(0, !1), We && typeof We.onPostCommitFiberRoot == "function")
        try {
          We.onPostCommitFiberRoot(Ys, g);
        } catch {
        }
      return !0;
    } finally {
      Q.p = d, H.T = f, ny(n, r);
    }
  }
  function sy(n, r, o) {
    r = si(o, r), r = Nf(n.stateNode, r, 2), n = An(n, r, 2), n !== null && (Xs(n, 2), Ni(n));
  }
  function qt(n, r, o) {
    if (n.tag === 3)
      sy(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          sy(
            r,
            n,
            o
          );
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Bn === null || !Bn.has(f))) {
            n = si(o, n), o = u0(2), f = An(r, o, 2), f !== null && (c0(
              o,
              f,
              r,
              n
            ), Xs(f, 2), Ni(f));
            break;
          }
        }
        r = r.return;
      }
  }
  function sh(n, r, o) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new A2();
      var d = /* @__PURE__ */ new Set();
      f.set(r, d);
    } else
      d = f.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), f.set(r, d));
    d.has(o) || (If = !0, d.add(o), n = O2.bind(null, n, r, o), r.then(n, n));
  }
  function O2(n, r, o) {
    var f = n.pingCache;
    f !== null && f.delete(r), n.pingedLanes |= n.suspendedLanes & o, n.warmLanes &= ~o, Gt === n && (Et & o) === o && (Pt === 4 || Pt === 3 && (Et & 62914560) === Et && 300 > Oi() - Jf ? (Lt & 2) === 0 && hs(n, 0) : Ff |= o, us === Et && (us = 0)), Ni(n);
  }
  function ry(n, r) {
    r === 0 && (r = ip()), n = Zl(n, r), n !== null && (Xs(n, r), Ni(n));
  }
  function D2(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), ry(n, o);
  }
  function E2(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, d = n.memoizedState;
        d !== null && (o = d.retryLane);
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
    f !== null && f.delete(r), ry(n, o);
  }
  function R2(n, r) {
    return yc(n, r);
  }
  var To = null, ms = null, rh = !1, Oo = !1, ah = !1, bl = 0;
  function Ni(n) {
    n !== ms && n.next === null && (ms === null ? To = ms = n : ms = ms.next = n), Oo = !0, rh || (rh = !0, N2());
  }
  function Tr(n, r) {
    if (!ah && Oo) {
      ah = !0;
      do
        for (var o = !1, f = To; f !== null; ) {
          if (n !== 0) {
            var d = f.pendingLanes;
            if (d === 0) var g = 0;
            else {
              var b = f.suspendedLanes, x = f.pingedLanes;
              g = (1 << 31 - Ke(42 | n) + 1) - 1, g &= d & ~(b & ~x), g = g & 201326741 ? g & 201326741 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (o = !0, cy(f, g));
          } else
            g = Et, g = Na(
              f,
              f === Gt ? g : 0,
              f.cancelPendingCommit !== null || f.timeoutHandle !== -1
            ), (g & 3) === 0 || Gs(f, g) || (o = !0, cy(f, g));
          f = f.next;
        }
      while (o);
      ah = !1;
    }
  }
  function B2() {
    ay();
  }
  function ay() {
    Oo = rh = !1;
    var n = 0;
    bl !== 0 && (j2() && (n = bl), bl = 0);
    for (var r = Oi(), o = null, f = To; f !== null; ) {
      var d = f.next, g = oy(f, r);
      g === 0 ? (f.next = null, o === null ? To = d : o.next = d, d === null && (ms = o)) : (o = f, (n !== 0 || (g & 3) !== 0) && (Oo = !0)), f = d;
    }
    Tr(n);
  }
  function oy(n, r) {
    for (var o = n.suspendedLanes, f = n.pingedLanes, d = n.expirationTimes, g = n.pendingLanes & -62914561; 0 < g; ) {
      var b = 31 - Ke(g), x = 1 << b, C = d[b];
      C === -1 ? ((x & o) === 0 || (x & f) !== 0) && (d[b] = lw(x, r)) : C <= r && (n.expiredLanes |= x), g &= ~x;
    }
    if (r = Gt, o = Et, o = Na(
      n,
      n === r ? o : 0,
      n.cancelPendingCommit !== null || n.timeoutHandle !== -1
    ), f = n.callbackNode, o === 0 || n === r && (zt === 2 || zt === 9) || n.cancelPendingCommit !== null)
      return f !== null && f !== null && vc(f), n.callbackNode = null, n.callbackPriority = 0;
    if ((o & 3) === 0 || Gs(n, o)) {
      if (r = o & -o, r === n.callbackPriority) return r;
      switch (f !== null && vc(f), xc(o)) {
        case 2:
        case 8:
          o = $m;
          break;
        case 32:
          o = Ea;
          break;
        case 268435456:
          o = tp;
          break;
        default:
          o = Ea;
      }
      return f = uy.bind(null, n), o = yc(o, f), n.callbackPriority = r, n.callbackNode = o, r;
    }
    return f !== null && f !== null && vc(f), n.callbackPriority = 2, n.callbackNode = null, 2;
  }
  function uy(n, r) {
    if (ge !== 0 && ge !== 5)
      return n.callbackNode = null, n.callbackPriority = 0, null;
    var o = n.callbackNode;
    if (Mo() && n.callbackNode !== o)
      return null;
    var f = Et;
    return f = Na(
      n,
      n === Gt ? f : 0,
      n.cancelPendingCommit !== null || n.timeoutHandle !== -1
    ), f === 0 ? null : (W0(n, f, r), oy(n, Oi()), n.callbackNode != null && n.callbackNode === o ? uy.bind(null, n) : null);
  }
  function cy(n, r) {
    if (Mo()) return null;
    W0(n, r, !0);
  }
  function N2() {
    G2(function() {
      (Lt & 6) !== 0 ? yc(
        Jm,
        B2
      ) : ay();
    });
  }
  function oh() {
    return bl === 0 && (bl = ep()), bl;
  }
  function fy(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean" ? null : typeof n == "function" ? n : Ua("" + n);
  }
  function hy(n, r) {
    var o = r.ownerDocument.createElement("input");
    return o.name = r.name, o.value = r.value, n.id && o.setAttribute("form", n.id), r.parentNode.insertBefore(o, r), n = new FormData(n), o.parentNode.removeChild(o), n;
  }
  function L2(n, r, o, f, d) {
    if (r === "submit" && o && o.stateNode === d) {
      var g = fy(
        (d[Le] || null).action
      ), b = f.submitter;
      b && (r = (r = b[Le] || null) ? fy(r.formAction) : b.getAttribute("formAction"), r !== null && (g = r, b = null));
      var x = new Ya(
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
                  var C = b ? hy(d, b) : new FormData(d);
                  Of(
                    o,
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
                typeof g == "function" && (x.preventDefault(), C = b ? hy(d, b) : new FormData(d), Of(
                  o,
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
  for (var uh = 0; uh < Kc.length; uh++) {
    var ch = Kc[uh], z2 = ch.toLowerCase(), H2 = ch[0].toUpperCase() + ch.slice(1);
    Si(
      z2,
      "on" + H2
    );
  }
  Si(Wp, "onAnimationEnd"), Si(Kp, "onAnimationIteration"), Si(Qp, "onAnimationStart"), Si("dblclick", "onDoubleClick"), Si("focusin", "onFocus"), Si("focusout", "onBlur"), Si($w, "onTransitionRun"), Si(t2, "onTransitionStart"), Si(e2, "onTransitionCancel"), Si(Zp, "onTransitionEnd"), Ul("onMouseEnter", ["mouseout", "mouseover"]), Ul("onMouseLeave", ["mouseout", "mouseover"]), Ul("onPointerEnter", ["pointerout", "pointerover"]), Ul("onPointerLeave", ["pointerout", "pointerover"]), nl(
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
  ), _2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Or)
  );
  function dy(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var f = n[o], d = f.event;
      f = f.listeners;
      t: {
        var g = void 0;
        if (r)
          for (var b = f.length - 1; 0 <= b; b--) {
            var x = f[b], C = x.instance, N = x.currentTarget;
            if (x = x.listener, C !== g && d.isPropagationStopped())
              break t;
            g = x, d.currentTarget = N;
            try {
              g(d);
            } catch (q) {
              po(q);
            }
            d.currentTarget = null, g = C;
          }
        else
          for (b = 0; b < f.length; b++) {
            if (x = f[b], C = x.instance, N = x.currentTarget, x = x.listener, C !== g && d.isPropagationStopped())
              break t;
            g = x, d.currentTarget = N;
            try {
              g(d);
            } catch (q) {
              po(q);
            }
            d.currentTarget = null, g = C;
          }
      }
    }
  }
  function kt(n, r) {
    var o = r[wc];
    o === void 0 && (o = r[wc] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    o.has(f) || (my(r, n, 2, !1), o.add(f));
  }
  function fh(n, r, o) {
    var f = 0;
    r && (f |= 4), my(
      o,
      n,
      f,
      r
    );
  }
  var Do = "_reactListening" + Math.random().toString(36).slice(2);
  function hh(n) {
    if (!n[Do]) {
      n[Do] = !0, ap.forEach(function(o) {
        o !== "selectionchange" && (_2.has(o) || fh(o, !1, n), fh(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Do] || (r[Do] = !0, fh("selectionchange", !1, r));
    }
  }
  function my(n, r, o, f) {
    switch (Uy(r)) {
      case 2:
        var d = cA;
        break;
      case 8:
        d = fA;
        break;
      default:
        d = Mh;
    }
    o = d.bind(
      null,
      r,
      o,
      n
    ), d = void 0, !Nc || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), f ? d !== void 0 ? n.addEventListener(r, o, {
      capture: !0,
      passive: d
    }) : n.addEventListener(r, o, !0) : d !== void 0 ? n.addEventListener(r, o, {
      passive: d
    }) : n.addEventListener(r, o, !1);
  }
  function dh(n, r, o, f, d) {
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
    xp(function() {
      var N = g, q = Rc(o), K = [];
      t: {
        var L = Ip.get(n);
        if (L !== void 0) {
          var z = Ya, gt = n;
          switch (n) {
            case "keypress":
              if (qa(o) === 0) break t;
            case "keydown":
            case "keyup":
              z = Rw;
              break;
            case "focusin":
              gt = "focus", z = _c;
              break;
            case "focusout":
              gt = "blur", z = _c;
              break;
            case "beforeblur":
            case "afterblur":
              z = _c;
              break;
            case "click":
              if (o.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Cp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = bw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Lw;
              break;
            case Wp:
            case Kp:
            case Qp:
              z = ww;
              break;
            case Zp:
              z = Hw;
              break;
            case "scroll":
            case "scrollend":
              z = yw;
              break;
            case "wheel":
              z = Uw;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Cw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Mp;
              break;
            case "toggle":
            case "beforetoggle":
              z = qw;
          }
          var ht = (r & 4) !== 0, Ut = !ht && (n === "scroll" || n === "scrollend"), D = ht ? L !== null ? L + "Capture" : null : L;
          ht = [];
          for (var O = N, B; O !== null; ) {
            var W = O;
            if (B = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || B === null || D === null || (W = Qs(O, D), W != null && ht.push(
              Dr(O, W, B)
            )), Ut) break;
            O = O.return;
          }
          0 < ht.length && (L = new z(
            L,
            gt,
            null,
            o,
            q
          ), K.push({ event: L, listeners: ht }));
        }
      }
      if ((r & 7) === 0) {
        t: {
          if (L = n === "mouseover" || n === "pointerover", z = n === "mouseout" || n === "pointerout", L && o !== Ec && (gt = o.relatedTarget || o.fromElement) && (zl(gt) || gt[Ll]))
            break t;
          if ((z || L) && (L = q.window === q ? q : (L = q.ownerDocument) ? L.defaultView || L.parentWindow : window, z ? (gt = o.relatedTarget || o.toElement, z = N, gt = gt ? zl(gt) : null, gt !== null && (Ut = a(gt), ht = gt.tag, gt !== Ut || ht !== 5 && ht !== 27 && ht !== 6) && (gt = null)) : (z = null, gt = N), z !== gt)) {
            if (ht = Cp, W = "onMouseLeave", D = "onMouseEnter", O = "mouse", (n === "pointerout" || n === "pointerover") && (ht = Mp, W = "onPointerLeave", D = "onPointerEnter", O = "pointer"), Ut = z == null ? L : Ks(z), B = gt == null ? L : Ks(gt), L = new ht(
              W,
              O + "leave",
              z,
              o,
              q
            ), L.target = Ut, L.relatedTarget = B, W = null, zl(q) === N && (ht = new ht(
              D,
              O + "enter",
              gt,
              o,
              q
            ), ht.target = B, ht.relatedTarget = Ut, W = ht), Ut = W, z && gt)
              e: {
                for (ht = z, D = gt, O = 0, B = ht; B; B = ps(B))
                  O++;
                for (B = 0, W = D; W; W = ps(W))
                  B++;
                for (; 0 < O - B; )
                  ht = ps(ht), O--;
                for (; 0 < B - O; )
                  D = ps(D), B--;
                for (; O--; ) {
                  if (ht === D || D !== null && ht === D.alternate)
                    break e;
                  ht = ps(ht), D = ps(D);
                }
                ht = null;
              }
            else ht = null;
            z !== null && py(
              K,
              L,
              z,
              ht,
              !1
            ), gt !== null && Ut !== null && py(
              K,
              Ut,
              gt,
              ht,
              !0
            );
          }
        }
        t: {
          if (L = N ? Ks(N) : window, z = L.nodeName && L.nodeName.toLowerCase(), z === "select" || z === "input" && L.type === "file")
            var st = Lp;
          else if (Bp(L))
            if (zp)
              st = Fw;
            else {
              st = Zw;
              var At = Qw;
            }
          else
            z = L.nodeName, !z || z.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? N && Dc(N.elementType) && (st = Lp) : st = Iw;
          if (st && (st = st(n, N))) {
            Np(
              K,
              st,
              o,
              q
            );
            break t;
          }
          At && At(n, L, N), n === "focusout" && N && L.type === "number" && N.memoizedProps.value != null && Oc(L, "number", L.value);
        }
        switch (At = N ? Ks(N) : window, n) {
          case "focusin":
            (Bp(At) || At.contentEditable === "true") && (Wl = At, Gc = N, er = null);
            break;
          case "focusout":
            er = Gc = Wl = null;
            break;
          case "mousedown":
            Xc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xc = !1, Gp(K, o, q);
            break;
          case "selectionchange":
            if (Jw) break;
          case "keydown":
          case "keyup":
            Gp(K, o, q);
        }
        var ot;
        if (Vc)
          t: {
            switch (n) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Xl ? Ep(n, o) && (mt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (mt = "onCompositionStart");
        mt && (Tp && o.locale !== "ko" && (Xl || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && Xl && (ot = wp()) : (bn = q, Lc = "value" in bn ? bn.value : bn.textContent, Xl = !0)), At = Eo(N, mt), 0 < At.length && (mt = new kp(
          mt,
          n,
          null,
          o,
          q
        ), K.push({ event: mt, listeners: At }), ot ? mt.data = ot : (ot = Rp(o), ot !== null && (mt.data = ot)))), (ot = Yw ? Gw(n, o) : Xw(n, o)) && (mt = Eo(N, "onBeforeInput"), 0 < mt.length && (At = new kp(
          "onBeforeInput",
          "beforeinput",
          null,
          o,
          q
        ), K.push({
          event: At,
          listeners: mt
        }), At.data = ot)), L2(
          K,
          n,
          N,
          o,
          q
        );
      }
      dy(K, r);
    });
  }
  function Dr(n, r, o) {
    return {
      instance: n,
      listener: r,
      currentTarget: o
    };
  }
  function Eo(n, r) {
    for (var o = r + "Capture", f = []; n !== null; ) {
      var d = n, g = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || g === null || (d = Qs(n, o), d != null && f.unshift(
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
  function py(n, r, o, f, d) {
    for (var g = r._reactName, b = []; o !== null && o !== f; ) {
      var x = o, C = x.alternate, N = x.stateNode;
      if (x = x.tag, C !== null && C === f) break;
      x !== 5 && x !== 26 && x !== 27 || N === null || (C = N, d ? (N = Qs(o, g), N != null && b.unshift(
        Dr(o, N, C)
      )) : d || (N = Qs(o, g), N != null && b.push(
        Dr(o, N, C)
      ))), o = o.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var U2 = /\r\n?/g, V2 = /\u0000|\uFFFD/g;
  function gy(n) {
    return (typeof n == "string" ? n : "" + n).replace(U2, `
`).replace(V2, "");
  }
  function yy(n, r) {
    return r = gy(r), gy(n) === r;
  }
  function Ro() {
  }
  function _t(n, r, o, f, d, g) {
    switch (o) {
      case "children":
        typeof f == "string" ? r === "body" || r === "textarea" && f === "" || jl(n, f) : (typeof f == "number" || typeof f == "bigint") && r !== "body" && jl(n, "" + f);
        break;
      case "className":
        za(n, "class", f);
        break;
      case "tabIndex":
        za(n, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        za(n, o, f);
        break;
      case "style":
        bp(n, f, g);
        break;
      case "data":
        if (r !== "object") {
          za(n, "data", f);
          break;
        }
      case "src":
      case "href":
        if (f === "" && (r !== "a" || o !== "href")) {
          n.removeAttribute(o);
          break;
        }
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean") {
          n.removeAttribute(o);
          break;
        }
        f = Ua("" + f), n.setAttribute(o, f);
        break;
      case "action":
      case "formAction":
        if (typeof f == "function") {
          n.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof g == "function" && (o === "formAction" ? (r !== "input" && _t(n, r, "name", d.name, d, null), _t(
            n,
            r,
            "formEncType",
            d.formEncType,
            d,
            null
          ), _t(
            n,
            r,
            "formMethod",
            d.formMethod,
            d,
            null
          ), _t(
            n,
            r,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (_t(n, r, "encType", d.encType, d, null), _t(n, r, "method", d.method, d, null), _t(n, r, "target", d.target, d, null)));
        if (f == null || typeof f == "symbol" || typeof f == "boolean") {
          n.removeAttribute(o);
          break;
        }
        f = Ua("" + f), n.setAttribute(o, f);
        break;
      case "onClick":
        f != null && (n.onclick = Ro);
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
          if (o = f.__html, o != null) {
            if (d.children != null) throw Error(i(60));
            n.innerHTML = o;
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
        o = Ua("" + f), n.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          o
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
        f != null && typeof f != "function" && typeof f != "symbol" ? n.setAttribute(o, "" + f) : n.removeAttribute(o);
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
        f && typeof f != "function" && typeof f != "symbol" ? n.setAttribute(o, "") : n.removeAttribute(o);
        break;
      case "capture":
      case "download":
        f === !0 ? n.setAttribute(o, "") : f !== !1 && f != null && typeof f != "function" && typeof f != "symbol" ? n.setAttribute(o, f) : n.removeAttribute(o);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        f != null && typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f ? n.setAttribute(o, f) : n.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        f == null || typeof f == "function" || typeof f == "symbol" || isNaN(f) ? n.removeAttribute(o) : n.setAttribute(o, f);
        break;
      case "popover":
        kt("beforetoggle", n), kt("toggle", n), La(n, "popover", f);
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
        La(n, "is", f);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = pw.get(o) || o, La(n, o, f));
    }
  }
  function mh(n, r, o, f, d, g) {
    switch (o) {
      case "style":
        bp(n, f, g);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f))
            throw Error(i(61));
          if (o = f.__html, o != null) {
            if (d.children != null) throw Error(i(60));
            n.innerHTML = o;
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
        f != null && (n.onclick = Ro);
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
        if (!op.hasOwnProperty(o))
          t: {
            if (o[0] === "o" && o[1] === "n" && (d = o.endsWith("Capture"), r = o.slice(2, d ? o.length - 7 : void 0), g = n[Le] || null, g = g != null ? g[o] : null, typeof g == "function" && n.removeEventListener(r, g, d), typeof f == "function")) {
              typeof g != "function" && g !== null && (o in n ? n[o] = null : n.hasAttribute(o) && n.removeAttribute(o)), n.addEventListener(r, f, d);
              break t;
            }
            o in n ? n[o] = f : f === !0 ? n.setAttribute(o, "") : La(n, o, f);
          }
    }
  }
  function ye(n, r, o) {
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
        for (g in o)
          if (o.hasOwnProperty(g)) {
            var b = o[g];
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
                  _t(n, r, g, b, o, null);
              }
          }
        d && _t(n, r, "srcSet", o.srcSet, o, null), f && _t(n, r, "src", o.src, o, null);
        return;
      case "input":
        kt("invalid", n);
        var x = g = b = d = null, C = null, N = null;
        for (f in o)
          if (o.hasOwnProperty(f)) {
            var q = o[f];
            if (q != null)
              switch (f) {
                case "name":
                  d = q;
                  break;
                case "type":
                  b = q;
                  break;
                case "checked":
                  C = q;
                  break;
                case "defaultChecked":
                  N = q;
                  break;
                case "value":
                  g = q;
                  break;
                case "defaultValue":
                  x = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(i(137, r));
                  break;
                default:
                  _t(n, r, f, q, o, null);
              }
          }
        pp(
          n,
          g,
          x,
          C,
          N,
          b,
          d,
          !1
        ), Ha(n);
        return;
      case "select":
        kt("invalid", n), f = b = g = null;
        for (d in o)
          if (o.hasOwnProperty(d) && (x = o[d], x != null))
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
                _t(n, r, d, x, o, null);
            }
        r = g, o = b, n.multiple = !!f, r != null ? ql(n, !!f, r, !1) : o != null && ql(n, !!f, o, !0);
        return;
      case "textarea":
        kt("invalid", n), g = d = f = null;
        for (b in o)
          if (o.hasOwnProperty(b) && (x = o[b], x != null))
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
                _t(n, r, b, x, o, null);
            }
        yp(n, f, d, g), Ha(n);
        return;
      case "option":
        for (C in o)
          o.hasOwnProperty(C) && (f = o[C], f != null) && (C === "selected" ? n.selected = f && typeof f != "function" && typeof f != "symbol" : _t(n, r, C, f, o, null));
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
        for (N in o)
          if (o.hasOwnProperty(N) && (f = o[N], f != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, r));
              default:
                _t(n, r, N, f, o, null);
            }
        return;
      default:
        if (Dc(r)) {
          for (q in o)
            o.hasOwnProperty(q) && (f = o[q], f !== void 0 && mh(
              n,
              r,
              q,
              f,
              o,
              void 0
            ));
          return;
        }
    }
    for (x in o)
      o.hasOwnProperty(x) && (f = o[x], f != null && _t(n, r, x, f, o, null));
  }
  function q2(n, r, o, f) {
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
        var d = null, g = null, b = null, x = null, C = null, N = null, q = null;
        for (z in o) {
          var K = o[z];
          if (o.hasOwnProperty(z) && K != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = K;
              default:
                f.hasOwnProperty(z) || _t(n, r, z, null, f, K);
            }
        }
        for (var L in f) {
          var z = f[L];
          if (K = o[L], f.hasOwnProperty(L) && (z != null || K != null))
            switch (L) {
              case "type":
                g = z;
                break;
              case "name":
                d = z;
                break;
              case "checked":
                N = z;
                break;
              case "defaultChecked":
                q = z;
                break;
              case "value":
                b = z;
                break;
              case "defaultValue":
                x = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(i(137, r));
                break;
              default:
                z !== K && _t(
                  n,
                  r,
                  L,
                  z,
                  f,
                  K
                );
            }
        }
        Tc(
          n,
          b,
          x,
          C,
          N,
          q,
          g,
          d
        );
        return;
      case "select":
        z = b = x = L = null;
        for (g in o)
          if (C = o[g], o.hasOwnProperty(g) && C != null)
            switch (g) {
              case "value":
                break;
              case "multiple":
                z = C;
              default:
                f.hasOwnProperty(g) || _t(
                  n,
                  r,
                  g,
                  null,
                  f,
                  C
                );
            }
        for (d in f)
          if (g = f[d], C = o[d], f.hasOwnProperty(d) && (g != null || C != null))
            switch (d) {
              case "value":
                L = g;
                break;
              case "defaultValue":
                x = g;
                break;
              case "multiple":
                b = g;
              default:
                g !== C && _t(
                  n,
                  r,
                  d,
                  g,
                  f,
                  C
                );
            }
        r = x, o = b, f = z, L != null ? ql(n, !!o, L, !1) : !!f != !!o && (r != null ? ql(n, !!o, r, !0) : ql(n, !!o, o ? [] : "", !1));
        return;
      case "textarea":
        z = L = null;
        for (x in o)
          if (d = o[x], o.hasOwnProperty(x) && d != null && !f.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                _t(n, r, x, null, f, d);
            }
        for (b in f)
          if (d = f[b], g = o[b], f.hasOwnProperty(b) && (d != null || g != null))
            switch (b) {
              case "value":
                L = d;
                break;
              case "defaultValue":
                z = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== g && _t(n, r, b, d, f, g);
            }
        gp(n, L, z);
        return;
      case "option":
        for (var gt in o)
          L = o[gt], o.hasOwnProperty(gt) && L != null && !f.hasOwnProperty(gt) && (gt === "selected" ? n.selected = !1 : _t(
            n,
            r,
            gt,
            null,
            f,
            L
          ));
        for (C in f)
          L = f[C], z = o[C], f.hasOwnProperty(C) && L !== z && (L != null || z != null) && (C === "selected" ? n.selected = L && typeof L != "function" && typeof L != "symbol" : _t(
            n,
            r,
            C,
            L,
            f,
            z
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
        for (var ht in o)
          L = o[ht], o.hasOwnProperty(ht) && L != null && !f.hasOwnProperty(ht) && _t(n, r, ht, null, f, L);
        for (N in f)
          if (L = f[N], z = o[N], f.hasOwnProperty(N) && L !== z && (L != null || z != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(i(137, r));
                break;
              default:
                _t(
                  n,
                  r,
                  N,
                  L,
                  f,
                  z
                );
            }
        return;
      default:
        if (Dc(r)) {
          for (var Ut in o)
            L = o[Ut], o.hasOwnProperty(Ut) && L !== void 0 && !f.hasOwnProperty(Ut) && mh(
              n,
              r,
              Ut,
              void 0,
              f,
              L
            );
          for (q in f)
            L = f[q], z = o[q], !f.hasOwnProperty(q) || L === z || L === void 0 && z === void 0 || mh(
              n,
              r,
              q,
              L,
              f,
              z
            );
          return;
        }
    }
    for (var D in o)
      L = o[D], o.hasOwnProperty(D) && L != null && !f.hasOwnProperty(D) && _t(n, r, D, null, f, L);
    for (K in f)
      L = f[K], z = o[K], !f.hasOwnProperty(K) || L === z || L == null && z == null || _t(n, r, K, L, f, z);
  }
  var ph = null, gh = null;
  function Bo(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function vy(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function by(n, r) {
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
  function yh(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.children == "bigint" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var vh = null;
  function j2() {
    var n = window.event;
    return n && n.type === "popstate" ? n === vh ? !1 : (vh = n, !0) : (vh = null, !1);
  }
  var Sy = typeof setTimeout == "function" ? setTimeout : void 0, Y2 = typeof clearTimeout == "function" ? clearTimeout : void 0, xy = typeof Promise == "function" ? Promise : void 0, G2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof xy < "u" ? function(n) {
    return xy.resolve(null).then(n).catch(X2);
  } : Sy;
  function X2(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function zn(n) {
    return n === "head";
  }
  function wy(n, r) {
    var o = r, f = 0, d = 0;
    do {
      var g = o.nextSibling;
      if (n.removeChild(o), g && g.nodeType === 8)
        if (o = g.data, o === "/$") {
          if (0 < f && 8 > f) {
            o = f;
            var b = n.ownerDocument;
            if (o & 1 && Er(b.documentElement), o & 2 && Er(b.body), o & 4)
              for (o = b.head, Er(o), b = o.firstChild; b; ) {
                var x = b.nextSibling, C = b.nodeName;
                b[Ws] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && b.rel.toLowerCase() === "stylesheet" || o.removeChild(b), b = x;
              }
          }
          if (d === 0) {
            n.removeChild(g), Ur(r);
            return;
          }
          d--;
        } else
          o === "$" || o === "$?" || o === "$!" ? d++ : f = o.charCodeAt(0) - 48;
      else f = 0;
      o = g;
    } while (o);
    Ur(r);
  }
  function bh(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var o = r;
      switch (r = r.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bh(o), Ac(o);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (o.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(o);
    }
  }
  function W2(n, r, o, f) {
    for (; n.nodeType === 1; ) {
      var d = o;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!f && (n.nodeName !== "INPUT" || n.type !== "hidden"))
          break;
      } else if (f) {
        if (!n[Ws])
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
  function K2(n, r, o) {
    if (r === "") return null;
    for (; n.nodeType !== 3; )
      if ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !o || (n = wi(n.nextSibling), n === null)) return null;
    return n;
  }
  function Sh(n) {
    return n.data === "$!" || n.data === "$?" && n.ownerDocument.readyState === "complete";
  }
  function Q2(n, r) {
    var o = n.ownerDocument;
    if (n.data !== "$?" || o.readyState === "complete")
      r();
    else {
      var f = function() {
        r(), o.removeEventListener("DOMContentLoaded", f);
      };
      o.addEventListener("DOMContentLoaded", f), n._reactRetry = f;
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
  var xh = null;
  function Ay(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function Cy(n, r, o) {
    switch (r = Bo(o), n) {
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
    Ac(n);
  }
  var fi = /* @__PURE__ */ new Map(), ky = /* @__PURE__ */ new Set();
  function No(n) {
    return typeof n.getRootNode == "function" ? n.getRootNode() : n.nodeType === 9 ? n : n.ownerDocument;
  }
  var fn = Q.d;
  Q.d = {
    f: Z2,
    r: I2,
    D: F2,
    C: P2,
    L: J2,
    m: $2,
    X: eA,
    S: tA,
    M: iA
  };
  function Z2() {
    var n = fn.f(), r = Co();
    return n || r;
  }
  function I2(n) {
    var r = Hl(n);
    r !== null && r.tag === 5 && r.type === "form" ? Wg(r) : fn.r(n);
  }
  var gs = typeof document > "u" ? null : document;
  function My(n, r, o) {
    var f = gs;
    if (f && typeof r == "string" && r) {
      var d = li(r);
      d = 'link[rel="' + n + '"][href="' + d + '"]', typeof o == "string" && (d += '[crossorigin="' + o + '"]'), ky.has(d) || (ky.add(d), n = { rel: n, crossOrigin: o, href: r }, f.querySelector(d) === null && (r = f.createElement("link"), ye(r, "link", n), ue(r), f.head.appendChild(r)));
    }
  }
  function F2(n) {
    fn.D(n), My("dns-prefetch", n, null);
  }
  function P2(n, r) {
    fn.C(n, r), My("preconnect", n, r);
  }
  function J2(n, r, o) {
    fn.L(n, r, o);
    var f = gs;
    if (f && n && r) {
      var d = 'link[rel="preload"][as="' + li(r) + '"]';
      r === "image" && o && o.imageSrcSet ? (d += '[imagesrcset="' + li(
        o.imageSrcSet
      ) + '"]', typeof o.imageSizes == "string" && (d += '[imagesizes="' + li(
        o.imageSizes
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
          href: r === "image" && o && o.imageSrcSet ? void 0 : n,
          as: r
        },
        o
      ), fi.set(g, n), f.querySelector(d) !== null || r === "style" && f.querySelector(Rr(g)) || r === "script" && f.querySelector(Br(g)) || (r = f.createElement("link"), ye(r, "link", n), ue(r), f.head.appendChild(r)));
    }
  }
  function $2(n, r) {
    fn.m(n, r);
    var o = gs;
    if (o && n) {
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
      if (!fi.has(g) && (n = p({ rel: "modulepreload", href: n }, r), fi.set(g, n), o.querySelector(d) === null)) {
        switch (f) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Br(g)))
              return;
        }
        f = o.createElement("link"), ye(f, "link", n), ue(f), o.head.appendChild(f);
      }
    }
  }
  function tA(n, r, o) {
    fn.S(n, r, o);
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
            o
          ), (o = fi.get(g)) && wh(n, o);
          var C = b = f.createElement("link");
          ue(C), ye(C, "link", n), C._p = new Promise(function(N, q) {
            C.onload = N, C.onerror = q;
          }), C.addEventListener("load", function() {
            x.loading |= 1;
          }), C.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, Lo(b, r, f);
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
  function eA(n, r) {
    fn.X(n, r);
    var o = gs;
    if (o && n) {
      var f = _l(o).hoistableScripts, d = vs(n), g = f.get(d);
      g || (g = o.querySelector(Br(d)), g || (n = p({ src: n, async: !0 }, r), (r = fi.get(d)) && Ah(n, r), g = o.createElement("script"), ue(g), ye(g, "link", n), o.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, f.set(d, g));
    }
  }
  function iA(n, r) {
    fn.M(n, r);
    var o = gs;
    if (o && n) {
      var f = _l(o).hoistableScripts, d = vs(n), g = f.get(d);
      g || (g = o.querySelector(Br(d)), g || (n = p({ src: n, async: !0, type: "module" }, r), (r = fi.get(d)) && Ah(n, r), g = o.createElement("script"), ue(g), ye(g, "link", n), o.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, f.set(d, g));
    }
  }
  function Ty(n, r, o, f) {
    var d = (d = pt.current) ? No(d) : null;
    if (!d) throw Error(i(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (r = ys(o.href), o = _l(
          d
        ).hoistableStyles, f = o.get(r), f || (f = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, o.set(r, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          n = ys(o.href);
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
          )) && !g._p && (b.instance = g, b.state.loading = 5), fi.has(n) || (o = {
            rel: "preload",
            as: "style",
            href: o.href,
            crossOrigin: o.crossOrigin,
            integrity: o.integrity,
            media: o.media,
            hrefLang: o.hrefLang,
            referrerPolicy: o.referrerPolicy
          }, fi.set(n, o), g || nA(
            d,
            n,
            o,
            b.state
          ))), r && f === null)
            throw Error(i(528, ""));
          return b;
        }
        if (r && f !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return r = o.async, o = o.src, typeof o == "string" && r && typeof r != "function" && typeof r != "symbol" ? (r = vs(o), o = _l(
          d
        ).hoistableScripts, f = o.get(r), f || (f = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, o.set(r, f)), f) : { type: "void", instance: null, count: 0, state: null };
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
  function Oy(n) {
    return p({}, n, {
      "data-precedence": n.precedence,
      precedence: null
    });
  }
  function nA(n, r, o, f) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]") ? f.loading = 1 : (r = n.createElement("link"), f.preload = r, r.addEventListener("load", function() {
      return f.loading |= 1;
    }), r.addEventListener("error", function() {
      return f.loading |= 2;
    }), ye(r, "link", o), ue(r), n.head.appendChild(r));
  }
  function vs(n) {
    return '[src="' + li(n) + '"]';
  }
  function Br(n) {
    return "script[async]" + n;
  }
  function Dy(n, r, o) {
    if (r.count++, r.instance === null)
      switch (r.type) {
        case "style":
          var f = n.querySelector(
            'style[data-href~="' + li(o.href) + '"]'
          );
          if (f)
            return r.instance = f, ue(f), f;
          var d = p({}, o, {
            "data-href": o.href,
            "data-precedence": o.precedence,
            href: null,
            precedence: null
          });
          return f = (n.ownerDocument || n).createElement(
            "style"
          ), ue(f), ye(f, "style", d), Lo(f, o.precedence, n), r.instance = f;
        case "stylesheet":
          d = ys(o.href);
          var g = n.querySelector(
            Rr(d)
          );
          if (g)
            return r.state.loading |= 4, r.instance = g, ue(g), g;
          f = Oy(o), (d = fi.get(d)) && wh(f, d), g = (n.ownerDocument || n).createElement("link"), ue(g);
          var b = g;
          return b._p = new Promise(function(x, C) {
            b.onload = x, b.onerror = C;
          }), ye(g, "link", f), r.state.loading |= 4, Lo(g, o.precedence, n), r.instance = g;
        case "script":
          return g = vs(o.src), (d = n.querySelector(
            Br(g)
          )) ? (r.instance = d, ue(d), d) : (f = o, (d = fi.get(g)) && (f = p({}, o), Ah(f, d)), n = n.ownerDocument || n, d = n.createElement("script"), ue(d), ye(d, "link", f), n.head.appendChild(d), r.instance = d);
        case "void":
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === "stylesheet" && (r.state.loading & 4) === 0 && (f = r.instance, r.state.loading |= 4, Lo(f, o.precedence, n));
    return r.instance;
  }
  function Lo(n, r, o) {
    for (var f = o.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = f.length ? f[f.length - 1] : null, g = d, b = 0; b < f.length; b++) {
      var x = f[b];
      if (x.dataset.precedence === r) g = x;
      else if (g !== d) break;
    }
    g ? g.parentNode.insertBefore(n, g.nextSibling) : (r = o.nodeType === 9 ? o.head : o, r.insertBefore(n, r.firstChild));
  }
  function wh(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy), n.title == null && (n.title = r.title);
  }
  function Ah(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy), n.integrity == null && (n.integrity = r.integrity);
  }
  var zo = null;
  function Ey(n, r, o) {
    if (zo === null) {
      var f = /* @__PURE__ */ new Map(), d = zo = /* @__PURE__ */ new Map();
      d.set(o, f);
    } else
      d = zo, f = d.get(o), f || (f = /* @__PURE__ */ new Map(), d.set(o, f));
    if (f.has(n)) return f;
    for (f.set(n, null), o = o.getElementsByTagName(n), d = 0; d < o.length; d++) {
      var g = o[d];
      if (!(g[Ws] || g[Ae] || n === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = g.getAttribute(r) || "";
        b = n + b;
        var x = f.get(b);
        x ? x.push(g) : f.set(b, [g]);
      }
    }
    return f;
  }
  function Ry(n, r, o) {
    n = n.ownerDocument || n, n.head.insertBefore(
      o,
      r === "title" ? n.querySelector("head > title") : null
    );
  }
  function lA(n, r, o) {
    if (o === 1 || r.itemProp != null) return !1;
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
  function By(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var Nr = null;
  function sA() {
  }
  function rA(n, r, o) {
    if (Nr === null) throw Error(i(475));
    var f = Nr;
    if (r.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var d = ys(o.href), g = n.querySelector(
          Rr(d)
        );
        if (g) {
          n = g._p, n !== null && typeof n == "object" && typeof n.then == "function" && (f.count++, f = Ho.bind(f), n.then(f, f)), r.state.loading |= 4, r.instance = g, ue(g);
          return;
        }
        g = n.ownerDocument || n, o = Oy(o), (d = fi.get(d)) && wh(o, d), g = g.createElement("link"), ue(g);
        var b = g;
        b._p = new Promise(function(x, C) {
          b.onload = x, b.onerror = C;
        }), ye(g, "link", o), r.instance = g;
      }
      f.stylesheets === null && (f.stylesheets = /* @__PURE__ */ new Map()), f.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (f.count++, r = Ho.bind(f), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  function aA() {
    if (Nr === null) throw Error(i(475));
    var n = Nr;
    return n.stylesheets && n.count === 0 && Ch(n, n.stylesheets), 0 < n.count ? function(r) {
      var o = setTimeout(function() {
        if (n.stylesheets && Ch(n, n.stylesheets), n.unsuspend) {
          var f = n.unsuspend;
          n.unsuspend = null, f();
        }
      }, 6e4);
      return n.unsuspend = r, function() {
        n.unsuspend = null, clearTimeout(o);
      };
    } : null;
  }
  function Ho() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ch(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        this.unsuspend = null, n();
      }
    }
  }
  var _o = null;
  function Ch(n, r) {
    n.stylesheets = null, n.unsuspend !== null && (n.count++, _o = /* @__PURE__ */ new Map(), r.forEach(oA, n), _o = null, Ho.call(n));
  }
  function oA(n, r) {
    if (!(r.state.loading & 4)) {
      var o = _o.get(n);
      if (o) var f = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), _o.set(n, o);
        for (var d = n.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), g = 0; g < d.length; g++) {
          var b = d[g];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (o.set(b.dataset.precedence, b), f = b);
        }
        f && o.set(null, f);
      }
      d = r.instance, b = d.getAttribute("data-precedence"), g = o.get(b) || f, g === f && o.set(null, d), o.set(b, d), this.count++, f = Ho.bind(this), d.addEventListener("load", f), d.addEventListener("error", f), g ? g.parentNode.insertBefore(d, g.nextSibling) : (n = n.nodeType === 9 ? n.head : n, n.insertBefore(d, n.firstChild)), r.state.loading |= 4;
    }
  }
  var Lr = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0
  };
  function uA(n, r, o, f, d, g, b, x) {
    this.tag = 1, this.containerInfo = n, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bc(0), this.hiddenUpdates = bc(null), this.identifierPrefix = f, this.onUncaughtError = d, this.onCaughtError = g, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ny(n, r, o, f, d, g, b, x, C, N, q, K) {
    return n = new uA(
      n,
      r,
      o,
      b,
      x,
      C,
      N,
      K
    ), r = 1, g === !0 && (r |= 24), g = Ze(3, null, null, r), n.current = g, g.stateNode = n, r = sf(), r.refCount++, n.pooledCache = r, r.refCount++, g.memoizedState = {
      element: f,
      isDehydrated: o,
      cache: r
    }, uf(g), n;
  }
  function Ly(n) {
    return n ? (n = Il, n) : Il;
  }
  function zy(n, r, o, f, d, g) {
    d = Ly(d), f.context === null ? f.context = d : f.pendingContext = d, f = wn(r), f.payload = { element: o }, g = g === void 0 ? null : g, g !== null && (f.callback = g), o = An(n, f, r), o !== null && ($e(o, n, r), cr(o, n, r));
  }
  function Hy(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function kh(n, r) {
    Hy(n, r), (n = n.alternate) && Hy(n, r);
  }
  function _y(n) {
    if (n.tag === 13) {
      var r = Zl(n, 67108864);
      r !== null && $e(r, n, 67108864), kh(n, 67108864);
    }
  }
  var Uo = !0;
  function cA(n, r, o, f) {
    var d = H.T;
    H.T = null;
    var g = Q.p;
    try {
      Q.p = 2, Mh(n, r, o, f);
    } finally {
      Q.p = g, H.T = d;
    }
  }
  function fA(n, r, o, f) {
    var d = H.T;
    H.T = null;
    var g = Q.p;
    try {
      Q.p = 8, Mh(n, r, o, f);
    } finally {
      Q.p = g, H.T = d;
    }
  }
  function Mh(n, r, o, f) {
    if (Uo) {
      var d = Th(f);
      if (d === null)
        dh(
          n,
          r,
          f,
          Vo,
          o
        ), Vy(n, f);
      else if (dA(
        d,
        n,
        r,
        o,
        f
      ))
        f.stopPropagation();
      else if (Vy(n, f), r & 4 && -1 < hA.indexOf(n)) {
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
                      var C = 1 << 31 - Ke(b);
                      x.entanglements[1] |= C, b &= ~C;
                    }
                    Ni(g), (Lt & 6) === 0 && (wo = Oi() + 500, Tr(0));
                  }
                }
                break;
              case 13:
                x = Zl(g, 2), x !== null && $e(x, g, 2), Co(), kh(g, 2);
            }
          if (g = Th(f), g === null && dh(
            n,
            r,
            f,
            Vo,
            o
          ), g === d) break;
          d = g;
        }
        d !== null && f.stopPropagation();
      } else
        dh(
          n,
          r,
          f,
          null,
          o
        );
    }
  }
  function Th(n) {
    return n = Rc(n), Oh(n);
  }
  var Vo = null;
  function Oh(n) {
    if (Vo = null, n = zl(n), n !== null) {
      var r = a(n);
      if (r === null) n = null;
      else {
        var o = r.tag;
        if (o === 13) {
          if (n = u(r), n !== null) return n;
          n = null;
        } else if (o === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return Vo = n, null;
  }
  function Uy(n) {
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
        switch (Px()) {
          case Jm:
            return 2;
          case $m:
            return 8;
          case Ea:
          case Jx:
            return 32;
          case tp:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Dh = !1, Hn = null, _n = null, Un = null, zr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Vn = [], hA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vy(n, r) {
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
  function _r(n, r, o, f, d, g) {
    return n === null || n.nativeEvent !== g ? (n = {
      blockedOn: r,
      domEventName: o,
      eventSystemFlags: f,
      nativeEvent: g,
      targetContainers: [d]
    }, r !== null && (r = Hl(r), r !== null && _y(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function dA(n, r, o, f, d) {
    switch (r) {
      case "focusin":
        return Hn = _r(
          Hn,
          n,
          r,
          o,
          f,
          d
        ), !0;
      case "dragenter":
        return _n = _r(
          _n,
          n,
          r,
          o,
          f,
          d
        ), !0;
      case "mouseover":
        return Un = _r(
          Un,
          n,
          r,
          o,
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
            o,
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
            o,
            f,
            d
          )
        ), !0;
    }
    return !1;
  }
  function qy(n) {
    var r = zl(n.target);
    if (r !== null) {
      var o = a(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = u(o), r !== null) {
            n.blockedOn = r, rw(n.priority, function() {
              if (o.tag === 13) {
                var f = Je();
                f = Sc(f);
                var d = Zl(o, f);
                d !== null && $e(d, o, f), kh(o, f);
              }
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function qo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Th(n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var f = new o.constructor(
          o.type,
          o
        );
        Ec = f, o.target.dispatchEvent(f), Ec = null;
      } else
        return r = Hl(o), r !== null && _y(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function jy(n, r, o) {
    qo(n) && o.delete(r);
  }
  function mA() {
    Dh = !1, Hn !== null && qo(Hn) && (Hn = null), _n !== null && qo(_n) && (_n = null), Un !== null && qo(Un) && (Un = null), zr.forEach(jy), Hr.forEach(jy);
  }
  function jo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Dh || (Dh = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      mA
    )));
  }
  var Yo = null;
  function Yy(n) {
    Yo !== n && (Yo = n, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        Yo === n && (Yo = null);
        for (var r = 0; r < n.length; r += 3) {
          var o = n[r], f = n[r + 1], d = n[r + 2];
          if (typeof f != "function") {
            if (Oh(f || o) === null)
              continue;
            break;
          }
          var g = Hl(o);
          g !== null && (n.splice(r, 3), r -= 3, Of(
            g,
            {
              pending: !0,
              data: d,
              method: o.method,
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
      return jo(C, n);
    }
    Hn !== null && jo(Hn, n), _n !== null && jo(_n, n), Un !== null && jo(Un, n), zr.forEach(r), Hr.forEach(r);
    for (var o = 0; o < Vn.length; o++) {
      var f = Vn[o];
      f.blockedOn === n && (f.blockedOn = null);
    }
    for (; 0 < Vn.length && (o = Vn[0], o.blockedOn === null); )
      qy(o), o.blockedOn === null && Vn.shift();
    if (o = (n.ownerDocument || n).$$reactFormReplay, o != null)
      for (f = 0; f < o.length; f += 3) {
        var d = o[f], g = o[f + 1], b = d[Le] || null;
        if (typeof g == "function")
          b || Yy(o);
        else if (b) {
          var x = null;
          if (g && g.hasAttribute("formAction")) {
            if (d = g, b = g[Le] || null)
              x = b.formAction;
            else if (Oh(d) !== null) continue;
          } else x = b.action;
          typeof x == "function" ? o[f + 1] = x : (o.splice(f, 3), f -= 3), Yy(o);
        }
      }
  }
  function Eh(n) {
    this._internalRoot = n;
  }
  Go.prototype.render = Eh.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(i(409));
    var o = r.current, f = Je();
    zy(o, f, n, r, null, null);
  }, Go.prototype.unmount = Eh.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      zy(n.current, 2, null, n, null, null), Co(), r[Ll] = null;
    }
  };
  function Go(n) {
    this._internalRoot = n;
  }
  Go.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = sp();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Vn.length && r !== 0 && r < Vn[o].priority; o++) ;
      Vn.splice(o, 0, n), o === 0 && qy(n);
    }
  };
  var Gy = t.version;
  if (Gy !== "19.1.1")
    throw Error(
      i(
        527,
        Gy,
        "19.1.1"
      )
    );
  Q.findDOMNode = function(n) {
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(i(188)) : (n = Object.keys(n).join(","), Error(i(268, n)));
    return n = h(r), n = n !== null ? m(n) : null, n = n === null ? null : n.stateNode, n;
  };
  var pA = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xo.isDisabled && Xo.supportsFiber)
      try {
        Ys = Xo.inject(
          pA
        ), We = Xo;
      } catch {
      }
  }
  return qr.createRoot = function(n, r) {
    if (!s(n)) throw Error(i(299));
    var o = !1, f = "", d = s0, g = r0, b = a0, x = null;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (g = r.onCaughtError), r.onRecoverableError !== void 0 && (b = r.onRecoverableError), r.unstable_transitionCallbacks !== void 0 && (x = r.unstable_transitionCallbacks)), r = Ny(
      n,
      1,
      !1,
      null,
      null,
      o,
      f,
      d,
      g,
      b,
      x,
      null
    ), n[Ll] = r.current, hh(n), new Eh(r);
  }, qr.hydrateRoot = function(n, r, o) {
    if (!s(n)) throw Error(i(299));
    var f = !1, d = "", g = s0, b = r0, x = a0, C = null, N = null;
    return o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onUncaughtError !== void 0 && (g = o.onUncaughtError), o.onCaughtError !== void 0 && (b = o.onCaughtError), o.onRecoverableError !== void 0 && (x = o.onRecoverableError), o.unstable_transitionCallbacks !== void 0 && (C = o.unstable_transitionCallbacks), o.formState !== void 0 && (N = o.formState)), r = Ny(
      n,
      1,
      !0,
      r,
      o ?? null,
      f,
      d,
      g,
      b,
      x,
      C,
      N
    ), r.context = Ly(null), o = r.current, f = Je(), f = Sc(f), d = wn(f), d.callback = null, An(o, d, f), o = f, r.current.lanes = o, Xs(r, o), Ni(r), n[Ll] = r.current, hh(n), new Go(r);
  }, qr.version = "19.1.1", qr;
}
var $y;
function kA() {
  if ($y) return Bh.exports;
  $y = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), Bh.exports = CA(), Bh.exports;
}
var MA = kA();
function yd() {
  return yd = Object.assign ? Object.assign.bind() : function(l) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var i in e) ({}).hasOwnProperty.call(e, i) && (l[i] = e[i]);
    }
    return l;
  }, yd.apply(null, arguments);
}
function TA(l, t) {
  if (l == null) return {};
  var e = {};
  for (var i in l) if ({}.hasOwnProperty.call(l, i)) {
    if (t.indexOf(i) !== -1) continue;
    e[i] = l[i];
  }
  return e;
}
var Tt = dm();
let vd = [], Iv = [];
(() => {
  let l = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
  for (let t = 0, e = 0; t < l.length; t++)
    (t % 2 ? Iv : vd).push(e = e + l[t]);
})();
function OA(l) {
  if (l < 768) return !1;
  for (let t = 0, e = vd.length; ; ) {
    let i = t + e >> 1;
    if (l < vd[i]) e = i;
    else if (l >= Iv[i]) t = i + 1;
    else return !0;
    if (t == e) return !1;
  }
}
function t1(l) {
  return l >= 127462 && l <= 127487;
}
const e1 = 8205;
function DA(l, t, e = !0, i = !0) {
  return (e ? Fv : EA)(l, t, i);
}
function Fv(l, t, e) {
  if (t == l.length) return t;
  t && Pv(l.charCodeAt(t)) && Jv(l.charCodeAt(t - 1)) && t--;
  let i = _h(l, t);
  for (t += i1(i); t < l.length; ) {
    let s = _h(l, t);
    if (i == e1 || s == e1 || e && OA(s))
      t += i1(s), i = s;
    else if (t1(s)) {
      let a = 0, u = t - 2;
      for (; u >= 0 && t1(_h(l, u)); )
        a++, u -= 2;
      if (a % 2 == 0) break;
      t += 2;
    } else
      break;
  }
  return t;
}
function EA(l, t, e) {
  for (; t > 0; ) {
    let i = Fv(l, t - 2, e);
    if (i < t) return i;
    t--;
  }
  return 0;
}
function _h(l, t) {
  let e = l.charCodeAt(t);
  if (!Jv(e) || t + 1 == l.length) return e;
  let i = l.charCodeAt(t + 1);
  return Pv(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function Pv(l) {
  return l >= 56320 && l < 57344;
}
function Jv(l) {
  return l >= 55296 && l < 56320;
}
function i1(l) {
  return l < 65536 ? 1 : 2;
}
class Rt {
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
    let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), s = new Fr(this), a = new Fr(t);
    for (let u = e, c = e; ; ) {
      if (s.next(u), a.next(u), u = 0, s.lineBreak != a.lineBreak || s.done != a.done || s.value != a.value)
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
    return new $v(this, t, e);
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
    return new tb(i);
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
    return t.length == 1 && !t[0] ? Rt.empty : t.length <= 32 ? new ee(t) : Ui.from(ee.split(t, []));
  }
}
class ee extends Rt {
  constructor(t, e = RA(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, i, s) {
    for (let a = 0; ; a++) {
      let u = this.text[a], c = s + u.length;
      if ((e ? i : c) >= t)
        return new BA(s, c, i, u);
      s = c + 1, i++;
    }
  }
  decompose(t, e, i, s) {
    let a = t <= 0 && e >= this.length ? this : new ee(n1(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (s & 1) {
      let u = i.pop(), c = gu(a.text, u.text.slice(), 0, a.length);
      if (c.length <= 32)
        i.push(new ee(c, u.length + a.length));
      else {
        let h = c.length >> 1;
        i.push(new ee(c.slice(0, h)), new ee(c.slice(h)));
      }
    } else
      i.push(a);
  }
  replace(t, e, i) {
    if (!(i instanceof ee))
      return super.replace(t, e, i);
    [t, e] = Rs(this, t, e);
    let s = gu(this.text, gu(i.text, n1(this.text, 0, t)), e), a = this.length + i.length - (e - t);
    return s.length <= 32 ? new ee(s, a) : Ui.from(ee.split(s, []), a);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Rs(this, t, e);
    let s = "";
    for (let a = 0, u = 0; a <= e && u < this.text.length; u++) {
      let c = this.text[u], h = a + c.length;
      a > t && u && (s += i), t < h && e > a && (s += c.slice(Math.max(0, t - a), e - a)), a = h + 1;
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
    for (let a of t)
      i.push(a), s += a.length + 1, i.length == 32 && (e.push(new ee(i, s)), i = [], s = -1);
    return s > -1 && e.push(new ee(i, s)), e;
  }
}
class Ui extends Rt {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let i of t)
      this.lines += i.lines;
  }
  lineInner(t, e, i, s) {
    for (let a = 0; ; a++) {
      let u = this.children[a], c = s + u.length, h = i + u.lines - 1;
      if ((e ? h : c) >= t)
        return u.lineInner(t, e, i, s);
      s = c + 1, i = h + 1;
    }
  }
  decompose(t, e, i, s) {
    for (let a = 0, u = 0; u <= e && a < this.children.length; a++) {
      let c = this.children[a], h = u + c.length;
      if (t <= h && e >= u) {
        let m = s & ((u <= t ? 1 : 0) | (h >= e ? 2 : 0));
        u >= t && h <= e && !m ? i.push(c) : c.decompose(t - u, e - u, i, m);
      }
      u = h + 1;
    }
  }
  replace(t, e, i) {
    if ([t, e] = Rs(this, t, e), i.lines < this.lines)
      for (let s = 0, a = 0; s < this.children.length; s++) {
        let u = this.children[s], c = a + u.length;
        if (t >= a && e <= c) {
          let h = u.replace(t - a, e - a, i), m = this.lines - u.lines + h.lines;
          if (h.lines < m >> 4 && h.lines > m >> 6) {
            let p = this.children.slice();
            return p[s] = h, new Ui(p, this.length - (e - t) + i.length);
          }
          return super.replace(a, c, h);
        }
        a = c + 1;
      }
    return super.replace(t, e, i);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Rs(this, t, e);
    let s = "";
    for (let a = 0, u = 0; a < this.children.length && u <= e; a++) {
      let c = this.children[a], h = u + c.length;
      u > t && a && (s += i), t < h && e > u && (s += c.sliceString(t - u, e - u, i)), u = h + 1;
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
    let i = 0, [s, a, u, c] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; s += e, a += e) {
      if (s == u || a == c)
        return i;
      let h = this.children[s], m = t.children[a];
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
    ), a = s << 1, u = s >> 1, c = [], h = 0, m = -1, p = [];
    function y(S) {
      let w;
      if (S.lines > a && S instanceof Ui)
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
Rt.empty = /* @__PURE__ */ new ee([""], 0);
function RA(l) {
  let t = -1;
  for (let e of l)
    t += e.length + 1;
  return t;
}
function gu(l, t, e = 0, i = 1e9) {
  for (let s = 0, a = 0, u = !0; a < l.length && s <= i; a++) {
    let c = l[a], h = s + c.length;
    h >= e && (h > i && (c = c.slice(0, i - s)), s < e && (c = c.slice(e - s)), u ? (t[t.length - 1] += c, u = !1) : t.push(c)), s = h + 1;
  }
  return t;
}
function n1(l, t, e) {
  return gu(l, [""], t, e);
}
class Fr {
  constructor(t, e = 1) {
    this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof ee ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], a = this.offsets[i], u = a >> 1, c = s instanceof ee ? s.text.length : s.children.length;
      if (u == (e > 0 ? c : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((a & 1) == (e > 0 ? 0 : 1)) {
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
class $v {
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
class tb {
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
typeof Symbol < "u" && (Rt.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Fr.prototype[Symbol.iterator] = $v.prototype[Symbol.iterator] = tb.prototype[Symbol.iterator] = function() {
  return this;
});
class BA {
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
  return DA(l, t, e, i);
}
function NA(l) {
  return l >= 56320 && l < 57344;
}
function LA(l) {
  return l >= 55296 && l < 56320;
}
function Ve(l, t) {
  let e = l.charCodeAt(t);
  if (!LA(e) || t + 1 == l.length)
    return e;
  let i = l.charCodeAt(t + 1);
  return NA(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function mm(l) {
  return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
}
function Vi(l) {
  return l < 65536 ? 1 : 2;
}
const bd = /\r\n?|\n/;
var Be = /* @__PURE__ */ (function(l) {
  return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
})(Be || (Be = {}));
class Wi {
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
      let a = this.sections[e++], u = this.sections[e++];
      u < 0 ? (t(i, s, a), s += a) : s += u, i += a;
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
    Sd(this, t, e);
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
    return new Wi(t);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : eb(this, t);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(t, e = !1) {
    return t.empty ? this : xd(this, t, e);
  }
  mapPos(t, e = -1, i = Be.Simple) {
    let s = 0, a = 0;
    for (let u = 0; u < this.sections.length; ) {
      let c = this.sections[u++], h = this.sections[u++], m = s + c;
      if (h < 0) {
        if (m > t)
          return a + (t - s);
        a += c;
      } else {
        if (i != Be.Simple && m >= t && (i == Be.TrackDel && s < t && m > t || i == Be.TrackBefore && s < t || i == Be.TrackAfter && m > t))
          return null;
        if (m > t || m == t && e < 0 && !c)
          return t == s || e < 0 ? a : a + h;
        a += h;
      }
      s = m;
    }
    if (t > s)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${s}`);
    return a;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(t, e = t) {
    for (let i = 0, s = 0; i < this.sections.length && s <= e; ) {
      let a = this.sections[i++], u = this.sections[i++], c = s + a;
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
    return new Wi(t);
  }
  /**
  @internal
  */
  static create(t) {
    return new Wi(t);
  }
}
class ae extends Wi {
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
    return Sd(this, (e, i, s, a, u) => t = t.replace(s, s + (i - e), u), !1), t;
  }
  mapDesc(t, e = !1) {
    return xd(this, t, e, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(t) {
    let e = this.sections.slice(), i = [];
    for (let s = 0, a = 0; s < e.length; s += 2) {
      let u = e[s], c = e[s + 1];
      if (c >= 0) {
        e[s] = c, e[s + 1] = u;
        let h = s >> 1;
        for (; i.length < h; )
          i.push(Rt.empty);
        i.push(u ? t.slice(a, a + u) : Rt.empty);
      }
      a += u;
    }
    return new ae(e, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(t) {
    return this.empty ? t : t.empty ? this : eb(this, t, !0);
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
    return t.empty ? this : xd(this, t, e, !0);
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
    Sd(this, t, e);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Wi.create(this.sections);
  }
  /**
  @internal
  */
  filter(t) {
    let e = [], i = [], s = [], a = new sa(this);
    t: for (let u = 0, c = 0; ; ) {
      let h = u == t.length ? 1e9 : t[u++];
      for (; c < h || c == h && a.len == 0; ) {
        if (a.done)
          break t;
        let p = Math.min(a.len, h - c);
        Me(s, p, -1);
        let y = a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0;
        Me(e, p, y), y > 0 && Xn(i, e, a.text), a.forward(p), c += p;
      }
      let m = t[u++];
      for (; c < m; ) {
        if (a.done)
          break t;
        let p = Math.min(a.len, m - c);
        Me(e, p, -1), Me(s, p, a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0), a.forward(p), c += p;
      }
    }
    return {
      changes: new ae(e, i),
      filtered: Wi.create(s)
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
    let s = [], a = [], u = 0, c = null;
    function h(p = !1) {
      if (!p && !s.length)
        return;
      u < e && Me(s, e - u, -1);
      let y = new ae(s, a);
      c = c ? c.compose(y.map(c)) : y, s = [], a = [], u = 0;
    }
    function m(p) {
      if (Array.isArray(p))
        for (let y of p)
          m(y);
      else if (p instanceof ae) {
        if (p.length != e)
          throw new RangeError(`Mismatched change set length (got ${p.length}, expected ${e})`);
        h(), c = c ? c.compose(p.map(c)) : p;
      } else {
        let { from: y, to: v = y, insert: S } = p;
        if (y > v || y < 0 || v > e)
          throw new RangeError(`Invalid change range ${y} to ${v} (in doc of length ${e})`);
        let w = S ? typeof S == "string" ? Rt.of(S.split(i || bd)) : S : Rt.empty, A = w.length;
        if (y == v && A == 0)
          return;
        y < u && h(), y > u && Me(s, y - u, -1), Me(s, v - y, A), Xn(a, s, w), u = v;
      }
    }
    return m(t), h(!c), c;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(t) {
    return new ae(t ? [t, -1] : [], []);
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
      let a = t[s];
      if (typeof a == "number")
        e.push(a, -1);
      else {
        if (!Array.isArray(a) || typeof a[0] != "number" || a.some((u, c) => c && typeof u != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (a.length == 1)
          e.push(a[0], 0);
        else {
          for (; i.length < s; )
            i.push(Rt.empty);
          i[s] = Rt.of(a.slice(1)), e.push(a[0], i[s].length);
        }
      }
    }
    return new ae(e, i);
  }
  /**
  @internal
  */
  static createSet(t, e) {
    return new ae(t, e);
  }
}
function Me(l, t, e, i = !1) {
  if (t == 0 && e <= 0)
    return;
  let s = l.length - 2;
  s >= 0 && e <= 0 && e == l[s + 1] ? l[s] += t : s >= 0 && t == 0 && l[s] == 0 ? l[s + 1] += e : i ? (l[s] += t, l[s + 1] += e) : l.push(t, e);
}
function Xn(l, t, e) {
  if (e.length == 0)
    return;
  let i = t.length - 2 >> 1;
  if (i < l.length)
    l[l.length - 1] = l[l.length - 1].append(e);
  else {
    for (; l.length < i; )
      l.push(Rt.empty);
    l.push(e);
  }
}
function Sd(l, t, e) {
  let i = l.inserted;
  for (let s = 0, a = 0, u = 0; u < l.sections.length; ) {
    let c = l.sections[u++], h = l.sections[u++];
    if (h < 0)
      s += c, a += c;
    else {
      let m = s, p = a, y = Rt.empty;
      for (; m += c, p += h, h && i && (y = y.append(i[u - 2 >> 1])), !(e || u == l.sections.length || l.sections[u + 1] < 0); )
        c = l.sections[u++], h = l.sections[u++];
      t(s, m, a, p, y), s = m, a = p;
    }
  }
}
function xd(l, t, e, i = !1) {
  let s = [], a = i ? [] : null, u = new sa(l), c = new sa(t);
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
        u.ins >= 0 && h < u.i && u.len <= p && (Me(s, 0, u.ins), a && Xn(a, s, u.text), h = u.i), u.forward(p), m -= p;
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
      Me(s, m, h < u.i ? u.ins : 0), a && h < u.i && Xn(a, s, u.text), h = u.i, u.forward(u.len - p);
    } else {
      if (u.done && c.done)
        return a ? ae.createSet(s, a) : Wi.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function eb(l, t, e = !1) {
  let i = [], s = e ? [] : null, a = new sa(l), u = new sa(t);
  for (let c = !1; ; ) {
    if (a.done && u.done)
      return s ? ae.createSet(i, s) : Wi.create(i);
    if (a.ins == 0)
      Me(i, a.len, 0, c), a.next();
    else if (u.len == 0 && !u.done)
      Me(i, 0, u.ins, c), s && Xn(s, i, u.text), u.next();
    else {
      if (a.done || u.done)
        throw new Error("Mismatched change set lengths");
      {
        let h = Math.min(a.len2, u.len), m = i.length;
        if (a.ins == -1) {
          let p = u.ins == -1 ? -1 : u.off ? 0 : u.ins;
          Me(i, h, p, c), s && p && Xn(s, i, u.text);
        } else u.ins == -1 ? (Me(i, a.off ? 0 : a.len, h, c), s && Xn(s, i, a.textBit(h))) : (Me(i, a.off ? 0 : a.len, u.off ? 0 : u.ins, c), s && !u.off && Xn(s, i, u.text));
        c = (a.ins > h || u.ins >= 0 && u.len > h) && (c || i.length > m), a.forward2(h), u.forward(h);
      }
    }
  }
}
class sa {
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
    return e >= t.length ? Rt.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, i = this.i - 2 >> 1;
    return i >= e.length && !t ? Rt.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
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
      return X.range(t, e, void 0, void 0, i);
    let s = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return X.range(this.anchor, s, void 0, void 0, i);
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
    return X.range(t.anchor, t.head);
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Cl(t, e, i);
  }
}
class X {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(t, e = -1) {
    return t.empty ? this : X.create(this.ranges.map((i) => i.map(t, e)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new X([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(t, e = !0) {
    return X.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(t, e = this.mainIndex) {
    let i = this.ranges.slice();
    return i[e] = t, X.create(i, this.mainIndex);
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
    return new X(t.ranges.map((e) => Cl.fromJSON(e)), t.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(t, e = t) {
    return new X([X.range(t, e)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < t.length; s++) {
      let a = t[s];
      if (a.empty ? a.from <= i : a.from < i)
        return X.normalized(t.slice(), e);
      i = a.to;
    }
    return new X(t, e);
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
  static range(t, e, i, s, a) {
    let u = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return !a && t != e && (a = e < t ? 1 : -1), e < t ? Cl.create(e, t, 48 | u) : Cl.create(t, e, (a ? a < 0 ? 8 : 16 : 0) | u);
  }
  /**
  @internal
  */
  static normalized(t, e = 0) {
    let i = t[e];
    t.sort((s, a) => s.from - a.from), e = t.indexOf(i);
    for (let s = 1; s < t.length; s++) {
      let a = t[s], u = t[s - 1];
      if (a.empty ? a.from <= u.to : a.from < u.to) {
        let c = u.from, h = Math.max(a.to, u.to);
        s <= e && e--, t.splice(--s, 2, a.anchor > a.head ? X.range(h, c) : X.range(c, h));
      }
    }
    return new X(t, e);
  }
}
function ib(l, t) {
  for (let e of l.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let pm = 0;
class nt {
  constructor(t, e, i, s, a) {
    this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = s, this.id = pm++, this.default = t([]), this.extensions = typeof a == "function" ? a(this) : a;
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
    return new nt(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : gm), !!t.static, t.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(t) {
    return new yu([], this, 0, t);
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
    return new yu(t, this, 1, e);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new yu(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (i) => i), this.compute([t], (i) => e(i.field(t)));
  }
}
function gm(l, t) {
  return l == t || l.length == t.length && l.every((e, i) => e === t[i]);
}
class yu {
  constructor(t, e, i, s) {
    this.dependencies = t, this.facet = e, this.type = i, this.value = s, this.id = pm++;
  }
  dynamicSlot(t) {
    var e;
    let i = this.value, s = this.facet.compareInput, a = this.id, u = t[a] >> 1, c = this.type == 2, h = !1, m = !1, p = [];
    for (let y of this.dependencies)
      y == "doc" ? h = !0 : y == "selection" ? m = !0 : (((e = t[y.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && p.push(t[y.id]);
    return {
      create(y) {
        return y.values[u] = i(y), 1;
      },
      update(y, v) {
        if (h && v.docChanged || m && (v.docChanged || v.selection) || wd(y, p)) {
          let S = i(y);
          if (c ? !l1(S, y.values[u], s) : !s(S, y.values[u]))
            return y.values[u] = S, 1;
        }
        return 0;
      },
      reconfigure: (y, v) => {
        let S, w = v.config.address[a];
        if (w != null) {
          let A = ku(v, w);
          if (this.dependencies.every((k) => k instanceof nt ? v.facet(k) === y.facet(k) : k instanceof Oe ? v.field(k, !1) == y.field(k, !1) : !0) || (c ? l1(S = i(y), A, s) : s(S = i(y), A)))
            return y.values[u] = A, 0;
        } else
          S = i(y);
        return y.values[u] = S, 1;
      }
    };
  }
}
function l1(l, t, e) {
  if (l.length != t.length)
    return !1;
  for (let i = 0; i < l.length; i++)
    if (!e(l[i], t[i]))
      return !1;
  return !0;
}
function wd(l, t) {
  let e = !1;
  for (let i of t)
    Pr(l, i) & 1 && (e = !0);
  return e;
}
function zA(l, t, e) {
  let i = e.map((h) => l[h.id]), s = e.map((h) => h.type), a = i.filter((h) => !(h & 1)), u = l[t.id] >> 1;
  function c(h) {
    let m = [];
    for (let p = 0; p < i.length; p++) {
      let y = ku(h, i[p]);
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
      if (!wd(h, a))
        return 0;
      let p = c(h);
      return t.compare(p, h.values[u]) ? 0 : (h.values[u] = p, 1);
    },
    reconfigure(h, m) {
      let p = wd(h, i), y = m.config.facets[t.id], v = m.facet(t);
      if (y && !p && gm(e, y))
        return h.values[u] = v, 0;
      let S = c(h);
      return t.compare(S, v) ? (h.values[u] = v, 0) : (h.values[u] = S, 1);
    }
  };
}
const Wo = /* @__PURE__ */ nt.define({ static: !0 });
class Oe {
  constructor(t, e, i, s, a) {
    this.id = t, this.createF = e, this.updateF = i, this.compareF = s, this.spec = a, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(t) {
    let e = new Oe(pm++, t.create, t.update, t.compare || ((i, s) => i === s), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(Wo).find((i) => i.field == this);
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
        let a = i.values[e], u = this.updateF(a, s);
        return this.compareF(a, u) ? 0 : (i.values[e] = u, 1);
      },
      reconfigure: (i, s) => {
        let a = i.facet(Wo), u = s.facet(Wo), c;
        return (c = a.find((h) => h.field == this)) && c != u.find((h) => h.field == this) ? (i.values[e] = c.create(i), 1) : s.config.address[this.id] != null ? (i.values[e] = s.field(this), 0) : (i.values[e] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(t) {
    return [this, Wo.of({ field: this, create: t })];
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
  return (t) => new nb(t, l);
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
class nb {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class Ju {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(t) {
    return new Ad(this, t);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(t) {
    return Ju.reconfigure.of({ compartment: this, extension: t });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(t) {
    return t.config.compartments.get(this);
  }
}
class Ad {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class Cu {
  constructor(t, e, i, s, a, u) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = s, this.staticValues = a, this.facets = u, this.statusTemplate = []; this.statusTemplate.length < i.length; )
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
    let s = [], a = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Map();
    for (let v of HA(t, e, u))
      v instanceof Oe ? s.push(v) : (a[v.facet.id] || (a[v.facet.id] = [])).push(v);
    let c = /* @__PURE__ */ Object.create(null), h = [], m = [];
    for (let v of s)
      c[v.id] = m.length << 1, m.push((S) => v.slot(S));
    let p = i?.config.facets;
    for (let v in a) {
      let S = a[v], w = S[0].facet, A = p && p[v] || [];
      if (S.every(
        (k) => k.type == 0
        /* Provider.Static */
      ))
        if (c[w.id] = h.length << 1 | 1, gm(A, S))
          h.push(i.facet(w));
        else {
          let k = w.combine(S.map((E) => E.value));
          h.push(i && w.compare(k, i.facet(w)) ? i.facet(w) : k);
        }
      else {
        for (let k of S)
          k.type == 0 ? (c[k.id] = h.length << 1 | 1, h.push(k.value)) : (c[k.id] = m.length << 1, m.push((E) => k.dynamicSlot(E)));
        c[w.id] = m.length << 1, m.push((k) => zA(k, w, S));
      }
    }
    let y = m.map((v) => v(c));
    return new Cu(t, u, y, c, h, a);
  }
}
function HA(l, t, e) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function a(u, c) {
    let h = s.get(u);
    if (h != null) {
      if (h <= c)
        return;
      let m = i[h].indexOf(u);
      m > -1 && i[h].splice(m, 1), u instanceof Ad && e.delete(u.compartment);
    }
    if (s.set(u, c), Array.isArray(u))
      for (let m of u)
        a(m, c);
    else if (u instanceof Ad) {
      if (e.has(u.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let m = t.get(u.compartment) || u.inner;
      e.set(u.compartment, m), a(m, c);
    } else if (u instanceof nb)
      a(u.inner, u.prec);
    else if (u instanceof Oe)
      i[c].push(u), u.provides && a(u.provides, c);
    else if (u instanceof yu)
      i[c].push(u), u.facet.extensions && a(u.facet.extensions, wl.default);
    else {
      let m = u.extension;
      if (!m)
        throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      a(m, c);
    }
  }
  return a(l, wl.default), i.reduce((u, c) => u.concat(c));
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
function ku(l, t) {
  return t & 1 ? l.config.staticValues[t >> 1] : l.values[t >> 1];
}
const lb = /* @__PURE__ */ nt.define(), Cd = /* @__PURE__ */ nt.define({
  combine: (l) => l.some((t) => t),
  static: !0
}), sb = /* @__PURE__ */ nt.define({
  combine: (l) => l.length ? l[0] : void 0,
  static: !0
}), rb = /* @__PURE__ */ nt.define(), ab = /* @__PURE__ */ nt.define(), ob = /* @__PURE__ */ nt.define(), ub = /* @__PURE__ */ nt.define({
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
    return new _A();
  }
}
class _A {
  /**
  Create an instance of this annotation.
  */
  of(t) {
    return new Qi(this, t);
  }
}
class UA {
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
    return new bt(this, t);
  }
}
class bt {
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
    return e === void 0 ? void 0 : e == this.value ? this : new bt(this.type, e);
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
    return new UA(t.map || ((e) => e));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let i = [];
    for (let s of t) {
      let a = s.map(e);
      a && i.push(a);
    }
    return i;
  }
}
bt.reconfigure = /* @__PURE__ */ bt.define();
bt.appendConfig = /* @__PURE__ */ bt.define();
class oe {
  constructor(t, e, i, s, a, u) {
    this.startState = t, this.changes = e, this.selection = i, this.effects = s, this.annotations = a, this.scrollIntoView = u, this._doc = null, this._state = null, i && ib(i, e.newLength), a.some((c) => c.type == oe.time) || (this.annotations = a.concat(oe.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(t, e, i, s, a, u) {
    return new oe(t, e, i, s, a, u);
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
    let e = this.annotation(oe.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
oe.time = /* @__PURE__ */ Qi.define();
oe.userEvent = /* @__PURE__ */ Qi.define();
oe.addToHistory = /* @__PURE__ */ Qi.define();
oe.remote = /* @__PURE__ */ Qi.define();
function VA(l, t) {
  let e = [];
  for (let i = 0, s = 0; ; ) {
    let a, u;
    if (i < l.length && (s == t.length || t[s] >= l[i]))
      a = l[i++], u = l[i++];
    else if (s < t.length)
      a = t[s++], u = t[s++];
    else
      return e;
    !e.length || e[e.length - 1] < a ? e.push(a, u) : e[e.length - 1] < u && (e[e.length - 1] = u);
  }
}
function cb(l, t, e) {
  var i;
  let s, a, u;
  return e ? (s = t.changes, a = ae.empty(t.changes.length), u = l.changes.compose(t.changes)) : (s = t.changes.map(l.changes), a = l.changes.mapDesc(t.changes, !0), u = l.changes.compose(s)), {
    changes: u,
    selection: t.selection ? t.selection.map(a) : (i = l.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: bt.mapEffects(l.effects, s).concat(bt.mapEffects(t.effects, a)),
    annotations: l.annotations.length ? l.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: l.scrollIntoView || t.scrollIntoView
  };
}
function kd(l, t, e) {
  let i = t.selection, s = ks(t.annotations);
  return t.userEvent && (s = s.concat(oe.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof ae ? t.changes : ae.of(t.changes || [], e, l.facet(sb)),
    selection: i && (i instanceof X ? i : X.single(i.anchor, i.head)),
    effects: ks(t.effects),
    annotations: s,
    scrollIntoView: !!t.scrollIntoView
  };
}
function fb(l, t, e) {
  let i = kd(l, t.length ? t[0] : {}, l.doc.length);
  t.length && t[0].filter === !1 && (e = !1);
  for (let a = 1; a < t.length; a++) {
    t[a].filter === !1 && (e = !1);
    let u = !!t[a].sequential;
    i = cb(i, kd(l, t[a], u ? i.changes.newLength : l.doc.length), u);
  }
  let s = oe.create(l, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return jA(e ? qA(s) : s);
}
function qA(l) {
  let t = l.startState, e = !0;
  for (let s of t.facet(rb)) {
    let a = s(l);
    if (a === !1) {
      e = !1;
      break;
    }
    Array.isArray(a) && (e = e === !0 ? a : VA(e, a));
  }
  if (e !== !0) {
    let s, a;
    if (e === !1)
      a = l.changes.invertedDesc, s = ae.empty(t.doc.length);
    else {
      let u = l.changes.filter(e);
      s = u.changes, a = u.filtered.mapDesc(u.changes).invertedDesc;
    }
    l = oe.create(t, s, l.selection && l.selection.map(a), bt.mapEffects(l.effects, a), l.annotations, l.scrollIntoView);
  }
  let i = t.facet(ab);
  for (let s = i.length - 1; s >= 0; s--) {
    let a = i[s](l);
    a instanceof oe ? l = a : Array.isArray(a) && a.length == 1 && a[0] instanceof oe ? l = a[0] : l = fb(t, ks(a), !1);
  }
  return l;
}
function jA(l) {
  let t = l.startState, e = t.facet(ob), i = l;
  for (let s = e.length - 1; s >= 0; s--) {
    let a = e[s](l);
    a && Object.keys(a).length && (i = cb(i, kd(t, a, l.changes.newLength), !0));
  }
  return i == l ? l : oe.create(t, l.changes, l.selection, i.effects, i.annotations, i.scrollIntoView);
}
const YA = [];
function ks(l) {
  return l == null ? YA : Array.isArray(l) ? l : [l];
}
var Qt = /* @__PURE__ */ (function(l) {
  return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
})(Qt || (Qt = {}));
const GA = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Md;
try {
  Md = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function XA(l) {
  if (Md)
    return Md.test(l);
  for (let t = 0; t < l.length; t++) {
    let e = l[t];
    if (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || GA.test(e)))
      return !0;
  }
  return !1;
}
function WA(l) {
  return (t) => {
    if (!/\S/.test(t))
      return Qt.Space;
    if (XA(t))
      return Qt.Word;
    for (let e = 0; e < l.length; e++)
      if (t.indexOf(l[e]) > -1)
        return Qt.Word;
    return Qt.Other;
  };
}
class Ot {
  constructor(t, e, i, s, a, u) {
    this.config = t, this.doc = e, this.selection = i, this.values = s, this.status = t.statusTemplate.slice(), this.computeSlot = a, u && (u._state = this);
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
    return Pr(this, i), ku(this, i);
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
    return fb(this, t, !0);
  }
  /**
  @internal
  */
  applyTransaction(t) {
    let e = this.config, { base: i, compartments: s } = e;
    for (let c of t.effects)
      c.is(Ju.reconfigure) ? (e && (s = /* @__PURE__ */ new Map(), e.compartments.forEach((h, m) => s.set(m, h)), e = null), s.set(c.value.compartment, c.value.extension)) : c.is(bt.reconfigure) ? (e = null, i = c.value) : c.is(bt.appendConfig) && (e = null, i = ks(i).concat(c.value));
    let a;
    e ? a = t.startState.values.slice() : (e = Cu.resolve(i, s, this), a = new Ot(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (h, m) => m.reconfigure(h, this), null).values);
    let u = t.startState.facet(Cd) ? t.newSelection : t.newSelection.asSingle();
    new Ot(e, t.newDoc, u, a, (c, h) => h.update(c, t), t);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
      changes: { from: e.from, to: e.to, insert: t },
      range: X.cursor(e.from + t.length)
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
    let e = this.selection, i = t(e.ranges[0]), s = this.changes(i.changes), a = [i.range], u = ks(i.effects);
    for (let c = 1; c < e.ranges.length; c++) {
      let h = t(e.ranges[c]), m = this.changes(h.changes), p = m.map(s);
      for (let v = 0; v < c; v++)
        a[v] = a[v].map(p);
      let y = s.mapDesc(m, !0);
      a.push(h.range.map(y)), s = s.compose(p), u = bt.mapEffects(u, p).concat(bt.mapEffects(ks(h.effects), y));
    }
    return {
      changes: s,
      selection: X.create(a, e.mainIndex),
      effects: u
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(t = []) {
    return t instanceof ae ? t : ae.of(t, this.doc.length, this.facet(Ot.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(t) {
    return Rt.of(t.split(this.facet(Ot.lineSeparator) || bd));
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
    return e == null ? t.default : (Pr(this, e), ku(this, e));
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
      for (let a in i)
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          let u = i[a], c = t[a];
          s.push(u.init((h) => u.spec.fromJSON(c, h)));
        }
    }
    return Ot.create({
      doc: t.doc,
      selection: X.fromJSON(t.selection),
      extensions: e.extensions ? s.concat([e.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(t = {}) {
    let e = Cu.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof Rt ? t.doc : Rt.of((t.doc || "").split(e.staticFacet(Ot.lineSeparator) || bd)), s = t.selection ? t.selection instanceof X ? t.selection : X.single(t.selection.anchor, t.selection.head) : X.single(0);
    return ib(s, i.length), e.staticFacet(Cd) || (s = s.asSingle()), new Ot(e, i, s, e.dynamicSlots.map(() => null), (a, u) => u.create(a), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(Ot.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(Ot.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(ub);
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
    for (let i of this.facet(Ot.phrases))
      if (Object.prototype.hasOwnProperty.call(i, t)) {
        t = i[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let a = +(s || 1);
      return !a || a > e.length ? i : e[a - 1];
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
    for (let a of this.facet(lb))
      for (let u of a(this, e, i))
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
    return WA(e.length ? e[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(t) {
    let { text: e, from: i, length: s } = this.doc.lineAt(t), a = this.charCategorizer(t), u = t - i, c = t - i;
    for (; u > 0; ) {
      let h = me(e, u, !1);
      if (a(e.slice(h, u)) != Qt.Word)
        break;
      u = h;
    }
    for (; c < s; ) {
      let h = me(e, c);
      if (a(e.slice(c, h)) != Qt.Word)
        break;
      c = h;
    }
    return u == c ? null : X.range(u + i, c + i);
  }
}
Ot.allowMultipleSelections = Cd;
Ot.tabSize = /* @__PURE__ */ nt.define({
  combine: (l) => l.length ? l[0] : 4
});
Ot.lineSeparator = sb;
Ot.readOnly = ub;
Ot.phrases = /* @__PURE__ */ nt.define({
  compare(l, t) {
    let e = Object.keys(l), i = Object.keys(t);
    return e.length == i.length && e.every((s) => l[s] == t[s]);
  }
});
Ot.languageData = lb;
Ot.changeFilter = rb;
Ot.transactionFilter = ab;
Ot.transactionExtender = ob;
Ju.reconfigure = /* @__PURE__ */ bt.define();
function Zi(l, t, e = {}) {
  let i = {};
  for (let s of l)
    for (let a of Object.keys(s)) {
      let u = s[a], c = i[a];
      if (c === void 0)
        i[a] = u;
      else if (!(c === u || u === void 0)) if (Object.hasOwnProperty.call(e, a))
        i[a] = e[a](c, u);
      else
        throw new Error("Config merge conflict for field " + a);
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
    return Td.create(t, e, this);
  }
}
Qn.prototype.startSide = Qn.prototype.endSide = 0;
Qn.prototype.point = !1;
Qn.prototype.mapMode = Be.TrackDel;
function ym(l, t) {
  return l == t || l.constructor == t.constructor && l.eq(t);
}
let Td = class hb {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.value = i;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new hb(t, e, i);
  }
};
function Od(l, t) {
  return l.from - t.from || l.value.startSide - t.value.startSide;
}
class vm {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(t, e, i, s = 0) {
    let a = i ? this.to : this.from;
    for (let u = s, c = a.length; ; ) {
      if (u == c)
        return u;
      let h = u + c >> 1, m = a[h] - t || (i ? this.value[h].endSide : this.value[h].startSide) - e;
      if (h == u)
        return m >= 0 ? u : c;
      m >= 0 ? c = h : u = h + 1;
    }
  }
  between(t, e, i, s) {
    for (let a = this.findIndex(e, -1e9, !0), u = this.findIndex(i, 1e9, !1, a); a < u; a++)
      if (s(this.from[a] + t, this.to[a] + t, this.value[a]) === !1)
        return !1;
  }
  map(t, e) {
    let i = [], s = [], a = [], u = -1, c = -1;
    for (let h = 0; h < this.value.length; h++) {
      let m = this.value[h], p = this.from[h] + t, y = this.to[h] + t, v, S;
      if (p == y) {
        let w = e.mapPos(p, m.startSide, m.mapMode);
        if (w == null || (v = S = w, m.startSide != m.endSide && (S = e.mapPos(p, m.endSide), S < v)))
          continue;
      } else if (v = e.mapPos(p, m.startSide), S = e.mapPos(y, m.endSide), v > S || v == S && m.startSide > 0 && m.endSide <= 0)
        continue;
      (S - v || m.endSide - m.startSide) < 0 || (u < 0 && (u = v), m.point && (c = Math.max(c, S - v)), i.push(m), s.push(v - u), a.push(S - u));
    }
    return { mapped: i.length ? new vm(s, a, i, c) : null, pos: u };
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
    let { add: e = [], sort: i = !1, filterFrom: s = 0, filterTo: a = this.length } = t, u = t.filter;
    if (e.length == 0 && !u)
      return this;
    if (i && (e = e.slice().sort(Od)), this.isEmpty)
      return e.length ? Mt.of(e) : this;
    let c = new db(this, null, -1).goto(0), h = 0, m = [], p = new Ki();
    for (; c.value || h < e.length; )
      if (h < e.length && (c.from - e[h].from || c.startSide - e[h].value.startSide) >= 0) {
        let y = e[h++];
        p.addInner(y.from, y.to, y.value) || m.push(y);
      } else c.rangeIndex == 1 && c.chunkIndex < this.chunk.length && (h == e.length || this.chunkEnd(c.chunkIndex) < e[h].from) && (!u || s > this.chunkEnd(c.chunkIndex) || a < this.chunkPos[c.chunkIndex]) && p.addChunk(this.chunkPos[c.chunkIndex], this.chunk[c.chunkIndex]) ? c.nextChunk() : ((!u || s > c.to || a < c.from || u(c.from, c.to, c.value)) && (p.addInner(c.from, c.to, c.value) || m.push(Td.create(c.from, c.to, c.value))), c.next());
    return p.finishInner(this.nextLayer.isEmpty && !m.length ? Mt.empty : this.nextLayer.update({ add: m, filter: u, filterFrom: s, filterTo: a }));
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
    let a = this.nextLayer.map(t);
    return e.length == 0 ? a : new Mt(i, e, a || Mt.empty, s);
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
        let a = this.chunkPos[s], u = this.chunk[s];
        if (e >= a && t <= a + u.length && u.between(a, t - a, e - a, i) === !1)
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
    return ra.from([this]).goto(t);
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
    return ra.from(t).goto(e);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(t, e, i, s, a = -1) {
    let u = t.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= a), c = e.filter((y) => y.maxPoint > 0 || !y.isEmpty && y.maxPoint >= a), h = s1(u, c, i), m = new Yr(u, h, a), p = new Yr(c, h, a);
    i.iterGaps((y, v, S) => r1(m, y, p, v, S, s)), i.empty && i.length == 0 && r1(m, 0, p, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(t, e, i = 0, s) {
    s == null && (s = 999999999);
    let a = t.filter((p) => !p.isEmpty && e.indexOf(p) < 0), u = e.filter((p) => !p.isEmpty && t.indexOf(p) < 0);
    if (a.length != u.length)
      return !1;
    if (!a.length)
      return !0;
    let c = s1(a, u), h = new Yr(a, c, 0).goto(i), m = new Yr(u, c, 0).goto(i);
    for (; ; ) {
      if (h.to != m.to || !Dd(h.active, m.active) || h.point && (!m.point || !ym(h.point, m.point)))
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
  static spans(t, e, i, s, a = -1) {
    let u = new Yr(t, null, a).goto(e), c = e, h = u.openStart;
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
    let i = new Ki();
    for (let s of t instanceof Td ? [t] : e ? KA(t) : t)
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
function KA(l) {
  if (l.length > 1)
    for (let t = l[0], e = 1; e < l.length; e++) {
      let i = l[e];
      if (Od(t, i) > 0)
        return l.slice().sort(Od);
      t = i;
    }
  return l;
}
Mt.empty.nextLayer = Mt.empty;
class Ki {
  finishChunk(t) {
    this.chunks.push(new vm(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new Ki())).add(t, e, i);
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
function s1(l, t, e) {
  let i = /* @__PURE__ */ new Map();
  for (let a of l)
    for (let u = 0; u < a.chunk.length; u++)
      a.chunk[u].maxPoint <= 0 && i.set(a.chunk[u], a.chunkPos[u]);
  let s = /* @__PURE__ */ new Set();
  for (let a of t)
    for (let u = 0; u < a.chunk.length; u++) {
      let c = i.get(a.chunk[u]);
      c != null && (e ? e.mapPos(c) : c) == a.chunkPos[u] && !e?.touchesRange(c, c + a.chunk[u].length) && s.add(a.chunk[u]);
    }
  return s;
}
class db {
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
class ra {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, i = -1) {
    let s = [];
    for (let a = 0; a < t.length; a++)
      for (let u = t[a]; !u.isEmpty; u = u.nextLayer)
        u.maxPoint >= i && s.push(new db(u, e, i, a));
    return s.length == 1 ? s[0] : new ra(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let i of this.heap)
      i.goto(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Uh(this.heap, i);
    return this.next(), this;
  }
  forward(t, e) {
    for (let i of this.heap)
      i.forward(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Uh(this.heap, i);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Uh(this.heap, 0);
    }
  }
}
function Uh(l, t) {
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
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ra.from(t, e, i);
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
    Ko(this.active, t), Ko(this.activeTo, t), Ko(this.activeRank, t), this.minActive = a1(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: i, to: s, rank: a } = this.cursor;
    for (; e < this.activeRank.length && (a - this.activeRank[e] || s - this.activeTo[e]) > 0; )
      e++;
    Qo(this.active, e, i), Qo(this.activeTo, e, s), Qo(this.activeRank, e, a), t && Qo(t, e, this.cursor.from), this.minActive = a1(this.active, this.activeTo);
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
        this.removeActive(s), i && Ko(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let a = this.cursor.value;
          if (!a.point)
            this.addActive(i), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = a, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = a.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
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
function r1(l, t, e, i, s, a) {
  l.goto(t), e.goto(i);
  let u = i + s, c = i, h = i - t, m = !!a.boundChange;
  for (let p = !1; ; ) {
    let y = l.to + h - e.to, v = y || l.endSide - e.endSide, S = v < 0 ? l.to + h : e.to, w = Math.min(S, u);
    if (l.point || e.point ? (l.point && e.point && ym(l.point, e.point) && Dd(l.activeForPoint(l.to), e.activeForPoint(e.to)) || a.comparePoint(c, w, l.point, e.point), p = !1) : (p && a.boundChange(c), w > c && !Dd(l.active, e.active) && a.compareRange(c, w, l.active, e.active), m && w < u && (y || l.openEnd(S) != e.openEnd(S)) && (p = !0)), S > u)
      break;
    c = S, v <= 0 && l.next(), v >= 0 && e.next();
  }
}
function Dd(l, t) {
  if (l.length != t.length)
    return !1;
  for (let e = 0; e < l.length; e++)
    if (l[e] != t[e] && !ym(l[e], t[e]))
      return !1;
  return !0;
}
function Ko(l, t) {
  for (let e = t, i = l.length - 1; e < i; e++)
    l[e] = l[e + 1];
  l.pop();
}
function Qo(l, t, e) {
  for (let i = l.length - 1; i >= t; i--)
    l[i + 1] = l[i];
  l[t] = e;
}
function a1(l, t) {
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
function Ed(l, t, e, i) {
  for (let s = 0, a = 0; ; ) {
    if (a >= t)
      return s;
    if (s == l.length)
      break;
    a += l.charCodeAt(s) == 9 ? e - a % e : 1, s = me(l, s);
  }
  return i === !0 ? -1 : l.length;
}
const Rd = "ͼ", o1 = typeof Symbol > "u" ? "__" + Rd : Symbol.for(Rd), Bd = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), u1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
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
    function a(u, c, h, m) {
      let p = [], y = /^@(\w+)\b/.exec(u[0]), v = y && y[1] == "keyframes";
      if (y && c == null) return h.push(u[0] + ";");
      for (let S in c) {
        let w = c[S];
        if (/&/.test(S))
          a(
            S.split(/,\s*/).map((A) => u.map((k) => A.replace(/&/, k))).reduce((A, k) => A.concat(k)),
            w,
            h
          );
        else if (w && typeof w == "object") {
          if (!y) throw new RangeError("The value of a property (" + S + ") should be a primitive value.");
          a(s(S), w, p, v);
        } else w != null && p.push(S.replace(/_.*/, "").replace(/[A-Z]/g, (A) => "-" + A.toLowerCase()) + ": " + w + ";");
      }
      (p.length || v) && h.push((i && !y && !m ? u.map(i) : u).join(", ") + " {" + p.join(" ") + "}");
    }
    for (let u in t) a(s(u), t[u], this.rules);
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
    let t = u1[o1] || 1;
    return u1[o1] = t + 1, Rd + t.toString(36);
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
    let s = t[Bd], a = i && i.nonce;
    s ? a && s.setNonce(a) : s = new QA(t, a), s.mount(Array.isArray(e) ? e : [e], t);
  }
}
let c1 = /* @__PURE__ */ new Map();
class QA {
  constructor(t, e) {
    let i = t.ownerDocument || t, s = i.defaultView;
    if (!t.head && t.adoptedStyleSheets && s.CSSStyleSheet) {
      let a = c1.get(i);
      if (a) return t[Bd] = a;
      this.sheet = new s.CSSStyleSheet(), c1.set(i, this);
    } else
      this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
    this.modules = [], t[Bd] = this;
  }
  mount(t, e) {
    let i = this.sheet, s = 0, a = 0;
    for (let u = 0; u < t.length; u++) {
      let c = t[u], h = this.modules.indexOf(c);
      if (h < a && h > -1 && (this.modules.splice(h, 1), a--, h = -1), h == -1) {
        if (this.modules.splice(a++, 0, c), i) for (let m = 0; m < c.rules.length; m++)
          i.insertRule(c.rules[m], s++);
      } else {
        for (; a < h; ) s += this.modules[a++].rules.length;
        s += c.rules.length, a++;
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
var In = {
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
}, aa = {
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
}, ZA = typeof navigator < "u" && /Mac/.test(navigator.platform), IA = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var be = 0; be < 10; be++) In[48 + be] = In[96 + be] = String(be);
for (var be = 1; be <= 24; be++) In[be + 111] = "F" + be;
for (var be = 65; be <= 90; be++)
  In[be] = String.fromCharCode(be + 32), aa[be] = String.fromCharCode(be);
for (var Vh in In) aa.hasOwnProperty(Vh) || (aa[Vh] = In[Vh]);
function FA(l) {
  var t = ZA && l.metaKey && l.shiftKey && !l.ctrlKey && !l.altKey || IA && l.shiftKey && l.key && l.key.length == 1 || l.key == "Unidentified", e = !t && l.key || (l.shiftKey ? aa : In)[l.keyCode] || l.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function Vt() {
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
  for (; t < arguments.length; t++) mb(l, arguments[t]);
  return l;
}
function mb(l, t) {
  if (typeof t == "string")
    l.appendChild(document.createTextNode(t));
  else if (t != null) if (t.nodeType != null)
    l.appendChild(t);
  else if (Array.isArray(t))
    for (var e = 0; e < t.length; e++) mb(l, t[e]);
  else
    throw new RangeError("Unsupported child node: " + t);
}
let Re = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Nd = typeof document < "u" ? document : { documentElement: { style: {} } };
const Ld = /* @__PURE__ */ /Edge\/(\d+)/.exec(Re.userAgent), pb = /* @__PURE__ */ /MSIE \d/.test(Re.userAgent), zd = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Re.userAgent), $u = !!(pb || zd || Ld), f1 = !$u && /* @__PURE__ */ /gecko\/(\d+)/i.test(Re.userAgent), qh = !$u && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Re.userAgent), h1 = "webkitFontSmoothing" in Nd.documentElement.style, Hd = !$u && /* @__PURE__ */ /Apple Computer/.test(Re.vendor), d1 = Hd && (/* @__PURE__ */ /Mobile\/\w+/.test(Re.userAgent) || Re.maxTouchPoints > 2);
var it = {
  mac: d1 || /* @__PURE__ */ /Mac/.test(Re.platform),
  windows: /* @__PURE__ */ /Win/.test(Re.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Re.platform),
  ie: $u,
  ie_version: pb ? Nd.documentMode || 6 : zd ? +zd[1] : Ld ? +Ld[1] : 0,
  gecko: f1,
  gecko_version: f1 ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Re.userAgent) || [0, 0])[1] : 0,
  chrome: !!qh,
  chrome_version: qh ? +qh[1] : 0,
  ios: d1,
  android: /* @__PURE__ */ /Android\b/.test(Re.userAgent),
  webkit: h1,
  webkit_version: h1 ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(Re.userAgent) || [0, 0])[1] : 0,
  safari: Hd,
  safari_version: Hd ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(Re.userAgent) || [0, 0])[1] : 0,
  tabSize: Nd.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function bm(l, t) {
  for (let e in l)
    e == "class" && t.class ? t.class += " " + l.class : e == "style" && t.style ? t.style += ";" + l.style : t[e] = l[e];
  return t;
}
const Mu = /* @__PURE__ */ Object.create(null);
function Sm(l, t, e) {
  if (l == t)
    return !0;
  l || (l = Mu), t || (t = Mu);
  let i = Object.keys(l), s = Object.keys(t);
  if (i.length - 0 != s.length - 0)
    return !1;
  for (let a of i)
    if (a != e && (s.indexOf(a) == -1 || l[a] !== t[a]))
      return !1;
  return !0;
}
function PA(l, t) {
  for (let e = l.attributes.length - 1; e >= 0; e--) {
    let i = l.attributes[e].name;
    t[i] == null && l.removeAttribute(i);
  }
  for (let e in t) {
    let i = t[e];
    e == "style" ? l.style.cssText = i : l.getAttribute(e) != i && l.setAttribute(e, i);
  }
}
function m1(l, t, e) {
  let i = !1;
  if (t)
    for (let s in t)
      e && s in e || (i = !0, s == "style" ? l.style.cssText = "" : l.removeAttribute(s));
  if (e)
    for (let s in e)
      t && t[s] == e[s] || (i = !0, s == "style" ? l.style.cssText = e[s] : l.setAttribute(s, e[s]));
  return i;
}
function JA(l) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < l.attributes.length; e++) {
    let i = l.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class Ii {
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
class ft extends Qn {
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
    return new xa(t);
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
      let { start: a, end: u } = gb(t, e);
      i = (a ? e ? -3e8 : -1 : 5e8) - 1, s = (u ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new El(t, i, s, e, t.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(t) {
    return new wa(t);
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
ft.none = Mt.empty;
class xa extends ft {
  constructor(t) {
    let { start: e, end: i } = gb(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.attrs = t.class && t.attributes ? bm(t.attributes, { class: t.class }) : t.class ? { class: t.class } : t.attributes || Mu;
  }
  eq(t) {
    return this == t || t instanceof xa && this.tagName == t.tagName && Sm(this.attrs, t.attrs);
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
xa.prototype.point = !1;
class wa extends ft {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof wa && this.spec.class == t.spec.class && Sm(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
wa.prototype.mapMode = Be.TrackBefore;
wa.prototype.point = !0;
class El extends ft {
  constructor(t, e, i, s, a, u) {
    super(e, i, a, t), this.block = s, this.isReplace = u, this.mapMode = s ? e <= 0 ? Be.TrackBefore : Be.TrackAfter : Be.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? xe.WidgetRange : this.startSide <= 0 ? xe.WidgetBefore : xe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof El && $A(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
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
function gb(l, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: i } = l;
  return e == null && (e = l.inclusive), i == null && (i = l.inclusive), { start: e ?? t, end: i ?? t };
}
function $A(l, t) {
  return l == t || !!(l && t && l.compare(t));
}
function Ms(l, t, e, i = 0) {
  let s = e.length - 1;
  s >= 0 && e[s] + i >= l ? e[s] = Math.max(e[s], t) : e.push(l, t);
}
class oa extends Qn {
  constructor(t, e) {
    super(), this.tagName = t, this.attributes = e;
  }
  eq(t) {
    return t == this || t instanceof oa && this.tagName == t.tagName && Sm(this.attributes, t.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(t) {
    return new oa(t.tagName, t.attributes || Mu);
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(t, e = !1) {
    return Mt.of(t, e);
  }
}
oa.prototype.startSide = oa.prototype.endSide = -1;
function ua(l) {
  let t;
  return l.nodeType == 11 ? t = l.getSelection ? l : l.ownerDocument : t = l, t.getSelection();
}
function _d(l, t) {
  return t ? l == t || l.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function Jr(l, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return _d(l, t.anchorNode);
  } catch {
    return !1;
  }
}
function $r(l) {
  return l.nodeType == 3 ? fa(l, 0, l.nodeValue.length).getClientRects() : l.nodeType == 1 ? l.getClientRects() : [];
}
function ta(l, t, e, i) {
  return e ? p1(l, t, e, i, -1) || p1(l, t, e, i, 1) : !1;
}
function Fn(l) {
  for (var t = 0; ; t++)
    if (l = l.previousSibling, !l)
      return t;
}
function Tu(l) {
  return l.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(l.nodeName);
}
function p1(l, t, e, i, s) {
  for (; ; ) {
    if (l == e && t == i)
      return !0;
    if (t == (s < 0 ? 0 : mn(l))) {
      if (l.nodeName == "DIV")
        return !1;
      let a = l.parentNode;
      if (!a || a.nodeType != 1)
        return !1;
      t = Fn(l) + (s < 0 ? 0 : 1), l = a;
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
function ca(l, t) {
  let e = t ? l.left : l.right;
  return { left: e, right: e, top: l.top, bottom: l.bottom };
}
function tC(l) {
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
function yb(l, t) {
  let e = t.width / l.offsetWidth, i = t.height / l.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - l.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - l.offsetHeight) < 1) && (i = 1), { scaleX: e, scaleY: i };
}
function eC(l, t, e, i, s, a, u, c) {
  let h = l.ownerDocument, m = h.defaultView || window;
  for (let p = l, y = !1; p && !y; )
    if (p.nodeType == 1) {
      let v, S = p == h.body, w = 1, A = 1;
      if (S)
        v = tC(m);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(p).position) && (y = !0), p.scrollHeight <= p.clientHeight && p.scrollWidth <= p.clientWidth) {
          p = p.assignedSlot || p.parentNode;
          continue;
        }
        let _ = p.getBoundingClientRect();
        ({ scaleX: w, scaleY: A } = yb(p, _)), v = {
          left: _.left,
          right: _.left + p.clientWidth * w,
          top: _.top,
          bottom: _.top + p.clientHeight * A
        };
      }
      let k = 0, E = 0;
      if (s == "nearest")
        t.top < v.top + u ? (E = t.top - (v.top + u), e > 0 && t.bottom > v.bottom + E && (E = t.bottom - v.bottom + u)) : t.bottom > v.bottom - u && (E = t.bottom - v.bottom + u, e < 0 && t.top - E < v.top && (E = t.top - (v.top + u)));
      else {
        let _ = t.bottom - t.top, V = v.bottom - v.top;
        E = (s == "center" && _ <= V ? t.top + _ / 2 - V / 2 : s == "start" || s == "center" && e < 0 ? t.top - u : t.bottom - V + u) - v.top;
      }
      if (i == "nearest" ? t.left < v.left + a ? (k = t.left - (v.left + a), e > 0 && t.right > v.right + k && (k = t.right - v.right + a)) : t.right > v.right - a && (k = t.right - v.right + a, e < 0 && t.left < v.left + k && (k = t.left - (v.left + a))) : k = (i == "center" ? t.left + (t.right - t.left) / 2 - (v.right - v.left) / 2 : i == "start" == c ? t.left - a : t.right - (v.right - v.left) + a) - v.left, k || E)
        if (S)
          m.scrollBy(k, E);
        else {
          let _ = 0, V = 0;
          if (E) {
            let Y = p.scrollTop;
            p.scrollTop += E / A, V = (p.scrollTop - Y) * A;
          }
          if (k) {
            let Y = p.scrollLeft;
            p.scrollLeft += k / w, _ = (p.scrollLeft - Y) * w;
          }
          t = {
            left: t.left - _,
            top: t.top - V,
            right: t.right - _,
            bottom: t.bottom - V
          }, _ && Math.abs(_ - k) < 1 && (i = "nearest"), V && Math.abs(V - E) < 1 && (s = "nearest");
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
function vb(l, t = !0) {
  let e = l.ownerDocument, i = null, s = null;
  for (let a = l.parentNode; a && !(a == e.body || (!t || i) && s); )
    if (a.nodeType == 1)
      !s && a.scrollHeight > a.clientHeight && (s = a), t && !i && a.scrollWidth > a.clientWidth && (i = a), a = a.assignedSlot || a.parentNode;
    else if (a.nodeType == 11)
      a = a.host;
    else
      break;
  return { x: i, y: s };
}
class iC {
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
it.safari && it.safari_version >= 26 && (xl = !1);
function bb(l) {
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
      let i = t[e++], s = t[e++], a = t[e++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != a && (i.scrollLeft = a);
    }
  }
}
let g1;
function fa(l, t, e = t) {
  let i = g1 || (g1 = document.createRange());
  return i.setEnd(l, e), i.setStart(l, t), i;
}
function Ts(l, t, e, i) {
  let s = { key: t, code: t, keyCode: e, which: e, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let a = new KeyboardEvent("keydown", s);
  a.synthetic = !0, l.dispatchEvent(a);
  let u = new KeyboardEvent("keyup", s);
  return u.synthetic = !0, l.dispatchEvent(u), a.defaultPrevented || u.defaultPrevented;
}
function nC(l) {
  for (; l; ) {
    if (l && (l.nodeType == 9 || l.nodeType == 11 && l.host))
      return l;
    l = l.assignedSlot || l.parentNode;
  }
  return null;
}
function lC(l, t) {
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
function Sb(l) {
  return l instanceof Window ? l.pageYOffset > Math.max(0, l.document.documentElement.scrollHeight - l.innerHeight - 4) : l.scrollTop > Math.max(1, l.scrollHeight - l.clientHeight - 4);
}
function xb(l, t) {
  for (let e = l, i = t; ; ) {
    if (e.nodeType == 3 && i > 0)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i - 1], i = mn(e);
    } else if (e.parentNode && !Tu(e))
      i = Fn(e), e = e.parentNode;
    else
      return null;
  }
}
function wb(l, t) {
  for (let e = l, i = t; ; ) {
    if (e.nodeType == 3 && i < e.nodeValue.length)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i], i = 0;
    } else if (e.parentNode && !Tu(e))
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
var Yt = /* @__PURE__ */ (function(l) {
  return l[l.LTR = 0] = "LTR", l[l.RTL = 1] = "RTL", l;
})(Yt || (Yt = {}));
const Rl = Yt.LTR, xm = Yt.RTL;
function Ab(l) {
  let t = [];
  for (let e = 0; e < l.length; e++)
    t.push(1 << +l[e]);
  return t;
}
const sC = /* @__PURE__ */ Ab("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), rC = /* @__PURE__ */ Ab("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ud = /* @__PURE__ */ Object.create(null), Li = [];
for (let l of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ l.charCodeAt(0), e = /* @__PURE__ */ l.charCodeAt(1);
  Ud[t] = e, Ud[e] = -t;
}
function Cb(l) {
  return l <= 247 ? sC[l] : 1424 <= l && l <= 1524 ? 2 : 1536 <= l && l <= 1785 ? rC[l - 1536] : 1774 <= l && l <= 2220 ? 4 : 8192 <= l && l <= 8204 ? 256 : 64336 <= l && l <= 65023 ? 4 : 1;
}
const aC = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ji {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? xm : Rl;
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
    let a = -1;
    for (let u = 0; u < t.length; u++) {
      let c = t[u];
      if (c.from <= e && c.to >= e) {
        if (c.level == i)
          return u;
        (a < 0 || (s != 0 ? s < 0 ? c.from < e : c.to > e : t[a].level > c.level)) && (a = u);
      }
    }
    if (a < 0)
      throw new RangeError("Index out of range");
    return a;
  }
}
function kb(l, t) {
  if (l.length != t.length)
    return !1;
  for (let e = 0; e < l.length; e++) {
    let i = l[e], s = t[e];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !kb(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const jt = [];
function oC(l, t, e, i, s) {
  for (let a = 0; a <= i.length; a++) {
    let u = a ? i[a - 1].to : t, c = a < i.length ? i[a].from : e, h = a ? 256 : s;
    for (let m = u, p = h, y = h; m < c; m++) {
      let v = Cb(l.charCodeAt(m));
      v == 512 ? v = p : v == 8 && y == 4 && (v = 16), jt[m] = v == 4 ? 2 : v, v & 7 && (y = v), p = v;
    }
    for (let m = u, p = h, y = h; m < c; m++) {
      let v = jt[m];
      if (v == 128)
        m < c - 1 && p == jt[m + 1] && p & 24 ? v = jt[m] = p : jt[m] = 256;
      else if (v == 64) {
        let S = m + 1;
        for (; S < c && jt[S] == 64; )
          S++;
        let w = m && p == 8 || S < e && jt[S] == 8 ? y == 1 ? 1 : 8 : 256;
        for (let A = m; A < S; A++)
          jt[A] = w;
        m = S - 1;
      } else v == 8 && y == 1 && (jt[m] = 1);
      p = v, v & 7 && (y = v);
    }
  }
}
function uC(l, t, e, i, s) {
  let a = s == 1 ? 2 : 1;
  for (let u = 0, c = 0, h = 0; u <= i.length; u++) {
    let m = u ? i[u - 1].to : t, p = u < i.length ? i[u].from : e;
    for (let y = m, v, S, w; y < p; y++)
      if (S = Ud[v = l.charCodeAt(y)])
        if (S < 0) {
          for (let A = c - 3; A >= 0; A -= 3)
            if (Li[A + 1] == -S) {
              let k = Li[A + 2], E = k & 2 ? s : k & 4 ? k & 1 ? a : s : 0;
              E && (jt[y] = jt[Li[A]] = E), c = A;
              break;
            }
        } else {
          if (Li.length == 189)
            break;
          Li[c++] = y, Li[c++] = v, Li[c++] = h;
        }
      else if ((w = jt[y]) == 2 || w == 1) {
        let A = w == s;
        h = A ? 0 : 1;
        for (let k = c - 3; k >= 0; k -= 3) {
          let E = Li[k + 2];
          if (E & 2)
            break;
          if (A)
            Li[k + 2] |= 2;
          else {
            if (E & 4)
              break;
            Li[k + 2] |= 4;
          }
        }
      }
  }
}
function cC(l, t, e, i) {
  for (let s = 0, a = i; s <= e.length; s++) {
    let u = s ? e[s - 1].to : l, c = s < e.length ? e[s].from : t;
    for (let h = u; h < c; ) {
      let m = jt[h];
      if (m == 256) {
        let p = h + 1;
        for (; ; )
          if (p == c) {
            if (s == e.length)
              break;
            p = e[s++].to, c = s < e.length ? e[s].from : t;
          } else if (jt[p] == 256)
            p++;
          else
            break;
        let y = a == 1, v = (p < t ? jt[p] : i) == 1, S = y == v ? y ? 1 : 2 : i;
        for (let w = p, A = s, k = A ? e[A - 1].to : l; w > h; )
          w == k && (w = e[--A].from, k = A ? e[A - 1].to : l), jt[--w] = S;
        h = p;
      } else
        a = m, h++;
    }
  }
}
function Vd(l, t, e, i, s, a, u) {
  let c = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let h = t, m = 0; h < e; ) {
      let p = !0, y = !1;
      if (m == a.length || h < a[m].from) {
        let A = jt[h];
        A != c && (p = !1, y = A == 16);
      }
      let v = !p && c == 1 ? [] : null, S = p ? i : i + 1, w = h;
      t: for (; ; )
        if (m < a.length && w == a[m].from) {
          if (y)
            break t;
          let A = a[m];
          if (!p)
            for (let k = A.to, E = m + 1; ; ) {
              if (k == e)
                break t;
              if (E < a.length && a[E].from == k)
                k = a[E++].to;
              else {
                if (jt[k] == c)
                  break t;
                break;
              }
            }
          if (m++, v)
            v.push(A);
          else {
            A.from > h && u.push(new ji(h, A.from, S));
            let k = A.direction == Rl != !(S % 2);
            qd(l, k ? i + 1 : i, s, A.inner, A.from, A.to, u), h = A.to;
          }
          w = A.to;
        } else {
          if (w == e || (p ? jt[w] != c : jt[w] == c))
            break;
          w++;
        }
      v ? Vd(l, h, w, i + 1, s, v, u) : h < w && u.push(new ji(h, w, S)), h = w;
    }
  else
    for (let h = e, m = a.length; h > t; ) {
      let p = !0, y = !1;
      if (!m || h > a[m - 1].to) {
        let A = jt[h - 1];
        A != c && (p = !1, y = A == 16);
      }
      let v = !p && c == 1 ? [] : null, S = p ? i : i + 1, w = h;
      t: for (; ; )
        if (m && w == a[m - 1].to) {
          if (y)
            break t;
          let A = a[--m];
          if (!p)
            for (let k = A.from, E = m; ; ) {
              if (k == t)
                break t;
              if (E && a[E - 1].to == k)
                k = a[--E].from;
              else {
                if (jt[k - 1] == c)
                  break t;
                break;
              }
            }
          if (v)
            v.push(A);
          else {
            A.to < h && u.push(new ji(A.to, h, S));
            let k = A.direction == Rl != !(S % 2);
            qd(l, k ? i + 1 : i, s, A.inner, A.from, A.to, u), h = A.from;
          }
          w = A.from;
        } else {
          if (w == t || (p ? jt[w - 1] != c : jt[w - 1] == c))
            break;
          w--;
        }
      v ? Vd(l, w, h, i + 1, s, v, u) : w < h && u.push(new ji(w, h, S)), h = w;
    }
}
function qd(l, t, e, i, s, a, u) {
  let c = t % 2 ? 2 : 1;
  oC(l, s, a, i, c), uC(l, s, a, i, c), cC(s, a, i, c), Vd(l, s, a, t, e, i, u);
}
function fC(l, t, e) {
  if (!l)
    return [new ji(0, 0, t == xm ? 1 : 0)];
  if (t == Rl && !e.length && !aC.test(l))
    return Mb(l.length);
  if (e.length)
    for (; l.length > jt.length; )
      jt[jt.length] = 256;
  let i = [], s = t == Rl ? 0 : 1;
  return qd(l, s, s, e, 0, l.length, i), i;
}
function Mb(l) {
  return [new ji(0, l, 0)];
}
let Tb = "";
function hC(l, t, e, i, s) {
  var a;
  let u = i.head - l.from, c = ji.find(t, u, (a = i.bidiLevel) !== null && a !== void 0 ? a : -1, i.assoc), h = t[c], m = h.side(s, e);
  if (u == m) {
    let v = c += s ? 1 : -1;
    if (v < 0 || v >= t.length)
      return null;
    h = t[c = v], u = h.side(!s, e), m = h.side(s, e);
  }
  let p = me(l.text, u, h.forward(s, e));
  (p < h.from || p > h.to) && (p = m), Tb = l.text.slice(Math.min(u, p), Math.max(u, p));
  let y = c == (s ? t.length - 1 : 0) ? null : t[c + (s ? 1 : -1)];
  return y && p == m && y.level + (s ? 0 : 1) < h.level ? X.cursor(y.side(!s, e) + l.from, y.forward(s, e) ? 1 : -1, y.level) : X.cursor(p + l.from, h.forward(s, e) ? -1 : 1, h.level);
}
function dC(l, t, e) {
  for (let i = t; i < e; i++) {
    let s = Cb(l.charCodeAt(i));
    if (s == 1)
      return Rl;
    if (s == 2 || s == 4)
      return xm;
  }
  return Rl;
}
const Ob = /* @__PURE__ */ nt.define(), Db = /* @__PURE__ */ nt.define(), Eb = /* @__PURE__ */ nt.define(), Rb = /* @__PURE__ */ nt.define(), jd = /* @__PURE__ */ nt.define(), Bb = /* @__PURE__ */ nt.define(), Nb = /* @__PURE__ */ nt.define(), wm = /* @__PURE__ */ nt.define(), Am = /* @__PURE__ */ nt.define(), Lb = /* @__PURE__ */ nt.define({
  combine: (l) => l.some((t) => t)
}), zb = /* @__PURE__ */ nt.define({
  combine: (l) => l.some((t) => t)
}), Hb = /* @__PURE__ */ nt.define();
class Os {
  constructor(t, e, i, s, a, u = !1) {
    this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = a, this.isSnapshot = u;
  }
  map(t) {
    return t.empty ? this : new Os(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Os(X.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Zo = /* @__PURE__ */ bt.define({ map: (l, t) => l.map(t) }), _b = /* @__PURE__ */ bt.define();
function Ye(l, t, e) {
  let i = l.facet(Rb);
  i.length ? i[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
}
const hn = /* @__PURE__ */ nt.define({ combine: (l) => l.length ? l[0] : !0 });
let mC = 0;
const ws = /* @__PURE__ */ nt.define({
  combine(l) {
    return l.filter((t, e) => {
      for (let i = 0; i < e; i++)
        if (l[i].plugin == t.plugin)
          return !1;
      return !0;
    });
  }
});
class It {
  constructor(t, e, i, s, a) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = a(this), this.extension = this.baseExtensions.concat(ws.of({ plugin: this, arg: void 0 }));
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
    const { eventHandlers: i, eventObservers: s, provide: a, decorations: u } = e || {};
    return new It(mC++, t, i, s, (c) => {
      let h = [];
      return u && h.push(tc.of((m) => {
        let p = m.plugin(c);
        return p ? u(p) : ft.none;
      })), a && h.push(a(c)), h;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(t, e) {
    return It.define((i, s) => new t(i, s), e);
  }
}
class jh {
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
const Ub = /* @__PURE__ */ nt.define(), Cm = /* @__PURE__ */ nt.define(), tc = /* @__PURE__ */ nt.define(), Vb = /* @__PURE__ */ nt.define(), km = /* @__PURE__ */ nt.define(), Aa = /* @__PURE__ */ nt.define(), qb = /* @__PURE__ */ nt.define();
function y1(l, t) {
  let e = l.state.facet(qb);
  if (!e.length)
    return e;
  let i = e.map((a) => a instanceof Function ? a(l) : a), s = [];
  return Mt.spans(i, t.from, t.to, {
    point() {
    },
    span(a, u, c, h) {
      let m = a - t.from, p = u - t.from, y = s;
      for (let v = c.length - 1; v >= 0; v--, h--) {
        let S = c[v].spec.bidiIsolate, w;
        if (S == null && (S = dC(t.text, m, p)), h > 0 && y.length && (w = y[y.length - 1]).to == m && w.direction == S)
          w.to = p, y = w.inner;
        else {
          let A = { from: m, to: p, direction: S, inner: [] };
          y.push(A), y = A.inner;
        }
      }
    }
  }), s;
}
const jb = /* @__PURE__ */ nt.define();
function Mm(l) {
  let t = 0, e = 0, i = 0, s = 0;
  for (let a of l.state.facet(jb)) {
    let u = a(l);
    u && (u.left != null && (t = Math.max(t, u.left)), u.right != null && (e = Math.max(e, u.right)), u.top != null && (i = Math.max(i, u.top)), u.bottom != null && (s = Math.max(s, u.bottom)));
  }
  return { left: t, right: e, top: i, bottom: s };
}
const Kr = /* @__PURE__ */ nt.define();
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
    for (let s = 0, a = 0, u = 0; ; ) {
      let c = s < t.length ? t[s].fromB : 1e9, h = a < e.length ? e[a] : 1e9, m = Math.min(c, h);
      if (m == 1e9)
        break;
      let p = m + u, y = m, v = p;
      for (; ; )
        if (a < e.length && e[a] <= y) {
          let S = e[a + 1];
          a += 2, y = Math.max(y, S);
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
class Ou {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = ae.empty(this.startState.doc.length);
    for (let a of i)
      this.changes = this.changes.compose(a.changes);
    let s = [];
    this.changes.iterChangedRanges((a, u, c, h) => s.push(new mi(a, u, c, h))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Ou(t, e, i);
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
const pC = [];
class Jt {
  constructor(t, e, i = 0) {
    this.dom = t, this.length = e, this.flags = i, this.parent = null, t.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return pC;
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
      e && PA(this.dom, e);
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
      if (t instanceof ic)
        return t;
    return null;
  }
  static get(t) {
    return t.cmTile;
  }
}
class ec extends Jt {
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
    let e = this.dom, i = null, s, a = t?.node == e ? t : null, u = 0;
    for (let c of this.children) {
      if (c.sync(t), u += c.length + c.breakAfter, s = i ? i.nextSibling : e.firstChild, a && s != c.dom && (a.written = !0), c.dom.parentNode == e)
        for (; s && s != c.dom; )
          s = v1(s);
      else
        e.insertBefore(c.dom, s);
      i = c.dom;
    }
    for (s = i ? i.nextSibling : e.firstChild, a && s && (a.written = !0); s; )
      s = v1(s);
    this.length = u;
  }
}
function v1(l) {
  let t = l.nextSibling;
  return l.parentNode.removeChild(l), t;
}
class ic extends ec {
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
      let e = Jt.get(t);
      if (e && this.owns(e))
        return e;
      t = t.parentNode;
    }
  }
  blockTiles(t) {
    for (let e = [], i = this, s = 0, a = 0; ; )
      if (s == i.children.length) {
        if (!e.length)
          return;
        i = i.parent, i.breakAfter && a++, s = e.pop();
      } else {
        let u = i.children[s++];
        if (u instanceof dn)
          e.push(s), i = u, s = 0;
        else {
          let c = a + u.length, h = t(u, a);
          if (h !== void 0)
            return h;
          a = c + u.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(t, e) {
    let i, s = -1, a, u = -1;
    if (this.blockTiles((c, h) => {
      let m = h + c.length;
      if (t >= h && t <= m) {
        if (c.isWidget() && e >= -1 && e <= 1) {
          if (c.flags & 32)
            return !0;
          c.flags & 16 && (i = void 0);
        }
        (h < t || t == m && (e < -1 ? c.length : c.covers(1))) && (!i || !c.isWidget() && i.isWidget()) && (i = c, s = t - h), (m > t || t == h && (e > 1 ? c.length : c.covers(-1))) && (!a || !c.isWidget() && a.isWidget()) && (a = c, u = t - h);
      }
    }), !i && !a)
      throw new Error("No tile at position " + t);
    return i && e < 0 || !a ? { tile: i, offset: s } : { tile: a, offset: u };
  }
}
class dn extends ec {
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
class Bs extends ec {
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
    let s = null, a = -1, u = null, c = -1;
    function h(p, y) {
      for (let v = 0, S = 0; v < p.children.length && S <= y; v++) {
        let w = p.children[v], A = S + w.length;
        A >= y && (w.isComposite() ? h(w, y - S) : (!u || u.isHidden && (e > 0 || i && yC(u, w))) && (A > y || w.flags & 32) ? (u = w, c = y - S) : (S < y || w.flags & 16 && !w.isHidden) && (s = w, a = y - S)), S = A;
      }
    }
    h(this, t);
    let m = (e < 0 ? s : u) || s || u;
    return m ? { tile: m, offset: m == s ? a : c } : null;
  }
  coordsIn(t, e) {
    let i = this.resolveInline(t, e, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), e) : gC(this);
  }
  domIn(t, e) {
    let i = this.resolveInline(t, e);
    if (i) {
      let { tile: s, offset: a } = i;
      if (this.dom.contains(s.dom))
        return s.isText() ? new Ci(s.dom, Math.min(s.dom.nodeValue.length, a)) : s.domPosFor(a, s.flags & 16 ? 1 : s.flags & 32 ? -1 : e);
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
function gC(l) {
  let t = l.dom.lastChild;
  if (!t)
    return l.dom.getBoundingClientRect();
  let e = $r(t);
  return e[e.length - 1] || null;
}
function yC(l, t) {
  let e = l.coordsIn(0, 1), i = t.coordsIn(0, 1);
  return e && i && i.top < e.bottom;
}
class je extends ec {
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
class kl extends Jt {
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
    let s = t, a = t, u = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? it.chrome || it.gecko || (t ? (s--, u = 1) : a < i && (a++, u = -1)) : e < 0 ? s-- : a < i && a++;
    let c = fa(this.dom, s, a).getClientRects();
    if (!c.length)
      return null;
    let h = c[(u ? u < 0 : e >= 0) ? 0 : c.length - 1];
    return it.safari && !u && h.width == 0 && (h = Array.prototype.find.call(c, (m) => m.width) || h), u ? ca(h, u < 0) : h || null;
  }
  static of(t, e) {
    let i = new kl(e || document.createTextNode(t), t);
    return e || (i.flags |= 2), i;
  }
}
class Bl extends Jt {
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
      return ca(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0);
    {
      let a = this.dom.getClientRects(), u = null;
      if (!a.length)
        return null;
      let c = this.flags & 16 ? !0 : this.flags & 32 ? !1 : t > 0;
      for (let h = c ? a.length - 1 : 0; u = a[h], !(t > 0 ? h == 0 : h == a.length - 1 || u.top < u.bottom); h += c ? -1 : 1)
        ;
      return ca(u, !c);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return Rt.empty;
    let { root: t } = this;
    if (!t)
      return Rt.empty;
    let e = this.posAtStart;
    return t.view.state.doc.slice(e, e + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(t, e, i, s, a) {
    return a || (a = t.toDOM(e), t.editable || (a.contentEditable = "false")), new Bl(a, i, t, s);
  }
}
class Du extends Jt {
  constructor(t) {
    let e = document.createElement("img");
    e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), super(e, 0, t);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return Rt.empty;
  }
  coordsIn(t) {
    return this.dom.getBoundingClientRect();
  }
}
class vC {
  constructor(t) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = t;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(t, e, i) {
    let { tile: s, index: a, beforeBreak: u, parents: c } = this;
    for (; t || e > 0; )
      if (s.isComposite())
        if (u) {
          if (!t)
            break;
          i && i.break(), t--, u = !1;
        } else if (a == s.children.length) {
          if (!t && !c.length)
            break;
          i && i.leave(s), u = !!s.breakAfter, { tile: s, index: a } = c.pop(), a++;
        } else {
          let h = s.children[a], m = h.breakAfter;
          (e > 0 ? h.length <= t : h.length < t) && (!i || i.skip(h, 0, h.length) !== !1 || !h.isComposite) ? (u = !!m, a++, t -= h.length) : (c.push({ tile: s, index: a }), s = h, a = 0, i && h.isComposite() && i.enter(h));
        }
      else if (a == s.length)
        u = !!s.breakAfter, { tile: s, index: a } = c.pop(), a++;
      else if (t) {
        let h = Math.min(t, s.length - a);
        i && i.skip(s, a, a + h), t -= h, a += h;
      } else
        break;
    return this.tile = s, this.index = a, this.beforeBreak = u, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class bC {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.wrapper = i, this.rank = s;
  }
}
class SC {
  constructor(t, e, i) {
    this.cache = t, this.root = e, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(t, e, i, s) {
    var a;
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
      u.append(s || kl.of(t, (a = this.cache.find(kl)) === null || a === void 0 ? void 0 : a.dom));
    this.pos += t.length, this.afterWidget = null;
  }
  addComposition(t, e) {
    let i = this.curLine;
    i.dom != e.line.dom && (i.setDOM(this.cache.reused.has(e.line) ? Yh(e.line.dom) : e.line.dom), this.cache.reused.set(
      e.line,
      2
      /* Reused.DOM */
    ));
    let s = i;
    for (let c = e.marks.length - 1; c >= 0; c--) {
      let h = e.marks[c], m = s.lastChild;
      if (m instanceof je && m.mark.eq(h.mark))
        m.dom != h.dom && m.setDOM(Yh(h.dom)), s = m;
      else {
        if (this.cache.reused.get(h)) {
          let y = Jt.get(h.dom);
          y && y.setDOM(Yh(h.dom));
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
    let a = Jt.get(t.text);
    a && this.cache.reused.set(
      a,
      2
      /* Reused.DOM */
    );
    let u = new kl(t.text, t.text.nodeValue);
    u.flags |= 8, s.append(u);
  }
  addInlineWidget(t, e, i) {
    let s = this.afterWidget && t.flags & 48 && (this.afterWidget.flags & 48) == (t.flags & 48);
    s || this.flushBuffer();
    let a = this.ensureMarks(e, i);
    !s && !(t.flags & 16) && a.append(this.getBuffer(1)), a.append(t), this.pos += t.length, this.afterWidget = t;
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
    t || (t = Yb);
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
    for (let a = t.length - 1; a >= 0; a--) {
      let u = t[a], c;
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
      (!t || !b1(this.curLine, !1) || t.dom.nodeName != "BR" && t.isWidget() && !(it.ios && b1(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Gh,
        0,
        32
        /* TileFlag.After */
      ) || new Bl(
        Gh.toDOM(),
        0,
        Gh,
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
        let e = new bC(t.from, t.to, t.value, t.rank), i = this.wrappers.length;
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
        let a = dn.of(i.wrapper, (t = this.cache.find(dn, (u) => u.wrapper.eq(i.wrapper))) === null || t === void 0 ? void 0 : t.dom);
        e.append(a), e = a;
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
      Du,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = e), i || new Du(e);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class xC {
  constructor(t) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = t.iter();
  }
  skip(t) {
    this.textOff + t <= this.text.length ? this.textOff += t : (this.skipCount += t - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(t) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: a, done: u } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, u)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let c = this.textOff = Math.min(t, s.length);
      return a ? null : s.slice(0, c);
    }
    let e = Math.min(this.text.length, this.textOff + t), i = this.text.slice(this.textOff, e);
    return this.textOff = e, i;
  }
}
const Eu = [Bl, Bs, kl, je, Du, dn, ic];
for (let l = 0; l < Eu.length; l++)
  Eu[l].bucket = l;
class wC {
  constructor(t) {
    this.view = t, this.buckets = Eu.map(() => []), this.index = Eu.map(() => 0), this.reused = /* @__PURE__ */ new Map();
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
    let s = t.bucket, a = this.buckets[s], u = this.index[s];
    for (let c = a.length - 1; c >= 0; c--) {
      let h = (c + u) % a.length, m = a[h];
      if ((!e || e(m)) && !this.reused.has(m))
        return a.splice(h, 1), h < u && this.index[s]--, this.reused.set(m, i), m;
    }
    return null;
  }
  findWidget(t, e, i) {
    let s = this.buckets[0];
    if (s.length)
      for (let a = 0, u = 0; ; a++) {
        if (a == s.length) {
          if (u)
            return null;
          u = 1, a = 0;
        }
        let c = s[a];
        if (!this.reused.has(c) && (u == 0 ? c.widget.compare(t) : c.widget.constructor == t.constructor && t.updateDOM(c.dom, this.view, c.widget)))
          return s.splice(a, 1), a < this.index[0] && this.index[0]--, c.widget == t && c.length == e && (c.flags & 497) == i ? (this.reused.set(
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
class AC {
  constructor(t, e, i, s, a) {
    this.view = t, this.decorations = s, this.disallowBlockEffectsFor = a, this.openWidget = !1, this.openMarks = 0, this.cache = new wC(t), this.text = new xC(t.state.doc), this.builder = new SC(this.cache, new ic(t, t.contentDOM), Mt.iter(i)), this.cache.reused.set(
      e,
      2
      /* Reused.DOM */
    ), this.old = new vC(e), this.reuseWalker = {
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
    for (let s = 0, a = 0, u = 0; ; ) {
      let c = u < t.length ? t[u++] : null, h = c ? c.fromA : this.old.root.length;
      if (h > s) {
        let m = h - s;
        this.preserve(m, !u, !c), s = h, a += m;
      }
      if (!c)
        break;
      e && c.fromA <= e.range.fromA && c.toA >= e.range.toA ? (this.forward(c.fromA, e.range.fromA, e.range.fromA < e.range.toA ? 1 : -1), this.emit(a, e.range.fromB), this.cache.clear(), this.builder.addComposition(e, i), this.text.skip(e.range.toB - e.range.fromB), this.forward(e.range.fromA, c.toA), this.emit(e.range.toB, c.toB)) : (this.forward(c.fromA, c.toA), this.emit(a, c.toB)), a = c.toB, s = c.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(t, e, i) {
    let s = MC(this.old), a = this.openMarks;
    this.old.advance(t, i ? 1 : -1, {
      skip: (u, c, h) => {
        if (u.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(h - c);
          else {
            let m = h > 0 || c < u.length ? Bl.of(u.widget, this.view, h - c, u.flags & 496, this.cache.maybeReuse(u)) : this.cache.reuse(u);
            m.flags & 256 ? (m.flags &= -2, this.builder.addBlockWidget(m)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(m, s, a), a = s.length);
          }
        else if (u.isText())
          this.builder.ensureLine(null), !c && h == u.length && !this.cache.reused.has(u) ? this.builder.addText(u.text, s, a, this.cache.reuse(u)) : (this.cache.add(u), this.builder.addText(u.text.slice(c, h), s, a)), a = s.length;
        else if (u.isLine())
          u.flags &= -2, this.cache.reused.set(
            u,
            1
            /* Reused.Full */
          ), this.builder.addLine(u);
        else if (u instanceof Du)
          this.cache.add(u);
        else if (u instanceof je)
          this.builder.ensureLine(null), this.builder.addMark(u, s, a), this.cache.reused.set(
            u,
            1
            /* Reused.Full */
          ), a = s.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (u) => {
        u.isLine() ? this.builder.addLineStart(u.attrs, this.cache.maybeReuse(u)) : (this.cache.add(u), u instanceof je && s.unshift(u.mark)), this.openWidget = !1;
      },
      leave: (u) => {
        u.isLine() ? s.length && (s.length = a = 0) : u instanceof je && (s.shift(), a = Math.min(a, s.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(t);
  }
  emit(t, e) {
    let i = null, s = this.builder, a = 0, u = Mt.spans(this.decorations, t, e, {
      point: (c, h, m, p, y, v) => {
        if (m instanceof El) {
          if (this.disallowBlockEffectsFor[v]) {
            if (m.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (h > this.view.state.doc.lineAt(c).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (a = p.length, y > p.length)
            s.continueWidget(h - c);
          else {
            let S = m.widget || (m.block ? Ns.block : Ns.inline), w = CC(m), A = this.cache.findWidget(S, h - c, w) || Bl.of(S, this.view, h - c, w);
            m.block ? (m.startSide > 0 && s.addLineStartIfNotCovered(i), s.addBlockWidget(A)) : (s.ensureLine(i), s.addInlineWidget(A, p, y));
          }
          i = null;
        } else
          i = kC(i, m);
        h > c && this.text.skip(h - c);
      },
      span: (c, h, m, p) => {
        for (let y = c; y < h; ) {
          let v = this.text.next(Math.min(512, h - y));
          v == null ? (s.addLineStartIfNotCovered(i), s.addBreak(), y++) : (s.ensureLine(i), s.addText(v, m, y == c ? p : m.length), y += v.length), i = null;
        }
      }
    });
    s.addLineStartIfNotCovered(i), this.openWidget = u > a, this.openMarks = u;
  }
  forward(t, e, i = 1) {
    e - t <= 10 ? this.old.advance(e - t, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(e - t - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(t) {
    let e = [], i = null;
    for (let s = t.parentNode; ; s = s.parentNode) {
      let a = Jt.get(s);
      if (s == this.view.contentDOM)
        break;
      a instanceof je ? e.push(a) : a?.isLine() ? i = a : a instanceof dn || (s.nodeName == "DIV" && !i && s != this.view.contentDOM ? i = new Bs(s, Yb) : i || e.push(je.of(new xa({ tagName: s.nodeName.toLowerCase(), attributes: JA(s) }), s)));
    }
    return { line: i, marks: e };
  }
}
function b1(l, t) {
  let e = (i) => {
    for (let s of i.children)
      if ((t ? s.isText() : s.length) || e(s))
        return !0;
    return !1;
  };
  return e(l);
}
function CC(l) {
  let t = l.isReplace ? (l.startSide < 0 ? 64 : 0) | (l.endSide > 0 ? 128 : 0) : l.startSide > 0 ? 32 : 16;
  return l.block && (t |= 256), t;
}
const Yb = { class: "cm-line" };
function kC(l, t) {
  let e = t.spec.attributes, i = t.spec.class;
  return !e && !i || (l || (l = { class: "cm-line" }), e && bm(e, l), i && (l.class += " " + i)), l;
}
function MC(l) {
  let t = [];
  for (let e = l.parents.length; e > 1; e--) {
    let i = e == l.parents.length ? l.tile : l.parents[e].tile;
    i instanceof je && t.push(i.mark);
  }
  return t;
}
function Yh(l) {
  let t = Jt.get(l);
  return t && t.setDOM(l.cloneNode()), l;
}
class Ns extends Ii {
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
const Gh = /* @__PURE__ */ new class extends Ii {
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
class S1 {
  constructor(t) {
    this.view = t, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = ft.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ic(t, t.contentDOM), this.updateInner([new mi(0, 0, 0, t.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(t) {
    var e;
    let i = t.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: p, toA: y }) => y < this.minWidthFrom || p > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !zC(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
    let a = s > -1 ? OC(this.view, t.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: p, to: y } = this.hasComposition;
      i = new mi(p, y, t.changes.mapPos(p, -1), t.changes.mapPos(y, 1)).addToSet(i.slice());
    }
    this.hasComposition = a ? { from: a.range.fromB, to: a.range.toB } : null, (it.ie || it.chrome) && !a && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let u = this.decorations, c = this.blockWrappers;
    this.updateDeco();
    let h = RC(u, this.decorations, t.changes);
    h.length && (i = mi.extendWithRanges(i, h));
    let m = NC(c, this.blockWrappers, t.changes);
    return m.length && (i = mi.extendWithRanges(i, m)), a && !i.some((p) => p.fromA <= a.range.fromA && p.toA >= a.range.toA) && (i = a.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, a), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(t, e) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (e || t.length) {
        let u = this.tile, c = new AC(this.view, u, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        e && Jt.get(e.text) && c.cache.reused.set(
          Jt.get(e.text),
          2
          /* Reused.DOM */
        ), this.tile = c.run(t, e), Yd(u, c.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let a = it.chrome || it.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(a), a && (a.written || i.selectionRange.focusNode != a.node || !this.tile.dom.contains(a.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let a of this.tile.children)
        a.isWidget() && a.widget instanceof Xh && s.push(a.dom);
    i.updateGaps(s);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(_b) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, s = this.view.root.activeElement, a = s == i, u = !a && !(this.view.state.facet(hn) || i.tabIndex > -1) && Jr(i, this.view.observer.selectionRange) && !(s && i.contains(s));
    if (!(a || e || u))
      return;
    let c = this.forceSelection;
    this.forceSelection = !1;
    let h = this.view.state.selection.main, m, p;
    if (h.empty ? p = m = this.inlineDOMNearPos(h.anchor, h.assoc || 1) : (p = this.inlineDOMNearPos(h.head, h.head == h.from ? 1 : -1), m = this.inlineDOMNearPos(h.anchor, h.anchor == h.from ? 1 : -1)), it.gecko && h.empty && !this.hasComposition && TC(m)) {
      let v = document.createTextNode("");
      this.view.observer.ignore(() => m.node.insertBefore(v, m.node.childNodes[m.offset] || null)), m = p = new Ci(v, 0), c = !0;
    }
    let y = this.view.observer.selectionRange;
    (c || !y.focusNode || (!ta(m.node, m.offset, y.anchorNode, y.anchorOffset) || !ta(p.node, p.offset, y.focusNode, y.focusOffset)) && !this.suppressWidgetCursorChange(y, h)) && (this.view.observer.ignore(() => {
      it.android && it.chrome && i.contains(y.focusNode) && LC(y.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let v = ua(this.view.root);
      if (v) if (h.empty) {
        if (it.gecko) {
          let S = DC(m.node, m.offset);
          if (S && S != 3) {
            let w = (S == 1 ? xb : wb)(m.node, m.offset);
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
    return this.hasComposition && e.empty && ta(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = ua(t.root), { anchorNode: s, anchorOffset: a } = t.observer.selectionRange;
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
    t.docView.posFromDOM(y.anchorNode, y.anchorOffset) != e.from && i.collapse(s, a);
  }
  posFromDOM(t, e) {
    let i = this.tile.nearest(t);
    if (!i)
      return this.tile.dom.compareDocumentPosition(t) & 2 ? 0 : this.view.state.doc.length;
    let s = i.posAtStart;
    if (i.isComposite()) {
      let a;
      if (t == i.dom)
        a = i.dom.childNodes[e];
      else {
        let u = mn(t) == 0 ? 0 : e == 0 ? -1 : 1;
        for (; ; ) {
          let c = t.parentNode;
          if (c == i.dom)
            break;
          u == 0 && c.firstChild != c.lastChild && (t == c.firstChild ? u = -1 : u = 1), t = c;
        }
        u < 0 ? a = t : a = t.nextSibling;
      }
      if (a == i.dom.firstChild)
        return s;
      for (; a && !Jt.get(a); )
        a = a.nextSibling;
      if (!a)
        return s + i.length;
      for (let u = 0, c = s; ; u++) {
        let h = i.children[u];
        if (h.dom == a)
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
    let i, s = -1, a = !1, u, c = -1, h = !1;
    return this.tile.blockTiles((m, p) => {
      if (m.isWidget()) {
        if (m.flags & 32 && p >= t)
          return !0;
        m.flags & 16 && (a = !0);
      } else {
        let y = p + m.length;
        if (p <= t && (i = m, s = t - p, a = y < t), y >= t && !u && (u = m, c = t - p, h = p > t), p > t && u)
          return !0;
      }
    }), !i && !u ? this.domAtPos(t, e) : (a && u ? i = null : h && i && (u = null), i && e < 0 || !u ? i.domIn(s, e) : u.domIn(c, e));
  }
  coordsAt(t, e) {
    let { tile: i, offset: s } = this.tile.resolveBlock(t, e);
    return i.isWidget() ? i.widget instanceof Xh ? null : i.coordsInWidget(s, e, !0) : i.coordsIn(s, e);
  }
  lineAt(t, e) {
    let { tile: i } = this.tile.resolveBlock(t, e);
    return i.isLine() ? i : null;
  }
  coordsForChar(t) {
    let { tile: e, offset: i } = this.tile.resolveBlock(t, 1);
    if (!e.isLine())
      return null;
    function s(a, u) {
      if (a.isComposite())
        for (let c of a.children) {
          if (c.length >= u) {
            let h = s(c, u);
            if (h)
              return h;
          }
          if (u -= c.length, u < 0)
            break;
        }
      else if (a.isText() && u < a.length) {
        let c = me(a.text, u);
        if (c == u)
          return null;
        let h = fa(a.dom, u, c).getClientRects();
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
    let e = [], { from: i, to: s } = t, a = this.view.contentDOM.clientWidth, u = a > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, c = -1, h = this.view.textDirection == Yt.LTR, m = 0, p = (y, v, S) => {
      for (let w = 0; w < y.children.length && !(v > s); w++) {
        let A = y.children[w], k = v + A.length, E = A.dom.getBoundingClientRect(), { height: _ } = E;
        if (S && !w && (m += E.top - S.top), A instanceof dn)
          k > i && p(A, v, E);
        else if (v >= i && (m > 0 && e.push(-m), e.push(_ + m), m = 0, u)) {
          let V = A.dom.lastChild, Y = V ? $r(V) : [];
          if (Y.length) {
            let T = Y[Y.length - 1], R = h ? T.right - E.left : E.right - T.left;
            R > c && (c = R, this.minWidth = a, this.minWidthFrom = v, this.minWidthTo = k);
          }
        }
        S && w == y.children.length - 1 && (m += S.bottom - E.bottom), v = k + A.breakAfter;
      }
    };
    return p(this.tile, 0, null), e;
  }
  textDirectionAt(t) {
    let { tile: e } = this.tile.resolveBlock(t, 1);
    return getComputedStyle(e.dom).direction == "rtl" ? Yt.RTL : Yt.LTR;
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
    let e = document.createElement("div"), i, s, a;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(e);
      let u = $r(e.firstChild)[0];
      i = e.getBoundingClientRect().height, s = u && u.width ? u.width / 27 : 7, a = u && u.height ? u.height : i, e.remove();
    }), { lineHeight: i, charWidth: s, textHeight: a };
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let a = s == e.viewports.length ? null : e.viewports[s], u = a ? a.from - 1 : this.view.state.doc.length;
      if (u > i) {
        let c = (e.lineBlockAt(u).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
        t.push(ft.replace({
          widget: new Xh(c),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, u));
      }
      if (!a)
        break;
      i = a.to + 1;
    }
    return ft.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(tc).map((a) => (this.dynamicDecorationMap[t++] = typeof a == "function") ? a(this.view) : a), i = !1, s = this.view.state.facet(km).map((a, u) => {
      let c = typeof a == "function";
      return c && (i = !0), c ? a(this.view) : a;
    });
    for (s.length && (this.dynamicDecorationMap[t++] = i, e.push(Mt.join(s))), this.decorations = [
      this.editContextFormatting,
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = !1;
    this.blockWrappers = this.view.state.facet(Vb).map((a) => typeof a == "function" ? a(this.view) : a);
  }
  scrollIntoView(t) {
    var e;
    if (t.isSnapshot) {
      let p = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = p.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let p of this.view.state.facet(Hb))
      try {
        if (p(this.view, t.range, t))
          return !0;
      } catch (y) {
        Ye(this.view.state, y, "scroll handler");
      }
    let { range: i } = t, s = this.coordsAt(i.head, (e = i.assoc) !== null && e !== void 0 ? e : i.empty ? 0 : i.head > i.anchor ? -1 : 1), a;
    if (!s)
      return;
    !i.empty && (a = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (s = {
      left: Math.min(s.left, a.left),
      top: Math.min(s.top, a.top),
      right: Math.max(s.right, a.right),
      bottom: Math.max(s.bottom, a.bottom)
    });
    let u = Mm(this.view), c = {
      left: s.left - u.left,
      top: s.top - u.top,
      right: s.right + u.right,
      bottom: s.bottom + u.bottom
    }, { offsetWidth: h, offsetHeight: m } = this.view.scrollDOM;
    if (eC(this.view.scrollDOM, c, i.head < i.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, h), -h), Math.max(Math.min(t.yMargin, m), -m), this.view.textDirection == Yt.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (s.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || s.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let p = this.view.docView.lineAt(i.head, 1);
      p && p.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(t) {
    let e = (i) => i.isWidget() || i.children.some(e);
    return e(this.tile.resolveBlock(t, 1).tile);
  }
  destroy() {
    Yd(this.tile);
  }
}
function Yd(l, t) {
  let e = t?.get(l);
  if (e != 1) {
    e == null && l.destroy();
    for (let i of l.children)
      Yd(i, t);
  }
}
function TC(l) {
  return l.node.nodeType == 1 && l.node.firstChild && (l.offset == 0 || l.node.childNodes[l.offset - 1].contentEditable == "false") && (l.offset == l.node.childNodes.length || l.node.childNodes[l.offset].contentEditable == "false");
}
function Gb(l, t) {
  let e = l.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let i = xb(e.focusNode, e.focusOffset), s = wb(e.focusNode, e.focusOffset), a = i || s;
  if (s && i && s.node != i.node) {
    let c = Jt.get(s.node);
    if (!c || c.isText() && c.text != s.node.nodeValue)
      a = s;
    else if (l.docView.lastCompositionAfterCursor) {
      let h = Jt.get(i.node);
      !h || h.isText() && h.text != i.node.nodeValue || (a = s);
    }
  }
  if (l.docView.lastCompositionAfterCursor = a != i, !a)
    return null;
  let u = t - a.offset;
  return { from: u, to: u + a.node.nodeValue.length, node: a.node };
}
function OC(l, t, e) {
  let i = Gb(l, e);
  if (!i)
    return null;
  let { node: s, from: a, to: u } = i, c = s.nodeValue;
  if (/[\n\r]/.test(c) || l.state.doc.sliceString(i.from, i.to) != c)
    return null;
  let h = t.invertedDesc;
  return { range: new mi(h.mapPos(a), h.mapPos(u), a, u), text: s };
}
function DC(l, t) {
  return l.nodeType != 1 ? 0 : (t && l.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < l.childNodes.length && l.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let EC = class {
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
function RC(l, t, e) {
  let i = new EC();
  return Mt.compare(l, t, e, i), i.changes;
}
class BC {
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
function NC(l, t, e) {
  let i = new BC();
  return Mt.compare(l, t, e, i), i.changes;
}
function LC(l, t) {
  for (let e = l; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function zC(l, t) {
  let e = !1;
  return t && l.iterChangedRanges((i, s) => {
    i < t.to && s > t.from && (e = !0);
  }), e;
}
class Xh extends Ii {
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
function HC(l, t, e = 1) {
  let i = l.charCategorizer(t), s = l.doc.lineAt(t), a = t - s.from;
  if (s.length == 0)
    return X.cursor(t);
  a == 0 ? e = 1 : a == s.length && (e = -1);
  let u = a, c = a;
  e < 0 ? u = me(s.text, a, !1) : c = me(s.text, a);
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
  return X.range(u + s.from, c + s.from);
}
function _C(l, t, e, i, s) {
  let a = Math.round((i - t.left) * l.defaultCharacterWidth);
  if (l.lineWrapping && e.height > l.defaultLineHeight * 1.5) {
    let c = l.viewState.heightOracle.textHeight, h = Math.floor((s - e.top - (l.defaultLineHeight - c) * 0.5) / c);
    a += h * l.viewState.heightOracle.lineLength;
  }
  let u = l.state.sliceDoc(e.from, e.to);
  return e.from + Ed(u, a, l.state.tabSize);
}
function Gd(l, t, e) {
  let i = l.lineBlockAt(t);
  if (Array.isArray(i.type)) {
    let s;
    for (let a of i.type) {
      if (a.from > t)
        break;
      if (!(a.to < t)) {
        if (a.from < t && a.to > t)
          return a;
        (!s || a.type == xe.Text && (s.type != a.type || (e < 0 ? a.from < t : a.to > t))) && (s = a);
      }
    }
    return s || i;
  }
  return i;
}
function UC(l, t, e, i) {
  let s = Gd(l, t.head, t.assoc || -1), a = !i || s.type != xe.Text || !(l.lineWrapping || s.widgetLineBreaks) ? null : l.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
  if (a) {
    let u = l.dom.getBoundingClientRect(), c = l.textDirectionAt(s.from), h = l.posAtCoords({
      x: e == (c == Yt.LTR) ? u.right - 1 : u.left + 1,
      y: (a.top + a.bottom) / 2
    });
    if (h != null)
      return X.cursor(h, e ? -1 : 1);
  }
  return X.cursor(e ? s.to : s.from, e ? -1 : 1);
}
function x1(l, t, e, i) {
  let s = l.state.doc.lineAt(t.head), a = l.bidiSpans(s), u = l.textDirectionAt(s.from);
  for (let c = t, h = null; ; ) {
    let m = hC(s, a, u, c, e), p = Tb;
    if (!m) {
      if (s.number == (e ? l.state.doc.lines : 1))
        return c;
      p = `
`, s = l.state.doc.line(s.number + (e ? 1 : -1)), a = l.bidiSpans(s), m = l.visualLineSide(s, !e);
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
function VC(l, t, e) {
  let i = l.state.charCategorizer(t), s = i(e);
  return (a) => {
    let u = i(a);
    return s == Qt.Space && (s = u), s == u;
  };
}
function qC(l, t, e, i) {
  let s = t.head, a = e ? 1 : -1;
  if (s == (e ? l.state.doc.length : 0))
    return X.cursor(s, t.assoc);
  let u = t.goalColumn, c, h = l.contentDOM.getBoundingClientRect(), m = l.coordsAtPos(s, t.assoc || ((t.empty ? e : t.head == t.from) ? 1 : -1)), p = l.documentTop;
  if (m)
    u == null && (u = m.left - h.left), c = a < 0 ? m.top : m.bottom;
  else {
    let w = l.viewState.lineBlockAt(s);
    u == null && (u = Math.min(h.right - h.left, l.defaultCharacterWidth * (s - w.from))), c = (a < 0 ? w.top : w.bottom) + p;
  }
  let y = h.left + u, v = l.viewState.heightOracle.textHeight >> 1, S = i ?? v;
  for (let w = 0; ; w += v) {
    let A = c + (S + w) * a, k = Xd(l, { x: y, y: A }, !1, a);
    if (e ? A > h.bottom : A < h.top)
      return X.cursor(k.pos, k.assoc);
    let E = l.coordsAtPos(k.pos, k.assoc), _ = E ? (E.top + E.bottom) / 2 : 0;
    if (!E || (e ? _ > c : _ < c))
      return X.cursor(k.pos, k.assoc, void 0, u);
  }
}
function ea(l, t, e) {
  for (; ; ) {
    let i = 0;
    for (let s of l)
      s.between(t - 1, t + 1, (a, u, c) => {
        if (t > a && t < u) {
          let h = i || e || (t - a < u - t ? -1 : 1);
          t = h < 0 ? a : u, i = h;
        }
      });
    if (!i)
      return t;
  }
}
function Xb(l, t) {
  let e = null;
  for (let i = 0; i < t.ranges.length; i++) {
    let s = t.ranges[i], a = null;
    if (s.empty) {
      let u = ea(l, s.from, 0);
      u != s.from && (a = X.cursor(u, -1));
    } else {
      let u = ea(l, s.from, -1), c = ea(l, s.to, 1);
      (u != s.from || c != s.to) && (a = X.range(s.from == s.anchor ? u : c, s.from == s.head ? u : c));
    }
    a && (e || (e = t.ranges.slice()), e[i] = a);
  }
  return e ? X.create(e, t.mainIndex) : t;
}
function Wh(l, t, e) {
  let i = ea(l.state.facet(Aa).map((s) => s(l)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : X.cursor(i, i < e.from ? 1 : -1);
}
class qi {
  constructor(t, e) {
    this.pos = t, this.assoc = e;
  }
}
function Xd(l, t, e, i) {
  let s = l.contentDOM.getBoundingClientRect(), a = s.top + l.viewState.paddingTop, { x: u, y: c } = t, h = c - a, m;
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
      if (v && (i < 0 ? v.top <= h + a : v.bottom >= h + a))
        break;
    }
    let y = l.viewState.heightOracle.textHeight / 2;
    h = i > 0 ? m.bottom + y : m.top - y;
  }
  if (l.viewport.from >= m.to || l.viewport.to <= m.from) {
    if (e)
      return null;
    if (m.type == xe.Text) {
      let y = _C(l, s, m, u, c);
      return new qi(y, y == m.from ? 1 : -1);
    }
  }
  if (m.type != xe.Text)
    return h < (m.top + m.bottom) / 2 ? new qi(m.from, 1) : new qi(m.to, -1);
  let p = l.docView.lineAt(m.from, 2);
  return (!p || p.length != m.length) && (p = l.docView.lineAt(m.from, -2)), new jC(l, u, c, l.textDirectionAt(m.from)).scanTile(p, m.from);
}
class jC {
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
    let i = 0, s = t.length - 1, a = /* @__PURE__ */ new Set(), u = this.bidiIn(t[0], t[s]), c, h, m = -1, p = 1e9, y;
    t: for (; i < s; ) {
      let S = s - i, w = i + s >> 1;
      e: if (a.has(w)) {
        let k = i + Math.floor(Math.random() * S);
        for (let E = 0; E < S; E++) {
          if (!a.has(k)) {
            w = k;
            break e;
          }
          k++, k == s && (k = i);
        }
        break t;
      }
      a.add(w);
      let A = e(w);
      if (A)
        for (let k = 0; k < A.length; k++) {
          let E = A[k], _ = 0;
          if (!(E.width == 0 && A.length > 1)) {
            if (E.bottom < this.y)
              (!c || c.bottom < E.bottom) && (c = E), _ = 1;
            else if (E.top > this.y)
              (!h || h.top > E.top) && (h = E), _ = -1;
            else {
              let V = E.left > this.x ? this.x - E.left : E.right < this.x ? this.x - E.right : 0, Y = Math.abs(V);
              Y < p && (m = w, p = Y, y = E), V && (_ = V < 0 == (this.baseDir == Yt.LTR) ? -1 : 1);
            }
            _ == -1 && (!u || this.baseDirAt(t[w], 1)) ? s = w : _ == 1 && (!u || this.baseDirAt(t[w + 1], -1)) && (i = w + 1);
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
    let v = (u ? this.dirAt(t[m], 1) : this.baseDir) == Yt.LTR;
    return {
      i: m,
      // Test whether x is closes to the start or end of this element
      after: this.x > (y.left + y.right) / 2 == v
    };
  }
  scanText(t, e) {
    let i = [];
    for (let a = 0; a < t.length; a = me(t.text, a))
      i.push(e + a);
    i.push(e + t.length);
    let s = this.scan(i, (a) => {
      let u = i[a] - e, c = i[a + 1] - e;
      return fa(t.dom, u, c).getClientRects();
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
      return h.flags & 48 ? null : (h.dom.nodeType == 1 ? h.dom : fa(h.dom, 0, h.length)).getClientRects();
    }), a = t.children[s.i], u = i[s.i];
    return a.isText() ? this.scanText(a, u) : a.isComposite() ? this.scanTile(a, u) : s.after ? new qi(i[s.i + 1], -1) : new qi(u, 1);
  }
}
const bs = "￿";
class YC {
  constructor(t, e) {
    this.points = t, this.view = e, this.text = "", this.lineSeparator = e.state.facet(Ot.lineSeparator);
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
      let a = this.text.length;
      this.readNode(s);
      let u = Jt.get(s), c = s.nextSibling;
      if (c == e) {
        u?.breakAfter && !c && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let h = Jt.get(c);
      (u && h ? u.breakAfter : (u ? u.breakAfter : Tu(s)) || Tu(c) && (s.nodeName != "BR" || u?.isWidget()) && this.text.length > a) && !XC(c, e) && this.lineBreak(), s = c;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let a = -1, u = 1, c;
      if (this.lineSeparator ? (a = e.indexOf(this.lineSeparator, i), u = this.lineSeparator.length) : (c = s.exec(e)) && (a = c.index, u = c[0].length), this.append(e.slice(i, a < 0 ? e.length : a)), a < 0)
        break;
      if (this.lineBreak(), u > 1)
        for (let h of this.points)
          h.node == t && h.pos > this.text.length && (h.pos -= u - 1);
      i = a + u;
    }
  }
  readNode(t) {
    let e = Jt.get(t), i = e && e.overrideDOMText;
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
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (GC(t, i.node, i.offset) ? e : 0));
  }
}
function GC(l, t, e) {
  for (; ; ) {
    if (!t || e < mn(t))
      return !1;
    if (t == l)
      return !0;
    e = Fn(t) + 1, t = t.parentNode;
  }
}
function XC(l, t) {
  let e;
  for (; !(l == t || !l); l = l.nextSibling) {
    let i = Jt.get(l);
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
class w1 {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class WC {
  constructor(t, e, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: a, impreciseAnchor: u } = t.docView, c = t.state.selection;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = Wb(t.docView.tile, e, i, 0))) {
      let h = a || u ? [] : QC(t), m = new YC(h, t);
      m.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = m.text, this.newSel = ZC(h, this.bounds.from);
    } else {
      let h = t.observer.selectionRange, m = a && a.node == h.focusNode && a.offset == h.focusOffset || !_d(t.contentDOM, h.focusNode) ? c.main.head : t.docView.posFromDOM(h.focusNode, h.focusOffset), p = u && u.node == h.anchorNode && u.offset == h.anchorOffset || !_d(t.contentDOM, h.anchorNode) ? c.main.anchor : t.docView.posFromDOM(h.anchorNode, h.anchorOffset), y = t.viewport;
      if ((it.ios || it.chrome) && c.main.empty && m != p && (y.from > 0 || y.to < t.state.doc.length)) {
        let v = Math.min(m, p), S = Math.max(m, p), w = y.from - v, A = y.to - S;
        (w == 0 || w == 1 || v == 0) && (A == 0 || A == -1 || S == t.state.doc.length) && (m = 0, p = t.state.doc.length);
      }
      if (t.inputState.composing > -1 && c.ranges.length > 1)
        this.newSel = c.replaceRange(X.range(p, m));
      else if (t.lineWrapping && p == m && !(c.main.empty && c.main.head == m) && t.inputState.lastTouchTime > Date.now() - 100) {
        let v = t.coordsAtPos(m, -1), S = 0;
        v && (S = t.inputState.lastTouchY <= v.bottom ? -1 : 1), this.newSel = X.create([X.cursor(m, S)]);
      } else
        this.newSel = X.single(p, m);
    }
  }
}
function Wb(l, t, e, i) {
  if (l.isComposite()) {
    let s = -1, a = -1, u = -1, c = -1;
    for (let h = 0, m = i, p = i; h < l.children.length; h++) {
      let y = l.children[h], v = m + y.length;
      if (m < t && v > e)
        return Wb(y, t, e, m);
      if (v >= t && s == -1 && (s = h, a = m), m > e && y.dom.parentNode == l.dom) {
        u = h, c = p;
        break;
      }
      p = v, m = v + y.breakAfter;
    }
    return {
      from: a,
      to: c < 0 ? i + l.length : c,
      startDOM: (s ? l.children[s - 1].dom.nextSibling : null) || l.dom.firstChild,
      endDOM: u < l.children.length && u >= 0 ? l.children[u].dom : null
    };
  } else return l.isText() ? { from: i, to: i + l.length, startDOM: l.dom, endDOM: l.dom.nextSibling } : null;
}
function Kb(l, t) {
  let e, { newSel: i } = t, { state: s } = l, a = s.selection.main, u = l.inputState.lastKeyTime > Date.now() - 100 ? l.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: c, to: h } = t.bounds, m = a.from, p = null;
    (u === 8 || it.android && t.text.length < h - c) && (m = a.to, p = "end");
    let y = s.doc.sliceString(c, h, bs), v, S;
    !a.empty && a.from >= c && a.to <= h && (t.typeOver || y != t.text) && y.slice(0, a.from - c) == t.text.slice(0, a.from - c) && y.slice(a.to - c) == t.text.slice(v = t.text.length - (y.length - (a.to - c))) ? e = {
      from: a.from,
      to: a.to,
      insert: Rt.of(t.text.slice(a.from - c, v).split(bs))
    } : (S = Qb(y, t.text, m - c, p)) && (it.chrome && u == 13 && S.toB == S.from + 2 && t.text.slice(S.from, S.toB) == bs + bs && S.toB--, e = {
      from: c + S.from,
      to: c + S.toA,
      insert: Rt.of(t.text.slice(S.from, S.toB).split(bs))
    });
  } else i && (!l.hasFocus && s.facet(hn) || Ru(i, a)) && (i = null);
  if (!e && !i)
    return !1;
  if ((it.mac || it.android) && e && e.from == e.to && e.from == a.head - 1 && /^\. ?$/.test(e.insert.toString()) && l.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = X.single(i.main.anchor - 1, i.main.head - 1)), e = { from: e.from, to: e.to, insert: Rt.of([e.insert.toString().replace(".", " ")]) }) : s.doc.lineAt(a.from).to < a.to && l.docView.lineHasWidget(a.to) && l.inputState.insertingTextAt > Date.now() - 50 ? e = {
    from: a.from,
    to: a.to,
    insert: s.toText(l.inputState.insertingText)
  } : it.chrome && e && e.from == e.to && e.from == a.head && e.insert.toString() == `
 ` && l.lineWrapping && (i && (i = X.single(i.main.anchor - 1, i.main.head - 1)), e = { from: a.from, to: a.to, insert: Rt.of([" "]) }), e)
    return Tm(l, e, i, u);
  if (i && !Ru(i, a)) {
    let c = !1, h = "select";
    return l.inputState.lastSelectionTime > Date.now() - 50 && (l.inputState.lastSelectionOrigin == "select" && (c = !0), h = l.inputState.lastSelectionOrigin, h == "select.pointer" && (i = Xb(s.facet(Aa).map((m) => m(l)), i))), l.dispatch({ selection: i, scrollIntoView: c, userEvent: h }), !0;
  } else
    return !1;
}
function Tm(l, t, e, i = -1) {
  if (it.ios && l.inputState.flushIOSKey(t))
    return !0;
  let s = l.state.selection.main;
  if (it.android && (t.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (t.from == s.from || t.from == s.from - 1 && l.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Ts(l.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > s.head) && Ts(l.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && Ts(l.contentDOM, "Delete", 46)))
    return !0;
  let a = t.insert.toString();
  l.inputState.composing >= 0 && l.inputState.composing++;
  let u, c = () => u || (u = KC(l, t, e));
  return l.state.facet(Bb).some((h) => h(l, t.from, t.to, a, c)) || l.dispatch(c()), !0;
}
function KC(l, t, e) {
  let i, s = l.state, a = s.selection.main, u = -1;
  if (t.from == t.to && t.from < a.from || t.from > a.to) {
    let h = t.from < a.from ? -1 : 1, m = h < 0 ? a.from : a.to, p = ea(s.facet(Aa).map((y) => y(l)), m, h);
    t.from == p && (u = p);
  }
  if (u > -1)
    i = {
      changes: t,
      selection: X.cursor(t.from + t.insert.length, -1)
    };
  else if (t.from >= a.from && t.to <= a.to && t.to - t.from >= (a.to - a.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && l.inputState.composing < 0) {
    let h = a.from < t.from ? s.sliceDoc(a.from, t.from) : "", m = a.to > t.to ? s.sliceDoc(t.to, a.to) : "";
    i = s.replaceSelection(l.state.toText(h + t.insert.sliceString(0, void 0, l.state.lineBreak) + m));
  } else {
    let h = s.changes(t), m = e && e.main.to <= h.newLength ? e.main : void 0;
    if (s.selection.ranges.length > 1 && (l.inputState.composing >= 0 || l.inputState.compositionPendingChange) && t.to <= a.to + 10 && t.to >= a.to - 10) {
      let p = l.state.sliceDoc(t.from, t.to), y, v = e && Gb(l, e.main.head);
      if (v) {
        let w = t.insert.length - (t.to - t.from);
        y = { from: v.from, to: v.to - w };
      } else
        y = l.state.doc.lineAt(a.head);
      let S = a.to - t.to;
      i = s.changeByRange((w) => {
        if (w.from == a.from && w.to == a.to)
          return { changes: h, range: m || w.map(h) };
        let A = w.to - S, k = A - p.length;
        if (l.state.sliceDoc(k, A) != p || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        A >= y.from && k <= y.to)
          return { range: w };
        let E = s.changes({ from: k, to: A, insert: t.insert }), _ = w.to - a.to;
        return {
          changes: E,
          range: m ? X.range(Math.max(0, m.anchor + _), Math.max(0, m.head + _)) : w.map(E)
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
function Qb(l, t, e, i) {
  let s = Math.min(l.length, t.length), a = 0;
  for (; a < s && l.charCodeAt(a) == t.charCodeAt(a); )
    a++;
  if (a == s && l.length == t.length)
    return null;
  let u = l.length, c = t.length;
  for (; u > 0 && c > 0 && l.charCodeAt(u - 1) == t.charCodeAt(c - 1); )
    u--, c--;
  if (i == "end") {
    let h = Math.max(0, a - Math.min(u, c));
    e -= u + h - a;
  }
  if (u < a && l.length < t.length) {
    let h = e <= a && e >= u ? a - e : 0;
    a -= h, c = a + (c - u), u = a;
  } else if (c < a) {
    let h = e <= a && e >= c ? a - e : 0;
    a -= h, u = a + (u - c), c = a;
  }
  return { from: a, toA: u, toB: c };
}
function QC(l) {
  let t = [];
  if (l.root.activeElement != l.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: a } = l.observer.selectionRange;
  return e && (t.push(new w1(e, i)), (s != e || a != i) && t.push(new w1(s, a))), t;
}
function ZC(l, t) {
  if (l.length == 0)
    return null;
  let e = l[0].pos, i = l.length == 2 ? l[1].pos : e;
  return e > -1 && i > -1 ? X.single(e + t, i + t) : null;
}
function Ru(l, t) {
  return t.head == l.main.head && t.anchor == l.main.anchor;
}
class IC {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, it.safari && t.contentDOM.addEventListener("input", () => null), it.gecko && ck(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !nk(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
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
    let e = FC(t), i = this.handlers, s = this.view.contentDOM;
    for (let a in e)
      if (a != "scroll") {
        let u = !e[a].handlers.length, c = i[a];
        c && u != !c.handlers.length && (s.removeEventListener(a, this.handleEvent), c = null), c || s.addEventListener(a, this.handleEvent, { passive: u });
      }
    for (let a in i)
      a != "scroll" && !e[a] && s.removeEventListener(a, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && Ib.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), it.android && it.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let e;
    return it.ios && !t.synthetic && !t.altKey && !t.metaKey && !t.shiftKey && ((e = Zb.find((i) => i.keyCode == t.keyCode)) && !t.ctrlKey || PC.indexOf(t.key) > -1 && t.ctrlKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), !0) : (t.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Ts(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return !/^key/.test(t.type) || t.synthetic ? !1 : this.composing > 0 ? !0 : it.safari && !it.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
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
function A1(l, t) {
  return (e, i) => {
    try {
      return t.call(l, i, e);
    } catch (s) {
      Ye(e.state, s);
    }
  };
}
function FC(l) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(i) {
    return t[i] || (t[i] = { observers: [], handlers: [] });
  }
  for (let i of l) {
    let s = i.spec, a = s && s.plugin.domEventHandlers, u = s && s.plugin.domEventObservers;
    if (a)
      for (let c in a) {
        let h = a[c];
        h && e(c).handlers.push(A1(i.value, h));
      }
    if (u)
      for (let c in u) {
        let h = u[c];
        h && e(c).observers.push(A1(i.value, h));
      }
  }
  for (let i in ki)
    e(i).handlers.push(ki[i]);
  for (let i in Xe)
    e(i).observers.push(Xe[i]);
  return t;
}
const Zb = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], PC = "dthko", Ib = [16, 17, 18, 20, 91, 92, 224, 225], Io = 6;
function Fo(l) {
  return Math.max(0, l) * 0.7 + 8;
}
function JC(l, t) {
  return Math.max(Math.abs(l.clientX - t.clientX), Math.abs(l.clientY - t.clientY));
}
class $C {
  constructor(t, e, i, s) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = vb(t.contentDOM), this.atoms = t.state.facet(Aa).map((u) => u(t));
    let a = t.contentDOM.ownerDocument;
    a.addEventListener("mousemove", this.move = this.move.bind(this)), a.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(Ot.allowMultipleSelections) && tk(t, e), this.dragging = ik(t, e) && Jb(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && JC(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, i = 0, s = 0, a = 0, u = this.view.win.innerWidth, c = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: u } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: a, bottom: c } = this.scrollParents.y.getBoundingClientRect());
    let h = Mm(this.view);
    t.clientX - h.left <= s + Io ? e = -Fo(s - t.clientX) : t.clientX + h.right >= u - Io && (e = Fo(t.clientX - u)), t.clientY - h.top <= a + Io ? i = -Fo(a - t.clientY) : t.clientY + h.bottom >= c - Io && (i = Fo(t.clientY - c)), this.setScrollSpeed(e, i);
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
    let { view: e } = this, i = Xb(this.atoms, this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function tk(l, t) {
  let e = l.state.facet(Ob);
  return e.length ? e[0](t) : it.mac ? t.metaKey : t.ctrlKey;
}
function ek(l, t) {
  let e = l.state.facet(Db);
  return e.length ? e[0](t) : it.mac ? !t.altKey : !t.ctrlKey;
}
function ik(l, t) {
  let { main: e } = l.state.selection;
  if (e.empty)
    return !1;
  let i = ua(l.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let a = 0; a < s.length; a++) {
    let u = s[a];
    if (u.left <= t.clientX && u.right >= t.clientX && u.top <= t.clientY && u.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function nk(l, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, i; e != l.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = Jt.get(e)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(t))
      return !1;
  return !0;
}
const ki = /* @__PURE__ */ Object.create(null), Xe = /* @__PURE__ */ Object.create(null), Fb = it.ie && it.ie_version < 15 || it.ios && it.webkit_version < 604;
function lk(l) {
  let t = l.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    l.focus(), e.remove(), Pb(l, e.value);
  }, 50);
}
function nc(l, t, e) {
  for (let i of l.facet(t))
    e = i(e, l);
  return e;
}
function Pb(l, t) {
  t = nc(l.state, wm, t);
  let { state: e } = l, i, s = 1, a = e.toText(t), u = a.lines == e.selection.ranges.length;
  if (Wd != null && e.selection.ranges.every((h) => h.empty) && Wd == a.toString()) {
    let h = -1;
    i = e.changeByRange((m) => {
      let p = e.doc.lineAt(m.from);
      if (p.from == h)
        return { range: m };
      h = p.from;
      let y = e.toText((u ? a.line(s++).text : t) + e.lineBreak);
      return {
        changes: { from: p.from, insert: y },
        range: X.cursor(m.from + y.length)
      };
    });
  } else u ? i = e.changeByRange((h) => {
    let m = a.line(s++);
    return {
      changes: { from: h.from, to: h.to, insert: m.text },
      range: X.cursor(h.from + m.length)
    };
  }) : i = e.replaceSelection(a);
  l.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Xe.scroll = (l) => {
  l.inputState.lastScrollTop = l.scrollDOM.scrollTop, l.inputState.lastScrollLeft = l.scrollDOM.scrollLeft;
};
Xe.wheel = Xe.mousewheel = (l) => {
  l.inputState.lastWheelEvent = Date.now();
};
ki.keydown = (l, t) => (l.inputState.setSelectionOrigin("select"), t.keyCode == 27 && l.inputState.tabFocusMode != 0 && (l.inputState.tabFocusMode = Date.now() + 2e3), !1);
Xe.touchstart = (l, t) => {
  let e = l.inputState, i = t.targetTouches[0];
  e.lastTouchTime = Date.now(), i && (e.lastTouchX = i.clientX, e.lastTouchY = i.clientY), e.setSelectionOrigin("select.pointer");
};
Xe.touchmove = (l) => {
  l.inputState.setSelectionOrigin("select.pointer");
};
ki.mousedown = (l, t) => {
  if (l.observer.flush(), l.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let e = null;
  for (let i of l.state.facet(Eb))
    if (e = i(l, t), e)
      break;
  if (!e && t.button == 0 && (e = rk(l, t)), e) {
    let i = !l.hasFocus;
    l.inputState.startMouseSelection(new $C(l, t, e, i)), i && l.observer.ignore(() => {
      bb(l.contentDOM);
      let a = l.root.activeElement;
      a && !a.contains(l.contentDOM) && a.blur();
    });
    let s = l.inputState.mouseSelection;
    if (s)
      return s.start(t), s.dragging === !1;
  } else
    l.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function C1(l, t, e, i) {
  if (i == 1)
    return X.cursor(t, e);
  if (i == 2)
    return HC(l.state, t, e);
  {
    let s = l.docView.lineAt(t, e), a = l.state.doc.lineAt(s ? s.posAtEnd : t), u = s ? s.posAtStart : a.from, c = s ? s.posAtEnd : a.to;
    return c < l.state.doc.length && c == a.to && c++, X.range(u, c);
  }
}
const sk = it.ie && it.ie_version <= 11;
let k1 = null, M1 = 0, T1 = 0;
function Jb(l) {
  if (!sk)
    return l.detail;
  let t = k1, e = T1;
  return k1 = l, T1 = Date.now(), M1 = !t || e > Date.now() - 400 && Math.abs(t.clientX - l.clientX) < 2 && Math.abs(t.clientY - l.clientY) < 2 ? (M1 + 1) % 3 : 1;
}
function rk(l, t) {
  let e = l.posAndSideAtCoords({ x: t.clientX, y: t.clientY }, !1), i = Jb(t), s = l.state.selection;
  return {
    update(a) {
      a.docChanged && (e.pos = a.changes.mapPos(e.pos), s = s.map(a.changes));
    },
    get(a, u, c) {
      let h = l.posAndSideAtCoords({ x: a.clientX, y: a.clientY }, !1), m, p = C1(l, h.pos, h.assoc, i);
      if (e.pos != h.pos && !u) {
        let y = C1(l, e.pos, e.assoc, i), v = Math.min(y.from, p.from), S = Math.max(y.to, p.to);
        p = v < p.from ? X.range(v, S, p.assoc) : X.range(S, v, p.assoc);
      }
      return u ? s.replaceRange(s.main.extend(p.from, p.to, p.assoc)) : c && i == 1 && s.ranges.length > 1 && (m = ak(s, h.pos)) ? m : c ? s.addRange(p) : X.create([p]);
    }
  };
}
function ak(l, t) {
  for (let e = 0; e < l.ranges.length; e++) {
    let { from: i, to: s } = l.ranges[e];
    if (i <= t && s >= t)
      return X.create(l.ranges.slice(0, e).concat(l.ranges.slice(e + 1)), l.mainIndex == e ? 0 : l.mainIndex - (l.mainIndex > e ? 1 : 0));
  }
  return null;
}
ki.dragstart = (l, t) => {
  let { selection: { main: e } } = l.state;
  if (t.target.draggable) {
    let s = l.docView.tile.nearest(t.target);
    if (s && s.isWidget()) {
      let a = s.posAtStart, u = a + s.length;
      (a >= e.to || u <= e.from) && (e = X.range(a, u));
    }
  }
  let { inputState: i } = l;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", nc(l.state, Am, l.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
};
ki.dragend = (l) => (l.inputState.draggedContent = null, !1);
function O1(l, t, e, i) {
  if (e = nc(l.state, wm, e), !e)
    return;
  let s = l.posAtCoords({ x: t.clientX, y: t.clientY }, !1), { draggedContent: a } = l.inputState, u = i && a && ek(l, t) ? { from: a.from, to: a.to } : null, c = { from: s, insert: e }, h = l.state.changes(u ? [u, c] : c);
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
    let i = Array(e.length), s = 0, a = () => {
      ++s == e.length && O1(l, t, i.filter((u) => u != null).join(l.state.lineBreak), !1);
    };
    for (let u = 0; u < e.length; u++) {
      let c = new FileReader();
      c.onerror = a, c.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(c.result) || (i[u] = c.result), a();
      }, c.readAsText(e[u]);
    }
    return !0;
  } else {
    let i = t.dataTransfer.getData("Text");
    if (i)
      return O1(l, t, i, !0), !0;
  }
  return !1;
};
ki.paste = (l, t) => {
  if (l.state.readOnly)
    return !0;
  l.observer.flush();
  let e = Fb ? null : t.clipboardData;
  return e ? (Pb(l, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (lk(l), !1);
};
function ok(l, t) {
  let e = l.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), l.focus();
  }, 50);
}
function uk(l) {
  let t = [], e = [], i = !1;
  for (let s of l.selection.ranges)
    s.empty || (t.push(l.sliceDoc(s.from, s.to)), e.push(s));
  if (!t.length) {
    let s = -1;
    for (let { from: a } of l.selection.ranges) {
      let u = l.doc.lineAt(a);
      u.number > s && (t.push(u.text), e.push({ from: u.from, to: Math.min(l.doc.length, u.to + 1) })), s = u.number;
    }
    i = !0;
  }
  return { text: nc(l, Am, t.join(l.lineBreak)), ranges: e, linewise: i };
}
let Wd = null;
ki.copy = ki.cut = (l, t) => {
  if (!Jr(l.contentDOM, l.observer.selectionRange))
    return !1;
  let { text: e, ranges: i, linewise: s } = uk(l.state);
  if (!e && !s)
    return !1;
  Wd = s ? e : null, t.type == "cut" && !l.state.readOnly && l.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let a = Fb ? null : t.clipboardData;
  return a ? (a.clearData(), a.setData("text/plain", e), !0) : (ok(l, e), !1);
};
const $b = /* @__PURE__ */ Qi.define();
function tS(l, t) {
  let e = [];
  for (let i of l.facet(Nb)) {
    let s = i(l, t);
    s && e.push(s);
  }
  return e.length ? l.update({ effects: e, annotations: $b.of(!0) }) : null;
}
function eS(l) {
  setTimeout(() => {
    let t = l.hasFocus;
    if (t != l.inputState.notifiedFocused) {
      let e = tS(l.state, t);
      e ? l.dispatch(e) : l.update([]);
    }
  }, 10);
}
Xe.focus = (l) => {
  l.inputState.lastFocusTime = Date.now(), !l.scrollDOM.scrollTop && (l.inputState.lastScrollTop || l.inputState.lastScrollLeft) && (l.scrollDOM.scrollTop = l.inputState.lastScrollTop, l.scrollDOM.scrollLeft = l.inputState.lastScrollLeft), eS(l);
};
Xe.blur = (l) => {
  l.observer.clearSelectionRange(), eS(l);
};
Xe.compositionstart = Xe.compositionupdate = (l) => {
  l.observer.editContext || (l.inputState.compositionFirstChange == null && (l.inputState.compositionFirstChange = !0), l.inputState.composing < 0 && (l.inputState.composing = 0));
};
Xe.compositionend = (l) => {
  l.observer.editContext || (l.inputState.composing = -1, l.inputState.compositionEndedAt = Date.now(), l.inputState.compositionPendingKey = !0, l.inputState.compositionPendingChange = l.observer.pendingRecords().length > 0, l.inputState.compositionFirstChange = null, it.chrome && it.android ? l.observer.flushSoon() : l.inputState.compositionPendingChange ? Promise.resolve().then(() => l.observer.flush()) : setTimeout(() => {
    l.inputState.composing < 0 && l.docView.hasComposition && l.update([]);
  }, 50));
};
Xe.contextmenu = (l) => {
  l.inputState.lastContextMenu = Date.now();
};
ki.beforeinput = (l, t) => {
  var e, i;
  if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (l.inputState.insertingText = t.data, l.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && l.observer.editContext) {
    let a = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), u = t.getTargetRanges();
    if (a && u.length) {
      let c = u[0], h = l.posAtDOM(c.startContainer, c.startOffset), m = l.posAtDOM(c.endContainer, c.endOffset);
      return Tm(l, { from: h, to: m, insert: l.state.toText(a) }, null), !0;
    }
  }
  let s;
  if (it.chrome && it.android && (s = Zb.find((a) => a.inputType == t.inputType)) && (l.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let a = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var u;
      (((u = window.visualViewport) === null || u === void 0 ? void 0 : u.height) || 0) > a + 10 && l.hasFocus && (l.contentDOM.blur(), l.focus());
    }, 100);
  }
  return it.ios && t.inputType == "deleteContentForward" && l.observer.flushSoon(), it.safari && t.inputType == "insertText" && l.inputState.composing >= 0 && setTimeout(() => Xe.compositionend(l, t), 20), !1;
};
const D1 = /* @__PURE__ */ new Set();
function ck(l) {
  D1.has(l) || (D1.add(l), l.addEventListener("copy", () => {
  }), l.addEventListener("cut", () => {
  }));
}
const E1 = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ls = !1;
function R1() {
  Ls = !1;
}
class fk {
  constructor(t) {
    this.lineWrapping = t, this.doc = Rt.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
    return E1.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, i, s, a, u) {
    let c = E1.indexOf(t) > -1, h = Math.abs(e - this.lineHeight) > 0.3 || this.lineWrapping != c || Math.abs(i - this.charWidth) > 0.1;
    if (this.lineWrapping = c, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = a, h) {
      this.heightSamples = {};
      for (let m = 0; m < u.length; m++) {
        let p = u[m];
        p < 0 ? m++ : this.heightSamples[Math.floor(p * 10)] = !0;
      }
    }
    return h;
  }
}
class hk {
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
  constructor(t, e, i, s, a) {
    this.from = t, this.length = e, this.top = i, this.height = s, this._content = a;
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
var Xt = /* @__PURE__ */ (function(l) {
  return l[l.ByPos = 0] = "ByPos", l[l.ByHeight = 1] = "ByHeight", l[l.ByPosNoHeight = 2] = "ByPosNoHeight", l;
})(Xt || (Xt = {}));
const vu = 1e-3;
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
    this.height != t && (Math.abs(this.height - t) > vu && (Ls = !0), this.height = t);
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
    let a = this, u = i.doc;
    for (let c = s.length - 1; c >= 0; c--) {
      let { fromA: h, toA: m, fromB: p, toB: y } = s[c], v = a.lineAt(h, Xt.ByPosNoHeight, i.setDoc(e), 0, 0), S = v.to >= m ? v : a.lineAt(m, Xt.ByPosNoHeight, i, 0, 0);
      for (y += S.to - m, m = S.to; c > 0 && v.from <= s[c - 1].toA; )
        h = s[c - 1].fromA, p = s[c - 1].fromB, c--, h < v.from && (v = a.lineAt(h, Xt.ByPosNoHeight, i, 0, 0));
      p += v.from - h, h = v.from;
      let w = Om.build(i.setDoc(u), t, p, y);
      a = Bu(a, a.replace(h, m, w));
    }
    return a.updateHeight(i, 0);
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
    let e = 0, i = t.length, s = 0, a = 0;
    for (; ; )
      if (e == i)
        if (s > a * 2) {
          let c = t[e - 1];
          c.break ? t.splice(--e, 1, c.left, null, c.right) : t.splice(--e, 1, c.left, c.right), i += 1 + c.break, s -= c.size;
        } else if (a > s * 2) {
          let c = t[i];
          c.break ? t.splice(i, 1, c.left, null, c.right) : t.splice(i, 1, c.left, c.right), i += 2 + c.break, a -= c.size;
        } else
          break;
      else if (s < a) {
        let c = t[e++];
        c && (s += c.size);
      } else {
        let c = t[--i];
        c && (a += c.size);
      }
    let u = 0;
    return t[e - 1] == null ? (u = 1, e--) : t[e] == null && (u = 1, i++), new mk(Ne.of(t.slice(0, e)), u, Ne.of(t.slice(i)));
  }
}
function Bu(l, t) {
  return l == t ? l : (l.constructor != t.constructor && (Ls = !0), t);
}
Ne.prototype.size = 1;
const dk = /* @__PURE__ */ ft.replace({});
class iS extends Ne {
  constructor(t, e, i) {
    super(t, e), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(t, e) {
    return new Ai(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(t, e, i, s) {
    return this.spaceAbove && t < i + this.spaceAbove ? new Ai(s, 0, i, this.spaceAbove, dk) : this.mainBlock(i, s);
  }
  lineAt(t, e, i, s, a) {
    let u = this.mainBlock(s, a);
    return this.spaceAbove ? this.blockAt(0, i, s, a).join(u) : u;
  }
  forEachLine(t, e, i, s, a, u) {
    t <= a + this.length && e >= a && u(this.lineAt(0, Xt.ByPos, i, s, a));
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
class ei extends iS {
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
    let i = t.doc.lineAt(e).number, s = t.doc.lineAt(e + this.length).number, a = s - i + 1, u, c = 0;
    if (t.lineWrapping) {
      let h = Math.min(this.height, t.lineHeight * a);
      u = h / a, this.length > a + 1 && (c = (this.height - h) / (this.length - a - 1));
    } else
      u = this.height / a;
    return { firstLine: i, lastLine: s, perLine: u, perChar: c };
  }
  blockAt(t, e, i, s) {
    let { firstLine: a, lastLine: u, perLine: c, perChar: h } = this.heightMetrics(e, s);
    if (e.lineWrapping) {
      let m = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), p = e.doc.lineAt(m), y = c + p.length * h, v = Math.max(i, t - y / 2);
      return new Ai(p.from, p.length, v, y, 0);
    } else {
      let m = Math.max(0, Math.min(u - a, Math.floor((t - i) / c))), { from: p, length: y } = e.doc.line(a + m);
      return new Ai(p, y, i + c * m, c, 0);
    }
  }
  lineAt(t, e, i, s, a) {
    if (e == Xt.ByHeight)
      return this.blockAt(t, i, s, a);
    if (e == Xt.ByPosNoHeight) {
      let { from: S, to: w } = i.doc.lineAt(t);
      return new Ai(S, w - S, 0, 0, 0);
    }
    let { firstLine: u, perLine: c, perChar: h } = this.heightMetrics(i, a), m = i.doc.lineAt(t), p = c + m.length * h, y = m.number - u, v = s + c * y + h * (m.from - a - y);
    return new Ai(m.from, m.length, Math.max(s, Math.min(v, s + this.height - p)), p, 0);
  }
  forEachLine(t, e, i, s, a, u) {
    t = Math.max(t, a), e = Math.min(e, a + this.length);
    let { firstLine: c, perLine: h, perChar: m } = this.heightMetrics(i, a);
    for (let p = t, y = s; p <= e; ) {
      let v = i.doc.lineAt(p);
      if (p == t) {
        let w = v.number - c;
        y += h * w + m * (t - a - w);
      }
      let S = h + m * v.length;
      u(new Ai(v.from, v.length, y, S, 0)), y += S, p = v.to + 1;
    }
  }
  replace(t, e, i) {
    let s = this.length - e;
    if (s > 0) {
      let a = i[i.length - 1];
      a instanceof ve ? i[i.length - 1] = new ve(a.length + s) : i.push(null, new ve(s - 1));
    }
    if (t > 0) {
      let a = i[0];
      a instanceof ve ? i[0] = new ve(t + a.length) : i.unshift(new ve(t - 1), null);
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
    let a = e + this.length;
    if (s && s.from <= e + this.length && s.more) {
      let u = [], c = Math.max(e, s.from), h = -1;
      for (s.from > e && u.push(new ve(s.from - e - 1).updateHeight(t, e)); c <= a && s.more; ) {
        let p = t.doc.lineAt(c).length;
        u.length && u.push(null);
        let y = s.heights[s.index++], v = 0;
        y < 0 && (v = -y, y = s.heights[s.index++]), h == -1 ? h = y : Math.abs(y - h) >= vu && (h = -2);
        let S = new ei(p, y, v);
        S.outdated = !1, u.push(S), c += p + 1;
      }
      c <= a && u.push(null, new ve(a - c).updateHeight(t, c));
      let m = Ne.of(u);
      return (h < 0 || Math.abs(m.height - this.height) >= vu || Math.abs(h - this.heightMetrics(t, e).perLine) >= vu) && (Ls = !0), Bu(this, m);
    } else (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class mk extends Ne {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, s) {
    let a = i + this.left.height;
    return t < a ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, a, s + this.left.length + this.break);
  }
  lineAt(t, e, i, s, a) {
    let u = s + this.left.height, c = a + this.left.length + this.break, h = e == Xt.ByHeight ? t < u : t < c, m = h ? this.left.lineAt(t, e, i, s, a) : this.right.lineAt(t, e, i, u, c);
    if (this.break || (h ? m.to < c : m.from > c))
      return m;
    let p = e == Xt.ByPosNoHeight ? Xt.ByPosNoHeight : Xt.ByPos;
    return h ? m.join(this.right.lineAt(c, p, i, u, c)) : this.left.lineAt(c, p, i, s, a).join(m);
  }
  forEachLine(t, e, i, s, a, u) {
    let c = s + this.left.height, h = a + this.left.length + this.break;
    if (this.break)
      t < h && this.left.forEachLine(t, e, i, s, a, u), e >= h && this.right.forEachLine(t, e, i, c, h, u);
    else {
      let m = this.lineAt(h, Xt.ByPos, i, s, a);
      t < m.from && this.left.forEachLine(t, m.from - 1, i, s, a, u), m.to >= t && m.from <= e && u(m), e > m.to && this.right.forEachLine(m.to + 1, e, i, c, h, u);
    }
  }
  replace(t, e, i) {
    let s = this.left.length + this.break;
    if (e < s)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - s, e - s, i));
    let a = [];
    t > 0 && this.decomposeLeft(t, a);
    let u = a.length;
    for (let c of i)
      a.push(c);
    if (t > 0 && B1(a, u - 1), e < this.length) {
      let c = a.length;
      this.decomposeRight(e, a), B1(a, c);
    }
    return Ne.of(a);
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
    return t.size > 2 * e.size || e.size > 2 * t.size ? Ne.of(this.break ? [t, null, e] : [t, e]) : (this.left = Bu(this.left, t), this.right = Bu(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = !1, s) {
    let { left: a, right: u } = this, c = e + a.length + this.break, h = null;
    return s && s.from <= e + a.length && s.more ? h = a = a.updateHeight(t, e, i, s) : a.updateHeight(t, e, i), s && s.from <= c + u.length && s.more ? h = u = u.updateHeight(t, c, i, s) : u.updateHeight(t, c, i), h ? this.balanced(a, u) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function B1(l, t) {
  let e, i;
  l[t] == null && (e = l[t - 1]) instanceof ve && (i = l[t + 1]) instanceof ve && l.splice(t - 1, 3, new ve(e.length + 1 + i.length));
}
const pk = 5;
class Om {
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
      let s = i.widget ? i.widget.estimatedHeight : 0, a = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let u = e - t;
      i.block ? this.addBlock(new iS(u, s, i)) : (u || a || s >= pk) && this.addLineDeco(s, a, u);
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
    let a = new Om(i, t);
    return Mt.spans(e, i, s, a, 0), a.finish(i);
  }
}
function gk(l, t, e) {
  let i = new yk();
  return Mt.compare(l, t, e, i, 0), i.changes;
}
class yk {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, s) {
    (t < e || i && i.heightRelevant || s && s.heightRelevant) && Ms(t, e, this.changes, 5);
  }
}
function vk(l, t) {
  let e = l.getBoundingClientRect(), i = l.ownerDocument, s = i.defaultView || window, a = Math.max(0, e.left), u = Math.min(s.innerWidth, e.right), c = Math.max(0, e.top), h = Math.min(s.innerHeight, e.bottom);
  for (let m = l.parentNode; m && m != i.body; )
    if (m.nodeType == 1) {
      let p = m, y = window.getComputedStyle(p);
      if ((p.scrollHeight > p.clientHeight || p.scrollWidth > p.clientWidth) && y.overflow != "visible") {
        let v = p.getBoundingClientRect();
        a = Math.max(a, v.left), u = Math.min(u, v.right), c = Math.max(c, v.top), h = Math.min(m == l.parentNode ? s.innerHeight : h, v.bottom);
      }
      m = y.position == "absolute" || y.position == "fixed" ? p.offsetParent : p.parentNode;
    } else if (m.nodeType == 11)
      m = m.host;
    else
      break;
  return {
    left: a - e.left,
    right: Math.max(a, u) - e.left,
    top: c - (e.top + t),
    bottom: Math.max(c, h) - (e.top + t)
  };
}
function bk(l) {
  let t = l.getBoundingClientRect(), e = l.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function Sk(l, t) {
  let e = l.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class Kh {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.size = i, this.displaySize = s;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i], a = e[i];
      if (s.from != a.from || s.to != a.to || s.size != a.size)
        return !1;
    }
    return !0;
  }
  draw(t, e) {
    return ft.replace({
      widget: new xk(this.displaySize * (e ? t.scaleY : t.scaleX), e)
    }).range(this.from, this.to);
  }
}
class xk extends Ii {
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
class N1 {
  constructor(t, e) {
    this.view = t, this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = L1, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Yt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = e.facet(Cm).some((s) => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new fk(i), this.stateDeco = z1(e), this.heightMap = Ne.empty().applyChanges(this.stateDeco, Rt.empty, this.heightOracle.setDoc(e.doc), [new mi(0, 0, 0, e.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ft.set(this.lineGaps.map((s) => s.draw(this, !1))), this.scrollParent = t.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? e.head : e.anchor;
      if (!t.some(({ from: a, to: u }) => s >= a && s <= u)) {
        let { from: a, to: u } = this.lineBlockAt(s);
        t.push(new Po(a, u));
      }
    }
    return this.viewports = t.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? L1 : new Dm(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(Qr(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = z1(this.state);
    let s = t.changedRanges, a = mi.extendWithRanges(s, gk(i, this.stateDeco, t ? t.changes : ae.empty(this.state.doc.length))), u = this.heightMap.height, c = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    R1(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), a), (this.heightMap.height != u || Ls) && (t.flags |= 2), c ? (this.scrollAnchorPos = t.changes.mapPos(c.from, -1), this.scrollAnchorHeight = c.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = u);
    let h = a.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
    let m = h.from != this.viewport.from || h.to != this.viewport.to;
    this.viewport = h, t.flags |= this.updateForViewport(), (m || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && (t.selectionSet || t.focusChanged) && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(zb) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: t } = this, e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, a = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? Yt.RTL : Yt.LTR;
    let u = this.heightOracle.mustRefreshForWrapping(a) || this.mustMeasureContent === "refresh", c = e.getBoundingClientRect(), h = u || this.mustMeasureContent || this.contentDOMHeight != c.height;
    this.contentDOMHeight = c.height, this.mustMeasureContent = !1;
    let m = 0, p = 0;
    if (c.width && c.height) {
      let { scaleX: T, scaleY: R } = yb(e, c);
      (T > 5e-3 && Math.abs(this.scaleX - T) > 5e-3 || R > 5e-3 && Math.abs(this.scaleY - R) > 5e-3) && (this.scaleX = T, this.scaleY = R, m |= 16, u = h = !0);
    }
    let y = (parseInt(i.paddingTop) || 0) * this.scaleY, v = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != y || this.paddingBottom != v) && (this.paddingTop = y, this.paddingBottom = v, m |= 18), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (h = !0), this.editorWidth = t.scrollDOM.clientWidth, m |= 16);
    let S = vb(this.view.contentDOM, !1).y;
    S != this.scrollParent && (this.scrollParent = S, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let w = this.getScrollOffset();
    this.scrollOffset != w && (this.scrollAnchorHeight = -1, this.scrollOffset = w), this.scrolledToBottom = Sb(this.scrollParent || t.win);
    let A = (this.printing ? Sk : vk)(e, this.paddingTop), k = A.top - this.pixelViewport.top, E = A.bottom - this.pixelViewport.bottom;
    this.pixelViewport = A;
    let _ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (_ != this.inView && (this.inView = _, _ && (h = !0)), !this.inView && !this.scrollTarget && !bk(t.dom))
      return 0;
    let V = c.width;
    if ((this.contentDOMWidth != V || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = c.width, this.editorHeight = t.scrollDOM.clientHeight, m |= 16), h) {
      let T = t.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(T) && (u = !0), u || s.lineWrapping && Math.abs(V - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: R, charWidth: U, textHeight: I } = t.docView.measureTextSize();
        u = R > 0 && s.refresh(a, R, U, I, Math.max(5, V / U), T), u && (t.docView.minWidth = 0, m |= 16);
      }
      k > 0 && E > 0 ? p = Math.max(k, E) : k < 0 && E < 0 && (p = Math.min(k, E)), R1();
      for (let R of this.viewports) {
        let U = R.from == this.viewport.from ? T : t.docView.measureVisibleLineHeights(R);
        this.heightMap = (u ? Ne.empty().applyChanges(this.stateDeco, Rt.empty, this.heightOracle, [new mi(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, u, new hk(R.from, U));
      }
      Ls && (m |= 2);
    }
    let Y = !this.viewportIsAppropriate(this.viewport, p) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return Y && (m & 2 && (m |= this.updateScaler()), this.viewport = this.getViewport(p, this.scrollTarget), m |= this.updateForViewport()), (m & 2 || Y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(u ? [] : this.lineGaps, t)), m |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), m;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), s = this.heightMap, a = this.heightOracle, { visibleTop: u, visibleBottom: c } = this, h = new Po(s.lineAt(u - i * 1e3, Xt.ByHeight, a, 0, 0).from, s.lineAt(c + (1 - i) * 1e3, Xt.ByHeight, a, 0, 0).to);
    if (e) {
      let { head: m } = e.range;
      if (m < h.from || m > h.to) {
        let p = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), y = s.lineAt(m, Xt.ByPos, a, 0, 0), v;
        e.y == "center" ? v = (y.top + y.bottom) / 2 - p / 2 : e.y == "start" || e.y == "nearest" && m < h.from ? v = y.top : v = y.bottom - p, h = new Po(s.lineAt(v - 1e3 / 2, Xt.ByHeight, a, 0, 0).from, s.lineAt(v + p + 1e3 / 2, Xt.ByHeight, a, 0, 0).to);
      }
    }
    return h;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
    return new Po(this.heightMap.lineAt(i, Xt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, Xt.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(t, Xt.ByPos, this.heightOracle, 0, 0), { bottom: a } = this.heightMap.lineAt(e, Xt.ByPos, this.heightOracle, 0, 0), { visibleTop: u, visibleBottom: c } = this;
    return (t == 0 || s <= u - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (e == this.state.doc.length || a >= c + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > u - 2 * 1e3 && a < c + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let s of t)
      e.touchesRange(s.from, s.to) || i.push(new Kh(e.mapPos(s.from), e.mapPos(s.to), s.size, s.displaySize));
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
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, a = s >> 1, u = s << 1;
    if (this.defaultTextDirection != Yt.LTR && !i)
      return [];
    let c = [], h = (p, y, v, S) => {
      if (y - p < a)
        return;
      let w = this.state.selection.main, A = [w.from];
      w.empty || A.push(w.to);
      for (let E of A)
        if (E > p && E < y) {
          h(p, E - 10, v, S), h(E + 10, y, v, S);
          return;
        }
      let k = Ak(t, (E) => E.from >= v.from && E.to <= v.to && Math.abs(E.from - p) < a && Math.abs(E.to - y) < a && !A.some((_) => E.from < _ && E.to > _));
      if (!k) {
        if (y < v.to && e && i && e.visibleRanges.some((V) => V.from <= y && V.to >= y)) {
          let V = e.moveToLineBoundary(X.cursor(y), !1, !0).head;
          V > p && (y = V);
        }
        let E = this.gapSize(v, p, y, S), _ = i || E < 2e6 ? E : 2e6;
        k = new Kh(p, y, E, _);
      }
      c.push(k);
    }, m = (p) => {
      if (p.length < u || p.type != xe.Text)
        return;
      let y = wk(p.from, p.to, this.stateDeco);
      if (y.total < u)
        return;
      let v = this.scrollTarget ? this.scrollTarget.range.head : null, S, w;
      if (i) {
        let A = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, k, E;
        if (v != null) {
          let _ = $o(y, v), V = ((this.visibleBottom - this.visibleTop) / 2 + A) / p.height;
          k = _ - V, E = _ + V;
        } else
          k = (this.visibleTop - p.top - A) / p.height, E = (this.visibleBottom - p.top + A) / p.height;
        S = Jo(y, k), w = Jo(y, E);
      } else {
        let A = y.total * this.heightOracle.charWidth, k = s * this.heightOracle.charWidth, E = 0;
        if (A > 2e6)
          for (let R of t)
            R.from >= p.from && R.from < p.to && R.size != R.displaySize && R.from * this.heightOracle.charWidth + E < this.pixelViewport.left && (E = R.size - R.displaySize);
        let _ = this.pixelViewport.left + E, V = this.pixelViewport.right + E, Y, T;
        if (v != null) {
          let R = $o(y, v), U = ((V - _) / 2 + k) / A;
          Y = R - U, T = R + U;
        } else
          Y = (_ - k) / A, T = (V + k) / A;
        S = Jo(y, Y), w = Jo(y, T);
      }
      S > p.from && h(p.from, S, p, y), w < p.to && h(w, p.to, p, y);
    };
    for (let p of this.viewportLines)
      Array.isArray(p.type) ? p.type.forEach(m) : m(p);
    return c;
  }
  gapSize(t, e, i, s) {
    let a = $o(s, i) - $o(s, e);
    return this.heightOracle.lineWrapping ? t.height * a : s.total * this.heightOracle.charWidth * a;
  }
  updateLineGaps(t) {
    Kh.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = ft.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let i = [];
    Mt.spans(e, this.viewport.from, this.viewport.to, {
      span(a, u) {
        i.push({ from: a, to: u });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let a = 0; a < i.length && !(s & 8); a++) {
        let u = this.visibleRanges[a], c = i[a];
        (u.from != c.from || u.to != c.to) && (s |= 4, t && t.mapPos(u.from, -1) == c.from && t.mapPos(u.to, 1) == c.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Qr(this.heightMap.lineAt(t, Xt.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || Qr(this.heightMap.lineAt(this.scaler.fromDOM(t), Xt.ByHeight, this.heightOracle, 0, 0), this.scaler);
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
class Po {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function wk(l, t, e) {
  let i = [], s = l, a = 0;
  return Mt.spans(e, l, t, {
    span() {
    },
    point(u, c) {
      u > s && (i.push({ from: s, to: u }), a += u - s), s = c;
    }
  }, 20), s < t && (i.push({ from: s, to: t }), a += t - s), { total: a, ranges: i };
}
function Jo({ total: l, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(l * e);
  for (let s = 0; ; s++) {
    let { from: a, to: u } = t[s], c = u - a;
    if (i <= c)
      return a + i;
    i -= c;
  }
}
function $o(l, t) {
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
function Ak(l, t) {
  for (let e of l)
    if (t(e))
      return e;
}
const L1 = {
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
function z1(l) {
  let t = l.facet(tc).filter((i) => typeof i != "function"), e = l.facet(km).filter((i) => typeof i != "function");
  return e.length && t.push(Mt.join(e)), t;
}
class Dm {
  constructor(t, e, i) {
    let s = 0, a = 0, u = 0;
    this.viewports = i.map(({ from: c, to: h }) => {
      let m = e.lineAt(c, Xt.ByPos, t, 0, 0).top, p = e.lineAt(h, Xt.ByPos, t, 0, 0).bottom;
      return s += p - m, { from: c, to: h, top: m, bottom: p, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (e.height - s);
    for (let c of this.viewports)
      c.domTop = u + (c.top - a) * this.scale, u = c.domBottom = c.domTop + (c.bottom - c.top), a = c.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let a = e < this.viewports.length ? this.viewports[e] : null;
      if (!a || t < a.top)
        return s + (t - i) * this.scale;
      if (t <= a.bottom)
        return a.domTop + (t - a.top);
      i = a.bottom, s = a.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let a = e < this.viewports.length ? this.viewports[e] : null;
      if (!a || t < a.domTop)
        return i + (t - s) / this.scale;
      if (t <= a.domBottom)
        return a.top + (t - a.domTop);
      i = a.bottom, s = a.domBottom;
    }
  }
  eq(t) {
    return t instanceof Dm ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : !1;
  }
}
function Qr(l, t) {
  if (t.scale == 1)
    return l;
  let e = t.toDOM(l.top), i = t.toDOM(l.bottom);
  return new Ai(l.from, l.length, e, i - e, Array.isArray(l._content) ? l._content.map((s) => Qr(s, t)) : l._content);
}
const tu = /* @__PURE__ */ nt.define({ combine: (l) => l.join(" ") }), Kd = /* @__PURE__ */ nt.define({ combine: (l) => l.indexOf(!0) > -1 }), Qd = /* @__PURE__ */ Zn.newName(), nS = /* @__PURE__ */ Zn.newName(), lS = /* @__PURE__ */ Zn.newName(), sS = { "&light": "." + nS, "&dark": "." + lS };
function Zd(l, t, e) {
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
const Ck = /* @__PURE__ */ Zd("." + Qd, {
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
}, sS), kk = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Qh = it.ie && it.ie_version <= 11;
class Mk {
  constructor(t) {
    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new iC(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      (it.ie && it.ie_version <= 11 || it.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && it.android && t.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(it.chrome && it.chrome_version < 126) && (this.editContext = new Ok(t), t.state.facet(hn) && (t.contentDOM.editContext = this.editContext.editContext)), Qh && (this.onCharData = (e) => {
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
    if (i.state.facet(hn) ? i.root.activeElement != this.dom : !Jr(this.dom, s))
      return;
    let a = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (a && a.isWidget() && a.widget.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    (it.ie && it.ie_version <= 11 || it.android && it.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && ta(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = ua(t.root);
    if (!e)
      return !1;
    let i = it.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && Tk(this.view, e) || e;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = Jr(this.dom, i);
    return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && lC(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, kk), Qh && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Qh && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
        let a = this.delayedAndroidKey;
        a && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = a.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && a.force && Ts(this.dom, a.key, a.keyCode));
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
    for (let a of t) {
      let u = this.readMutation(a);
      u && (u.typeOver && (s = !0), e == -1 ? { from: e, to: i } = u : (e = Math.min(u.from, e), i = Math.max(u.to, i)));
    }
    return { from: e, to: i, typeOver: s };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), s = this.selectionChanged && Jr(this.dom, this.selectionRange);
    if (t < 0 && !s)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let a = new WC(this.view, t, e, i);
    return this.view.docView.domChanged = { newSel: a.newSel ? a.newSel.main : null }, a;
  }
  // Apply pending changes, if any
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = Kb(this.view, e);
    return this.view.state == i && (e.domChanged || e.newSel && !Ru(this.view.state.selection, e.newSel.main)) && this.view.update([]), s;
  }
  readMutation(t) {
    let e = this.view.docView.tile.nearest(t.target);
    if (!e || e.isWidget())
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "childList") {
      let i = H1(e, t.previousSibling || t.target.previousSibling, -1), s = H1(e, t.nextSibling || t.target.nextSibling, 1);
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
function H1(l, t, e) {
  for (; t; ) {
    let i = Jt.get(t);
    if (i && i.parent == l)
      return i;
    let s = t.parentNode;
    t = s != l.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function _1(l, t) {
  let e = t.startContainer, i = t.startOffset, s = t.endContainer, a = t.endOffset, u = l.docView.domAtPos(l.state.selection.main.anchor, 1);
  return ta(u.node, u.offset, s, a) && ([e, i, s, a] = [s, a, e, i]), { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: a };
}
function Tk(l, t) {
  if (t.getComposedRanges) {
    let s = t.getComposedRanges(l.root)[0];
    if (s)
      return _1(l, s);
  }
  let e = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0];
  }
  return l.contentDOM.addEventListener("beforeinput", i, !0), l.dom.ownerDocument.execCommand("indent"), l.contentDOM.removeEventListener("beforeinput", i, !0), e ? _1(l, e) : null;
}
class Ok {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({
      text: t.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(t.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = t.state.selection.main, { anchor: a, head: u } = s, c = this.toEditorPos(i.updateRangeStart), h = this.toEditorPos(i.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: c, drifted: !1 });
      let m = h - c > i.text.length;
      c == this.from && a < this.from ? c = a : h == this.to && a > this.to && (h = a);
      let p = Qb(t.state.sliceDoc(c, h), i.text, (m ? s.from : s.to) - c, m ? "end" : null);
      if (!p) {
        let v = X.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Ru(v, s) || t.dispatch({ selection: v, userEvent: "select" });
        return;
      }
      let y = {
        from: p.from + c,
        to: p.toA + c,
        insert: Rt.of(i.text.slice(p.from, p.toB).split(`
`))
      };
      if ((it.mac || it.android) && y.from == u - 1 && /^\. ?$/.test(i.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (y = { from: c, to: h, insert: Rt.of([i.text.replace(".", " ")]) }), this.pendingContextChange = y, !t.state.readOnly) {
        let v = this.to - this.from + (y.to - y.from + y.insert.length);
        Tm(t, y, X.single(this.toEditorPos(i.selectionStart, v), this.toEditorPos(i.selectionEnd, v)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), y.from < y.to && !y.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(e.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], a = null;
      for (let u = this.toEditorPos(i.rangeStart), c = this.toEditorPos(i.rangeEnd); u < c; u++) {
        let h = t.coordsForChar(u);
        a = h && new DOMRect(h.left, h.top, h.right - h.left, h.bottom - h.top) || a || new DOMRect(), s.push(a);
      }
      e.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let a of i.getTextFormats()) {
        let u = a.underlineStyle, c = a.underlineThickness;
        if (!/none/i.test(u) && !/none/i.test(c)) {
          let h = this.toEditorPos(a.rangeStart), m = this.toEditorPos(a.rangeEnd);
          if (h < m) {
            let p = `text-decoration: underline ${/^[a-z]/.test(u) ? u + " " : u == "Dashed" ? "dashed " : u == "Squiggle" ? "wavy " : ""}${/thin/i.test(c) ? 1 : 2}px`;
            s.push(ft.mark({ attributes: { style: p } }).range(h, m));
          }
        }
      }
      t.dispatch({ effects: _b.of(ft.set(s)) });
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
      let s = ua(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, i = !1, s = this.pendingContextChange;
    return t.changes.iterChanges((a, u, c, h, m) => {
      if (i)
        return;
      let p = m.length - (u - a);
      if (s && u >= s.to)
        if (s.from == a && s.to == u && s.insert.eq(m)) {
          s = this.pendingContextChange = null, e += p, this.to += p;
          return;
        } else
          s = null, this.revertPending(t.state);
      if (a += e, u += e, u <= this.from)
        this.from += p, this.to += p;
      else if (a < this.to) {
        if (a < this.from || u > this.to || this.to - this.from + m.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(a), this.toContextPos(u), m.toString()), this.to += p;
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
class tt {
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
    this.dispatchTransactions = t.dispatchTransactions || i && ((s) => s.forEach((a) => i(a, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = t.root || nC(t.parent) || document, this.viewState = new N1(this, t.state || Ot.create(t)), t.scrollTo && t.scrollTo.is(Zo) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ws).map((s) => new jh(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new Mk(this), this.inputState = new IC(this), this.inputState.ensureHandlers(this.plugins), this.docView = new S1(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof oe ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
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
    let e = !1, i = !1, s, a = this.state;
    for (let v of t) {
      if (v.startState != a)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      a = v.state;
    }
    if (this.destroyed) {
      this.viewState.state = a;
      return;
    }
    let u = this.hasFocus, c = 0, h = null;
    t.some((v) => v.annotation($b)) ? (this.inputState.notifiedFocused = u, c = 1) : u != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = u, h = tS(a, u), h || (c = 1));
    let m = this.observer.delayedAndroidKey, p = null;
    if (m ? (this.observer.clearDelayedAndroidKey(), p = this.observer.readChange(), (p && !this.state.doc.eq(a.doc) || !this.state.selection.eq(a.selection)) && (p = null)) : this.observer.clear(), a.facet(Ot.phrases) != this.state.facet(Ot.phrases))
      return this.setState(a);
    s = Ou.create(this, a, t), s.flags |= c;
    let y = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let v of t) {
        if (y && (y = y.map(v.changes)), v.scrollIntoView) {
          let { main: S } = v.state.selection, { x: w, y: A } = this.state.facet(tt.cursorScrollMargin);
          y = new Os(S.empty ? S : X.cursor(S.head, S.head > S.anchor ? -1 : 1), "nearest", "nearest", A, w);
        }
        for (let S of v.effects)
          S.is(Zo) && (y = S.value.clip(this.state));
      }
      this.viewState.update(s, y), this.bidiCache = Nu.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(Kr) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((v) => v.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(tu) != s.state.facet(tu) && (this.viewState.mustMeasureContent = !0), (e || i || y || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
      for (let v of this.state.facet(jd))
        try {
          v(s);
        } catch (S) {
          Ye(this.state, S, "update listener");
        }
    (h || p) && Promise.resolve().then(() => {
      h && this.state == h.startState && this.dispatch(h), p && !Kb(this, p) && m.force && Ts(this.contentDOM, m.key, m.keyCode);
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
      this.viewState = new N1(this, t), this.plugins = t.facet(ws).map((i) => new jh(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new S1(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(ws), i = t.state.facet(ws);
    if (e != i) {
      let s = [];
      for (let a of i) {
        let u = e.indexOf(a);
        if (u < 0)
          s.push(new jh(a));
        else {
          let c = this.plugins[u];
          c.mustUpdate = t, s.push(c);
        }
      }
      for (let a of this.plugins)
        a.mustUpdate != t && a.destroy(this);
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
    let e = null, i = this.viewState.scrollParent, s = this.viewState.getScrollOffset(), { scrollAnchorPos: a, scrollAnchorHeight: u } = this.viewState;
    Math.abs(s - this.viewState.scrollOffset) > 1 && (u = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let c = 0; ; c++) {
        if (u < 0)
          if (Sb(i || this.win))
            a = -1, u = this.viewState.heightMap.height;
          else {
            let S = this.viewState.scrollAnchorAt(s);
            a = S.from, u = S.top;
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
            return Ye(this.state, w), U1;
          }
        }), y = Ou.create(this, this.state, []), v = !1;
        y.flags |= h, e ? e.flags |= h : e = y, this.updateState = 2, y.empty || (this.updatePlugins(y), this.inputState.update(y), this.updateAttrs(), v = this.docView.update(y), v && this.docViewUpdate());
        for (let S = 0; S < m.length; S++)
          if (p[S] != U1)
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
              let w = ((a < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(a).top) - u) / this.scaleY;
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
      for (let c of this.state.facet(jd))
        c(e);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Qd + " " + (this.state.facet(Kd) ? lS : nS) + " " + this.state.facet(tu);
  }
  updateAttrs() {
    let t = V1(this, Ub, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(hn) ? "true" : "false",
      class: "cm-content",
      style: `${it.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), V1(this, Cm, e);
    let i = this.observer.ignore(() => {
      let s = m1(this.contentDOM, this.contentAttrs, e), a = m1(this.dom, this.editorAttrs, t);
      return s || a;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let i of t)
      for (let s of i.effects)
        if (s.is(tt.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let a = this.announceDOM.appendChild(document.createElement("div"));
          a.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Kr);
    let t = this.state.facet(tt.cspNonce);
    Zn.mount(this.root, this.styleModules.concat(Ck).reverse(), t ? { nonce: t } : void 0);
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
    return Wh(this, t, x1(this, t, e, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(t, e) {
    return Wh(this, t, x1(this, t, e, (i) => VC(this, t.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(t, e) {
    let i = this.bidiSpans(t), s = this.textDirectionAt(t.from), a = i[e ? i.length - 1 : 0];
    return X.cursor(a.side(e, s) + t.from, a.forward(!e, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(t, e, i = !0) {
    return UC(this, t, e, i);
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
    return Wh(this, t, qC(this, t, e, i));
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
    let i = Xd(this, t, e);
    return i && i.pos;
  }
  posAndSideAtCoords(t, e = !0) {
    return this.readMeasured(), Xd(this, t, e);
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
    let s = this.state.doc.lineAt(t), a = this.bidiSpans(s), u = a[ji.find(a, t - s.from, -1, e)];
    return ca(i, u.dir == Yt.LTR == e > 0);
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
    return !this.state.facet(Lb) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
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
    if (t.length > Dk)
      return Mb(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let a of this.bidiCache)
      if (a.from == t.from && a.dir == e && (a.fresh || kb(a.isolates, i = y1(this, t))))
        return a.order;
    i || (i = y1(this, t));
    let s = fC(t.text, e, i);
    return this.bidiCache.push(new Nu(t.from, t.to, e, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || it.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      bb(this.contentDOM), this.docView.updateSelection();
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
    var i, s, a, u;
    return Zo.of(new Os(typeof t == "number" ? X.cursor(t) : t, (i = e.y) !== null && i !== void 0 ? i : "nearest", (s = e.x) !== null && s !== void 0 ? s : "nearest", (a = e.yMargin) !== null && a !== void 0 ? a : 5, (u = e.xMargin) !== null && u !== void 0 ? u : 5));
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
    return Zo.of(new Os(X.cursor(i.from), "start", "start", i.top - t, e, !0));
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
    return It.define(() => ({}), { eventHandlers: t });
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
    return It.define(() => ({}), { eventObservers: t });
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
    let i = Zn.newName(), s = [tu.of(i), Kr.of(Zd(`.${i}`, t))];
    return e && e.dark && s.push(Kd.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(t) {
    return tl.lowest(Kr.of(Zd("." + Qd, t, sS)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), s = i && Jt.get(i) || Jt.get(t);
    return ((e = s?.root) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
tt.styleModule = Kr;
tt.inputHandler = Bb;
tt.clipboardInputFilter = wm;
tt.clipboardOutputFilter = Am;
tt.scrollHandler = Hb;
tt.focusChangeEffect = Nb;
tt.perLineTextDirection = Lb;
tt.exceptionSink = Rb;
tt.updateListener = jd;
tt.editable = hn;
tt.mouseSelectionStyle = Eb;
tt.dragMovesSelection = Db;
tt.clickAddsSelectionRange = Ob;
tt.decorations = tc;
tt.blockWrappers = Vb;
tt.outerDecorations = km;
tt.atomicRanges = Aa;
tt.bidiIsolatedRanges = qb;
tt.cursorScrollMargin = /* @__PURE__ */ nt.define({
  combine: (l) => {
    let t = 5, e = 5;
    for (let i of l)
      typeof i == "number" ? t = e = i : { x: t, y: e } = i;
    return { x: t, y: e };
  }
});
tt.scrollMargins = jb;
tt.darkTheme = Kd;
tt.cspNonce = /* @__PURE__ */ nt.define({ combine: (l) => l.length ? l[0] : "" });
tt.contentAttributes = Cm;
tt.editorAttributes = Ub;
tt.lineWrapping = /* @__PURE__ */ tt.contentAttributes.of({ class: "cm-lineWrapping" });
tt.announce = /* @__PURE__ */ bt.define();
const Dk = 4096, U1 = {};
class Nu {
  constructor(t, e, i, s, a, u) {
    this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = a, this.order = u;
  }
  static update(t, e) {
    if (e.empty && !t.some((a) => a.fresh))
      return t;
    let i = [], s = t.length ? t[t.length - 1].dir : Yt.LTR;
    for (let a = Math.max(0, t.length - 10); a < t.length; a++) {
      let u = t[a];
      u.dir == s && !e.touchesRange(u.from, u.to) && i.push(new Nu(e.mapPos(u.from, 1), e.mapPos(u.to, -1), u.dir, u.isolates, !1, u.order));
    }
    return i;
  }
}
function V1(l, t, e) {
  for (let i = l.state.facet(t), s = i.length - 1; s >= 0; s--) {
    let a = i[s], u = typeof a == "function" ? a(l) : a;
    u && bm(u, e);
  }
  return e;
}
const Ek = it.mac ? "mac" : it.windows ? "win" : it.linux ? "linux" : "key";
function Rk(l, t) {
  const e = l.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let s, a, u, c;
  for (let h = 0; h < e.length - 1; ++h) {
    const m = e[h];
    if (/^(cmd|meta|m)$/i.test(m))
      c = !0;
    else if (/^a(lt)?$/i.test(m))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(m))
      a = !0;
    else if (/^s(hift)?$/i.test(m))
      u = !0;
    else if (/^mod$/i.test(m))
      t == "mac" ? c = !0 : a = !0;
    else
      throw new Error("Unrecognized modifier name: " + m);
  }
  return s && (i = "Alt-" + i), a && (i = "Ctrl-" + i), c && (i = "Meta-" + i), u && (i = "Shift-" + i), i;
}
function eu(l, t, e) {
  return t.altKey && (l = "Alt-" + l), t.ctrlKey && (l = "Ctrl-" + l), t.metaKey && (l = "Meta-" + l), e !== !1 && t.shiftKey && (l = "Shift-" + l), l;
}
const Bk = /* @__PURE__ */ tl.default(/* @__PURE__ */ tt.domEventHandlers({
  keydown(l, t) {
    return aS(rS(t.state), l, t, "editor");
  }
})), Ca = /* @__PURE__ */ nt.define({ enables: Bk }), q1 = /* @__PURE__ */ new WeakMap();
function rS(l) {
  let t = l.facet(Ca), e = q1.get(t);
  return e || q1.set(t, e = zk(t.reduce((i, s) => i.concat(s), []))), e;
}
function Nk(l, t, e) {
  return aS(rS(l.state), t, l, e);
}
let Gn = null;
const Lk = 4e3;
function zk(l, t = Ek) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (u, c) => {
    let h = i[u];
    if (h == null)
      i[u] = c;
    else if (h != c)
      throw new Error("Key binding " + u + " is used both as a regular binding and as a multi-stroke prefix");
  }, a = (u, c, h, m, p) => {
    var y, v;
    let S = e[u] || (e[u] = /* @__PURE__ */ Object.create(null)), w = c.split(/ (?!$)/).map((E) => Rk(E, t));
    for (let E = 1; E < w.length; E++) {
      let _ = w.slice(0, E).join(" ");
      s(_, !0), S[_] || (S[_] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(V) => {
          let Y = Gn = { view: V, prefix: _, scope: u };
          return setTimeout(() => {
            Gn == Y && (Gn = null);
          }, Lk), !0;
        }]
      });
    }
    let A = w.join(" ");
    s(A, !1);
    let k = S[A] || (S[A] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((v = (y = S._any) === null || y === void 0 ? void 0 : y.run) === null || v === void 0 ? void 0 : v.slice()) || []
    });
    h && k.run.push(h), m && (k.preventDefault = !0), p && (k.stopPropagation = !0);
  };
  for (let u of l) {
    let c = u.scope ? u.scope.split(" ") : ["editor"];
    if (u.any)
      for (let m of c) {
        let p = e[m] || (e[m] = /* @__PURE__ */ Object.create(null));
        p._any || (p._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: y } = u;
        for (let v in p)
          p[v].run.push((S) => y(S, Id));
      }
    let h = u[t] || u.key;
    if (h)
      for (let m of c)
        a(m, h, u.run, u.preventDefault, u.stopPropagation), u.shift && a(m, "Shift-" + h, u.shift, u.preventDefault, u.stopPropagation);
  }
  return e;
}
let Id = null;
function aS(l, t, e, i) {
  Id = t;
  let s = FA(t), a = Ve(s, 0), u = Vi(a) == s.length && s != " ", c = "", h = !1, m = !1, p = !1;
  Gn && Gn.view == e && Gn.scope == i && (c = Gn.prefix + " ", Ib.indexOf(t.keyCode) < 0 && (m = !0, Gn = null));
  let y = /* @__PURE__ */ new Set(), v = (k) => {
    if (k) {
      for (let E of k.run)
        if (!y.has(E) && (y.add(E), E(e)))
          return k.stopPropagation && (p = !0), !0;
      k.preventDefault && (k.stopPropagation && (p = !0), m = !0);
    }
    return !1;
  }, S = l[i], w, A;
  return S && (v(S[c + eu(s, t, !u)]) ? h = !0 : u && (t.altKey || t.metaKey || t.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(it.windows && t.ctrlKey && t.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(it.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (w = In[t.keyCode]) && w != s ? (v(S[c + eu(w, t, !0)]) || t.shiftKey && (A = aa[t.keyCode]) != s && A != w && v(S[c + eu(A, t, !1)])) && (h = !0) : u && t.shiftKey && v(S[c + eu(s, t, !0)]) && (h = !0), !h && v(S._any) && (h = !0)), m && (h = !0), h && p && t.stopPropagation(), Id = null, h;
}
class Tl {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(t, e, i, s, a) {
    this.className = t, this.left = e, this.top = i, this.width = s, this.height = a;
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
      let a = oS(t);
      return [new Tl(e, s.left - a.left, s.top - a.top, null, s.bottom - s.top)];
    } else
      return Hk(t, e, i);
  }
}
function oS(l) {
  let t = l.scrollDOM.getBoundingClientRect();
  return { left: (l.textDirection == Yt.LTR ? t.left : t.right - l.scrollDOM.clientWidth * l.scaleX) - l.scrollDOM.scrollLeft * l.scaleX, top: t.top - l.scrollDOM.scrollTop * l.scaleY };
}
function j1(l, t, e, i) {
  let s = l.coordsAtPos(t, e * 2);
  if (!s)
    return i;
  let a = l.dom.getBoundingClientRect(), u = (s.top + s.bottom) / 2, c = l.posAtCoords({ x: a.left + 1, y: u }), h = l.posAtCoords({ x: a.right - 1, y: u });
  return c == null || h == null ? i : { from: Math.max(i.from, Math.min(c, h)), to: Math.min(i.to, Math.max(c, h)) };
}
function Hk(l, t, e) {
  if (e.to <= l.viewport.from || e.from >= l.viewport.to)
    return [];
  let i = Math.max(e.from, l.viewport.from), s = Math.min(e.to, l.viewport.to), a = l.textDirection == Yt.LTR, u = l.contentDOM, c = u.getBoundingClientRect(), h = oS(l), m = u.querySelector(".cm-line"), p = m && window.getComputedStyle(m), y = c.left + (p ? parseInt(p.paddingLeft) + Math.min(0, parseInt(p.textIndent)) : 0), v = c.right - (p ? parseInt(p.paddingRight) : 0), S = Gd(l, i, 1), w = Gd(l, s, -1), A = S.type == xe.Text ? S : null, k = w.type == xe.Text ? w : null;
  if (A && (l.lineWrapping || S.widgetLineBreaks) && (A = j1(l, i, 1, A)), k && (l.lineWrapping || w.widgetLineBreaks) && (k = j1(l, s, -1, k)), A && k && A.from == k.from && A.to == k.to)
    return _(V(e.from, e.to, A));
  {
    let T = A ? V(e.from, null, A) : Y(S, !1), R = k ? V(null, e.to, k) : Y(w, !0), U = [];
    return (A || S).to < (k || w).from - (A && k ? 1 : 0) || S.widgetLineBreaks > 1 && T.bottom + l.defaultLineHeight / 2 < R.top ? U.push(E(y, T.bottom, v, R.top)) : T.bottom < R.top && l.elementAtHeight((T.bottom + R.top) / 2).type == xe.Text && (T.bottom = R.top = (T.bottom + R.top) / 2), _(T).concat(U).concat(_(R));
  }
  function E(T, R, U, I) {
    return new Tl(t, T - h.left, R - h.top, Math.max(0, U - T), I - R);
  }
  function _({ top: T, bottom: R, horizontal: U }) {
    let I = [];
    for (let F = 0; F < U.length; F += 2)
      I.push(E(U[F], T, U[F + 1], R));
    return I;
  }
  function V(T, R, U) {
    let I = 1e9, F = -1e9, ct = [];
    function at(yt, vt, H, Q, lt) {
      let ut = l.coordsAtPos(yt, yt == U.to ? -2 : 2), M = l.coordsAtPos(H, H == U.from ? 2 : -2);
      !ut || !M || (I = Math.min(ut.top, M.top, I), F = Math.max(ut.bottom, M.bottom, F), lt == Yt.LTR ? ct.push(a && vt ? y : ut.left, a && Q ? v : M.right) : ct.push(!a && Q ? y : M.left, !a && vt ? v : ut.right));
    }
    let et = T ?? U.from, dt = R ?? U.to;
    for (let yt of l.visibleRanges)
      if (yt.to > et && yt.from < dt)
        for (let vt = Math.max(yt.from, et), H = Math.min(yt.to, dt); ; ) {
          let Q = l.state.doc.lineAt(vt);
          for (let lt of l.bidiSpans(Q)) {
            let ut = lt.from + Q.from, M = lt.to + Q.from;
            if (ut >= H)
              break;
            M > vt && at(Math.max(ut, vt), T == null && ut <= et, Math.min(M, H), R == null && M >= dt, lt.dir);
          }
          if (vt = Q.to + 1, vt >= H)
            break;
        }
    return ct.length == 0 && at(et, T == null, dt, R == null, l.textDirection), { top: I, bottom: F, horizontal: ct };
  }
  function Y(T, R) {
    let U = c.top + (R ? T.top : T.bottom);
    return { top: U, bottom: U, horizontal: [] };
  }
}
function _k(l, t) {
  return l.constructor == t.constructor && l.eq(t);
}
class Uk {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(bu) != t.state.facet(bu) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== !1 && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, i = t.facet(bu);
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
    if (t.length != this.drawn.length || t.some((e, i) => !_k(e, this.drawn[i]))) {
      let e = this.dom.firstChild, i = 0;
      for (let s of t)
        s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
      for (; e; ) {
        let s = e.nextSibling;
        e.remove(), e = s;
      }
      this.drawn = t, it.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const bu = /* @__PURE__ */ nt.define();
function uS(l) {
  return [
    It.define((t) => new Uk(t, l)),
    bu.of(l)
  ];
}
const zs = /* @__PURE__ */ nt.define({
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
function Vk(l = {}) {
  return [
    zs.of(l),
    qk,
    jk,
    Yk,
    zb.of(!0)
  ];
}
function cS(l) {
  return l.startState.facet(zs) != l.state.facet(zs);
}
const qk = /* @__PURE__ */ uS({
  above: !0,
  markers(l) {
    let { state: t } = l, e = t.facet(zs), i = [];
    for (let s of t.selection.ranges) {
      let a = s == t.selection.main;
      if (s.empty || e.drawRangeCursor && !(a && it.ios && e.iosSelectionHandles)) {
        let u = a ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", c = s.empty ? s : X.cursor(s.head, s.assoc);
        for (let h of Tl.forRange(l, u, c))
          i.push(h);
      }
    }
    return i;
  },
  update(l, t) {
    l.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let e = cS(l);
    return e && Y1(l.state, t), l.docChanged || l.selectionSet || e;
  },
  mount(l, t) {
    Y1(t.state, l);
  },
  class: "cm-cursorLayer"
});
function Y1(l, t) {
  t.style.animationDuration = l.facet(zs).cursorBlinkRate + "ms";
}
const jk = /* @__PURE__ */ uS({
  above: !1,
  markers(l) {
    let t = [], { main: e, ranges: i } = l.state.selection;
    for (let s of i)
      if (!s.empty)
        for (let a of Tl.forRange(l, "cm-selectionBackground", s))
          t.push(a);
    if (it.ios && !e.empty && l.state.facet(zs).iosSelectionHandles) {
      for (let s of Tl.forRange(l, "cm-selectionHandle cm-selectionHandle-start", X.cursor(e.from, 1)))
        t.push(s);
      for (let s of Tl.forRange(l, "cm-selectionHandle cm-selectionHandle-end", X.cursor(e.to, 1)))
        t.push(s);
    }
    return t;
  },
  update(l, t) {
    return l.docChanged || l.selectionSet || l.viewportChanged || cS(l);
  },
  class: "cm-selectionLayer"
}), Yk = /* @__PURE__ */ tl.highest(/* @__PURE__ */ tt.theme({
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
})), fS = /* @__PURE__ */ bt.define({
  map(l, t) {
    return l == null ? null : t.mapPos(l);
  }
}), Zr = /* @__PURE__ */ Oe.define({
  create() {
    return null;
  },
  update(l, t) {
    return l != null && (l = t.changes.mapPos(l)), t.effects.reduce((e, i) => i.is(fS) ? i.value : e, l);
  }
}), Gk = /* @__PURE__ */ It.fromClass(class {
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
    this.view.state.field(Zr) != l && this.view.dispatch({ effects: fS.of(l) });
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
function Xk() {
  return [Zr, Gk];
}
function G1(l, t, e, i, s) {
  t.lastIndex = 0;
  for (let a = l.iterRange(e, i), u = e, c; !a.next().done; u += a.value.length)
    if (!a.lineBreak)
      for (; c = t.exec(a.value); )
        s(u + c.index, c);
}
function Wk(l, t) {
  let e = l.visibleRanges;
  if (e.length == 1 && e[0].from == l.viewport.from && e[0].to == l.viewport.to)
    return e;
  let i = [];
  for (let { from: s, to: a } of e)
    s = Math.max(l.state.doc.lineAt(s).from, s - t), a = Math.min(l.state.doc.lineAt(a).to, a + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = a : i.push({ from: s, to: a });
  return i;
}
class Kk {
  /**
  Create a decorator.
  */
  constructor(t) {
    const { regexp: e, decoration: i, decorate: s, boundary: a, maxLength: u = 1e3 } = t;
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
    this.boundary = a, this.maxLength = u;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(t) {
    let e = new Ki(), i = e.add.bind(e);
    for (let { from: s, to: a } of Wk(t, this.maxLength))
      G1(t.state.doc, this.regexp, s, a, (u, c) => this.addMatch(c, t, u, i));
    return e.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(t, e) {
    let i = 1e9, s = -1;
    return t.docChanged && t.changes.iterChanges((a, u, c, h) => {
      h >= t.view.viewport.from && c <= t.view.viewport.to && (i = Math.min(c, i), s = Math.max(h, s));
    }), t.viewportMoved || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e;
  }
  updateRange(t, e, i, s) {
    for (let a of t.visibleRanges) {
      let u = Math.max(a.from, i), c = Math.min(a.to, s);
      if (c >= u) {
        let h = t.state.doc.lineAt(u), m = h.to < c ? t.state.doc.lineAt(c) : h, p = Math.max(a.from, h.from), y = Math.min(a.to, m.to);
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
        let v = [], S, w = (A, k, E) => v.push(E.range(A, k));
        if (h == m)
          for (this.regexp.lastIndex = p - h.from; (S = this.regexp.exec(h.text)) && S.index < y - h.from; )
            this.addMatch(S, t, S.index + h.from, w);
        else
          G1(t.state.doc, this.regexp, p, y, (A, k) => this.addMatch(k, t, A, w));
        e = e.update({ filterFrom: p, filterTo: y, filter: (A, k) => A < p || k > y, add: v });
      }
    }
    return e;
  }
}
const Fd = /x/.unicode != null ? "gu" : "g", Qk = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Fd), Zk = {
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
let Zh = null;
function Ik() {
  var l;
  if (Zh == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    Zh = ((l = t.tabSize) !== null && l !== void 0 ? l : t.MozTabSize) != null;
  }
  return Zh || !1;
}
const Su = /* @__PURE__ */ nt.define({
  combine(l) {
    let t = Zi(l, {
      render: null,
      specialChars: Qk,
      addSpecialChars: null
    });
    return (t.replaceTabs = !Ik()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, Fd)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Fd)), t;
  }
});
function Fk(l = {}) {
  return [Su.of(l), Pk()];
}
let X1 = null;
function Pk() {
  return X1 || (X1 = It.fromClass(class {
    constructor(l) {
      this.view = l, this.decorations = ft.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(l.state.facet(Su)), this.decorations = this.decorator.createDeco(l);
    }
    makeDecorator(l) {
      return new Kk({
        regexp: l.specialChars,
        decoration: (t, e, i) => {
          let { doc: s } = e.state, a = Ve(t[0], 0);
          if (a == 9) {
            let u = s.lineAt(i), c = e.state.tabSize, h = Vs(u.text, c, i - u.from);
            return ft.replace({
              widget: new eM((c - h % c) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[a] || (this.decorationCache[a] = ft.replace({ widget: new tM(l, a) }));
        },
        boundary: l.replaceTabs ? void 0 : /[^]/
      });
    }
    update(l) {
      let t = l.state.facet(Su);
      l.startState.facet(Su) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(l.view)) : this.decorations = this.decorator.updateDeco(l, this.decorations);
    }
  }, {
    decorations: (l) => l.decorations
  }));
}
const Jk = "•";
function $k(l) {
  return l >= 32 ? Jk : l == 10 ? "␤" : String.fromCharCode(9216 + l);
}
class tM extends Ii {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = $k(this.code), i = t.state.phrase("Control character") + " " + (Zk[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
    if (s)
      return s;
    let a = document.createElement("span");
    return a.textContent = e, a.title = i, a.setAttribute("aria-label", i), a.className = "cm-specialChar", a;
  }
  ignoreEvent() {
    return !1;
  }
}
class eM extends Ii {
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
function iM() {
  return lM;
}
const nM = /* @__PURE__ */ ft.line({ class: "cm-activeLine" }), lM = /* @__PURE__ */ It.fromClass(class {
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
      s.from > t && (e.push(nM.range(s.from)), t = s.from);
    }
    return ft.set(e);
  }
}, {
  decorations: (l) => l.decorations
});
class sM extends Ii {
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
    let i = window.getComputedStyle(t.parentNode), s = ca(e[0], i.direction != "rtl"), a = parseInt(i.lineHeight);
    return s.bottom - s.top > a * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + a } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function rM(l) {
  let t = It.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = l ? ft.set([ft.widget({ widget: new sM(l), side: 1 }).range(0)]) : ft.none;
    }
    get decorations() {
      return this.view.state.doc.length ? ft.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
  return typeof l == "string" ? [
    t,
    tt.contentAttributes.of({ "aria-placeholder": l })
  ] : t;
}
const Pd = 2e3;
function aM(l, t, e) {
  let i = Math.min(t.line, e.line), s = Math.max(t.line, e.line), a = [];
  if (t.off > Pd || e.off > Pd || t.col < 0 || e.col < 0) {
    let u = Math.min(t.off, e.off), c = Math.max(t.off, e.off);
    for (let h = i; h <= s; h++) {
      let m = l.doc.line(h);
      m.length <= c && a.push(X.range(m.from + u, m.to + c));
    }
  } else {
    let u = Math.min(t.col, e.col), c = Math.max(t.col, e.col);
    for (let h = i; h <= s; h++) {
      let m = l.doc.line(h), p = Ed(m.text, u, l.tabSize, !0);
      if (p < 0)
        a.push(X.cursor(m.to));
      else {
        let y = Ed(m.text, c, l.tabSize);
        a.push(X.range(m.from + p, m.from + y));
      }
    }
  }
  return a;
}
function oM(l, t) {
  let e = l.coordsAtPos(l.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / l.defaultCharacterWidth)) : -1;
}
function W1(l, t) {
  let e = l.posAtCoords({ x: t.clientX, y: t.clientY }, !1), i = l.state.doc.lineAt(e), s = e - i.from, a = s > Pd ? -1 : s == i.length ? oM(l, t.clientX) : Vs(i.text, l.state.tabSize, e - i.from);
  return { line: i.number, col: a, off: s };
}
function uM(l, t) {
  let e = W1(l, t), i = l.state.selection;
  return e ? {
    update(s) {
      if (s.docChanged) {
        let a = s.changes.mapPos(s.startState.doc.line(e.line).from), u = s.state.doc.lineAt(a);
        e = { line: u.number, col: e.col, off: Math.min(e.off, u.length) }, i = i.map(s.changes);
      }
    },
    get(s, a, u) {
      let c = W1(l, s);
      if (!c)
        return i;
      let h = aM(l.state, e, c);
      return h.length ? u ? X.create(h.concat(i.ranges)) : X.create(h) : i;
    }
  } : null;
}
function cM(l) {
  let t = ((e) => e.altKey && e.button == 0);
  return tt.mouseSelectionStyle.of((e, i) => t(i) ? uM(e, i) : null);
}
const fM = {
  Alt: [18, (l) => !!l.altKey],
  Control: [17, (l) => !!l.ctrlKey],
  Shift: [16, (l) => !!l.shiftKey],
  Meta: [91, (l) => !!l.metaKey]
}, hM = { style: "cursor: crosshair" };
function dM(l = {}) {
  let [t, e] = fM[l.key || "Alt"], i = It.fromClass(class {
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
    tt.contentAttributes.of((s) => {
      var a;
      return !((a = s.plugin(i)) === null || a === void 0) && a.isDown ? hM : null;
    })
  ];
}
const iu = "-10000px";
class hS {
  constructor(t, e, i, s) {
    this.facet = e, this.createTooltipView = i, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter((u) => u);
    let a = null;
    this.tooltipViews = this.tooltips.map((u) => a = i(u, a));
  }
  update(t, e) {
    var i;
    let s = t.state.facet(this.facet), a = s.filter((h) => h);
    if (s === this.input) {
      for (let h of this.tooltipViews)
        h.update && h.update(t);
      return !1;
    }
    let u = [], c = e ? [] : null;
    for (let h = 0; h < a.length; h++) {
      let m = a[h], p = -1;
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
    return e && (c.forEach((h, m) => e[m] = h), e.length = c.length), this.input = s, this.tooltips = a, this.tooltipViews = u, !0;
  }
}
function mM(l) {
  let t = l.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const Ih = /* @__PURE__ */ nt.define({
  combine: (l) => {
    var t, e, i;
    return {
      position: it.ios ? "absolute" : ((t = l.find((s) => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = l.find((s) => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((i = l.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || mM
    };
  }
}), K1 = /* @__PURE__ */ new WeakMap(), Em = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.view = l, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = l.state.facet(Ih);
    this.position = t.position, this.parent = t.parent, this.classes = l.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new hS(l, Rm, (e, i) => this.createTooltip(e, i), (e) => {
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
    let e = t || l.geometryChanged, i = l.state.facet(Ih);
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
    return e.dom.style.position = this.position, e.dom.style.top = iu, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
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
      let { dom: a } = this.manager.tooltipViews[0];
      if (it.safari) {
        let u = a.getBoundingClientRect();
        e = Math.abs(u.top + 1e4) > 1 || Math.abs(u.left) > 1;
      } else
        e = !!a.offsetParent && a.offsetParent != this.container.ownerDocument.body;
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let a = this.parent.getBoundingClientRect();
        a.width && a.height && (l = a.width / this.parent.offsetWidth, t = a.height / this.parent.offsetHeight);
      } else
        ({ scaleX: l, scaleY: t } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = Mm(this.view);
    return {
      visible: {
        left: i.left + s.left,
        top: i.top + s.top,
        right: i.right - s.right,
        bottom: i.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((a, u) => {
        let c = this.manager.tooltipViews[u];
        return c.getCoords ? c.getCoords(a.pos) : this.view.coordsAtPos(a.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: a }) => a.getBoundingClientRect()),
      space: this.view.state.facet(Ih).tooltipSpace(this.view),
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
    let { visible: e, space: i, scaleX: s, scaleY: a } = l, u = [];
    for (let c = 0; c < this.manager.tooltips.length; c++) {
      let h = this.manager.tooltips[c], m = this.manager.tooltipViews[c], { dom: p } = m, y = l.pos[c], v = l.size[c];
      if (!y || h.clip !== !1 && (y.bottom <= Math.max(e.top, i.top) || y.top >= Math.min(e.bottom, i.bottom) || y.right < Math.max(e.left, i.left) - 0.1 || y.left > Math.min(e.right, i.right) + 0.1)) {
        p.style.top = iu;
        continue;
      }
      let S = h.arrow ? m.dom.querySelector(".cm-tooltip-arrow") : null, w = S ? 7 : 0, A = v.right - v.left, k = (t = K1.get(m)) !== null && t !== void 0 ? t : v.bottom - v.top, E = m.offset || gM, _ = this.view.textDirection == Yt.LTR, V = v.width > i.right - i.left ? _ ? i.left : i.right - v.width : _ ? Math.max(i.left, Math.min(y.left - (S ? 14 : 0) + E.x, i.right - A)) : Math.min(Math.max(i.left, y.left - A + (S ? 14 : 0) - E.x), i.right - A), Y = this.above[c];
      !h.strictSide && (Y ? y.top - k - w - E.y < i.top : y.bottom + k + w + E.y > i.bottom) && Y == i.bottom - y.bottom > y.top - i.top && (Y = this.above[c] = !Y);
      let T = (Y ? y.top - i.top : i.bottom - y.bottom) - w;
      if (T < k && m.resize !== !1) {
        if (T < this.view.defaultLineHeight) {
          p.style.top = iu;
          continue;
        }
        K1.set(m, k), p.style.height = (k = T) / a + "px";
      } else p.style.height && (p.style.height = "");
      let R = Y ? y.top - k - w - E.y : y.bottom + w + E.y, U = V + A;
      if (m.overlap !== !0)
        for (let I of u)
          I.left < U && I.right > V && I.top < R + k && I.bottom > R && (R = Y ? I.top - k - 2 - w : I.bottom + w + 2);
      if (this.position == "absolute" ? (p.style.top = (R - l.parent.top) / a + "px", Q1(p, (V - l.parent.left) / s)) : (p.style.top = R / a + "px", Q1(p, V / s)), S) {
        let I = y.left + (_ ? E.x : -E.x) - (V + 14 - 7);
        S.style.left = I / s + "px";
      }
      m.overlap !== !0 && u.push({ left: V, top: R, right: U, bottom: R + k }), p.classList.toggle("cm-tooltip-above", Y), p.classList.toggle("cm-tooltip-below", !Y), m.positioned && m.positioned(l.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let l of this.manager.tooltipViews)
        l.dom.style.top = iu;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function Q1(l, t) {
  let e = parseInt(l.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (l.style.left = t + "px");
}
const pM = /* @__PURE__ */ tt.baseTheme({
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
}), gM = { x: 0, y: 0 }, Rm = /* @__PURE__ */ nt.define({
  enables: [Em, pM]
}), Lu = /* @__PURE__ */ nt.define({
  combine: (l) => l.reduce((t, e) => t.concat(e), [])
});
class lc {
  // Needs to be static so that host tooltip instances always match
  static create(t) {
    return new lc(t);
  }
  constructor(t) {
    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new hS(t, Lu, (e, i) => this.createHostedView(e, i), (e) => e.dom.remove());
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
const yM = /* @__PURE__ */ Rm.compute([Lu], (l) => {
  let t = l.facet(Lu);
  return t.length === 0 ? null : {
    pos: Math.min(...t.map((e) => e.pos)),
    end: Math.max(...t.map((e) => {
      var i;
      return (i = e.end) !== null && i !== void 0 ? i : e.pos;
    })),
    create: lc.create,
    above: t[0].above,
    arrow: t.some((e) => e.arrow)
  };
});
class vM {
  constructor(t, e, i, s, a) {
    this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = a, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
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
    let s, a = 1;
    if (i.isWidget())
      s = i.posAtStart;
    else {
      if (s = t.posAtCoords(e), s == null)
        return;
      let c = t.coordsAtPos(s);
      if (!c || e.y < c.top || e.y > c.bottom || e.x < c.left - t.defaultCharacterWidth || e.x > c.right + t.defaultCharacterWidth)
        return;
      let h = t.bidiSpans(t.state.doc.lineAt(s)).find((p) => p.from <= s && p.to >= s), m = h && h.dir == Yt.RTL ? -1 : 1;
      a = e.x < c.left ? -m : m;
    }
    let u = this.source(t, s, a);
    if (u?.then) {
      let c = this.pending = { pos: s };
      u.then((h) => {
        this.pending == c && (this.pending = null, h && !(Array.isArray(h) && !h.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(h) ? h : [h]) }));
      }, (h) => Ye(t.state, h, "hover tooltip"));
    } else u && !(Array.isArray(u) && !u.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(u) ? u : [u]) });
  }
  get tooltip() {
    let t = this.view.plugin(Em), e = t ? t.manager.tooltips.findIndex((i) => i.create == lc.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, i;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: a } = this;
    if (s.length && a && !bM(a.dom, t) || this.pending) {
      let { pos: u } = s[0] || this.pending, c = (i = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : u;
      (u == c ? this.view.posAtCoords(this.lastMove) != u : !SM(this.view, u, c, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
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
const nu = 4;
function bM(l, t) {
  let { left: e, right: i, top: s, bottom: a } = l.getBoundingClientRect(), u;
  if (u = l.querySelector(".cm-tooltip-arrow")) {
    let c = u.getBoundingClientRect();
    s = Math.min(c.top, s), a = Math.max(c.bottom, a);
  }
  return t.clientX >= e - nu && t.clientX <= i + nu && t.clientY >= s - nu && t.clientY <= a + nu;
}
function SM(l, t, e, i, s, a) {
  let u = l.scrollDOM.getBoundingClientRect(), c = l.documentTop + l.documentPadding.top + l.contentHeight;
  if (u.left > i || u.right < i || u.top > s || Math.min(u.bottom, c) < s)
    return !1;
  let h = l.posAtCoords({ x: i, y: s }, !1);
  return h >= t && h <= e;
}
function xM(l, t = {}) {
  let e = bt.define(), i = Oe.define({
    create() {
      return [];
    },
    update(s, a) {
      if (s.length && (t.hideOnChange && (a.docChanged || a.selection) ? s = [] : t.hideOn && (s = s.filter((u) => !t.hideOn(a, u))), a.docChanged)) {
        let u = [];
        for (let c of s) {
          let h = a.changes.mapPos(c.pos, -1, Be.TrackDel);
          if (h != null) {
            let m = Object.assign(/* @__PURE__ */ Object.create(null), c);
            m.pos = h, m.end != null && (m.end = a.changes.mapPos(m.end)), u.push(m);
          }
        }
        s = u;
      }
      for (let u of a.effects)
        u.is(e) && (s = u.value), u.is(wM) && (s = []);
      return s;
    },
    provide: (s) => Lu.from(s)
  });
  return {
    active: i,
    extension: [
      i,
      It.define((s) => new vM(
        s,
        l,
        i,
        e,
        t.hoverTime || 300
        /* Hover.Time */
      )),
      yM
    ]
  };
}
function dS(l, t) {
  let e = l.plugin(Em);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
const wM = /* @__PURE__ */ bt.define(), Z1 = /* @__PURE__ */ nt.define({
  combine(l) {
    let t, e;
    for (let i of l)
      t = t || i.topContainer, e = e || i.bottomContainer;
    return { topContainer: t, bottomContainer: e };
  }
});
function Bm(l, t) {
  let e = l.plugin(mS), i = e ? e.specs.indexOf(t) : -1;
  return i > -1 ? e.panels[i] : null;
}
const mS = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.input = l.state.facet(ha), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(l));
    let t = l.state.facet(Z1);
    this.top = new lu(l, !0, t.topContainer), this.bottom = new lu(l, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(l) {
    let t = l.state.facet(Z1);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new lu(l.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new lu(l.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = l.state.facet(ha);
    if (e != this.input) {
      let i = e.filter((h) => h), s = [], a = [], u = [], c = [];
      for (let h of i) {
        let m = this.specs.indexOf(h), p;
        m < 0 ? (p = h(l.view), c.push(p)) : (p = this.panels[m], p.update && p.update(l)), s.push(p), (p.top ? a : u).push(p);
      }
      this.specs = i, this.panels = s, this.top.sync(a), this.bottom.sync(u);
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
  provide: (l) => tt.scrollMargins.of((t) => {
    let e = t.plugin(l);
    return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
  })
});
class lu {
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
          t = I1(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = I1(t);
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
function I1(l) {
  let t = l.nextSibling;
  return l.remove(), t;
}
const ha = /* @__PURE__ */ nt.define({
  enables: mS
});
function AM(l, t) {
  let e, i = new Promise((u) => e = u), s = (u) => CM(u, t, e);
  l.state.field(Fh, !1) ? l.dispatch({ effects: pS.of(s) }) : l.dispatch({ effects: bt.appendConfig.of(Fh.init(() => [s])) });
  let a = gS.of(s);
  return { close: a, result: i.then((u) => ((l.win.queueMicrotask || ((h) => l.win.setTimeout(h, 10)))(() => {
    l.state.field(Fh).indexOf(s) > -1 && l.dispatch({ effects: a });
  }), u)) };
}
const Fh = /* @__PURE__ */ Oe.define({
  create() {
    return [];
  },
  update(l, t) {
    for (let e of t.effects)
      e.is(pS) ? l = [e.value].concat(l) : e.is(gS) && (l = l.filter((i) => i != e.value));
    return l;
  },
  provide: (l) => ha.computeN([l], (t) => t.field(l))
}), pS = /* @__PURE__ */ bt.define(), gS = /* @__PURE__ */ bt.define();
function CM(l, t, e) {
  let i = t.content ? t.content(l, () => u(null)) : null;
  if (!i) {
    if (i = Vt("form"), t.input) {
      let c = Vt("input", t.input);
      /^(text|password|number|email|tel|url)$/.test(c.type) && c.classList.add("cm-textfield"), c.name || (c.name = "input"), i.appendChild(Vt("label", (t.label || "") + ": ", c));
    } else
      i.appendChild(document.createTextNode(t.label || ""));
    i.appendChild(document.createTextNode(" ")), i.appendChild(Vt("button", { class: "cm-button", type: "submit" }, t.submitLabel || "OK"));
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
  let a = Vt("div", i, Vt("button", {
    onclick: () => u(null),
    "aria-label": l.state.phrase("close"),
    class: "cm-dialog-close",
    type: "button"
  }, ["×"]));
  t.class && (a.className = t.class), a.classList.add("cm-dialog");
  function u(c) {
    a.contains(a.ownerDocument.activeElement) && l.focus(), e(c);
  }
  return {
    dom: a,
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
const xu = /* @__PURE__ */ nt.define(), kM = /* @__PURE__ */ nt.define(), MM = {
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
}, ia = /* @__PURE__ */ nt.define();
function TM(l) {
  return [yS(), ia.of({ ...MM, ...l })];
}
const F1 = /* @__PURE__ */ nt.define({
  combine: (l) => l.some((t) => t)
});
function yS(l) {
  return [
    OM
  ];
}
const OM = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.view = l, this.domAfter = null, this.prevViewport = l.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = l.state.facet(ia).map((t) => new J1(l, t)), this.fixed = !l.state.facet(F1);
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
    this.view.state.facet(F1) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = l.view.viewport;
  }
  syncGutters(l) {
    let t = this.dom.nextSibling;
    l && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let e = Mt.iter(this.view.state.facet(xu), this.view.viewport.from), i = [], s = this.gutters.map((a) => new DM(a, this.view.viewport, -this.view.documentPadding.top));
    for (let a of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(a.type)) {
        let u = !0;
        for (let c of a.type)
          if (c.type == xe.Text && u) {
            Jd(e, i, c.from);
            for (let h of s)
              h.line(this.view, c, i);
            u = !1;
          } else if (c.widget)
            for (let h of s)
              h.widget(this.view, c);
      } else if (a.type == xe.Text) {
        Jd(e, i, a.from);
        for (let u of s)
          u.line(this.view, a, i);
      } else if (a.widget)
        for (let u of s)
          u.widget(this.view, a);
    for (let a of s)
      a.finish();
    l && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(l) {
    let t = l.startState.facet(ia), e = l.state.facet(ia), i = l.docChanged || l.heightChanged || l.viewportChanged || !Mt.eq(l.startState.facet(xu), l.state.facet(xu), l.view.viewport.from, l.view.viewport.to);
    if (t == e)
      for (let s of this.gutters)
        s.update(l) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let a of e) {
        let u = t.indexOf(a);
        u < 0 ? s.push(new J1(this.view, a)) : (this.gutters[u].update(l), s.push(this.gutters[u]));
      }
      for (let a of this.gutters)
        a.dom.remove(), s.indexOf(a) < 0 && a.destroy();
      for (let a of s)
        a.config.side == "after" ? this.getDOMAfter().appendChild(a.dom) : this.dom.appendChild(a.dom);
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
  provide: (l) => tt.scrollMargins.of((t) => {
    let e = t.plugin(l);
    if (!e || e.gutters.length == 0 || !e.fixed)
      return null;
    let i = e.dom.offsetWidth * t.scaleX, s = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
    return t.textDirection == Yt.LTR ? { left: i, right: s } : { right: i, left: s };
  })
});
function P1(l) {
  return Array.isArray(l) ? l : [l];
}
function Jd(l, t, e) {
  for (; l.value && l.from <= e; )
    l.from == e && t.push(l.value), l.next();
}
class DM {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = Mt.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: s } = this, a = (e.top - this.height) / t.scaleY, u = e.height / t.scaleY;
    if (this.i == s.elements.length) {
      let c = new vS(t, u, a, i);
      s.elements.push(c), s.dom.appendChild(c.dom);
    } else
      s.elements[this.i].update(t, u, a, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let s = [];
    Jd(this.cursor, s, e.from), i.length && (s = s.concat(i));
    let a = this.gutter.config.lineMarker(t, e, s);
    a && s.unshift(a);
    let u = this.gutter;
    s.length == 0 && !u.config.renderEmptyElements || this.addElement(t, e, s);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e), s = i ? [i] : null;
    for (let a of t.state.facet(kM)) {
      let u = a(t, e.widget, e);
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
class J1 {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let a = s.target, u;
        if (a != this.dom && this.dom.contains(a)) {
          for (; a.parentNode != this.dom; )
            a = a.parentNode;
          let h = a.getBoundingClientRect();
          u = (h.top + h.bottom) / 2;
        } else
          u = s.clientY;
        let c = t.lineBlockAtHeight(u - t.documentTop);
        e.domEventHandlers[i](t, c, s) && s.preventDefault();
      });
    this.markers = P1(e.markers(t)), e.initialSpacer && (this.spacer = new vS(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = P1(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
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
class vS {
  constructor(t, e, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s);
  }
  update(t, e, i, s) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), EM(this.markers, s) || this.setMarkers(t, s);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let a = 0, u = 0; ; ) {
      let c = u, h = a < e.length ? e[a++] : null, m = !1;
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
function EM(l, t) {
  if (l.length != t.length)
    return !1;
  for (let e = 0; e < l.length; e++)
    if (!l[e].compare(t[e]))
      return !1;
  return !0;
}
const RM = /* @__PURE__ */ nt.define(), BM = /* @__PURE__ */ nt.define(), As = /* @__PURE__ */ nt.define({
  combine(l) {
    return Zi(l, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let s in e) {
          let a = i[s], u = e[s];
          i[s] = a ? (c, h, m) => a(c, h, m) || u(c, h, m) : u;
        }
        return i;
      }
    });
  }
});
class Ph extends pn {
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
function Jh(l, t) {
  return l.state.facet(As).formatNumber(t, l.state);
}
const NM = /* @__PURE__ */ ia.compute([As], (l) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(RM);
  },
  lineMarker(t, e, i) {
    return i.some((s) => s.toDOM) ? null : new Ph(Jh(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: (t, e, i) => {
    for (let s of t.state.facet(BM)) {
      let a = s(t, e, i);
      if (a)
        return a;
    }
    return null;
  },
  lineMarkerChange: (t) => t.startState.facet(As) != t.state.facet(As),
  initialSpacer(t) {
    return new Ph(Jh(t, $1(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let i = Jh(e.view, $1(e.view.state.doc.lines));
    return i == t.number ? t : new Ph(i);
  },
  domEventHandlers: l.facet(As).domEventHandlers,
  side: "before"
}));
function LM(l = {}) {
  return [
    As.of(l),
    yS(),
    NM
  ];
}
function $1(l) {
  let t = 9;
  for (; t < l; )
    t = t * 10 + 9;
  return t;
}
const zM = /* @__PURE__ */ new class extends pn {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), HM = /* @__PURE__ */ xu.compute(["selection"], (l) => {
  let t = [], e = -1;
  for (let i of l.selection.ranges) {
    let s = l.doc.lineAt(i.head).from;
    s > e && (e = s, t.push(zM.range(s)));
  }
  return Mt.of(t);
});
function _M() {
  return HM;
}
const UM = 1024;
let VM = 0;
class $h {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class Dt {
  /**
  Create a new node prop type.
  */
  constructor(t = {}) {
    this.id = VM++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
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
Dt.closedBy = new Dt({ deserialize: (l) => l.split(" ") });
Dt.openedBy = new Dt({ deserialize: (l) => l.split(" ") });
Dt.group = new Dt({ deserialize: (l) => l.split(" ") });
Dt.isolate = new Dt({ deserialize: (l) => {
  if (l && l != "rtl" && l != "ltr" && l != "auto")
    throw new RangeError("Invalid value for isolate: " + l);
  return l || "auto";
} });
Dt.contextHash = new Dt({ perNode: !0 });
Dt.lookAhead = new Dt({ perNode: !0 });
Dt.mounted = new Dt({ perNode: !0 });
class na {
  constructor(t, e, i, s = !1) {
    this.tree = t, this.overlay = e, this.parser = i, this.bracketed = s;
  }
  /**
  @internal
  */
  static get(t) {
    return t && t.props && t.props[Dt.mounted.id];
  }
}
const qM = /* @__PURE__ */ Object.create(null);
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
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : qM, i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), s = new vi(t.name || "", e, t.id, i);
    if (t.props) {
      for (let a of t.props)
        if (Array.isArray(a) || (a = a(s)), a) {
          if (a[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[a[0].id] = a[1];
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
      let e = this.prop(Dt.group);
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
      for (let s = i.prop(Dt.group), a = -1; a < (s ? s.length : 0); a++) {
        let u = e[a < 0 ? i.name : s[a]];
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
const su = /* @__PURE__ */ new WeakMap(), tv = /* @__PURE__ */ new WeakMap();
var ie;
(function(l) {
  l[l.ExcludeBuffers = 1] = "ExcludeBuffers", l[l.IncludeAnonymous = 2] = "IncludeAnonymous", l[l.IgnoreMounts = 4] = "IgnoreMounts", l[l.IgnoreOverlays = 8] = "IgnoreOverlays", l[l.EnterBracketed = 16] = "EnterBracketed";
})(ie || (ie = {}));
class Se {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(t, e, i, s, a) {
    if (this.type = t, this.children = e, this.positions = i, this.length = s, this.props = null, a && a.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [u, c] of a)
        this.props[typeof u == "number" ? u : u.id] = c;
    }
  }
  /**
  @internal
  */
  toString() {
    let t = na.get(this);
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
    return new tm(this.topNode, t);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(t, e = 0, i = 0) {
    let s = su.get(this) || this.topNode, a = new tm(s);
    return a.moveTo(t, e), su.set(this, a._tree), a;
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
    let i = da(su.get(this) || this.topNode, t, e, !1);
    return su.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(t, e = 0) {
    let i = da(tv.get(this) || this.topNode, t, e, !0);
    return tv.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(t, e = 0) {
    return GM(this, t, e);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(t) {
    let { enter: e, leave: i, from: s = 0, to: a = this.length } = t, u = t.mode || 0, c = (u & ie.IncludeAnonymous) > 0;
    for (let h = this.cursor(u | ie.IncludeAnonymous); ; ) {
      let m = !1;
      if (h.from <= a && h.to >= s && (!c && h.type.isAnonymous || e(h) !== !1)) {
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
    return this.children.length <= 8 ? this : zm(vi.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, i, s) => new Se(this.type, e, i, s, this.propValues), t.makeTree || ((e, i, s) => new Se(vi.none, e, i, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(t) {
    return XM(t);
  }
}
Se.empty = new Se(vi.none, [], [], 0);
class Nm {
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
    return new Nm(this.buffer, this.index);
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
    let e = this.buffer[t], i = this.buffer[t + 3], s = this.set.types[e], a = s.name;
    if (/\W/.test(a) && !s.isError && (a = JSON.stringify(a)), t += 4, i == t)
      return a;
    let u = [];
    for (; t < i; )
      u.push(this.childString(t)), t = this.buffer[t + 3];
    return a + "(" + u.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(t, e, i, s, a) {
    let { buffer: u } = this, c = -1;
    for (let h = t; h != e && !(bS(a, s, u[h + 1], u[h + 2]) && (c = h, i > 0)); h = u[h + 3])
      ;
    return c;
  }
  /**
  @internal
  */
  slice(t, e, i) {
    let s = this.buffer, a = new Uint16Array(e - t), u = 0;
    for (let c = t, h = 0; c < e; ) {
      a[h++] = s[c++], a[h++] = s[c++] - i;
      let m = a[h++] = s[c++] - i;
      a[h++] = s[c++] - t, u = Math.max(u, m);
    }
    return new Pn(a, u, this.set);
  }
}
function bS(l, t, e, i) {
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
function da(l, t, e, i) {
  for (var s; l.from == l.to || (e < 1 ? l.from >= t : l.from > t) || (e > -1 ? l.to <= t : l.to < t); ) {
    let u = !i && l instanceof yi && l.index < 0 ? null : l.parent;
    if (!u)
      return l;
    l = u;
  }
  let a = i ? 0 : ie.IgnoreOverlays;
  if (i)
    for (let u = l, c = u.parent; c; u = c, c = u.parent)
      u instanceof yi && u.index < 0 && ((s = c.enter(t, e, a)) === null || s === void 0 ? void 0 : s.from) != u.from && (l = c);
  for (; ; ) {
    let u = l.enter(t, e, a);
    if (!u)
      return l;
    l = u;
  }
}
class SS {
  cursor(t = 0) {
    return new tm(this, t);
  }
  getChild(t, e = null, i = null) {
    let s = ev(this, t, e, i);
    return s.length ? s[0] : null;
  }
  getChildren(t, e = null, i = null) {
    return ev(this, t, e, i);
  }
  resolve(t, e = 0) {
    return da(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return da(this, t, e, !0);
  }
  matchContext(t) {
    return $d(this.parent, t);
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
class yi extends SS {
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
  nextChild(t, e, i, s, a = 0) {
    for (let u = this; ; ) {
      for (let { children: c, positions: h } = u._tree, m = e > 0 ? c.length : -1; t != m; t += e) {
        let p = c[t], y = h[t] + u.from, v;
        if (!(!(a & ie.EnterBracketed && p instanceof Se && (v = na.get(p)) && !v.overlay && v.bracketed && i >= y && i <= y + p.length) && !bS(s, i, y, y + p.length))) {
          if (p instanceof Pn) {
            if (a & ie.ExcludeBuffers)
              continue;
            let S = p.findChild(0, p.buffer.length, e, i - y, s);
            if (S > -1)
              return new Wn(new jM(u, p, t, y), null, S);
          } else if (a & ie.IncludeAnonymous || !p.type.isAnonymous || Lm(p)) {
            let S;
            if (!(a & ie.IgnoreMounts) && (S = na.get(p)) && !S.overlay)
              return new yi(S.tree, y, t, u);
            let w = new yi(p, y, t, u);
            return a & ie.IncludeAnonymous || !w.type.isAnonymous ? w : w.nextChild(e < 0 ? p.children.length - 1 : 0, e, i, s, a);
          }
        }
      }
      if (a & ie.IncludeAnonymous || !u.type.isAnonymous || (u.index >= 0 ? t = u.index + e : t = e < 0 ? -1 : u._parent._tree.children.length, u = u._parent, !u))
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
    if (!(i & ie.IgnoreOverlays) && (s = na.get(this._tree)) && s.overlay) {
      let a = t - this.from, u = i & ie.EnterBracketed && s.bracketed;
      for (let { from: c, to: h } of s.overlay)
        if ((e > 0 || u ? c <= a : c < a) && (e < 0 || u ? h >= a : h > a))
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
function ev(l, t, e, i) {
  let s = l.cursor(), a = [];
  if (!s.firstChild())
    return a;
  if (e != null) {
    for (let u = !1; !u; )
      if (u = s.type.is(e), !s.nextSibling())
        return a;
  }
  for (; ; ) {
    if (i != null && s.type.is(i))
      return a;
    if (s.type.is(t) && a.push(s.node), !s.nextSibling())
      return i == null ? a : [];
  }
}
function $d(l, t, e = t.length - 1) {
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
class jM {
  constructor(t, e, i, s) {
    this.parent = t, this.buffer = e, this.index = i, this.start = s;
  }
}
class Wn extends SS {
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
    let { buffer: s } = this.context, a = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.context.start, i);
    return a < 0 ? null : new Wn(this.context, this, a);
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
    let { buffer: s } = this.context, a = s.findChild(this.index + 4, s.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return a < 0 ? null : new Wn(this.context, this, a);
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
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Wn(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new Wn(this.context, this._parent, t.findChild(
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
    let t = [], e = [], { buffer: i } = this.context, s = this.index + 4, a = i.buffer[this.index + 3];
    if (a > s) {
      let u = i.buffer[this.index + 1];
      t.push(i.slice(s, a, u)), e.push(0);
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
function xS(l) {
  if (!l.length)
    return null;
  let t = 0, e = l[0];
  for (let a = 1; a < l.length; a++) {
    let u = l[a];
    (u.from > e.from || u.to < e.to) && (e = u, t = a);
  }
  let i = e instanceof yi && e.index < 0 ? null : e.parent, s = l.slice();
  return i ? s[t] = i : s.splice(t, 1), new YM(s, e);
}
class YM {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return xS(this.heads);
  }
}
function GM(l, t, e) {
  let i = l.resolveInner(t, e), s = null;
  for (let a = i instanceof yi ? i : i.context.parent; a; a = a.parent)
    if (a.index < 0) {
      let u = a.parent;
      (s || (s = [i])).push(u.resolve(t, e)), a = u;
    } else {
      let u = na.get(a.tree);
      if (u && u.overlay && u.overlay[0].from <= t && u.overlay[u.overlay.length - 1].to >= t) {
        let c = new yi(u.tree, u.overlay[0].from + a.from, -1, a);
        (s || (s = [i])).push(da(c, t, e, !1));
      }
    }
  return s ? xS(s) : i;
}
class tm {
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
    let { buffer: s } = this.buffer, a = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.buffer.start, i);
    return a < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(a));
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
        for (let a = 0; a < this.index; a++)
          if (s.buffer.buffer[a + 3] < this.index)
            return !1;
      ({ index: e, parent: i } = s);
    } else
      ({ index: e, _parent: i } = this._tree);
    for (; i; { index: e, _parent: i } = i)
      if (e > -1)
        for (let a = e + t, u = t < 0 ? -1 : i._tree.children.length; a != u; a += t) {
          let c = i._tree.children[a];
          if (this.mode & ie.IncludeAnonymous || c instanceof Pn || !c.type.isAnonymous || Lm(c))
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
      t: for (let s = this.index, a = this.stack.length; a >= 0; ) {
        for (let u = t; u; u = u._parent)
          if (u.index == s) {
            if (s == this.index)
              return u;
            e = u, i = a + 1;
            break t;
          }
        s = this.stack[--a];
      }
    for (let s = i; s < this.stack.length; s++)
      e = new Wn(this.buffer, e, this.stack[s]);
    return this.bufferNode = new Wn(this.buffer, e, this.index);
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
      return $d(this.node.parent, t);
    let { buffer: e } = this.buffer, { types: i } = e.set;
    for (let s = t.length - 1, a = this.stack.length - 1; s >= 0; a--) {
      if (a < 0)
        return $d(this._tree, t, s);
      let u = i[e.buffer[this.stack[a]]];
      if (!u.isAnonymous) {
        if (t[s] && t[s] != u.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function Lm(l) {
  return l.children.some((t) => t instanceof Pn || !t.type.isAnonymous || Lm(t));
}
function XM(l) {
  var t;
  let { buffer: e, nodeSet: i, maxBufferLength: s = UM, reused: a = [], minRepeatType: u = i.types.length } = l, c = Array.isArray(e) ? new Nm(e, e.length) : e, h = i.types, m = 0, p = 0;
  function y(T, R, U, I, F, ct) {
    let { id: at, start: et, end: dt, size: yt } = c, vt = p, H = m;
    if (yt < 0)
      if (c.next(), yt == -1) {
        let G = a[at];
        U.push(G), I.push(et - T);
        return;
      } else if (yt == -3) {
        m = at;
        return;
      } else if (yt == -4) {
        p = at;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${yt}`);
    let Q = h[at], lt, ut, M = et - T;
    if (dt - et <= s && (ut = k(c.pos - R, F))) {
      let G = new Uint16Array(ut.size - ut.skip), P = c.pos - ut.size, J = G.length;
      for (; c.pos > P; )
        J = E(ut.start, G, J);
      lt = new Pn(G, dt - ut.start, i), M = ut.start - T;
    } else {
      let G = c.pos - yt;
      c.next();
      let P = [], J = [], rt = at >= u ? at : -1, xt = 0, pt = dt;
      for (; c.pos > G; )
        rt >= 0 && c.id == rt && c.size >= 0 ? (c.end <= pt - s && (w(P, J, et, xt, c.end, pt, rt, vt, H), xt = P.length, pt = c.end), c.next()) : ct > 2500 ? v(et, G, P, J) : y(et, G, P, J, rt, ct + 1);
      if (rt >= 0 && xt > 0 && xt < P.length && w(P, J, et, xt, et, pt, rt, vt, H), P.reverse(), J.reverse(), rt > -1 && xt > 0) {
        let we = S(Q, H);
        lt = zm(Q, P, J, 0, P.length, 0, dt - et, we, we);
      } else
        lt = A(Q, P, J, dt - et, vt - dt, H);
    }
    U.push(lt), I.push(M);
  }
  function v(T, R, U, I) {
    let F = [], ct = 0, at = -1;
    for (; c.pos > R; ) {
      let { id: et, start: dt, end: yt, size: vt } = c;
      if (vt > 4)
        c.next();
      else {
        if (at > -1 && dt < at)
          break;
        at < 0 && (at = yt - s), F.push(et, dt, yt), ct++, c.next();
      }
    }
    if (ct) {
      let et = new Uint16Array(ct * 4), dt = F[F.length - 2];
      for (let yt = F.length - 3, vt = 0; yt >= 0; yt -= 3)
        et[vt++] = F[yt], et[vt++] = F[yt + 1] - dt, et[vt++] = F[yt + 2] - dt, et[vt++] = vt;
      U.push(new Pn(et, F[2] - dt, i)), I.push(dt - T);
    }
  }
  function S(T, R) {
    return (U, I, F) => {
      let ct = 0, at = U.length - 1, et, dt;
      if (at >= 0 && (et = U[at]) instanceof Se) {
        if (!at && et.type == T && et.length == F)
          return et;
        (dt = et.prop(Dt.lookAhead)) && (ct = I[at] + et.length + dt);
      }
      return A(T, U, I, F, ct, R);
    };
  }
  function w(T, R, U, I, F, ct, at, et, dt) {
    let yt = [], vt = [];
    for (; T.length > I; )
      yt.push(T.pop()), vt.push(R.pop() + U - F);
    T.push(A(i.types[at], yt, vt, ct - F, et - ct, dt)), R.push(F - U);
  }
  function A(T, R, U, I, F, ct, at) {
    if (ct) {
      let et = [Dt.contextHash, ct];
      at = at ? [et].concat(at) : [et];
    }
    if (F > 25) {
      let et = [Dt.lookAhead, F];
      at = at ? [et].concat(at) : [et];
    }
    return new Se(T, R, U, I, at);
  }
  function k(T, R) {
    let U = c.fork(), I = 0, F = 0, ct = 0, at = U.end - s, et = { size: 0, start: 0, skip: 0 };
    t: for (let dt = U.pos - T; U.pos > dt; ) {
      let yt = U.size;
      if (U.id == R && yt >= 0) {
        et.size = I, et.start = F, et.skip = ct, ct += 4, I += 4, U.next();
        continue;
      }
      let vt = U.pos - yt;
      if (yt < 0 || vt < dt || U.start < at)
        break;
      let H = U.id >= u ? 4 : 0, Q = U.start;
      for (U.next(); U.pos > vt; ) {
        if (U.size < 0)
          if (U.size == -3 || U.size == -4)
            H += 4;
          else
            break t;
        else U.id >= u && (H += 4);
        U.next();
      }
      F = Q, I += yt, ct += H;
    }
    return (R < 0 || I == T) && (et.size = I, et.start = F, et.skip = ct), et.size > 4 ? et : void 0;
  }
  function E(T, R, U) {
    let { id: I, start: F, end: ct, size: at } = c;
    if (c.next(), at >= 0 && I < u) {
      let et = U;
      if (at > 4) {
        let dt = c.pos - (at - 4);
        for (; c.pos > dt; )
          U = E(T, R, U);
      }
      R[--U] = et, R[--U] = ct - T, R[--U] = F - T, R[--U] = I;
    } else at == -3 ? m = I : at == -4 && (p = I);
    return U;
  }
  let _ = [], V = [];
  for (; c.pos > 0; )
    y(l.start || 0, l.bufferStart || 0, _, V, -1, 0);
  let Y = (t = l.length) !== null && t !== void 0 ? t : _.length ? V[0] + _[0].length : 0;
  return new Se(h[l.topID], _.reverse(), V.reverse(), Y);
}
const iv = /* @__PURE__ */ new WeakMap();
function wu(l, t) {
  if (!l.isAnonymous || t instanceof Pn || t.type != l)
    return 1;
  let e = iv.get(t);
  if (e == null) {
    e = 1;
    for (let i of t.children) {
      if (i.type != l || !(i instanceof Se)) {
        e = 1;
        break;
      }
      e += wu(l, i);
    }
    iv.set(t, e);
  }
  return e;
}
function zm(l, t, e, i, s, a, u, c, h) {
  let m = 0;
  for (let w = i; w < s; w++)
    m += wu(l, t[w]);
  let p = Math.ceil(
    m * 1.5 / 8
    /* Balance.BranchFactor */
  ), y = [], v = [];
  function S(w, A, k, E, _) {
    for (let V = k; V < E; ) {
      let Y = V, T = A[V], R = wu(l, w[V]);
      for (V++; V < E; V++) {
        let U = wu(l, w[V]);
        if (R + U >= p)
          break;
        R += U;
      }
      if (V == Y + 1) {
        if (R > p) {
          let U = w[Y];
          S(U.children, U.positions, 0, U.children.length, A[Y] + _);
          continue;
        }
        y.push(w[Y]);
      } else {
        let U = A[V - 1] + w[V - 1].length - T;
        y.push(zm(l, w, A, Y, V, T, U, null, h));
      }
      v.push(T + _ - a);
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
  constructor(t, e, i, s, a = !1, u = !1) {
    this.from = t, this.to = e, this.tree = i, this.offset = s, this.open = (a ? 1 : 0) | (u ? 2 : 0);
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
    for (let a of e)
      a.to > t.length && s.push(a);
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
    let s = [], a = 1, u = t.length ? t[0] : null;
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
          u = a < t.length ? t[a++] : null;
        }
      if (!p)
        break;
      h = p.toA, m = p.toA - p.toB;
    }
    return s;
  }
}
class WM {
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
    return typeof t == "string" && (t = new KM(t)), i = i ? i.length ? i.map((s) => new $h(s.from, s.to)) : [new $h(0, 0)] : [new $h(0, t.length)], this.createParse(t, e || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(t, e, i) {
    let s = this.startParse(t, e, i);
    for (; ; ) {
      let a = s.advance();
      if (a)
        return a;
    }
  }
}
class KM {
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
new Dt({ perNode: !0 });
let QM = 0;
class di {
  /**
  @internal
  */
  constructor(t, e, i, s) {
    this.name = t, this.set = e, this.base = i, this.modified = s, this.id = QM++;
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
      for (let a of e.set)
        s.set.push(a);
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
    let e = new zu(t);
    return (i) => i.modified.indexOf(e) > -1 ? i : zu.get(i.base || i, i.modified.concat(e).sort((s, a) => s.id - a.id));
  }
}
let ZM = 0;
class zu {
  constructor(t) {
    this.name = t, this.instances = [], this.id = ZM++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let i = e[0].instances.find((c) => c.base == t && IM(e, c.modified));
    if (i)
      return i;
    let s = [], a = new di(t.name, s, t, e);
    for (let c of e)
      c.instances.push(a);
    let u = FM(e);
    for (let c of t.set)
      if (!c.modified.length)
        for (let h of u)
          s.push(zu.get(c, h));
    return a;
  }
}
function IM(l, t) {
  return l.length == t.length && l.every((e, i) => e == t[i]);
}
function FM(l) {
  let t = [[]];
  for (let e = 0; e < l.length; e++)
    for (let i = 0, s = t.length; i < s; i++)
      t.push(t[i].concat(l[e]));
  return t.sort((e, i) => i.length - e.length);
}
function PM(l) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in l) {
    let i = l[e];
    Array.isArray(i) || (i = [i]);
    for (let s of e.split(" "))
      if (s) {
        let a = [], u = 2, c = s;
        for (let y = 0; ; ) {
          if (c == "..." && y > 0 && y + 3 == s.length) {
            u = 1;
            break;
          }
          let v = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(c);
          if (!v)
            throw new RangeError("Invalid path: " + s);
          if (a.push(v[0] == "*" ? "" : v[0][0] == '"' ? JSON.parse(v[0]) : v[0]), y += v[0].length, y == s.length)
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
        let h = a.length - 1, m = a[h];
        if (!m)
          throw new RangeError("Invalid path: " + s);
        let p = new ma(i, u, h > 0 ? a.slice(0, h) : null);
        t[m] = p.sort(t[m]);
      }
  }
  return wS.add(t);
}
const wS = new Dt({
  combine(l, t) {
    let e, i, s;
    for (; l || t; ) {
      if (!l || t && l.depth >= t.depth ? (s = t, t = t.next) : (s = l, l = l.next), e && e.mode == s.mode && !s.context && !e.context)
        continue;
      let a = new ma(s.tags, s.mode, s.context);
      e ? e.next = a : i = a, e = a;
    }
    return i;
  }
});
class ma {
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
ma.empty = new ma([], 2, null);
function AS(l, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let a of l)
    if (!Array.isArray(a.tag))
      e[a.tag.id] = a.class;
    else
      for (let u of a.tag)
        e[u.id] = a.class;
  let { scope: i, all: s = null } = t || {};
  return {
    style: (a) => {
      let u = s;
      for (let c of a)
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
function JM(l, t) {
  let e = null;
  for (let i of l) {
    let s = i.style(t);
    s && (e = e ? e + " " + s : s);
  }
  return e;
}
function $M(l, t, e, i = 0, s = l.length) {
  let a = new tT(i, Array.isArray(t) ? t : [t], e);
  a.highlightRange(l.cursor(), i, s, "", a.highlighters), a.flush(s);
}
class tT {
  constructor(t, e, i) {
    this.at = t, this.highlighters = e, this.span = i, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, i, s, a) {
    let { type: u, from: c, to: h } = t;
    if (c >= i || h <= e)
      return;
    u.isTop && (a = this.highlighters.filter((S) => !S.scope || S.scope(u)));
    let m = s, p = eT(t) || ma.empty, y = JM(a, p.tags);
    if (y && (m && (m += " "), m += y, p.mode == 1 && (s += (s ? " " : "") + y)), this.startSpan(Math.max(e, c), m), p.opaque)
      return;
    let v = t.tree && t.tree.prop(Dt.mounted);
    if (v && v.overlay) {
      let S = t.node.enter(v.overlay[0].from + c, 1), w = this.highlighters.filter((k) => !k.scope || k.scope(v.tree.type)), A = t.firstChild();
      for (let k = 0, E = c; ; k++) {
        let _ = k < v.overlay.length ? v.overlay[k] : null, V = _ ? _.from + c : h, Y = Math.max(e, E), T = Math.min(i, V);
        if (Y < T && A)
          for (; t.from < T && (this.highlightRange(t, Y, T, s, a), this.startSpan(Math.min(T, t.to), m), !(t.to >= V || !t.nextSibling())); )
            ;
        if (!_ || V > i)
          break;
        E = _.to + c, E > e && (this.highlightRange(S.cursor(), Math.max(e, _.from + c), Math.min(i, E), "", w), this.startSpan(Math.min(i, E), m));
      }
      A && t.parent();
    } else if (t.firstChild()) {
      v && (s = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= i)
            break;
          this.highlightRange(t, e, i, s, a), this.startSpan(Math.min(i, t.to), m);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function eT(l) {
  let t = l.type.prop(wS);
  for (; t && t.context && !l.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const $ = di.define, ru = $(), jn = $(), nv = $(jn), lv = $(jn), Yn = $(), au = $(Yn), td = $(Yn), _i = $(), Sl = $(_i), zi = $(), Hi = $(), em = $(), Gr = $(em), ou = $(), j = {
  /**
  A comment.
  */
  comment: ru,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: $(ru),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: $(ru),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: $(ru),
  /**
  Any kind of identifier.
  */
  name: jn,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: $(jn),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: nv,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: $(nv),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: lv,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: $(lv),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: $(jn),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: $(jn),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: $(jn),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: $(jn),
  /**
  A literal value.
  */
  literal: Yn,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: au,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: $(au),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: $(au),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: $(au),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: td,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: $(td),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: $(td),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: $(Yn),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: $(Yn),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: $(Yn),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: $(Yn),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: $(Yn),
  /**
  A language keyword.
  */
  keyword: zi,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: $(zi),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: $(zi),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: $(zi),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: $(zi),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: $(zi),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: $(zi),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: $(zi),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: $(zi),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: $(zi),
  /**
  An operator.
  */
  operator: Hi,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: $(Hi),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: $(Hi),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: $(Hi),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: $(Hi),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: $(Hi),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: $(Hi),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: $(Hi),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: $(Hi),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: $(Hi),
  /**
  Program or markup punctuation.
  */
  punctuation: em,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: $(em),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Gr,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: $(Gr),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: $(Gr),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: $(Gr),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: $(Gr),
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
  heading1: $(Sl),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: $(Sl),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: $(Sl),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: $(Sl),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: $(Sl),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: $(Sl),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: $(_i),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: $(_i),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: $(_i),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: $(_i),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: $(_i),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: $(_i),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: $(_i),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: $(_i),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: $(),
  /**
  Deleted text.
  */
  deleted: $(),
  /**
  Changed text.
  */
  changed: $(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: $(),
  /**
  Metadata or meta-instruction.
  */
  meta: ou,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: $(ou),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: $(ou),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: $(ou),
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
for (let l in j) {
  let t = j[l];
  t instanceof di && (t.name = l);
}
AS([
  { tag: j.link, class: "tok-link" },
  { tag: j.heading, class: "tok-heading" },
  { tag: j.emphasis, class: "tok-emphasis" },
  { tag: j.strong, class: "tok-strong" },
  { tag: j.keyword, class: "tok-keyword" },
  { tag: j.atom, class: "tok-atom" },
  { tag: j.bool, class: "tok-bool" },
  { tag: j.url, class: "tok-url" },
  { tag: j.labelName, class: "tok-labelName" },
  { tag: j.inserted, class: "tok-inserted" },
  { tag: j.deleted, class: "tok-deleted" },
  { tag: j.literal, class: "tok-literal" },
  { tag: j.string, class: "tok-string" },
  { tag: j.number, class: "tok-number" },
  { tag: [j.regexp, j.escape, j.special(j.string)], class: "tok-string2" },
  { tag: j.variableName, class: "tok-variableName" },
  { tag: j.local(j.variableName), class: "tok-variableName tok-local" },
  { tag: j.definition(j.variableName), class: "tok-variableName tok-definition" },
  { tag: j.special(j.variableName), class: "tok-variableName2" },
  { tag: j.definition(j.propertyName), class: "tok-propertyName tok-definition" },
  { tag: j.typeName, class: "tok-typeName" },
  { tag: j.namespace, class: "tok-namespace" },
  { tag: j.className, class: "tok-className" },
  { tag: j.macroName, class: "tok-macroName" },
  { tag: j.propertyName, class: "tok-propertyName" },
  { tag: j.operator, class: "tok-operator" },
  { tag: j.comment, class: "tok-comment" },
  { tag: j.meta, class: "tok-meta" },
  { tag: j.invalid, class: "tok-invalid" },
  { tag: j.punctuation, class: "tok-punctuation" }
]);
var ed;
const Ir = /* @__PURE__ */ new Dt(), iT = /* @__PURE__ */ new Dt();
class Yi {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(t, e, i = [], s = "") {
    this.data = t, this.name = s, Ot.prototype.hasOwnProperty("tree") || Object.defineProperty(Ot.prototype, "tree", { get() {
      return Te(this);
    } }), this.parser = e, this.extension = [
      Jn.of(this),
      Ot.languageData.of((a, u, c) => {
        let h = sv(a, u, c), m = h.type.prop(Ir);
        if (!m)
          return [];
        let p = a.facet(m), y = h.type.prop(iT);
        if (y) {
          let v = h.resolve(u - h.from, c);
          for (let S of y)
            if (S.test(v, a)) {
              let w = a.facet(S.facet);
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
    return sv(t, e, i).type.prop(Ir) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(t) {
    let e = t.facet(Jn);
    if (e?.data == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let i = [], s = (a, u) => {
      if (a.prop(Ir) == this.data) {
        i.push({ from: u, to: u + a.length });
        return;
      }
      let c = a.prop(Dt.mounted);
      if (c) {
        if (c.tree.prop(Ir) == this.data) {
          if (c.overlay)
            for (let h of c.overlay)
              i.push({ from: h.from + u, to: h.to + u });
          else
            i.push({ from: u, to: u + a.length });
          return;
        } else if (c.overlay) {
          let h = i.length;
          if (s(c.tree, c.overlay[0].from + u), i.length > h)
            return;
        }
      }
      for (let h = 0; h < a.children.length; h++) {
        let m = a.children[h];
        m instanceof Se && s(m, a.positions[h] + u);
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
Yi.setState = /* @__PURE__ */ bt.define();
function sv(l, t, e) {
  let i = l.facet(Jn), s = Te(l).topNode;
  if (!i || i.allowsNesting)
    for (let a = s; a; a = a.enter(t, e, ie.ExcludeBuffers | ie.EnterBracketed))
      a.type.isTop && (s = a);
  return s;
}
function Te(l) {
  let t = l.field(Yi.state, !1);
  return t ? t.tree : Se.empty;
}
class nT {
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
let Xr = null;
class Hu {
  constructor(t, e, i = [], s, a, u, c, h) {
    this.parser = t, this.state = e, this.fragments = i, this.tree = s, this.treeLen = a, this.viewport = u, this.skipped = c, this.scheduleOn = h, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Hu(t, e, [], Se.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new nT(this.state.doc), this.fragments);
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
    let e = Xr;
    Xr = this;
    try {
      return t();
    } finally {
      Xr = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = rv(t, e.from, e.to);
    return t;
  }
  /**
  @internal
  */
  changes(t, e) {
    let { fragments: i, tree: s, treeLen: a, viewport: u, skipped: c } = this;
    if (this.takeTree(), !t.empty) {
      let h = [];
      if (t.iterChangedRanges((m, p, y, v) => h.push({ fromA: m, toA: p, fromB: y, toB: v })), i = Ol.applyChanges(i, h), s = Se.empty, a = 0, u = { from: t.mapPos(u.from, -1), to: t.mapPos(u.to, 1) }, this.skipped.length) {
        c = [];
        for (let m of this.skipped) {
          let p = t.mapPos(m.from, 1), y = t.mapPos(m.to, -1);
          p < y && c.push({ from: p, to: y });
        }
      }
    }
    return new Hu(this.parser, e, i, s, a, u, c, this.scheduleOn);
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
      let { from: s, to: a } = this.skipped[i];
      s < t.to && a > t.from && (this.fragments = rv(this.fragments, s, a), this.skipped.splice(i--, 1));
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
    return new class extends WM {
      createParse(e, i, s) {
        let a = s[0].from, u = s[s.length - 1].to;
        return {
          parsedPos: a,
          advance() {
            let h = Xr;
            if (h) {
              for (let m of s)
                h.tempSkipped.push(m);
              t && (h.scheduleOn = h.scheduleOn ? Promise.all([h.scheduleOn, t]) : t);
            }
            return this.parsedPos = u, new Se(vi.none, [], [], u - a);
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
    return Xr;
  }
}
function rv(l, t, e) {
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
    let e = Math.min(3e3, t.doc.length), i = Hu.create(t.facet(Jn).parser, t, { from: 0, to: e });
    return i.work(20, e) || i.takeTree(), new Hs(i);
  }
}
Yi.state = /* @__PURE__ */ Oe.define({
  create: Hs.init,
  update(l, t) {
    for (let e of t.effects)
      if (e.is(Yi.setState))
        return e.value;
    return t.startState.facet(Jn) != t.state.facet(Jn) ? Hs.init(t.state) : l.apply(t);
  }
});
let CS = (l) => {
  let t = setTimeout(
    () => l(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (CS = (l) => {
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
const id = typeof navigator < "u" && (!((ed = navigator.scheduling) === null || ed === void 0) && ed.isInputPending) ? () => navigator.scheduling.isInputPending() : null, lT = /* @__PURE__ */ It.fromClass(class {
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
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = CS(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, a = i.field(Yi.state);
    if (a.tree == a.context.tree && a.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let u = Date.now() + Math.min(this.chunkBudget, 100, t && !id ? Math.max(25, t.timeRemaining() - 5) : 1e9), c = a.context.treeLen < s && i.doc.length > s + 1e3, h = a.context.work(() => id && id() || Date.now() > u, s + (c ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (h || this.chunkBudget <= 0) && (a.context.takeTree(), this.view.dispatch({ effects: Yi.setState.of(new Hs(a.context)) })), this.chunkBudget > 0 && !(h && !c) && this.scheduleWork(), this.checkAsyncSchedule(a.context);
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
}), Jn = /* @__PURE__ */ nt.define({
  combine(l) {
    return l.length ? l[0] : null;
  },
  enables: (l) => [
    Yi.state,
    lT,
    tt.contentAttributes.compute([l], (t) => {
      let e = t.facet(l);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
}), sT = /* @__PURE__ */ nt.define(), sc = /* @__PURE__ */ nt.define({
  combine: (l) => {
    if (!l.length)
      return "  ";
    let t = l[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(l[0]));
    return t;
  }
});
function _u(l) {
  let t = l.facet(sc);
  return t.charCodeAt(0) == 9 ? l.tabSize * t.length : t.length;
}
function pa(l, t) {
  let e = "", i = l.tabSize, s = l.facet(sc)[0];
  if (s == "	") {
    for (; t >= i; )
      e += "	", t -= i;
    s = " ";
  }
  for (let a = 0; a < t; a++)
    e += s;
  return e;
}
function Hm(l, t) {
  l instanceof Ot && (l = new rc(l));
  for (let i of l.state.facet(sT)) {
    let s = i(l, t);
    if (s !== void 0)
      return s;
  }
  let e = Te(l.state);
  return e.length >= t ? aT(l, e, t) : null;
}
class rc {
  /**
  Create an indent context.
  */
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = _u(t);
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
    let i = this.state.doc.lineAt(t), { simulateBreak: s, simulateDoubleBreak: a } = this.options;
    return s != null && s >= i.from && s <= i.to ? a && s == t ? { text: "", from: t } : (e < 0 ? s < t : s <= t) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
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
    let { text: i, from: s } = this.lineAt(t, e), a = this.countColumn(i, t - s), u = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return u > -1 && (a += u - this.countColumn(i, i.search(/\S|$/))), a;
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
    let { text: i, from: s } = this.lineAt(t, e), a = this.options.overrideIndentation;
    if (a) {
      let u = a(s);
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
const rT = /* @__PURE__ */ new Dt();
function aT(l, t, e) {
  let i = t.resolveStack(e), s = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (s != i.node) {
    let a = [];
    for (let u = s; u && !(u.from < i.node.from || u.to > i.node.to || u.from == i.node.from && u.type == i.node.type); u = u.parent)
      a.push(u);
    for (let u = a.length - 1; u >= 0; u--)
      i = { node: a[u], next: i };
  }
  return kS(i, l, e);
}
function kS(l, t, e) {
  for (let i = l; i; i = i.next) {
    let s = uT(i.node);
    if (s)
      return s(_m.create(t, e, i));
  }
  return 0;
}
function oT(l) {
  return l.pos == l.options.simulateBreak && l.options.simulateDoubleBreak;
}
function uT(l) {
  let t = l.type.prop(rT);
  if (t)
    return t;
  let e = l.firstChild, i;
  if (e && (i = e.type.prop(Dt.closedBy))) {
    let s = l.lastChild, a = s && i.indexOf(s.name) > -1;
    return (u) => dT(u, !0, 1, void 0, a && !oT(u) ? s.from : void 0);
  }
  return l.parent == null ? cT : null;
}
function cT() {
  return 0;
}
class _m extends rc {
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
    return new _m(t, e, i);
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
      if (fT(i, t))
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
    return kS(this.context.next, this.base, this.pos);
  }
}
function fT(l, t) {
  for (let e = t; e; e = e.parent)
    if (l == e)
      return !0;
  return !1;
}
function hT(l) {
  let t = l.node, e = t.childAfter(t.from), i = t.lastChild;
  if (!e)
    return null;
  let s = l.options.simulateBreak, a = l.state.doc.lineAt(e.from), u = s == null || s <= a.from ? a.to : Math.min(a.to, s);
  for (let c = e.to; ; ) {
    let h = t.childAfter(c);
    if (!h || h == i)
      return null;
    if (!h.type.isSkipped) {
      if (h.from >= u)
        return null;
      let m = /^ */.exec(a.text.slice(e.to - a.from))[0].length;
      return { from: e.from, to: e.to + m };
    }
    c = h.to;
  }
}
function dT(l, t, e, i, s) {
  let a = l.textAfter, u = a.match(/^\s*/)[0].length, c = i && a.slice(u, u + i.length) == i || s == l.pos + u, h = hT(l);
  return h ? c ? l.column(h.from) : l.column(h.to) : l.baseIndent + (c ? 0 : l.unit * e);
}
const mT = 200;
function pT() {
  return Ot.transactionFilter.of((l) => {
    if (!l.docChanged || !l.isUserEvent("input.type") && !l.isUserEvent("input.complete"))
      return l;
    let t = l.startState.languageDataAt("indentOnInput", l.startState.selection.main.head);
    if (!t.length)
      return l;
    let e = l.newDoc, { head: i } = l.newSelection.main, s = e.lineAt(i);
    if (i > s.from + mT)
      return l;
    let a = e.sliceString(s.from, i);
    if (!t.some((m) => m.test(a)))
      return l;
    let { state: u } = l, c = -1, h = [];
    for (let { head: m } of u.selection.ranges) {
      let p = u.doc.lineAt(m);
      if (p.from == c)
        continue;
      c = p.from;
      let y = Hm(u, p.from);
      if (y == null)
        continue;
      let v = /^\s*/.exec(p.text)[0], S = pa(u, y);
      v != S && h.push({ from: p.from, to: p.from + v.length, insert: S });
    }
    return h.length ? [l, { changes: h, sequential: !0 }] : l;
  });
}
const gT = /* @__PURE__ */ nt.define(), yT = /* @__PURE__ */ new Dt();
function vT(l, t, e) {
  let i = Te(l);
  if (i.length < e)
    return null;
  let s = i.resolveStack(e, 1), a = null;
  for (let u = s; u; u = u.next) {
    let c = u.node;
    if (c.to <= e || c.from > e)
      continue;
    if (a && c.from < t)
      break;
    let h = c.type.prop(yT);
    if (h && (c.to < i.length - 50 || i.length == l.doc.length || !bT(c))) {
      let m = h(c, l);
      m && m.from <= e && m.from >= t && m.to > e && (a = m);
    }
  }
  return a;
}
function bT(l) {
  let t = l.lastChild;
  return t && t.to == l.to && t.type.isError;
}
function Uu(l, t, e) {
  for (let i of l.facet(gT)) {
    let s = i(l, t, e);
    if (s)
      return s;
  }
  return vT(l, t, e);
}
function MS(l, t) {
  let e = t.mapPos(l.from, 1), i = t.mapPos(l.to, -1);
  return e >= i ? void 0 : { from: e, to: i };
}
const ac = /* @__PURE__ */ bt.define({ map: MS }), ka = /* @__PURE__ */ bt.define({ map: MS });
function TS(l) {
  let t = [];
  for (let { head: e } of l.state.selection.ranges)
    t.some((i) => i.from <= e && i.to >= e) || t.push(l.lineBlockAt(e));
  return t;
}
const Nl = /* @__PURE__ */ Oe.define({
  create() {
    return ft.none;
  },
  update(l, t) {
    t.isUserEvent("delete") && t.changes.iterChangedRanges((e, i) => l = av(l, e, i)), l = l.map(t.changes);
    for (let e of t.effects)
      if (e.is(ac) && !ST(l, e.value.from, e.value.to)) {
        let { preparePlaceholder: i } = t.state.facet(ES), s = i ? ft.replace({ widget: new TT(i(t.state, e.value)) }) : ov;
        l = l.update({ add: [s.range(e.value.from, e.value.to)] });
      } else e.is(ka) && (l = l.update({
        filter: (i, s) => e.value.from != i || e.value.to != s,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
    return t.selection && (l = av(l, t.selection.main.head)), l;
  },
  provide: (l) => tt.decorations.from(l),
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
      t.push(ov.range(i, s));
    }
    return ft.set(t, !0);
  }
});
function av(l, t, e = t) {
  let i = !1;
  return l.between(t, e, (s, a) => {
    s < e && a > t && (i = !0);
  }), i ? l.update({
    filterFrom: t,
    filterTo: e,
    filter: (s, a) => s >= e || a <= t
  }) : l;
}
function Vu(l, t, e) {
  var i;
  let s = null;
  return (i = l.field(Nl, !1)) === null || i === void 0 || i.between(t, e, (a, u) => {
    (!s || s.from > a) && (s = { from: a, to: u });
  }), s;
}
function ST(l, t, e) {
  let i = !1;
  return l.between(t, t, (s, a) => {
    s == t && a == e && (i = !0);
  }), i;
}
function OS(l, t) {
  return l.field(Nl, !1) ? t : t.concat(bt.appendConfig.of(RS()));
}
const xT = (l) => {
  for (let t of TS(l)) {
    let e = Uu(l.state, t.from, t.to);
    if (e)
      return l.dispatch({ effects: OS(l.state, [ac.of(e), DS(l, e)]) }), !0;
  }
  return !1;
}, wT = (l) => {
  if (!l.state.field(Nl, !1))
    return !1;
  let t = [];
  for (let e of TS(l)) {
    let i = Vu(l.state, e.from, e.to);
    i && t.push(ka.of(i), DS(l, i, !1));
  }
  return t.length && l.dispatch({ effects: t }), t.length > 0;
};
function DS(l, t, e = !0) {
  let i = l.state.doc.lineAt(t.from).number, s = l.state.doc.lineAt(t.to).number;
  return tt.announce.of(`${l.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${i} ${l.state.phrase("to")} ${s}.`);
}
const AT = (l) => {
  let { state: t } = l, e = [];
  for (let i = 0; i < t.doc.length; ) {
    let s = l.lineBlockAt(i), a = Uu(t, s.from, s.to);
    a && e.push(ac.of(a)), i = (a ? l.lineBlockAt(a.to) : s).to + 1;
  }
  return e.length && l.dispatch({ effects: OS(l.state, e) }), !!e.length;
}, CT = (l) => {
  let t = l.state.field(Nl, !1);
  if (!t || !t.size)
    return !1;
  let e = [];
  return t.between(0, l.state.doc.length, (i, s) => {
    e.push(ka.of({ from: i, to: s }));
  }), l.dispatch({ effects: e }), !0;
}, kT = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: xT },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: wT },
  { key: "Ctrl-Alt-[", run: AT },
  { key: "Ctrl-Alt-]", run: CT }
], MT = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, ES = /* @__PURE__ */ nt.define({
  combine(l) {
    return Zi(l, MT);
  }
});
function RS(l) {
  return [Nl, ET];
}
function BS(l, t) {
  let { state: e } = l, i = e.facet(ES), s = (u) => {
    let c = l.lineBlockAt(l.posAtDOM(u.target)), h = Vu(l.state, c.from, c.to);
    h && l.dispatch({ effects: ka.of(h) }), u.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(l, s, t);
  let a = document.createElement("span");
  return a.textContent = i.placeholderText, a.setAttribute("aria-label", e.phrase("folded code")), a.title = e.phrase("unfold"), a.className = "cm-foldPlaceholder", a.onclick = s, a;
}
const ov = /* @__PURE__ */ ft.replace({ widget: /* @__PURE__ */ new class extends Ii {
  toDOM(l) {
    return BS(l, null);
  }
}() });
class TT extends Ii {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return BS(t, this.value);
  }
}
const OT = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class nd extends pn {
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
function DT(l = {}) {
  let t = { ...OT, ...l }, e = new nd(t, !0), i = new nd(t, !1), s = It.fromClass(class {
    constructor(u) {
      this.from = u.viewport.from, this.markers = this.buildMarkers(u);
    }
    update(u) {
      (u.docChanged || u.viewportChanged || u.startState.facet(Jn) != u.state.facet(Jn) || u.startState.field(Nl, !1) != u.state.field(Nl, !1) || Te(u.startState) != Te(u.state) || t.foldingChanged(u)) && (this.markers = this.buildMarkers(u.view));
    }
    buildMarkers(u) {
      let c = new Ki();
      for (let h of u.viewportLineBlocks) {
        let m = Vu(u.state, h.from, h.to) ? i : Uu(u.state, h.from, h.to) ? e : null;
        m && c.add(h.from, h.from, m);
      }
      return c.finish();
    }
  }), { domEventHandlers: a } = t;
  return [
    s,
    TM({
      class: "cm-foldGutter",
      markers(u) {
        var c;
        return ((c = u.plugin(s)) === null || c === void 0 ? void 0 : c.markers) || Mt.empty;
      },
      initialSpacer() {
        return new nd(t, !1);
      },
      domEventHandlers: {
        ...a,
        click: (u, c, h) => {
          if (a.click && a.click(u, c, h))
            return !0;
          let m = Vu(u.state, c.from, c.to);
          if (m)
            return u.dispatch({ effects: ka.of(m) }), !0;
          let p = Uu(u.state, c.from, c.to);
          return p ? (u.dispatch({ effects: ac.of(p) }), !0) : !1;
        }
      }
    }),
    RS()
  ];
}
const ET = /* @__PURE__ */ tt.baseTheme({
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
class Ma {
  constructor(t, e) {
    this.specs = t;
    let i;
    function s(c) {
      let h = Zn.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + h] = c, h;
    }
    const a = typeof e.all == "string" ? e.all : e.all ? s(e.all) : void 0, u = e.scope;
    this.scope = u instanceof Yi ? (c) => c.prop(Ir) == u.data : u ? (c) => c == u : void 0, this.style = AS(t.map((c) => ({
      tag: c.tag,
      class: c.class || s(Object.assign({}, c, { tag: null }))
    })), {
      all: a
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
    return new Ma(t, e || {});
  }
}
const im = /* @__PURE__ */ nt.define(), NS = /* @__PURE__ */ nt.define({
  combine(l) {
    return l.length ? [l[0]] : null;
  }
});
function ld(l) {
  let t = l.facet(im);
  return t.length ? t : l.facet(NS);
}
function LS(l, t) {
  let e = [BT], i;
  return l instanceof Ma && (l.module && e.push(tt.styleModule.of(l.module)), i = l.themeType), t?.fallback ? e.push(NS.of(l)) : i ? e.push(im.computeN([tt.darkTheme], (s) => s.facet(tt.darkTheme) == (i == "dark") ? [l] : [])) : e.push(im.of(l)), e;
}
class RT {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Te(t.state), this.decorations = this.buildDeco(t, ld(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = Te(t.state), i = ld(t.state), s = i != ld(t.startState), { viewport: a } = t.view, u = t.changes.mapPos(this.decoratedTo, 1);
    e.length < a.to && !s && e.type == this.tree.type && u >= a.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = u) : (e != this.tree || t.viewportChanged || s) && (this.tree = e, this.decorations = this.buildDeco(t.view, i), this.decoratedTo = a.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return ft.none;
    let i = new Ki();
    for (let { from: s, to: a } of t.visibleRanges)
      $M(this.tree, e, (u, c, h) => {
        i.add(u, c, this.markCache[h] || (this.markCache[h] = ft.mark({ class: h })));
      }, s, a);
    return i.finish();
  }
}
const BT = /* @__PURE__ */ tl.high(/* @__PURE__ */ It.fromClass(RT, {
  decorations: (l) => l.decorations
})), NT = /* @__PURE__ */ Ma.define([
  {
    tag: j.meta,
    color: "#404740"
  },
  {
    tag: j.link,
    textDecoration: "underline"
  },
  {
    tag: j.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: j.emphasis,
    fontStyle: "italic"
  },
  {
    tag: j.strong,
    fontWeight: "bold"
  },
  {
    tag: j.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: j.keyword,
    color: "#708"
  },
  {
    tag: [j.atom, j.bool, j.url, j.contentSeparator, j.labelName],
    color: "#219"
  },
  {
    tag: [j.literal, j.inserted],
    color: "#164"
  },
  {
    tag: [j.string, j.deleted],
    color: "#a11"
  },
  {
    tag: [j.regexp, j.escape, /* @__PURE__ */ j.special(j.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ j.definition(j.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ j.local(j.variableName),
    color: "#30a"
  },
  {
    tag: [j.typeName, j.namespace],
    color: "#085"
  },
  {
    tag: j.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ j.special(j.variableName), j.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ j.definition(j.propertyName),
    color: "#00c"
  },
  {
    tag: j.comment,
    color: "#940"
  },
  {
    tag: j.invalid,
    color: "#f00"
  }
]), LT = /* @__PURE__ */ tt.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), zS = 1e4, HS = "()[]{}", _S = /* @__PURE__ */ nt.define({
  combine(l) {
    return Zi(l, {
      afterCursor: !0,
      brackets: HS,
      maxScanDistance: zS,
      renderMatch: _T
    });
  }
}), zT = /* @__PURE__ */ ft.mark({ class: "cm-matchingBracket" }), HT = /* @__PURE__ */ ft.mark({ class: "cm-nonmatchingBracket" });
function _T(l) {
  let t = [], e = l.matched ? zT : HT;
  return t.push(e.range(l.start.from, l.start.to)), l.end && t.push(e.range(l.end.from, l.end.to)), t;
}
function uv(l) {
  let t = [], e = l.facet(_S);
  for (let i of l.selection.ranges) {
    if (!i.empty)
      continue;
    let s = Gi(l, i.head, -1, e) || i.head > 0 && Gi(l, i.head - 1, 1, e) || e.afterCursor && (Gi(l, i.head, 1, e) || i.head < l.doc.length && Gi(l, i.head + 1, -1, e));
    s && (t = t.concat(e.renderMatch(s, l)));
  }
  return ft.set(t, !0);
}
const UT = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.paused = !1, this.decorations = uv(l.state);
  }
  update(l) {
    (l.docChanged || l.selectionSet || this.paused) && (l.view.composing ? (this.decorations = this.decorations.map(l.changes), this.paused = !0) : (this.decorations = uv(l.state), this.paused = !1));
  }
}, {
  decorations: (l) => l.decorations
}), VT = [
  UT,
  LT
];
function qT(l = {}) {
  return [_S.of(l), VT];
}
const jT = /* @__PURE__ */ new Dt();
function nm(l, t, e) {
  let i = l.prop(t < 0 ? Dt.openedBy : Dt.closedBy);
  if (i)
    return i;
  if (l.name.length == 1) {
    let s = e.indexOf(l.name);
    if (s > -1 && s % 2 == (t < 0 ? 1 : 0))
      return [e[s + t]];
  }
  return null;
}
function lm(l) {
  let t = l.type.prop(jT);
  return t ? t(l.node) : l;
}
function Gi(l, t, e, i = {}) {
  let s = i.maxScanDistance || zS, a = i.brackets || HS, u = Te(l), c = u.resolveInner(t, e);
  for (let h = c; h; h = h.parent) {
    let m = nm(h.type, e, a);
    if (m && h.from < h.to) {
      let p = lm(h);
      if (p && (e > 0 ? t >= p.from && t < p.to : t > p.from && t <= p.to))
        return YT(l, t, e, h, p, m, a);
    }
  }
  return GT(l, t, e, u, c.type, s, a);
}
function YT(l, t, e, i, s, a, u) {
  let c = i.parent, h = { from: s.from, to: s.to }, m = 0, p = c?.cursor();
  if (p && (e < 0 ? p.childBefore(i.from) : p.childAfter(i.to)))
    do
      if (e < 0 ? p.to <= i.from : p.from >= i.to) {
        if (m == 0 && a.indexOf(p.type.name) > -1 && p.from < p.to) {
          let y = lm(p);
          return { start: h, end: y ? { from: y.from, to: y.to } : void 0, matched: !0 };
        } else if (nm(p.type, e, u))
          m++;
        else if (nm(p.type, -e, u)) {
          if (m == 0) {
            let y = lm(p);
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
function GT(l, t, e, i, s, a, u) {
  if (e < 0 ? !t : t == l.doc.length)
    return null;
  let c = e < 0 ? l.sliceDoc(t - 1, t) : l.sliceDoc(t, t + 1), h = u.indexOf(c);
  if (h < 0 || h % 2 == 0 != e > 0)
    return null;
  let m = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, p = l.doc.iterRange(t, e > 0 ? l.doc.length : 0), y = 0;
  for (let v = 0; !p.next().done && v <= a; ) {
    let S = p.value;
    e < 0 && (v += S.length);
    let w = t + v * e;
    for (let A = e > 0 ? 0 : S.length - 1, k = e > 0 ? S.length : -1; A != k; A += e) {
      let E = u.indexOf(S[A]);
      if (!(E < 0 || i.resolveInner(w + A, 1).type != s))
        if (E % 2 == 0 == e > 0)
          y++;
        else {
          if (y == 1)
            return { start: m, end: { from: w + A, to: w + A + 1 }, matched: E >> 1 == h >> 1 };
          y--;
        }
    }
    e > 0 && (v += S.length);
  }
  return p.done ? { start: m, matched: !1 } : null;
}
const XT = /* @__PURE__ */ Object.create(null), cv = [vi.none], fv = [], hv = /* @__PURE__ */ Object.create(null), WT = /* @__PURE__ */ Object.create(null);
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
  WT[l] = /* @__PURE__ */ KT(XT, t);
function sd(l, t) {
  fv.indexOf(l) > -1 || (fv.push(l), console.warn(t));
}
function KT(l, t) {
  let e = [];
  for (let c of t.split(" ")) {
    let h = [];
    for (let m of c.split(".")) {
      let p = l[m] || j[m];
      p ? typeof p == "function" ? h.length ? h = h.map(p) : sd(m, `Modifier ${m} used at start of tag`) : h.length ? sd(m, `Tag ${m} used as modifier`) : h = Array.isArray(p) ? p : [p] : sd(m, `Unknown highlighting tag ${m}`);
    }
    for (let m of h)
      e.push(m);
  }
  if (!e.length)
    return 0;
  let i = t.replace(/ /g, "_"), s = i + " " + e.map((c) => c.id), a = hv[s];
  if (a)
    return a.id;
  let u = hv[s] = vi.define({
    id: cv.length,
    name: i,
    props: [PM({ [i]: e })]
  });
  return cv.push(u), u.id;
}
Yt.RTL, Yt.LTR;
const QT = (l) => {
  let { state: t } = l, e = t.doc.lineAt(t.selection.main.from), i = Vm(l.state, e.from);
  return i.line ? ZT(l) : i.block ? FT(l) : !1;
};
function Um(l, t) {
  return ({ state: e, dispatch: i }) => {
    if (e.readOnly)
      return !1;
    let s = l(t, e);
    return s ? (i(e.update(s)), !0) : !1;
  };
}
const ZT = /* @__PURE__ */ Um(
  $T,
  0
  /* CommentOption.Toggle */
), IT = /* @__PURE__ */ Um(
  US,
  0
  /* CommentOption.Toggle */
), FT = /* @__PURE__ */ Um(
  (l, t) => US(l, t, JT(t)),
  0
  /* CommentOption.Toggle */
);
function Vm(l, t) {
  let e = l.languageDataAt("commentTokens", t, 1);
  return e.length ? e[0] : {};
}
const Wr = 50;
function PT(l, { open: t, close: e }, i, s) {
  let a = l.sliceDoc(i - Wr, i), u = l.sliceDoc(s, s + Wr), c = /\s*$/.exec(a)[0].length, h = /^\s*/.exec(u)[0].length, m = a.length - c;
  if (a.slice(m - t.length, m) == t && u.slice(h, h + e.length) == e)
    return {
      open: { pos: i - c, margin: c && 1 },
      close: { pos: s + h, margin: h && 1 }
    };
  let p, y;
  s - i <= 2 * Wr ? p = y = l.sliceDoc(i, s) : (p = l.sliceDoc(i, i + Wr), y = l.sliceDoc(s - Wr, s));
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
function JT(l) {
  let t = [];
  for (let e of l.selection.ranges) {
    let i = l.doc.lineAt(e.from), s = e.to <= i.to ? i : l.doc.lineAt(e.to);
    s.from > i.from && s.from == e.to && (s = e.to == i.to + 1 ? i : l.doc.lineAt(e.to - 1));
    let a = t.length - 1;
    a >= 0 && t[a].to > i.from ? t[a].to = s.to : t.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return t;
}
function US(l, t, e = t.selection.ranges) {
  let i = e.map((a) => Vm(t, a.from).block);
  if (!i.every((a) => a))
    return null;
  let s = e.map((a, u) => PT(t, i[u], a.from, a.to));
  if (l != 2 && !s.every((a) => a))
    return { changes: t.changes(e.map((a, u) => s[u] ? [] : [{ from: a.from, insert: i[u].open + " " }, { from: a.to, insert: " " + i[u].close }])) };
  if (l != 1 && s.some((a) => a)) {
    let a = [];
    for (let u = 0, c; u < s.length; u++)
      if (c = s[u]) {
        let h = i[u], { open: m, close: p } = c;
        a.push({ from: m.pos - h.open.length, to: m.pos + m.margin }, { from: p.pos - p.margin, to: p.pos + h.close.length });
      }
    return { changes: a };
  }
  return null;
}
function $T(l, t, e = t.selection.ranges) {
  let i = [], s = -1;
  t: for (let { from: a, to: u } of e) {
    let c = i.length, h = 1e9, m;
    for (let p = a; p <= u; ) {
      let y = t.doc.lineAt(p);
      if (m == null && (m = Vm(t, y.from).line, !m))
        continue t;
      if (y.from > s && (a == u || u > y.from)) {
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
  if (l != 2 && i.some((a) => a.comment < 0 && (!a.empty || a.single))) {
    let a = [];
    for (let { line: c, token: h, indent: m, empty: p, single: y } of i)
      (y || !p) && a.push({ from: c.from + m, insert: h + " " });
    let u = t.changes(a);
    return { changes: u, selection: t.selection.map(u, 1) };
  } else if (l != 1 && i.some((a) => a.comment >= 0)) {
    let a = [];
    for (let { line: u, comment: c, token: h } of i)
      if (c >= 0) {
        let m = u.from + c, p = m + h.length;
        u.text[p - u.from] == " " && p++, a.push({ from: m, to: p });
      }
    return { changes: a };
  }
  return null;
}
const sm = /* @__PURE__ */ Qi.define(), tO = /* @__PURE__ */ Qi.define(), eO = /* @__PURE__ */ nt.define(), VS = /* @__PURE__ */ nt.define({
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
}), qS = /* @__PURE__ */ Oe.define({
  create() {
    return Xi.empty;
  },
  update(l, t) {
    let e = t.state.facet(VS), i = t.annotation(sm);
    if (i) {
      let h = Ge.fromTransaction(t, i.selection), m = i.side, p = m == 0 ? l.undone : l.done;
      return h ? p = qu(p, p.length, e.minDepth, h) : p = GS(p, t.startState.selection), new Xi(m == 0 ? i.rest : p, m == 0 ? p : i.rest);
    }
    let s = t.annotation(tO);
    if ((s == "full" || s == "before") && (l = l.isolate()), t.annotation(oe.addToHistory) === !1)
      return t.changes.empty ? l : l.addMapping(t.changes.desc);
    let a = Ge.fromTransaction(t), u = t.annotation(oe.time), c = t.annotation(oe.userEvent);
    return a ? l = l.addChanges(a, u, c, e, t) : t.selection && (l = l.addSelection(t.startState.selection, u, c, e.newGroupDelay)), (s == "full" || s == "after") && (l = l.isolate()), l;
  },
  toJSON(l) {
    return { done: l.done.map((t) => t.toJSON()), undone: l.undone.map((t) => t.toJSON()) };
  },
  fromJSON(l) {
    return new Xi(l.done.map(Ge.fromJSON), l.undone.map(Ge.fromJSON));
  }
});
function iO(l = {}) {
  return [
    qS,
    VS.of(l),
    tt.domEventHandlers({
      beforeinput(t, e) {
        let i = t.inputType == "historyUndo" ? jS : t.inputType == "historyRedo" ? rm : null;
        return i ? (t.preventDefault(), i(e)) : !1;
      }
    })
  ];
}
function oc(l, t) {
  return function({ state: e, dispatch: i }) {
    if (!t && e.readOnly)
      return !1;
    let s = e.field(qS, !1);
    if (!s)
      return !1;
    let a = s.pop(l, e, t);
    return a ? (i(a), !0) : !1;
  };
}
const jS = /* @__PURE__ */ oc(0, !1), rm = /* @__PURE__ */ oc(1, !1), nO = /* @__PURE__ */ oc(0, !0), lO = /* @__PURE__ */ oc(1, !0);
class Ge {
  constructor(t, e, i, s, a) {
    this.changes = t, this.effects = e, this.mapped = i, this.startSelection = s, this.selectionsAfter = a;
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
    return new Ge(t.changes && ae.fromJSON(t.changes), [], t.mapped && Wi.fromJSON(t.mapped), t.startSelection && X.fromJSON(t.startSelection), t.selectionsAfter.map(X.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(t, e) {
    let i = pi;
    for (let s of t.startState.facet(eO)) {
      let a = s(t);
      a.length && (i = i.concat(a));
    }
    return !i.length && t.changes.empty ? null : new Ge(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, pi);
  }
  static selection(t) {
    return new Ge(void 0, pi, void 0, void 0, t);
  }
}
function qu(l, t, e, i) {
  let s = t + 1 > e + 20 ? t - e - 1 : 0, a = l.slice(s, t);
  return a.push(i), a;
}
function sO(l, t) {
  let e = [], i = !1;
  return l.iterChangedRanges((s, a) => e.push(s, a)), t.iterChangedRanges((s, a, u, c) => {
    for (let h = 0; h < e.length; ) {
      let m = e[h++], p = e[h++];
      c >= m && u <= p && (i = !0);
    }
  }), i;
}
function rO(l, t) {
  return l.ranges.length == t.ranges.length && l.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0;
}
function YS(l, t) {
  return l.length ? t.length ? l.concat(t) : l : t;
}
const pi = [], aO = 200;
function GS(l, t) {
  if (l.length) {
    let e = l[l.length - 1], i = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - aO));
    return i.length && i[i.length - 1].eq(t) ? l : (i.push(t), qu(l, l.length - 1, 1e9, e.setSelAfter(i)));
  } else
    return [Ge.selection([t])];
}
function oO(l) {
  let t = l[l.length - 1], e = l.slice();
  return e[l.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function rd(l, t) {
  if (!l.length)
    return l;
  let e = l.length, i = pi;
  for (; e; ) {
    let s = uO(l[e - 1], t, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let a = l.slice(0, e);
      return a[e - 1] = s, a;
    } else
      t = s.mapped, e--, i = s.selectionsAfter;
  }
  return i.length ? [Ge.selection(i)] : pi;
}
function uO(l, t, e) {
  let i = YS(l.selectionsAfter.length ? l.selectionsAfter.map((c) => c.map(t)) : pi, e);
  if (!l.changes)
    return Ge.selection(i);
  let s = l.changes.map(t), a = t.mapDesc(l.changes, !0), u = l.mapped ? l.mapped.composeDesc(a) : a;
  return new Ge(s, bt.mapEffects(l.effects, t), u, l.startSelection.map(a), i);
}
const cO = /^(input\.type|delete)($|\.)/;
class Xi {
  constructor(t, e, i = 0, s = void 0) {
    this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Xi(this.done, this.undone) : this;
  }
  addChanges(t, e, i, s, a) {
    let u = this.done, c = u[u.length - 1];
    return c && c.changes && !c.changes.empty && t.changes && (!i || cO.test(i)) && (!c.selectionsAfter.length && e - this.prevTime < s.newGroupDelay && s.joinToEvent(a, sO(c.changes, t.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? u = qu(u, u.length - 1, s.minDepth, new Ge(t.changes.compose(c.changes), YS(bt.mapEffects(t.effects, c.changes), c.effects), c.mapped, c.startSelection, pi)) : u = qu(u, u.length, s.minDepth, t), new Xi(u, pi, e, i);
  }
  addSelection(t, e, i, s) {
    let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : pi;
    return a.length > 0 && e - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && rO(a[a.length - 1], t) ? this : new Xi(GS(this.done, t), this.undone, e, i);
  }
  addMapping(t) {
    return new Xi(rd(this.done, t), rd(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, i) {
    let s = t == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let a = s[s.length - 1], u = a.selectionsAfter[0] || (a.startSelection ? a.startSelection.map(a.changes.invertedDesc, 1) : e.selection);
    if (i && a.selectionsAfter.length)
      return e.update({
        selection: a.selectionsAfter[a.selectionsAfter.length - 1],
        annotations: sm.of({ side: t, rest: oO(s), selection: u }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (a.changes) {
      let c = s.length == 1 ? pi : s.slice(0, s.length - 1);
      return a.mapped && (c = rd(c, a.mapped)), e.update({
        changes: a.changes,
        selection: a.startSelection,
        effects: a.effects,
        annotations: sm.of({ side: t, rest: c, selection: u }),
        filter: !1,
        userEvent: t == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Xi.empty = /* @__PURE__ */ new Xi(pi, pi);
const fO = [
  { key: "Mod-z", run: jS, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: rm, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: rm, preventDefault: !0 },
  { key: "Mod-u", run: nO, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: lO, preventDefault: !0 }
];
function qs(l, t) {
  return X.create(l.ranges.map(t), l.mainIndex);
}
function Mi(l, t) {
  return l.update({ selection: t, scrollIntoView: !0, userEvent: "select" });
}
function Ti({ state: l, dispatch: t }, e) {
  let i = qs(l.selection, e);
  return i.eq(l.selection, !0) ? !1 : (t(Mi(l, i)), !0);
}
function uc(l, t) {
  return X.cursor(t ? l.to : l.from);
}
function XS(l, t) {
  return Ti(l, (e) => e.empty ? l.moveByChar(e, t) : uc(e, t));
}
function De(l) {
  return l.textDirectionAt(l.state.selection.main.head) == Yt.LTR;
}
const WS = (l) => XS(l, !De(l)), KS = (l) => XS(l, De(l));
function QS(l, t) {
  return Ti(l, (e) => e.empty ? l.moveByGroup(e, t) : uc(e, t));
}
const hO = (l) => QS(l, !De(l)), dO = (l) => QS(l, De(l));
function mO(l, t, e) {
  if (t.type.prop(e))
    return !0;
  let i = t.to - t.from;
  return i && (i > 2 || /[^\s,.;:]/.test(l.sliceDoc(t.from, t.to))) || t.firstChild;
}
function cc(l, t, e) {
  let i = Te(l).resolveInner(t.head), s = e ? Dt.closedBy : Dt.openedBy;
  for (let h = t.head; ; ) {
    let m = e ? i.childAfter(h) : i.childBefore(h);
    if (!m)
      break;
    mO(l, m, s) ? i = m : h = e ? m.to : m.from;
  }
  let a = i.type.prop(s), u, c;
  return a && (u = e ? Gi(l, i.from, 1) : Gi(l, i.to, -1)) && u.matched ? c = e ? u.end.to : u.end.from : c = e ? i.to : i.from, X.cursor(c, e ? -1 : 1);
}
const pO = (l) => Ti(l, (t) => cc(l.state, t, !De(l))), gO = (l) => Ti(l, (t) => cc(l.state, t, De(l)));
function ZS(l, t) {
  return Ti(l, (e) => {
    if (!e.empty)
      return uc(e, t);
    let i = l.moveVertically(e, t);
    return i.head != e.head ? i : l.moveToLineBoundary(e, t);
  });
}
const IS = (l) => ZS(l, !1), FS = (l) => ZS(l, !0);
function PS(l) {
  let t = l.scrollDOM.clientHeight < l.scrollDOM.scrollHeight - 2, e = 0, i = 0, s;
  if (t) {
    for (let a of l.state.facet(tt.scrollMargins)) {
      let u = a(l);
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
function JS(l, t) {
  let e = PS(l), { state: i } = l, s = qs(i.selection, (u) => u.empty ? l.moveVertically(u, t, e.height) : uc(u, t));
  if (s.eq(i.selection))
    return !1;
  let a;
  if (e.selfScroll) {
    let u = l.coordsAtPos(i.selection.main.head), c = l.scrollDOM.getBoundingClientRect(), h = c.top + e.marginTop, m = c.bottom - e.marginBottom;
    u && u.top > h && u.bottom < m && (a = tt.scrollIntoView(s.main.head, { y: "start", yMargin: u.top - h }));
  }
  return l.dispatch(Mi(i, s), { effects: a }), !0;
}
const dv = (l) => JS(l, !1), am = (l) => JS(l, !0);
function el(l, t, e) {
  let i = l.lineBlockAt(t.head), s = l.moveToLineBoundary(t, e);
  if (s.head == t.head && s.head != (e ? i.to : i.from) && (s = l.moveToLineBoundary(t, e, !1)), !e && s.head == i.from && i.length) {
    let a = /^\s*/.exec(l.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    a && t.head != i.from + a && (s = X.cursor(i.from + a));
  }
  return s;
}
const yO = (l) => Ti(l, (t) => el(l, t, !0)), vO = (l) => Ti(l, (t) => el(l, t, !1)), bO = (l) => Ti(l, (t) => el(l, t, !De(l))), SO = (l) => Ti(l, (t) => el(l, t, De(l))), xO = (l) => Ti(l, (t) => X.cursor(l.lineBlockAt(t.head).from, 1)), wO = (l) => Ti(l, (t) => X.cursor(l.lineBlockAt(t.head).to, -1));
function AO(l, t, e) {
  let i = !1, s = qs(l.selection, (a) => {
    let u = Gi(l, a.head, -1) || Gi(l, a.head, 1) || a.head > 0 && Gi(l, a.head - 1, 1) || a.head < l.doc.length && Gi(l, a.head + 1, -1);
    if (!u || !u.end)
      return a;
    i = !0;
    let c = u.start.from == a.head ? u.end.to : u.end.from;
    return X.cursor(c);
  });
  return i ? (t(Mi(l, s)), !0) : !1;
}
const CO = ({ state: l, dispatch: t }) => AO(l, t);
function bi(l, t) {
  let e = qs(l.state.selection, (i) => {
    let s = t(i);
    return X.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0, s.assoc);
  });
  return e.eq(l.state.selection) ? !1 : (l.dispatch(Mi(l.state, e)), !0);
}
function $S(l, t) {
  return bi(l, (e) => l.moveByChar(e, t));
}
const tx = (l) => $S(l, !De(l)), ex = (l) => $S(l, De(l));
function ix(l, t) {
  return bi(l, (e) => l.moveByGroup(e, t));
}
const kO = (l) => ix(l, !De(l)), MO = (l) => ix(l, De(l)), TO = (l) => bi(l, (t) => cc(l.state, t, !De(l))), OO = (l) => bi(l, (t) => cc(l.state, t, De(l)));
function nx(l, t) {
  return bi(l, (e) => l.moveVertically(e, t));
}
const lx = (l) => nx(l, !1), sx = (l) => nx(l, !0);
function rx(l, t) {
  return bi(l, (e) => l.moveVertically(e, t, PS(l).height));
}
const mv = (l) => rx(l, !1), pv = (l) => rx(l, !0), DO = (l) => bi(l, (t) => el(l, t, !0)), EO = (l) => bi(l, (t) => el(l, t, !1)), RO = (l) => bi(l, (t) => el(l, t, !De(l))), BO = (l) => bi(l, (t) => el(l, t, De(l))), NO = (l) => bi(l, (t) => X.cursor(l.lineBlockAt(t.head).from)), LO = (l) => bi(l, (t) => X.cursor(l.lineBlockAt(t.head).to)), gv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: 0 })), !0), yv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: l.doc.length })), !0), vv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: l.selection.main.anchor, head: 0 })), !0), bv = ({ state: l, dispatch: t }) => (t(Mi(l, { anchor: l.selection.main.anchor, head: l.doc.length })), !0), zO = ({ state: l, dispatch: t }) => (t(l.update({ selection: { anchor: 0, head: l.doc.length }, userEvent: "select" })), !0), HO = ({ state: l, dispatch: t }) => {
  let e = fc(l).map(({ from: i, to: s }) => X.range(i, Math.min(s + 1, l.doc.length)));
  return t(l.update({ selection: X.create(e), userEvent: "select" })), !0;
}, _O = ({ state: l, dispatch: t }) => {
  let e = qs(l.selection, (i) => {
    let s = Te(l), a = s.resolveStack(i.from, 1);
    if (i.empty) {
      let u = s.resolveStack(i.from, -1);
      u.node.from >= a.node.from && u.node.to <= a.node.to && (a = u);
    }
    for (let u = a; u; u = u.next) {
      let { node: c } = u;
      if ((c.from < i.from && c.to >= i.to || c.to > i.to && c.from <= i.from) && u.next)
        return X.range(c.to, c.from);
    }
    return i;
  });
  return e.eq(l.selection) ? !1 : (t(Mi(l, e)), !0);
};
function ax(l, t) {
  let { state: e } = l, i = e.selection, s = e.selection.ranges.slice();
  for (let a of e.selection.ranges) {
    let u = e.doc.lineAt(a.head);
    if (t ? u.to < l.state.doc.length : u.from > 0)
      for (let c = a; ; ) {
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
  return s.length == i.ranges.length ? !1 : (l.dispatch(Mi(e, X.create(s, s.length - 1))), !0);
}
const UO = (l) => ax(l, !1), VO = (l) => ax(l, !0), qO = ({ state: l, dispatch: t }) => {
  let e = l.selection, i = null;
  return e.ranges.length > 1 ? i = X.create([e.main]) : e.main.empty || (i = X.create([X.cursor(e.main.head)])), i ? (t(Mi(l, i)), !0) : !1;
};
function Ta(l, t) {
  if (l.state.readOnly)
    return !1;
  let e = "delete.selection", { state: i } = l, s = i.changeByRange((a) => {
    let { from: u, to: c } = a;
    if (u == c) {
      let h = t(a);
      h < u ? (e = "delete.backward", h = uu(l, h, !1)) : h > u && (e = "delete.forward", h = uu(l, h, !0)), u = Math.min(u, h), c = Math.max(c, h);
    } else
      u = uu(l, u, !1), c = uu(l, c, !0);
    return u == c ? { range: a } : { changes: { from: u, to: c }, range: X.cursor(u, u < a.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (l.dispatch(i.update(s, {
    scrollIntoView: !0,
    userEvent: e,
    effects: e == "delete.selection" ? tt.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function uu(l, t, e) {
  if (l instanceof tt)
    for (let i of l.state.facet(tt.atomicRanges).map((s) => s(l)))
      i.between(t, t, (s, a) => {
        s < t && a > t && (t = e ? a : s);
      });
  return t;
}
const ox = (l, t, e) => Ta(l, (i) => {
  let s = i.from, { state: a } = l, u = a.doc.lineAt(s), c, h;
  if (e && !t && s > u.from && s < u.from + 200 && !/[^ \t]/.test(c = u.text.slice(0, s - u.from))) {
    if (c[c.length - 1] == "	")
      return s - 1;
    let m = Vs(c, a.tabSize), p = m % _u(a) || _u(a);
    for (let y = 0; y < p && c[c.length - 1 - y] == " "; y++)
      s--;
    h = s;
  } else
    h = me(u.text, s - u.from, t, t) + u.from, h == s && u.number != (t ? a.doc.lines : 1) ? h += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(u.text.slice(h - u.from, s - u.from)) && (h = me(u.text, h - u.from, !1, !1) + u.from);
  return h;
}), om = (l) => ox(l, !1, !0), ux = (l) => ox(l, !0, !1), cx = (l, t) => Ta(l, (e) => {
  let i = e.head, { state: s } = l, a = s.doc.lineAt(i), u = s.charCategorizer(i);
  for (let c = null; ; ) {
    if (i == (t ? a.to : a.from)) {
      i == e.head && a.number != (t ? s.doc.lines : 1) && (i += t ? 1 : -1);
      break;
    }
    let h = me(a.text, i - a.from, t) + a.from, m = a.text.slice(Math.min(i, h) - a.from, Math.max(i, h) - a.from), p = u(m);
    if (c != null && p != c)
      break;
    (m != " " || i != e.head) && (c = p), i = h;
  }
  return i;
}), fx = (l) => cx(l, !1), jO = (l) => cx(l, !0), YO = (l) => Ta(l, (t) => {
  let e = l.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
}), GO = (l) => Ta(l, (t) => {
  let e = l.moveToLineBoundary(t, !1).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), XO = (l) => Ta(l, (t) => {
  let e = l.moveToLineBoundary(t, !0).head;
  return t.head < e ? e : Math.min(l.state.doc.length, t.head + 1);
}), WO = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let e = l.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: Rt.of(["", ""]) },
    range: X.cursor(i.from)
  }));
  return t(l.update(e, { scrollIntoView: !0, userEvent: "input" })), !0;
}, KO = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let e = l.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == l.doc.length)
      return { range: i };
    let s = i.from, a = l.doc.lineAt(s), u = s == a.from ? s - 1 : me(a.text, s - a.from, !1) + a.from, c = s == a.to ? s + 1 : me(a.text, s - a.from, !0) + a.from;
    return {
      changes: { from: u, to: c, insert: l.doc.slice(s, c).append(l.doc.slice(u, s)) },
      range: X.cursor(c)
    };
  });
  return e.changes.empty ? !1 : (t(l.update(e, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function fc(l) {
  let t = [], e = -1;
  for (let i of l.selection.ranges) {
    let s = l.doc.lineAt(i.from), a = l.doc.lineAt(i.to);
    if (!i.empty && i.to == a.from && (a = l.doc.lineAt(i.to - 1)), e >= s.number) {
      let u = t[t.length - 1];
      u.to = a.to, u.ranges.push(i);
    } else
      t.push({ from: s.from, to: a.to, ranges: [i] });
    e = a.number + 1;
  }
  return t;
}
function hx(l, t, e) {
  if (l.readOnly)
    return !1;
  let i = [], s = [];
  for (let a of fc(l)) {
    if (e ? a.to == l.doc.length : a.from == 0)
      continue;
    let u = l.doc.lineAt(e ? a.to + 1 : a.from - 1), c = u.length + 1;
    if (e) {
      i.push({ from: a.to, to: u.to }, { from: a.from, insert: u.text + l.lineBreak });
      for (let h of a.ranges)
        s.push(X.range(Math.min(l.doc.length, h.anchor + c), Math.min(l.doc.length, h.head + c)));
    } else {
      i.push({ from: u.from, to: a.from }, { from: a.to, insert: l.lineBreak + u.text });
      for (let h of a.ranges)
        s.push(X.range(h.anchor - c, h.head - c));
    }
  }
  return i.length ? (t(l.update({
    changes: i,
    scrollIntoView: !0,
    selection: X.create(s, l.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const QO = ({ state: l, dispatch: t }) => hx(l, t, !1), ZO = ({ state: l, dispatch: t }) => hx(l, t, !0);
function dx(l, t, e) {
  if (l.readOnly)
    return !1;
  let i = [];
  for (let a of fc(l))
    e ? i.push({ from: a.from, insert: l.doc.slice(a.from, a.to) + l.lineBreak }) : i.push({ from: a.to, insert: l.lineBreak + l.doc.slice(a.from, a.to) });
  let s = l.changes(i);
  return t(l.update({
    changes: s,
    selection: l.selection.map(s, e ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
const IO = ({ state: l, dispatch: t }) => dx(l, t, !1), FO = ({ state: l, dispatch: t }) => dx(l, t, !0), PO = (l) => {
  if (l.state.readOnly)
    return !1;
  let { state: t } = l, e = t.changes(fc(t).map(({ from: s, to: a }) => (s > 0 ? s-- : a < t.doc.length && a++, { from: s, to: a }))), i = qs(t.selection, (s) => {
    let a;
    if (l.lineWrapping) {
      let u = l.lineBlockAt(s.head), c = l.coordsAtPos(s.head, s.assoc || 1);
      c && (a = u.bottom + l.documentTop - c.bottom + l.defaultLineHeight / 2);
    }
    return l.moveVertically(s, !0, a);
  }).map(e);
  return l.dispatch({ changes: e, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function JO(l, t) {
  if (/\(\)|\[\]|\{\}/.test(l.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let e = Te(l).resolveInner(t), i = e.childBefore(t), s = e.childAfter(t), a;
  return i && s && i.to <= t && s.from >= t && (a = i.type.prop(Dt.closedBy)) && a.indexOf(s.name) > -1 && l.doc.lineAt(i.to).from == l.doc.lineAt(s.from).from && !/\S/.test(l.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const um = /* @__PURE__ */ mx(!1), $O = /* @__PURE__ */ mx(!0);
function mx(l) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly)
      return !1;
    let i = t.changeByRange((s) => {
      let { from: a, to: u } = s, c = t.doc.lineAt(a), h = !l && a == u && JO(t, a);
      l && (a = u = (u <= c.to ? c : t.doc.lineAt(u)).to);
      let m = new rc(t, { simulateBreak: a, simulateDoubleBreak: !!h }), p = Hm(m, a);
      for (p == null && (p = Vs(/^\s*/.exec(t.doc.lineAt(a).text)[0], t.tabSize)); u < c.to && /\s/.test(c.text[u - c.from]); )
        u++;
      h ? { from: a, to: u } = h : a > c.from && a < c.from + 100 && !/\S/.test(c.text.slice(0, a)) && (a = c.from);
      let y = ["", pa(t, p)];
      return h && y.push(pa(t, m.lineIndent(c.from, -1))), {
        changes: { from: a, to: u, insert: Rt.of(y) },
        range: X.cursor(a + 1 + y[1].length)
      };
    });
    return e(t.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function qm(l, t) {
  let e = -1;
  return l.changeByRange((i) => {
    let s = [];
    for (let u = i.from; u <= i.to; ) {
      let c = l.doc.lineAt(u);
      c.number > e && (i.empty || i.to > c.from) && (t(c, s, i), e = c.number), u = c.to + 1;
    }
    let a = l.changes(s);
    return {
      changes: s,
      range: X.range(a.mapPos(i.anchor, 1), a.mapPos(i.head, 1))
    };
  });
}
const tD = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let e = /* @__PURE__ */ Object.create(null), i = new rc(l, { overrideIndentation: (a) => {
    let u = e[a];
    return u ?? -1;
  } }), s = qm(l, (a, u, c) => {
    let h = Hm(i, a.from);
    if (h == null)
      return;
    /\S/.test(a.text) || (h = 0);
    let m = /^\s*/.exec(a.text)[0], p = pa(l, h);
    (m != p || c.from < a.from + m.length) && (e[a.from] = h, u.push({ from: a.from, to: a.from + m.length, insert: p }));
  });
  return s.changes.empty || t(l.update(s, { userEvent: "indent" })), !0;
}, px = ({ state: l, dispatch: t }) => l.readOnly ? !1 : (t(l.update(qm(l, (e, i) => {
  i.push({ from: e.from, insert: l.facet(sc) });
}), { userEvent: "input.indent" })), !0), gx = ({ state: l, dispatch: t }) => l.readOnly ? !1 : (t(l.update(qm(l, (e, i) => {
  let s = /^\s*/.exec(e.text)[0];
  if (!s)
    return;
  let a = Vs(s, l.tabSize), u = 0, c = pa(l, Math.max(0, a - _u(l)));
  for (; u < s.length && u < c.length && s.charCodeAt(u) == c.charCodeAt(u); )
    u++;
  i.push({ from: e.from + u, to: e.from + s.length, insert: c.slice(u) });
}), { userEvent: "delete.dedent" })), !0), eD = (l) => (l.setTabFocusMode(), !0), iD = [
  { key: "Ctrl-b", run: WS, shift: tx, preventDefault: !0 },
  { key: "Ctrl-f", run: KS, shift: ex },
  { key: "Ctrl-p", run: IS, shift: lx },
  { key: "Ctrl-n", run: FS, shift: sx },
  { key: "Ctrl-a", run: xO, shift: NO },
  { key: "Ctrl-e", run: wO, shift: LO },
  { key: "Ctrl-d", run: ux },
  { key: "Ctrl-h", run: om },
  { key: "Ctrl-k", run: YO },
  { key: "Ctrl-Alt-h", run: fx },
  { key: "Ctrl-o", run: WO },
  { key: "Ctrl-t", run: KO },
  { key: "Ctrl-v", run: am }
], nD = /* @__PURE__ */ [
  { key: "ArrowLeft", run: WS, shift: tx, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: hO, shift: kO, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: bO, shift: RO, preventDefault: !0 },
  { key: "ArrowRight", run: KS, shift: ex, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: dO, shift: MO, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: SO, shift: BO, preventDefault: !0 },
  { key: "ArrowUp", run: IS, shift: lx, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: gv, shift: vv },
  { mac: "Ctrl-ArrowUp", run: dv, shift: mv },
  { key: "ArrowDown", run: FS, shift: sx, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: yv, shift: bv },
  { mac: "Ctrl-ArrowDown", run: am, shift: pv },
  { key: "PageUp", run: dv, shift: mv },
  { key: "PageDown", run: am, shift: pv },
  { key: "Home", run: vO, shift: EO, preventDefault: !0 },
  { key: "Mod-Home", run: gv, shift: vv },
  { key: "End", run: yO, shift: DO, preventDefault: !0 },
  { key: "Mod-End", run: yv, shift: bv },
  { key: "Enter", run: um, shift: um },
  { key: "Mod-a", run: zO },
  { key: "Backspace", run: om, shift: om, preventDefault: !0 },
  { key: "Delete", run: ux, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: fx, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: jO, preventDefault: !0 },
  { mac: "Mod-Backspace", run: GO, preventDefault: !0 },
  { mac: "Mod-Delete", run: XO, preventDefault: !0 }
].concat(/* @__PURE__ */ iD.map((l) => ({ mac: l.key, run: l.run, shift: l.shift }))), lD = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: pO, shift: TO },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: gO, shift: OO },
  { key: "Alt-ArrowUp", run: QO },
  { key: "Shift-Alt-ArrowUp", run: IO },
  { key: "Alt-ArrowDown", run: ZO },
  { key: "Shift-Alt-ArrowDown", run: FO },
  { key: "Mod-Alt-ArrowUp", run: UO },
  { key: "Mod-Alt-ArrowDown", run: VO },
  { key: "Escape", run: qO },
  { key: "Mod-Enter", run: $O },
  { key: "Alt-l", mac: "Ctrl-l", run: HO },
  { key: "Mod-i", run: _O, preventDefault: !0 },
  { key: "Mod-[", run: gx },
  { key: "Mod-]", run: px },
  { key: "Mod-Alt-\\", run: tD },
  { key: "Shift-Mod-k", run: PO },
  { key: "Shift-Mod-\\", run: CO },
  { key: "Mod-/", run: QT },
  { key: "Alt-A", run: IT },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: eD }
].concat(nD), sD = { key: "Tab", run: px, shift: gx }, Sv = typeof String.prototype.normalize == "function" ? (l) => l.normalize("NFKD") : (l) => l;
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
  constructor(t, e, i = 0, s = t.length, a, u) {
    this.test = u, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(i, s), this.bufferStart = i, this.normalize = a ? (c) => a(Sv(c)) : Sv, this.query = this.normalize(e);
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
      let e = mm(t), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Vi(t);
      let s = this.normalize(e);
      if (s.length)
        for (let a = 0, u = i; ; a++) {
          let c = s.charCodeAt(a), h = this.match(c, u, this.bufferPos + this.bufferStart);
          if (a == s.length - 1) {
            if (h)
              return this.value = h, this;
            break;
          }
          u == i && a < e.length && e.charCodeAt(a) == c && u++;
        }
    }
  }
  match(t, e, i) {
    let s = null;
    for (let a = 0; a < this.matches.length; a += 2) {
      let u = this.matches[a], c = !1;
      this.query.charCodeAt(u) == t && (u == this.query.length - 1 ? s = { from: this.matches[a + 1], to: i } : (this.matches[a]++, c = !0)), c || (this.matches.splice(a, 2), a -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? s = { from: e, to: i } : this.matches.push(1, e)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (_s.prototype[Symbol.iterator] = function() {
  return this;
});
const yx = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, jm = "gm" + (/x/.unicode == null ? "" : "u");
class vx {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(t, e, i, s = 0, a = t.length) {
    if (this.text = t, this.to = a, this.curLine = "", this.done = !1, this.value = yx, /\\[sWDnr]|\n|\r|\[\^/.test(e))
      return new bx(t, e, i, s, a);
    this.re = new RegExp(e, jm + (i?.ignoreCase ? "i" : "")), this.test = i?.test, this.iter = t.iter();
    let u = t.lineAt(s);
    this.curLineStart = u.from, this.matchPos = ju(t, s), this.getLine(this.curLineStart);
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
        if (this.matchPos = ju(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, e)))
          return this.value = { from: i, to: s, match: e }, this;
        t = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), t = 0;
      else
        return this.done = !0, this;
    }
  }
}
const ad = /* @__PURE__ */ new WeakMap();
class Ds {
  constructor(t, e) {
    this.from = t, this.text = e;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(t, e, i) {
    let s = ad.get(t);
    if (!s || s.from >= i || s.to <= e) {
      let c = new Ds(e, t.sliceString(e, i));
      return ad.set(t, c), c;
    }
    if (s.from == e && s.to == i)
      return s;
    let { text: a, from: u } = s;
    return u > e && (a = t.sliceString(e, u) + a, u = e), s.to < i && (a += t.sliceString(s.to, i)), ad.set(t, new Ds(u, a)), new Ds(e, a.slice(e - u, i - u));
  }
}
class bx {
  constructor(t, e, i, s, a) {
    this.text = t, this.to = a, this.done = !1, this.value = yx, this.matchPos = ju(t, s), this.re = new RegExp(e, jm + (i?.ignoreCase ? "i" : "")), this.test = i?.test, this.flat = Ds.get(t, s, this.chunkEnd(
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
          return this.value = { from: i, to: s, match: e }, this.matchPos = ju(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Ds.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (vx.prototype[Symbol.iterator] = bx.prototype[Symbol.iterator] = function() {
  return this;
});
function rD(l) {
  try {
    return new RegExp(l, jm), !0;
  } catch {
    return !1;
  }
}
function ju(l, t) {
  if (t >= l.length)
    return t;
  let e = l.lineAt(t), i;
  for (; t < e.to && (i = e.text.charCodeAt(t - e.from)) >= 56320 && i < 57344; )
    t++;
  return t;
}
const aD = (l) => {
  let { state: t } = l, e = String(t.doc.lineAt(l.state.selection.main.head).number), { close: i, result: s } = AM(l, {
    label: t.phrase("Go to line"),
    input: { type: "text", name: "line", value: e },
    focus: !0,
    submitLabel: t.phrase("go")
  });
  return s.then((a) => {
    let u = a && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(a.elements.line.value);
    if (!u) {
      l.dispatch({ effects: i });
      return;
    }
    let c = t.doc.lineAt(t.selection.main.head), [, h, m, p, y] = u, v = p ? +p.slice(1) : 0, S = m ? +m : c.number;
    if (m && y) {
      let k = S / 100;
      h && (k = k * (h == "-" ? -1 : 1) + c.number / t.doc.lines), S = Math.round(t.doc.lines * k);
    } else m && h && (S = S * (h == "-" ? -1 : 1) + c.number);
    let w = t.doc.line(Math.max(1, Math.min(t.doc.lines, S))), A = X.cursor(w.from + Math.max(0, Math.min(v, w.length)));
    l.dispatch({
      effects: [i, tt.scrollIntoView(A.from, { y: "center" })],
      selection: A
    });
  }), !0;
}, oD = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, uD = /* @__PURE__ */ nt.define({
  combine(l) {
    return Zi(l, oD, {
      highlightWordAroundCursor: (t, e) => t || e,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function cD(l) {
  return [pD, mD];
}
const fD = /* @__PURE__ */ ft.mark({ class: "cm-selectionMatch" }), hD = /* @__PURE__ */ ft.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function xv(l, t, e, i) {
  return (e == 0 || l(t.sliceDoc(e - 1, e)) != Qt.Word) && (i == t.doc.length || l(t.sliceDoc(i, i + 1)) != Qt.Word);
}
function dD(l, t, e, i) {
  return l(t.sliceDoc(e, e + 1)) == Qt.Word && l(t.sliceDoc(i - 1, i)) == Qt.Word;
}
const mD = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.decorations = this.getDeco(l);
  }
  update(l) {
    (l.selectionSet || l.docChanged || l.viewportChanged) && (this.decorations = this.getDeco(l.view));
  }
  getDeco(l) {
    let t = l.state.facet(uD), { state: e } = l, i = e.selection;
    if (i.ranges.length > 1)
      return ft.none;
    let s = i.main, a, u = null;
    if (s.empty) {
      if (!t.highlightWordAroundCursor)
        return ft.none;
      let h = e.wordAt(s.head);
      if (!h)
        return ft.none;
      u = e.charCategorizer(s.head), a = e.sliceDoc(h.from, h.to);
    } else {
      let h = s.to - s.from;
      if (h < t.minSelectionLength || h > 200)
        return ft.none;
      if (t.wholeWords) {
        if (a = e.sliceDoc(s.from, s.to), u = e.charCategorizer(s.head), !(xv(u, e, s.from, s.to) && dD(u, e, s.from, s.to)))
          return ft.none;
      } else if (a = e.sliceDoc(s.from, s.to), !a)
        return ft.none;
    }
    let c = [];
    for (let h of l.visibleRanges) {
      let m = new _s(e.doc, a, h.from, h.to);
      for (; !m.next().done; ) {
        let { from: p, to: y } = m.value;
        if ((!u || xv(u, e, p, y)) && (s.empty && p <= s.from && y >= s.to ? c.push(hD.range(p, y)) : (p >= s.to || y <= s.from) && c.push(fD.range(p, y)), c.length > t.maxMatches))
          return ft.none;
      }
    }
    return ft.set(c);
  }
}, {
  decorations: (l) => l.decorations
}), pD = /* @__PURE__ */ tt.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), gD = ({ state: l, dispatch: t }) => {
  let { selection: e } = l, i = X.create(e.ranges.map((s) => l.wordAt(s.head) || X.cursor(s.head)), e.mainIndex);
  return i.eq(e) ? !1 : (t(l.update({ selection: i })), !0);
};
function yD(l, t) {
  let { main: e, ranges: i } = l.selection, s = l.wordAt(e.head), a = s && s.from == e.from && s.to == e.to;
  for (let u = !1, c = new _s(l.doc, t, i[i.length - 1].to); ; )
    if (c.next(), c.done) {
      if (u)
        return null;
      c = new _s(l.doc, t, 0, Math.max(0, i[i.length - 1].from - 1)), u = !0;
    } else {
      if (u && i.some((h) => h.from == c.value.from))
        continue;
      if (a) {
        let h = l.wordAt(c.value.from);
        if (!h || h.from != c.value.from || h.to != c.value.to)
          continue;
      }
      return c.value;
    }
}
const vD = ({ state: l, dispatch: t }) => {
  let { ranges: e } = l.selection;
  if (e.some((a) => a.from === a.to))
    return gD({ state: l, dispatch: t });
  let i = l.sliceDoc(e[0].from, e[0].to);
  if (l.selection.ranges.some((a) => l.sliceDoc(a.from, a.to) != i))
    return !1;
  let s = yD(l, i);
  return s ? (t(l.update({
    selection: l.selection.addRange(X.range(s.from, s.to), !1),
    effects: tt.scrollIntoView(s.to)
  })), !0) : !1;
}, js = /* @__PURE__ */ nt.define({
  combine(l) {
    return Zi(l, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (t) => new BD(t),
      scrollToMatch: (t) => tt.scrollIntoView(t)
    });
  }
});
class Sx {
  /**
  Create a query object.
  */
  constructor(t) {
    this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || rD(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord, this.test = t.test;
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
    return this.regexp ? new CD(this) : new xD(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(t, e = 0, i) {
    let s = t.doc ? t : Ot.create({ doc: t });
    return i == null && (i = s.doc.length), this.regexp ? xs(this, s, e, i) : Ss(this, s, e, i);
  }
}
class xx {
  constructor(t) {
    this.spec = t;
  }
}
function bD(l, t, e) {
  return (i, s, a, u) => {
    if (e && !e(i, s, a, u))
      return !1;
    let c = i >= u && s <= u + a.length ? a.slice(i - u, s - u) : t.doc.sliceString(i, s);
    return l(c, t, i, s);
  };
}
function Ss(l, t, e, i) {
  let s;
  return l.wholeWord && (s = SD(t.doc, t.charCategorizer(t.selection.main.head))), l.test && (s = bD(l.test, t, s)), new _s(t.doc, l.unquoted, e, i, l.caseSensitive ? void 0 : (a) => a.toLowerCase(), s);
}
function SD(l, t) {
  return (e, i, s, a) => ((a > e || a + s.length < i) && (a = Math.max(0, e - 2), s = l.sliceString(a, Math.min(l.length, i + 2))), (t(Yu(s, e - a)) != Qt.Word || t(Gu(s, e - a)) != Qt.Word) && (t(Gu(s, i - a)) != Qt.Word || t(Yu(s, i - a)) != Qt.Word));
}
class xD extends xx {
  constructor(t) {
    super(t);
  }
  nextMatch(t, e, i) {
    let s = Ss(this.spec, t, i, t.doc.length).nextOverlapping();
    if (s.done) {
      let a = Math.min(t.doc.length, e + this.spec.unquoted.length);
      s = Ss(this.spec, t, 0, a).nextOverlapping();
    }
    return s.done || s.value.from == e && s.value.to == i ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(t, e, i) {
    for (let s = i; ; ) {
      let a = Math.max(e, s - 1e4 - this.spec.unquoted.length), u = Ss(this.spec, t, a, s), c = null;
      for (; !u.nextOverlapping().done; )
        c = u.value;
      if (c)
        return c;
      if (a == e)
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
    let a = Ss(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, t.doc.length));
    for (; !a.next().done; )
      s(a.value.from, a.value.to);
  }
}
function wD(l, t, e) {
  return (i, s, a) => (!e || e(i, s, a)) && l(a[0], t, i, s);
}
function xs(l, t, e, i) {
  let s;
  return l.wholeWord && (s = AD(t.charCategorizer(t.selection.main.head))), l.test && (s = wD(l.test, t, s)), new vx(t.doc, l.search, { ignoreCase: !l.caseSensitive, test: s }, e, i);
}
function Yu(l, t) {
  return l.slice(me(l, t, !1), t);
}
function Gu(l, t) {
  return l.slice(t, me(l, t));
}
function AD(l) {
  return (t, e, i) => !i[0].length || (l(Yu(i.input, i.index)) != Qt.Word || l(Gu(i.input, i.index)) != Qt.Word) && (l(Gu(i.input, i.index + i[0].length)) != Qt.Word || l(Yu(i.input, i.index + i[0].length)) != Qt.Word);
}
class CD extends xx {
  nextMatch(t, e, i) {
    let s = xs(this.spec, t, i, t.doc.length).next();
    return s.done && (s = xs(this.spec, t, 0, e).next()), s.done ? null : s.value;
  }
  prevMatchInRange(t, e, i) {
    for (let s = 1; ; s++) {
      let a = Math.max(
        e,
        i - s * 1e4
        /* FindPrev.ChunkSize */
      ), u = xs(this.spec, t, a, i), c = null;
      for (; !u.next().done; )
        c = u.value;
      if (c && (a == e || c.from > a + 10))
        return c;
      if (a == e)
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
        let a = +i.slice(0, s);
        if (a > 0 && a < t.match.length)
          return t.match[a] + i.slice(s);
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
    let a = xs(this.spec, t, Math.max(
      0,
      e - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, t.doc.length));
    for (; !a.next().done; )
      s(a.value.from, a.value.to);
  }
}
const ga = /* @__PURE__ */ bt.define(), Ym = /* @__PURE__ */ bt.define(), Kn = /* @__PURE__ */ Oe.define({
  create(l) {
    return new od(cm(l).create(), null);
  },
  update(l, t) {
    for (let e of t.effects)
      e.is(ga) ? l = new od(e.value.create(), l.panel) : e.is(Ym) && (l = new od(l.query, e.value ? Gm : null));
    return l;
  },
  provide: (l) => ha.from(l, (t) => t.panel)
});
class od {
  constructor(t, e) {
    this.query = t, this.panel = e;
  }
}
const kD = /* @__PURE__ */ ft.mark({ class: "cm-searchMatch" }), MD = /* @__PURE__ */ ft.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), TD = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.view = l, this.decorations = this.highlight(l.state.field(Kn));
  }
  update(l) {
    let t = l.state.field(Kn);
    (t != l.startState.field(Kn) || l.docChanged || l.selectionSet || l.viewportChanged) && (this.decorations = this.highlight(t));
  }
  highlight({ query: l, panel: t }) {
    if (!t || !l.spec.valid)
      return ft.none;
    let { view: e } = this, i = new Ki();
    for (let s = 0, a = e.visibleRanges, u = a.length; s < u; s++) {
      let { from: c, to: h } = a[s];
      for (; s < u - 1 && h > a[s + 1].from - 500; )
        h = a[++s].to;
      l.highlight(e.state, c, h, (m, p) => {
        let y = e.state.selection.ranges.some((v) => v.from == m && v.to == p);
        i.add(m, p, y ? MD : kD);
      });
    }
    return i.finish();
  }
}, {
  decorations: (l) => l.decorations
});
function Oa(l) {
  return (t) => {
    let e = t.state.field(Kn, !1);
    return e && e.query.spec.valid ? l(t, e) : Cx(t);
  };
}
const Xu = /* @__PURE__ */ Oa((l, { query: t }) => {
  let { to: e } = l.state.selection.main, i = t.nextMatch(l.state, e, e);
  if (!i)
    return !1;
  let s = X.single(i.from, i.to), a = l.state.facet(js);
  return l.dispatch({
    selection: s,
    effects: [Xm(l, i), a.scrollToMatch(s.main, l)],
    userEvent: "select.search"
  }), Ax(l), !0;
}), Wu = /* @__PURE__ */ Oa((l, { query: t }) => {
  let { state: e } = l, { from: i } = e.selection.main, s = t.prevMatch(e, i, i);
  if (!s)
    return !1;
  let a = X.single(s.from, s.to), u = l.state.facet(js);
  return l.dispatch({
    selection: a,
    effects: [Xm(l, s), u.scrollToMatch(a.main, l)],
    userEvent: "select.search"
  }), Ax(l), !0;
}), OD = /* @__PURE__ */ Oa((l, { query: t }) => {
  let e = t.matchAll(l.state, 1e3);
  return !e || !e.length ? !1 : (l.dispatch({
    selection: X.create(e.map((i) => X.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), DD = ({ state: l, dispatch: t }) => {
  let e = l.selection;
  if (e.ranges.length > 1 || e.main.empty)
    return !1;
  let { from: i, to: s } = e.main, a = [], u = 0;
  for (let c = new _s(l.doc, l.sliceDoc(i, s)); !c.next().done; ) {
    if (a.length > 1e3)
      return !1;
    c.value.from == i && (u = a.length), a.push(X.range(c.value.from, c.value.to));
  }
  return t(l.update({
    selection: X.create(a, u),
    userEvent: "select.search.matches"
  })), !0;
}, wv = /* @__PURE__ */ Oa((l, { query: t }) => {
  let { state: e } = l, { from: i, to: s } = e.selection.main;
  if (e.readOnly)
    return !1;
  let a = t.nextMatch(e, i, i);
  if (!a)
    return !1;
  let u = a, c = [], h, m, p = [];
  u.from == i && u.to == s && (m = e.toText(t.getReplacement(u)), c.push({ from: u.from, to: u.to, insert: m }), u = t.nextMatch(e, u.from, u.to), p.push(tt.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(i).number) + ".")));
  let y = l.state.changes(c);
  return u && (h = X.single(u.from, u.to).map(y), p.push(Xm(l, u)), p.push(e.facet(js).scrollToMatch(h.main, l))), l.dispatch({
    changes: y,
    selection: h,
    effects: p,
    userEvent: "input.replace"
  }), !0;
}), ED = /* @__PURE__ */ Oa((l, { query: t }) => {
  if (l.state.readOnly)
    return !1;
  let e = t.matchAll(l.state, 1e9).map((s) => {
    let { from: a, to: u } = s;
    return { from: a, to: u, insert: t.getReplacement(s) };
  });
  if (!e.length)
    return !1;
  let i = l.state.phrase("replaced $ matches", e.length) + ".";
  return l.dispatch({
    changes: e,
    effects: tt.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function Gm(l) {
  return l.state.facet(js).createPanel(l);
}
function cm(l, t) {
  var e, i, s, a, u;
  let c = l.selection.main, h = c.empty || c.to > c.from + 100 ? "" : l.sliceDoc(c.from, c.to);
  if (t && !h)
    return t;
  let m = l.facet(js);
  return new Sx({
    search: ((e = t?.literal) !== null && e !== void 0 ? e : m.literal) ? h : h.replace(/\n/g, "\\n"),
    caseSensitive: (i = t?.caseSensitive) !== null && i !== void 0 ? i : m.caseSensitive,
    literal: (s = t?.literal) !== null && s !== void 0 ? s : m.literal,
    regexp: (a = t?.regexp) !== null && a !== void 0 ? a : m.regexp,
    wholeWord: (u = t?.wholeWord) !== null && u !== void 0 ? u : m.wholeWord
  });
}
function wx(l) {
  let t = Bm(l, Gm);
  return t && t.dom.querySelector("[main-field]");
}
function Ax(l) {
  let t = wx(l);
  t && t == l.root.activeElement && t.select();
}
const Cx = (l) => {
  let t = l.state.field(Kn, !1);
  if (t && t.panel) {
    let e = wx(l);
    if (e && e != l.root.activeElement) {
      let i = cm(l.state, t.query.spec);
      i.valid && l.dispatch({ effects: ga.of(i) }), e.focus(), e.select();
    }
  } else
    l.dispatch({ effects: [
      Ym.of(!0),
      t ? ga.of(cm(l.state, t.query.spec)) : bt.appendConfig.of(LD)
    ] });
  return !0;
}, kx = (l) => {
  let t = l.state.field(Kn, !1);
  if (!t || !t.panel)
    return !1;
  let e = Bm(l, Gm);
  return e && e.dom.contains(l.root.activeElement) && l.focus(), l.dispatch({ effects: Ym.of(!1) }), !0;
}, RD = [
  { key: "Mod-f", run: Cx, scope: "editor search-panel" },
  { key: "F3", run: Xu, shift: Wu, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Xu, shift: Wu, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: kx, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: DD },
  { key: "Mod-Alt-g", run: aD },
  { key: "Mod-d", run: vD, preventDefault: !0 }
];
class BD {
  constructor(t) {
    this.view = t;
    let e = this.query = t.state.field(Kn).query.spec;
    this.commit = this.commit.bind(this), this.searchField = Vt("input", {
      value: e.search,
      placeholder: ti(t, "Find"),
      "aria-label": ti(t, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = Vt("input", {
      value: e.replace,
      placeholder: ti(t, "Replace"),
      "aria-label": ti(t, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = Vt("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: e.caseSensitive,
      onchange: this.commit
    }), this.reField = Vt("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: e.regexp,
      onchange: this.commit
    }), this.wordField = Vt("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: e.wholeWord,
      onchange: this.commit
    });
    function i(s, a, u) {
      return Vt("button", { class: "cm-button", name: s, onclick: a, type: "button" }, u);
    }
    this.dom = Vt("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      i("next", () => Xu(t), [ti(t, "next")]),
      i("prev", () => Wu(t), [ti(t, "previous")]),
      i("select", () => OD(t), [ti(t, "all")]),
      Vt("label", null, [this.caseField, ti(t, "match case")]),
      Vt("label", null, [this.reField, ti(t, "regexp")]),
      Vt("label", null, [this.wordField, ti(t, "by word")]),
      ...t.state.readOnly ? [] : [
        Vt("br"),
        this.replaceField,
        i("replace", () => wv(t), [ti(t, "replace")]),
        i("replaceAll", () => ED(t), [ti(t, "replace all")])
      ],
      Vt("button", {
        name: "close",
        onclick: () => kx(t),
        "aria-label": ti(t, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let t = new Sx({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    t.eq(this.query) || (this.query = t, this.view.dispatch({ effects: ga.of(t) }));
  }
  keydown(t) {
    Nk(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? Wu : Xu)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), wv(this.view));
  }
  update(t) {
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(ga) && !i.value.eq(this.query) && this.setQuery(i.value);
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
const cu = 30, fu = /[\s\.,:;?!]/;
function Xm(l, { from: t, to: e }) {
  let i = l.state.doc.lineAt(t), s = l.state.doc.lineAt(e).to, a = Math.max(i.from, t - cu), u = Math.min(s, e + cu), c = l.state.sliceDoc(a, u);
  if (a != i.from) {
    for (let h = 0; h < cu; h++)
      if (!fu.test(c[h + 1]) && fu.test(c[h])) {
        c = c.slice(h);
        break;
      }
  }
  if (u != s) {
    for (let h = c.length - 1; h > c.length - cu; h--)
      if (!fu.test(c[h - 1]) && fu.test(c[h])) {
        c = c.slice(0, h);
        break;
      }
  }
  return tt.announce.of(`${l.state.phrase("current match")}. ${c} ${l.state.phrase("on line")} ${i.number}.`);
}
const ND = /* @__PURE__ */ tt.baseTheme({
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
}), LD = [
  Kn,
  /* @__PURE__ */ tl.low(TD),
  ND
];
class Mx {
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
    let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), s = e.text.slice(i - e.from, this.pos - e.from), a = s.search(Tx(t, !1));
    return a < 0 ? null : { from: i + a, to: this.pos, text: s.slice(a) };
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
function Av(l) {
  let t = Object.keys(l).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function zD(l) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of l) {
    t[s[0]] = !0;
    for (let a = 1; a < s.length; a++)
      e[s[a]] = !0;
  }
  let i = Av(t) + Av(e) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function HD(l) {
  let t = l.map((s) => typeof s == "string" ? { label: s } : s), [e, i] = t.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : zD(t);
  return (s) => {
    let a = s.matchBefore(i);
    return a || s.explicit ? { from: a ? a.from : s.pos, options: t, validFor: e } : null;
  };
}
class Cv {
  constructor(t, e, i, s) {
    this.completion = t, this.source = e, this.match = i, this.score = s;
  }
}
function Dl(l) {
  return l.selection.main.from;
}
function Tx(l, t) {
  var e;
  let { source: i } = l, s = t && i[0] != "^", a = i[i.length - 1] != "$";
  return !s && !a ? l : new RegExp(`${s ? "^" : ""}(?:${i})${a ? "$" : ""}`, (e = l.flags) !== null && e !== void 0 ? e : l.ignoreCase ? "i" : "");
}
const Ox = /* @__PURE__ */ Qi.define();
function _D(l, t, e, i) {
  let { main: s } = l.selection, a = e - s.from, u = i - s.from;
  return {
    ...l.changeByRange((c) => {
      if (c != s && e != i && l.sliceDoc(c.from + a, c.from + u) != l.sliceDoc(e, i))
        return { range: c };
      let h = l.toText(t);
      return {
        changes: { from: c.from + a, to: i == s.from ? c.to : c.from + u, insert: h },
        range: X.cursor(c.from + a + h.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
const kv = /* @__PURE__ */ new WeakMap();
function UD(l) {
  if (!Array.isArray(l))
    return l;
  let t = kv.get(l);
  return t || kv.set(l, t = HD(l)), t;
}
const Ku = /* @__PURE__ */ bt.define(), ya = /* @__PURE__ */ bt.define();
class VD {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let i = Ve(t, e), s = Vi(i);
      this.chars.push(i);
      let a = t.slice(e, e + s), u = a.toUpperCase();
      this.folded.push(Ve(u == a ? a.toLowerCase() : u, 0)), e += s;
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
    let { chars: e, folded: i, any: s, precise: a, byWord: u } = this;
    if (e.length == 1) {
      let _ = Ve(t, 0), V = Vi(_), Y = V == t.length ? 0 : -100;
      if (_ != e[0]) if (_ == i[0])
        Y += -200;
      else
        return null;
      return this.ret(Y, [0, V]);
    }
    let c = t.indexOf(this.pattern);
    if (c == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let h = e.length, m = 0;
    if (c < 0) {
      for (let _ = 0, V = Math.min(t.length, 200); _ < V && m < h; ) {
        let Y = Ve(t, _);
        (Y == e[m] || Y == i[m]) && (s[m++] = _), _ += Vi(Y);
      }
      if (m < h)
        return null;
    }
    let p = 0, y = 0, v = !1, S = 0, w = -1, A = -1, k = /[a-z]/.test(t), E = !0;
    for (let _ = 0, V = Math.min(t.length, 200), Y = 0; _ < V && y < h; ) {
      let T = Ve(t, _);
      c < 0 && (p < h && T == e[p] && (a[p++] = _), S < h && (T == e[S] || T == i[S] ? (S == 0 && (w = _), A = _ + 1, S++) : S = 0));
      let R, U = T < 255 ? T >= 48 && T <= 57 || T >= 97 && T <= 122 ? 2 : T >= 65 && T <= 90 ? 1 : 0 : (R = mm(T)) != R.toLowerCase() ? 1 : R != R.toUpperCase() ? 2 : 0;
      (!_ || U == 1 && k || Y == 0 && U != 0) && (e[y] == T || i[y] == T && (v = !0) ? u[y++] = _ : u.length && (E = !1)), Y = U, _ += Vi(T);
    }
    return y == h && u[0] == 0 && E ? this.result(-100 + (v ? -200 : 0), u, t) : S == h && w == 0 ? this.ret(-200 - t.length + (A == t.length ? 0 : -100), [0, A]) : c > -1 ? this.ret(-700 - t.length, [c, c + this.pattern.length]) : S == h ? this.ret(-900 - t.length, [w, A]) : y == h ? this.result(-100 + (v ? -200 : 0) + -700 + (E ? 0 : -1100), u, t) : e.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, t);
  }
  result(t, e, i) {
    let s = [], a = 0;
    for (let u of e) {
      let c = u + (this.astral ? Vi(Ve(i, u)) : 1);
      a && s[a - 1] == u ? s[a - 1] = c : (s[a++] = u, s[a++] = c);
    }
    return this.ret(t - i.length, s);
  }
}
class qD {
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
const de = /* @__PURE__ */ nt.define({
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
      positionInfo: jD,
      filterStrict: !1,
      compareCompletions: (t, e) => (t.sortText || t.label).localeCompare(e.sortText || e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => (i) => Mv(t(i), e(i)),
      optionClass: (t, e) => (i) => Mv(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    });
  }
});
function Mv(l, t) {
  return l ? t ? l + " " + t : l : t;
}
function jD(l, t, e, i, s, a) {
  let u = l.textDirection == Yt.RTL, c = u, h = !1, m = "top", p, y, v = t.left - s.left, S = s.right - t.right, w = i.right - i.left, A = i.bottom - i.top;
  if (c && v < Math.min(w, S) ? c = !1 : !c && S < Math.min(w, v) && (c = !0), w <= (c ? v : S))
    p = Math.max(s.top, Math.min(e.top, s.bottom - A)) - t.top, y = Math.min(400, c ? v : S);
  else {
    h = !0, y = Math.min(
      400,
      (u ? t.right : s.right - t.left) - 30
      /* Info.Margin */
    );
    let _ = s.bottom - t.bottom;
    _ >= A || _ > t.top ? p = e.bottom - t.top : (m = "bottom", p = t.bottom - e.top);
  }
  let k = (t.bottom - t.top) / a.offsetHeight, E = (t.right - t.left) / a.offsetWidth;
  return {
    style: `${m}: ${p / k}px; max-width: ${y / E}px`,
    class: "cm-completionInfo-" + (h ? u ? "left-narrow" : "right-narrow" : c ? "left" : "right")
  };
}
const Wm = /* @__PURE__ */ bt.define();
function YD(l) {
  let t = l.addToOptions.slice();
  return l.icons && t.push({
    render(e) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), t.push({
    render(e, i, s, a) {
      let u = document.createElement("span");
      u.className = "cm-completionLabel";
      let c = e.displayLabel || e.label, h = 0;
      for (let m = 0; m < a.length; ) {
        let p = a[m++], y = a[m++];
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
function ud(l, t, e) {
  if (l <= e)
    return { from: 0, to: l };
  if (t < 0 && (t = 0), t <= l >> 1) {
    let s = Math.floor(t / e);
    return { from: s * e, to: (s + 1) * e };
  }
  let i = Math.floor((l - t) / e);
  return { from: l - (i + 1) * e, to: l - i * e };
}
class GD {
  constructor(t, e, i) {
    this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (h) => this.placeInfo(h),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = t.state.field(e), { options: a, selected: u } = s.open, c = t.state.facet(de);
    this.optionContent = YD(c), this.optionClass = c.optionClass, this.tooltipClass = c.tooltipClass, this.range = ud(a.length, u, c.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (h) => {
      let { options: m } = t.state.field(e).open;
      for (let p = h.target, y; p && p != this.dom; p = p.parentNode)
        if (p.nodeName == "LI" && (y = /-(\d+)$/.exec(p.id)) && +y[1] < m.length) {
          this.applyCompletion(t, m[+y[1]]), h.preventDefault();
          return;
        }
      if (h.target == this.list) {
        let p = this.list.classList.contains("cm-completionListIncompleteTop") && h.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && h.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        p != null && (t.dispatch({ effects: Wm.of(p) }), h.preventDefault());
      }
    }), this.dom.addEventListener("focusout", (h) => {
      let m = t.state.field(this.stateField, !1);
      m && m.tooltip && t.state.facet(de).closeOnBlur && h.relatedTarget != t.contentDOM && t.dispatch({ effects: ya.of(null) });
    }), this.showOptions(a, s.id);
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
      let { options: a, selected: u, disabled: c } = i.open;
      (!s.open || s.open.options != a) && (this.range = ud(a.length, u, t.state.facet(de).maxRenderedOptions), this.showOptions(a, i.id)), this.updateSel(), c != ((e = s.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!c);
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
    (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = ud(e.options.length, e.selected, this.view.state.facet(de).maxRenderedOptions), this.showOptions(e.options, t.id));
    let i = this.updateSelectedOption(e.selected);
    if (i) {
      this.destroyInfo();
      let { completion: s } = e.options[e.selected], { info: a } = s;
      if (!a)
        return;
      let u = typeof a == "string" ? document.createTextNode(a) : a(s);
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
      let { dom: s, destroy: a } = t;
      i.appendChild(s), this.infoDestroy = a || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != "LI" || !i.id ? s-- : s == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && (i.removeAttribute("aria-selected"), i.removeAttribute("aria-describedby"));
    return e && WD(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = t.getBoundingClientRect(), a = this.space;
    if (!a) {
      let u = this.dom.ownerDocument.documentElement;
      a = { left: 0, top: 0, right: u.clientWidth, bottom: u.clientHeight };
    }
    return s.top > Math.min(a.bottom, e.bottom) - 10 || s.bottom < Math.max(a.top, e.top) + 10 ? null : this.view.state.facet(de).positionInfo(this.view, e, s, i, a, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, i) {
    const s = document.createElement("ul");
    s.id = e, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (u) => {
      u.target == s && u.preventDefault();
    });
    let a = null;
    for (let u = i.from; u < i.to; u++) {
      let { completion: c, match: h } = t[u], { section: m } = c;
      if (m) {
        let v = typeof m == "string" ? m : m.name;
        if (v != a && (u > i.from || i.from == 0))
          if (a = v, typeof m != "string" && m.header)
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
function XD(l, t) {
  return (e) => new GD(e, l, t);
}
function WD(l, t) {
  let e = l.getBoundingClientRect(), i = t.getBoundingClientRect(), s = e.height / l.offsetHeight;
  i.top < e.top ? l.scrollTop -= (e.top - i.top) / s : i.bottom > e.bottom && (l.scrollTop += (i.bottom - e.bottom) / s);
}
function Tv(l) {
  return (l.boost || 0) * 100 + (l.apply ? 10 : 0) + (l.info ? 5 : 0) + (l.type ? 1 : 0);
}
function KD(l, t) {
  let e = [], i = null, s = null, a = (p) => {
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
          a(new Cv(v, p.source, y ? y(v) : [], 1e9 - e.length));
      else {
        let v = t.sliceDoc(p.from, p.to), S, w = u.filterStrict ? new qD(v) : new VD(v);
        for (let A of p.result.options)
          if (S = w.match(A.label)) {
            let k = A.displayLabel ? y ? y(A, S.matched) : [] : S.matched, E = S.score + (A.boost || 0);
            if (a(new Cv(A, p.source, k, E)), typeof A.section == "object" && A.section.rank === "dynamic") {
              let { name: _ } = A.section;
              s || (s = /* @__PURE__ */ Object.create(null)), s[_] = Math.max(E, s[_] || -1e9);
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
    !h || h.label != y.label || h.detail != y.detail || h.type != null && y.type != null && h.type != y.type || h.apply != y.apply || h.boost != y.boost ? c.push(p) : Tv(p.completion) > Tv(h) && (c[c.length - 1] = p), h = p.completion;
  }
  return c;
}
class Cs {
  constructor(t, e, i, s, a, u) {
    this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = s, this.selected = a, this.disabled = u;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new Cs(this.options, Ov(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, i, s, a, u) {
    if (s && !u && t.some((m) => m.isPending))
      return s.setDisabled();
    let c = KD(t, e);
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
    return new Cs(c, Ov(i, h), {
      pos: t.reduce((m, p) => p.hasResult() ? Math.min(m, p.from) : m, 1e8),
      create: JD,
      above: a.aboveCursor
    }, s ? s.timestamp : Date.now(), h, !1);
  }
  map(t) {
    return new Cs(this.options, this.attrs, { ...this.tooltip, pos: t.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Cs(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Qu {
  constructor(t, e, i) {
    this.active = t, this.id = e, this.open = i;
  }
  static start() {
    return new Qu(FD, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, i = e.facet(de), a = (i.override || e.languageDataAt("autocomplete", Dl(e)).map(UD)).map((h) => (this.active.find((p) => p.source == h) || new gi(
      h,
      this.active.some(
        (p) => p.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(t, i));
    a.length == this.active.length && a.every((h, m) => h == this.active[m]) && (a = this.active);
    let u = this.open, c = t.effects.some((h) => h.is(Km));
    u && t.docChanged && (u = u.map(t.changes)), t.selection || a.some((h) => h.hasResult() && t.changes.touchesRange(h.from, h.to)) || !QD(a, this.active) || c ? u = Cs.build(a, e, this.id, u, i, c) : u && u.disabled && !a.some((h) => h.isPending) && (u = null), !u && a.every((h) => !h.isPending) && a.some((h) => h.hasResult()) && (a = a.map((h) => h.hasResult() ? new gi(
      h.source,
      0
      /* State.Inactive */
    ) : h));
    for (let h of t.effects)
      h.is(Wm) && (u = u && u.setSelected(h.value, this.id));
    return a == this.active && u == this.open ? this : new Qu(a, this.id, u);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? ZD : ID;
  }
}
function QD(l, t) {
  if (l == t)
    return !0;
  for (let e = 0, i = 0; ; ) {
    for (; e < l.length && !l[e].hasResult(); )
      e++;
    for (; i < t.length && !t[i].hasResult(); )
      i++;
    let s = e == l.length, a = i == t.length;
    if (s || a)
      return s == a;
    if (l[e++].result != t[i++].result)
      return !1;
  }
}
const ZD = {
  "aria-autocomplete": "list"
}, ID = {};
function Ov(l, t) {
  let e = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": l
  };
  return t > -1 && (e["aria-activedescendant"] = l + "-" + t), e;
}
const FD = [];
function Dx(l, t) {
  if (l.isUserEvent("input.complete")) {
    let i = l.annotation(Ox);
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
    let i = Dx(t, e), s = this;
    (i & 8 || i & 16 && this.touches(t)) && (s = new gi(
      s.source,
      0
      /* State.Inactive */
    )), i & 4 && s.state == 0 && (s = new gi(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(t, i);
    for (let a of t.effects)
      if (a.is(Ku))
        s = new gi(s.source, 1, a.value);
      else if (a.is(ya))
        s = new gi(
          s.source,
          0
          /* State.Inactive */
        );
      else if (a.is(Km))
        for (let u of a.value)
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
  constructor(t, e, i, s, a, u) {
    super(t, 3, e), this.limit = i, this.result = s, this.from = a, this.to = u;
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
    let a = t.changes.mapPos(this.from), u = t.changes.mapPos(this.to, 1), c = Dl(t.state);
    if (c > u || !s || e & 2 && (Dl(t.startState) == this.from || c < this.limit))
      return new gi(
        this.source,
        e & 4 ? 1 : 0
        /* State.Inactive */
      );
    let h = t.changes.mapPos(this.limit);
    return PD(s.validFor, t.state, a, u) ? new Es(this.source, this.explicit, h, s, a, u) : s.update && (s = s.update(s, a, u, new Mx(t.state, c, !1))) ? new Es(this.source, this.explicit, h, s, s.from, (i = s.to) !== null && i !== void 0 ? i : Dl(t.state)) : new gi(this.source, 1, this.explicit);
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
function PD(l, t, e, i) {
  if (!l)
    return !1;
  let s = t.sliceDoc(e, i);
  return typeof l == "function" ? l(s, e, i, t) : Tx(l, !0).test(s);
}
const Km = /* @__PURE__ */ bt.define({
  map(l, t) {
    return l.map((e) => e.map(t));
  }
}), qe = /* @__PURE__ */ Oe.define({
  create() {
    return Qu.start();
  },
  update(l, t) {
    return l.update(t);
  },
  provide: (l) => [
    Rm.from(l, (t) => t.tooltip),
    tt.contentAttributes.from(l, (t) => t.attrs)
  ]
});
function Qm(l, t) {
  const e = t.completion.apply || t.completion.label;
  let i = l.state.field(qe).active.find((s) => s.source == t.source);
  return i instanceof Es ? (typeof e == "string" ? l.dispatch({
    ..._D(l.state, e, i.from, i.to),
    annotations: Ox.of(t.completion)
  }) : e(l, t.completion, i.from, i.to), !0) : !1;
}
const JD = /* @__PURE__ */ XD(qe, Qm);
function hu(l, t = "option") {
  return (e) => {
    let i = e.state.field(qe, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(de).interactionDelay)
      return !1;
    let s = 1, a;
    t == "page" && (a = dS(e, i.open.tooltip)) && (s = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
    let { length: u } = i.open.options, c = i.open.selected > -1 ? i.open.selected + s * (l ? 1 : -1) : l ? 0 : u - 1;
    return c < 0 ? c = t == "page" ? 0 : u - 1 : c >= u && (c = t == "page" ? u - 1 : 0), e.dispatch({ effects: Wm.of(c) }), !0;
  };
}
const Ex = (l) => {
  let t = l.state.field(qe, !1);
  return l.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < l.state.facet(de).interactionDelay ? !1 : Qm(l, t.open.options[t.open.selected]);
}, cd = (l) => l.state.field(qe, !1) ? (l.dispatch({ effects: Ku.of(!0) }), !0) : !1, $D = (l) => {
  let t = l.state.field(qe, !1);
  return !t || !t.active.some(
    (e) => e.state != 0
    /* State.Inactive */
  ) ? !1 : (l.dispatch({ effects: ya.of(null) }), !0);
};
class tE {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const eE = 50, iE = 1e3, nE = /* @__PURE__ */ It.fromClass(class {
  constructor(l) {
    this.view = l, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let t of l.state.field(qe).active)
      t.isPending && this.startQuery(t);
  }
  update(l) {
    let t = l.state.field(qe), e = l.state.facet(de);
    if (!l.selectionSet && !l.docChanged && l.startState.field(qe) == t)
      return;
    let i = l.transactions.some((a) => {
      let u = Dx(a, e);
      return u & 8 || (a.selection || a.docChanged) && !(u & 3);
    });
    for (let a = 0; a < this.running.length; a++) {
      let u = this.running[a];
      if (i || u.context.abortOnDocChange && l.docChanged || u.updates.length + l.transactions.length > eE && Date.now() - u.time > iE) {
        for (let c of u.context.abortListeners)
          try {
            c();
          } catch (h) {
            Ye(this.view.state, h);
          }
        u.context.abortListeners = null, this.running.splice(a--, 1);
      } else
        u.updates.push(...l.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), l.transactions.some((a) => a.effects.some((u) => u.is(Ku))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : e.activateOnTypingDelay;
    if (this.debounceUpdate = t.active.some((a) => a.isPending && !this.running.some((u) => u.active.source == a.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let a of l.transactions)
        a.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && a.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: l } = this.view, t = l.field(qe);
    for (let e of t.active)
      e.isPending && !this.running.some((i) => i.active.source == e.source) && this.startQuery(e);
    this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(de).updateSyncTime));
  }
  startQuery(l) {
    let { state: t } = this.view, e = Dl(t), i = new Mx(t, e, l.explicit, this.view), s = new tE(l, i);
    this.running.push(s), Promise.resolve(l.source(i)).then((a) => {
      s.context.aborted || (s.done = a || null, this.scheduleAccept());
    }, (a) => {
      this.view.dispatch({ effects: ya.of(null) }), Ye(this.view.state, a);
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
      let a = this.running[s];
      if (a.done === void 0)
        continue;
      if (this.running.splice(s--, 1), a.done) {
        let c = Dl(a.updates.length ? a.updates[0].startState : this.view.state), h = Math.min(c, a.done.from + (a.active.explicit ? 0 : 1)), m = new Es(a.active.source, a.active.explicit, h, a.done, a.done.from, (l = a.done.to) !== null && l !== void 0 ? l : c);
        for (let p of a.updates)
          m = m.update(p, e);
        if (m.hasResult()) {
          t.push(m);
          continue;
        }
      }
      let u = i.active.find((c) => c.source == a.active.source);
      if (u && u.isPending)
        if (a.done == null) {
          let c = new gi(
            a.active.source,
            0
            /* State.Inactive */
          );
          for (let h of a.updates)
            c = c.update(h, e);
          c.isPending || t.push(c);
        } else
          this.startQuery(u);
    }
    (t.length || i.open && i.open.disabled) && this.view.dispatch({ effects: Km.of(t) });
  }
}, {
  eventHandlers: {
    blur(l) {
      let t = this.view.state.field(qe, !1);
      if (t && t.tooltip && this.view.state.facet(de).closeOnBlur) {
        let e = t.open && dS(this.view, t.open.tooltip);
        (!e || !e.dom.contains(l.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: ya.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Ku.of(!1) }), 20), this.composing = 0;
    }
  }
}), lE = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), sE = /* @__PURE__ */ tl.highest(/* @__PURE__ */ tt.domEventHandlers({
  keydown(l, t) {
    let e = t.state.field(qe, !1);
    if (!e || !e.open || e.open.disabled || e.open.selected < 0 || l.key.length > 1 || l.ctrlKey && !(lE && l.altKey) || l.metaKey)
      return !1;
    let i = e.open.options[e.open.selected], s = e.active.find((u) => u.source == i.source), a = i.completion.commitCharacters || s.result.commitCharacters;
    return a && a.indexOf(l.key) > -1 && Qm(t, i), !1;
  }
})), rE = /* @__PURE__ */ tt.baseTheme({
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
}), va = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Ml = /* @__PURE__ */ bt.define({
  map(l, t) {
    let e = t.mapPos(l, -1, Be.TrackAfter);
    return e ?? void 0;
  }
}), Zm = /* @__PURE__ */ new class extends Qn {
}();
Zm.startSide = 1;
Zm.endSide = -1;
const Rx = /* @__PURE__ */ Oe.define({
  create() {
    return Mt.empty;
  },
  update(l, t) {
    if (l = l.map(t.changes), t.selection) {
      let e = t.state.doc.lineAt(t.selection.main.head);
      l = l.update({ filter: (i) => i >= e.from && i <= e.to });
    }
    for (let e of t.effects)
      e.is(Ml) && (l = l.update({ add: [Zm.range(e.value, e.value + 1)] }));
    return l;
  }
});
function aE() {
  return [uE, Rx];
}
const fd = "()[]{}<>«»»«［］｛｝";
function Bx(l) {
  for (let t = 0; t < fd.length; t += 2)
    if (fd.charCodeAt(t) == l)
      return fd.charAt(t + 1);
  return mm(l < 128 ? l : l + 1);
}
function Nx(l, t) {
  return l.languageDataAt("closeBrackets", t)[0] || va;
}
const oE = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), uE = /* @__PURE__ */ tt.inputHandler.of((l, t, e, i) => {
  if ((oE ? l.composing : l.compositionStarted) || l.state.readOnly)
    return !1;
  let s = l.state.selection.main;
  if (i.length > 2 || i.length == 2 && Vi(Ve(i, 0)) == 1 || t != s.from || e != s.to)
    return !1;
  let a = hE(l.state, i);
  return a ? (l.dispatch(a), !0) : !1;
}), cE = ({ state: l, dispatch: t }) => {
  if (l.readOnly)
    return !1;
  let i = Nx(l, l.selection.main.head).brackets || va.brackets, s = null, a = l.changeByRange((u) => {
    if (u.empty) {
      let c = dE(l.doc, u.head);
      for (let h of i)
        if (h == c && hc(l.doc, u.head) == Bx(Ve(h, 0)))
          return {
            changes: { from: u.head - h.length, to: u.head + h.length },
            range: X.cursor(u.head - h.length)
          };
    }
    return { range: s = u };
  });
  return s || t(l.update(a, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, fE = [
  { key: "Backspace", run: cE }
];
function hE(l, t) {
  let e = Nx(l, l.selection.main.head), i = e.brackets || va.brackets;
  for (let s of i) {
    let a = Bx(Ve(s, 0));
    if (t == s)
      return a == s ? gE(l, s, i.indexOf(s + s + s) > -1, e) : mE(l, s, a, e.before || va.before);
    if (t == a && Lx(l, l.selection.main.from))
      return pE(l, s, a);
  }
  return null;
}
function Lx(l, t) {
  let e = !1;
  return l.field(Rx).between(0, l.doc.length, (i) => {
    i == t && (e = !0);
  }), e;
}
function hc(l, t) {
  let e = l.sliceString(t, t + 2);
  return e.slice(0, Vi(Ve(e, 0)));
}
function dE(l, t) {
  let e = l.sliceString(t - 2, t);
  return Vi(Ve(e, 0)) == e.length ? e : e.slice(1);
}
function mE(l, t, e, i) {
  let s = null, a = l.changeByRange((u) => {
    if (!u.empty)
      return {
        changes: [{ insert: t, from: u.from }, { insert: e, from: u.to }],
        effects: Ml.of(u.to + t.length),
        range: X.range(u.anchor + t.length, u.head + t.length)
      };
    let c = hc(l.doc, u.head);
    return !c || /\s/.test(c) || i.indexOf(c) > -1 ? {
      changes: { insert: t + e, from: u.head },
      effects: Ml.of(u.head + t.length),
      range: X.cursor(u.head + t.length)
    } : { range: s = u };
  });
  return s ? null : l.update(a, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function pE(l, t, e) {
  let i = null, s = l.changeByRange((a) => a.empty && hc(l.doc, a.head) == e ? {
    changes: { from: a.head, to: a.head + e.length, insert: e },
    range: X.cursor(a.head + e.length)
  } : i = { range: a });
  return i ? null : l.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function gE(l, t, e, i) {
  let s = i.stringPrefixes || va.stringPrefixes, a = null, u = l.changeByRange((c) => {
    if (!c.empty)
      return {
        changes: [{ insert: t, from: c.from }, { insert: t, from: c.to }],
        effects: Ml.of(c.to + t.length),
        range: X.range(c.anchor + t.length, c.head + t.length)
      };
    let h = c.head, m = hc(l.doc, h), p;
    if (m == t) {
      if (Dv(l, h))
        return {
          changes: { insert: t + t, from: h },
          effects: Ml.of(h + t.length),
          range: X.cursor(h + t.length)
        };
      if (Lx(l, h)) {
        let v = e && l.sliceDoc(h, h + t.length * 3) == t + t + t ? t + t + t : t;
        return {
          changes: { from: h, to: h + v.length, insert: v },
          range: X.cursor(h + v.length)
        };
      }
    } else {
      if (e && l.sliceDoc(h - 2 * t.length, h) == t + t && (p = Ev(l, h - 2 * t.length, s)) > -1 && Dv(l, p))
        return {
          changes: { insert: t + t + t + t, from: h },
          effects: Ml.of(h + t.length),
          range: X.cursor(h + t.length)
        };
      if (l.charCategorizer(h)(m) != Qt.Word && Ev(l, h, s) > -1 && !yE(l, h, t, s))
        return {
          changes: { insert: t + t, from: h },
          effects: Ml.of(h + t.length),
          range: X.cursor(h + t.length)
        };
    }
    return { range: a = c };
  });
  return a ? null : l.update(u, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Dv(l, t) {
  let e = Te(l).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function yE(l, t, e, i) {
  let s = Te(l).resolveInner(t, -1), a = i.reduce((u, c) => Math.max(u, c.length), 0);
  for (let u = 0; u < 5; u++) {
    let c = l.sliceDoc(s.from, Math.min(s.to, s.from + e.length + a)), h = c.indexOf(e);
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
function Ev(l, t, e) {
  let i = l.charCategorizer(t);
  if (i(l.sliceDoc(t - 1, t)) != Qt.Word)
    return t;
  for (let s of e) {
    let a = t - s.length;
    if (l.sliceDoc(a, t) == s && i(l.sliceDoc(a - 1, a)) != Qt.Word)
      return a;
  }
  return -1;
}
function zx(l = {}) {
  return [
    sE,
    qe,
    de.of(l),
    nE,
    vE,
    rE
  ];
}
const Hx = [
  { key: "Ctrl-Space", run: cd },
  { mac: "Alt-`", run: cd },
  { mac: "Alt-i", run: cd },
  { key: "Escape", run: $D },
  { key: "ArrowDown", run: /* @__PURE__ */ hu(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ hu(!1) },
  { key: "PageDown", run: /* @__PURE__ */ hu(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ hu(!1, "page") },
  { key: "Enter", run: Ex }
], vE = /* @__PURE__ */ tl.highest(/* @__PURE__ */ Ca.computeN([de], (l) => l.facet(de).defaultKeymap ? [Hx] : []));
class Rv {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.diagnostic = i;
  }
}
class Al {
  constructor(t, e, i) {
    this.diagnostics = t, this.panel = e, this.selected = i;
  }
  static init(t, e, i) {
    let s = i.facet(ba).markerFilter;
    s && (t = s(t, i));
    let a = t.slice().sort((S, w) => S.from - w.from || S.to - w.to), u = new Ki(), c = [], h = 0, m = i.doc.iter(), p = 0, y = i.doc.length;
    for (let S = 0; ; ) {
      let w = S == a.length ? null : a[S];
      if (!w && !c.length)
        break;
      let A, k;
      if (c.length)
        A = h, k = c.reduce((V, Y) => Math.min(V, Y.to), w && w.from > A ? w.from : 1e8);
      else {
        if (A = w.from, A > y)
          break;
        k = w.to, c.push(w), S++;
      }
      for (; S < a.length; ) {
        let V = a[S];
        if (V.from == A && (V.to > V.from || V.to == A))
          c.push(V), S++, k = Math.min(V.to, k);
        else {
          k = Math.min(V.from, k);
          break;
        }
      }
      k = Math.min(k, y);
      let E = !1;
      if (c.some((V) => V.from == A && (V.to == k || k == y)) && (E = A == k, !E && k - A < 10)) {
        let V = A - (p + m.value.length);
        V > 0 && (m.next(V), p = A);
        for (let Y = A; ; ) {
          if (Y >= k) {
            E = !0;
            break;
          }
          if (!m.lineBreak && p + m.value.length > Y)
            break;
          Y = p + m.value.length, p += m.value.length, m.next();
        }
      }
      let _ = RE(c);
      if (E)
        u.add(A, A, ft.widget({
          widget: new TE(_),
          diagnostics: c.slice()
        }));
      else {
        let V = c.reduce((Y, T) => T.markClass ? Y + " " + T.markClass : Y, "");
        u.add(A, k, ft.mark({
          class: "cm-lintRange cm-lintRange-" + _ + V,
          diagnostics: c.slice(),
          inclusiveEnd: c.some((Y) => Y.to > k)
        }));
      }
      if (h = k, h == y)
        break;
      for (let V = 0; V < c.length; V++)
        c[V].to <= h && c.splice(V--, 1);
    }
    let v = u.finish();
    return new Al(v, e, $n(v));
  }
}
function $n(l, t = null, e = 0) {
  let i = null;
  return l.between(e, 1e9, (s, a, { spec: u }) => {
    if (!(t && u.diagnostics.indexOf(t) < 0))
      if (!i)
        i = new Rv(s, a, t || u.diagnostics[0]);
      else {
        if (u.diagnostics.indexOf(i.diagnostic) < 0)
          return !1;
        i = new Rv(i.from, a, i.diagnostic);
      }
  }), i;
}
function bE(l, t) {
  let e = t.pos, i = t.end || e, s = l.state.facet(ba).hideOn(l, e, i);
  if (s != null)
    return s;
  let a = l.startState.doc.lineAt(t.pos);
  return !!(l.effects.some((u) => u.is(_x)) || l.changes.touchesRange(a.from, Math.max(a.to, i)));
}
function SE(l, t) {
  return l.field(ii, !1) ? t : t.concat(bt.appendConfig.of(BE));
}
const _x = /* @__PURE__ */ bt.define(), Im = /* @__PURE__ */ bt.define(), Ux = /* @__PURE__ */ bt.define(), ii = /* @__PURE__ */ Oe.define({
  create() {
    return new Al(ft.none, null, null);
  },
  update(l, t) {
    if (t.docChanged && l.diagnostics.size) {
      let e = l.diagnostics.map(t.changes), i = null, s = l.panel;
      if (l.selected) {
        let a = t.changes.mapPos(l.selected.from, 1);
        i = $n(e, l.selected.diagnostic, a) || $n(e, null, a);
      }
      !e.size && s && t.state.facet(ba).autoPanel && (s = null), l = new Al(e, s, i);
    }
    for (let e of t.effects)
      if (e.is(_x)) {
        let i = t.state.facet(ba).autoPanel ? e.value.length ? Sa.open : null : l.panel;
        l = Al.init(e.value, i, t.state);
      } else e.is(Im) ? l = new Al(l.diagnostics, e.value ? Sa.open : null, l.selected) : e.is(Ux) && (l = new Al(l.diagnostics, l.panel, e.value));
    return l;
  },
  provide: (l) => [
    ha.from(l, (t) => t.panel),
    tt.decorations.from(l, (t) => t.diagnostics)
  ]
}), xE = /* @__PURE__ */ ft.mark({ class: "cm-lintRange cm-lintRange-active" });
function wE(l, t, e) {
  let { diagnostics: i } = l.state.field(ii), s, a = -1, u = -1;
  i.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (h, m, { spec: p }) => {
    if (t >= h && t <= m && (h == m || (t > h || e > 0) && (t < m || e < 0)))
      return s = p.diagnostics, a = h, u = m, !1;
  });
  let c = l.state.facet(ba).tooltipFilter;
  return s && c && (s = c(s, l.state)), s ? {
    pos: a,
    end: u,
    above: l.state.doc.lineAt(a).to < u,
    create() {
      return { dom: AE(l, s) };
    }
  } : null;
}
function AE(l, t) {
  return Vt("ul", { class: "cm-tooltip-lint" }, t.map((e) => qx(l, e, !1)));
}
const CE = (l) => {
  let t = l.state.field(ii, !1);
  (!t || !t.panel) && l.dispatch({ effects: SE(l.state, [Im.of(!0)]) });
  let e = Bm(l, Sa.open);
  return e && e.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Bv = (l) => {
  let t = l.state.field(ii, !1);
  return !t || !t.panel ? !1 : (l.dispatch({ effects: Im.of(!1) }), !0);
}, kE = (l) => {
  let t = l.state.field(ii, !1);
  if (!t)
    return !1;
  let e = l.state.selection.main, i = $n(t.diagnostics, null, e.to + 1);
  return !i && (i = $n(t.diagnostics, null, 0), !i || i.from == e.from && i.to == e.to) ? !1 : (l.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, ME = [
  { key: "Mod-Shift-m", run: CE, preventDefault: !0 },
  { key: "F8", run: kE }
], ba = /* @__PURE__ */ nt.define({
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
        markerFilter: Nv,
        tooltipFilter: Nv,
        needsRefresh: (t, e) => t ? e ? (i) => t(i) || e(i) : t : e,
        hideOn: (t, e) => t ? e ? (i, s, a) => t(i, s, a) || e(i, s, a) : t : e,
        autoPanel: (t, e) => t || e
      })
    };
  }
});
function Nv(l, t) {
  return l ? t ? (e, i) => t(l(e, i), i) : l : t;
}
function Vx(l) {
  let t = [];
  if (l)
    t: for (let { name: e } of l) {
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        if (/[a-zA-Z]/.test(s) && !t.some((a) => a.toLowerCase() == s.toLowerCase())) {
          t.push(s);
          continue t;
        }
      }
      t.push("");
    }
  return t;
}
function qx(l, t, e) {
  var i;
  let s = e ? Vx(t.actions) : [];
  return Vt("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, Vt("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(l) : t.message), (i = t.actions) === null || i === void 0 ? void 0 : i.map((a, u) => {
    let c = !1, h = (S) => {
      if (S.preventDefault(), c)
        return;
      c = !0;
      let w = $n(l.state.field(ii).diagnostics, t);
      w && a.apply(l, w.from, w.to);
    }, { name: m } = a, p = s[u] ? m.indexOf(s[u]) : -1, y = p < 0 ? m : [
      m.slice(0, p),
      Vt("u", m.slice(p, p + 1)),
      m.slice(p + 1)
    ], v = a.markClass ? " " + a.markClass : "";
    return Vt("button", {
      type: "button",
      class: "cm-diagnosticAction" + v,
      onclick: h,
      onmousedown: h,
      "aria-label": ` Action: ${m}${p < 0 ? "" : ` (access key "${s[u]})"`}.`
    }, y);
  }), t.source && Vt("div", { class: "cm-diagnosticSource" }, t.source));
}
class TE extends Ii {
  constructor(t) {
    super(), this.sev = t;
  }
  eq(t) {
    return t.sev == this.sev;
  }
  toDOM() {
    return Vt("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Lv {
  constructor(t, e) {
    this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = qx(t, e, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Sa {
  constructor(t) {
    this.view = t, this.items = [];
    let e = (s) => {
      if (!(s.ctrlKey || s.altKey || s.metaKey)) {
        if (s.keyCode == 27)
          Bv(this.view), this.view.focus();
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
          let { diagnostic: a } = this.items[this.selectedIndex], u = Vx(a.actions);
          for (let c = 0; c < u.length; c++)
            if (u[c].toUpperCase().charCodeAt(0) == s.keyCode) {
              let h = $n(this.view.state.field(ii).diagnostics, a);
              h && a.actions[c].apply(t, h.from, h.to);
            }
        } else
          return;
        s.preventDefault();
      }
    }, i = (s) => {
      for (let a = 0; a < this.items.length; a++)
        this.items[a].dom.contains(s.target) && this.moveSelection(a);
    };
    this.list = Vt("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: e,
      onclick: i
    }), this.dom = Vt("div", { class: "cm-panel-lint" }, this.list, Vt("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Bv(this.view)
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
    let { diagnostics: t, selected: e } = this.view.state.field(ii), i = 0, s = !1, a = null, u = /* @__PURE__ */ new Set();
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
        y < 0 ? (v = new Lv(this.view, p), this.items.splice(i, 0, v), s = !0) : (v = this.items[y], y > i && (this.items.splice(i, y - i), s = !0)), e && v.diagnostic == e.diagnostic ? v.dom.hasAttribute("aria-selected") || (v.dom.setAttribute("aria-selected", "true"), a = v) : v.dom.hasAttribute("aria-selected") && v.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Lv(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), a ? (this.list.setAttribute("aria-activedescendant", a.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: a.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
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
      effects: Ux.of(i)
    });
  }
  static open(t) {
    return new Sa(t);
  }
}
function OE(l, t = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(l)}</svg>')`;
}
function du(l) {
  return OE(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${l}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const DE = /* @__PURE__ */ tt.baseTheme({
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
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ du("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ du("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ du("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ du("#66d") },
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
function EE(l) {
  return l == "error" ? 4 : l == "warning" ? 3 : l == "info" ? 2 : 1;
}
function RE(l) {
  let t = "hint", e = 1;
  for (let i of l) {
    let s = EE(i.severity);
    s > e && (e = s, t = i.severity);
  }
  return t;
}
const BE = [
  ii,
  /* @__PURE__ */ tt.decorations.compute([ii], (l) => {
    let { selected: t, panel: e } = l.field(ii);
    return !t || !e || t.from == t.to ? ft.none : ft.set([
      xE.range(t.from, t.to)
    ]);
  }),
  /* @__PURE__ */ xM(wE, { hideOn: bE }),
  DE
];
var zv = function(t) {
  t === void 0 && (t = {});
  var {
    crosshairCursor: e = !1
  } = t, i = [];
  t.closeBracketsKeymap !== !1 && (i = i.concat(fE)), t.defaultKeymap !== !1 && (i = i.concat(lD)), t.searchKeymap !== !1 && (i = i.concat(RD)), t.historyKeymap !== !1 && (i = i.concat(fO)), t.foldKeymap !== !1 && (i = i.concat(kT)), t.completionKeymap !== !1 && (i = i.concat(Hx)), t.lintKeymap !== !1 && (i = i.concat(ME));
  var s = [];
  return t.lineNumbers !== !1 && s.push(LM()), t.highlightActiveLineGutter !== !1 && s.push(_M()), t.highlightSpecialChars !== !1 && s.push(Fk()), t.history !== !1 && s.push(iO()), t.foldGutter !== !1 && s.push(DT()), t.drawSelection !== !1 && s.push(Vk()), t.dropCursor !== !1 && s.push(Xk()), t.allowMultipleSelections !== !1 && s.push(Ot.allowMultipleSelections.of(!0)), t.indentOnInput !== !1 && s.push(pT()), t.syntaxHighlighting !== !1 && s.push(LS(NT, {
    fallback: !0
  })), t.bracketMatching !== !1 && s.push(qT()), t.closeBrackets !== !1 && s.push(aE()), t.autocompletion !== !1 && s.push(zx()), t.rectangularSelection !== !1 && s.push(cM()), e !== !1 && s.push(dM()), t.highlightActiveLine !== !1 && s.push(iM()), t.highlightSelectionMatches !== !1 && s.push(cD()), t.tabSize && typeof t.tabSize == "number" && s.push(sc.of(" ".repeat(t.tabSize))), s.concat([Ca.of(i.flat())]).filter(Boolean);
};
const NE = "#e5c07b", Hv = "#e06c75", LE = "#56b6c2", zE = "#ffffff", Au = "#abb2bf", fm = "#7d8799", HE = "#61afef", _E = "#98c379", _v = "#d19a66", UE = "#c678dd", VE = "#21252b", Uv = "#2c313a", Vv = "#282c34", hd = "#353a42", qE = "#3E4451", qv = "#528bff", jE = /* @__PURE__ */ tt.theme({
  "&": {
    color: Au,
    backgroundColor: Vv
  },
  ".cm-content": {
    caretColor: qv
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: qv },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: qE },
  ".cm-panels": { backgroundColor: VE, color: Au },
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
    backgroundColor: Vv,
    color: fm,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: Uv
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: hd
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: hd,
    borderBottomColor: hd
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: Uv,
      color: Au
    }
  }
}, { dark: !0 }), YE = /* @__PURE__ */ Ma.define([
  {
    tag: j.keyword,
    color: UE
  },
  {
    tag: [j.name, j.deleted, j.character, j.propertyName, j.macroName],
    color: Hv
  },
  {
    tag: [/* @__PURE__ */ j.function(j.variableName), j.labelName],
    color: HE
  },
  {
    tag: [j.color, /* @__PURE__ */ j.constant(j.name), /* @__PURE__ */ j.standard(j.name)],
    color: _v
  },
  {
    tag: [/* @__PURE__ */ j.definition(j.name), j.separator],
    color: Au
  },
  {
    tag: [j.typeName, j.className, j.number, j.changed, j.annotation, j.modifier, j.self, j.namespace],
    color: NE
  },
  {
    tag: [j.operator, j.operatorKeyword, j.url, j.escape, j.regexp, j.link, /* @__PURE__ */ j.special(j.string)],
    color: LE
  },
  {
    tag: [j.meta, j.comment],
    color: fm
  },
  {
    tag: j.strong,
    fontWeight: "bold"
  },
  {
    tag: j.emphasis,
    fontStyle: "italic"
  },
  {
    tag: j.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: j.link,
    color: fm,
    textDecoration: "underline"
  },
  {
    tag: j.heading,
    fontWeight: "bold",
    color: Hv
  },
  {
    tag: [j.atom, j.bool, /* @__PURE__ */ j.special(j.variableName)],
    color: _v
  },
  {
    tag: [j.processingInstruction, j.string, j.inserted],
    color: _E
  },
  {
    tag: j.invalid,
    color: zE
  }
]), GE = [jE, /* @__PURE__ */ LS(YE)];
var XE = tt.theme({
  "&": {
    backgroundColor: "#fff"
  }
}, {
  dark: !1
}), WE = function(t) {
  t === void 0 && (t = {});
  var {
    indentWithTab: e = !0,
    editable: i = !0,
    readOnly: s = !1,
    theme: a = "light",
    placeholder: u = "",
    basicSetup: c = !0
  } = t, h = [];
  switch (e && h.unshift(Ca.of([sD])), c && (typeof c == "boolean" ? h.unshift(zv()) : h.unshift(zv(c))), u && h.unshift(rM(u)), a) {
    case "light":
      h.push(XE);
      break;
    case "dark":
      h.push(GE);
      break;
    case "none":
      break;
    default:
      h.push(a);
      break;
  }
  return i === !1 && h.push(tt.editable.of(!1)), s && h.push(Ot.readOnly.of(!0)), [...h];
}, KE = (l) => ({
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
class QE {
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
class jv {
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
var dd = null, ZE = () => typeof window > "u" ? new jv() : (dd || (dd = new jv()), dd), Yv = Qi.define(), IE = 200, FE = [];
function PE(l) {
  var {
    value: t,
    selection: e,
    onChange: i,
    onStatistics: s,
    onCreateEditor: a,
    onUpdate: u,
    extensions: c = FE,
    autoFocus: h,
    theme: m = "light",
    height: p = null,
    minHeight: y = null,
    maxHeight: v = null,
    width: S = null,
    minWidth: w = null,
    maxWidth: A = null,
    placeholder: k = "",
    editable: E = !0,
    readOnly: _ = !1,
    indentWithTab: V = !0,
    basicSetup: Y = !0,
    root: T,
    initialState: R
  } = l, [U, I] = Tt.useState(), [F, ct] = Tt.useState(), [at, et] = Tt.useState(), dt = Tt.useState(() => ({
    current: null
  }))[0], yt = Tt.useState(() => ({
    current: null
  }))[0], vt = tt.theme({
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
  }), H = tt.updateListener.of((ut) => {
    if (ut.docChanged && typeof i == "function" && // Fix echoing of the remote changes:
    // If transaction is market as remote we don't have to call `onChange` handler again
    !ut.transactions.some((P) => P.annotation(Yv))) {
      dt.current ? dt.current.reset() : (dt.current = new QE(() => {
        if (yt.current) {
          var P = yt.current;
          yt.current = null, P();
        }
        dt.current = null;
      }, IE), ZE().add(dt.current));
      var M = ut.state.doc, G = M.toString();
      i(G, ut);
    }
    s && s(KE(ut));
  }), Q = WE({
    theme: m,
    editable: E,
    readOnly: _,
    placeholder: k,
    indentWithTab: V,
    basicSetup: Y
  }), lt = [H, vt, ...Q];
  return u && typeof u == "function" && lt.push(tt.updateListener.of(u)), lt = lt.concat(c), Tt.useLayoutEffect(() => {
    if (U && !at) {
      var ut = {
        doc: t,
        selection: e,
        extensions: lt
      }, M = R ? Ot.fromJSON(R.json, ut, R.fields) : Ot.create(ut);
      if (et(M), !F) {
        var G = new tt({
          state: M,
          parent: U,
          root: T
        });
        ct(G), a && a(G, M);
      }
    }
    return () => {
      F && (et(void 0), ct(void 0));
    };
  }, [U, at]), Tt.useEffect(() => {
    l.container && I(l.container);
  }, [l.container]), Tt.useEffect(() => () => {
    F && (F.destroy(), ct(void 0)), dt.current && (dt.current.cancel(), dt.current = null);
  }, [F]), Tt.useEffect(() => {
    h && F && F.focus();
  }, [h, F]), Tt.useEffect(() => {
    F && F.dispatch({
      effects: bt.reconfigure.of(lt)
    });
  }, [m, c, p, y, v, S, w, A, k, E, _, V, Y, i, u]), Tt.useEffect(() => {
    if (t !== void 0) {
      var ut = F ? F.state.doc.toString() : "";
      if (F && t !== ut) {
        var M = dt.current && !dt.current.isDone, G = () => {
          F && t !== F.state.doc.toString() && F.dispatch({
            changes: {
              from: 0,
              to: F.state.doc.toString().length,
              insert: t || ""
            },
            annotations: [Yv.of(!0)]
          });
        };
        M ? yt.current = G : G();
      }
    }
  }, [t, F]), {
    state: at,
    setState: et,
    view: F,
    setView: ct,
    container: U,
    setContainer: I
  };
}
var JE = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"], jx = /* @__PURE__ */ Tt.forwardRef((l, t) => {
  var {
    className: e,
    value: i = "",
    selection: s,
    extensions: a = [],
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
    minWidth: k,
    maxWidth: E,
    basicSetup: _,
    placeholder: V,
    indentWithTab: Y,
    editable: T,
    readOnly: R,
    root: U,
    initialState: I
  } = l, F = TA(l, JE), ct = Tt.useRef(null), {
    state: at,
    view: et,
    container: dt,
    setContainer: yt
  } = PE({
    root: U,
    value: i,
    autoFocus: p,
    theme: y,
    height: v,
    minHeight: S,
    maxHeight: w,
    width: A,
    minWidth: k,
    maxWidth: E,
    basicSetup: _,
    placeholder: V,
    indentWithTab: Y,
    editable: T,
    readOnly: R,
    selection: s,
    onChange: u,
    onStatistics: c,
    onCreateEditor: h,
    onUpdate: m,
    extensions: a,
    initialState: I
  });
  Tt.useImperativeHandle(t, () => ({
    editor: ct.current,
    state: at,
    view: et
  }), [ct, dt, at, et]);
  var vt = Tt.useCallback((Q) => {
    ct.current = Q, yt(Q);
  }, [yt]);
  if (typeof i != "string")
    throw new Error("value must be typeof string but got " + typeof i);
  var H = typeof y == "string" ? "cm-theme-" + y : "cm-theme";
  return /* @__PURE__ */ Z.jsx("div", yd({
    ref: vt,
    className: "" + H + (e ? " " + e : "")
  }, F));
});
jx.displayName = "CodeMirror";
const Zu = {
  zero: { inputs: 0, outputs: 1 },
  one: { inputs: 0, outputs: 1 },
  not: { inputs: 1, outputs: 1 },
  and: { inputs: 2, outputs: 1 },
  or: { inputs: 2, outputs: 1 }
}, dc = Object.freeze(Object.keys(Zu));
class Us extends Error {
  diagnostic;
  constructor(t, e, i) {
    super(t), this.diagnostic = { severity: "error", message: t, line: e, column: i };
  }
}
class $E {
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
      throw new Us(`Expected ${Gv(t, e)}.`, tR(this.tokens), eR(this.tokens));
    if (i.type !== t || e !== void 0 && i.value !== e)
      throw new Us(
        `Expected ${Gv(t, e)}, found "${i.value}".`,
        i.line,
        i.column
      );
    return i;
  }
}
function Gv(l, t) {
  return t !== void 0 ? `"${t}"` : l === "word" ? "an identifier" : l === "lparen" ? '"("' : l === "rparen" ? '")"' : '":"';
}
function tR(l) {
  return l[l.length - 1]?.line ?? 1;
}
function eR(l) {
  const t = l[l.length - 1];
  return t ? t.column + Math.max(t.value.length - 1, 0) : 1;
}
function iR(l) {
  const t = [];
  let e = 1, i = 1, s = 0;
  for (; s < l.length; ) {
    const a = l[s];
    if (a === `
`) {
      s += 1, e += 1, i = 1;
      continue;
    }
    if (a === "#") {
      const u = l.indexOf(`
`, s);
      if (u === -1)
        break;
      s = u + 1, e += 1, i = 1;
      continue;
    }
    if (/\s/.test(a)) {
      s += 1, i += 1;
      continue;
    }
    if (a === "(") {
      t.push({ type: "lparen", value: a, line: e, column: i, from: s, to: s + 1 }), s += 1, i += 1;
      continue;
    }
    if (a === ")") {
      t.push({ type: "rparen", value: a, line: e, column: i, from: s, to: s + 1 }), s += 1, i += 1;
      continue;
    }
    if (a === ":") {
      t.push({ type: "colon", value: a, line: e, column: i, from: s, to: s + 1 }), s += 1, i += 1;
      continue;
    }
    if (/[A-Za-z0-9_]/.test(a)) {
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
    throw new Us(`Unexpected character "${a}".`, e, i);
  }
  return t;
}
function Iu(l) {
  const t = l.expect("lparen"), e = [];
  for (; l.peek()?.type !== "rparen"; ) {
    const s = l.expect("word");
    e.push({ name: s.value, line: s.line, column: s.column, from: s.from, to: s.to });
  }
  const i = l.expect("rparen");
  return { items: e, line: t.line, column: t.column, from: t.from, to: i.to };
}
function nR(l) {
  const t = Iu(l), e = l.expect("word"), i = Iu(l);
  return {
    inputs: t,
    callee: { name: e.value, line: e.line, column: e.column, from: e.from, to: e.to },
    outputs: i
  };
}
function lR(l) {
  const t = l.expect("word", "scheme"), e = Iu(l), i = l.expect("word"), s = Iu(l);
  l.expect("colon");
  const a = [];
  if (l.peek()?.type === "word" && l.peek()?.value === "local")
    for (l.next(); l.peek()?.type === "word" && l.peek()?.value !== "end"; ) {
      const h = l.next();
      a.push({ name: h.value, line: h.line, column: h.column, from: h.from, to: h.to });
    }
  const u = [];
  for (; !(l.peek()?.type === "word" && l.peek()?.value === "end"); ) {
    if (!l.peek())
      throw new Us(`Missing "end" for scheme "${i.value}".`, t.line, t.column);
    if (l.peek()?.type !== "lparen") {
      const h = l.peek();
      throw new Us(`Expected "(" or "end", found "${h.value}".`, h.line, h.column);
    }
    u.push(nR(l));
  }
  const c = l.expect("word", "end");
  return {
    name: { name: i.value, line: i.line, column: i.column, from: i.from, to: i.to },
    inputs: e,
    outputs: s,
    locals: a,
    statements: u,
    start: t.from,
    end: c.to
  };
}
function Yx(l) {
  let t;
  try {
    t = iR(l);
  } catch (s) {
    return { ok: !1, diagnostic: s.diagnostic };
  }
  const e = new $E(t), i = [];
  try {
    for (; e.peek(); ) {
      const s = e.peek();
      if (s.type !== "word" || s.value !== "scheme")
        throw new Us(`Expected "scheme", found "${s.value}".`, s.line, s.column);
      i.push(lR(e));
    }
  } catch (s) {
    return { ok: !1, diagnostic: s.diagnostic };
  }
  return { ok: !0, parsed: { schemes: i } };
}
function hi(l, t) {
  return { severity: "error", message: l, line: t.line, column: t.column };
}
function md(l, t, e) {
  const i = /* @__PURE__ */ new Map();
  for (const s of l) {
    if (i.get(s.name)) {
      e.push(hi(`Duplicate name "${s.name}" in ${t}.`, s));
      continue;
    }
    i.set(s.name, s);
  }
}
function sR(l, t) {
  const e = new Map(l.inputs.items.map((S) => [S.name, S])), i = [...l.outputs.items, ...l.locals], s = new Map(i.map((S) => [S.name, S])), a = new Map(l.locals.map((S) => [S.name, S])), u = new Map([...l.inputs.items, ...l.outputs.items, ...l.locals].map((S) => [S.name, S])), c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set();
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
      a.has(w.name) && !c.has(w.name) && t.push(
        hi(`Local signal "${w.name}" is used as an input, but no statement writes to it in scheme "${l.name.name}".`, w)
      );
  const p = /* @__PURE__ */ new Map(), y = [], v = (S) => {
    const w = p.get(S);
    if (w !== "done") {
      if (w === "visiting") {
        const A = y.indexOf(S), E = [...y.slice(A >= 0 ? A : 0), S].join(" -> ");
        m.has(E) || (m.add(E), t.push(
          hi(`Signal graph in scheme "${l.name.name}" must be acyclic. Cycle: ${E}.`, u.get(S) ?? l.name)
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
function rR(l) {
  const t = [];
  if (l.schemes.length === 0)
    return t.push({ severity: "error", message: 'File must contain at least one "scheme" definition.', line: 1, column: 1 }), { mainSchemeName: null, inputs: [], outputs: [], diagnostics: t, isValid: !1, parsed: l };
  const e = /* @__PURE__ */ new Map();
  for (const c of l.schemes)
    Zu[c.name.name] && t.push(hi(`Scheme name "${c.name.name}" is reserved for a built-in scheme.`, c.name)), e.has(c.name.name) ? t.push(hi(`Duplicate scheme name "${c.name.name}".`, c.name)) : e.set(c.name.name, c);
  for (const c of l.schemes) {
    const h = [...c.inputs.items, ...c.outputs.items, ...c.locals];
    md(c.inputs.items, `inputs of "${c.name.name}"`, t), md(c.outputs.items, `outputs of "${c.name.name}"`, t), md(c.locals, `locals of "${c.name.name}"`, t);
    const m = /* @__PURE__ */ new Map();
    for (const p of h) {
      if (m.get(p.name)) {
        t.push(hi(`Signal "${p.name}" is declared more than once in scheme "${c.name.name}".`, p));
        continue;
      }
      m.set(p.name, p);
    }
    for (const p of c.statements) {
      const y = e.get(p.callee.name), v = Zu[p.callee.name];
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
    sR(c, t);
  }
  const i = /* @__PURE__ */ new Map(), s = [], a = (c) => {
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
        e.has(p.callee.name) && a(p.callee.name);
    s.pop(), i.set(c, "done");
  };
  for (const c of l.schemes)
    a(c.name.name);
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
function aR(l, t) {
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
function Gx(l, t, e) {
  const i = l.schemes.find((a) => a.name.name === t);
  if (!i)
    throw new Error(`Scheme ${t} was not found.`);
  const s = /* @__PURE__ */ new Map();
  i.inputs.items.forEach((a, u) => s.set(a.name, e[u] ?? 0)), i.outputs.items.forEach((a) => s.set(a.name, 0)), i.locals.forEach((a) => s.set(a.name, 0));
  for (const a of i.statements) {
    const u = a.inputs.items.map((h) => s.get(h.name) ?? 0), c = Zu[a.callee.name] ? aR(a.callee.name, u) : Gx(l, a.callee.name, u);
    a.outputs.items.forEach((h, m) => s.set(h.name, c[m] ?? 0));
  }
  return i.outputs.items.map((a) => s.get(a.name) === 1 ? 1 : 0);
}
function Fu(l) {
  if (!l.trim())
    return {
      mainSchemeName: null,
      inputs: [],
      outputs: [],
      diagnostics: [{ severity: "error", message: "File is empty. Add at least one scheme definition.", line: 1, column: 1 }],
      isValid: !1,
      parsed: null
    };
  const t = Yx(l);
  return t.ok ? rR(t.parsed) : { mainSchemeName: null, inputs: [], outputs: [], diagnostics: [t.diagnostic], isValid: !1, parsed: null };
}
function oR(l) {
  const t = Fu(l);
  return t.isValid ? t.parsed : null;
}
function uR(l) {
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
function cR(l) {
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
function Xv(l, t) {
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
function fR(l) {
  const t = cR(l), e = [];
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (s.type !== "word" || s.value !== "scheme")
      continue;
    const a = Xv(t, i + 1), u = a ? t[a.nextIndex] : null, c = u ? Xv(t, a.nextIndex + 1) : null;
    if (!a || !u || u.type !== "word" || !c)
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
      inputs: a.refs.map((v) => v.name),
      outputs: c.refs.map((v) => v.name),
      locals: m.map((v) => v.name),
      schemeNameRefs: [{ name: u.value, from: u.from, to: u.to }],
      signalRefs: [...a.refs, ...c.refs, ...m]
    });
  }
  return e;
}
function mc(l, t) {
  const e = Yx(l), i = e.ok ? uR(e.parsed) : fR(l), s = i[0]?.name ?? null, a = i.map((h) => h.name).filter((h, m, p) => h !== s && !dc.includes(h) && p.indexOf(h) === m);
  let u = null;
  for (let h = i.length - 1; h >= 0; h -= 1)
    if (t >= i[h].start && t <= i[h].end) {
      u = i[h];
      break;
    }
  const c = u ? Array.from(/* @__PURE__ */ new Set([...u.inputs, ...u.outputs, ...u.locals])) : [];
  return { helperSchemeNames: a, schemes: i, activeScheme: u, visibleSignals: c };
}
function hR(l, t) {
  const e = Fu(l);
  if (!e.isValid || !e.parsed || !e.mainSchemeName)
    return null;
  const i = Gx(
    e.parsed,
    e.mainSchemeName,
    e.inputs.map((a) => t[a] ?? 0)
  );
  return { outputs: Object.fromEntries(
    e.outputs.map((a, u) => [a, i[u] === 1 ? 1 : 0])
  ) };
}
const dR = ["scheme", "local", "end"], mR = {
  keyword: "cm-scheme-keyword",
  builtin: "cm-scheme-builtin",
  helper: "cm-scheme-helper",
  signal: "cm-scheme-signal",
  punctuation: "cm-scheme-punctuation",
  identifier: "cm-scheme-identifier",
  comment: "cm-scheme-comment"
};
function Fm(l) {
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
function Xx(l, t) {
  const e = l.lastIndexOf(`
`, Math.max(t - 1, 0)) + 1, i = l.indexOf("#", e);
  return i >= e && i < t;
}
function pR(l) {
  const t = mc(l, 0), e = new Set(t.helperSchemeNames), i = /* @__PURE__ */ new Map();
  for (const s of t.schemes) {
    for (const a of s.schemeNameRefs)
      e.has(a.name) && i.set(`${a.from}:${a.to}`, "helper");
    for (const a of s.signalRefs)
      i.set(`${a.from}:${a.to}`, "signal");
  }
  return i;
}
function gR(l) {
  const t = pR(l);
  return Fm(l).map((e) => {
    const i = `${e.from}:${e.to}`;
    let s = "identifier";
    return e.type === "comment" ? s = "comment" : e.type !== "word" ? s = "punctuation" : dR.includes(e.value) ? s = "keyword" : dc.includes(e.value) ? s = "builtin" : t.get(i) && (s = t.get(i)), {
      text: e.value,
      from: e.from,
      to: e.to,
      kind: s
    };
  });
}
function Wv(l) {
  const t = new Ki();
  for (const e of gR(l)) {
    const i = mR[e.kind];
    i && t.add(e.from, e.to, ft.mark({ class: i }));
  }
  return t.finish();
}
const yR = It.fromClass(
  class {
    decorations;
    constructor(l) {
      this.decorations = Wv(l.state.doc.toString());
    }
    update(l) {
      l.docChanged && (this.decorations = Wv(l.state.doc.toString()));
    }
  },
  {
    decorations: (l) => l.decorations
  }
);
function Wx(l) {
  const t = /* @__PURE__ */ new Set();
  return l.filter((e) => {
    const i = `${e.type}:${e.label}`;
    return t.has(i) ? !1 : (t.add(i), !0);
  });
}
function Pm(l, t) {
  let e = t;
  for (; e > 0 && /[A-Za-z0-9_]/.test(l[e - 1]); )
    e -= 1;
  return { from: e, text: l.slice(e, t) };
}
function vR(l, t) {
  for (let e = l.length - 1; e >= 0; e -= 1)
    if (l[e].to <= t)
      return l[e];
  return null;
}
function bR(l, t) {
  const e = l.lastIndexOf(`
`, Math.max(t - 1, 0)) + 1;
  return l.slice(e, t).trim() === "";
}
function mu(l, t) {
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
function SR(l, t) {
  const e = Fm(l).filter((h) => h.type !== "comment" && h.to <= t), i = bR(l, t);
  let s = 0, a = "top-level", u = !1, c = !1;
  for (; ; ) {
    if (s >= e.length)
      return a === "local-name" && i && c ? { kind: "body-start", canDeclareLocal: !1 } : a === "body-start" ? { kind: "body-start", canDeclareLocal: u } : a === "top-level" ? { kind: "top-level" } : a === "scheme-input-list" ? { kind: "scheme-input-list" } : a === "scheme-name" ? { kind: "scheme-name" } : a === "scheme-output-list" ? { kind: "scheme-output-list" } : a === "scheme-colon" ? { kind: "scheme-colon" } : a === "local-name" ? { kind: "local-name" } : a === "statement-input-list" ? { kind: "statement-input-list" } : a === "statement-callee" ? { kind: "statement-callee" } : { kind: "statement-output-list" };
    if (a === "top-level") {
      const m = e[s];
      if (m.type !== "word" || m.value !== "scheme")
        return null;
      a = "scheme-input-list", s += 1;
      continue;
    }
    if (a === "scheme-input-list") {
      const m = mu(e, s);
      if (m === null)
        return { kind: "scheme-input-list" };
      a = "scheme-name", s = m;
      continue;
    }
    if (a === "scheme-name") {
      if (e[s]?.type !== "word")
        return { kind: "scheme-name" };
      a = "scheme-output-list", s += 1;
      continue;
    }
    if (a === "scheme-output-list") {
      const m = mu(e, s);
      if (m === null)
        return { kind: "scheme-output-list" };
      a = "scheme-colon", s = m;
      continue;
    }
    if (a === "scheme-colon") {
      if (e[s]?.type !== "colon")
        return { kind: "scheme-colon" };
      a = "body-start", u = !0, s += 1;
      continue;
    }
    if (a === "body-start") {
      const m = e[s];
      if (m.type === "word" && m.value === "end") {
        a = "top-level", u = !1, c = !1, s += 1;
        continue;
      }
      if (u && m.type === "word" && m.value === "local") {
        a = "local-name", u = !1, c = !1, s += 1;
        continue;
      }
      a = "statement-input-list";
      continue;
    }
    if (a === "local-name") {
      const m = e[s];
      if (m.type === "word" && m.value !== "end") {
        c = !0, s += 1;
        continue;
      }
      if (m.type === "lparen") {
        a = "statement-input-list";
        continue;
      }
      if (m.type === "word" && m.value === "end") {
        a = "top-level", c = !1, s += 1;
        continue;
      }
      return { kind: "local-name" };
    }
    if (a === "statement-input-list") {
      const m = mu(e, s);
      if (m === null)
        return { kind: "statement-input-list" };
      a = "statement-callee", s = m;
      continue;
    }
    if (a === "statement-callee") {
      if (e[s]?.type !== "word")
        return { kind: "statement-callee" };
      a = "statement-output-list", s += 1;
      continue;
    }
    const h = mu(e, s);
    if (h === null)
      return { kind: "statement-output-list" };
    a = "body-start", u = !1, s = h;
  }
}
function xR(l, t, e) {
  if (!e)
    return null;
  const i = Pm(l, t), s = vR(Fm(l), i.from), a = mc(l, t), u = a.activeScheme?.start !== void 0 ? l.indexOf(":", a.activeScheme.start) : -1;
  return s?.type === "colon" && e.kind === "statement-input-list" ? { kind: "body-start", canDeclareLocal: !0 } : u !== -1 && i.from > u && e.kind === "scheme-input-list" ? { kind: "statement-input-list" } : e;
}
function wR(l, t) {
  const e = mc(l, t), i = [{ label: "scheme", type: "keyword", detail: "Start a new scheme definition" }];
  e.activeScheme && (i.push({ label: "(", type: "text", detail: "Start a signal list" }), i.push({ label: "end", type: "keyword", detail: "Finish the current scheme" }), i.push({ label: "local", type: "keyword", detail: "Declare local signals in this scheme" }));
  for (const s of dc)
    i.push({ label: s, type: "function", detail: "Built-in scheme" });
  for (const s of e.helperSchemeNames)
    i.push({ label: s, type: "function", detail: "Helper scheme from this file" });
  for (const s of e.visibleSignals)
    i.push({ label: s, type: "variable", detail: "Signal in the current scheme" });
  return Wx(i);
}
function AR(l, t) {
  if (Xx(l, t))
    return [];
  const e = mc(l, t), i = Pm(l, t), s = xR(l, t, SR(l, i.from)), a = [], u = (p, y) => {
    a.push({ label: p, type: "keyword", detail: y });
  }, c = (p, y) => {
    a.push({ label: p, type: "function", detail: y });
  }, h = (p, y) => {
    a.push({ label: p, type: "variable", detail: y });
  }, m = (p, y) => {
    a.push({ label: p, type: "text", detail: y });
  };
  if (!s)
    return [];
  if (s.kind === "top-level" && u("scheme", "Start a new scheme definition"), s.kind === "scheme-input-list" && m("(", "Start the input signal list"), s.kind === "scheme-output-list" && m("(", "Start the output signal list"), s.kind === "scheme-colon" && m(":", "Finish the scheme header"), s.kind === "body-start" && (m("(", "Start a statement"), u("end", "Finish the current scheme"), s.canDeclareLocal && u("local", "Declare local signals in this scheme")), s.kind === "statement-input-list") {
    m("(", "Start the input signal list");
    for (const p of e.visibleSignals)
      h(p, "Signal in the current scheme");
  }
  if (s.kind === "statement-callee") {
    for (const p of dc)
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
  return Wx(a);
}
function Kv(l) {
  return {
    label: l.label,
    type: l.type,
    detail: l.detail
  };
}
function CR(l) {
  if (Xx(l.state.doc.toString(), l.pos))
    return null;
  const t = l.state.doc.toString(), e = Pm(t, l.pos);
  let i = AR(t, l.pos).filter((s) => s.label.startsWith(e.text)).map(Kv);
  return i.length === 0 && l.explicit && (i = wR(t, l.pos).filter((s) => s.label.startsWith(e.text)).map(Kv)), i.length === 0 && !l.explicit ? null : {
    from: e.from,
    options: i,
    validFor: /^\w*$/
  };
}
function kR() {
  return [
    tt.baseTheme({
      ".cm-scheme-keyword": { color: "#0f766e", fontWeight: "700" },
      ".cm-scheme-builtin": { color: "#1d4ed8", fontWeight: "600" },
      ".cm-scheme-helper": { color: "#7c3aed", fontWeight: "600" },
      ".cm-scheme-signal": { color: "#b45309" },
      ".cm-scheme-punctuation": { color: "#475569" },
      ".cm-scheme-identifier": { color: "#111827" },
      ".cm-scheme-comment": { color: "#64748b", fontStyle: "italic" }
    }),
    yR,
    tl.highest(
      Ca.of([
        { key: "Tab", run: Ex },
        { key: "Enter", run: um }
      ])
    ),
    zx({ interactionDelay: 0, override: [CR] })
  ];
}
const Kx = 92, Qx = 56, MR = 164, TR = 88, pu = 30, OR = {
  not: 1,
  and: 2,
  or: 2
};
function pd(l, t) {
  const e = l.schemes.find((i) => i.name.name === t);
  if (!e)
    throw new Error(`Scheme ${t} was not found.`);
  return e;
}
function DR(l) {
  return l === "and" || l === "or" || l === "not";
}
function ER(l) {
  const t = oR(l);
  if (!t?.schemes[0])
    return null;
  const e = [], i = [], s = [];
  let a = 1;
  const u = (A) => `${A}-${a++}`, c = (A) => {
    const k = u("node");
    return e.push({ ...A, id: k, x: 0, y: 0 }), k;
  }, h = (A, k) => {
    i.push({ id: u("wire"), from: A, to: k });
  }, m = (A, k) => {
    const E = e.length, _ = Object.fromEntries(
      A.inputs.items.map((R) => [
        R.name,
        c({
          kind: "input",
          label: R.name,
          inputCount: k ? 0 : 1,
          isSource: k,
          inputName: k ? R.name : void 0
        })
      ])
    ), V = Object.fromEntries(
      A.outputs.items.map((R) => [
        R.name,
        c({ kind: "output", label: R.name, inputCount: 1, isSource: !1 })
      ])
    ), Y = new Map(Object.entries(_)), T = [];
    for (const R of A.statements) {
      if (DR(R.callee.name)) {
        const I = c({
          kind: "gate",
          label: R.callee.name.toUpperCase(),
          gate: R.callee.name,
          inputCount: R.inputs.items.length,
          isSource: !1
        });
        R.outputs.items.forEach((F) => Y.set(F.name, I)), T.push({ inputIds: R.inputs.items.map(() => I), outputIds: R.outputs.items.map(() => I) });
        continue;
      }
      if (R.callee.name === "zero" || R.callee.name === "one") {
        const I = R.callee.name === "one" ? 1 : 0, F = c({ kind: "constant", label: String(I), value: I, inputCount: 0, isSource: !0 });
        R.outputs.items.forEach((ct) => Y.set(ct.name, F)), T.push({ inputIds: [], outputIds: R.outputs.items.map(() => F) });
        continue;
      }
      const U = m(pd(t, R.callee.name), !1);
      R.outputs.items.forEach((I, F) => Y.set(I.name, U.outputIds[pd(t, R.callee.name).outputs.items[F].name])), T.push({
        inputIds: pd(t, R.callee.name).inputs.items.map((I) => U.inputIds[I.name]),
        outputIds: R.outputs.items.map((I) => Y.get(I.name))
      });
    }
    for (const R of [...A.locals, ...A.outputs.items]) {
      if (Y.has(R.name))
        continue;
      const U = c({ kind: "constant", label: "0", value: 0, inputCount: 0, isSource: !0 });
      Y.set(R.name, U);
    }
    if (A.statements.forEach((R, U) => {
      const I = T[U];
      R.inputs.items.forEach((F, ct) => {
        const at = Y.get(F.name), et = I.inputIds[ct];
        at && et && h(at, et);
      });
    }), A.outputs.items.forEach((R) => {
      const U = Y.get(R.name);
      U && h(U, V[R.name]);
    }), !k) {
      const R = e.slice(E).map((U) => U.id);
      s.push({ id: u("frame"), label: A.name.name, nodeIds: R, x: 0, y: 0, width: 0, height: 0 });
    }
    return { inputIds: _, outputIds: V };
  }, p = t.schemes[0], y = m(p, !0), v = RR(e, i), S = BR(s, v), w = NR(v, S);
  return { nodes: v, wires: i, frames: S, inputNodeIds: y.inputIds, bounds: w };
}
function RR(l, t) {
  const e = /* @__PURE__ */ new Map();
  for (const c of l)
    e.set(c.id, []);
  for (const c of t)
    e.get(c.to)?.push(c.from);
  new Map(l.map((c) => [c.id, c]));
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), a = (c) => {
    if (i.has(c))
      return i.get(c);
    if (s.has(c))
      return 0;
    s.add(c);
    const h = Math.max(0, ...(e.get(c) ?? []).map((m) => a(m) + 1));
    return s.delete(c), i.set(c, h), h;
  }, u = /* @__PURE__ */ new Map();
  for (const c of l) {
    const h = a(c.id), m = u.get(h) ?? [];
    m.push(c), u.set(h, m);
  }
  return l.map((c) => {
    const m = u.get(i.get(c.id) ?? 0).findIndex((p) => p.id === c.id);
    return { ...c, x: 60 + (i.get(c.id) ?? 0) * MR, y: 60 + m * TR };
  });
}
function BR(l, t) {
  const e = new Map(t.map((i) => [i.id, i]));
  return l.map((i) => {
    const s = i.nodeIds.map((m) => e.get(m)).filter((m) => !!m), a = Math.min(...s.map((m) => m.x)), u = Math.min(...s.map((m) => m.y)), c = Math.max(...s.map((m) => m.x + Kx)), h = Math.max(...s.map((m) => m.y + Qx));
    return {
      ...i,
      x: a - pu,
      y: u - pu - 18,
      width: c - a + pu * 2,
      height: h - u + pu * 2 + 18
    };
  }).sort((i, s) => s.nodeIds.length - i.nodeIds.length);
}
function NR(l, t) {
  const e = Math.max(...l.map((s) => s.x + Kx), ...t.map((s) => s.x + s.width), 600), i = Math.max(...l.map((s) => s.y + Qx), ...t.map((s) => s.y + s.height), 360);
  return { x: 0, y: 0, width: e + 60, height: i + 60 };
}
function LR(l, t) {
  const e = new Map(l.nodes.map((y) => [y.id, y])), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (const y of l.wires)
    i.set(y.from, [...i.get(y.from) ?? [], y]), s.set(y.to, [...s.get(y.to) ?? [], y]);
  const a = [], u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
  let h = 0;
  const m = (y) => a.push({ ...y, order: h++ }), p = (y, v, S) => {
    for (const w of i.get(y) ?? [])
      m({ time: S, target: "wire", id: w.id, value: v });
  };
  for (const y of l.nodes) {
    if (!y.isSource)
      continue;
    const v = y.kind === "constant" ? y.value ?? 0 : t[y.inputName ?? ""] ?? 0;
    m({ time: 0, target: "node", id: y.id, value: v });
  }
  for (let y = 0; y < a.length; y += 1) {
    a.sort((_, V) => _.time - V.time || _.order - V.order);
    const v = a[y];
    if (v.target === "node") {
      p(v.id, v.value, v.time);
      continue;
    }
    const S = l.wires.find((_) => _.id === v.id), w = e.get(S.to);
    if (w.kind !== "gate") {
      m({ time: v.time, target: "node", id: w.id, value: v.value });
      continue;
    }
    const A = u.get(w.id) ?? /* @__PURE__ */ new Map();
    if (A.set(S.id, v.value), u.set(w.id, A), A.size < w.inputCount || c.has(w.id))
      continue;
    c.add(w.id);
    const k = (s.get(w.id) ?? []).map((_) => A.get(_.id) ?? 0), E = w.gate === "not" ? k[0] === 1 ? 0 : 1 : w.gate === "and" ? k.every((_) => _ === 1) ? 1 : 0 : k.some((_) => _ === 1) ? 1 : 0;
    m({ time: v.time + OR[w.gate], target: "node", id: w.id, value: E });
  }
  return a.sort((y, v) => y.time - v.time || y.order - v.order).map(({ order: y, ...v }) => v);
}
const Zx = { 0: "#f87171", 1: "#4ade80" }, la = 1200, Pu = 700;
function Qv(l) {
  const t = Math.max(0.12, Math.min(1.1, (la - 96) / l.bounds.width, (Pu - 96) / l.bounds.height));
  return {
    scale: t,
    x: (la - l.bounds.width * t) / 2 - l.bounds.x * t,
    y: (Pu - l.bounds.height * t) / 2 - l.bounds.y * t
  };
}
function hm(l) {
  return l === void 0 ? "#101827" : Zx[l];
}
function zR(l, t) {
  const e = l.x + 92, i = l.y + 28, s = t.x, a = t.y + 28, u = Math.max(36, Math.abs(s - e) * 0.45);
  return `M ${e} ${i} C ${e + u} ${i}, ${s - u} ${a}, ${s} ${a}`;
}
function HR({ node: l, value: t }) {
  const e = hm(t), i = { fill: e, stroke: "#cbd5e1", strokeWidth: 2 };
  return l.gate === "not" ? /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx("polygon", { ...i, points: `${l.x + 10},${l.y + 5} ${l.x + 10},${l.y + 51} ${l.x + 56},${l.y + 28}` }),
    /* @__PURE__ */ Z.jsx("circle", { cx: l.x + 63, cy: l.y + 28, fill: e, r: "6", stroke: "#cbd5e1", strokeWidth: "2" }),
    /* @__PURE__ */ Z.jsx("text", { className: "schemio-visualizer__gate-text", x: l.x + 29, y: l.y + 32, children: "NOT" })
  ] }) : l.gate === "and" ? /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx("path", { ...i, d: `M ${l.x + 7} ${l.y + 4} H ${l.x + 46} A 24 24 0 0 1 ${l.x + 46} ${l.y + 52} H ${l.x + 7} Z` }),
    /* @__PURE__ */ Z.jsx("text", { className: "schemio-visualizer__gate-text", x: l.x + 31, y: l.y + 32, children: "AND" })
  ] }) : /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx("path", { ...i, d: `M ${l.x + 7} ${l.y + 4} Q ${l.x + 28} ${l.y + 28} ${l.x + 7} ${l.y + 52} Q ${l.x + 46} ${l.y + 52} ${l.x + 76} ${l.y + 28} Q ${l.x + 46} ${l.y + 4} ${l.x + 7} ${l.y + 4} Z` }),
    /* @__PURE__ */ Z.jsx("path", { d: `M ${l.x + 7} ${l.y + 4} Q ${l.x + 24} ${l.y + 28} ${l.x + 7} ${l.y + 52}`, fill: "none", stroke: "#cbd5e1", strokeWidth: "2" }),
    /* @__PURE__ */ Z.jsx("text", { className: "schemio-visualizer__gate-text", x: l.x + 36, y: l.y + 32, children: "OR" })
  ] });
}
function _R({ node: l, value: t }) {
  let e;
  return l.kind === "gate" ? e = /* @__PURE__ */ Z.jsx(HR, { node: l, value: t }) : l.kind === "constant" ? e = /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx("circle", { cx: l.x + 28, cy: l.y + 28, fill: hm(t), r: "24", stroke: "#cbd5e1", strokeWidth: "2" }),
    /* @__PURE__ */ Z.jsx("text", { className: "schemio-visualizer__constant-text", x: l.x + 28, y: l.y + 34, children: l.label })
  ] }) : e = /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx("rect", { className: "schemio-visualizer__port", fill: hm(t), height: "42", rx: "8", width: "82", x: l.x + 5, y: l.y + 7 }),
    /* @__PURE__ */ Z.jsx("text", { className: "schemio-visualizer__port-text", x: l.x + 46, y: l.y + 33, children: l.label })
  ] }), /* @__PURE__ */ Z.jsx("g", { "data-node-id": l.id, "data-node-kind": l.kind, children: e });
}
function UR({ model: l, inputs: t, testName: e, onClose: i }) {
  const [s, a] = Tt.useState(120), [u, c] = Tt.useState({}), [h, m] = Tt.useState({}), [p, y] = Tt.useState(() => Qv(l)), [v, S] = Tt.useState(!1), w = Tt.useRef([]), A = Tt.useRef(null), k = Tt.useCallback(() => {
    w.current.forEach((T) => window.clearTimeout(T)), w.current = [];
  }, []), E = Tt.useCallback(() => {
    k(), c({}), m({}), S(!1);
  }, [k]), _ = Tt.useCallback(() => y(Qv(l)), [l]);
  Tt.useEffect(() => {
    E(), _();
  }, [_, E]), Tt.useEffect(() => {
    const T = (R) => {
      R.key === "Escape" && i();
    };
    return window.addEventListener("keydown", T), () => {
      window.removeEventListener("keydown", T), k();
    };
  }, [k, i]);
  const V = () => {
    E(), S(!0);
    const T = LR(l, t), R = T.at(-1)?.time ?? 0;
    for (const U of T)
      w.current.push(
        window.setTimeout(() => {
          U.target === "node" ? c((I) => ({ ...I, [U.id]: U.value })) : m((I) => ({ ...I, [U.id]: U.value }));
        }, U.time * s)
      );
    w.current.push(window.setTimeout(() => S(!1), R * s + 180));
  }, Y = new Map(l.nodes.map((T) => [T.id, T]));
  return /* @__PURE__ */ Z.jsx("div", { className: "schemio-visualizer", role: "dialog", "aria-label": `Signal visualizer for ${e}`, "aria-modal": "true", children: /* @__PURE__ */ Z.jsxs("div", { className: "schemio-visualizer__panel", children: [
    /* @__PURE__ */ Z.jsxs("header", { className: "schemio-visualizer__header", children: [
      /* @__PURE__ */ Z.jsxs("div", { children: [
        /* @__PURE__ */ Z.jsx("h3", { children: "Signal visualizer" }),
        /* @__PURE__ */ Z.jsxs("p", { children: [
          e,
          ". Black means the signal has not reached that part of the scheme yet."
        ] })
      ] }),
      /* @__PURE__ */ Z.jsx("button", { className: "schemio-visualizer__close", onClick: i, type: "button", children: "Close" })
    ] }),
    /* @__PURE__ */ Z.jsxs("div", { className: "schemio-visualizer__controls", children: [
      /* @__PURE__ */ Z.jsx("button", { className: "schemio-visualizer__primary", disabled: v, onClick: V, type: "button", children: "Simulate" }),
      /* @__PURE__ */ Z.jsx("button", { onClick: E, type: "button", children: "Reset" }),
      /* @__PURE__ */ Z.jsx("button", { onClick: _, type: "button", children: "Fit diagram" }),
      /* @__PURE__ */ Z.jsxs("label", { children: [
        "Transistor delay: ",
        /* @__PURE__ */ Z.jsxs("strong", { children: [
          s,
          " ms"
        ] }),
        /* @__PURE__ */ Z.jsx("input", { "aria-label": "Transistor delay", max: "400", min: "40", onChange: (T) => a(Number(T.target.value)), step: "10", type: "range", value: s })
      ] })
    ] }),
    /* @__PURE__ */ Z.jsx(
      "svg",
      {
        className: "schemio-visualizer__canvas",
        onPointerDown: (T) => {
          A.current = { pointerId: T.pointerId, x: T.clientX, y: T.clientY }, T.currentTarget.setPointerCapture(T.pointerId);
        },
        onPointerMove: (T) => {
          if (!A.current || A.current.pointerId !== T.pointerId)
            return;
          const R = T.currentTarget.getBoundingClientRect(), U = la / R.width, I = (T.clientX - A.current.x) * U, F = (T.clientY - A.current.y) * U;
          A.current = { ...A.current, x: T.clientX, y: T.clientY }, y((ct) => ({ ...ct, x: ct.x + I, y: ct.y + F }));
        },
        onPointerUp: () => {
          A.current = null;
        },
        onWheel: (T) => {
          const R = T.currentTarget.getBoundingClientRect(), U = (T.clientX - R.left) / R.width * la, I = (T.clientY - R.top) / R.height * Pu;
          y((F) => {
            const ct = Math.max(0.08, Math.min(3, F.scale * (T.deltaY < 0 ? 1.12 : 0.88)));
            return {
              scale: ct,
              x: U - (U - F.x) * ct / F.scale,
              y: I - (I - F.y) * ct / F.scale
            };
          });
        },
        viewBox: `0 0 ${la} ${Pu}`,
        children: /* @__PURE__ */ Z.jsxs("g", { transform: `translate(${p.x} ${p.y}) scale(${p.scale})`, children: [
          l.frames.map((T) => /* @__PURE__ */ Z.jsxs("g", { children: [
            /* @__PURE__ */ Z.jsx("rect", { className: "schemio-visualizer__frame", height: T.height, rx: "14", width: T.width, x: T.x, y: T.y }),
            /* @__PURE__ */ Z.jsx("text", { className: "schemio-visualizer__frame-label", x: T.x + 12, y: T.y + 20, children: T.label })
          ] }, T.id)),
          l.wires.map((T) => {
            const R = h[T.id];
            return /* @__PURE__ */ Z.jsx("path", { className: R === void 0 ? "schemio-visualizer__wire" : "schemio-visualizer__wire schemio-visualizer__wire--active", d: zR(Y.get(T.from), Y.get(T.to)), stroke: R === void 0 ? "#334155" : Zx[R] }, T.id);
          }),
          l.nodes.map((T) => /* @__PURE__ */ Z.jsx(_R, { node: T, value: u[T.id] }, T.id))
        ] })
      }
    ),
    /* @__PURE__ */ Z.jsx("p", { className: "schemio-visualizer__hint", children: "Scroll to zoom. Drag the diagram to move around." })
  ] }) });
}
function Zv(l, t, e) {
  if (!e)
    return t;
  try {
    return window.localStorage.getItem(l) ?? t;
  } catch {
    return t;
  }
}
function VR(l, t, e) {
  if (e)
    try {
      window.localStorage.setItem(l, t);
    } catch {
    }
}
function qR(l, t) {
  if (t)
    try {
      window.localStorage.removeItem(l);
    } catch {
    }
}
function jR(l, t, e) {
  return `Line ${l}, column ${t}: ${e}`;
}
function gd(l, t) {
  return Object.fromEntries(l.map((e) => [e, t[e] ?? 0]));
}
function YR({ initialSource: l, storageKey: t, persist: e, readOnly: i, onSourceChange: s }) {
  const [a, u] = Tt.useState(() => Zv(t, l, e)), [c, h] = Tt.useState([{}]), [m, p] = Tt.useState(null), y = Tt.useMemo(() => Fu(a), [a]), v = Tt.useMemo(() => y.isValid ? ER(a) : null, [y.isValid, a]), S = Tt.useMemo(
    () => y.isValid ? c.map((Y) => hR(a, Y)) : [],
    [y.isValid, a, c]
  ), w = Tt.useMemo(() => [...kR(), tt.lineWrapping], []);
  Tt.useEffect(() => {
    u(Zv(t, l, e));
  }, [l, e, t]), Tt.useEffect(() => {
    h((Y) => Y.map((T) => gd(y.inputs, T)));
  }, [y.inputs]);
  const A = (Y) => {
    u(Y), VR(t, Y, e), s(Y, Fu(Y).isValid);
  }, k = () => {
    qR(t, e), A(l);
  }, E = () => {
    h((Y) => [...Y, gd(y.inputs, {})]);
  }, _ = (Y) => {
    h((T) => T.filter((R, U) => U !== Y));
  }, V = (Y, T) => {
    h(
      (R) => R.map(
        (U, I) => I === Y ? { ...U, [T]: U[T] === 1 ? 0 : 1 } : U
      )
    );
  };
  return /* @__PURE__ */ Z.jsxs("section", { className: "schemio-playground", "aria-label": "Schemio playground", children: [
    /* @__PURE__ */ Z.jsxs("header", { className: "schemio-playground__header", children: [
      /* @__PURE__ */ Z.jsxs("div", { children: [
        /* @__PURE__ */ Z.jsx("h2", { children: "Schemio playground" }),
        /* @__PURE__ */ Z.jsx("p", { children: "The first scheme is the main scheme. Change inputs to see outputs immediately." })
      ] }),
      i ? null : /* @__PURE__ */ Z.jsx("button", { className: "schemio-playground__reset", onClick: k, type: "button", children: "Reset saved code" })
    ] }),
    /* @__PURE__ */ Z.jsx("div", { className: "schemio-playground__editor", children: /* @__PURE__ */ Z.jsx(
      jx,
      {
        "aria-label": "Schemio code editor",
        basicSetup: { foldGutter: !1, highlightActiveLine: !0 },
        editable: !i,
        extensions: w,
        minHeight: "4.8rem",
        onChange: A,
        value: a
      }
    ) }),
    y.diagnostics.length > 0 ? /* @__PURE__ */ Z.jsxs("section", { className: "schemio-playground__diagnostics", "aria-live": "polite", children: [
      /* @__PURE__ */ Z.jsx("h3", { children: "Diagnostics" }),
      /* @__PURE__ */ Z.jsx("ul", { children: y.diagnostics.map((Y, T) => /* @__PURE__ */ Z.jsx("li", { children: jR(Y.line, Y.column, Y.message) }, `${Y.line}:${Y.column}:${T}`)) })
    ] }) : null,
    /* @__PURE__ */ Z.jsxs("section", { className: "schemio-playground__debugger", children: [
      /* @__PURE__ */ Z.jsxs("div", { className: "schemio-playground__debugger-title", children: [
        /* @__PURE__ */ Z.jsx("h3", { children: "Live debugger" }),
        /* @__PURE__ */ Z.jsx("p", { children: y.mainSchemeName ? `Main scheme: ${y.mainSchemeName}` : "Main scheme is not available yet." })
      ] }),
      y.isValid ? /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
        /* @__PURE__ */ Z.jsxs("div", { className: "schemio-playground__test-actions", children: [
          /* @__PURE__ */ Z.jsx("h4", { children: "Test cases" }),
          /* @__PURE__ */ Z.jsx("button", { className: "schemio-playground__add-test", onClick: E, type: "button", children: "Add test" })
        ] }),
        /* @__PURE__ */ Z.jsxs("div", { className: "schemio-playground__test-header", "aria-hidden": "true", children: [
          /* @__PURE__ */ Z.jsx("span", { children: "Test" }),
          /* @__PURE__ */ Z.jsx("span", { children: "Inputs" }),
          /* @__PURE__ */ Z.jsx("span", { children: "Outputs" })
        ] }),
        /* @__PURE__ */ Z.jsx("div", { className: "schemio-playground__test-list", children: c.map((Y, T) => /* @__PURE__ */ Z.jsxs("div", { className: "schemio-playground__test-case", children: [
          /* @__PURE__ */ Z.jsxs("span", { className: "schemio-playground__test-number", children: [
            "Test ",
            T + 1
          ] }),
          /* @__PURE__ */ Z.jsx("div", { className: "schemio-playground__signal-list", "aria-label": `Test ${T + 1} inputs`, children: y.inputs.map((R) => /* @__PURE__ */ Z.jsxs(
            "button",
            {
              "aria-label": `Test ${T + 1}: ${R} ${Y[R] ?? 0}`,
              className: Y[R] === 1 ? "schemio-playground__bit schemio-playground__bit--on" : "schemio-playground__bit",
              onClick: () => V(T, R),
              type: "button",
              children: [
                /* @__PURE__ */ Z.jsx("span", { children: R }),
                /* @__PURE__ */ Z.jsx("strong", { children: Y[R] ?? 0 })
              ]
            },
            R
          )) }),
          /* @__PURE__ */ Z.jsx("div", { className: "schemio-playground__signal-list", "aria-label": `Test ${T + 1} outputs`, children: y.outputs.map((R) => /* @__PURE__ */ Z.jsxs(
            "div",
            {
              "aria-label": `Test ${T + 1}: ${R} ${S[T]?.outputs[R] ?? 0}`,
              className: "schemio-playground__bit schemio-playground__output",
              children: [
                /* @__PURE__ */ Z.jsx("span", { children: R }),
                /* @__PURE__ */ Z.jsx("strong", { children: S[T]?.outputs[R] ?? 0 })
              ]
            },
            R
          )) }),
          c.length > 1 ? /* @__PURE__ */ Z.jsx("button", { "aria-label": `Remove test ${T + 1}`, className: "schemio-playground__remove-test", onClick: () => _(T), type: "button", children: "Remove" }) : null,
          v ? /* @__PURE__ */ Z.jsx(
            "button",
            {
              "aria-label": `Visualize test ${T + 1}`,
              className: "schemio-playground__visualize-test",
              onClick: () => p({ inputs: gd(y.inputs, Y), name: `Test ${T + 1}` }),
              type: "button",
              children: "Visualize"
            }
          ) : null
        ] }, T)) })
      ] }) : /* @__PURE__ */ Z.jsx("p", { className: "schemio-playground__blocked", children: "Fix the errors before the debugger can run." })
    ] }),
    m && v ? /* @__PURE__ */ Z.jsx(UR, { inputs: m.inputs, model: v, onClose: () => p(null), testName: m.name }) : null
  ] });
}
function WR(l, t) {
  const e = MA.createRoot(l);
  return e.render(/* @__PURE__ */ Z.jsx(YR, { ...t })), { unmount: () => e.unmount() };
}
export {
  WR as mountSchemioPlayground
};
