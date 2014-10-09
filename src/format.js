var startOfDay = require('./start_of_day');
var startOfYear = require('./start_of_year');

var format = function(date, format, locale) {
  var formatFunction = makeFormatFunction(format);
  return formatFunction(date);
}

var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

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
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function leftZeroFill(number, targetLength) {
    var output = '' + Math.abs(number);

    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}


var locale = {
  ordinal: function (number) {
    var b = number % 10,
        output = (+(number % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
        (b === 2) ? 'nd' :
        (b === 3) ? 'rd' : 'th';
    return number + output;
  },
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
}

var formats = {
  'M': function(){
    return this.getMonth() + 1;
  },
  'MM': function(){
    return leftZeroFill(this.getMonth() + 1, 2);
  },
  'MMM': function(){
    return locale.monthsShort[this.getMonth()];
  },
  'MMMM': function(){
    return locale.months[this.getMonth()];
  },
  'Q': function(){
    return Math.ceil((this.getMonth() + 1) / 3);
  },
  'D': function(){
    return this.getDate();
  },
  'DD': function(){
    return leftZeroFill(this.getDate(), 2);
  },
  'DDD': function(){
    return Math.round((startOfDay(this) - startOfYear(this)) / 864e5) + 1;
  },
  'DDDD': function(){
    return leftZeroFill(formats['DDD'].apply(this), 3);
  },
  'd': function(){
    return this.getDay();
  },
  'dd': function(){
    return locale.dayNamesMin[this.getDay()];
  },
  'ddd': function(){
    return locale.dayNamesShort[this.getDay()];
  },
  'dddd': function(){
    return locale.dayNames[this.getDay()];
  },
  'E': function(){
    return this.getDay() + 1;
  },
  'YY': function(){
    return String(this.getFullYear()).substr(2);
  },
  'YYYY': function(){
    return this.getFullYear()
  }
}

var ordinalFunctions = ['M', 'D', 'DDD', 'd'];
ordinalFunctions.forEach(function(functionName){
  formats[functionName + 'o'] = function(){
    return locale.ordinal(formats[functionName].apply(this));
  };
});

module.exports = format;