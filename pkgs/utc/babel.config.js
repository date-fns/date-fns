module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-modules-commonjs",
      { importInterop: "node", loose: true, strict: true },
    ],
    ["babel-plugin-add-import-extension", { extension: "js" }],
  ],
};
