import Command from "./ICommand";
import Conta from "./Conta";

export default class CreditoCommand implements Command{

    constructor (readonly  conta : Conta, readonly valor : number){

    }

    execute(): void {

      this.conta.creditar(this.valor);    
    }
}