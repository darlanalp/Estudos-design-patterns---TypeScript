export default class Conta{

    private _saldo = 0;
    constructor( readonly number:string){
    }

    creditar(credito : number){
      this._saldo += credito;
    }

    debitar(debito : number){
        this._saldo -= debito;
    }
      
    get Saldo(){
        return this._saldo;
    }
}