/**
 * Returns array of dates withtin specified range.
 * @param {date|string} dirtyStart
 * @param {date|string} dirtyEnd
 * @returns {date[]}
 */
var eachDay = function(dirtyStart, dirtyEnd) {
  var endTime = new Date(dirtyEnd).getTime();
  var dates = [];

  var curDate = new Date(dirtyStart);
  curDate.setHours(0, 0, 0, 0);

  while (curDate.getTime() <= endTime) {
    dates.push(new Date(curDate));
    curDate.setDate(curDate.getDate() + 1);
  }

  return dates;
};

module.exports = eachDay;

