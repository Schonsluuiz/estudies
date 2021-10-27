//splice
//significa costurar
//substitui o array original

let cars = ['Gol', 'Golf', 'Polo', 'Jetta'];

console.log(cars);

let removedCars = cars.splice(1, 2, 'Toro', 'Ranger', 'Triton'); //no exemplo: remove 2 elementos a partir do elemento 1 e add os elementos solicitados

//let removedCars = cars.splice(3, 3) -> muito comum quando quer remover um elemento em especifico

console.log(cars);

console.log(removedCars);

//

//slice
//signifca dividir
//extrai uma parte do array sem alterar o array original

let playersName = ['Luiz', 'Joao', 'Carla', 'Bruna', 'Ze', 'Maria'];

console.log(playersName);

let femalePlayers = playersName.slice(2, 4);

console.log(femalePlayers);