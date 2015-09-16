var getQuarter = require('../get_quarter')

suite('getQuarter', function() {
  benchmark('date-fns', function() {
    return getQuarter(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.quarter()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

