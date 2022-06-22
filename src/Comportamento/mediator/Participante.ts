export default class Participante{

    mensagens : String[];

    constructor(readonly nome: string){
       this.mensagens = [];
    }

    mensagem( participante : Participante, mensagen : string){
        this.mensagens.push(`${participante.nome}: ${mensagen}`)
    }
}