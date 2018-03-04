// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import parse from '.'

describe('parse', function () {
  var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  it('escapes characters between the single quote characters', function () {
    var result = parse('2018 hello world July 2nd', "yyyy 'hello world' MMMM do", baseDate)
    assert.deepEqual(result, new Date(2018, 6 /* Jul */, 2))
  })

  it('two single quote characters are transformed into a "real" single quote', function () {
    var result = parse("'5 o'clock'", "''h 'o''clock'''", baseDate)
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
  })

  describe('era', function () {
    it('abbreviated', function () {
      var result = parse('10000 BC', 'yyyyy G', baseDate)
      assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
    })

    it('wide', function () {
      var result = parse('2018 Anno Domini', 'yyyy GGGG', baseDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('narrow', function () {
      var result = parse('44 B', 'y GGGGG', baseDate)
      assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
    })

    it('with week-numbering year', function () {
      var result = parse('44 B', 'Y GGGGG', baseDate)
      assert.deepEqual(result, new Date(-44, 11 /* Dec */, 30))
    })
  })

  describe('calendar year', function () {
    it('numeric', function () {
      var result = parse('2017', 'y', baseDate)
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    it('ordinal', function () {
      var result = parse('2017th', 'yo', baseDate)
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = parse('02', 'yy', baseDate)
        assert.deepEqual(result, new Date(2002, 0 /* Jan */, 1))
      })

      it('gets the 100 year range from `baseDate`', function () {
        var result = parse('02', 'yy', new Date(1860, 6 /* Jul */, 2))
        assert.deepEqual(result, new Date(1902, 0 /* Jan */, 1))
      })
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'yyy', baseDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function () {
      var result = parse('0044', 'yyyy', baseDate)
      var expectedResult = new Date(44, 0 /* Jan */, 1)
      expectedResult.setFullYear(44)
      assert.deepEqual(result, expectedResult)
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'yyyyyy', baseDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })
  })

  describe('Local week-numbering year', function () {
    it('numeric', function () {
      var result = parse('2002', 'Y', baseDate)
      assert.deepEqual(result, new Date(2001, 11 /* Dec */, 30))
    })

    it('ordinal', function () {
      var result = parse('12345th', 'Yo', baseDate)
      assert.deepEqual(result, new Date(12344, 11 /* Dec */, 31))
    })

    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = parse('02', 'YY', baseDate)
        assert.deepEqual(result, new Date(2001, 11 /* Dec */, 30))
      })

      it('gets the 100 year range from `baseDate`', function () {
        var result = parse('02', 'YY', new Date(1860, 6 /* Jul */, 2))
        assert.deepEqual(result, new Date(1901, 11 /* Dec */, 29))
      })
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'YYY', baseDate)
      assert.deepEqual(result, new Date(122, 11 /* Dec */, 27))
    })

    it('four-digit zero-padding', function () {
      var result = parse('2018', 'YYYY', baseDate)
      assert.deepEqual(result, new Date(2017, 11 /* Dec */, 31))
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'YYYYYY', baseDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(0, 11 /* Dec */, 31)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = parse('2018', 'Y', baseDate, {weekStartsOn: 1 /* Mon */, firstWeekContainsDate: 4})
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })
  })

  describe('ISO week-numbering year', function () {
    it('numeric', function () {
      var result = parse('-1234', 'R', baseDate)
      assert.deepEqual(result, new Date(-1234, 0 /* Jan */, 3))
    })

    it('two-digit zero-padding', function () {
      var result = parse('-02', 'RR', baseDate)
      assert.deepEqual(result, new Date(-3, 11 /* Dec */, 29))
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'RRR', baseDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 4))
    })

    it('four-digit zero-padding', function () {
      var result = parse('2018', 'RRRR', baseDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'RRRRRR', baseDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })
  })

  describe('extended year', function () {
    it('numeric', function () {
      var result = parse('-1234', 'u', baseDate)
      assert.deepEqual(result, new Date(-1234, 0 /* Jan */, 1))
    })

    it('two-digit zero-padding', function () {
      var result = parse('-02', 'uu', baseDate)
      assert.deepEqual(result, new Date(-2, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'uuu', baseDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function () {
      var result = parse('2018', 'uuuu', baseDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'uuuuuu', baseDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })
  })

  describe('quarter (formatting)', function () {
    it('numeric', function () {
      var result = parse('1', 'Q', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('ordinal', function () {
      var result = parse('1st', 'Qo', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('zero-padding', function () {
      var result = parse('02', 'QQ', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Q3', 'QQQ', baseDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
    })

    it('wide', function () {
      var result = parse('4st quarter', 'QQQQ', baseDate)
      assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
    })

    it('narrow', function () {
      var result = parse('1', 'QQQQQ', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })
  })

  describe('quarter (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('1', 'q', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('ordinal', function () {
      var result = parse('1th', 'qo', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('zero-padding', function () {
      var result = parse('02', 'qq', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Q3', 'qqq', baseDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
    })

    it('wide', function () {
      var result = parse('4th quarter', 'qqqq', baseDate)
      assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
    })

    it('narrow', function () {
      var result = parse('1', 'qqqqq', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })
  })

  describe('month (formatting)', function () {
    it('numeric', function () {
      var result = parse('6', 'M', baseDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('ordinal', function () {
      var result = parse('6th', 'Mo', baseDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'MM', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Nov', 'MMM', baseDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    })

    it('wide', function () {
      var result = parse('February', 'MMMM', baseDate)
      assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    })

    it('narrow', function () {
      var result = parse('J', 'MMMMM', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })
  })

  describe('month (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('6', 'L', baseDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('ordinal', function () {
      var result = parse('6th', 'Lo', baseDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'LL', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Nov', 'LLL', baseDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    })

    it('wide', function () {
      var result = parse('February', 'LLLL', baseDate)
      assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    })

    it('narrow', function () {
      var result = parse('J', 'LLLLL', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })
  })

  describe('local week of year', function () {
    it('numeric', function () {
      var result = parse('49', 'w', baseDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('ordinal', function () {
      var result = parse('49th', 'wo', baseDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('zero-padding', function () {
      var result = parse('01', 'ww', baseDate)
      assert.deepEqual(result, new Date(1985, 11 /* Dec */, 29))
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = parse('49', 'w', baseDate, {weekStartsOn: 1 /* Mon */, firstWeekContainsDate: 4})
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })
  })

  describe('ISO week of year', function () {
    it('numeric', function () {
      var result = parse('49', 'I', baseDate)
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('ordinal', function () {
      var result = parse('49th', 'Io', baseDate)
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'II', baseDate)
      assert.deepEqual(result, new Date(1985, 11 /* Dec */, 30))
    })
  })

  describe('day of month', function () {
    it('numeric', function () {
      var result = parse('28', 'd', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal', function () {
      var result = parse('28th', 'do', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('zero-padding', function () {
      var result = parse('01', 'dd', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })
  })

  describe('day of year', function () {
    it('numeric', function () {
      var result = parse('200', 'D', baseDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    it('ordinal', function () {
      var result = parse('200th', 'Do', baseDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    it('two-digit zero-padding', function () {
      var result = parse('01', 'DD', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function () {
      var result = parse('001', 'DDD', baseDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function () {
      var result = parse('000200', 'DDDDDD', baseDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })
  })

  describe('day of week (formatting)', function () {
    it('abbreviated', function () {
      var result = parse('Mon', 'E', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('wide', function () {
      var result = parse('Tuesday', 'EEEE', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('narrow', function () {
      var result = parse('W', 'EEEEE', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('short', function () {
      var result = parse('Th', 'EEEEEE', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = parse('Thursday', 'EEEE', baseDate, {weekStartsOn: /* Fri */ 5})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
    })
  })

  describe('ISO day of week (formatting)', function () {
    it('numeric', function () {
      var result = parse('1', 'i', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function () {
      var result = parse('1st', 'io', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function () {
      var result = parse('02', 'ii', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Wed', 'iii', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function () {
      var result = parse('Thursday', 'iiii', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function () {
      var result = parse('S', 'iiiii', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    it('short', function () {
      var result = parse('Fr', 'iiiiii', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })
  })

  describe('local day of week (formatting)', function () {
    it('numeric', function () {
      var result = parse('2', 'e', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function () {
      var result = parse('2nd', 'eo', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function () {
      var result = parse('03', 'ee', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Wed', 'eee', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function () {
      var result = parse('Thursday', 'eeee', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function () {
      var result = parse('S', 'eeeee', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function () {
      var result = parse('Fr', 'eeeeee', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = parse('7th', 'eo', baseDate, {weekStartsOn: /* Fri */ 5})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
    })
  })

  describe('local day of week (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('2', 'c', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function () {
      var result = parse('2nd', 'co', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function () {
      var result = parse('03', 'cc', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Wed', 'ccc', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function () {
      var result = parse('Thursday', 'cccc', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function () {
      var result = parse('S', 'ccccc', baseDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function () {
      var result = parse('Fr', 'cccccc', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = parse('7th', 'co', baseDate, {weekStartsOn: /* Fri */ 5})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
    })
  })

  describe('AM, PM', function () {
    it('abbreviated', function () {
      var result = parse('5 AM', 'h a', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
    })

    it('12 AM', function () {
      var result = parse('12 AM', 'h aa', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    it('12 PM', function () {
      var result = parse('12 PM', 'h aaa', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('wide', function () {
      var result = parse('5 p.m.', 'h aaaa', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    })

    it('narrow', function () {
      var result = parse('11 a', 'h aaaaa', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
    })
  })

  describe('AM, PM, noon, midnight', function () {
    it('abbreviated', function () {
      var result = parse('noon', 'b', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('wide', function () {
      var result = parse('midnight', 'bbbb', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    it('narrow', function () {
      var result = parse('mi', 'bbbbb', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })
  })

  describe('flexible day period', function () {
    it('abbreviated', function () {
      var result = parse('2 at night', 'h B', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
    })

    it('wide', function () {
      var result = parse('12 in the afternoon', 'h BBBB', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('narrow', function () {
      var result = parse('5 in the evening', 'h BBBBB', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    })
  })

  describe('hour [1-12]', function () {
    it('numeric', function () {
      var result = parse('1', 'h', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('ordinal', function () {
      var result = parse('1st', 'ho', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'hh', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })
  })

  describe('hour [0-23]', function () {
    it('numeric', function () {
      var result = parse('12', 'H', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('ordinal', function () {
      var result = parse('12th', 'Ho', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('zero-padding', function () {
      var result = parse('00', 'HH', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })
  })

  describe('hour [0-11]', function () {
    it('numeric', function () {
      var result = parse('1', 'K', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('ordinal', function () {
      var result = parse('1st', 'Ko', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('zero-padding', function () {
      var result = parse('1', 'KK', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })
  })

  describe('hour [1-24]', function () {
    it('numeric', function () {
      var result = parse('12', 'k', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('ordinal', function () {
      var result = parse('12th', 'ko', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('zero-padding', function () {
      var result = parse('24', 'kk', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })
  })

  describe('minute', function () {
    it('numeric', function () {
      var result = parse('25', 'm', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25))
    })

    it('ordinal', function () {
      var result = parse('25th', 'mo', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25))
    })

    it('zero-padding', function () {
      var result = parse('05', 'mm', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 5))
    })
  })

  describe('second', function () {
    it('numeric', function () {
      var result = parse('25', 's', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 25))
    })

    it('ordinal', function () {
      var result = parse('25th', 'so', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 25))
    })

    it('zero-padding', function () {
      var result = parse('05', 'ss', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 5))
    })
  })

  describe('fraction of second', function () {
    it('1/10 of second', function () {
      var result = parse('1', 'S', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 100))
    })

    it('1/100 of second', function () {
      var result = parse('12', 'SS', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 120))
    })

    it('millisecond', function () {
      var result = parse('123', 'SSS', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 123))
    })

    it('specified amount of digits', function () {
      var result = parse('567890', 'SSSSSS', baseDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 567))
    })
  })

  describe('timezone (ISO-8601 w/ Z)', function () {
    describe('X', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function () {
        var result = parse('2016-11-25T16:38:38.123+05', "yyyy-MM-dd'T'HH:mm:ss.SSSX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('XX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXXX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+053045', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('XXXXX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+05:30:45', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })
  })

  describe('timezone (ISO-8601 w/o Z)', function () {
    describe('x', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function () {
        var result = parse('2016-11-25T16:38:38.123+05', "yyyy-MM-dd'T'HH:mm:ss.SSSx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('xx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxxx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+053045', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('xxxxx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+05:30:45', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", baseDate)
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })
  })

  describe('seconds timestamp', function () {
    it('numeric', function () {
      var result = parse('512969520', 't', baseDate)
      assert.deepEqual(result, new Date(512969520000))
    })

    it('specified amount of digits', function () {
      var result = parse('00000000000512969520', 'tttttttttttttttttttt', baseDate)
      assert.deepEqual(result, new Date(512969520000))
    })
  })

  describe('milliseconds timestamp', function () {
    it('numeric', function () {
      var result = parse('512969520900', 'T', baseDate)
      assert.deepEqual(result, new Date(512969520900))
    })

    it('specified amount of digits', function () {
      var result = parse('00000000512969520900', 'TTTTTTTTTTTTTTTTTTTT', baseDate)
      assert.deepEqual(result, new Date(512969520900))
    })
  })

  describe('common formats', function () {
    it('ISO-8601', function () {
      var result = parse('20161105T040404', "yyyyMMdd'T'HHmmss", baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('ISO week-numbering date', function () {
      var result = parse('2016W474T153005', "RRRR'W'IIi'T'HHmmss", baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0))
    })

    it('ISO day of year date', function () {
      var result = parse('2010123T235959', "yyyyDDD'T'HHmmss", baseDate)
      assert.deepEqual(result, new Date(2010, 4 /* May */, 3, 23, 59, 59, 0))
    })

    it('Date.prototype.toString()', function () {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600'
      var formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx"
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('Date.prototype.toISOString()', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('middle-endian', function () {
      var result = parse('5 a.m. 07/02/2016', 'h aaaa MM/dd/yyyy', baseDate)
      assert.deepEqual(result, new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0))
    })

    it('little-endian', function () {
      var result = parse('02.07.1995', 'dd.MM.yyyy', baseDate)
      assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0))
    })
  })

  describe('priority', function () {
    it('units of lower priority don\'t overwrite values of higher priority', function () {
      var dateString = '+06:00 123 15 30 05 02 07 2014'
      var formatString = 'xxx SSS ss mm HH dd MM yyyy'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date('2014-07-02T05:30:15.123+06:00'))
    })

    it('units of equal priority overwrite each other in order of appearance', function () {
      var dateString = '25 1950 75 2000 January Feb 03 4 1 123 12'
      var formatString = 'RR RRRR yy yyyy MMMM MMM MM M d DDD dd'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(2000, 3 /* Apr */, 12))
    })

    it('timestamp overwrites everything', function () {
      var dateString = '512969520900 512969520 2014-07-02T05:30:15.123+06:00'
      var formatString = "T t yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(512969520000))
    })
  })

  describe('implicit conversion of arguments', function () {
    it('`dateString`', function () {
      // eslint-disable-next-line no-new-wrappers
      var dateString = new String('20161105T040404')
      // $ExpectedMistake
      var result = parse(dateString, "yyyyMMdd'T'HHmmss", baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('`formatString`', function () {
      // eslint-disable-next-line no-new-wrappers
      var formatString = new String("yyyyMMdd'T'HHmmss")
      // $ExpectedMistake
      var result = parse('20161105T040404', formatString, baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('`options.weekStartsOn`', function () {
      // $ExpectedMistake
      var result = parse('2018', 'Y', baseDate, {weekStartsOn: '1' /* Mon */, firstWeekContainsDate: 4})
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('`options.firstWeekContainsDate`', function () {
      // $ExpectedMistake
      var result = parse('2018', 'Y', baseDate, {weekStartsOn: 1 /* Mon */, firstWeekContainsDate: '4'})
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })
  })

  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      var customLocale = {
        match: {
          era: function () {
            return {
              value: 0,
              rest: 'it works!'
            }
          }
        }
      }
      // $ExpectedMistake
      var result = parse("2018 apparently 'it works!'", 'y G', baseDate, {locale: customLocale})
      assert.deepEqual(result, new Date(-2017, 0 /* Jan */, 1))
    })

    it('throws `RangeError` if `options.locale` does not contain `match` property', function () {
      // $ExpectedMistake
      var block = parse.bind(null, '2016-11-25 04 AM', 'yyyy-MM-dd hh a', baseDate, {locale: {}})
      assert.throws(block, RangeError)
    })
  })

  it('accepts a string as `baseDate`', function () {
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    var result = parse(dateString, formatString, baseDate.toISOString())
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 18))
  })

  it('accepts a timestamp as `baseDate`', function () {
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    var result = parse(dateString, formatString, baseDate.getTime())
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 18))
  })

  it('does not mutate `baseDate`', function () {
    var baseDateClone1 = new Date(baseDate.getTime())
    var baseDateClone2 = new Date(baseDate.getTime())
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    parse(dateString, formatString, baseDateClone1)
    assert.deepEqual(baseDateClone1, baseDateClone2)
  })

  describe('failure', function () {
    it('returns `baseDate` if `dateString` and `formatString` are empty strings', function () {
      var dateString = ''
      var formatString = ''
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, baseDate)
    })

    it('returns `baseDate` if no tokens in `formatString` are provided', function () {
      var dateString = 'not a token'
      var formatString = "'not a token'"
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, baseDate)
    })

    it('returns `Invalid Date`  if `formatString` doesn\'t match `dateString`', function () {
      var dateString = '2017-01-01'
      var formatString = 'yyyy/MM/dd'
      var result = parse(dateString, formatString, baseDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date`  if `formatString` tokens failed to parse a value', function () {
      var dateString = '2017-01-01'
      var formatString = 'MMMM do yyyy'
      var result = parse(dateString, formatString, baseDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `formatString` is empty string but `dateString` is not', function () {
      var dateString = '2017-01-01'
      var formatString = ''
      var result = parse(dateString, formatString, baseDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `baseDate` is `Invalid Date`', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, new Date(NaN))
      assert(result instanceof Date && isNaN(result))
    })

    it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, baseDate, {weekStartsOn: NaN})
      assert.throws(block, RangeError)
    })

    it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, baseDate, {firstWeekContainsDate: NaN})
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = parse.bind(null, '16', 'yy', baseDate, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 3 arguments', function () {
    assert.throws(parse.bind(null), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1, 2), TypeError)
  })
})
