var startOfYear = require('../start_of_year')

suite('startOfYear', function() {
  benchmark('date-fns', function() {
    return startOfYear(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.startOf('year')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

