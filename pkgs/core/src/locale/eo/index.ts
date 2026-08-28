import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

/**
 * @category Locales
 * @summary Esperanto locale.
 * @language Esperanto
 * @iso-639-2 epo
 * @author date-fns
 */
export const eo: Locale = {
  code: "eo",
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
