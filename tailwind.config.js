/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'illustration-m': "url('./src/assets/illustration-sign-up-mobile.svg')",
        'illustration-d': "url('./src/assets/illustration-sign-up-desktop.svg')",
      },
    },
    colors: {
      ...require("tailwindcss/colors"),
      background: "hsl(234, 29%, 20%)",
      tomato: "hsl(4, 100%, 67%)",
      charcoal: "hsl(235, 18%, 26%)",
      gray: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: "Roboto",
      mono: "monospace",
    },
  },
  plugins: [],
};
