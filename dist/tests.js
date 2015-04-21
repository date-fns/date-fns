(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
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

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(43);

	describe('addDays', function() {
	  it('adds number of passed days', function() {
	    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 11));
	  });

	  it('accepts string', function() {
	    var result = addDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 11));
	  });

	  it('accepts timestamp', function() {
	    var result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 11));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 1);
	    addDays(date, 11);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });
	});



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var addHours = __webpack_require__(44);

	describe('addHours', function() {
	  it('adds numbers of passed hours', function() {
	    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2);
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 11, 1, 0));
	  });

	  it('accepts string', function() {
	    var result = addHours(
	      new Date(2014, 6 /* Jul */, 10, 23, 0).toISOString(), 26
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 12, 1, 0));
	  });

	  it('accepts timestamp', function() {
	    var result = addHours(
	      new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(), 26
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 12, 1, 0));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 6 /* Jul */, 10, 23, 0);
	    addHours(date, 10);
	    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
	  });
	});



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(46);

	describe('addMinutes', function() {
	  it('adds number of passed minutes', function() {
	    var result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 30));
	  });

	  it('accepts string', function() {
	    var result = addMinutes(
	      new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 20));
	  });

	  it('accepts timestamp', function() {
	    var result = addMinutes(
	      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 20));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 6 /* Jul */, 10, 12, 0);
	    addMinutes(date, 25);
	    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 0));
	  });
	});



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(45);

	describe('addMonths', function() {
	  it('adds number of passed months', function() {
	    var result = addMonths(new Date(2014, 8 /* Sep */, 1), 5);
	    expect(result).to.be.eql(new Date(2015, 1 /* Feb */, 1));
	  });

	  it('accepts string', function() {
	    var result = addMonths(new Date(2014, 8 /* Sep */, 1).toISOString(), 12);
	    expect(result).to.be.eql(new Date(2015, 8 /* Sep */, 1));
	  });

	  it('accepts timestamp', function() {
	    var result = addMonths(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
	    expect(result).to.be.eql(new Date(2015, 8 /* Sep */, 1));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 1);
	    addMonths(date, 12);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('works well when desired month have less days and provided date is on the last day of month', function() {
	    var date = new Date(2014, 11 /* Dec */, 31);
	    var result = addMonths(date, 2);
	    expect(result).to.be.eql(new Date(2015, 1 /* Feb */, 28));
	  });
	});



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var compareAsc = __webpack_require__(47);

	describe('compareAsc', function() {
	  it('returns 0 if passed dates are equal', function() {
	    var result = compareAsc(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.equal(0);
	  })

	  it('returns -1 if first date before second one', function() {
	    var result = compareAsc(
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.equal(-1);
	  });

	  it('returns 1 if first date after second one', function() {
	    var result = compareAsc(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1987, 1 /* Feb */, 11)
	    );
	    expect(result).to.equal(1);
	  });

	  it('sorts dates array in chronological order when passed as argument to Array.prototype.sort()', function() {
	    var unsortedArray = [
	      new Date(1995, 6 /* Jul */, 2),
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10)
	    ];

	    var sortedArray = [
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1995, 6 /* Jul */, 2)
	    ];

	    var result = unsortedArray.sort(compareAsc);

	    expect(result).to.eql(sortedArray);
	  });

	  it('allows to pass string', function() {
	    var result = compareAsc(
	      new Date(1987, 1 /* Feb */, 11).toISOString(),
	      new Date(1989, 6 /* Jul */, 10).toISOString()
	    );
	    expect(result).to.equal(-1);
	  });

	  it('allows to pass timestamp', function() {
	    var result = compareAsc(
	      new Date(1987, 1 /* Feb */, 11).getTime(),
	      new Date(1989, 6 /* Jul */, 10).getTime()
	    );
	    expect(result).to.equal(-1);
	  });
	});



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var compareDesc = __webpack_require__(48);

	describe('compareDesc', function() {
	  it('returns 0 if passed dates are equal', function() {
	    var result = compareDesc(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.equal(0);
	  })

	  it('returns 1 if first date before second one', function() {
	    var result = compareDesc(
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.equal(1);
	  });

	  it('returns -1 if first date after second one', function() {
	    var result = compareDesc(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1987, 1 /* Feb */, 11)
	    );
	    expect(result).to.equal(-1);
	  });

	  it('sorts dates array in reverse chronological order when passed as argument to Array.prototype.sort()', function() {
	    var unsortedArray = [
	      new Date(1995, 6 /* Jul */, 2),
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10)
	    ];

	    var sortedArray = [
	      new Date(1995, 6 /* Jul */, 2),
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1987, 1 /* Feb */, 11)
	    ];

	    var result = unsortedArray.sort(compareDesc);

	    expect(result).to.eql(sortedArray);
	  });

	  it('allows to pass string', function() {
	    var result = compareDesc(
	      new Date(1987, 1 /* Feb */, 11).toISOString(),
	      new Date(1989, 6 /* Jul */, 10).toISOString()
	    );
	    expect(result).to.equal(1);
	  });

	  it('allows to pass timestamp', function() {
	    var result = compareDesc(
	      new Date(1987, 1 /* Feb */, 11).getTime(),
	      new Date(1989, 6 /* Jul */, 10).getTime()
	    );
	    expect(result).to.equal(1);
	  });
	});



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var eachDay = __webpack_require__(49);

	describe('eachDay', function() {
	  it('returns array of dates within specefied range', function() {
	    var result = eachDay(
	      new Date(2014, 9 /* Oct */, 6),
	      new Date(2014, 9 /* Oct */, 12)
	    );
	    expect(result).to.be.eql([
	      new Date(2014, 9 /* Oct */, 6),
	      new Date(2014, 9 /* Oct */, 7),
	      new Date(2014, 9 /* Oct */, 8),
	      new Date(2014, 9 /* Oct */, 9),
	      new Date(2014, 9 /* Oct */, 10),
	      new Date(2014, 9 /* Oct */, 11),
	      new Date(2014, 9 /* Oct */, 12)
	    ]);
	  });

	  it('accepts strings', function() {
	    var result = eachDay(
	      new Date(2014, 9 /* Oct */, 6).toISOString(),
	      new Date(2014, 9 /* Oct */, 12).toISOString()
	    );
	    expect(result).to.be.eql([
	      new Date(2014, 9 /* Oct */, 6),
	      new Date(2014, 9 /* Oct */, 7),
	      new Date(2014, 9 /* Oct */, 8),
	      new Date(2014, 9 /* Oct */, 9),
	      new Date(2014, 9 /* Oct */, 10),
	      new Date(2014, 9 /* Oct */, 11),
	      new Date(2014, 9 /* Oct */, 12)
	    ]);
	  });

	  it('accepts timestamp', function() {
	    var result = eachDay(
	      new Date(2014, 9 /* Oct */, 6).getTime(),
	      new Date(2014, 9 /* Oct */, 12).getTime()
	    );
	    expect(result).to.be.eql([
	      new Date(2014, 9 /* Oct */, 6),
	      new Date(2014, 9 /* Oct */, 7),
	      new Date(2014, 9 /* Oct */, 8),
	      new Date(2014, 9 /* Oct */, 9),
	      new Date(2014, 9 /* Oct */, 10),
	      new Date(2014, 9 /* Oct */, 11),
	      new Date(2014, 9 /* Oct */, 12)
	    ]);
	  });
	});



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var endOfDay = __webpack_require__(50);

	describe('endOfDay', function() {
	  it('returns date with time setted to 23:59:59.999', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = endOfDay(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
	    );
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
	    var result = endOfDay(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
	    );
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
	    var result = endOfDay(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
	    );
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    endOfDay(date);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
	  });
	});



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var endOfHour = __webpack_require__(51);

	describe('endOfHour', function () {
	  it('returns date with time setted to last millisecond before the hour ends', function () {
	    var date = new Date(2014, 11, 1, 22, 15);
	    var result = endOfHour(date);
	    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 59, 59, 999));
	  });

	  it('supports string as a date', function () {
	    var result = endOfHour('2014-12-01T13:00:00.000Z');
	    expect(result).to.be.eql(new Date(Date.UTC(2014, 11, 1, 13, 59, 59, 999)));
	  });

	  it('supports timestamp as a date', function () {
	    var result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime());
	    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 59, 59, 999));
	  });

	  it('does not mutate original date', function () {
	    var date = new Date(2014, 11, 1, 22, 15);
	    endOfHour(date);
	    expect(date).to.be.eql(new Date(2014, 11, 1, 22, 15));
	  });

	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var endOfMonth = __webpack_require__(53);

	describe('endOfMonth', function() {
	  it('returns date with time setted to 23:59:59.999 and date setted to first day in month', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = endOfMonth(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
	    );
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
	    var result = endOfMonth(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
	    );
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
	    var result = endOfMonth(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
	    );
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    endOfMonth(date);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
	  });

	  describe('edge cases', function() {
	    it('works for last month in year', function() {
	      var date = new Date(2014, 11 /* Dec */, 1, 0, 0, 0);
	      var result = endOfMonth(date);
	      expect(result).to.be.eql(
	        new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
	      );
	    });

	    it('works for last day of month', function() {
	      var date = new Date(2014, 9 /* Oct */, 31);
	      var result = endOfMonth(date);
	      expect(result).to.be.eql(
	        new Date(2014, 9 /* Oct */, 31, 23, 59, 59, 999)
	      );
	    });
	  });
	});



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var endOfWeek = __webpack_require__(55);

	describe('endOfWeek', function() {
	  it('returns date with time setted to 00:00:00 and date setted to first day in month', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = endOfWeek(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
	    );
	  });

	  it('allows to pass when a week starts', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = endOfWeek(date, 1);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
	    );
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
	    var result = endOfWeek(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
	    );
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
	    var result = endOfWeek(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
	    );
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    endOfWeek(date);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
	  });

	  describe('edge cases', function() {
	    context('when current day value is less than start of week', function() {
	      it('it returns end of week', function() {
	        var date = new Date(2014, 9 /* Oct */, 6);
	        var result = endOfWeek(date, 3);
	        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999));
	      });
	    });

	    context('when current day value is equal to start of week', function() {
	      it('it returns end of week', function() {
	        var date = new Date(2014, 9 /* Oct */, 8);
	        var result = endOfWeek(date, 3);
	        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999));
	      });
	    });

	    context('when current day value is bigger than start of week', function() {
	      it('it returns end of week', function() {
	        var date = new Date(2014, 9 /* Oct */, 10);
	        var result = endOfWeek(date, 3);
	        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999));
	      });
	    });

	    context('with end of year', function() {
	      var date = new Date(2014, 11 /* Dec */, 29);
	      var result = endOfWeek(date, 5);
	      expect(result).to.be.eql(new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999));
	    });
	  });
	});



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var format = __webpack_require__(52);

	describe('format', function() {
	  beforeEach(function () {
	    this._date = new Date(1986, 3, 4, 10, 32, 0, 900);
	  });

	  it('simple YY', function() {
	    var b = new Date(2009, 1, 14, 15, 25, 50, 125);
	    expect(format(b, 'YY')).to.equal('09');
	  });

	  it('accepts string as a date', function() {
	    var date = new Date(2014, 3, 4).toISOString();
	    expect(format(date, 'YYYY-MM-DD')).to.be.equal('2014-04-04');
	  });

	  it('accepts timestamp as a date', function() {
	    var date = new Date(2014, 3, 4).getTime();
	    expect(format(date, 'YYYY-MM-DD')).to.be.equal('2014-04-04');
	  });

	  it('return default ISO string format if format is unknown', function() {
	    expect(format(this._date)).to.be.equal('1986-04-04T10:32:00.900Z');
	  });

	  describe('format escape brackets', function() {
	    it('should ignore escaped chars that in [] brackets', function() {
	      var result = format(this._date, '[not a date] MM');
	      expect(result).to.be.equal('not a date 04');
	    });
	  });

	  describe('ordinal', function() {
	    it('should return 1st', function() {
	      var date = format(this._date, 'Do of t[h][e] Mo in YYYY');
	      expect(date).to.be.equal('4th of the 4th in 1986');
	    });
	  });

	  describe('Months', function() {
	    it('return months names', function() {
	      var date = format(this._date, 'MMM MMMM');
	      expect(date).to.equal('Apr April');
	    });
	    it('return months names reverse parse', function() {
	      var date = format(this._date, 'MMMM MMM');
	      expect(date).to.equal('April Apr');
	    });
	    it('all month variants', function() {
	      var date = format(this._date, 'M Mo MM MMM MMMM');
	      expect(date).to.equal('4 4th 04 Apr April');
	    });
	  });

	  describe('formatting day', function() {
	    describe('with DDD', function() {
	      context('for first day of a year', function() {
	        it('returns correct day number', function() {
	          var result = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDD');
	          expect(result).to.be.equal('1');
	        });
	      });

	      context('for last day of a common year', function() {
	        it('returns correct day number', function() {
	          var lastDay = format(new Date(1986, 11, 31, 23, 59, 59, 999), 'DDD');
	          expect(lastDay).to.be.equal('365');
	        });
	      });

	      context('for last day of a leap year', function() {
	        it('returns correct day number', function() {
	          var result = format(new Date(1992, 11, 31, 23, 59, 59, 999), 'DDD');
	          expect(result).to.be.equal('366');
	        });
	      });
	    });

	    it('return ordinal day of the year', function() {
	      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDo');
	      expect(firstDay).to.be.equal('1st');
	    });

	    it('return zero filled day of year', function() {
	      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDD');
	      expect(firstDay).to.be.equal('001');
	    });
	  });

	  describe('Quartal', function() {
	    it('right quartal', function() {
	      var result = [];
	      for (var i = 0; i != 12; i++){
	        result.push(format(new Date(1986, i, 1), 'Q'));
	      }
	      expect(result).to.deep.equal(
	        ['1','1','1', '2', '2', '2', '3', '3', '3', '4', '4', '4']
	      );
	    });
	  });

	  describe('day of week', function() {
	    it('display', function() {
	      var result = format(this._date, 'd do dd ddd dddd');
	      expect(result).to.be.equal('5 5th Fr Fri Friday');
	    });

	    it('ISO', function() {
	      expect(format(this._date, 'E')).to.be.equal('6');
	    });

	    it('parses ok for different variants', function() {
	      var firstDay = format(this._date, 'dddd ddd d do [d] do dd ddd dddd');
	      expect(firstDay).to.be.equal('Friday Fri 5 5th d 5th Fr Fri Friday');
	    });
	  });

	  describe('hours', function() {
	    it('am/pm', function() {
	      expect(format(this._date, 'hh:mm a')).to.be.equal('10:32 am');
	    });

	    it('12 pm', function() {
	      var date = new Date(1986, 3, 4, 12, 00, 0, 900);
	      expect(format(date, 'hh:mm a')).to.be.equal('12:00 pm');
	    });

	    it('12 am', function() {
	      var date = new Date(1986, 3, 4, 00, 00, 0, 900);
	      expect(format(date, 'h:mm a')).to.be.equal('12:00 am');
	    });
	  });

	  describe('seconds', function() {
	    it('show', function() {
	      expect(format(this._date, 's ss')).to.be.equal('0 00');
	    });
	  });
	});



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var getISOWeek = __webpack_require__(54);

	describe('getISOWeek', function() {
	  it('returns ISO week of given date', function() {
	    var result = getISOWeek(new Date(2005, 0 /* Jan */, 2));
	    expect(result).to.equal(53);
	  });

	  it('allows to pass string', function() {
	    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).toISOString());
	    expect(result).to.equal(1);
	  });

	  it('allows to pass timestamp', function() {
	    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime());
	    expect(result).to.equal(1);
	  });
	});



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(56);

	describe('getISOYear', function() {
	  it('returns ISO week-numbering year of given date', function() {
	    var result = getISOYear(new Date(2007, 11 /* Dec */, 31));
	    expect(result).to.equal(2008);
	  });

	  it('allows to pass string', function() {
	    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).toISOString());
	    expect(result).to.equal(2004);
	  });

	  it('allows to pass timestamp', function() {
	    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).getTime());
	    expect(result).to.equal(2004);
	  });
	});



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isAfter = __webpack_require__(57);

	describe('isAfter', function() {
	  it('returns true if first date is after second one ', function() {
	    var result = isAfter(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1987, 1 /* Feb */, 11)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if first date is before second one ', function() {
	    var result = isAfter(
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.be.false;
	  });

	  it('returns false if first date is equal to second one ', function() {
	    var result = isAfter(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isAfter(
	      new Date(1989, 6 /* Jul */, 10).toISOString(),
	      new Date(1987, 1 /* Feb */, 11).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isAfter(
	      new Date(1989, 6 /* Jul */, 10).getTime(),
	      new Date(1987, 1 /* Feb */, 11).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isBefore = __webpack_require__(58);

	describe('isBefore', function() {
	  it('returns true if first date is before second one ', function() {
	    var result = isBefore(
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if first date is after second one ', function() {
	    var result = isBefore(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1987, 1 /* Feb */, 11)
	    );
	    expect(result).to.be.false;
	  });

	  it('returns false if first date is equal to second one ', function() {
	    var result = isBefore(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1989, 6 /* Jul */, 10)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isBefore(
	      new Date(1987, 1 /* Feb */, 11).toISOString(),
	      new Date(1989, 6 /* Jul */, 10).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isBefore(
	      new Date(1987, 1 /* Feb */, 11).getTime(),
	      new Date(1989, 6 /* Jul */, 10).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isEqual = __webpack_require__(59);

	describe('isEqual', function() {
	  it('returns true if passed dates are equal', function() {
	    var result = isEqual(
	      new Date(1987, 1 /* Feb */, 11),
	      new Date(1987, 1 /* Feb */, 11)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if passed dates are not equal', function() {
	    var result = isEqual(
	      new Date(1989, 6 /* Jul */, 10),
	      new Date(1987, 1 /* Feb */, 11)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isEqual(
	      new Date(1987, 1 /* Feb */, 11).toISOString(),
	      new Date(1987, 1 /* Feb */, 11).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isEqual(
	      new Date(1987, 1 /* Feb */, 11).getTime(),
	      new Date(1987, 1 /* Feb */, 11).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isFirstDayOfMonth = __webpack_require__(63);

	describe('isFirstDayOfMonth', function() {
	  it('returns true if passed is last day of month', function() {
	    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1));
	    expect(result).to.be.true;
	  });

	  it('returns true if passed is not last day of month', function() {
	    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2));
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var date = new Date(2014, 9 /* Oct */, 1).toISOString();
	    var result = isFirstDayOfMonth(date);
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var date = new Date(2014, 9 /* Oct */, 1).getTime();
	    var result = isFirstDayOfMonth(date);
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFuture = __webpack_require__(60);

	describe('isFuture', function() {
	  beforeEach(function() {
	    this.clock = sinon.useFakeTimers(
	      new Date(2014, 8 /* Sep */, 25).getTime()
	    );
	  });

	  afterEach(function() {
	    this.clock.restore();
	  });

	  it('returns true if passed date is future', function() {
	    var result = isFuture(new Date(2014, 9 /* Oct */, 31));
	    expect(result).to.be.true;
	  });

	  it('returns false if passed date is past', function() {
	    var result = isFuture(new Date(2014, 8 /* Sep */, 1));
	    expect(result).to.be.false;
	  });

	  it('returns true if passed date is current date', function() {
	    var result = isFuture(new Date(2014, 8 /* Sep */, 25));
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isFuture(new Date(2014, 9 /* Oct */, 31).toISOString());
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isFuture(new Date(2014, 9 /* Oct */, 31).getTime());
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isLastDayOfMonth = __webpack_require__(61);

	describe('isLastDayOfMonth', function() {
	  it('returns true if passed is last day of month', function() {
	    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31));
	    expect(result).to.be.true;
	  });

	  it('returns true if passed is not last day of month', function() {
	    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30));
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var date = new Date(2014, 9 /* Oct */, 31).toISOString();
	    var result = isLastDayOfMonth(date);
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var date = new Date(2014, 9 /* Oct */, 31).getTime();
	    var result = isLastDayOfMonth(date);
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isSameDay = __webpack_require__(62);

	describe('isSameDay', function() {
	  it('returns true if passed dates has same day', function() {
	    var result = isSameDay(
	      new Date(2014, 8 /* Sep */, 4, 6, 0),
	      new Date(2014, 8 /* Sep */, 4, 18, 0)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if passed dates has different days', function() {
	    var result = isSameDay(
	      new Date(2014, 8 /* Sep */, 4, 23, 59),
	      new Date(2014, 8 /* Sep */, 5, 0, 0)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isSameDay(
	      new Date(2014, 8 /* Sep */, 4, 6, 0).toISOString(),
	      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isSameDay(
	      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
	      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isSameMonth = __webpack_require__(65);

	describe('isSameMonth', function() {
	  it('returns true if passed dates has same month (and year)', function() {
	    var result = isSameMonth(
	      new Date(2014, 8 /* Sep */, 2),
	      new Date(2014, 8 /* Sep */, 25)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if passed dates has different months', function() {
	    var result = isSameMonth(
	      new Date(2014, 8 /* Sep */, 2),
	      new Date(2013, 8 /* Sep */, 25)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isSameMonth(
	      new Date(2014, 8 /* Sep */, 2).toISOString(),
	      new Date(2014, 8 /* Sep */, 25).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isSameMonth(
	      new Date(2014, 8 /* Sep */, 2).getTime(),
	      new Date(2014, 8 /* Sep */, 25).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(66);

	describe('isSameWeek', function() {
	  it('returns true if passed dates belongs to the same week', function() {
	    var result = isSameWeek(
	      new Date(2014, 7 /* Aug */, 31),
	      new Date(2014, 8 /* Sep */, 4)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if passed dates do not belongs to the same week', function() {
	    var result = isSameWeek(
	      new Date(2014, 7 /* Aug */, 30),
	      new Date(2014, 8 /* Sep */, 4)
	    );
	    expect(result).to.be.false;
	  });

	  it('allow to specify when week starts', function() {
	    var result = isSameWeek(
	      new Date(2014, 7 /* Aug */, 31),
	      new Date(2014, 8 /* Sep */, 4),
	      1
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isSameWeek(
	      new Date(2014, 7 /* Aug */, 31).toISOString(),
	      new Date(2014, 8 /* Sep */, 4).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isSameWeek(
	      new Date(2014, 7 /* Aug */, 31).getTime(),
	      new Date(2014, 8 /* Sep */, 4).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isSameYear = __webpack_require__(67);

	describe('isSameYear', function() {
	  it('returns true if passed dates has same year', function() {
	    var result = isSameYear(
	      new Date(2014, 8 /* Sep */, 2),
	      new Date(2014, 8 /* Sep */, 25)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if passed dates has different years', function() {
	    var result = isSameYear(
	      new Date(2014, 8 /* Sep */, 2),
	      new Date(2013, 8 /* Sep */, 25)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isSameYear(
	      new Date(2014, 8 /* Sep */, 2).toISOString(),
	      new Date(2014, 8 /* Sep */, 25).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isSameYear(
	      new Date(2014, 8 /* Sep */, 2).getTime(),
	      new Date(2014, 8 /* Sep */, 25).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isToday = __webpack_require__(64);

	describe('isToday', function() {
	  beforeEach(function() {
	    this.clock = sinon.useFakeTimers(
	      new Date(2014, 8 /* starts from 0 */, 25).getTime()
	    );
	  });

	  afterEach(function() {
	    this.clock.restore();
	  });

	  it('returns true if passed is weekend', function() {
	    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25));
	    expect(result).to.be.true;
	  });

	  it('returns false if passed date is not today', function() {
	    var result = isToday(new Date(2014, 8 /* starts from 0 */, 26));
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).toString());
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).getTime());
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isWeekend = __webpack_require__(69);

	describe('isWeekend', function() {
	  it('returns true if passed is weekend', function() {
	    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5));
	    expect(result).to.be.true;
	  });

	  it('returns false if passed date is not weekend', function() {
	    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 6));
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5).toString());
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isWeekend(new Date(2014, 9 /* starts from 0 */, 5).getTime());
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isWithinRange = __webpack_require__(68);

	describe('isWithinRange', function() {
	  it('returns true if passed date within the range', function() {
	    var result = isWithinRange(
	      new Date(2014, 9 /* Oct */, 31),
	      new Date(2014, 8 /* Sep */, 1),
	      new Date(2014, 11 /* Dec */, 31)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns true if passed date has the same time as left boundary', function() {
	    var result = isWithinRange(
	      new Date(2014, 8 /* Sep */, 1),
	      new Date(2014, 8 /* Sep */, 1),
	      new Date(2014, 11 /* Dec */, 31)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns true if passed date has the same time as right boundary', function() {
	    var result = isWithinRange(
	      new Date(2014, 11 /* Dec */, 31),
	      new Date(2014, 8 /* Sep */, 1),
	      new Date(2014, 11 /* Dec */, 31)
	    );
	    expect(result).to.be.true;
	  });

	  it('returns false if passed date outside of the range', function() {
	    var result = isWithinRange(
	      new Date(2014, 1 /* Feb */, 11),
	      new Date(2014, 8 /* Sep */, 1),
	      new Date(2014, 11 /* Dec */, 31)
	    );
	    expect(result).to.be.false;
	  });

	  it('allows to pass string', function() {
	    var result = isWithinRange(
	      new Date(2014, 9 /* Oct */, 31).toISOString(),
	      new Date(2014, 8 /* Sep */, 1).toISOString(),
	      new Date(2014, 11 /* Dec */, 31).toISOString()
	    );
	    expect(result).to.be.true;
	  });

	  it('allows to pass timestamp', function() {
	    var result = isWithinRange(
	      new Date(2014, 9 /* Oct */, 31).getTime(),
	      new Date(2014, 8 /* Sep */, 1).getTime(),
	      new Date(2014, 11 /* Dec */, 31).getTime()
	    );
	    expect(result).to.be.true;
	  });
	});



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(71);

	describe('parse', function() {
	  describe('year', function() {
	    it('parses YYYY', function() {
	      var result = parse('2014');
	      expect(result).to.be.eql(new Date(2014, 0, 1));
	    });
	  });

	  describe('month', function() {
	    it('parses YYYY-MM', function() {
	      var result = parse('2014-02');
	      expect(result).to.be.eql(new Date(2014, 1, 1));
	    });
	  });

	  describe('week', function() {
	    it('parses YYYY-Www', function() {
	      var result = parse('2014-W02');
	      expect(result).to.be.eql(new Date(2014, 0, 6));
	    });

	    it('parses YYYYWww', function() {
	      var result = parse('2014W02');
	      expect(result).to.be.eql(new Date(2014, 0, 6));
	    });
	  });

	  describe('calendar date', function() {
	    it('parses YYYY-MM-DD', function() {
	      var result = parse('2014-02-11');
	      expect(result).to.be.eql(new Date(2014, 1, 11));
	    });

	    it('parses YYYYMMDD', function() {
	      var result = parse('20140211');
	      expect(result).to.be.eql(new Date(2014, 1, 11));
	    });
	  });

	  describe('week date', function() {
	    it('parses YYYY-Www-D', function() {
	      var result = parse('2014-W02-7');
	      expect(result).to.be.eql(new Date(2014, 0, 12));
	    });

	    it('parses YYYYWwwD', function() {
	      var result = parse('2014W027');
	      expect(result).to.be.eql(new Date(2014, 0, 12));
	    });
	  });

	  describe('ordinal date', function() {
	    it('parses YYYY-DDD', function() {
	      var result = parse('2014-026');
	      expect(result).to.be.eql(new Date(2014, 0, 26));
	    });

	    it('parses YYYYDDD', function() {
	      var result = parse('2014026');
	      expect(result).to.be.eql(new Date(2014, 0, 26));
	    });
	  });

	  describe('date and time combined', function() {
	    it('parses YYYY-MM-DDThh:mm', function() {
	      var result = parse('2014-02-11T11:30');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
	    });

	    it('parses YYYY-MM-DDThhmm', function() {
	      var result = parse('2014-02-11T1130');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
	    });

	    it('parses 24:00 as midnight', function() {
	      var result = parse('2014-02-11T2400');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 0, 0));
	    });
	  });

	  describe('float time', function() {
	    it('parses float hours', function() {
	      var result = parse('2014-02-11T11.5');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
	    });

	    it('parses float minutes', function() {
	      var result = parse('2014-02-11T11:30.5');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30, 30));
	    });

	    it('parses float seconds', function() {
	      var result = parse('2014-02-11T11:30:30.768');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30, 30, 768));
	    });

	    it('parses , as decimal mark', function() {
	      var result = parse('2014-02-11T11,5');
	      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
	    });
	  });

	  describe('time zone', function() {
	    context('when date and time are specified', function() {
	      it('parses Z', function() {
	        var result = parse('2014-10-25T06:46:20Z');
	        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
	      });

	      it('parses ±hh:mm', function() {
	        var result = parse('2014-10-25T13:46:20+07:00');
	        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
	      });

	      it('parses ±hhmm', function() {
	        var result = parse('2014-10-25T03:46:20-0300');
	        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
	      });

	      it('parses ±hh', function() {
	        var result = parse('2014-10-25T13:46:20+07');
	        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
	      });
	    });
	  });

	  describe('plain time', function() {
	    it('parses plain time', function() {
	      var result = parse('21:05:30');
	      expect(result.getHours()).to.be.equal(21);
	      expect(result.getMinutes()).to.be.equal(5);
	      expect(result.getSeconds()).to.be.equal(30);
	    });

	    it('parses float plain time', function() {
	      var result = parse('21:05.5');
	      expect(result.getHours()).to.be.equal(21);
	      expect(result.getMinutes()).to.be.equal(5);
	      expect(result.getSeconds()).to.be.equal(30);
	    });
	  });
	});



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var setISOWeek = __webpack_require__(70);

	describe('setISOWeek', function() {
	  it('sets ISO week to given date', function() {
	    var result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53);
	    expect(result).to.be.eql(new Date(2005, 0 /* Jan */, 1));
	  });

	  it('allows to pass string', function() {
	    var result = setISOWeek(new Date(2009, 11 /* Dec */, 2).toISOString(), 1);
	    expect(result).to.be.eql(new Date(2008, 11 /* Dec */, 31));
	  });

	  it('allows to pass timestamp', function() {
	    var result = setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1);
	    expect(result).to.be.eql(new Date(2008, 11 /* Dec */, 31));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 6 /* Jul */, 2);
	    setISOWeek(date, 52);
	    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 2));
	  });
	});



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var setISOYear = __webpack_require__(72);

	describe('setISOYear', function() {
	  it('sets year of given date, saving ISO week and day of week', function() {
	    var result = setISOYear(new Date(2008, 11 /* Dec */, 29), 2007);
	    expect(result).to.be.eql(new Date(2007, 0 /* Jan */, 1));
	  });

	  it('allows to pass string', function() {
	    var result = setISOYear(new Date(2010, 0 /* Jan */, 2).toISOString(), 2004);
	    expect(result).to.be.eql(new Date(2005, 0 /* Jan */, 1));
	  });

	  it('allows to pass timestamp', function() {
	    var result = setISOYear(new Date(2010, 0 /* Jan */, 2).getTime(), 2004);
	    expect(result).to.be.eql(new Date(2005, 0 /* Jan */, 1));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2008, 11 /* Dec */, 29);
	    setISOYear(date, 2000);
	    expect(date).to.be.eql(new Date(2008, 11 /* Dec */, 29));
	  });
	});



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var setMonth = __webpack_require__(73);

	describe('setMonth', function() {
	  it('set index of month', function() {
	    var result = setMonth(new Date(2014, 8 /* Sep */, 1), 1);
	    expect(result).to.be.eql(new Date(2014, 1 /* Feb */, 1));
	  });

	  it('accepts string', function() {
	    var result = setMonth(new Date(2014, 8 /* Sep */, 1).toISOString(), 11);
	    expect(result).to.be.eql(new Date(2014, 11 /* Dec */, 1));
	  });

	  it('accepts timestamp', function() {
	    var result = setMonth(new Date(2014, 8 /* Sep */, 1).getTime(), 11);
	    expect(result).to.be.eql(new Date(2014, 11 /* Dec */, 1));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 1);
	    setMonth(date, 5);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });
	});



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var setYear = __webpack_require__(74);

	describe('setYear', function() {
	  it('set full year', function() {
	    var result = setYear(new Date(2014, 8 /* Sep */, 1), 2013);
	    expect(result).to.be.eql(new Date(2013, 8 /* Sep */, 1));
	  });

	  it('accepts string', function() {
	    var result = setYear(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016);
	    expect(result).to.be.eql(new Date(2016, 8 /* Sep */, 1));
	  });

	  it('accepts timestamp', function() {
	    var result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016);
	    expect(result).to.be.eql(new Date(2016, 8 /* Sep */, 1));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 1);
	    setYear(date, 2011);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });
	});



/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(75);

	describe('startOfDay', function() {
	  it('returns date with time setted to 00:00:00', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = startOfDay(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
	    );
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
	    var result = startOfDay(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
	    );
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
	    var result = startOfDay(date);
	    expect(result).to.be.eql(
	      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
	    );
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    startOfDay(date);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
	  });
	});



/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var startOfHour = __webpack_require__(76);

	describe('startOfHour', function() {
	  it('returns date with minutes setted to 00:00:00', function () {
	    var date = new Date('2014-09-02T11:55:00');
	    var result = startOfHour(date);
	    expect(result).to.be.eql(
	      new Date('2014-09-02T11:00:00')
	    );
	  });

	  it('does not mutate original date', function() {
	    var date = new Date('2014-09-02T11:55:00');
	    startOfHour(date);
	    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
	  });

	  it('accepts timestamp as a date', function(){
	    var date = new Date('2014-09-02T11:55:00').getTime();
	    var result = startOfHour(date);
	    expect(result).to.be.eql(new Date('2014-09-02T11:00:00'));
	  });

	  it('accepts string as a date', function(){
	    var date = startOfHour('2014-12-01T12:35:00');
	    //We use Date.UTC here, because string '2014-12-01T12:35:00' is in UTC format
	    expect(date).to.be.eql(new Date(Date.UTC(2014, 11, 1, 12, 0)));
	  });
	});



/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(77);

	describe('startOfISOYear', function() {
	  it('returns date with first day of ISO week', function() {
	    var result = startOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0));
	    expect(result).to.be.eql(new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0));
	  });

	  it('accepts string', function() {
	    var result = startOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString());
	    expect(result).to.be.eql(new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0));
	  });

	  it('accepts timestamp', function() {
	    var result = startOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime());
	    expect(result).to.be.eql(new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 6 /* Jul */, 2);
	    startOfISOYear(date);
	    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 2));
	  });
	});



/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var startOfMonth = __webpack_require__(78);

	describe('startOfMonth', function() {
	  it('returns date with time setted to 00:00:00 and date setted to first day in month', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = startOfMonth(date);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
	    var result = startOfMonth(date);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
	    var result = startOfMonth(date);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    startOfMonth(date);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
	  });
	});



/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(79);

	describe('startOfWeek', function() {
	  it('returns date with time setted to 00:00:00 and date setted to first day in month', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = startOfWeek(date);
	    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 31));
	  });

	  it('allows to pass when a week starts', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    var result = startOfWeek(date, 1);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
	    var result = startOfWeek(date);
	    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 31));
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
	    var result = startOfWeek(date);
	    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 31));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
	    startOfWeek(date);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
	  });

	  describe('edge cases', function() {
	    context('when current day value is less than start of week', function() {
	      it('it returns start of week', function() {
	        var date = new Date(2014, 9 /* Oct */, 6);
	        var result = startOfWeek(date, 3);
	        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 1));
	      });
	    });

	    context('when current day value is equal to start of week', function() {
	      it('it returns start of week', function() {
	        var date = new Date(2014, 9 /* Oct */, 8);
	        var result = startOfWeek(date, 3);
	        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 8));
	      });
	    });

	    context('when current day value is bigger than start of week', function() {
	      it('it returns start of week', function() {
	        var date = new Date(2014, 9 /* Oct */, 10);
	        var result = startOfWeek(date, 3);
	        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 8));
	      });
	    });

	    context('with start of year', function() {
	      var date = new Date(2014, 0 /* Jan */, 1);
	      var result = startOfWeek(date);
	      expect(result).to.be.eql(new Date(2013, 11 /* Dec */, 29));
	    });
	  });
	});



/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var startOfYear = __webpack_require__(80);

	describe('startOfYear', function() {
	  it('returns date with time setted to 00:00:00', function() {
	    var date = new Date(2014, 8, 2, 11, 55, 00);
	    var result = startOfYear(date);
	    expect(result).to.be.eql(
	      new Date(2014, 0, 1, 0, 0, 0, 0)
	    );
	  });

	  it('accepts string', function() {
	    var date = new Date(2014, 8, 2, 11, 55, 00);
	    var result = startOfYear(date.toISOString());
	    expect(result).to.be.eql(
	      new Date(2014, 0, 1, 0, 0, 0, 0)
	    );
	  });

	  it('accepts timestamp', function() {
	    var date = new Date(2014, 8, 2, 11, 55, 00);
	    var result = startOfYear(date.getTime());
	    expect(result).to.be.eql(
	      new Date(2014, 0, 1, 0, 0, 0, 0)
	    );
	  });

	  it('does not mutate original date', function() {
	    var date = new Date('2014-09-02T11:55:00');
	    startOfYear(date);
	    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
	  });
	});



/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var subDays = __webpack_require__(82);

	describe('subDays', function() {
	  it('subs number of passed days', function() {
	    var result = subDays(new Date(2014, 8 /* Sep */, 1), 10);
	    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 22));
	  });

	  it('accepts string', function() {
	    var result = subDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10);
	    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 22));
	  });

	  it('accepts timestamp', function() {
	    var result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
	    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 22));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 1);
	    subDays(date, 11);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });
	});



/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var subHours = __webpack_require__(81);

	describe('subHours', function() {
	  it('subtracts numbers of passed hours', function() {
	    var result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2);
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
	  });

	  it('accepts string', function() {
	    var result = subHours(
	      new Date(2014, 6 /* Jul */, 12, 1, 0).toISOString(), 26
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
	  });

	  it('accepts timestamp', function() {
	    var result = subHours(
	      new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 6 /* Jul */, 10, 23, 0);
	    subHours(date, 10);
	    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
	  });
	});



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var subMinutes = __webpack_require__(83);

	describe('subMinutes', function() {
	  it('subtracts number of passed minutes', function() {
	    var result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 11, 30));
	  });

	  it('accepts string', function() {
	    var result = subMinutes(
	      new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 11, 40));
	  });

	  it('accepts timestamp', function() {
	    var result = subMinutes(
	      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20
	    );
	    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 11, 40));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 6 /* Jul */, 10, 12, 0);
	    subMinutes(date, 25);
	    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 0));
	  });
	});



/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var subMonths = __webpack_require__(84);

	describe('subMonths', function() {
	  it('subtracts number of passed months', function() {
	    var result = subMonths(new Date(2015, 1 /* Feb */, 1), 5);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('accepts string', function() {
	    var result = subMonths(new Date(2015, 8 /* Sep */, 1).toISOString(), 12);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('accepts timestamp', function() {
	    var result = subMonths(new Date(2015, 8 /* Sep */, 1).getTime(), 12);
	    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });

	  it('does not mutate original date', function() {
	    var date = new Date(2014, 8 /* Sep */, 1);
	    subMonths(date, 12);
	    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
	  });
	});



/***/ },
/* 43 */
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
	  /**
	   * add additional 5 hours to get next day,
	   * because of possible troubles with daylight savings dates
	   */
	  date = new Date(date.setTime(date.getTime() + 5 * 60 * 60 * 1000));
	  date = new Date(date.setHours(0, 0, 0, 0));
	  return date;
	};

	module.exports = addDays;



/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Adds specified number of hours to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of hours
	 * @returns {date} new date
	 */
	var addHours = function(dirtyDate, amount) {
	  var date = new Date(dirtyDate);
	  date.setHours(date.getHours() + amount);
	  return date;
	};

	module.exports = addHours;



/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Adds specified number of months to passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var addMonths = function(dirtyDate, amount) {
	  var date = new Date(dirtyDate);
	  var desiredMonth = date.getMonth() + amount;
	  var daysInDesiredMonth = new Date(Date.UTC(date.getFullYear(), desiredMonth + 1, 0)).getUTCDate();

	  date.setDate(Math.min(daysInDesiredMonth, date.getDate()));
	  date.setMonth(desiredMonth);
	  return date;
	};

	module.exports = addMonths;



/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Adds specified number of minutes to passed date.
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Compares the two dates and returns -1, 0 or 1.
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {number}
	 */
	var compareAsc = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = new Date(dirtyDateLeft);
	  var timeLeft = dateLeft.getTime();
	  var dateRight = new Date(dirtyDateRight);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Compares the two dates reverse chronologicaly and returns -1, 0 or 1.
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {number}
	 */
	var compareDesc = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = new Date(dirtyDateLeft);
	  var timeLeft = dateLeft.getTime();
	  var dateRight = new Date(dirtyDateRight);
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
/* 49 */
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
	  var tmpDate;

	  var curDate = new Date(dirtyStart);
	  curDate.setHours(0, 0, 0, 0);

	  while (curDate.getTime() <= endTime) {
	    dates.push(new Date(curDate));

	    curDate.setDate(curDate.getDate() + 1);

	    /**
	     * add additional 5 hours to get next day,
	     * because of possible troubles with daylight savings dates
	     */
	    tmpDate = new Date(curDate.setTime(curDate.getTime() + 5 * 60 * 60 * 1000));
	    tmpDate = new Date(tmpDate.setHours(0, 0, 0, 0));
	    curDate = tmpDate;
	  }

	  return dates;
	};

	module.exports = eachDay;



/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns end of an hour for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfHour = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  date.setMinutes(59, 59, 999);
	  return date;
	};

	module.exports = endOfHour;



/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(75);
	var startOfYear = __webpack_require__(80);

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
	    var hours = this.getHours();
	    return hours == 0 ? 12 :
	           hours > 12 ? hours % 12 : hours;
	  },
	  'hh': function() {
	    return leftZeroFill(formats['h'].apply(this), 2);
	  },
	  'm': function() {
	    return this.getMinutes();
	  },
	  'mm': function() {
	    return leftZeroFill(this.getMinutes(), 2);
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns end of a month for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var endOfMonth = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  var month = date.getMonth();
	  date.setHours(23, 59, 59, 999);
	  date.setFullYear(date.getFullYear(), month + 1, 0);
	  return date;
	};

	module.exports = endOfMonth;



