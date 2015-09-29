(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dateFns"] = factory();
	else
		root["dateFns"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  addDays: __webpack_require__(1),
	  addHours: __webpack_require__(4),
	  addMilliseconds: __webpack_require__(5),
	  addMinutes: __webpack_require__(6),
	  addMonths: __webpack_require__(7),
	  addQuarters: __webpack_require__(9),
	  addSeconds: __webpack_require__(10),
	  addWeeks: __webpack_require__(11),
	  addYears: __webpack_require__(12),
	  compareAsc: __webpack_require__(13),
	  compareDesc: __webpack_require__(14),
	  differenceInDays: __webpack_require__(15),
	  eachDay: __webpack_require__(17),
	  endOfDay: __webpack_require__(18),
	  endOfHour: __webpack_require__(19),
	  endOfMinute: __webpack_require__(20),
	  endOfMonth: __webpack_require__(21),
	  endOfQuarter: __webpack_require__(22),
	  endOfSecond: __webpack_require__(23),
	  endOfWeek: __webpack_require__(24),
	  endOfYear: __webpack_require__(25),
	  format: __webpack_require__(26),
	  getDate: __webpack_require__(29),
	  getDay: __webpack_require__(30),
	  getDayOfYear: __webpack_require__(27),
	  getDaysInMonth: __webpack_require__(8),
	  getHours: __webpack_require__(31),
	  getIsoWeek: __webpack_require__(32),
	  getIsoWeeksInYear: __webpack_require__(35),
	  getIsoYear: __webpack_require__(36),
	  getMilliseconds: __webpack_require__(37),
	  getMinutes: __webpack_require__(38),
	  getMonth: __webpack_require__(39),
	  getQuarter: __webpack_require__(40),
	  getSeconds: __webpack_require__(41),
	  getTimeSinceMidnight: __webpack_require__(3),
	  getYear: __webpack_require__(42),
	  isAfter: __webpack_require__(43),
	  isBefore: __webpack_require__(44),
	  isEqual: __webpack_require__(45),
	  isFirstDayOfMonth: __webpack_require__(46),
	  isFuture: __webpack_require__(47),
	  isLastDayOfMonth: __webpack_require__(48),
	  isLeapYear: __webpack_require__(49),
	  isPast: __webpack_require__(50),
	  isSameDay: __webpack_require__(51),
	  isSameHour: __webpack_require__(52),
	  isSameMinute: __webpack_require__(54),
	  isSameMonth: __webpack_require__(56),
	  isSameQuarter: __webpack_require__(57),
	  isSameSecond: __webpack_require__(59),
	  isSameWeek: __webpack_require__(61),
	  isSameYear: __webpack_require__(62),
	  isToday: __webpack_require__(63),
	  isWeekend: __webpack_require__(64),
	  isWithinRange: __webpack_require__(65),
	  lastDayOfMonth: __webpack_require__(66),
	  lastDayOfQuarter: __webpack_require__(67),
	  lastDayOfWeek: __webpack_require__(68),
	  lastDayOfYear: __webpack_require__(69),
	  max: __webpack_require__(70),
	  min: __webpack_require__(71),
	  parse: __webpack_require__(2),
	  setDate: __webpack_require__(72),
	  setDay: __webpack_require__(73),
	  setDayOfYear: __webpack_require__(74),
	  setHours: __webpack_require__(75),
	  setIsoWeek: __webpack_require__(76),
	  setIsoYear: __webpack_require__(77),
	  setMilliseconds: __webpack_require__(78),
	  setMinutes: __webpack_require__(79),
	  setMonth: __webpack_require__(80),
	  setQuarter: __webpack_require__(81),
	  setSeconds: __webpack_require__(82),
	  setYear: __webpack_require__(83),
	  startOfDay: __webpack_require__(16),
	  startOfHour: __webpack_require__(53),
	  startOfIsoYear: __webpack_require__(33),
	  startOfMinute: __webpack_require__(55),
	  startOfMonth: __webpack_require__(84),
	  startOfQuarter: __webpack_require__(58),
	  startOfSecond: __webpack_require__(60),
	  startOfWeek: __webpack_require__(34),
	  startOfYear: __webpack_require__(28),
	  subDays: __webpack_require__(85),
	  subHours: __webpack_require__(86),
	  subMilliseconds: __webpack_require__(87),
	  subMinutes: __webpack_require__(88),
	  subMonths: __webpack_require__(89),
	  subQuarters: __webpack_require__(90),
	  subSeconds: __webpack_require__(91),
	  subWeeks: __webpack_require__(92),
	  subYears: __webpack_require__(93)
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)

	/**
	 * Adds specified number of days to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addDays = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  date.setDate(date.getDate() + amount)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = addDays



/***/ },
/* 2 */
/***/ function(module, exports) {

	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000

	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/

	// date tokens
	var parseTokenYYYY = /^(\d{4})$/
	var parseTokenYYYYMM = /^(\d{4})-(\d{2})$/
	var parseTokenYYYYDDD = /^(\d{4})-?(\d{3})$/
	var parseTokenYYYYMMDD = /^(\d{4})-?(\d{2})-?(\d{2})$/
	var parseTokenYYYYWww = /^(\d{4})-?W(\d{2})$/
	var parseTokenYYYYWwwD = /^(\d{4})-?W(\d{2})-?(\d{1})$/

	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

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
	  if (dateStr instanceof Date) {
	    // Prevent dates to lose milliseconds when passed to new Date() in IE10
	    return new Date(dateStr.getTime())
	  } else if (typeof dateStr !== 'string') {
	    return new Date(dateStr)
	  } 

	  var dateStrings = splitDateString(dateStr)

	  var date = parseDate(dateStrings.date)

	  if (date) {
	    var time = 0
	    var offset

	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }

	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(date + time).getTimezoneOffset()
	      offset = new Date(date + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }

	    return new Date(date + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(dateStr)
	  }
	}

	var splitDateString = function(dateStr) {
	  var dateStrings = {}
	  var array = dateStr.split(parseTokenDateTimeDelimeter)
	  var timeString

	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }

	  if (timeString) {
	    var token
	    if (token = parseTokenTimezone.exec(timeString)) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }

	  return dateStrings
	}

	var parseDate = function(dateString) {
	  var token

	  // YYYY
	  if (token = parseTokenYYYY.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    return Date.UTC(year, 0, 1)

	  // YYYY-MM
	  } else if (token = parseTokenYYYYMM.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    var month = parseInt(token[2], 10) - 1
	    return Date.UTC(year, month, 1)

	  // YYYY-DDD or YYYYDDD
	  } else if (token = parseTokenYYYYDDD.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    var dayOfYear = parseInt(token[2], 10)
	    return Date.UTC(year, 0, dayOfYear)

	  // YYYY-MM-DD or YYYYMMDD
	  } else if (token = parseTokenYYYYMMDD.exec(dateString)) {
	    var year = parseInt(token[1], 10)
	    var month = parseInt(token[2], 10) - 1
	    var day = parseInt(token[3], 10)
	    return Date.UTC(year, month, day)

	  // YYYY-Www or YYYYWww
	  } else if (token = parseTokenYYYYWww.exec(dateString)) {
	    var year = parseInt(token[1])
	    var week = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week)

	  // YYYY-Www-D or YYYYWwwD
	  } else if (token = parseTokenYYYYWwwD.exec(dateString)) {
	    var year = parseInt(token[1])
	    var week = parseInt(token[2], 10) - 1
	    var dayOfWeek = parseInt(token[3], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)

	  // invalid ISO-formated date
	  } else {
	    return null
	  }
	}

	var parseTime = function(timeString) {
	  var token

	  // hh
	  if (token = parseTokenHH.exec(timeString)) {
	    var hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR

	  // hh:mm or hhmm
	  } else if (token = parseTokenHHMM.exec(timeString)) {
	    var hours = parseInt(token[1], 10)
	    var minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	      + minutes * MILLISECONDS_IN_MINUTE

	  // hh:mm:ss or hhmmss
	  } else if (token = parseTokenHHMMSS.exec(timeString)) {
	    var hours = parseInt(token[1], 10)
	    var minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	      + minutes * MILLISECONDS_IN_MINUTE
	      + seconds * 1000

	  // invalid ISO-formated time
	  } else {
	    return null
	  }
	}

	var parseTimezone = function(timezoneString) {
	  var token
	  var offset = 0

	  // Z
	  if (token = parseTokenTimezoneZ.exec(timezoneString)) {
	    offset = 0

	  // ±hh
	  } else if (token = parseTokenTimezoneHH.exec(timezoneString)) {
	    var absoluteOffset = parseInt(token[2], 10) * 60
	    offset = (token[1] == '+') ? - absoluteOffset : absoluteOffset

	  // ±hh:mm or ±hhmm
	  } else if (token = parseTokenTimezoneHHMM.exec(timezoneString)) {
	    var absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    offset = (token[1] == '+') ? - absoluteOffset : absoluteOffset
	  }

	  return offset
	}

	var dayOfISOYear = function(isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(Date.UTC(isoYear, 0, 4))
	  var diff = week * 7 + day + 1 - date.getUTCDay()
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date.getTime()
	}

	module.exports = parse



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000

	/**
	 * Returns time since midnight in milliseconds.
	 * @param {date|string} dirtyDate
	 * @returns {number}
	 */
	var getTimeSinceMidnight = function(dirtyDate) {
	  var date = parse(dirtyDate)

	  var hours = date.getHours()
	  var minutes = date.getMinutes()
	  var seconds = date.getSeconds()
	  var milliseconds = date.getMilliseconds()
	  
	  var time = hours * MILLISECONDS_IN_HOUR
	    + minutes * MILLISECONDS_IN_MINUTE
	    + seconds * 1000 + milliseconds

	  return time
	}

	module.exports = getTimeSinceMidnight



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Adds specified number of hours to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of hours
	 * @returns {date} new date
	 */
	var addHours = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  date.setHours(date.getHours() + amount)
	  return date
	}

	module.exports = addHours



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Adds specified number of milliseconds to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of milliseconds
	 * @returns {date} new date
	 */
	var addMilliseconds = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  date.setMilliseconds(date.getMilliseconds() + amount)
	  return date
	}

	module.exports = addMilliseconds



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Adds specified number of minutes to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of minutes
	 * @returns {date} new date
	 */
	var addMinutes = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  date.setMinutes(date.getMinutes() + amount)
	  return date
	}

	module.exports = addMinutes



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)
	var getDaysInMonth = __webpack_require__(8)

	/**
	 * Adds specified number of months to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addMonths = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  var desiredMonth = date.getMonth() + amount
	  var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1))

	  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = addMonths



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns number of days of month of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (days)
	 */
	var getDaysInMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var monthIndex = date.getMonth()
	  return new Date(year, monthIndex + 1, 0).getDate()
	}

	module.exports = getDaysInMonth



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(7)

	/**
	 * Adds specified number of quarters to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addQuarters = function(dirtyDate, amount) {
	  var months = amount * 3
	  return addMonths(dirtyDate, months)
	}

	module.exports = addQuarters



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Adds specified number of seconds to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of seconds
	 * @returns {date} new date
	 */
	var addSeconds = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  date.setSeconds(date.getSeconds() + amount)
	  return date
	}

	module.exports = addSeconds



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(1)

	/**
	 * Adds specified number of week to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addWeeks = function(dirtyDate, amount) {
	  var days = amount * 7
	  return addDays(dirtyDate, days)
	}

	module.exports = addWeeks



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)

	/**
	 * Adds specified number of years to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addYears = function(dirtyDate, amount) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  date.setFullYear(date.getFullYear() + amount)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = addYears



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Compares the two dates and returns -1, 0 or 1.
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {number}
	 */
	var compareAsc = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()

	  if (timeLeft < timeRight) {
	    return -1
	  } else if (timeLeft > timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}

	module.exports = compareAsc



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Compares the two dates reverse chronologicaly and returns -1, 0 or 1.
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {number}
	 */
	var compareDesc = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()

	  if (timeLeft > timeRight) {
	    return -1
	  } else if (timeLeft < timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}

	module.exports = compareDesc



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(16)

	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000

	/**
	 * Returns number of days between dates.
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {number}
	 */
	var differenceInDays = function(dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)

	  var timestampLeft = startOfDayLeft.getTime()
	    - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime()
	    - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}

	module.exports = differenceInDays



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a day for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfDay = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}

	module.exports = startOfDay



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns array of dates withtin specified range.
	 * @param {date|string} dirtyStart
	 * @param {date|string} dirtyEnd
	 * @returns {date[]}
	 */
	var eachDay = function(dirtyStart, dirtyEnd) {
	  var endTime = parse(dirtyEnd).getTime()
	  var dates = []
	  var tmpDate

	  var curDate = parse(dirtyStart)
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



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a day for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfDay = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(23, 59, 59, 999)
	  return date
	}

	module.exports = endOfDay



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of an hour for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfHour = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMinutes(59, 59, 999)
	  return date
	}

	module.exports = endOfHour



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a minute for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfMinute = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setSeconds(59, 999)
	  return date
	}

	module.exports = endOfMinute



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setHours(23, 59, 59, 999)
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  return date
	}

	module.exports = endOfMonth



