document.querySelector(".toggle-sidebar").onclick = function () {
  "use strict";

  console.log("clicked");

  document.querySelector(".content-area").classList.toggle("no-sidebar");
  document.querySelector(".sidebar").classList.toggle("no-sidebar");
};

document.querySelectorAll(".toggle-submenu").forEach((i) => {
  i.addEventListener("click", function () {
    if (this.lastChild.classList.contains("fa-angle-right")) {
      this.lastChild.classList.remove("fa-angle-right");

      this.lastChild.classList.add("fa-angle-down");

      this.nextElementSibling.style.display = "block";
    } else {
      this.lastChild.classList.remove("fa-angle-down");

      this.lastChild.classList.add("fa-angle-right");

      this.nextElementSibling.style.display = "none";
    }
  });
});

document.querySelector(".dropdown").onclick = function (e) {

  this.lastElementChild.classList.toggle("toggler");
  
};
