const primaryNav = document.querySelector(".primary-navigation");
const navBtnToggle = document.querySelector(".menu-btn");
const navbarOpen = "translateX(0%)";
const navbarClose = "null";


navBtnToggle.addEventListener("click", () => {
    navBtnToggle.classList.toggle('open');
    if (navBtnToggle.classList.contains('open')) {
        primaryNav.style.transform = navbarOpen;
    } else {
        primaryNav.style.transform = navbarClose;
    }
});