var isLeapYear = require('../is_leap_year')

suite('isLeapYear', function() {
  benchmark('date-fns', function() {
    return isLeapYear(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.isLeapYear()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

