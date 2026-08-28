import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

/**
 * @category Locales
 * @summary German locale.
 * @language German
 * @iso-639-2 deu
 * @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
 * @author Asia [@asia-t](https://github.com/asia-t)
 * @author Van Vuong Ngo [@vanvuongngo](https://github.com/vanvuongngo)
 * @author RomanErnst [@pex](https://github.com/pex)
 * @author Philipp Keck [@Philipp91](https://github.com/Philipp91)
 */
export const de: Locale = {
  code: "de",
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
