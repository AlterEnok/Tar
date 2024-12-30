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
    loop: false, // Бесконечный цикл отключен, так как слайдов всего два
    effect: 'fade', // Плавная смена слайда
    fadeEffect: {
        crossFade: true, // Более мягкий эффект
    },
    autoplay: {
        delay: 6000, // Задержка между слайдами
        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
    },
    on: {
        slideChange: () => {
            // Убираем зум и текст у всех слайдов
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.classList.remove('zoom');
                const content = slide.querySelector('.slide-content');
                if (content) content.classList.remove('visible');
            });
        },
        slideChangeTransitionStart: () => {
            console.log('Начало перехода слайда');
        },
        slideChangeTransitionEnd: () => {
            const activeSlide = document.querySelector('.swiper-slide-active');
            if (activeSlide) {
                activeSlide.classList.add('zoom'); // Применяем зум
                console.log('Зум добавлен к активному слайду:', activeSlide);

                // Добавляем анимацию текста
                const content = activeSlide.querySelector('.slide-content');
                if (content) content.classList.add('visible');
            }
        },
    },
});