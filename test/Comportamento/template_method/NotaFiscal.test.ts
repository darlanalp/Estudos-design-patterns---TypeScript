import { isTemplateExpression } from "typescript";
import Beer from "../../../src/Comportamento/template_method/Item/Beer";
import Item from "../../../src/Comportamento/template_method/Item/Item";
import Whisk from "../../../src/Comportamento/template_method/Item/Whisk";
import NotaFiscal from "../../../src/Comportamento/template_method/NotaFiscal";

test("Deve criar uma nota fiscal e calcular os impostos", function(){

    const notaFiscal = new NotaFiscal(); 
    notaFiscal.addItem(new Beer("Brama",10)); //10% 1
    notaFiscal.addItem(new Whisk("Jack Daniels",100));//20% 20
    //notaFiscal.addItem(new Item("Water","VOSS",5));//0% 0
    const impostos = notaFiscal.calcularImpostos();
    expect(impostos).toBe(21);
});