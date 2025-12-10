import { formatDistance } from "../sv/_lib/formatDistance/index.ts";
import { formatRelative } from "../sv/_lib/formatRelative/index.ts";
import { localize } from "../sv/_lib/localize/index.ts";
import { match } from "../sv/_lib/match/index.ts";
import type { Locale } from "../types.ts";
import { formatLong } from "./_lib/formatLong/index.ts";

/**
 * @category Locales
 * @summary Swedish-speaking-Finnish locale.
 * @language Swedish
 * @iso-639-2 swe
 * @author Timo Saikkonen [@timosaikkonen](https://github.com/timosaikkonen)
 */
export const svFI: Locale = {
	code: "sv-FI",
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
