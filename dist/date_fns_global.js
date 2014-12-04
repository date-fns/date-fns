/******/ (function(modules) { // webpackBootstrap
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

	var dateFns = __webpack_require__(1);

	window.dateFns = dateFnsGlobal;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var dateFns = {
	  addDays: __webpack_require__(2),
	  addMinutes: __webpack_require__(3),
	  addMonths: __webpack_require__(4),
	  eachDay: __webpack_require__(5),
	  format: __webpack_require__(6),
	  endOfDay: __webpack_require__(7),
	  endOfMonth: __webpack_require__(8),
	  endOfWeek: __webpack_require__(9),
	  isAfter: __webpack_require__(10),
	  isBefore: __webpack_require__(11),
	  isEqual: __webpack_require__(12),
	  isFirstDayOfMonth: __webpack_require__(13),
	  isFuture: __webpack_require__(14),
	  isLastDayOfMonth: __webpack_require__(15),
	  isSameMonth: __webpack_require__(16),
	  isSameWeek: __webpack_require__(17),
	  isSameYear: __webpack_require__(18),
	  isToday: __webpack_require__(19),
	  isWeekend: __webpack_require__(20),
	  isWithinRange: __webpack_require__(21),
	  setMonth: __webpack_require__(22),
	  setYear: __webpack_require__(23),
	  startOfDay: __webpack_require__(24),
	  startOfMonth: __webpack_require__(25),
	  startOfWeek: __webpack_require__(26),
	  startOfYear: __webpack_require__(27),
	  subDays: __webpack_require__(28),
	  subMinutes: __webpack_require__(29),
	  subMonths: __webpack_require__(30)
	};

	if (module && module.exports) {
	  module.exports = dateFns;
	} else {
	  window.dateFns = dateFns;
	}

	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)(module)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Adds specified number of days to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addDays = function(dirtyDate, amount) {
	  var date = new Date(dirtyDate);
	  date.setDate(date.getDate() + amount);
	  return date;
	};

	module.exports = addDays;



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Adds specified number of munutes from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of minutes
	 * @returns {date} new date
	 */
	var addMinutes = function(dirtyDate, amount) {
	  var date = new Date(dirtyDate);
	  date.setMinutes(date.getMinutes() + amount);
	  return date;
	};

	module.exports = addMinutes;



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Adds specified number of months to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addMonths = function(dirtyDate, amount) {
	  var date = new Date(dirtyDate);
	  date.setMonth(date.getMonth() + amount);
	  return date;
	};

	module.exports = addMonths;



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(24);
	var startOfYear = __webpack_require__(27);

	var NUMBER_OF_MS_IN_DAY = 864e5;

	/**
	 * Returns formatted date string in a given format
	 * @param {date|string} date
	 * @param {string} format
	 * @returns {string}
	 */
	var format = function(date, format) {
	  date = date instanceof Date ? date : new Date(date);

	  if (!format) {
	    format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
	  };

	  var formatFunction = makeFormatFunction(format);
	  return formatFunction(date);
	};

	var formats = {
	  'M': function() {
	    return this.getMonth() + 1;
	  },
	  'MM': function() {
	    return leftZeroFill(this.getMonth() + 1, 2);
	  },
	  'MMM': function() {
	    return locale.monthsShort[this.getMonth()];
	  },
	  'MMMM': function() {
	    return locale.months[this.getMonth()];
	  },
	  'Q': function() {
	    return Math.ceil((this.getMonth() + 1) / 3);
	  },
	  'D': function() {
	    return this.getDate();
	  },
	  'DD': function() {
	    return leftZeroFill(this.getDate(), 2);
	  },
	  'DDD': function() {
	    var diffWithStartOfYear =
	      startOfDay(this).getTime() - startOfYear(this).getTime();
	    return Math.floor(diffWithStartOfYear / NUMBER_OF_MS_IN_DAY) + 1;
	  },
	  'DDDD': function() {
	    return leftZeroFill(formats['DDD'].apply(this), 3);
	  },
	  'd': function() {
	    return this.getDay();
	  },
	  'dd': function() {
	    return locale.dayNamesMin[this.getDay()];
	  },
	  'ddd': function() {
	    return locale.dayNamesShort[this.getDay()];
	  },
	  'dddd': function() {
	    return locale.dayNames[this.getDay()];
	  },
	  'E': function() {
	    return this.getDay() + 1;
	  },
	  'YY': function() {
	    return String(this.getFullYear()).substr(2);
	  },
	  'YYYY': function() {
	    return this.getFullYear()
	  },
	  'A': function() {
	    return (this.getHours() / 12) >= 1 ? 'PM' : 'AM';
	  },
	  'a': function() {
	    return (this.getHours() / 12) >= 1 ? 'pm' : 'am';
	  },
	  'H': function() {
	    return this.getHours();
	  },
	  'HH': function() {
	    return leftZeroFill(this.getHours(), 2);
	  },
	  'h': function() {
	    return this.getHours() % 12;
	  },
	  'hh': function() {
	    return leftZeroFill(this.getHours() % 12, 2);
	  },
	  'm': function() {
	    return this.getMinutes();
	  },
	  'mm': function() {
	    return leftZeroFill(this.getMinutes());
	  },
	  's': function() {
	    return this.getSeconds();
	  },
	  'ss': function() {
	    return leftZeroFill(this.getSeconds(), 2);
	  },
	  'S': function() {
	    return this.getMilliseconds();
	  },
	  'SS': function() {
	    return leftZeroFill(this.getMilliseconds(), 2);
	  },
	  'SSS': function() {
	    return leftZeroFill(this.getMilliseconds(), 3);
	  }
	};

	var ordinalFunctions = ['M', 'D', 'DDD', 'd'];
	ordinalFunctions.forEach(function(functionName){
	  formats[functionName + 'o'] = function() {
	    return locale.ordinal(formats[functionName].apply(this));
	  };
	});

	var formattingTokens = Object.keys(formats).sort().reverse();
	var formattingTokensRegexp = new RegExp(
	  '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	);

	var makeFormatFunction = function(format) {
	  var array = format.match(formattingTokensRegexp), i, length;

	  for (i = 0, length = array.length; i < length; i++) {
	    if (formats[array[i]]) {
	      array[i] = formats[array[i]];
	    } else {
	      array[i] = removeFormattingTokens(array[i]);
	    }
	  }

	  return function(mom) {
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

	var removeFormattingTokens = function(input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|\]$/g, '');
	  }
	  return input.replace(/\\/g, '');
	};

	var leftZeroFill = function(number, targetLength) {
	  var output = '' + Math.abs(number);

	  while (output.length < targetLength) {
	    output = '0' + output;
	  }
	  return output;
	};

	var locale = {
	  ordinal: function(number) {
	    var b = number % 10,
	      output = (+(number % 100 / 10) === 1) ? 'th' :
	      (b === 1) ? 'st' :
	      (b === 2) ? 'nd' :
	      (b === 3) ? 'rd' : 'th';
	    return number + output;
	  },
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	};

	module.exports = format;



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns end of a day for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfDay = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  date.setHours(23, 59, 59, 999);
	  return date;
	};

	module.exports = endOfDay;



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns end of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfMonth = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  date.setHours(23, 59, 59, 999);
	  date.setFullYear(date.getFullYear(), date.getMonth() + 1, 0);
	  return date;
	};

	module.exports = endOfMonth;



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns end of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var endOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0;

	  var date = new Date(dirtyDate);
	  var day = date.getDay();
	  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt);

	  date.setHours(23, 59, 59, 999);
	  date.setDate(date.getDate() + diff);
	  return date;
	};

	module.exports = endOfWeek;



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is first date is after second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 is before 11 February 1987
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));
	 * //=> true
	 */
	var isBefore = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = new Date(dirtyDateToCompare);
	  var date = new Date(dirtyDate);
	  return dateToCompare.getTime() > date.getTime();
	};

	module.exports = isBefore;



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is first date is before second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 is before 11 February 1987
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));
	 * //=> false
	 */
	var isBefore = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = new Date(dirtyDateToCompare);
	  var date = new Date(dirtyDate);
	  return dateToCompare.getTime() < date.getTime();
	};

	module.exports = isBefore;



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed dates are equal?
	 * @param {date|string} dirtyLeftDate
	 * @param {date|string} dirtyRightDate
	 * @returns {boolean}
	 */
	var isEqual = function(dirtyLeftDate, dirtyRightDate) {
	  var dateLeft = new Date(dirtyLeftDate);
	  var dateRight = new Date(dirtyRightDate);
	  return dateLeft.getTime() == dateRight.getTime();
	};

	module.exports = isEqual;



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(24);
	var startOfMonth = __webpack_require__(8);

	/**
	 * Is passed date is first day of month?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isFirstDayOfMonth = function(dirtyDate) {
	  return new Date(dirtyDate).getDate() == 1;
	};

	module.exports = isFirstDayOfMonth;




/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed date is future?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isFuture = function(dirtyDate) {
	  return new Date(dirtyDate).getTime() > new Date().getTime();
	};

	module.exports = isFuture;



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var endOfDay = __webpack_require__(7);
	var endOfMonth = __webpack_require__(8);

	/**
	 * Is passed date is last day of month?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isLastDayOfMonth = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  return endOfDay(date).getTime() == endOfMonth(date).getTime();
	};

	module.exports = isLastDayOfMonth;




/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed dates has the same month (and year)?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameMonth = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = new Date(dirtyDateLeft);
	  var dateRight = new Date(dirtyDateRight);
	  return(
	    dateLeft.getFullYear() == dateRight.getFullYear() &&
	    dateLeft.getMonth() == dateRight.getMonth()
	  );
	};

	module.exports = isSameMonth;



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(26);

	/**
	 * Is passed dates belongs to the same week?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {boolean}
	 */
	var isSameWeek = function(dirtyDateLeft, dirtyDateRight, weekStartsAt) {
	  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, weekStartsAt);
	  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, weekStartsAt);

	  return(
	    dateLeftStartOfWeek.getTime() == dateRightStartOfWeek.getTime()
	  );
	};

	module.exports = isSameWeek;



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed dates has the same year?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameYear = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = new Date(dirtyDateLeft);
	  var dateRight = new Date(dirtyDateRight);
	  return dateLeft.getFullYear() == dateRight.getFullYear();
	};

	module.exports = isSameYear;



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(24);

	/**
	 * Is passed date is today?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isToday = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  return startOfDay(date).getTime() == startOfDay(new Date()).getTime();
	};

	module.exports = isToday;



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed date is weekend?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isWeekend = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  var day = date.getDay();
	  return day == 0 || day == 6;
	};

	module.exports = isWeekend;



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed date is within given range?
	 * @param {date|string} dirtyDate
	 * @param {date|string} dirtyStartDate
	 * @param {date|string} dirtyEndDate
	 * @returns {boolean}
	 *
	 * @example for date within the range
	 * isWithinRange(
	 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * );
	 * //=> true
	 *
	 * @example for date outside of the range
	 * isWithinRange(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * );
	 * //=> false
	 */
	var isWithinRange = function(dirtyDate, dirtyStartDate, dirtyEndDate) {
	  var date = new Date(dirtyDate);
	  var time = date.getTime();
	  return(
	    time >= new Date(dirtyStartDate).getTime() &&
	    time <= new Date(dirtyEndDate).getTime()
	  );
	};

	module.exports = isWithinRange;



