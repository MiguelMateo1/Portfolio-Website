const navContainter = document.querySelector(".small-nav");
const btnToggle = document.querySelector(".nav-toggle");
const navBtn = document.querySelector(".nav-btn");
const largeNav = document.querySelector(".nav-containter")


btnToggle.addEventListener("click", () => {
    const visibility = navContainter.getAttribute('data-visible')
    
    if (visibility == "false") {
        navContainter.setAttribute('data-visible', true);
        btnToggle.setAttribute('aria-expanded', true);
        navBtn.classList.remove('fa-solid','fa-bars');
        navBtn.classList.add('fa-solid','fa-x');
    } else {
        navContainter.setAttribute('data-visible', false);
        btnToggle.setAttribute('aria-expanded', false);
        navBtn.classList.remove('fa-solid','fa-x');
        navBtn.classList.add('fa-solid','fa-bars');
    }
})

window.addEventListener("scroll", () => {

    const scrollAreal = document.documentElement.scrollHeight - window.innerHeight;

    if (window.scrollY > 150) {
        largeNav.classList.add('nav-fixed')
    } else {
        largeNav.classList.remove('nav-fixed')
    }
})