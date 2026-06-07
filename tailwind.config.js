/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts}",
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
        "site-gradient":
          "radial-gradient(125% 110% at 50% -10%, rgba(196, 232, 214, 0.9) 0%, rgba(217, 242, 230, 1) 58%), radial-gradient(78% 74% at 15% 15%, rgba(61, 130, 105, 0.12) 0%, rgba(61, 130, 105, 0) 64%), radial-gradient(72% 65% at 85% 20%, rgba(45, 90, 76, 0.1) 0%, rgba(45, 90, 76, 0) 66%), radial-gradient(62% 55% at 50% 95%, rgba(27, 77, 62, 0.05) 0%, rgba(217, 242, 230, 1) 70%)",
        "site-gradient-soft":
          "radial-gradient(110% 90% at 50% -20%, rgba(200, 235, 218, 0.85) 0%, rgba(217, 242, 230, 1) 56%), radial-gradient(74% 62% at 10% 15%, rgba(61, 130, 105, 0.1) 0%, rgba(61, 130, 105, 0) 66%), radial-gradient(66% 56% at 85% 25%, rgba(45, 90, 76, 0.08) 0%, rgba(45, 90, 76, 0) 66%), radial-gradient(72% 58% at 50% 95%, rgba(27, 77, 62, 0.04) 0%, rgba(217, 242, 230, 1) 74%)",
        "glass-mesh":
          "linear-gradient(125deg, rgba(45, 90, 76, 0.06) 0%, rgba(45, 90, 76, 0) 40%), linear-gradient(302deg, rgba(61, 130, 105, 0.05) 0%, rgba(61, 130, 105, 0) 36%), repeating-linear-gradient(115deg, rgba(27,77,62,0.03) 0, rgba(27,77,62,0.03) 1px, transparent 1px, transparent 110px)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(45, 90, 76, 0.04)",
        "glass-sm": "5px 5px 20px 0px rgba(45, 90, 76, 0.12)",
        "glass-glow": "0 0 0 1px rgba(45, 90, 76, 0.12), 0 18px 54px rgba(45, 90, 76, 0.1), 0 10px 30px rgba(61, 130, 105, 0.08)",
        "glass-card": "0 10px 30px rgba(27, 77, 62, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
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
