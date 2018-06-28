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
        index = index > 2 ? 0 : index;
        activeSlide(about, index);
        nextSlide(about, index + 1);
    }, 18000);
}

function setThanks(email) {
    const thanks = document.querySelector('.thanks');
    const inserted = document.querySelector('.inserted');

    if (inserted) {
        thanks.querySelector('span').textContent = email;
        thanks.classList.remove('hide');
        inserted.classList.add('hide');
    }
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


    nextSlide(about, 1);


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

    /**
     * SEND EMAIL
     */
    const form = document.getElementById('email-form');
    const contact = document.getElementById('participe');

    form.onsubmit = function (e) {
        e.preventDefault();
        form.classList.add('loading');
        const email = form.querySelector('input').value;
        const http = new XMLHttpRequest();
        http.open('POST', `https://mailgun.getdumont.com/${email}/`, true);
        http.onreadystatechange = function () {
            if (this.status === 200) {
                contact.classList.remove('error');
                setThanks(email);
            } else {
                form.classList.remove('loading');
                contact.classList.add('error');
            }
        };
        http.send();
    }
}