import { expect, it, vi } from "vitest";

it(
  "only reads the clock when no date is supplied",
  { concurrent: false },
  async () => {
    // Import after replacing Date: the superclass is captured during evaluation.
    // Reset again on exit so later files cannot reuse the instrumented classes.
    vi.resetModules();
    const NativeDate = Date;
    const timestamp = NativeDate.UTC(2024, 5, 1, 10);
    const now = NativeDate.UTC(2026, 0, 2, 3, 4, 5);
    let reads = 0;
    vi.stubGlobal(
      "Date",
      new Proxy(NativeDate, {
        construct(target, args, newTarget) {
          if (args.length === 0) reads++;
          return Reflect.construct(target, args, newTarget);
        },
        get(target, property, receiver) {
          if (property === "now")
            return () => {
              reads++;
              return now;
            };
          return Reflect.get(target, property, receiver);
        },
      }),
    );

    try {
      const { TZDate } = await import("../src/date/index.js");
      const { TZDateMini } = await import("../src/date/mini.js");
      const { tz } = await import("../src/tz/index.ts");

      for (const Class of [TZDate, TZDateMini]) {
        for (const [args, expected] of [
          [[timestamp, "Europe/Stockholm"], timestamp],
          [["2024-06-01T10:00:00Z", "Europe/Stockholm"], timestamp],
          [[new NativeDate(timestamp), "Europe/Stockholm"], timestamp],
          [[2024, 5, 1, 12, 0, 0, "Europe/Stockholm"], timestamp],
          [[undefined, "Europe/Stockholm"], NaN],
          [[NaN, "Europe/Stockholm"], NaN],
          [[timestamp, "Invalid/Zone"], NaN],
        ] as [unknown[], number][]) {
          reads = 0;
          const date = Reflect.construct(Class, args);
          expect(+date).toBe(expected);
          expect(reads).toBe(0);
        }

        reads = 0;
        expect(+Class.tz("Europe/Stockholm", timestamp)).toBe(timestamp);
        expect(reads).toBe(0);

        reads = 0;
        expect(+new Class()).toBe(now);
        expect(reads).toBe(1);

        reads = 0;
        expect(+Class.tz("Europe/Stockholm")).toBe(now);
        expect(reads).toBe(1);
      }

      reads = 0;
      expect(+tz("Europe/Stockholm")(timestamp)).toBe(timestamp);
      expect(reads).toBe(0);
    } finally {
      vi.unstubAllGlobals();
      vi.resetModules();
    }
  },
);
