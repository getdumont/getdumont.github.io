function addClickOnStep(about, button, index) {
    button.onclick = function () {
        about.classList.remove('slide-1');
        about.classList.remove('slide-2');
        about.classList.remove('slide-3');
        about.classList.add('slide-' + index);
    };
}

window.onload = function () {
    const lazyImages = document.querySelectorAll("[data-img]");
    const about = document.querySelector('#como-funciona .hero-content');
    const buttons = document.querySelectorAll('.steper .step');

    for (let index in Object.keys(buttons)) {
        addClickOnStep(about, buttons[index], parseInt(index) + 1);
    }

    for (let span of lazyImages) {
        const img = document.createElement('img');
        img.src = span.dataset.img;
        img.alt = span.dataset.alt;

        span.parentNode.appendChild(img);
        span.parentNode.removeChild(span);
    }
}