import { DataService } from '../core/data-service/data-service';
import { DataServiceListener } from '../core/data-service/interfaces';

import { Currency } from '../models';
import { CURRENCIES } from '../mocks/currencies';

export class CurrencyService extends DataService<Currency> {

    public subscribe(listener: DataServiceListener<Currency[]>) {
        super.subscribe(listener);

        this.update(CURRENCIES);
    }

}