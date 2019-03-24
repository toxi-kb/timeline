import { TimeLineEvent } from '../models';
import { Uuid } from '../utils/uuid';

import { BANKS } from './banks';
import { CURRENCIES } from './currencies';

export const EVENT_TIME_LINE: TimeLineEvent[] = [
    {
        eventType: 'news',
        id: Uuid.generate(),
        title: 'Кредиты',
        content: 'Получите до 100 000 онлайн, без посещения отделения!',
        date: new Date('2019-03-01 10:00'),
        readed: false
    },
    {
        eventType: 'transaction',
        id: Uuid.generate(),
        currencyId: CURRENCIES[0].id,
        date: new Date('2019-03-01 15:00'),
        description: 'Зарплата за февраль',
        bankId: BANKS[0].id,
        amount: 10,
        transactionType: 'income'
    },
    {
        eventType: 'news',
        id: Uuid.generate(),
        title: 'Инвестиции',
        content: 'Инвестируйте в ценные бумаги. Теперь вместе с нами!',
        date: new Date('2019-03-01 11:30'),
        readed: true
    },
    {
        eventType: 'transaction',
        id: Uuid.generate(),
        currencyId: CURRENCIES[1].id,
        date: new Date('2019-03-01 18:00'),
        description: 'Оплата услуг мобильный связи.',
        bankId: BANKS[1].id,
        amount: 20,
        transactionType: 'expense'
    },
    {
        eventType: 'news',
        id: Uuid.generate(),
        title: 'Вклады',
        content: 'Откройте вклад у нас и получайте до 12% годовых.',
        date: new Date('2019-03-01 14:10'),
        readed: false
    },
    {
        eventType: 'transaction',
        id: Uuid.generate(),
        currencyId: CURRENCIES[2].id,
        date: new Date('2019-03-01 12:00'),
        description: 'Возврат долга за 8 марта',
        bankId: BANKS[2].id,
        amount: 30,
        transactionType: 'income'
    },
];