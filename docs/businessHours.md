# Business Hours Utilities

Three new functions for business-hours-aware date calculations in date-fns.

## Functions

### `isWithinBusinessHours`

Checks if a given date falls within configured business hours.

```typescript
import { isWithinBusinessHours } from 'date-fns';

// Is Tuesday at 10:00 AM within business hours?
const result = isWithinBusinessHours(new Date(2023, 0, 3, 10, 0));
//=> true

// Is Tuesday at 6:00 PM within business hours?
const result2 = isWithinBusinessHours(new Date(2023, 0, 3, 18, 0));
//=> false

// Is Saturday within business hours?
const result3 = isWithinBusinessHours(new Date(2023, 0, 7, 10, 0));
//=> false

// Custom business hours (8:00-18:00, Monday-Saturday)
const result4 = isWithinBusinessHours(
  new Date(2023, 0, 7, 10, 0),
  {
    startOfDay: "08:00",
    endOfDay: "18:00",
    workingDays: [1, 2, 3, 4, 5, 6] // Mon-Sat
  }
);
//=> true
```

**Returns:** `boolean`

---

### `businessHoursInInterval`

Calculates the total number of business hours within a given interval, excluding weekends, holidays, and time outside configured working hours. Returns fractional hours.

```typescript
import { businessHoursInInterval } from 'date-fns';

// How many business hours from Monday 9 AM to Wednesday 5 PM?
const result = businessHoursInInterval({
  start: new Date(2023, 0, 2, 9, 0),
  end: new Date(2023, 0, 4, 17, 0)
});
//=> 24 (3 days × 8 hours)

// Partial day calculation
const result2 = businessHoursInInterval({
  start: new Date(2023, 0, 2, 10, 0),
  end: new Date(2023, 0, 2, 15, 30)
});
//=> 5.5

// With holidays
const result3 = businessHoursInInterval(
  {
    start: new Date(2023, 0, 2, 9, 0),
    end: new Date(2023, 0, 4, 17, 0)
  },
  {
    holidays: [new Date(2023, 0, 3)] // Tuesday is a holiday
  }
);
//=> 16 (2 days × 8 hours, excluding holiday)
```

**Returns:** `number` (fractional hours, e.g., `8.5` for 8 hours and 30 minutes)

---

### `addBusinessHours`

Adds a specified number of business hours to a date, skipping weekends, holidays, and after-hours periods. Never mutates the original date.

```typescript
import { addBusinessHours } from 'date-fns';

// Add 4 business hours to Monday 2 PM
const result = addBusinessHours(new Date(2023, 0, 2, 14, 0), 4);
//=> Tue Jan 03 2023 10:00:00
// (2 hours on Monday 14:00-16:00, then 2 hours on Tuesday 9:00-11:00)

// Add 10 business hours starting Monday 9 AM
const result2 = addBusinessHours(new Date(2023, 0, 2, 9, 0), 10);
//=> Tue Jan 03 2023 11:00:00

// Subtract 5 business hours from Wednesday 11 AM
const result3 = addBusinessHours(new Date(2023, 0, 4, 11, 0), -5);
//=> Tue Jan 03 2023 14:00:00

// With holidays
const result4 = addBusinessHours(
  new Date(2023, 0, 2, 15, 0), // Monday 3 PM
  10,
  {
    holidays: [new Date(2023, 0, 3)] // Tuesday is holiday
  }
);
//=> Wed Jan 04 2023 11:00:00 (skips Tuesday)
```

**Returns:** `Date` (new date instance)

---

## Configuration Options

All three functions accept an optional `BusinessHoursOptions` object:

```typescript
interface BusinessHoursOptions {
  /** Start of business day in "HH:MM" format. Default: "09:00" */
  startOfDay?: string;
  
  /** End of business day in "HH:MM" format. Default: "17:00" */
  endOfDay?: string;
  
  /** Array of working days (0=Sunday, 6=Saturday). Default: [1,2,3,4,5] (Mon-Fri) */
  workingDays?: number[];
  
  /** Array of holiday dates. Default: [] */
  holidays?: Date[];
  
  /** Context for date construction (e.g., TZDate). Optional */
  in?: ContextFn<DateType>;
}
```

### Default Values

- **Business hours**: 9:00 AM to 5:00 PM (09:00-17:00)
- **Working days**: Monday through Friday (days 1-5)
- **Holidays**: No holidays

### Working Days

The `workingDays` array uses JavaScript's day-of-week numbering:

- `0` = Sunday
- `1` = Monday
- `2` = Tuesday
- `3` = Wednesday
- `4` = Thursday
- `5` = Friday
- `6` = Saturday

