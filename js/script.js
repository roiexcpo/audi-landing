const menu = document.querySelector ("#header__btn--menu");
const header = document.querySelector ("#header");

menu.addEventListener('click', function() {
    const isOpen = header.classList.toggle ("header--open");
    menu.setAttribute ("aria-expanded", isOpen);
});