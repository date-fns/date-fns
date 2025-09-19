import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Turkish locale.
 * @language Turkish
 * @iso-639-2 tur
 * @author Alpcan Aydın [@alpcanaydin](https://github.com/alpcanaydin)
 * @author Berkay Sargın [@berkaey](https://github.com/berkaey)
 * @author Fatih Bulut [@bulutfatih](https://github.com/bulutfatih)
 * @author Ismail Demirbilek [@dbtek](https://github.com/dbtek)
 * @author İsmail Kayar [@ikayar](https://github.com/ikayar)
 *
 *
 */
export const tr: Locale = {
  code: "tr",
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
