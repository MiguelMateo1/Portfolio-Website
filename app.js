const navContainter = document.querySelector(".small-nav");
const btnToggle = document.querySelector(".nav-toggle");
const navBtn = document.querySelector(".nav-btn");
const largeNav = document.querySelector(".nav-containter")
const toTopBtn = document.querySelector(".topBtn");
const navLinks = document.querySelectorAll(".nav-link");

// shows/hide button to top of page on botton of page
window.addEventListener('scroll', () => {

    if (window.pageYOffset > 500) {
        toTopBtn.classList.add('on');
    } else {
        toTopBtn.classList.remove('on');
    }
})

// Event lister, toggle nav btn show and hide btn on small screen
btnToggle.addEventListener("click", () => {
    const visibility = navContainter.getAttribute('data-visible')
    
    if (visibility == "false") {
        navContainter.setAttribute('data-visible', true);
        navBtn.classList.remove('fa-solid','fa-bars');
        navBtn.classList.add('fa-solid','fa-x');
    } else {
        navContainter.setAttribute('data-visible', false);
        navBtn.classList.remove('fa-solid','fa-x');
        navBtn.classList.add('fa-solid','fa-bars');
    }
})

// closes nav when click on likn - on small screen
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navContainter.setAttribute('data-visible', false);
        navBtn.classList.remove('fa-solid','fa-x');
        navBtn.classList.add('fa-solid','fa-bars');
    })
})

// on scroll show top nav bar; on larger screen
window.addEventListener("scroll", () => {

    // const scrollArea = document.documentElement.scrollHeight - window.innerHeight;

    if (window.scrollY > 150) {
        largeNav.classList.add('nav-fixed')
    } else {
        largeNav.classList.remove('nav-fixed')
    }
})

// projects section, event listener for back and next btn on projects
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const projectsBox = document.querySelector('.projects-img-wrap')

leftBtn.addEventListener('click', () => {
    projectsBox.scrollBy(-50, 0);
});

rightBtn.addEventListener('click', () => {
    projectsBox.scrollBy(50, 0);
});



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


