const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", togggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function togggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    mobileMenu.classList.toggle("inactive");
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    aside.classList.toggle("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
}