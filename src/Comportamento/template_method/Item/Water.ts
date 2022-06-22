import ImpostoItem from "./ImpostoItem";
import Item from "./Item";

export default class Water extends Item{

    constructor(readonly descricao: string, readonly preco : number){
        super("Water", descricao, preco);
    }

}