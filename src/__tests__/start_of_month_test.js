var startOfMonth = require('../start_of_month');

describe('startOfMonth', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day in month', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = startOfMonth(date);
    expect(result).to.be.eql(new Date(2014, 8 /* starts from 0 */, 1));
  });

  it('accepts string', function() {
    var date = '2014-09-02T11:55:00';
    var result = startOfMonth(date);
    expect(result).to.be.eql(new Date(2014, 8 /* starts from 0 */, 1));
  });

  it('accepts timestamp', function() {
    var date = new Date('2014-09-02T11:55:00').getTime();
    var result = startOfMonth(date);
    expect(result).to.be.eql(new Date(2014, 8 /* starts from 0 */, 1));
  });

  it('does not mutate original date', function() {
    var date = new Date('2014-09-02T11:55:00');
    startOfMonth(date);
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
  });
});

