import { toTpInstant } from "../_lib/tp/index.ts";
import { tpClosestIndexTo } from "../tp/closestIndexTo/index.ts";
import type { DateArg } from "../types.ts";

export function tpyClosestIndexTo(
  dateToCompare: DateArg<Date> & {},
  dates: Array<DateArg<Date> & {}>,
): number | undefined {
  const [temporal] = toTpInstant(dateToCompare);

  if (!temporal) return NaN;

  const temporalDates: Temporal.ZonedDateTime[] = [];
  for (const date of dates) {
    const [temporalDate] = toTpInstant(date);
    if (!temporalDate) return NaN;
    temporalDates.push(temporalDate);
  }

  return tpClosestIndexTo(temporal, temporalDates);
}
