import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

/**
 * @category Locales
 * @summary Arabic locale (Moroccan Arabic).
 * @language Moroccan Arabic
 * @iso-639-2 ara
 * @author Achraf Rrami [@rramiachraf](https://github.com/rramiachraf)
 */
export const arMA: Locale = {
  code: "ar-MA",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    // Monday is 1
    weekStartsOn: 1,
    firstWeekContainsDate: 1,
  },
};
