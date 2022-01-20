let olderPersonName = prompt('Qual e o nome da pessoa mais velha?')
let olderPersonAge = prompt('Qual e a idade da pessoa mais velha?')

let yougerPersonName = prompt('Qual e o nome da pessoa mais nova?')
let yougerPersonAge = prompt('Qual e a idade da pessoa mais nova?')

let ageDifference = olderPersonAge - yougerPersonAge

alert(
    'Pessoa mais velha: ' + olderPersonName + '\nIdade: ' + olderPersonAge +
    '\n\nPessoa mais nova: ' + yougerPersonName + '\nIdade: ' + yougerPersonAge +
    '\n\nDiferenca de idade: ' + ageDifference
)