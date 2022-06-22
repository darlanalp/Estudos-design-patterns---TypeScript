import ImpostoItem from "./Item/ImpostoItem";
import Item from "./Item/Item";

export default class NotaFiscal{

    Items : Item[];

    constructor(){
        this.Items = [];
    }

    addItem(item : Item){
        this.Items.push(item);
    }

    calcularImpostos(){
      return this.Items.reduce((total, item) =>{

        if(item instanceof ImpostoItem)
           total += item.calculaImpostos();
           
         return total;

      },0);
    }
    
}