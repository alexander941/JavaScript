function quack(num){
    for(var i = 0; i < num;i++){
        console.log("Quack!");
    }
}
var fly = function(num){
    for(i = 0;i < num;i++){
        console.log("Flying!");
    }
}
var superFly = fly;
superFly(2);
var superQuack = quack;
superQuack(4);