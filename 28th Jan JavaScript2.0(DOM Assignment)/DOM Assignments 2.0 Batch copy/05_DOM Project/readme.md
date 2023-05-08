# Output image
![](./05_DOM%20Project/Output/DOM%20P2%20SS.png)
### What to do :-
- Add button in nav bar (Pro Subscription)
- Add tag name in recipe (Chinese(7))
- Creating a card
- chnage the name
## Cdoe :- 
``` js 
// Adding button 

let navb = document.querySelector(".nav-center");
let but  = document.createElement("button");
but.innerText = "Pro Subcsription";
but.classList.add("btn");
navb.appendChild(but);

// adding tag name

let tagname = document.querySelector(".tags-container div");
let link = document.createElement("a");
link.href = "#";
link.innerText = "Chinese (7)" ;
tagname.appendChild(link);

//  create card
const gallery = document.querySelector(".recipe-gallery");

 let car = document.createElement("div");
 car.className = "card";
 gallery.appendChild(car);
let par = document.createElement("h5");
par.innerText = "add 6th card here";
car.appendChild(par);

// change name 
let names = document.getElementsByTagName("a");
names[17].innerHTML = "Akshay Kute";
```