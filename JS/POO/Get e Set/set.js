class TransportVehicle{
    constructor(name){
        this.name = name;
        this.currentVelocity = 0;
    }

    set velocity(newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120;
        }else{
            this.currentVelocity = newVelocity;
        }
    }
}


let truck = new TransportVehicle("Caminhao");

truck.velocity = 130;

console.log(truck);