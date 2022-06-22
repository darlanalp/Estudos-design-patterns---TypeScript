import ImpostoItem from "./ImpostoItem";

export default class Whisk extends ImpostoItem{

    constructor(readonly descricao: string, readonly preco : number){
        super("Whisk", descricao, preco);
    }

    calculaImpostos(): number {
        return this.preco * 0.2; 
    }
}