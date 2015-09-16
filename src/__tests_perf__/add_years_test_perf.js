var addYears = require('../add_years')

suite('addYears', function() {
  benchmark('date-fns', function() {
    return addYears(this.date, 20)
  })

  benchmark('Moment.js', function() {
    return this.moment.add(20, 'years')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

