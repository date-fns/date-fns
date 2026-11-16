import { Bench } from "tinybench";
import { tzOffset, tzScan } from "./src/index.ts";

const bench = new Bench({ time: 3000 });

const duration = {
  start: new Date("2020-01-01T00:00:00Z"),
  end: new Date("2020-12-31T00:00:00Z"),
};

bench.add("tzScan", () => {
  tzScan("America/New_York", duration);
});

bench.add("tzOffset", () => {
  tzOffset("America/New_York", duration.start);
});

await bench.warmup();
await bench.run();

console.table(bench.table());
