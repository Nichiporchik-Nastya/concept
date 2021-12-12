const containers = document.querySelectorAll(".slides_wrapper");

let slideIndex = 0;
let clicksNumber = 0;

containers.forEach(container =>{
    const prevBtn = container.querySelector(".prev_button");
    const nextBtn = container.querySelector(".next_button");
    const slider = container.querySelector(".slider");
    const slide = container.querySelector(".slide");
    const slidesCount = slider.querySelectorAll(".slide").length;
    const width = slide.offsetWidth;

    nextBtn.addEventListener('click', () => {
        changeSlide('next');
    });

    prevBtn.addEventListener('click', () => {
        changeSlide('prev');
    });

    function changeSlide(direction) {

        if (direction === 'next') {
            slideIndex++;
        } else if (direction === 'prev') {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slidesCount - 1;
            }
        }
        if (slideIndex * width > width * slidesCount - width) {
            slideIndex = 0;
        } //вернуть в начало, если смещение превышает общую длину всех карточек
        slider.style.transform = `translateX(-${slideIndex * width}px)`; //слайдер смещается на ширину равную ширине слайда умноженную на текущий индекс
    }

});