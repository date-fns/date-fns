import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Filipino locale.
 * @language Filipino
 * @iso-639-2 fil
 * @author Lua Takeishi [@ltakeishi](https://github.com/ltakeishi)
 */
export const fil: Locale = {
  code: "fil-PH",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
};
