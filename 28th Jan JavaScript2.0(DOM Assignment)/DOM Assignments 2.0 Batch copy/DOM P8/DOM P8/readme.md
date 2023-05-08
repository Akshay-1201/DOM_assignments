# Task 1
![](./ass8.1-before.png)
## Solution Code :-
```js
let box = document.querySelector(".new");
box.style.border = "2px solid red";
box.style.padding ="40px";
box.style.overflow = "auto";
```
## After Image 
![](./ass8.1-after.png)

# Task 2
![](./ass8.3-before.png)
## Solution Code :-
```js
let nToggler = document.querySelector(".navbar-toggler");

let nCollapse = document.querySelector(".navbar-collapse");

nToggler.addEventListener("click", ()=>{
    nCollapse.classList.toggle("show");
})
```
## After Image 
![](./ass8.3-after.png)