/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a quarter for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfQuarter = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var currentMonth = date.getMonth()
	  var month = currentMonth - currentMonth % 3 + 3
	  date.setHours(23, 59, 59, 999)
	  date.setMonth(month, 0)
	  return date
	}

	module.exports = endOfQuarter



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a second for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfSecond = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMilliseconds(999)
	  return date
	}

	module.exports = endOfSecond



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var endOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0

	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt)

	  date.setHours(23, 59, 59, 999)
	  date.setDate(date.getDate() + diff)
	  return date
	}

	module.exports = endOfWeek



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns end of a year for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  date.setHours(23, 59, 59, 999)
	  date.setFullYear(year + 1, 0, 0)
	  return date
	}

	module.exports = endOfYear



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(27)
	var parse = __webpack_require__(2)

	var NUMBER_OF_MS_IN_DAY = 864e5

	/**
	 * Returns formatted date string in a given format
	 * @param {date|string} date
	 * @param {string} format
	 * @returns {string}
	 */
	var format = function(dirtyDate, format) {
	  var date = parse(dirtyDate)

	  if (!format) {
	    format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  }

	  var formatFunction = makeFormatFunction(format)
	  return formatFunction(date)
	}

	var formats = {
	  'M': function() {
	    return this.getMonth() + 1
	  },
	  'MM': function() {
	    return leftZeroFill(this.getMonth() + 1, 2)
	  },
	  'MMM': function() {
	    return locale.monthsShort[this.getMonth()]
	  },
	  'MMMM': function() {
	    return locale.months[this.getMonth()]
	  },
	  'Q': function() {
	    return Math.ceil((this.getMonth() + 1) / 3)
	  },
	  'D': function() {
	    return this.getDate()
	  },
	  'DD': function() {
	    return leftZeroFill(this.getDate(), 2)
	  },
	  'DDD': function() {
	    return getDayOfYear(this)
	  },
	  'DDDD': function() {
	    return leftZeroFill(formats['DDD'].apply(this), 3)
	  },
	  'd': function() {
	    return this.getDay()
	  },
	  'dd': function() {
	    return locale.dayNamesMin[this.getDay()]
	  },
	  'ddd': function() {
	    return locale.dayNamesShort[this.getDay()]
	  },
	  'dddd': function() {
	    return locale.dayNames[this.getDay()]
	  },
	  'E': function() {
	    return this.getDay() + 1
	  },
	  'YY': function() {
	    return String(this.getFullYear()).substr(2)
	  },
	  'YYYY': function() {
	    return this.getFullYear()
	  },
	  'A': function() {
	    return (this.getHours() / 12) >= 1 ? 'PM' : 'AM'
	  },
	  'a': function() {
	    return (this.getHours() / 12) >= 1 ? 'pm' : 'am'
	  },
	  'aa': function() {
	    return (this.getHours() / 12) >= 1 ? 'p.m.' : 'a.m.'
	  },
	  'H': function() {
	    return this.getHours()
	  },
	  'HH': function() {
	    return leftZeroFill(this.getHours(), 2)
	  },
	  'h': function() {
	    var hours = this.getHours()
	    if (hours == 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	  'hh': function() {
	    return leftZeroFill(formats['h'].apply(this), 2)
	  },
	  'm': function() {
	    return this.getMinutes()
	  },
	  'mm': function() {
	    return leftZeroFill(this.getMinutes(), 2)
	  },
	  's': function() {
	    return this.getSeconds()
	  },
	  'ss': function() {
	    return leftZeroFill(this.getSeconds(), 2)
	  },
	  'S': function() {
	    return this.getMilliseconds()
	  },
	  'SS': function() {
	    return leftZeroFill(this.getMilliseconds(), 2)
	  },
	  'SSS': function() {
	    return leftZeroFill(this.getMilliseconds(), 3)
	  }
	}

	var ordinalFunctions = ['M', 'D', 'DDD', 'd']
	ordinalFunctions.forEach(function(functionName) {
	  formats[functionName + 'o'] = function() {
	    return locale.ordinal(formats[functionName].apply(this))
	  }
	})

	var formattingTokens = Object.keys(formats).sort().reverse()
	var formattingTokensRegexp = new RegExp(
	  '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	)

	var makeFormatFunction = function(format) {
	  var array = format.match(formattingTokensRegexp), i, length

	  for (i = 0, length = array.length; i < length; i++) {
	    if (formats[array[i]]) {
	      array[i] = formats[array[i]]
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }

	  return function(mom) {
	    var output = ''
	    for (i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i].call(mom, format)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}

	var removeFormattingTokens = function(input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|\]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}

	var leftZeroFill = function(number, targetLength) {
	  var output = String(Math.abs(number))

	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}

	var locale = {
	  ordinal: function(number) {
	    if (number > 20 || number < 10) {
	      switch (number % 10) {
	        case 1:
	          return number + 'st'
	        case 2:
	          return number + 'nd'
	        case 3:
	          return number + 'rd'
	      }
	    }
	    return number + 'th'
	  },
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	}

	module.exports = format



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var startOfYear = __webpack_require__(28)
	var differenceInDays = __webpack_require__(15)

	/**
	 * Returns day of year of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (day of year)
	 */
	var getDayOfYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}

	module.exports = getDayOfYear



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a year for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfYear = function(dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0)
	  return date
	}

	module.exports = startOfYear



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns day of month of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (day of month)
	 */
	var getDate = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var dayOfMonth = date.getDate()
	  return dayOfMonth
	}

	module.exports = getDate



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns day of week of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (day)
	 */
	var getDay = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day
	}

	module.exports = getDay



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns amount of hours of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (hours)
	 */
	var getHours = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var hours = date.getHours()
	  return hours
	}

	module.exports = getHours



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var startOfDay = __webpack_require__(16)
	var startOfISOYear = __webpack_require__(33)

	var MILLISECONDS_IN_WEEK = 604800000

	/**
	 * Returns ISO week of given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {date|string} dirtyDate
	 * @returns {number} (ISO week)
	 *
	 * @example which week of ISO-week numbering year is 2 January 2005
	 * var result = getISOWeek(new Date(2005, 0, 2))
	 * //=> 53
	 */
	var getISOWeek = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = startOfDay(date).getTime() - startOfISOYear(date).getTime()
	  return Math.floor(diff / MILLISECONDS_IN_WEEK) + 1
	}

	module.exports = getISOWeek



