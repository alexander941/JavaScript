var passengers = [{ name: "Jane Doloop", paid: true, ticket: "coach" },
                    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                    { name: "Sue Property", paid: false, ticket: "firstclass" },
                    { name: "John Funcall", paid: true, ticket: "premium" } ];

function createDrinkOrder(passenger){
    var orderFuction;
    
    if(passenger.ticket === "firstclass"){
        orderFuction = function(){
            alert("Would you like wine, cola or water?");
        };
    } else if(passenger.ticket === "premium") {
        orderFuction = function(){
            alert("Would you like wine, cola or water?");
        };
    } else {
        orderFuction = function(){
            alert("Your choice is cola or water.");
        };
    }
    return orderFuction;
}

function createDinneerOder(passenger){
    var orderFuction;
    if(passenger.ticket === "firstclass"){
        orderFuction = function(){
            alert("Would you like chicken or pasta?");
        };
    } else if(passenger.ticket === "premium"){
        orderFuction = function(){
            alert("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFuction = function (){
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFuction;
}
function serveCustomer(passenger){
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFucntion = createDinneerOder(passenger);// Функция создания обеда для пассажира

    getDinnerOrderFucntion();

    //Предложить Обед
    getDinnerOrderFucntion();//Вызов функции где нужен обед для пассажира
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    //Включить кино 
    getDrinkOrderFunction();
    //Забрать мусор
}

function servePasengers(passengers){
    for(var i = 0;i <passengers.length;i++){
        serveCustomer(passengers[i]);
    }
}

servePasengers(passengers);