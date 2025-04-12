import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, passthroughImageService } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

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
	},
});
