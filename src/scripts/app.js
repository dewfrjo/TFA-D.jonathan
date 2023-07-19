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
// document.addEventListener('click', function(event) {
//   const target = event.target;
//   const isMenuOpen = menue.classList.contains('menu--open');
//   const isTargetInsideMenu = menue.contains(target);
  
//   if (isMenuOpen && !isTargetInsideMenu) {
//     toggleMenu();
//   }
// });

// Sélectionnez tous les liens de votre menu
var navLinks = document.querySelectorAll('.menu li a');

// // Parcourir les liens du menu
// navLinks.forEach(function(link) {
//   // Ajouter un écouteur d'événement de clic à chaque lien
//   link.addEventListener('click', function() {
//     // Supprimer la classe "active" de tous les liens du menu
//     navLinks.forEach(function(link) {
//       link.classList.remove('Mactive');
//     });

//     // Ajouter la classe "active" au lien sur lequel vous avez cliqué
//   //   this.classList.add('Mactive');
//   });
// });

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

//pour faire pop ou non mon text dans la partie avantege et limite en version tel
let togTriggers = document.querySelectorAll(".togg-trigger");
for(let togTrigger of togTriggers){
    togTrigger.addEventListener("click", (e) => {
        let parentNode = e.currentTarget.parentNode;
        let contentNode = parentNode.querySelector(".togg-content");
        if(contentNode){
            contentNode.classList.toggle("hidden");
        } 
    });
}