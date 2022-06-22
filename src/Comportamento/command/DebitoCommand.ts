import Command from "./ICommand";
import Conta from "./Conta";

export default class DebitoCommand implements Command{

    constructor (readonly  conta : Conta, readonly valor : number){

    }

    execute(): void {
        
      this.conta.debitar(this.valor);    
    }
}