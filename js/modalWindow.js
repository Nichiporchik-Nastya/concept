///////////modal window
//определение необходимых переменных для элементов страницы
const about = document.querySelectorAll("#about");
const modal = document.querySelector(".modal_wrapper");
const modalWindow = document.querySelector(".modal_window");
const modalCloseButton = document.querySelector(".modal_close_button");

//вызов функции при нажатии на соответствующие элементы страницы
modalCloseButton.addEventListener('click', toggleModal);
about[0].addEventListener('click', toggleModal);
about[1].addEventListener('click', toggleModal);
// modal.addEventListener('click', () => {
//     modal.classList.toggle("is-open"); //закрыть модальное окно при нажатии в любую его область
// });
//функция добавляет в список классов класс, стили которого отвечают за открытие модального окна
function toggleModal() { 
    modal.classList.toggle("is-open");
};

