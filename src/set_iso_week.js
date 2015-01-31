var getISOWeek = require('./get_iso_week');

/**
 * Sets ISO week to given date, saving weekday number.
 * @param {date|string} dirtyDate
 * @param {number} isoWeek
 * @returns {date} (new date)
 */
var setISOWeek = function(dirtyDate, isoWeek) {
  var date = new Date(dirtyDate);
  var diff = getISOWeek(date) - isoWeek;
  date.setTime(date.getTime() - diff * 604800000);
  return date;
};

module.exports = setISOWeek;

