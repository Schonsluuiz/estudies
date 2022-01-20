class Industria {
    constructor(produto, processamentoMensalToneladas){
        this.produto = produto;
        this.processamentoMensalToneladas = processamentoMensalToneladas;
    }

    static processamentoEmHorasToneladas(processamentoMensalToneladas, horas){
        return processamentoMensalToneladas / 720 * horas
    }
}

let milho = Industria.processamentoEmHorasToneladas(50, 12);

console.log(milho);

//let soja = new Industria ("Soja", 120);
//soja.processamentoEmHorasToneladas(soja.processamentoMensalToneladas, 10);
// retona erro pois nao eh uma funcao

let soja = new Industria ("Soja", 120);

let sojaMensal = Industria.processamentoEmHorasToneladas(soja.processamentoMensalToneladas,10);
console.log(sojaMensal);