///////////modal window
const about = document.querySelectorAll("#about");
const modal = document.querySelector(".modal_wrapper");
const modalCloseButton = document.querySelector(".modal_close_button");

modalCloseButton.addEventListener('click', toggleModal);
about[0].addEventListener('click', toggleModal);
about[1].addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
};