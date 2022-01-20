let nomesCarros = ['Gol', 'Golf', 'Polo'];
console.log(nomesCarros);

nomesCarros.push('Fusion'); //add na ultima posicao
console.log(nomesCarros);

nomesCarros.pop(); //remove ultimo elemento

nomesCarros.shift(); //remove o primeiro elemento

nomesCarros.unshift('Jetta'); //add na primeira posicao

nomesCarros.length; //tamaho do array

let poloPosition = nomesCarros.indexOf('Polo'); //indica qual posicao esta o elemento