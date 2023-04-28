# First Assignment 

## Task 1 output
![](./task1Output.png)
in it we have to add new nav element "hire me" & eadit contact as "Project" . 

### code :-
``` js
 let list = document.getElementsByTagName("ul")
console.log(list[0])

list[0].appendChild(document.createElement("li")).innerText = "Hire Me"
let list_2 = document.getElementsByTagName("li");
list_2[2].innerText = 'Projects';
 ```
## Task 2 output
![](./task2Output.png)
Change the placeholder name from "search" to " my project".

### Code :-

``` js 
const search = document.querySelector('.search-field');
search.firstElementChild.value = 'search my project';
```
## Task 3 output

![](./task3Output.png)
Change the span values form students to "an employee" & company name to "ineuron Intelligence Pvt Ltd"

### Code :-
``` js
    const para = document.getElementsByTagName("span");
para[2].innerText = 'an Employee';
para[3].innerText ='ineuron Intelligence Pvt Ltd';
```
## Task 4 output 
![](./task4Output.png)

image update 

### Code :-
``` js
const IMG = document.querySelector('img');
IMG.src = 'https://avatars.githubusercontent.com/u/11613311?v=4';
```

## Task 5 output
![](./task5Output.png)

Add new button "support me" below the image 
``` js
const btns = document.querySelector('.hero-right-section-btns');
btns.appendChild(document.createElement("button")).innerText = 'Support Me';
```