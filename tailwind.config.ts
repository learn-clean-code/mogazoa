import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-50": "#F1F1F5",
        "gray-100": "#9FA6B2",
        "gray-200": "#6E6E82",
        "gray-300": "#2E2E3A",
        "gray-400": "#21212A",
        "gray-500": "#17171C",
        yellow: "#FFC83C",
        green: "#05D58B",
        pink: "#FF2F9F",
        red: "#FF0000",
        indigo: "#5363FF",
        blue: "#5097FA",
        background: "#1C1C22",
        "input-background": "#252530",
        "input-border": "#353542",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
