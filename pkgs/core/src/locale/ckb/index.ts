import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

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
