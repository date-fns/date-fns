const formatters = {}

const genetiveMonths = [
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
const monthsGenitiveFormatters = ['D', 'Do', 'DD']
monthsGenitiveFormatters.forEach(function(formatterToken) {
  formatters[formatterToken + ' MMMM'] = function(date, options) {
    const commonFormatters = options.formatters
    const formatter = commonFormatters[formatterToken]
    return formatter(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  }
})

export default formatters
