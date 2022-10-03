// import './about.css' 
// // import gsap from "gsap";
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







var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});