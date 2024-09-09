import { constructFrom } from "../../constructFrom";
import { type DateFns } from "../../types.js";

export function normalizeDates(
  context: DateFns.ContextFn<Date> | undefined,
  ...dates: [DateFns.Arg, DateFns.Arg, DateFns.Arg]
): [Date, Date, Date];

export function normalizeDates(
  context: DateFns.ContextFn<Date> | undefined,
  ...dates: [DateFns.Arg, DateFns.Arg]
): [Date, Date];

export function normalizeDates(
  context: DateFns.ContextFn<Date> | undefined,
  ...dates: DateFns.Arg[]
): Date[];

export function normalizeDates(
  context: DateFns.ContextFn<Date> | undefined,
  ...dates: DateFns.Arg[]
) {
  const normalize =
    context ||
    constructFrom.bind(
      null,
      dates.find((date) => typeof date === "object"),
    );
  return dates.map(normalize);
}
