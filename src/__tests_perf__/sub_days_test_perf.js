var subDays = require('../sub_days')

suite('subDays', function() {
  benchmark('date-fns', function() {
    return subDays(this.date, 14)
  })

  benchmark('Moment.js', function() {
    return this.moment.subtract(14, 'days')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

