var assert = require('power-assert')
var translations = require('./')

describe('de translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      MMMM: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      dd: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      ddd: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
      dddd: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
