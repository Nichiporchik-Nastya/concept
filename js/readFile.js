//////........вставка изображений

let includedContent = document.querySelector('.image');
includedContent.insertAdjacentHTML("afterbegin", `<img class="main_image" src='img/${myData}/${myData}.jpg' alt='${movieName}' />`); //вставить картинку после открывающего тега элемента
let movieCover = document.querySelector('.main_block');
movieCover.style.backgroundImage = `url('./img/${myData}/${myData}_cover.jpg')`; //изменить фоновое изображение главного элемента

// let includedText = document.querySelector('.page_text_title');
// includedText.innerText = "Описание";

//////.........вставка текста
let movieNameTitle = document.querySelector('.main_block_title');
movieNameTitle.insertAdjacentHTML("afterbegin", `${movieName}<br>`); //изменить основной заголовок страницы
let subTitle = document.querySelector('.second_block_title');
subTitle.innerHTML += tagline; //добавить ему подзаголовок

let mainText = document.querySelector('.page_text p');
mainText.insertAdjacentHTML("afterbegin", otherInfo); //заполнить поле основной информацией

