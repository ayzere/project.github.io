const featureItems = document.querySelectorAll('.feature-item');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0; 

featureItems.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active'); 
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots button');

function updateSlider() {
    const offset = -currentIndex * 100; 

    featureItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % featureItems.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + featureItems.length) % featureItems.length;
    updateSlider();
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

updateSlider();
