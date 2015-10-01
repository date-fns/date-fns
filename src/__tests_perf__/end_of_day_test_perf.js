var endOfDay = require('../end_of_day')

suite('endOfDay', function() {
  benchmark('date-fns', function() {
    return endOfDay(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.endOf('day')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

