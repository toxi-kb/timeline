import * as b from 'b_';

import { Component } from '../../core/component';
import { VirtualMarkup } from '../../core/virtual-dom/interfaces';

import { DateUtils } from '../../utils/date';
import { EventTimeLineService } from '../../services/event-timeline';
import { ModalService } from '../../services/modal';
import { TimeLineTransaction, Currency } from '../../models';

import { Button } from '../common/button/button';
import { Modal } from '../common/modal/modal';

import './transaction-info-modal.scss';

export class TransactionInfoModal extends Component<TransactionInfoProps> {

    constructor(props: TransactionInfoProps) {
        super('transaction-info-modal', props);
    }

    protected render(): VirtualMarkup {
        return this.renderComponent('modal', Modal, { children: this.renderModalContent() });
    }

    private renderModalContent(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderAmount(),
                this.renderDate(),
                this.renderDescription(),
                this.renderRemoveButton()
            ]
        };
    }

    private renderAmount(): VirtualMarkup {
        const { transaction } = this.props;
        const sign = transaction.transactionType === 'income' ? '+' : '-';
        const currencyAbbr = this.getCurrencyAbbreviation();

        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'amount') },
            children: [ sign, transaction.amount.toString(), currencyAbbr ]
        };
    }

    private renderDate(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'date') },
            children: [ DateUtils.format(this.props.transaction.date) ]
        };
    }

    private renderDescription(): VirtualMarkup {
        return {
            tagName: 'div',
            children: [ this.props.transaction.description ]
        };
    }

    private renderRemoveButton(): VirtualMarkup {
        const { eventTimeLineService } = this.props;
        
        return this.renderComponent('remove-button', Button, {
            classMix: b(this.className, 'remove-button'),
            color: 'red',
            onClick: () => {
                eventTimeLineService.removeTransaction(this.props.transaction.id);
                ModalService.hide();
            },
            text: 'Удалить'
        });
    }

    private getCurrencyAbbreviation(): Currency['abbreviation'] {
        const { currencies, transaction } = this.props
        const currency = currencies.find((x) => x.id === transaction.currencyId);

        return currency.abbreviation;
    }

}

interface TransactionInfoProps {
    currencies: Currency[];
    eventTimeLineService: EventTimeLineService;
    transaction: TimeLineTransaction;
}