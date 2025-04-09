// rollup.config.mjs
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import pkg from "./package.json" assert { type: "json" };
import x from "tslib";
console.log("✅ Rollup config loaded",x);

// ⬇️ ESM-safe version of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ESM-safe path to tslib
import path from "path";
const tslibPath = path.resolve(
  __dirname,
  "node_modules",
  "tslib",
  "tslib.es6.js"
);

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
      tslib: tslibPath, // 👈 ESM-safe way to resolve tslib
    }),
  ],
};
