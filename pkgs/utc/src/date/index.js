import { UTCDateMini } from "./mini.js";

/**
 * UTC date class. It maps getters and setters to corresponding UTC methods,
 * forcing all calculations in the UTC time zone.
 *
 * Combined with date-fns, it allows using the class the same way as
 * the original date class.
 *
 * This complete version provides not only getters, setters,
 * and `getTimezoneOffset`, but also the formatter functions, mirroring
 * all original `Date` functionality. Use this version when you need to format
 * a string or in an environment you don't fully control (a library).
 * For a minimal version, see `UTCDateMini`.
 */
export class UTCDate extends UTCDateMini {
  toString() {
    const date = this.toDateString();
    const time = this.toTimeString();
    return `${date} ${time}`;
  }

  toDateString() {
    const weekday = weekdayFormat.format(this);
    const date = dateFormat.format(this);
    const year = this.getFullYear();
    return `${weekday} ${date} ${year}`;
  }

  toTimeString() {
    const time = timeFormat.format(this);
    return `${time} GMT+0000 (Coordinated Universal Time)`;
  }

  toLocaleString(locales, options) {
    return Date.prototype.toLocaleString.call(this, locales, {
      timeZone: "UTC",
      ...options,
    });
  }

  toLocaleDateString(locales, options) {
    return Date.prototype.toLocaleDateString.call(this, locales, {
      timeZone: "UTC",
      ...options,
    });
  }

  toLocaleTimeString(locales, options) {
    return Date.prototype.toLocaleTimeString.call(this, locales, {
      timeZone: "UTC",
      ...options,
    });
  }
}

var weekdayFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  timeZone: "UTC",
});

var dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

var timeFormat = new Intl.DateTimeFormat("en-GB", {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "UTC",
});
