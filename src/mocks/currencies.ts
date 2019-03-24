import { Currency } from '../models';
import { Uuid } from '../utils/uuid';

export const CURRENCIES: Currency[] = [
    {
        id: Uuid.generate(),
        abbreviation: '₽'
    },
    {
        id: Uuid.generate(),
        abbreviation: '$'  
    },
    {
        id: Uuid.generate(),
        abbreviation: '€'  
    }
];