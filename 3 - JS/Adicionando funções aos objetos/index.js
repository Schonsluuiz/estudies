let carro = {
    nome: "Gol",
    cor: "Branco",
    maxPassageiros: 5,
    
    ligar: function(){
        alert("Preparando para ligar")
        alert("Carro ligado")
    }
}

carro.velocidade = 0,

carro.acelerar = function(aceleracao){
    this.velocidade += aceleracao
}

console.log(carro)

carro.acelerar(50)

console.log(carro)