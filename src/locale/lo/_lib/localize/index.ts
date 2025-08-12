import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["ກ່ອນ ຄສ", "ຄສ"] as const,
  abbreviated: ["ກ່ອນ ຄ.ສ.", "ຄ.ສ."] as const,
  wide: ["ກ່ອນຄຣິສຕະສັກກະຫຼາດ", "ຄຣິສຕະສັກກະຫຼາດ"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["Q1", "Q2", "Q3", "Q4"] as const,
  wide: ["ໄຕຣມາດທີ 1", "ໄຕຣມາດທີ 2", "ໄຕຣມາດທີ 3", "ໄຕຣມາດທີ 4"] as const,
};

const dayValues = {
  narrow: ["ອ", "ຈ", "ຄ", "ພ", "ພຫ", "ສ", "ອ"] as const,
  short: ["ອທ", "ຈ", "ອຄ", "ພ", "ພຫ", "ສກ", "ສ"] as const,
  abbreviated: ["ອທ", "ຈ", "ອຄ", "ພ", "ພຫ", "ສກ", "ສ"] as const,
  wide: [
    "ອາທິດ",
    "ຈັນ",
    "ອັງຄານ",
    "ພຸດ",
    "ພະຫັດ",
    "ສຸກ",
    "ເສົາ",
  ] as const,
};

const monthValues = {
  narrow: [
    "ມ.ກ.",
    "ກ.ພ.",
    "ມ.ນ.",
    "ມ.ສ.",
    "ພ.ສ.",
    "ມ.ຖ.",
    "ກ.ລ.",
    "ສ.ຫ.",
    "ກ.ຍ.",
    "ຕ.ລ.",
    "ພ.ຈ.",
    "ທ.ວ.",
  ] as const,
  abbreviated: [
    "ມ.ກ.",
    "ກ.ພ.",
    "ມ.ນ.",
    "ມ.ສ.",
    "ພ.ສ.",
    "ມ.ຖ.",
    "ກ.ລ.",
    "ສ.ຫ.",
    "ກ.ຍ.",
    "ຕ.ລ.",
    "ພ.ຈ.",
    "ທ.ວ.",
  ] as const,
  wide: [
    "ມັງກອນ",
    "ກຸມພາ",
    "ມີນາ",
    "ເມສາ",
    "ພຶດສະພາ",
    "ມິຖຸນາ",
    "ກໍລະກົດ",
    "ສິງຫາ",
    "ກັນຍາ",
    "ຕຸລາ",
    "ພະຈິກ",
    "ທັນວາ",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ເຊົ້າ",
    pm: "ແລງ",
    midnight: "ທ່ຽງຄືນ",
    noon: "ທ່ຽງ",
    morning: "ຕອນເຊົ້າ",
    afternoon: "ຕອນບ່າຍ",
    evening: "ຕອນແລງ",
    night: "ກາງຄືນ",
  },
  abbreviated: {
    am: "ເຊົ້າ",
    pm: "ແລງ",
    midnight: "ທ່ຽງຄືນ",
    noon: "ທ່ຽງ",
    morning: "ຕອນເຊົ້າ",
    afternoon: "ຕອນບ່າຍ",
    evening: "ຕອນແລງ",
    night: "ກາງຄືນ",
  },
  wide: {
    am: "ເຊົ້າ",
    pm: "ແລງ",
    midnight: "ທ່ຽງຄືນ",
    noon: "ທ່ຽງ",
    morning: "ຕອນເຊົ້າ",
    afternoon: "ຕອນບ່າຍ",
    evening: "ຕອນແລງ",
    night: "ກາງຄືນ",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ເຊົ້າ",
    pm: "ແລງ",
    midnight: "ທ່ຽງຄືນ",
    noon: "ທ່ຽງ",
    morning: "ຕອນເຊົ້າ",
    afternoon: "ຕອນບ່າຍ",
    evening: "ຕອນແລງ",
    night: "ກາງຄືນ",
  },
  abbreviated: {
    am: "ເຊົ້າ",
    pm: "ແລງ",
    midnight: "ທ່ຽງຄືນ",
    noon: "ທ່ຽງ",
    morning: "ຕອນເຊົ້າ",
    afternoon: "ຕອນບ່າຍ",
    evening: "ຕອນແລງ",
    night: "ກາງຄືນ",
  },
  wide: {
    am: "ເຊົ້າ",
    pm: "ແລງ",
    midnight: "ທ່ຽງຄືນ",
    noon: "ທ່ຽງ",
    morning: "ຕອນເຊົ້າ",
    afternoon: "ຕອນບ່າຍ",
    evening: "ຕອນແລງ",
    night: "ກາງຄືນ",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  return String(dirtyNumber);
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