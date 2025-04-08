import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modal_views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease",
        popIn: "popIn 0.5s forwards",
        fadeInLeft: "fadeInLeft 0.7s ease",
      },
      boxShadow: {
        custom: "0px 24px 48px -12px #10182840", // Custom shadow
        "custom-sm": "0px 8px 8px -4px #10182808",
        "custom-lg": "0px 20px 24px -4px #10182814",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#121212",
        accent: "#AA8B00",
        accent2: "#FFF6CC",
        accent3: "#FFD100",
        accent4: "#EBF6D0",
      },
      screens: {
        xxxs: "380px",
        xxs: "420px",
        xs: "480px",
        xxl: "1400px",
        xxxl: "1600px",
        xxxxl: "1800px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
} satisfies Config;
