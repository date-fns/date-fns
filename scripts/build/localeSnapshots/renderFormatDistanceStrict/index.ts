import { formatDistanceStrict } from "@wrkspc/src/formatDistanceStrict/index.ts";
import type { Locale } from "@wrkspc/src/types.ts";
import { baseDate, dates } from "../_lib/distanceDates.ts";

export default function renderFormatDistanceStrict(locale: Locale) {
  return `## \`formatDistanceStrict\`

If now is January 1st, 2000, 00:00.

| Date | Result | \`addSuffix: true\` | With forced unit (i.e. \`hour\`)
|-|-|-|-|
${dates
  .map((date) => {
    const dateString = date.toISOString();
    const result = formatDistanceStrict(date, baseDate, { locale });
    const resultAddSuffix = formatDistanceStrict(date, baseDate, {
      locale,
      addSuffix: true,
    });
    const resultForcedUnit = formatDistanceStrict(date, baseDate, {
      locale,
      unit: "hour",
    });
    return `| ${dateString} | ${result} | ${resultAddSuffix} | ${resultForcedUnit} |`;
  })
  .join("\n")}`;
}
