var startOfWeek = require('./start_of_week');

/**
 * Returns start of ISO week-numbering year,
 * which always starts 3 days before year's first Thursday.
 * Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date} (new date)
 */
var startOfISOYear = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var startOfThisWeek = startOfWeek(date, 1);
  var startOfThisYear = startOfWeek(new Date(date.getFullYear(), 0, 4), 1);
  var startOfNextYear = startOfWeek(new Date(date.getFullYear() + 1, 0, 4), 1);

  // January 4th of given date's next full year is on the same week
  if (startOfThisWeek.getTime() == startOfNextYear.getTime()) {
    return startOfNextYear;
  // January 4th of given date's full year is on the next week
  } else if (startOfThisWeek.getTime() + 604800000 == startOfThisYear.getTime()) {
    return startOfWeek(new Date(date.getFullYear()-1, 0, 4), 1);
  } else {
    return startOfThisYear;
  }
}

module.exports = startOfISOYear;

