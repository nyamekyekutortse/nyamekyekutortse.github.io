let menuButton = document.querySelector(".navbar .bx .bx-menu .menu");
let menuCloseButton = document.querySelector(".nav-links .menuOpen");
let navLinks = document.querySelector(".navbar .nav-links .links");
menuButton.addEventListener("click", ()=>{
    navLinks.style.left = "0";
    console.log("Clicked");
})