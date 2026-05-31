import { constructFrom } from "../../constructFrom/index.ts";
import { toDate } from "../../toDate/index.ts";
import type { ContextOptions, DateArg } from "../../types.ts";

export function toTpInstant<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: ContextOptions<ResultDate> | undefined,
): [temporal: Temporal.ZonedDateTime | null, invalidDate: ResultDate] {
  const inputDate = toDate(date, options?.in);
  let temporal: Temporal.ZonedDateTime | null;
  try {
    temporal = Temporal.Instant.fromEpochMilliseconds(
      inputDate.getTime(),
    ).toZonedDateTimeISO(getDateTimeZone(inputDate));
  } catch (err) {
    if (err instanceof RangeError) temporal = null;
    else throw err;
  }
  return [temporal, invalidDate(date, options)];
}

function getDateTimeZone<DateType extends Date>(
  date: DateArg<DateType>,
): string {
  if (
    typeof date === "object" &&
    "timeZone" in date &&
    typeof date.timeZone === "string"
  )
    return date.timeZone;
  return Temporal.Now.timeZoneId();
}

export function fromTp<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  temporal: Temporal.ZonedDateTime,
  date: DateArg<DateType>,
  options?: ContextOptions<ResultDate> | undefined,
): ResultDate {
  return constructFrom(options?.in || date, temporal.epochMilliseconds);
}

function invalidDate<DateType extends Date, ResultDate extends Date = DateType>(
  date: DateArg<DateType>,
  options?: ContextOptions<ResultDate> | undefined,
): ResultDate {
  return constructFrom(options?.in || date, NaN);
}
