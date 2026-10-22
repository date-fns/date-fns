import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)s?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(d|z)/i,
  abbreviated: /^(d\.?\s?m\.?|d\.?\s?i\.?\s?n\.?|z\.?\s?m\.?|i\.?\s?n\.?)/i,
  wide: /^(de misali|de ima ngoro|za misali|ima ngoro)/i,
};
const parseEraPatterns = {
  any: [/^d/i, /^(z|i)/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234] 4tel/i,
  wide: /^[1234]s? (kjeretel|kieretel|kyeretel)/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(neo|noi|ein|ajn|ain|hob|xob|ni|pran|uda|tre|uso|kje|kie|kye|erg|go|ver|fer|eks|kaj|kai|nan|vap|ka|sik|nin|nyn|ats|ach|bir|dens|sla|dene|dena|onz|sla|sha|jul|iul|yul|deni|denn|duz)/i,
  wide: /^(neomuaj|neomuai|noimuaj|noimuai|neiomuai|einsmuaj|einsmuai|ajnsmuaj|ajnsmuai|ainsmuaj|ainsmuai|hobitmuaj|hobitmuai|homuaj|homuai|xobitmuaj|xobitmuai|xomuai|nismuaj|nismuai|pranmuaj|pranmuai|udachimuaj|udachimuai|udatsimuaj|udatsimuai|udaqimuai|tresmuaj|tresmuai|usomuaj|usomuai|kjeresmuaj|kjeresmuai|kieresmuaj|kiereismuai|kyeresmuaj|kyeresmuai|ergomuaj|ergomuai|gosmuaj|gosmuai|veramuaj|veramuai|ferimuaj|ferimuai|eksismuaj|eksismuai|kajsarmuaj|kajsarmuai|kaisarmuaj|kaisairmuai|kajsamuaj|kajsamuai|kaisamuaj|kaisamuai|nanasmuaj|nanasmuai|vapamuaj|vapamuai|misalimuaj|misalimuai|kasismuaj|kasismuai|kashismuaj|kashismuai|siksimuaj|siksimuai|etimuaj|etimuai|skibimuaj|skibimuai|ninsmuaj|ninsmuai|nynsmuaj|nynsmuai|atsormuaj|atsormuai|atshormuaj|atshormuai|achormuaj|achormuai|biramuaj|biramuai|densmuaj|densmuai|slagmuaj|slagmuai|shagmuaj|shagmuai|shamuaj|shamuai|deneinsmuaj|deneinsmuai|denajnsmuaj|denajnsmuai|denainsmuaj|denainsmuai|onzesmuaj|onzesmuai|julmuaj|julmuai|iulmuaj|iulmuai|yulmuaj|yulmuai|vimuaj|vimuai|denismuaj|denismuai|dennismuaj|dennismuai|duzjasmuaj|duzjasmuai|duzyasmuaj|duzyasmuai)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^n/i, // neo
    /^h/i, // hob
    /^p/i, // pran
    /^u/i, // uso
    /^e/i, // erg
    /^v/i, // ver
    /^k/i, // kaj
    /^v/i, // vap
    /^s/i, // sik
    /^a/i, // ats
    /^s/i, // sla
    /^j/i, // jul
  ] as const,
  any: [
    /^(neo|noi|nei|ein|ajn|ain)/i,        // neo
    /^(ho|xo|ni)/i,                 // hob
    /^(pran|uda|tre)/i,               // pran
    /^(uso|kje|kie|kye)/i,                // uso
    /^(erg|go)/i,                 // erg
    /^(ver|fer|eks)/i,                // ver
    /^(kaj|kai|nan)/i,                // kaj
    /^(vap|mis|ka)/i,                 // vap
    /^(sik|eti|ski|nin|nyn)/i,            // sik
    /^(ats|ach|bir|dens)/i,           // ats
    /^(sla|sha|dene|dena|onz)/i,           // sla
    /^(jul|yul|iul|vim|deni|denn|duz)/i,      // jul
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[slihbgt]/i,
  short: /^(so|lu|is|ho|ba|ge|te)/i,
  abbreviated: /^(sol|lun|ish|hon|bau|gel|ter)/i,
  wide: /^(soldag|soldaag|iliosdag|iliosdaag|lunadag|lunadaag|lundag|lundaag|ishkedag|ishkedaag|honodag|honodaag|baumdag|baumdaag|geltdag|geltdaag|geldag|geldaag|gelddag|gelddaag|terdag|terdaag)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^l/i, /^i/i, /^h/i, /^b/i, /^g/i, /^t/i] as const,
  any: [/^(s|il)/i, /^l/i, /^is/i, /^h/i, /^b/i, /^g/i, /^t/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(mn|md|(na | ende) (mora|morag|dag|daag|kvel|gvel|gevel|ivel|naht|naat|nat|naxt))/i,
  any: /^(zmn|zmd|melanht|melannaht|melanaat|melannaat|melanat|melannat|melanaxt|melannaxt|melandag|melandaag|(na | ende) (mora|morag|dag|daag|kvel|gvel|gevel|ivel|naht|naat|nat|naxt))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^zmn/i,
    pm: /^zmd/i,
    midnight: /^(mn|melana|melann)/i,
    noon: /^(md|meland)/i,
    morning: /mor/i,
    afternoon: /da/i,
    evening: /(kv|gv|ge|iv)/i,
    night: /(nah|naa|nat|nax)/i,
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
