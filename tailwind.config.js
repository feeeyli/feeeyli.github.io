import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#070906",
        background: "#fcfdfb",
        primary: "#70c54e",
        secondary: "#a3e588",
        accent: "#82eb57",
      },
    },
    fontFamily: {
      sans: ["Noto Sans Variable", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
