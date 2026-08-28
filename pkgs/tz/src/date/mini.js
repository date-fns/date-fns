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
// - `syncFromInternal` starts from internal wall-clock fields, writes them into
//   the external date, then adjusts that timestamp for the system/target offset
//   difference and DST edge cases.
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
        // `Date` values passed:

        // Set it as external date.
        this.setTime(+new Date(...args));

        // Adjust internal and external dates considering that we might have
        // landed on the DST hour.
        adjustToSystemTZ(this, args);
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
  // Copy target-zone wall-clock fields from internal into external using native
  // local setters. At this point external holds the right field values but they
  // are interpreted in the system time zone; `adjustToSystemTZ` fixes that.
  Date.prototype.setFullYear.call(
    date,
    date.internal.getUTCFullYear(),
    date.internal.getUTCMonth(),
    date.internal.getUTCDate(),
  );
  Date.prototype.setHours.call(
    date,
    date.internal.getUTCHours(),
    date.internal.getUTCMinutes(),
    date.internal.getUTCSeconds(),
    date.internal.getUTCMilliseconds(),
  );

  // Now we have to adjust the date to the system time zone
  adjustToSystemTZ(date);
}

/**
 * @internal
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * We use it when constructing `TZDate` and syncing the external date from
 * the internal one.
 *
 * @param {TZDate} date - `TZDate` to adjust.
 */
