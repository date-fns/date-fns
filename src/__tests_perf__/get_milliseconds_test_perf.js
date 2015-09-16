var getMilliseconds = require('../get_milliseconds')

suite('getMilliseconds', function() {
  benchmark('date-fns', function() {
    return getMilliseconds(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.milliseconds()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

