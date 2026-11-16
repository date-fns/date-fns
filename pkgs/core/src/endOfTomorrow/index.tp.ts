import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEndOfRelativeDay } from "../tp/_lib/endOfRelativeDay/index.ts";
import type { EndOfTomorrowOptions } from "./index.ts";

export function tpyEndOfTomorrow<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(options?: EndOfTomorrowOptions<ResultDate> | undefined): ResultDate {
  const now = Date.now();
  const [temporal, invalidDate] = toTpInstant(now, options);
  if (!temporal) return invalidDate;
  return fromTp(tpEndOfRelativeDay(temporal, 1), now, options);
}
