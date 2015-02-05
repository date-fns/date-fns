var isToday = require('../is_today');

describe('isToday', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* starts from 0 */, 25).getTime()
    );
  });

  afterEach(function() {
    this.clock.restore();
  });

  it('returns true if passed is weekend', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25));
    expect(result).to.be.true;
  });

  it('returns false if passed date is not today', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 26));
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).toString());
    expect(result).to.be.true;
  });

  it('allows to pass timestamp', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).getTime());
    expect(result).to.be.true;
  });
});

