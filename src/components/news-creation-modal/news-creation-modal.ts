import * as b from 'b_';

import { Component } from '../../core/component';
import { Validation } from '../../core/interfaces';
import { VirtualMarkup } from '../../core/virtual-dom/interfaces';

import { EventTimeLineService } from '../../services/event-timeline';
import { ModalService } from '../../services/modal';
import { Uuid } from '../../utils/uuid';

import { Button } from '../common/button/button';
import { Modal } from '../common/modal/modal';
import { Input } from '../common/input/input';
import { TextArea } from '../common/textarea/textarea';

import './news-creation-modal.scss';

export class NewsCreationModal extends Component<NewsCreationProps, NewsCreationState> {

    constructor(props: NewsCreationProps) {
        super('news-creation-modal', props, { content: null, title: null });
    }
    
    protected render(): VirtualMarkup {
        return this.renderComponent('modal', Modal, { children: this.renderModalContent() });
    }

    private renderModalContent(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: this.className },
            children: [
                this.renderHeader(),
                this.renderTitleInput(),
                this.renderContentInput(),
                this.renderSaveButton()
            ]
        };
    }

    private renderHeader(): VirtualMarkup {
        return {
            tagName: 'div',
            attrs: { class: b(this.className, 'header') },
            children: ['Новая новость']
        };
    }

    private renderTitleInput(): VirtualMarkup {
        const validation = this.validateTitle();

        return this.renderComponent('title', Input, {
            label: 'Заголовок',
            error: !validation.success ? validation.error : undefined,
            onInput: (title: string) => this.setState({ title }),
            value: this.state.title
        });
    }

    private renderContentInput(): VirtualMarkup {
        const validation = this.validateContent();

        return this.renderComponent('content', TextArea, {
            label: 'Содержание',
            error: !validation.success ? validation.error : undefined,
            onInput: (content: string) => this.setState({ content }),
            value: this.state.content
        });
    }

    private renderSaveButton(): VirtualMarkup {
        return this.renderComponent('save-button', Button, {
            classMix: b(this.className, 'save-button'),
            color: 'green',
            onClick: this.save,
            text: 'Сохранить'
        });
    }

    private save = (): void => {
        const { eventTimeLineService } = this.props;
        const { content, title } = this.state;

        if (this.validateTitle().success && this.validateContent().success) {
            eventTimeLineService.save({
                eventType: 'news',
                id: Uuid.generate(),
                title,
                content,
                date: new Date(),
                readed: false
            });
            ModalService.hide();
        }
    }

    private validateTitle(): Validation {
        const { title } = this.state;

        return title && title.length > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно' };
    }

    private validateContent(): Validation {
        const { content } = this.state;

        return content && content.length > 0
            ? { success: true }
            : { success: false, error: 'Это поле обязательно' };
    }

}

interface NewsCreationProps {
    eventTimeLineService: EventTimeLineService;
}

interface NewsCreationState {
    content: string;
    title: string;
}
