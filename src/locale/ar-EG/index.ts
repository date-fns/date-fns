import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

/**
 * @category Locales
 * @summary Arabic locale (Egypt).
 * @language Arabic
 * @iso-639-2 ara
 * @author AbdAllah AbdElFattah [@AbdAllahAbdElFattah13](https://github.com/AbdAllahAbdElFattah13)
 */
export const arEG: Locale = {
  code: "ar-EG",
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
