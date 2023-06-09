"use strict"
const menuBurger = document.querySelector('.menu__burger');
const menue = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__el a'); // Sélectionnez tous les liens du menu

function toggleMenu() {
  menue.classList.toggle('menu--open');
  document.body.classList.toggle('menu-open');
}

if (menuBurger) {
  menuBurger.addEventListener('click', toggleMenu);
}
// Fermer le menu en cliquant en dehors du menu ou sur un lien de navigation
document.addEventListener('click', function(event) {
  const target = event.target;
  const isMenuOpen = menue.classList.contains('menu--open');
  const isTargetInsideMenu = menue.contains(target);
  
  if (isMenuOpen && !isTargetInsideMenu) {
    toggleMenu();
  }
});

// Sélectionnez tous les liens de votre menu
var navLinks = document.querySelectorAll('.menu li a');

// Parcourir les liens du menu
navLinks.forEach(function(link) {
  // Ajouter un écouteur d'événement de clic à chaque lien
  link.addEventListener('click', function() {
    // Supprimer la classe "active" de tous les liens du menu
    navLinks.forEach(function(link) {
      link.classList.remove('Mactive');
    });

    // Ajouter la classe "active" au lien sur lequel vous avez cliqué
    this.classList.add('Mactive');
  });
});

// Fonction pour mettre à jour l'état actif du menu lors du défilement
function updateMenuState() {
  // Récupérer la position de défilement verticale de la page
  var scrollPosition = window.scrollY || window.pageYOffset;

  // Parcourir les sections de votre page
  document.querySelectorAll('section').forEach(function(section) {
    // Vérifier si la section est visible dans la fenêtre
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      // Récupérer l'ID de la section
      var sectionId = section.getAttribute('id');

      // Parcourir les liens du menu
      navLinks.forEach(function(link) {
        // Supprimer la classe "active" de tous les liens du menu
        link.classList.remove('Mactive');

        // Vérifier si le lien correspond à la section actuelle
        if (link.getAttribute('href') === '#' + sectionId) {
          // Ajouter la classe "active" au lien correspondant
          link.classList.add('Mactive');
        }
      });
    }
  });
}

// Ajouter un écouteur d'événement de défilement pour mettre à jour l'état du menu
window.addEventListener('scroll', updateMenuState);



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

// pour la partie lim

let toggl1 = document.querySelector('.toggl1');
let toggl2 = document.querySelector('.toggl2');
let toggl3 = document.querySelector('.toggl3');
let toggl4 = document.querySelector('.toggl4');
let toggl5 = document.querySelector('.toggl5');
let l1 = document.querySelector('.l1');
let l2 = document.querySelector('.l2');
let l3 = document.querySelector('.l3');
let l4 = document.querySelector('.l4');
let l5 = document.querySelector('.l5');
toggl1.addEventListener("click", () => {
    if(getComputedStyle(l1).display != "none"){
        l1.style.display = "none";
    }else{
        l1.style.display = "block";
    }
})

toggl2.addEventListener("click", () => {
    if(getComputedStyle(l2).display != "none"){
        l2.style.display = "none";
    }else{
        l2.style.display = "block";
    }
})
toggl3.addEventListener("click", () => {
    if(getComputedStyle(l3).display != "none"){
        l3.style.display = "none";
    }else{
        l3.style.display = "block";
    }
})
toggl4.addEventListener("click", () => {
    if(getComputedStyle(l4).display != "none"){
        l4.style.display = "none";
    }else{
        l4.style.display = "block";
    }
})
toggl5.addEventListener("click", () => {
    if(getComputedStyle(l5).display != "none"){
        l5.style.display = "none";
    }else{
        l5.style.display = "block";
    }
})