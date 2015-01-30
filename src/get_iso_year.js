var startOfWeek = require('./start_of_week');

/**
 * Returns ISO week-numbering year of given date,
 * which always starts 3 days before year's first Thursday.
 * @param {date|string} dirtyDate
 * @returns {number} (ISO year)
 */
var getISOYear = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var startOfThisWeek = startOfWeek(date, 1);
  var startOfThisYear = startOfWeek(new Date(date.getFullYear(), 0, 4), 1);
  var startOfNextYear = startOfWeek(new Date(date.getFullYear() + 1, 0, 4), 1);

  // January 4th of given date's next full year is on the same week
  if (startOfThisWeek.getTime() == startOfNextYear.getTime()) {
    return date.getFullYear() + 1;
  // January 4th of given date's full year is on the next week
  } else if (startOfThisWeek.getTime() + 604800000 == startOfThisYear.getTime()) {
    return date.getFullYear() - 1;
  } else {
    return date.getFullYear();
  }
}

module.exports = getISOYear;

