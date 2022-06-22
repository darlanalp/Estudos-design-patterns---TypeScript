import Participante from "./Participante";

export default class Canal{

    participantes : Participante[];

    constructor(){
        this.participantes = [];
    }

    registrar( participante : Participante){
        this.participantes.push(participante);
    }

    enviarMensagem( de: Participante, mensagem: string){
        for(const para of this.participantes)
           if(para.nome != de.nome){
               para.mensagem(de, mensagem);
           }
    }
}