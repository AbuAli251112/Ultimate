document.querySelector(".toggle-sidebar").onclick=function(){"use strict";console.log("clicked"),document.querySelector(".content-area").classList.toggle("no-sidebar"),document.querySelector(".sidebar").classList.toggle("no-sidebar")},document.querySelectorAll(".toggle-submenu").forEach(e=>{e.addEventListener("click",function(){this.lastChild.classList.contains("fa-angle-right")?(this.lastChild.classList.remove("fa-angle-right"),this.lastChild.classList.add("fa-angle-down"),this.nextElementSibling.style.display="block"):(this.lastChild.classList.remove("fa-angle-down"),this.lastChild.classList.add("fa-angle-right"),this.nextElementSibling.style.display="none")})});