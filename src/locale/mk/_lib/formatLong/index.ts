import type { FormatLong } from "../../../types.ts";
import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.ts";

const dateFormats = {
  full: "EEEE, dd MMMM yyyy",
  long: "dd MMMM yyyy",
  medium: "dd MMM yyyy",
  short: "dd/MM/yyyy",
};

const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
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