/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(77);

	var MILLISECONDS_IN_WEEK = 604800000;

	/**
	 * Returns ISO week of given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {date|string} dirtyDate
	 * @returns {number} (ISO week)
	 *
	 * @example which week of ISO-week numbering year is 2 January 2005
	 * var result = getISOWeek(new Date(2005, 0, 2));
	 * //=> 53
	 */
	var getISOWeek = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  var diff = date.getTime() - startOfISOYear(date).getTime();
	  return Math.floor(diff / MILLISECONDS_IN_WEEK) + 1;
	};

	module.exports = getISOWeek;



/***/ },
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(79);

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
	 * var result = getISOYear(new Date(2005, 0, 2));
	 * //=> 2004
	 */
	var getISOYear = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  var year = date.getFullYear();
	  var startOfNextYear = startOfWeek(new Date(year + 1, 0, 4), 1);
	  var startOfThisYear = startOfWeek(new Date(year, 0, 4), 1);

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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is first date after second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 after 11 February 1987
	 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
	 * //=> true
	 */
	var isAfter = function(dirtyDateToCompare, dirtyDate) {
	  var dateToCompare = new Date(dirtyDateToCompare);
	  var date = new Date(dirtyDate);
	  return dateToCompare.getTime() > date.getTime();
	};

	module.exports = isAfter;



