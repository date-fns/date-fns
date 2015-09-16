var endOfWeek = require('../end_of_week')

suite('endOfWeek', function() {
  benchmark('date-fns', function() {
    return endOfWeek(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.endOf('week')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

