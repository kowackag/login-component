/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		coverage: {
			provider: "v8", // or 'v8'
			exclude: [
				"**/postcss.config.js",
				"**/prettier.config.js",
				"**/tailwind.config.ts",
				"**/.eslintrc.cjs",
				"**/src/main.tsx",
			],
		},
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
