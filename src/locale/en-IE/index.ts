import { formatDistance } from "../en-US/_lib/formatDistance/index.js";
import { formatRelative } from "../en-US/_lib/formatRelative/index.js";
import { localize } from "../en-US/_lib/localize/index.js";
import { match } from "../en-US/_lib/match/index.js";
import type { Locale } from "../types.js";
import { formatLong } from "../en-GB/_lib/formatLong/index.js";

/**
 * @category Locales
 * @summary English locale (Ireland).
 * @language English
 * @iso-639-2 eng
 * @author Tetiana [@tan75](https://github.com/tan75)
 */
export const enIE: Locale = {
  code: "en-IE",
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
