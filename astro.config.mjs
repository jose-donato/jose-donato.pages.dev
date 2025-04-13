import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, passthroughImageService } from "astro/config";

export default defineConfig({
	env: {
		schema: {
			GOOGLE_API_KEY: envField.string({
				access: "secret",
				context: "server",
			}),
		},
	},
	output: "server",
	adapter: cloudflare(),
	image: {
		service: passthroughImageService(),
	},
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				os: "rollup-plugin-node-polyfills/polyfills/os",
				fs: "rollup-plugin-node-polyfills/polyfills/fs",
			},
		},
	},
});
