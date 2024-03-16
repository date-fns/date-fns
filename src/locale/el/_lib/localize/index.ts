import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["πΧ", "μΧ"] as const,
  abbreviated: ["π.Χ.", "μ.Χ."] as const,
  wide: ["προ Χριστού", "μετά Χριστόν"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"] as const,
  wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"] as const,
};

const monthValues = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"] as const,
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μάρ",
    "Απρ",
    "Μάι",
    "Ιούν",
    "Ιούλ",
    "Αύγ",
    "Σεπ",
    "Οκτ",
    "Νοέ",
    "Δεκ",
  ] as const,
  wide: [
    "Ιανουάριος",
    "Φεβρουάριος",
    "Μάρτιος",
    "Απρίλιος",
    "Μάιος",
    "Ιούνιος",
    "Ιούλιος",
    "Αύγουστος",
    "Σεπτέμβριος",
    "Οκτώβριος",
    "Νοέμβριος",
    "Δεκέμβριος",
  ] as const,
};

const formattingMonthValues = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"] as const,
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μαρ",
    "Απρ",
    "Μαΐ",
    "Ιουν",
    "Ιουλ",
    "Αυγ",
    "Σεπ",
    "Οκτ",
    "Νοε",
    "Δεκ",
  ] as const,
  wide: [
    "Ιανουαρίου",
    "Φεβρουαρίου",
    "Μαρτίου",
    "Απριλίου",
    "Μαΐου",
    "Ιουνίου",
    "Ιουλίου",
    "Αυγούστου",
    "Σεπτεμβρίου",
    "Οκτωβρίου",
    "Νοεμβρίου",
    "Δεκεμβρίου",
  ] as const,
};

const dayValues = {
  narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"] as const,
  short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"] as const,
  abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"] as const,
  wide: [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "πμ",
    pm: "μμ",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα",
  },
  abbreviated: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα",
  },
  wide: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;
  let suffix;

  if (unit === "year" || unit === "month") {
    suffix = "ος";
  } else if (
    unit === "week" ||
    unit === "dayOfYear" ||
    unit === "day" ||
    unit === "hour" ||
    unit === "date"
  ) {
    suffix = "η";
  } else {
    suffix = "ο";
  }

  return number + suffix;
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
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
