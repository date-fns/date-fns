// Same as fr
import { formatDistance } from "../fr/_lib/formatDistance/index.js";
import { localize } from "../fr/_lib/localize/index.js";
import { match } from "../fr/_lib/match/index.js";
import type { Locale } from "../types.js";
// Unique for fr-CH
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";

/**
 * @category Locales
 * @summary French locale (Switzerland).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau](https://github.com/izeau)
 * @author François B [@fbonzon](https://github.com/fbonzon)
 * @author Van Vuong Ngo [@vanvuongngo](https://github.com/vanvuongngo)
 * @author Alex Hoeing [@dcbn](https://github.com/dcbn)
 */
export const frCH: Locale = {
  code: "fr-CH",
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
