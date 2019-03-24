import { Uuid } from '../utils/uuid';
import { Bank } from '../models';

export const BANKS: Bank[] = [
    {
        id: Uuid.generate(),
        name: 'Сбербанк'
    },
    {
        id: Uuid.generate(),
        name: 'Росбанк'
    },
    {
        id: Uuid.generate(),
        name: 'ВТБ'
    }
];
