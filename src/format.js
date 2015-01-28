var startOfDay = require('./start_of_day');
var startOfYear = require('./start_of_year');

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

