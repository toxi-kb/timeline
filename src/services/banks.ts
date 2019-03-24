import { DataService } from '../core/data-service/data-service';
import { DataServiceListener } from '../core/data-service/interfaces';

import { Bank } from '../models';
import { BANKS } from '../mocks/banks';

export class BanksService extends DataService<Bank> {

    public subscribe(listener: DataServiceListener<Bank[]>) {
        super.subscribe(listener);

        this.update(BANKS);
    }

}