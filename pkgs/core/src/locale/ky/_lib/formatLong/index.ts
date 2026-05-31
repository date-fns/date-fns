import type { FormatLong } from "../../../types.ts";
import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.ts";

const dateFormats = {
  full: "EEEE, d-MMMM y",
  long: "d-MMMM y",
  medium: "d-MMM y",
  short: "dd.MM.yyyy",
};

const timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm",
};

const dateTimeFormats = {
  any: "{{date}} {{time}}",
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
    defaultWidth: "any",
  }),
};
