import { formatDistance } from "../de/_lib/formatDistance/index.js";
import { formatLong } from "../de/_lib/formatLong/index.js";
import { formatRelative } from "../de/_lib/formatRelative/index.js";
import { match } from "../de/_lib/match/index.js";
import type { Locale } from "../types.js";
// difference to 'de' locale
import { localize } from "./_lib/localize/index.js";

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
