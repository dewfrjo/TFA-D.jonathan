"use strict"

const menuBurger = document.querySelector('.menu__burger');
const menue = document.querySelector('.menu');
if(menuBurger){
    menuBurger.addEventListener('click', function(){
        menue.classList.toggle('menu--open');
    })
}


// pour faire apparaitre ou disparaitre les el d de la partie avantage

let togg1 = document.querySelector('.togg1');
let togg2 = document.querySelector('.togg2');
let togg3 = document.querySelector('.togg3');
let togg4 = document.querySelector('.togg4');
let togg5 = document.querySelector('.togg5');
let togg6 = document.querySelector('.togg6');
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
togg1.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
        d1.style.display = "none";
    }else{
        d1.style.display = "block";
    }
})

function togg(){
    if(getComputedStyle(d2).display != "none"){
        d2.style.display = "none";
    }else{
        d2.style.display = "block";
    }
};
togg2.onclick = togg;

togg3.addEventListener("click", () => {
    if(getComputedStyle(d3).display != "none"){
        d3.style.display = "none";
    }else{
        d3.style.display = "block";
    }
})
togg4.addEventListener("click", () => {
    if(getComputedStyle(d4).display != "none"){
        d4.style.display = "none";
    }else{
        d4.style.display = "block";
    }
})
togg5.addEventListener("click", () => {
    if(getComputedStyle(d5).display != "none"){
        d5.style.display = "none";
    }else{
        d5.style.display = "block";
    }
})
togg6.addEventListener("click", () => {
    if(getComputedStyle(d6).display != "none"){
        d6.style.display = "none";
    }else{
        d6.style.display = "block";
    }
})

// window.onscroll = function() {
//     stickyMenu();
//   };
  
//  var menu = document.querySelector(".sticky-menu");
//  var sticky = menu.offsetTop;

//  function stickyMenu() {
//    if (window.pageYOffset >= sticky) {
//      menu.classList.add("sticky");
//    } else {
//      menu.classList.remove("sticky");
//    }
//  }