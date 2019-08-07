/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.4",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return d.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return n.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(n.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(d.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
    },
    isPlainObject: function(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },
    camelCase: function(a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, c) {
      var d, e = 0,
        f = a.length,
        g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1) break
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1) break
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1) break
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : g.call(b, a, c)
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, f = 0,
        g = a.length,
        h = s(a),
        i = [];
      if (h)
        for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a) d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, e, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
        return a.apply(b || this, e.concat(d.call(arguments)))
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
    },
    now: Date.now,
    support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
      P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      ea = function() {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (fa) {
      H = {
        apply: E.length ? function(a, b) {
          G.apply(a, I.call(b))
        } : function(a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode) return d;
              if (h.id === j) return d.push(h), d
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
            while (l--) o[l] = s + ra(o[l]);
            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
          }
          if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d
          } catch (y) {} finally {
            r || b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function la(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function ma(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function na(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function oa(a) {
      return ia(function(b) {
        return b = +b, ia(function(c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = ga.support = {}, f = ga.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = ga.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function(a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(ca, da);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(ca, da);
        return function(a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function(a) {
        var b = g.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function(a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          h = [a],
          i = [b];
        if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return la(a, b);
        c = a;
        while (c = c.parentNode) h.unshift(c);
        c = b;
        while (c = c.parentNode) i.unshift(c);
        while (h[d] === i[d]) d++;
        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
      }, g) : n
    }, ga.matches = function(a, b) {
      return ga(a, null, null, b)
    }, ga.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0
    }, ga.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, ga.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, ga.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, ga.uniqueSort = function(a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = ga.getText = function(a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
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
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(ca, da).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break
                  }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
              else
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function(a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ia(function(a) {
          var b = [],
            c = [],
            d = h(a.replace(R, "$1"));
          return d[u] ? ia(function(a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ia(function(a) {
          return function(b) {
            return ga(a, b).length > 0
          }
        }),
        contains: ia(function(a) {
          return a = a.replace(ca, da),
            function(b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ia(function(a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === o
        },
        focus: function(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !d.pseudos.empty(a)
        },
        header: function(a) {
          return Z.test(a.nodeName)
        },
        input: function(a) {
          return Y.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: oa(function() {
          return [0]
        }),
        last: oa(function(a, b) {
          return [b - 1]
        }),
        eq: oa(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: oa(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: oa(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: oa(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: oa(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function qa() {}
    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };

    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function(b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function ta(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c
    }

    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ua(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : va(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
          return a === b
        }, h, !0), l = sa(function(a) {
          return J(b, a) > -1
        }, h, !0), m = [function(a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
          }
          m.push(c)
        }
      return ta(m)
    }

    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, h, i, k) {
          var l, m, o, p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while (o = a[m++])
                if (o(l, g, h)) {
                  i.push(l);
                  break
                }
              k && (w = v)
            }
            c && ((l = !o && l) && p--, f && r.push(l))
          }
          if (p += q, c && q !== p) {
            m = 0;
            while (o = b[m++]) o(r, s, g, h);
            if (f) {
              if (p > 0)
                while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s)
            }
            H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
          }
          return k && (w = v, j = t), r
        };
      return c ? ia(f) : f
    }
    return h = ga.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, ya(e, d)), f.selector = a
      }
      return f
    }, i = ga.select = function(a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ja(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ja(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ja(function(a) {
      return null == a.getAttribute("disabled")
    }) || ka(K, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), ga
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function(a) {
      return g.call(b, a) >= 0 !== c
    })
  }
  n.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function(a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
        for (b = 0; c > b; b++)
          if (n.contains(e[b], this)) return !0
      }));
      for (b = 0; c > b; b++) n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function(a) {
      return this.pushStack(x(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(x(this, a || [], !0))
    },
    is: function(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
    }
  });
  var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = n.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
            for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/,
    C = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.extend({
    dir: function(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        }
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), n.fn.extend({
    has: function(a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function() {
        for (var a = 0; c > a; a++)
          if (n.contains(this, b[a])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? n.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return n.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return n.dir(a, "parentNode", c)
    },
    next: function(a) {
      return D(a, "nextSibling")
    },
    prev: function(a) {
      return D(a, "previousSibling")
    },
    nextAll: function(a) {
      return n.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return n.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return n.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return n.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return n.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return n.sibling(a.firstChild)
    },
    contents: function(a) {
      return a.contentDocument || n.merge([], a.childNodes)
    }
  }, function(a, b) {
    n.fn[a] = function(c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var E = /\S+/g,
    F = {};

  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [],
      i = !a.once && [],
      j = function(l) {
        for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break
          }
        d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
      },
      k = {
        add: function() {
          if (h) {
            var c = h.length;
            ! function g(b) {
              n.each(b, function(b, c) {
                var d = n.type(c);
                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
              })
            }(arguments), d ? f = h.length : b && (e = c, j(b))
          }
          return this
        },
        remove: function() {
          return h && n.each(arguments, function(a, b) {
            var c;
            while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
          }), this
        },
        has: function(a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
        },
        empty: function() {
          return h = [], f = 0, this
        },
        disable: function() {
          return h = i = b = void 0, this
        },
        disabled: function() {
          return !h
        },
        lock: function() {
          return i = void 0, b || k.disable(), this
        },
        locked: function() {
          return !i
        },
        fireWith: function(a, b) {
          return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
        },
        fire: function() {
          return k.fireWith(this, arguments), this
        },
        fired: function() {
          return !!c
        }
      };
    return k
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return n.Deferred(function(c) {
              n.each(b, function(b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b = 0,
        c = d.call(arguments),
        e = c.length,
        f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function(a, b, c) {
          return function(e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var H;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
    }
  });

  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
  }
  n.ready.promise = function(b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
  }, n.ready.promise();
  var J = n.access = function(a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
        return j.call(n(a), c)
      })), b))
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  };
  n.acceptData = function(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };

  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function() {
        return {}
      }
    }), this.expando = n.expando + K.uid++
  }
  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function(a) {
      if (!K.accepts(a)) return 0;
      var b = {},
        c = a[this.expando];
      if (!c) {
        c = K.uid++;
        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b)
        } catch (d) {
          b[this.expando] = c, n.extend(a, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    },
    set: function(a, b, c) {
      var d, e = this.key(a),
        f = this.cache[e];
      if ("string" == typeof b) f[b] = c;
      else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
      else
        for (d in b) f[d] = b[d];
      return f
    },
    get: function(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b]
    },
    access: function(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function(a, b) {
      var c, d, e, f = this.key(a),
        g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};
      else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
        while (c--) delete g[d[c]]
      }
    },
    hasData: function(a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {})
    },
    discard: function(a) {
      a[this.expando] && delete this.cache[a[this.expando]]
    }
  };
  var L = new K,
    M = new K,
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        M.set(a, b, c)
      } else c = void 0;
    return c
  }
  n.extend({
    hasData: function(a) {
      return M.hasData(a) || L.hasData(a)
    },
    data: function(a, b, c) {
      return M.access(a, b, c)
    },
    removeData: function(a, b) {
      M.remove(a, b)
    },
    _data: function(a, b, c) {
      return L.access(a, b, c)
    },
    _removeData: function(a, b) {
      L.remove(a, b)
    }
  }), n.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          L.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        M.set(this, a)
      }) : J(this, function(b) {
        var c, d = n.camelCase(a);
        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;
          if (c = M.get(f, d), void 0 !== c) return c;
          if (c = P(f, d, void 0), void 0 !== c) return c
        } else this.each(function() {
          var c = M.get(this, d);
          M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function(a) {
      return this.each(function() {
        M.remove(this, a)
      })
    }
  }), n.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = n._queueHooks(a, b),
        g = function() {
          n.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return L.get(a, c) || L.access(a, c, {
        empty: n.Callbacks("once memory").add(function() {
          L.remove(a, [b + "queue", c])
        })
      })
    }
  }), n.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        n.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = n.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function(a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    },
    T = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
    return !0
  }

  function $() {
    return !1
  }

  function _() {
    try {
      return l.activeElement
    } catch (a) {}
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(E) || [""], j = b.length;
        while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
          } else
            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, k, m, o, p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    fix: function(a) {
      if (a[n.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--) c = d[b], a[c] = f[c];
      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), k.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0)
    };
    n.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
      }
    }
  }), n.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a) this.on(g, b, c, a[g], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
      else if (!d) return this;
      return 1 === e && (f = d, d = function(a) {
        return n().off(a), f.apply(this, arguments)
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
        n.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ba = /<([\w:]+)/,
    ca = /<|&#?\w+;/,
    da = /<(?:script|style|link)/i,
    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fa = /^$|\/(?:java|ecma)script/i,
    ga = /^true\/(.*)/,
    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ia = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

  function ja(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function ka(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function la(a) {
    var b = ga.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
  }

  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
      }
      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
    }
  }

  function oa(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }
  n.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
        else na(a, h);
      return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
        if (e = a[m], e || 0 === e)
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
        while (j--) f = f.lastChild;
        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
      } else l.push(b.createTextNode(e));
      k.textContent = "", m = 0;
      while (e = l[m++])
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
          j = 0;
          while (e = f[j++]) fa.test(e.type || "") && c.push(e)
        }
      return k
    },
    cleanData: function(a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e]
        }
        delete M.cache[c[M.expando]]
      }
    }
  }), n.fn.extend({
    text: function(a) {
      return J(this, function(a) {
        return void 0 === a ? n.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return n.clone(this, a, b)
      })
    },
    html: function(a) {
      return J(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(aa, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0,
        l = this.length,
        m = this,
        o = l - 1,
        p = a[0],
        q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
        if (g)
          for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
      }
      return this
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var qa, ra = {};

  function sa(b, c) {
    var d, e = n(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return e.detach(), f
  }

  function ta(a) {
    var b = l,
      c = ra[a];
    return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
  }
  var ua = /^margin/,
    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wa = function(b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

  function xa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function ya(a, b) {
    return {
      get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }! function() {
    var b, c, d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

      function g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
      }
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function() {
          return g(), b
        },
        boxSizingReliable: function() {
          return null == c && g(), c
        },
        reliableMarginRight: function() {
          var b, c = f.appendChild(l.createElement("div"));
          return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
        }
      })
    }
  }(), n.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var za = /^(none|table(?!-c[ea]).+)/,
    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
    Ca = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Da = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ea = ["Webkit", "O", "Moz", "ms"];

  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Ea.length;
    while (e--)
      if (b = Ea[e] + c, b in a) return b;
    return d
  }

  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Ha(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g
  }

  function Ia(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wa(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = xa(a, "opacity");
            return "" === c ? "1" : c
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
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
    }
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
          return Ia(a, b, d)
        }) : Ia(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && wa(a);
        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
    return b ? n.swap(a, {
      display: "inline-block"
    }, xa, [a, "marginRight"]) : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
  }), n.fn.extend({
    css: function(a, b) {
      return J(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return Ja(this, !0)
    },
    hide: function() {
      return Ja(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        S(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e)
  }
  n.Tween = Ka, Ka.prototype = {
    constructor: Ka,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = Ka.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = Ka.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
    }
  }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, n.fx = Ka.prototype.init, n.fx.step = {};
  var La, Ma, Na = /^(?:toggle|show|hide)$/,
    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pa = /queueHooks$/,
    Qa = [Va],
    Ra = {
      "*": [function(a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = Oa.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };

  function Sa() {
    return setTimeout(function() {
      La = void 0
    }), La = n.now()
  }

  function Ta(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function Va(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], Na.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0
        }
        m[d] = q && q[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
        n(a).hide()
      }), l.done(function() {
        var b;
        L.remove(a, "fxshow");
        for (b in m) n.style(a, b, m[b])
      });
      for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function Xa(a, b, c) {
    var d, e, f = 0,
      g = Qa.length,
      h = n.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++)
      if (d = Qa[f].call(j, a, k, j.opts)) return d;
    return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(Xa, {
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? Qa.unshift(a) : Qa.push(a)
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: Ta("show"),
      slideUp: Ta("hide"),
      slideToggle: Ta("toggle"),
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
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function() {
      var a, b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
      clearInterval(Ma), Ma = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
    function() {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
  var Ya, Za, $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
        void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(E);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), Za = {
    set: function(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = $a[b] || n.find.attr;
    $a[b] = function(a, b, d) {
      var e, f;
      return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
    }
  });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[n.propFix[a] || a]
      })
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  });
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).addClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
            f = 0;
            while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = n.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).removeClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
            g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function() {
        if ("string" === c) {
          var b, d = 0,
            e = n(this),
            f = a.match(E) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a))
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
      }
    }, k.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var cb = n.now(),
    db = /\?/;
  n.parseJSON = function(a) {
    return JSON.parse(a + "")
  }, n.parseXML = function(a) {
    var b, c;
    if (!a || "string" != typeof a) return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml")
    } catch (d) {
      b = void 0
    }
    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
  };
  var eb = /#.*$/,
    fb = /([?&])_=[^&]*/,
    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ib = /^(?:GET|HEAD)$/,
    jb = /^\/\//,
    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lb = {},
    mb = {},
    nb = "*/".concat("*"),
    ob = a.location.href,
    pb = kb.exec(ob.toLowerCase()) || [];

  function qb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function rb(a, b, c, d) {
    var e = {},
      f = a === mb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function sb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function tb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function ub(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: "GET",
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nb,
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
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function(a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
              }
              b = f[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === t ? e : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function(a) {
            return t || (k.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function(a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
      i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (j in {
          success: 1,
          error: 1,
          complete: 1
        }) v[j](k[j]);
      if (c = rb(mb, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, c.send(r, x)
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");

      function x(a, b, f, h) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
      }
      return v
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), n._evalUrl = function(a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function(a) {
      var b;
      return n.isFunction(a) ? this.each(function(b) {
        n(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        var a = this;
        while (a.firstElementChild) a = a.firstElementChild;
        return a
      }).append(this)), this)
    },
    wrapInner: function(a) {
      return this.each(n.isFunction(a) ? function(b) {
        n(this).wrapInner(a.call(this, b))
      } : function() {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = n.isFunction(a);
      return this.each(function(c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0
  }, n.expr.filters.visible = function(a) {
    return !n.expr.filters.hidden(a)
  };
  var vb = /%20/g,
    wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function(b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) Ab(c, a[c], b, e);
    return d.join("&").replace(vb, "+")
  }, n.fn.extend({
    serialize: function() {
      return n.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
      }).map(function(a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(xb, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(xb, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest
    } catch (a) {}
  };
  var Bb = 0,
    Cb = {},
    Db = {
      0: 200,
      1223: 204
    },
    Eb = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a in Cb) Cb[a]()
  }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
    var b;
    return k.cors || Eb && !a.crossDomain ? {
      send: function(c, d) {
        var e, f = a.xhr(),
          g = ++Bb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
          for (e in a.xhrFields) f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c) f.setRequestHeader(e, c[e]);
        b = function(a) {
          return function() {
            b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()))
          }
        }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null)
        } catch (h) {
          if (b) throw h
        }
      },
      abort: function() {
        b && b()
      }
    } : void 0
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function(d, e) {
          b = n("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function(a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), l.head.appendChild(b[0])
        },
        abort: function() {
          c && c()
        }
      }
    }
  });
  var Fb = [],
    Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Fb.pop() || n.expando + "_" + cb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
  };
  var Hb = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function(a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
      g.each(c, f || [a.responseText, b, a])
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem
    }).length
  };
  var Ib = a.document.documentElement;

  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  n.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        },
        f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    },
    position: function() {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent || Ib;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Ib
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(b, c) {
    var d = "pageYOffset" === c;
    n.fn[b] = function(e) {
      return J(this, function(b, e, f) {
        var g = Jb(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
      }, b, e, arguments.length, null)
    }
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return J(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.size = function() {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n
  });
  var Kb = a.jQuery,
    Lb = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
  }, typeof b === U && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S, X, u) {
  'use strict';

  function G(a) {
    return function() {
      var b = arguments[0],
        d;
      d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.4.8/" + (a ? a + "/" : "") + b;
      for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
        var c = encodeURIComponent,
          e;
        e = arguments[b];
        e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
        d += c(e)
      }
      return Error(d)
    }
  }

  function za(a) {
    if (null == a || Xa(a)) return !1;
    if (I(a) || E(a) || B && a instanceof B) return !0;
    var b = "length" in Object(a) && a.length;
    return Q(b) && (0 <= b && b - 1 in a || "function" == typeof a.item)
  }

  function n(a, b, d) {
    var c, e;
    if (a)
      if (z(a))
        for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
      else if (I(a) || za(a)) {
      var f = "object" !== typeof a;
      c = 0;
      for (e = a.length; c < e; c++)(f || c in a) && b.call(d, a[c], c, a)
    } else if (a.forEach && a.forEach !== n) a.forEach(b, d, a);
    else if (nc(a))
      for (c in a) b.call(d, a[c], c, a);
    else if ("function" === typeof a.hasOwnProperty)
      for (c in a) a.hasOwnProperty(c) &&
        b.call(d, a[c], c, a);
    else
      for (c in a) qa.call(a, c) && b.call(d, a[c], c, a);
    return a
  }

  function oc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);
    return c
  }

  function pc(a) {
    return function(b, d) {
      a(d, b)
    }
  }

  function Td() {
    return ++nb
  }

  function Mb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];
      if (H(g) || z(g))
        for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
          var m = h[k],
            r = g[m];
          d && H(r) ? da(r) ? a[m] = new Date(r.valueOf()) : Ma(r) ? a[m] = new RegExp(r) : r.nodeName ? a[m] = r.cloneNode(!0) :
            Nb(r) ? a[m] = r.clone() : (H(a[m]) || (a[m] = I(r) ? [] : {}), Mb(a[m], [r], !0)) : a[m] = r
        }
    }
    c ? a.$$hashKey = c : delete a.$$hashKey;
    return a
  }

  function M(a) {
    return Mb(a, ra.call(arguments, 1), !1)
  }

  function Ud(a) {
    return Mb(a, ra.call(arguments, 1), !0)
  }

  function ea(a) {
    return parseInt(a, 10)
  }

  function Ob(a, b) {
    return M(Object.create(a), b)
  }

  function x() {}

  function Ya(a) {
    return a
  }

  function na(a) {
    return function() {
      return a
    }
  }

  function qc(a) {
    return z(a.toString) && a.toString !== sa
  }

  function q(a) {
    return "undefined" === typeof a
  }

  function y(a) {
    return "undefined" !==
      typeof a
  }

  function H(a) {
    return null !== a && "object" === typeof a
  }

  function nc(a) {
    return null !== a && "object" === typeof a && !rc(a)
  }

  function E(a) {
    return "string" === typeof a
  }

  function Q(a) {
    return "number" === typeof a
  }

  function da(a) {
    return "[object Date]" === sa.call(a)
  }

  function z(a) {
    return "function" === typeof a
  }

  function Ma(a) {
    return "[object RegExp]" === sa.call(a)
  }

  function Xa(a) {
    return a && a.window === a
  }

  function Za(a) {
    return a && a.$evalAsync && a.$watch
  }

  function $a(a) {
    return "boolean" === typeof a
  }

  function sc(a) {
    return a && Q(a.length) &&
      Vd.test(sa.call(a))
  }

  function Nb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
  }

  function Wd(a) {
    var b = {};
    a = a.split(",");
    var d;
    for (d = 0; d < a.length; d++) b[a[d]] = !0;
    return b
  }

  function ta(a) {
    return F(a.nodeName || a[0] && a[0].nodeName)
  }

  function ab(a, b) {
    var d = a.indexOf(b);
    0 <= d && a.splice(d, 1);
    return d
  }

  function bb(a, b) {
    function d(a, b) {
      var d = b.$$hashKey,
        e;
      if (I(a)) {
        e = 0;
        for (var f = a.length; e < f; e++) b.push(c(a[e]))
      } else if (nc(a))
        for (e in a) b[e] = c(a[e]);
      else if (a && "function" === typeof a.hasOwnProperty)
        for (e in a) a.hasOwnProperty(e) &&
          (b[e] = c(a[e]));
      else
        for (e in a) qa.call(a, e) && (b[e] = c(a[e]));
      d ? b.$$hashKey = d : delete b.$$hashKey;
      return b
    }

    function c(a) {
      if (!H(a)) return a;
      var b = e.indexOf(a);
      if (-1 !== b) return f[b];
      if (Xa(a) || Za(a)) throw Aa("cpws");
      var b = !1,
        c;
      I(a) ? (c = [], b = !0) : sc(a) ? c = new a.constructor(a) : da(a) ? c = new Date(a.getTime()) : Ma(a) ? (c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), c.lastIndex = a.lastIndex) : z(a.cloneNode) ? c = a.cloneNode(!0) : (c = Object.create(rc(a)), b = !0);
      e.push(a);
      f.push(c);
      return b ? d(a, c) : c
    }
    var e = [],
      f = [];
    if (b) {
      if (sc(b)) throw Aa("cpta");
      if (a === b) throw Aa("cpi");
      I(b) ? b.length = 0 : n(b, function(a, c) {
        "$$hashKey" !== c && delete b[c]
      });
      e.push(a);
      f.push(b);
      return d(a, b)
    }
    return c(a)
  }

  function ia(a, b) {
    if (I(a)) {
      b = b || [];
      for (var d = 0, c = a.length; d < c; d++) b[d] = a[d]
    } else if (H(a))
      for (d in b = b || {}, a)
        if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    return b || a
  }

  function ma(a, b) {
    if (a === b) return !0;
    if (null === a || null === b) return !1;
    if (a !== a && b !== b) return !0;
    var d = typeof a,
      c;
    if (d == typeof b && "object" == d)
      if (I(a)) {
        if (!I(b)) return !1;
        if ((d = a.length) == b.length) {
          for (c =
            0; c < d; c++)
            if (!ma(a[c], b[c])) return !1;
          return !0
        }
      } else {
        if (da(a)) return da(b) ? ma(a.getTime(), b.getTime()) : !1;
        if (Ma(a)) return Ma(b) ? a.toString() == b.toString() : !1;
        if (Za(a) || Za(b) || Xa(a) || Xa(b) || I(b) || da(b) || Ma(b)) return !1;
        d = $();
        for (c in a)
          if ("$" !== c.charAt(0) && !z(a[c])) {
            if (!ma(a[c], b[c])) return !1;
            d[c] = !0
          }
        for (c in b)
          if (!(c in d) && "$" !== c.charAt(0) && y(b[c]) && !z(b[c])) return !1;
        return !0
      }
    return !1
  }

  function cb(a, b, d) {
    return a.concat(ra.call(b, d))
  }

  function tc(a, b) {
    var d = 2 < arguments.length ? ra.call(arguments, 2) : [];
    return !z(b) || b instanceof RegExp ? b : d.length ? function() {
      return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d)
    } : function() {
      return arguments.length ? b.apply(a, arguments) : b.call(a)
    }
  }

  function Xd(a, b) {
    var d = b;
    "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Xa(b) ? d = "$WINDOW" : b && X === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
    return d
  }

  function db(a, b) {
    if ("undefined" === typeof a) return u;
    Q(b) || (b = b ? 2 : null);
    return JSON.stringify(a, Xd, b)
  }

  function uc(a) {
    return E(a) ? JSON.parse(a) : a
  }

  function vc(a,
    b) {
    var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
    return isNaN(d) ? b : d
  }

  function Pb(a, b, d) {
    d = d ? -1 : 1;
    var c = vc(b, a.getTimezoneOffset());
    b = a;
    a = d * (c - a.getTimezoneOffset());
    b = new Date(b.getTime());
    b.setMinutes(b.getMinutes() + a);
    return b
  }

  function ua(a) {
    a = B(a).clone();
    try {
      a.empty()
    } catch (b) {}
    var d = B("<div>").append(a).html();
    try {
      return a[0].nodeType === Na ? F(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
        return "<" + F(b)
      })
    } catch (c) {
      return F(d)
    }
  }

  function wc(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {}
  }

  function xc(a) {
    var b = {};
    n((a || "").split("&"), function(a) {
      var c, e, f;
      a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = wc(e), y(e) && (f = y(f) ? wc(f) : !0, qa.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
    });
    return b
  }

  function Qb(a) {
    var b = [];
    n(a, function(a, c) {
      I(a) ? n(a, function(a) {
        b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)))
      }) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)))
    });
    return b.length ? b.join("&") : ""
  }

  function ob(a) {
    return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi,
      "=").replace(/%2B/gi, "+")
  }

  function ja(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
  }

  function Yd(a, b) {
    var d, c, e = Oa.length;
    for (c = 0; c < e; ++c)
      if (d = Oa[c] + b, E(d = a.getAttribute(d))) return d;
    return null
  }

  function Zd(a, b) {
    var d, c, e = {};
    n(Oa, function(b) {
      b += "app";
      !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
    });
    n(Oa, function(b) {
      b += "app";
      var e;
      !d && (e = a.querySelector("[" + b.replace(":",
        "\\:") + "]")) && (d = e, c = e.getAttribute(b))
    });
    d && (e.strictDi = null !== Yd(d, "strict-di"), b(d, c ? [c] : [], e))
  }

  function yc(a, b, d) {
    H(d) || (d = {});
    d = M({
      strictDi: !1
    }, d);
    var c = function() {
        a = B(a);
        if (a.injector()) {
          var c = a[0] === X ? "document" : ua(a);
          throw Aa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
        }
        b = b || [];
        b.unshift(["$provide", function(b) {
          b.value("$rootElement", a)
        }]);
        d.debugInfoEnabled && b.push(["$compileProvider", function(a) {
          a.debugInfoEnabled(!0)
        }]);
        b.unshift("ng");
        c = eb(b, d.strictDi);
        c.invoke(["$rootScope",
          "$rootElement", "$compile", "$injector",
          function(a, b, c, d) {
            a.$apply(function() {
              b.data("$injector", d);
              c(b)(a)
            })
          }
        ]);
        return c
      },
      e = /^NG_ENABLE_DEBUG_INFO!/,
      f = /^NG_DEFER_BOOTSTRAP!/;
    S && e.test(S.name) && (d.debugInfoEnabled = !0, S.name = S.name.replace(e, ""));
    if (S && !f.test(S.name)) return c();
    S.name = S.name.replace(f, "");
    fa.resumeBootstrap = function(a) {
      n(a, function(a) {
        b.push(a)
      });
      return c()
    };
    z(fa.resumeDeferredBootstrap) && fa.resumeDeferredBootstrap()
  }

  function $d() {
    S.name = "NG_ENABLE_DEBUG_INFO!" + S.name;
    S.location.reload()
  }

  function ae(a) {
    a = fa.element(a).injector();
    if (!a) throw Aa("test");
    return a.get("$$testability")
  }

  function zc(a, b) {
    b = b || "_";
    return a.replace(be, function(a, c) {
      return (c ? b : "") + a.toLowerCase()
    })
  }

  function ce() {
    var a;
    if (!Ac) {
      var b = pb();
      (oa = q(b) ? S.jQuery : b ? S[b] : u) && oa.fn.on ? (B = oa, M(oa.fn, {
        scope: Pa.scope,
        isolateScope: Pa.isolateScope,
        controller: Pa.controller,
        injector: Pa.injector,
        inheritedData: Pa.inheritedData
      }), a = oa.cleanData, oa.cleanData = function(b) {
        var c;
        if (Rb) Rb = !1;
        else
          for (var e = 0, f; null != (f = b[e]); e++)(c =
            oa._data(f, "events")) && c.$destroy && oa(f).triggerHandler("$destroy");
        a(b)
      }) : B = N;
      fa.element = B;
      Ac = !0
    }
  }

  function qb(a, b, d) {
    if (!a) throw Aa("areq", b || "?", d || "required");
    return a
  }

  function Qa(a, b, d) {
    d && I(a) && (a = a[a.length - 1]);
    qb(z(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
    return a
  }

  function Ra(a, b) {
    if ("hasOwnProperty" === a) throw Aa("badname", b);
  }

  function Bc(a, b, d) {
    if (!b) return a;
    b = b.split(".");
    for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);
    return !d &&
      z(a) ? tc(e, a) : a
  }

  function rb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)
      if (c || a[e] !== b) c || (c = B(ra.call(a, 0, e))), c.push(b);
    return c || a
  }

  function $() {
    return Object.create(null)
  }

  function de(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c())
    }
    var d = G("$injector"),
      c = G("ng");
    a = b(a, "angular", Object);
    a.$$minErr = a.$$minErr || G;
    return b(a, "module", function() {
      var a = {};
      return function(f, g, h) {
        if ("hasOwnProperty" === f) throw c("badname", "module");
        g && a.hasOwnProperty(f) && (a[f] = null);
        return b(a, f, function() {
          function a(b,
            d, e, f) {
            f || (f = c);
            return function() {
              f[e || "push"]([b, d, arguments]);
              return v
            }
          }

          function b(a, d) {
            return function(b, e) {
              e && z(e) && (e.$$moduleName = f);
              c.push([a, d, arguments]);
              return v
            }
          }
          if (!g) throw d("nomod", f);
          var c = [],
            e = [],
            t = [],
            A = a("$injector", "invoke", "push", e),
            v = {
              _invokeQueue: c,
              _configBlocks: e,
              _runBlocks: t,
              requires: g,
              name: f,
              provider: b("$provide", "provider"),
              factory: b("$provide", "factory"),
              service: b("$provide", "service"),
              value: a("$provide", "value"),
              constant: a("$provide", "constant", "unshift"),
              decorator: b("$provide",
                "decorator"),
              animation: b("$animateProvider", "register"),
              filter: b("$filterProvider", "register"),
              controller: b("$controllerProvider", "register"),
              directive: b("$compileProvider", "directive"),
              config: A,
              run: function(a) {
                t.push(a);
                return this
              }
            };
          h && A(h);
          return v
        })
      }
    })
  }

  function ee(a) {
    M(a, {
      bootstrap: yc,
      copy: bb,
      extend: M,
      merge: Ud,
      equals: ma,
      element: B,
      forEach: n,
      injector: eb,
      noop: x,
      bind: tc,
      toJson: db,
      fromJson: uc,
      identity: Ya,
      isUndefined: q,
      isDefined: y,
      isString: E,
      isFunction: z,
      isObject: H,
      isNumber: Q,
      isElement: Nb,
      isArray: I,
      version: fe,
      isDate: da,
      lowercase: F,
      uppercase: sb,
      callbacks: {
        counter: 0
      },
      getTestability: ae,
      $$minErr: G,
      $$csp: Ba,
      reloadWithDebugInfo: $d
    });
    Sb = de(S);
    Sb("ng", ["ngLocale"], ["$provide", function(a) {
      a.provider({
        $$sanitizeUri: ge
      });
      a.provider("$compile", Cc).directive({
        a: he,
        input: Dc,
        textarea: Dc,
        form: ie,
        script: je,
        select: ke,
        style: le,
        option: me,
        ngBind: ne,
        ngBindHtml: oe,
        ngBindTemplate: pe,
        ngClass: qe,
        ngClassEven: re,
        ngClassOdd: se,
        ngCloak: te,
        ngController: ue,
        ngForm: ve,
        ngHide: we,
        ngIf: xe,
        ngInclude: ye,
        ngInit: ze,
        ngNonBindable: Ae,
        ngPluralize: Be,
        ngRepeat: Ce,
        ngShow: De,
        ngStyle: Ee,
        ngSwitch: Fe,
        ngSwitchWhen: Ge,
        ngSwitchDefault: He,
        ngOptions: Ie,
        ngTransclude: Je,
        ngModel: Ke,
        ngList: Le,
        ngChange: Me,
        pattern: Ec,
        ngPattern: Ec,
        required: Fc,
        ngRequired: Fc,
        minlength: Gc,
        ngMinlength: Gc,
        maxlength: Hc,
        ngMaxlength: Hc,
        ngValue: Ne,
        ngModelOptions: Oe
      }).directive({
        ngInclude: Pe
      }).directive(tb).directive(Ic);
      a.provider({
        $anchorScroll: Qe,
        $animate: Re,
        $animateCss: Se,
        $$animateQueue: Te,
        $$AnimateRunner: Ue,
        $browser: Ve,
        $cacheFactory: We,
        $controller: Xe,
        $document: Ye,
        $exceptionHandler: Ze,
        $filter: Jc,
        $$forceReflow: $e,
        $interpolate: af,
        $interval: bf,
        $http: cf,
        $httpParamSerializer: df,
        $httpParamSerializerJQLike: ef,
        $httpBackend: ff,
        $xhrFactory: gf,
        $location: hf,
        $log: jf,
        $parse: kf,
        $rootScope: lf,
        $q: mf,
        $$q: nf,
        $sce: of ,
        $sceDelegate: pf,
        $sniffer: qf,
        $templateCache: rf,
        $templateRequest: sf,
        $$testability: tf,
        $timeout: uf,
        $window: vf,
        $$rAF: wf,
        $$jqLite: xf,
        $$HashMap: yf,
        $$cookieReader: zf
      })
    }])
  }

  function fb(a) {
    return a.replace(Af, function(a, d, c, e) {
      return e ? c.toUpperCase() : c
    }).replace(Bf, "Moz$1")
  }

  function Kc(a) {
    a = a.nodeType;
    return 1 === a || !a || 9 === a
  }

  function Lc(a, b) {
    var d, c, e = b.createDocumentFragment(),
      f = [];
    if (Tb.test(a)) {
      d = d || e.appendChild(b.createElement("div"));
      c = (Cf.exec(a) || ["", ""])[1].toLowerCase();
      c = ka[c] || ka._default;
      d.innerHTML = c[1] + a.replace(Df, "<$1></$2>") + c[2];
      for (c = c[0]; c--;) d = d.lastChild;
      f = cb(f, d.childNodes);
      d = e.firstChild;
      d.textContent = ""
    } else f.push(b.createTextNode(a));
    e.textContent = "";
    e.innerHTML = "";
    n(f, function(a) {
      e.appendChild(a)
    });
    return e
  }

  function N(a) {
    if (a instanceof N) return a;
    var b;
    E(a) && (a = U(a),
      b = !0);
    if (!(this instanceof N)) {
      if (b && "<" != a.charAt(0)) throw Ub("nosel");
      return new N(a)
    }
    if (b) {
      b = X;
      var d;
      a = (d = Ef.exec(a)) ? [b.createElement(d[1])] : (d = Lc(a, b)) ? d.childNodes : []
    }
    Mc(this, a)
  }

  function Vb(a) {
    return a.cloneNode(!0)
  }

  function ub(a, b) {
    b || vb(a);
    if (a.querySelectorAll)
      for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) vb(d[c])
  }

  function Nc(a, b, d, c) {
    if (y(c)) throw Ub("offargs");
    var e = (c = wb(a)) && c.events,
      f = c && c.handle;
    if (f)
      if (b) {
        var g = function(b) {
          var c = e[b];
          y(d) && ab(c || [], d);
          y(d) && c && 0 < c.length ||
            (a.removeEventListener(b, f, !1), delete e[b])
        };
        n(b.split(" "), function(a) {
          g(a);
          xb[a] && g(xb[a])
        })
      } else
        for (b in e) "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
  }

  function vb(a, b) {
    var d = a.ng339,
      c = d && gb[d];
    c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Nc(a)), delete gb[d], a.ng339 = u))
  }

  function wb(a, b) {
    var d = a.ng339,
      d = d && gb[d];
    b && !d && (a.ng339 = d = ++Ff, d = gb[d] = {
      events: {},
      data: {},
      handle: u
    });
    return d
  }

  function Wb(a, b, d) {
    if (Kc(a)) {
      var c = y(d),
        e = !c && b && !H(b),
        f = !b;
      a = (a = wb(a, !e)) && a.data;
      if (c) a[b] = d;
      else {
        if (f) return a;
        if (e) return a && a[b];
        M(a, b)
      }
    }
  }

  function yb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
  }

  function zb(a, b) {
    b && a.setAttribute && n(b.split(" "), function(b) {
      a.setAttribute("class", U((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(b) + " ", " ")))
    })
  }

  function Ab(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      n(b.split(" "),
        function(a) {
          a = U(a); - 1 === d.indexOf(" " + a + " ") && (d += a + " ")
        });
      a.setAttribute("class", U(d))
    }
  }

  function Mc(a, b) {
    if (b)
      if (b.nodeType) a[a.length++] = b;
      else {
        var d = b.length;
        if ("number" === typeof d && b.window !== b) {
          if (d)
            for (var c = 0; c < d; c++) a[a.length++] = b[c]
        } else a[a.length++] = b
      }
  }

  function Oc(a, b) {
    return Bb(a, "$" + (b || "ngController") + "Controller")
  }

  function Bb(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);
    for (b = I(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++)
        if (y(d = B.data(a, b[c]))) return d;
      a = a.parentNode || 11 === a.nodeType &&
        a.host
    }
  }

  function Pc(a) {
    for (ub(a, !0); a.firstChild;) a.removeChild(a.firstChild)
  }

  function Xb(a, b) {
    b || ub(a);
    var d = a.parentNode;
    d && d.removeChild(a)
  }

  function Gf(a, b) {
    b = b || S;
    if ("complete" === b.document.readyState) b.setTimeout(a);
    else B(b).on("load", a)
  }

  function Qc(a, b) {
    var d = Cb[b.toLowerCase()];
    return d && Rc[ta(a)] && d
  }

  function Hf(a, b) {
    var d = function(c, d) {
      c.isDefaultPrevented = function() {
        return c.defaultPrevented
      };
      var f = b[d || c.type],
        g = f ? f.length : 0;
      if (g) {
        if (q(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function() {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c)
          }
        }
        c.isImmediatePropagationStopped = function() {
          return !0 === c.immediatePropagationStopped
        };
        var k = f.specialHandlerWrapper || If;
        1 < g && (f = ia(f));
        for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l])
      }
    };
    d.elem = a;
    return d
  }

  function If(a, b, d) {
    d.call(a, b)
  }

  function Jf(a, b, d) {
    var c = b.relatedTarget;
    c && (c === a || Kf.call(a, c)) || d.call(a, b)
  }

  function xf() {
    this.$get = function() {
      return M(N, {
        hasClass: function(a, b) {
          a.attr && (a = a[0]);
          return yb(a, b)
        },
        addClass: function(a, b) {
          a.attr && (a = a[0]);
          return Ab(a, b)
        },
        removeClass: function(a, b) {
          a.attr && (a = a[0]);
          return zb(a, b)
        }
      })
    }
  }

  function Ca(a, b) {
    var d = a && a.$$hashKey;
    if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
    d = typeof a;
    return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Td)() : d + ":" + a
  }

  function Sa(a, b) {
    if (b) {
      var d = 0;
      this.nextUid = function() {
        return ++d
      }
    }
    n(a, this.put, this)
  }

  function Lf(a) {
    return (a = a.toString().replace(Sc, "").match(Tc)) ?
      "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
  }

  function eb(a, b) {
    function d(a) {
      return function(b, c) {
        if (H(b)) n(b, pc(a));
        else return a(b, c)
      }
    }

    function c(a, b) {
      Ra(a, "service");
      if (z(b) || I(b)) b = t.instantiate(b);
      if (!b.$get) throw Da("pget", a);
      return r[a + "Provider"] = b
    }

    function e(a, b) {
      return function() {
        var c = v.invoke(b, this);
        if (q(c)) throw Da("undef", a);
        return c
      }
    }

    function f(a, b, d) {
      return c(a, {
        $get: !1 !== d ? e(a, b) : b
      })
    }

    function g(a) {
      qb(q(a) || I(a), "modulesToLoad", "not an array");
      var b = [],
        c;
      n(a, function(a) {
        function d(a) {
          var b,
            c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b],
              f = t.get(e[0]);
            f[e[1]].apply(f, e[2])
          }
        }
        if (!m.get(a)) {
          m.put(a, !0);
          try {
            E(a) ? (c = Sb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(t.invoke(a)) : I(a) ? b.push(t.invoke(a)) : Qa(a, "module")
          } catch (e) {
            throw I(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Da("modulerr", a, e.stack || e.message || e);
          }
        }
      });
      return b
    }

    function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] ===
            k) throw Da("cdep", b + " <- " + l.join(" <- "));
          return a[b]
        }
        try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e)
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift()
        }
      }

      function e(a, c, f, g) {
        "string" === typeof f && (g = f, f = null);
        var h = [],
          k = eb.$$annotate(a, b, g),
          l, m, t;
        m = 0;
        for (l = k.length; m < l; m++) {
          t = k[m];
          if ("string" !== typeof t) throw Da("itkn", t);
          h.push(f && f.hasOwnProperty(t) ? f[t] : d(t, g))
        }
        I(a) && (a = a[l]);
        return a.apply(c, h)
      }
      return {
        invoke: e,
        instantiate: function(a, b, c) {
          var d = Object.create((I(a) ? a[a.length - 1] : a).prototype ||
            null);
          a = e(a, d, b, c);
          return H(a) || z(a) ? a : d
        },
        get: d,
        annotate: eb.$$annotate,
        has: function(b) {
          return r.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
        }
      }
    }
    b = !0 === b;
    var k = {},
      l = [],
      m = new Sa([], !0),
      r = {
        $provide: {
          provider: d(c),
          factory: d(f),
          service: d(function(a, b) {
            return f(a, ["$injector", function(a) {
              return a.instantiate(b)
            }])
          }),
          value: d(function(a, b) {
            return f(a, na(b), !1)
          }),
          constant: d(function(a, b) {
            Ra(a, "constant");
            r[a] = b;
            A[a] = b
          }),
          decorator: function(a, b) {
            var c = t.get(a + "Provider"),
              d = c.$get;
            c.$get = function() {
              var a =
                v.invoke(d, c);
              return v.invoke(b, null, {
                $delegate: a
              })
            }
          }
        }
      },
      t = r.$injector = h(r, function(a, b) {
        fa.isString(b) && l.push(b);
        throw Da("unpr", l.join(" <- "));
      }),
      A = {},
      v = A.$injector = h(A, function(a, b) {
        var c = t.get(a + "Provider", b);
        return v.invoke(c.$get, c, u, a)
      });
    n(g(a), function(a) {
      a && v.invoke(a)
    });
    return v
  }

  function Qe() {
    var a = !0;
    this.disableAutoScrolling = function() {
      a = !1
    };
    this.$get = ["$window", "$location", "$rootScope", function(b, d, c) {
      function e(a) {
        var b = null;
        Array.prototype.some.call(a, function(a) {
          if ("a" === ta(a)) return b =
            a, !0
        });
        return b
      }

      function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;
          c = g.yOffset;
          z(c) ? c = c() : Nb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);
          c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
        } else b.scrollTo(0, 0)
      }

      function g(a) {
        a = E(a) ? a : d.hash();
        var b;
        a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
      }
      var h = b.document;
      a && c.$watch(function() {
        return d.hash()
      }, function(a, b) {
        a === b && "" === a || Gf(function() {
          c.$evalAsync(g)
        })
      });
      return g
    }]
  }

  function hb(a, b) {
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    I(a) && (a = a.join(" "));
    I(b) && (b = b.join(" "));
    return a + " " + b
  }

  function Mf(a) {
    E(a) && (a = a.split(" "));
    var b = $();
    n(a, function(a) {
      a.length && (b[a] = !0)
    });
    return b
  }

  function Ea(a) {
    return H(a) ? a : {}
  }

  function Nf(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, ra.call(arguments, 1))
      } finally {
        if (v--, 0 === v)
          for (; T.length;) try {
            T.pop()()
          } catch (b) {
            d.error(b)
          }
      }
    }

    function f() {
      L = null;
      g();
      h()
    }

    function g() {
      a: {
        try {
          p = m.state;
          break a
        } catch (a) {}
        p = void 0
      }
      p = q(p) ?
      null : p;ma(p, J) && (p = J);J = p
    }

    function h() {
      if (w !== k.url() || C !== p) w = k.url(), C = p, n(aa, function(a) {
        a(k.url(), p)
      })
    }
    var k = this,
      l = a.location,
      m = a.history,
      r = a.setTimeout,
      t = a.clearTimeout,
      A = {};
    k.isMock = !1;
    var v = 0,
      T = [];
    k.$$completeOutstandingRequest = e;
    k.$$incOutstandingRequestCount = function() {
      v++
    };
    k.notifyWhenNoOutstandingRequests = function(a) {
      0 === v ? a() : T.push(a)
    };
    var p, C, w = l.href,
      ga = b.find("base"),
      L = null;
    g();
    C = p;
    k.url = function(b, d, e) {
      q(e) && (e = null);
      l !== a.location && (l = a.location);
      m !== a.history && (m = a.history);
      if (b) {
        var f =
          C === e;
        if (w === b && (!c.history || f)) return k;
        var h = w && Fa(w) === Fa(b);
        w = b;
        C = e;
        if (!c.history || h && f) {
          if (!h || L) L = b;
          d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;
          l.href !== b && (L = b)
        } else m[d ? "replaceState" : "pushState"](e, "", b), g(), C = p;
        return k
      }
      return L || l.href.replace(/%27/g, "'")
    };
    k.state = function() {
      return p
    };
    var aa = [],
      D = !1,
      J = null;
    k.onUrlChange = function(b) {
      if (!D) {
        if (c.history) B(a).on("popstate", f);
        B(a).on("hashchange", f);
        D = !0
      }
      aa.push(b);
      return b
    };
    k.$$applicationDestroyed = function() {
      B(a).off("hashchange popstate",
        f)
    };
    k.$$checkUrlChange = h;
    k.baseHref = function() {
      var a = ga.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    };
    k.defer = function(a, b) {
      var c;
      v++;
      c = r(function() {
        delete A[c];
        e(a)
      }, b || 0);
      A[c] = !0;
      return c
    };
    k.defer.cancel = function(a) {
      return A[a] ? (delete A[a], t(a), e(x), !0) : !1
    }
  }

  function Ve() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, d, c) {
      return new Nf(a, c, b, d)
    }]
  }

  function We() {
    this.$get = function() {
      function a(a, c) {
        function e(a) {
          a != r && (t ? t == a && (t = a.n) : t = a, f(a.n, a.p), f(a, r), r = a,
            r.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }
        if (a in b) throw G("$cacheFactory")("iid", a);
        var g = 0,
          h = M({}, c, {
            id: a
          }),
          k = $(),
          l = c && c.capacity || Number.MAX_VALUE,
          m = $(),
          r = null,
          t = null;
        return b[a] = {
          put: function(a, b) {
            if (!q(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = {
                  key: a
                });
                e(c)
              }
              a in k || g++;
              k[a] = b;
              g > l && this.remove(t.key);
              return b
            }
          },
          get: function(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;
              e(b)
            }
            return k[a]
          },
          remove: function(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;
              b == r && (r = b.p);
              b == t &&
                (t = b.n);
              f(b.n, b.p);
              delete m[a]
            }
            a in k && (delete k[a], g--)
          },
          removeAll: function() {
            k = $();
            g = 0;
            m = $();
            r = t = null
          },
          destroy: function() {
            m = h = k = null;
            delete b[a]
          },
          info: function() {
            return M({}, h, {
              size: g
            })
          }
        }
      }
      var b = {};
      a.info = function() {
        var a = {};
        n(b, function(b, e) {
          a[e] = b.info()
        });
        return a
      };
      a.get = function(a) {
        return b[a]
      };
      return a
    }
  }

  function rf() {
    this.$get = ["$cacheFactory", function(a) {
      return a("templates")
    }]
  }

  function Cc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
        e = {};
      n(a, function(a, f) {
        var g = a.match(d);
        if (!g) throw ha("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
        e[f] = {
          mode: g[1][0],
          collection: "*" === g[2],
          optional: "?" === g[3],
          attrName: g[4] || f
        }
      });
      return e
    }

    function c(a) {
      var b = a.charAt(0);
      if (!b || b !== F(b)) throw ha("baddir", a);
      if (a !== a.trim()) throw ha("baddir", a);
    }
    var e = {},
      f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
      g = /(([\w\-]+)(?:\:([^;]+))?;?)/,
      h = Wd("ngSrc,ngSrcset,src,srcset"),
      k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
      l = /^(on[a-z]+|formaction)$/;
    this.directive = function t(b, f) {
      Ra(b, "directive");
      E(b) ? (c(b), qb(f, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function(a, c) {
        var f = [];
        n(e[b], function(e, g) {
          try {
            var h = a.invoke(e);
            z(h) ? h = {
              compile: na(h)
            } : !h.compile && h.link && (h.compile = na(h.link));
            h.priority = h.priority || 0;
            h.index = g;
            h.name = h.name || b;
            h.require = h.require || h.controller && h.name;
            h.restrict = h.restrict || "EA";
            var k = h,
              l = h,
              m = h.name,
              t = {
                isolateScope: null,
                bindToController: null
              };
            H(l.scope) && (!0 === l.bindToController ? (t.bindToController = d(l.scope,
              m, !0), t.isolateScope = {}) : t.isolateScope = d(l.scope, m, !1));
            H(l.bindToController) && (t.bindToController = d(l.bindToController, m, !0));
            if (H(t.bindToController)) {
              var v = l.controller,
                R = l.controllerAs;
              if (!v) throw ha("noctrl", m);
              var V;
              a: if (R && E(R)) V = R;
                else {
                  if (E(v)) {
                    var n = Uc.exec(v);
                    if (n) {
                      V = n[3];
                      break a
                    }
                  }
                  V = void 0
                }
              if (!V) throw ha("noident", m);
            }
            var s = k.$$bindings = t;
            H(s.isolateScope) && (h.$$isolateBindings = s.isolateScope);
            h.$$moduleName = e.$$moduleName;
            f.push(h)
          } catch (u) {
            c(u)
          }
        });
        return f
      }])), e[b].push(f)) : n(b, pc(t));
      return this
    };
    this.aHrefSanitizationWhitelist = function(a) {
      return y(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
    };
    this.imgSrcSanitizationWhitelist = function(a) {
      return y(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
    };
    var m = !0;
    this.debugInfoEnabled = function(a) {
      return y(a) ? (m = a, this) : m
    };
    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a,
      b, c, d, p, C, w, ga, L, aa, D) {
      function J(a, b) {
        try {
          a.addClass(b)
        } catch (c) {}
      }

      function K(a, b, c, d, e) {
        a instanceof B || (a = B(a));
        n(a, function(b, c) {
          b.nodeType == Na && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0])
        });
        var f = O(a, b, a, c, d, e);
        K.$$addScopeClass(a);
        var g = null;
        return function(b, c, d) {
          qb(b, "scope");
          e && e.needsNewScope && (b = b.$parent.$new());
          d = d || {};
          var h = d.parentBoundTranscludeFn,
            k = d.transcludeControllers;
          d = d.futureParentElement;
          h && h.$$boundTransclude && (h = h.$$boundTransclude);
          g || (g = (d =
            d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
          d = "html" !== g ? B(Yb(g, B("<div>").append(a).html())) : c ? Pa.clone.call(a) : a;
          if (k)
            for (var l in k) d.data("$" + l + "Controller", k[l].instance);
          K.$$addScopeInfo(d, b);
          c && c(d, b);
          f && f(b, d, d, h);
          return d
        }
      }

      function O(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, t, w, D;
          if (p)
            for (D = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], D[f] = c[f];
          else D = c;
          m = 0;
          for (t = h.length; m < t;) k = D[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), K.$$addScopeInfo(B(k),
            l)) : l = a, w = c.transcludeOnThisElement ? R(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? R(a, b) : null, c(f, l, k, d, w)) : f && f(a, k.childNodes, u, e)
        }
        for (var h = [], k, l, m, t, p, w = 0; w < a.length; w++) {
          k = new fa;
          l = V(a[w], [], k, 0 === w ? d : u, e);
          (f = l.length ? Z(l, a[w], k, b, c, null, [], [], f) : null) && f.scope && K.$$addScopeClass(k.$$element);
          k = f && f.terminal || !(m = a[w].childNodes) || !m.length ? null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
          if (f || k) h.push(w, f, k), t = !0, p = p || f;
          f = null
        }
        return t ? g : null
      }

      function R(a,
        b, c) {
        return function(d, e, f, g, h) {
          d || (d = a.$new(!1, h), d.$$transcluded = !0);
          return b(d, e, {
            parentBoundTranscludeFn: c,
            transcludeControllers: f,
            futureParentElement: g
          })
        }
      }

      function V(a, b, c, d, e) {
        var h = c.$attr,
          k;
        switch (a.nodeType) {
          case 1:
            P(b, va(ta(a)), "E", d, e);
            for (var l, m, t, p = a.attributes, w = 0, D = p && p.length; w < D; w++) {
              var K = !1,
                A = !1;
              l = p[w];
              k = l.name;
              m = U(l.value);
              l = va(k);
              if (t = ka.test(l)) k = k.replace(Vc, "").substr(8).replace(/_(.)/g, function(a, b) {
                return b.toUpperCase()
              });
              (l = l.match(la)) && G(l[1]) && (K = k, A = k.substr(0, k.length -
                5) + "end", k = k.substr(0, k.length - 6));
              l = va(k.toLowerCase());
              h[l] = k;
              if (t || !c.hasOwnProperty(l)) c[l] = m, Qc(a, l) && (c[l] = !0);
              W(a, b, m, l, t);
              P(b, l, "A", d, e, K, A)
            }
            a = a.className;
            H(a) && (a = a.animVal);
            if (E(a) && "" !== a)
              for (; k = g.exec(a);) l = va(k[2]), P(b, l, "C", d, e) && (c[l] = U(k[3])), a = a.substr(k.index + k[0].length);
            break;
          case Na:
            if (11 === Ha)
              for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            N(b, a.nodeValue);
            break;
          case 8:
            try {
              if (k = f.exec(a.nodeValue)) l =
                va(k[1]), P(b, l, "M", d, e) && (c[l] = U(k[2]))
            } catch (R) {}
        }
        b.sort(Ia);
        return b
      }

      function Ta(a, b, c) {
        var d = [],
          e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ha("uterdir", b, c);
            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling
          } while (0 < e)
        } else d.push(a);
        return B(d)
      }

      function s(a, b, c) {
        return function(d, e, f, g, h) {
          e = Ta(e[0], b, c);
          return a(d, e, f, g, h)
        }
      }

      function Z(a, b, d, e, f, g, h, l, m) {
        function t(a, b, c, d) {
          if (a) {
            c && (a = s(a, c, d));
            a.require = q.require;
            a.directiveName = x;
            if (O ===
              q || q.$$isolateScope) a = ca(a, {
              isolateScope: !0
            });
            h.push(a)
          }
          if (b) {
            c && (b = s(b, c, d));
            b.require = q.require;
            b.directiveName = x;
            if (O === q || q.$$isolateScope) b = ca(b, {
              isolateScope: !0
            });
            l.push(b)
          }
        }

        function p(a, b, c, d) {
          var e;
          if (E(b)) {
            var f = b.match(k);
            b = b.substring(f[0].length);
            var g = f[1] || f[3],
              f = "?" === f[2];
            "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
            e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));
            if (!e && !f) throw ha("ctreq", b, a);
          } else if (I(b))
            for (e = [], g = 0, f = b.length; g < f; g++) e[g] = p(a, b[g], c, d);
          return e ||
            null
        }

        function w(a, b, c, d, e, f) {
          var g = $(),
            h;
          for (h in d) {
            var k = d[h],
              l = {
                $scope: k === O || k.$$isolateScope ? e : f,
                $element: a,
                $attrs: b,
                $transclude: c
              },
              m = k.controller;
            "@" == m && (m = b[k.name]);
            l = C(m, l, !0, k.controllerAs);
            g[k.name] = l;
            aa || a.data("$" + k.name + "Controller", l.instance)
          }
          return g
        }

        function D(a, c, e, f, g) {
          function k(a, b, c) {
            var d;
            Za(a) || (c = b, b = a, a = u);
            aa && (d = v);
            c || (c = aa ? V.parent() : V);
            return g(a, b, d, c, Ta)
          }
          var m, t, A, v, C, V, Ga;
          b === e ? (f = d, V = d.$$element) : (V = B(e), f = new fa(V, d));
          A = c;
          O ? t = c.$new(!0) : R && (A = c.$parent);
          g && (C = k,
            C.$$boundTransclude = g);
          T && (v = w(V, f, C, T, t, c));
          O && (K.$$addScopeInfo(V, t, !0, !(J && (J === O || J === O.$$originalDirective))), K.$$addScopeClass(V, !0), t.$$isolateBindings = O.$$isolateBindings, (Ga = ba(c, f, t, t.$$isolateBindings, O)) && t.$on("$destroy", Ga));
          for (var n in v) {
            Ga = T[n];
            var ga = v[n],
              L = Ga.$$bindings.bindToController;
            ga.identifier && L && (m = ba(A, f, ga.instance, L, Ga));
            var q = ga();
            q !== ga.instance && (ga.instance = q, V.data("$" + Ga.name + "Controller", q), m && m(), m = ba(A, f, ga.instance, L, Ga))
          }
          F = 0;
          for (M = h.length; F < M; F++) m = h[F],
            ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C);
          var Ta = c;
          O && (O.template || null === O.templateUrl) && (Ta = t);
          a && a(Ta, e.childNodes, u, g);
          for (F = l.length - 1; 0 <= F; F--) m = l[F], ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C)
        }
        m = m || {};
        for (var A = -Number.MAX_VALUE, R = m.newScopeDirective, T = m.controllerDirectives, O = m.newIsolateScopeDirective, J = m.templateDirective, n = m.nonTlbTranscludeDirective, ga = !1, L = !1, aa = m.hasElementTranscludeDirective, Z = d.$$element = B(b), q, x, P, Ia =
            e, G, F = 0, M = a.length; F < M; F++) {
          q = a[F];
          var N = q.$$start,
            Q = q.$$end;
          N && (Z = Ta(b, N, Q));
          P = u;
          if (A > q.priority) break;
          if (P = q.scope) q.templateUrl || (H(P) ? (Ua("new/isolated scope", O || R, q, Z), O = q) : Ua("new/isolated scope", O, q, Z)), R = R || q;
          x = q.name;
          !q.templateUrl && q.controller && (P = q.controller, T = T || $(), Ua("'" + x + "' controller", T[x], q, Z), T[x] = q);
          if (P = q.transclude) ga = !0, q.$$tlb || (Ua("transclusion", n, q, Z), n = q), "element" == P ? (aa = !0, A = q.priority, P = Z, Z = d.$$element = B(X.createComment(" " + x + ": " + d[x] + " ")), b = Z[0], Y(f, ra.call(P, 0),
            b), Ia = K(P, e, A, g && g.name, {
            nonTlbTranscludeDirective: n
          })) : (P = B(Vb(b)).contents(), Z.empty(), Ia = K(P, e, u, u, {
            needsNewScope: q.$$isolateScope || q.$$newScope
          }));
          if (q.template)
            if (L = !0, Ua("template", J, q, Z), J = q, P = z(q.template) ? q.template(Z, d) : q.template, P = ja(P), q.replace) {
              g = q;
              P = Tb.test(P) ? Xc(Yb(q.templateNamespace, U(P))) : [];
              b = P[0];
              if (1 != P.length || 1 !== b.nodeType) throw ha("tplrt", x, "");
              Y(f, Z, b);
              P = {
                $attr: {}
              };
              var Wc = V(b, [], P),
                W = a.splice(F + 1, a.length - (F + 1));
              (O || R) && y(Wc, O, R);
              a = a.concat(Wc).concat(W);
              S(d, P);
              M = a.length
            } else Z.html(P);
          if (q.templateUrl) L = !0, Ua("template", J, q, Z), J = q, q.replace && (g = q), D = Of(a.splice(F, a.length - F), Z, d, f, ga && Ia, h, l, {
            controllerDirectives: T,
            newScopeDirective: R !== q && R,
            newIsolateScopeDirective: O,
            templateDirective: J,
            nonTlbTranscludeDirective: n
          }), M = a.length;
          else if (q.compile) try {
            G = q.compile(Z, d, Ia), z(G) ? t(null, G, N, Q) : G && t(G.pre, G.post, N, Q)
          } catch (da) {
            c(da, ua(Z))
          }
          q.terminal && (D.terminal = !0, A = Math.max(A, q.priority))
        }
        D.scope = R && !0 === R.scope;
        D.transcludeOnThisElement = ga;
        D.templateOnThisElement = L;
        D.transclude = Ia;
        m.hasElementTranscludeDirective = aa;
        return D
      }

      function y(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) a[d] = Ob(a[d], {
          $$isolateScope: b,
          $$newScope: c
        })
      }

      function P(b, d, f, g, h, k, l) {
        if (d === h) return null;
        h = null;
        if (e.hasOwnProperty(d)) {
          var m;
          d = a.get(d + "Directive");
          for (var p = 0, w = d.length; p < w; p++) try {
            m = d[p], (q(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Ob(m, {
              $$start: k,
              $$end: l
            })), b.push(m), h = m)
          } catch (D) {
            c(D)
          }
        }
        return h
      }

      function G(b) {
        if (e.hasOwnProperty(b))
          for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)
            if (b =
              c[d], b.multiElement) return !0;
        return !1
      }

      function S(a, b) {
        var c = b.$attr,
          d = a.$attr,
          e = a.$$element;
        n(a, function(d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
        });
        n(b, function(b, f) {
          "class" == f ? (J(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
        })
      }

      function Of(a, b, c, e, f, g, h, k) {
        var l = [],
          m, t, p = b[0],
          w = a.shift(),
          D = Ob(w, {
            templateUrl: null,
            transclude: null,
            replace: null,
            $$originalDirective: w
          }),
          A = z(w.templateUrl) ? w.templateUrl(b, c) : w.templateUrl,
          K = w.templateNamespace;
        b.empty();
        d(A).then(function(d) {
          var T, v;
          d = ja(d);
          if (w.replace) {
            d = Tb.test(d) ? Xc(Yb(K, U(d))) : [];
            T = d[0];
            if (1 != d.length || 1 !== T.nodeType) throw ha("tplrt", w.name, A);
            d = {
              $attr: {}
            };
            Y(e, b, T);
            var C = V(T, [], d);
            H(w.scope) && y(C, !0);
            a = C.concat(a);
            S(c, d)
          } else T = p, b.html(d);
          a.unshift(D);
          m = Z(a, T, c, f, b, w, g, h, k);
          n(e, function(a, c) {
            a == T && (e[c] = b[0])
          });
          for (t = O(b[0].childNodes, f); l.length;) {
            d = l.shift();
            v = l.shift();
            var ga = l.shift(),
              L = l.shift(),
              C = b[0];
            if (!d.$$destroyed) {
              if (v !== p) {
                var q = v.className;
                k.hasElementTranscludeDirective && w.replace || (C = Vb(T));
                Y(ga, B(v), C);
                J(B(C), q)
              }
              v = m.transcludeOnThisElement ? R(d, m.transclude, L) : L;
              m(t, d, C, e, v)
            }
          }
          l = null
        });
        return function(a, b, c, d, e) {
          a = e;
          b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = R(b, m.transclude, e)), m(t, b, c, d, a)))
        }
      }

      function Ia(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }

      function Ua(a,
        b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : ""
        }
        if (b) throw ha("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
      }

      function N(a, c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0,
          compile: function(a) {
            a = a.parent();
            var b = !!a.length;
            b && K.$$addBindingClass(a);
            return function(a, c) {
              var e = c.parent();
              b || K.$$addBindingClass(e);
              K.$$addBindingInfo(e, d.expressions);
              a.$watch(d, function(a) {
                c[0].nodeValue = a
              })
            }
          }
        })
      }

      function Yb(a, b) {
        a = F(a || "html");
        switch (a) {
          case "svg":
          case "math":
            var c = X.createElement("div");
            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
            return c.childNodes[0].childNodes;
          default:
            return b
        }
      }

      function Q(a, b) {
        if ("srcdoc" == b) return L.HTML;
        var c = ta(a);
        if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return L.RESOURCE_URL
      }

      function W(a, c, d, e, f) {
        var g = Q(a, e);
        f = h[e] || f;
        var k = b(d, !0, g, f);
        if (k) {
          if ("multiple" === e && "select" === ta(a)) throw ha("selmulti", ua(a));
          c.push({
            priority: 100,
            compile: function() {
              return {
                pre: function(a, c, h) {
                  c = h.$$observers || (h.$$observers = $());
                  if (l.test(e)) throw ha("nodomevents");
                  var m = h[e];
                  m !== d && (k = m && b(m, !0, g, f), d = m);
                  k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                    "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                  }))
                }
              }
            }
          })
        }
      }

      function Y(a, b, c) {
        var d = b[0],
          e = b.length,
          f = d.parentNode,
          g, h;
        if (a)
          for (g = 0, h = a.length; g < h; g++)
            if (a[g] == d) {
              a[g++] = c;
              h = g + e - 1;
              for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
              a.length -= e - 1;
              a.context === d && (a.context = c);
              break
            }
        f && f.replaceChild(c, d);
        a = X.createDocumentFragment();
        a.appendChild(d);
        B.hasData(d) && (B.data(c, B.data(d)), oa ? (Rb = !0, oa.cleanData([d])) : delete B.cache[d[B.expando]]);
        d = 1;
        for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
        b[0] = c;
        b.length = 1
      }

      function ca(a, b) {
        return M(function() {
          return a.apply(null, arguments)
        }, a, b)
      }

      function ea(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g)
        } catch (h) {
          c(h, ua(d))
        }
      }

      function ba(a, c, d, e, f) {
        var g = [];
        n(e, function(e, h) {
          var k = e.attrName,
            l = e.optional,
            m, t, w, D;
          switch (e.mode) {
            case "@":
              l || qa.call(c, k) || (d[h] = c[k] = void 0);
              c.$observe(k, function(a) {
                E(a) &&
                  (d[h] = a)
              });
              c.$$observers[k].$$scope = a;
              E(c[k]) && (d[h] = b(c[k])(a));
              break;
            case "=":
              if (!qa.call(c, k)) {
                if (l) break;
                c[k] = void 0
              }
              if (l && !c[k]) break;
              t = p(c[k]);
              D = t.literal ? ma : function(a, b) {
                return a === b || a !== a && b !== b
              };
              w = t.assign || function() {
                m = d[h] = t(a);
                throw ha("nonassign", c[k], f.name);
              };
              m = d[h] = t(a);
              l = function(b) {
                D(b, d[h]) || (D(b, m) ? w(a, b = d[h]) : d[h] = b);
                return m = b
              };
              l.$stateful = !0;
              l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, t.literal);
              g.push(l);
              break;
            case "&":
              t = c.hasOwnProperty(k) ? p(c[k]) :
                x;
              if (t === x && l) break;
              d[h] = function(b) {
                return t(a, b)
              }
          }
        });
        return g.length && function() {
          for (var a = 0, b = g.length; a < b; ++a) g[a]()
        }
      }
      var fa = function(a, b) {
        if (b) {
          var c = Object.keys(b),
            d, e, f;
          d = 0;
          for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
        } else this.$attr = {};
        this.$$element = a
      };
      fa.prototype = {
        $normalize: va,
        $addClass: function(a) {
          a && 0 < a.length && aa.addClass(this.$$element, a)
        },
        $removeClass: function(a) {
          a && 0 < a.length && aa.removeClass(this.$$element, a)
        },
        $updateClass: function(a, b) {
          var c = Yc(a, b);
          c && c.length && aa.addClass(this.$$element,
            c);
          (c = Yc(b, a)) && c.length && aa.removeClass(this.$$element, c)
        },
        $set: function(a, b, d, e) {
          var f = Qc(this.$$element[0], a),
            g = Zc[a],
            h = a;
          f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
          this[a] = b;
          e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));
          f = ta(this.$$element);
          if ("a" === f && "href" === a || "img" === f && "src" === a) this[a] = b = D(b, "src" === a);
          else if ("img" === f && "srcset" === a) {
            for (var f = "", g = U(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l <
              k; l++) var m = 2 * l,
              f = f + D(U(g[m]), !0),
              f = f + (" " + U(g[m + 1]));
            g = U(g[2 * l]).split(/\s/);
            f += D(U(g[0]), !0);
            2 === g.length && (f += " " + U(g[1]));
            this[a] = b = f
          }!1 !== d && (null === b || q(b) ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
          (a = this.$$observers) && n(a[h], function(a) {
            try {
              a(b)
            } catch (d) {
              c(d)
            }
          })
        },
        $observe: function(a, b) {
          var c = this,
            d = c.$$observers || (c.$$observers = $()),
            e = d[a] || (d[a] = []);
          e.push(b);
          w.$evalAsync(function() {
            e.$$inter || !c.hasOwnProperty(a) || q(c[a]) || b(c[a])
          });
          return function() {
            ab(e, b)
          }
        }
      };
      var da = b.startSymbol(),
        ia = b.endSymbol(),
        ja = "{{" == da || "}}" == ia ? Ya : function(a) {
          return a.replace(/\{\{/g, da).replace(/}}/g, ia)
        },
        ka = /^ngAttr[A-Z]/,
        la = /^(.+)Start$/;
      K.$$addBindingInfo = m ? function(a, b) {
        var c = a.data("$binding") || [];
        I(b) ? c = c.concat(b) : c.push(b);
        a.data("$binding", c)
      } : x;
      K.$$addBindingClass = m ? function(a) {
        J(a, "ng-binding")
      } : x;
      K.$$addScopeInfo = m ? function(a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
      } : x;
      K.$$addScopeClass = m ? function(a, b) {
        J(a, b ? "ng-isolate-scope" : "ng-scope")
      } : x;
      return K
    }]
  }

  function va(a) {
    return fb(a.replace(Vc,
      ""))
  }

  function Yc(a, b) {
    var d = "",
      c = a.split(/\s+/),
      e = b.split(/\s+/),
      f = 0;
    a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++)
        if (g == e[h]) continue a;
      d += (0 < d.length ? " " : "") + g
    }
    return d
  }

  function Xc(a) {
    a = B(a);
    var b = a.length;
    if (1 >= b) return a;
    for (; b--;) 8 === a[b].nodeType && Pf.call(a, b, 1);
    return a
  }

  function Xe() {
    var a = {},
      b = !1;
    this.register = function(b, c) {
      Ra(b, "controller");
      H(b) ? M(a, b) : a[b] = c
    };
    this.allowGlobals = function() {
      b = !0
    };
    this.$get = ["$injector", "$window", function(d, c) {
      function e(a, b, c, d) {
        if (!a || !H(a.$scope)) throw G("$controller")("noscp",
          d, b);
        a.$scope[b] = c
      }
      return function(f, g, h, k) {
        var l, m, r;
        h = !0 === h;
        k && E(k) && (r = k);
        if (E(f)) {
          k = f.match(Uc);
          if (!k) throw Qf("ctrlfmt", f);
          m = k[1];
          r = r || k[3];
          f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);
          Qa(f, m, !0)
        }
        if (h) return h = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), r && e(g, r, l, m || f.name), M(function() {
          var a = d.invoke(f, l, g, m);
          a !== l && (H(a) || z(a)) && (l = a, r && e(g, r, l, m || f.name));
          return l
        }, {
          instance: l,
          identifier: r
        });
        l = d.instantiate(f, g, m);
        r && e(g, r, l, m || f.name);
        return l
      }
    }]
  }

  function Ye() {
    this.$get = ["$window", function(a) {
      return B(a.document)
    }]
  }

  function Ze() {
    this.$get = ["$log", function(a) {
      return function(b, d) {
        a.error.apply(a, arguments)
      }
    }]
  }

  function Zb(a) {
    return H(a) ? da(a) ? a.toISOString() : db(a) : a
  }

  function df() {
    this.$get = function() {
      return function(a) {
        if (!a) return "";
        var b = [];
        oc(a, function(a, c) {
          null === a || q(a) || (I(a) ? n(a, function(a, d) {
            b.push(ja(c) + "=" + ja(Zb(a)))
          }) : b.push(ja(c) + "=" + ja(Zb(a))))
        });
        return b.join("&")
      }
    }
  }

  function ef() {
    this.$get = function() {
      return function(a) {
        function b(a, e, f) {
          null === a || q(a) ||
            (I(a) ? n(a, function(a, c) {
              b(a, e + "[" + (H(a) ? c : "") + "]")
            }) : H(a) && !da(a) ? oc(a, function(a, c) {
              b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
            }) : d.push(ja(e) + "=" + ja(Zb(a))))
        }
        if (!a) return "";
        var d = [];
        b(a, "", !0);
        return d.join("&")
      }
    }
  }

  function $b(a, b) {
    if (E(a)) {
      var d = a.replace(Rf, "").trim();
      if (d) {
        var c = b("Content-Type");
        (c = c && 0 === c.indexOf($c)) || (c = (c = d.match(Sf)) && Tf[c[0]].test(d));
        c && (a = uc(d))
      }
    }
    return a
  }

  function ad(a) {
    var b = $(),
      d;
    E(a) ? n(a.split("\n"), function(a) {
      d = a.indexOf(":");
      var e = F(U(a.substr(0, d)));
      a = U(a.substr(d + 1));
      e &&
        (b[e] = b[e] ? b[e] + ", " + a : a)
    }) : H(a) && n(a, function(a, d) {
      var f = F(d),
        g = U(a);
      f && (b[f] = b[f] ? b[f] + ", " + g : g)
    });
    return b
  }

  function bd(a) {
    var b;
    return function(d) {
      b || (b = ad(a));
      return d ? (d = b[F(d)], void 0 === d && (d = null), d) : b
    }
  }

  function cd(a, b, d, c) {
    if (z(c)) return c(a, b, d);
    n(c, function(c) {
      a = c(a, b, d)
    });
    return a
  }

  function cf() {
    var a = this.defaults = {
        transformResponse: [$b],
        transformRequest: [function(a) {
          return H(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? db(a) : a
        }],
        headers: {
          common: {
            Accept: "application/json, text/plain, */*"
          },
          post: ia(ac),
          put: ia(ac),
          patch: ia(ac)
        },
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        paramSerializer: "$httpParamSerializer"
      },
      b = !1;
    this.useApplyAsync = function(a) {
      return y(a) ? (b = !!a, this) : b
    };
    var d = !0;
    this.useLegacyPromiseExtensions = function(a) {
      return y(a) ? (d = !!a, this) : d
    };
    var c = this.interceptors = [];
    this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, f, g, h, k, l) {
      function m(b) {
        function c(a) {
          var b = M({}, a);
          b.data = cd(a.data, a.headers, a.status, f.transformResponse);
          a = a.status;
          return 200 <= a && 300 > a ? b : k.reject(b)
        }

        function e(a, b) {
          var c, d = {};
          n(a, function(a, e) {
            z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
          });
          return d
        }
        if (!fa.isObject(b)) throw G("$http")("badreq", b);
        var f = M({
          method: "get",
          transformRequest: a.transformRequest,
          transformResponse: a.transformResponse,
          paramSerializer: a.paramSerializer
        }, b);
        f.headers = function(b) {
          var c = a.headers,
            d = M({}, b.headers),
            f, g, h, c = M({}, c.common, c[F(b.method)]);
          a: for (f in c) {
            g = F(f);
            for (h in d)
              if (F(h) === g) continue a;
            d[f] = c[f]
          }
          return e(d, ia(b))
        }(b);
        f.method = sb(f.method);
        f.paramSerializer = E(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
        var g = [function(b) {
            var d = b.headers,
              e = cd(b.data, bd(d), u, b.transformRequest);
            q(e) && n(d, function(a, b) {
              "content-type" === F(b) && delete d[b]
            });
            q(b.withCredentials) && !q(a.withCredentials) && (b.withCredentials = a.withCredentials);
            return r(b, e).then(c, c)
          }, u],
          h = k.when(f);
        for (n(v, function(a) {
            (a.request || a.requestError) && g.unshift(a.request, a.requestError);
            (a.response || a.responseError) && g.push(a.response, a.responseError)
          }); g.length;) {
          b =
            g.shift();
          var m = g.shift(),
            h = h.then(b, m)
        }
        d ? (h.success = function(a) {
          Qa(a, "fn");
          h.then(function(b) {
            a(b.data, b.status, b.headers, f)
          });
          return h
        }, h.error = function(a) {
          Qa(a, "fn");
          h.then(null, function(b) {
            a(b.data, b.status, b.headers, f)
          });
          return h
        }) : (h.success = dd("success"), h.error = dd("error"));
        return h
      }

      function r(c, d) {
        function g(a, c, d, e) {
          function f() {
            l(c, a, d, e)
          }
          J && (200 <= a && 300 > a ? J.put(R, [a, c, ad(d), e]) : J.remove(R));
          b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
        }

        function l(a, b, d, e) {
          b = -1 <= b ? b : 0;
          (200 <= b && 300 > b ? n.resolve :
            n.reject)({
            data: a,
            status: b,
            headers: bd(d),
            config: c,
            statusText: e
          })
        }

        function r(a) {
          l(a.data, a.status, ia(a.headers()), a.statusText)
        }

        function v() {
          var a = m.pendingRequests.indexOf(c); - 1 !== a && m.pendingRequests.splice(a, 1)
        }
        var n = k.defer(),
          D = n.promise,
          J, K, O = c.headers,
          R = t(c.url, c.paramSerializer(c.params));
        m.pendingRequests.push(c);
        D.then(v, v);
        !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (J = H(c.cache) ? c.cache : H(a.cache) ? a.cache : A);
        J && (K = J.get(R), y(K) ? K && z(K.then) ? K.then(r, r) : I(K) ? l(K[1],
          K[0], ia(K[2]), K[3]) : l(K, 200, {}, "OK") : J.put(R, D));
        q(K) && ((K = ed(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (O[c.xsrfHeaderName || a.xsrfHeaderName] = K), e(c.method, R, d, g, O, c.timeout, c.withCredentials, c.responseType));
        return D
      }

      function t(a, b) {
        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
        return a
      }
      var A = g("$http");
      a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
      var v = [];
      n(c, function(a) {
        v.unshift(E(a) ? l.get(a) : l.invoke(a))
      });
      m.pendingRequests = [];
      (function(a) {
        n(arguments,
          function(a) {
            m[a] = function(b, c) {
              return m(M({}, c || {}, {
                method: a,
                url: b
              }))
            }
          })
      })("get", "delete", "head", "jsonp");
      (function(a) {
        n(arguments, function(a) {
          m[a] = function(b, c, d) {
            return m(M({}, d || {}, {
              method: a,
              url: b,
              data: c
            }))
          }
        })
      })("post", "put", "patch");
      m.defaults = a;
      return m
    }]
  }

  function gf() {
    this.$get = function() {
      return function() {
        return new S.XMLHttpRequest
      }
    }
  }

  function ff() {
    this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(a, b, d, c) {
      return Uf(a, c, a.defer, b.angular.callbacks, d[0])
    }]
  }

  function Uf(a, b, d,
    c, e) {
    function f(a, b, d) {
      var f = e.createElement("script"),
        m = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;
      m = function(a) {
        f.removeEventListener("load", m, !1);
        f.removeEventListener("error", m, !1);
        e.body.removeChild(f);
        f = null;
        var g = -1,
          A = "unknown";
        a && ("load" !== a.type || c[b].called || (a = {
          type: "error"
        }), A = a.type, g = "error" === a.type ? 404 : 200);
        d && d(g, A)
      };
      f.addEventListener("load", m, !1);
      f.addEventListener("error", m, !1);
      e.body.appendChild(f);
      return m
    }
    return function(e, h, k, l, m, r, t, A) {
      function v() {
        C && C();
        w && w.abort()
      }

      function T(b, c, e, f, g) {
        y(L) && d.cancel(L);
        C = w = null;
        b(c, e, f, g);
        a.$$completeOutstandingRequest(x)
      }
      a.$$incOutstandingRequestCount();
      h = h || a.url();
      if ("jsonp" == F(e)) {
        var p = "_" + (c.counter++).toString(36);
        c[p] = function(a) {
          c[p].data = a;
          c[p].called = !0
        };
        var C = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function(a, b) {
          T(l, a, c[p].data, "", b);
          c[p] = x
        })
      } else {
        var w = b(e, h);
        w.open(e, h, !0);
        n(m, function(a, b) {
          y(a) && w.setRequestHeader(b, a)
        });
        w.onload = function() {
          var a = w.statusText || "",
            b = "response" in w ? w.response : w.responseText,
            c = 1223 === w.status ? 204 : w.status;
          0 === c && (c = b ? 200 : "file" == wa(h).protocol ? 404 : 0);
          T(l, c, b, w.getAllResponseHeaders(), a)
        };
        e = function() {
          T(l, -1, null, null, "")
        };
        w.onerror = e;
        w.onabort = e;
        t && (w.withCredentials = !0);
        if (A) try {
          w.responseType = A
        } catch (ga) {
          if ("json" !== A) throw ga;
        }
        w.send(q(k) ? null : k)
      }
      if (0 < r) var L = d(v, r);
      else r && z(r.then) && r.then(v)
    }
  }

  function af() {
    var a = "{{",
      b = "}}";
    this.startSymbol = function(b) {
      return b ? (a = b, this) : a
    };
    this.endSymbol = function(a) {
      return a ? (b = a, this) : b
    };
    this.$get = ["$parse", "$exceptionHandler",
      "$sce",
      function(d, c, e) {
        function f(a) {
          return "\\\\\\" + a
        }

        function g(c) {
          return c.replace(m, a).replace(r, b)
        }

        function h(f, h, m, r) {
          function p(a) {
            try {
              var b = a;
              a = m ? e.getTrusted(m, b) : e.valueOf(b);
              var d;
              if (r && !y(a)) d = a;
              else if (null == a) d = "";
              else {
                switch (typeof a) {
                  case "string":
                    break;
                  case "number":
                    a = "" + a;
                    break;
                  default:
                    a = db(a)
                }
                d = a
              }
              return d
            } catch (g) {
              c(Ja.interr(f, g))
            }
          }
          r = !!r;
          for (var C, w, n = 0, L = [], s = [], D = f.length, J = [], K = []; n < D;)
            if (-1 != (C = f.indexOf(a, n)) && -1 != (w = f.indexOf(b, C + k))) n !== C && J.push(g(f.substring(n, C))), n = f.substring(C +
              k, w), L.push(n), s.push(d(n, p)), n = w + l, K.push(J.length), J.push("");
            else {
              n !== D && J.push(g(f.substring(n)));
              break
            }
          m && 1 < J.length && Ja.throwNoconcat(f);
          if (!h || L.length) {
            var O = function(a) {
              for (var b = 0, c = L.length; b < c; b++) {
                if (r && q(a[b])) return;
                J[K[b]] = a[b]
              }
              return J.join("")
            };
            return M(function(a) {
              var b = 0,
                d = L.length,
                e = Array(d);
              try {
                for (; b < d; b++) e[b] = s[b](a);
                return O(e)
              } catch (g) {
                c(Ja.interr(f, g))
              }
            }, {
              exp: f,
              expressions: L,
              $$watchDelegate: function(a, b) {
                var c;
                return a.$watchGroup(s, function(d, e) {
                  var f = O(d);
                  z(b) && b.call(this,
                    f, d !== e ? c : f, a);
                  c = f
                })
              }
            })
          }
        }
        var k = a.length,
          l = b.length,
          m = new RegExp(a.replace(/./g, f), "g"),
          r = new RegExp(b.replace(/./g, f), "g");
        h.startSymbol = function() {
          return a
        };
        h.endSymbol = function() {
          return b
        };
        return h
      }
    ]
  }

  function bf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, d, c) {
      function e(e, h, k, l) {
        var m = 4 < arguments.length,
          r = m ? ra.call(arguments, 4) : [],
          t = b.setInterval,
          A = b.clearInterval,
          v = 0,
          n = y(l) && !l,
          p = (n ? c : d).defer(),
          C = p.promise;
        k = y(k) ? k : 0;
        C.then(null, null, m ? function() {
          e.apply(null, r)
        } : e);
        C.$$intervalId =
          t(function() {
            p.notify(v++);
            0 < k && v >= k && (p.resolve(v), A(C.$$intervalId), delete f[C.$$intervalId]);
            n || a.$apply()
          }, h);
        f[C.$$intervalId] = p;
        return C
      }
      var f = {};
      e.cancel = function(a) {
        return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
      };
      return e
    }]
  }

  function bc(a) {
    a = a.split("/");
    for (var b = a.length; b--;) a[b] = ob(a[b]);
    return a.join("/")
  }

  function fd(a, b) {
    var d = wa(a);
    b.$$protocol = d.protocol;
    b.$$host = d.hostname;
    b.$$port = ea(d.port) || Vf[d.protocol] ||
      null
  }

  function gd(a, b) {
    var d = "/" !== a.charAt(0);
    d && (a = "/" + a);
    var c = wa(a);
    b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
    b.$$search = xc(c.search);
    b.$$hash = decodeURIComponent(c.hash);
    b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
  }

  function pa(a, b) {
    if (0 === b.indexOf(a)) return b.substr(a.length)
  }

  function Fa(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substr(0, b)
  }

  function ib(a) {
    return a.replace(/(#.+)|#$/, "$1")
  }

  function cc(a, b, d) {
    this.$$html5 = !0;
    d = d || "";
    fd(a, this);
    this.$$parse = function(a) {
      var d = pa(b, a);
      if (!E(d)) throw Db("ipthprfx", a, b);
      gd(d, this);
      this.$$path || (this.$$path = "/");
      this.$$compose()
    };
    this.$$compose = function() {
      var a = Qb(this.$$search),
        d = this.$$hash ? "#" + ob(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (a ? "?" + a : "") + d;
      this.$$absUrl = b + this.$$url.substr(1)
    };
    this.$$parseLinkUrl = function(c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      y(f = pa(a, c)) ? (g = f, g = y(f = pa(d, f)) ? b + (pa("/", f) || f) : a + g) : y(f = pa(b, c)) ? g = b + f : b == c + "/" && (g = b);
      g && this.$$parse(g);
      return !!g
    }
  }

  function dc(a, b, d) {
    fd(a, this);
    this.$$parse = function(c) {
      var e = pa(a, c) || pa(b, c),
        f;
      q(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", q(e) && (a = c, this.replace())) : (f = pa(d, e), q(f) && (f = e));
      gd(f, this);
      c = this.$$path;
      var e = a,
        g = /^\/[A-Z]:(\/.*)/;
      0 === f.indexOf(e) && (f = f.replace(e, ""));
      g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
      this.$$path = c;
      this.$$compose()
    };
    this.$$compose = function() {
      var b = Qb(this.$$search),
        e = this.$$hash ? "#" + ob(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + (this.$$url ?
        d + this.$$url : "")
    };
    this.$$parseLinkUrl = function(b, d) {
      return Fa(a) == Fa(b) ? (this.$$parse(b), !0) : !1
    }
  }

  function hd(a, b, d) {
    this.$$html5 = !0;
    dc.apply(this, arguments);
    this.$$parseLinkUrl = function(c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
      var f, g;
      a == Fa(c) ? f = c : (g = pa(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
      f && this.$$parse(f);
      return !!f
    };
    this.$$compose = function() {
      var b = Qb(this.$$search),
        e = this.$$hash ? "#" + ob(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + d + this.$$url
    }
  }

  function Eb(a) {
    return function() {
      return this[a]
    }
  }

  function id(a, b) {
    return function(d) {
      if (q(d)) return this[a];
      this[a] = b(d);
      this.$$compose();
      return this
    }
  }

  function hf() {
    var a = "",
      b = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function(b) {
      return y(b) ? (a = b, this) : a
    };
    this.html5Mode = function(a) {
      return $a(a) ? (b.enabled = a, this) : H(a) ? ($a(a.enabled) && (b.enabled = a.enabled), $a(a.requireBase) && (b.requireBase = a.requireBase), $a(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
    };
    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window",
      function(d, c, e, f, g) {
        function h(a, b, d) {
          var e = l.url(),
            f = l.$$state;
          try {
            c.url(a, b, d), l.$$state = c.state()
          } catch (g) {
            throw l.url(e), l.$$state = f, g;
          }
        }

        function k(a, b) {
          d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
        }
        var l, m;
        m = c.baseHref();
        var r = c.url(),
          t;
        if (b.enabled) {
          if (!m && b.requireBase) throw Db("nobase");
          t = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");
          m = e.history ? cc : hd
        } else t = Fa(r), m = dc;
        var A = t.substr(0, Fa(t).lastIndexOf("/") + 1);
        l = new m(t, A, "#" + a);
        l.$$parseLinkUrl(r, r);
        l.$$state =
          c.state();
        var v = /^\s*(javascript|mailto):/i;
        f.on("click", function(a) {
          if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
            for (var e = B(a.target);
              "a" !== ta(e[0]);)
              if (e[0] === f[0] || !(e = e.parent())[0]) return;
            var h = e.prop("href"),
              k = e.attr("href") || e.attr("xlink:href");
            H(h) && "[object SVGAnimatedString]" === h.toString() && (h = wa(h.animVal).href);
            v.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
          }
        });
        ib(l.absUrl()) != ib(r) && c.url(l.absUrl(), !0);
        var n = !0;
        c.onUrlChange(function(a, b) {
          q(pa(A, a)) ? g.location.href = a : (d.$evalAsync(function() {
            var c = l.absUrl(),
              e = l.$$state,
              f;
            a = ib(a);
            l.$$parse(a);
            l.$$state = b;
            f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
            l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (n = !1, k(c, e)))
          }), d.$$phase || d.$digest())
        });
        d.$watch(function() {
          var a = ib(c.url()),
            b = ib(l.absUrl()),
            f = c.state(),
            g = l.$$replace,
            m = a !== b || l.$$html5 && e.history && f !== l.$$state;
          if (n ||
            m) n = !1, d.$evalAsync(function() {
            var b = l.absUrl(),
              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
            l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
          });
          l.$$replace = !1
        });
        return l
      }
    ]
  }

  function jf() {
    var a = !0,
      b = this;
    this.debugEnabled = function(b) {
      return y(b) ? (a = b, this) : a
    };
    this.$get = ["$window", function(d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL &&
          (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a
      }

      function e(a) {
        var b = d.console || {},
          e = b[a] || b.log || x;
        a = !1;
        try {
          a = !!e.apply
        } catch (k) {}
        return a ? function() {
          var a = [];
          n(arguments, function(b) {
            a.push(c(b))
          });
          return e.apply(b, a)
        } : function(a, b) {
          e(a, null == b ? "" : b)
        }
      }
      return {
        log: e("log"),
        info: e("info"),
        warn: e("warn"),
        error: e("error"),
        debug: function() {
          var c = e("debug");
          return function() {
            a && c.apply(b, arguments)
          }
        }()
      }
    }]
  }

  function Va(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" ===
      a || "__proto__" === a) throw ba("isecfld", b);
    return a
  }

  function jd(a, b) {
    a += "";
    if (!E(a)) throw ba("iseccst", b);
    return a
  }

  function xa(a, b) {
    if (a) {
      if (a.constructor === a) throw ba("isecfn", b);
      if (a.window === a) throw ba("isecwindow", b);
      if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ba("isecdom", b);
      if (a === Object) throw ba("isecobj", b);
    }
    return a
  }

  function kd(a, b) {
    if (a) {
      if (a.constructor === a) throw ba("isecfn", b);
      if (a === Wf || a === Xf || a === Yf) throw ba("isecff", b);
    }
  }

  function ld(a, b) {
    if (a && (a === (0).constructor || a ===
        (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ba("isecaf", b);
  }

  function Zf(a, b) {
    return "undefined" !== typeof a ? a : b
  }

  function md(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
  }

  function W(a, b) {
    var d, c;
    switch (a.type) {
      case s.Program:
        d = !0;
        n(a.body, function(a) {
          W(a.expression, b);
          d = d && a.expression.constant
        });
        a.constant = d;
        break;
      case s.Literal:
        a.constant = !0;
        a.toWatch = [];
        break;
      case s.UnaryExpression:
        W(a.argument, b);
        a.constant = a.argument.constant;
        a.toWatch = a.argument.toWatch;
        break;
      case s.BinaryExpression:
        W(a.left, b);
        W(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;
      case s.LogicalExpression:
        W(a.left, b);
        W(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.constant ? [] : [a];
        break;
      case s.ConditionalExpression:
        W(a.test, b);
        W(a.alternate, b);
        W(a.consequent, b);
        a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
        a.toWatch = a.constant ? [] : [a];
        break;
      case s.Identifier:
        a.constant = !1;
        a.toWatch = [a];
        break;
      case s.MemberExpression:
        W(a.object, b);
        a.computed && W(a.property, b);
        a.constant = a.object.constant && (!a.computed || a.property.constant);
        a.toWatch = [a];
        break;
      case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : !1;
        c = [];
        n(a.arguments, function(a) {
          W(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch)
        });
        a.constant = d;
        a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
        break;
      case s.AssignmentExpression:
        W(a.left, b);
        W(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = [a];
        break;
      case s.ArrayExpression:
        d = !0;
        c = [];
        n(a.elements, function(a) {
          W(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch)
        });
        a.constant = d;
        a.toWatch = c;
        break;
      case s.ObjectExpression:
        d = !0;
        c = [];
        n(a.properties, function(a) {
          W(a.value, b);
          d = d && a.value.constant;
          a.value.constant || c.push.apply(c, a.value.toWatch)
        });
        a.constant = d;
        a.toWatch = c;
        break;
      case s.ThisExpression:
        a.constant = !1, a.toWatch = []
    }
  }

  function nd(a) {
    if (1 == a.length) {
      a = a[0].expression;
      var b = a.toWatch;
      return 1 !== b.length ? b : b[0] !== a ? b : u
    }
  }

  function od(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression
  }

  function pd(a) {
    if (1 === a.body.length && od(a.body[0].expression)) return {
      type: s.AssignmentExpression,
      left: a.body[0].expression,
      right: {
        type: s.NGValueParameter
      },
      operator: "="
    }
  }

  function qd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
  }

  function rd(a, b) {
    this.astBuilder = a;
    this.$filter = b
  }

  function sd(a,
    b) {
    this.astBuilder = a;
    this.$filter = b
  }

  function Fb(a) {
    return "constructor" == a
  }

  function ec(a) {
    return z(a.valueOf) ? a.valueOf() : $f.call(a)
  }

  function kf() {
    var a = $(),
      b = $();
    this.$get = ["$filter", function(d) {
      function c(a, b) {
        return null == a || null == b ? a === b : "object" === typeof a && (a = ec(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
      }

      function e(a, b, d, e, f) {
        var g = e.inputs,
          h;
        if (1 === g.length) {
          var k = c,
            g = g[0];
          return a.$watch(function(a) {
            var b = g(a);
            c(b, k) || (h = e(a, u, u, [b]), k = b && ec(b));
            return h
          }, b, d, f)
        }
        for (var l = [], m = [], r = 0, n =
            g.length; r < n; r++) l[r] = c, m[r] = null;
        return a.$watch(function(a) {
          for (var b = !1, d = 0, f = g.length; d < f; d++) {
            var k = g[d](a);
            if (b || (b = !c(k, l[d]))) m[d] = k, l[d] = k && ec(k)
          }
          b && (h = e(a, u, u, m));
          return h
        }, b, d, f)
      }

      function f(a, b, c, d) {
        var e, f;
        return e = a.$watch(function(a) {
          return d(a)
        }, function(a, c, d) {
          f = a;
          z(b) && b.apply(this, arguments);
          y(a) && d.$$postDigest(function() {
            y(f) && e()
          })
        }, c)
      }

      function g(a, b, c, d) {
        function e(a) {
          var b = !0;
          n(a, function(a) {
            y(a) || (b = !1)
          });
          return b
        }
        var f, g;
        return f = a.$watch(function(a) {
          return d(a)
        }, function(a,
          c, d) {
          g = a;
          z(b) && b.call(this, a, c, d);
          e(a) && d.$$postDigest(function() {
            e(g) && f()
          })
        }, c)
      }

      function h(a, b, c, d) {
        var e;
        return e = a.$watch(function(a) {
          return d(a)
        }, function(a, c, d) {
          z(b) && b.apply(this, arguments);
          e()
        }, c)
      }

      function k(a, b) {
        if (!b) return a;
        var c = a.$$watchDelegate,
          d = !1,
          c = c !== g && c !== f ? function(c, e, f, g) {
            f = d && g ? g[0] : a(c, e, f, g);
            return b(f, c, e)
          } : function(c, d, e, f) {
            e = a(c, d, e, f);
            c = b(e, c, d);
            return y(e) ? c : e
          };
        a.$$watchDelegate && a.$$watchDelegate !== e ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate =
          e, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
        return c
      }
      var l = Ba().noUnsafeEval,
        m = {
          csp: l,
          expensiveChecks: !1
        },
        r = {
          csp: l,
          expensiveChecks: !0
        };
      return function(c, l, v) {
        var n, p, q;
        switch (typeof c) {
          case "string":
            q = c = c.trim();
            var w = v ? b : a;
            n = w[q];
            n || (":" === c.charAt(0) && ":" === c.charAt(1) && (p = !0, c = c.substring(2)), v = v ? r : m, n = new fc(v), n = (new gc(n, d, v)).parse(c), n.constant ? n.$$watchDelegate = h : p ? n.$$watchDelegate = n.literal ? g : f : n.inputs && (n.$$watchDelegate = e), w[q] = n);
            return k(n, l);
          case "function":
            return k(c, l);
          default:
            return x
        }
      }
    }]
  }

  function mf() {
    this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
      return td(function(b) {
        a.$evalAsync(b)
      }, b)
    }]
  }

  function nf() {
    this.$get = ["$browser", "$exceptionHandler", function(a, b) {
      return td(function(b) {
        a.defer(b)
      }, b)
    }]
  }

  function td(a, b) {
    function d(a, b, c) {
      function d(b) {
        return function(c) {
          e || (e = !0, b.call(a, c))
        }
      }
      var e = !1;
      return [d(b), d(c)]
    }

    function c() {
      this.$$state = {
        status: 0
      }
    }

    function e(a, b) {
      return function(c) {
        b.call(a, c)
      }
    }

    function f(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function() {
        var a,
          d, e;
        e = c.pending;
        c.processScheduled = !1;
        c.pending = u;
        for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];
          a = e[f][c.status];
          try {
            z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
          } catch (h) {
            d.reject(h), b(h)
          }
        }
      }))
    }

    function g() {
      this.promise = new c;
      this.resolve = e(this, this.resolve);
      this.reject = e(this, this.reject);
      this.notify = e(this, this.notify)
    }
    var h = G("$q", TypeError);
    M(c.prototype, {
      then: function(a, b, c) {
        if (q(a) && q(b) && q(c)) return this;
        var d = new g;
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([d, a, b, c]);
        0 < this.$$state.status && f(this.$$state);
        return d.promise
      },
      "catch": function(a) {
        return this.then(null, a)
      },
      "finally": function(a, b) {
        return this.then(function(b) {
          return l(b, !0, a)
        }, function(b) {
          return l(b, !1, a)
        }, b)
      }
    });
    M(g.prototype, {
      resolve: function(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
      },
      $$resolve: function(a) {
        var c, e;
        e = d(this, this.$$resolve, this.$$reject);
        try {
          if (H(a) || z(a)) c = a && a.then;
          z(c) ? (this.promise.$$state.status = -1, c.call(a, e[0], e[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, f(this.promise.$$state))
        } catch (g) {
          e[1](g), b(g)
        }
      },
      reject: function(a) {
        this.promise.$$state.status || this.$$reject(a)
      },
      $$reject: function(a) {
        this.promise.$$state.value = a;
        this.promise.$$state.status = 2;
        f(this.promise.$$state)
      },
      notify: function(c) {
        var d = this.promise.$$state.pending;
        0 >= this.promise.$$state.status && d && d.length && a(function() {
          for (var a, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];
            a = d[f][3];
            try {
              e.notify(z(a) ?
                a(c) : c)
            } catch (h) {
              b(h)
            }
          }
        })
      }
    });
    var k = function(a, b) {
        var c = new g;
        b ? c.resolve(a) : c.reject(a);
        return c.promise
      },
      l = function(a, b, c) {
        var d = null;
        try {
          z(c) && (d = c())
        } catch (e) {
          return k(e, !1)
        }
        return d && z(d.then) ? d.then(function() {
          return k(a, b)
        }, function(a) {
          return k(a, !1)
        }) : k(a, b)
      },
      m = function(a, b, c, d) {
        var e = new g;
        e.resolve(a);
        return e.promise.then(b, c, d)
      },
      r = function A(a) {
        if (!z(a)) throw h("norslvr", a);
        if (!(this instanceof A)) return new A(a);
        var b = new g;
        a(function(a) {
          b.resolve(a)
        }, function(a) {
          b.reject(a)
        });
        return b.promise
      };
    r.defer = function() {
      return new g
    };
    r.reject = function(a) {
      var b = new g;
      b.reject(a);
      return b.promise
    };
    r.when = m;
    r.resolve = m;
    r.all = function(a) {
      var b = new g,
        c = 0,
        d = I(a) ? [] : {};
      n(a, function(a, e) {
        c++;
        m(a).then(function(a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
        }, function(a) {
          d.hasOwnProperty(e) || b.reject(a)
        })
      });
      0 === c && b.resolve(d);
      return b.promise
    };
    return r
  }

  function wf() {
    this.$get = ["$window", "$timeout", function(a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
        c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame ||
        a.webkitCancelRequestAnimationFrame,
        e = !!d,
        f = e ? function(a) {
          var b = d(a);
          return function() {
            c(b)
          }
        } : function(a) {
          var c = b(a, 16.66, !1);
          return function() {
            b.cancel(c)
          }
        };
      f.supported = e;
      return f
    }]
  }

  function lf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++nb;
        this.$$ChildScope = null
      }
      b.prototype = a;
      return b
    }
    var b = 10,
      d = G("$rootScope"),
      c = null,
      e = null;
    this.digestTtl = function(a) {
      arguments.length &&
        (b = a);
      return b
    };
    this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, k) {
      function l(a) {
        a.currentScope.$$destroyed = !0
      }

      function m(a) {
        9 === Ha && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling));
        a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
      }

      function r() {
        this.$id = ++nb;
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this.$root = this;
        this.$$destroyed = !1;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$$isolateBindings = null
      }

      function t(a) {
        if (w.$$phase) throw d("inprog", w.$$phase);
        w.$$phase = a
      }

      function A(a, b) {
        do a.$$watchersCount += b; while (a = a.$parent)
      }

      function v(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
      }

      function s() {}

      function p() {
        for (; aa.length;) try {
          aa.shift()()
        } catch (a) {
          g(a)
        }
        e = null
      }

      function C() {
        null === e && (e = k.defer(function() {
          w.$apply(p)
        }))
      }
      r.prototype = {
        constructor: r,
        $new: function(b, c) {
          var d;
          c = c || this;
          b ? (d = new r, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
          d.$parent = c;
          d.$$prevSibling = c.$$childTail;
          c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
          (b || c != this) && d.$on("$destroy", l);
          return d
        },
        $watch: function(a, b, d, e) {
          var f = h(a);
          if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
          var g = this,
            k = g.$$watchers,
            l = {
              fn: b,
              last: s,
              get: f,
              exp: e || a,
              eq: !!d
            };
          c = null;
          z(b) || (l.fn = x);
          k ||
            (k = g.$$watchers = []);
          k.unshift(l);
          A(this, 1);
          return function() {
            0 <= ab(k, l) && A(g, -1);
            c = null
          }
        },
        $watchGroup: function(a, b) {
          function c() {
            h = !1;
            k ? (k = !1, b(e, e, g)) : b(e, d, g)
          }
          var d = Array(a.length),
            e = Array(a.length),
            f = [],
            g = this,
            h = !1,
            k = !0;
          if (!a.length) {
            var l = !0;
            g.$evalAsync(function() {
              l && b(e, e, g)
            });
            return function() {
              l = !1
            }
          }
          if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
            e[0] = a;
            d[0] = c;
            b(e, a === c ? e : d, f)
          });
          n(a, function(a, b) {
            var k = g.$watch(a, function(a, f) {
              e[b] = a;
              d[b] = f;
              h || (h = !0, g.$evalAsync(c))
            });
            f.push(k)
          });
          return function() {
            for (; f.length;) f.shift()()
          }
        },
        $watchCollection: function(a, b) {
          function c(a) {
            e = a;
            var b, d, g, h;
            if (!q(e)) {
              if (H(e))
                if (za(e))
                  for (f !== r && (f = r, n = f.length = 0, l++), a = e.length, n !== a && (l++, f.length = n = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                else {
                  f !== t && (f = t = {}, n = 0, l++);
                  a = 0;
                  for (b in e) qa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));
                  if (n > a)
                    for (b in l++, f) qa.call(e, b) || (n--, delete f[b])
                }
              else f !== e && (f = e, l++);
              return l
            }
          }
          c.$stateful = !0;
          var d = this,
            e, f, g, k = 1 < b.length,
            l = 0,
            m =
            h(a, c),
            r = [],
            t = {},
            p = !0,
            n = 0;
          return this.$watch(m, function() {
            p ? (p = !1, b(e, e, d)) : b(e, g, d);
            if (k)
              if (H(e))
                if (za(e)) {
                  g = Array(e.length);
                  for (var a = 0; a < e.length; a++) g[a] = e[a]
                } else
                  for (a in g = {}, e) qa.call(e, a) && (g[a] = e[a]);
            else g = e
          })
        },
        $digest: function() {
          var a, f, h, l, m, r, n = b,
            A, q = [],
            v, C;
          t("$digest");
          k.$$checkUrlChange();
          this === w && null !== e && (k.defer.cancel(e), p());
          c = null;
          do {
            r = !1;
            for (A = this; u.length;) {
              try {
                C = u.shift(), C.scope.$eval(C.expression, C.locals)
              } catch (aa) {
                g(aa)
              }
              c = null
            }
            a: do {
              if (l = A.$$watchers)
                for (m = l.length; m--;) try {
                  if (a =
                    l[m])
                    if ((f = a.get(A)) !== (h = a.last) && !(a.eq ? ma(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) r = !0, c = a, a.last = a.eq ? bb(f, null) : f, a.fn(f, h === s ? f : h, A), 5 > n && (v = 4 - n, q[v] || (q[v] = []), q[v].push({
                      msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                      newVal: f,
                      oldVal: h
                    }));
                    else if (a === c) {
                    r = !1;
                    break a
                  }
                } catch (y) {
                  g(y)
                }
              if (!(l = A.$$watchersCount && A.$$childHead || A !== this && A.$$nextSibling))
                for (; A !== this && !(l = A.$$nextSibling);) A = A.$parent
            } while (A = l);
            if ((r || u.length) && !n--) throw w.$$phase = null, d("infdig",
              b, q);
          } while (r || u.length);
          for (w.$$phase = null; L.length;) try {
            L.shift()()
          } catch (x) {
            g(x)
          }
        },
        $destroy: function() {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy");
            this.$$destroyed = !0;
            this === w && k.$$applicationDestroyed();
            A(this, -this.$$watchersCount);
            for (var b in this.$$listenerCount) v(this, this.$$listenerCount[b], b);
            a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
            a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
            this.$$prevSibling && (this.$$prevSibling.$$nextSibling =
              this.$$nextSibling);
            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = x;
            this.$on = this.$watch = this.$watchGroup = function() {
              return x
            };
            this.$$listeners = {};
            this.$$nextSibling = null;
            m(this)
          }
        },
        $eval: function(a, b) {
          return h(a)(this, b)
        },
        $evalAsync: function(a, b) {
          w.$$phase || u.length || k.defer(function() {
            u.length && w.$digest()
          });
          u.push({
            scope: this,
            expression: a,
            locals: b
          })
        },
        $$postDigest: function(a) {
          L.push(a)
        },
        $apply: function(a) {
          try {
            t("$apply");
            try {
              return this.$eval(a)
            } finally {
              w.$$phase = null
            }
          } catch (b) {
            g(b)
          } finally {
            try {
              w.$digest()
            } catch (c) {
              throw g(c), c;
            }
          }
        },
        $applyAsync: function(a) {
          function b() {
            c.$eval(a)
          }
          var c = this;
          a && aa.push(b);
          C()
        },
        $on: function(a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []);
          c.push(b);
          var d = this;
          do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
          var e = this;
          return function() {
            var d = c.indexOf(b); - 1 !== d && (c[d] = null, v(e, 1, a))
          }
        },
        $emit: function(a, b) {
          var c = [],
            d, e = this,
            f = !1,
            h = {
              name: a,
              targetScope: e,
              stopPropagation: function() {
                f = !0
              },
              preventDefault: function() {
                h.defaultPrevented = !0
              },
              defaultPrevented: !1
            },
            k = cb([h], arguments, 1),
            l, m;
          do {
            d = e.$$listeners[a] || c;
            h.currentScope = e;
            l = 0;
            for (m = d.length; l < m; l++)
              if (d[l]) try {
                d[l].apply(null, k)
              } catch (r) {
                g(r)
              } else d.splice(l, 1), l--, m--;
            if (f) return h.currentScope = null, h;
            e = e.$parent
          } while (e);
          h.currentScope = null;
          return h
        },
        $broadcast: function(a, b) {
          var c = this,
            d = this,
            e = {
              name: a,
              targetScope: this,
              preventDefault: function() {
                e.defaultPrevented = !0
              },
              defaultPrevented: !1
            };
          if (!this.$$listenerCount[a]) return e;
          for (var f = cb([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;
            d = c.$$listeners[a] || [];
            h = 0;
            for (k = d.length; h < k; h++)
              if (d[h]) try {
                d[h].apply(null, f)
              } catch (l) {
                g(l)
              } else d.splice(h, 1), h--, k--;
            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
              for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
          }
          e.currentScope = null;
          return e
        }
      };
      var w = new r,
        u = w.$$asyncQueue = [],
        L = w.$$postDigestQueue = [],
        aa = w.$$applyAsyncQueue = [];
      return w
    }]
  }

  function ge() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
      b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function(b) {
      return y(b) ? (a = b, this) : a
    };
    this.imgSrcSanitizationWhitelist = function(a) {
      return y(a) ? (b = a, this) : b
    };
    this.$get = function() {
      return function(d, c) {
        var e = c ? b : a,
          f;
        f = wa(d).href;
        return "" === f || f.match(e) ? d : "unsafe:" + f
      }
    }
  }

  function ag(a) {
    if ("self" === a) return a;
    if (E(a)) {
      if (-1 < a.indexOf("***")) throw ya("iwcard", a);
      a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
      return new RegExp("^" + a + "$")
    }
    if (Ma(a)) return new RegExp("^" +
      a.source + "$");
    throw ya("imatcher");
  }

  function vd(a) {
    var b = [];
    y(a) && n(a, function(a) {
      b.push(ag(a))
    });
    return b
  }

  function pf() {
    this.SCE_CONTEXTS = la;
    var a = ["self"],
      b = [];
    this.resourceUrlWhitelist = function(b) {
      arguments.length && (a = vd(b));
      return a
    };
    this.resourceUrlBlacklist = function(a) {
      arguments.length && (b = vd(a));
      return b
    };
    this.$get = ["$injector", function(d) {
      function c(a, b) {
        return "self" === a ? ed(b) : !!a.exec(b.href)
      }

      function e(a) {
        var b = function(a) {
          this.$$unwrapTrustedValue = function() {
            return a
          }
        };
        a && (b.prototype =
          new a);
        b.prototype.valueOf = function() {
          return this.$$unwrapTrustedValue()
        };
        b.prototype.toString = function() {
          return this.$$unwrapTrustedValue().toString()
        };
        return b
      }
      var f = function(a) {
        throw ya("unsafe");
      };
      d.has("$sanitize") && (f = d.get("$sanitize"));
      var g = e(),
        h = {};
      h[la.HTML] = e(g);
      h[la.CSS] = e(g);
      h[la.URL] = e(g);
      h[la.JS] = e(g);
      h[la.RESOURCE_URL] = e(h[la.URL]);
      return {
        trustAs: function(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;
          if (!c) throw ya("icontext", a, b);
          if (null === b || q(b) || "" === b) return b;
          if ("string" !== typeof b) throw ya("itype",
            a);
          return new c(b)
        },
        getTrusted: function(d, e) {
          if (null === e || q(e) || "" === e) return e;
          var g = h.hasOwnProperty(d) ? h[d] : null;
          if (g && e instanceof g) return e.$$unwrapTrustedValue();
          if (d === la.RESOURCE_URL) {
            var g = wa(e.toString()),
              r, t, n = !1;
            r = 0;
            for (t = a.length; r < t; r++)
              if (c(a[r], g)) {
                n = !0;
                break
              }
            if (n)
              for (r = 0, t = b.length; r < t; r++)
                if (c(b[r], g)) {
                  n = !1;
                  break
                }
            if (n) return e;
            throw ya("insecurl", e.toString());
          }
          if (d === la.HTML) return f(e);
          throw ya("unsafe");
        },
        valueOf: function(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a
        }
      }
    }]
  }

  function of () {
    var a = !0;
    this.enabled = function(b) {
      arguments.length && (a = !!b);
      return a
    };
    this.$get = ["$parse", "$sceDelegate", function(b, d) {
      if (a && 8 > Ha) throw ya("iequirks");
      var c = ia(la);
      c.isEnabled = function() {
        return a
      };
      c.trustAs = d.trustAs;
      c.getTrusted = d.getTrusted;
      c.valueOf = d.valueOf;
      a || (c.trustAs = c.getTrusted = function(a, b) {
        return b
      }, c.valueOf = Ya);
      c.parseAs = function(a, d) {
        var e = b(d);
        return e.literal && e.constant ? e : b(d, function(b) {
          return c.getTrusted(a, b)
        })
      };
      var e = c.parseAs,
        f = c.getTrusted,
        g = c.trustAs;
      n(la, function(a,
        b) {
        var d = F(b);
        c[fb("parse_as_" + d)] = function(b) {
          return e(a, b)
        };
        c[fb("get_trusted_" + d)] = function(b) {
          return f(a, b)
        };
        c[fb("trust_as_" + d)] = function(b) {
          return g(a, b)
        }
      });
      return c
    }]
  }

  function qf() {
    this.$get = ["$window", "$document", function(a, b) {
      var d = {},
        c = ea((/android (\d+)/.exec(F((a.navigator || {}).userAgent)) || [])[1]),
        e = /Boxee/i.test((a.navigator || {}).userAgent),
        f = b[0] || {},
        g, h = /^(Moz|webkit|ms)(?=[A-Z])/,
        k = f.body && f.body.style,
        l = !1,
        m = !1;
      if (k) {
        for (var r in k)
          if (l = h.exec(r)) {
            g = l[0];
            g = g.substr(0, 1).toUpperCase() +
              g.substr(1);
            break
          }
        g || (g = "WebkitOpacity" in k && "webkit");
        l = !!("transition" in k || g + "Transition" in k);
        m = !!("animation" in k || g + "Animation" in k);
        !c || l && m || (l = E(k.webkitTransition), m = E(k.webkitAnimation))
      }
      return {
        history: !(!a.history || !a.history.pushState || 4 > c || e),
        hasEvent: function(a) {
          if ("input" === a && 11 >= Ha) return !1;
          if (q(d[a])) {
            var b = f.createElement("div");
            d[a] = "on" + a in b
          }
          return d[a]
        },
        csp: Ba(),
        vendorPrefix: g,
        transitions: l,
        animations: m,
        android: c
      }
    }]
  }

  function sf() {
    this.$get = ["$templateCache", "$http", "$q", "$sce",
      function(a, b, d, c) {
        function e(f, g) {
          e.totalPendingRequests++;
          E(f) && a.get(f) || (f = c.getTrustedResourceUrl(f));
          var h = b.defaults && b.defaults.transformResponse;
          I(h) ? h = h.filter(function(a) {
            return a !== $b
          }) : h === $b && (h = null);
          return b.get(f, {
            cache: a,
            transformResponse: h
          })["finally"](function() {
            e.totalPendingRequests--
          }).then(function(b) {
            a.put(f, b.data);
            return b.data
          }, function(a) {
            if (!g) throw ha("tpload", f, a.status, a.statusText);
            return d.reject(a)
          })
        }
        e.totalPendingRequests = 0;
        return e
      }
    ]
  }

  function tf() {
    this.$get = ["$rootScope",
      "$browser", "$location",
      function(a, b, d) {
        return {
          findBindings: function(a, b, d) {
            a = a.getElementsByClassName("ng-binding");
            var g = [];
            n(a, function(a) {
              var c = fa.element(a).data("$binding");
              c && n(c, function(c) {
                d ? (new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
              })
            });
            return g
          },
          findModels: function(a, b, d) {
            for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
              var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
              if (k.length) return k
            }
          },
          getLocation: function() {
            return d.url()
          },
          setLocation: function(b) {
            b !== d.url() && (d.url(b), a.$digest())
          },
          whenStable: function(a) {
            b.notifyWhenNoOutstandingRequests(a)
          }
        }
      }
    ]
  }

  function uf() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, d, c, e) {
      function f(f, k, l) {
        z(f) || (l = k, k = f, f = x);
        var m = ra.call(arguments, 3),
          r = y(l) && !l,
          t = (r ? c : d).defer(),
          n = t.promise,
          q;
        q = b.defer(function() {
          try {
            t.resolve(f.apply(null, m))
          } catch (b) {
            t.reject(b), e(b)
          } finally {
            delete g[n.$$timeoutId]
          }
          r || a.$apply()
        }, k);
        n.$$timeoutId = q;
        g[q] = t;
        return n
      }
      var g = {};
      f.cancel = function(a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
      };
      return f
    }]
  }

  function wa(a) {
    Ha && (Y.setAttribute("href", a), a = Y.href);
    Y.setAttribute("href", a);
    return {
      href: Y.href,
      protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
      host: Y.host,
      search: Y.search ? Y.search.replace(/^\?/, "") : "",
      hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
      hostname: Y.hostname,
      port: Y.port,
      pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
    }
  }

  function ed(a) {
    a =
      E(a) ? wa(a) : a;
    return a.protocol === wd.protocol && a.host === wd.host
  }

  function vf() {
    this.$get = na(S)
  }

  function xd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {
        return a
      }
    }
    var d = a[0] || {},
      c = {},
      e = "";
    return function() {
      var a, g, h, k, l;
      a = d.cookie || "";
      if (a !== e)
        for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), q(c[l]) && (c[l] = b(g.substring(k + 1))));
      return c
    }
  }

  function zf() {
    this.$get = xd
  }

  function Jc(a) {
    function b(d, c) {
      if (H(d)) {
        var e = {};
        n(d, function(a, c) {
          e[c] =
            b(c, a)
        });
        return e
      }
      return a.factory(d + "Filter", c)
    }
    this.register = b;
    this.$get = ["$injector", function(a) {
      return function(b) {
        return a.get(b + "Filter")
      }
    }];
    b("currency", yd);
    b("date", zd);
    b("filter", bg);
    b("json", cg);
    b("limitTo", dg);
    b("lowercase", eg);
    b("number", Ad);
    b("orderBy", Bd);
    b("uppercase", fg)
  }

  function bg() {
    return function(a, b, d) {
      if (!za(a)) {
        if (null == a) return a;
        throw G("filter")("notarray", a);
      }
      var c;
      switch (hc(b)) {
        case "function":
          break;
        case "boolean":
        case "null":
        case "number":
        case "string":
          c = !0;
        case "object":
          b =
            gg(b, d, c);
          break;
        default:
          return a
      }
      return Array.prototype.filter.call(a, b)
    }
  }

  function gg(a, b, d) {
    var c = H(a) && "$" in a;
    !0 === b ? b = ma : z(b) || (b = function(a, b) {
      if (q(a)) return !1;
      if (null === a || null === b) return a === b;
      if (H(b) || H(a) && !qc(a)) return !1;
      a = F("" + a);
      b = F("" + b);
      return -1 !== a.indexOf(b)
    });
    return function(e) {
      return c && !H(e) ? Ka(e, a.$, b, !1) : Ka(e, a, b, d)
    }
  }

  function Ka(a, b, d, c, e) {
    var f = hc(a),
      g = hc(b);
    if ("string" === g && "!" === b.charAt(0)) return !Ka(a, b.substring(1), d, c);
    if (I(a)) return a.some(function(a) {
      return Ka(a, b, d, c)
    });
    switch (f) {
      case "object":
        var h;
        if (c) {
          for (h in a)
            if ("$" !== h.charAt(0) && Ka(a[h], b, d, !0)) return !0;
          return e ? !1 : Ka(a, b, d, !1)
        }
        if ("object" === g) {
          for (h in b)
            if (e = b[h], !z(e) && !q(e) && (f = "$" === h, !Ka(f ? a : a[h], e, d, f, f))) return !1;
          return !0
        }
        return d(a, b);
      case "function":
        return !1;
      default:
        return d(a, b)
    }
  }

  function hc(a) {
    return null === a ? "null" : typeof a
  }

  function yd(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c, e) {
      q(c) && (c = b.CURRENCY_SYM);
      q(e) && (e = b.PATTERNS[1].maxFrac);
      return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP,
        e).replace(/\u00A4/g, c)
    }
  }

  function Ad(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c) {
      return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
    }
  }

  function Cd(a, b, d, c, e) {
    if (H(a)) return "";
    var f = 0 > a;
    a = Math.abs(a);
    var g = Infinity === a;
    if (!g && !isFinite(a)) return "";
    var h = a + "",
      k = "",
      l = !1,
      m = [];
    g && (k = "\u221e");
    if (!g && -1 !== h.indexOf("e")) {
      var r = h.match(/([\d\.]+)e(-?)(\d+)/);
      r && "-" == r[2] && r[3] > e + 1 ? a = 0 : (k = h, l = !0)
    }
    if (g || l) 0 < e && 1 > a && (k = a.toFixed(e), a = parseFloat(k), k = k.replace(ic, c));
    else {
      g = (h.split(ic)[1] || "").length;
      q(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac));
      a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
      var g = ("" + a).split(ic),
        h = g[0],
        g = g[1] || "",
        r = 0,
        t = b.lgSize,
        n = b.gSize;
      if (h.length >= t + n)
        for (r = h.length - t, l = 0; l < r; l++) 0 === (r - l) % n && 0 !== l && (k += d), k += h.charAt(l);
      for (l = r; l < h.length; l++) 0 === (h.length - l) % t && 0 !== l && (k += d), k += h.charAt(l);
      for (; g.length < e;) g += "0";
      e && "0" !== e && (k += c + g.substr(0, e))
    }
    0 === a && (f = !1);
    m.push(f ? b.negPre : b.posPre, k, f ? b.negSuf : b.posSuf);
    return m.join("")
  }

  function Gb(a, b, d) {
    var c = "";
    0 > a && (c = "-", a = -a);
    for (a = "" + a; a.length < b;) a = "0" + a;
    d && (a = a.substr(a.length - b));
    return c + a
  }

  function ca(a, b, d, c) {
    d = d || 0;
    return function(e) {
      e = e["get" + a]();
      if (0 < d || e > -d) e += d;
      0 === e && -12 == d && (e = 12);
      return Gb(e, b, c)
    }
  }

  function Hb(a, b) {
    return function(d, c) {
      var e = d["get" + a](),
        f = sb(b ? "SHORT" + a : a);
      return c[f][e]
    }
  }

  function Dd(a) {
    var b = (new Date(a, 0, 1)).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b)
  }

  function Ed(a) {
    return function(b) {
      var d = Dd(b.getFullYear());
      b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) -
        +d;
      b = 1 + Math.round(b / 6048E5);
      return Gb(b, a)
    }
  }

  function jc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
  }

  function zd(a) {
    function b(a) {
      var b;
      if (b = a.match(d)) {
        a = new Date(0);
        var f = 0,
          g = 0,
          h = b[8] ? a.setUTCFullYear : a.setFullYear,
          k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = ea(b[9] + b[10]), g = ea(b[9] + b[11]));
        h.call(a, ea(b[1]), ea(b[2]) - 1, ea(b[3]));
        f = ea(b[4] || 0) - f;
        g = ea(b[5] || 0) - g;
        h = ea(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        k.call(a, f, g, h, b)
      }
      return a
    }
    var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function(c, d, f) {
      var g = "",
        h = [],
        k, l;
      d = d || "mediumDate";
      d = a.DATETIME_FORMATS[d] || d;
      E(c) && (c = hg.test(c) ? ea(c) : b(c));
      Q(c) && (c = new Date(c));
      if (!da(c) || !isFinite(c.getTime())) return c;
      for (; d;)(l = ig.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      var m = c.getTimezoneOffset();
      f && (m = vc(f, c.getTimezoneOffset()), c = Pb(c, f, !0));
      n(h, function(b) {
        k = jg[b];
        g += k ? k(c, a.DATETIME_FORMATS, m) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      });
      return g
    }
  }

  function cg() {
    return function(a, b) {
      q(b) && (b = 2);
      return db(a, b)
    }
  }

  function dg() {
    return function(a,
      b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : ea(b);
      if (isNaN(b)) return a;
      Q(a) && (a = a.toString());
      if (!I(a) && !E(a)) return a;
      d = !d || isNaN(d) ? 0 : ea(d);
      d = 0 > d ? Math.max(0, a.length + d) : d;
      return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d)
    }
  }

  function Bd(a) {
    function b(b, d) {
      d = d ? -1 : 1;
      return b.map(function(b) {
        var c = 1,
          h = Ya;
        if (z(b)) h = b;
        else if (E(b)) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
          if ("" !== b && (h = a(b), h.constant)) var k = h(),
            h = function(a) {
              return a[k]
            }
        }
        return {
          get: h,
          descending: c * d
        }
      })
    }

    function d(a) {
      switch (typeof a) {
        case "number":
        case "boolean":
        case "string":
          return !0;
        default:
          return !1
      }
    }
    return function(a, e, f) {
      if (!za(a)) return a;
      I(e) || (e = [e]);
      0 === e.length && (e = ["+"]);
      var g = b(e, f);
      g.push({
        get: function() {
          return {}
        },
        descending: f ? -1 : 1
      });
      a = Array.prototype.map.call(a, function(a, b) {
        return {
          value: a,
          predicateValues: g.map(function(c) {
            var e = c.get(a);
            c = typeof e;
            if (null === e) c = "string", e = "null";
            else if ("string" === c) e = e.toLowerCase();
            else if ("object" === c) a: {
              if ("function" === typeof e.valueOf &&
                (e = e.valueOf(), d(e))) break a;
              if (qc(e) && (e = e.toString(), d(e))) break a;e = b
            }
            return {
              value: e,
              type: c
            }
          })
        }
      });
      a.sort(function(a, b) {
        for (var c = 0, d = 0, e = g.length; d < e; ++d) {
          var c = a.predicateValues[d],
            f = b.predicateValues[d],
            n = 0;
          c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ? -1 : 1;
          if (c = n * g[d].descending) break
        }
        return c
      });
      return a = a.map(function(a) {
        return a.value
      })
    }
  }

  function La(a) {
    z(a) && (a = {
      link: a
    });
    a.restrict = a.restrict || "AC";
    return na(a)
  }

  function Fd(a, b, d, c, e) {
    var f = this,
      g = [];
    f.$error = {};
    f.$$success = {};
    f.$pending = u;
    f.$name = e(b.name || b.ngForm || "")(d);
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    f.$submitted = !1;
    f.$$parentForm = Ib;
    f.$rollbackViewValue = function() {
      n(g, function(a) {
        a.$rollbackViewValue()
      })
    };
    f.$commitViewValue = function() {
      n(g, function(a) {
        a.$commitViewValue()
      })
    };
    f.$addControl = function(a) {
      Ra(a.$name, "input");
      g.push(a);
      a.$name && (f[a.$name] = a);
      a.$$parentForm = f
    };
    f.$$renameControl = function(a, b) {
      var c = a.$name;
      f[c] === a && delete f[c];
      f[b] = a;
      a.$name = b
    };
    f.$removeControl = function(a) {
      a.$name &&
        f[a.$name] === a && delete f[a.$name];
      n(f.$pending, function(b, c) {
        f.$setValidity(c, null, a)
      });
      n(f.$error, function(b, c) {
        f.$setValidity(c, null, a)
      });
      n(f.$$success, function(b, c) {
        f.$setValidity(c, null, a)
      });
      ab(g, a);
      a.$$parentForm = Ib
    };
    Gd({
      ctrl: this,
      $element: a,
      set: function(a, b, c) {
        var d = a[b];
        d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
      },
      unset: function(a, b, c) {
        var d = a[b];
        d && (ab(d, c), 0 === d.length && delete a[b])
      },
      $animate: c
    });
    f.$setDirty = function() {
      c.removeClass(a, Wa);
      c.addClass(a, Jb);
      f.$dirty = !0;
      f.$pristine = !1;
      f.$$parentForm.$setDirty()
    };
    f.$setPristine = function() {
      c.setClass(a, Wa, Jb + " ng-submitted");
      f.$dirty = !1;
      f.$pristine = !0;
      f.$submitted = !1;
      n(g, function(a) {
        a.$setPristine()
      })
    };
    f.$setUntouched = function() {
      n(g, function(a) {
        a.$setUntouched()
      })
    };
    f.$setSubmitted = function() {
      c.addClass(a, "ng-submitted");
      f.$submitted = !0;
      f.$$parentForm.$setSubmitted()
    }
  }

  function kc(a) {
    a.$formatters.push(function(b) {
      return a.$isEmpty(b) ? b : b.toString()
    })
  }

  function jb(a, b, d, c, e, f) {
    var g = F(b[0].type);
    if (!e.android) {
      var h = !1;
      b.on("compositionstart", function(a) {
        h = !0
      });
      b.on("compositionend", function() {
        h = !1;
        k()
      })
    }
    var k = function(a) {
      l && (f.defer.cancel(l), l = null);
      if (!h) {
        var e = b.val();
        a = a && a.type;
        "password" === g || d.ngTrim && "false" === d.ngTrim || (e = U(e));
        (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
      }
    };
    if (e.hasEvent("input")) b.on("input", k);
    else {
      var l, m = function(a, b, c) {
        l || (l = f.defer(function() {
          l = null;
          b && b.value === c || k(a)
        }))
      };
      b.on("keydown", function(a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
      });
      if (e.hasEvent("paste")) b.on("paste cut",
        m)
    }
    b.on("change", k);
    c.$render = function() {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
      b.val() !== a && b.val(a)
    }
  }

  function Kb(a, b) {
    return function(d, c) {
      var e, f;
      if (da(d)) return d;
      if (E(d)) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (kg.test(d)) return new Date(d);
        a.lastIndex = 0;
        if (e = a.exec(d)) return e.shift(), f = c ? {
          yyyy: c.getFullYear(),
          MM: c.getMonth() + 1,
          dd: c.getDate(),
          HH: c.getHours(),
          mm: c.getMinutes(),
          ss: c.getSeconds(),
          sss: c.getMilliseconds() / 1E3
        } : {
          yyyy: 1970,
          MM: 1,
          dd: 1,
          HH: 0,
          mm: 0,
          ss: 0,
          sss: 0
        }, n(e, function(a, c) {
          c < b.length && (f[b[c]] = +a)
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
      }
      return NaN
    }
  }

  function kb(a, b, d, c) {
    return function(e, f, g, h, k, l, m) {
      function r(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime())
      }

      function n(a) {
        return y(a) && !da(a) ? d(a) || u : a
      }
      Hd(e, f, g, h);
      jb(e, f, g, h, k, l);
      var A = h && h.$options && h.$options.timezone,
        v;
      h.$$parserName = a;
      h.$parsers.push(function(a) {
        return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, v), A && (a = Pb(a, A)), a) : u
      });
      h.$formatters.push(function(a) {
        if (a &&
          !da(a)) throw lb("datefmt", a);
        if (r(a)) return (v = a) && A && (v = Pb(v, A, !0)), m("date")(a, c, A);
        v = null;
        return ""
      });
      if (y(g.min) || g.ngMin) {
        var s;
        h.$validators.min = function(a) {
          return !r(a) || q(s) || d(a) >= s
        };
        g.$observe("min", function(a) {
          s = n(a);
          h.$validate()
        })
      }
      if (y(g.max) || g.ngMax) {
        var p;
        h.$validators.max = function(a) {
          return !r(a) || q(p) || d(a) <= p
        };
        g.$observe("max", function(a) {
          p = n(a);
          h.$validate()
        })
      }
    }
  }

  function Hd(a, b, d, c) {
    (c.$$hasNativeValidators = H(b[0].validity)) && c.$parsers.push(function(a) {
      var c = b.prop("validity") || {};
      return c.badInput && !c.typeMismatch ? u : a
    })
  }

  function Id(a, b, d, c, e) {
    if (y(c)) {
      a = a(c);
      if (!a.constant) throw lb("constexpr", d, c);
      return a(b)
    }
    return e
  }

  function lc(a, b) {
    a = "ngClass" + a;
    return ["$animate", function(d) {
      function c(a, b) {
        var c = [],
          d = 0;
        a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++)
            if (e == b[m]) continue a;
          c.push(e)
        }
        return c
      }

      function e(a) {
        var b = [];
        return I(a) ? (n(a, function(a) {
          b = b.concat(e(a))
        }), b) : E(a) ? a.split(" ") : H(a) ? (n(a, function(a, c) {
          a && (b = b.concat(c.split(" ")))
        }), b) : a
      }
      return {
        restrict: "AC",
        link: function(f, g, h) {
          function k(a, b) {
            var c = g.data("$classCounts") || $(),
              d = [];
            n(a, function(a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
            });
            g.data("$classCounts", c);
            return d.join(" ")
          }

          function l(a) {
            if (!0 === b || f.$index % 2 === b) {
              var l = e(a || []);
              if (!m) {
                var n = k(l, 1);
                h.$addClass(n)
              } else if (!ma(a, m)) {
                var q = e(m),
                  n = c(l, q),
                  l = c(q, l),
                  n = k(n, 1),
                  l = k(l, -1);
                n && n.length && d.addClass(g, n);
                l && l.length && d.removeClass(g, l)
              }
            }
            m = ia(a)
          }
          var m;
          f.$watch(h[a], l, !0);
          h.$observe("class", function(b) {
            l(f.$eval(h[a]))
          });
          "ngClass" !==
          a && f.$watch("$index", function(c, d) {
            var g = c & 1;
            if (g !== (d & 1)) {
              var l = e(f.$eval(h[a]));
              g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
            }
          })
        }
      }
    }]
  }

  function Gd(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
    }

    function d(a, c) {
      a = a ? "-" + zc(a, "-") : "";
      b(mb + a, !0 === c);
      b(Jd + a, !1 === c)
    }
    var c = a.ctrl,
      e = a.$element,
      f = {},
      g = a.set,
      h = a.unset,
      k = a.$animate;
    f[Jd] = !(f[mb] = e.hasClass(mb));
    c.$setValidity = function(a, e, f) {
      q(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending &&
        h(c.$pending, a, f), Kd(c.$pending) && (c.$pending = u));
      $a(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
      c.$pending ? (b(Ld, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Ld, !1), c.$valid = Kd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));
      e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
      d(a, e);
      c.$$parentForm.$setValidity(a, e, c)
    }
  }

  function Kd(a) {
    if (a)
      for (var b in a)
        if (a.hasOwnProperty(b)) return !1;
    return !0
  }
  var lg = /^\/(.+)\/([a-z]*)$/,
    F = function(a) {
      return E(a) ? a.toLowerCase() : a
    },
    qa = Object.prototype.hasOwnProperty,
    sb = function(a) {
      return E(a) ? a.toUpperCase() : a
    },
    Ha, B, oa, ra = [].slice,
    Pf = [].splice,
    mg = [].push,
    sa = Object.prototype.toString,
    rc = Object.getPrototypeOf,
    Aa = G("ng"),
    fa = S.angular || (S.angular = {}),
    Sb, nb = 0;
  Ha = X.documentMode;
  x.$inject = [];
  Ya.$inject = [];
  var I = Array.isArray,
    Vd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
    U = function(a) {
      return E(a) ? a.trim() : a
    },
    ud = function(a) {
      return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
        "\\$1").replace(/\x08/g, "\\x08")
    },
    Ba = function() {
      if (!y(Ba.rules)) {
        var a = X.querySelector("[ng-csp]") || X.querySelector("[data-ng-csp]");
        if (a) {
          var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
          Ba.rules = {
            noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
            noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
          }
        } else {
          a = Ba;
          try {
            new Function(""), b = !1
          } catch (d) {
            b = !0
          }
          a.rules = {
            noUnsafeEval: b,
            noInlineStyle: !1
          }
        }
      }
      return Ba.rules
    },
    pb = function() {
      if (y(pb.name_)) return pb.name_;
      var a, b, d = Oa.length,
        c, e;
      for (b = 0; b <
        d; ++b)
        if (c = Oa[b], a = X.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
          e = a.getAttribute(c + "jq");
          break
        }
      return pb.name_ = e
    },
    Oa = ["ng-", "data-ng-", "ng:", "x-ng-"],
    be = /[A-Z]/g,
    Ac = !1,
    Rb, Na = 3,
    fe = {
      full: "1.4.8",
      major: 1,
      minor: 4,
      dot: 8,
      codeName: "ice-manipulation"
    };
  N.expando = "ng339";
  var gb = N.cache = {},
    Ff = 1;
  N._data = function(a) {
    return this.cache[a[this.expando]] || {}
  };
  var Af = /([\:\-\_]+(.))/g,
    Bf = /^moz([A-Z])/,
    xb = {
      mouseleave: "mouseout",
      mouseenter: "mouseover"
    },
    Ub = G("jqLite"),
    Ef = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    Tb = /<|&#?\w+;/,
    Cf = /<([\w:-]+)/,
    Df = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ka = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ka.optgroup = ka.option;
  ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
  ka.th = ka.td;
  var Kf = Node.prototype.contains || function(a) {
      return !!(this.compareDocumentPosition(a) &
        16)
    },
    Pa = N.prototype = {
      ready: function(a) {
        function b() {
          d || (d = !0, a())
        }
        var d = !1;
        "complete" === X.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), N(S).on("load", b))
      },
      toString: function() {
        var a = [];
        n(this, function(b) {
          a.push("" + b)
        });
        return "[" + a.join(", ") + "]"
      },
      eq: function(a) {
        return 0 <= a ? B(this[a]) : B(this[this.length + a])
      },
      length: 0,
      push: mg,
      sort: [].sort,
      splice: [].splice
    },
    Cb = {};
  n("multiple selected checked disabled readOnly required open".split(" "), function(a) {
    Cb[F(a)] = a
  });
  var Rc = {};
  n("input select option textarea button form details".split(" "),
    function(a) {
      Rc[a] = !0
    });
  var Zc = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern"
  };
  n({
    data: Wb,
    removeData: vb,
    hasData: function(a) {
      for (var b in gb[a.ng339]) return !0;
      return !1
    }
  }, function(a, b) {
    N[b] = a
  });
  n({
    data: Wb,
    inheritedData: Bb,
    scope: function(a) {
      return B.data(a, "$scope") || Bb(a.parentNode || a, ["$isolateScope", "$scope"])
    },
    isolateScope: function(a) {
      return B.data(a, "$isolateScope") || B.data(a, "$isolateScopeNoTemplate")
    },
    controller: Oc,
    injector: function(a) {
      return Bb(a,
        "$injector")
    },
    removeAttr: function(a, b) {
      a.removeAttribute(b)
    },
    hasClass: yb,
    css: function(a, b, d) {
      b = fb(b);
      if (y(d)) a.style[b] = d;
      else return a.style[b]
    },
    attr: function(a, b, d) {
      var c = a.nodeType;
      if (c !== Na && 2 !== c && 8 !== c)
        if (c = F(b), Cb[c])
          if (y(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));
          else return a[b] || (a.attributes.getNamedItem(b) || x).specified ? c : u;
      else if (y(d)) a.setAttribute(b, d);
      else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? u : a
    },
    prop: function(a, b, d) {
      if (y(d)) a[b] = d;
      else return a[b]
    },
    text: function() {
      function a(a, d) {
        if (q(d)) {
          var c = a.nodeType;
          return 1 === c || c === Na ? a.textContent : ""
        }
        a.textContent = d
      }
      a.$dv = "";
      return a
    }(),
    val: function(a, b) {
      if (q(b)) {
        if (a.multiple && "select" === ta(a)) {
          var d = [];
          n(a.options, function(a) {
            a.selected && d.push(a.value || a.text)
          });
          return 0 === d.length ? null : d
        }
        return a.value
      }
      a.value = b
    },
    html: function(a, b) {
      if (q(b)) return a.innerHTML;
      ub(a, !0);
      a.innerHTML = b
    },
    empty: Pc
  }, function(a, b) {
    N.prototype[b] = function(b, c) {
      var e, f, g = this.length;
      if (a !== Pc && q(2 == a.length && a !== yb && a !== Oc ?
          b : c)) {
        if (H(b)) {
          for (e = 0; e < g; e++)
            if (a === Wb) a(this[e], b);
            else
              for (f in b) a(this[e], f, b[f]);
          return this
        }
        e = a.$dv;
        g = q(e) ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);
          e = e ? e + h : h
        }
        return e
      }
      for (e = 0; e < g; e++) a(this[e], b, c);
      return this
    }
  });
  n({
    removeData: vb,
    on: function(a, b, d, c) {
      if (y(c)) throw Ub("onargs");
      if (Kc(a)) {
        c = wb(a, !0);
        var e = c.events,
          f = c.handle;
        f || (f = c.handle = Hf(a, e));
        c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
        for (var g = c.length, h = function(b, c, g) {
            var h = e[b];
            h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" ===
              b || g || a.addEventListener(b, f, !1));
            h.push(d)
          }; g--;) b = c[g], xb[b] ? (h(xb[b], Jf), h(b, u, !0)) : h(b)
      }
    },
    off: Nc,
    one: function(a, b, d) {
      a = B(a);
      a.on(b, function e() {
        a.off(b, d);
        a.off(b, e)
      });
      a.on(b, d)
    },
    replaceWith: function(a, b) {
      var d, c = a.parentNode;
      ub(a);
      n(new N(b), function(b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
        d = b
      })
    },
    children: function(a) {
      var b = [];
      n(a.childNodes, function(a) {
        1 === a.nodeType && b.push(a)
      });
      return b
    },
    contents: function(a) {
      return a.contentDocument || a.childNodes || []
    },
    append: function(a, b) {
      var d =
        a.nodeType;
      if (1 === d || 11 === d) {
        b = new N(b);
        for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d])
      }
    },
    prepend: function(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        n(new N(b), function(b) {
          a.insertBefore(b, d)
        })
      }
    },
    wrap: function(a, b) {
      b = B(b).eq(0).clone()[0];
      var d = a.parentNode;
      d && d.replaceChild(b, a);
      b.appendChild(a)
    },
    remove: Xb,
    detach: function(a) {
      Xb(a, !0)
    },
    after: function(a, b) {
      var d = a,
        c = a.parentNode;
      b = new N(b);
      for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];
        c.insertBefore(g, d.nextSibling);
        d = g
      }
    },
    addClass: Ab,
    removeClass: zb,
    toggleClass: function(a, b, d) {
      b && n(b.split(" "), function(b) {
        var e = d;
        q(e) && (e = !yb(a, b));
        (e ? Ab : zb)(a, b)
      })
    },
    parent: function(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null
    },
    next: function(a) {
      return a.nextElementSibling
    },
    find: function(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : []
    },
    clone: Vb,
    triggerHandler: function(a, b, d) {
      var c, e, f = b.type || b,
        g = wb(a);
      if (g = (g = g && g.events) && g[f]) c = {
        preventDefault: function() {
          this.defaultPrevented = !0
        },
        isDefaultPrevented: function() {
          return !0 === this.defaultPrevented
        },
        stopImmediatePropagation: function() {
          this.immediatePropagationStopped = !0
        },
        isImmediatePropagationStopped: function() {
          return !0 === this.immediatePropagationStopped
        },
        stopPropagation: x,
        type: f,
        target: a
      }, b.type && (c = M(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], n(b, function(b) {
        c.isImmediatePropagationStopped() || b.apply(a, e)
      })
    }
  }, function(a, b) {
    N.prototype[b] = function(b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) q(f) ? (f = a(this[g], b, c, e), y(f) && (f = B(f))) : Mc(f, a(this[g], b, c, e));
      return y(f) ? f : this
    };
    N.prototype.bind = N.prototype.on;
    N.prototype.unbind = N.prototype.off
  });
  Sa.prototype = {
    put: function(a, b) {
      this[Ca(a, this.nextUid)] = b
    },
    get: function(a) {
      return this[Ca(a, this.nextUid)]
    },
    remove: function(a) {
      var b = this[a = Ca(a, this.nextUid)];
      delete this[a];
      return b
    }
  };
  var yf = [function() {
      this.$get = [function() {
        return Sa
      }]
    }],
    Tc = /^[^\(]*\(\s*([^\)]*)\)/m,
    ng = /,/,
    og = /^\s*(_?)(\S+?)\1\s*$/,
    Sc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
    Da = G("$injector");
  eb.$$annotate = function(a, b, d) {
    var c;
    if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];
        if (a.length) {
          if (b) throw E(d) &&
            d || (d = a.name || Lf(a)), Da("strictdi", d);
          b = a.toString().replace(Sc, "");
          b = b.match(Tc);
          n(b[1].split(ng), function(a) {
            a.replace(og, function(a, b, d) {
              c.push(d)
            })
          })
        }
        a.$inject = c
      }
    } else I(a) ? (b = a.length - 1, Qa(a[b], "fn"), c = a.slice(0, b)) : Qa(a, "fn", !0);
    return c
  };
  var Md = G("$animate"),
    Ue = function() {
      this.$get = ["$q", "$$rAF", function(a, b) {
        function d() {}
        d.all = x;
        d.chain = x;
        d.prototype = {
          end: x,
          cancel: x,
          resume: x,
          pause: x,
          complete: x,
          then: function(c, d) {
            return a(function(a) {
              b(function() {
                a()
              })
            }).then(c, d)
          }
        };
        return d
      }]
    },
    Te = function() {
      var a =
        new Sa,
        b = [];
      this.$get = ["$$AnimateRunner", "$rootScope", function(d, c) {
        function e(a, b, c) {
          var d = !1;
          b && (b = E(b) ? b.split(" ") : I(b) ? b : [], n(b, function(b) {
            b && (d = !0, a[b] = c)
          }));
          return d
        }

        function f() {
          n(b, function(b) {
            var c = a.get(b);
            if (c) {
              var d = Mf(b.attr("class")),
                e = "",
                f = "";
              n(c, function(a, b) {
                a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
              });
              n(b, function(a) {
                e && Ab(a, e);
                f && zb(a, f)
              });
              a.remove(b)
            }
          });
          b.length = 0
        }
        return {
          enabled: x,
          on: x,
          off: x,
          pin: x,
          push: function(g, h, k, l) {
            l && l();
            k = k || {};
            k.from && g.css(k.from);
            k.to && g.css(k.to);
            if (k.addClass || k.removeClass)
              if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
            return new d
          }
        }
      }]
    },
    Re = ["$provide", function(a) {
      var b = this;
      this.$$registeredAnimations = Object.create(null);
      this.register = function(d, c) {
        if (d && "." !== d.charAt(0)) throw Md("notcsel", d);
        var e = d + "-animation";
        b.$$registeredAnimations[d.substr(1)] = e;
        a.factory(e, c)
      };
      this.classNameFilter = function(a) {
        if (1 === arguments.length && (this.$$classNameFilter =
            a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Md("nongcls", "ng-animate");
        return this.$$classNameFilter
      };
      this.$get = ["$$animateQueue", function(a) {
        function b(a, c, d) {
          if (d) {
            var h;
            a: {
              for (h = 0; h < d.length; h++) {
                var k = d[h];
                if (1 === k.nodeType) {
                  h = k;
                  break a
                }
              }
              h = void 0
            }!h || h.parentNode || h.previousElementSibling || (d = null)
          }
          d ? d.after(a) : c.prepend(a)
        }
        return {
          on: a.on,
          off: a.off,
          pin: a.pin,
          enabled: a.enabled,
          cancel: function(a) {
            a.end && a.end()
          },
          enter: function(e, f, g, h) {
            f =
              f && B(f);
            g = g && B(g);
            f = f || g.parent();
            b(e, f, g);
            return a.push(e, "enter", Ea(h))
          },
          move: function(e, f, g, h) {
            f = f && B(f);
            g = g && B(g);
            f = f || g.parent();
            b(e, f, g);
            return a.push(e, "move", Ea(h))
          },
          leave: function(b, c) {
            return a.push(b, "leave", Ea(c), function() {
              b.remove()
            })
          },
          addClass: function(b, c, g) {
            g = Ea(g);
            g.addClass = hb(g.addclass, c);
            return a.push(b, "addClass", g)
          },
          removeClass: function(b, c, g) {
            g = Ea(g);
            g.removeClass = hb(g.removeClass, c);
            return a.push(b, "removeClass", g)
          },
          setClass: function(b, c, g, h) {
            h = Ea(h);
            h.addClass = hb(h.addClass,
              c);
            h.removeClass = hb(h.removeClass, g);
            return a.push(b, "setClass", h)
          },
          animate: function(b, c, g, h, k) {
            k = Ea(k);
            k.from = k.from ? M(k.from, c) : c;
            k.to = k.to ? M(k.to, g) : g;
            k.tempClasses = hb(k.tempClasses, h || "ng-inline-animate");
            return a.push(b, "animate", k)
          }
        }
      }]
    }],
    Se = function() {
      this.$get = ["$$rAF", "$q", function(a, b) {
        var d = function() {};
        d.prototype = {
          done: function(a) {
            this.defer && this.defer[!0 === a ? "reject" : "resolve"]()
          },
          end: function() {
            this.done()
          },
          cancel: function() {
            this.done(!0)
          },
          getPromise: function() {
            this.defer || (this.defer =
              b.defer());
            return this.defer.promise
          },
          then: function(a, b) {
            return this.getPromise().then(a, b)
          },
          "catch": function(a) {
            return this.getPromise()["catch"](a)
          },
          "finally": function(a) {
            return this.getPromise()["finally"](a)
          }
        };
        return function(b, e) {
          function f() {
            a(function() {
              e.addClass && (b.addClass(e.addClass), e.addClass = null);
              e.removeClass && (b.removeClass(e.removeClass), e.removeClass = null);
              e.to && (b.css(e.to), e.to = null);
              g || h.done();
              g = !0
            });
            return h
          }
          e.cleanupStyles && (e.from = e.to = null);
          e.from && (b.css(e.from), e.from =
            null);
          var g, h = new d;
          return {
            start: f,
            end: f
          }
        }
      }]
    },
    ha = G("$compile");
  Cc.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Vc = /^((?:x|data)[\:\-_])/i,
    Qf = G("$controller"),
    Uc = /^(\S+)(\s+as\s+(\w+))?$/,
    $e = function() {
      this.$get = ["$document", function(a) {
        return function(b) {
          b ? !b.nodeType && b instanceof B && (b = b[0]) : b = a[0].body;
          return b.offsetWidth + 1
        }
      }]
    },
    $c = "application/json",
    ac = {
      "Content-Type": $c + ";charset=utf-8"
    },
    Sf = /^\[|^\{(?!\{)/,
    Tf = {
      "[": /]$/,
      "{": /}$/
    },
    Rf = /^\)\]\}',?\n/,
    pg = G("$http"),
    dd = function(a) {
      return function() {
        throw pg("legacy",
          a);
      }
    },
    Ja = fa.$interpolateMinErr = G("$interpolate");
  Ja.throwNoconcat = function(a) {
    throw Ja("noconcat", a);
  };
  Ja.interr = function(a, b) {
    return Ja("interr", a, b.toString())
  };
  var qg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    Vf = {
      http: 80,
      https: 443,
      ftp: 21
    },
    Db = G("$location"),
    rg = {
      $$html5: !1,
      $$replace: !1,
      absUrl: Eb("$$absUrl"),
      url: function(a) {
        if (q(a)) return this.$$url;
        var b = qg.exec(a);
        (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
        (b[2] || b[1] || "" === a) && this.search(b[3] || "");
        this.hash(b[5] || "");
        return this
      },
      protocol: Eb("$$protocol"),
      host: Eb("$$host"),
      port: Eb("$$port"),
      path: id("$$path", function(a) {
        a = null !== a ? a.toString() : "";
        return "/" == a.charAt(0) ? a : "/" + a
      }),
      search: function(a, b) {
        switch (arguments.length) {
          case 0:
            return this.$$search;
          case 1:
            if (E(a) || Q(a)) a = a.toString(), this.$$search = xc(a);
            else if (H(a)) a = bb(a, {}), n(a, function(b, c) {
              null == b && delete a[c]
            }), this.$$search = a;
            else throw Db("isrcharg");
            break;
          default:
            q(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
        }
        this.$$compose();
        return this
      },
      hash: id("$$hash", function(a) {
        return null !==
          a ? a.toString() : ""
      }),
      replace: function() {
        this.$$replace = !0;
        return this
      }
    };
  n([hd, dc, cc], function(a) {
    a.prototype = Object.create(rg);
    a.prototype.state = function(b) {
      if (!arguments.length) return this.$$state;
      if (a !== cc || !this.$$html5) throw Db("nostate");
      this.$$state = q(b) ? null : b;
      return this
    }
  });
  var ba = G("$parse"),
    Wf = Function.prototype.call,
    Xf = Function.prototype.apply,
    Yf = Function.prototype.bind,
    Lb = $();
  n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
    Lb[a] = !0
  });
  var sg = {
      n: "\n",
      f: "\f",
      r: "\r",
      t: "\t",
      v: "\v",
      "'": "'",
      '"': '"'
    },
    fc = function(a) {
      this.options = a
    };
  fc.prototype = {
    constructor: fc,
    lex: function(a) {
      this.text = a;
      this.index = 0;
      for (this.tokens = []; this.index < this.text.length;)
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
        else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
      else if (this.isIdent(a)) this.readIdent();
      else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
        index: this.index,
        text: a
      }), this.index++;
      else if (this.isWhitespace(a)) this.index++;
      else {
        var b = a + this.peek(),
          d = b + this.peek(2),
          c = Lb[b],
          e = Lb[d];
        Lb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
          index: this.index,
          text: a,
          operator: !0
        }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
      }
      return this.tokens
    },
    is: function(a, b) {
      return -1 !== b.indexOf(a)
    },
    peek: function(a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    },
    isNumber: function(a) {
      return "0" <= a && "9" >= a && "string" === typeof a
    },
    isWhitespace: function(a) {
      return " " === a || "\r" === a ||
        "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    },
    isIdent: function(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    },
    isExpOperator: function(a) {
      return "-" === a || "+" === a || this.isNumber(a)
    },
    throwError: function(a, b, d) {
      d = d || this.index;
      b = y(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
      throw ba("lexerr", a, b, this.text);
    },
    readNumber: function() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = F(this.text.charAt(this.index));
        if ("." == d || this.isNumber(d)) a += d;
        else {
          var c = this.peek();
          if ("e" == d && this.isExpOperator(c)) a += d;
          else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;
          else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;
          else this.throwError("Invalid exponent")
        }
        this.index++
      }
      this.tokens.push({
        index: b,
        text: a,
        constant: !0,
        value: Number(a)
      })
    },
    readIdent: function() {
      for (var a = this.index; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);
        if (!this.isIdent(b) && !this.isNumber(b)) break;
        this.index++
      }
      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      })
    },
    readString: function(a) {
      var b = this.index;
      this.index++;
      for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
          c = c + f;
        if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += sg[f] || f, e = !1;
        else if ("\\" === f) e = !0;
        else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: b,
              text: c,
              constant: !0,
              value: d
            });
            return
          }
          d += f
        }
        this.index++
      }
      this.throwError("Unterminated quote", b)
    }
  };
  var s = function(a, b) {
    this.lexer = a;
    this.options = b
  };
  s.Program = "Program";
  s.ExpressionStatement = "ExpressionStatement";
  s.AssignmentExpression = "AssignmentExpression";
  s.ConditionalExpression = "ConditionalExpression";
  s.LogicalExpression = "LogicalExpression";
  s.BinaryExpression = "BinaryExpression";
  s.UnaryExpression = "UnaryExpression";
  s.CallExpression = "CallExpression";
  s.MemberExpression = "MemberExpression";
  s.Identifier = "Identifier";
  s.Literal =
    "Literal";
  s.ArrayExpression = "ArrayExpression";
  s.Property = "Property";
  s.ObjectExpression = "ObjectExpression";
  s.ThisExpression = "ThisExpression";
  s.NGValueParameter = "NGValueParameter";
  s.prototype = {
    ast: function(a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.program();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      return a
    },
    program: function() {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
          type: s.Program,
          body: a
        }
    },
    expressionStatement: function() {
      return {
        type: s.ExpressionStatement,
        expression: this.filterChain()
      }
    },
    filterChain: function() {
      for (var a = this.expression(); this.expect("|");) a = this.filter(a);
      return a
    },
    expression: function() {
      return this.assignment()
    },
    assignment: function() {
      var a = this.ternary();
      this.expect("=") && (a = {
        type: s.AssignmentExpression,
        left: a,
        right: this.assignment(),
        operator: "="
      });
      return a
    },
    ternary: function() {
      var a = this.logicalOR(),
        b, d;
      return this.expect("?") && (b = this.expression(), this.consume(":")) ?
        (d = this.expression(), {
          type: s.ConditionalExpression,
          test: a,
          alternate: b,
          consequent: d
        }) : a
    },
    logicalOR: function() {
      for (var a = this.logicalAND(); this.expect("||");) a = {
        type: s.LogicalExpression,
        operator: "||",
        left: a,
        right: this.logicalAND()
      };
      return a
    },
    logicalAND: function() {
      for (var a = this.equality(); this.expect("&&");) a = {
        type: s.LogicalExpression,
        operator: "&&",
        left: a,
        right: this.equality()
      };
      return a
    },
    equality: function() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.relational()
      };
      return a
    },
    relational: function() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.additive()
      };
      return a
    },
    additive: function() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.multiplicative()
      };
      return a
    },
    multiplicative: function() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = {
        type: s.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.unary()
      };
      return a
    },
    unary: function() {
      var a;
      return (a = this.expect("+", "-", "!")) ? {
        type: s.UnaryExpression,
        operator: a.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary()
    },
    primary: function() {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = bb(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() :
        this.throwError("not a primary expression", this.peek());
      for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
        type: s.CallExpression,
        callee: a,
        arguments: this.parseArguments()
      }, this.consume(")")) : "[" === b.text ? (a = {
        type: s.MemberExpression,
        object: a,
        property: this.expression(),
        computed: !0
      }, this.consume("]")) : "." === b.text ? a = {
        type: s.MemberExpression,
        object: a,
        property: this.identifier(),
        computed: !1
      } : this.throwError("IMPOSSIBLE");
      return a
    },
    filter: function(a) {
      a = [a];
      for (var b = {
          type: s.CallExpression,
          callee: this.identifier(),
          arguments: a,
          filter: !0
        }; this.expect(":");) a.push(this.expression());
      return b
    },
    parseArguments: function() {
      var a = [];
      if (")" !== this.peekToken().text) {
        do a.push(this.expression()); while (this.expect(","))
      }
      return a
    },
    identifier: function() {
      var a = this.consume();
      a.identifier || this.throwError("is not a valid identifier", a);
      return {
        type: s.Identifier,
        name: a.text
      }
    },
    constant: function() {
      return {
        type: s.Literal,
        value: this.consume().value
      }
    },
    arrayDeclaration: function() {
      var a = [];
      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;
          a.push(this.expression())
        } while (this.expect(","))
      }
      this.consume("]");
      return {
        type: s.ArrayExpression,
        elements: a
      }
    },
    object: function() {
      var a = [],
        b;
      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;
          b = {
            type: s.Property,
            kind: "init"
          };
          this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());
          this.consume(":");
          b.value = this.expression();
          a.push(b)
        } while (this.expect(","))
      }
      this.consume("}");
      return {
        type: s.ObjectExpression,
        properties: a
      }
    },
    throwError: function(a, b) {
      throw ba("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    },
    consume: function(a) {
      if (0 === this.tokens.length) throw ba("ueoe", this.text);
      var b = this.expect(a);
      b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
      return b
    },
    peekToken: function() {
      if (0 === this.tokens.length) throw ba("ueoe", this.text);
      return this.tokens[0]
    },
    peek: function(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c)
    },
    peekAhead: function(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var f = a.text;
        if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a
      }
      return !1
    },
    expect: function(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
    },
    constants: {
      "true": {
        type: s.Literal,
        value: !0
      },
      "false": {
        type: s.Literal,
        value: !1
      },
      "null": {
        type: s.Literal,
        value: null
      },
      undefined: {
        type: s.Literal,
        value: u
      },
      "this": {
        type: s.ThisExpression
      }
    }
  };
  rd.prototype = {
    compile: function(a, b) {
      var d = this,
        c = this.astBuilder.ast(a);
      this.state = {
        nextId: 0,
        filters: {},
        expensiveChecks: b,
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      };
      W(c, d.$filter);
      var e = "",
        f;
      this.stage = "assign";
      if (f = pd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
      f = nd(c.body);
      d.stage = "inputs";
      n(f, function(a, b) {
        var c = "fn" + b;
        d.state[c] = {
          vars: [],
          body: [],
          own: {}
        };
        d.state.computing = c;
        var e = d.nextId();
        d.recurse(a, e);
        d.return_(e);
        d.state.inputs.push(c);
        a.watchId = b
      });
      this.state.computing = "fn";
      this.stage = "main";
      this.recurse(c);
      e = '"' + this.USE + " " + this.STRICT +
        '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
      e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e))(this.$filter, Va, xa, kd, jd, ld, Zf, md, a);
      this.state = this.stage = u;
      e.literal = qd(c);
      e.constant = c.constant;
      return e
    },
    USE: "use",
    STRICT: "strict",
    watchFns: function() {
      var a = [],
        b = this.state.inputs,
        d = this;
      n(b, function(b) {
        a.push("var " + b + "=" + d.generateFunction(b,
          "s"))
      });
      b.length && a.push("fn.inputs=[" + b.join(",") + "];");
      return a.join("")
    },
    generateFunction: function(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
    },
    filterPrefix: function() {
      var a = [],
        b = this;
      n(this.state.filters, function(d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")")
      });
      return a.length ? "var " + a.join(",") + ";" : ""
    },
    varsPrefix: function(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
    },
    body: function(a) {
      return this.state[a].body.join("")
    },
    recurse: function(a, b,
      d, c, e, f) {
      var g, h, k = this,
        l, m;
      c = c || x;
      if (!f && y(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));
      else switch (a.type) {
        case s.Program:
          n(a.body, function(b, c) {
            k.recurse(b.expression, u, u, function(a) {
              h = a
            });
            c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
          });
          break;
        case s.Literal:
          m = this.escape(a.value);
          this.assign(b, m);
          c(m);
          break;
        case s.UnaryExpression:
          this.recurse(a.argument, u, u, function(a) {
            h = a
          });
          m = a.operator + "(" + this.ifDefined(h,
            0) + ")";
          this.assign(b, m);
          c(m);
          break;
        case s.BinaryExpression:
          this.recurse(a.left, u, u, function(a) {
            g = a
          });
          this.recurse(a.right, u, u, function(a) {
            h = a
          });
          m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
          this.assign(b, m);
          c(m);
          break;
        case s.LogicalExpression:
          b = b || this.nextId();
          k.recurse(a.left, b);
          k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
          c(b);
          break;
        case s.ConditionalExpression:
          b = b || this.nextId();
          k.recurse(a.test,
            b);
          k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
          c(b);
          break;
        case s.Identifier:
          b = b || this.nextId();
          d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
          Va(a.name);
          k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
            k.if_("inputs" === k.stage || "s", function() {
              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
              k.assign(b, k.nonComputedMember("s",
                a.name))
            })
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
          (k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(b);
          c(b);
          break;
        case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();
          b = b || this.nextId();
          k.recurse(a.object, g, u, function() {
            k.if_(k.notNull(g), function() {
              if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g,
                h)), k.assign(b, m), d && (d.computed = !0, d.name = h);
              else {
                Va(a.property.name);
                e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                m = k.nonComputedMember(g, a.property.name);
                if (k.state.expensiveChecks || Fb(a.property.name)) m = k.ensureSafeObject(m);
                k.assign(b, m);
                d && (d.computed = !1, d.name = a.property.name)
              }
            }, function() {
              k.assign(b, "undefined")
            });
            c(b)
          }, !!e);
          break;
        case s.CallExpression:
          b = b || this.nextId();
          a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments,
            function(a) {
              var b = k.nextId();
              k.recurse(a, b);
              l.push(b)
            }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function() {
            k.if_(k.notNull(h), function() {
                k.addEnsureSafeFunction(h);
                n(a.arguments, function(a) {
                  k.recurse(a, k.nextId(), u, function(a) {
                    l.push(k.ensureSafeObject(a))
                  })
                });
                g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                m = k.ensureSafeObject(m);
                k.assign(b, m)
              },
              function() {
                k.assign(b, "undefined")
              });
            c(b)
          }));
          break;
        case s.AssignmentExpression:
          h = this.nextId();
          g = {};
          if (!od(a.left)) throw ba("lval");
          this.recurse(a.left, u, g, function() {
            k.if_(k.notNull(g.context), function() {
              k.recurse(a.right, h);
              k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
              k.addEnsureSafeAssignContext(g.context);
              m = k.member(g.context, g.name, g.computed) + a.operator + h;
              k.assign(b, m);
              c(b || m)
            })
          }, 1);
          break;
        case s.ArrayExpression:
          l = [];
          n(a.elements, function(a) {
            k.recurse(a, k.nextId(), u, function(a) {
              l.push(a)
            })
          });
          m = "[" + l.join(",") + "]";
          this.assign(b, m);
          c(m);
          break;
        case s.ObjectExpression:
          l = [];
          n(a.properties, function(a) {
            k.recurse(a.value, k.nextId(), u, function(b) {
              l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
            })
          });
          m = "{" + l.join(",") + "}";
          this.assign(b, m);
          c(m);
          break;
        case s.ThisExpression:
          this.assign(b, "s");
          c("s");
          break;
        case s.NGValueParameter:
          this.assign(b, "v"), c("v")
      }
    },
    getHasOwnProperty: function(a, b) {
      var d = a + "." + b,
        c = this.current().own;
      c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" +
        this.escape(b) + " in " + a + ")"));
      return c[d]
    },
    assign: function(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a
    },
    filter: function(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
      return this.state.filters[a]
    },
    ifDefined: function(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")"
    },
    plus: function(a, b) {
      return "plus(" + a + "," + b + ")"
    },
    return_: function(a) {
      this.current().body.push("return ", a, ";")
    },
    if_: function(a, b, d) {
      if (!0 === a) b();
      else {
        var c = this.current().body;
        c.push("if(", a,
          "){");
        b();
        c.push("}");
        d && (c.push("else{"), d(), c.push("}"))
      }
    },
    not: function(a) {
      return "!(" + a + ")"
    },
    notNull: function(a) {
      return a + "!=null"
    },
    nonComputedMember: function(a, b) {
      return a + "." + b
    },
    computedMember: function(a, b) {
      return a + "[" + b + "]"
    },
    member: function(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
    },
    addEnsureSafeObject: function(a) {
      this.current().body.push(this.ensureSafeObject(a), ";")
    },
    addEnsureSafeMemberName: function(a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";")
    },
    addEnsureSafeFunction: function(a) {
      this.current().body.push(this.ensureSafeFunction(a), ";")
    },
    addEnsureSafeAssignContext: function(a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";")
    },
    ensureSafeObject: function(a) {
      return "ensureSafeObject(" + a + ",text)"
    },
    ensureSafeMemberName: function(a) {
      return "ensureSafeMemberName(" + a + ",text)"
    },
    ensureSafeFunction: function(a) {
      return "ensureSafeFunction(" + a + ",text)"
    },
    getStringValue: function(a) {
      this.assign(a, "getStringValue(" + a + ",text)")
    },
    ensureSafeAssignContext: function(a) {
      return "ensureSafeAssignContext(" +
        a + ",text)"
    },
    lazyRecurse: function(a, b, d, c, e, f) {
      var g = this;
      return function() {
        g.recurse(a, b, d, c, e, f)
      }
    },
    lazyAssign: function(a, b) {
      var d = this;
      return function() {
        d.assign(a, b)
      }
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    },
    escape: function(a) {
      if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (Q(a)) return a.toString();
      if (!0 === a) return "true";
      if (!1 === a) return "false";
      if (null === a) return "null";
      if ("undefined" ===
        typeof a) return "undefined";
      throw ba("esc");
    },
    nextId: function(a, b) {
      var d = "v" + this.state.nextId++;
      a || this.current().vars.push(d + (b ? "=" + b : ""));
      return d
    },
    current: function() {
      return this.state[this.state.computing]
    }
  };
  sd.prototype = {
    compile: function(a, b) {
      var d = this,
        c = this.astBuilder.ast(a);
      this.expression = a;
      this.expensiveChecks = b;
      W(c, d.$filter);
      var e, f;
      if (e = pd(c)) f = this.recurse(e);
      e = nd(c.body);
      var g;
      e && (g = [], n(e, function(a, b) {
        var c = d.recurse(a);
        a.input = c;
        g.push(c);
        a.watchId = b
      }));
      var h = [];
      n(c.body, function(a) {
        h.push(d.recurse(a.expression))
      });
      e = 0 === c.body.length ? function() {} : 1 === c.body.length ? h[0] : function(a, b) {
        var c;
        n(h, function(d) {
          c = d(a, b)
        });
        return c
      };
      f && (e.assign = function(a, b, c) {
        return f(a, c, b)
      });
      g && (e.inputs = g);
      e.literal = qd(c);
      e.constant = c.constant;
      return e
    },
    recurse: function(a, b, d) {
      var c, e, f = this,
        g;
      if (a.input) return this.inputs(a.input, a.watchId);
      switch (a.type) {
        case s.Literal:
          return this.value(a.value, b);
        case s.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
        case s.BinaryExpression:
          return c = this.recurse(a.left),
            e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
        case s.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
        case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
        case s.Identifier:
          return Va(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Fb(a.name), b, d, f.expression);
        case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (Va(a.property.name,
            f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
        case s.CallExpression:
          return g = [], n(a.arguments, function(a) {
            g.push(f.recurse(a))
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function(a, c, d, f) {
            for (var r = [], n = 0; n < g.length; ++n) r.push(g[n](a, c, d, f));
            a = e.apply(u, r, f);
            return b ? {
              context: u,
              name: u,
              value: a
            } : a
          } : function(a,
            c, d, m) {
            var r = e(a, c, d, m),
              n;
            if (null != r.value) {
              xa(r.context, f.expression);
              kd(r.value, f.expression);
              n = [];
              for (var q = 0; q < g.length; ++q) n.push(xa(g[q](a, c, d, m), f.expression));
              n = xa(r.value.apply(r.context, n), f.expression)
            }
            return b ? {
              value: n
            } : n
          };
        case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right),
            function(a, d, g, m) {
              var n = c(a, d, g, m);
              a = e(a, d, g, m);
              xa(n.value, f.expression);
              ld(n.context);
              n.context[n.name] = a;
              return b ? {
                value: a
              } : a
            };
        case s.ArrayExpression:
          return g = [], n(a.elements, function(a) {
              g.push(f.recurse(a))
            }),
            function(a, c, d, e) {
              for (var f = [], n = 0; n < g.length; ++n) f.push(g[n](a, c, d, e));
              return b ? {
                value: f
              } : f
            };
        case s.ObjectExpression:
          return g = [], n(a.properties, function(a) {
              g.push({
                key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                value: f.recurse(a.value)
              })
            }),
            function(a, c, d, e) {
              for (var f = {}, n = 0; n < g.length; ++n) f[g[n].key] = g[n].value(a, c, d, e);
              return b ? {
                value: f
              } : f
            };
        case s.ThisExpression:
          return function(a) {
            return b ? {
              value: a
            } : a
          };
        case s.NGValueParameter:
          return function(a, c, d, e) {
            return b ? {
              value: d
            } : d
          }
      }
    },
    "unary+": function(a,
      b) {
      return function(d, c, e, f) {
        d = a(d, c, e, f);
        d = y(d) ? +d : 0;
        return b ? {
          value: d
        } : d
      }
    },
    "unary-": function(a, b) {
      return function(d, c, e, f) {
        d = a(d, c, e, f);
        d = y(d) ? -d : 0;
        return b ? {
          value: d
        } : d
      }
    },
    "unary!": function(a, b) {
      return function(d, c, e, f) {
        d = !a(d, c, e, f);
        return b ? {
          value: d
        } : d
      }
    },
    "binary+": function(a, b, d) {
      return function(c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = md(h, c);
        return d ? {
          value: h
        } : h
      }
    },
    "binary-": function(a, b, d) {
      return function(c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = (y(h) ? h : 0) - (y(c) ? c : 0);
        return d ? {
          value: h
        } : h
      }
    },
    "binary*": function(a,
      b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary/": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary%": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary===": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary!==": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary==": function(a, b,
      d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary!=": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary<": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary>": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary<=": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary>=": function(a, b, d) {
      return function(c,
        e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary&&": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "binary||": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);
        return d ? {
          value: c
        } : c
      }
    },
    "ternary?:": function(a, b, d, c) {
      return function(e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
        return c ? {
          value: e
        } : e
      }
    },
    value: function(a, b) {
      return function() {
        return b ? {
          context: u,
          name: u,
          value: a
        } : a
      }
    },
    identifier: function(a, b, d, c, e) {
      return function(f, g, h, k) {
        f =
          g && a in g ? g : f;
        c && 1 !== c && f && !f[a] && (f[a] = {});
        g = f ? f[a] : u;
        b && xa(g, e);
        return d ? {
          context: f,
          name: a,
          value: g
        } : g
      }
    },
    computedMember: function(a, b, d, c, e) {
      return function(f, g, h, k) {
        var l = a(f, g, h, k),
          m, n;
        null != l && (m = b(f, g, h, k), m = jd(m), Va(m, e), c && 1 !== c && l && !l[m] && (l[m] = {}), n = l[m], xa(n, e));
        return d ? {
          context: l,
          name: m,
          value: n
        } : n
      }
    },
    nonComputedMember: function(a, b, d, c, e, f) {
      return function(g, h, k, l) {
        g = a(g, h, k, l);
        e && 1 !== e && g && !g[b] && (g[b] = {});
        h = null != g ? g[b] : u;
        (d || Fb(b)) && xa(h, f);
        return c ? {
          context: g,
          name: b,
          value: h
        } : h
      }
    },
    inputs: function(a,
      b) {
      return function(d, c, e, f) {
        return f ? f[b] : a(d, c, e)
      }
    }
  };
  var gc = function(a, b, d) {
    this.lexer = a;
    this.$filter = b;
    this.options = d;
    this.ast = new s(this.lexer);
    this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b)
  };
  gc.prototype = {
    constructor: gc,
    parse: function(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks)
    }
  };
  $();
  $();
  var $f = Object.prototype.valueOf,
    ya = G("$sce"),
    la = {
      HTML: "html",
      CSS: "css",
      URL: "url",
      RESOURCE_URL: "resourceUrl",
      JS: "js"
    },
    ha = G("$compile"),
    Y = X.createElement("a"),
    wd = wa(S.location.href);
  xd.$inject = ["$document"];
  Jc.$inject = ["$provide"];
  yd.$inject = ["$locale"];
  Ad.$inject = ["$locale"];
  var ic = ".",
    jg = {
      yyyy: ca("FullYear", 4),
      yy: ca("FullYear", 2, 0, !0),
      y: ca("FullYear", 1),
      MMMM: Hb("Month"),
      MMM: Hb("Month", !0),
      MM: ca("Month", 2, 1),
      M: ca("Month", 1, 1),
      dd: ca("Date", 2),
      d: ca("Date", 1),
      HH: ca("Hours", 2),
      H: ca("Hours", 1),
      hh: ca("Hours", 2, -12),
      h: ca("Hours", 1, -12),
      mm: ca("Minutes", 2),
      m: ca("Minutes", 1),
      ss: ca("Seconds", 2),
      s: ca("Seconds", 1),
      sss: ca("Milliseconds", 3),
      EEEE: Hb("Day"),
      EEE: Hb("Day", !0),
      a: function(a, b) {
        return 12 >
          a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
      },
      Z: function(a, b, d) {
        a = -1 * d;
        return a = (0 <= a ? "+" : "") + (Gb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2))
      },
      ww: Ed(2),
      w: Ed(1),
      G: jc,
      GG: jc,
      GGG: jc,
      GGGG: function(a, b) {
        return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
      }
    },
    ig = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
    hg = /^\-?\d+$/;
  zd.$inject = ["$locale"];
  var eg = na(F),
    fg = na(sb);
  Bd.$inject = ["$parse"];
  var he = na({
      restrict: "E",
      compile: function(a, b) {
        if (!b.href && !b.xlinkHref) return function(a,
          b) {
          if ("a" === b[0].nodeName.toLowerCase()) {
            var e = "[object SVGAnimatedString]" === sa.call(b.prop("href")) ? "xlink:href" : "href";
            b.on("click", function(a) {
              b.attr(e) || a.preventDefault()
            })
          }
        }
      }
    }),
    tb = {};
  n(Cb, function(a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function(a) {
        e.$set(b, !!a)
      })
    }
    if ("multiple" != a) {
      var c = va("ng-" + b),
        e = d;
      "checked" === a && (e = function(a, b, e) {
        e.ngModel !== e[c] && d(a, b, e)
      });
      tb[c] = function() {
        return {
          restrict: "A",
          priority: 100,
          link: e
        }
      }
    }
  });
  n(Zc, function(a, b) {
    tb[b] = function() {
      return {
        priority: 100,
        link: function(a,
          c, e) {
          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(lg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));
            return
          }
          a.$watch(e[b], function(a) {
            e.$set(b, a)
          })
        }
      }
    }
  });
  n(["src", "srcset", "href"], function(a) {
    var b = va("ng-" + a);
    tb[b] = function() {
      return {
        priority: 99,
        link: function(d, c, e) {
          var f = a,
            g = a;
          "href" === a && "[object SVGAnimatedString]" === sa.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
          e.$observe(b, function(b) {
            b ? (e.$set(g, b), Ha && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
          })
        }
      }
    }
  });
  var Ib = {
    $addControl: x,
    $$renameControl: function(a, b) {
      a.$name = b
    },
    $removeControl: x,
    $setValidity: x,
    $setDirty: x,
    $setPristine: x,
    $setSubmitted: x
  };
  Fd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var Nd = function(a) {
      return ["$timeout", "$parse", function(b, d) {
        function c(a) {
          return "" === a ? d('this[""]').assign : d(a).assign || x
        }
        return {
          name: "form",
          restrict: a ? "EAC" : "E",
          require: ["form", "^^?form"],
          controller: Fd,
          compile: function(d, f) {
            d.addClass(Wa).addClass(mb);
            var g = f.name ? "name" : a && f.ngForm ? "ngForm" :
              !1;
            return {
              pre: function(a, d, e, f) {
                var n = f[0];
                if (!("action" in e)) {
                  var q = function(b) {
                    a.$apply(function() {
                      n.$commitViewValue();
                      n.$setSubmitted()
                    });
                    b.preventDefault()
                  };
                  d[0].addEventListener("submit", q, !1);
                  d.on("$destroy", function() {
                    b(function() {
                      d[0].removeEventListener("submit", q, !1)
                    }, 0, !1)
                  })
                }(f[1] || n.$$parentForm).$addControl(n);
                var s = g ? c(n.$name) : x;
                g && (s(a, n), e.$observe(g, function(b) {
                  n.$name !== b && (s(a, u), n.$$parentForm.$$renameControl(n, b), s = c(n.$name), s(a, n))
                }));
                d.on("$destroy", function() {
                  n.$$parentForm.$removeControl(n);
                  s(a, u);
                  M(n, Ib)
                })
              }
            }
          }
        }
      }]
    },
    ie = Nd(),
    ve = Nd(!0),
    kg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
    tg = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,
    ug = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    vg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
    Od = /^(\d{4})-(\d{2})-(\d{2})$/,
    Pd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    mc = /^(\d{4})-W(\d\d)$/,
    Qd = /^(\d{4})-(\d\d)$/,
    Rd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Sd = {
      text: function(a, b, d, c, e, f) {
        jb(a, b, d, c, e, f);
        kc(c)
      },
      date: kb("date", Od, Kb(Od, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
      "datetime-local": kb("datetimelocal", Pd, Kb(Pd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
      time: kb("time", Rd, Kb(Rd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
      week: kb("week", mc, function(a, b) {
        if (da(a)) return a;
        if (E(a)) {
          mc.lastIndex = 0;
          var d = mc.exec(a);
          if (d) {
            var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              h = 0,
              k = Dd(c),
              e = 7 * (e - 1);
            b && (d = b.getHours(), f =
              b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
            return new Date(c, 0, k.getDate() + e, d, f, g, h)
          }
        }
        return NaN
      }, "yyyy-Www"),
      month: kb("month", Qd, Kb(Qd, ["yyyy", "MM"]), "yyyy-MM"),
      number: function(a, b, d, c, e, f) {
        Hd(a, b, d, c);
        jb(a, b, d, c, e, f);
        c.$$parserName = "number";
        c.$parsers.push(function(a) {
          return c.$isEmpty(a) ? null : vg.test(a) ? parseFloat(a) : u
        });
        c.$formatters.push(function(a) {
          if (!c.$isEmpty(a)) {
            if (!Q(a)) throw lb("numfmt", a);
            a = a.toString()
          }
          return a
        });
        if (y(d.min) || d.ngMin) {
          var g;
          c.$validators.min = function(a) {
            return c.$isEmpty(a) ||
              q(g) || a >= g
          };
          d.$observe("min", function(a) {
            y(a) && !Q(a) && (a = parseFloat(a, 10));
            g = Q(a) && !isNaN(a) ? a : u;
            c.$validate()
          })
        }
        if (y(d.max) || d.ngMax) {
          var h;
          c.$validators.max = function(a) {
            return c.$isEmpty(a) || q(h) || a <= h
          };
          d.$observe("max", function(a) {
            y(a) && !Q(a) && (a = parseFloat(a, 10));
            h = Q(a) && !isNaN(a) ? a : u;
            c.$validate()
          })
        }
      },
      url: function(a, b, d, c, e, f) {
        jb(a, b, d, c, e, f);
        kc(c);
        c.$$parserName = "url";
        c.$validators.url = function(a, b) {
          var d = a || b;
          return c.$isEmpty(d) || tg.test(d)
        }
      },
      email: function(a, b, d, c, e, f) {
        jb(a, b, d, c, e, f);
        kc(c);
        c.$$parserName = "email";
        c.$validators.email = function(a, b) {
          var d = a || b;
          return c.$isEmpty(d) || ug.test(d)
        }
      },
      radio: function(a, b, d, c) {
        q(d.name) && b.attr("name", ++nb);
        b.on("click", function(a) {
          b[0].checked && c.$setViewValue(d.value, a && a.type)
        });
        c.$render = function() {
          b[0].checked = d.value == c.$viewValue
        };
        d.$observe("value", c.$render)
      },
      checkbox: function(a, b, d, c, e, f, g, h) {
        var k = Id(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = Id(h, a, "ngFalseValue", d.ngFalseValue, !1);
        b.on("click", function(a) {
          c.$setViewValue(b[0].checked, a &&
            a.type)
        });
        c.$render = function() {
          b[0].checked = c.$viewValue
        };
        c.$isEmpty = function(a) {
          return !1 === a
        };
        c.$formatters.push(function(a) {
          return ma(a, k)
        });
        c.$parsers.push(function(a) {
          return a ? k : l
        })
      },
      hidden: x,
      button: x,
      submit: x,
      reset: x,
      file: x
    },
    Dc = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, d, c) {
      return {
        restrict: "E",
        require: ["?ngModel"],
        link: {
          pre: function(e, f, g, h) {
            h[0] && (Sd[F(g.type)] || Sd.text)(e, f, g, h[0], b, a, d, c)
          }
        }
      }
    }],
    wg = /^(true|false|\d+)$/,
    Ne = function() {
      return {
        restrict: "A",
        priority: 100,
        compile: function(a,
          b) {
          return wg.test(b.ngValue) ? function(a, b, e) {
            e.$set("value", a.$eval(e.ngValue))
          } : function(a, b, e) {
            a.$watch(e.ngValue, function(a) {
              e.$set("value", a)
            })
          }
        }
      }
    },
    ne = ["$compile", function(a) {
      return {
        restrict: "AC",
        compile: function(b) {
          a.$$addBindingClass(b);
          return function(b, c, e) {
            a.$$addBindingInfo(c, e.ngBind);
            c = c[0];
            b.$watch(e.ngBind, function(a) {
              c.textContent = q(a) ? "" : a
            })
          }
        }
      }
    }],
    pe = ["$interpolate", "$compile", function(a, b) {
      return {
        compile: function(d) {
          b.$$addBindingClass(d);
          return function(c, d, f) {
            c = a(d.attr(f.$attr.ngBindTemplate));
            b.$$addBindingInfo(d, c.expressions);
            d = d[0];
            f.$observe("ngBindTemplate", function(a) {
              d.textContent = q(a) ? "" : a
            })
          }
        }
      }
    }],
    oe = ["$sce", "$parse", "$compile", function(a, b, d) {
      return {
        restrict: "A",
        compile: function(c, e) {
          var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function(a) {
              return (a || "").toString()
            });
          d.$$addBindingClass(c);
          return function(b, c, e) {
            d.$$addBindingInfo(c, e.ngBindHtml);
            b.$watch(g, function() {
              c.html(a.getTrustedHtml(f(b)) || "")
            })
          }
        }
      }
    }],
    Me = na({
      restrict: "A",
      require: "ngModel",
      link: function(a, b, d, c) {
        c.$viewChangeListeners.push(function() {
          a.$eval(d.ngChange)
        })
      }
    }),
    qe = lc("", !0),
    se = lc("Odd", 0),
    re = lc("Even", 1),
    te = La({
      compile: function(a, b) {
        b.$set("ngCloak", u);
        a.removeClass("ng-cloak")
      }
    }),
    ue = [function() {
      return {
        restrict: "A",
        scope: !0,
        controller: "@",
        priority: 500
      }
    }],
    Ic = {},
    xg = {
      blur: !0,
      focus: !0
    };
  n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
    var b = va("ng-" + a);
    Ic[b] = ["$parse", "$rootScope", function(d, c) {
      return {
        restrict: "A",
        compile: function(e, f) {
          var g =
            d(f[b], null, !0);
          return function(b, d) {
            d.on(a, function(d) {
              var e = function() {
                g(b, {
                  $event: d
                })
              };
              xg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
            })
          }
        }
      }
    }]
  });
  var xe = ["$animate", function(a) {
      return {
        multiElement: !0,
        transclude: "element",
        priority: 600,
        terminal: !0,
        restrict: "A",
        $$tlb: !0,
        link: function(b, d, c, e, f) {
          var g, h, k;
          b.$watch(c.ngIf, function(b) {
            b ? h || f(function(b, e) {
              h = e;
              b[b.length++] = X.createComment(" end ngIf: " + c.ngIf + " ");
              g = {
                clone: b
              };
              a.enter(b, d.parent(), d)
            }) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k =
              rb(g.clone), a.leave(k).then(function() {
                k = null
              }), g = null))
          })
        }
      }
    }],
    ye = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, d) {
      return {
        restrict: "ECA",
        priority: 400,
        terminal: !0,
        transclude: "element",
        controller: fa.noop,
        compile: function(c, e) {
          var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;
          return function(c, e, m, n, q) {
            var s = 0,
              v, u, p, C = function() {
                u && (u.remove(), u = null);
                v && (v.$destroy(), v = null);
                p && (d.leave(p).then(function() {
                  u = null
                }), u = p, p = null)
              };
            c.$watch(f, function(f) {
              var m = function() {
                  !y(h) || h && !c.$eval(h) ||
                    b()
                },
                u = ++s;
              f ? (a(f, !0).then(function(a) {
                if (u === s) {
                  var b = c.$new();
                  n.template = a;
                  a = q(b, function(a) {
                    C();
                    d.enter(a, null, e).then(m)
                  });
                  v = b;
                  p = a;
                  v.$emit("$includeContentLoaded", f);
                  c.$eval(g)
                }
              }, function() {
                u === s && (C(), c.$emit("$includeContentError", f))
              }), c.$emit("$includeContentRequested", f)) : (C(), n.template = null)
            })
          }
        }
      }
    }],
    Pe = ["$compile", function(a) {
      return {
        restrict: "ECA",
        priority: -400,
        require: "ngInclude",
        link: function(b, d, c, e) {
          /SVG/.test(d[0].toString()) ? (d.empty(), a(Lc(e.template, X).childNodes)(b, function(a) {
            d.append(a)
          }, {
            futureParentElement: d
          })) : (d.html(e.template), a(d.contents())(b))
        }
      }
    }],
    ze = La({
      priority: 450,
      compile: function() {
        return {
          pre: function(a, b, d) {
            a.$eval(d.ngInit)
          }
        }
      }
    }),
    Le = function() {
      return {
        restrict: "A",
        priority: 100,
        require: "ngModel",
        link: function(a, b, d, c) {
          var e = b.attr(d.$attr.ngList) || ", ",
            f = "false" !== d.ngTrim,
            g = f ? U(e) : e;
          c.$parsers.push(function(a) {
            if (!q(a)) {
              var b = [];
              a && n(a.split(g), function(a) {
                a && b.push(f ? U(a) : a)
              });
              return b
            }
          });
          c.$formatters.push(function(a) {
            return I(a) ? a.join(e) : u
          });
          c.$isEmpty = function(a) {
            return !a ||
              !a.length
          }
        }
      }
    },
    mb = "ng-valid",
    Jd = "ng-invalid",
    Wa = "ng-pristine",
    Jb = "ng-dirty",
    Ld = "ng-pending",
    lb = G("ngModel"),
    yg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, c, e, f, g, h, k, l) {
      this.$modelValue = this.$viewValue = Number.NaN;
      this.$$rawModelValue = u;
      this.$validators = {};
      this.$asyncValidators = {};
      this.$parsers = [];
      this.$formatters = [];
      this.$viewChangeListeners = [];
      this.$untouched = !0;
      this.$touched = !1;
      this.$pristine = !0;
      this.$dirty = !1;
      this.$valid = !0;
      this.$invalid = !1;
      this.$error = {};
      this.$$success = {};
      this.$pending = u;
      this.$name = l(d.name || "", !1)(a);
      this.$$parentForm = Ib;
      var m = e(d.ngModel),
        r = m.assign,
        t = m,
        s = r,
        v = null,
        B, p = this;
      this.$$setOptions = function(a) {
        if ((p.$options = a) && a.getterSetter) {
          var b = e(d.ngModel + "()"),
            f = e(d.ngModel + "($$$p)");
          t = function(a) {
            var c = m(a);
            z(c) && (c = b(a));
            return c
          };
          s = function(a, b) {
            z(m(a)) ? f(a, {
              $$$p: p.$modelValue
            }) : r(a, p.$modelValue)
          }
        } else if (!m.assign) throw lb("nonassign", d.ngModel, ua(c));
      };
      this.$render = x;
      this.$isEmpty =
        function(a) {
          return q(a) || "" === a || null === a || a !== a
        };
      var C = 0;
      Gd({
        ctrl: this,
        $element: c,
        set: function(a, b) {
          a[b] = !0
        },
        unset: function(a, b) {
          delete a[b]
        },
        $animate: f
      });
      this.$setPristine = function() {
        p.$dirty = !1;
        p.$pristine = !0;
        f.removeClass(c, Jb);
        f.addClass(c, Wa)
      };
      this.$setDirty = function() {
        p.$dirty = !0;
        p.$pristine = !1;
        f.removeClass(c, Wa);
        f.addClass(c, Jb);
        p.$$parentForm.$setDirty()
      };
      this.$setUntouched = function() {
        p.$touched = !1;
        p.$untouched = !0;
        f.setClass(c, "ng-untouched", "ng-touched")
      };
      this.$setTouched = function() {
        p.$touched = !0;
        p.$untouched = !1;
        f.setClass(c, "ng-touched", "ng-untouched")
      };
      this.$rollbackViewValue = function() {
        g.cancel(v);
        p.$viewValue = p.$$lastCommittedViewValue;
        p.$render()
      };
      this.$validate = function() {
        if (!Q(p.$modelValue) || !isNaN(p.$modelValue)) {
          var a = p.$$rawModelValue,
            b = p.$valid,
            c = p.$modelValue,
            d = p.$options && p.$options.allowInvalid;
          p.$$runValidators(a, p.$$lastCommittedViewValue, function(e) {
            d || b === e || (p.$modelValue = e ? a : u, p.$modelValue !== c && p.$$writeModelToScope())
          })
        }
      };
      this.$$runValidators = function(a, b, c) {
        function d() {
          var c = !0;
          n(p.$validators, function(d, e) {
            var g = d(a, b);
            c = c && g;
            f(e, g)
          });
          return c ? !0 : (n(p.$asyncValidators, function(a, b) {
            f(b, null)
          }), !1)
        }

        function e() {
          var c = [],
            d = !0;
          n(p.$asyncValidators, function(e, g) {
            var h = e(a, b);
            if (!h || !z(h.then)) throw lb("$asyncValidators", h);
            f(g, u);
            c.push(h.then(function() {
              f(g, !0)
            }, function(a) {
              d = !1;
              f(g, !1)
            }))
          });
          c.length ? k.all(c).then(function() {
            g(d)
          }, x) : g(!0)
        }

        function f(a, b) {
          h === C && p.$setValidity(a, b)
        }

        function g(a) {
          h === C && c(a)
        }
        C++;
        var h = C;
        (function() {
          var a = p.$$parserName || "parse";
          if (q(B)) f(a,
            null);
          else return B || (n(p.$validators, function(a, b) {
            f(b, null)
          }), n(p.$asyncValidators, function(a, b) {
            f(b, null)
          })), f(a, B), B;
          return !0
        })() ? d() ? e() : g(!1): g(!1)
      };
      this.$commitViewValue = function() {
        var a = p.$viewValue;
        g.cancel(v);
        if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
      };
      this.$$parseAndValidate = function() {
        var b = p.$$lastCommittedViewValue;
        if (B = q(b) ? u : !0)
          for (var c = 0; c < p.$parsers.length; c++)
            if (b = p.$parsers[c](b),
              q(b)) {
              B = !1;
              break
            }
        Q(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = t(a));
        var d = p.$modelValue,
          e = p.$options && p.$options.allowInvalid;
        p.$$rawModelValue = b;
        e && (p.$modelValue = b, p.$modelValue !== d && p.$$writeModelToScope());
        p.$$runValidators(b, p.$$lastCommittedViewValue, function(a) {
          e || (p.$modelValue = a ? b : u, p.$modelValue !== d && p.$$writeModelToScope())
        })
      };
      this.$$writeModelToScope = function() {
        s(a, p.$modelValue);
        n(p.$viewChangeListeners, function(a) {
          try {
            a()
          } catch (c) {
            b(c)
          }
        })
      };
      this.$setViewValue = function(a, b) {
        p.$viewValue =
          a;
        p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b)
      };
      this.$$debounceViewValueCommit = function(b) {
        var c = 0,
          d = p.$options;
        d && y(d.debounce) && (d = d.debounce, Q(d) ? c = d : Q(d[b]) ? c = d[b] : Q(d["default"]) && (c = d["default"]));
        g.cancel(v);
        c ? v = g(function() {
          p.$commitViewValue()
        }, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function() {
          p.$commitViewValue()
        })
      };
      a.$watch(function() {
        var b = t(a);
        if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
          p.$modelValue = p.$$rawModelValue = b;
          B = u;
          for (var c = p.$formatters,
              d = c.length, e = b; d--;) e = c[d](e);
          p.$viewValue !== e && (p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), p.$$runValidators(b, e, x))
        }
        return b
      })
    }],
    Ke = ["$rootScope", function(a) {
      return {
        restrict: "A",
        require: ["ngModel", "^?form", "^?ngModelOptions"],
        controller: yg,
        priority: 1,
        compile: function(b) {
          b.addClass(Wa).addClass("ng-untouched").addClass(mb);
          return {
            pre: function(a, b, e, f) {
              var g = f[0];
              b = f[1] || g.$$parentForm;
              g.$$setOptions(f[2] && f[2].$options);
              b.$addControl(g);
              e.$observe("name", function(a) {
                g.$name !== a && g.$$parentForm.$$renameControl(g,
                  a)
              });
              a.$on("$destroy", function() {
                g.$$parentForm.$removeControl(g)
              })
            },
            post: function(b, c, e, f) {
              var g = f[0];
              if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function(a) {
                g.$$debounceViewValueCommit(a && a.type)
              });
              c.on("blur", function(c) {
                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
              })
            }
          }
        }
      }
    }],
    zg = /(\s+|^)default(\s+|$)/,
    Oe = function() {
      return {
        restrict: "A",
        controller: ["$scope", "$attrs", function(a, b) {
          var d = this;
          this.$options = bb(a.$eval(b.ngModelOptions));
          y(this.$options.updateOn) ?
            (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(zg, function() {
              d.$options.updateOnDefault = !0;
              return " "
            }))) : this.$options.updateOnDefault = !0
        }]
      }
    },
    Ae = La({
      terminal: !0,
      priority: 1E3
    }),
    Ag = G("ngOptions"),
    Bg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
    Ie = ["$compile", "$parse", function(a,
      b) {
      function d(a, c, d) {
        function e(a, b, c, d, f) {
          this.selectValue = a;
          this.viewValue = b;
          this.label = c;
          this.group = d;
          this.disabled = f
        }

        function l(a) {
          var b;
          if (!q && za(a)) b = a;
          else {
            b = [];
            for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
          }
          return b
        }
        var m = a.match(Bg);
        if (!m) throw Ag("iexp", a, ua(c));
        var n = m[5] || m[7],
          q = m[6];
        a = / as /.test(m[0]) && m[1];
        var s = m[9];
        c = b(m[2] ? m[1] : n);
        var v = a && b(a) || c,
          u = s && b(s),
          p = s ? function(a, b) {
            return u(d, b)
          } : function(a) {
            return Ca(a)
          },
          C = function(a, b) {
            return p(a, z(a, b))
          },
          w = b(m[2] ||
            m[1]),
          y = b(m[3] || ""),
          B = b(m[4] || ""),
          x = b(m[8]),
          D = {},
          z = q ? function(a, b) {
            D[q] = b;
            D[n] = a;
            return D
          } : function(a) {
            D[n] = a;
            return D
          };
        return {
          trackBy: s,
          getTrackByValue: C,
          getWatchables: b(x, function(a) {
            var b = [];
            a = a || [];
            for (var c = l(a), e = c.length, f = 0; f < e; f++) {
              var g = a === c ? f : c[f],
                k = z(a[g], g),
                g = p(a[g], k);
              b.push(g);
              if (m[2] || m[1]) g = w(d, k), b.push(g);
              m[4] && (k = B(d, k), b.push(k))
            }
            return b
          }),
          getOptions: function() {
            for (var a = [], b = {}, c = x(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
              var n = c === f ? m : f[m],
                r = z(c[n], n),
                q = v(d, r),
                n = p(q, r),
                t = w(d,
                  r),
                u = y(d, r),
                r = B(d, r),
                q = new e(n, q, t, u, r);
              a.push(q);
              b[n] = q
            }
            return {
              items: a,
              selectValueMap: b,
              getOptionFromViewValue: function(a) {
                return b[C(a)]
              },
              getViewValueFromOption: function(a) {
                return s ? fa.copy(a.viewValue) : a.viewValue
              }
            }
          }
        }
      }
      var c = X.createElement("option"),
        e = X.createElement("optgroup");
      return {
        restrict: "A",
        terminal: !0,
        require: ["select", "?ngModel"],
        link: {
          pre: function(a, b, c, d) {
            d[0].registerOption = x
          },
          post: function(b, g, h, k) {
            function l(a, b) {
              a.element = b;
              b.disabled = a.disabled;
              a.label !== b.label && (b.label = a.label,
                b.textContent = a.label);
              a.value !== b.value && (b.value = a.selectValue)
            }

            function m(a, b, c, d) {
              b && F(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));
              return c
            }

            function r(a) {
              for (var b; a;) b = a.nextSibling, Xb(a), a = b
            }

            function q(a) {
              var b = p && p[0],
                c = z && z[0];
              if (b || c)
                for (; a && (a === b || a === c || 8 === a.nodeType || "" === a.value);) a = a.nextSibling;
              return a
            }

            function s() {
              var a = D && u.readValue();
              D = E.getOptions();
              var b = {},
                d = g[0].firstChild;
              x && g.prepend(p);
              d = q(d);
              D.items.forEach(function(a) {
                var f, h;
                a.group ?
                  (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = {
                    groupElement: f,
                    currentOptionElement: f.firstChild
                  }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling)
              });
              Object.keys(b).forEach(function(a) {
                r(b[a].currentOptionElement)
              });
              r(d);
              v.$render();
              if (!v.$isEmpty(a)) {
                var f = u.readValue();
                (E.trackBy ? ma(a, f) : a === f) || (v.$setViewValue(f), v.$render())
              }
            }
            var v = k[1];
            if (v) {
              var u = k[0];
              k =
                h.multiple;
              for (var p, C = 0, w = g.children(), y = w.length; C < y; C++)
                if ("" === w[C].value) {
                  p = w.eq(C);
                  break
                }
              var x = !!p,
                z = B(c.cloneNode(!1));
              z.val("?");
              var D, E = d(h.ngOptions, g, b);
              k ? (v.$isEmpty = function(a) {
                return !a || 0 === a.length
              }, u.writeValue = function(a) {
                D.items.forEach(function(a) {
                  a.element.selected = !1
                });
                a && a.forEach(function(a) {
                  (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                })
              }, u.readValue = function() {
                var a = g.val() || [],
                  b = [];
                n(a, function(a) {
                  (a = D.selectValueMap[a]) && !a.disabled && b.push(D.getViewValueFromOption(a))
                });
                return b
              }, E.trackBy && b.$watchCollection(function() {
                if (I(v.$viewValue)) return v.$viewValue.map(function(a) {
                  return E.getTrackByValue(a)
                })
              }, function() {
                v.$render()
              })) : (u.writeValue = function(a) {
                var b = D.getOptionFromViewValue(a);
                b && !b.disabled ? g[0].value !== b.selectValue && (z.remove(), x || p.remove(), g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || x ? (z.remove(), x || g.prepend(p), g.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (x || p.remove(), g.prepend(z),
                  g.val("?"), z.prop("selected", !0), z.attr("selected", !0))
              }, u.readValue = function() {
                var a = D.selectValueMap[g.val()];
                return a && !a.disabled ? (x || p.remove(), z.remove(), D.getViewValueFromOption(a)) : null
              }, E.trackBy && b.$watch(function() {
                return E.getTrackByValue(v.$viewValue)
              }, function() {
                v.$render()
              }));
              x ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = B(c.cloneNode(!1));
              s();
              b.$watchCollection(E.getWatchables, s)
            }
          }
        }
      }
    }],
    Be = ["$locale", "$interpolate", "$log", function(a, b, d) {
      var c = /{}/g,
        e = /^when(Minus)?(.+)$/;
      return {
        link: function(f,
          g, h) {
          function k(a) {
            g.text(a || "")
          }
          var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            r = h.offset || 0,
            s = f.$eval(m) || {},
            u = {},
            v = b.startSymbol(),
            y = b.endSymbol(),
            p = v + l + "-" + r + y,
            C = fa.noop,
            w;
          n(h, function(a, b) {
            var c = e.exec(b);
            c && (c = (c[1] ? "-" : "") + F(c[2]), s[c] = g.attr(h.$attr[b]))
          });
          n(s, function(a, d) {
            u[d] = b(a.replace(c, p))
          });
          f.$watch(l, function(b) {
            var c = parseFloat(b),
              e = isNaN(c);
            e || c in s || (c = a.pluralCat(c - r));
            c === w || e && Q(w) && isNaN(w) || (C(), e = u[c], q(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " +
              m), C = x, k()) : C = f.$watch(e, k), w = c)
          })
        }
      }
    }],
    Ce = ["$parse", "$animate", function(a, b) {
      var d = G("ngRepeat"),
        c = function(a, b, c, d, k, l, m) {
          a[c] = d;
          k && (a[k] = l);
          a.$index = b;
          a.$first = 0 === b;
          a.$last = b === m - 1;
          a.$middle = !(a.$first || a.$last);
          a.$odd = !(a.$even = 0 === (b & 1))
        };
      return {
        restrict: "A",
        multiElement: !0,
        transclude: "element",
        priority: 1E3,
        terminal: !0,
        $$tlb: !0,
        compile: function(e, f) {
          var g = f.ngRepeat,
            h = X.createComment(" end ngRepeat: " + g + " "),
            k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
          if (!k) throw d("iexp", g);
          var l = k[1],
            m = k[2],
            r = k[3],
            q = k[4],
            k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
          if (!k) throw d("iidexp", l);
          var s = k[3] || k[1],
            v = k[2];
          if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r))) throw d("badident", r);
          var x, p, y, w, z = {
            $id: Ca
          };
          q ? x = a(q) : (y = function(a, b) {
            return Ca(b)
          }, w = function(a) {
            return a
          });
          return function(a, e, f, k, l) {
            x && (p = function(b, c, d) {
              v && (z[v] = b);
              z[s] = c;
              z.$index =
                d;
              return x(a, z)
            });
            var q = $();
            a.$watchCollection(m, function(f) {
              var k, m, t = e[0],
                x, z = $(),
                D, E, H, F, I, G, J;
              r && (a[r] = f);
              if (za(f)) I = f, m = p || y;
              else
                for (J in m = p || w, I = [], f) qa.call(f, J) && "$" !== J.charAt(0) && I.push(J);
              D = I.length;
              J = Array(D);
              for (k = 0; k < D; k++)
                if (E = f === I ? k : I[k], H = f[E], F = m(E, H, k), q[F]) G = q[F], delete q[F], z[F] = G, J[k] = G;
                else {
                  if (z[F]) throw n(J, function(a) {
                    a && a.scope && (q[a.id] = a)
                  }), d("dupes", g, F, H);
                  J[k] = {
                    id: F,
                    scope: u,
                    clone: u
                  };
                  z[F] = !0
                }
              for (x in q) {
                G = q[x];
                F = rb(G.clone);
                b.leave(F);
                if (F[0].parentNode)
                  for (k = 0, m = F.length; k <
                    m; k++) F[k].$$NG_REMOVED = !0;
                G.scope.$destroy()
              }
              for (k = 0; k < D; k++)
                if (E = f === I ? k : I[k], H = f[E], G = J[k], G.scope) {
                  x = t;
                  do x = x.nextSibling; while (x && x.$$NG_REMOVED);
                  G.clone[0] != x && b.move(rb(G.clone), null, B(t));
                  t = G.clone[G.clone.length - 1];
                  c(G.scope, k, s, H, v, E, D)
                } else l(function(a, d) {
                  G.scope = d;
                  var e = h.cloneNode(!1);
                  a[a.length++] = e;
                  b.enter(a, null, B(t));
                  t = e;
                  G.clone = a;
                  z[G.id] = G;
                  c(G.scope, k, s, H, v, E, D)
                });
              q = z
            })
          }
        }
      }
    }],
    De = ["$animate", function(a) {
      return {
        restrict: "A",
        multiElement: !0,
        link: function(b, d, c) {
          b.$watch(c.ngShow, function(b) {
            a[b ?
              "removeClass" : "addClass"](d, "ng-hide", {
              tempClasses: "ng-hide-animate"
            })
          })
        }
      }
    }],
    we = ["$animate", function(a) {
      return {
        restrict: "A",
        multiElement: !0,
        link: function(b, d, c) {
          b.$watch(c.ngHide, function(b) {
            a[b ? "addClass" : "removeClass"](d, "ng-hide", {
              tempClasses: "ng-hide-animate"
            })
          })
        }
      }
    }],
    Ee = La(function(a, b, d) {
      a.$watch(d.ngStyle, function(a, d) {
        d && a !== d && n(d, function(a, c) {
          b.css(c, "")
        });
        a && b.css(a)
      }, !0)
    }),
    Fe = ["$animate", function(a) {
      return {
        require: "ngSwitch",
        controller: ["$scope", function() {
          this.cases = {}
        }],
        link: function(b,
          d, c, e) {
          var f = [],
            g = [],
            h = [],
            k = [],
            l = function(a, b) {
              return function() {
                a.splice(b, 1)
              }
            };
          b.$watch(c.ngSwitch || c.on, function(b) {
            var c, d;
            c = 0;
            for (d = h.length; c < d; ++c) a.cancel(h[c]);
            c = h.length = 0;
            for (d = k.length; c < d; ++c) {
              var q = rb(g[c].clone);
              k[c].$destroy();
              (h[c] = a.leave(q)).then(l(h, c))
            }
            g.length = 0;
            k.length = 0;
            (f = e.cases["!" + b] || e.cases["?"]) && n(f, function(b) {
              b.transclude(function(c, d) {
                k.push(d);
                var e = b.element;
                c[c.length++] = X.createComment(" end ngSwitchWhen: ");
                g.push({
                  clone: c
                });
                a.enter(c, e.parent(), e)
              })
            })
          })
        }
      }
    }],
    Ge = La({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function(a, b, d, c, e) {
        c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
        c.cases["!" + d.ngSwitchWhen].push({
          transclude: e,
          element: b
        })
      }
    }),
    He = La({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function(a, b, d, c, e) {
        c.cases["?"] = c.cases["?"] || [];
        c.cases["?"].push({
          transclude: e,
          element: b
        })
      }
    }),
    Je = La({
      restrict: "EAC",
      link: function(a, b, d, c, e) {
        if (!e) throw G("ngTransclude")("orphan", ua(b));
        e(function(a) {
          b.empty();
          b.append(a)
        })
      }
    }),
    je = ["$templateCache", function(a) {
      return {
        restrict: "E",
        terminal: !0,
        compile: function(b, d) {
          "text/ng-template" == d.type && a.put(d.id, b[0].text)
        }
      }
    }],
    Cg = {
      $setViewValue: x,
      $render: x
    },
    Dg = ["$element", "$scope", "$attrs", function(a, b, d) {
      var c = this,
        e = new Sa;
      c.ngModelCtrl = Cg;
      c.unknownOption = B(X.createElement("option"));
      c.renderUnknownOption = function(b) {
        b = "? " + Ca(b) + " ?";
        c.unknownOption.val(b);
        a.prepend(c.unknownOption);
        a.val(b)
      };
      b.$on("$destroy", function() {
        c.renderUnknownOption = x
      });
      c.removeUnknownOption =
        function() {
          c.unknownOption.parent() && c.unknownOption.remove()
        };
      c.readValue = function() {
        c.removeUnknownOption();
        return a.val()
      };
      c.writeValue = function(b) {
        c.hasOption(b) ? (c.removeUnknownOption(), a.val(b), "" === b && c.emptyOption.prop("selected", !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), a.val("")) : c.renderUnknownOption(b)
      };
      c.addOption = function(a, b) {
        Ra(a, '"option value"');
        "" === a && (c.emptyOption = b);
        var d = e.get(a) || 0;
        e.put(a, d + 1);
        c.ngModelCtrl.$render();
        b[0].hasAttribute("selected") && (b[0].selected = !0)
      };
      c.removeOption = function(a) {
        var b = e.get(a);
        b && (1 === b ? (e.remove(a), "" === a && (c.emptyOption = u)) : e.put(a, b - 1))
      };
      c.hasOption = function(a) {
        return !!e.get(a)
      };
      c.registerOption = function(a, b, d, e, l) {
        if (e) {
          var m;
          d.$observe("value", function(a) {
            y(m) && c.removeOption(m);
            m = a;
            c.addOption(a, b)
          })
        } else l ? a.$watch(l, function(a, e) {
          d.$set("value", a);
          e !== a && c.removeOption(e);
          c.addOption(a, b)
        }) : c.addOption(d.value, b);
        b.on("$destroy", function() {
          c.removeOption(d.value);
          c.ngModelCtrl.$render()
        })
      }
    }],
    ke = function() {
      return {
        restrict: "E",
        require: ["select", "?ngModel"],
        controller: Dg,
        priority: 1,
        link: {
          pre: function(a, b, d, c) {
            var e = c[1];
            if (e) {
              var f = c[0];
              f.ngModelCtrl = e;
              e.$render = function() {
                f.writeValue(e.$viewValue)
              };
              b.on("change", function() {
                a.$apply(function() {
                  e.$setViewValue(f.readValue())
                })
              });
              if (d.multiple) {
                f.readValue = function() {
                  var a = [];
                  n(b.find("option"), function(b) {
                    b.selected && a.push(b.value)
                  });
                  return a
                };
                f.writeValue = function(a) {
                  var c = new Sa(a);
                  n(b.find("option"), function(a) {
                    a.selected = y(c.get(a.value))
                  })
                };
                var g, h = NaN;
                a.$watch(function() {
                  h !==
                    e.$viewValue || ma(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());
                  h = e.$viewValue
                });
                e.$isEmpty = function(a) {
                  return !a || 0 === a.length
                }
              }
            }
          }
        }
      }
    },
    me = ["$interpolate", function(a) {
      return {
        restrict: "E",
        priority: 100,
        compile: function(b, d) {
          if (y(d.value)) var c = a(d.value, !0);
          else {
            var e = a(b.text(), !0);
            e || d.$set("value", b.text())
          }
          return function(a, b, d) {
            var k = b.parent();
            (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
          }
        }
      }
    }],
    le = na({
      restrict: "E",
      terminal: !1
    }),
    Fc = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, d, c) {
          c && (d.required = !0, c.$validators.required = function(a, b) {
            return !d.required || !c.$isEmpty(b)
          }, d.$observe("required", function() {
            c.$validate()
          }))
        }
      }
    },
    Ec = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, d, c) {
          if (c) {
            var e, f = d.ngPattern || d.pattern;
            d.$observe("pattern", function(a) {
              E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
              if (a && !a.test) throw G("ngPattern")("noregexp", f, a, ua(b));
              e = a || u;
              c.$validate()
            });
            c.$validators.pattern = function(a, b) {
              return c.$isEmpty(b) ||
                q(e) || e.test(b)
            }
          }
        }
      }
    },
    Hc = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, d, c) {
          if (c) {
            var e = -1;
            d.$observe("maxlength", function(a) {
              a = ea(a);
              e = isNaN(a) ? -1 : a;
              c.$validate()
            });
            c.$validators.maxlength = function(a, b) {
              return 0 > e || c.$isEmpty(b) || b.length <= e
            }
          }
        }
      }
    },
    Gc = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, d, c) {
          if (c) {
            var e = 0;
            d.$observe("minlength", function(a) {
              e = ea(a) || 0;
              c.$validate()
            });
            c.$validators.minlength = function(a, b) {
              return c.$isEmpty(b) || b.length >= e
            }
          }
        }
      }
    };
  S.angular.bootstrap ?
    console.log("WARNING: Tried to load angular more than once.") : (ce(), ee(fa), fa.module("ngLocale", [], ["$provide", function(a) {
      function b(a) {
        a += "";
        var b = a.indexOf(".");
        return -1 == b ? 0 : a.length - b - 1
      }
      a.value("$locale", {
        DATETIME_FORMATS: {
          AMPMS: ["AM", "PM"],
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          ERANAMES: ["Before Christ", "Anno Domini"],
          ERAS: ["BC", "AD"],
          FIRSTDAYOFWEEK: 6,
          MONTH: "January February March April May June July August September October November December".split(" "),
          SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          WEEKENDRANGE: [5, 6],
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          medium: "MMM d, y h:mm:ss a",
          mediumDate: "MMM d, y",
          mediumTime: "h:mm:ss a",
          "short": "M/d/yy h:mm a",
          shortDate: "M/d/yy",
          shortTime: "h:mm a"
        },
        NUMBER_FORMATS: {
          CURRENCY_SYM: "$",
          DECIMAL_SEP: ".",
          GROUP_SEP: ",",
          PATTERNS: [{
            gSize: 3,
            lgSize: 3,
            maxFrac: 3,
            minFrac: 0,
            minInt: 1,
            negPre: "-",
            negSuf: "",
            posPre: "",
            posSuf: ""
          }, {
            gSize: 3,
            lgSize: 3,
            maxFrac: 2,
            minFrac: 2,
            minInt: 1,
            negPre: "-\u00a4",
            negSuf: "",
            posPre: "\u00a4",
            posSuf: ""
          }]
        },
        id: "en-us",
        pluralCat: function(a, c) {
          var e = a | 0,
            f = c;
          u === f && (f = Math.min(b(a), 3));
          Math.pow(10, f);
          return 1 == e && 0 == f ? "one" : "other"
        }
      })
    }]), B(X).ready(function() {
      Zd(X, yc)
    }))
})(window, document);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I, f, C) {
  'use strict';

  function D(t, e) {
    e = e || {};
    f.forEach(e, function(f, k) {
      delete e[k]
    });
    for (var k in t) !t.hasOwnProperty(k) || "$" === k.charAt(0) && "$" === k.charAt(1) || (e[k] = t[k]);
    return e
  }
  var y = f.$$minErr("$resource"),
    B = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
  f.module("ngResource", ["ng"]).provider("$resource", function() {
    var t = /^https?:\/\/[^\/]*/,
      e = this;
    this.defaults = {
      stripTrailingSlashes: !0,
      actions: {
        get: {
          method: "GET"
        },
        save: {
          method: "POST"
        },
        query: {
          method: "GET",
          isArray: !0
        },
        remove: {
          method: "DELETE"
        },
        "delete": {
          method: "DELETE"
        }
      }
    };
    this.$get = ["$http", "$q", function(k, F) {
      function w(f, g) {
        this.template = f;
        this.defaults = r({}, e.defaults, g);
        this.urlParams = {}
      }

      function z(l, g, s, h) {
        function c(a, q) {
          var c = {};
          q = r({}, g, q);
          u(q, function(b, q) {
            x(b) && (b = b());
            var m;
            if (b && b.charAt && "@" == b.charAt(0)) {
              m = a;
              var d = b.substr(1);
              if (null == d || "" === d || "hasOwnProperty" === d || !B.test("." + d)) throw y("badmember", d);
              for (var d = d.split("."), n = 0, g = d.length; n < g && f.isDefined(m); n++) {
                var e = d[n];
                m = null !== m ? m[e] : C
              }
            } else m = b;
            c[q] = m
          });
          return c
        }

        function G(a) {
          return a.resource
        }

        function d(a) {
          D(a || {}, this)
        }
        var t = new w(l, h);
        s = r({}, e.defaults.actions, s);
        d.prototype.toJSON = function() {
          var a = r({}, this);
          delete a.$promise;
          delete a.$resolved;
          return a
        };
        u(s, function(a, q) {
          var g = /^(POST|PUT|PATCH)$/i.test(a.method);
          d[q] = function(b, A, m, e) {
            var n = {},
              h, l, s;
            switch (arguments.length) {
              case 4:
                s = e, l = m;
              case 3:
              case 2:
                if (x(A)) {
                  if (x(b)) {
                    l = b;
                    s = A;
                    break
                  }
                  l = A;
                  s = m
                } else {
                  n = b;
                  h = A;
                  l = m;
                  break
                }
              case 1:
                x(b) ? l = b : g ? h = b : n = b;
                break;
              case 0:
                break;
              default:
                throw y("badargs", arguments.length);
            }
            var w = this instanceof d,
              p = w ?
              h : a.isArray ? [] : new d(h),
              v = {},
              z = a.interceptor && a.interceptor.response || G,
              B = a.interceptor && a.interceptor.responseError || C;
            u(a, function(a, b) {
              switch (b) {
                default: v[b] = H(a);
                break;
                case "params":
                    case "isArray":
                    case "interceptor":
                    break;
                case "timeout":
                    v[b] = a
              }
            });
            g && (v.data = h);
            t.setUrlParams(v, r({}, c(h, a.params || {}), n), a.url);
            n = k(v).then(function(b) {
              var c = b.data,
                m = p.$promise;
              if (c) {
                if (f.isArray(c) !== !!a.isArray) throw y("badcfg", q, a.isArray ? "array" : "object", f.isArray(c) ? "array" : "object", v.method, v.url);
                a.isArray ?
                  (p.length = 0, u(c, function(b) {
                    "object" === typeof b ? p.push(new d(b)) : p.push(b)
                  })) : (D(c, p), p.$promise = m)
              }
              p.$resolved = !0;
              b.resource = p;
              return b
            }, function(b) {
              p.$resolved = !0;
              (s || E)(b);
              return F.reject(b)
            });
            n = n.then(function(b) {
              var a = z(b);
              (l || E)(a, b.headers);
              return a
            }, B);
            return w ? n : (p.$promise = n, p.$resolved = !1, p)
          };
          d.prototype["$" + q] = function(b, a, c) {
            x(b) && (c = a, a = b, b = {});
            b = d[q].call(this, b, this, a, c);
            return b.$promise || b
          }
        });
        d.bind = function(a) {
          return z(l, r({}, g, a), s)
        };
        return d
      }
      var E = f.noop,
        u = f.forEach,
        r = f.extend,
        H = f.copy,
        x = f.isFunction;
      w.prototype = {
        setUrlParams: function(l, g, e) {
          var h = this,
            c = e || h.template,
            k, d, r = "",
            a = h.urlParams = {};
          u(c.split(/\W/), function(d) {
            if ("hasOwnProperty" === d) throw y("badname");
            !/^\d+$/.test(d) && d && (new RegExp("(^|[^\\\\]):" + d + "(\\W|$)")).test(c) && (a[d] = !0)
          });
          c = c.replace(/\\:/g, ":");
          c = c.replace(t, function(a) {
            r = a;
            return ""
          });
          g = g || {};
          u(h.urlParams, function(a, e) {
            k = g.hasOwnProperty(e) ? g[e] : h.defaults[e];
            f.isDefined(k) && null !== k ? (d = encodeURIComponent(k).replace(/%40/gi, "@").replace(/%3A/gi,
              ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), c = c.replace(new RegExp(":" + e + "(\\W|$)", "g"), function(b, a) {
              return d + a
            })) : c = c.replace(new RegExp("(/?):" + e + "(\\W|$)", "g"), function(b, a, c) {
              return "/" == c.charAt(0) ? c : a + c
            })
          });
          h.defaults.stripTrailingSlashes && (c = c.replace(/\/+$/, "") || "/");
          c = c.replace(/\/\.(?=\w+($|\?))/, ".");
          l.url = r + c.replace(/\/\\\./, "/.");
          u(g, function(a, c) {
            h.urlParams[c] || (l.params = l.params || {}, l.params[c] =
              a)
          })
        }
      };
      return z
    }]
  })
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x, s, y) {
  'use strict';

  function t(f, k, p) {
    n.directive(f, ["$parse", "$swipe", function(c, e) {
      return function(l, m, g) {
        function h(a) {
          if (!b) return !1;
          var d = Math.abs(a.y - b.y);
          a = (a.x - b.x) * k;
          return r && 75 > d && 0 < a && 30 < a && .3 > d / a
        }
        var d = c(g[f]),
          b, r, a = ["touch"];
        s.isDefined(g.ngSwipeDisableMouse) || a.push("mouse");
        e.bind(m, {
          start: function(a, d) {
            b = a;
            r = !0
          },
          cancel: function(a) {
            r = !1
          },
          end: function(a, b) {
            h(a) && l.$apply(function() {
              m.triggerHandler(p);
              d(l, {
                $event: b
              })
            })
          }
        }, a)
      }
    }])
  }
  var n = s.module("ngTouch", []);
  n.factory("$swipe", [function() {
    function f(c) {
      c = c.originalEvent || c;
      var e = c.touches && c.touches.length ? c.touches : [c];
      c = c.changedTouches && c.changedTouches[0] || e[0];
      return {
        x: c.clientX,
        y: c.clientY
      }
    }

    function k(c, e) {
      var l = [];
      s.forEach(c, function(c) {
        (c = p[c][e]) && l.push(c)
      });
      return l.join(" ")
    }
    var p = {
      mouse: {
        start: "mousedown",
        move: "mousemove",
        end: "mouseup"
      },
      touch: {
        start: "touchstart",
        move: "touchmove",
        end: "touchend",
        cancel: "touchcancel"
      }
    };
    return {
      bind: function(c, e, l) {
        var m, g, h, d, b = !1;
        l = l || ["mouse", "touch"];
        c.on(k(l, "start"), function(a) {
          h =
            f(a);
          b = !0;
          g = m = 0;
          d = h;
          e.start && e.start(h, a)
        });
        var r = k(l, "cancel");
        if (r) c.on(r, function(a) {
          b = !1;
          e.cancel && e.cancel(a)
        });
        c.on(k(l, "move"), function(a) {
          if (b && h) {
            var c = f(a);
            m += Math.abs(c.x - d.x);
            g += Math.abs(c.y - d.y);
            d = c;
            10 > m && 10 > g || (g > m ? (b = !1, e.cancel && e.cancel(a)) : (a.preventDefault(), e.move && e.move(c, a)))
          }
        });
        c.on(k(l, "end"), function(a) {
          b && (b = !1, e.end && e.end(f(a), a))
        })
      }
    }
  }]);
  n.config(["$provide", function(f) {
    f.decorator("ngClickDirective", ["$delegate", function(k) {
      k.shift();
      return k
    }])
  }]);
  n.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(f, k, p) {
    function c(d, b, c) {
      for (var a = 0; a < d.length; a += 2) {
        var e = d[a + 1],
          g = c;
        if (25 > Math.abs(d[a] - b) && 25 > Math.abs(e - g)) return d.splice(a, a + 2), !0
      }
      return !1
    }

    function e(d) {
      if (!(2500 < Date.now() - m)) {
        var b = d.touches && d.touches.length ? d.touches : [d],
          e = b[0].clientX,
          b = b[0].clientY;
        if (!(1 > e && 1 > b || h && h[0] === e && h[1] === b)) {
          h && (h = null);
          var a = d.target;
          "label" === s.lowercase(a.nodeName || a[0] && a[0].nodeName) && (h = [e, b]);
          c(g, e, b) || (d.stopPropagation(), d.preventDefault(), d.target &&
            d.target.blur && d.target.blur())
        }
      }
    }

    function l(d) {
      d = d.touches && d.touches.length ? d.touches : [d];
      var b = d[0].clientX,
        c = d[0].clientY;
      g.push(b, c);
      k(function() {
        for (var a = 0; a < g.length; a += 2)
          if (g[a] == b && g[a + 1] == c) {
            g.splice(a, a + 2);
            break
          }
      }, 2500, !1)
    }
    var m, g, h;
    return function(d, b, h) {
      var a = f(h.ngClick),
        k = !1,
        q, n, t, v;
      b.on("touchstart", function(a) {
        k = !0;
        q = a.target ? a.target : a.srcElement;
        3 == q.nodeType && (q = q.parentNode);
        b.addClass("ng-click-active");
        n = Date.now();
        a = a.originalEvent || a;
        a = (a.touches && a.touches.length ? a.touches : [a])[0];
        t = a.clientX;
        v = a.clientY
      });
      b.on("touchcancel", function(a) {
        k = !1;
        b.removeClass("ng-click-active")
      });
      b.on("touchend", function(a) {
        var d = Date.now() - n,
          f = a.originalEvent || a,
          u = (f.changedTouches && f.changedTouches.length ? f.changedTouches : f.touches && f.touches.length ? f.touches : [f])[0],
          f = u.clientX,
          u = u.clientY,
          w = Math.sqrt(Math.pow(f - t, 2) + Math.pow(u - v, 2));
        k && 750 > d && 12 > w && (g || (p[0].addEventListener("click", e, !0), p[0].addEventListener("touchstart", l, !0), g = []), m = Date.now(), c(g, f, u), q && q.blur(), s.isDefined(h.disabled) &&
          !1 !== h.disabled || b.triggerHandler("click", [a]));
        k = !1;
        b.removeClass("ng-click-active")
      });
      b.onclick = function(a) {};
      b.on("click", function(b, c) {
        d.$apply(function() {
          a(d, {
            $event: c || b
          })
        })
      });
      b.on("mousedown", function(a) {
        b.addClass("ng-click-active")
      });
      b.on("mousemove mouseup", function(a) {
        b.removeClass("ng-click-active")
      })
    }
  }]);
  t("ngSwipeLeft", -1, "swipeleft");
  t("ngSwipeRight", 1, "swiperight")
})(window, window.angular);
//# sourceMappingURL=angular-touch.min.js.map

(function(f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f()
  } else if (typeof define === "function" && define.amd) {
    define([], f)
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window
    } else if (typeof global !== "undefined") {
      g = global
    } else if (typeof self !== "undefined") {
      g = self
    } else {
      g = this
    }
    g.angularCreditCards = f()
  }
})(function() {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f
        }
        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e)
        }, l, l.exports, e, t, n, r)
      }
      return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
  })({
    1: [function(require, module, exports) {
      (function(global) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _angular = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);

        var _angular2 = _interopRequireDefault(_angular);

        var _creditcards = require('creditcards');

        var _creditcards2 = _interopRequireDefault(_creditcards);

        var _number = require('./number');

        var _number2 = _interopRequireDefault(_number);

        var _expiration = require('./expiration');

        var _expiration2 = _interopRequireDefault(_expiration);

        var _cvc = require('./cvc');

        var _cvc2 = _interopRequireDefault(_cvc);

        'use strict';

        exports['default'] = _angular2['default'].module('credit-cards', []).value('creditcards', _creditcards2['default']).directive('ccNumber', _number2['default']).directive('ccExp', _expiration2['default']).directive('ccExpMonth', _expiration.ccExpMonth).directive('ccExpYear', _expiration.ccExpYear).directive('ccCvc', _cvc2['default']).name;
        module.exports = exports['default'];

      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
      "./cvc": 14,
      "./expiration": 15,
      "./number": 16,
      "creditcards": 13
    }],
    2: [function(require, module, exports) {
      exports = module.exports = ap;

      function ap(args, fn) {
        return function() {
          var rest = [].slice.call(arguments),
            first = args.slice()
          first.push.apply(first, rest)
          return fn.apply(this, first);
        };
      }

      exports.pa = pa;

      function pa(args, fn) {
        return function() {
          var rest = [].slice.call(arguments)
          rest.push.apply(rest, args)
          return fn.apply(this, rest);
        };
      }

      exports.apa = apa;

      function apa(left, right, fn) {
        return function() {
          return fn.apply(this,
            left.concat.apply(left, arguments).concat(right)
          );
        };
      }

      exports.partial = partial;

      function partial(fn) {
        var args = [].slice.call(arguments, 1);
        return ap(args, fn);
      }

      exports.partialRight = partialRight;

      function partialRight(fn) {
        var args = [].slice.call(arguments, 1);
        return pa(args, fn);
      }

      exports.curry = curry;

      function curry(fn) {
        return partial(partial, fn);
      }

      exports.curryRight = function curryRight(fn) {
        return partial(partialRight, fn);
      }

    }, {}],
    3: [function(require, module, exports) {
      var sentence = require('sentence-case');

      /**
       * Camel case a string.
       *
       * @param  {String} string
       * @return {String}
       */
      module.exports = function(string) {
        return sentence(string)
          // Replace periods between numeric entities with an underscore.
          .replace(/\./g, '_')
          // Replace spaces between words with a string upper cased character.
          .replace(/ (\w)/g, function(_, $1) {
            return $1.toUpperCase();
          });
      };

    }, {
      "sentence-case": 4
    }],
    4: [function(require, module, exports) {
      /**
       * Sentence case a string.
       *
       * @param  {String} string
       * @return {String}
       */
      module.exports = function(string) {
        return String(string)
          // Add camel case support.
          .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
          // Remove every non-word character and replace with a period.
          .replace(/[^a-zA-Z0-9]+/g, '.')
          // Replace every period not between two numbers with a space.
          .replace(/(?!\d\.\d)(^|.)\./g, '$1 ')
          // Trim whitespace from the string.
          .replace(/^ | $/g, '')
          // Finally lower case the entire string.
          .toLowerCase();
      };

    }, {}],
    5: [function(require, module, exports) {
      module.exports = extend

      function extend(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]

          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              target[key] = source[key]
            }
          }
        }

        return target
      }

    }, {}],
    6: [function(require, module, exports) {
      'use strict';

      exports.types = require('./types');

    }, {
      "./types": 8
    }],
    7: [function(require, module, exports) {
      'use strict';

      var extend = require('xtend/mutable');

      function CardType(name, config) {
        extend(this, {
          name: name
        }, config);
      }

      CardType.prototype.cvcLength = 3;

      CardType.prototype.luhn = true;

      CardType.prototype.groupPattern = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/;

      CardType.prototype.group = function(number) {
        return (number.match(this.groupPattern) || [])
          .slice(1)
          .filter(identity);
      };

      CardType.prototype.test = function(number, eager) {
        return this[eager ? 'eagerPattern' : 'pattern'].test(number);
      };

      module.exports = CardType;

      function identity(value) {
        return value;
      }

    }, {
      "xtend/mutable": 5
    }],
    8: [function(require, module, exports) {
      'use strict';

      var Type = require('./type');

      var group19 = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/;

      exports.visa = new Type('Visa', {
        pattern: /^4\d{12}(\d{3})?$/,
        eagerPattern: /^4/
      });

      exports.maestro = new Type('Maestro', {
        pattern: /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/,
        eagerPattern: /^(5(018|0[23]|[68])|6[37])/,
        groupPattern: group19
      });

      exports.forbrugsforeningen = new Type('Forbrugsforeningen', {
        pattern: /^600722\d{10}$/,
        eagerPattern: /^600/
      });

      exports.dankort = new Type('Dankort', {
        pattern: /^5019\d{12}$/,
        eagerPattern: /^5019/
      });

      exports.masterCard = new Type('MasterCard', {
        pattern: /^5[1-5]\d{14}$/,
        eagerPattern: /^5[1-5]/
      });

      exports.americanExpress = new Type('American Express', {
        pattern: /^3[47]\d{13}$/,
        eagerPattern: /^3[47]/,
        groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        cvcLength: 4
      });

      exports.dinersClub = new Type('Diners Club', {
        pattern: /^3(0[0-5]|[68]\d)\d{11}$/,
        eagerPattern: /^3(0|[68])/,
        groupPattern: /(\d{1,4})?(\d{1,6})?(\d{1,4})?/
      });

      exports.discover = new Type('Discover', {
        pattern: /^6(011|[45]\d{2})\d{12}$/,
        eagerPattern: /^6([45]|01)/
      });

      exports.jcb = new Type('JCB', {
        pattern: /^35\d{14}$/,
        eagerPattern: /^35/
      });

      exports.unionPay = new Type('UnionPay', {
        pattern: /^62[0-5]\d{13,16}$/,
        eagerPattern: /^62/,
        groupPattern: group19,
        luhn: false
      });

    }, {
      "./type": 7
    }],
    9: [function(require, module, exports) {
      'use strict';

      module.exports = (function(array) {
        return function luhn(number) {
          if (!number) return false;
          var length = number.length;
          var bit = 1;
          var sum = 0;
          var value;

          while (length) {
            value = parseInt(number.charAt(--length), 10);
            sum += (bit ^= 1) ? array[value] : value;
          }

          return sum && sum % 10 === 0;
        };
      }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

    }, {}],
    10: [function(require, module, exports) {
      'use strict'

      var camel = require('camel-case')
      var luhn = require('fast-luhn')

      exports.types = require('creditcards-types').types

      exports.parse = function(number) {
        if (typeof number !== 'string') return ''
        return number.replace(/[^\d]/g, '')
      }

      exports.format = function(number, separator) {
        var type = getType(number, true)
        if (!type) return number
        return type.group(number).join(separator || ' ')
      }

      exports.type = function(number, eager) {
        var type = getType(number, eager)
        return type ? type.name : undefined
      }

      exports.luhn = luhn

      exports.isValid = function(number, type) {
        if (!type) type = exports.type(number)
        type = exports.types[camel(type)]
        if (!type) return false
        return (!type.luhn || luhn(number)) && type.test(number)
      }

      function getType(number, eager) {
        for (var typeName in exports.types) {
          var type = exports.types[typeName]
          if (type.test(number, eager)) return exports.types[typeName]
        }
      }

    }, {
      "camel-case": 3,
      "creditcards-types": 6,
      "fast-luhn": 9
    }],
    11: [function(require, module, exports) {
      'use strict'

      var camel = require('camel-case')
      var card = require('./card')

      var cvcRegex = /^\d{3,4}$/

      exports.isValid = function(cvc, type) {
        if (typeof cvc !== 'string') return false
        if (!cvcRegex.test(cvc)) return false
        if (!type) return true
        return card.types[camel(type)].cvcLength === cvc.length
      }

    }, {
      "./card": 10,
      "camel-case": 3
    }],
    12: [function(require, module, exports) {
      'use strict'

      exports.isPast = function(month, year) {
        return Date.now() >= new Date(year, month)
      }

      exports.month = {
        parse: function(month) {
          return ~~month || void 0
        },
        isValid: function(month) {
          if (typeof month !== 'number') return false
          return month >= 1 && month <= 12
        }
      }

      var base = new Date().getFullYear().toString().substr(0, 2)

      function twoDigit(number) {
        return number >= 10 ? number : '0' + number
      }

      exports.year = {
        parse: function(year, pad) {
          year = ~~year
          if (!pad) return year || void 0
          return ~~(base + twoDigit(year))
        },
        format: function(year, strip) {
          year = year.toString()
          return strip ? year.substr(2, 4) : year
        },
        isValid: function(year) {
          if (typeof year !== 'number') return false
          return year > 0
        },
        isPast: function(year) {
          return new Date().getFullYear() > year
        }
      }

    }, {}],
    13: [function(require, module, exports) {
      'use strict'

      var card = exports.card = require('./card')
      var cvc = exports.cvc = require('./cvc')
      var expiration = exports.expiration = require('./expiration')

      exports.validate = function(cardObj) {
        return {
          card: {
            type: card.type(cardObj.number),
            number: cardObj.number,
            expirationMonth: cardObj.expirationMonth,
            expirationYear: cardObj.expirationYear,
            cvc: cardObj.cvc
          },
          validCardNumber: card.luhn(cardObj.number),
          validExpirationMonth: expiration.month.isValid(cardObj.expirationMonth),
          validExpirationYear: expiration.year.isValid(cardObj.expirationYear),
          validCvc: cvc.isValid(cardObj.cvc),
          expired: expiration.isPast(cardObj.expirationMonth, cardObj.expirationYear)
        }
      }

    }, {
      "./card": 10,
      "./cvc": 11,
      "./expiration": 12
    }],
    14: [function(require, module, exports) {
      (function(global) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _angular = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);

        var _angular2 = _interopRequireDefault(_angular);

        var _creditcards = require('creditcards');

        'use strict';

        exports['default'] = factory;

        factory.$inject = ['$parse'];

        function factory($parse) {
          return {
            restrict: 'A',
            require: 'ngModel',
            compile: function compile(element, attributes) {
              attributes.$set('maxlength', 4);
              attributes.$set('pattern', '[0-9]*');
              attributes.$set('xAutocompletetype', 'cc-csc');

              return function(scope, element, attributes, ngModel) {
                ngModel.$validators.ccCvc = function(value) {
                  return _creditcards.cvc.isValid(value, $parse(attributes.ccType)(scope));
                };
                if (attributes.ccType) {
                  scope.$watch(attributes.ccType, _angular2['default'].bind(ngModel, ngModel.$validate));
                }
              };
            }
          };
        }
        module.exports = exports['default'];

      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
      "creditcards": 13
    }],
    15: [function(require, module, exports) {
      (function(global) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports['default'] = ccExp;
        exports.ccExpMonth = ccExpMonth;
        exports.ccExpYear = ccExpYear;

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        function _slicedToArray(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return']) _i['return']();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          } else {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          }
        }

        var _angular = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);

        var _angular2 = _interopRequireDefault(_angular);

        var _creditcards = require('creditcards');

        var _ap = require('ap');

        'use strict';

        var month = _creditcards.expiration.month;
        var year = _creditcards.expiration.year;
        var isPast = _creditcards.expiration.isPast;

        function ccExp() {
          return {
            restrict: 'AE',
            require: 'ccExp',
            controller: CcExpController,
            link: function link(scope, element, attributes, ccExp) {
              ccExp.$watch();
            }
          };
        }

        CcExpController.$inject = ['$scope', '$element'];

        function CcExpController($scope, $element) {
          var nullFormCtrl = {
            $setValidity: _angular2['default'].noop
          };
          var parentForm = $element.inheritedData('$formController') || nullFormCtrl;
          var ngModel = {
            year: {},
            month: {}
          };
          this.setMonth = function(monthCtrl) {
            ngModel.month = monthCtrl;
          };
          this.setYear = function(yearCtrl) {
            ngModel.year = yearCtrl;
          };

          function setValidity(_ref) {
            var month = _ref.month;
            var year = _ref.year;

            var valid = !!month && !!year && !isPast(month, year);
            parentForm.$setValidity('ccExp', valid, $element);
          }
          this.$watch = function $watchExp() {
            $scope.$watch(function() {
              return {
                month: ngModel.month.$modelValue,
                year: ngModel.year.$modelValue
              };
            }, setValidity, true);
          };
        }

        var nullCcExp = {
          setMonth: _angular2['default'].noop,
          setYear: _angular2['default'].noop
        };

        function ccExpMonth() {
          return {
            restrict: 'A',
            require: ['ngModel', '^?ccExp'],
            compile: function compile(element, attributes) {
              attributes.$set('maxlength', 2);
              attributes.$set('pattern', '[0-9]*');
              attributes.$set('xAutocompletetype', 'cc-exp-month');

              return function(scope, element, attributes, _ref2) {
                var _ref22 = _slicedToArray(_ref2, 2);

                var ngModel = _ref22[0];
                var ccExp = _ref22[1];

                ccExp = ccExp || nullCcExp;
                ccExp.setMonth(ngModel);
                ngModel.$parsers.unshift(month.parse);
                ngModel.$validators.ccExpMonth = month.isValid;
              };
            }
          };
        }

        function ccExpYear() {
          return {
            restrict: 'A',
            require: ['ngModel', '^?ccExp'],
            compile: function compile(element, attributes) {
              var fullYear = attributes.fullYear !== undefined;
              attributes.$set('maxlength', fullYear ? 4 : 2);
              attributes.$set('pattern', '[0-9]*');
              attributes.$set('xAutocompletetype', 'cc-exp-year');

              return function(scope, element, attributes, _ref3) {
                var _ref32 = _slicedToArray(_ref3, 2);

                var ngModel = _ref32[0];
                var ccExp = _ref32[1];

                ccExp = ccExp || nullCcExp;
                ccExp.setYear(ngModel);
                ngModel.$parsers.unshift(_ap.partialRight(year.parse, !fullYear));
                ngModel.$formatters.unshift(function(value) {
                  return value ? year.format(value, !fullYear) : '';
                });
                ngModel.$validators.ccExpYear = function(value) {
                  return year.isValid(value) && !year.isPast(value);
                };
              };
            }
          };
        }

      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
      "ap": 2,
      "creditcards": 13
    }],
    16: [function(require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _slicedToArray(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i['return']) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        } else {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
      }

      var _creditcards = require('creditcards');

      'use strict';

      exports['default'] = factory;

      factory.$inject = ['$parse'];

      function factory($parse) {
        return {
          restrict: 'A',
          require: ['ngModel', 'ccNumber'],
          controller: function controller() {
            this.type = null;
            this.eagerType = null;
          },
          compile: function compile($element, $attributes) {
            $attributes.$set('pattern', '[0-9]*');
            $attributes.$set('xAutocompletetype', 'cc-number');

            return function($scope, $element, $attributes, _ref) {
              var _ref2 = _slicedToArray(_ref, 2);

              var ngModel = _ref2[0];
              var ccNumber = _ref2[1];

              $scope.$watch($attributes.ngModel, function(number) {
                ngModel.$ccType = ccNumber.type = _creditcards.card.type(number);
              });

              function $viewValue() {
                return ngModel.$viewValue;
              }
              if (typeof $attributes.ccEagerType !== 'undefined') {
                $scope.$watch($viewValue, function eagerTypeCheck(number) {
                  if (!number) return;
                  number = _creditcards.card.parse(number);
                  ngModel.$ccEagerType = ccNumber.eagerType = _creditcards.card.type(number, true);
                });
              }
              if ($attributes.ccType) {
                $scope.$watch($attributes.ccType, function() {
                  ngModel.$validate();
                });
              }
              if (typeof $attributes.ccFormat !== 'undefined') {
                $scope.$watch($viewValue, function formatInput(input, previous) {
                  if (!input) return;
                  var element = $element[0];
                  var formatted = _creditcards.card.format(_creditcards.card.parse(input));
                  ngModel.$setViewValue(formatted);
                  var selectionEnd = element.selectionEnd;

                  ngModel.$render();
                  if (formatted && !formatted.charAt(selectionEnd - 1).trim()) {
                    selectionEnd++;
                  }
                  element.setSelectionRange(selectionEnd, selectionEnd);
                });
              }
              ngModel.$parsers.unshift(_creditcards.card.parse);
              ngModel.$validators.ccNumber = function(number) {
                return _creditcards.card.isValid(number);
              };
              ngModel.$validators.ccNumberType = function(number) {
                return _creditcards.card.isValid(number, $parse($attributes.ccType)($scope));
              };
            };
          }
        };
      }
      module.exports = exports['default'];

    }, {
      "creditcards": 13
    }]
  }, {}, [1])(1)
});
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
  "use strict";

  function a() {
    return Hc.apply(null, arguments)
  }

  function b(a) {
    Hc = a
  }

  function c(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
  }

  function d(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
  }

  function e(a, b) {
    var c, d = [];
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
    return d
  }

  function f(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }

  function g(a, b) {
    for (var c in b) f(b, c) && (a[c] = b[c]);
    return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
  }

  function h(a, b, c, d) {
    return Ca(a, b, c, d, !0).utc()
  }

  function i() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    }
  }

  function j(a) {
    return null == a._pf && (a._pf = i()), a._pf
  }

  function k(a) {
    if (null == a._isValid) {
      var b = j(a);
      a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
    }
    return a._isValid
  }

  function l(a) {
    var b = h(NaN);
    return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
  }

  function m(a, b) {
    var c, d, e;
    if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Jc.length > 0)
      for (c in Jc) d = Jc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
    return a
  }

  function n(b) {
    m(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Kc === !1 && (Kc = !0, a.updateOffset(this), Kc = !1)
  }

  function o(a) {
    return a instanceof n || null != a && null != a._isAMomentObject
  }

  function p(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a)
  }

  function q(a) {
    var b = +a,
      c = 0;
    return 0 !== b && isFinite(b) && (c = p(b)), c
  }

  function r(a, b, c) {
    var d, e = Math.min(a.length, b.length),
      f = Math.abs(a.length - b.length),
      g = 0;
    for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
    return g + f
  }

  function s() {}

  function t(a) {
    return a ? a.toLowerCase().replace("_", "-") : a
  }

  function u(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = t(a[f]).split("-"), b = e.length, c = t(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = v(e.slice(0, b).join("-"))) return d;
        if (c && c.length >= b && r(e, c, !0) >= b - 1) break;
        b--
      }
      f++
    }
    return null
  }

  function v(a) {
    var b = null;
    if (!Lc[a] && "undefined" != typeof module && module && module.exports) try {
      b = Ic._abbr, require("./locale/" + a), w(b)
    } catch (c) {}
    return Lc[a]
  }

  function w(a, b) {
    var c;
    return a && (c = "undefined" == typeof b ? y(a) : x(a, b), c && (Ic = c)), Ic._abbr
  }

  function x(a, b) {
    return null !== b ? (b.abbr = a, Lc[a] = Lc[a] || new s, Lc[a].set(b), w(a), Lc[a]) : (delete Lc[a], null)
  }

  function y(a) {
    var b;
    if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ic;
    if (!c(a)) {
      if (b = v(a)) return b;
      a = [a]
    }
    return u(a)
  }

  function z(a, b) {
    var c = a.toLowerCase();
    Mc[c] = Mc[c + "s"] = Mc[b] = a
  }

  function A(a) {
    return "string" == typeof a ? Mc[a] || Mc[a.toLowerCase()] : void 0
  }

  function B(a) {
    var b, c, d = {};
    for (c in a) f(a, c) && (b = A(c), b && (d[b] = a[c]));
    return d
  }

  function C(b, c) {
    return function(d) {
      return null != d ? (E(this, b, d), a.updateOffset(this, c), this) : D(this, b)
    }
  }

  function D(a, b) {
    return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
  }

  function E(a, b, c) {
    return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
  }

  function F(a, b) {
    var c;
    if ("object" == typeof a)
      for (c in a) this.set(c, a[c]);
    else if (a = A(a), "function" == typeof this[a]) return this[a](b);
    return this
  }

  function G(a, b, c) {
    var d = "" + Math.abs(a),
      e = b - d.length,
      f = a >= 0;
    return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
  }

  function H(a, b, c, d) {
    var e = d;
    "string" == typeof d && (e = function() {
      return this[d]()
    }), a && (Qc[a] = e), b && (Qc[b[0]] = function() {
      return G(e.apply(this, arguments), b[1], b[2])
    }), c && (Qc[c] = function() {
      return this.localeData().ordinal(e.apply(this, arguments), a)
    })
  }

  function I(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
  }

  function J(a) {
    var b, c, d = a.match(Nc);
    for (b = 0, c = d.length; c > b; b++) Qc[d[b]] ? d[b] = Qc[d[b]] : d[b] = I(d[b]);
    return function(e) {
      var f = "";
      for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
      return f
    }
  }

  function K(a, b) {
    return a.isValid() ? (b = L(b, a.localeData()), Pc[b] = Pc[b] || J(b), Pc[b](a)) : a.localeData().invalidDate()
  }

  function L(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a
    }
    var d = 5;
    for (Oc.lastIndex = 0; d >= 0 && Oc.test(a);) a = a.replace(Oc, c), Oc.lastIndex = 0, d -= 1;
    return a
  }

  function M(a) {
    return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a)
  }

  function N(a, b, c) {
    dd[a] = M(b) ? b : function(a) {
      return a && c ? c : b
    }
  }

  function O(a, b) {
    return f(dd, a) ? dd[a](b._strict, b._locale) : new RegExp(P(a))
  }

  function P(a) {
    return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
      return b || c || d || e
    }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  function Q(a, b) {
    var c, d = b;
    for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
        c[b] = q(a)
      }), c = 0; c < a.length; c++) ed[a[c]] = d
  }

  function R(a, b) {
    Q(a, function(a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e)
    })
  }

  function S(a, b, c) {
    null != b && f(ed, a) && ed[a](b, c._a, c, a)
  }

  function T(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
  }

  function U(a) {
    return this._months[a.month()]
  }

  function V(a) {
    return this._monthsShort[a.month()]
  }

  function W(a, b, c) {
    var d, e, f;
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
      if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
      if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
      if (!c && this._monthsParse[d].test(a)) return d
    }
  }

  function X(a, b) {
    var c;
    return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), T(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
  }

  function Y(b) {
    return null != b ? (X(this, b), a.updateOffset(this, !0), this) : D(this, "Month")
  }

  function Z() {
    return T(this.year(), this.month())
  }

  function $(a) {
    var b, c = a._a;
    return c && -2 === j(a).overflow && (b = c[gd] < 0 || c[gd] > 11 ? gd : c[hd] < 1 || c[hd] > T(c[fd], c[gd]) ? hd : c[id] < 0 || c[id] > 24 || 24 === c[id] && (0 !== c[jd] || 0 !== c[kd] || 0 !== c[ld]) ? id : c[jd] < 0 || c[jd] > 59 ? jd : c[kd] < 0 || c[kd] > 59 ? kd : c[ld] < 0 || c[ld] > 999 ? ld : -1, j(a)._overflowDayOfYear && (fd > b || b > hd) && (b = hd), j(a).overflow = b), a
  }

  function _(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
  }

  function aa(a, b) {
    var c = !0;
    return g(function() {
      return c && (_(a + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
    }, b)
  }

  function ba(a, b) {
    od[a] || (_(b), od[a] = !0)
  }

  function ca(a) {
    var b, c, d = a._i,
      e = pd.exec(d);
    if (e) {
      for (j(a).iso = !0, b = 0, c = qd.length; c > b; b++)
        if (qd[b][1].exec(d)) {
          a._f = qd[b][0];
          break
        }
      for (b = 0, c = rd.length; c > b; b++)
        if (rd[b][1].exec(d)) {
          a._f += (e[6] || " ") + rd[b][0];
          break
        }
      d.match(ad) && (a._f += "Z"), va(a)
    } else a._isValid = !1
  }

  function da(b) {
    var c = sd.exec(b._i);
    return null !== c ? void(b._d = new Date(+c[1])) : (ca(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
  }

  function ea(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return 1970 > a && h.setFullYear(a), h
  }

  function fa(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return 1970 > a && b.setUTCFullYear(a), b
  }

  function ga(a) {
    return ha(a) ? 366 : 365
  }

  function ha(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
  }

  function ia() {
    return ha(this.year())
  }

  function ja(a, b, c) {
    var d, e = c - b,
      f = c - a.day();
    return f > e && (f -= 7), e - 7 > f && (f += 7), d = Da(a).add(f, "d"), {
      week: Math.ceil(d.dayOfYear() / 7),
      year: d.year()
    }
  }

  function ka(a) {
    return ja(a, this._week.dow, this._week.doy).week
  }

  function la() {
    return this._week.dow
  }

  function ma() {
    return this._week.doy
  }

  function na(a) {
    var b = this.localeData().week(this);
    return null == a ? b : this.add(7 * (a - b), "d")
  }

  function oa(a) {
    var b = ja(this, 1, 4).week;
    return null == a ? b : this.add(7 * (a - b), "d")
  }

  function pa(a, b, c, d, e) {
    var f, g = 6 + e - d,
      h = fa(a, 0, 1 + g),
      i = h.getUTCDay();
    return e > i && (i += 7), c = null != c ? 1 * c : e, f = 1 + g + 7 * (b - 1) - i + c, {
      year: f > 0 ? a : a - 1,
      dayOfYear: f > 0 ? f : ga(a - 1) + f
    }
  }

  function qa(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == a ? b : this.add(a - b, "d")
  }

  function ra(a, b, c) {
    return null != a ? a : null != b ? b : c
  }

  function sa(a) {
    var b = new Date;
    return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
  }

  function ta(a) {
    var b, c, d, e, f = [];
    if (!a._d) {
      for (d = sa(a), a._w && null == a._a[hd] && null == a._a[gd] && ua(a), a._dayOfYear && (e = ra(a._a[fd], d[fd]), a._dayOfYear > ga(e) && (j(a)._overflowDayOfYear = !0), c = fa(e, 0, a._dayOfYear), a._a[gd] = c.getUTCMonth(), a._a[hd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
      for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      24 === a._a[id] && 0 === a._a[jd] && 0 === a._a[kd] && 0 === a._a[ld] && (a._nextDay = !0, a._a[id] = 0), a._d = (a._useUTC ? fa : ea).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[id] = 24)
    }
  }

  function ua(a) {
    var b, c, d, e, f, g, h;
    b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ra(b.GG, a._a[fd], ja(Da(), 1, 4).year), d = ra(b.W, 1), e = ra(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ra(b.gg, a._a[fd], ja(Da(), f, g).year), d = ra(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = pa(c, d, e, g, f), a._a[fd] = h.year, a._dayOfYear = h.dayOfYear
  }

  function va(b) {
    if (b._f === a.ISO_8601) return void ca(b);
    b._a = [], j(b).empty = !0;
    var c, d, e, f, g, h = "" + b._i,
      i = h.length,
      k = 0;
    for (e = L(b._f, b._locale).match(Nc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(O(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Qc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), S(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
    j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[id] <= 12 && b._a[id] > 0 && (j(b).bigHour = void 0), b._a[id] = wa(b._locale, b._a[id], b._meridiem), ta(b), $(b)
  }

  function wa(a, b, c) {
    var d;
    return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
  }

  function xa(a) {
    var b, c, d, e, f;
    if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
    for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], va(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
    g(a, c || b)
  }

  function ya(a) {
    if (!a._d) {
      var b = B(a._i);
      a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ta(a)
    }
  }

  function za(a) {
    var b = new n($(Aa(a)));
    return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
  }

  function Aa(a) {
    var b = a._i,
      e = a._f;
    return a._locale = a._locale || y(a._l), null === b || void 0 === e && "" === b ? l({
      nullInput: !0
    }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), o(b) ? new n($(b)) : (c(e) ? xa(a) : e ? va(a) : d(b) ? a._d = b : Ba(a), a))
  }

  function Ba(b) {
    var f = b._i;
    void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? da(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
      return parseInt(a, 10)
    }), ta(b)) : "object" == typeof f ? ya(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
  }

  function Ca(a, b, c, d, e) {
    var f = {};
    return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, za(f)
  }

  function Da(a, b, c, d) {
    return Ca(a, b, c, d, !1)
  }

  function Ea(a, b) {
    var d, e;
    if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Da();
    for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
    return d
  }

  function Fa() {
    var a = [].slice.call(arguments, 0);
    return Ea("isBefore", a)
  }

  function Ga() {
    var a = [].slice.call(arguments, 0);
    return Ea("isAfter", a)
  }

  function Ha(a) {
    var b = B(a),
      c = b.year || 0,
      d = b.quarter || 0,
      e = b.month || 0,
      f = b.week || 0,
      g = b.day || 0,
      h = b.hour || 0,
      i = b.minute || 0,
      j = b.second || 0,
      k = b.millisecond || 0;
    this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = y(), this._bubble()
  }

  function Ia(a) {
    return a instanceof Ha
  }

  function Ja(a, b) {
    H(a, 0, 0, function() {
      var a = this.utcOffset(),
        c = "+";
      return 0 > a && (a = -a, c = "-"), c + G(~~(a / 60), 2) + b + G(~~a % 60, 2)
    })
  }

  function Ka(a) {
    var b = (a || "").match(ad) || [],
      c = b[b.length - 1] || [],
      d = (c + "").match(xd) || ["-", 0, 0],
      e = +(60 * d[1]) + q(d[2]);
    return "+" === d[0] ? e : -e
  }

  function La(b, c) {
    var e, f;
    return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Da(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Da(b).local()
  }

  function Ma(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
  }

  function Na(b, c) {
    var d, e = this._offset || 0;
    return null != b ? ("string" == typeof b && (b = Ka(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ma(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? bb(this, Ya(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ma(this)
  }

  function Oa(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
  }

  function Pa(a) {
    return this.utcOffset(0, a)
  }

  function Qa(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ma(this), "m")), this
  }

  function Ra() {
    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ka(this._i)), this
  }

  function Sa(a) {
    return a = a ? Da(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
  }

  function Ta() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }

  function Ua() {
    if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
    var a = {};
    if (m(a, this), a = Aa(a), a._a) {
      var b = a._isUTC ? h(a._a) : Da(a._a);
      this._isDSTShifted = this.isValid() && r(a._a, b.toArray()) > 0
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
  }

  function Va() {
    return !this._isUTC
  }

  function Wa() {
    return this._isUTC
  }

  function Xa() {
    return this._isUTC && 0 === this._offset
  }

  function Ya(a, b) {
    var c, d, e, g = a,
      h = null;
    return Ia(a) ? g = {
      ms: a._milliseconds,
      d: a._days,
      M: a._months
    } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = yd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
      y: 0,
      d: q(h[hd]) * c,
      h: q(h[id]) * c,
      m: q(h[jd]) * c,
      s: q(h[kd]) * c,
      ms: q(h[ld]) * c
    }) : (h = zd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
      y: Za(h[2], c),
      M: Za(h[3], c),
      d: Za(h[4], c),
      h: Za(h[5], c),
      m: Za(h[6], c),
      s: Za(h[7], c),
      w: Za(h[8], c)
    }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = _a(Da(g.from), Da(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ha(g), Ia(a) && f(a, "_locale") && (d._locale = a._locale), d
  }

  function Za(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b
  }

  function $a(a, b) {
    var c = {
      milliseconds: 0,
      months: 0
    };
    return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
  }

  function _a(a, b) {
    var c;
    return b = La(b, a), a.isBefore(b) ? c = $a(a, b) : (c = $a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
  }

  function ab(a, b) {
    return function(c, d) {
      var e, f;
      return null === d || isNaN(+d) || (ba(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ya(c, d), bb(this, e, a), this
    }
  }

  function bb(b, c, d, e) {
    var f = c._milliseconds,
      g = c._days,
      h = c._months;
    e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && E(b, "Date", D(b, "Date") + g * d), h && X(b, D(b, "Month") + h * d), e && a.updateOffset(b, g || h)
  }

  function cb(a, b) {
    var c = a || Da(),
      d = La(c, this).startOf("day"),
      e = this.diff(d, "days", !0),
      f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
    return this.format(b && b[f] || this.localeData().calendar(f, this, Da(c)))
  }

  function db() {
    return new n(this)
  }

  function eb(a, b) {
    var c;
    return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this > +a) : (c = o(a) ? +a : +Da(a), c < +this.clone().startOf(b))
  }

  function fb(a, b) {
    var c;
    return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +a > +this) : (c = o(a) ? +a : +Da(a), +this.clone().endOf(b) < c)
  }

  function gb(a, b, c) {
    return this.isAfter(a, c) && this.isBefore(b, c)
  }

  function hb(a, b) {
    var c;
    return b = A(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this === +a) : (c = +Da(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
  }

  function ib(a, b, c) {
    var d, e, f = La(a, this),
      g = 6e4 * (f.utcOffset() - this.utcOffset());
    return b = A(b), "year" === b || "month" === b || "quarter" === b ? (e = jb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : p(e)
  }

  function jb(a, b) {
    var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
      f = a.clone().add(e, "months");
    return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
  }

  function kb() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }

  function lb() {
    var a = this.clone().utc();
    return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : K(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
  }

  function mb(b) {
    var c = K(this, b || a.defaultFormat);
    return this.localeData().postformat(c)
  }

  function nb(a, b) {
    return this.isValid() ? Ya({
      to: this,
      from: a
    }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
  }

  function ob(a) {
    return this.from(Da(), a)
  }

  function pb(a, b) {
    return this.isValid() ? Ya({
      from: this,
      to: a
    }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
  }

  function qb(a) {
    return this.to(Da(), a)
  }

  function rb(a) {
    var b;
    return void 0 === a ? this._locale._abbr : (b = y(a), null != b && (this._locale = b), this)
  }

  function sb() {
    return this._locale
  }

  function tb(a) {
    switch (a = A(a)) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0)
    }
    return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
  }

  function ub(a) {
    return a = A(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
  }

  function vb() {
    return +this._d - 6e4 * (this._offset || 0)
  }

  function wb() {
    return Math.floor(+this / 1e3)
  }

  function xb() {
    return this._offset ? new Date(+this) : this._d
  }

  function yb() {
    var a = this;
    return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
  }

  function zb() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds()
    }
  }

  function Ab() {
    return k(this)
  }

  function Bb() {
    return g({}, j(this))
  }

  function Cb() {
    return j(this).overflow
  }

  function Db(a, b) {
    H(0, [a, a.length], 0, b)
  }

  function Eb(a, b, c) {
    return ja(Da([a, 11, 31 + b - c]), b, c).week
  }

  function Fb(a) {
    var b = ja(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return null == a ? b : this.add(a - b, "y")
  }

  function Gb(a) {
    var b = ja(this, 1, 4).year;
    return null == a ? b : this.add(a - b, "y")
  }

  function Hb() {
    return Eb(this.year(), 1, 4)
  }

  function Ib() {
    var a = this.localeData()._week;
    return Eb(this.year(), a.dow, a.doy)
  }

  function Jb(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
  }

  function Kb(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
  }

  function Lb(a) {
    return this._weekdays[a.day()]
  }

  function Mb(a) {
    return this._weekdaysShort[a.day()]
  }

  function Nb(a) {
    return this._weekdaysMin[a.day()]
  }

  function Ob(a) {
    var b, c, d;
    for (this._weekdaysParse = this._weekdaysParse || [], b = 0; 7 > b; b++)
      if (this._weekdaysParse[b] || (c = Da([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
  }

  function Pb(a) {
    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != a ? (a = Kb(a, this.localeData()), this.add(a - b, "d")) : b
  }

  function Qb(a) {
    var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == a ? b : this.add(a - b, "d")
  }

  function Rb(a) {
    return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
  }

  function Sb(a, b) {
    H(a, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), b)
    })
  }

  function Tb(a, b) {
    return b._meridiemParse
  }

  function Ub(a) {
    return "p" === (a + "").toLowerCase().charAt(0)
  }

  function Vb(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
  }

  function Wb(a, b) {
    b[ld] = q(1e3 * ("0." + a))
  }

  function Xb() {
    return this._isUTC ? "UTC" : ""
  }

  function Yb() {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }

  function Zb(a) {
    return Da(1e3 * a)
  }

  function $b() {
    return Da.apply(null, arguments).parseZone()
  }

  function _b(a, b, c) {
    var d = this._calendar[a];
    return "function" == typeof d ? d.call(b, c) : d
  }

  function ac(a) {
    var b = this._longDateFormat[a],
      c = this._longDateFormat[a.toUpperCase()];
    return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
      return a.slice(1)
    }), this._longDateFormat[a])
  }

  function bc() {
    return this._invalidDate
  }

  function cc(a) {
    return this._ordinal.replace("%d", a)
  }

  function dc(a) {
    return a
  }

  function ec(a, b, c, d) {
    var e = this._relativeTime[c];
    return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
  }

  function fc(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];
    return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
  }

  function gc(a) {
    var b, c;
    for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
  }

  function hc(a, b, c, d) {
    var e = y(),
      f = h().set(d, b);
    return e[c](f, a)
  }

  function ic(a, b, c, d, e) {
    if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return hc(a, b, c, e);
    var f, g = [];
    for (f = 0; d > f; f++) g[f] = hc(a, f, c, e);
    return g
  }

  function jc(a, b) {
    return ic(a, b, "months", 12, "month")
  }

  function kc(a, b) {
    return ic(a, b, "monthsShort", 12, "month")
  }

  function lc(a, b) {
    return ic(a, b, "weekdays", 7, "day")
  }

  function mc(a, b) {
    return ic(a, b, "weekdaysShort", 7, "day")
  }

  function nc(a, b) {
    return ic(a, b, "weekdaysMin", 7, "day")
  }

  function oc() {
    var a = this._data;
    return this._milliseconds = Wd(this._milliseconds), this._days = Wd(this._days), this._months = Wd(this._months), a.milliseconds = Wd(a.milliseconds), a.seconds = Wd(a.seconds), a.minutes = Wd(a.minutes), a.hours = Wd(a.hours), a.months = Wd(a.months), a.years = Wd(a.years), this
  }

  function pc(a, b, c, d) {
    var e = Ya(b, c);
    return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
  }

  function qc(a, b) {
    return pc(this, a, b, 1)
  }

  function rc(a, b) {
    return pc(this, a, b, -1)
  }

  function sc(a) {
    return 0 > a ? Math.floor(a) : Math.ceil(a)
  }

  function tc() {
    var a, b, c, d, e, f = this._milliseconds,
      g = this._days,
      h = this._months,
      i = this._data;
    return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * sc(vc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = p(f / 1e3), i.seconds = a % 60, b = p(a / 60), i.minutes = b % 60, c = p(b / 60), i.hours = c % 24, g += p(c / 24), e = p(uc(g)), h += e, g -= sc(vc(e)), d = p(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
  }

  function uc(a) {
    return 4800 * a / 146097
  }

  function vc(a) {
    return 146097 * a / 4800
  }

  function wc(a) {
    var b, c, d = this._milliseconds;
    if (a = A(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + uc(b), "month" === a ? c : c / 12;
    switch (b = this._days + Math.round(vc(this._months)), a) {
      case "week":
        return b / 7 + d / 6048e5;
      case "day":
        return b + d / 864e5;
      case "hour":
        return 24 * b + d / 36e5;
      case "minute":
        return 1440 * b + d / 6e4;
      case "second":
        return 86400 * b + d / 1e3;
      case "millisecond":
        return Math.floor(864e5 * b) + d;
      default:
        throw new Error("Unknown unit " + a)
    }
  }

  function xc() {
    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12)
  }

  function yc(a) {
    return function() {
      return this.as(a)
    }
  }

  function zc(a) {
    return a = A(a), this[a + "s"]()
  }

  function Ac(a) {
    return function() {
      return this._data[a]
    }
  }

  function Bc() {
    return p(this.days() / 7)
  }

  function Cc(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d)
  }

  function Dc(a, b, c) {
    var d = Ya(a).abs(),
      e = ke(d.as("s")),
      f = ke(d.as("m")),
      g = ke(d.as("h")),
      h = ke(d.as("d")),
      i = ke(d.as("M")),
      j = ke(d.as("y")),
      k = e < le.s && ["s", e] || 1 === f && ["m"] || f < le.m && ["mm", f] || 1 === g && ["h"] || g < le.h && ["hh", g] || 1 === h && ["d"] || h < le.d && ["dd", h] || 1 === i && ["M"] || i < le.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
    return k[2] = b, k[3] = +a > 0, k[4] = c, Cc.apply(null, k)
  }

  function Ec(a, b) {
    return void 0 === le[a] ? !1 : void 0 === b ? le[a] : (le[a] = b, !0)
  }

  function Fc(a) {
    var b = this.localeData(),
      c = Dc(this, !a, b);
    return a && (c = b.pastFuture(+this, c)), b.postformat(c)
  }

  function Gc() {
    var a, b, c, d = me(this._milliseconds) / 1e3,
      e = me(this._days),
      f = me(this._months);
    a = p(d / 60), b = p(a / 60), d %= 60, a %= 60, c = p(f / 12), f %= 12;
    var g = c,
      h = f,
      i = e,
      j = b,
      k = a,
      l = d,
      m = this.asSeconds();
    return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
  }
  var Hc, Ic, Jc = a.momentProperties = [],
    Kc = !1,
    Lc = {},
    Mc = {},
    Nc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Oc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Pc = {},
    Qc = {},
    Rc = /\d/,
    Sc = /\d\d/,
    Tc = /\d{3}/,
    Uc = /\d{4}/,
    Vc = /[+-]?\d{6}/,
    Wc = /\d\d?/,
    Xc = /\d{1,3}/,
    Yc = /\d{1,4}/,
    Zc = /[+-]?\d{1,6}/,
    $c = /\d+/,
    _c = /[+-]?\d+/,
    ad = /Z|[+-]\d\d:?\d\d/gi,
    bd = /[+-]?\d+(\.\d{1,3})?/,
    cd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    dd = {},
    ed = {},
    fd = 0,
    gd = 1,
    hd = 2,
    id = 3,
    jd = 4,
    kd = 5,
    ld = 6;
  H("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
  }), H("MMM", 0, 0, function(a) {
    return this.localeData().monthsShort(this, a)
  }), H("MMMM", 0, 0, function(a) {
    return this.localeData().months(this, a)
  }), z("month", "M"), N("M", Wc), N("MM", Wc, Sc), N("MMM", cd), N("MMMM", cd), Q(["M", "MM"], function(a, b) {
    b[gd] = q(a) - 1
  }), Q(["MMM", "MMMM"], function(a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);
    null != e ? b[gd] = e : j(c).invalidMonth = a
  });
  var md = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    nd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    od = {};
  a.suppressDeprecationWarnings = !1;
  var pd = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    qd = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
      ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
      ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d{2}/],
      ["YYYY-DDD", /\d{4}-\d{3}/]
    ],
    rd = [
      ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
      ["HH:mm", /(T| )\d\d:\d\d/],
      ["HH", /(T| )\d\d/]
    ],
    sd = /^\/?Date\((\-?\d+)/i;
  a.createFromInputFallback = aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
  }), H(0, ["YY", 2], 0, function() {
    return this.year() % 100
  }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), N("Y", _c), N("YY", Wc, Sc), N("YYYY", Yc, Uc), N("YYYYY", Zc, Vc), N("YYYYYY", Zc, Vc), Q(["YYYYY", "YYYYYY"], fd), Q("YYYY", function(b, c) {
    c[fd] = 2 === b.length ? a.parseTwoDigitYear(b) : q(b)
  }), Q("YY", function(b, c) {
    c[fd] = a.parseTwoDigitYear(b)
  }), a.parseTwoDigitYear = function(a) {
    return q(a) + (q(a) > 68 ? 1900 : 2e3)
  };
  var td = C("FullYear", !1);
  H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), N("w", Wc), N("ww", Wc, Sc), N("W", Wc), N("WW", Wc, Sc), R(["w", "ww", "W", "WW"], function(a, b, c, d) {
    b[d.substr(0, 1)] = q(a)
  });
  var ud = {
    dow: 0,
    doy: 6
  };
  H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), N("DDD", Xc), N("DDDD", Tc), Q(["DDD", "DDDD"], function(a, b, c) {
    c._dayOfYear = q(a)
  }), a.ISO_8601 = function() {};
  var vd = aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
      var a = Da.apply(null, arguments);
      return this > a ? this : a
    }),
    wd = aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
      var a = Da.apply(null, arguments);
      return a > this ? this : a
    });
  Ja("Z", ":"), Ja("ZZ", ""), N("Z", ad), N("ZZ", ad), Q(["Z", "ZZ"], function(a, b, c) {
    c._useUTC = !0, c._tzm = Ka(a)
  });
  var xd = /([\+\-]|\d\d)/gi;
  a.updateOffset = function() {};
  var yd = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    zd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  Ya.fn = Ha.prototype;
  var Ad = ab(1, "add"),
    Bd = ab(-1, "subtract");
  a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  var Cd = aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
    return void 0 === a ? this.localeData() : this.locale(a)
  });
  H(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
  }), H(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
  }), Db("gggg", "weekYear"), Db("ggggg", "weekYear"), Db("GGGG", "isoWeekYear"), Db("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), N("G", _c), N("g", _c), N("GG", Wc, Sc), N("gg", Wc, Sc), N("GGGG", Yc, Uc), N("gggg", Yc, Uc), N("GGGGG", Zc, Vc), N("ggggg", Zc, Vc), R(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
    b[d.substr(0, 2)] = q(a)
  }), R(["gg", "GG"], function(b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b)
  }), H("Q", 0, 0, "quarter"), z("quarter", "Q"), N("Q", Rc), Q("Q", function(a, b) {
    b[gd] = 3 * (q(a) - 1)
  }), H("D", ["DD", 2], "Do", "date"), z("date", "D"), N("D", Wc), N("DD", Wc, Sc), N("Do", function(a, b) {
    return a ? b._ordinalParse : b._ordinalParseLenient
  }), Q(["D", "DD"], hd), Q("Do", function(a, b) {
    b[hd] = q(a.match(Wc)[0], 10)
  });
  var Dd = C("Date", !0);
  H("d", 0, "do", "day"), H("dd", 0, 0, function(a) {
    return this.localeData().weekdaysMin(this, a)
  }), H("ddd", 0, 0, function(a) {
    return this.localeData().weekdaysShort(this, a)
  }), H("dddd", 0, 0, function(a) {
    return this.localeData().weekdays(this, a)
  }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), N("d", Wc), N("e", Wc), N("E", Wc), N("dd", cd), N("ddd", cd), N("dddd", cd), R(["dd", "ddd", "dddd"], function(a, b, c) {
    var d = c._locale.weekdaysParse(a);
    null != d ? b.d = d : j(c).invalidWeekday = a
  }), R(["d", "e", "E"], function(a, b, c, d) {
    b[d] = q(a)
  });
  var Ed = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Fd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Gd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, function() {
    return this.hours() % 12 || 12
  }), Sb("a", !0), Sb("A", !1), z("hour", "h"), N("a", Tb), N("A", Tb), N("H", Wc), N("h", Wc), N("HH", Wc, Sc), N("hh", Wc, Sc), Q(["H", "HH"], id), Q(["a", "A"], function(a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a
  }), Q(["h", "hh"], function(a, b, c) {
    b[id] = q(a), j(c).bigHour = !0
  });
  var Hd = /[ap]\.?m?\.?/i,
    Id = C("Hours", !0);
  H("m", ["mm", 2], 0, "minute"), z("minute", "m"), N("m", Wc), N("mm", Wc, Sc), Q(["m", "mm"], jd);
  var Jd = C("Minutes", !1);
  H("s", ["ss", 2], 0, "second"), z("second", "s"), N("s", Wc), N("ss", Wc, Sc), Q(["s", "ss"], kd);
  var Kd = C("Seconds", !1);
  H("S", 0, 0, function() {
    return ~~(this.millisecond() / 100)
  }), H(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10)
  }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
    return 10 * this.millisecond()
  }), H(0, ["SSSSS", 5], 0, function() {
    return 100 * this.millisecond()
  }), H(0, ["SSSSSS", 6], 0, function() {
    return 1e3 * this.millisecond()
  }), H(0, ["SSSSSSS", 7], 0, function() {
    return 1e4 * this.millisecond()
  }), H(0, ["SSSSSSSS", 8], 0, function() {
    return 1e5 * this.millisecond()
  }), H(0, ["SSSSSSSSS", 9], 0, function() {
    return 1e6 * this.millisecond()
  }), z("millisecond", "ms"), N("S", Xc, Rc), N("SS", Xc, Sc), N("SSS", Xc, Tc);
  var Ld;
  for (Ld = "SSSS"; Ld.length <= 9; Ld += "S") N(Ld, $c);
  for (Ld = "S"; Ld.length <= 9; Ld += "S") Q(Ld, Wb);
  var Md = C("Milliseconds", !1);
  H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
  var Nd = n.prototype;
  Nd.add = Ad, Nd.calendar = cb, Nd.clone = db, Nd.diff = ib, Nd.endOf = ub, Nd.format = mb, Nd.from = nb, Nd.fromNow = ob, Nd.to = pb, Nd.toNow = qb, Nd.get = F, Nd.invalidAt = Cb, Nd.isAfter = eb, Nd.isBefore = fb, Nd.isBetween = gb, Nd.isSame = hb, Nd.isValid = Ab, Nd.lang = Cd, Nd.locale = rb, Nd.localeData = sb, Nd.max = wd, Nd.min = vd, Nd.parsingFlags = Bb, Nd.set = F, Nd.startOf = tb, Nd.subtract = Bd, Nd.toArray = yb, Nd.toObject = zb, Nd.toDate = xb, Nd.toISOString = lb, Nd.toJSON = lb, Nd.toString = kb, Nd.unix = wb, Nd.valueOf = vb, Nd.year = td, Nd.isLeapYear = ia, Nd.weekYear = Fb, Nd.isoWeekYear = Gb, Nd.quarter = Nd.quarters = Jb, Nd.month = Y, Nd.daysInMonth = Z, Nd.week = Nd.weeks = na, Nd.isoWeek = Nd.isoWeeks = oa, Nd.weeksInYear = Ib, Nd.isoWeeksInYear = Hb, Nd.date = Dd, Nd.day = Nd.days = Pb, Nd.weekday = Qb, Nd.isoWeekday = Rb, Nd.dayOfYear = qa, Nd.hour = Nd.hours = Id, Nd.minute = Nd.minutes = Jd, Nd.second = Nd.seconds = Kd,
    Nd.millisecond = Nd.milliseconds = Md, Nd.utcOffset = Na, Nd.utc = Pa, Nd.local = Qa, Nd.parseZone = Ra, Nd.hasAlignedHourOffset = Sa, Nd.isDST = Ta, Nd.isDSTShifted = Ua, Nd.isLocal = Va, Nd.isUtcOffset = Wa, Nd.isUtc = Xa, Nd.isUTC = Xa, Nd.zoneAbbr = Xb, Nd.zoneName = Yb, Nd.dates = aa("dates accessor is deprecated. Use date instead.", Dd), Nd.months = aa("months accessor is deprecated. Use month instead", Y), Nd.years = aa("years accessor is deprecated. Use year instead", td), Nd.zone = aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Oa);
  var Od = Nd,
    Pd = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    Qd = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    Rd = "Invalid date",
    Sd = "%d",
    Td = /\d{1,2}/,
    Ud = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    Vd = s.prototype;
  Vd._calendar = Pd, Vd.calendar = _b, Vd._longDateFormat = Qd, Vd.longDateFormat = ac, Vd._invalidDate = Rd, Vd.invalidDate = bc, Vd._ordinal = Sd, Vd.ordinal = cc, Vd._ordinalParse = Td, Vd.preparse = dc, Vd.postformat = dc, Vd._relativeTime = Ud, Vd.relativeTime = ec, Vd.pastFuture = fc, Vd.set = gc, Vd.months = U, Vd._months = md, Vd.monthsShort = V, Vd._monthsShort = nd, Vd.monthsParse = W, Vd.week = ka, Vd._week = ud, Vd.firstDayOfYear = ma, Vd.firstDayOfWeek = la, Vd.weekdays = Lb, Vd._weekdays = Ed, Vd.weekdaysMin = Nb, Vd._weekdaysMin = Gd, Vd.weekdaysShort = Mb, Vd._weekdaysShort = Fd, Vd.weekdaysParse = Ob, Vd.isPM = Ub, Vd._meridiemParse = Hd, Vd.meridiem = Vb, w("en", {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(a) {
      var b = a % 10,
        c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
      return a + c
    }
  }), a.lang = aa("moment.lang is deprecated. Use moment.locale instead.", w), a.langData = aa("moment.langData is deprecated. Use moment.localeData instead.", y);
  var Wd = Math.abs,
    Xd = yc("ms"),
    Yd = yc("s"),
    Zd = yc("m"),
    $d = yc("h"),
    _d = yc("d"),
    ae = yc("w"),
    be = yc("M"),
    ce = yc("y"),
    de = Ac("milliseconds"),
    ee = Ac("seconds"),
    fe = Ac("minutes"),
    ge = Ac("hours"),
    he = Ac("days"),
    ie = Ac("months"),
    je = Ac("years"),
    ke = Math.round,
    le = {
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    },
    me = Math.abs,
    ne = Ha.prototype;
  ne.abs = oc, ne.add = qc, ne.subtract = rc, ne.as = wc, ne.asMilliseconds = Xd, ne.asSeconds = Yd, ne.asMinutes = Zd, ne.asHours = $d, ne.asDays = _d, ne.asWeeks = ae, ne.asMonths = be, ne.asYears = ce, ne.valueOf = xc, ne._bubble = tc, ne.get = zc, ne.milliseconds = de, ne.seconds = ee, ne.minutes = fe, ne.hours = ge, ne.days = he, ne.weeks = Bc, ne.months = ie, ne.years = je, ne.humanize = Fc, ne.toISOString = Gc, ne.toString = Gc, ne.toJSON = Gc, ne.locale = rb, ne.localeData = sb, ne.toIsoString = aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gc), ne.lang = Cd, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), N("x", _c), N("X", bd), Q("X", function(a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10))
  }), Q("x", function(a, b, c) {
    c._d = new Date(q(a))
  }), a.version = "2.10.6", b(Da), a.fn = Od, a.min = Fa, a.max = Ga, a.utc = h, a.unix = Zb, a.months = jc, a.isDate = d, a.locale = w, a.invalid = l, a.duration = Ya, a.isMoment = o, a.weekdays = lc, a.parseZone = $b, a.localeData = y, a.isDuration = Ia, a.monthsShort = kc, a.weekdaysMin = nc, a.defineLocale = x, a.weekdaysShort = mc, a.normalizeUnits = A, a.relativeTimeThreshold = Ec;
  var oe = a;
  return oe
});
// HumanizeDuration.js - http://git.io/j0HgmQ

(function(global) {
  var languages = {
    ar: {
      y: function(c) {
        return c === 1 ? "سنة" : "سنوات";
      },
      mo: function(c) {
        return c === 1 ? "شهر" : "أشهر";
      },
      w: function(c) {
        return c === 1 ? "أسبوع" : "أسابيع";
      },
      d: function(c) {
        return c === 1 ? "يوم" : "أيام";
      },
      h: function(c) {
        return c === 1 ? "ساعة" : "ساعات";
      },
      m: function(c) {
        return c === 1 ? "دقيقة" : "دقائق";
      },
      s: function(c) {
        return c === 1 ? "ثانية" : "ثواني";
      },
      ms: function(c) {
        return c === 1 ? "جزء من الثانية" : "أجزاء من الثانية";
      },
      decimal: ","
    },
    ca: {
      y: function(c) {
        return "any" + (c !== 1 ? "s" : "");
      },
      mo: function(c) {
        return "mes" + (c !== 1 ? "os" : "");
      },
      w: function(c) {
        return "setman" + (c !== 1 ? "es" : "a");
      },
      d: function(c) {
        return "di" + (c !== 1 ? "es" : "a");
      },
      h: function(c) {
        return "hor" + (c !== 1 ? "es" : "a");
      },
      m: function(c) {
        return "minut" + (c !== 1 ? "s" : "");
      },
      s: function(c) {
        return "segon" + (c !== 1 ? "s" : "");
      },
      ms: function(c) {
        return "milisegon" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    cs: {
      y: function(c) {
        return ["rok", "roku", "roky", "let"][getCzechForm(c)];
      },
      mo: function(c) {
        return ["měsíc", "měsíce", "měsíce", "měsíců"][getCzechForm(c)];
      },
      w: function(c) {
        return ["týden", "týdne", "týdny", "týdnů"][getCzechForm(c)];
      },
      d: function(c) {
        return ["den", "dne", "dny", "dní"][getCzechForm(c)];
      },
      h: function(c) {
        return ["hodina", "hodiny", "hodiny", "hodin"][getCzechForm(c)];
      },
      m: function(c) {
        return ["minuta", "minuty", "minuty", "minut"][getCzechForm(c)];
      },
      s: function(c) {
        return ["sekunda", "sekundy", "sekundy", "sekund"][getCzechForm(c)];
      },
      ms: function(c) {
        return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getCzechForm(c)];
      },
      decimal: ","
    },
    da: {
      y: "år",
      mo: function(c) {
        return "måned" + (c !== 1 ? "er" : "");
      },
      w: function(c) {
        return "uge" + (c !== 1 ? "r" : "");
      },
      d: function(c) {
        return "dag" + (c !== 1 ? "e" : "");
      },
      h: function(c) {
        return "time" + (c !== 1 ? "r" : "");
      },
      m: function(c) {
        return "minut" + (c !== 1 ? "ter" : "");
      },
      s: function(c) {
        return "sekund" + (c !== 1 ? "er" : "");
      },
      ms: function(c) {
        return "millisekund" + (c !== 1 ? "er" : "");
      },
      decimal: ","
    },
    de: {
      y: function(c) {
        return "Jahr" + (c !== 1 ? "e" : "");
      },
      mo: function(c) {
        return "Monat" + (c !== 1 ? "e" : "");
      },
      w: function(c) {
        return "Woche" + (c !== 1 ? "n" : "");
      },
      d: function(c) {
        return "Tag" + (c !== 1 ? "e" : "");
      },
      h: function(c) {
        return "Stunde" + (c !== 1 ? "n" : "");
      },
      m: function(c) {
        return "Minute" + (c !== 1 ? "n" : "");
      },
      s: function(c) {
        return "Sekunde" + (c !== 1 ? "n" : "");
      },
      ms: function(c) {
        return "Millisekunde" + (c !== 1 ? "n" : "");
      },
      decimal: ","
    },
    en: {
      y: function(c) {
        return "year" + (c !== 1 ? "s" : "");
      },
      mo: function(c) {
        return "month" + (c !== 1 ? "s" : "");
      },
      w: function(c) {
        return "week" + (c !== 1 ? "s" : "");
      },
      d: function(c) {
        return "day" + (c !== 1 ? "s" : "");
      },
      h: function(c) {
        return "hour" + (c !== 1 ? "s" : "");
      },
      m: function(c) {
        return "minute" + (c !== 1 ? "s" : "");
      },
      s: function(c) {
        return "second" + (c !== 1 ? "s" : "");
      },
      ms: function(c) {
        return "millisecond" + (c !== 1 ? "s" : "");
      },
      decimal: "."
    },
    es: {
      y: function(c) {
        return "año" + (c !== 1 ? "s" : "");
      },
      mo: function(c) {
        return "mes" + (c !== 1 ? "es" : "");
      },
      w: function(c) {
        return "semana" + (c !== 1 ? "s" : "");
      },
      d: function(c) {
        return "día" + (c !== 1 ? "s" : "");
      },
      h: function(c) {
        return "hora" + (c !== 1 ? "s" : "");
      },
      m: function(c) {
        return "minuto" + (c !== 1 ? "s" : "");
      },
      s: function(c) {
        return "segundo" + (c !== 1 ? "s" : "");
      },
      ms: function(c) {
        return "milisegundo" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    fr: {
      y: function(c) {
        return "an" + (c !== 1 ? "s" : "");
      },
      mo: "mois",
      w: function(c) {
        return "semaine" + (c !== 1 ? "s" : "");
      },
      d: function(c) {
        return "jour" + (c !== 1 ? "s" : "");
      },
      h: function(c) {
        return "heure" + (c !== 1 ? "s" : "");
      },
      m: function(c) {
        return "minute" + (c !== 1 ? "s" : "");
      },
      s: function(c) {
        return "seconde" + (c !== 1 ? "s" : "");
      },
      ms: function(c) {
        return "milliseconde" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    gr: {
      y: function(c) {
        return c === 1 ? "χρόνος" : "χρόνια";
      },
      mo: function(c) {
        return c === 1 ? "μήνας" : "μήνες";
      },
      w: function(c) {
        return c === 1 ? "εβδομάδα" : "εβδομάδες";
      },
      d: function(c) {
        return c === 1 ? "μέρα" : "μέρες";
      },
      h: function(c) {
        return c === 1 ? "ώρα" : "ώρες";
      },
      m: function(c) {
        return c === 1 ? "λεπτό" : "λεπτά";
      },
      s: function(c) {
        return c === 1 ? "δευτερόλεπτο" : "δευτερόλεπτα";
      },
      ms: function(c) {
        return c === 1 ? "χιλιοστό του δευτερολέπτου" : "χιλιοστά του δευτερολέπτου";
      },
      decimal: ","
    },
    hu: {
      y: "év",
      mo: "hónap",
      w: "hét",
      d: "nap",
      h: "óra",
      m: "perc",
      s: "másodperc",
      ms: "ezredmásodperc",
      decimal: ","
    },
    it: {
      y: function(c) {
        return "ann" + (c !== 1 ? "i" : "o");
      },
      mo: function(c) {
        return "mes" + (c !== 1 ? "i" : "e");
      },
      w: function(c) {
        return "settiman" + (c !== 1 ? "e" : "a");
      },
      d: function(c) {
        return "giorn" + (c !== 1 ? "i" : "o");
      },
      h: function(c) {
        return "or" + (c !== 1 ? "e" : "a");
      },
      m: function(c) {
        return "minut" + (c !== 1 ? "i" : "o");
      },
      s: function(c) {
        return "second" + (c !== 1 ? "i" : "o");
      },
      ms: function(c) {
        return "millisecond" + (c !== 1 ? "i" : "o");
      },
      decimal: ","
    },
    ja: {
      y: "年",
      mo: "月",
      w: "週",
      d: "日",
      h: "時間",
      m: "分",
      s: "秒",
      ms: "ミリ秒",
      decimal: "."
    },
    ko: {
      y: "년",
      mo: "개월",
      w: "주일",
      d: "일",
      h: "시간",
      m: "분",
      s: "초",
      ms: "밀리 초",
      decimal: "."
    },
    nl: {
      y: "jaar",
      mo: function(c) {
        return c === 1 ? "maand" : "maanden";
      },
      w: function(c) {
        return c === 1 ? "week" : "weken";
      },
      d: function(c) {
        return c === 1 ? "dag" : "dagen";
      },
      h: "uur",
      m: function(c) {
        return c === 1 ? "minuut" : "minuten";
      },
      s: function(c) {
        return c === 1 ? "seconde" : "seconden";
      },
      ms: function(c) {
        return c === 1 ? "milliseconde" : "milliseconden";
      },
      decimal: ","
    },
    no: {
      y: "år",
      mo: function(c) {
        return "måned" + (c !== 1 ? "er" : "");
      },
      w: function(c) {
        return "uke" + (c !== 1 ? "r" : "");
      },
      d: function(c) {
        return "dag" + (c !== 1 ? "er" : "");
      },
      h: function(c) {
        return "time" + (c !== 1 ? "r" : "");
      },
      m: function(c) {
        return "minutt" + (c !== 1 ? "er" : "");
      },
      s: function(c) {
        return "sekund" + (c !== 1 ? "er" : "");
      },
      ms: function(c) {
        return "millisekund" + (c !== 1 ? "er" : "");
      },
      decimal: ","
    },
    pl: {
      y: function(c) {
        return ["rok", "roku", "lata", "lat"][getPolishForm(c)];
      },
      mo: function(c) {
        return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(c)];
      },
      w: function(c) {
        return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(c)];
      },
      d: function(c) {
        return ["dzień", "dnia", "dni", "dni"][getPolishForm(c)];
      },
      h: function(c) {
        return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(c)];
      },
      m: function(c) {
        return ["minuta", "minuty", "minuty", "minut"][getPolishForm(c)];
      },
      s: function(c) {
        return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(c)];
      },
      ms: function(c) {
        return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(c)];
      },
      decimal: ","
    },
    pt: {
      y: function(c) {
        return "ano" + (c !== 1 ? "s" : "");
      },
      mo: function(c) {
        return c !== 1 ? "meses" : "mês";
      },
      w: function(c) {
        return "semana" + (c !== 1 ? "s" : "");
      },
      d: function(c) {
        return "dia" + (c !== 1 ? "s" : "");
      },
      h: function(c) {
        return "hora" + (c !== 1 ? "s" : "");
      },
      m: function(c) {
        return "minuto" + (c !== 1 ? "s" : "");
      },
      s: function(c) {
        return "segundo" + (c !== 1 ? "s" : "");
      },
      ms: function(c) {
        return "milissegundo" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    ru: {
      y: function(c) {
        return ["лет", "год", "года"][getSlavicForm(c)];
      },
      mo: function(c) {
        return ["месяцев", "месяц", "месяца"][getSlavicForm(c)];
      },
      w: function(c) {
        return ["недель", "неделя", "недели"][getSlavicForm(c)];
      },
      d: function(c) {
        return ["дней", "день", "дня"][getSlavicForm(c)];
      },
      h: function(c) {
        return ["часов", "час", "часа"][getSlavicForm(c)];
      },
      m: function(c) {
        return ["минут", "минута", "минуты"][getSlavicForm(c)];
      },
      s: function(c) {
        return ["секунд", "секунда", "секунды"][getSlavicForm(c)];
      },
      ms: function(c) {
        return ["миллисекунд", "миллисекунда", "миллисекунды"][getSlavicForm(c)];
      },
      decimal: ","
    },
    uk: {
      y: function(c) {
        return ["років", "рік", "роки"][getSlavicForm(c)];
      },
      mo: function(c) {
        return ["місяців", "місяць", "місяці"][getSlavicForm(c)];
      },
      w: function(c) {
        return ["неділь", "неділя", "неділі"][getSlavicForm(c)];
      },
      d: function(c) {
        return ["днів", "день", "дні"][getSlavicForm(c)];
      },
      h: function(c) {
        return ["годин", "година", "години"][getSlavicForm(c)];
      },
      m: function(c) {
        return ["хвилин", "хвилина", "хвилини"][getSlavicForm(c)];
      },
      s: function(c) {
        return ["секунд", "секунда", "секунди"][getSlavicForm(c)];
      },
      ms: function(c) {
        return ["мілісекунд", "мілісекунда", "мілісекунди"][getSlavicForm(c)];
      },
      decimal: ","
    },
    sv: {
      y: "år",
      mo: function(c) {
        return "månad" + (c !== 1 ? "er" : "");
      },
      w: function(c) {
        return "veck" + (c !== 1 ? "or" : "a");
      },
      d: function(c) {
        return "dag" + (c !== 1 ? "ar" : "");
      },
      h: function(c) {
        return "timm" + (c !== 1 ? "ar" : "e");
      },
      m: function(c) {
        return "minut" + (c !== 1 ? "er" : "");
      },
      s: function(c) {
        return "sekund" + (c !== 1 ? "er" : "");
      },
      ms: function(c) {
        return "millisekund" + (c !== 1 ? "er" : "");
      },
      decimal: ","
    },
    tr: {
      y: "yıl",
      mo: "ay",
      w: "hafta",
      d: "gün",
      h: "saat",
      m: "dakika",
      s: "saniye",
      ms: "milisaniye",
      decimal: ","
    },
    zh_CN: {
      y: "年",
      mo: "个月",
      w: "周",
      d: "天",
      h: "小时",
      m: "分钟",
      s: "秒",
      ms: "毫秒",
      decimal: "."
    },
    zh_TW: {
      y: "年",
      mo: "個月",
      w: "周",
      d: "天",
      h: "小時",
      m: "分鐘",
      s: "秒",
      ms: "毫秒",
      decimal: "."
    }
  };

  // You can create a humanizer, which returns a function with defaults
  // parameters.
  function humanizer(passedOptions) {
    var result = function humanizer(ms, humanizerOptions) {
      var options = extend({}, result, humanizerOptions || {});
      return doHumanization(ms, options);
    };

    return extend(result, {
      language: "en",
      delimiter: ", ",
      spacer: " ",
      units: ["y", "mo", "w", "d", "h", "m", "s"],
      languages: {},
      round: false,
      unitMeasures: {
        y: 31557600000,
        mo: 2629800000,
        w: 604800000,
        d: 86400000,
        h: 3600000,
        m: 60000,
        s: 1000,
        ms: 1
      }
    }, passedOptions);
  }

  // The main function is just a wrapper around a default humanizer.
  var defaultHumanizer = humanizer({});

  function humanizeDuration() {
    return defaultHumanizer.apply(defaultHumanizer, arguments);
  }

  // doHumanization does the bulk of the work.
  function doHumanization(ms, options) {

    // Make sure we have a positive number.
    // Has the nice sideffect of turning Number objects into primitives.
    ms = Math.abs(ms);

    var dictionary = options.languages[options.language] || languages[options.language];
    if (!dictionary) {
      throw new Error("No language " + dictionary + ".");
    }

    var result = [];

    // Start at the top and keep removing units, bit by bit.
    var unitName, unitMS, unitCount;
    for (var i = 0, len = options.units.length; i < len; i++) {

      unitName = options.units[i];
      unitMS = options.unitMeasures[unitName];

      // What's the number of full units we can fit?
      if (i + 1 === len) {
        unitCount = ms / unitMS;
        if (options.round) {
          unitCount = Math.round(unitCount);
        }
      } else {
        unitCount = Math.floor(ms / unitMS);
      }

      // Add the string.
      if (unitCount) {
        result.push(render(unitCount, unitName, dictionary, options));
      }

      // Do we have enough units?
      if (options.largest && options.largest <= result.length) {
        break;
      }

      // Remove what we just figured out.
      ms -= unitCount * unitMS;

    }

    if (result.length) {
      return result.join(options.delimiter);
    } else {
      return render(0, options.units[options.units.length - 1], dictionary, options);
    }

  }

  function render(count, type, dictionary, options) {
    var decimal;
    if (options.decimal === void 0) {
      decimal = dictionary.decimal;
    } else {
      decimal = options.decimal;
    }

    var countStr = count.toString().replace(".", decimal);

    var dictionaryValue = dictionary[type];
    var word;
    if (typeof dictionaryValue === "function") {
      word = dictionaryValue(count);
    } else {
      word = dictionaryValue;
    }

    return countStr + options.spacer + word;
  }

  function extend(destination) {
    var source;
    for (var i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          destination[prop] = source[prop];
        }
      }
    }
    return destination;
  }

  // Internal helper function for Czech language.
  function getCzechForm(c) {
    if (c === 1) {
      return 0;
    } else if (Math.floor(c) !== c) {
      return 1;
    } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
      return 2;
    } else {
      return 3;
    }
  }

  // Internal helper function for Polish language.
  function getPolishForm(c) {
    if (c === 1) {
      return 0;
    } else if (Math.floor(c) !== c) {
      return 1;
    } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
      return 2;
    } else {
      return 3;
    }
  }

  // Internal helper function for Russian and Ukranian languages.
  function getSlavicForm(c) {
    if (Math.floor(c) !== c) {
      return 2;
    } else if ((c >= 5 && c <= 20) || (c % 10 >= 5 && c % 10 <= 9) || c % 10 === 0) {
      return 0;
    } else if (c % 10 === 1) {
      return 1;
    } else if (c > 1) {
      return 2;
    } else {
      return 0;
    }
  }

  function getSupportedLanguages() {
    var result = [];
    for (var language in languages) {
      if (languages.hasOwnProperty(language)) {
        result.push(language);
      }
    }
    return result;
  }

  humanizeDuration.humanizer = humanizer;
  humanizeDuration.getSupportedLanguages = getSupportedLanguages;

  if (typeof define === "function" && define.amd) {
    define(function() {
      return humanizeDuration;
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = humanizeDuration;
  } else {
    global.humanizeDuration = humanizeDuration;
  }
})(this);

/**
 * angular-timer - v1.3.3 - 2015-06-15 3:07 PM
 * https://github.com/siddii/angular-timer
 *
 * Copyright (c) 2015 Siddique Hameed
 * Licensed MIT <https://github.com/siddii/angular-timer/blob/master/LICENSE.txt>
 */
var timerModule = angular.module("timer", []).directive("timer", ["$compile", function(a) {
  return {
    restrict: "EA",
    replace: !1,
    scope: {
      interval: "=interval",
      startTimeAttr: "=startTime",
      endTimeAttr: "=endTime",
      countdownattr: "=countdown",
      finishCallback: "&finishCallback",
      autoStart: "&autoStart",
      language: "@?",
      fallback: "@?",
      maxTimeUnit: "="
    },
    controller: ["$scope", "$element", "$attrs", "$timeout", "I18nService", "$interpolate", "progressBarService", function(b, c, d, e, f, g, h) {
      function i() {
        b.timeoutId && clearTimeout(b.timeoutId)
      }

      function j() {
        var a = {};
        void 0 !== d.startTime && (b.millis = moment().diff(moment(b.startTimeAttr))), a = k.getTimeUnits(b.millis), b.maxTimeUnit && "day" !== b.maxTimeUnit ? "second" === b.maxTimeUnit ? (b.seconds = Math.floor(b.millis / 1e3), b.minutes = 0, b.hours = 0, b.days = 0, b.months = 0, b.years = 0) : "minute" === b.maxTimeUnit ? (b.seconds = Math.floor(b.millis / 1e3 % 60), b.minutes = Math.floor(b.millis / 6e4), b.hours = 0, b.days = 0, b.months = 0, b.years = 0) : "hour" === b.maxTimeUnit ? (b.seconds = Math.floor(b.millis / 1e3 % 60), b.minutes = Math.floor(b.millis / 6e4 % 60), b.hours = Math.floor(b.millis / 36e5), b.days = 0, b.months = 0, b.years = 0) : "month" === b.maxTimeUnit ? (b.seconds = Math.floor(b.millis / 1e3 % 60), b.minutes = Math.floor(b.millis / 6e4 % 60), b.hours = Math.floor(b.millis / 36e5 % 24), b.days = Math.floor(b.millis / 36e5 / 24 % 30), b.months = Math.floor(b.millis / 36e5 / 24 / 30), b.years = 0) : "year" === b.maxTimeUnit && (b.seconds = Math.floor(b.millis / 1e3 % 60), b.minutes = Math.floor(b.millis / 6e4 % 60), b.hours = Math.floor(b.millis / 36e5 % 24), b.days = Math.floor(b.millis / 36e5 / 24 % 30), b.months = Math.floor(b.millis / 36e5 / 24 / 30 % 12), b.years = Math.floor(b.millis / 36e5 / 24 / 365)) : (b.seconds = Math.floor(b.millis / 1e3 % 60), b.minutes = Math.floor(b.millis / 6e4 % 60), b.hours = Math.floor(b.millis / 36e5 % 24), b.days = Math.floor(b.millis / 36e5 / 24), b.months = 0, b.years = 0), b.secondsS = 1 === b.seconds ? "" : "s", b.minutesS = 1 === b.minutes ? "" : "s", b.hoursS = 1 === b.hours ? "" : "s", b.daysS = 1 === b.days ? "" : "s", b.monthsS = 1 === b.months ? "" : "s", b.yearsS = 1 === b.years ? "" : "s", b.secondUnit = a.seconds, b.minuteUnit = a.minutes, b.hourUnit = a.hours, b.dayUnit = a.days, b.monthUnit = a.months, b.yearUnit = a.years, b.sseconds = b.seconds < 10 ? "0" + b.seconds : b.seconds, b.mminutes = b.minutes < 10 ? "0" + b.minutes : b.minutes, b.hhours = b.hours < 10 ? "0" + b.hours : b.hours, b.ddays = b.days < 10 ? "0" + b.days : b.days, b.mmonths = b.months < 10 ? "0" + b.months : b.months, b.yyears = b.years < 10 ? "0" + b.years : b.years
      }
      "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
      }), b.autoStart = d.autoStart || d.autostart, b.language = b.language || "en", b.fallback = b.fallback || "en", b.$watch("language", function(a) {
        void 0 !== a && k.init(a, b.fallback)
      });
      var k = new f;
      k.init(b.language, b.fallback), b.displayProgressBar = 0, b.displayProgressActive = "active", c.append(0 === c.html().trim().length ? a("<span>" + g.startSymbol() + "millis" + g.endSymbol() + "</span>")(b) : a(c.contents())(b)), b.startTime = null, b.endTime = null, b.timeoutId = null, b.countdown = b.countdownattr && parseInt(b.countdownattr, 10) >= 0 ? parseInt(b.countdownattr, 10) : void 0, b.isRunning = !1, b.$on("timer-start", function() {
        b.start()
      }), b.$on("timer-resume", function() {
        b.resume()
      }), b.$on("timer-stop", function() {
        b.stop()
      }), b.$on("timer-clear", function() {
        b.clear()
      }), b.$on("timer-reset", function() {
        b.reset()
      }), b.$on("timer-set-countdown", function(a, c) {
        b.countdown = c
      }), b.$watch("startTimeAttr", function(a, c) {
        a !== c && b.isRunning && b.start()
      }), b.$watch("endTimeAttr", function(a, c) {
        a !== c && b.isRunning && b.start()
      }), b.start = c[0].start = function() {
        b.startTime = b.startTimeAttr ? moment(b.startTimeAttr) : moment(), b.endTime = b.endTimeAttr ? moment(b.endTimeAttr) : null, b.countdown || (b.countdown = b.countdownattr && parseInt(b.countdownattr, 10) > 0 ? parseInt(b.countdownattr, 10) : void 0), i(), l(), b.isRunning = !0
      }, b.resume = c[0].resume = function() {
        i(), b.countdownattr && (b.countdown += 1), b.startTime = moment().diff(moment(b.stoppedTime).diff(moment(b.startTime))), l(), b.isRunning = !0
      }, b.stop = b.pause = c[0].stop = c[0].pause = function() {
        var a = b.timeoutId;
        b.clear(), b.$emit("timer-stopped", {
          timeoutId: a,
          millis: b.millis,
          seconds: b.seconds,
          minutes: b.minutes,
          hours: b.hours,
          days: b.days
        })
      }, b.clear = c[0].clear = function() {
        b.stoppedTime = moment(), i(), b.timeoutId = null, b.isRunning = !1
      }, b.reset = c[0].reset = function() {
        b.startTime = b.startTimeAttr ? moment(b.startTimeAttr) : moment(), b.endTime = b.endTimeAttr ? moment(b.endTimeAttr) : null, b.countdown = b.countdownattr && parseInt(b.countdownattr, 10) > 0 ? parseInt(b.countdownattr, 10) : void 0, i(), l(), b.isRunning = !1, b.clear()
      }, c.bind("$destroy", function() {
        i(), b.isRunning = !1
      }), b.countdownattr ? (b.millis = 1e3 * b.countdownattr, b.addCDSeconds = c[0].addCDSeconds = function(a) {
        b.countdown += a, b.$digest(), b.isRunning || b.start()
      }, b.$on("timer-add-cd-seconds", function(a, c) {
        e(function() {
          b.addCDSeconds(c)
        })
      }), b.$on("timer-set-countdown-seconds", function(a, c) {
        b.isRunning || b.clear(), b.countdown = c, b.millis = 1e3 * c, j()
      })) : b.millis = 0, j();
      var l = function m() {
        var a = null;
        b.millis = moment().diff(b.startTime);
        var c = b.millis % 1e3;
        return b.endTimeAttr && (a = b.endTimeAttr, b.millis = moment(b.endTime).diff(moment()), c = b.interval - b.millis % 1e3), b.countdownattr && (a = b.countdownattr, b.millis = 1e3 * b.countdown), b.millis < 0 ? (b.stop(), b.millis = 0, j(), void(b.finishCallback && b.$eval(b.finishCallback))) : (j(), b.timeoutId = setTimeout(function() {
          m(), b.$digest()
        }, b.interval - c), b.$emit("timer-tick", {
          timeoutId: b.timeoutId,
          millis: b.millis
        }), b.countdown > 0 ? b.countdown-- : b.countdown <= 0 && (b.stop(), b.finishCallback && b.$eval(b.finishCallback)), void(null !== a && (b.progressBar = h.calculateProgressBar(b.startTime, b.millis, b.endTime, b.countdownattr), 100 === b.progressBar && (b.displayProgressActive = ""))))
      };
      (void 0 === b.autoStart || b.autoStart === !0) && b.start()
    }]
  }
}]);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = timerModule);
var app = angular.module("timer");
app.factory("I18nService", function() {
  var a = function() {};
  return a.prototype.language = "en", a.prototype.fallback = "en", a.prototype.timeHumanizer = {}, a.prototype.init = function(a, b) {
    var c = humanizeDuration.getSupportedLanguages();
    this.fallback = void 0 !== b ? b : "en", -1 === c.indexOf(b) && (this.fallback = "en"), this.language = a, -1 === c.indexOf(a) && (this.language = this.fallback), moment.locale(this.language), this.timeHumanizer = humanizeDuration.humanizer({
      language: this.language,
      halfUnit: !1
    })
  }, a.prototype.getTimeUnits = function(a) {
    var b = 1e3 * Math.round(a / 1e3),
      c = {};
    return "undefined" != typeof this.timeHumanizer ? c = {
      millis: this.timeHumanizer(b, {
        units: ["milliseconds"]
      }),
      seconds: this.timeHumanizer(b, {
        units: ["seconds"]
      }),
      minutes: this.timeHumanizer(b, {
        units: ["minutes", "seconds"]
      }),
      hours: this.timeHumanizer(b, {
        units: ["hours", "minutes", "seconds"]
      }),
      days: this.timeHumanizer(b, {
        units: ["days", "hours", "minutes", "seconds"]
      }),
      months: this.timeHumanizer(b, {
        units: ["months", "days", "hours", "minutes", "seconds"]
      }),
      years: this.timeHumanizer(b, {
        units: ["years", "months", "days", "hours", "minutes", "seconds"]
      })
    } : console.error('i18nService has not been initialized. You must call i18nService.init("en") for example'), c
  }, a
});
var app = angular.module("timer");
app.factory("progressBarService", function() {
  var a = function() {};
  return a.prototype.calculateProgressBar = function(a, b, c, d) {
    var e, f, g = 0;
    return b /= 1e3, null !== c ? (e = moment(c), f = e.diff(a, "seconds"), g = 100 * b / f) : g = 100 * b / d, g = 100 - g, g = Math.round(10 * g) / 10, g > 100 && (g = 100), g
  }, new a
});
! function() {
  "use strict";
  angular.module("app", ["ngResource", "ngTouch", "credit-cards", "timer"])
}(), angular.module("app").directive("logoMania", ["$window", "$document", function(e, t) {
    return {
      restrict: "A",
      link: function(t, r, n) {
        function a(e, t) {
          e.css({
            "-webkit-transform": "rotateX(" + t + "deg) translateX(-50%) translateY(-50%) translateZ(0)",
            "-moz-transform": "rotateX(" + t + "deg) translateX(-50%) translateY(-50%) translateZ(0)",
            transform: "rotateX(" + t + "deg) translateX(-50%) translateY(-50%) translateZ(0)"
          })
        }
        var i = r.find(".inner"),
          o = r.find(".middle"),
          s = r.find(".outer, .back");
        $(e).bind("scroll", function() {
          var e = this.pageYOffset;
          a(i, .2 * e), a(o, .3 * e), a(s, .4 * e)
        })
      }
    }
  }]), angular.module("app").directive("ngModel", ["$timeout", "$document", function(e, t) {
    function r(e, r, n, a) {
      return t.on("clearAll", function() {
        r.removeClass("ng-not-empty")
      }), r.on("input", function() {
        r[r.val() ? "addClass" : "removeClass"]("ng-not-empty")
      })
    }
    return {
      link: r,
      restrict: "A",
      require: "?ngModel"
    }
  }]), angular.module("app").directive("parallaxIt", ["$window", "$document", function(e, t) {
    return {
      restrict: "A",
      link: function(t, r, n) {
        function a(e) {
          var t = this.pageYOffset,
            n = t / i;
          r.css({
            "-webkit-transform": "translateY(-" + n + "px)",
            "-moz-transform": "translateY(-" + n + "px)",
            transform: "translateY(-" + n + "px)"
          })
        }
        var i = parseInt(n.parallaxIt) || 2;
        $(e).bind("scroll load", a)
      }
    }
  }]), angular.module("app").directive("epicScrollPast", ["$window", function(e) {
    function t(t, r, n) {
      function a(e) {
        s.find("td").each(function(e) {
          angular.element(r.find("td")[e]).css("width", $(this).width())
        }), $(".global-action").css("width", $("#main").outerWidth()), i = s.offset().top + (parseInt(n.epicScrollPast, 10) || 0), o > i ? r.addClass("scrolled-past").parent().addClass("child-scrolled-past") : i > o && r.removeClass("scrolled-past").parent().removeClass("child-scrolled-past")
      }
      var i = 0,
        o = 0,
        s = angular.element("thead.false");
      $(e).on("load resize", a), $("body").on("scroll", a)
    }
    return {
      link: t,
      restrict: "A"
    }
  }]), angular.module("app").directive("slideIn", ["$window", "$document", function(e, t) {
    return {
      restrict: "A",
      link: function(r, n, a) {
        function i() {
          var r = 400,
            n = 395;
          e.innerWidth < 960 && (n = 300), d = $(f.start)[0].offsetTop - n, s = d - r, c = $(f.end)[0].offsetTop - n, l = c - r, u = t.innerHeight() - e.innerHeight, c = c > u ? u : c, p = $(".btn-white.request"), o()
        }

        function o() {
          var t = this.pageYOffset,
            a = (t - s) / (d - s),
            i = 1 - (t - l) / (c - l),
            o = l > t ? a : i;
          if (o = Math.max(Math.min(o, 1), 0), e.innerWidth >= 960) {
            var u = r.aside_bg_width - r.aside_bg_width * o;
            n.css({
              opacity: o > 0 ? 1 : 0,
              "-webkit-transform": "translate3d(-" + u + "px,0,0)",
              "-moz-transform": "translate3d(-" + u + "px,0,0)",
              transform: "translate3d(-" + u + "px,0,0)"
            })
          } else {
            var f = 220 - 220 * o;
            n.css({
              right: f
            })
          }
          n[0].className.match(/aside-bg/i) && (1 === o ? p.addClass("active") : p.removeClass("active"))
        }
        var s, d, l, c, u, p, f = r.$eval(a.slideIn);
        $(e).bind("load resize", i), $(e).bind("scroll", o)
      }
    }
  }]), angular.module("app").controller("DashboardController", ["$http", "$scope", "$document", function(e, t, r) {
    function n() {
      d()
    }

    function a() {
      return t.disabled ? void 0 : (t.page = t.page + 1, d())
    }

    function i() {
      return t.digest ? t.digest.all > t.attendees.length && t.digest[t.filter] > t.attendees.length && t.attendees.length >= 20 : void 0
    }

    function o(e) {
      return t.page = 1, t.filter = e, d(!1, !0)
    }

    function s(e) {
      return t.page = 1, t.search = e, d(!1, !0)
    }

    function d(r, n) {
      var a = "/dashboard/list?json=1&count=20&page=" + (t.page || 1) + "&filter=" + t.filter;
      t.disabled = !0, t.search && (a += "&search=" + t.search), e.get(a).success(function(e) {
        r || (n ? t.attendees = e.attendees.attendees || [] : Array.prototype.push.apply(t.attendees, e.attendees.attendees || [])), t.digest = l(e.digest), t.disabled = !1
      }).error(function(e) {
        t.disabled = !1, console.error("HANDLE ERROR", e)
      })
    }

    function l(e) {
      var t = {};
      return e.forEach(function(e) {
        t[e._id] = e.count
      }), t
    }

    function c(e) {
      var r = t.attendees.filter(function(e) {
        return e.selected === !0
      }) || [];
      return e ? r.length : r
    }

    function u(r, n, a) {
      t.attendees.forEach(function(t) {
        if (t._id === r) {
          var a = "/dashboard/" + ("attending" === n ? "approve" : "invite") + "/";
          e.get(a + r).success(function(e) {
            t.selected = !1, t.status = e.status, t.expires_at = e.expires_at, d(1)
          }).error(function(e) {
            console.error(e)
          })
        }
      })
    }

    function p(e) {
      return new Date(e.expires_at) < new Date && "attending" !== e.status
    }

    function f(e) {
      t.attendees.forEach(function(t) {
        c().forEach(function(r) {
          return r._id === t._id ? u(r._id, e, 1) : void 0
        })
      })
    }

    function m(n, a, i) {
      return t.requestForm.$submitted = !0, t.inviting = !0, t.invite_error = "", a ? (t.disabled = !0, e.post("/dashboard/" + (i ? "add" : "request"), n).success(function(e) {
        t.request = {}, t.requestForm.$submitted = !1, t.inviting = !1, t.disabled = !1, t.attendees.unshift(e), r.trigger("clearAll"), d(1)
      }).error(function(e) {
        t.invite_error = e.error || "", t.requestForm.$submitted = !1, t.disabled = !0, t.inviting = !1
      })) : void 0
    }
    return t.page = 1, t.filter = "all", t.attendees = [], t.next = a, t.sort = o, t.canNext = i, t.setStatus = u, t.globalCmd = f, t.requestInvite = m, t.humansSelected = c, t.isAttendeeExpired = p, t.$watch("search", s), n()
  }]),
  function() {
    "use strict";
    angular.module("app").controller("MainController", ["$scope", "$window", function(e, t) {
      function r() {
        if (!(t.innerWidth < 960)) {
          var r = $(".aside");
          $(".aside-bg");
          e.aside_bg_width = r.width() + r.offset().left, $(".aside-bg").css({
            width: e.aside_bg_width + "px",
            "min-height": t.innerHeight
          })
        }
      }
      e.aside_bg_width, $(t).bind("load resize", r)
    }])
  }(), angular.module("app").controller("PaymentController", ["$http", "$scope", "$http", function(e, t, e) {
    t.stepTwo = function() {
      t.payForm.$stepOneAttempted = !0, t.payForm.$valid && (t.showCard = !0)
    }, t.payNow = function() {
      t.cardForm.$submitted = !0, t.cardForm.$valid && t.payForm.$valid && (t.stripeProcessing = !0, Stripe.card.createToken(t.card, function(r, n) {
        return 200 !== r || n.error ? (n.error.param && t.cardForm[n.error.param] ? (t.card_error = n.error.message || "", t.cardForm[n.error.param].$setValidity("required", !1)) : t.card_error = "Could not process payment", t.stripeProcessing = !1, t.$apply()) : (t.pay.source = n.id, t.pay.type = "true" === t.pay.lodging ? "lodging" : "nolodging", void e.post("/checkout", t.pay).error(function(e) {
          return t.card_error = e.error || "Could not process payment", t.stripeProcessing = !1, t.$apply()
        }).success(function(e) {
          return window.location.assign("/dashboard")
        }))
      }))
    }
  }]), angular.module("app").controller("RequestController", ["$http", "$scope", "$document", function(e, t, r) {
    t.submitForm = function() {
      t.requestForm.$submitted = !0, t.requestForm.$valid && $("form").submit()
    }
  }]);
//# sourceMappingURL=app.source.js.map




$(window).resize(function(){

	$('.imgprew').css({
		position:'absolute',
		left: ($(document).width() - $('.imgprew').outerWidth())/2,
		top: ($(document).height() - $('.imgprew').outerHeight())/2
	});

});

// Для запуска функции:
$(window).resize();
