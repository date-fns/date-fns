import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Ukrainian locale.
 * @language Ukrainian
 * @iso-639-2 ukr
 * @author Andrii Korzh [@korzhyk](https://github.com/korzhyk)
 * @author Andriy Shcherbyak [@shcherbyakdev](https://github.com/shcherbyakdev)
 */
export const uk: Locale = {
  code: "uk",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
};
