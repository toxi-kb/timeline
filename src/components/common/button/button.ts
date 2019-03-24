import * as b from 'b_';

import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import './button.scss';

export class Button extends Component<ButtonProps> {

    constructor(props: ButtonProps) {
        super('button', props);
    }

    protected render(): VirtualMarkup {
        const { classMix, color, onClick, text } = this.props;
        const className = `${ b(this.className, { color }) } ${ classMix || '' }`;

        return {
            tagName: 'button',
            attrs: { class: className, type: 'button' },
            listeners: { click: () => onClick() },
            children: [text]
        };
    }

}

export interface ButtonProps {
    classMix?: string;
    color: 'blue' | 'green' | 'red';
    onClick: () => void;
    text: string;
}