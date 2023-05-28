"use strict"

window.onscroll = function() {
    stickyMenu();
  };
  
  var menu = document.getElementById("sticky-menu");
  var sticky = menu.offsetTop;
  
  function stickyMenu() {
    if (window.pageYOffset >= sticky) {
      menu.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
    }
  }
  

