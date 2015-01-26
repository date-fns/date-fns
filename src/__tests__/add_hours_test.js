var addHours = require('../add_hours');

describe('addHours', function() {
  it('adds numbers of passed hours', function() {
    var result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2);
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 11, 1, 0));
  });

  it('accepts string', function() {
    var result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).toISOString(), 26
    );
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 12, 1, 0));
  });

  it('do not mutates original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0);
    addHours(date, 10);
    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });
});

