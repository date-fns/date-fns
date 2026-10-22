import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["D", "Z"] as const,
  abbreviated: ["DM", "ZM"] as const,
  wide: ["De Misali", "Za Misali"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1s 4tel", "2s 4tel", "3s 4tel", "4s 4tel"] as const,
  wide: ["1s kjeretel", "2s kjeretel", "3s kjeretel", "4s kjeretel"] as const,
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["N", "H", "P", "U", "E", "V", "K", "V", "S", "A", "S", "J"] as const,
  abbreviated: [
    "Neo",
    "Hob",
    "Pran",
    "Uso",
    "Erg",
    "Ver",
    "Kaj",
    "Vap",
    "Sik",
    "Ats",
    "Sla",
    "Jul",
  ] as const,
  wide: [
    "neomuaj",
    "hobitmuaj",
    "pranmuaj",
    "usomuaj",
    "ergomuaj",
    "veramuaj",
    "kajsarmuaj",
    "vapamuaj",
    "siksimuaj",
    "atsormuaj",
    "slagmuaj",
    "julmuaj",
  ] as const,
};

const dayValues = {
  narrow: ["S", "L", "I", "H", "B", "G", "T"] as const,
  short: ["So", "Lu", "Is", "Ho", "Ba", "Ge", "Te"] as const,
  abbreviated: ["Sol", "Lun", "Ish", "Hon", "Bau", "Gel", "Ter"] as const,
  wide: [
    "soldag",
    "lunadag",
    "ishkedag",
    "honodag",
    "baumdag",
    "geltdag",
    "terdag",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "zmn",
    pm: "zmd",
    midnight: "mn",
    noon: "md",
    morning: "mora",
    afternoon: "dag",
    evening: "kvel",
    night: "naht",
  },
  abbreviated: {
    am: "ZMN",
    pm: "ZMD",
    midnight: "melanaht",
    noon: "melandag",
    morning: "mora",
    afternoon: "dag",
    evening: "kvel",
    night: "naht",
  },
  wide: {
    am: "z.m.n",
    pm: "z.m.d.",
    midnight: "melanaht",
    noon: "melandag",
    morning: "mora",
    afternoon: "dag",
    evening: "kvel",
    night: "naht",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "zmn",
    pm: "zmd",
    midnight: "mn", 
    noon: "md", 
    morning: "na mora",
    afternoon: "na dag",
    evening: "na kvel",
    night: "na naht",
  },
  abbreviated: {
    am: "ZMN",
    pm: "ZMD",
    midnight: "melanaht",
    noon: "melandag",
    morning: "na mora",
    afternoon: "na dag",
    evening: "na kvel",
    night: "na naht",
  },
  wide: {
    am: "z.m.n.",
    pm: "z.m.d.",
    midnight: "melanaht",
    noon: "melandag",
    morning: "na mora",
    afternoon: "na dag",
    evening: "na kvel",
    night: "na naht",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "s";
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
