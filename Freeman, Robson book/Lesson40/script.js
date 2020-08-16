window.onload = init;

function init(){
    var image = document.getElementById("zero");
    image.onclick = showAnswer;//Обработчик назначается свойству onclick
                               // объекта изображения, полученного из DOM.
}

function showAnswer(){
    var image = document.getElementById("zero");
    image.src = "zero.jpg"; 
}