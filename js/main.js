// navbar 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('show');
}

// navbar hide
let link=document.querySelectorAll("#header .nav_link");
link.forEach(function(a){
    a.addEventListener("click",()=>{
        navbar.classList.remove("show");
        menu.classList.remove('fa-times');
    })
})





// header scroll 
let section=document.querySelectorAll("section");
let navLink=document.querySelectorAll(".nav_wrapper .navBar a");
let nav=document.querySelector(".nav_wrapper");

window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }

   
        section.forEach(sec=>{
            let top = window.scrollY;
            let offset = sec.offsetTop -170;
            let height=sec.offsetHeight;
            let id=sec.getAttribute("id");
    
            if(top>= offset && top< offset+height){
                navLink.forEach(links=>{
                    links.classList.remove("active");
                    document.querySelector('.nav_wrapper .navBar a[href*= '+ id + ']').classList.add("active");
                })
            }
        })
    
}