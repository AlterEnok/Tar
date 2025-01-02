document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const body = document.body; // Получаем элемент <body>

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("_active");
            menuIcon.classList.toggle("_active");
            body.classList.toggle("no-scroll"); // Блокируем/разблокируем прокрутку
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

// document.addEventListener("DOMContentLoaded", () => {
//     // Выбираем все элементы, которые нужно анимировать
//     const sections = document.querySelectorAll(".advantages__left, .advantages__right, .advantages__text, .advantages__image");

//     // Создаем наблюдатель для отслеживания появления секций в зоне видимости
//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     // Добавляем класс "animated", когда элемент становится видимым
//                     entry.target.classList.add("animated");
//                     observer.unobserve(entry.target); // Прекращаем наблюдение после того, как анимация сработала
//                 }
//             });
//         },
//         { threshold: 0.1 } // Секция считается видимой, если она на 50% в области видимости
//     );

//     // Применяем наблюдатель ко всем выбранным элементам
//     sections.forEach((section) => {
//         observer.observe(section);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(
        ".advantages__left, .advantages__right, .advantages__text, .advantages__image"
    );

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
        // Анимация для ПК
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animated");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    } else {
        // Анимация для мобильных устройств
        const handleScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;

                if (sectionTop < window.innerHeight && sectionBottom >= 0) {
                    section.classList.add("animated");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Инициализируем проверку при загрузке страницы
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
        // Анимация для ПК
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animated");
                        observer.unobserve(entry.target); // Останавливаем наблюдение после срабатывания
                    }
                });
            },
            { threshold: 0.1 } // Срабатывает, когда 10% элемента видны
        );

        observer.observe(footer);
    } else {
        // Анимация для мобильных устройств
        const handleScroll = () => {
            const footerTop = footer.getBoundingClientRect().top;
            const footerBottom = footer.getBoundingClientRect().bottom;

            if (footerTop < window.innerHeight && footerBottom >= 0) {
                footer.classList.add("animated");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Инициализируем проверку при загрузке страницы
    }
});