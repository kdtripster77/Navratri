/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#080B1F",
          deep: "#05071A",
          raised: "#0E1230",
        },
        moonlight: {
          DEFAULT: "#F7F5EF",
          silver: "#C9CDD8",
          dim: "#9DA2B3",
        },
        gold: {
          DEFAULT: "#B8985A",
          bright: "#D9BD7E",
          dim: "#8A734A",
        },
        peacock: {
          DEFAULT: "#1B4B5A",
          bright: "#2C7A8C",
          deep: "#0F2E38",
        },
      },
      fontFamily: {
        display: ["Cormorant", "serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
