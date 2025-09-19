import type { Locale } from "../types.ts";
import { formatDistance } from "../it/_lib/formatDistance/index.ts";
import { formatRelative } from "../it/_lib/formatRelative/index.ts";
import { localize } from "../it/_lib/localize/index.ts";
import { match } from "../it/_lib/match/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";

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
