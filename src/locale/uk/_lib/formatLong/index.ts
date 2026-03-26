import type { FormatLong } from "../../../types.ts";
import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.ts";

const dateFormats = {
  full: "EEEE, do MMMM y 'р.'",
  long: "do MMMM y 'р.'",
  medium: "d MMM y 'р.'",
  short: "dd.MM.y",
};

const timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm",
};

const dateTimeFormats = {
  full: "{{date}} 'о' {{time}}",
  long: "{{date}} 'о' {{time}}",
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
