class Car {
    constructor(name, brand, year, price, color, maxRecommendVelocity){
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.price = price;
        this.color = color;
        this.maxRecommendVelocity = maxRecommendVelocity;
        this.currentVelocity = 0;
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration;
        if (currentVelocity > maxRecommendVelocity){
            alert("Velocidade maxima recomendada ultrapassada!\nConsidere reduzir")
        }
    }
}

class TransportCar extends Car{
    speedUp(){
        alert("Carros de transporte aceleram no maximo 10km/h por vez")
        this.currentVelocity += 10;
    }
}

let onibus = new TransportCar("Onibus Escolar", "Mercedez", 1997, 69000, "amarelo", 60);

onibus.speedUp();

console.log(onibus)