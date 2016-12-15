var assert = require('power-assert')
var translations = require('./')

describe('id translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
      MMMM: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      dd: ['Mi', 'Sn', 'Sl', 'Ra', 'Ka', 'Ju', 'Sa'],
      ddd: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
      dddd: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
