import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [tailwind(), robotsTxt(), react(), cloudflare()],
  site: "https://nacholz.com/",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
