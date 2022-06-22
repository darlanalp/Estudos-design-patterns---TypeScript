import DarkButton from "../DarkButton";
import DarkLabel from "../DarkLabel";
import IButton from "../Interface/IButton";
import ILabel from "../Interface/ILabel";
import IWidgetFactory from "../Interface/IWidgetFactory";

export default class DarkWidgetFactory implements IWidgetFactory{
 
    createLabel() : ILabel {
        return new DarkLabel();
    }

    createButton() : IButton{
         return new DarkButton();
    }
}