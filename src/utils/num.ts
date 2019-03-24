export class NumUtils {

    public static getLeadingZeroNum (num: number): string {
        return `${ num < 10 ? '0' : ''}${ num }`;
    }

}