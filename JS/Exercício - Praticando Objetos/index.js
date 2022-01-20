let car = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerCar() {
    car.name = prompt("Informe o nome da carro")
    car.color = prompt("Informe a cor do carro")
    car.maxVelocity = Number(prompt("Informe a velocidade mãxima do carro (km/h)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/h)"))
    car.speedUp(acceleration)
    if(car.velocity > car.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade do carro: " + car.velocity + "km/h" + 
                "\nVelocidade máxima do carro: " + car.maxVelocity + "km/h")
    }
}

function stop() {
    alert(  "Nome: " + car.name + "\nTipo: " + car.color + "\nVelocidade do carro: " 
            + car.velocity + "\nMáxima do carro: " + car.maxVelocity)
    car.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opação inválida")
        }
    } while(chosenOption != "2")
}

registerCar()
showMenu()