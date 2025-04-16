painpoints
- [ ] no shadcn/ui
- [ ] migrating to cloudflare pages was hard 
     - [ ] due to node:fs and node:path and node:os, had to polyfill due to svgomg tool but then it broke collections. ended up polyfilling only the necessary and nodePolyfills({
				include: ["os", "fs"],
				protocolImports: false,
			}),

- [ ] no live reload on dev-wrangler?


- [ ] adopted posthog - https://posthog.com/docs/libraries/astro
- [ ] 
