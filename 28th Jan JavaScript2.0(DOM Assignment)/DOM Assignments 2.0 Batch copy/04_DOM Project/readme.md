# Output image 
 ![](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

#### Change the background color 

## Cde :-
``` js 
onst bgcolor = document.querySelectorAll(".clearfix")
let barr = ["#E8BD0D", "#E03B8B", "#E07C24", "#3DBE29", "#35BDD0"]

 for (let i=0; i<barr.length; i++){
     bgcolor[i].style.background = barr[i];
 }

 const colour = document.querySelectorAll(".one-third");
 colour.forEach((a) => {
    a.style.color = "#ffffff";
 })
```