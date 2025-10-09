let burger = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__burger-menu');
let headerContainer = document.querySelector('.header__container');
let headerLogo = document.querySelector('.header__logo');
let headerMenu = document.querySelector('.header__menu');
let headerList = document.querySelector('.header__list');



burger.addEventListener('click', ()=> {
    burger.classList.toggle('header__burger-active');
    headerContainer.classList.toggle('header__container-burger');
    burgerMenu.classList.toggle('header__burger-menu-active');
    headerLogo.classList.toggle('header__logo-burger');
    headerMenu.classList.toggle('header__menu-burger');
    headerList.classList.toggle('header__list-burger');
    document.body.classList.toggle('no-scroll');
});
