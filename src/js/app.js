const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// Toggle Mobile Menu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");


    } else {
        menu.classList.add("active");
    }
}