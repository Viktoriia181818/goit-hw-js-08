var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire8fb3;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire8fb3=a);var o=a("kEUo3");const n=document.querySelector(".feedback-form"),l=JSON.parse(localStorage.getItem("feedback-form-state")),f=document.querySelector(".feedback-form input"),i=document.querySelector(".feedback-form textarea");n.addEventListener("input",(0,o.throttle)((function(e){u[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500)),n.addEventListener("submit",(function(e){if(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),""===e.target.email.value||""===e.target.message.value)return void alert("Заповніть поле");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const u={};l&&(f.value=l.email,i.value=l.message);
//# sourceMappingURL=03-feedback.1cd41457.js.map
