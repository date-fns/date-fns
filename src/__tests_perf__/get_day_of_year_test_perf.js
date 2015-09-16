var getDayOfYear = require('../get_day_of_year')

suite('getDayOfYear', function() {
  benchmark('date-fns', function() {
    return getDayOfYear(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.dayOfYear()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

