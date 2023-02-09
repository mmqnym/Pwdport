/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ping: {
          "15%": { transform: "scale(0.9)", opacity: "1" },
          "30%": { transform: "scale(1.1)", opacity: "0.2" },
        },
        pulse: {
          "0%, 100%": {
            opacity: ".9",
          },
          "50%": {
            opacity: ".2",
          },
        },
      },
      animation: {
        "ping-slow": "ping 2.3s cubic-bezier(0, .3, .5, .8)",
        "pulse-slow": "pulse 3s cubic-bezier(.4, 0, .6, 1) infinite",
      },
    },
  },
  plugins: [],
};
