var k = Object.defineProperty,
  D = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable;
var y = (e, r, t) =>
    r in e ? k(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  g = (e, r) => {
    for (var t in r || (r = {})) b.call(r, t) && y(e, t, r[t]);
    if (m) for (var t of m(r)) v.call(r, t) && y(e, t, r[t]);

    return e;
  },
  A = (e, r) => D(e, z(r));
var S = (e, r) => {
  var t = {};

  for (var i in e) b.call(e, i) && r.indexOf(i) < 0 && (t[i] = e[i]);
  if (e != null && m) for (var i of m(e)) r.indexOf(i) < 0 && v.call(e, i) && (t[i] = e[i]);

  return t;
};

import {
  u as N,
  j as s,
  F as R,
  a as n,
  b as W,
  I as H,
  c as P,
  d as w,
  A as q,
  e as V,
  B as G,
  S as f,
  T as h,
  f as J,
  g as K,
  h as Q,
  i as F,
  k as U,
  l as I,
  M as X,
  m as Y,
  n as Z,
  o as _,
  p as ee,
  q as re,
  r as ne,
  s as te,
  t as O,
  v as oe,
  w as ie,
  x as ae,
  C as se,
  H as le,
  y as ce,
  z as de,
  D as ue,
  E as me,
  R as he,
  G as pe,
} from "./vendor.666b2de7.js";
const ge = function () {
  const r = document.createElement("link").relList;

  if (r && r.supports && r.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const a = {};

    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = t(o);

    fetch(o.href, a);
  }
};

ge();
const T = (e) => {
    let r;

    return (
      e.length < 1
        ? (r = "Se requiere este campo")
        : /[+-]?([0-9]*[.])?[0-9]+/.test(e) || (r = "Debe ser un numero"),
      r
    );
  },
  B = (i) => {
    var o = i,
      { children: e, label: r } = o,
      t = S(o, ["children", "label"]);
    const [a, l, M] = N(t);

    return s(R, {
      isInvalid: l.touched && l.error,
      children: [
        n(W, { fontSize: "xs", fontWeight: "4000", children: r }),
        s(H, {
          size: "md",
          children: [n(P, A(g(g({}, t), a), { variant: "flushed" })), e],
        }),
        l.error ? s(w, { fontSize: "12px", children: [" ", l.error] }) : null,
      ],
    });
  },
  fe = ({ day: e }) =>
    s(q, {
      borderTopWidth: 0,
      children: [
        n("h2", {
          children: s(V, {
            py: 6,
            children: [
              n(G, {
                flex: "1",
                fontWeight: "bold",
                textAlign: "left",
                children: n(f, { children: n(h, { children: e }) }),
              }),
              n(J, {}),
            ],
          }),
        }),
        n(K, {
          pb: 4,
          children: n(Q, {
            id: "submit-form",
            children: s(f, {
              children: [
                s(B, {
                  label: "Temperatura maxima",
                  name: `maxs.${e}Max`,
                  placeholder: "ej. 33",
                  validate: T,
                  value: `maxs.${e}Max`,
                  children: [
                    n(F, {
                      children: n(U, { color: "gray.300" }),
                      pointerEvents: "none",
                    }),
                    n(I, { children: "\xBA" }),
                  ],
                }),
                s(B, {
                  label: "Temperatura minima",
                  name: `mins.${e}Min`,
                  placeholder: "ej. 1",
                  validate: T,
                  value: `mins.${e}Min`,
                  children: [
                    n(F, {
                      children: n(X, { color: "gray.300" }),
                      pointerEvents: "none",
                    }),
                    n(I, { children: "\xBA" }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  xe = ({ isOpen: e, onClose: r, data: t }) =>
    s(Y, {
      isOpen: e,
      onClose: r,
      children: [
        n(Z, {}),
        s(_, {
          children: [
            n(ee, { children: "INFORMACI\xD3N" }),
            n(re, {}),
            n(ne, {
              children:
                t &&
                s(f, {
                  children: [
                    s(h, {
                      children: ["Maxima temperatura ingresada: ", t.max],
                    }),
                    s(h, {
                      children: ["Minima temperatura ingresada: ", t.min],
                    }),
                    s(h, {
                      children: ["Promedio de temperaturas ingresadas: ", t.average],
                    }),
                  ],
                }),
            }),
            n(te, {
              children: n(O, {
                colorScheme: "blue",
                mr: 3,
                onClick: r,
                children: "Ok",
              }),
            }),
          ],
        }),
      ],
    }),
  Me = (e) => ({
    handleMaxMin: (i) => {
      const o = Math.min(...i),
        a = Math.max(...i);

      return { min: o, max: a };
    },
    handleAverage: (i) => i.reduce((a, l) => a + l, 0) / i.length,
  }),
  x = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function be() {
  const e = oe(),
    { isOpen: r, onOpen: t, onClose: i } = ie(),
    [o, a] = ae.exports.useState(),
    l = x.reduce((c, d) => ((c[`${d}Min`] = ""), c), {}),
    M = x.reduce((c, d) => ((c[`${d}Max`] = ""), c), {});

  return s(se, {
    py: 8,
    children: [
      n(le, { mb: 4, children: "Temperaturas" }),
      n(ce, {
        initialValues: { maxs: M, mins: l },
        onSubmit: (c, { setSubmitting: d, resetForm: p }) => {
          setTimeout(() => {
            const u = Object.values(Object.assign(c.mins, c.maxs)).map(Number),
              { handleMaxMin: C, handleAverage: L } = Me(),
              { min: j, max: E } = C(u),
              $ = L(u);

            a({ min: j, max: E, average: $ }), d(!1), t(), p();
          }, 400);
        },
        children: ({ isValid: c, isSubmitting: d }) =>
          s(de, {
            children: [
              n(ue, {
                allowToggle: !0,
                borderRadius: "xl",
                shadow: "lg",
                children: x.map((p, u) => n(fe, { day: p }, u)),
              }),
              n(O, {
                isFullWidth: !0,
                colorScheme: "blue",
                form: "submit-form",
                isLoading: d,
                mt: 4,
                type: "submit",
                onClick: () => {
                  !c &&
                    e({
                      title: "Tienes un error",
                      description: "\xBFDejaste algun campo vac\xEDo?",
                      status: "error",
                      duration: 2e3,
                      isClosable: !0,
                    });
                },
                children: "Enviar",
              }),
            ],
          }),
      }),
      n(xe, { data: o, isOpen: r, onClose: i }),
    ],
  });
}
const ve = me({
  fonts: { heading: "Manrope", body: "Archivo" },
  components: {
    Heading: { baseStyle: { fontWeight: 800, letterSpacing: "tighter" } },
  },
  global: {
    body: {
      lineHeight: "base",
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
      letterSpacing: "tigher",
    },
  },
});

he.render(n(pe, { theme: ve, children: n(be, {}) }), document.getElementById("root"));
