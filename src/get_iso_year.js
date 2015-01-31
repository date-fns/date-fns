var startOfWeek = require('./start_of_week');

/**
 * Returns ISO week-numbering year of given date,
 * which always starts 3 days before year's first Thursday.
 * @param {date|string} dirtyDate
 * @returns {number} (ISO year)
 */
var getISOYear = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var year = date.getFullYear();
  var startOfNextYear = startOfWeek(new Date(year + 1, 0, 4), 1);
  var startOfThisYear = startOfWeek(new Date(year, 0, 4), 1);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

module.exports = getISOYear;

