import CalculaTikectAreporto from "../../../src/Comportamento/Strategy/CalculaTikectAreporto";
import CalculaTikectPraia from "../../../src/Comportamento/Strategy/CalculaTikectPraia";
import CalculaTikectShopping from "../../../src/Comportamento/Strategy/CalculaTikectShopping";
import Estacionamento from "../../../src/Comportamento/Strategy/Estacionamento";

test("Deve criar um estacionamento", function(){

    const capacidade = 500;
    const estacionamento = new Estacionamento(capacidade, new CalculaTikectPraia());
    expect(estacionamento.getVagasDisponiveis()).toBe(500);
    
});

test("Deve entrar um carro", function(){

    const capacidade = 500;
    const estacionamento = new Estacionamento(capacidade, new CalculaTikectPraia());
    estacionamento.estacionar("AAA-8888", new Date("2021-03-01T10:02:00"));
    expect(estacionamento.getVagasDisponiveis()).toBe(499);
    
});


test("Deve sair um carro", function(){

    const capacidade = 500;
    const estacionamento = new Estacionamento(capacidade, new CalculaTikectPraia());
    estacionamento.estacionar("AAA-8888", new Date("2021-03-01T10:02:00"));
    estacionamento.finalizar("AAA-8888");
    expect(estacionamento.getVagasDisponiveis()).toBe(500);
    
});

test("Deve calcular o valor total a pagar do estacionamento na praia, 10 reais por hora", function(){

    const capacidade = 500;
    const estacionamento = new Estacionamento(capacidade, new CalculaTikectPraia());
    estacionamento.estacionar("AAA-8888", new Date("2021-03-01T10:00:00"));

    const ticket  = estacionamento.calcularTicket("AAA-8888",  new Date("2021-03-01T12:00:00"));
    estacionamento.finalizar("AAA-8888");
    expect(estacionamento.getVagasDisponiveis()).toBe(500);
    expect(ticket.preco).toBe(20);
    
});

test("Deve calcular o valor total a pagar do estacionamento no shopping, as primeiras 3h custam 10 reais e as horas seguintes custam 10 reais", function(){

    const capacidade = 500;
    const estacionamento = new Estacionamento(capacidade, new CalculaTikectShopping());
    estacionamento.estacionar("AAA-8888", new Date("2021-03-01T10:00:00"));

    const ticket  = estacionamento.calcularTicket("AAA-8888",  new Date("2021-03-01T15:00:00"));
    estacionamento.finalizar("AAA-8888");
    expect(estacionamento.getVagasDisponiveis()).toBe(500);
    expect(ticket.preco).toBe(30); //3h=10 +2h adicionais 20 reais
    
});

test("Deve calcular o valor total a pagar do estacionamento no aeroporto a taxa única é 30 reais", function(){

    const capacidade = 500;
    const estacionamento = new Estacionamento(capacidade, new CalculaTikectAreporto());
    estacionamento.estacionar("AAA-8888", new Date("2021-03-01T10:00:00"));

    const ticket  = estacionamento.calcularTicket("AAA-8888",  new Date("2021-03-01T15:00:00"));
    estacionamento.finalizar("AAA-8888");
    expect(estacionamento.getVagasDisponiveis()).toBe(500);
    expect(ticket.preco).toBe(30); //3h=10 +2h adicionais 20 reais
    
});