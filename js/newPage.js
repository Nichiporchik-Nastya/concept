let myData = localStorage['objectToPass']; //получение информации из localStorage

//if (localStorage['objectToPass'] == undefined) myData = "Ошибка 404. Страница не найдена";

let newTitle = document.title = myData; //переименовывание страницы

//динамическое подключение скриптов с соответствующей информацией и функциями для её считывания
let textScript = document.createElement('script');
textScript.type = 'text/javascript';
document.body.appendChild(textScript);
textScript.src = `js/textScripts/${myData}.js`;

let readTextScript = document.createElement('script');
readTextScript.type = 'text/javascript';
document.body.appendChild(readTextScript);
readTextScript.src = 'js/readFile.js';


let sideBar = document.querySelector(".sidebar");
window.addEventListener("scroll", function () {

    if (window.pageYOffset > 450 /*|| document.documentElement.scrollTop > 150*/)
        sideBar.classList.add('show');

    else sideBar.classList.remove('show');

});


//localStorage.removeItem( 'objectToPass' ); //очищение localStorage