/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var startOfWeek = __webpack_require__(34)

	/**
	 * Returns start of ISO week-numbering year,
	 * which always starts 3 days before year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date} (new date)
	 *
	 * @example when ISO week-numbering 2005 year starts
	 * var result = startOfISOYear(new Date(2005, 6, 2))
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	var startOfISOYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var startOfNextYear = startOfWeek(new Date(date.getFullYear() + 1, 0, 4), 1)
	  var startOfThisYear = startOfWeek(new Date(date.getFullYear(), 0, 4), 1)

	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return startOfNextYear
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return startOfThisYear
	  } else {
	    return startOfWeek(new Date(date.getFullYear() - 1, 0, 4), 1)
	  }
	}

	module.exports = startOfISOYear



/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var startOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0

	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsAt ? 7 : 0) + day - weekStartsAt

	  date.setHours(0, 0, 0, 0)
	  date.setDate(date.getDate() - diff)
	  return date
	}

	module.exports = startOfWeek



/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(33)
	var addWeeks = __webpack_require__(11)

	var MILLISECONDS_IN_WEEK = 604800000

	/**
	 * Returns number of ISO weeks of ISO week-numbering year of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (days)
	 */
	var getISOWeeksInYear = function(dirtyDate) {
	  var thisYear = startOfISOYear(dirtyDate)
	  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
	  var diff = nextYear.valueOf() - thisYear.valueOf()
	  return Math.round(diff / MILLISECONDS_IN_WEEK)
	}

	module.exports = getISOWeeksInYear



