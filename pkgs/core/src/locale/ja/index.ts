import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

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
