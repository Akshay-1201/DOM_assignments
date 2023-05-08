// border & scrollbar
let box = document.querySelector(".new");
box.style.border = "2px solid red";
box.style.padding ="40px";
box.style.overflow = "auto";

// togler
let nToggler = document.querySelector(".navbar-toggler");

let nCollapse = document.querySelector(".navbar-collapse");

nToggler.addEventListener("click", ()=>{
    nCollapse.classList.toggle("show");
})