import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shade: {
          100: "#D9D9D9",
          200: "#A3A3A3",
          300: "#525252",
        },
        base: "#FFFFFF",
        second: "#18181B",
        primary: "#0284C7",
        whatsapp: "#25D366"
      }
    },
  },
  plugins: [],
};
export default config;
