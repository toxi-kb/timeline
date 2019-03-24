import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import { FormElement } from '../form-element/form-element';

import './select.scss';

export class Select extends Component<SelectProps> {

    constructor(props: SelectProps) {
        super('select', props);
    }

    protected render(): VirtualMarkup {
        const { label } = this.props;
        
        return this.renderComponent('container', FormElement, { label, control: this.renderSelect() });
    }

    private renderSelect(): VirtualMarkup {
        const { choices } = this.props;

        return {
            tagName: 'select',
            attrs: { class: this.className },
            listeners: { change: this.onValueChange },
            children: choices.map(this.renderOption)
        };
    }

    private renderOption(choice: SelectChoice): VirtualMarkup {
        return {
            tagName: 'option',
            attrs: { value: choice.value },
            children: [choice.text]
        };
    }

    private onValueChange = (e: Event): void => {
        const { onSelect } = this.props;

        if (onSelect != null) {
            onSelect((e.target as HTMLSelectElement).value);
        }
    }

}

interface SelectChoice {
    value: string;
    text: string;
}

interface SelectProps {
    choices: SelectChoice[];
    label: string;
    onSelect?: (value: string) => void;
}
