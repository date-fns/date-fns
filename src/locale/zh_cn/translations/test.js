var assert = require('power-assert')
var translations = require('./')

describe('zh_cn translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      MMMM: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      dd: ['日', '一', '二', '三', '四', '五', '六'],
      ddd: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      dddd: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['上午', '下午']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
