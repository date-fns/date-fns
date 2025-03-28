import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

type hiLocaleNumberType =
  | "\u0967"
  | "\u0968"
  | "\u0969"
  | "\u096A"
  | "\u096B"
  | "\u096C"
  | "\u096D"
  | "\u096E"
  | "\u096F"
  | "\u0966";

type enLocaleNumberType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0";

type enHiLocaleNumberType = {
  [enNumber in enLocaleNumberType]: hiLocaleNumberType;
};

type hiLocaleEnNumberType = {
  [hiNumber in hiLocaleNumberType]: enLocaleNumberType;
};

export interface hiLocaleNumberValuesType {
  locale: enHiLocaleNumberType;
  number: hiLocaleEnNumberType;
}

const numberValues: hiLocaleNumberValuesType = {
  locale: {
    "1": "१",
    "2": "२",
    "3": "३",
    "4": "४",
    "5": "५",
    "6": "६",
    "7": "७",
    "8": "८",
    "9": "९",
    "0": "०",
  },
  number: {
    "१": "1",
    "२": "2",
    "३": "3",
    "४": "4",
    "५": "5",
    "६": "6",
    "७": "7",
    "८": "8",
    "९": "9",
    "०": "0",
  },
};

// CLDR #1585 - #1592
const eraValues = {
  narrow: ["ईसा-पूर्व", "ईस्वी"] as const,
  abbreviated: ["ईसा-पूर्व", "ईस्वी"] as const,
  wide: ["ईसा-पूर्व", "ईसवी सन"] as const,
};

// CLDR #1593 - #1616
const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["ति1", "ति2", "ति3", "ति4"] as const,
  wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"] as const,
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
// https://www.unicode.org/cldr/charts/32/summary/hi.html
// CLDR #1617 - #1688
const monthValues = {
  narrow: [
    "ज",
    "फ़",
    "मा",
    "अ",
    "मई",
    "जू",
    "जु",
    "अग",
    "सि",
    "अक्टू",
    "न",
    "दि",
  ] as const,
  abbreviated: [
    "जन",
    "फ़र",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुल",
    "अग",
    "सित",
    "अक्टू",
    "नव",
    "दिस",
  ] as const,
  wide: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ] as const,
};

// CLDR #1689 - #1744
const dayValues = {
  narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"] as const,
  short: ["र", "सो", "मं", "बु", "गु", "शु", "श"] as const,
  abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] as const,
  wide: [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात",
  },
  abbreviated: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात",
  },
  wide: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात",
  },
  abbreviated: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात",
  },
  wide: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return numberToLocale(number);
};

export function localeToNumber(locale: string): number {
  const enNumber = locale.toString().replace(/[१२३४५६७८९०]/g, function (match) {
    return numberValues.number[match as hiLocaleNumberType];
  });
  return Number(enNumber);
}

export function numberToLocale(enNumber: number) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match as enLocaleNumberType];
  });
}

export const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
