import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpClamp } from "../tp/clamp/index.ts";
import type { DateArg, Interval } from "../types.ts";
import type { ClampOptions, ClampResult } from "./index.ts";

export function tpyClamp<
  DateType extends DateArg<Date>,
  IntervalType extends Interval,
  Options extends ClampOptions | undefined = undefined,
>(
  date: DateType,
  interval: IntervalType,
  options?: Options,
): ClampResult<DateType, IntervalType, Options> {
  const [date_, start, end] = normalizeDates(
    options?.in,
    date,
    interval.start,
    interval.end,
  );
  const [temporal, invalidDate] = toTpInstant(date_);
  const [temporalStart] = toTpInstant(start);
  const [temporalEnd] = toTpInstant(end);

  if (!temporal || !temporalStart || !temporalEnd)
    return invalidDate as ClampResult<DateType, IntervalType, Options>;

  const result = tpClamp(temporal, temporalStart, temporalEnd);

  return fromTp(result, date_);
}
