!function(){var e,n=document.querySelectorAll("input"),t=document.querySelector("button"),o=function(e,n){Math.random()>.3?console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))};t.addEventListener("click",(function(t){t.preventDefault();var c=1,u=Number(n[0].value);setTimeout((function(){o(c,u),e=setInterval((function(){c++,u+=Number(n[1].value),o(c,u),c>Number(n[2].value)-1&&clearInterval(e)}),n[1].value)}),n[0].value)}))}();
//# sourceMappingURL=03-promises.8780ff5e.js.map