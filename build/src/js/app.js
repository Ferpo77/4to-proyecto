function scrollnav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function iniciarapp(){creargaleria(),scrollnav(),navegacionfija()}function navegacionfija(){const e=document.querySelector("body"),n=document.querySelector(".header"),t=document.querySelector(".sobre-festival");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(n.classList.add("fijo"),e.classList.add("body-scroll")):(n.classList.remove("fijo"),e.classList.remove("body-scroll"))}))}function creargaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n\n            <img src="build/img/thumb/${n}.jpg" alt="imagen vocalista"></img>\n        `,t.onclick=function(){mostrarimagen(n)},e.appendChild(t)}}function mostrarimagen(e){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n\n            <img src="build/img/grande/${e}.jpg" alt="imagen vocalista"></img>\n        `;const t=document.createElement("overlay");t.appendChild(n),t.classList.add("overlay-galeria"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const o=document.createElement("p");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(o);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarapp()}));
//# sourceMappingURL=app.js.map