var distanceOfTimeInWords = require('../distance_of_time_in_words');

describe('distanceOfTimeInWords', function() {
  it('accepts strings as a dates', function() {
    var result = distanceOfTimeInWords(
      new Date(1986, 3, 4, 10, 32, 0).toISOString(),
      new Date(1986, 3, 4, 11, 32, 0).toISOString()
    );
    expect(result).to.be.equal('about 1 hour');
  });

  describe('seconds', function() {
    context('when includeSeconds option is true', function() {
      it('less than 5 seconds', function() {
        var result = distanceOfTimeInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3), true
        );
        expect(result).to.be.equal('less than 5 seconds');
      });

      it('less than 10 seconds', function() {
        var result = distanceOfTimeInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7), true
        );
        expect(result).to.be.equal('less than 10 seconds');
      });

      it('less than 20 seconds', function() {
        var result = distanceOfTimeInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15), true
        );
        expect(result).to.be.equal('less than 20 seconds');
      });

      it('half a minute', function() {
        var result = distanceOfTimeInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25), true
        );
        expect(result).to.be.equal('half a minute');
      });

      it('less than a minute', function() {
        var result = distanceOfTimeInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45), true
        );
        expect(result).to.be.equal('less than a minute');
      });

      it('1 minute', function() {
        var result = distanceOfTimeInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 0), true
        );
        expect(result).to.be.equal('1 minute');
      });
    });
  });

  describe('minutes', function() {
    it('less than a minute', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20)
      );
      expect(result).to.be.equal('less than a minute');
    });

    it('1 minute', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50)
      );
      expect(result).to.be.equal('1 minute');
    });

    it('n minutes', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50)
      );
      expect(result).to.be.equal('3 minutes');
    });
  });

  describe('hours', function() {
    it('about 1 hour', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0)
      );
      expect(result).to.be.equal('about 1 hour');
    });

    it('about n hours', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0)
      );
      expect(result).to.be.equal('about 3 hours');
    });
  });

  describe('days', function() {
    it('1 day', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0)
      );
      expect(result).to.be.equal('1 day');
    });

    it('n days', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0)
      );
      expect(result).to.be.equal('3 days');
    });
  });

  describe('months', function() {
    it('about 1 month', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('about 1 month');
    });

    it('n months', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('3 months');
    });
  });

  describe('years', function() {
    it('about 1 year', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('about 1 year');
    });

    it('over 1 year', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('over 1 year');
    });

    it('almost n years', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('almost 3 years');
    });

    it('about n years', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('about 3 years');
    });

    it('over n years', function() {
      var result = distanceOfTimeInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0)
      );
      expect(result).to.be.equal('over 3 years');
    });
  });
});

