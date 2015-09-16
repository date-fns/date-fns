var getSeconds = require('../get_seconds')

suite('getSeconds', function() {
  benchmark('date-fns', function() {
    return getSeconds(this.date)
  })

  benchmark('Moment.js', function() {
    return this.moment.seconds()
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