**Example**: `[1, 2, 3, 4, 5, 6]` represents Monday through Saturday.

### Custom Examples

```typescript
// 24/5 operation (24 hours, 5 days a week)
const options = {
  startOfDay: "00:00",
  endOfDay: "23:59",
  workingDays: [1, 2, 3, 4, 5] // Mon-Fri
};

// Standard 9-5 with Saturday half-day
const options2 = {
  startOfDay: "09:00",
  endOfDay: "17:00",
  workingDays: [1, 2, 3, 4, 5, 6] // Mon-Sat
};

// Early morning shift
const options3 = {
  startOfDay: "06:00",
  endOfDay: "14:00",
  workingDays: [1, 2, 3, 4, 5]
};
```

## Edge Cases

### Starting from Non-Working Time

All functions handle dates that fall outside business hours gracefully:

```typescript
// Starting on a weekend
addBusinessHours(new Date(2023, 0, 7, 10, 0), 5); // Saturday
//=> Monday 14:00 (moves to next working day and adds 5 hours)

// Starting before business hours
addBusinessHours(new Date(2023, 0, 2, 7, 0), 3); // Monday 7 AM
//=> Monday 12:00 (starts at 9 AM, adds 3 hours)

// Starting after business hours
addBusinessHours(new Date(2023, 0, 2, 19, 0), 3); // Monday 7 PM
//=> Tuesday 12:00 (moves to next working day 9 AM, adds 3 hours)
```

### Holidays

Holidays are checked using date equality (same calendar day), regardless of time:

```typescript
const holidays = [
  new Date(2023, 0, 2, 0, 0), // January 2, 2023
  new Date(2023, 11, 25) // December 25, 2023
];

isWithinBusinessHours(new Date(2023, 0, 2, 10, 0), { holidays });
//=> false (it's a holiday)
```

### Fractional Hours

`addBusinessHours` supports fractional hours:

```typescript
addBusinessHours(new Date(2023, 0, 2, 10, 0), 1.5);
//=> Monday 11:30

addBusinessHours(new Date(2023, 0, 2, 10, 0), 0.25);
//=> Monday 10:15 (15 minutes)
```

### Zero-Length Intervals

```typescript
const date = new Date(2023, 0, 2, 10, 0);
businessHoursInInterval({ start: date, end: date });
//=> 0
```

## Error Handling

### Invalid Dates

```typescript
isWithinBusinessHours(new Date(NaN));
//=> false

addBusinessHours(new Date(NaN), 5);
//=> Invalid Date

businessHoursInInterval({
  start: new Date(NaN),
  end: new Date(2023, 0, 2)
});
//=> throws RangeError: "Start date is invalid"
```

### Invalid Intervals

```typescript
businessHoursInInterval({
  start: new Date(2023, 0, 4),
  end: new Date(2023, 0, 2) // end before start
});
//=> throws RangeError: "Start date must be before or equal to end date"
```

### Invalid Configuration

```typescript
// End time before start time
isWithinBusinessHours(new Date(), {
  startOfDay: "17:00",
  endOfDay: "09:00"
});
//=> throws RangeError

// Invalid time format
isWithinBusinessHours(new Date(), {
  startOfDay: "25:00" // hours must be 0-23
});
//=> throws RangeError

// Invalid working days
isWithinBusinessHours(new Date(), {
  workingDays: [7, 8] // days must be 0-6
});
//=> throws RangeError
```

## TypeScript Support

All functions are fully typed with TypeScript:

```typescript
import type { BusinessHoursOptions } from 'date-fns';

const options: BusinessHoursOptions = {
  startOfDay: "08:00",
  endOfDay: "18:00",
  workingDays: [1, 2, 3, 4, 5],
  holidays: [new Date(2023, 0, 1)]
};

// Type inference works correctly
const result: boolean = isWithinBusinessHours(new Date(), options);
const hours: number = businessHoursInInterval({ start: new Date(), end: new Date() });
const newDate: Date = addBusinessHours(new Date(), 5);
```

## Performance Considerations

### Large Intervals

For very large intervals spanning many years, `businessHoursInInterval` iterates day-by-day. Consider chunking if processing intervals longer than a few years.

### Large Hour Additions

`addBusinessHours` has built-in iteration limits to prevent potential infinite loops. The function will throw a `RangeError` if it exceeds reasonable bounds.

## Related Functions

- `addBusinessDays` - Add business days (existing date-fns function)
- `differenceInBusinessDays` - Calculate business days between dates (existing date-fns function)
- `isWeekend` - Check if a date is a weekend (existing date-fns function)
- `isSameDay` - Check if two dates are the same day (existing date-fns function)
