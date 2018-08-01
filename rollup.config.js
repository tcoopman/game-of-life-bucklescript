import node_resolve from "rollup-plugin-node-resolve";

export default {
  entry: "./lib/es6/src/Main.js",
  format: "iife",
  dest: "./release/main-bundled.js",
  plugins: [node_resolve({ module: true, browser: true })],
  moduleName: "gol"
};
