document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const body = document.body;

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("_active");
            menuIcon.classList.toggle("_active");
            body.classList.toggle("no-scroll");
        });
    } else {
        console.error("Menu or Menu Icon not found in the document.");
    }
});

/*slider*/

const heroSlider = new Swiper('.hero__slider', {
    loop: true,
    effect: 'cube',
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
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
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
        handleScroll();
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
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(footer);
    } else {

        const handleScroll = () => {
            const footerTop = footer.getBoundingClientRect().top;
            const footerBottom = footer.getBoundingClientRect().bottom;

            if (footerTop < window.innerHeight && footerBottom >= 0) {
                footer.classList.add("animated");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }
});

/*GSAP */
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href');

        // Анимация исчезновения перед уходом
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                window.location.href = href;
            }
        });
    });
});

// Анимация появления при загрузке
window.addEventListener('load', () => {
    gsap.from('body', {
        opacity: 0,
        duration: 1
    });
});

document.querySelectorAll('.header__link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});


/*PRELOADER */

window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
});


const links = document.querySelectorAll('a[href]');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        const href = link.getAttribute('href');
        const preloader = document.querySelector('.preloader');


        if (!preloader || href.startsWith('#') || href === window.location.pathname) return;

        event.preventDefault();
        preloader.classList.remove('hidden');

        setTimeout(() => {
            window.location.href = link.href;
        }, 1000);
    });
});








document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact__details");
    const contactItems = document.querySelectorAll(".contact__item");

    if (contactSection && contactItems) {

        gsap.set(contactItems, { opacity: 0, y: -50 });


        const thresholdValue = window.innerWidth <= 768 ? 0.4 : 1;


        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        gsap.to(contactItems, {
                            opacity: 1,
                            y: 0,
                            duration: 1.5,
                            ease: "power3.out",
                            stagger: 0.3,
                        });

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: thresholdValue }
        );

        observer.observe(contactSection);
    }
});