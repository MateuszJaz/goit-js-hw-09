!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");e(r).Notify.init({useIcon:!1});var u=document.querySelector("button"),l=document.querySelector(".form"),a=function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))};u.addEventListener("click",(function(e){e.preventDefault();for(var n=Number(l.elements.delay.value),t=Number(l.elements.step.value),o=l.elements.amount.value,i=1;i<=o;i++){var u=n+t*(i-1);a(i,u).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t," ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t," ms"))}))}}))}();
//# sourceMappingURL=03-promises.9edc71af.js.map