/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sets month index to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} monthIndex
	 * @returns {date} (new date)
	 */
	var setMonth = function(dirtyDate, monthIndex) {
	  var date = new Date(dirtyDate);
	  date.setMonth(monthIndex);
	  return date;
	};

	module.exports = setMonth;



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sets year to passed date.
	 * @param {date|string} dirtyDate
	 * @param {number} fullYear
	 * @returns {date} (new date)
	 */
	var setYear = function(dirtyDate, fullYear) {
	  var date = new Date(dirtyDate);
	  date.setFullYear(fullYear);
	  return date;
	};

	module.exports = setYear;



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns start of a day for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfDay = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  date.setHours(0, 0, 0, 0);
	  return date;
	};

	module.exports = startOfDay;



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns start of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfMonth = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  date.setHours(0, 0, 0, 0);
	  date.setDate(1);
	  return date;
	};

	module.exports = startOfMonth;



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns start of a week for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
	 * @returns {date}
	 */
	var startOfWeek = function(dirtyDate, weekStartsAt) {
	  weekStartsAt = weekStartsAt || 0;

	  var date = new Date(dirtyDate);
	  var day = date.getDay();
	  var diff = (day < weekStartsAt ? 7 : 0) + day - weekStartsAt;

	  date.setHours(0, 0, 0, 0);
	  date.setDate(date.getDate() - diff);
	  return date;
	};

	module.exports = startOfWeek;



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns start of a year for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfYear = function(dirtyDate) {
	  var cleanDate = new Date(dirtyDate);
	  var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0);
	  return date;
	};

	module.exports = startOfYear;



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(2);

	/**
	 * Substract specified number of days from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subDays = function(dirtyDate, amount) {
	  return addDays(dirtyDate, -amount);
	};

	module.exports = subDays;



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(3);

	/**
	 * Substract specified number of munutes from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of minutes
	 * @returns {date} new date
	 */
	var subMinutes = function(dirtyDate, amount) {
	  return addMinutes(dirtyDate, -amount);
	};

	module.exports = subMinutes;



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(4);

	/**
	 * Substract specified number of month from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subMonths = function(dirtyDate, amount) {
	  return addMonths(dirtyDate, -amount);
	};

	module.exports = subMonths;



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])