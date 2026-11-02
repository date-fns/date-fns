import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["a-raok J.K.", "goude J.K."] as const,
  abbreviated: ["a-raok J.K.", "goude J.K."] as const,
  wide: ["a-raok Jezuz-Krist", "goude Jezuz-Krist"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1añ trim.", "2l trim.", "3e trim.", "4e trim."] as const,
  wide: [
    "1añ trimiziad",
    "2l trimiziad",
    "3e trimiziad",
    "4e trimiziad",
  ] as const,
};

const monthValues = {
  narrow: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ] as const,
  abbreviated: [
    "Gen.",
    "Cʼhwe.",
    "Meur.",
    "Ebr.",
    "Mae",
    "Mezh.",
    "Goue.",
    "Eost",
    "Gwen.",
    "Here",
    "Du",
    "Kzu.",
  ] as const,
  wide: [
    "Genver",
    "Cʼhwevrer",
    "Meurzh",
    "Ebrel",
    "Mae",
    "Mezheven",
    "Gouere",
    "Eost",
    "Gwengolo",
    "Here",
    "Du",
    "Kerzu",
  ] as const,
};

const dayValues = {
  narrow: ["Su", "L", "Mz", "Mc", "Y", "G", "Sa"] as const,
  short: ["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."] as const,
  abbreviated: ["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."] as const,
  wide: [
    "Sul",
    "Lun",
    "Meurzh",
    "Mercʼher",
    "Yaou",
    "Gwener",
    "Sadorn",
  ] as const,
};

// a.m. (a-raok merenn) and g.m. (goude merenn) as recommended by the OPAB
const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "gm",
    midnight: "hanternoz",
    noon: "kreisteiz",
    morning: "mintin",
    afternoon: "enderv",
    evening: "abardaez",
    night: "noz",
  },
  abbreviated: {
    am: "a.m.",
    pm: "g.m.",
    midnight: "hanternoz",
    noon: "kreisteiz",
    morning: "mintin",
    afternoon: "enderv",
    evening: "abardaez",
    night: "noz",
  },
  wide: {
    am: "a-raok merenn",
    pm: "goude merenn",
    midnight: "hanternoz",
    noon: "kreisteiz",
    morning: "mintin",
    afternoon: "enderv",
    evening: "abardaez",
    night: "noz",
  },
};

// Ordinal abbreviations recommended by the OPAB:
// 1añ (kentañ), 2l (eil), 3e (trede), 4e (pevare), 5vet (pempvet)…
const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  switch (number) {
    case 1:
      return number + "añ";
    case 2:
      return number + "l";
    case 3:
    case 4:
      return number + "e";
    default:
      return number + "vet";
  }
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
  }),
};
