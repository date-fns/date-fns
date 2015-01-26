var subHours = require('../sub_hours');

describe('subHours', function() {
  it('subtracts numbers of passed hours', function() {
    var result = subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2);
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it('accepts string', function() {
    var result = subHours(
      new Date(2014, 6 /* Jul */, 12, 1, 0).toISOString(), 26
    );
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it('do not mutates original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0);
    subHours(date, 10);
    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });
});