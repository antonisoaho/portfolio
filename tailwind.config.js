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
        panel: "rgb(var(--panel))",
        cyan: "rgb(var(--cyan))",
        violet: "rgb(var(--violet))",
      },
      backgroundImage: {
        "star-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 240, 0.42) 0%, rgba(217,217,217, 0) 100%)",
        "site-gradient":
          "radial-gradient(125% 110% at 50% -10%, rgba(36, 94, 164, 0.42) 0%, rgba(14, 18, 30, 0.96) 58%), radial-gradient(78% 74% at 15% 15%, rgba(38, 191, 255, 0.24) 0%, rgba(38, 191, 255, 0) 64%), radial-gradient(72% 65% at 85% 20%, rgba(130, 111, 255, 0.24) 0%, rgba(130, 111, 255, 0) 66%), radial-gradient(62% 55% at 50% 95%, rgba(6, 11, 22, 0.95) 0%, rgba(6, 11, 22, 1) 70%)",
        "site-gradient-soft":
          "radial-gradient(110% 90% at 50% -20%, rgba(34, 88, 154, 0.34) 0%, rgba(11, 16, 29, 0.96) 56%), radial-gradient(74% 62% at 10% 15%, rgba(52, 202, 255, 0.22) 0%, rgba(52, 202, 255, 0) 66%), radial-gradient(66% 56% at 85% 25%, rgba(139, 104, 255, 0.2) 0%, rgba(139, 104, 255, 0) 66%), radial-gradient(72% 58% at 50% 95%, rgba(8, 12, 22, 0.92) 0%, rgba(8, 12, 22, 1) 74%)",
        "glass-mesh":
          "linear-gradient(125deg, rgba(80, 217, 255, 0.14) 0%, rgba(80, 217, 255, 0) 40%), linear-gradient(302deg, rgba(142, 107, 255, 0.14) 0%, rgba(142, 107, 255, 0) 36%), repeating-linear-gradient(115deg, rgba(255,255,255,0.045) 0, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 110px)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254,254,91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254,254,91, 0.3)",
        "glass-glow": "0 0 0 1px rgba(255,255,255,0.24), 0 18px 54px rgba(20, 145, 255, 0.22), 0 10px 30px rgba(87, 65, 190, 0.28)",
        "glass-card": "0 10px 30px rgba(5, 10, 22, 0.52), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
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
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
