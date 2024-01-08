import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @language Chinese Simplified
 * @iso-639-2 zho
 * @author Changyu Geng [@KingMario](https://github.com/KingMario)
 * @author Song Shuoyun [@fnlctrl](https://github.com/fnlctrl)
 * @author sabrinaM [@sabrinamiao](https://github.com/sabrinamiao)
 * @author Carney Wu [@cubicwork](https://github.com/cubicwork)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 */
export const zhCN: Locale = {
  code: "zh-CN",
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
