import { formatDistance } from "../en-US/_lib/formatDistance/index.ts";
import { formatRelative } from "../en-US/_lib/formatRelative/index.ts";
import { localize } from "../en-US/_lib/localize/index.ts";
import { match } from "../en-US/_lib/match/index.ts";
import type { Locale } from "../types.ts";
import { formatLong } from "./_lib/formatLong/index.ts";

/**
 * @category Locales
 * @summary English locale (India).
 * @language English
 * @iso-639-2 eng
 * @author Galeel Bhasha Satthar [@gbhasha](https://github.com/gbhasha)
 */
export const enIN: Locale = {
  code: "en-IN",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1, // Monday is the first day of the week.
    firstWeekContainsDate: 4, // The week that contains Jan 4th is the first week of the year.
  },
};
