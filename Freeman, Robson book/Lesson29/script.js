function addSongs(){
    var song_1 = document.getElementById("song_1");
    var song_2 = document.getElementById("song_2");
    var song_3 = document.getElementById("song_3");

    song_1.innerHTML =  "Blue Suede Strings, by Elvis Pagely";
    song_2.innerHTML =  "Great Objects on Fire, by Jerry JSON Lewis";
    song_3.innerHTML =  "I Code the Line, by Johnny JavaScript";    
}

window.onload = addSongs;
