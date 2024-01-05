import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Galician locale.
 * @language Galician
 * @iso-639-2 glg
 * @author Alberto Doval - Cocodin Technology[@cocodinTech](https://github.com/cocodinTech)
 * @author Fidel Pita [@fidelpita](https://github.com/fidelpita)
 */
export const gl: Locale = {
  code: "gl",
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
