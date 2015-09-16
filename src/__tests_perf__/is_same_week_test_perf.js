var isSameWeek = require('../is_same_week')

suite('isSameWeek', function() {
  benchmark('date-fns', function() {
    return isSameWeek(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function() {
    return this.momentA.isSame(this.momentB, 'week')
  })
}, {
  setup: function() {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})

