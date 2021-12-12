//////........вставка изображений

/*let includedContent = document.querySelector('.image');
includedContent.insertAdjacentHTML("afterbegin", `<img class="main_image" src='img/${myData}/${myData}.jpg' alt='${movieName}' />`); //вставить картинку после открывающего тега элемента
let movieCover = document.querySelector('.main_block');
movieCover.style.backgroundImage = `url('./img/${myData}/${myData}_cover.jpg')`; //изменить фоновое изображение главного элемента
*/
// let includedText = document.querySelector('.page_text_title');
// includedText.innerText = "Описание";

//////.........вставка текста
/*let movieNameTitle = document.querySelector('.main_block_title');
movieNameTitle.insertAdjacentHTML("afterbegin", `${movieName}<br>`); //изменить основной заголовок страницы
let subTitle = document.querySelector('.second_block_title');
subTitle.innerHTML += tagline; //добавить ему подзаголовок

let mainText = document.querySelector('.page_text p');
mainText.insertAdjacentHTML("afterbegin", otherInfo); //заполнить поле основной информацией
*/
// if (myData == "underfind")
//     document.querySelector('.block_title').innerHTML = "Упс. Что-то пошло не так";

let breadItems = document.body.querySelectorAll(".breadcrumbs li span"); 
breadItems[breadItems.length-1].innerText=myData; //запись текущего названия в хлебние крошки

var path = window.location.pathname;

if(path == "/studio.html"){ /* вставка контента ориентирована на определённый тип страницы */
    
    let animatedBlock = document.body.querySelector(".next_first_block");
    animatedBlock.style.backgroundImage = `url('img/${myData}.jpg')`;

let firtsTitle = document.querySelector('.block_title');
firtsTitle.innerHTML = studioName; /* новый заголовок */
let firtsText = document.querySelector('.block_text');
firtsText.innerHTML = studioText; /* новое описание */

let cartoonsCount = cartoonsList.length; /* подсчёт количества имеющихся мультфильмов */

let cartoonsWrapper = document.querySelector('.cartoons_wrapper');

let newDiv = document.createElement('div'); /* создание нового блока */
newDiv.className = "cartoon_card"; /* добавление класса */

let newH = document.createElement('h4'); /* создание нового заголовка */
newH.className = "card_title";
newDiv.appendChild(newH); /* отображение элемента внутри другого */

let newA = document.createElement('a'); /* создание новой ссылки */
newA.href = "next.html";
newDiv.append(newA);

let newImg = document.createElement('img'); /* создание новой картинки */
newImg.className = "cartoon_card_img dynamic_link";
newImg.alt="обложка статьи"; /* заполнение поля alt */
newA.append(newImg);

cartoonsWrapper.insertAdjacentElement("afterbegin", newDiv);
for (let i = 0; i < cartoonsCount-1; i++){
    newDiv = newDiv.cloneNode(true); /* клонирование элемента перед вставкой */
    cartoonsWrapper.insertAdjacentElement("beforeend", newDiv); /* вставка в имеющийся на станице блок новых элементов */
}

let cartoonTitles = document.querySelectorAll('.card_title');
let cartoonImages = document.querySelectorAll('.cartoon_card_img');

    for (i = 0; i < cartoonsCount; i++) {  /* заполнение блоков содержимым */
    cartoonTitles[i].innerHTML = cartoonsList[i].cartoonName;
    cartoonImages[i].src = cartoonsList[i].cartoonCover;
    cartoonImages[i].setAttribute("data-source", cartoonsList[i].cartoonCode);
}
    const newPage = document.querySelectorAll('.dynamic_link');

    //запись информации из аттрибута data-source 
    for (let i = 0; i < newPage.length; i++) {
        newPage[i].addEventListener('click', () => {
            myData = newPage[i].getAttribute('data-source');
            let myStorage = myData;
            console.log(myStorage);
            localStorage.setItem('objectToPass', myData);
        });
    }
}

if (path == "/next.html") {
    let animatedBlock = document.body.querySelector(".next_first_block");
    animatedBlock.style.backgroundImage = `url('img/${studioName}/${myData}.jpg')`;

    let firtsTitle = document.querySelector('.block_title');
    firtsTitle.innerHTML = movieName; /* новый заголовок */
    let firtsText = document.querySelector('.block_text');

    
    firtsText.innerHTML = movieInfo; /* новое описание */ 

    let cartoonsWrapper = document.querySelector('.cartoons_wrapper');

    let newDiv = document.createElement('div'); /* создание нового блока */
    newDiv.className = "cartoon_card"; /* добавление класса */


    let newA = document.createElement('a'); /* создание новой ссылки */
    newDiv.append(newA);


    let newImg = document.createElement('img'); /* создание новой картинки */
    newImg.className = "cartoon_card_img";
    newImg.id = "modal_img";
    newImg.alt = `${myData} концепт`; /* заполнение поля alt */
    newA.append(newImg);

    cartoonsWrapper.insertAdjacentElement("afterbegin", newDiv);
    for (let i = 0; i < counOfImg - 1; i++) {
        newDiv = newDiv.cloneNode(true);
        cartoonsWrapper.insertAdjacentElement("afterbegin", newDiv);
         /* клонирование элемента перед вставкой */
        //cartoonsWrapper.insertAdjacentElement("beforeend", newDiv); /* вставка в имеющийся на станице блок новых элементов */
    }
    let cartoonImages = document.querySelectorAll('.cartoon_card_img');
    for (i = 0; i < counOfImg; i++) {  /* заполнение блоков содержимым */

        cartoonImages[i].src = `img/${studioName}/${myData}/${i}.jpg`;
    }



    let modalImgWrap = document.querySelector(".modal_img_wrapper");
    modalImgWrap.insertAdjacentHTML("afterbegin", `
		<div class="modal_img_window ">
            <button class="modal_close_button modal_img_close_button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M22 2L2 22" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
            <img class="modal_big_img" src="" alt=" концепт-aрт">
        </div>
`);




let modalImages = document.body.querySelectorAll("#modal_img");
let modalBigImg = document.body.querySelector(".modal_big_img");

    modalImgWrap.addEventListener('click', () => {
        modalImgWrap.classList.toggle("is-open");
    });

    modalImages.forEach(modalImage => {
        modalImage.addEventListener('click', () => {
            modalBigImg.src = modalImage.src;
            modalImgWrap.classList.add("is-open");
        });
    });
}

