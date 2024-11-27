import { afterEach, describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { isDate } from "./index.js";

describe("isDate", () => {
  it("returns true if the given value is a date object", () => {
    expect(isDate(new Date())).toBe(true);
  });

  it("returns true if the given value is an Invalid Date", () => {
    expect(isDate(new Date(NaN))).toBe(true);
  });

  it("ensures that the passed argument is an instance of Date", () => {
    const date: unknown = new Date();

    if (isDate(date)) {
      assertType<Date>(date);
    } else {
      assertType<unknown>(date);
    }
  });

  describe("with date passed from another iframe", () => {
    // If in the browser, run the test in an iframe
    if (typeof window !== "undefined") {
      afterEach(() => {
        const iframe = document.getElementById("iframe");
        iframe && iframe.remove();
      });

      it("returns true for a date passed from another iframe", () =>
        new Promise((resolve) => {
          const iframe = document.createElement("iframe");
          iframe.id = "iframe";
          iframe.addEventListener("load", () => {
            execScript("window.date = new Date()");
            expect(isDate((iframe.contentWindow as any).date)).toBe(true);
            resolve(void 0);
          });
          if (!document.body) throw new Error("document.body is not defined");
          document.body.appendChild(iframe);
        }));
    } else {
      it.skip("returns true for a date passed from another iframe", () => {});
    }

    function execScript(scriptText: string) {
      const iframe = document.querySelector("iframe#iframe");
      if (!iframe || !(iframe instanceof HTMLIFrameElement)) {
        throw new Error("Can't execute the script because iframe isn't found");
      }
      const doc = iframe.contentDocument!;
      const script = doc.createElement("script");
      script.innerText = scriptText;
      // @ts-expect-error - We're messing with iframes
      if (!(doc.body instanceof iframe.contentWindow.HTMLBodyElement)) {
        throw new Error(
          "Can't execute the script because iframe does not have body",
        );
      }
      doc.body.append(script);
    }
  });

  it("returns false if the given value is not a date object", () => {
    expect(!isDate(new Date().getTime())).toBe(true);
    expect(!isDate(new Date().toISOString())).toBe(true);
    expect(!isDate({})).toBe(true);
    expect(!isDate(null)).toBe(true);
    expect(!isDate(0)).toBe(true);
  });
});
