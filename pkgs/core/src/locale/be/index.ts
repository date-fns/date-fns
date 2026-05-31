import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Belarusian locale.
 * @language Belarusian
 * @iso-639-2 bel
 * @author Kiryl Anokhin [@alyrik](https://github.com/alyrik)
 * @author Martin Wind [@arvigeus](https://github.com/mawi12345)
 */
export const be: Locale = {
  code: "be",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
};
