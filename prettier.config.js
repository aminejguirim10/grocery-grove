/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  tailwindFunctions: ["clsx", "cn", "twmerge", "cva"],
  plugins: ["prettier-plugin-tailwindcss"],
}
