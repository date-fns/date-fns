import { formatDistance } from "../de/_lib/formatDistance/index.ts";
import { formatLong } from "../de/_lib/formatLong/index.ts";
import { formatRelative } from "../de/_lib/formatRelative/index.ts";
import type { Locale } from "../types.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary German locale (Austria).
 * @language German
 * @iso-639-2 deu
 * @author Christoph Tobias Stenglein [@cstenglein](https://github.com/cstenglein)
 */
export const deAT: Locale = {
  code: "de-AT",
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
