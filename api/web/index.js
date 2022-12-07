"use strict";
const menuButton = document.querySelector('.navbar__menu-img');
const modalNavbar = document.querySelector('.modal-navbar__background');
const modalNavbarExit = document.querySelector('.modal-navbar__background__exit-container');

modalNavbarExit.addEventListener('click', () => {
 modalNavbar.style.display = 'none';   
})

menuButton.addEventListener('click',()=>{
 modalNavbar.style.display = "flex";
})


// Reveals
window.sr = ScrollReveal();
    sr.reveal('.navbar',{
      duration : 3000,
      origin : 'top',
      distance : '100px',
    });
 

  sr.reveal('.redes-fixed',{
    duration : 3000,
    origin : 'top',
    distance : '100px'
  });

  sr.reveal('.presentation',{
        duration : 3000,
        origin : 'top',
        distance : '100px'
})


  sr.reveal('.me',{
    duration : 4000,
    origin : 'left',
    distance : '100px'
  })
  
  sr.reveal('.tecnologies-container',{
    duration : 3000,
    origin : 'left',
    distance : '100px'
  })


// end of reveals