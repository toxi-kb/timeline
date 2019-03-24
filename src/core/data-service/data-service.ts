import { DataServiceListener } from './interfaces';

export class DataService<ServiceDataItem> {

    protected data: ServiceDataItem[];

    private listeners: DataServiceListener<ServiceDataItem[]>[] = [];

    public subscribe(listener: DataServiceListener<ServiceDataItem[]>) {
        this.listeners.push(listener);
    }

    protected update(data: ServiceDataItem[]) {
        this.data = data;
        this.publish();
    }

    private publish() {
        this.listeners.forEach(listener => listener(this.data));
    }

}