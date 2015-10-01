var subYears = require('../sub_years')

suite('subYears', function() {
  benchmark('date-fns', function() {
    return subYears(this.date, 5)
  })

  benchmark('Moment.js', function() {
    return this.moment.subtract(5, 'years')
  })
}, {
  setup: function() {
    this.date = new Date()
    this.moment = moment()
  }
})

