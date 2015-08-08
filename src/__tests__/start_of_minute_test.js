var startOfMinute = require('../start_of_minute');

describe('startOfMinute', function () {
  it('returns date with time setted to first millisecond of minute', function () {
    var date = new Date(2014, 11, 1, 22, 15, 45, 400);
    var result = startOfMinute(date);
    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 15));
  });

  it('supports string as a date', function () {
    var result = startOfMinute('2014-12-01T13:20:30.456Z');
    expect(result).to.be.eql(new Date(Date.UTC(2014, 11, 1, 13, 20)));
  });

  it('supports timestamp as a date', function () {
    var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400).getTime());
    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 15));
  });

  it('does not mutate original date', function () {
    var date = new Date(2014, 11, 1, 22, 15, 45, 400);
    startOfMinute(date);
    expect(date).to.be.eql(new Date(2014, 11, 1, 22, 15, 45, 400));
  });
});

