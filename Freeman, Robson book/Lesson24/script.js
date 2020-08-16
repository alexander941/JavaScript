var honda =  {
    make: "Honda",
    model: "Accord7",
    year: 2007,
    passengers: 4,
    convertible: false,
    mileage: 95000,
    started: false,
    fuel: 0,
    start: function(){
        this.started = true;
        //Проверка топлива
        if(this.fuel > 0){
            alert(this.make + " " +this.model + "Поехали");
            this.fuel = this.fuel - 1;
        } else {
            alert("К сожалению топливо закончилось");
            this.stop();
        }
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
        if(this.started){
            alert("Двигатель запущен");
        } else {
            alert("Ошибка запустите двигатель");
        }
    },
    addFuel: function(amout){
        this.fuel = this.fuel + amout;
    }

};

honda.start();
honda.drive();//сначала мы решили завестись без бензина
honda.addFuel(2);
honda.start();//теперь запускаем с бензином
honda.drive();
honda.drive();
honda.drive();
honda.stop();