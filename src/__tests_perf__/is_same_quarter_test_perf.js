var isSameQuarter = require('../is_same_quarter')

suite('isSameQuarter', function() {
  benchmark('date-fns', function() {
    return isSameQuarter(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function() {
    return this.momentA.isSame(this.momentB, 'quarter')
  })
}, {
  setup: function() {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})

