import * as b from 'b_';

import { Component } from '../../core/component';
import { VirtualMarkup } from '../../core/virtual-dom/interfaces';

import { DateUtils } from '../../utils/date';
import { News } from '../../models';
import { EventTimeLineService } from '../../services/event-timeline';
import { ModalService } from '../../services/modal';

import { Button } from '../common/button/button';
import { Modal } from '../common/modal/modal';

import './news-info-modal.scss';

export class NewsInfoModal extends Component<NewsInfoProps> {

    constructor(props: NewsInfoProps) {
        super('news-info-modal', props);
    }

    protected render(): VirtualMarkup {
        return this.renderComponent('modal', Modal, { children: this.renderModalContent() });
    }

    private renderModalContent(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderTitle(),
                this.renderDate(),
                this.renderContent(),
                this.renderReadButton()
            ]
        };
    }

    private renderContent(): VirtualMarkup {
        return {
            tagName: 'div',
            children: [ this.props.news.content ]
        };
    }

    private renderDate(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'date') },
            children: [ DateUtils.format(this.props.news.date) ]
        };
    }

    private renderReadButton(): VirtualMarkup {
        const { eventTimeLineService } = this.props;

        return this.renderComponent('read-button', Button, {
            classMix: b(this.className, 'read-button'),
            color: 'green',
            onClick: () => {
                eventTimeLineService.readNews(this.props.news.id);
                ModalService.hide();
            },
            text: 'Ознакомлен'
        });
    }

    private renderTitle(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'title') },
            children: [ this.props.news.title ]
        };
    }
}

interface NewsInfoProps {
    eventTimeLineService: EventTimeLineService;
    news: News;
}