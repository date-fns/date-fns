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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    addDays: __webpack_require__(1),
	    addHours: __webpack_require__(3),
	    addISOYears: __webpack_require__(4),
	    addMilliseconds: __webpack_require__(12),
	    addMinutes: __webpack_require__(13),
	    addMonths: __webpack_require__(14),
	    addQuarters: __webpack_require__(16),
	    addSeconds: __webpack_require__(17),
	    addWeeks: __webpack_require__(18),
	    addYears: __webpack_require__(19),
	    closestTo: __webpack_require__(20),
	    compareAsc: __webpack_require__(21),
	    compareDesc: __webpack_require__(22),
	    differenceInCalendarDays: __webpack_require__(10),
	    differenceInCalendarISOWeeks: __webpack_require__(23),
	    differenceInCalendarISOYears: __webpack_require__(24),
	    differenceInCalendarMonths: __webpack_require__(25),
	    differenceInCalendarQuarters: __webpack_require__(26),
	    differenceInCalendarWeeks: __webpack_require__(28),
	    differenceInCalendarYears: __webpack_require__(29),
	    differenceInDays: __webpack_require__(30),
	    differenceInHours: __webpack_require__(31),
	    differenceInISOYears: __webpack_require__(33),
	    differenceInMilliseconds: __webpack_require__(32),
	    differenceInMinutes: __webpack_require__(35),
	    differenceInMonths: __webpack_require__(36),
	    differenceInQuarters: __webpack_require__(37),
	    differenceInSeconds: __webpack_require__(38),
	    differenceInWeeks: __webpack_require__(39),
	    differenceInYears: __webpack_require__(40),
	    eachDay: __webpack_require__(41),
	    endOfDay: __webpack_require__(42),
	    endOfHour: __webpack_require__(43),
	    endOfISOWeek: __webpack_require__(44),
	    endOfISOYear: __webpack_require__(46),
	    endOfMinute: __webpack_require__(47),
	    endOfMonth: __webpack_require__(48),
	    endOfQuarter: __webpack_require__(49),
	    endOfSecond: __webpack_require__(50),
	    endOfWeek: __webpack_require__(45),
	    endOfYear: __webpack_require__(51),
	    format: __webpack_require__(52),
	    getDate: __webpack_require__(56),
	    getDay: __webpack_require__(57),
	    getDayOfYear: __webpack_require__(53),
	    getDaysInMonth: __webpack_require__(15),
	    getDaysInYear: __webpack_require__(58),
	    getHours: __webpack_require__(60),
	    getISOWeek: __webpack_require__(55),
	    getISOWeeksInYear: __webpack_require__(61),
	    getISOYear: __webpack_require__(5),
	    getMilliseconds: __webpack_require__(62),
	    getMinutes: __webpack_require__(63),
	    getMonth: __webpack_require__(64),
	    getQuarter: __webpack_require__(27),
	    getSeconds: __webpack_require__(65),
	    getYear: __webpack_require__(66),
	    isAfter: __webpack_require__(67),
	    isBefore: __webpack_require__(68),
	    isEqual: __webpack_require__(69),
	    isFirstDayOfMonth: __webpack_require__(70),
	    isFriday: __webpack_require__(71),
	    isFuture: __webpack_require__(72),
	    isLastDayOfMonth: __webpack_require__(73),
	    isLeapYear: __webpack_require__(59),
	    isMonday: __webpack_require__(74),
	    isPast: __webpack_require__(75),
	    isSameDay: __webpack_require__(76),
	    isSameHour: __webpack_require__(77),
	    isSameISOWeek: __webpack_require__(79),
	    isSameISOYear: __webpack_require__(81),
	    isSameMinute: __webpack_require__(82),
	    isSameMonth: __webpack_require__(84),
	    isSameQuarter: __webpack_require__(85),
	    isSameSecond: __webpack_require__(87),
	    isSameWeek: __webpack_require__(80),
	    isSameYear: __webpack_require__(89),
	    isSaturday: __webpack_require__(90),
	    isSunday: __webpack_require__(91),
	    isThisHour: __webpack_require__(92),
	    isThisISOWeek: __webpack_require__(93),
	    isThisISOYear: __webpack_require__(94),
	    isThisMinute: __webpack_require__(95),
	    isThisMonth: __webpack_require__(96),
	    isThisQuarter: __webpack_require__(97),
	    isThisSecond: __webpack_require__(98),
	    isThisWeek: __webpack_require__(99),
	    isThisYear: __webpack_require__(100),
	    isThursday: __webpack_require__(101),
	    isToday: __webpack_require__(102),
	    isTomorrow: __webpack_require__(103),
	    isTuesday: __webpack_require__(104),
	    isValid: __webpack_require__(105),
	    isWednesday: __webpack_require__(106),
	    isWeekend: __webpack_require__(107),
	    isWithinRange: __webpack_require__(108),
	    isYesterday: __webpack_require__(109),
	    lastDayOfISOWeek: __webpack_require__(110),
	    lastDayOfISOYear: __webpack_require__(112),
	    lastDayOfMonth: __webpack_require__(113),
	    lastDayOfQuarter: __webpack_require__(114),
	    lastDayOfWeek: __webpack_require__(111),
	    lastDayOfYear: __webpack_require__(115),
	    max: __webpack_require__(116),
	    min: __webpack_require__(117),
	    parse: __webpack_require__(2),
	    setDate: __webpack_require__(118),
	    setDay: __webpack_require__(119),
	    setDayOfYear: __webpack_require__(120),
	    setHours: __webpack_require__(121),
	    setISOWeek: __webpack_require__(122),
	    setISOYear: __webpack_require__(8),
	    setMilliseconds: __webpack_require__(123),
	    setMinutes: __webpack_require__(124),
	    setMonth: __webpack_require__(125),
	    setQuarter: __webpack_require__(126),
	    setSeconds: __webpack_require__(127),
	    setYear: __webpack_require__(128),
	    startOfDay: __webpack_require__(11),
	    startOfHour: __webpack_require__(78),
	    startOfISOWeek: __webpack_require__(6),
	    startOfISOYear: __webpack_require__(9),
	    startOfMinute: __webpack_require__(83),
	    startOfMonth: __webpack_require__(129),
	    startOfQuarter: __webpack_require__(86),
	    startOfSecond: __webpack_require__(88),
	    startOfWeek: __webpack_require__(7),
	    startOfYear: __webpack_require__(54),
	    subDays: __webpack_require__(130),
	    subHours: __webpack_require__(131),
	    subISOYears: __webpack_require__(34),
	    subMilliseconds: __webpack_require__(132),
	    subMinutes: __webpack_require__(133),
	    subMonths: __webpack_require__(134),
	    subQuarters: __webpack_require__(135),
	    subSeconds: __webpack_require__(136),
	    subWeeks: __webpack_require__(137),
	    subYears: __webpack_require__(138)
	};
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addDays = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setDate(date.getDate() + amount);
	    return date;
	};
	module.exports = addDays;
	


