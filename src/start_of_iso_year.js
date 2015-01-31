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
  var startOfNextYear = startOfWeek(new Date(date.getFullYear() + 1, 0, 4), 1);
  var startOfThisYear = startOfWeek(new Date(date.getFullYear(), 0, 4), 1);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return startOfNextYear;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return startOfThisYear;
  } else {
    return startOfWeek(new Date(date.getFullYear() - 1, 0, 4), 1);
  }
}

module.exports = startOfISOYear;

