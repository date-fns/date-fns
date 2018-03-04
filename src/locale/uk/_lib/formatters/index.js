var formatters = {}

var genetiveMonths = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']

// Generate formatters like 'D MMMM',
// where month is in the genitive case: січня, лютого, ..., грудня
var monthsGenitiveFormatters = ['D', 'Do', 'DD']
monthsGenitiveFormatters.forEach(function (formatterToken) {
  formatters[formatterToken + ' MMMM'] = function (date, options) {
    var commonFormatters = options.formatters
    var formatter = commonFormatters[formatterToken]
    return formatter(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  }
})

export default formatters
