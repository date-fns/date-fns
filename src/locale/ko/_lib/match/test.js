// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import match from '.'

describe('ko locale > match', function() {
  describe('ordinalNumber', function() {
    context('when the strings mean ordinalNumber value 3', function() {
      it('returns proper values', function() {
        assert(match.ordinalNumber('3번째 년도', { unit: 'year' }).value === 3)
        assert(
          match.ordinalNumber('3번째 분기', { unit: 'quarter' }).value === 3
        )
        assert(match.ordinalNumber('3분기', { unit: 'quarter' }).value === 3)
        assert(match.ordinalNumber('3번째 달', { unit: 'quarter' }).value === 3)
        assert(match.ordinalNumber('3개월', { unit: 'quarter' }).value === 3)
        assert(match.ordinalNumber('3번째 주', { unit: 'week' }).value === 3)
        assert(match.ordinalNumber('3주차', { unit: 'week' }).value === 3)
        assert(match.ordinalNumber('3번째 날', { unit: 'date' }).value === 3)
        assert(match.ordinalNumber('3일차', { unit: 'date' }).value === 3)
        assert(match.ordinalNumber('3번째 시간', { unit: 'hour' }).value === 3)
        assert(match.ordinalNumber('3시간째', { unit: 'hour' }).value === 3)
        assert(match.ordinalNumber('3분 동안', { unit: 'minute' }).value === 3)
        assert(match.ordinalNumber('3초 동안', { unit: 'second' }).value === 3)
      })
    })
  })

  describe('era', function() {
    context('when the strings mean era value 0', function() {
      it('returns proper values', function() {
        assert(match.era('BC 1000년', { width: 'narrow' }).value === 0)
        assert(match.era('BC 1000년', { width: 'abbreviated' }).value === 0)
        assert(match.era('기원전 1000년').value === 0)
      })
    })

    context('when the strings mean era value 1', function() {
      it('returns proper values', function() {
        assert(match.era('AD 1000년', { width: 'narrow' }).value === 1)
        assert(match.era('AD 1000년', { width: 'abbreviated' }).value === 1)
        assert(match.era('서기 1000년').value === 1)
      })
    })
  })

  describe('quarter', function() {
    context('when the strings mean quarter values 1 to 4', function() {
      it('returns proper values', function() {
        Array.from({ length: 4 }, (_, i) => i + 1).forEach(i => {
          assert(match.quarter(`${i}`, { width: 'narrow' }).value === i)
          assert(match.quarter(`Q${i}`, { width: 'abbreviated' }).value === i)
          assert(match.quarter(`${i}분기`).value === i)
          assert(match.quarter(`${i}사분기`).value === i)
        })
      })
    })
  })

  describe('month', function() {
    context('when the strings mean month values 0 to 11', function() {
      it('returns proper values', function() {
        Array.from({ length: 12 }, (_, i) => i).forEach(i => {
          assert(match.month(`${i + 1}`, { width: 'narrow' }).value === i)
          assert(
            match.month(`${i + 1}월`, { width: 'abbreviated' }).value === i
          )
          assert(match.month(`${i + 1}월`).value === i)
        })
      })
    })
  })

  describe('day', function() {
    context('when the strings mean day values 0 to 6', function() {
      it('returns proper values', function() {
        const days = ['일', '월', '화', '수', '목', '금', '토']

        Array.from({ length: 7 }, (_, i) => i).forEach(i => {
          assert(match.day(`${days[i]}`, { width: 'narrow' }).value === i)
          assert(match.day(`${days[i]}`, { width: 'short' }).value === i)
          assert(match.day(`${days[i]}`, { width: 'abbreviated' }).value === i)
          assert(match.day(`${days[i]}요일`).value === i)
        })
      })
    })
  })

  describe('dayPeriod', function() {
    context('when the strings mean dayPeriod value am', function() {
      it('returns proper values', function() {
        assert(match.dayPeriod('AM 8:00', { width: 'narrow' }).value === 'am')
        assert(match.dayPeriod('AM 8:00', { width: 'short' }).value === 'am')
        assert(
          match.dayPeriod('AM 8:00', { width: 'abbreviated' }).value === 'am'
        )
        assert(match.dayPeriod('AM 8:00').value === 'am')
        assert(match.dayPeriod('오전 8:00', { width: 'narrow' }).value === 'am')
        assert(match.dayPeriod('오전 8:00', { width: 'short' }).value === 'am')
        assert(
          match.dayPeriod('오전 8:00', { width: 'abbreviated' }).value === 'am'
        )
        assert(match.dayPeriod('오전 8:00').value === 'am')
      })
    })

    context('when the strings mean dayPeriod value pm', function() {
      it('returns proper values', function() {
        assert(match.dayPeriod('PM 8:00', { width: 'narrow' }).value === 'pm')
        assert(match.dayPeriod('PM 8:00', { width: 'short' }).value === 'pm')
        assert(
          match.dayPeriod('PM 8:00', { width: 'abbreviated' }).value === 'pm'
        )
        assert(match.dayPeriod('PM 8:00').value === 'pm')
        assert(match.dayPeriod('오후 8:00', { width: 'narrow' }).value === 'pm')
        assert(match.dayPeriod('오후 8:00', { width: 'short' }).value === 'pm')
        assert(
          match.dayPeriod('오후 8:00', { width: 'abbreviated' }).value === 'pm'
        )
        assert(match.dayPeriod('오후 8:00').value === 'pm')
      })
    })

    context('when the strings mean dayPeriod value midnight', function() {
      it('returns proper values', function() {
        assert(
          match.dayPeriod('자정 1:00', { width: 'narrow' }).value === 'midnight'
        )
        assert(
          match.dayPeriod('자정 1:00', { width: 'short' }).value === 'midnight'
        )
        assert(
          match.dayPeriod('자정 1:00', { width: 'abbreviated' }).value ===
            'midnight'
        )
        assert(match.dayPeriod('자정 1:00').value === 'midnight')
      })
    })

    context('when the strings mean dayPeriod value noon', function() {
      it('returns proper values', function() {
        assert(
          match.dayPeriod('정오 12:00', { width: 'narrow' }).value === 'noon'
        )
        assert(
          match.dayPeriod('정오 12:00', { width: 'short' }).value === 'noon'
        )
        assert(
          match.dayPeriod('정오 12:00', { width: 'abbreviated' }).value ===
            'noon'
        )
        assert(match.dayPeriod('정오 12:00').value === 'noon')
      })
    })

    context('when the strings mean dayPeriod value morning', function() {
      it('returns proper values', function() {
        assert(
          match.dayPeriod('아침 9:00', { width: 'narrow' }).value === 'morning'
        )
        assert(
          match.dayPeriod('아침 9:00', { width: 'short' }).value === 'morning'
        )
        assert(
          match.dayPeriod('아침 9:00', { width: 'abbreviated' }).value ===
            'morning'
        )
        assert(match.dayPeriod('아침 9:00').value === 'morning')
      })
    })

    context('when the strings mean dayPeriod value evening', function() {
      it('returns proper values', function() {
        assert(
          match.dayPeriod('저녁 10:00', { width: 'narrow' }).value === 'evening'
        )
        assert(
          match.dayPeriod('저녁 10:00', { width: 'short' }).value === 'evening'
        )
        assert(
          match.dayPeriod('저녁 10:00', { width: 'abbreviated' }).value ===
            'evening'
        )
        assert(match.dayPeriod('저녁 10:00').value === 'evening')
      })
    })

    context('when the strings mean dayPeriod value night', function() {
      it('returns proper values', function() {
        assert(
          match.dayPeriod('밤 10:00', { width: 'narrow' }).value === 'night'
        )
        assert(
          match.dayPeriod('밤 10:00', { width: 'short' }).value === 'night'
        )
        assert(
          match.dayPeriod('밤 10:00', { width: 'abbreviated' }).value ===
            'night'
        )
        assert(match.dayPeriod('밤 10:00').value === 'night')
      })
    })
  })
})
