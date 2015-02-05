var isSameWeek = require('../is_same_week');

describe('isSameWeek', function() {
  it('returns true if passed dates belongs to the same week', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    );
    expect(result).to.be.true;
  });

  it('returns false if passed dates do not belongs to the same week', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    );
    expect(result).to.be.false;
  });

  it('allow to specify when week starts', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      1
    );
    expect(result).to.be.false;
  });

  it('allows to pass string', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 4).toISOString()
    );
    expect(result).to.be.true;
  });

  it('allows to pass timestamp', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    );
    expect(result).to.be.true;
  });
});

