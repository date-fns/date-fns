var setDate = require('../set_date')

suite('setDate', function() {
  benchmark('date-fns', function() {
    return setDate(this.date, 15)
  })

  benchmark('Moment.js', function() {
    return this.moment.date(15)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