/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var startOfWeek = __webpack_require__(34)

	/**
	 * Returns ISO week-numbering year of given date,
	 * which always starts 3 days before year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {date|string} dirtyDate
	 * @returns {number} (ISO year)
	 *
	 * @example which ISO-week numbering year is 2 January 2005
	 * var result = getISOYear(new Date(2005, 0, 2))
	 * //=> 2004
	 */
	var getISOYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var startOfNextYear = startOfWeek(new Date(year + 1, 0, 4), 1)
	  var startOfThisYear = startOfWeek(new Date(year, 0, 4), 1)

	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year
	  } else {
	    return year - 1
	  }
	}

	module.exports = getISOYear



/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns amount of milliseconds of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (milliseconds)
	 */
	var getMilliseconds = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var milliseconds = date.getMilliseconds()
	  return milliseconds
	}

	module.exports = getMilliseconds



/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns amount of minutes of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (minutes)
	 */
	var getMinutes = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var minutes = date.getMinutes()
	  return minutes
	}

	module.exports = getMinutes



/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns month of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (month)
	 */
	var getMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  return month
	}

	module.exports = getMonth



/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns quarter of year of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (quarter)
	 *
	 * @example which quarter is 2 July 2014
	 * var result = getQuarter(new Date(2014, 6, 2))
	 * //=> 3
	 */
	var getQuarter = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var quarter = Math.floor(date.getMonth() / 3) + 1
	  return quarter
	}

	module.exports = getQuarter



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns amount of seconds of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (seconds)
	 */
	var getSeconds = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var seconds = date.getSeconds()
	  return seconds
	}

	module.exports = getSeconds



