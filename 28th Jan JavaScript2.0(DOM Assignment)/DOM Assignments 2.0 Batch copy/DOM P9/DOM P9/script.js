let colour = document.querySelector(".caption h1")
colour.style.color = "#E21717";

let cart = document.querySelector(".add-to-cart img");
cart.src = "./images/icon-cart.svg";

let button = document.querySelector(".add-to-cart");
button.addEventListener("mouseover", ()=>{
    button.style.background = "red";
});
button.addEventListener("mouseout", ()=>{
    button.style.background = "hsl(158, 36%, 37%)";
});
