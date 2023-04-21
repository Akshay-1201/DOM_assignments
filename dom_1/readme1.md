# First Assignment 

### Task 1 output
![](./dom_1/task1Output.png)
in it we have to add new nav element "hire me" & eadit contact as "Project" . 

### code :-
``` js
 let list = document.getElementsByTagName("ul")
console.log(list[0])

list[0].appendChild(document.createElement("li")).innerText = "Hire Me"
let list_2 = document.getElementsByTagName("li");
list_2[2].innerText = 'Projects';
 ```
### Task 2 output
![](./dom_1/task2Output.png)
Change the placeholder name from "search" to " my project".

### Code :-

``` js 
const search = document.querySelector('.search-field');
search.firstElementChild.value = 'search my project';
```
### Task 3 output

![](./dom_1/task3Output.png))
Change the span values 