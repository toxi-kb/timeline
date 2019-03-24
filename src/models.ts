export interface Bank {
    id: string;
    name: string;
}

export interface Currency {
    id: string;
    abbreviation: string;
}

export interface TimeLineTransaction {
    eventType: 'transaction';
    id: string;
    currencyId: Currency['id'];
    amount: number;
    bankId: Bank['id'];
    description: string;
    transactionType: 'income' | 'expense';
    date: Date;
}

export interface News {
    eventType: 'news';
    id: string;
    title: string;
    content: string;
    date: Date;
    readed: boolean;
}

export type TimeLineEvent = TimeLineTransaction | News;
