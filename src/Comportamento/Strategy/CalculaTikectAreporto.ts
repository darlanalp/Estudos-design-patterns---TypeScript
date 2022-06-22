import ICalculaTicket from "./ICalculaTicket";
import Periodo from "./periodo";

export default class CalculaTikectAreporto implements ICalculaTicket{
 
    calcula(periodo : Periodo){
       const preco = 30;
       return preco;       
    }
}