/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns year of passed date.
	 * @param {date|string} dirtyDate
	 * @returns {number} (year)
	 */
	var getYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  return year
	}

	module.exports = getYear



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is first date after second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 after 11 February 1987
	 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> true
	 */
	var isAfter = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = parse(dirtyDateToCompare)
	  var date = parse(dirtyDate)
	  return dateToCompare.getTime() > date.getTime()
	}

	module.exports = isAfter



/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is first date is before second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 before 11 February 1987
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> false
	 */
	var isBefore = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = parse(dirtyDateToCompare)
	  var date = parse(dirtyDate)
	  return dateToCompare.getTime() < date.getTime()
	}

	module.exports = isBefore



/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Are passed dates equal?
	 * @param {date|string} dirtyLeftDate
	 * @param {date|string} dirtyRightDate
	 * @returns {boolean}
	 */
	var isEqual = function(dirtyLeftDate, dirtyRightDate) {
	  var dateLeft = parse(dirtyLeftDate)
	  var dateRight = parse(dirtyRightDate)
	  return dateLeft.getTime() == dateRight.getTime()
	}

	module.exports = isEqual



/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var startOfDay = __webpack_require__(16)
	var startOfMonth = __webpack_require__(21)

	/**
	 * Is passed date first day of month?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isFirstDayOfMonth = function(dirtyDate) {
	  return parse(dirtyDate).getDate() == 1
	}

	module.exports = isFirstDayOfMonth



/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is passed date future?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isFuture = function(dirtyDate) {
	  return parse(dirtyDate).getTime() > new Date().getTime()
	}

	module.exports = isFuture



/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var endOfDay = __webpack_require__(18)
	var endOfMonth = __webpack_require__(21)

	/**
	 * Is passed date last day of month?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isLastDayOfMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  return endOfDay(date).getTime() == endOfMonth(date).getTime()
	}

	module.exports = isLastDayOfMonth



/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is date in the leap year?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isLeapYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  return new Date(year, 1, 29).getMonth() == 1
	}

	module.exports = isLeapYear



/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is passed date past?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isPast = function(dirtyDate) {
	  return parse(dirtyDate).getTime() < new Date().getTime()
	}

	module.exports = isPast



/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(16)

	/**
	 * Are passed dates has the same day?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameDay = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
	  var dateRightStartOfDay = startOfDay(dirtyDateRight)

	  return(
	    dateLeftStartOfDay.getTime() == dateRightStartOfDay.getTime()
	  )
	}

	module.exports = isSameDay



/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var startOfHour = __webpack_require__(53)

	/**
	 * Are passed dates belongs to the same hour?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameHour = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
	  var dateRightStartOfHour = startOfHour(dirtyDateRight)

	  return(
	    dateLeftStartOfHour.getTime() == dateRightStartOfHour.getTime()
	  )
	}

	module.exports = isSameHour



/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of an hour for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfHour = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMinutes(0, 0, 0)
	  return date
	}

	module.exports = startOfHour



/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var startOfMinute = __webpack_require__(55)

	/**
	 * Are passed dates belongs to the same minute?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameMinute = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
	  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

	  return(
	    dateLeftStartOfMinute.getTime() == dateRightStartOfMinute.getTime()
	  )
	}

	module.exports = isSameMinute



/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a minute for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfMinute = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setSeconds(0, 0)
	  return date
	}

	module.exports = startOfMinute



/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Are passed dates has the same month (and year)?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameMonth = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return(
	    dateLeft.getFullYear() == dateRight.getFullYear()
	    && dateLeft.getMonth() == dateRight.getMonth()
	  )
	}

	module.exports = isSameMonth



/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var startOfQuarter = __webpack_require__(58)

	/**
	 * Are passed dates belongs to the same quarter?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameQuarter = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
	  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

	  return(
	    dateLeftStartOfQuarter.getTime() == dateRightStartOfQuarter.getTime()
	  )
	}

	module.exports = isSameQuarter



/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a quarter for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfQuarter = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var currentMonth = date.getMonth()
	  var month = currentMonth - currentMonth % 3
	  date.setHours(0, 0, 0, 0)
	  date.setMonth(month, 1)
	  return date
	}

	module.exports = startOfQuarter



/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var startOfSecond = __webpack_require__(60)

	/**
	 * Are passed dates belongs to the same second?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameSecond = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
	  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

	  return(
	    dateLeftStartOfSecond.getTime() == dateRightStartOfSecond.getTime()
	  )
	}

	module.exports = isSameSecond



/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a second for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfSecond = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMilliseconds(0)
	  return date
	}

	module.exports = startOfSecond



/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(34)

	/**
	 * Are passed dates belongs to the same week?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {boolean}
	 */
	var isSameWeek = function(dirtyDateLeft, dirtyDateRight, weekStartsAt) {
	  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, weekStartsAt)
	  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, weekStartsAt)

	  return(
	    dateLeftStartOfWeek.getTime() == dateRightStartOfWeek.getTime()
	  )
	}

	module.exports = isSameWeek



