import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Korean locale.
 * @language Korean
 * @iso-639-2 kor
 * @author Hong Chulju [@angdev](https://github.com/angdev)
 * @author Lee Seoyoen [@iamssen](https://github.com/iamssen)
 * @author Taiki IKeda [@so99ynoodles](https://github.com/so99ynoodles)
 */
export const ko: Locale = {
  code: "ko",
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
