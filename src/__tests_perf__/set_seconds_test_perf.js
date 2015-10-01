var setSeconds = require('../set_seconds')

suite('setSeconds', function() {
  benchmark('date-fns', function() {
    return setSeconds(this.date, 15)
  })

  benchmark('Moment.js', function() {
    return this.moment.seconds(15)
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

