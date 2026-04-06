import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Chinese Traditional locale.
 * @language Chinese Traditional
 * @iso-639-2 zho
 * @author tonypai [@tpai](https://github.com/tpai)
 * @author Jack Hsu [@jackhsu978](https://github.com/jackhsu978)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 */
export const zhTW: Locale = {
  code: "zh-TW",
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
