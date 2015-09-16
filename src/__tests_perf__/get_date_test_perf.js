var getDate = require('../get_date')

suite('getDate', function() {
  benchmark('date-fns', function() {
    return getDate(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.date()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

