import formatDistance from './_lib/formatDistance/index';
import formatRelative from './_lib/formatRelative/index';
/**
 * @type {Locale}
 * @category Locales
 * @summary Finnish locale.
 * @language Finnish
 * @iso-639-2 fin
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 * @author Edo Rivai [@mikolajgrzyb]{@link https://github.com/mikolajgrzyb}
 * @author Samu Juvonen [@sjuvonen]{@link https://github.com/sjuvonen}
 */
declare var locale: {
    formatDistance: typeof formatDistance;
    formatLong: {
        date: (dirtyOptions: any) => any;
        time: (dirtyOptions: any) => any;
        dateTime: (dirtyOptions: any) => any;
    };
    formatRelative: typeof formatRelative;
    localize: {
        ordinalNumber: (dirtyNumber: number) => string;
        era: (dirtyIndex: any, dirtyOptions: any) => any;
        quarter: (dirtyIndex: any, dirtyOptions: any) => any;
        month: (dirtyIndex: any, dirtyOptions: any) => any;
        day: (dirtyIndex: any, dirtyOptions: any) => any;
        dayPeriod: (dirtyIndex: any, dirtyOptions: any) => any;
    };
    match: {
        ordinalNumber: (dirtyString: any, dirtyOptions: any) => {
            value: any;
            rest: string;
        } | null;
        era: (dirtyString: any, dirtyOptions: any) => {
            value: any;
            rest: string;
        } | null;
        quarter: (dirtyString: any, dirtyOptions: any) => {
            value: any;
            rest: string;
        } | null;
        month: (dirtyString: any, dirtyOptions: any) => {
            value: any;
            rest: string;
        } | null;
        day: (dirtyString: any, dirtyOptions: any) => {
            value: any;
            rest: string;
        } | null;
        dayPeriod: (dirtyString: any, dirtyOptions: any) => {
            value: any;
            rest: string;
        } | null;
    };
    options: {
        weekStartsOn: number;
        firstWeekContainsDate: number;
    };
};
export default locale;
