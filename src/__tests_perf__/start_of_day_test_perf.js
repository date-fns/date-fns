var startOfDay = require('../start_of_day')

suite('startOfDay', function() {
  benchmark('date-fns', function() {
    return startOfDay(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.startOf('day')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

