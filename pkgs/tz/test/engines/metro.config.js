// oxlint-disable-next-line typescript/no-require-imports -- Metro needs CommonJS
const path = require("path");

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../../../..");

module.exports = {
  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
      path.resolve(monorepoRoot, "node_modules"),
    ],
  },
  watchFolders: [monorepoRoot],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
      },
    }),
  },
};
