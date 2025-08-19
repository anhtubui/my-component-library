import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      modules: { auto: /\.module\.css$/ },
      extract: "styles.css",
      inject: false,
      minimize: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist",
      exclude: [
        "**/*.stories.*",
        "**/*.test.*",
        "**/*.spec.*",
        "**/__tests__/**",
        "**/__stories__/**",
        "**/stories/**",
        "**/tests/**",
        "**/*.stories.tsx",
        "**/*.stories.ts",
        "**/*.stories.jsx",
        "**/*.stories.js",
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.test.jsx",
        "**/*.test.js",
        "**/*.spec.tsx",
        "**/*.spec.ts",
        "**/*.spec.jsx",
        "**/*.spec.js",
      ],
    }),
    babel({
      exclude: [
        "node_modules/**",
        "**/*.stories.*",
        "**/*.test.*",
        "**/*.spec.*",
        "**/__tests__/**",
        "**/__stories__/**",
        "**/stories/**",
        "**/tests/**",
      ],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    terser(),
  ],
};
