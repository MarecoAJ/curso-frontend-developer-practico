const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", togggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);

function  togggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function  toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}