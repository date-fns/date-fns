import { formatDistance } from "../en-US/_lib/formatDistance/index.ts";
import { formatRelative } from "../en-US/_lib/formatRelative/index.ts";
import { localize } from "../en-US/_lib/localize/index.ts";
import { match } from "../en-US/_lib/match/index.ts";
import type { Locale } from "../types.ts";
import { formatLong } from "../en-GB/_lib/formatLong/index.ts";

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
