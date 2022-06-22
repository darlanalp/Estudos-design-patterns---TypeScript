import Conta from "../../../src/Comportamento/command/Conta";
import CreditoCommand from "../../../src/Comportamento/command/CreditoCommand";
import DebitoCommand from "../../../src/Comportamento/command/DebitoCommand";

test("Deve criar uma conta", function(){

    const conta = new Conta("00897797");
    expect(conta.Saldo).toBe(0);

});

test("Deve creditar uma conta", function(){

    const conta = new Conta("00897797");
    conta.creditar(100);
    expect(conta.Saldo).toBe(100);

});

test("Deve debitar uma conta", function(){

    const conta = new Conta("00897797");
    conta.creditar(100);
    conta.debitar(50);
    expect(conta.Saldo).toBe(50);

});


/////////////////////////////////////////////////////////
//>>>>>>>>>>>>>>>> Utilizando o COMMAND
/////////////////////////////////////////////////////////
test("Deve creditar uma conta", function(){

    const conta = new Conta("00897797");

    //Esta desacoplando quem chama de quem é chamado
    const creditoCommand = new CreditoCommand(conta, 100);
    creditoCommand.execute();
    expect(conta.Saldo).toBe(100);

});

test("Deve debitar uma conta", function(){

    const conta = new Conta("00897797");

    //Esta desacoplando quem chama de quem é chamado
    const creditoCommand = new CreditoCommand(conta, 100);
    creditoCommand.execute();
    

    //Esta desacoplando quem chama de quem é chamado
    const debitoCommand = new DebitoCommand(conta, 50);
    debitoCommand.execute();

    expect(conta.Saldo).toBe(50);

});


