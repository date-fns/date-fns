var setQuarter = require('../set_quarter')

suite('setQuarter', function() {
  benchmark('date-fns', function() {
    return setQuarter(this.date, 3)
  })

  benchmark('Moment.js', function() {
    return this.moment.quarter(3)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