/***/ },
/* 2 */
/***/ function(module, exports) {

	var MILLISECONDS_IN_HOUR = 3600000;
	var MILLISECONDS_IN_MINUTE = 60000;
	var parseTokenDateTimeDelimeter = /[T ]/;
	var parseTokenPlainTime = /:/;
	var parseTokenYYYY = /^(\d{4})$/;
	var parseTokenYYYYMM = /^(\d{4})-(\d{2})$/;
	var parseTokenYYYYDDD = /^(\d{4})-?(\d{3})$/;
	var parseTokenYYYYMMDD = /^(\d{4})-?(\d{2})-?(\d{2})$/;
	var parseTokenYYYYWww = /^(\d{4})-?W(\d{2})$/;
	var parseTokenYYYYWwwD = /^(\d{4})-?W(\d{2})-?(\d{1})$/;
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;
	var parseTokenTimezone = /([Z+-].*)$/;
	var parseTokenTimezoneZ = /^(Z)$/;
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;
	var parse = function (dateStr) {
	    if (dateStr instanceof Date) {
	        return new Date(dateStr.getTime());
	    } else if (typeof dateStr !== 'string') {
	        return new Date(dateStr);
	    }
	    var dateStrings = splitDateString(dateStr);
	    var date = parseDate(dateStrings.date);
	    if (date) {
	        var time = 0;
	        var offset;
	        if (dateStrings.time) {
	            time = parseTime(dateStrings.time);
	        }
	        if (dateStrings.timezone) {
	            offset = parseTimezone(dateStrings.timezone);
	        } else {
	            offset = new Date(date + time).getTimezoneOffset();
	            offset = new Date(date + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
	        }
	        return new Date(date + time + offset * MILLISECONDS_IN_MINUTE);
	    } else {
	        return new Date(dateStr);
	    }
	};
	var splitDateString = function (dateStr) {
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
	var parseDate = function (dateString) {
	    var token;
	    if (token = parseTokenYYYY.exec(dateString)) {
	        var year = parseInt(token[1], 10);
	        return Date.UTC(year, 0, 1);
	    } else if (token = parseTokenYYYYMM.exec(dateString)) {
	        var year = parseInt(token[1], 10);
	        var month = parseInt(token[2], 10) - 1;
	        return Date.UTC(year, month, 1);
	    } else if (token = parseTokenYYYYDDD.exec(dateString)) {
	        var year = parseInt(token[1], 10);
	        var dayOfYear = parseInt(token[2], 10);
	        return Date.UTC(year, 0, dayOfYear);
	    } else if (token = parseTokenYYYYMMDD.exec(dateString)) {
	        var year = parseInt(token[1], 10);
	        var month = parseInt(token[2], 10) - 1;
	        var day = parseInt(token[3], 10);
	        return Date.UTC(year, month, day);
	    } else if (token = parseTokenYYYYWww.exec(dateString)) {
	        var year = parseInt(token[1]);
	        var week = parseInt(token[2], 10) - 1;
	        return dayOfISOYear(year, week);
	    } else if (token = parseTokenYYYYWwwD.exec(dateString)) {
	        var year = parseInt(token[1]);
	        var week = parseInt(token[2], 10) - 1;
	        var dayOfWeek = parseInt(token[3], 10) - 1;
	        return dayOfISOYear(year, week, dayOfWeek);
	    } else {
	        return null;
	    }
	};
	var parseTime = function (timeString) {
	    var token;
	    if (token = parseTokenHH.exec(timeString)) {
	        var hours = parseFloat(token[1].replace(',', '.'));
	        return hours % 24 * MILLISECONDS_IN_HOUR;
	    } else if (token = parseTokenHHMM.exec(timeString)) {
	        var hours = parseInt(token[1], 10);
	        var minutes = parseFloat(token[2].replace(',', '.'));
	        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
	    } else if (token = parseTokenHHMMSS.exec(timeString)) {
	        var hours = parseInt(token[1], 10);
	        var minutes = parseInt(token[2], 10);
	        var seconds = parseFloat(token[3].replace(',', '.'));
	        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
	    } else {
	        return null;
	    }
	};
	var parseTimezone = function (timezoneString) {
	    var token;
	    var offset = 0;
	    if (token = parseTokenTimezoneZ.exec(timezoneString)) {
	        offset = 0;
	    } else if (token = parseTokenTimezoneHH.exec(timezoneString)) {
	        var absoluteOffset = parseInt(token[2], 10) * 60;
	        offset = token[1] == '+' ? -absoluteOffset : absoluteOffset;
	    } else if (token = parseTokenTimezoneHHMM.exec(timezoneString)) {
	        var absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
	        offset = token[1] == '+' ? -absoluteOffset : absoluteOffset;
	    }
	    return offset;
	};
	var dayOfISOYear = function (isoYear, week, day) {
	    week = week || 0;
	    day = day || 0;
	    var date = new Date(Date.UTC(isoYear, 0, 4));
	    var diff = week * 7 + day + 1 - date.getUTCDay();
	    date.setUTCDate(date.getUTCDate() + diff);
	    return date.getTime();
	};
	module.exports = parse;
	


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addHours = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setHours(date.getHours() + amount);
	    return date;
	};
	module.exports = addHours;
	


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(5);
	var setISOYear = __webpack_require__(8);
	var addISOYears = function (dirtyDate, amount) {
	    return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount);
	};
	module.exports = addISOYears;
	


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfISOWeek = __webpack_require__(6);
	var getISOYear = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    var startOfNextYear = startOfISOWeek(new Date(year + 1, 0, 4));
	    var startOfThisYear = startOfISOWeek(new Date(year, 0, 4));
	    if (date.getTime() >= startOfNextYear.getTime()) {
	        return year + 1;
	    } else if (date.getTime() >= startOfThisYear.getTime()) {
	        return year;
	    } else {
	        return year - 1;
	    }
	};
	module.exports = getISOYear;
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(7);
	var startOfISOWeek = function (dirtyDate) {
	    return startOfWeek(dirtyDate, 1);
	};
	module.exports = startOfISOWeek;
	


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfWeek = function (dirtyDate, weekStartsAt) {
	    weekStartsAt = weekStartsAt || 0;
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    var diff = (day < weekStartsAt ? 7 : 0) + day - weekStartsAt;
	    date.setDate(date.getDate() - diff);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = startOfWeek;
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfISOYear = __webpack_require__(9);
	var differenceInCalendarDays = __webpack_require__(10);
	var setISOYear = function (dirtyDate, isoYear) {
	    var date = parse(dirtyDate);
	    var diff = differenceInCalendarDays(date, startOfISOYear(date));
	    date = startOfISOYear(new Date(isoYear, 0, 4));
	    date.setDate(date.getDate() + diff);
	    return date;
	};
	module.exports = setISOYear;
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(5);
	var startOfISOWeek = __webpack_require__(6);
	var startOfISOYear = function (dirtyDate) {
	    var year = getISOYear(dirtyDate);
	    var date = startOfISOWeek(new Date(year, 0, 4));
	    return date;
	};
	module.exports = startOfISOYear;
	


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11);
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_DAY = 86400000;
	var differenceInCalendarDays = function (dirtyDateLeft, dirtyDateRight) {
	    var startOfDayLeft = startOfDay(dirtyDateLeft);
	    var startOfDayRight = startOfDay(dirtyDateRight);
	    var timestampLeft = startOfDayLeft.getTime() - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    var timestampRight = startOfDayRight.getTime() - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
	};
	module.exports = differenceInCalendarDays;
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfDay = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = startOfDay;
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addMilliseconds = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(date.getMilliseconds() + amount);
	    return date;
	};
	module.exports = addMilliseconds;
	


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addMinutes = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setMinutes(date.getMinutes() + amount);
	    return date;
	};
	module.exports = addMinutes;
	


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDaysInMonth = __webpack_require__(15);
	var addMonths = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    var desiredMonth = date.getMonth() + amount;
	    var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1));
	    date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
	    return date;
	};
	module.exports = addMonths;
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDaysInMonth = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    var monthIndex = date.getMonth();
	    return new Date(year, monthIndex + 1, 0).getDate();
	};
	module.exports = getDaysInMonth;
	


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(14);
	var addQuarters = function (dirtyDate, amount) {
	    var months = amount * 3;
	    return addMonths(dirtyDate, months);
	};
	module.exports = addQuarters;
	


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addSeconds = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setSeconds(date.getSeconds() + amount);
	    return date;
	};
	module.exports = addSeconds;
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(1);
	var addWeeks = function (dirtyDate, amount) {
	    var days = amount * 7;
	    return addDays(dirtyDate, days);
	};
	module.exports = addWeeks;
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addYears = function (dirtyDate, amount) {
	    var date = parse(dirtyDate);
	    date.setFullYear(date.getFullYear() + amount);
	    return date;
	};
	module.exports = addYears;
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var closestTo = function (dirtyDateToCompare, dirtyDatesArray) {
	    if (!(dirtyDatesArray instanceof Array)) {
	        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an array');
	    }
	    var dateToCompare = parse(dirtyDateToCompare);
	    var timeToCompare = dateToCompare.getTime();
	    var result;
	    var minDistance;
	    dirtyDatesArray.forEach(function (dirtyDate) {
	        var currentDate = parse(dirtyDate);
	        var distance = Math.abs(timeToCompare - currentDate.getTime());
	        if (result === undefined || distance < minDistance) {
	            result = currentDate;
	            minDistance = distance;
	        }
	    });
	    return result;
	};
	module.exports = closestTo;
	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var compareAsc = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var timeLeft = dateLeft.getTime();
	    var dateRight = parse(dirtyDateRight);
	    var timeRight = dateRight.getTime();
	    if (timeLeft < timeRight) {
	        return -1;
	    } else if (timeLeft > timeRight) {
	        return 1;
	    } else {
	        return 0;
	    }
	};
	module.exports = compareAsc;
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var compareDesc = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var timeLeft = dateLeft.getTime();
	    var dateRight = parse(dirtyDateRight);
	    var timeRight = dateRight.getTime();
	    if (timeLeft > timeRight) {
	        return -1;
	    } else if (timeLeft < timeRight) {
	        return 1;
	    } else {
	        return 0;
	    }
	};
	module.exports = compareDesc;
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOWeek = __webpack_require__(6);
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_WEEK = 604800000;
	var differenceInCalendarISOWeeks = function (dirtyDateLeft, dirtyDateRight) {
	    var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft);
	    var startOfISOWeekRight = startOfISOWeek(dirtyDateRight);
	    var timestampLeft = startOfISOWeekLeft.getTime() - startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    var timestampRight = startOfISOWeekRight.getTime() - startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
	};
	module.exports = differenceInCalendarISOWeeks;
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(5);
	var differenceInCalendarISOYears = function (dirtyDateLeft, dirtyDateRight) {
	    return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight);
	};
	module.exports = differenceInCalendarISOYears;
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarMonths = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
	    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
	    return yearDiff * 12 + monthDiff;
	};
	module.exports = differenceInCalendarMonths;
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getQuarter = __webpack_require__(27);
	var parse = __webpack_require__(2);
	var differenceInCalendarQuarters = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
	    var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight);
	    return yearDiff * 4 + quarterDiff;
	};
	module.exports = differenceInCalendarQuarters;
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getQuarter = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var quarter = Math.floor(date.getMonth() / 3) + 1;
	    return quarter;
	};
	module.exports = getQuarter;
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(7);
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_WEEK = 604800000;
	var differenceInCalendarWeeks = function (dirtyDateLeft, dirtyDateRight, weekStartsAt) {
	    weekStartsAt = weekStartsAt || 0;
	    var startOfWeekLeft = startOfWeek(dirtyDateLeft, weekStartsAt);
	    var startOfWeekRight = startOfWeek(dirtyDateRight, weekStartsAt);
	    var timestampLeft = startOfWeekLeft.getTime() - startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    var timestampRight = startOfWeekRight.getTime() - startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
	    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
	};
	module.exports = differenceInCalendarWeeks;
	


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarYears = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getFullYear() - dateRight.getFullYear();
	};
	module.exports = differenceInCalendarYears;
	


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarDays = __webpack_require__(10);
	var compareAsc = __webpack_require__(21);
	var differenceInDays = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
	    dateLeft.setDate(dateLeft.getDate() - sign * difference);
	    var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastDayNotFull);
	};
	module.exports = differenceInDays;
	


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(32);
	var MILLISECONDS_IN_HOUR = 3600000;
	var differenceInHours = function (dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	};
	module.exports = differenceInHours;
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInMilliseconds = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getTime() - dateRight.getTime();
	};
	module.exports = differenceInMilliseconds;
	


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarISOYears = __webpack_require__(24);
	var compareAsc = __webpack_require__(21);
	var subISOYears = __webpack_require__(34);
	var differenceInISOYears = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight));
	    dateLeft = subISOYears(dateLeft, sign * difference);
	    var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastISOYearNotFull);
	};
	module.exports = differenceInISOYears;
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var addISOYears = __webpack_require__(4);
	var subISOYears = function (dirtyDate, amount) {
	    return addISOYears(dirtyDate, -amount);
	};
	module.exports = subISOYears;
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(32);
	var MILLISECONDS_IN_MINUTE = 60000;
	var differenceInMinutes = function (dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	};
	module.exports = differenceInMinutes;
	


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarMonths = __webpack_require__(25);
	var compareAsc = __webpack_require__(21);
	var differenceInMonths = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
	    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
	    var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastMonthNotFull);
	};
	module.exports = differenceInMonths;
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMonths = __webpack_require__(36);
	var differenceInQuarters = function (dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	};
	module.exports = differenceInQuarters;
	


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(32);
	var differenceInSeconds = function (dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	};
	module.exports = differenceInSeconds;
	


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var differenceInDays = __webpack_require__(30);
	var differenceInWeeks = function (dirtyDateLeft, dirtyDateRight) {
	    var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7;
	    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
	};
	module.exports = differenceInWeeks;
	


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var differenceInCalendarYears = __webpack_require__(29);
	var compareAsc = __webpack_require__(21);
	var differenceInYears = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    var sign = compareAsc(dateLeft, dateRight);
	    var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight));
	    dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);
	    var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
	    return sign * (difference - isLastYearNotFull);
	};
	module.exports = differenceInYears;
	


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var eachDay = function (dirtyStartDate, dirtyEndDate) {
	    var startDate = parse(dirtyStartDate);
	    var endDate = parse(dirtyEndDate);
	    var endTime = endDate.getTime();
	    if (startDate.getTime() > endTime) {
	        throw new Error('End of range must have time value greater than time value of start of range');
	    }
	    var dates = [];
	    var currentDate = startDate;
	    currentDate.setHours(0, 0, 0, 0);
	    while (currentDate.getTime() <= endTime) {
	        dates.push(new Date(currentDate));
	        currentDate.setDate(currentDate.getDate() + 1);
	    }
	    return dates;
	};
	module.exports = eachDay;
	


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfDay = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setHours(23, 59, 59, 999);
	    return date;
	};
	module.exports = endOfDay;
	


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfHour = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMinutes(59, 59, 999);
	    return date;
	};
	module.exports = endOfHour;
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var endOfWeek = __webpack_require__(45);
	var endOfISOWeek = function (dirtyDate) {
	    return endOfWeek(dirtyDate, 1);
	};
	module.exports = endOfISOWeek;
	


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfWeek = function (dirtyDate, weekStartsAt) {
	    weekStartsAt = weekStartsAt || 0;
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt);
	    date.setDate(date.getDate() + diff);
	    date.setHours(23, 59, 59, 999);
	    return date;
	};
	module.exports = endOfWeek;
	


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(5);
	var startOfISOWeek = __webpack_require__(6);
	var endOfISOYear = function (dirtyDate) {
	    var year = getISOYear(dirtyDate);
	    var date = startOfISOWeek(new Date(year + 1, 0, 4));
	    date.setMilliseconds(date.getMilliseconds() - 1);
	    return date;
	};
	module.exports = endOfISOYear;
	


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfMinute = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setSeconds(59, 999);
	    return date;
	};
	module.exports = endOfMinute;
	


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfMonth = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var month = date.getMonth();
	    date.setFullYear(date.getFullYear(), month + 1, 0);
	    date.setHours(23, 59, 59, 999);
	    return date;
	};
	module.exports = endOfMonth;
	


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfQuarter = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var currentMonth = date.getMonth();
	    var month = currentMonth - currentMonth % 3 + 3;
	    date.setMonth(month, 0);
	    date.setHours(23, 59, 59, 999);
	    return date;
	};
	module.exports = endOfQuarter;
	


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfSecond = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(999);
	    return date;
	};
	module.exports = endOfSecond;
	


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfYear = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    date.setFullYear(year + 1, 0, 0);
	    date.setHours(23, 59, 59, 999);
	    return date;
	};
	module.exports = endOfYear;
	


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(53);
	var getISOWeek = __webpack_require__(55);
	var getISOYear = __webpack_require__(5);
	var parse = __webpack_require__(2);
	var format = function (dirtyDate, format) {
	    var date = parse(dirtyDate);
	    if (!format) {
	        format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
	    }
	    var formatFunction = makeFormatFunction(format);
	    return formatFunction(date);
	};
	var formats = {
	    'M': function () {
	        return this.getMonth() + 1;
	    },
	    'MM': function () {
	        return addLeadingZeros(this.getMonth() + 1, 2);
	    },
	    'MMM': function () {
	        return locale.monthsShort[this.getMonth()];
	    },
	    'MMMM': function () {
	        return locale.months[this.getMonth()];
	    },
	    'Q': function () {
	        return Math.ceil((this.getMonth() + 1) / 3);
	    },
	    'D': function () {
	        return this.getDate();
	    },
	    'DD': function () {
	        return addLeadingZeros(this.getDate(), 2);
	    },
	    'DDD': function () {
	        return getDayOfYear(this);
	    },
	    'DDDD': function () {
	        return addLeadingZeros(getDayOfYear(this), 3);
	    },
	    'd': function () {
	        return this.getDay();
	    },
	    'dd': function () {
	        return locale.dayNamesMin[this.getDay()];
	    },
	    'ddd': function () {
	        return locale.dayNamesShort[this.getDay()];
	    },
	    'dddd': function () {
	        return locale.dayNames[this.getDay()];
	    },
	    'E': function () {
	        return this.getDay() || 7;
	    },
	    'W': function () {
	        return getISOWeek(this);
	    },
	    'WW': function () {
	        return addLeadingZeros(getISOWeek(this), 2);
	    },
	    'YY': function () {
	        return String(this.getFullYear()).substr(2);
	    },
	    'YYYY': function () {
	        return this.getFullYear();
	    },
	    'GG': function () {
	        return String(getISOYear(this)).substr(2);
	    },
	    'GGGG': function () {
	        return getISOYear(this);
	    },
	    'A': function () {
	        return this.getHours() / 12 >= 1 ? 'PM' : 'AM';
	    },
	    'a': function () {
	        return this.getHours() / 12 >= 1 ? 'pm' : 'am';
	    },
	    'aa': function () {
	        return this.getHours() / 12 >= 1 ? 'p.m.' : 'a.m.';
	    },
	    'H': function () {
	        return this.getHours();
	    },
	    'HH': function () {
	        return addLeadingZeros(this.getHours(), 2);
	    },
	    'h': function () {
	        var hours = this.getHours();
	        if (hours == 0) {
	            return 12;
	        } else if (hours > 12) {
	            return hours % 12;
	        } else {
	            return hours;
	        }
	    },
	    'hh': function () {
	        return addLeadingZeros(formats['h'].apply(this), 2);
	    },
	    'm': function () {
	        return this.getMinutes();
	    },
	    'mm': function () {
	        return addLeadingZeros(this.getMinutes(), 2);
	    },
	    's': function () {
	        return this.getSeconds();
	    },
	    'ss': function () {
	        return addLeadingZeros(this.getSeconds(), 2);
	    },
	    'S': function () {
	        return Math.floor(this.getMilliseconds() / 100);
	    },
	    'SS': function () {
	        return Math.floor(this.getMilliseconds() / 10);
	    },
	    'SSS': function () {
	        return this.getMilliseconds();
	    },
	    'Z': function () {
	        return formatTimezone(this.getTimezoneOffset(), ':');
	    },
	    'ZZ': function () {
	        return formatTimezone(this.getTimezoneOffset());
	    },
	    'X': function () {
	        return Math.floor(this.getTime() / 1000);
	    },
	    'x': function () {
	        return this.getTime();
	    }
	};
	var ordinalFunctions = [
	    'M',
	    'D',
	    'DDD',
	    'd',
	    'Q',
	    'W'
	];
	ordinalFunctions.forEach(function (functionName) {
	    formats[functionName + 'o'] = function () {
	        return locale.ordinal(formats[functionName].apply(this));
	    };
	});
	var formattingTokens = Object.keys(formats).sort().reverse();
	var formattingTokensRegexp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g');
	var makeFormatFunction = function (format) {
	    var array = format.match(formattingTokensRegexp), i, length;
	    for (i = 0, length = array.length; i < length; i++) {
	        if (formats[array[i]]) {
	            array[i] = formats[array[i]];
	        } else {
	            array[i] = removeFormattingTokens(array[i]);
	        }
	    }
	    return function (mom) {
	        var output = '';
	        for (i = 0; i < length; i++) {
	            if (array[i] instanceof Function) {
	                output += array[i].call(mom, format);
	            } else {
	                output += array[i];
	            }
	        }
	        return output;
	    };
	};
	var removeFormattingTokens = function (input) {
	    if (input.match(/\[[\s\S]/)) {
	        return input.replace(/^\[|\]$/g, '');
	    }
	    return input.replace(/\\/g, '');
	};
	var addLeadingZeros = function (number, targetLength) {
	    var output = String(Math.abs(number));
	    while (output.length < targetLength) {
	        output = '0' + output;
	    }
	    return output;
	};
	var formatTimezone = function (offset, delimeter) {
	    delimeter = delimeter || '';
	    var sign = offset > 0 ? '-' : '+';
	    var absOffset = Math.abs(offset);
	    var hours = Math.floor(absOffset / 60);
	    var minutes = absOffset % 60;
	    return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
	};
	var locale = {
	    ordinal: function (number) {
	        if (number > 20 || number < 10) {
	            switch (number % 10) {
	            case 1:
	                return number + 'st';
	            case 2:
	                return number + 'nd';
	            case 3:
	                return number + 'rd';
	            }
	        }
	        return number + 'th';
	    },
	    months: [
	        'January',
	        'February',
	        'March',
	        'April',
	        'May',
	        'June',
	        'July',
	        'August',
	        'September',
	        'October',
	        'November',
	        'December'
	    ],
	    monthsShort: [
	        'Jan',
	        'Feb',
	        'Mar',
	        'Apr',
	        'May',
	        'Jun',
	        'Jul',
	        'Aug',
	        'Sep',
	        'Oct',
	        'Nov',
	        'Dec'
	    ],
	    dayNames: [
	        'Sunday',
	        'Monday',
	        'Tuesday',
	        'Wednesday',
	        'Thursday',
	        'Friday',
	        'Saturday'
	    ],
	    dayNamesShort: [
	        'Sun',
	        'Mon',
	        'Tue',
	        'Wed',
	        'Thu',
	        'Fri',
	        'Sat'
	    ],
	    dayNamesMin: [
	        'Su',
	        'Mo',
	        'Tu',
	        'We',
	        'Th',
	        'Fr',
	        'Sa'
	    ]
	};
	module.exports = format;
	


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfYear = __webpack_require__(54);
	var differenceInCalendarDays = __webpack_require__(10);
	var getDayOfYear = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var diff = differenceInCalendarDays(date, startOfYear(date));
	    var dayOfYear = diff + 1;
	    return dayOfYear;
	};
	module.exports = getDayOfYear;
	


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfYear = function (dirtyDate) {
	    var cleanDate = parse(dirtyDate);
	    var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0);
	    return date;
	};
	module.exports = startOfYear;
	


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfDay = __webpack_require__(11);
	var startOfISOYear = __webpack_require__(9);
	var MILLISECONDS_IN_WEEK = 604800000;
	var getISOWeek = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var diff = startOfDay(date).getTime() - startOfISOYear(date).getTime();
	    return Math.floor(diff / MILLISECONDS_IN_WEEK) + 1;
	};
	module.exports = getISOWeek;
	


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDate = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var dayOfMonth = date.getDate();
	    return dayOfMonth;
	};
	module.exports = getDate;
	


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDay = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    return day;
	};
	module.exports = getDay;
	


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isLeapYear = __webpack_require__(59);
	var getDaysInYear = function (dirtyDate) {
	    return isLeapYear(dirtyDate) ? 366 : 365;
	};
	module.exports = getDaysInYear;
	


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isLeapYear = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
	};
	module.exports = isLeapYear;
	


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getHours = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var hours = date.getHours();
	    return hours;
	};
	module.exports = getHours;
	


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(9);
	var addWeeks = __webpack_require__(18);
	var MILLISECONDS_IN_WEEK = 604800000;
	var getISOWeeksInYear = function (dirtyDate) {
	    var thisYear = startOfISOYear(dirtyDate);
	    var nextYear = startOfISOYear(addWeeks(thisYear, 60));
	    var diff = nextYear.valueOf() - thisYear.valueOf();
	    return Math.round(diff / MILLISECONDS_IN_WEEK);
	};
	module.exports = getISOWeeksInYear;
	


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getMilliseconds = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var milliseconds = date.getMilliseconds();
	    return milliseconds;
	};
	module.exports = getMilliseconds;
	


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getMinutes = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var minutes = date.getMinutes();
	    return minutes;
	};
	module.exports = getMinutes;
	


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getMonth = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var month = date.getMonth();
	    return month;
	};
	module.exports = getMonth;
	


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getSeconds = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var seconds = date.getSeconds();
	    return seconds;
	};
	module.exports = getSeconds;
	


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getYear = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    return year;
	};
	module.exports = getYear;
	


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isAfter = function (dirtyDateToCompare, dirtyDate) {
	    var dateToCompare = parse(dirtyDateToCompare);
	    var date = parse(dirtyDate);
	    return dateToCompare.getTime() > date.getTime();
	};
	module.exports = isAfter;
	


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isBefore = function (dirtyDateToCompare, dirtyDate) {
	    var dateToCompare = parse(dirtyDateToCompare);
	    var date = parse(dirtyDate);
	    return dateToCompare.getTime() < date.getTime();
	};
	module.exports = isBefore;
	


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isEqual = function (dirtyLeftDate, dirtyRightDate) {
	    var dateLeft = parse(dirtyLeftDate);
	    var dateRight = parse(dirtyRightDate);
	    return dateLeft.getTime() == dateRight.getTime();
	};
	module.exports = isEqual;
	


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isFirstDayOfMonth = function (dirtyDate) {
	    return parse(dirtyDate).getDate() == 1;
	};
	module.exports = isFirstDayOfMonth;
	


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isFriday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 5;
	};
	module.exports = isFriday;
	


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isFuture = function (dirtyDate) {
	    return parse(dirtyDate).getTime() > new Date().getTime();
	};
	module.exports = isFuture;
	


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var endOfDay = __webpack_require__(42);
	var endOfMonth = __webpack_require__(48);
	var isLastDayOfMonth = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    return endOfDay(date).getTime() == endOfMonth(date).getTime();
	};
	module.exports = isLastDayOfMonth;
	


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isMonday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 1;
	};
	module.exports = isMonday;
	


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isPast = function (dirtyDate) {
	    return parse(dirtyDate).getTime() < new Date().getTime();
	};
	module.exports = isPast;
	


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11);
	var isSameDay = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
	    var dateRightStartOfDay = startOfDay(dirtyDateRight);
	    return dateLeftStartOfDay.getTime() == dateRightStartOfDay.getTime();
	};
	module.exports = isSameDay;
	


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var startOfHour = __webpack_require__(78);
	var isSameHour = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfHour = startOfHour(dirtyDateLeft);
	    var dateRightStartOfHour = startOfHour(dirtyDateRight);
	    return dateLeftStartOfHour.getTime() == dateRightStartOfHour.getTime();
	};
	module.exports = isSameHour;
	


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfHour = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMinutes(0, 0, 0);
	    return date;
	};
	module.exports = startOfHour;
	


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(80);
	var isSameISOWeek = function (dirtyDateLeft, dirtyDateRight) {
	    return isSameWeek(dirtyDateLeft, dirtyDateRight, 1);
	};
	module.exports = isSameISOWeek;
	


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(7);
	var isSameWeek = function (dirtyDateLeft, dirtyDateRight, weekStartsAt) {
	    var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, weekStartsAt);
	    var dateRightStartOfWeek = startOfWeek(dirtyDateRight, weekStartsAt);
	    return dateLeftStartOfWeek.getTime() == dateRightStartOfWeek.getTime();
	};
	module.exports = isSameWeek;
	


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(9);
	var isSameISOYear = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft);
	    var dateRightStartOfYear = startOfISOYear(dirtyDateRight);
	    return dateLeftStartOfYear.getTime() == dateRightStartOfYear.getTime();
	};
	module.exports = isSameISOYear;
	


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var startOfMinute = __webpack_require__(83);
	var isSameMinute = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft);
	    var dateRightStartOfMinute = startOfMinute(dirtyDateRight);
	    return dateLeftStartOfMinute.getTime() == dateRightStartOfMinute.getTime();
	};
	module.exports = isSameMinute;
	


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfMinute = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setSeconds(0, 0);
	    return date;
	};
	module.exports = startOfMinute;
	


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isSameMonth = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getFullYear() == dateRight.getFullYear() && dateLeft.getMonth() == dateRight.getMonth();
	};
	module.exports = isSameMonth;
	


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var startOfQuarter = __webpack_require__(86);
	var isSameQuarter = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
	    var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
	    return dateLeftStartOfQuarter.getTime() == dateRightStartOfQuarter.getTime();
	};
	module.exports = isSameQuarter;
	


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfQuarter = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var currentMonth = date.getMonth();
	    var month = currentMonth - currentMonth % 3;
	    date.setMonth(month, 1);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = startOfQuarter;
	


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var startOfSecond = __webpack_require__(88);
	var isSameSecond = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft);
	    var dateRightStartOfSecond = startOfSecond(dirtyDateRight);
	    return dateLeftStartOfSecond.getTime() == dateRightStartOfSecond.getTime();
	};
	module.exports = isSameSecond;
	


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfSecond = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(0);
	    return date;
	};
	module.exports = startOfSecond;
	


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isSameYear = function (dirtyDateLeft, dirtyDateRight) {
	    var dateLeft = parse(dirtyDateLeft);
	    var dateRight = parse(dirtyDateRight);
	    return dateLeft.getFullYear() == dateRight.getFullYear();
	};
	module.exports = isSameYear;
	


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isSaturday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 6;
	};
	module.exports = isSaturday;
	


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isSunday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 0;
	};
	module.exports = isSunday;
	


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var isSameHour = __webpack_require__(77);
	var isThisHour = function (dirtyDate) {
	    return isSameHour(new Date(), dirtyDate);
	};
	module.exports = isThisHour;
	


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var isSameISOWeek = __webpack_require__(79);
	var isThisISOWeek = function (dirtyDate) {
	    return isSameISOWeek(new Date(), dirtyDate);
	};
	module.exports = isThisISOWeek;
	


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var isSameISOYear = __webpack_require__(81);
	var isThisISOYear = function (dirtyDate) {
	    return isSameISOYear(new Date(), dirtyDate);
	};
	module.exports = isThisISOYear;
	


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var isSameMinute = __webpack_require__(82);
	var isThisMinute = function (dirtyDate) {
	    return isSameMinute(new Date(), dirtyDate);
	};
	module.exports = isThisMinute;
	


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var isSameMonth = __webpack_require__(84);
	var isThisMonth = function (dirtyDate) {
	    return isSameMonth(new Date(), dirtyDate);
	};
	module.exports = isThisMonth;
	


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isSameQuarter = __webpack_require__(85);
	var isThisQuarter = function (dirtyDate) {
	    return isSameQuarter(new Date(), dirtyDate);
	};
	module.exports = isThisQuarter;
	


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isSameSecond = __webpack_require__(87);
	var isThisSecond = function (dirtyDate) {
	    return isSameSecond(new Date(), dirtyDate);
	};
	module.exports = isThisSecond;
	


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(80);
	var isThisWeek = function (dirtyDate, weekStartsAt) {
	    return isSameWeek(new Date(), dirtyDate, weekStartsAt);
	};
	module.exports = isThisWeek;
	


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isSameYear = __webpack_require__(89);
	var isThisYear = function (dirtyDate) {
	    return isSameYear(new Date(), dirtyDate);
	};
	module.exports = isThisYear;
	


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isThursday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 4;
	};
	module.exports = isThursday;
	


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11);
	var isToday = function (dirtyDate) {
	    return startOfDay(dirtyDate).getTime() == startOfDay(new Date()).getTime();
	};
	module.exports = isToday;
	


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11);
	var isTomorrow = function (dirtyDate) {
	    var tomorrow = new Date();
	    tomorrow.setDate(tomorrow.getDate() + 1);
	    return startOfDay(dirtyDate).getTime() == startOfDay(tomorrow).getTime();
	};
	module.exports = isTomorrow;
	


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isTuesday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 2;
	};
	module.exports = isTuesday;
	


