import { isLabeledStatement } from "typescript";
import InputText from "../../../src/Comportamento/observer/InputText";
import Label from "../../../src/Comportamento/observer/Label";

test("Deve criar um componente normal ", function(){

    const inputTest = new InputText("pais");
    const label = new Label("País: {{ pais }}")
    inputTest.setValue("Brasil");
    label.setValue("pais", "Brasil");
    expect(label.getValue()).toBe("País: Brasil");
});

test("Deve criar um componente reativo ", function(){

    const inputTest = new InputText("pais");

    const labelA = new Label("País: {{ pais }}")
    const labelB = new Label("País: {{ pais }}")
    const labelC = new Label("País: {{ pais }}")

    inputTest.register(labelA);
    inputTest.register(labelB);
    inputTest.register(labelC);

    inputTest.setValue("Brasil");

    
    expect(labelA.getValue()).toBe("País: Brasil");
    expect(labelB.getValue()).toBe("País: Brasil");
    expect(labelC.getValue()).toBe("País: Brasil");
});