import IButton from "./IButton"
import ILabel from "./ILabel";

export default interface IWidgetFactory{

    createLabel() : ILabel;
    createButton() : IButton;
}