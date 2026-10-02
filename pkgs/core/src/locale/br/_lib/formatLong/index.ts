import type { FormatLong } from "../../../types.ts";
import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.ts";

// Date and time follow the recommendations of the Ofis Publik ar Brezhoneg:
// https://www.fr.brezhoneg.bzh/178-decisions-et-recommandations-du-conseil-scientifique.htm
// - dates are written "Meurzh 19 a viz Gwengolo 2023"
// - the 24-hour clock is not used, a.m. and g.m. tell the two halves of the day apart.
const dateFormats = {
  full: "EEEE d 'a viz' MMMM y",
  long: "d 'a viz' MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'da' {{time}}",
  long: "{{date}} 'da' {{time}}",
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
