import { formatDistance } from "../en-US/_lib/formatDistance/index.ts";
import { formatRelative } from "../en-US/_lib/formatRelative/index.ts";
import { localize } from "../en-US/_lib/localize/index.ts";
import { match } from "../en-US/_lib/match/index.ts";
import type { Locale } from "../types.ts";
import { formatLong } from "./_lib/formatLong/index.ts";

/**
 * @category Locales
 * @summary English locale (South Africa).
 * @language English
 * @iso-639-2 eng
 * @author Shaila Kavrakova [@shaykav](https://github.com/shaykav)
 */
export const enZA: Locale = {
  code: "en-ZA",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0, // Sunday is the first day of the week.
    firstWeekContainsDate: 1, // The week that contains Jan 1st is the first week of the year.
  },
};
