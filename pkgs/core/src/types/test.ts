import { describe, expect, it } from "vitest";
import { add } from "../add/index.ts";
import { format, type FormatOptions } from "../format/index.ts";
import { set } from "../set/index.ts";
import { startOfWeek } from "../startOfWeek/index.ts";
import type {
  AdditionalTokensOptions,
  DateValues,
  Duration,
  FirstWeekContainsDateOptions,
  ISOFormatOptions,
  NearestToUnitOptions,
  RoundingOptions,
  StepOptions,
  WeekOptions,
} from "../types.ts";

describe("options types with exactOptionalPropertyTypes", () => {
  it("allows passing explicit undefined to options properties", () => {
    const formatOpts: FormatOptions = {
      locale: undefined,
      useAdditionalWeekYearTokens: undefined,
      useAdditionalDayOfYearTokens: undefined,
      in: undefined,
    };
    expect(format(new Date(2024, 0, 1), "yyyy-MM-dd", formatOpts)).toBe(
      "2024-01-01",
    );

    const weekOpts: WeekOptions = {
      weekStartsOn: undefined,
    };
    expect(startOfWeek(new Date(2024, 0, 7), weekOpts)).toBeInstanceOf(Date);

    const duration: Duration = {
      years: undefined,
      months: undefined,
      weeks: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
    };
    expect(add(new Date(2024, 0, 1), duration)).toBeInstanceOf(Date);

    const dateValues: DateValues = {
      year: undefined,
      month: undefined,
      date: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      milliseconds: undefined,
    };
    expect(set(new Date(2024, 0, 1), dateValues)).toBeInstanceOf(Date);

    const stepOpts: StepOptions = { step: undefined };
    expect(stepOpts.step).toBeUndefined();

    const firstWeekOpts: FirstWeekContainsDateOptions = {
      firstWeekContainsDate: undefined,
    };
    expect(firstWeekOpts.firstWeekContainsDate).toBeUndefined();

    const isoFormatOpts: ISOFormatOptions = {
      format: undefined,
      representation: undefined,
    };
    expect(isoFormatOpts.format).toBeUndefined();

    const roundingOpts: RoundingOptions = {
      roundingMethod: undefined,
    };
    expect(roundingOpts.roundingMethod).toBeUndefined();

    const nearestOpts: NearestToUnitOptions<15> = {
      nearestTo: undefined,
    };
    expect(nearestOpts.nearestTo).toBeUndefined();

    const additionalTokensOpts: AdditionalTokensOptions = {
      useAdditionalWeekYearTokens: undefined,
      useAdditionalDayOfYearTokens: undefined,
    };
    expect(additionalTokensOpts.useAdditionalWeekYearTokens).toBeUndefined();
  });
});
