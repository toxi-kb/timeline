import * as b from 'b_';

import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import { EventTimeLineService } from '../../../services/event-timeline';
import { ModalService } from '../../../services/modal';
import { TimeLineTransaction, Currency, Bank } from '../../../models';
import { DateUtils } from '../../../utils/date';

import { TransactionInfoModal } from '../../transaction-info-modal/transaction-info-modal';

import './transaction.scss';

export class TransactionLine extends Component<TransactionLineProps> {

    constructor(props: TransactionLineProps) {
        super('event-timeline-transaction', props);
    }
    
    protected render(): VirtualMarkup {
        const { classMix, transaction } = this.props;
        const className = `${ b(this.className, { type: transaction.transactionType }) } ${ classMix }`;

        return {
            tagName: 'div',
            attrs: { class: className },
            listeners: { click: this.onTransactionClick },
            children: [
                this.renderAmount(),
                this.renderDate(),
                this.renderBankName()
            ]
        };
    }

    private renderAmount(): VirtualMarkup {
        const { transaction } = this.props;
        const sign = transaction.transactionType === 'income' ? '+' : '-';
        const currencyAbbr = this.getCurrencyAbbreviation();

        return {
            tagName: 'span',
            attrs: { class: b(this.className, 'amount') },
            children: [ sign, transaction.amount.toString(), currencyAbbr ]
        };
    }

    private renderDate(): VirtualMarkup {
        const { transaction } = this.props;
        const date = DateUtils.format(transaction.date);

        return { tagName: 'span', attrs: { class: b(this.className, 'date') }, children: [ date ] };
    }

    private renderBankName(): VirtualMarkup {
        const { banks, transaction } = this.props;
        const name = banks.find((x) => x.id === transaction.bankId).name;

        return { tagName: 'span', children: [ name ] };
    }

    private onTransactionClick = (): void => {
        const { currencies, eventTimeLineService, transaction } = this.props;

        ModalService.show(
            new TransactionInfoModal({ currencies, eventTimeLineService, transaction }).init());
    }

    private getCurrencyAbbreviation(): Currency['abbreviation'] {
        const { currencies, transaction } = this.props
        const currency = currencies.find((x) => x.id === transaction.currencyId);

        return currency.abbreviation;
    }

}

interface TransactionLineProps {
    banks: Bank[];
    classMix: string;
    currencies: Currency[];
    eventTimeLineService: EventTimeLineService;
    transaction: TimeLineTransaction;
}