import IObserver from "./IObserver";

export default class Observable{

    observers : IObserver[];
    constructor(){

        this.observers = [];
    }
    register(observer : IObserver){

        this.observers.push(observer);
    }

    notifyAll(name : string, value: string){
        for(const observer of this.observers)
            observer.update(name, value);
    }

}