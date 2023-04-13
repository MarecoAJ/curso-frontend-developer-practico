const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", togggleDesktopMenu);
function  togggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}