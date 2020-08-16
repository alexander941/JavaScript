function makePhrases(){
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + "" + words2[rand2] + "" + words3[rand3];
    alert(phrase);
}


function makePhras(){
    var words_1 = [25, 30, 45, 95,15];
    var words_2 = [5, 9, 7, 2, 14];
    var words_3 = [1, 8, 12, 16, 19];

    var rand_1 = Math.floor(Math.random() * words1.length);
    var rand_2 = Math.floor(Math.random() * words2.length);
    var rand_3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + "" + words2[rand2] + "" + words3[rand3];
    alert(phrase);
}

