import { describe, expect, it } from "vitest";
import { isWithinBusinessHours } from "./index.ts";

describe("isWithinBusinessHours", () => {
  it("returns true for a date within default business hours", () => {
    // Tuesday, 10:00 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 10, 0));
    expect(result).toBe(true);
  });

  it("returns true for a date at the start of business hours", () => {
    // Tuesday, 9:00 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 9, 0));
    expect(result).toBe(true);
  });

  it("returns false for a date at the end of business hours", () => {
    // Tuesday, 5:00 PM (17:00)
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 17, 0));
    expect(result).toBe(false);
  });

  it("returns false for a date after business hours", () => {
    // Tuesday, 6:00 PM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 18, 0));
    expect(result).toBe(false);
  });

  it("returns false for a date before business hours", () => {
    // Tuesday, 8:00 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 8, 0));
    expect(result).toBe(false);
  });

  it("returns false for a Saturday", () => {
    // Saturday, 10:00 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 7, 10, 0));
    expect(result).toBe(false);
  });

  it("returns false for a Sunday", () => {
    // Sunday, 10:00 AM
    const result = isWithinBusinessHours(new Date(2023, 0, 8, 10, 0));
    expect(result).toBe(false);
  });

  it("returns false for a holiday", () => {
    // Monday, 10:00 AM (New Year's Day)
    const result = isWithinBusinessHours(new Date(2023, 0, 2, 10, 0), {
      holidays: [new Date(2023, 0, 2)],
    });
    expect(result).toBe(false);
  });

  it("returns false for an invalid date", () => {
    const result = isWithinBusinessHours(new Date(NaN));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    // Tuesday, 10:00 AM
    const result = isWithinBusinessHours(
      new Date(2023, 0, 3, 10, 0).getTime(),
    );
    expect(result).toBe(true);
  });

  it("works with custom start and end times", () => {
    const date = new Date(2023, 0, 3, 8, 30); // Tuesday, 8:30 AM
    
    // Should be false with default hours (9:00-17:00)
    expect(isWithinBusinessHours(date)).toBe(false);
    
    // Should be true with custom hours (8:00-18:00)
    expect(
      isWithinBusinessHours(date, {
        startOfDay: "08:00",
        endOfDay: "18:00",
      }),
    ).toBe(true);
  });

  it("works with custom working days", () => {
    const saturday = new Date(2023, 0, 7, 10, 0); // Saturday, 10:00 AM
    
    // Should be false with default working days (Mon-Fri)
    expect(isWithinBusinessHours(saturday)).toBe(false);
    
    // Should be true with custom working days (Mon-Sat)
    expect(
      isWithinBusinessHours(saturday, {
        workingDays: [1, 2, 3, 4, 5, 6],
      }),
    ).toBe(true);
  });

  it("returns true for exact start minute boundary", () => {
    // Tuesday, 9:30 AM with custom start time
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 9, 30), {
      startOfDay: "09:30",
    });
    expect(result).toBe(true);
  });

  it("returns false for exact end minute boundary", () => {
    // Tuesday, 17:30 with custom end time
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 17, 30), {
      endOfDay: "17:30",
    });
    expect(result).toBe(false);
  });

  it("handles holiday comparison correctly with different times", () => {
    // Holiday with different time than check date
    const holidayDate = new Date(2023, 0, 2, 0, 0);
    const checkDate = new Date(2023, 0, 2, 10, 0);
    
    const result = isWithinBusinessHours(checkDate, {
      holidays: [holidayDate],
    });
    expect(result).toBe(false);
  });

  it("returns true when not in holidays list", () => {
    const result = isWithinBusinessHours(new Date(2023, 0, 3, 10, 0), {
      holidays: [new Date(2023, 0, 2), new Date(2023, 0, 4)],
    });
    expect(result).toBe(true);
  });

  it("handles minutes correctly near boundaries", () => {
    // 16:59 should be within business hours
    expect(isWithinBusinessHours(new Date(2023, 0, 3, 16, 59))).toBe(true);
    
    // 17:00 should not be within business hours
    expect(isWithinBusinessHours(new Date(2023, 0, 3, 17, 0))).toBe(false);
    
    // 17:01 should not be within business hours
    expect(isWithinBusinessHours(new Date(2023, 0, 3, 17, 1))).toBe(false);
  });
});
