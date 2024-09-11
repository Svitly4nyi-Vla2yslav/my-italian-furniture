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
        primary: '#ff4500', // Основний колір
        'primary-dark': '#e03e00', // Темніший варіант для hover
        secondary: '#007acc', // Другорядний колір
        foreground: 'var(--foreground)', // Кастомний колір foreground
        background: 'var(--background)', // Кастомний колір background
      },
    },
  },
  plugins: [],
};
export default config;
