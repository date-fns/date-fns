import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^\d+/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^([bB]|[aA]|ຄສ)/i,
  abbreviated:
    /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ຄ\.?ສ\.?)/i,
  wide: /^(ກ່ອນຄຣິສຕະສັກກະຫຼາດ|ຄຣິສຕະສັກກະຫຼາດ)/i,
};
const parseEraPatterns = {
  any: [/^[bB]/i, /^(^[aA]|ຄ\.?ສ\.?|ຄຣິສຕະສັກກະຫຼາດ)/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ໄຕຣມາດ(ທີ)? ?[1234]/i,
};
const parseQuarterPatterns = {
  any: [/(1|ທີ 1|ໜຶ່ງ)/i, /(2|ທີ 2|ສອງ)/i, /(3|ທີ 3|ສາມ)/i, /(4|ທີ 4|ສີ່)/i] as const,
};

const matchMonthPatterns = {
  narrow:
    /^(ມ\.?ກ\.?|ກ\.?ພ\.?|ມ\.?ນ\.?|ມ\.?ສ\.?|ພ\.?ສ\.?|ມ\.?ຖ\.?|ກ\.?ລ\.?|ສ\.?ຫ\.?|ກ\.?ຍ\.?|ຕ\.?ລ\.?|ພ\.?ຈ\.?|ທ\.?ວ\.?)/i,
  abbreviated:
    /^(ມ\.?ກ\.?|ກ\.?ພ\.?|ມ\.?ນ\.?|ມ\.?ສ\.?|ພ\.?ສ\.?|ມ\.?ຖ\.?|ກ\.?ລ\.?|ສ\.?ຫ\.?|ກ\.?ຍ\.?|ຕ\.?ລ\.?|ພ\.?ຈ\.?|ທ\.?ວ\.?)/i,
  wide: /^(ມັງກອນ|ກຸມພາ|ມີນາ|ເມສາ|ພຶດສະພາ|ມິຖຸນາ|ກໍລະກົດ|ສິງຫາ|ກັນຍາ|ຕຸລາ|ພະຈິກ|ທັນວາ)/i,
};
const parseMonthPatterns = {
  wide: [
    /^ມັງ/i,
    /^ກຸມ/i,
    /^ມີ/i,
    /^ເມ/i,
    /^ພຶດ/i,
    /^ມິ/i,
    /^ກໍ/i,
    /^ສິງ/i,
    /^ກັນ/i,
    /^ຕຸ/i,
    /^ພະ/i,
    /^ທັນ/i,
  ] as const,
  any: [
    /^ມ\.?ກ\.?/i,
    /^ກ\.?ພ\.?/i,
    /^ມ\.?ນ\.?/i,
    /^ມ\.?ສ\.?/i,
    /^ພ\.?ສ\.?/i,
    /^ມ\.?ຖ\.?/i,
    /^ກ\.?ລ\.?/i,
    /^ສ\.?ຫ\.?/i,
    /^ກ\.?ຍ\.?/i,
    /^ຕ\.?ລ\.?/i,
    /^ພ\.?ຈ\.?/i,
    /^ທ\.?ວ\.?/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^(ອ|ຈ|ຄ|ພ|ພຫ|ສ|ອ)/i,
  short: /^(ອທ|ຈ|ອຄ|ພ|ພຫ|ສກ|ສ)/i,
  abbreviated: /^(ອທ|ຈ|ອຄ|ພ|ພຫ|ສກ|ສ)/i,
  wide: /^(ວັນອາທິດ|ວັນຈັນ|ວັນອັງຄານ|ວັນພຸດ|ວັນພະຫັດ|ວັນສຸກ|ວັນເສົາ)/i,
};
const parseDayPatterns = {
  wide: [/^ອາ/i, /^ຈັນ/i, /^ອັງ/i, /^ພຸດ/i, /^ພະ/i, /^ສຸກ/i, /^ເສົາ/i] as const,
  any: [/^ອ/i, /^ຈ/i, /^ອັງ/i, /^ພຸ/i, /^ພະ/i, /^ສຸ/i, /^ເສົ/i] as const,
};

const matchDayPeriodPatterns = {
  any: /^(ກ່ອນທ່ຽງ|ຫຼັງທ່ຽງ|ທ່ຽງຄືນ|ທ່ຽງ|(ຕອນ.*?)?.*(ທ່ຽງ|ເຊົ້າ|ບ່າຍ|ແລງ|ກາງຄືນ))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^ກ່ອນທ່ຽງ/i,
    pm: /^ຫຼັງທ່ຽງ/i,
    midnight: /^ທ່ຽງຄືນ/i,
    noon: /^ທ່ຽງ/i,
    morning: /ເຊົ້າ/i,
    afternoon: /ບ່າຍ/i,
    evening: /ແລງ/i,
    night: /ກາງຄືນ/i,
  },
};

export const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};