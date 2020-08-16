var chevy = {
    make: "Chevy",
    model: "Bel Air"
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi"
};

var fiat_1 = {
    make: "Fiat",
    model: "500"
};

var fiat_2 = {
    make: "Fiat",
    model: "500"
};

var lot = [chevy, taxi, fiat_1, fiat_2];

function findCarInLot(car){
    for(var i = 0;i < lot.length;i++){
        if(car === lot[i]){
            return i;
        }
    }
    return - 1;
}

var loc_1 = findCarInLot(fiat_2);
var loc_2 = findCarInLot(taxi);
var loc_3 = findCarInLot(chevy);
var loc_4 = findCarInLot(fiat_1)