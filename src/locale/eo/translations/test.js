var assert = require('power-assert')
var translations = require('./')

describe('eo translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec'],
      MMMM: ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro'],
      dd: ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa'],
      ddd: ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab'],
      dddd: ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato'],
      A: ['A.T.M.', 'P.T.M.'],
      a: ['a.t.m.', 'p.t.m.'],
      aa: ['antaŭtagmeze', 'posttagmeze']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
