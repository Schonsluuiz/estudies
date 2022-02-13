class Empresa {
    constructor(nome, projetosAtivosMensalmente){
        this.nome = nome;
        this.projetosAtivosMensalmente = projetosAtivosMensalmente;
    }

    get projetosAtivosSemanalmente(){
        return this.projetosAtivosMensalmente / 4;
    }
}

let empresaDoSchons = new Empresa("DevSchons", 8);

console.log(empresaDoSchons.projetosAtivosSemanalmente);

empresaDoSchons.projetosAtivosMensalmente = 12;
console.log(empresaDoSchons.projetosAtivosSemanalmente);