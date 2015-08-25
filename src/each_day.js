/**
 * Returns array of dates withtin specified range.
 * @param {date|string} dirtyStart
 * @param {date|string} dirtyEnd
 * @returns {date[]}
 */
var eachDay = function(dirtyStart, dirtyEnd) {
  var endTime = new Date(dirtyEnd).getTime()
  var dates = []
  var tmpDate

  var curDate = new Date(dirtyStart)
  curDate.setHours(0, 0, 0, 0)

  while (curDate.getTime() <= endTime) {
    dates.push(new Date(curDate))

    curDate.setDate(curDate.getDate() + 1)

    /**
     * add additional 5 hours to get next day,
     * because of possible troubles with daylight savings dates
     */
    tmpDate = new Date(curDate.setTime(curDate.getTime() + 5 * 60 * 60 * 1000))
    tmpDate = new Date(tmpDate.setHours(0, 0, 0, 0))
    curDate = tmpDate
  }

  return dates
}

module.exports = eachDay

