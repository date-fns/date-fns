import { formatRelative } from "../en-US/_lib/formatRelative/index.js";
import { localize } from "../en-US/_lib/localize/index.js";
import { match } from "../en-US/_lib/match/index.js";
import type { Locale } from "../types.js";
import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";

/**
 * @category Locales
 * @summary English locale (Canada).
 * @language English
 * @iso-639-2 eng
 * @author Mark Owsiak [@markowsiak](https://github.com/markowsiak)
 * @author Marco Imperatore [@mimperatore](https://github.com/mimperatore)
 */
export const enCA: Locale = {
  code: "en-CA",
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
