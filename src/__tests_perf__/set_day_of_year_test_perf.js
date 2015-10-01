var setDayOfYear = require('../set_day_of_year')

suite('setDayOfYear', function() {
  benchmark('date-fns', function() {
    return setDayOfYear(this.date, 150)
  })

  benchmark('Moment.js', function() {
    return this.moment.dayOfYear(150)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