/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Are passed dates has the same year?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameYear = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getFullYear() == dateRight.getFullYear()
	}

	module.exports = isSameYear



/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(16)

	/**
	 * Is passed date today?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isToday = function(dirtyDate) {
	  return startOfDay(dirtyDate).getTime() == startOfDay(new Date()).getTime()
	}

	module.exports = isToday



/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is passed date weekend?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isWeekend = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day == 0 || day == 6
	}

	module.exports = isWeekend



/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Is passed date within given range?
	 * @param {date|string} dirtyDate
	 * @param {date|string} dirtyStartDate
	 * @param {date|string} dirtyEndDate
	 * @returns {boolean}
	 *
	 * @example for date within the range
	 * isWithinRange(
	 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> true
	 *
	 * @example for date outside of the range
	 * isWithinRange(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> false
	 */
	var isWithinRange = function(dirtyDate, dirtyStartDate, dirtyEndDate) {
	  var date = parse(dirtyDate)
	  var time = date.getTime()
	  return(
	    time >= parse(dirtyStartDate).getTime()
	    && time <= parse(dirtyEndDate).getTime()
	  )
	}

	module.exports = isWithinRange



/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns last day of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var lastDayOfMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setHours(0, 0, 0, 0)
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  return date
	}

	module.exports = lastDayOfMonth



