const primaryHeader = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");
const navBtnToggle = document.querySelector(".menu-btn");


const navbarOpen = "translateX(0%)";
const navbarClose = null;
const primaryHeaderColorOpen = "rgba(0, 0, 0 ,1)";
const primaryHeaderColorClose = "rgba(0, 0, 0, 0.75)"


navBtnToggle.addEventListener("click", () => {
    navBtnToggle.classList.toggle('open');
    if (navBtnToggle.classList.contains('open')) {
        primaryNav.style.transform = navbarOpen;
        primaryHeader.style.backgroundColor = primaryHeaderColorOpen;
    } else {
        primaryNav.style.transform = navbarClose;
        primaryHeader.style.backgroundColor = primaryHeaderColorClose;
    }
});
