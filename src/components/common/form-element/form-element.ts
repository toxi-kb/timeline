import * as b from 'b_';

import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import './form-element.scss';

export class FormElement extends Component<FormElementProps> {

    constructor(props: FormElementProps) {
        super('form-element', props);
    }

    protected render(): VirtualMarkup {
        const { control } = this.props;

        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderLabel(),
                control,
                this.renderError()
            ]
        };
    }

    private renderLabel(): VirtualMarkup {
        const { label } = this.props;
        
        return {
            tagName: 'label',
            attrs: { class: b(this.className, 'label') },
            children: [ label ]
        };
    }

    private renderError(): VirtualMarkup {
        const { error } = this.props;

        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'error') },
            children: [ error || '' ]
        };
    }

}

interface FormElementProps {
    control: VirtualMarkup;
    error?: string;
    label: string;
}
