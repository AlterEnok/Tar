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
        delay: 15000,
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
        delay: 1200,
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
    const content = preloader.querySelector('.preloader__content');

    if (preloader) {
        if (sessionStorage.getItem('preloaderShown')) {
            content.innerHTML = `
        <div class="preloader__ball"></div>
        <div class="preloader__ball"></div>
        <div class="preloader__ball"></div>
      `;
        } else {
            content.innerHTML = `<img src="img/logo.svg" alt="Logo" class="preloader__logo">`;
            sessionStorage.setItem('preloaderShown', 'true');
        }

        // исчезает только контент
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 900);

        // через паузу полностью убираем белый фон
        setTimeout(() => {
            preloader.classList.add('gone');
        }, 1400);
    }
});




// UBER UNS
document.addEventListener("DOMContentLoaded", () => {
    const photo = document.querySelector(".about__photo");



    gsap.to(photo, {
        borderColor: "#ffd9b3",
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.set(".about__text p", { opacity: 0, y: 20 });

gsap.to(".about__text p", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about__text",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});


// PARTNERS 

document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".patrones__logo");


    gsap.set(logos, { opacity: 0, y: 30 });


    gsap.to(logos, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
    });


    gsap.utils.toArray(".patrones__logo").forEach((logo) => {
        gsap.to(logo, {
            y: -20,
            ease: "none",
            scrollTrigger: {
                trigger: logo,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    });


    logos.forEach((logo) => {
        logo.addEventListener("mouseenter", () => {
            gsap.to(logo, { scale: 1.15, rotation: 2, duration: 0.3, ease: "elastic.out(1,0.3)" });
        });

        logo.addEventListener("mouseleave", () => {
            gsap.to(logo, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
        });
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

/*ANGEBOT */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.angebot__item').forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power4.out",
        transformPerspective: 1000,
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

/* ==== SCROLL LOCK HELPERS ==== */
function disableScroll() {
    document.documentElement.classList.add('scroll-lock');
}

function enableScroll() {
    document.documentElement.classList.remove('scroll-lock');
}

/* ==== MODAL ==== */
const modal = document.getElementById("modal");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".modal__close");
const openModalButtons = document.querySelectorAll(".modal-open");

if (modal && modalDescription && modalImage) {
    openModalButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const description = button.dataset.description;
            const imageSrc = button.dataset.img;

            if (description) {
                modalDescription.textContent = description;
            }

            if (imageSrc) {
                modalImage.src = imageSrc;
                modalImage.style.display = "block";
            } else {
                modalImage.style.display = "none";
            }

            modal.classList.add("show");
            disableScroll();
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
        enableScroll();
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            enableScroll();
        }
    });
}

/* ==== FORM ==== */
const contactModal = document.getElementById('contact-form-modal');
const contactButtons = document.querySelectorAll('.angebot__button, .beratung-button');
const closeFormButton = contactModal.querySelector('.modal__close');

contactButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        disableScroll();
    });
});

closeFormButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
    enableScroll();
});

window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
        enableScroll();
    }
});

// Товары

document.addEventListener("DOMContentLoaded", function () {

    fetch('/api/products') // Заменишь URL
        .then(response => response.json())
        .then(products => {
            const select = document.getElementById('productSelect');
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                select.appendChild(option);
            });
        })
        .catch(err => {
            console.error('Ошибка загрузки списка товаров:', err);
        });
});


