import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://feeeyli.github.io",
  integrations: [UnoCSS({
    injectReset: true
  }), mdx()]
});