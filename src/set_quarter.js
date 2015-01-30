/**
 * Sets quarter of year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} quarter
 * @returns {date} (new date)
 */
var setQuarter = function(dirtyDate, quarter) {
  var date = new Date(dirtyDate);
  var oldQuarter = Math.floor(date.getMonth()/3) + 1;
  var diff = quarter - oldQuarter;
  date.setMonth(date.getMonth() + diff*3);
  return date;
};

module.exports = setQuarter;

