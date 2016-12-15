var assert = require('power-assert')
var translations = require('./')

describe('pl translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
      MMMM: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
      dd: ['nd.', 'pn.', 'wt.', 'śr.', 'cz.', 'pt.', 'sob.'],
      ddd: ['ndz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
      dddd: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
      A: ['w nocy', 'rano', 'po południu', 'wieczorem']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
