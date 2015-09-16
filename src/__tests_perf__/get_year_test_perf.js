var getYear = require('../get_year')

suite('getYear', function() {
  benchmark('date-fns', function() {
    return getYear(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.year()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

