var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false; // когда корабль будет уничтожен будет true

    while(isSunk==false){

        guess = prompt("«Готов, целься, стреляй!» (Введите число от 0 до 6");

        if(guess<0||guess>6){

            alert("Пожалуйста, введите действительный номер ячейки!");

        } else {

            guesses = guesses + 1;

            if(guess == location1||guess == location2||guess==location3){

                alert("Попадание");
                hits = hits + 1;

                if(hits == 3){

                    isSunk = true;
                    alert ("Ты потопил мой линкор!");            
                }
            } else {

                alert("Промах");
            }
        }            
    }

    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "wа это значит, что ваша точность стрельбы была  " + (3/guesses);

    alert(stats);