import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import { FormElement } from '../form-element/form-element';

import './input.scss';

export class Input extends Component<InputProps> {

    constructor(props: InputProps) {
        super('input', props);
    }

    protected render(): VirtualMarkup {
        const { error, label } = this.props;
        const formElementProps = { error, label, control: this.renderInput() };
        
        return this.renderComponent('container', FormElement, formElementProps);
    }

    private renderInput(): VirtualMarkup {
        const { value } = this.props;

        return {
            tagName: 'input',
            attrs: { class: this.className, value: value || '' },
            listeners: { input: this.onValueChange }
        };
    }

    private onValueChange = (e: Event): void => {
        const { onInput } = this.props;

        if (onInput != null) {
            onInput((e.target as HTMLInputElement).value);
        }
    }

}

interface InputProps {
    error?: string;
    label: string;
    onInput?: (value: string) => void;
    value?: string;
}