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

const swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade', // Плавный fade-эффект
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 5000, // Задержка между слайдами
        disableOnInteraction: false,
    },
    on: {
        init: () => {
            // Убедимся, что элементы первого слайда видимы
            const firstSlide = document.querySelector('.swiper-slide-active');
            if (firstSlide) {
                const title = firstSlide.querySelector('.hero__title');
                const subtitle = firstSlide.querySelector('.hero__subtitle');

                if (title) title.classList.add('visible'); // Показать заголовок
                if (subtitle) {
                    setTimeout(() => {
                        subtitle.classList.add('visible'); // Задержка для подзаголовка
                    }, 500); // Задержка в 500 мс
                }
            }
        },
        slideChangeTransitionStart: () => {
            // Убираем анимацию у всех слайдов
            const slides = document.querySelectorAll('.hero__slide');
            slides.forEach(slide => {
                const title = slide.querySelector('.hero__title');
                const subtitle = slide.querySelector('.hero__subtitle');

                if (title) title.classList.remove('visible');
                if (subtitle) subtitle.classList.remove('visible');
            });
        },
        slideChangeTransitionEnd: () => {
            // Анимация активного слайда
            const activeSlide = document.querySelector('.swiper-slide-active');
            if (activeSlide) {
                const title = activeSlide.querySelector('.hero__title');
                const subtitle = activeSlide.querySelector('.hero__subtitle');

                if (title) title.classList.add('visible'); // Показать заголовок
                if (subtitle) {
                    setTimeout(() => {
                        subtitle.classList.add('visible'); // Задержка для подзаголовка
                    }, 500); // Задержка в 500 мс
                }
            }
        },
    },
});