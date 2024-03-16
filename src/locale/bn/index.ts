import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Bengali locale.
 * @language Bengali
 * @iso-639-2 ben
 * @author Touhidur Rahman [@touhidrahman](https://github.com/touhidrahman)
 * @author Farhad Yasir [@nutboltu](https://github.com/nutboltu)
 */
export const bn: Locale = {
  code: "bn",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};
