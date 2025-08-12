import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Swedish locale.
 * @language Swedish
 * @iso-639-2 swe
 * @author Johannes Ulén [@ejulen](https://github.com/ejulen)
 * @author Alexander Nanberg [@alexandernanberg](https://github.com/alexandernanberg)
 * @author Henrik Andersson [@limelights](https://github.com/limelights)
 */
export const sv: Locale = {
  code: "sv",
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
