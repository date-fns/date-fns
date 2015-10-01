var endOfQuarter = require('../end_of_quarter')

suite('endOfQuarter', function() {
  benchmark('date-fns', function() {
    return endOfQuarter(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.endOf('quarter')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

