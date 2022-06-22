export default class Periodo{

    constructor(readonly inicio:Date , readonly fim:Date ){

    }

    diferencaEmHoras(){
       return  (this.fim.getTime() - this.inicio.getTime()) / (1000*60*60);
    }
}