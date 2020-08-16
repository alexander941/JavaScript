window.onload = function(){
    var count = 0;
    var message = "";
    var div = document.getElementById("message");

    var button = document.getElementById("clickme");
    button.onclick = function(){
        count++;
        div.innerHTML = message + count + "times!";
    };
};