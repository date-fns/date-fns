import { toTpInstant } from "../_lib/tp/index.ts";
import { constructFrom } from "../constructFrom/index.ts";
import { tpIsSaturday } from "../tp/isSaturday/index.ts";
import { tpIsSunday } from "../tp/isSunday/index.ts";
import { tpIsWeekend } from "../tp/isWeekend/index.ts";
import type { DateArg } from "../types.ts";
import type { AddBusinessDaysOptions } from "./index.ts";

export function tpyAddBusinessDays<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddBusinessDaysOptions<ResultDate> | undefined,
): ResultDate {
  let [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal || isNaN(amount)) return invalidDate;

  const startedOnWeekend = tpIsWeekend(temporal);
  const hours = temporal.hour;
  const sign = amount < 0 ? -1 : 1;
  const fullWeeks = Math.trunc(amount / 5);

  temporal = temporal.add({ days: fullWeeks * 7 });

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % 5);

  // Loops over remaining days
  while (restDays > 0) {
    temporal = temporal.add({ days: sign });
    if (!tpIsWeekend(temporal)) restDays -= 1;
  }

  // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day
  if (startedOnWeekend && tpIsWeekend(temporal) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if (tpIsSaturday(temporal))
      temporal = temporal.add({ days: sign < 0 ? 2 : -1 });
    if (tpIsSunday(temporal))
      temporal = temporal.add({ days: sign < 0 ? 1 : -2 });
  }

  // Restore hours to avoid DST lag
  temporal = temporal.with({ hour: hours });

  return constructFrom(options?.in || date, temporal.epochMilliseconds);
}
