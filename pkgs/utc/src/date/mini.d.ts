import { type UTCDate } from "./index.js";

/**
 * UTC date class. It maps getters and setters to corresponding UTC methods,
 * forcing all calculations in the UTC time zone.
 *
 * Combined with date-fns, it allows using the class the same way as
 * the original date class.
 *
 * This minimal version provides only getters, setters, and `getTimezoneOffset`,
 * leaving the formatter functions out.
 *
 * For the complete version, see `UTCDate`.
 */
export const UTCDateMini: typeof UTCDate;
