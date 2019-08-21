module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": 2,
    "indent": [2, 2, { "SwitchCase": 1 }], // 默认2格缩进
    "linebreak-style": 0,
    "no-class-assign": 0, // 忽略不能重新定义class
    // "no-console": 1,
    "no-console": 0,
    "camelcase": [1, { "properties": "always" }],
    "no-unused-vars": 0,
    "no-trailing-spaces": 2, // 禁用尾行空白
    "key-spacing": 2, // 要求冒号后面有空格
    "keyword-spacing": 2, // 在关键字前后有空格
    // "comma-dangle": ["error", "never"], // 禁用拖尾逗号
    "comma-spacing": 2, // 要求逗号后有空格
    "space-infix-ops": ["error", { "int32Hint": true }], // 要求操作符有空格
    "object-curly-spacing": [1, 'always'], // 花括号中使用一致的空格
    "brace-style": [1, "1tbs", { "allowSingleLine": true }], // 大括号放在控制语句或声明语句同一行的位置
    "no-trailing-spaces": 1, // 禁止空行出现空格
    "no-whitespace-before-property": 2, // 禁止属性前有空白
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }], // 禁止函数圆括号之前有一个空格
    "eol-last": [1, 'always'], // 要求结尾有换行
    "spaced-comment": [1, 'always'], // 备注后面要有空格
    "func-call-spacing": ["error", "never"], // 禁止在函数标识符和其调用之间有空格
    "space-before-blocks": 1 // 要求语句块之前的空格
  }
};
