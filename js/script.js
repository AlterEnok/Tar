document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("_active");
            menuIcon.classList.toggle("_active");
        });
    } else {
        console.error("Menu or Menu Icon not found in the document.");
    }
});