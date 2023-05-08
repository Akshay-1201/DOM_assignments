# Task 1
![](./ass9.1-before.png)
### what to do :-
- Change heading color
- Add cart symbol to button
## Code :-
``` js
let colour = document.querySelector(".caption h1")
colour.style.color = "#E21717";

let cart = document.querySelector(".add-to-cart img");
cart.src = "./images/icon-cart.svg";
```
## After Image 
![](./ass9.1-after.png)

# Task 2
![](./ass9.2-before.png)
### What to do :-
- Add color change hover effect to button
## Code :- 
``` js 
let button = document.querySelector(".add-to-cart");
button.addEventListener("mouseover", ()=>{
    button.style.background = "red";
});
button.addEventListener("mouseout", ()=>{
    button.style.background = "hsl(158, 36%, 37%)";
});
```
## After Image
![](./ass9.2-after.png)