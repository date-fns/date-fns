var formatters: any = {}

var genetiveMonths = [
  'siječnja',
  'veljače',
  'ožujka',
  'travnja',
  'svibnja',
  'lipnja',
  'srpnja',
  'kolovoza',
  'rujna',
  'listopada',
  'studenog',
  'prosinca'
]

// Generate formatters like 'D MMMM',
// where month is in the genitive case: january, february, ..., december
var monthsGenitiveFormatters = ['D', 'Do', 'DD']
monthsGenitiveFormatters.forEach(function(formatterToken: any) {
  formatters[formatterToken + ' MMMM'] = function(date: any, options: any) {
    var commonFormatters = options.formatters
    var formatter = commonFormatters[formatterToken]
    return formatter(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  }
})

export default formatters
