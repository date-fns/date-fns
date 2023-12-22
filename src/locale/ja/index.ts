import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";
import type { Locale } from "../types.js";

/**
 * @category Locales
 * @summary Japanese locale.
 * @language Japanese
 * @iso-639-2 jpn
 * @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
 * @author Yamagishi Kazutoshi [@ykzts](https://github.com/ykzts)
 * @author Luca Ban [@mesqueeb](https://github.com/mesqueeb)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 * @author Taiki IKeda [@so99ynoodles](https://github.com/so99ynoodles)
 */
export const ja: Locale = {
  code: "ja",
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
