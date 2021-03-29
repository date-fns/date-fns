/* eslint-env mocha */

import assert from 'power-assert'
import parse from '.'

describe('parse', function () {
  var referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  it('escapes characters between the single quote characters', function () {
    var result = parse(
      '2018 hello world July 2nd',
      "yyyy 'hello world' MMMM do",
      referenceDate
    )
    assert.deepEqual(result, new Date(2018, 6 /* Jul */, 2))
  })

  it('two single quote characters are transformed into a "real" single quote', function () {
    var result = parse("'5 o'clock'", "''h 'o''clock'''", referenceDate)
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
  })

  it('accepts new line charactor', function () {
    var result = parse(
      '2014-04-04\n05:00:00',
      "yyyy-MM-dd'\n'HH:mm:ss",
      referenceDate
    )
    assert.deepEqual(result, new Date(2014, 3 /* Apr */, 4, 5))
  })

  describe('era', function () {
    it('abbreviated', function () {
      var result = parse('10000 BC', 'yyyyy G', referenceDate)
      assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
    })

    it('wide', function () {
      var result = parse('2018 Anno Domini', 'yyyy GGGG', referenceDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('narrow', function () {
      var result = parse('44 B', 'y GGGGG', referenceDate)
      assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
    })

    it('with week-numbering year', function () {
      var result = parse('44 B', 'Y GGGGG', referenceDate)
      assert.deepEqual(result, new Date(-44, 11 /* Dec */, 30))
    })

    it('parses stand-alone BC', function () {
      var result = parse('BC', 'G', referenceDate)
      const expectedResult = new Date(0)
      expectedResult.setFullYear(0, 0 /* Jan */, 1)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    it('parses stand-alone AD', function () {
      var result = parse('AD', 'G', referenceDate)
      const expectedResult = new Date(0)
      expectedResult.setFullYear(1, 0 /* Jan */, 1)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'BC'],
        ['R', '2019'],
        ['u', '2019'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when G is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 420`,
            `${token} G`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`G\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('calendar year', function () {
    it('numeric', function () {
      var result = parse('2017', 'y', referenceDate)
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    it('ordinal', function () {
      var result = parse('2017th', 'yo', referenceDate)
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = parse('02', 'yy', referenceDate)
        assert.deepEqual(result, new Date(2002, 0 /* Jan */, 1))
      })

      it('gets the 100 year range from `referenceDate`', function () {
        var result = parse('02', 'yy', new Date(1860, 6 /* Jul */, 2))
        assert.deepEqual(result, new Date(1902, 0 /* Jan */, 1))
      })
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'yyy', referenceDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function () {
      var result = parse('0044', 'yyyy', referenceDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(44, 0 /* Jan */, 1)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'yyyyyy', referenceDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(1, 0 /* Jan */, 1)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['Y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['w', '1'],
        ['I', '1'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when y is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} y`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`y\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local week-numbering year', function () {
    it('numeric', function () {
      var result = parse('2002', 'Y', referenceDate)
      assert.deepEqual(result, new Date(2001, 11 /* Dec */, 30))
    })

    it('ordinal', function () {
      var result = parse('12345th', 'Yo', referenceDate)
      assert.deepEqual(result, new Date(12344, 11 /* Dec */, 31))
    })

    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = parse('02', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true,
        })
        assert.deepEqual(result, new Date(2001, 11 /* Dec */, 30))
      })

      it('gets the 100 year range from `referenceDate`', function () {
        var result = parse('02', 'YY', new Date(1860, 6 /* Jul */, 2), {
          useAdditionalWeekYearTokens: true,
        })
        assert.deepEqual(result, new Date(1901, 11 /* Dec */, 29))
      })
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'YYY', referenceDate)
      assert.deepEqual(result, new Date(122, 11 /* Dec */, 27))
    })

    it('four-digit zero-padding', function () {
      var result = parse('2018', 'YYYY', referenceDate, {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, new Date(2017, 11 /* Dec */, 31))
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'YYYYYY', referenceDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(0, 11 /* Dec */, 31)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = parse('2018', 'Y', referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4,
      })
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['Y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when Y is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} Y`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`Y\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('ISO week-numbering year', function () {
    it('numeric', function () {
      var result = parse('-1234', 'R', referenceDate)
      assert.deepEqual(result, new Date(-1234, 0 /* Jan */, 3))
    })

    it('two-digit zero-padding', function () {
      var result = parse('-02', 'RR', referenceDate)
      assert.deepEqual(result, new Date(-3, 11 /* Dec */, 29))
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'RRR', referenceDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 4))
    })

    it('four-digit zero-padding', function () {
      var result = parse('2018', 'RRRR', referenceDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'RRRRRR', referenceDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(1, 0 /* Jan */, 1)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'AD'],
        ['y', '2019'],
        ['Y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when R is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} R`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`R\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('extended year', function () {
    it('numeric', function () {
      var result = parse('-1234', 'u', referenceDate)
      assert.deepEqual(result, new Date(-1234, 0 /* Jan */, 1))
    })

    it('two-digit zero-padding', function () {
      var result = parse('-02', 'uu', referenceDate)
      assert.deepEqual(result, new Date(-2, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function () {
      var result = parse('123', 'uuu', referenceDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function () {
      var result = parse('2018', 'uuuu', referenceDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function () {
      var result = parse('000001', 'uuuuuu', referenceDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(1, 0 /* Jan */, 1)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'AD'],
        ['y', '2019'],
        ['Y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['w', '1'],
        ['I', '1'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when u is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} u`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`u\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('quarter with following year', function () {
    it('first quarter', function () {
      var result = parse('Q1/2020', 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, new Date(2020, 0 /* Jan */, 1))
    })

    it('second quarter', function () {
      var result = parse('Q2/2020', 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, new Date(2020, 3 /* Apr */, 1))
    })

    it('third quarter', function () {
      var result = parse('Q3/2020', 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, new Date(2020, 6 /* Jul */, 1))
    })

    it('fourth quarter', function () {
      var result = parse('Q4/2020', 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, new Date(2020, 9 /* Oct */, 1))
    })
  })

  describe('quarter (formatting)', function () {
    it('numeric', function () {
      var result = parse('1', 'Q', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('ordinal', function () {
      var result = parse('1st', 'Qo', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('zero-padding', function () {
      var result = parse('02', 'QQ', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Q3', 'QQQ', referenceDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
    })

    it('wide', function () {
      var result = parse('4st quarter', 'QQQQ', referenceDate)
      assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
    })

    it('narrow', function () {
      var result = parse('1', 'QQQQQ', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when Q is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} Q`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`Q\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('quarter (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('1', 'q', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('ordinal', function () {
      var result = parse('1th', 'qo', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('zero-padding', function () {
      var result = parse('02', 'qq', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Q3', 'qqq', referenceDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
    })

    it('wide', function () {
      var result = parse('4th quarter', 'qqqq', referenceDate)
      assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
    })

    it('narrow', function () {
      var result = parse('1', 'qqqqq', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when q is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} q`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`q\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('month (formatting)', function () {
    it('numeric', function () {
      var result = parse('6', 'M', referenceDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('ordinal', function () {
      var result = parse('6th', 'Mo', referenceDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'MM', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Nov', 'MMM', referenceDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    })

    it('wide', function () {
      var result = parse('February', 'MMMM', referenceDate)
      assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    })

    it('narrow', function () {
      var result = parse('J', 'MMMMM', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when M is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} M`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`M\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('month (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('6', 'L', referenceDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('ordinal', function () {
      var result = parse('6th', 'Lo', referenceDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'LL', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Nov', 'LLL', referenceDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    })

    it('wide', function () {
      var result = parse('February', 'LLLL', referenceDate)
      assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    })

    it('narrow', function () {
      var result = parse('J', 'LLLLL', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when L is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} L`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`L\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local week of year', function () {
    it('numeric', function () {
      var result = parse('49', 'w', referenceDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('ordinal', function () {
      var result = parse('49th', 'wo', referenceDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('zero-padding', function () {
      var result = parse('01', 'ww', referenceDate)
      assert.deepEqual(result, new Date(1985, 11 /* Dec */, 29))
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = parse('49', 'w', referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4,
      })
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when w is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} w`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`w\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('ISO week of year', function () {
    it('numeric', function () {
      var result = parse('49', 'I', referenceDate)
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('ordinal', function () {
      var result = parse('49th', 'Io', referenceDate)
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'II', referenceDate)
      assert.deepEqual(result, new Date(1985, 11 /* Dec */, 30))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['Y', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when I is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} I`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`I\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('day of month', function () {
    it('numeric', function () {
      var result = parse('28', 'd', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal', function () {
      var result = parse('28th', 'do', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('zero-padding', function () {
      var result = parse('01', 'dd', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when d is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} d`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`d\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('day of year', function () {
    it('numeric', function () {
      var result = parse('200', 'D', referenceDate, {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    it('ordinal', function () {
      var result = parse('200th', 'Do', referenceDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    it('two-digit zero-padding', function () {
      var result = parse('01', 'DD', referenceDate, {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function () {
      var result = parse('001', 'DDD', referenceDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function () {
      var result = parse('000200', 'DDDDDD', referenceDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1'],
        ['E', 'Mon'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, _options]) => {
        it(`throws an error when D is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} D`,
            referenceDate,
            { useAdditionalDayOfYearTokens: true }
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`D\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('day of week (formatting)', function () {
    it('abbreviated', function () {
      var result = parse('Mon', 'E', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('wide', function () {
      var result = parse('Tuesday', 'EEEE', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('narrow', function () {
      var result = parse('W', 'EEEEE', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('short', function () {
      var result = parse('Th', 'EEEEEE', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = parse('Thursday', 'EEEE', referenceDate, {
        weekStartsOn: /* Fri */ 5,
      })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
    })

    describe('validation', () => {
      ;[
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', 'Mon'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when E is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} Mon`,
            `${token} E`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`E\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('ISO day of week (formatting)', function () {
    it('numeric', function () {
      var result = parse('1', 'i', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function () {
      var result = parse('1st', 'io', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function () {
      var result = parse('02', 'ii', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Wed', 'iii', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function () {
      var result = parse('Thursday', 'iiii', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function () {
      var result = parse('S', 'iiiii', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    it('short', function () {
      var result = parse('Fr', 'iiiiii', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['Y', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', 'Mon'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when i is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} i`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`i\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local day of week (formatting)', function () {
    it('numeric', function () {
      var result = parse('2', 'e', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function () {
      var result = parse('2nd', 'eo', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function () {
      var result = parse('03', 'ee', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Wed', 'eee', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function () {
      var result = parse('Thursday', 'eeee', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function () {
      var result = parse('S', 'eeeee', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function () {
      var result = parse('Fr', 'eeeeee', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = parse('7th', 'eo', referenceDate, {
        weekStartsOn: /* Fri */ 5,
      })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', 'Mon'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when e is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} e`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`e\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local day of week (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('2', 'c', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function () {
      var result = parse('2nd', 'co', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function () {
      var result = parse('03', 'cc', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function () {
      var result = parse('Wed', 'ccc', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function () {
      var result = parse('Thursday', 'cccc', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function () {
      var result = parse('S', 'ccccc', referenceDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function () {
      var result = parse('Fr', 'cccccc', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = parse('7th', 'co', referenceDate, {
        weekStartsOn: /* Fri */ 5,
      })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', 'Mon'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example, options]) => {
        it(`throws an error when c is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} c`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`c\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('AM, PM', function () {
    it('abbreviated', function () {
      var result = parse('5 AM', 'h a', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
    })

    it('12 AM', function () {
      var result = parse('12 AM', 'h aa', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    it('12 PM', function () {
      var result = parse('12 PM', 'h aaa', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('wide', function () {
      var result = parse('5 p.m.', 'h aaaa', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    })

    it('narrow', function () {
      var result = parse('11 a', 'h aaaaa', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['B', 'in the morning'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when a is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} AM`,
            `${token} a`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`a\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('AM, PM, noon, midnight', function () {
    it('abbreviated', function () {
      var result = parse('noon', 'b', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('wide', function () {
      var result = parse('midnight', 'bbbb', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    it('narrow', function () {
      var result = parse('mi', 'bbbbb', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['B', 'in the morning'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when b is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} AM`,
            `${token} b`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`b\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('flexible day period', function () {
    it('abbreviated', function () {
      var result = parse('2 at night', 'h B', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
    })

    it('wide', function () {
      var result = parse('12 in the afternoon', 'h BBBB', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('narrow', function () {
      var result = parse('5 in the evening', 'h BBBBB', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['B', 'in the morning'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when B is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} in the morning`,
            `${token} B`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`B\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [1-12]', function () {
    it('numeric', function () {
      var result = parse('1', 'h', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('ordinal', function () {
      var result = parse('1st', 'ho', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('zero-padding', function () {
      var result = parse('01', 'hh', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    describe('validation', () => {
      ;[
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when h is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} h`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`h\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [0-23]', function () {
    it('numeric', function () {
      var result = parse('12', 'H', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('ordinal', function () {
      var result = parse('12th', 'Ho', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('zero-padding', function () {
      var result = parse('00', 'HH', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when H is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} H`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`H\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [0-11]', function () {
    it('numeric', function () {
      var result = parse('1', 'K', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('ordinal', function () {
      var result = parse('1st', 'Ko', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('zero-padding', function () {
      var result = parse('1', 'KK', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when K is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} K`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`K\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [1-24]', function () {
    it('numeric', function () {
      var result = parse('12', 'k', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('ordinal', function () {
      var result = parse('12th', 'ko', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('zero-padding', function () {
      var result = parse('24', 'kk', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when k is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} k`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`k\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('minute', function () {
    it('numeric', function () {
      var result = parse('25', 'm', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25))
    })

    it('ordinal', function () {
      var result = parse('25th', 'mo', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25))
    })

    it('zero-padding', function () {
      var result = parse('05', 'mm', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 5))
    })

    describe('validation', () => {
      ;[
        ['m', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when m is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} m`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`m\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('second', function () {
    it('numeric', function () {
      var result = parse('25', 's', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 25))
    })

    it('ordinal', function () {
      var result = parse('25th', 'so', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 25))
    })

    it('zero-padding', function () {
      var result = parse('05', 'ss', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 5))
    })

    describe('validation', () => {
      ;[
        ['s', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when s is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} s`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`s\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('fraction of second', function () {
    it('1/10 of second', function () {
      var result = parse('1', 'S', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 100))
    })

    it('1/100 of second', function () {
      var result = parse('12', 'SS', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 120))
    })

    it('millisecond', function () {
      var result = parse('123', 'SSS', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 123))
    })

    it('specified amount of digits', function () {
      var result = parse('567890', 'SSSSSS', referenceDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 567))
    })

    describe('validation', () => {
      ;[
        ['S', '1'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when S is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} S`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`S\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('timezone (ISO-8601 w/ Z)', function () {
    describe('X', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+05',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('XX', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXX', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXXX', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+053045',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('XXXXX', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+05:30:45',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('validation', () => {
      ;[
        ['X', '-0530'],
        ['x', '-0530'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when X is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} -0530`,
            `${token} X`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`X\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('timezone (ISO-8601 w/o Z)', function () {
    describe('x', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+05',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('xx', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxx', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+00:00',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxxx', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+053045',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('xxxxx', function () {
      it('hours and minutes', function () {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+00:00',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function () {
        var result = parse(
          '2016-11-25T16:38:38.123+05:30:45',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('validation', () => {
      ;[
        ['X', '-0530'],
        ['x', '-0530'],
        ['t', '512969520'],
        ['T', '512969520900'],
      ].forEach(([token, example]) => {
        it(`throws an error when x is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} -0530`,
            `${token} x`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`x\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('seconds timestamp', function () {
    it('numeric', function () {
      var result = parse('512969520', 't', referenceDate)
      assert.deepEqual(result, new Date(512969520000))
    })

    it('specified amount of digits', function () {
      var result = parse(
        '00000000000512969520',
        'tttttttttttttttttttt',
        referenceDate
      )
      assert.deepEqual(result, new Date(512969520000))
    })

    it(`throws an error when it is used after any token`, () => {
      const block = parse.bind(null, `1 512969520`, `h t`, referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`t\` and any other token at the same time`
        )
      )
    })
  })

  describe('milliseconds timestamp', function () {
    it('numeric', function () {
      var result = parse('512969520900', 'T', referenceDate)
      assert.deepEqual(result, new Date(512969520900))
    })

    it('specified amount of digits', function () {
      var result = parse(
        '00000000512969520900',
        'TTTTTTTTTTTTTTTTTTTT',
        referenceDate
      )
      assert.deepEqual(result, new Date(512969520900))
    })

    it(`throws an error when it is used after any token`, () => {
      const block = parse.bind(null, `1 512969520900`, `h T`, referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`T\` and any other token at the same time`
        )
      )
    })
  })

  describe('common formats', function () {
    it('ISO-8601', function () {
      var result = parse('20161105T040404', "yyyyMMdd'T'HHmmss", referenceDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('ISO week-numbering date', function () {
      var result = parse(
        '2016W474T153005',
        "RRRR'W'IIi'T'HHmmss",
        referenceDate
      )
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0))
    })

    it('ISO day of year date', function () {
      var result = parse('2010123T235959', "yyyyDDD'T'HHmmss", referenceDate)
      assert.deepEqual(result, new Date(2010, 4 /* May */, 3, 23, 59, 59, 0))
    })

    it('Date.prototype.toString()', function () {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600'
      var formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx"
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('Date.prototype.toISOString()', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('middle-endian', function () {
      var result = parse(
        '5 a.m. 07/02/2016',
        'h aaaa MM/dd/yyyy',
        referenceDate
      )
      assert.deepEqual(result, new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0))
    })

    it('little-endian', function () {
      var result = parse('02.07.1995', 'dd.MM.yyyy', referenceDate)
      assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0))
    })
  })

  describe('priority', function () {
    it("units of lower priority don't overwrite values of higher priority", function () {
      var dateString = '+06:00 123 15 30 05 02 07 2014'
      var formatString = 'xxx SSS ss mm HH dd MM yyyy'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, new Date('2014-07-02T05:30:15.123+06:00'))
    })
  })

  describe('implicit conversion of arguments', function () {
    it('`dateString`', function () {
      // eslint-disable-next-line no-new-wrappers
      var dateString = new String('20161105T040404')
      // $ExpectedMistake
      var result = parse(dateString, "yyyyMMdd'T'HHmmss", referenceDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('`formatString`', function () {
      // eslint-disable-next-line no-new-wrappers
      var formatString = new String("yyyyMMdd'T'HHmmss")
      // $ExpectedMistake
      var result = parse('20161105T040404', formatString, referenceDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('`options.weekStartsOn`', function () {
      // $ExpectedMistake
      var result = parse('2018', 'Y', referenceDate, {
        weekStartsOn: '1' /* Mon */,
        firstWeekContainsDate: 4,
      })
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('`options.firstWeekContainsDate`', function () {
      // $ExpectedMistake
      var result = parse('2018', 'Y', referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: '4',
      })
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })
  })

  describe('with `options.strictValidation` = true', function () {
    describe('calendar year', function () {
      it('returns `Invalid Date` for year zero', function () {
        var result = parse('0', 'y', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('works correctly for two-digit year zero', function () {
        var result = parse('00', 'yy', referenceDate)
        assert.deepEqual(result, new Date(2000, 0 /* Jan */, 1))
      })
    })

    describe('local week-numbering year', function () {
      it('returns `Invalid Date` for year zero', function () {
        var result = parse('0', 'Y', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('works correctly for two-digit year zero', function () {
        var result = parse('00', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true,
        })
        assert.deepEqual(result, new Date(1999, 11 /* Dec */, 26))
      })
    })

    describe('quarter (formatting)', function () {
      it('returns `Invalid Date` for invalid quarter', function () {
        var result = parse('0', 'Q', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('quarter (stand-alone)', function () {
      it('returns `Invalid Date` for invalid quarter', function () {
        var result = parse('5', 'q', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('month (formatting)', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = parse('00', 'MM', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('month (stand-alone)', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = parse('13', 'LL', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local week of year', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = parse('0', 'w', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('ISO week of year', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = parse('54', 'II', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('day of month', function () {
      it('returns `Invalid Date` for invalid day of the month', function () {
        var result = parse('30', 'd', new Date(2012, 1 /* Feb */, 1))
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for 29th of February of non-leap year', function () {
        var result = parse('29', 'd', new Date(2014, 1 /* Feb */, 1))
        assert(result instanceof Date && isNaN(result))
      })

      it('parses 29th of February of leap year', function () {
        var result = parse('29', 'd', new Date(2012, 1 /* Feb */, 1))
        assert.deepEqual(result, new Date(2012, 1 /* Feb */, 29))
      })
    })

    describe('day of year', function () {
      it('returns `Invalid Date` for invalid day of the year', function () {
        var result = parse('0', 'D', referenceDate, {
          useAdditionalDayOfYearTokens: true,
        })
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for 366th day of non-leap year', function () {
        var result = parse('366', 'D', new Date(2014, 1 /* Feb */, 1), {
          useAdditionalDayOfYearTokens: true,
        })
        assert(result instanceof Date && isNaN(result))
      })

      it('parses 366th day of leap year', function () {
        var result = parse('366', 'D', new Date(2012, 1 /* Feb */, 1), {
          useAdditionalDayOfYearTokens: true,
        })
        assert.deepEqual(result, new Date(2012, 11 /* Dec */, 31))
      })
    })

    describe('ISO day of week (formatting)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = parse('0', 'i', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function () {
        var result = parse('8', 'i', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local day of week (formatting)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = parse('0', 'e', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function () {
        var result = parse('8', 'e', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local day of week (stand-alone)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = parse('0', 'c', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function () {
        var result = parse('8', 'c', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [1-12]', function () {
      it('returns `Invalid Date` for hour zero', function () {
        var result = parse('00', 'hh', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('13', 'hh', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [0-23]', function () {
      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('24', 'HH', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [0-11]', function () {
      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('12', 'KK', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [1-24]', function () {
      it('returns `Invalid Date` for hour zero', function () {
        var result = parse('00', 'kk', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('25', 'kk', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('minute', function () {
      it('returns `Invalid Date` for invalid minute', function () {
        var result = parse('60', 'mm', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('second', function () {
      it('returns `Invalid Date` for invalid second', function () {
        var result = parse('60', 'ss', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })
  })

  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      var customLocale = {
        match: {
          era: function () {
            return {
              value: 0,
              rest: ' it works!',
            }
          },
        },
      }
      // $ExpectedMistake
      var result = parse('2018 foobar', "y G 'it works!'", referenceDate, {
        locale: customLocale,
      })
      assert.deepEqual(result, new Date(-2017, 0 /* Jan */, 1))
    })

    it('throws `RangeError` if `options.locale` does not contain `match` property', function () {
      var block = parse.bind(
        null,
        '2016-11-25 04 AM',
        'yyyy-MM-dd hh a',
        referenceDate,
        // $ExpectedMistake
        { locale: {} }
      )
      assert.throws(block, RangeError)
    })
  })

  it('accepts a timestamp as `referenceDate`', function () {
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    var result = parse(dateString, formatString, referenceDate.getTime())
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 18))
  })

  it('does not mutate `referenceDate`', function () {
    var referenceDateClone1 = new Date(referenceDate.getTime())
    var referenceDateClone2 = new Date(referenceDate.getTime())
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    parse(dateString, formatString, referenceDateClone1)
    assert.deepEqual(referenceDateClone1, referenceDateClone2)
  })

  describe('failure', function () {
    it('returns `referenceDate` if `dateString` and `formatString` are empty strings', function () {
      var dateString = ''
      var formatString = ''
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, referenceDate)
    })

    it('returns `referenceDate` if no tokens in `formatString` are provided', function () {
      var dateString = 'not a token'
      var formatString = "'not a token'"
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, referenceDate)
    })

    it("returns `Invalid Date`  if `formatString` doesn't match `dateString`", function () {
      var dateString = '2017-01-01'
      var formatString = 'yyyy/MM/dd'
      var result = parse(dateString, formatString, referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date`  if `formatString` tokens failed to parse a value', function () {
      var dateString = '2017-01-01'
      var formatString = 'MMMM do yyyy'
      var result = parse(dateString, formatString, referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `formatString` is empty string but `dateString` is not', function () {
      var dateString = '2017-01-01'
      var formatString = ''
      var result = parse(dateString, formatString, referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `referenceDate` is `Invalid Date`', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, new Date(NaN))
      assert(result instanceof Date && isNaN(result))
    })

    it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, referenceDate, {
        weekStartsOn: NaN,
      })
      assert.throws(block, RangeError)
    })

    it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, referenceDate, {
        firstWeekContainsDate: NaN,
      })
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 3 arguments', function () {
    assert.throws(parse.bind(null), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1, 2), TypeError)
  })

  describe('edge cases', function () {
    it('returns Invalid Date if the string contains some remaining input after parsing', function () {
      var result = parse('2016-11-05T040404', 'yyyy-MM-dd', referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('parses normally if the remaining input is just whitespace', function () {
      var result = parse('2016-11-05   \n', 'yyyy-MM-dd', referenceDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5))
    })

    it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
      assert.throws(
        parse.bind(null, '2016-11-05-nnnn', 'yyyy-MM-dd-nnnn', referenceDate),
        RangeError
      )
    })
  })

  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', () => {
    it('throws an error if D token is used', () => {
      const block = parse.bind(null, '2016 5', 'yyyy D', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `d` instead of `D` \(in `yyyy D`\) for formatting days of the month to the input `2016 5`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows D token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = parse('2016 5', 'yyyy D', referenceDate, {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, new Date(2016, 0, 5))
    })

    it('throws an error if DD token is used', () => {
      const block = parse.bind(null, '2016 05', 'yyyy DD', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `dd` instead of `DD` \(in `yyyy DD`\) for formatting days of the month to the input `2016 05`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows DD token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = parse('2016 05', 'yyyy DD', referenceDate, {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, new Date(2016, 0, 5))
    })

    it('throws an error if YY token is used', () => {
      const block = parse.bind(null, '16 1', 'YY w', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `yy` instead of `YY` \(in `YY w`\) for formatting years to the input `16 1`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows YY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = parse('16 1', 'YY w', referenceDate, {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, new Date(2015, 11, 27))
    })

    it('throws an error if YYYY token is used', () => {
      const block = parse.bind(null, '2016 1', 'YYYY w', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `yyyy` instead of `YYYY` \(in `YYYY w`\) for formatting years to the input `2016 1`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = parse('2016 1', 'YYYY w', referenceDate, {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, new Date(2015, 11, 27))
    })
  })

  describe('long format', function () {
    it('short date', function () {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = '05/26/1995'
      var formatString = 'P'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium date', function () {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = 'May 26, 1995'
      var formatString = 'PP'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('long date', function () {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = 'May 26th, 1995'
      var formatString = 'PPP'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('full date', function () {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = 'Friday, May 26th, 1995'
      var formatString = 'PPPP'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('short time', function () {
      var expected = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate(),
        10,
        32
      )
      var timeString = '10:32 AM'
      var formatString = 'p'
      var result = parse(timeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium time', function () {
      var expected = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate(),
        10,
        32,
        55
      )
      var timeString = '10:32:55 AM'
      var formatString = 'pp'
      var result = parse(timeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('short date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = '05/26/1995, 10:32 AM'
      var formatString = 'Pp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = 'May 26, 1995, 10:32 AM'
      var formatString = 'PPp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('long date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = 'May 26th, 1995 at 10:32 AM'
      var formatString = 'PPPp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('full date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32 AM'
      var formatString = 'PPPPp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('short date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = '05/26/1995, 10:32:55 AM'
      var formatString = 'Ppp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = 'May 26, 1995, 10:32:55 AM'
      var formatString = 'PPpp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('long date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = 'May 26th, 1995 at 10:32:55 AM'
      var formatString = 'PPPpp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('full date + short time', function () {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32:55 AM'
      var formatString = 'PPPPpp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })
  })
})
