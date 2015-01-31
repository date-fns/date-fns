var startOfISOYear = require('./start_of_iso_year');

/**
 * Sets ISO week-numbering year to given date,
 * saving week number and weekday number.
 * @param {date|string} dirtyDate
 * @param {number} isoYear
 * @returns {date} (new date)
 */
var setISOYear = function(dirtyDate, isoYear) {
  var date = new Date(dirtyDate);
  var startOfThisYear = startOfISOYear(date);
  var diff = date.getTime() - startOfThisYear.getTime();
  date.setTime(startOfISOYear(new Date(isoYear, 0, 4)).getTime() + diff);
  return date;
};

module.exports = setISOYear;

