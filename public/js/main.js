const icon=document.querySelector(".fa-bars");
const menu=document.querySelector(".menu-list");

icon.addEventListener("click",tikla);

function tikla(){
    if(menu.classList.contains("menu-bars")){
        menu.classList.remove("menu-bars");
        
    }
    else{
        menu.classList.add("menu-bars");
       
    }
}

let chanceicon=function(icon){
    icon.classList.toggle('fa-times')
}