import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["vC", "nC"] as const,
  abbreviated: ["vC", "nC"] as const,
  wide: ["voor Christus", "na Christus"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["K1", "K2", "K3", "K4"] as const,
  wide: [
    "1ste kwartaal",
    "2de kwartaal",
    "3de kwartaal",
    "4de kwartaal",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "Jan",
    "Feb",
    "Mrt",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ] as const,
  wide: [
    "Januarie",
    "Februarie",
    "Maart",
    "April",
    "Mei",
    "Junie",
    "Julie",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ] as const,
};

const dayValues = {
  narrow: ["S", "M", "D", "W", "D", "V", "S"] as const,
  short: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"] as const,
  abbreviated: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"] as const,
  wide: [
    "Sondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrydag",
    "Saterdag",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "middaguur",
    morning: "oggend",
    afternoon: "middag",
    evening: "laat middag",
    night: "aand",
  },
  abbreviated: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "middaguur",
    morning: "oggend",
    afternoon: "middag",
    evening: "laat middag",
    night: "aand",
  },
  wide: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "middaguur",
    morning: "oggend",
    afternoon: "middag",
    evening: "laat middag",
    night: "aand",
  },
};
const formattingDayPeriodValues = {
  narrow: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "uur die middag",
    morning: "uur die oggend",
    afternoon: "uur die middag",
    evening: "uur die aand",
    night: "uur die aand",
  },
  abbreviated: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "uur die middag",
    morning: "uur die oggend",
    afternoon: "uur die middag",
    evening: "uur die aand",
    night: "uur die aand",
  },
  wide: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "uur die middag",
    morning: "uur die oggend",
    afternoon: "uur die middag",
    evening: "uur die aand",
    night: "uur die aand",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 < 20) {
    switch (rem100) {
      case 1:
      case 8:
        return number + "ste";
      default:
        return number + "de";
    }
  }
  return number + "ste";
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
