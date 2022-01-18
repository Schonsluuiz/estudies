/*Escreva uma função que recebe uma string e retorna cada
palavra da string invertida e em letras minúsculas, porém
com as palavras na mesma ordem.

Assuma que a string não possui nenhuma letra com acento,
número ou caractere especial, apenas letras e espaços.
*/

test1 = "This is an apple";
test2 = "May the force be with you";

function translate(str) {
  
  let char = str.split("").reverse().join('');
  
  let ordChar = char.split(' ').reverse().join(' ') 

  return ordChar.toLowerCase()
  
}

console.log(translate(test1));
console.log(translate(test2));
