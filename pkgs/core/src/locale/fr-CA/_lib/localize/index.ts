import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";
import type { Localize } from "../../../types.ts";

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juill.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ] as const,
  wide: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ] as const,
};

export const localize: Partial<Localize> = {
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),
};
