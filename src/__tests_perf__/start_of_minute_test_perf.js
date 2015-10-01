var startOfMinute = require('../start_of_minute')

suite('startOfMinute', function() {
  benchmark('date-fns', function() {
    return startOfMinute(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.startOf('minute')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

