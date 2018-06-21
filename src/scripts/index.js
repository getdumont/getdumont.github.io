let slideTimeout = null;

function activeSlide(about, index) {
    about.classList.remove('slide-1');
    about.classList.remove('slide-2');
    about.classList.remove('slide-3');
    about.classList.add('slide-' + (index + 1));
}

function addClickOnStep(about, button, index) {
    button.onclick = function () {
        activeSlide(about, index);
        clearTimeout(slideTimeout);
        nextSlide(about, index + 1);
    };
}

function nextSlide(about, index) {
    slideTimeout = setTimeout(() => {
        let nextIndex = index == 2 ? 0 : index + 1;
        activeSlide(about, index);
        nextSlide(about, nextIndex);
    }, 19000);
}

window.onload = function () {
    /**
     * SLIDE
     */
    const about = document.querySelector('#como-funciona .hero-content');
    const steper = document.querySelector('.steper');
    const buttons = steper.querySelectorAll('.step');

    for (let index in Object.keys(buttons)) {
        addClickOnStep(about, buttons[index], parseInt(index));
    }


    nextSlide(about, 0);


    /**
     * LAZY IMAGE
     */
    const lazyImages = document.querySelectorAll("[data-img]");

    for (let span of lazyImages) {
        const img = document.createElement('img');
        img.src = span.dataset.img;
        img.alt = span.dataset.alt;

        span.parentNode.appendChild(img);
        span.parentNode.removeChild(span);
    }

    const myCSS = document.createElement('link');
    myCSS.rel = "stylesheet";
    myCSS.href = "/assets/css/index.css";

    document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
    setTimeout(() => {
        document.body.removeChild(document.getElementById('placeholder-loading'));
    }, 100);
}