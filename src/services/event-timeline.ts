import { DataService } from '../core/data-service/data-service';
import { DataServiceListener } from '../core/data-service/interfaces';

import { TimeLineEvent, News, TimeLineTransaction } from '../models';
import { EVENT_TIME_LINE } from '../mocks/event-timeline';

export class EventTimeLineService extends DataService<TimeLineEvent> {

    public subscribe(listener: DataServiceListener<TimeLineEvent[]>) {
        super.subscribe(listener);

        this.update(EVENT_TIME_LINE);
    }

    public save(event: TimeLineEvent): void {
        const timeline = [ ...this.data, event ];

        this.update(timeline);
    }

    public readNews(newsId: News['id']): void {
        const timeline = this.data.map((x) => x.id === newsId ? { ...x, readed: true }: x);

        this.update(timeline);
    }

    public removeTransaction(transactionId: TimeLineTransaction['id']): void {
        const timeline = this.data.filter((x) => x.id !== transactionId);
        
        this.update(timeline);
    }

}
