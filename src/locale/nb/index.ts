import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Norwegian Bokmål locale.
 * @language Norwegian Bokmål
 * @iso-639-2 nob
 * @author Hans-Kristian Koren [@Hanse](https://github.com/Hanse)
 * @author Mikolaj Grzyb [@mikolajgrzyb](https://github.com/mikolajgrzyb)
 * @author Dag Stuan [@dagstuan](https://github.com/dagstuan)
 */
export const nb: Locale = {
  code: "nb",
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
