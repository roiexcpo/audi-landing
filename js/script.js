const burgerBtn = document.querySelector("#burgerBtn");
const openNav = document.querySelector("#nav");

burgerBtn.addEventListener("click", function(){
    burgerBtn.classList.toggle('active');
    openNav.classList.toggle("active");
});

const openBtn = document.querySelector(".btn-read-more");
const closePopup = document.querySelector(".close-btn");
const popUp = document.querySelector(".popup");

openBtn.addEventListener("click", function() {
    popUp.classList.toggle("active");
});

closePopup.addEventListener("click", function() {
    popUp.classList.remove("active");
});

popUp.addEventListener('click', function(event) {
    // Если кликнули именно по самому темному фону (popup), а не по белой коробке внутри
    if (event.target === popUp) {
        popUp.classList.remove('active');
    }
});

const openBtn2 = document.querySelector("#btn-read-more-2");
const closePopup2 = document.querySelector(".close-btn-2");
const popUp2 = document.querySelector("#myPopup");

openBtn2.addEventListener("click", function() {
    popUp2.classList.toggle("active");
});

closePopup2.addEventListener("click", function() {
    popUp2.classList.remove("active");
});

popUp2.addEventListener('click', function(event) {
    // Если кликнули именно по самому темному фону (popup), а не по белой коробке внутри
    if (event.target === popU2) {
        popUp2.classList.remove('active');
    }
});

AOS.init({ duration: 800, once: true });

// Находим все ссылки внутри меню
const navLinks = document.querySelectorAll("#nav a");

// Вешаем клик на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Убираем класс active у меню и бургера, чтобы меню закрылось
        burgerBtn.classList.remove("active");
        openNav.classList.remove("active");
    });
});

