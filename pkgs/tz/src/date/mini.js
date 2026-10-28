import { tzOffset } from "../tzOffset/index.ts";

// TZDate stores time in two `Date` objects because native `Date` can only
// expose local fields in the system time zone.
//
// The external date (`this`) stores the real timestamp. It is the value used by
// `getTime()`, `valueOf()`, UTC getters/setters, comparisons, and arithmetic.
// Its local getters are not used for target-zone fields because they would read
// the timestamp through the system time zone.
//
// The internal date (`this.internal`) stores the target-zone wall-clock fields.
// We read and write those fields through UTC getters/setters so the host system
// time zone cannot reinterpret them. For example, `getHours()` returns
// `internal.getUTCHours()`, and `setHours()` writes `internal.setUTCHours(...)`.
//
// Syncing moves data between the two representations:
//
// - `syncToInternal` starts from the external timestamp and rebuilds internal
//   wall-clock fields using `this.timeZone` offset.
//
// - `syncFromInternal` starts from internal wall-clock fields and resolves them
//   to the external timestamp using `this.timeZone` offsets, so the system time
//   zone never sees them.
//
// The public TZDate value is the combination of both: external is the instant,
// internal is the wall-clock view of that instant in `this.timeZone`.

export class TZDateMini extends Date {
  //#region static

  constructor(...args) {
    super();

    // Time zone string is always the last string argument unless date string
    // is passed (as a single argument).
    if (args.length > 1 && typeof args[args.length - 1] === "string") {
      this.timeZone = args.pop();
    }

    this.internal = new Date();

    // Validate the time zone by checking its offset.
    if (isNaN(tzOffset(this.timeZone, this))) {
      this.setTime(NaN);
    } else {
      if (!args.length) {
        // No arguments passed: use current time
        this.setTime(Date.now());
      } else if (
        typeof args[0] === "number" &&
        (args.length === 1 ||
          (args.length === 2 && typeof args[1] !== "number"))
      ) {
        // Timestamp passed: use it as is
        this.setTime(args[0]);
      } else if (typeof args[0] === "string") {
        // `Date` string passed: parse it as external date
        this.setTime(+new Date(args[0]));
      } else if (args[0] instanceof Date) {
        // `Date` passed: use its timestamp
        this.setTime(+args[0]);
      } else {
        // `Date` values passed: resolve them as the target-zone wall-clock time
        this.setTime(wallTimeToTime(this.timeZone, Date.UTC(...args)));
      }
    }
  }

  static tz(tz, ...args) {
    return args.length
      ? new TZDateMini(...args, tz)
      : new TZDateMini(Date.now(), tz);
  }

  //#endregion

  //#region time zone

  withTimeZone(timeZone) {
    return new TZDateMini(+this, timeZone);
  }

  getTimezoneOffset() {
    const offset = -tzOffset(this.timeZone, this);
    // Remove the seconds offset using `Math.floor` for negative UTC time zones
    // and `Math.ceil` for positive UTC time zones.
    return offset > 0 ? Math.floor(offset) : Math.ceil(offset);
  }

  //#endregion

  //#region time

  setTime(_time) {
    // Use the native `setTime` to the external date time.
    Date.prototype.setTime.apply(this, arguments);

    // Then apply it to the internal date adjusting to the timezone offset.
    syncToInternal(this);

    return +this;
  }

  //#endregion

  //#region date-fns integration

  [Symbol.for("constructDateFrom")](date) {
    return new TZDateMini(+new Date(date), this.timeZone);
  }

  //#endregion
}

// Assign getters and setters
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (!re.test(method)) return;

  const utcMethod = method.replace(re, "$1UTC");
  // Filter out methods without UTC counterparts
  if (!TZDateMini.prototype[utcMethod]) return;

  if (method.startsWith("get")) {
    // Delegate to internal date's UTC method
    TZDateMini.prototype[method] = function () {
      return this.internal[utcMethod]();
    };
  } else {
    // Assign regular setter
    TZDateMini.prototype[method] = function () {
      Date.prototype[utcMethod].apply(this.internal, arguments);
      syncFromInternal(this);
      return +this;
    };

    // Assign UTC setter
    TZDateMini.prototype[utcMethod] = function () {
      Date.prototype[utcMethod].apply(this, arguments);
      syncToInternal(this);
      return +this;
    };
  }
});

/**
 * @internal
 * Function syncs time to internal date, applying the current time zone offset.
 *
 * @param {Date} date - `Date` to sync
 */
function syncToInternal(date) {
  // Start internal from the same real timestamp as external.
  date.internal.setTime(+date);

  // Shift internal by the target offset so its UTC fields become the target-zone
  // wall-clock fields for the external timestamp.
  //
  //   o internal UTC fields: 2024-02-11 00:00
  //   |
  //   | + Asia/Singapore offset (+08:00)
  //   v
  //   x internal UTC fields: 2024-02-11 08:00
  //
  date.internal.setUTCSeconds(
    date.internal.getUTCSeconds() -
      // Round after converting minutes to seconds to avoid fractional offset
      // precision errors from historical offsets.
      Math.round(-tzOffset(date.timeZone, date) * 60),
  );
}

/**
 * @internal
 * Function syncs internal wall-clock fields into the external date.
 *
 * @param {Date} date - The date to sync
 */
function syncFromInternal(date) {
  const time = wallTimeToTime(date.timeZone, +date.internal);

  // Setters apply historical offsets with minute precision, so we move
  // the time by the offset seconds, i.e., 25 seconds for UTC+06:55:25.
  const secondsOffset =
    Math.round(-tzOffset(date.timeZone, new Date(time)) * 60) % 60;

  Date.prototype.setTime.call(date, time + secondsOffset * 1000);

  // Rebuild internal, as the wall-clock time might have moved out of a DST gap.
  syncToInternal(date);
}

/**
 * @internal
 * Function resolves the wall-clock time in the given time zone to a timestamp,
 * the same way native `Date` does in the system time zone: ambiguous time
 * (DST end) resolves to the earlier moment, and nonexistent time (DST start)
 * moves forward by the DST shift.
 *
 * @param {string} timeZone - Time zone to resolve the wall-clock time in
 * @param {number} wallTime - Wall-clock time fields stored as a UTC timestamp
 *
 * @returns {number} Timestamp
 */
function wallTimeToTime(timeZone, wallTime) {
  // Offsets a day around cover any offset that the wall-clock time can map to.
  const offsetBefore = offsetMs(timeZone, wallTime - 864e5);
  const offsetAfter = offsetMs(timeZone, wallTime + 864e5);

  const times = [wallTime - offsetBefore, wallTime - offsetAfter].filter(
    (time) => offsetMs(timeZone, time) === wallTime - time,
  );
  if (times.length) return Math.min(...times);

  // Nonexistent time: apply the offset before the DST shift to move it forward.
  return wallTime - offsetBefore;
}

/**
 * @internal
 * Function returns the time zone offset at the given time in milliseconds,
 * rounded to seconds like in `syncToInternal`.
 *
 * @param {string} timeZone - Time zone to get the offset in
 * @param {number} time - Timestamp to get the offset at
 *
 * @returns {number} Offset in milliseconds
 */
function offsetMs(timeZone, time) {
  return Math.round(tzOffset(timeZone, new Date(time)) * 60) * 1000;
}
