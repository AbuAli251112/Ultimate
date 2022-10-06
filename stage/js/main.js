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

document.querySelector(".dropdown").onclick = function () {

  this.lastElementChild.classList.toggle("toggler");
  
};

document.querySelector("#dropdown").onclick = function () {

  this.parentElement.nextElementSibling.classList.toggle("toggler");

}

document.querySelector('.toggle-fullscreen').onclick = function () {

  this.classList.toggle('full-screen');

  if (this.classList.contains('full-screen')) {

    openFullScreen();

  } else {

    closeFullScreen();

  }

};

var elem = document.documentElement;

function openFullScreen() {

  if (elem.requestFullscreen) {

    elem.requestFullscreen();

  } else if (elem.mozRequestFullScreen) {

    elem.mozRequestFullScreen();

  } else if (elem.webkitRequestFullScreent) {

    lem.webkitRequestFullScreent();

  } else if (elem.msRequestFullScreen) {

    elem.msRequestFullScreen();

  }

}

function closeFullScreen() {

  if (document.exitFullscreen) {

    document.exitFullscreen();

  } else if (document.mozCancelFullScreen) {

    document.mozCancelFullScreen();

  } else if (document.webkitExitFullScreent) {

    document.webkitExitFullScreent();

  } else if (document.msExitFullScreen) {

    document.msExitFullScreen();

  }

}

document.querySelector(".toggle-settings").onclick = function () {

  this.firstElementChild.classList.toggle('fa-spin');
  this.parentElement.classList.toggle("hide-settings");

;}

let themesClasses = [];

let colors = Array.from(document.querySelectorAll('.color-options li'));

colors.forEach((color) => {

  themesClasses.push(color.getAttribute('data-theme'));

  color.addEventListener('click', function () {

    Array.from(this.parentElement.children).forEach(li => {

      li.classList.remove('active');

    });

    this.classList.add('active');

    document.querySelector("body").classList.remove(...themesClasses);

    document.querySelector("body").classList.add(this.getAttribute('data-theme'));

  });

});