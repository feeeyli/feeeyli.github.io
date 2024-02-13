import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      text: "#070906",
      background: "#fcfdfb",
      primary: "#70c54e",
      secondary: "#a3e588",
      accent: "#82eb57",
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        sans: "Noto Sans",
      },
    }),
  ],
});
