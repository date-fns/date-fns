import type { FormatLong } from "../../../types.js";
import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.js";

const dateFormats = {
  full: "ວັນEEEEທີ do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy",
};

const timeFormats = {
  full: "H:mm:ss ໂມງ zzzz",
  long: "H:mm:ss ໂມງ z",
  medium: "H:mm:ss ໂມງ",
  short: "H:mm ໂມງ",
};

const dateTimeFormats = {
  full: "{{date}} 'ເວລາ' {{time}}",
  long: "{{date}} 'ເວລາ' {{time}}",
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
    defaultWidth: "medium",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};