import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)(-?(rë|të|t))?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(p\.?\s?k\.?|mb\.?\s?k\.?)/i,
  abbreviated: /^(p\.?\s?k\.?|mb\.?\s?k\.?)/i,
  wide: /^(para krishtit|mbas krishtit)/i,
};
const parseEraPatterns = {
  any: [/^p/i, /^m/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^tremujori (iv|i{1,3})/i,
  wide: /^tremujori i (parë|dytë|tretë|katërt|[1234]-(rë|të|t))/i,
};
const parseQuarterPatterns = {
  any: [
    /(^|\s)(i|parë|1(-rë)?)$/i,
    /(^|\s)(ii|dytë|2(-të)?)$/i,
    /(^|\s)(iii|tretë|3(-të)?)$/i,
    /(^|\s)(iv|katërt|4(-t)?)$/i,
  ] as const,
};

const matchMonthPatterns = {
  narrow: /^(sh|dh|[jsmpqkgtnd])/i,
  abbreviated: /^(jan|shk|mar|pri|maj|qer|korr?|gush?|sht|tet|nën|dhj)/i,
  wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^s/i,
    /^m/i,
    /^p/i,
    /^m/i,
    /^q/i,
    /^k/i,
    /^g/i,
    /^s/i,
    /^t/i,
    /^n/i,
    /^d/i,
  ] as const,
  any: [
    /^ja/i,
    /^shk/i,
    /^mar/i,
    /^pri/i,
    /^maj/i,
    /^qer/i,
    /^kor/i,
    /^gu/i,
    /^sht/i,
    /^tet/i,
    /^n/i,
    /^d/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^(sh|[dhmeps])/i,
  short: /^(die|hën|mar|mër|enj|pre|sht|di|hë|ma|më|en|pr|sh)/i,
  abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i,
  wide: /^(e\s+)?(dielë?|hënë|martë|mërkurë|enjte|premte|shtunë)/i,
};
const parseDayPatterns = {
  narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i] as const,
  any: [
    /^(e\s+)?d/i,
    /^(e\s+)?h/i,
    /^(e\s+)?ma/i,
    /^(e\s+)?më/i,
    /^(e\s+)?en/i,
    /^(e\s+)?p/i,
    /^(e\s+)?s/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  any: /^([pm]\.?\s?d\.?|(e\s+)?(mesnat(ës|ë)|mesdit(ës|ë)|mëngjes(it)?|paradit(es|e)|pasdit(es|e)|mbrëmj(es|e)|nat(ës|ë)))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^(p\.?\s?d|(e\s+)?paradit)/i,
    pm: /^(m\.?\s?d|(e\s+)?pasdit)/i,
    midnight: /mesnat/i,
    noon: /mesdit/i,
    morning: /mëngjes/i,
    afternoon: /pasdit/i,
    evening: /mbrëmj/i,
    night: /nat/i,
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
