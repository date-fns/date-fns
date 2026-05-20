import { addBusinessDays, format } from "date-fns";

/**
 * Example: Adding business days while excluding both weekends and holidays
 * 
 * This example demonstrates how to extend addBusinessDays to handle custom holidays
 * in addition to the default weekend exclusion (Saturday and Sunday).
 */

// Define US federal holidays for 2024
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

/**
 * Add business days while excluding holidays
 * @param {Date} startDate - The starting date
 * @param {number} businessDaysToAdd - Number of business days to add
 * @param {Date[]} holidays - Array of holiday dates to exclude
 * @returns {Date} The resulting date after adding business days
 */
function addBusinessDaysWithHolidays(startDate, businessDaysToAdd, holidays = []) {
  let currentDate = new Date(startDate);
  let remainingDays = businessDaysToAdd;
  
  while (remainingDays > 0) {
    // Add one business day (this automatically skips weekends)
    currentDate = addBusinessDays(currentDate, 1);
    
    // Check if the current date is a holiday
    const isHoliday = holidays.some(holiday => 
      currentDate.getFullYear() === holiday.getFullYear() &&
      currentDate.getMonth() === holiday.getMonth() &&
      currentDate.getDate() === holiday.getDate()
    );
    
    // Only count this day if it's not a holiday
    if (!isHoliday) {
      remainingDays--;
    }
  }
  
  return currentDate;
}

// Example usage scenarios
console.log("=== Business Days with Holiday Handling Examples ===\n");

// Example 1: Basic usage without holidays
const startDate1 = new Date(2024, 0, 2); // January 2, 2024 (Tuesday)
const result1 = addBusinessDays(startDate1, 5);
console.log("1. Standard addBusinessDays (weekends only):");
console.log(`   Start: ${format(startDate1, "EEEE, MMMM d, yyyy")}`);
console.log(`   Result: ${format(result1, "EEEE, MMMM d, yyyy")}`);
console.log(`   (Skipped weekends only)\n`);

// Example 2: Adding business days with holiday exclusion
const startDate2 = new Date(2024, 0, 2); // January 2, 2024 (Tuesday)
const result2 = addBusinessDaysWithHolidays(startDate2, 5, holidays2024);
console.log("2. addBusinessDays with holiday handling:");
console.log(`   Start: ${format(startDate2, "EEEE, MMMM d, yyyy")}`);
console.log(`   Result: ${format(result2, "EEEE, MMMM d, yyyy")}`);
console.log(`   (Skipped weekends AND holidays)\n`);

// Example 3: E-commerce delivery date calculation
const orderDate = new Date(2024, 6, 1); // July 1, 2024 (Monday)
const deliveryDate = addBusinessDaysWithHolidays(orderDate, 3, holidays2024);
console.log("3. E-commerce delivery calculation:");
console.log(`   Order placed: ${format(orderDate, "EEEE, MMMM d, yyyy")}`);
console.log(`   Delivery date: ${format(deliveryDate, "EEEE, MMMM d, yyyy")}`);
console.log(`   (3 business days, excluding July 4th holiday)\n`);

// Example 4: Invoice due date calculation
const invoiceDate = new Date(2024, 10, 25); // November 25, 2024 (Monday)
const dueDate = addBusinessDaysWithHolidays(invoiceDate, 10, holidays2024);
console.log("4. Invoice due date calculation:");
console.log(`   Invoice date: ${format(invoiceDate, "EEEE, MMMM d, yyyy")}`);
console.log(`   Due date: ${format(dueDate, "EEEE, MMMM d, yyyy")}`);
console.log(`   (10 business days, excluding Thanksgiving)\n`);

// Example 5: Custom company holidays
const companyHolidays = [
  new Date(2024, 11, 24), // Christmas Eve
  new Date(2024, 11, 31), // New Year's Eve
  new Date(2024, 6, 5),   // Company founding day
];

const allHolidays = [...holidays2024, ...companyHolidays];
const projectStart = new Date(2024, 11, 20); // December 20, 2024
const projectDeadline = addBusinessDaysWithHolidays(projectStart, 7, allHolidays);
console.log("5. Project deadline with company holidays:");
console.log(`   Project start: ${format(projectStart, "EEEE, MMMM d, yyyy")}`);
console.log(`   Deadline: ${format(projectDeadline, "EEEE, MMMM d, yyyy")}`);
console.log(`   (7 business days, excluding federal + company holidays)\n`);

console.log("=== Key Benefits ===");
console.log("• Accurate business day calculations for real-world scenarios");
console.log("• Flexible holiday configuration for different regions/companies");
console.log("• Perfect for delivery dates, due dates, and project planning");
console.log("• Combines date-fns reliability with custom business logic");