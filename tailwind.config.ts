import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },


      keyframes: {
        'scroll-left-to-right': {
          to: { transform: 'translateX(0)' }, // Start the text off-screen to the right
          from: { transform: 'translateX(calc(-100% - 160px))' }, // End the text off-screen to the left
        },
      },
      animation: {
        'scroll-left-to-right': 'scroll-left-to-right 12s linear infinite',// Apply the scrolling animation
      },


    },
  },
  plugins: [],
} satisfies Config;
