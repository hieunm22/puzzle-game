import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: ["build/**", "node_modules/**"]
	},
	{
		files: ["src/**/*.{js,ts,tsx}"],
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: { jsx: true }
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin
		},
		rules: {
			// possible errors
			"no-console": "error",
			"no-constant-condition": "off",
			"no-control-regex": "warn",
			"no-debugger": "error",
			"no-dupe-args": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-empty": "warn",
			"no-empty-character-class": "error",
			"no-ex-assign": "error",
			"no-extra-boolean-cast": "error",
			"no-func-assign": "error",
			"no-inner-declarations": "error",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "error",
			"no-unsafe-negation": "error",
			"no-obj-calls": "error",
			"no-regex-spaces": "error",
			"no-sparse-arrays": "error",
			"no-unreachable": "error",
			"use-isnan": "error",
			"valid-typeof": "error",

			// best practices
			"consistent-return": "error",
			curly: "error",
			"default-case": "error",
			"dot-notation": "error",
			eqeqeq: "error",
			"guard-for-in": "error",
			"no-alert": "error",
			"no-caller": "error",
			"no-div-regex": "error",
			"no-else-return": "error",
			"no-eq-null": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-fallthrough": "error",
			"no-floating-decimal": "error",
			"no-implied-eval": "error",
			"no-iterator": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-loop-func": "error",
			"no-multi-spaces": "error",
			"no-multi-str": "error",
			"no-global-assign": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-octal": "error",
			"no-octal-escape": "error",
			"no-param-reassign": "error",
			"no-proto": "error",
			"no-redeclare": "error",
			"no-return-assign": "error",
			"no-script-url": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-throw-literal": "error",
			"no-unused-expressions": "error",
			"no-void": "error",
			"no-with": "error",
			radix: "error",
			"vars-on-top": "error",
			"wrap-iife": "error",
			yoda: "error",

			// variables
			"no-delete-var": "error",
			"no-label-var": "error",
			"no-shadow-restricted-names": "error",
			"no-undef": "error",
			"no-undef-init": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" }
			],

			// stylistic issues
			camelcase: "warn",
			"comma-spacing": ["warn", { before: false, after: true }],
			"comma-style": ["warn", "last"],
			"consistent-this": ["warn", "_this"],
			"eol-last": "warn",
			"key-spacing": ["warn", { beforeColon: false, afterColon: true }],
			"max-nested-callbacks": ["warn", 3],
			"new-cap": ["warn", { newIsCap: true, capIsNew: false }],
			"new-parens": "warn",
			"no-array-constructor": "warn",
			"no-lonely-if": "warn",
			"no-mixed-spaces-and-tabs": "warn",
			"no-multiple-empty-lines": ["warn", { max: 2 }],
			"no-nested-ternary": "warn",
			"no-object-constructor": "warn",
			"no-trailing-spaces": "warn",
			"no-underscore-dangle": "warn",
			"one-var": ["warn", "never"],
			"operator-assignment": ["warn", "never"],
			"padded-blocks": ["warn", "never"],
			"semi-spacing": ["warn", { before: false, after: true }],
			"space-before-blocks": ["warn", "always"],
			"max-lines": ["error", 200],
			"space-before-function-paren": [
				"warn",
				{ anonymous: "always", named: "never" }
			],
			"space-in-parens": ["warn", "never"],
			"space-infix-ops": "error",
			"keyword-spacing": ["error", { before: true, after: true }],
			"space-unary-ops": ["warn", { words: true, nonwords: false }],
			"spaced-comment": ["warn", "always", { markers: ["/"] }],

			// ecmascript 6
			"no-var": "error",
			"generator-star-spacing": ["error", "before"],

			// legacy
			"max-depth": ["error", 3],
			"max-len": ["error", 100, 2],
			"max-params": ["error", 5]
		}
	},
	{
		// the compiler already reports undefined names, and knows about type-only globals
		files: ["src/**/*.{ts,tsx}"],
		rules: {
			"no-undef": "off",
			"no-redeclare": "off"
		}
	}
)
