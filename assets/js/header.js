// HEADER RESPONSIVE

const menuMobile = document.querySelector(".header__mobile--menu");
const navMenu = document.querySelector(".header__mobile--nav");

menuMobile.addEventListener("click", function() {
    if(navMenu.classList.contains("d-none")) {
        navMenu.classList.remove("d-none");
        navMenu.classList.add("d-flex");       
    } else {
        navMenu.classList.add("d-none");
        navMenu.classList.remove("d-flex"); 
    }
});

// HEADER SCROLL

const bottomBar = document.querySelector(".header__container");

function activeScroll () {
    bottomBar.classList.toggle("header-scrolled", scrollY > 0);
};

window.addEventListener("scroll", activeScroll);


