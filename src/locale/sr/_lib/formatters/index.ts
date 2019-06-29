var formatters: any = {}

var genetiveMonths = [
  'januara',
  'februara',
  'marta',
  'aprila',
  'maja',
  'juna',
  'jula',
  'avgusta',
  'septembra',
  'oktobra',
  'novembra',
  'decembra'
]

// Generate formatters like 'D MMMM',
// where month is in the genitive case: января, февраля, ..., декабря
var monthsGenitiveFormatters = ['D', 'Do', 'DD']
monthsGenitiveFormatters.forEach(function(formatterToken: any) {
  formatters[formatterToken + ' MMMM'] = function(date: any, options: any) {
    var commonFormatters = options.formatters
    var formatter = commonFormatters[formatterToken]
    return formatter(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  }
})

export default formatters
