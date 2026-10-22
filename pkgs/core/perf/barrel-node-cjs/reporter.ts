import { writeFileSync } from "node:fs";
import type { Reporter, TestModule } from "vitest/node";

export default class ImportTimeReporter implements Reporter {
  onTestRunEnd(modules: ReadonlyArray<TestModule>) {
    writeFileSync(
      process.env.BARREL_NODE_REPORT!,
      JSON.stringify({
        runId: process.env.BARREL_NODE_RUN_ID,
        moduleCount: modules.length,
        testCount: modules.reduce(
          (total, module) =>
            total + Array.from(module.children.allTests()).length,
          0,
        ),
        workerCount: new Set(
          modules.map((module) => module.diagnostic().concurrencyId),
        ).size,
        collectDuration: modules.reduce(
          (total, module) => total + module.diagnostic().collectDuration,
          0,
        ),
        files: modules.map((module) => ({
          path: module.moduleId,
          ...module.diagnostic(),
        })),
      }),
    );
  }
}
