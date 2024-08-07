import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://feeeyli.github.io",
  integrations: [mdx(), react(), tailwind()]
});