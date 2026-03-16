;(function () {
  let e = document.createElement(`link`).relList
  if (e && e.supports && e.supports(`modulepreload`)) return
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e)
  new MutationObserver(e => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(e) {
    let t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    )
  }
  function n(e) {
    if (e.ep) return
    e.ep = !0
    let n = t(e)
    fetch(e.href, n)
  }
})()
function e(e) {
  let t = typeof e == `string` ? document.querySelector(e) : e
  if (!t) throw new Error(`Progress container not found`)
  let n = document.querySelector(`#progress-template`)
  t.append(n.content.cloneNode(!0))
  let r = t.querySelector(`.progress__ring`),
    index = { value: 0, animateInterval: void 0 }
  function a(e) {
    ;((index.value = Math.max(0, Math.min(100, Number(e)))),
      r.style.setProperty(`--p`, index.value),
      r.setAttribute(`aria-valuenow`, index.value))
  }
  function o(e) {
    e
      ? (index.animateInterval = setInterval(() => {
          ;((index.value = index.value >= 100 ? 0 : index.value + 1),
            r.style.setProperty(`--p`, index.value))
        }, 10))
      : (clearInterval(index.animateInterval), (index.animateInterval = void 0))
  }
  function s(e) {
    t.classList.toggle(`progress__view_hidden`, !!e)
  }
  function c() {
    return index.value
  }
  return { setValue: a, setAnimated: o, setHidden: s, getValue: c }
}
var t = e(`.progress__view`)
t.setValue(75)
var n = document.querySelector(`#input-value`),
  r = document.querySelector(`#switch-hide`),
  index = document.querySelector(`#switch-animate`)
;(n.addEventListener(`input`, e => {
  let n = Number(e.target.value)
  !Number.isNaN(n) && n >= 0 && n <= 100 ? t.setValue(n) : (e.target.value = t.getValue())
}),
  r.addEventListener(`change`, e => {
    e.target.checked ? t.setHidden(!0) : t.setHidden(!1)
  }),
  index.addEventListener(`change`, e => {
    e.target.checked
      ? (n.setAttribute(`disabled`, !0), (n.value = void 0), t.setAnimated(!0))
      : (t.setAnimated(!1), n.removeAttribute(`disabled`), (n.value = t.getValue()))
  }))
