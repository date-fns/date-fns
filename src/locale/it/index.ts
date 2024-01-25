import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Italian locale.
 * @language Italian
 * @iso-639-2 ita
 * @author Alberto Restifo [@albertorestifo](https://github.com/albertorestifo)
 * @author Giovanni Polimeni [@giofilo](https://github.com/giofilo)
 * @author Vincenzo Carrese [@vin-car](https://github.com/vin-car)
 */
export const it: Locale = {
  code: "it",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
};