/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is first date is before second one?
	 * @param {date|string} dirtyDateToCompare
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 *
	 * @example is 10 July 1989 before 11 February 1987
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Are passed dates equal?
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed date future?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isFuture = function(dirtyDate) {
	  return new Date(dirtyDate).getTime() > new Date().getTime();
	};

	module.exports = isFuture;



/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var endOfDay = __webpack_require__(50);
	var endOfMonth = __webpack_require__(53);

	/**
	 * Is passed date last day of month?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isLastDayOfMonth = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  return endOfDay(date).getTime() == endOfMonth(date).getTime();
	};

	module.exports = isLastDayOfMonth;




/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(75);

	/**
	 * Are passed dates has the same day?
	 * @param {date|string} dirtyDateLeft
	 * @param {date|string} dirtyDateRight
	 * @returns {boolean}
	 */
	var isSameDay = function(dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
	  var dateRightStartOfDay = startOfDay(dirtyDateRight);

	  return(
	    dateLeftStartOfDay.getTime() == dateRightStartOfDay.getTime()
	  );
	}

	module.exports = isSameDay;



/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(75);
	var startOfMonth = __webpack_require__(53);

	/**
	 * Is passed date first day of month?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isFirstDayOfMonth = function(dirtyDate) {
	  return new Date(dirtyDate).getDate() == 1;
	};

	module.exports = isFirstDayOfMonth;




/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(75);

	/**
	 * Is passed date today?
	 * @param {date|string} dirtyDate
	 * @returns {boolean}
	 */
	var isToday = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  return startOfDay(date).getTime() == startOfDay(new Date()).getTime();
	};

	module.exports = isToday;



