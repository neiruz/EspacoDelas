
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => { 
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


const sr = ScrollReveal({
  distance:'65px',
  duration: 2600,
  delay:450,
  reset: true

});

sr.reveal('.card', {delay:100,origin:'top'});
sr.reveal('.cards', {delay:100,origin:'top'});
sr.reveal('.tituloserv', {delay:80,origin:'top'});
sr.reveal('.swiper', {delay:100,origin:'top'});
sr.reveal('.comentarioT', {delay:100,origin:'top'});
sr.reveal('.comentario', {delay:100,origin:'top'});
sr.reveal('.endereço', {delay:100,origin:'top'});




var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});



