var getMinutes = require('../get_minutes')

suite('getMinutes', function() {
  benchmark('date-fns', function() {
    return getMinutes(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.minutes()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

