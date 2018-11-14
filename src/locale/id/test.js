// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('id locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'M, Masehi, M')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "'Tahun' yo", { locale: locale })
        assert(result === 'Tahun ke-1986')
      })

      it('ordinal local week-numbering year', function() {
        var result = format(date, "'Tahun relatif 1986 dalam abad: tahun' Yo", {
          locale: locale
        })
        assert(result === 'Tahun relatif 1986 dalam abad: tahun ke-1986')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var result = format(date, "'Kuartal' Qo, QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === 'Kuartal ke-2, K2, Kuartal ke-2, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "'Kuartal' qo, qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === 'Kuartal ke-2, K2, Kuartal ke-2, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, "MMMM 'hari' do", { locale: locale })
        assert(result === 'April hari ke-5')
      })

      it('stand-alone month', function() {
        var result = format(date, "'Bulan' Lo, LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === 'Bulan ke-4, Apr, April, A')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "'Minggu' wo", { locale: locale })
        assert(result === 'Minggu ke-14')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "'Minggu ISO' Io", { locale: locale })
        assert(result === 'Minggu ISO ke-14')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'Hari ini hari' do", { locale: locale })
        assert(result === 'Hari ini hari ke-5')
      })

      it('ordinal day of year', function() {
        var result = format(date, "'Hari ini hari' Do 'di tahun ini'", {
          locale: locale
        })
        assert(result === 'Hari ini hari ke-95 di tahun ini')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'Sab, Sabtu, S, Sab')
      })

      it('ordinal day of week', function() {
        var result = format(date, "'Hari' eo 'di minggu ini'", {
          locale: locale
        })
        assert(result === 'Hari ke-6 di minggu ini')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "'Jam' ho", { locale: locale })
        assert(result === 'Jam ke-10')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 AM, 10 AM, 10AM')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === 'tengah malam, tengah malam, tengah malam')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, "'Jam' h B", { locale: locale })
          assert(result === 'Jam 10 di waktu pagi')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "'Menit' mo", { locale: locale })
      assert(result === 'Menit ke-32')
    })

    it('ordinal second', function() {
      var result = format(date, "'Detik' so", { locale: locale })
      assert(result === 'Detik ke-0')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '5/4/1986')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '5 Apr 1986')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '5 April 1986')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === 'Sabtu, 5 April 1986')
      })

      it('short time', function() {
        var result = format(date, 'p', { locale: locale })
        assert(result === '10.32')
      })

      it('medium time', function() {
        var result = format(date, 'pp', { locale: locale })
        assert(result === '10.32')
      })

      it('short date + time', function() {
        var result = format(date, 'Pp', { locale: locale })
        assert(result === '5/4/1986, 10.32')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '5 Apr 1986, 10.32')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '5 April 1986 pukul 10.32')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === 'Sabtu, 5 April 1986 pukul 10.32')
      })
    })
  })
})
