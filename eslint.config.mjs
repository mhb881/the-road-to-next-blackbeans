import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // 可选：新增更多忽略文件，减少 ESLint 检查范围
    "node_modules/**",
    "dist/**",
  ]),
  {
    rules: {
      "no-unused-vars": "warn",
      // 统一双引号
      quotes: ["warn", "double"],
      // 统一分号
      semi: ["warn", "always"],
      // console.log 警告
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
]);

export default eslintConfig;
