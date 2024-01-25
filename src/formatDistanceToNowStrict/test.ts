/* eslint-env mocha */

import assert from "node:assert";
import { afterEach, beforeEach, describe, it } from "vitest";
import sinon from "sinon";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceToNowStrict } from "./index.js";

describe("formatDistanceToNowStrict", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(1986, 3, 4, 10, 32, 0).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  describe("seconds", () => {
    describe("when no unit is set", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
        );
        assert(result === "0 seconds");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 5),
        );
        assert(result === "5 seconds");
      });
    });
  });

  describe("minutes", () => {
    it("1 minute", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 0));
      assert(result === "1 minute");
    });

    it("n minutes", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 35, 0));
      assert(result === "3 minutes");
    });
  });

  describe("hours", () => {
    it("1 hour", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 11, 32, 0));
      assert(result === "1 hour");
    });

    it("n hours", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 4, 13, 32, 0));
      assert(result === "3 hours");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 5, 10, 32, 0));
      assert(result === "1 day");
    });

    it("n days", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 3, 7, 10, 32, 0));
      assert(result === "3 days");
    });
  });

  describe("months", () => {
    it("1 month", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 4, 4, 10, 32, 0));
      assert(result === "1 month");
    });

    it("n months", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 6, 4, 10, 32, 0));
      assert(result === "3 months");
    });
  });

  describe("years", () => {
    it("1 year", () => {
      const result = formatDistanceToNowStrict(new Date(1987, 3, 4, 10, 32, 0));
      assert(result === "1 year");
    });

    it("n years", () => {
      const result = formatDistanceToNowStrict(new Date(1991, 3, 4, 10, 32, 0));
      assert(result === "5 years");
    });
  });

  describe("when the unit option is supplied", () => {
    describe("second", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "second" },
        );
        assert(result === "0 seconds");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 5),
          { unit: "second" },
        );
        assert(result === "5 seconds");
      });

      it("120 seconds", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 34, 0),
          { unit: "second" },
        );
        assert(result === "120 seconds");
      });
    });

    describe("minute", () => {
      it("0 minutes", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "minute" },
        );
        assert(result === "0 minutes");
      });

      it("5 minutes", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 37, 0),
          { unit: "minute" },
        );
        assert(result === "5 minutes");
      });

      it("120 minutes", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 12, 32, 0),
          { unit: "minute" },
        );
        assert(result === "120 minutes");
      });
    });

    describe("hour", () => {
      it("0 hours", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "hour" },
        );
        assert(result === "0 hours");
      });

      it("5 hours", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 15, 32, 0),
          { unit: "hour" },
        );
        assert(result === "5 hours");
      });

      it("48 hours", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 6, 10, 32, 0),
          { unit: "hour" },
        );
        assert(result === "48 hours");
      });
    });

    describe("day", () => {
      it("0 days", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "day" },
        );
        assert(result === "0 days");
      });

      it("5 days", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 9, 10, 32, 0),
          { unit: "day" },
        );
        assert(result === "5 days");
      });

      it("60 days", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 5, 3, 10, 32, 0),
          { unit: "day" },
        );
        assert(result === "60 days");
      });
    });
    describe("month", () => {
      it("0 months", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        assert(result === "0 months");
      });

      it("5 months", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 7, 4, 10, 32, 0),
          { unit: "month" },
        );
        assert(result === "4 months");
      });

      it("24 months", () => {
        const result = formatDistanceToNowStrict(
          new Date(1988, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        assert(result === "24 months");
      });
    });

    describe("year", () => {
      it("returns `1 year` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          new Date(1985, 3, 4, 10, 32, 0),
        );
        assert(result === "1 year");
      });

      it("returns `2 years` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          new Date(1984, 3, 4, 10, 32, 0),
        );
        assert(result === "2 years");
      });

      it("0 years", () => {
        const result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: "year" },
        );
        assert(result === "0 years");
      });

      it("5 years", () => {
        const result = formatDistanceToNowStrict(
          new Date(1991, 3, 4, 15, 32, 0),
          { unit: "year" },
        );
        assert(result === "5 years");
      });
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistanceToNowStrict(
      new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    assert(result === "1 hour");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 31, 35),
        {
          addSuffix: true,
        },
      );
      assert(result === "25 seconds ago");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
        },
      );
      assert(result === "in 1 hour");
    });
  });

  describe("when the roundingMethod option is supplied", () => {
    it('default is "round"', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 59),
      );
      assert(result === "2 minutes");
    });

    it('"floor"', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 59),
        {
          roundingMethod: "floor",
        },
      );
      assert(result === "1 minute");
    });

    it('"ceil"', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 1),
        {
          roundingMethod: "ceil",
        },
      );
      assert(result === "2 minutes");
    });

    it('"round" (down)', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 29),
        {
          roundingMethod: "round",
        },
      );
      assert(result === "1 minute");
    });

    it('"round" (up)', () => {
      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 33, 30),
        {
          roundingMethod: "round",
        },
      );
      assert(result === "2 minutes");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        assert(token === "xSeconds");
        assert(count === 15);
        assert(options!.addSuffix === true);
        assert(options!.comparison! < 0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistanceToNowStrict(
        new Date(1986, 3, 4, 10, 31, 45),
        {
          addSuffix: true,
          locale: customLocale,
        },
      );

      assert(result === "It works!");
    });
  });

  describe("edge cases", () => {
    it("detects unit correctly for short months", () => {
      const result = formatDistanceToNowStrict(new Date(1986, 2 /* Mar */, 7));
      assert(result === "28 days");
    });
  });

  it("throws `RangeError` if the date is `Invalid Date`", () => {
    assert.throws(
      formatDistanceToNowStrict.bind(null, new Date(NaN)),
      RangeError,
    );
  });
});
