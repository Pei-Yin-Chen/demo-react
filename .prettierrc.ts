module.exports = {
  printWidth: 200, // 每行的最大字符數，超過換行
  tabWidth: 2, // 設置每個縮進級別使用的空格數量
  useTabs: true, // 是否使用 tab 進行縮進
  trailingComma: "es5",
  semi: true, // 語句末尾添加分號
  singleQuote: true, // 是否使用單引號
  jsxSingleQuote: false, // JSX 是否使用雙引號
  bracketSpacing: true, // 是否在物件的花括號內側添加空格
  bracketSameLine: false, // 是否將 JSX 標籤的閉合括號放在同一行
  arrowParens: "always", // 箭頭函數參數是否加括號
  htmlWhitespaceSensitivity: "ignore", // 控制 HTML 中空格是否敏感
  endOfLine: "auto", // 控制行尾換行符類型 mac 和 linux 是\n  windows是\r\n
  singleAttributePerLine: true, // 控制 HTML、JSX、Vue 中的標籤屬性是否一行顯示一個
};
