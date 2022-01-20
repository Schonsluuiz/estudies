class Car {
    constructor (name, year){
        this.name = name;
        this.year = year;
        this.goMechanic = false;
        this.fixed = false;
    }
    mechanicBudget(){
        this.goMechanic = true;
        this.fixed = true;
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
        chosenOption = prompt("O que deseja fazer?" + 
                                "\n1 - Arrumar carro" +
                                "\n2 - Listar carros" +
                                "\n3 - Sair do programa")
    }
    return chosenOption;
}

function createCar(){
    let name = prompt("Informe o nome do carro:");
    let year = prompt("Informe o ano do carro:");
    let car = new Car(name, year);
    return car;
}

function printCars (cars){
    let carsList = ""
    cars.forEach((car, index) =>{
        carsList += (index + 1) + " . " + car.name + " - " + car.year + "\n"
    })
    alert(carsList);
}

let carrosOficina = [];

let chosenOption

while(chosenOption != "3"){
    chosenOption = showMenu();
    switch (chosenOption){
        case "1" : 
            let addCar = createCar();
            addCar.mechanicBudget();
            carrosOficina.push(addCar);
            break;
        case "2" :
             printCars(carrosOficina);
             break;

    }
}