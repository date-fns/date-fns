import { formatDistance } from "./_lib/formatDistance/index.ts";
import { formatLong } from "./_lib/formatLong/index.ts";
import { formatRelative } from "./_lib/formatRelative/index.ts";
import { localize } from "./_lib/localize/index.ts";
import { match } from "./_lib/match/index.ts";
import type { Locale } from "../types.ts";

/**
 * @category Locales
 * @summary Spanish locale.
 * @language Spanish
 * @iso-639-2 spa
 * @author Juan Angosto [@juanangosto](https://github.com/juanangosto)
 * @author Guillermo Grau [@guigrpa](https://github.com/guigrpa)
 * @author Fernando Agüero [@fjaguero](https://github.com/fjaguero)
 * @author Gastón Haro [@harogaston](https://github.com/harogaston)
 * @author Yago Carballo [@YagoCarballo](https://github.com/YagoCarballo)
 */
export const es: Locale = {
  code: "es",
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
