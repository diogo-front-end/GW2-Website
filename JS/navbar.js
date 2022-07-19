const primaryNav = document.querySelector(".primary-navigation");
const navBtnToggle = document.querySelector(".menu-btn");

navBtnToggle.addEventListener("click", () => {
    navBtnToggle.classList.toggle('open');
    if (navBtnToggle.classList.contains('open')) {
        primaryNav.style.transform = "translateX(0%)";
    } else {
        primaryNav.style.transform = "translateX(100%)"
    }
});