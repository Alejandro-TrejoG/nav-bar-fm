document.addEventListener("DOMContentLoaded", () => {
    navBar()
});

function navBar() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-bar");
    const body = document.querySelector("body");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("nav-menu_visible");
        body.classList.toggle("nav-menu_visible");
    });
}