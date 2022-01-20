class Car{
    static get decelerationRate(){
        return 0.15;
    }

    constructor(name){
        this.name = name;
        this.currentVelocity = 0;
    }

    speedUp(acceleration){
        this.currentVelocity += (acceleration *(1 - Car.decelerationRate));
    }
}

let ferrari = new Car ("Ferrari");

ferrari.speedUp(240);

console.log(ferrari);