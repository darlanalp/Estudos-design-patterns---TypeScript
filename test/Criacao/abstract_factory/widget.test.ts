import DarkWidgetFactory from "../../../src/Criacao/abstract_factory/factory/DarkWidgetFactory";
import LigthWidgetFactory from "../../../src/Criacao/abstract_factory/factory/LigthWidgetFactory";
import View from "../../../src/Criacao/abstract_factory/view";

test("DEve criar uma view com tema claro", function(){
    const view = new View( new LigthWidgetFactory());
    expect(view.label.color).toBe("black");
    expect(view.button.backgroudColor).toBe("blue");
    expect(view.button.color).toBe("white");

});

test("DEve criar uma view com tema escuro", function(){
    const view = new View(new DarkWidgetFactory());
    expect(view.label.color).toBe("white");
    expect(view.button.backgroudColor).toBe("black");
    expect(view.button.color).toBe("white");

});