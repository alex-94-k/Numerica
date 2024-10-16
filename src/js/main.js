/* Burger */

const menu = document.querySelector('.navbar__list'),
burger = document.querySelector('.navbar__burger');

burger.addEventListener('click', function(){
burger.classList.toggle('navbar__burger-active');
menu.classList.toggle('navbar__list-active');
});