import { formatDistance } from "../../../../src/formatDistance/index.js";
import type { Locale } from "../../../../src/types.js";
import { baseDate, dates } from "../_lib/distanceDates.js";

export default function renderFormatDistance(locale: Locale) {
  return `## \`formatDistance\`

If now is January 1st, 2000, 00:00.

| Date | Result | \`includeSeconds: true\` | \`addSuffix: true\` |
|-|-|-|-|
${dates
  .map((date) => {
    const dateString = date.toISOString();
    const result = formatDistance(date, baseDate, { locale });
    const resultIncludeSeconds = formatDistance(date, baseDate, {
      locale,
      includeSeconds: true,
    });
    const resultAddSuffix = formatDistance(date, baseDate, {
      locale,
      addSuffix: true,
    });
    return `| ${dateString} | ${result} | ${resultIncludeSeconds} | ${resultAddSuffix} |`;
  })
  .join("\n")}`;
}
