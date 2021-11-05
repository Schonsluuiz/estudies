class Car{
    constructor(name, brand, maxRecommendVelocity, price){
        this.name = name;
        this.brand = brand;
        this.maxRecommendVelocity = maxRecommendVelocity;
        this.price = price;
        this.currentVelocity = 0;
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration;
        if(this.currentVelocity > this.maxRecommendVelocity){
            alert("Sua velocidade esta mais alta do que o recomendado!\nConsidere diminuir a velocidade do carro")
        }
    }

}

class TrailCar extends Car {
    stop(){
        this.currentVelocity = 0;
        alert("Parando o seu carro de trilha")
    }
}

class SpeedCar extends Car {
    stop(){
        this.currentVelocity = 0;
        alert("Parando o seu carro de velocidade")
    }
}

class TransportCar extends Car{
    constructor(name, brand, maxRecommendVelocity, price, maxCrewMember){
        super(name, brand, maxRecommendVelocity, price)
        this.maxCrewMember = maxCrewMember;
    }
    speedUp(acceleration){
        acceleration /=2
        alert("Carros de transporte aceleram metade da velocidade por vez\nAcelerando " + acceleration + "km/h")
        super.speedUp(acceleration)
    }
}


let suzukiSamurai = new TrailCar ("Samurai", "Suzuki", 180, 65000);
let porscheTaycan = new SpeedCar ("Taycan", "Porsche", 310, 1060000);
let onibus = new TransportCar("Onibus Escolar", "Mercedez", 60, 75000, 30);

console.log(onibus);

onibus.speedUp(140);