import formatDistance from './_lib/formatDistance/index';
import formatRelative from './_lib/formatRelative/index';
/**
 * @type {Locale}
 * @category Locales
 * @summary German locale.
 * @language German
 * @iso-639-2 deu
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 * @author Van Vuong Ngo [@vanvuongngo]{@link https://github.com/vanvuongngo}
 * @author RomanErnst [@pex]{@link https://github.com/pex}
 * @author Philipp Keck [@Philipp91]{@link https://github.com/Philipp91}
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
        ordinalNumber: (dirtyNumber: any, _dirtyOptions: any) => string;
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
