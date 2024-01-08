import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

// Ref: https://www.unicode.org/cldr/charts/32/summary/ta.html

const eraValues = {
  narrow: ["கி.மு.", "கி.பி."] as const,
  abbreviated: ["கி.மு.", "கி.பி."] as const, // CLDR #1624, #1626
  wide: ["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"] as const, // CLDR #1620, #1622
};

const quarterValues = {
  // CLDR #1644 - #1647
  narrow: ["1", "2", "3", "4"] as const,
  // CLDR #1636 - #1639
  abbreviated: ["காலா.1", "காலா.2", "காலா.3", "காலா.4"] as const,
  // CLDR #1628 - #1631
  wide: [
    "ஒன்றாம் காலாண்டு",
    "இரண்டாம் காலாண்டு",
    "மூன்றாம் காலாண்டு",
    "நான்காம் காலாண்டு",
  ] as const,
};

const monthValues = {
  // CLDR #700 - #711
  narrow: [
    "ஜ",
    "பி",
    "மா",
    "ஏ",
    "மே",
    "ஜூ",
    "ஜூ",
    "ஆ",
    "செ",
    "அ",
    "ந",
    "டி",
  ] as const,
  // CLDR #1676 - #1687
  abbreviated: [
    "ஜன.",
    "பிப்.",
    "மார்.",
    "ஏப்.",
    "மே",
    "ஜூன்",
    "ஜூலை",
    "ஆக.",
    "செப்.",
    "அக்.",
    "நவ.",
    "டிச.",
  ] as const,
  // CLDR #1652 - #1663
  wide: [
    "ஜனவரி", // January
    "பிப்ரவரி", // February
    "மார்ச்", // March
    "ஏப்ரல்", // April
    "மே", // May
    "ஜூன்", // June
    "ஜூலை", // July
    "ஆகஸ்ட்", // August
    "செப்டம்பர்", // September
    "அக்டோபர்", // October
    "நவம்பர்", // November
    "டிசம்பர்", // December
  ] as const,
};

const dayValues = {
  // CLDR #1766 - #1772
  narrow: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"] as const,
  // CLDR #1752 - #1758
  short: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"] as const,
  // CLDR #1738 - #1744
  abbreviated: [
    "ஞாயி.",
    "திங்.",
    "செவ்.",
    "புத.",
    "வியா.",
    "வெள்.",
    "சனி",
  ] as const,
  // CLDR #1724 - #1730
  wide: [
    "ஞாயிறு", // Sunday
    "திங்கள்", // Monday
    "செவ்வாய்", // Tuesday
    "புதன்", // Wednesday
    "வியாழன்", // Thursday
    "வெள்ளி", // Friday
    "சனி", // Saturday
  ] as const,
};

// CLDR #1780 - #1845
const dayPeriodValues = {
  narrow: {
    am: "மு.ப",
    pm: "பி.ப",
    midnight: "நள்.",
    noon: "நண்.",
    morning: "கா.",
    afternoon: "மதி.",
    evening: "மா.",
    night: "இர.",
  },
  abbreviated: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு",
  },
  wide: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு",
  },
};

// CLDR #1780 - #1845
const formattingDayPeriodValues = {
  narrow: {
    am: "மு.ப",
    pm: "பி.ப",
    midnight: "நள்.",
    noon: "நண்.",
    morning: "கா.",
    afternoon: "மதி.",
    evening: "மா.",
    night: "இர.",
  },
  abbreviated: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு",
  },
  wide: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு",
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
