import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Icelandic locale.
 * @language Icelandic
 * @iso-639-2 isl
 * @author Derek Blank [@derekblank](https://github.com/derekblank)
 * @author Arnór Ýmir [@lamayg](https://github.com/lamayg)
 */
export const is: Locale = {
  code: "is",
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
