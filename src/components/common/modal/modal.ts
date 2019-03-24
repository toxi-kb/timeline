import * as b from 'b_';

import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import { ModalService } from '../../../services/modal';

import './modal.scss';

export class Modal extends Component<ModalProps> {

    constructor(props: ModalProps) {
        super('modal', props);
    }

    protected render(): VirtualMarkup {
        const { children } = this.props;

        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [{
                tagName: 'div',
                attrs: { class: b(this.className, 'content') },
                children: [this.renderCloseButton(), children]
            }]
        }
    }

    private renderCloseButton(): VirtualMarkup {
        return {
            tagName: 'button',
            attrs: { class: b(this.className, 'content-close-button') },
            listeners: { click: () => ModalService.hide() },
            children: ['×']
        };
    }

}

interface ModalProps {
    children: VirtualMarkup
}
