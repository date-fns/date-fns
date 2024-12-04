import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

const entryPoints = {
  example: "./example.js",
  fp: "./fp.js",
  misc: "./misc.js",
  minimal: "./minimal.js",
  constants: "./constants.js",
};

const configurations = Object.keys(entryPoints).map((name) => {
  return {
    input: entryPoints[name],
    output: {
      file: `dist/${name}.js`,
      format: "iife",
      name: name,
    },
    plugins: [resolve(), commonjs(), terser()],
  };
});

export default configurations;
