/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#111827",
        paper: "#f7f4ed",
        ember: "#f97316",
        mint: "#2dd4bf",
        cobalt: "#2563eb",
        plum: "#7c3aed",
      },
      boxShadow: {
        lift: "0 24px 80px rgba(17, 24, 39, 0.16)",
        line: "inset 0 0 0 1px rgba(17, 24, 39, 0.12)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -16px, 0) rotate(1deg)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.65)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatPanel: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        reveal: "reveal 0.8s cubic-bezier(.2,.8,.2,1) both",
        drift: "drift 8s ease-in-out infinite",
        sweep: "sweep 4s ease-in-out infinite",
        pulseLine: "pulseLine 2.8s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        floatPanel: "floatPanel 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
