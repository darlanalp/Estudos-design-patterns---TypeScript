import ImpostoItem from "./ImpostoItem";

export default class Beer extends ImpostoItem {

    constructor(readonly descricao: string, readonly preco : number){
        super("Beer", descricao, preco);
    }

    calculaImpostos(): number {
        return  this.preco * 0.1;   
    }
}