import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

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
