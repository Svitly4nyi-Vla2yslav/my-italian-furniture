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
