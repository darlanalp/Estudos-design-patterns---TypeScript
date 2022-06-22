import ICalculaTicket from "./ICalculaTicket";
import Periodo from "./periodo";

export default class CalculaTikectPraia implements ICalculaTicket{
 
    calcula(periodo : Periodo){
       const precoPorHora = 10
       return periodo.diferencaEmHoras() * precoPorHora;       
    }
}