/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns last day of a quarter for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var lastDayOfQuarter = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var currentMonth = date.getMonth()
	  var month = currentMonth - currentMonth % 3 + 3
	  date.setHours(0, 0, 0, 0)
	  date.setMonth(month, 0)
	  return date
	}

	module.exports = lastDayOfQuarter



/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns last day of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var lastDayOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0

	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt)

	  date.setHours(0, 0, 0, 0)
	  date.setDate(date.getDate() + diff)
	  return date
	}

	module.exports = lastDayOfWeek



/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns last day of a year for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var lastDayOfYear = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  date.setHours(0, 0, 0, 0)
	  date.setFullYear(year + 1, 0, 0)
	  return date
	}

	module.exports = lastDayOfYear



/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns latest of the dates.
	 * @param {...date|string} dates
	 * @returns {date}
	 */
	var max = function() {
	  var dirtyDates = Array.prototype.slice.call(arguments)
	  var dates = dirtyDates.map(function(dirtyDate) {
	    return parse(dirtyDate)
	  })
	  var latestDirtyDate = Math.max.apply(null, dates)
	  return new Date(latestDirtyDate)
	}

	module.exports = max



/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns earliest of the dates.
	 * @param {...date|string} dates
	 * @returns {date}
	 */
	var min = function() {
	  var dirtyDates = Array.prototype.slice.call(arguments)
	  var dates = dirtyDates.map(function(dirtyDate) {
	    return parse(dirtyDate)
	  })
	  var earliestDirtyDate = Math.min.apply(null, dates)
	  return new Date(earliestDirtyDate)
	}

	module.exports = min



/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)

	/**
	 * Sets day of month to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} dayOfMonth
	 * @returns {date} (new date)
	 */
	var setDate = function(dirtyDate, dayOfMonth) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  date.setDate(dayOfMonth)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = setDate



/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var addDays = __webpack_require__(1)

	/**
	 * Sets day of week to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} day
	 * @param {number} weekStartsAt
	 * @returns {date} (new date)
	 */
	var setDay = function(dirtyDate, day, weekStartsAt) {
	  var date = parse(dirtyDate)
	  var currentDay = date.getDay()
	  var diff = (day < weekStartsAt ? 7 : 0) + day - currentDay
	  return addDays(date, diff)
	}

	module.exports = setDay



/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)

	/**
	 * Sets day of year to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} dayOfYear
	 * @returns {date} (new date)
	 */
	var setDayOfYear = function(dirtyDate, dayOfYear) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  date.setMonth(0)
	  date.setDate(dayOfYear)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = setDayOfYear



/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Sets amount of hours to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} hours
	 * @returns {date} (new date)
	 */
	var setHours = function(dirtyDate, hours) {
	  var date = parse(dirtyDate)
	  date.setHours(hours)
	  return date
	}

	module.exports = setHours



/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getISOWeek = __webpack_require__(32)
	var getTimeSinceMidnight = __webpack_require__(3)

	/**
	 * Sets ISO week to given date, saving weekday number.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {date|string} dirtyDate
	 * @param {number} isoWeek
	 * @returns {date} (new date)
	 */
	var setISOWeek = function(dirtyDate, isoWeek) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  var diff = getISOWeek(date) - isoWeek
	  date.setDate(date.getDate() - diff * 7)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = setISOWeek



/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)
	var startOfISOYear = __webpack_require__(33)
	var differenceInDays = __webpack_require__(15)

	var MILLISECONDS_IN_DAY = 86400000

	/**
	 * Sets ISO week-numbering year to given date,
	 * saving week number and weekday number.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {date|string} dirtyDate
	 * @param {number} isoYear
	 * @returns {date} (new date)
	 */
	var setISOYear = function(dirtyDate, isoYear) {
	  var date = parse(dirtyDate)

	  var time = getTimeSinceMidnight(date)
	  var diff = differenceInDays(date, startOfISOYear(date))

	  date = startOfISOYear(new Date(isoYear, 0, 4))
	  date.setDate(date.getDate() + diff)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = setISOYear



/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Sets amount of milliseconds to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} milliseconds
	 * @returns {date} (new date)
	 */
	var setMilliseconds = function(dirtyDate, milliseconds) {
	  var date = parse(dirtyDate)
	  date.setMilliseconds(milliseconds)
	  return date
	}

	module.exports = setMilliseconds



