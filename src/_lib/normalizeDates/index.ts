import { constructFrom } from "../../constructFrom/index.js";
import type { ContextFn, DateArg } from "../../types.js";

export function normalizeDates(
  context: ContextFn<Date> | undefined,
  ...dates: [DateArg<Date>, DateArg<Date>, DateArg<Date>]
): [Date, Date, Date];

export function normalizeDates(
  context: ContextFn<Date> | undefined,
  ...dates: [DateArg<Date>, DateArg<Date>]
): [Date, Date];

export function normalizeDates(
  context: ContextFn<Date> | undefined,
  ...dates: Array<DateArg<Date> & {}>
): Date[];

export function normalizeDates(
  context: ContextFn<Date> | undefined,
  ...dates: Array<DateArg<Date> & {}>
) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}
