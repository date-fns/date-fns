var setMonth = require('../set_month')

suite('setMonth', function() {
  benchmark('date-fns', function() {
    return setMonth(this.date, 6)
  })

  benchmark('Moment.js', function() {
    return this.moment.month(6)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

