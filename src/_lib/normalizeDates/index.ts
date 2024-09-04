import { constructFrom } from "../../constructFrom";
import { type DateFns } from "../../types.js";

export type Dates =
  | [DateFns.Arg, DateFns.Arg]
  | [DateFns.Arg, DateFns.Arg, DateFns.Arg];

export type NormalizedDates<DatesArg extends Dates> = DatesArg extends [
  DateFns.Arg,
  DateFns.Arg,
  DateFns.Arg,
]
  ? [Date, Date, Date]
  : [Date, Date];

export function normalizeDates<DatesArg extends Dates>(
  context: DateFns.ContextFn<Date> | undefined,
  ...dates: DatesArg
): NormalizedDates<DatesArg> {
  const normalize =
    context ||
    constructFrom.bind(
      null,
      dates.find((date) => typeof date === "object"),
    );
  return dates.map(normalize) as NormalizedDates<DatesArg>;
}