/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Are passed dates has the same month (and year)?
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(79);

	/**
	 * Are passed dates belongs to the same week?
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Are passed dates has the same year?
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Is passed date weekend?
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var getISOWeek = __webpack_require__(54);

	var MILLISECONDS_IN_WEEK = 604800000;

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
	  var date = new Date(dirtyDate);
	  var diff = getISOWeek(date) - isoWeek;
	  date.setTime(date.getTime() - diff * MILLISECONDS_IN_WEEK);
	  return date;
	};

	module.exports = setISOWeek;



/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(43);
	var addMinutes = __webpack_require__(46);
	var startOfWeek = __webpack_require__(79);

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
	  var date = new Date(dirtyDate);

	  // hh
	  if (token = parseTokenHH.exec(timeString)) {
	    var hours = parseFloat(token[1].replace(',', '.'));
	    return setFloatTime(date, hours);
	  }

	  // hh:mm or hhmm
	  else if (token = parseTokenHHMM.exec(timeString)) {
	    var hours = parseInt(token[1], 10);
	    var minutes = parseFloat(token[2].replace(',', '.'));
	    return setFloatTime(date, hours, minutes);
	  }

	  // hh:mm:ss or hhmmss
	  else if (token = parseTokenHHMMSS.exec(timeString)) {
	    var hours = parseInt(token[1], 10);
	    var minutes = parseInt(token[2], 10);
	    var seconds = parseFloat(token[3].replace(',', '.'));
	    return setFloatTime(date, hours, minutes, seconds)
	  }

	  // invalid ISO-formated time
	  else {
	    return date;
	  }
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

	  date.setHours(calculatedHours);
	  date.setMinutes(calculatedMinutes);
	  date.setSeconds(calculatedSeconds);
	  date.setMilliseconds(calculatedMilliseconds);

	  return date;
	}

	module.exports = parse;



/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(77);

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
	  var date = new Date(dirtyDate);
	  var startOfThisYear = startOfISOYear(date);
	  var diff = date.getTime() - startOfThisYear.getTime();
	  date.setTime(startOfISOYear(new Date(isoYear, 0, 4)).getTime() + diff);
	  return date;
	};

	module.exports = setISOYear;



/***/ },
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns start of an hour for given date. Date will be in local timezone.
	 * @param {date|string} dirtyDate
	 * @returns {date}
	 */
	var startOfHour = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  date.setMinutes(0, 0, 0);
	  return date;
	};

	module.exports = startOfHour;



