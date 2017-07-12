var formatters = {}

var genetiveMonths = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

// Generate genitive variant of full months
var formatsWithGenitive = ['D', 'Do', 'DD']
formatsWithGenitive.forEach(function (formatterToken) {
  formatters[formatterToken + ' MMMM'] = function (date, options) {
    var commonFormatters = options.formatters
    var formatter = commonFormatters[formatterToken]
    return formatter(date, options) + ' ' + genetiveMonths[date.getUTCMonth()]
  }
})

export default formatters
