import IButton from "../Interface/IButton";
import ILabel from "../Interface/ILabel";
import IWidgetFactory from "../Interface/IWidgetFactory";
import LigthButton from "../LigthButton";
import LigthLabel from "../LigthLabel";

export default class LigthWidgetFactory implements IWidgetFactory{
 
    createLabel() : ILabel {
        return new LigthLabel();
    }

    createButton() : IButton{
         return new LigthButton();
    }
}