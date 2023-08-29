const ststus = document.querySelector("h5");
const btn = document.querySelector("#add");
// const Remove = document.querySelector("#remove");
let check = 0;


btn.addEventListener("click", function(){
    if(check == 0 ){
        ststus.innerHTML = "Friends";
        ststus.style.color = "green";
        btn.innerHTML = "Remove Friend"
        check = 1;
    }
    else{
        ststus.innerHTML = "Stranger";
        ststus.style.color = "red";
        btn.innerHTML = "Add Friend"
        check = 0
    }
});
