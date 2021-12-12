myData = window.localStorage['objectToPass']; //получение информации из localStorage

//myData = myStorage;

console.log(myData);

//if (localStorage['objectToPass'] == undefined) location.reload();


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
