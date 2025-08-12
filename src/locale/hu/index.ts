import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Hungarian locale.
 * @language Hungarian
 * @iso-639-2 hun
 * @author Pavlo Shpak [@pshpak](https://github.com/pshpak)
 * @author Eduardo Pardo [@eduardopsll](https://github.com/eduardopsll)
 * @author Zoltan Szepesi [@twodcube](https://github.com/twodcube)
 */
export const hu: Locale = {
  code: "hu",
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
