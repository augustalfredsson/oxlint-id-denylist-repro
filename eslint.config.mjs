import globals from "globals";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "id-denylist": ["error", "Number", "String", "Boolean"],
        },
    },
];
