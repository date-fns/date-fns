import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Macedonian locale.
 * @language Macedonian
 * @iso-639-2 mkd
 * @author Petar Vlahu [@vlahupetar](https://github.com/vlahupetar)
 * @author Altrim Beqiri [@altrim](https://github.com/altrim)
 */
export const mk: Locale = {
  code: "mk",
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
