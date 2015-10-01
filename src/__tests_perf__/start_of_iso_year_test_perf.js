var startOfISOYear = require('../start_of_iso_year')

suite('startOfISOYear', function() {
  benchmark('date-fns', function() {
    return startOfISOYear(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.startOf('isoWeekYear')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

