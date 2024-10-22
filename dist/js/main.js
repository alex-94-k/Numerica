/* Burger */

const menu = document.querySelector('.navbar__list'),
burger = document.querySelector('.navbar__burger');

burger.addEventListener('click', function(){
    burger.classList.toggle('navbar__burger-active');
    menu.classList.toggle('navbar__list-active');
});

/* Modal */

const btn = document.querySelector('.showcase__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close')

btn.addEventListener('click', function(){
    overlay.classList.add('overlay__active');
    modal.classList.add('modal__active');
});

closeBtn.addEventListener('click', function(){
    overlay.classList.remove('overlay__active');
    modal.classList.remove('modal__active');

    const errorMessages = document.querySelectorAll('.error__message');

    errorMessages.forEach(message => {
    message.style.display = 'none';
  });
});

/* Form validation */

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const nameError = document.getElementById('name__error');
const emailError = document.getElementById('email__error');
const telError = document.getElementById('tel__error');

form.addEventListener('submit',(e)=> {

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telCheck = /^\+(?:[0-9] {2})?\s*(?:[0-9] {3})?\s*(?:[0-9] {3})?\s*(?:[0-9] {4})?$/;

    if (name.value === '' || name.value === null) {
        e.preventDefault();
        nameError.innerHTML = "Введіть своє імʼя будь ласка";
    }

    if (!email.value === emailCheck) {
        e.preventDefault();
        emailError.innerHTML = "Введіть будь ласка коректну електрону адресу";
    } else if (email.value === '' || email.value === null) {
        e.preventDefault();
        emailError.innerHTML = "Введіть будь ласка коректну електрону адресу";
    }

    if (!tel.value === telCheck) {
        e.preventDefault();
        telError.innerHTML = "Введіть коректний номер телефону";
    } else if (tel.value === '' || tel.value === null) {
        e.preventDefault();
        telError.innerHTML = "Введіть коректний номер телефону";
    }
});