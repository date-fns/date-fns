import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Malagasy locale.
 * @language Malagasy
 * @iso-639-2 mlg
 * @author Mohammad Aamir Patloo [@aamirpatloo](https://github.com/aamirpatloo)
 */
export const mg: Locale = {
  code: "mg",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1,
  },
};
