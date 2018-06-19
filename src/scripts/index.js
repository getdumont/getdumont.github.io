function addClickOnStep(about, button, index) {
    button.onclick = function () {
        about.classList.remove('slide-1');
        about.classList.remove('slide-2');
        about.classList.remove('slide-3');
        about.classList.add('slide-' + index);
    };
}

window.onload = function () {
    const about = document.querySelector('#sobre .hero-content');
    const buttons = document.querySelectorAll('.steper .step');

    for (let index in Object.keys(buttons)) {
        addClickOnStep(about, buttons[index], parseInt(index) + 1);
    }
}