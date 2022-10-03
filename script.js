// import './style.css'


// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';


const navSlide = () => {
    const burgur = document.querySelector(".burgur");
    const navs = document.querySelector(".nav-links-1");
    const navlinkss = document.querySelectorAll(".nav-links-1 LI");
    const navbar = document.querySelector(".navebar")

    burgur.addEventListener("click", () => {
        navs.classList.toggle("nav-active");
        navbar.classList.toggle("nav-fixed")
        navlinkss.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""

            }
            else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.25
                    }s`;
            }
        });

        burgur.classList.toggle("toggle");
    });

}

navSlide();
function colorChange(ele) {

    if (ele = 1) {
        document.querySelector("#video-six").style.borderColor = "#fff4e3";

    }
    if (ele = 2) {
        document.querySelector("#video-six").style.borderColor = "#e4f3ff";

    }
    if (ele = 3) {
        document.querySelector("#video-six").style.borderColor = "#e4f3ff";

    }
}



function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


/**
 * Setups the logic required for all card sliders to work.
 * It works by incrementing an index position linked to the 
 * left margin of the slides container, that gives the 
 * carousel effect.

 */


var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 30,
    }
});
var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination-one',
        dynamicBullets: true,
        clickable: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 30,
        hide: false,

    },
    breakpoints: {
        0:
        {
            slidesPerView: 1,

        },
        768:
        {
            slidesPerView: 2,

        },
        1050:
        {
            slidesPerView: 3,

        },
    },



});


var swiper = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination-one',
        // dynamicBullets: true,
        clickable: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


// import "./about.js"