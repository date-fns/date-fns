import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Maltese locale.
 * @language Maltese
 * @iso-639-2 mlt
 * @author Andras Matzon [@amatzon](@link https://github.com/amatzon)
 * @author Bryan Borg [@bryanMt](@link https://github.com/bryanMt)
 */
export const mt: Locale = {
  code: "mt",
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
