import * as b from 'b_';

import { Component } from '../../core/component';
import { VirtualMarkup } from '../../core/virtual-dom/interfaces';

import { BanksService } from '../../services/banks';
import { CurrencyService } from '../../services/currency';
import { EventTimeLineService } from '../../services/event-timeline';
import { ModalService } from '../../services/modal';
import { TimeLineEvent, Currency, Bank } from '../../models';

import { Button, ButtonProps } from '../common/button/button';
import { NewsCreationModal } from '../news-creation-modal/news-creation-modal';
import { NewsLine } from './news/news';
import { TransactionCreationModal } from '../transaction-creation-modal/transaction-creation-modal';
import { TransactionLine } from './transaction/transaction';

import './event-timeline.scss';

type SortingMode = 'dateAsc' | 'dateDesc' | 'eventTypeAsc' | 'eventTypeDesc';

const SORTING_LABELS: { [key in SortingMode]: string } = {
    dateAsc: 'по дате (старые -> новые)',
    dateDesc: 'по дате (новые -> старые)',
    eventTypeAsc: 'по типу (А -> Я)',
    eventTypeDesc: 'по типу (Я -> А)'
};

export class EventTimeLine extends Component<EventTimeLineProps, EventTimeLineState> {

    constructor(props: EventTimeLineProps) {
        super('event-timeline', props, { sortBy: 'dateAsc', banks: null, currencies: null, events: null });
    }

    protected onInit(): void {
        const { banksService, currencyService, eventTimeLineService } = this.props;
        
        banksService.subscribe((banks) => this.setState({ banks }));
        currencyService.subscribe((currencies) => this.setState({ currencies }));
        eventTimeLineService.subscribe((events) => this.setState({ events }));
    }

    protected render(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderTransactionCreationButton(),
                this.renderNewsCreationButton(),
                this.renderSorting(),
                ...this.renderEventNodes()
            ]
        };
    }

    private renderEventNodes(): VirtualMarkup[] {
        const { eventTimeLineService } = this.props;
        const { banks, currencies, events, sortBy } = this.state;

        if (banks == null || currencies == null || events == null) {
            return [];
        }

        const eventsClone = [ ...events ];

        eventsClone.sort((e1, e2) => {
            switch (sortBy) {
                case 'dateAsc':
                    return e1.date < e2.date ? -1 : 1;
                case 'dateDesc':
                    return e1.date < e2.date ? 1 : -1;
                case 'eventTypeAsc':
                    return e1.eventType < e2.eventType ? -1 : 1;
                case 'eventTypeDesc':
                    return e1.eventType < e2.eventType ? 1 : -1;
            }
        });

        return eventsClone.map((event) => {
            const classMix = b(this.className, 'item');
            const componentId = `event-${ event.id }`;
            const line = event.eventType === 'news'
                ? this.renderComponent(componentId, NewsLine,
                    { classMix, eventTimeLineService, news: event })
                : this.renderComponent(componentId, TransactionLine,
                    { classMix, eventTimeLineService, transaction: event, currencies, banks });    
            return line;
        });
    }

    private renderTransactionCreationButton(): VirtualMarkup {
        const { eventTimeLineService } = this.props;
        const { banks, currencies } = this.state;

        const props: ButtonProps = {
            classMix: b(this.className, 'transaction-creation-button'),
            color: 'blue',
            onClick: () => ModalService.show(
                new TransactionCreationModal({ banks, currencies, eventTimeLineService }).init()),
            text: 'Добавить транзакцию'
        };
        
        return this.renderComponent('transaction-creation-button', Button, props);
    }

    private renderNewsCreationButton(): VirtualMarkup {
        const { eventTimeLineService } = this.props;

        const props: ButtonProps = {
            color: 'blue',
            onClick: () => ModalService.show(
                new NewsCreationModal({ eventTimeLineService }).init()),
            text: 'Добавить новость'
        };

        return this.renderComponent('news-creation-button', Button, props);
    }

    private renderSorting(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'sorting') },
            children: [
                { tagName: 'span', children: ['Сортировать:'] },
                this.renderSortingItem('dateAsc'),
                this.renderSortingItem('dateDesc'),
                this.renderSortingItem('eventTypeAsc'),
                this.renderSortingItem('eventTypeDesc')
            ]
        }
    }

    private renderSortingItem(sortBy: SortingMode): VirtualMarkup {
        const className = b(this.className, 'sorting-item', { active: this.state.sortBy === sortBy });

        return {
            tagName: 'span',
            attrs: { class: className },
            listeners: { click: () => this.setState({ sortBy }) },
            children: [SORTING_LABELS[sortBy]]
        };
    }

}

interface EventTimeLineProps {
    banksService: BanksService;
    currencyService: CurrencyService;
    eventTimeLineService: EventTimeLineService;
}

interface EventTimeLineState {
    sortBy: SortingMode;
    banks: Bank[];
    currencies: Currency[];
    events: TimeLineEvent[];
}
