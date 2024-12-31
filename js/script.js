document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("_active");
            menuIcon.classList.toggle("_active");
        });
    } else {
        console.error("Menu or Menu Icon not found in the document.");
    }
});

/*slider*/

const heroSlider = new Swiper('.hero__slider', {
    loop: true,
    effect: 'cube', // Эффект cube для первого слайдера
    cubeEffect: {
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        slideShadows: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1500,
    allowTouchMove: false,
    on: {
        init: () => {
            const firstSlide = document.querySelector('.swiper-slide-active');
            if (firstSlide) {
                const title = firstSlide.querySelector('.hero__title');
                const subtitle = firstSlide.querySelector('.hero__subtitle');

                if (title) title.classList.add('visible');
                if (subtitle) {
                    setTimeout(() => {
                        subtitle.classList.add('visible');
                    }, 500);
                }
            }
        },
        slideChangeTransitionStart: () => {
            const slides = document.querySelectorAll('.hero__slide');
            slides.forEach(slide => {
                const title = slide.querySelector('.hero__title');
                const subtitle = slide.querySelector('.hero__subtitle');

                if (title) title.classList.remove('visible');
                if (subtitle) subtitle.classList.remove('visible');
            });
        },
        slideChangeTransitionEnd: () => {
            const activeSlide = document.querySelector('.swiper-slide-active');
            if (activeSlide) {
                const title = activeSlide.querySelector('.hero__title');
                const subtitle = activeSlide.querySelector('.hero__subtitle');

                if (title) title.classList.add('visible');
                if (subtitle) {
                    setTimeout(() => {
                        subtitle.classList.add('visible');
                    }, 500);
                }
            }
        },
    },
});

// Второй слайдер
const partnersSlider = new Swiper('.partners__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000, // уменьшена задержка между слайдами
        disableOnInteraction: false,
    },
    speed: 800, // уменьшена скорость перехода слайдов
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});