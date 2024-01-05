import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.js";
import type { FormatLong } from "../../../types.js";

const dateFormats = {
  full: "EEEE، do MMMM y",
  long: "do MMMM y",
  medium: "dd/MMM/y",
  short: "d/MM/y",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'الساعة' {{time}}",
  long: "{{date}} 'الساعة' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
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
