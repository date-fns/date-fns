import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @type {Locale}
 * @category Locales
 * @summary Central Kurdish locale.
 * @language Central Kurdish
 * @iso-639-2 kur
 * @author Revan Sarbast [@Revan99]{@link https://github.com/Revan99}
 */
export const ckb: Locale = {
  code: "ckb",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};
