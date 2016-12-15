var assert = require('power-assert')
var translations = require('./')

describe('tr translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      MMMM: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      dd: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
      ddd: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
      dddd: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      A: ['ÖÖ', 'ÖS'],
      a: ['öö', 'ös'],
      aa: ['ö.ö.', 'ö.s.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
