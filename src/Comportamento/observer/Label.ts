import IObserver from "./IObserver";

export default class Label implements IObserver{

    private value : string;
    constructor(readonly  expression : string){
        this.value = "";
    }

    setValue(name: string, value: string){
        this.value = this.expression.replace(`{{ ${name} }}`, value);     
    }

    getValue(){
        return this.value;
    }

    update(name: string, value: string){
        this.setValue(name, value);
    }
}