    
   
		let pageContent = document.querySelector(".page_content");
    let header = document.querySelector("header");

    let menuBtn = document.querySelector(".menu_button");
    let menuCloseBtn = document.querySelector(".close_menu");
     const menu = document.querySelector(".navbar_panel");



      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
      }); /*добавить обработчик событий*/

      menuCloseBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
      });


    var miniGaleryImage = document.querySelector('.mini_galery_image');
		
		


/*let mainBlock = document.querySelector(".main_block");

let images = ['howl', 'coco', 'orange','nighttown', 'howl'];

function getRandomIndex() {
  const index = Math.floor(Math.random() * images.length);
  return index;
}

let timer = setInterval(() => {
  mainBlock.style.backgroundImage = `url('./img/${images[getRandomIndex()]}.jpg')`;
}, 10000);*/

      ///////////// new page

const newPage = document.querySelectorAll('.card_image'); //поменять на универсальный card_image
let myData;

//запись информации из аттрибута data-source 
for(let i = 0; i < newPage.length; i++){
  newPage[i].addEventListener('click', () => {
     myData = newPage[i].getAttribute('data-source');
     localStorage.setItem( 'objectToPass', myData );
  });
}







