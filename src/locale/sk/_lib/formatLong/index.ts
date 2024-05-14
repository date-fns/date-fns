import type { FormatLong } from "../../../types.js";
import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.js";

// https://www.unicode.org/cldr/charts/44/summary/sk.html#4d988ef42af07ea2
const dateFormats = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. M. y",
  short: "d. M. y",
};

// https://www.unicode.org/cldr/charts/44/summary/sk.html#683ddbe8510f73c
const timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm",
};

// https://www.unicode.org/cldr/charts/44/summary/sk.html#68725f8fff1b6db9
const dateTimeFormats = {
  full: "{{date}}, {{time}}",
  long: "{{date}}, {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}} {{time}}",
};

export const formatLong: FormatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};
