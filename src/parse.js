var addDays = require('./add_days');
var addMinutes = require('./add_minutes');
var startOfWeek = require('./start_of_week');

var parseTokenDateTimeDelimeter = /[T ]/;

// date tokens
var parseTokenYYYY = /^(\d{4})$/;
var parseTokenYYYYMM = /^(\d{4})-(\d{2})$/;
var parseTokenYYYYDDD = /^(\d{4})-?(\d{3})$/;
var parseTokenYYYYMMDD = /^(\d{4})-?(\d{2})-?(\d{2})$/;
var parseTokenYYYYWww = /^(\d{4})-?W(\d{2})$/;
var parseTokenYYYYWwwD = /^(\d{4})-?W(\d{2})-?(\d{1})$/;

// time tokens
var parseTokenPlainTime = /:/;
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/;
var parseTokenTimezoneZ = /^(Z)$/;
var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;

/**
 * Parses date string representation. It accepts ISO 8601 format as well as
 * partial implementation.
 *
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} dateStr
 * @return {date} parsed date in local time zone.
 */
var parse = function(dateStr) {
  var dateStrings = splitDateString(dateStr);
  var parsedDate = parseDate(dateStrings.date);

  if (dateStrings.time) {
    parsedDate = parseTime(parsedDate, dateStrings.time);

    if (dateStrings.timezone) {
      parsedDate = parseTimezone(parsedDate, dateStrings.timezone);
    }
  }

  return parsedDate;
};


var splitDateString = function(dateStr) {
  var dateStrings = {};
  var array = dateStr.split(parseTokenDateTimeDelimeter);
  var timeString;

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token;
    if (token = parseTokenTimezone.exec(timeString)) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
};

var parseDate = function(dateString) {
  var token;

  // YYYY
  if (token = parseTokenYYYY.exec(dateString)) {
    var year = parseInt(token[1], 10);
    return new Date(year, 0, 1);
  }

  // YYYY-MM
  else if (token = parseTokenYYYYMM.exec(dateString)) {
    var year = parseInt(token[1], 10);
    var month = parseInt(token[2], 10) - 1;
    return new Date(year, month, 1);
  }

  // YYYY-DDD or YYYYDDD
  else if (token = parseTokenYYYYDDD.exec(dateString)) {
    var year = parseInt(token[1], 10);
    var dayOfYear = parseInt(token[2], 10);
    return addDays(new Date(year, 0, 0), dayOfYear);
  }

  // YYYY-MM-DD or YYYYMMDD
  else if (token = parseTokenYYYYMMDD.exec(dateString)) {
    var year = parseInt(token[1], 10);
    var month = parseInt(token[2], 10) - 1;
    var day = parseInt(token[3], 10);
    return new Date(year, month, day);
  }

  // YYYY-Www or YYYYWww
  else if (token = parseTokenYYYYWww.exec(dateString)) {
    var year = parseInt(token[1]);
    var week = parseInt(token[2], 10) - 1;
    return addDays(startOfISOYear(year), week * 7);
  }

  // YYYY-Www-D or YYYYWwwD
  else if (token = parseTokenYYYYWwwD.exec(dateString)) {
    var year = parseInt(token[1]);
    var week = parseInt(token[2], 10) - 1;
    var dayOfWeek = parseInt(token[3], 10) - 1;
    return addDays(startOfISOYear(year), week * 7 + dayOfWeek);
  }

  // invalid ISO-formated date
  else {
    return new Date();
  }
};

var parseTime = function(dirtyDate, timeString) {
  var token;
  var hours;
  var minutes;
  var seconds;
  var date = new Date(dirtyDate);

  // hh
  if (token = parseTokenHH.exec(timeString)) {
    var hours = parseFloat(token[1].replace(',', '.'));
  }

  // hh:mm or hhmm
  else if (token = parseTokenHHMM.exec(timeString)) {
    var hours = parseInt(token[1], 10);
    var minutes = parseFloat(token[2].replace(',', '.'));
  }

  // hh:mm:ss or hhmmss
  else if (token = parseTokenHHMMSS.exec(timeString)) {
    var hours = parseInt(token[1], 10);
    var minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
  }

  return setFloatTime(date, hours, minutes, seconds);
};

var parseTimezone = function(dirtyDate, timezoneString) {
  var token;
  var offset = 0;
  var date = new Date(dirtyDate);

  // Z
  if (token = parseTokenTimezoneZ.exec(timezoneString)) {
    offset = 0;
  }

  // ±hh
  else if (token = parseTokenTimezoneHH.exec(timezoneString)) {
    var absoluteOffset = parseInt(token[2], 10) * 60;
    offset = (token[1] == '+') ? absoluteOffset : -absoluteOffset;
  }

  // ±hh:mm or ±hhmm
  else if (token = parseTokenTimezoneHHMM.exec(timezoneString)) {
    var absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    offset = (token[1] == '+') ? absoluteOffset : -absoluteOffset;
  }

  return addMinutes(date, -date.getTimezoneOffset() - offset);
}


var startOfISOYear = function(year) {
  /**
   * January 4th is always in first week of ISO year
   * Week starts with monday
   */
  return startOfWeek(new Date(year, 0, 4), 1);
}

var setFloatTime = function(dirtyDate, hours, minutes, seconds) {
  var date = new Date(dirtyDate);

  /**
   * Both 24:00 and 0:00 are refer to midnight in ISO 8601
   */
  var calculatedHours = hours % 24 || 0;
  /**
   * If some lower order time element is unknown
   * it calculates from fractional part of higher order element
   */
  var calculatedMinutes = minutes || calculatedHours % 1 * 60;
  var calculatedSeconds = seconds || calculatedMinutes % 1 * 60;
  var calculatedMilliseconds = calculatedSeconds % 1 * 1000;

  date.setHours(hours % 24);
  date.setMinutes(calculatedMinutes);
  date.setSeconds(calculatedSeconds);
  date.setMilliseconds(calculatedMilliseconds);

  return date;
}

module.exports = parse;

