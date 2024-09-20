import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [" Regul", "sans-serif"],
      },
      animation: {
        textAnimate: "textAnimate 5s infinite alternate",
      },
      keyframes: {
        textAnimate: {
          "0%": {
            "stroke-dasharray": "0 50%",
            "stroke-dashoffset": "20%",
            fill: "rgb(31, 31, 31, 0.3)",
          },
          "100%": {
            "stroke-dasharray": "50% 0",
            "stroke-dashoffset": "-20%",
            fill: "rgb(255, 255, 255, 0.9)",
          },
        },
      },
      colors: {
        primary: 'white', // Основний колір
        'primary-dark': 'gray', // Темніший варіант для hover
        secondary: '#007acc', // Другорядний колір
        foreground: 'var(--foreground)', // Кастомний колір foreground
        background: 'var(--background)', // Кастомний колір background
      },
    },
  },
  plugins: [],
};
export default config;
