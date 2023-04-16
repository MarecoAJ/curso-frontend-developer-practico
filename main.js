const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productList = [];
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", togggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function togggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    mobileMenu.classList.toggle("inactive");
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    shoppingCartContainer.classList.toggle("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
}

productList.push({
    nameProduc: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    nameProduc: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    nameProduc: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for (producto of productList) {
    const productCard = document.createElement("div");
    const img = document.createElement("img");
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const productInfoFigure = document.createElement("figure");
    const productInfoCart = document.createElement("img");

    productCard.classList.add("product-card");
    img.setAttribute("src", producto.image);
    productInfo.classList.add("product-info");
    productPrice.innerText = "$" + producto.price;
    productName.innerText = producto.nameProduc;
    productInfoCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
}