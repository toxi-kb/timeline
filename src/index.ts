import { BanksService } from './services/banks';
import { CurrencyService } from './services/currency';
import { EventTimeLineService } from './services/event-timeline';

import { EventTimeLine } from './components/event-timeline/event-timeline';

const banksService = new BanksService();
const currencyService = new CurrencyService();
const eventTimeLineService = new EventTimeLineService();
const eventTimeLine = new EventTimeLine({ banksService, currencyService, eventTimeLineService }).init();

document.body.appendChild(eventTimeLine);
