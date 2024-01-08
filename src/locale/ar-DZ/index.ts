import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";
import type { Locale } from "../types.js";

/**
 * @category Locales
 * @summary Arabic locale (Algerian Arabic).
 * @language Algerian Arabic
 * @iso-639-2 ara
 * @author Badreddine Boumaza [@badre429](https://github.com/badre429)
 * @author Ahmed ElShahat [@elshahat](https://github.com/elshahat)
 */
export const arDZ: Locale = {
  code: "ar-DZ",
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
