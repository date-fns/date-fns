declare function ordinalNumber(number: any, _options: any): string;
declare var localize: {
    ordinalNumber: typeof ordinalNumber;
    era: (dirtyIndex: any, dirtyOptions: any) => any;
    quarter: (dirtyIndex: any, dirtyOptions: any) => any;
    month: (dirtyIndex: any, dirtyOptions: any) => any;
    day: (dirtyIndex: any, dirtyOptions: any) => any;
    dayPeriod: (dirtyIndex: any, dirtyOptions: any) => any;
};
export default localize;
