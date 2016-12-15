var assert = require('power-assert')
var translations = require('./')

describe('ja translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      MMMM: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      dd: ['日', '月', '火', '水', '木', '金', '土'],
      ddd: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜'],
      dddd: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      A: ['午前', '午後'],
      a: ['午前', '午後'],
      aa: ['午前', '午後']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