/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Sets amount of minutes to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} minutes
	 * @returns {date} (new date)
	 */
	var setMinutes = function(dirtyDate, minutes) {
	  var date = parse(dirtyDate)
	  date.setMinutes(minutes)
	  return date
	}

	module.exports = setMinutes



/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)
	var getDaysInMonth = __webpack_require__(8)

	/**
	 * Sets month index to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} monthIndex
	 * @returns {date} (new date)
	 */
	var setMonth = function(dirtyDate, monthIndex) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  var year = date.getFullYear()
	  var day = date.getDate()
	  var daysInMonth = getDaysInMonth(new Date(year, monthIndex))
	  date.setMonth(monthIndex, Math.min(day, daysInMonth))
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = setMonth



/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var setMonth = __webpack_require__(80)

	/**
	 * Sets quarter of year to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} quarter
	 * @returns {date} (new date)
	 *
	 * @example set second quarter to date 2 July 2014
	 * var result = setQuarter(new Date(2014, 6, 2), 2)
	 * //=> Wed Apr 02 2014 00:00:00
	 */
	var setQuarter = function(dirtyDate, quarter) {
	  var date = parse(dirtyDate)
	  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
	  var diff = quarter - oldQuarter
	  return setMonth(date, date.getMonth() + diff * 3)
	}

	module.exports = setQuarter



/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Sets amount of seconds to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} seconds
	 * @returns {date} (new date)
	 */
	var setSeconds = function(dirtyDate, seconds) {
	  var date = parse(dirtyDate)
	  date.setSeconds(seconds)
	  return date
	}

	module.exports = setSeconds



/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)
	var getTimeSinceMidnight = __webpack_require__(3)

	/**
	 * Sets year to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} fullYear
	 * @returns {date} (new date)
	 */
	var setYear = function(dirtyDate, fullYear) {
	  var date = parse(dirtyDate)
	  var time = getTimeSinceMidnight(date)
	  date.setFullYear(fullYear)
	  date.setHours(0, 0, 0, time)
	  return date
	}

	module.exports = setYear



/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2)

	/**
	 * Returns start of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfMonth = function(dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  date.setDate(1)
	  return date
	}

	module.exports = startOfMonth



/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(1)

	/**
	 * Subtracts specified number of days from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subDays = function(dirtyDate, amount) {
	  return addDays(dirtyDate, -amount)
	}

	module.exports = subDays



/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var addHours = __webpack_require__(4)

	/**
	 * Subtracts specified number of hours from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of hours
	 * @returns {date} new date
	 */
	var subHours = function(dirtyDate, amount) {
	  return addHours(dirtyDate, -amount)
	}

	module.exports = subHours



/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(5)

	/**
	 * Subtracts specified number of milliseconds from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of milliseconds
	 * @returns {date} new date
	 */
	var subMilliseconds = function(dirtyDate, amount) {
	  return addMilliseconds(dirtyDate, -amount)
	}

	module.exports = subMilliseconds



/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(6)

	/**
	 * Subtracts specified number of minutes from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of minutes
	 * @returns {date} new date
	 */
	var subMinutes = function(dirtyDate, amount) {
	  return addMinutes(dirtyDate, -amount)
	}

	module.exports = subMinutes



/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(7)

	/**
	 * Subtracts specified number of month from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subMonths = function(dirtyDate, amount) {
	  return addMonths(dirtyDate, -amount)
	}

	module.exports = subMonths



/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var addQuarters = __webpack_require__(9)

	/**
	 * Subtracts specified number of quarters from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subQuarters = function(dirtyDate, amount) {
	  return addQuarters(dirtyDate, -amount)
	}

	module.exports = subQuarters



/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var addSeconds = __webpack_require__(10)

	/**
	 * Subtracts specified number of seconds from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of seconds
	 * @returns {date} new date
	 */
	var subSeconds = function(dirtyDate, amount) {
	  return addSeconds(dirtyDate, -amount)
	}

	module.exports = subSeconds



/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var addWeeks = __webpack_require__(11)

	/**
	 * Subtracts specified number of weeks from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subWeeks = function(dirtyDate, amount) {
	  return addWeeks(dirtyDate, -amount)
	}

	module.exports = subWeeks



/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var addYears = __webpack_require__(12)

	/**
	 * Subtracts specified number of years from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subYears = function(dirtyDate, amount) {
	  return addYears(dirtyDate, -amount)
	}

	module.exports = subYears



/***/ }
/******/ ])
});
;