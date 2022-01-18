/*Escreva uma função que recebe uma string e retorna a
maior letra segundo a ordem alfabética em minúsculo.
Assuma que a string não possui nenhuma letra com
acento, número ou caractere especial, apenas letras
e espaços.*/

test1 = "123Furacão"
test2 = "May the force be with you"

function translate(str) {
  
  string = str.replace(/[^a-zA-Z ]/g, "");
  let char = string.split('')
  let charOrd = char.sort()
  let last = charOrd[charOrd.length - 1]
  return last.toLowerCase()

}

console.log(translate(test1))
console.log(translate(test2));

