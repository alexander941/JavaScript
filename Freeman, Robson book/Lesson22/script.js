var chery = {
    make: "Chevy",
    model:  "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage:1021
}

function prequal(car_chery){
    if(car_chery.mileage > 10000){
        return false;
    }else if(car_chery > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(chery);
if(worthALook){
    console.log("You gotta check out this " + chery.make + " " + chery.mode);
}else{
    console.log("You should really pass on the "+ chery.make + " " + chery.model);
}