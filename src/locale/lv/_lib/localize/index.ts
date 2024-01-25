import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["p.m.ē", "m.ē"] as const,
  abbreviated: ["p. m. ē.", "m. ē."] as const,
  wide: ["pirms mūsu ēras", "mūsu ērā"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."] as const,
  wide: [
    "pirmais ceturksnis",
    "otrais ceturksnis",
    "trešais ceturksnis",
    "ceturtais ceturksnis",
  ] as const,
};

const formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."] as const,
  wide: [
    "pirmajā ceturksnī",
    "otrajā ceturksnī",
    "trešajā ceturksnī",
    "ceturtajā ceturksnī",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "janv.",
    "febr.",
    "marts",
    "apr.",
    "maijs",
    "jūn.",
    "jūl.",
    "aug.",
    "sept.",
    "okt.",
    "nov.",
    "dec.",
  ] as const,
  wide: [
    "janvāris",
    "februāris",
    "marts",
    "aprīlis",
    "maijs",
    "jūnijs",
    "jūlijs",
    "augusts",
    "septembris",
    "oktobris",
    "novembris",
    "decembris",
  ] as const,
};

const formattingMonthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "janv.",
    "febr.",
    "martā",
    "apr.",
    "maijs",
    "jūn.",
    "jūl.",
    "aug.",
    "sept.",
    "okt.",
    "nov.",
    "dec.",
  ] as const,
  wide: [
    "janvārī",
    "februārī",
    "martā",
    "aprīlī",
    "maijā",
    "jūnijā",
    "jūlijā",
    "augustā",
    "septembrī",
    "oktobrī",
    "novembrī",
    "decembrī",
  ] as const,
};

const dayValues = {
  narrow: ["S", "P", "O", "T", "C", "P", "S"] as const,
  short: ["Sv", "P", "O", "T", "C", "Pk", "S"] as const,
  abbreviated: [
    "svētd.",
    "pirmd.",
    "otrd.",
    "trešd.",
    "ceturtd.",
    "piektd.",
    "sestd.",
  ] as const,
  wide: [
    "svētdiena",
    "pirmdiena",
    "otrdiena",
    "trešdiena",
    "ceturtdiena",
    "piektdiena",
    "sestdiena",
  ] as const,
};

const formattingDayValues = {
  narrow: ["S", "P", "O", "T", "C", "P", "S"] as const,
  short: ["Sv", "P", "O", "T", "C", "Pk", "S"] as const,
  abbreviated: [
    "svētd.",
    "pirmd.",
    "otrd.",
    "trešd.",
    "ceturtd.",
    "piektd.",
    "sestd.",
  ] as const,
  wide: [
    "svētdienā",
    "pirmdienā",
    "otrdienā",
    "trešdienā",
    "ceturtdienā",
    "piektdienā",
    "sestdienā",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rīts",
    afternoon: "diena",
    evening: "vakars",
    night: "nakts",
  },
  abbreviated: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rīts",
    afternoon: "pēcpusd.",
    evening: "vakars",
    night: "nakts",
  },
  wide: {
    am: "am",
    pm: "pm",
    midnight: "pusnakts",
    noon: "pusdienlaiks",
    morning: "rīts",
    afternoon: "pēcpusdiena",
    evening: "vakars",
    night: "nakts",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rītā",
    afternoon: "dienā",
    evening: "vakarā",
    night: "naktī",
  },
  abbreviated: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rītā",
    afternoon: "pēcpusd.",
    evening: "vakarā",
    night: "naktī",
  },
  wide: {
    am: "am",
    pm: "pm",
    midnight: "pusnaktī",
    noon: "pusdienlaikā",
    morning: "rītā",
    afternoon: "pēcpusdienā",
    evening: "vakarā",
    night: "naktī",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + ".";
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
    formattingValues: formattingDayValues,
    defaultFormattingWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
