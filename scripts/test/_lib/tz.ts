import { $ } from "bun";
import { availableParallelism } from "node:os";
import { promiseQueue } from "./queue";

export async function testTimeZone(timeZone: string) {
  const { stderr, exitCode } =
    await $`TZ=${timeZone} bun test ./src/**/test.ts`.quiet();

  if (exitCode) {
    console.log(stderr.toString());
    console.log(`⛔ Tests for the time zone ${timeZone}`);
    process.exit(exitCode);
  }

  console.log(`✅ Tests for the time zone ${timeZone}`);
}

export function testTimeZones(timeZones: string[]) {
  return promiseQueue(
    timeZones.map((timeZone) => () => testTimeZone(timeZone)),
    availableParallelism(),
  );
}
