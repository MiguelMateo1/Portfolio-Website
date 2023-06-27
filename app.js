const navContainter = document.querySelector(".small-nav");
const btnToggle = document.querySelector(".nav-toggle");
const navBtn = document.querySelector(".nav-btn");
const largeNav = document.querySelector(".nav-containter")
const toTopBtn = document.querySelector(".topBtn");
const navLinks = document.querySelectorAll(".nav-link");
const smallNav = document.querySelector(".small-nav");

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

// closes nav when click on link; *on small screen
smallNav.addEventListener("click", (e) => {
    if (e.target.classList.contains('nav-link')) {
        navContainter.setAttribute('data-visible', false);
        navBtn.classList.remove('fa-solid','fa-x');
        navBtn.classList.add('fa-solid','fa-bars');
    }
})

// on scroll show top nav bar; *on larger screen
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
const skillsArea = document.querySelector('.skills-container');
const infoDiv = document.querySelector('.info-div')

skillsArea.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
        btns.forEach( (btn) => {
            btn.classList.remove('btn-active')
            e.target.classList.add('btn-active')
        });
        skillsInfo.forEach((info) => {
            info.classList.remove('active');
            // infoDiv.classList.remove('view');
            infoDiv.classList.add('disabled');
            const element = document.getElementById(id);
            element.classList.add('active');
        })

        if (id == 'cert') {
            infoDiv.classList.add('view');
            infoDiv.classList.remove('disabled');
        } else {
            infoDiv.classList.remove('view');
            infoDiv.classList.add('disabled');
        }
    }
})


// project modal pop up dispaly section
const modal = document.getElementById('modal');
const main = document.getElementById('main');
const modalBtn = document.querySelector('.modal-x');
const projectModal = document.querySelector('.project-modal');

// toggle class active class list
function toggle () {
    modal.classList.toggle('active');
    main.classList.toggle('active');
    projectModal.classList.toggle('active');
};
// close modal
modalBtn.addEventListener('click', (e) => {
    toggle();
});

// holds projects data to later dipaly when click on a project
const projects = [
    {
        name: 'online store',
        url: 'https://store-app-miguel.netlify.app/',
        gitHub: 'https://github.com/MiguelMateo1/Store-app',
        img: 'images/project/shoe.png',
    }, {
        name: 'ultra plan',
        url: 'https://ultra-plan.netlify.app/',
        gitHub: 'https://github.com/MiguelMateo1/Ultra-plan',
        img: 'images/project/ultra.png',
    }, {
        name: 'card matching',
        url: 'https://card-match-miguel.netlify.app/',
        gitHub: 'https://github.com/MiguelMateo1/Card-match',
        img: 'images/project/card.png',
    }
]

// gets name of the clicked project
projectsBox.addEventListener('click', (e) => {
    const selectedProject = e.target.parentElement.getAttribute('project-id');
    getProject(selectedProject)
})

function getProject (project) {
    for (let i = 0; i <= projects.length; i++){
        if (projects[i].name == project){
            displayProject(i)
            return 
        }
    }
}
// displays selected project modal
function displayProject (p) {
    toggle()
    const {name,url,gitHub,img} = projects[p]
    
    const display = projectModal.innerHTML = `
    <div class="modal-img">
        <img src=${img} alt=${name}>
    </div>
    <div class="modal-link">
        <a href="${url}" target="_blank">Live site<i class="fa-solid fa-earth-americas"></i></a>
        <a href=${gitHub} target="_blank">View code<i class="fa-brands fa-github icon"></i></a>
    </div>
    <div class="modal-info">
        <h5>${name}</h5>
    </div>`
    return display;
}