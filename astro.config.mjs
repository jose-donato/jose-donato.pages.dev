import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

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
	adapter: cloudflare({
		imageService: "compile",
	}),
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
		build: {
			minify: false,
		},
	},
	integrations: [mdx()],
});
