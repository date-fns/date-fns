import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Dutch locale.
 * @language Dutch
 * @iso-639-2 nld
 * @author Jorik Tangelder [@jtangelder](https://github.com/jtangelder)
 * @author Ruben Stolk [@rubenstolk](https://github.com/rubenstolk)
 * @author Lode Vanhove [@bitcrumb](https://github.com/bitcrumb)
 * @author Edo Rivai [@edorivai](https://github.com/edorivai)
 * @author Niels Keurentjes [@curry684](https://github.com/curry684)
 * @author Stefan Vermaas [@stefanvermaas](https://github.com/stefanvermaas)
 */
export const nl: Locale = {
  code: "nl",
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
