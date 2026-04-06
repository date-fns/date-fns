import { formatRelative } from "@wrkspc/src/formatRelative/index.ts";
import type { Locale } from "@wrkspc/src/types.ts";
import { baseDate, relativeDates } from "../_lib/distanceDates.ts";

export default function renderFormatRelative(locale: Locale) {
  return `## \`formatRelative\`

If now is January 1st, 2000, 00:00.

| Date | Result |
|-|-|
${relativeDates
  .map((date) => {
    const dateString = date.toISOString();
    let result;
    try {
      result = formatRelative(date, baseDate, { locale });
    } catch (_err) {
      result = "Errored";
    }
    return `| ${dateString} | ${result} |`;
  })
  .join("\n")}`;
}
