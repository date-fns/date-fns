import type { DocNode } from "@deno/doc";
import { describe, expect, it } from "vitest";
import { isExportNode, isModuleDocNode, repoPath } from "./index.js";

describe("isExportNode", () => {
  it("returns true for export nodes", () => {
    expect(isExportNode(fnNode)).toBe(true);
    expect(isExportNode(fnImportNode)).toBe(false);
  });

  it("returns false for module doc nodes", () => {
    expect(isExportNode(moduleDocNode)).toBe(false);
  });
});

describe("isModuleDocNode", () => {
  it("returns true for module doc nodes", () => {
    expect(isModuleDocNode(moduleDocNode)).toBe(true);
    expect(isModuleDocNode(fnNode)).toBe(false);
  });
});

describe("repoPath", () => {
  it("returns the correct repository path", () => {
    expect(repoPath("/wrkspc/date-fns", fnNode)).toBe(
      "src/eachWeekendOfInterval/index.ts",
    );
  });
});

//#region Utils

const fnNode: DocNode = {
  name: "eachWeekendOfInterval",
  isDefault: false,
  location: {
    filename: "file:///wrkspc/date-fns/src/eachWeekendOfInterval/index.ts",
    line: 58,
    col: 0,
    // @ts-expect-error: Deno doc types aren't accurate:
    // https://github.com/denoland/deno_doc/pull/737
    byteIndex: 1752,
  },
  declarationKind: "export",
  jsDoc: {
    tags: [
      {
        kind: "unsupported",
        value: "@name eachWeekendOfInterval",
      },
      {
        kind: "category",
        doc: "Interval Helpers",
      },
      {
        kind: "unsupported",
        value:
          "@summary List all the Saturdays and Sundays in the given date interval.\n",
      },
      {
        kind: "unsupported",
        value:
          "@description\nGet all the Saturdays and Sundays in the given date interval.\n",
      },
      {
        kind: "template",
        name: "IntervalType",
        doc: "- Interval type.",
      },
      {
        kind: "template",
        name: "Options",
        doc: "- Options type.\n",
      },
      {
        kind: "param",
        name: "interval",
        doc: "- The given interval",
      },
      {
        kind: "param",
        name: "options",
        doc: "- An object with options\n",
      },
      {
        kind: "return",
        doc: "An array containing all the Saturdays and Sundays\n",
      },
      {
        kind: "example",
        doc: "// Lists all Saturdays and Sundays in the given date interval\nconst result = eachWeekendOfInterval({\n  start: new Date(2018, 8, 17),\n  end: new Date(2018, 8, 30)\n})\n//=> [\n//   Sat Sep 22 2018 00:00:00,\n//   Sun Sep 23 2018 00:00:00,\n//   Sat Sep 29 2018 00:00:00,\n//   Sun Sep 30 2018 00:00:00\n// ]",
      },
    ],
  },
  kind: "function",
  functionDef: {
    params: [
      {
        kind: "identifier",
        name: "interval",
        optional: false,
        tsType: {
          repr: "IntervalType",
          kind: "typeRef",
          typeRef: {
            typeName: "IntervalType",
          },
        },
      },
      {
        kind: "identifier",
        name: "options",
        optional: true,
        tsType: {
          repr: "Options",
          kind: "typeRef",
          typeRef: {
            typeName: "Options",
          },
        },
      },
    ],
    returnType: {
      repr: "EachWeekendOfIntervalResult",
      kind: "typeRef",
      typeRef: {
        typeParams: [
          {
            repr: "IntervalType",
            kind: "typeRef",
            typeRef: {
              typeName: "IntervalType",
            },
          },
          {
            repr: "Options",
            kind: "typeRef",
            typeRef: {
              typeName: "Options",
            },
          },
        ],
        typeName: "EachWeekendOfIntervalResult",
      },
    },
    hasBody: true,
    isAsync: false,
    isGenerator: false,
    typeParams: [
      {
        name: "IntervalType",
        constraint: {
          repr: "Interval",
          kind: "typeRef",
          typeRef: {
            typeName: "Interval",
          },
        },
      },
      {
        name: "Options",
        constraint: {
          repr: "",
          kind: "union",
          union: [
            {
              repr: "EachWeekendOfIntervalOptions",
              kind: "typeRef",
              typeRef: {
                typeName: "EachWeekendOfIntervalOptions",
              },
            },
            {
              repr: "undefined",
              kind: "keyword",
              keyword: "undefined",
            },
          ],
        },
        default: {
          repr: "undefined",
          kind: "keyword",
          keyword: "undefined",
        },
      },
    ],
  },
};

const fnImportNode: DocNode = {
  name: "eachWeekendOfInterval",
  location: {
    filename: "file:///wrkspc/date-fns/src/eachWeekendOfYear/index.ts",
    line: 1,
    col: 0,
    // @ts-expect-error: Deno doc types aren't accurate:
    // https://github.com/denoland/deno_doc/pull/737
    byteIndex: 0,
  },
  declarationKind: "private",
  kind: "import",
  importDef: {
    src: "file:///wrkspc/date-fns/src/eachWeekendOfInterval/index.ts",
    imported: "eachWeekendOfInterval",
  },
};

const moduleDocNode: DocNode = {
  name: "",
  location: {
    filename: "file:///wrkspc/date-fns/src/constants/index.ts",
    line: 1,
    col: 0,
    // @ts-expect-error: Deno doc types aren't accurate:
    // https://github.com/denoland/deno_doc/pull/737
    byteIndex: 0,
  },
  declarationKind: "export",
  jsDoc: {
    tags: [
      {
        kind: "module",
        // @ts-expect-error: Deno doc types aren't accurate:
        // https://github.com/denoland/deno_doc/pull/737
        name: "constants",
      },
      {
        kind: "unsupported",
        value: "@summary Useful constants",
      },
      {
        kind: "unsupported",
        value:
          '@description\nCollection of useful date constants.\n\nThe constants could be imported from `date-fns/constants`:\n\n```ts\nimport { maxTime, minTime } from "date-fns/constants";\n\nfunction isAllowedTime(time) {\nreturn time <= maxTime && time >= minTime;\n}\n```',
      },
    ],
  },
  kind: "moduleDoc",
};

//#endregion
