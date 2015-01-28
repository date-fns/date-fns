var distanceOfTimeInWords = require('./distance_of_time_in_words');

/**
 * Returns distance of time between given date and today in words
 * @param {date|string} dirtyDate
 * @param {boolean} includeSeconds
 * @returns {string}
 */
var timeAgoInWords = function(dirtyDate, includeSeconds) {
  return distanceOfTimeInWords(dirtyDate, Date.now(), includeSeconds);
};

module.exports = timeAgoInWords;

