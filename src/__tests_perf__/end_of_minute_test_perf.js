var endOfMinute = require('../end_of_minute')

suite('endOfMinute', function() {
  benchmark('date-fns', function() {
    return endOfMinute(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.endOf('minute')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

