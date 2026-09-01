import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { tpyClosestIndexTo } from "../closestIndexTo/index.tp.ts";
import { tpyConstructFrom } from "../constructFrom/index.tp.ts";
import type { DateArg } from "../types.ts";
import type { ClosestToOptions, ClosestToResult } from "./index.ts";

export function tpyClosestTo<
  DateToCompare extends DateArg<Date>,
  DatesType extends DateArg<Date>[],
  Options extends ClosestToOptions | undefined = undefined,
>(
  dateToCompare: DateToCompare,
  dates: DatesType,
  options?: Options | undefined,
): ClosestToResult<DateToCompare, DatesType, Options> | undefined {
  const [dateToCompare_, ...dates_] = normalizeDates(
    options?.in,
    dateToCompare,
    ...dates,
  );

  const index = tpyClosestIndexTo(dateToCompare_, dates_);

  if (typeof index === "number" && isNaN(index))
    return tpyConstructFrom(dateToCompare_, NaN) as ClosestToResult<
      DateToCompare,
      DatesType,
      Options
    >;

  if (index !== undefined)
    return dates_[index] as ClosestToResult<DateToCompare, DatesType, Options>;
}
