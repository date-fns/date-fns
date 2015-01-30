/**
 * Returns quarter of year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (quarter)
 */
var getQuarter = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
};

module.exports = getQuarter;

