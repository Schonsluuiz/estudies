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


let suzukiSamurai = new TrailCar ("Samurai", "Suzuki", 180, 65000);
let porscheTaycan = new SpeedCar ("Taycan", "Porsche", 310, 1060000);

suzukiSamurai.speedUp(200);
porscheTaycan.speedUp(280);

suzukiSamurai.stop();
porscheTaycan.stop();
