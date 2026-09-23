/* =========================================================
   NAVBAR
========================================================= */

let prevScroll = window.pageYOffset;

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.getElementById("navbar");


/* =========================================================
   NAVBAR HIDE / SHOW SAAT SCROLL
========================================================= */

window.addEventListener("scroll", function () {

    let currentScroll = window.pageYOffset;

    if (currentScroll <= 10) {

        navbar.style.top = "0";

    } 
    else if (prevScroll > currentScroll) {

        navbar.style.top = "0";

    } 
    else {

        navbar.style.top = "-80px";

    }

    prevScroll = currentScroll;

});


/* =========================================================
   NAVBAR MUNCUL SAAT MOUSE KE BAGIAN ATAS
========================================================= */

document.addEventListener("mousemove", function (e) {

    if (e.clientY < 50) {

        navbar.style.top = "0";

    }

});


/* =========================================================
   MENU MOBILE
========================================================= */

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================================
   TUTUP MENU MOBILE SETELAH MEMILIH MENU
========================================================= */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
