/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "star-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 240, 0.42) 0%, rgba(217,217,217, 0) 100%)",
        "site-gradient":
          "radial-gradient(120% 90% at 50% 0%, rgba(17, 28, 38, 0.7) 0%, rgba(27, 27, 27, 1) 55%), radial-gradient(70% 55% at 8% 82%, rgba(254, 190, 91, 0.22) 0%, rgba(254, 190, 91, 0) 72%), radial-gradient(70% 55% at 92% 82%, rgba(81, 143, 179, 0.2) 0%, rgba(81, 143, 179, 0) 74%)",
        "site-gradient-soft":
          "radial-gradient(95% 70% at 50% 0%, rgba(22, 32, 46, 0.62) 0%, rgba(27, 27, 27, 1) 60%), radial-gradient(65% 46% at 12% 75%, rgba(254, 190, 91, 0.2) 0%, rgba(254, 190, 91, 0) 70%), radial-gradient(62% 40% at 84% 78%, rgba(117, 163, 188, 0.16) 0%, rgba(117, 163, 188, 0) 72%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254,254,91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254,254,91, 0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 72s linear infinite",
        "spin-slow-reverse": "spin-reverse 72s linear infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
