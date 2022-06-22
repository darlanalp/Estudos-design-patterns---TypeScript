import ICalculaTicket from "./ICalculaTicket";
import Periodo from "./periodo";

export default class Estacionamento{

    carrosEstacionados: CarrosEstacionados[];

    constructor (readonly capacidade : number, readonly calculaTiket: ICalculaTicket){
        this.carrosEstacionados= [];
    }

    estacionar( placa : string, dataEstacionou: Date){
      this.carrosEstacionados.push({placa, dataEstacionou});
    }

    obterCarro( placa : string){
        const carroEstacionado = this.carrosEstacionados.find(car => car.placa == placa);
        if(!carroEstacionado) 
           throw new Error("Carro não encontrado!");
        
        return carroEstacionado;
    }

    finalizar(placa : string){

        const carroEstacionado = this.obterCarro(placa);

         //splice => metodo no array que remove
        this.carrosEstacionados.splice( this.carrosEstacionados.indexOf(carroEstacionado),1);
    }

    calcularTicket(placa : string, dataSaida: Date){

        const carroEstacionado = this.obterCarro(placa);
        const periodo = new Periodo(carroEstacionado.dataEstacionou, dataSaida);
        const  preco = this.calculaTiket.calcula(periodo);
        return { preco };
    }

    getVagasDisponiveis(){
      return this.capacidade - this.carrosEstacionados.length;
    }
}

type CarrosEstacionados = { placa: string, dataEstacionou: Date};