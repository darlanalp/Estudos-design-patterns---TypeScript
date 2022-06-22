import ICalculaTicket from "./ICalculaTicket";
import Periodo from "./periodo";

export default class CalculaTikectShopping implements ICalculaTicket{
 
    calcula(periodo : Periodo){
        
       let preco = 10;
       const precoPorHora = 10
       const horasExcedente = periodo.diferencaEmHoras() - 3;
       if(horasExcedente > 0){
           preco += horasExcedente * precoPorHora;
       }

       return preco;       
    }
}