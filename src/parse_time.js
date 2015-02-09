var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;

var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;

/**
 * Parses ISO 8601 time string representation and returns time in milliseconds.
 *
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} timeStr
 * @return {number} time in milliseconds.
 */
var parseTime = function(timeStr) {
  var token;

  // hh
  if (token = parseTokenHH.exec(timeStr)) {
    var hours = parseFloat(token[1].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR;
  }

  // hh:mm or hhmm
  else if (token = parseTokenHHMM.exec(timeStr)) {
    var hours = parseInt(token[1], 10);
    var minutes = parseFloat(token[2].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE;
  }

  // hh:mm:ss or hhmmss
  else if (token = parseTokenHHMMSS.exec(timeStr)) {
    var hours = parseInt(token[1], 10);
    var minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000;
  }

  // invalid ISO-formated time
  else {
    return null;
  }
};

module.exports = parseTime;

