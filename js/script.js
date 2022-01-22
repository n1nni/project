const hamburger=document.querySelector(".hamburger");
const navManu=document.querySelector(".navbar-navigation");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navManu.classList.toggle("active");
})
