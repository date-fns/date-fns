/* eslint-env mocha */

import assert from 'assert'
import locale from './index'
import parse from '../../parse'

const refYear = 1986
const refMonth = 3 /* Apr */
const referenceDate = new Date(refYear, refMonth, 4, 10, 32, 0, 900)
const INVALID_DATE = 'Invalid Date'

const assertISODate = (
  input: string,
  format: string,
  expected: string | Date
) => {
  const actual = parse(input, format, referenceDate, { locale })
  if (expected === INVALID_DATE) {
    assert.strictEqual(actual.toString(), INVALID_DATE)
    return
  }
  assert.deepStrictEqual(actual, new Date(expected))
}

// ===========================================================================

describe('locale/is parse', () => {
  ;[1].forEach((d) => {
    const format = 'do'
    ;[`${d}`, `${d}.`, `0${d}`, `0${d}.`].forEach((variant) => {
      it(`"${format}" format accepts "${variant}"`, () => {
        assertISODate(variant, format, new Date(refYear, refMonth, d))
      })
    })
  })
  ;['MMM', 'MMMM', 'MMMMM', 'LLL', 'LLLL', 'LLLLL'].forEach((format) => {
    ;[
      ['ja', 'jan', 'jan.', 'jaNúar'],
      ['f', 'Feb', 'feb.', 'febrúar'],
      ['mr', 'mar', 'mar.', 'mars'],
      ['a', 'apr', 'apr.', 'apríl'],
      ['mí', 'maí', 'maí.'],
      ['jn', 'jún', 'jún.', 'júní'],
      ['jl', 'júl', 'júl.', 'júlí'],
      ['á', 'ágú', 'ágú.', 'ágúst'],
      ['s', 'sep', 'sep.', 'sept', 'sept.', 'september'],
      ['o', 'okt', 'okt.', 'október'],
      ['n', 'nóv', 'nóv.', 'nóvember'],
      ['d', 'des', 'des.', 'desember'],
    ].forEach((variants, monthIdx) => {
      variants.forEach((variant) => {
        it(`"${format}" format accepts "${variant}"`, () => {
          assertISODate(variant, format, new Date(refYear, monthIdx))
        })
      })
    })
  })
  ;['GGG', 'GGGG', 'GGGGG'].forEach((format) => {
    ;[
      ['fk', 'f.k.', 'f. k.', 'f.kr.', 'F.KR', 'f. kr.', 'fkr.', 'Fyrir krist'],
      ['ek', 'e.k.', 'e. k.', 'e.kr.', 'E.KR', 'e. kr.', 'ekr.', 'Eftir krist'],
    ].forEach((variants, eraIdx) => {
      const year = eraIdx ? 1000 : -999
      variants.forEach((variant) => {
        it(`"${format}" format accepts "${variant}"`, () => {
          assertISODate(`1000 ${variant}`, `yyyy ${format}`, new Date(year, 0))
        })
      })
    })
  })
  ;['QQQ', 'QQQQ', 'QQQQQ'].forEach((format) => {
    ;[1, 2, 3, 4].forEach((q, quarterIdx) => {
      if (q !== 3) return // only test Q3
      ;[
        `${q}`,
        `F${q}`,
        `${q}F`,
        `${q}F.`,
        `${q}.F`,
        `${q}.F.`,
        `${q}. F`,
        `${q}. F.`,
        `${q}. fjórðungur`,
        `${q}. FJÓRÐUNGI`,
        `${q}. fjórðungs`,
        `${q}. fjórðung`,
        `${q}. ársfjórðungur`,
        `${q}. ársfjórðungi`,
        `${q}. ársfjórðungs`,
        `${q}. ársfjórðung`,
      ].forEach((variant) => {
        it(`"${format}" format accepts "${variant}"`, () => {
          assertISODate(
            `${refYear} ${variant}`,
            `yyyy ${format}`,
            new Date(refYear, quarterIdx * 3)
          )
        })
      })
    })
  })
  ;['EEE', 'EEEE', 'EEEEE', 'EEEEEE'].forEach((format) => {
    ;[
      ['s', 'su', 'su.', 'sun', 'sun.', 'sunnud.', 'sunnudagur'],
      ['má', 'má', 'má.', 'mán', 'mán.', 'mánud.', 'mánudagur'],
      ['þ', 'þr', 'þr.', 'þri', 'þri.', 'þriðjud.', 'þriðjudagur'],
      [
        'mi',
        'mi',
        'mi.',
        'mið',
        'mið.',
        'miðvd',
        'miðvd.',
        'miðvikud.',
        'miðvikudagur',
      ],
      ['fi', 'fi', 'fi.', 'fim', 'fim.', 'fimmtud.', 'fimmtudagur'],
      ['fö', 'fö', 'fö.', 'fös', 'fös.', 'föstud.', 'föstudagur'],
      ['l', 'la', 'la.', 'lau', 'lau.', 'laugard.', 'laugardagur'],
    ].forEach((variants, wdayIdx) => {
      const date = referenceDate.getDate() + wdayIdx
      const expectedDate = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        date
      )

      variants.forEach((variant) => {
        it(`"${format}" format accepts "${variant}"`, () => {
          assertISODate(`${date}. ${variant}`, `dd. ${format}`, expectedDate)
        })
      })
    })
  })

  // TODO: add tests for flexible (and correct) parsing of DayPeriodPatterns
  // - 'bb', 'bbb', 'bbbb'
  // - 'BBB', 'BBBB', 'BBBBB'
})
