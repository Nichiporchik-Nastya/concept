
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


      ///////////// new page

const newPage = document.querySelectorAll('.dynamic_link'); 

  let myData = "next";
//запись информации из аттрибута data-source 
for(let i = 0; i < newPage.length; i++){
  newPage[i].addEventListener('click', () => {
    myData = newPage[i].getAttribute('data-source');
    let myStorage = myData;
    console.log(myStorage);
     localStorage.setItem( 'objectToPass', myData );
  });
}








