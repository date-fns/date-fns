var getMonth = require('../get_month')

suite('getMonth', function() {
  benchmark('date-fns', function() {
    return getMonth(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.month()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

