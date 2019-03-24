import { VirtualNode } from '../core/virtual-dom/interfaces';

export class ModalService {

    private static currentModal: VirtualNode;

    public static show(modal: VirtualNode): void {
        this.currentModal = modal;

        document.body.appendChild(this.currentModal);
    }

    public static hide(): void {
        if (this.currentModal != null) {
            this.currentModal.remove();
        }
    }

}
