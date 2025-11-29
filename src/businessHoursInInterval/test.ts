import { describe, expect, it } from "vitest";
import { businessHoursInInterval } from "./index.ts";

describe("businessHoursInInterval", () => {
  it("calculates business hours for a full working day", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0), // Monday 9 AM
      end: new Date(2023, 0, 2, 17, 0), // Monday 5 PM
    });
    expect(result).toBe(8);
  });

  it("calculates business hours for multiple full working days", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0), // Monday 9 AM
      end: new Date(2023, 0, 4, 17, 0), // Wednesday 5 PM
    });
    expect(result).toBe(24); // 3 days × 8 hours
  });

  it("calculates partial day hours", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 10, 0), // Monday 10 AM
      end: new Date(2023, 0, 2, 15, 30), // Monday 3:30 PM
    });
    expect(result).toBe(5.5);
  });

  it("excludes weekends", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 6, 9, 0), // Friday 9 AM
      end: new Date(2023, 0, 9, 17, 0), // Monday 5 PM
    });
    expect(result).toBe(16); // 2 days × 8 hours (Friday and Monday)
  });

  it("excludes holidays", () => {
    const result = businessHoursInInterval(
      {
        start: new Date(2023, 0, 2, 9, 0), // Monday 9 AM
        end: new Date(2023, 0, 4, 17, 0), // Wednesday 5 PM
      },
      {
        holidays: [new Date(2023, 0, 3)], // Tuesday is a holiday
      },
    );
    expect(result).toBe(16); // 2 days × 8 hours
  });

  it("handles interval starting before business hours", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 7, 0), // Monday 7 AM
      end: new Date(2023, 0, 2, 12, 0), // Monday 12 PM
    });
    expect(result).toBe(3); // 9 AM to 12 PM = 3 hours
  });

  it("handles interval ending after business hours", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 15, 0), // Monday 3 PM
      end: new Date(2023, 0, 2, 20, 0), // Monday 8 PM
    });
    expect(result).toBe(2); // 3 PM to 5 PM = 2 hours
  });

  it("handles interval completely outside business hours", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 18, 0), // Monday 6 PM
      end: new Date(2023, 0, 2, 20, 0), // Monday 8 PM
    });
    expect(result).toBe(0);
  });

  it("handles interval over weekend", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 7, 9, 0), // Saturday 9 AM
      end: new Date(2023, 0, 8, 17, 0), // Sunday 5 PM
    });
    expect(result).toBe(0);
  });

  it("returns 0 for zero-length interval", () => {
    const date = new Date(2023, 0, 2, 10, 0);
    const result = businessHoursInInterval({
      start: date,
      end: date,
    });
    expect(result).toBe(0);
  });

  it("throws for invalid start date", () => {
    expect(() =>
      businessHoursInInterval({
        start: new Date(NaN),
        end: new Date(2023, 0, 2, 17, 0),
      }),
    ).toThrow(RangeError);
  });

  it("throws for invalid end date", () => {
    expect(() =>
      businessHoursInInterval({
        start: new Date(2023, 0, 2, 9, 0),
        end: new Date(NaN),
      }),
    ).toThrow(RangeError);
  });

  it("throws when end is before start", () => {
    expect(() =>
      businessHoursInInterval({
        start: new Date(2023, 0, 4, 9, 0),
        end: new Date(2023, 0, 2, 17, 0),
      }),
    ).toThrow(RangeError);
  });

  it("works with custom business hours", () => {
    const result = businessHoursInInterval(
      {
        start: new Date(2023, 0, 2, 8, 0), // Monday 8 AM
        end: new Date(2023, 0, 2, 18, 0), // Monday 6 PM
      },
      {
        startOfDay: "08:00",
        endOfDay: "18:00",
      },
    );
    expect(result).toBe(10);
  });

  it("works with custom working days including Saturday", () => {
    const result = businessHoursInInterval(
      {
        start: new Date(2023, 0, 6, 9, 0), // Friday 9 AM
        end: new Date(2023, 0, 9, 17, 0), // Monday 5 PM
      },
      {
        workingDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
      },
    );
    expect(result).toBe(24); // 3 days × 8 hours (Friday, Saturday, Monday)
  });

  it("handles partial hours with minutes correctly", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 15), // Monday 9:15 AM
      end: new Date(2023, 0, 2, 10, 45), // Monday 10:45 AM
    });
    expect(result).toBe(1.5); // 1 hour 30 minutes
  });

  it("handles interval spanning multiple weeks", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0), // Monday week 1
      end: new Date(2023, 0, 13, 17, 0), // Friday week 2
    });
    expect(result).toBe(80); // 10 working days × 8 hours
  });

  it("accepts timestamps", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 0).getTime(),
      end: new Date(2023, 0, 2, 17, 0).getTime(),
    });
    expect(result).toBe(8);
  });

  it("handles interval starting on non-working day", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 7, 10, 0), // Saturday 10 AM
      end: new Date(2023, 0, 9, 12, 0), // Monday 12 PM
    });
    expect(result).toBe(3); // Monday 9 AM to 12 PM
  });

  it("handles interval ending on non-working day", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 6, 14, 0), // Friday 2 PM
      end: new Date(2023, 0, 8, 10, 0), // Sunday 10 AM
    });
    expect(result).toBe(3); // Friday 2 PM to 5 PM
  });

  it("handles interval with multiple holidays", () => {
    const result = businessHoursInInterval(
      {
        start: new Date(2023, 0, 2, 9, 0), // Monday
        end: new Date(2023, 0, 6, 17, 0), // Friday
      },
      {
        holidays: [
          new Date(2023, 0, 3), // Tuesday
          new Date(2023, 0, 5), // Thursday
        ],
      },
    );
    expect(result).toBe(24); // 3 working days × 8 hours
  });

  it("returns exact fractional hours for precise intervals", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 9, 20), // Monday 9:20 AM
      end: new Date(2023, 0, 2, 11, 50), // Monday 11:50 AM
    });
    expect(result).toBe(2.5); // 2 hours 30 minutes
  });

  it("handles very small intervals within business hours", () => {
    const result = businessHoursInInterval({
      start: new Date(2023, 0, 2, 10, 0), // Monday 10:00 AM
      end: new Date(2023, 0, 2, 10, 15), // Monday 10:15 AM
    });
    expect(result).toBe(0.25); // 15 minutes = 0.25 hours
  });
});
