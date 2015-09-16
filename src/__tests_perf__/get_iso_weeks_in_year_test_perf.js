var getISOWeeksInYear = require('../get_iso_weeks_in_year')

suite('getISOWeeksInYear', function() {
  benchmark('date-fns', function() {
    return getISOWeeksInYear(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.isoWeeksInYear()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

