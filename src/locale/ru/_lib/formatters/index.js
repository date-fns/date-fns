var formatters = {}

var genetiveMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

// Generate formatters like 'D MMMM',
// where month is in the genitive case: января, февраля, ..., декабря
var monthsGenitiveFormatters = ['D', 'Do', 'DD']
monthsGenitiveFormatters.forEach(function (formatterToken) {
  formatters[formatterToken + ' MMMM'] = function (date, options) {
    var commonFormatters = options.formatters
    var formatter = commonFormatters[formatterToken]
    return formatter(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  }
})

export default formatters
