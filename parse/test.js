var assert = require('power-assert')
var parse = require('./')

describe('parse', function() {
  describe('year', function() {
    it('parses YYYY', function() {
      var result = parse('2014')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
    })
  })

  describe('month', function() {
    it('parses YYYY-MM', function() {
      var result = parse('2014-02')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
    })
  })

  describe('week', function() {
    it('parses YYYY-Www', function() {
      var result = parse('2014-W02')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 6))
    })

    it('parses YYYYWww', function() {
      var result = parse('2014W02')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 6))
    })
  })

  describe('calendar date', function() {
    it('parses YYYY-MM-DD', function() {
      var result = parse('2014-02-11')
      assert.deepEqual(result, new Date(2014, 1, /* Feb */ 11))
    })

    it('parses YYYYMMDD', function() {
      var result = parse('20140211')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11))
    })
  })

  describe('week date', function() {
    it('parses YYYY-Www-D', function() {
      var result = parse('2014-W02-7')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 12))
    })

    it('parses YYYYWwwD', function() {
      var result = parse('2014W027')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 12))
    })
  })

  describe('ordinal date', function() {
    it('parses YYYY-DDD', function() {
      var result = parse('2014-026')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 26))
    })

    it('parses YYYYDDD', function() {
      var result = parse('2014026')
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 26))
    })
  })

  describe('date and time combined', function() {
    it('parses YYYY-MM-DDThh:mm', function() {
      var result = parse('2014-02-11T11:30')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
    })

    it('parses YYYY-MM-DDThhmm', function() {
      var result = parse('2014-02-11T1130')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
    })

    it('parses 24:00 as midnight', function() {
      var result = parse('2014-02-11T2400')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 0, 0))
    })
  })

  describe('extended year representation', function() {
    it('correctly parses years from 1 AD to 99 AD', function() {
      var result = parse('0095-07-02')
      var date = new Date(0, 6 /* Jul */, 2)
      date.setFullYear(95)
      assert.deepEqual(result, date)
    })

    it('parses years more than 9999 AD', function() {
      var result = parse('+12345-07-02')
      assert.deepEqual(result, new Date(12345, 6 /* Jul */, 2))
    })

    it ('parses year 1 BC', function() {
      var result = parse('0000-07-02')
      var date = new Date(0, 6 /* Jul */, 2)
      date.setFullYear(0)
      assert.deepEqual(result, date)
    })

    it ('parses years less than 1 BC', function() {
      var result = parse('-0001-07-02')
      var date = new Date(0, 6 /* Jul */, 2)
      date.setFullYear(-1)
      assert.deepEqual(result, date)
    })
  })

  describe('float time', function() {
    it('parses float hours', function() {
      var result = parse('2014-02-11T11.5')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
    })

    it('parses float minutes', function() {
      var result = parse('2014-02-11T11:30.5')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30, 30))
    })

    it('parses float seconds', function() {
      var result = parse('2014-02-11T11:30:30.768')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30, 30, 768))
    })

    it('parses , as decimal mark', function() {
      var result = parse('2014-02-11T11,5')
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
    })
  })

  describe('time zone', function() {
    context('when date and time are specified', function() {
      it('parses Z', function() {
        var result = parse('2014-10-25T06:46:20Z')
        assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
      })

      it('parses ±hh:mm', function() {
        var result = parse('2014-10-25T13:46:20+07:00')
        assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
      })

      it('parses ±hhmm', function() {
        var result = parse('2014-10-25T03:46:20-0300')
        assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
      })

      it('parses ±hh', function() {
        var result = parse('2014-10-25T13:46:20+07')
        assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
      })
    })
  })

  describe('failure', function() {
    it('fallback to `new Date` if string is not an ISO formatted date', function() {
      var result = parse(new Date(2014, 8 /* Sep */, 1, 11).toString())
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11))
    })
  })
})

