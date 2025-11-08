import { describe, expect, it } from "vitest";
import { addBusinessDays } from "./index.ts";
import { format } from "../format/index.ts";

/**
 * Test suite for the holiday handling example in addBusinessDays documentation
 * This validates that the example code works correctly
 */

describe("addBusinessDays with holiday handling example", () => {
  // Define US federal holidays for 2024 (same as in documentation example)
  const holidays2024 = [
    new Date(2024, 0, 1),   // New Year's Day
    new Date(2024, 0, 15),  // Martin Luther King Jr. Day
    new Date(2024, 1, 19),  // Presidents' Day
    new Date(2024, 4, 27),  // Memorial Day
    new Date(2024, 5, 19),  // Juneteenth
    new Date(2024, 6, 4),   // Independence Day
    new Date(2024, 8, 2),   // Labor Day
    new Date(2024, 9, 14),  // Columbus Day
    new Date(2024, 10, 11), // Veterans Day
    new Date(2024, 10, 28), // Thanksgiving
    new Date(2024, 11, 25)  // Christmas
  ];

  // Implementation from the documentation example
  function addBusinessDaysWithHolidays(startDate: Date, businessDaysToAdd: number, holidays: Date[] = []): Date {
    let currentDate = new Date(startDate);
    let remainingDays = businessDaysToAdd;
    
    while (remainingDays > 0) {
      currentDate = addBusinessDays(currentDate, 1);
      
      // Check if current date is a holiday
      const isHoliday = holidays.some(holiday => 
        currentDate.getFullYear() === holiday.getFullYear() &&
        currentDate.getMonth() === holiday.getMonth() &&
        currentDate.getDate() === holiday.getDate()
      );
      
      if (!isHoliday) {
        remainingDays--;
      }
    }
    
    return currentDate;
  }

  it("should add business days without holidays (baseline)", () => {
    const startDate = new Date(2024, 0, 2); // January 2, 2024 (Tuesday)
    const result = addBusinessDays(startDate, 5);
    
    // Should be January 9, 2024 (Tuesday) - skipping weekend only
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(9);
  });

  it("should add business days with holiday exclusion", () => {
    const startDate = new Date(2024, 0, 2); // January 2, 2024 (Tuesday)
    const result = addBusinessDaysWithHolidays(startDate, 5, holidays2024);
    
    // Should skip MLK Day (Jan 15) and land on January 17, 2024
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(17);
  });

  it("should handle July 4th holiday correctly", () => {
    const startDate = new Date(2024, 6, 1); // July 1, 2024 (Monday)
    const result = addBusinessDaysWithHolidays(startDate, 3, holidays2024);
    
    // Should skip July 4th (Thursday) and land on July 8, 2024 (Monday)
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(8);
  });

  it("should handle Thanksgiving week correctly", () => {
    const startDate = new Date(2024, 10, 25); // November 25, 2024 (Monday)
    const result = addBusinessDaysWithHolidays(startDate, 5, holidays2024);
    
    // Should skip Thanksgiving (Nov 28) and account for weekend
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(11);
    expect(result.getDate()).toBe(4); // December 4, 2024
  });

  it("should work with custom company holidays", () => {
    const companyHolidays = [
      new Date(2024, 11, 24), // Christmas Eve
      new Date(2024, 11, 31), // New Year's Eve
    ];
    
    const allHolidays = [...holidays2024, ...companyHolidays];
    const startDate = new Date(2024, 11, 20); // December 20, 2024 (Friday)
    const result = addBusinessDaysWithHolidays(startDate, 3, allHolidays);
    
    // Should skip Christmas Eve, Christmas, and New Year's Eve
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(3); // January 3, 2025
  });

  it("should handle edge case with no holidays", () => {
    const startDate = new Date(2024, 5, 3); // June 3, 2024 (Monday)
    const result = addBusinessDaysWithHolidays(startDate, 5, []);
    
    // Should behave exactly like regular addBusinessDays
    const regularResult = addBusinessDays(startDate, 5);
    expect(result.getTime()).toBe(regularResult.getTime());
  });

  it("should handle zero business days", () => {
    const startDate = new Date(2024, 0, 2); // January 2, 2024 (Tuesday)
    const result = addBusinessDaysWithHolidays(startDate, 0, holidays2024);
    
    // Should return the same date
    expect(result.getTime()).toBe(startDate.getTime());
  });
});