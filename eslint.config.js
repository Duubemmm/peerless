const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                require: "readonly",
                module: "readonly",
                process: "readonly",
                console: "readonly",
                __dirname: "readonly",
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
    {
        ignores: ["node_modules/", "coverage/"],
    },
];


// ```js
// const js = require("@eslint/js");

// module.exports = [
//   js.configs.recommended,
//   {
//     ignores: ["node_modules/**", "coverage/**"],
//   },
//   {
//     files: ["**/*.js"],
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "commonjs",
//     },
//     rules: {
//       "no-console": "off",
//     },
//   },
// ];
// ```
