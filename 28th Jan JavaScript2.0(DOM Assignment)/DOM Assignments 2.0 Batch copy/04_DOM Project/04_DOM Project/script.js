const bgcolor = document.querySelectorAll(".clearfix")
let barr = ["#E8BD0D", "#E03B8B", "#E07C24", "#3DBE29", "#35BDD0"]

 for (let i=0; i<barr.length; i++){
     bgcolor[i].style.background = barr[i];
 }

 const colour = document.querySelectorAll(".one-third");
 colour.forEach((a) => {
    a.style.color = "#ffffff";
 })
