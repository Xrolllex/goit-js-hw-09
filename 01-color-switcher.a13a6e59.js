!function(){var e,t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),n=document.querySelector("body");var c=function(){e=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),500),t.setAttribute("disabled",""),r.removeAttribute("disabled",""),t.removeEventListener("click",c),r.addEventListener("click",o)},o=function(){clearInterval(e),t.removeAttribute("disabled",""),r.setAttribute("disabled",""),t.addEventListener("click",c),r.removeEventListener("click",o)};t.addEventListener("click",c)}();
//# sourceMappingURL=01-color-switcher.a13a6e59.js.map
