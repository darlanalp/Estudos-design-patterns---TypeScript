//Cria um contrato que diz que todo observador tem que ter um método de observação
export default interface IObserver{
    update(name: string, value: string);

}