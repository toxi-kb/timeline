import * as b from 'b_';

import { Component } from '../../../core/component';
import { VirtualMarkup } from '../../../core/virtual-dom/interfaces';

import { EventTimeLineService } from '../../../services/event-timeline';
import { ModalService } from '../../../services/modal';
import { News } from '../../../models';

import { NewsInfoModal } from '../../news-info-modal/news-info-modal';

import './news.scss';

export class NewsLine extends Component<NewsLineProps> {

    constructor(props: NewsLineProps) {
        super('event-timeline-news', props);
    }
    
    protected render(): VirtualMarkup {
        const { classMix, news } = this.props;
        const className = `${ b(this.className, { readed: news.readed }) } ${ classMix }`;

        return {
            tagName: 'div',
            attrs: { class: className },
            listeners: { click: this.onNewsClick },
            children: [ news.title ]
        };
    }

    private onNewsClick = (): void => {
        const { eventTimeLineService, news } = this.props;

        ModalService.show(new NewsInfoModal({ eventTimeLineService, news }).init()); 
    }

}

interface NewsLineProps {
    classMix: string;
    eventTimeLineService: EventTimeLineService;
    news: News;
}