function adjustToSystemTZ(date, constructorArgs) {
  // Keep the intended target-zone wall-clock value before native Date/system
  // time zone normalization can move it. Later corrections compare against this
  // value to distinguish intended DST normalization from accidental drift.
  const expectedInternalTime = Array.isArray(constructorArgs)
    ? constructorArgsToInternalTime(constructorArgs)
    : +date.internal;
  //#region Initial offset calculation

  // Current target time zone offset at the native timestamp. It may include
  // historical offset seconds, which we preserve for the seconds adjustment.
  const offsetWithSeconds = tzOffset(date.timeZone, date);

  // Minute-precision target offset used by minute-based timestamp adjustments.
  // Historical offsets can contain seconds, so we strip the fractional minute
  // here and handle remaining seconds in the seconds adjustment below.
  const offset =
    offsetWithSeconds > 0
      ? Math.floor(offsetWithSeconds)
      : Math.ceil(offsetWithSeconds);

  //#endregion

  //#region System DST adjustment

  // Native `Date` may normalize the requested wall time when the system time
  // zone skips that hour for DST.
  //
  // We compare the system wall-clock hour represented by the external date with
  // the wall-clock hour stored in the internal date. If they differ, the next
  // offset-diff calculation may need the previous system offset, because the
  // current external timestamp is already after the system DST jump.

  // Previous-hour reference used to detect whether the system offset changed
  // immediately before the current native timestamp.
  const prevHour = new Date(+date);

  // Use UTC math so subtracting one hour cannot be normalized back into the
  // same missing local DST hour.
  prevHour.setUTCHours(prevHour.getUTCHours() - 1);

  // Current system offset at the native timestamp.
  const systemOffset = -new Date(+date).getTimezoneOffset();

  // System offset one real hour before the native timestamp.
  const prevHourSystemOffset = -new Date(+prevHour).getTimezoneOffset();

  // Non-zero when the system offset changed between `prevHour` and `date`.
  const systemDSTChange = systemOffset - prevHourSystemOffset;

  // System offset to use in the later system-target offset difference.
  // Defaults to the current system offset and switches to the previous offset
  // only when native `Date` normalized a missing system wall time.
  let systemOffsetForDiff = systemOffset;
  if (systemDSTChange && systemOffset !== offset) {
    // System wall-clock hour represented by the current external timestamp.
    const systemHour = Date.prototype.getHours.apply(date);

    // Target wall-clock hour currently stored in internal fields. Constructors
    // get it from arguments because internal may have already been synced from
    // the normalized external timestamp; setters get it directly from internal.
    const expectedHour = Array.isArray(constructorArgs)
      ? constructorArgs[3] || 0
      : date.internal.getUTCHours();

    if (systemHour !== expectedHour) {
      // Check whether using the current system offset would keep the target
      // offset unchanged. If so, the only DST jump we crossed is the system
      // one, so the diff should use the pre-DST system offset.
      const testDate = new Date(+date);

      // Difference that the later offset-diff step would apply with the
      // current system offset.
      const testOffsetDiff = systemOffset - offset;
      if (testOffsetDiff)
        testDate.setUTCMinutes(testDate.getUTCMinutes() + testOffsetDiff);

      // Target offset after applying the current system offset difference.
      const testOffsetWithSeconds = tzOffset(date.timeZone, testDate);

      // Target offset without historical seconds, matching `offset`.
      const testOffset =
        testOffsetWithSeconds > 0
          ? Math.floor(testOffsetWithSeconds)
          : Math.ceil(testOffsetWithSeconds);

      if (testOffset === offset) systemOffsetForDiff = prevHourSystemOffset;
    }
  }

  //#endregion

  //#region System diff adjustment

  // Move external from the system-zone interpretation of internal fields toward
  // the timestamp that represents those fields in the target time zone.
  //
  // At this point native `Date` has treated the internal wall-clock fields as if
  // they belonged to the system zone. The system-target offset difference moves
  // external by the distance between that system interpretation and the target
  // interpretation.

  // Difference between the system offset selected above and the minute-precision
  // target offset. Positive values move external forward; negative values move
  // it backward.
  const offsetDiff = systemOffsetForDiff - offset;

  if (offsetDiff)
    // Apply the system-target minute difference to external. Internal is
    // rebuilt from the final external timestamp after all adjustments are
    // complete.
    //
    //   o  external as target: 2023-01-31 23:00
    //   |
    //   |  add `offsetDiff`
    //   v
    //   x  external as target: 2023-02-01 12:00
    //
    Date.prototype.setUTCMinutes.call(
      date,
      Date.prototype.getUTCMinutes.call(date) + offsetDiff,
    );

  //#endregion

  //#region Seconds system diff adjustment

  // Historical time zone offsets can include seconds, but the minute-based
  // offset adjustment above intentionally used minute precision.
  //
  // This adjustment applies the remaining seconds difference to external. For
  // example, historical Singapore used UTC+06:55:25, while ISO formatting shows
  // only `+06:55`; without the seconds correction, setter paths keep the wrong
  // wall-clock seconds.

  // Clone external as a native `Date` so we can inspect how the system time zone
  // represents the same timestamp.
  const systemDate = new Date(+date);

  // Zero UTC seconds before reading system seconds. Any remaining local seconds
  // then come from the system time zone offset rather than from the timestamp's
  // own seconds value.
  systemDate.setUTCSeconds(0);

  // Seconds part contributed by the system time zone offset. Negative offsets
  // need wrapping because `Date#getSeconds()` returns values in the 0..59 range.
  const systemSecondsOffset =
    systemOffset > 0
      ? systemDate.getSeconds()
      : (systemDate.getSeconds() - 60) % 60;

  // Seconds part contributed by the target time zone offset.
  const secondsOffset = Math.round(-(tzOffset(date.timeZone, date) * 60)) % 60;

  if (secondsOffset || systemSecondsOffset)
    // Apply the remaining second-level system-target difference to external.
    //
    //   o  external as Asia/Singapore: 1900-01-01 00:00:56
    //   |
    //   |  + `secondsOffset`
    //   |  + `systemSecondsOffset`
    //   v
    //   x  external as Asia/Singapore: 1900-01-01 00:00:31
    //
    Date.prototype.setUTCSeconds.call(
      date,
      Date.prototype.getUTCSeconds.call(date) +
        secondsOffset +
        systemSecondsOffset,
    );

  //#endregion

  //#region Post-adjustment DST fix

  // The first system-target offset move can cross a target-zone DST boundary.
  //
  // When that happens, the target offset at the new external timestamp differs
  // from the target offset used for `offsetDiff`. We compare the original move
  // with the move that would be calculated at the new timestamp, then apply the
  // difference to external.

  // Target offset at the current external timestamp, including historical
  // seconds for the later seconds adjustment.
  const postOffsetWithSeconds = tzOffset(date.timeZone, date);

  // Minute-precision target offset at the current external timestamp.
  const postOffset =
    postOffsetWithSeconds > 0
      ? Math.floor(postOffsetWithSeconds)
      : Math.ceil(postOffsetWithSeconds);

  // System offset at the current external timestamp.
  const postSystemOffset = -new Date(+date).getTimezoneOffset();

  // System-target offset difference at the current external timestamp.
  const postOffsetDiff = postSystemOffset - postOffset;

  // Whether the target offset changed after the first offset move.
  const offsetChanged = postOffset !== offset;

  // Difference between the current offset move and the move already applied.
  const postDiff = postOffsetDiff - offsetDiff;

  // If the first offset move already normalized a target DST gap forward, the
  // generic post-DST correction below would undo that valid normalization. This
  // happens, for example, with America/New_York 02:00 during spring-forward when
  // the system zone also changes offset around the same instant.
  const targetDSTShift = postOffset - offset;

  // Candidate timestamp that would represent the requested wall-clock time with
  // the post-transition target offset. If it still does not round-trip to the
  // requested wall-clock fields, the requested time is inside a target DST gap.
  const postOffsetCandidate = expectedInternalTime - postOffset * 60 * 1000;

  // Only positive target offset shifts are spring-forward gaps. Negative shifts
  // are fall-back overlaps and still need the regular post-adjustment path.
  const normalizedTargetDSTGap =
    targetDSTShift > 0 &&
    targetInternalTime(date) - expectedInternalTime ===
      targetDSTShift * 60 * 1000 &&
    targetInternalTime(date, postOffsetCandidate) !== expectedInternalTime;

  if (offsetChanged && postDiff && !normalizedTargetDSTGap) {
    // Apply the target-DST correction to external. In the backward-crossing case
    // shown here, this lands on an intermediate value that needs `offsetChange`
    // below.
    //
    //   o  external as America/New_York: 2023-03-12 03:00 EDT
    //   |
    //   |  + `postDiff`
    //   v
    //   x  external as America/New_York: 2023-03-12 01:00 EST
    //
    Date.prototype.setUTCMinutes.call(
      date,
      Date.prototype.getUTCMinutes.call(date) + postDiff,
    );

    // Target offset after applying `postDiff`. It may change again if the
    // correction itself crosses a target-zone DST boundary.
    const newOffsetWithSeconds = tzOffset(date.timeZone, date);

    // Minute-precision target offset after applying `postDiff`.
    const newOffset =
      newOffsetWithSeconds > 0
        ? Math.floor(newOffsetWithSeconds)
        : Math.ceil(newOffsetWithSeconds);

    // Offset change caused by the `postDiff` move itself.
    const offsetChange = postOffset - newOffset;

    // If the correction moved external backward across the target DST boundary,
    // apply the boundary change so external lands on the valid target-zone
    // timestamp. Forward crossings are already normalized by native Date, and
    // applying this correction there would undo the valid post-DST result.
    if (offsetChange && postDiff < 0) {
      // Apply the second target-DST correction to external.
      //
      //   o  external as America/New_York: 2023-03-12 01:00 EST
      //   |
      //   |  + `offsetChange`
      //   v
      //   x  external as America/New_York: 2023-03-12 03:00 EDT
      //
      Date.prototype.setUTCMinutes.call(
        date,
        Date.prototype.getUTCMinutes.call(date) + offsetChange,
      );
    }
  }

  //#endregion

  // Rebuild internal wall-clock fields from the final external timestamp.
  syncToInternal(date);

  // Native Date can normalize historical system offsets with minute and second
  // precision before we adjust to the target time zone. Correct only small
  // historical drift so DST gap normalization (usually one hour) remains intact.
  const expectedTime = constructorArgs
    ? expectedInternalTime
    : expectedInternalTime + secondsOffset * 1000;
  const drift = expectedTime - +date.internal;

  if (drift && Math.abs(drift) < 30 * 60 * 1000) {
    Date.prototype.setTime.call(date, +date + drift);
    syncToInternal(date);
  }
}

function constructorArgsToInternalTime(args) {
  // Mirror Date's date-value constructor defaults while preserving explicit
  // `undefined` behavior. Missing month/day default, but passed `undefined`
  // should remain invalid just like `Date.UTC(year, undefined, ...)`.
  return Date.UTC(
    args[0],
    args.length > 1 ? args[1] : 0,
    args.length > 2 ? args[2] : 1,
    ...args.slice(3),
  );
}

function targetInternalTime(date, time) {
  // Compute the target-zone wall-clock representation for a timestamp without
  // mutating the TZDate. This mirrors syncToInternal for temporary checks.
  const internal = new Date(time ?? +date);
  internal.setUTCSeconds(
    internal.getUTCSeconds() -
      Math.round(-tzOffset(date.timeZone, internal) * 60),
  );
  return +internal;
}
