import * as b from 'b_';

import { Component } from '../../core/component';
import { Validation } from '../../core/interfaces';
import { VirtualMarkup } from '../../core/virtual-dom/interfaces';

import { EventTimeLineService } from '../../services/event-timeline';
import { ModalService } from '../../services/modal';
import { TimeLineTransaction, Currency, Bank } from '../../models';
import { Uuid } from '../../utils/uuid';

import { Button } from '../common/button/button';
import { Input } from '../common/input/input';
import { Modal } from '../common/modal/modal';
import { Select } from '../common/select/select';
import { TextArea } from '../common/textarea/textarea';

import './transaction-creation-modal.scss';

export class TransactionCreationModal extends Component<TransactionCreationProps, TransactionCreationState> {

    constructor(props: TransactionCreationProps) {
        super('transaction-creation-modal', props, {
            amount: null,
            currencyId: props.currencies[0].id,
            description: null,
            bankId: props.banks[0].id,
            transactionType: 'income'
        });
    }

    protected render(): VirtualMarkup {
        return this.renderComponent('modal', Modal, { children: this.renderModalContent() });
    }

    private renderModalContent(): VirtualMarkup {
        return {
            tagName: 'form',
            attrs: { class: this.className },
            children: [
                this.renderHeader(),
                this.renderTypeSelect(),
                this.renderBankSelect(),
                this.renderAmountInput(),
                this.renderCurrencySelect(),
                this.renderDescriptionInput(),
                this.renderSaveButton()
            ]
        };
    }

    private renderHeader(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'header') },
            children: [ 'Новая транзакция' ]
        };
    }

    private renderAmountInput(): VirtualMarkup {
        const validation = this.validateAmount();

        return this.renderComponent('amount', Input, {
            error: !validation.success ? validation.error : undefined,
            label: 'Сумма транзакции',
            onInput: (value: string) => this.setState({ amount: parseInt(value, 10) })
        });
    }

    private renderCurrencySelect(): VirtualMarkup {
        return this.renderComponent('currency', Select, {
            choices: this.props.currencies.map((x) => ({ value: x.id, text: x.abbreviation })),
            label: 'Валюта',
            onSelect: (currencyId: string) => this.setState({ currencyId })
        });
    }

    private renderBankSelect(): VirtualMarkup {
        return this.renderComponent('bank', Select, {
            choices: this.props.banks.map((x) => ({ value: x.id, text: x.name })),
            label: 'От кого транзакция',
            onSelect: (bankId: string) => this.setState({ bankId })
        });
    }

    private renderDescriptionInput(): VirtualMarkup {
        const validation = this.validateDescription();

        return this.renderComponent('description', TextArea, {
            error: !validation.success ? validation.error : undefined,
            label: 'Описание',
            onInput: (description: string) => this.setState({ description }),
            value: this.state.description
        });
    }

    private renderTypeSelect(): VirtualMarkup {
        const choices: { text: string, value: TimeLineTransaction['transactionType'] }[] = [
            { text: 'Приход', value: 'income' },
            { text: 'Расход', value: 'expense' }
        ];
        
        return this.renderComponent('transactionType', Select, {
            choices,
            label: 'Тип',
            onSelect: (transactionType: TimeLineTransaction['transactionType']) =>
                this.setState({ transactionType })
        });
    }

    private renderSaveButton(): VirtualMarkup {
        return this.renderComponent('save-button', Button, {
            classMix: b(this.className, 'save-button'),
            color: 'green',
            onClick: () => this.save(),
            text: 'Сохранить'
        });
    }

    private save(): void {
        const { eventTimeLineService } = this.props;
        const { amount, currencyId, description, bankId, transactionType } = this.state;

        if (this.validateAmount().success && this.validateDescription().success) {
            eventTimeLineService.save({
                eventType: 'transaction',
                id: Uuid.generate(),
                amount,
                currencyId,
                date: new Date(),
                description,
                bankId,
                transactionType
            });
            ModalService.hide();
        }
    }

    private validateAmount(): Validation {
        const { amount } = this.state;

        return amount && amount > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно и больше нуля' };
    }

    private validateDescription(): Validation {
        const { description } = this.state;

        return description && description.length > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно' };
    }

}

interface TransactionCreationProps {
    banks: Bank[];
    currencies: Currency[];
    eventTimeLineService: EventTimeLineService;
}

interface TransactionCreationState {
    amount: TimeLineTransaction['amount'];
    currencyId: TimeLineTransaction['currencyId'];
    description: TimeLineTransaction['description'];
    bankId: TimeLineTransaction['bankId'];
    transactionType: TimeLineTransaction['transactionType'];
}