import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

// Source: https://www.unicode.org/cldr/charts/45/summary/pa.html
// The CLDR default numbering system for pa is `latn`, so numbers stay in
// Western digits rather than being transliterated to Gurmukhi digits.

const eraValues = {
  narrow: ["ਈ.ਪੂ.", "ਸੰਨ"] as const,
  abbreviated: ["ਈ. ਪੂ.", "ਸੰਨ"] as const,
  wide: ["ਈਸਵੀ ਪੂਰਵ", "ਈਸਵੀ ਸੰਨ"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["ਤਿਮਾਹੀ1", "ਤਿਮਾਹੀ2", "ਤਿਮਾਹੀ3", "ਤਿਮਾਹੀ4"] as const,
  wide: ["ਪਹਿਲੀ ਤਿਮਾਹੀ", "ਦੂਜੀ ਤਿਮਾਹੀ", "ਤੀਜੀ ਤਿਮਾਹੀ", "ਚੌਥੀ ਤਿਮਾਹੀ"] as const,
};

const monthValues = {
  narrow: [
    "ਜ",
    "ਫ਼",
    "ਮਾ",
    "ਅ",
    "ਮ",
    "ਜੂ",
    "ਜੁ",
    "ਅ",
    "ਸ",
    "ਅ",
    "ਨ",
    "ਦ",
  ] as const,
  abbreviated: [
    "ਜਨ",
    "ਫ਼ਰ",
    "ਮਾਰਚ",
    "ਅਪ੍ਰੈ",
    "ਮਈ",
    "ਜੂਨ",
    "ਜੁਲਾ",
    "ਅਗ",
    "ਸਤੰ",
    "ਅਕਤੂ",
    "ਨਵੰ",
    "ਦਸੰ",
  ] as const,
  wide: [
    "ਜਨਵਰੀ",
    "ਫ਼ਰਵਰੀ",
    "ਮਾਰਚ",
    "ਅਪ੍ਰੈਲ",
    "ਮਈ",
    "ਜੂਨ",
    "ਜੁਲਾਈ",
    "ਅਗਸਤ",
    "ਸਤੰਬਰ",
    "ਅਕਤੂਬਰ",
    "ਨਵੰਬਰ",
    "ਦਸੰਬਰ",
  ] as const,
};

const dayValues = {
  narrow: ["ਐ", "ਸੋ", "ਮੰ", "ਬੁੱ", "ਵੀ", "ਸ਼ੁੱ", "ਸ਼"] as const,
  short: ["ਐਤ", "ਸੋਮ", "ਮੰਗ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕ", "ਸ਼ਨੀ"] as const,
  abbreviated: ["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨੀ"] as const,
  wide: [
    "ਐਤਵਾਰ",
    "ਸੋਮਵਾਰ",
    "ਮੰਗਲਵਾਰ",
    "ਬੁੱਧਵਾਰ",
    "ਵੀਰਵਾਰ",
    "ਸ਼ੁੱਕਰਵਾਰ",
    "ਸ਼ਨੀਵਾਰ",
  ] as const,
};

// CLDR gives Latin AM/PM for pa. It has no "noon" period, so ਦੁਪਹਿਰ is used
// there, following standard Punjabi usage.
const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ਅੱਧੀ ਰਾਤ",
    noon: "ਦੁਪਹਿਰ",
    morning: "ਸਵੇਰੇ",
    afternoon: "ਦੁਪਹਿਰੇ",
    evening: "ਸ਼ਾਮ",
    night: "ਰਾਤ",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ਅੱਧੀ ਰਾਤ",
    noon: "ਦੁਪਹਿਰ",
    morning: "ਸਵੇਰੇ",
    afternoon: "ਦੁਪਹਿਰੇ",
    evening: "ਸ਼ਾਮ",
    night: "ਰਾਤ",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ਅੱਧੀ ਰਾਤ",
    noon: "ਦੁਪਹਿਰ",
    morning: "ਸਵੇਰੇ",
    afternoon: "ਦੁਪਹਿਰੇ",
    evening: "ਸ਼ਾਮ",
    night: "ਰਾਤ",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ਅੱਧੀ ਰਾਤ",
    noon: "ਦੁਪਹਿਰ",
    morning: "ਸਵੇਰੇ",
    afternoon: "ਦੁਪਹਿਰੇ",
    evening: "ਸ਼ਾਮੀਂ",
    night: "ਰਾਤੀਂ",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ਅੱਧੀ ਰਾਤ",
    noon: "ਦੁਪਹਿਰ",
    morning: "ਸਵੇਰੇ",
    afternoon: "ਦੁਪਹਿਰੇ",
    evening: "ਸ਼ਾਮੀਂ",
    night: "ਰਾਤੀਂ",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ਅੱਧੀ ਰਾਤ",
    noon: "ਦੁਪਹਿਰ",
    morning: "ਸਵੇਰੇ",
    afternoon: "ਦੁਪਹਿਰੇ",
    evening: "ਸ਼ਾਮੀਂ",
    night: "ਰਾਤੀਂ",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return String(number);
};

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
