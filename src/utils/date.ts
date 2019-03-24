import { NumUtils } from './num';

export class DateUtils {

    public static format(date: Date): string {
        const day = NumUtils.getLeadingZeroNum(date.getDate());
        const month = NumUtils.getLeadingZeroNum(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = NumUtils.getLeadingZeroNum(date.getHours());
        const minutes = NumUtils.getLeadingZeroNum(date.getMinutes());

        return `${ day }-${ month }-${ year } ${ hours }:${ minutes }`;
    }

}

