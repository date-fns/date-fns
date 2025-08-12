import type { Locale } from "../types.ts";
import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";

/**
 * @category Locales
 * @summary Czech locale.
 * @language Czech
 * @iso-639-2 ces
 * @author David Rus [@davidrus](https://github.com/davidrus)
 * @author Pavel Hrách [@SilenY](https://github.com/SilenY)
 * @author Jozef Bíroš [@JozefBiros](https://github.com/JozefBiros)
 */
export const cs: Locale = {
  code: "cs",
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
