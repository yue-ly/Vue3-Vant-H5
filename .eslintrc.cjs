module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier"  // eslint-config-prettier 缩写
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser", // 指定要使用的解析器
    // 给解析器传入一些其他的配置参数
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    // eslint-plugin- 可以省略
    "plugins": [
        "vue",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-var-requires": "off"
    }
}
