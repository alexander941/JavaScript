var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

function prequal(car_fiat){
    if(car_fiat.mileage > 10000){
        return false;
    } else if(car_fiat > 1960){
        return false;
    }
    return true;
}

var worthALook = prequal(fiat);
if(worthALook){
    console.log("You gotta check out this " + fiat.make + " " + fiat.model);
} else {
    console.log("You should really pass on the "+ fiat.make + " " + fiat.model);
}