import type { Locale } from "../types.js";
import { formatDistance } from "../it/_lib/formatDistance/index.js";
import { formatRelative } from "../it/_lib/formatRelative/index.js";
import { localize } from "../it/_lib/localize/index.js";
import { match } from "../it/_lib/match/index.js";
import { formatLong } from "./_lib/formatLong/index.js";

/**
 * @category Locales
 * @summary Italian locale (Switzerland).
 * @language Italian
 * @iso-639-2 ita
 * @author Mike Peyer [@maic66](https://github.com/maic66)
 */
export const itCH: Locale = {
  code: "it-CH",
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
