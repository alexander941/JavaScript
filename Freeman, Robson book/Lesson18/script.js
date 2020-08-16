function GETMOSTCOSTEFFECTIVESOLUTION(scores, COSTS, HIGHSCORE){
    var COSTS = 100;
    var index;

    for(var i = 0;i <scores.lenght;i++){

        if(scores[i] == HIGHSCORE){
            if(COSTS > COSTS[i]){
                index = 1;
                COSTS = COSTS[i];
            }
        }
    }
    return index;
}

var mostCostEffective = GETMOSTCOSTEFFECTIVESOLUTION(scores,COSTS,HIGHSCORE);
console.log("Bubble Solution #" + mostCostEffective +  " is the most cost effective");