import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

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
