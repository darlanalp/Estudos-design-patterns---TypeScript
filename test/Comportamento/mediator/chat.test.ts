

import Canal from "../../../src/Comportamento/mediator/canal";
import Participante from "../../../src/Comportamento/mediator/Participante";

test("Deve criar um chat entre os participantes",()=>{

    const participanteA = new Participante("A");
    const participanteB = new Participante("B");
    const participanteC = new Participante("C");

    participanteB.mensagem(participanteA, "Olá");
    participanteC.mensagem(participanteA, "Olá");

    expect(participanteB.mensagens[0]).toBe("A: Olá");
    expect(participanteC.mensagens[0]).toBe("A: Olá");

});

//utilizando o mediator onde ha uma comunicação de um para muitos
test("Deve criar um chat em um canal",()=>{

    const participanteA = new Participante("A");
    const participanteB = new Participante("B");
    const participanteC = new Participante("C");

    const canal = new Canal();
    canal.registrar(participanteA);
    canal.registrar(participanteB);
    canal.registrar(participanteC);

    canal.enviarMensagem(participanteA, "Olá");

    expect(participanteB.mensagens[0]).toBe("A: Olá");
    expect(participanteC.mensagens[0]).toBe("A: Olá");

});