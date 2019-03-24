import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import { FormElement } from '../form-element/form-element';

import './textarea.scss';

export class TextArea extends Component<TextAreaProps> {

    constructor(props: TextAreaProps) {
        super('textarea', props);
    }

    protected render(): VirtualMarkup {
        const { error, label } = this.props;
        const formElementProps = { error, label, control: this.renderTextArea() };
        
        return this.renderComponent('container', FormElement, formElementProps);
    }

    private renderTextArea(): VirtualMarkup {
        const { value } = this.props;

        return {
            tagName: 'textarea',
            attrs: { class: this.className, rows: '5', value },
            listeners: { input: this.onValueChange }
        };
    }

    private onValueChange = (e: Event): void => {
        const { onInput } = this.props;

        if (onInput != null) {
            onInput((e.target as HTMLTextAreaElement).value);
        }
    }

}

interface TextAreaProps {
    error?: string;
    label: string;
    onInput?: (value: string) => void;
    value: string;
}
