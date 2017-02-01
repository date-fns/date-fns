var toDate = require('../../../to_date/index.js')

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes (dirtyDate, amount, options) {
  var date = toDate(dirtyDate, options)
  date.setUTCMinutes(date.getUTCMinutes() + amount)
  return date
}

module.exports = addUTCMinutes
