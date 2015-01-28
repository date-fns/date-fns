var isBefore = require('./is_before');

var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
var MINUTES_IN_QUARTER_YEAR = 131400;
var MINUTES_IN_THREE_QUARTERS_YEAR = 394200;
var MINUTES_IN_YEAR = 525600;

/**
 * Returns distance of time between two dates in words
 * @param {date|string} dirtyDateFrom
 * @param {date|string} dirtyDateTo
 * @param {boolean} includeSeconds
 * @returns {string}
 */
var distanceOfTimeInWords = function(dirtyDateFrom, dirtyDateTo, includeSeconds) {
  if (isBefore(dirtyDateFrom, dirtyDateTo)) {
    var dateFrom = new Date(dirtyDateFrom);
    var dateTo = new Date(dirtyDateTo);
  } else {
    var dateFrom = new Date(dirtyDateTo);
    var dateTo = new Date(dirtyDateFrom);
  }
  
  var distanceInMilliseconds = Math.abs(dateTo.valueOf() - dateFrom.valueOf());
  var distanceInSeconds = Math.floor(distanceInMilliseconds / 1000);
  var distanceInMinutes = Math.round(distanceInSeconds / 60);

  // 0 up to 2 mins
  if (distanceInMinutes < 2) {
    if (includeSeconds) {
      if (distanceInSeconds < 5) {
        return translate('lessThanXSeconds', 5);
      } else if (distanceInSeconds < 10) {
        return translate('lessThanXSeconds', 10);
      } else if (distanceInSeconds < 20) {
        return translate('lessThanXSeconds', 20);
      } else if (distanceInSeconds < 40) {
        return translate('halfAMinute');
      } else if (distanceInSeconds < 60) {
        return translate('lessThanXMinutes', 1);
      } else {
        return translate('xMinutes', 1);
      }
    } else {
      if (distanceInMinutes == 0) {
        return translate('lessThanXMinutes', 1); 
      } else {
        return translate('xMinutes', distanceInMinutes);
      }
    }
  }
  
  // 2 mins up to 0.75 hrs
  else if (distanceInMinutes < 45) {
    return translate('xMinutes', distanceInMinutes);
  }

  // 0.75 hrs up to 1.5 hrs
  else if (distanceInMinutes < 90) {
    return translate('aboutXHours', 1);
  }

  // 1.5 hrs up to 24 hrs
  else if (distanceInMinutes < MINUTES_IN_DAY) {
    var distanceInHours = Math.round(distanceInMinutes / 60);
    return translate('aboutXHours', distanceInHours);
  }

  // 1 day up to 1.75 days
  else if (distanceInMinutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return translate('xDays', 1);
  }

  // 1.75 days up to 30 days
  else if (distanceInMinutes < MINUTES_IN_MONTH) {
    var distanceInDays = Math.round(distanceInMinutes / MINUTES_IN_DAY);
    return translate('xDays', distanceInDays);
  }

  // 1 month up to 2 months
  else if (distanceInMinutes < MINUTES_IN_TWO_MONTHS) {
    var distanceInMonths = Math.round(distanceInMinutes / MINUTES_IN_MONTH);
    return translate('aboutXMonths', distanceInMonths);
  }

  // 2 months up to 12 months
  else if (distanceInMinutes < MINUTES_IN_YEAR) {
    var distanceInMonths = Math.round(distanceInMinutes / MINUTES_IN_MONTH);
    return translate('xMonths', distanceInMonths);
  }

  // 1 year up to max Date
  else {
    var leapMinutes = countLeapYears(dateFrom, dateTo) * MINUTES_IN_DAY;
    var distanceOfMinutesWithOffset = distanceInMinutes - leapMinutes;
    var remainder = distanceOfMinutesWithOffset % MINUTES_IN_YEAR;
    var distanceInYears = Math.floor(distanceOfMinutesWithOffset / MINUTES_IN_YEAR);

    // N years up to N years 3 months
    if (remainder < MINUTES_IN_QUARTER_YEAR) {
      return translate('aboutXYears', distanceInYears);
    }

    // N years 3 months up to N years 9 months
    else if (remainder < MINUTES_IN_THREE_QUARTERS_YEAR) {
      return translate('overXYears', distanceInYears);
    }

    // N years 9 months up to N year 12 months
    else {
      return translate('almostXYears', distanceInYears + 1);
    }
  }
};

var countLeapYears = function(dirtyDateFrom, dirtyDateTo) {
  if (isBefore(dirtyDateFrom, dirtyDateTo)) {
    var dateFrom = new Date(dirtyDateFrom);
    var dateTo = new Date(dirtyDateTo);
  } else {
    var dateFrom = new Date(dirtyDateTo);
    var dateTo = new Date(dirtyDateFrom);
  }

  var yearFrom = dateFrom.getFullYear();
  if (dateFrom.getMonth() >= 2) {
    yearFrom += 1;
  }

  var yearTo = dateTo.getFullYear();
  if (dateTo.getMonth() < 3) {
    yearTo -= 1;
  }

  var leapYears = 0;
  for (var i = yearFrom; i < yearTo; i++) {
    if(isLeapYear(i)) {
      leapYears += 1;
    }
  }

  return leapYears;
};

var isLeapYear = function(year) {
  return new Date(year, 1, 29).getMonth() == 1;
};

var locale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than %{count} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than %{count} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '%{count} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about %{count} hours'
  },
  xDays: {
    one: '1 day',
    other: '%{count} days'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about %{count} months'
  },
  xMonths: {
    one: '1 month',
    other: '%{count} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about %{count} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over %{count} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost %{count} years'
  }
};

var translate = function(token, count) {
  if (count == 1) {
    return locale[token].one;
  } else if (count > 1) {
    return locale[token].other.replace('%{count}', count);
  } else {
    return locale[token];
  }
};

module.exports = distanceOfTimeInWords;

