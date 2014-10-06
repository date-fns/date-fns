var endOfDay = require('../end_of_day');

describe('endOfDay', function() {
  it('returns date with time setted to 23:59:59.999', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = endOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* starts from 0 */, 2, 23, 59, 59, 999)
    );
  });

  it('accepts string', function() {
    var date = '2014-09-02T11:55:00';
    var result = endOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* starts from 0 */, 2, 23, 59, 59, 999)
    );
  });

  it('do not mutates original date', function() {
    var date = new Date('2014-09-02T11:55:00');
    endOfDay(date);
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
  });
});

