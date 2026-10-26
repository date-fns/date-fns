#!/usr/bin/env node

import fs from "node:fs";

const count = process.env.TEST_FILES ?? "1000";
if (!/^[1-9]\d*$/.test(count) || !Number.isSafeInteger(Number(count))) {
  throw new Error("TEST_FILES must be a positive safe integer");
}

const directory = new URL("./test/", import.meta.url);
fs.rmSync(directory, { recursive: true, force: true });
fs.mkdirSync(directory);

console.log(`Generating ${count} test files...`);
for (let i = 1; i <= Number(count); i++) {
  fs.writeFileSync(
    new URL(`${i}_test.ts`, directory),
    `import { addDays } from "date-fns";
import { expect, test } from "vitest";

test("adds ${i} days", () => {
  const result = addDays(Date.now(), ${i})
  expect(result).toBeInstanceOf(Date);
});
`,
  );
}
