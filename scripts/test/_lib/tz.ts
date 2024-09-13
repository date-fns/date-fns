import { $ } from "bun";
import { availableParallelism } from "node:os";
import { promiseQueue } from "./queue.js";

export async function testTimeZone(timeZone: string) {
  try {
    await $`TZ=${timeZone} bun test ./src/**/test.ts`.quiet();
  } catch (err: any) {
    console.log(err.stderr.toString());
    console.log(`⛔ Tests for the time zone ${timeZone}`);
    process.exit(err.exitCode);
  }

  console.log(`✅ Tests for the time zone ${timeZone}`);
}

export function testTimeZones(timeZones: string[]) {
  return promiseQueue(
    timeZones.map((timeZone) => () => testTimeZone(timeZone)),
    availableParallelism(),
  );
}
