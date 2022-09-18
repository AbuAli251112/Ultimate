document.querySelector(".toggle-sidebar").onclick = function () {
  "use strict";

  console.log("clicked");

  document.querySelector(".content-area").classList.toggle("no-sidebar");
  document.querySelector(".sidebar").classList.toggle("no-sidebar");
};
