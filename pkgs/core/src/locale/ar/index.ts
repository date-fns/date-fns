import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

/**
 * @category Locales
 * @summary Arabic locale (Modern Standard Arabic - Al-fussha).
 * @language Modern Standard Arabic
 * @iso-639-2 ara
 * @author Abdallah Hassan [@AbdallahAHO](https://github.com/AbdallahAHO)
 * @author Koussay Haj Kacem [@essana3](https://github.com/essana3)
 */
export const ar: Locale = {
  code: "ar",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 6 /* Saturday */,
    firstWeekContainsDate: 1,
  },
};
