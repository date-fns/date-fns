import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Hindi locale (India).
 * @language Hindi
 * @iso-639-2 hin
 * @author Mukesh Mandiwal [@mukeshmandiwal](https://github.com/mukeshmandiwal)
 */
export const hi: Locale = {
  code: "hi",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Monday */,
    firstWeekContainsDate: 4,
  },
};
