import { formatDistance } from "../en-US/_lib/formatDistance/index.js";
import { formatRelative } from "../en-US/_lib/formatRelative/index.js";
import { localize } from "../en-US/_lib/localize/index.js";
import { match } from "../en-US/_lib/match/index.js";
import type { Locale } from "../types.js";
import { formatLong } from "./_lib/formatLong/index.js";

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
