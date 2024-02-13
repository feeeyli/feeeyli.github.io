import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

export default defineConfig({
  site: "https://feeeyli.github.io",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