/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(79);

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
	 * var result = startOfISOYear(new Date(2005, 6, 2));
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	var startOfISOYear = function(dirtyDate) {
	  var date = new Date(dirtyDate);
	  var startOfNextYear = startOfWeek(new Date(date.getFullYear() + 1, 0, 4), 1);
	  var startOfThisYear = startOfWeek(new Date(date.getFullYear(), 0, 4), 1);

	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return startOfNextYear;
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return startOfThisYear;
	  } else {
	    return startOfWeek(new Date(date.getFullYear() - 1, 0, 4), 1);
	  }
	};

	module.exports = startOfISOYear;



/***/ },
/* 78 */
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
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var addHours = __webpack_require__(44);

	/**
	 * Subtracts specified number of hours from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of hours
	 * @returns {date} new date
	 */
	var subHours = function(dirtyDate, amount) {
	  return addHours(dirtyDate, -amount);
	};

	module.exports = subHours;



/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(43);

	/**
	 * Subtracts specified number of days from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subDays = function(dirtyDate, amount) {
	  return addDays(dirtyDate, -amount);
	};

	module.exports = subDays;



/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(46);

	/**
	 * Subtracts specified number of munutes from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount of minutes
	 * @returns {date} new date
	 */
	var subMinutes = function(dirtyDate, amount) {
	  return addMinutes(dirtyDate, -amount);
	};

	module.exports = subMinutes;



/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(45);

	/**
	 * Subtracts specified number of month from passed date.
	 * @param {data|string} dirtyDate
	 * @param {number} amount
	 * @returns {date} new date
	 */
	var subMonths = function(dirtyDate, amount) {
	  return addMonths(dirtyDate, -amount);
	};

	module.exports = subMonths;



/***/ }
/******/ ])
});
;