/***/ },
/* 105 */
/***/ function(module, exports) {

	var isValid = function (date) {
	    if (date instanceof Date) {
	        return !isNaN(new Date(date).getTime());
	    } else {
	        throw new TypeError(toString.call(date) + ' is not a date');
	    }
	};
	module.exports = isValid;
	


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isWednesday = function (dirtyDate) {
	    return parse(dirtyDate).getDay() === 3;
	};
	module.exports = isWednesday;
	


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isWeekend = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    return day == 0 || day == 6;
	};
	module.exports = isWeekend;
	


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var isWithinRange = function (dirtyDate, dirtyStartDate, dirtyEndDate) {
	    var time = parse(dirtyDate).getTime();
	    var startTime = parse(dirtyStartDate).getTime();
	    var endTime = parse(dirtyEndDate).getTime();
	    if (startTime > endTime) {
	        throw new Error('End of range must have time value greater than time value of start of range');
	    }
	    return time >= startTime && time <= endTime;
	};
	module.exports = isWithinRange;
	


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(11);
	var isYesterday = function (dirtyDate) {
	    var yesterday = new Date();
	    yesterday.setDate(yesterday.getDate() - 1);
	    return startOfDay(dirtyDate).getTime() == startOfDay(yesterday).getTime();
	};
	module.exports = isYesterday;
	


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var lastDayOfWeek = __webpack_require__(111);
	var lastDayOfISOWeek = function (dirtyDate) {
	    return lastDayOfWeek(dirtyDate, 1);
	};
	module.exports = lastDayOfISOWeek;
	


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var lastDayOfWeek = function (dirtyDate, weekStartsAt) {
	    weekStartsAt = weekStartsAt || 0;
	    var date = parse(dirtyDate);
	    var day = date.getDay();
	    var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt);
	    date.setHours(0, 0, 0, 0);
	    date.setDate(date.getDate() + diff);
	    return date;
	};
	module.exports = lastDayOfWeek;
	


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(5);
	var startOfISOWeek = __webpack_require__(6);
	var lastDayOfISOYear = function (dirtyDate) {
	    var year = getISOYear(dirtyDate);
	    var date = startOfISOWeek(new Date(year + 1, 0, 4));
	    date.setDate(date.getDate() - 1);
	    return date;
	};
	module.exports = lastDayOfISOYear;
	


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var lastDayOfMonth = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var month = date.getMonth();
	    date.setFullYear(date.getFullYear(), month + 1, 0);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = lastDayOfMonth;
	


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var lastDayOfQuarter = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var currentMonth = date.getMonth();
	    var month = currentMonth - currentMonth % 3 + 3;
	    date.setMonth(month, 0);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = lastDayOfQuarter;
	


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var lastDayOfYear = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    date.setFullYear(year + 1, 0, 0);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = lastDayOfYear;
	


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var max = function () {
	    var dirtyDates = Array.prototype.slice.call(arguments);
	    var dates = dirtyDates.map(function (dirtyDate) {
	        return parse(dirtyDate);
	    });
	    var latestDirtyDate = Math.max.apply(null, dates);
	    return new Date(latestDirtyDate);
	};
	module.exports = max;
	


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var min = function () {
	    var dirtyDates = Array.prototype.slice.call(arguments);
	    var dates = dirtyDates.map(function (dirtyDate) {
	        return parse(dirtyDate);
	    });
	    var earliestDirtyDate = Math.min.apply(null, dates);
	    return new Date(earliestDirtyDate);
	};
	module.exports = min;
	


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setDate = function (dirtyDate, dayOfMonth) {
	    var date = parse(dirtyDate);
	    date.setDate(dayOfMonth);
	    return date;
	};
	module.exports = setDate;
	


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var addDays = __webpack_require__(1);
	var setDay = function (dirtyDate, day, weekStartsAt) {
	    weekStartsAt = weekStartsAt || 0;
	    var date = parse(dirtyDate);
	    var currentDay = date.getDay();
	    var diff = (day < weekStartsAt ? 7 : 0) + day - currentDay;
	    return addDays(date, diff);
	};
	module.exports = setDay;
	


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setDayOfYear = function (dirtyDate, dayOfYear) {
	    var date = parse(dirtyDate);
	    date.setMonth(0);
	    date.setDate(dayOfYear);
	    return date;
	};
	module.exports = setDayOfYear;
	


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setHours = function (dirtyDate, hours) {
	    var date = parse(dirtyDate);
	    date.setHours(hours);
	    return date;
	};
	module.exports = setHours;
	


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getISOWeek = __webpack_require__(55);
	var setISOWeek = function (dirtyDate, isoWeek) {
	    var date = parse(dirtyDate);
	    var diff = getISOWeek(date) - isoWeek;
	    date.setDate(date.getDate() - diff * 7);
	    return date;
	};
	module.exports = setISOWeek;
	


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setMilliseconds = function (dirtyDate, milliseconds) {
	    var date = parse(dirtyDate);
	    date.setMilliseconds(milliseconds);
	    return date;
	};
	module.exports = setMilliseconds;
	


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setMinutes = function (dirtyDate, minutes) {
	    var date = parse(dirtyDate);
	    date.setMinutes(minutes);
	    return date;
	};
	module.exports = setMinutes;
	


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var getDaysInMonth = __webpack_require__(15);
	var setMonth = function (dirtyDate, month) {
	    var date = parse(dirtyDate);
	    var year = date.getFullYear();
	    var day = date.getDate();
	    var daysInMonth = getDaysInMonth(new Date(year, month));
	    date.setMonth(month, Math.min(day, daysInMonth));
	    return date;
	};
	module.exports = setMonth;
	


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setMonth = __webpack_require__(125);
	var setQuarter = function (dirtyDate, quarter) {
	    var date = parse(dirtyDate);
	    var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
	    var diff = quarter - oldQuarter;
	    return setMonth(date, date.getMonth() + diff * 3);
	};
	module.exports = setQuarter;
	


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setSeconds = function (dirtyDate, seconds) {
	    var date = parse(dirtyDate);
	    date.setSeconds(seconds);
	    return date;
	};
	module.exports = setSeconds;
	


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var setYear = function (dirtyDate, year) {
	    var date = parse(dirtyDate);
	    date.setFullYear(year);
	    return date;
	};
	module.exports = setYear;
	


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(2);
	var startOfMonth = function (dirtyDate) {
	    var date = parse(dirtyDate);
	    date.setDate(1);
	    date.setHours(0, 0, 0, 0);
	    return date;
	};
	module.exports = startOfMonth;
	


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(1);
	var subDays = function (dirtyDate, amount) {
	    return addDays(dirtyDate, -amount);
	};
	module.exports = subDays;
	


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var addHours = __webpack_require__(3);
	var subHours = function (dirtyDate, amount) {
	    return addHours(dirtyDate, -amount);
	};
	module.exports = subHours;
	


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(12);
	var subMilliseconds = function (dirtyDate, amount) {
	    return addMilliseconds(dirtyDate, -amount);
	};
	module.exports = subMilliseconds;
	


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(13);
	var subMinutes = function (dirtyDate, amount) {
	    return addMinutes(dirtyDate, -amount);
	};
	module.exports = subMinutes;
	


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(14);
	var subMonths = function (dirtyDate, amount) {
	    return addMonths(dirtyDate, -amount);
	};
	module.exports = subMonths;
	


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var addQuarters = __webpack_require__(16);
	var subQuarters = function (dirtyDate, amount) {
	    return addQuarters(dirtyDate, -amount);
	};
	module.exports = subQuarters;
	


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var addSeconds = __webpack_require__(17);
	var subSeconds = function (dirtyDate, amount) {
	    return addSeconds(dirtyDate, -amount);
	};
	module.exports = subSeconds;
	


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var addWeeks = __webpack_require__(18);
	var subWeeks = function (dirtyDate, amount) {
	    return addWeeks(dirtyDate, -amount);
	};
	module.exports = subWeeks;
	


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var addYears = __webpack_require__(19);
	var subYears = function (dirtyDate, amount) {
	    return addYears(dirtyDate, -amount);
	};
	module.exports = subYears;
	


/***/ }
/******/ ])
});
;
//# sourceMappingURL=date_fns.js.map