module.exports = {
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "packages/**/tsconfig.json"
            }
        },
        "next": {
            "rootDir": "packages/dashboard"
        }
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "import/no-unresolved": "error",
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown"
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ],
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "import/newline-after-import": [
            "warn",
            {
                count: 2
            }
        ]
    }
};