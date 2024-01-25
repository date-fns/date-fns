import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(.)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(k.a.|k.o.)/i,
  abbreviated: /^(k.a.|k.o.)/i,
  wide: /^(kristo aurretik|kristo ondoren)/i,
};
const parseEraPatterns = {
  narrow: [/^k.a./i, /^k.o./i] as const,
  abbreviated: [/^(k.a.)/i, /^(k.o.)/i] as const,
  wide: [/^(kristo aurretik)/i, /^(kristo ondoren)/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]H/i,
  wide: /^[1234](.)? hiruhilekoa/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[uomaei]/i,
  abbreviated: /^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,
  wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^u/i,
    /^o/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^e/i,
    /^u/i,
    /^a/i,
    /^i/i,
    /^u/i,
    /^a/i,
    /^a/i,
  ] as const,
  any: [
    /^urt/i,
    /^ots/i,
    /^mar/i,
    /^api/i,
    /^mai/i,
    /^eka/i,
    /^uzt/i,
    /^abu/i,
    /^ira/i,
    /^urr/i,
    /^aza/i,
    /^abe/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[iaol]/i,
  short: /^(ig|al|as|az|og|or|lr)/i,
  abbreviated: /^(iga|ast|ast|ast|ost|ost|lar)/i,
  wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i,
};
const parseDayPatterns = {
  narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i] as const,
  short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i] as const,
  abbreviated: [
    /^iga/i,
    /^ast/i,
    /^ast/i,
    /^ast/i,
    /^ost/i,
    /^ost/i,
    /^lar/i,
  ] as const,
  wide: [
    /^igandea/i,
    /^astelehena/i,
    /^asteartea/i,
    /^asteazkena/i,
    /^osteguna/i,
    /^ostirala/i,
    /^larunbata/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,
  any: /^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,
};
const parseDayPeriodPatterns = {
  narrow: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^ge/i,
    noon: /^eg/i,
    morning: /goiz/i,
    afternoon: /arratsaldea/i,
    evening: /arratsaldea/i,
    night: /gau/i,
  },
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^gauerdia/i,
    noon: /^eguerdia/i,
    morning: /goiz/i,
    afternoon: /arratsaldea/i,
    evening: /arratsaldea/i,
    night: /gau/i,
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
    defaultParseWidth: "wide",
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
    defaultParseWidth: "wide",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
