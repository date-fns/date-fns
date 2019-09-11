/* eslint-env mocha */

import assert from 'power-assert'
import parse from '.'

describe('parse', function() {
  var backupDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  it('escapes characters between the single quote characters', function() {
    var result = parse(
      '2018 hello world July 2nd',
      "yyyy 'hello world' MMMM do",
      backupDate
    )
    assert.deepEqual(result, new Date(2018, 6 /* Jul */, 2))
  })

  it('two single quote characters are transformed into a "real" single quote', function() {
    var result = parse("'5 o'clock'", "''h 'o''clock'''", backupDate)
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
  })

  describe('era', function() {
    it('abbreviated', function() {
      var result = parse('10000 BC', 'yyyyy G', backupDate)
      assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
    })

    it('wide', function() {
      var result = parse('2018 Anno Domini', 'yyyy GGGG', backupDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('narrow', function() {
      var result = parse('44 B', 'y GGGGG', backupDate)
      assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
    })

    it('with week-numbering year', function() {
      var result = parse('44 B', 'Y GGGGG', backupDate)
      assert.deepEqual(result, new Date(-44, 11 /* Dec */, 30))
    })

    it('parses stand-alone BC', function() {
      var result = parse('BC', 'G', backupDate)
      const expectedResult = new Date(0, 0 /* Jan */, 1)
      expectedResult.setFullYear(0)
      assert.deepEqual(result, expectedResult)
    })

    it('parses stand-alone AD', function() {
      var result = parse('AD', 'G', backupDate)
      const expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'BC'],
        ['R', '2019'],
        ['u', '2019'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when G is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 420`,
            `${token} G`,
            backupDate
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

  describe('calendar year', function() {
    it('numeric', function() {
      var result = parse('2017', 'y', backupDate)
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    it('ordinal', function() {
      var result = parse('2017th', 'yo', backupDate)
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('two-digit numeric year', function() {
      it('works as expected', function() {
        var result = parse('02', 'yy', backupDate)
        assert.deepEqual(result, new Date(2002, 0 /* Jan */, 1))
      })

      it('gets the 100 year range from `backupDate`', function() {
        var result = parse('02', 'yy', new Date(1860, 6 /* Jul */, 2))
        assert.deepEqual(result, new Date(1902, 0 /* Jan */, 1))
      })
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'yyy', backupDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function() {
      var result = parse('0044', 'yyyy', backupDate)
      var expectedResult = new Date(44, 0 /* Jan */, 1)
      expectedResult.setFullYear(44)
      assert.deepEqual(result, expectedResult)
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'yyyyyy', backupDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when y is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} y`,
            backupDate
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

  describe('local week-numbering year', function() {
    it('numeric', function() {
      var result = parse('2002', 'Y', backupDate)
      assert.deepEqual(result, new Date(2001, 11 /* Dec */, 30))
    })

    it('ordinal', function() {
      var result = parse('12345th', 'Yo', backupDate)
      assert.deepEqual(result, new Date(12344, 11 /* Dec */, 31))
    })

    describe('two-digit numeric year', function() {
      it('works as expected', function() {
        var result = parse('02', 'YY', backupDate, {
          useAdditionalWeekYearTokens: true
        })
        assert.deepEqual(result, new Date(2001, 11 /* Dec */, 30))
      })

      it('gets the 100 year range from `backupDate`', function() {
        var result = parse('02', 'YY', new Date(1860, 6 /* Jul */, 2), {
          useAdditionalWeekYearTokens: true
        })
        assert.deepEqual(result, new Date(1901, 11 /* Dec */, 29))
      })
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'YYY', backupDate)
      assert.deepEqual(result, new Date(122, 11 /* Dec */, 27))
    })

    it('four-digit zero-padding', function() {
      var result = parse('2018', 'YYYY', backupDate, {
        useAdditionalWeekYearTokens: true
      })
      assert.deepEqual(result, new Date(2017, 11 /* Dec */, 31))
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'YYYYYY', backupDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(0, 11 /* Dec */, 31)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function() {
      var result = parse('2018', 'Y', backupDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when Y is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} Y`,
            backupDate,
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

  describe('ISO week-numbering year', function() {
    it('numeric', function() {
      var result = parse('-1234', 'R', backupDate)
      assert.deepEqual(result, new Date(-1234, 0 /* Jan */, 3))
    })

    it('two-digit zero-padding', function() {
      var result = parse('-02', 'RR', backupDate)
      assert.deepEqual(result, new Date(-3, 11 /* Dec */, 29))
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'RRR', backupDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 4))
    })

    it('four-digit zero-padding', function() {
      var result = parse('2018', 'RRRR', backupDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'RRRRRR', backupDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when R is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} R`,
            backupDate,
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

  describe('extended year', function() {
    it('numeric', function() {
      var result = parse('-1234', 'u', backupDate)
      assert.deepEqual(result, new Date(-1234, 0 /* Jan */, 1))
    })

    it('two-digit zero-padding', function() {
      var result = parse('-02', 'uu', backupDate)
      assert.deepEqual(result, new Date(-2, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'uuu', backupDate)
      assert.deepEqual(result, new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function() {
      var result = parse('2018', 'uuuu', backupDate)
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'uuuuuu', backupDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when u is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} u`,
            backupDate
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

  describe('quarter (formatting)', function() {
    it('numeric', function() {
      var result = parse('1', 'Q', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('ordinal', function() {
      var result = parse('1st', 'Qo', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('zero-padding', function() {
      var result = parse('02', 'QQ', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Q3', 'QQQ', backupDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
    })

    it('wide', function() {
      var result = parse('4st quarter', 'QQQQ', backupDate)
      assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
    })

    it('narrow', function() {
      var result = parse('1', 'QQQQQ', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when Q is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} Q`,
            backupDate,
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

  describe('quarter (stand-alone)', function() {
    it('numeric', function() {
      var result = parse('1', 'q', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('ordinal', function() {
      var result = parse('1th', 'qo', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('zero-padding', function() {
      var result = parse('02', 'qq', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Q3', 'qqq', backupDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
    })

    it('wide', function() {
      var result = parse('4th quarter', 'qqqq', backupDate)
      assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
    })

    it('narrow', function() {
      var result = parse('1', 'qqqqq', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when q is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} q`,
            backupDate,
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

  describe('month (formatting)', function() {
    it('numeric', function() {
      var result = parse('6', 'M', backupDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('ordinal', function() {
      var result = parse('6th', 'Mo', backupDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('zero-padding', function() {
      var result = parse('01', 'MM', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Nov', 'MMM', backupDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    })

    it('wide', function() {
      var result = parse('February', 'MMMM', backupDate)
      assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    })

    it('narrow', function() {
      var result = parse('J', 'MMMMM', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when M is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} M`,
            backupDate,
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

  describe('month (stand-alone)', function() {
    it('numeric', function() {
      var result = parse('6', 'L', backupDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('ordinal', function() {
      var result = parse('6th', 'Lo', backupDate)
      assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    })

    it('zero-padding', function() {
      var result = parse('01', 'LL', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Nov', 'LLL', backupDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    })

    it('wide', function() {
      var result = parse('February', 'LLLL', backupDate)
      assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    })

    it('narrow', function() {
      var result = parse('J', 'LLLLL', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when L is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} L`,
            backupDate,
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

  describe('local week of year', function() {
    it('numeric', function() {
      var result = parse('49', 'w', backupDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('ordinal', function() {
      var result = parse('49th', 'wo', backupDate)
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('zero-padding', function() {
      var result = parse('01', 'ww', backupDate)
      assert.deepEqual(result, new Date(1985, 11 /* Dec */, 29))
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function() {
      var result = parse('49', 'w', backupDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when w is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} w`,
            backupDate,
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

  describe('ISO week of year', function() {
    it('numeric', function() {
      var result = parse('49', 'I', backupDate)
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('ordinal', function() {
      var result = parse('49th', 'Io', backupDate)
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('zero-padding', function() {
      var result = parse('01', 'II', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when I is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} I`,
            backupDate,
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

  describe('day of month', function() {
    it('numeric', function() {
      var result = parse('28', 'd', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal', function() {
      var result = parse('28th', 'do', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('zero-padding', function() {
      var result = parse('01', 'dd', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when d is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} d`,
            backupDate,
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

  describe('day of year', function() {
    it('numeric', function() {
      var result = parse('200', 'D', backupDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    it('ordinal', function() {
      var result = parse('200th', 'Do', backupDate)
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    it('two-digit zero-padding', function() {
      var result = parse('01', 'DD', backupDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function() {
      var result = parse('001', 'DDD', backupDate)
      assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function() {
      var result = parse('000200', 'DDDDDD', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, _options]) => {
        it(`throws an error when D is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} D`,
            backupDate,
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

  describe('day of week (formatting)', function() {
    it('abbreviated', function() {
      var result = parse('Mon', 'E', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('wide', function() {
      var result = parse('Tuesday', 'EEEE', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('narrow', function() {
      var result = parse('W', 'EEEEE', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('short', function() {
      var result = parse('Th', 'EEEEEE', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('allows to specify which day is the first day of the week', function() {
      var result = parse('Thursday', 'EEEE', backupDate, {
        weekStartsOn: /* Fri */ 5
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when E is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} Mon`,
            `${token} E`,
            backupDate,
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

  describe('ISO day of week (formatting)', function() {
    it('numeric', function() {
      var result = parse('1', 'i', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function() {
      var result = parse('1st', 'io', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function() {
      var result = parse('02', 'ii', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Wed', 'iii', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function() {
      var result = parse('Thursday', 'iiii', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function() {
      var result = parse('S', 'iiiii', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    it('short', function() {
      var result = parse('Fr', 'iiiiii', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when i is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} i`,
            backupDate,
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

  describe('local day of week (formatting)', function() {
    it('numeric', function() {
      var result = parse('2', 'e', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function() {
      var result = parse('2nd', 'eo', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function() {
      var result = parse('03', 'ee', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Wed', 'eee', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function() {
      var result = parse('Thursday', 'eeee', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function() {
      var result = parse('S', 'eeeee', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function() {
      var result = parse('Fr', 'eeeeee', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function() {
      var result = parse('7th', 'eo', backupDate, { weekStartsOn: /* Fri */ 5 })
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when e is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} e`,
            backupDate,
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

  describe('local day of week (stand-alone)', function() {
    it('numeric', function() {
      var result = parse('2', 'c', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function() {
      var result = parse('2nd', 'co', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function() {
      var result = parse('03', 'cc', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('Wed', 'ccc', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function() {
      var result = parse('Thursday', 'cccc', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function() {
      var result = parse('S', 'ccccc', backupDate)
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function() {
      var result = parse('Fr', 'cccccc', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function() {
      var result = parse('7th', 'co', backupDate, { weekStartsOn: /* Fri */ 5 })
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
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when c is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} c`,
            backupDate,
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

  describe('AM, PM', function() {
    it('abbreviated', function() {
      var result = parse('5 AM', 'h a', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
    })

    it('12 AM', function() {
      var result = parse('12 AM', 'h aa', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    it('12 PM', function() {
      var result = parse('12 PM', 'h aaa', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('wide', function() {
      var result = parse('5 p.m.', 'h aaaa', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    })

    it('narrow', function() {
      var result = parse('11 a', 'h aaaaa', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when a is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} AM`,
            `${token} a`,
            backupDate
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

  describe('AM, PM, noon, midnight', function() {
    it('abbreviated', function() {
      var result = parse('noon', 'b', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('wide', function() {
      var result = parse('midnight', 'bbbb', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    })

    it('narrow', function() {
      var result = parse('mi', 'bbbbb', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when b is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} AM`,
            `${token} b`,
            backupDate
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

  describe('flexible day period', function() {
    it('abbreviated', function() {
      var result = parse('2 at night', 'h B', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
    })

    it('wide', function() {
      var result = parse('12 in the afternoon', 'h BBBB', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('narrow', function() {
      var result = parse('5 in the evening', 'h BBBBB', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    })

    describe('validation', () => {
      ;[
        ['a', 'AM'],
        ['b', 'AM'],
        ['B', 'in the morning'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when B is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} in the morning`,
            `${token} B`,
            backupDate
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

  describe('hour [1-12]', function() {
    it('numeric', function() {
      var result = parse('1', 'h', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('ordinal', function() {
      var result = parse('1st', 'ho', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('zero-padding', function() {
      var result = parse('01', 'hh', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    describe('validation', () => {
      ;[
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when h is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} h`,
            backupDate
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

  describe('hour [0-23]', function() {
    it('numeric', function() {
      var result = parse('12', 'H', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('ordinal', function() {
      var result = parse('12th', 'Ho', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('zero-padding', function() {
      var result = parse('00', 'HH', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when H is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} H`,
            backupDate
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

  describe('hour [0-11]', function() {
    it('numeric', function() {
      var result = parse('1', 'K', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('ordinal', function() {
      var result = parse('1st', 'Ko', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1))
    })

    it('zero-padding', function() {
      var result = parse('1', 'KK', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when K is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} K`,
            backupDate
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

  describe('hour [1-24]', function() {
    it('numeric', function() {
      var result = parse('12', 'k', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('ordinal', function() {
      var result = parse('12th', 'ko', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    })

    it('zero-padding', function() {
      var result = parse('24', 'kk', backupDate)
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
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when k is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} k`,
            backupDate
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

  describe('minute', function() {
    it('numeric', function() {
      var result = parse('25', 'm', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25))
    })

    it('ordinal', function() {
      var result = parse('25th', 'mo', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25))
    })

    it('zero-padding', function() {
      var result = parse('05', 'mm', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 5))
    })

    describe('validation', () => {
      ;[['m', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(
        ([token, example]) => {
          it(`throws an error when m is used after ${token}`, () => {
            const block = parse.bind(
              null,
              `${example} 1`,
              `${token} m`,
              backupDate
            )
            assert.throws(block, RangeError)
            assert.throws(
              block,
              new RegExp(
                `The format string mustn't contain \`${token}\` and \`m\` at the same time`
              )
            )
          })
        }
      )
    })
  })

  describe('second', function() {
    it('numeric', function() {
      var result = parse('25', 's', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 25))
    })

    it('ordinal', function() {
      var result = parse('25th', 'so', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 25))
    })

    it('zero-padding', function() {
      var result = parse('05', 'ss', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 5))
    })

    describe('validation', () => {
      ;[['s', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(
        ([token, example]) => {
          it(`throws an error when s is used after ${token}`, () => {
            const block = parse.bind(
              null,
              `${example} 1`,
              `${token} s`,
              backupDate
            )
            assert.throws(block, RangeError)
            assert.throws(
              block,
              new RegExp(
                `The format string mustn't contain \`${token}\` and \`s\` at the same time`
              )
            )
          })
        }
      )
    })
  })

  describe('fraction of second', function() {
    it('1/10 of second', function() {
      var result = parse('1', 'S', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 100))
    })

    it('1/100 of second', function() {
      var result = parse('12', 'SS', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 120))
    })

    it('millisecond', function() {
      var result = parse('123', 'SSS', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 123))
    })

    it('specified amount of digits', function() {
      var result = parse('567890', 'SSSSSS', backupDate)
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 567))
    })

    describe('validation', () => {
      ;[['S', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(
        ([token, example]) => {
          it(`throws an error when S is used after ${token}`, () => {
            const block = parse.bind(
              null,
              `${example} 1`,
              `${token} S`,
              backupDate
            )
            assert.throws(block, RangeError)
            assert.throws(
              block,
              new RegExp(
                `The format string mustn't contain \`${token}\` and \`S\` at the same time`
              )
            )
          })
        }
      )
    })
  })

  describe('timezone (ISO-8601 w/ Z)', function() {
    describe('X', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+05',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('XX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXXX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+053045',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('XXXXX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+05:30:45',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('validation', () => {
      ;[
        ['X', '-0530'],
        ['x', '-0530'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when X is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} -0530`,
            `${token} X`,
            backupDate
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

  describe('timezone (ISO-8601 w/o Z)', function() {
    describe('x', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+05',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('xx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+00:00',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxxx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+053045',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('xxxxx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '2016-11-25T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+00:00',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '2016-11-25T16:38:38.123+05:30:45',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          backupDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('validation', () => {
      ;[
        ['X', '-0530'],
        ['x', '-0530'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when x is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} -0530`,
            `${token} x`,
            backupDate
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

  describe('seconds timestamp', function() {
    it('numeric', function() {
      var result = parse('512969520', 't', backupDate)
      assert.deepEqual(result, new Date(512969520000))
    })

    it('specified amount of digits', function() {
      var result = parse(
        '00000000000512969520',
        'tttttttttttttttttttt',
        backupDate
      )
      assert.deepEqual(result, new Date(512969520000))
    })

    it(`throws an error when it is used after any token`, () => {
      const block = parse.bind(null, `1 512969520`, `h t`, backupDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`t\` and any other token at the same time`
        )
      )
    })
  })

  describe('milliseconds timestamp', function() {
    it('numeric', function() {
      var result = parse('512969520900', 'T', backupDate)
      assert.deepEqual(result, new Date(512969520900))
    })

    it('specified amount of digits', function() {
      var result = parse(
        '00000000512969520900',
        'TTTTTTTTTTTTTTTTTTTT',
        backupDate
      )
      assert.deepEqual(result, new Date(512969520900))
    })

    it(`throws an error when it is used after any token`, () => {
      const block = parse.bind(null, `1 512969520900`, `h T`, backupDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`T\` and any other token at the same time`
        )
      )
    })
  })

  describe('common formats', function() {
    it('ISO-8601', function() {
      var result = parse('20161105T040404', "yyyyMMdd'T'HHmmss", backupDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('ISO week-numbering date', function() {
      var result = parse('2016W474T153005', "RRRR'W'IIi'T'HHmmss", backupDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0))
    })

    it('ISO day of year date', function() {
      var result = parse('2010123T235959', "yyyyDDD'T'HHmmss", backupDate)
      assert.deepEqual(result, new Date(2010, 4 /* May */, 3, 23, 59, 59, 0))
    })

    it('Date.prototype.toString()', function() {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600'
      var formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx"
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('Date.prototype.toISOString()', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('middle-endian', function() {
      var result = parse('5 a.m. 07/02/2016', 'h aaaa MM/dd/yyyy', backupDate)
      assert.deepEqual(result, new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0))
    })

    it('little-endian', function() {
      var result = parse('02.07.1995', 'dd.MM.yyyy', backupDate)
      assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0))
    })
  })

  describe('priority', function() {
    it("units of lower priority don't overwrite values of higher priority", function() {
      var dateString = '+06:00 123 15 30 05 02 07 2014'
      var formatString = 'xxx SSS ss mm HH dd MM yyyy'
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, new Date('2014-07-02T05:30:15.123+06:00'))
    })
  })

  describe('implicit conversion of arguments', function() {
    it('`dateString`', function() {
      // eslint-disable-next-line no-new-wrappers
      var dateString = new String('20161105T040404')
      // $ExpectedMistake
      var result = parse(dateString, "yyyyMMdd'T'HHmmss", backupDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('`formatString`', function() {
      // eslint-disable-next-line no-new-wrappers
      var formatString = new String("yyyyMMdd'T'HHmmss")
      // $ExpectedMistake
      var result = parse('20161105T040404', formatString, backupDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('`options.weekStartsOn`', function() {
      // $ExpectedMistake
      var result = parse('2018', 'Y', backupDate, {
        weekStartsOn: '1' /* Mon */,
        firstWeekContainsDate: 4
      })
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })

    it('`options.firstWeekContainsDate`', function() {
      // $ExpectedMistake
      var result = parse('2018', 'Y', backupDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: '4'
      })
      assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
    })
  })

  describe('with `options.strictValidation` = true', function() {
    describe('calendar year', function() {
      it('returns `Invalid Date` for year zero', function() {
        var result = parse('0', 'y', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('works correctly for two-digit year zero', function() {
        var result = parse('00', 'yy', backupDate)
        assert.deepEqual(result, new Date(2000, 0 /* Jan */, 1))
      })
    })

    describe('local week-numbering year', function() {
      it('returns `Invalid Date` for year zero', function() {
        var result = parse('0', 'Y', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('works correctly for two-digit year zero', function() {
        var result = parse('00', 'YY', backupDate, {
          useAdditionalWeekYearTokens: true
        })
        assert.deepEqual(result, new Date(1999, 11 /* Dec */, 26))
      })
    })

    describe('quarter (formatting)', function() {
      it('returns `Invalid Date` for invalid quarter', function() {
        var result = parse('0', 'Q', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('quarter (stand-alone)', function() {
      it('returns `Invalid Date` for invalid quarter', function() {
        var result = parse('5', 'q', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('month (formatting)', function() {
      it('returns `Invalid Date` for invalid month', function() {
        var result = parse('00', 'MM', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('month (stand-alone)', function() {
      it('returns `Invalid Date` for invalid month', function() {
        var result = parse('13', 'LL', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local week of year', function() {
      it('returns `Invalid Date` for invalid week', function() {
        var result = parse('0', 'w', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('ISO week of year', function() {
      it('returns `Invalid Date` for invalid week', function() {
        var result = parse('54', 'II', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('day of month', function() {
      it('returns `Invalid Date` for invalid day of the month', function() {
        var result = parse('30', 'd', new Date(2012, 1 /* Feb */, 1))
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for 29th of February of non-leap year', function() {
        var result = parse('29', 'd', new Date(2014, 1 /* Feb */, 1))
        assert(result instanceof Date && isNaN(result))
      })

      it('parses 29th of February of leap year', function() {
        var result = parse('29', 'd', new Date(2012, 1 /* Feb */, 1))
        assert.deepEqual(result, new Date(2012, 1 /* Feb */, 29))
      })
    })

    describe('day of year', function() {
      it('returns `Invalid Date` for invalid day of the year', function() {
        var result = parse('0', 'D', backupDate, {
          useAdditionalDayOfYearTokens: true
        })
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for 366th day of non-leap year', function() {
        var result = parse('366', 'D', new Date(2014, 1 /* Feb */, 1), {
          useAdditionalDayOfYearTokens: true
        })
        assert(result instanceof Date && isNaN(result))
      })

      it('parses 366th day of leap year', function() {
        var result = parse('366', 'D', new Date(2012, 1 /* Feb */, 1), {
          useAdditionalDayOfYearTokens: true
        })
        assert.deepEqual(result, new Date(2012, 11 /* Dec */, 31))
      })
    })

    describe('ISO day of week (formatting)', function() {
      it('returns `Invalid Date` for day zero', function() {
        var result = parse('0', 'i', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function() {
        var result = parse('8', 'i', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local day of week (formatting)', function() {
      it('returns `Invalid Date` for day zero', function() {
        var result = parse('0', 'e', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function() {
        var result = parse('8', 'e', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local day of week (stand-alone)', function() {
      it('returns `Invalid Date` for day zero', function() {
        var result = parse('0', 'c', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function() {
        var result = parse('8', 'c', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [1-12]', function() {
      it('returns `Invalid Date` for hour zero', function() {
        var result = parse('00', 'hh', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('13', 'hh', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [0-23]', function() {
      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('24', 'HH', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [0-11]', function() {
      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('12', 'KK', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [1-24]', function() {
      it('returns `Invalid Date` for hour zero', function() {
        var result = parse('00', 'kk', backupDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('25', 'kk', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('minute', function() {
      it('returns `Invalid Date` for invalid minute', function() {
        var result = parse('60', 'mm', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('second', function() {
      it('returns `Invalid Date` for invalid second', function() {
        var result = parse('60', 'ss', backupDate)
        assert(result instanceof Date && isNaN(result))
      })
    })
  })

  describe('custom locale', function() {
    it('allows to pass a custom locale', function() {
      var customLocale = {
        match: {
          era: function() {
            return {
              value: 0,
              rest: ' it works!'
            }
          }
        }
      }
      // $ExpectedMistake
      var result = parse('2018 foobar', "y G 'it works!'", backupDate, {
        locale: customLocale
      })
      assert.deepEqual(result, new Date(-2017, 0 /* Jan */, 1))
    })

    it('throws `RangeError` if `options.locale` does not contain `match` property', function() {
      var block = parse.bind(
        null,
        '2016-11-25 04 AM',
        'yyyy-MM-dd hh a',
        backupDate,
        // $ExpectedMistake
        { locale: {} }
      )
      assert.throws(block, RangeError)
    })
  })

  it('accepts a timestamp as `backupDate`', function() {
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    var result = parse(dateString, formatString, backupDate.getTime())
    assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 18))
  })

  it('does not mutate `backupDate`', function() {
    var backupDateClone1 = new Date(backupDate.getTime())
    var backupDateClone2 = new Date(backupDate.getTime())
    var dateString = '6 p.m.'
    var formatString = 'h aaaa'
    parse(dateString, formatString, backupDateClone1)
    assert.deepEqual(backupDateClone1, backupDateClone2)
  })

  describe('failure', function() {
    it('returns `backupDate` if `dateString` and `formatString` are empty strings', function() {
      var dateString = ''
      var formatString = ''
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, backupDate)
    })

    it('returns `backupDate` if no tokens in `formatString` are provided', function() {
      var dateString = 'not a token'
      var formatString = "'not a token'"
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, backupDate)
    })

    it("returns `Invalid Date`  if `formatString` doesn't match `dateString`", function() {
      var dateString = '2017-01-01'
      var formatString = 'yyyy/MM/dd'
      var result = parse(dateString, formatString, backupDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date`  if `formatString` tokens failed to parse a value', function() {
      var dateString = '2017-01-01'
      var formatString = 'MMMM do yyyy'
      var result = parse(dateString, formatString, backupDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `formatString` is empty string but `dateString` is not', function() {
      var dateString = '2017-01-01'
      var formatString = ''
      var result = parse(dateString, formatString, backupDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `backupDate` is `Invalid Date`', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, new Date(NaN))
      assert(result instanceof Date && isNaN(result))
    })

    it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, backupDate, {
        weekStartsOn: NaN
      })
      assert.throws(block, RangeError)
    })

    it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, backupDate, {
        firstWeekContainsDate: NaN
      })
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 3 arguments', function() {
    assert.throws(parse.bind(null), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1, 2), TypeError)
  })

  describe('edge cases', function() {
    it('returns Invalid Date if the string contains some remaining input after parsing', function() {
      var result = parse('2016-11-05T040404', 'yyyy-MM-dd', backupDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('parses normally if the remaining input is just whitespace', function() {
      var result = parse('2016-11-05   \n', 'yyyy-MM-dd', backupDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5))
    })

    it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function() {
      assert.throws(
        parse.bind(null, '2016-11-05-nnnn', 'yyyy-MM-dd-nnnn', backupDate),
        RangeError
      )
    })
  })

  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', () => {
    it('throws an error if D token is used', () => {
      const block = parse.bind(null, '2016 5', 'yyyy D', backupDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `d` instead of `D` for formatting days of the month; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows D token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = parse('2016 5', 'yyyy D', backupDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, new Date(2016, 0, 5))
    })

    it('throws an error if DD token is used', () => {
      const block = parse.bind(null, '2016 05', 'yyyy DD', backupDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `dd` instead of `DD` for formatting days of the month; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows DD token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = parse('2016 05', 'yyyy DD', backupDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, new Date(2016, 0, 5))
    })

    it('throws an error if YY token is used', () => {
      const block = parse.bind(null, '16 1', 'YY w', backupDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `yy` instead of `YY` for formatting years; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows YY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = parse('16 1', 'YY w', backupDate, {
        useAdditionalWeekYearTokens: true
      })
      assert.deepEqual(result, new Date(2015, 11, 27))
    })

    it('throws an error if YYYY token is used', () => {
      const block = parse.bind(null, '2016 1', 'YYYY w', backupDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `yyyy` instead of `YYYY` for formatting years; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = parse('2016 1', 'YYYY w', backupDate, {
        useAdditionalWeekYearTokens: true
      })
      assert.deepEqual(result, new Date(2015, 11, 27))
    })
  })

  describe('long format', function() {
    it('short date', function() {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = '05/26/1995'
      var formatString = 'P'
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('medium date', function() {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = 'May 26, 1995'
      var formatString = 'PP'
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('long date', function() {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = 'May 26th, 1995'
      var formatString = 'PPP'
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('full date', function() {
      var expected = new Date(1995, 4 /* May */, 26)
      var dateString = 'Friday, May 26th, 1995'
      var formatString = 'PPPP'
      var result = parse(dateString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('short time', function() {
      var expected = new Date(
        backupDate.getFullYear(),
        backupDate.getMonth(),
        backupDate.getDate(),
        10,
        32
      )
      var timeString = '10:32 AM'
      var formatString = 'p'
      var result = parse(timeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('medium time', function() {
      var expected = new Date(
        backupDate.getFullYear(),
        backupDate.getMonth(),
        backupDate.getDate(),
        10,
        32,
        55
      )
      var timeString = '10:32:55 AM'
      var formatString = 'pp'
      var result = parse(timeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('short date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = '05/26/1995, 10:32 AM'
      var formatString = 'Pp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('medium date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = 'May 26, 1995, 10:32 AM'
      var formatString = 'PPp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('long date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = 'May 26th, 1995 at 10:32 AM'
      var formatString = 'PPPp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('full date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32 AM'
      var formatString = 'PPPPp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('short date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = '05/26/1995, 10:32:55 AM'
      var formatString = 'Ppp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('medium date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = 'May 26, 1995, 10:32:55 AM'
      var formatString = 'PPpp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('long date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = 'May 26th, 1995 at 10:32:55 AM'
      var formatString = 'PPPpp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })

    it('full date + short time', function() {
      var expected = new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32:55 AM'
      var formatString = 'PPPPpp'
      var result = parse(dateTimeString, formatString, backupDate)
      assert.deepEqual(result, expected)
    })
  })
})
