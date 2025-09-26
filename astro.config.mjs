import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react()],
  site: "https://nacholz.com/",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
