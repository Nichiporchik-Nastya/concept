// const lists = document.querySelectorAll('.feature-sub');
// const btns = document.querySelectorAll('.feature__link');

// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btns.forEach((btnItem) => {
//             btnItem.classList.remove('feature__link_active')
//         })
//         btnItem.classList.add('feature__link_active')

//         lists.forEach((listItem) => {
//             listItem.classList.add('hidden')
//         })
//         lists[index].classList.remove('hidden')
//     })
// })

//определены переменные по элементам

const answer = document.querySelectorAll(".question_answer");
const questions = document.querySelectorAll(".question");
const answer_btns = document.querySelectorAll(".show_answer");

questions.forEach((question, index) => {
    question.addEventListener('click', () => { //при нажатии у всех удаляются классы
        questions.forEach((q, i) => { 
            answer[i].classList.remove('is_open');
            // answer[i].classList.add('is-close');
            answer_btns[i].classList.remove('close');
        });
        //у нажатого изменяются
        // answer[index].classList.toggle('is-close');
        answer[index].classList.toggle('is_open');
        answer_btns[index].classList.add('close');
    });
});