import Item from "./Item";

export default abstract class ImpostoItem extends Item{
    
    abstract calculaImpostos(): number;
}