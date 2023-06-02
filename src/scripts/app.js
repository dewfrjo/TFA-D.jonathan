"use strict"

const menuBurger = document.querySelector('.menu__burger');
const menue = document.querySelector('.menu');
if(menuBurger){
    menuBurger.addEventListener('click', function(){
        menue.classList.toggle('menu--open');
    })
}

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