var slides = document.querySelectorAll('.slider-img');
var dots = document.querySelectorAll('.dot');

let current = 0;
var navigation = function (i) {
    slides.forEach((slide) => {
        slide.classList.remove('on');

        dots.forEach((dot) => {
            dot.classList.remove('on');
        });
    });

    slides[i].classList.add('on');
    dots[i].classList.add('on')
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        navigation(i);
        current = i;
    })
});

document.getElementById('next-button').addEventListener("click", () => {
    stopAutoplay();
    current = (current + 1) % slides.length;
    navigation(current);
})

document.getElementById('prev-button').addEventListener('click', () => {
    stopAutoplay();
    current = (current - 1 + slides.length) % slides.length; 
    navigation(current);
});

var autoplay = function () {
    autoplayInt = setInterval(() => {
        current = (current + 1) % slides.length;
        navigation(current);
    }, 3000);
}

var stopAutoplay = function () {
    clearInterval(autoplayInt);
}

const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', autoplay);





