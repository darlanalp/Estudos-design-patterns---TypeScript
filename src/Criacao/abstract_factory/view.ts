import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";
import IButton from "./Interface/IButton";
import ILabel from "./Interface/ILabel";
import LigthButton from "./LigthButton";
import Button from "./LigthButton";
import LigthLabel from "./LigthLabel";
import Label from "./LigthLabel";
import IWidgetFactory from "./Interface/IWidgetFactory";

export default class View {
 
    label : ILabel;
    button : IButton;

    constructor( widgetFactory : IWidgetFactory ){
        this.label= widgetFactory.createLabel();
        this.button= widgetFactory.createButton();

    }
}