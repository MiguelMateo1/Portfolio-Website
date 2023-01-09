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

// skills section hide/activate
const btns = document.querySelectorAll(".btn-heading");
const skillsInfo = document.querySelectorAll(".info");
const skillsArea = document.querySelector('.skills-container')

skillsArea.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
        btns.forEach( (btn) => {
            btn.classList.remove('btn-active')
            e.target.classList.add('btn-active')
        });
        skillsInfo.forEach((info) => {
            info.classList.remove('active')
            const element = document.getElementById(id);
            element.classList.add('active')
        })
    }
})
