const arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1691961827908-93823b3cc9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1693643449342-9effd3c4ba32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1693649583052-3f4278925776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1693103846193-de0859aee22d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1693774626177-db31c699a9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1693858763467-652b22ad724b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"}
];


let clutter = "";
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img id = "${idx}" src="${elem.dp}" alt="">
</div>`
})

let storys = document.querySelector(".storys");
storys.innerHTML = clutter;
storys.addEventListener("click", function(dets){
    // console.log(arr[dets.target.id].story)
    document.querySelector(".full-screen").style.display = "block" 
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})` 
    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none" 
    },2000)
})