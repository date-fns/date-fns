// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import localize from '.'

describe('ko locale > localize', function() {
  describe('ordinalNumber', function() {
    context('when the ordinalNumber values are 1 to 100', function() {
      it('returns proper strings', function() {
        Array.from({ length: 100 }, (_, i) => i + 1).forEach(i => {
          assert(localize.ordinalNumber(i) === `${i}번째`)
        })

        Array.from({ length: 100 }, (_, i) => i + 1).forEach(i => {
          assert(localize.ordinalNumber(i, { unit: 'minute' }) === `${i}`)
        })

        Array.from({ length: 100 }, (_, i) => i + 1).forEach(i => {
          assert(localize.ordinalNumber(i, { unit: 'second' }) === `${i}`)
        })
      })
    })
  })

  // You can see the associated source code in the G of the `_lib/format/formatters/index.js`
  describe('era', function() {
    context('when the era value is 0', function() {
      it('returns proper strings', function() {
        assert(localize.era(0, { width: 'narrow' }) === 'BC')
        assert(localize.era(0, { width: 'abbreviated' }) === 'BC')
        assert(localize.era(0) === '기원전')
      })
    })

    context('when the era value is 1', function() {
      it('returns proper strings', function() {
        assert(localize.era(1, { width: 'narrow' }) === 'AD')
        assert(localize.era(1, { width: 'abbreviated' }) === 'AD')
        assert(localize.era(1) === '서기')
      })
    })
  })

  // You can see the associated source code in the Q of the `_lib/format/formatters/index.js`
  describe('quarter', function() {
    context('when the quarter values are 1, 2, 3, 4', function() {
      it('returns proper strings', function() {
        ;[1, 2, 3, 4].forEach(i => {
          assert(localize.quarter(i, { width: 'narrow' }) === `${i}`)
          assert(localize.quarter(i, { width: 'abbreviated' }) === `Q${i}`)
          assert(localize.quarter(i) === `${i}분기`)
        })
      })
    })
  })

  describe('month', function() {
    context('when the month values are 0 to 11', function() {
      it('returns proper strings', function() {
        Array.from({ length: 12 }, (_, i) => i).forEach(i => {
          assert(localize.month(i, { width: 'narrow' }) === `${i + 1}`)
          assert(localize.month(i, { width: 'abbreviated' }) === `${i + 1}월`)
          assert(localize.month(i) === `${i + 1}월`)
        })
      })
    })
  })

  describe('day', function() {
    context('when the day values are 0 to 6', function() {
      it('returns proper strings', function() {
        const dayValues = ['일', '월', '화', '수', '목', '금', '토']

        Array.from({ length: 7 }, (_, i) => i).forEach(i => {
          assert(localize.day(i, { width: 'narrow' }) === `${dayValues[i]}`)
          assert(localize.day(i, { width: 'short' }) === `${dayValues[i]}`)
          assert(
            localize.day(i, { width: 'abbreviated' }) === `${dayValues[i]}`
          )
          assert(localize.day(i) === `${dayValues[i]}요일`)
        })
      })
    })
  })

  describe('dayPeriod', function() {
    context('when the value is am', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('am', { width: 'narrow' }) === '오전')
        assert(localize.dayPeriod('am', { width: 'abbreviated' }) === '오전')
        assert(localize.dayPeriod('am') === '오전')
      })
    })

    context('when the value is pm', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('pm', { width: 'narrow' }) === '오후')
        assert(localize.dayPeriod('pm', { width: 'abbreviated' }) === '오후')
        assert(localize.dayPeriod('pm') === '오후')
      })
    })

    context('when the value is midnight', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('midnight', { width: 'narrow' }) === '자정')
        assert(
          localize.dayPeriod('midnight', { width: 'abbreviated' }) === '자정'
        )
        assert(localize.dayPeriod('midnight') === '자정')
      })
    })

    context('when the value is noon', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('noon', { width: 'narrow' }) === '정오')
        assert(localize.dayPeriod('noon', { width: 'abbreviated' }) === '정오')
        assert(localize.dayPeriod('noon') === '정오')
      })
    })

    context('when the value is morning', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('morning', { width: 'narrow' }) === '아침')
        assert(
          localize.dayPeriod('morning', { width: 'abbreviated' }) === '아침'
        )
        assert(localize.dayPeriod('morning') === '아침')
      })
    })

    context('when the value is afternoon', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('afternoon', { width: 'narrow' }) === '오후')
        assert(
          localize.dayPeriod('afternoon', { width: 'abbreviated' }) === '오후'
        )
        assert(localize.dayPeriod('afternoon') === '오후')
      })
    })

    context('when the value is evening', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('evening', { width: 'narrow' }) === '저녁')
        assert(
          localize.dayPeriod('evening', { width: 'abbreviated' }) === '저녁'
        )
        assert(localize.dayPeriod('evening') === '저녁')
      })
    })

    context('when the value is night', function() {
      it('returns proper strings', function() {
        assert(localize.dayPeriod('night', { width: 'narrow' }) === '밤')
        assert(localize.dayPeriod('night', { width: 'abbreviated' }) === '밤')
        assert(localize.dayPeriod('night') === '밤')
      })
    })
  })
})
